import { WorkExperience } from "~/types.client";

export default function WorkExperienceCard({ experience }: { experience: WorkExperience }) {
  return (
    <div className="mb-4 shadow-sm p-5">
      <div className="flex w-full justify-between">
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <div className="text-lg">{
          !experience.endMonth || !experience.endYear ? `${experience.startMonth}, ${experience.startYear} - Present` :
            `${experience.startMonth}, ${experience.startYear} - ${experience.endMonth}, ${experience.endYear}`
        }</div>
      </div>
      <div className="text-lg text-start w-full">{
        !experience.country ? `${experience.company}` : `${experience.company}, ${experience.country}`
      }</div>
      <div className="text-start w-full">{experience.primaryDuties}</div>
      <div className="text-start w-full">{experience.secondaryDuties}</div>
    </div>
  );
}