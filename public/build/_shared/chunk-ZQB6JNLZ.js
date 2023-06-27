import {
  cx
} from "/build/_shared/chunk-XIBNGEOM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/layout/anon/ListHighlight.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ListHighlight({
  title,
  subtitle,
  description,
  bullets = [],
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cx(className), children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold", children: title }, void 0, false, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this),
    subtitle && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-semibold", children: subtitle }, void 0, false, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 19,
      columnNumber: 20
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg", children: description }, void 0, false, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 20,
      columnNumber: 23
    }, this),
    bullets.map((bullet, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 bg-purple-600 rounded-full mr-2" }, void 0, false, {
        fileName: "app/layout/anon/ListHighlight.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg", children: bullet }, void 0, false, {
        fileName: "app/layout/anon/ListHighlight.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this))
  ] }, void 0, true, {
    fileName: "app/layout/anon/ListHighlight.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/layout/anon/SimpleHighlight.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SimpleHighlight({
  title,
  subtitle,
  description,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cx(className), children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl font-bold", children: title }, void 0, false, {
      fileName: "app/layout/anon/SimpleHighlight.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this),
    subtitle && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-2xl font-semibold", children: subtitle }, void 0, false, {
      fileName: "app/layout/anon/SimpleHighlight.tsx",
      lineNumber: 17,
      columnNumber: 20
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-lg mt-5", children: description }, void 0, false, {
      fileName: "app/layout/anon/SimpleHighlight.tsx",
      lineNumber: 18,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/SimpleHighlight.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/layout/anon/common/FieldGroup.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function FieldGroup({
  group,
  items,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: cx("rounded-md border-2 border-black items-center", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center text-xl font-semibold p-5", children: group }, void 0, false, {
      fileName: "app/layout/anon/common/FieldGroup.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-wrap justify-center", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white shadow-md rounded-md px-5 py-2 mx-5 my-2 flex items-center", children: item }, index, false, {
      fileName: "app/layout/anon/common/FieldGroup.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/layout/anon/common/FieldGroup.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/common/FieldGroup.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/layout/anon/common/FieldsSection.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var fields = {
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
function FieldsSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "w-full max-w-7xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center text-4xl font-bold", children: "What fields do we specialize in?" }, void 0, false, {
      fileName: "app/layout/anon/common/FieldsSection.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-2 w-full items-center mt-5 justify-center content-center", children: Object.keys(fields).map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FieldGroup, { group: field, items: fields[field], className: "col-span-1 w-full h-full" }, index, false, {
      fileName: "app/layout/anon/common/FieldsSection.tsx",
      lineNumber: 183,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/layout/anon/common/FieldsSection.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/common/FieldsSection.tsx",
    lineNumber: 176,
    columnNumber: 5
  }, this);
}

// app/layout/anon/common/ServicesSection.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var services = [
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
];
function ServicesSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "flex flex-col w-full max-w-6xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-center text-4xl font-bold", children: "What services do we offer?" }, void 0, false, {
      fileName: "app/layout/anon/common/ServicesSection.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full flex flex-wrap justify-center", children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white shadow-md rounded-md px-5 py-2 mx-5 my-2 flex items-center", children: service }, index, false, {
      fileName: "app/layout/anon/common/ServicesSection.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/layout/anon/common/ServicesSection.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/common/ServicesSection.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

export {
  ListHighlight,
  SimpleHighlight,
  FieldsSection,
  ServicesSection
};
//# sourceMappingURL=/build/_shared/chunk-ZQB6JNLZ.js.map
