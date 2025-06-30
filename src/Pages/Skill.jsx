import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Stat from "./Stat";
import { useRef } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import TechIcon from "../components/TechIcon";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import SkillSection from "../components/SkillSection";

function Skill() {
  const statRef = useRef();
  const isInView = useInView(statRef, { once: true, amount: 0.4 });

  return (
    <section>
      <div ref={statRef} className="py-30 w-full overflow-hidden">
        {isInView && <Stat />}
      </div>
      {/*  skill part 2 */}
      <div className="px-5 md:px-30 bg-snow py-30" id="skills">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ amount: 0.3, once: true }}
        >
          <div className="text-main font-inter text-3xl font-bold">Skill</div>
          <p className="text-gray-600 font-space-grotesk text-xl mt-2">
            I build full-stack apps with the{" "}
            <span className="text-main font-semibold">MERN stack</span> and love
            solving coding challenges to grow as a developer.
          </p>
        </motion.div>
        <SkillSection />
      </div>
    </section>
  );
}

export default Skill;
