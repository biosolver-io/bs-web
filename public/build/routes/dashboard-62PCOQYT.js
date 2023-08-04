import {
  require_user
} from "/build/_shared/chunk-CMWXK6I4.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-YYAXLAGZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/dashboard.tsx
var import_user = __toESM(require_user());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Dashboard() {
  const loaderData = useLoaderData();
  const { user } = loaderData;
  const profileStrength = "Incomplete";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl text-gray-600", children: [
        "Welcome back",
        ", " + (user == null ? void 0 : user.fullName)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 w-full flow-root p-5 bordered border-[1px] rounded-sm border-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "float-left", children: [
          "Profile Strength: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-purple-600", children: profileStrength }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 25,
            columnNumber: 31
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-purple-600", children: "Please complete your talent profile to enable all the features" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/profile", className: "float-right px-5 py-2 bg-purple-600 text-white rounded-sm hover:bg-purple-800", children: "Edit Profile" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/4", children: " Right" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-62PCOQYT.js.map