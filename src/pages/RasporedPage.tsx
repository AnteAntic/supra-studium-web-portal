import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ContactFooter } from '@/components/ContactFooter';
import { setPageMeta, setJsonLd, faqSchema } from '@/lib/seo';

const fadeUp = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const tickerItems = [
  'Manualna terapija', 'ATP terapija', 'Kalabaš certifikacija',
  'Lomi Lomi', 'Cupping terapija', 'CFM Body Reset',
];

type CourseItem =
  | { type?: 'regular'; text: string; href?: string }
  | { type: 'advanced'; text: string; sub?: string; href?: string };

interface Pathway {
  id: string;
  num: string;
  label: string;
  tagline: string;
  courses: CourseItem[];
  image: string;
  imagePos: string;
  ctaLabel: string;
  ctaHref: string;
  flip: boolean;
}

const pathways: Pathway[] = [
  {
    id: 'manualna',
    num: '01',
    label: 'Manualna terapija',
    tagline: 'Strukturirani program napredovanja u 5 stupnjeva — od osnova do kliničke integracije.',
    courses: [
      { text: '1. stupanj — osnove i uvod u palpaciju',                           href: '/skola-manualne-terapije' },
      { text: '2. stupanj — napredna tehnika i mobilizacija',                     href: '/skola-manualne-terapije' },
      { text: '3. stupanj — klinička primjena i evaluacija',                      href: '/skola-manualne-terapije' },
      { text: '4. stupanj — specijalizacija i integracija',                       href: '/skola-manualne-terapije' },
      { type: 'advanced', text: '5. stupanj — advanced level i integracija kompleksnih kliničkih pristupa', href: '/skola-manualne-terapije' },
    ],
    image: '/lovable-uploads/raspored-pathway-manualna-v2.webp',
    imagePos: 'center 38%',
    ctaLabel: 'Pogledaj program',
    ctaHref: '#jesen-2026',
    flip: false,
  },
  {
    id: 'specijalizacije',
    num: '02',
    label: 'Specijalizacije',
    tagline: 'Fokusirani intenzivi za konkretne kliničke pristupe. Svaki program stoji samostalno.',
    courses: [
      { text: 'Akupresura & Trigger Point terapija',    href: '/akupresura-trigger-point' },
      { text: 'Crossfriction & Funkcionalna masaža',    href: '/crossfriction-funkcionalna-masaza' },
      { type: 'advanced', text: '3D Advanced Therapeutic Stretching', sub: 'mobilnost, fascijalne linije i integrirani terapijski stretching', href: '/3d-advanced-therapeutic-stretching' },
      { text: 'Cupping terapija',                       href: '/cupping-terapija' },
    ],
    image: '/lovable-uploads/raspored-pathway-holisticki-v2.webp',
    imagePos: 'center 34%',
    ctaLabel: 'Pogledaj edukacije',
    ctaHref: '#jesen-2026',
    flip: true,
  },
  {
    id: 'holisticki',
    num: '03',
    label: 'Holistički i tradicionalni pristupi',
    tagline: 'Cjeloviti pristupi radu kroz ritam, prisutnost i manualnu preciznost.',
    courses: [
      { text: 'Lomi Lomi masaža',              href: '/lomi-lomi' },
      { text: 'Kalabaš terapijski pristupi',   href: '/calabash-certifikacija' },
    ],
    image: '/lovable-uploads/raspored-pathway-holisticki-lomi.webp',
    imagePos: 'center 28%',
    ctaLabel: 'Pogledaj edukacije',
    ctaHref: '#jesen-2026',
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
    setPageMeta({
      title: 'Raspored edukacija 2026 | Supra Studium',
      description: 'Pregled svih termina kliničkih edukacija Supra Studium — Zagreb, Split, Rijeka. Manualna terapija, CFM, akupresura, cupping, Lomi Lomi i kalabaš.',
      path: '/raspored',
      ogImage: '/lovable-uploads/raspored-hero-edukacija.webp',
    });
    setJsonLd('faq', faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a }))));
  }, []);

  return (
    <div className="-mt-20">
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track { animation: ticker-scroll 82s linear infinite; }
      `}</style>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">

        {/* Photo */}
        <img fetchPriority="high" width={1920} height={1280}
          src="/lovable-uploads/raspored-hero-edukacija.webp"
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
                <span
                  className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.26em] sm:tracking-[0.32em]"
                  style={{ color: 'rgba(212,175,55,0.92)', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}
                >
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
                <p
                  className="text-[13px] font-normal leading-[1.6]"
                  style={{ color: 'rgba(255,255,255,0.90)', textShadow: '0 1px 3px rgba(0,0,0,0.55)' }}
                >
                  Svi termini potvrđeni — rujan 2026. do travnja 2027.
                </p>
              </motion.div>

              {/* Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.78, duration: 0.8 }}
                className="mb-10"
              >
                <p
                  className="text-[12px] font-normal leading-[1.72] max-w-sm"
                  style={{ color: 'rgba(255,255,255,0.65)', textShadow: '0 1px 2px rgba(0,0,0,0.40)' }}
                >
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
                <a
                  href="#jesen-2026"
                  className="text-[10px] font-normal tracking-[0.14em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.72)', textShadow: '0 1px 2px rgba(0,0,0,0.45)', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.95)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                  onClick={e => { e.preventDefault(); document.getElementById('jesen-2026')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  — Raspored 2026–2027
                </a>
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
                className="text-[10px] uppercase tracking-[0.18em] font-normal"
                style={{ color: 'rgba(184,154,79,0.90)' }}
              >
                Zagreb · Rijeka · Split
              </span>
              <span className="hidden sm:block w-px h-3 bg-[#3a3530]" />
              <span
                className="text-[10px] uppercase tracking-[0.16em] font-normal text-center sm:text-left"
                style={{ color: 'rgba(237,233,227,0.72)' }}
              >
                Kalabaš · 19.9. — ATP · 9.10. — MT1 · 20.11. — CFM · 6.2. — Kalabaš ZG · 6.3. — Cupping · 17.4.
              </span>
              <span className="hidden sm:block w-px h-3 bg-[#3a3530]" />
              <span
                className="text-[10px] uppercase tracking-[0.18em] font-normal"
                style={{ color: 'rgba(184,154,79,0.72)' }}
              >
                Ograničene grupe
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ────────────────────────────────────────────────── */}
      <div
        className="bg-[#141311] overflow-hidden"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="ticker-track flex whitespace-nowrap py-3.5">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[10px] tracking-[0.18em] font-normal px-8 flex-shrink-0"
              style={{ color: 'rgba(184,154,79,0.55)' }}
            >
              {item}
              <span
                className="ml-8 w-px h-2.5 inline-block flex-shrink-0"
                style={{ background: 'rgba(184,154,79,0.30)' }}
              />
            </span>
          ))}
        </div>
      </div>

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
            <h2 className="font-playfair font-semibold text-4xl sm:text-5xl text-[#1F1D1A] leading-[1.15] max-w-lg mb-5">
              Edukacijski putevi.
            </h2>
            <p className="text-[11px] text-[#5a5450] leading-[1.72] max-w-[46ch]">
              Programi razvijani kroz dugogodišnji praktični rad i edukaciju terapeuta iz Hrvatske i inozemstva.
            </p>
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
                className={`flex flex-col-reverse ${path.flip ? 'md:flex-row-reverse' : 'md:flex-row'} border-t border-[#e3e0d8] pb-10 md:pb-0 md:min-h-[22rem] md:max-h-[24rem]`}
              >
                {/* Photo */}
                <div className={`w-full md:w-[54%] md:aspect-auto overflow-hidden ${path.id === 'holisticki' ? 'aspect-[3/2]' : 'aspect-[4/3]'}`}>
                  <img
                    src={path.image}
                    alt={path.label}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: path.imagePos,
                      filter: 'brightness(0.96) saturate(0.82) contrast(1.02)',
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
                  <ul className="space-y-3 mb-9">
                    {path.courses.map((course, ci) => {
                      const isAdvanced = course.type === 'advanced';
                      const linkCls = "transition-colors duration-[180ms] ease-out hover:text-[#B89A4F] hover:underline underline-offset-[3px]";
                      const linkStyle: React.CSSProperties = { textDecorationColor: 'rgba(184,154,79,0.35)' };

                      const innerContent = isAdvanced ? (
                        <>
                          {(() => {
                            const numMatch = course.text.match(/^(\d+\.\s*)(.*)/s);
                            return numMatch ? (
                              <>
                                <span style={{ color: 'rgba(184,154,79,0.82)' }}>{numMatch[1].trim()}</span>
                                {' '}{numMatch[2]}
                              </>
                            ) : course.text;
                          })()}
                          {'sub' in course && course.sub && (
                            <span className="block text-[11px] mt-0.5" style={{ color: 'rgba(90,84,80,0.65)' }}>
                              {course.sub}
                            </span>
                          )}
                        </>
                      ) : (
                        course.text
                      );

                      return (
                        <li key={ci} className={`flex items-start gap-3 text-[12px] leading-[1.6] ${isAdvanced ? '' : 'text-[#3b3b3b]'}`}
                          style={isAdvanced ? { color: 'rgba(59,57,54,0.82)' } : undefined}
                        >
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0 mt-[0.45em]"
                            style={{ background: isAdvanced ? 'rgba(184,154,79,0.75)' : 'rgba(184,154,79,0.55)' }}
                          />
                          <span>
                            {course.href ? (
                              <Link to={course.href} className={linkCls} style={linkStyle}>
                                {innerContent}
                              </Link>
                            ) : (
                              innerContent
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex items-center gap-6">
                    <span
                      className="text-[9px] uppercase tracking-[0.24em] font-normal"
                      style={{ color: 'rgba(184,154,79,0.58)' }}
                    >
                      Termini uskoro
                    </span>
                    {path.ctaHref.startsWith('#') ? (
                      <button
                        onClick={() => {
                          const el = document.getElementById(path.ctaHref.slice(1));
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="text-[10px] uppercase tracking-[0.18em] font-normal transition-colors duration-300 cursor-pointer"
                        style={{ color: 'rgba(31,29,26,0.52)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(31,29,26,0.85)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(31,29,26,0.52)')}
                      >
                        {path.ctaLabel} →
                      </button>
                    ) : (
                      <Link
                        to={path.ctaHref}
                        className="text-[10px] uppercase tracking-[0.18em] font-normal transition-colors duration-300"
                        style={{ color: 'rgba(31,29,26,0.52)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(31,29,26,0.85)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(31,29,26,0.52)')}
                      >
                        {path.ctaLabel} →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-[#e3e0d8]" />
          </div>
        </div>
      </section>

      {/* ── Seasonal Timeline ─────────────────────────────────────── */}
      <section id="jesen-2026" className="bg-[#141311] py-24">
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
              Jesen 2026. — Proljeće 2027.
            </h2>
          </motion.div>

          <div className="space-y-px bg-[#201e1a] max-w-2xl">
            {[
              { month: 'Rujan',    code: '09', year: '2026', status: 'Termini potvrđeni.', sub: 'Kalabaš (Split) · 19.–20.9. — Kalabaš (Rijeka) · 26.–27.9.' },
              { month: 'Listopad', code: '10', year: '2026', status: 'Termini potvrđeni.', sub: 'ATP · 9.–11.10. — Cupping (Split) · 25.10. — Klinička propedeutika (Split) · 31.10. — 3D Stretching · 31.10.–1.11.' },
              { month: 'Studeni',  code: '11', year: '2026', status: 'Termini potvrđeni.', sub: 'CFM 3 (Rijeka) · 7.–8.11. — MT5 Advanced · 8.11. — Lomi Lomi (Split) · 14.–15.11. — MT1 · 20.–22.11.' },
              { month: 'Prosinac', code: '12', year: '2026', status: 'Termin potvrđen.', sub: 'MT2 · 12.–13.12.' },
              { month: 'Siječanj', code: '01', year: '2027', status: 'Termini potvrđeni.', sub: 'ATP (Split) · 15.–17.01. — MT3 · 30.–31.01.' },
              { month: 'Veljača',  code: '02', year: '2027', status: 'Termini potvrđeni.', sub: 'CFM 1 (Zagreb) · 6.–7.02. — Lomi Lomi (Rijeka) · 6.–7.02.' },
              { month: 'Ožujak',   code: '03', year: '2027', status: 'Termini potvrđeni.', sub: 'Kalabaš (Zagreb) · 6.–7.03. — 3D Stretching (Rijeka) · 13.–14.03.' },
              { month: 'Travanj',  code: '04', year: '2027', status: 'Termini potvrđeni.', sub: 'Lomi Lomi (Modul 2) · 10.–11.04. — Cupping (Zagreb) · 17.04. — Procjena posture (Zagreb) · 18.04.' },
            ].map((item, i) => (
              <motion.div
                key={item.month}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="bg-[#141311] hover:bg-[#181614] transition-colors duration-300 group grid grid-cols-[7rem_1fr] md:grid-cols-[10rem_1fr] gap-6 md:gap-10 px-6 md:px-8 py-7 items-start"
              >
                <div className="pt-0.5">
                  <p
                    className="text-[9px] uppercase tracking-[0.24em] mb-1.5"
                    style={{ color: 'rgba(184,154,79,0.52)' }}
                  >
                    {item.code} / {item.year}
                  </p>
                  <p className="font-playfair text-xl sm:text-2xl text-[#ede9e3] font-medium">
                    {item.month}
                  </p>
                </div>
                <div className="border-l border-[#2e2b27] group-hover:border-[#B89A4F]/30 transition-colors duration-300 pl-6 md:pl-8 pt-0.5">
                  <p
                    className="text-[11px] uppercase tracking-[0.14em] mb-2"
                    style={{ color: 'rgba(237,233,227,0.58)' }}
                  >
                    {item.status}
                  </p>
                  <p
                    className="text-[13px] leading-[1.6]"
                    style={{ color: 'rgba(237,233,227,0.62)' }}
                  >
                    {item.sub}
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
            className="mt-10"
          >
            <p
              className="text-[13px] leading-[1.7] mb-8 max-w-md"
              style={{ color: 'rgba(237,233,227,0.62)' }}
            >
              Edukacije se održavaju u Zagrebu, Rijeci i Splitu u manjim praktičnim grupama.
            </p>
            <a
              href="https://tally.so/r/wA5kvD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] uppercase tracking-[0.16em] font-normal border px-6 py-3 rounded-sm transition-colors duration-300"
              style={{
                color: 'rgba(237,233,227,0.72)',
                borderColor: 'rgba(237,233,227,0.28)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'rgba(237,233,227,0.92)';
                el.style.borderColor = 'rgba(237,233,227,0.52)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'rgba(237,233,227,0.72)';
                el.style.borderColor = 'rgba(237,233,227,0.28)';
              }}
            >
              Prijavi interes — primi obavijest
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── Documentary Intermezzo ────────────────────────────────── */}
      <section className="relative h-[55vh] overflow-hidden">
        <img width={1365} height={2048}
          src="/lovable-uploads/raspored-intermezzo-edukacija.webp"
          alt="Instruktor demonstrira tehniku polaznicima — edukacija manualne terapije."
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center 35%',
            filter: 'saturate(0.82) contrast(1.03) brightness(0.93)',
          }}
          loading="lazy"
        />
        {/* Gentle base tone */}
        <div className="absolute inset-0" style={{ background: 'rgba(10,6,2,0.08)' }} />
        {/* Edge vignette — restrained */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 92% 92% at 50% 50%, transparent 48%, rgba(8,5,2,0.18) 74%, rgba(8,5,2,0.42) 100%)',
          }}
        />
        {/* Bottom transition — reduced fog */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF8F4] to-transparent" />
        {/* Left edge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(8,5,2,0.28) 0%, rgba(8,5,2,0.06) 26%, transparent 44%)',
          }}
        />
        {/* Quote */}
        <div className="absolute bottom-10 md:bottom-14 container mx-auto px-6 left-0 right-0">
          <p
            className="font-playfair font-normal text-[0.9rem] md:text-[1.05rem] leading-[1.82] max-w-[40ch]"
            style={{ color: 'rgba(255,255,255,0.64)' }}
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
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <span className="text-[14px] font-medium text-[#1F1D1A] leading-[1.5] group-hover:text-[#B89A4F] transition-colors duration-300 pr-6">
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
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
              style={{ color: 'rgba(237,233,227,0.68)' }}
            >
              Prijavi interes i primi informacije među prvima.
            </p>
            <a
              href="https://5694f0fd.sibforms.com/serve/MUIFAOs4ZuXxMKp4E6OJZAlkghxH86yc0VpKZMzvj1AlsrKhc4cLBDBY9WaBoeIuOHyXf2NJenq0rxXMRZDSJpyVQsjUZ97m3lmDobO_SD_6O9qDUZtBJinN9O0QZ0fBTdJk0ooP8bihntndqxZM31gih2HMWqvB0698-PPpdvSrFbmCzrY5XPEWHVgv5AKym43COwDYevehRvGW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a832]/90 hover:bg-[#c9a832] text-[#1F1D1A] px-8 py-3 text-[10px] font-medium rounded-sm tracking-[0.20em] uppercase transition-colors duration-300"
            >
              Prijavi interes
            </a>
            <p
              className="text-[11px] mt-5 tracking-[0.06em]"
              style={{ color: 'rgba(237,233,227,0.48)' }}
            >
              Manje grupe. Praktičan rad. Individualni pristup.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}
