import React, { useState, useEffect } from "react";
import {
  Film,
  Megaphone,
  Palette,
  LineChart,
  Search,
  Users,
  CircleDollarSign,
  PenTool,
  Youtube,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram as faBrandInstagram,
  faFacebookF,
  faSpotify,
  faPlaystation,
  faDribbble,
  faApple,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

// Reusable Icon Wrapper
const IconWrapper = ({ icon: Icon, className }) => (
  <div
    className={`rounded-full p-3 inline-flex bg-green-100/80 text-green-600 ${className}`}
  >
    <Icon className="w-6 h-6" />
  </div>
);

// Service Card Component
const ServiceCard = ({ icon, title, children, link }) => (
  <a
    href={link}
    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 border border-gray-100/50 flex flex-col items-start h-full no-underline text-current focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
  >
    <IconWrapper icon={icon} />
    <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed">{children}</p>
    <div className="mt-auto pt-6 flex items-center text-green-600 font-semibold">
      <span>Learn More</span>
      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </div>
  </a>
);

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
  const textClasses = navState.top ? "text-white" : "text-black";
  const buttonClasses = navState.top
    ? "border-white-500 text-white-500 hover:border-green-500 hover:bg-green-500 hover:text-white"
    : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white";
  const mobileMenuButtonClasses = navState.top ? "text-white" : "text-black";

  return (
    <nav className={navClasses}>
      <div className="ml-[10%] mr-[10%] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-evenly items-center ">
          <div className="flex-shrink-0 ">
            <img
              src="src/assets/Gefx_logo.webp"
              alt="Greens Logo"
              className="h-[4.5vw] transition-all duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/150x50/transparent/333333?text=Logo";
              }}
            />
          </div>
          <ul
            className={`hidden md:flex items-center text-[1.4vw] lg:space-x-10 font-semibold ${textClasses}`}
          >
            <li>
              <Link
                to="/"
                className="hover:opacity-75 transition-opacity"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:opacity-75">
                Service
              </Link></li>
            <li>
              <Link
                to="/courses"
                className="hover:opacity-75 transition-opacity"
              >
                Training
              </Link>
              </li>
            <li>
              <a href="#career" className="hover:opacity-75 transition-opacity">
                Career
              </a>
            </li>
            <li>
              <Link to="/Portfolio" className="hover:opacity-75">
                Blog
              </Link>
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

// Main Service Component
export default function Service() {
  const services = [
    {
      icon: Film,
      title: "3D Animation & VFX",
      description:
        "We bring imagination to life with high-quality 3D Animation and Visual Effects. From product visualizations to cinematic sequences, our team delivers stunning visuals that educate, entertain, and engage. Whether it’s for films, advertisements, or educational content, our animations make ideas unforgettable.",
      link: "/portfolio",
    },
    {
      icon: Megaphone,
      title: "Creative Advertising & Promotions",
      description:
        "Your brand deserves to stand out. Our creative ad campaigns are designed to capture attention, connect with your audience, and drive real results. From TV commercials to social media promotions, we blend creativity and strategy to help your brand shine in the competitive marketplace.",
      link: "#/services/advertising",
    },
    {
      icon: Palette,
      title: "Graphic Design & Branding",
      description:
        "We craft visual identities that leave a lasting impression. From logos and brand guidelines to brochures and packaging, our designs reflect professionalism and creativity. We ensure your brand not only looks good but also communicates trust and value.",
      link: "#/services/branding",
    },
  ];

  const digitalMarketingSubServices = [
    {
      icon: Search,
      name: "SEO (Search Engine Optimization)",
      description: "Get found on Google and increase organic traffic.",
    },
    {
      icon: Users,
      name: "Social Media Marketing",
      description: "Build a strong online presence and engage your audience.",
    },
    {
      icon: CircleDollarSign,
      name: "Paid Advertising",
      description: "Targeted ad campaigns to maximize ROI.",
    },
    {
      icon: PenTool,
      name: "Content Marketing",
      description: "Engaging content that drives trust and conversions.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 md:py-48 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://placehold.co/1920x1080/0a0a0a/333333?text=0')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter mb-4">
            Creative Solutions, <br className="hidden md:inline" />{" "}
            <span className="text-green-400">Digital Impact.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
            We are a full-service creative agency dedicated to helping brands
            grow through stunning visuals and strategic marketing.
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="bg-green-500 text-white font-bold px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Our Work
            </button>
            <button className="bg-gray-700/50 backdrop-blur-sm text-white font-bold px-8 py-3 rounded-full hover:bg-gray-600/70 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <main className="py-20 md:py-28 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              From initial concept to final execution, we offer a complete suite
              of creative and digital services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                link={service.link}
              >
                {service.description}
              </ServiceCard>
            ))}
          </div>

          {/* Digital Marketing Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100/50 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <IconWrapper icon={LineChart} className="mx-auto lg:mx-0 mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                360° Digital Marketing
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Grow your business in the digital age with our comprehensive
                solutions. We don’t just market your brand—we help it connect,
                engage, and grow.
              </p>
              <button className="bg-gray-800 text-white font-bold px-6 py-3 rounded-full hover:bg-black transition-colors duration-300">
                Discuss Your Strategy
              </button>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
              {digitalMarketingSubServices.map((sub, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50/80 rounded-lg"
                >
                  <div className="text-green-600 mr-4 mt-1">
                    <sub.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{sub.name}</h4>
                    <p className="text-gray-500 text-sm">{sub.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

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