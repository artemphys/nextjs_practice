"use client";

import { CustomButtonProps } from "../types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  handleClick,
  btnType,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} fill alt="right icon" className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
