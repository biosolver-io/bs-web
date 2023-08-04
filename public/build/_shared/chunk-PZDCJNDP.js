import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:~/db.server
var require_db = __commonJS({
  "empty-module:~/db.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/AccomplishmentCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AccomplishmentCard({
  accomplishment
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col border-[1px] border-gray-600 bg-gray-300 rounded-lg p-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-sm bg-black p-2 text-white w-auto", children: accomplishment.type }, void 0, false, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: accomplishment.category }, void 0, false, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccomplishmentCard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-bold text-lg", children: accomplishment.title }, void 0, false, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      accomplishment.publisher && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: accomplishment.publisher }, void 0, false, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 24,
        columnNumber: 41
      }, this),
      accomplishment.organization && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: accomplishment.organization }, void 0, false, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 29,
        columnNumber: 44
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccomplishmentCard.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/AccomplishmentCard.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccomplishmentCard.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/DegreeCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function DegreeCard({ degree }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-4 border-gray-500 border-solid rounded-md p-5 border-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold", children: degree.level }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.major }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.country }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.school }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.startYear }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.startMonth }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.stateOrCity }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    degree.accomplishments.map((accomplishment) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccomplishmentCard, { accomplishment }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/DegreeCard.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

export {
  AccomplishmentCard,
  DegreeCard,
  require_db
};
//# sourceMappingURL=/build/_shared/chunk-PZDCJNDP.js.map
