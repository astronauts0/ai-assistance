import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/layout/header";
import Providers from "./components/layout/providers";
import Lenis from "./utils/lenis/Lenis";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased max-w-[1440px] mx-auto`}
        cz-shortcut-listen="true"
      >
        <Lenis>
          <Providers>
            {/* <Header /> */}
            {children}
          </Providers>
        </Lenis>
      </body>
    </html>
  );
}
