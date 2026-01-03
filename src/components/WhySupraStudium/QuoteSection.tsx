import { motion } from "framer-motion";

export const QuoteSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-24 text-center"
    >
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-border/50">
        <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground italic leading-relaxed">
          "Naša misija je stvoriti terapeute koji ne samo da znaju tehnike, 
          već koji s empatijom i stručnošću mijenjaju živote svojih klijenata."
        </blockquote>
        <div className="mt-8 text-primary font-medium text-lg">
          — Tim Supra Studium
        </div>
      </div>
    </motion.div>
  );
};