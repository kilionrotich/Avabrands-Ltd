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
    title: "Corporate Branding",
    category: "Corporate Branding",
    summary: "Logo design and brand identity development, office interior and exterior branding, wall branding and frosted window graphics, reception and lobby branding.",
    images: [
      { video_name: "Corporate branding.mp4", description: "Corporate branding showcase video" },
      { image_name: "corporate-branding-1.jpeg.jpeg", description: "Corporate brand identity execution" },
      { image_name: "corporate-branding-2.jpeg.jpeg", description: "Office interior branding showcase" },
      { image_name: "corporate-branding-3.jpeg.jpeg", description: "Wall branding and window graphics" },
      { image_name: "corporate-branding-4.jpeg.jpeg", description: "Reception and lobby branding" },
      { image_name: "corporate-branding-5.jpeg.jpeg", description: "Complete corporate brand implementation" },
      { image_name: "corporate branding.jpeg.jpeg", description: "Corporate branding hero visual" },
      { image_name: "corporate branding6.jpeg.jpeg", description: "Corporate identity workspace application" },
      { image_name: "corporate branding7.jpeg.jpeg", description: "Brand-guided office graphics" },
      { image_name: "corporate branding8.jpeg.jpeg", description: "Corporate signage and graphics" },
      { image_name: "corporate banding8.jpeg.jpeg", description: "Corporate branding variant installation" },
      { image_name: "corporate branding9.jpeg.jpeg", description: "Executive office branding touchpoint" },
      { image_name: "corporate branding10.jpeg.jpeg", description: "Premium corporate wall branding" },
      { image_name: "corporate branding11.jpeg.jpeg", description: "Corporate visual system deployment" },
      { image_name: "corporate branding12.jpeg.jpeg", description: "Interior corporate brand execution" },
      { image_name: "corporate branding13.jpeg.jpeg", description: "Corporate identity signage finish" },
      { image_name: "corporate branding14.jpeg.jpeg", description: "Corporate office brand application" },
      { image_name: "corporate branding15.jpeg.jpeg", description: "Branded workspace execution" },
      { image_name: "corporate branding16.jpeg.jpeg", description: "Premium interior corporate graphics" },
      { image_name: "corporate branding17 (1).jpeg", description: "Corporate branding installation detail" },
      { image_name: "corporate branding18 (2).jpeg", description: "Final corporate brand finish" }
    ]
  },
  // Signage Solutions
  {
    id: 2,
    title: "Signage Solutions",
    category: "Signage Solutions",
    summary: "3D illuminated signs, shopfront signage, directional and safety signs, billboards and outdoor advertising boards, LED and lightbox signs.",
    images: [
      { image_name: "signage solutions1.jpeg.jpeg", description: "Signage solution installation" },
      { image_name: "signage solutions2.jpeg.jpeg", description: "Shopfront signage execution" },
      { image_name: "signage solutions3.jpeg.jpeg", description: "Illuminated signage detail" },
      { image_name: "signage solution4.jpeg.jpeg", description: "Directional and safety signage" },
      { image_name: "signage solutions5.jpeg.jpeg", description: "Wayfinding signage execution" },
      { image_name: "signage solution6.jpeg.jpeg", description: "Lightbox signage installation" },
      { image_name: "signage solutions 7.jpeg.jpeg", description: "Outdoor signage display" },
      { image_name: "signage solutions8.jpeg.jpeg", description: "Signage detailing and finish" },
      { image_name: "signage solutions9.jpeg.jpeg", description: "Commercial signage placement" },
      { image_name: "signage solutions10.jpeg.jpeg", description: "Street-facing signage rollout" },
      { image_name: "signage solutions11.jpeg.jpeg", description: "Brand-compliant safety signage" },
      { image_name: "Signage solutions12.jpeg.jpeg", description: "Large signage fabrication" },
      { image_name: "signage solutions13 (1).jpeg", description: "Illuminated sign face detail" },
      { image_name: "signage solutions14.jpeg.jpeg", description: "Building frontage signage" },
      { image_name: "signage solutions15.jpeg.jpeg", description: "Directional signage complete view" },
      { image_name: "signage solutions16.jpeg.jpeg", description: "Installed wayfinding panel" },
      { image_name: "signage solution17.jpeg.jpeg", description: "Final installed signage showcase" }
    ]
  },
  // Vehicle Branding
  {
    id: 3,
    title: "Vehicle Branding",
    category: "Vehicle Branding",
    summary: "Full car wraps, partial vehicle branding, fleet branding, reflective and commercial vehicle graphics for complete brand visibility on wheels.",
    images: [
      { image_name: "vehicle branding1.jpeg.jpeg", description: "Vehicle wrap and fleet branding" },
      { image_name: "vehicle branding2.jpeg.jpeg", description: "Commercial vehicle side branding" },
      { image_name: "vehicle branding3.jpeg.jpeg", description: "Branded fleet consistency" },
      { image_name: "vehicle branding4.jpeg.jpeg", description: "Reflective branding details" },
      { image_name: "vehicle branding5.jpeg.jpeg", description: "Partial vehicle branding" },
      { image_name: "vehicle branding6.jpeg.jpeg", description: "Fleet branding application" },
      { image_name: "vehicle branding7.jpeg.jpeg", description: "Final vehicle branding showcase" },
      { image_name: "vehicle branding8.jpeg.jpeg", description: "Vehicle branding side profile" },
      { image_name: "vehicle branding9.jpeg.jpeg", description: "Vehicle branding wrap detail" },
      { image_name: "vehicle branding10.jpeg.jpeg", description: "Fleet branding installation" },
      { image_name: "vehicle branding11.jpeg.jpeg", description: "Completed vehicle branding rollout" }
    ]
  },
  // Large Format Printing
  {
    id: 4,
    title: "Large Format Printing",
    category: "Large Format Printing",
    summary: "Banners and roll-up banners, posters and promotional displays, exhibition stands and backdrops with high-quality large-scale printing solutions.",
    images: [
      { video_name: "Large format printing.mp4", description: "Large format printing process video" },
      { image_name: "large format printing1.jpeg.jpeg", description: "Large format banners and backdrops" },
      { image_name: "large format printing2.jpeg.jpeg", description: "Promotional display print" },
      { image_name: "large format printing3.jpeg.jpeg", description: "High-impact poster print" },
      { image_name: "large format printing4.jpeg.jpeg", description: "Exhibition panel output" },
      { image_name: "large format printing5.jpeg.jpeg", description: "Roll-up banner production" },
      { image_name: "large format printing6.jpeg.jpeg", description: "Outdoor large print execution" },
      { image_name: "large format printing7.jpeg.jpeg", description: "Backdrop production finish" },
      { image_name: "large format printing8.jpeg.jpeg", description: "Branded stand graphics" },
      { image_name: "large format printing9.jpeg.jpeg", description: "In-store display graphics" },
      { image_name: "Large format printing10.jpeg.jpeg", description: "Wide-format campaign output" },
      { image_name: "large format printing11.jpeg.jpeg", description: "Promo wall panel print" },
      { image_name: "large format printing12.jpeg.jpeg", description: "Detailed banner finishing" },
      { image_name: "large format printing13.jpeg.jpeg", description: "Premium substrate print" },
      { image_name: "large format printing14.jpeg.jpeg", description: "Brand event graphics" },
      { image_name: "large format printing15.jpeg.jpeg", description: "Large format installation preview" },
      { image_name: "large format printing16.jpeg.jpeg", description: "Completed large format rollout" },
      { image_name: "Large format printing17.jpeg.jpeg", description: "Large format finishing detail" },
      { image_name: "Large format printing18.jpeg.jpeg", description: "Large format campaign output" }
    ]
  },
  // Printing Services
  {
    id: 5,
    title: "Printing Services",
    category: "Printing Services",
    summary: "Business cards and corporate stationery, brochures, catalogues, and company profiles, flyers and marketing materials, receipt books and branded documentation.",
    images: [
      { image_name: "printing services3.jpeg.jpeg", description: "Printed marketing and stationery set" },
      { image_name: "printing services4.jpeg.jpeg", description: "Corporate profile print materials" },
      { image_name: "printing services5.jpeg.jpeg", description: "Business stationery printing" }
    ]
  },
  // Apparel & Promotional Branding
  {
    id: 6,
    title: "Apparel & Promotional Branding",
    category: "Apparel & Promotional Branding",
    summary: "Branded t-shirts and uniforms, caps and reflective jackets, corporate gifts and promotional merchandise with high-quality materials and modern creative designs.",
    images: [
      { image_name: "Apparel & promotional branding1.jpeg.jpeg", description: "Branded political party caps" },
      { image_name: "Apparel & promotional branding2.jpeg.jpeg", description: "Branded caps" },
      { image_name: "Apparel & promotional branding3.jpeg.jpeg", description: "Different colored caps" },
      { image_name: "Apparel & promotional branding4.jpeg.jpeg", description: "Caps" },
      { image_name: "Apparel & promotional branding5.jpeg.jpeg", description: "Promotional branding showcase" },
      { image_name: "Apparel promotion 9.jpeg.jpeg", description: "Promotional branding display" },
      { image_name: "Apparell and branding 10.jpeg.jpeg", description: "Apparel and branding showcase" },
      { image_name: "Apparell branding and promotion 6.jpeg.jpeg", description: "Branded apparel promotion" },
      { image_name: "Apparell promotion and branding.jpeg.jpeg", description: "Promotional branding detail" },
      { image_name: "Apparell promotion and branding 7.jpeg.jpeg", description: "Apparel promotion execution" },
      { image_name: "Apparell promotion and branding8.jpeg.jpeg", description: "Promotional apparel setup" },
      { image_name: "Apparell promotion and branding12.jpeg.jpeg", description: "Branding and promotion finish" },
      { image_name: "Apparel & promotional branding12.jpeg.jpeg", description: "Branded plastic tins" },
      { image_name: "Apparel & promotional branding13.jpeg.jpeg", description: "Beauty products showcase" }
    ]
  },
  {
    id: 7,
    title: "Pop Up Banners",
    category: "Pop Up Banners",
    summary: "Portable branded pop-up and roll-up banner systems for events, promotions, and point-of-sale visibility.",
    images: [
      { image_name: "pop up banners1.jpeg.jpeg", description: "Pop up banner display" },
      { image_name: "pop up banners2.jpeg.jpeg", description: "Roll-up banner branding" }
    ]
  },
  {
    id: 8,
    title: "Photo Frames",
    category: "Photo Frames",
    summary: "Branded and promotional display photo frames for office, event, and experiential brand setups.",
    images: [
      { image_name: "Photo frames1.jpeg.jpeg", description: "Branded photo frame display" },
      { image_name: "photo frames2.jpeg.jpeg", description: "Photo frame branding concept" },
      { image_name: "photo frames3.jpeg.jpeg", description: "Photo frame display detail" },
      { image_name: "photo frames4.jpeg.jpeg", description: "Photo frame branding finish" },
      { image_name: "photo frames5.jpeg.jpeg", description: "Photo frame installation" },
      { image_name: "photo frames6.jpeg.jpeg", description: "Photo frame showcase" }
    ]
  },
  {
    id: 9,
    title: "Snapper Frames",
    category: "Snapper Frames",
    summary: "Quick-change snapper frame signage for retail, corporate notices, and campaign posters.",
    images: [
      { image_name: "snapper frames1.jpeg.jpeg", description: "Snapper frame installation" }
    ]
  },
  {
    id: 10,
    title: "Magnetic Stickers",
    category: "Magnetic Stickers",
    summary: "Custom magnetic sticker branding solutions for vehicles, appliances, and temporary promotional needs.",
    images: [
      { image_name: "magnetic stickers.jpeg.jpeg", description: "Custom magnetic sticker branding" }
    ]
  },
  {
    id: 11,
    title: "Gondola Branding",
    category: "Gondola Branding",
    summary: "Retail shelf and gondola branding solutions designed to improve visibility, guide shoppers, and elevate in-store campaigns.",
    images: [
      { image_name: "Gondola branding.jpeg", description: "Gondola branding retail display" },
      { image_name: "Gondola brandings1.jpeg.jpeg", description: "Primary gondola branding setup" },
      { image_name: "Gondola branding2.jpeg.jpeg", description: "Gondola shelving brand panel" },
      { image_name: "Gondola branding3.jpeg.jpeg", description: "In-aisle gondola branding view" },
      { image_name: "Gondola branding4.jpeg.jpeg", description: "Gondola side panel branding" },
      { image_name: "Gondola branding5.jpeg.jpeg", description: "Promotional gondola feature" },
      { image_name: "Gondola branding6.jpeg.jpeg", description: "Retail gondola campaign installation" },
      { image_name: "Gondola branding7.jpeg.jpeg", description: "Product bay gondola branding" },
      { image_name: "Gondola branding8.jpeg.jpeg", description: "Aisle gondola visual execution" },
      { image_name: "Gondola branding9.jpeg.jpeg", description: "Completed gondola branding rollout" }
    ]
  },
  {
    id: 12,
    title: "Web Development",
    category: "Web Development",
    summary: "Custom websites, dashboards, and web applications built for performance, scalability, and measurable business outcomes. Project visuals will be added soon.",
    images: []
  },
  {
    id: 13,
    title: "Android Development",
    category: "Android Development",
    summary: "Business-ready Android applications with robust architecture, smooth user experience, and secure API integrations. Project visuals will be added soon.",
    images: []
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
    <div className="bg-[#26C6DA] text-teal-primary">
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
