export default function LabelledTextInput({
  label,
  description,
  name,
  onChange,
  placeholder,
  value,
  ref,
  className,
  multiline,
}: {
  label?: string
  description?: string
  name: string
  onChange?: (value: string) => void
  placeholder?: string
  value?: string
  ref?: any
  className?: string
  multiline?: boolean
}) {
  return (
    <div className={className}>
      {label &&
        <label className="block mb-2 font-bold text-md text-gray-700">
          {label}
        </label>
      }
      {
        description &&
        <div className="text-sm text-gray-600 mb-2">
          {description}
        </div>
      }
      {multiline === true ?
        <textarea
          name={name}
          onChange={(e) => onChange ? onChange(e.target.value) : null}
          placeholder={placeholder}
          value={value}
          ref={ref}
          className="w-full p-3 border-[1px] border-black rounded-sm focus:outline-none focus:border-2"
        />
        : <input
          name={name}
          type="text"
          onChange={(e) => onChange ? onChange(e.target.value) : null}
          placeholder={placeholder}
          value={value}
          ref={ref}
          className="w-full p-3 border-[1px] border-black rounded-sm focus:outline-none focus:border-2"
        />}
    </div>
  )
}