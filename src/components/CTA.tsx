const CTA = () => (
  <section className="py-32 bg-dark text-dark-foreground text-center">
    <div className="container max-w-2xl">
      <h2 className="font-display text-4xl md:text-6xl font-black leading-tight">
        Strasbourg is
        <br />
        waiting for <em className="text-primary">you.</em>
      </h2>
      <p className="mt-6 text-dark-foreground/60 text-lg">
        Join thousands of riders exploring the city on two wheels.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#"
          className="bg-primary text-primary-foreground px-10 py-4 font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          GET STARTED
        </a>
        <a
          href="#"
          className="border border-dark-foreground/30 text-dark-foreground px-10 py-4 font-semibold text-sm hover:border-dark-foreground/60 transition-colors"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
