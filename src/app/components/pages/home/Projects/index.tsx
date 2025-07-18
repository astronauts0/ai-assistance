"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { STRIPES_DATA } from "@/app/config/mock-data";

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const dots = gsap.utils.toArray<HTMLElement>(".dot");
    const totalDots = dots.length;
    const radius = 500;

    // Set initial state of dots
    dots.forEach((dot, i) => {
      const angle = (i / totalDots) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      gsap.set(dot, {
        x,
        y,
      });
    });

    gsap.set(".dots-container", { rotate: -95 });

    const ctx = gsap.context(() => {
      const stripes = gsap.utils.toArray<HTMLElement>(".stripe");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${stripes.length * window.innerHeight}`,
          scrub: 1,
          pin: true,
          markers: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (stripes.length - 1));
            stripes.forEach((stripe, i) => {
              const textEl = stripe.querySelector(".str_first");
              if (textEl) textEl.classList.toggle("opacity-100", i === index);
            });
          },
        },
        defaults: { ease: "power2.inOut", duration: 1 },
      });

      stripes.forEach((_, i) => {
        const label = `step-${i}`;
        tl.addLabel(label);

        tl.to(
          ".circle",
          {
            rotate: -33 * (i + 1),
          },
          label
        );

        tl.to(
          ".non-rotating-elements",
          {
            rotate: 33 * (i + 1),
          },
          label
        );

        tl.to(
          `.img-${i}`,
          {
            delay: -1,
            width: 500,
            height: 500,
          },
          label
        );

        tl.to(
          ".dots-container",
          {
            rotate: -95 - (i + 1) * (145 / totalDots),
            transformOrigin: "center center",
            duration: 0.5,
            ease: "power2.out",
          },
          label
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen h-full w-full relative " ref={containerRef}>
      <div className="circle border-[55px] md:border-[90px] border-[#1D1D1D] w-[60vh] h-[60vh] md:w-[170vh] md:h-[170vh] rounded-full absolute md:-left-[85vh] left-1/2 -translate-x-1/2 md:-translate-x-0 md:top-1/2 -top-[30vh] transform md:-translate-y-1/2">
        {/* Fixed Elements That Should Not Rotate */}
        <div className="non-rotating-elements absolute top-0 left-0 w-full h-full will-change-transform pointer-events-none z-20">
          <div className="left_circle_1 h-68 w-68 rounded-full md:border-r border-b border-white absolute md:top-1/2 left-1/2 transform md:-translate-y-1/2 -translate-x-1/2 -top-12"></div>
          <Image
            height={529}
            width={594}
            className="absolute md:-top-24 md:-right-32"
            alt="line"
            src="/images/home/line.svg"
          />
          <div className="inner_circle absolute md:top-1/2 bottom-4 md:bottom-auto md:right-10 left-1/2 md:left-auto transform md:-translate-y-1/2 -translate-x-1/2 md:-translate-x-0 md:border-r border-b border-white/20 w-[40vh] md:w-[130vh] h-[40vh] md:h-[130vh] rounded-full z-10"></div>
          <hr className="h-[55px] md:h-auto md:w-[91px] border border-primary z-10 absolute md:top-1/2 top-full md:left-full left-1/2 md:-translate-x-0 -translate-x-1/2 transform md:-translate-y-1/2" />
          <div className="h-3.5 w-3.5 bg-primary absolute md:top-1/2 md:bottom-auto bottom-[-6rem] md:-right-[8.5rem] md:left-auto left-1/2 -translate-x-1/2 transform md:-translate-y-1/2" />
          {/* <div className="dots-container absolute top-1/2 left-3/4 transform -translate-y-1/2 z-50">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="dot" />
            ))}
          </div> */}
        </div>

        {/* Rotating Stripes */}
          {STRIPES_DATA.map((item, i) => (
            <div
              key={i}
              className="stripe h-[60px] w-full absolute top-1/2 left-1/2 origin-left items-center flex"
              style={{ transform: `translateY(-50%) rotate(${33 * i}deg)` }}
            >
              <div className="str_first opacity-50 text-2xl translate-x-6 w-1/2 h-full text-white flex items-center justify-center">
                {item.text}
              </div>
              <div className="str_second w-1/2 h-full flex items-center justify-center">
                <Image
                  height={i === 0 ? 500 : 300}
                  width={i === 0 ? 500 : 300}
                  alt="dashboard-img"
                  src={item.img}
                  className={`stripe-img img-${i} absolute left-3/4`}
                />
              </div>
            </div>
          ))}

      </div>
    </div>
  );
};

export default Projects;
