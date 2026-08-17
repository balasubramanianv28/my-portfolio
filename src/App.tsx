import "./App.css";
import Experience from "./sections/Experience";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />

        <Experience />

        <Projects />

        <Skills />

        <Achievements />

        <Contact />
      </main>
    </>
  );
}

export default App;