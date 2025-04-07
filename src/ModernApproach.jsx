import React from 'react';

function ModernApproach() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-16">
            <h2 className="text-3xl font-bold mb-6">A modern approach <br />to design</h2>
            <p className="text-gray-400 mb-8">We combine cutting-edge technology with timeless design principles to create kitchens that are both beautiful and highly functional.</p>
            <button className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-md">Discover More</button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img src="/api/placeholder/600/400" alt="Modern Kitchen Design" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernApproach;