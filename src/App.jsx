import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Question from "./components/Question";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="snap-y">
      <HeroSection />
      <AboutUs />
      <Contact />
      <Question />
      <Footer />
    </main>
  );
}
