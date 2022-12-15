import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsFillPersonFill } from "react-icons/bs";
import {TbMapSearch} from "react-icons/tb"
import { FaBed, FaCalendarAlt } from "react-icons/fa";

const Search = () => {
  // date selection
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // options selection
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // options handle
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="h-9 bg-white text-gray-400 flex items-center justify-between border-2 border-[#febb02] py-7 px-2 rounded-md absolute -bottom-8 w-full max-w-[1500px]">
      <div className="flex items-end gap-x-3 ">
        <FaBed className="text-3xl" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="outline-none"
        />
      </div>

      {/* date */}
      <div
        onClick={() => setOpenDate(!openDate)}
        className="flex items-center gap-x-3 cursor-pointer"
      >
        <FaCalendarAlt  className="text-2xl"/>
        <p className="-mb-[7px]">{`${format(date[0].startDate, "MM/dd/yyyy")} To ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</p>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="absolute top-14"
          />
        )}
      </div>

      {/* options */}
      <div className="cursor-pointer">
        <div
          onClick={() => setOpenOptions(!openOptions)}
          className="flex items-end"
        >
          <BsFillPersonFill className="text-3xl" />
          <p className="w-[279px] text-center -mb-[3px]">{`${options.adult} Adult ∙ ${options.children} Children ∙ ${options.room} Room`}</p>
        </div>
        {openOptions && (
          <div className="absolute top-14 lg:w-72 shadow-md space-y-3 p-4">
            <div className="flex justify-between">
              <p className="font-semibold">Adult</p>

              <div className="flex gap-x-4">
                <button
                  onClick={() => handleOption("adult", "d")}
                  disabled={options.adult <= 1}
                  className="bg-[#0071c2] px-3 shadow-lg text-white disabled:cursor-not-allowed disabled:bg-gray-500"
                >
                  -
                </button>
                <p className="text-black font-semibold w-8 text-center">
                  {options.adult}
                </p>
                <button
                  onClick={() => handleOption("adult", "i")}
                  className="bg-[#0071c2] px-3 shadow-lg text-white"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="font-semibold">Children</p>

              <div className="flex gap-x-4">
                <button
                  onClick={() => handleOption("children", "d")}
                  disabled={options.children <= 0}
                  className="bg-[#0071c2] px-3 shadow-lg text-white disabled:cursor-not-allowed disabled:bg-gray-500"
                >
                  -
                </button>
                <p className="text-black font-semibold w-8 text-center">
                  {options.children}
                </p>
                <button
                  onClick={() => handleOption("children", "i")}
                  className="bg-[#0071c2] px-3 shadow-lg text-white"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="font-semibold">Rooms</p>

              <div className="flex gap-x-4">
                <button
                  onClick={() => handleOption("room", "d")}
                  disabled={options.room <= 1}
                  className="bg-[#0071c2] px-3 shadow-lg text-white disabled:cursor-not-allowed disabled:bg-gray-500"
                >
                  -
                </button>
                <p className="text-black font-semibold w-8 text-center">
                  {options.room}
                </p>
                <button
                  onClick={() => handleOption("room", "i")}
                  className="bg-[#0071c2] px-3 shadow-lg text-white"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="">
        <button className="px-3 py-2 bg-[#0071c2] text-white flex gap-x-2 rounded-md">
          SEARCH <TbMapSearch className="text-2xl"/>
        </button>
      </div>
    </div>
  );
};

export default Search;
