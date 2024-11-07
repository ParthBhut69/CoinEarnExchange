"use client";
import React, { useState } from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  // State to manage toggle for color change
  const [isDark, setIsDark] = useState(false);

  // Toggle function to switch the color between black and white
  const handleToggleColor = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Clients Section */}
      <section
        className={`border border-x-0 border-y-stroke ${isDark ? 'bg-black' : 'bg-alabaster'} py-11 dark:border-y-strokedark dark:bg-black`} 
        onClick={handleToggleColor} // Toggle color on section click
      >
        <div className="mx-auto max-w-c-1700 px-4 md:px-8 2xl:px-0 text-center">
          <h4 
            className="text-2xl font-bold mb-6"
            style={{
              color: isDark ? '#fff' : '#000', // Change text color based on the isDark state
              transition: 'color 0.3s ease-in-out', // Smooth transition for color change
            }}
          >
            Potential Partners
          </h4>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 xl:gap-10">
            {brandData.map((brand, key) => (
              <div className="flex justify-center" key={key}>
                <SingleBrand brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Clients Section End */}
    </>
  );
};

export default Brands;
