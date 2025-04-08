import React from 'react';

function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
      </div>
      <div className="container mx-auto px-6 pt-24 relative z-10 flex flex-col items-start justify-center h-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Design Your Kitchen with the Experts</h1>
          <p className="text-lg mb-8 text-gray-300">Transform your space into a stunning, functional kitchen with our expert design team</p>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-md">Request a Quote</button>
            <button className="border border-white px-6 py-3 rounded-md">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;