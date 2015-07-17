using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Proy_English_Platf.Startup))]
namespace Proy_English_Platf
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
