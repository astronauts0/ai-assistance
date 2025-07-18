"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import AnimatedContainer from "@/app/components/common/animate-container";
const SwitchToDesktop = () => {
  return (
    <div
      className="h-screen w-full bg-[#0c0019] flex flex-col justify-center items-center text-white px-4 text-center relative"
      style={{
        background: "linear-gradient(to bottom, #0c0019, #6d00b5)",
      }}
    >
      <Link
        href="/"
        className="absolute top-4 right-4 text-white text-xl transition"
      >
        <RxCross2 className="text-3xl" />
      </Link>

      <Image
        src="/images/home/switch_to_pc.svg"
        alt="Switch to Desktop"
        width={300}
        height={300}
        priority
      />

      <h2 className="font-bold text-2xl sm:text-4xl mt-7">
        Please Switch to Desktop
      </h2>
      <p className="opacity-80 mt-3">
        To access dashboard please open it on <br /> laptop/desktop.
      </p>
    </div>
  );
};

export default SwitchToDesktop;
