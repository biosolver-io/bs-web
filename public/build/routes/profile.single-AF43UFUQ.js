import {
  require_note
} from "/build/_shared/chunk-OLP4QJ4K.js";
import {
  assessmentFormats_default
} from "/build/_shared/chunk-YL3FPXEX.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
import {
  countries_default
} from "/build/_shared/chunk-X7FIYIPL.js";
import {
  Form
} from "/build/_shared/chunk-YYAXLAGZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/profile.single.tsx
var import_react2 = __toESM(require_react());
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function profile_single_default() {
  const [degrees, setDegrees] = (0, import_react2.useState)([]);
  const addDegree = () => {
    setDegrees([
      ...degrees,
      {
        type: "",
        university: "",
        field: "",
        country: "",
        stateOrCity: "",
        startDate: "",
        endDate: "",
        currentlyStudying: false,
        assessmentFormat: "",
        marksOrGrade: "",
        hasEca: false,
        ecaAuthority: "",
        saved: false
      }
    ]);
  };
  const markAsSaved = (index) => {
    degrees[index].saved = true;
    setDegrees([
      ...degrees
    ]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/profile/single", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-col space-y-4 mt-5", children: [
    degrees.map((degree, index) => {
      return degree.saved === true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.type }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.university }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.field }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.country }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.stateOrCity }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.startDate }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.endDate }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.assessmentFormat }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.marksOrGrade }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.hasEca }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: degree.ecaAuthority }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          setDegrees([
            ...degrees.slice(0, index),
            ...degrees.slice(index + 1)
          ]);
        }, className: "w-full bg-red-500 text-white p-3 rounded-md", children: "Delete" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 102,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-5 rounded-md border-2 hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block mb-2 font-medium text-gray-700", children: "Degree" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 110,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "select",
            {
              name: "education.type",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              value: degree.type,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "None", children: "Select Degree" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 118,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "UG Diploma", children: "UG Diploma" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 119,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Bachelors", children: "Bachelors" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 120,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "PG Diploma", children: "PG Diploma" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 121,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Professional Degree", children: "Professional Degree" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 122,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Masters", children: "Masters" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 123,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "PhD or Doctoral Studies", children: "PhD or Doctoral Studies" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 124,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 113,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "university", className: "block mb-2 font-medium text gray-700", children: "University" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              name: "education.university",
              value: degree.university,
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            false,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 129,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Field" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 135,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              name: "education.field",
              value: degree.field,
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            false,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 138,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Country" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "select",
            {
              name: "education.country",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              value: degree.country,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select Country" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 152,
                  columnNumber: 21
                }, this),
                countries_default.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: country.name, children: country.name }, country.code, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 155,
                  columnNumber: 25
                }, this))
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 147,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "State/City" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 159,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              name: "education.stateOrCity",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            false,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 162,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "started", className: "block mb-2 font-medium text-gray-700", children: "Start" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 167,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "date",
              name: "education.startDate",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            false,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 170,
              columnNumber: 19
            },
            this
          ),
          !degree.currentlyStudying && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "end", className: "block mb-2 font-medium text-gray-700", children: "End" }, void 0, false, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 176,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "date",
                name: "education.endDate",
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              },
              void 0,
              false,
              {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 179,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 175,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Assessment Format" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 185,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "select",
            {
              name: "education.assessmentFormat",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Choose Format" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 192,
                  columnNumber: 21
                }, this),
                assessmentFormats_default.map((format) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: format, children: format }, format, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 195,
                  columnNumber: 25
                }, this))
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 188,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Marks/Grade" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 199,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              name: "education.marksOrGrade",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            false,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 202,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Do you have an ECA Certificate?" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 207,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "select",
            {
              name: "education.hasEca",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "yes", children: "Yes" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 214,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "no", children: "No" }, void 0, false, {
                  fileName: "app/routes/profile.single.tsx",
                  lineNumber: 215,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 210,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "ECA Authority" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 217,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              name: "education.ecaAuthority",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            false,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 220,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            markAsSaved(index);
          }, className: "w-full bg-blue-500 text-white p-3 rounded-md", children: "Save" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 225,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-5 rounded-md border-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block mb-2 font-medium text-gray-700", children: "Degree" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 232,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "select",
          {
            name: "education.type",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "None", children: "Select Degree" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 239,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "UG Diploma", children: "UG Diploma" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 240,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Bachelors", children: "Bachelors" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 241,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "PG Diploma", children: "PG Diploma" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 242,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Professional Degree", children: "Professional Degree" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 243,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Masters", children: "Masters" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 244,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "PhD or Doctoral Studies", children: "PhD or Doctoral Studies" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 245,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 235,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "university", className: "block mb-2 font-medium text gray-700", children: "University" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 247,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.university",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 250,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Field" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 255,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.field",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 258,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Country" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 263,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "select",
          {
            name: "education.country",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select Country" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 270,
                columnNumber: 19
              }, this),
              countries_default.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: country.name, children: country.name }, country.code, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 273,
                columnNumber: 23
              }, this))
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 266,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "State/City" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 277,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.stateOrCity",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 280,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "started", className: "block mb-2 font-medium text-gray-700", children: "Start" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 285,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "date",
            name: "education.startDate",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 288,
            columnNumber: 17
          },
          this
        ),
        !degree.currentlyStudying && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "end", className: "block mb-2 font-medium text-gray-700", children: "End" }, void 0, false, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 294,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "date",
              name: "education.endDate",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            false,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 297,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 293,
          columnNumber: 47
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Assessment Format" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 303,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "select",
          {
            name: "education.assessmentFormat",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Choose Format" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 310,
                columnNumber: 19
              }, this),
              assessmentFormats_default.map((format) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: format, children: format }, format, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 313,
                columnNumber: 23
              }, this))
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 306,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Marks/Grade" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 317,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.marksOrGrade",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 320,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Do you have an ECA Certificate?" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 325,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "select",
          {
            name: "education.hasEca",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "yes", children: "Yes" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 332,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "no", children: "No" }, void 0, false, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 333,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 328,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "ECA Authority" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 335,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.ecaAuthority",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 338,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          markAsSaved(index);
        }, className: "w-full bg-blue-500 text-white p-3 rounded-md", children: "Save" }, void 0, false, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 343,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 231,
        columnNumber: 15
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
      addDegree();
    }, className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add Degree" }, void 0, false, {
      fileName: "app/routes/profile.single.tsx",
      lineNumber: 350,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.single.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.single.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
export {
  profile_single_default as default
};
//# sourceMappingURL=/build/routes/profile.single-AF43UFUQ.js.map
