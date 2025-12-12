import React from "react";
import { Link } from "react-router-dom";
import sparePartsData from "../data/Sparepartsdata";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SparePartsSlider() {
    const allParts = sparePartsData.flatMap((device) => device.spareParts);

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold">Spare Parts</h2>

                    <Link
                        to="/spareparts"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        View All
                    </Link>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {allParts.map((part) => (
                        <SwiperSlide key={part.id}>
                            <div
                                className="bg-slate-50 rounded-xl shadow-md p-4 hover:shadow-xl 
                                transition min-h-60 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{part.name}</h3>

                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                        {part.description}
                                    </p>

                                    <p className="font-bold text-blue-700 mb-3">{part.price}</p>
                                </div>

                                <Link
                                    to={`/sparepart/${part.id}`}
                                    className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
}
