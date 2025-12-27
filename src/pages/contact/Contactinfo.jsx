import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-8"
        >
            <h1 className="text-3xl font-bold text-blue-800 mb-6">Contact Us</h1>

            <p className="text-gray-600 mb-6">
                We’re here to help. Reach out to us anytime and our team will respond as soon as possible.
            </p>

            <div className="space-y-5">
                <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-blue-700 text-xl" />
                    <a href="tel:+966510961728" className="hover:text-blue-600">
                        +966-510-961-728
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <FaEnvelope className="text-blue-700 text-xl" />
                    <a href="mailto:iooyoussef3@gmail.com" className="hover:text-blue-600">
                        iooyoussef3@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <FaWhatsapp className="text-green-600 text-2xl" />
                    <a
                        href="https://wa.me/966510961728?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600"
                    >
                        Chat on WhatsApp
                    </a>

                </div>

                <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-blue-700 text-xl" />
                    <p className="text-gray-700 text-lg">
                        kingdom of saudi, jeddah ALsafa district ,prince saud al faisal street
                    </p>
                </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1359835211213!2d39.197889!3d21.587049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d041c1c690c7%3A0xdea7d1a8efb1b2b!2z2LTYsdmD2Kkg2LnZhNmI2Kkg2KfZhNis2KfZhdi52Kkg2YXYr9mF2LnZhNmKINmF2K7Yr9mE2YrYqSDYp9mE2KfZhtivINin2YTYqNmF2KfYsdmK2Kkg2YTZhNin2YTYs9mD2YrYqQ!5e0!3m2!1sar!2ssa!4v1700000000000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </motion.div>
    );
}
