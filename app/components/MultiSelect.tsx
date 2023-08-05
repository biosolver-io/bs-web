import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/solid'

export default function MultiSelect({
  options,
  name,
  defaultValue,
  placeholder
}: {
  options: { value: any, label: any }[],
  name: string,
  defaultValue?: any,
  placeholder?: string
}) {
  const [selectedOptions, setSelectedOptions] = useState<any>(defaultValue || [])
  const [query, setQuery] = useState('')

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
        option.label
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  return (
    <Combobox value={selectedOptions} onChange={setSelectedOptions} multiple={true}>
      {selectedOptions.length > 0 && (
        <ul>
          {selectedOptions.map((opt: any) => (
            <li key={opt.value} className='inline-block w-auto bg-gray-300 p-2 mr-1 mt-1'>
              {opt.label}
              <button className='ml-1' onClick={() => setSelectedOptions(selectedOptions.filter((option: any) => option.value !== opt.value))}>
                <XCircleIcon className='w-4 h-4 inline-block' />
              </button>
            </li>
          ))}
        </ul>
      )}
      <input type="hidden" name={name} value={selectedOptions.map((option: any) => option.value).join(',')} />
      <Combobox.Button className='w-full'>
        <Combobox.Input className={'w-full p-3 border-[1px] border-black rounded-sm focus:outline-none focus:border-2'} placeholder={placeholder} 
        onChange={(event) => setQuery(event.target.value)}/>
      </Combobox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery('')}
      >
        <Combobox.Options className='absolute w-auto max-h-[250px] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30'>
          {filteredOptions.map((opt) => (
            <Combobox.Option key={opt.value} value={opt} className='p-2 hover:bg-gray-200 relative cursor-default select-none'>
              {opt.label}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  )
}