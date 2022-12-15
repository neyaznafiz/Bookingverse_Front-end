import { Header } from "Components";
import React from "react";
import Featured from "./Featured";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-24 flex flex-col items-center gap-8">
        <Featured />
      </div>
    </div>
  );
};
