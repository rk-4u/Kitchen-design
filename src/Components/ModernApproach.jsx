import React from 'react';

function ModernApproach() {
  return (
    <section className="bg-gray-900/90 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section with Blur Effect */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-16">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-white">
                A modern approach <br />to design
              </h2>
              <p className="text-gray-300 mb-8">
                We combine cutting-edge technology with timeless design principles to create kitchens that are both beautiful and highly functional.
              </p>
              <button className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-md">
                Discover More
              </button>
            </div>
          </div>

          {/* Image Section with Subtle Blur Layer */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-md">
              <img
                src="https://as2.ftcdn.net/v2/jpg/07/58/66/89/1000_F_758668996_vNpHxRMgFi6lvrkPpiGHQJZ475QLjuUc.jpg"
                alt="Modern Kitchen Design"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernApproach;
