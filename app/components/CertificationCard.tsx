import { Certification } from "~/types.client";
import AccomplishmentCard from "./AccomplishmentCard";
import { monthAsText } from "~/utils";

export default function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <div className="mb-4 shadow-sm p-5">
      <div className="flex w-full justify-between">
        <h3 className="text-xl font-bold">{certification.name}</h3>
        {certification.issueMonth && certification.issueYear &&
          <div className="text-lg">{
            `${monthAsText(certification.issueMonth)}, ${certification.issueYear}`
          }</div>
        }
      </div>
      <div className="text-lg text-start w-full">
        {certification.issuingAuthority}
      </div>
    </div>
  );
}