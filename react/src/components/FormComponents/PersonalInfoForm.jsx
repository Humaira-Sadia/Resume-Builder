import React from "react";
import InputField from "./InputField";


function PersonalInfoForm() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide your personal work experience or internships
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 grid-cols-1">
        <InputField label={"Name"} placeholder={"Enter Name"} setState={""} />
        <InputField
          label={"Profession"}
          placeholder={"Enter Name"}
          setState={""}
        />
      </div>
      <div className="grid gap-3 md:grid-cols-3 grid-cols-1">
        <InputField
          type={"email"}
          label={"Email"}
          placeholder={"Enter Email"}
          setState={""}
        />
        <InputField
          label={"Phone"}
          placeholder={"Enter Phone No."}
          setState={""}
        />
        <InputField
          label={"Website"}
          placeholder={"Enter Website"}
          setState={""}
        />
      </div>
    </>
  );
}

export default PersonalInfoForm;
