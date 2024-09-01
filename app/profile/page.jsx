"use client";
import React, { useEffect, useState } from "react";
import MainInfo from "./MainInfo";
import EmployeeInfo from "./EmployeeInfo";

const Profile = () => {
  const [profileData, setProfileData] = useState(null); //State Api data
  const [edit, setEdit] = useState(false); //Toggle edit mode
  const [loading, setLoading] = useState(true); // For Loading
  const [error, setError] = useState(null); // For Errors with Api

  useEffect(() => {
    // Get Profile Data From API
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${url}profile/`, {
          headers: {
            // Add token from login api  !
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
        {/* Image - Job - Name -Email */}
        <MainInfo
          profileData={profileData}
          setEdit={setEdit}
          edit={edit}
        />
      </div>
      <div className="mr-[187px] ml-[57px] mt-[41px]">
        {/* Rest employee info */}
        <EmployeeInfo
          edit={edit}
          setEdit={setEdit}
          profileData={profileData}
        />
      </div>
    </div>
  );
};

export default Profile;
