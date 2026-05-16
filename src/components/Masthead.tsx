import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { site } from "../content/site";

/**
 * Topo: foto de ambiente + vinheta teal, menu e hero alinhados ao modelo de referência.
 */
export function Masthead() {
  return (
    <section className="masthead masthead--health" id="topo" aria-label="Início">
      <div
        className="masthead__bg"
        style={{ backgroundImage: `url(${site.hero.backgroundImage})` }}
        aria-hidden
      />
      <div className="masthead__dim" aria-hidden />
      <div className="masthead__front">
        <AnnouncementBar />
        <Header />
        <Hero />
      </div>
    </section>
  );
}
