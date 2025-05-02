import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
          alt="Luxury Watch Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Buy & Sell Authentic Luxury Watches — Fully Verified
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            The premier marketplace for collectors, enthusiasts, and watch lovers. Every timepiece is authenticated by our experts.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" size="lg">
              Browse Watches
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Sell a Watch
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">100% Authentic</h3>
                <p className="text-sm text-gray-300">Expert verification</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Secure Payments</h3>
                <p className="text-sm text-gray-300">Escrow protection</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Price Guarantee</h3>
                <p className="text-sm text-gray-300">Best market value</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;