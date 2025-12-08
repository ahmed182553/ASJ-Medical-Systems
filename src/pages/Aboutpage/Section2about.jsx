import image13 from "./image13.jpg";
import { motion } from "motion/react";

export default function Section2about() {
    return (
        <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-full flex justify-center items-center bg-[#eef3f8]"
        >
            <div className="h-[95%] w-[90%] flex flex-col md:flex-row justify-between md:items-center gap-10 md:gap-0">

                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-[50%] flex justify-center md:justify-start"
                >
                    <div
                        className="h-[300px] sm:h-[350px] md:h-[80vh] lg:h-[85vh] w-full md:w-[95%] rounded-3xl bg-cover bg-center overflow-hidden
    "
                        style={{ backgroundImage: `url(${image13})` }}
                    ></div>

                </motion.div>
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-[50%] flex items-center"
                >
                    <div className="w-full md:w-[85%] flex flex-col justify-between">
                        <div className="mb-4">
                            <span className="bg-blue-50 text-blue-700 px-5 py-1 rounded-full text-sm font-semibold">
                                ABOUT US
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            Providing Advanced Medical
                            <br />
                            Imaging Solutions
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-[90%]">
                            Our company specializes in delivering high-precision medical imaging
                            systems, including X-Ray, CT scanners, and digital radiography
                            equipment. We help hospitals and clinics enhance diagnostic accuracy
                            through reliable, modern, and user-focused technology designed for
                            efficient medical workflow.
                        </p>
                        <div className="border-b border-gray-300 w-full mb-6"></div>
                        <motion.button
                        
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer px-8 py-3 bg-blue-800 text-white font-medium rounded-full 
                            tracking-wide hover:bg-blue-700 transition duration-300 shadow-md w-fit"
                        >
                            CONTACT US
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
        </>
    );
}
