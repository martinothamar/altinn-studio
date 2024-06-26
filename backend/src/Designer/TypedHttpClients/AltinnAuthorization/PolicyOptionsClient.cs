﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Altinn.Studio.Designer.Repository.Models;
using Altinn.Studio.Designer.TypedHttpClients.KubernetesWrapper;
using Microsoft.Extensions.Logging;
using PolicyAdmin.Models;
using static System.Net.WebRequestMethods;

namespace Altinn.Studio.Designer.TypedHttpClients.AltinnAuthorization
{
    public class PolicyOptionsClient : IPolicyOptions
    {
        private readonly HttpClient _client;
        private readonly ILogger<PolicyOptionsClient> _logger;

        public PolicyOptionsClient(HttpClient httpClient, ILogger<PolicyOptionsClient> logger)
        {
            _client = httpClient;
            _logger = logger;
        }

        public async Task<List<ActionOption>> GetActionOptions(CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            // Temp location. Will be moved to CDN
            string url = "https://raw.githubusercontent.com/Altinn/altinn-studio-docs/master/content/authorization/architecture/resourceregistry/actionoptions.json";

            List<ActionOption> actionOptions;

            try
            {
                HttpResponseMessage response = await _client.GetAsync(url, cancellationToken);
                string actionOptionsString = await response.Content.ReadAsStringAsync(cancellationToken);
                actionOptions = System.Text.Json.JsonSerializer.Deserialize<List<ActionOption>>(actionOptionsString);
                return actionOptions;
            }
            catch (Exception ex)
            {
                throw new Exception($"Something went wrong when retrieving Action options", ex);
            }

        }

        public async Task<List<SubjectOption>> GetSubjectOptions(CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            string url = "https://raw.githubusercontent.com/Altinn/altinn-studio-docs/master/content/authorization/architecture/resourceregistry/subjectoptions.json";

            List<SubjectOption> subjectOptions;

            try
            {
                HttpResponseMessage response = await _client.GetAsync(url, cancellationToken);
                string subjectOptionsString = await response.Content.ReadAsStringAsync(cancellationToken);

                subjectOptions = System.Text.Json.JsonSerializer.Deserialize<List<SubjectOption>>(subjectOptionsString);
                return subjectOptions;
            }
            catch (Exception ex)
            {
                throw new Exception($"Something went wrong when retrieving Subject options", ex);
            }
        }

        private string GetOptionsPath()
        {
            string configTest = Path.GetDirectoryName(new Uri(typeof(PolicyOptionsClient).Assembly.Location).LocalPath);
            return Path.Combine(configTest, "Authorization");
        }
    }
}
