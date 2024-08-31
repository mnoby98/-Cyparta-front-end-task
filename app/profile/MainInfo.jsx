import React from "react";
import Image from "next/image";
import user from "@/public/Profile/user.png";
import job from "@/public/Profile/job.svg";
import mail from "@/public/Profile/mail.svg";
import editIcon from "@/public/Profile/edit.svg";

const MainInfo = ({ profileData, setEdit, edit }) => {
  const handleEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    <div className=" flex justify-between  ">
      <div className=" flex  gap-[16px]">
        <Image
          src={profileData?.image || user}
          alt="user"
          className=" w-[100px] h-[100px]"
        />
        <div className=" text-[16px] text-[#242223]">
          <h2 className=" font-semibold leading-[36px] text-[24px]">
            {profileData?.first_name && profileData?.last_name
              ? profileData?.first_name + " " + profileData?.last_name
              : "Mariam Aly"}
          </h2>
          <span className=" flex items-center gap-[10px] mt-2  font-light">
            <Image
              src={job}
              alt="job"
              className=" w-[24px] h-[24px]"
            />
            UX/UI DESIGNER
          </span>
          <span className=" flex items-center gap-[10px] mt-2  font-light">
            <Image
              src={mail}
              alt="mail"
              className=" w-[24px] h-[24px]"
            />
            {profileData?.email || "mariam@gmail.com"}
          </span>
        </div>
      </div>

      <button
        onClick={handleEdit}
        className=" mt-auto h-[50px] flex items-center gap-[10px] bg-[#242223] rounded-[10px] text-white font-light leading-[24px] px-[20px]  ">
        <Image
          src={editIcon}
          alt="edit"
          className=" w-[24px] h-[24px]"
        />
        {edit ? "cancel Edit" : "Edit Profile"}
      </button>
    </div>
  );
};

export default MainInfo;
