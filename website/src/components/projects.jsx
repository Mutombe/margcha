import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Eye,
  Funnel,
  Clock,
  Star,
  X,
  MapPin,
  CalendarBlank,
  CaretLeft,
  CaretRight,
  ShareNetwork,
  Heart,
  ChatCircle,
} from '@phosphor-icons/react';
import OptimizedImage from './shared/OptimizedImage';
import SectionHeader from './shared/SectionHeader';

/* ─── Data ─── */
const allProjects = [
  {
    id: 1,
    title: 'Premium Retail Shopfront',
    category: 'shopfront',
    location: 'Harare CBD',
    description:
      'Custom aluminum shopfront with large display windows and automatic sliding doors for a high-end clothing retailer.',
    completionDate: 'January 2024',
    features: ['Frameless Glass Display', 'Automated Doors', 'LED Integration', 'Custom Signage'],
    images: ['/shopfront2.jpeg', '/shopfront3.jpeg', '/shopfront1.jpeg'],
    testimonial: {
      text: 'Margcha transformed our retail space with exceptional craftsmanship. The shopfront has significantly increased foot traffic.',
      author: 'Fashion Retailer, Harare',
    },
  },
  {
    id: 2,
    title: 'Office Complex Partitioning',
    category: 'partition',
    location: 'Msasa Business Park',
    description:
      'Complete office partitioning solution with aluminum and glass divisions, creating an open yet structured workspace.',
    completionDate: 'March 2024',
    features: ['Sound-Proof Glass', 'Modular Design', 'Integrated Blinds', 'Custom Door Systems'],
    images: ['/14.jpg', '/15.jpg', '/6.jpg'],
    testimonial: {
      text: 'The partitioning system perfectly balances privacy and openness. The quality exceeded our expectations.',
      author: 'Corporate Services Manager',
    },
  },
  {
    id: 3,
    title: 'Luxury Home Windows & Doors',
    category: 'residential',
    location: 'Borrowdale, Harare',
    description:
      'Complete replacement with premium aluminum systems for improved security, insulation, and aesthetics.',
    completionDate: 'February 2024',
    features: ['Thermal Break Technology', 'Multi-Point Locking', 'Custom Finishes', 'UV Protection Glass'],
    images: ['/16.jpg', '/1.jpg', '/5.jpg'],
    testimonial: {
      text: 'The new windows and doors have improved both security and energy efficiency. Outstanding quality.',
      author: 'Homeowner, Borrowdale',
    },
  },
  {
    id: 4,
    title: 'Banking Hall Renovation',
    category: 'commercial',
    location: 'Avondale, Harare',
    description:
      'Complete renovation with security glass partitions, custom counters, and aluminum framework.',
    completionDate: 'April 2024',
    features: ['Bulletproof Glass', 'Secure Counter Systems', 'Custom Branding', 'Queue Management'],
    images: ['/3.jpg', '/4.jpg', '/14.jpg'],
    testimonial: {
      text: "Margcha's attention to detail and ability to work within our security requirements was exceptional.",
      author: 'Bank Operations Director',
    },
  },
  {
    id: 5,
    title: 'Restaurant Folding Doors',
    category: 'commercial',
    location: "Sam Levy's Village, Harare",
    description:
      'Installation of folding glass doors creating flexible indoor-outdoor dining space.',
    completionDate: 'May 2024',
    features: ['Weather-Resistant', 'Smooth Operation', 'Custom Sizing', 'Sound Insulation'],
    images: ['/vista1.jpeg', '/vista3.jpeg'],
    testimonial: {
      text: 'The folding doors revolutionized our dining experience with seamless indoor-outdoor connection.',
      author: 'Restaurant Owner',
    },
  },
  {
    id: 6,
    title: 'Hotel Shower Enclosures',
    category: 'specialized',
    location: 'Victoria Falls',
    description:
      'Custom frameless shower enclosures for 35 premium hotel rooms with premium hardware.',
    completionDate: 'June 2024',
    features: ['Frameless Design', 'Anti-Scale Glass', 'Premium Hardware', 'Custom Etching'],
    images: ['/showe1.jpeg', '/shower2.jpeg', '/shower3.jpeg'],
    testimonial: {
      text: 'Exceptional quality shower enclosures that perfectly complement our luxury rooms.',
      author: 'Hospitality Manager, Victoria Falls',
    },
  },
  {
    id: 7,
    title: 'Kadoma Steel to Aluminum Conversion',
    category: 'residential',
    location: 'Kadoma',
    description:
      'Complete conversion of outdated steel fixtures to modern aluminum and glass systems.',
    completionDate: 'July 2024',
    features: ['Steel Removal', 'Energy Efficient Glass', 'Modern Frames', 'Enhanced Security'],
    images: [
      '/compo/1.jpeg',
      '/compo/2.jpeg',
      '/compo/3.jpeg',
      '/compo/4.jpeg',
      '/compo/5.jpeg',
      '/compo/6.jpeg',
    ],
    testimonial: {
      text: 'Margcha seamlessly converted our old steel fixtures. The transformation is dramatic.',
      author: 'Property Owner, Kadoma',
    },
  },
  {
    id: 8,
    title: 'ZTA Security Installation',
    category: 'specialized',
    location: 'Harare',
    description:
      'Retractable security burglar bars for Zimbabwe Tourism Authority offices.',
    completionDate: 'August 2024',
    features: ['Retractable Design', 'High-Strength Materials', 'Emergency Release', 'Powder-Coated'],
    images: [
      '/2/1.jpeg',
      '/2/2.jpeg',
      '/2/3.jpeg',
      '/2/4.jpeg',
      '/2/5.jpeg',
      '/2/6.jpeg',
      '/2/7.jpeg',
    ],
    testimonial: {
      text: 'The retractable burglar bars provide security while maintaining a professional appearance.',
      author: 'Facilities Manager, ZTA',
    },
  },
  {
    id: 9,
    title: 'Mt Pleasant Residential',
    category: 'residential',
    location: 'Mt Pleasant, Harare',
    description:
      'Complete aluminum windows and doors installation for a modern family home.',
    completionDate: 'September 2024',
    features: ['Slim Profile Frames', 'Double Glazing', 'Color Matching', 'Advanced Locking'],
    images: [
      '/3/1.jpeg',
      '/3/2.jpeg',
      '/3/3.jpeg',
      '/3/4.jpeg',
      '/3/5.jpeg',
      '/3/6.jpeg',
      '/3/7.jpeg',
    ],
    testimonial: {
      text: 'Professional from consultation to installation. Completely modernized our home.',
      author: 'Homeowner, Mt Pleasant',
    },
  },
  {
    id: 10,
    title: 'Crowhill Premium Installation',
    category: 'residential',
    location: 'Crowhill, Harare',
    description:
      'High-end aluminum windows and doors combining luxury aesthetics with superior performance.',
    completionDate: 'October 2024',
    features: ['Premium Systems', 'Architectural Glass', 'Custom Hardware', 'Integrated Screens'],
    images: [
      '/4/1.jpeg',
      '/4/2.jpeg',
      '/4/3.jpeg',
      '/4/4.jpeg',
      '/4/5.jpeg',
      '/4/6.jpeg',
      '/4/7.jpeg',
    ],
    testimonial: {
      text: 'Every detail was executed perfectly, from measurements to final installation.',
      author: 'Homeowner, Crowhill',
    },
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'shopfront', name: 'Shop Fronts' },
  { id: 'partition', name: 'Partitions' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'specialized', name: 'Specialized' },
];

/* ─── Modal ─── */
const ProjectModal = ({ project, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 glass-dark"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-gray-900 rounded-3xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 w-9 h-9 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-soft flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
        >
          <X size={18} weight="bold" />
        </button>

        {/* Image gallery */}
        <div className="md:w-1/2 bg-gray-900 relative flex-shrink-0">
          <div className="relative h-64 md:h-full min-h-[300px]">
            <OptimizedImage
              src={project.images[imgIdx]}
              alt={`${project.title} ${imgIdx + 1}`}
              className="w-full h-full object-cover"
              wrapperClassName="w-full h-full"
              priority
            />
            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === imgIdx ? 'bg-white w-5' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setImgIdx((p) => (p === 0 ? project.images.length - 1 : p - 1))
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50"
                >
                  <CaretLeft size={18} weight="bold" />
                </button>
                <button
                  onClick={() =>
                    setImgIdx((p) => (p === project.images.length - 1 ? 0 : p + 1))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50"
                >
                  <CaretRight size={18} weight="bold" />
                </button>
              </>
            )}
            <div className="absolute top-3 left-3 bg-black/50 text-white text-caption px-2 py-0.5 rounded">
              {imgIdx + 1}/{project.images.length}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-5 md:p-7 overflow-y-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-maroon-50 dark:bg-maroon-900/20 text-maroon-700 dark:text-maroon-400 text-caption font-medium rounded-full">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
            <span className="text-caption text-gray-400 flex items-center gap-1">
              <CalendarBlank size={12} weight="regular" /> {project.completionDate}
            </span>
          </div>
          <h2 className="font-heading text-h3 text-gray-900 dark:text-white mb-2">{project.title}</h2>
          <div className="flex items-center gap-1.5 text-body-sm text-gray-500 dark:text-gray-400 mb-4">
            <MapPin size={14} weight="fill" className="text-maroon-600" />
            {project.location}
          </div>
          <p className="text-body text-gray-600 dark:text-gray-300 mb-5">{project.description}</p>

          <h3 className="font-heading text-body font-semibold text-gray-900 dark:text-white mb-3">
            Key Features
          </h3>
          <div className="grid grid-cols-2 gap-2 mb-5">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-body-sm text-gray-600 dark:text-gray-300">
                <CheckCircle size={14} weight="fill" className="text-maroon-600 flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>

          {project.testimonial && (
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 mb-5">
              <div className="flex items-center gap-2 mb-2">
                <ChatCircle size={14} weight="fill" className="text-maroon-600" />
                <h3 className="text-body-sm font-semibold text-gray-900 dark:text-white">Client Feedback</h3>
              </div>
              <p className="text-body-sm text-gray-600 dark:text-gray-300 italic mb-2">
                &ldquo;{project.testimonial.text}&rdquo;
              </p>
              <p className="text-caption text-gray-500 dark:text-gray-400 text-right">
                — {project.testimonial.author}
              </p>
            </div>
          )}

          <div className="flex gap-3 mt-5">
            <Link
              to="/contact"
              className="btn-primary flex-1 !justify-center !text-body-sm"
              onClick={onClose}
            >
              <ArrowRight size={16} weight="bold" /> Request Similar
            </Link>
            <button className="btn-ghost w-10 h-10 !p-0 flex items-center justify-center rounded-xl">
              <ShareNetwork size={18} weight="regular" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Main ─── */
const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState(allProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setProjects(
      filter === 'all' ? allProjects : allProjects.filter((p) => p.category === filter)
    );
  }, [filter]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <img src="/shopfront2.jpeg" alt="" loading="eager" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/80 via-maroon-950/60 to-black/70 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-[2]" />

        <div className="relative z-10 py-24 md:py-32">
          <div className="container-width text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 glass rounded-full text-body-sm font-medium mb-5">
                <Star size={14} weight="fill" className="inline mr-1.5 -mt-0.5" />
                Portfolio
              </span>
              <h1 className="font-heading text-display md:text-[5rem] font-bold tracking-tight mb-4 text-shadow-hero">
                Our Projects
              </h1>
              <p className="text-body-lg text-gray-300 max-w-2xl mx-auto">
                Discover our premium shopfitting solutions across Zimbabwe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Filter bar — desktop (sticky) ── */}
      <section className="py-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-soft sticky top-16 lg:top-18 z-20 hidden md:block">
        <div className="container-width">
          <div className="flex items-center gap-2">
            <Funnel size={16} weight="bold" className="text-maroon-600 mr-1" />
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-lg text-body-sm font-medium transition-all duration-300 ${
                  filter === c.id
                    ? 'bg-maroon-700 text-white shadow-maroon'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {c.name}
              </button>
            ))}
            <span className="ml-auto text-caption text-gray-400 dark:text-gray-400">
              {projects.length} project{projects.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* ── Mobile filter FAB ── */}
      <button
        onClick={() => setFilterOpen(true)}
        className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-maroon-700 text-white shadow-elevated flex items-center justify-center md:hidden active:scale-[0.95] transition-transform"
      >
        <Funnel size={22} weight="bold" />
      </button>

      {/* ── Mobile filter bottom sheet (glassmorphism) ── */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setFilterOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl shadow-elevated bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-white/20"
            >
              <div className="p-6">
                {/* Handle */}
                <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4" />
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-heading text-h4 text-gray-900 dark:text-white">Filter Projects</h3>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
                  >
                    <X size={18} weight="bold" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setFilter(c.id);
                        setFilterOpen(false);
                      }}
                      className={`px-4 py-3 rounded-xl text-body-sm font-medium transition-all ${
                        filter === c.id
                          ? 'bg-maroon-700 text-white shadow-maroon'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Projects grid ── */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-width">
          {/* Active filter pill (mobile) */}
          <div className="flex items-center gap-2 mb-6 md:hidden">
            <span className="text-caption text-gray-400">Showing:</span>
            <span className="px-3 py-1 bg-maroon-50 dark:bg-maroon-900/20 text-maroon-700 dark:text-maroon-400 rounded-full text-caption font-medium">
              {categories.find((c) => c.id === filter)?.name}
            </span>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-20">
              <Funnel size={40} weight="light" className="text-gray-300 mx-auto mb-4" />
              <h3 className="font-heading text-h4 text-gray-500 dark:text-gray-400">No projects found</h3>
              <p className="text-body-sm text-gray-400 dark:text-gray-500 mt-2">Try another filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="card card-elevated overflow-hidden flex flex-col group cursor-pointer active:scale-[0.98] transition-transform"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Card image area */}
                  <div className="relative">
                    <OptimizedImage
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      wrapperClassName="h-56"
                    />
                    {/* Gradient fade between image and text */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />

                    <span className="absolute top-3 right-3 px-3 py-1 bg-maroon-700 text-white text-caption font-medium rounded-full z-10">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFavorites((p) =>
                          p.includes(project.id)
                            ? p.filter((x) => x !== project.id)
                            : [...p, project.id]
                        );
                      }}
                      className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center z-10"
                    >
                      <Heart
                        size={15}
                        weight={favorites.includes(project.id) ? 'fill' : 'regular'}
                        className={
                          favorites.includes(project.id)
                            ? 'text-red-500'
                            : 'text-white'
                        }
                      />
                    </button>
                    <div className="absolute bottom-4 left-0 right-0 px-4 z-20">
                      <h3 className="font-heading text-h4 text-gray-900 dark:text-white mb-0.5">
                        {project.title}
                      </h3>
                      <span className="text-caption text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <MapPin size={12} weight="fill" /> {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Card text area */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center text-body-sm text-gray-400 mb-3">
                      <Clock size={14} weight="regular" className="mr-1.5 text-maroon-600" />
                      {project.completionDate}
                    </div>
                    <p className="text-body-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 mb-5">
                      {project.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-center text-caption text-gray-600 dark:text-gray-300">
                          <CheckCircle
                            size={12}
                            weight="fill"
                            className="text-maroon-600 mr-1 flex-shrink-0"
                          />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="mt-auto w-full btn-primary !justify-center !text-body-sm !rounded-xl"
                    >
                      <Eye size={15} weight="bold" /> View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* ── CTA with blended bg image ── */}
      <section className="relative overflow-hidden">
        <img src="/shopfront3.jpeg" alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-maroon opacity-80" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 section-padding text-white">
          <div className="container-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                label="Get Started"
                title="Ready to Start Your Project?"
                subtitle="Let's create something exceptional for your space. Our team is ready to bring your vision to life."
                light
              />
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-maroon-800 dark:text-maroon-300 rounded-xl font-heading font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contact Us Today <ArrowRight size={18} weight="bold" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
