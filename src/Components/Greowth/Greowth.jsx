import React from 'react';
import { TrendingUp, BarChart3, Users, Star } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, iconBgColor, valueColor }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col items-center text-center">
      <div className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mb-6`}>
        <Icon className="w-8 h-8" strokeWidth={2} />
      </div>
      <div className={`text-5xl font-bold mb-3 ${valueColor}`}>
        {value}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {label}
      </p>
    </div>
  </div>
);

export default function ProvenResults() {
  const stats = [
    {
      icon: TrendingUp,
      value: '150%',
      label: 'Average Increase in Online Inquiries',
      iconBgColor: 'bg-orange-50',
      valueColor: 'text-orange-500'
    },
    {
      icon: BarChart3,
      value: '2.5x',
      label: 'Higher Conversion Rates',
      iconBgColor: 'bg-emerald-50',
      valueColor: 'text-emerald-500'
    },
    {
      icon: Users,
      value: '70%',
      label: 'New Business from Referrals',
      iconBgColor: 'bg-blue-50',
      valueColor: 'text-blue-500'
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Client Satisfaction Rating',
      iconBgColor: 'bg-amber-50',
      valueColor: 'text-amber-500'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 sm:px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Proven Results
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Results That Speak for Themselves
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We focus on measurable outcomes that directly impact your bottom line.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              iconBgColor={stat.iconBgColor}
              valueColor={stat.valueColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}