import { ErrorMessage, Field } from "formik";
import React from "react";

const CustomField = ({ label, id, type, name, placeholder, error }) => {
  return (
    <div className=" ">
      <label
        htmlFor={id}
        className="     font-semibold text-[17px] leading-[31px] text-[#262626]">
        {label}
      </label>
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className=" mt-2  border-opacity-10 border-[#121212]  w-full px-[16px] text-[16px] py-[12.5px] border active:border-[#333333] rounded-md shadow-sm placeholder-[#CDCDCD] focus:outline-none   "
      />

      {/* Yup Validation */}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-600 text-sm mt-1"
      />

      {/* Api Validation */}
      {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default CustomField;
