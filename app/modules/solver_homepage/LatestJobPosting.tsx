import { Link } from "@remix-run/react"

export default function LatestJobsPosting({
  job
}: {
  job: any
}) {
  return (
    <div className="w-[375px] bg-gray-100 border-none rounded-3xl p-5">
      <div className="flex flex-row gap-5">
        <img src={job.logo} className="w-auto h-[80px] max-w-[120px] border-none" />
        <div className="flex flex-col my-auto">
          <div className="text-2xl font-bold">{job.company}</div>
          <div className="text-sm">{job.postedOn}</div>
        </div>
      </div>
      <div className="text-xl font-bold mt-5">
        {job.title}
      </div>
      <div className="mt-2">
        {job.location}
      </div>
      <Link to={job.applicationUrl} className="flex mt-10 px-5 border-blue-600 border-[1px] hover:bg-blue-700 hover:text-white text-blue-600 rounded-3xl p-3">Apply now</Link>
    </div>
  )
}