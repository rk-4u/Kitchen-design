import React from 'react';

function CustomerSatisfaction() {
  return (
    <section className="relative bg-gray-900/90 backdrop-blur-sm py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Extremely high standard of <br />customer satisfaction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Full Service',
              description: 'Comprehensive solutions from start to finish',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ),
            },
            {
              title: 'Secure Value',
              description: 'Premium quality at competitive prices',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              ),
            },
            {
              title: 'Experts',
              description: 'Skilled designers with years of experience',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              ),
            },
            {
              title: 'Integrity',
              description: 'Honest approach and transparent process',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-md text-center"
            >
              <div className="bg-gray-800/50 rounded-full p-6 mb-6 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerSatisfaction;
