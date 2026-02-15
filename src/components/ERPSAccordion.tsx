import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const erpsItems = [
  {
    value: "what-is-erps",
    title: "Što je ERPS i zašto je važno?",
    content:
      "ERPS (Elektronički Radno-Pravni Sustav) je službeni sustav Republike Hrvatske za evidentiranje obrazovanja i radnog iskustva. Naše potvrde se upisuju u e-Radnu knjižicu, čime vaše kompetencije postaju službeno priznate kod poslodavaca i institucija.",
  },
  {
    value: "how-to-register",
    title: "Kako se upisuje u e-Radnu knjižicu?",
    content:
      "Po završetku edukacije dobivate potvrdu s urudžbenim brojem, klasom, OIB-om, potpisom i pečatom ustanove. Ta potvrda zadovoljava sve formalne uvjete za upis u ERPS pod kategorijom 'dodatno obrazovanje'.",
  },
  {
    value: "who-is-relevant",
    title: "Kome je to relevantno?",
    content:
      "Svima koji žele službeno dokumentirati svoje dodatne kompetencije – fizioterapeutima, masažnim terapeutima, wellness stručnjacima i svima koji rade u području manualnih terapija. Upis povećava vaš profesionalni kredibilitet i otvara vrata novim mogućnostima.",
  },
];

export default function ERPSAccordion() {
  return (
    <section className="py-10 px-5 bg-[#f4f0f0]">
      <h3 className="text-2xl font-playfair font-semibold text-[#221c1b] mb-6 text-center">
        e-Radna knjižica (ERPS)
      </h3>
      <div className="max-w-lg mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {erpsItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border border-[#a58d4e]/20 rounded-xl bg-white/80 backdrop-blur-sm px-4 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-[#221c1b] font-semibold text-base py-4 hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#221c1b]/70 text-sm leading-relaxed pb-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
