import image11 from "./image11.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function DivSectionExample() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          w-[90%] h-[350px] bg-[#1f59c5] rounded-3xl relative overflow-hidden
          flex flex-col items-center text-center
          sm:h-[420px]
          sm:py-8
        "
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${image11})` }}
        />
        <div
          className="
            relative z-10 flex flex-col items-center justify-between h-full py-6
            sm:gap-4 
          "
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="
              bg-white text-blue-800 px-6 py-2 rounded-full font-semibold shadow
              sm:px-5 sm:py-2 sm:text-sm
            "
          >
            BOOK YOUR TEST
          </motion.button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              text-white text-3xl md:text-5xl font-bold leading-snug
              sm:text-2xl sm:leading-tight 
            "
          >
            You can Check more here About Available <br />
            Services and Systems & Parts
          </motion.h1>
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="sm:px-6 sm:py-2 sm:text-sm bg-white text-blue-800 px-8 py-3 rounded-full font-semibold shadow  hover:bg-blue-500 transition duration-300 hover:text-white cursor-pointer
            "
          >
            CONTACT US
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
