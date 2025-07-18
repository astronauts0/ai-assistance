"use client";

import React from "react";
import Logo from "../../common/logo";
import CustomButton from "../../common/button";
import { useRouter } from "next/navigation";
import useDeviceType from "@/app/hooks/useDeviceType";

const Header = () => {
  const router = useRouter();
  const device = useDeviceType();

  const handleLoginClick = () => {
    if (device === "desktop") {
      router.push("/login");
    } else {
      router.push("/login-mobile");
    }
  };

  return (
    <div className="py-3 md:py-3.5 px-6 lg:py-7 lg:px-12 sticky top-0 w-full flex items-center justify-between z-30">
      <Logo />

      <CustomButton
        customVariant="primary"
        size="sm"
        title="LOGIN"
        onClick={handleLoginClick}
        className="font-medium !text-white text-shadow-primary"
      />
    </div>
  );
};

export default Header;
