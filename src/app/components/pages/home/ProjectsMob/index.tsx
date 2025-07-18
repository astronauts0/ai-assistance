"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { STRIPES_DATA } from "@/app/config/mock-data";

const ProjectsMob = () => {
  const containerMobRef = useRef(null);
  const imagesWrapperRef = useRef(null);

  useGSAP(() => {
    const sectionsMob = gsap.utils.toArray<HTMLElement>(".str_second");
    const texts = gsap.utils.toArray<HTMLElement>(".stripe");

    // Make all texts invisible initially except the first
    gsap.set(texts, { opacity: 0 });
    gsap.set(texts[0], { opacity: 1 });

    gsap.to(sectionsMob, {
      xPercent: -100 * (sectionsMob.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerMobRef.current,
        start: "top top",
        end: () => "+=" + window.innerWidth * sectionsMob.length,
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.round(progress * (sectionsMob.length - 1));

          texts.forEach((text, i) => {
            gsap.to(text, {
              opacity: i === index ? 1 : 0,
              duration: 0.3,
              overwrite: true,
            });
          });
        },
      },
    });
  }, []);

  return (
    <div
      className="min-h-screen h-full w-full relative overflow-hidden"
      ref={containerMobRef}
    >
      {/* Circular SVG */}
      <div className="img_circle">
        <Image
          height={500}
          width={500}
          alt="dashboard-img"
          src={"/images/home/rotate_circle.svg"}
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 rotate-90"
        />
        {STRIPES_DATA.map((item, i) => (
          <div
            key={i}
            className="stripe absolute top-1/5 sm:top-1/6 text-xl md:top-[10%] left-1/2 -translate-x-1/2 text-white text-sm pointer-events-none"
          >
            <h1>{item.text}</h1>
          </div>
        ))}
      </div>

      {/* Curved Text - Top Center */}

      {/* Scrollable Image Slider */}
      <div
        className={`flex w-[${STRIPES_DATA.length * 100}vw] items-center`}
        ref={imagesWrapperRef}
      >
        {STRIPES_DATA.map((item, i) => (
          <div
            key={i}
            className="str_second w-screen flex-shrink-0 flex justify-center items-center sm:pt-[65%] pt-[100%]"
          >
            <Image
              height={600}
              width={600}
              alt="dashboard-img"
              src={item.img}
              className="sm:w-[80%] w-[90%] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMob;
