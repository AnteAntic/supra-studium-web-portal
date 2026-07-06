import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { CourseFooter } from "@/components/CourseFooter";
import { CourseRecommendations } from "@/components/course/CourseRecommendations";

const fadeUp = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const facts = [
  { field: "Pristup",    value: "Klinički",       detail: "palpacija, procjena i praktičan rad" },
  { field: "Polaznici",  value: "900+",            detail: "educiranih terapeuta" },
  { field: "Programi",  value: "7",               detail: "specijaliziranih programa" },
  { field: "Suradnja",  value: "Međunarodna",     detail: "WFMMT federacija, predsjednici i suci" },
];

const alumni = [
  {
    text: "Velik dio edukacije temelji se na vježbama koje se odmah mogu primijeniti u svakodnevnom radu.",
    ime: "Bruna Prnjak",
    struka: "fizioterapeutkinja",
  },
  {
    text: "Nisam požalila ni vremena ni novca uloženog u edukaciju.",
    ime: "Alena Jurić",
    struka: "fizioterapeutkinja",
  },
  {
    text: "Edukacije kod Ante i dr. Stošića preporučujem bez rezerve.",
    ime: "Todor Filipović",
    struka: "fizioterapeut",
  },
];

export default function OUcilistuPage() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'O učilištu | Supra Studium';
    const descText = 'Supra Studium — učilište za kliničke edukacije terapeuta. Pristup temeljen na razumijevanju tkivnog odgovora, ne na skupljanju tehnika.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', descText);
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
    link.setAttribute('href', window.location.origin + '/o-ucilistu');
  }, []);

  return (
    <div className="bg-[#F4F1EA] min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

        <div className="absolute inset-0 top-[-5rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/videos/o-ucilistu-poster.jpg"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          >
            <source src="/videos/o-ucilistu-hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Base overlay */}
        <div className="absolute inset-0 bg-black/32" />

        {/* Desktop: left-dark gradient so text stays readable */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(108deg, rgba(10,8,6,0.84) 0%, rgba(10,8,6,0.56) 38%, rgba(10,8,6,0.18) 64%, transparent 82%)",
          }}
        />

        {/* Mobile: vertical gradient */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,6,4,0.48) 0%, rgba(8,6,4,0.36) 28%, rgba(8,6,4,0.24) 52%, rgba(8,6,4,0.16) 72%, rgba(8,6,4,0.24) 100%)",
          }}
        />

        {/* Top and bottom vignette */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/24 to-transparent" />

        <motion.div style={{ opacity, y }} className="absolute inset-0">
          <div className="container mx-auto px-6 relative z-10 h-full flex items-end pb-[18%] md:pb-[14%]">
            <div className="max-w-xl relative w-full">

              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6"
              >
                <span
                  className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.24em] sm:tracking-[0.30em]"
                  style={{ color: 'rgba(212,175,55,0.92)', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}
                >
                  O učilištu · Supra Studium
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="origin-left mb-8"
              >
                <div className="w-10 h-px bg-[#B89A4F]/45" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
                className="font-playfair font-semibold text-white leading-[1.18] text-[1.75rem] sm:text-[2rem] md:text-[2.15rem] mb-7"
                style={{ textShadow: "0 1px 14px rgba(0,0,0,0.36), 0 1px 4px rgba(0,0,0,0.20)" }}
              >
                Učilište nastalo iz<br className="hidden sm:block" /> rada rukama.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-[13px] font-normal leading-[1.68] max-w-[38ch] mb-9"
                style={{ color: 'rgba(255,255,255,0.80)' }}
              >
                Supra Studium povezuje kliničku preciznost, manualnu terapiju,
                međunarodnu suradnju i edukacije koje se temelje na stvarnom
                radu s tijelom.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="flex items-center gap-5"
              >
                <Link
                  to="/#edukacije"
                  className="text-[10.5px] uppercase tracking-[0.14em] font-normal py-3 px-7 transition-colors duration-300"
                  style={{
                    border: '1px solid rgba(184,154,79,0.55)',
                    color: 'rgba(255,255,255,0.85)',
                    background: 'transparent',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(184,154,79,0.14)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,154,79,0.75)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,154,79,0.55)';
                  }}
                >
                  Pogledaj edukacije
                </Link>
                <a
                  href="#pristup"
                  className="text-[10.5px] uppercase tracking-[0.14em] font-normal"
                  style={{ color: 'rgba(255,255,255,0.72)', textShadow: '0 1px 2px rgba(0,0,0,0.45)', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.95)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.72)'; }}
                >
                  — O pristupu
                </a>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Facts band ─────────────────────────────────────────────────── */}
      <section className="bg-[#F4F1EA] pt-5 pb-2">
        <div className="container mx-auto px-6 md:px-10">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{
              borderTop:    "1px solid rgba(0,0,0,0.08)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {facts.map((item, i) => (
              <div
                key={i}
                className={["py-7 px-6 md:px-8", i === 0 ? "pl-0" : "", i === 3 ? "md:pr-0" : ""].join(" ")}
                style={{
                  borderLeft:   i !== 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
                  borderBottom: i < 2   ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <div className="text-[9.5px] uppercase tracking-[0.25em] mb-2 font-normal" style={{ color: "#B89A4F" }}>
                  {item.field}
                </div>
                <div className="text-[18px] font-medium leading-snug" style={{ color: "#0e0e0e" }}>
                  {item.value}
                </div>
                <div className="text-[12px] mt-1 font-normal leading-relaxed" style={{ color: "#3b3b3b" }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Što je Supra Studium ────────────────────────────────────────── */}
      <section id="pristup" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Što je Supra Studium
            </p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug" style={{ textWrap: 'balance' } as React.CSSProperties}>
              Nije seminar. Nije tečaj vikend formata.
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
              Supra Studium je edukacijsko okruženje za hands-on terapeute koji žele bolje
              kliničko rasuđivanje, precizniji dodir i strukturiran praktičan rad. Svaki
              program razvijen je iz kliničke prakse — ne iz prevedenih stranih materijala.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-6">
              Polaznici rade u malim grupama, s izravnom korekcijom tehnike i stalnom
              povratnom informacijom. CFM Body Reset Method, manualna terapija po dr. Stošiću,
              akupresura i trigger point terapija — svaki program ima jasno definiran klinički
              cilj i primjenjivu strukturu.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed">
              Cilj je da terapeut sutradan u ordinaciji radi drukčije nego dan prije.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Observation cards ──────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-[#e3e3e3]">
            {[
              { text: "Praktičan rad u parovima od prvog sata. Ne demonstracija — iskustvo u ruci." },
              { text: "Svaka tehnika dolazi s indikacijom, mehanizmom djelovanja i granicom primjene." },
              { text: "Terapeuti koji završe tečaj ne znaju samo što rade — znaju zašto i kada." },
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

      {/* ── Osnivač ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <div className="overflow-hidden">
              <img width={1400} height={1051}
                src="/lovable-uploads/ante-founder-portret.jpg"
                alt="Ante Antić — osnivač Supra Studium, terapeut i predavač"
                className="w-full object-cover aspect-[4/5]"
                loading="lazy"
                style={{ filter: "grayscale(8%)", objectPosition: "center 20%" }}
              />
            </div>
            <div className="overflow-hidden">
              <img width={900} height={1200}
                src="/lovable-uploads/ante-tretman-900.webp"
                alt="Ante Antić — klinički rad, manualna terapija"
                className="w-full object-cover aspect-[16/5]"
                loading="lazy"
                style={{ filter: "grayscale(10%)", objectPosition: "center 35%" }}
              />
            </div>
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
              Osnivač
            </p>
            <div className="w-10 h-px bg-[#a58d4e]/30 mb-8" />
            <h2 className="font-playfair text-2xl text-[#1F1D1A] mb-2 leading-snug">
              Ante Antić
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#3b3b3b]/60 mb-8">
              Terapeut · Predavač · Osnivač Supra Studium
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              Ante Antić radi kao terapeut od 2008. godine. Klinički rad s kroničnom
              boli, fascijalnim restrikcijama i funkcionalnim ograničenjima postao je
              temelj edukacijskog smjera Supra Studija. Specijalizirao se za palpatornu
              dijagnostiku, trigger point terapiju i CFM Body Reset Method.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              Edukacijski rad započeo je 2012. kao direktan nastavak rada s pacijentima.
              U sklopu učilišta predaje akupresuru, trigger point terapiju, cupping
              terapiju te cross-friction i funkcionalnu masažu. Sudjelovao je u razvoju
              Škole manualne terapije s dr. Stošićem.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              Potpredsjednik je Svjetske federacije masaže, manualne terapije i Nuad
              Thaia (WFMMT) za Hrvatsku. Sudjeluje kao međunarodni sudac na natjecanjima
              iz masaže i manualne terapije — u Hrvatskoj, Italiji i Bugarskoj.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed">
              Gostujući predavač na Holos World Congressu u Lecceu, Italija.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Praksa i međunarodni kontekst — image grid ─────────────────── */}
      <section className="py-24 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
                Metode i utjecaji
              </p>
              <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug" style={{ textWrap: 'balance' } as React.CSSProperties}>
                Klinički rad, natjecanja i međunarodna suradnja.
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.15}
              viewport={{ once: true }}
            >
              <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
                Program škole temelji se na manualnoj terapiji, palpaciji, kliničkoj
                procjeni i strukturiranom praktičnom radu. Svaki program ima jasno
                definiran klinički cilj i primjenjivu strukturu.
              </p>
              <p className="text-sm text-[#3b3b3b] leading-relaxed">
                Međunarodna suradnja i stručna događanja dodatno proširuju edukacijski
                kontekst škole — kroz rad s federacijama, sudjelovanje na natjecanjima
                i razmjenu stručnih standarda.
              </p>
            </motion.div>
          </div>

          {/* Three-column image grid */}
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                src: "/lovable-uploads/mt-practicni-rad-kral.jpg",
                alt: "Palpacija — Škola manualne terapije, praktičan rad s terapeutima",
                caption: "Palpacija i procjena",
              },
              {
                src: "/lovable-uploads/fh-sudionica-masaza.webp",
                alt: "Terapijski dodir — sudionica Prima Feel & Heal festivala prima masažu",
                caption: "Terapijski dodir",
              },
              {
                src: "/lovable-uploads/cmc-thai-stretch.jpg",
                alt: "Međunarodno natjecanje iz manualne terapije — stretching tehnika",
                caption: "Međunarodni kontekst",
              },
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
                    alt={img.alt}
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

      {/* ── Polaznici — editorial statements ──────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#B89A4F] mb-6">
              Polaznici
            </p>
            <div className="w-10 h-px bg-[#a58d4e]/30" />
          </motion.div>

          <div className="space-y-px bg-[#e3e3e3]">
            {alumni.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.08}
                viewport={{ once: true }}
                className="bg-[#F4F1EA] grid md:grid-cols-[1fr_auto] gap-6 px-8 py-5 items-baseline"
              >
                <p className="text-sm text-[#1F1D1A] leading-relaxed font-playfair italic">
                  "{item.text}"
                </p>
                <div className="text-right">
                  <span className="block text-[11px] font-medium tracking-[0.08em] text-[#1F1D1A]/70 whitespace-nowrap">
                    {item.ime}
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-[#3b3b3b]/45 whitespace-nowrap mt-0.5">
                    {item.struka}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formalni okvir — dark section ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[rgb(20,18,16)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9e8a46] mb-6">
                Status i suradnje
              </p>
              <h2 className="font-playfair text-3xl text-[#ede9e3] leading-snug">
                Formalni okvir edukacije.
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.15}
              viewport={{ once: true }}
            >
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(237,233,227,0.68)" }}>
                Učilište Supra Studium registrirano je učilište za obrazovanje odraslih.
                Po završetku programa polaznici dobivaju potvrdu s urudžbenim brojem,
                klasom i pečatom ustanove.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(237,233,227,0.54)" }}>
                Pohađanje se može evidentirati u e-radnoj knjižici pod kategorijom
                dodatnog obrazovanja, sukladno važećem administrativnom postupku.
              </p>
            </motion.div>
          </div>

          <div className="space-y-px bg-[#201e1a]">
            {[
              {
                naziv: "Potvrda o edukaciji",
                opis: "Svaki završeni program dokumentira se potvrdom Učilišta Supra Studium s urudžbenim brojem, klasom i pečatom. Može se koristiti kao prilog u evidenciji stručnog usavršavanja.",
              },
              {
                naziv: "E-radna knjižica (ERPS)",
                opis: "Pohađanje programa može se evidentirati pod kategorijom dodatnog obrazovanja sukladno dostupnoj dokumentaciji i primjenjivom administrativnom postupku. Potvrda zadovoljava uvjete za evidenciju u ERPS sustavu.",
              },
              {
                naziv: "World Federation of Massage, Manual Therapy & Nuad Thai",
                opis: "Supra Studium djeluje u okviru WFMMT federacije. Ante Antić potpredsjednik je federacije za Hrvatsku i sudjeluje u razvoju stručnih standarda na međunarodnoj razini.",
              },
              {
                naziv: "Hrvatsko međunarodno natjecanje — masaža i manualna terapija",
                opis: "Supra Studium sudjeluje u organizaciji i stručnoj podršci natjecanja iz masaže, manualne terapije i Nuad Thaia na nacionalnoj razini. Polaznici osvajaju medalje na regionalnim i međunarodnim natjecanjima.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.08}
                viewport={{ once: true }}
                className="bg-[rgb(20,18,16)] px-8 py-7"
              >
                <p className="text-sm font-medium text-[#ede9e3] mb-2">{item.naziv}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(237,233,227,0.58)" }}>
                  {item.opis}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Natjecanja ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F4F1EA]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
                Natjecanja
              </p>
              <div className="w-10 h-px bg-[#B89A4F]/28 mb-8" />
              <p className="text-sm text-[#3b3b3b] leading-relaxed mb-4">
                Polaznici Supra Studija sudjeluju i osvajaju medalje na hrvatskim i
                međunarodnim natjecanjima masaže i manualne terapije.
              </p>
              <p className="text-sm text-[#3b3b3b] leading-relaxed mb-6">
                Sudjelovanje na natjecanjima dio je razvoja terapeuta kroz evaluaciju
                pod pritiskom, međunarodnu razmjenu tehnike i povratnu informaciju
                od licenciranih sudaca.
              </p>
              <a
                href="https://fh-participants-7z477wy.gamma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.22em] transition-colors duration-200"
                style={{ color: "rgba(184,154,79,0.70)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#B89A4F'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(184,154,79,0.70)'; }}
              >
                Pogledaj stranicu natjecanja
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.15}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <img width={1920} height={2880}
                src="/lovable-uploads/fh-pobjednici-trofej.webp"
                alt="Pobjednici Hrvatskog natjecanja u masaži i manualnoj terapiji — Supra Studium polaznici"
                className="w-full object-cover"
                loading="lazy"
                style={{ filter: "grayscale(8%)", objectPosition: "center 30%" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CourseRecommendations currentCourse="o-ucilistu" />
      <CourseFooter />
    </div>
  );
}
