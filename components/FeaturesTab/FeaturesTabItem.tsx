import React, { useRef, useEffect, useState } from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const fadeIn = {
  animation: "fadeIn 0.5s forwards",
  opacity: 1,
  transform: "translateY(0)",
};

const fadeOut = {
  animation: "fadeOut 0.5s forwards",
  opacity: 0,
  transform: "translateY(20px)",
};

const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
`;

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, desc3, image, imageDark } = featureTab;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          } else {
            setIsVisible(false); // To trigger fade-out if needed
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <style>{styles}</style> {/* Inject CSS styles */}
      <div ref={ref} style={isVisible ? fadeIn : fadeOut} className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p><br />
          <p className="w-11/12">{desc3}</p>
        </div>
        <div className="flex justify-center">
          <div className="relative mx-auto hidden aspect-[2000/900] max-w-[700px] md:block md:w-1/2">
            <Image
              src={image}
              alt={title}
              width={5000} // Increased width
              height={900} // Increased height
              className={`dark:hidden object-contain`}
            />
            <Image
              src={imageDark}
              alt={title}
              width={5000} // Increased width
              height={900} // Increased height
              className={`hidden dark:block object-contain`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
