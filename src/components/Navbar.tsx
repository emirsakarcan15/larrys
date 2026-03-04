import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-3xl font-display text-primary-foreground tracking-widest">
          LARRY'S
        </a>
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-foreground/95 md:bg-transparent gap-1 md:gap-6 p-4 md:p-0`}>
          {[
            { href: "#menu", label: "Menü" },
            { href: "#about", label: "Hakkımızda" },
            { href: "#contact", label: "İletişim" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-primary-foreground/80 hover:text-secondary font-body font-semibold tracking-wide transition-colors py-2 md:py-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
