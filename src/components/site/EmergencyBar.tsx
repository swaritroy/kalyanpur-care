import { AlertTriangle, Phone } from "lucide-react";
import { CLINIC } from "@/data/clinic";

export const EmergencyBar = () => (
  <div className="bg-gradient-to-r from-destructive to-warning text-destructive-foreground text-sm">
    <div className="container-page flex flex-wrap items-center justify-center gap-2 py-2 text-center">
      <AlertTriangle className="h-4 w-4" />
      <span className="font-medium">Emergency? Call us directly for immediate help.</span>
      <a href={`tel:${CLINIC.phone}`} className="inline-flex items-center gap-1 font-bold underline underline-offset-2">
        <Phone className="h-3.5 w-3.5" /> {CLINIC.phoneDisplay}
      </a>
    </div>
  </div>
);
