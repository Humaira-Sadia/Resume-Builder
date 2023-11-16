import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import TimelineInput from "./TimelineInput";

function ExperienceForm() {
  return (
    <>
      <div className="">
        <ol class="ml-2 relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="mx-2 mt-10 grid grid-cols-2">
              <div className="">
                <h1 className="text-base font-semibold leading-7 text-gray-900">
                  Experience #1
                </h1>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Provide your personal work experience or internships
                </p>
              </div>
              <div className="ml-4">
                <InputField label={"Designation"} />
                <InputField label={"Company"} />
                <TextArea />
                <TimelineInput label={"Time Period"} />
              </div>
            </div>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="mx-2 mt-10 grid grid-cols-2">
              <div className="">
                <h1 className="text-base font-semibold leading-7 text-gray-900">
                  Experience #2
                </h1>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Provide your personal work experience or internships
                </p>
              </div>
              <div className="ml-4">
                <InputField label={"Designation"} />
                <InputField label={"Company"} />
                <TextArea />
                <TimelineInput label={"Time Period"} />
              </div>
            </div>
          </li>
          <li class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="mx-2 mt-10 grid grid-cols-2">
              <div className="">
                <h1 className="text-base font-semibold leading-7 text-gray-900">
                  Experience #3
                </h1>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Provide your personal work experience or internships
                </p>
              </div>
              <div className="ml-4">
                <InputField label={"Designation"} />
                <InputField label={"Company"} />
                <TextArea />
                <TimelineInput label={"Time Period"} />
              </div>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}

export default ExperienceForm;
