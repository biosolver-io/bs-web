var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:D:\spaces\BioSolver\code\bs-web\node_modules\@remix-run\css-bundle\dist\index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:D:\\spaces\\BioSolver\\code\\bs-web\\node_modules\\@remix-run\\css-bundle\\dist\\index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// app/routes/profile.education.degree.new.tsx
var require_profile_education_degree_new = __commonJS({
  "app/routes/profile.education.degree.new.tsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_dist()), import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(fullName, email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      fullName,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function updateUserById(id, data) {
  return prisma.user.update({ where: { id }, data });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JFJUTL3U.css";

// app/layout/anon/Header.tsx
var import_react2 = require("react"), import_react3 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_solid = require("@heroicons/react/20/solid");

// app/assets/images/logos/base.png
var base_default = "/build/_assets/base-7R6CFO3B.png";

// app/layout/anon/Header.tsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), callsToAction = [
  { name: "Watch demo", href: "#", icon: import_solid.PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: import_solid.PhoneIcon }
], company = [
  { name: "About us", href: "#", description: "Learn more about our company values and mission to empower others" },
  { name: "Careers", href: "#", description: "Looking for you next career opportunity? See all of our open positions" },
  {
    name: "Support",
    href: "contact-us",
    description: "Get in touch with our dedicated support team or reach out on our community forums"
  },
  { name: "Blog", href: "#", description: "Read our latest announcements and get perspectives from our team" }
];
function Header() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react2.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8", "aria-label": "Global", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { to: "/", className: "-m-1.5 p-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "BioSolver" }, void 0, !1, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "h-16 w-auto", src: base_default, alt: "BioSolver Logo" }, void 0, !1, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          type: "button",
          className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
          onClick: () => setMobileMenuOpen(!0),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 47,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Popover.Group, { className: "hidden lg:flex lg:gap-x-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { to: "/for-solvers", className: "text-sm font-semibold leading-6 text-gray-900", children: "For Solvers" }, void 0, !1, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { to: "/for-seekers", className: "text-sm font-semibold leading-6 text-gray-900", children: "For Seekers" }, void 0, !1, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Popover, { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Popover.Button, { className: "flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900", children: [
            "Company",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ChevronDownIcon, { className: "h-5 w-5 flex-none text-gray-400", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.Transition,
            {
              as: import_react2.Fragment,
              enter: "transition ease-out duration-200",
              enterFrom: "opacity-0 translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              leave: "transition ease-in duration-150",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 translate-y-1",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Popover.Panel, { className: "absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5", children: company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative rounded-lg p-4 hover:bg-gray-50", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "block text-sm font-semibold leading-6 text-gray-900", children: [
                  item.name,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute inset-0" }, void 0, !1, {
                    fileName: "app/layout/anon/Header.tsx",
                    lineNumber: 135,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 133,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: item.description }, void 0, !1, {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 137,
                  columnNumber: 21
                }, this)
              ] }, item.name, !0, {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 132,
                columnNumber: 19
              }, this)) }, void 0, !1, {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 130,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 121,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { to: "/login", className: "text-sm font-semibold leading-6 text-gray-900", children: [
        "Log in ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 146,
          columnNumber: 20
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layout/anon/Header.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Dialog, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 z-10" }, void 0, !1, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Dialog.Panel, { className: "fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "-m-1.5 p-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Your Company" }, void 0, !1, {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 156,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "img",
                {
                  className: "h-8 w-auto",
                  src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                  alt: ""
                },
                void 0,
                !1,
                {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 157,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 155,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                type: "button",
                className: "-m-2.5 rounded-md p-2.5 text-gray-700",
                onClick: () => setMobileMenuOpen(!1),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, !1, {
                    fileName: "app/layout/anon/Header.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/layout/anon/Header.tsx",
                    lineNumber: 169,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 163,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 154,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2 py-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                import_react4.Link,
                {
                  to: "/for-seekers",
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  children: "For Seekers"
                },
                void 0,
                !1,
                {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 189,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                import_react4.Link,
                {
                  to: "/for-solvers",
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  children: "For Solvers"
                },
                void 0,
                !1,
                {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 194,
                  columnNumber: 19
                },
                this
              ),
              company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "a",
                {
                  href: item.href,
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  children: item.name
                },
                item.name,
                !1,
                {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 201,
                  columnNumber: 21
                },
                this
              ))
            ] }, void 0, !0, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 188,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react4.Link,
              {
                to: "/login",
                className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                children: "Log In"
              },
              void 0,
              !1,
              {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 211,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 210,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center", children: callsToAction.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: item.href,
            className: "p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100",
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 220,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layout/anon/Header.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/Header.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/layout/anon/Footer.tsx
var import_fa = require("react-icons/fa"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), navigation = {
  platform: [
    { name: "For Solvers", href: "for-solvers" },
    { name: "For Seekers", href: "for-seekers" }
  ],
  support: [
    { name: "Contact Us", href: "contact-us" }
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" }
  ],
  legal: [
    { name: "Privacy", href: "privacy-policy" },
    { name: "Terms", href: "terms-and-conditions" }
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/bio-solver/",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_fa.FaLinkedin, {}, void 0, !1, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/biosolverio/100090926217577/",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_fa.FaFacebook, {}, void 0, !1, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)
    }
  ]
};
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "bg-white", "aria-labelledby": "footer-heading", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }, void 0, !1, {
      fileName: "app/layout/anon/Footer.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 gap-8 xl:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Platform" }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 48,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.platform.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 52,
                columnNumber: 23
              }, this) }, item.name, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 51,
                columnNumber: 21
              }, this)) }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 49,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Support" }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.support.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 64,
                columnNumber: 23
              }, this) }, item.name, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 63,
                columnNumber: 21
              }, this)) }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Company" }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 74,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 78,
                columnNumber: 23
              }, this) }, item.name, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 77,
                columnNumber: 21
              }, this)) }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 75,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Legal" }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 86,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.legal.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 90,
                columnNumber: 23
              }, this) }, item.name, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 89,
                columnNumber: 21
              }, this)) }, void 0, !1, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 85,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 xl:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Subscribe to our newsletter" }, void 0, !1, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-gray-600", children: "The latest news, articles, and resources, sent to your inbox weekly." }, void 0, !1, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { action: "https://app.formzillion.com/f/nNcNse-I", className: "mt-6 sm:flex sm:max-w-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, !1, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                type: "email",
                name: "email-address",
                id: "email-address",
                autoComplete: "email",
                required: !0,
                className: "w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full",
                placeholder: "Enter your email"
              },
              void 0,
              !1,
              {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 108,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "flex w-full items-center justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",
                children: "Subscribe"
              },
              void 0,
              !1,
              {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 118,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 117,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-6 md:order-2", children: navigation.social.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: item.name }, void 0, !1, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(item.icon.type, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this)
        ] }, item.name, !0, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0", children: "\xA9 2023 BIOSOLVER Corp. All rights reserved." }, void 0, !1, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layout/anon/Footer.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/Footer.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_react6 = require("@headlessui/react"), import_outline2 = require("@heroicons/react/24/outline"), import_react7 = require("react");

// app/assets/images/user/User_128px.png
var User_128px_default = "/build/_assets/User_128px-IWZ4Z5HH.png";

// app/root.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
], loader = async ({ request }) => (console.log({ user: await getUser(request) }), (0, import_node3.json)({ user: await getUser(request) })), navigation2 = [
  { name: "Dashboard", href: "dashboard", icon: import_outline2.HomeIcon, current: !0 },
  { name: "Your Matches", href: "matches", icon: import_outline2.UsersIcon, current: !1 },
  { name: "Messages", href: "messages", icon: import_outline2.FolderIcon, current: !1 },
  { name: "Calendar", href: "calendar", icon: import_outline2.CalendarIcon, current: !1 },
  { name: "Documents", href: "documents", icon: import_outline2.DocumentDuplicateIcon, current: !1 },
  { name: "Reports", href: "reports", icon: import_outline2.ChartPieIcon, current: !1 }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function App() {
  let { user } = (0, import_react5.useLoaderData)(), [sidebarOpen, setSidebarOpen] = (0, import_react7.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "w-full h-full font-display", children: [
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full h-auto mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Transition.Root, { show: sidebarOpen, as: import_react7.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Dialog, { as: "div", className: "relative z-50 lg:hidden", onClose: setSidebarOpen, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react6.Transition.Child,
            {
              as: import_react7.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fixed inset-0 bg-gray-900/80" }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 87,
                columnNumber: 23
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 78,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fixed inset-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react6.Transition.Child,
            {
              as: import_react7.Fragment,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "-translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "-translate-x-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Dialog.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_react6.Transition.Child,
                  {
                    as: import_react7.Fragment,
                    enter: "ease-in-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5", onClick: () => setSidebarOpen(!1), children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Close sidebar" }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 112,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline2.XMarkIcon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 113,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 111,
                      columnNumber: 31
                    }, this) }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 110,
                      columnNumber: 29
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 101,
                    columnNumber: 27
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    "img",
                    {
                      className: "h-8 w-auto",
                      src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                      alt: "Your Company"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.tsx",
                      lineNumber: 120,
                      columnNumber: 31
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 119,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation2.map(
                      (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        "a",
                        {
                          href: item.href,
                          className: classNames(
                            item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                              item.icon,
                              {
                                className: classNames(
                                  item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600",
                                  "h-6 w-6 shrink-0"
                                ),
                                "aria-hidden": "true"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/root.tsx",
                                lineNumber: 141,
                                columnNumber: 43
                              },
                              this
                            ),
                            item.name
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 132,
                          columnNumber: 41
                        },
                        this
                      ) }, item.name, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 131,
                        columnNumber: 35
                      }, this)
                    ) }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 129,
                      columnNumber: 35
                    }, this) }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 128,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      "a",
                      {
                        href: "#",
                        className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                            import_outline2.Cog6ToothIcon,
                            {
                              className: "h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/root.tsx",
                              lineNumber: 189,
                              columnNumber: 37
                            },
                            this
                          ),
                          "Settings"
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/root.tsx",
                        lineNumber: 185,
                        columnNumber: 35
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 184,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/root.tsx",
                    lineNumber: 127,
                    columnNumber: 31
                  }, this) }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 126,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 118,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 100,
                columnNumber: 25
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 91,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 90,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "img",
            {
              className: "h-8 w-auto",
              src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
              alt: "Your Company"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 210,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 209,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation2.map(
              (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "a",
                {
                  href: item.href,
                  className: classNames(
                    item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      item.icon,
                      {
                        className: classNames(
                          item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600",
                          "h-6 w-6 shrink-0"
                        ),
                        "aria-hidden": "true"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/root.tsx",
                        lineNumber: 231,
                        columnNumber: 35
                      },
                      this
                    ),
                    item.name
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/root.tsx",
                  lineNumber: 222,
                  columnNumber: 33
                },
                this
              ) }, item.name, !1, {
                fileName: "app/root.tsx",
                lineNumber: 221,
                columnNumber: 27
              }, this)
            ) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 219,
              columnNumber: 27
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 218,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "a",
              {
                href: "#",
                className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    import_outline2.Cog6ToothIcon,
                    {
                      className: "h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600",
                      "aria-hidden": "true"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.tsx",
                      lineNumber: 279,
                      columnNumber: 29
                    },
                    this
                  ),
                  "Settings"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/root.tsx",
                lineNumber: 275,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 274,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 217,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 216,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 208,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 206,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "lg:pl-72", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "button",
              {
                type: "button",
                className: "-m-2.5 p-2.5 text-gray-700 lg:hidden",
                onClick: () => setSidebarOpen(!0),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Open sidebar" }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 299,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline2.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 300,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/root.tsx",
                lineNumber: 294,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-6 w-px bg-gray-200 lg:hidden", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 304,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { className: "relative flex flex-1", action: "#", method: "GET", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "search-field", className: "sr-only", children: "Search" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 308,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_outline2.MagnifyingGlassIcon,
                  {
                    className: "pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400",
                    "aria-hidden": "true"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 311,
                    columnNumber: 27
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  "input",
                  {
                    id: "search-field",
                    className: "block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm",
                    placeholder: "Search...",
                    type: "search",
                    name: "search"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 315,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 307,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 325,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline2.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 326,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 324,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 330,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Menu, { as: "div", className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Menu.Button, { className: "-m-1.5 flex items-center p-1.5", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 335,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      "img",
                      {
                        className: "h-8 w-8 rounded-full bg-gray-50",
                        src: User_128px_default,
                        alt: ""
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/root.tsx",
                        lineNumber: 336,
                        columnNumber: 31
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hidden lg:flex lg:items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ml-4 text-sm font-semibold leading-6 text-gray-900", "aria-hidden": "true" }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 342,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline2.ChevronDownIcon, { className: "ml-2 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 344,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 341,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/root.tsx",
                    lineNumber: 334,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    import_react6.Transition,
                    {
                      as: import_react7.Fragment,
                      enter: "transition ease-out duration-100",
                      enterFrom: "transform opacity-0 scale-95",
                      enterTo: "transform opacity-100 scale-100",
                      leave: "transition ease-in duration-75",
                      leaveFrom: "transform opacity-100 scale-100",
                      leaveTo: "transform opacity-0 scale-95",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Menu.Items, { className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                          "a",
                          {
                            href: "profile",
                            className: classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            ),
                            children: "Your Profile"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/root.tsx",
                            lineNumber: 359,
                            columnNumber: 33
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 357,
                          columnNumber: 33
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Form, { method: "POST", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                          "button",
                          {
                            type: "submit",
                            className: classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900 w-full text-left"
                            ),
                            children: "Sign out"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/root.tsx",
                            lineNumber: 373,
                            columnNumber: 39
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 372,
                          columnNumber: 33
                        }, this) }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 370,
                          columnNumber: 33
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 356,
                        columnNumber: 31
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.tsx",
                      lineNumber: 347,
                      columnNumber: 29
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 333,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 323,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 306,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 293,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 292,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 395,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 394,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 393,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 291,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 16
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 403,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 404,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 405,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 402,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 409,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 410,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 411,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route1 = __toESM(require_profile_education_degree_new());

// app/routes/terms-and-conditions.tsx
var terms_and_conditions_exports = {};
__export(terms_and_conditions_exports, {
  default: () => TermsAndConditionsPage
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function TermsAndConditionsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "font-bold text-2xl text-center mb-10", children: "Terms and Conditions" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "Welcome to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "https://www.biosolver.io", children: "www.biosolver.io" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 5,
        columnNumber: 21
      }, this),
      " (\u201CSite\u201D). By using our Site, you agree to these terms and conditions (\u201CTerms of Service\u201D or \u201CAgreement\u201D) as a legally binding agreement between you and us. Please read these Terms of Service carefully before accessing or using our Site."
    ] }, void 0, !0, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Eligibility" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You must be 18 years or older to use our Site. By accessing or using our Site, you represent and warrant that you are 18 years of age or older and that you have the legal capacity to enter into this Agreement." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Services" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Our Site provides a platform for biotechnology freelancers (\u201CSolvers\u201D) to connect with potential clients (\u201CSeekers\u201D) who need their services. We do provide optional and additional services other than the platform for connecting Solvers and Seekers." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Registration" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "To use our Site as a Solver or Seeker, you must register and create an account. You must provide accurate, current, and complete information during the registration process and keep your account information up to date." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Use of the Site" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You agree to use our Site only for lawful purposes and in accordance with these Terms of Service. You agree not to use our Site:" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "In any way that violates any applicable federal, state, local, or international law or regulation" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "To transmit, or procure the sending of, any advertising or promotional material, including any \u201Cjunk mail,\u201D \u201Cchain letter,\u201D \u201Cspam,\u201D or any other similar solicitation" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "To engage in any other conduct that restricts or inhibits anyone\u2019s use or enjoyment of the Site, or which, as determined by us, may harm the Company or users of the Site, or expose them to liability" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Fees and Payment" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We do not charge any fees for using our Site. Freelancers and Clients agree to settle all financial transactions for services performed through our Site." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Intellectual Property Rights" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The content, features, and functionality of our Site are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. You agree not to reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "You may store files that are automatically cached by your Web browser for display enhancement purposes" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Disclaimer of Warranties" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "OUR SITE IS PROVIDED ON AN \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT THE ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF THE CONTENT OR SERVICES PROVIDED ON OUR SITE." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Limitation of Liability" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "IN NO EVENT WILL WE, OUR AFFILIATES, OR OUR LICENSORS BE LIABLE FOR DAMAGES OF ANY KIND (INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES) ARISING FROM THE USE OF, OR INABILITY TO USE, OUR SITE, INCLUDING, BUT NOT LIMITED TO, ANY ERRORS OR OMISSIONS IN ANY CONTENT, OR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT (OR PRODUCT) POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE, EVEN IF ADVISED OF THEIR POSSIBILITY. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Indemnification" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You agree to indemnify, defend, and hold harmless us, our affiliates, licensors, and service providers, and our and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\u2019 fees) arising out of or relating to your violation of these Terms of Service or your use of our Site, including, but not limited to, any use of our Site\u2019s content, services, and products other than as expressly authorized in these Terms of Service or your use of any information obtained from our Site." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Termination" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We may terminate your access to all or any part of our Site at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate this Agreement, you may simply discontinue using our Site." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Governing Law and Jurisdiction" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "These Terms of Service and any disputes or claims arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein without giving effect to any choice or conflict of law provision or rule. Any legal suit, action or proceeding arising out of, or related to, these Terms of Service or our Site shall be instituted exclusively in the courts of the Province of Ontario although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms of Service in your country of residence or any other relevant country. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Entire Agreement" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "These Terms of Service, our Privacy Policy, and any additional terms to which you agree when using particular elements of our Site, constitute the sole and entire agreement between you and us regarding our Site and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding our Site." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Changes to Terms of Service" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We may modify or update these Terms of Service from time to time, and the most current version will be posted on our Site. Your continued use of our Site after we post any modifications to the Terms of Service on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms of Service." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/terms-and-conditions.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/profile.education.tsx
var profile_education_exports = {};
__export(profile_education_exports, {
  default: () => profile_education_default
});

// app/components/EducationForm.tsx
var import_react8 = require("react");

// app/components/DegreeForm.tsx
var import_react_hook_form = require("react-hook-form");

// app/assets/data/countries.ts
var countries_default = [
  { name: "Afghanistan", code: "AF" },
  { name: "\xC5land Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "North Macedonia", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn Islands", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZN" }
];

// app/components/DegreeForm.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function DegreeForm({
  onSubmit
}) {
  let { register, watch, control, handleSubmit } = (0, import_react_hook_form.useForm)(), isCurrentlyStudying = watch("currentlyStudying"), { fields: fields2, append, remove } = (0, import_react_hook_form.useFieldArray)({
    control,
    name: "accomplishments"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { onSubmit: handleSubmit(onSubmit), className: "mb-4 border-gray-500 border-solid rounded-md p-5 border-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "name", className: "block mb-2 font-medium text-gray-700", children: "Degree" }, void 0, !1, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "select",
      {
        id: "name",
        ...register("name", { required: !0 }),
        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "", children: "Select Degree" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "UG Diploma", children: "UG Diploma" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Bachelors", children: "Bachelors" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "PG Diploma", children: "PG Diploma" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Professional Degree", children: "Professional Degree" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Masters", children: "Masters" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "PhD or Doctoral Studies", children: "PhD or Doctoral Studies" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Field" }, void 0, !1, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          type: "text",
          id: "field",
          ...register("field", { required: !0 }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 63,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Country" }, void 0, !1, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "select",
        {
          id: "country",
          ...register("country", { required: !0 }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "", children: "Select Country" }, void 0, !1, {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            countries_default.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: country.name, children: country.name }, country.code, !1, {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this))
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 75,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "university", className: "block mb-2 font-medium text gray-700", children: "University" }, void 0, !1, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          type: "text",
          id: "university",
          ...register("university", { required: !0 }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "started", className: "block mb-2 font-medium text-gray-700", children: "Start" }, void 0, !1, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          type: "text",
          id: "start",
          ...register("start", { required: !0 }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 105,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    !isCurrentlyStudying && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "end", className: "block mb-2 font-medium text-gray-700", children: "End" }, void 0, !1, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          type: "text",
          id: "end",
          ...register("end", { required: !0 }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 117,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 113,
      columnNumber: 32
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          type: "checkbox",
          id: "currentlyStudying",
          ...register("currentlyStudying"),
          className: "mr-2"
        },
        void 0,
        !1,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 126,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "currentlyStudying", className: "font-medium text-gray-700", children: "Currently Studying Here" }, void 0, !1, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
      fields2.map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "accomplishment", className: "block mb-2 font-medium text-gray-700", children: [
          "Accomplishment ",
          index + 1
        ] }, void 0, !0, {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "select",
          {
            id: "type",
            ...register(`accomplishments.${index}.type`, { required: !0 }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "", children: "Select Accomplishment" }, void 0, !1, {
                fileName: "app/components/DegreeForm.tsx",
                lineNumber: 150,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Thesis", children: "Thesis" }, void 0, !1, {
                fileName: "app/components/DegreeForm.tsx",
                lineNumber: 151,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Patent", children: "Patent" }, void 0, !1, {
                fileName: "app/components/DegreeForm.tsx",
                lineNumber: 152,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Published Work", children: "Published Work" }, void 0, !1, {
                fileName: "app/components/DegreeForm.tsx",
                lineNumber: 153,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 145,
            columnNumber: 17
          },
          this
        ),
        field.type === "Thesis" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 159,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "input",
            {
              type: "text",
              id: "title",
              ...register(`accomplishments.${index}.title`, { required: !0 }),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 162,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 158,
          columnNumber: 21
        }, this),
        field.type === "Patent" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 175,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "input",
            {
              type: "text",
              id: "title",
              ...register(`accomplishments.${index}.title`, { required: !0 }),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 178,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 174,
          columnNumber: 21
        }, this),
        field.type === "Published Work" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, !1, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 191,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "input",
            {
              type: "text",
              id: "title",
              ...register(`accomplishments.${index}.title`, { required: !0 }),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 194,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 190,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 141,
        columnNumber: 15
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { onClick: () => append({}, {
        shouldFocus: !0
      }), className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add an Accomplishment" }, void 0, !1, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", className: "w-full text-center border-gray-400 rounded-md border-solid border-2 py-5", children: "Save" }, void 0, !1, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 212,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DegreeForm.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/components/DegreeCard.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function DegreeCard({ degree }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4 border-gray-500 border-solid rounded-md p-5 border-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-2xl font-bold", children: degree.name }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.field }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.country }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.university }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.start }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.end }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.currentlyStudying }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DegreeCard.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/EducationForm.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), EducationForm = () => {
  let [profile, setProfile] = (0, import_react8.useState)({
    degrees: []
  }), [addingDegree, setAddingDegree] = (0, import_react8.useState)(!1), onSubmit = (data) => {
    setProfile({
      ...profile,
      degrees: [
        ...profile.degrees,
        data
      ]
    }), setAddingDegree(!1), console.log(profile);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full max-w-4xl mx-auto", children: [
    profile.degrees.map((degree, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DegreeCard, { degree }, index, !1, {
      fileName: "app/components/EducationForm.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)),
    !addingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { onClick: () => {
      setAddingDegree(!0);
    }, className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add Degree" }, void 0, !1, {
      fileName: "app/components/EducationForm.tsx",
      lineNumber: 36,
      columnNumber: 26
    }, this),
    addingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DegreeForm, { onSubmit }, void 0, !1, {
      fileName: "app/components/EducationForm.tsx",
      lineNumber: 43,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/EducationForm.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}, EducationForm_default = EducationForm;

// app/routes/profile.education.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function profile_education_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(EducationForm_default, {}, void 0, !1, {
    fileName: "app/routes/profile.education.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/profile.personal.tsx
var profile_personal_exports = {};
__export(profile_personal_exports, {
  default: () => profile_personal_default
});

// app/modules/profile/Personal.tsx
var import_react_hook_form2 = require("react-hook-form"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), ProfilePersonal = () => {
  let { register } = (0, import_react_hook_form2.useForm)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { className: "w-full max-w-6xl mx-auto p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Personal Information" }, void 0, !1, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "fullName", className: "block mb-2 font-medium text-gray-700", children: "Full Name" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "fullName",
          ...register("fullName"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 font-medium text-gray-700", children: "Email" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "email",
          ...register("email"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "phone", className: "block mb-2 font-medium text-gray-700", children: "Phone Number" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "phone",
          ...register("phone"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "addressLine1", className: "block mb-2 font-medium text-gray-700", children: "Address Line 1" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "addressLine1",
          ...register("addressLine1"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "addressLine2", className: "block mb-2 font-medium text-gray-700", children: "Address Line 2" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "addressLine2",
          ...register("addressLine2"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 57,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "city", className: "block mb-2 font-medium text-gray-700", children: "City" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "city",
          ...register("city"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 68,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "state", className: "block mb-2 font-medium text-gray-700", children: "State" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "state",
          ...register("state"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 79,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "zip", className: "block mb-2 font-medium text-gray-700", children: "ZIP" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "zip",
          ...register("zip"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 90,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Country" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "country",
          ...register("country"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 101,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "website", className: "block mb-2 font-medium text-gray-700", children: "Website" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "website",
          ...register("website"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 112,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "linkedin", className: "block mb-2 font-medium text-gray-700", children: "LinkedIn" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "linkedin",
          ...register("linkedin"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 123,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "github", className: "block mb-2 font-medium text-gray-700", children: "GitHub" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "github",
          ...register("github"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 134,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "twitter", className: "block mb-2 font-medium text-gray-700", children: "Twitter" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "twitter",
          ...register("twitter"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 145,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "bio", className: "block mb-2 font-medium text-gray-700", children: "Bio" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "textarea",
        {
          id: "bio",
          ...register("bio"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 156,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "pronouns", className: "block mb-2 font-medium text-gray-700", children: "Pronouns" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "pronouns",
          ...register("pronouns"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 166,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "avatar", className: "block mb-2 font-medium text-gray-700", children: "Avatar" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "avatar",
          ...register("avatar"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 177,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "resume", className: "block mb-2 font-medium text-gray-700", children: "Resume" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "text",
          id: "resume",
          ...register("resume"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 188,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "dateOfBirth", className: "block mb-2 font-medium text-gray-700", children: "Date of Birth" }, void 0, !1, {
        fileName: "app/modules/profile/Personal.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "date",
          id: "dateOfBirth",
          ...register("dateOfBirth"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Personal.tsx",
          lineNumber: 199,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Personal.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/profile/Personal.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}, Personal_default = ProfilePersonal;

// app/routes/profile.personal.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function profile_personal_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Personal_default, {}, void 0, !1, {
    fileName: "app/routes/profile.personal.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/privacy-policy.tsx
var privacy_policy_exports = {};
__export(privacy_policy_exports, {
  default: () => PrivacyPolicyPage
});
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function PrivacyPolicyPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "font-bold text-2xl text-center mb-10", children: "Privacy Policy" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
      "This Privacy Policy applies to the website ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { to: "/", children: "https://www.biosolver.io" }, void 0, !1, {
        fileName: "app/routes/privacy-policy.tsx",
        lineNumber: 7,
        columnNumber: 53
      }, this),
      ", which is operated by BIOSOLVER CORP. This policy sets out how we collect, use, and protect the personal information of our users."
    ] }, void 0, !0, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Collection of Personal Information" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "We collect personal information from our users when they register on our site, fill out a form, or otherwise engage with our services. The personal information we collect may include the user's name, email address, phone number, and other contact information. We may also collect other information such as the user's professional experience or publication record." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Use of Personal Information" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "We use personal information collected from our users to provide our services and improve our website. We may also use personal information to contact users with promotional offers, newsletters, or other marketing materials. Users may opt out of receiving these communications at any time." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Disclosure of Personal Information" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "We will not disclose personal information collected from our users to third parties unless required by law or necessary to provide our services. We may share personal information with service providers who assist us in operating our website or providing our services." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Protection of Personal Information" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "We take reasonable measures to protect the personal information of our users from unauthorized access, use, or disclosure. However, we cannot guarantee the security of personal information transmitted to our website, and users transmit personal information at their own risk." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Use of Cookies" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Our website may use cookies to enhance the user experience. Cookies are small data files that are stored on a user's device and may include an anonymous unique identifier. Users can disable cookies in their browser settings, but this may limit the functionality of our website." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Links to Third-Party Websites" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Children's Privacy" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Our website is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under the age of 13." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Changes to this Privacy Policy" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "We may update this Privacy Policy from time to time. Users will be notified of any changes by posting the updated policy on our website." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Contact Us" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
      "If you have any questions or concerns about this Privacy Policy or our use of personal information, please contact us at ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { href: "mailto:info@biosolver.io", children: "info@biosolver.io" }, void 0, !1, {
        fileName: "app/routes/privacy-policy.tsx",
        lineNumber: 34,
        columnNumber: 131
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-sm mt-10 text-end", children: "Date of last revision: 05.07.2023" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/privacy-policy.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/profile.skills.tsx
var profile_skills_exports = {};
__export(profile_skills_exports, {
  default: () => profile_skills_default
});

// app/modules/profile/Skills.tsx
var import_react_hook_form3 = require("react-hook-form"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), ProfileSkills = () => {
  let { register } = (0, import_react_hook_form3.useForm)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { className: "w-full max-w-6xl mx-auto p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Your Skills" }, void 0, !1, {
      fileName: "app/modules/profile/Skills.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "fullName", className: "block mb-2 font-medium text-gray-700", children: "Full Name" }, void 0, !1, {
        fileName: "app/modules/profile/Skills.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "input",
        {
          type: "text",
          id: "fullName",
          ...register("fullName"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Skills.tsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Skills.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 font-medium text-gray-700", children: "Email" }, void 0, !1, {
        fileName: "app/modules/profile/Skills.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "input",
        {
          type: "text",
          id: "email",
          ...register("email"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Skills.tsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Skills.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "phone", className: "block mb-2 font-medium text-gray-700", children: "Phone Number" }, void 0, !1, {
        fileName: "app/modules/profile/Skills.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "input",
        {
          type: "text",
          id: "phone",
          ...register("phone"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Skills.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Skills.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/profile/Skills.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}, Skills_default = ProfileSkills;

// app/routes/profile.skills.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function profile_skills_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Skills_default, {}, void 0, !1, {
    fileName: "app/routes/profile.skills.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/profile._index.tsx
var profile_index_exports = {};
__export(profile_index_exports, {
  default: () => profile_index_default
});
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function profile_index_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Personal_default, {}, void 0, !1, {
    fileName: "app/routes/profile._index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/notes.$noteId.tsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => NoteDetailsPage,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/note.server.ts
function getNote({
  id,
  userId
}) {
  return prisma.note.findFirst({
    select: { id: !0, body: !0, title: !0 },
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({
  body,
  title,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({
  id,
  userId
}) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// app/routes/notes.$noteId.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader2 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant2.default)(params.noteId, "noteId not found");
  let note = await getNote({ id: params.noteId, userId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node4.json)({ note });
}, action = async ({ params, request }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant2.default)(params.noteId, "noteId not found"), await deleteNote({ id: params.noteId, userId }), (0, import_node4.redirect)("/notes");
};
function NoteDetailsPage() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { className: "text-2xl font-bold", children: data.note.title }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "py-6", children: data.note.body }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("hr", { className: "my-4" }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react10.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/notes.$noteId.tsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react10.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 58,
    columnNumber: 12
  }, this) : (0, import_react10.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: "Note not found" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 66,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 62,
    columnNumber: 12
  }, this);
}

// app/routes/notes._index.tsx
var notes_index_exports = {};
__export(notes_index_exports, {
  default: () => NoteIndexPage
});
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react11.Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." }, void 0, !1, {
      fileName: "app/routes/notes._index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes._index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/profile.work.tsx
var profile_work_exports = {};
__export(profile_work_exports, {
  default: () => profile_work_default
});

// app/modules/profile/Work.tsx
var import_react_hook_form4 = require("react-hook-form"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), ProfileWork = () => {
  let { register } = (0, import_react_hook_form4.useForm)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("form", { className: "w-full max-w-6xl mx-auto p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Work Experience" }, void 0, !1, {
      fileName: "app/modules/profile/Work.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "fullName", className: "block mb-2 font-medium text-gray-700", children: "Full Name" }, void 0, !1, {
        fileName: "app/modules/profile/Work.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "input",
        {
          type: "text",
          id: "fullName",
          ...register("fullName"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Work.tsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Work.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 font-medium text-gray-700", children: "Email" }, void 0, !1, {
        fileName: "app/modules/profile/Work.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "input",
        {
          type: "text",
          id: "email",
          ...register("email"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Work.tsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Work.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "phone", className: "block mb-2 font-medium text-gray-700", children: "Phone Number" }, void 0, !1, {
        fileName: "app/modules/profile/Work.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "input",
        {
          type: "text",
          id: "phone",
          ...register("phone"),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/profile/Work.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/profile/Work.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/profile/Work.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}, Work_default = ProfileWork;

// app/routes/profile.work.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function profile_work_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Work_default, {}, void 0, !1, {
    fileName: "app/routes/profile.work.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/for-seekers.tsx
var for_seekers_exports = {};
__export(for_seekers_exports, {
  default: () => SeekerPage
});

// app/utils.ts
var import_react12 = require("@remix-run/react"), import_react13 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react12.useMatches)(), route = (0, import_react13.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}
function cx(...args) {
  return args.flat().filter((x) => typeof x == "string").join(" ").trim();
}

// app/layout/anon/ListHighlight.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ListHighlight({
  title,
  subtitle,
  description,
  bullets = [],
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: cx(className), children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "text-4xl font-bold", children: title }, void 0, !1, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this),
    subtitle && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h3", { className: "text-2xl font-semibold", children: subtitle }, void 0, !1, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 19,
      columnNumber: 20
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-lg", children: description }, void 0, !1, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 20,
      columnNumber: 23
    }, this),
    bullets.map((bullet, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "w-2 h-2 bg-purple-600 rounded-full mr-2" }, void 0, !1, {
        fileName: "app/layout/anon/ListHighlight.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-lg", children: bullet }, void 0, !1, {
        fileName: "app/layout/anon/ListHighlight.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, index, !0, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/layout/anon/ListHighlight.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/layout/anon/SimpleHighlight.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function SimpleHighlight({
  title,
  subtitle,
  description,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: cx(className), children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "text-4xl font-bold", children: title }, void 0, !1, {
      fileName: "app/layout/anon/SimpleHighlight.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this),
    subtitle && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "text-2xl font-semibold", children: subtitle }, void 0, !1, {
      fileName: "app/layout/anon/SimpleHighlight.tsx",
      lineNumber: 17,
      columnNumber: 20
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-lg mt-5", children: description }, void 0, !1, {
      fileName: "app/layout/anon/SimpleHighlight.tsx",
      lineNumber: 18,
      columnNumber: 23
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/SimpleHighlight.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/layout/anon/common/FieldGroup.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function FieldGroup({
  group,
  items,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: cx("rounded-md border-2 border-black items-center", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "text-center text-xl font-semibold p-5", children: group }, void 0, !1, {
      fileName: "app/layout/anon/common/FieldGroup.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-wrap justify-center", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "bg-white shadow-md rounded-md px-5 py-2 mx-5 my-2 flex items-center", children: item }, index, !1, {
      fileName: "app/layout/anon/common/FieldGroup.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/layout/anon/common/FieldGroup.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/common/FieldGroup.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/layout/anon/common/FieldsSection.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), fields = {
  "Biotechnology & Molecular Biology": [
    "PCR and Cloning",
    "DNA/RNA extraction",
    "Protein Isolation & Purification",
    "Cell culture techniques",
    "Understanding of molecular mechanisms"
  ],
  "Microbiology & Virology": [
    "Cell Culture Techniques",
    "Understanding of Microorganism Life Cycles",
    "Molecular Techniques Related to Microbiology",
    "Microbial Genomics",
    "Antimicrobial Susceptibility Testing"
  ],
  "Biochemistry & Chromatography": [
    "Understanding of Biochemical Mechanisms",
    "Chromatography Techniques",
    "Mass Spectrometry",
    "Metabolic Pathway Analysis",
    "Protein-Ligand Interactions"
  ],
  "Protein Biochemistry & Enzymology": [
    "Recombinant Protein Expression",
    "Protein Purification",
    "Western Blotting",
    "Enzyme Kinetics",
    "Protein-Protein Interactions"
  ],
  "Cancer Biology & Immunology": [
    "Tumor Biology",
    "Immunohistochemistry",
    "Flow Cytometry",
    "Understanding of cancer genomics",
    "Cell Signaling Pathways"
  ],
  "Genetics & Genetic Engineering": [
    "Understanding of Genetics",
    "Genotyping",
    "Genetic Screening",
    "CRISPR Technique",
    "Transgenic Organism Creation"
  ],
  "Genomics, Proteomics & Metabolomics": [
    "Next-Generation Sequencing",
    "Mass Spectrometry",
    "Metabolomics Data Analysis",
    "Understanding of Genomic Databases",
    "Proteomics Techniques"
  ],
  "Computational Biology & Bioinformatics": [
    "Computational Modeling",
    "Genomics Data Analysis",
    "Programming (Python/R)",
    "Machine Learning Techniques",
    "Database Management"
  ],
  "Biostatistics & Data Science": [
    "Statistical Modelling",
    "Data Visualization",
    "Predictive Modelling",
    "Proficiency in Statistical Tools",
    "Hypothesis Testing"
  ],
  "Pharmacology & Toxicology": [
    "Drug Design & Synthesis",
    "Pharmacokinetics & Pharmacodynamics",
    "In vivo & In vitro testing",
    "Molecular docking",
    "Bioavailability and bioequivalence studies"
  ],
  "Pharmaceutical Manufacturing & Industrial Pharmacy": [
    "Knowledge of GMP",
    "Pharmaceutical Formulation",
    "Process Optimization",
    "Process Validation",
    "CAPA (Corrective and Preventive Action)"
  ],
  "Bioprocess Engineering & Bioproduction": [
    "Bioreactor Operation",
    "Downstream Processing",
    "Fermentation Techniques",
    "Scale-Up Processes",
    "Understanding of GMP"
  ],
  "Drug Discovery & Development": [
    "Understanding of Drug Design Processes",
    "High Throughput Screening",
    "Lead Optimization",
    "In vivo and In vitro Testing",
    "Knowledge of Regulatory Requirements"
  ],
  "Clinical Research & Clinical Trials Coordination": [
    "Clinical Trial Design",
    "Patient Recruitment",
    "Data collection & Analysis",
    "Adverse Event Monitoring",
    "GCP Compliance"
  ],
  "Bio-Medical Technology & Biomedical Engineering": [
    "Medical Device Design",
    "Biomedical Imaging",
    "Biocompatibility Assessments",
    "Understanding of Medical Software Development",
    "Medical Robotics"
  ],
  "Environmental Biotechnology & Bioremediation": [
    "Understanding of Environmental Systems",
    "Bioremediation Techniques",
    "Environmental Monitoring",
    "Biodegradation",
    "Environmental Genomics"
  ],
  "Personalized Medicine & Genomic Data Analysis": [
    "Understanding of Genomics",
    "Genomic Data Analysis",
    "Personalized Therapy Strategies",
    "Pharmacogenomics",
    "Medical Genetics"
  ],
  "Medical Devices & Instrumentation": [
    "Medical Device Design",
    "Regulatory Requirements for Medical Devices",
    "Testing and Validation",
    "Bioinstrumentation",
    "Understanding of Medical Imaging Technologies"
  ],
  "Regulatory Affairs & Compliance in Pharma": [
    "Understanding of FDA/EMA Regulations",
    "Drug Approval Process",
    "Regulatory Submissions",
    "Post-Marketing Surveillance",
    "Compliance Reporting"
  ],
  "Patent Law & Intellectual Property in Biotech": [
    "Understanding of Patent Law",
    "Patent Application",
    "Technology Transfer",
    "Legal Writing",
    "Confidentiality Agreements"
  ],
  "Business Development & Sales in Biotech": [
    "Market Analysis",
    "Client Relationship Management",
    "Business Strategy Development",
    "Negotiation Skills",
    "Understanding of Biotech Industry"
  ],
  "Marketing & Advertising in Pharma": [
    "Market Research",
    "Digital Marketing",
    "SEO/SEM",
    "Product Marketing",
    "Understanding of Pharma Industry"
  ],
  "Bioentrepreneurship & Biotech Project Management": [
    "Business Plan Development",
    "Financial Planning",
    "Project Management",
    "Risk Assessment",
    "Understanding of Biotech Start-up Ecosystem"
  ],
  "Bioventure & Bioeconomy": [
    "Financial Analysis",
    "Market Analysis",
    "Understanding of Biotech/Pharma Industry",
    "Project Management",
    "Business Development Strategies"
  ]
};
function FieldsSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("section", { className: "w-full max-w-7xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-center text-4xl font-bold", children: "What fields do we specialize in?" }, void 0, !1, {
      fileName: "app/layout/anon/common/FieldsSection.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-2 w-full items-center mt-5 justify-center content-center", children: Object.keys(fields).map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(FieldGroup, { group: field, items: fields[field], className: "col-span-1 w-full h-full" }, index, !1, {
      fileName: "app/layout/anon/common/FieldsSection.tsx",
      lineNumber: 183,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/layout/anon/common/FieldsSection.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/common/FieldsSection.tsx",
    lineNumber: 176,
    columnNumber: 5
  }, this);
}

// app/layout/anon/common/ServicesSection.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), services = [
  "Management Consultation",
  "Technical Consultation",
  "Manufacturing Consultation",
  "Project Management",
  "Sub-contractor Management",
  "Clinical Trial Coordination",
  "Regulatory Approvals",
  "IP and Patent Filing",
  "Technical Writing",
  "Data Validation",
  "SOP Preparation",
  "Experimental Troubleshooting",
  "Experimental Data Analysis",
  "Bioinformatic Analysis",
  "Bio-Statistical Analysis",
  "Scientific Writing and Editing",
  "Literature Review",
  "Illustration and Animation",
  "Business Development",
  "Content Creation",
  "Biotech Marketing",
  "Biotech Sales",
  "Accounting and Purchase",
  "HR and Admin"
];
function ServicesSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("section", { className: "flex flex-col w-full max-w-6xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-center text-4xl font-bold", children: "What services do we offer?" }, void 0, !1, {
      fileName: "app/layout/anon/common/ServicesSection.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full flex flex-wrap justify-center", children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "bg-white shadow-md rounded-md px-5 py-2 mx-5 my-2 flex items-center", children: service }, index, !1, {
      fileName: "app/layout/anon/common/ServicesSection.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/layout/anon/common/ServicesSection.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/common/ServicesSection.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/layout/anon/seeker/HeroSection.tsx
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function HeroSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("section", { className: "flex flex-col w-full max-w-3xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "text-center text-6xl font-semibold", children: "Hire freelancers from anywhere, anytime." }, void 0, !1, {
      fileName: "app/layout/anon/seeker/HeroSection.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react14.Link, { to: "/register", className: "bg-purple-600 hover:bg-purple-800 px-10 rounded-md text-white text-center py-5 mt-10 w-[300px]", children: "Join Us" }, void 0, !1, {
      fileName: "app/layout/anon/seeker/HeroSection.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/seeker/HeroSection.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/for-seekers.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function SeekerPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(HeroSection, {}, void 0, !1, {
      fileName: "app/routes/for-seekers.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      SimpleHighlight,
      {
        className: "mt-20",
        title: "How are we different?",
        description: "At Bio-Solver our Solvers (freelancers) do not apply to projects. We verify all their credentials and screen and score their skills and assign points for each and add that to our database. When you post a project, we identify the hard and soft skill requirements for the project and use a skill-match algorithm to connect you with the most suitable experts based on their hard and soft skills, so that you do not have deal with under qualified candidates."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/for-seekers.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      SimpleHighlight,
      {
        className: "mt-10",
        title: "Who can be a Seeker?",
        description: "Anyone, anywhere who needs a Biotech/Pharma expert/student to help with project specific needs. You can be a Biotech/Pharma company, an academic lab or an individual."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/for-seekers.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      ListHighlight,
      {
        className: "mt-10",
        title: "How to be a Seeker?",
        bullets: [
          "Register as a Seeker.",
          "Fill in our online form to post a project.",
          "Select the hard and soft skill requirements for your projects.",
          "Choose a range of hourly rates you are willing to pay the Solver.",
          "Set the time duration and deliverables for the project.",
          "We will find the most suitable and available solvers for your project.",
          "You can choose a Solver from a curated shortlist of top Solvers and set up the payment.",
          "Once a project is finished, you can approve it.",
          "After we receive your approval, we process the payment to the Solver."
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/for-seekers.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      SimpleHighlight,
      {
        className: "mt-10",
        title: "What is our revenue model?",
        description: "We charge the Solvers a commission for each project. You do not have to pay any additional cost."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/for-seekers.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ServicesSection, {}, void 0, !1, {
      fileName: "app/routes/for-seekers.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(FieldsSection, {}, void 0, !1, {
      fileName: "app/routes/for-seekers.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/for-seekers.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/for-solvers.tsx
var for_solvers_exports = {};
__export(for_solvers_exports, {
  default: () => SeekerPage2
});

// app/layout/anon/solver/HeroSection.tsx
var import_react15 = require("@remix-run/react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function HeroSection2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("section", { className: "flex flex-col w-full max-w-3xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "text-center text-6xl font-semibold", children: "Find work from anywhere, anytime." }, void 0, !1, {
      fileName: "app/layout/anon/solver/HeroSection.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react15.Link, { to: "/register", className: "bg-purple-600 hover:bg-purple-800 px-10 rounded-md text-white text-center py-5 mt-10 w-[300px]", children: "Join Us" }, void 0, !1, {
      fileName: "app/layout/anon/solver/HeroSection.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/solver/HeroSection.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/for-solvers.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function SeekerPage2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(HeroSection2, {}, void 0, !1, {
      fileName: "app/routes/for-solvers.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      SimpleHighlight,
      {
        className: "mt-20",
        title: "How are we different?",
        description: "With Bio-Solver you would not have to apply for jobs. We will screen your selected skills and assign points for each and add that to our database. We will use a skill-match algorithm to connect you with remote freelancing projects."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/for-solvers.tsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      SimpleHighlight,
      {
        className: "mt-10",
        title: "Who can be a Solver?",
        description: "Anyone, anywhere who is a Biotech/Pharma expert/student who can help others solve their problems through remote freelance work."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/for-solvers.tsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      ListHighlight,
      {
        className: "mt-10",
        title: "How to be a Solver?",
        bullets: [
          "Apply to us online to be a Solver.",
          "Fill in the application form and upload all necessary documents.",
          "Choose the job types that you are interested in.",
          "Choose your field and skills.",
          "Set your own hourly rate.",
          "Participate in our screening process which may include technical assessments, interviews, or demo projects.",
          "Once your screening is done you will be provided with scores for each skill set.",
          "Once a posted project matches your skill set, we would notify you to apply for it.",
          "If you like the project, you can apply with a single click.",
          "If you are selected for the project, you can begin work on a remote basis."
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/for-solvers.tsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      SimpleHighlight,
      {
        className: "mt-10",
        title: "What is our commission?",
        description: "We charge you commission each time you finish a project, our base commission rate starts at 20% and goes down as your earning goes higher monthly."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/for-solvers.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ServicesSection, {}, void 0, !1, {
      fileName: "app/routes/for-solvers.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(FieldsSection, {}, void 0, !1, {
      fileName: "app/routes/for-solvers.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/for-solvers.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader3
});
var loader3 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/contact-us.tsx
var contact_us_exports = {};
__export(contact_us_exports, {
  default: () => ContactUsPage
});
var import_outline3 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function ContactUsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative isolate bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative p-10 lg:static", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mx-auto max-w-xl lg:mx-0 lg:max-w-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-gray-900", children: "Get in touch" }, void 0, !1, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Please don't hesitate to reach out to us with any queries, requirements, and feedback." }, void 0, !1, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("dl", { className: "mt-10 space-y-4 text-base leading-7 text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("dt", { className: "flex-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "sr-only", children: "Address" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 16,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_outline3.BuildingOffice2Icon, { className: "h-7 w-6 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 17,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 15,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("dd", { children: [
            "Toronto, ON",
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 21,
              columnNumber: 19
            }, this),
            "Canada"
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 19,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 14,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("dt", { className: "flex-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "sr-only", children: "Email" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 38,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_outline3.EnvelopeIcon, { className: "h-7 w-6 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 39,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("a", { className: "hover:text-gray-900", href: "mailto:info@biosolver.io", children: "info@biosolver.io" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 42,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("form", { action: "https://app.formzillion.com/f/ZPzOl-j5", method: "POST", className: "p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mx-auto max-w-xl lg:mr-0 lg:max-w-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "First name" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "input",
            {
              type: "text",
              name: "first-name",
              id: "first-name",
              autoComplete: "given-name",
              className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 58,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Last name" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "input",
            {
              type: "text",
              name: "last-name",
              id: "last-name",
              autoComplete: "family-name",
              className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 72,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Email" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "input",
            {
              type: "email",
              name: "email",
              id: "email",
              autoComplete: "email",
              className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 86,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "phone-number", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Phone number" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "input",
            {
              type: "tel",
              name: "phone-number",
              id: "phone-number",
              autoComplete: "tel",
              className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 100,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Message" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "textarea",
            {
              name: "message",
              id: "message",
              rows: 4,
              className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6",
              defaultValue: ""
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 114,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mt-8 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",
          children: "Send message"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 125,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  let userId = await requireUserId(request), user = await getUserById(userId);
  return (0, import_node5.json)({ user });
};
function Dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "w-3/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "text-4xl text-gray-600", children: "Welcome back, " }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-5 w-full flow-root p-5 bordered border-[1px] rounded-sm border-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "float-left", children: [
          "Profile Strength: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "text-purple-600", children: "Incomplete" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 23,
            columnNumber: 31
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "text-purple-600", children: "Please complete your talent profile to enable all the features" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react16.Link, { to: "/profile", className: "float-right px-5 py-2 bg-purple-600 text-white rounded-sm hover:bg-purple-800", children: "Edit Profile" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "w-1/4", children: " Right" }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/documents.tsx
var documents_exports = {};
__export(documents_exports, {
  default: () => DocumentsPage
});
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function DocumentsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex flex-row", children: "Work in Progress" }, void 0, !1, {
    fileName: "app/routes/documents.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/notes.new.tsx
var notes_new_exports = {};
__export(notes_new_exports, {
  action: () => action2,
  default: () => NewNotePage
});
var import_node6 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_react18 = require("react");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node6.json)(
      { errors: { body: null, title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node6.json)(
      { errors: { body: "Body is required", title: null } },
      { status: 400 }
    );
  let note = await createNote({ body, title, userId });
  return (0, import_node6.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react17.useActionData)(), titleRef = (0, import_react18.useRef)(null), bodyRef = (0, import_react18.useRef)(null);
  return (0, import_react18.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    import_react17.Form,
    {
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { children: "Title: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              "input",
              {
                ref: titleRef,
                name: "title",
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 61,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          (_c = actionData == null ? void 0 : actionData.errors) != null && _c.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { children: "Body: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                rows: 8,
                className: "w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6",
                "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? !0 : void 0,
                "aria-errormessage": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.body ? "body-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 81,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          (_f = actionData == null ? void 0 : actionData.errors) != null && _f.body ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 100,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}

// app/routes/calendar.tsx
var calendar_exports = {};
__export(calendar_exports, {
  default: () => CalendarPage
});
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function CalendarPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex flex-row", children: "Work in Progress" }, void 0, !1, {
    fileName: "app/routes/calendar.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/messages.tsx
var messages_exports = {};
__export(messages_exports, {
  default: () => MessagesPage
});
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function MessagesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex flex-row", children: "Work in Progress" }, void 0, !1, {
    fileName: "app/routes/messages.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action3,
  default: () => Register,
  loader: () => loader5,
  meta: () => meta
});
var import_node7 = require("@remix-run/node"), import_react19 = require("@remix-run/react"), import_react20 = require("react");

// app/models/userRole.server.ts
async function createRoles(userId, roles) {
  return prisma.userRole.createMany({
    data: roles.map((role) => ({
      role,
      userId
    }))
  });
}

// app/routes/register.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => await getUserId(request) ? (0, import_node7.redirect)("/dashboard") : (0, import_node7.json)({}), action3 = async ({ request }) => {
  let formData = await request.formData();
  console.log(formData);
  let fullName = formData.get("fullName"), email = formData.get("email"), password = formData.get("password"), roles = formData.getAll("roles"), referralCode = formData.get("referralCode"), redirectTo = safeRedirect(formData.get("redirectTo"), "/dashboard");
  if (console.log(email, password, roles), !validateEmail(email))
    return (0, import_node7.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node7.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node7.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node7.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(fullName, email, password);
  return referralCode && typeof referralCode == "string" && await updateUserById(user.id, { source: referralCode, sourceType: "referral" }), await createRoles(user.id, roles.map((role) => role.toString())), createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta = () => [{ title: "Sign Up" }];
function Register() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react19.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react19.useActionData)(), fullNameRef = (0, import_react20.useRef)(null), emailRef = (0, import_react20.useRef)(null), passwordRef = (0, import_react20.useRef)(null), referralCodeRef = (0, import_react20.useRef)(null);
  return (0, import_react20.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex min-h-full flex-1 justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-auto w-full max-w-sm lg:w-96", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full items-center text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react19.Link, { to: "/", className: "items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("img", { className: "h-16 w-16 mx-auto", src: base_default, alt: "BioSolver Logo" }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 105,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Create your account" }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 108,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-gray-500", children: [
        "Already a member?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react19.Link, { to: "/login", className: "font-semibold text-purple-600 hover:text-purple-500", children: "Sign In" }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 111,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/register.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react19.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700",
            children: "Full Name"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 123,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "input",
          {
            ref: fullNameRef,
            id: "fullName",
            required: !0,
            autoFocus: !0,
            name: "fullName",
            type: "text",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 130,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 129,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 122,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700",
            children: "Email address"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 143,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
            "input",
            {
              ref: emailRef,
              id: "email",
              required: !0,
              autoFocus: !0,
              name: "email",
              type: "email",
              autoComplete: "email",
              "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
              "aria-describedby": "email-error",
              className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 150,
              columnNumber: 23
            },
            this
          ),
          (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 163,
            columnNumber: 25
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 149,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 142,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-700",
            children: "Password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 171,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
            "input",
            {
              id: "password",
              ref: passwordRef,
              name: "password",
              type: "password",
              autoComplete: "new-password",
              "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
              "aria-describedby": "password-error",
              className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 178,
              columnNumber: 23
            },
            this
          ),
          (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 189,
            columnNumber: 25
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 177,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 170,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("legend", { children: "Roles" }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 197,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "space-y-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "relative flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
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
              !1,
              {
                fileName: "app/routes/register.tsx",
                lineNumber: 201,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/register.tsx",
              lineNumber: 200,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "ml-3 text-sm leading-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("label", { htmlFor: "role-solver", className: "font-medium text-gray-900", children: "Solver" }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 211,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { id: "role-solver-description", className: "text-gray-500", children: "I am an expert/student looking for work." }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 214,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/register.tsx",
              lineNumber: 210,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/register.tsx",
            lineNumber: 199,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "relative flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
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
              !1,
              {
                fileName: "app/routes/register.tsx",
                lineNumber: 221,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/register.tsx",
              lineNumber: 220,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "ml-3 text-sm leading-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("label", { htmlFor: "role-seeker", className: "font-medium text-gray-900", children: "Seeker" }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 231,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { id: "role-seeker-description", className: "text-gray-500", children: "I am looking to hire a Freelancer." }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 234,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/register.tsx",
              lineNumber: 230,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/register.tsx",
            lineNumber: 219,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "relative flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
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
              !1,
              {
                fileName: "app/routes/register.tsx",
                lineNumber: 241,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/register.tsx",
              lineNumber: 240,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "ml-3 text-sm leading-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("label", { htmlFor: "role-referrer", className: "font-medium text-gray-900", children: "Referral Partner" }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 251,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { id: "role-referrer-description", className: "text-gray-500", children: "I can spread the word." }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 254,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/register.tsx",
              lineNumber: 250,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/register.tsx",
            lineNumber: 239,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 198,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 196,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "label",
          {
            htmlFor: "referralCode",
            className: "block text-sm font-medium text-gray-700",
            children: "Referral Code (optional)"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 263,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "input",
          {
            ref: referralCodeRef,
            id: "referralCode",
            autoFocus: !0,
            name: "referralCode",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 270,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 269,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 262,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 280,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "w-full rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:bg-purple-400",
          children: "Create Account"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/register.tsx",
          lineNumber: 281,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          import_react19.Link,
          {
            className: "text-purple-500 underline",
            to: {
              pathname: "/login",
              search: searchParams.toString()
            },
            children: "Log in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 290,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 288,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 287,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/register.tsx",
      lineNumber: 121,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/register.tsx",
      lineNumber: 120,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/register.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/register.tsx",
    lineNumber: 103,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 102,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 101,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/matches.tsx
var matches_exports = {};
__export(matches_exports, {
  default: () => Matches
});
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function Matches() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { children: [
      "You have ",
      5,
      " matches."
    ] }, void 0, !0, {
      fileName: "app/routes/matches.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: "List of matches here." }, void 0, !1, {
      fileName: "app/routes/matches.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/matches.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  Tabs: () => Tabs,
  default: () => ProfilePage,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_react22 = require("react");

// app/models/degree.server.ts
function getDegrees({ userId }) {
  return prisma.degree.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" }
  });
}

// app/routes/profile.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  let userId = await requireUserId(request), degrees = await getDegrees({ userId });
  return (0, import_node8.json)({ degrees });
}, tabs = [
  { name: "Personal", href: "#", current: !1 },
  { name: "Education", href: "#", current: !1 },
  { name: "Work", href: "#", current: !1 },
  { name: "Skills", href: "#", current: !0 }
];
function Tabs({
  selectedTab = "Personal",
  changeTab
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("label", { htmlFor: "tabs", className: "sr-only", children: "Select a tab" }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
        "select",
        {
          id: "tabs",
          name: "tabs",
          className: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          value: selectedTab,
          onChange: (event) => {
            event.preventDefault(), changeTab(event.target.value);
          },
          children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react21.Link, { to: "education", className: "block p-4 text-xl text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("option", { children: tab.name }, tab.name, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.tsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("nav", { className: "-mb-px flex w-full", "aria-label": "Tabs", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
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
      !1,
      {
        fileName: "app/routes/profile.tsx",
        lineNumber: 64,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function ProfilePage() {
  let data = (0, import_react21.useLoaderData)(), user = useUser(), navigate = (0, import_react21.useNavigate)(), [currentTab, setCurrentTab] = (0, import_react22.useState)("Personal");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "max-w-7xl w-full mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Tabs, { selectedTab: currentTab, changeTab: (tab) => {
      setCurrentTab(tab), navigate(`${tab.toLowerCase()}`);
    } }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react21.Outlet, {}, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

// app/routes/reports.tsx
var reports_exports = {};
__export(reports_exports, {
  default: () => ReportPage
});
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function ReportPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex flex-row", children: "Work in Progress" }, void 0, !1, {
    fileName: "app/routes/reports.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action4,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node");
var action4 = async ({ request }) => logout(request), loader7 = async () => (0, import_node9.redirect)("/");

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});
var import_react24 = require("@remix-run/react");

// app/assets/images/categories/consulting.png
var consulting_default = "/build/_assets/consulting-6GVLD3FQ.png";

// app/assets/images/categories/experimentation.png
var experimentation_default = "/build/_assets/experimentation-HZMRQESG.png";

// app/assets/images/categories/analytics-reporting.png
var analytics_reporting_default = "/build/_assets/analytics-reporting-6SCWPECF.png";

// app/assets/images/categories/clinical-trial.png
var clinical_trial_default = "/build/_assets/clinical-trial-JRT6F7P2.png";

// app/layout/anon/GridTile.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function GridTile({
  className,
  imgSrc,
  imgAlt,
  title,
  description,
  linkSrc,
  linkText
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: cx(className, "flex flex-col mx-auto justify-center items-center bg-white hover:border-2 hover:shadow-lg hover:scale-105 transition-all ease-in-out shadow-sm rounded-md hover:border-purple-500 hover:text-purple-500"), children: [
    imgSrc && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("img", { src: imgSrc, alt: imgAlt, className: "w-16 h-auto mb-5" }, void 0, !1, {
      fileName: "app/layout/anon/GridTile.tsx",
      lineNumber: 25,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h3", { className: "font-bold text-xl", children: title }, void 0, !1, {
      fileName: "app/layout/anon/GridTile.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { children: description }, void 0, !1, {
      fileName: "app/layout/anon/GridTile.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("a", { href: linkSrc, className: "mt-5", children: linkText }, void 0, !1, {
      fileName: "app/layout/anon/GridTile.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/GridTile.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/layout/anon/home/CategorySection.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function CategoriesSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("section", { className: "flex flex-wrap w-full h-full mx-auto mt-40 justify-center items-center content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full h-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h2", { className: "text-4xl text-center", children: "How it works" }, void 0, !1, {
      fileName: "app/layout/anon/home/CategorySection.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "text-center", children: "Connect with our Seekers." }, void 0, !1, {
      fileName: "app/layout/anon/home/CategorySection.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex justify-center flex-wrap mt-5 gap-2 max-w-7xl", children: [
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
    ].map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      GridTile,
      {
        className: "w-[500px] h-auto p-10",
        title: category.title,
        imgSrc: category.image,
        linkSrc: category.link,
        description: category.description
      },
      index,
      !1,
      {
        fileName: "app/layout/anon/home/CategorySection.tsx",
        lineNumber: 44,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/layout/anon/home/CategorySection.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/home/CategorySection.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/layout/anon/home/CategorySection.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/layout/anon/home/HeroSection.tsx
var import_react23 = require("@remix-run/react");

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
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function HeroDecoration() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "-z-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("img", { className: "absolute right-[5%] top-[25%] opacity-10", src: hero_circle_default }, void 0, !1, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("img", { className: "absolute right-[10%] top-[50%] animate-bounce ", src: hero_circle_2_default }, void 0, !1, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("img", { className: "absolute left-[52%] bottom-[25%] animate-slide-x", src: hero_square_default }, void 0, !1, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("img", { className: "absolute left-1/2 top-1/2 animate-rotate-360", src: hero_square_2_default }, void 0, !1, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("img", { className: "absolute left-[60%] top-1/4 animate-slide-y", src: hero_dot_default }, void 0, !1, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("img", { className: "absolute left-[5%] top-1/3 animate-rotate-360", src: hero_triangle_default }, void 0, !1, {
      fileName: "app/layout/anon/home/HeroDecoration.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/home/HeroDecoration.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/assets/images/hero/genetic_engineering.png
var genetic_engineering_default = "/build/_assets/genetic_engineering-EPYTMLFJ.png";

// app/layout/anon/home/HeroSection.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function HeroSection3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("section", { className: "flex flex-wrap w-full h-full mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(HeroDecoration, {}, void 0, !1, {
      fileName: "app/layout/anon/home/HeroSection.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "w-full lg:w-1/2 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "text-start text-4xl my-auto font-semibold", children: "A global platform for remote freelancing work in Biotech & Pharma sectors" }, void 0, !1, {
        fileName: "app/layout/anon/home/HeroSection.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react23.Link, { to: "/register", className: "bg-purple-600 hover:bg-purple-800 px-10 rounded-md text-white text-center py-5 mt-10 w-[300px]", children: "Join Us" }, void 0, !1, {
        fileName: "app/layout/anon/home/HeroSection.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layout/anon/home/HeroSection.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("img", { className: "w-full lg:w-1/2", src: genetic_engineering_default, alt: "hero" }, void 0, !1, {
      fileName: "app/layout/anon/home/HeroSection.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/anon/home/HeroSection.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), meta2 = () => [{ title: "Biosolver" }];
function Index() {
  let user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(HeroSection3, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full h-auto p-10 text-white rounded-lg mt-10 flex flex-row gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full lg:w-1/2 bg-[url('assets/images/backgrounds/expert.jpg')] bg-cover bg-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full h-full backdrop-brightness-50 p-10 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h1", { className: "text-4xl font-bold", children: "Be a Solver" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "text-xl mt-5", children: "Are you a Biotech/Pharma expert or student interested in remote freelancing work?" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react24.Link, { to: "/register", className: "text-center w-full rounded bg-purple-500 hover:bg-purple-700 text-white py-5 mt-5", children: "Join as a Solver" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full lg:w-1/2 bg-[url('assets/images/backgrounds/company.jpg')] bg-cover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full h-full backdrop-brightness-50 p-10 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h1", { className: "text-4xl font-bold", children: "Hire a Solver" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "text-xl mt-5", children: "Are you looking to hire a Biotech/Pharma expert or student for a remote freelancing work?" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react24.Link, { to: "/register", className: "text-center w-full rounded bg-purple-500 hover:bg-purple-700 text-white py-5 mt-5", children: "Join as a Seeker" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CategoriesSection, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action5,
  default: () => LoginPage,
  loader: () => loader8,
  meta: () => meta3
});
var import_node10 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), import_react26 = require("react");
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => await getUserId(request) ? (0, import_node10.redirect)("/dashboard") : (0, import_node10.json)({}), action5 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/dashboard"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node10.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node10.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node10.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node10.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}, meta3 = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react25.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/dashboard", actionData = (0, import_react25.useActionData)(), emailRef = (0, import_react26.useRef)(null), passwordRef = (0, import_react26.useRef)(null);
  return (0, import_react26.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_jsx_dev_runtime44.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react25.Link, { to: "/", className: "items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("img", { className: "h-16 w-16 mx-auto", src: base_default, alt: "BioSolver Logo" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react25.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700",
            children: "Email address"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 89,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            "input",
            {
              ref: emailRef,
              id: "email",
              required: !0,
              autoFocus: !0,
              name: "email",
              type: "email",
              autoComplete: "email",
              "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
              "aria-describedby": "email-error",
              className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 96,
              columnNumber: 17
            },
            this
          ),
          (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-700",
            children: "Password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 117,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            "input",
            {
              id: "password",
              ref: passwordRef,
              name: "password",
              type: "password",
              autoComplete: "current-password",
              "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
              "aria-describedby": "password-error",
              className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 124,
              columnNumber: 17
            },
            this
          ),
          (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 135,
            columnNumber: 19
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "w-full rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:bg-purple-400",
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 143,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            "input",
            {
              id: "remember",
              name: "remember",
              type: "checkbox",
              className: "h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 151,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            "label",
            {
              htmlFor: "remember",
              className: "ml-2 block text-sm text-gray-900",
              children: "Remember me"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 157,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            import_react25.Link,
            {
              className: "text-purple-500 underline",
              to: {
                pathname: "/register",
                search: searchParams.toString()
              },
              children: "Sign up"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 166,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader9
});
var import_node11 = require("@remix-run/node"), import_react27 = require("@remix-run/react");
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node11.json)({ noteListItems });
};
function NotesPage() {
  let data = (0, import_react27.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react27.Link, { to: ".", children: "Notes" }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { children: user.email }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react27.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600",
          children: "Logout"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/notes.tsx",
          lineNumber: 27,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react27.Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
          import_react27.NavLink,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 50,
            columnNumber: 19
          },
          this
        ) }, note.id, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react27.Outlet, {}, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-2YKYABTC.js", imports: ["/build/_shared/chunk-YUUU2RAQ.js", "/build/_shared/chunk-SGSFRA2X.js", "/build/_shared/chunk-HYDBX6IC.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SO3YXH5T.js", imports: ["/build/_shared/chunk-JVNGUFS4.js", "/build/_shared/chunk-WLTRNBV5.js", "/build/_shared/chunk-DZY5WEHX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-V5SGEZLG.js", imports: ["/build/_shared/chunk-XIBNGEOM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/calendar": { id: "routes/calendar", parentId: "root", path: "calendar", index: void 0, caseSensitive: void 0, module: "/build/routes/calendar-2HT3ZEXN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact-us": { id: "routes/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-us-TPYK572Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-BHZP3FD6.js", imports: ["/build/_shared/chunk-CMWXK6I4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/documents": { id: "routes/documents", parentId: "root", path: "documents", index: void 0, caseSensitive: void 0, module: "/build/routes/documents-DDZFG3ZZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/for-seekers": { id: "routes/for-seekers", parentId: "root", path: "for-seekers", index: void 0, caseSensitive: void 0, module: "/build/routes/for-seekers-BCZMR64W.js", imports: ["/build/_shared/chunk-ZQB6JNLZ.js", "/build/_shared/chunk-XIBNGEOM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/for-solvers": { id: "routes/for-solvers", parentId: "root", path: "for-solvers", index: void 0, caseSensitive: void 0, module: "/build/routes/for-solvers-LAA2NDSX.js", imports: ["/build/_shared/chunk-ZQB6JNLZ.js", "/build/_shared/chunk-XIBNGEOM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-JO7RAI4L.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-ZL572MGH.js", imports: ["/build/_shared/chunk-CMWXK6I4.js", "/build/_shared/chunk-XIBNGEOM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-S5LWYBEX.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/matches": { id: "routes/matches", parentId: "root", path: "matches", index: void 0, caseSensitive: void 0, module: "/build/routes/matches-3FDE2QYX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/messages": { id: "routes/messages", parentId: "root", path: "messages", index: void 0, caseSensitive: void 0, module: "/build/routes/messages-H3Y2ROQT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-CZIOH5NP.js", imports: ["/build/_shared/chunk-OLP4QJ4K.js", "/build/_shared/chunk-XIBNGEOM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-FEUWAUUZ.js", imports: ["/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-HIVNQGXR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-4GRWDCON.js", imports: ["/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privacy-policy": { id: "routes/privacy-policy", parentId: "root", path: "privacy-policy", index: void 0, caseSensitive: void 0, module: "/build/routes/privacy-policy-JC4P6KVS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-63YCTU63.js", imports: ["/build/_shared/chunk-XIBNGEOM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile._index": { id: "routes/profile._index", parentId: "routes/profile", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/profile._index-7HQ7LSSD.js", imports: ["/build/_shared/chunk-5R6Y3HSJ.js", "/build/_shared/chunk-ZI3VNW5U.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.education": { id: "routes/profile.education", parentId: "routes/profile", path: "education", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.education-X52XZ7M6.js", imports: ["/build/_shared/chunk-ZI3VNW5U.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.education.degree.new": { id: "routes/profile.education.degree.new", parentId: "routes/profile.education", path: "degree/new", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.education.degree.new-ZQUWQTBH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.personal": { id: "routes/profile.personal", parentId: "routes/profile", path: "personal", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.personal-RYRIUBSQ.js", imports: ["/build/_shared/chunk-5R6Y3HSJ.js", "/build/_shared/chunk-ZI3VNW5U.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.skills": { id: "routes/profile.skills", parentId: "routes/profile", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.skills-TAYNLEWC.js", imports: ["/build/_shared/chunk-ZI3VNW5U.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.work": { id: "routes/profile.work", parentId: "routes/profile", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.work-IYS2HB76.js", imports: ["/build/_shared/chunk-ZI3VNW5U.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-R6ST4FTA.js", imports: ["/build/_shared/chunk-CMWXK6I4.js", "/build/_shared/chunk-XIBNGEOM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reports": { id: "routes/reports", parentId: "root", path: "reports", index: void 0, caseSensitive: void 0, module: "/build/routes/reports-XNV3LFFP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/terms-and-conditions": { id: "routes/terms-and-conditions", parentId: "root", path: "terms-and-conditions", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-and-conditions-QKWGD4G5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "cf06ef66", hmr: void 0, url: "/build/manifest-CF06EF66.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/profile.education.degree.new": {
    id: "routes/profile.education.degree.new",
    parentId: "routes/profile.education",
    path: "degree/new",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/terms-and-conditions": {
    id: "routes/terms-and-conditions",
    parentId: "root",
    path: "terms-and-conditions",
    index: void 0,
    caseSensitive: void 0,
    module: terms_and_conditions_exports
  },
  "routes/profile.education": {
    id: "routes/profile.education",
    parentId: "routes/profile",
    path: "education",
    index: void 0,
    caseSensitive: void 0,
    module: profile_education_exports
  },
  "routes/profile.personal": {
    id: "routes/profile.personal",
    parentId: "routes/profile",
    path: "personal",
    index: void 0,
    caseSensitive: void 0,
    module: profile_personal_exports
  },
  "routes/privacy-policy": {
    id: "routes/privacy-policy",
    parentId: "root",
    path: "privacy-policy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_policy_exports
  },
  "routes/profile.skills": {
    id: "routes/profile.skills",
    parentId: "routes/profile",
    path: "skills",
    index: void 0,
    caseSensitive: void 0,
    module: profile_skills_exports
  },
  "routes/profile._index": {
    id: "routes/profile._index",
    parentId: "routes/profile",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: profile_index_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/notes._index": {
    id: "routes/notes._index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_index_exports
  },
  "routes/profile.work": {
    id: "routes/profile.work",
    parentId: "routes/profile",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: profile_work_exports
  },
  "routes/for-seekers": {
    id: "routes/for-seekers",
    parentId: "root",
    path: "for-seekers",
    index: void 0,
    caseSensitive: void 0,
    module: for_seekers_exports
  },
  "routes/for-solvers": {
    id: "routes/for-solvers",
    parentId: "root",
    path: "for-solvers",
    index: void 0,
    caseSensitive: void 0,
    module: for_solvers_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/contact-us": {
    id: "routes/contact-us",
    parentId: "root",
    path: "contact-us",
    index: void 0,
    caseSensitive: void 0,
    module: contact_us_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/documents": {
    id: "routes/documents",
    parentId: "root",
    path: "documents",
    index: void 0,
    caseSensitive: void 0,
    module: documents_exports
  },
  "routes/notes.new": {
    id: "routes/notes.new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: notes_new_exports
  },
  "routes/calendar": {
    id: "routes/calendar",
    parentId: "root",
    path: "calendar",
    index: void 0,
    caseSensitive: void 0,
    module: calendar_exports
  },
  "routes/messages": {
    id: "routes/messages",
    parentId: "root",
    path: "messages",
    index: void 0,
    caseSensitive: void 0,
    module: messages_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/matches": {
    id: "routes/matches",
    parentId: "root",
    path: "matches",
    index: void 0,
    caseSensitive: void 0,
    module: matches_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/reports": {
    id: "routes/reports",
    parentId: "root",
    path: "reports",
    index: void 0,
    caseSensitive: void 0,
    module: reports_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.17.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
