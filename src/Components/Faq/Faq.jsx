import React, { useState } from 'react';
import { Plus, X, HelpCircle } from 'lucide-react';
import PillButton from '../Common/PillButton';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
  {
    "question": "What Digital Marketing Services Do You Offer?",
    "answer": "We provide full-stack digital marketing services including SEO, Google Ads, Facebook & Instagram Ads, Web Design & Development, Content Writing, Branding, Conversion Rate Optimization, and Local SEO. Everything is designed to work together to generate leads, sales, and long-term growth."
  },
  {
    "question": "How Long Does It Take To See Results?",
    "answer": "The timeline depends on the service. SEO usually takes 3–6 months to show strong results, while paid advertising (Google & Facebook Ads) can generate leads within weeks. Most of our clients experience a 100–150% increase in inquiries within the first 90 days."
  },
  {
    "question": "What's The Typical Cost Of Your Services?",
    "answer": "Our pricing depends on your business size, goals, and services required. We offer flexible packages starting from affordable monthly plans for small businesses to advanced growth packages for large companies. You only pay for what you need—no hidden fees."
  },
  {
    "question": "How Is Khan IT Different From Other Agencies?",
    "answer": "Khan IT is led by a certified SEO expert with 10+ years of experience and 8,000+ trained professionals. We don’t guess—we use data, proven strategies, and AI-powered optimization to deliver real, measurable results instead of empty promises."
  },
  {
    "question": "Do You Offer Custom Solutions?",
    "answer": "Yes. Every business is different, so we create fully customized marketing strategies based on your goals, industry, budget, and competition. You get a tailored growth plan, not a one-size-fits-all package."
  },
  {
    "question": "What If I'm Not Satisfied With Results?",
    "answer": "We believe in transparency and accountability. If performance is not meeting expectations, we analyze the data, adjust the strategy, and optimize until we get results. Our long-term client relationships are built on trust and performance."
  },
  {
    "question": "How Do I Get Started?",
    "answer": "Getting started is easy. Simply book a free consultation. We’ll analyze your business, discuss your goals, and recommend the best strategy to grow your leads and sales."
  },
  {
    "question": "What is Khan IT?",
    "answer": "Khan IT is a full-service digital marketing and web solutions agency that helps businesses grow online through SEO, advertising, branding, and high-converting websites."
  },
  {
    "question": "Who is the founder of Khan IT?",
    "answer": "Khan IT was founded by Md Faruk Khan, a certified SEO expert and digital marketing trainer with over 10 years of experience in helping businesses grow online."
  },
  {
    "question": "When was Khan IT founded?",
    "answer": "Khan IT was founded in 2017 and has since helped hundreds of businesses locally and internationally achieve strong digital growth."
  },
  {
    "question": "Does Khan IT only serve local clients?",
    "answer": "No. We serve clients globally, including businesses in the USA, UK, UAE, Europe, and other international markets. Our digital strategies work worldwide."
  }
]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
         <PillButton text={"FAQ"}/>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">Have questions? We have answers. Here are some common client inquiries.</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <X className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && faq.answer && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 rounded-full p-3">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            If you didn't find your answer here, visit our full FAQ page to learn more about our services and support.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Visit Full FAQ Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;