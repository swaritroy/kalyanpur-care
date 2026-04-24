import { MessageCircle } from "lucide-react";
import { CLINIC } from "@/data/clinic";

export const FloatingWhatsApp = () => (
  <a
    href={CLINIC.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    title="Chat with us on WhatsApp"
    className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground animate-wa-pulse hover:scale-110 transition-transform"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);
