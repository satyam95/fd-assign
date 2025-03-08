import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "icon" | "text";
  size?: "small" | "medium" | "large";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "text", size = "medium", children, className = "", ...props },
    ref
  ) => {
    // Structural styles that always apply
    const baseStyles =
      "rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none disabled:bg-[#7878801F] disabled:text-[#3C3C434D] disabled:cursor-not-allowed";

    // Layout and sizing styles
    const sizeStyles = {
      icon: {
        small: "p-2 w-7 h-7",
        medium: "p-2 w-8.5 h-8.5",
        large: "p-4 w-12.5 h-12.5",
      },
      text: {
        small: "py-1 px-2.5 text-sm font-normal -tracking-[0.23px] gap-[3px]",
        medium: "px-3.5 py-[7px] text-[15px] leading-5 font-normal -tracking-[0.23px] gap-1",
        large: "px-5 py-3.5 text-[17px] leading-[22px] font-normal -tracking-[0.43px] gap-1",
      },
    } as const;

    // Default visual styles for each variant
    const variantStyles = {
      icon: "bg-[#007AFF] text-white hover:bg-[#448AF7]",
      text: "bg-[#007AFF] text-white hover:bg-[#448AF7]",
    };

    // Get the default classes for the current variant
    let variantClasses = variantStyles[variant];

    // If a custom text color is provided, remove the default text color from variantClasses.
    // This regex checks for any class starting with "text-".
    const hasCustomTextColor = /(^|\s)text-\S+/.test(className);
    if (hasCustomTextColor) {
      variantClasses = variantClasses
        .split(" ")
        .filter((cls) => !cls.startsWith("text-"))
        .join(" ");
    }

    const combinedStyles = clsx(
      baseStyles,
      sizeStyles[variant][size],
      variantClasses,
      className
    );

    return (
      <button ref={ref} className={combinedStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
