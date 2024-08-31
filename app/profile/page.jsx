"use client";
import React, { useEffect, useState } from "react";
import MainInfo from "./MainInfo";
import EmployeeInfo from "./EmployeeInfo";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${url}profile/`, {
          headers: {
            Authorization: "Token c4b6558ef8d7c34742bc985931d4bcf68c4f5330", // Your token here
          },
        });
        setProfileData(response?.data);
      } catch (err) {
        setError(err.message);
        console.log(err?.response?.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);
  return (
    <div>
      <div className=" mt-[29px] pb-[30px] ml-[57px] mr-[86px] border-b">
        <MainInfo
          profileData={profileData}
          setEdit={setEdit}
          edit={edit}
        />
      </div>
      <div className="mr-[187px] ml-[57px] mt-[41px]">
        <EmployeeInfo
          edit={edit}
          profileData={profileData}
        />
      </div>
    </div>
  );
};

export default Profile;
