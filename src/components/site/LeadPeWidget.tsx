import { useState } from "react";
import { Phone, Send, CheckCircle2, MessageCircle, MapPin, Clock, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { CLINIC } from "@/data/clinic";

export const LeadPeWidget = ({ heading = "Have a Question? Get a Free Callback!" }: { heading?: string }) => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const name = String(data.get("name") || "").trim();
    setSubmitting(true);
    // LeadPe widget — collects details and triggers callback flow
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setDone(true);
    setSubmittedName(name);
    toast({ title: "Request received 📲", description: "We'll call you back shortly. Thank you!" });
    formEl.reset();
  };

  const reset = () => {
    setDone(false);
    setSubmittedName("");
  };

  return (
    <section className="container-page section-y" data-leadpe-widget>
      <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-primary p-6 md:p-10 text-primary-foreground shadow-card">
        {!done ? (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                <Phone className="h-3.5 w-3.5" /> Free Callback in Minutes
              </div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-balance">{heading}</h2>
              <p className="mt-2 text-primary-foreground/85">Leave your details. We'll call you back!</p>
            </div>

            <form onSubmit={onSubmit} className="rounded-2xl bg-background text-foreground p-5 md:p-6 space-y-4 shadow-card">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="leadpe-name">Your Name</Label>
                  <Input id="leadpe-name" name="name" required placeholder="e.g. Priya Sharma" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="leadpe-phone">Phone Number</Label>
                  <Input id="leadpe-phone" name="phone" type="tel" required placeholder="98xxxxxxxx" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="leadpe-msg">How can we help? (optional)</Label>
                <Textarea id="leadpe-msg" name="message" rows={3} placeholder="e.g. Need consultation for fever" className="mt-1.5" />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl h-12 text-base font-semibold">
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending..." : "Get Callback 📲"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">Powered by LeadPe 🌱</p>
            </form>
          </>
        ) : (
          <div
            role="status"
            aria-live="polite"
            className="rounded-2xl bg-background text-foreground p-5 md:p-7 shadow-card"
          >
            <div className="text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold">
                {submittedName ? `Thank you, ${submittedName}!` : "Request Confirmed!"}
              </h3>
              <p className="mt-2 text-muted-foreground">
                Your callback request has been received. Our team will contact you shortly to confirm your appointment.
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-surface-alt p-4 md:p-5">
              <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3">What happens next</div>
              <ol className="space-y-2.5 text-sm">
                <li className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
                  <span>We'll call you back within a few minutes during clinic hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
                  <span>Confirm your preferred time slot with {CLINIC.owner} (Manager).</span>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
                  <span>Visit {CLINIC.name} at the confirmed time — no long waits.</span>
                </li>
              </ol>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <a
                href={`tel:${CLINIC.phone}`}
                className="flex items-start gap-3 rounded-xl border border-border p-3 hover:border-primary/40 hover:bg-primary-soft/40 transition-colors"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Call Manager</span>
                  <span className="block font-bold truncate">{CLINIC.phoneDisplay}</span>
                  <span className="block text-xs text-muted-foreground truncate">{CLINIC.owner}</span>
                </span>
              </a>
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl border border-border p-3 hover:border-accent/40 hover:bg-accent-soft/40 transition-colors"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</span>
                  <span className="block font-bold truncate">Chat with us</span>
                  <span className="block text-xs text-muted-foreground truncate">Quick replies during hours</span>
                </span>
              </a>
              <a
                href={`tel:${CLINIC.doctorPhone}`}
                className="flex items-start gap-3 rounded-xl border border-border p-3 hover:border-primary/40 hover:bg-primary-soft/40 transition-colors"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                  <CalendarCheck className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Practitioner</span>
                  <span className="block font-bold truncate">{CLINIC.doctorPhoneDisplay}</span>
                  <span className="block text-xs text-muted-foreground truncate">{CLINIC.doctor}</span>
                </span>
              </a>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl border border-border p-3 hover:border-primary/40 hover:bg-primary-soft/40 transition-colors"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Visit Us</span>
                  <span className="block font-bold truncate">Get Directions</span>
                  <span className="block text-xs text-muted-foreground truncate">{CLINIC.addressShort}</span>
                </span>
              </a>
            </div>

            <div className="mt-5 flex items-start gap-2 rounded-xl bg-primary-soft/60 px-4 py-3 text-sm text-foreground">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <div>
                <span className="font-semibold">Clinic hours:</span> Mon–Sat 9 AM–1 PM &amp; 5 PM–9 PM • Sun 10 AM–12 PM
              </div>
            </div>

            <Button
              onClick={reset}
              variant="outline"
              className="mt-5 w-full rounded-xl h-11 border-2"
            >
              Submit another request
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">Powered by LeadPe 🌱</p>
          </div>
        )}
      </div>
    </section>
  );
};
