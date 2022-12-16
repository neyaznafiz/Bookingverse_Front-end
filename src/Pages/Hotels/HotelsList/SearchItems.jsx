import React from "react";

const SearchItems = () => {
  return (
    <div className="border border-gray-400 flex justify-between rounded-md gap-5 p-3 mb-5">
      <div className="overflow-hidden rounded-md">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="w-52 h-52 rounded-md hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col flex-[2] gap-2">
        <h1 className="text-2xl font-semibold tracking-wider">
          Tower Street Apartments
        </h1>
        <span className="text-sm tracking-wider font-semibold">
          500m from center
        </span>
        <span className="text-base bg-green-700 text-white w-max px-2 rounded-sm">
          Free airport taxi
        </span>
        <span className="text-base font-semibold tracking-wider">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-base">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-base text-green-800 font-black tracking-wider">
          Free cancellation{" "}
        </span>
        <span className="text-base text-green-800 tracking-wider -mt-2">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="flex-[1] flex flex-col justify-between">
        <div className=" flex justify-between items-end">
          <span className="font-semibold">Excellent</span>
          <button className="bg-primary text-white px-3 font-semibold rounded-md h-9">
            8.9
          </button>
        </div>
        <div className="text-right flex flex-col items-end gap-2">
          <span className="">$112</span>
          <span className="text-base text-gray-600">
            Includes taxes and fees
          </span>
          <button className="bg-primary text-white w-[183px] rounded-sm">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
