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
          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setIsThemeMenuOpen((current) => !current)}
              className="theme-menu-trigger inline-flex h-10 w-10 items-center justify-center rounded-full transition"
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
                    className={`theme-menu-option flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                      themeMode === option.value
                        ? "bg-teal-primary text-white"
                        : "text-teal-primary hover:bg-teal-primary/10"
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
