"use client";

import React from "react";
import BannerCard from "../../pages/home/banner-card";

interface BannerSliderProps {
  slides: Array<{
    image: string;
    heading: string;
    timeAgo: string;
    description: string;
  }>;
}

const BannerSlider: React.FC<BannerSliderProps> = ({ slides }) => {
  return (
    <div className="w-full bg-white/6 backdrop-blur-[100px] py-5 md:py-9 lg:py-10 z-10 relative overflow-hidden">
      <div className="slider-container">
        <div className="slider-track">
          {slides.map((slide, index) => (
            <div key={`set1-${index}`} className="slider-item">
              <BannerCard
                image={slide.image}
                heading={slide.heading}
                timeAgo={slide.timeAgo}
                description={slide.description}
              />
            </div>
          ))}
          {slides.map((slide, index) => (
            <div key={`set2-${index}`} className="slider-item">
              <BannerCard
                image={slide.image}
                heading={slide.heading}
                timeAgo={slide.timeAgo}
                description={slide.description}
              />
            </div>
          ))}
          {slides.map((slide, index) => (
            <div key={`set3-${index}`} className="slider-item">
              <BannerCard
                image={slide.image}
                heading={slide.heading}
                timeAgo={slide.timeAgo}
                description={slide.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
