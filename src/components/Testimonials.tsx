import { motion } from "framer-motion";
import { reveal } from "@/components/home/reveal";

const testimonials = [
  {
    name: "Kristijan P.",
    role: "fizioterapeut",
    text: "Topla srca i široke ruke dijelite svoja znanja i iskustva – hvala vam na tome. Topla preporuka za tečaj manualne terapije kod dr. Sandija!"
  },
  {
    name: "Todor F.",
    role: "fizioterapeut", 
    text: "Sve pohvale za edukacije kod Ante i dr. Stošića. Toplo preporučujem edukacije kod Ante."
  },
  {
    name: "Alena J.",
    role: "fizioterapeutkinja",
    text: "Kada sam odlučila raditi na profesionalnom razvoju, nisam požalila ni vremena ni novca. Izuzetno sam zahvalna što sam tečaj MT pohađala kod dr. Stošića i Ante. Ante svojom predanošću potiče želju za razvojem, a dr. Stošić teoriju pretvara u sigurnu praksu. HVALA VAM OD SRCA!!!"
  },
  {
    name: "Bruna P.",
    role: "fizioterapeutkinja",
    text: "Ante je izvanredan predavač koji nesebično dijeli znanje i iskustvo. Veliki dio edukacije je baziran na vježbama koje odmah mogu primijeniti u praksi. Predavač koji živi ono što nas uči."
  },
  {
    name: "Sandra D.",
    role: "terapeutkinja",
    text: "Učiti od Ante je pravi blagoslov, a tek prepustiti se u njegove ruke – sigurna luka. Moja topla preporuka za edukacije koje Ante drži i veselim se narednima 🥰."
  }
];

/**
 * Participant statements as flat editorial rows: no cards, no ratings,
 * no decoration. The words and the name carry it.
 */
export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28" style={{ background: '#FAF8F4' }}>
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-8 items-end mb-12 md:mb-16">
          <motion.div {...reveal()} className="md:col-span-7">
            <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.55)' }} />
            <h2 className="font-playfair font-semibold text-h2" style={{ color: '#1F1D1A' }}>
              Što kažu naši polaznici.
            </h2>
          </motion.div>
          <motion.div {...reveal(0.1)} className="md:col-span-4 md:col-start-9">
            <p className="text-body-l font-normal" style={{ color: '#4A463F' }}>
              Iskustva terapeuta koji su već prošli naš put – iskrene riječi koje najbolje govore o kvaliteti edukacije.
            </p>
          </motion.div>
        </div>

        <div style={{ borderTop: '1px solid rgba(31,29,26,0.16)' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              {...reveal(index * 0.05)}
              className="grid md:grid-cols-12 gap-y-5 md:gap-x-8 py-9 md:py-11"
              style={{ borderBottom: '1px solid rgba(31,29,26,0.12)' }}
            >
              <blockquote
                className={`font-playfair md:col-span-8 ${index === 0 ? 'text-quote' : 'text-h3'}`}
                style={{ color: '#1F1D1A', lineHeight: 1.45 }}
              >
                "{testimonial.text}"
              </blockquote>
              <div className="md:col-span-3 md:col-start-10 md:pt-2">
                <div className="text-body font-medium" style={{ color: '#1F1D1A' }}>
                  {testimonial.name}
                </div>
                <div className="text-label uppercase tracking-[0.2em] mt-2" style={{ color: '#5F5A52' }}>
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
