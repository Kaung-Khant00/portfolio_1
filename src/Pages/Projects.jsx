import { useState } from "react";
import project1 from "../assets/project1.png";
import project4 from "../assets/project4.png";
import project6 from "../assets/project6.png";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

const leftFadeIn = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
const rightFadeIn = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

function Projects() {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const handleMouseMove = (e) => {
    console.log(x.get(), y.get());

    x.set(e.clientX - 40);
    y.set(e.clientY - 40);
  };
  return (
    <section className="md:px-10 py-20  overflow-hidden" id="projects">
      <AnimatePresence>
        {hovering && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="z-30 fixed w-20 h-20 rounded-full border-2 border-white bg-main bg-opacity-30 flex items-center justify-center text-white text-sm pointer-events-none"
            style={{ left: x, top: y }}
          >
            View
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ amount: 0.3, once: true }}
        className="px-10 md:px-20 "
      >
        <div className="text-main font-inter text-3xl font-bold">Projects</div>
        <p className="text-gray-600 font-space-grotesk text-xl mt-2">
          Though I'm still early in my journey, I'm continuously building small
          projects to strengthen my skills — and I'm excited to take on bigger
          challenges ahead. I’ve spent the last year intensely learning
          full-stack development with MERN. Every day, I challenge myself to
          build, learn, and grow — and this portfolio is just the beginning.
        </p>
      </motion.div>
      <div className="mt-20">
        {/*  canvas game  */}
        <motion.div
          variants={leftFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center gap-10 bg-white lg:p-4 lg:rounded-xl lg:shadow-md lg:mb-10"
        >
          <div className="relative group flex-1 lg:rounded-xl overflow-hidden shadow-md border-4 border-snow transform transition-transform duration-300 hover:scale-105 w-full">
            <img
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onMouseMove={handleMouseMove}
              src={project4}
              alt="Canvas Mini Game Screenshot"
              className="w-full h-auto object-cover cursor-none"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute inset-0 bg-black/85 flex items-center justify-center p-6"
            >
              <div className="text-white text-center space-y-2">
                <h3 className="text-xl font-bold text-main">
                  Canvas Mini Game
                </h3>
                <p className="text-sm">
                  A dynamic and engaging mini-game crafted with{" "}
                  <strong>HTML5 Canvas</strong> and <strong>JavaScript</strong>.
                  Focused on animation, logic, and interactivity.
                </p>
                <a
                  href="#"
                  target="_blank"
                  className="inline-block mt-2 bg-white text-main px-4 py-1 rounded-md shadow hover:bg-opacity-90 transition"
                >
                  View Game
                </a>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block flex-1 space-y-4 text-left">
            <h3 className="text-main font-inter text-2xl font-bold">
              Canvas Mini Game
            </h3>
            <p className="text-gray-700 text-lg font-space-grotesk">
              A dynamic and engaging mini-game crafted using{" "}
              <span className="text-main font-semibold">HTML5 Canvas</span> and{" "}
              <span className="text-main font-semibold">JavaScript</span>. This
              project enhanced my logic, animation rendering, and interactivity
              handling.
            </p>
            <ul className="text-gray-500 text-sm list-disc pl-5">
              <li>Built with pure HTML5 Canvas & vanilla JS</li>
              <li>Focus on performance and player interaction</li>
            </ul>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: "easeInOut" }}
              href="#"
              target="_blank"
              className="inline-block mt-4 hover:bg-sky-400 bg-main text-white px-5 py-2 lg:rounded-md shadow hover:bg-opacity-90 transition"
            >
              View Game
            </motion.a>
          </div>
        </motion.div>

        {/* BreadTalk Redesign */}
        <motion.div
          variants={rightFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center gap-10 bg-white lg:p-4 lg:lg:rounded-xl lg:shadow-md lg:mb-10"
        >
          <div className="hidden lg:block flex-1 space-y-4 text-left">
            <h3 className="text-main font-inter text-2xl font-bold">
              BreadTalk Redesign
            </h3>
            <p className="text-gray-700 text-lg font-space-grotesk">
              A sleek and modern redesign of the BreadTalk website, focusing on
              a clean user experience, product showcasing, and mobile
              responsiveness. Built with{" "}
              <span className="text-main font-semibold">React</span> and{" "}
              <span className="text-main font-semibold">Framer Motion</span>.
            </p>
            <ul className="text-gray-500 text-sm list-disc pl-5">
              <li>Product gallery with smooth transitions</li>
              <li>Responsive layout for all screen sizes</li>
              <li>Modern and minimalistic design</li>
            </ul>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: "easeInOut" }}
              href="#"
              target="_blank"
              className="inline-block mt-4 hover:bg-sky-400 bg-main text-white px-5 py-2 lg:rounded-md shadow hover:bg-opacity-90 transition"
            >
              View Live Demo
            </motion.a>
          </div>
          <div className="relative group flex-1 lg:rounded-xl overflow-hidden shadow-md border-4 border-snow transform transition-transform duration-300 hover:scale-105 w-full">
            <img
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onMouseMove={handleMouseMove}
              src={project6}
              alt="BreadTalk Website Screenshot"
              className="w-full h-auto object-cover cursor-none"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute inset-0 bg-black/85 flex items-center justify-center p-6"
            >
              <div className="text-white text-center space-y-2">
                <h3 className="text-xl font-bold text-main">
                  BreadTalk Redesign
                </h3>
                <p className="text-sm">
                  A modern and sleek redesign of the BreadTalk website built
                  with <strong>React</strong> and <strong>Framer Motion</strong>
                  .
                </p>
                <a
                  href="#"
                  target="_blank"
                  className="inline-block mt-2 bg-white text-main px-4 py-1 rounded-md shadow hover:bg-opacity-90 transition"
                >
                  View Demo
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Travel Explorer */}
        <motion.div
          variants={leftFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center gap-10 bg-white lg:p-4 lg:lg:rounded-xl lg:shadow-md lg:mb-10"
        >
          {/* Image with overlay */}
          <div className="relative group flex-1 lg:rounded-xl overflow-hidden shadow-md border-4 border-snow transform transition-transform duration-300 hover:scale-105 w-full">
            <img
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onMouseMove={handleMouseMove}
              src={project1}
              alt="Travel Website Screenshot"
              className="w-full h-auto object-cover cursor-none"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute inset-0 bg-black/85 flex items-center justify-center p-6"
            >
              <div className="text-white text-center space-y-2">
                <h3 className="text-xl font-bold text-main">Travel Explorer</h3>
                <p className="text-sm">
                  A stylish landing page for travel booking built with{" "}
                  <strong>React</strong> and <strong>Tailwind CSS</strong>.
                </p>
                <a
                  href="#"
                  target="_blank"
                  className="inline-block mt-2 bg-white text-main px-4 py-1 rounded-md shadow hover:bg-opacity-90 transition"
                >
                  View Demo
                </a>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block flex-1 space-y-4 text-left">
            <h3 className="text-main font-inter text-2xl font-bold">
              Travel Explorer
            </h3>
            <p className="text-gray-700 text-lg font-space-grotesk">
              A modern travel landing page designed to showcase destinations,
              packages, and booking features. Built with{" "}
              <span className="text-main font-semibold">React</span> and{" "}
              <span className="text-main font-semibold">Tailwind CSS</span> for
              responsiveness and visual elegance.
            </p>
            <ul className="text-gray-500 text-sm list-disc pl-5">
              <li>Interactive UI with hover effects and smooth transitions</li>
              <li>Responsive design for mobile and desktop views</li>
              <li>Great layout for travel agencies or booking apps</li>
            </ul>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: "easeInOut" }}
              href="#"
              target="_blank"
              className="inline-block mt-4 hover:bg-sky-400 bg-main text-white px-5 py-2 rounded-md shadow hover:bg-opacity-90 transition"
            >
              View Live Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
