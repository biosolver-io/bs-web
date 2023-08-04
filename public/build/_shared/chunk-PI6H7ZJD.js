import {
  C,
  D2 as D,
  H,
  I,
  M,
  N,
  O,
  S,
  T2 as T,
  X,
  c,
  d,
  e,
  f2 as f,
  l,
  l2,
  m,
  o,
  o2,
  o3,
  p,
  p2,
  r,
  s,
  s2,
  s3,
  t,
  t2,
  u,
  y,
  y2
} from "/build/_shared/chunk-KCLKX6RL.js";
import {
  require_react_dom
} from "/build/_shared/chunk-YUUU2RAQ.js";
import {
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react = __toESM(require_react(), 1);
var s4 = ((r5) => (r5[r5.Forwards = 0] = "Forwards", r5[r5.Backwards = 1] = "Backwards", r5))(s4 || {});
function n() {
  let e4 = (0, import_react.useRef)(0);
  return s3("keydown", (o4) => {
    o4.key === "Tab" && (e4.current = o4.shiftKey ? 1 : 0);
  }, true), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react2 = __toESM(require_react(), 1);
function n2(...e4) {
  return (0, import_react2.useMemo)(() => e(...e4), [...e4]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react3 = __toESM(require_react(), 1);
function E(n4, e4, a7, t9) {
  let i2 = s2(a7);
  (0, import_react3.useEffect)(() => {
    n4 = n4 != null ? n4 : window;
    function r5(o4) {
      i2.current(o4);
    }
    return n4.addEventListener(e4, r5, t9), () => n4.removeEventListener(e4, r5, t9);
  }, [n4, e4, t9]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t5(n4) {
  function e4() {
    document.readyState !== "loading" && (n4(), document.removeEventListener("DOMContentLoaded", e4));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e4), e4());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react4 = __toESM(require_react(), 1);
function c2(t9) {
  let r5 = o2(t9), e4 = (0, import_react4.useRef)(false);
  (0, import_react4.useEffect)(() => (e4.current = false, () => {
    e4.current = true, t(() => {
      e4.current && r5();
    });
  }), [r5]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t9) {
  if (!t9)
    return /* @__PURE__ */ new Set();
  if (typeof t9 == "function")
    return new Set(t9());
  let r5 = /* @__PURE__ */ new Set();
  for (let e4 of t9.current)
    e4.current instanceof HTMLElement && r5.add(e4.current);
  return r5;
}
var J = "div";
var h = ((n4) => (n4[n4.None = 1] = "None", n4[n4.InitialFocus = 2] = "InitialFocus", n4[n4.TabLock = 4] = "TabLock", n4[n4.FocusLock = 8] = "FocusLock", n4[n4.RestoreFocus = 16] = "RestoreFocus", n4[n4.All = 30] = "All", n4))(h || {});
function X2(t9, r5) {
  let e4 = (0, import_react5.useRef)(null), o4 = y2(e4, r5), { initialFocus: u7, containers: i2, features: n4 = 30, ...l7 } = t9;
  l2() || (n4 = 1);
  let m7 = n2(e4);
  Y({ ownerDocument: m7 }, Boolean(n4 & 16));
  let c7 = Z({ ownerDocument: m7, container: e4, initialFocus: u7 }, Boolean(n4 & 2));
  $({ ownerDocument: m7, container: e4, containers: i2, previousActiveElement: c7 }, Boolean(n4 & 8));
  let v2 = n(), y6 = o2((s9) => {
    let T4 = e4.current;
    if (!T4)
      return;
    ((B) => B())(() => {
      u(v2.current, { [s4.Forwards]: () => {
        O(T4, M.First, { skipElements: [s9.relatedTarget] });
      }, [s4.Backwards]: () => {
        O(T4, M.Last, { skipElements: [s9.relatedTarget] });
      } });
    });
  }), _ = p(), b3 = (0, import_react5.useRef)(false), j3 = { ref: o4, onKeyDown(s9) {
    s9.key == "Tab" && (b3.current = true, _.requestAnimationFrame(() => {
      b3.current = false;
    }));
  }, onBlur(s9) {
    let T4 = P(i2);
    e4.current instanceof HTMLElement && T4.add(e4.current);
    let d7 = s9.relatedTarget;
    d7 instanceof HTMLElement && d7.dataset.headlessuiFocusGuard !== "true" && (S2(T4, d7) || (b3.current ? O(e4.current, u(v2.current, { [s4.Forwards]: () => M.Next, [s4.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s9.target }) : s9.target instanceof HTMLElement && y(s9.target)));
  } };
  return import_react5.default.createElement(import_react5.default.Fragment, null, Boolean(n4 & 4) && import_react5.default.createElement(c, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }), X({ ourProps: j3, theirProps: l7, defaultTag: J, name: "FocusTrap" }), Boolean(n4 & 4) && import_react5.default.createElement(c, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }));
}
var z = D(X2);
var ge = Object.assign(z, { features: h });
var a = [];
t5(() => {
  function t9(r5) {
    r5.target instanceof HTMLElement && r5.target !== document.body && a[0] !== r5.target && (a.unshift(r5.target), a = a.filter((e4) => e4 != null && e4.isConnected), a.splice(10));
  }
  window.addEventListener("click", t9, { capture: true }), window.addEventListener("mousedown", t9, { capture: true }), window.addEventListener("focus", t9, { capture: true }), document.body.addEventListener("click", t9, { capture: true }), document.body.addEventListener("mousedown", t9, { capture: true }), document.body.addEventListener("focus", t9, { capture: true });
});
function Q(t9 = true) {
  let r5 = (0, import_react5.useRef)(a.slice());
  return m(([e4], [o4]) => {
    o4 === true && e4 === false && t(() => {
      r5.current.splice(0);
    }), o4 === false && e4 === true && (r5.current = a.slice());
  }, [t9, a, r5]), o2(() => {
    var e4;
    return (e4 = r5.current.find((o4) => o4 != null && o4.isConnected)) != null ? e4 : null;
  });
}
function Y({ ownerDocument: t9 }, r5) {
  let e4 = Q(r5);
  m(() => {
    r5 || (t9 == null ? void 0 : t9.activeElement) === (t9 == null ? void 0 : t9.body) && y(e4());
  }, [r5]), c2(() => {
    r5 && y(e4());
  });
}
function Z({ ownerDocument: t9, container: r5, initialFocus: e4 }, o4) {
  let u7 = (0, import_react5.useRef)(null), i2 = f();
  return m(() => {
    if (!o4)
      return;
    let n4 = r5.current;
    n4 && t(() => {
      if (!i2.current)
        return;
      let l7 = t9 == null ? void 0 : t9.activeElement;
      if (e4 != null && e4.current) {
        if ((e4 == null ? void 0 : e4.current) === l7) {
          u7.current = l7;
          return;
        }
      } else if (n4.contains(l7)) {
        u7.current = l7;
        return;
      }
      e4 != null && e4.current ? y(e4.current) : O(n4, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u7.current = t9 == null ? void 0 : t9.activeElement;
    });
  }, [o4]), u7;
}
function $({ ownerDocument: t9, container: r5, containers: e4, previousActiveElement: o4 }, u7) {
  let i2 = f();
  E(t9 == null ? void 0 : t9.defaultView, "focus", (n4) => {
    if (!u7 || !i2.current)
      return;
    let l7 = P(e4);
    r5.current instanceof HTMLElement && l7.add(r5.current);
    let m7 = o4.current;
    if (!m7)
      return;
    let c7 = n4.target;
    c7 && c7 instanceof HTMLElement ? S2(l7, c7) ? (o4.current = c7, y(c7)) : (n4.preventDefault(), n4.stopPropagation(), y(m7)) : y(o4.current);
  }, true);
}
function S2(t9, r5) {
  for (let e4 of t9)
    if (e4.contains(r5))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react7 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react6 = __toESM(require_react(), 1);
var e2 = (0, import_react6.createContext)(false);
function l3() {
  return (0, import_react6.useContext)(e2);
}
function P2(o4) {
  return import_react6.default.createElement(e2.Provider, { value: o4.force }, o4.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F(p7) {
  let l7 = l3(), n4 = (0, import_react7.useContext)(v), e4 = n2(p7), [a7, o4] = (0, import_react7.useState)(() => {
    if (!l7 && n4 !== null || s.isServer)
      return null;
    let t9 = e4 == null ? void 0 : e4.getElementById("headlessui-portal-root");
    if (t9)
      return t9;
    if (e4 === null)
      return null;
    let r5 = e4.createElement("div");
    return r5.setAttribute("id", "headlessui-portal-root"), e4.body.appendChild(r5);
  });
  return (0, import_react7.useEffect)(() => {
    a7 !== null && (e4 != null && e4.body.contains(a7) || e4 == null || e4.body.appendChild(a7));
  }, [a7, e4]), (0, import_react7.useEffect)(() => {
    l7 || n4 !== null && o4(n4.current);
  }, [n4, o4, l7]), a7;
}
var U = import_react7.Fragment;
function N2(p7, l7) {
  let n4 = p7, e4 = (0, import_react7.useRef)(null), a7 = y2(T((u7) => {
    e4.current = u7;
  }), l7), o4 = n2(e4), t9 = F(e4), [r5] = (0, import_react7.useState)(() => {
    var u7;
    return s.isServer ? null : (u7 = o4 == null ? void 0 : o4.createElement("div")) != null ? u7 : null;
  }), i2 = (0, import_react7.useContext)(f2), C2 = l2();
  return l(() => {
    !t9 || !r5 || t9.contains(r5) || (r5.setAttribute("data-headlessui-portal", ""), t9.appendChild(r5));
  }, [t9, r5]), l(() => {
    if (r5 && i2)
      return i2.register(r5);
  }, [i2, r5]), c2(() => {
    var u7;
    !t9 || !r5 || (r5 instanceof Node && t9.contains(r5) && t9.removeChild(r5), t9.childNodes.length <= 0 && ((u7 = t9.parentElement) == null || u7.removeChild(t9)));
  }), C2 ? !t9 || !r5 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a7 }, theirProps: n4, defaultTag: U, name: "Portal" }), r5) : null;
}
var S3 = import_react7.Fragment;
var v = (0, import_react7.createContext)(null);
function j(p7, l7) {
  let { target: n4, ...e4 } = p7, o4 = { ref: y2(l7) };
  return import_react7.default.createElement(v.Provider, { value: n4 }, X({ ourProps: o4, theirProps: e4, defaultTag: S3, name: "Popover.Group" }));
}
var f2 = (0, import_react7.createContext)(null);
function ae() {
  let p7 = (0, import_react7.useContext)(f2), l7 = (0, import_react7.useRef)([]), n4 = o2((o4) => (l7.current.push(o4), p7 && p7.register(o4), () => e4(o4))), e4 = o2((o4) => {
    let t9 = l7.current.indexOf(o4);
    t9 !== -1 && l7.current.splice(t9, 1), p7 && p7.unregister(o4);
  }), a7 = (0, import_react7.useMemo)(() => ({ register: n4, unregister: e4, portals: l7 }), [n4, e4, l7]);
  return [l7, (0, import_react7.useMemo)(() => function({ children: t9 }) {
    return import_react7.default.createElement(f2.Provider, { value: a7 }, t9);
  }, [a7])];
}
var D2 = D(N2);
var I2 = D(j);
var pe = Object.assign(D2, { Group: I2 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react8 = __toESM(require_react(), 1);
var d4 = (0, import_react8.createContext)(null);
function f3() {
  let r5 = (0, import_react8.useContext)(d4);
  if (r5 === null) {
    let t9 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t9, f3), t9;
  }
  return r5;
}
function M2() {
  let [r5, t9] = (0, import_react8.useState)([]);
  return [r5.length > 0 ? r5.join(" ") : void 0, (0, import_react8.useMemo)(() => function(e4) {
    let i2 = o2((s9) => (t9((o4) => [...o4, s9]), () => t9((o4) => {
      let p7 = o4.slice(), c7 = p7.indexOf(s9);
      return c7 !== -1 && p7.splice(c7, 1), p7;
    }))), n4 = (0, import_react8.useMemo)(() => ({ register: i2, slot: e4.slot, name: e4.name, props: e4.props }), [i2, e4.slot, e4.name, e4.props]);
    return import_react8.default.createElement(d4.Provider, { value: n4 }, e4.children);
  }, [t9])];
}
var S4 = "p";
function h2(r5, t9) {
  let a7 = I(), { id: e4 = `headlessui-description-${a7}`, ...i2 } = r5, n4 = f3(), s9 = y2(t9);
  l(() => n4.register(e4), [e4, n4.register]);
  let o4 = { ref: s9, ...n4.props, id: e4 };
  return X({ ourProps: o4, theirProps: i2, slot: n4.slot || {}, defaultTag: S4, name: n4.name || "Description" });
}
var y3 = D(h2);
var b = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react9 = __toESM(require_react(), 1);
var a2 = (0, import_react9.createContext)(() => {
});
a2.displayName = "StackContext";
var s6 = ((e4) => (e4[e4.Add = 0] = "Add", e4[e4.Remove = 1] = "Remove", e4))(s6 || {});
function x() {
  return (0, import_react9.useContext)(a2);
}
function M3({ children: i2, onUpdate: r5, type: e4, element: n4, enabled: u7 }) {
  let l7 = x(), o4 = o2((...t9) => {
    r5 == null || r5(...t9), l7(...t9);
  });
  return l(() => {
    let t9 = u7 === void 0 || u7 === true;
    return t9 && o4(0, e4, n4), () => {
      t9 && o4(1, e4, n4);
    };
  }, [o4, e4, n4, u7]), import_react9.default.createElement(a2.Provider, { value: o4 }, i2);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l5 = __toESM(require_react(), 1);
function i(e4, t9) {
  return e4 === t9 && (e4 !== 0 || 1 / e4 === 1 / t9) || e4 !== e4 && t9 !== t9;
}
var d6 = typeof Object.is == "function" ? Object.is : i;
var { useState: u4, useEffect: h3, useLayoutEffect: f4, useDebugValue: p3 } = l5;
function y4(e4, t9, c7) {
  const a7 = t9(), [{ inst: n4 }, o4] = u4({ inst: { value: a7, getSnapshot: t9 } });
  return f4(() => {
    n4.value = a7, n4.getSnapshot = t9, r3(n4) && o4({ inst: n4 });
  }, [e4, a7, t9]), h3(() => (r3(n4) && o4({ inst: n4 }), e4(() => {
    r3(n4) && o4({ inst: n4 });
  })), [e4]), p3(a7), a7;
}
function r3(e4) {
  const t9 = e4.getSnapshot, c7 = e4.value;
  try {
    const a7 = t9();
    return !d6(c7, a7);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t7(r5, e4, n4) {
  return e4();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r4 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s7 = !r4;
var c5 = s7 ? t7 : y4;
var a3 = "useSyncExternalStore" in e3 ? ((n4) => n4.useSyncExternalStore)(e3) : c5;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S5(t9) {
  return a3(t9.subscribe, t9.getSnapshot, t9.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a4(o4, r5) {
  let t9 = o4(), n4 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t9;
  }, subscribe(e4) {
    return n4.add(e4), () => n4.delete(e4);
  }, dispatch(e4, ...s9) {
    let i2 = r5[e4].call(t9, ...s9);
    i2 && (t9 = i2, n4.forEach((c7) => c7()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c6() {
  let o4;
  return { before({ doc: e4 }) {
    var l7;
    let n4 = e4.documentElement;
    o4 = ((l7 = e4.defaultView) != null ? l7 : window).innerWidth - n4.clientWidth;
  }, after({ doc: e4, d: n4 }) {
    let t9 = e4.documentElement, l7 = t9.clientWidth - t9.offsetWidth, r5 = o4 - l7;
    n4.style(t9, "paddingRight", `${r5}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p4() {
  if (!t2())
    return {};
  let o4;
  return { before() {
    o4 = window.pageYOffset;
  }, after({ doc: r5, d: l7, meta: s9 }) {
    function i2(e4) {
      return s9.containers.flatMap((t9) => t9()).some((t9) => t9.contains(e4));
    }
    l7.style(r5.body, "marginTop", `-${o4}px`), window.scrollTo(0, 0);
    let n4 = null;
    l7.addEventListener(r5, "click", (e4) => {
      if (e4.target instanceof HTMLElement)
        try {
          let t9 = e4.target.closest("a");
          if (!t9)
            return;
          let { hash: c7 } = new URL(t9.href), a7 = r5.querySelector(c7);
          a7 && !i2(a7) && (n4 = a7);
        } catch {
        }
    }, true), l7.addEventListener(r5, "touchmove", (e4) => {
      e4.target instanceof HTMLElement && !i2(e4.target) && e4.preventDefault();
    }, { passive: false }), l7.add(() => {
      window.scrollTo(0, window.pageYOffset + o4), n4 && n4.isConnected && (n4.scrollIntoView({ block: "nearest" }), n4 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l6() {
  return { before({ doc: e4, d: o4 }) {
    o4.style(e4.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m5(e4) {
  let n4 = {};
  for (let t9 of e4)
    Object.assign(n4, t9(n4));
  return n4;
}
var a5 = a4(() => /* @__PURE__ */ new Map(), { PUSH(e4, n4) {
  var o4;
  let t9 = (o4 = this.get(e4)) != null ? o4 : { doc: e4, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t9.count++, t9.meta.add(n4), this.set(e4, t9), this;
}, POP(e4, n4) {
  let t9 = this.get(e4);
  return t9 && (t9.count--, t9.meta.delete(n4)), this;
}, SCROLL_PREVENT({ doc: e4, d: n4, meta: t9 }) {
  let o4 = { doc: e4, d: n4, meta: m5(t9) }, c7 = [p4(), c6(), l6()];
  c7.forEach(({ before: r5 }) => r5 == null ? void 0 : r5(o4)), c7.forEach(({ after: r5 }) => r5 == null ? void 0 : r5(o4));
}, SCROLL_ALLOW({ d: e4 }) {
  e4.dispose();
}, TEARDOWN({ doc: e4 }) {
  this.delete(e4);
} });
a5.subscribe(() => {
  let e4 = a5.getSnapshot(), n4 = /* @__PURE__ */ new Map();
  for (let [t9] of e4)
    n4.set(t9, t9.documentElement.style.overflow);
  for (let t9 of e4.values()) {
    let o4 = n4.get(t9.doc) === "hidden", c7 = t9.count !== 0;
    (c7 && !o4 || !c7 && o4) && a5.dispatch(t9.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t9), t9.count === 0 && a5.dispatch("TEARDOWN", t9);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p5(e4, r5, n4) {
  let f5 = S5(a5), o4 = e4 ? f5.get(e4) : void 0, i2 = o4 ? o4.count > 0 : false;
  return l(() => {
    if (!(!e4 || !r5))
      return a5.dispatch("PUSH", e4, n4), () => a5.dispatch("POP", e4, n4);
  }, [r5, e4]), i2;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u5 = /* @__PURE__ */ new Map();
var t8 = /* @__PURE__ */ new Map();
function h4(r5, l7 = true) {
  l(() => {
    var o4;
    if (!l7)
      return;
    let e4 = typeof r5 == "function" ? r5() : r5.current;
    if (!e4)
      return;
    function a7() {
      var d7;
      if (!e4)
        return;
      let i2 = (d7 = t8.get(e4)) != null ? d7 : 1;
      if (i2 === 1 ? t8.delete(e4) : t8.set(e4, i2 - 1), i2 !== 1)
        return;
      let n4 = u5.get(e4);
      n4 && (n4["aria-hidden"] === null ? e4.removeAttribute("aria-hidden") : e4.setAttribute("aria-hidden", n4["aria-hidden"]), e4.inert = n4.inert, u5.delete(e4));
    }
    let f5 = (o4 = t8.get(e4)) != null ? o4 : 0;
    return t8.set(e4, f5 + 1), f5 !== 0 || (u5.set(e4, { "aria-hidden": e4.getAttribute("aria-hidden"), inert: e4.inert }), e4.setAttribute("aria-hidden", "true"), e4.inert = true), a7;
  }, [r5, l7]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react10 = __toESM(require_react(), 1);
function p6({ defaultContainers: f5 = [], portals: o4 } = {}) {
  let t9 = (0, import_react10.useRef)(null), i2 = n2(t9), u7 = o2(() => {
    var r5;
    let n4 = [];
    for (let e4 of f5)
      e4 !== null && (e4 instanceof HTMLElement ? n4.push(e4) : "current" in e4 && e4.current instanceof HTMLElement && n4.push(e4.current));
    if (o4 != null && o4.current)
      for (let e4 of o4.current)
        n4.push(e4);
    for (let e4 of (r5 = i2 == null ? void 0 : i2.querySelectorAll("html > *, body > *")) != null ? r5 : [])
      e4 !== document.body && e4 !== document.head && e4 instanceof HTMLElement && e4.id !== "headlessui-portal-root" && (e4.contains(t9.current) || n4.some((c7) => e4.contains(c7)) || n4.push(e4));
    return n4;
  });
  return { resolveContainers: u7, contains: o2((n4) => u7().some((r5) => r5.contains(n4))), mainTreeNodeRef: t9, MainTreeNode: (0, import_react10.useMemo)(() => function() {
    return import_react10.default.createElement(c, { features: p2.Hidden, ref: t9 });
  }, [t9]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o4) => (o4[o4.Open = 0] = "Open", o4[o4.Closed = 1] = "Closed", o4))(_e || {});
var Ie = ((e4) => (e4[e4.SetTitleId = 0] = "SetTitleId", e4))(Ie || {});
var Me = { [0](t9, e4) {
  return t9.titleId === e4.id ? t9 : { ...t9, titleId: e4.id };
} };
var I3 = (0, import_react11.createContext)(null);
I3.displayName = "DialogContext";
function b2(t9) {
  let e4 = (0, import_react11.useContext)(I3);
  if (e4 === null) {
    let o4 = new Error(`<${t9} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, b2), o4;
  }
  return e4;
}
function we(t9, e4, o4 = () => [document.body]) {
  p5(t9, e4, (i2) => {
    var n4;
    return { containers: [...(n4 = i2.containers) != null ? n4 : [], o4] };
  });
}
function Be(t9, e4) {
  return u(e4.type, Me, t9, e4);
}
var He = "div";
var Ge = S.RenderStrategy | S.Static;
function Ne(t9, e4) {
  var X3;
  let o4 = I(), { id: i2 = `headlessui-dialog-${o4}`, open: n4, onClose: l7, initialFocus: s9, __demoMode: g2 = false, ...T4 } = t9, [m7, h5] = (0, import_react11.useState)(0), a7 = C();
  n4 === void 0 && a7 !== null && (n4 = (a7 & d.Open) === d.Open);
  let D4 = (0, import_react11.useRef)(null), Q2 = y2(D4, e4), f5 = n2(D4), N3 = t9.hasOwnProperty("open") || a7 !== null, U2 = t9.hasOwnProperty("onClose");
  if (!N3 && !U2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N3)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n4 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n4}`);
  if (typeof l7 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l7}`);
  let p7 = n4 ? 0 : 1, [S6, Z2] = (0, import_react11.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react11.createRef)() }), P4 = o2(() => l7(false)), W = o2((r5) => Z2({ type: 0, id: r5 })), L2 = l2() ? g2 ? false : p7 === 0 : false, F2 = m7 > 1, Y2 = (0, import_react11.useContext)(I3) !== null, [ee, te] = ae(), { resolveContainers: M4, mainTreeNodeRef: k, MainTreeNode: oe } = p6({ portals: ee, defaultContainers: [(X3 = S6.panelRef.current) != null ? X3 : D4.current] }), re = F2 ? "parent" : "leaf", $2 = a7 !== null ? (a7 & d.Closing) === d.Closing : false, ne = (() => Y2 || $2 ? false : L2)(), le = (0, import_react11.useCallback)(() => {
    var r5, c7;
    return (c7 = Array.from((r5 = f5 == null ? void 0 : f5.querySelectorAll("body > *")) != null ? r5 : []).find((d7) => d7.id === "headlessui-portal-root" ? false : d7.contains(k.current) && d7 instanceof HTMLElement)) != null ? c7 : null;
  }, [k]);
  h4(le, ne);
  let ae2 = (() => F2 ? true : L2)(), ie = (0, import_react11.useCallback)(() => {
    var r5, c7;
    return (c7 = Array.from((r5 = f5 == null ? void 0 : f5.querySelectorAll("[data-headlessui-portal]")) != null ? r5 : []).find((d7) => d7.contains(k.current) && d7 instanceof HTMLElement)) != null ? c7 : null;
  }, [k]);
  h4(ie, ae2);
  let se = (() => !(!L2 || F2))();
  H(M4, P4, se);
  let pe2 = (() => !(F2 || p7 !== 0))();
  E(f5 == null ? void 0 : f5.defaultView, "keydown", (r5) => {
    pe2 && (r5.defaultPrevented || r5.key === o3.Escape && (r5.preventDefault(), r5.stopPropagation(), P4()));
  });
  let de = (() => !($2 || p7 !== 0 || Y2))();
  we(f5, de, M4), (0, import_react11.useEffect)(() => {
    if (p7 !== 0 || !D4.current)
      return;
    let r5 = new ResizeObserver((c7) => {
      for (let d7 of c7) {
        let x2 = d7.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && P4();
      }
    });
    return r5.observe(D4.current), () => r5.disconnect();
  }, [p7, D4, P4]);
  let [ue, fe] = M2(), ge2 = (0, import_react11.useMemo)(() => [{ dialogState: p7, close: P4, setTitleId: W }, S6], [p7, S6, P4, W]), J2 = (0, import_react11.useMemo)(() => ({ open: p7 === 0 }), [p7]), Te = { ref: Q2, id: i2, role: "dialog", "aria-modal": p7 === 0 ? true : void 0, "aria-labelledby": S6.titleId, "aria-describedby": ue };
  return import_react11.default.createElement(M3, { type: "Dialog", enabled: p7 === 0, element: D4, onUpdate: o2((r5, c7) => {
    c7 === "Dialog" && u(r5, { [s6.Add]: () => h5((d7) => d7 + 1), [s6.Remove]: () => h5((d7) => d7 - 1) });
  }) }, import_react11.default.createElement(P2, { force: true }, import_react11.default.createElement(pe, null, import_react11.default.createElement(I3.Provider, { value: ge2 }, import_react11.default.createElement(pe.Group, { target: D4 }, import_react11.default.createElement(P2, { force: false }, import_react11.default.createElement(fe, { slot: J2, name: "Dialog.Description" }, import_react11.default.createElement(ge, { initialFocus: s9, containers: M4, features: L2 ? u(re, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react11.default.createElement(te, null, X({ ourProps: Te, theirProps: T4, slot: J2, defaultTag: He, features: Ge, visible: p7 === 0, name: "Dialog" }))))))))), import_react11.default.createElement(oe, null));
}
var Ue = "div";
function We(t9, e4) {
  let o4 = I(), { id: i2 = `headlessui-dialog-overlay-${o4}`, ...n4 } = t9, [{ dialogState: l7, close: s9 }] = b2("Dialog.Overlay"), g2 = y2(e4), T4 = o2((a7) => {
    if (a7.target === a7.currentTarget) {
      if (r(a7.currentTarget))
        return a7.preventDefault();
      a7.preventDefault(), a7.stopPropagation(), s9();
    }
  }), m7 = (0, import_react11.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return X({ ourProps: { ref: g2, id: i2, "aria-hidden": true, onClick: T4 }, theirProps: n4, slot: m7, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e(t9, e4) {
  let o4 = I(), { id: i2 = `headlessui-dialog-backdrop-${o4}`, ...n4 } = t9, [{ dialogState: l7 }, s9] = b2("Dialog.Backdrop"), g2 = y2(e4);
  (0, import_react11.useEffect)(() => {
    if (s9.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s9.panelRef]);
  let T4 = (0, import_react11.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return import_react11.default.createElement(P2, { force: true }, import_react11.default.createElement(pe, null, X({ ourProps: { ref: g2, id: i2, "aria-hidden": true }, theirProps: n4, slot: T4, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t9, e4) {
  let o4 = I(), { id: i2 = `headlessui-dialog-panel-${o4}`, ...n4 } = t9, [{ dialogState: l7 }, s9] = b2("Dialog.Panel"), g2 = y2(e4, s9.panelRef), T4 = (0, import_react11.useMemo)(() => ({ open: l7 === 0 }), [l7]), m7 = o2((a7) => {
    a7.stopPropagation();
  });
  return X({ ourProps: { ref: g2, id: i2, onClick: m7 }, theirProps: n4, slot: T4, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t9, e4) {
  let o4 = I(), { id: i2 = `headlessui-dialog-title-${o4}`, ...n4 } = t9, [{ dialogState: l7, setTitleId: s9 }] = b2("Dialog.Title"), g2 = y2(e4);
  (0, import_react11.useEffect)(() => (s9(i2), () => s9(null)), [i2, s9]);
  let T4 = (0, import_react11.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return X({ ourProps: { ref: g2, id: i2 }, theirProps: n4, slot: T4, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D(Ne);
var qe = D($e);
var ze = D(Xe);
var Qe = D(We);
var Ze = D(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b });

export {
  s4 as s,
  n,
  n2,
  E,
  ae,
  p6 as p,
  _t
};
//# sourceMappingURL=/build/_shared/chunk-PI6H7ZJD.js.map
