"use client";
import Image from "next/image";
import { useState } from "react";
import "./Hero.css";
import { motion } from 'framer-motion';

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderCoins = () => {
    const coins = [
      "/images/coins/solana.png", // Solana
      "/images/coins/bit.png", // Bitcoin
      "/images/coins/lat.png", // Litecoin
      "/images/coins/sand.png", // Sandcoin
      // Add more coin images as needed
    ];

    const coinPositions = []; // Store positions to check for overlaps
    const radius = 60; // Fixed radius to keep coins near the Union image
    const maxAttempts = 100; // Limit attempts to find a non-overlapping position

    return Array.from({ length: 10 }).map((_, index) => {
      let coinSrc = coins[Math.floor(Math.random() * coins.length)]; // Randomly select a coin
      let left, top;

      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const angle = Math.random() * 2 * Math.PI; // Random angle

        // Calculate position based on the angle and radius
        left = 50 + radius * Math.cos(angle); // Centered horizontally (50%)
        top = 50 + radius * Math.sin(angle); // Centered vertically (50%)

        // Check for overlaps
        const overlap = coinPositions.some(([posLeft, posTop]) => {
          const distance = Math.sqrt(
            Math.pow(left - posLeft, 2) + Math.pow(top - posTop, 2)
          );
          return distance < 50; // Adjust this value for how close coins can be
        });

        if (!overlap) {
          // If no overlap, break the loop
          coinPositions.push([left, top]);
          break;
        }
      }

      return (
        <Image
          key={index}
          src={coinSrc} // Use the randomly selected coin image
          alt="Coin"
          className="coin floating-coin" // Add a class for animation
          width={40} // Specify the width
          height={40} // Specify the height
          style={{
            position: 'absolute',
            left: `${left}%`,  // Position around the Union
            top: `${top}%`,    // Position around the Union
            animationDelay: `${Math.random() * 2}s`, // Random delay for animation
          }}
        />
      );
    });
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 relative">
        <div className="animated-background"></div>

        {/* Particles */}
        <div className="particles-background"></div>

        <div className="polygons-background"></div>
        <div className="shapes-background">
          <div className="shape shape1" style={{ backgroundColor: "rgba(255, 255, 0, 0.5)", borderRadius: "50%" }}></div>
          <div className="shape shape2" style={{ backgroundColor: "rgba(0, 255, 0, 0.5)", borderRadius: "50%" }}></div>
          <div className="shape shape3" style={{ backgroundColor: "rgba(0, 0, 255, 0.5)", borderRadius: "50%" }}></div>
        </div>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 relative z-10">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Empowering Trading{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Coin Earn Exchange
                </span>
              </h1>
              <p>
                Offers a decentralized platform where AI algorithms trade on your behalf. Experience the future of trading with our advanced predictive models and staking opportunities.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                    <button
                      aria-label="know more button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Know More
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <motion.div
                className="relative aspect-[600/650]"
                animate={{ y: [0, -10, 0] }} // Moves up and down
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Image
                  className="shadow-solid-l dark:hidden"
                  src="/images/shape/Union.png"
                  alt="Hero"
                  fill
                />
                <Image
                  className=""
                  src="/images/shape/Union.png"
                  alt="Hero"
                  fill
                />
                {renderCoins()} {/* Render coins around the Union */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
