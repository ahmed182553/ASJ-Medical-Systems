import image9 from "./image9.jpg";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import image10 from "./image10.png";

export default function Div1section3() {
  return (
    <>
      <div className="min-h-[580px] w-full flex justify-center">
        <div className="h-auto w-[90%] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:h-[90%] md:w-[50%] w-full flex justify-center items-center"
          >
            <div className="w-full md:w-[90%] h-[250px] md:h-full border border-blue-700 rounded-xl overflow-hidden">
              <img src={image9} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:h-[90%] md:w-[50%] w-full flex items-center"
          >
            <div className="w-full md:w-[90%] h-auto flex flex-col justify-between space-y-5">
              <h1 className="text-3xl font-bold text-blue-800">Our Vision</h1>

              <p className="leading-[1.7] font-bold text-blue-800">
                To be the most trusted partner for hospitals and clinics by
                providing dependable X-ray machines, premium spare parts, and
                unmatched technical support.
              </p>

              <div className="space-y-3 text-gray-700 leading-[1.6]">
                {[
                  "Advanced X-Ray Imaging Solutions",
                  "Innovation & Expertise in Medical Imaging",
                  "Professional Technical Support Team",
                  "High-Quality Spare Parts & Maintenance Services",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-blue-700 w-6 h-6" />
                    <p className="text-lg">{item}</p>
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-2.5 px-8 py-2 bg-[#222] text-white font-semibold rounded-full tracking-wide hover:bg-blue-700 transition duration-300 cursor-pointer"
                >
                  ABOUT US
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
