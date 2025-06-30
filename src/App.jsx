import "./App.css";
import NavBar from "./components/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Skill from "./Pages/Skill";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import { motion } from "framer-motion";
import CV from "./assets/cv.jpg";

const App = () => {
  return (
    <div className="flex m-auto ">
      <div className="z-50 fixed top-3 right-3">
        <a href={CV} download className="bg-main rounded px-4 py-2 text-white">
          Get my CV
        </a>
      </div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed inset-0 bg-main z-50 h-screen py-50"
      />
      {/*  side nav bar  */}
      <NavBar />
      <div className="flex-1">
        <div id="home"></div>
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
