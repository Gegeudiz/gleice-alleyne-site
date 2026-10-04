import { About } from "../components/About";
import { FAQ } from "../components/FAQ";
import { FinalCta } from "../components/FinalCta";
import { Footer } from "../components/Footer";
import { LiveHighlight } from "../components/LiveHighlight";
import { Masthead } from "../components/Masthead";
import { ProcessSteps } from "../components/ProcessSteps";
import { ProductsSection } from "../components/ProductsSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";

/**
 * Landing page (página 1), inspirada na referência clara/elegante:
 * topo → como posso te ajudar → caminho em 4 passos → produtos (Netflix) →
 * depoimentos → sobre → live → FAQ → chamada final com foto → rodapé.
 */
export function HomePage() {
  return (
    <>
      <Masthead />
      <main>
        <div className="page page--services">
          <ScrollReveal delayMs={30}>
            <Services />
          </ScrollReveal>
        </div>
        <ScrollReveal delayMs={40}>
          <div className="band band--cream">
            <div className="page page--band">
              <ProcessSteps />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delayMs={40}>
          <ProductsSection />
        </ScrollReveal>
        <div className="page">
          <ScrollReveal delayMs={45}>
            <Testimonials />
          </ScrollReveal>
          <ScrollReveal>
            <About />
          </ScrollReveal>
          <ScrollReveal delayMs={50}>
            <LiveHighlight />
          </ScrollReveal>
          <ScrollReveal delayMs={35}>
            <FAQ />
          </ScrollReveal>
          <ScrollReveal delayMs={30}>
            <FinalCta />
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
