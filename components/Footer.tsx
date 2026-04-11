import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fades-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/images/Fades Logo Footer.png" 
                alt="FADES Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering Nigeria’s farmers with identity, process, and technology. Building a unified digital ecosystem for a sustainable future.
            </p>
            <div className="flex space-x-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-fades-green transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-fades-green">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/ecosystem" className="hover:text-white transition-colors">Our Ecosystem</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-fades-green">Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Farmer Verification (FINcard)</li>
              <li>Geo-Mapping & Soil Testing</li>
              <li>Market Linkage</li>
              <li>Advisory Services</li>
              <li>Extension Agent Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-fades-green">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-fades-brown flex-shrink-0" />
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fades-brown flex-shrink-0" />
                <a href="mailto:info@fades.ng" className="hover:text-white">info@fades.ng</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fades-brown flex-shrink-0" />
                <span>+234 800 FADES NG</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} FADES Resources Limited. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span>People</span>
            <span className="text-fades-green">•</span>
            <span>Process</span>
            <span className="text-fades-green">•</span>
            <span>Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;