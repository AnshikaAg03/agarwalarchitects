import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "ARCHITECTURAL DESIGN",
    about:
      "Creating building layouts, 2D/3D models, elevations, and floor plans tailored to the client's vision, needs, and site conditions , balancing functionality with aesthetic appeal.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION PLANNING AND SUPERVISION",
    about:
      "End-to-end planning of the construction process, including cost estimation, material selection, scheduling, and regular on-site supervision to ensure quality and timely execution.",
  },
  {
    icon: design,
    title: "INTERIOR DESIGNING",
    about:
      "Designing interiors that blend style and utility including furniture layouts, lighting, material selection, and décor to enhance both comfort and functionality.",
  },
  {
    icon: paint,
    title: "RENOVATION AND RESTORATION",
    about:
      "Upgrading or restoring existing spaces with modern designs, structural improvements, and smart space utilization while preserving architectural integrity.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Seamless service, attentive care - we’re with you at every step.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
];

export const clients = [
  {
    image: client2,
    name: "Tanvi Agarwal",
    about:
      "Tanvi is a passionate and accomplished architect with over 5 years of hands-on experience in the field. Having successfully completed 50+ diverse projects across residential, commercial, and interior domains, she brings both creativity and precision to her work. She honed her skills through extensive training at leading architectural firms in Ahmedabad and Hyderabad, where she gained valuable exposure to innovative design methodologies and on-ground execution. Her dedication to blending aesthetic vision with functional design continues to shape meaningful spaces for clients with care and excellence.",
    post: "Architect",
  },

];
