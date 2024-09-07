import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Question from "./components/Question";
import Footer from "./components/Footer";
import { useRef } from "react";

export default function App() {
  const aboutUsRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="snap-y">
      <HeroSection
        aboutUsRef={aboutUsRef}
        projectsRef={projectsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <AboutUs
        aboutUsRef={aboutUsRef}
        projectsRef={projectsRef}
        servicesRef={servicesRef}
      />
      <Contact contactRef={contactRef} />
      <Question />
      <Footer contactRef={contactRef} />
    </main>
  );
}
