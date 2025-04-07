import React from 'react';

function Process() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="/api/placeholder/600/400" alt="Kitchen Design Process" className="rounded-lg w-full" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <div className="bg-gray-800 p-10 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Stunning kitchens, <br />simplified process</h2>
              </div>
              
              <p className="text-gray-400 mb-8">Our streamlined design and installation process makes creating your dream kitchen easy and stress-free.</p>
              
              <button className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-md">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;