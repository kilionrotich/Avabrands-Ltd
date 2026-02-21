import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Rfq from "./components/Rfq.jsx";
import News from "./components/News.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

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
  {
    id: 1,
    title: "Atlas Capital HQ",
    category: "Production",
    summary: "Lobby environmental branding and premium wayfinding system.",
    image_url: "https://picsum.photos/seed/atlas/800/500"
  },
  {
    id: 2,
    title: "Northbridge Rebrand",
    category: "Branding",
    summary: "Complete identity refresh with global rollout toolkit.",
    image_url: "https://picsum.photos/seed/northbridge/800/500"
  },
  {
    id: 3,
    title: "Skyline Pavilion",
    category: "Civil Works",
    summary: "Large-format structural signage and steel fabrication.",
    image_url: "https://picsum.photos/seed/skyline/800/500"
  },
  {
    id: 4,
    title: "Aurora Campaign",
    category: "Agency",
    summary: "Cross-agency collaboration for a national campaign launch.",
    image_url: "https://picsum.photos/seed/aurora/800/500"
  },
  {
    id: 5,
    title: "Vantage Studio",
    category: "Production",
    summary: "Immersive showroom experience with audio-visual integration.",
    image_url: "https://picsum.photos/seed/vantage/800/500"
  },
  {
    id: 6,
    title: "Lumen District",
    category: "Civil Works",
    summary: "Public-facing identity with architectural lighting accents.",
    image_url: "https://picsum.photos/seed/lumen/800/500"
  }
];

const newsPosts = [
  {
    id: 1,
    title: "Inside the Future of Experiential Branding",
    excerpt: "How immersive environments are shaping brand loyalty in 2026.",
    date: "Feb 08, 2026"
  },
  {
    id: 2,
    title: "Avabrands Wins Regional Production Award",
    excerpt: "Recognized for precision craft and bold execution at scale.",
    date: "Jan 24, 2026"
  },
  {
    id: 3,
    title: "Civil Works Without Compromise",
    excerpt: "Delivering structural brand implementations on aggressive timelines.",
    date: "Jan 10, 2026"
  }
];

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <Services services={services} />
      <TrustStrip />
      <Portfolio items={portfolioItems} />
      <Rfq />
      <News posts={newsPosts} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
