const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "RFQ", href: "#rfq" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" }
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-secondary/20 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-heading uppercase tracking-[0.3em] text-teal-secondary font-bold">Avabrands</div>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-teal-primary/60 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-teal-secondary font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#rfq"
          className="rounded-full border border-teal-secondary/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-teal-secondary transition hover:bg-teal-secondary hover:text-black"
        >
          Request Quote
        </a>
      </div>
    </header>
  );
}

export default Header;
