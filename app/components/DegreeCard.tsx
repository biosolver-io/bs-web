import { Degree } from "~/types.client";

export default function DegreeCard({ degree }: { degree: Degree }) {
  return (
    <div className="mb-4 border-gray-500 border-solid rounded-md p-5 border-2">
      <h2 className="text-2xl font-bold">{degree.name}</h2>
      <h3 className="text-lg font-bold">{degree.field}</h3>
      <h3 className="text-lg font-bold">{degree.country}</h3>
      <h3 className="text-lg font-bold">{degree.university}</h3>
      <h3 className="text-lg font-bold">{degree.start}</h3>
      <h3 className="text-lg font-bold">{degree.end}</h3>
      <h3 className="text-lg font-bold">{degree.currentlyStudying}</h3>
    </div>
  );
}