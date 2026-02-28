import { useMemo, useState } from "react";

const filters = ["All", "Corporate Branding", "Signage Solutions", "Vehicle Branding", "Large Format Printing", "Printing Services", "Apparel & Promotional Branding"];

function Portfolio({ items, bgImage }) {
  const backgroundStyle = bgImage ? {
    backgroundImage: `url(/images/${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } : {};
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <section id="portfolio" className="border-t border-white/10 bg-[#0a0a0a] py-20 relative" style={backgroundStyle}>
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Portfolio</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.08em] md:text-5xl text-text-light">
              Evidence of execution.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  activeFilter === filter
                    ? "bg-gold text-black"
                    : "border border-white/20 text-white/70 hover:border-gold hover:text-gold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-gold"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-text-light/50">{item.category}</p>
                <h3 className="mt-4 text-xl font-heading uppercase tracking-[0.08em] text-gold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-text-light/70">{item.summary}</p>
              </div>
              <span className="mt-6 text-xs uppercase tracking-[0.3em] text-text-light/40 group-hover:text-gold">
                View Project
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-50 bg-black/90">
          <div className="h-full w-full overflow-y-auto">
            <div className="mx-auto w-full max-w-6xl px-6 py-10">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-text-light/50 font-gold">{activeItem.category}</p>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="text-xs uppercase tracking-[0.3em] text-gold"
                >
                  Close
                </button>
              </div>
            <h3 className="text-2xl font-heading uppercase tracking-[0.08em] text-text-light">
              {activeItem.title}
            </h3>
            <p className="mt-4 text-sm text-text-light/70">{activeItem.summary}</p>
            
            {activeItem.images && activeItem.images.length > 0 ? (
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {activeItem.images.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/60 aspect-square">
                      <img 
                        src={`/images/${item.image_name}`} 
                        alt={item.description || `Project image ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-text-light/70">
                        {item.description || `Project image ${idx + 1}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/60 p-6 text-sm text-text-light/60">
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
