import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <img src="/logo.png" alt="Sahabat Cool AC" className="h-12 w-auto" />
          <span className={`text-lg font-bold transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Sahabat Cool AC
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-primary-foreground/80"}`}>
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-foreground text-sm font-medium py-1">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
