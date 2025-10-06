import React from 'react';
import ContentContainer from '../ContentContainer';

interface EmbedProps {
  onToggleSidebar: () => void;
}

const Embed: React.FC<EmbedProps> = ({ onToggleSidebar }) => {
  return (
    <ContentContainer title="Embed" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-auto">
        <div className="max-w-3xl mx-auto py-6 px-6">
          <div className="space-y-8">
            <p className="text-sm text-gray-500">
              Give site visitors and members easy ways to interact with your
              community on your own website.
            </p>

            {/* Community widget */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Community widget
              </h3>
              <p className="text-sm text-gray-500">
                Add a community icon to the bottom right-hand corner of your
                website. When members click on the icon, your community will pop
                up in a modal. You&apos;ll need to copy this code to the head
                section of your website.
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-xs text-gray-800 overflow-x-auto">
                  {`<script>
  window.circleWidget = {
    community_public_uid: 'ea6d1607',
    brand_color_dark: '#8583FF',
    brand_color_light: '#2567eb',
    default_appearance: 'light'
  };
  // mw['setDefaults']({ space_slug: 'your-space-slug' });
  // mw['setDefaults']({ post_slug: 'your-post-slug' });
</script>
<script src="https://circle.upfront.so/external/widget.js"></script>`}
                </pre>
              </div>
            </div>

            {/* Post widget */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Post widget</h3>
              <p className="text-sm text-gray-500">
                Using an iFrame, embed the comments section of a post to a page
                on your website. Unless a member is logged in, this will only
                work for publicly visible posts.
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-xs text-gray-800 overflow-x-auto">
                  {`<script>
  const meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0';
  document.head.appendChild(meta);

  window.addEventListener('message', function(event) {
    if (event.data.type === 'resize') {
      document.getElementById('iframe').style.height = event.data.height + 'px';
    }
  });

  document.write('<iframe id="iframe" style="max-width:800px;border:0;box-shadow:none;outline:0;" src="https://circle.upfront.so/c/[SPACE_SLUG_GOES_HERE]/[POST_SLUG_GOES_HERE]?iframe=true&post=true" scrolling="no" width="100%"></iframe>');
</script>`}
                </pre>
              </div>
            </div>

            {/* Space widget */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Space widget
              </h3>
              <p className="text-sm text-gray-500">
                Using an iFrame, embed the posts section of a space to your
                website. Private spaces will show the locked state.
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-xs text-gray-800 overflow-x-auto">
                  {`<iframe style="border: 0; box-shadow: none; width: 800px; height: 80vh" src="https://circle.upfront.so/c/[SPACE_SLUG_GOES_HERE]?iframe=true"></iframe>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Embed;
