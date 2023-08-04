import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'

export default function SingleSelect({
  options,
  onChange,
}: {
  options: { id: string, name: string, available?: boolean }[]
  onChange: (option: { id: string, name: string, available?: boolean }) => void
}) {
  const [selectedOption, setSelectedOption] = useState({
    id: 'None',
    name: 'Choose an option',
    availalbe: true,
  })

  useEffect(() => {
    onChange(selectedOption)
  }, [selectedOption])

  return (
    <div className='w-full bordered border-2 border-gray-400 rounded-md'>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button>{selectedOption.name}</Listbox.Button>
        <Listbox.Options>
          {options.map((option) => (
            <Listbox.Option
              key={option.id}
              value={option}
              disabled={!option.available}
            >
              {option.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}