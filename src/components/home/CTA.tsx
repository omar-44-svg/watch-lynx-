import React from 'react';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Buy or Sell a Luxury Watch?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Join thousands of watch enthusiasts on the premier marketplace for authentic luxury timepieces.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            variant="secondary" 
            size="lg"
          >
            Browse Watches
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Sell a Watch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;