import { ErrorMessage, Field } from "formik";
import React from "react";

const ProfileField = ({
  name,
  id,
  label,
  type,
  placeholder,
  readOnly = false,
  value,
}) => {
  return (
    <div className=" flex  flex-col gap-[5px]">
      <label
        htmlFor={id}
        className=" text-[14px]  text-[#A2A1A8] leading-[22px]">
        {label}
      </label>
      <Field
        className={` ${
          !readOnly ? " bg-slate-50 " : " "
        } border-b leading-[24px]  text-[16px] focus:outline-none`}
        name={name}
        id={id}
        readOnly={readOnly}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <ErrorMessage
        name={name}
        component="div"
        className=" text-red-500"
      />
    </div>
  );
};

export default ProfileField;
