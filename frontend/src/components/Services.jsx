function Services({ services }) {
  return (
    <section id="services" className="section-glow border-t border-white/10 bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Capabilities</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.08em] md:text-5xl">
              Services built for consistency, speed, and precision.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/70">
            Integrated delivery reduces risk and ensures brand fidelity from concept to on-site execution.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-heading uppercase tracking-[0.08em] text-gold">
                {service.title}
              </h3>
              <p className="mt-4 text-sm text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
