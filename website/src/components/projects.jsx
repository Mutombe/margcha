import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Eye, 
  Filter, 
  Clock,
  Star,
  X,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Share2,
  Heart,
  Menu,
  MessageSquare
} from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [favoriteProjects, setFavoriteProjects] = useState([]);
  const navigate = useNavigate();

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
      images: ["/shopfront2.jpeg", "/shopfront3.jpeg", "/shopfront1.jpeg"],
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
      images: ["/14.jpg", "/15.jpg", "/6.jpg"],
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
      images: ["/16.jpg", "/1.jpg", "/5.jpg"],
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
      images: ["/3.jpg", "/4.jpg", "/14.jpg"],
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
      images: ["/vista1.jpeg", "/vista2.jpeg", "/vista3.jpeg"],
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
      images: ["/showe1.jpeg", "/shower2.jpeg", "/shower3.jpeg"],
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

  const toggleFavorite = (projectId) => {
    setFavoriteProjects(prev => {
      if (prev.includes(projectId)) {
        return prev.filter(id => id !== projectId);
      } else {
        return [...prev, projectId];
      }
    });
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'shopfront', name: 'Shop Fronts' },
    { id: 'partition', name: 'Office Partitions' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'specialized', name: 'Specialized' }
  ];

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } }
  };

  const slideInVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', damping: 25, stiffness: 500 } },
    exit: { x: '100%', transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen pt-14 bg-gray-50">
      {/* Mobile Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-12 bg-gradient-to-r from-maroon-900 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover our premium shopfitting solutions across Zimbabwe
          </motion.p>
        </div>
        
        {/* Floating action button for filter on mobile */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => setFilterMenuOpen(true)}
          className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-maroon-600 text-white shadow-lg flex items-center justify-center md:hidden"
        >
          <Filter size={24} />
        </motion.button>
      </motion.section>

      {/* Filter Panel - Only visible on desktop */}
      <section className="py-6 bg-white shadow-sm sticky top-14 z-20 hidden md:block">
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

      {/* Filter Slide-in Menu for Mobile */}
      <AnimatePresence>
        {filterMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setFilterMenuOpen(false)}
            />
            <motion.div
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-3xl overflow-hidden shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Filter Projects</h3>
                  <button 
                    onClick={() => setFilterMenuOpen(false)}
                    className="p-2 rounded-full bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setFilter(category.id);
                        setFilterMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        filter === category.id 
                          ? 'bg-maroon-600 text-white shadow-md' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setFilterMenuOpen(false)}
                  className="w-full py-4 bg-maroon-600 text-white font-medium rounded-xl"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Projects Grid */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Filter Display for Mobile */}
          <div className="flex items-center mb-4 md:hidden">
            <span className="text-sm text-gray-500 mr-2">Filter:</span>
            <span className="px-3 py-1 bg-maroon-100 text-maroon-800 rounded-full text-sm font-medium">
              {categories.find(c => c.id === filter)?.name || 'All Projects'}
            </span>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-60">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-maroon-600"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-600">No projects found</h3>
              <p className="text-gray-500 mt-2">Please try another filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Project Image with Gradient Overlay */}
                  <div className="relative">
                    <img 
                      src={project.images[0]}
                      alt={project.title} 
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Category Label */}
                    <div className="absolute top-4 right-4 bg-maroon-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-200 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    
                    {/* Favorite Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(project.id);
                      }}
                      className="absolute top-4 left-4 p-2 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                      <Heart 
                        size={18} 
                        className={`${favoriteProjects.includes(project.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} 
                      />
                    </button>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center text-gray-600 mb-3 text-sm">
                      <Clock size={16} className="mr-1 text-maroon-600" />
                      <span>{project.completionDate}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-5 text-sm line-clamp-3">{project.description}</p>
                    
                    {/* Features */}
                    <div className="mb-5 grid grid-cols-2 gap-y-2 gap-x-3">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700 text-xs">
                          <CheckCircle size={14} className="text-maroon-600 mr-1 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* View Details Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openProjectDetails(project)}
                      className="w-full mt-auto px-4 py-3 bg-maroon-600 text-white rounded-xl text-sm font-medium transition-colors duration-300 flex items-center justify-center"
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-4xl max-h-full overflow-auto bg-white rounded-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeProjectDetails}
                className="absolute right-4 top-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>
              
              {/* Image Gallery Section */}
              <div className="md:w-1/2 bg-gray-900 relative">
                {/* Image Gallery */}
                <div className="relative h-72 md:h-full w-full">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Image Navigation */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full ${
                          idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {currentImageIndex + 1}/{selectedProject.images.length}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 md:w-1/2 overflow-y-auto">
                <div className="mb-2 flex items-center gap-2">
                  <span className="px-3 py-1 bg-maroon-100 text-maroon-800 text-xs font-medium rounded-full">
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {selectedProject.completionDate}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                
                <div className="flex items-center text-gray-600 mb-4 text-sm">
                  <MapPin size={16} className="mr-1 text-maroon-600" />
                  <span>{selectedProject.location}</span>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle size={16} className="text-maroon-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-gray-50 p-4 rounded-xl mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                      <MessageSquare size={18} className="mr-2 text-maroon-600" />
                      Client Feedback
                    </h3>
                    <div className="mb-3 italic text-gray-600">
                      "{selectedProject.testimonial.text}"
                    </div>
                    <div className="text-right text-sm text-gray-700 font-medium">
                      - {selectedProject.testimonial.author}
                    </div>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="flex-1 py-3 bg-maroon-600 text-white rounded-xl font-medium flex items-center justify-center"
                  >
                    <ArrowRight size={18} className="mr-2" />
                    Request Similar Project
                  </button>
                  <button className="py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium flex items-center justify-center">
                    <Share2 size={18} className="mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-maroon-800 to-gray-900 text-white mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something exceptional for your space. Our team is ready to bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/contact')}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-maroon-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            Contact Us Today <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;