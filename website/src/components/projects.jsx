import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Eye, 
  Filter, 
  Clock,
  Star
} from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock projects data - in a real implementation this would come from an API
  const allProjects = [
    {
      id: 1,
      title: "Premium Retail Shopfront",
      category: "shopfront",
      location: "Harare CBD",
      description: "Custom aluminum shopfront with large display windows and automatic sliding doors for a high-end clothing retailer.",
      completionDate: "January 2024",
      features: ["Frameless Glass Display", "Automated Doors", "LED Integration", "Custom Signage"],
      images: ["/11.jpg", "/12.jpg"],
      testimonial: {
        text: "Margcha transformed our retail space with their exceptional craftsmanship. The shopfront has significantly increased foot traffic and customer engagement.",
        author: "Fashion Retailer, Harare"
      }
    },
    {
      id: 2,
      title: "Office Complex Partitioning",
      category: "partition",
      location: "Msasa Business Park",
      description: "Complete office partitioning solution with aluminum and glass divisions, creating an open yet structured workspace.",
      completionDate: "March 2024",
      features: ["Sound-Proof Glass", "Modular Design", "Integrated Blinds", "Custom Door Systems"],
      images: ["/14.jpg", "/15.jpg"],
      testimonial: {
        text: "The partitioning system designed by Margcha perfectly balances privacy and openness. The quality of materials and installation exceeded our expectations.",
        author: "Corporate Services Manager"
      }
    },
    {
      id: 3,
      title: "Luxury Home Windows & Doors",
      category: "residential",
      location: "Borrowdale, Harare",
      description: "Complete replacement of windows and doors with premium aluminum systems for improved security, insulation, and aesthetics.",
      completionDate: "February 2024",
      features: ["Thermal Break Technology", "Multi-Point Locking", "Custom Finishes", "UV Protection Glass"],
      images: ["/16.jpg", "1.jpg"],
      testimonial: {
        text: "The quality of workmanship and materials used by Margcha has transformed our home. The new windows and doors have improved both security and energy efficiency.",
        author: "Homeowner, Borrowdale"
      }
    },
    {
      id: 4,
      title: "Banking Hall Renovation",
      category: "commercial",
      location: "Avondale, Harare",
      description: "Complete renovation of banking hall with security glass partitions, custom counters, and aluminum framework throughout.",
      completionDate: "April 2024",
      features: ["Bulletproof Glass", "Secure Counter Systems", "Custom Branding Elements", "Queue Management Integration"],
      images: ["/3.jpg", "/4.jpg"],
      testimonial: {
        text: "Margcha's attention to detail and ability to work within our security requirements was exceptional. The finished banking hall is both functional and aesthetically pleasing.",
        author: "Bank Operations Director"
      }
    },
    {
      id: 5,
      title: "Restaurant Folding Doors",
      category: "commercial",
      location: "Sam Levy's Village, Harare",
      description: "Installation of folding glass doors to create flexible indoor-outdoor dining space for an upscale restaurant.",
      completionDate: "May 2024",
      features: ["Weather-Resistant Design", "Smooth Operation System", "Custom Sizing", "Enhanced Sound Insulation"],
      images: ["/5.jpg", "/6.jpg"],
      testimonial: {
        text: "The folding doors have revolutionized our dining experience, allowing us to adapt to weather changes while maintaining a seamless connection to our outdoor space.",
        author: "Restaurant Owner"
      }
    },
    {
      id: 6,
      title: "Hotel Shower Enclosures",
      category: "specialized",
      location: "Victoria Falls",
      description: "Custom shower enclosures for 35 premium hotel rooms, featuring frameless glass design and premium hardware.",
      completionDate: "June 2024",
      features: ["Frameless Design", "Anti-Scale Glass", "Premium Hardware", "Custom Etching"],
      images: ["/8.jpg", "/9.jpg"],
      testimonial: {
        text: "Margcha delivered exceptional quality shower enclosures that perfectly complement our luxury rooms. Their installation team was professional and efficient.",
        author: "Hospitality Manager, Victoria Falls"
      }
    }
  ];

  useEffect(() => {
    // Simulate loading from API
    setTimeout(() => {
      if (filter === 'all') {
        setProjects(allProjects);
      } else {
        setProjects(allProjects.filter(project => project.category === filter));
      }
      setIsLoading(false);
    }, 500);
  }, [filter]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'shopfront', name: 'Shop Fronts' },
    { id: 'partition', name: 'Office Partitions' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'specialized', name: 'Specialized' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-gradient-to-r from-maroon-900 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Completed Projects
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover our portfolio of premium shopfitting solutions delivered across Zimbabwe
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Filter className="text-maroon-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Projects</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  filter === category.id 
                    ? 'bg-maroon-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-60">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-maroon-600"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-600">No projects found in this category</h3>
              <p className="text-gray-500 mt-2">Please try another filter or check back later</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative">
                    <img 
                      src={project.images[0]}
                      alt={project.title} 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-maroon-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4 text-sm">
                      <Clock size={16} className="mr-1" />
                      <span>{project.completionDate}</span>
                      <span className="mx-2">•</span>
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-700 text-sm">
                            <CheckCircle size={14} className="text-maroon-600 mr-1" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Testimonial Preview */}
                    {project.testimonial && (
                      <div className="bg-gray-50 p-3 rounded-lg mb-4 text-sm">
                        <div className="flex items-start mb-2">
                          <Star size={16} className="text-yellow-500 mr-1 mt-1" />
                          <div className="italic text-gray-600 line-clamp-2">"{project.testimonial.text}"</div>
                        </div>
                        <div className="text-right text-xs text-gray-500">
                          - {project.testimonial.author}
                        </div>
                      </div>
                    )}
                    
                    {/* View Details Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                    >
                      <Eye size={16} className="mr-2" />
                      View Project Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something exceptional for your space. Our team is ready to bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-maroon-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            Contact Us Today <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;