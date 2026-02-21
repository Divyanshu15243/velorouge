import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-end pb-20 bg-dark overflow-hidden">
    <img
      src={heroBg}
      alt="Strasbourg at dusk"
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

    <div className="container relative z-10">
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-dark-foreground leading-[0.95] max-w-3xl">
        Strasbourg
        <br />
        hits <em className="text-primary">different</em>
        <br />
        at dusk.
      </h1>
      <p className="mt-6 text-dark-foreground/70 max-w-md text-lg">
        Discover Strasbourg like never before on our curated bike experiences.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#rides"
          className="bg-primary text-primary-foreground px-8 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          EXPLORE RIDES
        </a>
        <a
          href="#pricing"
          className="border border-dark-foreground/30 text-dark-foreground px-8 py-3 font-semibold text-sm hover:border-dark-foreground/60 transition-colors"
        >
          SEE SUBSCRIPTION PLANS
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
