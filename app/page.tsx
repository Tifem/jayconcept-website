import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FrameShowcase from "./components/FrameShowcase";
import AboutCEO from "./components/AboutCEO";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <FrameShowcase />
      <AboutCEO />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
