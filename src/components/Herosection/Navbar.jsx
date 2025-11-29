import { RiFacebookCircleFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <div className="w-full h-[20%] flex justify-center">
      <div className="w-[93%] h-[50%] flex items-center justify-between">

        {/* LEFT MENU - Desktop only */}
        <motion.nav
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            hidden 
            md:flex 
            w-[45%] 
            justify-between 
            items-center 
            text-white 
            font-semibold 
            tracking-wide
          "
        >
          {["QUICK LINKS", "SERVICES", "SYSTEMS", "PARTS", "CONTACT"].map(
            (item) => (
              <div key={item} className="relative group inline-block">
                <div
                  className="px-4 py-2 cursor-pointer transition-all duration-300 rounded-md 
                  text-white group-hover:bg-white group-hover:text-blue-600 group-hover:scale-105"
                >
                  {item}
                </div>

                {/* Dropdown */}
                <div
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-xl py-3 z-50 
                  opacity-0 invisible transition-all duration-300 
                  group-hover:opacity-100 group-hover:visible"
                >
                  <ul className="flex flex-col gap-3 text-gray-800 font-semibold">
                    <li className="px-4 py-1 border-b border-gray-200 hover:text-black cursor-pointer">SONOGRAM</li>
                    <li className="px-4 py-1 border-b border-gray-200 hover:text-black cursor-pointer">3D/4D USG</li>
                    <li className="px-4 py-1 border-b border-gray-200 hover:text-black cursor-pointer">3T MRI SCANS</li>
                    <li className="px-4 py-1 hover:text-black cursor-pointer">X-RAY</li>
                  </ul>
                </div>
              </div>
            )
          )}
        </motion.nav>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden flex">
          <CiGrid41 size={32} color="white" className="cursor-pointer hover:scale-110 transition" />
        </div>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[35%] md:w-[30%] flex justify-between items-center"
        >
          <RiFacebookCircleFill size={24} className="sm:size-7 text-white hover:scale-105 hover:text-blue-600 cursor-pointer" />
          <div className="w-[5px] h-[5px] rounded-full bg-gray-300 hidden sm:block"></div>

          <IoLogoInstagram size={24} className="sm:size-7 text-white hover:scale-105 hover:text-blue-600 cursor-pointer" />
          <div className="w-[5px] h-[5px] rounded-full bg-gray-300 hidden sm:block"></div>

          <FaWhatsapp size={24} className="sm:size-7 text-white hover:scale-105 hover:text-blue-600 cursor-pointer" />
          <div className="w-px h-8 bg-white/20 hidden sm:block"></div>

          {/* Desktop shows grid icon separately */}
          <CiGrid41 
            size={28} 
            className="text-white hover:scale-105 hover:text-blue-600 cursor-pointer hidden md:block" 
          />
        </motion.div>
      </div>
    </div>
  );
}
