"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Logo from "@/app/components/common/logo";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="grid h-full w-full place-items-center">
      <nav className="fixed top-6 left-8 w-full">
        <Logo />
      </nav>
      <div className="max-w-[1116px] h-full mx-auto py-12 px-20 bg-white rounded-3xl shadow-md text-black">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Term & Conditions
        </h2>

        <div className="flex items-start text-sm text-gray-700 mb-[70px] gap-2 justify-center">
          <Image
            width={25}
            height={25}
            alt="google_logo"
            src="/images/home/note_res_parsing.svg"
          />
          <span>
            Please make sure to read carefully before signing, it is a legal
            document.
          </span>
        </div>

        <ul className="space-y-4 text-[15px] text-gray-800 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-white mt-2 border border-gray-500 shrink-0" />
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 mb-12">
          <input
            type="checkbox"
            id="accept"
            className="w-4 h-4 accent-black border border-primary-gray rounded-sm"
          />
          <label htmlFor="accept" className="text-sm text-gray-800">
            I have read and I accept all the conditions above.
          </label>
        </div>

        <div className="flex justify-between items-center">
          {/* Signature box */}
          <div className="border border-black w-64 h-16 rounded-md flex items-end px-2 py-1">
            <span className="text-xs text-gray-500">Signature</span>
          </div>

          {/* Button */}
          <button className="bg-black text-white px-6 py-3 rounded-md font-semibold text-sm flex items-center gap-2">
            Pay Now <span className="text-lg">➤</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
