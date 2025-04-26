import React, { useState, useEffect } from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Home, 
  Briefcase, 
  Hammer, 
  Info, 
  PhoneCall, 
  Building2, 
  Cog, 
  Award, 
  ArrowRight, 
  Calendar,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  CreditCard,
  ArrowUpRight,
  ChevronRight,
  Layers,
  Star
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  
  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Elite Retail Group",
      text: "Margcha transformed our retail space with exceptional aluminum work. The quality and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "David Mutendera",
      company: "Premier Properties",
      text: "The payment plan made our large office renovation project manageable. Professional work delivered on time and budget.",
      rating: 5
    },
    {
      name: "Rachel Moyo",
      company: "Stylish Boutiques Ltd",
      text: "From concept to completion, the Margcha team provided outstanding service and craftsmanship for our chain of stores.",
      rating: 5
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-black/90 z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="text-maroon-400 mr-2">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 80L50 20L80 80H60L50 60L40 80H20Z" fill="#D1D1D1" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Margcha</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav>
            <ul className="space-y-6">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="border-b border-gray-800 pb-4">
                  <a 
                    href="#" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate(item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`);
                    }}
                    className="flex justify-between items-center text-white text-xl"
                  >
                    {item}
                    <ChevronRight size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-12 pt-6 border-t border-gray-800">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+263783574677" className="flex items-center text-gray-300 hover:text-white">
                <Phone size={18} className="mr-3" />
                <span>+263 78 357 4677</span>
              </a>
              <a href="mailto:sales@margchashopfitting.com" className="flex items-center text-gray-300 hover:text-white">
                <Mail size={18} className="mr-3" />
                <span>sales@margchashopfitting.com</span>
              </a>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="#" className="bg-maroon-600 text-white p-2 rounded-full hover:bg-maroon-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-maroon-600 text-white p-2 rounded-full hover:bg-maroon-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-maroon-600 text-white p-2 rounded-full hover:bg-maroon-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-maroon-600 text-white p-2 rounded-full hover:bg-maroon-700">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header - Responsive and Sticky */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${isSticky ? 'bg-gray-900/95 shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-maroon-400 mr-2">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 80L50 20L80 80H60L50 60L40 80H20Z" fill={isSticky ? "#D1D1D1" : "#FFFFFF"} />
                </svg>
              </div>
              <div>
                <span className={`text-xl font-bold ${isSticky ? 'text-white' : 'text-white'}`}>
                  Margcha
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  onClick={() => navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                  className={`font-medium hover:text-maroon-400 transition-colors ${isSticky ? 'text-gray-300' : 'text-white'}`}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+263783574677" 
                className={`hidden sm:flex items-center ${isSticky ? 'text-gray-300' : 'text-white'} hover:text-maroon-400`}
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">Call Us</span>
              </a>
              
              <button 
                onClick={() => setIsMenuOpen(true)}
                className={`p-2 rounded-lg ${isSticky ? 'text-white hover:bg-gray-700' : 'text-white hover:bg-white/10'} md:hidden`}
              >
                <Menu size={24} />
              </button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="hidden md:flex px-4 py-2 bg-maroon-600 hover:bg-maroon-700 text-white rounded-lg text-sm font-medium items-center gap-2"
              >
                <Mail size={16} />
                Get Quote
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced for Mobile */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-16 md:pb-12 bg-gradient-to-br from-gray-900 via-maroon-900 to-gray-900 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="/home.jpg" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20"></div>
        </div>
        
        {/* Content Container - Better Mobile Layout */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-2 inline-block bg-maroon-600/80 px-4 py-1 rounded-full text-white text-sm font-medium"
              >
                Premier Aluminium Fabrication & Joinery
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
              >
                Crafting Excellence in
                <span className="block text-maroon-400">Shopfitting Solutions</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto lg:mx-0"
              >
                Specialized in premium Aluminium Fabrication and Joinery, delivering exceptional craftsmanship for your commercial spaces.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12 lg:mb-0"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/services')}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 bg-maroon-600 hover:bg-maroon-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  Our Services <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/projects')}
                  className="px-6 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 shadow-lg flex items-center justify-center"
                >
                  View Projects
                </motion.button>
              </motion.div>
            </div>
            
            {/* Right Content - Special Offer Card - Mobile Optimized */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="w-full max-w-sm lg:w-2/5"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="text-center bg-gradient-to-r from-maroon-800 to-maroon-900 text-white py-4 px-4 md:py-6">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">WE ARE</h3>
                  <div className="space-y-1">
                    <p className="text-xl md:text-2xl font-bold">TRUSTWORTHY</p>
                    <p className="text-xl md:text-2xl font-bold">FLEXIBLE</p>
                    <p className="text-lg md:text-xl font-bold">AFFORDABLE</p>
                    <p className="text-xl md:text-2xl font-bold">ON POINT</p>
                    <p className="text-xl md:text-2xl font-bold">& ON TIME</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <p className="font-bold text-gray-800 mb-4 text-center text-lg">
                    Get it in <span className="text-maroon-700">3 Installments</span>
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-6">
                    <div className="bg-maroon-700 text-white p-3 rounded text-center">
                      <p className="font-bold mb-1">Step 1</p>
                      <p className="text-sm">Pay 60% initial deposit</p>
                    </div>
                    <div className="bg-maroon-700 text-white p-3 rounded text-center">
                      <p className="font-bold mb-1">Step 2</p>
                      <p className="text-sm">Pay 20% after 31 days</p>
                    </div>
                    <div className="bg-maroon-700 text-white p-3 rounded text-center">
                      <p className="font-bold mb-1">Step 3</p>
                      <p className="text-sm">Final 20% after 31 days</p>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    onClick={() => navigate('/contact')}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white rounded-lg text-base md:text-lg font-medium transition-colors duration-300 flex items-center justify-center shadow-md"
                  >
                    <CreditCard size={18} className="mr-2" />
                    Try our payment terms today
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </motion.section>
      
      {/* Why Choose Us - New Mobile-Friendly Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-maroon-700">Margcha</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality and customer satisfaction sets us apart
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <Award size={28} />,
                title: "Quality",
                description: "Premium materials and craftsmanship"
              },
              {
                icon: <Clock size={28} />,
                title: "Timeliness",
                description: "On-time project delivery"
              },
              {
                icon: <Cog size={28} />,
                title: "Expertise",
                description: "Skilled professionals"
              },
              {
                icon: <CreditCard size={28} />,
                title: "Flexible",
                description: "Easy payment terms"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-maroon-600 mb-3 flex justify-center">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section - Mobile-Enhanced */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exceptional quality aluminum solutions for your commercial and residential spaces
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Aluminum Windows",
                description: "Energy-efficient and stylish windows suitable for any architectural style",
                image: "/window.jpg"
              },
              {
                title: "Folding Doors",
                description: "Space-saving folding doors that create seamless indoor-outdoor transitions",
                image: "/door2.jpg"
              },
              {
                title: "Custom Shopfitting",
                description: "Bespoke solutions tailored for retail and commercial environments",
                image: "/custom.jpg"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden h-48 md:h-56">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => navigate('/products')}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white text-maroon-700 rounded-md text-sm font-medium flex items-center gap-2"
                      >
                        Learn More <ArrowUpRight size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{product.description}</p>
                  <div className="flex items-center text-maroon-600 text-sm">
                    <CheckCircle size={16} className="mr-2" />
                    <span>Quality Guaranteed</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  
      {/* Features Section - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Margcha Shopfitting?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With years of experience and dedication to quality, we bring your vision to life through expert craftsmanship
            </p>
          </motion.div>
  
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <Building2 size={28} />,
                title: "Custom Solutions",
                description: "Tailored approaches for your unique requirements"
              },
              {
                icon: <Hammer size={28} />,
                title: "Expert Craftsmanship",
                description: "Precision and attention to every detail"
              },
              {
                icon: <Cog size={28} />,
                title: "Quality Materials",
                description: "Premium materials for lasting results"
              },
              {
                icon: <Award size={28} />,
                title: "Professional Team",
                description: "Experienced and dedicated specialists"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-maroon-600 mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  
      {/* Testimonials - New Mobile-First Section */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                      <div className="flex items-center justify-center mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={18} className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg mb-6 text-center italic">"{testimonial.text}"</p>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeTestimonial === index ? 'bg-maroon-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
  
      {/* Payment Plan Section - Mobile Enhanced */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get your dream aluminum solutions with our convenient installment plan
            </p>
          </motion.div>
            <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="w-full md:w-2/5 bg-maroon-800 text-white p-6 md:p-8 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">IT'S AFFORDABLE!</h3>
                  <p className="text-lg md:text-xl mb-4">Get it in 3 Installments</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => navigate('/contact')}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 md:px-6 md:py-3 bg-white text-maroon-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    Get Started Today
                  </motion.button>
                </div>
              </div>
              <div className="w-full md:w-3/5 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="bg-maroon-100 text-maroon-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <span className="font-bold text-base md:text-lg">1</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 md:mb-2">Initial Deposit</h4>
                    <p className="text-gray-600 mb-2 text-sm md:text-base">Pay 60% and get your products delivered and installed</p>
                    <p className="text-maroon-700 font-bold">Day 1</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-maroon-100 text-maroon-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <span className="font-bold text-base md:text-lg">2</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 md:mb-2">Second Payment</h4>
                    <p className="text-gray-600 mb-2 text-sm md:text-base">Settle 20% of the total cost after first month</p>
                    <p className="text-maroon-700 font-bold">Day 31</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-maroon-100 text-maroon-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <span className="font-bold text-base md:text-lg">3</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 md:mb-2">Final Payment</h4>
                    <p className="text-gray-600 mb-2 text-sm md:text-base">Complete the remaining 20% after second month</p>
                    <p className="text-maroon-700 font-bold">Day 62</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      {/* CTA Section - Mobile Optimized */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 md:py-20 bg-gradient-to-r from-maroon-800 to-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-6 py-3 bg-white text-maroon-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Contact Us Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/contact')}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 flex items-center justify-center gap-2"
            >
              <Calendar size={18} />
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </motion.section>
  
      {/* Footer - Mobile Optimized */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-maroon-400 mr-2">
                  <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 80L50 20L80 80H60L50 60L40 80H20Z" fill="#D1D1D1" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold">Margcha</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm">Premium aluminum fabrication and joinery solutions for commercial and residential spaces.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Services', 'Projects', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Our Services</h3>
              <ul className="space-y-2">
                {['Aluminum Windows', 'Folding Doors', 'Shop Fronts', 'Office Partitions', 'Custom Solutions'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-1 text-maroon-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    NO:70 Mutare Road, Cnr Steven Drive, Colonnade Building, Office Suite 12, First floor, Msasa, Harare
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2 text-maroon-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+263 78 357 4677</span>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2 text-maroon-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+263 71 427 3307</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-maroon-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">sales@margchashopfitting.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
            <p className="text-sm">&copy; {new Date().getFullYear()} Margcha Shopfitting. All rights reserved.</p>
          </div>
        </div>
        <div className="mt-4 text-center">
            <Typography variant="body2" className="!text-blue-100">
              Developed by <a href="https://zettabyte.co.zw" className="!text-maroon-400 hover:!text-white !transition-colors" target="_blank" rel="noopener noreferrer">Zettabyte</a>
            </Typography>
          </div>
      </footer>
    </div>
  );
};

export default HomePage;