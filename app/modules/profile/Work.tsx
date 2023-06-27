import { useForm } from 'react-hook-form';

const ProfileWork = () => {
  const {register} =  useForm()

  return (
    <form className='w-full max-w-6xl mx-auto p-10'>
      <h2 className='text-2xl font-bold mb-4'>Work Experience</h2>
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
    </form>
  );
};

export default ProfileWork;