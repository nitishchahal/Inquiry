import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Email:</h3>
            <p className="text-gray-700">
              <a
                href="mailto:info@villageinquiry.com"
                className="text-blue-500"
              >
                info@villageinquiry.com
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h3 className="text-xl font-semibold">Phone:</h3>
            <p className="text-gray-700">+91-1234567890</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-wrap  space-x-4">
            <a href="#" className="text-blue-500">LinkedIn</a>
            <a href="#" className="text-blue-400">Twitter</a>
            <a href="#" className="text-gray-800">GitHub</a>
            <a href="#" className="text-pink-500">Instagram</a>
            <a href="#" className="text-blue-700">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
