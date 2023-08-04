import {
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t7, e3, n3) => e3 in t7 ? i(t7, e3, { enumerable: true, configurable: true, writable: true, value: n3 }) : t7[e3] = n3;
var r = (t7, e3, n3) => (d(t7, typeof e3 != "symbol" ? e3 + "" : e3, n3), n3);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e3) {
    this.current !== e3 && (this.handoffState = "pending", this.currentId = 0, this.current = e3);
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
var l = (e3, f4) => {
  s.isServer ? (0, import_react.useEffect)(e3, f4) : (0, import_react.useLayoutEffect)(e3, f4);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e3) {
  let r5 = (0, import_react2.useRef)(e3);
  return l(() => {
    r5.current = e3;
  }, [e3]), r5;
}

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e3) {
  typeof queueMicrotask == "function" ? queueMicrotask(e3) : Promise.resolve().then(e3).catch((o8) => setTimeout(() => {
    throw o8;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n3 = [], r5 = { addEventListener(e3, t7, s7, a3) {
    return e3.addEventListener(t7, s7, a3), r5.add(() => e3.removeEventListener(t7, s7, a3));
  }, requestAnimationFrame(...e3) {
    let t7 = requestAnimationFrame(...e3);
    return r5.add(() => cancelAnimationFrame(t7));
  }, nextFrame(...e3) {
    return r5.requestAnimationFrame(() => r5.requestAnimationFrame(...e3));
  }, setTimeout(...e3) {
    let t7 = setTimeout(...e3);
    return r5.add(() => clearTimeout(t7));
  }, microTask(...e3) {
    let t7 = { current: true };
    return t3(() => {
      t7.current && e3[0]();
    }), r5.add(() => {
      t7.current = false;
    });
  }, style(e3, t7, s7) {
    let a3 = e3.style.getPropertyValue(t7);
    return Object.assign(e3.style, { [t7]: s7 }), this.add(() => {
      Object.assign(e3.style, { [t7]: a3 });
    });
  }, group(e3) {
    let t7 = o2();
    return e3(t7), this.add(() => t7.dispose());
  }, add(e3) {
    return n3.push(e3), () => {
      let t7 = n3.indexOf(e3);
      if (t7 >= 0)
        for (let s7 of n3.splice(t7, 1))
          s7();
    };
  }, dispose() {
    for (let e3 of n3.splice(0))
      e3();
  } };
  return r5;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react3 = __toESM(require_react(), 1);
function p() {
  let [e3] = (0, import_react3.useState)(o2);
  return (0, import_react3.useEffect)(() => () => e3.dispose(), [e3]), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);
var o4 = function(t7) {
  let e3 = s2(t7);
  return import_react4.default.useCallback((...r5) => e3.current(...r5), [e3]);
};

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react5 = __toESM(require_react(), 1);
function l2() {
  let [e3, f4] = (0, import_react5.useState)(s.isHandoffComplete);
  return e3 && s.isHandoffComplete === false && f4(false), (0, import_react5.useEffect)(() => {
    e3 !== true && f4(true);
  }, [e3]), (0, import_react5.useEffect)(() => s.handoff(), []), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react6 = __toESM(require_react(), 1);
var o6;
var I = (o6 = import_react6.default.useId) != null ? o6 : function() {
  let n3 = l2(), [e3, u3] = import_react6.default.useState(n3 ? () => s.nextId() : null);
  return l(() => {
    e3 === null && u3(s.nextId());
  }, [e3]), e3 != null ? "" + e3 : void 0;
};

// node_modules/@headlessui/react/dist/utils/match.js
function u(r5, n3, ...a3) {
  if (r5 in n3) {
    let e3 = n3[r5];
    return typeof e3 == "function" ? e3(...a3) : e3;
  }
  let t7 = new Error(`Tried to handle "${r5}" but there is no handler defined. Only defined handlers are: ${Object.keys(n3).map((e3) => `"${e3}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t7, u), t7;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r5) {
  return s.isServer ? null : r5 instanceof Node ? r5.ownerDocument : r5 != null && r5.hasOwnProperty("current") && r5.current instanceof Node ? r5.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e3) => `${e3}:not([tabindex='-1'])`).join(",");
var M = ((n3) => (n3[n3.First = 1] = "First", n3[n3.Previous = 2] = "Previous", n3[n3.Next = 4] = "Next", n3[n3.Last = 8] = "Last", n3[n3.WrapAround = 16] = "WrapAround", n3[n3.NoScroll = 32] = "NoScroll", n3))(M || {});
var N = ((o8) => (o8[o8.Error = 0] = "Error", o8[o8.Overflow = 1] = "Overflow", o8[o8.Success = 2] = "Success", o8[o8.Underflow = 3] = "Underflow", o8))(N || {});
var F = ((t7) => (t7[t7.Previous = -1] = "Previous", t7[t7.Next = 1] = "Next", t7))(F || {});
function f(e3 = document.body) {
  return e3 == null ? [] : Array.from(e3.querySelectorAll(c2)).sort((r5, t7) => Math.sign((r5.tabIndex || Number.MAX_SAFE_INTEGER) - (t7.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t7) => (t7[t7.Strict = 0] = "Strict", t7[t7.Loose = 1] = "Loose", t7))(T || {});
function h(e3, r5 = 0) {
  var t7;
  return e3 === ((t7 = e(e3)) == null ? void 0 : t7.body) ? false : u(r5, { [0]() {
    return e3.matches(c2);
  }, [1]() {
    let l5 = e3;
    for (; l5 !== null; ) {
      if (l5.matches(c2))
        return true;
      l5 = l5.parentElement;
    }
    return false;
  } });
}
function D(e3) {
  let r5 = e(e3);
  o2().nextFrame(() => {
    r5 && !h(r5.activeElement, 0) && y(e3);
  });
}
var w = ((t7) => (t7[t7.Keyboard = 0] = "Keyboard", t7[t7.Mouse = 1] = "Mouse", t7))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e3) => {
  e3.metaKey || e3.altKey || e3.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e3) => {
  e3.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e3.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e3) {
  e3 == null || e3.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e3) {
  var r5, t7;
  return (t7 = (r5 = e3 == null ? void 0 : e3.matches) == null ? void 0 : r5.call(e3, S)) != null ? t7 : false;
}
function I2(e3, r5 = (t7) => t7) {
  return e3.slice().sort((t7, l5) => {
    let o8 = r5(t7), i5 = r5(l5);
    if (o8 === null || i5 === null)
      return 0;
    let n3 = o8.compareDocumentPosition(i5);
    return n3 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n3 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e3, r5) {
  return O(f(), r5, { relativeTo: e3 });
}
function O(e3, r5, { sorted: t7 = true, relativeTo: l5 = null, skipElements: o8 = [] } = {}) {
  let i5 = Array.isArray(e3) ? e3.length > 0 ? e3[0].ownerDocument : document : e3.ownerDocument, n3 = Array.isArray(e3) ? t7 ? I2(e3) : e3 : f(e3);
  o8.length > 0 && n3.length > 1 && (n3 = n3.filter((s7) => !o8.includes(s7))), l5 = l5 != null ? l5 : i5.activeElement;
  let E2 = (() => {
    if (r5 & 5)
      return 1;
    if (r5 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r5 & 1)
      return 0;
    if (r5 & 2)
      return Math.max(0, n3.indexOf(l5)) - 1;
    if (r5 & 4)
      return Math.max(0, n3.indexOf(l5)) + 1;
    if (r5 & 8)
      return n3.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p4 = r5 & 32 ? { preventScroll: true } : {}, d6 = 0, a3 = n3.length, u3;
  do {
    if (d6 >= a3 || d6 + a3 <= 0)
      return 0;
    let s7 = x2 + d6;
    if (r5 & 16)
      s7 = (s7 + a3) % a3;
    else {
      if (s7 < 0)
        return 3;
      if (s7 >= a3)
        return 1;
    }
    u3 = n3[s7], u3 == null || u3.focus(p4), d6 += E2;
  } while (u3 !== i5.activeElement);
  return r5 & 6 && H(u3) && u3.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react7 = __toESM(require_react(), 1);
function d2(e3, r5, n3) {
  let o8 = s2(r5);
  (0, import_react7.useEffect)(() => {
    function t7(u3) {
      o8.current(u3);
    }
    return document.addEventListener(e3, t7, n3), () => document.removeEventListener(e3, t7, n3);
  }, [e3, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react8 = __toESM(require_react(), 1);
function s4(e3, r5, n3) {
  let o8 = s2(r5);
  (0, import_react8.useEffect)(() => {
    function t7(i5) {
      o8.current(i5);
    }
    return window.addEventListener(e3, t7, n3), () => window.removeEventListener(e3, t7, n3);
  }, [e3, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function H2(s7, m3, i5 = true) {
  let l5 = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    requestAnimationFrame(() => {
      l5.current = i5;
    });
  }, [i5]);
  function a3(e3, o8) {
    if (!l5.current || e3.defaultPrevented)
      return;
    let n3 = o8(e3);
    if (n3 === null || !n3.getRootNode().contains(n3))
      return;
    let E2 = function r5(t7) {
      return typeof t7 == "function" ? r5(t7()) : Array.isArray(t7) || t7 instanceof Set ? t7 : [t7];
    }(s7);
    for (let r5 of E2) {
      if (r5 === null)
        continue;
      let t7 = r5 instanceof HTMLElement ? r5 : r5.current;
      if (t7 != null && t7.contains(n3) || e3.composed && e3.composedPath().includes(t7))
        return;
    }
    return !h(n3, T.Loose) && n3.tabIndex !== -1 && e3.preventDefault(), m3(e3, n3);
  }
  let u3 = (0, import_react9.useRef)(null);
  d2("mousedown", (e3) => {
    var o8, n3;
    l5.current && (u3.current = ((n3 = (o8 = e3.composedPath) == null ? void 0 : o8.call(e3)) == null ? void 0 : n3[0]) || e3.target);
  }, true), d2("click", (e3) => {
    u3.current && (a3(e3, () => u3.current), u3.current = null);
  }, true), s4("blur", (e3) => a3(e3, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react10 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t7, n3 = true) {
  return Object.assign(t7, { [u2]: n3 });
}
function y2(...t7) {
  let n3 = (0, import_react10.useRef)(t7);
  (0, import_react10.useEffect)(() => {
    n3.current = t7;
  }, [t7]);
  let c7 = o4((e3) => {
    for (let o8 of n3.current)
      o8 != null && (typeof o8 == "function" ? o8(e3) : o8.current = e3);
  });
  return t7.every((e3) => e3 == null || (e3 == null ? void 0 : e3[u2])) ? void 0 : c7;
}

// node_modules/@headlessui/react/dist/utils/class-names.js
function e2(...n3) {
  return n3.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react11 = __toESM(require_react(), 1);
var S2 = ((a3) => (a3[a3.None = 0] = "None", a3[a3.RenderStrategy = 1] = "RenderStrategy", a3[a3.Static = 2] = "Static", a3))(S2 || {});
var j = ((e3) => (e3[e3.Unmount = 0] = "Unmount", e3[e3.Hidden = 1] = "Hidden", e3))(j || {});
function X({ ourProps: r5, theirProps: t7, slot: e3, defaultTag: a3, features: s7, visible: n3 = true, name: f4 }) {
  let o8 = N2(t7, r5);
  if (n3)
    return c4(o8, e3, a3, f4);
  let u3 = s7 != null ? s7 : 0;
  if (u3 & 2) {
    let { static: l5 = false, ...p4 } = o8;
    if (l5)
      return c4(p4, e3, a3, f4);
  }
  if (u3 & 1) {
    let { unmount: l5 = true, ...p4 } = o8;
    return u(l5 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c4({ ...p4, hidden: true, style: { display: "none" } }, e3, a3, f4);
    } });
  }
  return c4(o8, e3, a3, f4);
}
function c4(r5, t7 = {}, e3, a3) {
  let { as: s7 = e3, children: n3, refName: f4 = "ref", ...o8 } = g(r5, ["unmount", "static"]), u3 = r5.ref !== void 0 ? { [f4]: r5.ref } : {}, l5 = typeof n3 == "function" ? n3(t7) : n3;
  "className" in o8 && o8.className && typeof o8.className == "function" && (o8.className = o8.className(t7));
  let p4 = {};
  if (t7) {
    let i5 = false, m3 = [];
    for (let [y3, d6] of Object.entries(t7))
      typeof d6 == "boolean" && (i5 = true), d6 === true && m3.push(y3);
    i5 && (p4["data-headlessui-state"] = m3.join(" "));
  }
  if (s7 === import_react11.Fragment && Object.keys(R(o8)).length > 0) {
    if (!(0, import_react11.isValidElement)(l5) || Array.isArray(l5) && l5.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a3} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o8).map((d6) => `  - ${d6}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d6) => `  - ${d6}`).join(`
`)].join(`
`));
    let i5 = l5.props, m3 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...d6) => e2(i5 == null ? void 0 : i5.className(...d6), o8.className) : e2(i5 == null ? void 0 : i5.className, o8.className), y3 = m3 ? { className: m3 } : {};
    return (0, import_react11.cloneElement)(l5, Object.assign({}, N2(l5.props, R(g(o8, ["ref"]))), p4, u3, w2(l5.ref, u3.ref), y3));
  }
  return (0, import_react11.createElement)(s7, Object.assign({}, g(o8, ["ref"]), s7 !== import_react11.Fragment && u3, s7 !== import_react11.Fragment && p4), l5);
}
function w2(...r5) {
  return { ref: r5.every((t7) => t7 == null) ? void 0 : (t7) => {
    for (let e3 of r5)
      e3 != null && (typeof e3 == "function" ? e3(t7) : e3.current = t7);
  } };
}
function N2(...r5) {
  var a3;
  if (r5.length === 0)
    return {};
  if (r5.length === 1)
    return r5[0];
  let t7 = {}, e3 = {};
  for (let s7 of r5)
    for (let n3 in s7)
      n3.startsWith("on") && typeof s7[n3] == "function" ? ((a3 = e3[n3]) != null || (e3[n3] = []), e3[n3].push(s7[n3])) : t7[n3] = s7[n3];
  if (t7.disabled || t7["aria-disabled"])
    return Object.assign(t7, Object.fromEntries(Object.keys(e3).map((s7) => [s7, void 0])));
  for (let s7 in e3)
    Object.assign(t7, { [s7](n3, ...f4) {
      let o8 = e3[s7];
      for (let u3 of o8) {
        if ((n3 instanceof Event || (n3 == null ? void 0 : n3.nativeEvent) instanceof Event) && n3.defaultPrevented)
          return;
        u3(n3, ...f4);
      }
    } });
  return t7;
}
function D2(r5) {
  var t7;
  return Object.assign((0, import_react11.forwardRef)(r5), { displayName: (t7 = r5.displayName) != null ? t7 : r5.name });
}
function R(r5) {
  let t7 = Object.assign({}, r5);
  for (let e3 in t7)
    t7[e3] === void 0 && delete t7[e3];
  return t7;
}
function g(r5, t7 = []) {
  let e3 = Object.assign({}, r5);
  for (let a3 of t7)
    a3 in e3 && delete e3[a3];
  return e3;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n3) {
  let e3 = n3.parentElement, l5 = null;
  for (; e3 && !(e3 instanceof HTMLFieldSetElement); )
    e3 instanceof HTMLLegendElement && (l5 = e3), e3 = e3.parentElement;
  let t7 = (e3 == null ? void 0 : e3.getAttribute("disabled")) === "";
  return t7 && i3(l5) ? false : t7;
}
function i3(n3) {
  if (!n3)
    return false;
  let e3 = n3.previousElementSibling;
  for (; e3 !== null; ) {
    if (e3 instanceof HTMLLegendElement)
      return false;
    e3 = e3.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react12 = __toESM(require_react(), 1);
var n = (0, import_react12.createContext)(null);
n.displayName = "OpenClosedContext";
var d5 = ((e3) => (e3[e3.Open = 1] = "Open", e3[e3.Closed = 2] = "Closed", e3[e3.Closing = 4] = "Closing", e3[e3.Opening = 8] = "Opening", e3))(d5 || {});
function C() {
  return (0, import_react12.useContext)(n);
}
function c5({ value: o8, children: r5 }) {
  return import_react12.default.createElement(n.Provider, { value: o8 }, r5);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r5) => (r5.Space = " ", r5.Enter = "Enter", r5.Escape = "Escape", r5.Backspace = "Backspace", r5.Delete = "Delete", r5.ArrowLeft = "ArrowLeft", r5.ArrowUp = "ArrowUp", r5.ArrowRight = "ArrowRight", r5.ArrowDown = "ArrowDown", r5.Home = "Home", r5.End = "End", r5.PageUp = "PageUp", r5.PageDown = "PageDown", r5.Tab = "Tab", r5))(o7 || {});

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react13 = __toESM(require_react(), 1);
function f2() {
  let e3 = (0, import_react13.useRef)(false);
  return l(() => (e3.current = true, () => {
    e3.current = false;
  }), []), e3;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a2 = "div";
var p3 = ((e3) => (e3[e3.None = 1] = "None", e3[e3.Focusable = 2] = "Focusable", e3[e3.Hidden = 4] = "Hidden", e3))(p3 || {});
function s5(t7, o8) {
  let { features: n3 = 1, ...e3 } = t7, d6 = { ref: o8, "aria-hidden": (n3 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n3 & 4) === 4 && (n3 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d6, theirProps: e3, slot: {}, defaultTag: a2, name: "Hidden" });
}
var c6 = D2(s5);

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react14 = __toESM(require_react(), 1);
function m2(u3, t7) {
  let e3 = (0, import_react14.useRef)([]), r5 = o4(u3);
  (0, import_react14.useEffect)(() => {
    let o8 = [...e3.current];
    for (let [n3, a3] of t7.entries())
      if (e3.current[n3] !== a3) {
        let l5 = r5(t7, o8);
        return e3.current = t7, l5;
      }
  }, [r5, ...t7]);
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t6() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i4() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n2() {
  return t6() || i4();
}

export {
  s,
  l,
  s2,
  t3 as t,
  o2 as o,
  p,
  o4 as o2,
  l2,
  I,
  u,
  e,
  M,
  N,
  f,
  T,
  h,
  D,
  y,
  I2,
  _,
  O,
  s4 as s3,
  H2 as H,
  T2,
  y2,
  e2,
  S2 as S,
  j,
  X,
  D2,
  R,
  r3 as r,
  p3 as p2,
  c6 as c,
  d5 as d,
  C,
  c5 as c2,
  o7 as o3,
  m2 as m,
  t6 as t2,
  n2 as n,
  f2
};
//# sourceMappingURL=/build/_shared/chunk-KCLKX6RL.js.map
