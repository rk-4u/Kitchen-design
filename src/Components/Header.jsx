import React from "react";
import "./Header.css";

function Header() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">KITCHEN</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-white">
            {["hero", "features", "process", "portfolio", "latest-news", "call-to-action"].map((section, idx) => (
              <li key={section}>
                <button
                  onClick={() => handleScroll(section)}
                  className="hover:text-yellow-500 capitalize"
                >
                  {["Home", "About", "Services", "Portfolio", "Blog", "Contact"][idx]}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button - Visible on all screens now */}
        <button
          onClick={() => handleScroll("call-to-action")}
          className="bg-yellow-500 px-4 py-2 rounded-md font-medium text-sm md:text-base"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}

export default Header;
