import { Footer, Header } from "Components";
import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { TbMapSearch } from "react-icons/tb";
import { useLocation } from "react-router-dom";

export const HotelsList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);

  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Header type="hotelsList" />

      <div className="flex justify-center mt-5 tracking-wide">
        <div className="width flex gap-5">
          <div className="flex-[1] bg-secondary p-4 rounded-lg sticky">
            <h1 className="text-3xl font-semibold text-gray-700">Search</h1>
            {/* destination */}
            <div className="flex flex-col my-3">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder={destination}
                className="h-9 px-2 outline-none rounded-md placeholder:text-black"
              />
            </div>

            {/* date */}
            <div className="flex flex-col my-3">
              <label htmlFor="check-in-date">Check-in-date</label>
              <p
                onClick={() => setOpenDate(!openDate)}
                id="check-in-date"
                className="bg-white h-9 px-2 rounded-md flex items-center cursor-pointer"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} To ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </p>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className="rounded-md mt-1"
                />
              )}
            </div>

            {/* options */}
            <div className="flex flex-col my-3">
              <label
                htmlFor="options"
                className="mb-2 border-b border-black/40"
              >
                Options
              </label>
              {/* min price */}
              <div className="flex justify-between mb-3">
                <p>
                  Min Price<small>/per night</small>
                </p>
                <input
                  type="number"
                  name="minPrice"
                  id="minPrice"
                  className="w-24 h-9 rounded-md"
                />
              </div>

              {/* max price */}
              <div className="flex justify-between mb-3">
                <p>
                  Max Price<small>/per night</small>
                </p>
                <input
                  type="number"
                  name="maxPrice"
                  id="maxPrice"
                  className="w-24 h-9 rounded-md"
                />
              </div>

              {/* adult */}
              <div className="flex justify-between mb-3">
                <p>Adult</p>
                <input
                  type="number"
                  min={1}
                  name="adult"
                  id="adult"
                  placeholder={options.adult}
                  className="w-24 h-9 rounded-md pl-2 placeholder:text-black outline-none"
                />
              </div>

              {/* children */}
              <div className="flex justify-between mb-3">
                <p>Children</p>
                <input
                  type="number"
                  min={0}
                  name="children"
                  id="children"
                  placeholder={options.children}
                  className="w-24 h-9 rounded-md pl-2 placeholder:text-black outline-none"
                />
              </div>

              {/* room */}
              <div className="flex justify-between">
                <p>Room</p>
                <input
                  type="number"
                  min={1}
                  name="room"
                  id="room"
                  placeholder={options.room}
                  className="w-24 h-9 rounded-md pl-2 placeholder:text-black outline-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <button className="h-9 w-full flex justify-center items-center gap-x-2 bg-white text-primary font-semibold tracking-wide rounded-md">
                Search <TbMapSearch className="text-xl" />
              </button>
            </div>
          </div>
          <div className="flex-[3] bdr"></div>
        </div>
      </div>
    </div>
  );
};
