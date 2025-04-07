import React from 'react';

function KitchenDesigns() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="uppercase text-yellow-500 tracking-wide mb-3">OUR GALLERY</p>
          <h2 className="text-3xl font-bold">Explore our kitchen designs</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Modern Kitchen Design" className="w-full h-64 object-cover" />
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-64">
              <img src="/api/placeholder/400/300" alt="Kitchen Inspiration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <h3 className="text-xl font-semibold">Kitchen Inspiration</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Luxury Kitchen" className="w-full h-64 object-cover" />
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Contemporary Kitchen" className="w-full h-64 object-cover" />
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Minimalist Kitchen" className="w-full h-64 object-cover" />
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Traditional Kitchen" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default KitchenDesigns;