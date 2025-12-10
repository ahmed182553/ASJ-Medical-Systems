import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
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
                    name="name"
                    className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div>
                <label className="text-gray-700 font-medium">Email Address</label>
                <input
                    type="email"
                    name="email"
                    className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                    name="message"
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
    );
}
