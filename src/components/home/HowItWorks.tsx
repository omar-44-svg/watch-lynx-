import React, { useState } from 'react';
import { buyerSteps, sellerSteps } from '../../data/steps';
import StepCard from '../ui/StepCard';
import Button from '../ui/Button';

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buyers' | 'sellers'>('buyers');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            A simple process designed to provide security and confidence for both buyers and sellers.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-base font-medium rounded-l-lg focus:z-10 focus:outline-none ${
                activeTab === 'buyers'
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('buyers')}
            >
              For Buyers
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-base font-medium rounded-r-lg focus:z-10 focus:outline-none ${
                activeTab === 'sellers'
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('sellers')}
            >
              For Sellers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {activeTab === 'buyers'
            ? buyerSteps.map((step) => (
                <StepCard key={step.id} step={step} />
              ))
            : sellerSteps.map((step) => (
                <StepCard key={step.id} step={step} />
              ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
          >
            {activeTab === 'buyers' ? 'Start Browsing' : 'Become a Seller'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;