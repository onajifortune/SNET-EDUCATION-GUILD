import React, { useEffect, useState } from "react";
import "../main.css";
import "./Section47.css";

import navigatorImage from "../assets/img/navigator-image.png";

function Section47() {
  const [isVisible47, setIsVisible47] = useState(false); // Track visibility

  useEffect(() => {
    const target = document.querySelector(".item-47-left-image"); // The element to observe

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible47(true); // Image has entered the viewport
        } else {
          setIsVisible47(false); // Image has left the viewport
        }
      });
    };

    // Intersection Observer options
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the viewport
      threshold: 0.5, // Trigger when 50% of the image is in view
    };

    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, options);

    // Start observing the target element
    if (target) {
      observer.observe(target);
    }

    // Cleanup observer on component unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section id="47" className="main-section">
      <div className="items-47">
        <div className="item-47-left">
          <div
            className={`item-47-left-image ${
              isVisible47 ? "slide-in" : "slide-out"
            }`}
          >
            {/* <img src="../assets/img/shield.gif" alt="" /> */}
          </div>
        </div>
        <div className="item-47-right">
          <div className="item-47-right-content">
            <div className="item-47-right-content-child">
              <h2 className={isVisible47 ? "slide-in" : "slide-out"}>
                Tokenomics
              </h2>
              <p>
                Reward Allocation: The Supervisory Council allocates 0.5% of the
                newly minted AGIX token supply to the program, translating to
                62,500 AGIX tokens per month.
              </p>
              <p>
                Distribution: These tokens are publicly distributed as rewards
                for completed ambassadorial tasks, incentivizing active
                community participation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/ambassadors">AMBASSADORS</a>
        </p>
      </div>
      <div id="none-navigator" className="next-div-7">
        <p>
          <a href="/trueagi">TRUEAGI</a>
        </p>
        <img src={navigatorImage} alt="" />
      </div>
    </section>
  );
}

export default Section47;
