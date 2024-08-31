"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import arrow from "@/public/Sidebar/arrow.svg";
import rightArrow from "@/public/Sidebar/rightArrow.svg";
import { IoIosArrowForward } from "react-icons/io";

const SideDroplist = ({ image, title, selected, list }) => {
  const [toggle, setToggle] = useState(false);
  const openDroplist = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <div>
      <button
        onClick={openDroplist}
        className={`${
          toggle && " rounded-r-[25px] bg-[#F9EAEB]"
        } py-2 w-full  hover:bg-[#F9EAEB] hover:rounded-r-[25px]  relative   text-[#242223] font-lexend font-medium flex items-center  `}>
        {toggle && (
          <div className=" absolute pl-[2px] top-[50%] translate-y-[-50%] w-[5px] h-[48px] rounded-[8px]  bg-customRed" />
        )}
        <div className="pl-[82px] gap-[19px] flex items-center">
          <Image
            src={image}
            alt=""
            width={26}
            height={26}
            className=" w-[26px] h-[26px]"
          />
          <span className={`    ${toggle && "text-customRed "}`}>{title}</span>
        </div>
        <div className="    ml-auto mr-[27px]">
          <IoIosArrowForward
            className={` duration-300 ease-in-out transition-all   ${
              toggle && " rotate-90 text-customRed "
            } text-[24px] `}
          />
          {/* <Image
            src={toggle ? arrow : rightArrow}
            alt="arrow"
            className=""
          /> */}
        </div>
      </button>
      {/* Droplist */}
      {/* List is opened and there SubLinks */}
      {toggle && list && (
        <div className="pl-[130px]  mt-[28px] flex flex-col gap-[21px]">
          {list.map((page, index) => (
            <Link
              key={page.id}
              href={page.to}
              className={` ${
                page.selected === "" && " text-[#7B7B7B]"
              }  text-[16px] leading-[24px]  font-light`}>
              <div className=" gap-[13px] flex items-center">
                <Image
                  src={page.image}
                  alt=""
                />
                <span>{page.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default SideDroplist;
