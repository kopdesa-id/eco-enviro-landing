import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import VisionMissionSection from "@/components/landing/VisionMissionSection";
import ServicesSection from "@/components/landing/ServicesSection";
import AdvantagesSection from "@/components/landing/AdvantagesSection";
import CommitmentSection from "@/components/landing/CommitmentSection";
import TeamSection from "@/components/landing/TeamSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <AdvantagesSection />
      <CommitmentSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
