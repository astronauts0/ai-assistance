"use client";

import AnimatedContainer from "@/app/components/common/animate-container";
import Logo from "@/app/components/common/logo";
import Image from "next/image";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const ResumeParsing: React.FC = () => {
  return (
    <section className="grid h-[120vh] 2xl:h-screen w-full mx-auto text-white place-items-center relative overflow-hidden">
      <div className="absolute -top-60 left-0 w-full -z-10">
        <AnimatedContainer />
      </div>

      <nav className="fixed top-6 left-8 w-full">
        <Logo />
      </nav>

      <div className="w-full max-w-[1041px] max-h-[539px] overflow-hidden mx-auto blur_bg text-center py-12 px-20 rounded-2xl">
        {/* Header Text */}
        <h1 className="text-5xl mb-4">File & Link</h1>
        <p className="mb-4 text-white/80">
          Make sure to upload the latest file & active Link
        </p>

        {/* Warning Message */}
        <div className="flex items-center justify-center font-semibold mb-12 gap-x-2 text-white/80">
          <Image
            width={25}
            height={25}
            alt="note"
            src="/images/home/note_res_parsing.svg"
          />
          THIS CANNOT BE EDITED AFTERWARDS
        </div>

        <div className="flex justify-between gap-12 items-center">
          {/* Upload Section */}
          <label
            htmlFor="resume"
            className="flex items-center justify-center gap-2.5 border-2 border-dashed border-white/50 rounded-2xl w-[417px] h-[110px] cursor-pointer hover:bg-white/10 transition-colors duration-300"
          >
            <Image
              width={44}
              height={44}
              alt="upload"
              src="/images/home/upload_resume.svg"
            />
            <span className="text-lg font-medium">Upload File</span>
            <input id="resume" name="resume" type="file" className="hidden" />
          </label>

          <div className="h-[160px] w-[1px] bg-white/50" />

          {/* Link Input */}
          <div className="text-left">
            <label
              htmlFor="linkInput"
              className="block text-lg font-semibold mb-3"
            >
              Your link
            </label>
            <input
              id="linkInput"
              placeholder="Paste here"
              className="w-[364px] h-[80px] p-4 bg-transparent border border-white/50 rounded-2xl outline-none text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 transition-all"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-12 flex justify-center">
          <button className="min-w-sm flex items-center justify-center gap-2 bg-white text-black font-bold py-4 px-12 rounded-xl text-lg hover:bg-white/90 transition-colors duration-300">
            Continue
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeParsing;
