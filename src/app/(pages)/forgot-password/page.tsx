"use client";

import Logo from "@/app/components/common/logo";
import AnimatedContainer from "@/app/components/common/animate-container";
import Image from "next/image";
import React from "react";
import { FiMail } from "react-icons/fi";

const ForgotPassword: React.FC = () => {
  return (
    <section className="grid h-screen w-screen text-white place-items-center relative overflow-hidden">
      <div className="absolute left-0 w-full -z-10">
        <AnimatedContainer />
      </div>

      <nav className="fixed top-6 left-8 w-full">
        <Logo />
      </nav>

      <form className="max-w-[600px] mx-auto max-h-[439px] blur_bg rounded-2xl py-10 px-[100px] text-center">
        {/* Lock Icon */}
        <div className="flex justify-center mb-6">
          <Image
            width={100}
            height={100}
            alt="lock-unlocked"
            src="/images/home/lock-unlocked.svg"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3">Forgot Password?</h2>

        {/* Subtitle */}
        <p className="text-sm text-white/70 mb-8">
          No worries! Fill in your email and we'll send you a link to reset your password.
        </p>

        {/* Email Input */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center border border-white/50 rounded-lg px-4 py-3">
            <FiMail className="mr-3 text-xl text-white/50" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none flex-1 w-full placeholder-white/50"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-white text-black py-3 mt-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300">
          SEND
        </button>
      </form>
    </section>
  );
};

export default ForgotPassword;
