
import HeroSection from '@/components/ui/HeroSection';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import HeroTitle from '@/components/ui/HeroTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import { ContactFooter } from '@/components/ContactFooter';

export default function ContactPage() {
  return (
    <div className="-mt-20">
      <HeroSection
        title="Kontakt"
        subtitle="Ovdje smo za vas"
        description="Imate pitanja ili trebate dodatne informacije? Kontaktirajte nas i naš tim će vam rado pomoći s bilo kakvim upitima."
        primaryCta={{ text: "Pošaljite poruku", href: "#kontakt" }}
        secondaryCta={{ text: "Nazovite nas", href: "tel:+385123456789" }}
        backgroundType="image"
        backgroundSrc="/lovable-uploads/58feb348-e906-407b-b136-b7cf851b4ae3.png"
        overlayOpacity={0.6}
        theme="light"
        showScrollIndicator={true}
      />
      <div id="contact-content">
        <Testimonials />
        <Newsletter />
        <ContactFooter />
      </div>
    </div>
  );
}
