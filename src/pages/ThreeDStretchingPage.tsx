import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import { CourseFooter } from '@/components/CourseFooter';
import { CourseRecommendations } from '@/components/course/CourseRecommendations';

/* ─── Inline hero (static image, no video) ─────────────────────── */
function ThreeDHero({
  onScrollToProgram,
  onScrollToPricing,
}: {
  onScrollToProgram: () => void;
  onScrollToPricing: () => void;
}) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '42%']);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

      {/* Static image background */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/3ds-hero.jpg"
          alt="3D Advanced Therapeutic Stretching"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
      </div>

      {/* Base tonal layer */}
      <div className="absolute inset-0 bg-black/18" />

      {/* Desktop: cinematic left text zone */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(14,10,6,0.86) 0%, rgba(14,10,6,0.64) 30%, rgba(14,10,6,0.20) 56%, rgba(14,10,6,0.04) 70%, transparent 82%)',
        }}
      />

      {/* Desktop: radial depth behind headline */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'radial-gradient(ellipse 55% 75% at 10% 62%, rgba(8,5,2,0.40) 0%, transparent 100%)',
        }}
      />

      {/* Mobile: vertical gradient */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(14,11,7,0.64) 0%, rgba(14,11,7,0.52) 22%, rgba(14,11,7,0.38) 50%, rgba(14,11,7,0.26) 72%, rgba(14,11,7,0.40) 100%)',
        }}
      />

      {/* Desktop: bottom grounding */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to top, rgba(10,8,5,0.48) 0%, rgba(10,8,5,0.18) 30%, transparent 52%)',
        }}
      />

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/22 to-transparent" />

      {/* Content */}
      <motion.div style={{ opacity, y }} className="absolute inset-0">
        <div className="container mx-auto px-6 relative z-10 h-full flex items-end pb-[18%] md:pb-[8%]">
          <div className="w-full" style={{ maxWidth: '50rem' }}>

            {/* Category label */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
              className="mb-6"
            >
              <span
                className="text-[9px] sm:text-[10px] font-normal uppercase tracking-[0.28em] block"
                style={{ color: 'rgba(212,175,55,0.55)' }}
              >
                3D Advanced Therapeutic Stretching · Zagreb
              </span>
            </motion.div>

            {/* Separator */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.50, duration: 0.7, ease: 'easeOut' }}
              className="origin-left mb-9"
            >
              <div className="w-10 h-px" style={{ backgroundColor: 'rgba(212,175,55,0.40)' }} />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 1.05, ease: 'easeOut' }}
              className="mb-9"
            >
              <h1
                className="font-playfair font-semibold text-white leading-[1.17] text-[2.05rem] sm:text-[2.35rem] md:text-[2.7rem]"
                style={{
                  textShadow: '0 2px 24px rgba(0,0,0,0.72), 0 1px 6px rgba(0,0,0,0.40)',
                }}
              >
                Tijelo se ne rastezuje.<br />
                Tijelo se oslobađa.
              </h1>
            </motion.div>

            {/* Subheadline */}
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
                Terapijski stretching kao klinički alat — MET, STR i fascijalna integracija za terapeute koji žele preciznije raditi s mobilnošću i kompenzacijskim obrascima kretanja.
              </p>
            </motion.div>

            {/* Meta strip */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.85, ease: 'easeOut' }}
              className="mb-14 flex flex-wrap items-center"
              style={{ columnGap: '14px', rowGap: '4px' }}
            >
              {['2 dana', '16 sati', 'Rad u paru', 'Certifikat'].map((item, i) => (
                <React.Fragment key={item}>
                  {i > 0 && (
                    <span style={{ color: 'rgba(255,255,255,0.24)', fontSize: '11px', lineHeight: 1 }}>·</span>
                  )}
                  <span
                    className="font-normal"
                    style={{ fontSize: '11px', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.35)' }}
                  >
                    {item}
                  </span>
                </React.Fragment>
              ))}
            </motion.div>

            {/* CTA group */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.80, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              {/* Primary */}
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
                onClick={onScrollToProgram}
              >
                Pogledaj program
              </button>

              {/* Ghost */}
              <button
                className="font-normal uppercase cursor-pointer bg-transparent border-0 p-0 flex items-center gap-3"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.16em',
                  color: 'rgba(255,255,255,0.65)',
                  transition: 'color 0.35s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.88)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.65)'; }}
                onClick={onScrollToPricing}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: 'block',
                    width: '18px',
                    height: '1px',
                    backgroundColor: 'rgba(212,175,55,0.45)',
                    flexShrink: 0,
                  }}
                />
                Termin i kotizacija
              </button>
            </motion.div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}

/* ─── Facts band (reusable pattern from CourseHero) ────────────── */
function FactsBand() {
  const facts = [
    { field: 'Trajanje', value: '2 dana', detail: 'intenzivan praktičan rad' },
    { field: 'Opseg', value: '16 sati', detail: 'edukacije' },
    { field: 'Format', value: 'Rad u paru', detail: 'demonstracija i korekcija' },
    { field: 'Instruktor', value: 'Dr. Awudi', detail: 'BAMS · OMT' },
  ];

  return (
    <section className="bg-[#F4F1EA] pt-5">
      <div className="container mx-auto px-6 md:px-10">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            borderTop: '1px solid rgba(0,0,0,0.08)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          {facts.map((item, i) => (
            <div
              key={i}
              className={['py-7 px-6 md:px-8', i === 0 ? 'pl-0' : '', i === 3 ? 'md:pr-0' : ''].join(' ')}
              style={{
                borderLeft: i !== 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <div className="text-[9.5px] uppercase tracking-[0.25em] mb-2 font-normal" style={{ color: '#B89A4F' }}>
                {item.field}
              </div>
              <div className="text-[18px] font-medium leading-snug" style={{ color: '#0e0e0e' }}>
                {item.value}
              </div>
              <div className="text-[12px] mt-1 font-normal leading-relaxed" style={{ color: '#3b3b3b' }}>
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */
const ThreeDStretchingPage = () => {
  const scrollToProgram = () => {
    const el = document.getElementById('program');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">

      <ThreeDHero onScrollToProgram={scrollToProgram} onScrollToPricing={scrollToPricing} />
      <FactsBand />

      <CourseStickyBar
        locations={[{ city: 'Zagreb', dates: 'termin u pripremi' }]}
        price="u pripremi"
        ctaText="Prijavi interes"
        ctaHref="https://tally.so/r/wA5kvD"
        theme="light"
      />

      {/* ── Metodika rada ─────────────────────────────────────────── */}
      <section className="bg-white pt-24 pb-0">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start max-w-5xl mx-auto">

            {/* Left: editorial text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-7" style={{ color: '#B89A4F' }}>
                Metodika rada
              </p>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.30)' }} />
              <h2
                className="font-playfair font-semibold leading-[1.22] mb-6 text-[1.9rem] md:text-[2.15rem]"
                style={{ color: '#1F1D1A' }}
              >
                Mobilnost nije cilj.<br />Mobilnost je mjera<br />onoga što tijelo dopušta.
              </h2>
              <p className="text-[14px] leading-[1.65] font-normal mb-10" style={{ color: '#5F5A52' }}>
                Razlika između pasivnog rastezanja i terapijskog stretchinga nije u snazi povlačenja — nego u razumijevanju zašto je tkivo gdje jest.
              </p>
              <div className="space-y-5 mb-12">
                <p className="text-[15px] leading-[1.72] font-normal" style={{ color: '#3D3A35' }}>
                  3D Advanced Therapeutic Stretching gradi sposobnost terapeuta da prepozna fascijalne restrikcije, neuralne napetosti i kompenzacijske obrasce u pokretu — i da ih tretira kroz precizne, neurofiziološkim principima vođene tehnike.
                </p>
                <p className="text-[15px] leading-[1.72] font-normal" style={{ color: '#3D3A35' }}>
                  MET, STR i PNF nisu zasebni protokoli. To su ulazi u isti razgovor s tkivom — svaki iz drugog kuta.
                </p>
              </div>

              <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                Što počinješ primjećivati
              </p>
              <div>
                {[
                  'Razliku između tkivnog i neuromuskulanog ograničenja mobilnosti',
                  'Kada primijeniti MET, kada STR, kada PNF — i zašto redoslijed određuje ishod',
                  'Fascijalne linije i kompenzacijske obrasce koji ne nestaju rutinskim rastezanjem',
                  'Tjelesnu mehaniku terapeuta koja produljuje preciznost i štiti vlastite zglobove',
                ].map((item, i) => (
                  <div key={i} className="py-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                    <p className="text-[14px] leading-[1.6] font-normal" style={{ color: '#1F1D1A' }}>
                      {item}
                    </p>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
              </div>
            </motion.div>

            {/* Right: documentation image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.18, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="lg:pt-16"
            >
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <img
                  src="/lovable-uploads/3ds-technique-1.jpg"
                  alt="3D Therapeutic Stretching — klinička demonstracija"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(0.96) saturate(0.82) contrast(1.02)',
                    display: 'block',
                    objectPosition: 'center 25%',
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
        <div style={{ background: 'linear-gradient(to bottom, #ffffff, #F4F1EA)', height: '5rem' }} />
      </section>

      {/* ── Intermezzo ────────────────────────────────────────────── */}
      <section style={{ background: '#F4F1EA' }} className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto text-center"
            style={{ maxWidth: '22rem' }}
          >
            <div className="h-px w-8 mx-auto mb-10" style={{ backgroundColor: 'rgba(0,0,0,0.12)' }} />
            <p className="text-[14px] leading-[1.85] font-normal" style={{ color: '#2A2723' }}>
              Tkivo pamti obrazac.
            </p>
            <p className="text-[14px] leading-[1.85] font-normal mt-6" style={{ color: '#5F5A52' }}>
              Svako kompenzacijsko skraćenje<br />
              ima razlog koji pasivno istezanje<br />
              ne doseže.
            </p>
            <p className="text-[14px] leading-[1.85] font-normal mt-6" style={{ color: '#5F5A52' }}>
              Razlika je u pristupu,<br />
              ne u snazi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Klinički pomak (dark) ─────────────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#1A1814' }}>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 300px',
            opacity: 0.025,
            mixBlendMode: 'screen',
          }}
        />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.35fr] gap-16 lg:gap-24 items-start">

              {/* Left — sticky anchor */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32"
              >
                <p
                  className="text-[10px] uppercase tracking-[0.28em] font-normal mb-5"
                  style={{ color: 'rgba(184,154,79,0.65)' }}
                >
                  Terapijski pomak
                </p>
                <div className="w-10 h-px mb-9" style={{ backgroundColor: 'rgba(184,154,79,0.22)' }} />
                <h2
                  className="font-playfair font-semibold leading-[1.17] mb-10 text-[1.85rem] md:text-[2.05rem]"
                  style={{ color: 'rgba(255,255,255,0.92)' }}
                >
                  Stretching koji<br />
                  razumije zašto<br />
                  tkivo ne pusti.
                </h2>
                <p
                  className="text-[14px] leading-[1.82] font-normal"
                  style={{ color: 'rgba(255,255,255,0.56)', maxWidth: '36ch' }}
                >
                  Neurofizioloski principi, fascijalni sustav i tjelesna mehanika terapeuta kao jedan integrirani okvir.
                </p>
              </motion.div>

              {/* Right — observational statements */}
              <div>
                {[
                  {
                    a: 'Ne radiš na mišiću koji je kratak.',
                    b: 'Radiš na sustavu koji ga drži kratkim.',
                  },
                  {
                    a: 'MET ne rastezuje silom.',
                    b: 'MET koristi vlastiti živčani sustav tijela da pusti napetost.',
                  },
                  {
                    a: 'Mobilnost se ne trenira.',
                    b: 'Mobilnost se vraća kada tkivo više nema razlog za zaštitu.',
                  },
                  {
                    a: 'Redoslijed tehnika nije protokol.',
                    b: 'Redoslijed je odgovor na ono što tijelo pokaže.',
                  },
                  {
                    a: 'Tretman završava pokretom.',
                    b: 'Ne bolom koji prolazi — nego funkcijom koja se vraća.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: i * 0.12, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="py-9"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <p
                      className="font-playfair font-normal leading-[1.52]"
                      style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)' }}
                    >
                      {item.a}
                    </p>
                    <p
                      className="font-playfair font-normal leading-[1.52] mt-1"
                      style={{ fontSize: '18px', color: 'rgba(255,255,255,0.38)', fontStyle: 'italic' }}
                    >
                      {item.b}
                    </p>
                  </motion.div>
                ))}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Program ───────────────────────────────────────────────── */}
      <section id="program" style={{ background: '#F4F1EA' }} className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Edukacijski program
              </p>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <h2
                className="font-playfair font-semibold leading-[1.22] text-[1.9rem] md:text-[2.2rem]"
                style={{ color: '#1F1D1A' }}
              >
                Dva dana kliničke<br />
                integracije u pokretu.
              </h2>
              <p className="text-[14px] leading-[1.82] font-normal mt-8" style={{ color: '#7A7570', maxWidth: '46ch' }}>
                Program gradi terapijsku kompetenciju od neurofizioloskih temelja do kliničke primjene na cijelom tijelu — 80% praktičnog rada u paru.
              </p>
            </motion.div>

            {/* Two days */}
            <div className="grid md:grid-cols-2 gap-0">
              {[
                {
                  day: 'Dan 1 · Subota',
                  title: 'Osnove i procjena mobilnosti',
                  desc: 'Neurofizioloski principi terapijskog stretchinga. Razumijevanje zašto tkivo odolijeva, kako fascijalne linije prenose napetost i kako procjena prethodi intervenciji.',
                  items: [
                    'MET (Muscle Energy Technique) — izometrička kontrakcija, postizometrička relaksacija (PIR) i recipročna inhibicija',
                    'STR (Soft Tissue Release) — aktivni, pasivni i opterećeni pristup',
                    'Fascijalne linije i miofascijalni integrirani stretching',
                    'Aktivni, pasivni i PNF pristup mobilnosti — kada koji i zašto',
                    'Tjelesna mehanika terapeuta — pozicioniranje, sekvenciranje i zaštita vlastitih zglobova',
                  ],
                },
                {
                  day: 'Dan 2 · Nedjelja',
                  title: 'Klinička primjena i Full Body 3D Flow',
                  desc: 'Primjena tehnika na konkretne regije i kliničke prezentacije. Integracija naučenog u koherentnu terapijsku sekvencu koja se prilagođava onome što tijelo pokazuje.',
                  items: [
                    'Donji ud — hip flexori, hamstringsi, piriformis, list, gležanj',
                    'Gornji ud — rameni pojas, pec minor, torakalna kralješnica, vrat',
                    'Kliničke situacije — zamrzni ramen, poslijeozljednička napetost, kronični kompenzacijski obrasci',
                    'Full Body 3D Flow — integrirana terapijska sekvenca kroz supinacijski, pronacijski i sjedeći položaj',
                    'Procjena promjene pokreta kao verifikacija terapijskog učinka',
                  ],
                },
              ].map((day, dayIdx) => (
                <motion.div
                  key={dayIdx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.85, delay: dayIdx * 0.08, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`py-10 ${dayIdx === 0 ? 'md:pr-14' : 'md:pl-14'}`}
                  style={{ borderTop: '1px solid rgba(0,0,0,0.09)', borderLeft: dayIdx === 1 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-4" style={{ color: 'rgba(0,0,0,0.38)' }}>
                    {day.day}
                  </p>
                  <h3
                    className="font-playfair font-semibold leading-[1.28] mb-4 text-[1.15rem] md:text-[1.28rem]"
                    style={{ color: '#1F1D1A' }}
                  >
                    {day.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.72] font-normal mb-8" style={{ color: '#5F5A52' }}>
                    {day.desc}
                  </p>
                  <div>
                    {day.items.map((item, i) => (
                      <div
                        key={i}
                        className="grid gap-5 py-4"
                        style={{ borderTop: '1px solid rgba(0,0,0,0.07)', gridTemplateColumns: '1.6rem 1fr' }}
                      >
                        <span className="text-[11px] font-normal tabular-nums pt-0.5" style={{ color: '#B89A4F' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-[13.5px] leading-[1.6] font-normal" style={{ color: '#3D3A35' }}>{item}</p>
                      </div>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Documentary images ───────────────────────────────────── */}
      <section style={{ background: '#FAF8F4' }} className="pt-20 pb-0">
        <div className="container mx-auto px-6">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
              Edukacijska praksa
            </p>
            <div className="w-10 h-px mb-7" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
            <h2
              className="font-playfair font-semibold leading-[1.22] mb-5 text-[1.6rem] md:text-[1.85rem]"
              style={{ color: '#1F1D1A' }}
            >
              Rad koji ne stane na demonstraciju.
            </h2>
            <p className="text-[14px] leading-[1.72] font-normal" style={{ color: '#5F5A52' }}>
              Svaki polaznik radi, prima, osjeća razliku i vraća se u ulogu terapeuta s tim iskustvom.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">

            {/* Image 1 — wide */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/lovable-uploads/3ds-technique-2.jpg"
                  alt="3D Stretching — terapijska demonstracija"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ display: 'block', objectPosition: 'center 30%', filter: 'brightness(0.96) saturate(0.82)' }}
                />
              </div>
              <div className="mt-3 flex items-start gap-3">
                <div className="w-4 h-px mt-[9px] flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.14)' }} />
                <p className="text-[11.5px] leading-[1.6] font-normal" style={{ color: '#9A9590', letterSpacing: '0.02em' }}>
                  Tehnika se primjenjuje u tri dimenzije — elongacija, rotacija i laterofleksija kao jedan pokret.
                </p>
              </div>
            </motion.div>

            {/* Image 2 — narrow, right-anchored */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.95, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mt-8 md:mt-10"
            >
              <div className="md:ml-auto md:max-w-[52%]">
                <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <img
                    src="/lovable-uploads/3ds-technique-3.jpg"
                    alt="Precizan terapijski kontakt — MET u primjeni"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ display: 'block', objectPosition: 'center 20%', filter: 'brightness(0.96) saturate(0.80)' }}
                  />
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <div className="w-4 h-px mt-[9px] flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.14)' }} />
                  <p className="text-[11.5px] leading-[1.6] font-normal" style={{ color: '#9A9590', letterSpacing: '0.02em' }}>
                    Korekcija položaja određuje hoće li tkivo surađivati ili se zaštititi.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Dark manifesto ────────────────────────────────────────── */}
      <section style={{ background: '#1A1814' }} className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2
              className="font-playfair font-semibold leading-[1.30]"
              style={{ fontSize: 'clamp(1.65rem, 3.2vw, 2.15rem)', color: 'rgba(255,255,255,0.88)' }}
            >
              Tijelo ne odolijeva rastezanju<br />
              jer je slabo. Odolijeva jer ima razlog.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── Instruktor ────────────────────────────────────────────── */}
      <section style={{ background: '#FAF8F4' }} className="relative py-20 md:py-24 overflow-hidden">

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '280px 280px',
            opacity: 0.018,
            mixBlendMode: 'multiply',
          }}
        />

        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-16 items-start">

              {/* Left — portrait */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:-ml-6 xl:-ml-10"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src="/lovable-uploads/lomi-predavac-awudi-smijeh.jpg"
                    alt="Dr. Awudi Atitsogbui — instruktor"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{
                      display: 'block',
                      objectPosition: 'center 20%',
                      filter: 'contrast(1.02) brightness(0.95) saturate(0.88)',
                      transition: 'transform 1.1s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.016)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'rgba(14,10,6,0.10)', mixBlendMode: 'multiply' }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(10,7,4,0.26) 100%)' }}
                  />
                </div>
              </motion.div>

              {/* Right — editorial bio */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.95, delay: 0.18, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:pt-10 lg:sticky lg:top-32"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                  Instruktor
                </p>
                <div className="w-10 h-px mb-10" style={{ backgroundColor: 'rgba(184,154,79,0.32)' }} />

                <h2
                  className="font-playfair font-semibold leading-[1.22] mb-4"
                  style={{ fontSize: 'clamp(1.65rem, 2.6vw, 2.05rem)', color: '#1F1D1A' }}
                >
                  Dr. Awudi Atitsogbui
                </h2>

                <p
                  className="text-[10.5px] uppercase tracking-[0.22em] font-normal mb-10"
                  style={{ color: 'rgba(0,0,0,0.36)' }}
                >
                  BAMS · OMT · Međunarodni edukator
                </p>

                <div className="mb-10" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />

                <div style={{ maxWidth: '40ch' }}>
                  <p className="text-[13px] leading-[1.92] font-normal mb-8" style={{ color: '#7A7570' }}>
                    Dr. Awudi Atitsogbui doktor je ayurvedske medicine (BAMS) i ortopedski manualni terapeut (OMT) s višegodišnjim iskustvom u edukaciji terapeuta na međunarodnoj razini.
                  </p>
                  <p className="text-[13px] leading-[1.92] font-normal mb-8" style={{ color: '#7A7570' }}>
                    Njegova edukacija gradi se na razumijevanju neurofizioloskih principa, fascijalnih odnosa i biomehanike kretanja — s posebnim naglaskom na primjenjivost u svakodnevnoj terapijskoj praksi.
                  </p>
                  <p className="text-[13px] leading-[1.92] font-normal mb-12" style={{ color: '#7A7570' }}>
                    3D Advanced Therapeutic Stretching program je razvijen iz njegova kliničkog rada i didaktičke filozofije: tehnika je samo alat — razumijevanje onoga što tijelo pokazuje jest kompetencija.
                  </p>

                  {/* Quote */}
                  <div className="relative pl-7">
                    <div
                      className="absolute left-0 top-[3px] bottom-[3px]"
                      style={{ width: '1px', backgroundColor: 'rgba(184,154,79,0.28)' }}
                    />
                    <p
                      className="font-playfair font-normal"
                      style={{
                        fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
                        lineHeight: '1.62',
                        color: '#1F1D1A',
                        fontStyle: 'italic',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Svako tijelo zna kamo želi ići.<br />
                      Moj posao je naučiti terapeuta<br />
                      slušati taj smjer.
                    </p>
                  </div>
                </div>

                <p
                  className="text-[10px] uppercase tracking-[0.22em] font-normal mt-10"
                  style={{ color: 'rgba(0,0,0,0.20)' }}
                >
                  Dr. Awudi Atitsogbui · BAMS · OMT
                </p>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Za koga je edukacija ──────────────────────────────────── */}
      <section style={{ background: '#F4F1EA' }} className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.25fr] gap-16 lg:gap-24 items-start">

              {/* Left — sticky anchor */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                  Za koga
                </p>
                <div className="w-10 h-px mb-9" style={{ backgroundColor: 'rgba(184,154,79,0.30)' }} />
                <h2
                  className="font-playfair font-semibold leading-[1.18] mb-10 text-[1.85rem] md:text-[2.05rem]"
                  style={{ color: '#1F1D1A' }}
                >
                  Edukacija za one<br />
                  koji već rade s tijelom.
                </h2>
                <p className="text-[14px] leading-[1.82] font-normal" style={{ color: '#5F5A52', maxWidth: '36ch' }}>
                  Program pretpostavlja osnovno anatomsko razumijevanje i iskustvo u terapijskom radu s klijentima.
                </p>
              </motion.div>

              {/* Right — target audience list */}
              <div>
                {[
                  {
                    num: '01',
                    name: 'Masažni terapeuti',
                    quote: 'Koji žele dodati preciznost tamo gdje klasična masaža dostiže svoju granicu.',
                    body: 'MET i STR proširuju terapijski repertoar bez napuštanja manualne logike rada — tkivo, kontakt, odgovor.',
                  },
                  {
                    num: '02',
                    name: 'Fizioterapeuti i kineziolozi',
                    quote: 'Koji traže jasni protokol za rad s mobilnošću unutar tretmana.',
                    body: 'Program nudi klinički okvir koji se nadovezuje na rehabilitacijski pristup — procjena, intervencija, provjera promjene.',
                  },
                  {
                    num: '03',
                    name: 'Terapeuti u rehabilitaciji',
                    quote: 'Koji rade s kroničnim obrascima napetosti i poslijeozljedničkim ograničenjima.',
                    body: 'Fascijalna integracija i Full Body 3D Flow daju alat za rad s tijelima koja su dugo kompenzirala.',
                  },
                  {
                    num: '04',
                    name: 'Bodywork praktičari',
                    quote: 'Koji žele razumjeti neurofizioloski kontekst iza onoga što osjete pod rukom.',
                    body: 'Program objašnjava zašto tkivo odolijeva i što se zapravo događa kada pusti — kroz jezik koji ne odvaja teoriju od prakse.',
                  },
                ].map((group, i) => (
                  <motion.div
                    key={group.num}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: i * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="py-8"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
                  >
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-normal shrink-0" style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(0,0,0,0.28)' }}>
                        {group.num}
                      </span>
                      <span className="font-normal uppercase" style={{ fontSize: '10px', letterSpacing: '0.22em', color: '#B89A4F' }}>
                        {group.name}
                      </span>
                    </div>
                    <p className="font-playfair font-normal leading-[1.55] mb-4" style={{ fontSize: '15px', fontStyle: 'italic', color: '#1F1D1A' }}>
                      {group.quote}
                    </p>
                    <p className="font-normal leading-[1.72]" style={{ fontSize: '13px', color: '#5F5A52' }}>
                      {group.body}
                    </p>
                  </motion.div>
                ))}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Kotizacija ────────────────────────────────────────────── */}
      <section
        id="pricing"
        style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }}
        className="pt-16 pb-28"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left — pricing + locations */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                  Kotizacija edukacije
                </p>
                <div className="w-10 h-px mb-9" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />

                <p className="text-[14px] leading-[1.82] font-normal mb-12" style={{ color: '#5F5A52', maxWidth: '40ch' }}>
                  Dvodnevna klinička edukacija. 80% praktičnog rada u paru, demonstracija i individualna korekcija.
                </p>

                {/* Price */}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '2.8rem', paddingBottom: '0.6rem' }}>
                  <p
                    className="font-playfair font-semibold leading-none"
                    style={{ fontSize: '4.4rem', color: '#1F1D1A', letterSpacing: '-0.02em' }}
                  >
                    u pripremi
                  </p>
                </div>
                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '2.2rem', marginBottom: '2.4rem' }}>
                  <p className="text-[13px] leading-[1.72] font-normal mt-4" style={{ color: '#7A7570' }}>
                    Kotizacija uključuje materijale i certifikat.
                    <br />Uplata i rezervacija po dogovoru.
                  </p>
                </div>

                <p
                  className="font-playfair font-normal mb-6"
                  style={{
                    fontSize: 'clamp(0.9rem, 1.1vw, 0.97rem)',
                    lineHeight: '1.75',
                    color: '#3D3935',
                    fontStyle: 'italic',
                    maxWidth: '40ch',
                  }}
                >
                  Broj mjesta ograničen je kvalitetom praktičnog rada — ne kapacitetom dvorane.
                </p>

                <p
                  className="font-normal mb-14"
                  style={{ fontSize: '12.5px', lineHeight: '1.78', color: 'rgba(0,0,0,0.50)', maxWidth: '40ch' }}
                >
                  Edukacija se organizira u manjim grupama s fokusom na individualni feedback i praktičnu korekciju.
                </p>

                {/* Location */}
                <p className="text-[10px] uppercase tracking-[0.24em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                  Termin i lokacija
                </p>
                <div>
                  {[
                    { city: 'Zagreb', note: 'termin u pripremi' },
                  ].map((loc, i) => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between py-5"
                      style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
                    >
                      <p className="font-playfair font-medium leading-tight" style={{ fontSize: '1.1rem', color: '#1F1D1A' }}>
                        {loc.city}
                      </p>
                      <p className="text-[11px] font-normal" style={{ color: 'rgba(0,0,0,0.35)', letterSpacing: '0.01em' }}>
                        {loc.note}
                      </p>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', marginBottom: '1.8rem' }} />
                </div>
                <p className="text-[12px] font-normal" style={{ color: 'rgba(0,0,0,0.38)', fontStyle: 'italic' }}>
                  Prijavite interes — obavijestit ćemo vas čim termin bude potvrđen.
                </p>
              </motion.div>

              {/* Right — what's included */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.14, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:pt-2"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] font-normal mb-8" style={{ color: '#B89A4F' }}>
                  Što uključuje edukacija
                </p>
                <div>
                  {[
                    {
                      title: '16 sati kliničke prakse',
                      note: 'Rad u paru — demonstracija, primanje i klinička korekcija u kontinuiranom naizmjeničnom radu.',
                    },
                    {
                      title: 'Edukacijski materijali',
                      note: 'Protokoli, anatomski referentni materijali i upute za nastavak samostalnog rada.',
                    },
                    {
                      title: 'Full Body 3D Flow sekvenca',
                      note: 'Kompletna integrirana terapijska sekvenca primjenjiva odmah u praksi.',
                    },
                    {
                      title: 'Certifikat završene edukacije',
                      note: 'Potvrda o pohađanju s naznakom sati i metodološkog okvira.',
                    },
                    {
                      title: 'Tjelesna mehanika terapeuta',
                      note: 'Pozicioniranje, sekvenciranje i zaštita zglobova terapeuta — naučeno kroz praktičan rad.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="py-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                      <p className="text-[14.5px] leading-snug font-medium mb-2" style={{ color: '#1F1D1A' }}>
                        {item.title}
                      </p>
                      <p className="text-[12.5px] leading-[1.70] font-normal" style={{ color: '#8A8480' }}>
                        {item.note}
                      </p>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section
        style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }}
        className="pt-28 pb-36"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Pitanja i odgovori
              </p>
              <h2
                className="font-playfair font-semibold leading-[1.20] mb-8"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: '#1F1D1A' }}
              >
                Informacije o edukaciji.
              </h2>
              <p className="text-[13.5px] leading-[1.85] font-normal" style={{ color: '#7A7570', maxWidth: '52ch' }}>
                Sve ključne informacije o organizaciji, prijavi i praktičnom radu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible>

                <AccordionItem value="item-0" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Je li potrebno prethodno iskustvo u terapijskom stretchingu?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-[13.5px] leading-[1.92] font-normal" style={{ color: '#5F5A52', maxWidth: '56ch' }}>
                      Prethodno iskustvo u stretchingu nije preduvjet. Program gradi razumijevanje od temelja — neurofizioloski principi objašnjeni su kroz praktičan rad, ne teorijskim predavanjem. Potrebno je osnovno anatomsko znanje i iskustvo u terapijskom radu s klijentima.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Tko može pohađati edukaciju?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-[13.5px] leading-[1.92] font-normal mb-4" style={{ color: '#5F5A52', maxWidth: '56ch' }}>
                      Program je namijenjen svima koji profesionalno rade s tijelom:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'masažni terapeuti, fizioterapeuti, kineziolozi',
                        'terapeuti u rehabilitaciji i sportski terapeuti',
                        'osteopatski i manualni terapeuti',
                        'bodywork praktičari s iskustvom u radu s klijentima',
                      ].map((item, i) => (
                        <li key={i} className="text-[13.5px] leading-[1.85] flex gap-3" style={{ color: '#5F5A52' }}>
                          <span style={{ color: 'rgba(0,0,0,0.18)', flexShrink: 0 }}>—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Kako izgleda praktičan rad na edukaciji?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-[13.5px] leading-[1.92] font-normal" style={{ color: '#5F5A52', maxWidth: '56ch' }}>
                      80% programa odvija se u praktičnom radu u paru. Svaki polaznik naizmjence radi i prima tretman — što znači da doživljava tehnike iz obje perspektive. Instruktor korigira položaj, kontakt i primjenu u tijeku samog rada, a ne samo kroz verbalnu uputu.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Mogu li primijeniti naučeno odmah u praksi?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-[13.5px] leading-[1.92] font-normal" style={{ color: '#5F5A52', maxWidth: '56ch' }}>
                      Da. Program je dizajniran za neposrednu kliničku primjenjivost. Full Body 3D Flow sekvenca, MET i STR protokoli mogu se uključiti u tretman već idući tjedan — bez posebnih pomagala ili opreme. Jedino što je potrebno jest razumijevanje koje polaznik stječe kroz dva dana rada.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Kako se prijaviti?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-[13.5px] leading-[1.92] font-normal" style={{ color: '#5F5A52', maxWidth: '56ch' }}>
                      Edukacija je u pripremi. Prijavite interes putem obrasca ili nam se obratite direktno na info@uciliste-suprastudium.hr — obavijestit ćemo vas o terminu, lokaciji i uvjetima prijave čim budu potvrđeni.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }} />

              </Accordion>
            </motion.div>

          </div>
        </div>
      </section>

      <CourseRecommendations currentCourse="3d-stretching" />
      <CourseFooter />

    </div>
  );
};

export default ThreeDStretchingPage;
