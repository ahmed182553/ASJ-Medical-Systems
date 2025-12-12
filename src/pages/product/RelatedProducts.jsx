import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import productdata from "../../data/Productdata";

export default function RelatedProducts() {
    const navigate = useNavigate();

    return (
        <div className="mt-20 w-full">
            <h2 className="text-3xl font-bold mb-10">Explore More</h2>

            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="w-full"
            >
                {productdata.map((product) => (
                    <SwiperSlide key={product.id}>
                        <motion.div
                            initial={{ opacity: 0, scale: 1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.05 }}
                            className="
                                bg-white rounded-2xl overflow-hidden 
                                shadow-md border border-gray-200 
                                w-full h-[360px] 
                                flex flex-col
                            "
                        >
                            <div className="w-full h-[200px] flex items-center justify-center bg-white">
                                <img
                                    src={product.images?.main}
                                    alt={product.name}
                                    className="h-full object-contain"
                                />
                            </div>
                            <div className="p-5 flex flex-col justify-between h-40">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {product.category}
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        navigate(`/product/${product.id}`)
                                    }
                                    className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition"
                                >
                                    View
                                </button>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
