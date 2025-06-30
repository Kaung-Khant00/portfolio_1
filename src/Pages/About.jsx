import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section id="about" className="relative h-auto pt-50 bg-snow pb-20 ">
      <div className="flex flex-col justify-center h-full lg:px-30 px-10 ">
        <div className="sticky top-15">
          <div className="text-main font-inter text-3xl font-bold">
            About me
          </div>
        </div>
        <div>
          {[
            {
              title: "Who I Am",
              text: "I’m Kaung Khant — a future Software Engineer and Full Stack Developer.",
            },
            {
              title: "What I Do",
              text: "I build web apps using the MERN stack and am currently learning Laravel, Vue, and PHP.",
            },
            {
              title: "What Drives Me",
              text: "I love solving problems and often practice on LeetCode to sharpen my skills.",
            },
            {
              title: "How I Work",
              text: "I'm adaptable, collaborative, and focused on writing clean, efficient code that works.",
            },
            {
              title: "Let’s Connect",
              text: "Check out my projects or get in touch — I’m always open to new challenges!",
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ top: 100 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="pt-20 sticky bg-snow "
            >
              <motion.div className="font-sans text-3xl text-gray-700 pb-2">
                {section.title}
              </motion.div>
              <p className="text-gray-600 font-space-grotesk text-2xl ">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
