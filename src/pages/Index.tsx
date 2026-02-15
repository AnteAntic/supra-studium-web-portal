import AppleHeroSection from "@/components/ui/AppleHeroSection";
import AccreditationSection from "@/components/ui/AccreditationSection";
import { Courses } from "@/components/Courses";
import { ContactFooter } from "@/components/ContactFooter";
import { ManualnaTherapyHeroSection } from "@/components/ManualnaTherapyHeroSection";
import { PremiumWhySupraStudium } from "@/components/PremiumWhySupraStudium";
import { Testimonials } from "@/components/Testimonials";
import ERPSAccordion from "@/components/ERPSAccordion";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  // Mobile order: Hero, Cards, Courses, Testimonials, Accreditation, ERPS, Footer
  // Desktop order: Hero, Cards, Accreditation, Courses, MT Hero, Testimonials, Footer
  
  if (isMobile) {
    return (
      <div className="bg-background font-inter -mt-20">
        <AppleHeroSection />
        <PremiumWhySupraStudium />
        <Courses />
        <Testimonials />
        <AccreditationSection />
        <ERPSAccordion />
        <ContactFooter />
      </div>
    );
  }

  return (
    <div className="bg-background font-inter -mt-20">
      <AppleHeroSection />
      <PremiumWhySupraStudium />
      <AccreditationSection />
      <Courses />
      <ManualnaTherapyHeroSection />
      <Testimonials />
      <ContactFooter />
    </div>
  );
};

export default Index;
