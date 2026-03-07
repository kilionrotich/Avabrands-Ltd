import { useState } from "react";

function Contact({ bgImages }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    
    // Add Web3Forms access key
    formData.append("access_key", "ec748a1d-53a9-4adb-aa72-da09bd1dad93");
    formData.append("subject", "New Contact from Avabrands Website");
    formData.append("from_name", "Avabrands Contact Form");

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
    <section id="contact" className="section-glow border-t border-teal-primary/10 bg-[#f8f4ed] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f4ed]/45" aria-hidden="true" />
      {bgImages && bgImages[0] && (
        <div className="absolute right-0 top-0 opacity-60 h-[28rem] w-[28rem]">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[0]}`} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      {bgImages && bgImages[1] && (
        <div className="absolute left-0 bottom-0 opacity-65 h-96 w-96">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[1]}`} alt="" className="w-full h-full object-cover rounded-tr-3xl" />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-[#f8f4ed]/70 backdrop-blur-sm rounded-2xl p-6 -mx-6">
            <p className="text-xs uppercase tracking-[0.35em] text-teal-secondary font-semibold drop-shadow-sm">Contact</p>
            <h2 className="mt-4 text-4xl font-heading uppercase tracking-[0.08em] md:text-6xl text-teal-secondary font-bold drop-shadow-sm">
              Let us design your next statement.
            </h2>
            <p className="mt-4 text-base text-teal-primary font-medium drop-shadow-sm">
              Corporate offices in Nairobi Kenya with nationwide delivery teams.
            </p>
            <div className="mt-8 grid gap-4 text-base text-teal-primary font-medium">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-teal-primary/70 font-medium">Email</p>
                <p>avabrandsltd@gmail.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-teal-primary/70 font-medium">Phone</p>
                <p>+254 792 724 721</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-teal-primary/70 font-medium">WhatsApp</p>
                <a
                  className="inline-flex items-center gap-2 text-teal-secondary font-bold hover:text-teal-secondary/80"
                  href="https://wa.me/254792724721?text=Hello%20Avabrands%2C%20I%20need%20a%20quote."
                  target="_blank"
                  rel="noreferrer"
                >
                  Start a WhatsApp chat
                </a>
              </div>
            </div>
            
            <div className="mt-8 rounded-2xl border border-teal-secondary/20 bg-teal-primary/5 p-4">
              <div className="overflow-hidden rounded-xl border border-teal-secondary/20">
                <iframe
                  title="Avabrands Map"
                  className="h-64 w-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8202815568446!2d35.14170731093628!3d0.33176980000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178059953673aaf3%3A0x62c0e46e25b74da!2sDr.Tanui's!5e0!3m2!1sen!2ske!4v1740883200000"
                />
              </div>
              <p className="mt-4 text-xs text-teal-primary/60">
                Dr. Tanui's location (84JV+PP3)
              </p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-teal-secondary/20 bg-teal-primary/5 p-8">
              <h3 className="text-xl font-heading uppercase tracking-[0.08em] text-teal-secondary font-bold">
                Send us a message
              </h3>
              
              {status === "success" && (
                <div className="mt-4 rounded-lg bg-teal-secondary/20 border border-teal-secondary/40 p-4 text-sm text-teal-secondary">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 rounded-lg bg-red-500/20 border border-red-500/40 p-4 text-sm text-red-400">
                  ✗ Something went wrong. Please try again or contact us directly.
                </div>
              )}
              
              <div className="mt-6 space-y-4">
                <input
                  className="w-full rounded-lg border border-teal-secondary/25 bg-[#f2ece3] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-secondary focus:outline-none"
                  placeholder="Your name"
                  type="text"
                  name="name"
                  required
                />
                <input
                  className="w-full rounded-lg border border-teal-secondary/25 bg-[#f2ece3] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-secondary focus:outline-none"
                  placeholder="Email address"
                  type="email"
                  name="email"
                  required
                />
                <input
                  className="w-full rounded-lg border border-teal-secondary/25 bg-[#f2ece3] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-secondary focus:outline-none"
                  placeholder="Phone number"
                  type="tel"
                  name="phone"
                />
                <textarea
                  className="h-32 w-full rounded-lg border border-teal-secondary/25 bg-[#f2ece3] px-4 py-3 text-sm text-teal-primary placeholder-teal-primary/45 focus:border-teal-secondary focus:outline-none"
                  placeholder="Your message"
                  name="message"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-teal-secondary px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-black hover:bg-teal-secondary/90 hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;