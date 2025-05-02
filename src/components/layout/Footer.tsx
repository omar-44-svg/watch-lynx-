import React from 'react';
import { Link } from 'react-router-dom';
import { Watch, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Watch className="h-8 w-8 text-white" />
              <span className="ml-2 font-bold text-2xl text-white">WatchLynx</span>
            </Link>
            <p className="text-gray-400 mb-4">The premium marketplace for luxury timepieces. Buy and sell authentic watches with confidence.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/browse" className="text-gray-400 hover:text-white transition-colors">Browse Watches</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/sell" className="text-gray-400 hover:text-white transition-colors">Sell a Watch</Link></li>
              <li><Link to="/authentication" className="text-gray-400 hover:text-white transition-colors">Authentication Process</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Watch Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/warranty" className="text-gray-400 hover:text-white transition-colors">Warranty & Service</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest watch arrivals and exclusive offers.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              Secure payments via <span className="font-semibold">Stripe</span> and <span className="font-semibold">PayPal</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} WatchLynx. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;