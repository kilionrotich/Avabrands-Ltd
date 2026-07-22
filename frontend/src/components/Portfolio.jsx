import { useMemo, useState, useRef, useEffect } from "react";

function getMediaUrl(filename) {
  return `${import.meta.env.BASE_URL}images/${filename}`;
}

// ── Category meta ──────────────────────────────────────────
const CATEGORY_META = {
  "Corporate Branding": {
    icon: "🏢",
    description: "Complete brand identity systems, stationery, office interiors, and corporate collateral."
  },
  "Signage Solutions": {
    icon: "🪧",
    description: "Custom signage from channel letters to monument signs, wayfinding, and displays."
  },
  "Vehicle Branding": {
    icon: "🚛",
    description: "Full and partial vehicle wraps, fleet graphics, and vinyl lettering."
  },
  "Large Format Printing": {
    icon: "🖼️",
    description: "Billboards, banners, murals, trade show graphics, and large-scale prints."
  },
  "Printing Services": {
    icon: "🖨️",
    description: "Premium business cards, brochures, flyers, stickers, and labels."
  },
  "Apparel & Promotional Branding": {
    icon: "👕",
    description: "Custom branded apparel, caps, uniforms, and promotional merchandise."
  },
  "Gondola Branding": {
    icon: "🛒",
    description: "In-store gondola displays, shelf talkers, end-caps, and retail branding."
  },
  "Pop Up Banners": {
    icon: "🏴",
    description: "Retractable and pop-up banner stands for events and retail."
  },
  "Photo Frames": {
    icon: "🖼️",
    description: "Custom photo frames in wood, acrylic, metal, and digital formats."
  },
  "Snapper Frames": {
    icon: "🔄",
    description: "Quick-change snapper frame systems for posters and graphics."
  },
  "Magnetic Stickers": {
    icon: "🧲",
    description: "Custom die-cut magnetic stickers for removable surface branding."
  }
};

const CATEGORY_SUMMARIES = {
  "Corporate Branding": "Brand identity & office collateral",
  "Signage Solutions": "Signage, wayfinding & displays",
  "Vehicle Branding": "Vehicle wraps & fleet graphics",
  "Large Format Printing": "Billboards, banners & murals",
  "Printing Services": "Business cards, brochures & labels",
  "Apparel & Promotional Branding": "Branded apparel & merchandise",
  "Gondola Branding": "Retail gondola & shelf displays",
  "Pop Up Banners": "Retractable banners & stands",
  "Photo Frames": "Custom photo frame solutions",
  "Snapper Frames": "Quick-change frame systems",
  "Magnetic Stickers": "Removable magnetic branding"
};

function Portfolio({ items, bgImage }) {
  const backgroundStyle = bgImage ? {
    backgroundImage: `url(${import.meta.env.BASE_URL}images/${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } : {};

  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("categories"); // "categories" | "items"
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const gridRef = useRef(null);

  // ── Derived data ──────────────────────────────────────
  const filters = useMemo(() => {
    const categories = [...new Set(items.map((item) => item.category))];
    return ["All", ...categories];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  // Group items by category for the category grid
  const categoryGroups = useMemo(() => {
    const groups = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  // Get the first image for a category (for the category card thumbnail)
  function getCategoryThumbnail(category) {
    const catItems = categoryGroups[category] || [];
    const firstImage = catItems.find((item) => item.type === "image");
    return firstImage ? firstImage.media_url : null;
  }

  function getCategoryItemCount(category) {
    return (categoryGroups[category] || []).length;
  }

  // Items for the currently selected category
  const categoryItems = useMemo(() => {
    if (!activeCategory) return [];
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  // ── Handlers ──────────────────────────────────────────
  function handleCategoryClick(category) {
    setActiveCategory(category);
    setViewMode("items");
    // Scroll to top of grid when entering category
    setTimeout(() => {
      if (gridRef.current) {
        const yOffset = -100;
        const y = gridRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  }

  function handleBackToCategories() {
    setActiveCategory(null);
    setViewMode("categories");
  }

  // Scroll to grid when filter changes
  useEffect(() => {
    if (gridRef.current && activeFilter !== "All") {
      const yOffset = -100;
      const element = gridRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeFilter]);

  // ── Render helpers ────────────────────────────────────
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

  // ── Category Card ─────────────────────────────────────
  function renderCategoryCard(category) {
    const thumbnail = getCategoryThumbnail(category);
    const count = getCategoryItemCount(category);
    const meta = CATEGORY_META[category] || { icon: "📦", description: "" };
    const summary = CATEGORY_SUMMARIES[category] || category;

    return (
      <div
        key={category}
        role="button"
        onClick={() => handleCategoryClick(category)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCategoryClick(category); }}
        tabIndex={0}
        className="group flex flex-col rounded-2xl border border-yellow/20 bg-black/60 backdrop-blur-sm text-left transition-all duration-300 hover:border-gold hover:bg-black/80 overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1"
      >
        {/* Thumbnail */}
        <div className="w-full h-48 bg-black overflow-hidden relative">
          {thumbnail ? (
            <img
              src={getMediaUrl(thumbnail)}
              alt={`${category} category`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl opacity-30">{meta.icon}</span>
            </div>
          )}
          {/* Overlay with item count */}
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gold font-bold border border-yellow/30">
            {count} {count === 1 ? "item" : "items"}
          </div>
          {/* Icon overlay */}
          <div className="absolute top-3 left-3 text-2xl opacity-80">{meta.icon}</div>
        </div>
        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-heading uppercase tracking-[0.08em] text-gold font-bold">
            {category}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold/50">{summary}</p>
          <p className="mt-3 text-sm text-gold/60 line-clamp-2">{meta.description}</p>
          <span className="mt-4 text-xs uppercase tracking-[0.3em] text-gold/40 group-hover:text-gold transition-colors">
            Browse {count} {count === 1 ? "item" : "items"} →
          </span>
        </div>
      </div>
    );
  }

  // ── Item Card ─────────────────────────────────────────
  function renderItemCard(item) {
    return (
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
            View Details
          </span>
        </div>
      </div>
    );
  }

  // ── Categories Grid View ───────────────────────────────
  function renderCategoriesView() {
    const categories = Object.keys(categoryGroups);

    if (categories.length === 0) {
      return (
        <div className="mt-12 text-center py-20">
          <p className="text-gold/50 text-lg">No categories match the current filter.</p>
        </div>
      );
    }

    return (
      <>
        <p className="mt-4 text-sm text-gold/50 text-center">
          Browse our portfolio by solution type. Click any category to view all items within.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => renderCategoryCard(category))}
        </div>
      </>
    );
  }

  // ── Items Grid View ────────────────────────────────────
  function renderItemsView() {
    if (categoryItems.length === 0) {
      return (
        <div className="mt-12 text-center py-20">
          <p className="text-gold/50 text-lg">No items found in this category.</p>
        </div>
      );
    }

    return (
      <>
        {/* Breadcrumb / Back navigation */}
        <div className="mt-6 flex items-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={handleBackToCategories}
            className="interactive-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] border border-yellow/30 text-gold/70 hover:border-yellow hover:text-gold transition"
          >
            ← All Categories
          </button>
          <span className="text-gold/30 text-sm">/</span>
          <span className="text-sm uppercase tracking-[0.2em] text-gold font-bold">{activeCategory}</span>
          <span className="text-gold/40 text-xs">
            ({categoryItems.length} {categoryItems.length === 1 ? "item" : "items"})
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {categoryItems.map((item) => renderItemCard(item))}
        </div>
      </>
    );
  }

  // ── Main Render ────────────────────────────────────────
  return (
    <section id="portfolio" className="border-t border-yellow/20 section-bg py-20 relative" style={backgroundStyle}>
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 bg-black/70 backdrop-blur-sm rounded-2xl p-6 -mx-6 border border-yellow/15">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold font-semibold drop-shadow-sm animate-pulse-slow">Portfolio</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.08em] md:text-5xl font-bold drop-shadow-sm text-gold">
              Evidence of execution.
            </h2>
            {viewMode === "items" && activeCategory && (
              <p className="mt-2 text-sm text-gold/60">
                Viewing: <span className="text-gold font-bold">{activeCategory}</span>
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  // If we're in items view and the category doesn't match the filter, go back to categories
                  if (viewMode === "items" && activeCategory && filter !== "All" && filter !== activeCategory) {
                    setViewMode("categories");
                    setActiveCategory(null);
                  }
                }}
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

        {/* Content Grid */}
        <div ref={gridRef}>
          {viewMode === "categories" ? renderCategoriesView() : renderItemsView()}
        </div>
      </div>

      {/* Lightbox Modal */}
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
              <h3 className="text-2xl font-heading uppercase tracking-[0.08em] text-gold font-bold mt-4">
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

