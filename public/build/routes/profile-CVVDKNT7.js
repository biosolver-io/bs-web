import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
import {
  cx,
  useUser
} from "/build/_shared/chunk-XIBNGEOM.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-SGSFRA2X.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:~/models/degree.server
var require_degree = __commonJS({
  "empty-module:~/models/degree.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/profile.tsx
var import_react2 = __toESM(require_react());
var import_degree = __toESM(require_degree());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var tabs = [
  { name: "Personal", href: "#", current: false },
  { name: "Education", href: "#", current: false },
  { name: "Work", href: "#", current: false },
  { name: "Skills", href: "#", current: true }
];
function Tabs({
  selectedTab = "Personal",
  changeTab
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "tabs", className: "sr-only", children: "Select a tab" }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          id: "tabs",
          name: "tabs",
          className: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          value: selectedTab,
          onChange: (event) => {
            event.preventDefault();
            changeTab(event.target.value);
          },
          children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "education", className: "block p-4 text-xl text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: tab.name }, tab.name, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this))
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.tsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "-mb-px flex w-full", "aria-label": "Tabs", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: cx(
          tab.name === selectedTab ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
          "w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium"
        ),
        onClick: () => changeTab(tab.name),
        children: tab.name
      },
      tab.name,
      false,
      {
        fileName: "app/routes/profile.tsx",
        lineNumber: 64,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function ProfilePage() {
  const data = useLoaderData();
  const user = useUser();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = (0, import_react2.useState)("Personal");
  const changeTab = (tab) => {
    setCurrentTab(tab);
    navigate(`${tab.toLowerCase()}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl w-full mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { selectedTab: currentTab, changeTab }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
export {
  ProfilePage as default
};
//# sourceMappingURL=/build/routes/profile-CVVDKNT7.js.map
