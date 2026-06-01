import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import StudentEvidence from "./components/StudentEvidence";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <StudentEvidence />
      <Contact />
      <Footer />
    </main>
  );
}
