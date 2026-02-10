import { motion } from "framer-motion";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Expertise } from "./components/sections/Expertise";
import { Experience } from "./components/sections/Experience";
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
        <Experience />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
