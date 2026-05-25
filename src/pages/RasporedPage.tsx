import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ContactFooter } from '@/components/ContactFooter';

const fadeUp = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const pathways = [
  {
    id: 'manualna',
    num: '01',
    label: 'Manualna terapija',
    tagline: 'Strukturirani program napredovanja u 4 stupnja — od osnova do kliničke specijalizacije.',
    courses: [
      '1. stupanj — osnove i uvod u palpaciju',
      '2. stupanj — napredna tehnika i mobilizacija',
      '3. stupanj — klinička primjena i evaluacija',
      '4. stupanj — specijalizacija i integracija',
    ],
    image: '/lovable-uploads/mt-stosic-demonstracija.jpg',
    imagePos: 'center 30%',
    ctaLabel: 'Pogledaj program',
    ctaHref: '/manualna-terapija',
    flip: false,
  },
  {
    id: 'specijalizacije',
    num: '02',
    label: 'Specijalizacije',
    tagline: 'Fokusirani intenzivi za konkretne kliničke pristupe. Svaki program stoji samostalno.',
    courses: [
      'Akupresura & Trigger Point terapija',
      'Crossfriction & Funkcionalna masaža',
      'Kalabaš certifikacija',
      'Cupping terapija',
    ],
    image: '/lovable-uploads/cmc-edukacija-sira.jpg',
    imagePos: 'center 40%',
    ctaLabel: 'Pogledaj edukacije',
    ctaHref: '/tecajevi',
    flip: true,
  },
  {
    id: 'holisticki',
    num: '03',
    label: 'Holistički i tradicionalni pristupi',
    tagline: 'Cjeloviti terapeutski pristupi s međunarodnim predavačima i dugom tradicijom primjene.',
    courses: [
      'Lomi Lomi masaža — havajski holistički tretman',
      'Thai terapeutski pristupi',
    ],
    image: '/lovable-uploads/lomi-intermezzo-duo-demonstracija.jpg',
    imagePos: 'center 35%',
    ctaLabel: 'Pogledaj Lomi Lomi',
    ctaHref: '/lomi-lomi',
    flip: false,
  },
];

const faqItems = [
  {
    q: 'Kako se prijaviti?',
    a: 'Prijava se vrši putem online obrasca dostupnog na gumbu "Prijavi interes". Popunite kratku prijavu i kontaktirat ćemo vas s detaljima o terminu i kotizaciji čim termini budu potvrđeni.',
  },
  {
    q: 'Trebam li prethodno iskustvo?',
    a: 'Za tečajeve manualne terapije preporučuje se osnovno znanje anatomije ili završen studij fizioterapije. Za specijalizacije i holističke pristupe nije potrebno prethodno iskustvo — otvoreni su za sve terapeute koji žele razvijati svoju praksu.',
  },
  {
    q: 'Dobiva li se certifikat?',
    a: 'Da. Svi polaznici dobivaju službenu potvrdu o pohađanju. Certifikat je međunarodno relevantan, priznat od strane World Federation for Manual/Manipulative Therapy i može se upisati u e-radnu knjižicu kao dodatno obrazovanje.',
  },
  {
    q: 'U kojim gradovima održavate edukacije?',
    a: 'Edukacije se u pravilu održavaju u Zagrebu, Rijeci i Splitu. Povremeno organiziramo edukacije i u Slavonskom Brodu i drugim gradovima ovisno o interesu polaznika.',
  },
  {
    q: 'Jesu li mjesta ograničena?',
    a: 'Da. Grupe su namjerno male — tipično 8 do 16 polaznika — kako bi svaki polaznik dobio individualnu pažnju predavača. Preporučujemo ranu prijavu.',
  },
];

export default function RasporedPage() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="-mt-20">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">

        {/* Photo */}
        <img
          src="/lovable-uploads/raspored-hero-edukacija.jpg"
          alt="Edukacija manualne terapije — grupna demonstracija"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center 30%',
            filter: 'brightness(0.9) saturate(0.85) contrast(0.97)',
          }}
        />

        {/* Base tonal settle */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Desktop: left-dark text zone */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(to right, rgba(10,8,6,0.84) 0%, rgba(10,8,6,0.62) 28%, rgba(10,8,6,0.22) 54%, rgba(10,8,6,0.06) 68%, transparent 80%)',
          }}
        />

        {/* Desktop: radial depth behind headline */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'radial-gradient(ellipse 52% 72% at 10% 65%, rgba(6,4,2,0.36) 0%, transparent 100%)',
          }}
        />

        {/* Mobile: vertical gradient */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,8,6,0.70) 0%, rgba(10,8,6,0.52) 28%, rgba(10,8,6,0.34) 55%, rgba(10,8,6,0.22) 72%, rgba(10,8,6,0.36) 100%)',
          }}
        />

        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/18 to-transparent" />

        {/* Bottom fade into status band */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#141311] to-transparent" />

        {/* Content */}
        <motion.div style={{ opacity, y }} className="absolute inset-0">
          <div className="container mx-auto px-6 relative z-10 h-full flex items-end pb-[22%] md:pb-[13%]">
            <div className="max-w-xl w-full">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-5"
              >
                <span className="text-[#B89A4F]/70 text-[9px] sm:text-[10px] font-normal uppercase tracking-[0.26em] sm:tracking-[0.32em]">
                  Supra Studium
                </span>
              </motion.div>

              {/* Separator */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                className="origin-left mb-7"
              >
                <div className="w-10 h-px bg-[#B89A4F]/45" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
                className="mb-5"
              >
                <h1
                  className="font-playfair font-semibold text-white leading-[1.14] text-[1.9rem] sm:text-[2.2rem] md:text-[2.55rem]"
                  style={{ textShadow: '0 2px 18px rgba(0,0,0,0.50), 0 1px 5px rgba(0,0,0,0.30)' }}
                >
                  Raspored edukacija
                </h1>
              </motion.div>

              {/* Subline */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
                className="mb-3"
              >
                <p className="text-[13px] font-normal text-white/72 leading-[1.6]">
                  Novi termini za jesen 2026. dolaze uskoro.
                </p>
              </motion.div>

              {/* Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.78, duration: 0.8 }}
                className="mb-10"
              >
                <p className="text-[12px] font-normal leading-[1.72] max-w-sm" style={{ color: 'rgba(255,255,255,0.50)' }}>
                  Specijalizirane edukacije manualne terapije, funkcionalnog rada i terapeutskih pristupa.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.7 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              >
                <a
                  href="https://tally.so/r/wA5kvD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B89A4F]/90 hover:bg-[#B89A4F] text-white px-7 py-2.5 text-[10px] font-medium rounded-sm tracking-[0.18em] uppercase transition-colors duration-300 inline-block"
                >
                  Prijavi interes
                </a>
                <Link
                  to="/tecajevi"
                  className="text-[10px] font-normal tracking-[0.14em] uppercase transition-colors duration-300"
                  style={{ color: 'rgba(255,255,255,0.62)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.88)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.62)')}
                >
                  — Pogledaj edukacije
                </Link>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Status Band ───────────────────────────────────────────── */}
      <section className="bg-[#141311]">
        <div className="border-b border-[#252220]">
          <div className="container mx-auto px-6 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
              <span
                className="text-[9px] uppercase tracking-[0.30em] font-normal"
                style={{ color: 'rgba(184,154,79,0.68)' }}
              >
                Zagreb · Rijeka · Split
              </span>
              <span className="hidden sm:block w-px h-3 bg-[#3a3530]" />
              <span
                className="text-[9px] uppercase tracking-[0.26em] font-normal text-center sm:text-left"
                style={{ color: 'rgba(237,233,227,0.36)' }}
              >
                Jesenski termini u finalnom usklađivanju
              </span>
              <span className="hidden sm:block w-px h-3 bg-[#3a3530]" />
              <span
                className="text-[9px] uppercase tracking-[0.26em] font-normal"
                style={{ color: 'rgba(184,154,79,0.50)' }}
              >
                Ograničene grupe
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Edukacijski Putevi ────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-24">
        <div className="container mx-auto px-6">

          {/* Section header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-4">Programi</p>
            <h2 className="font-playfair text-3xl sm:text-4xl text-[#1F1D1A] leading-[1.2] max-w-lg">
              Edukacijski putevi.
            </h2>
          </motion.div>

          {/* Pathway rows */}
          <div>
            {pathways.map((path, i) => (
              <motion.div
                key={path.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.08}
                className={`flex flex-col ${path.flip ? 'md:flex-row-reverse' : 'md:flex-row'} border-t border-[#e3e0d8] py-0 md:min-h-[22rem]`}
              >
                {/* Photo */}
                <div className="w-full md:w-[54%] aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={path.image}
                    alt={path.label}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: path.imagePos,
                      filter: 'grayscale(8%)',
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <div
                  className={`
                    w-full md:w-[46%] flex flex-col justify-center
                    py-10 md:py-14
                    ${path.flip ? 'md:pr-14 md:pl-0' : 'md:pl-14 md:pr-0'}
                  `}
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.28em] font-normal mb-4"
                    style={{ color: 'rgba(184,154,79,0.65)' }}
                  >
                    {path.num}
                  </p>
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-[#1F1D1A] mb-3 leading-[1.3]">
                    {path.label}
                  </h3>
                  <p className="text-[12px] text-[#5a5450] leading-[1.72] mb-7 max-w-[34ch]">
                    {path.tagline}
                  </p>
                  <ul className="space-y-2.5 mb-9">
                    {path.courses.map((course, ci) => (
                      <li key={ci} className="flex items-center gap-3 text-[12px] text-[#3b3b3b] leading-[1.6]">
                        <span className="w-1 h-1 rounded-full bg-[#B89A4F]/55 flex-shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-6">
                    <span
                      className="text-[9px] uppercase tracking-[0.24em] font-normal"
                      style={{ color: 'rgba(184,154,79,0.58)' }}
                    >
                      Termini uskoro
                    </span>
                    <Link
                      to={path.ctaHref}
                      className="text-[10px] uppercase tracking-[0.18em] font-normal transition-colors duration-300"
                      style={{ color: 'rgba(31,29,26,0.52)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(31,29,26,0.85)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(31,29,26,0.52)')}
                    >
                      {path.ctaLabel} →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-[#e3e0d8]" />
          </div>
        </div>
      </section>

      {/* ── Seasonal Timeline ─────────────────────────────────────── */}
      <section className="bg-[#141311] py-24">
        <div className="container mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#9e8a46] mb-4">Raspored</p>
            <h2 className="font-playfair text-3xl sm:text-4xl text-[#ede9e3] leading-[1.2]">
              Jesen 2026.
            </h2>
          </motion.div>

          <div className="space-y-px bg-[#201e1a] max-w-2xl">
            {[
              { month: 'Rujan',    code: '09' },
              { month: 'Listopad', code: '10' },
              { month: 'Studeni',  code: '11' },
            ].map((item, i) => (
              <motion.div
                key={item.month}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="bg-[#141311] grid grid-cols-[7rem_1fr] md:grid-cols-[10rem_1fr] gap-6 md:gap-10 px-6 md:px-8 py-7 items-center"
              >
                <div>
                  <p
                    className="text-[9px] uppercase tracking-[0.24em] mb-1.5"
                    style={{ color: 'rgba(184,154,79,0.52)' }}
                  >
                    {item.code} / 2026
                  </p>
                  <p className="font-playfair text-xl sm:text-2xl text-[#ede9e3] font-medium">
                    {item.month}
                  </p>
                </div>
                <div className="border-l border-[#2e2b27] pl-6 md:pl-8">
                  <p
                    className="text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: 'rgba(237,233,227,0.30)' }}
                  >
                    Datumi u finalnom usklađivanju
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.35}
            className="mt-12"
          >
            <a
              href="https://tally.so/r/wA5kvD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] uppercase tracking-[0.20em] font-normal border px-6 py-3 rounded-sm transition-colors duration-300"
              style={{
                color: 'rgba(237,233,227,0.58)',
                borderColor: 'rgba(237,233,227,0.18)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'rgba(237,233,227,0.85)';
                el.style.borderColor = 'rgba(237,233,227,0.38)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'rgba(237,233,227,0.58)';
                el.style.borderColor = 'rgba(237,233,227,0.18)';
              }}
            >
              Prijavi interes — primi obavijest
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── Documentary Intermezzo ────────────────────────────────── */}
      <section className="relative h-[55vh] overflow-hidden">
        <img
          src="/lovable-uploads/mt-parovi-rada.jpg"
          alt="Praktičan rad u parovima — edukacija manualne terapije."
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center 40%',
            filter: 'saturate(0.80) contrast(1.04) brightness(0.90)',
          }}
          loading="lazy"
        />
        {/* Base warm tone */}
        <div className="absolute inset-0" style={{ background: 'rgba(10,6,2,0.12)' }} />
        {/* Edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 88% 88% at 50% 50%, transparent 40%, rgba(8,5,2,0.22) 72%, rgba(8,5,2,0.50) 100%)',
          }}
        />
        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#FAF8F4] to-transparent" />
        {/* Left edge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(8,5,2,0.32) 0%, rgba(8,5,2,0.08) 28%, transparent 48%)',
          }}
        />
        {/* Quote */}
        <div className="absolute bottom-10 md:bottom-16 container mx-auto px-6 left-0 right-0">
          <p
            className="font-playfair font-normal text-[0.9rem] md:text-[1.05rem] leading-[1.82] max-w-[40ch]"
            style={{ color: 'rgba(255,255,255,0.62)' }}
          >
            "Znanje mora biti primjenjivo već u ponedjeljak."
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-24 px-6">
        <div className="max-w-2xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-5">Česta pitanja</p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-[1.25]">
              Najčešća pitanja prije početka.
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-0">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.07}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="border-0 border-t first:border-t-0"
                  style={{ borderColor: 'rgba(0,0,0,0.08)' }}
                >
                  <AccordionTrigger className="py-5 text-left hover:no-underline group">
                    <span className="text-[13px] font-medium text-[#1F1D1A] leading-[1.5] group-hover:text-[#B89A4F] transition-colors duration-300 pr-6">
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-[12px] text-[#3b3b3b] leading-[1.78]">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="bg-[#141311] py-28 px-6">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#9e8a46] mb-8">
              Jesen 2026.
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl text-[#ede9e3] leading-[1.25] mb-5">
              Novi termini dolaze uskoro.
            </h2>
            <p
              className="text-[13px] leading-[1.72] mb-11 max-w-[32ch] mx-auto"
              style={{ color: 'rgba(237,233,227,0.48)' }}
            >
              Prijavi interes i primi informacije među prvima.
            </p>
            <a
              href="https://tally.so/r/wA5kvD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a832]/90 hover:bg-[#c9a832] text-[#1F1D1A] px-8 py-3 text-[10px] font-medium rounded-sm tracking-[0.20em] uppercase transition-colors duration-300"
            >
              Prijavi interes
            </a>
          </motion.div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}
