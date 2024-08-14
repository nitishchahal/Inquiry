import React from "react";

const HomeSection = () => {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Village Inquiry</h1>
        <p className="text-xl mb-6">Explore and learn more about villages around the world.</p>
        <a href="#info" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</a>
      </div>
    </section>
  );
};

export default HomeSection;
