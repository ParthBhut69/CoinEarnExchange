"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  const brands = [
    { src: "./images/brand/youtube.svg", alt: "YouTube", link: "https://www.youtube.com" },
    { src: "./images/brand/linkedin.svg", alt: "LinkedIn", link: "https://www.linkedin.com" },
    { src: "./images/brand/facebook.svg", alt: "Facebook", link: "https://www.facebook.com" },
    { src: "./images/brand/brand-10.svg", alt: "Brand 10", link: "#" }, // Add a valid link
    { src: "./images/brand/instagram.svg", alt: "Instagram", link: "https://www.instagram.com" },
    { src: "./images/brand/telegram.svg", alt: "Telegram", link: "https://telegram.org" }
  ];

  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: `INTEGRATIONS`,
              subtitle: `Remotely Maintain Your Data, From Anywhere, Anytime.`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
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
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`animate_top flex justify-center ${index % 2 === 0 ? "mt-10" : "mb-10"}`} // Zigzag effect
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }} // Floating animation
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
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
            <motion.div className="w-1/6" whileHover={{ scale: 1.1 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
              </a>
            </motion.div>
            <motion.div className="w-1/6" whileHover={{ scale: 1.1 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
              </a>
            </motion.div>
            <motion.div className="w-1/6" whileHover={{ scale: 1.1 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
              </a>
            </motion.div>
            <motion.div className="w-1/6" whileHover={{ scale: 1.1 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
