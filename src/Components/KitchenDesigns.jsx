import React from 'react';

const Gallery = [
  { title: "E-Commerce Ui", img: "https://i.pinimg.com/736x/54/bb/05/54bb05e99bd91f68b938fbc9027df5d9.jpg" },
  { title: "SaaS Dashboard", img: "https://i.pinimg.com/736x/1e/23/4e/1e234e4a23bd07e262d1cb0c98c91c43.jpg" },
  { title: "personal Portfolio", img: "https://i.pinimg.com/736x/17/11/41/1711417ee73b1bfb141f23bcb1d4c61c.jpg" },
  { title: "Interactive Blog", img: "https://i.pinimg.com/736x/c8/25/83/c825838783f2413ee7854dbb606f3167.jpg" },
  { title: "Web Development", img: "https://i.pinimg.com/736x/b5/ed/20/b5ed204bd210f6e447021be4ec892e65.jpg" },
  { title: "Mobile Development", img: "https://i.pinimg.com/736x/39/bc/01/39bc01b46ed5836a86b091242f54091c.jpg" },
];

function KitchenDesigns() {
  return (
    <section className="relative py-20 bg-gray-900/90 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="uppercase text-yellow-500 tracking-wide mb-3">OUR GALLERY</p>
          <h2 className="text-3xl font-bold">Explore our kitchen designs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Gallery.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-md relative"
            >
              <div className="relative h-64">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full transition-transform duration-300 ease-in-out hover:scale-105 h-full object-cover"
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
