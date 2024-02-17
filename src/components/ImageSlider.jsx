import React, { useState } from 'react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const ImageSlider = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(banners.length>0?1:0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-between">
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-300"
      >
   <GrPrevious />
      </button>

      <div className="flex items-center overflow-hidden">
        {banners.map((item, index) => (
          <img
            key={index}
            src={item.pcImageUrl}
            alt={`slide-${index}`}
            className={`w-3/4 h-auto mx-2 transition-all duration-300`}
            style={{ marginLeft: index === 0 ? `-${currentIndex * 25}%` : undefined }}
          />
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-300"
      >
        <GrNext color='grey-600'/>
      </button>
    </div>
  );
};

export default ImageSlider;
