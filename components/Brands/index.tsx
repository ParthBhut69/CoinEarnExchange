"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1700 px-4 md:px-8 2xl:px-0 text-center">
          <h4 className="text-2xl font-bold mb-6">Potential Partners</h4>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 xl:gap-10">
            {brandData.map((brand, key) => (
              <div className="flex justify-center" key={key}>
                <SingleBrand brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
