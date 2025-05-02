import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Store } from 'lucide-react';
import Button from '../components/ui/Button';

const SellerTypePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-silver-100 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-black text-center mb-4">
            Choose Your Seller Type
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12">
            Select the option that best describes you to get started selling on WatchLynx
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Individual Seller Card */}
            <div className="bg-white rounded-xl shadow-premium hover:shadow-premium-hover transition-shadow p-8 border border-silver-200">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-navy" />
              </div>
              <h2 className="font-display text-2xl text-black mb-4">
                Sell as an Individual
              </h2>
              <p className="text-gray-600 mb-6">
                Send your watch to WatchLynx for expert authentication before it is sent to buyer. We handle delivery or collection.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                  </span>
                  Mandatory authentication service
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                  </span>
                  Secure payment handling
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                  </span>
                  WatchLynx handles shipping
                </li>
              </ul>
              <Button 
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => navigate('/seller/register/individual')}
              >
                Continue as Individual Seller
              </Button>
            </div>

            {/* Dealer Card */}
            <div className="bg-white rounded-xl shadow-premium hover:shadow-premium-hover transition-shadow p-8 border border-silver-200">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                <Store className="w-8 h-8 text-navy" />
              </div>
              <h2 className="font-display text-2xl text-black mb-4">
                Sell as a Dealership
              </h2>
              <p className="text-gray-600 mb-6">
                List watches as a verified dealer. Buyers can choose optional authentication. You handle shipping or in-store collection.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                  </span>
                  Verified dealer badge
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                  </span>
                  Optional authentication service
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                  </span>
                  Direct shipping control
                </li>
              </ul>
              <Button 
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => navigate('/seller/register/dealer')}
              >
                Continue as Dealer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerTypePage;