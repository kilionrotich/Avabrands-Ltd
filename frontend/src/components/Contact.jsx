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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31710.38368458906!2d3.3480286!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4c5d46a7af%3A0x9a3bca9b8ab8d6b!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
            />
          </div>
          <p className="mt-4 text-xs text-text-light/50">
            Replace the map embed link with your official Google Maps location.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
