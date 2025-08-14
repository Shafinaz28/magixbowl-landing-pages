import React from 'react';
import { Search, Users, MousePointer, Facebook, Palette, BarChart3 } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO (Search Engine Optimization)',
      description: 'Boost your website\'s visibility on Google with our proven SEO strategies. Get more organic traffic and higher rankings.',
      features: [
        'Keyword research & optimization',
        'On-page & technical SEO',
        'Link building campaigns',
        'Local SEO for Chandra Layout',
        'SEO audits & reporting'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'SMO (Social Media Optimization)',
      description: 'Build a strong social media presence across all platforms. Engage your audience and grow your brand community.',
      features: [
        'Social media strategy',
        'Content creation & curation',
        'Community management',
        'Social media analytics',
        'Influencer partnerships'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MousePointer,
      title: 'Google AdWords',
      description: 'Drive immediate traffic with targeted Google Ads campaigns. Maximize your ROI with expert campaign management.',
      features: [
        'Search ads campaigns',
        'Display advertising',
        'Shopping ads setup',
        'Remarketing campaigns',
        'Performance optimization'
      ],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Facebook,
      title: 'Meta Ads (Facebook & Instagram)',
      description: 'Reach your target audience on Facebook and Instagram with compelling ad campaigns that convert.',
      features: [
        'Facebook ads management',
        'Instagram advertising',
        'Audience targeting',
        'Creative optimization',
        'Conversion tracking'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Create stunning visuals that capture attention and communicate your brand message effectively.',
      features: [
        'Logo & brand design',
        'Social media graphics',
        'Web design elements',
        'Print design materials',
        'Ad creative design'
      ],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing Analytics',
      description: 'Track, measure, and optimize your digital marketing performance with comprehensive analytics.',
      features: [
        'Google Analytics setup',
        'Conversion tracking',
        'Performance reporting',
        'ROI analysis',
        'Data-driven insights'
      ],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to grow your business in Chandra Layout and beyond
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              {/* Service Header */}
              <div className={`${service.bgColor} p-6 relative overflow-hidden`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              </div>

              {/* Service Features */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Boost Your Digital Presence?
            </h3>
            <p className="text-gray-600 mb-6">
              Let our expert team create a customized digital marketing strategy that drives real results for your business.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Free Strategy Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;