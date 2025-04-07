import React from 'react';

function CustomerSatisfaction() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16">Extremely high standard of <br />customer satisfaction</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 rounded-full p-6 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Full Service</h3>
            <p className="text-gray-400">Comprehensive solutions from start to finish</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 rounded-full p-6 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Value</h3>
            <p className="text-gray-400">Premium quality at competitive prices</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 rounded-full p-6 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Experts</h3>
            <p className="text-gray-400">Skilled designers with years of experience</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 rounded-full p-6 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-400">Honest approach and transparent process</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerSatisfaction;