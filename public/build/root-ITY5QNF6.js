import {
  base_default
} from "/build/_shared/chunk-JVNGUFS4.js";
import {
  $e,
  F,
  a,
  b,
  s as s2,
  u as u2,
  x
} from "/build/_shared/chunk-JRQATJZP.js";
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
  E,
  _t,
  ae,
  n,
  n2,
  p as p3,
  s as s3
} from "/build/_shared/chunk-PI6H7ZJD.js";
import {
  C,
  D,
  D2,
  H,
  I,
  I2,
  M,
  N,
  O,
  S,
  T,
  T2,
  X,
  _,
  c,
  c2,
  d,
  e,
  f,
  h,
  l,
  o,
  o2,
  o3,
  p,
  p2,
  r,
  s2 as s,
  u,
  y2 as y
} from "/build/_shared/chunk-KCLKX6RL.js";
import "/build/_shared/chunk-YUUU2RAQ.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
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
} from "/build/_shared/chunk-YYAXLAGZ.js";
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
var tailwind_default = "/build/_assets/tailwind-ZT4KQGJ5.css";

// app/layout/anon/Header.tsx
var import_react3 = __toESM(require_react());

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react = __toESM(require_react(), 1);
var me = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(me || {});
var de = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(de || {});
var fe = ((a2) => (a2[a2.OpenMenu = 0] = "OpenMenu", a2[a2.CloseMenu = 1] = "CloseMenu", a2[a2.GoToItem = 2] = "GoToItem", a2[a2.Search = 3] = "Search", a2[a2.ClearSearch = 4] = "ClearSearch", a2[a2.RegisterItem = 5] = "RegisterItem", a2[a2.UnregisterItem = 6] = "UnregisterItem", a2))(fe || {});
function w(e2, u3 = (r2) => r2) {
  let r2 = e2.activeItemIndex !== null ? e2.items[e2.activeItemIndex] : null, i = I2(u3(e2.items.slice()), (t) => t.dataRef.current.domRef.current), s4 = r2 ? i.indexOf(r2) : null;
  return s4 === -1 && (s4 = null), { items: i, activeItemIndex: s4 };
}
var Te = { [1](e2) {
  return e2.menuState === 1 ? e2 : { ...e2, activeItemIndex: null, menuState: 1 };
}, [0](e2) {
  return e2.menuState === 0 ? e2 : { ...e2, __demoMode: false, menuState: 0 };
}, [2]: (e2, u3) => {
  var s4;
  let r2 = w(e2), i = x(u3, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (t) => t.id, resolveDisabled: (t) => t.dataRef.current.disabled });
  return { ...e2, ...r2, searchQuery: "", activeItemIndex: i, activationTrigger: (s4 = u3.trigger) != null ? s4 : 1 };
}, [3]: (e2, u3) => {
  let i = e2.searchQuery !== "" ? 0 : 1, s4 = e2.searchQuery + u3.value.toLowerCase(), o4 = (e2.activeItemIndex !== null ? e2.items.slice(e2.activeItemIndex + i).concat(e2.items.slice(0, e2.activeItemIndex + i)) : e2.items).find((l2) => {
    var m;
    return ((m = l2.dataRef.current.textValue) == null ? void 0 : m.startsWith(s4)) && !l2.dataRef.current.disabled;
  }), a2 = o4 ? e2.items.indexOf(o4) : -1;
  return a2 === -1 || a2 === e2.activeItemIndex ? { ...e2, searchQuery: s4 } : { ...e2, searchQuery: s4, activeItemIndex: a2, activationTrigger: 1 };
}, [4](e2) {
  return e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e2, u3) => {
  let r2 = w(e2, (i) => [...i, { id: u3.id, dataRef: u3.dataRef }]);
  return { ...e2, ...r2 };
}, [6]: (e2, u3) => {
  let r2 = w(e2, (i) => {
    let s4 = i.findIndex((t) => t.id === u3.id);
    return s4 !== -1 && i.splice(s4, 1), i;
  });
  return { ...e2, ...r2, activationTrigger: 1 };
} };
var U = (0, import_react.createContext)(null);
U.displayName = "MenuContext";
function O2(e2) {
  let u3 = (0, import_react.useContext)(U);
  if (u3 === null) {
    let r2 = new Error(`<${e2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, O2), r2;
  }
  return u3;
}
function ye(e2, u3) {
  return u(u3.type, Te, e2, u3);
}
var Ie = import_react.Fragment;
function Me(e2, u3) {
  let { __demoMode: r2 = false, ...i } = e2, s4 = (0, import_react.useReducer)(ye, { __demoMode: r2, menuState: r2 ? 0 : 1, buttonRef: (0, import_react.createRef)(), itemsRef: (0, import_react.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t, itemsRef: o4, buttonRef: a2 }, l2] = s4, m = y(u3);
  H([a2, o4], (g, R) => {
    var p4;
    l2({ type: 1 }), h(R, T.Loose) || (g.preventDefault(), (p4 = a2.current) == null || p4.focus());
  }, t === 0);
  let I3 = o2(() => {
    l2({ type: 1 });
  }), A = (0, import_react.useMemo)(() => ({ open: t === 0, close: I3 }), [t, I3]), f2 = { ref: m };
  return import_react.default.createElement(U.Provider, { value: s4 }, import_react.default.createElement(c2, { value: u(t, { [0]: d.Open, [1]: d.Closed }) }, X({ ourProps: f2, theirProps: i, slot: A, defaultTag: Ie, name: "Menu" })));
}
var ge = "button";
function Re(e2, u3) {
  var R;
  let r2 = I(), { id: i = `headlessui-menu-button-${r2}`, ...s4 } = e2, [t, o4] = O2("Menu.Button"), a2 = y(t.buttonRef, u3), l2 = p(), m = o2((p4) => {
    switch (p4.key) {
      case o3.Space:
      case o3.Enter:
      case o3.ArrowDown:
        p4.preventDefault(), p4.stopPropagation(), o4({ type: 0 }), l2.nextFrame(() => o4({ type: 2, focus: a.First }));
        break;
      case o3.ArrowUp:
        p4.preventDefault(), p4.stopPropagation(), o4({ type: 0 }), l2.nextFrame(() => o4({ type: 2, focus: a.Last }));
        break;
    }
  }), I3 = o2((p4) => {
    switch (p4.key) {
      case o3.Space:
        p4.preventDefault();
        break;
    }
  }), A = o2((p4) => {
    if (r(p4.currentTarget))
      return p4.preventDefault();
    e2.disabled || (t.menuState === 0 ? (o4({ type: 1 }), l2.nextFrame(() => {
      var M2;
      return (M2 = t.buttonRef.current) == null ? void 0 : M2.focus({ preventScroll: true });
    })) : (p4.preventDefault(), o4({ type: 0 })));
  }), f2 = (0, import_react.useMemo)(() => ({ open: t.menuState === 0 }), [t]), g = { ref: a2, id: i, type: s2(e2, t.buttonRef), "aria-haspopup": "menu", "aria-controls": (R = t.itemsRef.current) == null ? void 0 : R.id, "aria-expanded": e2.disabled ? void 0 : t.menuState === 0, onKeyDown: m, onKeyUp: I3, onClick: A };
  return X({ ourProps: g, theirProps: s4, slot: f2, defaultTag: ge, name: "Menu.Button" });
}
var Ae = "div";
var be = S.RenderStrategy | S.Static;
function Ee(e2, u3) {
  var M2, b2;
  let r2 = I(), { id: i = `headlessui-menu-items-${r2}`, ...s4 } = e2, [t, o4] = O2("Menu.Items"), a2 = y(t.itemsRef, u3), l2 = n2(t.itemsRef), m = p(), I3 = C(), A = (() => I3 !== null ? (I3 & d.Open) === d.Open : t.menuState === 0)();
  (0, import_react.useEffect)(() => {
    let n3 = t.itemsRef.current;
    n3 && t.menuState === 0 && n3 !== (l2 == null ? void 0 : l2.activeElement) && n3.focus({ preventScroll: true });
  }, [t.menuState, t.itemsRef, l2]), F({ container: t.itemsRef.current, enabled: t.menuState === 0, accept(n3) {
    return n3.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n3) {
    n3.setAttribute("role", "none");
  } });
  let f2 = o2((n3) => {
    var E2, P;
    switch (m.dispose(), n3.key) {
      case o3.Space:
        if (t.searchQuery !== "")
          return n3.preventDefault(), n3.stopPropagation(), o4({ type: 3, value: n3.key });
      case o3.Enter:
        if (n3.preventDefault(), n3.stopPropagation(), o4({ type: 1 }), t.activeItemIndex !== null) {
          let { dataRef: S2 } = t.items[t.activeItemIndex];
          (P = (E2 = S2.current) == null ? void 0 : E2.domRef.current) == null || P.click();
        }
        D(t.buttonRef.current);
        break;
      case o3.ArrowDown:
        return n3.preventDefault(), n3.stopPropagation(), o4({ type: 2, focus: a.Next });
      case o3.ArrowUp:
        return n3.preventDefault(), n3.stopPropagation(), o4({ type: 2, focus: a.Previous });
      case o3.Home:
      case o3.PageUp:
        return n3.preventDefault(), n3.stopPropagation(), o4({ type: 2, focus: a.First });
      case o3.End:
      case o3.PageDown:
        return n3.preventDefault(), n3.stopPropagation(), o4({ type: 2, focus: a.Last });
      case o3.Escape:
        n3.preventDefault(), n3.stopPropagation(), o4({ type: 1 }), o().nextFrame(() => {
          var S2;
          return (S2 = t.buttonRef.current) == null ? void 0 : S2.focus({ preventScroll: true });
        });
        break;
      case o3.Tab:
        n3.preventDefault(), n3.stopPropagation(), o4({ type: 1 }), o().nextFrame(() => {
          _(t.buttonRef.current, n3.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n3.key.length === 1 && (o4({ type: 3, value: n3.key }), m.setTimeout(() => o4({ type: 4 }), 350));
        break;
    }
  }), g = o2((n3) => {
    switch (n3.key) {
      case o3.Space:
        n3.preventDefault();
        break;
    }
  }), R = (0, import_react.useMemo)(() => ({ open: t.menuState === 0 }), [t]), p4 = { "aria-activedescendant": t.activeItemIndex === null || (M2 = t.items[t.activeItemIndex]) == null ? void 0 : M2.id, "aria-labelledby": (b2 = t.buttonRef.current) == null ? void 0 : b2.id, id: i, onKeyDown: f2, onKeyUp: g, role: "menu", tabIndex: 0, ref: a2 };
  return X({ ourProps: p4, theirProps: s4, slot: R, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react.Fragment;
function Pe(e2, u3) {
  let r2 = I(), { id: i = `headlessui-menu-item-${r2}`, disabled: s4 = false, ...t } = e2, [o4, a2] = O2("Menu.Item"), l2 = o4.activeItemIndex !== null ? o4.items[o4.activeItemIndex].id === i : false, m = (0, import_react.useRef)(null), I3 = y(u3, m);
  l(() => {
    if (o4.__demoMode || o4.menuState !== 0 || !l2 || o4.activationTrigger === 0)
      return;
    let T3 = o();
    return T3.requestAnimationFrame(() => {
      var v, B;
      (B = (v = m.current) == null ? void 0 : v.scrollIntoView) == null || B.call(v, { block: "nearest" });
    }), T3.dispose;
  }, [o4.__demoMode, m, l2, o4.menuState, o4.activationTrigger, o4.activeItemIndex]);
  let A = b(m), f2 = (0, import_react.useRef)({ disabled: s4, domRef: m, get textValue() {
    return A();
  } });
  l(() => {
    f2.current.disabled = s4;
  }, [f2, s4]), l(() => (a2({ type: 5, id: i, dataRef: f2 }), () => a2({ type: 6, id: i })), [f2, i]);
  let g = o2(() => {
    a2({ type: 1 });
  }), R = o2((T3) => {
    if (s4)
      return T3.preventDefault();
    a2({ type: 1 }), D(o4.buttonRef.current);
  }), p4 = o2(() => {
    if (s4)
      return a2({ type: 2, focus: a.Nothing });
    a2({ type: 2, focus: a.Specific, id: i });
  }), M2 = u2(), b2 = o2((T3) => M2.update(T3)), n3 = o2((T3) => {
    M2.wasMoved(T3) && (s4 || l2 || a2({ type: 2, focus: a.Specific, id: i, trigger: 0 }));
  }), E2 = o2((T3) => {
    M2.wasMoved(T3) && (s4 || l2 && a2({ type: 2, focus: a.Nothing }));
  }), P = (0, import_react.useMemo)(() => ({ active: l2, disabled: s4, close: g }), [l2, s4, g]);
  return X({ ourProps: { id: i, ref: I3, role: "menuitem", tabIndex: s4 === true ? void 0 : -1, "aria-disabled": s4 === true ? true : void 0, disabled: void 0, onClick: R, onFocus: p4, onPointerEnter: b2, onMouseEnter: b2, onPointerMove: n3, onMouseMove: n3, onPointerLeave: E2, onMouseLeave: E2 }, theirProps: t, slot: P, defaultTag: Se, name: "Menu.Item" });
}
var ve = D2(Me);
var xe = D2(Re);
var he = D2(Ee);
var De = D2(Pe);
var it = Object.assign(ve, { Button: xe, Items: he, Item: De });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react2 = __toESM(require_react(), 1);
var De2 = ((u3) => (u3[u3.Open = 0] = "Open", u3[u3.Closed = 1] = "Closed", u3))(De2 || {});
var he2 = ((e2) => (e2[e2.TogglePopover = 0] = "TogglePopover", e2[e2.ClosePopover = 1] = "ClosePopover", e2[e2.SetButton = 2] = "SetButton", e2[e2.SetButtonId = 3] = "SetButtonId", e2[e2.SetPanel = 4] = "SetPanel", e2[e2.SetPanelId = 5] = "SetPanelId", e2))(he2 || {});
var He = { [0]: (t) => {
  let o4 = { ...t, popoverState: u(t.popoverState, { [0]: 1, [1]: 0 }) };
  return o4.popoverState === 0 && (o4.__demoMode = false), o4;
}, [1](t) {
  return t.popoverState === 1 ? t : { ...t, popoverState: 1 };
}, [2](t, o4) {
  return t.button === o4.button ? t : { ...t, button: o4.button };
}, [3](t, o4) {
  return t.buttonId === o4.buttonId ? t : { ...t, buttonId: o4.buttonId };
}, [4](t, o4) {
  return t.panel === o4.panel ? t : { ...t, panel: o4.panel };
}, [5](t, o4) {
  return t.panelId === o4.panelId ? t : { ...t, panelId: o4.panelId };
} };
var ue = (0, import_react2.createContext)(null);
ue.displayName = "PopoverContext";
function oe(t) {
  let o4 = (0, import_react2.useContext)(ue);
  if (o4 === null) {
    let u3 = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u3, oe), u3;
  }
  return o4;
}
var ie = (0, import_react2.createContext)(null);
ie.displayName = "PopoverAPIContext";
function fe2(t) {
  let o4 = (0, import_react2.useContext)(ie);
  if (o4 === null) {
    let u3 = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u3, fe2), u3;
  }
  return o4;
}
var Pe2 = (0, import_react2.createContext)(null);
Pe2.displayName = "PopoverGroupContext";
function Ee2() {
  return (0, import_react2.useContext)(Pe2);
}
var re = (0, import_react2.createContext)(null);
re.displayName = "PopoverPanelContext";
function _e() {
  return (0, import_react2.useContext)(re);
}
function Ge(t, o4) {
  return u(o4.type, He, t, o4);
}
var ke = "div";
function we(t, o4) {
  var I3;
  let { __demoMode: u3 = false, ...A } = t, O3 = (0, import_react2.useRef)(null), n3 = y(o4, T2((l2) => {
    O3.current = l2;
  })), e2 = (0, import_react2.useRef)([]), T3 = (0, import_react2.useReducer)(Ge, { __demoMode: u3, popoverState: u3 ? 0 : 1, buttons: e2, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react2.createRef)(), afterPanelSentinel: (0, import_react2.createRef)() }), [{ popoverState: P, button: p4, buttonId: F2, panel: a2, panelId: m, beforePanelSentinel: y2, afterPanelSentinel: s4 }, i] = T3, d2 = n2((I3 = O3.current) != null ? I3 : p4), g = (0, import_react2.useMemo)(() => {
    if (!p4 || !a2)
      return false;
    for (let K2 of document.querySelectorAll("body > *"))
      if (Number(K2 == null ? void 0 : K2.contains(p4)) ^ Number(K2 == null ? void 0 : K2.contains(a2)))
        return true;
    let l2 = f(), R = l2.indexOf(p4), q2 = (R + l2.length - 1) % l2.length, W = (R + 1) % l2.length, z2 = l2[q2], ge2 = l2[W];
    return !a2.contains(z2) && !a2.contains(ge2);
  }, [p4, a2]), L = s(F2), h2 = s(m), _2 = (0, import_react2.useMemo)(() => ({ buttonId: L, panelId: h2, close: () => i({ type: 1 }) }), [L, h2, i]), B = Ee2(), D3 = B == null ? void 0 : B.registerPopover, f2 = o2(() => {
    var l2;
    return (l2 = B == null ? void 0 : B.isFocusWithinPopoverGroup()) != null ? l2 : (d2 == null ? void 0 : d2.activeElement) && ((p4 == null ? void 0 : p4.contains(d2.activeElement)) || (a2 == null ? void 0 : a2.contains(d2.activeElement)));
  });
  (0, import_react2.useEffect)(() => D3 == null ? void 0 : D3(_2), [D3, _2]);
  let [E2, b2] = ae(), c3 = p3({ portals: E2, defaultContainers: [p4, a2] });
  E(d2 == null ? void 0 : d2.defaultView, "focus", (l2) => {
    var R, q2, W, z2;
    l2.target !== window && l2.target instanceof HTMLElement && P === 0 && (f2() || p4 && a2 && (c3.contains(l2.target) || (q2 = (R = y2.current) == null ? void 0 : R.contains) != null && q2.call(R, l2.target) || (z2 = (W = s4.current) == null ? void 0 : W.contains) != null && z2.call(W, l2.target) || i({ type: 1 })));
  }, true), H(c3.resolveContainers, (l2, R) => {
    i({ type: 1 }), h(R, T.Loose) || (l2.preventDefault(), p4 == null || p4.focus());
  }, P === 0);
  let M2 = o2((l2) => {
    i({ type: 1 });
    let R = (() => l2 ? l2 instanceof HTMLElement ? l2 : "current" in l2 && l2.current instanceof HTMLElement ? l2.current : p4 : p4)();
    R == null || R.focus();
  }), r2 = (0, import_react2.useMemo)(() => ({ close: M2, isPortalled: g }), [M2, g]), v = (0, import_react2.useMemo)(() => ({ open: P === 0, close: M2 }), [P, M2]), x3 = { ref: n3 };
  return import_react2.default.createElement(re.Provider, { value: null }, import_react2.default.createElement(ue.Provider, { value: T3 }, import_react2.default.createElement(ie.Provider, { value: r2 }, import_react2.default.createElement(c2, { value: u(P, { [0]: d.Open, [1]: d.Closed }) }, import_react2.default.createElement(b2, null, X({ ourProps: x3, theirProps: A, slot: v, defaultTag: ke, name: "Popover" }), import_react2.default.createElement(c3.MainTreeNode, null))))));
}
var Ne = "button";
function Ue(t, o4) {
  let u3 = I(), { id: A = `headlessui-popover-button-${u3}`, ...O3 } = t, [n3, e2] = oe("Popover.Button"), { isPortalled: T3 } = fe2("Popover.Button"), P = (0, import_react2.useRef)(null), p4 = `headlessui-focus-sentinel-${I()}`, F2 = Ee2(), a2 = F2 == null ? void 0 : F2.closeOthers, y2 = _e() !== null;
  (0, import_react2.useEffect)(() => {
    if (!y2)
      return e2({ type: 3, buttonId: A }), () => {
        e2({ type: 3, buttonId: null });
      };
  }, [y2, A, e2]);
  let [s4] = (0, import_react2.useState)(() => Symbol()), i = y(P, o4, y2 ? null : (r2) => {
    if (r2)
      n3.buttons.current.push(s4);
    else {
      let v = n3.buttons.current.indexOf(s4);
      v !== -1 && n3.buttons.current.splice(v, 1);
    }
    n3.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r2 && e2({ type: 2, button: r2 });
  }), d2 = y(P, o4), g = n2(P), L = o2((r2) => {
    var v, x3, I3;
    if (y2) {
      if (n3.popoverState === 1)
        return;
      switch (r2.key) {
        case o3.Space:
        case o3.Enter:
          r2.preventDefault(), (x3 = (v = r2.target).click) == null || x3.call(v), e2({ type: 1 }), (I3 = n3.button) == null || I3.focus();
          break;
      }
    } else
      switch (r2.key) {
        case o3.Space:
        case o3.Enter:
          r2.preventDefault(), r2.stopPropagation(), n3.popoverState === 1 && (a2 == null || a2(n3.buttonId)), e2({ type: 0 });
          break;
        case o3.Escape:
          if (n3.popoverState !== 0)
            return a2 == null ? void 0 : a2(n3.buttonId);
          if (!P.current || g != null && g.activeElement && !P.current.contains(g.activeElement))
            return;
          r2.preventDefault(), r2.stopPropagation(), e2({ type: 1 });
          break;
      }
  }), h2 = o2((r2) => {
    y2 || r2.key === o3.Space && r2.preventDefault();
  }), _2 = o2((r2) => {
    var v, x3;
    r(r2.currentTarget) || t.disabled || (y2 ? (e2({ type: 1 }), (v = n3.button) == null || v.focus()) : (r2.preventDefault(), r2.stopPropagation(), n3.popoverState === 1 && (a2 == null || a2(n3.buttonId)), e2({ type: 0 }), (x3 = n3.button) == null || x3.focus()));
  }), B = o2((r2) => {
    r2.preventDefault(), r2.stopPropagation();
  }), D3 = n3.popoverState === 0, f2 = (0, import_react2.useMemo)(() => ({ open: D3 }), [D3]), E2 = s2(t, P), b2 = y2 ? { ref: d2, type: E2, onKeyDown: L, onClick: _2 } : { ref: i, id: n3.buttonId, type: E2, "aria-expanded": t.disabled ? void 0 : n3.popoverState === 0, "aria-controls": n3.panel ? n3.panelId : void 0, onKeyDown: L, onKeyUp: h2, onClick: _2, onMouseDown: B }, c3 = n(), M2 = o2(() => {
    let r2 = n3.panel;
    if (!r2)
      return;
    function v() {
      u(c3.current, { [s3.Forwards]: () => O(r2, M.First), [s3.Backwards]: () => O(r2, M.Last) }) === N.Error && O(f().filter((I3) => I3.dataset.headlessuiFocusGuard !== "true"), u(c3.current, { [s3.Forwards]: M.Next, [s3.Backwards]: M.Previous }), { relativeTo: n3.button });
    }
    v();
  });
  return import_react2.default.createElement(import_react2.default.Fragment, null, X({ ourProps: b2, theirProps: O3, slot: f2, defaultTag: Ne, name: "Popover.Button" }), D3 && !y2 && T3 && import_react2.default.createElement(c, { id: p4, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: M2 }));
}
var We = "div";
var Ke = S.RenderStrategy | S.Static;
function je(t, o4) {
  let u3 = I(), { id: A = `headlessui-popover-overlay-${u3}`, ...O3 } = t, [{ popoverState: n3 }, e2] = oe("Popover.Overlay"), T3 = y(o4), P = C(), p4 = (() => P !== null ? (P & d.Open) === d.Open : n3 === 0)(), F2 = o2((y2) => {
    if (r(y2.currentTarget))
      return y2.preventDefault();
    e2({ type: 1 });
  }), a2 = (0, import_react2.useMemo)(() => ({ open: n3 === 0 }), [n3]);
  return X({ ourProps: { ref: T3, id: A, "aria-hidden": true, onClick: F2 }, theirProps: O3, slot: a2, defaultTag: We, features: Ke, visible: p4, name: "Popover.Overlay" });
}
var Ve = "div";
var $e2 = S.RenderStrategy | S.Static;
function Je(t, o4) {
  let u3 = I(), { id: A = `headlessui-popover-panel-${u3}`, focus: O3 = false, ...n3 } = t, [e2, T3] = oe("Popover.Panel"), { close: P, isPortalled: p4 } = fe2("Popover.Panel"), F2 = `headlessui-focus-sentinel-before-${I()}`, a2 = `headlessui-focus-sentinel-after-${I()}`, m = (0, import_react2.useRef)(null), y2 = y(m, o4, (f2) => {
    T3({ type: 4, panel: f2 });
  }), s4 = n2(m);
  l(() => (T3({ type: 5, panelId: A }), () => {
    T3({ type: 5, panelId: null });
  }), [A, T3]);
  let i = C(), d2 = (() => i !== null ? (i & d.Open) === d.Open : e2.popoverState === 0)(), g = o2((f2) => {
    var E2;
    switch (f2.key) {
      case o3.Escape:
        if (e2.popoverState !== 0 || !m.current || s4 != null && s4.activeElement && !m.current.contains(s4.activeElement))
          return;
        f2.preventDefault(), f2.stopPropagation(), T3({ type: 1 }), (E2 = e2.button) == null || E2.focus();
        break;
    }
  });
  (0, import_react2.useEffect)(() => {
    var f2;
    t.static || e2.popoverState === 1 && ((f2 = t.unmount) == null || f2) && T3({ type: 4, panel: null });
  }, [e2.popoverState, t.unmount, t.static, T3]), (0, import_react2.useEffect)(() => {
    if (e2.__demoMode || !O3 || e2.popoverState !== 0 || !m.current)
      return;
    let f2 = s4 == null ? void 0 : s4.activeElement;
    m.current.contains(f2) || O(m.current, M.First);
  }, [e2.__demoMode, O3, m, e2.popoverState]);
  let L = (0, import_react2.useMemo)(() => ({ open: e2.popoverState === 0, close: P }), [e2, P]), h2 = { ref: y2, id: A, onKeyDown: g, onBlur: O3 && e2.popoverState === 0 ? (f2) => {
    var b2, c3, M2, r2, v;
    let E2 = f2.relatedTarget;
    E2 && m.current && ((b2 = m.current) != null && b2.contains(E2) || (T3({ type: 1 }), ((M2 = (c3 = e2.beforePanelSentinel.current) == null ? void 0 : c3.contains) != null && M2.call(c3, E2) || (v = (r2 = e2.afterPanelSentinel.current) == null ? void 0 : r2.contains) != null && v.call(r2, E2)) && E2.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, _2 = n(), B = o2(() => {
    let f2 = m.current;
    if (!f2)
      return;
    function E2() {
      u(_2.current, { [s3.Forwards]: () => {
        var c3;
        O(f2, M.First) === N.Error && ((c3 = e2.afterPanelSentinel.current) == null || c3.focus());
      }, [s3.Backwards]: () => {
        var b2;
        (b2 = e2.button) == null || b2.focus({ preventScroll: true });
      } });
    }
    E2();
  }), D3 = o2(() => {
    let f2 = m.current;
    if (!f2)
      return;
    function E2() {
      u(_2.current, { [s3.Forwards]: () => {
        var x3;
        if (!e2.button)
          return;
        let b2 = f(), c3 = b2.indexOf(e2.button), M2 = b2.slice(0, c3 + 1), v = [...b2.slice(c3 + 1), ...M2];
        for (let I3 of v.slice())
          if (I3.dataset.headlessuiFocusGuard === "true" || (x3 = e2.panel) != null && x3.contains(I3)) {
            let l2 = v.indexOf(I3);
            l2 !== -1 && v.splice(l2, 1);
          }
        O(v, M.First, { sorted: false });
      }, [s3.Backwards]: () => {
        var c3;
        O(f2, M.Previous) === N.Error && ((c3 = e2.button) == null || c3.focus());
      } });
    }
    E2();
  });
  return import_react2.default.createElement(re.Provider, { value: A }, d2 && p4 && import_react2.default.createElement(c, { id: F2, ref: e2.beforePanelSentinel, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: B }), X({ ourProps: h2, theirProps: n3, slot: L, defaultTag: Ve, features: $e2, visible: d2, name: "Popover.Panel" }), d2 && p4 && import_react2.default.createElement(c, { id: a2, ref: e2.afterPanelSentinel, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: D3 }));
}
var Xe = "div";
function Ye(t, o4) {
  let u3 = (0, import_react2.useRef)(null), A = y(u3, o4), [O3, n3] = (0, import_react2.useState)([]), e2 = o2((s4) => {
    n3((i) => {
      let d2 = i.indexOf(s4);
      if (d2 !== -1) {
        let g = i.slice();
        return g.splice(d2, 1), g;
      }
      return i;
    });
  }), T3 = o2((s4) => (n3((i) => [...i, s4]), () => e2(s4))), P = o2(() => {
    var d2;
    let s4 = e(u3);
    if (!s4)
      return false;
    let i = s4.activeElement;
    return (d2 = u3.current) != null && d2.contains(i) ? true : O3.some((g) => {
      var L, h2;
      return ((L = s4.getElementById(g.buttonId.current)) == null ? void 0 : L.contains(i)) || ((h2 = s4.getElementById(g.panelId.current)) == null ? void 0 : h2.contains(i));
    });
  }), p4 = o2((s4) => {
    for (let i of O3)
      i.buttonId.current !== s4 && i.close();
  }), F2 = (0, import_react2.useMemo)(() => ({ registerPopover: T3, unregisterPopover: e2, isFocusWithinPopoverGroup: P, closeOthers: p4 }), [T3, e2, P, p4]), a2 = (0, import_react2.useMemo)(() => ({}), []), m = t, y2 = { ref: A };
  return import_react2.default.createElement(Pe2.Provider, { value: F2 }, X({ ourProps: y2, theirProps: m, slot: a2, defaultTag: Xe, name: "Popover.Group" }));
}
var qe = D2(we);
var ze = D2(Ue);
var Qe = D2(je);
var Ze = D2(Je);
var et = D2(Ye);
var kt = Object.assign(qe, { Button: ze, Overlay: Qe, Panel: Ze, Group: et });

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
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react3.useState)(false);
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
            $e,
            {
              as: import_react3.Fragment,
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
var import_react7 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react6 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react6.default.createContext && import_react6.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s4, i = 1, n3 = arguments.length; i < n3; i++) {
      s4 = arguments[i];
      for (var p4 in s4)
        if (Object.prototype.hasOwnProperty.call(s4, p4))
          t[p4] = s4[p4];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s4, e2) {
  var t = {};
  for (var p4 in s4)
    if (Object.prototype.hasOwnProperty.call(s4, p4) && e2.indexOf(p4) < 0)
      t[p4] = s4[p4];
  if (s4 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p4 = Object.getOwnPropertySymbols(s4); i < p4.length; i++) {
      if (e2.indexOf(p4[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s4, p4[i]))
        t[p4[i]] = s4[p4[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react7.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react7.default.createElement(IconBase, __assign({
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
    return import_react7.default.createElement("svg", __assign({
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
    }), title && import_react7.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react7.default.createElement(IconContext.Consumer, null, function(conf) {
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
var import_react10 = __toESM(require_react());

// app/assets/images/user/User_128px.png
var User_128px_default = "/build/_assets/User_128px-IWZ4Z5HH.png";

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
var navigation2 = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon_default, current: true },
  { name: "Your Matches", href: "/matches", icon: UsersIcon_default, current: false },
  { name: "Messages", href: "/messages", icon: FolderIcon_default, current: false },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon_default, current: false },
  { name: "Documents", href: "/documents", icon: DocumentDuplicateIcon_default, current: false },
  { name: "Reports", href: "/reports", icon: ChartPieIcon_default, current: false }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function App() {
  const { user } = useLoaderData();
  const [sidebarOpen, setSidebarOpen] = (0, import_react10.useState)(false);
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($e.Root, { show: sidebarOpen, as: import_react10.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(_t, { as: "div", className: "relative z-50 lg:hidden", onClose: setSidebarOpen, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            $e.Child,
            {
              as: import_react10.Fragment,
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
            $e.Child,
            {
              as: import_react10.Fragment,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "-translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "-translate-x-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(_t.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  $e.Child,
                  {
                    as: import_react10.Fragment,
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
                      (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: item.href, className: classNames(
                        item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      ), children: [
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
                            lineNumber: 139,
                            columnNumber: 43
                          },
                          this
                        ),
                        item.name
                      ] }, void 0, true, {
                        fileName: "app/root.tsx",
                        lineNumber: 133,
                        columnNumber: 41
                      }, this) }, item.name, false, {
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
                              lineNumber: 187,
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
                        lineNumber: 183,
                        columnNumber: 35
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/root.tsx",
                      lineNumber: 182,
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
              lineNumber: 208,
              columnNumber: 23
            },
            this
          ) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 207,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation2.map(
              (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: item.href, className: classNames(
                item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              ), children: [
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
                    lineNumber: 226,
                    columnNumber: 35
                  },
                  this
                ),
                item.name
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 220,
                columnNumber: 33
              }, this) }, item.name, false, {
                fileName: "app/root.tsx",
                lineNumber: 219,
                columnNumber: 27
              }, this)
            ) }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 217,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 216,
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
                      lineNumber: 274,
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
                lineNumber: 270,
                columnNumber: 27
              },
              this
            ) }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 269,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 215,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 214,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 206,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 204,
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
                    lineNumber: 294,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 295,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/root.tsx",
                lineNumber: 289,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-6 w-px bg-gray-200 lg:hidden", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 299,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "relative flex flex-1", action: "#", method: "GET", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "search-field", className: "sr-only", children: "Search" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 303,
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
                    lineNumber: 306,
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
                    lineNumber: 310,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 302,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 320,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BellIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 321,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/root.tsx",
                  lineNumber: 319,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 325,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it, { as: "div", className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it.Button, { className: "-m-1.5 flex items-center p-1.5", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
                      fileName: "app/root.tsx",
                      lineNumber: 330,
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
                        lineNumber: 331,
                        columnNumber: 31
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden lg:flex lg:items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-4 text-sm font-semibold leading-6 text-gray-900", "aria-hidden": "true" }, void 0, false, {
                        fileName: "app/root.tsx",
                        lineNumber: 337,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ChevronDownIcon_default, { className: "ml-2 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, false, {
                        fileName: "app/root.tsx",
                        lineNumber: 339,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/root.tsx",
                      lineNumber: 336,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/root.tsx",
                    lineNumber: 329,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    $e,
                    {
                      as: import_react10.Fragment,
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
                            lineNumber: 354,
                            columnNumber: 33
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/root.tsx",
                          lineNumber: 352,
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
                            lineNumber: 368,
                            columnNumber: 39
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/root.tsx",
                          lineNumber: 367,
                          columnNumber: 33
                        }, this) }, void 0, false, {
                          fileName: "app/root.tsx",
                          lineNumber: 365,
                          columnNumber: 33
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/root.tsx",
                        lineNumber: 351,
                        columnNumber: 31
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/root.tsx",
                      lineNumber: 342,
                      columnNumber: 29
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "app/root.tsx",
                  lineNumber: 328,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 318,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.tsx",
              lineNumber: 301,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 288,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 287,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 390,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 389,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 388,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 286,
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
          lineNumber: 398,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 399,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 400,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 397,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 404,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 405,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 406,
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
//# sourceMappingURL=/build/root-ITY5QNF6.js.map
