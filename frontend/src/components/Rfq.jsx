import { useState } from "react";

function Rfq({ bgImages }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    
    // Add Web3Forms access key
    formData.append("access_key", "8f5f5c31-6162-44cb-8b94-f8d993e81c45");
    formData.append("subject", "New RFQ from Avabrands Website");
    formData.append("from_name", "Avabrands RFQ Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rfq" className="section-glow border-t border-teal-primary/10 bg-[#26C6DA] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#26C6DA]/45" aria-hidden="true" />
      {bgImages && bgImages[0] && (
        <div className="absolute right-0 top-0 opacity-65 h-[28rem] w-[28rem]">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[0]}`} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      {bgImages && bgImages[1] && (
        <div className="absolute left-0 bottom-0 opacity-55 h-96 w-96">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[1]}`} alt="" className="w-full h-full object-cover rounded-tr-3xl" />
        </div>
      )}
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[#26C6DA]/70 backdrop-blur-sm rounded-2xl p-6 -mx-6">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-primary font-semibold drop-shadow-sm">Request for Quotation</p>
          <h2 className="mt-4 text-4xl font-heading uppercase tracking-[0.08em] md:text-6xl text-teal-primary font-bold drop-shadow-sm">
            Tell us what you need. We deliver with precision.
          </h2>
          <p className="mt-4 text-base text-teal-primary font-medium drop-shadow-sm">
            Upload a brief, drawings, or references. We will respond within one business day.
          </p>
          <div className="mt-8 space-y-4 text-base text-teal-primary font-medium">
            <p>Secure handling of all files and materials.</p>
            <p>Dedicated project lead assigned after submission.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-teal-primary/20 bg-[#26C6DA]/95 backdrop-blur-sm p-8 shadow-md">
          {status === "success" && (
            <div className="mb-4 rounded-lg bg-teal-primary/20 border border-teal-primary/40 p-4 text-sm text-teal-primary">
              ✓ Thank you! Your RFQ has been submitted. We'll respond within one business day.
            </div>
          )}
          {status === "error" && (
            <div className="mb-4 rounded-lg bg-red-500/20 border border-red-500/40 p-4 text-sm text-red-400">
              ✗ Something went wrong. Please try again or contact us directly.
            </div>
          )}
          
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-lg border border-teal-primary/25 bg-[#1FB8C8] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-primary focus:outline-none"
              placeholder="Full name"
              type="text"
              name="name"
              required
            />
            <input
              className="w-full rounded-lg border border-teal-primary/25 bg-[#1FB8C8] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-primary focus:outline-none"
              placeholder="Company"
              type="text"
              name="company"
            />
            <input
              className="w-full rounded-lg border border-teal-primary/25 bg-[#1FB8C8] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-primary focus:outline-none"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <input
              className="w-full rounded-lg border border-teal-primary/25 bg-[#1FB8C8] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-primary focus:outline-none"
              placeholder="Phone"
              type="tel"
              name="phone"
              required
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-lg border border-teal-primary/25 bg-[#1FB8C8] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-primary focus:outline-none"
              placeholder="Service needed"
              type="text"
              name="service"
              required
            />
            <input
              className="w-full rounded-lg border border-teal-primary/25 bg-[#1FB8C8] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-primary focus:outline-none"
              placeholder="Estimated budget"
              type="text"
              name="budget"
            />
          </div>
          <textarea
            className="mt-4 h-32 w-full rounded-lg border border-teal-primary/25 bg-[#1FB8C8] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-primary focus:outline-none"
            placeholder="Tell us about your scope"
            name="message"
            required
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <input
              className="w-full text-xs uppercase tracking-[0.2em] text-teal-primary/60 file:text-teal-primary file:font-bold file:cursor-pointer"
              type="file"
              name="attachment"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-teal-secondary px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white hover:bg-teal-secondary/90 hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {loading ? "Sending..." : "Submit RFQ"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Rfq;
