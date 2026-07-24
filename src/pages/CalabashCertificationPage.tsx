import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import { CourseRecommendations } from '@/components/course/CourseRecommendations';
import { CourseFooter } from '@/components/CourseFooter';
import { setPageMeta, setJsonLd, courseSchema, courseBreadcrumb, faqSchema } from '@/lib/seo';

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut', delay },
  }),
};

const moduli = [
  {
    broj: '01',
    naziv: 'Mehanika kontakta',
    opis: 'Anatomija drže, transfer težine tijela, gliding po površinskim i dubokim slojevima. Kalabaš se uvodi tek kad je tkivna slika jasna — svaki zahvat počinje palpacijom, ne protokolom.',
    trajanje: '9 sati',
  },
  {
    broj: '02',
    naziv: 'Tkivna procjena i adaptacija',
    opis: 'Kompresija, fascijalna mobilizacija, ciljane sekvence za leđa, ramena i kukove. Vektor sile se prilagođava reakciji tkiva u realnom vremenu — ne unaprijed određenom obrascu.',
    trajanje: '9 sati',
  },
];

const metodaKlinicki = [
  'Tkivo ne reagira na silu — reagira na smjer i kontinuitet.',
  'Duboki rad ne zahtijeva veći pritisak. Zahtijeva bolji vektor.',
  'Terapeut koji precizno pozicionira tijelo ne troši snagu — primjenjuje mehaniku.',
];

const terminiKalabas = [
  {
    grad: 'Split',
    datum: '20.–21.02.2027.',
    lokacija: 'Centar za ortopedsku manualnu terapiju Majce & Stojanović, Žnjanska 6',
    earlyBird: '20.01.2027.',
  },
  {
    grad: 'Zagreb',
    datum: '06.–07.03.2027.',
    lokacija: 'Poliklinika Medical Body Balance, Frane Kesterčaneka 2b',
    earlyBird: '20.01.2027.',
  },
  {
    grad: 'Rijeka',
    datum: '13.–14.03.2027.',
    lokacija: 'Udruga Eterico, Ul. Zdravka Kučića 39',
    earlyBird: '01.02.2027.',
  },
];

const ukljuceno = [
  'Dva originalna ručno izrađena Kalabaš alata',
  'Nastavni materijali',
  'Certifikat Učilišta Supra Studium (upis u e-radnu knjižicu)',
  'Praktičan rad u maloj grupi',
  'Mentorstvo nakon edukacije',
  'Pristup dodatnim stručnim materijalima',
];

const bonusiKalabas: { n: string; title: string; note: string; bullets?: string[]; disclaimer?: string }[] = [
  {
    n: '01',
    title: 'VIP Observer Pass — Official Croatian Massage & Manual Therapy Championship',
    note: 'Besplatan VIP Observer Pass za sva tri dana prvenstva.',
    bullets: [
      'Pristup svim natjecanjima',
      'Pristup stručnim radionicama',
      'Promatranje najboljih terapeuta iz Hrvatske i inozemstva',
      'Networking s međunarodnim sucima, edukatorima i terapeutima',
    ],
  },
  {
    n: '02',
    title: 'Online Q&A nakon edukacije',
    note: 'Jedan zajednički online susret nakon edukacije za pitanja, ponavljanje i razmjenu iskustava iz prakse.',
  },
  {
    n: '03',
    title: 'Ekskluzivni stručni PDF',
    note: 'Dodatni stručni materijal koji nije dio standardne skripte.',
  },
  {
    n: '04',
    title: 'Mogućnost promatranja tretmana uživo',
    note: 'Mogućnost promatranja rada iskusnog terapeuta tijekom tretmana s pravim klijentima, prema dogovoru i dostupnosti termina. Tijekom promatranja uči se:',
    bullets: [
      'Razgovor s klijentom',
      'Procjena stanja',
      'Razmišljanje terapeuta',
      'Odabir tehnika',
      'Prilagodba tretmana stvarnoj osobi',
      'Završna evaluacija tretmana',
    ],
    disclaimer: 'Promatranje se organizira prema dogovoru, raspoloživosti termina i uz prethodnu suglasnost klijenta.',
  },
];

const faq = [
  {
    pitanje: 'Je li tečaj namijenjen svim terapeutima?',
    odgovor:
      'Tečaj je namijenjen masažnim terapeutima, fizioterapeutima, osteopatima i ostalim stručnjacima koji rade s tijelom. Preporuča se osnovno iskustvo u ručnom radu — poznavanje anatomije pomaže, ali nije formalni uvjet.',
  },
  {
    pitanje: 'Koje je predznanje potrebno?',
    odgovor:
      'Polaznici bi trebali imati osnovno poznavanje anatomije i iskustvo u radu s klijentima. Tečaj nije namijenjen potpunim početnicima u terapijskom radu s tijelom.',
  },
  {
    pitanje: 'Što je uključeno u kotizaciju?',
    odgovor:
      'U cijenu su uključena dva originalna ručno izrađena Kalabaš alata, nastavni materijali, praktičan rad u maloj grupi, certifikat Učilišta Supra Studium, mentorstvo nakon edukacije i pristup dodatnim stručnim materijalima.',
  },
  {
    pitanje: 'Koliko polaznika sudjeluje u grupi?',
    odgovor:
      'Edukacija se provodi u malim grupama — maksimalno 12 polaznika — kako bi svaki sudionik dobio dovoljno prostora i vremena za praktičan rad pod nadzorom.',
  },
  {
    pitanje: 'Dobiva li se certifikat?',
    odgovor:
      'Po završetku oba dana i položenom praktičnom dijelu, svaki polaznik dobiva certifikat Supra Studium škole i međunarodnu registraciju pri Svjetskoj federaciji manualne terapije.',
  },
  {
    pitanje: 'Gdje se edukacija održava?',
    odgovor:
      'Edukacija se održava u tri grada: Split (20.–21.02.2027., Centar za ortopedsku manualnu terapiju Majce & Stojanović, Žnjanska 6), Zagreb (06.–07.03.2027., Poliklinika Medical Body Balance, Frane Kesterčaneka 2b) i Rijeka (13.–14.03.2027., Udruga Eterico, Ul. Zdravka Kučića 39).',
  },
  {
    pitanje: 'Kolika je kotizacija?',
    odgovor:
      'Early Bird kotizacija iznosi 490 €, redovna cijena je 540 €. Rezervacija se potvrđuje akontacijom od 100 €, a preostali iznos plaća se najkasnije 30 dana prije početka edukacije. Early Bird rok razlikuje se po terminu i naveden je uz svaki grad.',
  },
];

const CalabashCertificationPage: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const programRef = useRef<HTMLElement>(null);
  const kotizacijaRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '42%']);

  useEffect(() => {
    setPageMeta({
      title: 'Kalabaš masaža – Certifikacija | Supra Studium',
      description: 'Certifikacija Therapeutic Calabash Deep Tissue Myofascial Release s dr. Awudijem — afrička tradicija i miofascijalni pristup u jednom alatu.',
      path: '/calabash-certifikacija',
      ogImage: '/lovable-uploads/cal-hero-gourds-bilateral-closeup.jpeg',
    });
    setJsonLd('course', courseSchema({
      name: 'Kalabaš masaža — Therapeutic Calabash Deep Tissue Myofascial Release',
      description: 'Dvodnevna certifikacija kalabaš masaže s dr. Awudijem Atitsogbuijem — afrička tradicija i miofascijalni pristup u jednom alatu.',
      path: '/calabash-certifikacija',
      startDate: '2027-02-20',
      endDate: '2027-02-21',
      priceEUR: 490,
      location: 'Split',
    }));
    setJsonLd('breadcrumb', courseBreadcrumb('Kalabaš masaža', '/calabash-certifikacija'));
    setJsonLd('faq', faqSchema(faq.map((f) => ({ question: f.pitanje, answer: f.odgovor }))));
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#FAF8F4' }}>

      <CourseStickyBar
        locations={[
          { city: 'Split', dates: '20.–21.2.2027.' },
          { city: 'Zagreb', dates: '6.–7.3.2027.' },
          { city: 'Rijeka', dates: '13.–14.3.2027.' },
        ]}
        price="Early Bird od 490 €"
        ctaText="Prijavi se"
        ctaHref="https://tally.so/r/wA5kvD"
        theme="light"
      />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

        <motion.div
          className="absolute inset-0 top-[-5rem] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <div
            className="absolute w-full h-full bg-cover"
            style={{ backgroundImage: 'url(/lovable-uploads/cal-hero-gourds-bilateral-closeup.jpeg)', backgroundPosition: 'center 45%' }}
          />
        </motion.div>

        {/* Base atmospheric layer */}
        <div className="absolute inset-0" style={{ background: 'rgba(14,9,4,0.22)' }} />
        {/* Edge vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 130% 130% at 50% 50%, transparent 28%, rgba(6,4,2,0.34) 100%)' }} />
        {/* Radial text-zone darkening */}
        <div className="absolute inset-0 hidden md:block" style={{ background: 'radial-gradient(ellipse 68% 75% at 22% 78%, rgba(8,5,2,0.44) 0%, transparent 100%)' }} />
        {/* Directional text-zone */}
        <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, rgba(15,12,8,0.84) 0%, rgba(15,12,8,0.60) 32%, rgba(15,12,8,0.16) 56%, transparent 70%)' }} />
        {/* Bottom grounding */}
        <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to top, rgba(10,8,5,0.46) 0%, rgba(10,8,5,0.20) 30%, transparent 52%)' }} />
        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-32 hidden md:block" style={{ background: 'linear-gradient(to bottom, rgba(8,6,4,0.18), transparent)' }} />
        {/* Mobile gradient */}
        <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to bottom, rgba(14,11,7,0.60) 0%, rgba(14,11,7,0.50) 22%, rgba(14,11,7,0.38) 48%, rgba(14,11,7,0.26) 70%, rgba(14,11,7,0.38) 100%)' }} />
        {/* Documentary grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 300px',
            opacity: 0.038,
            mixBlendMode: 'screen',
          }}
        />

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute inset-0">
          <div className="container mx-auto px-6 relative z-10 h-full flex items-end pb-[18%] md:pb-[8%]">
            <div className="w-full" style={{ maxWidth: '50rem' }}>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
                className="mb-6"
              >
                <span
                  className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.28em] block"
                  style={{ color: 'rgba(212,175,55,0.92)', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}
                >
                  Kalabaš Certifikacija · 2026 – 2027
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.50, duration: 0.7, ease: 'easeOut' }}
                className="origin-left mb-9"
              >
                <div className="w-10 h-px" style={{ backgroundColor: 'rgba(212,175,55,0.40)' }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 1.05, ease: 'easeOut' }}
                className="mb-9"
              >
                <h1
                  className="font-playfair font-semibold text-white leading-[1.17] text-[2.05rem] sm:text-[2.35rem] md:text-[2.7rem]"
                  style={{ textShadow: '0 2px 24px rgba(0,0,0,0.72), 0 1px 6px rgba(0,0,0,0.40)' }}
                >
                  Dubina bez sile.<br />
                  Kalabaš mijenja način kontakta s tkivom.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.95, ease: 'easeOut' }}
                className="mb-9"
              >
                <p
                  className="text-[13.5px] sm:text-[14px] font-normal leading-[1.75]"
                  style={{ color: 'rgba(255,255,255,0.58)', maxWidth: '44ch' }}
                >
                  Precizna mehanika vektora i miofascijalnog kontakta —
                  tehnika koja štedi terapeuta bez kompromisa na dubini.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.85, ease: 'easeOut' }}
                className="mb-14 flex flex-wrap items-center"
                style={{ columnGap: '14px', rowGap: '4px' }}
              >
                {['2 dana', '18 sati', 'Rad s alatom', 'Certifikat'].map((item, i) => (
                  <React.Fragment key={item}>
                    {i > 0 && (
                      <span style={{ color: 'rgba(255,255,255,0.32)', fontSize: '11px', lineHeight: 1 }}>·</span>
                    )}
                    <span
                      className="font-medium"
                      style={{ fontSize: '11px', letterSpacing: '0.11em', color: 'rgba(255,255,255,0.78)', textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}
                    >
                      {item}
                    </span>
                  </React.Fragment>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 0.80, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <button
                  className="font-normal uppercase cursor-pointer whitespace-nowrap"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    padding: '8px 20px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: 'rgba(212,175,55,0.90)',
                    color: '#1a1a1a',
                    transition: 'background-color 0.5s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#d4af37'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(212,175,55,0.90)'; }}
                  onClick={() => programRef.current?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Pogledaj program
                </button>

                <button
                  className="font-normal uppercase cursor-pointer bg-transparent border-0 p-0 flex items-center gap-3"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.16em',
                    color: 'rgba(255,255,255,0.72)',
                    textShadow: '0 1px 2px rgba(0,0,0,0.45)',
                    transition: 'color 0.35s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.95)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.72)'; }}
                  onClick={() => kotizacijaRef.current?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span
                    aria-hidden="true"
                    style={{ display: 'block', width: '18px', height: '1px', backgroundColor: 'rgba(212,175,55,0.55)', flexShrink: 0 }}
                  />
                  Termini i kotizacija
                </button>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </section>

      {/* Facts band */}
      <div style={{ background: '#FAF8F4', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container mx-auto px-6">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ borderLeft: '1px solid rgba(0,0,0,0.07)' }}
          >
            {[
              { label: 'Format', value: '2 dana · 18 sati' },
              { label: 'Voditelj', value: 'Dr. Awudi Atitsogbui' },
              { label: 'Prvi termin', value: 'Split · 20.–21.2.2027.' },
              { label: 'Završetak', value: 'Certifikat Supra Studium' },
            ].map(item => (
              <div
                key={item.label}
                className="py-8 px-6 md:px-8"
                style={{ borderRight: '1px solid rgba(0,0,0,0.07)' }}
              >
                <p className="text-[9px] uppercase tracking-[0.22em] mb-2 font-normal" style={{ color: '#B89A4F' }}>
                  {item.label}
                </p>
                <p className="text-[13.5px] font-normal leading-snug" style={{ color: '#1F1D1A' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Klinička observacija */}
      <section style={{ background: '#FAF8F4' }} className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_0.9fr] gap-16 md:gap-24 items-start">

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-8" style={{ color: '#B89A4F' }}>
                Klinička perspektiva
              </p>
              <h2 className="font-playfair font-semibold text-[1.75rem] md:text-[2.1rem] leading-[1.22] mb-0" style={{ color: '#1F1D1A' }}>
                Kalabaš nije<br />
                modni detalj tretmana.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              className="pt-1 md:pt-16"
            >
              <p className="text-[13.5px] leading-[1.88] font-normal mb-5" style={{ color: '#7A7570' }}>
                Kalabaš je produžetak ruke s vektorom koji standardnom zahvatu nije dostupan.
                Rezultat nije dramatičan — ali je opipljiv i ponovljiv. Tkivo reagira drukčije
                na alat nego na dlan.
              </p>
              <p className="text-[12px] leading-[1.75] font-normal" style={{ color: '#B89A4F', letterSpacing: '0.01em' }}>
                Tehnika koja se rijetko podučava u Europi —<br className="hidden md:block" />
                a gotovo nikada u strukturiranom kliničkom formatu.
              </p>
            </motion.div>
          </div>

          {/* Observation rows */}
          <div className="max-w-5xl mx-auto mt-20">
            {[
              {
                label: 'Terapeut i karijera',
                heading: 'Duboki rad nije pitanje težine terapeuta.',
                body: 'Terapeut koji radi s kalabašom distribuira opterećenje kroz alat, ne kroz metakarpofalangealne zglobove. To nije pitanje ugode danas — to je pitanje koliko dugo karijera traje.',
              },
              {
                label: 'Fascija i vektor',
                heading: 'Tkivo ne reagira na silu. Reagira na kontinuitet smjera.',
                body: 'Fascijalni slojevi se otpuštaju kada je vektor konzistentan — ne kada je sila velika. Gliding s kalabašom drži smjer sekunda za sekundom, što dlanom nije izvedivo na isti način.',
              },
              {
                label: 'Klinički ishod',
                heading: 'Kalabaš rasterećuje šaku, ne odgovornost terapeuta.',
                body: 'Alat mijenja mehaniku — ali ne i klinički zahtjev. Palpacija, procjena i prilagodba vektora ostaju posao terapeuta. Kalabaš samo omogućuje da se taj posao radi dulje i preciznije.',
              },
            ].map((row, i) => (
              <motion.div
                key={row.label}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.10}
                className="py-10 grid md:grid-cols-[0.35fr_1fr] gap-8 md:gap-16"
                style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] font-normal" style={{ color: '#B89A4F' }}>
                    {row.label}
                  </p>
                </div>
                <div>
                  <p className="font-playfair font-semibold text-[1.05rem] leading-[1.35] mb-4" style={{ color: '#1F1D1A' }}>
                    {row.heading}
                  </p>
                  <p className="text-[13px] leading-[1.82] font-normal" style={{ color: '#7A7570' }}>
                    {row.body}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
          </div>
        </div>
      </section>

      {/* Video intermezzo */}
      <div style={{ background: '#1A1814' }}>
        <div className="w-full overflow-hidden relative" style={{ aspectRatio: '21/9' }}>
          <video preload="metadata"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          >
            <source src="/videos/cal-procedural.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(8,6,3,0.55) 0%, rgba(8,6,3,0.15) 50%, transparent 75%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(8,6,3,0.35) 0%, transparent 40%)' }}
          />
          <div className="absolute bottom-6 left-8">
            <p className="text-[11px] uppercase tracking-[0.14em] font-normal" style={{ color: 'rgba(255,255,255,0.62)' }}>
              Zagreb, studeni 2025.
            </p>
          </div>
        </div>
      </div>

      {/* Metoda — dark */}
      <section style={{ background: '#1A1814' }} className="pt-24 pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-8" style={{ color: 'rgba(184,154,79,0.65)' }}>
                Metoda
              </p>
              <h2 className="font-playfair font-semibold text-[1.75rem] md:text-[2.1rem] leading-[1.22] mb-6" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Metodologija<br />
                u dva dana.
              </h2>
              <p className="text-[13px] leading-[1.82] font-normal" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Razumijevanje tkiva dolazi prije tehnike. Alat se uvodi tek kad je palpacijska slika jasna — ne ranije.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              className="pt-1 md:pt-16"
            >
              {metodaKlinicki.map((t, i) => (
                <div
                  key={i}
                  className="py-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="font-playfair font-normal text-[1.05rem] leading-[1.45]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                    {t}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Program */}
      <section ref={programRef} style={{ background: '#FAF8F4' }} className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mb-14"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                Program
              </p>
              <h2 className="font-playfair font-semibold text-[1.75rem] md:text-[2.1rem] leading-[1.22]" style={{ color: '#1F1D1A' }}>
                Struktura programa.
              </h2>
            </motion.div>

            {moduli.map((m, i) => (
              <motion.div
                key={m.broj}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.08}
                className="py-9"
                style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div
                  className="grid items-start gap-6 md:gap-12"
                  style={{ gridTemplateColumns: '80px 1fr auto' }}
                >
                  <p
                    className="font-playfair font-normal text-[2.2rem] leading-none"
                    style={{ color: 'rgba(184,154,79,0.22)' }}
                  >
                    {m.broj}
                  </p>
                  <div>
                    <p className="text-[15px] font-medium mb-2 leading-snug" style={{ color: '#1F1D1A' }}>
                      {m.naziv}
                    </p>
                    <p className="text-[13px] leading-[1.75] font-normal" style={{ color: '#7A7570', maxWidth: '52ch' }}>
                      {m.opis}
                    </p>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-normal whitespace-nowrap" style={{ color: '#B89A4F' }}>
                    {m.trajanje}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />

          </div>
        </div>
      </section>

      {/* Editorial image intermezzo — documentary frame */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '21/9', background: '#1A1510' }}
      >
        <img width={2880} height={2160}
          src="/lovable-uploads/cal-awudi-razgovor-narancasta.webp"
          alt="Dr. Awudi Atitsogbui — edukacija s kalabašem, Zagreb 2025."
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center 28%',
            filter: 'saturate(0.78) contrast(1.06) brightness(1.0)',
          }}
          loading="lazy"
        />
        {/* Gentle base warm tone */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(10,6,2,0.10)' }}
        />
        {/* Edge vignette — cinematic frame without killing the image */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(8,5,2,0.22) 72%, rgba(8,5,2,0.48) 100%)' }}
        />
        {/* Bottom gradient — text zone only */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,5,2,0.52) 0%, rgba(8,5,2,0.22) 28%, transparent 52%)' }}
        />
        {/* Left edge — quote readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(8,5,2,0.38) 0%, rgba(8,5,2,0.10) 30%, transparent 50%)' }}
        />
        {/* Observational quote — field annotation */}
        <div className="absolute bottom-8 left-10 md:bottom-14 md:left-16">
          <p
            className="font-playfair font-normal text-[0.88rem] md:text-[1.05rem] leading-[1.82]"
            style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '36ch' }}
          >
            Kalabaš ne zamjenjuje ruku.{' '}<br className="hidden md:block" />
            Produžuje njezinu preciznost.
          </p>
        </div>
      </div>

      {/* Predavač */}
      <section style={{ background: '#F0EDE6' }} className="pt-24 pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[0.7fr_1fr] gap-16 md:gap-24 items-start">

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img width={427} height={640}
                  src="/lovable-uploads/cal-dr-awudi-portret.webp"
                  alt="Dr. Awudi Atitsogbui"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              className="pt-2 md:pt-8"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Voditelj edukacije
              </p>
              <h2 className="font-playfair font-semibold text-[1.6rem] md:text-[1.9rem] leading-[1.22] mb-6" style={{ color: '#1F1D1A' }}>
                Dr. Awudi Atitsogbui
              </h2>
              <p className="text-[13.5px] leading-[1.88] font-normal mb-5" style={{ color: '#7A7570' }}>
                Awudi kalabaš masažu nije preuzeo iz tradicije kao spektakl — razvio je kao sustavnu metodu.
                Sa jasno definiranom mehanikom drže, vektora sile i pozicioniranja tijela koje štiti
                terapeuta jednako koliko i klijenta.
              </p>
              <p className="text-[13.5px] leading-[1.88] font-normal mb-5" style={{ color: '#7A7570' }}>
                Terapeuti mu vjeruju jer ne radi razliku između demonstracije i prenošenja znanja.
                Svaki zahvat objašnjava kao biomehanički događaj: što se događa u tkivu, zašto taj vektor,
                zašto ta brzina. Polaznici odlaze s razumijevanjem, ne s receptom.
              </p>
              <p className="text-[13.5px] leading-[1.88] font-normal" style={{ color: '#7A7570' }}>
                Njegovo središnje pitanje nije "što se radi" — nego "zašto to tijelo terapeuta može raditi
                desetljećima bez kompromisa na dubini." Na edukaciji u Zagrebu radi u malim grupama,
                s direktnom povratnom informacijom na svaki zahvat.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Iz prakse */}
      <section style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }} className="pt-24 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mb-16"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                Iz prakse
              </p>
            </motion.div>

            {[
              {
                quote: 'Klijenti pitaju za tretman po imenu — ne po terapeutu. To ti govori nešto o alatu.',
                attribution: '— Polaznica, Zagreb 2025.',
              },
              {
                quote: 'Mislila sam da je kalabaš modni trend. Prva dva sata me uvjerila da griješim.',
                attribution: '— Polaznica, Zagreb 2025.',
              },
              {
                quote: 'Tehnika koja štedi ruke a ne kompromitira dubinu — to je jednadžba koju sam tražila godinama.',
                attribution: '— Polaznica, Zagreb 2025.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.08}
                className="py-10"
                style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
              >
                <p
                  className="font-playfair font-normal text-[1.15rem] md:text-[1.3rem] leading-[1.55] mb-4"
                  style={{ color: '#1F1D1A', maxWidth: '60ch' }}
                >
                  "{item.quote}"
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] font-normal" style={{ color: '#B89A4F' }}>
                  {item.attribution}
                </p>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />

          </div>
        </div>
      </section>

      {/* Kotizacija */}
      <section ref={kotizacijaRef} id="kotizacija" style={{ background: '#1A1814' }} className="pt-24 pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            {/* Header + intro */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mb-12"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-5" style={{ color: 'rgba(184,154,79,0.65)' }}>
                Termini i kotizacija
              </p>
              <h2 className="font-playfair font-semibold text-[1.75rem] md:text-[2.1rem] leading-[1.22] mb-6" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Tri grada. Dva dana.
              </h2>
              <p className="text-[13.5px] leading-[1.82] font-normal" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '54ch' }}>
                Kalabaš edukacija traje dva dana i održava se u malim grupama kako bi svaki polaznik dobio dovoljno praktičnog rada i individualne korekcije.
              </p>
            </motion.div>

            {/* Price card */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              className="mb-16 p-8 md:p-10"
              style={{ border: '1px solid rgba(184,154,79,0.38)', background: 'rgba(184,154,79,0.06)' }}
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <p className="font-playfair font-semibold leading-none" style={{ fontSize: '3.4rem', color: 'rgba(255,255,255,0.95)', letterSpacing: '-0.02em' }}>
                      490 €
                    </p>
                    <p className="text-[12px] font-normal" style={{ color: 'rgba(184,154,79,0.85)' }}>
                      Early Bird
                    </p>
                  </div>
                  <p className="text-[12px] font-normal" style={{ color: 'rgba(255,255,255,0.30)', textDecoration: 'line-through' }}>
                    Redovna cijena: 540 €
                  </p>
                </div>
                <div className="flex gap-10 md:gap-12 md:pb-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-normal mb-1.5" style={{ color: 'rgba(184,154,79,0.65)' }}>
                      Akontacija
                    </p>
                    <p className="text-[15px] font-normal" style={{ color: 'rgba(255,255,255,0.88)' }}>
                      100 €
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-normal mb-1.5" style={{ color: 'rgba(184,154,79,0.65)' }}>
                      Grupa
                    </p>
                    <p className="text-[15px] font-normal whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.88)' }}>
                      Max. 12 polaznika
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Termini list */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              className="mb-14"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-2" style={{ color: 'rgba(184,154,79,0.65)' }}>
                Termini
              </p>
              {terminiKalabas.map((t, i) => (
                <div
                  key={i}
                  className="py-7 grid gap-5 md:gap-8 md:grid-cols-[1fr_auto] md:items-center"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    ...(i === terminiKalabas.length - 1 && { borderBottom: '1px solid rgba(255,255,255,0.08)' }),
                  }}
                >
                  <div>
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <p className="font-playfair font-medium text-[1.15rem] leading-tight" style={{ color: 'rgba(255,255,255,0.92)' }}>
                        {t.grad}
                      </p>
                      <p className="text-[13px] font-normal" style={{ color: 'rgba(255,255,255,0.72)' }}>
                        {t.datum}
                      </p>
                    </div>
                    <p className="text-[12px] font-normal leading-[1.6] mb-2" style={{ color: 'rgba(255,255,255,0.42)' }}>
                      {t.lokacija}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.14em] font-medium" style={{ color: 'rgba(184,154,79,0.85)' }}>
                      Early Bird do {t.earlyBird}
                    </p>
                  </div>
                  <a
                    href="https://tally.so/r/wA5kvD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal uppercase cursor-pointer whitespace-nowrap inline-block text-center md:justify-self-end"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      padding: '9px 24px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(212,175,55,0.90)',
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      transition: 'background-color 0.5s ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#d4af37'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(212,175,55,0.90)'; }}
                  >
                    Prijavi se
                  </a>
                </div>
              ))}
            </motion.div>

            {/* Rok prijave */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.16}
              className="mb-16"
            >
              <p className="text-[12px] leading-[1.65] font-normal" style={{ color: 'rgba(255,255,255,0.42)' }}>
                Preostali iznos kotizacije plaća se najkasnije 30 dana prije početka edukacije. Prijave se u pravilu zatvaraju 45 dana prije početka pojedine edukacije kako bismo na vrijeme organizirali održavanje tečaja.
              </p>
              <p className="text-[12px] leading-[1.65] font-normal mt-2" style={{ color: 'rgba(255,255,255,0.42)' }}>
                Ako se javljaš nakon isteka tog roka, slobodno nas kontaktiraj na{' '}
                <a href="mailto:info@uciliste-suprastudium.hr" style={{ color: 'rgba(184,154,79,0.85)' }}>info@uciliste-suprastudium.hr</a>
                {' '}ili nazovi{' '}
                <a href="tel:+385958558953" style={{ color: 'rgba(184,154,79,0.85)' }}>095 855 89 53</a>.
                Ako postoji slobodno mjesto i organizacijske mogućnosti to dopuštaju, provjerit ćemo mogućnost naknadne prijave.
              </p>
            </motion.div>

            {/* Uključeno u kotizaciju */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.20}
              className="pt-12"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-6" style={{ color: 'rgba(184,154,79,0.65)' }}>
                Uključeno u kotizaciju
              </p>

              <div
                className="p-6 mb-8 flex items-start gap-4"
                style={{ border: '1px solid rgba(184,154,79,0.30)', background: 'rgba(184,154,79,0.06)' }}
              >
                <span className="flex-shrink-0 mt-[2px]" style={{ color: 'rgba(184,154,79,0.85)', fontSize: '13px' }}>◆</span>
                <p className="text-[14px] leading-[1.6] font-medium" style={{ color: 'rgba(255,255,255,0.90)' }}>
                  U cijenu su uključena 2 originalna ručno izrađena Kalabaš alata.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10">
                {ukljuceno.map((item, i) => (
                  <div key={i} className="py-4 flex gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="flex-shrink-0 mt-[3px]" style={{ color: 'rgba(184,154,79,0.55)', fontSize: '11px' }}>—</span>
                    <p className="text-[13.5px] leading-[1.55] font-normal" style={{ color: 'rgba(255,255,255,0.68)' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bonus za prva 3 prijavljena */}
      <section style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }} className="pt-24 pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mb-12"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Bonus za prva 3 prijavljena
              </p>
              <div className="w-10 h-px mb-9" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <p className="text-[14px] leading-[1.85] font-normal" style={{ color: '#5F5A52', maxWidth: '54ch' }}>
                Prva 3 polaznika koja rezerviraju mjesto dobivaju dodatne resurse koji nisu dio standardnog programa.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.10}
            >
              <div className="grid md:grid-cols-2" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                {bonusiKalabas.map((bonus, i) => (
                  <div
                    key={i}
                    className="p-8"
                    style={{
                      background: 'white',
                      borderRight: i % 2 === 0 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                      borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                    }}
                  >
                    <p className="font-playfair font-normal leading-none mb-5" style={{ fontSize: '2rem', color: 'rgba(184,154,79,0.28)' }}>
                      {bonus.n}
                    </p>
                    <p className="text-[14.5px] leading-snug font-medium mb-3" style={{ color: '#1F1D1A' }}>
                      {bonus.title}
                    </p>
                    <p className="text-[12.5px] leading-[1.72] font-normal" style={{ color: '#8A8480' }}>
                      {bonus.note}
                    </p>
                    {bonus.bullets && (
                      <ul className="mt-4 space-y-2">
                        {bonus.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-[12.5px] leading-[1.6] font-normal" style={{ color: '#8A8480' }}>
                            <span className="flex-shrink-0" style={{ color: 'rgba(184,154,79,0.55)' }}>—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {bonus.disclaimer && (
                      <p className="text-[12px] leading-[1.7] font-normal mt-5" style={{ color: 'rgba(0,0,0,0.42)', fontStyle: 'italic' }}>
                        {bonus.disclaimer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }} className="pt-24 pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mb-12"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                Česta pitanja
              </p>
              <h2 className="font-playfair font-semibold text-[1.75rem] md:text-[2.1rem] leading-[1.22]" style={{ color: '#1F1D1A' }}>
                Što vas zanima.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.10}
            >
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: 'none' }}
                  >
                    <AccordionTrigger
                      className="py-5 text-left font-normal text-[14px] hover:no-underline"
                      style={{ color: '#1F1D1A' }}
                    >
                      {item.pitanje}
                    </AccordionTrigger>
                    <AccordionContent
                      className="pb-5 text-[13px] leading-[1.85] font-normal"
                      style={{ color: '#7A7570' }}
                    >
                      {item.odgovor}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
            </motion.div>

          </div>
        </div>
      </section>

      <CourseRecommendations currentCourse="kalabas" />
      <CourseFooter />

    </div>
  );
};

export default CalabashCertificationPage;
