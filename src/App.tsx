import { Route, Routes } from "react-router-dom";
import { ScrollToHashOnNavigate } from "./components/ScrollToHashOnNavigate";
import { site } from "./content/site";
import { HomePage } from "./pages/HomePage";
import { TechniquesPage } from "./pages/TechniquesPage";
import "./styles/layout.css";
import "./styles/health-theme.css";
import "./styles/offer-overview.css";
import "./styles/techniques.css";
import "./styles/scroll-reveal.css";

export default function App() {
  return (
    <>
      <ScrollToHashOnNavigate />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={site.integrativeTechniques.path} element={<TechniquesPage />} />
      </Routes>
    </>
  );
}
