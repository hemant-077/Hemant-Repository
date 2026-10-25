import { KageLandingPage } from "@designcodeio/threeui/components/KageLandingPage";
import { portfolioTheme } from "./portfolioTheme";
import "./KagePortfolio.css";

/**
 * The Three.js portfolio runs from public/landing-pages/kage.html inside the
 * vendor's Kage iframe. Keeping this boundary isolated prevents the WebGL
 * runtime from leaking into the app shell.
 */
export function KagePortfolio() {
  return (
    <section className="kage-portfolio" aria-label="Hemant Chhoker portfolio">
      <KageLandingPage {...portfolioTheme} />
    </section>
  );
}
