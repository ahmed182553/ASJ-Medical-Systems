import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Footer from "../../components/Section6/Fotter";

export default function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "1822008",
                "template_vxlqrwc", 
                formRef.current,
                "E_1KRh19l_oYhxW5i"
            )
            .then(
                () => {
                    setLoading(false);
                    setDone(true);
                    e.target.reset();
                },
                () => {
                    setLoading(false);
                    alert("Something went wrong");
                }
            );

    };

    return (
        <>
            <div className="min-h-screen w-full bg-gray-50 flex justify-center px-4 py-16">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* LEFT SIDE — CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white shadow-xl rounded-2xl p-8"
                    >
                        <h1 className="text-3xl font-bold text-blue-800 mb-6">
                            Contact Us
                        </h1>

                        <p className="text-gray-600 mb-6">
                            We’re here to help. Reach out to us anytime and our team will respond as soon as possible.
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-blue-700 text-xl" />
                                <p className="text-gray-700 text-lg">+20 111 111 1111</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-blue-700 text-xl" />
                                <p className="text-gray-700 text-lg">info@asjmedical.com</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-blue-700 text-xl" />
                                <p className="text-gray-700 text-lg">
                                    Nasr City, Cairo — Egypt
                                </p>
                            </div>
                        </div>

                        {/* MAP */}
                        <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                            <iframe
                                title="map"
                                className="w-full h-60"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1706064823795!2d31.363734!3d30.059558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e4df3de8f0d%3A0xbdfb54d393b5c7d0!2sCairo!5e0!3m2!1sen!2seg!4v1700000000000"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE — FORM */}
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Send Us a Message</h2>

                        <div>
                            <label className="text-gray-700 font-medium">Your Name</label>
                            <input
                                type="text"
                                name="name"     // Required by EmailJS
                                className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"    // Required by EmailJS
                                className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 font-medium">Message</label>
                            <textarea
                                name="message"  // Required by EmailJS
                                className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600 h-32"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-600 transition"
                            type="submit"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </motion.button>

                        {done && (
                            <p className="text-green-600 font-semibold text-center pt-2">
                                Message sent successfully! 🎉
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>

            <Footer />
        </>
    );
}
