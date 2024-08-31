"use client";
import Image from "next/image";
import React, { useState } from "react";
import notification from "@/public/Navbar/bell.svg";
import user from "@/public/Navbar/user.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);

  const openDroplist = () => {
    setToggle((toggle) => !toggle);
  };

  const handleLogout = () => {
    // TODO Logout
    router.push("/login");
  };

  return (
    <nav className=" w-full flex  items-center gap-[35px] justify-end pr-[93px]">
      {/* notifications */}
      <button className=" bg-[#A2A1A8] bg-opacity-10 rounded-[10px] w-[50px] h-[50px] flex justify-center  items-center">
        <Image
          src={notification}
          alt="notifications"
          className=" w-[24px] h-[24px]"
        />
      </button>
      {/* User */}
      <div className=" relative">
        <button onClick={openDroplist}>
          <Image
            src={user}
            alt="user"
            className=" rounded-full w-[60px] h-[60px]"
          />
        </button>
        {toggle && (
          <button
            onClick={handleLogout}
            className=" absolute -bottom-7 -left-5  hover:bg-slate-200  px-4 py-1 bg-[#eeeef0] border rounded-lg">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
