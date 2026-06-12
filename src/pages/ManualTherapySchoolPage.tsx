import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MTHero } from '@/components/MTHero';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import { CourseFooter } from '@/components/CourseFooter';
import { CourseRecommendations } from '@/components/course/CourseRecommendations';

const pdfLinks = {
  1: 'https://www.dropbox.com/scl/fi/hv3ggccj3bigoyxofngyf/raspored-1_stupanj.pdf?rlkey=8dhuv93b1aueor9438q4ngbve&dl=1',
  2: 'https://www.dropbox.com/scl/fi/s1peg49p41h6rj9iwywu1/raspored-2_stupanj.pdf?rlkey=ofw87spp5r6rr5umtada7vfax&dl=1',
  3: 'https://www.dropbox.com/scl/fi/4akk4tra87tjilms69dxp/raspored-3_stupanj.pdf?rlkey=2wqrsm3iy5rc7lplkh3j7s6w5&dl=1',
  4: 'https://www.dropbox.com/scl/fi/bz93bt9daloo9mq0os52r/raspored-4_stupanj.pdf?rlkey=da0aa3adr8565p4picpncaugs&dl=1',
  5: 'https://www.dropbox.com/scl/fi/l8xz55gi1u927casmxz1g/raspored-5-stupanj.pdf?rlkey=vlhmcvvjx8a1d5ymqo5fhpe63&dl=1',
};

const stupnjevi = [
  {
    number: '01',
    label: 'Stupanj I',
    title: 'Slabinska kralješnica i sakroilijakalni zglob',
    body: 'Dijagnostičko-terapijski postupnik za križobolju. Joint play torakalne i lumbalne kralješnice. SI zglob — mobilizacije i manipulacije. Neurodinamika ishijadičnog živca. Pincé roulé. Mulligan MWMs.',
    duration: '27 sati',
  },
  {
    number: '02',
    label: 'Stupanj II',
    title: 'Donji ud',
    body: 'Kuk, koljeno, gležanj, stopalo. Dijagnostički pregled i patologija. Mobilizacijske tehnike (klasične + Mulligan). Cross-friction ligamenata. PIR / stretching. Manipulacija ivera.',
    duration: '18 sati',
  },
  {
    number: '03',
    label: 'Stupanj III',
    title: 'Gornji ud',
    body: 'Rame — smrznuto rame (Niel-Asher), PIR/Mitchell, Mulligan. Neurodinamika (MNT1). Lakat — lateralni epikondilitis, radijalni živac. Ručni zglob i šaka — mobilizacije i manipulacije.',
    duration: '18 sati',
  },
  {
    number: '04',
    label: 'Stupanj IV',
    title: 'Prsna i vratna kralješnica',
    body: 'Torakalna: repozicija rebara, fasetni zglobovi, manipulacija prvog rebra, Thoracic Outlet Sy. Cervikalna: fiziologija i biomehanika, sigurnosni testovi, trakcija, mobilizacije i manipulacije C1–C7.',
    duration: '18 sati',
  },
  {
    number: '05',
    label: 'Stupanj V',
    title: 'Napredni program',
    body: 'Samo za polaznike koji su završili sva četiri prethodna stupnja. Svaki polaznik donosi vlastiti klinički slučaj. Q&A iz svih prethodnih tečajeva. Napredne tehnike. Opcijski ispit — uvjerenje i stručna kvalifikacija za manualnog terapeuta.',
    duration: '18 sati · max 12 polaznika',
  },
];

const metode = [
  'Joint play i mobilizacija zglobova',
  'Manipulacija fasetnih zglobova i SI zgloba',
  'Neurodinamika (ishijadični živac, MNT1)',
  'Funkcionalna masaža mekih tkiva',
  'Cross-friction ligamenata i tetiva',
  'PIR / Hold-relax / Mitchell tehnika',
  'Mulligan koncept (MWMs, NAGS, SNAGS)',
];

const postupnikKoraci = [
  { broj: '01', naziv: 'Anamneza', opis: 'Sustavno prikupljanje podataka o boli, mehanizmu nastanka, trajanju i dosadašnjem liječenju.' },
  { broj: '02', naziv: 'Red flags', opis: 'Identifikacija kontraindikacija i stanja koja zahtijevaju hitno usmjeravanje — prije svake manipulacije.' },
  { broj: '03', naziv: 'Klinički pregled', opis: 'Standardizirani ortopedski i neurološki testovi. Pokret, palpacija, neuromišićna procjena.' },
  { broj: '04', naziv: 'Traženje uzroka', opis: 'Razlikovanje simptoma od uzroka. Bol u leđima može dolaziti iz kuka, SI zgloba ili živca — ne samo iz lumbalne regije.' },
  { broj: '05', naziv: 'Specifična manualna terapija', opis: 'Tek nakon dijagnoze — tehnika s indikacijom, dozom i procjenom ishoda.' },
];

const termini = [
  { stupanj: 'Stupanj I', datum: '20.–22.11.2026. · 9–18 h', lokacija: 'Poliklinika Body Balance, Zagreb', cijena: '390 €', pdf: pdfLinks[1] },
  { stupanj: 'Stupanj II', datum: '5.–6.12.2026. · 9–17 h', lokacija: 'Maxi Dance Studio, Zagreb', cijena: '390 €', pdf: pdfLinks[2] },
  { stupanj: 'Stupanj III', datum: 'Na upit', lokacija: 'Zagreb', cijena: '390 €', pdf: pdfLinks[3] },
  { stupanj: 'Stupanj IV', datum: 'Na upit', lokacija: 'Zagreb', cijena: '390 €', pdf: pdfLinks[4] },
  { stupanj: 'Stupanj V', datum: 'ned. 8.11.2026. · 9–17 h', lokacija: 'Maxi Dance Studio, Zagreb', cijena: '550 €', pdf: pdfLinks[5] },
];

const faq = [
  {
    q: 'Treba li određeni redosljed pohađanja stupnjeva?',
    a: 'Da. Svaki stupanj pretpostavlja znanje prethodnog. Stupanj II ne može se pohađati bez završenog Stupnja I. Stupanj V dostupan je isključivo polaznicima koji su završili sve četiri prethodne razine.',
  },
  {
    q: 'Tko može pohađati program?',
    a: 'Licencirani fizioterapeuti, masažni terapeuti i terapeuti s aktivnom kliničkom praksom. Program nije namijenjen početnicima bez kliničkog iskustva.',
  },
  {
    q: 'Što je uključeno u kotizaciju?',
    a: 'Program, prateći materijali i potvrda o pohađanju. Stupanj V uključuje ispitni postupak i mogućnost stjecanja stručne kvalifikacije upisive u e-radnu knjižicu.',
  },
  {
    q: 'Koliko polaznika prima svaki stupanj?',
    a: 'Male grupe — kako bi svaki polaznik imao dovoljno vremena za hands-on rad s voditeljem. Stupanj V prima maksimalno 12 polaznika.',
  },
  {
    q: 'Gdje se program odvija?',
    a: 'Edukacije se odvijaju u kliničkim prostorima u Zagrebu — Poliklinika Body Balance (Frane Kesterčaneka 2b) i Maxi Dance Studio (Frane Kesterčaneka 2, ispod bolnice Rebro). Točna lokacija i upute za parking navode se u potvrdi prijave.',
  },
  {
    q: 'Što je "Postupnik manualnog terapeuta"?',
    a: 'Algoritam koji svaki polaznik prolazi pri kliničkoj procjeni: anamneza → red flags → klinički pregled → traženje uzroka → specifična manualna terapija. Razvio ga je Mr.sc. A. Stošić, dr.med, kao okosnicu programa.',
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

export default function ManualTherapySchoolPage() {
  const programRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);

  const scrollToProgram = () => {
    programRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = 'Škola Manualne Terapije — 5 stupnjeva, 99 sati | Supra Studium';
    const descText = 'Pet stupnjeva manualne terapije pod vodstvom dr. Aleksandra Stošića — od dijagnostičkog razmišljanja do precizne terapijske primjene. Zagreb.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', descText);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
    link.setAttribute('href', window.location.origin + '/skola-manualne-terapije');
  }, []);

  return (
    <div style={{ backgroundColor: '#FAF8F4' }} className="min-h-screen">

      <MTHero onScrollToProgram={scrollToProgram} onScrollToPricing={scrollToPricing} />

      <CourseStickyBar
        locations={[
          { city: 'Stupanj V', dates: 'ned. 8.11.' },
          { city: 'Stupanj I', dates: '20.–22.11.' },
          { city: 'Stupanj II', dates: '5.–6.12.' },
        ]}
        price=""
        ctaText="Prijavi se"
        ctaHref="https://tally.so/r/wA5kvD"
        theme="light"
      />

      {/* Facts band */}
      <div style={{ borderBottom: '1px solid rgba(0,0,0,0.07)', backgroundColor: '#FAF8F4' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-stretch">
            {[
              { field: 'Razine', value: '5 stupnjeva' },
              { field: 'Opseg', value: '99 sati' },
              { field: 'Format', value: 'Rad u paru' },
              { field: 'Završetak', value: 'Certifikat' },
            ].map((fact, i) => (
              <div
                key={i}
                className="flex-1 min-w-[140px] py-7 px-6"
                style={{
                  borderRight: i < 3 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                }}
              >
                <p
                  className="text-[9px] uppercase tracking-[0.24em] font-normal mb-1.5"
                  style={{ color: '#9A9590' }}
                >
                  {fact.field}
                </p>
                <p
                  className="text-[13.5px] font-normal"
                  style={{ color: '#1F1D1A' }}
                >
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Klinička observacija */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.28em] font-normal mb-7"
              style={{ color: '#B89A4F' }}
            >
              Klinička perspektiva
            </p>
            <h2
              className="font-playfair font-semibold text-[1.75rem] md:text-[2rem] leading-[1.2]"
              style={{ color: '#1F1D1A' }}
            >
              Većina terapeuta naučila je dovoljno tehnika.
            </h2>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
            className="md:pt-2"
          >
            <p
              className="text-[13.5px] leading-[1.82] font-normal mb-5"
              style={{ color: '#5F5A52' }}
            >
              Problem koji se ponavlja u praksi nije nedostatak tehnika — nego znati kada, na koga i
              u kojem redoslijedu ih primijeniti. Terapeut koji skuplja zahvate bez dijagnostičke
              osnove radi dobre tretmane slučajno, a ne sustavno.
            </p>
            <p
              className="text-[13.5px] leading-[1.82] font-normal"
              style={{ color: '#5F5A52' }}
            >
              Škola manualne terapije počinje tamo gdje se obično staje — dijagnozom. Svaki stupanj
              gradi na prethodnom. Nema prečaca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Observation rows — editorial pairs, no boxes */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {[
            {
              situacija: 'Bol u leđima koja se ne poboljšava — i terapeut koji ne zna zašto.',
              observacija: 'Uzrok nije uvijek tamo gdje se bol osjeća. Dijagnoza prethodi tehnici.',
            },
            {
              situacija: 'Tehnika koja radi kod jednog pacijenta, a ne radi kod sljedećeg.',
              observacija: 'Ista tehnika, drugačija indikacija. Bez kliničkog pregleda, svaki tretman je pogađanje.',
            },
            {
              situacija: 'Pregled koji ti govori gdje početi — ne gdje pretpostaviti.',
              observacija: 'Standardizirani algoritam smanjuje varijabilnost. Rezultati postaju predvidivi.',
            },
          ].map((row, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={i * 0.08}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 py-8"
              style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
            >
              <p
                className="text-[14px] leading-[1.75] font-normal"
                style={{ color: '#1F1D1A' }}
              >
                {row.situacija}
              </p>
              <p
                className="text-[13.5px] leading-[1.78] font-normal"
                style={{ color: '#7A7570' }}
              >
                {row.observacija}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
        </div>
      </section>

      {/* Photo intermezzo */}
      <section className="overflow-hidden">
        <div
          className="relative w-full"
          style={{ aspectRatio: '21/9' }}
        >
          <img
            src="/lovable-uploads/mt-practicni-rad-kral.jpg"
            alt="Praktični rad — manualna terapija kralješnice"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            style={{ filter: 'grayscale(6%) contrast(1.02)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(10,8,5,0.50) 0%, rgba(10,8,5,0.18) 40%, transparent 70%)',
            }}
          />
          <div className="absolute bottom-8 left-8 md:left-14">
            <p
              className="text-[10px] uppercase tracking-[0.16em] font-normal"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Praktični rad · Stupanj I
            </p>
          </div>
        </div>
      </section>

      {/* Postupnik manualnog terapeuta */}
      <section className="pt-24 pb-20 px-6" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p
              className="text-[10px] uppercase tracking-[0.28em] font-normal mb-7"
              style={{ color: '#B89A4F' }}
            >
              Klinički algoritam
            </p>
            <h2
              className="font-playfair font-semibold text-[1.75rem] md:text-[2rem] leading-[1.2] mb-6"
              style={{ color: '#1F1D1A' }}
            >
              Postupnik manualnog terapeuta.
            </h2>
            <p
              className="text-[13.5px] leading-[1.82] font-normal"
              style={{ color: '#7A7570', maxWidth: '52ch' }}
            >
              Pet koraka kliničke procjene koje svaki polaznik usvaja kao radni okvir.
              Razvijen od strane Mr.sc. A. Stošića, dr.med — okosnica cijelog programa.
            </p>
          </motion.div>

          <div>
            {postupnikKoraci.map((korak, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.07}
                viewport={{ once: true }}
                className="grid md:grid-cols-[72px_200px_1fr] gap-6 md:gap-10 py-8 items-start"
                style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
              >
                <span
                  className="font-playfair text-[2.2rem] leading-none"
                  style={{ color: 'rgba(184,154,79,0.18)' }}
                >
                  {korak.broj}
                </span>
                <p
                  className="text-[14px] font-normal pt-1"
                  style={{ color: '#1F1D1A' }}
                >
                  {korak.naziv}
                </p>
                <p
                  className="text-[13.5px] leading-[1.78] font-normal pt-0.5"
                  style={{ color: '#7A7570' }}
                >
                  {korak.opis}
                </p>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
          </div>
        </div>
      </section>

      {/* Dr. Stošić interview — cinematic placeholder until video is ready */}
      <section className="pt-12 pb-20 px-6" style={{ backgroundColor: '#F0EDE6' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6"
          >
            <p
              className="text-[10px] uppercase tracking-[0.28em] font-normal mb-5"
              style={{ color: '#B89A4F' }}
            >
              Razgovor s voditeljem
            </p>
            <h2
              className="font-playfair font-semibold text-[1.55rem] md:text-[1.8rem] leading-[1.25]"
              style={{ color: '#1F1D1A' }}
            >
              Mr.sc. A. Stošić, dr.med — o dijagnostici i manualnoj terapiji.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
            className="relative w-full mb-5"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/y3OMngp9MRg"
              title="Mr.sc. A. Stošić — intervju o manualnoj terapiji"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ border: 'none' }}
            />
          </motion.div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
            className="text-[11px] font-normal"
            style={{ color: 'rgba(31,29,26,0.42)' }}
          >
            Intervju i reportaža objavljeni na portalu Extravagant.{' '}
            <a
              href="https://extravagant.com.hr/extravagant-health-edukacija-manualne-terapije-u-niniane-salonu/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: '#B89A4F' }}
            >
              Pogledaj članak →
            </a>
          </motion.p>
        </div>
      </section>

      {/* Metoda — dark section */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: '#1A1814' }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.28em] font-normal mb-7"
              style={{ color: '#B89A4F' }}
            >
              Metoda
            </p>
            <h2
              className="font-playfair font-semibold text-[1.75rem] md:text-[2rem] leading-[1.2] mb-6"
              style={{ color: 'rgba(237,233,227,0.92)' }}
            >
              Što je manualna terapija na ovoj školi.
            </h2>
            <p
              className="text-[13.5px] leading-[1.82] font-normal"
              style={{ color: 'rgba(237,233,227,0.68)' }}
            >
              Svaka tehnika je klinički alat s indikacijom i kontraindikacijom. Program ih ne
              predaje kao kolekciju — predaje ih kroz dijagnostičko razmišljanje.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
            className="md:pt-2"
          >
            {metode.map((m, i) => (
              <div
                key={i}
                className="py-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p
                  className="text-[13px] font-normal"
                  style={{ color: 'rgba(237,233,227,0.72)', lineHeight: '1.5' }}
                >
                  {m}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
          </motion.div>
        </div>
      </section>

      {/* Program — 5 stupnjeva */}
      <section ref={programRef} className="py-24 px-6" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p
              className="text-[10px] uppercase tracking-[0.28em] font-normal mb-7"
              style={{ color: '#B89A4F' }}
            >
              Program
            </p>
            <h2
              className="font-playfair font-semibold text-[1.75rem] md:text-[2rem] leading-[1.2]"
              style={{ color: '#1F1D1A' }}
            >
              Pet stupnjeva. Progresivno.
            </h2>
          </motion.div>

          <div>
            {stupnjevi.map((s, i) => (
              <motion.div
                key={s.number}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.07}
                viewport={{ once: true }}
                className="grid md:grid-cols-[80px_1fr_auto] gap-8 py-10 items-start"
                style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
              >
                <span
                  className="font-playfair text-[2.4rem] leading-none"
                  style={{ color: 'rgba(184,154,79,0.20)' }}
                >
                  {s.number}
                </span>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.20em] font-normal mb-2"
                    style={{ color: 'rgba(31,29,26,0.38)' }}
                  >
                    {s.label}
                  </p>
                  <h3
                    className="text-[14.5px] font-medium mb-3 leading-snug"
                    style={{ color: '#1F1D1A' }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[13px] leading-[1.78] font-normal"
                    style={{ color: '#7A7570', maxWidth: '58ch' }}
                  >
                    {s.body}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-3 md:pt-1">
                  <span
                    className="text-[11px] font-normal whitespace-nowrap"
                    style={{ color: 'rgba(31,29,26,0.38)' }}
                  >
                    {s.duration}
                  </span>
                  <a
                    href={pdfLinks[(i + 1) as keyof typeof pdfLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.20em] font-normal whitespace-nowrap transition-colors duration-300"
                    style={{ color: '#B89A4F' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#1F1D1A')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#B89A4F')}
                  >
                    PDF Program →
                  </a>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
          </div>
        </div>
      </section>

      {/* Dokumentacija — editorial variable-width layout */}
      <section className="pb-20 px-6" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_0.62fr] gap-3">
            <motion.figure
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/lovable-uploads/mt-stosic-anatomija.webp"
                  alt="Mr.sc. A. Stošić — anatomska demonstracija"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{ filter: 'grayscale(6%) contrast(1.01)' }}
                />
              </div>
              <figcaption
                className="mt-2.5 text-[10px] uppercase tracking-[0.18em] font-normal"
                style={{ color: 'rgba(31,29,26,0.38)' }}
              >
                Mr.sc. A. Stošić · anatomska demonstracija
              </figcaption>
            </motion.figure>

            <div className="flex flex-col gap-3">
              <motion.figure
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={0.08}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="overflow-hidden h-full" style={{ minHeight: '160px' }}>
                  <img
                    src="/lovable-uploads/mt-parovi-rada.webp"
                    alt="Parovi u praktičnom radu"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ filter: 'grayscale(6%) contrast(1.01)' }}
                  />
                </div>
                <figcaption
                  className="mt-2.5 text-[10px] uppercase tracking-[0.18em] font-normal"
                  style={{ color: 'rgba(31,29,26,0.38)' }}
                >
                  Parovi u praktičnom radu
                </figcaption>
              </motion.figure>

              <motion.figure
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={0.14}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="overflow-hidden h-full" style={{ minHeight: '160px' }}>
                  <img
                    src="/lovable-uploads/mt-palpacija-lumbalna.jpg"
                    alt="Palpacija lumbalne regije"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ filter: 'grayscale(6%) contrast(1.01)' }}
                  />
                </div>
                <figcaption
                  className="mt-2.5 text-[10px] uppercase tracking-[0.18em] font-normal"
                  style={{ color: 'rgba(31,29,26,0.38)' }}
                >
                  Palpacija lumbalne regije
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </div>
      </section>

      {/* O predavaču */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F0EDE6' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src="/lovable-uploads/mt-stosic-demonstracija.jpg"
                alt="Mr.sc. A. Stošić — voditelj škole"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  filter: 'grayscale(14%) sepia(0.07) brightness(0.96) contrast(1.02)',
                  objectPosition: '72% 30%',
                  transform: 'scale(1.06)',
                  transformOrigin: 'right top',
                }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
            className="md:pt-8"
          >
            <p
              className="text-[10px] uppercase tracking-[0.28em] font-normal mb-7"
              style={{ color: '#B89A4F' }}
            >
              Voditelj škole
            </p>
            <div
              className="w-8 h-px mb-9"
              style={{ backgroundColor: 'rgba(184,154,79,0.35)' }}
            />
            <h2
              className="font-playfair font-semibold text-[1.6rem] leading-snug mb-2"
              style={{ color: '#1F1D1A' }}
            >
              Mr.sc. A. Stošić, dr.med
            </h2>
            <p
              className="text-[10px] uppercase tracking-[0.20em] font-normal mb-10"
              style={{ color: 'rgba(31,29,26,0.45)' }}
            >
              OMT · DO · Licencirani manualni terapeut
            </p>
            <p
              className="text-[13.5px] leading-[1.82] font-normal mb-5"
              style={{ color: '#5F5A52' }}
            >
              Liječnik specijaliziran za ortopedsku manualnu terapiju i osteopatiju. Razvio je
              vlastiti dijagnostičko-terapijski Postupnik za manualnog terapeuta u pacijenata s
              križoboljom — algoritam koji čini okosnicu ovog programa.
            </p>
            <p
              className="text-[13.5px] leading-[1.82] font-normal mb-5"
              style={{ color: '#5F5A52' }}
            >
              Predaje u malim grupama. Program nije namijenjen masovnoj edukaciji — namijenjen
              je terapeutima koji žele razumjeti uzrok, ne samo tretirati simptom.
            </p>
            <p
              className="text-[13px] leading-[1.78] font-normal"
              style={{ color: 'rgba(31,29,26,0.42)' }}
            >
              Ante Antić — organizator i koordinator škole.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Field observations — 3 practitioner voices */}
      <section className="py-24 px-6" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14"
          >
            <p
              className="text-[10px] uppercase tracking-[0.28em] font-normal"
              style={{ color: '#B89A4F' }}
            >
              Iz prakse
            </p>
          </motion.div>

          {[
            { text: 'Doktor Stošić je čudo od čovjeka.', attr: 'Polaznik programa' },
            { text: 'Po prvi put sam razumio zašto tretman djeluje.', attr: 'Polaznik · Stupanj I–II' },
            { text: 'Znanje iz manualne terapije danas koristim svakodnevno u radu s pacijentima.', attr: 'Polaznik · Stupanj I–V' },
            { text: 'Moj učitelj i mentor. Od njega sam naučio jako puno.', attr: 'Polaznik programa' },
          ].map((obs, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={i * 0.08}
              viewport={{ once: true }}
              className="grid md:grid-cols-[1fr_180px] gap-8 items-baseline"
              style={{
                borderTop: '1px solid rgba(0,0,0,0.07)',
                paddingTop: i === 0 ? '3rem' : '2.5rem',
                paddingBottom: i === 0 ? '3rem' : '2.5rem',
              }}
            >
              <p
                className="font-playfair leading-[1.5]"
                style={{
                  fontSize: i === 0 ? 'clamp(1.2rem, 2.5vw, 1.45rem)' : '1.1rem',
                  color: i === 0 ? '#1F1D1A' : 'rgba(31,29,26,0.82)',
                }}
              >
                {obs.text}
              </p>
              <p
                className="text-[9.5px] uppercase tracking-[0.20em] font-normal"
                style={{ color: 'rgba(31,29,26,0.40)' }}
              >
                {obs.attr}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
        </div>
      </section>

      {/* Kotizacija */}
      <section
        ref={pricingRef}
        id="kotizacija"
        className="py-24 px-6"
        style={{ backgroundColor: '#1A1814' }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p
              className="text-[10px] uppercase tracking-[0.28em] font-normal mb-7"
              style={{ color: '#B89A4F' }}
            >
              Termini i kotizacija
            </p>
            <h2
              className="font-playfair font-semibold text-[1.75rem] md:text-[2rem] leading-[1.2]"
              style={{ color: 'rgba(237,233,227,0.92)' }}
            >
              Pet razina. Vlastiti tempo.
            </h2>
          </motion.div>

          <div>
            {termini.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.07}
                viewport={{ once: true }}
                className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_120px_80px_auto] gap-4 md:gap-8 py-7 items-center"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div>
                  <p
                    className="text-[13.5px] font-normal"
                    style={{ color: 'rgba(237,233,227,0.88)' }}
                  >
                    {t.stupanj}
                  </p>
                  <p
                    className="text-[12px] mt-0.5 font-normal"
                    style={{ color: 'rgba(237,233,227,0.56)' }}
                  >
                    {t.lokacija}
                  </p>
                </div>
                <p
                  className="hidden md:block text-[12px] uppercase tracking-[0.08em] font-normal"
                  style={{ color: 'rgba(237,233,227,0.62)' }}
                >
                  {t.datum}
                </p>
                <p
                  className="hidden md:block text-[13.5px] font-normal"
                  style={{ color: 'rgba(237,233,227,0.88)' }}
                >
                  {t.cijena}
                </p>
                <div className="flex flex-col md:flex-row items-end md:items-center gap-1 md:gap-0">
                  <p
                    className="md:hidden text-[13px] font-normal"
                    style={{ color: 'rgba(237,233,227,0.88)' }}
                  >
                    {t.cijena}
                  </p>
                  <a
                    href={t.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.20em] font-normal transition-colors duration-300 whitespace-nowrap"
                    style={{ color: '#B89A4F' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(237,233,227,0.88)')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#B89A4F')}
                  >
                    PDF →
                  </a>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={0.35}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a
              href="https://tally.so/r/wA5kvD"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal uppercase whitespace-nowrap"
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                padding: '8px 22px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: 'rgba(212,175,55,0.90)',
                color: '#1a1a1a',
                transition: 'background-color 0.5s ease',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#d4af37';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(212,175,55,0.90)';
              }}
            >
              Prijavi se
            </a>
            <a
              href="https://wa.me/385958558953"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal uppercase"
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.62)',
                transition: 'color 0.35s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.90)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.62)';
              }}
            >
              — Pitanja na WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p
              className="text-[10px] uppercase tracking-[0.28em] font-normal mb-7"
              style={{ color: '#B89A4F' }}
            >
              Česta pitanja
            </p>
            <h2
              className="font-playfair font-semibold text-[1.75rem] md:text-[2rem] leading-[1.2]"
              style={{ color: '#1F1D1A' }}
            >
              Najčešća pitanja prije početka.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
                  className="border-b-0"
                >
                  <AccordionTrigger
                    className="text-[13.5px] font-normal hover:no-underline py-5 text-left"
                    style={{ color: '#1F1D1A' }}
                  >
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[13px] leading-[1.82] font-normal pb-5"
                    style={{ color: '#7A7570' }}
                  >
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <CourseRecommendations currentCourse="manualna-terapija" />
      <CourseFooter />

    </div>
  );
}
