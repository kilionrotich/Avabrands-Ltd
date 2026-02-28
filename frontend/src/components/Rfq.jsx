function Rfq({ bgImages }) {
  return (
    <section id="rfq" className="section-glow border-t border-white/10 bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      {bgImages && bgImages[0] && (
        <div className="absolute right-0 top-0 opacity-35 h-[28rem] w-[28rem]">
          <img src={`/images/${bgImages[0]}`} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      {bgImages && bgImages[1] && (
        <div className="absolute left-0 bottom-0 opacity-25 h-96 w-96">
          <img src={`/images/${bgImages[1]}`} alt="" className="w-full h-full object-cover rounded-tr-3xl" />
        </div>
      )}
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Request for Quotation</p>
          <h2 className="mt-4 text-4xl font-heading uppercase tracking-[0.08em] md:text-6xl text-text-light">
            Tell us what you need. We deliver with precision.
          </h2>
          <p className="mt-4 text-base text-text-light/70">
            Upload a brief, drawings, or references. We will respond within one business day.
          </p>
          <div className="mt-8 space-y-4 text-base text-text-light/60">
            <p>Secure handling of all files and materials.</p>
            <p>Dedicated project lead assigned after submission.</p>
          </div>
        </div>
        <form className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
              placeholder="Full name"
              type="text"
              name="name"
            />
            <input
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
              placeholder="Company"
              type="text"
              name="company"
            />
            <input
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
              placeholder="Email"
              type="email"
              name="email"
            />
            <input
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
              placeholder="Phone"
              type="tel"
              name="phone"
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
              placeholder="Service needed"
              type="text"
              name="service"
            />
            <input
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
              placeholder="Estimated budget"
              type="text"
              name="budget"
            />
          </div>
          <textarea
            className="mt-4 h-32 w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
            placeholder="Tell us about your scope"
            name="message"
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <input
              className="w-full text-xs uppercase tracking-[0.2em] text-white/70"
              type="file"
              name="attachment"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black"
            >
              Submit RFQ
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Rfq;
