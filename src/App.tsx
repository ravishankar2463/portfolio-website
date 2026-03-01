import { motion } from "framer-motion";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Expertise } from "./components/sections/Expertise";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
