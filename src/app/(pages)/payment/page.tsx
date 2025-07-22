"use client";

import React, { useState } from "react";
import Logo from "@/app/components/common/logo";
import AnimatedContainer from "@/app/components/common/animate-container";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const Payment: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <section className="min-h-screen w-full grid place-items-center text-white px-10 py-10 relative overflow-hidden">
      <div className="absolute -top-1/3 left-0 w-full -z-10">
        <AnimatedContainer />
      </div>

      <nav className="fixed top-6 left-8 w-full z-10">
        <Logo />
      </nav>

      <div className="max-w-[1110px] mx-auto flex flex-col lg:flex-row gap-12 mt-20">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 h-[507px]">
          <div className="mb-10">
            <h1 className="text-2xl mb-6">Select Payment Method</h1>

            <div
              className={`flex items-center justify-between px-6 py-4 rounded-xl border ${
                selectedMethod === "card"
                  ? "border-white bg-white/10"
                  : "border-white/30"
              } mb-4 cursor-pointer`}
              onClick={() => setSelectedMethod("card")}
            >
              <div className="flex items-center gap-3">
                <Image
                  width={24}
                  height={24}
                  src="/images/payment/credit_card_icon.svg"
                  alt="card"
                />
                <span className="text-base">Credit/Debit Card</span>
              </div>
              <div
                className={`p-1 rounded-full inline-flex items-center justify-center ${
                  selectedMethod === "card"
                    ? "bg-gradient-to-r from-[#FF00CC] to-[#850CFF]"
                    : "border !p-2.5"
                }`}
              >
                <FaCheck
                  className={`text-sm ${
                    selectedMethod === "card" ? "text-white" : "hidden"
                  }`}
                />
              </div>
            </div>

            <div
              className={`flex items-center justify-between px-6 py-4 rounded-xl border ${
                selectedMethod === "paypal"
                  ? "border-white bg-white/10"
                  : "border-white/30"
              } mb-10 cursor-pointer`}
              onClick={() => setSelectedMethod("paypal")}
            >
              <div className="flex items-center gap-3">
                <Image
                  width={24}
                  height={24}
                  src="/images/payment/paypal_icon.svg"
                  alt="card"
                />

                <span className="text-base">Paypal</span>
              </div>
              <div
                className={`p-1 rounded-full inline-flex items-center justify-center ${
                  selectedMethod === "paypal"
                    ? "bg-gradient-to-r from-[#FF00CC] to-[#850CFF]"
                    : "border !p-2.5"
                }`}
              >
                <FaCheck
                  className={`text-sm ${
                    selectedMethod === "paypal" ? "text-white" : "hidden"
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white/10 pl-6 pr-12 xl:pr-32 py-6">
            <p className="text-sm mb-3.5">You have to pay</p>
            <h2 className="text-4xl font-semibold mb-12 xl:mb-[70px]">$139.50</h2>

            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-gradient-to-r from-[#FF00CC] to-[#850CFF] inline-flex items-center justify-center">
                <FaCheck className="text-white text-sm" />
              </div>

              <div>
                <h3 className="mb-3.5">Payment & Invoice</h3>
                <p className="text-white text-sm">
                  We will take care about your all payments. You can relax while
                  you make your clients payments happily.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 h-[507px]">
          <div className="rounded-xl bg-white/10 px-10 py-8">
            <h2 className="text-5xl mb-2">Payment</h2>
            <p className="text-sm text-white/80 mb-6">
              Kindly complete your payment using a valid credit/debit card
              number.
            </p>

            <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                <label className="text-white text-sm font-medium">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-white/10 text-white focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-white text-sm font-medium">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-white/10 text-white focus:outline-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col space-y-1 w-1/2">
                  <label className="text-white text-sm font-medium">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="px-4 py-3 rounded-md bg-white/10 text-white focus:outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-1 w-1/2">
                  <label className="text-white text-sm font-medium">CVV</label>
                  <input
                    type="text"
                    className="px-4 py-3 rounded-md bg-white/10 text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-white text-black py-3 rounded-md font-semibold hover:bg-white/90 transition-colors duration-300">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
