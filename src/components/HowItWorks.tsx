import { site } from "../content/site";
import { TherapyJourneyStack } from "./TherapyJourneyStack";
import "../styles/therapy-journey-stack.css";

export function HowItWorks() {
  return <TherapyJourneyStack section={site.howItWorks} />;
}
