import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Ruler,
  Grid,
  Paintbrush,
  Store,
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
  Calendar
} from 'lucide-react';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('fabrication');
  const navigate = useNavigate();
  
  const mainServices = [
    {
      id: 'fabrication',
      icon: <Grid className="w-8 h-8" />,
      title: "Aluminium Fabrication",
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
          image: "/3.jpg"
        },
        {
          name: "Hinged Doors",
          description: "Full panel glass and aluminium finish for secure spaces with high traffic volumes.",
          image: "/4.jpg"
        }
      ]
    },
    {
      id: 'joinery',
      icon: <Construction className="w-8 h-8" />,
      title: "Joinery Services",
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
      icon: <Cog className="w-8 h-8" />,
      title: "Specialized Solutions",
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

  const activeService = mainServices.find(service => service.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-32 pb-20 md:py-40 bg-gradient-to-r from-maroon-900 to-gray-900"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Comprehensive Shopfitting Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-10"
          >
            Transform your commercial space with our expert fabrication, joinery, and specialized solutions tailored to your unique requirements.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-3 bg-maroon-600 hover:bg-maroon-700 text-white rounded-lg font-semibold transition-colors duration-300" onClick={() =>Navigate('/projects')}>
              View Our Portfolio
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg font-semibold transition-colors duration-300">
              Request a Quote
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Tabs Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Our Premium Services
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
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

          {/* Active Service Display */}
          {activeService && (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center mb-8 gap-6">
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

                <h4 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">Featured Products</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {activeService.products.map((product, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h5>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                        <button className="mt-4 flex items-center text-maroon-600 font-medium hover:text-maroon-700 transition-colors duration-300">
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

      {/* Our Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final handover, we ensure a seamless and professional experience at every step.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

      {/* Additional Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complementary offerings to enhance your project and ensure a comprehensive solution.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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

      {/* Testimonials Section */}
      <section className="py-20 bg-maroon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from businesses who have transformed their spaces with our solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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

      {/* Contact CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-maroon-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-lg text-maroon-100 mb-6 max-w-2xl">
                Contact us today for a free consultation and quote. Our team of experts is ready to bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-white gap-2">
                  <PhoneCall className="w-5 h-5" />
                  <span>+27 123 456 789</span>
                </div>
                <div className="flex items-center text-white gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Mon-Fri: 8am - 5pm</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-white text-maroon-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg flex items-center justify-center gap-2"
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