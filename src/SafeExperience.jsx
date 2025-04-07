import React from 'react';

function SafeExperience() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold mb-6">Ensuring a safe experience <br />from design to installation</h2>
            <p className="text-gray-400 mb-8">We prioritize safety at every step of your kitchen renovation journey, from the initial design consultation to the final installation details.</p>
            <button className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-md">Learn More</button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden">
              <img src="/api/placeholder/600/400" alt="Kitchen Installation" className="w-full" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 rounded-lg overflow-hidden border-4 border-gray-800">
              <img src="/api/placeholder/400/300" alt="Kitchen Detail" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafeExperience;