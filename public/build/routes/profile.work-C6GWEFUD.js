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
  C,
  D2 as D,
  H,
  I,
  I2,
  R,
  S,
  T,
  X,
  c,
  c2,
  d,
  e,
  h,
  l,
  m,
  n,
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
import {
  useForm
} from "/build/_shared/chunk-HTDZCSOQ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/profile.work.tsx
var import_react9 = __toESM(require_react());

// app/components/MultiSelect.tsx
var import_react5 = __toESM(require_react());

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react = __toESM(require_react(), 1);
function i(e3, o5) {
  let [u3, t] = (0, import_react.useState)(e3), r2 = s(e3);
  return l(() => t(r2.current), [r2, t, ...o5]), u3;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e2(n2 = {}, r2 = null, t = []) {
  for (let [i2, o5] of Object.entries(n2))
    f(t, s4(r2, i2), o5);
  return t;
}
function s4(n2, r2) {
  return n2 ? n2 + "[" + r2 + "]" : r2;
}
function f(n2, r2, t) {
  if (Array.isArray(t))
    for (let [i2, o5] of t.entries())
      f(n2, s4(r2, i2.toString()), o5);
  else
    t instanceof Date ? n2.push([r2, t.toISOString()]) : typeof t == "boolean" ? n2.push([r2, t ? "1" : "0"]) : typeof t == "string" ? n2.push([r2, t]) : typeof t == "number" ? n2.push([r2, `${t}`]) : t == null ? n2.push([r2, ""]) : e2(t, r2, n2);
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react2 = __toESM(require_react(), 1);
function T2(l2, r2, c3) {
  let [i2, s5] = (0, import_react2.useState)(c3), e3 = l2 !== void 0, t = (0, import_react2.useRef)(e3), u3 = (0, import_react2.useRef)(false), d2 = (0, import_react2.useRef)(false);
  return e3 && !t.current && !u3.current ? (u3.current = true, t.current = e3, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e3 && t.current && !d2.current && (d2.current = true, t.current = e3, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e3 ? l2 : i2, o2((n2) => (e3 || s5(n2), r2 == null ? void 0 : r2(n2)))];
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var ke = ((e3) => (e3[e3.Open = 0] = "Open", e3[e3.Closed = 1] = "Closed", e3))(ke || {});
var we = ((e3) => (e3[e3.Single = 0] = "Single", e3[e3.Multi = 1] = "Multi", e3))(we || {});
var Ue = ((e3) => (e3[e3.Pointer = 0] = "Pointer", e3[e3.Other = 1] = "Other", e3))(Ue || {});
var He = ((n2) => (n2[n2.OpenCombobox = 0] = "OpenCombobox", n2[n2.CloseCombobox = 1] = "CloseCombobox", n2[n2.GoToOption = 2] = "GoToOption", n2[n2.RegisterOption = 3] = "RegisterOption", n2[n2.UnregisterOption = 4] = "UnregisterOption", n2[n2.RegisterLabel = 5] = "RegisterLabel", n2))(He || {});
function ae(t, l2 = (e3) => e3) {
  let e3 = t.activeOptionIndex !== null ? t.options[t.activeOptionIndex] : null, r2 = I2(l2(t.options.slice()), (b2) => b2.dataRef.current.domRef.current), a2 = e3 ? r2.indexOf(e3) : null;
  return a2 === -1 && (a2 = null), { options: r2, activeOptionIndex: a2 };
}
var Ne = { [1](t) {
  var l2;
  return (l2 = t.dataRef.current) != null && l2.disabled || t.comboboxState === 1 ? t : { ...t, activeOptionIndex: null, comboboxState: 1 };
}, [0](t) {
  var e3;
  if ((e3 = t.dataRef.current) != null && e3.disabled || t.comboboxState === 0)
    return t;
  let l2 = t.activeOptionIndex;
  if (t.dataRef.current) {
    let { isSelected: r2 } = t.dataRef.current, a2 = t.options.findIndex((b2) => r2(b2.dataRef.current.value));
    a2 !== -1 && (l2 = a2);
  }
  return { ...t, comboboxState: 0, activeOptionIndex: l2 };
}, [2](t, l2) {
  var a2, b2, n2, d2;
  if ((a2 = t.dataRef.current) != null && a2.disabled || (b2 = t.dataRef.current) != null && b2.optionsRef.current && !((n2 = t.dataRef.current) != null && n2.optionsPropsRef.current.static) && t.comboboxState === 1)
    return t;
  let e3 = ae(t);
  if (e3.activeOptionIndex === null) {
    let o5 = e3.options.findIndex((i2) => !i2.dataRef.current.disabled);
    o5 !== -1 && (e3.activeOptionIndex = o5);
  }
  let r2 = x(l2, { resolveItems: () => e3.options, resolveActiveIndex: () => e3.activeOptionIndex, resolveId: (o5) => o5.id, resolveDisabled: (o5) => o5.dataRef.current.disabled });
  return { ...t, ...e3, activeOptionIndex: r2, activationTrigger: (d2 = l2.trigger) != null ? d2 : 1 };
}, [3]: (t, l2) => {
  var b2, n2;
  let e3 = { id: l2.id, dataRef: l2.dataRef }, r2 = ae(t, (d2) => [...d2, e3]);
  t.activeOptionIndex === null && (b2 = t.dataRef.current) != null && b2.isSelected(l2.dataRef.current.value) && (r2.activeOptionIndex = r2.options.indexOf(e3));
  let a2 = { ...t, ...r2, activationTrigger: 1 };
  return (n2 = t.dataRef.current) != null && n2.__demoMode && t.dataRef.current.value === void 0 && (a2.activeOptionIndex = 0), a2;
}, [4]: (t, l2) => {
  let e3 = ae(t, (r2) => {
    let a2 = r2.findIndex((b2) => b2.id === l2.id);
    return a2 !== -1 && r2.splice(a2, 1), r2;
  });
  return { ...t, ...e3, activationTrigger: 1 };
}, [5]: (t, l2) => ({ ...t, labelId: l2.id }) };
var le = (0, import_react3.createContext)(null);
le.displayName = "ComboboxActionsContext";
function q(t) {
  let l2 = (0, import_react3.useContext)(le);
  if (l2 === null) {
    let e3 = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e3, q), e3;
  }
  return l2;
}
var ie = (0, import_react3.createContext)(null);
ie.displayName = "ComboboxDataContext";
function G(t) {
  let l2 = (0, import_react3.useContext)(ie);
  if (l2 === null) {
    let e3 = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e3, G), e3;
  }
  return l2;
}
function Ge(t, l2) {
  return u(l2.type, Ne, t, l2);
}
var Xe = import_react3.Fragment;
function je(t, l2) {
  let { value: e3, defaultValue: r2, onChange: a2, form: b2, name: n2, by: d2 = (p3, m2) => p3 === m2, disabled: o5 = false, __demoMode: i2 = false, nullable: E = false, multiple: f3 = false, ...A } = t, [T3 = f3 ? [] : void 0, g] = T2(e3, a2, r2), [c3, x2] = (0, import_react3.useReducer)(Ge, { dataRef: (0, import_react3.createRef)(), comboboxState: i2 ? 0 : 1, options: [], activeOptionIndex: null, activationTrigger: 1, labelId: null }), L = (0, import_react3.useRef)(false), D3 = (0, import_react3.useRef)({ static: false, hold: false }), B2 = (0, import_react3.useRef)(null), k = (0, import_react3.useRef)(null), w = (0, import_react3.useRef)(null), X2 = (0, import_react3.useRef)(null), F2 = o2(typeof d2 == "string" ? (p3, m2) => {
    let R2 = d2;
    return (p3 == null ? void 0 : p3[R2]) === (m2 == null ? void 0 : m2[R2]);
  } : d2), M = (0, import_react3.useCallback)((p3) => u(s5.mode, { [1]: () => T3.some((m2) => F2(m2, p3)), [0]: () => F2(T3, p3) }), [T3]), s5 = (0, import_react3.useMemo)(() => ({ ...c3, optionsPropsRef: D3, labelRef: B2, inputRef: k, buttonRef: w, optionsRef: X2, value: T3, defaultValue: r2, disabled: o5, mode: f3 ? 1 : 0, get activeOptionIndex() {
    if (L.current && c3.activeOptionIndex === null && c3.options.length > 0) {
      let p3 = c3.options.findIndex((m2) => !m2.dataRef.current.disabled);
      if (p3 !== -1)
        return p3;
    }
    return c3.activeOptionIndex;
  }, compare: F2, isSelected: M, nullable: E, __demoMode: i2 }), [T3, r2, o5, f3, E, i2, c3]), O = (0, import_react3.useRef)(s5.activeOptionIndex !== null ? s5.options[s5.activeOptionIndex] : null);
  (0, import_react3.useEffect)(() => {
    let p3 = s5.activeOptionIndex !== null ? s5.options[s5.activeOptionIndex] : null;
    O.current !== p3 && (O.current = p3);
  }), l(() => {
    c3.dataRef.current = s5;
  }, [s5]), H([s5.buttonRef, s5.inputRef, s5.optionsRef], () => te2.closeCombobox(), s5.comboboxState === 0);
  let S2 = (0, import_react3.useMemo)(() => ({ open: s5.comboboxState === 0, disabled: o5, activeIndex: s5.activeOptionIndex, activeOption: s5.activeOptionIndex === null ? null : s5.options[s5.activeOptionIndex].dataRef.current.value, value: T3 }), [s5, o5, T3]), u3 = o2((p3) => {
    let m2 = s5.options.find((R2) => R2.id === p3);
    m2 && J2(m2.dataRef.current.value);
  }), _ = o2(() => {
    if (s5.activeOptionIndex !== null) {
      let { dataRef: p3, id: m2 } = s5.options[s5.activeOptionIndex];
      J2(p3.current.value), te2.goToOption(a.Specific, m2);
    }
  }), I3 = o2(() => {
    x2({ type: 0 }), L.current = true;
  }), j2 = o2(() => {
    x2({ type: 1 }), L.current = false;
  }), Q = o2((p3, m2, R2) => (L.current = false, p3 === a.Specific ? x2({ type: 2, focus: a.Specific, id: m2, trigger: R2 }) : x2({ type: 2, focus: p3, trigger: R2 }))), Y = o2((p3, m2) => (x2({ type: 3, id: p3, dataRef: m2 }), () => {
    var R2;
    ((R2 = O.current) == null ? void 0 : R2.id) === p3 && (L.current = true), x2({ type: 4, id: p3 });
  })), Z2 = o2((p3) => (x2({ type: 5, id: p3 }), () => x2({ type: 5, id: null }))), J2 = o2((p3) => u(s5.mode, { [0]() {
    return g == null ? void 0 : g(p3);
  }, [1]() {
    let m2 = s5.value.slice(), R2 = m2.findIndex((K) => F2(K, p3));
    return R2 === -1 ? m2.push(p3) : m2.splice(R2, 1), g == null ? void 0 : g(m2);
  } })), te2 = (0, import_react3.useMemo)(() => ({ onChange: J2, registerOption: Y, registerLabel: Z2, goToOption: Q, closeCombobox: j2, openCombobox: I3, selectActiveOption: _, selectOption: u3 }), []), Te = l2 === null ? {} : { ref: l2 }, z2 = (0, import_react3.useRef)(null), me = p();
  return (0, import_react3.useEffect)(() => {
    z2.current && r2 !== void 0 && me.addEventListener(z2.current, "reset", () => {
      J2(r2);
    });
  }, [z2, J2]), import_react3.default.createElement(le.Provider, { value: te2 }, import_react3.default.createElement(ie.Provider, { value: s5 }, import_react3.default.createElement(c2, { value: u(s5.comboboxState, { [0]: d.Open, [1]: d.Closed }) }, n2 != null && T3 != null && e2({ [n2]: T3 }).map(([p3, m2], R2) => import_react3.default.createElement(c, { features: p2.Hidden, ref: R2 === 0 ? (K) => {
    var ue;
    z2.current = (ue = K == null ? void 0 : K.closest("form")) != null ? ue : null;
  } : void 0, ...R({ key: p3, as: "input", type: "hidden", hidden: true, readOnly: true, form: b2, name: p3, value: m2 }) })), X({ ourProps: Te, theirProps: A, slot: S2, defaultTag: Xe, name: "Combobox" }))));
}
var Je = "input";
function Ke(t, l2) {
  var M, s5, O, S2;
  let e3 = I(), { id: r2 = `headlessui-combobox-input-${e3}`, onChange: a2, displayValue: b2, type: n2 = "text", ...d2 } = t, o5 = G("Combobox.Input"), i2 = q("Combobox.Input"), E = y(o5.inputRef, l2), f3 = (0, import_react3.useRef)(false), A = p(), T3 = function() {
    var u3;
    return typeof b2 == "function" && o5.value !== void 0 ? (u3 = b2(o5.value)) != null ? u3 : "" : typeof o5.value == "string" ? o5.value : "";
  }();
  m(([u3, _], [I3, j2]) => {
    f3.current || o5.inputRef.current && (j2 === 0 && _ === 1 || u3 !== I3) && (o5.inputRef.current.value = u3);
  }, [T3, o5.comboboxState]), m(([u3], [_]) => {
    if (u3 === 0 && _ === 1) {
      let I3 = o5.inputRef.current;
      if (!I3)
        return;
      let j2 = I3.value, { selectionStart: Q, selectionEnd: Y, selectionDirection: Z2 } = I3;
      I3.value = "", I3.value = j2, Z2 !== null ? I3.setSelectionRange(Q, Y, Z2) : I3.setSelectionRange(Q, Y);
    }
  }, [o5.comboboxState]);
  let g = (0, import_react3.useRef)(false), c3 = (0, import_react3.useRef)(null), x2 = o2(() => {
    g.current = true;
  }), L = o2(() => {
    A.nextFrame(() => {
      g.current = false, c3.current && (i2.openCombobox(), a2 == null || a2(c3.current), c3.current = null);
    });
  }), D3 = o2((u3) => {
    switch (f3.current = true, u3.key) {
      case o3.Backspace:
      case o3.Delete:
        if (o5.mode !== 0 || !o5.nullable)
          return;
        let _ = u3.currentTarget;
        A.requestAnimationFrame(() => {
          _.value === "" && (i2.onChange(null), o5.optionsRef.current && (o5.optionsRef.current.scrollTop = 0), i2.goToOption(a.Nothing));
        });
        break;
      case o3.Enter:
        if (f3.current = false, o5.comboboxState !== 0 || g.current)
          return;
        if (u3.preventDefault(), u3.stopPropagation(), o5.activeOptionIndex === null) {
          i2.closeCombobox();
          return;
        }
        i2.selectActiveOption(), o5.mode === 0 && i2.closeCombobox();
        break;
      case o3.ArrowDown:
        return f3.current = false, u3.preventDefault(), u3.stopPropagation(), u(o5.comboboxState, { [0]: () => {
          i2.goToOption(a.Next);
        }, [1]: () => {
          i2.openCombobox();
        } });
      case o3.ArrowUp:
        return f3.current = false, u3.preventDefault(), u3.stopPropagation(), u(o5.comboboxState, { [0]: () => {
          i2.goToOption(a.Previous);
        }, [1]: () => {
          i2.openCombobox(), A.nextFrame(() => {
            o5.value || i2.goToOption(a.Last);
          });
        } });
      case o3.Home:
        if (u3.shiftKey)
          break;
        return f3.current = false, u3.preventDefault(), u3.stopPropagation(), i2.goToOption(a.First);
      case o3.PageUp:
        return f3.current = false, u3.preventDefault(), u3.stopPropagation(), i2.goToOption(a.First);
      case o3.End:
        if (u3.shiftKey)
          break;
        return f3.current = false, u3.preventDefault(), u3.stopPropagation(), i2.goToOption(a.Last);
      case o3.PageDown:
        return f3.current = false, u3.preventDefault(), u3.stopPropagation(), i2.goToOption(a.Last);
      case o3.Escape:
        return f3.current = false, o5.comboboxState !== 0 ? void 0 : (u3.preventDefault(), o5.optionsRef.current && !o5.optionsPropsRef.current.static && u3.stopPropagation(), i2.closeCombobox());
      case o3.Tab:
        if (f3.current = false, o5.comboboxState !== 0)
          return;
        o5.mode === 0 && i2.selectActiveOption(), i2.closeCombobox();
        break;
    }
  }), B2 = o2((u3) => {
    if (g.current) {
      c3.current = u3;
      return;
    }
    i2.openCombobox(), a2 == null || a2(u3);
  }), k = o2(() => {
    f3.current = false;
  }), w = i(() => {
    if (o5.labelId)
      return [o5.labelId].join(" ");
  }, [o5.labelId]), X2 = (0, import_react3.useMemo)(() => ({ open: o5.comboboxState === 0, disabled: o5.disabled }), [o5]), F2 = { ref: E, id: r2, role: "combobox", type: n2, "aria-controls": (M = o5.optionsRef.current) == null ? void 0 : M.id, "aria-expanded": o5.disabled ? void 0 : o5.comboboxState === 0, "aria-activedescendant": o5.activeOptionIndex === null || (s5 = o5.options[o5.activeOptionIndex]) == null ? void 0 : s5.id, "aria-labelledby": w, "aria-autocomplete": "list", defaultValue: (S2 = (O = t.defaultValue) != null ? O : o5.defaultValue !== void 0 ? b2 == null ? void 0 : b2(o5.defaultValue) : null) != null ? S2 : o5.defaultValue, disabled: o5.disabled, onCompositionStart: x2, onCompositionEnd: L, onKeyDown: D3, onChange: B2, onBlur: k };
  return X({ ourProps: F2, theirProps: d2, slot: X2, defaultTag: Je, name: "Combobox.Input" });
}
var We = "button";
function $e2(t, l2) {
  var g;
  let e3 = G("Combobox.Button"), r2 = q("Combobox.Button"), a2 = y(e3.buttonRef, l2), b2 = I(), { id: n2 = `headlessui-combobox-button-${b2}`, ...d2 } = t, o5 = p(), i2 = o2((c3) => {
    switch (c3.key) {
      case o3.ArrowDown:
        return c3.preventDefault(), c3.stopPropagation(), e3.comboboxState === 1 && r2.openCombobox(), o5.nextFrame(() => {
          var x2;
          return (x2 = e3.inputRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        });
      case o3.ArrowUp:
        return c3.preventDefault(), c3.stopPropagation(), e3.comboboxState === 1 && (r2.openCombobox(), o5.nextFrame(() => {
          e3.value || r2.goToOption(a.Last);
        })), o5.nextFrame(() => {
          var x2;
          return (x2 = e3.inputRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        });
      case o3.Escape:
        return e3.comboboxState !== 0 ? void 0 : (c3.preventDefault(), e3.optionsRef.current && !e3.optionsPropsRef.current.static && c3.stopPropagation(), r2.closeCombobox(), o5.nextFrame(() => {
          var x2;
          return (x2 = e3.inputRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        }));
      default:
        return;
    }
  }), E = o2((c3) => {
    if (r(c3.currentTarget))
      return c3.preventDefault();
    e3.comboboxState === 0 ? r2.closeCombobox() : (c3.preventDefault(), r2.openCombobox()), o5.nextFrame(() => {
      var x2;
      return (x2 = e3.inputRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
    });
  }), f3 = i(() => {
    if (e3.labelId)
      return [e3.labelId, n2].join(" ");
  }, [e3.labelId, n2]), A = (0, import_react3.useMemo)(() => ({ open: e3.comboboxState === 0, disabled: e3.disabled, value: e3.value }), [e3]), T3 = { ref: a2, id: n2, type: s2(t, e3.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (g = e3.optionsRef.current) == null ? void 0 : g.id, "aria-expanded": e3.disabled ? void 0 : e3.comboboxState === 0, "aria-labelledby": f3, disabled: e3.disabled, onClick: E, onKeyDown: i2 };
  return X({ ourProps: T3, theirProps: d2, slot: A, defaultTag: We, name: "Combobox.Button" });
}
var qe = "label";
function Qe(t, l2) {
  let e3 = I(), { id: r2 = `headlessui-combobox-label-${e3}`, ...a2 } = t, b2 = G("Combobox.Label"), n2 = q("Combobox.Label"), d2 = y(b2.labelRef, l2);
  l(() => n2.registerLabel(r2), [r2]);
  let o5 = o2(() => {
    var f3;
    return (f3 = b2.inputRef.current) == null ? void 0 : f3.focus({ preventScroll: true });
  }), i2 = (0, import_react3.useMemo)(() => ({ open: b2.comboboxState === 0, disabled: b2.disabled }), [b2]);
  return X({ ourProps: { ref: d2, id: r2, onClick: o5 }, theirProps: a2, slot: i2, defaultTag: qe, name: "Combobox.Label" });
}
var Ye = "ul";
var Ze = S.RenderStrategy | S.Static;
function ze(t, l2) {
  let e3 = I(), { id: r2 = `headlessui-combobox-options-${e3}`, hold: a2 = false, ...b2 } = t, n2 = G("Combobox.Options"), d2 = y(n2.optionsRef, l2), o5 = C(), i2 = (() => o5 !== null ? (o5 & d.Open) === d.Open : n2.comboboxState === 0)();
  l(() => {
    var T3;
    n2.optionsPropsRef.current.static = (T3 = t.static) != null ? T3 : false;
  }, [n2.optionsPropsRef, t.static]), l(() => {
    n2.optionsPropsRef.current.hold = a2;
  }, [n2.optionsPropsRef, a2]), F({ container: n2.optionsRef.current, enabled: n2.comboboxState === 0, accept(T3) {
    return T3.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : T3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(T3) {
    T3.setAttribute("role", "none");
  } });
  let E = i(() => {
    var T3, g;
    return (g = n2.labelId) != null ? g : (T3 = n2.buttonRef.current) == null ? void 0 : T3.id;
  }, [n2.labelId, n2.buttonRef.current]), f3 = (0, import_react3.useMemo)(() => ({ open: n2.comboboxState === 0 }), [n2]), A = { "aria-labelledby": E, role: "listbox", "aria-multiselectable": n2.mode === 1 ? true : void 0, id: r2, ref: d2 };
  return X({ ourProps: A, theirProps: b2, slot: f3, defaultTag: Ye, features: Ze, visible: i2, name: "Combobox.Options" });
}
var eo = "li";
function oo(t, l2) {
  var M, s5;
  let e3 = I(), { id: r2 = `headlessui-combobox-option-${e3}`, disabled: a2 = false, value: b2, ...n2 } = t, d2 = G("Combobox.Option"), o5 = q("Combobox.Option"), i2 = d2.activeOptionIndex !== null ? d2.options[d2.activeOptionIndex].id === r2 : false, E = d2.isSelected(b2), f3 = (0, import_react3.useRef)(null), A = s({ disabled: a2, value: b2, domRef: f3, textValue: (s5 = (M = f3.current) == null ? void 0 : M.textContent) == null ? void 0 : s5.toLowerCase() }), T3 = y(l2, f3), g = o2(() => o5.selectOption(r2));
  l(() => o5.registerOption(r2, A), [A, r2]);
  let c3 = (0, import_react3.useRef)(!d2.__demoMode);
  l(() => {
    if (!d2.__demoMode)
      return;
    let O = o();
    return O.requestAnimationFrame(() => {
      c3.current = true;
    }), O.dispose;
  }, []), l(() => {
    if (d2.comboboxState !== 0 || !i2 || !c3.current || d2.activationTrigger === 0)
      return;
    let O = o();
    return O.requestAnimationFrame(() => {
      var S2, u3;
      (u3 = (S2 = f3.current) == null ? void 0 : S2.scrollIntoView) == null || u3.call(S2, { block: "nearest" });
    }), O.dispose;
  }, [f3, i2, d2.comboboxState, d2.activationTrigger, d2.activeOptionIndex]);
  let x2 = o2((O) => {
    if (a2)
      return O.preventDefault();
    g(), d2.mode === 0 && o5.closeCombobox(), n() || requestAnimationFrame(() => {
      var S2;
      return (S2 = d2.inputRef.current) == null ? void 0 : S2.focus();
    });
  }), L = o2(() => {
    if (a2)
      return o5.goToOption(a.Nothing);
    o5.goToOption(a.Specific, r2);
  }), D3 = u2(), B2 = o2((O) => D3.update(O)), k = o2((O) => {
    D3.wasMoved(O) && (a2 || i2 || o5.goToOption(a.Specific, r2, 0));
  }), w = o2((O) => {
    D3.wasMoved(O) && (a2 || i2 && (d2.optionsPropsRef.current.hold || o5.goToOption(a.Nothing)));
  }), X2 = (0, import_react3.useMemo)(() => ({ active: i2, selected: E, disabled: a2 }), [i2, E, a2]);
  return X({ ourProps: { id: r2, ref: T3, role: "option", tabIndex: a2 === true ? void 0 : -1, "aria-disabled": a2 === true ? true : void 0, "aria-selected": E, disabled: void 0, onClick: x2, onFocus: L, onPointerEnter: B2, onMouseEnter: B2, onPointerMove: k, onMouseMove: k, onPointerLeave: w, onMouseLeave: w }, theirProps: n2, slot: X2, defaultTag: eo, name: "Combobox.Option" });
}
var to = D(je);
var no = D($e2);
var ro = D(Ke);
var ao = D(Qe);
var lo = D(ze);
var io = D(oo);
var Wo = Object.assign(to, { Input: ro, Button: no, Label: ao, Options: lo, Option: io });

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react4 = __toESM(require_react(), 1);
var Be = ((n2) => (n2[n2.Open = 0] = "Open", n2[n2.Closed = 1] = "Closed", n2))(Be || {});
var He2 = ((n2) => (n2[n2.Single = 0] = "Single", n2[n2.Multi = 1] = "Multi", n2))(He2 || {});
var Ge2 = ((n2) => (n2[n2.Pointer = 0] = "Pointer", n2[n2.Other = 1] = "Other", n2))(Ge2 || {});
var Ne2 = ((i2) => (i2[i2.OpenListbox = 0] = "OpenListbox", i2[i2.CloseListbox = 1] = "CloseListbox", i2[i2.GoToOption = 2] = "GoToOption", i2[i2.Search = 3] = "Search", i2[i2.ClearSearch = 4] = "ClearSearch", i2[i2.RegisterOption = 5] = "RegisterOption", i2[i2.UnregisterOption = 6] = "UnregisterOption", i2[i2.RegisterLabel = 7] = "RegisterLabel", i2))(Ne2 || {});
function z(e3, a2 = (n2) => n2) {
  let n2 = e3.activeOptionIndex !== null ? e3.options[e3.activeOptionIndex] : null, r2 = I2(a2(e3.options.slice()), (t) => t.dataRef.current.domRef.current), l2 = n2 ? r2.indexOf(n2) : null;
  return l2 === -1 && (l2 = null), { options: r2, activeOptionIndex: l2 };
}
var je2 = { [1](e3) {
  return e3.dataRef.current.disabled || e3.listboxState === 1 ? e3 : { ...e3, activeOptionIndex: null, listboxState: 1 };
}, [0](e3) {
  if (e3.dataRef.current.disabled || e3.listboxState === 0)
    return e3;
  let a2 = e3.activeOptionIndex, { isSelected: n2 } = e3.dataRef.current, r2 = e3.options.findIndex((l2) => n2(l2.dataRef.current.value));
  return r2 !== -1 && (a2 = r2), { ...e3, listboxState: 0, activeOptionIndex: a2 };
}, [2](e3, a2) {
  var l2;
  if (e3.dataRef.current.disabled || e3.listboxState === 1)
    return e3;
  let n2 = z(e3), r2 = x(a2, { resolveItems: () => n2.options, resolveActiveIndex: () => n2.activeOptionIndex, resolveId: (t) => t.id, resolveDisabled: (t) => t.dataRef.current.disabled });
  return { ...e3, ...n2, searchQuery: "", activeOptionIndex: r2, activationTrigger: (l2 = a2.trigger) != null ? l2 : 1 };
}, [3]: (e3, a2) => {
  if (e3.dataRef.current.disabled || e3.listboxState === 1)
    return e3;
  let r2 = e3.searchQuery !== "" ? 0 : 1, l2 = e3.searchQuery + a2.value.toLowerCase(), p3 = (e3.activeOptionIndex !== null ? e3.options.slice(e3.activeOptionIndex + r2).concat(e3.options.slice(0, e3.activeOptionIndex + r2)) : e3.options).find((i2) => {
    var b2;
    return !i2.dataRef.current.disabled && ((b2 = i2.dataRef.current.textValue) == null ? void 0 : b2.startsWith(l2));
  }), u3 = p3 ? e3.options.indexOf(p3) : -1;
  return u3 === -1 || u3 === e3.activeOptionIndex ? { ...e3, searchQuery: l2 } : { ...e3, searchQuery: l2, activeOptionIndex: u3, activationTrigger: 1 };
}, [4](e3) {
  return e3.dataRef.current.disabled || e3.listboxState === 1 || e3.searchQuery === "" ? e3 : { ...e3, searchQuery: "" };
}, [5]: (e3, a2) => {
  let n2 = { id: a2.id, dataRef: a2.dataRef }, r2 = z(e3, (l2) => [...l2, n2]);
  return e3.activeOptionIndex === null && e3.dataRef.current.isSelected(a2.dataRef.current.value) && (r2.activeOptionIndex = r2.options.indexOf(n2)), { ...e3, ...r2 };
}, [6]: (e3, a2) => {
  let n2 = z(e3, (r2) => {
    let l2 = r2.findIndex((t) => t.id === a2.id);
    return l2 !== -1 && r2.splice(l2, 1), r2;
  });
  return { ...e3, ...n2, activationTrigger: 1 };
}, [7]: (e3, a2) => ({ ...e3, labelId: a2.id }) };
var J = (0, import_react4.createContext)(null);
J.displayName = "ListboxActionsContext";
function U(e3) {
  let a2 = (0, import_react4.useContext)(J);
  if (a2 === null) {
    let n2 = new Error(`<${e3} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n2, U), n2;
  }
  return a2;
}
var q2 = (0, import_react4.createContext)(null);
q2.displayName = "ListboxDataContext";
function B(e3) {
  let a2 = (0, import_react4.useContext)(q2);
  if (a2 === null) {
    let n2 = new Error(`<${e3} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n2, B), n2;
  }
  return a2;
}
function Ve(e3, a2) {
  return u(a2.type, je2, e3, a2);
}
var Ke2 = import_react4.Fragment;
function Qe2(e3, a2) {
  let { value: n2, defaultValue: r2, form: l2, name: t, onChange: p3, by: u3 = (s5, c3) => s5 === c3, disabled: i2 = false, horizontal: b2 = false, multiple: m2 = false, ...L } = e3;
  const P2 = b2 ? "horizontal" : "vertical";
  let S2 = y(a2), [g = m2 ? [] : void 0, R2] = T2(n2, p3, r2), [T3, o5] = (0, import_react4.useReducer)(Ve, { dataRef: (0, import_react4.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), x2 = (0, import_react4.useRef)({ static: false, hold: false }), E = (0, import_react4.useRef)(null), H2 = (0, import_react4.useRef)(null), X2 = (0, import_react4.useRef)(null), C2 = o2(typeof u3 == "string" ? (s5, c3) => {
    let O = u3;
    return (s5 == null ? void 0 : s5[O]) === (c3 == null ? void 0 : c3[O]);
  } : u3), A = (0, import_react4.useCallback)((s5) => u(d2.mode, { [1]: () => g.some((c3) => C2(c3, s5)), [0]: () => C2(g, s5) }), [g]), d2 = (0, import_react4.useMemo)(() => ({ ...T3, value: g, disabled: i2, mode: m2 ? 1 : 0, orientation: P2, compare: C2, isSelected: A, optionsPropsRef: x2, labelRef: E, buttonRef: H2, optionsRef: X2 }), [g, i2, m2, T3]);
  l(() => {
    T3.dataRef.current = d2;
  }, [d2]), H([d2.buttonRef, d2.optionsRef], (s5, c3) => {
    var O;
    o5({ type: 1 }), h(c3, T.Loose) || (s5.preventDefault(), (O = d2.buttonRef.current) == null || O.focus());
  }, d2.listboxState === 0);
  let G2 = (0, import_react4.useMemo)(() => ({ open: d2.listboxState === 0, disabled: i2, value: g }), [d2, i2, g]), ie2 = o2((s5) => {
    let c3 = d2.options.find((O) => O.id === s5);
    c3 && F2(c3.dataRef.current.value);
  }), re = o2(() => {
    if (d2.activeOptionIndex !== null) {
      let { dataRef: s5, id: c3 } = d2.options[d2.activeOptionIndex];
      F2(s5.current.value), o5({ type: 2, focus: a.Specific, id: c3 });
    }
  }), ae2 = o2(() => o5({ type: 0 })), le2 = o2(() => o5({ type: 1 })), se2 = o2((s5, c3, O) => s5 === a.Specific ? o5({ type: 2, focus: a.Specific, id: c3, trigger: O }) : o5({ type: 2, focus: s5, trigger: O })), pe2 = o2((s5, c3) => (o5({ type: 5, id: s5, dataRef: c3 }), () => o5({ type: 6, id: s5 }))), ue = o2((s5) => (o5({ type: 7, id: s5 }), () => o5({ type: 7, id: null }))), F2 = o2((s5) => u(d2.mode, { [0]() {
    return R2 == null ? void 0 : R2(s5);
  }, [1]() {
    let c3 = d2.value.slice(), O = c3.findIndex((M) => C2(M, s5));
    return O === -1 ? c3.push(s5) : c3.splice(O, 1), R2 == null ? void 0 : R2(c3);
  } })), de = o2((s5) => o5({ type: 3, value: s5 })), ce = o2(() => o5({ type: 4 })), fe = (0, import_react4.useMemo)(() => ({ onChange: F2, registerOption: pe2, registerLabel: ue, goToOption: se2, closeListbox: le2, openListbox: ae2, selectActiveOption: re, selectOption: ie2, search: de, clearSearch: ce }), []), Te = { ref: S2 }, N = (0, import_react4.useRef)(null), be2 = p();
  return (0, import_react4.useEffect)(() => {
    N.current && r2 !== void 0 && be2.addEventListener(N.current, "reset", () => {
      F2(r2);
    });
  }, [N, F2]), import_react4.default.createElement(J.Provider, { value: fe }, import_react4.default.createElement(q2.Provider, { value: d2 }, import_react4.default.createElement(c2, { value: u(d2.listboxState, { [0]: d.Open, [1]: d.Closed }) }, t != null && g != null && e2({ [t]: g }).map(([s5, c3], O) => import_react4.default.createElement(c, { features: p2.Hidden, ref: O === 0 ? (M) => {
    var Y;
    N.current = (Y = M == null ? void 0 : M.closest("form")) != null ? Y : null;
  } : void 0, ...R({ key: s5, as: "input", type: "hidden", hidden: true, readOnly: true, form: l2, name: s5, value: c3 }) })), X({ ourProps: Te, theirProps: L, slot: G2, defaultTag: Ke2, name: "Listbox" }))));
}
var We2 = "button";
function Xe2(e3, a2) {
  var R2;
  let n2 = I(), { id: r2 = `headlessui-listbox-button-${n2}`, ...l2 } = e3, t = B("Listbox.Button"), p3 = U("Listbox.Button"), u3 = y(t.buttonRef, a2), i2 = p(), b2 = o2((T3) => {
    switch (T3.key) {
      case o3.Space:
      case o3.Enter:
      case o3.ArrowDown:
        T3.preventDefault(), p3.openListbox(), i2.nextFrame(() => {
          t.value || p3.goToOption(a.First);
        });
        break;
      case o3.ArrowUp:
        T3.preventDefault(), p3.openListbox(), i2.nextFrame(() => {
          t.value || p3.goToOption(a.Last);
        });
        break;
    }
  }), m2 = o2((T3) => {
    switch (T3.key) {
      case o3.Space:
        T3.preventDefault();
        break;
    }
  }), L = o2((T3) => {
    if (r(T3.currentTarget))
      return T3.preventDefault();
    t.listboxState === 0 ? (p3.closeListbox(), i2.nextFrame(() => {
      var o5;
      return (o5 = t.buttonRef.current) == null ? void 0 : o5.focus({ preventScroll: true });
    })) : (T3.preventDefault(), p3.openListbox());
  }), P2 = i(() => {
    if (t.labelId)
      return [t.labelId, r2].join(" ");
  }, [t.labelId, r2]), S2 = (0, import_react4.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled, value: t.value }), [t]), g = { ref: u3, id: r2, type: s2(e3, t.buttonRef), "aria-haspopup": "listbox", "aria-controls": (R2 = t.optionsRef.current) == null ? void 0 : R2.id, "aria-expanded": t.disabled ? void 0 : t.listboxState === 0, "aria-labelledby": P2, disabled: t.disabled, onKeyDown: b2, onKeyUp: m2, onClick: L };
  return X({ ourProps: g, theirProps: l2, slot: S2, defaultTag: We2, name: "Listbox.Button" });
}
var $e3 = "label";
function ze2(e3, a2) {
  let n2 = I(), { id: r2 = `headlessui-listbox-label-${n2}`, ...l2 } = e3, t = B("Listbox.Label"), p3 = U("Listbox.Label"), u3 = y(t.labelRef, a2);
  l(() => p3.registerLabel(r2), [r2]);
  let i2 = o2(() => {
    var L;
    return (L = t.buttonRef.current) == null ? void 0 : L.focus({ preventScroll: true });
  }), b2 = (0, import_react4.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled }), [t]);
  return X({ ourProps: { ref: u3, id: r2, onClick: i2 }, theirProps: l2, slot: b2, defaultTag: $e3, name: "Listbox.Label" });
}
var Je2 = "ul";
var qe2 = S.RenderStrategy | S.Static;
function Ye2(e3, a2) {
  var T3;
  let n2 = I(), { id: r2 = `headlessui-listbox-options-${n2}`, ...l2 } = e3, t = B("Listbox.Options"), p3 = U("Listbox.Options"), u3 = y(t.optionsRef, a2), i2 = p(), b2 = p(), m2 = C(), L = (() => m2 !== null ? (m2 & d.Open) === d.Open : t.listboxState === 0)();
  (0, import_react4.useEffect)(() => {
    var x2;
    let o5 = t.optionsRef.current;
    o5 && t.listboxState === 0 && o5 !== ((x2 = e(o5)) == null ? void 0 : x2.activeElement) && o5.focus({ preventScroll: true });
  }, [t.listboxState, t.optionsRef]);
  let P2 = o2((o5) => {
    switch (b2.dispose(), o5.key) {
      case o3.Space:
        if (t.searchQuery !== "")
          return o5.preventDefault(), o5.stopPropagation(), p3.search(o5.key);
      case o3.Enter:
        if (o5.preventDefault(), o5.stopPropagation(), t.activeOptionIndex !== null) {
          let { dataRef: x2 } = t.options[t.activeOptionIndex];
          p3.onChange(x2.current.value);
        }
        t.mode === 0 && (p3.closeListbox(), o().nextFrame(() => {
          var x2;
          return (x2 = t.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        }));
        break;
      case u(t.orientation, { vertical: o3.ArrowDown, horizontal: o3.ArrowRight }):
        return o5.preventDefault(), o5.stopPropagation(), p3.goToOption(a.Next);
      case u(t.orientation, { vertical: o3.ArrowUp, horizontal: o3.ArrowLeft }):
        return o5.preventDefault(), o5.stopPropagation(), p3.goToOption(a.Previous);
      case o3.Home:
      case o3.PageUp:
        return o5.preventDefault(), o5.stopPropagation(), p3.goToOption(a.First);
      case o3.End:
      case o3.PageDown:
        return o5.preventDefault(), o5.stopPropagation(), p3.goToOption(a.Last);
      case o3.Escape:
        return o5.preventDefault(), o5.stopPropagation(), p3.closeListbox(), i2.nextFrame(() => {
          var x2;
          return (x2 = t.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        });
      case o3.Tab:
        o5.preventDefault(), o5.stopPropagation();
        break;
      default:
        o5.key.length === 1 && (p3.search(o5.key), b2.setTimeout(() => p3.clearSearch(), 350));
        break;
    }
  }), S2 = i(() => {
    var o5, x2, E;
    return (E = (o5 = t.labelRef.current) == null ? void 0 : o5.id) != null ? E : (x2 = t.buttonRef.current) == null ? void 0 : x2.id;
  }, [t.labelRef.current, t.buttonRef.current]), g = (0, import_react4.useMemo)(() => ({ open: t.listboxState === 0 }), [t]), R2 = { "aria-activedescendant": t.activeOptionIndex === null || (T3 = t.options[t.activeOptionIndex]) == null ? void 0 : T3.id, "aria-multiselectable": t.mode === 1 ? true : void 0, "aria-labelledby": S2, "aria-orientation": t.orientation, id: r2, onKeyDown: P2, role: "listbox", tabIndex: 0, ref: u3 };
  return X({ ourProps: R2, theirProps: l2, slot: g, defaultTag: Je2, features: qe2, visible: L, name: "Listbox.Options" });
}
var Ze2 = "li";
function et(e3, a2) {
  let n2 = I(), { id: r2 = `headlessui-listbox-option-${n2}`, disabled: l2 = false, value: t, ...p3 } = e3, u3 = B("Listbox.Option"), i2 = U("Listbox.Option"), b2 = u3.activeOptionIndex !== null ? u3.options[u3.activeOptionIndex].id === r2 : false, m2 = u3.isSelected(t), L = (0, import_react4.useRef)(null), P2 = b(L), S2 = s({ disabled: l2, value: t, domRef: L, get textValue() {
    return P2();
  } }), g = y(a2, L);
  l(() => {
    if (u3.listboxState !== 0 || !b2 || u3.activationTrigger === 0)
      return;
    let A = o();
    return A.requestAnimationFrame(() => {
      var d2, G2;
      (G2 = (d2 = L.current) == null ? void 0 : d2.scrollIntoView) == null || G2.call(d2, { block: "nearest" });
    }), A.dispose;
  }, [L, b2, u3.listboxState, u3.activationTrigger, u3.activeOptionIndex]), l(() => i2.registerOption(r2, S2), [S2, r2]);
  let R2 = o2((A) => {
    if (l2)
      return A.preventDefault();
    i2.onChange(t), u3.mode === 0 && (i2.closeListbox(), o().nextFrame(() => {
      var d2;
      return (d2 = u3.buttonRef.current) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }), T3 = o2(() => {
    if (l2)
      return i2.goToOption(a.Nothing);
    i2.goToOption(a.Specific, r2);
  }), o5 = u2(), x2 = o2((A) => o5.update(A)), E = o2((A) => {
    o5.wasMoved(A) && (l2 || b2 || i2.goToOption(a.Specific, r2, 0));
  }), H2 = o2((A) => {
    o5.wasMoved(A) && (l2 || b2 && i2.goToOption(a.Nothing));
  }), X2 = (0, import_react4.useMemo)(() => ({ active: b2, selected: m2, disabled: l2 }), [b2, m2, l2]);
  return X({ ourProps: { id: r2, ref: g, role: "option", tabIndex: l2 === true ? void 0 : -1, "aria-disabled": l2 === true ? true : void 0, "aria-selected": m2, disabled: void 0, onClick: R2, onFocus: T3, onPointerEnter: x2, onMouseEnter: x2, onPointerMove: E, onMouseMove: E, onPointerLeave: H2, onMouseLeave: H2 }, theirProps: p3, slot: X2, defaultTag: Ze2, name: "Listbox.Option" });
}
var tt = D(Qe2);
var ot = D(Xe2);
var nt = D(ze2);
var it = D(Ye2);
var rt = D(et);
var Nt = Object.assign(tt, { Button: ot, Label: nt, Options: it, Option: rt });

// node_modules/@heroicons/react/24/solid/esm/XCircleIcon.js
var React = __toESM(require_react(), 1);
function XCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React.forwardRef(XCircleIcon);
var XCircleIcon_default = ForwardRef;

// app/components/MultiSelect.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MultiSelect({
  options,
  name,
  defaultValue,
  placeholder
}) {
  const [selectedOptions, setSelectedOptions] = (0, import_react5.useState)(defaultValue || []);
  const [query, setQuery] = (0, import_react5.useState)("");
  const filteredOptions = query === "" ? options : options.filter(
    (option) => option.label.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wo, { value: selectedOptions, onChange: setSelectedOptions, multiple: true, children: [
    selectedOptions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: selectedOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "inline-block w-auto bg-gray-300 p-2 mr-1 mt-1", children: [
      opt.label,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "ml-1", onClick: () => setSelectedOptions(selectedOptions.filter((option) => option.value !== opt.value)), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircleIcon_default, { className: "w-4 h-4 inline-block" }, void 0, false, {
        fileName: "app/components/MultiSelect.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/MultiSelect.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this)
    ] }, opt.value, true, {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name, value: selectedOptions.map((option) => option.value).join(",") }, void 0, false, {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wo.Button, { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wo.Input, { className: "w-full bordered border-[1px] border-gray-400 p-2", placeholder }, void 0, false, {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      $e,
      {
        as: import_react5.Fragment,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        afterLeave: () => setQuery(""),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wo.Options, { className: "absolute w-auto overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: filteredOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wo.Option, { value: opt, className: "p-2 hover:bg-gray-200 relative cursor-default select-none", children: opt.label }, opt.value, false, {
          fileName: "app/components/MultiSelect.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)) }, void 0, false, {
          fileName: "app/components/MultiSelect.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/MultiSelect.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/MultiSelect.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/components/SingleSelect.tsx
var import_react7 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SingleSelect({
  options,
  onChange
}) {
  const [selectedOption, setSelectedOption] = (0, import_react7.useState)({
    id: "None",
    name: "Choose an option",
    availalbe: true
  });
  (0, import_react7.useEffect)(() => {
    onChange(selectedOption);
  }, [selectedOption]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full bordered border-2 border-gray-400 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nt, { value: selectedOption, onChange: setSelectedOption, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nt.Button, { children: selectedOption.name }, void 0, false, {
      fileName: "app/components/SingleSelect.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nt.Options, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Nt.Option,
      {
        value: option,
        disabled: !option.available,
        children: option.name
      },
      option.id,
      false,
      {
        fileName: "app/components/SingleSelect.tsx",
        lineNumber: 27,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/SingleSelect.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SingleSelect.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SingleSelect.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/profile.work.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function profile_work_default() {
  const { register } = useForm();
  const [profile, setProfile] = (0, import_react9.useState)({
    experiences: []
  });
  const domains = [
    {
      "domain": "Biotechnology",
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
      "domain": "Molecular Biology",
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
      "domain": "Microbiology",
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
      "domain": "Biochemistry",
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
      "domain": "Immunology",
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
      "domain": "Cell Biology",
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
      "domain": "Pharmaceutical Sciences",
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
      "domain": "Clinical Medicine",
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
      "domain": "Biophysics",
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
      "domain": "Bio-statistics",
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
      "domain": "Computational Biology",
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
      "domain": "Synthetic Biology",
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
      "domain": "Chemistry",
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
      "domain": "Biomedical Engineering",
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
      "domain": "Bio-omics",
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
      "domain": "Bioventure & Bioeconomy",
      "sub-domains": [
        "Business Development",
        "Market Research",
        "Techno-economics",
        "Bioinformatics",
        "Bioinformatics",
        "Bioinformatics"
      ]
    }
  ];
  const [addingWork, setAddingWork] = (0, import_react9.useState)(false);
  const [domain, setDomain] = (0, import_react9.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    !addingWork && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => {
      setAddingWork(true);
    }, className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add Experience" }, void 0, false, {
      fileName: "app/routes/profile.work.tsx",
      lineNumber: 212,
      columnNumber: 24
    }, this),
    addingWork && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "w-full max-w-6xl mx-auto p-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Work Experience" }, void 0, false, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        MultiSelect,
        {
          options: [
            { "label": "Technical Consultation", "value": "Technical Consultation" },
            { "label": "Management Consultation", "value": "Management Consultation" },
            { "label": "Manufacturing Consultation", "value": "Manufacturing Consultation" },
            { "label": "Project Management", "value": "Project Management" },
            { "label": "Sub-contractor Management", "value": "Sub-contractor Management" },
            { "label": "Business Development", "value": "Business Development" },
            { "label": "Clinical Trial Coordination", "value": "Clinical Trial Coordination" },
            { "label": "Regulatory Approvals", "value": "Regulatory Approvals" },
            { "label": "IP and Patent Filing", "value": "IP and Patent Filing" },
            { "label": "Technical Writing", "value": "Technical Writing" },
            { "label": "Data Management and validation", "value": "Data Management and validation" },
            { "label": "SOP Preparation", "value": "SOP Preparation" },
            { "label": "Experimental Troubleshooting", "value": "Experimental Troubleshooting" },
            { "label": "Data Analysis", "value": "Data Analysis" },
            { "label": "Bioinformatic Analysis", "value": "Bioinformatic Analysis" },
            { "label": "Bio-Statistical Analysis", "value": "Bio-Statistical Analysis" },
            { "label": "Scientific Writing and Editing", "value": "Scientific Writing and Editing" },
            { "label": "Literature Review", "value": "Literature Review" },
            { "label": "Illustration and Animation", "value": "Illustration and Animation" },
            { "label": "Content Creation", "value": "Content Creation" },
            { "label": "Biotech Marketing", "value": "Biotech Marketing" },
            { "label": "Biotech Sales", "value": "Biotech Sales" },
            { "label": "Accounting and Purchase", "value": "Accounting and Purchase" },
            { "label": "HR & Admin", "value": "HR & Admin" }
          ],
          name: "jobType",
          placeholder: "Job Type"
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 222,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 221,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 font-medium text-gray-700", children: "Role" }, void 0, false, {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          SingleSelect,
          {
            onChange: (option) => console.log(option),
            options: [
              { "id": "Experimental Biologist", "name": "Experimental Biologist", "available": true },
              { "id": "Computational Biologist", "name": "Computational Biologist", "available": true },
              { "id": "Bio-statistician", "name": "Bio-statistician", "available": true },
              { "id": "Bio-Physicist", "name": "Bio-Physicist", "available": true },
              { "id": "Technical Consultant", "name": "Technical Consultant", "available": true },
              { "id": "Technical Writter", "name": "Technical Writter", "available": true },
              { "id": "Management Consultant", "name": "Management Consultant", "available": true },
              { "id": "Regulatory approval Specialist", "name": "Regulatory approval Specialist", "available": true },
              { "id": "Clinical Trial Specialist", "name": "Clinical Trial Specialist", "available": true },
              { "id": "IP and patent Specialist", "name": "IP and patent Specialist", "available": true },
              { "id": "Non-technical", "name": "Non-technical", "available": true },
              { "id": "Other", "name": "Other", "available": true }
            ]
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.work.tsx",
            lineNumber: 258,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 254,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 font-medium text-gray-700", children: "Company Name" }, void 0, false, {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 277,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", name: "companyName" }, void 0, false, {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 280,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 276,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "phone", className: "block mb-2 font-medium text-gray-700", children: "Domain" }, void 0, false, {
          fileName: "app/routes/profile.work.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          SingleSelect,
          {
            onChange: (option) => {
              console.log(option);
              setDomain(option);
            },
            options: domains.map((domain2) => {
              return { id: domain2.domain, name: domain2.domain, available: true };
            })
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.work.tsx",
            lineNumber: 286,
            columnNumber: 13
          },
          this
        ),
        domain && domains.find((item) => item.domain === domain.id) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          MultiSelect,
          {
            name: "subdomains",
            options: domains.find((item) => item.domain === domain.id)["sub-domains"].map((subDomain) => {
              return { label: subDomain, value: subDomain };
            })
          },
          void 0,
          false,
          {
            fileName: "app/routes/profile.work.tsx",
            lineNumber: 296,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/profile.work.tsx",
        lineNumber: 282,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.work.tsx",
      lineNumber: 219,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.work.tsx",
    lineNumber: 210,
    columnNumber: 5
  }, this);
}
export {
  profile_work_default as default
};
//# sourceMappingURL=/build/routes/profile.work-C6GWEFUD.js.map
