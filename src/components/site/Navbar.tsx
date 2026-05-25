import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";

const links = [
  { hash: "about", label: "About" },
  { hash: "services", label: "Services" },
  { hash: "projects", label: "Projects" },
  { hash: "process", label: "Process" },
  { hash: "testimonials", label: "Testimonials" },
  { hash: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (hash: string) => {
    setOpen(false);
    if (onHome) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `#${hash}`);
      }
    } else {
      navigate({ to: "/", hash });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 bg-background/85 backdrop-blur-xl border-b border-border" : "py-4 bg-transparent"
      }`}
    >
      <div className="container-prose flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="A-Interiors logo" width={40} height={40} className="h-10 w-10 rounded-full object-contain" />
          <span className="font-display text-lg md:text-xl font-semibold tracking-tight">
            The A <span className="text-primary">Interiors</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.hash} onClick={() => goToSection(l.hash)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>
        <div className="hidden lg:block">
          <button onClick={() => goToSection("contact")} className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full gradient-gold text-charcoal hover:opacity-90 transition shadow-soft">
            Request a Quote
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md text-foreground" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden mt-2 mx-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border p-6 shadow-elegant">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <button key={l.hash} onClick={() => goToSection(l.hash)} className="text-base font-medium text-foreground hover:text-primary text-left">
                {l.label}
              </button>
            ))}
            <button onClick={() => goToSection("contact")} className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-full gradient-gold text-charcoal">
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
