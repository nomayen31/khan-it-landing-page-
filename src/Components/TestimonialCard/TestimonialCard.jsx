import React, { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCard = ({ rating, text, name, position, avatar }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
      ))}
    </div>
    
    {/* Testimonial Text */}
    <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
      "{text}"
    </p>
    
    {/* Author Info */}
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      rating: 5,
      text: "Khan IT transformed our online presence completely. Within 6 months, we saw a 200% increase in qualified leads. Their SEO expertise is unmatched.",
      name: "Abdur Rahman",
      position: "CEO, Walton",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      rating: 5,
      text: "Professional, transparent, and results-driven. The team at Khan IT doesn't just promise they deliver. Our conversion rate doubled after working with them.",
      name: "Asif Khan",
      position: "Marketing Director, IFAD Group",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      rating: 5,
      text: "From website redesign to complete SEO overhaul, Khan IT handled everything seamlessly. Our e-commerce sales have never been better.",
      name: "Karim Hossain",
      position: "CEO, HATIL",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    {
      rating: 5,
      text: "The digital marketing strategy they created for us was a game-changer. We've seen a 300% increase in online inquiries and our brand visibility has skyrocketed.",
      name: "Nadia Ahmed",
      position: "Founder, StyleBazar",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      rating: 5,
      text: "Working with Khan IT was one of the best decisions we made. Their data-driven approach and attention to detail helped us dominate our local market.",
      name: "Rafiq Islam",
      position: "Owner, Bengal Restaurant",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      rating: 5,
      text: "Exceptional service from start to finish. They not only improved our search rankings but also helped us understand our customers better through detailed analytics.",
      name: "Sadia Karim",
      position: "Marketing Manager, ACI Limited",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      rating: 5,
      text: "Khan IT's expertise in both traditional and AI-driven marketing strategies gave us a competitive edge. Our ROI has increased by 250% in just 8 months.",
      name: "Tanvir Rahman",
      position: "COO, Paperfly",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    {
      rating: 5,
      text: "Their team is incredibly responsive and knowledgeable. They transformed our outdated website into a modern, high-converting platform that our customers love.",
      name: "Mehreen Haque",
      position: "Director, Bengal Properties",
      avatar: "https://i.pravatar.cc/150?img=10"
    }
  ];

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const visibleTestimonials = testimonials.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 sm:px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Testimonials
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            What Clients Say About Khan IT on Clutch
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            We're proud to be recognized on Clutch, one of the world's most trusted review platforms for digital agencies. Our clients share their honest feedback about our SEO, web design, and marketing work, and their results speak for themselves.
          </p>
        </div>

       

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard key={currentSlide * itemsPerPage + index} {...testimonial} />
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://clutch.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Read More Verified Reviews on Clutch
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}