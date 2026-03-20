import { Link } from 'react-router-dom';
import {
  Phone, EnvelopeSimple, MapPin, Clock, CaretRight, ArrowUpRight,
  FacebookLogo, InstagramLogo, XLogo, LinkedinLogo,
} from '@phosphor-icons/react';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Aluminium Windows & Doors', 'Shop Fronts', 'Office Partitions',
    'Ceiling Solutions', 'Shower Enclosures', 'Security Systems',
  ];

  const legal = [
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  const socialLinks = [
    { icon: FacebookLogo, href: 'https://www.facebook.com/share/14DcFhcoebh/?mibextid=wwXIfr' },
    { icon: InstagramLogo, href: 'https://www.instagram.com/margcha.shopfitting?igsh=MXg5ZW1kazkxZ3UycQ==' },
    { icon: XLogo, href: 'https://x.com/margchash?t=y0a2AxRqvXI4vHFxV-Jusw&s=09' },
    { icon: LinkedinLogo, href: 'https://www.linkedin.com/in/margcha-shopfitting-1428b6269' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <img src="/8.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="container-width pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src="/logo4.png" alt="Margcha" className="h-12 w-auto brightness-0 invert opacity-80" />
            </Link>
            <p className="text-body-sm text-gray-500 mb-5 max-w-xs">
              Premium <Link to="/services" className="text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-2 transition-colors">aluminium fabrication</Link> and{' '}
              <Link to="/services" className="text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-2 transition-colors">joinery</Link> solutions across Zimbabwe.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-500 hover:bg-maroon-700 hover:text-white transition-all active:scale-95">
                  <Icon size={16} weight="bold" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-body mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-body-sm text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1.5 group">
                    <CaretRight size={12} weight="bold" className="text-maroon-600 group-hover:translate-x-0.5 transition-transform" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-body mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-body-sm text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1.5 group">
                    <CaretRight size={12} weight="bold" className="text-maroon-600 group-hover:translate-x-0.5 transition-transform" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-white text-body mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-body-sm text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1.5 group">
                    <CaretRight size={12} weight="bold" className="text-maroon-600 group-hover:translate-x-0.5 transition-transform" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-body mb-4">Contact</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin size={16} weight="bold" className="text-maroon-500 mt-0.5 flex-shrink-0" />
                <span className="text-body-sm text-gray-500">70 Mutare Road, Colonnade Building, Msasa, Harare</span>
              </li>
              <li>
                <a href="tel:+263783574677" className="flex items-center gap-3 text-body-sm text-gray-500 hover:text-white transition-colors active:text-maroon-400">
                  <Phone size={16} weight="bold" className="text-maroon-500 flex-shrink-0" />
                  +263 78 357 4677
                </a>
              </li>
              <li>
                <a href="tel:+263714273307" className="flex items-center gap-3 text-body-sm text-gray-500 hover:text-white transition-colors active:text-maroon-400">
                  <Phone size={16} weight="bold" className="text-maroon-500 flex-shrink-0" />
                  +263 71 427 3307
                </a>
              </li>
              <li>
                <a href="mailto:sales@margchashopfitting.com" className="flex items-center gap-3 text-body-sm text-gray-500 hover:text-white transition-colors active:text-maroon-400">
                  <EnvelopeSimple size={16} weight="bold" className="text-maroon-500 flex-shrink-0" />
                  sales@margchashopfitting.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} weight="bold" className="text-maroon-500 flex-shrink-0" />
                <span className="text-body-sm text-gray-500">Mon-Fri: 8AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/50 relative z-10">
        <div className="container-width py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-caption text-gray-600">&copy; {year} Margcha Shopfitting. All rights reserved.</p>
          <p className="text-caption text-gray-600">
            Developed by{' '}
            <a href="https://zettabyte.co.zw" target="_blank" rel="noopener noreferrer"
              className="text-maroon-500 hover:text-maroon-400 transition-colors inline-flex items-center gap-1">
              Zettabyte <ArrowUpRight size={10} weight="bold" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
