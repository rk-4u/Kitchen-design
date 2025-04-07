import React from 'react';

function Features() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2">Creative solutions <br />by professional designers</h2>
          <p className="text-gray-400 max-w-2xl">Our team of expert designers creates custom kitchen solutions that perfectly blend aesthetics and functionality to meet your unique needs.</p>
          <button className="mt-6 text-yellow-500 flex items-center">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Concept Design" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Concept Design</h3>
              <p className="text-gray-400">Creative kitchen concepts tailored to your space and lifestyle</p>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Custom Cabinets" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Custom Cabinets</h3>
              <p className="text-gray-400">Precision-built cabinets designed for your specific needs</p>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Modern Fixtures" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Modern Fixtures</h3>
              <p className="text-gray-400">Contemporary fixtures to enhance functionality and style</p>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Expert Installation" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-400">Professional installation services for flawless results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;