// FooterBottom.jsx
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FooterBottom() {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center justify-between mt-8 max-md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center gap-4">
                <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1f29] hover:bg-blue-600 transition"
                >
                    <FaFacebookF className="text-white" />
                </a>

                <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1f29] hover:bg-blue-600 transition"
                >
                    <FaInstagram className="text-white" />
                </a>

                <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1f29] hover:bg-blue-600 transition"
                >
                    <FaTwitter className="text-white" />
                </a>
            </div>
            <p className="text-gray-500 text-center max-md:text-sm">
                © 2025 ASJ Medical System — All Rights Reserved.
            </p>
        </motion.div>
    );
}
