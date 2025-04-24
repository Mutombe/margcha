import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './components/nav/nav';
import HomePage from './components/home/home';
import AboutPage from './components/about/about';
import ContactPage from './components/contact/contact';
import { useEffect } from 'react';
import ProjectsPage from './components/projects';
import ServicesPage from './components/services/services';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <NavBar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            {/* <Route path="/services" element={<ServicesPage />} /> */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
