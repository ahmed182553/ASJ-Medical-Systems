import React from "react";
import { Link } from "react-router-dom";
import sparePartsData from "../../data/Sparepartsdata";
import { motion } from "framer-motion";
import Footer from "../../components/Section6/Fotter";

export default function Sparepartspage() {
    return (<>
        <div className="min-h-screen bg-slate-100 py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-10">Spare Parts</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {sparePartsData.map((device) => (
                    device.spareParts.map((part) => (
                        <motion.div
                            key={part.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link to={`/sparepart/${part.id}`}>
                                <div className="rounded-2xl shadow-md bg-white hover:shadow-xl transition p-5 cursor-pointer">

                                    <h2 className="text-xl font-semibold mb-2">{part.name}</h2>

                                    <p className="text-sm text-gray-500 mb-2">
                                        Device: {device.deviceId}
                                    </p>

                                    <p className="text-gray-700 mb-3">
                                        {part.description}
                                    </p>

                                    <ul className="text-sm mb-3 bg-slate-50 p-3 rounded-lg border">
                                        {part.specs.map((spec, index) => (
                                            <li key={index} className="mb-1">
                                                <strong>{spec.label}:</strong> {spec.value}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-lg font-bold text-blue-700">
                                        Price: {part.price}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))
                ))}
            </div>
        </div>
        <Footer /></>
    );
}
