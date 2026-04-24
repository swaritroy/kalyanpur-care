import { Star, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LeadPeWidget } from "@/components/site/LeadPeWidget";

const data = [
  { rating: 5, quote: "Finally, a doctor in Kalyanpur who actually listens. Dr. Aditya was thorough and didn't rush the appointment. Highly recommended for family health.", name: "Rohan Gupta", loc: "Indira Nagar, Kalyanpur" },
  { rating: 5, quote: "I took my daughter for her vaccinations here. The process was so smooth and the clinic is very clean. The staff was great with my child.", name: "Anita Singh", loc: "Kalyanpur" },
  { rating: 4, quote: "Good experience for my father's regular BP check-up. The fees are reasonable and the location is very convenient.", name: "Mohammed Afzal", loc: "Keshavpuram" },
  { rating: 5, quote: "Dr. Aditya correctly diagnosed my chronic acidity issue that two other doctors had missed. Forever grateful to Shashi Medical Hall.", name: "Sneha Pandey", loc: "Awas Vikas, Kalyanpur" },
  { rating: 5, quote: "Very honest doctor. He didn't prescribe unnecessary tests or expensive medicines. Trustworthy clinic in our area.", name: "Vikram Yadav", loc: "Kalyanpur" },
  { rating: 5, quote: "We are a family of 5 and we all visit Shashi Medical Hall. Convenient timings and the doctor knows our complete health history.", name: "Sushma Tripathi", loc: "Geeta Nagar, Kalyanpur" },
];

const Testimonials = () => (
  <SiteLayout>
    <PageHero title="What Our Patients in Kalyanpur Say"
      subtitle="Real stories from the families who trust us with their health." />
    <section className="section-y">
      <div className="container-page grid md:grid-cols-2 gap-6">
        {data.map((t, i) => (
          <article key={i} className="rounded-2xl bg-background border border-border p-6 shadow-card hover:shadow-card-hover transition-all">
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className={`h-4 w-4 ${idx < t.rating ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <Quote className="h-6 w-6 text-primary-soft" />
            </div>
            <p className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</p>
            <div className="mt-5 pt-4 border-t border-border">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.loc}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
    <LeadPeWidget heading="Become Our Next Happy Patient" />
  </SiteLayout>
);
export default Testimonials;
