import LatestJobsPosting from "./LatestJobPosting"

const latestJobs = [
  {
    logo: 'https://ryercat.com/cdn/shop/files/LogoTagline_200x@2x.png?v=1667425643',
    company: 'Ryercat',
    postedOn: '2 days ago',
    title: 'Formulation Scientist',
    location: 'Canada',
    applicationUrl: '/register'
  },
  {
    logo: 'https://media.licdn.com/dms/image/C510BAQE7Eor0BAq0vA/company-logo_200_200/0/1519908858114?e=1701302400&v=beta&t=Ugg9PwN0_j2dt-X5r7Tjsa0Xuj1Xa_C2cYmOGYLAxq4',
    company: 'Phenomic AI',
    postedOn: '2 days ago',
    title: 'Senior Data Scientist',
    location: 'Toronto',
    applicationUrl: '/register'
  },
  {
    logo: 'https://www.scian.com/wp-content/themes/romandesign/images/logo.png',
    company: 'SCiAN Services',
    postedOn: '2 days ago',
    title: 'Senior Biostatistician',
    location: 'Toronto',
    applicationUrl: '/register'
  }
]

export default function LatestJobsSection() {
  return (
    <section className="text-black body-font max-w-7xl mx-auto w-full mt-20">
      <div className="w-full text-center text-5xl font-semibold">
        <span className="text-blue-800">Latest Jobs</span> for you
      </div>
      <div className="w-full flex flex-wrap mt-10 justify-center gap-5">
        {
          latestJobs.map(job => (
            <LatestJobsPosting job={job} />
          ))
        }
      </div>
    </section>
  )
}