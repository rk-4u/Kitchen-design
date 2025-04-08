import React from 'react';

function Features() {
  return (
    <section className="relative py-20 bg-gray-900/90 backdrop-blur-sm overflow-hidden">
      {/* Foreground Content */}
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Creative solutions <br />by professional designers
          </h2>
          <p className="text-gray-300">
            Our team of expert designers creates custom kitchen solutions that perfectly blend aesthetics and functionality to meet your unique needs.
          </p>
          <button className="mt-6 text-yellow-400 hover:text-yellow-300 transition flex items-center">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              title: 'Concept Design',
              desc: 'Creative kitchen concepts tailored to your space and lifestyle',
              img: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              title: 'Custom Cabinets',
              desc: 'Precision-built cabinets designed for your specific needs',
              img: 'https://as2.ftcdn.net/v2/jpg/07/58/66/89/1000_F_758668996_vNpHxRMgFi6lvrkPpiGHQJZ475QLjuUc.jpg',
            },
            {
              title: 'Modern Fixtures',
              desc: 'Contemporary fixtures to enhance functionality and style',
              img: 'https://as2.ftcdn.net/v2/jpg/02/49/58/23/1000_F_249582332_DcR8e5IHqgB32U7AjdBqbjMhhSfkBcaE.jpg',
            },
            {
              title: 'Expert Installation',
              desc: 'Professional installation services for flawless results',
              img: 'https://as2.ftcdn.net/v2/jpg/04/46/73/23/1000_F_446732330_sagMrunUavJovxmdQJWZIUWV6HrbdipK.jpg',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="  bg-gray-900/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-md transition"
            >
              <img src={feature.img} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
