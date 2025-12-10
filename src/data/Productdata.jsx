
import img1 from "../systemsimages/ge-hispeed-ct-scanner.jpg";
import img2 from "../systemsimages/toshiba-aquilion-16ct.jpg";
import img3 from "../systemsimages/HITACHI-APERTO-INSPIRE-0.4T.png";
import img4 from "../systemsimages/philips_brilliance_16_03b896d6-9037-4230-9ab5-6956adba752c.webp";

const products = [
    {
        id: "ge-hispeed",
        name: "Ct Gehispeed Dual",
        category: "Ct Scanner",
        price: "$",
        images: [img1],
        shortDescription: "Reliable X-Ray system for general radiography.",
        description:
            "X-Ray Basic 1000 delivers consistent image quality with low dose and simple workflow. Suitable for clinics and hospitals requiring dependable daily performance.",
        features: [
            "High resolution detector",
            "Low patient dose",
            "Easy-to-use interface",
            "1-year warranty"
        ],
        specs: [
            { key: "Detector", value: "Flat Panel 17x17" },
            { key: "Power", value: "32 kW" },
            { key: "Weight", value: "220 kg" }
        ],
        available: true,
        brand: "ASJ Medical"
    },
    {
        id: "Aquilion-16",
        name: "CT Toshiba Aquilion 16 Slice",
        category: "CT Scanner",
        price: "$",
        images: [img2],
        shortDescription: "Multi-slice CT for advanced diagnostics.",
        description:
            "CT Vision 200 offers fast acquisition, thin-slice reconstruction and advanced post-processing tools for precise diagnostics in radiology departments.",
        features: ["64-slice", "Low-dose protocols", "Advanced reconstruction"],
        specs: [
            { key: "Slices", value: "64" },
            { key: "Gantry aperture", value: "78 cm" },
            { key: "Rotation time", value: "0.35 s" }
        ],
        available: true,
        brand: "ASJ Medical"
    },
    {
        id: "mri-hitachi",
        name: "MRI Hitachi Aperto Inspire 0.4T",
        category: "MRI",
        price: "$",
        images: [img3],
        shortDescription: "1.5 Tesla MRI system with advanced coils.",
        description:
            "MRI Pro 1.5T combines high SNR with advanced sequences enabling clear soft tissue contrast for neurological and musculoskeletal imaging.",
        features: ["1.5T magnet", "Advanced coils", "Wide bore"],
        specs: [
            { key: "Field strength", value: "0.4 T" },
            { key: "Bore", value: "70 cm" }
        ],
        available: false,
        brand: "ASJ Medical"
    },
    {
        id: "philipse-brilliance",
        name: "Philips Brilliance 16 Slice",
        category: "Ultrasound",
        price: "$",
        images: [img4],
        shortDescription: "Portable ultrasound with Doppler modes.",
        description:
            "UltraSound 300 is portable, offers color Doppler and multiple probes. Ideal for OB/GYN, vascular and point-of-care imaging.",
        features: ["Color Doppler", "Multiple probes", "Battery operation"],
        specs: [{ key: "Display", value: "15 inch" }, { key: "Weight", value: "7 kg" }],
        available: true,
        brand: "ASJ Medical"
    },
];

export default products;
