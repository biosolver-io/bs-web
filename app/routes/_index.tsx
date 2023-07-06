import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import CategoriesSection from "~/layout/anon/home/CategorySection";
import HeroSection from "~/layout/anon/home/HeroSection";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Biosolver" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <div className="p-10">
      <HeroSection />      
      <div className='w-full h-auto p-10 text-white rounded-lg mt-10 flex flex-row gap-5'>
        <div className="w-full lg:w-1/2 bg-[url('assets/images/backgrounds/expert.jpg')] bg-cover bg-center">
          <div className='w-full h-full backdrop-brightness-50 p-10 flex flex-col'>
            <h1 className='text-4xl font-bold'>Be a Solver</h1>
            <p className='text-xl mt-5'>
              Are you a Biotech/Pharma expert or student interested in remote freelancing work?
            </p>
            <Link to='/register' className="text-center w-full rounded bg-purple-500 hover:bg-purple-700 text-white py-5 mt-5">Join as a Solver</Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[url('assets/images/backgrounds/company.jpg')] bg-cover">
          <div className='w-full h-full backdrop-brightness-50 p-10 flex flex-col'>
            <h1 className='text-4xl font-bold'>Hire a Solver</h1>
            <p className='text-xl mt-5'>
              Are you looking to hire a Biotech/Pharma expert or student for a remote freelancing work?
            </p>
            <Link to='/register' className="text-center w-full rounded bg-purple-500 hover:bg-purple-700 text-white py-5 mt-5">Join as a Seeker</Link>
          </div>
        </div>
      </div>
      <CategoriesSection />
    </div>
  );
}
