import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Ruler,
  Grid,
  Paintbrush,
  Construction,
  Scissors,
  Eye,
  CheckCircle,
  ArrowRight,
  Cog,
  Shield,
  Award,
  Lightbulb,
  PhoneCall,
  Clock,
  Calendar,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  MapPin
} from 'lucide-react';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('fabrication');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  
  // Track scroll position for parallax and sticky effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainServices = [
    {
      id: 'fabrication',
      icon: <Grid className="w-6 h-6 md:w-8 md:h-8" />,
      mobileIcon: <Grid className="w-5 h-5" />,
      title: "Aluminium Fabrication",
      shortTitle: "Fabrication",
      description: "Premium aluminium solutions crafted with precision for commercial and residential spaces.",
      features: [
        "Custom Shopfronts",
        "Window Systems",
        "Structural Glazing",
        "Security Doors",
        "Display Cases"
      ],
      products: [
        {
          name: "Casement Windows",
          description: "Top-hung or side-hung sash openings, allowing maximum airflow into your space.",
          image: "/1.jpg"
        },
        {
          name: "Sliding Windows",
          description: "Available in light duty (Patio) or heavy duty (Galaxy) options for different applications.",
          image: "/2.jpg"
        },
        {
          name: "Sliding Doors",
          description: "Smooth operation with various thickness options for residential and commercial use.",
          image: "/galaxysliding3.jpeg"
        },
        {
          name: "Hinged Doors",
          description: "Full panel glass and aluminium finish for secure spaces with high traffic volumes.",
          image: "/vista1.jpeg"
        }
      ]
    },
    {
      id: 'joinery',
      icon: <Construction className="w-6 h-6 md:w-8 md:h-8" />,
      mobileIcon: <Construction className="w-5 h-5" />,
      title: "Joinery Services",
      shortTitle: "Joinery",
      description: "Expert woodworking solutions that combine aesthetic appeal with functional excellence.",
      features: [
        "Custom Cabinetry",
        "Display Units",
        "Counter Design",
        "Storage Solutions",
        "Wooden Fixtures"
      ],
      products: [
        {
          name: "Office Partitions",
          description: "Modern office designs with glass, aluminum, layby, or drywall partitioning options.",
          image: "/5.jpg"
        },
        {
          name: "Custom Cabinets",
          description: "Bespoke cabinets and storage solutions tailored to your specific requirements.",
          image: "/6.jpg"
        },
        {
          name: "Reception Counters",
          description: "Professional reception areas that create the perfect first impression for visitors.",
          image: "/7.jpg"
        },
        {
          name: "Retail Displays",
          description: "Creative display solutions that showcase your products in the best possible light.",
          image: "/8.jpg"
        }
      ]
    },
    {
      id: 'specialized',
      icon: <Cog className="w-6 h-6 md:w-8 md:h-8" />,
      mobileIcon: <Cog className="w-5 h-5" />,
      title: "Specialized Solutions",
      shortTitle: "Specialized",
      description: "Unique offerings designed to meet specific client needs with innovative approaches.",
      features: [
        "Folding & Stack-away Doors",
        "Curtain Walls",
        "Shower Enclosures",
        "Security Systems",
        "Ceiling Solutions"
      ],
      products: [
        {
          name: "Folding & Stack-away Doors",
          description: "Flexible solutions for maximum opening space with complete enclosure options.",
          image: "/9.jpg"
        },
        {
          name: "Curtain Walls",
          description: "Modern glass and aluminum facades that enhance building aesthetics and value.",
          image: "/10.jpg"
        },
        {
          name: "Shower Enclosures",
          description: "Custom-made framed or frameless shower cubicles for elegant bathroom spaces.",
          image: "/11.jpg"
        },
        {
          name: "Ceiling Solutions",
          description: "Various ceiling options including gypsum, fiberglass, wooden, metal, glass, and PVC.",
          image: "/12.jpg"
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Ruler />,
      title: "Design Consultation",
      description: "Expert guidance on materials, layouts, and finishes for your specific needs."
    },
    {
      icon: <Cog />,
      title: "Installation Services",
      description: "Professional installation by our skilled technicians ensuring quality results."
    },
    {
      icon: <Shield />,
      title: "Security Solutions",
      description: "From burglar bars to access control systems for enhanced protection."
    },
    {
      icon: <Paintbrush />,
      title: "Finishing Works",
      description: "Professional painting and finishing touches for a perfect completion."
    },
    {
      icon: <Eye />,
      title: "Visual Merchandising",
      description: "Strategic display solutions to enhance your product presentation."
    },
    {
      icon: <Clock />,
      title: "Maintenance Services",
      description: "Regular maintenance to ensure longevity of all installations."
    }
  ];

  const processSteps = [
    {
      icon: <Lightbulb />,
      title: "Consultation",
      description: "We discuss your needs, budget, and timeline to understand your project requirements."
    },
    {
      icon: <Ruler />,
      title: "Design & Measurement",
      description: "Precise measurements and design concepts tailored to your specifications."
    },
    {
      icon: <Cog />,
      title: "Fabrication",
      description: "Custom manufacturing with premium materials in our specialized facility."
    },
    {
      icon: <Cog />,
      title: "Installation",
      description: "Professional installation with attention to detail and minimal disruption."
    },
    {
      icon: <CheckCircle />,
      title: "Quality Check",
      description: "Thorough inspection to ensure everything meets our high standards."
    },
    {
      icon: <Award />,
      title: "Handover & Support",
      description: "Project completion with comprehensive warranty and ongoing support."
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  const mobileNavVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07
      }
    }
  };
  
  const staggerItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const activeService = mainServices.find(service => service.id === activeTab);

  const toggleFeature = (index) => {
    if (expandedFeature === index) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileNavVariants}
            className="fixed top-0 right-0 w-full h-full bg-white z-50 p-6 shadow-xl overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8 pt-30">
              <div className="text-2xl font-bold text-maroon-800">Margcha</div>
              <button 
                onClick={() => setMobileMenu(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <motion.div variants={staggerItemVariants} className="pb-3 border-b border-gray-200">
                <a href="#" className="flex items-center justify-between py-2 text-lg text-gray-800 hover:text-maroon-600">
                  Home <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
              <motion.div variants={staggerItemVariants} className="pb-3 border-b border-gray-200">
                <a href="#" className="flex items-center justify-between py-2 text-lg text-maroon-600 font-medium hover:text-maroon-700">
                  Services <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
              <motion.div variants={staggerItemVariants} className="pb-3 border-b border-gray-200">
                <a href="#" className="flex items-center justify-between py-2 text-lg text-gray-800 hover:text-maroon-600">
                  Projects <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
              <motion.div variants={staggerItemVariants} className="pb-3 border-b border-gray-200">
                <a href="#" className="flex items-center justify-between py-2 text-lg text-gray-800 hover:text-maroon-600">
                  About Us <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
              <motion.div variants={staggerItemVariants} className="pb-3 border-b border-gray-200">
                <a href="#" className="flex items-center justify-between py-2 text-lg text-gray-800 hover:text-maroon-600">
                  Contact <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={staggerItemVariants}
              className="mt-10 bg-maroon-50 p-4 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <PhoneCall className="w-5 h-5 text-maroon-600" />
                <span className="font-medium text-gray-800">+27 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-maroon-600" />
                <span className="font-medium text-gray-800">Mon-Fri: 8am - 5pm</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-maroon-600" />
                <span className="font-medium text-gray-800">Johannesburg, SA</span>
              </div>
            </motion.div>
            
            <motion.button 
              variants={staggerItemVariants}
              onClick={() => navigate('/contact')}
              className="w-full mt-8 bg-maroon-600 text-white rounded-lg py-3 font-medium hover:bg-maroon-700 transition-colors duration-300"
            >
              Get a Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating mobile action button */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/contact')}
          className="w-14 h-14 bg-maroon-600 rounded-full flex items-center justify-center shadow-lg"
        >
          <PhoneCall className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Sticky Header - Appears when scrolling down on mobile */}
      <motion.header 
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          opacity: scrollPosition > 100 ? 1 : 0,
          y: scrollPosition > 100 ? 0 : -100
        }}
        className="fixed top-0 left-0 w-full bg-white z-40 shadow-md md:hidden"
      >
        <div className="flex justify-between items-center px-4 py-3">
          <div className="font-bold text-xl text-maroon-800">Margcha</div>
          <button 
            onClick={() => setMobileMenu(true)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </motion.header>

      {/* Hero Section with Mobile Enhancements */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-20 pb-16 md:pt-32 md:pb-20 lg:py-40 bg-gradient-to-br from-maroon-900 via-maroon-800 to-gray-900 overflow-hidden"
      >
        {/* Mobile-friendly background elements */}
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/hero-pattern.svg')`,
            backgroundSize: '200px',
            opacity: 0.07
          }}
        ></motion.div>
        
        {/* Parallax effect based on scroll position */}
        <motion.div 
          className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-maroon-500/20 blur-3xl"
          style={{
            transform: `translateY(${scrollPosition * 0.1}px)`
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-maroon-600/20 blur-3xl"
          style={{
            transform: `translateY(${scrollPosition * -0.05}px)`
          }}
        ></motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 md:pt-20 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-maroon-100 font-medium text-sm mb-6">Premium Shopfitting Solutions</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Transform Your <br className="hidden xs:block md:hidden" />
              <span className="text-maroon-200">Commercial Space</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 md:mb-10">
              Expert fabrication, joinery, and specialized solutions tailored to your unique vision and requirements.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5"
          >
            <button 
              className="px-6 py-3 md:px-8 md:py-3 bg-maroon-600 hover:bg-maroon-700 text-white rounded-lg font-semibold transition-colors duration-300 shadow-lg shadow-maroon-900/20" 
              onClick={() => navigate('/projects')}
            >
              Explore Our Work
            </button>
          </motion.div>
          
          {/* Mobile scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden"
          >
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center pt-20"
            >
              <span className="text-xs text-white/70 mb-2">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 text-white/70" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Tabs Navigation - Mobile Responsive */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-maroon-50 text-maroon-600 font-medium text-sm mb-3">Our Expertise</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Premium Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive shopfitting solutions designed to elevate your commercial space
            </p>
          </motion.div>
          
          {/* Desktop Tabs */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 mb-14">
            {mainServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === service.id
                    ? "bg-maroon-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className={activeTab === service.id ? "text-white" : "text-maroon-600"}>
                  {service.icon}
                </span>
                {service.title}
              </button>
            ))}
          </div>
          
          {/* Mobile Tabs - Horizontal Scrollable */}
          <div className="md:hidden mb-8 -mx-4 px-4 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 pb-2 min-w-full">
              {mainServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === service.id
                      ? "bg-maroon-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className={activeTab === service.id ? "text-white" : "text-maroon-600"}>
                    {service.mobileIcon}
                  </span>
                  {service.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Display - Mobile Responsive */}
          {activeService && (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-12">
                {/* Mobile Service Header */}
                <div className="md:hidden mb-6">
                  <div className="flex items-center justify-center mb-5">
                    <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center">
                      <div className="text-maroon-600 w-8 h-8">
                        {activeService.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{activeService.title}</h3>
                  <p className="text-gray-600 text-center">{activeService.description}</p>
                </div>
                
                {/* Desktop Service Header */}
                <div className="hidden md:flex md:flex-row md:items-center mb-8 gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeService.title}</h3>
                    <p className="text-lg text-gray-600">{activeService.description}</p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-maroon-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-40 h-40 bg-maroon-100 rounded-full flex items-center justify-center">
                      <div className="text-maroon-600 w-20 h-20">
                        {activeService.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Features - Accordion Style */}
                <div className="md:hidden mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {activeService.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        initial={false}
                        animate={{ height: expandedFeature === idx ? 'auto' : '48px' }}
                        className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
                      >
                        <button 
                          onClick={() => toggleFeature(idx)}
                          className="w-full flex items-center justify-between p-3 text-left"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-maroon-600 flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                              expandedFeature === idx ? "transform rotate-180" : ""
                            }`} 
                          />
                        </button>
                        {expandedFeature === idx && (
                          <div className="px-3 pb-3 text-gray-600 text-sm">
                            Tailored {feature.toLowerCase()} solutions designed to meet your specific business requirements and enhance your space.
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 md:mb-6 mt-6 md:mt-12">
                  Featured Products
                </h4>
                
                {/* Mobile Products - Card Carousel */}
                <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
                  <div className="flex space-x-4 pb-4 min-w-full">
                    {activeService.products.map((product, idx) => (
                      <motion.div
                        key={idx}
                        whileHover="hover"
                        initial="rest"
                        variants={cardHoverVariants}
                        className="flex-shrink-0 w-72 bg-gray-50 rounded-lg overflow-hidden shadow-md"
                      >
                        <div className="relative h-44 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-3">
                            <h5 className="text-lg font-semibold text-white">{product.name}</h5>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                          <button className="flex items-center text-maroon-600 font-medium hover:text-maroon-700 transition-colors duration-300" onClick={() => navigate('/projects')}>
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Desktop Products Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {activeService.products.map((product, idx) => (
                    <motion.div
                      key={idx}
                    
                      whileHover="hover"
                      initial="rest"
                      variants={cardHoverVariants}
                      className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-shadow duration-300"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h5>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                        <button className="mt-4 flex items-center text-maroon-600 font-medium hover:text-maroon-700 transition-colors duration-300" onClick={() => navigate('/projects')}>
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Our Process Section - Mobile Enhanced */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-maroon-50 text-maroon-600 font-medium text-sm mb-3">How We Work</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final handover, we ensure a seamless and professional experience at every step.
            </p>
          </motion.div>

          {/* Mobile Process Steps - Card Carousel */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 pb-4 min-w-full">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex-shrink-0 w-72 bg-white rounded-xl p-5 shadow-md"
                >
                  <div className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-maroon-600 w-6 h-6">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Process Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-maroon-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section - Mobile Enhanced */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-maroon-50 text-maroon-600 font-medium text-sm mb-3">More Options</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Complementary offerings to enhance your project and ensure a comprehensive solution.
            </p>
          </motion.div>

          {/* Mobile Services - Horizontal Scroll */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide mb-8">
            <div className="flex space-x-4 pb-4 min-w-full">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex-shrink-0 w-64 bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-maroon-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-maroon-600 mt-1 flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Mobile Optimized */}
      <section className="py-16 md:py-20 bg-maroon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-white text-maroon-600 font-medium text-sm mb-3">Testimonials</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from businesses who have transformed their spaces with our solutions.
            </p>
          </motion.div>

          {/* Mobile Testimonials Carousel */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide mb-8">
            <div className="flex space-x-4 pb-4 min-w-full">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-5 italic text-sm">
                    "The team delivered exceptional quality work for our new retail store. Their attention to detail and professionalism exceeded our expectations."
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900">Client Name</h4>
                    <p className="text-gray-600 text-xs">Company Position</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The team delivered exceptional quality work for our new retail store. Their attention to detail and professionalism exceeded our expectations."
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">Client Name</h4>
                  <p className="text-gray-600 text-sm">Company Position</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section - Mobile Enhanced */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 md:py-20 bg-gradient-to-br from-maroon-900 to-gray-900"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-maroon-500/20 blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-maroon-600/20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-lg text-maroon-100 mb-6 max-w-2xl">
                Contact us today for a free consultation and quote. Our team of experts is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                <div className="flex items-center text-white gap-2">
                  <PhoneCall className="w-5 h-5" />
                  <span>+27 123 456 789</span>
                </div>
                <div className="flex items-center text-white gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Mon-Fri: 8am - 5pm</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="w-full px-6 py-4 bg-white text-maroon-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg flex items-center justify-center gap-2 shadow-lg"
              >
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;