"use client";

import React, { useRef, useEffect } from 'react';
import './styles.css'; // Ensure your CSS includes styles for the animation

const Timeline = () => {
  // Define blocksRef with the correct type
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const block = entry.target as HTMLElement; // Assert that block is an HTMLElement
          block.style.opacity = '1'; // Ensure opacity is a string
          block.style.transform = 'translateY(0)';
          observer.unobserve(block); // Stop observing once it has appeared
        }
      });
    });

    // Observe each block when they are available
    blocksRef.current.forEach(block => {
      if (block) {
        observer.observe(block);
      }
    });

    return () => {
      // Cleanup the observer on component unmount
      blocksRef.current.forEach(block => {
        if (block) {
          observer.unobserve(block);
        }
      });
    };
  }, []);

  return (
    <div className="cd-timeline">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          className="cd-timeline__block"
          ref={el => (blocksRef.current[index] = el)} // Assign ref correctly
          key={index}
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
          }} // Initial state for animation
        >
          <div className="cd-timeline__img cd-timeline__img--picture">
            <img src={`https://via.placeholder.com/40?text=${index + 1}`} alt={`Timeline ${index + 1}`} />
          </div>
          <div className="cd-timeline__content">
            {index === 0 && (
              <>
                <h2>Platform Development</h2>
                <p>⚫️ Build core AI</p>
                <span className="cd-timeline__date">Date: {new Date(2021, 0, 1).toLocaleDateString()}</span>
              </>
            )}
            {index === 1 && (
              <>
                <h2>First Major Update</h2>
                <p>Introduction of advanced AI algorithms that enhance trading efficiency and user experience.</p>
                <span className="cd-timeline__date">Date: {new Date(2021, 6, 15).toLocaleDateString()}</span>
              </>
            )}
            {index === 2 && (
              <>
                <h2>Partnership Announcement</h2>
                <p>Collaboration with major financial institutions to improve liquidity and access to markets.</p>
                <span className="cd-timeline__date">Date: {new Date(2022, 3, 10).toLocaleDateString()}</span>
              </>
            )}
            {index === 3 && (
              <>
                <h2>Launch of Mobile App</h2>
                <p>Release of our mobile application, allowing users to trade on-the-go seamlessly.</p>
                <span className="cd-timeline__date">Date: {new Date(2022, 9, 5).toLocaleDateString()}</span>
              </>
            )}
            {index === 4 && (
              <>
                <h2>Expansion into New Markets</h2>
                <p>Entering new geographical markets to broaden our user base and enhance service offerings.</p>
                <span className="cd-timeline__date">Date: {new Date(2023, 1, 20).toLocaleDateString()}</span>   
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
