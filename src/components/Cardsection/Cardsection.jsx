import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import productdata from "../../data/Productdata";

export default function Cardsection() {
    const navigate = useNavigate();

    return (
        <div className="w-full py-16 flex flex-col items-center bg-linear-to-b from-gray-100 to-white relative">

            {/* ------------------ Fade Left ------------------ */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white via-white/80 to-transparent z-20"></div>

            {/* ------------------ Fade Right ------------------ */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white via-white/80 to-transparent z-20"></div>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-blue-800 mb-12"
            >
                Our Medical Devices
            </motion.h1>

            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="w-[90%] relative z-10"
            >
                {productdata.map((product) => (
                    <SwiperSlide key={product.id}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.04 }}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
                        >
                            <div className="w-full h-64 flex items-center justify-center bg-white">
                                <img
                                    src={product.images[0]}
                                    className="max-h-full max-w-full object-contain"
                                    alt={product.name}
                                />
                            </div>


                            <div className="p-6">
                                <h2 className="text-[18px] font-semibold text-blue-700">
                                    {product.name}
                                </h2>
                                <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                                    {product.desc}
                                </p>

                                <button
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    className="cursor-pointer mt-5 w-full py-2 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition font-medium"
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <motion.button
                onClick={() => navigate("/products")}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer mt-12 px-10 py-3 bg-blue-800 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
            >
                Show More
            </motion.button>
        </div>
    );
}
