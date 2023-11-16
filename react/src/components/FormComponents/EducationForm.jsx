import InputField from "./InputField";
import TextArea from "./TextArea";
import TimelineInput from "./TimelineInput";

function EducationForm() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Education
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide your personal work experience or internships
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">

      <div className="">
        <div className="grid grid-cols-1 gap-2">
          <InputField label={"Education 1"} />
          <InputField label={"Institute Name"} />
        </div>
        <TextArea />
        <TimelineInput label={"Time Period"} />
      </div>
      
      <div className="">
        <div className="grid grid-cols-1 gap-2">
          <InputField label={"Education 2"} />
          <InputField label={"Institute Name"} />
        </div>
        <TextArea />
        <TimelineInput label={"Time Period"} />
      </div>
      </div>
      <div className="mx-2 my-6 border-t border-dashed border-spacing-10 border-collapse border-gray-300"></div>
    </>
  );
}

export default EducationForm;
