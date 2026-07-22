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
// All media files classified by category with descriptive names
// ──────────────────────────────────────────────
const mediaCatalog = {
  "Corporate Branding": {
    images: [
      { file: "corporate branding.jpeg.jpeg", title: "Executive Brand Identity Suite", summary: "Complete corporate identity package including letterhead, business cards, and brand stationery." },
      { file: "corporate branding6.jpeg.jpeg", title: "Corporate Office Branding", summary: "Full-office brand rollout with wall graphics, reception signage, and branded workstations." },
      { file: "corporate branding7.jpeg.jpeg", title: "Brand Guideline Collateral", summary: "Comprehensive brand guideline documentation for consistent corporate identity management." },
      { file: "corporate branding8.jpeg.jpeg", title: "Corporate Stationery Set", summary: "Premium branded stationery set including compliment slips, envelopes, and note pads." },
      { file: "corporate branding9.jpeg.jpeg", title: "Office Interior Branding", summary: "Interior office branding solution with wall murals and corporate color integration." },
      { file: "corporate branding10.jpeg.jpeg", title: "Reception Brand Wall", summary: "Feature reception wall with dimensional lettering and backlit brand logo installation." },
      { file: "corporate branding11.jpeg.jpeg", title: "Conference Room Branding", summary: "Boardroom and conference space branding with acoustic panel integration." },
      { file: "corporate branding12.jpeg.jpeg", title: "Branded Wayfinding System", summary: "Internal wayfinding signage system for corporate office navigation." },
      { file: "corporate branding13.jpeg.jpeg", title: "Corporate Identity Cards", summary: "Custom designed and printed corporate ID cards and access badges." },
      { file: "corporate branding14.jpeg.jpeg", title: "Brand Merchandise Display", summary: "Corporate branded merchandise display unit for reception areas." },
      { file: "corporate branding15.jpeg.jpeg", title: "Executive Desk Branding", summary: "Premium desk nameplates and desktop branding solutions for executives." },
      { file: "corporate branding16.jpeg.jpeg", title: "Corporate Lobby Branding", summary: "Full lobby transformation with branded feature walls and directional signage." },
      { file: "corporate branding17 (1).jpeg", title: "Brand Launch Event Collateral", summary: "Event-specific branding collateral for corporate product launches and announcements." },
      { file: "corporate branding18 (2).jpeg", title: "Departmental Signage System", summary: "Department identification and directional signage system for large offices." },
      { file: "corporate-branding-1.jpeg.jpeg", title: "Corporate Brochure Suite", summary: "Tri-fold brochure suite showcasing company services and brand positioning." },
      { file: "corporate-branding-2.jpeg.jpeg", title: "Brand Presentation Folder", summary: "Premium presentation folders with foil-stamped branding for client meetings." },
      { file: "corporate-branding-3.jpeg.jpeg", title: "Corporate Report Design", summary: "Annual report layout with consistent brand typography and color system." },
      { file: "corporate-branding-4.jpeg.jpeg", title: "Branded Notepad Collection", summary: "Custom notepad collection with embossed brand logo and corporate colors." },
      { file: "corporate-branding-5.jpeg.jpeg", title: "Corporate Gift Packaging", summary: "Branded gift packaging and unboxing experience for corporate gifting." },
      { file: "corporate banding8.jpeg.jpeg", title: "Office Accessory Branding", summary: "Branded office accessories including mugs, pens, and desk organizers." }
    ],
    videos: [{ file: "Corporate branding.mp4", title: "Corporate Branding Showreel", summary: "Showreel showcasing our corporate branding projects and transformations." }]
  },
  "Signage Solutions": {
    images: [
      { file: "signage solution4.jpeg.jpeg", title: "LED Channel Letter Sign", summary: "Illuminated channel letter signage with LED backlighting for storefront visibility." },
      { file: "signage solution6.jpeg.jpeg", title: "Acrylic Directional Sign", summary: "Premium acrylic directional signage with frosted finish and UV-printed graphics." },
      { file: "signage solution17.jpeg.jpeg", title: "Monument Sign Installation", summary: "Large-scale monument sign with stone cladding and illuminated brand logo." },
      { file: "signage solutions 7.jpeg.jpeg", title: "Pylon Sign Structure", summary: "Double-sided pylon sign structure for high-visibility roadside advertising." },
      { file: "signage solutions1.jpeg.jpeg", title: "Retail Storefront Signage", summary: "Custom retail storefront signage with aluminum composite panel construction." },
      { file: "signage solutions2.jpeg.jpeg", title: "Illuminated Lightbox Sign", summary: "Edge-lit lightbox sign with vibrant full-color graphic face and aluminum frame." },
      { file: "signage solutions3.jpeg.jpeg", title: "Window Graphic Installation", summary: "Perforated window graphic installation with one-way vision print for privacy." },
      { file: "signage solutions5.jpeg.jpeg", title: "Hanging Blade Sign", summary: "Double-sided hanging blade sign for pedestrian-level brand visibility." },
      { file: "signage solutions8.jpeg.jpeg", title: "Wall-Mount Dimensional Letters", summary: "3D dimensional letter installation with brushed metallic finish for corporate walls." },
      { file: "signage solutions9.jpeg.jpeg", title: "Neon-Style LED Sign", summary: "Custom neon-style LED sign with flexible tubing for interior feature walls." },
      { file: "signage solutions10.jpeg.jpeg", title: "Exterior Building Signage", summary: "Large-format exterior building signage with weather-resistant UV-stable materials." },
      { file: "signage solutions11.jpeg.jpeg", title: "Digital Menu Board", summary: "Digital menu board system with LED display and content management integration." },
      { file: "Signage solutions12.jpeg.jpeg", title: "Retail Wall Graphic Sign", summary: "Large retail wall graphic with brand messaging and wayfinding functionality." },
      { file: "signage solutions13 (1).jpeg", title: "Floor Standing Display Sign", summary: "Freestanding floor display sign with double-sided print and sturdy base." },
      { file: "signage solutions14.jpeg.jpeg", title: "Engraved Brass Nameplate", summary: "Premium engraved brass nameplate for corporate entrances and office doors." },
      { file: "signage solutions15.jpeg.jpeg", title: "Outdoor Directional Post Sign", summary: "Multi-directional outdoor post sign system for campus and complex navigation." },
      { file: "signage solutions16.jpeg.jpeg", title: "Custom Acrylic Trophy Sign", summary: "Custom acrylic award or recognition sign with engraved and printed graphics." }
    ],
    videos: []
  },
  "Vehicle Branding": {
    images: [
      { file: "vehicle branding1.jpeg.jpeg", title: "Full Vehicle Wrap - SUV", summary: "Complete vehicle wrap for SUV with full-color brand graphics and protective laminate." },
      { file: "vehicle branding2.jpeg.jpeg", title: "Commercial Van Fleet Wrap", summary: "Full fleet branding for commercial van with company colors and contact information." },
      { file: "vehicle branding3.jpeg.jpeg", title: "Car Partial Wrap", summary: "Partial vehicle wrap with door graphics and rear quarter panel branding." },
      { file: "vehicle branding4.jpeg.jpeg", title: "Truck Box Side Branding", summary: "Large-format truck box side branding with contour-cut vinyl graphics." },
      { file: "vehicle branding5.jpeg.jpeg", title: "Van Rear Door Graphics", summary: "Rear door graphics for cargo van with promotional messaging and QR code." },
      { file: "vehicle branding6.jpeg.jpeg", title: "Sedan Full Vinyl Wrap", summary: "Full vinyl wrap for sedan with metallic finish and seamless graphic integration." },
      { file: "vehicle branding7.jpeg.jpeg", title: "Fleet Graphic Consistency", summary: "Multi-vehicle fleet branding with consistent color matching across different models." },
      { file: "vehicle branding8.jpeg.jpeg", title: "Mini-Bus Full Wrap", summary: "Complete mini-bus wrap with window cutouts and panoramic brand graphics." },
      { file: "vehicle branding9.jpeg.jpeg", title: "Pickup Truck Branding", summary: "Pickup truck branding with tailgate graphic and door decals." },
      { file: "vehicle branding10.jpeg.jpeg", title: "Motorcycle Brand Wrap", summary: "Custom motorcycle branding wrap with high-tack vinyl for curved surfaces." },
      { file: "vehicle branding11.jpeg.jpeg", title: "Vehicle Lettering & Striping", summary: "Professional vehicle lettering and accent striping for subtle brand presence." }
    ],
    videos: []
  },
  "Large Format Printing": {
    images: [
      { file: "large format printing1.jpeg.jpeg", title: "Construction Site Billboard", summary: "Large-format billboard for construction site hoarding with brand messaging." },
      { file: "large format printing2.jpeg.jpeg", title: "Event Backdrop Banner", summary: "Custom event backdrop banner with seamless print and hemmed edges." },
      { file: "large format printing3.jpeg.jpeg", title: "Retail Window Poster", summary: "Large-scale retail window poster with UV-resistant fade-proof printing." },
      { file: "large format printing4.jpeg.jpeg", title: "Trade Show Display Graphic", summary: "Trade show display graphic with fabric stretch frame and vibrant print quality." },
      { file: "large format printing5.jpeg.jpeg", title: "Building Wrap Mural", summary: "Building wrap mural for construction scaffolding with full-color brand artwork." },
      { file: "large format printing6.jpeg.jpeg", title: "Indoor Wall Mural", summary: "Large indoor wall mural with photographic quality print and matte laminate finish." },
      { file: "large format printing7.jpeg.jpeg", title: "Floor Graphic Installation", summary: "Anti-slip floor graphic with directional messaging for retail and event spaces." },
      { file: "large format printing8.jpeg.jpeg", title: "Stage Backdrop Banner", summary: "Custom stage backdrop with brand logo and event-specific messaging." },
      { file: "large format printing9.jpeg.jpeg", title: "A-Frame Sidewalk Sign", summary: "A-frame sidewalk sign with double-sided print for curbside advertising." },
      { file: "Large format printing10.jpeg.jpeg", title: "Retail Bunting Banner", summary: "Retail bunting banner set for promotional campaigns and seasonal events." },
      { file: "large format printing11.jpeg.jpeg", title: "Mesh Banner", summary: "Mesh banner for windy outdoor conditions with perforated material for wind pass-through." },
      { file: "large format printing12.jpeg.jpeg", title: "Canvas Gallery Print", summary: "Gallery-quality canvas print with stretched frame and gallery wrap finish." },
      { file: "large format printing13.jpeg.jpeg", title: "Vinyl Banner Roll-up", summary: "Retractable banner roll-up with premium vinyl print and durable base mechanism." },
      { file: "large format printing14.jpeg.jpeg", title: "Photo Backdrop Banner", summary: "Seamless photo backdrop banner for events and photography studios." },
      { file: "large format printing15.jpeg.jpeg", title: "Exhibition Panel Print", summary: "Exhibition panel print with foam board mounting and easel frame." },
      { file: "large format printing16.jpeg.jpeg", title: "Outdoor Vinyl Sticker", summary: "Large-format outdoor vinyl sticker with contour cut and weather-resistant lamination." },
      { file: "Large format printing17.jpeg.jpeg", title: "Wall Decal Lettering", summary: "Large wall decal lettering with application tape for smooth transfer installation." },
      { file: "Large format printing18.jpeg.jpeg", title: "Festival Bunting Banner", summary: "Colorful festival bunting banner set with weatherproof double-sided printing." }
    ],
    videos: [{ file: "Large format printing.mp4", title: "Large Format Printing Showcase", summary: "Showcase of our large format printing capabilities and project examples." }]
  },
  "Printing Services": {
    images: [
      { file: "printing services3.jpeg.jpeg", title: "Business Card Collection", summary: "Premium business card set with spot UV coating and thick 400gsm stock." },
      { file: "printing services4.jpeg.jpeg", title: "Brochure & Flyer Set", summary: "Full-color brochure and flyer set with folding options and coated finish." },
      { file: "printing services5.jpeg.jpeg", title: "Sticker & Label Pack", summary: "Custom sticker and label pack with kiss-cut shapes and durable vinyl material." }
    ],
    videos: []
  },
  "Apparel & Promotional Branding": {
    images: [
      { file: "Apparel & promotional branding1.jpeg.jpeg", title: "Embroidered Cap Collection", summary: "Branded cap collection with high-density embroidery logo on structured front panels." },
      { file: "Apparel & promotional branding2.jpeg.jpeg", title: "Branded T-Shirt Line", summary: "Custom branded t-shirts with screen-printed logo and comfortable cotton blend." },
      { file: "Apparel & promotional branding3.jpeg.jpeg", title: "Promotional Polo Shirts", summary: "Corporate polo shirts with embroidered brand logo and moisture-wicking fabric." },
      { file: "Apparel & promotional branding4.jpeg.jpeg", title: "Branded Hoodie Set", summary: "Premium branded hoodies with full-back screen print and front chest logo." },
      { file: "Apparel & promotional branding5.jpeg.jpeg", title: "Corporate Uniform Range", summary: "Complete corporate uniform range with brand-matched color palette." },
      { file: "Apparel & promotional branding12.jpeg.jpeg", title: "Branded Workwear Jacket", summary: "Durable branded workwear jacket with reflective details and logo embroidery." },
      { file: "Apparel & promotional branding13.jpeg.jpeg", title: "Promotional Sports Kit", summary: "Branded sports kit including jerseys, shorts, and team warm-up apparel." },
      { file: "Apparel promotion 9.jpeg.jpeg", title: "Custom Branded Tote Bag", summary: "Eco-friendly branded tote bag with one-color screen print and reinforced handles." },
      { file: "Apparell and branding 10.jpeg.jpeg", title: "Branded Face Cap", summary: "Adjustable branded face cap with curved brim and embroidered front logo." },
      { file: "Apparell branding and promotion 6.jpeg.jpeg", title: "Promotional Drinkware Set", summary: "Branded drinkware set including water bottles and travel mugs with logo etch." },
      { file: "Apparell promotion and branding 7.jpeg.jpeg", title: "Branded Tech Accessories", summary: "Branded tech accessories including power banks, phone cases, and USB drives." },
      { file: "Apparell promotion and branding.jpeg.jpeg", title: "Corporate Gift Hamper", summary: "Curated corporate gift hamper with branded items for client appreciation." },
      { file: "Apparell promotion and branding8.jpeg.jpeg", title: "Branded Lanyard & ID Kit", summary: "Custom lanyard and ID badge kit with full-color print and detachable buckle." },
      { file: "Apparell promotion and branding12.jpeg.jpeg", title: "Event Promotional Pack", summary: "Complete event promotional pack with branded merchandise and information cards." }
    ],
    videos: []
  },
  "Gondola Branding": {
    images: [
      { file: "Gondola branding.jpeg", title: "Retail Gondola End-Cap", summary: "Branded gondola end-cap display with product categorization signage." },
      { file: "Gondola branding2.jpeg.jpeg", title: "In-Store Branded Shelving", summary: "Full gondola shelving unit with brand-colored panels and promotional headers." },
      { file: "Gondola branding3.jpeg.jpeg", title: "Product Display Gondola", summary: "Multi-tier product display gondola with brand messaging and pricing strips." },
      { file: "Gondola branding4.jpeg.jpeg", title: "Gondola Base Wrap", summary: "Full gondola base wrap with brand graphics and promotional call-to-action." },
      { file: "Gondola branding5.jpeg.jpeg", title: "Gondola Shelf Talker Set", summary: "Shelf-edge brand talkers and wobblers for in-aisle product promotion." },
      { file: "Gondola branding6.jpeg.jpeg", title: "Retail Branded Island Unit", summary: "Free-standing island gondola unit with 360-degree brand visibility." },
      { file: "Gondola branding7.jpeg.jpeg", title: "Gondola Header Sign", summary: "Overhead gondola header sign with backlit brand panel and category naming." },
      { file: "Gondola branding8.jpeg.jpeg", title: "Cooler & Freezer Branding", summary: "Branded cooler and freezer door graphics with durable cold-resistant vinyl." },
      { file: "Gondola branding9.jpeg.jpeg", title: "Gondola Side Panel Branding", summary: "Side panel branding for gondola units with full-color graphic wrap application." },
      { file: "Gondola brandings1.jpeg.jpeg", title: "Checkout Counter Display", summary: "Branded checkout counter display unit with impulse product placement trays." }
    ],
    videos: []
  },
  "Pop Up Banners": {
    images: [
      { file: "pop up banners1.jpeg.jpeg", title: "Premium Pop-Up Banner Stand", summary: "Professional pop-up banner stand with full-color print and aluminum frame." },
      { file: "pop up banners2.jpeg.jpeg", title: "Retractable Banner Display", summary: "Smooth retractable banner display with snap-on graphic change system." }
    ],
    videos: []
  },
  "Photo Frames": {
    images: [
      { file: "Photo frames1.jpeg.jpeg", title: "Elegant Wooden Photo Frame", summary: "Premium wooden photo frame with brand engraving and matte finish." },
      { file: "photo frames2.jpeg.jpeg", title: "Modern Acrylic Photo Frame", summary: "Contemporary acrylic photo frame with floating effect and crystal clarity." },
      { file: "photo frames3.jpeg.jpeg", title: "Collage Photo Frame Set", summary: "Multi-opening collage photo frame set for brand story display." },
      { file: "photo frames4.jpeg.jpeg", title: "Metal Gallery Photo Frame", summary: "Brushed metal photo frame with sleek profile and easy-loading back." },
      { file: "photo frames5.jpeg.jpeg", title: "Digital Photo Frame", summary: "Digital photo frame with slideshow functionality and brand splash screen." },
      { file: "photo frames6.jpeg.jpeg", title: "Tabletop Photo Frame Stand", summary: "Tabletop photo frame stand with double-sided display capability." }
    ],
    videos: []
  },
  "Snapper Frames": {
    images: [
      { file: "snapper frames1.jpeg.jpeg", title: "Snapper Frame Display System", summary: "Versatile snapper frame system for quick-change poster and graphic displays." }
    ],
    videos: []
  },
  "Magnetic Stickers": {
    images: [
      { file: "magnetic stickers.jpeg.jpeg", title: "Custom Magnetic Sticker Pack", summary: "Custom die-cut magnetic stickers for removable vehicle and surface branding." }
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
    media.images.forEach((entry) => {
      items.push({
        id: id++,
        title: entry.title,
        category,
        summary: entry.summary,
        type: "image",
        media_url: entry.file
      });
    });
    // — videos —
    media.videos.forEach((entry) => {
      items.push({
        id: id++,
        title: entry.title,
        category,
        summary: entry.summary,
        type: "video",
        media_url: entry.file
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
