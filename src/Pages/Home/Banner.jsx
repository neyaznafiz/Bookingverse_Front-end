import React from "react";
import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa";

const Banner = () => {
  const activeClass = "border-b-2 px-1";

  return (
    <div className="bg-[#013986] flex justify-center text-white transition-all duration-300">
      <div className="w-full max-w-[1500px] mt-5 mb-[100px]">

        {/* banner nav */}

        <div className="flex gap-10">
          <div className="flex items-center gap-2">
            <FaBed />
            <span>Stays</span>
          </div>

          <div className="flex items-center gap-2 ">
            <FaPlane />
            <span>Flights</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCar />
            <span>Car Rentals</span>
          </div>

          <div className="flex items-center gap-2">
            <FaBed />
            <span>Attractions</span>
          </div>

          <div className="flex items-center gap-2">
            <FaTaxi />
            <span>Airport Taxis</span>
          </div>
        </div>

        {/* title */}
        <h1 className="text-4xl font-bold tracking-wide my-5">A lifetime of discount? It's Genius.</h1>
        <p className="my-5"> Get rewarded for your travels - unlock instant saving of 10% or more with a free Lamabooking  account</p>

        <button className="bg-[#0071c2] px-3 py-2 shadow-lg">Sign In / Register</button>
        
      </div>
    </div>
  );
};

export default Banner;
