import { motion } from "framer-motion";
import { useRef } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaVuejs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skillData = [
  {
    name: "HTML5",
    color: "bg-orange-500",
    percentage: 85,
    Icon: <FaHtml5 size={30} className="text-orange-500" />,
  },
  {
    name: "CSS3",
    color: "bg-blue-500",
    percentage: 70,
    Icon: <FaCss3 size={30} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    color: "bg-yellow-400",
    percentage: 65,
    Icon: <FaJsSquare size={30} className="text-yellow-400" />,
  },
  {
    name: "PHP",
    color: "bg-indigo-600",
    percentage: 40,
    Icon: <FaPhp size={30} className="text-indigo-600" />,
  },
  {
    name: "Bootstrap",
    color: "bg-purple-600",
    percentage: 65,
    Icon: <FaBootstrap size={30} className="text-purple-600" />,
  },
  {
    name: "Tailwind CSS",
    color: "bg-cyan-500",
    percentage: 60,
    Icon: <SiTailwindcss size={30} className="text-cyan-500" />,
  },
  {
    name: "Laravel",
    color: "bg-red-600",
    percentage: 45,
    Icon: <FaLaravel size={30} className="text-red-600" />,
  },
  {
    name: "Vue.js",
    color: "bg-green-500",
    percentage: 15,
    Icon: <FaVuejs size={30} className="text-green-500" />,
  },
];

const barVariants = {
  hidden: { width: 0 },
  visible: (custom) => ({
    width: `${custom}%`,
    transition: { duration: 1, ease: "easeOut" },
  }),
};

export default function SkillSection() {
  const ref = useRef(null);
  return (
    <>
      <section className="relative mt-10 space-y-10">
        {/* MERN STACK BLOCK */}
        <motion.div
          ref={ref}
          className="flex flex-col gap-3 bg-white p-5 rounded-xl shadow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className="flex gap-2 bg-gray-100 p-3 rounded-lg">
                <SiMongodb size={28} className="text-green-600" />
                <SiExpress size={28} className="text-gray-700" />
                <FaReact size={28} className="text-blue-500" />
                <FaNodeJs size={28} className="text-green-500" />
              </div>
              <span className="text-lg font-semibold text-gray-700">
                MERN Stack
              </span>
            </div>
            <span className="text-sm text-gray-500">40% Junior</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <motion.div
              className="bg-emerald-600 h-full rounded-full"
              variants={barVariants}
              initial="hidden"
              whileInView="visible"
              custom={40}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* OTHER SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map(({ name, Icon, color, percentage }, i) => (
            <motion.div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-between md:mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                    {Icon}
                  </div>
                  <span className="font-medium text-gray-800">{name}</span>
                </div>
                <span className="text-sm text-gray-500 sm:block hidden">
                  {percentage}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full sm:block hidden">
                <motion.div
                  className={`h-full rounded-full ${color}`}
                  variants={barVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={percentage}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
