function Contact({ bgImages }) {
  return (
    <section id="contact" className="section-glow border-t border-white/10 bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      {bgImages && bgImages[0] && (
        <div className="absolute right-0 top-0 opacity-30 h-[28rem] w-[28rem]">
          <img src={`/images/${bgImages[0]}`} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      {bgImages && bgImages[1] && (
        <div className="absolute left-0 bottom-0 opacity-35 h-96 w-96">
          <img src={`/images/${bgImages[1]}`} alt="" className="w-full h-full object-cover rounded-tr-3xl" />
        </div>
      )}
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Contact</p>
          <h2 className="mt-4 text-4xl font-heading uppercase tracking-[0.08em] md:text-6xl text-text-light">
            Let us design your next statement.
          </h2>
          <p className="mt-4 text-base text-text-light/70">
            Corporate offices in Nairobi Kenya with nationwide delivery teams.
          </p>
          <div className="mt-8 grid gap-4 text-base text-text-light/70">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-text-light/50">Email</p>
              <p>avabrandsltd@gmail.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-text-light/50">Phone</p>
              <p>+254 792 724 721</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-text-light/50">WhatsApp</p>
              <a
                className="inline-flex items-center gap-2 text-gold"
                href="https://wa.me/254792724721?text=Hello%20Avabrands%2C%20I%20need%20a%20quote."
                target="_blank"
                rel="noreferrer"
              >
                Start a WhatsApp chat
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Avabrands Map"
              className="h-80 w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8202815568446!2d35.14170731093628!3d0.33176980000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178059953673aaf3%3A0x62c0e46e25b74da!2sDr.Tanui's!5e0!3m2!1sen!2ske!4v1740883200000"
            />
          </div>
          <p className="mt-4 text-xs text-text-light/50">
            Dr. Tanui's location (84JV+PP3)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;