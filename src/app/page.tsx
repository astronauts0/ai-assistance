"use client";
import AnimatedContainer from "./components/common/animate-container";
import CustomButton from "./components/common/button";
import BannerSlider from "./components/common/banner-slider";
import Image from "next/image";
import { RxDoubleArrowDown } from "react-icons/rx";
import ScrollingCircle from "./components/pages/home/scrolling-circle";
import AnimatedText from "./components/pages/home/animated-text";
import Feedback from "./components/pages/home/feedback";
import { BANNER_SLIDES } from "./config/mock-data";
import FAQ from "./components/pages/home/faq";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import toast from "react-hot-toast";
import Footer from "./components/pages/home/footer";
import Projects from "./components/pages/home/Projects";
import ProjectsMob from "./components/pages/home/ProjectsMob";
import useIsMobile from "./hooks/useDeviceType";
import AnimatedBlurText from "./components/common/animate-blur-text";
import useDeviceType from "./hooks/useDeviceType";

export default function Home() {
  const isBrowser = typeof window !== "undefined";
  const isMobile = isBrowser ? window.innerWidth < 768 : false;

  return (
    <section>
      <div className="h-[450px] md:h-[600px] lg:h-[1103px] w-full flex flex-col items-center relative z-10">
        <div className="absolute -top-12 lg:top-0 left-0 w-full h-full">
          <AnimatedContainer />
        </div>

        <div className="relative z-10 text-center mx-auto px-4 pt-28 md:pt-28 lg:pt-40 flex flex-col items-center gap-7 md:gap-14 lg:gap-16 mb-16 md:mb-24 lg:mb-[345px]">
          <div className="text-lg md:text-3xl lg:text-5xl text-white leading-tight">
            <AnimatedBlurText>
              Lorem Ipsum is simply dummy text of the{" "}
              <br className="hidden sm:block" /> printing and typesetting
              industry.
            </AnimatedBlurText>
          </div>
          <CustomButton
            size="md"
            customVariant="primary"
            title="Join Now"
            className="font-medium border-2 border-white/5 !rounded-[15px] w-fit"
          />
        </div>

        <BannerSlider slides={BANNER_SLIDES} />
      </div>

      <div className="w-full lg:min-h-screen h-full flex md:items-center relative py-28 sm:py-48 lg:py-0 bg-primary-gray top-fade-shadow">
        <div className="flex justify-center items-center w-full mx-auto h-full relative px-10 md:px-0">
          <div className="space-y-3 sm:space-y-7 lg:space-y-3">
            <div className="text-2xl md:text-[40px] lg:text-6xl font-bold text-center md:text-start">
              <AnimatedBlurText>How it works?</AnimatedBlurText>
            </div>
            <p className="text-sm md:text-base lg:text-2xl text-center md:text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br className="md:block hidden" /> Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s,{" "}
              <br className="md:block hidden" /> when an unknown printer took a
              galley of type and scrambled it to make a type{" "}
              <br className="md:block hidden" /> specimen book.
            </p>
          </div>
        </div>
        <RxDoubleArrowDown className="text-2xl md:text-4xl absolute top-10/12 left-1/2 -translate-x-1/2" />
      </div>

      {isMobile ? (
        <ProjectsMob />
      ) : (
        <div>
          <div className="h-[60vh]"></div>
          <Projects />
          <div className="h-[80vh]"></div>
        </div>
      )}

      <div className="flex flex-col gap-16 items-center w-full lg:min-h-screen h-full relative">
        <div className="flex flex-col items-center gap-8 lg:gap-14">
          <div className="md:text-5xl text-3xl sm:text-4xl text-white md:text-left text-center">
            <AnimatedBlurText>Lorem Ipsum is simply dummy</AnimatedBlurText>
          </div>
          <CustomButton
            size="md"
            customVariant="primary"
            title="Join Now"
            className="font-medium border-2 border-white/5 !rounded-[15px] w-fit"
          />
        </div>
        <div className="flex flex-col w-full items-center overflow-hidden">
          <Image
            width={670}
            height={304}
            alt="globe"
            src="/images/home/globe.svg"
          />
          <AnimatedText text="LOREM IPSUM" className="mt-4" />
        </div>
      </div>
      <Feedback />
      <div className="lg:pt-48 lg:pb-40 sm:py-16 py-20 flex flex-col items-center gap-9 sm:gap-24 lg:gap-36 sm:px-12 px-5 lg:px-24 w-full">
        <div className="flex flex-col gap-7 lg:gap-16 w-full">
          <div className="lg:text-5xl sm:text-3xl text-2xl text-white">
            <AnimatedBlurText>Frequently Asked Questions</AnimatedBlurText>
          </div>
          <FAQ />
        </div>
        <div className="flex flex-col gap-5 items-center w-full sm:w-2/3 lg:w-1/2 xl:w-3/12">
          <div className="text-2xl text-white">
            <AnimatedBlurText>Still have a question?</AnimatedBlurText>
          </div>
          <div className="flex items-center justify-between px-3.5 py-3 rounded-[15px] bg-white/5 text-white w-full">
            contact@info.com
            <span
              onClick={() => {
                navigator.clipboard.writeText("contact@info.com");
                toast.success("Email copied to clipboard!");
              }}
              className="bg-primary-black py-[5px] px-2.5 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-sm flex items-center gap-1.5 cursor-pointer hover:bg-white/10 transition-colors duration-300"
            >
              Copy
              <HiOutlineClipboardDocumentList className="text-2xl" />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
