import React from "react";
import { useParams, Link } from "react-router-dom";
import sparePartsData from "../../data/Sparepartsdata";
import { motion } from "framer-motion";

export default function Sparepartdetails() {
    const { id } = useParams();

    const findPart = () => {
        for (const device of sparePartsData) {
            const part = device.spareParts.find((p) => p.id === id);
            if (part) return { part, device };
        }
        return null;
    };

    const result = findPart();

    if (!result)
        return <div className="p-10 text-center text-xl text-red-600">Part not found.</div>;

    const { part, device } = result;

    return (
        <div className="min-h-screen bg-slate-100 py-14 px-4">
            <motion.div
                className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-4">{part.name}</h1>

                <p className="text-gray-600 text-lg mb-1">
                    Spare part for:{" "}
                    <span className="font-semibold text-blue-600">{device.deviceName}</span>
                </p>
                <p className="text-gray-700 text-lg mb-6">{part.description}</p>
                <h2 className="text-2xl font-semibold mb-3">Specifications</h2>
                <div className="bg-slate-50 border rounded-xl p-4 mb-6">
                    {part.specs.map((spec, i) => (
                        <p key={i} className="text-gray-700 text-sm mb-2">
                            <strong>{spec.label}:</strong> {spec.value}
                        </p>
                    ))}
                </div>

                <p className="text-3xl font-bold text-blue-700 mb-6">
                    Price: {part.price}
                </p>

                <Link
                    to="/spareparts"
                    className="inline-block bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                    Back to Spare Parts
                </Link>
            </motion.div>

            <div className="max-w-5xl mx-auto mt-16">
                <h2 className="text-3xl font-bold mb-6">Explore More Spare Parts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {device.spareParts
                        .filter((p) => p.id !== id)
                        .slice(0, 3)
                        .map((p) => (
                            <motion.div
                                key={p.id}
                                className="bg-white p-5 rounded-xl shadow hover:shadow-lg border hover:border-blue-300 transition"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {p.description.substring(0, 50)}...
                                </p>

                                <Link
                                    to={`/spare-part/${p.id}`}
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    View Details →
                                </Link>
                            </motion.div>
                        ))}
                </div>
            </div>
            <div className="max-w-5xl mx-auto mt-20 mb-10">
                <h2 className="text-3xl font-bold mb-6">Explore More Devices</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sparePartsData
                        .filter((d) => d.deviceId !== device.deviceId)
                        .slice(0, 3)
                        .map((d) => (
                            <motion.div
                                key={d.deviceId}
                                className="bg-white p-5 rounded-xl shadow hover:shadow-lg border hover:border-blue-300 transition"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="font-bold text-lg mb-2">{d.deviceName}</h3>

                                <p className="text-sm text-gray-600 mb-4">
                                    {d.spareParts.length} spare parts
                                </p>

                                <Link
                                    to={`/product/${d.deviceId}`}
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    View Device →
                                </Link>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div>
    );
}
