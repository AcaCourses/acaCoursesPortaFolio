import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import StudentEvidence from "./components/StudentEvidence";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Reveal variant="fade">
        <About />
      </Reveal>
      <Reveal variant="fade">
        <Courses />
      </Reveal>
      <Reveal variant="fade">
        <StudentEvidence />
      </Reveal>
      <Reveal variant="fade">
        <Contact />
      </Reveal>
      <Footer />
    </main>
  );
}
