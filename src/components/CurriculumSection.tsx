import { useState } from "react";

const areas = [
  { area: "Science", desc: "Physical Sciences — Energy is transferred in various ways", years: "Yrs 3–6", challenges: "1, 2, 5, 7", priority: "Sustainability" },
  { area: "Science", desc: "Physical Sciences — Energy from a variety of sources can be used", years: "Yrs 5–8", challenges: "1–4, 8, 9", priority: "Sustainability" },
  { area: "Science", desc: "Science as a Human Endeavour — Science knowledge influences design", years: "Yrs 5–8", challenges: "All", priority: "" },
  { area: "Technology", desc: "Systems & Control — Design, produce and evaluate digital systems", years: "Yrs 5–8", challenges: "3, 6, 7, 10", priority: "" },
  { area: "Technology", desc: "Digital Technologies — Data acquisition, representation and analysis", years: "Yrs 5–8", challenges: "1–10", priority: "" },
  { area: "Mathematics", desc: "Measurement — Rates and units of measurement in real-world contexts", years: "Yrs 5–8", challenges: "1, 2, 6, 9", priority: "" },
  { area: "Mathematics", desc: "Number — Financial mathematics, percentages and ratios", years: "Yrs 6–8", challenges: "4, 8, 9", priority: "" },
  { area: "Mathematics", desc: "Statistics — Collect, record, analyse and present data", years: "Yrs 5–8", challenges: "All", priority: "" },
  { area: "English", desc: "Literacy — Argue, justify and present evidence-based positions", years: "Yrs 5–8", challenges: "5, 8, 10", priority: "" },
  { area: "Cross-curriculum", desc: "Sustainability — Systems thinking for sustainable futures", years: "Yrs 3–8", challenges: "All", priority: "" },
  { area: "Cross-curriculum", desc: "Critical & Creative Thinking — Problem-solving and evaluation", years: "Yrs 3–8", challenges: "All", priority: "" },
];

const areaFilters = ["All", "Science", "Technology", "Mathematics", "English", "Cross-curriculum"];

const areaColors: Record<string, string> = {
  Science: "bg-teal/15 text-teal",
  Technology: "bg-blue/15 text-blue",
  Mathematics: "bg-coral/15 text-coral",
  English: "bg-yellow/30 text-navy",
  "Cross-curriculum": "bg-pink/30 text-navy",
};

const CurriculumSection = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? areas : areas.filter((a) => a.area === filter);

  return (
    <section className="bg-cream px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-blue md:text-4xl">
            Curriculum Alignment
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
          <p className="font-body mx-auto mt-6 max-w-[640px] text-[17px] leading-relaxed text-navy/80">
            Mapped to the Australian Curriculum v9.0. Deployable in a single 45-minute session or
            across a full term unit.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {areaFilters.map((a) => (
            <button
              key={a}
              onClick={() => setFilter(a)}
              className={`font-display rounded-pill px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200 ${
                filter === a
                  ? "bg-blue text-white scale-105"
                  : "bg-white text-navy/60 hover:bg-white/80 shadow-sm"
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        {/* Cards on mobile, table on desktop */}
        <div className="mt-8 hidden md:block overflow-hidden rounded-card-lg bg-white shadow-md">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-cream/50">
                <th className="font-display px-5 py-3.5 text-xs uppercase tracking-wider text-blue">Area</th>
                <th className="font-display px-5 py-3.5 text-xs uppercase tracking-wider text-blue">Content Description</th>
                <th className="font-display px-5 py-3.5 text-xs uppercase tracking-wider text-blue">Years</th>
                <th className="font-display px-5 py-3.5 text-xs uppercase tracking-wider text-blue">Challenges</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((a, i) => (
                <tr key={i} className="transition-colors hover:bg-cream/30">
                  <td className="px-5 py-3">
                    <span className={`rounded-pill px-3 py-1 font-display text-[10px] uppercase tracking-wider ${areaColors[a.area] || "bg-muted text-navy"}`}>
                      {a.area}
                    </span>
                  </td>
                  <td className="font-body px-5 py-3 text-sm text-navy/80">{a.desc}</td>
                  <td className="font-body px-5 py-3 text-sm text-navy/60 whitespace-nowrap">{a.years}</td>
                  <td className="font-body px-5 py-3 text-sm text-navy/60 whitespace-nowrap">{a.challenges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-8 space-y-3 md:hidden">
          {filtered.map((a, i) => (
            <div key={i} className="rounded-card bg-white p-4 shadow-sm">
              <span className={`inline-block rounded-pill px-3 py-1 font-display text-[10px] uppercase tracking-wider ${areaColors[a.area] || "bg-muted text-navy"}`}>
                {a.area}
              </span>
              <p className="font-body mt-2 text-sm text-navy/80">{a.desc}</p>
              <div className="font-body mt-2 flex gap-4 text-xs text-navy/50">
                <span>{a.years}</span>
                <span>Challenges: {a.challenges}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
