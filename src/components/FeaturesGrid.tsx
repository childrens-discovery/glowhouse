const accents = ["#F8C264", "#52CCAB", "#FF734F", "#2159B4", "#FFB8B0", "#F8C264"];

const features = [
  { emoji: "☀️", title: "Real Solar Panels", desc: "Cover the panel with your hand and watch the power drop instantly. See the direct connection between light and energy." },
  { emoji: "🔋", title: "Working Battery", desc: "Store sunshine for later. Run your house through the night and discover how batteries keep homes powered." },
  { emoji: "🚗", title: "Charge an EV", desc: "Power up a real RC car using solar energy, then drive it around. Experience how EVs can run on sunshine." },
  { emoji: "📊", title: "Live Display", desc: "Watch numbers change in real-time as you experiment. See exactly what you're generating, using, and storing." },
  { emoji: "🧩", title: "Try Challenges", desc: "Power through a blackout? Balance AC with solar? There's always a new puzzle to solve." },
  { emoji: "🛠️", title: "Build Skills", desc: "Develop energy know-how, problem-solving, and critical thinking that connects to real homes." },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-blue md:text-4xl">
            What You'll Explore
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative rounded-card bg-white p-6 pt-8 text-center shadow-md transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
              style={{ borderTop: `2px solid transparent` }}
              onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = accents[i])}
              onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = "transparent")}
            >
              {/* Accent tag */}
              <span
                className="absolute top-3 right-3 rounded-pill px-2.5 py-0.5 font-display text-[11px] uppercase tracking-wide text-white"
                style={{ backgroundColor: accents[i] }}
              >
                Hands-On
              </span>
              <div className="text-5xl leading-none mb-4 transition-transform duration-[250ms] ease-in-out group-hover:scale-[1.15]">
                {f.emoji}
              </div>
              <h3 className="font-display text-xl text-blue">{f.title}</h3>
              <p className="font-body mt-2 text-[15px] leading-relaxed text-navy/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
