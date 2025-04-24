import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

// Top Info Bar Component
const InfoBar = () => {
  return (
    <div className="bg-maroon-800 text-white py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" />
              <span>+263 78 357 4677 | +263 71 427 3307</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <span>sales@margchashopfitting.com</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-2" />
              <span>Msasa, Harare</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock size={14} className="mr-2" />
              <span>Mon-Fri: 8AM-5PM</span>
            </div>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '/', icon: <Home size={18} /> },
    { name: 'Services', link: '/services', icon: <Briefcase size={18} /> },
    { name: 'Projects', link: '/projects', icon: <Hammer size={18} /> },
    { name: 'About', link: '/about', icon: <Info size={18} /> },
    { name: 'Contact', link: '/contact', icon: <PhoneCall size={18} /> },
  ];

  return (
    <>
      <InfoBar />
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-white py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center"
            >
                <a href="/" className="flex items-center">
              <div className="text-maroon-800 mr-2">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 80L50 20L80 80H60L50 60L40 80H20Z" fill="#8B0000" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">
                  Margcha <span className="text-maroon-700">Shopfitting</span>
                </span>
                <p className="text-xs text-maroon-600 font-medium">ALUMINUM FABRICATION & JOINERY</p>
              </div></a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-800 hover:text-maroon-600 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 text-maroon-600">{item.icon}</span>
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 px-4 py-2 bg-maroon-700 hover:bg-maroon-800 text-white rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  Get a Quote
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-maroon-600 hover:bg-gray-100"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              height: isOpen ? 'auto' : 0,
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-gray-800 hover:text-maroon-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3 text-maroon-600">{item.icon}</span>
                  {item.name}
                </a>
              ))}
              <a
                href="#quote"
                className="block w-full text-center px-4 py-2 bg-maroon-700 hover:bg-maroon-800 text-white rounded-md text-base font-medium mt-3 flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={16} className="mr-2" />
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;