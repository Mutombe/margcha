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
              <a href="https://www.facebook.com/share/14DcFhcoebh/?mibextid=wwXIfr" className="hover:text-gray-300 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/margcha.shopfitting?igsh=MXg5ZW1kazkxZ3UycQ==" className="hover:text-gray-300 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://x.com/margchash?t=y0a2AxRqvXI4vHFxV-Jusw&s=09" className="hover:text-gray-300 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://www.linkedin.com/in/margcha-shopfitting-1428b6269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-gray-300 transition-colors">
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
                  <img className="h-16 w-30 rounded-sm" src='/logo4.png' alt="Logo" />
                </a>
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
                  onClick={() => window.location.href = '/contact'}
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