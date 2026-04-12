function Partnerships() {
  return (
    <section id="partnerships" className="border-t border-teal-primary/10 bg-[#26C6DA] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(13,59,102,0.16),_transparent_40%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-[2rem] border border-teal-primary/15 bg-[#1FB8C8]/85 p-8 shadow-md backdrop-blur-sm lg:grid-cols-[0.95fr_1.05fr] lg:items-center md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-primary/75">Partnerships</p>
            <h2 className="mt-4 text-4xl font-heading font-bold uppercase tracking-[0.08em] text-teal-primary md:text-6xl">
              Trusted by brands that move markets.
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium text-teal-primary/85 md:text-lg">
              Trusted by leading brands across Kenya and beyond, we deliver consistent quality through long-term collaboration and proven execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-primary/80">
              <span className="rounded-full border border-teal-primary/20 bg-teal-primary/5 px-4 py-2">Corporate clients</span>
              <span className="rounded-full border border-teal-primary/20 bg-teal-primary/5 px-4 py-2">Retail brands</span>
              <span className="rounded-full border border-teal-primary/20 bg-teal-primary/5 px-4 py-2">Media partners</span>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[1.75rem] border border-white/30 bg-white shadow-xl">
            <img
              src={`${import.meta.env.BASE_URL}images/partnerships.jpeg`}
              alt="Collage of brand partnerships and client logos"
              className="h-full w-full object-contain bg-white p-4 animate-breathe-subtle motion-reduce:animate-none md:p-6"
            />
            <figcaption className="border-t border-teal-primary/10 bg-[#26C6DA]/60 px-5 py-4 text-sm font-medium text-teal-primary/80">
              A clear visual ledger of client relationships, best placed as proof of trust before the work gallery.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Partnerships;