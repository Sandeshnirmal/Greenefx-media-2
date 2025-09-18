import React, { useState, useEffect, useRef, useCallback } from "react";
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
import { Link } from "react-router-dom";


// Helper Components
const CheckmarkListItem = ({ children }) => (
  <li className="flex items-center">
    <svg
      className="w-6 h-6 mr-3 text-white"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
    {children}
  </li>
);

const SectionTitle = ({ children }) => (
  <div className="text-center mb-3">
    <h2 className="text-4xl md:text-5xl font-bold text-[#4CAF4F] font-poppins tracking-tight">
      {children}
    </h2>
  </div>
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
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="ml-[5%] mr-[7%] flex justify-evenly items-center ">
          <div className="flex-shrink-0 ">
            <img
              src="src/assets/Gefx_logo.webp"
              alt="Greens Logo"
              className="h-[5vw]  transition-all duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/150x50/transparent/333333?text=Logo";
              }}
            />
          </div>
          <ul
            className={`hidden md:flex items-center text-[1.3vw] lg:space-x-10 font-semibold ${textClasses}`}
          >
            <li>
              <a href="#about" className="hover:opacity-75 transition-opacity">
                About
              </a>
            </li>
           
            <li>
              <Link to="/services" className="hover:opacity-75">
                Service
              </Link>
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

// Hero Carousel Component
const HeroCarousel = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "SOCIAL MEDIA MARKETING",
      color: "text-[#e58a43]",
      features: [
        "High-quality visuals that captivate audiences."
      ],
      img: "src/assets/image.webp",
    },
    {
      title: "GRAPHICS DESIGN",
      color: "text-[#42B4EE]",
      features: [
        "Creative Design Theory",
        "Adobe Creative Suite",
        "Portfolio Development",
      ],
      img: "src/assets/image.webp",
    },
    {
      title: "3D ANIMATION & VFX",
      color: "text-[#42B4EE]",
      features: [
        "Modeling & Texturing",
        "Visual Effects Compositing",
        "Industry Standard Software",
      ],
      img: "src/assets/image.webp",
    },
    {
      title: "App Design & Devlopment",
      color: "text-[#e58a43]",
      features: [
        "Expert Instructor",
        "Cutting-Edge facilities",
        "Comprehensive Course Selection",
        "Expert Instructor",
        "Cutting-Edge facilities",
        "Comprehensive Course Selection",
      ],
      img: "src/assets/image.webp",
    },
    {
      title: "Web Design & Devlopment",
      color: "text-[#e58a43]",
      features: [
        "Expert Instructor",
        "Cutting-Edge facilities",
        "Comprehensive Course Selection",
        "Expert Instructor",
        "Cutting-Edge facilities",
        "Comprehensive Course Selection",
      ],
      img: "src/assets/image.webp",
    },
    {
      title: "Content Creation",
      color: "text-[#e58a43]",
      features: [
        "Expert Instructor",
        "Cutting-Edge facilities",
        "Comprehensive Course Selection",
        "Expert Instructor",
        "Cutting-Edge facilities",
        "Comprehensive Course Selection",
      ],
      img: "src/assets/image.webp",
    },
  ];

  const scroll = useCallback(
    (direction) => {
      if (carouselRef.current) {
        const scrollAmount = carouselRef.current.offsetWidth;
        let newSlide = currentSlide + direction;

        if (newSlide < 0) {
          newSlide = heroSlides.length - 1;
        } else if (newSlide >= heroSlides.length) {
          newSlide = 0;
        }

        const newScrollPosition = newSlide * scrollAmount;

        carouselRef.current.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });
        setCurrentSlide(newSlide);
      }
    },
    [currentSlide, heroSlides.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      scroll(1);
    }, 7000);

    return () => clearInterval(interval);
  }, [scroll]);

  return (
    <div className="relative flex-grow flex flex-col justify-center w-full">
      <div
        ref={carouselRef}
        className="relative flex overflow-x-hidden snap-x snap-mandatory scroll-smooth no-scrollbar h-full"
      >
        {heroSlides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full snap-center h-full">
            <div className="ml-0 md:ml-[10vw] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center h-full">
              <div className="w-full md:w-1/2 xl:w-2/3 text-center md:text-left z-10">
                <h1
                  className={`font-poppins font-[1000] text-5xl md:text-7xl lg:text-8xl ${slide.color} tracking-wider mb-6`}
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                >
                  {slide.title}
                </h1>
                <ul className="font-poppins space-y-3 mb-8 font-[900] inline-block text-left text-lg md:text-xl lg:text-2xl text-white">
                  {slide.features.map((feature, i) => (
                    <CheckmarkListItem key={i}>{feature}</CheckmarkListItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Carousel Navigation Buttons */}
      <button
        onClick={() => scroll(-1)}
        className="absolute top-1/2 left-2 md:left-4 lg:left-8 transform -translate-y-1/2 bg-white text-green-700 p-2 md:p-3 lg:p-4 rounded-full shadow-xl z-30 border-2 border-green-700 hover:scale-110 transition-all duration-200"
        style={{ boxShadow: "0 4px 24px rgba(76,175,79,0.25)" }}
        aria-label="Previous Slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute top-1/2 right-2 md:right-4 lg:right-8 transform -translate-y-1/2 bg-white text-green-700 p-2 md:p-3 lg:p-4 rounded-full shadow-xl z-30 border-2 border-green-700 hover:scale-110 transition-all duration-200"
        style={{ boxShadow: "0 4px 24px rgba(76,175,79,0.25)" }}
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

// Hero Component (Wrapper for Carousel)
const Hero = () => (
  <header className="bg-gradient-to-r from-[#8bce4a] to-[#5a9c3b] text-white relative overflow-hidden h-screen flex flex-col">
    {/* Background Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="src/assets/hero1.webm"
      autoPlay
      loop
      muted
      playsInline
    />
    {/* Overlay for better text contrast */}
    <div className="absolute inset-0 bg-black/20 z-0"></div>
    <div className="flex-grow flex items-center pt-20 md:pt-24 lg:pt-32 relative z-10">
      <HeroCarousel />
    </div>
    <div className="absolute top-1/4 left-4 md:left-10 lg:left-32 w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl opacity-50 z-10">
      <FontAwesomeIcon icon={faPlus} />
    </div>
    <div className="absolute bottom-1/4 right-4 md:right-10 lg:right-32 w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl opacity-50 z-10">
      <FontAwesomeIcon icon={faPlus} />
    </div>
  </header>
);

// About Us Component
const AboutUs = () => (
  <section id="about" className="h-[80vh] flex items-center py-20 lg:py-32">
    <div className="container mx-auto px-6 lg:px-8">
      <SectionTitle>ABOUT US</SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-5/12">
          <img
            src="src/assets/about.webp"
            alt="Web & Graphics designing course illustration"
            className="w-full rounded-lg "
          />
        </div>
        <div className="w-full md:w-7/12 text-lg md:text-xl leading-relaxed">
          <p className="mb-6">
            At Greenefx Media, creativity meets technology to craft powerful
            visual stories and impactful digital experiences. We are a
            full-service media and design company specializing in 3D Animation,
            VFX, Creative Advertising, Digital Marketing, Web Design &
            Development, and Branding Solutions.
          </p>
          <p>
               Our mission is simple – to transform ideas into powerful visuals and
            digital strategies that inspire, educate, and engage audiences. With
            a passionate team of designers, animators, marketers, and
            developers, we bring imagination to life while helping businesses
            grow in the digital space. <br />
            <br />
            At Greenefx Media, we don’t just create
            designs or strategies – we create experiences that connect and
            deliver impact. <br />
            Driven by passion, powered by innovation, and
            trusted by our clients – we are your partner in shaping ideas into
            reality.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Services Component
const Services = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.querySelector("div").clientWidth;
      carouselRef.current.scrollBy({
        left: scrollAmount * direction,
        behavior: "smooth",
      });
    }
  };

  const serviceCards = [
    {
      title: "3D ANIMATION & VFX",
      icon: faCogs,
      bgColor: "bg-green-500/10",
      textColor: "text-green-500",
      description:
        "We bring imagination to life with high-quality 3D Animation and Visual Effects. From product visualizations to cinematic sequences, our team delivers stunning visuals that educate, entertain, and engage. Whether it’s for films, advertisements, or educational content, our animations make ideas unforgettable.",
    },
    {
      title: "GRAPHICS DESIGN SERVICES",
      icon: faPaintBrush,
      bgColor: "bg-green-500/10",
      textColor: "text-green-500",
      description:
        "We craft visual identities that leave a lasting impression. From logos and brand guidelines to brochures and packaging, our designs reflect professionalism and creativity. We ensure your brand not only looks good but also communicates trust and value.",
    },
    {
      title: "Creative Advertising & Promotions",
      icon: faBullhorn,
      bgColor: "bg-green-500/10",
      textColor: "text-green-500",
      description:
        "Your brand deserves to stand out. Our creative ad campaigns are designed to capture attention, connect with your audience, and drive real results. From TV commercials to social media promotions, we blend creativity and strategy to help your brand shine in the competitive marketplace.",
    },
    {
      title: "Digital Marketing",
      icon: faChartSimple,
      bgColor: "bg-green-500/10",
      textColor: "text-green-500",
      description:
        "Grow your business in the digital age with our 360° digital marketing solutions. We specialize in: SEO (Search Engine Optimization) – Get found on Google and increase organic traffic. Social Media Marketing – Build strong online presence and engage your audience. Paid Advertising – Targeted ad campaigns to maximize ROI. Content Marketing – Engaging content that drives trust and conversions. We don’t just market your brand—we help it connect, engage, and grow.",
    },
  ];

  return (
    <section
      id="services"
      className="h-[80vh] flex flex-col justify-center py-20 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-100"
    >
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <SectionTitle>Our Services</SectionTitle>
      <div className="container mt-10 mx-auto px-6 lg:px-8 relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4"
        >
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 snap-center px-4"
            >
              <div className="group bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col text-center p-8 transform hover:-translate-y-2 min-h-[450px] md:min-h-[500px]">
                <div
                  className={`mx-auto mb-6 ${card.bgColor} w-16 h-16 p-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                >
                  <FontAwesomeIcon
                    icon={card.icon}
                    className={`text-4xl ${card.textColor}`}
                  />
                </div>
                <h3
                  className={`font-poppins font-bold text-xl md:text-2xl text-gray-800 mb-6 `}
                >
                  {card.title}
                </h3>
                <p className="font-poppins text-base text-gray-600 leading-relaxed flex-grow">
                  {card.description}
                </p>
                <div className="mt-6">
                  <a
                    href="/services"
                    className="text-green-500 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll(-1)}
          className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 p-3 text-lg rounded-full shadow-md z-10 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 p-3 text-lg rounded-full shadow-md z-10 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

// Our Clients Component
const OurClients = () => {
  const carouselRef = useRef(null);

  const scroll = useCallback((direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.querySelector("div").clientWidth;
      carouselRef.current.scrollBy({
        left: scrollAmount * direction,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const interval = setInterval(() => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 4) {
        carousel.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scroll(1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scroll]);

  const clientLogos = [
    "1_Dr_Sudhagar_dental_Clinic.png",
    "2_Royal.png",
    "276280030_107025831956204_6854748416881890137_n.jpg",
    "3_SSS.png",
    "481701745_9795254133826553_8839703244598464617_n.jpg",
    "490473335_1195283738963434_6468746702482428843_n.jpg",
    "66bf8f2631094dd935e82f22.jpg",
    "9_apple.png",
    "AraniBioTech_logo_png.png",
    "Big Day Photography - Logo.jpg",
    "IDA_Ragistar_Logo_Final_1.png",
    "Lakshmi Brand logo.png",
    "logo_png.png",
    "Logo_v03.png",
    "mother_land_propreties.png",
    "ragavndra.png",
    "Santham cheimals.png",
    "saranya-studio.png",
    "Screenshot 2025-08-04 130245.png",
    "spring1.png",
    "srinivasa.jfif",
    "Sripuram Red Logo.png",
    "St Paul Logo.jpg",
    "Suntech logo updated .png",
    "untitled_1_2190.exr",
    "Untitled-1.png",
    "vellore_home_care.png",
    "vsy.png",
    "WhatsApp Image 2025-02-01 at 09.37.26.jpeg",
  ];
  const duplicatedClients = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4CAF4F]">
            OUR CLIENTS
          </h2>
        </div>
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4"
          >
            {duplicatedClients.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-40 flex items-center justify-center p-4 lg:p-6 border-2 border-gray-200 rounded-xl bg-white shadow-md mx-4"
              >
                <img
                  src={`/src/assets/BNI_Client_logos/${logo}`}
                  alt={`Client Logo ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(-1)}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 p-3 text-lg rounded-full shadow-md z-10 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 p-3 text-lg rounded-full shadow-md z-10 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

// Client Testimonials Component
const ClientTestimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const testimonials = [
    {
      name: "JOHN",
      role: "Team",
      text: "I HAD GREAT OPPRUNITES AND I IMPROVED MY SKILLS",
      rating: 4,
      img: "https://placehold.co/80x80/cccccc/333333?text=JD",
      isFeatured: true,
    },
    {
      name: "CHRISHI",
      role: "Animator",
      text: "I HAD GREAT OPPRUNITES AND I IMPROVED MY SKILLS",
      rating: 5,
      img: "https://placehold.co/80x80/cccccc/333333?text=CR",
    },
    {
      name: "Ryan",
      role: "Royal cars",
      text: "I HAD GREAT OPPRUNITES AND I IMPROVED MY SKILLS",
      rating: 4.5,
      img: "https://placehold.co/80x80/cccccc/333333?text=RY",
    },
    {
      name: "Alex",
      role: "Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5,
      img: "https://placehold.co/80x80/cccccc/333333?text=AS",
    },
    {
      name: "Emily",
      role: "Designer",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      rating: 4.5,
      img: "https://placehold.co/80x80/cccccc/333333?text=EM",
    },
    {
      name: "Michael",
      role: "Marketer",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      rating: 4,
      img: "https://placehold.co/80x80/cccccc/333333?text=MB",
    },
  ];

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const updateItemsPerPage = useCallback(() => {
    if (window.innerWidth < 768) setItemsPerPage(1);
    else if (window.innerWidth < 1024) setItemsPerPage(2);
    else setItemsPerPage(3);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  const advancePage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const interval = setInterval(advancePage, 7000);
    return () => clearInterval(interval);
  }, [advancePage]);

  useEffect(() => {
    if (testimonialsRef.current) {
      const container = testimonialsRef.current;
      const scrollAmount = (container.scrollWidth / testimonials.length) * (currentPage * itemsPerPage);
      container.style.transform = `translateX(-${scrollAmount}px)`;
    }
  }, [currentPage, itemsPerPage, testimonials.length]);

  return (
    <section className="h-[65vh] flex flex-col justify-center py-20 lg:py-32 bg-[#E6FFE7]">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <SectionTitle>Client Testimonial</SectionTitle>
        <div className="relative overflow-hidden mt-7">
          <div
            ref={testimonialsRef}
            className="flex transition-transform duration-500 ease-in-out"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
              >
                <div
                  className={`bg-white rounded-lg p-8 shadow-lg h-full ${ 
                    t.isFeatured ? "border-2 border-[#4CAF4F]" : ""
                  }`}
                >
                  <div className="text-gray-500 text-5xl mb-4">“</div>
                  <p className="font-poppins italic text-gray-800 mb-4 text-base md:text-lg">
                    {t.text}
                  </p>
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(5)].map((_, starIndex) =>
                      starIndex < Math.floor(t.rating) ? (
                        <FontAwesomeIcon icon={faStar} key={starIndex} />
                      ) : t.rating % 1 !== 0 &&
                        starIndex < Math.ceil(t.rating) ? (
                        <FontAwesomeIcon icon={faStarHalfAlt} key={starIndex} />
                      ) : (
                        <FontAwesomeIcon icon={faRegStar} key={starIndex} />
                      )
                    )}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={t.img}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-4 border"
                      alt={t.name}
                    />
                    <div>
                      <h4 className="font-poppins font-bold text-base sm:text-lg md:text-xl">
                        {t.name}
                      </h4>
                      <p className="font-poppins text-xs sm:text-sm md:text-base text-gray-600">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// Training Component
const Training = () => {
  const trainingCards = [
    {
      title: "Diploma in Multimedia Design & Ai Creativity",
      text: "Explore the future of design in our offline classes. Combine traditional multimedia skills with cutting-edge AI tools for stunning creative projects.",
      icon: faAtom,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-100/50",
    },
    {
      title: "Diploma in Graphic Design & Print Media",
      text: "Master Photoshop, Illustrator, InDesign, & CorelDRAW in our comprehensive 6-month offline training program focused on the print and photo media industry.",
      icon: faChartSimple,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-100/50",
    },
    {
      title: "Diploma in Computer Application",
      text: "A comprehensive 6-month course covering computer fundamentals, MS Office, web design, and the latest AI tools to build a strong foundation in IT.",
      icon: faCode,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-100/50",
    },
  ];

  return (
    <section className=" py-12 lg:py-15">
      <SectionTitle>Training</SectionTitle>
      <div className="container mt-8 mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#d9ffd9] rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="p-8 text-center">
                <div
                  className={`mb-6 inline-block p-4 md:p-6 ${card.bgColor} rounded-full`}
                >
                  <FontAwesomeIcon
                    icon={card.icon}
                    className={`text-4xl md:text-5xl lg:text-6xl ${card.iconColor}`}
                  />
                </div>
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {card.text}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-block text-green-500 font-semibold hover:text-green-600 transition-colors duration-300"
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Student Testimonials Component
const StudentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const studentTestimonials = [
    {
      name: "STUDENT NAME",
      role: "3d&VFX",
      text: "I completed their 3D Animation & VFX program; the curriculum was comprehensive, instructors were approachable, and the facilities were well equipped.",
      img: "https://placehold.co/200x250/cccccc/333333?text=Student",
    },
    {
      name: "DAVID LEE",
      role: "Graphics Design",
      text: "The GreenEFX team is committed to your success — you truly feel they care about your career and development. Highly recommended!",
      img: "https://placehold.co/200x250/e0e0e0/555555?text=Student",
    },
    {
      name: "SARAH CHEN",
      role: "Web Development",
      text: "An amazing learning environment. The hands-on projects were invaluable and helped me build a strong portfolio to start my career.",
      img: "https://placehold.co/200x250/dddddd/444444?text=Student",
    },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="h-[75vh] flex flex-col justify-center py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-200 overflow-hidden">
      <div className="container mx-auto relative px-6 lg:px-8">
        <SectionTitle>What Our Students Say</SectionTitle>
        <div className="relative mt-7 w-full max-w-4xl mx-auto h-auto">
          <div className="relative h-[600px] md:h-[500px]">
            {studentTestimonials.map((s, i) => (
              <div
                key={i}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${ 
                  currentIndex === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`flex flex-col md:flex-row items-center justify-center h-full transform transition-transform duration-1000 ease-in-out ${ 
                    currentIndex === i
                      ? "scale-100 translate-y-0"
                      : "scale-95 translate-y-10"
                  }`}
                >
                  <div className="w-full md:w-2/5 bg-white p-8 lg:p-10 rounded-2xl shadow-2xl relative flex flex-col justify-center z-10 order-2 md:order-1 h-full">
                    <div className="absolute -top-6 -left-6 text-8xl md:text-9xl text-green-100/50 z-0">
                      “
                    </div>
                    <p className="relative z-10 text-gray-700 leading-relaxed text-base md:text-lg italic">
                      {s.text}
                    </p>
                    <div className="mt-auto pt-6 relative z-10">
                      <h4 className="font-bold text-lg md:text-xl text-green-600">
                        {s.name}
                      </h4>
                      <p className="text-sm md:text-base text-gray-500">
                        {s.role}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 h-64 md:h-full rounded-2xl shadow-2xl -ml-0 md:-ml-12 order-1 md:order-2 mb-6 md:mb-0">
                    <img
                      src={s.img}
                      alt="Student photo"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {studentTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full ${ 
                  currentIndex === i ? "bg-green-500" : "bg-gray-300"
                } transition-colors duration-300`}
              ></button>
            ))}
          </div>
        </div>
        <button
          onClick={() =>
            setCurrentIndex(
              (prev) =>
                (prev - 1 + studentTestimonials.length) %
                studentTestimonials.length
            )
          }
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg z-20 flex items-center justify-center border border-gray-200 transition-all duration-300 hover:scale-105"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % studentTestimonials.length)
          }
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg z-20 flex items-center justify-center border border-gray-200 transition-all duration-300 hover:scale-105"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

// Careers Component
const Careers = () => (
  <section
    id="career"
    className="min-h-screen flex flex-col justify-center py-20 lg:py-32"
  >
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#4CAF4F]">
          Careers
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">
          We believe that our greatest asset is our people. We are passionate
          about creating a dynamic and inclusive work environment where
          employees can thrive and achieve their full potential.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {[
          {
            title: "Internship opportunities",
            img: "https://placehold.co/600x300/e2e8f0/333333?text=Internship+Team",
          },
          {
            title: "Job opportunities",
            img: "https://placehold.co/600x300/d1d5db/333333?text=Job+Opportunity",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="w-full md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-2xl md:text-3xl font-bold">
                {card.title}
              </h3>
            </div>
            <div className="p-6 lg:p-8">
              <ul className="space-y-3 mb-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>Accredited
                  certification courses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>Hands-on
                  practical training
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Industry-recognized qualifications
                </li>
              </ul>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                Internship Program for BSc Visual Communication at GreenEFX
                Media, we understand the importance of hands-on experience.
              </p>
              <a
                href="#"
                className="w-full block text-center bg-[#4CAF4F] text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 text-base lg:text-lg"
              >
                Find Training &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contact Component
const Contact = () => (
  <section className="h-[90vh] flex flex-col justify-center py-20 lg:py-32">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#4CAF4F]">
          Contact
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
          Reach out to us today and take the first step toward your creative
          journey with GREENEFX MEDIA.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/3 bg-[#4CAF4F] text-white p-8 lg:p-12 relative overflow-hidden">
          {/* decorative circles */}
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              Contact Information
            </h3>
            <p className="mb-10 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl">
              Say something to start a live chat!
            </p>
            <div className="space-y-8 font-medium text-sm sm:text-base md:text-lg lg:text-xl">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-xl mr-4" />
                <span>+91 9840289462</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-4" />
                <span>greenefx.media@gmail.com</span>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-xl mr-4 mt-1"
                />
                <span>
                  #508, 1st Floor
                  <br />
                  R.T.O Road, Sathuvachari
                  <br />
                  Vellore-632009
                </span>
              </div>
            </div>
            <div className="flex space-x-4 mt-12">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-8 lg:p-12">
          <form action="#">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm lg:text-base font-semibold text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500 py-2 text-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm lg:text-base font-semibold text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500 py-2 text-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm lg:text-base font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500 py-2 text-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm lg:text-base font-semibold text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500 py-2 text-lg"
                />
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm lg:text-base font-semibold text-gray-700 mb-3">
                Select Subject?
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "Business enquiry",
                  "Course enquiry",
                  "General enquiry",
                ].map((subject, i) => (
                  <label key={i} className="flex items-center">
                    <input
                      type="radio"
                      name="subject"
                      value={subject}
                      className="form-radio text-green-500 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-700">{subject}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm lg:text-base font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="2"
                placeholder="Write your message.."
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500 py-2 text-lg"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-base lg:text-lg"
              >
                Send Message{" "}
                <FontAwesomeIcon icon={faPaperPlane} className="ml-3" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

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

// Main App Component
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <AboutUs />
        <Services />
        <OurClients />
        <ClientTestimonials />
        <Training />
        <StudentTestimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}