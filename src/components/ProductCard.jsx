// import React from 'react';
import { FaStar } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaCartFlatbed } from "react-icons/fa6";
const ProductCard = ({ products, title, subtitle }) => {
    console.log(products);

    return (
        <div className="grid grid-cols-6 gap-1">
            <div className="col-span-2">
                <div className='flex flex-col space-y-4 h-full justify-between'>
                    <div>
                        <h2 className="text-2xl font-bold flex item-start">{title}</h2>
                        <p className="text-lg flex text-gray-500 item-start">{subtitle}</p>
                    </div>
                    <div className="flex item-start space-x-4 ">
                        <GrPrevious color="gray-400" />
                        <GrNext color="gray-400" />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src={item.thumbnail && item.thumbnail.uri && item.thumbnail.uri}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white flex item-start">
                                        {item.title}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal flex item-start">
                                    <span className="text-red-500">20%</span>  <span className="font-bold">{item.id}</span>$
                                </p>
                                <p className="mb-3 font-normal text-red-500 flex item-start">
                                    {item.type}
                                </p>
                                <div className="flex items-center mb-3">
                                    <p className="font-bold text-gray-700 flex items-center">
                                        <FaStar className="mr-1" /> {item.rating}
                                    </p>
                                </div>
                                <button
                                    className="border border-gray-500 px-2  flex items-center  hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                                    onClick={()=>{}}
                                >
                                    <FaCartFlatbed  className="text-primarycolor mr-2" /> 
                                    <span className="text-gray-500">test</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
