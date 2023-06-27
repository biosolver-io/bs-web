const services = [
  "Management Consultation",
  "Technical Consultation",
  "Manufacturing Consultation",
  "Project Management",
  "Sub-contractor Management",
  "Clinical Trial Coordination",
  "Regulatory Approvals",
  "IP and Patent Filing",
  "Technical Writing",
  "Data Validation",
  "SOP Preparation",
  "Experimental Troubleshooting",
  "Experimental Data Analysis",
  "Bioinformatic Analysis",
  "Bio-Statistical Analysis",
  "Scientific Writing and Editing",
  "Literature Review",
  "Illustration and Animation",
  "Business Development",
  "Content Creation",
  "Biotech Marketing",
  "Biotech Sales",
  "Accounting and Purchase",
  "HR and Admin"
]

export default function ServicesSection() {
  return (
    <section className="flex flex-col w-full max-w-6xl h-auto mx-auto mt-10 items-center">
      <div className="text-center text-4xl font-bold">
        What services do we offer?
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div className="bg-white shadow-md rounded-md px-5 py-2 mx-5 my-2 flex items-center" key={index}>
            {service}
          </div>
        ))}
      </div>
    </section>
  )
}
