import React from 'react';
import { watches } from '../../data/watches';
import WatchCard from '../ui/WatchCard';
import Button from '../ui/Button';

const FeaturedWatches: React.FC = () => {
  // Get first 6 watches to display
  const featuredWatches = watches.slice(0, 6);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Timepieces</h2>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredWatches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
          >
            Browse All Watches
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWatches;