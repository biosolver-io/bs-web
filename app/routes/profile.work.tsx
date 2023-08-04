import { type } from "os";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MultiSelect from "~/components/MultiSelect";
import SingleSelect from "~/components/SingleSelect";

interface WorkExperienceFormData {
  experiences: WorkExperience[];
}

type WorkExperience = {
  jobType: string,
  role: string,
  companyName: string,
  domain: string,
  subdomains: string[]
}

export default function () {
  const { register } = useForm()

  const [profile, setProfile] = useState<WorkExperienceFormData>({
    experiences: []
  });

  const domains = [
    {
      "domain": "Biotechnology",
      "sub-domains": [
        "Industrial Biotechnology",
        "Environmental Biotechnology",
        "Animal Biotechnology",
        "Plant Biotechnology",
        "Drug Discovery and Development",
        "IP and Patent law"
      ]
    },
    {
      "domain": "Molecular Biology",
      "sub-domains": [
        "Molecular Cloning",
        "Gene Expression",
        "Genome Editing",
        "Next Gen Sequencing",
        "Cell culture Techniques",
        "Yeast Biology"
      ]
    },
    {
      "domain": "Microbiology",
      "sub-domains": [
        "Medical microbiology",
        "Industrial Microbiology",
        "Bacteriology",
        "Food Microbiology",
        "Gene Expression",
        "Industrial Microbiology"
      ]
    },
    {
      "domain": "Biochemistry",
      "sub-domains": [
        "Protein Biochemistry",
        "Carbohydrate Biochemistry",
        "Lipid Biochemistry",
        "Enzymology",
        "Transplant Immunology",
        "Cell Differentiation"
      ]
    },
    {
      "domain": "Immunology",
      "sub-domains": [
        "Immunotherapy",
        "Innate Immunity",
        "Autoimmune response",
        "Adaptive Immunity",
        "Organelle Biology",
        "Regulatory Affairs"
      ]
    },
    {
      "domain": "Cell Biology",
      "sub-domains": [
        "Cell Cycle",
        "Cell Differentiation",
        "Cytoskeleton",
        "Cellular Imaging",
        "Pharmacokinetics and Pharmacodynamics",
        "Medical Diagnosis"
      ]
    },
    {
      "domain": "Pharmaceutical Sciences",
      "sub-domains": [
        "Pharmaceutical Formulation",
        "Clinical Trials and Research",
        "Protein Folding and Dynamics",
        "Statistical Analysis",
        "Genomic Data Analysis",
        "Genetic Circuit Design"
      ]
    },
    {
      "domain": "Clinical Medicine",
      "sub-domains": [
        "Medical Diagnosis",
        "Membrane Biophysics",
        "Experimental Design",
        "Sequence Alignment and Analysis",
        "Metabolic Engineering",
        "Analytical Chemistry"
      ]
    },
    {
      "domain": "Biophysics",
      "sub-domains": [
        "Biomedical Imaging",
        "Biomechanics",
        "Rehabilitation Engineering",
        "Medical Device Development",
        "Bioinstrumentation",
        "Structural Bioinformatics"
      ]
    },
    {
      "domain": "Bio-statistics",
      "sub-domains": [
        "Genomics",
        "Business Development",
        "Project Management",
        "Proteomics",
        "SOP preparation",
        "Techno-economics"
      ]
    },
    {
      "domain": "Computational Biology",
      "sub-domains": [
        "Single-Molecule Biophysics",
        "Data Mining and Visualization",
        "Biosecurity and Ethics",
        "Computational Chemistry",
        "Bioinstrumentation",
        "Content creation"
      ]
    },
    {
      "domain": "Synthetic Biology",
      "sub-domains": [
        "Biomedical Imaging",
        "Biomechanics",
        "Rehabilitation Engineering",
        "Medical Device Development",
        "Bioinstrumentation",
        "Structural Bioinformatics"
      ]
    },
    {
      "domain": "Chemistry",
      "sub-domains": [
        "Organic Chemistry",
        "Analytical Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Medicinal Chemistry",
        "Rehabilitation Engineering"
      ]
    },
    {
      "domain": "Biomedical Engineering",
      "sub-domains": [
        "Biomedical Imaging",
        "Biomechanics",
        "Rehabilitation Engineering",
        "Medical Device Development",
        "Bioinstrumentation",
        "Structural Bioinformatics"
      ]
    },
    {
      "domain": "Bio-omics",
      "sub-domains": [
        "Genomics",
        "Transcriptomics",
        "Proteomics",
        "Metabolomics",
        "Lipidomics",
        "Genomics"
      ]
    },
    {
      "domain": "Bioventure & Bioeconomy",
      "sub-domains": [
        "Business Development",
        "Market Research",
        "Techno-economics",
        "Bioinformatics",
        "Bioinformatics",
        "Bioinformatics"
      ]
    }
  ]

  const [addingWork, setAddingWork] = useState(false);

  const [domain, setDomain] = useState<any>(null)

  return (
    <div>
      {
        !addingWork && <button onClick={() => {
          setAddingWork(true);
        }} className='w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5'>
          Add Experience
        </button>
      }
      {
        addingWork && <form className='w-full max-w-6xl mx-auto p-10'>
          <h2 className='text-2xl font-bold mb-4'>Work Experience</h2>
          <div className="mb-4">
            <MultiSelect
              options={[
                { "label": "Technical Consultation", "value": "Technical Consultation" },
                { "label": "Management Consultation", "value": "Management Consultation" },
                { "label": "Manufacturing Consultation", "value": "Manufacturing Consultation" },
                { "label": "Project Management", "value": "Project Management" },
                { "label": "Sub-contractor Management", "value": "Sub-contractor Management" },
                { "label": "Business Development", "value": "Business Development" },
                { "label": "Clinical Trial Coordination", "value": "Clinical Trial Coordination" },
                { "label": "Regulatory Approvals", "value": "Regulatory Approvals" },
                { "label": "IP and Patent Filing", "value": "IP and Patent Filing" },
                { "label": "Technical Writing", "value": "Technical Writing" },
                { "label": "Data Management and validation", "value": "Data Management and validation" },
                { "label": "SOP Preparation", "value": "SOP Preparation" },
                { "label": "Experimental Troubleshooting", "value": "Experimental Troubleshooting" },
                { "label": "Data Analysis", "value": "Data Analysis" },
                { "label": "Bioinformatic Analysis", "value": "Bioinformatic Analysis" },
                { "label": "Bio-Statistical Analysis", "value": "Bio-Statistical Analysis" },
                { "label": "Scientific Writing and Editing", "value": "Scientific Writing and Editing" },
                { "label": "Literature Review", "value": "Literature Review" },
                { "label": "Illustration and Animation", "value": "Illustration and Animation" },
                { "label": "Content Creation", "value": "Content Creation" },
                { "label": "Biotech Marketing", "value": "Biotech Marketing" },
                { "label": "Biotech Sales", "value": "Biotech Sales" },
                { "label": "Accounting and Purchase", "value": "Accounting and Purchase" },
                { "label": "HR & Admin", "value": "HR & Admin" }
              ]}
              name='jobType'
              placeholder='Job Type'
            />

          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Role
            </label>
            <SingleSelect
              onChange={(option) => console.log(option)}
              options={[
                { "id": "Experimental Biologist", "name": "Experimental Biologist", "available": true },
                { "id": "Computational Biologist", "name": "Computational Biologist", "available": true },
                { "id": "Bio-statistician", "name": "Bio-statistician", "available": true },
                { "id": "Bio-Physicist", "name": "Bio-Physicist", "available": true },
                { "id": "Technical Consultant", "name": "Technical Consultant", "available": true },
                { "id": "Technical Writter", "name": "Technical Writter", "available": true },
                { "id": "Management Consultant", "name": "Management Consultant", "available": true },
                { "id": "Regulatory approval Specialist", "name": "Regulatory approval Specialist", "available": true },
                { "id": "Clinical Trial Specialist", "name": "Clinical Trial Specialist", "available": true },
                { "id": "IP and patent Specialist", "name": "IP and patent Specialist", "available": true },
                { "id": "Non-technical", "name": "Non-technical", "available": true },
                { "id": "Other", "name": "Other", "available": true }
              ]
              } />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Company Name
            </label>
            <input type="text" name="companyName" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
              Domain
            </label>
            <SingleSelect
              onChange={(option) => {
                console.log(option)
                setDomain(option)
              }}
              options={domains.map(domain => {
                return { id: domain.domain, name: domain.domain, available: true }
              })} />
            {
              domain && domains.find(item => item.domain === domain.id) && (
                <MultiSelect
                  name="subdomains"
                  options={domains.find(item => item.domain === domain.id)['sub-domains'].map(subDomain => {
                    return { label: subDomain, value: subDomain }
                  })} />
              )
            }
          </div>
        </form>
      }

    </div>
  );
}