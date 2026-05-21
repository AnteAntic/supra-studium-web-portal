import { useEffect, useRef } from "react";
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
  { field: "Pristup", value: "Klinički", detail: "praktičan rad i palpacija" },
  { field: "Polaznici", value: "900+", detail: "educiranih terapeuta" },
  { field: "Programi", value: "6", detail: "specijaliziranih programa" },
  { field: "Suradnja", value: "Međunarodna", detail: "federacije, prvenstva i gostujući predavači" },
];

const alumni = [
  {
    text: "Veliki dio edukacije baziran je na vježbama koje odmah mogu primijeniti u praksi.",
    ime: "Bruna P.",
    struka: "fizioterapeutkinja",
  },
  {
    text: "Nisam požalila ni vremena ni novca uloženog u edukaciju.",
    ime: "Alena J.",
    struka: "fizioterapeutkinja",
  },
  {
    text: "Edukacije kod Ante i dr. Stošića — bez rezerve preporučujem.",
    ime: "Todor F.",
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F4F1EA] min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

        <div className="absolute inset-0 top-[-5rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ objectPosition: "top center" }}
          >
            <source src="/videos/o-ucilistu-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/38" />

        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(108deg, rgba(10,8,6,0.68) 0%, rgba(10,8,6,0.40) 34%, rgba(10,8,6,0.12) 60%, transparent 78%)",
          }}
        />

        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,6,4,0.44) 0%, rgba(8,6,4,0.34) 28%, rgba(8,6,4,0.22) 52%, rgba(8,6,4,0.14) 72%, rgba(8,6,4,0.22) 100%)",
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/18 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/22 to-transparent" />

        <motion.div style={{ opacity, y }} className="absolute inset-0">
          <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
            <div className="max-w-xl relative w-full" style={{ marginTop: "-3%" }}>

              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6"
              >
                <span className="text-[#B89A4F]/75 text-[9px] sm:text-[10px] font-normal uppercase tracking-[0.2em] sm:tracking-[0.28em] whitespace-nowrap overflow-hidden block">
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
                  Nova generacija manualnih terapeuta.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <p className="text-[13px] font-normal text-white/65 leading-[1.65] max-w-sm">
                  Znanje, palpacija i praktičan rad u fokusu svake edukacije. Supra Studium povezuje terapeute koji žele jasniji osjećaj u radu i sigurnost u tretmanu.
                </p>
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

      {/* ── Institutional text ─────────────────────────────────── */}
      <section className="py-24 px-6">
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
            <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug">
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
              kliničko rasuđivanje, precizniji dodir i strukturiran praktični rad. Svaki program
              razvijen je iz kliničke prakse — ne iz prevedenih stranih materijala.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed">
              Polaznici rade u malim grupama, s izravnom korekcijom tehnike. Cilj je da terapeut
              sutradan u ordinaciji radi drukčije nego dan prije.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Observation cards ─────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-[#e3e3e3]">
            {[
              { text: "Praktičan rad u parovima od prvog sata. Ne demonstracija — iskustvo." },
              { text: "Svaka tehnika dolazi s indikacijom, mehanizmom i granicom primjene." },
              { text: "Terapeuti koji završe tečaj ne znaju samo što rade — znaju zašto." },
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

      {/* ── Osnivač ────────────────────────────────────────────── */}
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
              <img
                src="/lovable-uploads/ante-founder-portret.jpg"
                alt="Ante Antić — osnivač Supra Studium"
                className="w-full object-cover aspect-[4/5]"
                loading="lazy"
                style={{
                  filter: "grayscale(8%)",
                  objectPosition: "center 20%",
                }}
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="/lovable-uploads/ante-tretman-900.webp"
                alt="Ante Antić — klinički rad"
                className="w-full object-cover aspect-[16/5]"
                loading="lazy"
                style={{
                  filter: "grayscale(10%)",
                  objectPosition: "center 35%",
                }}
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
              Ante Antić radi kao terapeut od 2008. godine. Klinički rad s kroničnom boli,
              fascijalnim restrikcijama i funkcionalnim ograničenjima postao je temelj
              edukacijskog smjera Supra Studija.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              Edukacijski rad započeo je 2012. kao direktan nastavak rada s pacijentima i
              praktične primjene manualnih tehnika u ordinaciji.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              U sklopu učilišta predaje akupresuru, trigger point terapiju, cupping terapiju
              te cross friction i funkcionalnu masažu. Sudjelovao je u razvoju i organizaciji
              škole manualne terapije s dr. Stošićem.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed">
              Potpredsjednik je Svjetske federacije masaže, manualne terapije i Nuad Thaia
              za Hrvatsku. Sudjeluje kao međunarodni sudac i organizator stručnih natjecanja
              iz masaže i manualne terapije.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Struka, edukacija i međunarodni kontekst ───────────── */}
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
                Praksa i suradnja
              </p>
              <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug">
                Praksa, edukacija i međunarodni kontekst.
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
                Supra Studium povezuje praktičnu edukaciju terapeuta, međunarodnu suradnju
                i sudjelovanje u razvoju hrvatske scene masaže i manualne terapije.
              </p>
              <p className="text-sm text-[#3b3b3b] leading-relaxed">
                Kroz edukacije, prvenstva i suradnje s predavačima iz regije, učilište razvija
                prostor u kojem se znanje provjerava kroz praktičan rad, a ne samo kroz teoriju.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/lovable-uploads/fh-tretman-glava.jpg", caption: "Kranijalna palpacija" },
              { src: "/lovable-uploads/fh-tretman-fokus.jpg", caption: "Bamboo bodywork" },
              { src: "/lovable-uploads/fh-tretman-noge.jpg", caption: "Nuad Thai natjecanje" },
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

      {/* ── Alumni — editorial statements ──────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#B89A4F] mb-8">
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
                className="bg-[#F4F1EA] grid md:grid-cols-[1fr_auto] gap-8 px-8 py-7 items-baseline"
              >
                <p className="text-sm text-[#1F1D1A] leading-relaxed font-playfair italic">
                  "{item.text}"
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#3b3b3b]/45 whitespace-nowrap">
                  {item.ime} · {item.struka}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Akreditacija i status ──────────────────────────────── */}
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
              <p className="text-sm leading-relaxed" style={{ color: "rgba(237,233,227,0.68)" }}>
                Učilište Supra Studium izdaje potvrde o pohađanju za sve završene programe.
                Pohađanje se može evidentirati u e-radnoj knjižici pod dodatnim obrazovanjem,
                sukladno važećem administrativnom postupku.
              </p>
            </motion.div>
          </div>

          <div className="space-y-px bg-[#201e1a]">
            {[
              {
                naziv: "Potvrda o edukaciji",
                opis: "Svaki završeni program dokumentira se potvrdom Učilišta Supra Studium. Može se koristiti kao prilog u evidenciji stručnog usavršavanja.",
              },
              {
                naziv: "E-radna knjižica",
                opis: "Pohađanje programa može se evidentirati pod kategorijom dodatnog obrazovanja, sukladno Zakonu o mirovinskom osiguranju, čl. 104. i 108. (NN 79/2013), čl. 2.",
              },
              {
                naziv: "Međunarodna suradnja",
                opis: "Suradnja s međunarodnim federacijama i stručnim tijelima iz područja manualne terapije i masaže. Gostujući predavači iz regije sudjeluju u određenim programima.",
              },
              {
                naziv: "Hrvatsko prvenstvo u masaži i manualnoj terapiji",
                opis: "Supra Studium povezan je s organizacijom i stručnom podrškom natjecanja iz masaže i manualne terapije na nacionalnoj razini.",
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

      {/* ── Credibility strip — Championship ──────────────────── */}
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
              <p className="text-sm text-[#3b3b3b] leading-relaxed mb-4">
                Polaznici Supra Studija sudjeluju i osvajaju medalje na hrvatskim i međunarodnim
                prvenstvima masaže i manualne terapije.
              </p>
              <p className="text-sm text-[#3b3b3b] leading-relaxed mb-6">
                Sudjelovanje na prvenstvima dio je razvoja terapeuta kroz praksu, evaluaciju
                i međunarodnu razmjenu iskustva.
              </p>
              <a
                href="https://feel-heal-festival-6k1kkp5.gamma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.22em] text-[#B89A4F]/70 hover:text-[#B89A4F] transition-colors duration-200"
              >
                Pogledaj stranicu prvenstva
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
              <img
                src="/lovable-uploads/fh-prvaci-podijelj.jpg"
                alt="Hrvatsko prvenstvo u masaži i manualnoj terapiji — Supra Studium"
                className="w-full object-cover"
                loading="lazy"
                style={{ filter: "grayscale(8%)", objectPosition: "center 30%" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CourseRecommendations currentCourse="soulscan" />
      <CourseFooter />
    </div>
  );
}
