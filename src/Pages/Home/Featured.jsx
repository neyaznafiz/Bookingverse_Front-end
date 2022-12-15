import React from "react";
import dublin from "../../Assets/Featured/dublin.jpeg";
import austin from "../../Assets/Featured/austin.jpeg";
import lasVegas from "../../Assets/Featured/las-vegus.jpg";
import truckee from "../../Assets/Featured/truckee.jpeg";
import dubai from "../../Assets/Featured/dubai.jpeg";
import italy from "../../Assets/Featured/italy.jpg";

const Featured = () => {
  return (
    <div className="width flex justify-between gap-3 z-[1] mb-20 text-white">
      <div className="flex flex-wrap w-1/2 gap-3">
        <div className="flex gap-3">
          <div className="w-1/2 overflow-hidden cursor-pointer relative">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-[272px] hover:scale-110 transition-all "
              src={dublin}
            />
            <div className="absolute bottom-5 left-5">
              <h1 className="text-3xl font-semibold uppercase">Dublin</h1>
              <h2 className="text-xl font-semibold tracking-wide">
                123 Properties
              </h2>
            </div>
          </div>

          <div className="w-1/2 overflow-hidden cursor-pointer relative">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-[272px] hover:scale-110 transition-all "
              src={lasVegas}
            />
            <div className="absolute bottom-5 left-5">
              <h1 className="text-3xl font-semibold uppercase">Las Vegas</h1>
              <h2 className="text-xl font-semibold tracking-wide">
                533 Properties
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-[275px] overflow-hidden cursor-pointer relative">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full hover:scale-110 transition-all "
              src={austin}
            />
            <div className="absolute bottom-5 left-5">
              <h1 className="text-3xl font-semibold uppercase">Austin</h1>
              <h2 className="text-xl font-semibold tracking-wide">
                532 properties
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-1/2 gap-3">
        <div className="w-full">
          <div className="w-full h-[275px] overflow-hidden cursor-pointer relative">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full hover:scale-110 transition-all "
              src={truckee}
            />
            <div className="absolute bottom-5 left-5">
              <h1 className="text-3xl font-semibold uppercase">Truckee</h1>
              <h2 className="text-xl font-semibold tracking-wide">
                342 properties
              </h2>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-1/2 overflow-hidden cursor-pointer relative">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-[272px]  hover:scale-110 transition-all "
              src={dubai}
            />
            <div className="absolute bottom-5 left-5">
              <h1 className="text-3xl font-semibold uppercase">Dubai</h1>
              <h2 className="text-xl font-semibold tracking-wide">
                642 properties
              </h2>
            </div>
          </div>

          <div className="w-1/2 overflow-hidden cursor-pointer relative">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-[272px]  hover:scale-110 transition-all"
              src={italy}
            />
            <div className="absolute bottom-5 left-5">
              <h1 className="text-3xl font-semibold uppercase">Italy</h1>
              <h2 className="text-xl font-semibold tracking-wide">
                220 properties
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
