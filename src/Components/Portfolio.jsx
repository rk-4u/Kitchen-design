import React from "react";

const portfolioItems = [
  { title: "E-Commerce Ui", img: "https://onilab.com/uploads/Ecommerce_Homepage_UX_2_197ffe2cb6.jpg" },
  { title: "SaaS Dashboard", img: "https://tailadmin.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhkc8ojqt%2Fproduction%2Fe8c7251a9eed63a9bb80403d7becaca5b694c5d0-1800x900.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75" },
  { title: "personal Portfolio", img: "https://i.pinimg.com/originals/f9/72/02/f972024105052829cf425522a4ab27df.jpg" },
  { title: "Interactive Blog", img: "https://i.pinimg.com/736x/4d/76/18/4d76185f58f8c010f843c2eb41268e44.jpg" },
  { title: "Web Development", img: "https://imgs.search.brave.com/bSpH8Sn83eRrpeT5q9YPWXQaJSOa7uh9RhQ7DZjAflw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzk0LzE5LzEw/LzM2MF9GXzE5NDE5/MTA1MV9rdlF6ZzBW/aXRSWE9ZQ0c3bDdo/Mjh0anRCNFZEN0pN/aC5qcGc" },
  { title: "Mobile Development", img: "https://www.techmango.net/wp-content/uploads/2022/04/mobile-app-development.png" },
];

function Portfolio() {
  return (
    <section className="relative py-20 bg-gray-900/90 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Portfolio</h2>
          <p className="max-w-full mx-auto text-gray-400 text-sm md:text-base">
            A showcase of our recent kitchen design transformations and custom cabinetry work.
          </p>

          {/* Portfolio Items */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden border border-white/10 shadow-md h-64"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
