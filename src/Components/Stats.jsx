import React from 'react';

function Stats() {
  return (
    <section className="bg-gray-900/90 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 25, label: "Years Experience" },
            { value: 93, label: "Projects Completed" },
            { value: 48, label: "Awards Won" },
            { value: 68, label: "Satisfied Clients" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-yellow-500">{stat.value}</span>
                <span className="text-xl text-yellow-500">+</span>
              </div>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
