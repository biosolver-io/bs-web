import { Accomplishment } from "~/types.client";

export default function AccomplishmentCard({
  accomplishment,
}: {
  accomplishment: Accomplishment
}) {
  return (
    <div className="flex flex-col border-[1px] border-gray-600 bg-gray-300 rounded-lg p-5">
      <div className="flex flex-col mt-5">
        <div className="flex text-sm bg-black p-2 text-white w-auto">
          {accomplishment.type}
        </div>
        <div className="text-sm">
          {accomplishment.category}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="font-bold text-lg">
            {accomplishment.title}
          </div>
          {
            accomplishment.publisher && <div className="text-sm">
              {accomplishment.publisher}
            </div>
          }
          {
            accomplishment.organization && <div className="text-sm">
              {accomplishment.organization}
            </div>
          }
        </div>
      </div>
    </div>
  )
}