using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Proy_EnglishPlatform.Startup))]
namespace Proy_EnglishPlatform
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
