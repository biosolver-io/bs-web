import { Degree } from "~/types.client";
import AccomplishmentCard from "./AccomplishmentCard";
import { monthAsText } from "~/utils";

export default function DegreeCard({ degree }: { degree: Degree }) {
  return (
    <div className="mb-4 shadow-sm p-5">
      <div className="flex w-full justify-between">
        <h3 className="text-xl font-bold">{degree.level}</h3>
        {degree.startMonth && degree.startYear &&
          <div className="text-lg">{
            !degree.endMonth || !degree.endYear ? `${degree.startMonth}, ${degree.startYear} - Present` :
              `${monthAsText(degree.startMonth)}, ${degree.startYear} - ${monthAsText(degree.endMonth)}, ${degree.endYear}`
          }</div>
        }
      </div>
      <div className="text-lg text-start w-full">
        {degree.major}
      </div>
      <div className="text-lg text-start w-full">{
        !degree.country ? `${degree.school}` : `${degree.school}, ${degree.country}`
      }</div>
      {
        degree.accomplishments.map((accomplishment) => (
          <AccomplishmentCard accomplishment={accomplishment} />
        ))
      }
    </div>
  );
}