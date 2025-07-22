import React from "react";
import Stepper from "@/app/components/common/stepper";
import Logo from "@/app/components/common/logo";
import AnimatedContainer from "@/app/components/common/animate-container";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const EqualEmploymentForm: React.FC = () => {
  return (
    <section className="grid min-h-[1075px] 2xl:min-h-screen h-full w-full text-white place-items-center relative overflow-hidden">
      <div className="absolute -top-1/3 left-0 w-full -z-10">
        <AnimatedContainer />
      </div>

      <nav className="fixed top-6 left-8 w-full z-10">
        <Logo />
      </nav>

      <div className="max-w-[1115px] mx-auto py-12 px-20 blur_bg rounded-3xl text-white">
        <Stepper currentStep={5} />

        <form className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-12">
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <select
              id="name"
              name="name"
              required
              className="bg-[#A72EFF33] text-white p-3 rounded-[10px] outline-none"
            >
              <option value="ahmed">Ahmed</option>
              <option value="tayyab">Tayyab</option>
              <option value="hassan">Hassan</option>
              <option value="fatima">Fatima</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="bg-[#A72EFF33] p-3 rounded-[10px] text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="bg-[#A72EFF33] p-3 rounded-[10px] text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="phone">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="bg-[#A72EFF33] p-3 rounded-[10px] text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="city">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="bg-[#A72EFF33] p-3 rounded-[10px] text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="postal">
              Postal Code
            </label>
            <input
              id="postal"
              name="postal"
              type="text"
              className="bg-[#A72EFF33] p-3 rounded-[10px] text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="country">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              className="bg-[#A72EFF33] p-3 rounded-[10px] text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className="bg-[#A72EFF33] p-3 rounded-[10px] text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="portfolio">
              Portfolio URL
            </label>
            <input
              id="portfolio"
              name="portfolio"
              type="url"
              className="bg-[#A72EFF33] p-3 rounded-[10px] text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1" htmlFor="github">
              Github URL
            </label>
            <input
              id="github"
              name="github"
              type="url"
              className="bg-[#A72EFF33] p-3 rounded-[10px] text-white"
            />
          </div>

          <div className="flex justify-between items-center col-span-full mt-6">
            <button
              type="button"
              className="bg-transparent text-white border py-3 px-14 flex items-center gap-1 rounded-[10px] font-semibold hover:bg-white/90 transition-colors duration-300 hover:text-black"
            >
              <IoIosArrowBack className="text-lg" /> <span>Previous</span>
            </button>
            <button
              type="button"
              className="bg-white text-black py-3 px-14 flex items-center gap-1 rounded-[10px] font-semibold  hover:bg-white/90 transition-colors duration-300"
            >
              <span>Continue</span> <IoIosArrowForward className="text-lg" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EqualEmploymentForm;
