import React from 'react';
import Navbar from '../Components/NavBar/NavBar';
import HeroSection from '../Components/Hero/Hero';
import DigitalMarketingServices from '../Components/Service/Service';
import WhyChooseUs from '../Components/Business/Business';
import ProvenResults from '../Components/Results/Results';
import GrowthProcess from '../Components/Greowth/Greowth';
import AboutKhanIT from '../Components/Leads/Leads';
import IndustriesWeServe from '../Components/Soulations/Soulations';
import TestimonialCard from '../Components/TestimonialCard/TestimonialCard';
import CaseStudiesSection from '../Components/CaseStudiesSection/CaseStudiesSection';
import FAQSection from '../Components/Faq/Faq';
import BlogSection from '../Components/BlogSection/BlogSection';
import CTASection from '../Components/CTASection/CTASection';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <HeroSection />
                <DigitalMarketingServices />
            </div>
            <div>
                <WhyChooseUs />
            </div>
            <div>
                <GrowthProcess />
            </div>
            {/* <div>
                <ProvenResults />
            </div> */}
            <div>
                <AboutKhanIT />
            </div>
            <div>
                <IndustriesWeServe />
            </div>
            <div>
                <TestimonialCard />
            </div>
            <div>
                <CaseStudiesSection />
            </div>
            <div>
                <FAQSection />
            </div>
            <div>
                <BlogSection />
            </div>
            <div>
                <CTASection />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;

