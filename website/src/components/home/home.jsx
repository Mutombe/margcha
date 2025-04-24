import React, { useState, useEffect } from 'react';
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
  ArrowUpRight
} from 'lucide-react';

const HomePage = () => {
    const navigate = useNavigate();
    const fadeInUp = {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };
  
    return (
      <div className="relative min-h-screen">

{/* Hero Section */}
<motion.section 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="relative min-h-screen flex items-center pt-16 pb-12 md:py-0 bg-gradient-to-br from-gray-900 via-maroon-900 to-gray-900 overflow-hidden"
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
  
  {/* Content Container */}
  <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Crafting Excellence in
          <span className="block text-maroon-400">Shopfitting Solutions</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0"
        >
          Specialized in premium Aluminium Fabrication and Joinery, delivering exceptional craftsmanship for your commercial spaces with a focus on quality, timeliness, and affordability.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 lg:mb-0"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/services')}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-maroon-600 hover:bg-maroon-700 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg"
          >
            Our Services <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projects')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 shadow-lg"
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
      
      {/* Right Content - Special Offer Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="w-full max-w-md lg:w-2/5"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="text-center bg-gradient-to-r from-maroon-800 to-maroon-900 text-white py-6 px-4">
            <h3 className="text-xl font-bold mb-2">WE ARE</h3>
            <div className="space-y-1">
              <p className="text-2xl font-bold">TRUSTWORTHY</p>
              <p className="text-2xl font-bold">FLEXIBLE</p>
              <p className="text-xl font-bold">AFFORDABLE</p>
              <p className="text-2xl font-bold">ON POINT</p>
              <p className="text-2xl font-bold">& ON TIME</p>
            </div>
          </div>
          
          <div className="p-6">
            <p className="font-bold text-gray-800 mb-4 text-center text-lg">
              Get it in <span className="text-maroon-700">3 Installments</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
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
              className="w-full px-6 py-3 bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white rounded-lg text-lg font-medium transition-colors duration-300 flex items-center justify-center shadow-md"
            >
              <CreditCard size={20} className="mr-2" />
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
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
    >
      <ChevronDown size={32} />
    </motion.div>
  </div>
</motion.section>
  
        {/* Product Showcase Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Premium Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Exceptional quality aluminum windows, doors, and custom solutions for your commercial and residential spaces.
              </p>
            </motion.div>
  
            <div className="grid md:grid-cols-3 gap-8">
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
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
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
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
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
  
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Margcha Shopfitting?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                With years of experience and dedication to quality, we bring your vision to life through expert craftsmanship and innovative solutions.
              </p>
            </motion.div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Building2 size={32} />,
                  title: "Custom Solutions",
                  description: "Tailored approaches for your unique requirements"
                },
                {
                  icon: <Hammer size={32} />,
                  title: "Expert Craftsmanship",
                  description: "Precision and attention to every detail"
                },
                {
                  icon: <Cog size={32} />,
                  title: "Quality Materials",
                  description: "Premium materials for lasting results"
                },
                {
                  icon: <Award size={32} />,
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
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="text-maroon-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Payment Plan Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Payment Options
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get your dream aluminum windows and doors with our convenient installment plan.
              </p>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl overflow-hidden md:flex"
            >
              <div className="md:w-2/5 bg-maroon-800 text-white p-8 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2">IT'S AFFORDABLE!</h3>
                  <p className="text-xl mb-4">Get it in 3 Installments</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => navigate('/contact')}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-maroon-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    Get Started Today
                  </motion.button>
                </div>
              </div>
              <div className="md:w-3/5 p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-maroon-100 text-maroon-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-lg">1</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Initial Deposit</h4>
                    <p className="text-gray-600 mb-2">Pay 60% and get your products delivered and installed</p>
                    <p className="text-maroon-700 font-bold">Day 1</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-maroon-100 text-maroon-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-lg">2</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Second Payment</h4>
                    <p className="text-gray-600 mb-2">Settle 20% of the total cost after first month</p>
                    <p className="text-maroon-700 font-bold">Day 31</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-maroon-100 text-maroon-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-lg">3</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Final Payment</h4>
                    <p className="text-gray-600 mb-2">Complete the remaining 20% after second month</p>
                    <p className="text-maroon-700 font-bold">Day 62</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
  
        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-maroon-800 to-gray-900 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-white text-maroon-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone size={20} />
                Contact Us Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/contact')}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 flex items-center gap-2"
              >
                <Calendar size={20} />
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.section>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-maroon-400 mr-2">
                    <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 80L50 20L80 80H60L50 60L40 80H20Z" fill="#D1D1D1" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xl font-bold">Margcha Shopfitting</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">Premium aluminum fabrication and joinery solutions for commercial and residential spaces.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {['Home', 'About Us', 'Services', 'Projects', 'Testimonials'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Our Services</h3>
                <ul className="space-y-2">
                  {['Aluminum Windows', 'Folding Doors', 'Shop Fronts', 'Office Partitions', 'Custom Solutions'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin size={18} className="mr-2 mt-1 text-maroon-400" />
                    <span className="text-gray-400">
                      NO:70 Mutare Road, Cnr Steven Drive, Colonnade Building, Office Suite 12, First floor, Msasa, Harare
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone size={18} className="mr-2 text-maroon-400" />
                    <span className="text-gray-400">+263 78 357 4677</span>
                  </li>
                  <li className="flex items-center">
                    <Phone size={18} className="mr-2 text-maroon-400" />
                    <span className="text-gray-400">+263 71 427 3307</span>
                  </li>
                  <li className="flex items-center">
                    <Mail size={18} className="mr-2 text-maroon-400" />
                    <span className="text-gray-400">sales@margchashopfitting.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Margcha Shopfitting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default HomePage;