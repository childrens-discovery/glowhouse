import { RoundedStar, PlusCross, RoundedTriangle } from "./BrandShapes";

const AboutSection = () => {
  return (
    <section className="bg-cream px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-blue md:text-4xl">
            About the G.L.O.W. House
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
        </div>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="space-y-5 font-body text-[17px] leading-relaxed text-navy">
              <p>
                G.L.O.W. House is a flat-packed, 3D-printed model home that assembles in five minutes
                and brings every major system of a modern all-electric household to life — from solar
                panels and battery storage to EV charging, hot water, air conditioning and smart lighting.
              </p>
              <p>
                Every component is connected to a live Home Energy Management System (HEMS) display
                showing real-time kilowatt readings. Every action has an immediate, visible consequence.
                Solar and battery together provide a complete energy solution — for your home and for society.
              </p>
              <p>
                The G.L.O.W. House builds climate confidence — not anxiety — by showing that solutions
                exist right now. Every child is welcome. We nurture creativity, confidence, and a
                can-do attitude — adapting to every interest and skill level.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative h-60 w-40">
              <RoundedStar className="absolute top-0 left-4" color="#F8C264" size={80} />
              <PlusCross className="absolute top-20 left-12" color="#52CCAB" size={70} />
              <RoundedTriangle className="absolute bottom-0 left-0" color="#FF734F" size={75} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
