﻿using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Altinn.ApiClients.Maskinporten.Interfaces;
using Altinn.ApiClients.Maskinporten.Models;
using Altinn.Studio.Designer.Configuration;
using Altinn.Studio.Designer.Helpers;
using Altinn.Studio.Designer.Models;
using Altinn.Studio.Designer.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace Altinn.Studio.Designer.Services.Implementation
{
    public class ResourceRegistryService : IResourceRegistry
    {
        private readonly HttpClient _httpClient;
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IMaskinportenService _maskinPortenService;
        private readonly IClientDefinition _maskinportenClientDefinition;
        private readonly PlatformSettings _platformSettings;
        private readonly ResourceRegistryIntegrationSettings _resourceRegistrySettings;
        private readonly ResourceRegistryMaskinportenIntegrationSettings _maskinportenIntegrationSettings;

        public ResourceRegistryService()
        {

        }

        public ResourceRegistryService(HttpClient httpClient, IHttpClientFactory httpClientFactory, IMaskinportenService maskinportenService, IClientDefinition maskinPortenClientDefinition, PlatformSettings platformSettings, IOptions<ResourceRegistryIntegrationSettings> resourceRegistryEnvironment, IOptions<ResourceRegistryMaskinportenIntegrationSettings> maskinportenIntegrationSettings)
        {
            _httpClient = httpClient;
            _httpClientFactory = httpClientFactory;
            _maskinPortenService = maskinportenService;
            _maskinportenClientDefinition = maskinPortenClientDefinition;
            _platformSettings = platformSettings;
            _resourceRegistrySettings = resourceRegistryEnvironment.Value;
            _maskinportenIntegrationSettings = maskinportenIntegrationSettings.Value;
        }

        public async Task<ActionResult> PublishServiceResource(ServiceResource serviceResource, string env, string policyPath = null)
        {
            _maskinportenClientDefinition.ClientSettings = GetMaskinportenIntegrationSettings(env);
            TokenResponse tokenResponse = await GetBearerTokenFromMaskinporten();
            string publishResourceToResourceRegistryUrl;
            string getResourceRegistryUrl;
            string fullWritePolicyToResourceRegistryUrl;


            if (string.IsNullOrEmpty(env))
            {
                return new StatusCodeResult(400);
            }

            //Checks if not tested locally by passing dev as env parameter
            if (!env.ToLower().Equals("dev"))
            {
                publishResourceToResourceRegistryUrl = $"{GetResourceRegistryBaseUrl(env)}{_platformSettings.ResourceRegistryUrl}";
                getResourceRegistryUrl = $"{publishResourceToResourceRegistryUrl}/{serviceResource.Identifier}";
                tokenResponse = await _maskinPortenService.ExchangeToAltinnToken(tokenResponse, env);
                fullWritePolicyToResourceRegistryUrl = $"{GetResourceRegistryBaseUrl(env)}{_platformSettings.ResourceRegistryUrl}/{serviceResource.Identifier}/policy";
            }
            else
            {
                publishResourceToResourceRegistryUrl = $"{_platformSettings.ResourceRegistryDefaultBaseUrl}{_platformSettings.ResourceRegistryUrl}";
                getResourceRegistryUrl = $"{string.Format(_platformSettings.ResourceRegistryDefaultBaseUrl, env)}/{serviceResource.Identifier}";
                fullWritePolicyToResourceRegistryUrl = $"{_platformSettings.ResourceRegistryDefaultBaseUrl}{_platformSettings.ResourceRegistryUrl}/{serviceResource.Identifier}/policy";
            }

            string serviceResourceString = JsonConvert.SerializeObject(serviceResource);
            _httpClientFactory.CreateClient("myHttpClient");
            _httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", tokenResponse.AccessToken);

            if (policyPath != null)
            {
                MultipartFormDataContent content = new MultipartFormDataContent();

                if (ResourceAdminHelper.ValidFilePath(policyPath))
                {
                    byte[] policyFileContentBytes;

                    try
                    {
                        string canonicalPolicyPath = Path.GetFullPath(policyPath);

                        if (canonicalPolicyPath.EndsWith(".xml"))
                        {
                            policyFileContentBytes = File.ReadAllBytes(policyPath);
                        }
                        else
                        {
                            return new StatusCodeResult(400);
                        }
                    }
                    catch (Exception)
                    {
                        Console.WriteLine($"Error while reading policy from path {policyPath}");
                        return new StatusCodeResult(400);
                    }

                    ByteArrayContent fileContent = new ByteArrayContent(policyFileContentBytes);
                    content.Add(fileContent, "policyFile", "policy.xml");
                    HttpResponseMessage writePolicyResponse = await _httpClient.PostAsync(fullWritePolicyToResourceRegistryUrl, content);

                    if (writePolicyResponse.IsSuccessStatusCode)
                    {
                        Console.WriteLine("Policy written successfully!");
                    }
                    else
                    {
                        Console.WriteLine($"Error writing policy. Status code: {writePolicyResponse.StatusCode}");
                        string responseContent = await writePolicyResponse.Content.ReadAsStringAsync();
                        Console.WriteLine($"Response content: {responseContent}");
                        return new StatusCodeResult(400);
                    }
                }
                else
                {
                    Console.WriteLine($"Invalid filepath for policyfile. Path: {policyPath}");
                    return new StatusCodeResult(400);
                }
            }

            HttpResponseMessage getResourceResponse = await _httpClient.GetAsync(getResourceRegistryUrl);

            if (getResourceResponse.IsSuccessStatusCode)
            {
                string putRequest = $"{publishResourceToResourceRegistryUrl}/{serviceResource.Identifier}";
                HttpResponseMessage putResponse = await _httpClient.PutAsync(putRequest, new StringContent(serviceResourceString, Encoding.UTF8, "application/json"));
                return putResponse.IsSuccessStatusCode ? new StatusCodeResult(200) : new StatusCodeResult(400);
            }

            HttpResponseMessage response = await _httpClient.PostAsync(publishResourceToResourceRegistryUrl, new StringContent(serviceResourceString, Encoding.UTF8, "application/json"));

            return GetPublishResponse(response);
        }

        private async Task<TokenResponse> GetBearerTokenFromMaskinporten()
        {
            return await _maskinPortenService.GetToken(_maskinportenClientDefinition.ClientSettings.EncodedJwk, _maskinportenClientDefinition.ClientSettings.Environment, _maskinportenClientDefinition.ClientSettings.ClientId, _maskinportenClientDefinition.ClientSettings.Scope, _maskinportenClientDefinition.ClientSettings.Resource, _maskinportenClientDefinition.ClientSettings.ConsumerOrgNo);
        }

        private StatusCodeResult GetPublishResponse(HttpResponseMessage response)
        {
            if (response.StatusCode == HttpStatusCode.Created)
            {
                return new StatusCodeResult(201);
            }
            else if (response.StatusCode == HttpStatusCode.Conflict)
            {
                return new StatusCodeResult(409);
            }
            else
            {
                return new StatusCodeResult(400);
            }
        }

        private string GetResourceRegistryBaseUrl(string env)
        {
            if (!_resourceRegistrySettings.TryGetValue(env, out ResourceRegistryEnvironmentSettings envSettings))
            {
                throw new ArgumentException($"Invalid environment. Missing environment config for {env}");
            }

            return envSettings.ResourceRegistryEnvBaseUrl;
        }

        private MaskinportenClientSettings GetMaskinportenIntegrationSettings(string env)
        {
            string maskinportenEnvironment = env == "prod" ? "prod" : "test";
            if (!_maskinportenIntegrationSettings.TryGetValue(maskinportenEnvironment, out MaskinportenClientSettings maskinportenClientSettings))
            {
                throw new ArgumentException($"Invalid environment. Missing Maskinporten config for {env}");
            }

            return maskinportenClientSettings;
        }
    }
}