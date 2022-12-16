import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // const activeClass = "border-b border-white px-1";
  // const { pathname } = useLocation();

  return (
    <div className="h-[50px] bg-primary flex justify-center uppercase transition-all duration-300 sticky top-0">
      <div className="width text-white flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl uppercase">
            bookingverse
          </Link>
        </div>

        <div className="border-b px-2 text-sm tracking-wider cursor-pointer">
          {/* <Link to="/hotels"> */}
          <p>Book your holiday</p>
          {/* </Link> */}
        </div>

        <div className="flex gap-x-4">
          {/* hotels */}
          {/* <Link
            to="/hotels"
            className={`${
              pathname === "/hotels" ? activeClass : "tracking-wide"
            }`}
          >
            Hotels
          </Link> */}

          <button className="bg-white text-primary px-3 border-none uppercase">
            Register
          </button>
          <button className="bg-white text-primary px-3 border-none uppercase">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
