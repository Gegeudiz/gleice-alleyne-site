import { site } from "../content/site";
import { SectionCta } from "./SectionCta";
import { TherapyJourneyStack } from "./TherapyJourneyStack";
import "../styles/therapy-journey-stack.css";

export function HowItWorks() {
  const c = site.howItWorks.cta;
  return (
    <>
      <TherapyJourneyStack section={site.howItWorks} />
      <SectionCta title={c.title} body={c.body} buttonLabel={c.buttonLabel} href={c.href} />
    </>
  );
}
