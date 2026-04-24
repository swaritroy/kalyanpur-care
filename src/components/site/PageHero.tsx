import { ReactNode } from "react";

export const PageHero = ({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) => (
  <section className="bg-surface-alt">
    <div className="container-page py-12 md:py-20 text-center max-w-3xl mx-auto">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-balance">{title}</h1>
      {subtitle && <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>}
      {children}
    </div>
  </section>
);
