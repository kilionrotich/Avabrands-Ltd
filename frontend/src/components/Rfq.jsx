function Rfq({ bgImages }) {
  return (
    <section id="rfq" className="section-glow border-t border-white/10 bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      {bgImages && bgImages[0] && (
        <div className="absolute right-0 top-0 opacity-35 h-[28rem] w-[28rem]">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[0]}`} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      {bgImages && bgImages[1] && (
        <div className="absolute left-0 bottom-0 opacity-25 h-96 w-96">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[1]}`} alt="" className="w-full h-full object-cover rounded-tr-3xl" />
        </div>
      )}
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-teal-secondary">Request for Quotation</p>
          <h2 className="mt-4 text-4xl font-heading uppercase tracking-[0.08em] md:text-6xl text-teal-secondary font-bold">
            Tell us what you need. We deliver with precision.
          </h2>
          <p className="mt-4 text-base text-teal-primary/80">
            Upload a brief, drawings, or references. We will respond within one business day.
          </p>
          <div className="mt-8 space-y-4 text-base text-teal-primary/70">
            <p>Secure handling of all files and materials.</p>
            <p>Dedicated project lead assigned after submission.</p>
          </div>
        </div>
        <form className="rounded-2xl border border-teal-secondary/20 bg-teal-primary/5 p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-lg border border-teal-secondary/20 bg-black/60 px-4 py-3 text-sm text-white placeholder-teal-primary/40 focus:border-teal-secondary focus:outline-none"
              placeholder="Full name"
              type="text"
              name="name"
            />
            <input
              className="w-full rounded-lg border border-teal-secondary/20 bg-black/60 px-4 py-3 text-sm text-white placeholder-teal-primary/40 focus:border-teal-secondary focus:outline-none"
              placeholder="Company"
              type="text"
              name="company"
            />
            <input
              className="w-full rounded-lg border border-teal-secondary/20 bg-black/60 px-4 py-3 text-sm text-white placeholder-teal-primary/40 focus:border-teal-secondary focus:outline-none"
              placeholder="Email"
              type="email"
              name="email"
            />
            <input
              className="w-full rounded-lg border border-teal-secondary/20 bg-black/60 px-4 py-3 text-sm text-white placeholder-teal-primary/40 focus:border-teal-secondary focus:outline-none"
              placeholder="Phone"
              type="tel"
              name="phone"
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-lg border border-teal-secondary/20 bg-black/60 px-4 py-3 text-sm text-white placeholder-teal-primary/40 focus:border-teal-secondary focus:outline-none"
              placeholder="Service needed"
              type="text"
              name="service"
            />
            <input
              className="w-full rounded-lg border border-teal-secondary/20 bg-black/60 px-4 py-3 text-sm text-white placeholder-teal-primary/40 focus:border-teal-secondary focus:outline-none"
              placeholder="Estimated budget"
              type="text"
              name="budget"
            />
          </div>
          <textarea
            className="mt-4 h-32 w-full rounded-lg border border-teal-secondary/20 bg-black/60 px-4 py-3 text-sm text-white placeholder-teal-primary/40 focus:border-teal-secondary focus:outline-none"
            placeholder="Tell us about your scope"
            name="message"
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <input
              className="w-full text-xs uppercase tracking-[0.2em] text-teal-primary/60 file:text-teal-secondary file:font-bold file:cursor-pointer"
              type="file"
              name="attachment"
            />
            <button
              type="submit"
              className="rounded-full bg-teal-secondary px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-black hover:bg-teal-secondary/90 hover:shadow-lg transition"
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
