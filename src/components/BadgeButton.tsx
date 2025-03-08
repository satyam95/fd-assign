import React from "react";
import Button from "./Button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
  selected?: boolean;
}

const BadgeButton = ({ icon, label, selected, ...props }: ButtonProps) => {
  const baseStyles =
    "px-4 py-1.5 text-[17px] leading-[26px] font-medium rounded-full flex items-center justify-center gap-2 transition-colors duration-200";
  const selectedStyles = selected
    ? "bg-[#4F93F5] text-white"
    : "bg-[#EBF3FF] text-[#3387FF] hover:bg-[#D7E7FF]";

  return (
    <Button className={`${baseStyles} ${selectedStyles}`} {...props}>
      {icon}
      {label}
    </Button>
  );
};

export default BadgeButton;
