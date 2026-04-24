import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, CalendarCheck } from "lucide-react";
import { Logo } from "./Logo";
import { CLINIC, NAV } from "@/data/clinic";
import { Button } from "@/components/ui/button";

function useOpenStatus() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const check = () => {
      const d = new Date();
      const day = d.getDay(); // 0 sun
      const h = d.getHours();
      const m = d.getMinutes();
      const t = h * 60 + m;
      if (day === 0) setOpen(t >= 600 && t < 720);
      else setOpen((t >= 540 && t < 780) || (t >= 1020 && t < 1260));
    };
    check();
    const i = setInterval(check, 60000);
    return () => clearInterval(i);
  }, []);
  return open;
}

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isOpen = useOpenStatus();
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [loc.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md transition-all ${
        scrolled ? "bg-background/85 shadow-card" : "bg-background/70"
      }`}
    >
      <div className="container-page flex h-14 md:h-16 items-center justify-between gap-3">
        <Logo />

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "text-primary bg-primary-soft" : "text-foreground/80 hover:text-primary hover:bg-primary-soft/60"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span
            className={`hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
              isOpen ? "bg-accent-soft text-accent" : "bg-muted text-muted-foreground"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${isOpen ? "bg-accent animate-pulse" : "bg-muted-foreground"}`} />
            {isOpen ? "Open Now" : "Opens at 9 AM"}
          </span>

          <Button asChild size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-9 px-3 text-sm shadow-pill">
            <Link to="/contact"><CalendarCheck className="mr-1.5 h-4 w-4" />Book Now</Link>
          </Button>

          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="md:hidden grid h-9 w-9 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-pill"
          >
            <MessageCircle className="h-4 w-4" />
          </a>

          <button
            className="lg:hidden grid h-9 w-9 place-items-center rounded-lg border border-border"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-page py-3 flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `py-3 px-2 rounded-lg text-base font-medium ${
                    isActive ? "text-primary bg-primary-soft" : "text-foreground/90"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Button asChild className="mt-3 bg-primary text-primary-foreground rounded-xl">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
