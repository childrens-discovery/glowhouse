const features = [
  { emoji: "📱", title: "All 10 Challenges Built In", desc: "Full narrative scenarios with scoring, time limits, leaderboards and peer comparison. Students can replay independently." },
  { emoji: "🏅", title: "8 Achievement Badges", desc: "Solar Master · Battery Guardian · EV Champion · Zero Grid Master · Eco Warrior · Smart Scheduler · Carbon Champion · Ultimate Energy Master." },
  { emoji: "📋", title: "Facilitator Dashboard", desc: "Class overview, per-student scores, session completion data and one-click CSV export for assessment evidence and reporting." },
  { emoji: "📡", title: "Smart Meter Integration", desc: "Connect via QR code to compare the model house data with a real household's live energy data." },
];

const resources = [
  { title: "Facilitator Guides", desc: "Three age-banded guides (7–9, 10–12, 13–14) with session plans, differentiation notes and extension activities." },
  { title: "Student Worksheets", desc: "Printable challenge data sheets for each of the 10 sessions, structured for recording live HEMS data, predictions and reflections." },
  { title: "Discussion Cards", desc: "Illustrated prompt cards designed to provoke evidence-based group discussion after each challenge." },
  { title: "Assessment Rubrics", desc: "Formative and summative rubrics aligned to Australian Curriculum v9.0 achievement standards." },
  { title: "Professional Learning", desc: "Optional half-day PL session covering facilitation, curriculum integration and differentiation strategies." },
];

const DigitalPlatform = () => {
  return (
    <section className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Digital Platform */}
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-blue md:text-4xl">
            Digital Platform
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
          <p className="font-body mx-auto mt-6 max-w-[640px] text-[17px] leading-relaxed text-navy/80">
            A fully featured web-based companion accessible on any tablet or laptop — no download or
            account required. A digital twin of the physical kit, extending learning in every direction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-card-lg bg-cream p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl leading-none shrink-0">{f.emoji}</span>
              <div>
                <h3 className="font-display text-lg text-blue">{f.title}</h3>
                <p className="font-body mt-1.5 text-sm leading-relaxed text-navy/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Educator Resources */}
        <div className="mt-20 text-center">
          <h2 className="font-display text-3xl uppercase text-blue md:text-4xl">
            Educator Resources
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
          <p className="font-body mx-auto mt-6 max-w-[560px] text-[17px] leading-relaxed text-navy/80">
            Everything included with every kit — ready to use from day one.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-card-lg bg-cream overflow-hidden shadow-sm">
          {resources.map((r, i) => (
            <div key={i} className="px-6 py-5">
              <h4 className="font-display text-base text-blue">{r.title}</h4>
              <p className="font-body mt-1 text-sm leading-relaxed text-navy/70">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalPlatform;
