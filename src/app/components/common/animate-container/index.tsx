"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedContainer = () => {
  const leftCircleRef = useRef(null);
  const rightCircleRef = useRef(null);

  useGSAP(() => {
    const tl1 = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "none", duration: 2.7 },
    });
    tl1.to(leftCircleRef.current, { x: 700, fill: "#850CFF" });

    const tl2 = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "none", duration: 2.7 },
    });
    tl2.to(rightCircleRef.current, { x: -700, fill: "#FF00CC" });
  }, []);

  return (
    <svg
      width="1440"
      height="1222"
      viewBox="0 0 1440 1222"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-cover"
      style={{ transform: "translateY(131px)" }}
    >
      <g filter="url(#filter0_f_1_9095)">
        <path
          d="M626.35 623.187C303.278 663.9 94.7991 496.903 30.944 408.316C-160.622 928.528 590.108 917.221 833.448 883.294C1076.79 849.367 1661.84 459.207 1351.19 408.316C1040.55 357.425 1030.19 572.297 626.35 623.187Z"
          fill="url(#paint0_linear_1_9095)"
        />
      </g>
      <g filter="url(#filter1_f_1_9095)">
        <circle
          ref={leftCircleRef}
          cx="350"
          cy="450"
          r="120"
          opacity="0.9"
          fill="#FF00CC"
          stroke="none"
          style={{ willChange: "transform" }}
        />
      </g>
      <g filter="url(#filter2_f_1_9095)">
        <circle
          ref={rightCircleRef}
          cx="1090"
          cy="600"
          r="120"
          opacity="0.9"
          fill="#850CFF"
          stroke="none"
          style={{ willChange: "transform" }}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_9095"
          x="-324.2"
          y="76.3781"
          width="2088.4"
          height="1144.81"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="162.1"
            result="effect1_foregroundBlur_1_9095"
          />
        </filter>
        <filter
          id="filter1_f_1_9095"
          x="-600"
          y="0"
          width="2200"
          height="1200"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="180"
            result="effect1_foregroundBlur_1_9095"
          />
        </filter>
        <filter
          id="filter2_f_1_9095"
          x="-600"
          y="200"
          width="2200"
          height="1200"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="180"
            result="effect1_foregroundBlur_1_9095"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_9095"
          x1="0"
          y1="648.781"
          x2="1440"
          y2="648.781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF00CC" />
          <stop offset="1" stopColor="#850CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedContainer;
