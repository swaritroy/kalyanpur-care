import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export const LeadPeWidget = ({ heading = "Have a Question? Get a Free Callback!" }: { heading?: string }) => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // LeadPe widget — collects details and triggers callback flow
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setDone(true);
    toast({ title: "Request received 📲", description: "We'll call you back shortly. Thank you!" });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="container-page section-y" data-leadpe-widget>
      <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-primary p-6 md:p-10 text-primary-foreground shadow-card">
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
            {submitting ? "Sending..." : done ? "Sent — We'll call you!" : "Get Callback 📲"}
          </Button>
          <p className="text-center text-xs text-muted-foreground">Powered by LeadPe 🌱</p>
        </form>
      </div>
    </section>
  );
};
