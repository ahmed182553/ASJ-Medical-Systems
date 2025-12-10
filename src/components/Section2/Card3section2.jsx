import image7 from "./image7.avif";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Div1section2() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        w-[320px] h-[330px]
        sm:w-[280px] sm:h-[300px]
        md:w-[300px] md:h-[310px]
        lg:w-[320px] lg:h-[330px]
        bg-white rounded-3xl shadow-md relative overflow-hidden
        cursor-pointer transition-all duration-300 
        hover:scale-[1.03] group
      "
    >
      <div className="w-full h-[70%] overflow-hidden">
        <img
          src={image7}
          alt="customer service"
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-[28%] left-0 w-full h-[130px] bg-linear-to-t from-white via-white/80 to-transparent" />

      <div className="absolute bottom-[18%] left-4 flex flex-col">
        <p className="text-[15px] font-semibold tracking-widest text-gray-500">
          Systems
        </p>
        <h2 className="text-[25px] font-semibold text-gray-900 mt-1">Parts</h2>
      </div>

      <button
        className="cursor-pointer
          absolute bottom-4 right-4 bg-white shadow-md w-12 h-12 
          rounded-full flex items-center justify-center
          transition-all duration-300 
          group-hover:bg-blue-700 group-hover:scale-110
        "
      >
        <ArrowUpRightIcon
          className="
            w-5 h-5 text-gray-700 
            transition-all duration-300 
            group-hover:text-white
          "
        />
      </button>
    </motion.div>
  );
}
