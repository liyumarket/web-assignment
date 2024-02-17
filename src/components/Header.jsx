import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { PiArrowFatDownBold } from "react-icons/pi";

const Header = () => {
    return (
        <header className="flex items-center justify-center bg-white  p-4">

            <h2 className="text-2xl font-bold text-primarycolor flex item-start mr-4">Testvalley</h2>
            {/* Menu Icon */}
            <p className="font-bold text-primarycolor flex items-center">
                <FaBars className=" cursor-pointer mr-1" /> test
            </p>

            {/* Search Box */}
            <div className="relative mx-24 w-[30%]">
                <input
                    type="text"
                    placeholder="Search"
                    className="border px-8 py-2 rounded pl-10" // Increased padding for space on the left
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Another Icon */}
            <div className="flex items-center mx-24">

                <PiArrowFatDownBold /> <span> | test</span>
            </div>
        </header>
    );
};

export default Header;
