function DigitalStudio() {
  const tracks = [
    {
      title: "Web Development",
      description:
        "High-performance websites, dashboards, and business platforms shaped for speed, clarity, and long-term maintainability.",
      points: ["Responsive product experiences", "Scalable frontend and backend systems", "Conversion-focused interface design"]
    },
    {
      title: "Android Development",
      description:
        "Android products engineered for reliability, smooth user journeys, and integration with modern business workflows.",
      points: ["Native and business-ready mobile apps", "API integrations and data workflows", "Maintainable architecture for growth"]
    }
  ];

  return (
    <section id="digital-studio" className="border-t border-yellow/20 bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-yellow/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-yellow/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] border border-yellow/20 bg-black/70 p-8 backdrop-blur-sm shadow-md md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Digital Studio</p>
              <h2 className="mt-4 text-4xl font-heading font-bold uppercase tracking-[0.08em] text-gold md:text-6xl">
                Developer, Systems Architect & Digital Literacy Educator
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-semibold text-gold">
                Crafting scalable platforms with clarity and impact.
              </p>
              <p className="mt-5 max-w-2xl text-base font-medium text-gold/85">
                Alongside brand execution, Avabrands also delivers digital products and technical strategy for organizations that need dependable web platforms, Android applications, and clear systems thinking.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {tracks.map((track) => (
                <article key={track.title} className="rounded-2xl border border-yellow/20 bg-black/80 p-6 shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">Specialization</p>
                  <h3 className="mt-4 text-2xl font-heading font-bold uppercase tracking-[0.08em] text-gold">
                    {track.title}
                  </h3>
                  <p className="mt-4 text-base font-medium text-gold/85">{track.description}</p>
                  <ul className="mt-6 space-y-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold/80">
                    {track.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalStudio;
