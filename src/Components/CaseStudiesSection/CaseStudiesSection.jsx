import React from "react"
import { ArrowRight, TrendingUp } from "lucide-react"

import img1 from "../../assets/Walton_Group.svg 1.png"
import img2 from "../../assets/Hatil 1.png"
import img3 from "../../assets/mir.png"
import img4 from "../../assets/IFADlogo 1.png"

const CaseStudyCard = ({ logo, logoAlt, metric, companyName, industry, description, buttonVariant = "primary" }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#0271E8]">
    {/* Logo and Metric */}
    <div className="flex items-start justify-between mb-6">
      <div className="h-12 flex items-center">
        <img src={logo} alt={logoAlt} className="h-full w-auto object-contain" />
      </div>
      <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
        <TrendingUp className="w-4 h-4" />
        {metric}
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2">
      {companyName}
    </h3>

    <p className="text-sm text-gray-500 mb-4">
      {industry}
    </p>

    <p className="text-gray-600 text-base leading-relaxed mb-6">
      {description}
    </p>

    <button
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        buttonVariant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
      }`}
    >
      View Case Study
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
)

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      logo: img1,
      logoAlt: "Walton Logo",
      metric: "+180% organic traffic",
      companyName: "Walton Hi-Tech Industries PLC",
      industry: "Electronics & Technology",
      description: "Comprehensive SEO strategy that boosted search visibility and brand awareness.",
      buttonVariant: "primary"
    },
    {
      logo: img2,
      logoAlt: "HATIL Logo",
      metric: "+250% online inquiries",
      companyName: "HATIL Furniture",
      industry: "Furniture & Home",
      description: "Full digital transformation including website redesign and targeted advertising.",
      buttonVariant: "secondary"
    },
    {
      logo: img3,
      logoAlt: "Mir Cement Logo",
      metric: "+320% lead generation",
      companyName: "Mir Cement",
      industry: "Construction & Materials",
      description: "B2B digital marketing strategy focused on industrial buyers and distributors.",
      buttonVariant: "secondary"
    },
    {
      logo: img4,
      logoAlt: "IFAD Group Logo",
      metric: "+150% brand visibility",
      companyName: "IFAD Group",
      industry: "Multi-Industry Conglomerate",
      description: "Integrated branding and content strategy across multiple business verticals.",
      buttonVariant: "secondary"
    }
  ]

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 sm:px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Case Studies
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Real Clients, Real Growth
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            We're proud to help businesses grow through proven SEO and digital marketing strategies. Here are a few examples of how our work turned challenges into success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>

      </div>
    </div>
  )
}
