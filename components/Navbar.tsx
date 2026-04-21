import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './UIComponents';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use scrolled styling on non-home pages OR when user has scrolled
  const useScrolledStyle = !isHomePage || scrolled;

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${useScrolledStyle ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-50">
            <img 
              src={useScrolledStyle ? "/images/Fades Logo color.png" : "/images/Fades Logo White.png"} 
              alt="FADES Logo" 
              className="h-10 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            <div className={`flex items-center space-x-1 mr-4 rounded-full px-2 py-1 ${useScrolledStyle ? 'bg-gray-100/50' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path 
                      ? (useScrolledStyle ? 'bg-white text-fades-green shadow-sm' : 'bg-white text-fades-green')
                      : (useScrolledStyle ? 'text-gray-600 hover:text-fades-green' : 'text-white/90 hover:text-white')
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a href="https://web.fadesresources.org/signup" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className={useScrolledStyle ? '' : 'bg-white !text-fades-green hover:bg-white/90 shadow-xl border-none'}>
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button
              onClick={toggleMenu}
              className={`transition-colors p-2 rounded-full ${isOpen ? 'bg-gray-100 text-fades-dark' : (useScrolledStyle ? 'text-fades-dark' : 'text-white bg-white/20 backdrop-blur-md')}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-28 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-serif font-bold ${
                    location.pathname === link.path ? 'text-fades-green' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 grid gap-4">
                 <Button className="w-full text-lg h-14" onClick={() => setIsOpen(false)}>
                   Download Farmer App
                 </Button>
                 <Button variant="outline" className="w-full text-lg h-14" onClick={() => setIsOpen(false)}>
                   Agent Dashboard
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;