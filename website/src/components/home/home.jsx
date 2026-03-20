import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone, EnvelopeSimple, CaretDown, ShieldCheck, Medal, ArrowRight,
  Clock, CheckCircle, CreditCard, Star, Buildings, Hammer, GearSix,
  ArrowUpRight, Quotes, Sparkle, Lightning, Handshake, Users,
} from '@phosphor-icons/react';
import { IoLogoWhatsapp } from 'react-icons/io';
import OptimizedImage from '../shared/OptimizedImage';
import SectionHeader from '../shared/SectionHeader';

/* ─── Hero ─── */
const heroImages = ['/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg', '/11.jpg'];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Blended backgrounds */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div key={img} className={`absolute inset-0 transition-opacity duration-[2000ms] ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            <img src={img} alt="" loading={i === 0 ? 'eager' : 'lazy'} className="w-full h-full object-cover scale-105" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/80 via-maroon-950/60 to-maroon-900/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent z-20" />
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-white' : 'w-3 bg-white/30'}`} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 container-width py-24 md:py-0">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="w-full xl:w-3/5 text-center xl:text-left">
            <div className="glass inline-flex items-center gap-2 px-4 py-2 text-white text-caption font-semibold mb-6">
              <Medal size={14} weight="fill" className="text-yellow-300" />
              PREMIER ALUMINIUM FABRICATION & JOINERY
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 text-shadow-hero">
              Crafting Excellence in{' '}
              <span className="bg-gradient-to-r from-maroon-200 to-white bg-clip-text text-transparent">
                Shopfitting Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto xl:mx-0 leading-relaxed">
              Specialized in premium <Link to="/services" className="text-maroon-200 hover:text-white underline decoration-maroon-300/50 underline-offset-2 transition-colors">aluminium fabrication</Link> and{' '}
              <Link to="/services" className="text-maroon-200 hover:text-white underline decoration-maroon-300/50 underline-offset-2 transition-colors">joinery</Link>, delivering exceptional craftsmanship for your{' '}
              <Link to="/projects" className="text-maroon-200 hover:text-white underline decoration-maroon-300/50 underline-offset-2 transition-colors">commercial and residential spaces</Link>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-3 sm:gap-4 mb-10">
              <Link to="/services" className="btn-primary !py-4 !px-8 !text-base !rounded-2xl">
                Our Services <ArrowRight size={18} weight="bold" />
              </Link>
              <Link to="/projects" className="btn-ghost !py-4 !px-8 !text-base !rounded-2xl">
                View Projects
              </Link>
            </div>

            <div className="flex flex-wrap justify-center xl:justify-start gap-x-5 gap-y-3">
              {[
                { icon: ShieldCheck, text: 'Licensed & Insured', color: 'text-green-400' },
                { icon: Medal, text: 'Quality Guaranteed', color: 'text-yellow-400' },
                { icon: Clock, text: 'On-Time Delivery', color: 'text-blue-400' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-2 text-white/60">
                  <Icon size={16} weight="fill" className={color} />
                  <span className="text-body-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — glass payment card */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }} className="w-full max-w-md xl:w-2/5">
            <div className="glass-dark backdrop-blur-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-maroon-700/60 to-maroon-900/40 text-white py-6 px-6 text-center border-b border-white/10">
                <Star size={28} weight="fill" className="text-yellow-300 mx-auto mb-3" />
                <h3 className="font-heading text-xl font-bold tracking-wide mb-3">WE ARE</h3>
                <div className="space-y-0.5 font-heading font-bold text-lg">
                  {['TRUSTWORTHY', 'FLEXIBLE', 'AFFORDABLE', 'ON POINT', '& ON TIME'].map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-white/5">
                <h4 className="font-heading text-lg font-bold text-white text-center mb-1">
                  Get it in <span className="text-yellow-300">3 Installments</span>
                </h4>
                <p className="text-body-sm text-white/50 text-center mb-5">Flexible payment terms</p>
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  {[
                    { step: '1', amount: '60%', desc: 'Deposit' },
                    { step: '2', amount: '20%', desc: 'Day 31' },
                    { step: '3', amount: '20%', desc: 'Final' },
                  ].map((item) => (
                    <div key={item.step} className="glass rounded-xl p-3 text-center">
                      <p className="text-caption font-semibold text-white/60">Step {item.step}</p>
                      <p className="text-xl font-bold text-yellow-300">{item.amount}</p>
                      <p className="text-caption text-white/50">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary w-full !justify-center !rounded-xl !bg-white !text-maroon-800 hover:!bg-gray-100 !shadow-none">
                  <CreditCard size={16} weight="bold" />
                  Try our payment terms
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center text-white/40">
        <span className="text-caption mb-2">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <CaretDown size={18} weight="bold" />
        </motion.div>
      </motion.div>

      {/* FABs */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5">
        <a href="https://wa.me/263783574677?text=Hello%20Margcha%20Shopfitting" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-elevated hover:bg-green-600 active:scale-95 transition-all">
          <IoLogoWhatsapp size={22} />
        </a>
        <a href="tel:+263783574677"
          className="w-12 h-12 rounded-full bg-maroon-700 text-white flex items-center justify-center shadow-elevated hover:bg-maroon-800 active:scale-95 transition-all">
          <Phone size={18} weight="bold" />
        </a>
      </div>
    </section>
  );
};

/* ─── Why Choose Us ─── */
const whyItems = [
  { icon: Medal, title: 'Quality', desc: 'Premium materials and craftsmanship in every project' },
  { icon: Clock, title: 'Timeliness', desc: 'On-time project delivery, every time' },
  { icon: GearSix, title: 'Expertise', desc: 'Skilled professionals with years of experience' },
  { icon: CreditCard, title: 'Flexible', desc: 'Convenient payment terms available' },
];

const WhySection = () => (
  <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
    {/* Subtle bg image */}
    <div className="absolute inset-0 opacity-[0.03]">
      <img src="/14.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="container-width relative z-10">
      <SectionHeader label="Why Us" title="Why Choose Margcha?"
        subtitle={<>Our commitment to quality sets us apart. See our <Link to="/projects" className="hyperlink">completed projects</Link> and <Link to="/about" className="hyperlink">our story</Link>.</>} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {whyItems.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass-light p-5 md:p-6 text-center group cursor-pointer hover:shadow-card-hover transition-all duration-500 active:scale-[0.98]">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-maroon-50 dark:bg-maroon-900/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-100 transition-colors">
              <Icon size={24} weight="duotone" className="text-maroon-600" />
            </div>
            <h3 className="font-heading text-h4 text-gray-900 dark:text-white mb-1">{title}</h3>
            <p className="text-body-sm text-gray-500 dark:text-gray-400">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Product Showcase — cards with faded image transitions ─── */
const products = [
  { title: 'Aluminium Windows', desc: 'Energy-efficient, stylish windows for any architectural style.', image: '/window.jpg', link: '/services' },
  { title: 'Folding Doors', desc: 'Space-saving doors creating seamless indoor-outdoor transitions.', image: '/door2.jpg', link: '/services' },
  { title: 'Custom Shopfitting', desc: 'Bespoke solutions for retail and commercial environments.', image: '/custom.jpg', link: '/projects' },
];

const ProductShowcase = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Blended bg */}
    <div className="absolute inset-0">
      <img src="/13.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gray-50/95 dark:bg-gray-900/95" />
    </div>
    <div className="container-width relative z-10">
      <SectionHeader label="Our Products" title="Premium Solutions"
        subtitle={<>Exceptional quality <Link to="/services" className="hyperlink">aluminium solutions</Link> for commercial and residential spaces.</>} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {products.map((product, i) => (
          <motion.div key={product.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="card overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform">
            <Link to={product.link}>
              {/* Image with fade-out bottom */}
              <div className="relative overflow-hidden">
                <OptimizedImage src={product.image} alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  wrapperClassName="h-48 md:h-56" />
                {/* Gradient fade from image into card body */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-950 z-10" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-maroon-900/0 group-hover:bg-maroon-900/20 transition-colors duration-500 z-5" />
              </div>
              <div className="p-5 md:p-6 -mt-3 relative z-10">
                <h3 className="font-heading text-h4 text-gray-900 dark:text-white mb-2 group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">{product.title}</h3>
                <p className="text-body-sm text-gray-500 dark:text-gray-400 mb-3">{product.desc}</p>
                <span className="inline-flex items-center text-maroon-600 text-body-sm font-medium group-hover:gap-2 gap-1 transition-all">
                  <CheckCircle size={15} weight="fill" /> Learn More <ArrowUpRight size={13} weight="bold" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Features ─── */
const features = [
  { icon: Buildings, title: 'Custom Solutions', desc: 'Tailored approaches for your unique requirements' },
  { icon: Hammer, title: 'Expert Craftsmanship', desc: 'Precision and attention to every detail' },
  { icon: GearSix, title: 'Quality Materials', desc: 'Premium materials for lasting results' },
  { icon: Users, title: 'Professional Team', desc: 'Experienced and dedicated specialists' },
];

const FeaturesSection = () => (
  <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]">
      <img src="/15.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="container-width relative z-10">
      <SectionHeader label="Our Strengths" title="Why Margcha Shopfitting?"
        subtitle={<>Years of experience and dedication. <Link to="/about" className="hyperlink">Read our story</Link> to learn how we deliver.</>} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <Link key={title} to="/services">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-5 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-maroon-100 hover:shadow-card transition-all duration-500 cursor-pointer active:scale-[0.98] group">
              <div className="w-11 h-11 rounded-xl bg-maroon-50 dark:bg-maroon-900/20 flex items-center justify-center mb-4 group-hover:bg-maroon-100 transition-colors">
                <Icon size={22} weight="duotone" className="text-maroon-600" />
              </div>
              <h3 className="font-heading text-h4 text-gray-900 dark:text-white mb-1 group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">{title}</h3>
              <p className="text-body-sm text-gray-500 dark:text-gray-400">{desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Testimonials — premium redesign ─── */
const testimonials = [
  { name: 'Sarah Johnson', company: 'Elite Retail Group', text: 'Margcha transformed our retail space with exceptional aluminium work. The quality and attention to detail exceeded our expectations.', rating: 5, image: '/shopfront2.jpeg' },
  { name: 'David Mutendera', company: 'Premier Properties', text: 'The payment plan made our large office renovation project manageable. Professional work delivered on time and budget.', rating: 5, image: '/14.jpg' },
  { name: 'Rachel Moyo', company: 'Stylish Boutiques Ltd', text: 'From concept to completion, the Margcha team provided outstanding service and craftsmanship for our chain of stores.', rating: 5, image: '/shopfront3.jpeg' },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Blended bg that shifts with testimonial */}
      <div className="absolute inset-0">
        {testimonials.map((t, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}>
            <img src={t.image} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
        <div className="absolute inset-0 bg-maroon-950/85 backdrop-blur-sm" />
      </div>

      <div className="container-width relative z-10">
        <SectionHeader light label="Testimonials" title="What Our Clients Say"
          subtitle={<>Real feedback from our <Link to="/projects" className="text-maroon-200 hover:text-white underline decoration-maroon-300/50 underline-offset-2 transition-colors">completed projects</Link>.</>} />

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${active * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full px-2 md:px-4">
                  <div className="glass-dark p-8 md:p-12 text-center relative">
                    <Quotes size={48} weight="fill" className="text-maroon-400/30 mx-auto mb-4" />
                    <div className="flex justify-center gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={20} weight="fill" className={j < t.rating ? 'text-yellow-400' : 'text-gray-600'} />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-white/90 italic leading-relaxed mb-8 max-w-2xl mx-auto">
                      "{t.text}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="text-left">
                        <p className="font-heading font-semibold text-white">{t.name}</p>
                        <p className="text-body-sm text-white/50">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-500 ${active === i ? 'w-10 bg-white' : 'w-2 bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Payment Plan ─── */
const PaymentSection = () => (
  <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]">
      <img src="/16.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="container-width relative z-10">
      <div className="card-elevated overflow-hidden flex flex-col lg:flex-row">
        {/* Left — with blended bg */}
        <div className="lg:w-2/5 relative overflow-hidden">
          <img src="/door.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 gradient-maroon opacity-80" />
          <div className="relative z-10 p-8 md:p-10 flex items-center justify-center min-h-[240px]">
            <div className="text-center text-white">
              <Sparkle size={36} weight="fill" className="text-yellow-300 mx-auto mb-4" />
              <h3 className="font-heading text-h2 font-bold mb-2">It's Affordable!</h3>
              <p className="text-lg text-maroon-100 mb-6">Get it in 3 easy installments</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-maroon-800 rounded-xl font-heading font-semibold hover:bg-gray-100 transition-colors active:scale-[0.97]">
                Get Started <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Initial Deposit', desc: 'Pay 60% and get your products delivered', day: 'Day 1' },
              { step: '2', title: 'Second Payment', desc: 'Settle 20% of the total cost', day: 'Day 31' },
              { step: '3', title: 'Final Payment', desc: 'Complete the remaining 20%', day: 'Day 62' },
            ].map((item) => (
              <Link key={item.step} to="/contact" className="text-center group cursor-pointer active:scale-[0.97] transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-maroon-50 dark:bg-maroon-900/20 text-maroon-700 dark:text-maroon-400 flex items-center justify-center mx-auto mb-3 font-heading font-bold text-lg group-hover:bg-maroon-100 transition-colors">
                  {item.step}
                </div>
                <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">{item.title}</h4>
                <p className="text-body-sm text-gray-500 dark:text-gray-400 mb-2">{item.desc}</p>
                <span className="text-body-sm font-semibold text-maroon-700 dark:text-maroon-400">{item.day}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── CTA ─── */
const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0">
      <img src="/12.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 gradient-maroon opacity-80" />
    </div>
    <div className="container-width relative z-10 text-center text-white">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-heading text-h1 md:text-display font-bold mb-4 text-balance">
          Ready to Transform Your Space?
        </h2>
        <p className="text-body-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Let's discuss your project. <Link to="/about" className="text-maroon-200 hover:text-white underline decoration-maroon-300/50 underline-offset-2 transition-colors">Learn about our process</Link> or get started today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-maroon-800 rounded-2xl font-heading font-semibold hover:bg-gray-100 transition-colors shadow-lg active:scale-[0.97]">
            <Phone size={18} weight="bold" />
            Contact Us Today
          </Link>
          <Link to="/services" className="btn-ghost !py-4 !px-8 !rounded-2xl">
            Explore Services
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Main ─── */
const HomePage = () => (
  <>
    <HeroSection />
    <WhySection />
    <ProductShowcase />
    <FeaturesSection />
    <TestimonialsSection />
    <PaymentSection />
    <CTASection />
  </>
);

export default HomePage;
