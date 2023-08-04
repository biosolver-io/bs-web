import { Degree } from "~/types.client";
import AccomplishmentCard from "./AccomplishmentCard";

export default function DegreeCard({ degree }: { degree: Degree }) {
  return (
    <div className="mb-4 border-gray-500 border-solid rounded-md p-5 border-2">
      <h2 className="text-2xl font-bold">{degree.level}</h2>
      <h3 className="text-lg font-bold">{degree.major}</h3>
      <h3 className="text-lg font-bold">{degree.country}</h3>
      <h3 className="text-lg font-bold">{degree.school}</h3>
      <h3 className="text-lg font-bold">{degree.startYear}</h3>
      <h3 className="text-lg font-bold">{degree.startMonth}</h3>
      <h3 className="text-lg font-bold">{degree.stateOrCity}</h3>
      {
        degree.accomplishments.map((accomplishment) => (
          <AccomplishmentCard accomplishment={accomplishment} />
        ))
      }
    </div>
  );
}