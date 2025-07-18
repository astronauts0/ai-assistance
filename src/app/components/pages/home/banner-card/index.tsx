import Image from "next/image";
import React from "react";

interface propTypes {
  image?: string;
  heading?: string;
  description?: string;
  timeAgo?: string;
}

const BannerCard = ({ image, heading, description, timeAgo }: propTypes) => {
  return (
    <div className="flex items-center gap-1.5 md:gap-2.5">
      <Image
        height={60}
        width={60}
        className="h-8 w-8 md:h-auto md:w-auto"
        alt="banner-slide-img"
        src={image ?? ""}
      />
      <div className="flex flex-col gap-0.5 md:gap-1 text-white">
        <div className="flex items-center gap-1.5 font-bold text-[7.8px] md:text-sm">
          {heading ?? "--"}
          <span className="text-[7.8px] md:text-sm font-normal before:content-['·'] before:font-bold before:mx-1">
            {timeAgo ?? "--"} hours ago
          </span>
        </div>
        <h1 className="font-bold text-[8.92px] md:text-base">
          {description ?? "--"}
        </h1>
      </div>
    </div>
  );
};

export default BannerCard;
