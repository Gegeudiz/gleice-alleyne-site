import { About } from "../components/About";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { HowItWorks } from "../components/HowItWorks";
import { LiveHighlight } from "../components/LiveHighlight";
import { Masthead } from "../components/Masthead";
import { OfferOverview } from "../components/OfferOverview";
import { ProductsSection } from "../components/ProductsSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { TechniquesTeaser } from "../components/TechniquesTeaser";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
  return (
    <>
      <Masthead />
      <main>
        <div className="page">
          <OfferOverview />
          <ScrollReveal delayMs={40}>
            <TechniquesTeaser />
          </ScrollReveal>
          <ScrollReveal delayMs={45}>
            <Features />
          </ScrollReveal>
          <ScrollReveal delayMs={55}>
            <HowItWorks />
          </ScrollReveal>
        </div>
        <ScrollReveal delayMs={40}>
          <ProductsSection />
        </ScrollReveal>
        <div className="page">
          <ScrollReveal>
            <About />
          </ScrollReveal>
          <ScrollReveal delayMs={50}>
            <LiveHighlight />
          </ScrollReveal>
          <ScrollReveal delayMs={45}>
            <Testimonials />
          </ScrollReveal>
          <ScrollReveal delayMs={35}>
            <FAQ />
          </ScrollReveal>
        </div>
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
}
