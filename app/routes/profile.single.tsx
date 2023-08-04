import { LoaderArgs, json } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState } from "react";
import { getNoteListItems } from "~/models/note.server";
import { requireUserId } from "~/session.server";
import countries from "~/assets/data/countries";
import { Degree } from "~/types.client";
import assessmentFormats from "~/assets/data/assessmentFormats";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
};

export const action = async ({ request }: LoaderArgs) => {
  const formData = await request.formData();
  const host = formData.get("host");
  const port = formData.get("port");
  const security = formData.get("security");
  const username = formData.get("username");
  const password = formData.get("password");
  const fromEmail = formData.get("fromEmail");
  const fromName = formData.get("fromName");
  const dailyLimit = formData.get("dailyLimit");
  return request.method === "post" ? json({}) : null;
}

export default function () {
  const [degrees, setDegrees] = useState<(Degree & {
    saved: boolean;
  })[]>([]);

  const addDegree = () => {
    setDegrees([
      ...degrees,
      {
        type: '',
        university: '',
        field: '',
        country: '',
        stateOrCity: '',
        startDate: '',
        endDate: '',
        currentlyStudying: false,
        assessmentFormat: '',
        marksOrGrade: '',
        hasEca: false,
        ecaAuthority: '',
        saved: false
      }
    ])
  }

  const markAsSaved = (index: number) => {
    degrees[index].saved = true;
    setDegrees([
      ...degrees
    ]);
  }

  return (
    <Form action="/profile/single" method="post">
      <section className="flex flex-col space-y-4 mt-5">
        {
          degrees.map((degree, index) => {
            return degree.saved === true ? (
              <div>
                <h4>
                  {degree.type}
                </h4>
                <h4>
                  {degree.university}
                </h4>
                <h4>
                  {degree.field}
                </h4>
                <h4>
                  {degree.country}
                </h4>
                <h4>
                  {degree.stateOrCity}
                </h4>
                <h4>
                  {degree.startDate}
                </h4>
                <h4>
                  {degree.endDate}
                </h4>
                <h4>
                  {degree.assessmentFormat}
                </h4>
                <h4>
                  {degree.marksOrGrade}
                </h4>
                <h4>
                  {degree.hasEca}
                </h4>
                <h4>
                  {degree.ecaAuthority}
                </h4>
                <button onClick={() => {
                  setDegrees([
                    ...degrees.slice(0, index),
                    ...degrees.slice(index + 1)
                  ])
                }
                } className="w-full bg-red-500 text-white p-3 rounded-md">Delete</button>
                <div className="p-5 rounded-md border-2 hidden">
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                    Degree
                  </label>
                  <select
                    name="education.type"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={degree.type}
                  >
                    <option value="None">Select Degree</option>
                    <option value="UG Diploma">UG Diploma</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="PG Diploma">PG Diploma</option>
                    <option value="Professional Degree">Professional Degree</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD or Doctoral Studies">PhD or Doctoral Studies</option>
                  </select>
                  <label htmlFor="university" className="block mb-2 font-medium text gray-700">
                    University
                  </label>
                  <input
                    type="text"
                    name="education.university"
                    value={degree.university}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <label htmlFor="field" className="block mb-2 font-medium text-gray-700">
                    Field
                  </label>
                  <input
                    type="text"
                    name="education.field"
                    value={degree.field}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
                    Country
                  </label>
                  <select
                    name="education.country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={degree.country}
                  >
                    <option value="">Select Country</option>
                    {
                      countries.map((country) => (
                        <option key={country.code} value={country.name}>{country.name}</option>
                      ))
                    }
                  </select>
                  <label htmlFor="field" className="block mb-2 font-medium text-gray-700">
                    State/City
                  </label>
                  <input
                    type="text"
                    name="education.stateOrCity"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <label htmlFor="started" className="block mb-2 font-medium text-gray-700">
                    Start
                  </label>
                  <input
                    type="date"
                    name="education.startDate"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {!degree.currentlyStudying && <div className="mb-4">
                    <label htmlFor="end" className="block mb-2 font-medium text-gray-700">
                      End
                    </label>
                    <input
                      type="date"
                      name="education.endDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>}
                  <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
                    Assessment Format
                  </label>
                  <select
                    name="education.assessmentFormat"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Choose Format</option>
                    {
                      assessmentFormats.map((format) => (
                        <option key={format} value={format}>{format}</option>
                      ))
                    }
                  </select>
                  <label htmlFor="field" className="block mb-2 font-medium text-gray-700">
                    Marks/Grade
                  </label>
                  <input
                    type="text"
                    name="education.marksOrGrade"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
                    Do you have an ECA Certificate?
                  </label>
                  <select
                    name="education.hasEca"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <label htmlFor="field" className="block mb-2 font-medium text-gray-700">
                    ECA Authority
                  </label>
                  <input
                    type="text"
                    name="education.ecaAuthority"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button onClick={() => {
                    markAsSaved(index);
                  }} className="w-full bg-blue-500 text-white p-3 rounded-md">Save</button>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-md border-2">
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                  Degree
                </label>
                <select
                  name="education.type"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="None">Select Degree</option>
                  <option value="UG Diploma">UG Diploma</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="PG Diploma">PG Diploma</option>
                  <option value="Professional Degree">Professional Degree</option>
                  <option value="Masters">Masters</option>
                  <option value="PhD or Doctoral Studies">PhD or Doctoral Studies</option>
                </select>
                <label htmlFor="university" className="block mb-2 font-medium text gray-700">
                  University
                </label>
                <input
                  type="text"
                  name="education.university"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label htmlFor="field" className="block mb-2 font-medium text-gray-700">
                  Field
                </label>
                <input
                  type="text"
                  name="education.field"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
                  Country
                </label>
                <select
                  name="education.country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Country</option>
                  {
                    countries.map((country) => (
                      <option key={country.code} value={country.name}>{country.name}</option>
                    ))
                  }
                </select>
                <label htmlFor="field" className="block mb-2 font-medium text-gray-700">
                  State/City
                </label>
                <input
                  type="text"
                  name="education.stateOrCity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label htmlFor="started" className="block mb-2 font-medium text-gray-700">
                  Start
                </label>
                <input
                  type="date"
                  name="education.startDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {!degree.currentlyStudying && <div className="mb-4">
                  <label htmlFor="end" className="block mb-2 font-medium text-gray-700">
                    End
                  </label>
                  <input
                    type="date"
                    name="education.endDate"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>}
                <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
                  Assessment Format
                </label>
                <select
                  name="education.assessmentFormat"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Choose Format</option>
                  {
                    assessmentFormats.map((format) => (
                      <option key={format} value={format}>{format}</option>
                    ))
                  }
                </select>
                <label htmlFor="field" className="block mb-2 font-medium text-gray-700">
                  Marks/Grade
                </label>
                <input
                  type="text"
                  name="education.marksOrGrade"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
                  Do you have an ECA Certificate?
                </label>
                <select
                  name="education.hasEca"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label htmlFor="field" className="block mb-2 font-medium text-gray-700">
                  ECA Authority
                </label>
                <input
                  type="text"
                  name="education.ecaAuthority"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button onClick={() => {
                  markAsSaved(index);
                }} className="w-full bg-blue-500 text-white p-3 rounded-md">Save</button>
              </div>
            )
          })
        }
        <button onClick={() => {
          addDegree();
        }} className='w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5'>
          Add Degree
        </button>
      </section>
    </Form>
  )
}
