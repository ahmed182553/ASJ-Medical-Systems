import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/Productdata";
import { motion } from "framer-motion";

export default function ProductPage() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Product not found</h2>
                    <Link to="/products" className="text-blue-600 mt-4 inline-block">
                        Back to products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen py-12 bg-white"
        >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* images */}
                    <div className="lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover" />
                        </div>

                        {/* small thumbs if multiple images */}
                        {product.images.length > 1 && (
                            <div className="mt-4 grid grid-cols-4 gap-2">
                                {product.images.map((img, idx) => (
                                    <img key={idx} src={img} alt={`${product.name}-${idx}`} className="h-20 w-full object-cover rounded" />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* details */}
                    <div className="lg:w-1/2 flex flex-col">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-sm text-gray-500 mt-1">{product.category} • {product.brand}</p>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-2xl font-bold text-blue-700">{product.price}</div>
                            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${product.available ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
                                {product.available ? "In Stock" : "Out of Stock"}
                            </div>
                        </div>

                        <p className="mt-6 text-gray-700">{product.description}</p>

                        <div className="mt-6">
                            <h4 className="font-semibold">Features</h4>
                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                {product.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold">Technical Specs</h4>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                {product.specs.map((s, i) => (
                                    <div key={i} className="text-sm text-gray-700">
                                        <span className="font-semibold">{s.key}: </span>{s.value}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                                Contact Sales
                            </button>
                            <a href={`mailto:sales@asj.com?subject=Inquiry about ${encodeURIComponent(product.name)}`}
                                className="px-6 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition">
                                Email Brochure
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
