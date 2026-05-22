import { HomeHero } from '@/components/home/HomeHero';
import { HomeProgramsSection } from '@/components/home/HomeProgramsSection';
import { HomeCredentialsSection } from '@/components/home/HomeCredentialsSection';
import { HomeInternationalSection } from '@/components/home/HomeInternationalSection';
import { HomeChampionshipSection } from '@/components/home/HomeChampionshipSection';
import { HomeERPSSection } from '@/components/home/HomeERPSSection';
import { HomeResultsSection } from '@/components/home/HomeResultsSection';
import { HomeTestimonialsSection } from '@/components/home/HomeTestimonialsSection';
import { HomeFounderSection } from '@/components/home/HomeFounderSection';
import { ContactFooter } from '@/components/ContactFooter';

const Index = () => (
  <div className="bg-background -mt-20">
    <HomeHero />
    <HomeProgramsSection />
    <HomeCredentialsSection />
    <HomeInternationalSection />
    <HomeChampionshipSection />
    <HomeERPSSection />
    <HomeResultsSection />
    <HomeTestimonialsSection />
    <HomeFounderSection />
    <ContactFooter />
  </div>
);

export default Index;
