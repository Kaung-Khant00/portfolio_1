import { FaGithub, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { RiTelegram2Fill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";
import { SlArrowUpCircle } from "react-icons/sl";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 px-6 mt-20 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Kaung Khant</h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Junior Full Stack Developer passionate about building modern,
            reliable, and user-friendly web applications.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-main transition duration-200"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-main transition duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-main transition duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-main transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Let’s Connect</h3>
          <div className="flex gap-5 text-xl">
            <a
              href="https://github.com/Kaung-Khant00"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://t.me/KaungKhant009136"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main transition"
            >
              <RiTelegram2Fill />
            </a>
            <a
              href="https://www.tiktok.com/@kaungkhant_dev?_t=ZS-8xdi9CEkawx&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main transition"
            >
              <FaTiktok />
            </a>
          </div>
          <p className="text-sm text-gray-400">pep281907@gmail.com</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Kaung Khant — All Rights Reserved.
      </div>
      <div className="absolute bottom-10 right-10">
        <SlArrowUpCircle size={50} />
      </div>
    </footer>
  );
}

export default Footer;
