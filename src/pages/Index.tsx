import AppleHeroSection from "@/components/ui/AppleHeroSection";
import AccreditationSection from "@/components/ui/AccreditationSection";
import { Courses } from "@/components/Courses";
import { ContactFooter } from "@/components/ContactFooter";
import { ManualnaTherapyHeroSection } from "@/components/ManualnaTherapyHeroSection";
import { PremiumWhySupraStudium } from "@/components/PremiumWhySupraStudium";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="bg-background font-inter -mt-20">
      <AppleHeroSection />
      <PremiumWhySupraStudium />
      <AccreditationSection />
      <main className="relative">
        <Courses />
        <ManualnaTherapyHeroSection />
        <Testimonials />
        <ContactFooter />
      </main>
    </div>
  );
};

export default Index;