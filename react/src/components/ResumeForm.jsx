import ExperienceForm from "./FormComponents/ExperienceForm";
import PersonalInfoForm from "./FormComponents/PersonalInfoForm";
import EducationForm from "./FormComponents/EducationForm";
import SidebarFrom from "./FormComponents/SidebarFrom";

export default function ResumeForm() {

  return (
    <>
      <div className="mx-2">
        <PersonalInfoForm />
        <div className="mx-2 my-6 border-t border-gray-100"></div>
        <EducationForm />
        <div className="mx-2 my-6 border-t border-gray-100"></div>
        <ExperienceForm />
        <div className="mx-2 my-6 border-t border-gray-100"></div>
        <SidebarFrom />
      </div>
    </>
  );
}
