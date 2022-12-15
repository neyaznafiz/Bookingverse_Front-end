import { Header } from "Components";
import React from "react";
import Featured from "./Featured";
import PropertyList from "./PropertyList";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-24 flex flex-col items-center gap-8">
        <Featured />
        {/* property list section */}
        <h1 className="text-black text-2xl font-semibold width">
          Browse By Property Type
        </h1>
        <PropertyList/>
      </div>
    </div>
  );
};
