import { useMemo, useState } from "react";

const filters = ["All", "Branding", "Production", "Civil Works", "Agency"];

function Portfolio({ items }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <section id="portfolio" className="border-t border-white/10 bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Portfolio</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.08em] md:text-5xl">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6">
          <div className="max-w-lg rounded-2xl border border-white/10 bg-[#111] p-8 shadow-glow">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{activeItem.category}</p>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="text-xs uppercase tracking-[0.3em] text-gold"
              >
                Close
              </button>
            </div>
            <h3 className="mt-4 text-2xl font-heading uppercase tracking-[0.08em] text-white">
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
