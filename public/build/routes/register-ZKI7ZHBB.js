import {
  require_user
} from "/build/_shared/chunk-CMWXK6I4.js";
import "/build/_shared/chunk-XIBNGEOM.js";
import {
  FaGoogle,
  FaLinkedin
} from "/build/_shared/chunk-RVGUQ7OK.js";
import {
  base_default
} from "/build/_shared/chunk-JVNGUFS4.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:~/models/userRole.server
var require_userRole = __commonJS({
  "empty-module:~/models/userRole.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/register.tsx
var import_react2 = __toESM(require_react());
var import_user = __toESM(require_user());
var import_userRole = __toESM(require_userRole());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [{ title: "Sign Up" }];
function Register() {
  var _a, _b, _c, _d, _e;
  const [searchParams] = useSearchParams();
  const redirectTo = (_a = searchParams.get("redirectTo")) != null ? _a : void 0;
  const actionData = useActionData();
  const emailRef = (0, import_react2.useRef)(null);
  const passwordRef = (0, import_react2.useRef)(null);
  const rolesRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-1 justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-sm lg:w-96", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full items-center text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-16 w-16 mx-auto", src: base_default, alt: "BioSolver Logo" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 100,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Create your account" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-gray-500", children: [
        "Already a member?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "font-semibold text-purple-600 hover:text-purple-500", children: "Sign In" }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 107,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/register.tsx",
        lineNumber: 105,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
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
              fileName: "app/routes/register.tsx",
              lineNumber: 117,
              columnNumber: 21
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
                "aria-invalid": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) ? true : void 0,
                "aria-describedby": "email-error",
                className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
              },
              void 0,
              false,
              {
                fileName: "app/routes/register.tsx",
                lineNumber: 124,
                columnNumber: 23
              },
              this
            ),
            ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.email) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 137,
              columnNumber: 25
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/register.tsx",
            lineNumber: 123,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 116,
          columnNumber: 19
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
              fileName: "app/routes/register.tsx",
              lineNumber: 145,
              columnNumber: 21
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
                autoComplete: "new-password",
                "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) ? true : void 0,
                "aria-describedby": "password-error",
                className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
              },
              void 0,
              false,
              {
                fileName: "app/routes/register.tsx",
                lineNumber: 152,
                columnNumber: 23
              },
              this
            ),
            ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 163,
              columnNumber: 25
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/register.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 144,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Roles" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 171,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-start", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  id: "role-solver",
                  "aria-describedby": "role-solver-description",
                  name: "roles",
                  value: "solver",
                  type: "checkbox",
                  className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 175,
                  columnNumber: 27
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/register.tsx",
                lineNumber: 174,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 text-sm leading-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "role-solver", className: "font-medium text-gray-900", children: "Solver" }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 185,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { id: "role-solver-description", className: "text-gray-500", children: "I am an expert/student looking for work." }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 188,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/register.tsx",
                lineNumber: 184,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/register.tsx",
              lineNumber: 173,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-start", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  id: "role-seeker",
                  "aria-describedby": "role-seeker-description",
                  name: "roles",
                  value: "seeker",
                  type: "checkbox",
                  className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 195,
                  columnNumber: 27
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/register.tsx",
                lineNumber: 194,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 text-sm leading-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "role-seeker", className: "font-medium text-gray-900", children: "Seeker" }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 205,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { id: "role-seeker-description", className: "text-gray-500", children: "I am looking to hire a Freelancer." }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 208,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/register.tsx",
                lineNumber: 204,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/register.tsx",
              lineNumber: 193,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-start", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  id: "role-referrer",
                  "aria-describedby": "role-referrer-description",
                  name: "roles",
                  value: "referrer",
                  type: "checkbox",
                  className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 215,
                  columnNumber: 27
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/register.tsx",
                lineNumber: 214,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 text-sm leading-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "role-referrer", className: "font-medium text-gray-900", children: "Referral Partner" }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 225,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { id: "role-referrer-description", className: "text-gray-500", children: "I can spread the word." }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 228,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/register.tsx",
                lineNumber: 224,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/register.tsx",
              lineNumber: 213,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/register.tsx",
            lineNumber: 172,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 170,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 236,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Create Account"
          },
          void 0,
          false,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 237,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              className: "text-blue-500 underline",
              to: {
                pathname: "/login",
                search: searchParams.toString()
              },
              children: "Log in"
            },
            void 0,
            false,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 246,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 244,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 243,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/register.tsx",
        lineNumber: 115,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 114,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-200" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 263,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 262,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm font-medium leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-white px-6 text-gray-900", children: "Or continue with" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 266,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 265,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 261,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: "#",
              className: "flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-black bordered border-2 border-black",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaGoogle, { className: "h-5 w-5" }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 275,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold leading-6", children: "Google" }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 276,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 271,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: "#",
              className: "flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-black bordered border-2 border-black",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaLinkedin, { className: "h-5 w-5" }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 283,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold leading-6", children: "LinkedIn" }, void 0, false, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 284,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 279,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 270,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/register.tsx",
        lineNumber: 260,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 113,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/register.tsx",
    lineNumber: 97,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/register.tsx",
    lineNumber: 96,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/register.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/register.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
export {
  Register as default,
  meta
};
//# sourceMappingURL=/build/routes/register-ZKI7ZHBB.js.map
