export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) => (
  <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-10 md:mb-14`}>
    {eyebrow && (
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent-soft px-3 py-1 rounded-full">
        {eyebrow}
      </span>
    )}
    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground text-balance">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground md:text-lg">{subtitle}</p>}
  </div>
);
