import { useMemo, useState, useRef, useEffect } from "react";

function getMediaUrl(filename) {
  return `${import.meta.env.BASE_URL}images/${filename}`;
}

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

  /** Render the media (image or video) inside a card */
  function renderCardMedia(item) {
    const url = item.media_url;
    if (!url) return null;

    if (item.type === "video") {
      return (
        <div className="w-full overflow-hidden bg-black">
          <video
            src={getMediaUrl(url)}
            className="w-full aspect-[4/3] object-contain"
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      );
    }

    return (
      <div className="w-full overflow-hidden bg-black">
        <img
          src={getMediaUrl(url)}
          alt={`Project image for ${item.title}`}
          className="w-full aspect-[4/3] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  /** Render the media in the lightbox modal */
  function renderModalMedia(item) {
    const url = item.media_url;
    if (!url) {
      return (
        <div className="mt-6 rounded-xl border border-yellow/20 bg-black/60 p-6 text-sm text-gold/60">
          No project media available.
        </div>
      );
    }

    if (item.type === "video") {
      return (
        <div className="mt-6 overflow-hidden rounded-xl border border-yellow/20 bg-black flex justify-center">
          <video
            src={getMediaUrl(url)}
            className="max-h-[80vh] w-auto max-w-full object-contain"
            controls
            autoPlay
            playsInline
          />
        </div>
      );
    }

    return (
      <div className="mt-6 overflow-hidden rounded-xl border border-yellow/20 bg-black flex justify-center">
        <img
          src={getMediaUrl(url)}
          alt={`Full view of ${item.title} project`}
          className="max-h-[80vh] w-auto max-w-full object-contain"
        />
      </div>
    );
  }

  return (
<section id="portfolio" className="border-t border-yellow/20 section-bg py-20 relative" style={backgroundStyle}>
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 bg-black/70 backdrop-blur-sm rounded-2xl p-6 -mx-6 border border-yellow/15">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold font-semibold drop-shadow-sm animate-pulse-slow">Portfolio</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.08em] md:text-5xl font-bold drop-shadow-sm text-gold">
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
                    ? "portfolio-filter-chip-active bg-gold text-black font-bold"
                    : "border border-yellow/30 text-gold/70 hover:border-yellow hover:text-gold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div ref={gridRef} className="mt-12 grid gap-6 md:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              role="button"
              onClick={() => setActiveItem(item)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveItem(item); }}
              tabIndex={0}
              className="group flex h-full flex-col justify-between rounded-2xl border border-yellow/20 bg-black/60 text-left transition hover:border-gold overflow-hidden cursor-pointer"
            >
              {item.media_url && renderCardMedia(item)}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold/50">{item.category}</p>
                  <h3 className="mt-4 text-xl font-heading uppercase tracking-[0.08em] text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-gold/70">{item.summary}</p>
                </div>
                <span className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/40 group-hover:text-gold">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm">
          <div className="h-full w-full overflow-y-auto pb-20">
            <div className="mx-auto w-full max-w-6xl px-6 py-10">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/60 font-bold">{activeItem.category}</p>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="interactive-button text-xs uppercase tracking-[0.3em] text-gold font-bold hover:text-gold/80"
                >
                  Close
                </button>
              </div>
            <h3 className="text-2xl font-heading uppercase tracking-[0.08em] text-gold font-bold">
              {activeItem.title}
            </h3>
            <p className="mt-4 text-sm text-gold/70">{activeItem.summary}</p>
            {renderModalMedia(activeItem)}
          </div>
        </div>
      </div>
      ) : null}
    </section>
  );
}

export default Portfolio;

