import { RoundedStar, Arc, PlusCross } from "./BrandShapes";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue px-4 py-20 md:py-28">
      {/* Floating brand shapes */}
      <RoundedStar className="absolute top-8 left-6 opacity-20 animate-float" color="#FAF2E5" size={50} />
      <Arc className="absolute top-12 right-8 opacity-20 rotate-90 animate-float-delay-1" color="#F8C264" size={70} />
      <PlusCross className="absolute bottom-10 left-10 opacity-15 animate-float-delay-2" color="#FAF2E5" size={40} />
      <RoundedStar className="absolute bottom-16 right-12 opacity-15 animate-float-delay-3" color="#F8C264" size={55} />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Headline with glow */}
        <div className="relative inline-block">
          <div className="absolute inset-0 -inset-x-16 -inset-y-8 animate-glow-pulse rounded-full bg-[radial-gradient(ellipse_at_center,_#F8C26433_0%,_transparent_70%)] blur-2xl" />
          <h1 className="relative font-display text-5xl uppercase text-white md:text-7xl lg:text-[72px] leading-tight">
            G.L.O.W. House
          </h1>
        </div>
        <p className="font-display mt-3 text-2xl text-coral md:text-[28px]">
          Green Lighting Our World
        </p>
        <p className="font-body mx-auto mt-6 max-w-[620px] text-base text-white/90 md:text-lg leading-relaxed">
          A hands-on energy education program where children aged 7+ explore solar power,
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
            href="mailto:info@childrensdiscovery.org.au?subject=G.L.O.W.%20House%20—%20Register%20Interest"
            className="font-display rounded-pill bg-yellow px-8 py-3 text-sm uppercase tracking-wider text-blue transition-transform hover:scale-105"
          >
            Register Interest
          </a>
        </div>

        {/* 3D model embed */}
        <div className="mx-auto mt-12 max-w-xl overflow-hidden rounded-lg border-2 border-white/20 aspect-video">
          <iframe
            title="G.L.O.W. House 3D Model"
            className="h-full w-full"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/69efe3bf3bab43b597715001b34fc613/embed"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
