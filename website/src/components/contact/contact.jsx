import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  PaperPlaneTilt,
  ChatCircle,
  User,
  Briefcase,
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  CheckCircle,
  List,
  X,
  ArrowUp,
  Heart,
  CaretRight,
} from '@phosphor-icons/react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import SectionHeader from '../shared/SectionHeader';

/* ─── Map ─── */
const MapComponent = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });

    const initMap = () => {
      if (mapInstance.current) return;
      mapInstance.current = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: false,
      }).setView([-17.824858, 31.053028], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapInstance.current);

      const locations = [
        { name: 'Msasa Office', coords: [-17.824858, 31.053028], address: '70 Mutare Road, Cnr Steven Drive, Colonnade Building, Office Suite 8, Msasa, Harare' },
        { name: 'Secondary Office', coords: [-17.82975, 31.03497], address: 'Harare, Zimbabwe' },
      ];

      locations.forEach((loc) => {
        L.marker(loc.coords).addTo(mapInstance.current).bindPopup(`<b>${loc.name}</b><br>${loc.address}`);
      });

      mapInstance.current.fitBounds(locations.map((l) => l.coords), { padding: [50, 50] });
    };

    setTimeout(initMap, 100);

    const handleResize = () => mapInstance.current?.invalidateSize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-64 md:h-80 lg:h-96 rounded-2xl" />;
};

/* ─── Data ─── */
const contactInfo = [
  { icon: MapPin, title: 'Our Location', details: ['70 Mutare Road, Cnr Steven Drive,', 'Colonnade Building, Office Suite 8,', 'Msasa, Harare'] },
  { icon: Phone, title: 'Phone Numbers', details: ['+263 783 574 677', '+263 714 273 307'] },
  { icon: EnvelopeSimple, title: 'Email Address', details: ['sales@margchashopfitting.com'] },
  { icon: Clock, title: 'Business Hours', details: ['Monday - Friday: 8am - 5pm', 'Saturday: 9am - 1pm', 'Sunday: Closed'] },
];

const serviceOptions = [
  'Aluminium Fabrication',
  'Joinery Services',
  'Ceiling Solutions',
  'Security Systems',
  'Shower Enclosures',
  'Office Partitions',
  'Other Services',
];

const faqData = [
  {
    q: 'What areas do you serve?',
    a: 'We primarily serve Harare and surrounding areas, with projects extending to other cities in Zimbabwe and the SADC region.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes, we offer free initial consultations to understand your project requirements and provide detailed quotations.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We offer flexible payment plans: 60% initial deposit, 20% after 31 days, and final 20% after 62 days.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope and complexity. Most residential projects take 2-4 weeks, while commercial projects may take 4-8 weeks.',
  },
];

const socials = [
  { Icon: FacebookLogo, href: 'https://www.facebook.com/share/14DcFhcoebh/?mibextid=wwXIfr', label: 'Facebook' },
  { Icon: InstagramLogo, href: 'https://www.instagram.com/margcha.shopfitting?igsh=MXg5ZW1kazkxZ3UycQ==', label: 'Instagram' },
  { Icon: XLogo, href: 'https://x.com/margchash?t=y0a2AxRqvXI4vHFxV-Jusw&s=09', label: 'Twitter' },
  { Icon: LinkedinLogo, href: 'https://www.linkedin.com/in/margcha-shopfitting-1428b6269', label: 'LinkedIn' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

/* ─── Main ─── */
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', subject: '', message: '', service: '',
  });
  const [formStatus, setFormStatus] = useState({ submitting: false, submitted: false });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false });
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true });
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '', service: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen relative">
      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 bg-maroon-700 text-white rounded-full shadow-elevated flex items-center justify-center hover:bg-maroon-800 active:scale-[0.98] transition-transform transition-colors"
        >
          <ArrowUp size={18} weight="bold" />
        </button>
      )}

      {/* ── Hero ── */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Dark gradient bg matching nav */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 via-maroon-950 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(145,42,42,0.35),transparent_65%)]" />

        {/* Subtle bg pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <img src="/7.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 container-width text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 glass rounded-full text-body-sm font-medium mb-6">
              Let's Connect
            </span>
            <h1 className="font-heading text-display md:text-[5rem] font-bold leading-[1.05] tracking-tight mb-4 text-shadow-hero">
              Get In <span className="text-maroon-200">Touch</span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-2xl mx-auto">
              Quality craftsmanship and exceptional <Link to="/services" className="hyperlink">service</Link> for all your shopfitting needs. Explore our <Link to="/projects" className="hyperlink">projects</Link> or learn <Link to="/about" className="hyperlink">about us</Link>.
            </p>
          </motion.div>

          {/* Quick contact cards as glass elements */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {contactInfo.map(({ icon: Icon, title, details }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-4 text-center hover:bg-white/15 active:scale-[0.98] transition-transform transition-colors cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mx-auto mb-2">
                  <Icon size={18} weight="regular" className="text-white" />
                </div>
                <h3 className="text-caption font-semibold mb-1">{title}</h3>
                <p className="text-caption text-gray-300 truncate">{details[0]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Subtle bg image */}
        <div className="absolute inset-0 opacity-[0.02]">
          <img src="/8.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 container-width">
          <SectionHeader
            label="Get In Touch"
            title="Contact Information"
            subtitle={<>Reach out to us through any of these channels. View our <Link to="/services" className="hyperlink">services</Link> or browse our <Link to="/projects" className="hyperlink">completed projects</Link>.</>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map(({ icon: Icon, title, details }, i) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card p-6 text-center group hover:border-maroon-100 active:scale-[0.98] transition-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-maroon-50 dark:bg-maroon-900/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-100 transition-colors">
                  <Icon size={22} weight="duotone" className="text-maroon-600" />
                </div>
                <h3 className="font-heading text-h4 text-gray-900 dark:text-white mb-3">{title}</h3>
                <div className="space-y-1">
                  {details.map((d, j) => (
                    <p key={j} className="text-body-sm text-gray-500 dark:text-gray-400">{d}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + Form ── */}
      <section id="contact-form" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Subtle bg image */}
        <div className="absolute inset-0 opacity-[0.02]">
          <img src="/9.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 container-width">
          <SectionHeader
            label="Reach Us"
            title="Send Us a Message"
            subtitle="Fill out the form and we'll get back to you within 24 hours."
          />
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Map side */}
            <motion.div {...fadeUp} className="lg:w-2/5 space-y-6">
              <div className="card overflow-hidden">
                <MapComponent />
              </div>

              {/* Social links card */}
              <div className="card p-6">
                <h3 className="font-heading text-h4 text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Heart size={20} weight="duotone" className="text-maroon-600" />
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-maroon-700 hover:text-white active:scale-[0.98] transition-transform transition-all duration-300"
                    >
                      <Icon size={18} weight="regular" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick info glass-dark card */}
              <div className="glass-dark rounded-2xl p-6 text-white">
                <h3 className="font-heading text-h4 mb-3 flex items-center gap-2">
                  <Clock size={20} weight="duotone" />
                  Office Hours
                </h3>
                <div className="space-y-2 text-body-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white font-medium">8am - 5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white font-medium">9am - 1pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-maroon-300 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeUp} className="lg:w-3/5">
              <div className="glass-light rounded-2xl p-6 md:p-8 card-elevated">
                {formStatus.submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} weight="duotone" className="text-green-500" />
                    </div>
                    <h3 className="font-heading text-h3 text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-body text-gray-500 dark:text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setFormStatus({ submitting: false, submitted: false })}
                      className="btn-secondary active:scale-[0.98] transition-transform"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-body-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Name *</label>
                        <div className="relative">
                          <User size={16} weight="regular" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text" name="name" required value={formData.name} onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-body-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-body-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Email *</label>
                        <div className="relative">
                          <EnvelopeSimple size={16} weight="regular" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email" name="email" required value={formData.email} onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-body-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-body-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Phone</label>
                        <div className="relative">
                          <Phone size={16} weight="regular" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel" name="phone" value={formData.phone} onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-body-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all"
                            placeholder="+263..."
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-body-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Company</label>
                        <div className="relative">
                          <Briefcase size={16} weight="regular" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text" name="company" value={formData.company} onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-body-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all"
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Service Needed</label>
                      <div className="relative">
                        <select
                          name="service" value={formData.service} onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-body-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <CaretDown size={16} weight="bold" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Subject</label>
                      <input
                        type="text" name="subject" value={formData.subject} onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-body-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Message *</label>
                      <div className="relative">
                        <ChatCircle size={16} weight="regular" className="absolute left-3 top-3 text-gray-400" />
                        <textarea
                          name="message" required rows={4} value={formData.message} onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-body-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className="btn-primary w-full !justify-center !py-3 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] transition-transform"
                    >
                      {formStatus.submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <PaperPlaneTilt size={16} weight="bold" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Subtle bg image */}
        <div className="absolute inset-0 opacity-[0.02]">
          <img src="/10.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 container-width">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle={<>Have questions about our <Link to="/services" className="hyperlink">services</Link>? Find quick answers below.</>}
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqData.map(({ q, a }, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-[0.98] transition-transform transition-colors"
                >
                  <span className="font-heading text-body font-semibold text-gray-900 dark:text-white pr-4">{q}</span>
                  <CaretDown
                    size={18}
                    weight="bold"
                    className={`text-maroon-600 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                  <p className="px-5 text-body text-gray-500 dark:text-gray-400">{a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social CTA Banner ── */}
      <section className="py-16 md:py-20 gradient-maroon relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.02]">
          <img src="/11.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 container-width text-center text-white">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-h2 md:text-[2.5rem] font-bold mb-4">
              Stay Connected With Us
            </h2>
            <p className="text-body-lg text-gray-300 max-w-xl mx-auto mb-8">
              Follow us on social media for project updates, inspiration, and behind-the-scenes content from our <Link to="/projects" className="hyperlink">latest projects</Link>.
            </p>
            <div className="flex justify-center gap-4">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass w-12 h-12 rounded-xl flex items-center justify-center text-white hover:bg-white/20 active:scale-[0.98] transition-transform transition-all duration-300"
                >
                  <Icon size={22} weight="regular" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
