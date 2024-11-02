"use client";
import Image from "next/image";
import { useState } from "react";
import "./Hero.css";
import { motion } from 'framer-motion';

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission here if needed
  };

  const renderCoins = () => {
    const coins = [
      "/images/coins/solana.png",
      "/images/coins/bitcoin.png",
      "/images/coins/sol.png",
      "/images/coins/eth.png", 
      "/images/coins/bitcoinblk.png",
      
      
      // Add more coin images as needed
    ];
  
    const coinPositions: Array<[number, number]> = [];
    const radius = 60;
    const maxAttempts = 100;
  
    return Array.from({ length: 12}).map((_, index) => {
      let coinSrc = coins[Math.floor(Math.random() * coins.length)];
      
      // Initialize left and top with default values
      let left: number = 0; 
      let top: number = 0;
  
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const angle = Math.random() * 2 * Math.PI;
        left = 50 + radius * Math.cos(angle);
        top = 50 + radius * Math.sin(angle);
  
        const overlap = coinPositions.some(([posLeft, posTop]) => {
          const distance = Math.sqrt(
            Math.pow(left - posLeft, 2) + Math.pow(top - posTop, 2)
          );
          return distance < 50;
        });
  
        if (!overlap) {
          coinPositions.push([left, top]);
          break;
        }
      }
  
      return (
        <Image
          key={index}
          src={coinSrc}
          alt="Coin"
          className="coin floating-coin"
          width={40}
          height={40}
          style={{
            position: 'absolute',
            left: `${left}%`, // Now this won't cause an error
            top: `${top}%`,   // Now this won't cause an error
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      );
    });
  };
  

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 relative">
      <div className="animated-background"></div>
      <div className="particles-background"></div>
      <div className="polygons-background"></div>
      <div className="shapes-background">
        <div className="shape shape1" style={{ backgroundColor: "rgba(255, 255, 0, 0.5)", borderRadius: "50%" }}></div>
        <div className="shape shape2" style={{ backgroundColor: "rgba(0, 255, 0, 0.5)", borderRadius: "50%" }}></div>
        <div className="shape shape3" style={{ backgroundColor: "rgba(0, 0, 255, 0.5)", borderRadius: "50%" }}></div>
      </div>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="md:w-1/2 flex flex-col items-center text-center">
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
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
                <div className="flex flex-wrap gap-5 justify-center">
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
              animate={{ y: [0, -10, 0] }}
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
              {renderCoins()}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
