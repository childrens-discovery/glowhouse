import { RoundedStar, Arc, PlusCross } from "./BrandShapes";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue px-4 py-20 md:py-28">
      {/* Decorative shapes */}
      <RoundedStar className="absolute top-8 left-6 opacity-20" color="#FAF2E5" size={50} />
      <Arc className="absolute top-12 right-8 opacity-20 rotate-90" color="#F8C264" size={70} />
      <PlusCross className="absolute bottom-10 left-10 opacity-15" color="#FAF2E5" size={40} />
      <RoundedStar className="absolute bottom-16 right-12 opacity-15" color="#F8C264" size={55} />

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-display text-5xl uppercase text-white md:text-7xl lg:text-[72px] leading-tight">
          G.L.O.W. House
        </h1>
        <p className="font-display mt-3 text-2xl text-coral md:text-[28px]">
          Green Lighting Our World
        </p>
        <p className="font-body mx-auto mt-6 max-w-[620px] text-base text-white/90 md:text-lg leading-relaxed">
          A hands-on energy education program where children aged 7–14 explore solar power,
          battery storage, and clean energy homes through play-based discovery. Solar and battery
          together provide a complete energy solution — for your home and for society.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#features"
            className="font-display rounded-pill bg-coral px-8 py-3 text-sm uppercase tracking-wider text-white transition-transform hover:scale-105"
          >
            Try the Challenges
          </a>
          <a
            href="#register"
            className="font-display rounded-pill bg-yellow px-8 py-3 text-sm uppercase tracking-wider text-blue transition-transform hover:scale-105"
          >
            Register Interest
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-lg border-2 border-white/30 bg-white/10 p-8 backdrop-blur-sm">
          <p className="font-body text-white/80 text-base">
            [ 3D Model of the G.L.O.W. House — Click and drag to rotate ]
          </p>
          <p className="font-body mt-3 text-sm italic text-white/50">
            Interactive 3D model coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
