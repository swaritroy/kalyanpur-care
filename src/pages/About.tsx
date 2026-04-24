import { ShieldCheck, Accessibility, Sparkles, GraduationCap, BadgeCheck, Briefcase, User } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadPeWidget } from "@/components/site/LeadPeWidget";
import doctorHero from "@/assets/doctor-hero.jpg";
import { CLINIC } from "@/data/clinic";

const values = [
  { icon: ShieldCheck, title: "Trust", text: "We build lasting patient relationships based on honesty, transparency, and confidentiality." },
  { icon: Accessibility, title: "Accessibility", text: "Quality healthcare should be available to everyone. We strive to be affordable and conveniently located for the Kalyanpur community." },
  { icon: Sparkles, title: "Excellence", text: "We are committed to continuous learning and using evidence-based practices to provide the best possible medical outcomes." },
];

const team = [
  { name: "Sunita Verma", role: "Clinic Manager & Patient Coordinator", bio: "Sunita ensures our clinic runs smoothly and is your first point of contact for appointments." },
  { name: "Rajesh Kumar", role: "Pharmacy Assistant", bio: "Rajesh helps manage the pharmacy and assists patients with their prescribed medications." },
];

const About = () => (
  <SiteLayout>
    <section className="bg-gradient-hero">
      <div className="container-page py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <img src={doctorHero} alt={CLINIC.doctor} width={1024} height={1024} loading="eager"
          className="rounded-3xl shadow-card-hover object-cover w-full aspect-square max-w-md mx-auto md:mx-0" />
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent-soft px-3 py-1 rounded-full">About</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">Meet {CLINIC.doctor} & The Team</h1>
          <p className="mt-3 text-sm text-muted-foreground">Owned & managed by <span className="font-semibold text-foreground">{CLINIC.owner}</span> ({CLINIC.ownerNote})</p>
          <blockquote className="mt-6 border-l-4 border-accent pl-4">
            <p className="font-display italic text-xl text-foreground">
              "Our mission is simple: to provide the families of Kalyanpur with healthcare they can trust, year after year."
            </p>
            <footer className="mt-2 text-sm text-muted-foreground">— {CLINIC.doctor}, Founder</footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section className="section-y">
      <div className="container-page grid md:grid-cols-3 gap-8">
        <aside className="rounded-2xl bg-surface-alt p-6 shadow-card md:sticky md:top-24 h-fit">
          <h3 className="font-display text-lg font-bold flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary" /> Qualifications</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>M.B.B.S. — King George's Medical University, Lucknow</li>
            <li>Diploma in Family Medicine</li>
          </ul>
          <h3 className="mt-5 font-display text-lg font-bold flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-primary" /> Registration</h3>
          <p className="mt-2 text-sm text-muted-foreground">Registered with the UP Medical Council, Reg. No: 98765</p>
          <h3 className="mt-5 font-display text-lg font-bold flex items-center gap-2"><Briefcase className="h-5 w-5 text-primary" /> Experience</h3>
          <p className="mt-2 text-sm text-muted-foreground">15+ Years in General Practice</p>
        </aside>
        <div className="md:col-span-2">
          <h2 className="font-display text-3xl font-bold">A Message from Our Founder</h2>
          <div className="mt-4 space-y-4 text-foreground/90 leading-relaxed">
            <p>Hello, I'm {CLINIC.doctor}. My journey into medicine was driven by a deep-seated desire to serve the community I grew up in. After completing my medical education and gaining valuable experience in various city hospitals, I returned to Kalyanpur with a vision to create a clinic that combines modern medical standards with the warmth and trust of a traditional family doctor.</p>
            <p>At {CLINIC.name}, we don't just treat illnesses; we build relationships. We take the time to understand your lifestyle, your concerns, and your health goals.</p>
            <p>My team and I are committed to being your dedicated partners in health. We look forward to welcoming you and your family.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-y bg-surface-alt">
      <div className="container-page">
        <SectionHeader eyebrow="Our Values" title="Our Guiding Principles" />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-background p-6 shadow-card hover:shadow-card-hover transition-all text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary mb-4"><v.icon className="h-7 w-7" /></span>
              <h3 className="font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-y">
      <div className="container-page">
        <SectionHeader eyebrow="The Team" title="Our Dedicated Support Staff" />
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border p-6 flex items-start gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent shrink-0"><User className="h-7 w-7" /></span>
              <div>
                <h3 className="font-display text-lg font-bold">{m.name}</h3>
                <p className="text-sm text-primary font-medium">{m.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <LeadPeWidget heading="Want to Meet Our Team? Book a Visit." />
  </SiteLayout>
);

export default About;
