import React from 'react';
import { ShieldCheck, Clock, Check, Truck } from 'lucide-react';
import Button from '../ui/Button';

const Authentication: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Authentication Process</h2>
          <p className="text-xl text-gray-600">Every watch goes through our rigorous multi-step authentication process before being shipped to buyers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/9981071/pexels-photo-9981071.jpeg" 
              alt="Watch Authentication Process" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShieldCheck size={24} className="text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Verification</h3>
                <p className="text-gray-600">Our team of certified horologists inspects every detail to ensure authenticity, from the movement to the dial and case construction.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock size={24} className="text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Timing Analysis</h3>
                <p className="text-gray-600">Each watch's movement is tested for accuracy and timing deviations to ensure it meets the manufacturer's specifications.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check size={24} className="text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Condition Assessment</h3>
                <p className="text-gray-600">We thoroughly document the watch's condition, noting any signs of wear or service to ensure transparency for buyers.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Truck size={24} className="text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Secure Delivery</h3>
                <p className="text-gray-600">After authentication, watches are carefully packaged and shipped via insured courier services with tracking.</p>
              </div>
            </div>

            <Button variant="primary" size="lg">Learn More About Authentication</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;