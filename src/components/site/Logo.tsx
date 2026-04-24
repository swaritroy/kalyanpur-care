import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { CLINIC } from "@/data/clinic";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2 group" aria-label={CLINIC.name}>
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-foreground shadow-sm group-hover:scale-105 transition-transform">
      <Plus className="h-5 w-5" strokeWidth={3} />
    </span>
    <span className="leading-tight">
      <span className={`block font-display text-base md:text-lg font-bold ${light ? "text-background" : "text-primary"}`}>
        {CLINIC.name}
      </span>
      <span className={`block text-[10px] md:text-[11px] tracking-wider ${light ? "text-background/70" : "text-muted-foreground"}`}>
        {CLINIC.tagline.toUpperCase()}
      </span>
    </span>
  </Link>
);
