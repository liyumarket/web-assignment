import React from 'react';

const ImageWithTitle = ({ shortcuts }) => {
  return (
    <div className='flex'>
      {shortcuts.map((item, index) => (
        <div key={index} className="text-center m-2">
          <img src={item.imageUrl} alt={`Image ${index}`} className="w-full h-auto" />
          <h2 className="text-normal font-bold text-gray-500 mt-2">{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ImageWithTitle;
