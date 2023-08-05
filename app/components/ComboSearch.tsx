import { Combobox } from "@headlessui/react";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import skills from "~/assets/data/skills";

export default function ComboSearch() {
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const [query, setQuery] = useState('')
  const [options, setOptions] = useState<any>([])

  useEffect(() => {
    const filteredSkills = skills.filter((skill) => skill.name.toLowerCase().includes(query.toLowerCase()))
    setOptions(filteredSkills.map((skill) => ({ id: skill.name, name: skill.name })))
  }, [query])

  return (
    <Combobox value={selectedOptions} onChange={setSelectedOptions} multiple>
      {selectedOptions.length > 0 && (
        <ul>
          {selectedOptions.map((option) => (
            <li key={option.id}>{option.name}</li>
          ))}
        </ul>
      )}
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {options.map((option) => (
          <Combobox.Option key={option.id} value={option.id}>
            {option.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}