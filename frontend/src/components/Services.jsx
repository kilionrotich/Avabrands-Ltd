function Services({ services, bgImages }) {
  return (
    <section id="services" className="section-glow border-t border-teal-primary/10 bg-[#f8f4ed] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f4ed]/45" aria-hidden="true" />
      {bgImages && bgImages[0] && (
        <div className="absolute left-0 top-0 opacity-65 h-96 w-96">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[0]}`} alt="" className="w-full h-full object-cover rounded-br-3xl" />
        </div>
      )}
      {bgImages && bgImages[1] && (
        <div className="absolute right-0 bottom-0 opacity-55 h-80 w-80">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[1]}`} alt="" className="w-full h-full object-cover rounded-tl-3xl" />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between bg-[#f8f4ed]/70 backdrop-blur-sm rounded-2xl p-6 -mx-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-teal-secondary font-semibold drop-shadow-sm">Capabilities</p>
            <h2 className="mt-4 text-4xl font-heading uppercase tracking-[0.08em] md:text-6xl text-teal-secondary font-bold drop-shadow-sm">
              Services built for consistency, speed, and precision.
            </h2>
          </div>
          <p className="max-w-md text-base text-teal-primary font-medium drop-shadow-sm">
            Integrated delivery reduces risk and ensures brand fidelity from concept to on-site execution.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-teal-secondary/20 bg-[#f8f4ed]/95 backdrop-blur-sm p-10 hover:border-teal-secondary/40 transition shadow-md">
              <h3 className="text-xl font-heading uppercase tracking-[0.08em] text-teal-secondary font-bold drop-shadow-sm">
                {service.title}
              </h3>
              <p className="mt-4 text-base text-teal-primary font-medium">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
