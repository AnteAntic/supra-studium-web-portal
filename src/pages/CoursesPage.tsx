
import HeroSection from '@/components/ui/HeroSection';
import { WhySupraStudium } from '@/components/WhySupraStudium';
import { Courses } from '@/components/Courses';
import { ContactFooter } from '@/components/ContactFooter';
import HeroTitle from '@/components/ui/HeroTitle';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CoursesPage() {
  return <div className="-mt-20 relative">
      {/* World Federation Logo */}
      <div className="absolute top-24 right-6 z-30 hidden md:block">
        
      </div>
      
      <HeroSection title="Naši Tečajevi" subtitle="Profesionalni razvoj u terapiji" description="Certificirani programi koji će vas voditi od početnika do stručnjaka u različitim tehnikama manualne terapije i masaže." primaryCta={{
      text: "Pogledaj tečajeve",
      href: "#ekskluzivne-edukacije"
    }} secondaryCta={{
      text: "Kontaktiraj nas",
      href: "/kontakt"
    }} backgroundType="video" backgroundSrc="https://www.dropbox.com/scl/fi/g2k7uc7aayor5i6qt81nk/0615-1.mp4?rlkey=ck2ikpxn0wcjfq7y3jwudml53&st=i7wwf9qq&dl=1" overlayOpacity={0.6} theme="dark" showScrollIndicator={true} />
      <div id="courses-content">
        <WhySupraStudium />
        <Courses />
        <ContactFooter />
      </div>
    </div>;
}
