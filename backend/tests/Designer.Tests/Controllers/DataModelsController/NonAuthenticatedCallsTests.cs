﻿using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Altinn.Studio.Designer.Controllers;
using Designer.Tests.Controllers.ApiTests;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Xunit;

namespace Designer.Tests.Controllers.DataModelsController;

public class NonAuthenticatedCallsTests : DisagnerEndpointsTestsBase<NonAuthenticatedCallsTests>, IClassFixture<WebApplicationFactory<Program>>
{
    private static string VersionPrefix(string org, string repository) => $"/designer/api/{org}/{repository}/datamodels";
    private readonly WebApplicationFactory<Program> _factory;

    public NonAuthenticatedCallsTests(WebApplicationFactory<Program> factory) : base(factory)
    {
        _factory = factory;
    }

    [Theory]
    [InlineData("ttd", "hvem-er-hvem")]
    public async Task GetDatamodels_NotAuthenticated_ShouldReturn401(string org, string repo)
    {
        string url = $"{VersionPrefix(org, repo)}/datamodel";
        using var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, url);

        using var response = await HttpClient.SendAsync(httpRequestMessage);

        Assert.Equal(HttpStatusCode.Found, response.StatusCode);
        Assert.Contains("/login/", response.Headers.Location.AbsoluteUri.ToLower());
    }

    // Using httpclient that doesn't have authorize handler that sets up cookie.
    protected override HttpClient GetTestClient()
    {
        string configPath = GetConfigPath();

        var client = _factory.WithWebHostBuilder(builder =>
        {
            builder.ConfigureAppConfiguration((_, conf) => { conf.AddJsonFile(configPath); });

            builder.ConfigureTestServices(ConfigureTestServices);
        }).CreateClient(new WebApplicationFactoryClientOptions() { AllowAutoRedirect = false });
        return client;
    }
}
