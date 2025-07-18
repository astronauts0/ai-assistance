"use client";

import React, { useRef } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { IoIosArrowDown } from "react-icons/io";
import { FAQ_DATA } from "@/app/config/mock-data";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const titles = gsap.utils.toArray<HTMLElement>(".faq-title");

      titles.forEach((el) => {
        const split = new SplitText(el, { type: "chars" });

        gsap.set(el, { perspective: 1000 });

        gsap.from(split.chars, {
          y: "100%",
          opacity: 0,
          filter: "blur(20px)",
          ease: "power4.out",
          duration: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
            // once: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <Accordion
        variant="splitted"
        selectionMode="multiple"
        className="flex flex-col gap-5 !px-0"
        itemClasses={{
          base: "cursor-pointer w-full justify-between p-0 rounded-primary lg:rounded-secondary",
          titleWrapper:
            "cursor-pointer w-full flex justify-start items-start h-full w-full",
          title: "text-primary-slate lg:text-[26px] text-start",
          heading: "text-white/75 data-[open=true]:text-white p-0",
          content:
            "lg:w-10/12 lg:text-lg text-sm data-[open=true]:border-b data-[open=true]:border-white/20 data-[open=true]:pb-5 data-[open=true]:pt-5",
          trigger: "cursor-pointer",
        }}
      >
        {FAQ_DATA.map((item) => (
          <AccordionItem
            key={"faq--" + item.id}
            aria-label={item.question}
            title={<div className="faq-title">{item.question}</div>}
            className="text-white/75"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowDown className="text-3xl border border-white rounded-lg p-1 rotate-180" />
              ) : (
                <IoIosArrowDown className="text-3xl border border-white/25 rounded-lg p-1" />
              )
            }
          >
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
