import { useState } from "react";

export default function ImagesSection({ images }) {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="space-y-4">
            <img
                src={mainImage}
                alt="device"
                className="w-full h-[380px] object-cover rounded-xl shadow"
            />

            <div className="flex gap-3 overflow-x-auto">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        onClick={() => setMainImage(img)}
                        className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition
              ${mainImage === img ? "border-blue-600" : "border-transparent"}`}
                    />
                ))}
            </div>
        </div>
    );
}
