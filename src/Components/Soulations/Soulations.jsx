import React from 'react'
import {
    ShoppingCart,
    Plane,
    MapPin,
    Building,
    Heart,
    Briefcase,
    Rocket
} from 'lucide-react'

const IndustryCard = ({ icon: Icon, title, description, highlighted = false }) => (
    <div
        className={`group p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg
  ${highlighted ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-200'}
  hover:border-[#0271E8]
`}

    >
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 transition group-hover:border-[#0271E8]">

            <div className="w-14 h-14 flex-shrink-0">
                <Icon
                    className="w-full h-full text-gray-800 transition group-hover:text-[#0271E8]"
                    strokeWidth={1.5}
                />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 transition group-hover:text-[#0271E8]">
                {title}
            </h3>
        </div>

        <p className="text-gray-600 text-base leading-relaxed">
            {description}
        </p>
    </div>
)

export default function IndustriesWeServe() {
    const industries = [
        {
            icon: ShoppingCart,
            title: 'E-commerce & Retail',
            description:
                'Increase sales, optimize product pages, and reduce cart abandonment. Additionally, enhance customer engagement through personalized recommendations.',
            highlighted: true
        },
        {
            icon: Plane,
            title: 'Travel & Tourism',
            description:
                'Increase bookings, boost visibility, and attract international customers. Additionally, enhance your marketing strategies to reach a wider audience.'
        },
        {
            icon: MapPin,
            title: 'Local Services',
            description:
                'Dominate local search, increase emergency calls, and build a local customer base. Additionally, enhance your online presence to attract even more clients.'
        },
        {
            icon: Building,
            title: 'Real Estate',
            description:
                'Generate qualified leads, showcase properties online, close more deals, and enhance your marketing strategies to reach a broader audience.'
        },
        {
            icon: Heart,
            title: 'Health & Wellness',
            description:
                'Attract more patients and clients, build trust, and improve your online presence. Engaging with your audience through social media can further enhance your visibility.'
        },
        {
            icon: Briefcase,
            title: 'Professional Services',
            description:
                'Build authority, attract high-value clients, and establish thought leadership. Consistently sharing valuable insights will further enhance your credibility.'
        },
        {
            icon: Rocket,
            title: 'SaaS & Tech Startups',
            description:
                'Grow user base, increase sign-ups, build market presence. Additionally, enhance customer engagement through targeted marketing strategies.'
        }
    ]

    return (
        <div className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block px-4 sm:px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        Industries We Serve
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                        Digital Solutions for Every Industry
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                        Regardless of your industry, our digital marketing solutions adapt to your goals, audience, and market.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industries.map((industry, index) => (
                        <IndustryCard
                            key={index}
                            icon={industry.icon}
                            title={industry.title}
                            description={industry.description}
                            highlighted={industry.highlighted}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}
