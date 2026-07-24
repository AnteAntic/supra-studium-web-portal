import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CourseStickyBar } from "@/components/ui/CourseStickyBar";
import { CourseFooter } from "@/components/CourseFooter";
import { CourseRecommendations } from "@/components/course/CourseRecommendations";
import { setPageMeta, setJsonLd, courseSchema, courseBreadcrumb, faqSchema } from "@/lib/seo";

const primjecujes = [
  "Razliku između onoga što pacijent kaže i onoga što tijelo pokazuje.",
  "Koje pitanje otvara ključni podatak — a koje zatvara razgovor.",
  "Kada slikovni nalaz objašnjava tegobu, a kada je slučajan nalaz bez veze sa simptomom.",
  "Kada je tegoba u domeni terapeuta — a kada traži liječnika.",
];

const principi = [
  {
    broj: "01",
    naziv: "Komunikacija kao alat",
    opis: "Razgovor nije formalnost. Način na koji pitaš određuje koje ćeš podatke dobiti — i one koje nikad nećeš čuti.",
  },
  {
    broj: "02",
    naziv: "Objektivni pregled",
    opis: "Inspekcija, palpacija i ciljani klinički testovi pretvaraju pacijentov opis u provjerljiv nalaz. Tvrdnja se dokazuje ili opovrgava.",
  },
  {
    broj: "03",
    naziv: "Radna dijagnoza",
    opis: "Sinteza anamneze, pregleda i slikovnih nalaza u hipotezu koja usmjerava terapiju — i jasnu granicu kada tegoba traži liječnika.",
  },
];

const program = [
  "Komunikacija kao klinički alat — kako razgovor oblikuje procjenu.",
  "Anamneza: sustav i strategija prikupljanja korisnih podataka.",
  "Fizikalni pregled: inspekcija, palpacija, ciljani klinički testovi.",
  "Mjesto slikovnih i laboratorijskih pretraga u radnoj dijagnozi.",
  "Od nalaza do radne dijagnoze — kliničko zaključivanje.",
  "Pisanje medicinskog nalaza: jasno, točno, korisno.",
  "Vježbe: samostalna anamneza i postavljanje radne dijagnoze.",
];

const slike = [
  { src: "/lovable-uploads/propedeutika-pregled-vrat.webp", caption: "Fizikalni pregled — cervikalna regija" },
  { src: "/lovable-uploads/propedeutika-palpacija-koljeno.webp", caption: "Palpacija — koljeno" },
  { src: "/lovable-uploads/mt-palpacija-lumbalna.jpg", caption: "Palpacija — lumbalna regija" },
];

const ukljuceno = [
  "8 sati kliničke edukacije s dr. Stošićem",
  "Vježbe samostalne anamneze i postavljanja radne dijagnoze",
  "Predložak za pisanje medicinskog nalaza",
  "Radni materijali",
  "Potvrda o edukaciji s mogućnošću upisa u e-radnu knjižicu",
  "Rad u maloj grupi (do 20 polaznika)",
];

const faq = [
  {
    q: "Trebam li medicinsko predznanje?",
    a: "Ne. Tečaj je namijenjen fizioterapeutima, manualnim terapeutima i drugim zdravstvenim djelatnicima koji rade s pacijentima. Kreće od sustava procjene i gradi ga korak po korak.",
  },
  {
    q: "Uči li ovaj tečaj postavljanje dijagnoze umjesto liječnika?",
    a: "Ne. Cilj je radna dijagnoza koja usmjerava terapiju — i jasna granica: kada je tegoba u domeni terapeuta, a kada traži liječnika. Propedeutika ne zamjenjuje liječničku obradu, nego je čini pravovremenom.",
  },
  {
    q: "Dobivam li potvrdu?",
    a: "Da. Svi polaznici dobivaju potvrdu o edukaciji koja se može upisati u e-radnu knjižicu, pod rubrikom dodatnog obrazovanja.",
  },
  {
    q: "Koliko je polaznika u grupi?",
    a: "Najviše 20 — dovoljno malena grupa da ostane vremena za vježbe i individualni rad.",
  },
  {
    q: "Hoće li se tečaj održati i u drugim gradovima?",
    a: "Prvi termin je u Splitu, 31. listopada 2026. Termine za druge gradove objavljujemo uskoro — javi interes putem prijave i obavijestit ćemo te.",
  },
  {
    q: "Za koga je tečaj najkorisniji?",
    a: "Za terapeute koji rade samostalno ili to žele — i koji žele brže i sigurnije doći do radne dijagnoze prije nego što počnu tretman.",
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
  { field: "Trajanje", value: "1 dan", detail: "9–17 sati" },
  { field: "Format", value: "Predavanje + vježbe", detail: "samostalna anamneza i dijagnoza" },
  { field: "Lokacija", value: "Split", detail: "ostali gradovi u najavi" },
  { field: "Polaznici", value: "Do 20", detail: "mala grupa, rad uživo" },
];

export default function KlinickaPropedeutikaPage() {
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
      title: "Klinička propedeutika — procjena prije terapije | Supra Studium",
      description:
        "Jednodnevna edukacija kliničke procjene za fizioterapeute i manualne terapeute — anamneza, fizikalni pregled, radna dijagnoza i medicinski nalaz. Split, 31.10.2026., dr. Aleksandar Stošić.",
      path: "/klinicka-propedeutika",
      ogImage: "/lovable-uploads/propedeutika-hero-procjena.webp",
    });
    setJsonLd(
      "course",
      courseSchema({
        name: "Klinička propedeutika za fizioterapeute i manualne terapeute",
        description:
          "Jednodnevna edukacija kliničke procjene prije terapije — anamneza, fizikalni pregled, radna dijagnoza i pisanje medicinskog nalaza, pod vodstvom dr. Aleksandra Stošića.",
        path: "/klinicka-propedeutika",
        startDate: "2026-10-31",
        priceEUR: 300,
        location: "Split",
      })
    );
    setJsonLd("breadcrumb", courseBreadcrumb("Klinička propedeutika", "/klinicka-propedeutika"));
    setJsonLd("faq", faqSchema(faq.map((f) => ({ question: f.q, answer: f.a }))));
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#F4F1EA] min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

        <div className="absolute inset-0 top-[-5rem]">
          <img
            fetchPriority="high"
            width={1920}
            height={1280}
            src="/lovable-uploads/propedeutika-hero-procjena.webp"
            alt="Klinička procjena — dr. Stošić uz model kralježnice tijekom edukacije"
            className="w-full h-full object-cover"
            style={{ objectPosition: "60% 28%" }}
          />
        </div>

        <div className="absolute inset-0 bg-black/15" />

        {/* Desktop: cinematic left text zone */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(12,9,6,0.86) 0%, rgba(12,9,6,0.64) 28%, rgba(12,9,6,0.22) 52%, rgba(12,9,6,0.05) 66%, transparent 78%)",
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 12% 60%, rgba(8,5,2,0.38) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,7,4,0.62) 0%, rgba(10,7,4,0.48) 25%, rgba(10,7,4,0.30) 50%, rgba(10,7,4,0.18) 72%, rgba(10,7,4,0.32) 100%)",
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
                <span
                  className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.2em] sm:tracking-[0.28em] whitespace-nowrap overflow-hidden block"
                  style={{ color: "rgba(212,175,55,0.92)", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
                >
                  Klinička propedeutika · Split · 2026
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
                  Svaku terapiju vodi procjena.
                  <br />
                  Nauči je postaviti — samostalno i sigurno.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-5"
              >
                <p className="text-[13px] font-normal text-white/65 leading-[1.65] max-w-md">
                  Jednodnevna edukacija o kliničkoj procjeni prije terapije — anamneza, fizikalni pregled,
                  radna dijagnoza i medicinski nalaz, pod vodstvom dr. Aleksandra Stošića.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.85, ease: "easeOut" }}
                className="mb-12 flex flex-wrap items-center"
                style={{ columnGap: "14px", rowGap: "4px" }}
              >
                {["1 dan · 9–17h", "Anamneza i pregled", "Radna dijagnoza", "Potvrda o edukaciji"].map((item, i) => (
                  <React.Fragment key={item}>
                    {i > 0 && (
                      <span style={{ color: "rgba(255,255,255,0.32)", fontSize: "11px", lineHeight: 1 }}>·</span>
                    )}
                    <span
                      className="font-medium"
                      style={{ fontSize: "11px", letterSpacing: "0.11em", color: "rgba(255,255,255,0.78)", textShadow: "0 1px 2px rgba(0,0,0,0.45)" }}
                    >
                      {item}
                    </span>
                  </React.Fragment>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="flex flex-row items-center gap-4"
              >
                <button
                  className="bg-[#B89A4F]/90 hover:bg-[#B89A4F] text-white px-5 py-2 text-xs font-medium rounded-sm tracking-wider uppercase transition-colors duration-300 border-0 shadow-none cursor-pointer"
                  onClick={() => scrollTo("program")}
                >
                  Pogledaj program
                </button>
                <button
                  className="text-xs font-normal tracking-[0.12em] bg-transparent border-0 cursor-pointer p-0"
                  style={{ color: "rgba(255,255,255,0.72)", textShadow: "0 1px 2px rgba(0,0,0,0.45)", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.95)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.72)"; }}
                  onClick={() => scrollTo("kotizacija")}
                >
                  — Termini i kotizacija
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
            style={{ borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
          >
            {facts.map((item, i) => (
              <div
                key={i}
                className={["py-7 px-6 md:px-8", i === 0 ? "pl-0" : "", i === 3 ? "md:pr-0" : ""].join(" ")}
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

      <CourseStickyBar
        locations={[{ city: "Split", dates: "31.10.2026." }]}
        price="Early Bird 300 € / 350 €"
        ctaText="Prijavi se"
        ctaHref="https://tally.so/r/wA5kvD"
        theme="light"
      />

      {/* ── Zašto propedeutika ───────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Zašto propedeutika
            </p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug">
              Terapeut zna izvesti tehniku. Rijetko ga netko nauči što joj prethodi.
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0.15} viewport={{ once: true }}>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-6">
              U strukovnom obrazovanju fizioterapeut i manualni terapeut uče primijeniti terapiju — ali ne
              i postaviti radnu dijagnozu. To se sustavno prepušta liječniku. Dok terapeut radi u timu,
              praznina je nevidljiva.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-10">
              Kad radi samostalno, postaje ključna: on vodi razgovor, procjenjuje tegobu i odlučuje kamo
              usmjeriti tretman. Propedeutika je vještina koja dolazi prije tehnike — prikupljanje podataka,
              fizikalni pregled i kliničko zaključivanje koje terapiju čine utemeljenom, a ne nagađanom.
            </p>

            <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-5" style={{ color: "#B89A4F" }}>
              Što počinješ primjećivati
            </p>
            <div>
              {primjecujes.map((item, i) => (
                <div key={i} className="py-4" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  <p className="text-[14px] leading-[1.6] font-normal" style={{ color: "#1F1D1A" }}>
                    {item}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Observation cards ─────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-[#e3e3e3]">
            {[
              { text: "Procjena nije formalnost prije tretmana. Ona određuje tretman." },
              { text: "Dobra anamneza skraćuje put do uzroka — i čuva od tretiranja krivog problema." },
              { text: "Radna dijagnoza nije etiketa. Ona je hipoteza koju svaki sljedeći postupak provjerava." },
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

      {/* ── Klinički snapshot (ilustrativni) ─────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Ilustrativni prikaz
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
                Pacijent dolazi s bolovima u donjem dijelu leđa, uvjeren da je „nešto s diskom".
                Bez procjene, tretman kreće na lumbalnu regiju.
              </p>
              <p className="text-sm text-[#1F1D1A] leading-relaxed font-medium">
                Ciljana anamneza otkriva da bol budi noćni nemir i prati je gubitak težine — obrazac
                koji ne pripada mehaničkoj boli.
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
                Umjesto tretmana, terapeut piše nalaz i upućuje na daljnju obradu.
              </p>
              <p className="text-sm text-[#1F1D1A] leading-relaxed font-medium">
                Procjena ovdje nije usporila terapiju. Spriječila je pogrešnu.
              </p>
            </motion.blockquote>
          </div>

          <p className="text-[12px] leading-[1.7] font-normal mt-10 italic" style={{ color: "rgba(0,0,0,0.42)" }}>
            Ilustrativni primjer za prikaz kliničkog razmišljanja.
          </p>
        </div>
      </section>

      {/* ── Metoda / pristup ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0e0e0e]" id="metoda">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">Metoda</p>
              <h2 className="font-playfair text-3xl text-white leading-snug">
                Procjena nije korak prije terapije. To je način razmišljanja.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0.15} viewport={{ once: true }}>
              <p className="text-sm text-white/55 leading-relaxed">
                Cijeli tečaj gradi jedan slijed — od prvog pitanja do zapisanog nalaza. Svaki korak
                provjerava prethodni i sužava mogućnosti dok ne ostane utemeljena radna dijagnoza.
              </p>
            </motion.div>
          </div>

          <div className="space-y-px bg-[#201e1a]">
            {principi.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.1}
                viewport={{ once: true }}
                className="bg-[#141311] grid md:grid-cols-[80px_1fr] gap-8 px-8 py-10 items-start"
              >
                <span className="font-playfair text-4xl text-[#9e8a46]/25 leading-none">{p.broj}</span>
                <div>
                  <h3 className="text-base font-medium text-[#ede9e3] mb-3">{p.naziv}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(237,233,227,0.55)" }}>{p.opis}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program dana ─────────────────────────────────────── */}
      <section className="py-24 px-6" id="program">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">Program dana</p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug max-w-lg mb-4">
              Jedan dan. Od prvog pitanja do nalaza.
            </h2>
            <p className="text-sm text-[#3b3b3b] leading-relaxed max-w-lg">
              Jednodnevni program, od 9 do 17 sati, kroz sedam koraka procjene — s vježbama i izravnim radom.
            </p>
          </motion.div>

          <div className="space-y-px bg-[#e3e3e3]">
            {program.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.05}
                viewport={{ once: true }}
                className="bg-[#F4F1EA] grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-8 px-8 py-6 items-baseline"
              >
                <span className="font-playfair text-2xl text-[#9e8a46]/30 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-[#3b3b3b] leading-relaxed">{t}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-[12px] leading-[1.7] font-normal mt-6 italic" style={{ color: "rgba(0,0,0,0.42)" }}>
            Redoslijed je okviran i prilagođava se dinamici grupe.
          </p>
        </div>
      </section>

      {/* ── Dokumentacija rada ───────────────────────────────── */}
      <section className="py-16 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {slike.map((img, i) => (
              <motion.figure key={i} variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.08} viewport={{ once: true }}>
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
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative overflow-hidden">
            <img
              width={933}
              height={1400}
              src="/lovable-uploads/propedeutika-stosic-model.webp"
              alt="Dr. Aleksandar Stošić objašnjava anatomski model tijekom edukacije"
              className="w-full object-cover aspect-[4/5]"
              loading="lazy"
              style={{ filter: "grayscale(8%)", objectPosition: "center" }}
            />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0.15} viewport={{ once: true }} className="md:pt-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">Voditelj tečaja</p>
            <div className="w-10 h-px bg-[#a58d4e]/30 mb-8" />
            <h2 className="font-playfair text-2xl text-[#1F1D1A] mb-3 leading-snug">Dr. Aleksandar Stošić</h2>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#3b3b3b]/60 mb-8 leading-[1.7]">
              Mr. sc., dr. med. · specijalist ortopedske kirurgije i ortopedske manualne terapije (KE-OMT) · sportski liječnik · osteopat (DO)
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              Više od 47 godina medicinskog iskustva — od čega 27 u Kliničkom bolničkom centru Rijeka i 14
              godina kao predstojnik Zavoda za dječju ortopediju Kantrida. Kliničar koji je procjenu,
              dijagnozu i terapijsku odluku donosio desetljećima.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-8">
              Istu logiku prenosi terapeutima kroz Školu manualne terapije i ovu edukaciju — ne kao teoriju,
              nego kao način razmišljanja koji se koristi svaki radni dan.
            </p>
            <Link
              to="/skola-manualne-terapije"
              className="text-[10px] uppercase tracking-[0.20em] font-normal"
              style={{ color: "#B89A4F" }}
            >
              Vodi i Školu manualne terapije →
            </Link>

            <blockquote className="border-l border-[#a58d4e]/30 pl-5 mt-10">
              <p className="text-sm text-[#3b3b3b]/70 leading-relaxed italic font-playfair">
                "Terapija bez procjene je pogađanje. Procjena je ono što od dodira čini medicinu."
              </p>
              <p className="text-xs text-[#3b3b3b]/45 mt-3 uppercase tracking-[0.18em]">
                Načelo edukacije
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── Kotizacija ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#141311]" id="kotizacija">
        <div className="max-w-5xl mx-auto">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#9e8a46] mb-5">Termini i kotizacija</p>
            <h2 className="font-playfair text-3xl text-[#ede9e3] leading-snug mb-6">
              Split, 31. listopada. Prvi put u Hrvatskoj.
            </h2>
            <p className="text-[13.5px] leading-[1.82]" style={{ color: "rgba(237,233,227,0.60)", maxWidth: "54ch" }}>
              Jednodnevna klinička edukacija u maloj grupi — procjena, radna dijagnoza i pisanje nalaza,
              s vježbama i izravnim radom.
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
                    300 €
                  </p>
                  <p className="text-[12px] font-normal" style={{ color: "#c9a832" }}>Early Bird</p>
                </div>
                <p className="text-[12px] font-normal" style={{ color: "rgba(237,233,227,0.30)", textDecoration: "line-through" }}>
                  Redovna cijena: 350 €
                </p>
              </div>
              <div className="flex gap-10 md:gap-12 md:pb-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-normal mb-1.5" style={{ color: "rgba(201,168,50,0.75)" }}>Early Bird</p>
                  <p className="text-[15px] font-normal whitespace-nowrap" style={{ color: "rgba(237,233,227,0.88)" }}>do 01.10.2026.</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-normal mb-1.5" style={{ color: "rgba(201,168,50,0.75)" }}>Grupa</p>
                  <p className="text-[15px] font-normal whitespace-nowrap" style={{ color: "rgba(237,233,227,0.88)" }}>Max. 20 polaznika</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Termini list */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0.12} viewport={{ once: true }} className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-2" style={{ color: "#9e8a46" }}>Termini</p>

            <div
              className="py-7 grid gap-5 md:gap-8 md:grid-cols-[1fr_auto] md:items-center"
              style={{ borderTop: "1px solid rgba(237,233,227,0.08)" }}
            >
              <div>
                <div className="flex items-baseline gap-3 mb-1.5">
                  <p className="font-playfair font-medium text-[1.15rem] leading-tight" style={{ color: "rgba(237,233,227,0.92)" }}>Split</p>
                  <p className="text-[13px] font-normal" style={{ color: "rgba(237,233,227,0.72)" }}>31.10.2026. · 9–17h</p>
                </div>
                <p className="text-[12px] font-normal leading-[1.6] mb-2" style={{ color: "rgba(237,233,227,0.42)" }}>
                  Centar za ortopedsku manualnu terapiju Majce &amp; Stojanović, Žnjanska 6, Split
                </p>
                <p className="text-[10px] uppercase tracking-[0.14em] font-medium" style={{ color: "#c9a832" }}>
                  Early Bird do 01.10.2026.
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

            <div
              className="py-7 grid gap-2 md:grid-cols-[1fr_auto] md:items-center"
              style={{ borderTop: "1px solid rgba(237,233,227,0.08)", borderBottom: "1px solid rgba(237,233,227,0.08)" }}
            >
              <div>
                <div className="flex items-baseline gap-3 mb-1.5">
                  <p className="font-playfair font-medium text-[1.15rem] leading-tight" style={{ color: "rgba(237,233,227,0.55)" }}>Ostali gradovi</p>
                  <p className="text-[13px] font-normal" style={{ color: "rgba(237,233,227,0.45)" }}>u najavi</p>
                </div>
                <p className="text-[12px] font-normal leading-[1.6]" style={{ color: "rgba(237,233,227,0.42)" }}>
                  Termine za druge gradove objavljujemo uskoro — javi interes putem prijave.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Rok prijave */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0.16} viewport={{ once: true }} className="mb-16">
            <p className="text-[12px] leading-[1.65] font-normal" style={{ color: "rgba(237,233,227,0.42)" }}>
              Early Bird cijena vrijedi do 01.10.2026. Prijave se u pravilu zatvaraju
              najkasnije 30 dana prije termina kako bismo na vrijeme organizirali održavanje tečaja.
            </p>
            <p className="text-[12px] leading-[1.65] font-normal mt-2" style={{ color: "rgba(237,233,227,0.42)" }}>
              Ako se javljaš nakon isteka tog roka, slobodno nas kontaktiraj na{" "}
              <a href="mailto:info@uciliste-suprastudium.hr" style={{ color: "#c9a832" }}>info@uciliste-suprastudium.hr</a>
              {" "}ili nazovi{" "}
              <a href="tel:+385958558953" style={{ color: "#c9a832" }}>095 855 89 53</a>.
              Ako postoji slobodno mjesto, provjerit ćemo mogućnost naknadne prijave.
            </p>
          </motion.div>

          {/* Uključeno */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
            className="pt-12"
            style={{ borderTop: "1px solid rgba(237,233,227,0.08)" }}
          >
            <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-6" style={{ color: "#9e8a46" }}>Uključeno u kotizaciju</p>
            <div className="grid sm:grid-cols-2 gap-x-10">
              {ukljuceno.map((item, i) => (
                <div key={i} className="py-4 flex gap-3" style={{ borderTop: "1px solid rgba(237,233,227,0.08)" }}>
                  <span className="flex-shrink-0 mt-[3px]" style={{ color: "rgba(201,168,50,0.55)", fontSize: "11px" }}>—</span>
                  <p className="text-[13.5px] leading-[1.55] font-normal" style={{ color: "rgba(237,233,227,0.68)" }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" id="faq">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">Česta pitanja</p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A]">Najčešća pitanja prije početka.</h2>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#e3e3e3]">
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

      <CourseRecommendations currentCourse="klinicka-propedeutika" />
      <CourseFooter />
    </div>
  );
}
