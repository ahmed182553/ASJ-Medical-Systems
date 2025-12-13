import img1 from "../systemsimages/ge-hispeed-ct-scanner.jpg";
import img2 from "../systemsimages/toshiba-aquilion-16ct.jpg";
import img3 from "../systemsimages/HITACHI-APERTO-INSPIRE-0.4T.png";
import img4 from "../systemsimages/philips_brilliance_16_03b896d6-9037-4230-9ab5-6956adba752c.webp";
import img6 from "../systemsimages/4462009.jpg"
import img7 from "../systemsimages/65e3073bf2a61_quipement-dentaire-portable-calcul-de-rayons-x-pic-mini-rayon.jpg__2__11zon-slider.jpg"
import img8 from "../systemsimages/70354-11776538.webp"
import img9 from "../systemsimages/analog-x-ray-machine-500x500.webp"
import img10 from "../systemsimages/AQ-RXL-TSX-32-Slice-6.jpg"
import img11 from "../systemsimages/bfb778_71f64c7eac7344969edde596263029e4mv2.jpg"
import img12 from "../systemsimages/compact-mobile-c-arm-x-ray-system-phoenix-2001c7a8.webp"
import img13 from "../systemsimages/download.jpg"
import img14 from "../systemsimages/GE-HealthCare-HiSpeed-Dual-2-Vorschau.webp"
import img15 from "../systemsimages/ge-healthcare-refurbished-prospeed-dual-slice-ct-scanner.jpg"
import img16 from "../systemsimages/ge-hispeed-ct-e-single-and-dual-slice-ct-scan-1492525552-2877378.jpg"
import img17 from "../systemsimages/HITACHI-APERTO-INSPIRE-0.4T.png"
import img18 from "../systemsimages/images.jpg"
import img19 from "../systemsimages/oec-carm-1.webp"
import img20 from "../systemsimages/philips-brilliance-16-slice-ct-scanner.jpg"
import img21 from "../systemsimages/philips-brilliance-big-bore-16-slice-.jpg"
import img22 from "../systemsimages/Philips-Brilliance-Big-Bore-16-Slice-CT-Scanners.webp"
import img23 from "../systemsimages/Philips-Ingenuity-128-Slice-CT-Scanners.jpg"
import img24 from "../systemsimages/philips-ingenuity-128-slice-ct.jpg"
import img25 from "../systemsimages/4462009.jpg"

const products = [
    {
        id: "ge-hispeed",
        name: "Ct Gehispeed Dual",
        category: "CT Scanner",
        price: "$",
        images: {
            main: img1,
            gallery: [img14, img15, img16]
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
            { label: "Detector", value: "Flat Panel 17x17" },
            { label: "Power", value: "32 kW" },
            { label: "Weight", value: "220 kg" }
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
            gallery: [img11, img13]
        },
        shortDescription: "Open MRI system with comfortable design.",
        description:
            "MRI Pro 1.5T combines high SNR with advanced sequences enabling clear soft tissue contrast for neurological and musculoskeletal imaging.",
        features: ["Open design", "0.4T magnet", "Wide patient table"],
        specs: [
            { label: "Field strength", value: "0.4 T" },
            { label: "Bore", value: "Open MRI" }
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
            gallery: [img20, img21, img22]
        },
        shortDescription: "Portable ultrasound with Doppler modes.",
        description:
            "UltraSound 300 is portable, offers color Doppler and multiple probes. Ideal for OB/GYN, vascular and point-of-care imaging.",
        features: ["Color Doppler", "Multiple probes", "Battery operation"],
        specs: [
            { label: "Display", value: "15 inch" },
            { label: "Weight", value: "7 kg" }
        ],
        available: true,
        brand: "ASJ Medical"
    },

    {
        id: "101",
        name: "GE Revolution ACE",
        brand: "ASJ Medical Systems",
        manufacturer: "GE Healthcare",
        category: "CT Scanner",
        price: "350,000 – 650,000 USD",
        model: "64 Slice CT",
        available: true,
        shortDescription:
            "Advanced 64-slice CT offering fast scanning & excellent image clarity.",
        description:
            "The GE Revolution ACE is designed for fast workflows, accurate diagnostics, and high-quality imaging. Ideal for trauma, emergency, and general CT applications.",
        features: [
            "High-speed rotation for fast scanning",
            "Low-dose radiation technology",
            "Enhanced cardiac imaging",
            "Advanced noise reduction algorithms"
        ],
        specs: [
            { label: "Slices", value: "64" },
            { label: "Gantry Bore", value: "70 cm" },
            { label: "Rotation Time", value: "0.35 sec" },
            { label: "Detector Type", value: "Gemstone Detector" },
            { label: "Weight Limit", value: "227 kg" }
        ],
        images: {
            main: img2,
            gallery: [img25]
        }
    },

    {
        id: "Philips Brilliance 64",
        name: "Philips Brilliance 64",
        brand: "ASJ Medical Systems",
        manufacturer: "Philips Healthcare",
        category: "CT Scanner",
        price: "200,000 – 350,000 USD",
        model: "64 Slice CT",
        available: true,
        shortDescription:
            "64-slice CT for general and emergency imaging with great detail and speed.",
        description:
            "The Philips Brilliance 64 is known for consistent performance and detailed scans suitable for emergency departments and clinics.",
        features: [
            "Rapid image reconstruction",
            "Low-dose protocols",
            "IntelliBeam technology",
            "Excellent motion correction"
        ],
        specs: [
            { label: "Slices", value: "64" },
            { label: "Gantry Bore", value: "70 cm" },
            { label: "Rotation Time", value: "0.4 sec" },
            { label: "Detector Type", value: "Astonish Detector" },
            { label: "Weight Limit", value: "205 kg" }
        ],
        images: {
            main: img1,
            gallery: [img18, img23]
        }
    },

    {
        id: "Philips Ingenuity 128",
        name: "Philips Ingenuity 128",
        brand: "ASJ Medical Systems",
        manufacturer: "Philips Healthcare",
        category: "CT Scanner",
        price: "500,000 – 900,000 USD",
        model: "128 Slice CT",
        available: true,
        shortDescription:
            "128-slice CT with advanced imaging for cardiac and complex studies.",
        description:
            "The Philips Ingenuity 128 delivers outstanding diagnostic accuracy, especially for cardiac and vascular imaging.",
        features: [
            "Advanced cardiac CT capabilities",
            "IMR iterative reconstruction",
            "Ultra-fast scanning",
            "High-clarity 3D imaging"
        ],
        specs: [
            { label: "Slices", value: "128" },
            { label: "Gantry Bore", value: "80 cm" },
            { label: "Rotation Time", value: "0.27 sec" },
            { label: "Detector Type", value: "iDose Detector" },
            { label: "Weight Limit", value: "227 kg" }
        ],
        images: {
            main: img2,
            gallery: [img24]
        }
    },

    {
        id: "Canon Aquilion Lightning",
        name: "Canon Aquilion Lightning",
        brand: "ASJ Medical Systems",
        manufacturer: "Canon Medical",
        category: "CT Scanner",
        price: "120,000 – 300,000 USD",
        model: "16/64 Slice CT",
        available: true,
        shortDescription:
            "High-performance CT with efficient workflow suitable for busy hospitals.",
        description:
            "Canon Aquilion Lightning is engineered for reliability, speed, and cost efficiency.",
        features: [
            "Fast workflow optimization",
            "Low-dose scanning with AIDR",
            "Compact energy-efficient design",
            "High patient throughput"
        ],
        specs: [
            { label: "Slices", value: "16 / 64" },
            { label: "Gantry Bore", value: "78 cm" },
            { label: "Rotation Time", value: "0.35 sec" },
            { label: "Detector Type", value: "PUREViSION Detector" },
            { label: "Weight Limit", value: "205 kg" }
        ],
        images: {
            main: img2,
            gallery: [img6]
        }
    },

    {
        id: "Canon Aquilion Prime",
        name: "Canon Aquilion Prime",
        brand: "ASJ Medical Systems",
        manufacturer: "Canon Medical",
        category: "CT Scanner",
        price: "700,000 – 1.2M USD",
        model: "128 Slice CT",
        available: true,
        shortDescription:
            "Robust high-speed CT system with excellent image resolution.",
        description:
            "Aquilion Prime is a premium CT built for diagnostic centers requiring high-end imaging performance.",
        features: [
            "High-resolution imaging",
            "Adaptive diagnostic algorithms",
            "High-speed gantry rotation",
            "Advanced cardiac scanning capabilities"
        ],
        specs: [
            { label: "Slices", value: "128" },
            { label: "Gantry Bore", value: "78 cm" },
            { label: "Rotation Time", value: "0.35 sec" },
            { label: "Detector Type", value: "Quantum Detector" },
            { label: "Weight Limit", value: "227 kg" }
        ],
        images: {
            main: img8,
            gallery: [img10]
        }
    },

    {
        id: "xray-digital-500",
        name: "Digital X-Ray 500",
        category: "X-Ray",
        price: "$",
        images: {
            main: img2,
            gallery: [img2, img3, img1]
        },
        shortDescription: "High-quality digital radiography system for general imaging.",
        description:
            "A premium digital radiography system designed for hospitals and clinics, offering fast workflow and sharp diagnostic images.",
        features: [
            "High-resolution flat panel",
            "Low-dose imaging",
            "Touchscreen control panel",
            "Fast image processing"
        ],
        specs: [
            { label: "Power", value: "5kW – 50kW" },
            { label: "Detector", value: "Flat Panel 14×17" },
            { label: "Tube", value: "120 kVp" },
            { label: "Exposure Time", value: "1ms – 6s" }
        ],
        available: true,
        brand: "ASJ Medical Systems"
    },

    {
        id: "mobile-xray-200",
        name: "Mobile X-Ray 200",
        category: "X-Ray",
        price: "$",
        images: {
            main: img2,
            gallery: [img2, img3, img1]
        },
        shortDescription:
            "Portable X-ray unit ideal for emergency & bedside imaging.",
        description:
            "A lightweight mobile X-ray system designed for ER, ICU, and bedside imaging with fast maneuverability.",
        features: ["Portable design", "Battery powered", "Fast exposure time"],
        specs: [
            { label: "Output", value: "4kW – 32kW" },
            { label: "Battery Runtime", value: "4–6 hours" },
            { label: "Max kVp", value: "110" },
            { label: "Wheels", value: "360° rotation" }
        ],
        available: true,
        brand: "ASJ Medical Systems"
    },

    {
        id: "c-arm-pro",
        name: "C-Arm Pro 9",
        category: "X-Ray",
        price: "$",
        images: {
            main: img12,
            gallery: [img19]
        },
        shortDescription:
            "Advanced C-Arm fluoroscopy unit for surgery and orthopedics.",
        description:
            "High-performance surgical C-Arm for orthopedic, vascular, and general surgery imaging with continuous fluoroscopy.",
        features: [
            "High-output generator",
            "Large C-arm arc depth",
            "Live fluoroscopy",
            "Digital image enhancement"
        ],
        specs: [
            { label: "Generator", value: "5kW – 15kW" },
            { label: "Detector Size", value: "9 inch" },
            { label: "Fluoro Modes", value: "Continuous & Pulsed" },
            { label: "Rotation", value: "115° – 150°" }
        ],
        available: true,
        brand: "ASJ Medical Systems"
    },

    {
        id: "xray-analog-300",
        name: "Analog X-Ray 300",
        category: "X-Ray",
        price: "$",
        images: {
            main: img9,
            gallery: []
        },
        shortDescription:
            "Basic analog X-ray system for general radiography.",
        description:
            "Reliable analog radiography machine suitable for clinics and medical centers with essential imaging capabilities.",
        features: ["Sturdy mechanical design", "Easy positioning", "Reliable output"],
        specs: [
            { label: "Power", value: "3kW – 30kW" },
            { label: "Tube", value: "100–125 kVp" },
            { label: "Table", value: "Manual movement" },
            { label: "Wall Bucky", value: "Optional" }
        ],
        available: false,
        brand: "ASJ Medical Systems"
    },

    {
        id: "dental-xray-compact",
        name: "Dental X-Ray Compact",
        category: "X-Ray",
        price: "$",
        images: {
            main: img7,
            gallery: [img7]
        },
        shortDescription:
            "Compact dental X-ray for clinics and dental centers.",
        description:
            "Compact, easy-to-install dental X-ray designed for quick dental diagnostics with minimal radiation.",
        features: ["Wall-mounted design", "Low radiation", "Fast imaging"],
        specs: [
            { label: "kVp", value: "60–70" },
            { label: "Exposure Time", value: "0.2 – 2s" },
            { label: "Mount Type", value: "Wall Mounted" },
            { label: "Focal Spot", value: "0.8 mm" }
        ],
        available: true,
        brand: "ASJ Medical Systems"
    }
];

export default products;
