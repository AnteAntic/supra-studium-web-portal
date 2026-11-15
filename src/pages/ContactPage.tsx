
import { useEffect } from 'react';
import { ContactHero } from '@/components/ContactHero';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import HeroTitle from '@/components/ui/HeroTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import { ContactFooter } from '@/components/ContactFooter';
import { setPageMeta } from '@/lib/seo';

export default function ContactPage() {
  useEffect(() => {
    setPageMeta({
      title: 'Kontakt | Supra Studium',
      description: 'Kontaktirajte Učilište Supra Studium — pitanja o edukacijama, terminima i prijavama. Zagreb. Telefon, e-mail i kontakt forma.',
      path: '/kontakt',
      ogImage: '/lovable-uploads/kontakt-hero-ucionica.webp',
    });
  }, []);

  return (
    <div className="-mt-20">
      <ContactHero
        title="Kontakt"
        subtitle="Ovdje smo za vas"
        description="Imate pitanja ili trebate dodatne informacije? Kontaktirajte nas i naš tim će vam rado pomoći s bilo kakvim upitima."
        primaryCta={{ text: "Pošaljite poruku", href: "#kontakt" }}
        secondaryCta={{ text: "Nazovite nas", href: "tel:+385958558953" }}
        backgroundSrc="/lovable-uploads/kontakt-hero-ucionica.webp"
      />
      <div id="contact-content">
        <Testimonials />
        <Newsletter />
        <ContactFooter />
      </div>
    </div>
  );
}
