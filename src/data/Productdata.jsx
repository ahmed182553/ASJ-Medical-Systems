import img1 from "../systemsimages/ge-hispeed-ct-scanner.jpg";
import img2 from "../systemsimages/toshiba-aquilion-16ct.jpg";
import img3 from "../systemsimages/HITACHI-APERTO-INSPIRE-0.4T.png";
import img4 from "../systemsimages/philips_brilliance_16_03b896d6-9037-4230-9ab5-6956adba752c.webp";


const products = [
    /* ------------------------- EXISTING CT / MRI / US ------------------------- */

    {
        id: "ge-hispeed",
        name: "Ct Gehispeed Dual",
        category: "CT Scanner",
        price: "$",
        images: {
            main: img1,
            gallery: [img3, img4, img4, img1,]
        },
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
        images: {
            main: img2,
            gallery: [img3, img3, img3, img3, img3]
        },
        shortDescription: "Multi-slice CT for advanced diagnostics.",
        description:
            "CT Vision 200 offers fast acquisition, thin-slice reconstruction and advanced post-processing tools for precise diagnostics in radiology departments.",
        features: [
            "16-slice imaging",
            "Low-dose protocols",
            "Advanced reconstruction"
        ],
        specs: [
            { key: "Slices", value: "16" },
            { key: "Gantry aperture", value: "78 cm" },
            { key: "Rotation time", value: "0.5 s" }
        ],
        available: true,
        brand: "ASJ Medical"
    },

    {
        id: "mri-hitachi",
        name: "MRI Hitachi Aperto Inspire 0.4T",
        category: "MRI",
        price: "$",
        images: {
            main: img3,
            gallery: [img3, img3, img3, img3, img3]
        },
        shortDescription: "Open MRI system with comfortable design.",
        description:
            "MRI Pro 1.5T combines high SNR with advanced sequences enabling clear soft tissue contrast for neurological and musculoskeletal imaging.",
        features: ["Open design", "0.4T magnet", "Wide patient table"],
        specs: [
            { key: "Field strength", value: "0.4 T" },
            { key: "Bore", value: "Open MRI" }
        ],
        available: false,
        brand: "ASJ Medical"
    },

    {
        id: "philipse-brilliance",
        name: "Philips Brilliance 16 Slice",
        category: "Ultrasound",
        price: "$",
        images: {
            main: img4,
            gallery: [img3, img3, img3, img3, img3]
        },
        shortDescription: "Portable ultrasound with Doppler modes.",
        description:
            "UltraSound 300 is portable, offers color Doppler and multiple probes. Ideal for OB/GYN, vascular and point-of-care imaging.",
        features: ["Color Doppler", "Multiple probes", "Battery operation"],
        specs: [
            { key: "Display", value: "15 inch" },
            { key: "Weight", value: "7 kg" }
        ],
        available: true,
        brand: "ASJ Medical"
    },

    /* ----------- YOUR EXTENDED CT SYSTEMS (id: 101 → 105) ----------- */

    {
        id: 101,
        name: "GE Revolution ACE",
        category: "CT Scanner",
        price: "350,000 – 650,000 USD",
        model: "64 Slice CT",
        shortDescription: "Advanced 64-slice CT offering fast scanning & excellent image clarity.",
        images: {
            main: img2,
            gallery: [
                img3, img3, img3, img3
            ]
        }
    },

    {
        id: 102,
        name: "Philips Brilliance 64",
        category: "CT Scanner",
        price: "200,000 – 350,000 USD",
        model: "64 Slice CT",
        shortDescription: "64-slice CT for general and emergency imaging with great detail and speed.",
        images: {
            main: img1,
            gallery: [
                img4, img4, img2, img2
            ]
        }
    },

    {
        id: 103,
        name: "Philips Ingenuity 128",
        category: "CT Scanner",
        price: "500,000 – 900,000 USD",
        model: "128 Slice CT",
        shortDescription: "128-slice CT with advanced imaging for cardiac and complex studies.",
        images: {
            main: img2,
            gallery: [
                img2, img3, img2, img1
            ]
        }
    },

    {
        id: 104,
        name: "Canon Aquilion Lightning",
        category: "CT Scanner",
        price: "120,000 – 300,000 USD",
        model: "16/64 Slice CT",
        shortDescription: "High-performance CT with efficient workflow suitable for busy hospitals.",
        images: {
            main: img2,
            gallery: [
                img2, img3, img4
            ]
        }
    },

    {
        id: 105,
        name: "Canon Aquilion Prime",
        category: "CT Scanner",
        price: "700,000 – 1.2M USD",
        model: "128 Slice CT",
        shortDescription: "Robust high-speed CT system with excellent image resolution.",
        images: {
            main: img2,
            gallery: [
                img2, img3, img4
            ]
        }
    },

    /* ---------------------- ADDED X-RAY PRODUCTS ---------------------- */

    {
        id: "xray-digital-500",
        name: "Digital X-Ray 500",
        category: "X-Ray",
        price: "$",
        images: {
            main: img2,
            gallery: [
                img2, img3, img1
            ]
        },
        shortDescription: "High-quality digital radiography system for general imaging.",
        features: [
            "High-resolution flat panel",
            "Low-dose imaging",
            "Touchscreen control panel",
            "Fast image processing"
        ],
        available: true,
        brand: "ASJ Medical"
    },

    {
        id: "mobile-xray-200",
        name: "Mobile X-Ray 200",
        category: "X-Ray",
        price: "$",
        images: {
            main: img2,
            gallery: [
                img2, img3, img1
            ]
        },
        shortDescription: "Portable X-ray unit ideal for emergency & bedside imaging.",
        features: ["Portable design", "Battery powered", "Fast exposure time"],
        available: true,
        brand: "ASJ Medical"
    },

    {
        id: "c-arm-pro",
        name: "C-Arm Pro 9",
        category: "X-Ray",
        price: "$",
        images: {
            main: img1,
            gallery: [
                img2, img1, img3
            ]
        },
        shortDescription: "Advanced C-Arm fluoroscopy unit for surgery and orthopedics.",
        features: [
            "High-output generator",
            "Large C-arm arc depth",
            "Live fluoroscopy",
            "Digital image enhancement"
        ],
        available: true,
        brand: "ASJ Medical"
    },

    {
        id: "xray-analog-300",
        name: "Analog X-Ray 300",
        category: "X-Ray",
        price: "$",
        images: {
            main: img4,
            gallery: [
                img2, img3, img1, img4
            ]
        },
        shortDescription: "Basic analog X-ray system for general radiography.",
        features: ["Sturdy mechanical design", "Easy positioning", "Reliable output"],
        available: false,
        brand: "ASJ Medical"
    },

    {
        id: "dental-xray-compact",
        name: "Dental X-Ray Compact",
        category: "X-Ray",
        price: "$",
        images: {
            main: img1,
            gallery: [
                img3, img2, img1, img2
            ]
        },
        shortDescription: "Compact dental X-ray for clinics and dental centers.",
        features: ["Wall-mounted design", "Low radiation", "Fast imaging"],
        available: true,
        brand: "ASJ Medical"
    }
];

export default products;
