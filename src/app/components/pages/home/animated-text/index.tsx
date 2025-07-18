"use client";

import { useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createTextElements = () => {
      if (!containerRef.current) return;

      // Clear any existing content
      containerRef.current.innerHTML = "";

      // Calculate how many copies we need to ensure continuous animation
      const container = containerRef.current;
      const textParts = text.split(" ");

      // Create multiple copies of the text to ensure continuous scrolling
      for (let i = 0; i < 10; i++) {
        textParts.forEach((word, index) => {
          // Add text word
          const textSpan = document.createElement("span");
          textSpan.textContent = word;
          textSpan.className =
            "text-[60px] md:text-[180px] font-medium text-white leading-[120%]";
          container.appendChild(textSpan);

          // Add space after the word
          const spaceAfterWord = document.createElement("span");
          spaceAfterWord.innerHTML = "&nbsp;";
          spaceAfterWord.className = "inline-block w-[50px]";
          container.appendChild(spaceAfterWord);

          // Add dot
          const dotSpan = document.createElement("span");
          dotSpan.className =
            "inline-block h-5 w-5 rounded-full bg-gradient-to-r from-primary to-secondary";
          container.appendChild(dotSpan);

          // Add space after the dot
          const spaceAfterDot = document.createElement("span");
          spaceAfterDot.innerHTML = "&nbsp;";
          spaceAfterDot.className = "inline-block w-[50px]";
          container.appendChild(spaceAfterDot);
        });
      }
    };

    createTextElements();
  }, [text]);

  return (
    <div
      className={`relative w-full overflow-hidden flex items-center h-[90px] md:h-[180px] ${className}`}
    >
      {/* Left gradient overlay */}
      <div className="absolute top-0 left-0 h-full w-[100px] z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>

      {/* Scrolling text container */}
      <div
        ref={containerRef}
        className="flex items-center whitespace-nowrap px-5 animate-scrollText"
        style={{
          animation: "scrollText 30s linear infinite alternate",
        }}
      ></div>

      {/* Right gradient overlay */}
      <div className="absolute top-0 right-0 h-full w-[100px] z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};

export default AnimatedText;

// Add this to your globals.css or create a tailwind.config.js animation extension
// @keyframes scrollText {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// }
