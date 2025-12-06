import image10 from "./image10.jpg";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Div1section3() {
  return (
    <>
      <div className="min-h-[580px] w-full flex justify-center">
        <div className="h-auto w-[90%] flex flex-col md:flex-row-reverse justify-between items-center gap-10 md:gap-0">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:h-[90%] md:w-[50%] w-full flex justify-center items-center"
          >
            <div className="w-full md:w-[90%] h-[250px] md:h-full border border-blue-700 rounded-xl overflow-hidden shadow-md">
              <img src={image10} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="md:h-[90%] md:w-[50%] w-full flex items-center"
          >
            <div className="w-full md:w-[90%] h-auto flex flex-col justify-between space-y-5">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
                Our Mission
              </h1>

              <p className="space-y-4 leading-[1.7] text-gray-700 opacity-80 text-lg">
                Our mission is to support hospitals and clinics with dependable
                X-ray equipment, premium spare parts, and expert service that
                keeps their imaging systems running at peak performance.
              </p>

              <div className="space-y-3 text-gray-700 leading-[1.6] opacity-80">
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
              </div>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="w-[45%] md:w-[35%] px-8 py-3 mt-2 bg-blue-800 text-white font-medium rounded-full tracking-wide 
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
