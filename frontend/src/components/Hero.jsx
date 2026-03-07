import { useState, useEffect } from "react";

function Hero({ bgImage }) {
  // Create an array with the primary image and calculate a second random image
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (bgImage) {
      setImages([bgImage]);
    }
  }, [bgImage]);

  return (
    <section className="hero-backdrop relative flex min-h-[85vh] items-center bg-[#f8f4ed]">
      <div className="absolute inset-0 bg-[#f8f4ed]/45" aria-hidden="true" />
      
      {/* Background images displayed on the right */}
      {images.length > 0 ? (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 opacity-95 flex gap-6">
          <div className="w-72 h-96 rounded-lg overflow-hidden border border-teal-secondary/35 shadow-lg">
            <img 
              src={`${import.meta.env.BASE_URL}images/${images[0]}`} 
              alt="Portfolio showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : null}

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.3fr_0.7fr] z-10">
        <div className="bg-[#f8f4ed]/60 backdrop-blur-sm rounded-2xl p-6 -m-6">
          <p className="text-sm uppercase tracking-[0.4em] text-teal-secondary font-semibold drop-shadow-sm">Branding + Production</p>
          <h1 className="mt-6 text-balance text-4xl font-heading uppercase tracking-[0.08em] text-teal-secondary md:text-6xl font-bold drop-shadow-sm">
            We build brands that command attention and trust at scale.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-teal-primary font-semibold animate-breathe drop-shadow-sm">
            Avabrands unifies strategy, production, and civil works into a single, accountable partner for
            high-impact brand environments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="btn-cta rounded-full bg-teal-secondary px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white hover:bg-teal-primary hover:shadow-lg inline-flex items-center gap-2"
            >
              View Portfolio
              <span className="text-lg">→</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-teal-primary/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-primary transition hover:border-teal-secondary hover:bg-teal-secondary/10"
            >
              Talk to Us
            </a>
          </div>
        </div>
        <div className="self-end rounded-2xl border border-teal-primary/20 bg-[#f2ece3]/98 backdrop-blur-md p-6 shadow-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-secondary/80 font-semibold">Credibility</p>
          <div className="mt-4 space-y-5">
            <div>
              <p className="text-3xl font-heading text-teal-secondary font-bold drop-shadow-sm">18+ Years</p>
              <p className="text-sm text-teal-primary font-medium">Delivering premium brand environments.</p>
            </div>
            <div>
              <p className="text-3xl font-heading text-teal-secondary font-bold drop-shadow-sm">120+ Projects</p>
              <p className="text-sm text-teal-primary font-medium">Across corporate, retail, and civic sectors.</p>
            </div>
            <div>
              <p className="text-3xl font-heading text-teal-secondary font-bold drop-shadow-sm">24/7 Oversight</p>
              <p className="text-sm text-teal-primary font-medium">Dedicated production and QA leadership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
