
import { ActionArgs, LoaderArgs, json, redirect } from "@remix-run/node";
import { useActionData, useFetcher, useLoaderData, useSearchParams } from "@remix-run/react"
import { useEffect, useState } from "react";
import assessmentFormats from "~/assets/data/assessmentFormats";
import countries from "~/assets/data/countries";
import months from "~/assets/data/months";
import years from "~/assets/data/years";
import yesNos from "~/assets/data/yesNos";
import AccomplishmentCard from "~/components/AccomplishmentCard";
import AccomplishmentForm from "~/components/AccomplishmentForm";
import DegreeCard from "~/components/DegreeCard";
import LabelledDropdown from "~/components/LabelledDropdown"
import LabelledTextInput from "~/components/LabelledInput"
import { prisma } from "~/db.server";
import { requireUserId } from "~/session.server";
import { Accomplishment } from "~/types.client";

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const actionType = body.get('action')
  if (actionType === 'addDegree') {
    const newDegree = await prisma.degree.create({
      data: {
        level: '',
        major: '',
        school: '',
        userId: await requireUserId(request),
        isTemp: true
      }
    })
    return json({
      newDegree
    })
  } else if (actionType === 'saveDegree') {
    const dataToUpdate = {
      level: body.get('type') as string,
      major: body.get('major') as string,
      school: body.get('school') as string,
      country: body.get('country') as string,
      stateOrCity: body.get('cityOrState') as string,
      startYear: parseInt(body.get('startYear') as string),
      startMonth: parseInt(body.get('startMonth') as string),
      endYear: parseInt(body.get('endYear') as string),
      endMonth: parseInt(body.get('endMonth') as string),
      assessmentFormat: body.get('assessmentFormat') as string,
      grade: body.get('grade') as string,
      hasEca: body.get('hasEca') as string === 'Yes' ? true : false,
      ecaAuthority: body.get('ecaAuthority') as string,
      isTemp: false
    }
    console.log(dataToUpdate)
    await prisma.degree.update({
      where: {
        id: body.get('degreeId') as string
      },
      data: dataToUpdate
    })
    return redirect('/profile/degrees')
  } else {
    throw new Error('Invalid action type')
  }
}

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request)
  const degrees = await prisma.degree.findMany({
    include: {
      accomplishments: true
    },
    where: {
      userId,
      isTemp: false
    }
  })
  return json({
    degrees
  });
}

export default function EducationDegrees() {
  const fetcher = useFetcher()
  const { degrees } = useLoaderData<typeof loader>()
  const [searchParams] = useSearchParams()
  const [isAddingAccomplishment, setIsAddingAccomplishment] = useState(false)
  const [isAddingDegree, setIsAddingDegree] = useState(false)
  const [degreeBeingAdded, setDegreeBeingAdded] = useState(null)
  const [accomplishmentsForDegreeBeingAdded, setAccomplishmentsForDegreeBeingAdded] = useState<Accomplishment[]>([])

  console.log(fetcher.data)

  useEffect(() => {
    if (searchParams.get('addAccomplishment')) {
      setIsAddingAccomplishment(true)
    }
  }, [searchParams])
  useEffect(() => {
    setIsAddingDegree(fetcher.data?.newDegree?.id ? true : false)
    setDegreeBeingAdded(fetcher.data?.newDegree?.id)
  }, [fetcher.data])

  return (
    <section>
      {
        degrees.map(degree => <DegreeCard key={degree.id} degree={degree} />)
      }
      {
        isAddingDegree && <fetcher.Form action="/profile/degrees" method="post" className="p-5">
          <input name="degreeId" type="hidden" value={fetcher.data?.newDegree.id} />
          <LabelledDropdown
            name="type"
            label="Degree"
            options={[
              { value: "UG Diploma", label: "UG Diploma", name: "UG Diploma" },
              { value: "Bachelors", label: "Bachelors", name: "Bachelors" },
              { value: "PG Diploma", label: "PG Diploma", name: "PG Diploma" },
              { value: "Professional Degree", label: "Professional Degree", name: "Professional Degree" },
              { value: "Masters", label: "Masters", name: "Masters" },
              { value: "PhD or Doctoral Studies", label: "PhD or Doctoral Studies", name: "PhD or Doctoral Studies" },
            ]}
            className="w-full"
          />
          <LabelledTextInput
            name="school"
            label="University/College"
            placeholder="Enter the name of your university/college"
            className="w-full mt-5"
          />
          <LabelledTextInput
            name="major"
            label="Subject/Major"
            placeholder="Enter your field of study"
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
            placeholder="Enter the city/state of your university/college"
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
                Array.from({ length: 50 }, (_, i) => i + 1970).map(year => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
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
          <LabelledDropdown
            name="assessmentFormat"
            label="Assessment Format"
            placeholder="Choose the format of your assessment"
            className="w-full mt-5"
            options={
              assessmentFormats.map(format => ({ value: format, label: format, name: format }))
            }
          />
          <LabelledTextInput
            name="grade"
            label="Marks/Grade"
            placeholder="Enter your final marks/grade"
            className="w-full mt-5"
          />
          <LabelledDropdown
            name="hasEca"
            label="Do you have an ECA Certificate?"
            className="w-full mt-5"
            options={
              yesNos.map(yesNo => ({ value: yesNo, label: yesNo, name: yesNo }))
            }
          />
          <LabelledTextInput
            name="ecaAuthority"
            label="ECA Authority"
            placeholder="Enter the name of the authority that issued your ECA certificate"
            className="w-full mt-5"
          />
          {
            accomplishmentsForDegreeBeingAdded.map(accomplishment => <AccomplishmentCard key={accomplishment.id} accomplishment={accomplishment} />)
          }
          <button type="button" onClick={() => setIsAddingAccomplishment(true)} className="mt-5 text-blue-500">Add Accomplishment</button>
          <input name="action" type="hidden" value="saveDegree" />
          <button type="submit" className="flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md">Save</button>
        </fetcher.Form>
      }
      {
        <fetcher.Form action="/profile/degrees" method="post">
          <input name="action" type="hidden" value="addDegree" />
          <button type="submit" className="flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md" disabled={isAddingDegree}>Add Degree</button>
        </fetcher.Form>
      }
      {
        degreeBeingAdded && <AccomplishmentForm action={`/profile/degrees/${degreeBeingAdded}`} open={isAddingAccomplishment} setOpen={setIsAddingAccomplishment} onSubmit={(accomplishments) => {
          setAccomplishmentsForDegreeBeingAdded(accomplishments)
        }} />
      }
    </section>
  )
}