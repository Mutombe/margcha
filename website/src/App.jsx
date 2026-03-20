import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './components/nav/nav';
import Footer from './components/footer/footer';

const HomePage = lazy(() => import('./components/home/home'));
const ServicesPage = lazy(() => import('./components/services/services'));
const ProjectsPage = lazy(() => import('./components/projects'));
const AboutPage = lazy(() => import('./components/about/about'));
const ContactPage = lazy(() => import('./components/contact/contact'));
const TermsPage = lazy(() => import('./components/legal/terms'));
const PrivacyPage = lazy(() => import('./components/legal/privacy'));
const CookiesPage = lazy(() => import('./components/legal/cookies'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-3 border-maroon-200 dark:border-maroon-800 border-t-maroon-700 rounded-full animate-spin" />
      <span className="text-body-sm text-gray-400 font-heading">Loading...</span>
    </div>
  </div>
);

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <ScrollToTop />
        <NavBar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<motion.div {...pageTransition}><HomePage /></motion.div>} />
                <Route path="/services" element={<motion.div {...pageTransition}><ServicesPage /></motion.div>} />
                <Route path="/projects" element={<motion.div {...pageTransition}><ProjectsPage /></motion.div>} />
                <Route path="/about" element={<motion.div {...pageTransition}><AboutPage /></motion.div>} />
                <Route path="/contact" element={<motion.div {...pageTransition}><ContactPage /></motion.div>} />
                <Route path="/terms" element={<motion.div {...pageTransition}><TermsPage /></motion.div>} />
                <Route path="/privacy" element={<motion.div {...pageTransition}><PrivacyPage /></motion.div>} />
                <Route path="/cookies" element={<motion.div {...pageTransition}><CookiesPage /></motion.div>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
