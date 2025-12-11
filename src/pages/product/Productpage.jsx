import React, { useState } from "react";
import products from "../../data/Productdata";
import Productcard from "./Productcard";
import { motion } from "framer-motion";

export default function Productpage() {
    const categories = ["All", ...new Set(products.map((p) => p.category))];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen bg-gray-50 py-12"
        >
            <div className="max-w-7xl mx-auto px-4">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Explore Our Medical Systems
                </h1>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${activeCategory === cat
                                    ? "bg-blue-700 text-white border-blue-700"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProducts.map((p) => (
                        <Productcard key={p.id} product={p} />
                    ))}
                </motion.div>

                {filteredProducts.length === 0 && (
                    <p className="text-center text-gray-500 mt-10 text-lg">
                        No products found in this category.
                    </p>
                )}
            </div>
        </motion.section>
    );
}
