import React from 'react';

function LatestNews() {
  return (
    <section className="bg-gray-900/90 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Follow the latest news</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "2025 Kitchen Design Trends You Should Know",
              desc: "Discover the latest kitchen design trends that are gaining popularity this year.",
              date: "March 15, 2025",
              readTime: "5 min read",
              image: "https://i.pinimg.com/736x/f7/5d/12/f75d120fe1081e53e0193939ef2c5994.jpg",
            },
            {
              title: "How to Choose the Perfect Kitchen Materials",
              desc: "A guide to selecting durable and stylish materials for your kitchen renovation.",
              date: "February 28, 2025",
              readTime: "4 min read",
              image: "https://i.pinimg.com/736x/7e/d4/e4/7ed4e446d1912966e78bc3ae8791512b.jpg",
            },
            {
              title: "Making the Most of Small Kitchen Spaces",
              desc: "Creative solutions to maximize functionality in compact kitchen layouts.",
              date: "February 10, 2025",
              readTime: "6 min read",
              image: "https://i.pinimg.com/736x/0b/c9/73/0bc9734e1ad017cd54b287a8cdbafdb1.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-md"
            >
              <img src={item.image} alt={item.title} className="w-full h-48  transition-transform duration-300 ease-in-out hover:scale-105 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
