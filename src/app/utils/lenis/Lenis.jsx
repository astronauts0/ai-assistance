"use client";
import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/dist/lenis-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./lenis.css";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Lenis = ({ children }) => {
  const lenis = useLenis();

  useEffect(() => {
    lenis?.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis?.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis?.raf);
      lenis?.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Lenis;
