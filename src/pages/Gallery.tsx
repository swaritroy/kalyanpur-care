import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import waiting from "@/assets/clinic-waiting.jpg";
import consultation from "@/assets/clinic-consultation.jpg";
import equipment from "@/assets/clinic-equipment.jpg";
import reception from "@/assets/clinic-reception.jpg";
import exterior from "@/assets/clinic-exterior.jpg";
import doctor from "@/assets/doctor-hero.jpg";

type Cat = "All" | "Clinic Interior" | "Our Team" | "Equipment";
const items: { src: string; alt: string; cat: Exclude<Cat, "All"> }[] = [
  { src: waiting, alt: "Clinic waiting area", cat: "Clinic Interior" },
  { src: consultation, alt: "Doctor's consultation room", cat: "Clinic Interior" },
  { src: equipment, alt: "Medical equipment", cat: "Equipment" },
  { src: reception, alt: "Clinic reception", cat: "Our Team" },
  { src: doctor, alt: "Dr. Sambhu Yadav", cat: "Our Team" },
  { src: exterior, alt: "Clinic exterior", cat: "Clinic Interior" },
];
const cats: Cat[] = ["All", "Clinic Interior", "Our Team", "Equipment"];

const Gallery = () => {
  const [filter, setFilter] = useState<Cat>("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <SiteLayout>
      <PageHero title="A Glimpse Inside Shashi Medical Hall"
        subtitle="Take a virtual tour of our clean, modern clinic in Kalyanpur." />
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-surface-alt text-foreground hover:bg-primary-soft"
                }`}>{c}</button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((i) => (
              <button key={i.src} onClick={() => setOpen(i.src)}
                className="mb-5 block w-full overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all break-inside-avoid">
                <img src={i.src} alt={i.alt} loading="lazy" className="w-full hover:scale-105 transition-transform duration-500" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[60] bg-foreground/90 grid place-items-center p-4 animate-fade-in" onClick={() => setOpen(null)}>
          <button className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-background text-foreground" aria-label="Close"><X /></button>
          <img src={open} alt="Preview" className="max-h-[90vh] max-w-full rounded-2xl shadow-card-hover" />
        </div>
      )}
    </SiteLayout>
  );
};
export default Gallery;
