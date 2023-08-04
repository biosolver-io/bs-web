import { WorkExperience } from "~/types.client";

export default function WorkExperienceCard({ experience }: { experience: WorkExperience }) {
  return (
    <div className="mb-4 border-gray-500 border-solid rounded-md p-5 border-2">
      <h2 className="text-2xl font-bold">{experience.company}</h2>
      <h3 className="text-lg font-bold">{experience.city}</h3>
      <h3 className="text-lg font-bold">{experience.stateOrProvince}</h3>
      <h3 className="text-lg font-bold">{experience.country}</h3>
      <h3 className="text-lg font-bold">{experience.start}</h3>
      <h3 className="text-lg font-bold">{experience.end}</h3>
    </div>
  );
}