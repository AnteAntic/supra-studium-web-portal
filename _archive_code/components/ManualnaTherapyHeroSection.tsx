import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Quote, Plus } from "lucide-react";

export const ManualnaTherapyHeroSection = () => {
  return <section className="relative min-h-[85vh] flex items-center overflow-hidden pb-24 bg-black">
      {/* Static Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-center bg-cover brightness-90" 
        style={{
          backgroundImage: `url('/lovable-uploads/40e9b7af-ebfb-422d-8620-264fbfb328f9.png')`
        }} 
      />
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Subtle Center Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white/6 via-transparent to-transparent" />
      
      {/* Golden Accent Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#B9975B]/15 via-transparent to-transparent opacity-40" />
      
      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
            {/* Centered Blur Box */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="relative w-full max-w-[540px] md:max-w-[600px]">
              {/* Blurred Glass Container */}
              <div className="h-auto backdrop-blur-md bg-white/40 rounded-2xl px-6 py-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20">
                {/* Badge */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} viewport={{
                once: true
              }} className="mb-6">
                  <Badge className="bg-[#B9975B] text-white px-4 py-2 text-sm font-bold uppercase tracking-wide">
                    Najpopularniji program
                  </Badge>
                </motion.div>

                {/* Title */}
                <motion.h1 initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.3
              }} viewport={{
                once: true
              }} className="text-3xl md:text-4xl font-serif font-bold text-white drop-shadow-md mb-3">
                  Manualna terapija.
                </motion.h1>

                {/* Subtitle */}
                <motion.h3 initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.4
              }} viewport={{
                once: true
              }} className="text-lg md:text-xl text-white/90 mb-6">
                  Kompletni program
                </motion.h3>

                {/* Levels */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.5
              }} viewport={{
                once: true
              }} className="flex flex-wrap items-center justify-center gap-3 mb-6">
                  {['I', 'II', 'III', 'IV', 'V'].map((level, index) => <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/60 text-[#C8A24A] backdrop-blur-sm flex items-center justify-center font-bold text-base hover:bg-white/70 transition-all duration-300 shadow-md">
                        {level}
                      </div>
                      {index < 4 && <Plus className="w-3 h-3 text-white/60" />}
                    </div>)}
                </motion.div>

                {/* Testimonial */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.6
              }} viewport={{
                once: true
              }} className="mb-6 mt-4">
                  <p className="text-white/80 italic text-sm leading-relaxed">
                    "Ovaj program mi je doslovno promijenio profesiju i dao sigurnost u radu s klijentima."
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    — Maja, terapeutkinja
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.7
              }} viewport={{
                once: true
              }} className="flex flex-col md:flex-row gap-3 mt-6">
                  <Button 
                    asChild
                    className="bg-[#C8A24A] hover:bg-[#B8943A] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                      Prijavite se odmah
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    className="bg-white hover:bg-[#C8A24A]/10 text-[#C8A24A] hover:text-[#B8943A] border border-[#C8A24A]/50 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <a href="#kontakt">
                      Besplatna konzultacija
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>;
};