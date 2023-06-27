import { useForm } from 'react-hook-form';

const ProfilePersonal = () => {
  const { register } = useForm()

  return (
    <form className='w-full max-w-6xl mx-auto p-10'>
      <h2 className='text-2xl font-bold mb-4'>Personal Information</h2>
      <div className="mb-4">
        <label htmlFor="fullName" className="block mb-2 font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          {...register("fullName")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          {...register("phone")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="addressLine1" className="block mb-2 font-medium text-gray-700">
          Address Line 1
        </label>
        <input
          type="text"
          id="addressLine1"
          {...register("addressLine1")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="addressLine2" className="block mb-2 font-medium text-gray-700">
          Address Line 2
        </label>
        <input
          type="text"
          id="addressLine2"
          {...register("addressLine2")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block mb-2 font-medium text-gray-700">
          City
        </label>
        <input
          type="text"
          id="city"
          {...register("city")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block mb-2 font-medium text-gray-700">
          State
        </label>
        <input
          type="text"
          id="state"
          {...register("state")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zip" className="block mb-2 font-medium text-gray-700">
          ZIP
        </label>
        <input
          type="text"
          id="zip"
          {...register("zip")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
          Country
        </label>
        <input
          type="text"
          id="country"
          {...register("country")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="website" className="block mb-2 font-medium text-gray-700">
          Website
        </label>
        <input
          type="text"
          id="website"
          {...register("website")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="linkedin" className="block mb-2 font-medium text-gray-700">
          LinkedIn
        </label>
        <input
          type="text"
          id="linkedin"
          {...register("linkedin")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="github" className="block mb-2 font-medium text-gray-700">
          GitHub
        </label>
        <input
          type="text"
          id="github"
          {...register("github")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="twitter" className="block mb-2 font-medium text-gray-700">
          Twitter
        </label>
        <input
          type="text"
          id="twitter"
          {...register("twitter")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block mb-2 font-medium text-gray-700">
          Bio
        </label>
        <textarea
          id="bio"
          {...register("bio")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="pronouns" className="block mb-2 font-medium text-gray-700">
          Pronouns
        </label>
        <input
          type="text"
          id="pronouns"
          {...register("pronouns")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="avatar" className="block mb-2 font-medium text-gray-700">
          Avatar
        </label>
        <input
          type="text"
          id="avatar"
          {...register("avatar")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="resume" className="block mb-2 font-medium text-gray-700">
          Resume
        </label>
        <input
          type="text"
          id="resume"
          {...register("resume")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block mb-2 font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          {...register("dateOfBirth")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </form>
  );
};

export default ProfilePersonal;