import React from "react";
import hotels from "../../Assets/PropertyList/hotels.webp";
import apartments from "../../Assets/PropertyList/apartments.jpg";
import resorts from "../../Assets/PropertyList/resorts.jpg";
import villas from "../../Assets/PropertyList/villas.jpg";
import cabins from "../../Assets/PropertyList/cabins.jpg";

const PropertyList = () => {
  return (
    <div className="width">
      <h1 className="text-black text-2xl font-semibold my-3 border-b-2 border-[#febb02] pb-2 tracking-wide">
        Browse By Property Type
      </h1>

      <div className="flex justify-between">
        <div className="rounded-lg overflow-hidden cursor-pointer">
          <img
            src={hotels}
            alt=""
            className="w-[280px] h-36 rounded-lg object-cover hover:scale-110 transition-all duration-300"
          />
          <div>
            <h1 className="text-xl font-semibold tracking-wide">Hotels</h1>
            <h2>233 hotels</h2>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden cursor-pointer">
          <img
            src={apartments}
            alt=""
            className="w-[280px] h-36 rounded-lg object-cover hover:scale-110 transition-all duration-300"
          />
          <div className="my-2">
            <h1 className="text-xl font-semibold tracking-wide">Apartments</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden cursor-pointer">
          <img
            src={resorts}
            alt=""
            className="w-[280px] h-36 rounded-lg object-cover hover:scale-110 transition-all duration-300"
          />
          <div className="my-2">
            <h1 className="text-xl font-semibold tracking-wide">Resorts</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden cursor-pointer">
          <img
            src={villas}
            alt=""
            className="w-[280px] h-36 rounded-lg object-cover hover:scale-110 transition-all duration-300"
          />
          <div className="my-2">
            <h1 className="text-xl font-semibold tracking-wide">Villas</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden cursor-pointer">
          <img
            src={cabins}
            alt=""
            className="w-[280px] h-36 rounded-lg object-cover hover:scale-110 transition-all duration-300"
          />
          <div className="my-2">
            <h1 className="text-xl font-semibold tracking-wide">Cabins</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
