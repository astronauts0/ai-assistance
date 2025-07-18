import Image from "next/image";
import React from "react";

const ScrollingCircle = () => {
  return (
    <div className="relative rotate-90 -mt-[370px] lg:mt-0 lg:rotate-0 -z-10 lg:z-auto">
      <Image
        height={529}
        width={594}
        className="absolute top-0 -right-10"
        alt="line"
        src="/images/home/line.svg"
      />
      <hr className="w-[91px] lg:w-[61px] xl:w-[91px] border border-primary z-10 absolute bottom-[460px] lg:bottom-[400px] xl:bottom-[425px] right-1.5 lg:right-2 xl:right-1.5" />
      <div className="flex flex-col gap-28 absolute bottom-[92px] lg:bottom-[34px] xl:bottom-[60px] -right-11">
        <span className="h-3.5 w-3.5 bg-primary"></span>
        <span className="h-2.5 w-2.5 bg-white -ml-5"></span>
        <span className="h-2 w-2 bg-white -ml-16"></span>
        <span className="h-1.5 w-1.5 bg-white -ml-40"></span>
      </div>
      <div className="border-[100px] lg:border-[70px] xl:border-[100px] border-[#1D1D1D] rounded-full h-[926px] w-[929px] lg:h-[750px] lg:w-[750px] xl:h-[926px] xl:w-[929px] lg:-ml-[350px] xl:-ml-[420px] flex items-center justify-center relative bg-primary-black">
        <div className="h-68 w-68 lg:h-60 lg:w-60 xl:h-68 xl:w-68 rounded-full border-r -ml-60 lg:-ml-40 xl:-ml-60 border-white"></div>
        <div className="absolute right-10 lg:right-auto xl:right-10 border-r border-white/20 h-[552px] w-[552px] rounded-full z-10"></div>
        <div className="flex flex-col gap-40 lg:gap-32 absolute bottom-40 right-32 lg:right-20 xl:right-24">
          <h1 className="text-white/10 font-medium text-xl lg:text-lg xl:text-xl -rotate-[32deg]">
            Lorem Ipsum
          </h1>
          <h1 className="text-white font-medium text-2xl lg:text-xl xl:text-2xl ml-16">
            Lorem Ipsum
          </h1>
          <h1 className="text-white/25 font-medium text-xl lg:text-lg xl:text-xl rotate-[32deg]">
            Lorem Ipsum
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ScrollingCircle;
