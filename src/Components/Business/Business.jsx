import React from 'react';
import { Users, Settings, DollarSign, TrendingUp, Brain, Layers } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div
    className="
      group p-6 sm:p-8 rounded-2xl border border-blue-800/50
      bg-gradient-to-br from-blue-900/30 to-blue-800/20
      transition-all duration-300
      hover:shadow-2xl hover:shadow-blue-500/20
      hover:border-blue-500
      hover:bg-gradient-to-br hover:from-blue-900/60 hover:to-blue-800/40
    "
  >
    <div className="mb-4 sm:mb-6">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center transition group-hover:bg-blue-500">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-200" />
      </div>
    </div>

    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 transition group-hover:text-blue-400">
      {title}
    </h3>

    <p className="text-sm sm:text-base text-gray-300 leading-relaxed transition group-hover:text-blue-300">
      {description}
    </p>
  </div>
);

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: 'Expert-Led by a Proven SEO Specialist',
      description: 'Khan IT is founded and led by Md Faruk Khan, a certified SEO expert with over 10 years of experience and more than 8,000 trained professionals.'
    },
    {
      icon: Settings,
      title: 'Specialized in What Works',
      description: 'We specialize in digital marketing and web design. This focus enables faster delivery, higher quality, and stronger ROI.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'You will always know exactly what you are paying for, with clear pricing, no hidden fees, and flexible packages.'
    },
    {
      icon: TrendingUp,
      title: 'Proven, Measurable Results',
      description: 'Our clients experience an average 150% increase in inquiries and a higher conversion rate with a 4.8/5 satisfaction rating.'
    },
    {
      icon: Brain,
      title: 'AI-First, Data-Driven Approach',
      description: 'We utilize AI and real-world data to inform marketing decisions. Every campaign is meticulously designed.'
    },
    {
      icon: Layers,
      title: 'Full-Stack Digital Marketing',
      description: 'Our SEO, advertising, content, design, and branding services work together as a cohesive system.'
    }
  ];

  return (
    <div className="w-full bg-linear-to-b from-slate-900 via-blue-950 to-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 sm:px-5 py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-500/30">
            Why Choose Us
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
            Why 100+ Businesses Choose Khan IT
          </h1>

          <div className="max-w-3xl mx-auto space-y-2 px-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              You have options. So why do so many businesses in Bangladesh choose Khan IT?
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Simple — we deliver real results, not buzzwords.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}