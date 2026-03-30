const stats = [
  { number: "25+", label: "Years Delivering" },
  { number: "500+", label: "Delivery Sites" },
  { number: "50K+", label: "Children Per Year" },
];

const philosophy = [
  { title: "Hands beat textbooks", desc: "Children retain information when they discover it through direct experience. Every concept is encountered through physical action, not instruction." },
  { title: "Frustration is a feature", desc: "Real learning happens when things don't work first time. Challenges are designed to be genuinely hard and produce the satisfaction that only comes from solving real problems." },
  { title: "Play is serious business", desc: "Twenty-five years of evidence shows that playful, facilitated learning produces deeper conceptual understanding and longer retention than direct instruction alone." },
  { title: "Facilitators are the difference", desc: "Program quality comes from our people. Children's Discovery facilitators are trained professionals who know how to create the conditions for genuine discovery." },
];

const AboutCD = () => {
  return (
    <section className="bg-blue px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-white md:text-4xl">
            About Children's Discovery
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
          <p className="font-body mx-auto mt-6 max-w-[660px] text-[17px] leading-relaxed text-white/85">
            Australia's leading provider of community STEAM programs since 2001. We design hands-on
            programs, build the hardware, distribute through libraries, train facilitators and deliver
            sessions to children across Australia.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-5xl text-yellow md:text-6xl">{s.number}</div>
              <div className="font-body mt-2 text-sm uppercase tracking-[0.15em] text-white/80">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Ausgrid Award */}
        <div className="mx-auto mt-16 max-w-2xl rounded-card-lg bg-white/10 p-8 text-center backdrop-blur-sm">
          <span className="font-display text-3xl">★</span>
          <h3 className="font-display mt-2 text-xl text-yellow">Ausgrid Community Award Winner 2026</h3>
          <p className="font-body mt-3 text-sm leading-relaxed text-white/80">
            Recognised by Ausgrid — one of Australia's largest electricity distribution networks — for
            outstanding contribution to community energy education.
          </p>
        </div>

        {/* Philosophy */}
        <h3 className="font-display mt-16 text-center text-xl uppercase text-white md:text-2xl">
          Our Philosophy: Learning Through Play
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {philosophy.map((p, i) => (
            <div
              key={i}
              className="rounded-card bg-white/10 p-6 backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
            >
              <h4 className="font-display text-base text-yellow">{p.title}</h4>
              <p className="font-body mt-2 text-sm leading-relaxed text-white/75">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCD;
