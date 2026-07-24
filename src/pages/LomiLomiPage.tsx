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
    naziv: 'Zlatna formula',
    opis: 'Povijest i filozofija havajskog Lomi Lomija, 7 načela Hune kao radni okvir terapeuta, ključne anatomske zone i točke kontakta, kontrola disanja kao tehnička osnova, kompletna sekvenca zlatne formule.',
    trajanje: '2 dana',
  },
  {
    broj: '02',
    naziv: 'Dijagnostika i terapija',
    opis: 'Ciljani rad na kliničkim problemima — bol u donjem dijelu leđa i išijas, cervikalna napetost i glavobolja, koljeno, gležanj i Ahilova tetiva. Procjena pokretom, tretman sekvencom.',
    trajanje: '2 dana',
  },
];

const tehnike = [
  'Sekvenca zlatne formule — neprekinuti tok od leđa do ekstremiteta',
  'Breath timing — svaki zahvat usklađen s fazom izdaha',
  'Tri anatomske zone leđa, miofascijalni meridijani',
  'Postavljanje prisutnosti kao tehničke osnove, ne duhovne',
  'Dijagnostika kroz palpaciju: donji dio leđa, vrat, koljena, gležanj',
];

const kotizacijaData = [
  { naziv: 'Modul I — Zlatna formula', eb: '490 €', redovna: '540 €' },
  { naziv: 'Modul II — Dijagnostika i terapija', eb: '490 €', redovna: '540 €' },
];

const termini = [
  {
    modul: 'Modul 1',
    grad: 'Split',
    datum: '14.–15.11.2026.',
    lokacija: 'Centar za ortopedsku manualnu terapiju Majce & Stojanović, Žnjanska 6',
    earlyBird: '30.09.2026.',
  },
  {
    modul: 'Modul 1',
    grad: 'Rijeka',
    datum: '6.–7.02.2027.',
    lokacija: 'Udruga Eterico, Ul. Zdravka Kučića 39',
    earlyBird: '23.12.2026.',
  },
  {
    modul: 'Modul 2',
    grad: 'Zagreb',
    datum: '10.–11.04.2027.',
    lokacija: 'Poliklinika Medical Body Balance, Frane Kesterčaneka 2b',
    earlyBird: '24.02.2027.',
  },
];

const bonusi: { n: string; title: string; note: string; bullets?: string[]; disclaimer?: string }[] = [
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
    title: 'Online Zoom Q&A s dr. Awudijem',
    note: 'Organizirani online susret nakon edukacije za pitanja, ponavljanje i razmjenu iskustava.',
  },
  {
    n: '03',
    title: 'Ekskluzivni stručni PDF',
    note: 'Poseban edukacijski materijal koji nije dio standardne skripte.',
  },
  {
    n: '04',
    title: 'Promatranje rada dr. Awudija uživo',
    note: 'Mogućnost promatranja rada dr. Awudija tijekom tretmana sa stvarnim klijentima u njegovoj privatnoj ordinaciji u Zagrebu. Tijekom promatranja pratite cijeli terapijski proces:',
    bullets: [
      'Razgovor s klijentom',
      'Procjenu stanja',
      'Razmišljanje terapeuta',
      'Odabir tehnika',
      'Prilagodbu tretmana stvarnoj osobi',
      'Završnu evaluaciju tretmana',
    ],
    disclaimer: 'Promatranje se organizira prema dogovoru, raspoloživosti termina i uz prethodnu suglasnost klijenta.',
  },
  {
    n: '05',
    title: 'Prioritetna rezervacija za buduće Advanced Lomi Lomi module',
    note: 'Polaznici ove edukacije dobivaju pravo prvenstva pri rezervaciji mjesta za buduće napredne module — prije javne objave.',
  },
];

const faq = [
  {
    pitanje: 'Je li tečaj namijenjen početnicima?',
    odgovor:
      'Tečaj je namijenjen terapeutima s osnovnim iskustvom u ručnom radu — maserima, fizioterapeutima, kineziolozima i srodnim strukama. Nije uvjet prethodno poznavanje Lomi Lomija.',
  },
  {
    pitanje: 'Na kojem jeziku se provodi edukacija?',
    odgovor:
      'Tečaj se provodi na engleskom jeziku. Komunikacija je fizička, ne verbalna — više se radi, manje priča. Awudijev govor tijela je razumljiv bez prijevoda.',
  },
  {
    pitanje: 'Mogu li upisati samo jedan modul?',
    odgovor:
      'Da. Svaki modul je zaokružena cjelina s vlastitim certifikatom. Moduli se mogu pohađati neovisno, a popust od 100 € vrijedi za istovremenu prijavu na oba.',
  },
  {
    pitanje: 'Što je uključeno u kotizaciju?',
    odgovor:
      'U cijenu su uključeni nastavni materijali, praktičan rad u paru kroz oba dana i certifikat Učilišta Supra Studium koji se može upisati u e-radnu knjižicu.',
  },
  {
    pitanje: 'Dobiva li se certifikat?',
    odgovor:
      'Po završetku svakog modula polaznik dobiva certifikat Učilišta Supra Studium. Certifikat je priznat i može se upisati u e-radnu knjižicu.',
  },
  {
    pitanje: 'Gdje i kada se edukacija održava?',
    odgovor:
      'Modul 1 održava se u Splitu (14.–15.11.2026., Centar za ortopedsku manualnu terapiju Majce & Stojanović, Žnjanska 6) i Rijeci (6.–7.02.2027., Udruga Eterico, Ul. Zdravka Kučića 39). Modul 2 održava se u Zagrebu (10.–11.04.2027., Poliklinika Medical Body Balance, Frane Kesterčaneka 2b).',
  },
  {
    pitanje: 'Organiziraju li se tečajevi i u drugim gradovima?',
    odgovor:
      'Modul 1 trenutno se održava u Splitu i Rijeci, a Modul 2 u Zagrebu. Za termine izvan objavljenog rasporeda javite se na info@uciliste-suprastudium.hr.',
  },
];

const LomiLomiPage: React.FC = () => {
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
      title: 'Lomi Lomi masaža — Ancient Wave | Supra Studium',
      description: 'Ancient Wave Lomi Lomi — havajska tehnika u kojoj ritam, dah i pokret čine jednu sekvencu. Modul 1 u Splitu i Rijeci, Modul 2 u Zagrebu, s dr. Awudijem Atitsogbuijem.',
      path: '/lomi-lomi',
      ogImage: '/videos/lomi-hero-poster.jpg',
    });
    setJsonLd('course', courseSchema({
      name: 'Lomi Lomi masaža — Ancient Wave',
      description: 'Dvomodulna certifikacija havajske Lomi Lomi tehnike (Ancient Wave) s dr. Awudijem Atitsogbuijem — ritam, dah i pokret u jednoj sekvenci. Modul 1: Split i Rijeka. Modul 2: Zagreb.',
      path: '/lomi-lomi',
      startDate: '2026-11-14',
      endDate: '2026-11-15',
      priceEUR: 490,
      location: 'Split',
    }));
    setJsonLd('breadcrumb', courseBreadcrumb('Lomi Lomi masaža', '/lomi-lomi'));
    setJsonLd('faq', faqSchema(faq.map((f) => ({ question: f.pitanje, answer: f.odgovor }))));
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#FAF8F4' }}>

      <CourseStickyBar
        locations={[
          { city: 'Split', stage: 'Modul 1', dates: '14.–15.11.' },
          { city: 'Rijeka', stage: 'Modul 1', dates: '6.–7.2.' },
          { city: 'Zagreb', stage: 'Modul 2', dates: '10.–11.4.' },
        ]}
        price="Early Bird od 490 €"
        ctaText="Prijavi se"
        ctaHref="https://tally.so/r/wA5kvD"
        theme="light"
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

        <motion.div
          className="absolute inset-0 top-[-5rem] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/lomi-hero-poster.jpg"
            className="absolute w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          >
            <source src="/videos/lomi-hero.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlay stack — MTHero pattern */}
        <div className="absolute inset-0" style={{ background: 'rgba(14,9,4,0.20)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 130% 130% at 50% 50%, transparent 28%, rgba(6,4,2,0.32) 100%)' }} />
        <div className="absolute inset-0 hidden md:block" style={{ background: 'radial-gradient(ellipse 68% 75% at 22% 78%, rgba(8,5,2,0.42) 0%, transparent 100%)' }} />
        <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, rgba(15,12,8,0.82) 0%, rgba(15,12,8,0.58) 32%, rgba(15,12,8,0.14) 56%, transparent 70%)' }} />
        <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to top, rgba(10,8,5,0.44) 0%, rgba(10,8,5,0.18) 30%, transparent 52%)' }} />
        <div className="absolute top-0 left-0 right-0 h-32 hidden md:block" style={{ background: 'linear-gradient(to bottom, rgba(8,6,4,0.18), transparent)' }} />
        <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to bottom, rgba(14,11,7,0.62) 0%, rgba(14,11,7,0.52) 22%, rgba(14,11,7,0.40) 48%, rgba(14,11,7,0.28) 70%, rgba(14,11,7,0.40) 100%)' }} />
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
          <div className="container mx-auto px-6 relative z-10 h-full flex items-end pb-[15%] md:pb-[10%]">
            <div className="w-full" style={{ maxWidth: '50rem' }}>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
                className="mb-6"
              >
                <span
                  className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.35em] block"
                  style={{ color: 'rgba(212,175,55,0.92)', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}
                >
                  Ancient Wave Lomi Lomi · 2026 – 2027
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.50, duration: 0.7, ease: 'easeOut' }}
                className="origin-left mb-9"
              >
                <div className="w-12 h-px" style={{ backgroundColor: 'rgba(212,175,55,0.48)' }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 1.05, ease: 'easeOut' }}
                className="mb-9"
              >
                <h1
                  className="font-playfair font-semibold text-white leading-[1.12] text-[2.15rem] sm:text-[2.45rem] md:text-[2.9rem]"
                  style={{ textShadow: '0 2px 28px rgba(0,0,0,0.80), 0 1px 8px rgba(0,0,0,0.45)' }}
                >
                  Lomi Lomi počinje dahom.<br />
                  Ruke ga samo slijede.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.95, ease: 'easeOut' }}
                className="mb-9"
              >
                <p
                  className="text-[13.5px] sm:text-[14.5px] font-normal leading-[1.82]"
                  style={{ color: 'rgba(255,255,255,0.68)', maxWidth: '44ch' }}
                >
                  Havajska tehnika koja terapeuta uči disati s klijentom —
                  i iz toga izvući pokret koji ne iscrpljuje ni jednog ni drugog.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.85, ease: 'easeOut' }}
                className="mb-14 flex flex-wrap items-center"
                style={{ columnGap: '14px', rowGap: '4px' }}
              >
                {['2 modula', '3 grada', 'Ritam i dijagnostika', 'Certifikat'].map((item, i) => (
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

      {/* ── Facts band ───────────────────────────────────────────────────── */}
      <div style={{ background: '#FAF8F4', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container mx-auto px-6">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ borderLeft: '1px solid rgba(0,0,0,0.07)' }}
          >
            {[
              { label: 'Format', value: 'Modul 1 + Modul 2' },
              { label: 'Voditelj', value: 'Dr. Awudi Atitsogbui' },
              { label: 'Prvi termin', value: 'Split · 14.–15.11.2026.' },
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

      {/* ── Klinička observacija ─────────────────────────────────────────── */}
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
              <h2 className="font-playfair font-semibold text-[1.75rem] md:text-[2.1rem] leading-[1.22]" style={{ color: '#1F1D1A' }}>
                Lomi Lomi nije<br />
                masaža opuštanja.
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
              <p className="text-[13.5px] leading-[1.88] font-normal" style={{ color: '#7A7570' }}>
                To je tehnika u kojoj tempo pokreta, dubina zahvata i terapeutov vlastiti dah
                čine jednu sekvencu. Terapeutima koji je savladaju, tijelo klijenta počinje
                odgovarati drukčije — ne zato što je pritisak veći, nego zato što je ritam precizniji.
              </p>
            </motion.div>

          </div>

          {/* Observation rows */}
          <div className="max-w-5xl mx-auto mt-20">
            {[
              {
                label: 'Ritam i snaga',
                heading: 'Pogreška terapeuta nije u snazi — u odsutnosti ritma.',
                body: 'Mehanički dodir prenosi napetost. Terapeut koji radi bez unutarnjeg ritma isporučuje pritisak, ne val. Fascijalni odgovor ne aktivira se silom — aktivira se usklađenim smjerom i tempom pokreta.',
              },
              {
                label: 'Dah kao tehnika',
                heading: 'Val počinje u terapeutovim plućima, ne u rukama.',
                body: 'Svaki zahvat slijedi fazu izdaha — ne kao disciplina uma, nego kao biomehanska logika. Tkivo odgovara na smjer i timing pokreta. Dah je taj koji organizira oboje u jednu sekvencu.',
              },
              {
                label: 'Terapeutska održivost',
                heading: 'Terapeutu koji usvoji val nije potrebna pauza između klijenata.',
                body: 'Sinkronizacija daha i pokreta regenerira terapeuta dok radi, ne nakon. To je razlika između tehnike koja iscrpljuje za četiri godine i one koja se može prakticirati cijeli radni vijek.',
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

      {/* ── Photo intermezzo — dramatic ──────────────────────────────────── */}
      <div style={{ background: '#F0EDE6' }} className="py-2">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="w-full overflow-hidden relative" style={{ aspectRatio: '21/9' }}>
              <img width={1920} height={2880}
                src="/lovable-uploads/lomi-intermezzo-duo-demonstracija.webp"
                alt="Demonstracija Lomi Lomi tehnike — dvoje instruktora, Zagreb 2025."
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(10,8,5,0.38) 0%, transparent 52%)' }}
              />
              <div className="absolute bottom-6 left-8">
                <p className="text-[10px] uppercase tracking-[0.22em] font-normal" style={{ color: 'rgba(255,255,255,0.50)' }}>
                  Demonstracija tehnike · Zagreb 2025.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Metoda — dark ────────────────────────────────────────────────── */}
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
                Ritam prije sile.<br />
                Dijagnostika prije sekvence.
              </h2>
              <p className="text-[13px] leading-[1.82] font-normal" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Dva modula su strukturirana prema načelu: razumijevanje dolazi
                prije alata. Terapeut koji zna zašto radi što radi — radi to
                drukčije već od prvog dana.
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
              {tehnike.map((t) => (
                <div
                  key={t}
                  className="py-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="text-[13.5px] font-normal leading-snug" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {t}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Program ──────────────────────────────────────────────────────── */}
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
                Dva modula. Tri grada.
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

      {/* ── Editorial photo grid ─────────────────────────────────────────── */}
      <div style={{ background: '#F0EDE6' }} className="py-2">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="grid gap-[5px] grid-cols-1 md:grid-cols-[1.55fr_1fr]">
              {/* Image 1 — dominant teaching moment */}
              <div
                className="overflow-hidden relative md:col-start-1 md:row-start-1"
                style={{ aspectRatio: '4/3' }}
              >
                <img width={1920} height={1279}
                  src="/lovable-uploads/lomi-grid-instrukcija-awudi-ante.png"
                  alt="Dr. Awudi i Ante Antić zajedno korigiraju tehniku na polazniku"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-5">
                  <p className="text-[10px] uppercase tracking-[0.14em] font-normal" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    Korekcija tehnike · Zagreb 2025.
                  </p>
                </div>
              </div>

              {/* Image 2 — tall portrait: 3/4 on mobile, spans both rows on desktop */}
              <div
                className="overflow-hidden aspect-[3/4] md:aspect-auto md:col-start-2 md:row-start-1 md:row-span-2"
              >
                <img width={1920} height={2880}
                  src="/lovable-uploads/lomi-grid-podlaktica-duo.webp"
                  alt="Demonstracija zahvata podlakticom"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                  loading="lazy"
                />
              </div>

              {/* Image 3 — smaller supporting detail */}
              <div
                className="overflow-hidden md:col-start-1 md:row-start-2"
                style={{ aspectRatio: '16/7' }}
              >
                <img width={1920} height={2880}
                  src="/lovable-uploads/lomi-grid-donji-ud.webp"
                  alt="Rad s donjim udom — sekvenca i korekcija"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 40%' }}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Predavač ─────────────────────────────────────────────────────── */}
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
                <img width={1920} height={2880}
                  src="/lovable-uploads/lomi-predavac-awudi-smijeh.webp"
                  alt="Dr. Awudi Atitsogbui — voditelj Lomi Lomi edukacije"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 12%' }}
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
                Devetnaest godina, osam zemalja, 820 polaznika. Terapeut koji dođe na
                njegovu edukaciju ne odlazi s novom rutinom — odlazi s drukčijim
                razumijevanjem onoga što već radi.
              </p>
              <p className="text-[13.5px] leading-[1.88] font-normal mb-5" style={{ color: '#7A7570' }}>
                Predsjednik Svjetske federacije masaže, manualne terapije i Nuad Thaija.
                Suorganizator Hrvatskog međunarodnog prvenstva u masaži. Trostruki svjetski
                prvak u manualnim terapijama — ista tehnika kojom osvaja natjecanja
                podučava se na ovoj edukaciji.
              </p>
              <p className="text-[13.5px] leading-[1.88] font-normal mb-5" style={{ color: '#7A7570' }}>
                Školovan u tradiciji drevnog Wave Lomi Lomija na havajskim otocima.
              </p>
              <p className="text-[13.5px] leading-[1.88] font-normal" style={{ color: '#7A7570' }}>
                Tečaj se provodi na engleskom. Komunikacija je fizička, ne verbalna —
                više se radi, manje priča.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Iz prakse ────────────────────────────────────────────────────── */}
      <section style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }} className="pt-24 pb-16">
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
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal" style={{ color: '#B89A4F' }}>
                Iz prakse
              </p>
            </motion.div>

            {[
              {
                quote: 'Osjeti tok kroz tijelo — poveži ga s tokom u sebi. Da bi pomogao drugima, moraš razumjeti što znači osjećati napetost.',
                attribution: '— Dr. Awudi Atitsogbui',
              },
              {
                quote: 'Nisam očekivala da ću prve pola sata provesti učeći kako disati. I da upravo to promijeni sve ostalo.',
                attribution: '— Polaznica, Zagreb 2025.',
              },
              {
                quote: 'Moji klijenti primijete razliku. Ne pitaju što sam naučila — pitaju kada dolaze opet.',
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

      {/* ── Closing visual — the embrace ─────────────────────────────────── */}
      <div style={{ background: '#F0EDE6' }} className="py-2">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="w-full overflow-hidden" style={{ aspectRatio: '16/7' }}>
              <img width={1920} height={2880}
                src="/lovable-uploads/lomi-zavrsnica-zagrljaj.webp"
                alt="Završnica edukacije — Zagreb 2025."
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Kotizacija — dark ────────────────────────────────────────────── */}
      <section ref={kotizacijaRef} id="kotizacija" style={{ background: '#1A1814' }} className="pt-24 pb-28">
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
              <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-5" style={{ color: 'rgba(184,154,79,0.65)' }}>
                Termini i kotizacija
              </p>
              <h2 className="font-playfair font-semibold text-[1.75rem] md:text-[2.1rem] leading-[1.22]" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Modul 1 u Splitu i Rijeci.<br />
                Modul 2 u Zagrebu.
              </h2>
            </motion.div>

            {/* Termini po gradovima */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              className="mb-14"
            >
              {termini.map((t, i) => (
                <div
                  key={i}
                  className="py-6"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    ...(i === termini.length - 1 && { borderBottom: '1px solid rgba(255,255,255,0.08)' }),
                  }}
                >
                  <div className="grid items-baseline gap-4" style={{ gridTemplateColumns: '1fr auto' }}>
                    <p className="font-playfair font-medium text-[1.15rem] leading-tight" style={{ color: 'rgba(255,255,255,0.90)' }}>
                      {t.grad}
                      <span className="ml-3 text-[10px] uppercase tracking-[0.18em] font-normal" style={{ color: 'rgba(184,154,79,0.65)' }}>
                        {t.modul}
                      </span>
                    </p>
                    <p className="text-[13px] font-normal whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.72)' }}>
                      {t.datum}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5 mt-2">
                    <p className="text-[12px] font-normal leading-[1.6]" style={{ color: 'rgba(255,255,255,0.42)' }}>
                      {t.lokacija}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.14em] font-medium whitespace-nowrap" style={{ color: 'rgba(184,154,79,0.85)' }}>
                      Early Bird do {t.earlyBird}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.10}
              className="mb-14"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-6" style={{ color: 'rgba(184,154,79,0.65)' }}>
                Kotizacija po modulu
              </p>

              <div className="grid md:grid-cols-2 gap-px mb-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
                {kotizacijaData.map((row) => (
                  <div key={row.naziv} className="p-7" style={{ background: '#1A1814' }}>
                    <p className="text-[12.5px] font-normal mb-6" style={{ color: 'rgba(255,255,255,0.50)' }}>
                      {row.naziv}
                    </p>
                    <div className="flex items-baseline gap-3 mb-1">
                      <p className="font-playfair font-semibold leading-none" style={{ fontSize: '2.4rem', color: 'rgba(255,255,255,0.92)' }}>
                        {row.eb}
                      </p>
                      <p className="text-[11px] font-normal" style={{ color: 'rgba(184,154,79,0.75)' }}>
                        Early Bird
                      </p>
                    </div>
                    <p className="text-[12px] font-normal" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'line-through' }}>
                      Redovna cijena: {row.redovna}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="p-7 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                style={{ border: '1px solid rgba(184,154,79,0.38)', background: 'rgba(184,154,79,0.07)' }}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.20em] font-normal mb-2" style={{ color: 'rgba(184,154,79,0.85)' }}>
                    Preporučeno
                  </p>
                  <p className="font-playfair font-medium text-[1.15rem]" style={{ color: 'rgba(255,255,255,0.92)' }}>
                    Oba modula
                  </p>
                </div>
                <div className="flex items-baseline gap-4">
                  <p className="font-playfair font-semibold leading-none" style={{ fontSize: '2.6rem', color: 'rgba(255,255,255,0.95)' }}>
                    980 €
                  </p>
                  <p className="text-[12px] font-normal whitespace-nowrap" style={{ color: 'rgba(184,154,79,0.80)' }}>
                    Ušteda 100 €
                  </p>
                </div>
              </div>
              <p className="text-[12px] leading-[1.68] font-normal mt-6" style={{ color: 'rgba(255,255,255,0.40)' }}>
                Prijave se u pravilu zatvaraju 45 dana prije početka pojedine edukacije kako bismo na vrijeme organizirali održavanje tečaja.
              </p>
              <p className="text-[12px] leading-[1.68] font-normal mt-2" style={{ color: 'rgba(255,255,255,0.40)' }}>
                Ako se javljaš nakon isteka tog roka, slobodno nas kontaktiraj na{' '}
                <a href="mailto:info@uciliste-suprastudium.hr" style={{ color: 'rgba(184,154,79,0.85)' }}>info@uciliste-suprastudium.hr</a>
                {' '}ili nazovi{' '}
                <a href="tel:+385958558953" style={{ color: 'rgba(184,154,79,0.85)' }}>095 855 89 53</a>.
                Ako postoji slobodno mjesto i organizacijske mogućnosti to dopuštaju, provjerit ćemo mogućnost naknadne prijave.
              </p>
            </motion.div>

            {/* Rezervacija mjesta */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.16}
              className="mb-14 pt-12"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-6" style={{ color: 'rgba(184,154,79,0.65)' }}>
                Rezervacija mjesta
              </p>
              <div className="space-y-4">
                {[
                  { bold: 'Akontacija 100 €', rest: ' potvrđuje rezervaciju mjesta.' },
                  { bold: 'Preostali iznos kotizacije', rest: ' plaća se najkasnije 30 dana prije početka edukacije.' },
                  { bold: 'Broj mjesta', rest: ' ograničen je na maksimalno 12 polaznika.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex-shrink-0 mt-[3px]" style={{ color: 'rgba(184,154,79,0.65)', fontSize: '11px' }}>—</span>
                    <p className="text-[13px] leading-[1.68] font-normal" style={{ color: 'rgba(255,255,255,0.58)' }}>
                      <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{item.bold}</span>{item.rest}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.20}
            >
              <a
                href="https://tally.so/r/wA5kvD"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal uppercase cursor-pointer whitespace-nowrap inline-block"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  padding: '8px 20px',
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
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Bonus za prvih 5 ─────────────────────────────────────────────── */}
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
                Bonus za prvih 5 prijavljenih
              </p>
              <div className="w-10 h-px mb-9" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <p className="text-[14px] leading-[1.85] font-normal" style={{ color: '#5F5A52', maxWidth: '54ch' }}>
                Cijena edukacije ostaje ista — raste njezina vrijednost. Prvih 5 prijavljenih
                polaznika dobiva pet dodatnih resursa koji nisu dio standardnog programa.
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
                {bonusi.map((bonus, i) => {
                  const lastRowStart = bonusi.length % 2 === 1 ? bonusi.length - 1 : bonusi.length - 2;
                  const isLastAlone = bonusi.length % 2 === 1 && i === bonusi.length - 1;
                  return (
                    <div
                      key={i}
                      className={`p-8 ${isLastAlone ? 'md:col-span-2' : ''}`}
                      style={{
                        background: 'white',
                        borderRight: i % 2 === 0 && !isLastAlone ? '1px solid rgba(0,0,0,0.07)' : 'none',
                        borderBottom: i < lastRowStart ? '1px solid rgba(0,0,0,0.07)' : 'none',
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
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
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

      <CourseRecommendations currentCourse="lomi-lomi" />
      <CourseFooter />

    </div>
  );
};

export default LomiLomiPage;
