import { RoundedStar, PlusCross } from "./BrandShapes";

const systems = [
  { emoji: "☀️", title: "Solar Panels + HEMS", desc: "Live kW display. The command centre of every challenge.", color: "#F8C264" },
  { emoji: "🔋", title: "Battery Storage", desc: "Store excess solar. Manage overnight and peak supply.", color: "#52CCAB" },
  { emoji: "🚗", title: "EV Charger + RC Car", desc: "Smart charging, V2G scenarios, cost optimisation.", color: "#FF734F" },
  { emoji: "🔥", title: "Hot Water System", desc: "A home's largest load. Time-of-day optimisation.", color: "#2159B4" },
  { emoji: "❄️", title: "Air Conditioning", desc: "Demand management, heatwave and comfort trade-offs.", color: "#FFB8B0" },
  { emoji: "💡", title: "LED Smart Lighting", desc: "Automation, dimming and efficiency compounding.", color: "#F8C264" },
];

const specs = [
  { label: "Assembly", value: "5 minutes, no tools" },
  { label: "Power", value: "USB-C (5V, 20W)" },
  { label: "Materials", value: "3D-printed, child-safe" },
  { label: "Packed size", value: "A3 envelope — ships flat" },
  { label: "App", value: "Any browser, any device" },
];

const ProductSection = () => {
  return (
    <section className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-blue md:text-4xl">
            The Product
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
          <p className="font-body mx-auto mt-6 max-w-[680px] text-[17px] leading-relaxed text-navy/80">
            A flat-packed, 3D-printed model home that assembles in five minutes and brings every
            major system of a modern all-electric household to life. Every component connects to a
            live Home Energy Management System (HEMS) display showing real-time kilowatt readings.
          </p>
        </div>

        {/* Six systems grid */}
        <h3 className="font-display mt-16 text-center text-xl uppercase text-blue md:text-2xl">
          Six All-Electric Home Systems
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-card bg-cream p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              style={{ borderLeft: `3px solid ${s.color}` }}
            >
              <span className="text-3xl leading-none">{s.emoji}</span>
              <div>
                <h4 className="font-display text-base text-blue">{s.title}</h4>
                <p className="font-body mt-1 text-sm leading-relaxed text-navy/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specs */}
        <div className="mx-auto mt-14 max-w-2xl">
          <h3 className="font-display text-center text-xl uppercase text-blue md:text-2xl">
            Physical Specifications
          </h3>
          <div className="mt-6 divide-y divide-border rounded-card-lg bg-cream overflow-hidden">
            {specs.map((s, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4">
                <span className="font-display text-sm uppercase tracking-wide text-blue">{s.label}</span>
                <span className="font-body text-sm text-navy/80">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 flex justify-center">
          <RoundedStar className="absolute -left-4 top-0 opacity-15" color="#F8C264" size={35} />
          <PlusCross className="absolute -right-4 bottom-0 opacity-15" color="#52CCAB" size={30} />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
