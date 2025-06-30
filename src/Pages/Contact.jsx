import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

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

function Contact() {
  return (
    <section className="bg-snow2 p-10 py-20 " id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ amount: 0.3, once: true }}
        className="px-10"
      >
        <div className="text-main font-inter text-3xl font-bold ">
          Let’s Work Together!
        </div>
        <p className="text-gray-600 text-lg font-space-grotesk mt-6 ">
          Whether you have an idea, a question, or just want to say hi. I’d love
          to hear from you. I'm open to collaborations and full-time
          opportunities. Let’s connect and build something amazing together!
        </p>
      </motion.div>

      <div className="mt-15 lg:flex xl:px-10 gap-5">
        <motion.div
          variants={leftFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=" flex-1 lg:flex-2 space-y-5"
        >
          {/*   address location */}
          <div className="flex items-center bg-white rounded shadow-sm">
            <div className="w-22 h-22 relative group ">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:fill-main fill-snow transition_duration"
                  d="M35.9,-10.1C40.8,3.2,34.9,21.6,23.4,29.3C11.9,37.1,-5.4,34.1,-17.3,25.1C-29.3,16.1,-35.9,1.1,-32.2,-10.7C-28.4,-22.5,-14.2,-31.2,0.7,-31.4C15.5,-31.6,31.1,-23.4,35.9,-10.1Z"
                  transform="translate(50 50)"
                  strokeWidth="0"
                />
              </svg>
              <div className="absolute_center font-bold">
                <FaLocationDot
                  size={35}
                  className="text-main group-hover:text-snow"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-inter text-main font-semibold">
                Location
              </h1>
              <p className="text-gray-400 text-lg font-space-grotesk font-semibold">
                Nay Pyi Taw, Zabuthiri Township
              </p>
            </div>
          </div>
          {/*  phone number */}
          <div className="flex items-center bg-white rounded shadow-sm">
            <div className="w-22 h-22 relative group ">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:fill-main fill-snow transition_duration"
                  d="M35.9,-10.1C40.8,3.2,34.9,21.6,23.4,29.3C11.9,37.1,-5.4,34.1,-17.3,25.1C-29.3,16.1,-35.9,1.1,-32.2,-10.7C-28.4,-22.5,-14.2,-31.2,0.7,-31.4C15.5,-31.6,31.1,-23.4,35.9,-10.1Z"
                  transform="translate(50 50)"
                  strokeWidth="0"
                />
              </svg>
              <div className="absolute_center font-bold">
                <FaPhoneAlt
                  size={30}
                  className="text-main group-hover:text-snow"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-inter text-main font-semibold">
                Phone Number
              </h1>
              <p className="text-gray-400 text-lg font-space-grotesk font-semibold">
                +959 4470 69449
              </p>
            </div>
          </div>
          {/* email address */}
          <div className="flex items-center bg-white rounded shadow-sm">
            <div className="w-22 h-22 relative group ">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:fill-main fill-snow transition_duration"
                  d="M35.9,-10.1C40.8,3.2,34.9,21.6,23.4,29.3C11.9,37.1,-5.4,34.1,-17.3,25.1C-29.3,16.1,-35.9,1.1,-32.2,-10.7C-28.4,-22.5,-14.2,-31.2,0.7,-31.4C15.5,-31.6,31.1,-23.4,35.9,-10.1Z"
                  transform="translate(50 50)"
                  strokeWidth="0"
                />
              </svg>
              <div className="absolute_center font-bold">
                <MdEmail
                  size={30}
                  className="text-main group-hover:text-snow"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-inter text-main font-semibold">
                Email
              </h1>
              <p className="text-gray-400 text-lg font-space-grotesk font-semibold">
                pep281907@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={rightFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 lg:flex-3 rounded "
        >
          <div className="bg-white p-4 py-6 flex flex-col gap-4 mt-5 sm:mt-0">
            <div className="flex flex-col sm:flex-row gap-4 font-space-grotesk">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 py-2 px-3 border-1 border-gray focus:border-main outline-none"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="flex-1 py-2 px-3 border-1 border-gray focus:border-main outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full py-2 px-3 border-1 border-gray focus:border-main outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full py-2 px-3 border-1 border-gray focus:border-main outline-none"
              ></textarea>
            </div>
            <button className="bg-main rounded text-white py-2 px-1 hover:bg-blue-400">
              Send Message
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
