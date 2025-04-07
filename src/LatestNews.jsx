import React from 'react';

function LatestNews() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Follow the latest news</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/250" alt="Kitchen Design Trends" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">2025 Kitchen Design Trends You Should Know</h3>
              <p className="text-gray-400 mb-4">Discover the latest kitchen design trends that are gaining popularity this year.</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>March 15, 2025</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/250" alt="Kitchen Materials" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">How to Choose the Perfect Kitchen Materials</h3>
              <p className="text-gray-400 mb-4">A guide to selecting durable and stylish materials for your kitchen renovation.</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>February 28, 2025</span>
                <span className="mx-2">•</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/250" alt="Small Kitchen Spaces" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Making the Most of Small Kitchen Spaces</h3>
              <p className="text-gray-400 mb-4">Creative solutions to maximize functionality in compact kitchen layouts.</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>February 10, 2025</span>
                <span className="mx-2">•</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;