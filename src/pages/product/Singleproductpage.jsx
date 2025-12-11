import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/Productdata";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ⭐ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = products.find((p) => String(p.id) === String(id));

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
    const allImages = [
        product.images.main,
        ...(product.images.gallery?.filter((img) => img) || [])
    ];
    const [currentImage, setCurrentImage] = useState(allImages[0]);
    const relatedProducts = products.filter((p) => String(p.id) !== String(id));

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen py-12 bg-white"
        >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                    <div className="lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={currentImage}
                                alt={product.name}
                                className="w-full h-96 object-contain bg-white"
                            />
                        </div>

                        {allImages.length > 1 && (
                            <div className="mt-4 grid grid-cols-4 gap-2">
                                {allImages.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt=""
                                        className={`h-20 w-full object-contain bg-white rounded cursor-pointer 
                                            ${currentImage === img ? "ring-2 ring-blue-600" : ""}`}
                                        onClick={() => setCurrentImage(img)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="lg:w-1/2 flex flex-col">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            {product.category} • {product.brand}
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-2xl font-bold text-blue-700">{product.price}</div>
                            <div
                                className={`px-3 py-1 rounded-full text-sm font-semibold ${product.available
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-600"
                                    }`}
                            >
                                {product.available ? "In Stock" : "Out of Stock"}
                            </div>
                        </div>

                        <p className="mt-6 text-gray-700">{product.description}</p>

                        <div className="mt-6">
                            <h4 className="font-semibold">Features</h4>
                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                {product.features?.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold">Technical Specs</h4>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                {product.specs?.map((s, i) => (
                                    <div key={i} className="text-sm text-gray-700">
                                        <span className="font-semibold">{s.key}: </span>
                                        {s.value}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button onClick={() => navigate("/contact")} className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                                Contact Sales
                            </button>

                            <a
                                href={`mailto:sales@asj.com?subject=Inquiry about ${encodeURIComponent(
                                    product.name
                                )}`}
                                className="px-6 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition"
                            >
                                Email Brochure
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-4">Explore More</h2>

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 }
                        }}
                    >
                        {relatedProducts.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="block bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition">

                                    <img
                                        src={item.images.main}
                                        className="h-40 w-full object-cover rounded-lg"
                                        alt={item.name}
                                    />
                                    <h3 className="font-semibold mt-3">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.category}</p>
                                    <Link
                                        to={`/product/${item.id}`}
                                        className="text-sm bg-blue-700 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition mt-3 inline-block"
                                    >
                                        View
                                    </Link>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </div>
        </motion.section >
    );
}
