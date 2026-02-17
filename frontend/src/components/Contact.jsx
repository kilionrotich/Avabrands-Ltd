function Contact() {
  return (
    <section id="contact" className="section-glow border-t border-white/10 bg-black py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Contact</p>
          <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.08em] md:text-5xl">
            Let us design your next statement.
          </h2>
          <p className="mt-4 text-sm text-white/70">
            Corporate offices in Nairobi Kenya with nationwide delivery teams.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-white/70">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Email</p>
              <p>avabrandsltd@gmail.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Phone</p>
              <p>+254 792 724 721</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">WhatsApp</p>
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
          <p className="mt-4 text-xs text-white/50">
            Replace the map embed link with your official Google Maps location.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
