import Logo from "@/app/components/common/logo";
import Image from "next/image";
import React from "react";
import { FiMail } from "react-icons/fi";

const ForgotPassword: React.FC = () => {
  return (
    <section className="grid h-screen w-screen place-items-center">
      {/* Main container for the form */}

      <nav className="fixed top-6 left-8 w-full">
        <Logo />
      </nav>

      <form className="max-w-[600px] mx-auto max-h-[439px] bg-white rounded-2xl shadow-lg py-10 px-[100px] text-center">
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
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Forgot Password?
        </h2>

        {/* Subtitle */}
        <p className="text-sm mb-8">
          No worries! Fill in your email and we'll send you a link to reset your
          password.
        </p>

        {/* Form fields container */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
            <FiMail className="mr-3 text-xl text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none flex-1 w-full text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-black text-white py-3 mt-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
          SEND
        </button>
      </form>
    </section>
  );
};

export default ForgotPassword;
