import { useMemo, useState, useRef, useEffect } from "react";

function Portfolio({ items, bgImage }) {
  const backgroundStyle = bgImage ? {
    backgroundImage: `url(${import.meta.env.BASE_URL}images/${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } : {};
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeItem, setActiveItem] = useState(null);
  const gridRef = useRef(null);

  const filters = useMemo(() => {
    const categories = [...new Set(items.map((item) => item.category))];
    return ["All", ...categories];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  // Scroll to grid when filter changes (especially helpful on mobile)
  useEffect(() => {
    if (gridRef.current && activeFilter !== "All") {
      const yOffset = -100; // Offset for header
      const element = gridRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="border-t border-teal-primary/10 bg-[#2DD4E3] py-20 relative" style={backgroundStyle}>
      <div className="absolute inset-0 bg-[#26C6DA]/65" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 bg-[#26C6DA]/80 backdrop-blur-sm rounded-2xl p-6 -mx-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-teal-primary font-semibold drop-shadow-sm animate-pulse-slow">Portfolio</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.08em] md:text-5xl font-bold drop-shadow-sm">
              Evidence of execution.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                style={{ animationDelay: `${index * 70}ms` }}
                className={`interactive-button portfolio-filter-chip rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  activeFilter === filter
                    ? "portfolio-filter-chip-active bg-teal-primary text-white font-bold"
                    : "border border-teal-primary/30 text-teal-primary/70 hover:border-teal-primary hover:text-teal-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div ref={gridRef} className="mt-12 grid gap-6 md:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 text-left transition hover:border-gold overflow-hidden"
            >
              {item.image_url && (
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={`Project image for ${item.title}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.category}</p>
                  <h3 className="mt-4 text-xl font-heading uppercase tracking-[0.08em] text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{item.summary}</p>
                </div>
                <span className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-gold">
                  View Project
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-50 bg-[#26C6DA]/92 backdrop-blur-sm">
          <div className="h-full w-full overflow-y-auto pb-20">
            <div className="mx-auto w-full max-w-6xl px-6 py-10">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-teal-primary/60 font-bold">{activeItem.category}</p>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="interactive-button text-xs uppercase tracking-[0.3em] text-teal-primary font-bold hover:text-teal-primary/80"
                >
                  Close
                </button>
              </div>
            <h3 className="text-2xl font-heading uppercase tracking-[0.08em] text-teal-primary font-bold">
              {activeItem.title}
            </h3>
            <p className="mt-4 text-sm text-white/70">{activeItem.summary}</p>
            {activeItem.image_url ? (
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={activeItem.image_url}
                  alt={`Full view of ${activeItem.title} project`}
                  className="w-full object-cover"
                />
              </div>
            ) : (
              <div className="mt-6 rounded-xl border border-white/10 bg-black/60 p-6 text-sm text-white/60">
                No project images available.
              </div>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Portfolio;
