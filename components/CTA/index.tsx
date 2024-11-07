"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0 cta-container">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-full md:w-[70%]"
            >
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
              Join with us today & increase your success beyond limits!
              </h2>
              <p>
              We're here to invite you to exchange your coins with Solana—make it fun, and watch your profits soar!
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full md:w-[45%] flex flex-col items-center md:justify-end"
            >
              <Image
                width={299}
                height={299}
                src="/images/shape/swap.gif"
                alt="Saly"
                className="cta-image"
              />
              <a
                href="/auth/signup"
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black cta-button"
              >
                Sign up free
                <Image
                  width={20}
                  height={20}
                  src="/images/icon/icon-arrow-dark.svg"
                  alt="Arrow"
                  className="dark:hidden"
                />
                <Image
                  width={20}
                  height={20}
                  src="/images/icon/icon-arrow-light.svg"
                  alt="Arrow"
                  className="hidden dark:block"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
