function Hero() {
  return (
    <section className="hero-backdrop relative flex min-h-[85vh] items-center">
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-gold">Branding + Production</p>
          <h1 className="mt-6 text-balance text-4xl font-heading uppercase tracking-[0.08em] text-white md:text-6xl">
            We build brands that command attention and trust at scale.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Avabrands unifies strategy, production, and civil works into a single, accountable partner for
            high-impact brand environments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-gold hover:text-gold"
            >
              Talk to Us
            </a>
          </div>
        </div>
        <div className="self-end rounded-2xl border border-white/10 bg-black/70 p-6 shadow-glow">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Credibility</p>
          <div className="mt-4 space-y-5">
            <div>
              <p className="text-3xl font-heading text-gold">18+ Years</p>
              <p className="text-sm text-white/70">Delivering premium brand environments.</p>
            </div>
            <div>
              <p className="text-3xl font-heading text-gold">120+ Projects</p>
              <p className="text-sm text-white/70">Across corporate, retail, and civic sectors.</p>
            </div>
            <div>
              <p className="text-3xl font-heading text-gold">24/7 Oversight</p>
              <p className="text-sm text-white/70">Dedicated production and QA leadership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
