import { Link } from "react-router-dom";
import { Stethoscope, Baby, HeartPulse, Droplets, Syringe, Cross,
  Calendar, MessageSquare, TestTube, Repeat, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadPeWidget } from "@/components/site/LeadPeWidget";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { icon: Stethoscope, title: "General Physician Consultation", desc: "Comprehensive check-up, diagnosis, and treatment for common illnesses like cold, cough, fever, and digestive issues.", fee: "Consultation Fee: ₹300" },
  { icon: Baby, title: "Pediatric Care (Child Health)", desc: "Specialized care for infants, children, and adolescents, including vaccinations, growth monitoring, and common childhood illnesses.", fee: "Consultation Fee: ₹400" },
  { icon: HeartPulse, title: "Chronic Disease Management", desc: "Ongoing management for conditions like Diabetes, Hypertension (High BP), Thyroid disorders, and Asthma.", fee: "Follow-up Fee: ₹250" },
  { icon: Droplets, title: "Nebulization & Injections", desc: "In-clinic services for administering prescribed injections and nebulizer treatments for respiratory issues.", fee: "Starts from ₹100" },
  { icon: Syringe, title: "Vaccinations & Immunization", desc: "Complete range of vaccines for both children and adults as per the national immunization schedule.", fee: "As per vaccine MRP" },
  { icon: Cross, title: "Minor Injury & Wound Care", desc: "First aid, dressing, and care for minor cuts, burns, and injuries that don't require hospital admission.", fee: "On Enquiry" },
];

const steps = [
  { icon: Calendar, title: "Book an Appointment", text: "Easily book online, via WhatsApp, or by calling us directly." },
  { icon: MessageSquare, title: "Consultation with Practitioner", text: "Have a detailed and empathetic consultation with Shambhu Kumar (Rural Medical Practitioner)." },
  { icon: TestTube, title: "Diagnosis & Treatment Plan", text: "Receive a clear diagnosis and a personalized treatment plan tailored to your needs." },
  { icon: Repeat, title: "Follow-up & Care", text: "We ensure proper follow-up to monitor your recovery and long-term well-being." },
];

const faqs = [
  { q: "Do I need an appointment, or can I walk in?", a: "While we do accept walk-in patients, we highly recommend booking an appointment to avoid waiting times. You can call us or book online for convenience." },
  { q: "Are the consultation fees fixed?", a: "Yes, the consultation fees listed for standard services like General Consultation are fixed. For procedures or specialized treatments, the cost will be discussed transparently with you beforehand." },
  { q: "Do you accept health insurance?", a: "Currently, we operate on a direct payment basis. We provide detailed receipts which you can use to claim reimbursement from your insurance provider as per your policy terms." },
];

const Services = () => (
  <SiteLayout>
    <PageHero
      title="Comprehensive Medical Services in Kalyanpur"
      subtitle="From routine check-ups to managing chronic conditions, we offer a wide range of services to keep you and your family healthy."
    />

    <section className="section-y">
      <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <article key={s.title} className="rounded-2xl bg-background border border-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary mb-4">
              <s.icon className="h-6 w-6" />
            </span>
            <h3 className="font-display text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{s.desc}</p>
            <div className="mt-4 inline-flex items-center px-3 py-1.5 rounded-full bg-accent-soft text-accent text-sm font-semibold w-fit">{s.fee}</div>
            <Button asChild className="mt-5 bg-primary text-primary-foreground rounded-xl">
              <Link to="/contact">Book / Enquire <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </article>
        ))}
      </div>
    </section>

    <section className="section-y bg-surface-alt">
      <div className="container-page">
        <SectionHeader eyebrow="Process" title="Your Journey to Better Health" />
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-background p-6 shadow-card">
              <div className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-pill">{i + 1}</div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent mt-2 mb-3"><s.icon className="h-5 w-5" /></span>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-y">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Common Questions about our Services" />
        <Accordion type="single" collapsible className="bg-background rounded-2xl border border-border shadow-card divide-y divide-border">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`s-${i}`} className="px-5">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <LeadPeWidget heading="Not Sure Which Service You Need? Ask Us." />
  </SiteLayout>
);

export default Services;
