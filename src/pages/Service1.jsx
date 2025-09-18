import React, { useState, useEffect, useRef, useCallback } from "react";
import * as ReactRouterDOM from "react-router-dom";
import { Link } from "react-router-dom";
import { ThumbsUp, Share2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
  faPlus,
  faStar,
  faStarHalfAlt,
  faPaperPlane,
  faCogs,
  faPaintBrush,
  faBullhorn,
  faAtom,
  faChartSimple,
  faCode,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegStar } from "@fortawesome/free-regular-svg-icons";
import {
  faLine,
  faFacebookF,
  faSpotify,
  faPlaystation,
  faDribbble,
  faApple,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Data for the portfolio videos
const portfolioVideos = [
  {
    id: "veX64abmeuQ", // Example: Blender Open Movie
    title: "Tears of Steel - Sci-Fi Short Film",
    description:
      "A showcase of advanced VFX, compositing, and 3D animation to create a compelling sci-fi narrative. This project involved a team of artists and developers pushing the boundaries of what is possible with open-source technology. The final result is a visually stunning short film that has been acclaimed at various festivals.",
    category: "VFX & Animation",
    image: "/src/assets/mqdefault_6s.webp",
    views: "1.2M",
    date: "Mar 2, 2023",
    likes: "45K",
  },
  {
    id: "LQS_jZg5T5g", // Example: Product Visualization
    title: "Modern Furniture Visualization",
    description:
      "Photorealistic 3D rendering and animation for a high-end furniture product line. We focused on capturing the intricate details of the materials, from the wood grain to the fabric textures, to create a truly immersive and realistic product showcase that helped the client boost their online sales significantly.",
    category: "Product Visualization",
    image: "/src/assets/3d_2.webp",
    views: "500K",
    date: "Feb 15, 2023",
    likes: "22K",
  },
  {
    id: "iTWx633-s_I", // Example: Architectural Visualization
    title: "Architectural Fly-through",
    description:
      "An immersive architectural visualization bringing a modern residential design to life before construction. Our team worked closely with the architects to ensure every detail was accurately represented, providing a powerful marketing tool for the real estate developers.",
    category: "ArchViz",
    image: "/src/assets/mqdefault_6s.webp",
    views: "750K",
    date: "Jan 10, 2023",
    likes: "31K",
  },
  {
    id: "M-Sg_2w6u6g", // Example: Motion Graphics
    title: "Dynamic Motion Graphics Reel",
    description:
      "A compilation of our best motion graphics work, demonstrating creative typography and visual storytelling. This reel highlights our ability to create engaging content for advertisements, corporate presentations, and social media campaigns.",
    category: "Motion Graphics",
    image: "/src/assets/mqdefault_6s.webp",
    views: "300K",
    date: "Dec 5, 2022",
    likes: "15K",
  },
  {
    id: "e3-q5gQ_z1g", // Example: Blender Open Movie
    title: "Sintel - Animated Fantasy Short Film",
    description:
      "A classic example of character animation and fantasy world-building using open-source tools. This emotional story showcases our expertise in character design, rigging, and animation, bringing a powerful narrative to life through compelling visuals.",
    category: "VFX & Animation",
    image: "/src/assets/mqdefault_6s.webp",
    views: "2.5M",
    date: "Nov 20, 2022",
    likes: "80K",
  },
  {
    id: "_9I-c42o0xM", // Example: VFX Breakdown
    title: "VFX Breakdown Reel",
    description:
      "A behind-the-scenes look at the layers and complexity involved in our visual effects shots. This reel demonstrates the technical skill and artistic vision required to integrate seamless visual effects into live-action footage, from green screen keying to 3D object tracking.",
    category: "VFX Breakdown",
    image: "/src/assets/mqdefault_6s.webp",
    views: "900K",
    date: "Oct 1, 2022",
    likes: "38K",
  },
];

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
    navState.top ? "bg-transparent text-white" : "bg-white text-black shadow-md" 
  }`;
  const textClasses = navState.top ? "text-black" : "text-black";
  const buttonClasses = navState.top
    ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
    : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white";
  const mobileMenuButtonClasses = navState.top ? "text-white" : "text-black";

  return (
    <nav className={navClasses}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="conatiner flex justify-evenly items-center ">
          <div className="flex-shrink-0 ">
            <img
              src="/src/assets/Gefx_logo.webp"
              alt="Greens Logo"
              className="h-12 md:h-16 transition-all duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/150x50/transparent/333333?text=Logo";
              }}
            />
          </div>
          <ul
            className={`hidden md:flex items-center text-lg lg:space-x-10 font-semibold ${textClasses}`}
          >
            <li>
                <Link to="/" className="hover:opacity-75 transition-opacity">About</Link>
            </li>
            <li>
              <Link
                to="/Courses"
                className="hover:opacity-75 transition-opacity"
              >
                Training
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:opacity-75">
                Service
              </Link>
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
            className={`hidden md:block bg-transparent border-2 rounded-lg text-base px-6 lg:px-8 py-2 lg:py-3 font-semibold transition-all duration-300  ${buttonClasses}`}
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
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
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

// Reusable component for a single portfolio video card in the grid
const PortfolioCard = ({ video }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-gray-100/50 h-full flex flex-col">
    <div className="relative">
      <img
        src={video.image}
        alt={video.title}
        className="w-full aspect-video object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/cccccc/333333?text=Video";
        }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
        {video.category}
      </p>
      <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
        {video.title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed flex-grow">
        {video.description}
      </p>
    </div>
  </div>
);

// View for displaying the grid of all portfolio items
const PortfolioGridView = () => (
  <div className="bg-gray-50 font-sans">
    <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Work
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A collection of our finest work in 3D animation, visual effects, and
            digital artistry. See how we bring ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {portfolioVideos.map((video) => (
            <ReactRouterDOM.Link
              to={`/portfolio/${video.id}`}
              key={video.id}
              className="no-underline h-full"
            >
              <PortfolioCard video={video} />
            </ReactRouterDOM.Link>
          ))}
        </div>
      </div>
    </main>
  </div>
);

// Reusable component for a single suggested video in the sidebar
const SuggestedVideoCard = ({ video }) => (
    <Link to={`/portfolio/${video.id}`} className="flex items-center gap-4 group">
        <div className="w-2/5 flex-shrink-0">
            <img 
                src={video.image} 
                alt={video.title} 
                className="w-full aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/160x90/cccccc/333333?text=Video'; }}
            />
        </div>
        <div className="w-3/5">
            <h4 className="text-sm font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">{video.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{video.category}</p>
        </div>
    </Link>
);

// View for the detailed video page with a YouTube-like layout
const VideoDetailView = ({ video, allVideos }) => {
    const suggestedVideos = allVideos.filter(v => v.id !== video.id);

    return (
        <div className="bg-gray-100 font-sans min-h-screen">
            <main className="pt-28 pb-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content: Video Player and Details */}
                        <div className="w-full lg:w-2/3">
                            <div className="aspect-w-16 aspect-h-9 mb-4">
                                <iframe
                                    className="w-full h-full rounded-xl shadow-2xl"
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">{video.title}</h1>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 border-b border-gray-200">
                                <div className="flex items-center mb-3 sm:mb-0">
                                    <img src="https://placehold.co/48x48/16a34a/ffffff?text=G" alt="Greenefx Media Logo" className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold text-gray-800 text-lg">Greenefx Media</p>
                                        <p className="text-gray-500 text-sm">250k subscribers</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button className="flex items-center bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-gray-800 font-semibold px-4 py-2 rounded-full">
                                        <ThumbsUp className="w-5 h-5 mr-2" />
                                        <span>{video.likes}</span>
                                    </button>
                                    <button className="flex items-center bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-gray-800 font-semibold px-4 py-2 rounded-full">
                                        <Share2 className="w-5 h-5 mr-2" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-gray-200/70 rounded-xl p-4 mt-4">
                                <p className="font-bold text-gray-800">{video.views} views  •  {video.date}</p>
                                <p className="text-gray-700 mt-2 leading-relaxed">{video.description}</p>
                            </div>
                        </div>

                        {/* Sidebar: Suggested Videos */}
                        <div className="w-full lg:w-1/3">
                             <div className="flex justify-between items-center mb-4">
                               <h2 className="text-xl font-bold text-gray-900">Up Next</h2>
                               <Link to="/portfolio" className="text-sm font-semibold text-green-600 hover:underline">View All</Link>
                            </div>
                            <div className="space-y-4">
                                {suggestedVideos.map(v => <SuggestedVideoCard video={v} key={v.id} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};


// Main PortfolioPage component that decides which view to render
const PortfolioPage = () => {
  const { id } = ReactRouterDOM.useParams();

  if (id) {
    const video = portfolioVideos.find((v) => v.id === id);
    if (!video) {
      return (
        <div className="bg-gray-50 font-sans min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Video Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the video you're looking for.
            </p>
            <ReactRouterDOM.Link
              to="/portfolio"
              className="bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              Back to Our Work
            </ReactRouterDOM.Link>
          </div>
        </div>
      );
    }
    return <VideoDetailView video={video} allVideos={portfolioVideos} />;
  }

  return <PortfolioGridView />;
};

// Footer Component
const Footer = () => (
  <footer className="bg-[#4CAF4F] text-white pt-16 pb-8">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">Reach us</h4>
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
          <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">Company</h4>
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
          <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">Legal</h4>
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
          <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">Quick Links</h4>
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
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4">Join Our YOUTUBE CHANNEL</h4>
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

export default function Service1() {
  return (
    <>
      <Navbar />
      <PortfolioPage />
      <Footer />
    </>
  );
}