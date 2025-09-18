import React, { useState, useEffect } from "react";

// FAKE ICONS FOR DEMONSTRATION - In a real app, you would import these from a library like react-icons
const FaChevronLeft = () => <i className="fas fa-chevron-left"></i>;
const FaChevronRight = () => <i className="fas fa-chevron-right"></i>;
const FaArrowRight = () => <i className="fas fa-arrow-right-long"></i>;
const FaSearch = () => <i className="fas fa-search"></i>;

// Navbar Component (Adapted for a single-page context)
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Since this is only the blog page, the navbar is always white.
  const navClasses = `sticky top-0 z-50 bg-white shadow-md`;
  const textClasses = `text-black`;
  const buttonClasses = `border-green-500 text-green-500 hover:bg-green-500 hover:text-white`;
  const logoSrc = "/assets/greens-logo-dark.png";

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="cursor-pointer">
              <img
                src={logoSrc}
                alt="Greens Logo"
                className="h-10 sm:h-12 transition-all duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/150x50/transparent/333333?text=Logo";
                }}
              />
            </a>
          </div>
          <ul
            className={`hidden md:flex items-center space-x-8 font-semibold ${textClasses}`}
          >
            <li>
              <a href="/" className="hover:opacity-75 transition-opacity">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Training
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Career
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-green-500 font-bold transition-opacity cursor-pointer"
              >
                Blog
              </a>
            </li>
          </ul>
          <a
            href="#"
            className={`hidden md:block bg-transparent border-2 rounded-lg px-6 py-2 font-semibold transition-all duration-300 ${buttonClasses}`}
          >
            Enquire Now
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
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
          <div className="md:hidden mt-4 rounded-md bg-white">
            <ul
              className={`flex flex-col items-center space-y-4 font-semibold py-4 ${textClasses}`}
            >
              <li>
                <a href="/" className="hover:opacity-75">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-green-500 font-bold">
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

// --- BLOG PAGE COMPONENTS & DATA ---

const blogPosts = [
  {
    featured: true,
    title:
      "The Magic Behind the Movies: An Introduction to Visual Effects (VFX)",
    category: "VFX",
    date: "September 18, 2025",
    author: "GreenEFX Media",
    image: "/assets/blog-vfx.png",
    excerpt:
      "Ever wondered how filmmakers create breathtaking fantasy worlds and explosive action sequences? Dive into the world of VFX and discover the technology and artistry that brings imagination to life on the big screen, right here in Vellore.",
  },
  {
    title: "From Sketch to Screen: The Process of 3D Animation",
    category: "3D Animation",
    date: "September 15, 2025",
    author: "Admin",
    image: "/assets/blog-3d-animation.png",
    excerpt:
      "Explore the fascinating journey of a 3D character, from initial concept art to a fully rendered animation. We break down the steps like modeling, rigging, and texturing.",
  },
  {
    title: "5 Basic Principles of Graphic Design for Beginners",
    category: "Graphic Design",
    date: "September 10, 2025",
    author: "Admin",
    image: "/assets/blog-graphic-design.png",
    excerpt:
      "Good design is about effective communication. Learn the five fundamental principles—hierarchy, contrast, repetition, proximity, and white space—to elevate your design skills.",
  },
  {
    title: "2D vs. 3D Animation: Which is Right for Your Project?",
    category: "Animation",
    date: "September 5, 2025",
    author: "Admin",
    image: "/assets/blog-2d-vs-3d.png",
    excerpt:
      "Both 2D and 3D animation have unique strengths. This guide will help you understand the key differences in workflow, cost, and final aesthetic to make the right choice.",
  },
  {
    title:
      "Unlocking Your Potential: Why Basic Computer Skills Matter More Than Ever",
    category: "Computer Basics",
    date: "September 1, 2025",
    author: "Admin",
    image: "/assets/blog-computer-basics.png",
    excerpt:
      "In today's digital world, foundational computer skills are non-negotiable. Learn why mastering the basics is the first step towards a successful career in tech and design.",
  },
];

const FeaturedPost = ({ post, onClick }) => (
  <div onClick={() => onClick(post)} className="mb-16 group cursor-pointer">
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden lg:flex transition-all duration-300 group-hover:shadow-green-200 group-hover:-translate-y-1">
      <div className="lg:w-3/5">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 lg:h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/800x600/e2e8f0/333333?text=Featured+Image";
          }}
        />
      </div>
      <div className="p-8 lg:w-2/5 flex flex-col justify-center">
        <p className="text-sm text-green-500 font-semibold">{post.category}</p>
        <h2 className="text-3xl font-bold text-gray-900 my-3 group-hover:text-green-600 transition-colors duration-300">
          {post.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
        <div className="text-green-600 font-semibold">
          Read More{" "}
          <FaArrowRight className="inline-block ml-1 group-hover:ml-2 transition-all duration-300" />
        </div>
        <div className="text-sm text-gray-500 mt-6">
          <span>By {post.author}</span> &middot; <span>{post.date}</span>
        </div>
      </div>
    </div>
  </div>
);

const PostCard = ({ post, onClick }) => (
  <div onClick={() => onClick(post)} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:shadow-green-200 hover:-translate-y-1">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/400x300/e2e8f0/333333?text=Article+Image";
      }}
    />
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm text-green-500 font-semibold">{post.category}</p>
      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-green-600 transition-colors duration-300">
        {post.title}
      </h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{post.excerpt}</p>
      <div className="mt-4">
        <div className="text-green-600 font-semibold">
          Read More{" "}
          <FaArrowRight className="inline-block ml-1 group-hover:ml-2 transition-all duration-300" />
        </div>
      </div>
    </div>
  </div>
);

const PostModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-t-xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/800x400/e2e8f0/333333?text=Article+Image";
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-all"
            aria-label="Close post"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="p-8">
          <p className="text-sm text-green-500 font-semibold">{post.category}</p>
          <h2 className="text-3xl font-bold text-gray-900 my-3">{post.title}</h2>
          <div className="text-sm text-gray-500 mb-6">
            <span>By {post.author}</span> &middot; <span>{post.date}</span>
          </div>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {post.excerpt}
            <p className="mt-4">This is where the full blog post content would go. For this demo, we are just showing the excerpt again. The full content would be fetched from a CMS or a database and could include rich text, images, and more.</p>
            <p>{post.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const SidebarWidget = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
    <h3 className="font-bold text-xl text-gray-800 border-b pb-3 mb-4">
      {title}
    </h3>
    {children}
  </div>
);

const Footer = () => (
  <footer className="bg-[#4CAF4F] text-white pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h4 className="font-bold text-lg mb-4">Reach us</h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fas fa-phone-alt mr-3"></i>
              <span>+91 9840289462</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope mr-3"></i>
              <span>greenefx.media@gmail.com</span>
            </div>
            <div className="flex items-start">
              <i className="fas fa-map-marker-alt mr-3 mt-1"></i>
              <span>
                #508, 1st Floor R.T.O Road, Sathuvachari Vellore-632009
              </span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-2">
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
          <h4 className="font-bold text-lg mb-4">Legal</h4>
          <ul className="space-y-2">
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
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
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
            <h4 className="font-bold text-lg mb-4">Join Our YOUTUBE CHANNEL</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-gray-600 px-4 rounded-r-md hover:bg-gray-500">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              * Will send you weekly updates for your better business
              improvement.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
        <p>Copyright © 2025 GreenEFX . All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const BlogPage = ({ navigateTo }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const featuredPost = blogPosts.find((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => !p.featured);
  const categories = [...new Set(blogPosts.map((p) => p.category))];
  const recentPosts = blogPosts.slice(0, 3);

  const openPost = (post) => setSelectedPost(post);
  const closePost = () => setSelectedPost(null);

  return (
    <>
      <Navbar navigateTo={navigateTo} />
      <div className="pt-24 bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 font-poppins">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Insights, tutorials, and news from the world of digital arts and
              animation.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              {featuredPost && <FeaturedPost post={featuredPost} onClick={openPost} />}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => (
                  <PostCard key={post.title} post={post} onClick={openPost} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3">
              <SidebarWidget title="Search">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-500 text-white px-4 rounded-r-md hover:bg-green-600">
                    <FaSearch />
                  </button>
                </div>
              </SidebarWidget>
              <SidebarWidget title="Categories">
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-green-600 hover:underline"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </SidebarWidget>
              <SidebarWidget title="Recent Posts">
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li
                      key={post.title}
                      className="flex items-center space-x-4"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/64x64/e2e8f0/333333?text=...";
                        }}
                      />
                      <div>
                        <a
                          href="#"
                          className="font-semibold text-gray-800 hover:text-green-600 hover:underline"
                        >
                          {post.title}
                        </a>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </SidebarWidget>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
      <PostModal post={selectedPost} onClose={closePost} />
    </>
  );
};

// --- MAIN APP COMPONENT ---

export default function blog() {
  const [currentPage, setCurrentPage] = useState("blog"); // Default to blog page

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // In a real app, you would use a router. For this environment, we'll simulate page changes.
  // For now, only the blog page is fully implemented. A real Homepage component would be needed.
  const Homepage = ({ navigateTo }) => (
    <div>
      <Navbar navigateTo={navigateTo} />
      <div className="pt-24 text-center">
        <h1 className="text-4xl font-bold">Homepage Placeholder</h1>
        <p className="mt-4">
          This is the homepage. Click "Blog" in the nav to see the blog page.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {currentPage === "home" && <Homepage navigateTo={navigateTo} />}
      {currentPage === "blog" && <BlogPage navigateTo={navigateTo} />}
    </>
  );
}
