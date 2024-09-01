import ProfileField from "@/components/Formik/ProfileField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { url } from "@/utils/api";
import { useState } from "react";

const PersonalInfoSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email("Invalid email"),
  mobileNumber: Yup.string().matches(
    /^[0-9]+$/,
    "Mobile number must be Numbers"
  ), //Validation for rest of Employee Info
  // dateOfBirth: Yup.date(),
  // gender: Yup.string(),
  // maritalStatus: Yup.string(),
  // address: Yup.string(),
  // city: Yup.string(),
  // state: Yup.string(),
  // zipCode: Yup.string().matches(/^[0-9]+$/, "zipCode number must be Numbers"),
  // workHours: Yup.number(),
  // salaryPerHour: Yup.number(),
});

const EmployeeInfoForm = ({ edit, profileData, setEdit }) => {
  const [loading, setLoading] = useState(false); // For Loading
  const [error, setError] = useState(null); // For Errors with Api
  const submitEdit = async (values) => {
    try {
      setLoading(true);
      const response = await axios.patch(
        `${url}profile`,
        {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone: values?.mobileNumber,
          bio: values?.bio || null, //Is not in UI Figma
        },
        {
          // Replace with token from login
          headers: {
            Authorization: "Token c4b6558ef8d7c34742bc985931d4bcf68c4f5330", // Your token here
          },
        }
      );
      console.log("Data submitted successfully:", response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error submitting data:", error);
    }
  };
  return (
    <Formik
      initialValues={{
        // Data from Api || Static
        firstName: profileData?.first_name || "Mariam",
        lastName: profileData?.last_name || "Aly",
        email: profileData?.email || "mariam@gmail.com",
        mobileNumber: profileData?.phone || "010567240256",
        dateOfBirth: "July 14, 1995",
        maritalStatus: "Single",
        gender: "Female",
        nationality: "Egypt",
        address: "Maadi",
        city: "Cairo",
        state: "Cairo",
        zipCode: "35624",
        workHours: 180,
        salaryPerHour: 300,
        totalSalary: "54000",
      }}
      validationSchema={PersonalInfoSchema}
      onSubmit={submitEdit}>
      {({ values, setFieldValue }) => (
        <Form>
          <div className="grid grid-cols-2 font-light gap-[20px]">
            {/* Custom Field */}
            <ProfileField
              id={"firstName"}
              name={"firstName"}
              placeholder={"Mariam"}
              type={"text"}
              readOnly={!edit} // Able to edit with toggle
              label={"First Name"}
              value={values.firstName}
            />
            <ProfileField
              id={"lastName"}
              name={"lastName"}
              placeholder={"Aly"}
              type={"text"}
              readOnly={!edit}
              label={"Last Name"}
              value={values.lastName}
            />

            <ProfileField
              id={"email"}
              name={"email"}
              placeholder={"example@example.com"}
              type={"text"}
              readOnly={!edit}
              label={"Email Address"}
              value={values.email}
            />
            <ProfileField
              id={"mobileNumber"}
              name={"mobileNumber"}
              placeholder={"01012345678"}
              type={"text"}
              readOnly={!edit}
              label={"Mobile Number"}
              value={values.mobileNumber}
            />
            <ProfileField
              id={"dateOfBirth"}
              name={"dateOfBirth"}
              placeholder={"YYYY-MM-DD"}
              type={"text"}
              readOnly
              label={"Date of Birth"}
              value={values.dateOfBirth}
            />
            <ProfileField
              id={"maritalStatus"}
              name={"maritalStatus"}
              readOnly
              label={"Marital Status"}
              value={values.maritalStatus}
            />
            <ProfileField
              id={"gender"}
              name={"gender"}
              readOnly
              label={"Gender"}
              value={values.gender}
            />
            <ProfileField
              id={"nationality"}
              name={"nationality"}
              placeholder={"Nationality"}
              type={"text"}
              readOnly
              label={"Nationality"}
              value={values.nationality}
            />
            <ProfileField
              id={"address"}
              name={"address"}
              readOnly
              placeholder={"123 Main St"}
              type={"text"}
              label={"Address"}
              value={values.address}
            />
            <ProfileField
              id={"city"}
              name={"city"}
              readOnly={!edit}
              placeholder={"City"}
              type={"text"}
              label={"City"}
              value={values.city}
            />
            <ProfileField
              id={"state"}
              name={"state"}
              placeholder={"State"}
              type={"text"}
              readOnly={!edit}
              label={"State"}
              value={values.state}
            />
            <ProfileField
              id={"zipCode"}
              name={"zipCode"}
              placeholder={"12345"}
              type={"text"}
              readOnly
              label={"Zip Code"}
              value={values.zipCode}
            />

            <ProfileField
              id={"workHours"}
              name={"workHours"}
              placeholder={"Work Hours"}
              type={"text"}
              readOnly
              label={"Work’s hours"}
              value={values.workHours.toFixed(2) + " hour"}
            />
            <div className=" flex justify-between items-center">
              <ProfileField
                id={"salaryPerHour"}
                name={"salaryPerHour"}
                placeholder={"Salary per Hour"}
                type={"text"}
                readOnly
                label={"Salary/Hour"}
                value={values.salaryPerHour.toFixed(2) + " EGP"}
              />
              <ProfileField
                id={"totalSalary"}
                name={"totalSalary"}
                type={"text"}
                label={"Total Salary"}
                readOnly
                value={
                  (values.workHours * values.salaryPerHour).toFixed(2) + " EGP"
                }
              />
            </div>
          </div>
          {/*  */}
          {edit && (
            <div className=" flex justify-end gap-3">
              <button
                type="submit"
                disabled={loading}
                className="mt-4   bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                Submit
              </button>
              <button
                disabled={loading}
                onClick={() => setEdit(false)}
                type="button"
                className="mt-4 bg-[#242223] hover:bg-[#443434] text-white py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default EmployeeInfoForm;
