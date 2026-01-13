import React from "react"
import PillButton from "../Common/PillButton"

import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"
import icon6 from "../../assets/icon6.png"
import icon7 from "../../assets/icon7.png"
import icon8 from "../../assets/icon8.png"

const ServiceCard = ({ icon, title, description }) => (
  <div
    className="p-6 rounded-2xl border bg-white border-gray-200
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-xl
    hover:border-blue-400
    hover:bg-blue-50"
  >
    <div className="mb-4">
      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {title}
    </h3>

    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
)

export default function DigitalMarketingServices() {
  const services = [
    {
      icon: icon1,
      title: "SEO Service",
      description: "Improve Google rankings and gain consistent, long-term traffic."
    },
    {
      icon: icon2,
      title: "Web Design",
      description: "Create websites that convert visitors into customers."
    },
    {
      icon: icon3,
      title: "Facebook Ads",
      description: "Connect with your target audience on their preferred platforms."
    },
    {
      icon: icon4,
      title: "Google Ads",
      description: "Reach customers actively searching for your services."
    },
    {
      icon: icon5,
      title: "Content Writing",
      description: "Build trust and improve Google rankings with compelling content."
    },
    {
      icon: icon6,
      title: "Branding",
      description: "Differentiate your business and build customer loyalty."
    },
    {
      icon: icon7,
      title: "UI/UX Design",
      description: "Design user experiences that increase Conversions."
    },
    {
      icon: icon8,
      title: "Graphic Design",
      description: "Develop professional visuals to enhance trust and credibility."
    }
  ]

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <PillButton text="Our Services" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Full-stack Digital Marketing Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We manage your complete digital presence so you can focus on your core business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
