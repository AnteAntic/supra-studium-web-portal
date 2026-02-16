import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLink, Clock, BookOpen, MapPin, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Škola manualne terapije dr. Stošića",
    subtitle: "Kompletna edukacija u 5 stupnjeva",
    hook: "Od prvog dodira do majstorstva – sve u jednom programu",
    description: "Naučite profesionalne tehnike manualne terapije kroz progresivni program od osnovnog do naprednog (advanced) stupnja.",
    duration: "98 sati",
    modules: "5 modula",
    price: "450 € po modulu",
    location: "Zagreb, Rijeka, Split, Šibenik, Sarajevo",
    image: "/lovable-uploads/e891ab8a-6399-4ced-acc5-49a45366f6c7.png",
    tags: ["Najpopularniji"],
    hasVideo: false,
    linkUrl: "/skola-manualne-terapije"
  },
  {
    id: 2,
    title: "Crossfriction & Funkcionalna masaža",
    subtitle: "Holistički Body Reset – precizna dijagnostika i učinkovita terapija",
    hook: "Program temeljen na iskustvu s više od 15 000 pacijenata.",
    description: "Ovo nije tečaj masaże. Naučite spojiti mišiće, fascije, zglobove i živce u jedan Body Reset tretman koji rješava do 80% križobolja.",
    duration: "42 sati",
    modules: "3 modula",
    price: "390 € - 460 €",
    location: "Zagreb, Rijeka, Split, Slavonski Brod",
    image: "/lovable-uploads/8b10c9bb-bdfa-43b1-8935-6f90acab28dd.png",
    videoUrl: "https://www.dropbox.com/scl/fi/5ndxdc8wci2mxx48188jj/0617-2.mp4?rlkey=70ea51q8i76wu71m0a1hfvr3y&dl=1",
    tags: ["Funkcionalno"],
    hasVideo: true,
    linkUrl: "/crossfriction-funkcionalna-masaza"
  },
  {
    id: 3,
    title: "Akupresura & Trigger Point terapija",
    subtitle: "Precizna terapija za dublje djelovanje",
    hook: "Spoj istoka i zapada u medicini",
    description: "Kombinirajte drevnu akupresuru s modernom trigger point terapijom za učinkovito otklanjanje kronične napetosti i bolova.",
    duration: "23 sati",
    modules: "1 modul",
    price: "390 € (early bird); 460 € (redovna cijena)",
    location: "Zagreb, Split, Rijeka",
    image: "/lovable-uploads/7d2c0caa-2c4e-44fb-86cc-2600c9f8dc21.png",
    videoUrl: "https://www.dropbox.com/scl/fi/mrnvyd0ovf8zf6zbekkp2/0617.mp4?rlkey=b1in9ussss0cmekxrqsmhjoxb&dl=1",
    tags: ["Specijalizacija"],
    hasVideo: true,
    linkUrl: "/akupresura-trigger-point"
  },
  {
    id: 4,
    title: "Lomi Lomi masaža",
    subtitle: "Havajska tradicionalna masaža",
    hook: "Dodir koji vraća tijelo i duh u sklad",
    description: "Naučite autentične tehnike havajske Lomi Lomi masaže koje kombiniraju duhovnost s fizičkim iscjeljenjem.",
    duration: "34 sati",
    modules: "2 modula",
    price: "450 €",
    location: "Zagreb",
    image: "/lovable-uploads/dd0eafe8-9fe5-4975-a005-0d316567148c.png",
    tags: ["Egzotično"],
    hasVideo: false,
    linkUrl: "/lomi-lomi"
  },
  {
    id: 5,
    title: "Cupping i TKM",
    subtitle: "Vakuum terapija uz principe tradicionalne kineske medicine",
    hook: "Oslobodite tijelo – osnažite protok energije",
    description: "Ovo nije klasičan cupping – naučite dijagnosticirati i tretirati tijelo kroz TKM pristup koji spaja energiju, organe i pokret.",
    duration: "9 sati",
    modules: "1 modul",
    price: "300 € (early bird); 360 € (redovna cijena)",
    location: "Zagreb, Split, Rijeka, Slavonski Brod",
    image: "/lovable-uploads/8b10c9bb-bdfa-43b1-8935-6f90acab28dd.png",
    videoUrl: "https://www.dropbox.com/scl/fi/d9rztstgezq7tpt4bupgy/0617-1.mp4?rlkey=exygxifb5tenybxpjvx8mv0u8&dl=1",
    tags: ["Mehanička"],
    hasVideo: true,
    linkUrl: "/cupping-terapija"
  },
  {
    id: 6,
    title: "Kalabaš masaža",
    subtitle: "Afrička tehnika koja oslobađa napetosti",
    hook: "Egzotičan ritam koji topi bol i vraća ravnotežu",
    description: "Prvi put u regiji! Učite od dr. Awudija Atitsogbuija, 3× svjetskog rekordera u masaži, i otkrijte afričku kalabaš masažu koja oslobađa kronične napetosti bez napora terapeuta.",
    duration: "34 sati",
    modules: "2 modula",
    price: "450€ (early bird); 500 € (redovna cijena)",
    location: "Zagreb",
    image: "/lovable-uploads/7f2defdd-3463-4823-b2e3-0e9b0a0e616d.png",
    tags: ["Novo"],
    hasVideo: false,
    linkUrl: "/calabash-certifikacija"
  }
];

export const Courses = () => {
  const navigate = useNavigate();
  
  return (
    <TooltipProvider>
      <section id="ekskluzivne-edukacije" className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Gold hairline separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        
        {/* Diagonal pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
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
        
        {/* Gold hairline separator bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        
        <div className="container relative mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-neutral-900 mb-6">
                Ekskluzivne edukacije, znanje koje nećete pronaći nigdje drugdje.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Od prvih koraka do napredne specijalizacije – naši programi vode vas kroz putovanje znanja, prakse i transformacije.
              </p>
            </motion.div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group w-full max-w-[90%] mx-auto md:max-w-none"
                >
                  <Card className="h-full overflow-hidden group transition-all duration-300 backdrop-blur-sm bg-white/70 border border-primary/20 hover:border-primary/60 rounded-2xl md:rounded-[18px] shadow-md md:shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] hover:bg-white/80">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {course.hasVideo ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            aria-hidden="true"
                          >
                            <source src={course.videoUrl} type="video/mp4" />
                            <img 
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover"
                            />
                          </video>
                        ) : (
                          <img 
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute top-4 left-4">
                          {course.tags.map((tag, i) => (
                            <Badge key={i} className="bg-primary/90 text-white font-semibold text-sm px-3 py-1 backdrop-blur-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="p-4 md:p-6">
                        <h3 className="text-center md:text-center font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 5vw, 28px)' }}>
                          {course.title}
                        </h3>
                        <p className="text-center md:text-center text-sm md:text-sm text-primary font-semibold mb-2">
                          {course.subtitle}
                        </p>
                        <p className="text-center md:text-center text-xs md:text-xs text-primary/80 font-medium mb-4 italic">
                          {course.hook}
                        </p>
                        <p className="text-center md:text-center text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                          {course.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          <div className="flex items-center gap-3 text-sm">
                            <Clock className="w-4 h-4 text-primary flex-shrink-0" aria-label="Trajanje" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <BookOpen className="w-4 h-4 text-primary flex-shrink-0" aria-label="Moduli" />
                            <span>{course.modules}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" aria-label="Cijena" />
                            <span>{course.price}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <MapPin className="w-4 h-4 text-primary flex-shrink-0" aria-label="Lokacija" />
                            <span>{course.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2 md:justify-center">
                          <Button 
                            variant="outline" 
                            className="w-full md:w-auto border-primary/30 hover:bg-primary hover:text-white py-3 px-6 text-sm font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            onClick={() => navigate(course.linkUrl || '/')}
                          >
                            Saznaj više
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};
