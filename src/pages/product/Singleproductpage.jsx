import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../../data/Productdata";
import sparePartsData from "../../data/Sparepartsdata";
import ImagesSection from "./ImagesSection";
import MainDetails from "./MainDetails";
import SparePartsSection from "./SparePartsSection";
import RelatedProducts from "./RelatedProducts";
import { motion } from "framer-motion";

export default function Singleproductpage() {
    const { id } = useParams(); // route param (could be slug or id)
    const navigate = useNavigate();
    const product = products.find((p) => String(p.id) === String(id) || String(p.slug) === String(id));
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Product not found</h2>
                    <p className="text-gray-600 mb-4">The product you requested does not exist.</p>
                    <Link to="/products" className="text-blue-600 underline">Back to products</Link>
                </div>
            </div>
        );
    }

    const spareParts =
        sparePartsData.find((item) => String(item.deviceId) === String(product.id))?.spareParts || [];
    const allImages = [

        ...(product.images?.main ? [product.images.main, ...(product.images.gallery || [])] : (product.images || []))
    ];
    const [currentImage, setCurrentImage] = useState(allImages[0] || "");
    const relatedProducts = products.filter((p) => String(p.id) !== String(product.id));

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen py-12 bg-white"
        >
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                >
                    <ImagesSection images={allImages} />
                    <MainDetails product={product} navigate={navigate} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    <SparePartsSection spareParts={spareParts} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                >
                    <RelatedProducts related={relatedProducts} />
                </motion.div>

            </div>
        </motion.section>

    );
}
