import React from 'react';
import { Target, Users, Award, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    { icon: Target, label: 'Result-Driven Approach', color: 'text-blue-500' },
    { icon: Users, label: 'Expert Team', color: 'text-purple-500' },
    { icon: Award, label: 'Proven Track Record', color: 'text-orange-500' },
  ];

  const achievements = [
    { number: '500+', label: 'Successful Campaigns', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '5+', label: 'Years Experience', icon: Clock },
  ];

  const whyChooseUs = [
    'Local expertise in Chandra Layout market',
    'Customized strategies for each business',
    'Transparent reporting and analytics',
    'Dedicated account managers',
    'Proven ROI improvement',
    '24/7 customer support'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About DigiBoost</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading digital marketing agency in Chandra Layout, helping businesses grow online
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in the heart of Chandra Layout, DigiBoost has been at the forefront of digital 
                transformation for local businesses. We understand the unique challenges and opportunities 
                in the Bangalore market, especially in the vibrant Chandra Layout area.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses in Chandra Layout and beyond with cutting-edge digital marketing 
                strategies that drive real results. We believe in transparent communication, data-driven 
                decisions, and building long-term partnerships with our clients.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <span className="font-medium text-gray-800 text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital Marketing Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose DigiBoost?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
              <div className="text-gray-600 font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;