"use client";

import Logo from "@/app/components/common/logo";
import Image from "next/image";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const HexagonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mr-2"
  >
    <path
      d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="white"
    />
  </svg>
);

const ResumeParsing: React.FC = () => {
  return (
    <section className="grid h-screen w-screen place-items-center bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900">
      <nav className="fixed top-6 left-8 w-full">
        <Logo />
      </nav>

      <div className="w-full text-white max-w-[1041px] max-h-[539px] mx-auto backdrop-blur-3xl border-2 border-white text-center py-12 px-20">
        {/* Header Text */}
        <h1 className="text-5xl mb-4">File & Link</h1>
        <p className="mb-4">
          Make sure to upload the latest file & active Link
        </p>

        {/* Warning Message */}
        <div className="flex items-center justify-center font-semibold mb-12 gap-x-2">
          <Image
            width={25}
            height={25}
            alt="google_logo"
            src="/images/home/note_res_parsing.svg"
          />
          THIS CANNOT BE EDITED AFTERWARDS
        </div>

        <div className="flex justify-between gap-12 items-center">
          <div className="flex items-center justify-center gap-2.5 border-2 border-dashed border-white rounded-2xl w-[417px] h-[110px] cursor-pointer hover:bg-white/10 transition-colors duration-300">
            <Image
              width={44}
              height={44}
              alt="google_logo"
              src="/images/home/upload_resume.svg"
            />

            <span className="text-lg font-medium">Upload File</span>
            <input type="file" className="hidden" />
          </div>

          <div className="h-[160px] w-[1px] bg-white" />

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
              className="w-[364px] h-[80px] p-4  border border-white rounded-2xl outline-none focus:ring-2 focus:ring-white/50 transition-all"
            ></input>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-12 flex justify-center">
          <button className="min-w-sm flex items-center justify-center gap-2 bg-white text-black font-bold py-4 px-12 rounded-xl text-lg hover:bg-gray-200 transition-colors duration-300">
            Continue
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeParsing;
