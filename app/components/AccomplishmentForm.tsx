import { useFetcher } from "@remix-run/react"
import LabelledDropdown from "./LabelledDropdown"
import { useEffect, useState } from "react"
import LabelledTextInput from "./LabelledInput"
import { Dialog } from "@headlessui/react"
import { Accomplishment } from "~/types.client"
import LabelledFileInput from "./LabelledFileInput"

export default function AccomplishmentForm({
  action,
  open,
  setOpen,
  onSubmit
}: {
  action: string
  open: boolean
  setOpen: (value: boolean) => void
  onSubmit: (data: Accomplishment[]) => void
}) {
  const fetcher = useFetcher()
  const [type, setType] = useState('Not selected')
  useEffect(() => {
    if (fetcher.data) {
      onSubmit(fetcher.data.accomplishments)
      setOpen(false)
    }
  }, [fetcher.data])
  return (
    <Dialog open={open} onClose={() => setOpen(false)} >
      <div className="fixed inset-0 bg-black/30 z-[100]" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto z-[100]">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className='bg-white border-2 rounded-sm border-black p-10 w-1/2'>
            <fetcher.Form action={action} method="post">
              <input name="action" type="hidden" value="addAccomplishment" />
              <LabelledDropdown
                name="type"
                label="Select Accomplishment Type"
                options={[
                  { value: "Not selected", label: "Please select the type of accomplishment", name: "Not selected" },
                  { value: "Research Publication", label: "Research Publication", name: "Research Publication" },
                  { value: "Patent", label: "Innovation Patent", name: "Patent" },
                  { value: "Research Grant or Academic Award", label: "Research Grant or Academic Award", name: "Research Grant or Academic Award" },
                  { value: "Professional Award", label: "Professional Award", name: "Professional Award" },
                  { value: "Conference Presentation", label: "Conference Presentation", name: "Conference Presentation" },
                  { value: "Media Coverage", label: "Media Coverage", name: "Media Coverage" },
                  { value: "Internship", label: "Internship", name: "Internship" },
                ]}
                className="w-full"
                onChange={(value) => setType(value)}
              />
              {
                type === 'Research Publication' && (
                  <>
                    <LabelledTextInput
                      name="title"
                      label="Title"
                      placeholder="Enter the title of your publication"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="publisher"
                      label="Publisher"
                      placeholder="Enter the name of the publisher"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="details"
                      label="Major Findings"
                      multiline={true}
                      placeholder="Enter the major findings of your publication"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="link"
                      label="Link"
                      placeholder="Please provide a link to your publication"
                      className="w-full mt-5"
                    />
                    <LabelledFileInput
                      name="file"
                      label="Supporting Document"
                      placeholder="Please upload a supporting document (if any)"
                      className="w-full mt-5"
                    />
                  </>
                )
              }
              {
                type === 'Patent' && (
                  <>
                    <LabelledTextInput
                      name="title"
                      label="Title"
                      placeholder="Enter the title of your patent"
                      className="w-full mt-5"
                    />
                    <LabelledDropdown
                      name="status"
                      label="Status"
                      options={[
                        { value: "Filed", label: "Filed", name: "Filed" },
                        { value: "Accepted", label: "Accepted", name: "Accepted" },
                      ]}
                      placeholder="Select the status of your patent"
                      className="w-full mt-5"
                    />
                    <LabelledDropdown
                      name="category"
                      label="Type"
                      options={[
                        { value: "National", label: "National", name: "National" },
                        { value: "International", label: "International", name: "International" },
                      ]}
                      placeholder="Select the type of your patent"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="link"
                      label="Link"
                      placeholder="Please provide a link to your patent"
                      className="w-full mt-5"
                    />
                    <LabelledFileInput
                      name="file"
                      label="Supporting Document"
                      placeholder="Please upload a supporting document (if any)"
                      className="w-full mt-5"
                    />
                  </>
                )
              }
              {
                type === 'Research Grant or Academic Award' && (
                  <>
                    <LabelledTextInput
                      name="title"
                      label="Name"
                      placeholder="Name of the award/grant"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="organization"
                      label="Awarded By"
                      placeholder="Name of the person/organization that awarded you"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="details"
                      label="Reason"
                      placeholder="Why were you awarded this grant/award?"
                      multiline={true}
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="link"
                      label="Link"
                      placeholder="Please provide a link (if any) to your grant/award"
                      className="w-full mt-5"
                    />
                    <LabelledFileInput
                      name="file"
                      label="Supporting Document"
                      placeholder="Please upload a supporting document (if any)"
                      className="w-full mt-5"
                    />
                  </>
                )
              }
              {
                type === 'Conference Presentation' && (
                  <>
                    <LabelledTextInput
                      name="title"
                      label="Conference Name/Year"
                      placeholder="Name of the conference and the year of presentation"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="organization"
                      label="Organized By"
                      placeholder="Name of the organizer"
                      className="w-full mt-5"
                    />
                    <LabelledDropdown
                      name="category"
                      label="Purpose"
                      options={[
                        { value: "Attendance", label: "Attendance", name: "Attendance" },
                        { value: "Poster Presentation", label: "Poster Presentation", name: "Poster Presentation" },
                        { value: "Oral Presentation", label: "Oral Presentation", name: "Oral Presentation" },
                      ]}
                      placeholder="Select the purpose of your attendance"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="link"
                      label="Link"
                      placeholder="Please provide a link (if any) to your conference presentation"
                      className="w-full mt-5"
                    />
                    <LabelledFileInput
                      name="file"
                      label="Supporting Document"
                      placeholder="Please upload a supporting document (if any)"
                      className="w-full mt-5"
                    />
                  </>
                )
              }
              {
                type === 'Internship' && (
                  <>
                    <LabelledTextInput
                      name="objective"
                      label="Objective"
                      placeholder="What was the objective of your internship?"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="organization"
                      label="Organization"
                      placeholder="Name of the organization you interned at"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="details"
                      label="Findings"
                      placeholder="What were your major findings during the internship"
                      multiline={true}
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="link"
                      label="Link"
                      placeholder="Please provide a link (if any) to your work/certificate"
                      className="w-full mt-5"
                    />
                    <LabelledFileInput
                      name="file"
                      label="Supporting Document"
                      placeholder="Please upload a supporting document (if any)"
                      className="w-full mt-5"
                    />
                  </>
                )
              }
              {
                type === 'Professional Award' && (
                  <>
                    <LabelledTextInput
                      name="title"
                      label="Name"
                      placeholder="Name of the award/grant"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="organization"
                      label="Awarding Body"
                      placeholder="Name of the person/organization that awarded you"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="details"
                      label="Reason"
                      placeholder="Why were you awarded this grant/award?"
                      multiline={true}
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="link"
                      label="Link"
                      placeholder="Please provide a link (if any) to your grant/award"
                      className="w-full mt-5"
                    />
                    <LabelledFileInput
                      name="file"
                      label="Supporting Document"
                      placeholder="Please upload a supporting document (if any)"
                      className="w-full mt-5"
                    />
                  </>
                )
              }
              {
                type === 'Media Coverage' && (
                  <>
                    <LabelledTextInput
                      name="details"
                      label="Description"
                      multiline={true}
                      placeholder="Please provide a description of the media coverage"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="organization"
                      label="News Media"
                      placeholder="Name of the news media"
                      className="w-full mt-5"
                    />
                    <LabelledDropdown
                      name="category"
                      label="Coverage Type"
                      options={[
                        { value: "International News", label: "International News", name: "International News" },
                        { value: "National News", label: "National News", name: "National News" },
                        { value: "Regional News", label: "Regional News", name: "Regional News" },
                        { value: "Online News", label: "Online News", name: "Online News" },
                      ]}
                      placeholder="Select the type of coverage"
                      className="w-full mt-5"
                    />
                    <LabelledTextInput
                      name="link"
                      label="Link"
                      placeholder="Please provide a link (if any) to your work/certificate"
                      className="w-full mt-5"
                    />
                    <LabelledFileInput
                      name="file"
                      label="Supporting Document"
                      placeholder="Please upload a supporting document (if any)"
                      className="w-full mt-5"
                    />
                  </>
                )
              }
              <div>
                <button type="submit" className="mt-5 bg-blue-500 border-blue-500 border-[1px] text-white px-5 py-2 rounded-md">Save</button>
                <button className="ml-2 mt-5 bg-white border-[1px] border-black px-5 py-2 rounded-md" onClick={() => setOpen(false)}>Cancel</button>
              </div>
            </fetcher.Form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}