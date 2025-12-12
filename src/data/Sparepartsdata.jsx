const sparePartsData = [
    {
        deviceId: "ge-hispeed",
        spareParts: [
            {
                id: "ghd-001",
                name: "X-Ray Tube Performix 40",
                specs: [
                    { label: "Heat Capacity", value: "3.5 MHU" }
                ],
                price: "9000$",
                brand: "GE",
                description: "Original high-speed CT tube"
            },
            {
                id: "ghd-002",
                name: "Detector Module",
                specs: [
                    { label: "Channels", value: "512" }
                ],
                price: "4500$",
                brand: "GE",
                description: "High-sensitivity detector module"
            },
            {
                id: "ghd-003",
                name: "Gantry Motor",
                specs: [
                    { label: "Speed", value: "0.7 sec rotation" }
                ],
                price: "2200$",
                brand: "GE",
                description: "Main gantry rotation motor"
            }
        ]
    },
    {
        deviceId: "Aquilion-16",
        spareParts: [
            {
                id: "ta16-001",
                name: "Tube CXB-400B",
                specs: [
                    { label: "Heat Capacity", value: "3 MHU" }
                ],
                price: "7000$",
                brand: "Toshiba",
                description: "Standard CT tube for Aquilion 16"
            },
            {
                id: "ta16-002",
                name: "16-Row Detector",
                specs: [
                    { label: "Rows", value: "16" }
                ],
                price: "5000$",
                brand: "Toshiba",
                description: "Detector module for 16-slice imaging"
            }
        ]
    },

    {
        deviceId: "mri-hitachi",
        spareParts: [
            {
                id: "ha04-001",
                name: "Gradient Amplifier",
                specs: [
                    { label: "Power", value: "40 kW" }
                ],
                price: "8000$",
                brand: "Hitachi",
                description: "MRI gradient drive module"
            },
            {
                id: "ha04-002",
                name: "RF Coil",
                specs: [
                    { label: "Type", value: "Body Coil" }
                ],
                price: "2500$",
                brand: "Hitachi",
                description: "High-signal RF coil"
            }
        ]
    },

    // -----------------------------
    // Philips Brilliance 16 Slice
    // -----------------------------
    {
        deviceId: "philipse-brilliance",
        spareParts: [
            {
                id: "pb16-001",
                name: "X-Ray Tube MRC 600",
                specs: [
                    { label: "Heat Capacity", value: "3 MHU" }
                ],
                price: "9500$",
                brand: "Philips",
                description: "CT tube for Brilliance 16"
            },
            {
                id: "pb16-002",
                name: "16-Row Detector",
                specs: [
                    { label: "Material", value: "CsI" }
                ],
                price: "4800$",
                brand: "Philips",
                description: "High-quality detector"
            }
        ]
    },

    {
        deviceId: "Philips Brilliance 64",
        spareParts: [
            {
                id: "pb64-001",
                name: "X-Ray Tube MRC 800",
                specs: [
                    { label: "Heat Capacity", value: "8 MHU" }
                ],
                price: "12000$",
                brand: "Philips",
                description: "High-performance tube for 64-slice scanning"
            },
            {
                id: "pb64-002",
                name: "Detector Array 64 Channels",
                specs: [
                    { label: "Rows", value: "64" }
                ],
                price: "9000$",
                brand: "Philips",
                description: "Precision 64-channel detector"
            }
        ]
    },

    // -----------------------------
    // Philips Ingenuity 128 Slice
    // -----------------------------
    {
        deviceId: "Philips Ingenuity 128",
        spareParts: [
            {
                id: "pi128-001",
                name: "X-Ray Tube MRC Ice",
                specs: [
                    { label: "Heat Storage", value: "7.5 MHU" }
                ],
                price: "15000$",
                brand: "Philips",
                description: "Tube designed for high-resolution 128-slice imaging"
            },
            {
                id: "pi128-002",
                name: "128-Channel Detector",
                specs: [
                    { label: "Slices", value: "128" }
                ],
                price: "11500$",
                brand: "Philips",
                description: "Full detector array for high-speed scanning"
            }
        ]
    },

    {
        deviceId: "Canon Aquilion Lightning",
        spareParts: [
            {
                id: "cal-001",
                name: "X-Ray Tube CXB-750B",
                specs: [
                    { label: "Heat Capacity", value: "5 MHU" }
                ],
                price: "11000$",
                brand: "Canon",
                description: "Tube for Aquilion Lightning CT systems"
            },
            {
                id: "cal-002",
                name: "Liquid Cooling Pump",
                specs: [
                    { label: "Type", value: "Closed Circuit" }
                ],
                price: "1400$",
                brand: "Canon",
                description: "Pump for tube cooling"
            }
        ]
    },

    {
        deviceId: "Canon Aquilion Prime",
        spareParts: [
            {
                id: "cap-001",
                name: "X-Ray Tube CXB-750D",
                specs: [
                    { label: "Heat Capacity", value: "6.3 MHU" }
                ],
                price: "14000$",
                brand: "Canon",
                description: "Prime series tube"
            },
            {
                id: "cap-002",
                name: "Detector 80-Row",
                specs: [
                    { label: "Rows", value: "80" }
                ],
                price: "10000$",
                brand: "Canon",
                description: "Wide-coverage detector"
            }
        ]
    },

    {
        deviceId: "xray-digital-500",
        spareParts: [
            {
                id: "dx500-001",
                name: "Flat Panel Detector 14x17",
                specs: [
                    { label: "Resolution", value: "3.5 lp/mm" }
                ],
                price: "3500$",
                brand: "ASJ Medical Systems",
                description: "Standard DR detector"
            },
            {
                id: "dx500-002",
                name: "X-Ray Tube 125 kV",
                specs: [
                    { label: "Power", value: "32 kW" }
                ],
                price: "1700$",
                brand: "ASJ Medical Systems",
                description: "General-purpose tube"
            }
        ]
    },
    {
        deviceId: "mobile-xray-200",
        spareParts: [
            {
                id: "mx200-001",
                name: "High Frequency Generator",
                specs: [
                    { label: "Power", value: "5 kW" }
                ],
                price: "1200$",
                brand: "ASJ Medical Systems",
                description: "HF generator for mobile X-ray"
            },
            {
                id: "mx200-002",
                name: "Mobile Tube Arm",
                specs: [
                    { label: "Rotation", value: "180°" }
                ],
                price: "500$",
                brand: "ASJ Medical Systems",
                description: "Tube support arm"
            }
        ]
    },

    {
        deviceId: "cc-arm-pro",
        spareParts: [
            {
                id: "cap9-001",
                name: "Image Intensifier 9 inch",
                specs: [
                    { label: "Diameter", value: "9 inch" }
                ],
                price: "2800$",
                brand: "ASJ Medical Systems",
                description: "C-Arm image intensifier"
            },
            {
                id: "cap9-002",
                name: "X-Ray Generator 2.5 kW",
                specs: [
                    { label: "Power", value: "2.5 kW" }
                ],
                price: "1700$",
                brand: "ASJ Medical Systems",
                description: "HF generator for C-Arm"
            }
        ]
    },

    {
        deviceId: "xray-analog-300",
        spareParts: [
            {
                id: "ax300-001",
                name: "Bucky Stand Motor",
                specs: [
                    { label: "Voltage", value: "24V" }
                ],
                price: "350$",
                brand: "ASJ Medical Systems",
                description: "Motor for vertical bucky movement"
            },
            {
                id: "ax300-002",
                name: "Film Cassette Holder",
                specs: [
                    { label: "Size", value: "14x17" }
                ],
                price: "80$",
                brand: "ASJ Medical Systems",
                description: "Standard cassette frame"
            }
        ]
    },

    {
        deviceId: "dental-xray-compact",
        spareParts: [
            {
                id: "dxc-001",
                name: "Dental Tube Head",
                specs: [
                    { label: "kV", value: "70 kV" }
                ],
                price: "250$",
                brand: "ASJ Medical Systems",
                description: "Tube head for dental X-ray"
            },
            {
                id: "dxc-002",
                name: "Scissor Arm Assembly",
                specs: [
                    { label: "Length", value: "80 cm" }
                ],
                price: "90$",
                brand: "ASJ Medical Systems",
                description: "Arm movement assembly"
            }
        ]
    }
];

export default sparePartsData;
