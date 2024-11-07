"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";

const Feature = () => {
  return (
    <>
      {/* ===== Features Start ===== */}
      <section id="features" className="relative py-20 lg:py-25 xl:py-30">

        {/* Background Image (stick) */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/shape/stickog.jpg"
            alt="Stick Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        <div className="relative mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 z-10">
          {/* Section Title */}
          <SectionHeader
            headerInfo={{
              title: "SOLID FEATURES",
              subtitle: "Core Features of Coin Earn Exchange",
              description: `Including robust security measures for safe trading, instant transaction capabilities for seamless user experiences, and a user-friendly interface designed for both beginners and experienced traders alike.`,
            }}
          />

          {/* Robot Image (left side) */}
          <div className="relative mb-10 md:mb-20 z-10">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <Image
                src="/images/shape/robot.png"
                alt="Robot"
                width={320}
                height={320}
                className="w-32 h-auto md:w-48 lg:w-64 xl:w-80"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* Map through features data */}
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>

      </section>
      {/* ===== Features End ===== */}
    </>
  );
};

export default Feature;
