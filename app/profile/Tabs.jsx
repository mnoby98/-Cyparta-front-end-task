import Image from "next/image";
import { useState } from "react";
import emplyee from "@/public/Profile/user.svg";
import lock from "@/public/Profile/lock.svg";
import document from "@/public/Profile/document-text.svg";
import job from "@/public/Profile/job.svg";

const Tabs = ({ selectedTab, onSelectTab }) => {
  const tabs = [
    { label: "Personal Information", value: "personal", image: emplyee },
    {
      label: "Professional Information",
      value: "professional",
      image: job,
    },
    { label: "Documents", value: "documents", image: document },
    { label: "Account Access", value: "account", image: lock },
  ];

  return (
    <div className="flex border-b mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onSelectTab(tab.value)}
          className={`py-2  mr-5   text-[16px] flex items-center gap-[10px]  font-semibold focus:outline-none ${
            selectedTab === tab.value
              ? "border-b-[3px] border-customRed font-semibold  text-customRed"
              : "text-[#16151C] font-light   hover:text-customRed"
          }`}>
          <Image
            src={tab.image}
            alt=""
          />
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
