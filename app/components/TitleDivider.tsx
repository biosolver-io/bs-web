export default function TitleDivider({
  title,
}: {
  title: string
}) {
  return (
    <div className="relative z-10">
      <div className="absolute inset-0 flex items-center z-10" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start z-10">
        <span className="bg-white pr-3 text-xl font-semibold leading-6 text-gray-900">
          {title}
        </span>
      </div>
    </div>
  )
}