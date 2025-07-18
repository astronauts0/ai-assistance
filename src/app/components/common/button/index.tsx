"use client";
import React, { forwardRef } from "react";
import classNames from "classnames";
import { Button, ButtonProps as HeroUIButtonProps } from "@heroui/react";

type ButtonVariant = "primary" | "secondary" | "default";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HeroUIButtonProps, "onFocus" | "variant"> {
  customVariant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  fullWidth?: boolean;
  title?: string;
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      customVariant = "default",
      size = "md",
      outline = false,
      fullWidth = false,
      className,
      disabled,
      title,
      ...props
    },
    ref
  ) => {
    const getVariantStyles = (): string => {
      if (outline) {
        return {
          primary:
            "border border-primary-500 text-primary-500 hover:bg-primary/50",
          secondary:
            "border border-secondary-500 text-secondary-500 hover:bg-secondary hover:text-white",
          default:
            "border border-primary-orange text-primary-orange hover:bg-primary-orange/50",
        }[customVariant];
      }

      return {
        primary: "backdrop-blur-sm bg-white/5 text-white btn-gradient-hover",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
        default: "bg-primary-orange text-white hover:bg-primary-orange/80",
      }[customVariant];
    };

    const getSizeStyles = (): string => {
      return {
        sm: "px-4 md:px-[18px] py-2 md:py-[9px] text-xs md:text-sm",
        md: "px-10 md:px-12 py-2 md:py-[11px] text-sm md:text-xl",
        lg: "px-9 py-[19px] text-sm lg:!px-5 lg:py-4 xl:text-base xl:px-9 xl:py-[19px]",
      }[size];
    };

    const baseStyles = classNames(
      "inline-flex items-center justify-center rounded-primary !transition-all !duration-300 focus:outline-none cursor-pointer !h-auto",
      getVariantStyles(),
      getSizeStyles(),
      {
        "w-full": fullWidth,
        "opacity-50 cursor-not-allowed": disabled,
      },
      className
    );

    return (
      <Button ref={ref} className={baseStyles} disabled={disabled} {...props}>
        {title}
      </Button>
    );
  }
);

CustomButton.displayName = "Button";

export default CustomButton;
