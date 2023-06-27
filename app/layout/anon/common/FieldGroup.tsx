import { cx } from "~/utils"

export default function FieldGroup({
  group,
  items,
  className
}: {
  group: string,
  items: string[],
  className?: string
}) {
  return (
    <div className={cx('rounded-md border-2 border-black items-center', className)}>
      <div className="text-center text-xl font-semibold p-5">
        {group}
      </div>
      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => (
          <div className="bg-white shadow-md rounded-md px-5 py-2 mx-5 my-2 flex items-center" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}