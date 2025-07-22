import AnimatedContainer from "@/app/components/common/animate-container";
import Logo from "@/app/components/common/logo";
import React from "react";
import { FaDiscord, FaLinkedinIn, FaPlay } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-col gap-14 w-full mx-auto relative overflow-hidden">
      <div className="absolute -top-32 lg:-top-60 left-0 w-full -z-10">
        <AnimatedContainer />
      </div>
      <div className="relative bg-white/5 p-1.5 pt-3.5 lg:p-6 lg:pt-12 flex flex-col lg:gap-14 gap-[18px] lg:rounded-[30px] rounded-[9px] overflow-hidden z-10 mx-5 sm:mx-28 lg:px-auto lg:w-9/12 lg:mx-auto">
        <h1 className="lg:text-[44px] sm:text-2xl text-sm font-extrabold text-white lg:w-10/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </h1>
        <div className="flex items-center gap-3.5 group overflow-hidden cursor-pointer relative">
          <div className="lg:size-[99px] sm:size-[52px] size-[34px] lg:rounded-[20px] sm:rounded-[10px] rounded-[7px] lg:text-[49px] text-[17px] sm:text-[26.5px] flex items-center justify-center bg-white/15 text-white absolute left-0 -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out">
            <GoArrowRight />
          </div>

          <div className="bg-white/15 lg:rounded-[20px] sm:rounded-[10px] rounded-[7px] w-[88%] lg:px-12 px-4 lg:py-7 sm:py-[15px] py-[9.5px] font-extrabold lg:text-4xl sm:text-xl text-xs text-white group-hover:translate-x-28 transition-all duration-300 ease-in-out">
            Join Now
          </div>

          <div className="lg:size-[99px] sm:size-[52px] size-[34px] lg:rounded-[20px] sm:rounded-[10px] rounded-[7px] lg:text-[49px] text-[17px] sm:text-[26.5px] flex items-center justify-center bg-white/15 text-white group-hover:translate-x-28 transition-all duration-300 ease-in-out">
            <GoArrowRight />
          </div>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-between mx-5 sm:mx-28 lg:px-auto lg:w-9/12 lg:mx-auto lg:mb-28 mb-6">
        <div className="flex flex-col lg:gap-12 sm:gap-2.5 gap-1.5">
          <Logo />
          <p className="text-white lg:text-base sm:text-[9px] text-[6px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been
            the industry's
          </p>
        </div>
        <div className="flex flex-col lg:gap-14 sm:gap-[30px] gap-3.5">
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3.5">
            <div className="bg-white lg:p-1.5 p-0.5 rounded">
              <FaLinkedinIn className="text-black lg:text-base text-[10px]" />
            </div>
            <div className="bg-white lg:p-1.5 p-0.5 rounded">
              <RiTwitterXFill className="text-black lg:text-base text-[10px]" />
            </div>
            <div className="bg-white lg:p-1.5 p-0.5 rounded">
              <FaDiscord className="text-black lg:text-base text-[10px]" />
            </div>
            <div className="bg-white lg:p-1.5 p-0.5 rounded">
              <FaPlay className="text-black lg:text-base text-[10px]" />
            </div>
            <div className="bg-white lg:p-1.5 p-0.5 rounded">
              <IoLogoInstagram className="text-black lg:text-base text-[10px]" />
            </div>
          </div>
          <p className="text-white lg:text-base sm:text-[8.53px] text-[6px]">
            © 2025 Ai Assistant
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
