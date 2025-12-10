import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
    return (
        <motion.div
            layout
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md"
        >
            <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.images[0]})` }}
            />
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <span className="text-sm text-gray-500">{product.category}</span>
                </div>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.shortDescription}</p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-700 font-bold">{product.price}</span>
                    <Link
                        to={`/product/${product.id}`}
                        className="text-sm bg-blue-700 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition"
                    >
                        View
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
