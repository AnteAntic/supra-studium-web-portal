import HeroSection from '@/components/ui/HeroSection';
import { WhySupraStudium } from '@/components/WhySupraStudium';
import { Courses } from '@/components/Courses';
import { ContactFooter } from '@/components/ContactFooter';

export default function OUcilistuPage() {
  return (
    <div className="-mt-20">
      <HeroSection
        title="O Učilištu"
        subtitle="Supra Studium - Vaš partner u profesionalnom razvoju"
        description="Otkrijte zašto je Supra Studium najbolji izbor za vaše obrazovanje u oblasti manualne terapije i masaže."
        primaryCta={{ text: "Saznaj više", href: "#about-content" }}
        secondaryCta={{ text: "Pogledaj tečajeve", href: "/tecajevi" }}
        backgroundType="gradient"
        theme="light"
        showScrollIndicator={true}
      />
      <div id="about-content">
        <WhySupraStudium />
        
        {/* Partnership section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Partnerstva i Događaji</h2>
              <div className="space-y-6">
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Feel & Heal Festival</h3>
                  <p className="text-muted-foreground mb-4">
                    Pridružite se našem ekskluzivnom festivalu wellness-a i isceljenja.
                  </p>
                  <a 
                    href="https://feel-heal-festival-6k1kkp5.gamma.site/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Saznaj više →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Courses />
        <ContactFooter />
      </div>
    </div>
  );
}