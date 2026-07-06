import { motion } from "framer-motion";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WhySupraCard } from "@/components/WhySupraCard";
import { reasons } from "@/data/whySupraStudiumData";

export const PremiumWhySupraStudium = () => {
  const [api, setApi] = useState<any>();

  return (
    <section className="py-12 md:py-32 bg-stone-50 relative overflow-hidden">
      {/* Gold hairline separator */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      
      {/* Original diagonal background pattern - unchanged */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #a58d4e 0px,
            #a58d4e 1px,
            transparent 1px,
            transparent 20px
          )`,
          opacity: 0.04
        }}
      />
      
      {/* Light overlay gradient for Apple-like feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Premium Header - desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-20"
          >
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-4 md:mb-6 tracking-tight">
              <span className="hidden md:inline">Više od edukacije –{" "}
              <span className="text-[#B48A1E] relative">
                pokret
                <div className="absolute -inset-1 bg-gradient-to-r from-[#B48A1E]/20 to-transparent blur-sm -z-10" />
              </span>
              {" "}koji stvara terapeute budućnosti</span>
              <span className="md:hidden">Zašto Supra Studium?</span>
            </h2>
            <p className="hidden md:block text-lg md:text-xl text-[#333] max-w-4xl mx-auto font-inter leading-relaxed">
              Ovdje ne stvaramo samo tečajeve – gradimo terapeutski pokret. Naš pristup spaja stručnost i dubinu, dodir i prisutnost, tehniku i transformaciju – iskustvo koje Supra Studium čini jedinstvenim u regiji. Supra Studium je prostor u kojem terapeuti postaju vođe – sigurni u svoje znanje, povezani sa sobom i spremni mijenjati živote.
            </p>
          </motion.div>

          {/* Desktop Grid - 2x3 cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <WhySupraCard 
                  title={reason.title}
                  description={reason.description}
                  image={reason.background}
                  icon={reason.icon}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Slider */}
          <div className="md:hidden -mx-6">
            <div 
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-6 scrollbar-hide"
              style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 first:ml-0"
                  style={{ width: '85%' }}
                >
                  <WhySupraCard 
                    title={reason.title}
                    description={reason.description}
                    image={reason.background}
                    icon={reason.icon}
                  />
                </div>
              ))}
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-1.5 mt-2">
              {reasons.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#a58d4e]/30" />
              ))}
            </div>
          </div>

          {/* SEO-friendly hidden fallback text */}
          <div className="sr-only">
            Supra Studium nudi certificirane tečajeve manualne terapije i masaže – 
            prijateljska atmosfera, iskusni predavači i praktičan rad.
          </div>

          {/* Preload ključne slike (za najbolji LCP) */}
          <link
            rel="preload"
            as="image"
            href={reasons[0]?.background}
            type="image/png"
          />

          {/* Removed Mobile Carousel */}
        </div>
      </div>
    </section>
  );
};
