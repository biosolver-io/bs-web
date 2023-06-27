import FieldGroup from "./FieldGroup";

const fields: Record<string, string[]> = {
  "Biotechnology & Molecular Biology": [
    "PCR and Cloning",
    "DNA/RNA extraction",
    "Protein Isolation & Purification",
    "Cell culture techniques",
    "Understanding of molecular mechanisms"
  ],
  "Microbiology & Virology": [
    "Cell Culture Techniques",
    "Understanding of Microorganism Life Cycles",
    "Molecular Techniques Related to Microbiology",
    "Microbial Genomics",
    "Antimicrobial Susceptibility Testing"
  ],
  "Biochemistry & Chromatography": [
    "Understanding of Biochemical Mechanisms",
    "Chromatography Techniques",
    "Mass Spectrometry",
    "Metabolic Pathway Analysis",
    "Protein-Ligand Interactions"
  ],
  "Protein Biochemistry & Enzymology": [
    "Recombinant Protein Expression",
    "Protein Purification",
    "Western Blotting",
    "Enzyme Kinetics",
    "Protein-Protein Interactions"
  ],
  "Cancer Biology & Immunology": [
    "Tumor Biology",
    "Immunohistochemistry",
    "Flow Cytometry",
    "Understanding of cancer genomics",
    "Cell Signaling Pathways"
  ],
  "Genetics & Genetic Engineering": [
    "Understanding of Genetics",
    "Genotyping",
    "Genetic Screening",
    "CRISPR Technique",
    "Transgenic Organism Creation"
  ],
  "Genomics, Proteomics & Metabolomics": [
    "Next-Generation Sequencing",
    "Mass Spectrometry",
    "Metabolomics Data Analysis",
    "Understanding of Genomic Databases",
    "Proteomics Techniques"
  ],
  "Computational Biology & Bioinformatics": [
    "Computational Modeling",
    "Genomics Data Analysis",
    "Programming (Python/R)",
    "Machine Learning Techniques",
    "Database Management"
  ],
  "Biostatistics & Data Science": [
    "Statistical Modelling",
    "Data Visualization",
    "Predictive Modelling",
    "Proficiency in Statistical Tools",
    "Hypothesis Testing"
  ],
  "Pharmacology & Toxicology": [
    "Drug Design & Synthesis",
    "Pharmacokinetics & Pharmacodynamics",
    "In vivo & In vitro testing",
    "Molecular docking",
    "Bioavailability and bioequivalence studies"
  ],
  "Pharmaceutical Manufacturing & Industrial Pharmacy": [
    "Knowledge of GMP",
    "Pharmaceutical Formulation",
    "Process Optimization",
    "Process Validation",
    "CAPA (Corrective and Preventive Action)"
  ],
  "Bioprocess Engineering & Bioproduction": [
    "Bioreactor Operation",
    "Downstream Processing",
    "Fermentation Techniques",
    "Scale-Up Processes",
    "Understanding of GMP"
  ],
  "Drug Discovery & Development": [
    "Understanding of Drug Design Processes",
    "High Throughput Screening",
    "Lead Optimization",
    "In vivo and In vitro Testing",
    "Knowledge of Regulatory Requirements"
  ],
  "Clinical Research & Clinical Trials Coordination": [
    "Clinical Trial Design",
    "Patient Recruitment",
    "Data collection & Analysis",
    "Adverse Event Monitoring",
    "GCP Compliance"
  ],
  "Bio-Medical Technology & Biomedical Engineering": [
    "Medical Device Design",
    "Biomedical Imaging",
    "Biocompatibility Assessments",
    "Understanding of Medical Software Development",
    "Medical Robotics"
  ],
  "Environmental Biotechnology & Bioremediation": [
    "Understanding of Environmental Systems",
    "Bioremediation Techniques",
    "Environmental Monitoring",
    "Biodegradation",
    "Environmental Genomics"
  ],
  "Personalized Medicine & Genomic Data Analysis": [
    "Understanding of Genomics",
    "Genomic Data Analysis",
    "Personalized Therapy Strategies",
    "Pharmacogenomics",
    "Medical Genetics"
  ],
  "Medical Devices & Instrumentation": [
    "Medical Device Design",
    "Regulatory Requirements for Medical Devices",
    "Testing and Validation",
    "Bioinstrumentation",
    "Understanding of Medical Imaging Technologies"
  ],
  "Regulatory Affairs & Compliance in Pharma": [
    "Understanding of FDA/EMA Regulations",
    "Drug Approval Process",
    "Regulatory Submissions",
    "Post-Marketing Surveillance",
    "Compliance Reporting"
  ],
  "Patent Law & Intellectual Property in Biotech": [
    "Understanding of Patent Law",
    "Patent Application",
    "Technology Transfer",
    "Legal Writing",
    "Confidentiality Agreements"
  ],
  "Business Development & Sales in Biotech": [
    "Market Analysis",
    "Client Relationship Management",
    "Business Strategy Development",
    "Negotiation Skills",
    "Understanding of Biotech Industry"
  ],
  "Marketing & Advertising in Pharma": [
    "Market Research",
    "Digital Marketing",
    "SEO/SEM",
    "Product Marketing",
    "Understanding of Pharma Industry"
  ],
  "Bioentrepreneurship & Biotech Project Management": [
    "Business Plan Development",
    "Financial Planning",
    "Project Management",
    "Risk Assessment",
    "Understanding of Biotech Start-up Ecosystem"
  ],
  "Bioventure & Bioeconomy": [
    "Financial Analysis",
    "Market Analysis",
    "Understanding of Biotech/Pharma Industry",
    "Project Management",
    "Business Development Strategies"
  ]
};

export default function FieldsSection() {
  return (
    <section className="w-full max-w-7xl h-auto mx-auto mt-10 items-center">
      <div className="text-center text-4xl font-bold">
        What fields do we specialize in?
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 w-full items-center mt-5 justify-center content-center">
        {
          Object.keys(fields).map((field, index) => (
            <FieldGroup key={index} group={field} items={fields[field]} className="col-span-1 w-full h-full" />
          ))
        }
      </div>
    </section>
  )
}