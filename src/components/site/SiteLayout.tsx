import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { EmergencyBar } from "./EmergencyBar";

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <EmergencyBar />
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);
