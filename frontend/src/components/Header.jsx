const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Digital Studio", href: "#digital-studio" },
  { label: "RFQ", href: "#rfq" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" }
];

function Header({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-primary/15 bg-[#26C6DA]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="inline-flex items-center" aria-label="Avabrands home">
          <img
            src={`${import.meta.env.BASE_URL}images/Avabrands logo.png`}
            alt="Avabrands"
            className="h-16 w-auto md:h-20"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-teal-primary/80 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-teal-primary font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-primary/60 text-lg text-teal-primary transition hover:bg-teal-primary hover:text-white"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? "☀" : "🌙"}
          </button>
          <a
            href="#rfq"
            className="rounded-full border border-teal-primary/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-teal-primary transition hover:bg-teal-primary hover:text-white"
          >
            Request Quote
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
