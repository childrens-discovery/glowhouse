import { useState } from "react";

type Level = "ALL" | "STARTER" | "MODERATE" | "ADVANCED" | "EXPERT";

const levelColors: Record<string, string> = {
  STARTER: "bg-teal text-white",
  MODERATE: "bg-yellow text-blue",
  ADVANCED: "bg-coral text-white",
  EXPERT: "bg-blue text-white",
};

const challenges = [
  { num: 1, title: "Morning Power Rush", level: "STARTER" as const, scenario: "7 AM: solar rising, battery at 60%. Keep grid draw below 2 kW as the family wakes up.", focus: "Energy sources · Cause & effect" },
  { num: 2, title: "Solar Power Champion", level: "STARTER" as const, scenario: "12 PM clear sky. Achieve zero grid draw for five consecutive minutes using solar alone.", focus: "Renewable energy · Data observation" },
  { num: 3, title: "Night Survival", level: "MODERATE" as const, scenario: "8 PM: solar offline, battery at 80%. Power the entire evening on storage alone. Can you keep the grid at zero?", focus: "Energy storage · Strategic planning" },
  { num: 4, title: "Electric Car Race", level: "MODERATE" as const, scenario: "Charge the EV from 20% to 80% at the lowest possible cost. Three charging strategies compete.", focus: "Electrification · Financial maths" },
  { num: 5, title: "Heatwave Survival", level: "ADVANCED" as const, scenario: "It's 38°C, AC must run. Keep grid below 1.5 kW as the battery depletes.", focus: "Demand management · Systems thinking" },
  { num: 6, title: "Birthday Party Power", level: "MODERATE" as const, scenario: "3 PM: 90% solar. Run party loads and simultaneously push excess generation into the battery.", focus: "Load management · Optimisation" },
  { num: 7, title: "Blackout Emergency", level: "MODERATE" as const, scenario: "Grid goes down. Battery at 55%. Prioritise loads and survive on solar and storage alone.", focus: "Grid resilience · Decision under pressure" },
  { num: 8, title: "Zero Emissions Day", level: "ADVANCED" as const, scenario: "24-hour simulation. Achieve zero grid draw from dawn to dusk. Every decision counts.", focus: "Carbon emissions · Extended planning" },
  { num: 9, title: "Money-Saving Marathon", level: "ADVANCED" as const, scenario: "Week simulation. Reduce the household electricity bill by at least 50% using smart scheduling.", focus: "Financial literacy · Data analysis" },
  { num: 10, title: "Ultimate Energy Master", level: "EXPERT" as const, scenario: "Full day with weather events, surprise loads and a grid outage. All skills required.", focus: "Integrated systems · Creative problem-solving" },
];

const levels: Level[] = ["ALL", "STARTER", "MODERATE", "ADVANCED", "EXPERT"];

const ChallengesSection = () => {
  const [filter, setFilter] = useState<Level>("ALL");

  const filtered = filter === "ALL" ? challenges : challenges.filter((c) => c.level === filter);

  return (
    <section className="bg-blue px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-white md:text-4xl">
            10 Energy Challenges
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
          <p className="font-body mx-auto mt-6 max-w-[640px] text-[17px] leading-relaxed text-white/85">
            Real-family narrative scenarios. Students physically manage the house while reading the
            live HEMS display. Challenges build skills progressively and also work as standalone sessions.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setFilter(l)}
              className={`font-display rounded-pill px-5 py-2 text-xs uppercase tracking-wider transition-all duration-200 ${
                filter === l
                  ? "bg-yellow text-blue scale-105"
                  : "bg-white/15 text-white/80 hover:bg-white/25"
              }`}
            >
              {l === "ALL" ? "All Levels" : l}
            </button>
          ))}
        </div>

        {/* Challenge cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {filtered.map((c) => (
            <div
              key={c.num}
              className="group rounded-card-lg bg-white/10 p-6 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal font-display text-lg text-white">
                    {c.num}
                  </span>
                  <h3 className="font-display text-lg text-white">{c.title}</h3>
                </div>
                <span className={`shrink-0 rounded-pill px-3 py-1 font-display text-[10px] uppercase tracking-wider ${levelColors[c.level]}`}>
                  {c.level}
                </span>
              </div>
              <p className="font-body mt-3 text-sm leading-relaxed text-white/75">{c.scenario}</p>
              <p className="font-body mt-2 text-xs uppercase tracking-wider text-yellow/80">{c.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
