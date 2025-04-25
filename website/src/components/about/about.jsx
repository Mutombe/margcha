import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users,
  Target,
  CheckCircle,
  Award,
  Heart,
  Shield,
  Sparkles,
  Clock,
  LineChart,
  Building,
  Globe,
  Medal,
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100);
      
      // Detect which section is currently in view
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setShowMobileNav(false);
    }
  };

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

  const navItems = [
    { id: 'background', label: 'Background' },
    { id: 'vision-mission', label: 'Vision & Mission' },
    { id: 'values', label: 'Core Values' },
    { id: 'journey', label: 'Journey' },
    { id: 'why-choose', label: 'Why Choose Us' },
  ];

  const coreValues = [
    {
      icon: <Shield />,
      title: "Integrity",
      description: "We pride ourselves in upholding strong ethical values from individuals, departments and the organization as a whole."
    },
    {
      icon: <Users />,
      title: "Diversity and Inclusion",
      description: "We strongly believe in bringing different lived experiences and backgrounds into a shared environment where everyone has equal opportunity to work and contribute."
    },
    {
      icon: <Award />,
      title: "Quality",
      description: "The craftsmanship of our products and services is a priority and we have made a commitment towards upholding ourselves to high workmanship standards."
    },
    {
      icon: <Heart />,
      title: "Passion",
      description: "We have a remarkable sense of joy not just for the work, but also the people around us, to encourage boldness, innovation and creativity."
    },
    {
      icon: <CheckCircle />,
      title: "Accountability",
      description: "We are conscious of what is expected of us as an organization in both internal and external spaces and we stand accountable of our actions and inactions."
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Margcha Shopfitting was established as an accessible alternative for aluminium/glass products and ceilings."
    },
    {
      year: "2023",
      title: "Market Expansion",
      description: "Expanded product lines and service offerings to meet growing customer demands."
    },
    {
      year: "2024",
      title: "Regional Growth",
      description: "Began extending services to neighboring regions within SADC."
    },
    {
      year: "2025",
      title: "Innovation Focus",
      description: "Implementing technological advancements to enhance product quality and service delivery."
    }
  ];

  // Expanded accordion state
  const [expandedSection, setExpandedSection] = useState(null);
  const toggleAccordion = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Mobile Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolling ? 'bg-transparent' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center px-4 py-3">
        </div>
        
        {/* Mobile Navigation Menu */}
        {showMobileNav && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white shadow-lg rounded-b-lg overflow-hidden"
          >
            <div className="py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-6 py-3 transition-colors duration-200 ${activeSection === item.id ? 'text-maroon-600 font-medium bg-maroon-50' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => navigate('/contact')}
                className="w-full text-left px-6 py-3 mt-2 bg-maroon-600 text-white font-medium hover:bg-maroon-700 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-maroon-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
          <motion.div
            initial={{ scale: 1.2, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="/8.jpg" 
              alt="Shopfitting Background" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="block">About</span>
              <span className="block mt-2 bg-clip-text text-maroon-400">
                Margcha Shopfitting
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Revolutionizing the shopfitting industry through innovation and creativity since 2022.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-6"
            >
              <button 
                onClick={() => scrollToSection('background')}
                className="px-8 py-3 bg-maroon-600 text-white rounded-full font-medium hover:bg-maroon-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Discover Our Story
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 z-30 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="text-white/80 flex flex-col items-center"
          >
            <ChevronDown size={24} />
            <span className="text-sm font-light mt-1">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section id="background" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Background</h2>
            <div className="w-16 h-1 bg-maroon-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              {/* Mobile accordion version */}
              <div className="lg:hidden">
                {[
                  {
                    title: "Our Foundation",
                    content: "Margcha Shopfitting was founded in 2022 as an alternative that aims to enhance easy accessibility of aluminium/glass products and ceilings at affordable rates, catering for both commercial and domestic requirements."
                  },
                  {
                    title: "Our Purpose",
                    content: "Our company's purpose is to reach all segments of the market, ensuring that modern shopfitting and high-quality trends are incorporated in housing and commercial projects to promote value addition and achieve world-class standards."
                  },
                  {
                    title: "Our Approach",
                    content: "With our drive and conviction hinged on a skilled and experienced team, we set out to be one of the best shopfitting companies in Zimbabwe and within the SADC region. We make great use of technological advancement to better our products and services, customizing our offerings to accommodate multi-level customer requirements and budgets."
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex justify-between items-center w-full py-4 px-2 text-left"
                    >
                      <span className="font-medium text-lg text-gray-900">{item.title}</span>
                      {expandedSection === index ? 
                        <ChevronUp className="text-maroon-600" size={20} /> : 
                        <ChevronDown className="text-maroon-600" size={20} />
                      }
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${expandedSection === index ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                      <p className="px-2 text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Desktop version */}
              <div className="hidden lg:block space-y-4 text-gray-600">
                <p>
                  Margcha Shopfitting was founded in 2022 as an alternative that aims to enhance
                  easy accessibility of aluminium/glass products and ceilings at affordable rates,
                  catering for both commercial and domestic requirements.
                </p>
                <p>
                  Our company's purpose is to reach all segments of the market, ensuring that modern
                  shopfitting and high-quality trends are incorporated in housing and commercial projects
                  to promote value addition and achieve world-class standards.
                </p>
                <p>
                  With our drive and conviction hinged on a skilled and experienced team, we set out to be
                  one of the best shopfitting companies in Zimbabwe and within the SADC region. We make
                  great use of technological advancement to better our products and services, customizing
                  our offerings to accommodate multi-level customer requirements and budgets.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* Mobile-specific card layout */}
                <div className="lg:hidden">
                  <div className="relative h-72 w-full">
                    <img 
                      src="/8.jpg" 
                      alt="Margcha Shopfitting Team" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Excellence in Craftsmanship</h3>
                      <p className="text-gray-200">Delivering precision and quality since 2022</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop card layout */}
                <div className="hidden lg:block h-96 w-full">
                  <img 
                    src="/8.jpg" 
                    alt="Margcha Shopfitting Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">Excellence in Craftsmanship</h3>
                      <p className="text-gray-200">Delivering precision and quality since 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
            <div className="w-16 h-1 bg-maroon-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Mobile-optimized card design */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-maroon-600 to-maroon-800 p-4 md:p-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-lg">
                  To be recognized as a reputable brand that will revolutionize the shopfitting industry through
                  innovation and creativity.
                </p>
                <div className="mt-4 h-1 w-12 bg-maroon-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-maroon-600 to-maroon-800 p-4 md:p-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-lg">
                  Delivering enhanced products and services to all our customers on time and on detail.
                </p>
                <div className="mt-4 h-1 w-12 bg-maroon-600 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-maroon-600 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-maroon-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Margcha Shopfitting, our values guide everything we do – from how we interact with our clients
              to the quality of our work.
            </p>
          </motion.div>

          {/* Mobile-optimized scrollable cards */}
          <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-6">
            <div className="flex space-x-4 w-max">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 w-72 flex-shrink-0 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                    <div className="text-maroon-600">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop grid layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:grid grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-maroon-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline - Mobile Optimized */}
      <section id="journey" className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-16 h-1 bg-maroon-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tracing our path from inception to becoming a leading shopfitting company in the region.
            </p>
          </motion.div>

          {/* Mobile Timeline */}
          <div className="lg:hidden relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-maroon-200 z-0"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative z-10 mb-8 last:mb-0 ml-4 pl-8"
                >
                  <div className="absolute left-[-18px] w-9 h-9 bg-maroon-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-maroon-600">
                    <div className="font-bold text-maroon-600 text-xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-maroon-200 z-0"></div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center">
                    <div className="w-24 h-24 bg-maroon-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Optimized with Swipe Cards */}
      <section id="why-choose" className="py-16 md:py-24 bg-gradient-to-b from-maroon-900 to-maroon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Margcha</h2>
            <div className="w-16 h-1 bg-white mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-maroon-100 max-w-3xl mx-auto">
              We combine expertise with innovation to deliver exceptional results for our clients.
            </p>
          </motion.div>

          {/* Mobile swipeable cards */}
          <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-6">
            <div className="flex space-x-4 w-max">
              {[
                { icon: <Sparkles />, title: "Innovation", description: "Cutting-edge solutions tailored to modern needs" },
                { icon: <Clock />, title: "Timeliness", description: "Delivering projects on schedule, every time" },
                { icon: <Medal />, title: "Expertise", description: "Skilled craftsmen with years of industry experience" },
                { icon: <Building />, title: "Versatility", description: "Serving both commercial and residential needs" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-maroon-800/80 backdrop-blur-sm rounded-lg p-6 w-72 flex-shrink-0 shadow-lg border border-maroon-700/50"
                >
                  <div className="text-maroon-100 mb-4 flex justify-center">
                    {React.cloneElement(feature.icon, { className: "w-10 h-10" })}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-maroon-100 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop grid layout */}
            {/* Desktop grid layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:grid grid-cols-4 gap-6"
          >
            {[
              { icon: <Sparkles />, title: "Innovation", description: "Cutting-edge solutions tailored to modern needs" },
              { icon: <Clock />, title: "Timeliness", description: "Delivering projects on schedule, every time" },
              { icon: <Medal />, title: "Expertise", description: "Skilled craftsmen with years of industry experience" },
              { icon: <Building />, title: "Versatility", description: "Serving both commercial and residential needs" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-maroon-800/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg border border-maroon-700/50"
              >
                <div className="text-maroon-100 mb-4 flex justify-center">
                  {React.cloneElement(feature.icon, { className: "w-10 h-10" })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-maroon-100">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Reach - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 lg:mb-0"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Aspiration</h2>
                <div className="w-16 h-1 bg-maroon-600 rounded-full mb-6"></div>
              </motion.div>
              <p className="text-lg text-gray-600 mb-6">
                Starting from Zimbabwe, our vision extends throughout the SADC region and beyond. We aim to bring our high-quality shopfitting solutions to markets across Africa, setting new standards in the industry.
              </p>
              <p className="text-lg text-gray-600">
                By leveraging technological advancements and continuously refining our craft, we're positioned to meet the evolving needs of clients around the continent.
              </p>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/projects')}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-maroon-600 text-white rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300 flex items-center gap-2 shadow-md"
                >
                  View Our Projects <Globe className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
            
            {/* Mobile optimized card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl bg-maroon-50 p-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Globe className="w-64 h-64 text-maroon-600" />
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold text-maroon-800 mb-6 text-center">Currently Serving</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-center w-full max-w-md">
                    <div className="px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <p className="font-semibold text-xl text-gray-800">Zimbabwe</p>
                    </div>
                    <div className="px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <p className="font-semibold text-xl text-gray-800">SADC Region</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 md:py-20 bg-gradient-to-r from-maroon-50 to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's collaborate to bring your vision to life with our premium shopfitting solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/contact')}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-maroon-600 text-white rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300 shadow-md"
            >
              Contact Us Today
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;