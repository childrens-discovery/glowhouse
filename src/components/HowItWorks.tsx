import { RoundedStar, Arc, PlusCross } from "./BrandShapes";

const steps = [
  { title: "Find a G.L.O.W. House Near You", desc: "From mid-2026, available at 500 libraries and community groups across Australia. Register below for updates." },
  { title: "Book Your Session", desc: "Venues will offer school holiday programs, workshops, and drop-in times. Check your local library's schedule." },
  { title: "Arrive Curious, Give It a Go", desc: "The house snaps together in 5 minutes. Then jump into challenges: solar experiments, battery tests, blackout scenarios." },
  { title: "Experiment & Discover", desc: "Try the challenges or explore your own questions. It's all about doing, discovering, and understanding." },
  { title: "Become an Energy Champion", desc: "Leave ready to talk to your family about how solar and battery create a complete energy solution — for homes and for society." },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-blue px-4 py-20 md:py-28">
      <Arc className="absolute top-6 right-6 opacity-10" color="#FAF2E5" size={80} />
      <PlusCross className="absolute bottom-10 left-8 opacity-10" color="#52CCAB" size={50} />
      <RoundedStar className="absolute top-1/2 right-4 opacity-10" color="#FFB8B0" size={45} />

      <div className="relative mx-auto max-w-[680px]">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-white md:text-4xl">
            How It Works
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
        </div>

        <div className="mt-14 space-y-0">
          {steps.map((s, i) => (
            <div key={i}>
              <div className="flex gap-5 items-start py-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal font-display text-xl text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">{s.title}</h3>
                  <p className="font-body mt-1.5 text-base leading-relaxed text-white/80">{s.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="ml-6 h-px bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
