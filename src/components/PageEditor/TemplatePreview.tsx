import React from 'react';

interface TemplatePreviewProps {
  templateId: string;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ templateId }) => {
  const renderTemplatePreview = () => {
    switch (templateId) {
      case 'homepage':
        return (
          <div className="w-full h-full bg-white text-xs">
            {/* Header */}
            <div className="bg-blue-600 p-2 text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold">Growth Network</div>
                <div className="text-xs">Enroll now</div>
              </div>
              <div className="text-xs">Home • About • Courses • Services</div>
            </div>

            {/* Hero Section */}
            <div className="bg-blue-600 p-3 text-white">
              <div className="text-sm font-bold mb-1">
                Lead with confidence. Grow with community.
              </div>
              <div className="text-xs mb-2">
                Build meaningful connections...
              </div>
              <div className="flex space-x-1">
                <div className="bg-blue-800 px-2 py-1 text-xs rounded">
                  Book session
                </div>
                <div className="bg-white text-blue-600 px-2 py-1 text-xs rounded">
                  Join community
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="p-2 bg-white">
              <div className="text-xs font-bold mb-2">
                Transform your leadership
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-center">
                  <div className="w-4 h-4 bg-blue-100 rounded mx-auto mb-1"></div>
                  <div className="text-xs">1:1 Executive</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-blue-100 rounded mx-auto mb-1"></div>
                  <div className="text-xs">Leadership</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-blue-100 rounded mx-auto mb-1"></div>
                  <div className="text-xs">Community</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sales':
        return (
          <div className="w-full h-full bg-white text-xs">
            {/* Header */}
            <div className="bg-blue-600 p-2 text-white">
              <div className="text-xs font-bold">Growth Network</div>
            </div>

            {/* Hero */}
            <div className="bg-blue-600 p-3 text-white">
              <div className="text-sm font-bold mb-1">
                Unlock your full potential
              </div>
              <div className="text-xs mb-2">with expert coaching</div>
            </div>

            {/* Problem/Vision */}
            <div className="p-2 bg-white">
              <div className="text-xs font-bold mb-2">
                Are you struggling to reach your full potential?
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-xs font-semibold">The problem</div>
                  <div className="text-xs text-gray-600">
                    • Lack of direction
                  </div>
                  <div className="text-xs text-gray-600">• No support</div>
                </div>
                <div>
                  <div className="text-xs font-semibold">The vision</div>
                  <div className="text-xs text-gray-600">• Clear path</div>
                  <div className="text-xs text-gray-600">• Expert guidance</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="w-full h-full bg-white text-xs">
            {/* Header */}
            <div className="bg-blue-600 p-2 text-white">
              <div className="text-xs font-bold">Growth Network</div>
            </div>

            {/* Hero */}
            <div className="bg-blue-600 p-3 text-white">
              <div className="text-sm font-bold mb-1">
                Our journey to helping you grow
              </div>
              <div className="text-xs">with community</div>
            </div>

            {/* Stats */}
            <div className="p-2 bg-white">
              <div className="text-xs font-bold mb-2">Clarity coaching</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center">
                  <div className="text-xs font-bold">94%</div>
                  <div className="text-xs text-gray-600">Success rate</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold">150+</div>
                  <div className="text-xs text-gray-600">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold">12+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold">30+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="w-full h-full bg-white text-xs">
            {/* Header */}
            <div className="bg-blue-600 p-2 text-white">
              <div className="text-xs font-bold">Growth Network</div>
            </div>

            {/* Title */}
            <div className="p-2 bg-white">
              <div className="text-sm font-bold mb-3">
                Invest in your transformation
              </div>

              {/* Pricing Cards */}
              <div className="space-y-2">
                <div className="border border-gray-200 rounded p-2">
                  <div className="text-xs font-bold">Essential</div>
                  <div className="text-xs font-bold text-blue-600">$3,987</div>
                  <div className="text-xs text-gray-600">✓ Basic coaching</div>
                </div>
                <div className="border border-blue-500 rounded p-2 bg-blue-50">
                  <div className="text-xs font-bold">Pro</div>
                  <div className="text-xs font-bold text-blue-600">$3,987</div>
                  <div className="text-xs text-gray-600">
                    ✓ Advanced features
                  </div>
                </div>
                <div className="border border-gray-200 rounded p-2">
                  <div className="text-xs font-bold">VIP Experience</div>
                  <div className="text-xs font-bold text-blue-600">$12,987</div>
                  <div className="text-xs text-gray-600">✓ Premium support</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div className="w-full h-full bg-white text-xs">
            {/* Header */}
            <div className="bg-blue-600 p-2 text-white">
              <div className="text-xs font-bold">Growth Network</div>
            </div>

            {/* Title */}
            <div className="p-2 bg-white">
              <div className="text-sm font-bold mb-2">
                Success stories, real transformation
              </div>

              {/* Testimonial */}
              <div className="border border-gray-200 rounded p-2">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="text-xs font-semibold">Sarah Johnson</div>
                    <div className="text-xs text-gray-600">
                      &ldquo;Clarity Coaching transformed my
                      leadership...&rdquo;
                    </div>
                    <div className="text-xs text-blue-600 mt-1">Read more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="w-full h-full bg-white text-xs">
            {/* Header */}
            <div className="bg-blue-600 p-2 text-white">
              <div className="text-xs font-bold">Growth Network</div>
            </div>

            {/* Content */}
            <div className="p-2 bg-white">
              <div className="text-sm font-bold mb-2">Get in touch</div>

              <div className="space-y-2">
                <div className="text-xs">
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-600">123 Business St, City</div>
                </div>
                <div className="text-xs">
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
                <div className="text-xs">
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600">hello@growthnetwork.com</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'blog-listing':
        return (
          <div className="w-full h-full bg-white text-xs">
            {/* Header */}
            <div className="bg-blue-600 p-2 text-white">
              <div className="text-xs font-bold">Growth Network</div>
            </div>

            {/* Content */}
            <div className="p-2 bg-white">
              <div className="text-sm font-bold mb-2">
                Insights & ideas for growing leaders
              </div>

              <div className="space-y-2">
                <div className="border border-gray-200 rounded p-1">
                  <div className="w-full h-8 bg-gray-200 rounded mb-1"></div>
                  <div className="text-xs font-semibold">Leadership Tips</div>
                  <div className="text-xs text-gray-600">
                    Essential strategies...
                  </div>
                </div>
                <div className="border border-gray-200 rounded p-1">
                  <div className="w-full h-8 bg-gray-200 rounded mb-1"></div>
                  <div className="text-xs font-semibold">
                    Community Building
                  </div>
                  <div className="text-xs text-gray-600">How to build...</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'blog':
        return (
          <div className="w-full h-full bg-white text-xs">
            {/* Header */}
            <div className="bg-blue-600 p-2 text-white">
              <div className="text-xs font-bold">Growth Network</div>
            </div>

            {/* Content */}
            <div className="p-2 bg-white">
              <div className="text-sm font-bold mb-2">
                From passive to participatory
              </div>
              <div className="text-xs text-gray-600 mb-2">
                rethinking community value
              </div>

              <div className="w-full h-12 bg-gray-200 rounded mb-2"></div>

              <div className="text-xs font-semibold mb-1">
                The Shift from Consumption to Contribution
              </div>
              <div className="text-xs text-gray-600">
                How communities evolve...
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="text-xs text-gray-500">Template Preview</div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full transform origin-top-left">
      {renderTemplatePreview()}
    </div>
  );
};

export default TemplatePreview;
