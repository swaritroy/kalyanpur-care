import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LeadPeWidget } from "@/components/site/LeadPeWidget";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What are your clinic timings?", a: "We are open Monday to Saturday from 9:00 AM to 1:00 PM and 5:00 PM to 9:00 PM. On Sunday, we are open only in the morning from 10:00 AM to 12:00 PM. Visit our Contact page for full details." },
  { q: "Where exactly is Shashi Medical Hall located in Kalyanpur?", a: "We are located on Main Market Road, Kalyanpur, Kanpur. Easy to find near the central market area. Tap the Get Directions button on the Contact page for Google Maps navigation." },
  { q: "What is the consultation fee for a first-time visit?", a: "Our standard first-time consultation fee is ₹300. This includes a thorough check-up and prescription." },
  { q: "Do you provide emergency services?", a: "We handle urgent but non-life-threatening conditions during clinic hours. For severe emergencies like a heart attack or major accident, please go to the nearest hospital emergency room." },
  { q: "Can I get my lab tests done at your clinic?", a: "While we don't have an in-house lab, we have tie-ups with reputable local pathology labs in Kalyanpur and can facilitate sample collection." },
  { q: "How can I pay for the consultation?", a: "We accept cash, UPI (Paytm, Google Pay), and debit/credit cards." },
  { q: "Do you offer online or video consultations?", a: "Currently, we focus on in-person consultations for the most accurate diagnosis. Please contact us on WhatsApp to inquire about possibilities for follow-up reviews." },
  { q: "Is parking available near the clinic?", a: "Yes, there is on-street parking available near the clinic premises." },
];

const FAQ = () => (
  <SiteLayout>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        })),
      })}</script>
    </Helmet>
    <PageHero title="Frequently Asked Questions"
      subtitle="Everything you need to know before your visit to Shashi Medical Hall." />
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <Accordion type="single" collapsible className="bg-background rounded-2xl border border-border shadow-card divide-y divide-border">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="px-5">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
    <LeadPeWidget heading="Still Have Questions? We'll Call You Back." />
  </SiteLayout>
);
export default FAQ;
