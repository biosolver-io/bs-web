import { Link } from "@remix-run/react";
import HeroDecoration from "./HeroDecoration";
import geneticEngineeringPng from "~/assets/images/hero/genetic_engineering.png";

export default function HeroSection() {
  return (
    <section className="flex flex-wrap w-full h-full mx-auto">
      <HeroDecoration />
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="text-start text-4xl my-auto font-semibold">
          A global platform for remote freelancing work in Biotech & Pharma sectors
        </div>
        <Link to="/register" className="bg-purple-600 hover:bg-purple-800 px-10 rounded-md text-white text-center py-5 mt-10 w-[300px]">
          Join Us
        </Link>
      </div>
      <img className="w-full lg:w-1/2" src={geneticEngineeringPng} alt="hero" />
    </section>
  )
}
