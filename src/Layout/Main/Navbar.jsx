import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const activeClass = "border-b border-white px-1";
  const { pathname } = useLocation();

  return (
    <div className="h-[50px] bg-[#013986] flex justify-center uppercase transition-all duration-300">
      <div className="w-full max-w-[1500px] text-white flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl uppercase">
            bookingverse
          </Link>
        </div>

        <div className="border-b px-2 text-sm tracking-wider">
          <Link to="/hotels">Book your holiday</Link>
        </div>

        <div className="flex gap-x-4">
          {/* hotels */}
          <Link
            to="/hotels"
            className={`${
              pathname === "/hotels" ? activeClass : "tracking-wide"
            }`}
          >
            Hotels
          </Link>

          <button className="bg-white text-[#013986] px-3 border-none uppercase">
            Register
          </button>
          <button className="bg-white text-[#013986] px-3 border-none uppercase">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
