import React from 'react'
import { Calendar, Users, Award, Globe } from 'lucide-react'
import img4 from "../../assets/person.png"

const StatCard = ({ icon: Icon, value, label, bgColor, iconColor }) => (
  <div className={`${bgColor} p-6 rounded-2xl transition-all duration-300 hover:shadow-md`}>
    <div className={`w-12 h-12 ${iconColor} bg-opacity-10 rounded-xl flex items-center justify-center mb-4`}>
      <Icon className={iconColor} strokeWidth={2} size={24} />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{value}</h3>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
)

const Badge = ({ icon: Icon, title, subtitle }) => (
  <div className="bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
      <Icon className="text-amber-600" size={20} strokeWidth={2} />
    </div>
    <div>
      <p className="text-sm font-bold text-gray-900">{title}</p>
      <p className="text-xs text-gray-600">{subtitle}</p>
    </div>
  </div>
)

export default function AboutKhanIT() {
  const stats = [
    {
      icon: Calendar,
      value: 'Since 2017',
      label: 'Years of Excellence',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Users,
      value: '8,000+',
      label: 'Trained Professionals',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Award,
      value: '100+',
      label: 'Successful Projects',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Globe,
      value: 'Worldwide',
      label: 'Clients Served',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    }
  ]

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-6">
              About Khan IT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Led by Expertise, Driven by Results
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Khan IT was founded by Md Faruk Khan and Naima Akter Tisha. Faruk Khan is a certified SEO expert and digital marketing trainer with 10+ years of experience, and Tisha Khan is a digital marketing strategist and COO of Khan IT.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="">
              <img
                src={img4}
                alt="Md Faruk Khan - Founder of Khan IT"
                className="w-full h-auto object-cover"
              />

              <div className="absolute top-6 left-6">
                <Badge icon={Award} title="Certified Expert" subtitle="10+ Years Experience" />
              </div>

              <div className="absolute bottom-6 right-6">
                <Badge icon={Globe} title="Global Reach" subtitle="USA, UK, UAE & More" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
