using OrchardCore.ResourceManagement;

namespace SafoxCore.Cura.Web
{
    public class ResourceManifest : IResourceManifestProvider
    {

        public void BuildManifests(IResourceManifestBuilder builder)
        {
            var manifest = builder.Add();

            manifest.DefineScript("gridReadParams").SetUrl("~/SafoxCore.Cura.Web/js/Common/gridReadParams.js");
        }
    }
}
