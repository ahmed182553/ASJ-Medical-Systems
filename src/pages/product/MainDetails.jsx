export default function MainDetails({ product }) {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
            <p className="text-gray-600 mb-2">Brand: {product.brand}</p>

            <p className="text-2xl font-bold text-blue-700 mb-4">{product.price}</p>

            <p className="text-gray-700 leading-relaxed mb-6">
                {product.description}
            </p>

            <h3 className="text-xl font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
            <div className="flex items-center gap-4 mt-6">
                <button className="cursor-pointer px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                    Contact Sales
                </button>
                <button className="cursor-pointer px-6 py-2 rounded-full border border-gray-300 text-gray-800 font-medium bg-white hover:bg-gray-100 transition">
                    Email Brochure
                </button>
            </div>

        </div>
    );
}
