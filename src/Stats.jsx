import React from 'react';

function Stats() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-yellow-500">25</span>
              <span className="text-xl text-yellow-500">+</span>
            </div>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
          
          <div>
            <div className="flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-yellow-500">93</span>
              <span className="text-xl text-yellow-500">+</span>
            </div>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>
          
          <div>
            <div className="flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-yellow-500">48</span>
              <span className="text-xl text-yellow-500">+</span>
            </div>
            <p className="text-gray-400 mt-2">Awards Won</p>
          </div>
          
          <div>
            <div className="flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-yellow-500">68</span>
              <span className="text-xl text-yellow-500">+</span>
            </div>
            <p className="text-gray-400 mt-2">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;