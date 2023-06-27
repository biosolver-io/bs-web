import {
  require_user
} from "/build/_shared/chunk-CMWXK6I4.js";
import {
  base_default
} from "/build/_shared/chunk-JVNGUFS4.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
import "/build/_shared/chunk-XIBNGEOM.js";
import {
  Form,
  Link,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-SGSFRA2X.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/login.tsx
var import_react2 = __toESM(require_react());
var import_user = __toESM(require_user());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = useActionData();
  const emailRef = (0, import_react2.useRef)(null);
  const passwordRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-16 w-16 mx-auto", src: base_default, alt: "BioSolver Logo" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700",
            children: "Email address"
          },
          void 0,
          false,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 89,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: emailRef,
              id: "email",
              required: true,
              autoFocus: true,
              name: "email",
              type: "email",
              autoComplete: "email",
              "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
              "aria-describedby": "email-error",
              className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 96,
              columnNumber: 17
            },
            this
          ),
          ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-700",
            children: "Password"
          },
          void 0,
          false,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 117,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "password",
              ref: passwordRef,
              name: "password",
              type: "password",
              autoComplete: "current-password",
              "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
              "aria-describedby": "password-error",
              className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 124,
              columnNumber: 17
            },
            this
          ),
          ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 135,
            columnNumber: 19
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
          children: "Log in"
        },
        void 0,
        false,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 143,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "remember",
              name: "remember",
              type: "checkbox",
              className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 151,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "label",
            {
              htmlFor: "remember",
              className: "ml-2 block text-sm text-gray-900",
              children: "Remember me"
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 157,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              className: "text-blue-500 underline",
              to: {
                pathname: "/register",
                search: searchParams.toString()
              },
              children: "Sign up"
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 166,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}
export {
  LoginPage as default,
  meta
};
//# sourceMappingURL=/build/routes/login-IZLXEWI3.js.map
