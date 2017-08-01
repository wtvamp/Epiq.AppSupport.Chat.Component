using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

namespace SayHiComponent
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMemoryCache();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseStaticFiles();

            app.Run(async (context) =>
            {
                using (var reader = new StreamReader(File.OpenRead("wwwroot/index.html")))
                    await context.Response.WriteAsync(reader.ReadToEnd());
            });
        }
    }
}