import {
  base_default
} from "/build/_shared/chunk-JVNGUFS4.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
import {
  Bars3Icon_default,
  BellIcon_default,
  CalendarIcon_default,
  ChartPieIcon_default,
  ChevronDownIcon_default,
  Cog6ToothIcon_default,
  DocumentDuplicateIcon_default,
  FolderIcon_default,
  HomeIcon_default,
  MagnifyingGlassIcon_default,
  UsersIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-DZY5WEHX.js";
import {
  require_react_dom
} from "/build/_shared/chunk-YUUU2RAQ.js";
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-SGSFRA2X.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// css-bundle-update-plugin-ns:D:\spaces\BioSolver\code\bs-web\node_modules\@remix-run\css-bundle\dist\esm\index.js
var cssBundleHref = false ? void 0 : void 0;

// app/root.tsx
var import_session = __toESM(require_session());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JFJUTL3U.css";

// app/layout/anon/Header.tsx
var import_react34 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t14, e5, n6) => e5 in t14 ? i(t14, e5, { enumerable: true, configurable: true, writable: true, value: n6 }) : t14[e5] = n6;
var r = (t14, e5, n6) => (d(t14, typeof e5 != "symbol" ? e5 + "" : e5, n6), n6);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e5) {
    this.current !== e5 && (this.handoffState = "pending", this.currentId = 0, this.current = e5);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e5, f9) => {
  s.isServer ? (0, import_react.useEffect)(e5, f9) : (0, import_react.useLayoutEffect)(e5, f9);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e5) {
  let r8 = (0, import_react2.useRef)(e5);
  return l(() => {
    r8.current = e5;
  }, [e5]), r8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o11) => setTimeout(() => {
    throw o11;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n6 = [], r8 = { addEventListener(e5, t14, s13, a11) {
    return e5.addEventListener(t14, s13, a11), r8.add(() => e5.removeEventListener(t14, s13, a11));
  }, requestAnimationFrame(...e5) {
    let t14 = requestAnimationFrame(...e5);
    return r8.add(() => cancelAnimationFrame(t14));
  }, nextFrame(...e5) {
    return r8.requestAnimationFrame(() => r8.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t14 = setTimeout(...e5);
    return r8.add(() => clearTimeout(t14));
  }, microTask(...e5) {
    let t14 = { current: true };
    return t3(() => {
      t14.current && e5[0]();
    }), r8.add(() => {
      t14.current = false;
    });
  }, style(e5, t14, s13) {
    let a11 = e5.style.getPropertyValue(t14);
    return Object.assign(e5.style, { [t14]: s13 }), this.add(() => {
      Object.assign(e5.style, { [t14]: a11 });
    });
  }, group(e5) {
    let t14 = o2();
    return e5(t14), this.add(() => t14.dispose());
  }, add(e5) {
    return n6.push(e5), () => {
      let t14 = n6.indexOf(e5);
      if (t14 >= 0)
        for (let s13 of n6.splice(t14, 1))
          s13();
    };
  }, dispose() {
    for (let e5 of n6.splice(0))
      e5();
  } };
  return r8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e5] = (0, import_react3.useState)(o2);
  return (0, import_react3.useEffect)(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);
var o4 = function(t14) {
  let e5 = s2(t14);
  return import_react4.default.useCallback((...r8) => e5.current(...r8), [e5]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react5 = __toESM(require_react(), 1);
function l2() {
  let [e5, f9] = (0, import_react5.useState)(s.isHandoffComplete);
  return e5 && s.isHandoffComplete === false && f9(false), (0, import_react5.useEffect)(() => {
    e5 !== true && f9(true);
  }, [e5]), (0, import_react5.useEffect)(() => s.handoff(), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o6;
var I = (o6 = import_react6.default.useId) != null ? o6 : function() {
  let n6 = l2(), [e5, u9] = import_react6.default.useState(n6 ? () => s.nextId() : null);
  return l(() => {
    e5 === null && u9(s.nextId());
  }, [e5]), e5 != null ? "" + e5 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r8, n6, ...a11) {
  if (r8 in n6) {
    let e5 = n6[r8];
    return typeof e5 == "function" ? e5(...a11) : e5;
  }
  let t14 = new Error(`Tried to handle "${r8}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t14, u), t14;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r8) {
  return s.isServer ? null : r8 instanceof Node ? r8.ownerDocument : r8 != null && r8.hasOwnProperty("current") && r8.current instanceof Node ? r8.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var M = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(M || {});
var N = ((o11) => (o11[o11.Error = 0] = "Error", o11[o11.Overflow = 1] = "Overflow", o11[o11.Success = 2] = "Success", o11[o11.Underflow = 3] = "Underflow", o11))(N || {});
var F = ((t14) => (t14[t14.Previous = -1] = "Previous", t14[t14.Next = 1] = "Next", t14))(F || {});
function f(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(c2)).sort((r8, t14) => Math.sign((r8.tabIndex || Number.MAX_SAFE_INTEGER) - (t14.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t14) => (t14[t14.Strict = 0] = "Strict", t14[t14.Loose = 1] = "Loose", t14))(T || {});
function h(e5, r8 = 0) {
  var t14;
  return e5 === ((t14 = e(e5)) == null ? void 0 : t14.body) ? false : u(r8, { [0]() {
    return e5.matches(c2);
  }, [1]() {
    let l11 = e5;
    for (; l11 !== null; ) {
      if (l11.matches(c2))
        return true;
      l11 = l11.parentElement;
    }
    return false;
  } });
}
function D(e5) {
  let r8 = e(e5);
  o2().nextFrame(() => {
    r8 && !h(r8.activeElement, 0) && y(e5);
  });
}
var w = ((t14) => (t14[t14.Keyboard = 0] = "Keyboard", t14[t14.Mouse = 1] = "Mouse", t14))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e5) => {
  e5.metaKey || e5.altKey || e5.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e5) => {
  e5.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e5.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e5) {
  var r8, t14;
  return (t14 = (r8 = e5 == null ? void 0 : e5.matches) == null ? void 0 : r8.call(e5, S)) != null ? t14 : false;
}
function I2(e5, r8 = (t14) => t14) {
  return e5.slice().sort((t14, l11) => {
    let o11 = r8(t14), i6 = r8(l11);
    if (o11 === null || i6 === null)
      return 0;
    let n6 = o11.compareDocumentPosition(i6);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e5, r8) {
  return O(f(), r8, { relativeTo: e5 });
}
function O(e5, r8, { sorted: t14 = true, relativeTo: l11 = null, skipElements: o11 = [] } = {}) {
  let i6 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, n6 = Array.isArray(e5) ? t14 ? I2(e5) : e5 : f(e5);
  o11.length > 0 && n6.length > 1 && (n6 = n6.filter((s13) => !o11.includes(s13))), l11 = l11 != null ? l11 : i6.activeElement;
  let E6 = (() => {
    if (r8 & 5)
      return 1;
    if (r8 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (r8 & 1)
      return 0;
    if (r8 & 2)
      return Math.max(0, n6.indexOf(l11)) - 1;
    if (r8 & 4)
      return Math.max(0, n6.indexOf(l11)) + 1;
    if (r8 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p8 = r8 & 32 ? { preventScroll: true } : {}, d12 = 0, a11 = n6.length, u9;
  do {
    if (d12 >= a11 || d12 + a11 <= 0)
      return 0;
    let s13 = x6 + d12;
    if (r8 & 16)
      s13 = (s13 + a11) % a11;
    else {
      if (s13 < 0)
        return 3;
      if (s13 >= a11)
        return 1;
    }
    u9 = n6[s13], u9 == null || u9.focus(p8), d12 += E6;
  } while (u9 !== i6.activeElement);
  return r8 & 6 && H(u9) && u9.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react7 = __toESM(require_react(), 1);
function d2(e5, r8, n6) {
  let o11 = s2(r8);
  (0, import_react7.useEffect)(() => {
    function t14(u9) {
      o11.current(u9);
    }
    return document.addEventListener(e5, t14, n6), () => document.removeEventListener(e5, t14, n6);
  }, [e5, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react8 = __toESM(require_react(), 1);
function s4(e5, r8, n6) {
  let o11 = s2(r8);
  (0, import_react8.useEffect)(() => {
    function t14(i6) {
      o11.current(i6);
    }
    return window.addEventListener(e5, t14, n6), () => window.removeEventListener(e5, t14, n6);
  }, [e5, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function H2(s13, m10, i6 = true) {
  let l11 = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    requestAnimationFrame(() => {
      l11.current = i6;
    });
  }, [i6]);
  function a11(e5, o11) {
    if (!l11.current || e5.defaultPrevented)
      return;
    let n6 = o11(e5);
    if (n6 === null || !n6.getRootNode().contains(n6))
      return;
    let E6 = function r8(t14) {
      return typeof t14 == "function" ? r8(t14()) : Array.isArray(t14) || t14 instanceof Set ? t14 : [t14];
    }(s13);
    for (let r8 of E6) {
      if (r8 === null)
        continue;
      let t14 = r8 instanceof HTMLElement ? r8 : r8.current;
      if (t14 != null && t14.contains(n6) || e5.composed && e5.composedPath().includes(t14))
        return;
    }
    return !h(n6, T.Loose) && n6.tabIndex !== -1 && e5.preventDefault(), m10(e5, n6);
  }
  let u9 = (0, import_react9.useRef)(null);
  d2("mousedown", (e5) => {
    var o11, n6;
    l11.current && (u9.current = ((n6 = (o11 = e5.composedPath) == null ? void 0 : o11.call(e5)) == null ? void 0 : n6[0]) || e5.target);
  }, true), d2("click", (e5) => {
    u9.current && (a11(e5, () => u9.current), u9.current = null);
  }, true), s4("blur", (e5) => a11(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react10 = __toESM(require_react(), 1);
function i2(t14) {
  var n6;
  if (t14.type)
    return t14.type;
  let e5 = (n6 = t14.as) != null ? n6 : "button";
  if (typeof e5 == "string" && e5.toLowerCase() === "button")
    return "button";
}
function s5(t14, e5) {
  let [n6, u9] = (0, import_react10.useState)(() => i2(t14));
  return l(() => {
    u9(i2(t14));
  }, [t14.type, t14.as]), l(() => {
    n6 || e5.current && e5.current instanceof HTMLButtonElement && !e5.current.hasAttribute("type") && u9("button");
  }, [n6, e5]), n6;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react11 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t14, n6 = true) {
  return Object.assign(t14, { [u2]: n6 });
}
function y2(...t14) {
  let n6 = (0, import_react11.useRef)(t14);
  (0, import_react11.useEffect)(() => {
    n6.current = t14;
  }, [t14]);
  let c14 = o4((e5) => {
    for (let o11 of n6.current)
      o11 != null && (typeof o11 == "function" ? o11(e5) : o11.current = e5);
  });
  return t14.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u2])) ? void 0 : c14;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react12 = __toESM(require_react(), 1);
function F2({ container: e5, accept: t14, walk: r8, enabled: c14 = true }) {
  let o11 = (0, import_react12.useRef)(t14), l11 = (0, import_react12.useRef)(r8);
  (0, import_react12.useEffect)(() => {
    o11.current = t14, l11.current = r8;
  }, [t14, r8]), l(() => {
    if (!e5 || !c14)
      return;
    let n6 = e(e5);
    if (!n6)
      return;
    let f9 = o11.current, p8 = l11.current, d12 = Object.assign((i6) => f9(i6), { acceptNode: f9 }), u9 = n6.createTreeWalker(e5, NodeFilter.SHOW_ELEMENT, d12, false);
    for (; u9.nextNode(); )
      p8(u9.currentNode);
  }, [e5, c14, o11, l11]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f2(r8) {
  throw new Error("Unexpected object: " + r8);
}
var a2 = ((e5) => (e5[e5.First = 0] = "First", e5[e5.Previous = 1] = "Previous", e5[e5.Next = 2] = "Next", e5[e5.Last = 3] = "Last", e5[e5.Specific = 4] = "Specific", e5[e5.Nothing = 5] = "Nothing", e5))(a2 || {});
function x(r8, n6) {
  let t14 = n6.resolveItems();
  if (t14.length <= 0)
    return null;
  let l11 = n6.resolveActiveIndex(), s13 = l11 != null ? l11 : -1, d12 = (() => {
    switch (r8.focus) {
      case 0:
        return t14.findIndex((e5) => !n6.resolveDisabled(e5));
      case 1: {
        let e5 = t14.slice().reverse().findIndex((i6, c14, u9) => s13 !== -1 && u9.length - c14 - 1 >= s13 ? false : !n6.resolveDisabled(i6));
        return e5 === -1 ? e5 : t14.length - 1 - e5;
      }
      case 2:
        return t14.findIndex((e5, i6) => i6 <= s13 ? false : !n6.resolveDisabled(e5));
      case 3: {
        let e5 = t14.slice().reverse().findIndex((i6) => !n6.resolveDisabled(i6));
        return e5 === -1 ? e5 : t14.length - 1 - e5;
      }
      case 4:
        return t14.findIndex((e5) => n6.resolveId(e5) === r8.id);
      case 5:
        return null;
      default:
        f2(r8);
    }
  })();
  return d12 === -1 ? l11 : d12;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e2(...n6) {
  return n6.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S2 = ((a11) => (a11[a11.None = 0] = "None", a11[a11.RenderStrategy = 1] = "RenderStrategy", a11[a11.Static = 2] = "Static", a11))(S2 || {});
var j = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(j || {});
function X({ ourProps: r8, theirProps: t14, slot: e5, defaultTag: a11, features: s13, visible: n6 = true, name: f9 }) {
  let o11 = N2(t14, r8);
  if (n6)
    return c4(o11, e5, a11, f9);
  let u9 = s13 != null ? s13 : 0;
  if (u9 & 2) {
    let { static: l11 = false, ...p8 } = o11;
    if (l11)
      return c4(p8, e5, a11, f9);
  }
  if (u9 & 1) {
    let { unmount: l11 = true, ...p8 } = o11;
    return u(l11 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c4({ ...p8, hidden: true, style: { display: "none" } }, e5, a11, f9);
    } });
  }
  return c4(o11, e5, a11, f9);
}
function c4(r8, t14 = {}, e5, a11) {
  let { as: s13 = e5, children: n6, refName: f9 = "ref", ...o11 } = g(r8, ["unmount", "static"]), u9 = r8.ref !== void 0 ? { [f9]: r8.ref } : {}, l11 = typeof n6 == "function" ? n6(t14) : n6;
  "className" in o11 && o11.className && typeof o11.className == "function" && (o11.className = o11.className(t14));
  let p8 = {};
  if (t14) {
    let i6 = false, m10 = [];
    for (let [y8, d12] of Object.entries(t14))
      typeof d12 == "boolean" && (i6 = true), d12 === true && m10.push(y8);
    i6 && (p8["data-headlessui-state"] = m10.join(" "));
  }
  if (s13 === import_react13.Fragment && Object.keys(R(o11)).length > 0) {
    if (!(0, import_react13.isValidElement)(l11) || Array.isArray(l11) && l11.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a11} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o11).map((d12) => `  - ${d12}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d12) => `  - ${d12}`).join(`
`)].join(`
`));
    let i6 = l11.props, m10 = typeof (i6 == null ? void 0 : i6.className) == "function" ? (...d12) => e2(i6 == null ? void 0 : i6.className(...d12), o11.className) : e2(i6 == null ? void 0 : i6.className, o11.className), y8 = m10 ? { className: m10 } : {};
    return (0, import_react13.cloneElement)(l11, Object.assign({}, N2(l11.props, R(g(o11, ["ref"]))), p8, u9, w2(l11.ref, u9.ref), y8));
  }
  return (0, import_react13.createElement)(s13, Object.assign({}, g(o11, ["ref"]), s13 !== import_react13.Fragment && u9, s13 !== import_react13.Fragment && p8), l11);
}
function w2(...r8) {
  return { ref: r8.every((t14) => t14 == null) ? void 0 : (t14) => {
    for (let e5 of r8)
      e5 != null && (typeof e5 == "function" ? e5(t14) : e5.current = t14);
  } };
}
function N2(...r8) {
  var a11;
  if (r8.length === 0)
    return {};
  if (r8.length === 1)
    return r8[0];
  let t14 = {}, e5 = {};
  for (let s13 of r8)
    for (let n6 in s13)
      n6.startsWith("on") && typeof s13[n6] == "function" ? ((a11 = e5[n6]) != null || (e5[n6] = []), e5[n6].push(s13[n6])) : t14[n6] = s13[n6];
  if (t14.disabled || t14["aria-disabled"])
    return Object.assign(t14, Object.fromEntries(Object.keys(e5).map((s13) => [s13, void 0])));
  for (let s13 in e5)
    Object.assign(t14, { [s13](n6, ...f9) {
      let o11 = e5[s13];
      for (let u9 of o11) {
        if ((n6 instanceof Event || (n6 == null ? void 0 : n6.nativeEvent) instanceof Event) && n6.defaultPrevented)
          return;
        u9(n6, ...f9);
      }
    } });
  return t14;
}
function D2(r8) {
  var t14;
  return Object.assign((0, import_react13.forwardRef)(r8), { displayName: (t14 = r8.displayName) != null ? t14 : r8.name });
}
function R(r8) {
  let t14 = Object.assign({}, r8);
  for (let e5 in t14)
    t14[e5] === void 0 && delete t14[e5];
  return t14;
}
function g(r8, t14 = []) {
  let e5 = Object.assign({}, r8);
  for (let a11 of t14)
    a11 in e5 && delete e5[a11];
  return e5;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n6) {
  let e5 = n6.parentElement, l11 = null;
  for (; e5 && !(e5 instanceof HTMLFieldSetElement); )
    e5 instanceof HTMLLegendElement && (l11 = e5), e5 = e5.parentElement;
  let t14 = (e5 == null ? void 0 : e5.getAttribute("disabled")) === "";
  return t14 && i4(l11) ? false : t14;
}
function i4(n6) {
  if (!n6)
    return false;
  let e5 = n6.previousElementSibling;
  for (; e5 !== null; ) {
    if (e5 instanceof HTMLLegendElement)
      return false;
    e5 = e5.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "div";
var p2 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(p2 || {});
function s6(t14, o11) {
  let { features: n6 = 1, ...e5 } = t14, d12 = { ref: o11, "aria-hidden": (n6 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n6 & 4) === 4 && (n6 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d12, theirProps: e5, slot: {}, defaultTag: a3, name: "Hidden" });
}
var c5 = D2(s6);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react14 = __toESM(require_react(), 1);
var n = (0, import_react14.createContext)(null);
n.displayName = "OpenClosedContext";
var d5 = ((e5) => (e5[e5.Open = 1] = "Open", e5[e5.Closed = 2] = "Closed", e5[e5.Closing = 4] = "Closing", e5[e5.Opening = 8] = "Opening", e5))(d5 || {});
function C() {
  return (0, import_react14.useContext)(n);
}
function c6({ value: o11, children: r8 }) {
  return import_react14.default.createElement(n.Provider, { value: o11 }, r8);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r8) => (r8.Space = " ", r8.Enter = "Enter", r8.Escape = "Escape", r8.Backspace = "Backspace", r8.Delete = "Delete", r8.ArrowLeft = "ArrowLeft", r8.ArrowUp = "ArrowUp", r8.ArrowRight = "ArrowRight", r8.ArrowDown = "ArrowDown", r8.Home = "Home", r8.End = "End", r8.PageUp = "PageUp", r8.PageDown = "PageDown", r8.Tab = "Tab", r8))(o8 || {});

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react15 = __toESM(require_react(), 1);
function m3(u9, t14) {
  let e5 = (0, import_react15.useRef)([]), r8 = o4(u9);
  (0, import_react15.useEffect)(() => {
    let o11 = [...e5.current];
    for (let [n6, a11] of t14.entries())
      if (e5.current[n6] !== a11) {
        let l11 = r8(t14, o11);
        return e5.current = t14, l11;
      }
  }, [r8, ...t14]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react16 = __toESM(require_react(), 1);
function t6(e5) {
  return [e5.screenX, e5.screenY];
}
function u3() {
  let e5 = (0, import_react16.useRef)([-1, -1]);
  return { wasMoved(r8) {
    let n6 = t6(r8);
    return e5.current[0] === n6[0] && e5.current[1] === n6[1] ? false : (e5.current = n6, true);
  }, update(r8) {
    e5.current = t6(r8);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t7() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react28 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react22 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react17 = __toESM(require_react(), 1);
var s8 = ((r8) => (r8[r8.Forwards = 0] = "Forwards", r8[r8.Backwards = 1] = "Backwards", r8))(s8 || {});
function n2() {
  let e5 = (0, import_react17.useRef)(0);
  return s4("keydown", (o11) => {
    o11.key === "Tab" && (e5.current = o11.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react18 = __toESM(require_react(), 1);
function f4() {
  let e5 = (0, import_react18.useRef)(false);
  return l(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react19 = __toESM(require_react(), 1);
function n3(...e5) {
  return (0, import_react19.useMemo)(() => e(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react20 = __toESM(require_react(), 1);
function E3(n6, e5, a11, t14) {
  let i6 = s2(a11);
  (0, import_react20.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r8(o11) {
      i6.current(o11);
    }
    return n6.addEventListener(e5, r8, t14), () => n6.removeEventListener(e5, r8, t14);
  }, [n6, e5, t14]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t10(n6) {
  function e5() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e5));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e5), e5());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react21 = __toESM(require_react(), 1);
function c7(t14) {
  let r8 = o4(t14), e5 = (0, import_react21.useRef)(false);
  (0, import_react21.useEffect)(() => (e5.current = false, () => {
    e5.current = true, t3(() => {
      e5.current && r8();
    });
  }), [r8]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t14) {
  if (!t14)
    return /* @__PURE__ */ new Set();
  if (typeof t14 == "function")
    return new Set(t14());
  let r8 = /* @__PURE__ */ new Set();
  for (let e5 of t14.current)
    e5.current instanceof HTMLElement && r8.add(e5.current);
  return r8;
}
var J = "div";
var h3 = ((n6) => (n6[n6.None = 1] = "None", n6[n6.InitialFocus = 2] = "InitialFocus", n6[n6.TabLock = 4] = "TabLock", n6[n6.FocusLock = 8] = "FocusLock", n6[n6.RestoreFocus = 16] = "RestoreFocus", n6[n6.All = 30] = "All", n6))(h3 || {});
function X2(t14, r8) {
  let e5 = (0, import_react22.useRef)(null), o11 = y2(e5, r8), { initialFocus: u9, containers: i6, features: n6 = 30, ...l11 } = t14;
  l2() || (n6 = 1);
  let m10 = n3(e5);
  Y({ ownerDocument: m10 }, Boolean(n6 & 16));
  let c14 = Z({ ownerDocument: m10, container: e5, initialFocus: u9 }, Boolean(n6 & 2));
  $({ ownerDocument: m10, container: e5, containers: i6, previousActiveElement: c14 }, Boolean(n6 & 8));
  let v3 = n2(), y8 = o4((s13) => {
    let T6 = e5.current;
    if (!T6)
      return;
    ((B) => B())(() => {
      u(v3.current, { [s8.Forwards]: () => {
        O(T6, M.First, { skipElements: [s13.relatedTarget] });
      }, [s8.Backwards]: () => {
        O(T6, M.Last, { skipElements: [s13.relatedTarget] });
      } });
    });
  }), _3 = p(), b5 = (0, import_react22.useRef)(false), j4 = { ref: o11, onKeyDown(s13) {
    s13.key == "Tab" && (b5.current = true, _3.requestAnimationFrame(() => {
      b5.current = false;
    }));
  }, onBlur(s13) {
    let T6 = P(i6);
    e5.current instanceof HTMLElement && T6.add(e5.current);
    let d12 = s13.relatedTarget;
    d12 instanceof HTMLElement && d12.dataset.headlessuiFocusGuard !== "true" && (S3(T6, d12) || (b5.current ? O(e5.current, u(v3.current, { [s8.Forwards]: () => M.Next, [s8.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s13.target }) : s13.target instanceof HTMLElement && y(s13.target)));
  } };
  return import_react22.default.createElement(import_react22.default.Fragment, null, Boolean(n6 & 4) && import_react22.default.createElement(c5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p2.Focusable }), X({ ourProps: j4, theirProps: l11, defaultTag: J, name: "FocusTrap" }), Boolean(n6 & 4) && import_react22.default.createElement(c5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p2.Focusable }));
}
var z = D2(X2);
var ge = Object.assign(z, { features: h3 });
var a4 = [];
t10(() => {
  function t14(r8) {
    r8.target instanceof HTMLElement && r8.target !== document.body && a4[0] !== r8.target && (a4.unshift(r8.target), a4 = a4.filter((e5) => e5 != null && e5.isConnected), a4.splice(10));
  }
  window.addEventListener("click", t14, { capture: true }), window.addEventListener("mousedown", t14, { capture: true }), window.addEventListener("focus", t14, { capture: true }), document.body.addEventListener("click", t14, { capture: true }), document.body.addEventListener("mousedown", t14, { capture: true }), document.body.addEventListener("focus", t14, { capture: true });
});
function Q(t14 = true) {
  let r8 = (0, import_react22.useRef)(a4.slice());
  return m3(([e5], [o11]) => {
    o11 === true && e5 === false && t3(() => {
      r8.current.splice(0);
    }), o11 === false && e5 === true && (r8.current = a4.slice());
  }, [t14, a4, r8]), o4(() => {
    var e5;
    return (e5 = r8.current.find((o11) => o11 != null && o11.isConnected)) != null ? e5 : null;
  });
}
function Y({ ownerDocument: t14 }, r8) {
  let e5 = Q(r8);
  m3(() => {
    r8 || (t14 == null ? void 0 : t14.activeElement) === (t14 == null ? void 0 : t14.body) && y(e5());
  }, [r8]), c7(() => {
    r8 && y(e5());
  });
}
function Z({ ownerDocument: t14, container: r8, initialFocus: e5 }, o11) {
  let u9 = (0, import_react22.useRef)(null), i6 = f4();
  return m3(() => {
    if (!o11)
      return;
    let n6 = r8.current;
    n6 && t3(() => {
      if (!i6.current)
        return;
      let l11 = t14 == null ? void 0 : t14.activeElement;
      if (e5 != null && e5.current) {
        if ((e5 == null ? void 0 : e5.current) === l11) {
          u9.current = l11;
          return;
        }
      } else if (n6.contains(l11)) {
        u9.current = l11;
        return;
      }
      e5 != null && e5.current ? y(e5.current) : O(n6, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u9.current = t14 == null ? void 0 : t14.activeElement;
    });
  }, [o11]), u9;
}
function $({ ownerDocument: t14, container: r8, containers: e5, previousActiveElement: o11 }, u9) {
  let i6 = f4();
  E3(t14 == null ? void 0 : t14.defaultView, "focus", (n6) => {
    if (!u9 || !i6.current)
      return;
    let l11 = P(e5);
    r8.current instanceof HTMLElement && l11.add(r8.current);
    let m10 = o11.current;
    if (!m10)
      return;
    let c14 = n6.target;
    c14 && c14 instanceof HTMLElement ? S3(l11, c14) ? (o11.current = c14, y(c14)) : (n6.preventDefault(), n6.stopPropagation(), y(m10)) : y(o11.current);
  }, true);
}
function S3(t14, r8) {
  for (let e5 of t14)
    if (e5.contains(r8))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react24 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react23 = __toESM(require_react(), 1);
var e3 = (0, import_react23.createContext)(false);
function l5() {
  return (0, import_react23.useContext)(e3);
}
function P2(o11) {
  return import_react23.default.createElement(e3.Provider, { value: o11.force }, o11.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F3(p8) {
  let l11 = l5(), n6 = (0, import_react24.useContext)(v), e5 = n3(p8), [a11, o11] = (0, import_react24.useState)(() => {
    if (!l11 && n6 !== null || s.isServer)
      return null;
    let t14 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (t14)
      return t14;
    if (e5 === null)
      return null;
    let r8 = e5.createElement("div");
    return r8.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(r8);
  });
  return (0, import_react24.useEffect)(() => {
    a11 !== null && (e5 != null && e5.body.contains(a11) || e5 == null || e5.body.appendChild(a11));
  }, [a11, e5]), (0, import_react24.useEffect)(() => {
    l11 || n6 !== null && o11(n6.current);
  }, [n6, o11, l11]), a11;
}
var U = import_react24.Fragment;
function N3(p8, l11) {
  let n6 = p8, e5 = (0, import_react24.useRef)(null), a11 = y2(T2((u9) => {
    e5.current = u9;
  }), l11), o11 = n3(e5), t14 = F3(e5), [r8] = (0, import_react24.useState)(() => {
    var u9;
    return s.isServer ? null : (u9 = o11 == null ? void 0 : o11.createElement("div")) != null ? u9 : null;
  }), i6 = (0, import_react24.useContext)(f5), C3 = l2();
  return l(() => {
    !t14 || !r8 || t14.contains(r8) || (r8.setAttribute("data-headlessui-portal", ""), t14.appendChild(r8));
  }, [t14, r8]), l(() => {
    if (r8 && i6)
      return i6.register(r8);
  }, [i6, r8]), c7(() => {
    var u9;
    !t14 || !r8 || (r8 instanceof Node && t14.contains(r8) && t14.removeChild(r8), t14.childNodes.length <= 0 && ((u9 = t14.parentElement) == null || u9.removeChild(t14)));
  }), C3 ? !t14 || !r8 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a11 }, theirProps: n6, defaultTag: U, name: "Portal" }), r8) : null;
}
var S4 = import_react24.Fragment;
var v = (0, import_react24.createContext)(null);
function j2(p8, l11) {
  let { target: n6, ...e5 } = p8, o11 = { ref: y2(l11) };
  return import_react24.default.createElement(v.Provider, { value: n6 }, X({ ourProps: o11, theirProps: e5, defaultTag: S4, name: "Popover.Group" }));
}
var f5 = (0, import_react24.createContext)(null);
function ae() {
  let p8 = (0, import_react24.useContext)(f5), l11 = (0, import_react24.useRef)([]), n6 = o4((o11) => (l11.current.push(o11), p8 && p8.register(o11), () => e5(o11))), e5 = o4((o11) => {
    let t14 = l11.current.indexOf(o11);
    t14 !== -1 && l11.current.splice(t14, 1), p8 && p8.unregister(o11);
  }), a11 = (0, import_react24.useMemo)(() => ({ register: n6, unregister: e5, portals: l11 }), [n6, e5, l11]);
  return [l11, (0, import_react24.useMemo)(() => function({ children: t14 }) {
    return import_react24.default.createElement(f5.Provider, { value: a11 }, t14);
  }, [a11])];
}
var D3 = D2(N3);
var I3 = D2(j2);
var pe = Object.assign(D3, { Group: I3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react25 = __toESM(require_react(), 1);
var d8 = (0, import_react25.createContext)(null);
function f6() {
  let r8 = (0, import_react25.useContext)(d8);
  if (r8 === null) {
    let t14 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t14, f6), t14;
  }
  return r8;
}
function M2() {
  let [r8, t14] = (0, import_react25.useState)([]);
  return [r8.length > 0 ? r8.join(" ") : void 0, (0, import_react25.useMemo)(() => function(e5) {
    let i6 = o4((s13) => (t14((o11) => [...o11, s13]), () => t14((o11) => {
      let p8 = o11.slice(), c14 = p8.indexOf(s13);
      return c14 !== -1 && p8.splice(c14, 1), p8;
    }))), n6 = (0, import_react25.useMemo)(() => ({ register: i6, slot: e5.slot, name: e5.name, props: e5.props }), [i6, e5.slot, e5.name, e5.props]);
    return import_react25.default.createElement(d8.Provider, { value: n6 }, e5.children);
  }, [t14])];
}
var S5 = "p";
function h4(r8, t14) {
  let a11 = I(), { id: e5 = `headlessui-description-${a11}`, ...i6 } = r8, n6 = f6(), s13 = y2(t14);
  l(() => n6.register(e5), [e5, n6.register]);
  let o11 = { ref: s13, ...n6.props, id: e5 };
  return X({ ourProps: o11, theirProps: i6, slot: n6.slot || {}, defaultTag: S5, name: n6.name || "Description" });
}
var y3 = D2(h4);
var b2 = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react26 = __toESM(require_react(), 1);
var a5 = (0, import_react26.createContext)(() => {
});
a5.displayName = "StackContext";
var s10 = ((e5) => (e5[e5.Add = 0] = "Add", e5[e5.Remove = 1] = "Remove", e5))(s10 || {});
function x3() {
  return (0, import_react26.useContext)(a5);
}
function M3({ children: i6, onUpdate: r8, type: e5, element: n6, enabled: u9 }) {
  let l11 = x3(), o11 = o4((...t14) => {
    r8 == null || r8(...t14), l11(...t14);
  });
  return l(() => {
    let t14 = u9 === void 0 || u9 === true;
    return t14 && o11(0, e5, n6), () => {
      t14 && o11(1, e5, n6);
    };
  }, [o11, e5, n6, u9]), import_react26.default.createElement(a5.Provider, { value: o11 }, i6);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i5(e5, t14) {
  return e5 === t14 && (e5 !== 0 || 1 / e5 === 1 / t14) || e5 !== e5 && t14 !== t14;
}
var d10 = typeof Object.is == "function" ? Object.is : i5;
var { useState: u6, useEffect: h5, useLayoutEffect: f7, useDebugValue: p4 } = l7;
function y4(e5, t14, c14) {
  const a11 = t14(), [{ inst: n6 }, o11] = u6({ inst: { value: a11, getSnapshot: t14 } });
  return f7(() => {
    n6.value = a11, n6.getSnapshot = t14, r6(n6) && o11({ inst: n6 });
  }, [e5, a11, t14]), h5(() => (r6(n6) && o11({ inst: n6 }), e5(() => {
    r6(n6) && o11({ inst: n6 });
  })), [e5]), p4(a11), a11;
}
function r6(e5) {
  const t14 = e5.getSnapshot, c14 = e5.value;
  try {
    const a11 = t14();
    return !d10(c14, a11);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t12(r8, e5, n6) {
  return e5();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r7 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s11 = !r7;
var c10 = s11 ? t12 : y4;
var a6 = "useSyncExternalStore" in e4 ? ((n6) => n6.useSyncExternalStore)(e4) : c10;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S6(t14) {
  return a6(t14.subscribe, t14.getSnapshot, t14.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o11, r8) {
  let t14 = o11(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t14;
  }, subscribe(e5) {
    return n6.add(e5), () => n6.delete(e5);
  }, dispatch(e5, ...s13) {
    let i6 = r8[e5].call(t14, ...s13);
    i6 && (t14 = i6, n6.forEach((c14) => c14()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c11() {
  let o11;
  return { before({ doc: e5 }) {
    var l11;
    let n6 = e5.documentElement;
    o11 = ((l11 = e5.defaultView) != null ? l11 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e5, d: n6 }) {
    let t14 = e5.documentElement, l11 = t14.clientWidth - t14.offsetWidth, r8 = o11 - l11;
    n6.style(t14, "paddingRight", `${r8}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p5() {
  if (!t7())
    return {};
  let o11;
  return { before() {
    o11 = window.pageYOffset;
  }, after({ doc: r8, d: l11, meta: s13 }) {
    function i6(e5) {
      return s13.containers.flatMap((t14) => t14()).some((t14) => t14.contains(e5));
    }
    l11.style(r8.body, "marginTop", `-${o11}px`), window.scrollTo(0, 0);
    let n6 = null;
    l11.addEventListener(r8, "click", (e5) => {
      if (e5.target instanceof HTMLElement)
        try {
          let t14 = e5.target.closest("a");
          if (!t14)
            return;
          let { hash: c14 } = new URL(t14.href), a11 = r8.querySelector(c14);
          a11 && !i6(a11) && (n6 = a11);
        } catch {
        }
    }, true), l11.addEventListener(r8, "touchmove", (e5) => {
      e5.target instanceof HTMLElement && !i6(e5.target) && e5.preventDefault();
    }, { passive: false }), l11.add(() => {
      window.scrollTo(0, window.pageYOffset + o11), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e5, d: o11 }) {
    o11.style(e5.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m7(e5) {
  let n6 = {};
  for (let t14 of e5)
    Object.assign(n6, t14(n6));
  return n6;
}
var a8 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e5, n6) {
  var o11;
  let t14 = (o11 = this.get(e5)) != null ? o11 : { doc: e5, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t14.count++, t14.meta.add(n6), this.set(e5, t14), this;
}, POP(e5, n6) {
  let t14 = this.get(e5);
  return t14 && (t14.count--, t14.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e5, d: n6, meta: t14 }) {
  let o11 = { doc: e5, d: n6, meta: m7(t14) }, c14 = [p5(), c11(), l8()];
  c14.forEach(({ before: r8 }) => r8 == null ? void 0 : r8(o11)), c14.forEach(({ after: r8 }) => r8 == null ? void 0 : r8(o11));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a8.subscribe(() => {
  let e5 = a8.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t14] of e5)
    n6.set(t14, t14.documentElement.style.overflow);
  for (let t14 of e5.values()) {
    let o11 = n6.get(t14.doc) === "hidden", c14 = t14.count !== 0;
    (c14 && !o11 || !c14 && o11) && a8.dispatch(t14.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t14), t14.count === 0 && a8.dispatch("TEARDOWN", t14);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p6(e5, r8, n6) {
  let f9 = S6(a8), o11 = e5 ? f9.get(e5) : void 0, i6 = o11 ? o11.count > 0 : false;
  return l(() => {
    if (!(!e5 || !r8))
      return a8.dispatch("PUSH", e5, n6), () => a8.dispatch("POP", e5, n6);
  }, [r8, e5]), i6;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u7 = /* @__PURE__ */ new Map();
var t13 = /* @__PURE__ */ new Map();
function h6(r8, l11 = true) {
  l(() => {
    var o11;
    if (!l11)
      return;
    let e5 = typeof r8 == "function" ? r8() : r8.current;
    if (!e5)
      return;
    function a11() {
      var d12;
      if (!e5)
        return;
      let i6 = (d12 = t13.get(e5)) != null ? d12 : 1;
      if (i6 === 1 ? t13.delete(e5) : t13.set(e5, i6 - 1), i6 !== 1)
        return;
      let n6 = u7.get(e5);
      n6 && (n6["aria-hidden"] === null ? e5.removeAttribute("aria-hidden") : e5.setAttribute("aria-hidden", n6["aria-hidden"]), e5.inert = n6.inert, u7.delete(e5));
    }
    let f9 = (o11 = t13.get(e5)) != null ? o11 : 0;
    return t13.set(e5, f9 + 1), f9 !== 0 || (u7.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), e5.setAttribute("aria-hidden", "true"), e5.inert = true), a11;
  }, [r8, l11]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react27 = __toESM(require_react(), 1);
function p7({ defaultContainers: f9 = [], portals: o11 } = {}) {
  let t14 = (0, import_react27.useRef)(null), i6 = n3(t14), u9 = o4(() => {
    var r8;
    let n6 = [];
    for (let e5 of f9)
      e5 !== null && (e5 instanceof HTMLElement ? n6.push(e5) : "current" in e5 && e5.current instanceof HTMLElement && n6.push(e5.current));
    if (o11 != null && o11.current)
      for (let e5 of o11.current)
        n6.push(e5);
    for (let e5 of (r8 = i6 == null ? void 0 : i6.querySelectorAll("html > *, body > *")) != null ? r8 : [])
      e5 !== document.body && e5 !== document.head && e5 instanceof HTMLElement && e5.id !== "headlessui-portal-root" && (e5.contains(t14.current) || n6.some((c14) => e5.contains(c14)) || n6.push(e5));
    return n6;
  });
  return { resolveContainers: u9, contains: o4((n6) => u9().some((r8) => r8.contains(n6))), mainTreeNodeRef: t14, MainTreeNode: (0, import_react27.useMemo)(() => function() {
    return import_react27.default.createElement(c5, { features: p2.Hidden, ref: t14 });
  }, [t14]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(_e || {});
var Ie = ((e5) => (e5[e5.SetTitleId = 0] = "SetTitleId", e5))(Ie || {});
var Me = { [0](t14, e5) {
  return t14.titleId === e5.id ? t14 : { ...t14, titleId: e5.id };
} };
var I4 = (0, import_react28.createContext)(null);
I4.displayName = "DialogContext";
function b3(t14) {
  let e5 = (0, import_react28.useContext)(I4);
  if (e5 === null) {
    let o11 = new Error(`<${t14} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, b3), o11;
  }
  return e5;
}
function we(t14, e5, o11 = () => [document.body]) {
  p6(t14, e5, (i6) => {
    var n6;
    return { containers: [...(n6 = i6.containers) != null ? n6 : [], o11] };
  });
}
function Be(t14, e5) {
  return u(e5.type, Me, t14, e5);
}
var He = "div";
var Ge = S2.RenderStrategy | S2.Static;
function Ne(t14, e5) {
  var X5;
  let o11 = I(), { id: i6 = `headlessui-dialog-${o11}`, open: n6, onClose: l11, initialFocus: s13, __demoMode: g4 = false, ...T6 } = t14, [m10, h7] = (0, import_react28.useState)(0), a11 = C();
  n6 === void 0 && a11 !== null && (n6 = (a11 & d5.Open) === d5.Open);
  let D6 = (0, import_react28.useRef)(null), Q4 = y2(D6, e5), f9 = n3(D6), N5 = t14.hasOwnProperty("open") || a11 !== null, U3 = t14.hasOwnProperty("onClose");
  if (!N5 && !U3)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N5)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U3)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n6}`);
  if (typeof l11 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l11}`);
  let p8 = n6 ? 0 : 1, [S7, Z4] = (0, import_react28.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react28.createRef)() }), P4 = o4(() => l11(false)), W2 = o4((r8) => Z4({ type: 0, id: r8 })), L2 = l2() ? g4 ? false : p8 === 0 : false, F5 = m10 > 1, Y3 = (0, import_react28.useContext)(I4) !== null, [ee2, te] = ae(), { resolveContainers: M5, mainTreeNodeRef: k, MainTreeNode: oe3 } = p7({ portals: ee2, defaultContainers: [(X5 = S7.panelRef.current) != null ? X5 : D6.current] }), re3 = F5 ? "parent" : "leaf", $3 = a11 !== null ? (a11 & d5.Closing) === d5.Closing : false, ne = (() => Y3 || $3 ? false : L2)(), le = (0, import_react28.useCallback)(() => {
    var r8, c14;
    return (c14 = Array.from((r8 = f9 == null ? void 0 : f9.querySelectorAll("body > *")) != null ? r8 : []).find((d12) => d12.id === "headlessui-portal-root" ? false : d12.contains(k.current) && d12 instanceof HTMLElement)) != null ? c14 : null;
  }, [k]);
  h6(le, ne);
  let ae2 = (() => F5 ? true : L2)(), ie3 = (0, import_react28.useCallback)(() => {
    var r8, c14;
    return (c14 = Array.from((r8 = f9 == null ? void 0 : f9.querySelectorAll("[data-headlessui-portal]")) != null ? r8 : []).find((d12) => d12.contains(k.current) && d12 instanceof HTMLElement)) != null ? c14 : null;
  }, [k]);
  h6(ie3, ae2);
  let se2 = (() => !(!L2 || F5))();
  H2(M5, P4, se2);
  let pe2 = (() => !(F5 || p8 !== 0))();
  E3(f9 == null ? void 0 : f9.defaultView, "keydown", (r8) => {
    pe2 && (r8.defaultPrevented || r8.key === o8.Escape && (r8.preventDefault(), r8.stopPropagation(), P4()));
  });
  let de3 = (() => !($3 || p8 !== 0 || Y3))();
  we(f9, de3, M5), (0, import_react28.useEffect)(() => {
    if (p8 !== 0 || !D6.current)
      return;
    let r8 = new ResizeObserver((c14) => {
      for (let d12 of c14) {
        let x6 = d12.target.getBoundingClientRect();
        x6.x === 0 && x6.y === 0 && x6.width === 0 && x6.height === 0 && P4();
      }
    });
    return r8.observe(D6.current), () => r8.disconnect();
  }, [p8, D6, P4]);
  let [ue2, fe3] = M2(), ge3 = (0, import_react28.useMemo)(() => [{ dialogState: p8, close: P4, setTitleId: W2 }, S7], [p8, S7, P4, W2]), J3 = (0, import_react28.useMemo)(() => ({ open: p8 === 0 }), [p8]), Te2 = { ref: Q4, id: i6, role: "dialog", "aria-modal": p8 === 0 ? true : void 0, "aria-labelledby": S7.titleId, "aria-describedby": ue2 };
  return import_react28.default.createElement(M3, { type: "Dialog", enabled: p8 === 0, element: D6, onUpdate: o4((r8, c14) => {
    c14 === "Dialog" && u(r8, { [s10.Add]: () => h7((d12) => d12 + 1), [s10.Remove]: () => h7((d12) => d12 - 1) });
  }) }, import_react28.default.createElement(P2, { force: true }, import_react28.default.createElement(pe, null, import_react28.default.createElement(I4.Provider, { value: ge3 }, import_react28.default.createElement(pe.Group, { target: D6 }, import_react28.default.createElement(P2, { force: false }, import_react28.default.createElement(fe3, { slot: J3, name: "Dialog.Description" }, import_react28.default.createElement(ge, { initialFocus: s13, containers: M5, features: L2 ? u(re3, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react28.default.createElement(te, null, X({ ourProps: Te2, theirProps: T6, slot: J3, defaultTag: He, features: Ge, visible: p8 === 0, name: "Dialog" }))))))))), import_react28.default.createElement(oe3, null));
}
var Ue = "div";
function We(t14, e5) {
  let o11 = I(), { id: i6 = `headlessui-dialog-overlay-${o11}`, ...n6 } = t14, [{ dialogState: l11, close: s13 }] = b3("Dialog.Overlay"), g4 = y2(e5), T6 = o4((a11) => {
    if (a11.target === a11.currentTarget) {
      if (r3(a11.currentTarget))
        return a11.preventDefault();
      a11.preventDefault(), a11.stopPropagation(), s13();
    }
  }), m10 = (0, import_react28.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return X({ ourProps: { ref: g4, id: i6, "aria-hidden": true, onClick: T6 }, theirProps: n6, slot: m10, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e(t14, e5) {
  let o11 = I(), { id: i6 = `headlessui-dialog-backdrop-${o11}`, ...n6 } = t14, [{ dialogState: l11 }, s13] = b3("Dialog.Backdrop"), g4 = y2(e5);
  (0, import_react28.useEffect)(() => {
    if (s13.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s13.panelRef]);
  let T6 = (0, import_react28.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return import_react28.default.createElement(P2, { force: true }, import_react28.default.createElement(pe, null, X({ ourProps: { ref: g4, id: i6, "aria-hidden": true }, theirProps: n6, slot: T6, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t14, e5) {
  let o11 = I(), { id: i6 = `headlessui-dialog-panel-${o11}`, ...n6 } = t14, [{ dialogState: l11 }, s13] = b3("Dialog.Panel"), g4 = y2(e5, s13.panelRef), T6 = (0, import_react28.useMemo)(() => ({ open: l11 === 0 }), [l11]), m10 = o4((a11) => {
    a11.stopPropagation();
  });
  return X({ ourProps: { ref: g4, id: i6, onClick: m10 }, theirProps: n6, slot: T6, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t14, e5) {
  let o11 = I(), { id: i6 = `headlessui-dialog-title-${o11}`, ...n6 } = t14, [{ dialogState: l11, setTitleId: s13 }] = b3("Dialog.Title"), g4 = y2(e5);
  (0, import_react28.useEffect)(() => (s13(i6), () => s13(null)), [i6, s13]);
  let T6 = (0, import_react28.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return X({ ourProps: { ref: g4, id: i6 }, theirProps: n6, slot: T6, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D2(Ne);
var qe = D2($e);
var ze = D2(Xe);
var Qe = D2(We);
var Ze = D2(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b2 });

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react29 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a10 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o10(e5) {
  var r8, i6;
  let n6 = (r8 = e5.innerText) != null ? r8 : "", t14 = e5.cloneNode(true);
  if (!(t14 instanceof HTMLElement))
    return n6;
  let u9 = false;
  for (let f9 of t14.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f9.remove(), u9 = true;
  let l11 = u9 ? (i6 = t14.innerText) != null ? i6 : "" : n6;
  return a10.test(l11) && (l11 = l11.replace(a10, "")), l11;
}
function g3(e5) {
  let n6 = e5.getAttribute("aria-label");
  if (typeof n6 == "string")
    return n6.trim();
  let t14 = e5.getAttribute("aria-labelledby");
  if (t14) {
    let u9 = t14.split(" ").map((l11) => {
      let r8 = document.getElementById(l11);
      if (r8) {
        let i6 = r8.getAttribute("aria-label");
        return typeof i6 == "string" ? i6.trim() : o10(r8).trim();
      }
      return null;
    }).filter(Boolean);
    if (u9.length > 0)
      return u9.join(", ");
  }
  return o10(e5).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function b4(c14) {
  let t14 = (0, import_react29.useRef)(""), r8 = (0, import_react29.useRef)("");
  return o4(() => {
    let e5 = c14.current;
    if (!e5)
      return "";
    let u9 = e5.innerText;
    if (t14.current === u9)
      return r8.current;
    let n6 = g3(e5).trim().toLowerCase();
    return t14.current = u9, r8.current = n6, n6;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react30 = __toESM(require_react(), 1);
var me2 = ((r8) => (r8[r8.Open = 0] = "Open", r8[r8.Closed = 1] = "Closed", r8))(me2 || {});
var de = ((r8) => (r8[r8.Pointer = 0] = "Pointer", r8[r8.Other = 1] = "Other", r8))(de || {});
var fe = ((a11) => (a11[a11.OpenMenu = 0] = "OpenMenu", a11[a11.CloseMenu = 1] = "CloseMenu", a11[a11.GoToItem = 2] = "GoToItem", a11[a11.Search = 3] = "Search", a11[a11.ClearSearch = 4] = "ClearSearch", a11[a11.RegisterItem = 5] = "RegisterItem", a11[a11.UnregisterItem = 6] = "UnregisterItem", a11))(fe || {});
function w4(e5, u9 = (r8) => r8) {
  let r8 = e5.activeItemIndex !== null ? e5.items[e5.activeItemIndex] : null, i6 = I2(u9(e5.items.slice()), (t14) => t14.dataRef.current.domRef.current), s13 = r8 ? i6.indexOf(r8) : null;
  return s13 === -1 && (s13 = null), { items: i6, activeItemIndex: s13 };
}
var Te = { [1](e5) {
  return e5.menuState === 1 ? e5 : { ...e5, activeItemIndex: null, menuState: 1 };
}, [0](e5) {
  return e5.menuState === 0 ? e5 : { ...e5, __demoMode: false, menuState: 0 };
}, [2]: (e5, u9) => {
  var s13;
  let r8 = w4(e5), i6 = x(u9, { resolveItems: () => r8.items, resolveActiveIndex: () => r8.activeItemIndex, resolveId: (t14) => t14.id, resolveDisabled: (t14) => t14.dataRef.current.disabled });
  return { ...e5, ...r8, searchQuery: "", activeItemIndex: i6, activationTrigger: (s13 = u9.trigger) != null ? s13 : 1 };
}, [3]: (e5, u9) => {
  let i6 = e5.searchQuery !== "" ? 0 : 1, s13 = e5.searchQuery + u9.value.toLowerCase(), o11 = (e5.activeItemIndex !== null ? e5.items.slice(e5.activeItemIndex + i6).concat(e5.items.slice(0, e5.activeItemIndex + i6)) : e5.items).find((l11) => {
    var m10;
    return ((m10 = l11.dataRef.current.textValue) == null ? void 0 : m10.startsWith(s13)) && !l11.dataRef.current.disabled;
  }), a11 = o11 ? e5.items.indexOf(o11) : -1;
  return a11 === -1 || a11 === e5.activeItemIndex ? { ...e5, searchQuery: s13 } : { ...e5, searchQuery: s13, activeItemIndex: a11, activationTrigger: 1 };
}, [4](e5) {
  return e5.searchQuery === "" ? e5 : { ...e5, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e5, u9) => {
  let r8 = w4(e5, (i6) => [...i6, { id: u9.id, dataRef: u9.dataRef }]);
  return { ...e5, ...r8 };
}, [6]: (e5, u9) => {
  let r8 = w4(e5, (i6) => {
    let s13 = i6.findIndex((t14) => t14.id === u9.id);
    return s13 !== -1 && i6.splice(s13, 1), i6;
  });
  return { ...e5, ...r8, activationTrigger: 1 };
} };
var U2 = (0, import_react30.createContext)(null);
U2.displayName = "MenuContext";
function O2(e5) {
  let u9 = (0, import_react30.useContext)(U2);
  if (u9 === null) {
    let r8 = new Error(`<${e5} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r8, O2), r8;
  }
  return u9;
}
function ye2(e5, u9) {
  return u(u9.type, Te, e5, u9);
}
var Ie2 = import_react30.Fragment;
function Me2(e5, u9) {
  let { __demoMode: r8 = false, ...i6 } = e5, s13 = (0, import_react30.useReducer)(ye2, { __demoMode: r8, menuState: r8 ? 0 : 1, buttonRef: (0, import_react30.createRef)(), itemsRef: (0, import_react30.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t14, itemsRef: o11, buttonRef: a11 }, l11] = s13, m10 = y2(u9);
  H2([a11, o11], (g4, R3) => {
    var p8;
    l11({ type: 1 }), h(R3, T.Loose) || (g4.preventDefault(), (p8 = a11.current) == null || p8.focus());
  }, t14 === 0);
  let I6 = o4(() => {
    l11({ type: 1 });
  }), A = (0, import_react30.useMemo)(() => ({ open: t14 === 0, close: I6 }), [t14, I6]), f9 = { ref: m10 };
  return import_react30.default.createElement(U2.Provider, { value: s13 }, import_react30.default.createElement(c6, { value: u(t14, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: f9, theirProps: i6, slot: A, defaultTag: Ie2, name: "Menu" })));
}
var ge2 = "button";
function Re(e5, u9) {
  var R3;
  let r8 = I(), { id: i6 = `headlessui-menu-button-${r8}`, ...s13 } = e5, [t14, o11] = O2("Menu.Button"), a11 = y2(t14.buttonRef, u9), l11 = p(), m10 = o4((p8) => {
    switch (p8.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        p8.preventDefault(), p8.stopPropagation(), o11({ type: 0 }), l11.nextFrame(() => o11({ type: 2, focus: a2.First }));
        break;
      case o8.ArrowUp:
        p8.preventDefault(), p8.stopPropagation(), o11({ type: 0 }), l11.nextFrame(() => o11({ type: 2, focus: a2.Last }));
        break;
    }
  }), I6 = o4((p8) => {
    switch (p8.key) {
      case o8.Space:
        p8.preventDefault();
        break;
    }
  }), A = o4((p8) => {
    if (r3(p8.currentTarget))
      return p8.preventDefault();
    e5.disabled || (t14.menuState === 0 ? (o11({ type: 1 }), l11.nextFrame(() => {
      var M5;
      return (M5 = t14.buttonRef.current) == null ? void 0 : M5.focus({ preventScroll: true });
    })) : (p8.preventDefault(), o11({ type: 0 })));
  }), f9 = (0, import_react30.useMemo)(() => ({ open: t14.menuState === 0 }), [t14]), g4 = { ref: a11, id: i6, type: s5(e5, t14.buttonRef), "aria-haspopup": "menu", "aria-controls": (R3 = t14.itemsRef.current) == null ? void 0 : R3.id, "aria-expanded": e5.disabled ? void 0 : t14.menuState === 0, onKeyDown: m10, onKeyUp: I6, onClick: A };
  return X({ ourProps: g4, theirProps: s13, slot: f9, defaultTag: ge2, name: "Menu.Button" });
}
var Ae = "div";
var be = S2.RenderStrategy | S2.Static;
function Ee(e5, u9) {
  var M5, b5;
  let r8 = I(), { id: i6 = `headlessui-menu-items-${r8}`, ...s13 } = e5, [t14, o11] = O2("Menu.Items"), a11 = y2(t14.itemsRef, u9), l11 = n3(t14.itemsRef), m10 = p(), I6 = C(), A = (() => I6 !== null ? (I6 & d5.Open) === d5.Open : t14.menuState === 0)();
  (0, import_react30.useEffect)(() => {
    let n6 = t14.itemsRef.current;
    n6 && t14.menuState === 0 && n6 !== (l11 == null ? void 0 : l11.activeElement) && n6.focus({ preventScroll: true });
  }, [t14.menuState, t14.itemsRef, l11]), F2({ container: t14.itemsRef.current, enabled: t14.menuState === 0, accept(n6) {
    return n6.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n6) {
    n6.setAttribute("role", "none");
  } });
  let f9 = o4((n6) => {
    var E6, P4;
    switch (m10.dispose(), n6.key) {
      case o8.Space:
        if (t14.searchQuery !== "")
          return n6.preventDefault(), n6.stopPropagation(), o11({ type: 3, value: n6.key });
      case o8.Enter:
        if (n6.preventDefault(), n6.stopPropagation(), o11({ type: 1 }), t14.activeItemIndex !== null) {
          let { dataRef: S7 } = t14.items[t14.activeItemIndex];
          (P4 = (E6 = S7.current) == null ? void 0 : E6.domRef.current) == null || P4.click();
        }
        D(t14.buttonRef.current);
        break;
      case o8.ArrowDown:
        return n6.preventDefault(), n6.stopPropagation(), o11({ type: 2, focus: a2.Next });
      case o8.ArrowUp:
        return n6.preventDefault(), n6.stopPropagation(), o11({ type: 2, focus: a2.Previous });
      case o8.Home:
      case o8.PageUp:
        return n6.preventDefault(), n6.stopPropagation(), o11({ type: 2, focus: a2.First });
      case o8.End:
      case o8.PageDown:
        return n6.preventDefault(), n6.stopPropagation(), o11({ type: 2, focus: a2.Last });
      case o8.Escape:
        n6.preventDefault(), n6.stopPropagation(), o11({ type: 1 }), o2().nextFrame(() => {
          var S7;
          return (S7 = t14.buttonRef.current) == null ? void 0 : S7.focus({ preventScroll: true });
        });
        break;
      case o8.Tab:
        n6.preventDefault(), n6.stopPropagation(), o11({ type: 1 }), o2().nextFrame(() => {
          _(t14.buttonRef.current, n6.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n6.key.length === 1 && (o11({ type: 3, value: n6.key }), m10.setTimeout(() => o11({ type: 4 }), 350));
        break;
    }
  }), g4 = o4((n6) => {
    switch (n6.key) {
      case o8.Space:
        n6.preventDefault();
        break;
    }
  }), R3 = (0, import_react30.useMemo)(() => ({ open: t14.menuState === 0 }), [t14]), p8 = { "aria-activedescendant": t14.activeItemIndex === null || (M5 = t14.items[t14.activeItemIndex]) == null ? void 0 : M5.id, "aria-labelledby": (b5 = t14.buttonRef.current) == null ? void 0 : b5.id, id: i6, onKeyDown: f9, onKeyUp: g4, role: "menu", tabIndex: 0, ref: a11 };
  return X({ ourProps: p8, theirProps: s13, slot: R3, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react30.Fragment;
function Pe2(e5, u9) {
  let r8 = I(), { id: i6 = `headlessui-menu-item-${r8}`, disabled: s13 = false, ...t14 } = e5, [o11, a11] = O2("Menu.Item"), l11 = o11.activeItemIndex !== null ? o11.items[o11.activeItemIndex].id === i6 : false, m10 = (0, import_react30.useRef)(null), I6 = y2(u9, m10);
  l(() => {
    if (o11.__demoMode || o11.menuState !== 0 || !l11 || o11.activationTrigger === 0)
      return;
    let T6 = o2();
    return T6.requestAnimationFrame(() => {
      var v3, B;
      (B = (v3 = m10.current) == null ? void 0 : v3.scrollIntoView) == null || B.call(v3, { block: "nearest" });
    }), T6.dispose;
  }, [o11.__demoMode, m10, l11, o11.menuState, o11.activationTrigger, o11.activeItemIndex]);
  let A = b4(m10), f9 = (0, import_react30.useRef)({ disabled: s13, domRef: m10, get textValue() {
    return A();
  } });
  l(() => {
    f9.current.disabled = s13;
  }, [f9, s13]), l(() => (a11({ type: 5, id: i6, dataRef: f9 }), () => a11({ type: 6, id: i6 })), [f9, i6]);
  let g4 = o4(() => {
    a11({ type: 1 });
  }), R3 = o4((T6) => {
    if (s13)
      return T6.preventDefault();
    a11({ type: 1 }), D(o11.buttonRef.current);
  }), p8 = o4(() => {
    if (s13)
      return a11({ type: 2, focus: a2.Nothing });
    a11({ type: 2, focus: a2.Specific, id: i6 });
  }), M5 = u3(), b5 = o4((T6) => M5.update(T6)), n6 = o4((T6) => {
    M5.wasMoved(T6) && (s13 || l11 || a11({ type: 2, focus: a2.Specific, id: i6, trigger: 0 }));
  }), E6 = o4((T6) => {
    M5.wasMoved(T6) && (s13 || l11 && a11({ type: 2, focus: a2.Nothing }));
  }), P4 = (0, import_react30.useMemo)(() => ({ active: l11, disabled: s13, close: g4 }), [l11, s13, g4]);
  return X({ ourProps: { id: i6, ref: I6, role: "menuitem", tabIndex: s13 === true ? void 0 : -1, "aria-disabled": s13 === true ? true : void 0, disabled: void 0, onClick: R3, onFocus: p8, onPointerEnter: b5, onMouseEnter: b5, onPointerMove: n6, onMouseMove: n6, onPointerLeave: E6, onMouseLeave: E6 }, theirProps: t14, slot: P4, defaultTag: Se, name: "Menu.Item" });
}
var ve = D2(Me2);
var xe = D2(Re);
var he = D2(Ee);
var De2 = D2(Pe2);
var it = Object.assign(ve, { Button: xe, Items: he, Item: De2 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react31 = __toESM(require_react(), 1);
var De3 = ((u9) => (u9[u9.Open = 0] = "Open", u9[u9.Closed = 1] = "Closed", u9))(De3 || {});
var he2 = ((e5) => (e5[e5.TogglePopover = 0] = "TogglePopover", e5[e5.ClosePopover = 1] = "ClosePopover", e5[e5.SetButton = 2] = "SetButton", e5[e5.SetButtonId = 3] = "SetButtonId", e5[e5.SetPanel = 4] = "SetPanel", e5[e5.SetPanelId = 5] = "SetPanelId", e5))(he2 || {});
var He2 = { [0]: (t14) => {
  let o11 = { ...t14, popoverState: u(t14.popoverState, { [0]: 1, [1]: 0 }) };
  return o11.popoverState === 0 && (o11.__demoMode = false), o11;
}, [1](t14) {
  return t14.popoverState === 1 ? t14 : { ...t14, popoverState: 1 };
}, [2](t14, o11) {
  return t14.button === o11.button ? t14 : { ...t14, button: o11.button };
}, [3](t14, o11) {
  return t14.buttonId === o11.buttonId ? t14 : { ...t14, buttonId: o11.buttonId };
}, [4](t14, o11) {
  return t14.panel === o11.panel ? t14 : { ...t14, panel: o11.panel };
}, [5](t14, o11) {
  return t14.panelId === o11.panelId ? t14 : { ...t14, panelId: o11.panelId };
} };
var ue = (0, import_react31.createContext)(null);
ue.displayName = "PopoverContext";
function oe(t14) {
  let o11 = (0, import_react31.useContext)(ue);
  if (o11 === null) {
    let u9 = new Error(`<${t14} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u9, oe), u9;
  }
  return o11;
}
var ie = (0, import_react31.createContext)(null);
ie.displayName = "PopoverAPIContext";
function fe2(t14) {
  let o11 = (0, import_react31.useContext)(ie);
  if (o11 === null) {
    let u9 = new Error(`<${t14} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u9, fe2), u9;
  }
  return o11;
}
var Pe3 = (0, import_react31.createContext)(null);
Pe3.displayName = "PopoverGroupContext";
function Ee2() {
  return (0, import_react31.useContext)(Pe3);
}
var re = (0, import_react31.createContext)(null);
re.displayName = "PopoverPanelContext";
function _e2() {
  return (0, import_react31.useContext)(re);
}
function Ge2(t14, o11) {
  return u(o11.type, He2, t14, o11);
}
var ke = "div";
function we2(t14, o11) {
  var I6;
  let { __demoMode: u9 = false, ...A } = t14, O3 = (0, import_react31.useRef)(null), n6 = y2(o11, T2((l11) => {
    O3.current = l11;
  })), e5 = (0, import_react31.useRef)([]), T6 = (0, import_react31.useReducer)(Ge2, { __demoMode: u9, popoverState: u9 ? 0 : 1, buttons: e5, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react31.createRef)(), afterPanelSentinel: (0, import_react31.createRef)() }), [{ popoverState: P4, button: p8, buttonId: F5, panel: a11, panelId: m10, beforePanelSentinel: y8, afterPanelSentinel: s13 }, i6] = T6, d12 = n3((I6 = O3.current) != null ? I6 : p8), g4 = (0, import_react31.useMemo)(() => {
    if (!p8 || !a11)
      return false;
    for (let K3 of document.querySelectorAll("body > *"))
      if (Number(K3 == null ? void 0 : K3.contains(p8)) ^ Number(K3 == null ? void 0 : K3.contains(a11)))
        return true;
    let l11 = f(), R3 = l11.indexOf(p8), q2 = (R3 + l11.length - 1) % l11.length, W2 = (R3 + 1) % l11.length, z4 = l11[q2], ge3 = l11[W2];
    return !a11.contains(z4) && !a11.contains(ge3);
  }, [p8, a11]), L2 = s2(F5), h7 = s2(m10), _3 = (0, import_react31.useMemo)(() => ({ buttonId: L2, panelId: h7, close: () => i6({ type: 1 }) }), [L2, h7, i6]), B = Ee2(), D6 = B == null ? void 0 : B.registerPopover, f9 = o4(() => {
    var l11;
    return (l11 = B == null ? void 0 : B.isFocusWithinPopoverGroup()) != null ? l11 : (d12 == null ? void 0 : d12.activeElement) && ((p8 == null ? void 0 : p8.contains(d12.activeElement)) || (a11 == null ? void 0 : a11.contains(d12.activeElement)));
  });
  (0, import_react31.useEffect)(() => D6 == null ? void 0 : D6(_3), [D6, _3]);
  let [E6, b5] = ae(), c14 = p7({ portals: E6, defaultContainers: [p8, a11] });
  E3(d12 == null ? void 0 : d12.defaultView, "focus", (l11) => {
    var R3, q2, W2, z4;
    l11.target !== window && l11.target instanceof HTMLElement && P4 === 0 && (f9() || p8 && a11 && (c14.contains(l11.target) || (q2 = (R3 = y8.current) == null ? void 0 : R3.contains) != null && q2.call(R3, l11.target) || (z4 = (W2 = s13.current) == null ? void 0 : W2.contains) != null && z4.call(W2, l11.target) || i6({ type: 1 })));
  }, true), H2(c14.resolveContainers, (l11, R3) => {
    i6({ type: 1 }), h(R3, T.Loose) || (l11.preventDefault(), p8 == null || p8.focus());
  }, P4 === 0);
  let M5 = o4((l11) => {
    i6({ type: 1 });
    let R3 = (() => l11 ? l11 instanceof HTMLElement ? l11 : "current" in l11 && l11.current instanceof HTMLElement ? l11.current : p8 : p8)();
    R3 == null || R3.focus();
  }), r8 = (0, import_react31.useMemo)(() => ({ close: M5, isPortalled: g4 }), [M5, g4]), v3 = (0, import_react31.useMemo)(() => ({ open: P4 === 0, close: M5 }), [P4, M5]), x6 = { ref: n6 };
  return import_react31.default.createElement(re.Provider, { value: null }, import_react31.default.createElement(ue.Provider, { value: T6 }, import_react31.default.createElement(ie.Provider, { value: r8 }, import_react31.default.createElement(c6, { value: u(P4, { [0]: d5.Open, [1]: d5.Closed }) }, import_react31.default.createElement(b5, null, X({ ourProps: x6, theirProps: A, slot: v3, defaultTag: ke, name: "Popover" }), import_react31.default.createElement(c14.MainTreeNode, null))))));
}
var Ne2 = "button";
function Ue2(t14, o11) {
  let u9 = I(), { id: A = `headlessui-popover-button-${u9}`, ...O3 } = t14, [n6, e5] = oe("Popover.Button"), { isPortalled: T6 } = fe2("Popover.Button"), P4 = (0, import_react31.useRef)(null), p8 = `headlessui-focus-sentinel-${I()}`, F5 = Ee2(), a11 = F5 == null ? void 0 : F5.closeOthers, y8 = _e2() !== null;
  (0, import_react31.useEffect)(() => {
    if (!y8)
      return e5({ type: 3, buttonId: A }), () => {
        e5({ type: 3, buttonId: null });
      };
  }, [y8, A, e5]);
  let [s13] = (0, import_react31.useState)(() => Symbol()), i6 = y2(P4, o11, y8 ? null : (r8) => {
    if (r8)
      n6.buttons.current.push(s13);
    else {
      let v3 = n6.buttons.current.indexOf(s13);
      v3 !== -1 && n6.buttons.current.splice(v3, 1);
    }
    n6.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r8 && e5({ type: 2, button: r8 });
  }), d12 = y2(P4, o11), g4 = n3(P4), L2 = o4((r8) => {
    var v3, x6, I6;
    if (y8) {
      if (n6.popoverState === 1)
        return;
      switch (r8.key) {
        case o8.Space:
        case o8.Enter:
          r8.preventDefault(), (x6 = (v3 = r8.target).click) == null || x6.call(v3), e5({ type: 1 }), (I6 = n6.button) == null || I6.focus();
          break;
      }
    } else
      switch (r8.key) {
        case o8.Space:
        case o8.Enter:
          r8.preventDefault(), r8.stopPropagation(), n6.popoverState === 1 && (a11 == null || a11(n6.buttonId)), e5({ type: 0 });
          break;
        case o8.Escape:
          if (n6.popoverState !== 0)
            return a11 == null ? void 0 : a11(n6.buttonId);
          if (!P4.current || g4 != null && g4.activeElement && !P4.current.contains(g4.activeElement))
            return;
          r8.preventDefault(), r8.stopPropagation(), e5({ type: 1 });
          break;
      }
  }), h7 = o4((r8) => {
    y8 || r8.key === o8.Space && r8.preventDefault();
  }), _3 = o4((r8) => {
    var v3, x6;
    r3(r8.currentTarget) || t14.disabled || (y8 ? (e5({ type: 1 }), (v3 = n6.button) == null || v3.focus()) : (r8.preventDefault(), r8.stopPropagation(), n6.popoverState === 1 && (a11 == null || a11(n6.buttonId)), e5({ type: 0 }), (x6 = n6.button) == null || x6.focus()));
  }), B = o4((r8) => {
    r8.preventDefault(), r8.stopPropagation();
  }), D6 = n6.popoverState === 0, f9 = (0, import_react31.useMemo)(() => ({ open: D6 }), [D6]), E6 = s5(t14, P4), b5 = y8 ? { ref: d12, type: E6, onKeyDown: L2, onClick: _3 } : { ref: i6, id: n6.buttonId, type: E6, "aria-expanded": t14.disabled ? void 0 : n6.popoverState === 0, "aria-controls": n6.panel ? n6.panelId : void 0, onKeyDown: L2, onKeyUp: h7, onClick: _3, onMouseDown: B }, c14 = n2(), M5 = o4(() => {
    let r8 = n6.panel;
    if (!r8)
      return;
    function v3() {
      u(c14.current, { [s8.Forwards]: () => O(r8, M.First), [s8.Backwards]: () => O(r8, M.Last) }) === N.Error && O(f().filter((I6) => I6.dataset.headlessuiFocusGuard !== "true"), u(c14.current, { [s8.Forwards]: M.Next, [s8.Backwards]: M.Previous }), { relativeTo: n6.button });
    }
    v3();
  });
  return import_react31.default.createElement(import_react31.default.Fragment, null, X({ ourProps: b5, theirProps: O3, slot: f9, defaultTag: Ne2, name: "Popover.Button" }), D6 && !y8 && T6 && import_react31.default.createElement(c5, { id: p8, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: M5 }));
}
var We2 = "div";
var Ke2 = S2.RenderStrategy | S2.Static;
function je2(t14, o11) {
  let u9 = I(), { id: A = `headlessui-popover-overlay-${u9}`, ...O3 } = t14, [{ popoverState: n6 }, e5] = oe("Popover.Overlay"), T6 = y2(o11), P4 = C(), p8 = (() => P4 !== null ? (P4 & d5.Open) === d5.Open : n6 === 0)(), F5 = o4((y8) => {
    if (r3(y8.currentTarget))
      return y8.preventDefault();
    e5({ type: 1 });
  }), a11 = (0, import_react31.useMemo)(() => ({ open: n6 === 0 }), [n6]);
  return X({ ourProps: { ref: T6, id: A, "aria-hidden": true, onClick: F5 }, theirProps: O3, slot: a11, defaultTag: We2, features: Ke2, visible: p8, name: "Popover.Overlay" });
}
var Ve2 = "div";
var $e2 = S2.RenderStrategy | S2.Static;
function Je2(t14, o11) {
  let u9 = I(), { id: A = `headlessui-popover-panel-${u9}`, focus: O3 = false, ...n6 } = t14, [e5, T6] = oe("Popover.Panel"), { close: P4, isPortalled: p8 } = fe2("Popover.Panel"), F5 = `headlessui-focus-sentinel-before-${I()}`, a11 = `headlessui-focus-sentinel-after-${I()}`, m10 = (0, import_react31.useRef)(null), y8 = y2(m10, o11, (f9) => {
    T6({ type: 4, panel: f9 });
  }), s13 = n3(m10);
  l(() => (T6({ type: 5, panelId: A }), () => {
    T6({ type: 5, panelId: null });
  }), [A, T6]);
  let i6 = C(), d12 = (() => i6 !== null ? (i6 & d5.Open) === d5.Open : e5.popoverState === 0)(), g4 = o4((f9) => {
    var E6;
    switch (f9.key) {
      case o8.Escape:
        if (e5.popoverState !== 0 || !m10.current || s13 != null && s13.activeElement && !m10.current.contains(s13.activeElement))
          return;
        f9.preventDefault(), f9.stopPropagation(), T6({ type: 1 }), (E6 = e5.button) == null || E6.focus();
        break;
    }
  });
  (0, import_react31.useEffect)(() => {
    var f9;
    t14.static || e5.popoverState === 1 && ((f9 = t14.unmount) == null || f9) && T6({ type: 4, panel: null });
  }, [e5.popoverState, t14.unmount, t14.static, T6]), (0, import_react31.useEffect)(() => {
    if (e5.__demoMode || !O3 || e5.popoverState !== 0 || !m10.current)
      return;
    let f9 = s13 == null ? void 0 : s13.activeElement;
    m10.current.contains(f9) || O(m10.current, M.First);
  }, [e5.__demoMode, O3, m10, e5.popoverState]);
  let L2 = (0, import_react31.useMemo)(() => ({ open: e5.popoverState === 0, close: P4 }), [e5, P4]), h7 = { ref: y8, id: A, onKeyDown: g4, onBlur: O3 && e5.popoverState === 0 ? (f9) => {
    var b5, c14, M5, r8, v3;
    let E6 = f9.relatedTarget;
    E6 && m10.current && ((b5 = m10.current) != null && b5.contains(E6) || (T6({ type: 1 }), ((M5 = (c14 = e5.beforePanelSentinel.current) == null ? void 0 : c14.contains) != null && M5.call(c14, E6) || (v3 = (r8 = e5.afterPanelSentinel.current) == null ? void 0 : r8.contains) != null && v3.call(r8, E6)) && E6.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, _3 = n2(), B = o4(() => {
    let f9 = m10.current;
    if (!f9)
      return;
    function E6() {
      u(_3.current, { [s8.Forwards]: () => {
        var c14;
        O(f9, M.First) === N.Error && ((c14 = e5.afterPanelSentinel.current) == null || c14.focus());
      }, [s8.Backwards]: () => {
        var b5;
        (b5 = e5.button) == null || b5.focus({ preventScroll: true });
      } });
    }
    E6();
  }), D6 = o4(() => {
    let f9 = m10.current;
    if (!f9)
      return;
    function E6() {
      u(_3.current, { [s8.Forwards]: () => {
        var x6;
        if (!e5.button)
          return;
        let b5 = f(), c14 = b5.indexOf(e5.button), M5 = b5.slice(0, c14 + 1), v3 = [...b5.slice(c14 + 1), ...M5];
        for (let I6 of v3.slice())
          if (I6.dataset.headlessuiFocusGuard === "true" || (x6 = e5.panel) != null && x6.contains(I6)) {
            let l11 = v3.indexOf(I6);
            l11 !== -1 && v3.splice(l11, 1);
          }
        O(v3, M.First, { sorted: false });
      }, [s8.Backwards]: () => {
        var c14;
        O(f9, M.Previous) === N.Error && ((c14 = e5.button) == null || c14.focus());
      } });
    }
    E6();
  });
  return import_react31.default.createElement(re.Provider, { value: A }, d12 && p8 && import_react31.default.createElement(c5, { id: F5, ref: e5.beforePanelSentinel, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: B }), X({ ourProps: h7, theirProps: n6, slot: L2, defaultTag: Ve2, features: $e2, visible: d12, name: "Popover.Panel" }), d12 && p8 && import_react31.default.createElement(c5, { id: a11, ref: e5.afterPanelSentinel, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: D6 }));
}
var Xe2 = "div";
function Ye2(t14, o11) {
  let u9 = (0, import_react31.useRef)(null), A = y2(u9, o11), [O3, n6] = (0, import_react31.useState)([]), e5 = o4((s13) => {
    n6((i6) => {
      let d12 = i6.indexOf(s13);
      if (d12 !== -1) {
        let g4 = i6.slice();
        return g4.splice(d12, 1), g4;
      }
      return i6;
    });
  }), T6 = o4((s13) => (n6((i6) => [...i6, s13]), () => e5(s13))), P4 = o4(() => {
    var d12;
    let s13 = e(u9);
    if (!s13)
      return false;
    let i6 = s13.activeElement;
    return (d12 = u9.current) != null && d12.contains(i6) ? true : O3.some((g4) => {
      var L2, h7;
      return ((L2 = s13.getElementById(g4.buttonId.current)) == null ? void 0 : L2.contains(i6)) || ((h7 = s13.getElementById(g4.panelId.current)) == null ? void 0 : h7.contains(i6));
    });
  }), p8 = o4((s13) => {
    for (let i6 of O3)
      i6.buttonId.current !== s13 && i6.close();
  }), F5 = (0, import_react31.useMemo)(() => ({ registerPopover: T6, unregisterPopover: e5, isFocusWithinPopoverGroup: P4, closeOthers: p8 }), [T6, e5, P4, p8]), a11 = (0, import_react31.useMemo)(() => ({}), []), m10 = t14, y8 = { ref: A };
  return import_react31.default.createElement(Pe3.Provider, { value: F5 }, X({ ourProps: y8, theirProps: m10, slot: a11, defaultTag: Xe2, name: "Popover.Group" }));
}
var qe2 = D2(we2);
var ze2 = D2(Ue2);
var Qe2 = D2(je2);
var Ze2 = D2(Je2);
var et = D2(Ye2);
var kt = Object.assign(qe2, { Button: ze2, Overlay: Qe2, Panel: Ze2, Group: et });

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react32 = __toESM(require_react(), 1);
function c12(a11 = 0) {
  let [l11, r8] = (0, import_react32.useState)(a11), t14 = f4(), o11 = (0, import_react32.useCallback)((e5) => {
    t14.current && r8((u9) => u9 | e5);
  }, [l11, t14]), m10 = (0, import_react32.useCallback)((e5) => Boolean(l11 & e5), [l11]), s13 = (0, import_react32.useCallback)((e5) => {
    t14.current && r8((u9) => u9 & ~e5);
  }, [r8, t14]), g4 = (0, import_react32.useCallback)((e5) => {
    t14.current && r8((u9) => u9 ^ e5);
  }, [r8]);
  return { flags: l11, addFlag: o11, hasFlag: m10, removeFlag: s13, toggleFlag: g4 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react33 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l10(r8) {
  let e5 = { called: false };
  return (...t14) => {
    if (!e5.called)
      return e5.called = true, r8(...t14);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d11(t14, ...e5) {
  t14 && e5.length > 0 && t14.classList.add(...e5);
}
function v2(t14, ...e5) {
  t14 && e5.length > 0 && t14.classList.remove(...e5);
}
function F4(t14, e5) {
  let n6 = o2();
  if (!t14)
    return n6.dispose;
  let { transitionDuration: m10, transitionDelay: o11 } = getComputedStyle(t14), [u9, p8] = [m10, o11].map((a11) => {
    let [r8 = 0] = a11.split(",").filter(Boolean).map((i6) => i6.includes("ms") ? parseFloat(i6) : parseFloat(i6) * 1e3).sort((i6, f9) => f9 - i6);
    return r8;
  }), l11 = u9 + p8;
  if (l11 !== 0) {
    n6.group((r8) => {
      r8.setTimeout(() => {
        e5(), r8.dispose();
      }, l11), r8.addEventListener(t14, "transitionrun", (i6) => {
        i6.target === i6.currentTarget && r8.dispose();
      });
    });
    let a11 = n6.addEventListener(t14, "transitionend", (r8) => {
      r8.target === r8.currentTarget && (e5(), a11());
    });
  } else
    e5();
  return n6.add(() => e5()), n6.dispose;
}
function y6(t14, e5, n6, m10) {
  let o11 = n6 ? "enter" : "leave", u9 = o2(), p8 = m10 !== void 0 ? l10(m10) : () => {
  };
  o11 === "enter" && (t14.removeAttribute("hidden"), t14.style.display = "");
  let l11 = u(o11, { enter: () => e5.enter, leave: () => e5.leave }), a11 = u(o11, { enter: () => e5.enterTo, leave: () => e5.leaveTo }), r8 = u(o11, { enter: () => e5.enterFrom, leave: () => e5.leaveFrom });
  return v2(t14, ...e5.enter, ...e5.enterTo, ...e5.enterFrom, ...e5.leave, ...e5.leaveFrom, ...e5.leaveTo, ...e5.entered), d11(t14, ...l11, ...r8), u9.nextFrame(() => {
    v2(t14, ...r8), d11(t14, ...a11), F4(t14, () => (v2(t14, ...l11), d11(t14, ...e5.entered), p8()));
  }), u9.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D5({ container: i6, direction: t14, classes: o11, onStart: s13, onStop: u9 }) {
  let a11 = f4(), c14 = p(), r8 = s2(t14);
  l(() => {
    let e5 = o2();
    c14.add(e5.dispose);
    let n6 = i6.current;
    if (n6 && r8.current !== "idle" && a11.current)
      return e5.dispose(), s13.current(r8.current), e5.add(y6(n6, o11.current, r8.current === "enter", () => {
        e5.dispose(), u9.current(r8.current);
      })), e5.dispose;
  }, [t14]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x5(t14 = "") {
  return t14.split(" ").filter((n6) => n6.trim().length > 1);
}
var I5 = (0, import_react33.createContext)(null);
I5.displayName = "TransitionContext";
var Ce = ((r8) => (r8.Visible = "visible", r8.Hidden = "hidden", r8))(Ce || {});
function Ee3() {
  let t14 = (0, import_react33.useContext)(I5);
  if (t14 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t14;
}
function be3() {
  let t14 = (0, import_react33.useContext)(_2);
  if (t14 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t14;
}
var _2 = (0, import_react33.createContext)(null);
_2.displayName = "NestingContext";
function M4(t14) {
  return "children" in t14 ? M4(t14.children) : t14.current.filter(({ el: n6 }) => n6.current !== null).filter(({ state: n6 }) => n6 === "visible").length > 0;
}
function re2(t14, n6) {
  let r8 = s2(t14), o11 = (0, import_react33.useRef)([]), N5 = f4(), H6 = p(), p8 = o4((s13, e5 = j.Hidden) => {
    let a11 = o11.current.findIndex(({ el: i6 }) => i6 === s13);
    a11 !== -1 && (u(e5, { [j.Unmount]() {
      o11.current.splice(a11, 1);
    }, [j.Hidden]() {
      o11.current[a11].state = "hidden";
    } }), H6.microTask(() => {
      var i6;
      !M4(o11) && N5.current && ((i6 = r8.current) == null || i6.call(r8));
    }));
  }), P4 = o4((s13) => {
    let e5 = o11.current.find(({ el: a11 }) => a11 === s13);
    return e5 ? e5.state !== "visible" && (e5.state = "visible") : o11.current.push({ el: s13, state: "visible" }), () => p8(s13, j.Unmount);
  }), h7 = (0, import_react33.useRef)([]), v3 = (0, import_react33.useRef)(Promise.resolve()), T6 = (0, import_react33.useRef)({ enter: [], leave: [], idle: [] }), g4 = o4((s13, e5, a11) => {
    h7.current.splice(0), n6 && (n6.chains.current[e5] = n6.chains.current[e5].filter(([i6]) => i6 !== s13)), n6 == null || n6.chains.current[e5].push([s13, new Promise((i6) => {
      h7.current.push(i6);
    })]), n6 == null || n6.chains.current[e5].push([s13, new Promise((i6) => {
      Promise.all(T6.current[e5].map(([l11, R3]) => R3)).then(() => i6());
    })]), e5 === "enter" ? v3.current = v3.current.then(() => n6 == null ? void 0 : n6.wait.current).then(() => a11(e5)) : a11(e5);
  }), f9 = o4((s13, e5, a11) => {
    Promise.all(T6.current[e5].splice(0).map(([i6, l11]) => l11)).then(() => {
      var i6;
      (i6 = h7.current.shift()) == null || i6();
    }).then(() => a11(e5));
  });
  return (0, import_react33.useMemo)(() => ({ children: o11, register: P4, unregister: p8, onStart: g4, onStop: f9, wait: v3, chains: T6 }), [P4, p8, o11, g4, f9, T6, v3]);
}
function Se2() {
}
var xe2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie2(t14) {
  var r8;
  let n6 = {};
  for (let o11 of xe2)
    n6[o11] = (r8 = t14[o11]) != null ? r8 : Se2;
  return n6;
}
function Pe4(t14) {
  let n6 = (0, import_react33.useRef)(ie2(t14));
  return (0, import_react33.useEffect)(() => {
    n6.current = ie2(t14);
  }, [t14]), n6;
}
var Re2 = "div";
var oe2 = S2.RenderStrategy;
function ye3(t14, n6) {
  let { beforeEnter: r8, afterEnter: o11, beforeLeave: N5, afterLeave: H6, enter: p8, enterFrom: P4, enterTo: h7, entered: v3, leave: T6, leaveFrom: g4, leaveTo: f9, ...s13 } = t14, e5 = (0, import_react33.useRef)(null), a11 = y2(e5, n6), i6 = s13.unmount ? j.Unmount : j.Hidden, { show: l11, appear: R3, initial: d12 } = Ee3(), [u9, U3] = (0, import_react33.useState)(l11 ? "visible" : "hidden"), K3 = be3(), { register: L2, unregister: w5 } = K3, j4 = (0, import_react33.useRef)(null);
  (0, import_react33.useEffect)(() => L2(e5), [L2, e5]), (0, import_react33.useEffect)(() => {
    if (i6 === j.Hidden && e5.current) {
      if (l11 && u9 !== "visible") {
        U3("visible");
        return;
      }
      return u(u9, { ["hidden"]: () => w5(e5), ["visible"]: () => L2(e5) });
    }
  }, [u9, e5, L2, w5, l11, i6]);
  let k = s2({ enter: x5(p8), enterFrom: x5(P4), enterTo: x5(h7), entered: x5(v3), leave: x5(T6), leaveFrom: x5(g4), leaveTo: x5(f9) }), O3 = Pe4({ beforeEnter: r8, afterEnter: o11, beforeLeave: N5, afterLeave: H6 }), G2 = l2();
  (0, import_react33.useEffect)(() => {
    if (G2 && u9 === "visible" && e5.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e5, u9, G2]);
  let B = d12 && !R3, ae2 = (() => !G2 || B || j4.current === l11 ? "idle" : l11 ? "enter" : "leave")(), D6 = c12(0), le = o4((C3) => u(C3, { enter: () => {
    D6.addFlag(d5.Opening), O3.current.beforeEnter();
  }, leave: () => {
    D6.addFlag(d5.Closing), O3.current.beforeLeave();
  }, idle: () => {
  } })), ue2 = o4((C3) => u(C3, { enter: () => {
    D6.removeFlag(d5.Opening), O3.current.afterEnter();
  }, leave: () => {
    D6.removeFlag(d5.Closing), O3.current.afterLeave();
  }, idle: () => {
  } })), V = re2(() => {
    U3("hidden"), w5(e5);
  }, K3);
  D5({ container: e5, classes: k, direction: ae2, onStart: s2((C3) => {
    V.onStart(e5, C3, le);
  }), onStop: s2((C3) => {
    V.onStop(e5, C3, ue2), C3 === "leave" && !M4(V) && (U3("hidden"), w5(e5));
  }) }), (0, import_react33.useEffect)(() => {
    B && (i6 === j.Hidden ? j4.current = null : j4.current = l11);
  }, [l11, B, u9]);
  let J3 = s13, Te2 = { ref: a11 };
  return R3 && l11 && d12 && (J3 = { ...J3, className: e2(s13.className, ...k.current.enter, ...k.current.enterFrom) }), import_react33.default.createElement(_2.Provider, { value: V }, import_react33.default.createElement(c6, { value: u(u9, { ["visible"]: d5.Open, ["hidden"]: d5.Closed }) | D6.flags }, X({ ourProps: Te2, theirProps: J3, defaultTag: Re2, features: oe2, visible: u9 === "visible", name: "Transition.Child" })));
}
function Ne3(t14, n6) {
  let { show: r8, appear: o11 = false, unmount: N5, ...H6 } = t14, p8 = (0, import_react33.useRef)(null), P4 = y2(p8, n6);
  l2();
  let h7 = C();
  if (r8 === void 0 && h7 !== null && (r8 = (h7 & d5.Open) === d5.Open), ![true, false].includes(r8))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v3, T6] = (0, import_react33.useState)(r8 ? "visible" : "hidden"), g4 = re2(() => {
    T6("hidden");
  }), [f9, s13] = (0, import_react33.useState)(true), e5 = (0, import_react33.useRef)([r8]);
  l(() => {
    f9 !== false && e5.current[e5.current.length - 1] !== r8 && (e5.current.push(r8), s13(false));
  }, [e5, r8]);
  let a11 = (0, import_react33.useMemo)(() => ({ show: r8, appear: o11, initial: f9 }), [r8, o11, f9]);
  (0, import_react33.useEffect)(() => {
    if (r8)
      T6("visible");
    else if (!M4(g4))
      T6("hidden");
    else {
      let d12 = p8.current;
      if (!d12)
        return;
      let u9 = d12.getBoundingClientRect();
      u9.x === 0 && u9.y === 0 && u9.width === 0 && u9.height === 0 && T6("hidden");
    }
  }, [r8, g4]);
  let i6 = { unmount: N5 }, l11 = o4(() => {
    var d12;
    f9 && s13(false), (d12 = t14.beforeEnter) == null || d12.call(t14);
  }), R3 = o4(() => {
    var d12;
    f9 && s13(false), (d12 = t14.beforeLeave) == null || d12.call(t14);
  });
  return import_react33.default.createElement(_2.Provider, { value: g4 }, import_react33.default.createElement(I5.Provider, { value: a11 }, X({ ourProps: { ...i6, as: import_react33.Fragment, children: import_react33.default.createElement(se, { ref: P4, ...i6, ...H6, beforeEnter: l11, beforeLeave: R3 }) }, theirProps: {}, defaultTag: import_react33.Fragment, features: oe2, visible: v3 === "visible", name: "Transition" })));
}
function He3(t14, n6) {
  let r8 = (0, import_react33.useContext)(I5) !== null, o11 = C() !== null;
  return import_react33.default.createElement(import_react33.default.Fragment, null, !r8 && o11 ? import_react33.default.createElement(z3, { ref: n6, ...t14 }) : import_react33.default.createElement(se, { ref: n6, ...t14 }));
}
var z3 = D2(Ne3);
var se = D2(ye3);
var De4 = D2(He3);
var $e3 = Object.assign(z3, { Child: De4, Root: z3 });

// node_modules/@heroicons/react/20/solid/esm/PhoneIcon.js
var React = __toESM(require_react(), 1);
function PhoneIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React.forwardRef(PhoneIcon);
var PhoneIcon_default = ForwardRef;

// node_modules/@heroicons/react/20/solid/esm/PlayCircleIcon.js
var React2 = __toESM(require_react(), 1);
function PlayCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    fillRule: "evenodd",
    d: "M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z",
    clipRule: "evenodd"
  }));
}
var ForwardRef2 = React2.forwardRef(PlayCircleIcon);
var PlayCircleIcon_default = ForwardRef2;

// app/layout/anon/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon_default },
  { name: "Contact sales", href: "#", icon: PhoneIcon_default }
];
var company = [
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
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react34.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8", "aria-label": "Global", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "-m-1.5 p-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "BioSolver" }, void 0, false, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-16 w-auto", src: base_default, alt: "BioSolver Logo" }, void 0, false, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "button",
          className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
          onClick: () => setMobileMenuOpen(true),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 47,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt.Group, { className: "hidden lg:flex lg:gap-x-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/for-solvers", className: "text-sm font-semibold leading-6 text-gray-900", children: "For Solvers" }, void 0, false, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/for-seekers", className: "text-sm font-semibold leading-6 text-gray-900", children: "For Seekers" }, void 0, false, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt, { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt.Button, { className: "flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900", children: [
            "Company",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 flex-none text-gray-400", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            $e3,
            {
              as: import_react34.Fragment,
              enter: "transition ease-out duration-200",
              enterFrom: "opacity-0 translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              leave: "transition ease-in duration-150",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 translate-y-1",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt.Panel, { className: "absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5", children: company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative rounded-lg p-4 hover:bg-gray-50", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "block text-sm font-semibold leading-6 text-gray-900", children: [
                  item.name,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
                    fileName: "app/layout/anon/Header.tsx",
                    lineNumber: 135,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 133,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: item.description }, void 0, false, {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 137,
                  columnNumber: 21
                }, this)
              ] }, item.name, true, {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 132,
                columnNumber: 19
              }, this)) }, void 0, false, {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 130,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 121,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-sm font-semibold leading-6 text-gray-900", children: [
        "Log in ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 146,
          columnNumber: 20
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/anon/Header.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-10" }, void 0, false, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "-m-1.5 p-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Your Company" }, void 0, false, {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 156,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "h-8 w-auto",
                  src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                  alt: ""
                },
                void 0,
                false,
                {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 157,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 155,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                className: "-m-2.5 rounded-md p-2.5 text-gray-700",
                onClick: () => setMobileMenuOpen(false),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
                    fileName: "app/layout/anon/Header.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/layout/anon/Header.tsx",
                    lineNumber: 169,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 163,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 154,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 py-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Link,
                {
                  to: "/for-seekers",
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  children: "For Seekers"
                },
                void 0,
                false,
                {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 189,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Link,
                {
                  to: "/for-solvers",
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  children: "For Solvers"
                },
                void 0,
                false,
                {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 194,
                  columnNumber: 19
                },
                this
              ),
              company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: item.href,
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  children: item.name
                },
                item.name,
                false,
                {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 201,
                  columnNumber: 21
                },
                this
              ))
            ] }, void 0, true, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 188,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/login",
                className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                children: "Log In"
              },
              void 0,
              false,
              {
                fileName: "app/layout/anon/Header.tsx",
                lineNumber: 211,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 210,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center", children: callsToAction.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            href: item.href,
            className: "p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100",
            children: item.name
          },
          item.name,
          false,
          {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 220,
            columnNumber: 15
          },
          this
        )) }, void 0, false, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/anon/Header.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/Header.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// node_modules/react-icons/lib/esm/iconBase.js
var import_react38 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react37 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react37.default.createContext && import_react37.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t14) {
    for (var s13, i6 = 1, n6 = arguments.length; i6 < n6; i6++) {
      s13 = arguments[i6];
      for (var p8 in s13)
        if (Object.prototype.hasOwnProperty.call(s13, p8))
          t14[p8] = s13[p8];
    }
    return t14;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s13, e5) {
  var t14 = {};
  for (var p8 in s13)
    if (Object.prototype.hasOwnProperty.call(s13, p8) && e5.indexOf(p8) < 0)
      t14[p8] = s13[p8];
  if (s13 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i6 = 0, p8 = Object.getOwnPropertySymbols(s13); i6 < p8.length; i6++) {
      if (e5.indexOf(p8[i6]) < 0 && Object.prototype.propertyIsEnumerable.call(s13, p8[i6]))
        t14[p8[i6]] = s13[p8[i6]];
    }
  return t14;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i6) {
    return import_react38.default.createElement(node.tag, __assign({
      key: i6
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react38.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react38.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react38.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react38.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/fa/index.esm.js
function FaFacebook(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" } }] })(props);
}
function FaLinkedin(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" } }] })(props);
}

// app/layout/anon/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var navigation = {
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
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FaLinkedin, {}, void 0, false, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/biosolverio/100090926217577/",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FaFacebook, {}, void 0, false, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)
    }
  ]
};
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-white", "aria-labelledby": "footer-heading", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }, void 0, false, {
      fileName: "app/layout/anon/Footer.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 gap-8 xl:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Platform" }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 48,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.platform.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 52,
                columnNumber: 23
              }, this) }, item.name, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 51,
                columnNumber: 21
              }, this)) }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 49,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Support" }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.support.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 64,
                columnNumber: 23
              }, this) }, item.name, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 63,
                columnNumber: 21
              }, this)) }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Company" }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 74,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 78,
                columnNumber: 23
              }, this) }, item.name, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 77,
                columnNumber: 21
              }, this)) }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 75,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Legal" }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 86,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.legal.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 90,
                columnNumber: 23
              }, this) }, item.name, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 89,
                columnNumber: 21
              }, this)) }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 85,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-10 xl:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Subscribe to our newsletter" }, void 0, false, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-gray-600", children: "The latest news, articles, and resources, sent to your inbox weekly." }, void 0, false, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { action: "https://app.formzillion.com/f/nNcNse-I", className: "mt-6 sm:flex sm:max-w-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, false, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                type: "email",
                name: "email-address",
                id: "email-address",
                autoComplete: "email",
                required: true,
                className: "w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full",
                placeholder: "Enter your email"
              },
              void 0,
              false,
              {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 108,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "flex w-full items-center justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",
                children: "Subscribe"
              },
              void 0,
              false,
              {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 118,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/layout/anon/Footer.tsx",
              lineNumber: 117,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-6 md:order-2", children: navigation.social.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: item.name }, void 0, false, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(item.icon.type, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this)
        ] }, item.name, true, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0", children: "\xA9 2023 BIOSOLVER Corp. All rights reserved." }, void 0, false, {
          fileName: "app/layout/anon/Footer.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/anon/Footer.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/anon/Footer.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_react41 = __toESM(require_react());

// app/assets/images/user/User_128px.png
var User_128px_default = "/build/_assets/User_128px-IWZ4Z5HH.png";

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
var navigation2 = [
  { name: "Dashboard", href: "dashboard", icon: HomeIcon_default, current: true },
  { name: "Your Matches", href: "matches", icon: UsersIcon_default, current: false },
  { name: "Messages", href: "messages", icon: FolderIcon_default, current: false },
  { name: "Calendar", href: "calendar", icon: CalendarIcon_default, current: false },
  { name: "Documents", href: "documents", icon: DocumentDuplicateIcon_default, current: false },
  { name: "Reports", href: "reports", icon: ChartPieIcon_default, current: false }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function App() {
  const { user } = useLoaderData();
  const [sidebarOpen, setSidebarOpen] = (0, import_react41.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "w-full h-full font-display", children: [
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full h-auto mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($e3.Root, { show: sidebarOpen, as: import_react41.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(_t, { as: "div", className: "relative z-50 lg:hidden", onClose: setSidebarOpen, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            $e3.Child,
            {
              as: import_react41.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fixed inset-0 bg-gray-900/80" }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 88,
                columnNumber: 23
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/root.tsx",
              lineNumber: 79,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fixed inset-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            $e3.Child,
            {
              as: import_react41.Fragment,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "-translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "-translate-x-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(_t.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  $e3.Child,
                  {
                    as: import_react41.Fragment,
                    enter: "ease-in-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5", onClick: () => setSidebarOpen(false), children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Close sidebar" }, void 0, false, {
                        fileName: "app/root.tsx",
                        lineNumber: 113,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, false, {
                        fileName: "app/root.tsx",
                        lineNumber: 114,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/root.tsx",
                      lineNumber: 112,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "app/root.tsx",
                      lineNumber: 111,
                      columnNumber: 29
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 102,
                    columnNumber: 27
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "img",
                    {
                      className: "h-8 w-auto",
                      src: base_default,
                      alt: "Biosolver"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/root.tsx",
                      lineNumber: 121,
                      columnNumber: 31
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 120,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation2.map(
                      (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                        "a",
                        {
                          href: item.href,
                          className: classNames(
                            item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                              item.icon,
                              {
                                className: classNames(
                                  item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600",
                                  "h-6 w-6 shrink-0"
                                ),
                                "aria-hidden": "true"
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/root.tsx",
                                lineNumber: 142,
                                columnNumber: 43
                              },
                              this
                            ),
                            item.name
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 133,
                          columnNumber: 41
                        },
                        this
                      ) }, item.name, false, {
                        fileName: "app/root.tsx",
                        lineNumber: 132,
                        columnNumber: 35
                      }, this)
                    ) }, void 0, false, {
                      fileName: "app/root.tsx",
                      lineNumber: 130,
                      columnNumber: 35
                    }, this) }, void 0, false, {
                      fileName: "app/root.tsx",
                      lineNumber: 129,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      "a",
                      {
                        href: "#",
                        className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                            Cog6ToothIcon_default,
                            {
                              className: "h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600",
                              "aria-hidden": "true"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/root.tsx",
                              lineNumber: 190,
                              columnNumber: 37
                            },
                            this
                          ),
                          "Settings"
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/root.tsx",
                        lineNumber: 186,
                        columnNumber: 35
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/root.tsx",
                      lineNumber: 185,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/root.tsx",
                    lineNumber: 128,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 127,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/root.tsx",
                  lineNumber: 119,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 101,
                columnNumber: 25
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/root.tsx",
              lineNumber: 92,
              columnNumber: 23
            },
            this
          ) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 91,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "img",
            {
              className: "h-8 w-auto",
              src: base_default,
              alt: "Biosolver"
            },
            void 0,
            false,
            {
              fileName: "app/root.tsx",
              lineNumber: 211,
              columnNumber: 23
            },
            this
          ) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 210,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation2.map(
              (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "a",
                {
                  href: item.href,
                  className: classNames(
                    item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      item.icon,
                      {
                        className: classNames(
                          item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600",
                          "h-6 w-6 shrink-0"
                        ),
                        "aria-hidden": "true"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/root.tsx",
                        lineNumber: 232,
                        columnNumber: 35
                      },
                      this
                    ),
                    item.name
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/root.tsx",
                  lineNumber: 223,
                  columnNumber: 33
                },
                this
              ) }, item.name, false, {
                fileName: "app/root.tsx",
                lineNumber: 222,
                columnNumber: 27
              }, this)
            ) }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 220,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 219,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                href: "#",
                className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Cog6ToothIcon_default,
                    {
                      className: "h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600",
                      "aria-hidden": "true"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/root.tsx",
                      lineNumber: 280,
                      columnNumber: 29
                    },
                    this
                  ),
                  "Settings"
                ]
              },
              void 0,
              true,
              {
                fileName: "app/root.tsx",
                lineNumber: 276,
                columnNumber: 27
              },
              this
            ) }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 275,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 218,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 217,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 209,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 207,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:pl-72", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "button",
              {
                type: "button",
                className: "-m-2.5 p-2.5 text-gray-700 lg:hidden",
                onClick: () => setSidebarOpen(true),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Open sidebar" }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 300,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 301,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/root.tsx",
                lineNumber: 295,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-6 w-px bg-gray-200 lg:hidden", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 305,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "relative flex flex-1", action: "#", method: "GET", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "search-field", className: "sr-only", children: "Search" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 309,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  MagnifyingGlassIcon_default,
                  {
                    className: "pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400",
                    "aria-hidden": "true"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 312,
                    columnNumber: 27
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "input",
                  {
                    id: "search-field",
                    className: "block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm",
                    placeholder: "Search...",
                    type: "search",
                    name: "search"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 316,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 308,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 326,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BellIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 327,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/root.tsx",
                  lineNumber: 325,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 331,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it, { as: "div", className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it.Button, { className: "-m-1.5 flex items-center p-1.5", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
                      fileName: "app/root.tsx",
                      lineNumber: 336,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      "img",
                      {
                        className: "h-8 w-8 rounded-full bg-gray-50",
                        src: User_128px_default,
                        alt: ""
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/root.tsx",
                        lineNumber: 337,
                        columnNumber: 31
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden lg:flex lg:items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-4 text-sm font-semibold leading-6 text-gray-900", "aria-hidden": "true" }, void 0, false, {
                        fileName: "app/root.tsx",
                        lineNumber: 343,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ChevronDownIcon_default, { className: "ml-2 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, false, {
                        fileName: "app/root.tsx",
                        lineNumber: 345,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/root.tsx",
                      lineNumber: 342,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/root.tsx",
                    lineNumber: 335,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    $e3,
                    {
                      as: import_react41.Fragment,
                      enter: "transition ease-out duration-100",
                      enterFrom: "transform opacity-0 scale-95",
                      enterTo: "transform opacity-100 scale-100",
                      leave: "transition ease-in duration-75",
                      leaveFrom: "transform opacity-100 scale-100",
                      leaveTo: "transform opacity-0 scale-95",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it.Items, { className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
                          false,
                          {
                            fileName: "app/root.tsx",
                            lineNumber: 360,
                            columnNumber: 33
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/root.tsx",
                          lineNumber: 358,
                          columnNumber: 33
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "POST", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
                          false,
                          {
                            fileName: "app/root.tsx",
                            lineNumber: 374,
                            columnNumber: 39
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/root.tsx",
                          lineNumber: 373,
                          columnNumber: 33
                        }, this) }, void 0, false, {
                          fileName: "app/root.tsx",
                          lineNumber: 371,
                          columnNumber: 33
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/root.tsx",
                        lineNumber: 357,
                        columnNumber: 31
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/root.tsx",
                      lineNumber: 348,
                      columnNumber: 29
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "app/root.tsx",
                  lineNumber: 334,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 324,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.tsx",
              lineNumber: 307,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 294,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 293,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 396,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 395,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 394,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 292,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 16
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 404,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 405,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 406,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 403,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 410,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 411,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 412,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
/*! Bundled license information:

@remix-run/css-bundle/dist/esm/index.js:
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
//# sourceMappingURL=/build/root-AK5Y5N5B.js.map
