import React from 'react';
import { Target, Rocket, TrendingUp, Handshake } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Strategy",
      description: "We start by understanding your business, goals, and audience. We analyze your market and competitors, then build a clear strategy tailored to your specific needs.",
      icon: Target,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      numberColor: "text-blue-600",
      arrowColor: "border-blue-400"
    },
    {
      id: "02",
      title: "Execution",
      description: "Our team implements and optimizes all elements according to the strategy for conversions. Campaigns are launched and monitored.",
      icon: Rocket,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
      numberColor: "text-orange-500",
      arrowColor: "border-orange-400"
    },
    {
      id: "03",
      title: "Results & Reporting",
      description: "We track all relevant metrics. You see exactly what is working and what needs adjustment. Regular reports keep you informed. There is no guesswork, only data.",
      icon: TrendingUp,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-500",
      numberColor: "text-teal-500",
      arrowColor: "border-teal-400"
    },
    {
      id: "04",
      title: "Optimization & Support",
      description: "Digital marketing is an ongoing process. We continuously test, optimize, and improve. You receive 30 days of complimentary post-launch support.",
      icon: Handshake,
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500",
      numberColor: "text-amber-500",
      arrowColor: "border-amber-400"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Deliver Real Growth
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every successful project begins with a clear and transparent strategy.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector lines */}
          <div className="hidden lg:flex absolute top-24 left-0 right-0 justify-between px-32">
            <svg className="w-full h-16" style={{ position: 'absolute', left: '12%', right: '12%', width: '76%' }}>
              {/* First curved arrow - blue */}
              <path
                d="M 0 20 Q 100 -10, 200 20"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeDasharray="6,6"
              />
              <polygon points="200,20 195,15 195,25" fill="#60a5fa" />
              
              {/* Second curved arrow - orange */}
              <path
                d="M 280 20 Q 380 50, 480 20"
                fill="none"
                stroke="#fb923c"
                strokeWidth="2"
                strokeDasharray="6,6"
              />
              <polygon points="480,20 475,15 475,25" fill="#fb923c" />
              
              {/* Third curved arrow - teal */}
              <path
                d="M 560 20 Q 660 -10, 760 20"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="2"
                strokeDasharray="6,6"
              />
              <polygon points="760,20 755,15 755,25" fill="#14b8a6" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10">
                {/* Icon Circle */}
                <div className={`relative w-32 h-32 ${step.bgColor} rounded-full flex items-center justify-center mb-6`}>
                  <step.icon className={`w-14 h-14 ${step.iconColor}`} strokeWidth={1.5} />
                  <span className={`absolute top-3 right-3 ${step.numberColor} text-lg font-bold`}>
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;