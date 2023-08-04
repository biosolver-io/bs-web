import {
  cx,
  useOptionalUser
} from "/build/_shared/chunk-463C22YY.js";
import {
  Link
} from "/build/_shared/chunk-YYAXLAGZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/assets/images/categories/consulting.png
var consulting_default = "/build/_assets/consulting-6GVLD3FQ.png";

// app/assets/images/categories/experimentation.png
var experimentation_default = "/build/_assets/experimentation-HZMRQESG.png";

// app/assets/images/categories/analytics-reporting.png
var analytics_reporting_default = "/build/_assets/analytics-reporting-6SCWPECF.png";

// app/assets/images/categories/clinical-trial.png
var clinical_trial_default = "/build/_assets/clinical-trial-JRT6F7P2.png";

// app/layout/anon/GridTile.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function GridTile({
  className,
  imgSrc,
  imgAlt,
  title,
  description,
  linkSrc,
  linkText
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cx(className, "flex flex-col mx-auto justify-center items-center bg-white hover:border-2 hover:shadow-lg hover:scale-105 transition-all ease-in-out shadow-sm rounded-md hover:border-purple-500 hover:text-purple-500"), children: [
    imgSrc && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imgSrc, alt: imgAlt, className: "w-16 h-auto mb-5" }, void 0, false, {
      fileName: "app/layout/anon/GridTile.tsx",
      lineNumber: 25,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-xl", children: title }, void 0, false, {
      fileName: "app/layout/anon/GridTile.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: description }, void 0, false, {
      fileName: "app/layout/anon/GridTile.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: linkSrc, className: "mt-5", children: linkText }, void 0, false, {
      fileName: "app/layout/anon/GridTile.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/GridTile.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/layout/anon/home/CategorySection.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function CategoriesSection() {
  const categories = [
    {
      title: "Solver Registration",
      image: consulting_default,
      link: "/technical-consulting",
      description: "Solvers select job types, set hourly rates, and declare their top five hard skills. They submit academic and professional credentials, evidence of accomplishments, and any relevant work documentation."
    },
    {
      title: "Skill Identification",
      image: experimentation_default,
      link: "/experimental-troubleshooting",
      description: "We meticulously evaluate the provided information to assess their authenticity and assign scores for each hard and soft skill by combining educational and professional achievements and technical assessments."
    },
    {
      title: "Project Submission",
      image: analytics_reporting_default,
      link: "/data-collection-and-analysis",
      description: "Clients outline project specifics and set parameters like desired qualifications, experience level, and estimated hourly rate. Our AI further refines these inputs, identifying key hard and soft skills required for the project."
    },
    {
      title: "Skill Matching",
      image: clinical_trial_default,
      link: "/clinical-trial-coordination",
      description: "On project submission, our skill-matching algorithm shortlists the top suited Solvers. Clients are presented with this curated list, and upon selection, the project commences."
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "flex flex-wrap w-full h-full mx-auto mt-40 justify-center items-center content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full h-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-4xl text-center", children: "How it works" }, void 0, false, {
      fileName: "app/layout/anon/home/CategorySection.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center", children: "Connect with our Seekers." }, void 0, false, {
      fileName: "app/layout/anon/home/CategorySection.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center flex-wrap mt-5 gap-2 max-w-7xl", children: categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      GridTile,
      {
        className: "w-[500px] h-auto p-10",
        title: category.title,
        imgSrc: category.image,
        linkSrc: category.link,
        description: category.description
      },
      index,
      false,
      {
        fileName: "app/layout/anon/home/CategorySection.tsx",
        lineNumber: 44,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/layout/anon/home/CategorySection.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/home/CategorySection.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layout/anon/home/CategorySection.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/assets/images/hero/hero-circle.png
var hero_circle_default = "/build/_assets/hero-circle-KXCWELAH.png";

// app/assets/images/hero/hero-circle-2.png
var hero_circle_2_default = "/build/_assets/hero-circle-2-NAQIEYD6.png";

// app/assets/images/hero/hero-square.png
var hero_square_default = "/build/_assets/hero-square-EM2POTLU.png";

// app/assets/images/hero/hero-square-2.png
var hero_square_2_default = "/build/_assets/hero-square-2-IMF6Q7TS.png";

// app/assets/images/hero/hero-dot.png
var hero_dot_default = "/build/_assets/hero-dot-XYGSM2N4.png";

// app/assets/images/hero/hero-triangle.png
var hero_triangle_default = "/build/_assets/hero-triangle-BMPWFA4I.png";

// app/layout/anon/home/HeroDecoration.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function HeroDecoration() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "-z-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute right-[5%] top-[25%] opacity-10", src: hero_circle_default }, void 0, false, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute right-[10%] top-[50%] animate-bounce ", src: hero_circle_2_default }, void 0, false, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute left-[52%] bottom-[25%] animate-slide-x", src: hero_square_default }, void 0, false, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute left-1/2 top-1/2 animate-rotate-360", src: hero_square_2_default }, void 0, false, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute left-[60%] top-1/4 animate-slide-y", src: hero_dot_default }, void 0, false, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute left-[5%] top-1/3 animate-rotate-360", src: hero_triangle_default }, void 0, false, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/home/HeroDecoration.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/assets/images/hero/genetic_engineering.png
var genetic_engineering_default = "/build/_assets/genetic_engineering-EPYTMLFJ.png";

// app/layout/anon/home/HeroSection.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function HeroSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "flex flex-wrap w-full h-full mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HeroDecoration, {}, void 0, false, {
      fileName: "app/layout/anon/home/HeroSection.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full lg:w-1/2 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-start text-4xl my-auto font-semibold", children: "A global platform for remote freelancing work in Biotech & Pharma sectors" }, void 0, false, {
        fileName: "app/layout/anon/home/HeroSection.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/register", className: "bg-purple-600 hover:bg-purple-800 px-10 rounded-md text-white text-center py-5 mt-10 w-[300px]", children: "Join Us" }, void 0, false, {
        fileName: "app/layout/anon/home/HeroSection.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/anon/home/HeroSection.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "w-full lg:w-1/2", src: genetic_engineering_default, alt: "hero" }, void 0, false, {
      fileName: "app/layout/anon/home/HeroSection.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/home/HeroSection.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var meta = () => [{ title: "Biosolver" }];
function Index() {
  const user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeroSection, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full h-auto p-10 text-white rounded-lg mt-10 flex flex-row gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full lg:w-1/2 bg-[url('assets/images/backgrounds/expert.jpg')] bg-cover bg-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full h-full backdrop-brightness-50 p-10 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-4xl font-bold", children: "Be a Solver" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xl mt-5", children: "Are you a Biotech/Pharma expert or student interested in remote freelancing work?" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/register", className: "text-center w-full rounded bg-purple-500 hover:bg-purple-700 text-white py-5 mt-5", children: "Join as a Solver" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full lg:w-1/2 bg-[url('assets/images/backgrounds/company.jpg')] bg-cover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full h-full backdrop-brightness-50 p-10 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-4xl font-bold", children: "Hire a Solver" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xl mt-5", children: "Are you looking to hire a Biotech/Pharma expert or student for a remote freelancing work?" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/register", className: "text-center w-full rounded bg-purple-500 hover:bg-purple-700 text-white py-5 mt-5", children: "Join as a Seeker" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CategoriesSection, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-N7AIAAEP.js.map
