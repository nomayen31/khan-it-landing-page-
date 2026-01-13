import React from 'react';

const CTASection = () => {
  return (
    <div className="relative bg-[#004794] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern/Icons */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-white text-6xl">📱</div>
        <div className="absolute top-20 right-20 text-white text-5xl">💼</div>
        <div className="absolute bottom-20 left-1/4 text-white text-4xl">📊</div>
        <div className="absolute top-1/3 right-1/3 text-white text-6xl">🎯</div>
        <div className="absolute bottom-10 right-10 text-white text-5xl">📈</div>
        <div className="absolute top-40 left-1/3 text-white text-4xl">💻</div>
        <div className="absolute bottom-1/3 right-1/4 text-white text-5xl">🚀</div>
        <div className="absolute top-1/2 left-10 text-white text-4xl">⚙️</div>
        
        {/* Additional decorative circles */}
        <div className="absolute top-1/4 right-1/2 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 border-4 border-white rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Book a free strategy session. We'll analyze your business, discuss your goals, and 
          show you exactly how we can help. No commitment required.
        </p>
        <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105 text-lg">
          Book Your Free Consultation
        </button>
      </div>
    </div>
  );
};

export default CTASection;