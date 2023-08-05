
import { ActionArgs, LoaderArgs, json, redirect } from "@remix-run/node";
import { useActionData, useFetcher, useLoaderData, useSearchParams } from "@remix-run/react"
import { useEffect, useState } from "react";
import countries from "~/assets/data/countries";
import employerTypes from "~/assets/data/employerTypes";
import employmentTypes from "~/assets/data/employmentTypes";
import months from "~/assets/data/months";
import years from "~/assets/data/years";
import AccomplishmentCard from "~/components/AccomplishmentCard";
import AccomplishmentForm from "~/components/AccomplishmentForm";
import LabelledDropdown from "~/components/LabelledDropdown"
import LabelledTextInput from "~/components/LabelledInput"
import WorkExperienceCard from "~/components/WorkExperienceCard";
import { prisma } from "~/db.server";
import { requireUserId } from "~/session.server";
import { Accomplishment } from "~/types.client";

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const actionType = body.get('action')
  if (actionType === 'addWorkExperience') {
    const newWorkExperience = await prisma.workExperience.create({
      data: {
        level: '',
        title: '',
        company: '',
        userId: await requireUserId(request),
        isTemp: true
      }
    })
    return json({
      newWorkExperience
    })
  } else if (actionType === 'saveWorkExperience') {
    const startYear = parseInt(body.get('startYear') as string)
    const startMonth = parseInt(body.get('startMonth') as string)
    const endYear = parseInt(body.get('endYear') as string)
    const endMonth = parseInt(body.get('endMonth') as string)
    await prisma.workExperience.update({
      where: {
        id: body.get('workExperienceId') as string
      },
      data: {
        title: body.get('title') as string,
        company: body.get('company') as string,
        country: body.get('country') as string,
        stateOrCity: body.get('cityOrState') as string,
        startYear: isNaN(startYear) ? null : startYear,
        startMonth: isNaN(startMonth) ? null : startMonth,
        endYear: isNaN(endYear) ? null : endYear,
        endMonth: isNaN(endMonth) ? null : endMonth,
        companyWebsite: body.get('companyWebsite') as string,
        companyLinkedIn: body.get('companyLinkedIn') as string,
        primaryDuties: body.get('primaryDuties') as string,
        secondaryDuties: body.get('secondaryDuties') as string,
        isTemp: false
      }
    })
    return json({
      action: 'saveWorkExperience',
      workExperienceId: body.get('workExperienceId') as string,
      success: true
    })
  } else {
    throw new Error('Invalid action type')
  }
}

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request)
  const workExperiences = await prisma.workExperience.findMany({
    include: {
      accomplishments: true
    },
    where: {
      userId,
      isTemp: false
    }
  })
  return json({
    workExperiences
  });
}

export default function Professional() {
  const fetcher = useFetcher()
  const { workExperiences } = useLoaderData<typeof loader>()
  const [searchParams] = useSearchParams()
  const [isAddingAccomplishment, setIsAddingAccomplishment] = useState(false)
  const [isAddingWorkExperience, setIsAddingWorkExperience] = useState(false)
  const [experienceBeingAdded, setExperienceBeingAdded] = useState<string | null>(null)
  const [accomplishmentsForExperienceBeingAdded, setAccomplishmentsForExperienceBeingAdded] = useState<Accomplishment[]>([])

  useEffect(() => {
    if (searchParams.get('addAccomplishment')) {
      setIsAddingAccomplishment(true)
    }
  }, [searchParams])
  useEffect(() => {
    if (fetcher.data) {
      if (fetcher.data.newWorkExperience) {
        setIsAddingWorkExperience(fetcher.data.newWorkExperience.id ? true : false)
        setExperienceBeingAdded(fetcher.data.newWorkExperience.id)
      } else if (fetcher.data.action === 'saveWorkExperience') {
        setIsAddingWorkExperience(false)
        setExperienceBeingAdded(null)
      }
    }
  }, [fetcher.data])

  return (
    <section>
      {
        workExperiences.map(experience => <WorkExperienceCard key={experience.id} experience={experience} />)
      }
      {
        isAddingWorkExperience && experienceBeingAdded && <fetcher.Form action="/profile/professional" method="post" className="p-5" key={experienceBeingAdded}>
          <input name="workExperienceId" type="hidden" value={experienceBeingAdded} />
          <LabelledTextInput
            name="title"
            label="Role/Title"
            placeholder="Enter your role/title"
            className="w-full mt-5"
          />
          <LabelledDropdown
            name="employmentType"
            label="Employment Type"
            options={employmentTypes.map(employmentType => ({ value: employmentType, label: employmentType, name: employmentType }))}
            className="w-full mt-5"
            placeholder="Select Employment Type"
          />
          <LabelledTextInput
            name="company"
            label="Company/Organization"
            placeholder="Enter the name of your company/organization"
            className="w-full mt-5"
          />
          <LabelledDropdown
            name="employerType"
            label="Employer Type"
            options={employerTypes.map(employerType => ({ value: employerType, label: employerType, name: employerType }))}
            className="w-full mt-5"
            placeholder="Select Employer Type"
          />
          <LabelledTextInput
            name="companyWebsite"
            label="Company Website"
            placeholder="Enter the website of your company/organization"
            className="w-full mt-5"
          />
          <LabelledTextInput
            name="companyLinkedIn"
            label="Company LinkedIn"
            placeholder="Enter the LinkedIn of your company/organization"
            className="w-full mt-5"
          />
          <LabelledDropdown
            name="country"
            label="Country"
            options={countries.map(country => ({ value: country.code, label: country.name, name: country.name }))}
            className="w-full mt-5"
            placeholder="Select Country"
          />
          <LabelledTextInput
            name="cityOrState"
            label="City/State"
            placeholder="Enter the city/state of your company/organization"
            className="w-full mt-5"
          />
          <div className="flex flex-wrap mt-5 gap-5">
            <label className="w-full mb-2 font-bold text-md text-gray-700">
              Started
            </label>
            <LabelledDropdown
              name="startYear"
              placeholder="Year"
              className="w-full md:w-1/2"
              options={
                years.map(year => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
              }
            />
            <LabelledDropdown
              name="startMonth"
              placeholder="Month"
              className="w-full md:w-1/2"
              options={
                months.map(month => ({ value: month.id, label: month.name, name: month.name }))
              }
            />
          </div>
          <div className="flex flex-wrap mt-5 gap-5">
            <label className="w-full mb-2 font-bold text-md text-gray-700">
              Ended
            </label>
            <LabelledDropdown
              name="endYear"
              placeholder="Year"
              className="w-full md:w-1/2"
              options={
                years.map(year => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
              }
            />
            <LabelledDropdown
              name="endMonth"
              placeholder="Month"
              className="w-full md:w-1/2"
              options={
                months.map(month => ({ value: month.id, label: month.name, name: month.name }))
              }
            />
          </div>
          <LabelledTextInput
            name="primaryDuties"
            label="Primary Duties"
            placeholder="Enter the primary duties of your role"
            multiline={true}
            className="w-full mt-5"
          />
          <LabelledTextInput
            name="secondaryDuties"
            label="Secondary Duties"
            placeholder="Enter the secondary duties (if any) of your role"
            multiline={true}
            className="w-full mt-5"
          />
          {
            accomplishmentsForExperienceBeingAdded.map(accomplishment => <AccomplishmentCard key={accomplishment.id} accomplishment={accomplishment} />)
          }
          <button type="button" onClick={() => setIsAddingAccomplishment(true)} className="mt-5 text-blue-500">Add Accomplishment</button>
          <input name="action" type="hidden" value="saveWorkExperience" />
          <button type="submit" className="flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md">Save</button>
        </fetcher.Form>
      }
      {
        <fetcher.Form action="/profile/professional" method="post">
          <input name="action" type="hidden" value="addWorkExperience" />
          <button type="submit" className="flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md" disabled={isAddingWorkExperience}>Add Experience</button>
        </fetcher.Form>
      }
      {
        experienceBeingAdded && <AccomplishmentForm action={`/profile/professional/${experienceBeingAdded}`} open={isAddingAccomplishment} setOpen={setIsAddingAccomplishment} onSubmit={(accomplishments) => {
          setAccomplishmentsForExperienceBeingAdded(accomplishments)
        }} key={Date.now().toString()} />
      }
    </section>
  )
}