function Services({ services, bgImages }) {
  return (
    <section id="services" className="section-glow border-t border-white/10 bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      {bgImages && bgImages[0] && (
        <div className="absolute left-0 top-0 opacity-40 h-96 w-96">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[0]}`} alt="" className="w-full h-full object-cover rounded-br-3xl" />
        </div>
      )}
      {bgImages && bgImages[1] && (
        <div className="absolute right-0 bottom-0 opacity-30 h-80 w-80">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[1]}`} alt="" className="w-full h-full object-cover rounded-tl-3xl" />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Capabilities</p>
            <h2 className="mt-4 text-4xl font-heading uppercase tracking-[0.08em] md:text-6xl text-text-light">
              Services built for consistency, speed, and precision.
            </h2>
          </div>
          <p className="max-w-md text-base text-text-light/70">
            Integrated delivery reduces risk and ensures brand fidelity from concept to on-site execution.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-heading uppercase tracking-[0.08em] text-gold">
                {service.title}
              </h3>
              <p className="mt-4 text-base text-text-light/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
