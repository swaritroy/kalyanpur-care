import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LeadPeWidget } from "@/components/site/LeadPeWidget";
import { CLINIC } from "@/data/clinic";

const Contact = () => (
  <SiteLayout>
    <PageHero title="Get In Touch or Visit Us Today"
      subtitle="We're here to help. Reach out via phone, WhatsApp, or visit us at our Kalyanpur clinic." />

    <section className="section-y">
      <div className="container-page grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-surface-alt">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shrink-0"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone</div>
                <a href={`tel:${CLINIC.phone}`} className="font-bold text-lg text-foreground hover:text-primary">{CLINIC.phoneDisplay}</a>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-surface-alt">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-whatsapp text-whatsapp-foreground shrink-0"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">WhatsApp</div>
                <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="font-bold text-lg text-foreground hover:text-accent">Chat with us</a>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-surface-alt">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground shrink-0"><MapPin className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Address</div>
                <p className="font-medium">{CLINIC.address}</p>
              </div>
            </li>
          </ul>

          <h2 className="font-display text-2xl font-bold pt-2 flex items-center gap-2"><Clock className="h-6 w-6 text-primary" /> Clinic Timings</h2>
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr><th className="text-left p-3">Day</th><th className="text-left p-3">Morning</th><th className="text-left p-3">Evening</th></tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                <tr><td className="p-3 font-medium">Mon - Sat</td><td className="p-3">9:00 AM - 1:00 PM</td><td className="p-3">5:00 PM - 9:00 PM</td></tr>
                <tr><td className="p-3 font-medium">Sunday</td><td className="p-3">10:00 AM - 12:00 PM</td><td className="p-3 text-destructive font-semibold">CLOSED</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">⏱️ Lunch Break: 1:00 PM to 5:00 PM</p>
        </div>

        <div>
          <LeadPeWidget heading="Book Your Appointment Directly" />
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="container-page">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">Our Location in Kalyanpur</h2>
        <div className="rounded-3xl overflow-hidden shadow-card border border-border">
          <iframe
            title="Shashi Medical Hall Map"
            src={CLINIC.mapsEmbed}
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </SiteLayout>
);
export default Contact;
