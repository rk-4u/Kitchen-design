import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">KITCHEN</h1>
        </div>
        
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">About</a></li>
            <li><a href="#" className="hover:text-yellow-500">Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Portfolio</a></li>
            <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="bg-yellow-500 px-4 py-2 rounded-md font-medium">Contact Us</button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;