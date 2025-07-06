import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  User,
  Briefcase,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle,
  Menu,
  X,
  ArrowUp,
  Heart,
} from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

const MapComponent = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Don't initialize until the component is mounted and ref is available
    if (!mapRef.current) return;

    // Fix for Leaflet's icon paths
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    // Wait a moment for the container to be properly sized
    const initializeMap = () => {
      // Only initialize once
      if (mapInstanceRef.current) return;

      // Create the map instance
      mapInstanceRef.current = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: false, // Disable scroll zoom for better mobile experience
      }).setView([-17.824858, 31.053028], 13);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstanceRef.current);

      // Define locations
      const locations = [
        {
          name: "Jackson Road Office",
          coords: [-17.824858, 31.053028],
          address: "8 Jackson Road, Hillside, Harare",
        },
        {
          name: "NRZ Complex Office",
          coords: [-17.82975, 31.03497],
          address: "NRZ Complex, Seke Road, Harare",
        },
      ];

      // Add markers with popups
      locations.forEach((location) => {
        const marker = L.marker(location.coords).addTo(mapInstanceRef.current);
        marker.bindPopup(`<b>${location.name}</b><br>${location.address}`);
      });

      // Fit map to show both markers
      const bounds = L.latLngBounds(locations.map((loc) => loc.coords));
      mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] });
    };

    // Initialize the map after a short delay to ensure container is sized
    setTimeout(initializeMap, 100);

    // When screen size changes, refresh the map
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };

    window.addEventListener("resize", handleResize);

    // For mobile: when orientation changes, refresh the map
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 200);
    });

    // Cleanup function to destroy map and remove event listeners when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapRef} className="w-full h-64 md:h-80 lg:h-96 rounded-2xl" />
  );
};

const ContactPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const [showNav, setShowNav] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null,
    });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        service: "",
      });
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin />,
      title: "Our Location",
      details: [
        "No. 70 Mutare Road,",
        "Cnr Steven Drive,",
        "Colonnade Building,",
        "Office Suite 8 First Floor,",
        "Msasa, Harare",
      ],
    },
    {
      icon: <Phone />,
      title: "Phone Numbers",
      details: ["+263 783 574 677", "+263 714 273 307"],
    },
    {
      icon: <Mail />,
      title: "Email Address",
      details: ["sales@margchashopfitting.com"],
    },
    {
      icon: <Clock />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8am - 5pm",
        "Saturday: 9am - 1pm",
        "Sunday: Closed",
      ],
    },
  ];

  const serviceOptions = [
    "Aluminium Fabrication",
    "Joinery Services",
    "Ceiling Solutions",
    "Security Systems",
    "Shower Enclosures",
    "Office Partitions",
    "Other Services",
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Thompson",
      company: "Sunrise Retail",
      text: "Margcha transformed our retail space with beautiful aluminium shop fronts and modern ceiling solutions. Professional team and excellent quality!",
      rating: 5,
    },
    {
      name: "Michael Carter",
      company: "Executive Offices Ltd",
      text: "The office partitions and security systems installed by Margcha exceeded our expectations. Their attention to detail is remarkable.",
      rating: 5,
    },
    {
      name: "Emma Johnson",
      company: "Luxe Hotels",
      text: "We've used Margcha for multiple hotel renovation projects. Their shower enclosures and glass work are top-notch with impeccable finishing.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setShowNav(!showNav)}
        className="fixed top-4 right-4 z-50 bg-maroon-600 text-white p-2 rounded-full shadow-lg md:hidden"
      >
        {showNav ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-maroon-600 text-white p-3 rounded-full shadow-lg animate-pulse"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 z-40 md:hidden transition-opacity duration-300 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center text-white mb-12">
            <h2 className="text-2xl font-bold mb-2">Margcha Shopfitting</h2>
            <p className="text-gray-300">Quality Aluminium Solutions</p>
          </div>

          <nav className="flex flex-col items-center space-y-6">
            <a
              href="#"
              onClick={() => {
                setActiveTab("contact");
                setShowNav(false);
              }}
              className={`text-xl font-medium ${
                activeTab === "contact" ? "text-maroon-400" : "text-white"
              }`}
            >
              Contact
            </a>
            <a
              href="#"
              onClick={() => {
                setActiveTab("services");
                setShowNav(false);
              }}
              className={`text-xl font-medium ${
                activeTab === "services" ? "text-maroon-400" : "text-white"
              }`}
            >
              Services
            </a>
            <a
              href="#"
              onClick={() => {
                setActiveTab("faq");
                setShowNav(false);
              }}
              className={`text-xl font-medium ${
                activeTab === "faq" ? "text-maroon-400" : "text-white"
              }`}
            >
              FAQ
            </a>
            <a
              href="#"
              onClick={() => {
                setActiveTab("testimonials");
                setShowNav(false);
              }}
              className={`text-xl font-medium ${
                activeTab === "testimonials" ? "text-maroon-400" : "text-white"
              }`}
            >
              Testimonials
            </a>
          </nav>

          <div className="absolute bottom-12 flex space-x-4">
            <a
              href="tel:+2637835746777"
              className="text-white hover:text-maroon-400"
            >
              <Phone size={24} />
            </a>
            <a
              href="mailto:sales@margchashopfitting.com"
              className="text-white hover:text-maroon-400"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-pattern-overlay opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Quality craftsmanship and exceptional service for all your
              shopfitting needs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact-form"
                className="px-6 py-3 bg-white text-maroon-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+2637835746777"
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full mb-3">
                  <div className="text-white">
                    {React.cloneElement(info.icon, { className: "w-5 h-5" })}
                  </div>
                </div>
                <h3 className="text-sm font-semibold mb-1">{info.title}</h3>
                <div className="text-xs text-gray-300">
                  {index === 0 ? (
                    <p className="truncate">{info.details[0]}</p>
                  ) : index === 1 ? (
                    <p>{info.details[0]}</p>
                  ) : index === 2 ? (
                    <p className="truncate">{info.details[0]}</p>
                  ) : (
                    <p>{info.details[0].split(":")[0]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Floating Contact Info Card */}
      <div className="sticky top-4 right-4 z-30 hidden lg:block float-right mr-4 max-w-xs">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-semibold text-gray-900 flex items-center text-lg">
              <Phone className="w-5 h-5 mr-2 text-maroon-600" />
              Quick Contact
            </h3>
          </div>
          <div className="p-4 space-y-3">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 text-maroon-600 mr-3">
                  {React.cloneElement(info.icon, { className: "w-4 h-4" })}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {info.title}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {info.details[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-maroon-50">
            <a
              href="#contact-form"
              className="block w-full py-2 bg-maroon-600 text-white rounded-lg text-center text-sm font-medium hover:bg-maroon-700 transition-colors"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <section className="py-12 md:py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 bg-maroon-100 text-maroon-800 rounded-full text-sm font-medium mb-3">
              Get In Touch
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our team is ready to assist you with any questions about our
              services or to provide a free consultation for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 md:p-6 text-center hover:shadow-xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                {/* Decorative background circle */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-maroon-50 group-hover:bg-maroon-100 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-maroon-50 rounded-xl mb-5 group-hover:bg-maroon-100 transition-colors duration-300 group-hover:scale-110 transform">
                    <div className="text-maroon-600">
                      {React.cloneElement(info.icon, { className: "w-6 h-6" })}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-sm md:text-base text-gray-600"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form Section with Background Design */}
      <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-maroon-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-maroon-100 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl h-64 md:h-96 lg:h-[400px]">
              <MapComponent />
            </div>

            {/* Contact Form */}
            <div
              id="contact-form"
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-4 md:p-6 border-b border-gray-100">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 mr-2 text-maroon-600" />
                  Send Us a Message
                </h3>
              </div>
              <div className="p-4 md:p-6">
                {formStatus.isSubmitted ? (
                  <div className="text-center py-8 md:py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full mb-4 md:mb-6 animate-pulse">
                      <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                      Message Sent!
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                      Thank you for reaching out to us. We'll get back to you as
                      soon as possible.
                    </p>
                    <button
                      onClick={() =>
                        setFormStatus({
                          isSubmitting: false,
                          isSubmitted: false,
                          error: null,
                        })
                      }
                      className="px-5 py-2 bg-maroon-600 text-white rounded-lg hover:bg-maroon-700 transition-colors duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name*
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="pl-10 block w-full shadow-sm rounded-lg border-gray-300 focus:ring-maroon-500 focus:border-maroon-500 sm:text-sm py-3 border"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address*
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="pl-10 block w-full shadow-sm rounded-lg border-gray-300 focus:ring-maroon-500 focus:border-maroon-500 sm:text-sm py-3 border"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10 block w-full shadow-sm rounded-lg border-gray-300 focus:ring-maroon-500 focus:border-maroon-500 sm:text-sm py-3 border"
                            placeholder="+263 7X XXX XXXX"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Company
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Briefcase className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="pl-10 block w-full shadow-sm rounded-lg border-gray-300 focus:ring-maroon-500 focus:border-maroon-500 sm:text-sm py-3 border"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="block w-full shadow-sm rounded-lg border-gray-300 focus:ring-maroon-500 focus:border-maroon-500 sm:text-sm py-3 border"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((service, idx) => (
                          <option key={idx} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="block w-full shadow-sm rounded-lg border-gray-300 focus:ring-maroon-500 focus:border-maroon-500 sm:text-sm py-3 border"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="block w-full shadow-sm rounded-lg border-gray-300 focus:ring-maroon-500 focus:border-maroon-500 sm:text-sm border"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className={`inline-flex justify-center items-center w-full px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-maroon-600 hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon-500 transition-all duration-300 ${
                          formStatus.isSubmitting
                            ? "opacity-75 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {formStatus.isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Products & Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of high-quality aluminium
              fabrication, ceiling solutions, and security systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Product Category: Aluminium and Glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Aluminium & Glass Products
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Casement & Sliding Windows
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Hinged & Sliding Doors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Office Partitions & Shop Fronts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Shower Cubicles & Enclosures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Curtain Walls & Glass Facades
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Product Category: Ceilings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Ceiling Solutions
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Gypsum Ceilings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Fiberglass Ceilings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Wooden False Ceilings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Metal Ceilings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      PVC & Glass False Ceilings
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Product Category: Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Security Systems
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Burglar Bars & Flyscreens
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Access Control & Biometric Readers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Stand Alone Locks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Automated Sliding Doors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">
                      Automated Sectional Garage Doors
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Find answers to common questions about our services and products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {/* Add FAQ items here */}
            <details className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <summary className="font-medium text-base md:text-lg cursor-pointer focus:outline-none flex justify-between items-center">
                <span>What areas do you service in Zimbabwe?</span>
                <ChevronRight className="h-5 w-5 transform transition-transform duration-300" />
              </summary>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                We service all areas in Harare and can undertake projects
                throughout Zimbabwe. For projects outside Harare, please contact
                us to discuss logistics and scheduling.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <summary className="font-medium text-base md:text-lg cursor-pointer focus:outline-none flex justify-between items-center">
                <span>Do you provide free quotes for projects?</span>
                <ChevronRight className="h-5 w-5 transform transition-transform duration-300" />
              </summary>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Yes, we provide free, no-obligation quotes for all projects. Our
                team can visit your site to take accurate measurements and
                understand your specific requirements before providing a
                detailed quote.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <summary className="font-medium text-base md:text-lg cursor-pointer focus:outline-none flex justify-between items-center">
                <span>What is the typical lead time for your products?</span>
                <ChevronRight className="h-5 w-5 transform transition-transform duration-300" />
              </summary>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Lead times vary depending on the product and project scope.
                Generally, standard aluminum windows and doors take 7-14 days,
                while custom shopfitting projects may take 2-4 weeks. We'll
                provide specific timelines during the quotation process.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <summary className="font-medium text-base md:text-lg cursor-pointer focus:outline-none flex justify-between items-center">
                <span>Do you offer after-sales service and maintenance?</span>
                <ChevronRight className="h-5 w-5 transform transition-transform duration-300" />
              </summary>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Yes, we offer comprehensive after-sales service and maintenance
                for all our products. We provide warranties on our workmanship
                and can arrange regular maintenance services to ensure your
                installations remain in optimal condition.
              </p>
            </details>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Connect With Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Follow us on social media for the latest updates, project
              showcases, and special offers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-maroon-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project needs and get a free
              consultation from our team of experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+2637835746777"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-maroon-900 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white bg-white text-base font-medium rounded-md text-maroon-900 hover:bg-transparent hover:text-white transition-colors duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
