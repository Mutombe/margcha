import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, X, ArrowRight } from '@phosphor-icons/react';

const searchablePages = [
  {
    name: 'Home',
    path: '/',
    description: 'Welcome to Margcha Shopfitting — premium aluminium fabrication and joinery solutions.',
    keywords: ['home', 'main', 'landing'],
  },
  {
    name: 'Services',
    path: '/services',
    description: 'Explore our comprehensive range of shopfitting, aluminium fabrication, and joinery services.',
    keywords: ['aluminium', 'fabrication', 'joinery', 'windows', 'doors', 'partitions', 'ceilings', 'shower', 'security'],
  },
  {
    name: 'Projects',
    path: '/projects',
    description: 'Browse our portfolio of completed commercial and residential shopfitting projects.',
    keywords: ['projects', 'portfolio', 'shopfront', 'residential', 'commercial'],
  },
  {
    name: 'About',
    path: '/about',
    description: 'Learn about our story, vision, mission, core values, and journey since 2022.',
    keywords: ['about', 'story', 'vision', 'mission', 'values', 'journey'],
  },
  {
    name: 'Contact',
    path: '/contact',
    description: 'Get in touch for a free consultation, quotation, or to visit our Harare office.',
    keywords: ['contact', 'quote', 'email', 'phone', 'location', 'map'],
  },
  {
    name: 'Terms & Conditions',
    path: '/terms',
    description: 'Our terms of service, payment structure, warranty, and legal obligations.',
    keywords: ['terms', 'conditions', 'legal', 'warranty', 'payment'],
  },
  {
    name: 'Privacy Policy',
    path: '/privacy',
    description: 'How we collect, use, and protect your personal information.',
    keywords: ['privacy', 'policy', 'data', 'information'],
  },
  {
    name: 'Cookie Policy',
    path: '/cookies',
    description: 'Information about the cookies and tracking technologies used on our website.',
    keywords: ['cookies', 'tracking'],
  },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const getFilteredResults = useCallback(() => {
    if (!query.trim()) return [];
    const searchTerm = query.toLowerCase().trim();
    return searchablePages.filter((page) => {
      const inName = page.name.toLowerCase().includes(searchTerm);
      const inDescription = page.description.toLowerCase().includes(searchTerm);
      const inKeywords = page.keywords.some((kw) => kw.includes(searchTerm));
      return inName || inDescription || inKeywords;
    });
  }, [query]);

  const results = getFilteredResults();

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const getMatchingKeywords = (page) => {
    if (!query.trim()) return [];
    const searchTerm = query.toLowerCase().trim();
    return page.keywords.filter((kw) => kw.includes(searchTerm));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] md:pt-[15vh] px-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 glass-dark"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl z-10"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-elevated overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
                <MagnifyingGlass size={22} weight="bold" className="text-maroon-600 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages..."
                  className="flex-1 text-body-lg text-gray-900 dark:text-white placeholder-gray-400 bg-transparent outline-none"
                />
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 active:scale-[0.95] transition-all"
                >
                  <X size={16} weight="bold" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query.trim() === '' ? (
                  <div className="px-5 py-10 text-center">
                    <MagnifyingGlass size={40} weight="duotone" className="text-gray-200 mx-auto mb-3" />
                    <p className="text-body text-gray-400 dark:text-gray-400">Start typing to search pages</p>
                    <p className="text-caption text-gray-300 mt-1">
                      Try "services", "contact", or "aluminium"
                    </p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="px-5 py-10 text-center">
                    <MagnifyingGlass size={40} weight="duotone" className="text-gray-200 mx-auto mb-3" />
                    <p className="text-body text-gray-500 dark:text-gray-400">
                      No results found for "<span className="font-medium text-gray-700 dark:text-gray-200">{query}</span>"
                    </p>
                    <p className="text-body-sm text-gray-400 mt-2">
                      Try searching for "services", "projects", or "contact"
                    </p>
                  </div>
                ) : (
                  <div className="p-3 space-y-1">
                    {results.map((page) => {
                      const matchingKeywords = getMatchingKeywords(page);
                      return (
                        <Link
                          key={page.path}
                          to={page.path}
                          onClick={onClose}
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-800 active:scale-[0.99] transition-all group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-maroon-50 dark:bg-maroon-900/20 flex items-center justify-center group-hover:bg-maroon-100 transition-colors">
                            <ArrowRight size={16} weight="bold" className="text-maroon-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading text-body font-semibold text-gray-900 dark:text-white group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">
                              {page.name}
                            </h3>
                            <p className="text-body-sm text-gray-500 dark:text-gray-400 truncate">{page.description}</p>
                            {matchingKeywords.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {matchingKeywords.map((kw) => (
                                  <span
                                    key={kw}
                                    className="px-2 py-0.5 bg-maroon-50 dark:bg-maroon-900/20 text-maroon-700 dark:text-maroon-400 rounded text-caption font-medium"
                                  >
                                    {kw}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="text-caption text-gray-300 flex-shrink-0 hidden sm:block">
                            {page.path}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <p className="text-caption text-gray-400">
                  {results.length > 0
                    ? `${results.length} result${results.length > 1 ? 's' : ''} found`
                    : 'Search across all pages'}
                </p>
                <p className="text-caption text-gray-300">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-500 dark:text-gray-400 font-mono text-[11px]">ESC</kbd>{' '}
                  to close
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
