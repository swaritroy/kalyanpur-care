import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award, Users, Star, HeartPulse, Stethoscope, Microscope, IndianRupee,
  Baby, Thermometer, Activity, GitMerge, Phone, ArrowRight, MapPin, MessageCircle, Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadPeWidget } from "@/components/site/LeadPeWidget";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/data/clinic";
import doctorHero from "@/assets/doctor-hero.jpg";
import patientPriya from "@/assets/patient-priya.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const trust = [
  { icon: Award, text: "Trusted Local Practitioner" },
  { icon: Users, text: "Allopathic • Ayurvedic • Vet" },
  { icon: Star, text: "10% Discount on Medicines" },
];

const why = [
  { icon: HeartPulse, title: "Experienced Care", text: "Shambhu Kumar — a trusted Rural Medical Practitioner (ग्रामीण चिकित्सक) — provides reliable consultations for everyday health concerns." },
  { icon: Stethoscope, title: "Compassionate Care", text: "We believe in listening to our patients. You are not just a number; you are part of our community." },
  { icon: Microscope, title: "Three Systems of Medicine", text: "Allopathic, Ayurvedic and Veterinary medicines available under one roof — with a 10% discount for our community." },
  { icon: IndianRupee, title: "Affordable & Transparent", text: "High-quality healthcare at transparent prices, ensuring peace of mind for your family." },
];

const services = [
  { icon: GitMerge, title: "General Physician Consultation" },
  { icon: Baby, title: "Child Health & Vaccinations" },
  { icon: Thermometer, title: "Fever & Infectious Diseases" },
  { icon: Activity, title: "Chronic Disease Management" },
];

const Index = () => {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-gradient-hero">
        <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 md:py-20">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 bg-accent-soft text-accent px-3 py-1 rounded-full text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" /> Now Open in Chausima, Kalyanpur
            </span>
            <h1 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] text-balance">
              Trusted Medical Care for <span className="text-primary">Every Family in Kalyanpur</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Welcome to {CLINIC.name} — Chausima, Kalyanpur. {CLINIC.doctor} (Rural Medical Practitioner) and Manager {CLINIC.owner} provide reliable consultations and a full pharmacy with allopathic, ayurvedic & veterinary medicines.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 px-6 shadow-pill">
                <Link to="/contact">Book Appointment Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl h-12 px-6 border-2">
                <a href={`tel:${CLINIC.phone}`}><Phone className="mr-2 h-4 w-4" /> Or Call: {CLINIC.phoneDisplay}</a>
              </Button>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-10 blur-2xl" />
            <img
              src={doctorHero}
              alt={`${CLINIC.doctor} — ${CLINIC.doctorTitle} at ${CLINIC.name}`}
              width={1024}
              height={1024}
              className="relative rounded-3xl shadow-card-hover object-cover w-full aspect-square"
            />
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 bg-background rounded-2xl p-3 pr-5 shadow-card-hover">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <Star className="h-5 w-5 fill-accent" />
              </div>
              <div>
                <div className="font-bold text-sm">10% Off</div>
                <div className="text-xs text-muted-foreground">On all medicines</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <div className="container-page pb-12 md:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-3xl bg-background border border-border shadow-card p-4 md:p-6">
            {trust.map((t) => (
              <div key={t.text} className="flex items-center gap-3 px-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><t.icon className="h-5 w-5" /></span>
                <span className="font-semibold">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface-alt section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Why Choose Us" title="Your Health is Our Highest Priority" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {why.map((c, i) => (
              <motion.div key={c.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl bg-background p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Services" title="Our Core Medical Services" subtitle="Providing comprehensive healthcare solutions for residents of Kalyanpur." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.title} to="/services" className="rounded-2xl border border-border bg-background p-6 hover:shadow-card-hover hover:border-primary/30 transition-all group">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-base font-bold">{s.title}</h3>
                <span className="mt-3 inline-flex items-center text-sm text-primary font-medium">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-xl h-12 px-6">
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-y bg-gradient-primary text-primary-foreground">
        <div className="container-page max-w-4xl text-center">
          <Quote className="mx-auto h-10 w-10 text-primary-foreground/40" />
          <p className="mt-6 font-display italic text-2xl md:text-3xl leading-snug text-balance">
            "Shambhu Kumar ji is patient and understanding. He took the time to listen to all my concerns and explained everything clearly. Our whole family now trusts {CLINIC.name} for medicines and consultations."
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <img src={patientPriya} alt="Priya Sharma" width={56} height={56} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-4 ring-primary-foreground/20" />
            <div className="text-left">
              <div className="font-bold">Priya Sharma</div>
              <div className="text-sm text-primary-foreground/75">Awas Vikas, Kalyanpur</div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section className="section-y">
        <div className="container-page grid md:grid-cols-2 gap-8 items-center">
          <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="block rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">
            <iframe
              title="Clinic Location"
              src={CLINIC.mapsEmbed}
              loading="lazy"
              className="w-full h-72 border-0 pointer-events-none"
            />
          </a>
          <div>
            <SectionHeader align="left" eyebrow="Visit Us" title="Conveniently Located in Kalyanpur"
              subtitle="Find us easily for your next appointment. We are centrally located and accessible for all residents of Kalyanpur and nearby areas." />
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl h-12 px-6">
                <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-4 w-4" /> Get Directions</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl h-12 px-6 border-2">
                <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LeadPeWidget />
    </SiteLayout>
  );
};

export default Index;
