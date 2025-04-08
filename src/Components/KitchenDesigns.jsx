import React from 'react';

function KitchenDesigns() {
  return (
    <section className="relative py-20 bg-gray-900/90 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="uppercase text-yellow-500 tracking-wide mb-3">OUR GALLERY</p>
          <h2 className="text-3xl font-bold">Explore our kitchen designs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { alt: 'Modern Kitchen Design' },
            { alt: 'Kitchen Inspiration', overlay: true },
            { alt: 'Luxury Kitchen' },
            { alt: 'Contemporary Kitchen' },
            { alt: 'Minimalist Kitchen' },
            { alt: 'Traditional Kitchen' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-md relative"
            >
              <div className="relative h-64">
                <img
                  src="/api/placeholder/400/300"
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                {item.overlay && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-white">Kitchen Inspiration</h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KitchenDesigns;
