import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, BookOpen, Users } from "lucide-react";

const modules = [
  {
    number: 1,
    title: "Rješavanje križobolje",
    duration: "40 sati",
    pdfUrl: "https://www.dropbox.com/scl/fi/hv3ggccj3bigoyxofngyf/raspored-1_stupanj.pdf?rlkey=8dhuv93b1aueor9438q4ngbve&st=8jkdb8g1&dl=1"
  },
  {
    number: 2,
    title: "Donji ud",
    duration: "40 sati",
    pdfUrl: "https://www.dropbox.com/scl/fi/s1peg49p41h6rj9iwywu1/raspored-2_stupanj.pdf?rlkey=ofw87spp5r6rr5umtada7vfax&st=c9vvlbxz&dl=1"
  },
  {
    number: 3,
    title: "Gornji ud",
    duration: "40 sati",
    pdfUrl: "https://www.dropbox.com/scl/fi/4akk4tra87tjilms69dxp/raspored-3_stupanj.pdf?rlkey=2wqrsm3iy5rc7lplkh3j7s6w5&st=98yii60m&dl=1"
  },
  {
    number: 4,
    title: "Cervikalna regija",
    duration: "40 sati",
    pdfUrl: "https://www.dropbox.com/scl/fi/bz93bt9daloo9mq0os52r/raspored-4_stupanj.pdf?rlkey=da0aa3adr8565p4picpncaugs&st=p02jdd4f&dl=1"
  },
  {
    number: "A",
    title: "Advanced tečaj",
    duration: "60 sati",
    pdfUrl: "https://www.dropbox.com/scl/fi/l8xz55gi1u927casmxz1g/raspored-5-stupanj.pdf?rlkey=vlhmcvvjx8a1d5ymqo5fhpe63&st=2mm38cft&dl=1"
  }
];

export const ManualnaTherapySection = () => {
  return (
    <section className="relative py-16 bg-stone-50 overflow-hidden">
      {/* Diagonal pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #a58d4e 0px,
            #a58d4e 1px,
            transparent 1px,
            transparent 20px
          )`
        }}
      />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Program <span className="text-primary font-medium">Manualne terapije</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Naša škola manualne terapije nudi četiri (+ jedan advanced) stupnjeva edukacije. 
              Svaki modul je pažljivo osmišljen da vas vodi kroz progresivno učenje, 
              od osnovnih principa do naprednih tehnika profesionalne prakse.
            </p>
          </motion.div>

          {/* Module Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    {/* Module Number */}
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {module.number}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                      {module.title}
                    </h3>
                    
                    {/* Duration */}
                    <Badge variant="secondary" className="mb-4 text-xs">
                      {module.duration}
                    </Badge>
                    
                    {/* PDF Link */}
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    >
                      <a 
                        href={module.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span className="text-xs">Raspored</span>
                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certification Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="border border-supra-golden/20 bg-gradient-to-br from-supra-golden/5 to-supra-golden/10 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-supra-golden/20 text-supra-golden flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      Certifikacija i priznanje
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nakon svakog tečaja dobit ćete diplomu o sudjelovanju. Po završetku svih pet stupnjeva 
                      i položenom ispitu (teorijskom i praktičnom), Učilište Supra Studium izdat će vam{" "}
                      <span className="font-semibold text-supra-golden">posebno uvjerenje o dodatnom obrazovanju</span>{" "}
                      i <span className="font-semibold text-supra-golden">certifikat licenciranog manualnog terapeuta</span>, 
                      koji se može <span className="font-semibold text-supra-golden">upisati u e-radnu knjižicu</span>{" "}
                      kao dodatno obrazovanje.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bonus Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      BONUS: Praktične radionice između modula
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Između svakog modula organiziramo dodatnu praktičnu radionicu — mentori i polaznici 
                      ponovno prolaze ključne tehnike kroz direktnu razmjenu znanja i iskustva.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
