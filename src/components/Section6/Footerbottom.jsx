// FooterBottom.jsx
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

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
                    href="https://www.facebook.com/profile.php?id=61585272027779"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href="https://wa.me/201095598066?text=Hello%20I%20want%20to%20contact%20your%20company"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1f29] hover:bg-blue-600 transition"
                >
                    <FaWhatsapp
                        className="text-white"
                    />
                </a>
            </div>
            <p className="text-gray-500 text-center max-md:text-sm">
                © 2025 ASJ Medical System — All Rights Reserved.
            </p>
        </motion.div>
    );
}
