"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          
          <Image
            width={300}
            height={300}
            src="/images/shape/profit.png"
            alt="Profit Illustration"
            className="absolute -left-15 -top-25 -z-1 lg:left-0 floating"
          />
          <Image
            width={250}
            height={132}
            src="/images/shape/coin.png"
            alt="Coin Illustration"
            className="absolute bottom-0 right-0 -z-1 floating-coin" // Added class for animation
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted Background"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted Background Dark"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          ><br></br><br></br><br></ br>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            Empowering Innovation, Building the Future.
            </h2>
            <p className="mx-auto lg:w-11/12">
            Coin Earn Exchange is at the forefront of empowering innovation in digital finance. Trusted by global companies, we are building the future of secure, efficient, and transparent financial solutions. Join us and unlock the potential of decentralized finance.
            </p>
          </motion.div>
          

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            {["500K", "1M+", "865"].map((fact, index) => (
              <motion.div
                key={index}
                className="animate_top text-center w-full md:w-1/3" // Full width on mobile, 1/3 on medium screens
              >  
                <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  {fact}
                </h3> 
                
                <p className="text-lg lg:text-para2">
                  {index === 0 ? "World Wide Clients" : index === 1 ? "Downloads" : "Winning Award"}
                </p><br></br><br></br>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        .floating-coin {
          animation: float 3s ease-in-out infinite; /* Apply floating animation */
        }

        @media (max-width: 768px) {
          .floating-coin {
            width: 100%; /* Ensure it takes the full width */
          }

          .funfact-container {
            padding: 20px 10px; /* Add padding for better spacing */
          }

          .funfact-title {
            font-size: 1.8rem; /* Adjust font size for smaller screens */
          }

          .funfact-description {
            font-size: 1rem; /* Smaller font size for description */
            line-height: 1.5; /* Improved line height */
          }

          .fact-item {
            width: 100%; /* Full width on mobile */
            margin-bottom: 20px; /* Space between items */
          }
        }
      `}</style>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
