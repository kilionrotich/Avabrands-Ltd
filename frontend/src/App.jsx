import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Partnerships from "./components/Partnerships.jsx";
import Portfolio from "./components/Portfolio.jsx";
import DigitalStudio from "./components/DigitalStudio.jsx";
import Rfq from "./components/Rfq.jsx";
import News from "./components/News.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Get pairs of images for sections
const getImagePairs = (images) => {
  const pairs = [];
  for (let i = 0; i < images.length; i += 2) {
    pairs.push([images[i], images[i + 1] || images[i]]);
  }
  return pairs;
};

const services = [
  {
    title: "Branding Strategy",
    description: "Positioning, identity systems, and brand governance that scale across markets."
  },
  {
    title: "Production Excellence",
    description: "End-to-end production for experiential, digital, and physical brand assets."
  },
  {
    title: "Civil Works",
    description: "Environmental branding, signage, and structural brand implementation."
  },
  {
    title: "Agency Collaboration",
    description: "Partnering with agencies to deliver global-ready brand rollouts."
  }
];

// ──────────────────────────────────────────────
// All media files classified by category
// ──────────────────────────────────────────────
const mediaCatalog = {
  "Corporate Branding": {
    images: [
      "corporate branding.jpeg.jpeg",
      "corporate branding6.jpeg.jpeg",
      "corporate branding7.jpeg.jpeg",
      "corporate branding8.jpeg.jpeg",
      "corporate branding9.jpeg.jpeg",
      "corporate branding10.jpeg.jpeg",
      "corporate branding11.jpeg.jpeg",
      "corporate branding12.jpeg.jpeg",
      "corporate branding13.jpeg.jpeg",
      "corporate branding14.jpeg.jpeg",
      "corporate branding15.jpeg.jpeg",
      "corporate branding16.jpeg.jpeg",
      "corporate branding17 (1).jpeg",
      "corporate branding18 (2).jpeg",
      "corporate-branding-1.jpeg.jpeg",
      "corporate-branding-2.jpeg.jpeg",
      "corporate-branding-3.jpeg.jpeg",
      "corporate-branding-4.jpeg.jpeg",
      "corporate-branding-5.jpeg.jpeg",
      "corporate banding8.jpeg.jpeg"
    ],
    videos: ["Corporate branding.mp4"]
  },
  "Signage Solutions": {
    images: [
      "signage solution4.jpeg.jpeg",
      "signage solution6.jpeg.jpeg",
      "signage solution17.jpeg.jpeg",
      "signage solutions 7.jpeg.jpeg",
      "signage solutions1.jpeg.jpeg",
      "signage solutions2.jpeg.jpeg",
      "signage solutions3.jpeg.jpeg",
      "signage solutions5.jpeg.jpeg",
      "signage solutions8.jpeg.jpeg",
      "signage solutions9.jpeg.jpeg",
      "signage solutions10.jpeg.jpeg",
      "signage solutions11.jpeg.jpeg",
      "Signage solutions12.jpeg.jpeg",
      "signage solutions13 (1).jpeg",
      "signage solutions14.jpeg.jpeg",
      "signage solutions15.jpeg.jpeg",
      "signage solutions16.jpeg.jpeg"
    ],
    videos: []
  },
  "Vehicle Branding": {
    images: [
      "vehicle branding1.jpeg.jpeg",
      "vehicle branding2.jpeg.jpeg",
      "vehicle branding3.jpeg.jpeg",
      "vehicle branding4.jpeg.jpeg",
      "vehicle branding5.jpeg.jpeg",
      "vehicle branding6.jpeg.jpeg",
      "vehicle branding7.jpeg.jpeg",
      "vehicle branding8.jpeg.jpeg",
      "vehicle branding9.jpeg.jpeg",
      "vehicle branding10.jpeg.jpeg",
      "vehicle branding11.jpeg.jpeg"
    ],
    videos: []
  },
  "Large Format Printing": {
    images: [
      "large format printing1.jpeg.jpeg",
      "large format printing2.jpeg.jpeg",
      "large format printing3.jpeg.jpeg",
      "large format printing4.jpeg.jpeg",
      "large format printing5.jpeg.jpeg",
      "large format printing6.jpeg.jpeg",
      "large format printing7.jpeg.jpeg",
      "large format printing8.jpeg.jpeg",
      "large format printing9.jpeg.jpeg",
      "Large format printing10.jpeg.jpeg",
      "large format printing11.jpeg.jpeg",
      "large format printing12.jpeg.jpeg",
      "large format printing13.jpeg.jpeg",
      "large format printing14.jpeg.jpeg",
      "large format printing15.jpeg.jpeg",
      "large format printing16.jpeg.jpeg",
      "Large format printing17.jpeg.jpeg",
      "Large format printing18.jpeg.jpeg"
    ],
    videos: ["Large format printing.mp4"]
  },
  "Printing Services": {
    images: [
      "printing services3.jpeg.jpeg",
      "printing services4.jpeg.jpeg",
      "printing services5.jpeg.jpeg"
    ],
    videos: []
  },
  "Apparel & Promotional Branding": {
    images: [
      "Apparel & promotional branding1.jpeg.jpeg",
      "Apparel & promotional branding2.jpeg.jpeg",
      "Apparel & promotional branding3.jpeg.jpeg",
      "Apparel & promotional branding4.jpeg.jpeg",
      "Apparel & promotional branding5.jpeg.jpeg",
      "Apparel & promotional branding12.jpeg.jpeg",
      "Apparel & promotional branding13.jpeg.jpeg",
      "Apparel promotion 9.jpeg.jpeg",
      "Apparell and branding 10.jpeg.jpeg",
      "Apparell branding and promotion 6.jpeg.jpeg",
      "Apparell promotion and branding 7.jpeg.jpeg",
      "Apparell promotion and branding.jpeg.jpeg",
      "Apparell promotion and branding8.jpeg.jpeg",
      "Apparell promotion and branding12.jpeg.jpeg"
    ],
    videos: []
  },
  "Gondola Branding": {
    images: [
      "Gondola branding.jpeg",
      "Gondola branding2.jpeg.jpeg",
      "Gondola branding3.jpeg.jpeg",
      "Gondola branding4.jpeg.jpeg",
      "Gondola branding5.jpeg.jpeg",
      "Gondola branding6.jpeg.jpeg",
      "Gondola branding7.jpeg.jpeg",
      "Gondola branding8.jpeg.jpeg",
      "Gondola branding9.jpeg.jpeg",
      "Gondola brandings1.jpeg.jpeg"
    ],
    videos: []
  },
  "Pop Up Banners": {
    images: [
      "pop up banners1.jpeg.jpeg",
      "pop up banners2.jpeg.jpeg"
    ],
    videos: []
  },
  "Photo Frames": {
    images: [
      "Photo frames1.jpeg.jpeg",
      "photo frames2.jpeg.jpeg",
      "photo frames3.jpeg.jpeg",
      "photo frames4.jpeg.jpeg",
      "photo frames5.jpeg.jpeg",
      "photo frames6.jpeg.jpeg"
    ],
    videos: []
  },
  "Snapper Frames": {
    images: [
      "snapper frames1.jpeg.jpeg"
    ],
    videos: []
  },
  "Magnetic Stickers": {
    images: [
      "magnetic stickers.jpeg.jpeg"
    ],
    videos: []
  }
};

// Build a flat portfolio items list from the catalog
function buildPortfolioItems(catalog) {
  const items = [];
  let id = 1;
  for (const [category, media] of Object.entries(catalog)) {
    // — images —
    media.images.forEach((url, idx) => {
      items.push({
        id: id++,
        title: `${category} ${idx + 1}`,
        category,
        summary: `${category} project showcase.`,
        type: "image",
        media_url: url
      });
    });
    // — videos —
    media.videos.forEach((url) => {
      items.push({
        id: id++,
        title: `${category} — Video`,
        category,
        summary: `${category} showreel / walkthrough.`,
        type: "video",
        media_url: url
      });
    });
  }
  return items;
}

const portfolioItems = buildPortfolioItems(mediaCatalog);

const latestImages = [
  "corporate branding10.jpeg.jpeg",
  "signage solutions14.jpeg.jpeg",
  "vehicle branding2.jpeg.jpeg",
  "large format printing5.jpeg.jpeg",
  "printing services3.jpeg.jpeg",
  "Apparel & promotional branding2.jpeg.jpeg",
  "pop up banners2.jpeg.jpeg",
  "signage solution6.jpeg.jpeg",
  "corporate branding15.jpeg.jpeg",
  "vehicle branding7.jpeg.jpeg",
  "large format printing14.jpeg.jpeg",
  "snapper frames1.jpeg.jpeg",
  "Photo frames1.jpeg.jpeg",
  "magnetic stickers.jpeg.jpeg",
  "corporate branding17 (1).jpeg",
  "signage solutions16.jpeg.jpeg"
];

const newsPosts = [
  {
    id: 1,
    title: "Studio Roundup: New Work Across Brand Touchpoints",
    excerpt: "A quick look at recent rollouts spanning signage, print, and promotional branding.",
    date: "Feb 21, 2026",
    content: [
      "Over the past month, our studio completed multi-format deployments for retail, service, and events clients, including storefront signage, vehicle wraps, product labels, and high-turnaround promotional kits.",
      "What made these projects successful was alignment across channels: color consistency, messaging hierarchy, and practical install-ready outputs that reduced back-and-forth during production.",
      "We are now packaging these learnings into a repeatable rollout checklist so brand managers can launch new campaigns faster while keeping every touchpoint visually coherent."
    ]
  },
  {
    id: 2,
    title: "From Concept to Install: How We Keep Projects Moving",
    excerpt: "Our studio process for fast, consistent delivery across multiple locations.",
    date: "Feb 10, 2026",
    content: [
      "Every project begins with a discovery brief that captures objective, environment, dimensions, and durability requirements. This allows us to avoid redesign loops and approve practical concepts earlier.",
      "After concept sign-off, we move into a production map with milestones for artwork finalization, proofing, print windows, and installation scheduling. Clients get one clear timeline with decision points highlighted.",
      "For multi-site rollouts, we standardize specs and handoff packs so each location receives the same quality output. The result is fewer delays, cleaner installation, and more predictable campaign launches."
    ]
  },
  {
    id: 3,
    title: "Material Matters: Finishes That Elevate Brand Presence",
    excerpt: "Why quality substrates and precision finishing make the difference on-site.",
    date: "Jan 29, 2026",
    content: [
      "A strong design can still underperform if materials are mismatched to the environment. We evaluate UV exposure, traffic level, cleaning frequency, and expected lifespan before locking substrate recommendations.",
      "For indoor brand visibility, matte and satin finishes help reduce glare while preserving color clarity. For outdoor assets, lamination and weather-resistant films protect both impact and legibility over time.",
      "Precision finishing, from trim accuracy to edge sealing, is what makes final outputs feel premium. These small details improve durability and preserve the brand impression long after installation day."
    ]
  }
];

function App() {
  const savedThemeMode = localStorage.getItem("avabrands-theme-mode");
  const [themeMode, setThemeMode] = useState(() => {
    if (savedThemeMode === "light" || savedThemeMode === "dark" || savedThemeMode === "system") {
      return savedThemeMode;
    }
    return "light";
  });

  // System mode is intentionally mapped to light mode by product decision.
  const theme = themeMode === "dark" ? "dark" : "light";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("avabrands-theme-mode", themeMode);
  }, [themeMode]);

  const handleThemeModeChange = (nextMode) => {
    setThemeMode(nextMode);
  };

  const shuffledImages = [...latestImages].sort(() => Math.random() - 0.5);
  const imagePairs = getImagePairs(shuffledImages);
  
  return (
    <div className="bg-black text-gold min-h-screen">
      <Header themeMode={themeMode} onThemeModeChange={handleThemeModeChange} />
      <Hero bgImage={shuffledImages[0]} />
      <Services services={services} bgImages={imagePairs[0]} />
      <TrustStrip />
      <Partnerships />
      <Portfolio items={portfolioItems} bgImage={shuffledImages[1]} />
      <DigitalStudio />
      <Rfq bgImages={imagePairs[1]} />
      <News posts={newsPosts} bgImages={imagePairs[2]} />
      <Contact bgImages={imagePairs[3]} />
      <Footer />
    </div>
  );
}

export default App;
