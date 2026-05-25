import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Ethos } from "@/components/site/Ethos";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A-Interiors — Transforming Spaces With Style & Comfort" },
      { name: "description", content: "Premium interior design, finishing and renovation specialists in Zimbabwe — kitchens, ceilings, painting, flooring & more." },
      { property: "og:title", content: "A-Interiors — Premium Interior & Renovation Specialists" },
      { property: "og:description", content: "Transforming residential and commercial spaces in Zimbabwe with style, comfort and craftsmanship." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://a-interiors.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://a-interiors.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "A-Interiors",
          description:
            "Premium interior design, finishing and renovation specialists in Zimbabwe — residential and commercial.",
          url: "https://a-interiors.lovable.app/",
          areaServed: "Zimbabwe",
          address: { "@type": "PostalAddress", addressCountry: "ZW", addressLocality: "Harare" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    const t = setTimeout(tryScroll, 80);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ethos />
        <Services />
        <Projects />
        <WhyUs />
        <Process />
        <Clients />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
