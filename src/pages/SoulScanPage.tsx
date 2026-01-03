import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Brain, Eye, Users, MessageCircle, MapPin, Calendar, Clock, HelpCircle, ChevronDown, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroTitle from '@/components/ui/HeroTitle';
import TextShimmer from '@/components/ui/TextShimmer';
import SectionTitle from '@/components/ui/SectionTitle';
import { ContactFooter } from '@/components/ContactFooter';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function SoulScanPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const benefits = [
    { icon: Eye, text: "Idi dublje od simptoma. Pronađi psihosomatski uzrok." },
    { icon: Heart, text: "Radi holistički. Tijelo, psiha, energija i karmičko polje." },
    { icon: Users, text: "Stvori povjerenje. Klijent se osjeća viđenim." },
    { icon: Star, text: "Izdvoji svoju praksu. Ponudi jedinstven pristup." }
  ];

  const processSteps = [
    { number: "01", title: "Sidrenje u srce i zemlju" },
    { number: "02", title: "Ulazak u svetu tišinu" },
    { number: "03", title: "Primanje slike ili riječi iz polja duše" },
    { number: "04", title: "Prevođenje u jednu rečenicu, iz uvjerenja u istinu" },
    { number: "05", title: "Tijelo potvrđuje istinu. Olakšanje, izdah, suza" }
  ];

  const learningPoints = [
    "Sidrenje srca i otvaranje intuicije",
    "Skeniranje psihosomatskih obrazaca",
    "Primanje slika i prevođenje u iscjeljujuće rečenice",
    "Integracija u masažu i manualnu terapiju",
    "Zatvaranje tretmana i integracija promjene"
  ];

  const targetAudience = [
    { icon: Users, title: "Maseri" },
    { icon: Heart, title: "Bodyworkeri" },
    { icon: Brain, title: "Manualni terapeuti" },
    { icon: Eye, title: "Energetski praktičari" }
  ];

  const testimonials = [
    "U jednoj rečenici čula sam istinu svoje duše. Iskustvo mi je promijenilo život.",
    "[Placeholder za drugi testimonial]",
    "[Placeholder za treći testimonial]"
  ];

  const faqData = [
    {
      question: "Trebam li imati prethodsko iskustvo s energetskim radom?",
      answer: "Ne. SoulScan metoda je dizajnirana za manualne terapeute svih razina iskustva. Važno je samo da imate osnovno iskustvo rada s tijelom."
    },
    {
      question: "Koliko dugo traje trening?",
      answer: "Trening traje 2 dana intenzivnog rada u maloj grupi. Ovo omogućava duboko učenje i osobnu praksu sa svakim polaznikem."
    },
    {
      question: "Dobit ću li certifikat nakon završetka?",
      answer: "Da, svi polaznici koji uspješno završe trening dobivaju certifikat SoulScan praktičara koji potvrđuje stečene vještine."
    }
  ];

  const locations = [
    { city: "Zagreb", dates: "15-16 Veljače 2025" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <CourseStickyBar 
        locations={locations}
        price="1.250€"
        ctaText="Prijavi se odmah"
        ctaHref="#registration"
        fallbackText="SoulScan Trening"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Placeholder - Request for image */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-center text-muted-foreground">
              <div className="text-2xl mb-4">🖼️ HERO BACKGROUND PLACEHOLDER</div>
              <div className="max-w-md mx-auto text-sm">
                <strong>Potrebna slika za hero sekciju:</strong><br/>
                - Format: 16:9 ili 21:9<br/>
                - Veličina: min 1920x1080px<br/>
                - Mood opcije:<br/>
                &nbsp;&nbsp;1) Spiritualan portret u toplom svjetlu<br/>
                &nbsp;&nbsp;2) Apstraktna svjetlosna ilustracija s bokeh efektom<br/>
                - Format: WebP ili AVIF za performanse
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              The Missing Link in Bodywork
            </p>
            
            <HeroTitle className="mb-6">
              <TextShimmer 
                className="text-foreground [--base-gradient-color:#D4AF37] [--base-color:hsl(var(--foreground))]" 
                duration={2.5} 
                spread={3}
              >
                SoulScan – Umjetnost intuitivnog čitanja duše
              </TextShimmer>
            </HeroTitle>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Uči slušati izvan mišića i fascija, u psihosomatsko, bioenergetsko i karmičko polje. Transformiraj svoj terapijski rad zauvijek.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8"
                onClick={() => scrollToSection('registration')}
              >
                Prijavi se odmah
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('program')}
              >
                Pogledaj program
              </Button>
            </motion.div>
            
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ograničen broj mjesta. Rad u maloj grupi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is SoulScan */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <SectionTitle>Što je SoulScan?</SectionTitle>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              SoulScan povezuje manualni rad s psihosomatikom, bioenergijom i karmičkim obrascima. 
              Ne popravlja, već sluša i zrcali istinu koju tijelo i duša nose. 
              Metoda nastala iz 16+ godina rada s tijelom i intuicijom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why SoulScan */}
      <section id="benefits" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <SectionTitle>Zašto SoulScan?</SectionTitle>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-amber-600" strokeWidth={1.5} />
                      </div>
                      <p className="text-foreground leading-relaxed">{benefit.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How SoulScan Works */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <SectionTitle>Kako SoulScan funkcionira?</SectionTitle>
          </motion.div>
          
          <div className="mt-12 space-y-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 flex items-center justify-center text-white font-semibold">
                  {step.number}
                </div>
                <p className="text-lg text-foreground">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="program" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <SectionTitle>Što ćeš naučiti na treningu?</SectionTitle>
          </motion.div>
          
          <motion.div 
            className="mt-12 space-y-4"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {learningPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg bg-background/50"
                variants={fadeInUp}
              >
                <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <p className="text-foreground">{point}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200"
            {...fadeInUp}
          >
            <p className="text-sm text-amber-800">
              <strong>Trajanje treninga:</strong> 2 dana intenzivnog rada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <SectionTitle>Za koga je SoulScan?</SectionTitle>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {targetAudience.map((audience, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <audience.icon className="h-8 w-8 text-amber-600 mx-auto mb-4" strokeWidth={1} />
                    <h3 className="font-medium text-foreground">{audience.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Instructor */}
      <section id="instructor" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <SectionTitle>O predavaču</SectionTitle>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            {...fadeInUp}
          >
            {/* Instructor Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border-4 border-amber-300 flex items-center justify-center">
              <div className="text-amber-600 text-xs text-center">
                Portret<br/>Ante Antić
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <strong className="text-foreground">Ante Antić.</strong> Manualni terapeut s 16+ godina kliničkog iskustva. 
              Osnivač Akademije Supra Studium. Kreator metode SoulScan koja spaja manualni rad s 
              psihosomatskim, energetskim i karmičkim uvidom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <SectionTitle>Iskustva polaznika</SectionTitle>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            {...fadeInUp}
          >
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <p className="text-xl text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial]}"
                </p>
                
                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === activeTestimonial ? 'bg-amber-600' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Practical Information */}
      <section id="info" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <SectionTitle>Praktične informacije</SectionTitle>
          </motion.div>
          
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <motion.div {...fadeInUp}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span className="text-foreground"><strong>Trajanje:</strong> 2 dana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="text-foreground"><strong>Lokacija:</strong> Zagreb, dvorana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  <span className="text-foreground"><strong>Datum:</strong> 15-16 Veljače 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-amber-600" />
                  <span className="text-foreground"><strong>Mjesta:</strong> ograničeno</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Prijava na trening</h3>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white"
                    onClick={() => scrollToSection('registration')}
                  >
                    Prijavi se odmah
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Zatraži više informacija
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <SectionTitle>Često postavljena pitanja</SectionTitle>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            {...fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section id="registration" className="py-20 px-6 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tvoja praksa može ići dublje
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Klijenti nisu samo tijela. Oni su duše koje žele biti viđene. Sa SoulScan metodom nećeš samo 
              tretirati bol. Svjedočit ćeš cjelovitosti.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-12"
            >
              Prijavi se odmah
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}