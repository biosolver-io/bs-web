import {
  C,
  D2 as D,
  S,
  X,
  c2 as c,
  d,
  e,
  e2,
  f2 as f,
  j,
  l,
  l2,
  o,
  o2,
  p,
  s2 as s,
  u,
  y2 as y
} from "/build/_shared/chunk-KCLKX6RL.js";
import {
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l3(r) {
  let e3 = { called: false };
  return (...t2) => {
    if (!e3.called)
      return e3.called = true, r(...t2);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d2(t2, ...e3) {
  t2 && e3.length > 0 && t2.classList.add(...e3);
}
function v(t2, ...e3) {
  t2 && e3.length > 0 && t2.classList.remove(...e3);
}
function F(t2, e3) {
  let n2 = o();
  if (!t2)
    return n2.dispose;
  let { transitionDuration: m3, transitionDelay: o6 } = getComputedStyle(t2), [u3, p2] = [m3, o6].map((a3) => {
    let [r = 0] = a3.split(",").filter(Boolean).map((i2) => i2.includes("ms") ? parseFloat(i2) : parseFloat(i2) * 1e3).sort((i2, f4) => f4 - i2);
    return r;
  }), l5 = u3 + p2;
  if (l5 !== 0) {
    n2.group((r) => {
      r.setTimeout(() => {
        e3(), r.dispose();
      }, l5), r.addEventListener(t2, "transitionrun", (i2) => {
        i2.target === i2.currentTarget && r.dispose();
      });
    });
    let a3 = n2.addEventListener(t2, "transitionend", (r) => {
      r.target === r.currentTarget && (e3(), a3());
    });
  } else
    e3();
  return n2.add(() => e3()), n2.dispose;
}
function y2(t2, e3, n2, m3) {
  let o6 = n2 ? "enter" : "leave", u3 = o(), p2 = m3 !== void 0 ? l3(m3) : () => {
  };
  o6 === "enter" && (t2.removeAttribute("hidden"), t2.style.display = "");
  let l5 = u(o6, { enter: () => e3.enter, leave: () => e3.leave }), a3 = u(o6, { enter: () => e3.enterTo, leave: () => e3.leaveTo }), r = u(o6, { enter: () => e3.enterFrom, leave: () => e3.leaveFrom });
  return v(t2, ...e3.enter, ...e3.enterTo, ...e3.enterFrom, ...e3.leave, ...e3.leaveFrom, ...e3.leaveTo, ...e3.entered), d2(t2, ...l5, ...r), u3.nextFrame(() => {
    v(t2, ...r), d2(t2, ...a3), F(t2, () => (v(t2, ...l5), d2(t2, ...e3.entered), p2()));
  }), u3.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D2({ container: i2, direction: t2, classes: o6, onStart: s3, onStop: u3 }) {
  let a3 = f(), c4 = p(), r = s(t2);
  l(() => {
    let e3 = o();
    c4.add(e3.dispose);
    let n2 = i2.current;
    if (n2 && r.current !== "idle" && a3.current)
      return e3.dispose(), s3.current(r.current), e3.add(y2(n2, o6.current, r.current === "enter", () => {
        e3.dispose(), u3.current(r.current);
      })), e3.dispose;
  }, [t2]);
}

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react = __toESM(require_react(), 1);
function c2(a3 = 0) {
  let [l5, r] = (0, import_react.useState)(a3), t2 = f(), o6 = (0, import_react.useCallback)((e3) => {
    t2.current && r((u3) => u3 | e3);
  }, [l5, t2]), m3 = (0, import_react.useCallback)((e3) => Boolean(l5 & e3), [l5]), s3 = (0, import_react.useCallback)((e3) => {
    t2.current && r((u3) => u3 & ~e3);
  }, [r, t2]), g2 = (0, import_react.useCallback)((e3) => {
    t2.current && r((u3) => u3 ^ e3);
  }, [r]);
  return { flags: l5, addFlag: o6, hasFlag: m3, removeFlag: s3, toggleFlag: g2 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x(t2 = "") {
  return t2.split(" ").filter((n2) => n2.trim().length > 1);
}
var I = (0, import_react2.createContext)(null);
I.displayName = "TransitionContext";
var Ce = ((r) => (r.Visible = "visible", r.Hidden = "hidden", r))(Ce || {});
function Ee() {
  let t2 = (0, import_react2.useContext)(I);
  if (t2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t2;
}
function be() {
  let t2 = (0, import_react2.useContext)(_);
  if (t2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t2;
}
var _ = (0, import_react2.createContext)(null);
_.displayName = "NestingContext";
function M(t2) {
  return "children" in t2 ? M(t2.children) : t2.current.filter(({ el: n2 }) => n2.current !== null).filter(({ state: n2 }) => n2 === "visible").length > 0;
}
function re(t2, n2) {
  let r = s(t2), o6 = (0, import_react2.useRef)([]), N = f(), H = p(), p2 = o2((s3, e3 = j.Hidden) => {
    let a3 = o6.current.findIndex(({ el: i2 }) => i2 === s3);
    a3 !== -1 && (u(e3, { [j.Unmount]() {
      o6.current.splice(a3, 1);
    }, [j.Hidden]() {
      o6.current[a3].state = "hidden";
    } }), H.microTask(() => {
      var i2;
      !M(o6) && N.current && ((i2 = r.current) == null || i2.call(r));
    }));
  }), P = o2((s3) => {
    let e3 = o6.current.find(({ el: a3 }) => a3 === s3);
    return e3 ? e3.state !== "visible" && (e3.state = "visible") : o6.current.push({ el: s3, state: "visible" }), () => p2(s3, j.Unmount);
  }), h = (0, import_react2.useRef)([]), v2 = (0, import_react2.useRef)(Promise.resolve()), T = (0, import_react2.useRef)({ enter: [], leave: [], idle: [] }), g2 = o2((s3, e3, a3) => {
    h.current.splice(0), n2 && (n2.chains.current[e3] = n2.chains.current[e3].filter(([i2]) => i2 !== s3)), n2 == null || n2.chains.current[e3].push([s3, new Promise((i2) => {
      h.current.push(i2);
    })]), n2 == null || n2.chains.current[e3].push([s3, new Promise((i2) => {
      Promise.all(T.current[e3].map(([l5, R]) => R)).then(() => i2());
    })]), e3 === "enter" ? v2.current = v2.current.then(() => n2 == null ? void 0 : n2.wait.current).then(() => a3(e3)) : a3(e3);
  }), f4 = o2((s3, e3, a3) => {
    Promise.all(T.current[e3].splice(0).map(([i2, l5]) => l5)).then(() => {
      var i2;
      (i2 = h.current.shift()) == null || i2();
    }).then(() => a3(e3));
  });
  return (0, import_react2.useMemo)(() => ({ children: o6, register: P, unregister: p2, onStart: g2, onStop: f4, wait: v2, chains: T }), [P, p2, o6, g2, f4, T, v2]);
}
function Se() {
}
var xe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie(t2) {
  var r;
  let n2 = {};
  for (let o6 of xe)
    n2[o6] = (r = t2[o6]) != null ? r : Se;
  return n2;
}
function Pe(t2) {
  let n2 = (0, import_react2.useRef)(ie(t2));
  return (0, import_react2.useEffect)(() => {
    n2.current = ie(t2);
  }, [t2]), n2;
}
var Re = "div";
var oe = S.RenderStrategy;
function ye(t2, n2) {
  let { beforeEnter: r, afterEnter: o6, beforeLeave: N, afterLeave: H, enter: p2, enterFrom: P, enterTo: h, entered: v2, leave: T, leaveFrom: g2, leaveTo: f4, ...s3 } = t2, e3 = (0, import_react2.useRef)(null), a3 = y(e3, n2), i2 = s3.unmount ? j.Unmount : j.Hidden, { show: l5, appear: R, initial: d3 } = Ee(), [u3, U] = (0, import_react2.useState)(l5 ? "visible" : "hidden"), K = be(), { register: L, unregister: w } = K, j2 = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => L(e3), [L, e3]), (0, import_react2.useEffect)(() => {
    if (i2 === j.Hidden && e3.current) {
      if (l5 && u3 !== "visible") {
        U("visible");
        return;
      }
      return u(u3, { ["hidden"]: () => w(e3), ["visible"]: () => L(e3) });
    }
  }, [u3, e3, L, w, l5, i2]);
  let k = s({ enter: x(p2), enterFrom: x(P), enterTo: x(h), entered: x(v2), leave: x(T), leaveFrom: x(g2), leaveTo: x(f4) }), O = Pe({ beforeEnter: r, afterEnter: o6, beforeLeave: N, afterLeave: H }), G = l2();
  (0, import_react2.useEffect)(() => {
    if (G && u3 === "visible" && e3.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e3, u3, G]);
  let B = d3 && !R, ae = (() => !G || B || j2.current === l5 ? "idle" : l5 ? "enter" : "leave")(), D3 = c2(0), le = o2((C2) => u(C2, { enter: () => {
    D3.addFlag(d.Opening), O.current.beforeEnter();
  }, leave: () => {
    D3.addFlag(d.Closing), O.current.beforeLeave();
  }, idle: () => {
  } })), ue = o2((C2) => u(C2, { enter: () => {
    D3.removeFlag(d.Opening), O.current.afterEnter();
  }, leave: () => {
    D3.removeFlag(d.Closing), O.current.afterLeave();
  }, idle: () => {
  } })), V = re(() => {
    U("hidden"), w(e3);
  }, K);
  D2({ container: e3, classes: k, direction: ae, onStart: s((C2) => {
    V.onStart(e3, C2, le);
  }), onStop: s((C2) => {
    V.onStop(e3, C2, ue), C2 === "leave" && !M(V) && (U("hidden"), w(e3));
  }) }), (0, import_react2.useEffect)(() => {
    B && (i2 === j.Hidden ? j2.current = null : j2.current = l5);
  }, [l5, B, u3]);
  let J = s3, Te = { ref: a3 };
  return R && l5 && d3 && (J = { ...J, className: e2(s3.className, ...k.current.enter, ...k.current.enterFrom) }), import_react2.default.createElement(_.Provider, { value: V }, import_react2.default.createElement(c, { value: u(u3, { ["visible"]: d.Open, ["hidden"]: d.Closed }) | D3.flags }, X({ ourProps: Te, theirProps: J, defaultTag: Re, features: oe, visible: u3 === "visible", name: "Transition.Child" })));
}
function Ne(t2, n2) {
  let { show: r, appear: o6 = false, unmount: N, ...H } = t2, p2 = (0, import_react2.useRef)(null), P = y(p2, n2);
  l2();
  let h = C();
  if (r === void 0 && h !== null && (r = (h & d.Open) === d.Open), ![true, false].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v2, T] = (0, import_react2.useState)(r ? "visible" : "hidden"), g2 = re(() => {
    T("hidden");
  }), [f4, s3] = (0, import_react2.useState)(true), e3 = (0, import_react2.useRef)([r]);
  l(() => {
    f4 !== false && e3.current[e3.current.length - 1] !== r && (e3.current.push(r), s3(false));
  }, [e3, r]);
  let a3 = (0, import_react2.useMemo)(() => ({ show: r, appear: o6, initial: f4 }), [r, o6, f4]);
  (0, import_react2.useEffect)(() => {
    if (r)
      T("visible");
    else if (!M(g2))
      T("hidden");
    else {
      let d3 = p2.current;
      if (!d3)
        return;
      let u3 = d3.getBoundingClientRect();
      u3.x === 0 && u3.y === 0 && u3.width === 0 && u3.height === 0 && T("hidden");
    }
  }, [r, g2]);
  let i2 = { unmount: N }, l5 = o2(() => {
    var d3;
    f4 && s3(false), (d3 = t2.beforeEnter) == null || d3.call(t2);
  }), R = o2(() => {
    var d3;
    f4 && s3(false), (d3 = t2.beforeLeave) == null || d3.call(t2);
  });
  return import_react2.default.createElement(_.Provider, { value: g2 }, import_react2.default.createElement(I.Provider, { value: a3 }, X({ ourProps: { ...i2, as: import_react2.Fragment, children: import_react2.default.createElement(se, { ref: P, ...i2, ...H, beforeEnter: l5, beforeLeave: R }) }, theirProps: {}, defaultTag: import_react2.Fragment, features: oe, visible: v2 === "visible", name: "Transition" })));
}
function He(t2, n2) {
  let r = (0, import_react2.useContext)(I) !== null, o6 = C() !== null;
  return import_react2.default.createElement(import_react2.default.Fragment, null, !r && o6 ? import_react2.default.createElement(z, { ref: n2, ...t2 }) : import_react2.default.createElement(se, { ref: n2, ...t2 }));
}
var z = D(Ne);
var se = D(ye);
var De = D(He);
var $e = Object.assign(z, { Child: De, Root: z });

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react3 = __toESM(require_react(), 1);
function i(t2) {
  var n2;
  if (t2.type)
    return t2.type;
  let e3 = (n2 = t2.as) != null ? n2 : "button";
  if (typeof e3 == "string" && e3.toLowerCase() === "button")
    return "button";
}
function s2(t2, e3) {
  let [n2, u3] = (0, import_react3.useState)(() => i(t2));
  return l(() => {
    u3(i(t2));
  }, [t2.type, t2.as]), l(() => {
    n2 || e3.current && e3.current instanceof HTMLButtonElement && !e3.current.hasAttribute("type") && u3("button");
  }, [n2, e3]), n2;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react4 = __toESM(require_react(), 1);
function F2({ container: e3, accept: t2, walk: r, enabled: c4 = true }) {
  let o6 = (0, import_react4.useRef)(t2), l5 = (0, import_react4.useRef)(r);
  (0, import_react4.useEffect)(() => {
    o6.current = t2, l5.current = r;
  }, [t2, r]), l(() => {
    if (!e3 || !c4)
      return;
    let n2 = e(e3);
    if (!n2)
      return;
    let f4 = o6.current, p2 = l5.current, d3 = Object.assign((i2) => f4(i2), { acceptNode: f4 }), u3 = n2.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, d3, false);
    for (; u3.nextNode(); )
      p2(u3.currentNode);
  }, [e3, c4, o6, l5]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f3(r) {
  throw new Error("Unexpected object: " + r);
}
var a = ((e3) => (e3[e3.First = 0] = "First", e3[e3.Previous = 1] = "Previous", e3[e3.Next = 2] = "Next", e3[e3.Last = 3] = "Last", e3[e3.Specific = 4] = "Specific", e3[e3.Nothing = 5] = "Nothing", e3))(a || {});
function x2(r, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let l5 = n2.resolveActiveIndex(), s3 = l5 != null ? l5 : -1, d3 = (() => {
    switch (r.focus) {
      case 0:
        return t2.findIndex((e3) => !n2.resolveDisabled(e3));
      case 1: {
        let e3 = t2.slice().reverse().findIndex((i2, c4, u3) => s3 !== -1 && u3.length - c4 - 1 >= s3 ? false : !n2.resolveDisabled(i2));
        return e3 === -1 ? e3 : t2.length - 1 - e3;
      }
      case 2:
        return t2.findIndex((e3, i2) => i2 <= s3 ? false : !n2.resolveDisabled(e3));
      case 3: {
        let e3 = t2.slice().reverse().findIndex((i2) => !n2.resolveDisabled(i2));
        return e3 === -1 ? e3 : t2.length - 1 - e3;
      }
      case 4:
        return t2.findIndex((e3) => n2.resolveId(e3) === r.id);
      case 5:
        return null;
      default:
        f3(r);
    }
  })();
  return d3 === -1 ? l5 : d3;
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react5 = __toESM(require_react(), 1);
function t(e3) {
  return [e3.screenX, e3.screenY];
}
function u2() {
  let e3 = (0, import_react5.useRef)([-1, -1]);
  return { wasMoved(r) {
    let n2 = t(r);
    return e3.current[0] === n2[0] && e3.current[1] === n2[1] ? false : (e3.current = n2, true);
  }, update(r) {
    e3.current = t(r);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a2 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o5(e3) {
  var r, i2;
  let n2 = (r = e3.innerText) != null ? r : "", t2 = e3.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u3 = false;
  for (let f4 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f4.remove(), u3 = true;
  let l5 = u3 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a2.test(l5) && (l5 = l5.replace(a2, "")), l5;
}
function g(e3) {
  let n2 = e3.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e3.getAttribute("aria-labelledby");
  if (t2) {
    let u3 = t2.split(" ").map((l5) => {
      let r = document.getElementById(l5);
      if (r) {
        let i2 = r.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o5(r).trim();
      }
      return null;
    }).filter(Boolean);
    if (u3.length > 0)
      return u3.join(", ");
  }
  return o5(e3).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function b(c4) {
  let t2 = (0, import_react6.useRef)(""), r = (0, import_react6.useRef)("");
  return o2(() => {
    let e3 = c4.current;
    if (!e3)
      return "";
    let u3 = e3.innerText;
    if (t2.current === u3)
      return r.current;
    let n2 = g(e3).trim().toLowerCase();
    return t2.current = u3, r.current = n2, n2;
  });
}

export {
  s2 as s,
  F2 as F,
  a,
  x2 as x,
  u2 as u,
  b,
  $e
};
//# sourceMappingURL=/build/_shared/chunk-JRQATJZP.js.map
