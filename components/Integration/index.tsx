"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  const brands = [
    { src: "./images/brand/youtube.svg", alt: "YouTube", link: "https://www.youtube.com" },
    { src: "./images/brand/linkedin.svg", alt: "LinkedIn", link: "https://www.linkedin.com" },
    { src: "./images/brand/facebook.svg", alt: "Facebook", link: "https://www.facebook.com/people/Coin-EarnExchange/pfbid0jwmrurC3FBE7FcPEsE3F1tSLpwbDoArYKM26wn6L2sWCEUzNg6xvUvxRrKfvxLeul/?mibextid=rS40aB7S9Ucbxw6v" },
    { src: "./images/brand/brand-10.svg", alt: "Brand 10", link: "#" }, // Add a valid link
    { src: "./images/brand/instagram.svg", alt: "Instagram", link: "https://www.instagram.com/coinearnexchange" },
    { src: "./images/brand/telegram.svg", alt: "Telegram", link: "https://telegram.org" }
  ];

  return (
    <section>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: `INTEGRATIONS`,
            subtitle: `Follow Us`,
            description: `Stay updated with the latest news and updates from Coin Earn Exchange by following us on social media. Join our community and be part of the conversation!`,
          }}
        />
      </div>

      <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
          <Image
            width={1200}
            height={400}
            sizes="(max-width: 768px) 100vw"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            style={{ position: "static" }}
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
          />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
              }}
              initial="hidden"
              whileInView="visible"
              className={`animate_top flex justify-center ${index % 2 === 0 ? "mt-10" : "mb-10"}`} // Zigzag effect
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -5, 0] }} // Floating animation
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} // Consolidated transition
            >
              <a href={brand.link} target="_blank" rel="noopener noreferrer">
                <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                  <Image
                    width={50}
                    height={50}
                    src={brand.src}
                    alt={brand.alt}
                  />
                </div>
              </a>
            </motion.div>
          ))}
          {/* Additional color dots */}
          {["#FFDB26", "#62E888", "#EF5C00", "#016BFF"].map((color, index) => (
            <motion.div
              key={index}
              className="w-1/6 flex justify-center" // Center the dot
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} // Consolidated transition for dots
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div
                  className="rounded-full"
                  style={{ backgroundColor: color, height: `${(index + 1) * 5}px`, width: `${(index + 1) * 5}px` }} // Dynamic size
                ></div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integration;
