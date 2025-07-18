"use client";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      {children}
    </HeroUIProvider>
  );
};

export default Providers;
