import React from "react";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl capitalize text-headingColor  font-semibold  relative">
            Our Food & Fruits is fresh & healthy
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
