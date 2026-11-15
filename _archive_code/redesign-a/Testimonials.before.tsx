import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />
      
      {/* Gold Bokeh Particles (Apple-like) */}
      <motion.div
        className="absolute top-20 left-10 w-6 h-6 rounded-full blur-sm"
        style={{ backgroundColor: '#D4AF37', opacity: 0.1 }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/3 right-20 w-4 h-4 rounded-full blur-sm"
        style={{ backgroundColor: '#D4AF37', opacity: 0.12 }}
        animate={{
          x: [0, -35, 30, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-5 h-5 rounded-full blur-sm"
        style={{ backgroundColor: '#D4AF37', opacity: 0.08 }}
        animate={{
          x: [0, 25, -10, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full blur-sm"
        style={{ backgroundColor: '#D4AF37', opacity: 0.09 }}
        animate={{
          x: [0, -20, 35, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
        aria-hidden="true"
      />
      
      {/* Gold Hairline Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-neutral-900 mb-6">
                Što kažu naši polaznici.
              </h2>
              {/* Gold shimmer underline */}
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{ width: '60%' }}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Shimmer animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent"
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: 1,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                />
              </motion.div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Iskustva terapeuta koji su već prošli naš put – iskrene riječi koje najbolje govore o kvaliteti edukacije.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group max-w-[600px] mx-auto w-full"
              >
                <Card className="h-full bg-white border border-neutral-200/50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    {/* 5 Gold Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-[#C8A24A] fill-[#C8A24A]"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-neutral-800 mb-6 leading-relaxed text-base md:text-lg font-normal italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="mt-4">
                      <div className="text-sm font-semibold text-neutral-900">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-neutral-500 capitalize mt-1">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
      
      {/* Full-Width Premium Transition Reflection */}
      <div 
        className="transition-reflection relative w-full overflow-hidden"
        style={{ 
          width: '100vw',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '120px'
        }}
        role="presentation"
        aria-hidden="true"
      >
        {/* Gold Shimmer Line */}
        <div 
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/55 to-transparent blur-sm"
          style={{ 
            opacity: 0.4,
            filter: 'blur(2px)'
          }}
        />
        
        {/* Reflection Gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-background/12 to-transparent"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 25%, rgba(14,14,14,0) 70%)',
            mixBlendMode: 'screen',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 30%, #000 70%, rgba(0,0,0,0) 100%)',
            pointerEvents: 'none'
          }}
        />
        
        {/* Gold Bokeh Particles */}
        <motion.div
          className="absolute w-4 h-4 rounded-full blur-sm"
          style={{ 
            backgroundColor: '#D4AF37', 
            opacity: 0.1,
            top: '20%',
            left: '15%'
          }}
          animate={{
            x: [0, 30, -15, 0],
            y: [0, -20, 25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-6 h-6 rounded-full blur-sm"
          style={{ 
            backgroundColor: '#D4AF37', 
            opacity: 0.08,
            top: '60%',
            right: '20%'
          }}
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 15, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full blur-sm"
          style={{ 
            backgroundColor: '#D4AF37', 
            opacity: 0.12,
            top: '40%',
            left: '70%'
          }}
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        <motion.div
          className="absolute w-5 h-5 rounded-full blur-sm hidden md:block"
          style={{ 
            backgroundColor: '#D4AF37', 
            opacity: 0.09,
            top: '80%',
            left: '40%'
          }}
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 20, -15, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />
      </div>
    </section>
  );
};
