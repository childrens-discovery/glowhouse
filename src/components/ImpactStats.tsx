const stats = [
  { number: "500", label: "Public Libraries" },
  { number: "500", label: "Community Groups" },
  { number: "100,000+", label: "Children Each Year" },
];

const ImpactStats = () => {
  return (
    <section className="bg-teal px-4 py-20 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-2xl uppercase text-white md:text-[32px]">
          Coming to Your Community
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="font-display text-6xl text-white md:text-7xl">{s.number}</div>
              <div className="font-body mt-2 text-sm uppercase tracking-[0.15em] text-white/90">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="font-body mx-auto mt-12 max-w-[600px] text-[17px] leading-relaxed text-white/90">
          Coming to communities across Australia, from capital cities to regional areas. A G.L.O.W.
          House will be near you, ready for curious minds to make the planet smile.
        </p>
      </div>
    </section>
  );
};

export default ImpactStats;
