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

const portfolioItems = [
  // Corporate Branding
  {
    id: 1,
    title: "Atlas Capital HQ",
    category: "Production",
    summary: "Lobby environmental branding and premium wayfinding system.",
    image_url: "https://picsum.photos/seed/atlas/800/500"
  },
  // Signage Solutions
  {
    id: 2,
    title: "Northbridge Rebrand",
    category: "Branding",
    summary: "Complete identity refresh with global rollout toolkit.",
    image_url: "https://picsum.photos/seed/northbridge/800/500"
  },
  // Vehicle Branding
  {
    id: 3,
    title: "Skyline Pavilion",
    category: "Civil Works",
    summary: "Large-format structural signage and steel fabrication.",
    image_url: "https://picsum.photos/seed/skyline/800/500"
  },
  // Large Format Printing
  {
    id: 4,
    title: "Aurora Campaign",
    category: "Agency",
    summary: "Cross-agency collaboration for a national campaign launch.",
    image_url: "https://picsum.photos/seed/aurora/800/500"
  },
  // Printing Services
  {
    id: 5,
    title: "Vantage Studio",
    category: "Production",
    summary: "Immersive showroom experience with audio-visual integration.",
    image_url: "https://picsum.photos/seed/vantage/800/500"
  },
  // Apparel & Promotional Branding
  {
    id: 6,
    title: "Lumen District",
    category: "Civil Works",
    summary: "Public-facing identity with architectural lighting accents.",
    image_url: "https://picsum.photos/seed/lumen/800/500"
  }
];

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
