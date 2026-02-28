import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Portfolio from "./components/Portfolio.jsx";
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
      { image_name: "corporate-branding-1.jpeg.jpeg", description: "Corporate brand identity execution" },
      { image_name: "corporate-branding-2.jpeg.jpeg", description: "Office interior branding showcase" },
      { image_name: "corporate-branding-3.jpeg.jpeg", description: "Wall branding and window graphics" },
      { image_name: "corporate-branding-4.jpeg.jpeg", description: "Reception and lobby branding" },
      { image_name: "corporate-branding-5.jpeg.jpeg", description: "Complete corporate brand implementation" }
    ]
  },
  // Signage Solutions
  {
    id: 2,
    title: "Signage Solutions",
    category: "Signage Solutions",
    summary: "3D illuminated signs, shopfront signage, directional and safety signs, billboards and outdoor advertising boards, LED and lightbox signs.",
    images: [
      { image_name: "img1.jpeg", description: "Signage solution installation" },
      { image_name: "img2.jpeg", description: "Shopfront signage execution" },
      { image_name: "img3.jpeg", description: "Illuminated signage detail" },
      { image_name: "img9.jpeg", description: "Directional and safety signage" }
    ]
  },
  // Vehicle Branding
  {
    id: 3,
    title: "Vehicle Branding",
    category: "Vehicle Branding",
    summary: "Full car wraps, partial vehicle branding, fleet branding, reflective and commercial vehicle graphics for complete brand visibility on wheels.",
    images: [
      { image_name: "img5.jpeg", description: "Vehicle wrap and fleet branding" }
    ]
  },
  // Large Format Printing
  {
    id: 4,
    title: "Large Format Printing",
    category: "Large Format Printing",
    summary: "Banners and roll-up banners, posters and promotional displays, exhibition stands and backdrops with high-quality large-scale printing solutions.",
    images: [
      { image_name: "img6.jpeg", description: "Large format banners and backdrops" }
    ]
  },
  // Printing Services
  {
    id: 5,
    title: "Printing Services",
    category: "Printing Services",
    summary: "Business cards and corporate stationery, brochures, catalogues, and company profiles, flyers and marketing materials, receipt books and branded documentation.",
    images: [
      { image_name: "img7.jpeg", description: "Printed marketing and stationery set" }
    ]
  },
  // Apparel & Promotional Branding
  {
    id: 6,
    title: "Apparel & Promotional Branding",
    category: "Apparel & Promotional Branding",
    summary: "Branded t-shirts and uniforms, caps and reflective jackets, corporate gifts and promotional merchandise with high-quality materials and modern creative designs.",
    images: [
      { image_name: "img4.jpeg", description: "Branded apparel and uniforms" },
      { image_name: "img5.jpeg", description: "Promotional merchandise and gifts" },
      { image_name: "img6.jpeg", description: "Corporate gift branding" },
      { image_name: "img7.jpeg", description: "Caps and reflective jackets" },
      { image_name: "img8.jpeg", description: "Promotional branding showcase" }
    ]
  }
];

const latestImages = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg",
  "img7.jpeg",
  "img8.jpeg",
  "img9.jpeg"
];

const newsPosts = [
  {
    id: 1,
    title: "Studio Roundup: New Work Across Brand Touchpoints",
    excerpt: "A quick look at recent rollouts spanning signage, print, and promotional branding.",
    date: "Feb 21, 2026"
  },
  {
    id: 2,
    title: "From Concept to Install: How We Keep Projects Moving",
    excerpt: "Our studio process for fast, consistent delivery across multiple locations.",
    date: "Feb 10, 2026"
  },
  {
    id: 3,
    title: "Material Matters: Finishes That Elevate Brand Presence",
    excerpt: "Why quality substrates and precision finishing make the difference on-site.",
    date: "Jan 29, 2026"
  }
];

function App() {
  const shuffledImages = [...latestImages].sort(() => Math.random() - 0.5);
  const imagePairs = getImagePairs(shuffledImages);
  
  return (
    <div className="bg-black text-text-light">
      <Header />
      <Hero bgImage={shuffledImages[0]} />
      <Services services={services} bgImages={imagePairs[0]} />
      <TrustStrip />
      <Portfolio items={portfolioItems} />
      <Rfq bgImages={imagePairs[1]} />
      <News posts={newsPosts} bgImages={imagePairs[2]} />
      <Contact bgImages={imagePairs[3]} />
      <Footer />
    </div>
  );
}

export default App;
