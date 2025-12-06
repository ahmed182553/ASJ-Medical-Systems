import { motion } from "framer-motion";
import FooterMain from "./Footertop";
import FooterBottom from "./Footerbottom";

export default function Footer() {
    return (
        <motion.footer
            className="bg-gray-900 text-gray-300 pt-16 pb-10 px-6 md:px-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <FooterMain />
            <FooterBottom />
        </motion.footer>
    );
}
