"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import EmployeeInfoForm from "./EmployeeInfoForm";

const EmployeeInfo = ({ edit, profileData, setEdit }) => {
  const [selectedTab, setSelectedTab] = useState("personal"); // Change between Tabs

  return (
    <div>
      <Tabs
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />

      {selectedTab === "personal" && (
        <EmployeeInfoForm
          edit={edit}
          setEdit={setEdit}
          profileData={profileData}
        />
      )}
      {/* 
        {selectedTab === 'professional' && <ProfessionalInfoForm />}
        {selectedTab === 'documents' && <DocumentsForm />}
        {selectedTab === 'account' && <AccountAccessForm />}
      */}
    </div>
  );
};

export default EmployeeInfo;
