"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBlurText: React.FC<AnimatedTextProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const split = new SplitText(containerRef.current, { type: "chars" });

      gsap.set(containerRef.current, { perspective: 1000 });

      gsap.from(split.chars, {
        y: "100%",
        opacity: 0,
        filter: "blur(20px)",
        ease: "power4.out",
        duration: 1,
        stagger: 0.07,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        //   once: true,
          markers: false,
        },
      });

      return () => {
        split.revert(); // important for cleanup
      };
    },
    { scope: containerRef } // ✅ important: unique scope per instance
  );

  return (
    <h1
      ref={containerRef}
      className={`overflow-hidden ${className || ""}`}
    >
      {children}
    </h1>
  );
};

export default AnimatedBlurText;
