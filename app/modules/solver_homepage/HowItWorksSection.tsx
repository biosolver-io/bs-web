import howItWorksDecoration from '../../assets/images/backgrounds/how_it_works_decoration.svg'

export default function HowItWorksSection() {
  return (
    <section className="text-black body-font max-w-7xl mx-auto w-full mt-20">
      <div className="w-full mx-auto max-w-6xl text-5xl text-start font-semibold tracking-tight leading-snug">
        Find your <span className='text-blue-800'>dream opportunity</span> easily using our platform.
      </div>
      <div className="w-full flex flex-wrap mt-10 justify-center gap-5 bg-blue-800 rounded-7xl p-8 text-white">
        <div className="w-[275px] relative rounded-4xl bg-blue-600 flex flex-col p-10 hover:bg-white hover:text-black hover:-translate-y-5">
          <div className='absolute font-semibold text-5xl top-[30px] left-[30px]'>01</div>
          <img src={howItWorksDecoration} className='absolute top-0 left-0 w-[150px] h-auto' />
          <div className='mt-[160px] w-full text-start font-semibold text-3xl'>
            Complete your profile
          </div>
          <div className='mt-5'>
            Ensure that all information is up to date and accurate, so recruiters can find you easily.
          </div>
        </div>
        <div className="w-[275px] relative rounded-4xl bg-blue-600 flex flex-col p-10 hover:bg-white hover:text-black hover:-translate-y-5">
          <div className='absolute font-semibold text-5xl top-[30px] left-[30px]'>02</div>
          <img src={howItWorksDecoration} className='absolute top-0 left-0 w-[150px] h-auto' />
          <div className='mt-[160px] w-full text-start font-semibold text-3xl'>
            Upload documents
          </div>
          <div className='mt-5'>
            We verify your documents and ensure that you are a real person, so recruiters can trust you.
          </div>
        </div>
        <div className="w-[275px] relative rounded-4xl bg-blue-600 flex flex-col p-10 hover:bg-white hover:text-black hover:-translate-y-5">
          <div className='absolute font-semibold text-5xl top-[30px] left-[30px]'>03</div>
          <img src={howItWorksDecoration} className='absolute top-0 left-0 w-[150px] h-auto' />
          <div className='mt-[160px] w-full text-start font-semibold text-3xl'>
            Skill Matching
          </div>
          <div className='mt-5'>
            We match your skills with the right opportunities, so you can find the best fit.
          </div>
        </div>
        <div className="w-[275px] relative rounded-4xl bg-blue-600 flex flex-col p-10 hover:bg-white hover:text-black hover:-translate-y-5">
          <div className='absolute font-semibold text-5xl top-[30px] left-[30px]'>04</div>
          <img src={howItWorksDecoration} className='absolute top-0 left-0 w-[150px] h-auto' />
          <div className='mt-[160px] w-full text-start font-semibold text-3xl'>
            Schedule Interview
          </div>
          <div className='mt-5'>
            You can schedule an interview with the recruiter to discuss the opportunity when they reach out to you.
          </div>
        </div>
      </div>

    </section>
  )
}