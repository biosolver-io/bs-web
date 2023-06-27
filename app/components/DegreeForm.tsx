import { useFieldArray, useForm } from "react-hook-form";
import countries from "~/assets/data/countries";

interface Degree {
  name?: string;
  field?: string;
  country?: string;
  university?: string;
  start?: string;
  end?: string;
  currentlyStudying?: boolean;
  accomplishments?: Accomplishment[];
}

interface Accomplishment {
  name?: string;
  type?: string;
  certificate?: FileList;
  link?: string;
  id?: string;
  publisher?: string;
  title?: string;
}

export default function DegreeForm(
  {
    onSubmit,
  }: {
    onSubmit: (data: Degree) => void;
  }
) {
  const { register, watch, control, handleSubmit } = useForm<Degree>();
  const isCurrentlyStudying = watch('currentlyStudying');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'accomplishments',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4 border-gray-500 border-solid rounded-md p-5 border-2">
      <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
        Degree
      </label>
      <select
        id="name"
        {...register("name", { required: true })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">Select Degree</option>
        <option value="UG Diploma">UG Diploma</option>
        <option value="Bachelors">Bachelors</option>
        <option value="PG Diploma">PG Diploma</option>
        <option value="Professional Degree">Professional Degree</option>
        <option value="Masters">Masters</option>
        <option value="PhD or Doctoral Studies">PhD or Doctoral Studies</option>
      </select>

      <div className="mb-4">
        <label htmlFor="field" className="block mb-2 font-medium text-gray-700">
          Field
        </label>
        <input
          type="text"
          id="field"
          {...register("field", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
          Country
        </label>
        <select
          id="country"
          {...register("country", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select Country</option>
          {
            countries.map((country) => (
              <option key={country.code} value={country.name}>{country.name}</option>
            ))
          }
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="university" className="block mb-2 font-medium text gray-700">
          University
        </label>
        <input
          type="text"
          id="university"
          {...register("university", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="started" className="block mb-2 font-medium text-gray-700">
          Start
        </label>
        <input
          type="text"
          id="start"
          {...register("start", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {!isCurrentlyStudying && <div className="mb-4">
        <label htmlFor="end" className="block mb-2 font-medium text-gray-700">
          End
        </label>
        <input
          type="text"
          id="end"
          {...register("end", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>}

      <div className="mb-4">
        <input
          type="checkbox"
          id="currentlyStudying"
          {...register("currentlyStudying")}
          className="mr-2"
        />
        <label htmlFor="currentlyStudying" className="font-medium text-gray-700">
          Currently Studying Here
        </label>
      </div>
      <div className="mb-4">
        {
          fields.map((field, index) => {

            return (
              <div className="mb-4">
                <label htmlFor="accomplishment" className="block mb-2 font-medium text-gray-700">
                  Accomplishment {index + 1}
                </label>
                <select
                  id="type"
                  {...register(`accomplishments.${index}.type`, { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Accomplishment</option>
                  <option value="Thesis">Thesis</option>
                  <option value="Patent">Patent</option>
                  <option value="Published Work">Published Work</option>
                </select>

                {
                  field.type === 'Thesis' && (
                    <div className="mb-4">
                      <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        {...register(`accomplishments.${index}.title`, { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  )
                }

                {
                  field.type === 'Patent' && (
                    <div className="mb-4">
                      <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        {...register(`accomplishments.${index}.title`, { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  )
                }

                {
                  field.type === 'Published Work' && (
                    <div className="mb-4">
                      <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        {...register(`accomplishments.${index}.title`, { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  )
                }
              </div>
            )
          })
        }
        <button onClick={() => append({}, {
          shouldFocus: true,
        })} className='w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5'>
          Add an Accomplishment
        </button>
        <button type='submit' className='w-full text-center border-gray-400 rounded-md border-solid border-2 py-5'>
          Save
        </button>
      </div>
    </form>
  );
}

