import { Link } from "@remix-run/react"

const categories = [{
  name: 'Technical Consulting',
  icon: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0e2b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VsdGluZyUyMGNvbnR1bmluZyUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  link: '/register'
}, {
  name: 'Management Consulting',
  icon: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0e2b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VsdGluZyUyMGNvbnR1bmluZyUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  link: '/register'
}, {
  name: 'Technical/Medical Writer',
  icon: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0e2b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VsdGluZyUyMGNvbnR1bmluZyUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  link: '/register'
}, {
  name: 'Regulatory Affairs Consulting',
  icon: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0e2b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VsdGluZyUyMGNvbnR1bmluZyUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  link: '/register'
}, {
  name: 'IP and Patent Attorney',
  icon: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0e2b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VsdGluZyUyMGNvbnR1bmluZyUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  link: '/register'
}, {
  name: 'QA/Compliance Consulting',
  icon: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0e2b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VsdGluZyUyMGNvbnR1bmluZyUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  link: '/register'
}]

export default function JobCategoriesSection() {
  return (
    <section className="text-black body-font max-w-7xl mx-auto w-full mt-20">
      <div className="w-full mx-auto max-w-6xl text-5xl text-start font-semibold tracking-tight leading-snug">
        Get access to <span className="text-blue-800">remote</span> opportunities in several areas of the <span className="text-yellow-600">life sciences.</span>
      </div>
      <div className="w-full flex flex-wrap mt-10 justify-center gap-5 bg-blue-800 rounded-7xl p-8 text-white">
        {
          categories.map(category => (
            <Link to={category.link} className="w-[250px] rounded-4xl bg-blue-600 flex flex-col p-6 hover:bg-white hover:text-black hover:-translate-y-2 my-auto">                            
              <div className='w-full text-center font-semibold text-xl'>
                {category.name}
              </div>
            </Link>
          ))
        }
      </div>
    </section >
  )
}