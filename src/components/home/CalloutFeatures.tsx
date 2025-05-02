import React from 'react';
import { 
  Truck, 
  MessageCircle, 
  Shield, 
  BarChart, 
  Package, 
  Search
} from 'lucide-react';

const CalloutFeatures: React.FC = () => {
  const features = [
    {
      title: 'Delivery or Collection',
      description: 'Choose between secure delivery or in-person collection for local transactions.',
      icon: <Truck size={24} className="text-blue-900" />
    },
    {
      title: 'Live Chat with Sellers',
      description: 'Direct communication with sellers to ask questions and negotiate.',
      icon: <MessageCircle size={24} className="text-blue-900" />
    },
    {
      title: 'Buyer Protection',
      description: 'Secure escrow payments released only after authentication and approval.',
      icon: <Shield size={24} className="text-blue-900" />
    },
    {
      title: 'Market Insights',
      description: 'Access to market data and price trends to make informed decisions.',
      icon: <BarChart size={24} className="text-blue-900" />
    },
    {
      title: 'Tracked Shipping',
      description: 'Full tracking and insurance for all watch shipments.',
      icon: <Package size={24} className="text-blue-900" />
    },
    {
      title: 'Verified Listings',
      description: 'All listings are reviewed to ensure accuracy and quality.',
      icon: <Search size={24} className="text-blue-900" />
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Experience</h2>
          <p className="text-xl text-gray-600">
            WatchLynx offers a complete luxury experience with features designed for both buyers and sellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalloutFeatures;