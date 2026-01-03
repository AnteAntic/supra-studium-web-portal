import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
export const ContactFooter = () => {
  return <footer id="kontakt" className="relative py-20 bg-[#0E0E0E] text-white overflow-hidden">
      {/* Diagonal pattern background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
      backgroundImage: `repeating-linear-gradient(
          45deg,
          #D4AF37 0px,
          #D4AF37 1px,
          transparent 1px,
          transparent 20px
        )`
    }} />
      
      {/* Gold shimmer line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Floating particles */}
      <motion.div className="absolute top-20 left-1/4 w-3 h-3 rounded-full bg-primary/10 blur-sm" animate={{
      x: [0, 50, -30, 0],
      y: [0, -40, 30, 0]
    }} transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut"
    }} aria-hidden="true" />
      <motion.div className="absolute top-32 right-1/3 w-4 h-4 rounded-full bg-primary/15 blur-sm" animate={{
      x: [0, -45, 35, 0],
      y: [0, 35, -25, 0]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 4
    }} aria-hidden="true" />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kontaktirajte <span className="text-primary">nas</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Imate pitanje o našim tečajevima? Želite se prijaviti ili niste sigurni koji je program pravi za vas?<br />
              Naš tim vam stoji na raspolaganju – javite nam se, rado ćemo vam pomoći i dati sve informacije koje trebate.
            </p>
          </motion.div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left: Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">📞 Telefon (WhatsApp & Viber)</h4>
                    <p className="text-white/80">+385 95 85 58 953</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">📧 Email</h4>
                    <p className="text-white/80">
                      info@uciliste-suprastudium.hr<br />
                      ante.a@web.de
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <p className="text-primary font-semibold text-lg leading-relaxed">
                  👉 Vaše putovanje terapeuta počinje jednim klikom – pošaljite nam poruku ili nas nazovite.
                </p>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }}>
              <Card className="bg-white/5 border-primary/30 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Pošaljite nam poruku
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/90 mb-2 font-medium">Ime</label>
                        <input type="text" className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-primary focus:bg-white/15 focus:ring-2 focus:ring-[#B48A1E] transition-all duration-300 hover:bg-white/15 hover:scale-[1.01]" placeholder="Vaše ime" />
                      </div>
                      <div>
                        <label className="block text-white/90 mb-2 font-medium">Prezime</label>
                        <input type="text" className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-primary focus:bg-white/15 focus:ring-2 focus:ring-[#B48A1E] transition-all duration-300 hover:bg-white/15 hover:scale-[1.01]" placeholder="Vaše prezime" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/90 mb-2 font-medium">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-primary focus:bg-white/15 focus:ring-2 focus:ring-[#B48A1E] transition-all duration-300 hover:bg-white/15 hover:scale-[1.01]" placeholder="vas.email@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 mb-2 font-medium">Poruka</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-primary focus:bg-white/15 focus:ring-2 focus:ring-[#B48A1E] transition-all duration-300 hover:bg-white/15 hover:scale-[1.01] resize-none" placeholder="Opišite kako vam možemo pomoći..." />
                    </div>
                    
                    <a 
                      href="https://5694f0fd.sibforms.com/serve/MUIFAOs4ZuXxMKp4E6OJZAlkghxH86yc0VpKZMzvj1AlsrKhc4cLBDBY9WaBoeIuOHyXf2NJenq0rxXMRZDSJpyVQsjUZ97m3lmDobO_SD_6O9qDUZtBJinN9O0QZ0fBTdJk0ooP8bihntndqxZM31gih2HMWqvB0698-PPpdvSrFbmCzrY5XPEWHVgv5AKym43COwDYevehRvGW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-[#B48A1E] inline-block text-center"
                    >
                      Prijavite se
                    </a>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Newsletter Block */}
          <motion.div initial={{
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
        }} className="mb-16">
            <Card className="bg-white/5 border-white/20 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h4 className="text-white font-semibold text-lg mb-1">💌 Želite biti prvi obaviješteni o novim edukacijama?</h4>
                  </div>
                  <a href="https://5694f0fd.sibforms.com/serve/MUIFAOs4ZuXxMKp4E6OJZAlkghxH86yc0VpKZMzvj1AlsrKhc4cLBDBY9WaBoeIuOHyXf2NJenq0rxXMRZDSJpyVQsjUZ97m3lmDobO_SD_6O9qDUZtBJinN9O0QZ0fBTdJk0ooP8bihntndqxZM31gih2HMWqvB0698-PPpdvSrFbmCzrY5XPEWHVgv5AKym43COwDYevehRvGW" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-[#B48A1E] whitespace-nowrap">
                    Prijavite se na newsletter
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer Zone */}
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
        }} className="border-t border-white/10 pt-8">
            {/* Social Icons Row */}
            <div className="flex justify-center mb-6">
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 shimmer-gold focus:outline-none focus:ring-2 focus:ring-[#B48A1E]" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 shimmer-gold focus:outline-none focus:ring-2 focus:ring-[#B48A1E]" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 shimmer-gold focus:outline-none focus:ring-2 focus:ring-[#B48A1E]" aria-label="YouTube">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 shimmer-gold focus:outline-none focus:ring-2 focus:ring-[#B48A1E]" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Copyright Row */}
            <div className="text-center text-white/60 space-y-2">
              <p className="font-medium">© 2026 Supra Studium. Sva prava pridržana. | Učilište za manualne terapije i masaže</p>
              <p>
                <a href="https://feel-heal-festival-6k1hkp5.gamma.site/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
                  Feel & Heal Festival
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>;
};