import React from 'react';

function SafeExperience() {
  return (
    <section className="relative bg-gray-900/90 backdrop-blur-sm py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold mb-6">
              Ensuring a safe experience <br />from design to installation
            </h2>
            <p className="text-gray-400 mb-8">
              We prioritize safety at every step of your kitchen renovation journey, from the initial design consultation to the final installation details.
            </p>
            <button className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-md">
              Learn More
            </button>
          </div>

          {/* Image Area */}
          <div className="lg:w-1/2 relative h-[350px] lg:h-[450px]">
            {/* Background Image (larger) */}
            <div className="absolute top-0 left-0 w-full h-full scale-105 rounded-xl overflow-hidden border border-white/10">
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kitchen Background"
                className="w-full h-full object-cover filter grayscale opacity-30"
              />
            </div>

            {/* Foreground Image (smaller) */}
            <div className="relative z-10 w-[85%] mx-auto mt-6 rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kitchen Foreground"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafeExperience;
