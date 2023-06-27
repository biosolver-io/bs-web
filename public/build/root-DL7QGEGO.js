import {
  Bars3Icon_default,
  ChevronDownIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-JEAMCC3A.js";
import {
  FaFacebook,
  FaLinkedin,
  GenIcon
} from "/build/_shared/chunk-RVGUQ7OK.js";
import {
  base_default
} from "/build/_shared/chunk-JVNGUFS4.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
import {
  useOptionalUser
} from "/build/_shared/chunk-XIBNGEOM.js";
import {
  require_react_dom
} from "/build/_shared/chunk-YUUU2RAQ.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-SGSFRA2X.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// css-bundle-update-plugin-ns:D:\spaces\BioSolver\bs-web\node_modules\@remix-run\css-bundle\dist\esm\index.js
var cssBundleHref = false ? void 0 : void 0;

// app/root.tsx
var import_session = __toESM(require_session());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5XGGCDFD.css";

// app/layout/Navbar.tsx
var import_react36 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t15, e5, n6) => e5 in t15 ? i(t15, e5, { enumerable: true, configurable: true, writable: true, value: n6 }) : t15[e5] = n6;
var r = (t15, e5, n6) => (d(t15, typeof e5 != "symbol" ? e5 + "" : e5, n6), n6);
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
  let r9 = (0, import_react2.useRef)(e5);
  return l(() => {
    r9.current = e5;
  }, [e5]), r9;
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
  let n6 = [], r9 = { addEventListener(e5, t15, s13, a12) {
    return e5.addEventListener(t15, s13, a12), r9.add(() => e5.removeEventListener(t15, s13, a12));
  }, requestAnimationFrame(...e5) {
    let t15 = requestAnimationFrame(...e5);
    return r9.add(() => cancelAnimationFrame(t15));
  }, nextFrame(...e5) {
    return r9.requestAnimationFrame(() => r9.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t15 = setTimeout(...e5);
    return r9.add(() => clearTimeout(t15));
  }, microTask(...e5) {
    let t15 = { current: true };
    return t3(() => {
      t15.current && e5[0]();
    }), r9.add(() => {
      t15.current = false;
    });
  }, style(e5, t15, s13) {
    let a12 = e5.style.getPropertyValue(t15);
    return Object.assign(e5.style, { [t15]: s13 }), this.add(() => {
      Object.assign(e5.style, { [t15]: a12 });
    });
  }, group(e5) {
    let t15 = o2();
    return e5(t15), this.add(() => t15.dispose());
  }, add(e5) {
    return n6.push(e5), () => {
      let t15 = n6.indexOf(e5);
      if (t15 >= 0)
        for (let s13 of n6.splice(t15, 1))
          s13();
    };
  }, dispose() {
    for (let e5 of n6.splice(0))
      e5();
  } };
  return r9;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e5] = (0, import_react3.useState)(o2);
  return (0, import_react3.useEffect)(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);
var o4 = function(t15) {
  let e5 = s2(t15);
  return import_react4.default.useCallback((...r9) => e5.current(...r9), [e5]);
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
function u(r9, n6, ...a12) {
  if (r9 in n6) {
    let e5 = n6[r9];
    return typeof e5 == "function" ? e5(...a12) : e5;
  }
  let t15 = new Error(`Tried to handle "${r9}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t15, u), t15;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r9) {
  return s.isServer ? null : r9 instanceof Node ? r9.ownerDocument : r9 != null && r9.hasOwnProperty("current") && r9.current instanceof Node ? r9.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var M = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(M || {});
var N = ((o11) => (o11[o11.Error = 0] = "Error", o11[o11.Overflow = 1] = "Overflow", o11[o11.Success = 2] = "Success", o11[o11.Underflow = 3] = "Underflow", o11))(N || {});
var F = ((t15) => (t15[t15.Previous = -1] = "Previous", t15[t15.Next = 1] = "Next", t15))(F || {});
function f(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(c2)).sort((r9, t15) => Math.sign((r9.tabIndex || Number.MAX_SAFE_INTEGER) - (t15.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t15) => (t15[t15.Strict = 0] = "Strict", t15[t15.Loose = 1] = "Loose", t15))(T || {});
function h(e5, r9 = 0) {
  var t15;
  return e5 === ((t15 = e(e5)) == null ? void 0 : t15.body) ? false : u(r9, { [0]() {
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
  let r9 = e(e5);
  o2().nextFrame(() => {
    r9 && !h(r9.activeElement, 0) && y(e5);
  });
}
var w = ((t15) => (t15[t15.Keyboard = 0] = "Keyboard", t15[t15.Mouse = 1] = "Mouse", t15))(w || {});
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
  var r9, t15;
  return (t15 = (r9 = e5 == null ? void 0 : e5.matches) == null ? void 0 : r9.call(e5, S)) != null ? t15 : false;
}
function I2(e5, r9 = (t15) => t15) {
  return e5.slice().sort((t15, l11) => {
    let o11 = r9(t15), i6 = r9(l11);
    if (o11 === null || i6 === null)
      return 0;
    let n6 = o11.compareDocumentPosition(i6);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e5, r9) {
  return O(f(), r9, { relativeTo: e5 });
}
function O(e5, r9, { sorted: t15 = true, relativeTo: l11 = null, skipElements: o11 = [] } = {}) {
  let i6 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, n6 = Array.isArray(e5) ? t15 ? I2(e5) : e5 : f(e5);
  o11.length > 0 && n6.length > 1 && (n6 = n6.filter((s13) => !o11.includes(s13))), l11 = l11 != null ? l11 : i6.activeElement;
  let E7 = (() => {
    if (r9 & 5)
      return 1;
    if (r9 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (r9 & 1)
      return 0;
    if (r9 & 2)
      return Math.max(0, n6.indexOf(l11)) - 1;
    if (r9 & 4)
      return Math.max(0, n6.indexOf(l11)) + 1;
    if (r9 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p8 = r9 & 32 ? { preventScroll: true } : {}, d12 = 0, a12 = n6.length, u9;
  do {
    if (d12 >= a12 || d12 + a12 <= 0)
      return 0;
    let s13 = x6 + d12;
    if (r9 & 16)
      s13 = (s13 + a12) % a12;
    else {
      if (s13 < 0)
        return 3;
      if (s13 >= a12)
        return 1;
    }
    u9 = n6[s13], u9 == null || u9.focus(p8), d12 += E7;
  } while (u9 !== i6.activeElement);
  return r9 & 6 && H(u9) && u9.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react7 = __toESM(require_react(), 1);
function d2(e5, r9, n6) {
  let o11 = s2(r9);
  (0, import_react7.useEffect)(() => {
    function t15(u9) {
      o11.current(u9);
    }
    return document.addEventListener(e5, t15, n6), () => document.removeEventListener(e5, t15, n6);
  }, [e5, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react8 = __toESM(require_react(), 1);
function s4(e5, r9, n6) {
  let o11 = s2(r9);
  (0, import_react8.useEffect)(() => {
    function t15(i6) {
      o11.current(i6);
    }
    return window.addEventListener(e5, t15, n6), () => window.removeEventListener(e5, t15, n6);
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
  function a12(e5, o11) {
    if (!l11.current || e5.defaultPrevented)
      return;
    let n6 = o11(e5);
    if (n6 === null || !n6.getRootNode().contains(n6))
      return;
    let E7 = function r9(t15) {
      return typeof t15 == "function" ? r9(t15()) : Array.isArray(t15) || t15 instanceof Set ? t15 : [t15];
    }(s13);
    for (let r9 of E7) {
      if (r9 === null)
        continue;
      let t15 = r9 instanceof HTMLElement ? r9 : r9.current;
      if (t15 != null && t15.contains(n6) || e5.composed && e5.composedPath().includes(t15))
        return;
    }
    return !h(n6, T.Loose) && n6.tabIndex !== -1 && e5.preventDefault(), m10(e5, n6);
  }
  let u9 = (0, import_react9.useRef)(null);
  d2("mousedown", (e5) => {
    var o11, n6;
    l11.current && (u9.current = ((n6 = (o11 = e5.composedPath) == null ? void 0 : o11.call(e5)) == null ? void 0 : n6[0]) || e5.target);
  }, true), d2("click", (e5) => {
    u9.current && (a12(e5, () => u9.current), u9.current = null);
  }, true), s4("blur", (e5) => a12(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react10 = __toESM(require_react(), 1);
function i2(t15) {
  var n6;
  if (t15.type)
    return t15.type;
  let e5 = (n6 = t15.as) != null ? n6 : "button";
  if (typeof e5 == "string" && e5.toLowerCase() === "button")
    return "button";
}
function s5(t15, e5) {
  let [n6, u9] = (0, import_react10.useState)(() => i2(t15));
  return l(() => {
    u9(i2(t15));
  }, [t15.type, t15.as]), l(() => {
    n6 || e5.current && e5.current instanceof HTMLButtonElement && !e5.current.hasAttribute("type") && u9("button");
  }, [n6, e5]), n6;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react11 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t15, n6 = true) {
  return Object.assign(t15, { [u2]: n6 });
}
function y2(...t15) {
  let n6 = (0, import_react11.useRef)(t15);
  (0, import_react11.useEffect)(() => {
    n6.current = t15;
  }, [t15]);
  let c14 = o4((e5) => {
    for (let o11 of n6.current)
      o11 != null && (typeof o11 == "function" ? o11(e5) : o11.current = e5);
  });
  return t15.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u2])) ? void 0 : c14;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react12 = __toESM(require_react(), 1);
function F2({ container: e5, accept: t15, walk: r9, enabled: c14 = true }) {
  let o11 = (0, import_react12.useRef)(t15), l11 = (0, import_react12.useRef)(r9);
  (0, import_react12.useEffect)(() => {
    o11.current = t15, l11.current = r9;
  }, [t15, r9]), l(() => {
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
function f2(r9) {
  throw new Error("Unexpected object: " + r9);
}
var a2 = ((e5) => (e5[e5.First = 0] = "First", e5[e5.Previous = 1] = "Previous", e5[e5.Next = 2] = "Next", e5[e5.Last = 3] = "Last", e5[e5.Specific = 4] = "Specific", e5[e5.Nothing = 5] = "Nothing", e5))(a2 || {});
function x(r9, n6) {
  let t15 = n6.resolveItems();
  if (t15.length <= 0)
    return null;
  let l11 = n6.resolveActiveIndex(), s13 = l11 != null ? l11 : -1, d12 = (() => {
    switch (r9.focus) {
      case 0:
        return t15.findIndex((e5) => !n6.resolveDisabled(e5));
      case 1: {
        let e5 = t15.slice().reverse().findIndex((i6, c14, u9) => s13 !== -1 && u9.length - c14 - 1 >= s13 ? false : !n6.resolveDisabled(i6));
        return e5 === -1 ? e5 : t15.length - 1 - e5;
      }
      case 2:
        return t15.findIndex((e5, i6) => i6 <= s13 ? false : !n6.resolveDisabled(e5));
      case 3: {
        let e5 = t15.slice().reverse().findIndex((i6) => !n6.resolveDisabled(i6));
        return e5 === -1 ? e5 : t15.length - 1 - e5;
      }
      case 4:
        return t15.findIndex((e5) => n6.resolveId(e5) === r9.id);
      case 5:
        return null;
      default:
        f2(r9);
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
var S2 = ((a12) => (a12[a12.None = 0] = "None", a12[a12.RenderStrategy = 1] = "RenderStrategy", a12[a12.Static = 2] = "Static", a12))(S2 || {});
var j = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(j || {});
function X({ ourProps: r9, theirProps: t15, slot: e5, defaultTag: a12, features: s13, visible: n6 = true, name: f9 }) {
  let o11 = N2(t15, r9);
  if (n6)
    return c4(o11, e5, a12, f9);
  let u9 = s13 != null ? s13 : 0;
  if (u9 & 2) {
    let { static: l11 = false, ...p8 } = o11;
    if (l11)
      return c4(p8, e5, a12, f9);
  }
  if (u9 & 1) {
    let { unmount: l11 = true, ...p8 } = o11;
    return u(l11 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c4({ ...p8, hidden: true, style: { display: "none" } }, e5, a12, f9);
    } });
  }
  return c4(o11, e5, a12, f9);
}
function c4(r9, t15 = {}, e5, a12) {
  let { as: s13 = e5, children: n6, refName: f9 = "ref", ...o11 } = g(r9, ["unmount", "static"]), u9 = r9.ref !== void 0 ? { [f9]: r9.ref } : {}, l11 = typeof n6 == "function" ? n6(t15) : n6;
  "className" in o11 && o11.className && typeof o11.className == "function" && (o11.className = o11.className(t15));
  let p8 = {};
  if (t15) {
    let i6 = false, m10 = [];
    for (let [y8, d12] of Object.entries(t15))
      typeof d12 == "boolean" && (i6 = true), d12 === true && m10.push(y8);
    i6 && (p8["data-headlessui-state"] = m10.join(" "));
  }
  if (s13 === import_react13.Fragment && Object.keys(R(o11)).length > 0) {
    if (!(0, import_react13.isValidElement)(l11) || Array.isArray(l11) && l11.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a12} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o11).map((d12) => `  - ${d12}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d12) => `  - ${d12}`).join(`
`)].join(`
`));
    let i6 = l11.props, m10 = typeof (i6 == null ? void 0 : i6.className) == "function" ? (...d12) => e2(i6 == null ? void 0 : i6.className(...d12), o11.className) : e2(i6 == null ? void 0 : i6.className, o11.className), y8 = m10 ? { className: m10 } : {};
    return (0, import_react13.cloneElement)(l11, Object.assign({}, N2(l11.props, R(g(o11, ["ref"]))), p8, u9, w2(l11.ref, u9.ref), y8));
  }
  return (0, import_react13.createElement)(s13, Object.assign({}, g(o11, ["ref"]), s13 !== import_react13.Fragment && u9, s13 !== import_react13.Fragment && p8), l11);
}
function w2(...r9) {
  return { ref: r9.every((t15) => t15 == null) ? void 0 : (t15) => {
    for (let e5 of r9)
      e5 != null && (typeof e5 == "function" ? e5(t15) : e5.current = t15);
  } };
}
function N2(...r9) {
  var a12;
  if (r9.length === 0)
    return {};
  if (r9.length === 1)
    return r9[0];
  let t15 = {}, e5 = {};
  for (let s13 of r9)
    for (let n6 in s13)
      n6.startsWith("on") && typeof s13[n6] == "function" ? ((a12 = e5[n6]) != null || (e5[n6] = []), e5[n6].push(s13[n6])) : t15[n6] = s13[n6];
  if (t15.disabled || t15["aria-disabled"])
    return Object.assign(t15, Object.fromEntries(Object.keys(e5).map((s13) => [s13, void 0])));
  for (let s13 in e5)
    Object.assign(t15, { [s13](n6, ...f9) {
      let o11 = e5[s13];
      for (let u9 of o11) {
        if ((n6 instanceof Event || (n6 == null ? void 0 : n6.nativeEvent) instanceof Event) && n6.defaultPrevented)
          return;
        u9(n6, ...f9);
      }
    } });
  return t15;
}
function D2(r9) {
  var t15;
  return Object.assign((0, import_react13.forwardRef)(r9), { displayName: (t15 = r9.displayName) != null ? t15 : r9.name });
}
function R(r9) {
  let t15 = Object.assign({}, r9);
  for (let e5 in t15)
    t15[e5] === void 0 && delete t15[e5];
  return t15;
}
function g(r9, t15 = []) {
  let e5 = Object.assign({}, r9);
  for (let a12 of t15)
    a12 in e5 && delete e5[a12];
  return e5;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n6) {
  let e5 = n6.parentElement, l11 = null;
  for (; e5 && !(e5 instanceof HTMLFieldSetElement); )
    e5 instanceof HTMLLegendElement && (l11 = e5), e5 = e5.parentElement;
  let t15 = (e5 == null ? void 0 : e5.getAttribute("disabled")) === "";
  return t15 && i4(l11) ? false : t15;
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
function s6(t15, o11) {
  let { features: n6 = 1, ...e5 } = t15, d12 = { ref: o11, "aria-hidden": (n6 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n6 & 4) === 4 && (n6 & 2) !== 2 && { display: "none" } } };
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
function c6({ value: o11, children: r9 }) {
  return import_react14.default.createElement(n.Provider, { value: o11 }, r9);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r9) => (r9.Space = " ", r9.Enter = "Enter", r9.Escape = "Escape", r9.Backspace = "Backspace", r9.Delete = "Delete", r9.ArrowLeft = "ArrowLeft", r9.ArrowUp = "ArrowUp", r9.ArrowRight = "ArrowRight", r9.ArrowDown = "ArrowDown", r9.Home = "Home", r9.End = "End", r9.PageUp = "PageUp", r9.PageDown = "PageDown", r9.Tab = "Tab", r9))(o8 || {});

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react15 = __toESM(require_react(), 1);
function m3(u9, t15) {
  let e5 = (0, import_react15.useRef)([]), r9 = o4(u9);
  (0, import_react15.useEffect)(() => {
    let o11 = [...e5.current];
    for (let [n6, a12] of t15.entries())
      if (e5.current[n6] !== a12) {
        let l11 = r9(t15, o11);
        return e5.current = t15, l11;
      }
  }, [r9, ...t15]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react16 = __toESM(require_react(), 1);
function t6(e5) {
  return [e5.screenX, e5.screenY];
}
function u3() {
  let e5 = (0, import_react16.useRef)([-1, -1]);
  return { wasMoved(r9) {
    let n6 = t6(r9);
    return e5.current[0] === n6[0] && e5.current[1] === n6[1] ? false : (e5.current = n6, true);
  }, update(r9) {
    e5.current = t6(r9);
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
var s8 = ((r9) => (r9[r9.Forwards = 0] = "Forwards", r9[r9.Backwards = 1] = "Backwards", r9))(s8 || {});
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
function E3(n6, e5, a12, t15) {
  let i6 = s2(a12);
  (0, import_react20.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r9(o11) {
      i6.current(o11);
    }
    return n6.addEventListener(e5, r9, t15), () => n6.removeEventListener(e5, r9, t15);
  }, [n6, e5, t15]);
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
function c7(t15) {
  let r9 = o4(t15), e5 = (0, import_react21.useRef)(false);
  (0, import_react21.useEffect)(() => (e5.current = false, () => {
    e5.current = true, t3(() => {
      e5.current && r9();
    });
  }), [r9]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t15) {
  if (!t15)
    return /* @__PURE__ */ new Set();
  if (typeof t15 == "function")
    return new Set(t15());
  let r9 = /* @__PURE__ */ new Set();
  for (let e5 of t15.current)
    e5.current instanceof HTMLElement && r9.add(e5.current);
  return r9;
}
var J = "div";
var h3 = ((n6) => (n6[n6.None = 1] = "None", n6[n6.InitialFocus = 2] = "InitialFocus", n6[n6.TabLock = 4] = "TabLock", n6[n6.FocusLock = 8] = "FocusLock", n6[n6.RestoreFocus = 16] = "RestoreFocus", n6[n6.All = 30] = "All", n6))(h3 || {});
function X2(t15, r9) {
  let e5 = (0, import_react22.useRef)(null), o11 = y2(e5, r9), { initialFocus: u9, containers: i6, features: n6 = 30, ...l11 } = t15;
  l2() || (n6 = 1);
  let m10 = n3(e5);
  Y({ ownerDocument: m10 }, Boolean(n6 & 16));
  let c14 = Z({ ownerDocument: m10, container: e5, initialFocus: u9 }, Boolean(n6 & 2));
  $({ ownerDocument: m10, container: e5, containers: i6, previousActiveElement: c14 }, Boolean(n6 & 8));
  let v4 = n2(), y8 = o4((s13) => {
    let T6 = e5.current;
    if (!T6)
      return;
    ((B) => B())(() => {
      u(v4.current, { [s8.Forwards]: () => {
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
    d12 instanceof HTMLElement && d12.dataset.headlessuiFocusGuard !== "true" && (S3(T6, d12) || (b5.current ? O(e5.current, u(v4.current, { [s8.Forwards]: () => M.Next, [s8.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s13.target }) : s13.target instanceof HTMLElement && y(s13.target)));
  } };
  return import_react22.default.createElement(import_react22.default.Fragment, null, Boolean(n6 & 4) && import_react22.default.createElement(c5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p2.Focusable }), X({ ourProps: j4, theirProps: l11, defaultTag: J, name: "FocusTrap" }), Boolean(n6 & 4) && import_react22.default.createElement(c5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p2.Focusable }));
}
var z = D2(X2);
var ge = Object.assign(z, { features: h3 });
var a4 = [];
t10(() => {
  function t15(r9) {
    r9.target instanceof HTMLElement && r9.target !== document.body && a4[0] !== r9.target && (a4.unshift(r9.target), a4 = a4.filter((e5) => e5 != null && e5.isConnected), a4.splice(10));
  }
  window.addEventListener("click", t15, { capture: true }), window.addEventListener("mousedown", t15, { capture: true }), window.addEventListener("focus", t15, { capture: true }), document.body.addEventListener("click", t15, { capture: true }), document.body.addEventListener("mousedown", t15, { capture: true }), document.body.addEventListener("focus", t15, { capture: true });
});
function Q(t15 = true) {
  let r9 = (0, import_react22.useRef)(a4.slice());
  return m3(([e5], [o11]) => {
    o11 === true && e5 === false && t3(() => {
      r9.current.splice(0);
    }), o11 === false && e5 === true && (r9.current = a4.slice());
  }, [t15, a4, r9]), o4(() => {
    var e5;
    return (e5 = r9.current.find((o11) => o11 != null && o11.isConnected)) != null ? e5 : null;
  });
}
function Y({ ownerDocument: t15 }, r9) {
  let e5 = Q(r9);
  m3(() => {
    r9 || (t15 == null ? void 0 : t15.activeElement) === (t15 == null ? void 0 : t15.body) && y(e5());
  }, [r9]), c7(() => {
    r9 && y(e5());
  });
}
function Z({ ownerDocument: t15, container: r9, initialFocus: e5 }, o11) {
  let u9 = (0, import_react22.useRef)(null), i6 = f4();
  return m3(() => {
    if (!o11)
      return;
    let n6 = r9.current;
    n6 && t3(() => {
      if (!i6.current)
        return;
      let l11 = t15 == null ? void 0 : t15.activeElement;
      if (e5 != null && e5.current) {
        if ((e5 == null ? void 0 : e5.current) === l11) {
          u9.current = l11;
          return;
        }
      } else if (n6.contains(l11)) {
        u9.current = l11;
        return;
      }
      e5 != null && e5.current ? y(e5.current) : O(n6, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u9.current = t15 == null ? void 0 : t15.activeElement;
    });
  }, [o11]), u9;
}
function $({ ownerDocument: t15, container: r9, containers: e5, previousActiveElement: o11 }, u9) {
  let i6 = f4();
  E3(t15 == null ? void 0 : t15.defaultView, "focus", (n6) => {
    if (!u9 || !i6.current)
      return;
    let l11 = P(e5);
    r9.current instanceof HTMLElement && l11.add(r9.current);
    let m10 = o11.current;
    if (!m10)
      return;
    let c14 = n6.target;
    c14 && c14 instanceof HTMLElement ? S3(l11, c14) ? (o11.current = c14, y(c14)) : (n6.preventDefault(), n6.stopPropagation(), y(m10)) : y(o11.current);
  }, true);
}
function S3(t15, r9) {
  for (let e5 of t15)
    if (e5.contains(r9))
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
  let l11 = l5(), n6 = (0, import_react24.useContext)(v), e5 = n3(p8), [a12, o11] = (0, import_react24.useState)(() => {
    if (!l11 && n6 !== null || s.isServer)
      return null;
    let t15 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (t15)
      return t15;
    if (e5 === null)
      return null;
    let r9 = e5.createElement("div");
    return r9.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(r9);
  });
  return (0, import_react24.useEffect)(() => {
    a12 !== null && (e5 != null && e5.body.contains(a12) || e5 == null || e5.body.appendChild(a12));
  }, [a12, e5]), (0, import_react24.useEffect)(() => {
    l11 || n6 !== null && o11(n6.current);
  }, [n6, o11, l11]), a12;
}
var U = import_react24.Fragment;
function N3(p8, l11) {
  let n6 = p8, e5 = (0, import_react24.useRef)(null), a12 = y2(T2((u9) => {
    e5.current = u9;
  }), l11), o11 = n3(e5), t15 = F3(e5), [r9] = (0, import_react24.useState)(() => {
    var u9;
    return s.isServer ? null : (u9 = o11 == null ? void 0 : o11.createElement("div")) != null ? u9 : null;
  }), i6 = (0, import_react24.useContext)(f5), C4 = l2();
  return l(() => {
    !t15 || !r9 || t15.contains(r9) || (r9.setAttribute("data-headlessui-portal", ""), t15.appendChild(r9));
  }, [t15, r9]), l(() => {
    if (r9 && i6)
      return i6.register(r9);
  }, [i6, r9]), c7(() => {
    var u9;
    !t15 || !r9 || (r9 instanceof Node && t15.contains(r9) && t15.removeChild(r9), t15.childNodes.length <= 0 && ((u9 = t15.parentElement) == null || u9.removeChild(t15)));
  }), C4 ? !t15 || !r9 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a12 }, theirProps: n6, defaultTag: U, name: "Portal" }), r9) : null;
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
    let t15 = l11.current.indexOf(o11);
    t15 !== -1 && l11.current.splice(t15, 1), p8 && p8.unregister(o11);
  }), a12 = (0, import_react24.useMemo)(() => ({ register: n6, unregister: e5, portals: l11 }), [n6, e5, l11]);
  return [l11, (0, import_react24.useMemo)(() => function({ children: t15 }) {
    return import_react24.default.createElement(f5.Provider, { value: a12 }, t15);
  }, [a12])];
}
var D3 = D2(N3);
var I3 = D2(j2);
var pe = Object.assign(D3, { Group: I3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react25 = __toESM(require_react(), 1);
var d8 = (0, import_react25.createContext)(null);
function f6() {
  let r9 = (0, import_react25.useContext)(d8);
  if (r9 === null) {
    let t15 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t15, f6), t15;
  }
  return r9;
}
function M2() {
  let [r9, t15] = (0, import_react25.useState)([]);
  return [r9.length > 0 ? r9.join(" ") : void 0, (0, import_react25.useMemo)(() => function(e5) {
    let i6 = o4((s13) => (t15((o11) => [...o11, s13]), () => t15((o11) => {
      let p8 = o11.slice(), c14 = p8.indexOf(s13);
      return c14 !== -1 && p8.splice(c14, 1), p8;
    }))), n6 = (0, import_react25.useMemo)(() => ({ register: i6, slot: e5.slot, name: e5.name, props: e5.props }), [i6, e5.slot, e5.name, e5.props]);
    return import_react25.default.createElement(d8.Provider, { value: n6 }, e5.children);
  }, [t15])];
}
var S5 = "p";
function h4(r9, t15) {
  let a12 = I(), { id: e5 = `headlessui-description-${a12}`, ...i6 } = r9, n6 = f6(), s13 = y2(t15);
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
function M3({ children: i6, onUpdate: r9, type: e5, element: n6, enabled: u9 }) {
  let l11 = x3(), o11 = o4((...t15) => {
    r9 == null || r9(...t15), l11(...t15);
  });
  return l(() => {
    let t15 = u9 === void 0 || u9 === true;
    return t15 && o11(0, e5, n6), () => {
      t15 && o11(1, e5, n6);
    };
  }, [o11, e5, n6, u9]), import_react26.default.createElement(a5.Provider, { value: o11 }, i6);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i5(e5, t15) {
  return e5 === t15 && (e5 !== 0 || 1 / e5 === 1 / t15) || e5 !== e5 && t15 !== t15;
}
var d10 = typeof Object.is == "function" ? Object.is : i5;
var { useState: u6, useEffect: h5, useLayoutEffect: f7, useDebugValue: p4 } = l7;
function y4(e5, t15, c14) {
  const a12 = t15(), [{ inst: n6 }, o11] = u6({ inst: { value: a12, getSnapshot: t15 } });
  return f7(() => {
    n6.value = a12, n6.getSnapshot = t15, r6(n6) && o11({ inst: n6 });
  }, [e5, a12, t15]), h5(() => (r6(n6) && o11({ inst: n6 }), e5(() => {
    r6(n6) && o11({ inst: n6 });
  })), [e5]), p4(a12), a12;
}
function r6(e5) {
  const t15 = e5.getSnapshot, c14 = e5.value;
  try {
    const a12 = t15();
    return !d10(c14, a12);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t12(r9, e5, n6) {
  return e5();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r7 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s11 = !r7;
var c10 = s11 ? t12 : y4;
var a6 = "useSyncExternalStore" in e4 ? ((n6) => n6.useSyncExternalStore)(e4) : c10;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S6(t15) {
  return a6(t15.subscribe, t15.getSnapshot, t15.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o11, r9) {
  let t15 = o11(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t15;
  }, subscribe(e5) {
    return n6.add(e5), () => n6.delete(e5);
  }, dispatch(e5, ...s13) {
    let i6 = r9[e5].call(t15, ...s13);
    i6 && (t15 = i6, n6.forEach((c14) => c14()));
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
    let t15 = e5.documentElement, l11 = t15.clientWidth - t15.offsetWidth, r9 = o11 - l11;
    n6.style(t15, "paddingRight", `${r9}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p5() {
  if (!t7())
    return {};
  let o11;
  return { before() {
    o11 = window.pageYOffset;
  }, after({ doc: r9, d: l11, meta: s13 }) {
    function i6(e5) {
      return s13.containers.flatMap((t15) => t15()).some((t15) => t15.contains(e5));
    }
    l11.style(r9.body, "marginTop", `-${o11}px`), window.scrollTo(0, 0);
    let n6 = null;
    l11.addEventListener(r9, "click", (e5) => {
      if (e5.target instanceof HTMLElement)
        try {
          let t15 = e5.target.closest("a");
          if (!t15)
            return;
          let { hash: c14 } = new URL(t15.href), a12 = r9.querySelector(c14);
          a12 && !i6(a12) && (n6 = a12);
        } catch {
        }
    }, true), l11.addEventListener(r9, "touchmove", (e5) => {
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
  for (let t15 of e5)
    Object.assign(n6, t15(n6));
  return n6;
}
var a8 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e5, n6) {
  var o11;
  let t15 = (o11 = this.get(e5)) != null ? o11 : { doc: e5, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t15.count++, t15.meta.add(n6), this.set(e5, t15), this;
}, POP(e5, n6) {
  let t15 = this.get(e5);
  return t15 && (t15.count--, t15.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e5, d: n6, meta: t15 }) {
  let o11 = { doc: e5, d: n6, meta: m7(t15) }, c14 = [p5(), c11(), l8()];
  c14.forEach(({ before: r9 }) => r9 == null ? void 0 : r9(o11)), c14.forEach(({ after: r9 }) => r9 == null ? void 0 : r9(o11));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a8.subscribe(() => {
  let e5 = a8.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t15] of e5)
    n6.set(t15, t15.documentElement.style.overflow);
  for (let t15 of e5.values()) {
    let o11 = n6.get(t15.doc) === "hidden", c14 = t15.count !== 0;
    (c14 && !o11 || !c14 && o11) && a8.dispatch(t15.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t15), t15.count === 0 && a8.dispatch("TEARDOWN", t15);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p6(e5, r9, n6) {
  let f9 = S6(a8), o11 = e5 ? f9.get(e5) : void 0, i6 = o11 ? o11.count > 0 : false;
  return l(() => {
    if (!(!e5 || !r9))
      return a8.dispatch("PUSH", e5, n6), () => a8.dispatch("POP", e5, n6);
  }, [r9, e5]), i6;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u7 = /* @__PURE__ */ new Map();
var t13 = /* @__PURE__ */ new Map();
function h6(r9, l11 = true) {
  l(() => {
    var o11;
    if (!l11)
      return;
    let e5 = typeof r9 == "function" ? r9() : r9.current;
    if (!e5)
      return;
    function a12() {
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
    return t13.set(e5, f9 + 1), f9 !== 0 || (u7.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), e5.setAttribute("aria-hidden", "true"), e5.inert = true), a12;
  }, [r9, l11]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react27 = __toESM(require_react(), 1);
function p7({ defaultContainers: f9 = [], portals: o11 } = {}) {
  let t15 = (0, import_react27.useRef)(null), i6 = n3(t15), u9 = o4(() => {
    var r9;
    let n6 = [];
    for (let e5 of f9)
      e5 !== null && (e5 instanceof HTMLElement ? n6.push(e5) : "current" in e5 && e5.current instanceof HTMLElement && n6.push(e5.current));
    if (o11 != null && o11.current)
      for (let e5 of o11.current)
        n6.push(e5);
    for (let e5 of (r9 = i6 == null ? void 0 : i6.querySelectorAll("html > *, body > *")) != null ? r9 : [])
      e5 !== document.body && e5 !== document.head && e5 instanceof HTMLElement && e5.id !== "headlessui-portal-root" && (e5.contains(t15.current) || n6.some((c14) => e5.contains(c14)) || n6.push(e5));
    return n6;
  });
  return { resolveContainers: u9, contains: o4((n6) => u9().some((r9) => r9.contains(n6))), mainTreeNodeRef: t15, MainTreeNode: (0, import_react27.useMemo)(() => function() {
    return import_react27.default.createElement(c5, { features: p2.Hidden, ref: t15 });
  }, [t15]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(_e || {});
var Ie = ((e5) => (e5[e5.SetTitleId = 0] = "SetTitleId", e5))(Ie || {});
var Me = { [0](t15, e5) {
  return t15.titleId === e5.id ? t15 : { ...t15, titleId: e5.id };
} };
var I4 = (0, import_react28.createContext)(null);
I4.displayName = "DialogContext";
function b3(t15) {
  let e5 = (0, import_react28.useContext)(I4);
  if (e5 === null) {
    let o11 = new Error(`<${t15} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, b3), o11;
  }
  return e5;
}
function we(t15, e5, o11 = () => [document.body]) {
  p6(t15, e5, (i6) => {
    var n6;
    return { containers: [...(n6 = i6.containers) != null ? n6 : [], o11] };
  });
}
function Be(t15, e5) {
  return u(e5.type, Me, t15, e5);
}
var He = "div";
var Ge = S2.RenderStrategy | S2.Static;
function Ne(t15, e5) {
  var X5;
  let o11 = I(), { id: i6 = `headlessui-dialog-${o11}`, open: n6, onClose: l11, initialFocus: s13, __demoMode: g5 = false, ...T6 } = t15, [m10, h8] = (0, import_react28.useState)(0), a12 = C();
  n6 === void 0 && a12 !== null && (n6 = (a12 & d5.Open) === d5.Open);
  let D6 = (0, import_react28.useRef)(null), Q5 = y2(D6, e5), f9 = n3(D6), N6 = t15.hasOwnProperty("open") || a12 !== null, U3 = t15.hasOwnProperty("onClose");
  if (!N6 && !U3)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N6)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U3)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n6}`);
  if (typeof l11 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l11}`);
  let p8 = n6 ? 0 : 1, [S8, Z5] = (0, import_react28.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react28.createRef)() }), P4 = o4(() => l11(false)), W2 = o4((r9) => Z5({ type: 0, id: r9 })), L2 = l2() ? g5 ? false : p8 === 0 : false, F6 = m10 > 1, Y4 = (0, import_react28.useContext)(I4) !== null, [ee3, te2] = ae(), { resolveContainers: M6, mainTreeNodeRef: k2, MainTreeNode: oe4 } = p7({ portals: ee3, defaultContainers: [(X5 = S8.panelRef.current) != null ? X5 : D6.current] }), re4 = F6 ? "parent" : "leaf", $3 = a12 !== null ? (a12 & d5.Closing) === d5.Closing : false, ne2 = (() => Y4 || $3 ? false : L2)(), le2 = (0, import_react28.useCallback)(() => {
    var r9, c14;
    return (c14 = Array.from((r9 = f9 == null ? void 0 : f9.querySelectorAll("body > *")) != null ? r9 : []).find((d12) => d12.id === "headlessui-portal-root" ? false : d12.contains(k2.current) && d12 instanceof HTMLElement)) != null ? c14 : null;
  }, [k2]);
  h6(le2, ne2);
  let ae2 = (() => F6 ? true : L2)(), ie4 = (0, import_react28.useCallback)(() => {
    var r9, c14;
    return (c14 = Array.from((r9 = f9 == null ? void 0 : f9.querySelectorAll("[data-headlessui-portal]")) != null ? r9 : []).find((d12) => d12.contains(k2.current) && d12 instanceof HTMLElement)) != null ? c14 : null;
  }, [k2]);
  h6(ie4, ae2);
  let se3 = (() => !(!L2 || F6))();
  H2(M6, P4, se3);
  let pe2 = (() => !(F6 || p8 !== 0))();
  E3(f9 == null ? void 0 : f9.defaultView, "keydown", (r9) => {
    pe2 && (r9.defaultPrevented || r9.key === o8.Escape && (r9.preventDefault(), r9.stopPropagation(), P4()));
  });
  let de3 = (() => !($3 || p8 !== 0 || Y4))();
  we(f9, de3, M6), (0, import_react28.useEffect)(() => {
    if (p8 !== 0 || !D6.current)
      return;
    let r9 = new ResizeObserver((c14) => {
      for (let d12 of c14) {
        let x6 = d12.target.getBoundingClientRect();
        x6.x === 0 && x6.y === 0 && x6.width === 0 && x6.height === 0 && P4();
      }
    });
    return r9.observe(D6.current), () => r9.disconnect();
  }, [p8, D6, P4]);
  let [ue3, fe3] = M2(), ge3 = (0, import_react28.useMemo)(() => [{ dialogState: p8, close: P4, setTitleId: W2 }, S8], [p8, S8, P4, W2]), J3 = (0, import_react28.useMemo)(() => ({ open: p8 === 0 }), [p8]), Te2 = { ref: Q5, id: i6, role: "dialog", "aria-modal": p8 === 0 ? true : void 0, "aria-labelledby": S8.titleId, "aria-describedby": ue3 };
  return import_react28.default.createElement(M3, { type: "Dialog", enabled: p8 === 0, element: D6, onUpdate: o4((r9, c14) => {
    c14 === "Dialog" && u(r9, { [s10.Add]: () => h8((d12) => d12 + 1), [s10.Remove]: () => h8((d12) => d12 - 1) });
  }) }, import_react28.default.createElement(P2, { force: true }, import_react28.default.createElement(pe, null, import_react28.default.createElement(I4.Provider, { value: ge3 }, import_react28.default.createElement(pe.Group, { target: D6 }, import_react28.default.createElement(P2, { force: false }, import_react28.default.createElement(fe3, { slot: J3, name: "Dialog.Description" }, import_react28.default.createElement(ge, { initialFocus: s13, containers: M6, features: L2 ? u(re4, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react28.default.createElement(te2, null, X({ ourProps: Te2, theirProps: T6, slot: J3, defaultTag: He, features: Ge, visible: p8 === 0, name: "Dialog" }))))))))), import_react28.default.createElement(oe4, null));
}
var Ue = "div";
function We(t15, e5) {
  let o11 = I(), { id: i6 = `headlessui-dialog-overlay-${o11}`, ...n6 } = t15, [{ dialogState: l11, close: s13 }] = b3("Dialog.Overlay"), g5 = y2(e5), T6 = o4((a12) => {
    if (a12.target === a12.currentTarget) {
      if (r3(a12.currentTarget))
        return a12.preventDefault();
      a12.preventDefault(), a12.stopPropagation(), s13();
    }
  }), m10 = (0, import_react28.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return X({ ourProps: { ref: g5, id: i6, "aria-hidden": true, onClick: T6 }, theirProps: n6, slot: m10, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e(t15, e5) {
  let o11 = I(), { id: i6 = `headlessui-dialog-backdrop-${o11}`, ...n6 } = t15, [{ dialogState: l11 }, s13] = b3("Dialog.Backdrop"), g5 = y2(e5);
  (0, import_react28.useEffect)(() => {
    if (s13.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s13.panelRef]);
  let T6 = (0, import_react28.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return import_react28.default.createElement(P2, { force: true }, import_react28.default.createElement(pe, null, X({ ourProps: { ref: g5, id: i6, "aria-hidden": true }, theirProps: n6, slot: T6, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t15, e5) {
  let o11 = I(), { id: i6 = `headlessui-dialog-panel-${o11}`, ...n6 } = t15, [{ dialogState: l11 }, s13] = b3("Dialog.Panel"), g5 = y2(e5, s13.panelRef), T6 = (0, import_react28.useMemo)(() => ({ open: l11 === 0 }), [l11]), m10 = o4((a12) => {
    a12.stopPropagation();
  });
  return X({ ourProps: { ref: g5, id: i6, onClick: m10 }, theirProps: n6, slot: T6, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t15, e5) {
  let o11 = I(), { id: i6 = `headlessui-dialog-title-${o11}`, ...n6 } = t15, [{ dialogState: l11, setTitleId: s13 }] = b3("Dialog.Title"), g5 = y2(e5);
  (0, import_react28.useEffect)(() => (s13(i6), () => s13(null)), [i6, s13]);
  let T6 = (0, import_react28.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return X({ ourProps: { ref: g5, id: i6 }, theirProps: n6, slot: T6, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D2(Ne);
var qe = D2($e);
var ze = D2(Xe);
var Qe = D2(We);
var Ze = D2(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b2 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react30 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react29 = __toESM(require_react(), 1);
var t14;
var a10 = (t14 = import_react29.default.startTransition) != null ? t14 : function(i6) {
  i6();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(q || {});
var z2 = ((t15) => (t15[t15.ToggleDisclosure = 0] = "ToggleDisclosure", t15[t15.CloseDisclosure = 1] = "CloseDisclosure", t15[t15.SetButtonId = 2] = "SetButtonId", t15[t15.SetPanelId = 3] = "SetPanelId", t15[t15.LinkPanel = 4] = "LinkPanel", t15[t15.UnlinkPanel = 5] = "UnlinkPanel", t15))(z2 || {});
var Q2 = { [0]: (e5) => ({ ...e5, disclosureState: u(e5.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e5) => e5.disclosureState === 1 ? e5 : { ...e5, disclosureState: 1 }, [4](e5) {
  return e5.linkedPanel === true ? e5 : { ...e5, linkedPanel: true };
}, [5](e5) {
  return e5.linkedPanel === false ? e5 : { ...e5, linkedPanel: false };
}, [2](e5, n6) {
  return e5.buttonId === n6.buttonId ? e5 : { ...e5, buttonId: n6.buttonId };
}, [3](e5, n6) {
  return e5.panelId === n6.panelId ? e5 : { ...e5, panelId: n6.panelId };
} };
var k = (0, import_react30.createContext)(null);
k.displayName = "DisclosureContext";
function M4(e5) {
  let n6 = (0, import_react30.useContext)(k);
  if (n6 === null) {
    let o11 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, M4), o11;
  }
  return n6;
}
var v2 = (0, import_react30.createContext)(null);
v2.displayName = "DisclosureAPIContext";
function w4(e5) {
  let n6 = (0, import_react30.useContext)(v2);
  if (n6 === null) {
    let o11 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, w4), o11;
  }
  return n6;
}
var H4 = (0, import_react30.createContext)(null);
H4.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react30.useContext)(H4);
}
function Y2(e5, n6) {
  return u(n6.type, Q2, e5, n6);
}
var Z2 = import_react30.Fragment;
function ee(e5, n6) {
  let { defaultOpen: o11 = false, ...u9 } = e5, T6 = (0, import_react30.useRef)(null), l11 = y2(n6, T2((a12) => {
    T6.current = a12;
  }, e5.as === void 0 || e5.as === import_react30.Fragment)), t15 = (0, import_react30.useRef)(null), f9 = (0, import_react30.useRef)(null), s13 = (0, import_react30.useReducer)(Y2, { disclosureState: o11 ? 0 : 1, linkedPanel: false, buttonRef: f9, panelRef: t15, buttonId: null, panelId: null }), [{ disclosureState: i6, buttonId: c14 }, D6] = s13, d12 = o4((a12) => {
    D6({ type: 1 });
    let r9 = e(T6);
    if (!r9 || !c14)
      return;
    let p8 = (() => a12 ? a12 instanceof HTMLElement ? a12 : a12.current instanceof HTMLElement ? a12.current : r9.getElementById(c14) : r9.getElementById(c14))();
    p8 == null || p8.focus();
  }), P4 = (0, import_react30.useMemo)(() => ({ close: d12 }), [d12]), b5 = (0, import_react30.useMemo)(() => ({ open: i6 === 0, close: d12 }), [i6, d12]), y8 = { ref: l11 };
  return import_react30.default.createElement(k.Provider, { value: s13 }, import_react30.default.createElement(v2.Provider, { value: P4 }, import_react30.default.createElement(c6, { value: u(i6, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: y8, theirProps: u9, slot: b5, defaultTag: Z2, name: "Disclosure" }))));
}
var te = "button";
function ne(e5, n6) {
  let o11 = I(), { id: u9 = `headlessui-disclosure-button-${o11}`, ...T6 } = e5, [l11, t15] = M4("Disclosure.Button"), f9 = V(), s13 = f9 === null ? false : f9 === l11.panelId, i6 = (0, import_react30.useRef)(null), c14 = y2(i6, n6, s13 ? null : l11.buttonRef);
  (0, import_react30.useEffect)(() => {
    if (!s13)
      return t15({ type: 2, buttonId: u9 }), () => {
        t15({ type: 2, buttonId: null });
      };
  }, [u9, t15, s13]);
  let D6 = o4((r9) => {
    var p8;
    if (s13) {
      if (l11.disclosureState === 1)
        return;
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), r9.stopPropagation(), t15({ type: 0 }), (p8 = l11.buttonRef.current) == null || p8.focus();
          break;
      }
    } else
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), r9.stopPropagation(), t15({ type: 0 });
          break;
      }
  }), d12 = o4((r9) => {
    switch (r9.key) {
      case o8.Space:
        r9.preventDefault();
        break;
    }
  }), P4 = o4((r9) => {
    var p8;
    r3(r9.currentTarget) || e5.disabled || (s13 ? (t15({ type: 0 }), (p8 = l11.buttonRef.current) == null || p8.focus()) : t15({ type: 0 }));
  }), b5 = (0, import_react30.useMemo)(() => ({ open: l11.disclosureState === 0 }), [l11]), y8 = s5(e5, i6), a12 = s13 ? { ref: c14, type: y8, onKeyDown: D6, onClick: P4 } : { ref: c14, id: u9, type: y8, "aria-expanded": e5.disabled ? void 0 : l11.disclosureState === 0, "aria-controls": l11.linkedPanel ? l11.panelId : void 0, onKeyDown: D6, onKeyUp: d12, onClick: P4 };
  return X({ ourProps: a12, theirProps: T6, slot: b5, defaultTag: te, name: "Disclosure.Button" });
}
var le = "div";
var oe = S2.RenderStrategy | S2.Static;
function re(e5, n6) {
  let o11 = I(), { id: u9 = `headlessui-disclosure-panel-${o11}`, ...T6 } = e5, [l11, t15] = M4("Disclosure.Panel"), { close: f9 } = w4("Disclosure.Panel"), s13 = y2(n6, l11.panelRef, (P4) => {
    a10(() => t15({ type: P4 ? 4 : 5 }));
  });
  (0, import_react30.useEffect)(() => (t15({ type: 3, panelId: u9 }), () => {
    t15({ type: 3, panelId: null });
  }), [u9, t15]);
  let i6 = C(), c14 = (() => i6 !== null ? (i6 & d5.Open) === d5.Open : l11.disclosureState === 0)(), D6 = (0, import_react30.useMemo)(() => ({ open: l11.disclosureState === 0, close: f9 }), [l11, f9]), d12 = { ref: s13, id: u9 };
  return import_react30.default.createElement(H4.Provider, { value: l11.panelId }, X({ ourProps: d12, theirProps: T6, slot: D6, defaultTag: le, features: oe, visible: c14, name: "Disclosure.Panel" }));
}
var se = D2(ee);
var ue = D2(ne);
var ie = D2(re);
var ve = Object.assign(se, { Button: ue, Panel: ie });

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a11 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o10(e5) {
  var r9, i6;
  let n6 = (r9 = e5.innerText) != null ? r9 : "", t15 = e5.cloneNode(true);
  if (!(t15 instanceof HTMLElement))
    return n6;
  let u9 = false;
  for (let f9 of t15.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f9.remove(), u9 = true;
  let l11 = u9 ? (i6 = t15.innerText) != null ? i6 : "" : n6;
  return a11.test(l11) && (l11 = l11.replace(a11, "")), l11;
}
function g4(e5) {
  let n6 = e5.getAttribute("aria-label");
  if (typeof n6 == "string")
    return n6.trim();
  let t15 = e5.getAttribute("aria-labelledby");
  if (t15) {
    let u9 = t15.split(" ").map((l11) => {
      let r9 = document.getElementById(l11);
      if (r9) {
        let i6 = r9.getAttribute("aria-label");
        return typeof i6 == "string" ? i6.trim() : o10(r9).trim();
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
  let t15 = (0, import_react31.useRef)(""), r9 = (0, import_react31.useRef)("");
  return o4(() => {
    let e5 = c14.current;
    if (!e5)
      return "";
    let u9 = e5.innerText;
    if (t15.current === u9)
      return r9.current;
    let n6 = g4(e5).trim().toLowerCase();
    return t15.current = u9, r9.current = n6, n6;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react32 = __toESM(require_react(), 1);
var me2 = ((r9) => (r9[r9.Open = 0] = "Open", r9[r9.Closed = 1] = "Closed", r9))(me2 || {});
var de = ((r9) => (r9[r9.Pointer = 0] = "Pointer", r9[r9.Other = 1] = "Other", r9))(de || {});
var fe = ((a12) => (a12[a12.OpenMenu = 0] = "OpenMenu", a12[a12.CloseMenu = 1] = "CloseMenu", a12[a12.GoToItem = 2] = "GoToItem", a12[a12.Search = 3] = "Search", a12[a12.ClearSearch = 4] = "ClearSearch", a12[a12.RegisterItem = 5] = "RegisterItem", a12[a12.UnregisterItem = 6] = "UnregisterItem", a12))(fe || {});
function w5(e5, u9 = (r9) => r9) {
  let r9 = e5.activeItemIndex !== null ? e5.items[e5.activeItemIndex] : null, i6 = I2(u9(e5.items.slice()), (t15) => t15.dataRef.current.domRef.current), s13 = r9 ? i6.indexOf(r9) : null;
  return s13 === -1 && (s13 = null), { items: i6, activeItemIndex: s13 };
}
var Te = { [1](e5) {
  return e5.menuState === 1 ? e5 : { ...e5, activeItemIndex: null, menuState: 1 };
}, [0](e5) {
  return e5.menuState === 0 ? e5 : { ...e5, __demoMode: false, menuState: 0 };
}, [2]: (e5, u9) => {
  var s13;
  let r9 = w5(e5), i6 = x(u9, { resolveItems: () => r9.items, resolveActiveIndex: () => r9.activeItemIndex, resolveId: (t15) => t15.id, resolveDisabled: (t15) => t15.dataRef.current.disabled });
  return { ...e5, ...r9, searchQuery: "", activeItemIndex: i6, activationTrigger: (s13 = u9.trigger) != null ? s13 : 1 };
}, [3]: (e5, u9) => {
  let i6 = e5.searchQuery !== "" ? 0 : 1, s13 = e5.searchQuery + u9.value.toLowerCase(), o11 = (e5.activeItemIndex !== null ? e5.items.slice(e5.activeItemIndex + i6).concat(e5.items.slice(0, e5.activeItemIndex + i6)) : e5.items).find((l11) => {
    var m10;
    return ((m10 = l11.dataRef.current.textValue) == null ? void 0 : m10.startsWith(s13)) && !l11.dataRef.current.disabled;
  }), a12 = o11 ? e5.items.indexOf(o11) : -1;
  return a12 === -1 || a12 === e5.activeItemIndex ? { ...e5, searchQuery: s13 } : { ...e5, searchQuery: s13, activeItemIndex: a12, activationTrigger: 1 };
}, [4](e5) {
  return e5.searchQuery === "" ? e5 : { ...e5, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e5, u9) => {
  let r9 = w5(e5, (i6) => [...i6, { id: u9.id, dataRef: u9.dataRef }]);
  return { ...e5, ...r9 };
}, [6]: (e5, u9) => {
  let r9 = w5(e5, (i6) => {
    let s13 = i6.findIndex((t15) => t15.id === u9.id);
    return s13 !== -1 && i6.splice(s13, 1), i6;
  });
  return { ...e5, ...r9, activationTrigger: 1 };
} };
var U2 = (0, import_react32.createContext)(null);
U2.displayName = "MenuContext";
function O2(e5) {
  let u9 = (0, import_react32.useContext)(U2);
  if (u9 === null) {
    let r9 = new Error(`<${e5} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r9, O2), r9;
  }
  return u9;
}
function ye2(e5, u9) {
  return u(u9.type, Te, e5, u9);
}
var Ie2 = import_react32.Fragment;
function Me2(e5, u9) {
  let { __demoMode: r9 = false, ...i6 } = e5, s13 = (0, import_react32.useReducer)(ye2, { __demoMode: r9, menuState: r9 ? 0 : 1, buttonRef: (0, import_react32.createRef)(), itemsRef: (0, import_react32.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t15, itemsRef: o11, buttonRef: a12 }, l11] = s13, m10 = y2(u9);
  H2([a12, o11], (g5, R3) => {
    var p8;
    l11({ type: 1 }), h(R3, T.Loose) || (g5.preventDefault(), (p8 = a12.current) == null || p8.focus());
  }, t15 === 0);
  let I7 = o4(() => {
    l11({ type: 1 });
  }), A = (0, import_react32.useMemo)(() => ({ open: t15 === 0, close: I7 }), [t15, I7]), f9 = { ref: m10 };
  return import_react32.default.createElement(U2.Provider, { value: s13 }, import_react32.default.createElement(c6, { value: u(t15, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: f9, theirProps: i6, slot: A, defaultTag: Ie2, name: "Menu" })));
}
var ge2 = "button";
function Re(e5, u9) {
  var R3;
  let r9 = I(), { id: i6 = `headlessui-menu-button-${r9}`, ...s13 } = e5, [t15, o11] = O2("Menu.Button"), a12 = y2(t15.buttonRef, u9), l11 = p(), m10 = o4((p8) => {
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
  }), I7 = o4((p8) => {
    switch (p8.key) {
      case o8.Space:
        p8.preventDefault();
        break;
    }
  }), A = o4((p8) => {
    if (r3(p8.currentTarget))
      return p8.preventDefault();
    e5.disabled || (t15.menuState === 0 ? (o11({ type: 1 }), l11.nextFrame(() => {
      var M6;
      return (M6 = t15.buttonRef.current) == null ? void 0 : M6.focus({ preventScroll: true });
    })) : (p8.preventDefault(), o11({ type: 0 })));
  }), f9 = (0, import_react32.useMemo)(() => ({ open: t15.menuState === 0 }), [t15]), g5 = { ref: a12, id: i6, type: s5(e5, t15.buttonRef), "aria-haspopup": "menu", "aria-controls": (R3 = t15.itemsRef.current) == null ? void 0 : R3.id, "aria-expanded": e5.disabled ? void 0 : t15.menuState === 0, onKeyDown: m10, onKeyUp: I7, onClick: A };
  return X({ ourProps: g5, theirProps: s13, slot: f9, defaultTag: ge2, name: "Menu.Button" });
}
var Ae = "div";
var be = S2.RenderStrategy | S2.Static;
function Ee(e5, u9) {
  var M6, b5;
  let r9 = I(), { id: i6 = `headlessui-menu-items-${r9}`, ...s13 } = e5, [t15, o11] = O2("Menu.Items"), a12 = y2(t15.itemsRef, u9), l11 = n3(t15.itemsRef), m10 = p(), I7 = C(), A = (() => I7 !== null ? (I7 & d5.Open) === d5.Open : t15.menuState === 0)();
  (0, import_react32.useEffect)(() => {
    let n6 = t15.itemsRef.current;
    n6 && t15.menuState === 0 && n6 !== (l11 == null ? void 0 : l11.activeElement) && n6.focus({ preventScroll: true });
  }, [t15.menuState, t15.itemsRef, l11]), F2({ container: t15.itemsRef.current, enabled: t15.menuState === 0, accept(n6) {
    return n6.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n6) {
    n6.setAttribute("role", "none");
  } });
  let f9 = o4((n6) => {
    var E7, P4;
    switch (m10.dispose(), n6.key) {
      case o8.Space:
        if (t15.searchQuery !== "")
          return n6.preventDefault(), n6.stopPropagation(), o11({ type: 3, value: n6.key });
      case o8.Enter:
        if (n6.preventDefault(), n6.stopPropagation(), o11({ type: 1 }), t15.activeItemIndex !== null) {
          let { dataRef: S8 } = t15.items[t15.activeItemIndex];
          (P4 = (E7 = S8.current) == null ? void 0 : E7.domRef.current) == null || P4.click();
        }
        D(t15.buttonRef.current);
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
          var S8;
          return (S8 = t15.buttonRef.current) == null ? void 0 : S8.focus({ preventScroll: true });
        });
        break;
      case o8.Tab:
        n6.preventDefault(), n6.stopPropagation(), o11({ type: 1 }), o2().nextFrame(() => {
          _(t15.buttonRef.current, n6.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n6.key.length === 1 && (o11({ type: 3, value: n6.key }), m10.setTimeout(() => o11({ type: 4 }), 350));
        break;
    }
  }), g5 = o4((n6) => {
    switch (n6.key) {
      case o8.Space:
        n6.preventDefault();
        break;
    }
  }), R3 = (0, import_react32.useMemo)(() => ({ open: t15.menuState === 0 }), [t15]), p8 = { "aria-activedescendant": t15.activeItemIndex === null || (M6 = t15.items[t15.activeItemIndex]) == null ? void 0 : M6.id, "aria-labelledby": (b5 = t15.buttonRef.current) == null ? void 0 : b5.id, id: i6, onKeyDown: f9, onKeyUp: g5, role: "menu", tabIndex: 0, ref: a12 };
  return X({ ourProps: p8, theirProps: s13, slot: R3, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react32.Fragment;
function Pe2(e5, u9) {
  let r9 = I(), { id: i6 = `headlessui-menu-item-${r9}`, disabled: s13 = false, ...t15 } = e5, [o11, a12] = O2("Menu.Item"), l11 = o11.activeItemIndex !== null ? o11.items[o11.activeItemIndex].id === i6 : false, m10 = (0, import_react32.useRef)(null), I7 = y2(u9, m10);
  l(() => {
    if (o11.__demoMode || o11.menuState !== 0 || !l11 || o11.activationTrigger === 0)
      return;
    let T6 = o2();
    return T6.requestAnimationFrame(() => {
      var v4, B;
      (B = (v4 = m10.current) == null ? void 0 : v4.scrollIntoView) == null || B.call(v4, { block: "nearest" });
    }), T6.dispose;
  }, [o11.__demoMode, m10, l11, o11.menuState, o11.activationTrigger, o11.activeItemIndex]);
  let A = b4(m10), f9 = (0, import_react32.useRef)({ disabled: s13, domRef: m10, get textValue() {
    return A();
  } });
  l(() => {
    f9.current.disabled = s13;
  }, [f9, s13]), l(() => (a12({ type: 5, id: i6, dataRef: f9 }), () => a12({ type: 6, id: i6 })), [f9, i6]);
  let g5 = o4(() => {
    a12({ type: 1 });
  }), R3 = o4((T6) => {
    if (s13)
      return T6.preventDefault();
    a12({ type: 1 }), D(o11.buttonRef.current);
  }), p8 = o4(() => {
    if (s13)
      return a12({ type: 2, focus: a2.Nothing });
    a12({ type: 2, focus: a2.Specific, id: i6 });
  }), M6 = u3(), b5 = o4((T6) => M6.update(T6)), n6 = o4((T6) => {
    M6.wasMoved(T6) && (s13 || l11 || a12({ type: 2, focus: a2.Specific, id: i6, trigger: 0 }));
  }), E7 = o4((T6) => {
    M6.wasMoved(T6) && (s13 || l11 && a12({ type: 2, focus: a2.Nothing }));
  }), P4 = (0, import_react32.useMemo)(() => ({ active: l11, disabled: s13, close: g5 }), [l11, s13, g5]);
  return X({ ourProps: { id: i6, ref: I7, role: "menuitem", tabIndex: s13 === true ? void 0 : -1, "aria-disabled": s13 === true ? true : void 0, disabled: void 0, onClick: R3, onFocus: p8, onPointerEnter: b5, onMouseEnter: b5, onPointerMove: n6, onMouseMove: n6, onPointerLeave: E7, onMouseLeave: E7 }, theirProps: t15, slot: P4, defaultTag: Se, name: "Menu.Item" });
}
var ve2 = D2(Me2);
var xe = D2(Re);
var he = D2(Ee);
var De2 = D2(Pe2);
var it = Object.assign(ve2, { Button: xe, Items: he, Item: De2 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react33 = __toESM(require_react(), 1);
var De3 = ((u9) => (u9[u9.Open = 0] = "Open", u9[u9.Closed = 1] = "Closed", u9))(De3 || {});
var he2 = ((e5) => (e5[e5.TogglePopover = 0] = "TogglePopover", e5[e5.ClosePopover = 1] = "ClosePopover", e5[e5.SetButton = 2] = "SetButton", e5[e5.SetButtonId = 3] = "SetButtonId", e5[e5.SetPanel = 4] = "SetPanel", e5[e5.SetPanelId = 5] = "SetPanelId", e5))(he2 || {});
var He2 = { [0]: (t15) => {
  let o11 = { ...t15, popoverState: u(t15.popoverState, { [0]: 1, [1]: 0 }) };
  return o11.popoverState === 0 && (o11.__demoMode = false), o11;
}, [1](t15) {
  return t15.popoverState === 1 ? t15 : { ...t15, popoverState: 1 };
}, [2](t15, o11) {
  return t15.button === o11.button ? t15 : { ...t15, button: o11.button };
}, [3](t15, o11) {
  return t15.buttonId === o11.buttonId ? t15 : { ...t15, buttonId: o11.buttonId };
}, [4](t15, o11) {
  return t15.panel === o11.panel ? t15 : { ...t15, panel: o11.panel };
}, [5](t15, o11) {
  return t15.panelId === o11.panelId ? t15 : { ...t15, panelId: o11.panelId };
} };
var ue2 = (0, import_react33.createContext)(null);
ue2.displayName = "PopoverContext";
function oe2(t15) {
  let o11 = (0, import_react33.useContext)(ue2);
  if (o11 === null) {
    let u9 = new Error(`<${t15} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u9, oe2), u9;
  }
  return o11;
}
var ie2 = (0, import_react33.createContext)(null);
ie2.displayName = "PopoverAPIContext";
function fe2(t15) {
  let o11 = (0, import_react33.useContext)(ie2);
  if (o11 === null) {
    let u9 = new Error(`<${t15} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u9, fe2), u9;
  }
  return o11;
}
var Pe3 = (0, import_react33.createContext)(null);
Pe3.displayName = "PopoverGroupContext";
function Ee2() {
  return (0, import_react33.useContext)(Pe3);
}
var re2 = (0, import_react33.createContext)(null);
re2.displayName = "PopoverPanelContext";
function _e2() {
  return (0, import_react33.useContext)(re2);
}
function Ge2(t15, o11) {
  return u(o11.type, He2, t15, o11);
}
var ke = "div";
function we2(t15, o11) {
  var I7;
  let { __demoMode: u9 = false, ...A } = t15, O3 = (0, import_react33.useRef)(null), n6 = y2(o11, T2((l11) => {
    O3.current = l11;
  })), e5 = (0, import_react33.useRef)([]), T6 = (0, import_react33.useReducer)(Ge2, { __demoMode: u9, popoverState: u9 ? 0 : 1, buttons: e5, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react33.createRef)(), afterPanelSentinel: (0, import_react33.createRef)() }), [{ popoverState: P4, button: p8, buttonId: F6, panel: a12, panelId: m10, beforePanelSentinel: y8, afterPanelSentinel: s13 }, i6] = T6, d12 = n3((I7 = O3.current) != null ? I7 : p8), g5 = (0, import_react33.useMemo)(() => {
    if (!p8 || !a12)
      return false;
    for (let K3 of document.querySelectorAll("body > *"))
      if (Number(K3 == null ? void 0 : K3.contains(p8)) ^ Number(K3 == null ? void 0 : K3.contains(a12)))
        return true;
    let l11 = f(), R3 = l11.indexOf(p8), q3 = (R3 + l11.length - 1) % l11.length, W2 = (R3 + 1) % l11.length, z5 = l11[q3], ge3 = l11[W2];
    return !a12.contains(z5) && !a12.contains(ge3);
  }, [p8, a12]), L2 = s2(F6), h8 = s2(m10), _3 = (0, import_react33.useMemo)(() => ({ buttonId: L2, panelId: h8, close: () => i6({ type: 1 }) }), [L2, h8, i6]), B = Ee2(), D6 = B == null ? void 0 : B.registerPopover, f9 = o4(() => {
    var l11;
    return (l11 = B == null ? void 0 : B.isFocusWithinPopoverGroup()) != null ? l11 : (d12 == null ? void 0 : d12.activeElement) && ((p8 == null ? void 0 : p8.contains(d12.activeElement)) || (a12 == null ? void 0 : a12.contains(d12.activeElement)));
  });
  (0, import_react33.useEffect)(() => D6 == null ? void 0 : D6(_3), [D6, _3]);
  let [E7, b5] = ae(), c14 = p7({ portals: E7, defaultContainers: [p8, a12] });
  E3(d12 == null ? void 0 : d12.defaultView, "focus", (l11) => {
    var R3, q3, W2, z5;
    l11.target !== window && l11.target instanceof HTMLElement && P4 === 0 && (f9() || p8 && a12 && (c14.contains(l11.target) || (q3 = (R3 = y8.current) == null ? void 0 : R3.contains) != null && q3.call(R3, l11.target) || (z5 = (W2 = s13.current) == null ? void 0 : W2.contains) != null && z5.call(W2, l11.target) || i6({ type: 1 })));
  }, true), H2(c14.resolveContainers, (l11, R3) => {
    i6({ type: 1 }), h(R3, T.Loose) || (l11.preventDefault(), p8 == null || p8.focus());
  }, P4 === 0);
  let M6 = o4((l11) => {
    i6({ type: 1 });
    let R3 = (() => l11 ? l11 instanceof HTMLElement ? l11 : "current" in l11 && l11.current instanceof HTMLElement ? l11.current : p8 : p8)();
    R3 == null || R3.focus();
  }), r9 = (0, import_react33.useMemo)(() => ({ close: M6, isPortalled: g5 }), [M6, g5]), v4 = (0, import_react33.useMemo)(() => ({ open: P4 === 0, close: M6 }), [P4, M6]), x6 = { ref: n6 };
  return import_react33.default.createElement(re2.Provider, { value: null }, import_react33.default.createElement(ue2.Provider, { value: T6 }, import_react33.default.createElement(ie2.Provider, { value: r9 }, import_react33.default.createElement(c6, { value: u(P4, { [0]: d5.Open, [1]: d5.Closed }) }, import_react33.default.createElement(b5, null, X({ ourProps: x6, theirProps: A, slot: v4, defaultTag: ke, name: "Popover" }), import_react33.default.createElement(c14.MainTreeNode, null))))));
}
var Ne2 = "button";
function Ue2(t15, o11) {
  let u9 = I(), { id: A = `headlessui-popover-button-${u9}`, ...O3 } = t15, [n6, e5] = oe2("Popover.Button"), { isPortalled: T6 } = fe2("Popover.Button"), P4 = (0, import_react33.useRef)(null), p8 = `headlessui-focus-sentinel-${I()}`, F6 = Ee2(), a12 = F6 == null ? void 0 : F6.closeOthers, y8 = _e2() !== null;
  (0, import_react33.useEffect)(() => {
    if (!y8)
      return e5({ type: 3, buttonId: A }), () => {
        e5({ type: 3, buttonId: null });
      };
  }, [y8, A, e5]);
  let [s13] = (0, import_react33.useState)(() => Symbol()), i6 = y2(P4, o11, y8 ? null : (r9) => {
    if (r9)
      n6.buttons.current.push(s13);
    else {
      let v4 = n6.buttons.current.indexOf(s13);
      v4 !== -1 && n6.buttons.current.splice(v4, 1);
    }
    n6.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r9 && e5({ type: 2, button: r9 });
  }), d12 = y2(P4, o11), g5 = n3(P4), L2 = o4((r9) => {
    var v4, x6, I7;
    if (y8) {
      if (n6.popoverState === 1)
        return;
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), (x6 = (v4 = r9.target).click) == null || x6.call(v4), e5({ type: 1 }), (I7 = n6.button) == null || I7.focus();
          break;
      }
    } else
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), r9.stopPropagation(), n6.popoverState === 1 && (a12 == null || a12(n6.buttonId)), e5({ type: 0 });
          break;
        case o8.Escape:
          if (n6.popoverState !== 0)
            return a12 == null ? void 0 : a12(n6.buttonId);
          if (!P4.current || g5 != null && g5.activeElement && !P4.current.contains(g5.activeElement))
            return;
          r9.preventDefault(), r9.stopPropagation(), e5({ type: 1 });
          break;
      }
  }), h8 = o4((r9) => {
    y8 || r9.key === o8.Space && r9.preventDefault();
  }), _3 = o4((r9) => {
    var v4, x6;
    r3(r9.currentTarget) || t15.disabled || (y8 ? (e5({ type: 1 }), (v4 = n6.button) == null || v4.focus()) : (r9.preventDefault(), r9.stopPropagation(), n6.popoverState === 1 && (a12 == null || a12(n6.buttonId)), e5({ type: 0 }), (x6 = n6.button) == null || x6.focus()));
  }), B = o4((r9) => {
    r9.preventDefault(), r9.stopPropagation();
  }), D6 = n6.popoverState === 0, f9 = (0, import_react33.useMemo)(() => ({ open: D6 }), [D6]), E7 = s5(t15, P4), b5 = y8 ? { ref: d12, type: E7, onKeyDown: L2, onClick: _3 } : { ref: i6, id: n6.buttonId, type: E7, "aria-expanded": t15.disabled ? void 0 : n6.popoverState === 0, "aria-controls": n6.panel ? n6.panelId : void 0, onKeyDown: L2, onKeyUp: h8, onClick: _3, onMouseDown: B }, c14 = n2(), M6 = o4(() => {
    let r9 = n6.panel;
    if (!r9)
      return;
    function v4() {
      u(c14.current, { [s8.Forwards]: () => O(r9, M.First), [s8.Backwards]: () => O(r9, M.Last) }) === N.Error && O(f().filter((I7) => I7.dataset.headlessuiFocusGuard !== "true"), u(c14.current, { [s8.Forwards]: M.Next, [s8.Backwards]: M.Previous }), { relativeTo: n6.button });
    }
    v4();
  });
  return import_react33.default.createElement(import_react33.default.Fragment, null, X({ ourProps: b5, theirProps: O3, slot: f9, defaultTag: Ne2, name: "Popover.Button" }), D6 && !y8 && T6 && import_react33.default.createElement(c5, { id: p8, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: M6 }));
}
var We2 = "div";
var Ke2 = S2.RenderStrategy | S2.Static;
function je2(t15, o11) {
  let u9 = I(), { id: A = `headlessui-popover-overlay-${u9}`, ...O3 } = t15, [{ popoverState: n6 }, e5] = oe2("Popover.Overlay"), T6 = y2(o11), P4 = C(), p8 = (() => P4 !== null ? (P4 & d5.Open) === d5.Open : n6 === 0)(), F6 = o4((y8) => {
    if (r3(y8.currentTarget))
      return y8.preventDefault();
    e5({ type: 1 });
  }), a12 = (0, import_react33.useMemo)(() => ({ open: n6 === 0 }), [n6]);
  return X({ ourProps: { ref: T6, id: A, "aria-hidden": true, onClick: F6 }, theirProps: O3, slot: a12, defaultTag: We2, features: Ke2, visible: p8, name: "Popover.Overlay" });
}
var Ve2 = "div";
var $e2 = S2.RenderStrategy | S2.Static;
function Je2(t15, o11) {
  let u9 = I(), { id: A = `headlessui-popover-panel-${u9}`, focus: O3 = false, ...n6 } = t15, [e5, T6] = oe2("Popover.Panel"), { close: P4, isPortalled: p8 } = fe2("Popover.Panel"), F6 = `headlessui-focus-sentinel-before-${I()}`, a12 = `headlessui-focus-sentinel-after-${I()}`, m10 = (0, import_react33.useRef)(null), y8 = y2(m10, o11, (f9) => {
    T6({ type: 4, panel: f9 });
  }), s13 = n3(m10);
  l(() => (T6({ type: 5, panelId: A }), () => {
    T6({ type: 5, panelId: null });
  }), [A, T6]);
  let i6 = C(), d12 = (() => i6 !== null ? (i6 & d5.Open) === d5.Open : e5.popoverState === 0)(), g5 = o4((f9) => {
    var E7;
    switch (f9.key) {
      case o8.Escape:
        if (e5.popoverState !== 0 || !m10.current || s13 != null && s13.activeElement && !m10.current.contains(s13.activeElement))
          return;
        f9.preventDefault(), f9.stopPropagation(), T6({ type: 1 }), (E7 = e5.button) == null || E7.focus();
        break;
    }
  });
  (0, import_react33.useEffect)(() => {
    var f9;
    t15.static || e5.popoverState === 1 && ((f9 = t15.unmount) == null || f9) && T6({ type: 4, panel: null });
  }, [e5.popoverState, t15.unmount, t15.static, T6]), (0, import_react33.useEffect)(() => {
    if (e5.__demoMode || !O3 || e5.popoverState !== 0 || !m10.current)
      return;
    let f9 = s13 == null ? void 0 : s13.activeElement;
    m10.current.contains(f9) || O(m10.current, M.First);
  }, [e5.__demoMode, O3, m10, e5.popoverState]);
  let L2 = (0, import_react33.useMemo)(() => ({ open: e5.popoverState === 0, close: P4 }), [e5, P4]), h8 = { ref: y8, id: A, onKeyDown: g5, onBlur: O3 && e5.popoverState === 0 ? (f9) => {
    var b5, c14, M6, r9, v4;
    let E7 = f9.relatedTarget;
    E7 && m10.current && ((b5 = m10.current) != null && b5.contains(E7) || (T6({ type: 1 }), ((M6 = (c14 = e5.beforePanelSentinel.current) == null ? void 0 : c14.contains) != null && M6.call(c14, E7) || (v4 = (r9 = e5.afterPanelSentinel.current) == null ? void 0 : r9.contains) != null && v4.call(r9, E7)) && E7.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, _3 = n2(), B = o4(() => {
    let f9 = m10.current;
    if (!f9)
      return;
    function E7() {
      u(_3.current, { [s8.Forwards]: () => {
        var c14;
        O(f9, M.First) === N.Error && ((c14 = e5.afterPanelSentinel.current) == null || c14.focus());
      }, [s8.Backwards]: () => {
        var b5;
        (b5 = e5.button) == null || b5.focus({ preventScroll: true });
      } });
    }
    E7();
  }), D6 = o4(() => {
    let f9 = m10.current;
    if (!f9)
      return;
    function E7() {
      u(_3.current, { [s8.Forwards]: () => {
        var x6;
        if (!e5.button)
          return;
        let b5 = f(), c14 = b5.indexOf(e5.button), M6 = b5.slice(0, c14 + 1), v4 = [...b5.slice(c14 + 1), ...M6];
        for (let I7 of v4.slice())
          if (I7.dataset.headlessuiFocusGuard === "true" || (x6 = e5.panel) != null && x6.contains(I7)) {
            let l11 = v4.indexOf(I7);
            l11 !== -1 && v4.splice(l11, 1);
          }
        O(v4, M.First, { sorted: false });
      }, [s8.Backwards]: () => {
        var c14;
        O(f9, M.Previous) === N.Error && ((c14 = e5.button) == null || c14.focus());
      } });
    }
    E7();
  });
  return import_react33.default.createElement(re2.Provider, { value: A }, d12 && p8 && import_react33.default.createElement(c5, { id: F6, ref: e5.beforePanelSentinel, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: B }), X({ ourProps: h8, theirProps: n6, slot: L2, defaultTag: Ve2, features: $e2, visible: d12, name: "Popover.Panel" }), d12 && p8 && import_react33.default.createElement(c5, { id: a12, ref: e5.afterPanelSentinel, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: D6 }));
}
var Xe2 = "div";
function Ye2(t15, o11) {
  let u9 = (0, import_react33.useRef)(null), A = y2(u9, o11), [O3, n6] = (0, import_react33.useState)([]), e5 = o4((s13) => {
    n6((i6) => {
      let d12 = i6.indexOf(s13);
      if (d12 !== -1) {
        let g5 = i6.slice();
        return g5.splice(d12, 1), g5;
      }
      return i6;
    });
  }), T6 = o4((s13) => (n6((i6) => [...i6, s13]), () => e5(s13))), P4 = o4(() => {
    var d12;
    let s13 = e(u9);
    if (!s13)
      return false;
    let i6 = s13.activeElement;
    return (d12 = u9.current) != null && d12.contains(i6) ? true : O3.some((g5) => {
      var L2, h8;
      return ((L2 = s13.getElementById(g5.buttonId.current)) == null ? void 0 : L2.contains(i6)) || ((h8 = s13.getElementById(g5.panelId.current)) == null ? void 0 : h8.contains(i6));
    });
  }), p8 = o4((s13) => {
    for (let i6 of O3)
      i6.buttonId.current !== s13 && i6.close();
  }), F6 = (0, import_react33.useMemo)(() => ({ registerPopover: T6, unregisterPopover: e5, isFocusWithinPopoverGroup: P4, closeOthers: p8 }), [T6, e5, P4, p8]), a12 = (0, import_react33.useMemo)(() => ({}), []), m10 = t15, y8 = { ref: A };
  return import_react33.default.createElement(Pe3.Provider, { value: F6 }, X({ ourProps: y8, theirProps: m10, slot: a12, defaultTag: Xe2, name: "Popover.Group" }));
}
var qe2 = D2(we2);
var ze2 = D2(Ue2);
var Qe2 = D2(je2);
var Ze2 = D2(Je2);
var et = D2(Ye2);
var kt = Object.assign(qe2, { Button: ze2, Overlay: Qe2, Panel: Ze2, Group: et });

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react34 = __toESM(require_react(), 1);
function c12(a12 = 0) {
  let [l11, r9] = (0, import_react34.useState)(a12), t15 = f4(), o11 = (0, import_react34.useCallback)((e5) => {
    t15.current && r9((u9) => u9 | e5);
  }, [l11, t15]), m10 = (0, import_react34.useCallback)((e5) => Boolean(l11 & e5), [l11]), s13 = (0, import_react34.useCallback)((e5) => {
    t15.current && r9((u9) => u9 & ~e5);
  }, [r9, t15]), g5 = (0, import_react34.useCallback)((e5) => {
    t15.current && r9((u9) => u9 ^ e5);
  }, [r9]);
  return { flags: l11, addFlag: o11, hasFlag: m10, removeFlag: s13, toggleFlag: g5 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react35 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l10(r9) {
  let e5 = { called: false };
  return (...t15) => {
    if (!e5.called)
      return e5.called = true, r9(...t15);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d11(t15, ...e5) {
  t15 && e5.length > 0 && t15.classList.add(...e5);
}
function v3(t15, ...e5) {
  t15 && e5.length > 0 && t15.classList.remove(...e5);
}
function F5(t15, e5) {
  let n6 = o2();
  if (!t15)
    return n6.dispose;
  let { transitionDuration: m10, transitionDelay: o11 } = getComputedStyle(t15), [u9, p8] = [m10, o11].map((a12) => {
    let [r9 = 0] = a12.split(",").filter(Boolean).map((i6) => i6.includes("ms") ? parseFloat(i6) : parseFloat(i6) * 1e3).sort((i6, f9) => f9 - i6);
    return r9;
  }), l11 = u9 + p8;
  if (l11 !== 0) {
    n6.group((r9) => {
      r9.setTimeout(() => {
        e5(), r9.dispose();
      }, l11), r9.addEventListener(t15, "transitionrun", (i6) => {
        i6.target === i6.currentTarget && r9.dispose();
      });
    });
    let a12 = n6.addEventListener(t15, "transitionend", (r9) => {
      r9.target === r9.currentTarget && (e5(), a12());
    });
  } else
    e5();
  return n6.add(() => e5()), n6.dispose;
}
function y6(t15, e5, n6, m10) {
  let o11 = n6 ? "enter" : "leave", u9 = o2(), p8 = m10 !== void 0 ? l10(m10) : () => {
  };
  o11 === "enter" && (t15.removeAttribute("hidden"), t15.style.display = "");
  let l11 = u(o11, { enter: () => e5.enter, leave: () => e5.leave }), a12 = u(o11, { enter: () => e5.enterTo, leave: () => e5.leaveTo }), r9 = u(o11, { enter: () => e5.enterFrom, leave: () => e5.leaveFrom });
  return v3(t15, ...e5.enter, ...e5.enterTo, ...e5.enterFrom, ...e5.leave, ...e5.leaveFrom, ...e5.leaveTo, ...e5.entered), d11(t15, ...l11, ...r9), u9.nextFrame(() => {
    v3(t15, ...r9), d11(t15, ...a12), F5(t15, () => (v3(t15, ...l11), d11(t15, ...e5.entered), p8()));
  }), u9.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D5({ container: i6, direction: t15, classes: o11, onStart: s13, onStop: u9 }) {
  let a12 = f4(), c14 = p(), r9 = s2(t15);
  l(() => {
    let e5 = o2();
    c14.add(e5.dispose);
    let n6 = i6.current;
    if (n6 && r9.current !== "idle" && a12.current)
      return e5.dispose(), s13.current(r9.current), e5.add(y6(n6, o11.current, r9.current === "enter", () => {
        e5.dispose(), u9.current(r9.current);
      })), e5.dispose;
  }, [t15]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x5(t15 = "") {
  return t15.split(" ").filter((n6) => n6.trim().length > 1);
}
var I6 = (0, import_react35.createContext)(null);
I6.displayName = "TransitionContext";
var Ce = ((r9) => (r9.Visible = "visible", r9.Hidden = "hidden", r9))(Ce || {});
function Ee3() {
  let t15 = (0, import_react35.useContext)(I6);
  if (t15 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t15;
}
function be3() {
  let t15 = (0, import_react35.useContext)(_2);
  if (t15 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t15;
}
var _2 = (0, import_react35.createContext)(null);
_2.displayName = "NestingContext";
function M5(t15) {
  return "children" in t15 ? M5(t15.children) : t15.current.filter(({ el: n6 }) => n6.current !== null).filter(({ state: n6 }) => n6 === "visible").length > 0;
}
function re3(t15, n6) {
  let r9 = s2(t15), o11 = (0, import_react35.useRef)([]), N6 = f4(), H7 = p(), p8 = o4((s13, e5 = j.Hidden) => {
    let a12 = o11.current.findIndex(({ el: i6 }) => i6 === s13);
    a12 !== -1 && (u(e5, { [j.Unmount]() {
      o11.current.splice(a12, 1);
    }, [j.Hidden]() {
      o11.current[a12].state = "hidden";
    } }), H7.microTask(() => {
      var i6;
      !M5(o11) && N6.current && ((i6 = r9.current) == null || i6.call(r9));
    }));
  }), P4 = o4((s13) => {
    let e5 = o11.current.find(({ el: a12 }) => a12 === s13);
    return e5 ? e5.state !== "visible" && (e5.state = "visible") : o11.current.push({ el: s13, state: "visible" }), () => p8(s13, j.Unmount);
  }), h8 = (0, import_react35.useRef)([]), v4 = (0, import_react35.useRef)(Promise.resolve()), T6 = (0, import_react35.useRef)({ enter: [], leave: [], idle: [] }), g5 = o4((s13, e5, a12) => {
    h8.current.splice(0), n6 && (n6.chains.current[e5] = n6.chains.current[e5].filter(([i6]) => i6 !== s13)), n6 == null || n6.chains.current[e5].push([s13, new Promise((i6) => {
      h8.current.push(i6);
    })]), n6 == null || n6.chains.current[e5].push([s13, new Promise((i6) => {
      Promise.all(T6.current[e5].map(([l11, R3]) => R3)).then(() => i6());
    })]), e5 === "enter" ? v4.current = v4.current.then(() => n6 == null ? void 0 : n6.wait.current).then(() => a12(e5)) : a12(e5);
  }), f9 = o4((s13, e5, a12) => {
    Promise.all(T6.current[e5].splice(0).map(([i6, l11]) => l11)).then(() => {
      var i6;
      (i6 = h8.current.shift()) == null || i6();
    }).then(() => a12(e5));
  });
  return (0, import_react35.useMemo)(() => ({ children: o11, register: P4, unregister: p8, onStart: g5, onStop: f9, wait: v4, chains: T6 }), [P4, p8, o11, g5, f9, T6, v4]);
}
function Se2() {
}
var xe2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie3(t15) {
  var r9;
  let n6 = {};
  for (let o11 of xe2)
    n6[o11] = (r9 = t15[o11]) != null ? r9 : Se2;
  return n6;
}
function Pe4(t15) {
  let n6 = (0, import_react35.useRef)(ie3(t15));
  return (0, import_react35.useEffect)(() => {
    n6.current = ie3(t15);
  }, [t15]), n6;
}
var Re2 = "div";
var oe3 = S2.RenderStrategy;
function ye3(t15, n6) {
  let { beforeEnter: r9, afterEnter: o11, beforeLeave: N6, afterLeave: H7, enter: p8, enterFrom: P4, enterTo: h8, entered: v4, leave: T6, leaveFrom: g5, leaveTo: f9, ...s13 } = t15, e5 = (0, import_react35.useRef)(null), a12 = y2(e5, n6), i6 = s13.unmount ? j.Unmount : j.Hidden, { show: l11, appear: R3, initial: d12 } = Ee3(), [u9, U3] = (0, import_react35.useState)(l11 ? "visible" : "hidden"), K3 = be3(), { register: L2, unregister: w6 } = K3, j4 = (0, import_react35.useRef)(null);
  (0, import_react35.useEffect)(() => L2(e5), [L2, e5]), (0, import_react35.useEffect)(() => {
    if (i6 === j.Hidden && e5.current) {
      if (l11 && u9 !== "visible") {
        U3("visible");
        return;
      }
      return u(u9, { ["hidden"]: () => w6(e5), ["visible"]: () => L2(e5) });
    }
  }, [u9, e5, L2, w6, l11, i6]);
  let k2 = s2({ enter: x5(p8), enterFrom: x5(P4), enterTo: x5(h8), entered: x5(v4), leave: x5(T6), leaveFrom: x5(g5), leaveTo: x5(f9) }), O3 = Pe4({ beforeEnter: r9, afterEnter: o11, beforeLeave: N6, afterLeave: H7 }), G2 = l2();
  (0, import_react35.useEffect)(() => {
    if (G2 && u9 === "visible" && e5.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e5, u9, G2]);
  let B = d12 && !R3, ae2 = (() => !G2 || B || j4.current === l11 ? "idle" : l11 ? "enter" : "leave")(), D6 = c12(0), le2 = o4((C4) => u(C4, { enter: () => {
    D6.addFlag(d5.Opening), O3.current.beforeEnter();
  }, leave: () => {
    D6.addFlag(d5.Closing), O3.current.beforeLeave();
  }, idle: () => {
  } })), ue3 = o4((C4) => u(C4, { enter: () => {
    D6.removeFlag(d5.Opening), O3.current.afterEnter();
  }, leave: () => {
    D6.removeFlag(d5.Closing), O3.current.afterLeave();
  }, idle: () => {
  } })), V2 = re3(() => {
    U3("hidden"), w6(e5);
  }, K3);
  D5({ container: e5, classes: k2, direction: ae2, onStart: s2((C4) => {
    V2.onStart(e5, C4, le2);
  }), onStop: s2((C4) => {
    V2.onStop(e5, C4, ue3), C4 === "leave" && !M5(V2) && (U3("hidden"), w6(e5));
  }) }), (0, import_react35.useEffect)(() => {
    B && (i6 === j.Hidden ? j4.current = null : j4.current = l11);
  }, [l11, B, u9]);
  let J3 = s13, Te2 = { ref: a12 };
  return R3 && l11 && d12 && (J3 = { ...J3, className: e2(s13.className, ...k2.current.enter, ...k2.current.enterFrom) }), import_react35.default.createElement(_2.Provider, { value: V2 }, import_react35.default.createElement(c6, { value: u(u9, { ["visible"]: d5.Open, ["hidden"]: d5.Closed }) | D6.flags }, X({ ourProps: Te2, theirProps: J3, defaultTag: Re2, features: oe3, visible: u9 === "visible", name: "Transition.Child" })));
}
function Ne3(t15, n6) {
  let { show: r9, appear: o11 = false, unmount: N6, ...H7 } = t15, p8 = (0, import_react35.useRef)(null), P4 = y2(p8, n6);
  l2();
  let h8 = C();
  if (r9 === void 0 && h8 !== null && (r9 = (h8 & d5.Open) === d5.Open), ![true, false].includes(r9))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v4, T6] = (0, import_react35.useState)(r9 ? "visible" : "hidden"), g5 = re3(() => {
    T6("hidden");
  }), [f9, s13] = (0, import_react35.useState)(true), e5 = (0, import_react35.useRef)([r9]);
  l(() => {
    f9 !== false && e5.current[e5.current.length - 1] !== r9 && (e5.current.push(r9), s13(false));
  }, [e5, r9]);
  let a12 = (0, import_react35.useMemo)(() => ({ show: r9, appear: o11, initial: f9 }), [r9, o11, f9]);
  (0, import_react35.useEffect)(() => {
    if (r9)
      T6("visible");
    else if (!M5(g5))
      T6("hidden");
    else {
      let d12 = p8.current;
      if (!d12)
        return;
      let u9 = d12.getBoundingClientRect();
      u9.x === 0 && u9.y === 0 && u9.width === 0 && u9.height === 0 && T6("hidden");
    }
  }, [r9, g5]);
  let i6 = { unmount: N6 }, l11 = o4(() => {
    var d12;
    f9 && s13(false), (d12 = t15.beforeEnter) == null || d12.call(t15);
  }), R3 = o4(() => {
    var d12;
    f9 && s13(false), (d12 = t15.beforeLeave) == null || d12.call(t15);
  });
  return import_react35.default.createElement(_2.Provider, { value: g5 }, import_react35.default.createElement(I6.Provider, { value: a12 }, X({ ourProps: { ...i6, as: import_react35.Fragment, children: import_react35.default.createElement(se2, { ref: P4, ...i6, ...H7, beforeEnter: l11, beforeLeave: R3 }) }, theirProps: {}, defaultTag: import_react35.Fragment, features: oe3, visible: v4 === "visible", name: "Transition" })));
}
function He3(t15, n6) {
  let r9 = (0, import_react35.useContext)(I6) !== null, o11 = C() !== null;
  return import_react35.default.createElement(import_react35.default.Fragment, null, !r9 && o11 ? import_react35.default.createElement(z4, { ref: n6, ...t15 }) : import_react35.default.createElement(se2, { ref: n6, ...t15 }));
}
var z4 = D2(Ne3);
var se2 = D2(ye3);
var De4 = D2(He3);
var $e3 = Object.assign(z4, { Child: De4, Root: z4 });

// node_modules/react-icons/hi2/index.esm.js
function HiBars3(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" } }] })(props);
}
function HiBell(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z", "clipRule": "evenodd" } }] })(props);
}
function HiXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z", "clipRule": "evenodd" } }] })(props);
}

// app/layout/Navbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Matches", href: "/matches" },
    { name: "Projects", href: "/projects" },
    { name: "Calendar", href: "/calendar" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve, { as: "nav", className: "bg-white shadow", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-16 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-shrink-0 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              className: "block h-8 w-auto lg:hidden",
              src: base_default,
              alt: "Biosolver"
            },
            void 0,
            false,
            {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 29,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              className: "hidden h-8 w-auto lg:block",
              src: base_default,
              alt: "Biosolver"
            },
            void 0,
            false,
            {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 34,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/layout/Navbar.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            href: item.href,
            className: "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500",
            children: item.name
          },
          item.name,
          false,
          {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 43,
            columnNumber: 21
          },
          this
        )) }, void 0, false, {
          fileName: "app/layout/Navbar.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/Navbar.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
                fileName: "app/layout/Navbar.tsx",
                lineNumber: 58,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiBell, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/layout/Navbar.tsx",
                lineNumber: 59,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 54,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it, { as: "div", className: "relative ml-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Button, { className: "flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 66,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "h-8 w-8 rounded-full",
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                alt: ""
              },
              void 0,
              false,
              {
                fileName: "app/layout/Navbar.tsx",
                lineNumber: 67,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 65,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 64,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            $e3,
            {
              as: import_react36.Fragment,
              enter: "transition ease-out duration-200",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "a",
                  {
                    href: "profile",
                    className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                    children: "Your Profile"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/layout/Navbar.tsx",
                    lineNumber: 86,
                    columnNumber: 27
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/layout/Navbar.tsx",
                  lineNumber: 84,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "a",
                  {
                    href: "settings",
                    className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                    children: "Settings"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/layout/Navbar.tsx",
                    lineNumber: 96,
                    columnNumber: 27
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/layout/Navbar.tsx",
                  lineNumber: 94,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "a",
                  {
                    href: "logout",
                    className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                    children: "Sign out"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/layout/Navbar.tsx",
                    lineNumber: 106,
                    columnNumber: 27
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/layout/Navbar.tsx",
                  lineNumber: 104,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/layout/Navbar.tsx",
                lineNumber: 83,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 74,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/layout/Navbar.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/Navbar.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "app/layout/Navbar.tsx",
          lineNumber: 121,
          columnNumber: 19
        }, this),
        open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiXMark, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/layout/Navbar.tsx",
          lineNumber: 123,
          columnNumber: 21
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiBars3, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/layout/Navbar.tsx",
          lineNumber: 125,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/Navbar.tsx",
        lineNumber: 120,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/layout/Navbar.tsx",
        lineNumber: 118,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/Navbar.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Panel, { className: "sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 pb-3 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ve.Button,
          {
            as: "a",
            href: "dashboard",
            className: "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700",
            children: "Dashboard"
          },
          void 0,
          false,
          {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 135,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ve.Button,
          {
            as: "a",
            href: "/matches",
            className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
            children: "Your Matches"
          },
          void 0,
          false,
          {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 142,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ve.Button,
          {
            as: "a",
            href: "projects",
            className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
            children: "Projects"
          },
          void 0,
          false,
          {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 149,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ve.Button,
          {
            as: "a",
            href: "calendar",
            className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
            children: "Calendar"
          },
          void 0,
          false,
          {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 156,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/layout/Navbar.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pb-3 pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center px-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              className: "h-10 w-10 rounded-full",
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              alt: ""
            },
            void 0,
            false,
            {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 167,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base font-medium text-gray-800", children: "Tom Cook" }, void 0, false, {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 174,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-500", children: "tom@example.com" }, void 0, false, {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 175,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/layout/Navbar.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              className: "ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
                  fileName: "app/layout/Navbar.tsx",
                  lineNumber: 181,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiBell, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/layout/Navbar.tsx",
                  lineNumber: 182,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 177,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/layout/Navbar.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ve.Button,
            {
              as: "a",
              href: "profile",
              className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",
              children: "Your Profile"
            },
            void 0,
            false,
            {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 186,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ve.Button,
            {
              as: "a",
              href: "settings",
              className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",
              children: "Settings"
            },
            void 0,
            false,
            {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 193,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ve.Button,
            {
              as: "a",
              href: "logout",
              className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",
              children: "Sign out"
            },
            void 0,
            false,
            {
              fileName: "app/layout/Navbar.tsx",
              lineNumber: 200,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/layout/Navbar.tsx",
          lineNumber: 185,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/Navbar.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/Navbar.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/Navbar.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/layout/Navbar.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/layout/anon/Header.tsx
var import_react38 = __toESM(require_react());

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
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react38.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8", "aria-label": "Global", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "-m-1.5 p-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "BioSolver" }, void 0, false, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "h-16 w-auto", src: base_default, alt: "BioSolver Logo" }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          type: "button",
          className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
          onClick: () => setMobileMenuOpen(true),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(kt.Group, { className: "hidden lg:flex lg:gap-x-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/for-solvers", className: "text-sm font-semibold leading-6 text-gray-900", children: "For Solvers" }, void 0, false, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/for-seekers", className: "text-sm font-semibold leading-6 text-gray-900", children: "For Seekers" }, void 0, false, {
          fileName: "app/layout/anon/Header.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(kt, { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(kt.Button, { className: "flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900", children: [
            "Company",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 flex-none text-gray-400", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/layout/anon/Header.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/layout/anon/Header.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            $e3,
            {
              as: import_react38.Fragment,
              enter: "transition ease-out duration-200",
              enterFrom: "opacity-0 translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              leave: "transition ease-in duration-150",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 translate-y-1",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(kt.Panel, { className: "absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5", children: company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative rounded-lg p-4 hover:bg-gray-50", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "block text-sm font-semibold leading-6 text-gray-900", children: [
                  item.name,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
                    fileName: "app/layout/anon/Header.tsx",
                    lineNumber: 135,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/layout/anon/Header.tsx",
                  lineNumber: 133,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: item.description }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/login", className: "text-sm font-semibold leading-6 text-gray-900", children: [
        "Log in ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 z-10" }, void 0, false, {
        fileName: "app/layout/anon/Header.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t.Panel, { className: "fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "-m-1.5 p-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Your Company" }, void 0, false, {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                type: "button",
                className: "-m-2.5 rounded-md p-2.5 text-gray-700",
                onClick: () => setMobileMenuOpen(false),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
                    fileName: "app/layout/anon/Header.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2 py-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
              company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center", children: callsToAction.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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

// app/layout/anon/Footer.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
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
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaLinkedin, {}, void 0, false, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/biosolverio/100090926217577/",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaFacebook, {}, void 0, false, {
        fileName: "app/layout/anon/Footer.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)
    }
  ]
};
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "bg-white", "aria-labelledby": "footer-heading", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }, void 0, false, {
      fileName: "app/layout/anon/Footer.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 gap-8 xl:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Platform" }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 48,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.platform.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Support" }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.support.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Company" }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 74,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Legal" }, void 0, false, {
                fileName: "app/layout/anon/Footer.tsx",
                lineNumber: 86,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.legal.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 xl:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Subscribe to our newsletter" }, void 0, false, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-gray-600", children: "The latest news, articles, and resources, sent to your inbox weekly." }, void 0, false, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { action: "https://app.formzillion.com/f/nNcNse-I", className: "mt-6 sm:flex sm:max-w-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, false, {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-6 md:order-2", children: navigation.social.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: item.name }, void 0, false, {
            fileName: "app/layout/anon/Footer.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(item.icon.type, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0", children: "\xA9 2023 BIOSOLVER Corp. All rights reserved." }, void 0, false, {
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
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  const user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "w-full h-full", children: [
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full h-auto max-w-7xl p-10 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 16
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "font-display max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 32,
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
//# sourceMappingURL=/build/root-DL7QGEGO.js.map
