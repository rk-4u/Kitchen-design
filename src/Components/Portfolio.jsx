import React from "react";

function Portfolio() {
  return (
    <section className="relative py-20 bg-gray-900/90 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Replace this with your actual portfolio items later */}
        <div className="text-center text-gray-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Portfolio</h2>
          <p className="max-w-full mx-auto text-gray-400 text-sm md:text-base truncate">
            A showcase of our recent kitchen design transformations and custom
            cabinetry work.
          </p>

          {/* Placeholder content - you can map over actual items here */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-900/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-md h-64 flex items-center justify-center text-gray-400"
              >
                Portfolio Item {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
