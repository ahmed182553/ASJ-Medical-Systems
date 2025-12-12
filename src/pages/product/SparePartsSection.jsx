import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SparePartsSection({ spareParts }) {
    const parts = spareParts || []; // حماية من undefined

    return (
        <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Spare Parts for this Device</h2>

            {!spareParts || spareParts.length === 0 ? (

                <p className="text-gray-600">No spare parts available for this device.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parts.map((part, index) => (
                        <motion.div
                            key={part.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-4 rounded-xl border shadow hover:shadow-lg transition bg-white"
                        >
                            <h3 className="text-xl font-semibold mb-2">{part.name}</h3>
                            <p className="text-gray-600 mb-2">{part.description}</p>
                            <p className="font-bold text-blue-700 mb-4">{part.price}</p>

                            <Link
                                to={`/spare-parts/${part.id}`}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                            >
                                View Details
                            </Link>
                        </motion.div>
                    ))}
                </div>
            )}

            <div className="text-center mt-8">
                <Link
                    to="/spareparts"
                    className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-900 transition"
                >
                    Explore More Spare Parts
                </Link>
            </div>
        </div>
    );
}
