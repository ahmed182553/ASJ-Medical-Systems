import image9 from "./image9.jpg";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";


export default function Div1section3() {


  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-[580px] w-full flex justify-center py-10">
        <div className="h-auto w-[90%] flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:h-[90%] md:w-[50%] w-full flex justify-center items-center"
          >
            <div className="w-full md:w-[90%] h-[260px] md:h-full rounded-xl overflow-hidden shadow-lg border border-blue-700">
              <img src={image9} className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="md:h-[90%] md:w-[50%] w-full flex items-center"
          >
            <div className="w-full md:w-[90%] flex flex-col space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
                Our Vision
              </h1>

              <p className="leading-[1.8] text-gray-700 opacity-80 text-lg">
                To be the most trusted partner for hospitals and clinics by
                providing dependable X-ray machines, premium spare parts, and
                unmatched technical support.
              </p>

              <div className="space-y-4 text-gray-700 opacity-80 leading-[1.7] text-lg">
                {[
                  "Advanced X-Ray Imaging Solutions",
                  "Innovation & Expertise in Medical Imaging",
                  "Professional Technical Support Team",
                  "High-Quality Spare Parts & Maintenance Services",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-blue-700 w-6 h-6" />
                    <p className="text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => navigate("/about")}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer w-[45%] md:w-[35%] px-8 py-3 mt-2 bg-blue-800 text-white font-medium rounded-full tracking-wide 
                    hover:bg-blue-700 transition duration-300 shadow-md"
              >
                ABOUT US
              </motion.button>

            </div>
          </motion.div>
        </div>
      </div>

    </>
  );
}
