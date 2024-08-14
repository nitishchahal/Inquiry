import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">Village Inquiry</a>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-400 hover:underline">Home</a>
          <a href="#info" className="hover:text-gray-400  hover:underline">Info</a>
          <a href="#explore" className="hover:text-gray-400 hover:underline">Explore</a>
          <a href="#Inquiry" className="hover:text-gray-400 hover:underline">Form</a>
          <a href="#contact" className="hover:text-gray-400 hover:underline">Contact</a>
        </div>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
        {isOpen && (
          <div className="md:hidden absolute right-4 top-14 bg-gray-800 text-white rounded-lg shadow-lg w-48">
            <a href="#home" className="block px-4 py-2 hover:bg-gray-400">Home</a>
            <a href="#info" className="block px-4 py-2 hover:bg-gray-400">Info</a>
            <a href="#explore" className="block px-4 py-2 hover:bg-gray-700">Explore</a>
            <a href="#Inquiry" className="block px-4 py-2 hover:bg-gray-700">Form</a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
