import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import stroke from "../assets/stroke_2.png";
import profileImage from "../assets/profile_2.jpg";
import dots from "../assets/dots.png";
import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import {
  home__childVariants,
  home__imageVariants,
  home__parentVariants,
} from "../style/style";

function Home() {
  const { scrollY } = useScroll();
  const moveY = useTransform(scrollY, [0, 1000], [0, 700]);
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [width, setWidth] = useState("auto");
  const ref = useRef(null);
  const imageRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseLeave() {
    setIsHover(false);
    console.log("hello");

    setTimeout(() => {
      x.set(0);
      y.set(0);
    }, 300);
  }

  const handleMouse = (e) => {
    x.set(e.nativeEvent.offsetX - 65);
    y.set(e.nativeEvent.offsetY - 110);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024 && imageRef.current) {
        setWidth(imageRef.current.getBoundingClientRect().left);
      } else {
        setWidth("auto");
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.section style={{ y: moveY }} className="flex h-screen w-full">
      <div className="relative flex-3 justify-center items-center h-full xs:flex hidden">
        {/*  left text side */}
        <div
          className={`z-40 lg:z-40 lg:static absolute left-0 max-lg:overflow-hidden pb-20 lg:pb-0 w-screen`}
          style={{ width: width }}
        >
          <motion.div
            variants={home__parentVariants}
            initial="hidden"
            animate="show"
            transition={{
              duration: 1,
              ease: "easeInOut",
              staggerChildren: 500,
            }}
            className="max-lg:min-w-screen w-auto ps-8 lg:ps-0"
          >
            <motion.div
              variants={home__childVariants}
              className="text-main font-inter text-3xl font-bold"
            >
              I'm
              <img
                className="w-14 -hue-rotate-15 opacity-70 scale-x-130"
                src={stroke}
                alt=""
              />
            </motion.div>
            <motion.h1
              variants={home__childVariants}
              className="ps-2 mt-2 font-poppins text-gray-700 text-6xl font-extrabold"
            >
              Kaung Khant
            </motion.h1>
            <motion.p
              variants={home__childVariants}
              className="text-gray-500 font-space-grotesk text-lg mt-5"
            >
              I'm Full Stack Developer who builds modern web applications.{" "}
              <br />
              Passionate about learning new technologies.
              <br />
              I’m always looking for job opportunities.
            </motion.p>
            {window.innerWidth >= 1024 && (
              <motion.div
                variants={home__childVariants}
                className=" mt-6 flex gap-4 font-space-grotesk text-lg"
              >
                <a
                  href="#about"
                  className="border-1 border-main text-main button_lg hover:bg-main hover:text-white transition-colors duration-300"
                >
                  More about me
                </a>
                <div className=" relative">
                  <motion.button
                    className="absolute bg-main w-[160px] h-[54px] text-white flex justify-center items-center shadow-lg shadow-main "
                    style={{
                      overflow: "hidden",
                      padding: "12px 24px",
                      x: springX,
                      y: springY,
                      position: "absolute",
                    }}
                    animate={{
                      width: isHover ? 100 : 160, // Fixed sizes
                      height: isHover ? 100 : 54,
                      borderRadius: isHover ? "50%" : "0px",
                      scale: isClick ? 0.85 : 1,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                  >
                    {isHover ? (
                      <div className="flex items-center flex-col">
                        <LuArrowUpRight />
                        <div>Contact</div>
                        <div> me</div>
                      </div>
                    ) : (
                      "Contact me"
                    )}
                  </motion.button>
                  <motion.div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouse}
                    onMouseDown={() => setIsClick(true)}
                    onMouseUp={() => setIsClick(false)}
                    ref={ref}
                    className="z-50 absolute w-85 h-55 top-full mt-4 left-2/3 -translate-y-1/2"
                  ></motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className="hidden lg:block absolute opacity-20 w-40 top-20 left-1/2"
      >
        <img src={dots} alt="" />
      </motion.div>
      {/*  right image side */}
      <div className="lg:flex-2 flex justify-start items-center h-full">
        <div className="absolute inset-0 bg-black/30 xs:hidden z-20"></div>
        <motion.img
          variants={home__imageVariants}
          initial="hidden"
          animate="show"
          ref={imageRef}
          src={profileImage}
          alt=""
          className="z-10 absolute top-0 left-0 w-screen h-screen object-cover opacity-25 lg:static brightness-50 lg:brightness-100"
        />

        <div className="block lg:hidden z-20 absolute  left-0 text-white ps-8 lg:ps-0">
          <div className="text-main font-inter text-2xl font-bold">I'm</div>
          <h1 className="ps-2 mt-2 font-poppins text-white text-6xl font-extrabold">
            Kaung Khant
          </h1>
          <p className="text-white font-space-grotesk text-lg mt-5 z-10">
            I'm Full Stack Developer who builds modern web applications. <br />
            Passionate about learning new technologies.
            <br />
            I’m always looking for job opportunities.
          </p>
          <div className=" mt-6 flex gap-4 font-space-grotesk text-lg">
            <button className="border-1 border-main text-main button_lg hover:bg-main hover:text-white transition-colors duration-300">
              More about me
            </button>
            <div className="block lg:hidden relative">
              <motion.button
                className="absolute bg-main text-white flex justify-center items-center"
                style={{
                  overflow: "hidden",
                  padding: "12px 24px",
                  x: springX,
                  y: springY,
                  position: "absolute",
                }}
                animate={{
                  width: isHover ? 100 : 160, // Fixed sizes
                  height: isHover ? 100 : 54,
                  borderRadius: isHover ? "50%" : "0px",
                  scale: isClick ? 0.85 : 1,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              >
                {isHover ? (
                  <div className="flex items-center flex-col">
                    <LuArrowUpRight />
                    <div>Contact</div>
                    <div> me</div>
                  </div>
                ) : (
                  "Contact me"
                )}
              </motion.button>
              <motion.div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouse}
                onMouseDown={() => setIsClick(true)}
                onMouseUp={() => setIsClick(false)}
                ref={ref}
                className=" absolute w-42 xs:w-62 sm:w-85 h-55 top-full mt-4 left-2/3 -translate-y-1/2"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
