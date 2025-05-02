import React from 'react';
import { Seller } from '../../types';
import { ShieldCheck, MapPin } from 'lucide-react';

interface SellerCardProps {
  seller: Seller;
}

const SellerCard: React.FC<SellerCardProps> = ({ seller }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
            <img
              src={seller.image || 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'}
              alt={seller.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-900">{seller.name}</h3>
              {seller.verified && (
                <ShieldCheck size={16} className="ml-1 text-blue-900" />
              )}
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <span className={`font-medium ${seller.type === 'Dealer' ? 'text-amber-600' : 'text-blue-900'}`}>
                {seller.type}
              </span>
              <span className="mx-1">•</span>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>{seller.rating}</span>
              </div>
            </div>
            <div className="flex items-center text-xs text-gray-600 mt-1">
              <MapPin size={12} className="mr-1" />
              <span>{seller.location}</span>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between text-sm">
            <span>{seller.sales} watches sold</span>
            <span>Member since {new Date(seller.joinedDate).getFullYear()}</span>
          </div>
          {seller.description && (
            <p className="mt-2 text-sm text-gray-600">{seller.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerCard;