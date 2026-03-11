import { Circle, Arc, PlusCross } from "./BrandShapes";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-blue px-4 py-12">
      <Circle className="absolute bottom-4 left-8 opacity-10" color="#F8C264" size={45} />
      <Arc className="absolute top-4 right-10 opacity-10 rotate-180" color="#FFB8B0" size={40} />
      <PlusCross className="absolute bottom-6 right-1/4 opacity-10" color="#52CCAB" size={35} />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-display text-[22px] text-white">🧪 Children's Discovery</p>
        <p className="font-body mt-2 text-[15px] italic text-coral">The Science of Play</p>
        <div className="mx-auto my-5 h-px w-16 bg-white/30" />
        <p className="font-body text-[13px] text-white/60">
          © 2026 Children's Discovery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
