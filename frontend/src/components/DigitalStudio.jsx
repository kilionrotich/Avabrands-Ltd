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
    <section id="digital-studio" className="border-t border-teal-primary/10 bg-[#2DD4E3] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#26C6DA]/50" aria-hidden="true" />
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-teal-primary/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-teal-secondary/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] border border-teal-primary/15 bg-[#26C6DA]/80 p-8 backdrop-blur-sm shadow-md md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-primary">Digital Studio</p>
              <h2 className="mt-4 text-4xl font-heading font-bold uppercase tracking-[0.08em] text-teal-primary md:text-6xl">
                Developer, Systems Architect & Digital Literacy Educator
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-semibold text-teal-primary">
                Crafting scalable platforms with clarity and impact.
              </p>
              <p className="mt-5 max-w-2xl text-base font-medium text-teal-primary/85">
                Alongside brand execution, Avabrands also delivers digital products and technical strategy for organizations that need dependable web platforms, Android applications, and clear systems thinking.
              </p>
              <a
                href="https://kilionrotich.github.io/portfolio-kilion/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-teal-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-teal-secondary hover:shadow-2xl"
              >
                View Digital Portfolio
                <span className="text-lg">↗</span>
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {tracks.map((track) => (
                <article key={track.title} className="rounded-2xl border border-teal-primary/20 bg-[#1FB8C8]/95 p-6 shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-primary/70">Specialization</p>
                  <h3 className="mt-4 text-2xl font-heading font-bold uppercase tracking-[0.08em] text-teal-primary">
                    {track.title}
                  </h3>
                  <p className="mt-4 text-base font-medium text-teal-primary/85">{track.description}</p>
                  <ul className="mt-6 space-y-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-primary/80">
                    {track.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-secondary" aria-hidden="true" />
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
