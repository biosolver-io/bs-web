import { Accomplishment } from "@prisma/client"
import { ActionArgs, LoaderArgs, json, unstable_parseMultipartFormData } from "@remix-run/node"
import { useFetcher, useLoaderData } from "@remix-run/react"
import { useState, useEffect } from "react"
import assessmentFormats from "~/assets/data/assessmentFormats"
import countries from "~/assets/data/countries"
import currencyCodes from "~/assets/data/currencyCodes"
import employerTypes from "~/assets/data/employerTypes"
import employmentTypes from "~/assets/data/employmentTypes"
import jobTypes from "~/assets/data/jobTypes"
import months from "~/assets/data/months"
import roleTypes from "~/assets/data/roleTypes"
import skills from "~/assets/data/skills"
import years from "~/assets/data/years"
import yesNos from "~/assets/data/yesNos"
import AccomplishmentCard from "~/components/AccomplishmentCard"
import AccomplishmentForm from "~/components/AccomplishmentForm"
import ComboSearch from "~/components/ComboSearch"
import DegreeCard from "~/components/DegreeCard"
import LabelledDropdown from "~/components/LabelledDropdown"
import LabelledFileInput from "~/components/LabelledFileInput"
import LabelledTextInput from "~/components/LabelledInput"
import MultiSelect from "~/components/MultiSelect"
import TitleDivider from "~/components/TitleDivider"
import WorkExperienceCard from "~/components/WorkExperienceCard"
import { prisma } from "~/db.server"
import { requireUserId } from "~/session.server"
import { createServerClient } from "~/supabase.server"
import { cloudStorageUploaderHandler } from "~/upload-handler.server"
import { cx } from "~/utils"

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
  const workExperiences = await prisma.workExperience.findMany({
    where: {
      userId,
      isTemp: false
    },
    include: {
      accomplishments: true
    }
  })
  const certifications = await prisma.certification.findMany({
    where: {
      userId,
      isTemp: false
    }
  })
  return json({
    degrees,
    workExperiences,
    certifications
  });
}

export const action = async ({ request }: ActionArgs) => {
  try {
    const form = await unstable_parseMultipartFormData(request, cloudStorageUploaderHandler);

    //convert it to an object to padd back as actionData
    const fileInfo = JSON.parse(form.get("my-file"));

    // this is response from upload handler
    console.log("the form", form.get("my-file"));
    return fileInfo;
  } catch (e) {
    return { error: e };
  }
};

export default function SeekerApplication() {
  const personalInformationFetcher = useFetcher()
  const socialInformationFetcher = useFetcher()

  const { degrees, workExperiences, certifications } = useLoaderData<typeof loader>()

  const [isAddingAccomplishment, setIsAddingAccomplishment] = useState(false)

  const degreeFetcher = useFetcher()
  const [isAddingDegree, setIsAddingDegree] = useState(false)
  const [degreeBeingAdded, setDegreeBeingAdded] = useState<string | null>(null)
  const [accomplishmentsForDegreeBeingAdded, setAccomplishmentsForDegreeBeingAdded] = useState<Accomplishment[]>([])

  const workExperienceFetcher = useFetcher()
  const [isAddingWorkExperience, setIsAddingWorkExperience] = useState(false)
  const [experienceBeingAdded, setExperienceBeingAdded] = useState<string | null>(null)
  const [accomplishmentsForExperienceBeingAdded, setAccomplishmentsForExperienceBeingAdded] = useState<Accomplishment[]>([])

  const certificationFetcher = useFetcher()
  const [isAddingCertification, setIsAddingCertification] = useState(false)
  const [certificationBeingAdded, setCertificationBeingAdded] = useState<string | null>(null)

  useEffect(() => {
    setIsAddingDegree(degreeFetcher.data?.newDegree?.id ? true : false)
    setDegreeBeingAdded(degreeFetcher.data?.newDegree?.id)
    if (degreeFetcher.data) {
      if (degreeFetcher.data.newWorkExperience) {
        setIsAddingDegree(degreeFetcher.data?.newDegree?.id ? true : false)
        setDegreeBeingAdded(degreeFetcher.data?.newDegree?.id)
      } else if (degreeFetcher.data.action === 'saveDegree') {
        setIsAddingDegree(false)
        setDegreeBeingAdded(null)
      }
    }
  }, [degreeFetcher.data])
  useEffect(() => {
    if (workExperienceFetcher.data) {
      if (workExperienceFetcher.data.newWorkExperience) {
        setIsAddingWorkExperience(workExperienceFetcher.data.newWorkExperience.id ? true : false)
        setExperienceBeingAdded(workExperienceFetcher.data.newWorkExperience.id)
      } else if (workExperienceFetcher.data.action === 'saveWorkExperience') {
        setIsAddingWorkExperience(false)
        setExperienceBeingAdded(null)
      }
    }
  }, [workExperienceFetcher.data])
  useEffect(() => {
    if (certificationFetcher.data) {
      if (certificationFetcher.data.newCertification) {
        setIsAddingCertification(certificationFetcher.data.newCertification.id ? true : false)
        setCertificationBeingAdded(certificationFetcher.data.newCertification.id)
      } else if (certificationFetcher.data.action === 'saveCertification') {
        setIsAddingCertification(false)
        setCertificationBeingAdded(null)
      }
    }
  }, [certificationFetcher.data])

  return (
    //     First Name
    // Last Name
    // Upload your Resume
    // What type of jobs are you looking for?
    // Select Jobs that you would like to apply for.
    // Present Location?
    // Minimum expected Salary (USD/Year) for On-site roles.
    // How many hours of Remote Freelance work can you do per week?
    // What is your desired hourly rate for remote freelancing? (USD/Hr)
    <div className="flex flex-col">
      <TitleDivider title="Personal Information" />
      <section className='py-5'>
        <personalInformationFetcher.Form action="/profile/personal" method="post" encType="multipart/form-data">
          <LabelledTextInput
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
          />
          <LabelledTextInput
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
          />
          <LabelledTextInput
            label="Address Line 1"
            name="addressLine1"
            placeholder="Enter your street name and number"
          />
          <LabelledTextInput
            label="Address Line 2"
            name="addressLine2"
            placeholder="Enter your apartment number, suite, unit, etc. (optional)"
          />
          <LabelledTextInput
            label="City"
            name="city"
            placeholder="Enter your city"
          />
          <LabelledTextInput
            label="State/Province"
            name="stateOrProvince"
            placeholder="Enter your state/province"
          />
          <LabelledDropdown
            label="Country"
            name="country"
            placeholder="Select your country"
            options={countries.map(country => ({ value: country.code, label: country.name, name: country.name }))}
          />
          <LabelledTextInput
            label="Postal Code"
            name="postalCode"
            placeholder="Enter your postal code"
          />
          <LabelledTextInput
            label="Phone Number"
            name="phoneNumber"
            placeholder="Enter your phone number"
          />
          <label className="block mb-2 font-bold text-md text-gray-700">
            Work Style
          </label>
          <MultiSelect
            name="workStylePreferences"
            options={
              jobTypes.map(jobType => ({ value: jobType, label: jobType, name: jobType }))
            }
            placeholder="What type of work styles are you considering?"
          />
          <label className="block mb-2 font-bold text-md text-gray-700">
            Roles
          </label>
          <MultiSelect
            name="rolesOfInterest"
            options={
              roleTypes.map(roleType => ({ value: roleType.id, label: roleType.name, name: roleType.name }))
            }
            placeholder="What type of jobs are you interested in?"
          />
          <LabelledTextInput
            label="Minimum Expected Salary"
            name="minimumExpectedSalary"
            placeholder="Enter your minimum expected salary"
          />
          <LabelledTextInput
            label="Minimum Hourly Rate"
            name="minimumHourlyRate"
            placeholder="Enter your minimum hourly rate"
          />
          <LabelledDropdown
            label="Currency"
            name="currency"
            placeholder="Select your local currency"
            options={currencyCodes.map(currencyCode => ({ value: currencyCode.code, label: currencyCode.name, name: currencyCode.name }))}
          />          
          <LabelledFileInput
            label="Resume"
            name="resume"
            placeholder="Upload your resume"
          />
          <button type="submit" className="flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md">Save</button>
        </personalInformationFetcher.Form>
      </section>
      <TitleDivider title="Social Information" />
      <section className='py-5'>
        <socialInformationFetcher.Form action="/profile/personal" method="post">
          <LabelledTextInput
            label="LinkedIn URL"
            name="linkedinUrl"
            placeholder="https://linkedin.com/in/yourname"
          />
          <LabelledTextInput
            label="Google Scholar URL"
            name="googleScholarUrl"
            placeholder="https://scholar.google.com/citations?user=yourname"
          />
          <LabelledTextInput
            label="Personal Website/Portfolio URL"
            name="websiteUrl"
            placeholder="https://yourname.com"
          />
          <button type="submit" className="flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md">Save</button>
        </socialInformationFetcher.Form>
      </section>
      <TitleDivider title="Education" />
      <section className='py-5'>
        {
          degrees.map(degree => <DegreeCard key={degree.id} degree={degree} />)
        }
        {
          isAddingDegree && <degreeFetcher.Form action="/profile/degrees" method="post" className="p-5 bordered border-[1px] border-gray-400 rounded-sm shadow-sm">
            <input name="degreeId" type="hidden" value={degreeFetcher.data?.newDegree.id} />
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
            <LabelledFileInput
              name="degreeCertificate"
              label="Degree Certificate"
              placeholder="Upload your degree certificate"
              className="w-full mt-5"
            />
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
            <LabelledFileInput
              name="marksheet"
              label="Marksheet/Transcript"
              placeholder="Upload your marksheet/transcript"
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
            <LabelledFileInput
              name="ecaCertificate"
              label="ECA Certificate/Report"
              placeholder="Upload your ECA certificate/report"
              className="w-full mt-5"
            />
            <LabelledFileInput
              name="thesis"
              label="Thesis"
              placeholder="Upload your thesis (if applicable)"
              className="w-full mt-5"
            />
            {
              accomplishmentsForDegreeBeingAdded.map(accomplishment => <AccomplishmentCard key={accomplishment.id} accomplishment={accomplishment} />)
            }
            <button type="button" onClick={() => setIsAddingAccomplishment(true)} className="mt-5 text-blue-500">Add Accomplishment</button>
            <input name="action" type="hidden" value="saveDegree" />
            <button type="submit" className="flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md">Save</button>
          </degreeFetcher.Form>
        }
        {
          <degreeFetcher.Form action="/profile/degrees" method="post">
            <input name="action" type="hidden" value="addDegree" />
            <button type="submit" className={cx("flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", isAddingDegree ? 'hidden' : '')} disabled={isAddingDegree}>Add Degree</button>
          </degreeFetcher.Form>
        }
        {
          degreeBeingAdded && <AccomplishmentForm action={`/profile/degrees/${degreeBeingAdded}`} open={isAddingAccomplishment} setOpen={setIsAddingAccomplishment} onSubmit={(accomplishments) => {
            setAccomplishmentsForDegreeBeingAdded(accomplishments)
          }} />
        }
      </section>
      <TitleDivider title="Certifications" />
      <section className='py-5'>
        {
          isAddingCertification && <certificationFetcher.Form action="/profile/certifications" method="post" className="p-5 bordered border-[1px] border-gray-400 rounded-sm shadow-sm">
            <input name="certificationId" type="hidden" value={certificationFetcher.data?.newCertification.id} />
            <LabelledTextInput
              name="title"
              label="Title"
              placeholder="Enter the title of your certification"
              className="w-full mt-5"
            />
            <LabelledTextInput
              name="issuingAuthority"
              label="Awarding Body/Issuing Authority"
              placeholder="Enter the name of the awarding body/issuing authority"
              className="w-full mt-5"
            />
            <LabelledTextInput
              name="durationInMonths"
              label="Duration (in months)"
              placeholder="Enter the duration of your certification in months"
              className="w-full mt-5"
            />
            <div className="flex flex-wrap mt-5 gap-5">
              <label className="w-full mb-2 font-bold text-md text-gray-700">
                Issued
              </label>
              <LabelledDropdown
                name="issuedYear"
                placeholder="Year"
                className="w-full md:w-1/2"
                options={
                  years.map(year => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
                }
              />
              <LabelledDropdown
                name="issuedMonth"
                placeholder="Month"
                className="w-full md:w-1/2"
                options={
                  months.map(month => ({ value: month.id, label: month.name, name: month.name }))
                }
              />
            </div>
            <div className="flex flex-wrap mt-5 gap-5">
              <label className="w-full mb-2 font-bold text-md text-gray-700">
                Expiry
              </label>
              <LabelledDropdown
                name="expiryYear"
                placeholder="Year"
                className="w-full md:w-1/2"
                options={
                  Array.from({ length: 50 }, (_, i) => i + 1970).map(year => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
                }
              />
              <LabelledDropdown
                name="expiryMonth"
                placeholder="Month"
                className="w-full md:w-1/2"
                options={
                  months.map(month => ({ value: month.id, label: month.name, name: month.name }))
                }
              />
            </div>
            <LabelledFileInput
              name="certificate"
              label="Certificate"
              placeholder="Upload your certificate"
              className="w-full mt-5"
            />
            <input name="action" type="hidden" value="saveCertification" />
            <button type="submit" className="flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md">Save</button>
          </certificationFetcher.Form>
        }
        {
          <certificationFetcher.Form action="/profile/certifications" method="post">
            <input name="action" type="hidden" value="addCertificate" />
            <button type="submit" className={cx("flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", isAddingCertification ? 'hidden' : '')} disabled={isAddingDegree}>Add Certification</button>
          </certificationFetcher.Form>
        }
      </section>
      <TitleDivider title="Professional Experience" />
      <section className='py-5'>
        {
          workExperiences.map(experience => <WorkExperienceCard key={experience.id} experience={experience} />)
        }
        {
          isAddingWorkExperience && experienceBeingAdded && <workExperienceFetcher.Form action="/profile/professional" method="post" className="p-5 bordered border-[1px] border-gray-400 rounded-sm shadow-sm" key={experienceBeingAdded}>
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
            <LabelledFileInput
              name="proofOfEmployment"
              label="Proof of Employment"
              description="Upload a document that proves your employment at this company/organization such as a letter of employment, a pay stub, or a contract"
              placeholder="Upload your proof of employment"
              className="w-full mt-5"
            />
            {
              accomplishmentsForExperienceBeingAdded.map(accomplishment => <AccomplishmentCard key={accomplishment.id} accomplishment={accomplishment} />)
            }
            <button type="button" onClick={() => setIsAddingAccomplishment(true)} className="mt-5 text-blue-500">Add Accomplishment</button>
            <input name="action" type="hidden" value="saveWorkExperience" />
            <button type="submit" className="flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md">Save</button>
          </workExperienceFetcher.Form>
        }
        {
          <workExperienceFetcher.Form action="/profile/professional" method="post">
            <input name="action" type="hidden" value="addWorkExperience" />
            <button type="submit" className={cx("flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", isAddingWorkExperience ? 'hidden' : '')} disabled={isAddingWorkExperience}>Add Experience</button>
          </workExperienceFetcher.Form>
        }
        {
          experienceBeingAdded && <AccomplishmentForm action={`/profile/professional/${experienceBeingAdded}`} open={isAddingAccomplishment} setOpen={setIsAddingAccomplishment} onSubmit={(accomplishments) => {
            setAccomplishmentsForExperienceBeingAdded(accomplishments)
          }} key={Date.now().toString()} />
        }
      </section>
      <TitleDivider title="Hard Skills" />
      <section className='py-5'>
        <MultiSelect
          name="hardSkills"
          options={skills.map(skill => {
            return { label: skill.name, value: skill.name, name: skill.name }
          })} />
      </section>
      <TitleDivider title="Soft Skills" />
      <section className='py-5'>
        <MultiSelect
          name="softSkills"
          options={skills.map(skill => {
            return { label: skill.name, value: skill.name, name: skill.name }
          })} />
      </section>
      <TitleDivider title="References" />
      <section className='py-5'>

      </section>
      <TitleDivider title="Video Summary" />
      <section className='py-5'>
        <LabelledTextInput
          label="Video URL"
          name="videoUrl"
          placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          description="Please create a brief video talking about the most interesting/impressive projects that you worked on (max 5 min). Upload that into YouTube (you may keep it unlisted) and share the link with us."
        />
      </section>
      <TitleDivider title="Feedback" />
      <section className='py-5'>
        <LabelledTextInput
          label="Feedback"
          name="feedback"
          placeholder="Please tell us what you liked or disliked about this form"
          multiline={true}
        />
      </section>
    </div>
  )
}