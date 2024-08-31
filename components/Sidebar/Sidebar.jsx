import Image from "next/image";
import React from "react";
import logo from "@/public/Sidebar/Logo.svg";
import Link from "next/link";
import dashboard from "@/public/Sidebar/akar-icons_dashboard.svg";
import employee from "@/public/Sidebar/employee.svg";
import profile from "@/public/Sidebar/profile.svg";
import attendance from "@/public/Sidebar/attendance.svg";
import tasks from "@/public/Sidebar/file.svg";
import payroll from "@/public/Sidebar/payroll.svg";
import holidays from "@/public/Sidebar/holidayes.svg";
import advancedPayment from "@/public/Sidebar/wallet.svg";
import arrow from "@/public/Sidebar/akar-icons_dashboard.svg";
import SideLink from "./SideLink";
import SideDroplist from "./SideDroplist";

const Sidebar = () => {
  const SubLinks = [
    { id: 1, title: "Profile", to: "/profile", image: profile, selected: "" },
    { id: 2, title: "Attendance", to: "#", image: attendance },
    { id: 3, title: "Tasks", to: "#", image: tasks },
  ];
  return (
    <aside className=" h-full border  rounded-[40px] ">
      {/* Logo */}
      <div className=" px-10 pt-1 pb-11">
        <Image
          src={logo}
          alt="Cyparta"
          className=" w-[247px] h-[158px]"
        />
      </div>
      {/* Pages */}
      <div className=" duration-300 ease-in-out transition-all flex flex-col gap-[49px]">
        <SideLink
          to={"#"}
          image={dashboard}
          title={"Dashboard"}
        />
        <SideDroplist
          selected
          list={SubLinks}
          to={"#"}
          image={employee}
          title={"Employees"}
        />
        <SideLink
          to={"#"}
          image={payroll}
          title={"Payroll"}
        />
        <SideDroplist
          to={"#"}
          image={holidays}
          title={"Holidays"}
        />
        <SideLink
          to={"#"}
          image={advancedPayment}
          title={"Advanced Payment"}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
