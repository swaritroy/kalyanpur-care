import { AlertTriangle, Phone } from "lucide-react";
import { CLINIC } from "@/data/clinic";

export const EmergencyBar = () => (
  <div className="bg-gradient-to-r from-destructive to-warning text-destructive-foreground text-xs sm:text-sm">
    <div className="container-page flex items-center justify-center gap-2 py-1.5 text-center whitespace-nowrap overflow-hidden">
      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
      <span className="font-medium hidden sm:inline">Emergency? Call us directly for immediate help.</span>
      <span className="font-medium sm:hidden">Emergency?</span>
      <a href={`tel:${CLINIC.phone}`} className="inline-flex items-center gap-1 font-bold underline underline-offset-2">
        <Phone className="h-3 w-3" /> {CLINIC.phoneDisplay}
      </a>
    </div>
  </div>
);
