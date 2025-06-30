import { motion } from "framer-motion";
import { RiHome5Line } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineContactPage, MdOutlinePhoto } from "react-icons/md";
import { FiMail, FiTool } from "react-icons/fi";
import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState("Home");
  const navItems = [
    { id: "Home", icon: <RiHome5Line size={24} />, delay: 0.1 },
    { id: "About", icon: <LuUserRound size={24} />, delay: 0.2 },
    { id: "Skills", icon: <FiTool size={24} />, delay: 0.3 },
    {
      id: "Projects",
      icon: <MdOutlinePhoto size={24} />,
      delay: 0.4,
    },
    { id: "Contact", icon: <FiMail size={24} />, delay: 0.5 },
  ];

  return (
    <ul className="z-50 hidden lg:flex max-w-[75px] sticky top-0 flex-col h-screen justify-center p-2 ms-1">
      {navItems.map((item) => (
        <motion.li
          key={item.id}
          className="my-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 200, duration: 0.2 },
          }}
          whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          <a href={`#${item.id.toLowerCase()}`}>
            <motion.div
              onClick={() => setActive(item.id)}
              layout
              initial={{ width: 60 }} // same as w-12
              whileHover={{ width: 160 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`shadow flex items-center p-4 gap-5 overflow-hidden rounded-full cursor-pointer transition-colors duration-300 ${
                active === item.id
                  ? "bg-main text-white blue__gradient"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 gray__gradient"
              }`}
            >
              <span>{item.icon}</span>
              <span className="text-lg font-medium">{item.id}</span>
            </motion.div>
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

export default NavBar;
