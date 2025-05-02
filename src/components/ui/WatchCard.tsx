import React from 'react';
import { Watch } from '../../types';
import { ShieldCheck } from 'lucide-react';
import Button from './Button';

interface WatchCardProps {
  watch: Watch;
}

const WatchCard: React.FC<WatchCardProps> = ({ watch }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={watch.images[0]} 
          alt={`${watch.brand} ${watch.model}`} 
          className="w-full h-full object-cover"
        />
        {watch.seller.verified && (
          <div className="absolute top-2 right-2 bg-blue-900 text-white text-xs py-1 px-2 rounded-full flex items-center">
            <ShieldCheck size={12} className="mr-1" />
            Verified Seller
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{watch.brand}</h3>
            <p className="text-sm text-gray-600">{watch.model}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-blue-900">${watch.price.toLocaleString()}</p>
            {watch.originalPrice && (
              <p className="text-sm text-gray-500 line-through">${watch.originalPrice.toLocaleString()}</p>
            )}
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-600 block">Condition: <span className="font-medium">{watch.condition}</span></span>
            <span className="text-xs text-gray-600 block">Year: <span className="font-medium">{watch.year}</span></span>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-600 block">{watch.seller.type}</span>
            <div className="flex items-center justify-end">
              <svg className="w-3 h-3 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-xs font-medium">{watch.seller.rating}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Button variant="primary" fullWidth>View Details</Button>
          <Button variant="outline" fullWidth>Make Offer</Button>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;