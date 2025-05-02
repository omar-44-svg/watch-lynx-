import React, { useState } from 'react';
import { watches } from '../data/watches';
import WatchCard from '../components/ui/WatchCard';
import { Search, Sliders } from 'lucide-react';

const BrowsePage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Filter options
  const brands = Array.from(new Set(watches.map(watch => watch.brand)));
  const conditions = Array.from(new Set(watches.map(watch => watch.condition)));
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Watches</h1>
            <p className="text-gray-600">Discover and filter from our collection of authentic timepieces</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button 
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Sliders size={18} />
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search watches..."
                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Min</label>
                    <input
                      type="number"
                      placeholder="$0"
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Max</label>
                    <input
                      type="number"
                      placeholder="$150,000"
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Brand</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {brands.map((brand, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`brand-${index}`}
                        type="checkbox"
                        className="h-4 w-4 text-blue-900 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`brand-${index}`} className="ml-2 text-sm text-gray-700">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Condition</h3>
                <div className="space-y-2">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`condition-${index}`}
                        type="checkbox"
                        className="h-4 w-4 text-blue-900 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`condition-${index}`} className="ml-2 text-sm text-gray-700">
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Seller Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="seller-dealer"
                      type="checkbox"
                      className="h-4 w-4 text-blue-900 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="seller-dealer" className="ml-2 text-sm text-gray-700">
                      Dealer
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="seller-individual"
                      type="checkbox"
                      className="h-4 w-4 text-blue-900 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="seller-individual" className="ml-2 text-sm text-gray-700">
                      Individual
                    </label>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Watch listings */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
              <span className="text-gray-600">{watches.length} watches found</span>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm text-gray-600">Sort by:</label>
                <select
                  id="sort"
                  className="py-1 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {watches.map((watch) => (
                <WatchCard key={watch.id} watch={watch} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <div className="flex">
                <button className="px-4 py-2 mx-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 mx-1 border border-blue-900 rounded-md bg-blue-900 text-white">
                  1
                </button>
                <button className="px-4 py-2 mx-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 mx-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 mx-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;