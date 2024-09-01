"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";

import logo from "@/public/Login/loginLogo.png";

import CustomField from "@/components/Formik/CustomField";
import PasswordField from "@/components/Formik/PasswordField";
import axios from "axios";
import { url } from "@/utils/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState();
  const router = useRouter();

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  // Submit Login
  const handleSubmit = async (values) => {
    try {
      // Disable Login Button

      setIsLoading(true);
      const response = await axios.post(`${url}login/`, values);

      // able Login Button
      setIsLoading(false);

      // Login message
      toast.success("You have successfully logged in.");

      // Navigate to Profile page
      router.push("/profile");
    } catch (error) {
      // Error Details
      toast.error(error.response.data.detail);

      // Set Api Error
      setApiError(error.response.data);

      // able Login Button
      setIsLoading(false);
    }
    console.log("Form data", values);
  };

  return (
    <div className=" w-full font-cairo  ">
      {/* Logo */}
      <Image
        src={logo}
        alt="Cyparta"
        width={225}
        height={102}
        className=" w-[225px] mt-[180px] mb-[31px] h-[102px] mx-auto"
      />

      {/* Login Form */}
      <div className="flex items-center justify-center  ">
        <div className="   w-[616px] h-[489px] pt-[84px] px-[30px]   bg-white  rounded-[16px] border-[0.6px] ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form className="">
                <div className=" flex flex-col gap-[19px] mb-[84px] ">
                  {/* Email   */}
                  <CustomField
                    error={apiError?.email}
                    label={"Email Address"}
                    type={"email"}
                    id={"email"}
                    name={"email"}
                    placeholder="nouran@cyparta.com"
                  />
                  {/* Password   */}
                  <PasswordField
                    error={apiError?.password}
                    label={"Password"}
                    id={"password"}
                    name={"password"}
                    placeholder="*********"
                  />
                </div>

                {/* Submit Button */}
                <div className=" px-[80px]">
                  <button
                    type="submit"
                    className="w-full py-4    border border-transparent rounded-[10px]   text-[18px] font-bold text-white bg-black hover:bg-gray-900 focus:outline-none    "
                    disabled={isLoading}>
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
