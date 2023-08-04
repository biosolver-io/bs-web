import { WorkExperience } from "~/types.client";

export default function WorkExperienceCard({ experience }: { experience: WorkExperience }) {
  return (
    <div className="mb-4 border-gray-500 border-solid rounded-md p-5 border-2">
      <h2 className="text-2xl font-bold">{experience.title}</h2>
      <h3 className="text-lg font-bold">{experience.company}</h3>
      <h3 className="text-lg font-bold">{experience.stateOrCity}</h3>
      <h3 className="text-lg font-bold">{experience.country}</h3>
      <h3 className="text-lg font-bold">{experience.startYear}</h3>
      <h3 className="text-lg font-bold">{experience.endYear}</h3>
    </div>
  );
}