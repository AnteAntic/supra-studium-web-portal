import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CourseStickyBar } from "@/components/ui/CourseStickyBar";
import { CourseFooter } from "@/components/CourseFooter";
import { CourseRecommendations } from "@/components/course/CourseRecommendations";
import { setPageMeta, setJsonLd, courseSchema, courseBreadcrumb } from '@/lib/seo';

const tehnike = [
  { naziv: "Statički cupping", opis: "Lokalizirana dekompresija tkiva. Indikacija: trigger točke, mišićni spazam, periostalne adhezije." },
  { naziv: "Klizni cupping", opis: "Mobilizacija fascijalne mreže duž mišićnih vlakana. Osnova za sve dinamičke protokole." },
  { naziv: "Flash cupping", opis: "Brza izmjenična aplikacija i uklanjanje čaše. Stimulacija mikrocirkulacije u površinskom sloju." },
  { naziv: "Vakuumski Pin & Stretch", opis: "Kombinacija vakuumske fiksacije i aktivne kontrakcije mišića. Povećava opseg pokreta." },
  { naziv: "Obrnuti Pin & Stretch", opis: "Vlastita tehnika. Terapeut fiksira tkivo, pacijent izvodi aktivni pokret — fascijalna trakcija u smjeru kretanja." },
  { naziv: "Kompresija i trakcija", opis: "Izmjenični tlakovi u jednoj točki. Koristi se pri periostealnom pritisku i adhezijama tetiva." },
  { naziv: "Face cupping", opis: "Silikonske čaše malog promjera na mišićnom sloju lica. Ne povlači kožu — mobilizira mišić." },
  { naziv: "Limfodrenažni protokol", opis: "Sekvencijalni niz čaša prema limfnim čvorovima. Anti-edemski učinak." },
  { naziv: "Meridijanski klizni cupping", opis: "Klizanje čaše duž TKM meridijana. Integracija akupunkturnih linija u suvremenu fascijsku terapiju." },
];

const termini = [
  { grad: "Split", datum: "25.10.2026.", lokacija: "Centar za ortopedsku manualnu terapiju Majce & Stojanović, Žnjanska 6", earlyBird: "10.09.2026." },
  { grad: "Zagreb", datum: "17.04.2027.", lokacija: "Poliklinika Medical Body Balance, Frane Kesterčaneka 2b", earlyBird: "03.03.2027." },
];

const ukljuceno = [
  "10 sati kliničke edukacije",
  "9 kliznih tehnika i 3 specijalizirana protokola",
  "Radni materijali i skripta",
  "Potvrda o edukaciji s mogućnošću upisa u e-radnu knjižicu",
  "Rad u maloj grupi (do 12 polaznika)",
  "Pristup dodatnim stručnim materijalima",
];

const bonusi: { n: string; title: string; note: string; bullets?: string[]; disclaimer?: string }[] = [
  {
    n: "01",
    title: "VIP Observer Pass — Official Croatian Massage & Manual Therapy Championship",
    note: "Besplatan VIP Observer Pass za sva tri dana prvenstva.",
    bullets: [
      "Pristup svim natjecanjima",
      "Pristup stručnim radionicama",
      "Promatranje najboljih terapeuta iz Hrvatske i inozemstva",
      "Networking s međunarodnim sucima, edukatorima i terapeutima",
    ],
  },
  {
    n: "02",
    title: "Online Q&A nakon edukacije",
    note: "Jedan zajednički online susret nakon edukacije za pitanja, ponavljanje i razmjenu iskustava iz prakse.",
  },
  {
    n: "03",
    title: "Ekskluzivni stručni PDF",
    note: "Dodatni stručni materijal koji nije dio standardne skripte.",
  },
  {
    n: "04",
    title: "Mogućnost promatranja tretmana uživo",
    note: "Mogućnost promatranja rada iskusnog terapeuta tijekom tretmana s pravim klijentima, prema dogovoru i dostupnosti termina. Tijekom promatranja uči se:",
    bullets: [
      "Razgovor s klijentom",
      "Procjena stanja",
      "Razmišljanje terapeuta",
      "Odabir tehnika",
      "Prilagodba tretmana stvarnoj osobi",
      "Završna evaluacija tretmana",
    ],
    disclaimer: "Promatranje se organizira prema dogovoru, raspoloživosti termina i uz prethodnu suglasnost klijenta.",
  },
];

const faq = [
  {
    q: "Tko može pohađati tečaj?",
    a: "Masažni terapeuti, fizioterapeuti, estetičari i terapeuti s aktivnom kliničkom praksom. Tečaj nije namijenjen početnicima bez hands-on iskustva s pacijentima.",
  },
  {
    q: "Što je uključeno u kotizaciju?",
    a: "Program edukacije, materijali za rad i potvrda o pohađanju s mogućnošću upisa u e-radnu knjižicu. Set čaša za rad nabavlja se zasebno — preporuke dobivate pri prijavi.",
  },
  {
    q: "Je li cupping bolan za pacijenta?",
    a: "Pravilno izveden cupping stvara osjećaj razvlačenja tkiva, ne bola. Petehije koje se pojave rezultat su hipoksičnog odgovora u tkivu — nisu nuspojava, nego dijagnostički podatak. Polaznici nauče razlikovati funkcionalni vakuum od prejakog pritiska.",
  },
  {
    q: "Koliko polaznika prima svaki tečaj?",
    a: "Do 12 polaznika. Svaki polaznik radi u paru i dobiva izravnu korekciju tehnike od voditelja.",
  },
  {
    q: "Što je 'Obrnuti Pin & Stretch' tehnika?",
    a: "Autorska tehnika Ante Antića. Za razliku od standardnog P&S-a gdje terapeut povlači čašu dok pacijent miruje — u Obrnutom P&S-u terapeut fiksira tkivo čašom, a pacijent izvodi aktivni pokret. Fascijalna trakcija ide u smjeru kretanja, što rezultira dubljom mobilizacijom.",
  },
  {
    q: "Kako se ovaj tečaj razlikuje od standardnih cupping edukacija?",
    a: "Jedini tečaj u regiji koji integrira TKM meridijane, 9 kliznih tehnika i anti-age protokol lica u jednom danu. Sadržaj nije preuzet iz stranih materijala — razvijen je iz kliničke prakse.",
  },
];

const fadeUp = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const facts = [
  { field: "Format", value: "1 dan", detail: "10 sati kliničkog rada" },
  { field: "Lokacije", value: "Split · Zagreb", detail: "ostali gradovi na upit" },
  { field: "Kotizacija", value: "350 €", detail: "Early Bird · materijali uključeni" },
  { field: "Polaznici", value: "Do 12", detail: "individualni nadzor rada" },
];

export default function CuppingPage() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: 'Cupping & Ventuzoterapija — 9 kliznih tehnika | Supra Studium',
      description: 'Klinički cupping tečaj: 9 kliznih tehnika, vakuumski Pin & Stretch, limfodrenažni i anti-age protokol. 1 dan, do 12 polaznika. Split i Zagreb.',
      path: '/cupping-terapija',
      ogImage: '/lovable-uploads/cup-hero-vakuum.webp',
    });
    setJsonLd('course', courseSchema({
      name: 'Cupping & Ventuzoterapija',
      description: 'Jednodnevni klinički cupping tečaj: 9 kliznih tehnika, vakuumski Pin & Stretch, limfodrenažni i anti-age protokol.',
      path: '/cupping-terapija',
      startDate: '2026-10-25',
      priceEUR: 350,
      location: 'Split',
    }));
    setJsonLd('breadcrumb', courseBreadcrumb('Cupping & Ventuzoterapija', '/cupping-terapija'));
  }, []);

  const scrollToKotizacija = () => {
    const el = document.getElementById("kotizacija");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#F4F1EA] min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

        {/* Image */}
        <div className="absolute inset-0 top-[-5rem]">
          <img fetchPriority="high" width={1536} height={2048}
            src="/lovable-uploads/cup-hero-vakuum.webp"
            alt="Vakuumske čaše — cupping terapija"
            className="w-full h-full object-cover"
            style={{ objectPosition: "55% 30%" }}
          />
        </div>

        {/* Base tonal settle */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Desktop: cinematic left text zone */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(12,9,6,0.84) 0%, rgba(12,9,6,0.62) 28%, rgba(12,9,6,0.20) 52%, rgba(12,9,6,0.04) 66%, transparent 78%)",
          }}
        />

        {/* Desktop: radial depth behind headline */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 12% 60%, rgba(8,5,2,0.36) 0%, transparent 100%)",
          }}
        />

        {/* Mobile: vertical gradient */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,7,4,0.60) 0%, rgba(10,7,4,0.46) 25%, rgba(10,7,4,0.28) 50%, rgba(10,7,4,0.16) 72%, rgba(10,7,4,0.28) 100%)",
          }}
        />

        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/18 to-transparent" />

        {/* Bottom grounding vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/22 to-transparent" />

        {/* Text content */}
        <motion.div style={{ opacity, y }} className="absolute inset-0">
          <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
            <div className="max-w-xl relative w-full" style={{ marginTop: "-3%" }}>

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6"
              >
                <span
                  className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.2em] sm:tracking-[0.28em] whitespace-nowrap overflow-hidden block"
                  style={{ color: 'rgba(212,175,55,0.92)', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}
                >
                  Cupping Edukacija · Zagreb
                </span>
              </motion.div>

              {/* Separator */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="origin-left mb-8"
              >
                <div className="w-10 h-px bg-[#B89A4F]/45" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
                className="mb-9"
              >
                <h1
                  className="font-playfair font-semibold text-white leading-[1.18] text-[1.75rem] sm:text-[2rem] md:text-[2.1rem]"
                  style={{ textShadow: "0 1px 12px rgba(0,0,0,0.38), 0 1px 3px rgba(0,0,0,0.22)" }}
                >
                  Negativni pritisak.
                  <br />
                  Drugačiji princip.
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-5"
              >
                <p className="text-[13px] font-normal text-white/65 leading-[1.65] max-w-sm">
                  Jednodnevna edukacija koja obuhvaća 9 kliznih tehnika, 3 specijalizirana protokola i TKM integraciju.
                </p>
              </motion.div>

              {/* Meta strip */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.85, ease: 'easeOut' }}
                className="mb-12 flex flex-wrap items-center"
                style={{ columnGap: '14px', rowGap: '4px' }}
              >
                {['1 dan', 'Rad u paru', 'Certifikat', '9 kliznih tehnika'].map((item, i) => (
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

              {/* CTA group */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="flex flex-row items-center gap-4"
              >
                <button
                  className="bg-[#B89A4F]/90 hover:bg-[#B89A4F] text-white px-5 py-2 text-xs font-medium rounded-sm tracking-wider uppercase transition-colors duration-300 border-0 shadow-none cursor-pointer"
                  onClick={scrollToKotizacija}
                >
                  Pošalji upit
                </button>
                <button
                  className="text-xs font-normal tracking-[0.12em] bg-transparent border-0 cursor-pointer p-0"
                  style={{ color: 'rgba(255,255,255,0.72)', textShadow: '0 1px 2px rgba(0,0,0,0.45)', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.95)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.72)'; }}
                  onClick={() => {
                    const el = document.getElementById("metoda");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  — Saznaj više
                </button>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Facts Band ─────────────────────────────────────────── */}
      <section className="bg-[#F4F1EA] pt-5">
        <div className="container mx-auto px-6 md:px-10">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {facts.map((item, i) => (
              <div
                key={i}
                className={[
                  "py-7 px-6 md:px-8",
                  i === 0 ? "pl-0" : "",
                  i === 3 ? "md:pr-0" : "",
                ].join(" ")}
                style={{
                  borderLeft: i !== 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <div
                  className="text-[9.5px] uppercase tracking-[0.25em] mb-2 font-normal"
                  style={{ color: "#B89A4F" }}
                >
                  {item.field}
                </div>
                <div
                  className="text-[18px] font-medium leading-snug"
                  style={{ color: "#0e0e0e" }}
                >
                  {item.value}
                </div>
                <div
                  className="text-[12px] mt-1 font-normal leading-relaxed"
                  style={{ color: "#3b3b3b" }}
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseStickyBar
        locations={[
          { city: "Split", dates: "25.10.2026." },
          { city: "Zagreb", dates: "17.4.2027." },
        ]}
        price="Early Bird od 350 €"
        ctaText="Prijavi se"
        ctaHref="https://tally.so/r/wA5kvD"
        theme="light"
      />

      {/* ── Klinička observacija ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Klinička perspektiva
            </p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug">
              Vakuum nije masaža. Radi drugačije.
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-6">
              Svaka tehnika masaže komprimira tkivo — pritišće prema dole. Cupping radi obrnuto:
              negativni pritisak podiže fasciju, odvaja slojeve, otvara prostor za cirkulaciju i limfu.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed">
              Terapeuti koji prvi put rade s čašama opisuju isto iznenađenje — tkivo reagira na mjestima
              gdje manualni pritisak nije dostizao. Tečaj počinje razumijevanjem tog mehanizma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Observation cards ─────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-[#e3e3e3]">
            {[
              { text: "Vakuum podiže tkivo — ne komprimira. Fascija se mobilizira drukčije nego pod rukom." },
              { text: "Edem se drenira tamo gdje ni duboka masaža nije dosezala." },
              { text: "Boja petehija nije nuspojava — dijagnostički je podatak o stanju cirkulacije." },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.1}
                viewport={{ once: true }}
                className="bg-[#FAF8F4] px-8 py-10"
              >
                <p className="text-sm text-[#1F1D1A] leading-relaxed font-playfair italic">
                  "{card.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinical snapshot ─────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Klinička situacija
            </p>
            <div className="w-10 h-px bg-[#a58d4e]/30 mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
              className="border-l border-[#a58d4e]/30 pl-8"
            >
              <p className="text-sm text-[#3b3b3b] leading-relaxed mb-4">
                Pacijentica s kroničnom napetošću trapezija, prethodno tretirana standardnom
                masažom bez trajnog poboljšanja. Manualni pritisak smanjuje tonus na sat-dva.
                Na sljedećem terminu — ista napetost.
              </p>
              <p className="text-sm text-[#1F1D1A] leading-relaxed font-medium">
                Flash cupping + klizanje po fascijskoj liniji — napetost se nije vraćala tjedan dana.
                Nije bila u mišiću. Bila je u fasciji iznad njega.
              </p>
            </motion.blockquote>

            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
              className="border-l border-[#a58d4e]/30 pl-8"
            >
              <p className="text-sm text-[#3b3b3b] leading-relaxed mb-4">
                Terapeut koji završi tečaj ne zna samo tehniku — zna mehanizam iza nje.
                Zna kada primijeniti statički, kada klizni, kada ne primijeniti cupping uopće.
              </p>
              <p className="text-sm text-[#1F1D1A] leading-relaxed font-medium">
                Kontraindikacije su jednako važne kao i indikacije. To je dio programa.
              </p>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* ── Video intermezzo ─────────────────────────────────── */}
      <section className="relative h-[55vh] overflow-hidden bg-[#0e0e0e]">
        <div className="absolute inset-0 pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/R5xBOQ2GQ-g?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=R5xBOQ2GQ-g"
            allow="autoplay; encrypted-media"
            title=""
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100vw",
              height: "56.25vw",
              minHeight: "100%",
              minWidth: "177.78vh",
              transform: "translate(-50%, -50%)",
              border: "none",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/55 via-[#0e0e0e]/20 to-transparent" />
        <div className="absolute bottom-10 left-8 md:left-16">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
            Primjena · vakuumska čaša
          </p>
        </div>
      </section>

      {/* ── Metoda — 3 protokola ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0e0e0e]" id="metoda">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
                Metoda
              </p>
              <h2 className="font-playfair text-3xl text-white leading-snug">
                Tri protokola razvijena iz kliničke prakse.
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.15}
              viewport={{ once: true }}
            >
              <p className="text-sm text-white/55 leading-relaxed">
                Program nije preuzet iz stranih edukacija. Razvijen je iz kliničke prakse kroz
                više godina rada s pacijentima.
              </p>
            </motion.div>
          </div>

          <div className="space-y-px bg-[#201e1a]">
            {[
              {
                broj: "01",
                naziv: "Anti-cellulitni protokol",
                opis: "Kombinacija statičkog cuppinga i kliznih tehnika duž TKM meridijana noge. Aktivira mikrocirkulaciju i limfnu drenažu u dubini tkiva — u slojevima do kojih površinska masaža ne dostiže.",
              },
              {
                broj: "02",
                naziv: "Anti-age protokol lica",
                opis: "6 faza fascijalne mobilizacije lica s face cuppingom. Jedina tehnika koja dostiže mišićni sloj bez kompresijskog pritiska. Vidljivi lifting efekt bez invazivnog zahvata.",
              },
              {
                broj: "03",
                naziv: "TKM i meridijanska integracija",
                opis: "Primjena akupunkturnih meridijana u modernoj cupping praksi. Jedini tečaj u regiji koji spaja TKM znanje s kliničkim protokolima mekih tkiva — bez mistifikacije.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.1}
                viewport={{ once: true }}
                className="bg-[#141311] grid md:grid-cols-[80px_1fr] gap-8 px-8 py-10 items-start"
              >
                <span className="font-playfair text-4xl text-[#9e8a46]/25 leading-none">
                  {p.broj}
                </span>
                <div>
                  <h3 className="text-base font-medium text-[#ede9e3] mb-3">{p.naziv}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(237,233,227,0.55)" }}>
                    {p.opis}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9 tehnika ────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Program
            </p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug max-w-lg">
              Devet tehnika. Jedan dan.
            </h2>
          </motion.div>

          <div className="space-y-px bg-[#e3e3e3]">
            {tehnike.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.06}
                viewport={{ once: true }}
                className="bg-[#F4F1EA] grid md:grid-cols-[200px_1fr] gap-8 px-8 py-6 items-start"
              >
                <p className="text-sm font-medium text-[#1F1D1A]">{t.naziv}</p>
                <p className="text-sm text-[#3b3b3b] leading-relaxed">{t.opis}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dokumentacija rada ───────────────────────────────── */}
      <section className="py-16 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/lovable-uploads/cup-grid-lumbar.webp", caption: "Vakuumska aplikacija — lumbalna regija" },
              { src: "/lovable-uploads/cup-grid-vrat.webp", caption: "Face cupping — vrat i dekoltea" },
              { src: "/lovable-uploads/cup-grid-sliding.jpg", caption: "Klizni cupping — trapezius" },
            ].map((img, i) => (
              <motion.figure
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.08}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ filter: "grayscale(8%)" }}
                  />
                </div>
                <figcaption className="mt-2 text-[10px] text-[#3b3b3b]/50 uppercase tracking-[0.18em]">
                  {img.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── O predavaču ──────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img width={1066} height={1600}
              src="/lovable-uploads/cup-mentor-portret.jpg"
              alt="Ante Antić — voditelj cupping tečaja"
              className="w-full object-cover aspect-[4/5]"
              loading="lazy"
              style={{
                filter: "grayscale(8%)",
                objectPosition: "center 10%",
                transform: "scale(1.08)",
                transformOrigin: "center top",
              }}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
            className="md:pt-8"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Voditelj tečaja
            </p>
            <div className="w-10 h-px bg-[#a58d4e]/30 mb-8" />
            <h2 className="font-playfair text-2xl text-[#1F1D1A] mb-2 leading-snug">
              Ante Antić
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#3b3b3b]/60 mb-8">
              Masažni terapeut · Predavač · Osnivač Supra Studium
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              Program nije nastao iz certificiranih skripti ili prevedenih materijala. Razvijen je
              kroz godine rada s kroničnom napetošću, fascijalnim restrikcijama i klijentima kod kojih
              klasična masaža nije donosila promjenu. Svaka tehnika u programu ima klinički razlog
              postojanja — indikaciju, mehanizam i granicu primjene.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              Edukacija se odvija u malim grupama. Svaki polaznik prolazi tehnike u paru, s izravnom
              korekcijom. Cilj nije demonstracija — cilj je da polaznik razumije što radi i zašto,
              i da to može ponoviti sljedeći dan u ordinaciji.
            </p>
            <blockquote className="border-l border-[#a58d4e]/30 pl-5 mt-8">
              <p className="text-sm text-[#3b3b3b]/70 leading-relaxed italic font-playfair">
                "Cupping je jedinstven jer radi u smjeru koji ruka ne može imitirati. Ne zamjenjuje
                masažu — proširuje ono što masaža može postići."
              </p>
              <p className="text-xs text-[#3b3b3b]/45 mt-3 uppercase tracking-[0.18em]">
                Slađana Vošten, polaznica
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── Kotizacija ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#141311]" id="kotizacija">
        <div className="max-w-5xl mx-auto">

          {/* Header + intro */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#9e8a46] mb-5">
              Termini i kotizacija
            </p>
            <h2 className="font-playfair text-3xl text-[#ede9e3] leading-snug mb-6">
              Dva grada. Jedan dan.
            </h2>
            <p className="text-[13.5px] leading-[1.82]" style={{ color: "rgba(237,233,227,0.60)", maxWidth: "54ch" }}>
              Jednodnevna klinička edukacija u malim grupama — 9 kliznih tehnika, 3 specijalizirana protokola i TKM integracija, s izravnom korekcijom rada.
            </p>
          </motion.div>

          {/* Price card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.08}
            viewport={{ once: true }}
            className="mb-16 p-8 md:p-10"
            style={{ border: "1px solid rgba(201,168,50,0.38)", background: "rgba(201,168,50,0.06)" }}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <p className="font-playfair font-semibold leading-none" style={{ fontSize: "3.4rem", color: "rgba(237,233,227,0.95)", letterSpacing: "-0.02em" }}>
                    350 €
                  </p>
                  <p className="text-[12px] font-normal" style={{ color: "#c9a832" }}>
                    Early Bird
                  </p>
                </div>
                <p className="text-[12px] font-normal" style={{ color: "rgba(237,233,227,0.30)", textDecoration: "line-through" }}>
                  Redovna cijena: 400 €
                </p>
              </div>
              <div className="flex gap-10 md:gap-12 md:pb-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-normal mb-1.5" style={{ color: "rgba(201,168,50,0.75)" }}>
                    Akontacija
                  </p>
                  <p className="text-[15px] font-normal" style={{ color: "rgba(237,233,227,0.88)" }}>
                    100 €
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-normal mb-1.5" style={{ color: "rgba(201,168,50,0.75)" }}>
                    Grupa
                  </p>
                  <p className="text-[15px] font-normal whitespace-nowrap" style={{ color: "rgba(237,233,227,0.88)" }}>
                    Max. 12 polaznika
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Termini list */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.12}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-2" style={{ color: "#9e8a46" }}>
              Termini
            </p>
            {termini.map((t, i) => (
              <div
                key={i}
                className="py-7 grid gap-5 md:gap-8 md:grid-cols-[1fr_auto] md:items-center"
                style={{
                  borderTop: "1px solid rgba(237,233,227,0.08)",
                  ...(i === termini.length - 1 && { borderBottom: "1px solid rgba(237,233,227,0.08)" }),
                }}
              >
                <div>
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <p className="font-playfair font-medium text-[1.15rem] leading-tight" style={{ color: "rgba(237,233,227,0.92)" }}>
                      {t.grad}
                    </p>
                    <p className="text-[13px] font-normal" style={{ color: "rgba(237,233,227,0.72)" }}>
                      {t.datum}
                    </p>
                  </div>
                  <p className="text-[12px] font-normal leading-[1.6] mb-2" style={{ color: "rgba(237,233,227,0.42)" }}>
                    {t.lokacija}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.14em] font-medium" style={{ color: "#c9a832" }}>
                    Early Bird do {t.earlyBird}
                  </p>
                </div>
                <a
                  href="https://tally.so/r/wA5kvD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#c9a832]/90 hover:bg-[#c9a832] text-[#1F1D1A] text-[11px] uppercase tracking-[0.12em] font-medium px-6 py-2.5 rounded-sm transition-colors duration-500 md:justify-self-end"
                >
                  Prijavi se
                </a>
              </div>
            ))}
          </motion.div>

          {/* Rok prijave */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.16}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[12px] leading-[1.65] font-normal" style={{ color: "rgba(237,233,227,0.42)" }}>
              Preostali iznos kotizacije plaća se najkasnije 30 dana prije početka edukacije. Prijave se u pravilu zatvaraju 45 dana prije početka pojedine edukacije kako bismo na vrijeme organizirali održavanje tečaja.
            </p>
            <p className="text-[12px] leading-[1.65] font-normal mt-2" style={{ color: "rgba(237,233,227,0.42)" }}>
              Ako se javljaš nakon isteka tog roka, slobodno nas kontaktiraj na{" "}
              <a href="mailto:info@uciliste-suprastudium.hr" style={{ color: "#c9a832" }}>info@uciliste-suprastudium.hr</a>
              {" "}ili nazovi{" "}
              <a href="tel:+385958558953" style={{ color: "#c9a832" }}>095 855 89 53</a>.
              Ako postoji slobodno mjesto i organizacijske mogućnosti to dopuštaju, provjerit ćemo mogućnost naknadne prijave.
            </p>
          </motion.div>

          {/* Uključeno u kotizaciju */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
            className="pt-12"
            style={{ borderTop: "1px solid rgba(237,233,227,0.08)" }}
          >
            <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-6" style={{ color: "#9e8a46" }}>
              Uključeno u kotizaciju
            </p>
            <div className="grid sm:grid-cols-2 gap-x-10">
              {ukljuceno.map((item, i) => (
                <div key={i} className="py-4 flex gap-3" style={{ borderTop: "1px solid rgba(237,233,227,0.08)" }}>
                  <span className="flex-shrink-0 mt-[3px]" style={{ color: "rgba(201,168,50,0.55)", fontSize: "11px" }}>—</span>
                  <p className="text-[13.5px] leading-[1.55] font-normal" style={{ color: "rgba(237,233,227,0.68)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[12px] leading-[1.7] font-normal mt-6" style={{ color: "rgba(237,233,227,0.38)", fontStyle: "italic" }}>
              Set čaša za rad nabavlja se zasebno — preporuke dobivaš pri prijavi.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── Bonus za prva 3 prijavljena ──────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#FAF8F4", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="max-w-5xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-6" style={{ color: "#B89A4F" }}>
              Bonus za prva 3 prijavljena
            </p>
            <div className="w-10 h-px mb-9" style={{ backgroundColor: "rgba(184,154,79,0.28)" }} />
            <p className="text-[14px] leading-[1.85] font-normal" style={{ color: "#5F5A52", maxWidth: "54ch" }}>
              Prva 3 polaznika koja rezerviraju mjesto dobivaju dodatne resurse koji nisu dio standardnog programa.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              {bonusi.map((bonus, i) => (
                <div
                  key={i}
                  className="p-8"
                  style={{
                    background: "white",
                    borderRight: i % 2 === 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                    borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  <p className="font-playfair font-normal leading-none mb-5" style={{ fontSize: "2rem", color: "rgba(184,154,79,0.28)" }}>
                    {bonus.n}
                  </p>
                  <p className="text-[14.5px] leading-snug font-medium mb-3" style={{ color: "#1F1D1A" }}>
                    {bonus.title}
                  </p>
                  <p className="text-[12.5px] leading-[1.72] font-normal" style={{ color: "#8A8480" }}>
                    {bonus.note}
                  </p>
                  {bonus.bullets && (
                    <ul className="mt-4 space-y-2">
                      {bonus.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-[12.5px] leading-[1.6] font-normal" style={{ color: "#8A8480" }}>
                          <span className="flex-shrink-0" style={{ color: "rgba(184,154,79,0.55)" }}>—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {bonus.disclaimer && (
                    <p className="text-[12px] leading-[1.7] font-normal mt-5" style={{ color: "rgba(0,0,0,0.42)", fontStyle: "italic" }}>
                      {bonus.disclaimer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" id="faq">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Česta pitanja
            </p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A]">
              Najčešća pitanja prije početka.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
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
                  className="border-b border-[#e3e3e3]"
                >
                  <AccordionTrigger className="text-sm font-medium text-[#1F1D1A] hover:no-underline py-5 text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#3b3b3b] leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <CourseRecommendations currentCourse="cupping" />
      <CourseFooter />
    </div>
  );
}
