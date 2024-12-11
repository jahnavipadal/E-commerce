import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component for routing

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-bold mb-2">Company</h3>
            <ul>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</Link>
              <Link to="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</Link>
              <Link to="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</Link>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
