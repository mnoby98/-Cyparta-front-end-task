"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import EmployeeInfoForm from "./EmployeeInfoForm";

const EmployeeInfo = ({ edit }) => {
  const [selectedTab, setSelectedTab] = useState("personal");

  return (
    <div>
      <Tabs
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />

      {selectedTab === "personal" && <EmployeeInfoForm edit={edit} />}
      {/* 
        {selectedTab === 'professional' && <ProfessionalInfoForm />}
        {selectedTab === 'documents' && <DocumentsForm />}
        {selectedTab === 'account' && <AccountAccessForm />}
      */}
    </div>
  );
};

export default EmployeeInfo;
