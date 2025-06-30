import { FaUsers } from "react-icons/fa";
import { MdOutlinePhoto } from "react-icons/md";
import { PiFileCodeFill } from "react-icons/pi";
import { RiCalendarCheckFill } from "react-icons/ri";
import Count from "../components/Count";

function Stat() {
  return (
    <div className=" grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-2 space-y-3 sm:space-y-10 lg:flex sm:justify-around">
      <div className="flex items-center gap-3 ps-6 sm:ps-0">
        <div className="hidden sm:block bg-main text-snow rounded-full p-5 scale-75 lg:scale-100">
          <RiCalendarCheckFill size={50} />
        </div>
        <div>
          <h1 className="font-dm-sans font-extrabold text-5xl text-gray-700 mb-0">
            +1
          </h1>
          <div className="text-gray-500 text-2xl">YEAR</div>
        </div>
      </div>
      <div className="flex items-center gap-3 ps-6 sm:ps-0">
        <div className="hidden sm:block bg-main text-snow rounded-full p-5 scale-75 lg:scale-100">
          <MdOutlinePhoto size={50} />
        </div>
        <div>
          <h1 className="font-dm-sans font-extrabold text-5xl text-gray-700 mb-0">
            +<Count num={10} duration={1500} />
          </h1>
          <div className="text-gray-500 text-2xl">PROJECTS</div>
        </div>
      </div>
      <div className="flex items-center gap-3 ps-6 sm:ps-0">
        <div className="hidden sm:block bg-main text-snow rounded-full p-5 scale-75 lg:scale-100">
          <FaUsers size={50} />
        </div>
        <div>
          <h1 className="font-dm-sans font-extrabold text-5xl text-gray-700 mb-0">
            +<Count num={3} duration={1500} />
          </h1>
          <div className="text-gray-500 text-2xl">CORPORATION</div>
        </div>
      </div>
      <div className="flex items-center gap-3 ps-6 sm:ps-0 sm:mb-10">
        <div className="hidden sm:block bg-main text-snow rounded-full p-5 scale-75 lg:scale-100">
          <PiFileCodeFill size={50} />
        </div>
        <div>
          <h1 className="font-dm-sans font-extrabold text-5xl text-gray-700 mb-0">
            +<Count num={45} duration={1500} />K
          </h1>
          <div className="text-gray-500 text-2xl">LINES OF CODE</div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
