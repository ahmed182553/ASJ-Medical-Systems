import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import image2 from "../Section2/image2.png";

export default function Footertop() {

    const navigate = useNavigate();

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12 max-md:text-center max-md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
        >

            <motion.div
                className="max-md:flex max-md:flex-col max-md:items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <img src={image2} alt="ASJ Logo" className="w-36 mb-6" />
            </motion.div>

            <motion.div
                className="max-md:flex max-md:flex-col max-md:items-center max-md:gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <h2 className="text-xl font-semibold mb-6">Contact Us</h2>

                <div className="flex items-center gap-3 mb-4 max-md:justify-center">
                    <FaMapMarkerAlt className="text-blue-500 text-xl" />
                    <span className="cursor-pointer hover:text-blue-600">
                        5th Street, New York, USA
                    </span>
                </div>

                <div className="flex items-center gap-3 mb-4 max-md:justify-center">
                    <FaEnvelope className="text-blue-500 text-xl" />
                    <a href="mailto:iooyoussef3@gmail.com" className="hover:text-blue-600">
                        iooyoussef3@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-3 mb-4 max-md:justify-center">
                    <FaPhone className="text-blue-500 text-xl" />
                    <a href="tel:+201208261096" className="hover:text-blue-600">
                        +20-120-8261-096
                    </a>
                </div>
            </motion.div>
            <motion.div
                className="max-md:text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
                <ul className="space-y-3 text-gray-400 max-md:space-y-2">
                    <li onClick={() => navigate("/about")} className="hover:text-white cursor-pointer">
                        About Us
                    </li>

                    <li
                        className="hover:text-white cursor-pointer"
                    >
                        Our Vision
                    </li>

                    <li className="hover:text-white cursor-pointer">Our Mission</li>
                    <li className="hover:text-white cursor-pointer">Contact</li>
                </ul>
            </motion.div>
            <motion.div
                className="max-md:text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <h2 className="text-xl font-semibold mb-6">Services</h2>
                <ul className="space-y-3 text-gray-400 max-md:space-y-2">
                    <li className="hover:text-white cursor-pointer">X-Ray</li>
                    <li className="hover:text-white cursor-pointer">Customer Service</li>
                    <li className="hover:text-white cursor-pointer">Parts</li>
                    <li className="hover:text-white cursor-pointer">Repair</li>
                    <li className="hover:text-white cursor-pointer">Technical Team</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
