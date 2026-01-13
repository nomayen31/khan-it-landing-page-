import topIcon from "../../assets/hero, top icon.png"

import img1 from "../../assets/Container+Gradient.png"
import img2 from "../../assets/herovideo2.png"
import img3 from "../../assets/hero3.png"
import img4 from "../../assets/hero4.png"
import bg from "../../assets/01.png"

export default function HeroSection() {
  return (
    <section
      className="w-full flex justify-center py-20 px-4 bg-no-repeat bg-top bg-cover relative mb-[120px] mt-[74px]"
      style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 50%, #FFF5F1 100%)" }}
    >

      <div className="relative w-full max-w-[1400px] flex flex-col lg:flex-row justify-between gap-16">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[718px] flex flex-col justify-center">
          <div className="mb-10">
            <div className="relative inline-block">
              <h1 className="font-['DM Sans'] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight lg:leading-[1.05] text-black">
                Digital{" "}
                <span className="relative inline-block">
                  Marketing
                  <img
                    src={topIcon}
                    alt="Decoration"
                    className="absolute -top-2 -right-4 sm:-top-2 sm:-right-6 w-[44px] sm:w-[56px] min-w-[44px] pointer-events-none select-none"
                  />
                </span>
                <br />
                Agency in <br />
                Bangladesh
              </h1>
            </div>
          </div>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-[620px] mb-10">
            Khan IT (led by SEO expert Md Faruk Khan) helps businesses get 150%
            more leads and 2.5x higher conversions through integrated digital
            marketing and web design.
          </p>

          <button className="w-fit bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition shadow-xl">
            Book Your Free Consultation
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[624px] flex flex-col lg:flex-row gap-6">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 w-full">

            <div className="w-full sm:w-[299px] h-[241px] rounded-[24px] overflow-hidden shadow-lg">
              <img src={img1} alt="Stats" className="w-full h-full object-cover" />
            </div>

            <div className="w-full sm:w-[300px] h-[230px] rounded-[24px] overflow-hidden relative shadow-lg">
              <img src={img2} alt="Case Study" className="w-full h-full object-cover" />
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 w-full">

            <div className="w-full sm:w-[300px] h-[306px] rounded-[24px] overflow-hidden shadow-lg">
              <img src={img3} alt="Track Record" className="w-full h-full object-cover" />
            </div>

            <div className="w-full sm:w-[300px] h-[200px] rounded-[24px] overflow-hidden shadow-lg">
              <img src={img4} alt="Testimonial" className="w-full h-full object-cover" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
