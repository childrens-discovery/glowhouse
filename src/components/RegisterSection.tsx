import { RoundedStar, Arc, PlusCross } from "./BrandShapes";

const RegisterSection = () => {
  return (
    <section id="register" className="bg-cream px-4 py-20 md:py-28">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-3xl uppercase text-blue md:text-4xl">
          Register Your Interest
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
        <p className="font-body mx-auto mt-6 max-w-[560px] text-base leading-relaxed text-navy/80">
          Be the first to know when G.L.O.W. Houses arrive in your area. Get in touch for updates
          on availability, training, and program news. Every child is welcome and we'd love to hear
          from you.
        </p>

        <div className="relative mt-10">
          <RoundedStar className="absolute -top-6 -left-8 opacity-20" color="#F8C264" size={40} />
          <PlusCross className="absolute -bottom-4 -right-6 opacity-15" color="#52CCAB" size={35} />
          <Arc className="absolute top-1/2 -right-10 opacity-10 rotate-90" color="#FFB8B0" size={45} />

          <div className="relative rounded-[20px] bg-white p-8 shadow-lg sm:p-10">
            <div className="text-5xl mb-4">📬</div>
            <h3 className="font-display text-xl text-blue">Get in Touch</h3>
            <p className="font-body mt-3 text-base leading-relaxed text-navy/70">
              Send us an email and we'll keep you updated on everything G.L.O.W. House,
              including when sessions open near you.
            </p>
            <a
              href="mailto:info@childrensdiscovery.org.au?subject=G.L.O.W.%20House%20Register%20Interest"
              className="font-display mt-6 inline-block w-full rounded-pill bg-coral py-3.5 text-sm uppercase tracking-wider text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Email Us to Register
            </a>
            <p className="font-body mt-4 text-xs italic text-navy/50">
              info@childrensdiscovery.org.au
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
