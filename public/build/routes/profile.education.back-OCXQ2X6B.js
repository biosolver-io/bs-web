import {
  DegreeCard,
  require_db
} from "/build/_shared/chunk-PZDCJNDP.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
import {
  useFieldArray,
  useForm
} from "/build/_shared/chunk-HTDZCSOQ.js";
import {
  countries_default
} from "/build/_shared/chunk-X7FIYIPL.js";
import {
  Form,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-YYAXLAGZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/profile.education.back.tsx
var import_react2 = __toESM(require_react());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function profile_education_back_default() {
  const [addingDegree, setAddingDegree] = (0, import_react2.useState)(false);
  const { degrees } = useLoaderData();
  const { register, watch, control, handleSubmit } = useForm();
  const isCurrentlyStudying = watch("currentlyStudying");
  const formRef = (0, import_react2.useRef)(null);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "accomplishments"
  });
  const submit = useSubmit();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-4xl mx-auto", children: [
    degrees.map((degree, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DegreeCard, { degree }, index, false, {
      fileName: "app/routes/profile.education.back.tsx",
      lineNumber: 56,
      columnNumber: 11
    }, this)),
    !addingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
      setAddingDegree(true);
    }, className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add Degree" }, void 0, false, {
      fileName: "app/routes/profile.education.back.tsx",
      lineNumber: 60,
      columnNumber: 26
    }, this),
    addingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", onSubmit: handleSubmit((data) => {
      console.log(data);
      submit(formRef.current);
    }), className: "mb-4 border-gray-500 border-solid rounded-md p-5 border-2", ref: formRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block mb-2 font-medium text-gray-700", children: "Degree" }, void 0, false, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          id: "name",
          ...register("name", { required: true }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select Degree" }, void 0, false, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "UG Diploma", children: "UG Diploma" }, void 0, false, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 82,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Bachelors", children: "Bachelors" }, void 0, false, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 83,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "PG Diploma", children: "PG Diploma" }, void 0, false, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Professional Degree", children: "Professional Degree" }, void 0, false, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 85,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Masters", children: "Masters" }, void 0, false, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 86,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "PhD or Doctoral Studies", children: "PhD or Doctoral Studies" }, void 0, false, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 76,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Field" }, void 0, false, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            id: "field",
            ...register("field", { required: true }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 94,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Country" }, void 0, false, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "select",
          {
            id: "country",
            ...register("country", { required: true }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select Country" }, void 0, false, {
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 111,
                columnNumber: 15
              }, this),
              countries_default.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: country.name, children: country.name }, country.code, false, {
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this))
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 106,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "university", className: "block mb-2 font-medium text gray-700", children: "University" }, void 0, false, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            id: "university",
            ...register("university", { required: true }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 124,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "started", className: "block mb-2 font-medium text-gray-700", children: "Start" }, void 0, false, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            id: "start",
            ...register("startDate", { required: true }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 136,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      !isCurrentlyStudying && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "end", className: "block mb-2 font-medium text-gray-700", children: "End" }, void 0, false, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            id: "end",
            ...register("endDate", { required: true }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 148,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 144,
        columnNumber: 36
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "checkbox",
            id: "currentlyStudying",
            ...register("currentlyStudying"),
            className: "mr-2"
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 157,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "currentlyStudying", className: "font-medium text-gray-700", children: "Currently Studying Here" }, void 0, false, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        fields.map((field, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "accomplishment", className: "block mb-2 font-medium text-gray-700", children: [
              "Accomplishment ",
              index + 1
            ] }, void 0, true, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 173,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "select",
              {
                id: "type",
                ...register(`accomplishments.${index}.type`, { required: true }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select Accomplishment" }, void 0, false, {
                    fileName: "app/routes/profile.education.back.tsx",
                    lineNumber: 181,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Thesis", children: "Thesis" }, void 0, false, {
                    fileName: "app/routes/profile.education.back.tsx",
                    lineNumber: 182,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Patent", children: "Patent" }, void 0, false, {
                    fileName: "app/routes/profile.education.back.tsx",
                    lineNumber: 183,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Published Work", children: "Published Work" }, void 0, false, {
                    fileName: "app/routes/profile.education.back.tsx",
                    lineNumber: 184,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 176,
                columnNumber: 21
              },
              this
            ),
            field.type === "Thesis" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, false, {
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 190,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  type: "text",
                  id: "title",
                  ...register(`accomplishments.${index}.title`, { required: true }),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/profile.education.back.tsx",
                  lineNumber: 193,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 189,
              columnNumber: 25
            }, this),
            field.type === "Patent" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, false, {
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 206,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  type: "text",
                  id: "title",
                  ...register(`accomplishments.${index}.title`, { required: true }),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/profile.education.back.tsx",
                  lineNumber: 209,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 205,
              columnNumber: 25
            }, this),
            field.type === "Published Work" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, false, {
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 222,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  type: "text",
                  id: "title",
                  ...register(`accomplishments.${index}.title`, { required: true }),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/profile.education.back.tsx",
                  lineNumber: 225,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 221,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 172,
            columnNumber: 19
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => append({}, {
          shouldFocus: true
        }), className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add an Accomplishment" }, void 0, false, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 238,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full text-center border-gray-400 rounded-md border-solid border-2 py-5", children: "Save" }, void 0, false, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 243,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.education.back.tsx",
      lineNumber: 67,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.education.back.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
export {
  profile_education_back_default as default
};
//# sourceMappingURL=/build/routes/profile.education.back-OCXQ2X6B.js.map
