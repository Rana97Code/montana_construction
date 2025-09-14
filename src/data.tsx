import {
  FaProjectDiagram,
  FaUsers,
  FaCalendarAlt,
  FaRegSmile,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaLaptopCode,
  FaMobileAlt,
  FaHandsHelping,
  FaChartLine,
  FaPaintBrush,
  FaRobot,
  FaRocket,
  FaCogs,
  FaChartBar,
  FaTools,
  FaClock,
  FaCloud,
  FaRegHandshake,
  FaCoffee,
  FaMoneyBillAlt,
  FaHardHat
} from "react-icons/fa";
import {
  FaAndroid,
  FaApple,
  FaBriefcase,
  FaBug,
  FaEthereum,
  FaFlask,
  FaGamepad,
  FaHospital,
  FaLifeRing,
} from "react-icons/fa6";

import { HiOutlineBookOpen } from "react-icons/hi2";

import { MdRealEstateAgent, MdRestaurantMenu } from "react-icons/md";
// import design from "./assets/videos/design.mp4";
// import development from "./assets/videos/development.mp4";
// import software from "./assets/videos/app.mp4";
// import digital from "./assets/videos/digital.mp4";
// import apps from "./assets/videos/apps.mp4";
import { FiFileText, FiShield } from "react-icons/fi";
import { IoAlertCircleOutline, IoKeyOutline } from "react-icons/io5";

export const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Services", href: "/services" },
  { id: 2, title: "Projects", href: "/projects" },
  // { id: 3, title: "Case Studies", href: "/case-studies" },
  { id: 4, title: "About Us", href: "/about" },
  { id: 5, title: "Blog", href: "/blog" },
  { id: 6, title: "Career", href: "/career" },
  { id: 7, title: "Let's Talk", href: "/contact" },
];

export const stats = [
  {
    id: 1,
    title: "Completed Projects",
    count: "+28",
    icon: <FaProjectDiagram size={32} />,
    bgColor: "bg-gray-200",
    textColor: "text-[#458FCD]",
  },
  {
    id: 2,
    title: "Employees",
    count: "+42",
    icon: <FaUsers size={32} />,
    bgColor: "bg-gray-200",
    textColor: "text-[#458FCD]",
  },
  {
    id: 3,
    title: "Years on the Market",
    count: "+6",
    icon: <FaCalendarAlt size={32} />,
    bgColor: "bg-gray-200",
    textColor: "text-[#458FCD]",
  },
  {
    id: 4,
    title: "Clients",
    count: "+26",
    icon: <FaRegSmile size={32} />,
    bgColor: "bg-gray-200",
    textColor: "text-[#458FCD]",
  },
];

export const detailsLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  // { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const informationLinks = [
  { label: "Terms & Condition", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export const contactInfo = {
  phone: "850-123-5021",
  email: "info@lorem.mail",
  address: "Bangla Motor",
  mapLink: "https://www.google.com/maps",
};

export const socialLinks = [
  { icon: <FaFacebook className="text-blue-600" />, href: "/" },
  { icon: <FaYoutube className="text-red-600" />, href: "/" },
  { icon: <FaLinkedin className="text-blue-700" />, href: "/" },
];

export const services = [
  {
    title: "Software Development",
    description:
      "Using advanced technology, we craft user-friendly web solutions that support your business growth. We handle everything from design to deployment to ensure your success!",
    icon: <FaLaptopCode className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "Mobile App Development",
    description:
      "We specialize in creating intuitive mobile apps for iOS and Android that offer seamless functionality and appealing design. Our solutions captivate users and drive your business forward!",
    icon: <FaMobileAlt className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "Outsourcing/Advisory",
    description:
      "Our expert outsourcing and advisory services provide comprehensive bookkeeping support to simplify your business operations. Let us handle the details so you can focus on growth!",
    icon: <FaHandsHelping className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "Digital Marketing",
    description:
      "We boost your brand visibility through data-driven strategies, social media campaigns, and search engine optimization to ensure your message reaches the right audience.",
    icon: <FaChartLine className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "UI/UX Design",
    description:
      "We create immersive, user-friendly designs that bridge the gap between functionality and aesthetics, delivering outstanding digital experiences.",
    icon: <FaPaintBrush className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "AI and Machine Learning",
    description:
      "Leveraging AI and machine learning, we provide tailored solutions to automate processes, enhance decision-making, and unlock new opportunities for your business.",
    icon: <FaRobot className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
];

export const constructionData = [
  {
    id: "residential",
    title: "Residential Buildings",
    video: "/construction/dubai-e.jpg",
    content:
      "High-quality apartments, villas, and housing projects designed with comfort, durability, and modern architecture in mind.",
  },
  {
    id: "commercial",
    title: "Commercial Towers",
    video: "/construction/neom.jpg",
    content:
      "Skyscrapers, malls, and office complexes that redefine skylines and create world-class business environments.",
  },
  {
    id: "industrial",
    title: "Industrial Projects",
    video: "/construction/dubai.jpg",
    content:
      "Factories, warehouses, and logistic hubs built with precision for industrial growth and efficiency.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    video: "/construction/wind1.jpeg",
    content:
      "Roads, bridges, airports, and utilities that strengthen communities and connect regions.",
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    video: "/construction/team1.jpg",
    content:
      "Revitalizing old structures into modern, functional, and sustainable spaces while maintaining structural integrity.",
  },
];

export const clientData = [
  {
    type: "text",
    title: "Free Estimation",
    description:
      "Mohanta Construction Ltd offers a free project estimation to help you understand your needs and budget before starting, which ensures complete transparency from the beginning.",
  },
  {
    type: "image",
    src: "https://niftyitsolution.com/wp-content/uploads/2024/08/5.webp",
    alt: "Our client",
  },
  {
    type: "text",
    title: "Code Ownership",
    description:
      "At Mohanta Construction Ltd, you retain full ownership of the code. You are granted complete control and flexibility over the future of your project without any restrictions.",
  },
  {
    type: "text",
    title: "High-Quality Products",
    description:
      "We deliver high-quality products that are robust, scalable, and built with the latest technology. You can rely on our solutions to exceed your expectations and meet your requirements thoroughly.",
  },
  {
    type: "text",
    title: "Passionate People",
    description:
      "Our team consists of passionate individuals committed to providing innovative solutions and exceptional service. We are dedicated to ensuring the success of your project from start to finish every time.",
  },
  {
    type: "image",
    src: "https://niftyitsolution.com/wp-content/uploads/2024/08/7.webp",
    alt: "Our client",
  },
  {
    type: "image",
    src: "https://niftyitsolution.com/wp-content/uploads/2024/08/2-1.webp",
    alt: "Our client",
  },
  {
    type: "text",
    title: "Project Workshops",
    description:
      "Through our proactive workshops, we help you define product strategies and make key decisions. Consequently, this ensures an effective and collaborative planning process for your project.",
  },
  {
    type: "text",
    title: "Dedicated Team",
    description:
      "At Mohanta Construction Ltd, each project is managed by a dedicated team, including a certified project manager and experts specifically tailored to meet your requirements.",
  },
];

export const caseStudiesData = [
  {
    id: 1,
    icon: <FaRocket className="w-8 h-8 text-[#3689ce]" />,
    title: "Seamless Integration With Custom Software Development Solutions",
    description:
      "Mohanta Construction Software crafted a unified platform for XYZ Corp by integrating Salesforce and QuickBooks, streamlining workflows, improving operations, and boosting productivity with tailored tech solutions.",
  },
  {
    id: 2,
    icon: <FaCogs className="w-8 h-8 text-[#3689ce]" />,
    title: "Empowering Modern Logistics Through Innovative Tech",
    description:
      "Mohanta Construction Software enabled DEF Logistics to leverage AI-driven analytics and cloud platforms, transforming nationwide supply chain management into an efficient, real-time system.",
  },
  {
    id: 3,
    icon: <FaChartBar className="w-8 h-8 text-[#3689ce]" />,
    title: "Revolutionizing Data Analysis for Financial Institutions",
    description:
      "Our team at Mohanta Construction partnered with leading banks to design predictive analytics tools that minimize risks, enhance decision-making, and ensure compliance across diverse platforms.",
  },
  {
    id: 4,
    icon: <FaTools className="w-8 h-8 text-[#3689ce]" />,
    title: "Cutting-Edge Maintenance Solutions for Smart Cities",
    description:
      "Mohanta Construction implemented IoT-based maintenance systems for ABC City, ensuring proactive monitoring, reduced costs, and improved quality of urban services.",
  },
];

export const blogs = [
  {
    id: 1,
    date: "Jan 15",
    category: "Mobile App Development",
    title: "How Mohanta Construction Uses Flutter to Build Exceptional Apps",
    description:
      "Discover how Mohanta Construction leverages Flutter to create high-performance cross-platform apps for clients worldwide.",
    author: "Jane Doe",
    authorAvatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 2,
    date: "Feb 10",
    category: "Web Development",
    title: "Mohanta Construction's Approach to Scalable Web Applications",
    description:
      "Learn about Mohanta Construction's proven strategies for designing and building scalable and secure web applications.",
    author: "John Smith",
    authorAvatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 3,
    date: "Mar 5",
    category: "Flutter Development",
    title: "10 Reasons Why Mohanta Construction Chooses Flutter for Mobile Apps",
    description:
      "Explore the top reasons why Flutter is our go-to framework for building feature-rich mobile applications.",
    author: "Emily Johnson",
    authorAvatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 4,
    date: "Apr 20",
    category: "UI/UX Design",
    title: "Designing User Experiences That Drive Results with Mohanta Construction",
    description:
      "At Mohanta Construction, we focus on creating intuitive UI/UX designs that enhance user engagement and satisfaction.",
    author: "Michael Brown",
    authorAvatar:
      "https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 5,
    date: "May 12",
    category: "Software Development",
    title: "Mohanta Construction's Best Practices for Custom Construction",
    description:
      "We reveal our methodologies for delivering tailor-made Construction that meet diverse business needs.",
    author: "Sophia Davis",
    authorAvatar:
      "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 6,
    date: "Jun 25",
    category: "DevOps",
    title: "How Mohanta Construction Automates Development with CI/CD",
    description:
      "Learn how Mohanta Construction streamlines development cycles using continuous integration and continuous delivery pipelines.",
    author: "Chris Wilson",
    authorAvatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
];


export const advantages = [
  {
    title: "Innovative Construction",
    description:
      "Mohanta Construction delivers cutting-edge construction solutions, combining advanced engineering techniques with sustainable practices.",
    icon: <FaHardHat className="text-4xl text-brand" />,
  },
  {
    title: "Mega Project Expertise",
    description:
      "We specialize in large-scale projects, including urban developments, hydro power facilities, and eco-friendly towers, ensuring every detail meets international standards.",
    icon: <FaProjectDiagram className="text-4xl text-brand" />,
  },
  {
    title: "On-Time & Safe Delivery",
    description:
      "Our team guarantees timely completion of projects while maintaining the highest standards of safety, quality, and efficiency.",
    icon: <FaClock className="text-4xl text-brand" />,
  },
];


export const featuresData = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    title: "How can Mohanta Construction help me scale my business?",
    description:
      "Mohanta Construction provides tailored Construction that streamline your business processes, helping you increase productivity and grow efficiently.",
  },
  {
    icon: <FaCloud className="text-4xl text-green-600" />,
    title: "How will I access my Construction?",
    description:
      "Our cloud-based platforms ensure that you can access your business tools anytime, anywhere, improving your team's collaboration and flexibility.",
  },
  {
    icon: <FaChartLine className="text-4xl text-purple-600" />,
    title: "How do these solutions improve my business performance?",
    description:
      "Our data-driven solutions offer powerful analytics that help you make smarter business decisions, boosting profitability and efficiency.",
  },
  {
    icon: <FaRegHandshake className="text-4xl text-yellow-500" />,
    title: "What about customer support and partnership?",
    description:
      "Mohanta Construction provides continuous support, and our collaborative approach ensures that your software grows with your business needs.",
  },
];

export const footerMenuItems = [
  {
    title: "DETAILS",
    items: [
      { title: "Home", link: "/" },
      { title: "Services", link: "services" },
      { title: "Case Studies", link: "case-studies" },
      { title: "About Us", link: "about" },
      { title: "Blog", link: "blog" },
      { title: "Career", link: "career" },
    ],
  },
  {
    title: "Information",
    items: [
      { title: "Terms & Condition", link: "terms" },
      { title: "Privacy Policy", link: "privacy" },
    ],
  },
  {
    title: "Help & Support",
    items: [{ title: "Support", link: "contact" }],
  },
];

export const content = [
  {
    title: "User-Centric Design",
    description:
      "We prioritize the needs and preferences of the end users in every design decision, ensuring a seamless and intuitive user experience.",
  },
  {
    title: "Security First",
    description:
      "Our team focuses on implementing robust security measures to safeguard user data and ensure the protection of sensitive information.",
  },
  {
    title: "Passionate Team",
    description:
      "Our team of experts is driven by passion and commitment, working tirelessly to create innovative solutions that drive your business forward.",
  },
  {
    title: "Proven Expertise",
    description:
      "With years of experience in the industry, we have a proven track record of delivering top-notch Construction tailored to meet our clients' needs.",
  },
];

export const teamMembers = [
  {
    name: "Oliver Aguilerra",
    role: "Product Manager",
    bio: "Vincent Van Gogh’s most popular painting, The Starry Night.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwR0VZphHBjpKo94MlmgorR1hylT8cfj2z_F-JdbY8jRDRJ9H6Bce5rnMAxRcdb5HyIlY&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Marta Clermont",
    role: "Design Team Lead",
    bio: "Amet I love liquorice jujubes pudding croissant I love pudding.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFmBrAp1EUYVooAXWupkxgIiAH6g5cmmsIslLUQO0JzFH1WIFMkT-rnD4HmPyfpfkbhk&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Anthony Geek",
    role: "CTO, Lorem Inc.",
    bio: "Apple pie macaroon toffee jujubes pie tart cookie caramels.",
    imgSrc:
      "https://img.freepik.com/premium-photo/adorable-male-manager-character-cute-boy-supervisor-illustration-cartoon-office-manager-young-pro_980716-79600.jpg",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Marta Clermont",
    role: "Design Team Lead",
    bio: "Amet I love liquorice jujubes pudding croissant I love pudding.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32u8TlDOryp-c9Kq5Mm68UjJEhlOlNxiGDC7jqI0OS9t706z1m7cMnDZVf5xct_bkjNE&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Oliver Aguilerra",
    role: "Product Manager",
    bio: "Vincent Van Gogh’s most popular painting, The Starry Night.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DKj8N_GC4woHwgsxoPoOx-N-4KO6l_Nik77PIN7XOBtOcZ2yOgsgc_5-KosEQJmCz7k&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Oliver Aguilerra",
    role: "Product Manager",
    bio: "Vincent Van Gogh’s most popular painting, The Starry Night.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIKWpWOjuoJekAz6QmWAF-BieFRAQ74h3fJFESQVuhWk1lWj3FuoduwdL-_oM4IvuseQ&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
];

export const blogPosts = [
  {
    title: "Building Landmarks Across Saudi Arabia",
    category: "Construction & Infrastructure",
    date: "19 SEP 2025",
    link: `#`,
    image: `/construction/wind1.jpeg`,
    description: `Mohanta Construction is at the forefront of shaping the skylines of Saudi Arabia. With expertise in residential, commercial, and industrial projects, we deliver high-quality construction solutions that meet international standards. Our experienced teams ensure projects are executed on time, safely, and sustainably, bringing visionary architecture to life.`,
  },

  {
    title: "Transforming Urban Landscapes in Dubai",
    category: "Urban Development",
    date: "10 SEP 2025",
    link: `#`,
    image: `/construction/windmil1.jpg`,
    description:
      "Mohanta Construction delivers world-class construction and development services in Dubai, creating iconic residential, commercial, and mixed-use projects. By combining advanced engineering techniques, sustainable practices, and meticulous project management, we transform urban spaces into functional and aesthetically striking landmarks.",
  },

  {
    title: "Your Trusted Partner for Mega Construction Projects",
    category: "Project Management",
    date: "5 SEP 2025",
    link: `#`,
    image: `https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0`,
    description:
      "Partnering with Mohanta Construction ensures your large-scale construction projects in Saudi Arabia and Dubai are handled with precision and expertise. From planning and design to execution and delivery, we provide end-to-end solutions that meet client expectations, emphasizing safety, quality, and timely completion.",
  },
];


export const caseStudies = [
  {
    title: "Safety at Sea",
    category: "CLOUD",
    description: "IoT Solution",
    icon: <FaCloud className="mx-auto mb-4 text-6xl text-blue-500" />,
  },
  {
    title: "Robi VR Master Blaster",
    category: "ANDROID",
    description: "Activation Campaign",
    icon: <FaAndroid className="mx-auto mb-4 text-6xl text-green-500" />,
  },
  {
    title: "Career Guidance Solutions",
    category: "BUSINESS INTELLIGENCE",
    description: "LMS Solution",
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-purple-500" />,
  },
  {
    title: "Ethereum Smart Contract",
    category: "BLOCKCHAIN",
    description: "Blockchain Development",
    icon: <FaEthereum className="mx-auto mb-4 text-6xl text-gray-600" />,
  },
  {
    title: "Restaurant Management System",
    category: "RESTAURANT",
    description: "Food Service Solution",
    icon: (
      <MdRestaurantMenu className="mx-auto mb-4 text-6xl text-orange-500" />
    ),
  },
  {
    title: "Digital Wallet",
    category: "FINTECH",
    description: "Fintech Solution",
    icon: <FaLaptopCode className="mx-auto mb-4 text-6xl text-red-500" />,
  },
  {
    title: "Gaming App",
    category: "GAME",
    description: "Game Development",
    icon: <FaGamepad className="mx-auto mb-4 text-6xl text-indigo-500" />,
  },
  {
    title: "Hospital Management System",
    category: "HEALTHCARE",
    description: "Healthcare Solution",
    icon: <FaHospital className="mx-auto mb-4 text-6xl text-green-600" />,
  },
  {
    title: "iOS Mobile App",
    category: "IOS",
    description: "iOS Application",
    icon: <FaApple className="mx-auto mb-4 text-6xl text-gray-800" />,
  },
  {
    title: "Pharmaceutical App",
    category: "PHARMACEUTICAL",
    description: "Pharma Solution",
    icon: <FaFlask className="mx-auto mb-4 text-6xl text-teal-500" />,
  },
  {
    title: "Real Estate Portal",
    category: "REAL ESTATE",
    description: "Property Management",
    icon: <MdRealEstateAgent className="mx-auto mb-4 text-6xl text-blue-700" />,
  },
  {
    title: "Bug Tracking System",
    category: "SQA",
    description: "Quality Assurance Tool",
    icon: <FaBug className="mx-auto mb-4 text-6xl text-red-600" />,
  },
];

export const jobs = [
  {
    title: "Senior Tech Lead",
    experience: "4+ Years",
    salary: "Negotiable (Monthly)",
    deadline: "28 Dec 2025",
  },
  {
    title: "Senior Technical Project Manager",
    experience: "5+ Years",
    salary: "Negotiable (Monthly)",
    deadline: "28 Dec 2025",
  },
  {
    title: "Junior Executive / Executive (BPO)",
    experience: "2-3 Years",
    salary: "Tk. 18000 - 22000 (Monthly)",
    deadline: "10 Jan 2025",
  },
];

export const benefits = [
  {
    title: "The quick fox",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
  },
  {
    title: "Leverage agile",
    description:
      "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
  },
  {
    title: "Organically grow",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
  },
  {
    title: "Have a good one",
    description:
      "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
  },
  {
    title: "Trough pomfret",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
  },
  {
    title: "Disrupt inspire",
    description:
      "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
  },
];

export const benefitedContent = [
  {
    title: "Mobile Bill & Allowances",
    description:
      "We cover your mobile bill, tour, and medical expenses to keep you connected and cared for – anytime.",
    icon: <FaMobileAlt className="w-8 h-8 text-indigo-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Savings & Security",
    description:
      "Secure your future with our Provident Fund, Insurance, Gratuity plans, and earned leave encashment for peace of mind.",
    icon: <FaBriefcase className="w-8 h-8 text-yellow-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Work-Life Balance",
    description:
      "Enjoy two holidays weekly and flexible hours to maintain a healthy balance between work and personal life.",
    icon: <FaLifeRing className="w-8 h-8 text-green-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Meals & Snacks",
    description:
      "Stay energized with fully subsidized lunches, evening snacks, and unlimited tea and coffee throughout the day.",
    icon: <FaCoffee className="w-8 h-8 text-blue-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Salary & Bonuses",
    description:
      "Annual salary reviews and festival bonuses ensure your efforts are recognized and rewarded generously.",
    icon: <FaMoneyBillAlt className="w-8 h-8 text-teal-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Growth & Recreation",
    description:
      "Advance your career with professional development opportunities, and relax with our yearly recreational tour.",
    icon: <FaChartLine className="w-8 h-8 text-purple-500 sm:w-12 sm:h-12" />,
  },
];

export const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "Welcome to [Company Name]. By accessing and using our software and services, you agree to be bound by these Terms and Conditions.",
    icon: HiOutlineBookOpen,
  },
  {
    id: "definitions",
    title: "Definitions",
    content:
      "Service refers to the software, applications, and tools provided by [Company Name]. User refers to any individual or entity accessing or using our Service.",
    icon: FiFileText,
  },
  {
    id: "licensing",
    title: "Software Licensing",
    content:
      "We grant you a limited, non-exclusive, non-transferable license to use our software in accordance with these terms. Any unauthorized use or distribution is strictly prohibited.",
    icon: IoKeyOutline,
  },
  {
    id: "privacy",
    title: "Privacy & Data",
    content:
      "We collect and process personal data as described in our Privacy Policy. By using our Service, you consent to such processing and warrant that all data provided is accurate.",
    icon: FiShield,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, [Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our Service.",
    icon: IoAlertCircleOutline,
  },
];
export const dashboardData = [
  {
    key: "1",
    name: "John Brown",
    email: "John@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi illo sunt culpa, at deleniti impedit rerum facere vitae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi illo sunt culpa, at deleniti impedit rerum facere vitae, nisi inventore quis. Repellat suscipit quaerat adipisci? Aliquam, accusamus totam quae culpa inventore itaque quasi ducimus aliquid iste numquam, non veritatis.",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    email: "Jim@gmail.com",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi illo sunt culpa, at deleniti impedit rerum facere vitae, nisi inventore quis. Repellat suscipit quaerat adipisci? Aliquam, accusamus totam quae culpa inventore itaque quasi ducimus aliquid iste numquam, non veritatis.",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    email: "black@gmail.com",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi illo sunt culpa, at deleniti impedit rerum facere vitae, nisi inventore quis. Repellat suscipit quaerat adipisci? Aliquam, accusamus totam quae culpa inventore itaque quasi ducimus aliquid iste numquam, non veritatis.",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magnam itaque molestias suscipit beatae, atque quos quaerat, excepturi quasi tempore fugiat nobis dolorem deleniti accusamus facilis doloribus, expedita sed repellat.",
    tags: ["awesome", "mentor"],
  },
  {
    key: "5",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia quam temporibus ullam magnam, ad quasi perspiciatis error laborum dolores cupiditate amet fugiat labore voluptatibus, deleniti architecto nesciunt mollitia omnis.",
    tags: ["helpful", "engineer"],
  },
  {
    key: "6",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi, officia distinctio at minus voluptates non dolor voluptatem, quibusdam ipsam perferendis voluptate laboriosam odit, dolorem optio incidunt libero quisquam reiciendis.",
    tags: ["creative", "developer"],
  },
  {
    key: "7",
    name: "Chris Evans",
    email: "chris.evans@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde voluptas nemo, dolores consequatur recusandae expedita corrupti quas amet pariatur voluptatum reprehenderit alias cupiditate ullam nostrum tempore hic. Sunt, fuga.",
    tags: ["leader", "actor"],
  },
  {
    key: "8",
    name: "Diana Prince",
    email: "diana.prince@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia quos labore veritatis exercitationem, excepturi debitis repellendus consectetur doloremque natus nesciunt atque. Sapiente voluptas voluptate temporibus eligendi commodi molestias totam!",
    tags: ["hero", "icon"],
  },
  {
    key: "9",
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum quidem voluptatum non, corporis neque eveniet recusandae accusamus, maiores minus tempore quae nobis nemo aliquid excepturi harum mollitia, corrupti ducimus.",
    tags: ["spy", "tactician"],
  },
  {
    key: "10",
    name: "Fiona Gallagher",
    email: "fiona.g@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam fugit nostrum earum harum natus, saepe amet, voluptates corrupti tempore minima reprehenderit animi vero neque aut! Quod ad aliquam adipisci!",
    tags: ["resilient", "fighter"],
  },
  {
    key: "11",
    name: "George Bailey",
    email: "george.bailey@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam odio ratione vero laborum at dicta voluptas iste ex, molestias eveniet vel. Deserunt autem consectetur quibusdam, dignissimos minima reiciendis libero.",
    tags: ["kind", "philanthropist"],
  },
  {
    key: "12",
    name: "Hannah Montana",
    email: "hannah.montana@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum repellendus aspernatur illum cumque. Sit quidem laboriosam, delectus reiciendis perspiciatis earum impedit, dolores voluptas minus placeat alias, labore magni voluptatem.",
    tags: ["singer", "performer"],
  },
  {
    key: "13",
    name: "Isaac Newton",
    email: "isaac.newton@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime deserunt reiciendis saepe neque totam necessitatibus! Harum adipisci laboriosam eveniet. Animi dolorem natus quidem nihil obcaecati at, temporibus quos doloremque.",
    tags: ["scientist", "visionary"],
  },
  {
    key: "14",
    name: "Jack Sparrow",
    email: "jack.sparrow@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil obcaecati dolorem rerum. Doloribus voluptatibus maiores quaerat error. Recusandae debitis aut quod nobis repudiandae pariatur, asperiores distinctio adipisci sapiente at!",
    tags: ["pirate", "adventurer"],
  },
  {
    key: "15",
    name: "Karen Page",
    email: "karen.page@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tempora inventore dolores repellendus labore odit quod temporibus. Optio, accusantium doloribus facilis iure unde culpa labore ad distinctio quisquam porro perferendis.",
    tags: ["journalist", "brave"],
  },
  {
    key: "16",
    name: "Lara Croft",
    email: "lara.croft@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid maiores neque, possimus tempora doloremque ipsum voluptate quidem non dolorum eaque illo accusantium repellendus? Animi vero rem molestias facilis nostrum.",
    tags: ["explorer", "fighter"],
  },
  {
    key: "17",
    name: "Michael Scott",
    email: "michael.scott@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iure ex porro, repellendus nisi maxime expedita unde dolores assumenda omnis dignissimos recusandae fuga amet temporibus. Dolorem quibusdam aspernatur veniam ratione.",
    tags: ["manager", "funny"],
  },
  {
    key: "18",
    name: "Natasha Romanoff",
    email: "natasha.romanoff@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam fugiat eveniet labore dolore itaque veritatis porro officia ad fugit harum accusamus quia laborum numquam sunt culpa deleniti eos consectetur.",
    tags: ["spy", "hero"],
  },
  {
    key: "19",
    name: "Oliver Queen",
    email: "oliver.queen@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero nemo reprehenderit. Quas eum nostrum unde quaerat reprehenderit, amet ex error iste voluptatum officiis, doloribus animi deserunt odit laborum cumque!",
    tags: ["archer", "hero"],
  },
  {
    key: "20",
    name: "Peter Parker",
    email: "peter.parker@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio repellat rerum rem! Nostrum natus suscipit nemo neque ad ea itaque! Nulla repellat totam rerum assumenda asperiores maxime delectus atque?",
    tags: ["student", "hero"],
  },
  {
    key: "21",
    name: "Quinn Fabray",
    email: "quinn.fabray@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugiat hic nihil aliquam porro reprehenderit maxime non voluptate facere reiciendis distinctio vero sit ut pariatur, ad mollitia! Tempora, sunt!",
    tags: ["cheerleader", "friend"],
  },
  {
    key: "22",
    name: "Rachel Green",
    email: "rachel.green@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum asperiores fugiat vel accusamus veniam itaque sunt commodi hic! Ipsum iure totam impedit possimus officia! Reprehenderit perspiciatis eveniet soluta mollitia.",
    tags: ["fashionista", "kind"],
  },
  {
    key: "23",
    name: "Steve Rogers",
    email: "steve.rogers@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex voluptates eius maiores quod minima tempore sint dolorum ratione. Tempore aperiam adipisci culpa saepe. Nihil, officia porro! Consequatur, rem maxime?",
    tags: ["leader", "hero"],
  },
  {
    key: "24",
    name: "Tony Stark",
    email: "tony.stark@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit ducimus reprehenderit maxime deserunt. Accusantium exercitationem ipsum voluptatibus soluta nisi aliquam itaque necessitatibus sequi dolorem pariatur. Ipsam magni molestias voluptatem.",
    tags: ["genius", "billionaire"],
  },
  {
    key: "25",
    name: "Uma Thurman",
    email: "uma.thurman@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus porro impedit ea reiciendis obcaecati sunt, hic sed maxime libero fugiat temporibus architecto, reprehenderit animi quisquam distinctio nihil eum. Optio.",
    tags: ["actress", "icon"],
  },
  {
    key: "26",
    name: "Victor Hugo",
    email: "victor.hugo@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo harum cumque. Excepturi, maiores amet magnam, enim doloremque quaerat, culpa deleniti blanditiis perspiciatis quis numquam. Natus laborum quod qui quasi.",
    tags: ["writer", "visionary"],
  },
  {
    key: "27",
    name: "Wanda Maximoff",
    email: "wanda.maximoff@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis sapiente ratione mollitia suscipit unde possimus consequuntur, dolorum quam ipsa minima dolorem, iste officiis. Nobis odio odit nihil corporis neque.",
    tags: ["hero", "powerful"],
  },
  {
    key: "28",
    name: "Xander Cage",
    email: "xander.cage@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo cupiditate laboriosam aliquam dolor consectetur modi quas ratione totam nemo reprehenderit fugiat, repellat placeat, commodi recusandae facilis labore veniam minima.",
    tags: ["athlete", "adventurer"],
  },
  {
    key: "29",
    name: "Ygritte Wildling",
    email: "ygritte.wildling@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid magni, eveniet quas mollitia harum adipisci voluptate minus illo soluta labore sed eos enim. Aliquam facilis repudiandae explicabo expedita quasi.",
    tags: ["wildling", "brave"],
  },
  {
    key: "30",
    name: "Zara Khan",
    email: "zara.khan@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit sapiente officia voluptatum itaque possimus hic vel dicta! Similique consequatur, deserunt excepturi, architecto labore ullam deleniti voluptas soluta iusto facilis!",
    tags: ["designer", "leader"],
  },
];
