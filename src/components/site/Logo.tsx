import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { CLINIC } from "@/data/clinic";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2 group min-w-0" aria-label={CLINIC.name}>
    <span className="grid h-8 w-8 md:h-9 md:w-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground shadow-sm group-hover:scale-105 transition-transform">
      <Plus className="h-4 w-4 md:h-5 md:w-5" strokeWidth={3} />
    </span>
    <span className="leading-tight min-w-0">
      <span className={`block font-display text-sm md:text-base font-bold truncate ${light ? "text-background" : "text-primary"}`}>
        {CLINIC.name}
      </span>
      <span className={`hidden sm:block text-[10px] tracking-wider truncate ${light ? "text-background/70" : "text-muted-foreground"}`}>
        {CLINIC.tagline.toUpperCase()}
      </span>
    </span>
  </Link>
);
