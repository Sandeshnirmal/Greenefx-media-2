import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";


// --- MOCK DATA ---
const courses = [
  {
    id: 1,
    title: "Diploma in Multimedia Design & Ai Creativity",
    shortDescription:
      "Explore the future of design in our offline classes. Combine traditional multimedia skills with cutting-edge AI tools for stunning creative projects.",
    longDescription:
      "Master the Complete Creative Suite with our 6-month, career-focused training. This diploma program provides a unique, in-person learning experience at the intersection of multimedia design and artificial intelligence. In our state-of-the-art labs, you will master video production, 2D/3D animation, and graphic design, while also learning to leverage AI tools to enhance your creative workflow.",
    tools: [
      "Photoshop",
      "After Effects",
      "Premiere Pro",
      "Audition",
      "AI Tools",
      "Canva",
    ],
    courseDuration: "6 Months",
    courseBreakdown:
      "4 Months Training + 1 Month Projects + 1 Month Internship",
    courseModes: ["At Studio (Hands-on)", "Online (Live Interactive)"],
    whyChoose: [
      {
        title: "Graphic Design with Photoshop",
        details:
          "Design professional graphics, posters, and social media creatives.",
      },
      {
        title: "Motion Graphics with After Effects",
        details: "Animate, add VFX, and create engaging motion visuals.",
      },
      {
        title: "Video Editing with Premiere Pro",
        details: "Edit short-form and long-form videos like a pro.",
      },
      {
        title: "Audio Editing with Audition",
        details: "Enhance sound quality for films, ads & social media content.",
      },
      {
        title: "AI Tools for Creatives",
        details: "Boost productivity with the latest generative AI tools.",
      },
    ],
    careerOpportunities: [
      "Graphic Designer / Creative Designer",
      "Motion Graphics Artist",
      "Video & Audio Editor",
      "Social Media Content Creator",
      "Digital Media Specialist",
      "AI-Enabled Content Producer",
    ],
    courseHighlights: [
      "Hands-on practical training with real-time projects",
      "Portfolio development for jobs & freelancing",
      "AI-driven workflow training for modern creatives",
      "Internship & placement assistance",
      "Industry-focused syllabus curated by professionals",
    ],
    idealFor: [
      "College Students (Visual Communication, Arts & Science)",
      "Aspiring Designers",
      "YouTubers & Podcasters",
      "Filmmakers & Video Editors",
      "Content Creators & Influencers",
      "Anyone looking to excel in today’s creative media industry",
    ],
    curriculum: [
      {
        month: 1,
        topic: "Adobe Photoshop",
        details: [
          "Graphic Design & Digital Art",
          "Photo Editing & Retouching",
          "Posters, Flyers & Social Media Creatives",
          "Branding & Marketing Materials",
        ],
      },
      {
        month: 2,
        topic: "Adobe After Effects",
        details: [
          "Motion Graphics & Animations",
          "Titles & Lower Thirds",
          "Visual Effects Basics",
          "Social Media Video Animations",
        ],
      },
      {
        month: 3,
        topic: "Adobe Premiere Pro",
        details: [
          "Video Editing & Storytelling",
          "Transitions & Effects",
          "Multi-Cam & Audio Syncing",
          "YouTube/Shorts & Film Editing",
        ],
      },
      {
        month: 4,
        topic: "Add-On Tools",
        details: [
          "Canva – Quick & Professional Social Media Graphics",
          "Adobe Audition – Audio Editing & Mixing",
          "AI Tools – Creative Productivity with AI",
        ],
      },
      {
        month: 5,
        topic: "Project Assignments",
        details: [
          "Real-Time Client-Style Projects",
          "Short Film / Ad Video Production",
          "Motion Graphics & Animated Posters",
          "Portfolio Development",
        ],
      },
      {
        month: 6,
        topic: "Internship / Industry Exposure",
        details: [
          "Work on Real Projects with Studios/Agencies",
          "Industry Workflow & Best Practices",
          "Finalize Professional Portfolio",
          "Career Guidance (Job/Freelance)",
        ],
      },
    ],
    images: [
      "https://placehold.co/600x400/d8b4fe/4a5568?text=AI+Creativity+Lab",
      "https://placehold.co/600x400/c084fc/4a5568?text=Multimedia+Projects",
      "https://placehold.co/600x400/a855f7/4a5568?text=Expert+Guidance",
    ],
  },
  {
    id: 2,
    title: "Diploma in Graphic Design & Print Media",
    shortDescription:
      "Master Photoshop, Illustrator, InDesign, & CorelDRAW in our comprehensive 6-month offline training program focused on the print and photo media industry.",
    longDescription:
      "This diploma offers complete, in-depth graphics design training for the print and photo media industries. Over six months, you will master the essential software suite including Photoshop, Illustrator, InDesign, and CorelDRAW through hands-on, practical learning in our state-of-the-art studio.",
    tools: ["Photoshop", "Illustrator", "InDesign", "CorelDRAW"],
    courseDuration: "6 Months",
    courseBreakdown:
      "4 Months Training + 1 Month Projects + 1 Month Internship",
    courseModes: ["At Studio (Hands-on)", "Online (Live Interactive)"],
    coreModules: [
      {
        title: "Adobe Photoshop",
        details: [
          "Image Editing, Retouching & Color Correction",
          "Photo Manipulation & Creative Composites",
          "Designing Posters, Banners & Print Ads",
        ],
      },
      {
        title: "Adobe Illustrator",
        details: [
          "Vector Graphics & Logo Design",
          "Illustrations, Icons & Infographics",
          "Branding & Creative Layouts",
        ],
      },
      {
        title: "Adobe InDesign",
        details: [
          "Page Layout & Publishing Design",
          "Brochures, Magazines, Catalogues & Flyers",
          "Print-Ready Files & Publishing Workflow",
        ],
      },
      {
        title: "CorelDRAW",
        details: [
          "Vector Design for Print Media",
          "Business Cards, Packaging & Outdoor Media",
          "Advanced Typography & Print Layouts",
        ],
      },
    ],
    careerOpportunities: [
      "Graphic Designer (Print & Digital)",
      "Creative Designer in Advertising Agencies",
      "Designer in Photo Studios & Wedding Albums",
      "Layout Artist in Publishing Houses & Magazines",
      "Branding & Packaging Designer",
      "Freelance Graphic Design Professional",
    ],
    courseHighlights: [
      "In-depth Practical Training",
      "Real-Time Project Assignments",
      "Print Industry-Focused Curriculum",
      "Internship & Career Guidance",
      "Portfolio Development for Jobs & Freelance",
    ],
    idealFor: [
      "Students from Arts, Visual Communication & Printing Technology",
      "Aspiring Graphic Designers",
      "Photo Studio Professionals & Wedding Album Designers",
      "Freelancers looking to enter the design industry",
      "Anyone passionate about Print & Publishing Design",
    ],
    curriculum: [
      {
        month: 1,
        topic: "Adobe Photoshop",
        details: [
          "Image Editing & Retouching",
          "Color Correction & Enhancements",
          "Poster & Banner Designing",
          "Creative Photo Manipulation",
        ],
      },
      {
        month: 2,
        topic: "CorelDRAW",
        details: [
          "Vector Artwork & Illustration",
          "Logo & Branding Design",
          "Print Media Layouts (Business Cards, Packaging, Outdoor Media)",
          "Typography & Layouts",
        ],
      },
      {
        month: 3,
        topic: "Adobe Illustrator",
        details: [
          "Advanced Vector Design",
          "Logos, Icons & Infographics",
          "Branding & Creative Layouts",
          "Illustration for Print & Digital",
        ],
      },
      {
        month: 4,
        topic: "Adobe InDesign",
        details: [
          "Page Layout & Publishing Design",
          "Brochures, Flyers & Catalogues",
          "Magazine & Book Layouts",
          "Preparing Print-Ready Files",
        ],
      },
      {
        month: 5,
        topic: "Project Assignments",
        details: [
          "Real-Time Client-Based Projects",
          "Print Campaigns (Brochures, Posters, Packaging)",
          "Photo Studio Album Design",
          "Portfolio Development",
        ],
      },
      {
        month: 6,
        topic: "Internship / Industry Exposure",
        details: [
          "Work with Real-World Projects",
          "Hands-on Industry Practices",
          "Professional Portfolio Finalization",
          "Placement / Freelance Guidance",
        ],
      },
    ],
    images: [
      "https://placehold.co/600x400/fca5a5/4a5568?text=Print+Design+Studio",
      "https://placehold.co/600x400/f87171/4a5568?text=Adobe+Suite+Mastery",
      "https://placehold.co/600x400/ef4444/4a5568?text=Portfolio+Building",
    ],
  },
  {
    id: 3,
    title: "Graphic Design Services",
    shortDescription:
      "Professional graphic design services to elevate your brand. From logos and branding to social media creatives and print ads, we design visuals that connect and convert.",
    longDescription:
      "Our Graphic Design service helps your business stand out with visuals that connect and convert. We craft visuals that grab attention, build trust, and grow your brand across all platforms, from branding to brochures, social media posts to product packaging.",
    tools: [
      "Branding",
      "Social Media",
      "Print Ads",
      "Packaging",
      "Marketing Collaterals",
    ],
    images: [
      "https://placehold.co/600x400/93c5fd/4a5568?text=Logo+%26+Branding",
      "https://placehold.co/600x400/60a5fa/4a5568?text=Social+Media+Posts",
      "https://placehold.co/600x400/3b82f6/4a5568?text=Print+Designs",
    ],
    serviceOptions: [
      {
        title: "Option 1 – Professional & Direct",
        description:
          "From branding to brochures, social media posts to product packaging – our Graphic Designing service helps your business stand out with visuals that connect and convert.",
        points: [
          "Logo & Branding",
          "Social Media Creatives",
          "Print & Digital Ads",
          "Packaging & Marketing Collaterals",
        ],
        outro: "Let’s design your success story today!",
      },
      {
        title: "Option 2 – Creative & Engaging",
        description:
          "At Greenefx, we craft visuals that grab attention, build trust, and grow your brand.",
        points: [
          "Logos that define you",
          "Posts that trend",
          "Brochures that impress",
          "Ads that sell",
        ],
        outro: "DM us and let’s create magic together!",
      },
      {
        title: "Option 3 – Short & Catchy",
        description:
          "Your idea + Our design = Unstoppable Brand 🚀. Get noticed with stunning graphic designs for your business.",
        points: ["Branding", "Social Media", "Print Ads", "Packaging"],
        outro: "Contact us today!",
      },
      {
        title: "Option 4 – Bold & Eye-Catching",
        description:
          "From social media creatives to premium print designs – we make sure your visuals stand out in every crowd.",
        points: ["Creative.", "Professional.", "Impactful."],
        outro: "Let’s give your brand the design it deserves.",
      },
      {
        title: "Option 5 – Minimal & Classy",
        description:
          "We don’t just design, we craft experiences that connect your brand with your audience.",
        points: [
          "Branding that builds trust",
          "Designs that drive sales",
          "Creatives that trend",
        ],
        outro: "Let’s shape your visual identity together.",
      },
      {
        title: "Option 6 – Relatable & Fun",
        description:
          "Tired of boring posts and outdated designs? We’ve got the cure – Stunning graphics that make your brand UNMISSABLE! 🚀",
        points: ["Logos", "Posters", "Social Media", "Ads", "Packaging"],
        outro:
          "One team, endless possibilities. Message us today to transform your brand’s look!",
      },
      {
        title: "Option 7 – Focus on Business Growth",
        description: "Our Graphic Designing service helps you:",
        list: [
          "Grab attention instantly",
          "Communicate your brand story",
          "Boost your business presence",
        ],
        outro:
          "Let your visuals do the talking. Start designing your success with us today!",
      },
      {
        title: "Option 8 – Short Reel Caption Style",
        description:
          "🔥 Designs that Sell. ✨ Graphics that Trend. 🚀 Branding that Lasts. That’s Greenefx. 💡",
        outro: "#DesignYourBrand #GreenefxGraphics",
      },
    ],
  },
];

// --- COMPONENTS ---
//Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navState, setNavState] = useState({ visible: true, top: true });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const visible = lastScrollY > currentScrollY || currentScrollY < 10;
      const top = currentScrollY < 50;

      setNavState({ visible, top });
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 duration-300 ${
    navState.visible ? "translate-y-0" : "-translate-y-full"
  } ${
    navState.top ? "bg-transparent text-black" : "bg-white text-black shadow-md"
  }`;
  const textClasses = navState.top ? "text-black" : "text-black";
  const buttonClasses = navState.top
    ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
    : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white";
  const mobileMenuButtonClasses = navState.top ? "text-white" : "text-black";

  return (
    <nav className={navClasses}>
      <div className=" mx-auto px-10 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-around items-center ">
          <div className="flex-shrink-0 ">
            <img
              src="src/assets/Gefx_logo.webp"
              alt="Greens Logo"
              className="h-[8.19vh] w-7.25vw transition-all duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/150x50/transparent/333333?text=Logo";
              }}
            />
          </div>
          <ul
            className={`hidden md:flex items-center text-[2.5vh] lg:space-x-10 font-semibold ${textClasses}`}
          >
            <li>
              <a href="#about" className="hover:opacity-75 transition-opacity">
                About
              </a>
            </li>
            <li>
              <Link to="/courses" className="hover:opacity-75 transition-opacity">
                Training
              </Link>
            </li>
            <li>
              <a
                href="#services"
                className="hover:opacity-75 transition-opacity"
              >
                Services
              </a>
            </li>
            <li>
              <a href="#career" className="hover:opacity-75 transition-opacity">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Blog
              </a>
            </li>
          </ul>
          <a
            href="#"
            className={`hidden md:block bg-transparent border-2 rounded-lg text-[2vh] px-6 lg:px-8 py-2 lg:py-3 font-semibold transition-all duration-300  ${buttonClasses}`}
          >
            Enquire Now
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${mobileMenuButtonClasses} focus:outline-none`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 rounded-md ${
              navState.top ? "bg-black/20 backdrop-blur-sm" : "bg-white"
            }`}
          >
            <ul
              className={`flex flex-col items-center space-y-4 font-semibold py-4 ${textClasses}`}
            >
              <li>
                <a href="#" className="hover:opacity-75">
                  About
                </a>
              </li>
              <li>
                <a href="Course.jsx" className="hover:opacity-75">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Services
                </a>
              </li>
              <li>
                <a href="#career" className="hover:opacity-75">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block rounded-lg px-6 py-2 font-semibold ${buttonClasses}`}
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section className="bg-[#f0faf5] relative overflow-hidden h-screen flex items-center justify-center text-center">
    <div className="absolute inset-0 hidden md:block">
      <div className="absolute text-green-300/70 text-3xl top-[15%] left-[20%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      </div>
      <div className="absolute text-teal-300/70 text-5xl top-[10%] left-[50%] -translate-x-1/2 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      </div>
      <div className="absolute text-cyan-300/70 text-4xl top-[20%] left-[80%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      </div>
      <div className="absolute text-violet-300/70 text-3xl top-[50%] left-[10%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </div>
      <div className="absolute text-sky-300/70 text-4xl bottom-[15%] left-[30%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>
      <div className="absolute text-amber-300/70 text-2xl bottom-[40%] left-[65%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
        </svg>
      </div>
      <div className="absolute text-green-300/70 text-3xl bottom-[10%] right-[10%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      </div>
      <div className="absolute text-amber-300/70 text-4xl top-[70%] left-[15%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      </div>
      <div className="absolute text-sky-300/70 text-3xl top-[65%] right-[15%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      </div>
      <div className="absolute text-violet-300/70 text-5xl bottom-[25%] right-[35%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 8v8" />
          <path d="m8.5 14 7-4" />
          <path d="m8.5 10 7 4" />
        </svg>
      </div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
          Unlock Your Potential in Tech & Design
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join GreenEFX Media for industry-focused, hands-on training in the
          latest software and technologies. Start your career journey with us
          today.
        </p>
        <button
          onClick={() => {
            document
              .querySelector("main")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-green-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg shadow-green-500/30 text-lg"
        >
          Explore Courses
        </button>
      </div>
    </div>
  </section>
);


const CourseCard = ({ course, onCourseSelect }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/80 transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className="relative">
      <img
        src={course.images[0]}
        alt={course.title}
        className="h-48 w-full object-cover"
      />
      <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 m-2 rounded-md text-sm font-semibold">
        Best Seller
      </div>
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-2 h-14">
        {course.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 h-24 overflow-hidden">
        {course.shortDescription}
      </p>
    </div>
    <div className="p-6 pt-0">
      <button
        onClick={() => onCourseSelect(course.id)}
        className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
      >
        Learn More
      </button>
    </div>
  </div>
);

const CourseListPage = ({ onCourseSelect }) => (
  <div>
    <HeroSection />
    <main className="py-16 sm:py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Our Courses</h2>
          <p className="text-gray-500 mt-2">
            Explore our range of expert-led training programs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onCourseSelect={onCourseSelect}
            />
          ))}
        </div>
      </div>
    </main>
  </div>
);

// --- HELPER COMPONENTS FOR DETAIL PAGE ---
const Section = ({ title, children }) => (
  <div className="mt-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
      {title}
    </h2>
    {children}
  </div>
);

const CheckListItem = ({ children }) => (
  <li className="flex items-start">
    <svg
      className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
    <span className="text-gray-600">{children}</span>
  </li>
);

const CourseDetailPage = ({ courseId, onBack }) => {
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-20">
        <p>Course not found.</p>
        <button
          onClick={onBack}
          className="mt-4 text-green-600 hover:underline"
        >
          &larr; Back to all courses
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white pt-[5%]">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center text-green-600 hover:text-green-800 font-medium transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back to all courses
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              {course.id === 3 ? "🎨" : "🎓"} {course.title}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              {course.longDescription}
            </p>

            {course.tools && (
              <div className="flex flex-wrap gap-2 mb-8">
                {course.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}

            {course.serviceOptions && (
              <Section title="✨ Creative Campaign Styles">
                <div className="grid md:grid-cols-2 gap-6">
                  {course.serviceOptions.map((option) => (
                    <div
                      key={option.title}
                      className="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-400 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg mb-2">
                          {option.title}
                        </h4>
                        <p className="text-gray-600 mb-3 text-sm">
                          {option.description}
                        </p>
                        {option.points && (
                          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-3">
                            {option.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}
                        {option.list && (
                          <ul className="space-y-1 text-sm mb-3">
                            {option.list.map((item) => (
                              <CheckListItem key={item}>{item}</CheckListItem>
                            ))}
                          </ul>
                        )}
                      </div>
                      <p className="font-semibold text-gray-700 text-sm mt-2">
                        {option.outro}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {course.whyChoose && (
              <Section title="🌟 Why Choose This Course?">
                <div className="space-y-4">
                  {course.whyChoose.map((item) => (
                    <div
                      key={item.title}
                      className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400"
                    >
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mt-1">{item.details}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {course.coreModules && (
              <Section title="🌟 Core Training Modules">
                <div className="grid md:grid-cols-2 gap-6">
                  {course.coreModules.map((item) => (
                    <div
                      key={item.title}
                      className="bg-gray-50 p-5 rounded-lg border-l-4 border-cyan-400"
                    >
                      <h4 className="font-semibold text-gray-800 text-lg mb-2">
                        {item.title}
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {course.curriculum && course.curriculum[0].month && (
              <Section title={`📅 Course Roadmap – ${course.courseDuration}`}>
                <div className="relative border-l-2 border-green-200 pl-6">
                  {course.curriculum.map((item, index) => (
                    <div
                      key={item.month}
                      className={`relative mb-10 ml-6 ${
                        index === course.curriculum.length - 1 ? "mb-0" : ""
                      }`}
                    >
                      <span className="absolute -left-[3.2rem] flex items-center justify-center w-12 h-12 bg-green-100 rounded-full ring-8 ring-white">
                        <span className="font-bold text-green-700">
                          M{item.month}
                        </span>
                      </span>
                      <div className="p-5 bg-white border border-gray-200/80 rounded-lg shadow-sm ml-4 transform hover:scale-[1.02] transition-transform duration-300">
                        <h4 className="font-semibold text-lg text-gray-800 mb-2">
                          {item.topic}
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                          {item.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {course.careerOpportunities && (
              <Section title="🚀 Career Opportunities">
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {course.careerOpportunities.map((item) => (
                    <CheckListItem key={item}>{item}</CheckListItem>
                  ))}
                </ul>
              </Section>
            )}

            {course.courseHighlights && (
              <Section title="✨ Course Highlights">
                <ul className="space-y-3">
                  {course.courseHighlights.map((item) => (
                    <CheckListItem key={item}>{item}</CheckListItem>
                  ))}
                </ul>
              </Section>
            )}

            {course.idealFor && (
              <Section title="💡 Ideal For">
                <ul className="space-y-3">
                  {course.idealFor.map((item) => (
                    <CheckListItem key={item}>{item}</CheckListItem>
                  ))}
                </ul>
              </Section>
            )}
          </div>
          {/* Right Column (Sidebar) */}
          <div>
            <div className="sticky top-28">
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {course.courseDuration
                      ? "Course Overview"
                      : "Service Overview"}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {course.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${course.title} preview ${index + 1}`}
                        className="rounded-md object-cover w-full h-24"
                      />
                    ))}
                    {course.images.length === 3 && (
                      <div className="rounded-md object-cover w-full h-24 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                        More+
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-3 text-sm">
                    {course.courseDuration && (
                      <div className="grid grid-cols-2 items-center">
                        <span className="font-semibold text-gray-700">
                          Duration
                        </span>
                        <span className="text-gray-800 font-medium text-right">
                          {course.courseDuration}
                        </span>
                      </div>
                    )}
                    {course.courseBreakdown && (
                      <div className="grid grid-cols-2 items-center">
                        <span className="font-semibold text-gray-700">
                          Pacing
                        </span>
                        <span className="text-gray-600 text-right">
                          {course.courseBreakdown}
                        </span>
                      </div>
                    )}
                    {course.courseModes && (
                      <div className="grid grid-cols-2 items-center">
                        <span className="font-semibold text-gray-700">
                          Mode
                        </span>
                        <span className="text-gray-600 text-right">
                          {course.courseModes.join(" / ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-gray-100 px-6 py-4 rounded-b-lg">
                  <button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg shadow-green-500/20">
                    {course.courseDuration ? "Enroll Now" : "Get a Quote"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#4CAF4F] text-white pt-16 pb-8">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">
            Reach us
          </h4>
          <div className="space-y-4 text-sm sm:text-base md:text-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-3" />
              <span>+91 9840289462</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              <span>greenefx.media@gmail.com</span>
            </div>
            <div className="flex items-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 mt-1" />
              <span>
                #508, 1st Floor R.T.O Road, Sathuvachari Vellore-632009
              </span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm sm:text-base md:text-lg">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">
            Legal
          </h4>
          <ul className="space-y-2 text-sm sm:text-base md:text-lg">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm sm:text-base md:text-lg">
            <li>
              <a href="#" className="hover:underline">
                Downloads
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Forum
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">
              Join Our YOUTUBE CHANNEL
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-l-md focus:outline-none text-sm sm:text-base md:text-lg"
              />
              <button className="bg-gray-600 px-4 rounded-r-md hover:bg-gray-500">
                Subscribe
              </button>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-4">
              * Will send you weekly updates for your better business
              improvement.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-xs sm:text-sm md:text-base">
        <p>Copyright © 2025 GreenEFX . All rights reserved.</p>
      </div>
    </div>
  </footer>
);


// --- MAIN APP ---

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleCourseSelect = (courseId) => {
    setSelectedCourseId(courseId);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedCourseId(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {selectedCourseId ? (
        <CourseDetailPage courseId={selectedCourseId} onBack={handleBack} />
      ) : (
        <CourseListPage onCourseSelect={handleCourseSelect} />
      )}
      <Footer />
    </div>
  );
}
