import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1 }}
      className="w-full h-[70%] flex justify-center px-4"
    >
      <div className="h-auto w-auto text-white flex flex-col gap-6 items-center leading-loose justify-center text-center">


        <div className="rounded-full w-[250px] md:w-[285px] h-auto bg-white text-black flex p-1 justify-center text-[11px] md:text-[13px] font-medium">
          X-RAY SYSTEMS FOR MEDICAL EXCELLENCE
        </div>


        <span className="text-3xl md:text-6xl font-bold block">
          Empowering Healthcare with Advanced
        </span>

        <span className="text-3xl md:text-6xl font-bold block">
          X-Ray Imaging Technology
        </span>


        <div className="flex flex-col md:flex-row gap-3 mt-2 w-full justify-center items-center">
          <motion.button
          onClick={() => navigate("/about")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-full bg-blue-600 p-2 w-48 md:w-40 text-white hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 uppercase font-medium"
          >
            more about
          </motion.button>

          <motion.button
            onClick={() => navigate("/contact")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-full bg-white p-2 w-48 md:w-40 text-black hover:bg-blue-600 hover:text-white transition-all duration-500 hover:scale-105 uppercase font-medium"
          >
            contact us
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
