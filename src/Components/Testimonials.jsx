import React from 'react';

function Testimonials() {
  return (
    <section className="relative py-20 bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Here's what our satisfied <br />clients are saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
              <div className="text-gray-300">5.0</div>
            </div>
            <p className="text-gray-200 mb-6">
              "The team at Kitchen transformed our outdated space into a stunning, functional
              kitchen that exceeded our expectations. Their attention to detail and commitment to
              quality was evident throughout the entire process."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-500 mr-4"></div>
              <div>
                <h4 className="font-semibold text-white">Jessica Smith</h4>
                <p className="text-gray-400 text-sm">Residential Client</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
              <div className="text-gray-300">5.0</div>
            </div>
            <p className="text-gray-200 mb-6">
              "Working with the kitchen design experts was a pleasure from start to finish. They
              listened to our needs and created a kitchen that perfectly suits our lifestyle while
              staying within our budget."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-500 mr-4"></div>
              <div>
                <h4 className="font-semibold text-white">Michael Turner</h4>
                <p className="text-gray-400 text-sm">Commercial Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
