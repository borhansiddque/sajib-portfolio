import { MoveRight } from "lucide-react";
import React from "react";

const Button = ({children}) => {
  return <>
   <button className="py-3 px-6 bg-emerald-500 text-white rounded-full flex items-center justify-center gap-2 text-sm font-bold uppercase cursor-pointer hover:bg-gray-900 hover:text-[#6fdfa7] transition duration-300 tracking-wider">{children} <MoveRight /></button>
  </>
};

export default Button;
