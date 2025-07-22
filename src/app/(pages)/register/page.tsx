"use client";

import AnimatedContainer from "@/app/components/common/animate-container";
import Logo from "@/app/components/common/logo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="grid h-screen text-white w-screen place-items-center relative overflow-hidden">
      <div className="absolute left-0 w-full -z-10">
        <AnimatedContainer />
      </div>

      <nav className="fixed top-6 left-8 w-full">
        <Logo />
      </nav>

      <form className="max-w-[600px] mx-auto max-h-[546px] blur_bg rounded-2xl py-10 px-[100px]">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Welcome to AI Assistant
        </h2>

        <div className="flex justify-between gap-4 mb-6">
          <button className="w-full border border-white/50 py-2 rounded-md flex justify-center items-center gap-2">
            <Image
              width={15}
              height={15}
              alt="google_logo"
              src="/images/home/google_logo.svg"
            />
            Google
          </button>
          <button className="w-full border border-white/50 py-2 rounded-md flex justify-center items-center gap-2">
            <FaLinkedinIn />
            LinkedIn
          </button>
        </div>

        <div className="text-center text-sm text-white/50 mb-4 gap-x-5 flex items-center justify-center">
          <div className="w-28 h-[1px] bg-white/50" />
          or
          <div className="w-28 h-[1px] bg-white/50" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center border border-white/50 rounded-[10px] px-4 py-2">
            <FiMail className="mr-3 text-xl text-white/50" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none flex-1 placeholder-white/50"
            />
          </div>

          <div className="flex items-center border border-white/50 rounded-[10px] px-4 py-2">
            <FiLock className="mr-3 text-xl text-white/50" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent outline-none flex-1 placeholder-white/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-3 text-xl text-white/50"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <button className="w-full bg-white text-black py-3 mt-6 rounded-md font-semibold">
          REGISTER
        </button>

        <div className="text-center text-sm mt-6">
          Already a member?{" "}
          <Link href="/login" className="font-semibold">
            Login now
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
