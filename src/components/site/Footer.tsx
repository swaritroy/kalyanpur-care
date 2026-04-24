import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail, Plus } from "lucide-react";
import { CLINIC } from "@/data/clinic";

export const Footer = () => (
  <footer className="mt-16 bg-foreground text-background">
    <div className="container-page py-12 md:py-16 grid gap-10 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-foreground">
            <Plus className="h-5 w-5" strokeWidth={3} />
          </span>
          <div>
            <div className="font-display text-lg font-bold">{CLINIC.name}</div>
            <div className="text-xs text-background/60 tracking-wider">{CLINIC.tagline.toUpperCase()}</div>
          </div>
        </div>
        <p className="text-sm text-background/70">Compassionate, professional healthcare for the Kalyanpur community.</p>
        <div className="mt-4 flex gap-3">
          <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-background/10 hover:bg-background/20"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-background/10 hover:bg-background/20"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>

      <div>
        <h4 className="font-display text-base font-bold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-background/75">
          <li><Link to="/" className="hover:text-background">Home</Link></li>
          <li><Link to="/about" className="hover:text-background">About Us</Link></li>
          <li><Link to="/services" className="hover:text-background">Services</Link></li>
          <li><Link to="/contact" className="hover:text-background">Contact Us</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-base font-bold mb-3">Services</h4>
        <ul className="space-y-2 text-sm text-background/75">
          <li>General Consultation</li>
          <li>Pediatric Care</li>
          <li>Chronic Disease Management</li>
          <li>Minor Injuries</li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-base font-bold mb-3">Contact</h4>
        <ul className="space-y-3 text-sm text-background/80">
          <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Kalyanpur, Kanpur, UP</li>
          <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> <a href={`tel:${CLINIC.phone}`} className="hover:text-background">{CLINIC.phoneDisplay}</a></li>
          <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /> <a href={`mailto:${CLINIC.email}`} className="hover:text-background break-all">{CLINIC.email}</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-background/10">
      <div className="container-page py-5 text-center space-y-2">
        <p className="text-sm text-background/70">© {new Date().getFullYear()} {CLINIC.name}. All Rights Reserved.</p>
        <p className="text-[12px] text-background/50">
          Built with <a href="https://leadpe.online" target="_blank" rel="noopener noreferrer" className="hover:text-background underline">LeadPe 🌱</a> — Get your free website at <a href="https://leadpe.online" target="_blank" rel="noopener noreferrer" className="hover:text-background">leadpe.online</a>
        </p>
      </div>
    </div>
  </footer>
);
