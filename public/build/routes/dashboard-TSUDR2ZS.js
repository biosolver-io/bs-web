import {
  base_default
} from "/build/_shared/chunk-JVNGUFS4.js";
import {
  Link,
  Outlet
} from "/build/_shared/chunk-SGSFRA2X.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/AppHeader.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AppHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mx-auto h-auto flex flex-row items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: base_default, alt: "logo", className: "w-20 h-auto" }, void 0, false, {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/matches", children: "Your Matches" }, void 0, false, {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/profile", children: "Profile" }, void 0, false, {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AppHeader.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppHeader, {}, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-TSUDR2ZS.js.map
