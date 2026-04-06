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
                className={`portfolio-filter-chip rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
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
              className="group flex h-full flex-col justify-between rounded-2xl border border-teal-primary/20 bg-teal-primary/5 p-6 text-left transition duration-200 hover:-translate-y-1 hover:border-teal-primary/60 hover:bg-teal-primary/10 hover:animate-pulse-slow motion-reduce:hover:translate-y-0"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-teal-primary/60">{item.category}</p>
                <h3 className="mt-4 text-xl font-heading uppercase tracking-[0.08em] font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-teal-primary/80">{item.summary}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="portfolio-view-button mt-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none motion-reduce:active:scale-100"
                aria-label={`View project ${item.title}`}
              >
                <span>
                  View Project
                </span>
                <span aria-hidden="true" className="portfolio-cta-arrow transition-transform duration-[180ms] ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 motion-reduce:transition-none motion-reduce:transform-none">
                  →
                </span>
              </button>
            </article>
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
                  className="text-xs uppercase tracking-[0.3em] text-teal-primary font-bold hover:text-teal-primary/80"
                >
                  Close
                </button>
              </div>
            <h3 className="text-2xl font-heading uppercase tracking-[0.08em] text-teal-primary font-bold">
              {activeItem.title}
            </h3>
            <p className="mt-4 text-sm text-teal-primary/80">{activeItem.summary}</p>
            
            {activeItem.images && activeItem.images.length > 0 ? (
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {activeItem.images.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="overflow-hidden rounded-xl border border-teal-primary/30 bg-[#1FB8C8] aspect-square">
                      {item.video_name ? (
                        <video
                          src={`${import.meta.env.BASE_URL}images/${item.video_name}`}
                          className="w-full h-full object-cover"
                          controls
                          playsInline
                          autoPlay
                          muted
                          loop
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={`${import.meta.env.BASE_URL}images/${item.image_name}`}
                          alt={item.description || `Project image ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        />
                      )}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-teal-primary/80">
                        {item.description || `Project image ${idx + 1}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
                <div className="mt-8 rounded-2xl border border-teal-primary/30 bg-[#1FB8C8] p-6 text-sm text-teal-primary/70">
                Images coming soon for this project.
              </div>
            )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Portfolio;
