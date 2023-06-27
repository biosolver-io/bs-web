import { Link } from "@remix-run/react";

export default function HeroSection() {
  return (
    <section className="flex flex-col w-full max-w-3xl h-auto mx-auto mt-10 items-center">
      <div className="text-center text-6xl font-semibold">
        Find work from anywhere, anytime.
      </div>
      <Link to="/register" className="bg-purple-600 hover:bg-purple-800 px-10 rounded-md text-white text-center py-5 mt-10 w-[300px]">
        Join Us
      </Link>
    </section>
  )
}