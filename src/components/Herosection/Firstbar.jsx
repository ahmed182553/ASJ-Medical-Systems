import image2 from "../Section2/image2.png";
import { IoCall } from "react-icons/io5";

export default function TopBar() {
  return (
    <div className="w-full h-[15%] flex justify-center">
      <div className="w-[99%] lg:w-[90%] h-[99%] flex justify-between items-center">


        <div className="w-auto h-auto flex">
          <img
            src={image2}
            alt="Logo"
            className="
              w-[120px] h-[60px] 
              sm:w-[200px] sm:h-[100px] 
              object-cover p-2 sm:p-3
            "
          />
        </div>


        <div className="flex items-center gap-2">


          <div
            className="
              w-10 h-10 sm:w-[50px] sm:h-[50px]
              bg-blue-600 rounded-full flex items-center justify-center shadow-md
              transition-all duration-800 hover:bg-gray-700 hover:scale-110
            "
          >
            <IoCall color="white" size={24} className="sm:size-7" />
          </div>


          <a
            href="tel:+966510961728"
            className="
              text-white 
              text-[14px] sm:text-[20px]
              hover:text-blue-600 transition-all duration-500 hover:scale-105
            "
          >
            +966-510-961-728
          </a>

          <button
            className="
              bg-blue-600 text-white 
              px-3 py-2 sm:px-5
              rounded-full text-xs sm:text-sm
              font-medium tracking-wide shadow-md 
              transition-all duration-700 hover:bg-gray-700 hover:scale-110
            "
          >
            GET A QUOTE
          </button>
        </div>
      </div>
    </div>
  );
}