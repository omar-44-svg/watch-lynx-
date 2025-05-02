import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Watch, UserCircle, ShoppingBag, MessageCircle, Menu, X, Search } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Watch className={`h-8 w-8 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            <span className={`ml-2 font-bold text-2xl ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              WatchLynx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-gray-200'}`}>
              Browse
            </Link>
            <Link to="/how-it-works" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-gray-200'}`}>
              How It Works
            </Link>
            <Link to="/sellers" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-gray-200'}`}>
              Sellers
            </Link>
            <Link to="/about" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-gray-200'}`}>
              About
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="text" size="sm">
              <Search size={18} className="mr-1" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <UserCircle size={18} className="mr-1" />
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Sell a Watch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 pb-4">
              <Link to="/browse" className="font-medium text-gray-700 hover:text-blue-900 py-2">
                Browse
              </Link>
              <Link to="/how-it-works" className="font-medium text-gray-700 hover:text-blue-900 py-2">
                How It Works
              </Link>
              <Link to="/sellers" className="font-medium text-gray-700 hover:text-blue-900 py-2">
                Sellers
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-blue-900 py-2">
                About
              </Link>
              <hr className="my-2" />
              <Button variant="text" fullWidth className="justify-start">
                <Search size={18} className="mr-2" />
                Search
              </Button>
              <Button variant="text" fullWidth className="justify-start">
                <UserCircle size={18} className="mr-2" />
                Sign In
              </Button>
              <Button variant="text" fullWidth className="justify-start">
                <ShoppingBag size={18} className="mr-2" />
                My Orders
              </Button>
              <Button variant="text" fullWidth className="justify-start">
                <MessageCircle size={18} className="mr-2" />
                Messages
              </Button>
              <Button variant="primary" fullWidth>
                Sell a Watch
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;