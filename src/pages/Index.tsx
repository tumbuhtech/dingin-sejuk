import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BrandsSection from "@/components/BrandsSection";
import WhyUsSection from "@/components/WhyUsSection";
import PromoSection from "@/components/PromoSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AreaSection from "@/components/AreaSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <BrandsSection />
      <WhyUsSection />
      <PromoSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <AreaSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
