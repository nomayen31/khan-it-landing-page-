import { useState } from "react"
import { ChevronDown, Phone, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../../assets/navlogo.png"

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav
      className="w-full flex justify-center sticky top-0 z-[100]"
      style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 50%, #FFF5F1 100%)" }}
    >
      {/* 1420px container */}
      <div className="w-full max-w-[1420px] h-[74px] flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Khan IT" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu (1024px+) */}
        <div className="hidden lg:flex justify-center w-[763px]">
          <div className="flex items-center gap-[48px]">

            <Link to="/" className="text-[16px] font-medium text-gray-800 hover:text-blue-600 transition">
              Home
            </Link>

            <Link to="/about" className="text-[16px] font-medium text-gray-800 hover:text-blue-600 transition">
              About
            </Link>

            {/* Services */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-[16px] font-medium text-gray-800 hover:text-blue-600 transition"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-[40px] left-0 w-56 bg-white rounded-xl shadow-xl border py-3 z-50">
                  <Link to="/services/web" className="block px-4 py-2 hover:bg-blue-50">
                    Web Development
                  </Link>
                  <Link to="/services/seo" className="block px-4 py-2 hover:bg-blue-50">
                    SEO Services
                  </Link>
                  <Link to="/services/marketing" className="block px-4 py-2 hover:bg-blue-50">
                    Digital Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link to="/case-study" className="text-[16px] font-medium text-gray-800 hover:text-blue-600 transition">
              SEO Case Study
            </Link>

            <Link to="/contact" className="text-[16px] font-medium text-gray-800 hover:text-blue-600 transition">
              Contact Us
            </Link>

          </div>
        </div>

        {/* Call Button */}
        <div className="hidden lg:flex">
          <a
            href="tel:+8801404282727"
            className="w-[250px] h-[50px] bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-blue-700 transition"
          >
            <Phone className="w-5 h-5" />
            +8801404282727
          </a>
        </div>

        {/* Mobile / Tablet menu button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-[74px] left-0 w-full shadow-lg py-6 px-6 space-y-4 lg:hidden z-50"
          style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 50%, #FFF5F1 100%)" }}
        >

          <Link to="/" className="block">Home</Link>
          <Link to="/about" className="block">About</Link>

          <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center gap-1">
            Services <ChevronDown className="w-4 h-4" />
          </button>

          {isServicesOpen && (
            <div className="pl-4 space-y-2">
              <Link to="/services/web" className="block">Web Development</Link>
              <Link to="/services/seo" className="block">SEO Services</Link>
              <Link to="/services/marketing" className="block">Digital Marketing</Link>
            </div>
          )}

          <Link to="/case-study" className="block">SEO Case Study</Link>
          <Link to="/contact" className="block">Contact Us</Link>

          <a
            href="tel:+8801404282727"
            className="w-full h-[50px] bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 font-semibold"
          >
            <Phone className="w-5 h-5" />
            +8801404282727
          </a>
        </div>
      )}
    </nav>
  )
}
