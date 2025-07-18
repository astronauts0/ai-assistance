import { ROUTES } from "@/app/config";
import Link from "next/link";
import React from "react";

interface propTypes {
  className?: string;
}

const Logo = ({ className }: propTypes) => {
  return (
    <Link href={ROUTES.HOME}>
      <h1
        className={`${className} font-extrabold text-xs sm:text-2xl lg:text-3xl text-white`}
      >
        Logo
      </h1>
    </Link>
  );
};

export default Logo;
