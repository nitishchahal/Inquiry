import React from 'react';
import img1 from './Images/Dawar.jpg';
import img2 from './Images/Meeting.jpeg';
import img3 from './Images/Festival.webp';
import img4 from './Images/School.jpg';

const InfoSection = () => {
  return (
    <div id="info" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          About My Village
        </h2>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={img1}
              alt="Village Landscape"
              className="rounded-lg shadow-lg width-[366px] height-[244px]"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to Bakhrak, a beautiful and thriving community located in the heart of J&K . Known for its rich cultural heritage, warm hospitality, and lush green landscapes, our village is home to a vibrant population that values tradition and innovation alike.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Bakhrak is surrounded by fertile fields and scenic views, making it a great place for agriculture and outdoor activities. The village boasts a variety of amenities, including schools, and places of worship, ensuring a high quality of life for all residents.
            </p>
            <p className="text-lg text-gray-600">
              Our community is closely knit, with a strong emphasis on helping one another. Any Village Inquiry Portal is a testament to our commitment to making life easier for all residents by providing a centralized platform for addressing your needs and concerns.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="order-last md:order-first">
            <p className="text-lg text-gray-600 mb-4">
              Whether you're looking for information on government services, agricultural advice, or healthcare support, our portal is designed to guide you every step of the way. We aim to bridge the gap between you and the essential services you need, ensuring you have access to the right information at the right time.
            </p>
            <p className="text-lg text-gray-600">
              Our team is dedicated to maintaining a user-friendly platform that is accessible to everyone. With local language support and easy navigation, the [Village Name] Inquiry Portal is here to serve you, making sure your voice is heard and your questions are answered.
            </p>
          </div>
          <div>
            <img
              src={img2}
              alt="Community Meeting"
              className="rounded-lg shadow-lg width-[366px] height-[244px]"
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <img
              src={img3}
              alt="Village Festival"
              className="rounded-lg shadow-lg width-[366px] height-[244px]"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Our Villages is known for its vibrant festivals and cultural events that bring the community together. Our village celebrates Basant panchami, which is a highlight of the year, attracting visitors from neighboring areas and beyond. This festival is a reflection of our rich traditions, featuring music, dance, and local crafts.
            </p>
            <p className="text-lg text-gray-600">
              During the festival, the village comes alive with color and joy, providing a perfect opportunity for both residents and visitors to experience the warmth and hospitality that Bakhrak is known for. The festival is not only a time for celebration but also a time to strengthen the bonds within our community.
            </p>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="order-last md:order-first">
            <p className="text-lg text-gray-600 mb-4">
              Education is a priority in every Village, and we are proud to have several well-established schools that provide quality education to our children. Our schools are equipped with modern facilities and a dedicated team of teachers who are committed to nurturing the next generation of leaders.
            </p>
            <p className="text-lg text-gray-600">
              In addition to formal education, Village heads also offers a variety of extracurricular activities, encouraging students to explore their talents in sports, arts, and culture. Our educational institutions are a cornerstone of the community, fostering a love for learning and personal development.
            </p>
          </div>
          <div>
            <img
              src={img4}
              alt="School Building"
              className="rounded-lg shadow-lg width-[366px] height-[244px]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoSection;
