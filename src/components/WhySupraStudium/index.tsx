
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reasons } from "@/data/whySupraStudiumData";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { ReasonCard } from "./ReasonCard";
import { QuoteSection } from "./QuoteSection";

export const WhySupraStudium = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useAutoScroll(api);

  return (
    <section className="py-32 bg-stone-50 relative overflow-hidden">
      {/* Diagonal Background Pattern */}
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
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-tight">
              Zašto odabrati{" "}
              <span className="text-primary font-medium">Supra Studium</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Otkrijte što nas čini posebnima u svijetu terapeutske edukacije
            </p>
          </motion.div>

          {/* Reasons Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reasons.map((reason, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <ReasonCard {...reason} index={index} current={current} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom Navigation */}
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
            </Carousel>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </motion.div>

          <QuoteSection />
        </div>
      </div>
    </section>
  );
};
