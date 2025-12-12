import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Detailspage({ product }) {
    return (
        <section className="min-h-screen bg-slate-100 py-10 px-4 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl w-full"
            >
                <Card className="rounded-2xl shadow-md">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="w-full h-[300px] bg-slate-200 rounded-xl overflow-hidden">
                                <img
                                    src={product?.image}
                                    alt={product?.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold text-slate-800">{product?.name}</h1>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    {product?.description || "No description available."}
                                </p>
                                <p className="text-2xl font-semibold text-blue-600">
                                    {product?.price ? `$${product.price}` : "Price on request"}
                                </p>

                                <Button className="mt-4 w-full md:w-auto px-6 py-3 rounded-xl text-lg">
                                    اطلب الآن
                                </Button>
                            </div>
                        </div>
                        {product?.specs && (
                            <div className="mt-10">
                                <h2 className="text-2xl font-semibold mb-4 text-slate-800">المواصفات</h2>
                                <ul className="space-y-2 text-slate-700">
                                    {product.specs.map((item, index) => (
                                        <li key={index} className="p-3 bg-white rounded-lg shadow-sm">
                                            - {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
}
