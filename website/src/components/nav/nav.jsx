import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  List, X, Phone, EnvelopeSimple, MapPin, Clock,
  FacebookLogo, InstagramLogo, XLogo, LinkedinLogo,
  ArrowRight, MagnifyingGlass,
} from '@phosphor-icons/react';
import DarkModeToggle from '../shared/DarkModeToggle';
import SearchModal from '../shared/SearchModal';

const socials = [
  { Icon: FacebookLogo, href: 'https://www.facebook.com/share/14DcFhcoebh/?mibextid=wwXIfr' },
  { Icon: InstagramLogo, href: 'https://www.instagram.com/margcha.shopfitting?igsh=MXg5ZW1kazkxZ3UycQ==' },
  { Icon: XLogo, href: 'https://x.com/margchash?t=y0a2AxRqvXI4vHFxV-Jusw&s=09' },
  { Icon: LinkedinLogo, href: 'https://www.linkedin.com/in/margcha-shopfitting-1428b6269' },
];

const InfoBar = () => (
  <div className="bg-maroon-950/80 backdrop-blur-sm text-white/80 py-2 hidden lg:block relative z-50">
    <div className="container-width">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6 text-caption">
          <a href="tel:+263783574677" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={13} weight="bold" />
            <span>+263 78 357 4677</span>
          </a>
          <a href="mailto:sales@margchashopfitting.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <EnvelopeSimple size={13} weight="bold" />
            <span>sales@margchashopfitting.com</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} weight="bold" />
            <span>Msasa, Harare</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-caption">
            <Clock size={13} weight="bold" />
            Mon - Fri: 8AM - 5PM
          </span>
          <div className="flex gap-2 ml-2">
            {socials.map(({ Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Icon size={14} weight="bold" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Keyboard shortcut: Ctrl+K or Cmd+K for search
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <InfoBar />
      <nav
        className={`fixed top-0 lg:top-8 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 dark:bg-gray-900/90 backdrop-blur-2xl shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container-width">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link to="/" className="flex-shrink-0 relative z-10">
              <img
                src="/logo4.png"
                alt="Margcha Shopfitting"
                className={`h-11 lg:h-14 w-auto transition-all duration-300 ${scrolled ? 'dark:brightness-0 dark:invert' : 'brightness-0 invert'}`}
              />
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-body-sm font-medium transition-all duration-300 ${
                      scrolled
                        ? isActive ? 'text-maroon-700 dark:text-maroon-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                        : isActive ? 'text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${scrolled ? 'bg-maroon-600' : 'bg-white'}`}
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Search"
              >
                <MagnifyingGlass size={18} weight="bold" />
              </button>

              {/* Dark mode */}
              <DarkModeToggle className={scrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white/10'} />

              <Link
                to="/contact"
                className={`ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-body-sm font-semibold transition-all duration-300 active:scale-[0.97] ${
                  scrolled
                    ? 'bg-maroon-700 text-white hover:bg-maroon-800 shadow-maroon'
                    : 'glass text-white hover:bg-white/20'
                }`}
              >
                <Phone size={15} weight="bold" />
                Get a Quote
              </Link>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2.5 rounded-xl transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}
                aria-label="Search"
              >
                <MagnifyingGlass size={20} weight="bold" />
              </button>
              <DarkModeToggle className={scrolled ? '' : ''} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-colors ${
                  scrolled ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-t border-gray-100 dark:border-gray-800"
            >
              <div className="container-width py-5 space-y-1.5">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-body font-medium transition-all duration-200 active:scale-[0.98] ${
                        isActive ? 'bg-maroon-50 dark:bg-maroon-900/30 text-maroon-700 dark:text-maroon-400' : 'text-gray-700 dark:text-gray-300 active:bg-gray-50 dark:active:bg-gray-800'
                      }`}
                    >
                      {item.name}
                      <ArrowRight size={16} weight="bold" className={isActive ? 'text-maroon-500' : 'text-gray-300 dark:text-gray-600'} />
                    </Link>
                  );
                })}
                <div className="pt-3">
                  <Link to="/contact" className="btn-primary w-full !justify-center !py-3.5 !rounded-2xl">
                    <Phone size={16} weight="bold" />
                    Get a Quote
                  </Link>
                </div>
                <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <a href="tel:+263783574677" className="flex items-center gap-2 text-body-sm text-gray-500 dark:text-gray-400 active:text-maroon-600">
                    <Phone size={14} weight="bold" className="text-maroon-600" />
                    +263 78 357 4677
                  </a>
                  <div className="flex gap-2">
                    {socials.map(({ Icon, href }) => (
                      <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-maroon-700 hover:text-white transition-all">
                        <Icon size={14} weight="bold" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default NavBar;
