using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(TetrisDemo.Startup))]

namespace TetrisDemo
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
