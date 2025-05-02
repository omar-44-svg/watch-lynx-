import React from 'react';
import { sellers } from '../../data/sellers';
import SellerCard from '../ui/SellerCard';
import Button from '../ui/Button';

const SellerTypes: React.FC = () => {
  // Get first 3 sellers to display
  const featuredSellers = sellers.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted Sellers Network</h2>
          <p className="text-xl text-gray-600">
            Purchase with confidence from our network of verified individual collectors and established dealers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredSellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-lg p-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Seller</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-white mr-3 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Individual Sellers</h4>
                  <p className="text-gray-600">Perfect for collectors looking to sell pieces from their personal collection. Lower fees and flexible listing options.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-white mr-3 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Professional Dealers</h4>
                  <p className="text-gray-600">For established businesses. Get a verified dealer badge, integration options, and dedicated account management.</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="primary">Register as Seller</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg" 
              alt="Luxury Watches Collection" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerTypes;