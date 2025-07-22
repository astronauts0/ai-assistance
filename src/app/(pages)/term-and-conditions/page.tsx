"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/app/components/common/logo";
import AnimatedContainer from "@/app/components/common/animate-container";
import { IoIosArrowForward } from "react-icons/io";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="grid min-h-[1110px] 2xl:min-h-screen h-full w-full text-white place-items-center relative overflow-hidden">
      <div className="absolute -top-1/3 left-0 w-full -z-10">
        <AnimatedContainer />
      </div>

      <nav className="fixed top-6 left-8 w-full z-10">
        <Logo />
      </nav>

      <div className="max-w-[1116px] mx-auto py-12 px-20 blur_bg rounded-3xl text-white">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Terms & Conditions
        </h2>

        <div className="flex items-start text-sm text-white/70 mb-[55px] gap-2 justify-center">
          <Image
            width={25}
            height={25}
            alt="note"
            src="/images/home/note_res_parsing.svg"
          />
          <span>
            Please make sure to read carefully before signing, it is a legal
            document.
          </span>
        </div>

        <ul className="space-y-6 text-[20px] text-white/80 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-white mt-2 border border-white/50 shrink-0" />
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </span>
            </li>
          ))}
        </ul>

        <form className="flex items-center gap-2 mb-16">
          <input
            type="checkbox"
            id="accept"
            className="w-4 h-4 accent-white border border-white/50 rounded-sm"
          />
          <label htmlFor="accept" className="text-white">
            I have read and I accept all the conditions above.
          </label>
        </form>

        <div className="flex justify-between items-center">
          {/* Signature box */}
          <div className="relative">
            <div className="border border-white/50 w-56 h-20 rounded-xl flex items-end"></div>
            <span className="text-white">Signature</span>
          </div>

          {/* Button */}
          <button className="bg-white text-black px-14 py-3 rounded-[10px] font-semibold flex items-center gap-1 hover:bg-white/90 transition-colors duration-300">
            <span>Pay Now</span> <IoIosArrowForward className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
