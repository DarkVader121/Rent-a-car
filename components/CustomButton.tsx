"use client"

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, containerStyles, 
    handleClick, btnType, textStyles, rightIcon}: CustomButtonProps) => {
  return (
    <>
    <button
        disabled={false}
        type={ btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
              <div className="relative ">
                <Image 
                  src={rightIcon}
                  alt="right icon"
                  width={24}
                  height={24}
                  className="object-contain"
                  />
              </div>
            )}
    </button>
    </>
  )
}

export default CustomButton