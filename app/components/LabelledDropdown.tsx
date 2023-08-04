import { cx } from "~/utils"

type Option = {
  label: string
  value: string
  name: string
}

export default function LabelledDropdown({
  label,
  name,
  onChange,
  options,
  className,
  placeholder
}: {
  label?: string
  name: string
  onChange?: (value: string) => void
  options: Option[]
  className?: string
  placeholder?: string
}) {
  return (
    <div className={className}>
      {
        label &&
        <label className="block mb-2 font-bold text-md text-gray-700">
          {label}
        </label>
      }
      <select
        name={name}
        onChange={(e) => onChange ? onChange(e.target.value) : null}
        className="w-full p-3 border-[1px] border-black rounded-sm focus:outline-none focus:border-2"
      >
        {
          placeholder && (
            <option value="None">{placeholder}</option>
          )
        }
        {options.map((option) => (
          <option key={option.name} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}