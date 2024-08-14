import React from "react";
import img1 from './Images/shankaracharyatemplesrinagar.jpg';
import img2 from './Images/vaishno-devi-sculpture.jpg';
import img3 from './Images/RoyalCastle.avif';


const ExploreSection = () => {
  return (
    <section id="explore" className="py-20 bg-gray-100">
      <div className="container mx-auto bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Explore Village: Srinagar
        </h1>
        <div className="text-gray-700">
          <h2 className="text-xl font-semibold mb-2">Location:</h2>
          <p>
            Srinagar is a major city and the summer capital of Jammu and
            Kashmir, located in the northern part of India. It is situated at an
            elevation of about 1,584 meters (5,200 feet) above sea level.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">About Srinagar:</h2>
          <p>
            Srinagar is renowned for its picturesque beauty, with stunning
            landscapes that include serene lakes, lush gardens, and the majestic
            Himalayas in the background. The city is known for its rich history,
            vibrant culture, and unique local traditions.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Attractions:</h2>
          <ul className="list-disc pl-5 mb-6">
            <li>
              <strong>Dal Lake:</strong> Famous for its houseboats and shikaras
              (wooden boats). A major attraction for tourists.
            </li>
            <li>
              <strong>Mughal Gardens:</strong> Includes Shalimar Bagh, Nishat
              Bagh, and Chashme Shahi, showcasing stunning Mughal architecture
              and horticulture.
            </li>
            <li>
              <strong>Jama Masjid:</strong> An ancient mosque known for its
              wooden architecture and historical significance.
            </li>
            <li>
              <strong>Shankaracharya Temple:</strong> A revered Hindu temple
              offering panoramic views of the city and the lake.
            </li>
            <li>
              <strong>Royal Castle:</strong> A historic site reflecting the
              grandeur of the local royal heritage.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Local Cuisine:</h2>
          <p>
            Srinagar's cuisine is famous for its traditional Kashmiri dishes,
            including <em>Rogan Josh</em> (spiced lamb curry), <em>Yakhni</em>{" "}
            (yogurt-based curry), and <em>Kahwa</em> (spiced tea). The local
            food is known for its rich flavors and aromatic spices.
          </p>

          {/* Image Section */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Famous Temples:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={img1}
                alt="Shankaracharya Temple"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                Shankaracharya Temple
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={img2}
                alt="Shri Mata Vaishno devi"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                Shri Mata Vaishno devi
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={img3}
                alt="Royal Castle"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                Royal Castle
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
