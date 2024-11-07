"use client";

import React, { useRef, useEffect, useState } from 'react';
import './styles.css'; // Ensure your CSS includes styles for the animation
import SectionHeader from "../Common/SectionHeader"; // Adjust the path as needed

const events = [
  {
    phase: "Phase 1",
    title: "Platform Development",
    description: ["1. Build Core AI trading algorithms, Solana sniping bots, and predictive engine.",
                  "2. Token creation and ICO/IEO for early investors.",
                  "3. Launch staking and deposit systems for initial traders."
    ]
  },
  {
    phase: "Phase 2",
    title: "AI Refinement & Staking Program",
    description: ["1. Roll out staking opportunities with fundleasing options for traders.",
                  "2. Improve the AI trading algorithm based on live market data."
    ]
  },
  {
    phase: "Phase 3",
    title: "Sniping Bot Release & Staking Program",
    description: ["1.  Integrate Solana sniping bots, allowing users to activate bots for Solana DEX trading.","2. Begin decentralizing platform governance with a DAO system."
]
  },
  {
    phase: "Phase 4",
    title: "Global Expansion & Advanced Features",
    description: ["1. Expansion of predictive capabilities to cover additional asset classes like stocks and forex.","2.  Launch premium features for token holders, including early access to new trading algorithms."]
  },
  {
    phase: "Phase 5",
    title: "Index Fund",
    description: [
      "1. Launch of a diversified index fund for stable returns.",
      "2. Focus on high-growth sectors within the crypto market.",
      "3. Regular rebalancing to optimize performance.",
      "4. Educational resources for investors on fund management."
    ]
  },
];
// Event Item Component
const EventItem = ({ index, phase, title, description, className }) => {
  const timeItem = useRef<HTMLLIElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  useEffect(() => {
    const checkElementVisibility = () => {
      if (timeItem.current) {
        setIsVisible(checkVisibility(timeItem.current));
      }
    };

    checkElementVisibility();

    const handleScroll = () => {
      checkElementVisibility();
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <li ref={timeItem} className={`event-item ${className} ${isVisible ? "inView" : ""} ${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="event-content">
        <div className="circle"></div>
        <div className="content">
          <span className="phase">{phase}</span>
          <h4 className="title">{title}</h4>
          <ul className="description">
            {Array.isArray(description) ? (
              description.map((desc, idx) => <li key={idx}>{desc}</li>)
            ) : (
              <li>{description}</li>
            )}
          </ul>
        </div>
      </div>
    </li>
  );
};

// Timeline Component
const Timeline = () => {
  return (
    <section className="timeline">
      <SectionHeader
        headerInfo={{
          title: "Road Map",
          subtitle: "Timeline of Coin Earn Exchange",
          description: "Our journey to innovation.",
        }}
      />
      <ul>
        {events.map((item, index) => (
          <EventItem
            key={index}
            index={index}
            phase={item.phase}
            title={item.title}
            description={item.description}
            className={`phase${index + 1}`}
          />
        ))}
      </ul>
    </section>
  );
};

// Export Timeline
export default Timeline;