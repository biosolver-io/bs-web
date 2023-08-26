import { WorkExperience } from "~/types.client";
import { monthAsText } from "~/utils";
import AccomplishmentCard from "./AccomplishmentCard";

export default function WorkExperienceCard({ experience }: { experience: WorkExperience }) {
  return (
    <div className="mb-4 shadow-sm p-5">
      <div className="flex w-full justify-between">
        <h3 className="text-xl font-bold">{experience.title}</h3>
        {experience.startMonth && experience.startYear &&
          <div className="text-lg">{
            !experience.endMonth || !experience.endYear ? `${experience.startMonth}, ${experience.startYear} - Present` :
              `${monthAsText(experience.startMonth)}, ${experience.startYear} - ${monthAsText(experience.endMonth)}, ${experience.endYear}`
          }</div>
        }
      </div>
      <div className="text-lg text-start w-full">{
        !experience.country ? `${experience.company}` : `${experience.company}, ${experience.country}`
      }</div>
      <div className="text-start w-full">{experience.primaryDuties}</div>
      <div className="text-start w-full">{experience.secondaryDuties}</div>
      {
        experience.accomplishments.map((accomplishment) => (
          <AccomplishmentCard accomplishment={accomplishment} />
        ))
      }
    </div>
  );
}