"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SideLink = ({ to, image, title, selected }) => {
  const [hover, setHover] = useState();
  return (
    <Link
      href={to}
      className={`${
        selected && " rounded-r-[25px] bg-[#F9EAEB]"
      } py-2 hover:bg-[#F9EAEB] hover:rounded-r-[25px]  relative   text-[#242223] font-lexend font-medium flex items-center  `}>
      {selected && (
        <div className=" absolute pl-[2px] top-[50%] translate-y-[-50%] w-[5px] h-[53px] rounded-[8px]   bg-customRed" />
      )}
      <div className="pl-[82px] gap-[19px] flex items-center">
        <Image
          src={image}
          alt=""
          width={26}
          height={26}
          className=" w-[26px] h-[26px]"
        />
        <span>{title}</span>
      </div>
    </Link>
  );
};
export default SideLink;
