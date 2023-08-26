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

// app/routes/seeker.dashboard.tsx
var require_seeker_dashboard = __commonJS({
  "app/routes/seeker.dashboard.tsx"() {
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
async function createUser(firstName, lastName, email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
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
var tailwind_default = "/build/_assets/tailwind-DJRHCZPA.css";

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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "mx-auto flex max-w-7xl items-center justify-between lg:px-8", "aria-label": "Global", children: [
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
], loader = async ({ request }) => (0, import_node3.json)({ user: await getUser(request) }), navigation2 = [
  { name: "Dashboard", href: "/dashboard", icon: import_outline2.HomeIcon, current: !0 },
  { name: "Your Matches", href: "/matches", icon: import_outline2.UsersIcon, current: !1 },
  { name: "Messages", href: "/messages", icon: import_outline2.FolderIcon, current: !1 },
  { name: "Calendar", href: "/calendar", icon: import_outline2.CalendarIcon, current: !1 },
  { name: "Documents", href: "/documents", icon: import_outline2.DocumentDuplicateIcon, current: !1 },
  { name: "Reports", href: "/reports", icon: import_outline2.ChartPieIcon, current: !1 }
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
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 66,
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
                lineNumber: 88,
                columnNumber: 23
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 79,
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
                        lineNumber: 113,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline2.XMarkIcon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 114,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 112,
                      columnNumber: 31
                    }, this) }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 111,
                      columnNumber: 29
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 102,
                    columnNumber: 27
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    "img",
                    {
                      className: "h-8 w-auto",
                      src: base_default,
                      alt: "Biosolver"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.tsx",
                      lineNumber: 121,
                      columnNumber: 31
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 120,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation2.map(
                      (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { to: item.href, className: classNames(
                        item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      ), children: [
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
                            lineNumber: 139,
                            columnNumber: 43
                          },
                          this
                        ),
                        item.name
                      ] }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 133,
                        columnNumber: 41
                      }, this) }, item.name, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 132,
                        columnNumber: 35
                      }, this)
                    ) }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 130,
                      columnNumber: 35
                    }, this) }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 129,
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
                              lineNumber: 187,
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
                        lineNumber: 183,
                        columnNumber: 35
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 182,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/root.tsx",
                    lineNumber: 128,
                    columnNumber: 31
                  }, this) }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 127,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 119,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 101,
                columnNumber: 25
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 92,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 91,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "img",
            {
              className: "h-8 w-auto",
              src: base_default,
              alt: "Biosolver"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 208,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 207,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation2.map(
              (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { to: item.href, className: classNames(
                item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              ), children: [
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
                    lineNumber: 226,
                    columnNumber: 35
                  },
                  this
                ),
                item.name
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 220,
                columnNumber: 33
              }, this) }, item.name, !1, {
                fileName: "app/root.tsx",
                lineNumber: 219,
                columnNumber: 27
              }, this)
            ) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 217,
              columnNumber: 27
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 216,
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
                      lineNumber: 274,
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
                lineNumber: 270,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 269,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 215,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 214,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 206,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 204,
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
                    lineNumber: 294,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline2.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 295,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/root.tsx",
                lineNumber: 289,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-6 w-px bg-gray-200 lg:hidden", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 299,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { className: "relative flex flex-1", action: "#", method: "GET", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "search-field", className: "sr-only", children: "Search" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 303,
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
                    lineNumber: 306,
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
                    lineNumber: 310,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 302,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 320,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline2.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 321,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 319,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 325,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Menu, { as: "div", className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Menu.Button, { className: "-m-1.5 flex items-center p-1.5", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 330,
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
                        lineNumber: 331,
                        columnNumber: 31
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hidden lg:flex lg:items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ml-4 text-sm font-semibold leading-6 text-gray-900", "aria-hidden": "true" }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 337,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline2.ChevronDownIcon, { className: "ml-2 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 339,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 336,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/root.tsx",
                    lineNumber: 329,
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
                            lineNumber: 354,
                            columnNumber: 33
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 352,
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
                            lineNumber: 368,
                            columnNumber: 39
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 367,
                          columnNumber: 33
                        }, this) }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 365,
                          columnNumber: 33
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 351,
                        columnNumber: 31
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.tsx",
                      lineNumber: 342,
                      columnNumber: 29
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 328,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 318,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 301,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 288,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 287,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 390,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 389,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 388,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 286,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 16
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 398,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 399,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 400,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 397,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 404,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 405,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 406,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

// app/routes/profile.professional.$experienceId.tsx
var profile_professional_experienceId_exports = {};
__export(profile_professional_experienceId_exports, {
  action: () => action
});
var import_node4 = require("@remix-run/node");
var action = async ({ request, params }) => {
  let {
    experienceId
  } = params;
  if (!experienceId)
    throw new Error("No experienceId provided");
  let body = await request.formData();
  if (body.get("action") === "addAccomplishment") {
    let title = body.get("title"), publisher = body.get("publisher"), link = body.get("link"), type = body.get("type"), details = body.get("details"), status = body.get("status"), category = body.get("category"), organization = body.get("organization"), objective = body.get("objective");
    await prisma.accomplishment.create({
      data: {
        title,
        publisher,
        link,
        type,
        details,
        status,
        category,
        organization,
        objective,
        workExperienceId: experienceId
      }
    });
    let accomplishments = await prisma.accomplishment.findMany({
      where: {
        workExperienceId: experienceId
      }
    });
    return (0, import_node4.json)({
      accomplishments
    });
  } else
    throw new Error("Invalid action type");
};

// server-entry-module:@remix-run/dev/server-build
var route2 = __toESM(require_profile_education_degree_new());

// app/routes/profile.degrees.$degreeId.tsx
var profile_degrees_degreeId_exports = {};
__export(profile_degrees_degreeId_exports, {
  action: () => action2
});
var import_node5 = require("@remix-run/node");
var action2 = async ({ request, params }) => {
  let {
    degreeId
  } = params;
  if (!degreeId)
    throw new Error("No degreeId provided");
  let body = await request.formData();
  if (body.get("action") === "addAccomplishment") {
    let title = body.get("title"), publisher = body.get("publisher"), link = body.get("link"), type = body.get("type"), details = body.get("details"), status = body.get("status"), category = body.get("category"), organization = body.get("organization"), objective = body.get("objective");
    await prisma.accomplishment.create({
      data: {
        title,
        publisher,
        link,
        type,
        details,
        status,
        category,
        organization,
        objective,
        degreeId
      }
    });
    let accomplishments = await prisma.accomplishment.findMany({
      where: {
        degreeId
      }
    });
    return (0, import_node5.json)({
      accomplishments
    });
  } else
    throw new Error("Invalid action type");
};

// app/routes/profile.certifications.tsx
var profile_certifications_exports = {};
__export(profile_certifications_exports, {
  action: () => action3,
  loader: () => loader2
});
var import_node7 = require("@remix-run/node");

// app/upload-handler.server.ts
var import_storage = require("@google-cloud/storage"), import_node6 = require("@remix-run/node"), import_lib_storage = require("@aws-sdk/lib-storage"), import_client_s3 = require("@aws-sdk/client-s3"), import_stream = require("stream"), import_supabase_js = require("@supabase/supabase-js"), storage = new import_client_s3.S3Client({
  endpoint: "http://s3.amazonaws.com/",
  credentials: {
    accessKeyId: "AKIAZ7CTBDZGEZEB6ENW",
    secretAccessKey: "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"
  },
  // This is only needed for the AWS SDK and it must be set to their region
  region: "us-east-1"
});
var supabase = (0, import_supabase_js.createClient)("https://kkppsfrqongueliewefs.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcHBzZnJxb25ndWVsaWV3ZWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4MjkxNjYsImV4cCI6MjAwMzQwNTE2Nn0.NjQbf0flnN1ht7n_ex2L6iUX7WAhlswzYnQfRsdt3Cw"), uploadStreamToSupasebaseStorage = async (file, fileName) => {
  let bucketName = "bs-documents", { data, error } = await supabase.storage.from(bucketName).upload(`solver/${fileName}`, file, {
    cacheControl: "3600",
    upsert: !0
  });
  return error ? (console.error(error), `error://${error.message}`) : data ? data.path : "error://No data returned from supabase";
};
var supabaseStorageUploaderHandler = (userId) => async ({
  filename,
  data,
  contentType,
  name
}) => {
  if (filename) {
    let dataArray = [];
    for await (let x of data)
      dataArray.push(x);
    let fileInstance = new File(dataArray, `${userId}_${filename}`, { type: contentType });
    return await uploadStreamToSupasebaseStorage(fileInstance, `${userId}_${filename}`);
  }
};

// app/utils.ts
var import_react8 = require("@remix-run/react"), import_react9 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react8.useMatches)(), route = (0, import_react9.useMemo)(
    () => matchingRoutes.find((route3) => route3.id === id),
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
function readFilePathFromFormData(formData, name) {
  return formData.get(name).size > 0 ? formData.get(name) : null;
}

// app/routes/profile.certifications.tsx
var action3 = async ({ request }) => {
  let userId = await requireUserId(request), body = await (0, import_node7.unstable_parseMultipartFormData)(request, (0, import_node7.unstable_composeUploadHandlers)(
    supabaseStorageUploaderHandler(userId),
    (0, import_node7.unstable_createMemoryUploadHandler)()
  )), actionType = body.get("action");
  if (actionType === "addCertificate") {
    let newCertification = await prisma.certification.create({
      data: {
        name: "",
        userId: await requireUserId(request),
        isTemp: !0
      }
    });
    return (0, import_node7.json)({
      newCertification
    });
  } else if (actionType === "saveCertificate") {
    let issueYear = parseInt(body.get("issueYear")), issueMonth = parseInt(body.get("issueMonth")), expirationYear = parseInt(body.get("expiryYear")), expirationMonth = parseInt(body.get("expiryMonth")), durationInMonths = parseInt(body.get("durationInMonths"));
    return await prisma.certification.update({
      where: {
        id: body.get("certificationId")
      },
      data: {
        name: body.get("name"),
        description: body.get("description"),
        issuingAuthority: body.get("issuingAuthority"),
        certificate: readFilePathFromFormData(body, "certificate"),
        issueYear: isNaN(issueYear) ? null : issueYear,
        issueMonth: isNaN(issueMonth) ? null : issueMonth,
        expirationYear: isNaN(expirationYear) ? null : expirationYear,
        expirationMonth: isNaN(expirationMonth) ? null : expirationMonth,
        durationInMonths: isNaN(durationInMonths) ? null : durationInMonths,
        isTemp: !1
      }
    }), (0, import_node7.redirect)("/profile/degrees");
  } else
    throw new Error("Invalid action type");
}, loader2 = async ({ request }) => {
  let userId = await requireUserId(request), certifications = await prisma.certification.findMany({
    where: {
      userId,
      isTemp: !1
    }
  });
  return (0, import_node7.json)({
    certifications
  });
};

// app/routes/profile.education.back.tsx
var profile_education_back_exports = {};
__export(profile_education_back_exports, {
  action: () => action4,
  default: () => profile_education_back_default,
  loader: () => loader3
});
var import_node8 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_react_hook_form = require("react-hook-form");

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

// app/components/AccomplishmentCard.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function AccomplishmentCard({
  accomplishment
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col shadow-sm p-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex text-sm bg-black p-2 text-white w-auto", children: accomplishment.type }, void 0, !1, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-sm", children: accomplishment.category }, void 0, !1, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AccomplishmentCard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "font-bold text-lg", children: accomplishment.title }, void 0, !1, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      accomplishment.publisher && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-sm", children: accomplishment.publisher }, void 0, !1, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 24,
        columnNumber: 41
      }, this),
      accomplishment.organization && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-sm", children: accomplishment.organization }, void 0, !1, {
        fileName: "app/components/AccomplishmentCard.tsx",
        lineNumber: 29,
        columnNumber: 44
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AccomplishmentCard.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/AccomplishmentCard.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AccomplishmentCard.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/DegreeCard.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function DegreeCard({ degree }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4 border-gray-500 border-solid rounded-md p-5 border-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-2xl font-bold", children: degree.level }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.major }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.country }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.school }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.startYear }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.startMonth }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.stateOrCity }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    degree.accomplishments.map((accomplishment) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AccomplishmentCard, { accomplishment }, void 0, !1, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/DegreeCard.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/profile.education.back.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let userId = await requireUserId(request), degrees = await prisma.degree.findMany({
    where: {
      userId
    }
  });
  return (0, import_node8.json)({ degrees });
}, action4 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData();
  console.log(formData);
  let degrees = await prisma.degree.findMany({
    where: {
      userId
    }
  });
  return (0, import_node8.json)({ degrees });
};
function profile_education_back_default() {
  let [addingDegree, setAddingDegree] = (0, import_react11.useState)(!1), { degrees } = (0, import_react10.useLoaderData)(), { register, watch, control, handleSubmit } = (0, import_react_hook_form.useForm)(), isCurrentlyStudying = watch("currentlyStudying"), formRef = (0, import_react11.useRef)(null), { fields: fields2, append, remove } = (0, import_react_hook_form.useFieldArray)({
    control,
    name: "accomplishments"
  }), submit = (0, import_react10.useSubmit)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full max-w-4xl mx-auto", children: [
    degrees.map((degree, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DegreeCard, { degree }, index, !1, {
      fileName: "app/routes/profile.education.back.tsx",
      lineNumber: 56,
      columnNumber: 11
    }, this)),
    !addingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { onClick: () => {
      setAddingDegree(!0);
    }, className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add Degree" }, void 0, !1, {
      fileName: "app/routes/profile.education.back.tsx",
      lineNumber: 60,
      columnNumber: 26
    }, this),
    addingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Form, { method: "post", onSubmit: handleSubmit((data) => {
      console.log(data), submit(formRef.current);
    }), className: "mb-4 border-gray-500 border-solid rounded-md p-5 border-2", ref: formRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "name", className: "block mb-2 font-medium text-gray-700", children: "Degree" }, void 0, !1, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "select",
        {
          id: "name",
          ...register("name", { required: !0 }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "", children: "Select Degree" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "UG Diploma", children: "UG Diploma" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 82,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Bachelors", children: "Bachelors" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 83,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "PG Diploma", children: "PG Diploma" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Professional Degree", children: "Professional Degree" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 85,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Masters", children: "Masters" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 86,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "PhD or Doctoral Studies", children: "PhD or Doctoral Studies" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 76,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Field" }, void 0, !1, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 94,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Country" }, void 0, !1, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "select",
          {
            id: "country",
            ...register("country", { required: !0 }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "", children: "Select Country" }, void 0, !1, {
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 111,
                columnNumber: 15
              }, this),
              countries_default.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: country.name, children: country.name }, country.code, !1, {
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 106,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "university", className: "block mb-2 font-medium text gray-700", children: "University" }, void 0, !1, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 124,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "started", className: "block mb-2 font-medium text-gray-700", children: "Start" }, void 0, !1, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            id: "start",
            ...register("startDate", { required: !0 }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 136,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      !isCurrentlyStudying && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "end", className: "block mb-2 font-medium text-gray-700", children: "End" }, void 0, !1, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            id: "end",
            ...register("endDate", { required: !0 }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 148,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 144,
        columnNumber: 36
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 157,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "currentlyStudying", className: "font-medium text-gray-700", children: "Currently Studying Here" }, void 0, !1, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
        fields2.map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "accomplishment", className: "block mb-2 font-medium text-gray-700", children: [
            "Accomplishment ",
            index + 1
          ] }, void 0, !0, {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 173,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "select",
            {
              id: "type",
              ...register(`accomplishments.${index}.type`, { required: !0 }),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "", children: "Select Accomplishment" }, void 0, !1, {
                  fileName: "app/routes/profile.education.back.tsx",
                  lineNumber: 181,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Thesis", children: "Thesis" }, void 0, !1, {
                  fileName: "app/routes/profile.education.back.tsx",
                  lineNumber: 182,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Patent", children: "Patent" }, void 0, !1, {
                  fileName: "app/routes/profile.education.back.tsx",
                  lineNumber: 183,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Published Work", children: "Published Work" }, void 0, !1, {
                  fileName: "app/routes/profile.education.back.tsx",
                  lineNumber: 184,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 176,
              columnNumber: 21
            },
            this
          ),
          field.type === "Thesis" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 190,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 193,
                columnNumber: 27
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 189,
            columnNumber: 25
          }, this),
          field.type === "Patent" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 206,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 209,
                columnNumber: 27
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 205,
            columnNumber: 25
          }, this),
          field.type === "Published Work" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, !1, {
              fileName: "app/routes/profile.education.back.tsx",
              lineNumber: 222,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
                fileName: "app/routes/profile.education.back.tsx",
                lineNumber: 225,
                columnNumber: 27
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/profile.education.back.tsx",
            lineNumber: 221,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 172,
          columnNumber: 19
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { onClick: () => append({}, {
          shouldFocus: !0
        }), className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add an Accomplishment" }, void 0, !1, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 238,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", className: "w-full text-center border-gray-400 rounded-md border-solid border-2 py-5", children: "Save" }, void 0, !1, {
          fileName: "app/routes/profile.education.back.tsx",
          lineNumber: 243,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.education.back.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.education.back.tsx",
      lineNumber: 67,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.education.back.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/profile.professional.tsx
var profile_professional_exports = {};
__export(profile_professional_exports, {
  action: () => action5,
  default: () => Professional,
  loader: () => loader4
});
var import_node9 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react16 = require("react");

// app/assets/data/employerTypes.ts
var employerTypes_default = [
  "Academic Institution",
  "Non-Profit Organization",
  "Government Organization",
  "Biotech Company",
  "Pharmaceutical Company",
  "Others"
];

// app/assets/data/employmentTypes.ts
var employmentTypes_default = [
  "Part-time",
  "Full-time",
  "Contract"
];

// app/assets/data/months.ts
var months_default = [
  {
    id: "1",
    name: "January",
    shortName: "Jan"
  },
  {
    id: "2",
    name: "February",
    shortName: "Feb"
  },
  {
    id: "3",
    name: "March",
    shortName: "Mar"
  },
  {
    id: "4",
    name: "April",
    shortName: "Apr"
  },
  {
    id: "5",
    name: "May",
    shortName: "May"
  },
  {
    id: "6",
    name: "June",
    shortName: "Jun"
  },
  {
    id: "7",
    name: "July",
    shortName: "Jul"
  },
  {
    id: "8",
    name: "August",
    shortName: "Aug"
  },
  {
    id: "9",
    name: "September",
    shortName: "Sep"
  },
  {
    id: "10",
    name: "October",
    shortName: "Oct"
  },
  {
    id: "11",
    name: "November",
    shortName: "Nov"
  },
  {
    id: "12",
    name: "December",
    shortName: "Dec"
  }
];

// app/assets/data/years.ts
var years_default = Array.from(
  { length: 50 },
  (_, i) => (/* @__PURE__ */ new Date()).getFullYear() - i
);

// app/components/AccomplishmentForm.tsx
var import_react12 = require("@remix-run/react");

// app/components/LabelledDropdown.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function LabelledDropdown({
  label,
  name,
  onChange,
  options,
  className,
  placeholder
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className, children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { className: "block mb-2 font-bold text-md text-gray-700", children: label }, void 0, !1, {
      fileName: "app/components/LabelledDropdown.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "select",
      {
        name,
        onChange: (e) => onChange ? onChange(e.target.value) : null,
        className: "w-full p-3 border-[1px] border-black rounded-sm focus:outline-none focus:border-2",
        children: [
          placeholder && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "None", children: placeholder }, void 0, !1, {
            fileName: "app/components/LabelledDropdown.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this),
          options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: option.value, children: option.label }, option.name, !1, {
            fileName: "app/components/LabelledDropdown.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this))
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/LabelledDropdown.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/LabelledDropdown.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/AccomplishmentForm.tsx
var import_react13 = require("react");

// app/components/LabelledInput.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function LabelledTextInput({
  label,
  description,
  name,
  onChange,
  placeholder,
  value,
  ref,
  className,
  multiline
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className, children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "block mb-2 font-bold text-md text-gray-700", children: label }, void 0, !1, {
      fileName: "app/components/LabelledInput.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-sm text-gray-600 mb-2", children: description }, void 0, !1, {
      fileName: "app/components/LabelledInput.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    multiline === !0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "textarea",
      {
        name,
        onChange: (e) => onChange ? onChange(e.target.value) : null,
        placeholder,
        value,
        ref,
        className: "w-full p-3 border-[1px] border-black rounded-sm focus:outline-none focus:border-2"
      },
      void 0,
      !1,
      {
        fileName: "app/components/LabelledInput.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "input",
      {
        name,
        type: "text",
        onChange: (e) => onChange ? onChange(e.target.value) : null,
        placeholder,
        value,
        ref,
        className: "w-full p-3 border-[1px] border-black rounded-sm focus:outline-none focus:border-2"
      },
      void 0,
      !1,
      {
        fileName: "app/components/LabelledInput.tsx",
        lineNumber: 44,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/LabelledInput.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/components/AccomplishmentForm.tsx
var import_react14 = require("@headlessui/react");

// app/components/LabelledFileInput.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function LabelledFileInput({
  label,
  description,
  name,
  onChange,
  placeholder,
  value,
  ref,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className, children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { className: "block mb-2 font-bold text-md text-gray-700", children: label }, void 0, !1, {
      fileName: "app/components/LabelledFileInput.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-sm text-gray-600 mb-2", children: description }, void 0, !1, {
      fileName: "app/components/LabelledFileInput.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        name,
        type: "file",
        onChange: (e) => onChange ? onChange(e.target.value) : null,
        placeholder,
        value,
        ref,
        className: "w-full p-3 border-[1px] border-black rounded-sm focus:outline-none focus:border-2"
      },
      void 0,
      !1,
      {
        fileName: "app/components/LabelledFileInput.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/LabelledFileInput.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/AccomplishmentForm.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function AccomplishmentForm({
  action: action17,
  open,
  setOpen,
  onSubmit
}) {
  let fetcher = (0, import_react12.useFetcher)(), [type, setType] = (0, import_react13.useState)("Not selected");
  return (0, import_react13.useEffect)(() => {
    fetcher.data && (onSubmit(fetcher.data.accomplishments), setOpen(!1));
  }, [fetcher.data]), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react14.Dialog, { open, onClose: () => setOpen(!1), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "fixed inset-0 bg-black/30 z-[100]", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/components/AccomplishmentForm.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "fixed inset-0 overflow-y-auto z-[100]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex min-h-full items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react14.Dialog.Panel, { className: "bg-white border-2 rounded-sm border-black p-10 w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { action: action17, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { name: "action", type: "hidden", value: "addAccomplishment" }, void 0, !1, {
        fileName: "app/components/AccomplishmentForm.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        LabelledDropdown,
        {
          name: "type",
          label: "Select Accomplishment Type",
          options: [
            { value: "Not selected", label: "Please select the type of accomplishment", name: "Not selected" },
            { value: "Research Publication", label: "Research Publication", name: "Research Publication" },
            { value: "Patent", label: "Innovation Patent", name: "Patent" },
            { value: "Research Grant or Academic Award", label: "Research Grant or Academic Award", name: "Research Grant or Academic Award" },
            { value: "Professional Award", label: "Professional Award", name: "Professional Award" },
            { value: "Conference Presentation", label: "Conference Presentation", name: "Conference Presentation" },
            { value: "Media Coverage", label: "Media Coverage", name: "Media Coverage" },
            { value: "Internship", label: "Internship", name: "Internship" }
          ],
          className: "w-full",
          onChange: (value) => setType(value)
        },
        void 0,
        !1,
        {
          fileName: "app/components/AccomplishmentForm.tsx",
          lineNumber: 36,
          columnNumber: 15
        },
        this
      ),
      type === "Research Publication" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "title",
            label: "Title",
            placeholder: "Enter the title of your publication",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 55,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "publisher",
            label: "Publisher",
            placeholder: "Enter the name of the publisher",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 61,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "details",
            label: "Major Findings",
            multiline: !0,
            placeholder: "Enter the major findings of your publication",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 67,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "link",
            label: "Link",
            placeholder: "Please provide a link to your publication",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 74,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledFileInput,
          {
            name: "file",
            label: "Supporting Document",
            placeholder: "Please upload a supporting document (if any)",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 80,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AccomplishmentForm.tsx",
        lineNumber: 54,
        columnNumber: 19
      }, this),
      type === "Patent" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "title",
            label: "Title",
            placeholder: "Enter the title of your patent",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 92,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledDropdown,
          {
            name: "status",
            label: "Status",
            options: [
              { value: "Filed", label: "Filed", name: "Filed" },
              { value: "Accepted", label: "Accepted", name: "Accepted" }
            ],
            placeholder: "Select the status of your patent",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 98,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledDropdown,
          {
            name: "category",
            label: "Type",
            options: [
              { value: "National", label: "National", name: "National" },
              { value: "International", label: "International", name: "International" }
            ],
            placeholder: "Select the type of your patent",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 108,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "link",
            label: "Link",
            placeholder: "Please provide a link to your patent",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 118,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledFileInput,
          {
            name: "file",
            label: "Supporting Document",
            placeholder: "Please upload a supporting document (if any)",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 124,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AccomplishmentForm.tsx",
        lineNumber: 91,
        columnNumber: 19
      }, this),
      type === "Research Grant or Academic Award" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "title",
            label: "Name",
            placeholder: "Name of the award/grant",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 136,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "organization",
            label: "Awarded By",
            placeholder: "Name of the person/organization that awarded you",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 142,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "details",
            label: "Reason",
            placeholder: "Why were you awarded this grant/award?",
            multiline: !0,
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 148,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "link",
            label: "Link",
            placeholder: "Please provide a link (if any) to your grant/award",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 155,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledFileInput,
          {
            name: "file",
            label: "Supporting Document",
            placeholder: "Please upload a supporting document (if any)",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 161,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AccomplishmentForm.tsx",
        lineNumber: 135,
        columnNumber: 19
      }, this),
      type === "Conference Presentation" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "title",
            label: "Conference Name/Year",
            placeholder: "Name of the conference and the year of presentation",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 173,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "organization",
            label: "Organized By",
            placeholder: "Name of the organizer",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 179,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledDropdown,
          {
            name: "category",
            label: "Purpose",
            options: [
              { value: "Attendance", label: "Attendance", name: "Attendance" },
              { value: "Poster Presentation", label: "Poster Presentation", name: "Poster Presentation" },
              { value: "Oral Presentation", label: "Oral Presentation", name: "Oral Presentation" }
            ],
            placeholder: "Select the purpose of your attendance",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 185,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "link",
            label: "Link",
            placeholder: "Please provide a link (if any) to your conference presentation",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 196,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledFileInput,
          {
            name: "file",
            label: "Supporting Document",
            placeholder: "Please upload a supporting document (if any)",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 202,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AccomplishmentForm.tsx",
        lineNumber: 172,
        columnNumber: 19
      }, this),
      type === "Internship" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "objective",
            label: "Objective",
            placeholder: "What was the objective of your internship?",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 214,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "organization",
            label: "Organization",
            placeholder: "Name of the organization you interned at",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 220,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "details",
            label: "Findings",
            placeholder: "What were your major findings during the internship",
            multiline: !0,
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 226,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "link",
            label: "Link",
            placeholder: "Please provide a link (if any) to your work/certificate",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 233,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledFileInput,
          {
            name: "file",
            label: "Supporting Document",
            placeholder: "Please upload a supporting document (if any)",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 239,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AccomplishmentForm.tsx",
        lineNumber: 213,
        columnNumber: 19
      }, this),
      type === "Professional Award" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "title",
            label: "Name",
            placeholder: "Name of the award/grant",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 251,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "organization",
            label: "Awarding Body",
            placeholder: "Name of the person/organization that awarded you",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 257,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "details",
            label: "Reason",
            placeholder: "Why were you awarded this grant/award?",
            multiline: !0,
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 263,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "link",
            label: "Link",
            placeholder: "Please provide a link (if any) to your grant/award",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 270,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledFileInput,
          {
            name: "file",
            label: "Supporting Document",
            placeholder: "Please upload a supporting document (if any)",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 276,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AccomplishmentForm.tsx",
        lineNumber: 250,
        columnNumber: 19
      }, this),
      type === "Media Coverage" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "details",
            label: "Description",
            multiline: !0,
            placeholder: "Please provide a description of the media coverage",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 288,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "organization",
            label: "News Media",
            placeholder: "Name of the news media",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 295,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledDropdown,
          {
            name: "category",
            label: "Coverage Type",
            options: [
              { value: "International News", label: "International News", name: "International News" },
              { value: "National News", label: "National News", name: "National News" },
              { value: "Regional News", label: "Regional News", name: "Regional News" },
              { value: "Online News", label: "Online News", name: "Online News" }
            ],
            placeholder: "Select the type of coverage",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 301,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledTextInput,
          {
            name: "link",
            label: "Link",
            placeholder: "Please provide a link (if any) to your work/certificate",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 313,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          LabelledFileInput,
          {
            name: "file",
            label: "Supporting Document",
            placeholder: "Please upload a supporting document (if any)",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AccomplishmentForm.tsx",
            lineNumber: 319,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AccomplishmentForm.tsx",
        lineNumber: 287,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { type: "submit", className: "mt-5 bg-blue-500 border-blue-500 border-[1px] text-white px-5 py-2 rounded-md", children: "Save" }, void 0, !1, {
          fileName: "app/components/AccomplishmentForm.tsx",
          lineNumber: 329,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "ml-2 mt-5 bg-white border-[1px] border-black px-5 py-2 rounded-md", onClick: () => setOpen(!1), children: "Cancel" }, void 0, !1, {
          fileName: "app/components/AccomplishmentForm.tsx",
          lineNumber: 330,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AccomplishmentForm.tsx",
        lineNumber: 328,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AccomplishmentForm.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/AccomplishmentForm.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/AccomplishmentForm.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/AccomplishmentForm.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AccomplishmentForm.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/components/WorkExperienceCard.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function WorkExperienceCard({ experience }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mb-4 shadow-sm p-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-full justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "text-xl font-bold", children: experience.title }, void 0, !1, {
        fileName: "app/components/WorkExperienceCard.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-lg", children: !experience.endMonth || !experience.endYear ? `${experience.startMonth}, ${experience.startYear} - Present` : `${experience.startMonth}, ${experience.startYear} - ${experience.endMonth}, ${experience.endYear}` }, void 0, !1, {
        fileName: "app/components/WorkExperienceCard.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/WorkExperienceCard.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-lg text-start w-full", children: experience.country ? `${experience.company}, ${experience.country}` : `${experience.company}` }, void 0, !1, {
      fileName: "app/components/WorkExperienceCard.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-start w-full", children: experience.primaryDuties }, void 0, !1, {
      fileName: "app/components/WorkExperienceCard.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-start w-full", children: experience.secondaryDuties }, void 0, !1, {
      fileName: "app/components/WorkExperienceCard.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/WorkExperienceCard.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/profile.professional.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  let userId = await requireUserId(request), body = await (0, import_node9.unstable_parseMultipartFormData)(request, (0, import_node9.unstable_composeUploadHandlers)(
    supabaseStorageUploaderHandler(userId),
    (0, import_node9.unstable_createMemoryUploadHandler)()
  )), actionType = body.get("action");
  if (actionType === "addWorkExperience") {
    let newWorkExperience = await prisma.workExperience.create({
      data: {
        level: "",
        title: "",
        company: "",
        userId: await requireUserId(request),
        isTemp: !0
      }
    });
    return (0, import_node9.json)({
      newWorkExperience
    });
  } else if (actionType === "saveWorkExperience") {
    let startYear = parseInt(body.get("startYear")), startMonth = parseInt(body.get("startMonth")), endYear = parseInt(body.get("endYear")), endMonth = parseInt(body.get("endMonth"));
    return await prisma.workExperience.update({
      where: {
        id: body.get("workExperienceId")
      },
      data: {
        title: body.get("title"),
        company: body.get("company"),
        country: body.get("country"),
        stateOrCity: body.get("cityOrState"),
        startYear: isNaN(startYear) ? null : startYear,
        startMonth: isNaN(startMonth) ? null : startMonth,
        endYear: isNaN(endYear) ? null : endYear,
        endMonth: isNaN(endMonth) ? null : endMonth,
        companyWebsite: body.get("companyWebsite"),
        companyLinkedIn: body.get("companyLinkedIn"),
        primaryDuties: body.get("primaryDuties"),
        secondaryDuties: body.get("secondaryDuties"),
        proofOfEmployment: readFilePathFromFormData(body, "proofOfEmployment"),
        isTemp: !1
      }
    }), (0, import_node9.json)({
      action: "saveWorkExperience",
      workExperienceId: body.get("workExperienceId"),
      success: !0
    });
  } else
    throw new Error("Invalid action type");
}, loader4 = async ({ request }) => {
  let userId = await requireUserId(request), workExperiences = await prisma.workExperience.findMany({
    include: {
      accomplishments: !0
    },
    where: {
      userId,
      isTemp: !1
    }
  });
  return (0, import_node9.json)({
    workExperiences
  });
};
function Professional() {
  let fetcher = (0, import_react15.useFetcher)(), { workExperiences } = (0, import_react15.useLoaderData)(), [searchParams] = (0, import_react15.useSearchParams)(), [isAddingAccomplishment, setIsAddingAccomplishment] = (0, import_react16.useState)(!1), [isAddingWorkExperience, setIsAddingWorkExperience] = (0, import_react16.useState)(!1), [experienceBeingAdded, setExperienceBeingAdded] = (0, import_react16.useState)(null), [accomplishmentsForExperienceBeingAdded, setAccomplishmentsForExperienceBeingAdded] = (0, import_react16.useState)([]);
  return (0, import_react16.useEffect)(() => {
    searchParams.get("addAccomplishment") && setIsAddingAccomplishment(!0);
  }, [searchParams]), (0, import_react16.useEffect)(() => {
    fetcher.data && (fetcher.data.newWorkExperience ? (setIsAddingWorkExperience(!!fetcher.data.newWorkExperience.id), setExperienceBeingAdded(fetcher.data.newWorkExperience.id)) : fetcher.data.action === "saveWorkExperience" && (setIsAddingWorkExperience(!1), setExperienceBeingAdded(null)));
  }, [fetcher.data]), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { children: [
    workExperiences.map((experience) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(WorkExperienceCard, { experience }, experience.id, !1, {
      fileName: "app/routes/profile.professional.tsx",
      lineNumber: 122,
      columnNumber: 43
    }, this)),
    isAddingWorkExperience && experienceBeingAdded && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(fetcher.Form, { action: "/profile/professional", method: "post", className: "p-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { name: "workExperienceId", type: "hidden", value: experienceBeingAdded }, void 0, !1, {
        fileName: "app/routes/profile.professional.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledTextInput,
        {
          name: "title",
          label: "Role/Title",
          placeholder: "Enter your role/title",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 127,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledDropdown,
        {
          name: "employmentType",
          label: "Employment Type",
          options: employmentTypes_default.map((employmentType) => ({ value: employmentType, label: employmentType, name: employmentType })),
          className: "w-full mt-5",
          placeholder: "Select Employment Type"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 133,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledTextInput,
        {
          name: "company",
          label: "Company/Organization",
          placeholder: "Enter the name of your company/organization",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 140,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledDropdown,
        {
          name: "employerType",
          label: "Employer Type",
          options: employerTypes_default.map((employerType) => ({ value: employerType, label: employerType, name: employerType })),
          className: "w-full mt-5",
          placeholder: "Select Employer Type"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 146,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledTextInput,
        {
          name: "companyWebsite",
          label: "Company Website",
          placeholder: "Enter the website of your company/organization",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 153,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledTextInput,
        {
          name: "companyLinkedIn",
          label: "Company LinkedIn",
          placeholder: "Enter the LinkedIn of your company/organization",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 159,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledDropdown,
        {
          name: "country",
          label: "Country",
          options: countries_default.map((country) => ({ value: country.code, label: country.name, name: country.name })),
          className: "w-full mt-5",
          placeholder: "Select Country"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 165,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledTextInput,
        {
          name: "cityOrState",
          label: "City/State",
          placeholder: "Enter the city/state of your company/organization",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 172,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Started" }, void 0, !1, {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          LabelledDropdown,
          {
            name: "startYear",
            placeholder: "Year",
            className: "w-full md:w-1/2",
            options: years_default.map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.professional.tsx",
            lineNumber: 182,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          LabelledDropdown,
          {
            name: "startMonth",
            placeholder: "Month",
            className: "w-full md:w-1/2",
            options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.professional.tsx",
            lineNumber: 190,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.professional.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Ended" }, void 0, !1, {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          LabelledDropdown,
          {
            name: "endYear",
            placeholder: "Year",
            className: "w-full md:w-1/2",
            options: years_default.map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.professional.tsx",
            lineNumber: 203,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          LabelledDropdown,
          {
            name: "endMonth",
            placeholder: "Month",
            className: "w-full md:w-1/2",
            options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.professional.tsx",
            lineNumber: 211,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.professional.tsx",
        lineNumber: 199,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledTextInput,
        {
          name: "primaryDuties",
          label: "Primary Duties",
          placeholder: "Enter the primary duties of your role",
          multiline: !0,
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 220,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        LabelledTextInput,
        {
          name: "secondaryDuties",
          label: "Secondary Duties",
          placeholder: "Enter the secondary duties (if any) of your role",
          multiline: !0,
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.professional.tsx",
          lineNumber: 227,
          columnNumber: 11
        },
        this
      ),
      accomplishmentsForExperienceBeingAdded.map((accomplishment) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AccomplishmentCard, { accomplishment }, accomplishment.id, !1, {
        fileName: "app/routes/profile.professional.tsx",
        lineNumber: 235,
        columnNumber: 74
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { type: "button", onClick: () => setIsAddingAccomplishment(!0), className: "mt-5 text-blue-500", children: "Add Accomplishment" }, void 0, !1, {
        fileName: "app/routes/profile.professional.tsx",
        lineNumber: 237,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { name: "action", type: "hidden", value: "saveWorkExperience" }, void 0, !1, {
        fileName: "app/routes/profile.professional.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", children: "Save" }, void 0, !1, {
        fileName: "app/routes/profile.professional.tsx",
        lineNumber: 239,
        columnNumber: 11
      }, this)
    ] }, experienceBeingAdded, !0, {
      fileName: "app/routes/profile.professional.tsx",
      lineNumber: 125,
      columnNumber: 59
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(fetcher.Form, { action: "/profile/professional", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { name: "action", type: "hidden", value: "addWorkExperience" }, void 0, !1, {
        fileName: "app/routes/profile.professional.tsx",
        lineNumber: 244,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", disabled: isAddingWorkExperience, children: "Add Experience" }, void 0, !1, {
        fileName: "app/routes/profile.professional.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.professional.tsx",
      lineNumber: 243,
      columnNumber: 9
    }, this),
    experienceBeingAdded && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AccomplishmentForm, { action: `/profile/professional/${experienceBeingAdded}`, open: isAddingAccomplishment, setOpen: setIsAddingAccomplishment, onSubmit: (accomplishments) => {
      setAccomplishmentsForExperienceBeingAdded(accomplishments);
    } }, Date.now().toString(), !1, {
      fileName: "app/routes/profile.professional.tsx",
      lineNumber: 249,
      columnNumber: 33
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.professional.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
}

// app/routes/terms-and-conditions.tsx
var terms_and_conditions_exports = {};
__export(terms_and_conditions_exports, {
  default: () => TermsAndConditionsPage
});
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function TermsAndConditionsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "font-bold text-2xl text-center mb-10", children: "Terms and Conditions" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: [
      "Welcome to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "https://www.biosolver.io", children: "www.biosolver.io" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Eligibility" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "You must be 18 years or older to use our Site. By accessing or using our Site, you represent and warrant that you are 18 years of age or older and that you have the legal capacity to enter into this Agreement." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Services" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "Our Site provides a platform for biotechnology freelancers (\u201CSolvers\u201D) to connect with potential clients (\u201CSeekers\u201D) who need their services. We do provide optional and additional services other than the platform for connecting Solvers and Seekers." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Registration" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "To use our Site as a Solver or Seeker, you must register and create an account. You must provide accurate, current, and complete information during the registration process and keep your account information up to date." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Use of the Site" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "You agree to use our Site only for lawful purposes and in accordance with these Terms of Service. You agree not to use our Site:" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "In any way that violates any applicable federal, state, local, or international law or regulation" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "To transmit, or procure the sending of, any advertising or promotional material, including any \u201Cjunk mail,\u201D \u201Cchain letter,\u201D \u201Cspam,\u201D or any other similar solicitation" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "To engage in any other conduct that restricts or inhibits anyone\u2019s use or enjoyment of the Site, or which, as determined by us, may harm the Company or users of the Site, or expose them to liability" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Fees and Payment" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "We do not charge any fees for using our Site. Freelancers and Clients agree to settle all financial transactions for services performed through our Site." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Intellectual Property Rights" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "The content, features, and functionality of our Site are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. You agree not to reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "You may store files that are automatically cached by your Web browser for display enhancement purposes" }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Disclaimer of Warranties" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "OUR SITE IS PROVIDED ON AN \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT THE ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF THE CONTENT OR SERVICES PROVIDED ON OUR SITE." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Limitation of Liability" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "IN NO EVENT WILL WE, OUR AFFILIATES, OR OUR LICENSORS BE LIABLE FOR DAMAGES OF ANY KIND (INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES) ARISING FROM THE USE OF, OR INABILITY TO USE, OUR SITE, INCLUDING, BUT NOT LIMITED TO, ANY ERRORS OR OMISSIONS IN ANY CONTENT, OR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT (OR PRODUCT) POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE, EVEN IF ADVISED OF THEIR POSSIBILITY. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Indemnification" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "You agree to indemnify, defend, and hold harmless us, our affiliates, licensors, and service providers, and our and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\u2019 fees) arising out of or relating to your violation of these Terms of Service or your use of our Site, including, but not limited to, any use of our Site\u2019s content, services, and products other than as expressly authorized in these Terms of Service or your use of any information obtained from our Site." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Termination" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "We may terminate your access to all or any part of our Site at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate this Agreement, you may simply discontinue using our Site." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Governing Law and Jurisdiction" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "These Terms of Service and any disputes or claims arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein without giving effect to any choice or conflict of law provision or rule. Any legal suit, action or proceeding arising out of, or related to, these Terms of Service or our Site shall be instituted exclusively in the courts of the Province of Ontario although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms of Service in your country of residence or any other relevant country. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Entire Agreement" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "These Terms of Service, our Privacy Policy, and any additional terms to which you agree when using particular elements of our Site, constitute the sole and entire agreement between you and us regarding our Site and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding our Site." }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Changes to Terms of Service" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "We may modify or update these Terms of Service from time to time, and the most current version will be posted on our Site. Your continued use of our Site after we post any modifications to the Terms of Service on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms of Service." }, void 0, !1, {
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

// app/routes/solver.application.tsx
var solver_application_exports = {};
__export(solver_application_exports, {
  action: () => action6,
  default: () => SeekerApplication,
  loader: () => loader5
});
var import_node10 = require("@remix-run/node"), import_react19 = require("@remix-run/react"), import_react20 = require("react");

// app/assets/data/assessmentFormats.ts
var assessmentFormats_default = [
  "Not Applicable",
  "Percentage",
  "Percentile",
  "GPA",
  "CGPA",
  "Letter Grades",
  "Bologna Process",
  "Narrative Assessment",
  "Other"
];

// app/assets/data/currencyCodes.ts
var currencyCodes_default = [
  { name: "United States Dollar", code: "USD", symbol: "$" },
  { name: "Euro", code: "EUR", symbol: "\u20AC" },
  { name: "British Pound Sterling", code: "GBP", symbol: "\xA3" },
  { name: "Japanese Yen", code: "JPY", symbol: "\xA5" },
  { name: "Canadian Dollar", code: "CAD", symbol: "CA$" },
  { name: "Australian Dollar", code: "AUD", symbol: "A$" },
  { name: "Swiss Franc", code: "CHF", symbol: "CHF" },
  { name: "Chinese Yuan", code: "CNY", symbol: "\xA5" },
  { name: "Indian Rupee", code: "INR", symbol: "\u20B9" },
  { name: "Brazilian Real", code: "BRL", symbol: "R$" },
  { name: "Mexican Peso", code: "MXN", symbol: "$" },
  { name: "Russian Ruble", code: "RUB", symbol: "\u20BD" },
  { name: "South Korean Won", code: "KRW", symbol: "\u20A9" },
  { name: "South African Rand", code: "ZAR", symbol: "R" },
  { name: "Singapore Dollar", code: "SGD", symbol: "S$" },
  { name: "New Zealand Dollar", code: "NZD", symbol: "NZ$" },
  { name: "Hong Kong Dollar", code: "HKD", symbol: "HK$" },
  { name: "Swedish Krona", code: "SEK", symbol: "kr" },
  { name: "Norwegian Krone", code: "NOK", symbol: "kr" },
  { name: "Turkish Lira", code: "TRY", symbol: "\u20BA" }
];

// app/assets/data/jobTypes.ts
var jobTypes_default = [
  "Remote",
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Temporary",
  "Volunteer"
];

// app/assets/data/roleTypes.ts
var roleTypes_default = [
  { id: "Experimental Biologist", name: "Experimental Biologist" },
  { id: "Computational Biologist", name: "Computational Biologist" },
  { id: "Bio-statistician", name: "Bio-statistician" },
  { id: "Bio-Physicist", name: "Bio-Physicist" },
  { id: "Technical Consultant", name: "Technical Consultant" },
  { id: "Technical Writter", name: "Technical Writter" },
  { id: "Management Consultant", name: "Management Consultant" },
  { id: "Regulatory approval Specialist", name: "Regulatory approval Specialist" },
  { id: "Clinical Trial Specialist", name: "Clinical Trial Specialist" },
  { id: "IP and patent Specialist", name: "IP and patent Specialist" },
  { id: "Non-technical", name: "Non-technical" },
  { id: "Other", name: "Other" }
];

// app/assets/data/skills.ts
var skills_default = [
  {
    name: "Verbal Communication",
    description: "Speaking clearly and conveying thoughts and ideas effectively through speech, engaging others and reaching mutual conclusions."
  },
  {
    name: "Non-Verbal Communication",
    description: "Using actions, gestures, and facial expressions to complement, reinforce, contradict, or substitute verbal communication."
  },
  {
    name: "Visual Communication",
    description: "Using visual signals, such as graphs or pictures, to convey messages and enhance verbal communication."
  },
  {
    name: "Written Communication",
    description: "Having strong skills in written communication, including proper grammar, punctuation, and concise expression of ideas."
  },
  {
    name: "Active Listening",
    description: "Listening with the intention of understanding, confirming understanding through repetition, and asking clarifying questions."
  },
  {
    name: "Clarity",
    description: "Ensuring clear communication and seeking clarity to avoid misunderstandings and breakdowns in communication."
  },
  {
    name: "Confidence",
    description: "Presenting oneself with confidence, facing challenges, and gaining attention and respect from others."
  },
  {
    name: "Interviewing",
    description: "Mastering strong interviewing skills to make a good impression and stand out during the job interview process."
  },
  {
    name: "Negotiation",
    description: "Having the ability to reach mutually beneficial agreements, considering different motivations and finding acceptable solutions."
  },
  {
    name: "Personal Branding",
    description: "Establishing and improving one's own brand, shaping others' perceptions and diligently working toward the desired image."
  },
  {
    name: "Persuasion",
    description: "Influencing others to buy into ideas, products, or services, and gaining support for projects or initiatives."
  },
  {
    name: "Presentation Skills",
    description: "Effectively presenting ideas and information, engaging and motivating the audience, and influencing outcomes."
  },
  {
    name: "Public Speaking",
    description: "Developing effective public speaking skills to increase self-confidence and influence interpersonal communication."
  },
  {
    name: "Storytelling",
    description: "Using storytelling to create connections, build trust, and persuade others by evoking emotions and strengthening the message."
  },
  {
    name: "Diplomacy",
    description: "Using diplomacy to improve relationships, show mutual respect, and achieve successful outcomes in communication."
  },
  {
    name: "Empathy",
    description: "Understanding others' needs, motivations, and feelings, leading to better leadership and effective relationships."
  },
  {
    name: "Friendliness",
    description: "Building positive relationships through friendly behavior, motivating and inspiring others in personal and business interactions."
  },
  {
    name: "Humor",
    description: "Having a good sense of humor to make positive first impressions, create emotional connections, and resolve disagreements."
  },
  {
    name: "Networking",
    description: "Communicating with others to develop personal and professional contacts, forming mutually beneficial relationships."
  },
  {
    name: "Patience",
    description: "Exercising patience to avoid hasty decisions and mistakes, promoting a calm and understanding approach."
  },
  {
    name: "Positive Reinforcement",
    description: "Recognizing and appreciating the quality of work in others, increasing productivity and boosting morale."
  },
  {
    name: "Sensitivity",
    description: "Being sensitive to others' feelings, listening attentively, and speaking kindly to create respectful interactions."
  },
  {
    name: "Tolerance",
    description: "Respecting and accepting differences in others, fostering successful partnerships and relationships."
  }
];

// app/assets/data/yesNos.ts
var yesNos_default = [
  "Yes",
  "No"
];

// app/components/MultiSelect.tsx
var import_react17 = require("react"), import_react18 = require("@headlessui/react"), import_solid2 = require("@heroicons/react/24/solid"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function MultiSelect({
  options,
  name,
  defaultValue,
  placeholder
}) {
  let [selectedOptions, setSelectedOptions] = (0, import_react17.useState)(defaultValue || []), [query, setQuery] = (0, import_react17.useState)(""), filteredOptions = query === "" ? options : options.filter(
    (option) => option.label.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react18.Combobox, { value: selectedOptions, onChange: setSelectedOptions, multiple: !0, children: [
    selectedOptions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { className: "flex flex-row flex-wrap gap-2 mb-2", children: selectedOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "inline-block w-auto bg-gray-300 p-2", children: [
      opt.label,
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { className: "ml-1", onClick: () => setSelectedOptions(selectedOptions.filter((option) => option.value !== opt.value)), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_solid2.XCircleIcon, { className: "w-4 h-4 inline-block" }, void 0, !1, {
        fileName: "app/components/MultiSelect.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/MultiSelect.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this)
    ] }, opt.value, !0, {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    selectedOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: `${name}`, value: option.value }, option.value, !1, {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react18.Combobox.Button, { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_react18.Combobox.Input,
      {
        className: "w-full p-3 border-[1px] border-black rounded-sm focus:outline-none focus:border-2",
        placeholder,
        onChange: (event) => setQuery(event.target.value)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MultiSelect.tsx",
        lineNumber: 50,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_react18.Transition,
      {
        as: import_react17.Fragment,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        afterLeave: () => setQuery(""),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react18.Combobox.Options, { className: "absolute max-h-[250px] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30", children: filteredOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react18.Combobox.Option,
          {
            value: opt,
            className: "p-2 hover:bg-gray-200 relative cursor-default select-none",
            disabled: selectedOptions.some((option) => option.value === opt.value),
            children: opt.label
          },
          opt.value,
          !1,
          {
            fileName: "app/components/MultiSelect.tsx",
            lineNumber: 62,
            columnNumber: 13
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/MultiSelect.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MultiSelect.tsx",
        lineNumber: 53,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/MultiSelect.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/components/TitleDivider.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function TitleDivider({
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative z-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "absolute inset-0 flex items-center z-10", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, !1, {
      fileName: "app/components/TitleDivider.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/TitleDivider.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative flex justify-start z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "bg-white pr-3 text-xl font-semibold leading-6 text-gray-900", children: title }, void 0, !1, {
      fileName: "app/components/TitleDivider.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/TitleDivider.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TitleDivider.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/solver.application.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let userId = await requireUserId(request), degrees = await prisma.degree.findMany({
    include: {
      accomplishments: !0
    },
    where: {
      userId,
      isTemp: !1
    }
  }), workExperiences = await prisma.workExperience.findMany({
    where: {
      userId,
      isTemp: !1
    },
    include: {
      accomplishments: !0
    }
  }), certifications = await prisma.certification.findMany({
    where: {
      userId,
      isTemp: !1
    }
  });
  return (0, import_node10.json)({
    degrees,
    workExperiences,
    certifications
  });
}, action6 = async ({ request }) => {
  try {
    let userId = await requireUserId(request), form = await (0, import_node10.unstable_parseMultipartFormData)(request, (0, import_node10.unstable_composeUploadHandlers)(
      supabaseStorageUploaderHandler(userId),
      (0, import_node10.unstable_createMemoryUploadHandler)()
    )), proofOfEmploymentPath = form.get("proofOfEmployment"), certificatePath = form.get("certificate"), thesisPath = form.get("thesis"), ecaCertificatePath = form.get("ecaCertificate"), marksheetPath = form.get("marksheet"), degreeCertificatePath = form.get("degreeCertificate"), resumePath = form.get("resume");
    return "files received";
  } catch (e) {
    return { error: e };
  }
};
function SeekerApplication() {
  var _a, _b;
  let personalInformationFetcher = (0, import_react19.useFetcher)(), socialInformationFetcher = (0, import_react19.useFetcher)(), { degrees, workExperiences, certifications } = (0, import_react19.useLoaderData)(), [isAddingAccomplishment, setIsAddingAccomplishment] = (0, import_react20.useState)(!1), degreeFetcher = (0, import_react19.useFetcher)(), [isAddingDegree, setIsAddingDegree] = (0, import_react20.useState)(!1), [degreeBeingAdded, setDegreeBeingAdded] = (0, import_react20.useState)(null), [accomplishmentsForDegreeBeingAdded, setAccomplishmentsForDegreeBeingAdded] = (0, import_react20.useState)([]), workExperienceFetcher = (0, import_react19.useFetcher)(), [isAddingWorkExperience, setIsAddingWorkExperience] = (0, import_react20.useState)(!1), [experienceBeingAdded, setExperienceBeingAdded] = (0, import_react20.useState)(null), [accomplishmentsForExperienceBeingAdded, setAccomplishmentsForExperienceBeingAdded] = (0, import_react20.useState)([]), certificationFetcher = (0, import_react19.useFetcher)(), [isAddingCertification, setIsAddingCertification] = (0, import_react20.useState)(!1), [certificationBeingAdded, setCertificationBeingAdded] = (0, import_react20.useState)(null);
  return (0, import_react20.useEffect)(() => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    setIsAddingDegree(!!((_b2 = (_a2 = degreeFetcher.data) == null ? void 0 : _a2.newDegree) != null && _b2.id)), setDegreeBeingAdded((_d = (_c = degreeFetcher.data) == null ? void 0 : _c.newDegree) == null ? void 0 : _d.id), degreeFetcher.data && (degreeFetcher.data.newWorkExperience ? (setIsAddingDegree(!!((_f = (_e = degreeFetcher.data) == null ? void 0 : _e.newDegree) != null && _f.id)), setDegreeBeingAdded((_h = (_g = degreeFetcher.data) == null ? void 0 : _g.newDegree) == null ? void 0 : _h.id)) : degreeFetcher.data.action === "saveDegree" && (setIsAddingDegree(!1), setDegreeBeingAdded(null)));
  }, [degreeFetcher.data]), (0, import_react20.useEffect)(() => {
    workExperienceFetcher.data && (workExperienceFetcher.data.newWorkExperience ? (setIsAddingWorkExperience(!!workExperienceFetcher.data.newWorkExperience.id), setExperienceBeingAdded(workExperienceFetcher.data.newWorkExperience.id)) : workExperienceFetcher.data.action === "saveWorkExperience" && (setIsAddingWorkExperience(!1), setExperienceBeingAdded(null)));
  }, [workExperienceFetcher.data]), (0, import_react20.useEffect)(() => {
    certificationFetcher.data && (certificationFetcher.data.newCertification ? (setIsAddingCertification(!!certificationFetcher.data.newCertification.id), setCertificationBeingAdded(certificationFetcher.data.newCertification.id)) : certificationFetcher.data.action === "saveCertification" && (setIsAddingCertification(!1), setCertificationBeingAdded(null)));
  }, [certificationFetcher.data]), //     First Name
  // Last Name
  // Upload your Resume
  // What type of jobs are you looking for?
  // Select Jobs that you would like to apply for.
  // Present Location?
  // Minimum expected Salary (USD/Year) for On-site roles.
  // How many hours of Remote Freelance work can you do per week?
  // What is your desired hourly rate for remote freelancing? (USD/Hr)
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "Personal Information" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(personalInformationFetcher.Form, { action: "/profile/personal", method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "First Name",
          name: "firstName",
          placeholder: "Enter your first name"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 160,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "Last Name",
          name: "lastName",
          placeholder: "Enter your last name"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 165,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "Address Line 1",
          name: "addressLine1",
          placeholder: "Enter your street name and number"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 170,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "Address Line 2",
          name: "addressLine2",
          placeholder: "Enter your apartment number, suite, unit, etc. (optional)"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 175,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "City",
          name: "city",
          placeholder: "Enter your city"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 180,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "State/Province",
          name: "stateOrProvince",
          placeholder: "Enter your state/province"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 185,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledDropdown,
        {
          label: "Country",
          name: "country",
          placeholder: "Select your country",
          options: countries_default.map((country) => ({ value: country.code, label: country.name, name: country.name }))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 190,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "Postal Code",
          name: "postalCode",
          placeholder: "Enter your postal code"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 196,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "Phone Number",
          name: "phoneNumber",
          placeholder: "Enter your phone number"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 201,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "block mb-2 font-bold text-md text-gray-700", children: "Work Style" }, void 0, !1, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        MultiSelect,
        {
          name: "workStylePreferences",
          options: jobTypes_default.map((jobType) => ({ value: jobType, label: jobType, name: jobType })),
          placeholder: "What type of work styles are you considering?"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 209,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "block mb-2 font-bold text-md text-gray-700", children: "Roles" }, void 0, !1, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        MultiSelect,
        {
          name: "rolesOfInterest",
          options: roleTypes_default.map((roleType) => ({ value: roleType.id, label: roleType.name, name: roleType.name })),
          placeholder: "What type of jobs are you interested in?"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 219,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "Minimum Expected Salary",
          name: "minimumExpectedSalary",
          placeholder: "Enter your minimum expected salary"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 226,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "Minimum Hourly Rate",
          name: "minimumHourlyRate",
          placeholder: "Enter your minimum hourly rate"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 231,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledDropdown,
        {
          label: "Currency",
          name: "currency",
          placeholder: "Select your local currency",
          options: currencyCodes_default.map((currencyCode) => ({ value: currencyCode.code, label: currencyCode.name, name: currencyCode.name }))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 236,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledFileInput,
        {
          label: "Resume",
          name: "resume",
          placeholder: "Upload your resume"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 242,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", children: "Save" }, void 0, !1, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 247,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "Social Information" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 250,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(socialInformationFetcher.Form, { action: "/profile/personal", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "LinkedIn URL",
          name: "linkedinUrl",
          placeholder: "https://linkedin.com/in/yourname"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 253,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "Google Scholar URL",
          name: "googleScholarUrl",
          placeholder: "https://scholar.google.com/citations?user=yourname"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 258,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        LabelledTextInput,
        {
          label: "Personal Website/Portfolio URL",
          name: "websiteUrl",
          placeholder: "https://yourname.com"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 263,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", children: "Save" }, void 0, !1, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 268,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 252,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "Education" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 271,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5", children: [
      degrees.map((degree) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DegreeCard, { degree }, degree.id, !1, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 274,
        columnNumber: 33
      }, this)),
      isAddingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(degreeFetcher.Form, { action: "/profile/degrees", encType: "multipart/form-data", method: "post", className: "p-5 bordered border-[1px] border-gray-400 rounded-sm shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "degreeId", type: "hidden", value: (_a = degreeFetcher.data) == null ? void 0 : _a.newDegree.id }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 278,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 279,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "school",
            label: "University/College",
            placeholder: "Enter the name of your university/college",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 292,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "major",
            label: "Subject/Major",
            placeholder: "Enter your field of study",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 298,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledDropdown,
          {
            name: "country",
            label: "Country",
            options: countries_default.map((country) => ({ value: country.code, label: country.name, name: country.name })),
            className: "w-full mt-5",
            placeholder: "Select Country"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 304,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "cityOrState",
            label: "City/State",
            placeholder: "Enter the city/state of your university/college",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 311,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Started" }, void 0, !1, {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 318,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "startYear",
              placeholder: "Year",
              className: "w-full md:w-1/2",
              options: years_default.map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 321,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "startMonth",
              placeholder: "Month",
              className: "w-full md:w-1/2",
              options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 329,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Ended" }, void 0, !1, {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 339,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "endYear",
              placeholder: "Year",
              className: "w-full md:w-1/2",
              options: Array.from({ length: 50 }, (_, i) => i + 1970).map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 342,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "endMonth",
              placeholder: "Month",
              className: "w-full md:w-1/2",
              options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 350,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 338,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledFileInput,
          {
            name: "degreeCertificate",
            label: "Degree Certificate",
            placeholder: "Upload your degree certificate",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 359,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledDropdown,
          {
            name: "assessmentFormat",
            label: "Assessment Format",
            placeholder: "Choose the format of your assessment",
            className: "w-full mt-5",
            options: assessmentFormats_default.map((format) => ({ value: format, label: format, name: format }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 365,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "grade",
            label: "Marks/Grade",
            placeholder: "Enter your final marks/grade",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 374,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledFileInput,
          {
            name: "marksheet",
            label: "Marksheet/Transcript",
            placeholder: "Upload your marksheet/transcript",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 380,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledDropdown,
          {
            name: "hasEca",
            label: "Do you have an ECA Certificate?",
            className: "w-full mt-5",
            options: yesNos_default.map((yesNo) => ({ value: yesNo, label: yesNo, name: yesNo }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 386,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "ecaAuthority",
            label: "ECA Authority",
            placeholder: "Enter the name of the authority that issued your ECA certificate",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 394,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledFileInput,
          {
            name: "ecaCertificate",
            label: "ECA Certificate/Report",
            placeholder: "Upload your ECA certificate/report",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 400,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledFileInput,
          {
            name: "thesis",
            label: "Thesis",
            placeholder: "Upload your thesis (if applicable)",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 406,
            columnNumber: 13
          },
          this
        ),
        accomplishmentsForDegreeBeingAdded.map((accomplishment) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AccomplishmentCard, { accomplishment }, accomplishment.id, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 413,
          columnNumber: 72
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "button", onClick: () => setIsAddingAccomplishment(!0), className: "mt-5 text-blue-500", children: "Add Accomplishment" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 415,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "action", type: "hidden", value: "saveDegree" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 416,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", children: "Save" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 417,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 277,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(degreeFetcher.Form, { action: "/profile/degrees", method: "post", encType: "multipart/form-data", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "action", type: "hidden", value: "addDegree" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 422,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "submit", className: cx("flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", isAddingDegree ? "hidden" : ""), disabled: isAddingDegree, children: "Add Degree" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 423,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 421,
        columnNumber: 11
      }, this),
      degreeBeingAdded && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AccomplishmentForm, { action: `/profile/degrees/${degreeBeingAdded}`, open: isAddingAccomplishment, setOpen: setIsAddingAccomplishment, onSubmit: (accomplishments) => {
        setAccomplishmentsForDegreeBeingAdded(accomplishments);
      } }, void 0, !1, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 427,
        columnNumber: 31
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 272,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "Certifications" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 432,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5", children: [
      isAddingCertification && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(certificationFetcher.Form, { action: "/profile/certifications", method: "post", className: "p-5 bordered border-[1px] border-gray-400 rounded-sm shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "certificationId", type: "hidden", value: (_b = certificationFetcher.data) == null ? void 0 : _b.newCertification.id }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 436,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "title",
            label: "Title",
            placeholder: "Enter the title of your certification",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 437,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "issuingAuthority",
            label: "Awarding Body/Issuing Authority",
            placeholder: "Enter the name of the awarding body/issuing authority",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 443,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "durationInMonths",
            label: "Duration (in months)",
            placeholder: "Enter the duration of your certification in months",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 449,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Issued" }, void 0, !1, {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 456,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "issuedYear",
              placeholder: "Year",
              className: "w-full md:w-1/2",
              options: years_default.map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 459,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "issuedMonth",
              placeholder: "Month",
              className: "w-full md:w-1/2",
              options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 467,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 455,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Expiry" }, void 0, !1, {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 477,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "expiryYear",
              placeholder: "Year",
              className: "w-full md:w-1/2",
              options: Array.from({ length: 50 }, (_, i) => i + 1970).map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 480,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "expiryMonth",
              placeholder: "Month",
              className: "w-full md:w-1/2",
              options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 488,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 476,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledFileInput,
          {
            name: "certificate",
            label: "Certificate",
            placeholder: "Upload your certificate",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 497,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "action", type: "hidden", value: "saveCertification" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 503,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", children: "Save" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 504,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 435,
        columnNumber: 36
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(certificationFetcher.Form, { action: "/profile/certifications", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "action", type: "hidden", value: "addCertificate" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 509,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "submit", className: cx("flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", isAddingCertification ? "hidden" : ""), disabled: isAddingDegree, children: "Add Certification" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 510,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 508,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 433,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "Professional Experience" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 514,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5", children: [
      workExperiences.map((experience) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WorkExperienceCard, { experience }, experience.id, !1, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 517,
        columnNumber: 45
      }, this)),
      isAddingWorkExperience && experienceBeingAdded && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(workExperienceFetcher.Form, { action: "/profile/professional", method: "post", className: "p-5 bordered border-[1px] border-gray-400 rounded-sm shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "workExperienceId", type: "hidden", value: experienceBeingAdded }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 521,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "title",
            label: "Role/Title",
            placeholder: "Enter your role/title",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 522,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledDropdown,
          {
            name: "employmentType",
            label: "Employment Type",
            options: employmentTypes_default.map((employmentType) => ({ value: employmentType, label: employmentType, name: employmentType })),
            className: "w-full mt-5",
            placeholder: "Select Employment Type"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 528,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "company",
            label: "Company/Organization",
            placeholder: "Enter the name of your company/organization",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 535,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledDropdown,
          {
            name: "employerType",
            label: "Employer Type",
            options: employerTypes_default.map((employerType) => ({ value: employerType, label: employerType, name: employerType })),
            className: "w-full mt-5",
            placeholder: "Select Employer Type"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 541,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "companyWebsite",
            label: "Company Website",
            placeholder: "Enter the website of your company/organization",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 548,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "companyLinkedIn",
            label: "Company LinkedIn",
            placeholder: "Enter the LinkedIn of your company/organization",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 554,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledDropdown,
          {
            name: "country",
            label: "Country",
            options: countries_default.map((country) => ({ value: country.code, label: country.name, name: country.name })),
            className: "w-full mt-5",
            placeholder: "Select Country"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 560,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "cityOrState",
            label: "City/State",
            placeholder: "Enter the city/state of your company/organization",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 567,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Started" }, void 0, !1, {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 574,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "startYear",
              placeholder: "Year",
              className: "w-full md:w-1/2",
              options: years_default.map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 577,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "startMonth",
              placeholder: "Month",
              className: "w-full md:w-1/2",
              options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 585,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 573,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Ended" }, void 0, !1, {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 595,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "endYear",
              placeholder: "Year",
              className: "w-full md:w-1/2",
              options: years_default.map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 598,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            LabelledDropdown,
            {
              name: "endMonth",
              placeholder: "Month",
              className: "w-full md:w-1/2",
              options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/solver.application.tsx",
              lineNumber: 606,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 594,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "primaryDuties",
            label: "Primary Duties",
            placeholder: "Enter the primary duties of your role",
            multiline: !0,
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 615,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledTextInput,
          {
            name: "secondaryDuties",
            label: "Secondary Duties",
            placeholder: "Enter the secondary duties (if any) of your role",
            multiline: !0,
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 622,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          LabelledFileInput,
          {
            name: "proofOfEmployment",
            label: "Proof of Employment",
            description: "Upload a document that proves your employment at this company/organization such as a letter of employment, a pay stub, or a contract",
            placeholder: "Upload your proof of employment",
            className: "w-full mt-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/solver.application.tsx",
            lineNumber: 629,
            columnNumber: 13
          },
          this
        ),
        accomplishmentsForExperienceBeingAdded.map((accomplishment) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AccomplishmentCard, { accomplishment }, accomplishment.id, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 637,
          columnNumber: 76
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "button", onClick: () => setIsAddingAccomplishment(!0), className: "mt-5 text-blue-500", children: "Add Accomplishment" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 639,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "action", type: "hidden", value: "saveWorkExperience" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 640,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", children: "Save" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 641,
          columnNumber: 13
        }, this)
      ] }, experienceBeingAdded, !0, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 520,
        columnNumber: 61
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(workExperienceFetcher.Form, { action: "/profile/professional", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "action", type: "hidden", value: "addWorkExperience" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 646,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "submit", className: cx("flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", isAddingWorkExperience ? "hidden" : ""), disabled: isAddingWorkExperience, children: "Add Experience" }, void 0, !1, {
          fileName: "app/routes/solver.application.tsx",
          lineNumber: 647,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 645,
        columnNumber: 11
      }, this),
      experienceBeingAdded && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AccomplishmentForm, { action: `/profile/professional/${experienceBeingAdded}`, open: isAddingAccomplishment, setOpen: setIsAddingAccomplishment, onSubmit: (accomplishments) => {
        setAccomplishmentsForExperienceBeingAdded(accomplishments);
      } }, Date.now().toString(), !1, {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 651,
        columnNumber: 35
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 515,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "Hard Skills" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 656,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      MultiSelect,
      {
        name: "hardSkills",
        options: skills_default.map((skill) => ({ label: skill.name, value: skill.name, name: skill.name }))
      },
      void 0,
      !1,
      {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 658,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 657,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "Soft Skills" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 664,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      MultiSelect,
      {
        name: "softSkills",
        options: skills_default.map((skill) => ({ label: skill.name, value: skill.name, name: skill.name }))
      },
      void 0,
      !1,
      {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 666,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 665,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "References" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 672,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 673,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "Video Summary" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 676,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      LabelledTextInput,
      {
        label: "Video URL",
        name: "videoUrl",
        placeholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Please create a brief video talking about the most interesting/impressive projects that you worked on (max 5 min). Upload that into YouTube (you may keep it unlisted) and share the link with us."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 678,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 677,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TitleDivider, { title: "Feedback" }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 685,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      LabelledTextInput,
      {
        label: "Feedback",
        name: "feedback",
        placeholder: "Please tell us what you liked or disliked about this form",
        multiline: !0
      },
      void 0,
      !1,
      {
        fileName: "app/routes/solver.application.tsx",
        lineNumber: 687,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/solver.application.tsx",
      lineNumber: 686,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/solver.application.tsx",
    lineNumber: 156,
    columnNumber: 5
  }, this);
}

// app/routes/profile.education.tsx
var profile_education_exports = {};
__export(profile_education_exports, {
  action: () => action7,
  default: () => profile_education_default
});
var import_zod = require("zod"), import_domain_functions = require("domain-functions");

// app/form-action.server.ts
var import_remix_forms = require("remix-forms"), import_node11 = require("@remix-run/node"), formAction = (0, import_remix_forms.createFormAction)({ redirect: import_node11.redirect, json: import_node11.json });

// app/form.ts
var import_remix_forms2 = require("remix-forms"), import_react21 = require("@remix-run/react"), Form3 = (0, import_remix_forms2.createForm)({ component: import_react21.Form, useNavigation: import_react21.useNavigation, useSubmit: import_react21.useSubmit, useActionData: import_react21.useActionData });

// app/routes/profile.education.tsx
var import_react22 = require("react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), schema = import_zod.z.object({
  type: import_zod.z.string(),
  field: import_zod.z.string(),
  country: import_zod.z.string(),
  university: import_zod.z.string(),
  accomplishments: import_zod.z.array(import_zod.z.object({
    name: import_zod.z.string(),
    type: import_zod.z.string(),
    certificate: import_zod.z.string(),
    link: import_zod.z.string(),
    id: import_zod.z.string(),
    publisher: import_zod.z.string(),
    title: import_zod.z.string()
  }))
}), mutation = (0, import_domain_functions.makeDomainFunction)(schema)(async (values) => console.log(values)), action7 = async ({ request }) => formAction({
  request,
  schema,
  mutation,
  successPath: "/success"
  /* path to redirect on success */
}), profile_education_default = () => {
  let accomplishmentTitleRef = (0, import_react22.useRef)(null), accomplishmentTypeRef = (0, import_react22.useRef)(null), accomplishmentCertificateRef = (0, import_react22.useRef)(null), accomplishmentLinkRef = (0, import_react22.useRef)(null), accomplishmentIdRef = (0, import_react22.useRef)(null), accomplishmentPublisherRef = (0, import_react22.useRef)(null), accomplishmentNameRef = (0, import_react22.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Form3, { schema, values: { accomplishments: [] }, children: ({ Field, Errors, Button, watch, setValue }) => {
    let accomplishments = watch("accomplishments");
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Field, { name: "type", label: "First name" }, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Field, { name: "field", children: ({ Label, SmartInput, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label, { children: "E-mail" }, void 0, !1, {
          fileName: "app/routes/profile.education.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("em", { children: "You'll hear from us at this address \u{1F447}\u{1F3FD}" }, void 0, !1, {
          fileName: "app/routes/profile.education.tsx",
          lineNumber: 62,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SmartInput, {}, void 0, !1, {
          fileName: "app/routes/profile.education.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Errors2, {}, void 0, !1, {
          fileName: "app/routes/profile.education.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 60,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Field, { name: "country", type: "select", options: countries_default.map((country) => ({
        label: country.name,
        name: country.name,
        value: country.code
      })) }, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Field, { name: "university" }, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Field, { name: "accomplishments", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label, {}, void 0, !1, {
          fileName: "app/routes/profile.education.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("fieldset", { className: "gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "text",
              className: `block w-full rounded-md border-gray-300 text-gray-800\r
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm`,
              placeholder: "Name",
              ref: accomplishmentNameRef
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.education.tsx",
              lineNumber: 81,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "text",
              className: `block w-full rounded-md border-gray-300 text-gray-800\r
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm`,
              placeholder: "Type",
              ref: accomplishmentTypeRef
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.education.tsx",
              lineNumber: 88,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "text",
              className: `block w-full rounded-md border-gray-300 text-gray-800\r
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm`,
              placeholder: "Certificate",
              ref: accomplishmentCertificateRef
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.education.tsx",
              lineNumber: 95,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "text",
              className: `block w-full rounded-md border-gray-300 text-gray-800\r
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm`,
              placeholder: "Link",
              ref: accomplishmentLinkRef
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.education.tsx",
              lineNumber: 102,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "text",
              className: `block w-full rounded-md border-gray-300 text-gray-800\r
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm`,
              placeholder: "Identifier",
              ref: accomplishmentIdRef
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.education.tsx",
              lineNumber: 109,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "text",
              className: `block w-full rounded-md border-gray-300 text-gray-800\r
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm`,
              placeholder: "Publisher",
              ref: accomplishmentPublisherRef
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.education.tsx",
              lineNumber: 116,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "text",
              className: `block w-full rounded-md border-gray-300 text-gray-800\r
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm`,
              placeholder: "Title",
              ref: accomplishmentTitleRef
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.education.tsx",
              lineNumber: 123,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "button",
            {
              className: "rounded-md bg-pink-500 px-4",
              onClick: (event) => {
                var _a, _b, _c, _d, _e, _f, _g;
                event.preventDefault();
                let name = (_a = accomplishmentNameRef.current) == null ? void 0 : _a.value, type = (_b = accomplishmentTypeRef.current) == null ? void 0 : _b.value, link = ((_c = accomplishmentTypeRef.current) == null ? void 0 : _c.value) || "", publisher = ((_d = accomplishmentTypeRef.current) == null ? void 0 : _d.value) || "", id = ((_e = accomplishmentTypeRef.current) == null ? void 0 : _e.value) || "", title = ((_f = accomplishmentTypeRef.current) == null ? void 0 : _f.value) || "", certificate = ((_g = accomplishmentTypeRef.current) == null ? void 0 : _g.value) || "";
                name && type && (setValue(
                  "accomplishments",
                  [...accomplishments, { name, type, link, publisher, id, title, certificate }],
                  { shouldValidate: !0 }
                ), accomplishmentNameRef.current.value = "", accomplishmentTypeRef.current.value = "");
              },
              children: "+"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.education.tsx",
              lineNumber: 130,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/profile.education.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Errors2, {}, void 0, !1, {
          fileName: "app/routes/profile.education.tsx",
          lineNumber: 184,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 78,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Errors, {}, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 188,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Button, {}, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 189,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this);
  } }, void 0, !1, {
    fileName: "app/routes/profile.education.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
};

// app/routes/profile.personal.tsx
var profile_personal_exports = {};
__export(profile_personal_exports, {
  action: () => action8
});
var import_node12 = require("@remix-run/node");
var action8 = async ({ request }) => {
  let userId = await requireUserId(request), body = await (0, import_node12.unstable_parseMultipartFormData)(request, (0, import_node12.unstable_composeUploadHandlers)(
    supabaseStorageUploaderHandler(userId),
    (0, import_node12.unstable_createMemoryUploadHandler)()
  )), minimumExpectedSalary = parseInt(body.get("minimumExpectedSalary")), minimumHourlyRate = parseInt(body.get("minimumHourlyRate"));
  return await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      firstName: body.get("firstName"),
      lastName: body.get("lastName"),
      phone: body.get("phoneNumber"),
      addressLine1: body.get("addressLine1"),
      addressLine2: body.get("addressLine2"),
      city: body.get("city"),
      state: body.get("state"),
      country: body.get("country"),
      postalCode: body.get("zip"),
      resume: readFilePathFromFormData(body, "resume"),
      linkedinUrl: body.get("linkedinUrl"),
      websiteUrl: body.get("websiteUrl"),
      googleScholarUrl: body.get("googleScholarUrl"),
      minimumExpectedSalary: isNaN(minimumExpectedSalary) ? null : minimumExpectedSalary,
      minimumHourlyRate: isNaN(minimumHourlyRate) ? null : minimumHourlyRate,
      currency: body.get("currency"),
      workStylePreferences: {
        createMany: {
          data: body.getAll("workStylePreferences").map((workStylePreference) => ({
            workStyle: workStylePreference
          }))
        }
      },
      rolesOfInterest: {
        createMany: {
          data: body.getAll("rolesOfInterest").map((roleOfInterest) => ({
            role: roleOfInterest
          }))
        }
      }
    }
  }), (0, import_node12.json)({
    action: "saveProfile",
    success: !0
  });
};

// server-entry-module:@remix-run/dev/server-build
var route11 = __toESM(require_seeker_dashboard());

// app/routes/profile.degrees.tsx
var profile_degrees_exports = {};
__export(profile_degrees_exports, {
  action: () => action9,
  default: () => EducationDegrees,
  loader: () => loader6
});
var import_node13 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_react24 = require("react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), action9 = async ({ request }) => {
  let userId = await requireUserId(request), body = await (0, import_node13.unstable_parseMultipartFormData)(request, (0, import_node13.unstable_composeUploadHandlers)(
    supabaseStorageUploaderHandler(userId),
    (0, import_node13.unstable_createMemoryUploadHandler)()
  )), actionType = body.get("action");
  if (actionType === "addDegree") {
    let newDegree = await prisma.degree.create({
      data: {
        level: "",
        major: "",
        school: "",
        userId: await requireUserId(request),
        isTemp: !0
      }
    });
    return (0, import_node13.json)({
      newDegree
    });
  } else {
    if (actionType === "saveDegree")
      return await prisma.degree.update({
        where: {
          id: body.get("degreeId")
        },
        data: {
          level: body.get("type"),
          major: body.get("major"),
          school: body.get("school"),
          country: body.get("country"),
          stateOrCity: body.get("cityOrState"),
          startYear: parseInt(body.get("startYear")),
          startMonth: parseInt(body.get("startMonth")),
          endYear: parseInt(body.get("endYear")),
          endMonth: parseInt(body.get("endMonth")),
          assessmentFormat: body.get("assessmentFormat"),
          grade: body.get("grade"),
          hasEca: body.get("hasEca") === "Yes",
          ecaAuthority: body.get("ecaAuthority"),
          ecaCertificate: readFilePathFromFormData(body, "ecaCertificate"),
          thesis: readFilePathFromFormData(body, "thesis"),
          marksheet: readFilePathFromFormData(body, "marksheet"),
          degreeCertificate: readFilePathFromFormData(body, "degreeCertificate"),
          isTemp: !1
        }
      }), (0, import_node13.redirect)("/profile/degrees");
    throw new Error("Invalid action type");
  }
}, loader6 = async ({ request }) => {
  let userId = await requireUserId(request), degrees = await prisma.degree.findMany({
    include: {
      accomplishments: !0
    },
    where: {
      userId,
      isTemp: !1
    }
  });
  return (0, import_node13.json)({
    degrees
  });
};
function EducationDegrees() {
  var _a;
  let fetcher = (0, import_react23.useFetcher)(), { degrees } = (0, import_react23.useLoaderData)(), [searchParams] = (0, import_react23.useSearchParams)(), [isAddingAccomplishment, setIsAddingAccomplishment] = (0, import_react24.useState)(!1), [isAddingDegree, setIsAddingDegree] = (0, import_react24.useState)(!1), [degreeBeingAdded, setDegreeBeingAdded] = (0, import_react24.useState)(null), [accomplishmentsForDegreeBeingAdded, setAccomplishmentsForDegreeBeingAdded] = (0, import_react24.useState)([]);
  return console.log(fetcher.data), (0, import_react24.useEffect)(() => {
    searchParams.get("addAccomplishment") && setIsAddingAccomplishment(!0);
  }, [searchParams]), (0, import_react24.useEffect)(() => {
    var _a2, _b, _c, _d;
    setIsAddingDegree(!!((_b = (_a2 = fetcher.data) == null ? void 0 : _a2.newDegree) != null && _b.id)), setDegreeBeingAdded((_d = (_c = fetcher.data) == null ? void 0 : _c.newDegree) == null ? void 0 : _d.id);
  }, [fetcher.data]), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { children: [
    degrees.map((degree) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(DegreeCard, { degree }, degree.id, !1, {
      fileName: "app/routes/profile.degrees.tsx",
      lineNumber: 113,
      columnNumber: 31
    }, this)),
    isAddingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(fetcher.Form, { action: "/profile/degrees", method: "post", className: "p-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { name: "degreeId", type: "hidden", value: (_a = fetcher.data) == null ? void 0 : _a.newDegree.id }, void 0, !1, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
        !1,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 118,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        LabelledTextInput,
        {
          name: "school",
          label: "University/College",
          placeholder: "Enter the name of your university/college",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 131,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        LabelledTextInput,
        {
          name: "major",
          label: "Subject/Major",
          placeholder: "Enter your field of study",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 137,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        LabelledDropdown,
        {
          name: "country",
          label: "Country",
          options: countries_default.map((country) => ({ value: country.code, label: country.name, name: country.name })),
          className: "w-full mt-5",
          placeholder: "Select Country"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 143,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        LabelledTextInput,
        {
          name: "cityOrState",
          label: "City/State",
          placeholder: "Enter the city/state of your university/college",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 150,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Started" }, void 0, !1, {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          LabelledDropdown,
          {
            name: "startYear",
            placeholder: "Year",
            className: "w-full md:w-1/2",
            options: years_default.map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.degrees.tsx",
            lineNumber: 160,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          LabelledDropdown,
          {
            name: "startMonth",
            placeholder: "Month",
            className: "w-full md:w-1/2",
            options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.degrees.tsx",
            lineNumber: 168,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-wrap mt-5 gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { className: "w-full mb-2 font-bold text-md text-gray-700", children: "Ended" }, void 0, !1, {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          LabelledDropdown,
          {
            name: "endYear",
            placeholder: "Year",
            className: "w-full md:w-1/2",
            options: Array.from({ length: 50 }, (_, i) => i + 1970).map((year) => ({ value: year.toString(), label: year.toString(), name: year.toString() }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.degrees.tsx",
            lineNumber: 181,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          LabelledDropdown,
          {
            name: "endMonth",
            placeholder: "Month",
            className: "w-full md:w-1/2",
            options: months_default.map((month) => ({ value: month.id, label: month.name, name: month.name }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.degrees.tsx",
            lineNumber: 189,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        LabelledDropdown,
        {
          name: "assessmentFormat",
          label: "Assessment Format",
          placeholder: "Choose the format of your assessment",
          className: "w-full mt-5",
          options: assessmentFormats_default.map((format) => ({ value: format, label: format, name: format }))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 198,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        LabelledTextInput,
        {
          name: "grade",
          label: "Marks/Grade",
          placeholder: "Enter your final marks/grade",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 207,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        LabelledDropdown,
        {
          name: "hasEca",
          label: "Do you have an ECA Certificate?",
          className: "w-full mt-5",
          options: yesNos_default.map((yesNo) => ({ value: yesNo, label: yesNo, name: yesNo }))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 213,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        LabelledTextInput,
        {
          name: "ecaAuthority",
          label: "ECA Authority",
          placeholder: "Enter the name of the authority that issued your ECA certificate",
          className: "w-full mt-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.degrees.tsx",
          lineNumber: 221,
          columnNumber: 11
        },
        this
      ),
      accomplishmentsForDegreeBeingAdded.map((accomplishment) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AccomplishmentCard, { accomplishment }, accomplishment.id, !1, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 228,
        columnNumber: 70
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", onClick: () => setIsAddingAccomplishment(!0), className: "mt-5 text-blue-500", children: "Add Accomplishment" }, void 0, !1, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 230,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { name: "action", type: "hidden", value: "saveDegree" }, void 0, !1, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", children: "Save" }, void 0, !1, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 232,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.degrees.tsx",
      lineNumber: 116,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(fetcher.Form, { action: "/profile/degrees", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { name: "action", type: "hidden", value: "addDegree" }, void 0, !1, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 237,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "submit", className: "flex mt-5 bg-blue-500 text-white px-5 py-2 rounded-md", disabled: isAddingDegree, children: "Add Degree" }, void 0, !1, {
        fileName: "app/routes/profile.degrees.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.degrees.tsx",
      lineNumber: 236,
      columnNumber: 9
    }, this),
    degreeBeingAdded && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AccomplishmentForm, { action: `/profile/degrees/${degreeBeingAdded}`, open: isAddingAccomplishment, setOpen: setIsAddingAccomplishment, onSubmit: (accomplishments) => {
      setAccomplishmentsForDegreeBeingAdded(accomplishments);
    } }, void 0, !1, {
      fileName: "app/routes/profile.degrees.tsx",
      lineNumber: 242,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.degrees.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}

// app/routes/privacy-policy.tsx
var privacy_policy_exports = {};
__export(privacy_policy_exports, {
  default: () => PrivacyPolicyPage
});
var import_react25 = require("@remix-run/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function PrivacyPolicyPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "font-bold text-2xl text-center mb-10", children: "Privacy Policy" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
      "This Privacy Policy applies to the website ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react25.Link, { to: "/", children: "https://www.biosolver.io" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Collection of Personal Information" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "We collect personal information from our users when they register on our site, fill out a form, or otherwise engage with our services. The personal information we collect may include the user's name, email address, phone number, and other contact information. We may also collect other information such as the user's professional experience or publication record." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Use of Personal Information" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "We use personal information collected from our users to provide our services and improve our website. We may also use personal information to contact users with promotional offers, newsletters, or other marketing materials. Users may opt out of receiving these communications at any time." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Disclosure of Personal Information" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "We will not disclose personal information collected from our users to third parties unless required by law or necessary to provide our services. We may share personal information with service providers who assist us in operating our website or providing our services." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Protection of Personal Information" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "We take reasonable measures to protect the personal information of our users from unauthorized access, use, or disclosure. However, we cannot guarantee the security of personal information transmitted to our website, and users transmit personal information at their own risk." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Use of Cookies" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "Our website may use cookies to enhance the user experience. Cookies are small data files that are stored on a user's device and may include an anonymous unique identifier. Users can disable cookies in their browser settings, but this may limit the functionality of our website." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Links to Third-Party Websites" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Children's Privacy" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "Our website is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under the age of 13." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Changes to this Privacy Policy" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "We may update this Privacy Policy from time to time. Users will be notified of any changes by posting the updated policy on our website." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 font-semibold text-lg", children: "Contact Us" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
      "If you have any questions or concerns about this Privacy Policy or our use of personal information, please contact us at ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("a", { href: "mailto:info@biosolver.io", children: "info@biosolver.io" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-sm mt-10 text-end", children: "Date of last revision: 05.07.2023" }, void 0, !1, {
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

// app/routes/profile.single.tsx
var profile_single_exports = {};
__export(profile_single_exports, {
  action: () => action10,
  default: () => profile_single_default,
  loader: () => loader7
});
var import_node14 = require("@remix-run/node"), import_react26 = require("@remix-run/react"), import_react27 = require("react");

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

// app/routes/profile.single.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node14.json)({ noteListItems });
}, action10 = async ({ request }) => {
  let formData = await request.formData(), host = formData.get("host"), port = formData.get("port"), security = formData.get("security"), username = formData.get("username"), password = formData.get("password"), fromEmail = formData.get("fromEmail"), fromName = formData.get("fromName"), dailyLimit = formData.get("dailyLimit");
  return request.method === "post" ? (0, import_node14.json)({}) : null;
};
function profile_single_default() {
  let [degrees, setDegrees] = (0, import_react27.useState)([]), addDegree = () => {
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
        currentlyStudying: !1,
        assessmentFormat: "",
        marksOrGrade: "",
        hasEca: !1,
        ecaAuthority: "",
        saved: !1
      }
    ]);
  }, markAsSaved = (index) => {
    degrees[index].saved = !0, setDegrees([
      ...degrees
    ]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react26.Form, { action: "/profile/single", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { className: "flex flex-col space-y-4 mt-5", children: [
    degrees.map((degree, index) => degree.saved === !0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.type }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.university }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.field }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.country }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.stateOrCity }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.startDate }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.endDate }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.assessmentFormat }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.marksOrGrade }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.hasEca }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: degree.ecaAuthority }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 99,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { onClick: () => {
        setDegrees([
          ...degrees.slice(0, index),
          ...degrees.slice(index + 1)
        ]);
      }, className: "w-full bg-red-500 text-white p-3 rounded-md", children: "Delete" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "p-5 rounded-md border-2 hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "name", className: "block mb-2 font-medium text-gray-700", children: "Degree" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 110,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "select",
          {
            name: "education.type",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            value: degree.type,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "None", children: "Select Degree" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 118,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "UG Diploma", children: "UG Diploma" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 119,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "Bachelors", children: "Bachelors" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "PG Diploma", children: "PG Diploma" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 121,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "Professional Degree", children: "Professional Degree" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 122,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "Masters", children: "Masters" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 123,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "PhD or Doctoral Studies", children: "PhD or Doctoral Studies" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 124,
                columnNumber: 21
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 113,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "university", className: "block mb-2 font-medium text gray-700", children: "University" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 126,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.university",
            value: degree.university,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 129,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Field" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 135,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.field",
            value: degree.field,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 138,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Country" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 144,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "select",
          {
            name: "education.country",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            value: degree.country,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "", children: "Select Country" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 152,
                columnNumber: 21
              }, this),
              countries_default.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: country.name, children: country.name }, country.code, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 155,
                columnNumber: 25
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 147,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "State/City" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 159,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.stateOrCity",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 162,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "started", className: "block mb-2 font-medium text-gray-700", children: "Start" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 167,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            type: "date",
            name: "education.startDate",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 170,
            columnNumber: 19
          },
          this
        ),
        !degree.currentlyStudying && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "end", className: "block mb-2 font-medium text-gray-700", children: "End" }, void 0, !1, {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 176,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "input",
            {
              type: "date",
              name: "education.endDate",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 179,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 175,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Assessment Format" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 185,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "select",
          {
            name: "education.assessmentFormat",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "", children: "Choose Format" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 192,
                columnNumber: 21
              }, this),
              assessmentFormats_default.map((format) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: format, children: format }, format, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 195,
                columnNumber: 25
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 188,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Marks/Grade" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 199,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.marksOrGrade",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 202,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Do you have an ECA Certificate?" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 207,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "select",
          {
            name: "education.hasEca",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "yes", children: "Yes" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 214,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "no", children: "No" }, void 0, !1, {
                fileName: "app/routes/profile.single.tsx",
                lineNumber: 215,
                columnNumber: 21
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 210,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "ECA Authority" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 217,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            type: "text",
            name: "education.ecaAuthority",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 220,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { onClick: () => {
          markAsSaved(index);
        }, className: "w-full bg-blue-500 text-white p-3 rounded-md", children: "Save" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 225,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.single.tsx",
      lineNumber: 68,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "p-5 rounded-md border-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "name", className: "block mb-2 font-medium text-gray-700", children: "Degree" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 232,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "select",
        {
          name: "education.type",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "None", children: "Select Degree" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 239,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "UG Diploma", children: "UG Diploma" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 240,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "Bachelors", children: "Bachelors" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 241,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "PG Diploma", children: "PG Diploma" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 242,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "Professional Degree", children: "Professional Degree" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 243,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "Masters", children: "Masters" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 244,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "PhD or Doctoral Studies", children: "PhD or Doctoral Studies" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 245,
              columnNumber: 19
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 235,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "university", className: "block mb-2 font-medium text gray-700", children: "University" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 247,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "input",
        {
          type: "text",
          name: "education.university",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 250,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Field" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 255,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "input",
        {
          type: "text",
          name: "education.field",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 258,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Country" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 263,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "select",
        {
          name: "education.country",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "", children: "Select Country" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 270,
              columnNumber: 19
            }, this),
            countries_default.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: country.name, children: country.name }, country.code, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 273,
              columnNumber: 23
            }, this))
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 266,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "State/City" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 277,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "input",
        {
          type: "text",
          name: "education.stateOrCity",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 280,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "started", className: "block mb-2 font-medium text-gray-700", children: "Start" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 285,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "input",
        {
          type: "date",
          name: "education.startDate",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 288,
          columnNumber: 17
        },
        this
      ),
      !degree.currentlyStudying && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "end", className: "block mb-2 font-medium text-gray-700", children: "End" }, void 0, !1, {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 294,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            type: "date",
            name: "education.endDate",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.single.tsx",
            lineNumber: 297,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 293,
        columnNumber: 47
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Assessment Format" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 303,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "select",
        {
          name: "education.assessmentFormat",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "", children: "Choose Format" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 310,
              columnNumber: 19
            }, this),
            assessmentFormats_default.map((format) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: format, children: format }, format, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 313,
              columnNumber: 23
            }, this))
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 306,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Marks/Grade" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 317,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "input",
        {
          type: "text",
          name: "education.marksOrGrade",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 320,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Do you have an ECA Certificate?" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 325,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "select",
        {
          name: "education.hasEca",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "yes", children: "Yes" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 332,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "no", children: "No" }, void 0, !1, {
              fileName: "app/routes/profile.single.tsx",
              lineNumber: 333,
              columnNumber: 19
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 328,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "ECA Authority" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 335,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "input",
        {
          type: "text",
          name: "education.ecaAuthority",
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.single.tsx",
          lineNumber: 338,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { onClick: () => {
        markAsSaved(index);
      }, className: "w-full bg-blue-500 text-white p-3 rounded-md", children: "Save" }, void 0, !1, {
        fileName: "app/routes/profile.single.tsx",
        lineNumber: 343,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.single.tsx",
      lineNumber: 231,
      columnNumber: 15
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { onClick: () => {
      addDegree();
    }, className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add Degree" }, void 0, !1, {
      fileName: "app/routes/profile.single.tsx",
      lineNumber: 350,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.single.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.single.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

// app/routes/profile.skills.tsx
var profile_skills_exports = {};
__export(profile_skills_exports, {
  default: () => profile_skills_default
});

// app/modules/profile/Skills.tsx
var import_react_hook_form2 = require("react-hook-form"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), ProfileSkills = () => {
  let { register } = (0, import_react_hook_form2.useForm)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("form", { className: "w-full max-w-6xl mx-auto p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Your Skills" }, void 0, !1, {
      fileName: "app/modules/profile/Skills.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "fullName", className: "block mb-2 font-medium text-gray-700", children: "Full Name" }, void 0, !1, {
        fileName: "app/modules/profile/Skills.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 font-medium text-gray-700", children: "Email" }, void 0, !1, {
        fileName: "app/modules/profile/Skills.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "phone", className: "block mb-2 font-medium text-gray-700", children: "Phone Number" }, void 0, !1, {
        fileName: "app/modules/profile/Skills.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function profile_skills_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skills_default, {}, void 0, !1, {
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
var import_react28 = require("@remix-run/react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function profile_index_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react28.Outlet, {}, void 0, !1, {
    fileName: "app/routes/profile._index.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/notes.$noteId.tsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action11,
  default: () => NoteDetailsPage,
  loader: () => loader8
});
var import_node15 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), loader8 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant2.default)(params.noteId, "noteId not found");
  let note = await getNote({ id: params.noteId, userId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node15.json)({ note });
}, action11 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant2.default)(params.noteId, "noteId not found"), await deleteNote({ id: params.noteId, userId }), (0, import_node15.redirect)("/notes");
};
function NoteDetailsPage() {
  let data = (0, import_react29.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h3", { className: "text-2xl font-bold", children: data.note.title }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "py-6", children: data.note.body }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("hr", { className: "my-4" }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react29.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
  let error = (0, import_react29.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 58,
    columnNumber: 12
  }, this) : (0, import_react29.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: "Note not found" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 66,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
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
var import_react30 = require("@remix-run/react"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react30.Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." }, void 0, !1, {
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
var import_react33 = require("react"), import_react_hook_form3 = require("react-hook-form");

// app/components/SingleSelect.tsx
var import_react31 = require("react"), import_react32 = require("@headlessui/react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function SingleSelect({
  options,
  onChange
}) {
  let [selectedOption, setSelectedOption] = (0, import_react31.useState)({
    id: "None",
    name: "Choose an option",
    availalbe: !0
  });
  return (0, import_react31.useEffect)(() => {
    onChange(selectedOption);
  }, [selectedOption]), /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-full bordered border-2 border-gray-400 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react32.Listbox, { value: selectedOption, onChange: setSelectedOption, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react32.Listbox.Button, { children: selectedOption.name }, void 0, !1, {
      fileName: "app/components/SingleSelect.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react32.Listbox.Options, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      import_react32.Listbox.Option,
      {
        value: option,
        disabled: !option.available,
        children: option.name
      },
      option.id,
      !1,
      {
        fileName: "app/components/SingleSelect.tsx",
        lineNumber: 27,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/SingleSelect.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SingleSelect.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SingleSelect.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/profile.work.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function profile_work_default() {
  let { register } = (0, import_react_hook_form3.useForm)(), [profile, setProfile] = (0, import_react33.useState)({
    experiences: []
  }), domains = [
    {
      domain: "Biotechnology",
      "sub-domains": [
        "Industrial Biotechnology",
        "Environmental Biotechnology",
        "Animal Biotechnology",
        "Plant Biotechnology",
        "Drug Discovery and Development",
        "IP and Patent law"
      ]
    },
    {
      domain: "Molecular Biology",
      "sub-domains": [
        "Molecular Cloning",
        "Gene Expression",
        "Genome Editing",
        "Next Gen Sequencing",
        "Cell culture Techniques",
        "Yeast Biology"
      ]
    },
    {
      domain: "Microbiology",
      "sub-domains": [
        "Medical microbiology",
        "Industrial Microbiology",
        "Bacteriology",
        "Food Microbiology",
        "Gene Expression",
        "Industrial Microbiology"
      ]
    },
    {
      domain: "Biochemistry",
      "sub-domains": [
        "Protein Biochemistry",
        "Carbohydrate Biochemistry",
        "Lipid Biochemistry",
        "Enzymology",
        "Transplant Immunology",
        "Cell Differentiation"
      ]
    },
    {
      domain: "Immunology",
      "sub-domains": [
        "Immunotherapy",
        "Innate Immunity",
        "Autoimmune response",
        "Adaptive Immunity",
        "Organelle Biology",
        "Regulatory Affairs"
      ]
    },
    {
      domain: "Cell Biology",
      "sub-domains": [
        "Cell Cycle",
        "Cell Differentiation",
        "Cytoskeleton",
        "Cellular Imaging",
        "Pharmacokinetics and Pharmacodynamics",
        "Medical Diagnosis"
      ]
    },
    {
      domain: "Pharmaceutical Sciences",
      "sub-domains": [
        "Pharmaceutical Formulation",
        "Clinical Trials and Research",
        "Protein Folding and Dynamics",
        "Statistical Analysis",
        "Genomic Data Analysis",
        "Genetic Circuit Design"
      ]
    },
    {
      domain: "Clinical Medicine",
      "sub-domains": [
        "Medical Diagnosis",
        "Membrane Biophysics",
        "Experimental Design",
        "Sequence Alignment and Analysis",
        "Metabolic Engineering",
        "Analytical Chemistry"
      ]
    },
    {
      domain: "Biophysics",
      "sub-domains": [
        "Biomedical Imaging",
        "Biomechanics",
        "Rehabilitation Engineering",
        "Medical Device Development",
        "Bioinstrumentation",
        "Structural Bioinformatics"
      ]
    },
    {
      domain: "Bio-statistics",
      "sub-domains": [
        "Genomics",
        "Business Development",
        "Project Management",
        "Proteomics",
        "SOP preparation",
        "Techno-economics"
      ]
    },
    {
      domain: "Computational Biology",
      "sub-domains": [
        "Single-Molecule Biophysics",
        "Data Mining and Visualization",
        "Biosecurity and Ethics",
        "Computational Chemistry",
        "Bioinstrumentation",
        "Content creation"
      ]
    },
    {
      domain: "Synthetic Biology",
      "sub-domains": [
        "Biomedical Imaging",
        "Biomechanics",
        "Rehabilitation Engineering",
        "Medical Device Development",
        "Bioinstrumentation",
        "Structural Bioinformatics"
      ]
    },
    {
      domain: "Chemistry",
      "sub-domains": [
        "Organic Chemistry",
        "Analytical Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Medicinal Chemistry",
        "Rehabilitation Engineering"
      ]
    },
    {
      domain: "Biomedical Engineering",
      "sub-domains": [
        "Biomedical Imaging",
        "Biomechanics",
        "Rehabilitation Engineering",
        "Medical Device Development",
        "Bioinstrumentation",
        "Structural Bioinformatics"
      ]
    },
    {
      domain: "Bio-omics",
      "sub-domains": [
        "Genomics",
        "Transcriptomics",
        "Proteomics",
        "Metabolomics",
        "Lipidomics",
        "Genomics"
      ]
    },
    {
      domain: "Bioventure & Bioeconomy",
      "sub-domains": [
        "Business Development",
        "Market Research",
        "Techno-economics",
        "Bioinformatics",
        "Bioinformatics",
        "Bioinformatics"
      ]
    }
  ], [addingWork, setAddingWork] = (0, import_react33.useState)(!1), [domain, setDomain] = (0, import_react33.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { children: [
    !addingWork && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("button", { onClick: () => {
      setAddingWork(!0);
    }, className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add Experience" }, void 0, !1, {
      fileName: "app/routes/profile.work.tsx",
      lineNumber: 212,
      columnNumber: 24
    }, this),
    addingWork && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("form", { className: "w-full max-w-6xl mx-auto p-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Work Experience" }, void 0, !1, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        MultiSelect,
        {
          options: [
            { label: "Technical Consultation", value: "Technical Consultation" },
            { label: "Management Consultation", value: "Management Consultation" },
            { label: "Manufacturing Consultation", value: "Manufacturing Consultation" },
            { label: "Project Management", value: "Project Management" },
            { label: "Sub-contractor Management", value: "Sub-contractor Management" },
            { label: "Business Development", value: "Business Development" },
            { label: "Clinical Trial Coordination", value: "Clinical Trial Coordination" },
            { label: "Regulatory Approvals", value: "Regulatory Approvals" },
            { label: "IP and Patent Filing", value: "IP and Patent Filing" },
            { label: "Technical Writing", value: "Technical Writing" },
            { label: "Data Management and validation", value: "Data Management and validation" },
            { label: "SOP Preparation", value: "SOP Preparation" },
            { label: "Experimental Troubleshooting", value: "Experimental Troubleshooting" },
            { label: "Data Analysis", value: "Data Analysis" },
            { label: "Bioinformatic Analysis", value: "Bioinformatic Analysis" },
            { label: "Bio-Statistical Analysis", value: "Bio-Statistical Analysis" },
            { label: "Scientific Writing and Editing", value: "Scientific Writing and Editing" },
            { label: "Literature Review", value: "Literature Review" },
            { label: "Illustration and Animation", value: "Illustration and Animation" },
            { label: "Content Creation", value: "Content Creation" },
            { label: "Biotech Marketing", value: "Biotech Marketing" },
            { label: "Biotech Sales", value: "Biotech Sales" },
            { label: "Accounting and Purchase", value: "Accounting and Purchase" },
            { label: "HR & Admin", value: "HR & Admin" }
          ],
          name: "jobType",
          placeholder: "Job Type"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 222,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 221,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 font-medium text-gray-700", children: "Role" }, void 0, !1, {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          SingleSelect,
          {
            onChange: (option) => console.log(option),
            options: [
              { id: "Experimental Biologist", name: "Experimental Biologist", available: !0 },
              { id: "Computational Biologist", name: "Computational Biologist", available: !0 },
              { id: "Bio-statistician", name: "Bio-statistician", available: !0 },
              { id: "Bio-Physicist", name: "Bio-Physicist", available: !0 },
              { id: "Technical Consultant", name: "Technical Consultant", available: !0 },
              { id: "Technical Writter", name: "Technical Writter", available: !0 },
              { id: "Management Consultant", name: "Management Consultant", available: !0 },
              { id: "Regulatory approval Specialist", name: "Regulatory approval Specialist", available: !0 },
              { id: "Clinical Trial Specialist", name: "Clinical Trial Specialist", available: !0 },
              { id: "IP and patent Specialist", name: "IP and patent Specialist", available: !0 },
              { id: "Non-technical", name: "Non-technical", available: !0 },
              { id: "Other", name: "Other", available: !0 }
            ]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.work.tsx",
            lineNumber: 258,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 254,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 font-medium text-gray-700", children: "Company Name" }, void 0, !1, {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 277,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("input", { type: "text", name: "companyName" }, void 0, !1, {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 280,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 276,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("label", { htmlFor: "phone", className: "block mb-2 font-medium text-gray-700", children: "Domain" }, void 0, !1, {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          SingleSelect,
          {
            onChange: (option) => {
              console.log(option), setDomain(option);
            },
            options: domains.map((domain2) => ({ id: domain2.domain, name: domain2.domain, available: !0 }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.work.tsx",
            lineNumber: 286,
            columnNumber: 13
          },
          this
        ),
        domain && domains.find((item) => item.domain === domain.id) && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          MultiSelect,
          {
            name: "subdomains",
            options: domains.find((item) => item.domain === domain.id)["sub-domains"].map((subDomain) => ({ label: subDomain, value: subDomain }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.work.tsx",
            lineNumber: 296,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 282,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.work.tsx",
      lineNumber: 219,
      columnNumber: 23
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.work.tsx",
    lineNumber: 210,
    columnNumber: 5
  }, this);
}

// app/routes/for-seekers.tsx
var for_seekers_exports = {};
__export(for_seekers_exports, {
  default: () => SeekerPage
});

// app/layout/anon/ListHighlight.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function ListHighlight({
  title,
  subtitle,
  description,
  bullets = [],
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: cx(className), children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h1", { className: "text-4xl font-bold", children: title }, void 0, !1, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this),
    subtitle && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h3", { className: "text-2xl font-semibold", children: subtitle }, void 0, !1, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 19,
      columnNumber: 20
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-lg", children: description }, void 0, !1, {
      fileName: "app/layout/anon/ListHighlight.tsx",
      lineNumber: 20,
      columnNumber: 23
    }, this),
    bullets.map((bullet, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "w-2 h-2 bg-purple-600 rounded-full mr-2" }, void 0, !1, {
        fileName: "app/layout/anon/ListHighlight.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-lg", children: bullet }, void 0, !1, {
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
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function SimpleHighlight({
  title,
  subtitle,
  description,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: cx(className), children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { className: "text-4xl font-bold", children: title }, void 0, !1, {
      fileName: "app/layout/anon/SimpleHighlight.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this),
    subtitle && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h3", { className: "text-2xl font-semibold", children: subtitle }, void 0, !1, {
      fileName: "app/layout/anon/SimpleHighlight.tsx",
      lineNumber: 17,
      columnNumber: 20
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "text-lg mt-5", children: description }, void 0, !1, {
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
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function FieldGroup({
  group,
  items,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: cx("rounded-md border-2 border-black items-center", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "text-center text-xl font-semibold p-5", children: group }, void 0, !1, {
      fileName: "app/layout/anon/common/FieldGroup.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex flex-wrap justify-center", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "bg-white shadow-md rounded-md px-5 py-2 mx-5 my-2 flex items-center", children: item }, index, !1, {
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
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), fields = {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("section", { className: "w-full max-w-7xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-center text-4xl font-bold", children: "What fields do we specialize in?" }, void 0, !1, {
      fileName: "app/layout/anon/common/FieldsSection.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-2 w-full items-center mt-5 justify-center content-center", children: Object.keys(fields).map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(FieldGroup, { group: field, items: fields[field], className: "col-span-1 w-full h-full" }, index, !1, {
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
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), services = [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("section", { className: "flex flex-col w-full max-w-6xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-center text-4xl font-bold", children: "What services do we offer?" }, void 0, !1, {
      fileName: "app/layout/anon/common/ServicesSection.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "w-full flex flex-wrap justify-center", children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "bg-white shadow-md rounded-md px-5 py-2 mx-5 my-2 flex items-center", children: service }, index, !1, {
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
var import_react34 = require("@remix-run/react"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function HeroSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("section", { className: "flex flex-col w-full max-w-3xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "text-center text-6xl font-semibold", children: "Hire freelancers from anywhere, anytime." }, void 0, !1, {
      fileName: "app/layout/anon/seeker/HeroSection.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react34.Link, { to: "/register", className: "bg-purple-600 hover:bg-purple-800 px-10 rounded-md text-white text-center py-5 mt-10 w-[300px]", children: "Join Us" }, void 0, !1, {
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
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function SeekerPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(HeroSection, {}, void 0, !1, {
      fileName: "app/routes/for-seekers.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ServicesSection, {}, void 0, !1, {
      fileName: "app/routes/for-seekers.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(FieldsSection, {}, void 0, !1, {
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
var import_react35 = require("@remix-run/react"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function HeroSection2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("section", { className: "flex flex-col w-full max-w-3xl h-auto mx-auto mt-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "text-center text-6xl font-semibold", children: "Find work from anywhere, anytime." }, void 0, !1, {
      fileName: "app/layout/anon/solver/HeroSection.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react35.Link, { to: "/register", className: "bg-purple-600 hover:bg-purple-800 px-10 rounded-md text-white text-center py-5 mt-10 w-[300px]", children: "Join Us" }, void 0, !1, {
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
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function SeekerPage2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(HeroSection2, {}, void 0, !1, {
      fileName: "app/routes/for-solvers.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(ServicesSection, {}, void 0, !1, {
      fileName: "app/routes/for-solvers.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(FieldsSection, {}, void 0, !1, {
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
  loader: () => loader9
});
var loader9 = async ({ request }) => {
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

// app/routes/skills.hard.tsx
var skills_hard_exports = {};
__export(skills_hard_exports, {
  action: () => action12
});
var import_node16 = require("@remix-run/node");
var action12 = async ({ request }) => {
  let query = (await request.formData()).get("query"), skills = await prisma.skill.findMany({
    where: {
      name: {
        contains: query
      },
      type: "hard"
    }
  });
  return (0, import_node16.json)({
    skills
  });
};

// app/routes/contact-us.tsx
var contact_us_exports = {};
__export(contact_us_exports, {
  default: () => ContactUsPage
});
var import_outline3 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function ContactUsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "relative isolate bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "relative p-10 lg:static", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mx-auto max-w-xl lg:mx-0 lg:max-w-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-gray-900", children: "Get in touch" }, void 0, !1, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Please don't hesitate to reach out to us with any queries, requirements, and feedback." }, void 0, !1, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("dl", { className: "mt-10 space-y-4 text-base leading-7 text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("dt", { className: "flex-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "sr-only", children: "Address" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 16,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_outline3.BuildingOffice2Icon, { className: "h-7 w-6 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 17,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 15,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("dd", { children: [
            "Toronto, ON",
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("br", {}, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("dt", { className: "flex-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "sr-only", children: "Email" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 38,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_outline3.EnvelopeIcon, { className: "h-7 w-6 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 39,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("a", { className: "hover:text-gray-900", href: "mailto:info@biosolver.io", children: "info@biosolver.io" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("form", { action: "https://app.formzillion.com/f/ZPzOl-j5", method: "POST", className: "p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mx-auto max-w-xl lg:mr-0 lg:max-w-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "First name" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Last name" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Email" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "phone-number", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Phone number" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Message" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-8 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
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
  loader: () => loader10
});
var import_node17 = require("@remix-run/node"), import_react36 = require("@remix-run/react");
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
  let userId = await requireUserId(request), user = await getUserById(userId);
  return (0, import_node17.json)({ user });
};
function Dashboard() {
  let loaderData = (0, import_react36.useLoaderData)(), { user } = loaderData, profileStrength = "Incomplete";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { className: "text-3xl text-gray-600", children: [
      "Welcome back",
      ", " + (user == null ? void 0 : user.firstName)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mt-5 w-full flow-root p-5 bordered border-[1px] rounded-sm border-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "float-left", children: [
        "Profile Strength: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { className: "text-purple-600", children: profileStrength }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 25,
          columnNumber: 31
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "text-purple-600", children: "Please complete your talent profile to enable all the features" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react36.Link, { to: "/solver/application", className: "float-right px-5 py-2 bg-purple-600 text-white rounded-sm hover:bg-purple-800", children: "Submit Profile" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/documents.tsx
var documents_exports = {};
__export(documents_exports, {
  default: () => DocumentsPage
});
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function DocumentsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex flex-row", children: "Work in Progress" }, void 0, !1, {
    fileName: "app/routes/documents.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/notes.new.tsx
var notes_new_exports = {};
__export(notes_new_exports, {
  action: () => action13,
  default: () => NewNotePage
});
var import_node18 = require("@remix-run/node"), import_react37 = require("@remix-run/react"), import_react38 = require("react");
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), action13 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node18.json)(
      { errors: { body: null, title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node18.json)(
      { errors: { body: "Body is required", title: null } },
      { status: 400 }
    );
  let note = await createNote({ body, title, userId });
  return (0, import_node18.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react37.useActionData)(), titleRef = (0, import_react38.useRef)(null), bodyRef = (0, import_react38.useRef)(null);
  return (0, import_react38.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
    import_react37.Form,
    {
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("span", { children: "Title: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
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
          (_c = actionData == null ? void 0 : actionData.errors) != null && _c.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("span", { children: "Body: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
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
          (_f = actionData == null ? void 0 : actionData.errors) != null && _f.body ? /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
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
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function CalendarPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "flex flex-row", children: "Work in Progress" }, void 0, !1, {
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
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function MessagesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex flex-row", children: "Work in Progress" }, void 0, !1, {
    fileName: "app/routes/messages.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action14,
  default: () => Register,
  loader: () => loader11,
  meta: () => meta
});
var import_node19 = require("@remix-run/node"), import_react39 = require("@remix-run/react"), import_react40 = require("react");

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
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => await getUserId(request) ? (0, import_node19.redirect)("/dashboard") : (0, import_node19.json)({}), action14 = async ({ request }) => {
  let formData = await request.formData();
  console.log(formData);
  let fullName = formData.get("fullName"), email = formData.get("email"), password = formData.get("password"), roles = formData.getAll("roles"), referralCode = formData.get("referralCode"), redirectTo = safeRedirect(formData.get("redirectTo"), "/dashboard");
  if (console.log(email, password, roles), !validateEmail(email))
    return (0, import_node19.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node19.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node19.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node19.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let [firstName, lastName] = fullName ? fullName.split(" ") : ["", ""], user = await createUser(firstName, lastName, email, password);
  return referralCode && typeof referralCode == "string" && await updateUserById(user.id, { source: referralCode, sourceType: "referral" }), await createRoles(user.id, roles.map((role) => role.toString())), createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta = () => [{ title: "Sign Up" }];
function Register() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react39.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react39.useActionData)(), fullNameRef = (0, import_react40.useRef)(null), emailRef = (0, import_react40.useRef)(null), passwordRef = (0, import_react40.useRef)(null), referralCodeRef = (0, import_react40.useRef)(null);
  return (0, import_react40.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_jsx_dev_runtime44.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex min-h-full flex-1 justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "mx-auto w-full max-w-sm lg:w-96", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "w-full items-center text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react39.Link, { to: "/", className: "items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("img", { className: "h-16 w-16 mx-auto", src: base_default, alt: "BioSolver Logo" }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 108,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 107,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h2", { className: "mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Create your account" }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 110,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-gray-500", children: [
        "Already a member?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react39.Link, { to: "/login", className: "font-semibold text-purple-600 hover:text-purple-500", children: "Sign In" }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 113,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/register.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react39.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
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
            lineNumber: 125,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
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
            lineNumber: 132,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 131,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 124,
        columnNumber: 19
      }, this),
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
            fileName: "app/routes/register.tsx",
            lineNumber: 145,
            columnNumber: 21
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
              fileName: "app/routes/register.tsx",
              lineNumber: 152,
              columnNumber: 23
            },
            this
          ),
          (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 165,
            columnNumber: 25
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 151,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 144,
        columnNumber: 19
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
            fileName: "app/routes/register.tsx",
            lineNumber: 173,
            columnNumber: 21
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
              autoComplete: "new-password",
              "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
              "aria-describedby": "password-error",
              className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 180,
              columnNumber: 23
            },
            this
          ),
          (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 191,
            columnNumber: 25
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 179,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 172,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("legend", { children: "Roles" }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 199,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "space-y-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "relative flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
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
                lineNumber: 203,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/register.tsx",
              lineNumber: 202,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "ml-3 text-sm leading-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("label", { htmlFor: "role-solver", className: "font-medium text-gray-900", children: "Solver" }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 213,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { id: "role-solver-description", className: "text-gray-500", children: "I am an expert/student looking for work." }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 216,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/register.tsx",
              lineNumber: 212,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/register.tsx",
            lineNumber: 201,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "relative flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
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
                lineNumber: 223,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/register.tsx",
              lineNumber: 222,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "ml-3 text-sm leading-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("label", { htmlFor: "role-seeker", className: "font-medium text-gray-900", children: "Seeker" }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 233,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { id: "role-seeker-description", className: "text-gray-500", children: "I am looking to hire a Freelancer." }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 236,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/register.tsx",
              lineNumber: 232,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/register.tsx",
            lineNumber: 221,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "relative flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
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
                lineNumber: 243,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/register.tsx",
              lineNumber: 242,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "ml-3 text-sm leading-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("label", { htmlFor: "role-referrer", className: "font-medium text-gray-900", children: "Referral Partner" }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 253,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { id: "role-referrer-description", className: "text-gray-500", children: "I can spread the word." }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 256,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/register.tsx",
              lineNumber: 252,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/register.tsx",
            lineNumber: 241,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 200,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 198,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
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
            lineNumber: 265,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
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
            lineNumber: 272,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 271,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 264,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 282,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
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
          lineNumber: 283,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
          import_react39.Link,
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
            lineNumber: 292,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 290,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 289,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/register.tsx",
      lineNumber: 123,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/register.tsx",
      lineNumber: 122,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/register.tsx",
      lineNumber: 121,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/register.tsx",
    lineNumber: 105,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 104,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}

// app/routes/matches.tsx
var matches_exports = {};
__export(matches_exports, {
  default: () => Matches
});
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function Matches() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("h2", { children: [
      "You have ",
      5,
      " matches."
    ] }, void 0, !0, {
      fileName: "app/routes/matches.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { children: "List of matches here." }, void 0, !1, {
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
  loader: () => loader12
});
var import_node20 = require("@remix-run/node"), import_react41 = require("@remix-run/react"), import_react42 = require("react");

// app/models/degree.server.ts
function getDegrees({ userId }) {
  return prisma.degree.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" }
  });
}

// app/routes/profile.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => {
  let userId = await requireUserId(request), degrees = await getDegrees({ userId });
  return (0, import_node20.json)({ degrees });
}, tabs = [
  { name: "Personal", href: "personal", current: !1 },
  { name: "Education", href: "education", current: !1 },
  { name: "Work", href: "work", current: !1 },
  { name: "Skills", href: "skills", current: !0 }
];
function Tabs({
  selectedTab = "Personal",
  changeTab
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("label", { htmlFor: "tabs", className: "sr-only", children: "Select a tab" }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react41.Link, { to: tab.href, className: "block p-4 text-xl text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: tab.name }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this) }, tab.name, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("nav", { className: "-mb-px flex w-full", "aria-label": "Tabs", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
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
        lineNumber: 50,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function ProfilePage() {
  let data = (0, import_react41.useLoaderData)(), user = useUser(), navigate = (0, import_react41.useNavigate)(), [currentTab, setCurrentTab] = (0, import_react42.useState)("Personal");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "max-w-7xl w-full mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Tabs, { selectedTab: currentTab, changeTab: (tab) => {
      setCurrentTab(tab), navigate(`${tab.toLowerCase()}`);
    } }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react41.Outlet, {}, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/routes/reports.tsx
var reports_exports = {};
__export(reports_exports, {
  default: () => ReportPage
});
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function ReportPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "flex flex-row", children: "Work in Progress" }, void 0, !1, {
    fileName: "app/routes/reports.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action15,
  loader: () => loader13
});
var import_node21 = require("@remix-run/node");
var action15 = async ({ request }) => logout(request), loader13 = async () => (0, import_node21.redirect)("/");

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});

// app/assets/images/backgrounds/ring_up.svg
var ring_up_default = "/build/_assets/ring_up-YIM4EQSD.svg";

// app/assets/images/backgrounds/hero_background.png
var hero_background_default = "/build/_assets/hero_background-ABRAOGWP.png";

// app/assets/images/backgrounds/hero_cta_back.svg
var hero_cta_back_default = "/build/_assets/hero_cta_back-XGUPIIXP.svg";

// app/modules/solver_homepage/HeroSection.tsx
var import_react43 = require("@remix-run/react"), import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function HeroSection3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("section", { className: "text-black body-font max-w-7xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "w-full mx-auto text-7xl font-bold tracking-tight leading-snug text-start", children: [
      "A global platform to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("span", { className: "text-blue-600", children: "network" }, void 0, !1, {
        fileName: "app/modules/solver_homepage/HeroSection.tsx",
        lineNumber: 11,
        columnNumber: 30
      }, this),
      " for professionals in ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("span", { className: "text-yellow-400", children: "Biotechnology." }, void 0, !1, {
        fileName: "app/modules/solver_homepage/HeroSection.tsx",
        lineNumber: 11,
        columnNumber: 98
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/solver_homepage/HeroSection.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "w-full flex flex-wrap mt-5 justify-between mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "flex w-full md:w-[73%] h-[350px] rounded-7xl  items-end align-bottom relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("img", { className: "w-full absolute h-[350px]", src: hero_background_default }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HeroSection.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react43.Link, { to: "/register", className: "flex absolute align-bottom h-[165px] bg-blue-600 hover:bg-blue-700 border-white border-5 rounded-7xl w-[38.5%] animate-pulse hover:animate-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("img", { className: "absolute bottom-0 left-0 w-auto h-[165px]", src: hero_cta_back_default }, void 0, !1, {
            fileName: "app/modules/solver_homepage/HeroSection.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "absolute bottom-0 left-0 text-start text-3xl text-white w-1/2 p-7", children: "Get Started" }, void 0, !1, {
            fileName: "app/modules/solver_homepage/HeroSection.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/solver_homepage/HeroSection.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/HeroSection.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "w-full md:w-1/4 bg-yellow-400 rounded-7xl h-[350px] relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "text-black text-lg p-10", children: "Find opportunities and connect with talent in the biotech industry." }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HeroSection.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("img", { className: "absolute bottom-0 right-0", src: ring_up_default }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HeroSection.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/HeroSection.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/solver_homepage/HeroSection.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/solver_homepage/HeroSection.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/assets/images/backgrounds/how_it_works_decoration.svg
var how_it_works_decoration_default = "/build/_assets/how_it_works_decoration-QDZKIROR.svg";

// app/modules/solver_homepage/HowItWorksSection.tsx
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function HowItWorksSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("section", { className: "text-black body-font max-w-7xl mx-auto w-full mt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-full mx-auto max-w-6xl text-5xl text-start font-semibold tracking-tight leading-snug", children: [
      "Find your ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("span", { className: "text-blue-800", children: "dream opportunity" }, void 0, !1, {
        fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
        lineNumber: 7,
        columnNumber: 19
      }, this),
      " easily using our platform."
    ] }, void 0, !0, {
      fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-full flex flex-wrap mt-10 justify-center gap-5 bg-blue-800 rounded-7xl p-8 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-[275px] relative rounded-4xl bg-blue-600 flex flex-col p-10 hover:bg-white hover:text-black hover:-translate-y-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "absolute font-semibold text-5xl top-[30px] left-[30px]", children: "01" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 11,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("img", { src: how_it_works_decoration_default, className: "absolute top-0 left-0 w-[150px] h-auto" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mt-[160px] w-full text-start font-semibold text-3xl", children: "Complete your profile" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mt-5", children: "Ensure that all information is up to date and accurate, so recruiters can find you easily." }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-[275px] relative rounded-4xl bg-blue-600 flex flex-col p-10 hover:bg-white hover:text-black hover:-translate-y-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "absolute font-semibold text-5xl top-[30px] left-[30px]", children: "02" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("img", { src: how_it_works_decoration_default, className: "absolute top-0 left-0 w-[150px] h-auto" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mt-[160px] w-full text-start font-semibold text-3xl", children: "Upload documents" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mt-5", children: "We verify your documents and ensure that you are a real person, so recruiters can trust you." }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-[275px] relative rounded-4xl bg-blue-600 flex flex-col p-10 hover:bg-white hover:text-black hover:-translate-y-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "absolute font-semibold text-5xl top-[30px] left-[30px]", children: "03" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("img", { src: how_it_works_decoration_default, className: "absolute top-0 left-0 w-[150px] h-auto" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mt-[160px] w-full text-start font-semibold text-3xl", children: "Skill Matching" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mt-5", children: "We match your skills with the right opportunities, so you can find the best fit." }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-[275px] relative rounded-4xl bg-blue-600 flex flex-col p-10 hover:bg-white hover:text-black hover:-translate-y-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "absolute font-semibold text-5xl top-[30px] left-[30px]", children: "04" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("img", { src: how_it_works_decoration_default, className: "absolute top-0 left-0 w-[150px] h-auto" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mt-[160px] w-full text-start font-semibold text-3xl", children: "Schedule Interview" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mt-5", children: "You can schedule an interview with the recruiter to discuss the opportunity when they reach out to you." }, void 0, !1, {
          fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/solver_homepage/HowItWorksSection.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/modules/solver_homepage/LatestJobPosting.tsx
var import_react44 = require("@remix-run/react"), import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function LatestJobsPosting({
  job
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "w-[375px] bg-gray-100 border-none rounded-3xl p-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "flex flex-row gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("img", { src: job.logo, className: "w-auto h-[80px] max-w-[120px] border-none" }, void 0, !1, {
        fileName: "app/modules/solver_homepage/LatestJobPosting.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "flex flex-col my-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "text-2xl font-bold", children: job.company }, void 0, !1, {
          fileName: "app/modules/solver_homepage/LatestJobPosting.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "text-sm", children: job.postedOn }, void 0, !1, {
          fileName: "app/modules/solver_homepage/LatestJobPosting.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/LatestJobPosting.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/solver_homepage/LatestJobPosting.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "text-xl font-bold mt-5", children: job.title }, void 0, !1, {
      fileName: "app/modules/solver_homepage/LatestJobPosting.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "mt-2", children: job.location }, void 0, !1, {
      fileName: "app/modules/solver_homepage/LatestJobPosting.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react44.Link, { to: job.applicationUrl, className: "flex mt-10 px-5 border-blue-600 border-[1px] hover:bg-blue-700 hover:text-white text-blue-600 rounded-3xl p-3", children: "Apply now" }, void 0, !1, {
      fileName: "app/modules/solver_homepage/LatestJobPosting.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/solver_homepage/LatestJobPosting.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/modules/solver_homepage/LatestJobsSection.tsx
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime"), latestJobs = [
  {
    logo: "https://ryercat.com/cdn/shop/files/LogoTagline_200x@2x.png?v=1667425643",
    company: "Ryercat",
    postedOn: "2 days ago",
    title: "Formulation Scientist",
    location: "Canada",
    applicationUrl: "/register"
  },
  {
    logo: "https://media.licdn.com/dms/image/C510BAQE7Eor0BAq0vA/company-logo_200_200/0/1519908858114?e=1701302400&v=beta&t=Ugg9PwN0_j2dt-X5r7Tjsa0Xuj1Xa_C2cYmOGYLAxq4",
    company: "Phenomic AI",
    postedOn: "2 days ago",
    title: "Senior Data Scientist",
    location: "Toronto",
    applicationUrl: "/register"
  },
  {
    logo: "https://www.scian.com/wp-content/themes/romandesign/images/logo.png",
    company: "SCiAN Services",
    postedOn: "2 days ago",
    title: "Senior Biostatistician",
    location: "Toronto",
    applicationUrl: "/register"
  }
];
function LatestJobsSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("section", { className: "text-black body-font max-w-7xl mx-auto w-full mt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "w-full text-center text-5xl font-semibold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("span", { className: "text-blue-800", children: "Latest Jobs" }, void 0, !1, {
        fileName: "app/modules/solver_homepage/LatestJobsSection.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      " for you"
    ] }, void 0, !0, {
      fileName: "app/modules/solver_homepage/LatestJobsSection.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "w-full flex flex-wrap mt-10 justify-center gap-5", children: latestJobs.map((job) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(LatestJobsPosting, { job }, void 0, !1, {
      fileName: "app/modules/solver_homepage/LatestJobsSection.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/modules/solver_homepage/LatestJobsSection.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/solver_homepage/LatestJobsSection.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/modules/solver_homepage/RopeInSection.tsx
var import_react45 = require("react");

// app/assets/images/backgrounds/double_ring_side.svg
var double_ring_side_default = "/build/_assets/double_ring_side-VLO7I5XT.svg";

// app/modules/solver_homepage/RopeInSection.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function RopeInSection() {
  let [targetSelection, setTargetSelection] = (0, import_react45.useState)("solver");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("section", { className: "text-black body-font max-w-7xl mx-auto w-full mt-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "flex justify-center w-full gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "w-full flex flex-col md:w-[750px] text-white", children: [
      targetSelection == "solver" ? /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "rounded-7xl text-4xl bg-gray-800 p-10", children: [
        "Connect with ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("span", { className: "text-yellow-600", children: "thousands of companies" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/RopeInSection.tsx",
          lineNumber: 15,
          columnNumber: 111
        }, this),
        " that are looking for your expertise."
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/RopeInSection.tsx",
        lineNumber: 15,
        columnNumber: 43
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "rounded-7xl text-4xl bg-gray-800 p-10", children: [
        "Connect with ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("span", { className: "text-yellow-600", children: "thousands of experts" }, void 0, !1, {
          fileName: "app/modules/solver_homepage/RopeInSection.tsx",
          lineNumber: 17,
          columnNumber: 28
        }, this),
        " that are looking to leverage their skills."
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/RopeInSection.tsx",
        lineNumber: 16,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "rounded-7xl text-3xl bg-gray-800 p-10 mt-5 text-white", children: [
        "Focus on what matters most: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("span", { className: "text-yellow-600", children: "your profile." }, void 0, !1, {
          fileName: "app/modules/solver_homepage/RopeInSection.tsx",
          lineNumber: 53,
          columnNumber: 41
        }, this),
        " Using our proprietary algorithm, we match you with opportunities that are the best fit for your skills and experience."
      ] }, void 0, !0, {
        fileName: "app/modules/solver_homepage/RopeInSection.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/solver_homepage/RopeInSection.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "w-[420px] relative text-white rounded-7xl text-4xl bg-gray-800 p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("img", { className: "absolute left-0 bottom-0 w-full h-auto", src: double_ring_side_default }, void 0, !1, {
      fileName: "app/modules/solver_homepage/RopeInSection.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/modules/solver_homepage/RopeInSection.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/solver_homepage/RopeInSection.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/solver_homepage/RopeInSection.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), meta2 = () => [{ title: "Biosolver" }];
function Index() {
  let user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(HeroSection3, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(RopeInSection, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(HowItWorksSection, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(LatestJobsSection, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action16,
  default: () => LoginPage,
  loader: () => loader14,
  meta: () => meta3
});
var import_node22 = require("@remix-run/node"), import_react46 = require("@remix-run/react"), import_react47 = require("react");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), loader14 = async ({ request }) => await getUserId(request) ? (0, import_node22.redirect)("/dashboard") : (0, import_node22.json)({}), action16 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/dashboard"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node22.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node22.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node22.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node22.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}, meta3 = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react46.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/dashboard", actionData = (0, import_react46.useActionData)(), emailRef = (0, import_react47.useRef)(null), passwordRef = (0, import_react47.useRef)(null);
  return (0, import_react47.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_jsx_dev_runtime54.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react46.Link, { to: "/", className: "items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("img", { className: "h-16 w-16 mx-auto", src: base_default, alt: "BioSolver Logo" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react46.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
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
          (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
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
          (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
            import_react46.Link,
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
  loader: () => loader15
});
var import_node23 = require("@remix-run/node"), import_react48 = require("@remix-run/react");
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime"), loader15 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node23.json)({ noteListItems });
};
function NotesPage() {
  let data = (0, import_react48.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react48.Link, { to: ".", children: "Notes" }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("p", { children: user.email }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react48.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react48.Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          import_react48.NavLink,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react48.Outlet, {}, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-EP77SPMO.js", imports: ["/build/_shared/chunk-YUUU2RAQ.js", "/build/_shared/chunk-YYAXLAGZ.js", "/build/_shared/chunk-HYDBX6IC.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-C245UWAI.js", imports: ["/build/_shared/chunk-DZY5WEHX.js", "/build/_shared/chunk-JVNGUFS4.js", "/build/_shared/chunk-7SDL4ZUQ.js", "/build/_shared/chunk-B45RVZ6Z.js", "/build/_shared/chunk-PI6H7ZJD.js", "/build/_shared/chunk-KCLKX6RL.js", "/build/_shared/chunk-WLTRNBV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FQCGVV2W.js", imports: ["/build/_shared/chunk-CCKZM5HW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/calendar": { id: "routes/calendar", parentId: "root", path: "calendar", index: void 0, caseSensitive: void 0, module: "/build/routes/calendar-2HT3ZEXN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact-us": { id: "routes/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-us-TPYK572Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-VELTGKKT.js", imports: ["/build/_shared/chunk-CMWXK6I4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/documents": { id: "routes/documents", parentId: "root", path: "documents", index: void 0, caseSensitive: void 0, module: "/build/routes/documents-DDZFG3ZZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/for-seekers": { id: "routes/for-seekers", parentId: "root", path: "for-seekers", index: void 0, caseSensitive: void 0, module: "/build/routes/for-seekers-NORGH6T7.js", imports: ["/build/_shared/chunk-UTT7TENP.js", "/build/_shared/chunk-CCKZM5HW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/for-solvers": { id: "routes/for-solvers", parentId: "root", path: "for-solvers", index: void 0, caseSensitive: void 0, module: "/build/routes/for-solvers-ZRBWRX5S.js", imports: ["/build/_shared/chunk-UTT7TENP.js", "/build/_shared/chunk-CCKZM5HW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-JO7RAI4L.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-ZOI3TM25.js", imports: ["/build/_shared/chunk-CMWXK6I4.js", "/build/_shared/chunk-CCKZM5HW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-S5LWYBEX.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/matches": { id: "routes/matches", parentId: "root", path: "matches", index: void 0, caseSensitive: void 0, module: "/build/routes/matches-3FDE2QYX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/messages": { id: "routes/messages", parentId: "root", path: "messages", index: void 0, caseSensitive: void 0, module: "/build/routes/messages-H3Y2ROQT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-4A5OE3OB.js", imports: ["/build/_shared/chunk-OLP4QJ4K.js", "/build/_shared/chunk-CCKZM5HW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-CSLD5S5N.js", imports: ["/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-XD4RRL7B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-MOYLCMXS.js", imports: ["/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privacy-policy": { id: "routes/privacy-policy", parentId: "root", path: "privacy-policy", index: void 0, caseSensitive: void 0, module: "/build/routes/privacy-policy-WGH2JNOP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-IJ4ZD5LC.js", imports: ["/build/_shared/chunk-CCKZM5HW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile._index": { id: "routes/profile._index", parentId: "routes/profile", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/profile._index-WDOTFDLH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.certifications": { id: "routes/profile.certifications", parentId: "routes/profile", path: "certifications", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.certifications-7TDABOTK.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.degrees": { id: "routes/profile.degrees", parentId: "routes/profile", path: "degrees", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.degrees-6TO2UFPF.js", imports: ["/build/_shared/chunk-SKIHJPQU.js", "/build/_shared/chunk-YL3FPXEX.js", "/build/_shared/chunk-ON33C3SX.js", "/build/_shared/chunk-ZKPZBVFQ.js", "/build/_shared/chunk-PI6H7ZJD.js", "/build/_shared/chunk-KCLKX6RL.js", "/build/_shared/chunk-YFYYAG3U.js", "/build/_shared/chunk-X7FIYIPL.js", "/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.degrees.$degreeId": { id: "routes/profile.degrees.$degreeId", parentId: "routes/profile.degrees", path: ":degreeId", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.degrees.$degreeId-G3IIRMZP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.education": { id: "routes/profile.education", parentId: "routes/profile", path: "education", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.education-MNHDCLFD.js", imports: ["/build/_shared/chunk-HTDZCSOQ.js", "/build/_shared/chunk-X7FIYIPL.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.education.back": { id: "routes/profile.education.back", parentId: "routes/profile.education", path: "back", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.education.back-NSAUNUMR.js", imports: ["/build/_shared/chunk-ON33C3SX.js", "/build/_shared/chunk-YFYYAG3U.js", "/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.education.degree.new": { id: "routes/profile.education.degree.new", parentId: "routes/profile.education", path: "degree/new", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.education.degree.new-ZQUWQTBH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.personal": { id: "routes/profile.personal", parentId: "routes/profile", path: "personal", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.personal-3TVTLLKH.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.professional": { id: "routes/profile.professional", parentId: "routes/profile", path: "professional", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.professional-SPERVWKD.js", imports: ["/build/_shared/chunk-HQIRS5RA.js", "/build/_shared/chunk-ZKPZBVFQ.js", "/build/_shared/chunk-PI6H7ZJD.js", "/build/_shared/chunk-KCLKX6RL.js", "/build/_shared/chunk-YFYYAG3U.js", "/build/_shared/chunk-X7FIYIPL.js", "/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.professional.$experienceId": { id: "routes/profile.professional.$experienceId", parentId: "routes/profile.professional", path: ":experienceId", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.professional.$experienceId-E3LDQSHR.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.single": { id: "routes/profile.single", parentId: "routes/profile", path: "single", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.single-UAPOXCXR.js", imports: ["/build/_shared/chunk-OLP4QJ4K.js", "/build/_shared/chunk-YL3FPXEX.js", "/build/_shared/chunk-X7FIYIPL.js", "/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.skills": { id: "routes/profile.skills", parentId: "routes/profile", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.skills-TCRBEE2W.js", imports: ["/build/_shared/chunk-HTDZCSOQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.work": { id: "routes/profile.work", parentId: "routes/profile", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.work-CFBF5QKQ.js", imports: ["/build/_shared/chunk-NAXTNZ6C.js", "/build/_shared/chunk-7SDL4ZUQ.js", "/build/_shared/chunk-B45RVZ6Z.js", "/build/_shared/chunk-HTDZCSOQ.js", "/build/_shared/chunk-KCLKX6RL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-NARVVQ2Y.js", imports: ["/build/_shared/chunk-CMWXK6I4.js", "/build/_shared/chunk-CCKZM5HW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reports": { id: "routes/reports", parentId: "root", path: "reports", index: void 0, caseSensitive: void 0, module: "/build/routes/reports-XNV3LFFP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/seeker.dashboard": { id: "routes/seeker.dashboard", parentId: "root", path: "seeker/dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/seeker.dashboard-67273DVE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills.hard": { id: "routes/skills.hard", parentId: "root", path: "skills/hard", index: void 0, caseSensitive: void 0, module: "/build/routes/skills.hard-L6P7T3UD.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/solver.application": { id: "routes/solver.application", parentId: "root", path: "solver/application", index: void 0, caseSensitive: void 0, module: "/build/routes/solver.application-6CFVH2IT.js", imports: ["/build/_shared/chunk-NAXTNZ6C.js", "/build/_shared/chunk-SKIHJPQU.js", "/build/_shared/chunk-YL3FPXEX.js", "/build/_shared/chunk-ON33C3SX.js", "/build/_shared/chunk-HQIRS5RA.js", "/build/_shared/chunk-ZKPZBVFQ.js", "/build/_shared/chunk-CCKZM5HW.js", "/build/_shared/chunk-YFYYAG3U.js", "/build/_shared/chunk-X7FIYIPL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/terms-and-conditions": { id: "routes/terms-and-conditions", parentId: "root", path: "terms-and-conditions", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-and-conditions-QKWGD4G5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "8e1a8002", hmr: void 0, url: "/build/manifest-8E1A8002.js" };

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
  "routes/profile.professional.$experienceId": {
    id: "routes/profile.professional.$experienceId",
    parentId: "routes/profile.professional",
    path: ":experienceId",
    index: void 0,
    caseSensitive: void 0,
    module: profile_professional_experienceId_exports
  },
  "routes/profile.education.degree.new": {
    id: "routes/profile.education.degree.new",
    parentId: "routes/profile.education",
    path: "degree/new",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/profile.degrees.$degreeId": {
    id: "routes/profile.degrees.$degreeId",
    parentId: "routes/profile.degrees",
    path: ":degreeId",
    index: void 0,
    caseSensitive: void 0,
    module: profile_degrees_degreeId_exports
  },
  "routes/profile.certifications": {
    id: "routes/profile.certifications",
    parentId: "routes/profile",
    path: "certifications",
    index: void 0,
    caseSensitive: void 0,
    module: profile_certifications_exports
  },
  "routes/profile.education.back": {
    id: "routes/profile.education.back",
    parentId: "routes/profile.education",
    path: "back",
    index: void 0,
    caseSensitive: void 0,
    module: profile_education_back_exports
  },
  "routes/profile.professional": {
    id: "routes/profile.professional",
    parentId: "routes/profile",
    path: "professional",
    index: void 0,
    caseSensitive: void 0,
    module: profile_professional_exports
  },
  "routes/terms-and-conditions": {
    id: "routes/terms-and-conditions",
    parentId: "root",
    path: "terms-and-conditions",
    index: void 0,
    caseSensitive: void 0,
    module: terms_and_conditions_exports
  },
  "routes/solver.application": {
    id: "routes/solver.application",
    parentId: "root",
    path: "solver/application",
    index: void 0,
    caseSensitive: void 0,
    module: solver_application_exports
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
  "routes/seeker.dashboard": {
    id: "routes/seeker.dashboard",
    parentId: "root",
    path: "seeker/dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/profile.degrees": {
    id: "routes/profile.degrees",
    parentId: "routes/profile",
    path: "degrees",
    index: void 0,
    caseSensitive: void 0,
    module: profile_degrees_exports
  },
  "routes/privacy-policy": {
    id: "routes/privacy-policy",
    parentId: "root",
    path: "privacy-policy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_policy_exports
  },
  "routes/profile.single": {
    id: "routes/profile.single",
    parentId: "routes/profile",
    path: "single",
    index: void 0,
    caseSensitive: void 0,
    module: profile_single_exports
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
  "routes/skills.hard": {
    id: "routes/skills.hard",
    parentId: "root",
    path: "skills/hard",
    index: void 0,
    caseSensitive: void 0,
    module: skills_hard_exports
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
