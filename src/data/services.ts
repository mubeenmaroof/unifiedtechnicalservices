import { Cable, Camera, Flame, Map, PanelsTopLeft, Zap } from "lucide-react";

export const services = [
  {
    id: "fiber",
    number: "01",
    title: "Fiber Optic & Telecom",
    shortTitle: "Fiber & GPON Planning",
    shortDescription: "FTTH, FTTB, FTTX, GPON and ADT/FDT planning solutions.",
    description:
      "End-to-end fiber optic network planning and design services covering access networks, GPON architecture, route planning, distribution networks and technical documentation.",
    icon: Cable,

    items: [
      "FTTH / FTTB / FTTX Planning",
      "GPON Network Planning",
      "Feeder Cable Planning",
      "Distribution Cable Planning",
      "ADT / FDT Planning",
      "Fiber Route Planning",
      "Network Optimization",
      "As-Built Documentation",
    ],
  },

  {
    id: "gis",
    number: "02",
    title: "GIS & Geospatial Services",
    shortTitle: "GIS & Mapping Services",
    shortDescription:
      "ArcGIS, QGIS, RS/GIS, spatial analysis and infrastructure mapping.",
    description:
      "Professional geospatial services supporting telecom, infrastructure and engineering projects through mapping, spatial analysis, asset management and GIS-based planning.",
    icon: Map,

    items: [
      "ArcGIS",
      "QGIS",
      "RS/GIS",
      "Spatial Analysis",
      "Network Mapping",
      "Asset Mapping",
      "GIS Data Management",
      "Digitization",
      "KML / KMZ Management",
      "SHP / GDB Data Management",
      "Web GIS Support",
      "Custom GIS Applications",
    ],
  },

  {
    id: "cctv",
    number: "03",
    title: "CCTV & Security Solutions",
    shortTitle: "CCTV & Security",
    shortDescription:
      "Professional surveillance planning, installation and monitoring.",
    description:
      "Security and surveillance solutions for residential, commercial and infrastructure environments with reliable monitoring and scalable system design.",
    icon: Camera,

    items: [
      "CCTV Planning & Design",
      "IP Camera Installation",
      "Analog Camera Systems",
      "DVR / NVR Systems",
      "Residential Surveillance",
      "Commercial Surveillance",
      "Remote Monitoring",
      "Maintenance & Support",
    ],
  },

  {
    id: "electrical",
    number: "04",
    title: "Electrical Works",
    shortTitle: "Electrical Works",
    shortDescription:
      "Single-phase, three-phase and electrical as-built solutions.",
    description:
      "Electrical installation and documentation services for residential, commercial and technical infrastructure projects.",
    icon: Zap,

    items: [
      "Single Phase Electrical Works",
      "Three Phase Electrical Works",
      "Electrical As-Builts",
      "Distribution Panels",
      "Power Distribution",
      "Lighting Systems",
      "Technical Documentation",
      "Installation & Maintenance",
    ],
  },

  {
    id: "fire",
    number: "05",
    title: "Fire Alarm Systems",
    shortTitle: "Fire Alarm Systems",
    shortDescription:
      "Fire alarm design, installation, testing and commissioning.",
    description:
      "Fire detection and alarm systems designed to provide reliable protection for buildings, businesses and technical facilities.",
    icon: Flame,

    items: [
      "Fire Alarm Planning",
      "Fire Alarm Design",
      "Smoke Detection",
      "Heat Detection",
      "Alarm System Installation",
      "Testing & Commissioning",
      "System Maintenance",
      "Technical Documentation",
    ],
  },

  {
    id: "solar",
    number: "06",
    title: "Solar Energy Solutions",
    shortTitle: "Solar Installation",
    shortDescription: "Residential, commercial and industrial solar solutions.",
    description:
      "Solar-energy design and installation services focused on reliable, efficient and sustainable power solutions.",
    icon: PanelsTopLeft,

    items: [
      "Solar System Design",
      "Residential Solar",
      "Commercial Solar",
      "Industrial Solar",
      "On-Grid Systems",
      "Off-Grid Systems",
      "Hybrid Solar Systems",
      "Installation & Maintenance",
    ],
  },
];
