import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import TimelineInput from "./TimelineInput";

function SidebarFrom() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Sections
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide information, which be displayed as tags, eg. Skills,
          Languages, etc.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="grid grid-cols-1 gap-4">
          <InputField label={"Heading 1"} />
          <InputField label={"Terms"} />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <InputField label={"Heading 2"} />
          <InputField label={"Terms"} />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <InputField label={"Heading 3"} />
          <InputField label={"Terms"} />
        </div>
      </div>
    </>
  );
}

export default SidebarFrom;
