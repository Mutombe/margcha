import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  Target,
  CheckCircle,
  Medal,
  Heart,
  Sparkle,
  Clock,
  ChartLineUp,
  Buildings,
  GlobeHemisphereWest,
  CaretDown,
  ArrowRight,
} from '@phosphor-icons/react';
import OptimizedImage from '../shared/OptimizedImage';
import SectionHeader from '../shared/SectionHeader';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/* --- Data --- */
const coreValues = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'Upholding strong ethical values across every level of our organization.' },
  { icon: Users, title: 'Diversity & Inclusion', desc: 'Bringing different experiences and backgrounds into a shared environment with equal opportunity.' },
  { icon: Medal, title: 'Quality', desc: 'Committed to the highest workmanship standards in every product and service we deliver.' },
  { icon: Heart, title: 'Passion', desc: 'A remarkable sense of joy for our work and the people around us, driving innovation and creativity.' },
  { icon: CheckCircle, title: 'Accountability', desc: 'Standing accountable for our actions in both internal and external spaces.' },
];

const milestones = [
  { year: '2022', title: 'Company Founded', desc: 'Established as an accessible alternative for aluminium/glass products and ceilings.' },
  { year: '2023', title: 'Market Expansion', desc: 'Expanded product lines and service offerings to meet growing customer demands.' },
  { year: '2024', title: 'Regional Growth', desc: 'Began extending services to neighboring regions within SADC.' },
  { year: '2025', title: 'Innovation Focus', desc: 'Implementing technological advancements to enhance product quality and delivery.' },
];

const whyChoose = [
  { icon: Sparkle, title: 'Innovation', desc: 'Cutting-edge solutions tailored to modern needs' },
  { icon: Clock, title: 'Timeliness', desc: 'Delivering projects on schedule, every time' },
  { icon: Medal, title: 'Expertise', desc: 'Skilled craftsmen with years of industry experience' },
  { icon: Buildings, title: 'Versatility', desc: 'Serving both commercial and residential needs' },
];

const heroStats = [
  { value: '2022', label: 'Founded' },
  { value: '100+', label: 'Projects' },
  { value: 'SADC', label: 'Regional Reach' },
];

const AboutPage = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src="/8.jpg" alt="" loading="eager" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/80 via-maroon-950/60 to-black/70 z-[1]" />

      <div className="relative z-10 container-width text-center text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-block px-5 py-2 glass rounded-full text-body-sm font-semibold tracking-wide uppercase">
            Our Story
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-shadow-hero">
            About<br />
            <span className="text-maroon-200">Margcha Shopfitting</span>
          </h1>
          <p className="text-body-lg text-gray-300 max-w-xl mx-auto">
            Revolutionizing the <Link to="/services" className="hyperlink">shopfitting industry</Link> through innovation and creativity since 2022.
          </p>

          {/* Hero Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 md:gap-5 pt-6"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-dark rounded-2xl p-5 md:p-6 min-w-[120px] cursor-pointer active:scale-[0.98] transition-transform"
              >
                <p className="font-heading text-h3 text-white font-bold">{stat.value}</p>
                <p className="text-caption text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60"
      >
        <CaretDown size={28} weight="bold" className="animate-bounce" />
      </motion.div>
    </section>

    {/* Background */}
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/14.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="container-width relative z-10">
        <SectionHeader label="Who We Are" title="Our Background" />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <motion.div {...fadeUp} className="lg:w-1/2 space-y-5 text-body-lg text-gray-600 dark:text-gray-300">
            <p>
              <Link to="/" className="hyperlink">Margcha Shopfitting</Link> was founded in 2022 as an alternative that aims to enhance easy
              accessibility of aluminium/glass products and ceilings at affordable rates, catering for
              both commercial and domestic requirements.
            </p>
            <p>
              Our purpose is to reach all segments of the market, ensuring that modern <Link to="/services" className="hyperlink">shopfitting and
              high-quality trends</Link> are incorporated in housing and commercial projects to promote value
              addition and achieve world-class standards.
            </p>
            <p>
              With our drive and conviction hinged on a skilled and experienced team, we set out to be
              one of the best shopfitting companies in Zimbabwe and within the SADC region. View our
              latest <Link to="/projects" className="hyperlink">completed projects</Link> to see our work in action.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated cursor-pointer active:scale-[0.98] transition-transform">
              <div className="relative">
                <OptimizedImage
                  src="/8.jpg"
                  alt="Margcha Shopfitting Team"
                  className="w-full h-full object-cover"
                  wrapperClassName="h-72 md:h-96"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-950 z-10" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-black/80 to-transparent z-20">
                <h3 className="font-heading text-h3 font-bold text-white mb-1">Excellence in Craftsmanship</h3>
                <p className="text-body-sm text-gray-300">Delivering precision and quality since 2022</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/15.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.02]"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="container-width relative z-10">
        <SectionHeader label="Our Direction" title="Vision & Mission" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {[
            {
              icon: Target,
              title: 'Our Vision',
              text: 'To be recognized as a reputable brand that will revolutionize the shopfitting industry through innovation and creativity.',
            },
            {
              icon: ChartLineUp,
              title: 'Our Mission',
              text: 'Delivering enhanced products and services to all our customers on time and on detail.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              {...fadeUp}
              className="card overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className="gradient-maroon p-5 md:p-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-4">
                  <Icon size={24} weight="duotone" className="text-white" />
                </div>
                <h3 className="font-heading text-h3 text-white">{title}</h3>
              </div>
              <div className="p-5 md:p-6">
                <p className="text-body-lg text-gray-600 dark:text-gray-300">{text}</p>
                <p className="text-body text-gray-500 dark:text-gray-400 mt-3">
                  Learn how our direction shapes the <Link to="/services" className="hyperlink">services we offer</Link> and
                  the <Link to="/projects" className="hyperlink">projects we deliver</Link>.
                </p>
                <div className="mt-5 h-1 w-12 bg-maroon-600 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/16.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.02]"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="container-width relative z-10">
        <SectionHeader
          label="What Drives Us"
          title="Our Core Values"
          subtitle="At Margcha Shopfitting, our values guide everything we do — from client interactions to the quality of our work."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {coreValues.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...staggerChild}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-5 md:p-6 cursor-pointer active:scale-[0.98] transition-transform hover:border-maroon-100 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-maroon-50 dark:bg-maroon-900/20 flex items-center justify-center mb-5">
                <Icon size={22} weight="duotone" className="text-maroon-600" />
              </div>
              <h3 className="font-heading text-h4 text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-body text-gray-500 dark:text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Journey Timeline */}
    <section className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/14.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="container-width relative z-10">
        <SectionHeader
          label="Our Growth"
          title="Our Journey"
          subtitle="Tracing our path from inception to becoming a leading shopfitting company in the region."
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-maroon-200 dark:bg-maroon-800" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              {...fadeUp}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-maroon-600 border-4 border-white shadow-sm z-10" />

              {/* Year badge (desktop) */}
              <div className="hidden md:flex md:w-1/2 justify-center">
                <span className="w-16 h-16 rounded-2xl gradient-maroon flex items-center justify-center text-white font-heading font-bold text-lg shadow-maroon cursor-pointer active:scale-[0.98] transition-transform">
                  {m.year}
                </span>
              </div>

              {/* Card */}
              <div className="md:w-1/2 ml-10 md:ml-0">
                <div className="card p-5 md:p-6 cursor-pointer active:scale-[0.98] transition-transform">
                  <span className="md:hidden text-body-sm font-bold text-maroon-600 mb-1 block">{m.year}</span>
                  <h3 className="font-heading text-h4 text-gray-900 dark:text-white mb-2">{m.title}</h3>
                  <p className="text-body text-gray-500 dark:text-gray-400">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Margcha */}
    <section className="section-padding gradient-maroon relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/15.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="container-width relative z-10">
        <SectionHeader
          light
          label="Our Difference"
          title="Why Choose Margcha"
          subtitle="We combine expertise with innovation to deliver exceptional results for our clients."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {whyChoose.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...staggerChild}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-5 md:p-6 text-center border border-white/10 hover:bg-white/10 cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center mx-auto mb-4">
                <Icon size={22} weight="duotone" className="text-maroon-200" />
              </div>
              <h3 className="font-heading text-h4 text-white mb-2">{title}</h3>
              <p className="text-body-sm text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="text-center mt-10">
          <p className="text-body text-gray-300 mb-6">
            See the difference for yourself in our <Link to="/projects" className="hyperlink text-maroon-200 hover:text-white">portfolio</Link> or{' '}
            <Link to="/contact" className="hyperlink text-maroon-200 hover:text-white">get in touch</Link> today.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Global Aspiration */}
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/16.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.02]"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="container-width relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div {...fadeUp} className="lg:w-1/2">
            <SectionHeader
              align="left"
              label="Our Reach"
              title="Our Global Aspiration"
            />
            <p className="text-body-lg text-gray-600 dark:text-gray-300 mb-5">
              Starting from Zimbabwe, our vision extends throughout the SADC region and beyond. We aim to bring
              our high-quality <Link to="/services" className="hyperlink">shopfitting solutions</Link> to markets across Africa, setting new standards in the industry.
            </p>
            <p className="text-body-lg text-gray-600 dark:text-gray-300 mb-8">
              By leveraging technological advancements and continuously refining our craft, we're positioned
              to meet the evolving needs of clients around the continent. Explore our <Link to="/projects" className="hyperlink">recent projects</Link> to
              see our capabilities firsthand.
            </p>
            <Link to="/projects" className="btn-primary cursor-pointer active:scale-[0.98] transition-transform">
              View Our Projects <GlobeHemisphereWest size={18} weight="bold" />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden bg-maroon-50 dark:bg-maroon-900/20 p-8 md:p-10">
              <GlobeHemisphereWest size={200} weight="duotone" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-maroon-200/20" />
              <div className="relative z-10 text-center">
                <h3 className="font-heading text-h3 text-maroon-800 dark:text-maroon-300 mb-6">Currently Serving</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                  {['Zimbabwe', 'SADC Region'].map((r) => (
                    <div key={r} className="card-elevated p-5 md:p-6 cursor-pointer active:scale-[0.98] transition-transform">
                      <GlobeHemisphereWest size={24} weight="duotone" className="text-maroon-500 mx-auto mb-2" />
                      <p className="font-heading text-h4 text-gray-800 dark:text-gray-200">{r}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 bg-gradient-to-r from-maroon-50 to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/13.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="container-width text-center relative z-10">
        <motion.div {...fadeUp} className="card-elevated p-5 md:p-6 lg:p-12 max-w-3xl mx-auto">
          <h2 className="font-heading text-h2 text-gray-900 dark:text-white mb-3">Ready to Transform Your Space?</h2>
          <p className="text-body-lg text-gray-500 dark:text-gray-400 mb-5">
            Let's collaborate to bring your vision to life with our premium <Link to="/services" className="hyperlink">shopfitting solutions</Link>.
            Browse our <Link to="/projects" className="hyperlink">project gallery</Link> for inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/contact" className="btn-primary cursor-pointer active:scale-[0.98] transition-transform">
              Contact Us Today <ArrowRight size={16} weight="bold" />
            </Link>
            <Link to="/projects" className="btn-ghost cursor-pointer active:scale-[0.98] transition-transform">
              View Projects <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default AboutPage;
