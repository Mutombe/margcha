import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Ruler,
  GridFour,
  PaintBrush,
  Wrench,
  Scissors,
  Eye,
  CheckCircle,
  ArrowRight,
  GearSix,
  ShieldCheck,
  Medal,
  Lightbulb,
  PhoneCall,
  Clock,
  CalendarBlank,
  List,
  X,
  CaretRight,
  CaretDown,
  MapPin,
} from '@phosphor-icons/react';
import OptimizedImage from '../shared/OptimizedImage';
import SectionHeader from '../shared/SectionHeader';

/* ─── Data ─── */
const mainServices = [
  {
    id: 'fabrication',
    icon: GridFour,
    title: 'Aluminium Fabrication',
    shortTitle: 'Fabrication',
    desc: 'Premium aluminium solutions crafted with precision for commercial and residential spaces.',
    features: ['Custom Shopfronts', 'Window Systems', 'Structural Glazing', 'Security Doors', 'Display Cases'],
    products: [
      { name: 'Casement Windows', desc: 'Top-hung or side-hung sash openings, allowing maximum airflow.', image: '/1.jpg' },
      { name: 'Sliding Windows', desc: 'Light duty (Patio) or heavy duty (Galaxy) options for different applications.', image: '/2.jpg' },
      { name: 'Sliding Doors', desc: 'Smooth operation with various thickness options for residential and commercial use.', image: '/galaxysliding3.jpeg' },
      { name: 'Hinged Doors', desc: 'Full panel glass and aluminium finish for secure, high-traffic spaces.', image: '/vista1.jpeg' },
    ],
  },
  {
    id: 'joinery',
    icon: Wrench,
    title: 'Joinery Services',
    shortTitle: 'Joinery',
    desc: 'Expert woodworking solutions combining aesthetic appeal with functional excellence.',
    features: ['Custom Cabinetry', 'Display Units', 'Counter Design', 'Storage Solutions', 'Wooden Fixtures'],
    products: [
      { name: 'Office Partitions', desc: 'Glass, aluminum, layby, or drywall partitioning options.', image: '/5.jpg' },
      { name: 'Custom Cabinets', desc: 'Bespoke storage solutions tailored to your requirements.', image: '/6.jpg' },
      { name: 'Reception Counters', desc: 'Professional reception areas creating the perfect first impression.', image: '/7.jpg' },
      { name: 'Retail Displays', desc: 'Creative display solutions to showcase your products beautifully.', image: '/8.jpg' },
    ],
  },
  {
    id: 'specialized',
    icon: GearSix,
    title: 'Specialized Solutions',
    shortTitle: 'Specialized',
    desc: 'Unique offerings designed to meet specific client needs with innovative approaches.',
    features: ['Folding & Stack-away Doors', 'Curtain Walls', 'Shower Enclosures', 'Security Systems', 'Ceiling Solutions'],
    products: [
      { name: 'Folding Doors', desc: 'Flexible solutions for maximum opening space.', image: '/9.jpg' },
      { name: 'Curtain Walls', desc: 'Modern glass and aluminum facades enhancing building aesthetics.', image: '/10.jpg' },
      { name: 'Shower Enclosures', desc: 'Custom framed or frameless shower cubicles.', image: '/11.jpg' },
      { name: 'Ceiling Solutions', desc: 'Gypsum, fiberglass, wooden, metal, glass, and PVC options.', image: '/12.jpg' },
    ],
  },
];

const additionalServices = [
  { icon: Ruler, title: 'Design Consultation', desc: 'Expert guidance on materials, layouts, and finishes.' },
  { icon: GearSix, title: 'Installation Services', desc: 'Professional installation ensuring quality results.' },
  { icon: ShieldCheck, title: 'Security Solutions', desc: 'Burglar bars to access control systems for enhanced protection.' },
  { icon: PaintBrush, title: 'Finishing Works', desc: 'Professional painting and finishing touches.' },
  { icon: Eye, title: 'Visual Merchandising', desc: 'Strategic display solutions for product presentation.' },
  { icon: Clock, title: 'Maintenance', desc: 'Regular maintenance to ensure longevity of installations.' },
];

const processSteps = [
  { icon: Lightbulb, title: 'Consultation', desc: 'We discuss your needs, budget, and timeline.' },
  { icon: Ruler, title: 'Design & Measure', desc: 'Precise measurements and design concepts.' },
  { icon: GearSix, title: 'Fabrication', desc: 'Custom manufacturing with premium materials.' },
  { icon: Wrench, title: 'Installation', desc: 'Professional installation with attention to detail.' },
  { icon: CheckCircle, title: 'Quality Check', desc: 'Thorough inspection to meet high standards.' },
  { icon: Medal, title: 'Handover', desc: 'Comprehensive warranty and ongoing support.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('fabrication');
  const activeService = mainServices.find((s) => s.id === activeTab);

  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <img src="/9.jpg" alt="" loading="eager" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/80 via-maroon-950/60 to-black/70 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(74,9,9,0.25),transparent_70%)] z-[2]" />

        <div className="relative z-10 container-width text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 glass rounded-full text-body-sm font-medium mb-6">
              Our Expertise
            </span>
            <h1 className="font-heading text-display md:text-[5rem] font-bold leading-[1.05] tracking-tight mb-4 text-shadow-hero">
              Premium <span className="text-maroon-200">Services</span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Comprehensive <Link to="/about" className="hyperlink">shopfitting solutions</Link> designed
              to elevate your commercial and residential spaces across{' '}
              <Link to="/contact" className="hyperlink">Zimbabwe</Link> and beyond.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-maroon-800 rounded-xl font-heading font-semibold hover:bg-gray-100 transition-colors cursor-pointer active:scale-[0.98] transition-transform"
            >
              Explore Our Work <ArrowRight size={16} weight="bold" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Service Tabs ─── */}
      <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-[0.02]">
          <OptimizedImage
            src="/1.jpg"
            alt=""
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
        </div>

        <div className="container-width relative z-10">
          <SectionHeader label="What We Do" title="Our Core Services" />

          {/* Tab navigation */}
          <div className="flex justify-center mb-10 md:mb-14">
            <div className="inline-flex glass-light rounded-xl p-1.5 gap-1">
              {mainServices.map((s) => {
                const Icon = s.icon;
                const isActive = activeTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`relative flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-lg text-body-sm font-medium transition-all duration-300 cursor-pointer active:scale-[0.98] ${
                      isActive
                        ? 'bg-white text-maroon-700 shadow-soft dark:bg-gray-700 dark:text-maroon-400'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    <Icon size={16} weight={isActive ? 'fill' : 'regular'} />
                    <span className="hidden sm:inline">{s.title}</span>
                    <span className="sm:hidden">{s.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active service content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              {/* Description + Features */}
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12">
                <div className="lg:w-1/2">
                  <h3 className="font-heading text-h2 text-gray-900 dark:text-white mb-4">{activeService.title}</h3>
                  <p className="text-body-lg text-gray-500 dark:text-gray-400 mb-6">
                    {activeService.desc} Learn more about our{' '}
                    <Link to="/about" className="hyperlink">craftsmanship philosophy</Link> and
                    see our <Link to="/projects" className="hyperlink">completed projects</Link>.
                  </p>
                  <div className="space-y-3">
                    {activeService.features.map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle size={16} weight="fill" className="text-maroon-600 flex-shrink-0" />
                        <span className="text-body text-gray-700 dark:text-gray-200">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="btn-primary inline-flex items-center gap-2 cursor-pointer active:scale-[0.98] transition-transform"
                    >
                      Request a Quote <CaretRight size={16} weight="bold" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-elevated card-elevated cursor-pointer active:scale-[0.98] transition-transform">
                    <OptimizedImage
                      src={activeService.products[0].image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                      wrapperClassName="h-64 md:h-80"
                    />
                  </div>
                </div>
              </div>

              {/* Products grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                {activeService.products.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="card overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    <div className="relative">
                      <OptimizedImage
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        wrapperClassName="h-44"
                      />
                      {/* Gradient fade between image and text */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-950 z-10" />
                    </div>
                    <div className="p-5 md:p-6">
                      <h4 className="font-heading text-h4 text-gray-900 dark:text-white mb-1">{p.name}</h4>
                      <p className="text-body-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── Additional Services ─── */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-[0.03]">
          <OptimizedImage
            src="/5.jpg"
            alt=""
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
        </div>

        <div className="container-width relative z-10">
          <SectionHeader
            label="More We Offer"
            title="Additional Services"
            subtitle={
              <>
                A complete range of support services to ensure your{' '}
                <Link to="/projects" className="hyperlink">project's</Link> success from start to finish.
              </>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {additionalServices.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card p-5 md:p-6 hover:border-maroon-100 hover:shadow-soft transition-all duration-300 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="w-11 h-11 rounded-xl bg-maroon-50 dark:bg-maroon-900/20 flex items-center justify-center mb-4">
                  <Icon size={20} weight="duotone" className="text-maroon-600" />
                </div>
                <h3 className="font-heading text-h4 text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-body-sm text-gray-500 dark:text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Process ─── */}
      <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-[0.02]">
          <OptimizedImage
            src="/7.jpg"
            alt=""
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
        </div>

        <div className="container-width relative z-10">
          <SectionHeader
            label="How We Work"
            title="Our Process"
            subtitle={
              <>
                From initial <Link to="/contact" className="hyperlink">consultation</Link> to final
                handover, we ensure <Link to="/about" className="hyperlink">quality</Link> at every step.
              </>
            }
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
            {processSteps.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-2xl gradient-maroon flex items-center justify-center mx-auto shadow-maroon">
                    <Icon size={22} weight="fill" className="text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-maroon-100 text-maroon-700 dark:text-maroon-400 text-caption font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h4 className="font-heading text-body font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
                <p className="text-caption text-gray-500 dark:text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative section-padding text-white overflow-hidden">
        <img src="/10.jpg" alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-maroon opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/60 via-transparent to-black/40" />

        <div className="container-width text-center relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-h1 md:text-display font-bold mb-4 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-body-lg text-gray-300 max-w-2xl mx-auto mb-8">
              <Link to="/contact" className="hyperlink">Contact us</Link> today for a free consultation
              and let's bring your vision to life. View our{' '}
              <Link to="/projects" className="hyperlink">portfolio</Link> to see what we can do.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-maroon-800 rounded-xl font-heading font-semibold hover:bg-gray-100 transition-colors shadow-lg cursor-pointer active:scale-[0.98] transition-transform"
              >
                <PhoneCall size={18} weight="fill" />
                Get a Free Quote
              </Link>
              <Link
                to="/projects"
                className="btn-ghost !py-4 !px-8 cursor-pointer active:scale-[0.98] transition-transform"
              >
                View Our Work <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
