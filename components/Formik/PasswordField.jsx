import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const PasswordField = ({ id, label, placeholder, name, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="     font-semibold text-[17px] leading-[31px] text-[#262626]">
        {label}
      </label>
      <div className=" relative">
        <Field
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          className=" mt-2  w-full px-[16px] text-[16px] py-[12.5px] border active:border-[#333333] border-opacity-10 border-[#121212] rounded-md shadow-sm placeholder-[#CDCDCD] focus:outline-none   "
        />
        {/* Eye Show password */}
        <span
          className="absolute  text-[20px] top-[55%] translate-y-[-50%] right-0 pr-3 flex items-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <BsEye className="text-gray-500" />
          ) : (
            <BsEyeSlash className="text-gray-500   " />
          )}
        </span>
      </div>

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

export default PasswordField;
