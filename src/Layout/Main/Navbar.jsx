import React from "react";

const Navbar = () => {
  return (
    <div className="h-[50px] bdr bg-[#013986] flex justify-center uppercase">
      <div className="w-[100%] max-w-[1500px] text-white flex justify-between items-center">
        <h1 className="text-2xl uppercase">lamabooking</h1>
        <div className="flex gap-x-4">
          <button className="bg-white text-[#013986] px-3 border-none uppercase">
            Register
          </button>
          <button className="bg-white text-[#013986] px-3 border-none uppercase">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
