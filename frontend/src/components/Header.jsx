import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Digital Studio", href: "#digital-studio" },
  { label: "RFQ", href: "#rfq" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" }
];

const themeOptions = [
  { value: "light", label: "Light", icon: "☀" },
  { value: "dark", label: "Dark", icon: "🌙" },
  { value: "system", label: "System", icon: "◐" }
];

function Header({ themeMode, onThemeModeChange }) {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsThemeMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, []);

  const activeTheme = themeOptions.find((option) => option.value === themeMode) ?? themeOptions[2];

  return (
    <header className="sticky top-0 z-50 border-b border-yellow/20 bg-black backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="inline-flex items-center" aria-label="Avabrands home">
          <div className="flex items-baseline leading-none select-none">
<span className="text-[#C0C0C0] text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-black !text-[#C0C0C0]">AVA</span>
            <span className="ml-[0.35rem] text-[1.2rem] sm:text-[1.45rem] md:text-[1.8rem] font-black text-gold">BRANDS</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-gold/80 md:flex">
          {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-gold font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setIsThemeMenuOpen((current) => !current)}
              className="interactive-button theme-menu-trigger inline-flex h-10 w-10 items-center justify-center rounded-full transition"
              aria-haspopup="menu"
              aria-expanded={isThemeMenuOpen}
              aria-label={`Theme mode: ${activeTheme.label}`}
              title={`Theme mode: ${activeTheme.label}`}
            >
              <span className="sr-only">Theme options</span>
              <span
                aria-hidden="true"
                className={`theme-menu-hamburger ${isThemeMenuOpen ? "is-open" : ""}`}
              >
                <span className="theme-menu-hamburger-line" />
                <span className="theme-menu-hamburger-line" />
                <span className="theme-menu-hamburger-line" />
              </span>
            </button>
            {isThemeMenuOpen ? (
              <div className="theme-menu-panel absolute right-0 top-full z-50 mt-3 min-w-40 overflow-hidden rounded-2xl p-1 shadow-[0_18px_45px_rgba(13,59,102,0.14)]">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onThemeModeChange(option.value);
                      setIsThemeMenuOpen(false);
                    }}
className={`interactive-button theme-menu-option flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                      themeMode === option.value
                        ? "bg-yellow/90 text-black"
                        : "text-gold hover:bg-yellow/15 hover:text-gold"
                    }`}
                  >
                    <span>{option.label}</span>
                    <span aria-hidden="true">{option.icon}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <a
            href="#rfq"
            className="interactive-button rounded-full border border-yellow/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gold transition hover:bg-yellow/20 hover:text-gold"
          >
            Request Quote
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
