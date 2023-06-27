import consultingPng from "~/assets/images/categories/consulting.png"
import experimentationPng from "~/assets/images/categories/experimentation.png"
import analyticsReportingPng from "~/assets/images/categories/analytics-reporting.png"
import clinicalTrialPng from "~/assets/images/categories/clinical-trial.png"
import GridTile from "../GridTile"

export default function CategoriesSection() {
  const categories = [
    {
      title: "Solver Registration",
      image: consultingPng,
      link: "/technical-consulting",
      description: "Solvers select job types, set hourly rates, and declare their top five hard skills. They submit academic and professional credentials, evidence of accomplishments, and any relevant work documentation."
    },
    {
      title: "Skill Identification",
      image: experimentationPng,
      link: "/experimental-troubleshooting",
      description: "We meticulously evaluate the provided information to assess their authenticity and assign scores for each hard and soft skill by combining educational and professional achievements and technical assessments."
    },
    {
      title: "Project Submission",
      image: analyticsReportingPng,
      link: "/data-collection-and-analysis",
      description: "Clients outline project specifics and set parameters like desired qualifications, experience level, and estimated hourly rate. Our AI further refines these inputs, identifying key hard and soft skills required for the project."
    },
    {
      title: "Skill Matching",
      image: clinicalTrialPng,
      link: "/clinical-trial-coordination",
      description: "On project submission, our skill-matching algorithm shortlists the top suited Solvers. Clients are presented with this curated list, and upon selection, the project commences."
    },
  ]

  return (
    <section className="flex flex-wrap w-full h-full mx-auto mt-40 justify-center items-center content-center">
      <div className="w-full h-auto">
        <h2 className="text-4xl text-center">How it works</h2>
        <p className="text-center">Connect with our Seekers.</p>
        <div className="flex justify-center flex-wrap mt-5 gap-2 max-w-7xl">
          {
            categories.map((category, index) => (

              <GridTile
                key={index}
                className="w-[500px] h-auto p-10"
                title={category.title}
                imgSrc={category.image}
                linkSrc={category.link}
                description={category.description} />

            ))
          }
        </div>
      </div>
    </section>
  )
}