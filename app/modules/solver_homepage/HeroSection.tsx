import ringUpSvg from '../../assets/images/backgrounds/ring_up.svg'
import heroBackground from '../../assets/images/backgrounds/hero_background.png'
import heroCtaSvg from '../../assets/images/backgrounds/hero_cta_back.svg'
import { Link } from '@remix-run/react';
import { cx } from '~/utils';

export default function HeroSection() {
  return (
    <section className="text-black body-font max-w-7xl">
      <div className="w-full mx-auto text-7xl font-bold tracking-tight leading-snug text-start">
        A global platform to <span className='text-blue-600'>network</span> for professionals in <span className='text-yellow-400'>Biotechnology.</span>
      </div>
      <div className="w-full flex flex-wrap mt-5 justify-between mx-auto">
        <div className="flex w-full md:w-[73%] h-[350px] rounded-7xl  items-end align-bottom relative">
          <img className="w-full absolute h-[350px]" src={heroBackground} />
          <Link to={'/register'} className="flex absolute align-bottom h-[165px] bg-blue-600 hover:bg-blue-700 border-white border-5 rounded-7xl w-[38.5%] animate-pulse hover:animate-none">
            <img className="absolute bottom-0 left-0 w-auto h-[165px]" src={heroCtaSvg} />
            <div className="absolute bottom-0 left-0 text-start text-3xl text-white w-1/2 p-7">
              Get Started
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/4 bg-yellow-400 rounded-7xl h-[350px] relative">
          <div className='text-black text-lg p-10'>
            Find opportunities and connect with talent in the biotech industry.
          </div>
          <img className="absolute bottom-0 right-0" src={ringUpSvg} />
        </div>
      </div>
    </section>
  );
}