import { MoveRight } from "lucide-react";
import React from "react";

const Button = ({children}) => {
  return <>
   <button className="py-3 px-6 bg-[#6fdfa7] text-black rounded-full flex items-center justify-center gap-2 text-sm font-bold uppercase cursor-pointer hover:bg-[#0F0F0F] hover:text-[#6fdfa7] transition duration-300">{children} <MoveRight /></button>
  </>
};

export default Button;
