"use client";

import { FEEDBACK } from "@/app/config/mock-data";
import Image from "next/image";
import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import useDeviceType from "@/app/hooks/useDeviceType";
import AnimatedBlurText from "@/app/components/common/animate-blur-text";

const Feedback = () => {
  const feedSectionRef = useRef<HTMLDivElement | null>(null);
  const feedContainerRef = useRef<HTMLDivElement | null>(null);

  const device = useDeviceType();

  useGSAP(() => {
    const section = feedSectionRef.current;
    const container = feedContainerRef.current;

    if (!section || !container) return;

    const totalWidth = container.scrollWidth;

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: () => -(totalWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          // markers: true,
          pin: true,
          scrub: true,
        },
      });
    }, feedSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      <div className="h-40 w-full " />
      <section
        className="grid overflow-hidden min-h-screen 2xl:py-8 relative"
        ref={feedSectionRef}
      >
        <div className="flex flex-col items-center gap-1.5 sm:gap-3 text-primary-black mb-10">
          <div className="text-2xl md:text-5xl text-center">
            <AnimatedBlurText>Hear from our community</AnimatedBlurText>
          </div>
          <div className="text-sm md:text-2xl text-center">
            <AnimatedBlurText>
              Scroll and hover to read the reviews
            </AnimatedBlurText>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={feedContainerRef}
            className="flex items-center -space-x-16 py-10 testimonial-container translate-x-1/4"
          >
            {FEEDBACK.map((item, index) => (
              <div
                key={index}
                style={{ zIndex: FEEDBACK.length - index }}
                className="testimonial_card min-w-[200px] h-[200px] sm:min-w-[302px] sm:h-[262px] p-6 sm:p-[47px]  rounded-2xl flex flex-col justify-between border border-gray-200 bg-white"
              >
                <div className="flex flex-col gap-1.5">
                  <h1 className="md:text-sm text-[10px] text-primary-black">
                    "{item.quote}"
                  </h1>
                  <div className="flex gap-1.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-400 sm:size-4 size-3"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col text-primary-black mt-auto">
                  <h1 className="font-medium md:text-lg sm:text-base text-xs">
                    {item.name}
                  </h1>
                  <p className="text-[10px] sm:text-sm text-gray-600">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="size-14 rounded-full bg-primary-gray flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer">
          <FaArrowLeftLong className="text-3xl" />
        </div>

        <div className="flex justify-center items-center gap-12 md:gap-28 w-full mt-10 sm:mt-20">
          <Image
            width={device === "mobile" ? 100 : 150}
            height={device === "mobile" ? 40 : 60}
            src="/images/home/google-review.svg"
            alt="google-review"
          />
          <Image
            width={device === "mobile" ? 100 : 150}
            height={device === "mobile" ? 40 : 69}
            src="/images/home/trust-pilo.svg"
            alt="trust-pilot"
          />
        </div>
      </section>
      <div className="h-40 w-full " />
    </div>
  );
};

export default Feedback;
