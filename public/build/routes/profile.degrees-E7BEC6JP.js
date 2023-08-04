import {
  AccomplishmentForm,
  LabelledDropdown,
  LabelledTextInput,
  months_default,
  years_default,
  yesNos_default
} from "/build/_shared/chunk-3NSWF6JJ.js";
import {
  assessmentFormats_default
} from "/build/_shared/chunk-YL3FPXEX.js";
import "/build/_shared/chunk-PI6H7ZJD.js";
import "/build/_shared/chunk-KCLKX6RL.js";
import "/build/_shared/chunk-YUUU2RAQ.js";
import {
  AccomplishmentCard,
  DegreeCard,
  require_db
} from "/build/_shared/chunk-PZDCJNDP.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
import {
  countries_default
} from "/build/_shared/chunk-X7FIYIPL.js";
import {
  useFetcher,
  useLoaderData,
  useSearchParams
} from "/build/_shared/chunk-YYAXLAGZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/profile.degrees.tsx
var import_react2 = __toESM(require_react());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function EducationDegrees() {
  var _a;
  const fetcher = useFetcher();
  const { degrees } = useLoaderData();
  const [searchParams] = useSearchParams();
  const [isAddingAccomplishment, setIsAddingAccomplishment] = (0, import_react2.useState)(false);
  const [isAddingDegree, setIsAddingDegree] = (0, import_react2.useState)(false);
  const [degreeBeingAdded, setDegreeBeingAdded] = (0, import_react2.useState)(null);
  const [accomplishmentsForDegreeBeingAdded, setAccomplishmentsForDegreeBeingAdded] = (0, import_react2.useState)([]);
  console.log(fetcher.data);
  (0, import_react2.useEffect)(() => {
    if (searchParams.get("addAccomplishment")) {
      setIsAddingAccomplishment(true);
    }
  }, [searchParams]);
  (0, import_react2.useEffect)(() => {
    var _a2, _b, _c, _d;
    setIsAddingDegree(((_b = (_a2 = fetcher.data) == null ? void 0 : _a2.newDegree) == null ? void 0 : _b.id) ? true : false);
    setDegreeBeingAdded((_d = (_c = fetcher.data) == null ? void 0 : _c.newDegree) == null ? void 0 : _d.id);
  }, [fetcher.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
    degrees.map((degree) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DegreeCard, { degree }, degree.id, false, {
      fileName: "app/routes/profile.degrees.tsx",
      lineNumber: 105,
      columnNumber: 31
    }, this)),
    isAddingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { action: "/profile/degrees", method: "post", className: "p-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "degreeId", type: "hidden", value: (_a = fetcher.data) == null ? void 0 : _a.newDegree.id }, void 0, false, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        LabelledDropdown,
        {
          name: "type",
          label: "Degree",
          options: [
            { value: "UG Diploma", label: "UG Diploma", name: "UG Diploma" },
            { value: "Bachelors", label: "Bachelors", name: "Bachelors" },
            { value: "PG Diploma", label: "PG Diploma", name: "PG Diploma" },
            { value: "Professional Degree", label: "Professional Degree", name: "Professional Degree" },
            { value: "Masters", label: "Masters", name: "Masters" },
            { value: "PhD or Doctoral Studies", label: "PhD or Doctoral Studies", name: "PhD or Doctoral Studies" }
          ],
          className: "w-full"
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 110,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        LabelledTextInput,
        {
          name: "school",
          label: "University/College",
          placeholder: "Enter the name of your university/college",
          className: "w-full mt-5"
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 123,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        LabelledTextInput,
        {
          name: "major",
          label: "Subject/Major",
          placeholder: "Enter your field of study",
          className: "w-full mt-5"
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 129,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        LabelledDropdown,
        {
          name: "country",
          label: "Country",
          options: countries_default.map((country) => ({ value: country.code, label: country.name, name: country.name })),
          className: "w-full mt-5",
          placeholder: "Select Country"
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 135,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        LabelledTextInput,
        {
          name: "cityOrState",
          label: "City/State",
          placeholder: "Enter the city/state of your university/college",
          className: "w-full mt-5"
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 142,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Started" }, void 0, false, {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          LabelledDropdown,
          {
            name: "startYear",
            placeholder: "Year",
            className: "w-full md:w-1/2",
            options: years_default.map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.degrees.tsx",
            lineNumber: 152,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          LabelledDropdown,
          {
            name: "startMonth",
            placeholder: "Month",
            className: "w-full md:w-1/2",
            options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.degrees.tsx",
            lineNumber: 160,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Ended" }, void 0, false, {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          LabelledDropdown,
          {
            name: "endYear",
            placeholder: "Year",
            className: "w-full md:w-1/2",
            options: Array.from({ length: 50 }, (_, i) => i + 1970).map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.degrees.tsx",
            lineNumber: 173,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          LabelledDropdown,
          {
            name: "endMonth",
            placeholder: "Month",
            className: "w-full md:w-1/2",
            options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.degrees.tsx",
            lineNumber: 181,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        LabelledDropdown,
        {
          name: "assessmentFormat",
          label: "Assessment Format",
          placeholder: "Choose the format of your assessment",
          className: "w-full mt-5",
          options: assessmentFormats_default.map((format) => ({ value: format, label: format, name: format }))
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 190,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        LabelledTextInput,
        {
          name: "grade",
          label: "Marks/Grade",
          placeholder: "Enter your final marks/grade",
          className: "w-full mt-5"
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 199,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        LabelledDropdown,
        {
          name: "hasEca",
          label: "Do you have an ECA Certificate?",
          className: "w-full mt-5",
          options: yesNos_default.map((yesNo) => ({ value: yesNo, label: yesNo, name: yesNo }))
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 205,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        LabelledTextInput,
        {
          name: "ecaAuthority",
          label: "ECA Authority",
          placeholder: "Enter the name of the authority that issued your ECA certificate",
          className: "w-full mt-5"
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 213,
          columnNumber: 11
        },
        this
      ),
      accomplishmentsForDegreeBeingAdded.map((accomplishment) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccomplishmentCard, { accomplishment }, accomplishment.id, false, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 220,
        columnNumber: 70
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setIsAddingAccomplishment(true), className: "mt-5 text-blue-500", children: "Add Accomplishment" }, void 0, false, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "action", type: "hidden", value: "saveDegree" }, void 0, false, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 223,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", children: "Save" }, void 0, false, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.degrees.tsx",
      lineNumber: 108,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { action: "/profile/degrees", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "action", type: "hidden", value: "addDegree" }, void 0, false, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 229,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", disabled: isAddingDegree, children: "Add Degree" }, void 0, false, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 230,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.degrees.tsx",
      lineNumber: 228,
      columnNumber: 9
    }, this),
    degreeBeingAdded && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccomplishmentForm, { action: `/profile/degrees/${degreeBeingAdded}`, open: isAddingAccomplishment, setOpen: setIsAddingAccomplishment, onSubmit: (accomplishments) => {
      setAccomplishmentsForDegreeBeingAdded(accomplishments);
    } }, void 0, false, {
      fileName: "app/routes/profile.degrees.tsx",
      lineNumber: 234,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.degrees.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
export {
  EducationDegrees as default
};
//# sourceMappingURL=/build/routes/profile.degrees-E7BEC6JP.js.map
