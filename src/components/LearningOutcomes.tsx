import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const outcomes = [
  {
    title: "Energy Literacy",
    desc: "Students build a working mental model of how a modern home generates, stores, uses and exports electricity — solar, battery, EV, hot water, cooling and lighting as one integrated system.",
    icon: "⚡",
  },
  {
    title: "Cause-and-Effect Reasoning",
    desc: "Every physical action produces a live number change on the HEMS display. Cover the solar panel — output drops. Turn on the AC — grid draw spikes. This feedback loop builds scientific thinking habits automatically.",
    icon: "🔗",
  },
  {
    title: "Systems Thinking",
    desc: "Home energy interacts with weather, time of day, household behaviour and the wider electricity grid. Students manage a dynamic, interconnected system where every part affects the whole.",
    icon: "🌐",
  },
  {
    title: "Economic & Environmental Reasoning",
    desc: "Challenges directly connect energy decisions to cost and carbon outcomes. Students experience the relationship between smart choices, lower bills and reduced emissions first-hand.",
    icon: "💰",
  },
  {
    title: "Data Interpretation & Strategic Planning",
    desc: "Reading live kW data, forming hypotheses, testing strategies and revising plans. These are core STEAM skills embedded in every challenge, motivated by genuine consequences.",
    icon: "📊",
  },
];

const LearningOutcomes = () => {
  return (
    <section className="bg-cream px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-blue md:text-4xl">
            Learning Outcomes
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
          <p className="font-body mx-auto mt-6 max-w-[620px] text-[17px] leading-relaxed text-navy/80">
            Every challenge produces a measurable, observable result on the HEMS display — grounding
            abstract concepts in direct experience and immediate feedback.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {outcomes.map((o, i) => (
            <AccordionItem
              key={i}
              value={`outcome-${i}`}
              className="overflow-hidden rounded-card border-none bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline">
                <span className="flex items-center gap-3 text-left">
                  <span className="text-2xl">{o.icon}</span>
                  <span className="font-display text-lg text-blue">{o.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <p className="font-body text-[15px] leading-relaxed text-navy/80 pl-10">
                  {o.desc}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default LearningOutcomes;
