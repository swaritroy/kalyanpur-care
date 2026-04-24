import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LeadPeWidget } from "@/components/site/LeadPeWidget";
import monsoon from "@/assets/blog-monsoon.jpg";
import diabetes from "@/assets/blog-diabetes.jpg";
import hydration from "@/assets/blog-hydration.jpg";

const posts = [
  { img: monsoon, tag: "Seasonal", title: "Staying Healthy During Monsoon in Kanpur: 5 Simple Tips", excerpt: "The monsoon brings relief from the heat, but also a rise in infections. Here's how to protect your family from common monsoon illnesses..." },
  { img: diabetes, tag: "Chronic Care", title: "Managing Diabetes: Diet Tips for a North Indian Lifestyle", excerpt: "Living with diabetes doesn't mean giving up all your favourite foods. Dr. Sambhu shares practical tips for managing your diet..." },
  { img: hydration, tag: "Child Care", title: "Is Your Child Getting Enough Water? Signs of Dehydration in Kids", excerpt: "With rising temperatures, dehydration is a serious risk for children. Learn to spot the early signs and keep your little ones safe..." },
];

const HealthTips = () => (
  <SiteLayout>
    <PageHero title="Health & Wellness Tips from Shashi Medical Hall"
      subtitle="Simple advice to help you and your family stay healthy in Kalyanpur." />
    <section className="section-y">
      <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-2xl bg-background border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="self-start inline-block text-[11px] font-semibold tracking-widest uppercase text-accent bg-accent-soft px-2.5 py-1 rounded-full">{p.tag}</span>
              <h3 className="mt-3 font-display text-xl font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-flex items-center text-sm font-semibold text-primary">Read More <ArrowRight className="ml-1 h-4 w-4" /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
    <LeadPeWidget heading="Want Personalised Health Advice? Talk to Dr. Sambhu." />
  </SiteLayout>
);
export default HealthTips;
