import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { ServicesOffered } from "./components/ServicesOffered";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F5F5]">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <TechStack />
      <ServicesOffered />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
