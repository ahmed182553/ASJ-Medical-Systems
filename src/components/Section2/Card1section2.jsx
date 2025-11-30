import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import image5 from "./image5.jpg";

export default function Card() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        w-full 
        max-w-[320px] 
        h-[330px] 
        sm:max-w-[350px] 
        md:w-[320px]
        bg-white rounded-3xl shadow-md relative overflow-hidden cursor-pointer transition-all duration-300 
        hover:scale-[1.03] 
        group
      "
    >
      <div className="w-full h-[65%] sm:h-[68%] md:h-[70%] overflow-hidden">
        <img
          src={image5}
          alt="X-Ray"
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      <div
        className="absolute bottom-[30%] sm:bottom-[27%] md:bottom-[28%] left-0 w-full h-[120px] sm:h-[125px] md:h-[130px] 
        bg-linear-to-t from-white via-white/80 to-transparent"
      />

      <div className="absolute bottom-[18%] sm:bottom-[17%] md:bottom-[18%] left-4 flex flex-col">
        <p className="text-[14px] sm:text-[15px] font-semibold tracking-widest text-gray-500">
          Systems
        </p>
        <h2 className="text-[22px] sm:text-[24px] md:text-[25px] font-semibold text-gray-900 mt-1">
          X-Ray
        </h2>
      </div>

      <button
        className="
          absolute bottom-3 right-3 
          bg-white shadow-md 
          w-11 h-11 sm:w-12 sm:h-12 
          rounded-full flex items-center justify-center
          transition-all duration-300 
          group-hover:bg-blue-700 group-hover:scale-110
        "
      >
        <ArrowUpRightIcon className="w-5 h-5 text-gray-700 group-hover:text-white transition-all duration-300" />
      </button>
    </motion.div>
  );
}
