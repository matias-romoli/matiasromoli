function VC(e, t) {
  for (var r = 0; r < t.length; r++) {
    const i = t[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i)
        if (s !== "default" && !(s in e)) {
          const l = Object.getOwnPropertyDescriptor(i, s);
          l &&
            Object.defineProperty(
              e,
              s,
              l.get ? l : { enumerable: !0, get: () => i[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const l of s)
      if (l.type === "childList")
        for (const u of l.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && i(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const l = {};
    return (
      s.integrity && (l.integrity = s.integrity),
      s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const l = r(s);
    fetch(s.href, l);
  }
})();
var Cn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function mo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Gf = { exports: {} },
  ua = {},
  Yf = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0;
function UC() {
  if (u0) return Ee;
  u0 = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    l = Symbol.for("react.provider"),
    u = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function b(L) {
    return L === null || typeof L != "object"
      ? null
      : ((L = (y && L[y]) || L["@@iterator"]),
        typeof L == "function" ? L : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    w = {};
  function x(L, H, Z) {
    (this.props = L),
      (this.context = H),
      (this.refs = w),
      (this.updater = Z || _);
  }
  (x.prototype.isReactComponent = {}),
    (x.prototype.setState = function (L, H) {
      if (typeof L != "object" && typeof L != "function" && L != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, L, H, "setState");
    }),
    (x.prototype.forceUpdate = function (L) {
      this.updater.enqueueForceUpdate(this, L, "forceUpdate");
    });
  function T() {}
  T.prototype = x.prototype;
  function O(L, H, Z) {
    (this.props = L),
      (this.context = H),
      (this.refs = w),
      (this.updater = Z || _);
  }
  var z = (O.prototype = new T());
  (z.constructor = O), S(z, x.prototype), (z.isPureReactComponent = !0);
  var W = Array.isArray,
    E = Object.prototype.hasOwnProperty,
    I = { current: null },
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(L, H, Z) {
    var xe,
      Te = {},
      we = null,
      ue = null;
    if (H != null)
      for (xe in (H.ref !== void 0 && (ue = H.ref),
      H.key !== void 0 && (we = "" + H.key),
      H))
        E.call(H, xe) && !U.hasOwnProperty(xe) && (Te[xe] = H[xe]);
    var re = arguments.length - 2;
    if (re === 1) Te.children = Z;
    else if (1 < re) {
      for (var ke = Array(re), We = 0; We < re; We++)
        ke[We] = arguments[We + 2];
      Te.children = ke;
    }
    if (L && L.defaultProps)
      for (xe in ((re = L.defaultProps), re))
        Te[xe] === void 0 && (Te[xe] = re[xe]);
    return {
      $$typeof: e,
      type: L,
      key: we,
      ref: ue,
      props: Te,
      _owner: I.current,
    };
  }
  function le(L, H) {
    return {
      $$typeof: e,
      type: L.type,
      key: H,
      ref: L.ref,
      props: L.props,
      _owner: L._owner,
    };
  }
  function ce(L) {
    return typeof L == "object" && L !== null && L.$$typeof === e;
  }
  function ve(L) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      L.replace(/[=:]/g, function (Z) {
        return H[Z];
      })
    );
  }
  var be = /\/+/g;
  function Se(L, H) {
    return typeof L == "object" && L !== null && L.key != null
      ? ve("" + L.key)
      : H.toString(36);
  }
  function $e(L, H, Z, xe, Te) {
    var we = typeof L;
    (we === "undefined" || we === "boolean") && (L = null);
    var ue = !1;
    if (L === null) ue = !0;
    else
      switch (we) {
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (L.$$typeof) {
            case e:
            case t:
              ue = !0;
          }
      }
    if (ue)
      return (
        (ue = L),
        (Te = Te(ue)),
        (L = xe === "" ? "." + Se(ue, 0) : xe),
        W(Te)
          ? ((Z = ""),
            L != null && (Z = L.replace(be, "$&/") + "/"),
            $e(Te, H, Z, "", function (We) {
              return We;
            }))
          : Te != null &&
            (ce(Te) &&
              (Te = le(
                Te,
                Z +
                  (!Te.key || (ue && ue.key === Te.key)
                    ? ""
                    : ("" + Te.key).replace(be, "$&/") + "/") +
                  L
              )),
            H.push(Te)),
        1
      );
    if (((ue = 0), (xe = xe === "" ? "." : xe + ":"), W(L)))
      for (var re = 0; re < L.length; re++) {
        we = L[re];
        var ke = xe + Se(we, re);
        ue += $e(we, H, Z, ke, Te);
      }
    else if (((ke = b(L)), typeof ke == "function"))
      for (L = ke.call(L), re = 0; !(we = L.next()).done; )
        (we = we.value), (ke = xe + Se(we, re++)), (ue += $e(we, H, Z, ke, Te));
    else if (we === "object")
      throw (
        ((H = String(L)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(L).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ue;
  }
  function Ke(L, H, Z) {
    if (L == null) return L;
    var xe = [],
      Te = 0;
    return (
      $e(L, xe, "", "", function (we) {
        return H.call(Z, we, Te++);
      }),
      xe
    );
  }
  function Be(L) {
    if (L._status === -1) {
      var H = L._result;
      (H = H()),
        H.then(
          function (Z) {
            (L._status === 0 || L._status === -1) &&
              ((L._status = 1), (L._result = Z));
          },
          function (Z) {
            (L._status === 0 || L._status === -1) &&
              ((L._status = 2), (L._result = Z));
          }
        ),
        L._status === -1 && ((L._status = 0), (L._result = H));
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var de = { current: null },
    X = { transition: null },
    ie = {
      ReactCurrentDispatcher: de,
      ReactCurrentBatchConfig: X,
      ReactCurrentOwner: I,
    };
  function J() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Ee.Children = {
      map: Ke,
      forEach: function (L, H, Z) {
        Ke(
          L,
          function () {
            H.apply(this, arguments);
          },
          Z
        );
      },
      count: function (L) {
        var H = 0;
        return (
          Ke(L, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (L) {
        return (
          Ke(L, function (H) {
            return H;
          }) || []
        );
      },
      only: function (L) {
        if (!ce(L))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return L;
      },
    }),
    (Ee.Component = x),
    (Ee.Fragment = r),
    (Ee.Profiler = s),
    (Ee.PureComponent = O),
    (Ee.StrictMode = i),
    (Ee.Suspense = f),
    (Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie),
    (Ee.act = J),
    (Ee.cloneElement = function (L, H, Z) {
      if (L == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            L +
            "."
        );
      var xe = S({}, L.props),
        Te = L.key,
        we = L.ref,
        ue = L._owner;
      if (H != null) {
        if (
          (H.ref !== void 0 && ((we = H.ref), (ue = I.current)),
          H.key !== void 0 && (Te = "" + H.key),
          L.type && L.type.defaultProps)
        )
          var re = L.type.defaultProps;
        for (ke in H)
          E.call(H, ke) &&
            !U.hasOwnProperty(ke) &&
            (xe[ke] = H[ke] === void 0 && re !== void 0 ? re[ke] : H[ke]);
      }
      var ke = arguments.length - 2;
      if (ke === 1) xe.children = Z;
      else if (1 < ke) {
        re = Array(ke);
        for (var We = 0; We < ke; We++) re[We] = arguments[We + 2];
        xe.children = re;
      }
      return {
        $$typeof: e,
        type: L.type,
        key: Te,
        ref: we,
        props: xe,
        _owner: ue,
      };
    }),
    (Ee.createContext = function (L) {
      return (
        (L = {
          $$typeof: u,
          _currentValue: L,
          _currentValue2: L,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (L.Provider = { $$typeof: l, _context: L }),
        (L.Consumer = L)
      );
    }),
    (Ee.createElement = Y),
    (Ee.createFactory = function (L) {
      var H = Y.bind(null, L);
      return (H.type = L), H;
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (L) {
      return { $$typeof: d, render: L };
    }),
    (Ee.isValidElement = ce),
    (Ee.lazy = function (L) {
      return { $$typeof: m, _payload: { _status: -1, _result: L }, _init: Be };
    }),
    (Ee.memo = function (L, H) {
      return { $$typeof: p, type: L, compare: H === void 0 ? null : H };
    }),
    (Ee.startTransition = function (L) {
      var H = X.transition;
      X.transition = {};
      try {
        L();
      } finally {
        X.transition = H;
      }
    }),
    (Ee.unstable_act = J),
    (Ee.useCallback = function (L, H) {
      return de.current.useCallback(L, H);
    }),
    (Ee.useContext = function (L) {
      return de.current.useContext(L);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (L) {
      return de.current.useDeferredValue(L);
    }),
    (Ee.useEffect = function (L, H) {
      return de.current.useEffect(L, H);
    }),
    (Ee.useId = function () {
      return de.current.useId();
    }),
    (Ee.useImperativeHandle = function (L, H, Z) {
      return de.current.useImperativeHandle(L, H, Z);
    }),
    (Ee.useInsertionEffect = function (L, H) {
      return de.current.useInsertionEffect(L, H);
    }),
    (Ee.useLayoutEffect = function (L, H) {
      return de.current.useLayoutEffect(L, H);
    }),
    (Ee.useMemo = function (L, H) {
      return de.current.useMemo(L, H);
    }),
    (Ee.useReducer = function (L, H, Z) {
      return de.current.useReducer(L, H, Z);
    }),
    (Ee.useRef = function (L) {
      return de.current.useRef(L);
    }),
    (Ee.useState = function (L) {
      return de.current.useState(L);
    }),
    (Ee.useSyncExternalStore = function (L, H, Z) {
      return de.current.useSyncExternalStore(L, H, Z);
    }),
    (Ee.useTransition = function () {
      return de.current.useTransition();
    }),
    (Ee.version = "18.3.1"),
    Ee
  );
}
var c0;
function Bp() {
  return c0 || ((c0 = 1), (Yf.exports = UC())), Yf.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d0;
function WC() {
  if (d0) return ua;
  d0 = 1;
  var e = Bp(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(d, f, p) {
    var m,
      y = {},
      b = null,
      _ = null;
    p !== void 0 && (b = "" + p),
      f.key !== void 0 && (b = "" + f.key),
      f.ref !== void 0 && (_ = f.ref);
    for (m in f) i.call(f, m) && !l.hasOwnProperty(m) && (y[m] = f[m]);
    if (d && d.defaultProps)
      for (m in ((f = d.defaultProps), f)) y[m] === void 0 && (y[m] = f[m]);
    return {
      $$typeof: t,
      type: d,
      key: b,
      ref: _,
      props: y,
      _owner: s.current,
    };
  }
  return (ua.Fragment = r), (ua.jsx = u), (ua.jsxs = u), ua;
}
var f0;
function HC() {
  return f0 || ((f0 = 1), (Gf.exports = WC())), Gf.exports;
}
var A = HC();
function qC() {
  return !!(globalThis != null && globalThis.document);
}
function KC(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const i of t)
    if (i != null)
      for (const s in i)
        Object.prototype.hasOwnProperty.call(i, s) &&
          (s in r && delete r[s], (r[s] = i[s]));
  return r;
}
const h0 = (e) => (e ? "" : void 0);
function GC(e) {
  return Array.isArray(e);
}
function _n(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !GC(e);
}
function YC(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function XC(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Yh(e) {
  if (e == null) return e;
  const { unitless: t } = XC(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
const Ub = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  Vp = (e) => Object.fromEntries(Object.entries(e).sort(Ub));
function p0(e) {
  const t = Vp(e);
  return Object.assign(Object.values(t), t);
}
function QC(e) {
  const t = Object.keys(Vp(e));
  return new Set(t);
}
function m0(e) {
  if (!e) return e;
  e = Yh(e) ?? e;
  const t = -0.02;
  return typeof e == "number"
    ? `${e + t}`
    : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + t}`);
}
function ga(e, t) {
  const r = ["@media screen"];
  return (
    e && r.push("and", `(min-width: ${Yh(e)})`),
    t && r.push("and", `(max-width: ${Yh(t)})`),
    r.join(" ")
  );
}
function JC(e) {
  if (!e) return null;
  e.base = e.base ?? "0px";
  const t = p0(e),
    r = Object.entries(e)
      .sort(Ub)
      .map(([l, u], d, f) => {
        let [, p] = f[d + 1] ?? [];
        return (
          (p = parseFloat(p) > 0 ? m0(p) : void 0),
          {
            _minW: m0(u),
            breakpoint: l,
            minW: u,
            maxW: p,
            maxWQuery: ga(null, p),
            minWQuery: ga(u),
            minMaxQuery: ga(u, p),
          }
        );
      }),
    i = QC(e),
    s = Array.from(i.values());
  return {
    keys: i,
    normalized: t,
    isResponsive(l) {
      const u = Object.keys(l);
      return u.length > 0 && u.every((d) => i.has(d));
    },
    asObject: Vp(e),
    asArray: p0(e),
    details: r,
    get(l) {
      return r.find((u) => u.breakpoint === l);
    },
    media: [null, ...t.map((l) => ga(l)).slice(1)],
    toArrayValue(l) {
      if (!_n(l)) throw new Error("toArrayValue: value must be an object");
      const u = s.map((d) => l[d] ?? null);
      for (; YC(u) === null; ) u.pop();
      return u;
    },
    toObjectValue(l) {
      if (!Array.isArray(l))
        throw new Error("toObjectValue: value must be an array");
      return l.reduce((u, d, f) => {
        const p = s[f];
        return p != null && d != null && (u[p] = d), u;
      }, {});
    },
  };
}
var P = Bp();
const Dn = mo(P),
  Xh = VC({ __proto__: null, default: Dn }, [P]);
function ZC(e) {
  return P.Children.toArray(e).filter((t) => P.isValidElement(t));
}
function Wb(e) {
  const t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function e2(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Zo(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: i = "useContext",
      providerName: s = "Provider",
      errorMessage: l,
      defaultValue: u,
    } = e,
    d = P.createContext(u);
  d.displayName = t;
  function f() {
    var m;
    const p = P.useContext(d);
    if (!p && r) {
      const y = new Error(l ?? e2(i, s));
      throw (
        ((y.name = "ContextError"),
        (m = Error.captureStackTrace) == null || m.call(Error, y, f),
        y)
      );
    }
    return p;
  }
  return [d.Provider, f, d];
}
const In = (...e) => e.filter(Boolean).join(" ");
function t2(e, t, r, i) {
  const s = typeof t == "string" ? t.split(".") : [t];
  for (i = 0; i < s.length && e; i += 1) e = e[s[i]];
  return e === void 0 ? r : e;
}
const n2 = (e) => {
    const t = new WeakMap();
    return (i, s, l, u) => {
      if (typeof i > "u") return e(i, s, l);
      t.has(i) || t.set(i, new Map());
      const d = t.get(i);
      if (d.has(s)) return d.get(s);
      const f = e(i, s, l, u);
      return d.set(s, f), f;
    };
  },
  Hb = n2(t2),
  r2 = (e) => e.default || e;
function qb(e, t = []) {
  const r = Object.assign({}, e);
  for (const i of t) i in r && delete r[i];
  return r;
}
function o2(e, t) {
  const r = {};
  for (const i of t) i in e && (r[i] = e[i]);
  return r;
}
function i2(e, t) {
  return Array.isArray(e)
    ? e.map((r) => (r === null ? null : t(r)))
    : _n(e)
    ? Object.keys(e).reduce((r, i) => ((r[i] = t(e[i])), r), {})
    : e != null
    ? t(e)
    : null;
}
const s2 = (e) => typeof e == "function";
function or(e, ...t) {
  return s2(e) ? e(...t) : e;
}
function a2(e, ...t) {
  const r = Object.getOwnPropertyDescriptors(e),
    i = Object.keys(r),
    s = (u) => {
      const d = {};
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        r[p] && (Object.defineProperty(d, p, r[p]), delete r[p]);
      }
      return d;
    },
    l = (u) => s(Array.isArray(u) ? u : i.filter(u));
  return t.map(l).concat(s(i));
}
function g0(e, t, r = {}) {
  const { stop: i, getKey: s } = r;
  function l(u, d = []) {
    if (_n(u) || Array.isArray(u)) {
      const f = {};
      for (const [p, m] of Object.entries(u)) {
        const y = (s == null ? void 0 : s(p)) ?? p,
          b = [...d, y];
        if (i != null && i(u, b)) return t(u, d);
        f[y] = l(m, b);
      }
      return f;
    }
    return t(u, d);
  }
  return l(e);
}
const l2 = (e) => {
  const { condition: t, message: r } = e;
};
var ya = { exports: {} };
ya.exports;
var y0;
function u2() {
  return (
    y0 ||
      ((y0 = 1),
      (function (e, t) {
        var r = 200,
          i = "__lodash_hash_undefined__",
          s = 800,
          l = 16,
          u = 9007199254740991,
          d = "[object Arguments]",
          f = "[object Array]",
          p = "[object AsyncFunction]",
          m = "[object Boolean]",
          y = "[object Date]",
          b = "[object Error]",
          _ = "[object Function]",
          S = "[object GeneratorFunction]",
          w = "[object Map]",
          x = "[object Number]",
          T = "[object Null]",
          O = "[object Object]",
          z = "[object Proxy]",
          W = "[object RegExp]",
          E = "[object Set]",
          I = "[object String]",
          U = "[object Undefined]",
          Y = "[object WeakMap]",
          le = "[object ArrayBuffer]",
          ce = "[object DataView]",
          ve = "[object Float32Array]",
          be = "[object Float64Array]",
          Se = "[object Int8Array]",
          $e = "[object Int16Array]",
          Ke = "[object Int32Array]",
          Be = "[object Uint8Array]",
          de = "[object Uint8ClampedArray]",
          X = "[object Uint16Array]",
          ie = "[object Uint32Array]",
          J = /[\\^$.*+?()[\]{}|]/g,
          L = /^\[object .+?Constructor\]$/,
          H = /^(?:0|[1-9]\d*)$/,
          Z = {};
        (Z[ve] =
          Z[be] =
          Z[Se] =
          Z[$e] =
          Z[Ke] =
          Z[Be] =
          Z[de] =
          Z[X] =
          Z[ie] =
            !0),
          (Z[d] =
            Z[f] =
            Z[le] =
            Z[m] =
            Z[ce] =
            Z[y] =
            Z[b] =
            Z[_] =
            Z[w] =
            Z[x] =
            Z[O] =
            Z[W] =
            Z[E] =
            Z[I] =
            Z[Y] =
              !1);
        var xe = typeof Cn == "object" && Cn && Cn.Object === Object && Cn,
          Te =
            typeof self == "object" && self && self.Object === Object && self,
          we = xe || Te || Function("return this")(),
          ue = t && !t.nodeType && t,
          re = ue && !0 && e && !e.nodeType && e,
          ke = re && re.exports === ue,
          We = ke && xe.process,
          Bn = (function () {
            try {
              var k = re && re.require && re.require("util").types;
              return k || (We && We.binding && We.binding("util"));
            } catch {}
          })(),
          gs = Bn && Bn.isTypedArray;
        function ri(k, j, B) {
          switch (B.length) {
            case 0:
              return k.call(j);
            case 1:
              return k.call(j, B[0]);
            case 2:
              return k.call(j, B[0], B[1]);
            case 3:
              return k.call(j, B[0], B[1], B[2]);
          }
          return k.apply(j, B);
        }
        function ys(k, j) {
          for (var B = -1, te = Array(k); ++B < k; ) te[B] = j(B);
          return te;
        }
        function cl(k) {
          return function (j) {
            return k(j);
          };
        }
        function dl(k, j) {
          return k == null ? void 0 : k[j];
        }
        function vs(k, j) {
          return function (B) {
            return k(j(B));
          };
        }
        var fl = Array.prototype,
          bs = Function.prototype,
          Vn = Object.prototype,
          Un = we["__core-js_shared__"],
          Mr = bs.toString,
          Pn = Vn.hasOwnProperty,
          Ss = (function () {
            var k = /[^.]+$/.exec((Un && Un.keys && Un.keys.IE_PROTO) || "");
            return k ? "Symbol(src)_1." + k : "";
          })(),
          xs = Vn.toString,
          hl = Mr.call(Object),
          ws = RegExp(
            "^" +
              Mr.call(Pn)
                .replace(J, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          dr = ke ? we.Buffer : void 0,
          ks = we.Symbol,
          zr = we.Uint8Array;
        dr && dr.allocUnsafe;
        var jr = vs(Object.getPrototypeOf, Object),
          pl = Object.create,
          ml = Vn.propertyIsEnumerable,
          gl = fl.splice,
          fr = ks ? ks.toStringTag : void 0,
          Lr = (function () {
            try {
              var k = As(Object, "defineProperty");
              return k({}, "", {}), k;
            } catch {}
          })(),
          Cs = dr ? dr.isBuffer : void 0,
          oi = Math.max,
          _s = Date.now,
          ii = As(we, "Map"),
          an = As(Object, "create"),
          Nr = (function () {
            function k() {}
            return function (j) {
              if (!Hn(j)) return {};
              if (pl) return pl(j);
              k.prototype = j;
              var B = new k();
              return (k.prototype = void 0), B;
            };
          })();
        function Wn(k) {
          var j = -1,
            B = k == null ? 0 : k.length;
          for (this.clear(); ++j < B; ) {
            var te = k[j];
            this.set(te[0], te[1]);
          }
        }
        function yl() {
          (this.__data__ = an ? an(null) : {}), (this.size = 0);
        }
        function vl(k) {
          var j = this.has(k) && delete this.__data__[k];
          return (this.size -= j ? 1 : 0), j;
        }
        function bl(k) {
          var j = this.__data__;
          if (an) {
            var B = j[k];
            return B === i ? void 0 : B;
          }
          return Pn.call(j, k) ? j[k] : void 0;
        }
        function Sl(k) {
          var j = this.__data__;
          return an ? j[k] !== void 0 : Pn.call(j, k);
        }
        function Ps(k, j) {
          var B = this.__data__;
          return (
            (this.size += this.has(k) ? 0 : 1),
            (B[k] = an && j === void 0 ? i : j),
            this
          );
        }
        (Wn.prototype.clear = yl),
          (Wn.prototype.delete = vl),
          (Wn.prototype.get = bl),
          (Wn.prototype.has = Sl),
          (Wn.prototype.set = Ps);
        function ln(k) {
          var j = -1,
            B = k == null ? 0 : k.length;
          for (this.clear(); ++j < B; ) {
            var te = k[j];
            this.set(te[0], te[1]);
          }
        }
        function vo() {
          (this.__data__ = []), (this.size = 0);
        }
        function Ts(k) {
          var j = this.__data__,
            B = li(j, k);
          if (B < 0) return !1;
          var te = j.length - 1;
          return B == te ? j.pop() : gl.call(j, B, 1), --this.size, !0;
        }
        function bo(k) {
          var j = this.__data__,
            B = li(j, k);
          return B < 0 ? void 0 : j[B][1];
        }
        function ad(k) {
          return li(this.__data__, k) > -1;
        }
        function So(k, j) {
          var B = this.__data__,
            te = li(B, k);
          return te < 0 ? (++this.size, B.push([k, j])) : (B[te][1] = j), this;
        }
        (ln.prototype.clear = vo),
          (ln.prototype.delete = Ts),
          (ln.prototype.get = bo),
          (ln.prototype.has = ad),
          (ln.prototype.set = So);
        function Tn(k) {
          var j = -1,
            B = k == null ? 0 : k.length;
          for (this.clear(); ++j < B; ) {
            var te = k[j];
            this.set(te[0], te[1]);
          }
        }
        function si() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Wn(),
              map: new (ii || ln)(),
              string: new Wn(),
            });
        }
        function Es(k) {
          var j = hi(this, k).delete(k);
          return (this.size -= j ? 1 : 0), j;
        }
        function ld(k) {
          return hi(this, k).get(k);
        }
        function ud(k) {
          return hi(this, k).has(k);
        }
        function cd(k, j) {
          var B = hi(this, k),
            te = B.size;
          return B.set(k, j), (this.size += B.size == te ? 0 : 1), this;
        }
        (Tn.prototype.clear = si),
          (Tn.prototype.delete = Es),
          (Tn.prototype.get = ld),
          (Tn.prototype.has = ud),
          (Tn.prototype.set = cd);
        function Bt(k) {
          var j = (this.__data__ = new ln(k));
          this.size = j.size;
        }
        function xl() {
          (this.__data__ = new ln()), (this.size = 0);
        }
        function wl(k) {
          var j = this.__data__,
            B = j.delete(k);
          return (this.size = j.size), B;
        }
        function dd(k) {
          return this.__data__.get(k);
        }
        function kl(k) {
          return this.__data__.has(k);
        }
        function Cl(k, j) {
          var B = this.__data__;
          if (B instanceof ln) {
            var te = B.__data__;
            if (!ii || te.length < r - 1)
              return te.push([k, j]), (this.size = ++B.size), this;
            B = this.__data__ = new Tn(te);
          }
          return B.set(k, j), (this.size = B.size), this;
        }
        (Bt.prototype.clear = xl),
          (Bt.prototype.delete = wl),
          (Bt.prototype.get = dd),
          (Bt.prototype.has = kl),
          (Bt.prototype.set = Cl);
        function _l(k, j) {
          var B = dn(k),
            te = !B && cn(k),
            Pe = !B && !te && Ir(k),
            ze = !B && !te && !Pe && js(k),
            Ue = B || te || Pe || ze,
            _e = Ue ? ys(k.length, String) : [],
            Ve = _e.length;
          for (var Pt in k)
            (Ue &&
              (Pt == "length" ||
                (Pe && (Pt == "offset" || Pt == "parent")) ||
                (ze &&
                  (Pt == "buffer" ||
                    Pt == "byteLength" ||
                    Pt == "byteOffset")) ||
                pi(Pt, Ve))) ||
              _e.push(Pt);
          return _e;
        }
        function ai(k, j, B) {
          ((B !== void 0 && !hr(k[j], B)) || (B === void 0 && !(j in k))) &&
            Ge(k, j, B);
        }
        function fd(k, j, B) {
          var te = k[j];
          (!(Pn.call(k, j) && hr(te, B)) || (B === void 0 && !(j in k))) &&
            Ge(k, j, B);
        }
        function li(k, j) {
          for (var B = k.length; B--; ) if (hr(k[B][0], j)) return B;
          return -1;
        }
        function Ge(k, j, B) {
          j == "__proto__" && Lr
            ? Lr(k, j, {
                configurable: !0,
                enumerable: !0,
                value: B,
                writable: !0,
              })
            : (k[j] = B);
        }
        var hd = fi();
        function Dr(k) {
          return k == null
            ? k === void 0
              ? U
              : T
            : fr && fr in Object(k)
            ? $s(k)
            : Rl(k);
        }
        function Rs(k) {
          return En(k) && Dr(k) == d;
        }
        function ui(k) {
          if (!Hn(k) || Os(k)) return !1;
          var j = hn(k) ? ws : L;
          return j.test(zs(k));
        }
        function pd(k) {
          return En(k) && Ol(k.length) && !!Z[Dr(k)];
        }
        function Pl(k) {
          if (!Hn(k)) return El(k);
          var j = Oe(k),
            B = [];
          for (var te in k)
            (te == "constructor" && (j || !Pn.call(k, te))) || B.push(te);
          return B;
        }
        function xo(k, j, B, te, Pe) {
          k !== j &&
            hd(
              j,
              function (ze, Ue) {
                if ((Pe || (Pe = new Bt()), Hn(ze)))
                  un(k, j, Ue, B, xo, te, Pe);
                else {
                  var _e = te ? te(mi(k, Ue), ze, Ue + "", k, j, Pe) : void 0;
                  _e === void 0 && (_e = ze), ai(k, Ue, _e);
                }
              },
              Ls
            );
        }
        function un(k, j, B, te, Pe, ze, Ue) {
          var _e = mi(k, B),
            Ve = mi(j, B),
            Pt = Ue.get(Ve);
          if (Pt) {
            ai(k, B, Pt);
            return;
          }
          var Tt = ze ? ze(_e, Ve, B + "", k, j, Ue) : void 0,
            qn = Tt === void 0;
          if (qn) {
            var Vr = dn(Ve),
              yi = !Vr && Ir(Ve),
              Et = !Vr && !yi && js(Ve);
            (Tt = Ve),
              Vr || yi || Et
                ? dn(_e)
                  ? (Tt = _e)
                  : Co(_e)
                  ? (Tt = ci(_e))
                  : yi
                  ? ((qn = !1), (Tt = gd(Ve)))
                  : Et
                  ? ((qn = !1), (Tt = vd(Ve)))
                  : (Tt = [])
                : Sd(Ve) || cn(Ve)
                ? ((Tt = _e),
                  cn(_e) ? (Tt = gi(_e)) : (!Hn(_e) || hn(_e)) && (Tt = Tl(Ve)))
                : (qn = !1);
          }
          qn && (Ue.set(Ve, Tt), Pe(Tt, Ve, te, ze, Ue), Ue.delete(Ve)),
            ai(k, B, Tt);
        }
        function md(k, j) {
          return Al(Ms(k, j, Fr), k + "");
        }
        var Qt = Lr
          ? function (k, j) {
              return Lr(k, "toString", {
                configurable: !0,
                enumerable: !1,
                value: _o(j),
                writable: !0,
              });
            }
          : Fr;
        function gd(k, j) {
          return k.slice();
        }
        function yd(k) {
          var j = new k.constructor(k.byteLength);
          return new zr(j).set(new zr(k)), j;
        }
        function vd(k, j) {
          var B = yd(k.buffer);
          return new k.constructor(B, k.byteOffset, k.length);
        }
        function ci(k, j) {
          var B = -1,
            te = k.length;
          for (j || (j = Array(te)); ++B < te; ) j[B] = k[B];
          return j;
        }
        function di(k, j, B, te) {
          var Pe = !B;
          B || (B = {});
          for (var ze = -1, Ue = j.length; ++ze < Ue; ) {
            var _e = j[ze],
              Ve = void 0;
            Ve === void 0 && (Ve = k[_e]), Pe ? Ge(B, _e, Ve) : fd(B, _e, Ve);
          }
          return B;
        }
        function wo(k) {
          return md(function (j, B) {
            var te = -1,
              Pe = B.length,
              ze = Pe > 1 ? B[Pe - 1] : void 0,
              Ue = Pe > 2 ? B[2] : void 0;
            for (
              ze =
                k.length > 3 && typeof ze == "function" ? (Pe--, ze) : void 0,
                Ue &&
                  ko(B[0], B[1], Ue) &&
                  ((ze = Pe < 3 ? void 0 : ze), (Pe = 1)),
                j = Object(j);
              ++te < Pe;

            ) {
              var _e = B[te];
              _e && k(j, _e, te, ze);
            }
            return j;
          });
        }
        function fi(k) {
          return function (j, B, te) {
            for (
              var Pe = -1, ze = Object(j), Ue = te(j), _e = Ue.length;
              _e--;

            ) {
              var Ve = Ue[++Pe];
              if (B(ze[Ve], Ve, ze) === !1) break;
            }
            return j;
          };
        }
        function hi(k, j) {
          var B = k.__data__;
          return bd(j) ? B[typeof j == "string" ? "string" : "hash"] : B.map;
        }
        function As(k, j) {
          var B = dl(k, j);
          return ui(B) ? B : void 0;
        }
        function $s(k) {
          var j = Pn.call(k, fr),
            B = k[fr];
          try {
            k[fr] = void 0;
            var te = !0;
          } catch {}
          var Pe = xs.call(k);
          return te && (j ? (k[fr] = B) : delete k[fr]), Pe;
        }
        function Tl(k) {
          return typeof k.constructor == "function" && !Oe(k) ? Nr(jr(k)) : {};
        }
        function pi(k, j) {
          var B = typeof k;
          return (
            (j = j ?? u),
            !!j &&
              (B == "number" || (B != "symbol" && H.test(k))) &&
              k > -1 &&
              k % 1 == 0 &&
              k < j
          );
        }
        function ko(k, j, B) {
          if (!Hn(B)) return !1;
          var te = typeof j;
          return (
            te == "number" ? fn(B) && pi(j, B.length) : te == "string" && j in B
          )
            ? hr(B[j], k)
            : !1;
        }
        function bd(k) {
          var j = typeof k;
          return j == "string" ||
            j == "number" ||
            j == "symbol" ||
            j == "boolean"
            ? k !== "__proto__"
            : k === null;
        }
        function Os(k) {
          return !!Ss && Ss in k;
        }
        function Oe(k) {
          var j = k && k.constructor,
            B = (typeof j == "function" && j.prototype) || Vn;
          return k === B;
        }
        function El(k) {
          var j = [];
          if (k != null) for (var B in Object(k)) j.push(B);
          return j;
        }
        function Rl(k) {
          return xs.call(k);
        }
        function Ms(k, j, B) {
          return (
            (j = oi(j === void 0 ? k.length - 1 : j, 0)),
            function () {
              for (
                var te = arguments,
                  Pe = -1,
                  ze = oi(te.length - j, 0),
                  Ue = Array(ze);
                ++Pe < ze;

              )
                Ue[Pe] = te[j + Pe];
              Pe = -1;
              for (var _e = Array(j + 1); ++Pe < j; ) _e[Pe] = te[Pe];
              return (_e[j] = B(Ue)), ri(k, this, _e);
            }
          );
        }
        function mi(k, j) {
          if (
            !(j === "constructor" && typeof k[j] == "function") &&
            j != "__proto__"
          )
            return k[j];
        }
        var Al = $l(Qt);
        function $l(k) {
          var j = 0,
            B = 0;
          return function () {
            var te = _s(),
              Pe = l - (te - B);
            if (((B = te), Pe > 0)) {
              if (++j >= s) return arguments[0];
            } else j = 0;
            return k.apply(void 0, arguments);
          };
        }
        function zs(k) {
          if (k != null) {
            try {
              return Mr.call(k);
            } catch {}
            try {
              return k + "";
            } catch {}
          }
          return "";
        }
        function hr(k, j) {
          return k === j || (k !== k && j !== j);
        }
        var cn = Rs(
            (function () {
              return arguments;
            })()
          )
            ? Rs
            : function (k) {
                return En(k) && Pn.call(k, "callee") && !ml.call(k, "callee");
              },
          dn = Array.isArray;
        function fn(k) {
          return k != null && Ol(k.length) && !hn(k);
        }
        function Co(k) {
          return En(k) && fn(k);
        }
        var Ir = Cs || Br;
        function hn(k) {
          if (!Hn(k)) return !1;
          var j = Dr(k);
          return j == _ || j == S || j == p || j == z;
        }
        function Ol(k) {
          return typeof k == "number" && k > -1 && k % 1 == 0 && k <= u;
        }
        function Hn(k) {
          var j = typeof k;
          return k != null && (j == "object" || j == "function");
        }
        function En(k) {
          return k != null && typeof k == "object";
        }
        function Sd(k) {
          if (!En(k) || Dr(k) != O) return !1;
          var j = jr(k);
          if (j === null) return !0;
          var B = Pn.call(j, "constructor") && j.constructor;
          return typeof B == "function" && B instanceof B && Mr.call(B) == hl;
        }
        var js = gs ? cl(gs) : pd;
        function gi(k) {
          return di(k, Ls(k));
        }
        function Ls(k) {
          return fn(k) ? _l(k) : Pl(k);
        }
        var xd = wo(function (k, j, B, te) {
          xo(k, j, B, te);
        });
        function _o(k) {
          return function () {
            return k;
          };
        }
        function Fr(k) {
          return k;
        }
        function Br() {
          return !1;
        }
        e.exports = xd;
      })(ya, ya.exports)),
    ya.exports
  );
}
var c2 = u2();
const ir = mo(c2);
function d2(e, t = []) {
  const r = P.useRef(e);
  return (
    P.useEffect(() => {
      r.current = e;
    }),
    P.useCallback((...i) => {
      var s;
      return (s = r.current) == null ? void 0 : s.call(r, ...i);
    }, t)
  );
}
const yc =
    globalThis != null && globalThis.document ? P.useLayoutEffect : P.useEffect,
  v0 = (e, t) => {
    const r = P.useRef(!1),
      i = P.useRef(!1);
    P.useEffect(() => {
      if (r.current && i.current) return e();
      i.current = !0;
    }, t),
      P.useEffect(
        () => (
          (r.current = !0),
          () => {
            r.current = !1;
          }
        ),
        []
      );
  };
function f2(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function h2(...e) {
  return (t) => {
    e.forEach((r) => {
      f2(r, t);
    });
  };
}
function p2(...e) {
  return P.useMemo(() => h2(...e), e);
}
function m2(e, t) {
  const r = d2(e);
  P.useEffect(() => {
    if (t == null) return;
    let i = null;
    return (
      (i = window.setTimeout(() => {
        r();
      }, t)),
      () => {
        i && window.clearTimeout(i);
      }
    );
  }, [t, r]);
}
const mt = {
    open: (e, t) => `${e}[data-open], ${e}[open], ${e}[data-state=open] ${t}`,
    closed: (e, t) => `${e}[data-closed], ${e}[data-state=closed] ${t}`,
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Qn = (e) => Kb((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  wr = (e) => Kb((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  Kb = (e, ...t) => t.map(e).join(", "),
  Qi = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within, &[data-focus-within]",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty, &[data-empty]",
    _expanded:
      "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
    _checked: "&[aria-checked=true], &[data-checked], &[data-state=checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
    _groupOpen: Qn(mt.open),
    _groupClosed: Qn(mt.closed),
    _groupHover: Qn(mt.hover),
    _peerHover: wr(mt.hover),
    _groupFocus: Qn(mt.focus),
    _peerFocus: wr(mt.focus),
    _groupFocusVisible: Qn(mt.focusVisible),
    _peerFocusVisible: wr(mt.focusVisible),
    _groupActive: Qn(mt.active),
    _peerActive: wr(mt.active),
    _groupDisabled: Qn(mt.disabled),
    _peerDisabled: wr(mt.disabled),
    _groupInvalid: Qn(mt.invalid),
    _peerInvalid: wr(mt.invalid),
    _groupChecked: Qn(mt.checked),
    _peerChecked: wr(mt.checked),
    _groupFocusWithin: Qn(mt.focusWithin),
    _peerFocusWithin: wr(mt.focusWithin),
    _peerPlaceholderShown: wr(mt.placeholderShown),
    _placeholder: "&::placeholder, &[data-placeholder]",
    _placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
    _fullScreen: "&:fullscreen, &[data-fullscreen]",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
    _open: "&[data-open], &[open], &[data-state=open]",
    _closed: "&[data-closed], &[data-state=closed]",
    _complete: "&[data-complete]",
    _incomplete: "&[data-incomplete]",
    _current: "&[data-current]",
  },
  Gb = Object.keys(Qi),
  g2 = (e) => /!(important)?$/.test(e),
  b0 = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  y2 = (e, t) => (r) => {
    const i = String(t),
      s = g2(i),
      l = b0(i),
      u = e ? `${e}.${l}` : l;
    let d = _n(r.__cssMap) && u in r.__cssMap ? r.__cssMap[u].varRef : t;
    return (d = b0(d)), s ? `${d} !important` : d;
  };
function Up(e) {
  const { scale: t, transform: r, compose: i } = e;
  return (l, u) => {
    const d = y2(t, l)(u);
    let f = (r == null ? void 0 : r(d, u)) ?? d;
    return i && (f = i(f, u)), f;
  };
}
const Pu =
  (...e) =>
  (t) =>
    e.reduce((r, i) => i(r), t);
function Sn(e, t) {
  return (r) => {
    const i = { property: r, scale: e };
    return (i.transform = Up({ scale: e, transform: t })), i;
  };
}
const v2 =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === "rtl" ? e : t;
function b2(e) {
  const { property: t, scale: r, transform: i } = e;
  return {
    scale: r,
    property: v2(t),
    transform: r ? Up({ scale: r, compose: i }) : i,
  };
}
const Yb = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function S2() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Yb,
  ].join(" ");
}
function x2() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Yb,
  ].join(" ");
}
const w2 = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  k2 = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function C2(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
const _2 = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  Qh = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  P2 = new Set(Object.values(Qh)),
  Jh = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  T2 = (e) => e.trim();
function E2(e, t) {
  if (e == null || Jh.has(e)) return e;
  if (!(Zh(e) || Jh.has(e))) return `url('${e}')`;
  const s = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    l = s == null ? void 0 : s[1],
    u = s == null ? void 0 : s[2];
  if (!l || !u) return e;
  const d = l.includes("-gradient") ? l : `${l}-gradient`,
    [f, ...p] = u.split(",").map(T2).filter(Boolean);
  if ((p == null ? void 0 : p.length) === 0) return e;
  const m = f in Qh ? Qh[f] : f;
  p.unshift(m);
  const y = p.map((b) => {
    if (P2.has(b)) return b;
    const _ = b.indexOf(" "),
      [S, w] = _ !== -1 ? [b.substr(0, _), b.substr(_ + 1)] : [b],
      x = Zh(w) ? w : w && w.split(" "),
      T = `colors.${S}`,
      O = T in t.__cssMap ? t.__cssMap[T].varRef : S;
    return x ? [O, ...(Array.isArray(x) ? x : [x])].join(" ") : O;
  });
  return `${d}(${y.join(", ")})`;
}
const Zh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  R2 = (e, t) => E2(e, t ?? {});
function A2(e) {
  return /^var\(--.+\)$/.test(e);
}
const $2 = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), "");
    return { unitless: !r, value: t, unit: r };
  },
  Jn = (e) => (t) => `${e}(${t})`,
  Re = {
    filter(e) {
      return e !== "auto" ? e : w2;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : k2;
    },
    ring(e) {
      return C2(Re.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? S2() : e === "auto-gpu" ? x2() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = $2(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const r = { left: "right", right: "left" };
      return t.direction === "rtl" ? r[e] : e;
    },
    degree(e) {
      if (A2(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: R2,
    blur: Jn("blur"),
    opacity: Jn("opacity"),
    brightness: Jn("brightness"),
    contrast: Jn("contrast"),
    dropShadow: Jn("drop-shadow"),
    grayscale: Jn("grayscale"),
    hueRotate: (e) => Jn("hue-rotate")(Re.degree(e)),
    invert: Jn("invert"),
    saturate: Jn("saturate"),
    sepia: Jn("sepia"),
    bgImage(e) {
      return e == null || Zh(e) || Jh.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      const { space: t, divide: r } = _2[e] ?? {},
        i = { flexDirection: e };
      return t && (i[t] = 1), r && (i[r] = 1), i;
    },
  },
  M = {
    borderWidths: Sn("borderWidths"),
    borderStyles: Sn("borderStyles"),
    colors: Sn("colors"),
    borders: Sn("borders"),
    gradients: Sn("gradients", Re.gradient),
    radii: Sn("radii", Re.px),
    space: Sn("space", Pu(Re.vh, Re.px)),
    spaceT: Sn("space", Pu(Re.vh, Re.px)),
    degreeT(e) {
      return { property: e, transform: Re.degree };
    },
    prop(e, t, r) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: Up({ scale: t, transform: r }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Sn("sizes", Pu(Re.vh, Re.px)),
    sizesT: Sn("sizes", Pu(Re.vh, Re.fraction)),
    shadows: Sn("shadows"),
    logical: b2,
    blur: Sn("blur", Re.blur),
  },
  Qu = {
    background: M.colors("background"),
    backgroundColor: M.colors("backgroundColor"),
    backgroundImage: M.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Re.bgClip },
    bgSize: M.prop("backgroundSize"),
    bgPosition: M.prop("backgroundPosition"),
    bg: M.colors("background"),
    bgColor: M.colors("backgroundColor"),
    bgPos: M.prop("backgroundPosition"),
    bgRepeat: M.prop("backgroundRepeat"),
    bgAttachment: M.prop("backgroundAttachment"),
    bgGradient: M.gradients("backgroundImage"),
    bgClip: { transform: Re.bgClip },
  };
Object.assign(Qu, { bgImage: Qu.backgroundImage, bgImg: Qu.backgroundImage });
const je = {
  border: M.borders("border"),
  borderWidth: M.borderWidths("borderWidth"),
  borderStyle: M.borderStyles("borderStyle"),
  borderColor: M.colors("borderColor"),
  borderRadius: M.radii("borderRadius"),
  borderTop: M.borders("borderTop"),
  borderBlockStart: M.borders("borderBlockStart"),
  borderTopLeftRadius: M.radii("borderTopLeftRadius"),
  borderStartStartRadius: M.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: M.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: M.radii("borderTopRightRadius"),
  borderStartEndRadius: M.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: M.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: M.borders("borderRight"),
  borderInlineEnd: M.borders("borderInlineEnd"),
  borderBottom: M.borders("borderBottom"),
  borderBlockEnd: M.borders("borderBlockEnd"),
  borderBottomLeftRadius: M.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: M.radii("borderBottomRightRadius"),
  borderLeft: M.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: M.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: M.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: M.borders(["borderLeft", "borderRight"]),
  borderInline: M.borders("borderInline"),
  borderY: M.borders(["borderTop", "borderBottom"]),
  borderBlock: M.borders("borderBlock"),
  borderTopWidth: M.borderWidths("borderTopWidth"),
  borderBlockStartWidth: M.borderWidths("borderBlockStartWidth"),
  borderTopColor: M.colors("borderTopColor"),
  borderBlockStartColor: M.colors("borderBlockStartColor"),
  borderTopStyle: M.borderStyles("borderTopStyle"),
  borderBlockStartStyle: M.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: M.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: M.borderWidths("borderBlockEndWidth"),
  borderBottomColor: M.colors("borderBottomColor"),
  borderBlockEndColor: M.colors("borderBlockEndColor"),
  borderBottomStyle: M.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: M.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: M.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: M.borderWidths("borderInlineStartWidth"),
  borderLeftColor: M.colors("borderLeftColor"),
  borderInlineStartColor: M.colors("borderInlineStartColor"),
  borderLeftStyle: M.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: M.borderStyles("borderInlineStartStyle"),
  borderRightWidth: M.borderWidths("borderRightWidth"),
  borderInlineEndWidth: M.borderWidths("borderInlineEndWidth"),
  borderRightColor: M.colors("borderRightColor"),
  borderInlineEndColor: M.colors("borderInlineEndColor"),
  borderRightStyle: M.borderStyles("borderRightStyle"),
  borderInlineEndStyle: M.borderStyles("borderInlineEndStyle"),
  borderTopRadius: M.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: M.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: M.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: M.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(je, {
  rounded: je.borderRadius,
  roundedTop: je.borderTopRadius,
  roundedTopLeft: je.borderTopLeftRadius,
  roundedTopRight: je.borderTopRightRadius,
  roundedTopStart: je.borderStartStartRadius,
  roundedTopEnd: je.borderStartEndRadius,
  roundedBottom: je.borderBottomRadius,
  roundedBottomLeft: je.borderBottomLeftRadius,
  roundedBottomRight: je.borderBottomRightRadius,
  roundedBottomStart: je.borderEndStartRadius,
  roundedBottomEnd: je.borderEndEndRadius,
  roundedLeft: je.borderLeftRadius,
  roundedRight: je.borderRightRadius,
  roundedStart: je.borderInlineStartRadius,
  roundedEnd: je.borderInlineEndRadius,
  borderStart: je.borderInlineStart,
  borderEnd: je.borderInlineEnd,
  borderTopStartRadius: je.borderStartStartRadius,
  borderTopEndRadius: je.borderStartEndRadius,
  borderBottomStartRadius: je.borderEndStartRadius,
  borderBottomEndRadius: je.borderEndEndRadius,
  borderStartRadius: je.borderInlineStartRadius,
  borderEndRadius: je.borderInlineEndRadius,
  borderStartWidth: je.borderInlineStartWidth,
  borderEndWidth: je.borderInlineEndWidth,
  borderStartColor: je.borderInlineStartColor,
  borderEndColor: je.borderInlineEndColor,
  borderStartStyle: je.borderInlineStartStyle,
  borderEndStyle: je.borderInlineEndStyle,
});
const O2 = {
    color: M.colors("color"),
    textColor: M.colors("color"),
    fill: M.colors("fill"),
    stroke: M.colors("stroke"),
    accentColor: M.colors("accentColor"),
    textFillColor: M.colors("textFillColor"),
  },
  vc = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Re.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: M.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: M.space("gap"),
    rowGap: M.space("rowGap"),
    columnGap: M.space("columnGap"),
  };
Object.assign(vc, { flexDir: vc.flexDirection });
const wn = {
  width: M.sizesT("width"),
  inlineSize: M.sizesT("inlineSize"),
  height: M.sizes("height"),
  blockSize: M.sizes("blockSize"),
  boxSize: M.sizes(["width", "height"]),
  minWidth: M.sizes("minWidth"),
  minInlineSize: M.sizes("minInlineSize"),
  minHeight: M.sizes("minHeight"),
  minBlockSize: M.sizes("minBlockSize"),
  maxWidth: M.sizes("maxWidth"),
  maxInlineSize: M.sizes("maxInlineSize"),
  maxHeight: M.sizes("maxHeight"),
  maxBlockSize: M.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var s, l;
      return {
        [`@media screen and (min-width: ${
          ((l = (s = t.__breakpoints) == null ? void 0 : s.get(e)) == null
            ? void 0
            : l.minW) ?? e
        })`]: { display: "none" },
      };
    },
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var s, l;
      return {
        [`@media screen and (max-width: ${
          ((l = (s = t.__breakpoints) == null ? void 0 : s.get(e)) == null
            ? void 0
            : l._minW) ?? e
        })`]: { display: "none" },
      };
    },
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: M.propT("float", Re.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0,
};
Object.assign(wn, {
  w: wn.width,
  h: wn.height,
  minW: wn.minWidth,
  maxW: wn.maxWidth,
  minH: wn.minHeight,
  maxH: wn.maxHeight,
  overscroll: wn.overscrollBehavior,
  overscrollX: wn.overscrollBehaviorX,
  overscrollY: wn.overscrollBehaviorY,
});
const M2 = {
    filter: { transform: Re.filter },
    blur: M.blur("--chakra-blur"),
    brightness: M.propT("--chakra-brightness", Re.brightness),
    contrast: M.propT("--chakra-contrast", Re.contrast),
    hueRotate: M.propT("--chakra-hue-rotate", Re.hueRotate),
    invert: M.propT("--chakra-invert", Re.invert),
    saturate: M.propT("--chakra-saturate", Re.saturate),
    dropShadow: M.propT("--chakra-drop-shadow", Re.dropShadow),
    backdropFilter: { transform: Re.backdropFilter },
    backdropBlur: M.blur("--chakra-backdrop-blur"),
    backdropBrightness: M.propT("--chakra-backdrop-brightness", Re.brightness),
    backdropContrast: M.propT("--chakra-backdrop-contrast", Re.contrast),
    backdropHueRotate: M.propT("--chakra-backdrop-hue-rotate", Re.hueRotate),
    backdropInvert: M.propT("--chakra-backdrop-invert", Re.invert),
    backdropSaturate: M.propT("--chakra-backdrop-saturate", Re.saturate),
  },
  z2 = {
    ring: { transform: Re.ring },
    ringColor: M.colors("--chakra-ring-color"),
    ringOffset: M.prop("--chakra-ring-offset-width"),
    ringOffsetColor: M.colors("--chakra-ring-offset-color"),
    ringInset: M.prop("--chakra-ring-inset"),
  },
  j2 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Re.outline },
    outlineOffset: !0,
    outlineColor: M.colors("outlineColor"),
  },
  Xb = {
    gridGap: M.space("gridGap"),
    gridColumnGap: M.space("gridColumnGap"),
    gridRowGap: M.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  };
function L2(e, t, r, i) {
  const s = typeof t == "string" ? t.split(".") : [t];
  for (i = 0; i < s.length && e; i += 1) e = e[s[i]];
  return e === void 0 ? r : e;
}
const N2 = (e) => {
    const t = new WeakMap();
    return (i, s, l, u) => {
      if (typeof i > "u") return e(i, s, l);
      t.has(i) || t.set(i, new Map());
      const d = t.get(i);
      if (d.has(s)) return d.get(s);
      const f = e(i, s, l, u);
      return d.set(s, f), f;
    };
  },
  D2 = N2(L2),
  I2 = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  F2 = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  Xf = (e, t, r) => {
    const i = {},
      s = D2(e, t, {});
    for (const l in s) (l in r && r[l] != null) || (i[l] = s[l]);
    return i;
  },
  B2 = {
    srOnly: {
      transform(e) {
        return e === !0 ? I2 : e === "focusable" ? F2 : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, r) => Xf(t, `layerStyles.${e}`, r),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, r) => Xf(t, `textStyles.${e}`, r),
    },
    apply: { processResult: !0, transform: (e, t, r) => Xf(t, e, r) },
  },
  Pa = {
    position: !0,
    pos: M.prop("position"),
    zIndex: M.prop("zIndex", "zIndices"),
    inset: M.spaceT("inset"),
    insetX: M.spaceT(["left", "right"]),
    insetInline: M.spaceT("insetInline"),
    insetY: M.spaceT(["top", "bottom"]),
    insetBlock: M.spaceT("insetBlock"),
    top: M.spaceT("top"),
    insetBlockStart: M.spaceT("insetBlockStart"),
    bottom: M.spaceT("bottom"),
    insetBlockEnd: M.spaceT("insetBlockEnd"),
    left: M.spaceT("left"),
    insetInlineStart: M.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: M.spaceT("right"),
    insetInlineEnd: M.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Pa, {
  insetStart: Pa.insetInlineStart,
  insetEnd: Pa.insetInlineEnd,
});
const ep = {
  boxShadow: M.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: M.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: M.prop("backgroundBlendMode"),
  opacity: !0,
};
Object.assign(ep, { shadow: ep.boxShadow });
const Qe = {
  margin: M.spaceT("margin"),
  marginTop: M.spaceT("marginTop"),
  marginBlockStart: M.spaceT("marginBlockStart"),
  marginRight: M.spaceT("marginRight"),
  marginInlineEnd: M.spaceT("marginInlineEnd"),
  marginBottom: M.spaceT("marginBottom"),
  marginBlockEnd: M.spaceT("marginBlockEnd"),
  marginLeft: M.spaceT("marginLeft"),
  marginInlineStart: M.spaceT("marginInlineStart"),
  marginX: M.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: M.spaceT("marginInline"),
  marginY: M.spaceT(["marginTop", "marginBottom"]),
  marginBlock: M.spaceT("marginBlock"),
  padding: M.space("padding"),
  paddingTop: M.space("paddingTop"),
  paddingBlockStart: M.space("paddingBlockStart"),
  paddingRight: M.space("paddingRight"),
  paddingBottom: M.space("paddingBottom"),
  paddingBlockEnd: M.space("paddingBlockEnd"),
  paddingLeft: M.space("paddingLeft"),
  paddingInlineStart: M.space("paddingInlineStart"),
  paddingInlineEnd: M.space("paddingInlineEnd"),
  paddingX: M.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: M.space("paddingInline"),
  paddingY: M.space(["paddingTop", "paddingBottom"]),
  paddingBlock: M.space("paddingBlock"),
};
Object.assign(Qe, {
  m: Qe.margin,
  mt: Qe.marginTop,
  mr: Qe.marginRight,
  me: Qe.marginInlineEnd,
  marginEnd: Qe.marginInlineEnd,
  mb: Qe.marginBottom,
  ml: Qe.marginLeft,
  ms: Qe.marginInlineStart,
  marginStart: Qe.marginInlineStart,
  mx: Qe.marginX,
  my: Qe.marginY,
  p: Qe.padding,
  pt: Qe.paddingTop,
  py: Qe.paddingY,
  px: Qe.paddingX,
  pb: Qe.paddingBottom,
  pl: Qe.paddingLeft,
  ps: Qe.paddingInlineStart,
  paddingStart: Qe.paddingInlineStart,
  pr: Qe.paddingRight,
  pe: Qe.paddingInlineEnd,
  paddingEnd: Qe.paddingInlineEnd,
});
const V2 = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: M.spaceT("scrollMargin"),
    scrollMarginTop: M.spaceT("scrollMarginTop"),
    scrollMarginBottom: M.spaceT("scrollMarginBottom"),
    scrollMarginLeft: M.spaceT("scrollMarginLeft"),
    scrollMarginRight: M.spaceT("scrollMarginRight"),
    scrollMarginX: M.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: M.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: M.spaceT("scrollPadding"),
    scrollPaddingTop: M.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: M.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: M.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: M.spaceT("scrollPaddingRight"),
    scrollPaddingX: M.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: M.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  },
  U2 = {
    fontFamily: M.prop("fontFamily", "fonts"),
    fontSize: M.prop("fontSize", "fontSizes", Re.px),
    fontWeight: M.prop("fontWeight", "fontWeights"),
    lineHeight: M.prop("lineHeight", "lineHeights"),
    letterSpacing: M.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  W2 = {
    textDecorationColor: M.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: M.shadows("textShadow"),
  },
  H2 = {
    clipPath: !0,
    transform: M.propT("transform", Re.transform),
    transformOrigin: !0,
    translateX: M.spaceT("--chakra-translate-x"),
    translateY: M.spaceT("--chakra-translate-y"),
    skewX: M.degreeT("--chakra-skew-x"),
    skewY: M.degreeT("--chakra-skew-y"),
    scaleX: M.prop("--chakra-scale-x"),
    scaleY: M.prop("--chakra-scale-y"),
    scale: M.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: M.degreeT("--chakra-rotate"),
  },
  q2 = {
    listStyleType: !0,
    listStylePosition: !0,
    listStylePos: M.prop("listStylePosition"),
    listStyleImage: !0,
    listStyleImg: M.prop("listStyleImage"),
  },
  K2 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: M.prop("transitionDuration", "transition.duration"),
    transitionProperty: M.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: M.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  Wp = ir(
    {},
    Qu,
    je,
    O2,
    vc,
    wn,
    M2,
    z2,
    j2,
    Xb,
    B2,
    Pa,
    ep,
    Qe,
    V2,
    U2,
    W2,
    H2,
    q2,
    K2
  );
Object.assign({}, Qe, wn, vc, Xb, Pa);
const G2 = [...Object.keys(Wp), ...Gb],
  Y2 = { ...Wp, ...Qi },
  X2 = (e) => e in Y2,
  Q2 = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: r, toArrayValue: i, media: s } = t.__breakpoints,
      l = {};
    for (const u in e) {
      let d = or(e[u], t);
      if (d == null) continue;
      if (((d = _n(d) && r(d) ? i(d) : d), !Array.isArray(d))) {
        l[u] = d;
        continue;
      }
      const f = d.slice(0, s.length).length;
      for (let p = 0; p < f; p += 1) {
        const m = s == null ? void 0 : s[p];
        if (!m) {
          l[u] = d[p];
          continue;
        }
        (l[m] = l[m] || {}), d[p] != null && (l[m][u] = d[p]);
      }
    }
    return l;
  };
function J2(e) {
  const t = [];
  let r = "",
    i = !1;
  for (let s = 0; s < e.length; s++) {
    const l = e[s];
    l === "("
      ? ((i = !0), (r += l))
      : l === ")"
      ? ((i = !1), (r += l))
      : l === "," && !i
      ? (t.push(r), (r = ""))
      : (r += l);
  }
  return (r = r.trim()), r && t.push(r), t;
}
function Z2(e) {
  return /^var\(--.+\)$/.test(e);
}
const e_ = (e, t) => e.startsWith("--") && typeof t == "string" && !Z2(t),
  t_ = (e, t) => {
    if (t == null) return t;
    const r = (u) => {
        var d, f;
        return (f = (d = e.__cssMap) == null ? void 0 : d[u]) == null
          ? void 0
          : f.varRef;
      },
      i = (u) => r(u) ?? u,
      [s, l] = J2(t);
    return (t = r(s) ?? i(l) ?? i(t)), t;
  };
function n_(e) {
  const { configs: t = {}, pseudos: r = {}, theme: i } = e,
    s = (l, u = !1) => {
      var m;
      const d = or(l, i),
        f = Q2(d)(i);
      let p = {};
      for (let y in f) {
        const b = f[y];
        let _ = or(b, i);
        y in r && (y = r[y]), e_(y, _) && (_ = t_(i, _));
        let S = t[y];
        if ((S === !0 && (S = { property: y }), _n(_))) {
          (p[y] = p[y] ?? {}), (p[y] = ir({}, p[y], s(_, !0)));
          continue;
        }
        let w =
          ((m = S == null ? void 0 : S.transform) == null
            ? void 0
            : m.call(S, _, i, d)) ?? _;
        w = S != null && S.processResult ? s(w, !0) : w;
        const x = or(S == null ? void 0 : S.property, i);
        if (!u && S != null && S.static) {
          const T = or(S.static, i);
          p = ir({}, p, T);
        }
        if (x && Array.isArray(x)) {
          for (const T of x) p[T] = w;
          continue;
        }
        if (x) {
          x === "&" && _n(w) ? (p = ir({}, p, w)) : (p[x] = w);
          continue;
        }
        if (_n(w)) {
          p = ir({}, p, w);
          continue;
        }
        p[y] = w;
      }
      return p;
    };
  return s;
}
const Qb = (e) => (t) => n_({ theme: t, pseudos: Qi, configs: Wp })(e);
function qe(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function r_(e, t) {
  if (Array.isArray(e)) return e;
  if (_n(e)) return t(e);
  if (e != null) return [e];
}
function o_(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r;
  return -1;
}
function i_(e) {
  const t = e.__breakpoints;
  return function (i, s, l, u) {
    var b, _;
    if (!t) return;
    const d = {},
      f = r_(l, t.toArrayValue);
    if (!f) return d;
    const p = f.length,
      m = p === 1,
      y = !!i.parts;
    for (let S = 0; S < p; S++) {
      const w = t.details[S],
        x = t.details[o_(f, S)],
        T = ga(w.minW, x == null ? void 0 : x._minW),
        O = or((b = i[s]) == null ? void 0 : b[f[S]], u);
      if (O) {
        if (y) {
          (_ = i.parts) == null ||
            _.forEach((z) => {
              ir(d, { [z]: m ? O[z] : { [T]: O[z] } });
            });
          continue;
        }
        if (!y) {
          m ? ir(d, O) : (d[T] = O);
          continue;
        }
        d[T] = O;
      }
    }
    return d;
  };
}
function s_(e) {
  return (t) => {
    const { variant: r, size: i, theme: s } = t,
      l = i_(s);
    return ir(
      {},
      or(e.baseStyle ?? {}, t),
      l(e, "sizes", i, t),
      l(e, "variants", r, t)
    );
  };
}
function Lc(e) {
  return qb(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function Jb(e) {
  return _n(e) && e.reference ? e.reference : String(e);
}
const Nc = (e, ...t) => t.map(Jb).join(` ${e} `).replace(/calc/g, ""),
  S0 = (...e) => `calc(${Nc("+", ...e)})`,
  x0 = (...e) => `calc(${Nc("-", ...e)})`,
  tp = (...e) => `calc(${Nc("*", ...e)})`,
  w0 = (...e) => `calc(${Nc("/", ...e)})`,
  k0 = (e) => {
    const t = Jb(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : tp(t, -1);
  },
  kr = Object.assign(
    (e) => ({
      add: (...t) => kr(S0(e, ...t)),
      subtract: (...t) => kr(x0(e, ...t)),
      multiply: (...t) => kr(tp(e, ...t)),
      divide: (...t) => kr(w0(e, ...t)),
      negate: () => kr(k0(e)),
      toString: () => e.toString(),
    }),
    { add: S0, subtract: x0, multiply: tp, divide: w0, negate: k0 }
  );
function a_(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function l_(e) {
  const t = a_(e.toString());
  return c_(u_(t));
}
function u_(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function c_(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function d_(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function f_(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function h_(e, t = "") {
  return l_(`--${d_(e, t)}`);
}
function me(e, t, r) {
  const i = h_(e, r);
  return { variable: i, reference: f_(i, t) };
}
function p_(e, t) {
  const r = {};
  for (const i of t) {
    if (Array.isArray(i)) {
      const [s, l] = i;
      r[s] = me(`${e}-${s}`, l);
      continue;
    }
    r[i] = me(`${e}-${i}`);
  }
  return r;
}
const m_ = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function g_(e) {
  return o2(e, m_);
}
function y_(e) {
  return e.semanticTokens;
}
function v_(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: i, ...s } = e;
  return s;
}
function b_(e) {
  const t = g_(e),
    r = y_(e),
    i = (l) => Gb.includes(l) || l === "default",
    s = {};
  return (
    g0(t, (l, u) => {
      l != null && (s[u.join(".")] = { isSemantic: !1, value: l });
    }),
    g0(
      r,
      (l, u) => {
        l != null && (s[u.join(".")] = { isSemantic: !0, value: l });
      },
      { stop: (l) => Object.keys(l).every(i) }
    ),
    s
  );
}
function C0(e, t) {
  return me(String(e).replace(/\./g, "-"), void 0, t);
}
function S_(e) {
  var u;
  const t = b_(e),
    r = (u = e.config) == null ? void 0 : u.cssVarPrefix;
  let i = {};
  const s = {};
  function l(d, f) {
    const m = [String(d).split(".")[0], f].join(".");
    if (!t[m]) return f;
    const { reference: b } = C0(m, r);
    return b;
  }
  for (const [d, f] of Object.entries(t)) {
    const { isSemantic: p, value: m } = f,
      { variable: y, reference: b } = C0(d, r);
    if (!p) {
      if (d.startsWith("space")) {
        const S = d.split("."),
          [w, ...x] = S,
          T = `${w}.-${x.join(".")}`,
          O = kr.negate(m),
          z = kr.negate(b);
        s[T] = { value: O, var: y, varRef: z };
      }
      (i[y] = m), (s[d] = { value: m, var: y, varRef: b });
      continue;
    }
    const _ = _n(m) ? m : { default: m };
    (i = ir(
      i,
      Object.entries(_).reduce((S, [w, x]) => {
        if (!x) return S;
        const T = l(d, `${x}`);
        if (w === "default") return (S[y] = T), S;
        const O = (Qi == null ? void 0 : Qi[w]) ?? w;
        return (S[O] = { [y]: T }), S;
      }, {})
    )),
      (s[d] = { value: b, var: y, varRef: b });
  }
  return { cssVars: i, cssMap: s };
}
function x_(e) {
  const t = v_(e),
    { cssMap: r, cssVars: i } = S_(t);
  return (
    Object.assign(t, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...i,
      },
      __cssMap: r,
      __breakpoints: JC(t.breakpoints),
    }),
    t
  );
}
function Ie(e, t = {}) {
  let r = !1;
  function i() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function s(...m) {
    i();
    for (const y of m) t[y] = f(y);
    return Ie(e, t);
  }
  function l(...m) {
    for (const y of m) y in t || (t[y] = f(y));
    return Ie(e, t);
  }
  function u() {
    return Object.fromEntries(
      Object.entries(t).map(([y, b]) => [y, b.selector])
    );
  }
  function d() {
    return Object.fromEntries(
      Object.entries(t).map(([y, b]) => [y, b.className])
    );
  }
  function f(m) {
    const _ = `chakra-${(["container", "root"].includes(m ?? "") ? [e] : [e, m])
      .filter(Boolean)
      .join("__")}`;
    return { className: _, selector: `.${_}`, toString: () => m };
  }
  return {
    parts: s,
    toPart: f,
    extend: l,
    selectors: u,
    classnames: d,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
const w_ = Ie("accordion").parts(
    "root",
    "container",
    "button",
    "panel",
    "icon"
  ),
  k_ = Ie("alert").parts(
    "title",
    "description",
    "container",
    "icon",
    "spinner"
  ),
  C_ = Ie("avatar").parts(
    "label",
    "badge",
    "container",
    "excessLabel",
    "group"
  ),
  __ = Ie("breadcrumb").parts("link", "item", "container", "separator");
Ie("button").parts();
const P_ = Ie("checkbox").parts("control", "icon", "container", "label");
Ie("progress").parts("track", "filledTrack", "label");
const T_ = Ie("drawer").parts(
    "overlay",
    "dialogContainer",
    "dialog",
    "header",
    "closeButton",
    "body",
    "footer"
  ),
  E_ = Ie("editable").parts("preview", "input", "textarea"),
  R_ = Ie("form").parts("container", "requiredIndicator", "helperText"),
  A_ = Ie("formError").parts("text", "icon"),
  $_ = Ie("input").parts("addon", "field", "element", "group"),
  O_ = Ie("list").parts("container", "item", "icon"),
  M_ = Ie("menu").parts(
    "button",
    "list",
    "item",
    "groupTitle",
    "icon",
    "command",
    "divider"
  ),
  z_ = Ie("modal").parts(
    "overlay",
    "dialogContainer",
    "dialog",
    "header",
    "closeButton",
    "body",
    "footer"
  ),
  j_ = Ie("numberinput").parts("root", "field", "stepperGroup", "stepper");
Ie("pininput").parts("field");
const L_ = Ie("popover").parts(
    "content",
    "header",
    "body",
    "footer",
    "popper",
    "arrow",
    "closeButton"
  ),
  N_ = Ie("progress").parts("label", "filledTrack", "track"),
  D_ = Ie("radio").parts("container", "control", "label"),
  I_ = Ie("select").parts("field", "icon"),
  F_ = Ie("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  B_ = Ie("stat").parts("container", "label", "helpText", "number", "icon"),
  V_ = Ie("switch").parts("container", "track", "thumb", "label"),
  U_ = Ie("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  W_ = Ie("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  H_ = Ie("tag").parts("container", "label", "closeButton"),
  q_ = Ie("card").parts("container", "header", "body", "footer");
Ie("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
const { definePartsStyle: K_, defineMultiStyleConfig: G_ } = qe(w_.keys),
  Y_ = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  X_ = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  Q_ = { pt: "2", px: "4", pb: "5" },
  J_ = { fontSize: "1.25em" },
  Z_ = K_({ container: Y_, button: X_, panel: Q_, icon: J_ }),
  eP = G_({ baseStyle: Z_ });
function Uo(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class tP extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var va = tP;
function Hp(e) {
  if (typeof e != "string") throw new va(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = uP.test(e) ? oP(e) : e;
  const r = iP.exec(t);
  if (r) {
    const u = Array.from(r).slice(1);
    return [
      ...u.slice(0, 3).map((d) => parseInt(Na(d, 2), 16)),
      parseInt(Na(u[3] || "f", 2), 16) / 255,
    ];
  }
  const i = sP.exec(t);
  if (i) {
    const u = Array.from(i).slice(1);
    return [
      ...u.slice(0, 3).map((d) => parseInt(d, 16)),
      parseInt(u[3] || "ff", 16) / 255,
    ];
  }
  const s = aP.exec(t);
  if (s) {
    const u = Array.from(s).slice(1);
    return [
      ...u.slice(0, 3).map((d) => parseInt(d, 10)),
      parseFloat(u[3] || "1"),
    ];
  }
  const l = lP.exec(t);
  if (l) {
    const [u, d, f, p] = Array.from(l).slice(1).map(parseFloat);
    if (Uo(0, 100, d) !== d) throw new va(e);
    if (Uo(0, 100, f) !== f) throw new va(e);
    return [...cP(u, d, f), Number.isNaN(p) ? 1 : p];
  }
  throw new va(e);
}
function nP(e) {
  let t = 5381,
    r = e.length;
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const _0 = (e) => parseInt(e.replace(/_/g, ""), 36),
  rP =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const r = _0(t.substring(0, 3)),
          i = _0(t.substring(3)).toString(16);
        let s = "";
        for (let l = 0; l < 6 - i.length; l++) s += "0";
        return (e[r] = `${s}${i}`), e;
      }, {});
function oP(e) {
  const t = e.toLowerCase().trim(),
    r = rP[nP(t)];
  if (!r) throw new va(e);
  return `#${r}`;
}
const Na = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  iP = new RegExp(`^#${Na("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  sP = new RegExp(`^#${Na("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  aP = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${Na(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  lP =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  uP = /^[a-z]+$/i,
  P0 = (e) => Math.round(e * 255),
  cP = (e, t, r) => {
    let i = r / 100;
    if (t === 0) return [i, i, i].map(P0);
    const s = (((e % 360) + 360) % 360) / 60,
      l = (1 - Math.abs(2 * i - 1)) * (t / 100),
      u = l * (1 - Math.abs((s % 2) - 1));
    let d = 0,
      f = 0,
      p = 0;
    s >= 0 && s < 1
      ? ((d = l), (f = u))
      : s >= 1 && s < 2
      ? ((d = u), (f = l))
      : s >= 2 && s < 3
      ? ((f = l), (p = u))
      : s >= 3 && s < 4
      ? ((f = u), (p = l))
      : s >= 4 && s < 5
      ? ((d = u), (p = l))
      : s >= 5 && s < 6 && ((d = l), (p = u));
    const m = i - l / 2,
      y = d + m,
      b = f + m,
      _ = p + m;
    return [y, b, _].map(P0);
  };
function dP(e, t, r, i) {
  return `rgba(${Uo(0, 255, e).toFixed()}, ${Uo(0, 255, t).toFixed()}, ${Uo(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(Uo(0, 1, i).toFixed(3))})`;
}
function fP(e, t) {
  const [r, i, s, l] = Hp(e);
  return dP(r, i, s, l - t);
}
function hP(e) {
  const [t, r, i, s] = Hp(e);
  let l = (u) => {
    const d = Uo(0, 255, u).toString(16);
    return d.length === 1 ? `0${d}` : d;
  };
  return `#${l(t)}${l(r)}${l(i)}${s < 1 ? l(Math.round(s * 255)) : ""}`;
}
const pP = (e) => Object.keys(e).length === 0;
function mP(e, t, r, i, s) {
  for (t = t.split ? t.split(".") : t, i = 0; i < t.length; i++)
    e = e ? e[t[i]] : s;
  return e === s ? r : e;
}
const It = (e, t, r) => {
    const i = mP(e, `colors.${t}`, t);
    try {
      return hP(i), i;
    } catch {
      return "#000000";
    }
  },
  gP = (e) => {
    const [t, r, i] = Hp(e);
    return (t * 299 + r * 587 + i * 114) / 1e3;
  },
  yP = (e) => (t) => {
    const r = It(t, e);
    return gP(r) < 128 ? "dark" : "light";
  },
  vP = (e) => (t) => yP(e)(t) === "dark",
  os = (e, t) => (r) => {
    const i = It(r, e);
    return fP(i, 1 - t);
  };
function T0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
const bP = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function SP(e) {
  const t = bP();
  return !e || pP(e)
    ? t
    : e.string && e.colors
    ? wP(e.string, e.colors)
    : e.string && !e.colors
    ? xP(e.string)
    : e.colors && !e.string
    ? kP(e.colors)
    : t;
}
function xP(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let i = 0; i < e.length; i += 1)
    (t = e.charCodeAt(i) + ((t << 5) - t)), (t = t & t);
  let r = "#";
  for (let i = 0; i < 3; i += 1) {
    const s = (t >> (i * 8)) & 255;
    r += `00${s.toString(16)}`.substr(-2);
  }
  return r;
}
function wP(e, t) {
  let r = 0;
  if (e.length === 0) return t[0];
  for (let i = 0; i < e.length; i += 1)
    (r = e.charCodeAt(i) + ((r << 5) - r)), (r = r & r);
  return (r = ((r % t.length) + t.length) % t.length), t[r];
}
function kP(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function pe(e, t) {
  return (r) => (r.colorMode === "dark" ? t : e);
}
function qp(e) {
  const { orientation: t, vertical: r, horizontal: i } = e;
  return t ? (t === "vertical" ? r : i) : {};
}
function Zb(e) {
  return _n(e) && e.reference ? e.reference : String(e);
}
const Dc = (e, ...t) => t.map(Zb).join(` ${e} `).replace(/calc/g, ""),
  E0 = (...e) => `calc(${Dc("+", ...e)})`,
  R0 = (...e) => `calc(${Dc("-", ...e)})`,
  np = (...e) => `calc(${Dc("*", ...e)})`,
  A0 = (...e) => `calc(${Dc("/", ...e)})`,
  $0 = (e) => {
    const t = Zb(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : np(t, -1);
  },
  Cr = Object.assign(
    (e) => ({
      add: (...t) => Cr(E0(e, ...t)),
      subtract: (...t) => Cr(R0(e, ...t)),
      multiply: (...t) => Cr(np(e, ...t)),
      divide: (...t) => Cr(A0(e, ...t)),
      negate: () => Cr($0(e)),
      toString: () => e.toString(),
    }),
    { add: E0, subtract: R0, multiply: np, divide: A0, negate: $0 }
  );
function CP(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function _P(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function eS(e) {
  const t = _P(e.toString());
  return t.includes("\\.") ? e : CP(e) ? t.replace(".", "\\.") : e;
}
function PP(e, t = "") {
  return [t, eS(e)].filter(Boolean).join("-");
}
function TP(e, t) {
  return `var(${eS(e)}${t ? `, ${t}` : ""})`;
}
function EP(e, t = "") {
  return `--${PP(e, t)}`;
}
function gt(e, t) {
  const r = EP(e, t == null ? void 0 : t.prefix);
  return { variable: r, reference: TP(r, RP(t == null ? void 0 : t.fallback)) };
}
function RP(e) {
  return e == null ? void 0 : e.reference;
}
const { definePartsStyle: Ja, defineMultiStyleConfig: AP } = qe(k_.keys),
  tn = me("alert-fg"),
  $r = me("alert-bg"),
  $P = Ja({
    container: { bg: $r.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: tn.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: tn.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function Kp(e) {
  const { theme: t, colorScheme: r } = e,
    i = os(`${r}.200`, 0.16)(t);
  return { light: `colors.${r}.100`, dark: i };
}
const OP = Ja((e) => {
    const { colorScheme: t } = e,
      r = Kp(e);
    return {
      container: {
        [tn.variable]: `colors.${t}.600`,
        [$r.variable]: r.light,
        _dark: { [tn.variable]: `colors.${t}.200`, [$r.variable]: r.dark },
      },
    };
  }),
  MP = Ja((e) => {
    const { colorScheme: t } = e,
      r = Kp(e);
    return {
      container: {
        [tn.variable]: `colors.${t}.600`,
        [$r.variable]: r.light,
        _dark: { [tn.variable]: `colors.${t}.200`, [$r.variable]: r.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: tn.reference,
      },
    };
  }),
  zP = Ja((e) => {
    const { colorScheme: t } = e,
      r = Kp(e);
    return {
      container: {
        [tn.variable]: `colors.${t}.600`,
        [$r.variable]: r.light,
        _dark: { [tn.variable]: `colors.${t}.200`, [$r.variable]: r.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: tn.reference,
      },
    };
  }),
  jP = Ja((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [tn.variable]: "colors.white",
        [$r.variable]: `colors.${t}.600`,
        _dark: {
          [tn.variable]: "colors.gray.900",
          [$r.variable]: `colors.${t}.200`,
        },
        color: tn.reference,
      },
    };
  }),
  LP = { subtle: OP, "left-accent": MP, "top-accent": zP, solid: jP },
  NP = AP({
    baseStyle: $P,
    variants: LP,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  tS = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  DP = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  IP = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  nS = { ...tS, ...DP, container: IP },
  FP = (e) => typeof e == "function";
function Ft(e, ...t) {
  return FP(e) ? e(...t) : e;
}
const { definePartsStyle: rS, defineMultiStyleConfig: BP } = qe(C_.keys),
  Ji = me("avatar-border-color"),
  Ta = me("avatar-bg"),
  Da = me("avatar-font-size"),
  is = me("avatar-size"),
  VP = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: Ji.reference,
    [Ji.variable]: "white",
    _dark: { [Ji.variable]: "colors.gray.800" },
  },
  UP = {
    bg: Ta.reference,
    fontSize: Da.reference,
    width: is.reference,
    height: is.reference,
    lineHeight: "1",
    [Ta.variable]: "colors.gray.200",
    _dark: { [Ta.variable]: "colors.whiteAlpha.400" },
  },
  WP = (e) => {
    const { name: t, theme: r } = e,
      i = t ? SP({ string: t }) : "colors.gray.400",
      s = vP(i)(r);
    let l = "white";
    return (
      s || (l = "gray.800"),
      {
        bg: Ta.reference,
        fontSize: Da.reference,
        color: l,
        borderColor: Ji.reference,
        verticalAlign: "top",
        width: is.reference,
        height: is.reference,
        "&:not([data-loaded])": { [Ta.variable]: i },
        [Ji.variable]: "colors.white",
        _dark: { [Ji.variable]: "colors.gray.800" },
      }
    );
  },
  HP = { fontSize: Da.reference, lineHeight: "1" },
  qP = rS((e) => ({
    badge: Ft(VP, e),
    excessLabel: Ft(UP, e),
    container: Ft(WP, e),
    label: HP,
  }));
function ro(e) {
  const t = e !== "100%" ? nS[e] : void 0;
  return rS({
    container: {
      [is.variable]: t ?? e,
      [Da.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [is.variable]: t ?? e,
      [Da.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
const KP = {
    "2xs": ro(4),
    xs: ro(6),
    sm: ro(8),
    md: ro(12),
    lg: ro(16),
    xl: ro(24),
    "2xl": ro(32),
    full: ro("100%"),
  },
  GP = BP({ baseStyle: qP, sizes: KP, defaultProps: { size: "md" } }),
  lt = p_("badge", ["bg", "color", "shadow"]),
  YP = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: lt.bg.reference,
    color: lt.color.reference,
    boxShadow: lt.shadow.reference,
  },
  XP = (e) => {
    const { colorScheme: t, theme: r } = e,
      i = os(`${t}.500`, 0.6)(r);
    return {
      [lt.bg.variable]: `colors.${t}.500`,
      [lt.color.variable]: "colors.white",
      _dark: {
        [lt.bg.variable]: i,
        [lt.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  QP = (e) => {
    const { colorScheme: t, theme: r } = e,
      i = os(`${t}.200`, 0.16)(r);
    return {
      [lt.bg.variable]: `colors.${t}.100`,
      [lt.color.variable]: `colors.${t}.800`,
      _dark: { [lt.bg.variable]: i, [lt.color.variable]: `colors.${t}.200` },
    };
  },
  JP = (e) => {
    const { colorScheme: t, theme: r } = e,
      i = os(`${t}.200`, 0.8)(r);
    return {
      [lt.color.variable]: `colors.${t}.500`,
      _dark: { [lt.color.variable]: i },
      [lt.shadow.variable]: `inset 0 0 0px 1px ${lt.color.reference}`,
    };
  },
  ZP = { solid: XP, subtle: QP, outline: JP },
  Ea = {
    baseStyle: YP,
    variants: ZP,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: eT, definePartsStyle: tT } = qe(__.keys),
  Qf = me("breadcrumb-link-decor"),
  nT = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: Qf.reference,
    [Qf.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [Qf.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  rT = tT({ link: nT }),
  oT = eT({ baseStyle: rT }),
  iT = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  oS = (e) => {
    const { colorScheme: t, theme: r } = e;
    if (t === "gray")
      return {
        color: pe("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: pe("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: pe("gray.200", "whiteAlpha.300")(e) },
      };
    const i = os(`${t}.200`, 0.12)(r),
      s = os(`${t}.200`, 0.24)(r);
    return {
      color: pe(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: pe(`${t}.50`, i)(e) },
      _active: { bg: pe(`${t}.100`, s)(e) },
    };
  },
  sT = (e) => {
    const { colorScheme: t } = e,
      r = pe("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? r : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...Ft(oS, e),
    };
  },
  aT = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  lT = (e) => {
    const { colorScheme: t } = e;
    if (t === "gray") {
      const d = pe("gray.100", "whiteAlpha.200")(e);
      return {
        bg: d,
        color: pe("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: pe("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: d },
        },
        _active: { bg: pe("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: r = `${t}.500`,
        color: i = "white",
        hoverBg: s = `${t}.600`,
        activeBg: l = `${t}.700`,
      } = aT[t] ?? {},
      u = pe(r, `${t}.200`)(e);
    return {
      bg: u,
      color: pe(i, "gray.800")(e),
      _hover: { bg: pe(s, `${t}.300`)(e), _disabled: { bg: u } },
      _active: { bg: pe(l, `${t}.400`)(e) },
    };
  },
  uT = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: pe(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: pe(`${t}.700`, `${t}.500`)(e) },
    };
  },
  cT = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  dT = { ghost: oS, outline: sT, solid: lT, link: uT, unstyled: cT },
  fT = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  hT = {
    baseStyle: iT,
    variants: dT,
    sizes: fT,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: qo, defineMultiStyleConfig: pT } = qe(q_.keys),
  bc = me("card-bg"),
  Er = me("card-padding"),
  iS = me("card-shadow"),
  Ju = me("card-radius"),
  sS = me("card-border-width", "0"),
  aS = me("card-border-color"),
  mT = qo({
    container: {
      [bc.variable]: "colors.chakra-body-bg",
      backgroundColor: bc.reference,
      boxShadow: iS.reference,
      borderRadius: Ju.reference,
      color: "chakra-body-text",
      borderWidth: sS.reference,
      borderColor: aS.reference,
    },
    body: { padding: Er.reference, flex: "1 1 0%" },
    header: { padding: Er.reference },
    footer: { padding: Er.reference },
  }),
  gT = {
    sm: qo({
      container: { [Ju.variable]: "radii.base", [Er.variable]: "space.3" },
    }),
    md: qo({
      container: { [Ju.variable]: "radii.md", [Er.variable]: "space.5" },
    }),
    lg: qo({
      container: { [Ju.variable]: "radii.xl", [Er.variable]: "space.7" },
    }),
  },
  yT = {
    elevated: qo({
      container: {
        [iS.variable]: "shadows.base",
        _dark: { [bc.variable]: "colors.gray.700" },
      },
    }),
    outline: qo({
      container: {
        [sS.variable]: "1px",
        [aS.variable]: "colors.chakra-border-color",
      },
    }),
    filled: qo({ container: { [bc.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [Er.variable]: 0 },
      header: { [Er.variable]: 0 },
      footer: { [Er.variable]: 0 },
    },
  },
  vT = pT({
    baseStyle: mT,
    variants: yT,
    sizes: gT,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  { definePartsStyle: Zu, defineMultiStyleConfig: bT } = qe(P_.keys),
  Ra = me("checkbox-size"),
  ST = (e) => {
    const { colorScheme: t } = e;
    return {
      w: Ra.reference,
      h: Ra.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: pe(`${t}.500`, `${t}.200`)(e),
        borderColor: pe(`${t}.500`, `${t}.200`)(e),
        color: pe("white", "gray.900")(e),
        _hover: {
          bg: pe(`${t}.600`, `${t}.300`)(e),
          borderColor: pe(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: pe("gray.200", "transparent")(e),
          bg: pe("gray.200", "whiteAlpha.300")(e),
          color: pe("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: pe(`${t}.500`, `${t}.200`)(e),
        borderColor: pe(`${t}.500`, `${t}.200`)(e),
        color: pe("white", "gray.900")(e),
      },
      _disabled: {
        bg: pe("gray.100", "whiteAlpha.100")(e),
        borderColor: pe("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: pe("red.500", "red.300")(e) },
    };
  },
  xT = { _disabled: { cursor: "not-allowed" } },
  wT = { userSelect: "none", _disabled: { opacity: 0.4 } },
  kT = { transitionProperty: "transform", transitionDuration: "normal" },
  CT = Zu((e) => ({ icon: kT, container: xT, control: Ft(ST, e), label: wT })),
  _T = {
    sm: Zu({
      control: { [Ra.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: Zu({
      control: { [Ra.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: Zu({
      control: { [Ra.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  so = bT({
    baseStyle: CT,
    sizes: _T,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  Aa = gt("close-button-size"),
  ca = gt("close-button-bg"),
  PT = {
    w: [Aa.reference],
    h: [Aa.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [ca.variable]: "colors.blackAlpha.100",
      _dark: { [ca.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [ca.variable]: "colors.blackAlpha.200",
      _dark: { [ca.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: ca.reference,
  },
  TT = {
    lg: { [Aa.variable]: "sizes.10", fontSize: "md" },
    md: { [Aa.variable]: "sizes.8", fontSize: "xs" },
    sm: { [Aa.variable]: "sizes.6", fontSize: "2xs" },
  },
  ET = { baseStyle: PT, sizes: TT, defaultProps: { size: "md" } },
  { variants: RT, defaultProps: AT } = Ea,
  $T = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: lt.bg.reference,
    color: lt.color.reference,
    boxShadow: lt.shadow.reference,
  },
  OT = { baseStyle: $T, variants: RT, defaultProps: AT },
  MT = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  zT = { baseStyle: MT },
  jT = { opacity: 0.6, borderColor: "inherit" },
  LT = { borderStyle: "solid" },
  NT = { borderStyle: "dashed" },
  DT = { solid: LT, dashed: NT },
  IT = { baseStyle: jT, variants: DT, defaultProps: { variant: "solid" } },
  { definePartsStyle: rp, defineMultiStyleConfig: FT } = qe(T_.keys),
  Jf = me("drawer-bg"),
  Zf = me("drawer-box-shadow");
function Ii(e) {
  return rp(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
const BT = { bg: "blackAlpha.600", zIndex: "modal" },
  VT = { display: "flex", zIndex: "modal", justifyContent: "center" },
  UT = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [Jf.variable]: "colors.white",
      [Zf.variable]: "shadows.lg",
      _dark: {
        [Jf.variable]: "colors.gray.700",
        [Zf.variable]: "shadows.dark-lg",
      },
      bg: Jf.reference,
      boxShadow: Zf.reference,
    };
  },
  WT = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  HT = { position: "absolute", top: "2", insetEnd: "3" },
  qT = { px: "6", py: "2", flex: "1", overflow: "auto" },
  KT = { px: "6", py: "4" },
  GT = rp((e) => ({
    overlay: BT,
    dialogContainer: VT,
    dialog: Ft(UT, e),
    header: WT,
    closeButton: HT,
    body: qT,
    footer: KT,
  })),
  YT = {
    xs: Ii("xs"),
    sm: Ii("md"),
    md: Ii("lg"),
    lg: Ii("2xl"),
    xl: Ii("4xl"),
    full: Ii("full"),
  },
  XT = FT({ baseStyle: GT, sizes: YT, defaultProps: { size: "xs" } }),
  { definePartsStyle: QT, defineMultiStyleConfig: JT } = qe(E_.keys),
  ZT = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  eE = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  tE = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  nE = QT({ preview: ZT, input: eE, textarea: tE }),
  rE = JT({ baseStyle: nE }),
  { definePartsStyle: oE, defineMultiStyleConfig: iE } = qe(R_.keys),
  Zi = me("form-control-color"),
  sE = {
    marginStart: "1",
    [Zi.variable]: "colors.red.500",
    _dark: { [Zi.variable]: "colors.red.300" },
    color: Zi.reference,
  },
  aE = {
    mt: "2",
    [Zi.variable]: "colors.gray.600",
    _dark: { [Zi.variable]: "colors.whiteAlpha.600" },
    color: Zi.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  lE = oE({
    container: { width: "100%", position: "relative" },
    requiredIndicator: sE,
    helperText: aE,
  }),
  uE = iE({ baseStyle: lE }),
  { definePartsStyle: cE, defineMultiStyleConfig: dE } = qe(A_.keys),
  es = me("form-error-color"),
  fE = {
    [es.variable]: "colors.red.500",
    _dark: { [es.variable]: "colors.red.300" },
    color: es.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  hE = {
    marginEnd: "0.5em",
    [es.variable]: "colors.red.500",
    _dark: { [es.variable]: "colors.red.300" },
    color: es.reference,
  },
  pE = cE({ text: fE, icon: hE }),
  mE = dE({ baseStyle: pE }),
  gE = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  yE = { baseStyle: gE },
  vE = { fontFamily: "heading", fontWeight: "bold" },
  bE = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  SE = { baseStyle: vE, sizes: bE, defaultProps: { size: "xl" } },
  { definePartsStyle: Tr, defineMultiStyleConfig: xE } = qe($_.keys),
  Fi = me("input-height"),
  Bi = me("input-font-size"),
  Vi = me("input-padding"),
  Ui = me("input-border-radius"),
  wE = Tr({
    addon: {
      height: Fi.reference,
      fontSize: Bi.reference,
      px: Vi.reference,
      borderRadius: Ui.reference,
    },
    field: {
      width: "100%",
      height: Fi.reference,
      fontSize: Bi.reference,
      px: Vi.reference,
      borderRadius: Ui.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  oo = {
    lg: {
      [Bi.variable]: "fontSizes.lg",
      [Vi.variable]: "space.4",
      [Ui.variable]: "radii.md",
      [Fi.variable]: "sizes.12",
    },
    md: {
      [Bi.variable]: "fontSizes.md",
      [Vi.variable]: "space.4",
      [Ui.variable]: "radii.md",
      [Fi.variable]: "sizes.10",
    },
    sm: {
      [Bi.variable]: "fontSizes.sm",
      [Vi.variable]: "space.3",
      [Ui.variable]: "radii.sm",
      [Fi.variable]: "sizes.8",
    },
    xs: {
      [Bi.variable]: "fontSizes.xs",
      [Vi.variable]: "space.2",
      [Ui.variable]: "radii.sm",
      [Fi.variable]: "sizes.6",
    },
  },
  kE = {
    lg: Tr({ field: oo.lg, group: oo.lg }),
    md: Tr({ field: oo.md, group: oo.md }),
    sm: Tr({ field: oo.sm, group: oo.sm }),
    xs: Tr({ field: oo.xs, group: oo.xs }),
  };
function Gp(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || pe("blue.500", "blue.300")(e),
    errorBorderColor: r || pe("red.500", "red.300")(e),
  };
}
const CE = Tr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: i } = Gp(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: pe("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: It(t, i), boxShadow: `0 0 0 1px ${It(t, i)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: It(t, r),
          boxShadow: `0 0 0 1px ${It(t, r)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: pe("inherit", "whiteAlpha.50")(e),
        bg: pe("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  _E = Tr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: i } = Gp(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: pe("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: pe("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: It(t, i) },
        _focusVisible: { bg: "transparent", borderColor: It(t, r) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: pe("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  PE = Tr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: i } = Gp(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: It(t, i),
          boxShadow: `0px 1px 0px 0px ${It(t, i)}`,
        },
        _focusVisible: {
          borderColor: It(t, r),
          boxShadow: `0px 1px 0px 0px ${It(t, r)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  TE = Tr({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  EE = { outline: CE, filled: _E, flushed: PE, unstyled: TE },
  De = xE({
    baseStyle: wE,
    sizes: kE,
    variants: EE,
    defaultProps: { size: "md", variant: "outline" },
  }),
  eh = me("kbd-bg"),
  RE = {
    [eh.variable]: "colors.gray.100",
    _dark: { [eh.variable]: "colors.whiteAlpha.100" },
    bg: eh.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  AE = { baseStyle: RE },
  $E = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  OE = { baseStyle: $E },
  { defineMultiStyleConfig: ME, definePartsStyle: zE } = qe(O_.keys),
  jE = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  LE = zE({ icon: jE }),
  NE = ME({ baseStyle: LE }),
  { defineMultiStyleConfig: DE, definePartsStyle: IE } = qe(M_.keys),
  er = me("menu-bg"),
  th = me("menu-shadow"),
  FE = {
    [er.variable]: "#fff",
    [th.variable]: "shadows.sm",
    _dark: {
      [er.variable]: "colors.gray.700",
      [th.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: "dropdown",
    borderRadius: "md",
    borderWidth: "1px",
    bg: er.reference,
    boxShadow: th.reference,
  },
  BE = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [er.variable]: "colors.gray.100",
      _dark: { [er.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [er.variable]: "colors.gray.200",
      _dark: { [er.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [er.variable]: "colors.gray.100",
      _dark: { [er.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: er.reference,
  },
  VE = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  UE = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  WE = { opacity: 0.6 },
  HE = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  qE = { transitionProperty: "common", transitionDuration: "normal" },
  KE = IE({
    button: qE,
    list: FE,
    item: BE,
    groupTitle: VE,
    icon: UE,
    command: WE,
    divider: HE,
  }),
  GE = DE({ baseStyle: KE }),
  { defineMultiStyleConfig: YE, definePartsStyle: op } = qe(z_.keys),
  nh = me("modal-bg"),
  rh = me("modal-shadow"),
  XE = { bg: "blackAlpha.600", zIndex: "modal" },
  QE = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: r === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  JE = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [nh.variable]: "colors.white",
      [rh.variable]: "shadows.lg",
      _dark: {
        [nh.variable]: "colors.gray.700",
        [rh.variable]: "shadows.dark-lg",
      },
      bg: nh.reference,
      boxShadow: rh.reference,
    };
  },
  ZE = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  eR = { position: "absolute", top: "2", insetEnd: "3" },
  tR = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  nR = { px: "6", py: "4" },
  rR = op((e) => ({
    overlay: XE,
    dialogContainer: Ft(QE, e),
    dialog: Ft(JE, e),
    header: ZE,
    closeButton: eR,
    body: Ft(tR, e),
    footer: nR,
  }));
function jn(e) {
  return op(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
const oR = {
    xs: jn("xs"),
    sm: jn("sm"),
    md: jn("md"),
    lg: jn("lg"),
    xl: jn("xl"),
    "2xl": jn("2xl"),
    "3xl": jn("3xl"),
    "4xl": jn("4xl"),
    "5xl": jn("5xl"),
    "6xl": jn("6xl"),
    full: jn("full"),
  },
  iR = YE({ baseStyle: rR, sizes: oR, defaultProps: { size: "md" } }),
  lS = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  { defineMultiStyleConfig: sR, definePartsStyle: uS } = qe(j_.keys),
  Yp = gt("number-input-stepper-width"),
  cS = gt("number-input-input-padding"),
  aR = Cr(Yp).add("0.5rem").toString(),
  oh = gt("number-input-bg"),
  ih = gt("number-input-color"),
  sh = gt("number-input-border-color"),
  lR = { [Yp.variable]: "sizes.6", [cS.variable]: aR },
  uR = (e) => {
    var t;
    return ((t = Ft(De.baseStyle, e)) == null ? void 0 : t.field) ?? {};
  },
  cR = { width: Yp.reference },
  dR = {
    borderStart: "1px solid",
    borderStartColor: sh.reference,
    color: ih.reference,
    bg: oh.reference,
    [ih.variable]: "colors.chakra-body-text",
    [sh.variable]: "colors.chakra-border-color",
    _dark: {
      [ih.variable]: "colors.whiteAlpha.800",
      [sh.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [oh.variable]: "colors.gray.200",
      _dark: { [oh.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  fR = uS((e) => ({
    root: lR,
    field: Ft(uR, e) ?? {},
    stepperGroup: cR,
    stepper: dR,
  }));
function Tu(e) {
  var l, u;
  const t = (l = De.sizes) == null ? void 0 : l[e],
    r = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    i = ((u = t.field) == null ? void 0 : u.fontSize) ?? "md",
    s = lS.fontSizes[i];
  return uS({
    field: { ...t.field, paddingInlineEnd: cS.reference, verticalAlign: "top" },
    stepper: {
      fontSize: Cr(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: r[e] },
      _last: { borderBottomEndRadius: r[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
const hR = { xs: Tu("xs"), sm: Tu("sm"), md: Tu("md"), lg: Tu("lg") },
  pR = sR({
    baseStyle: fR,
    sizes: hR,
    variants: De.variants,
    defaultProps: De.defaultProps,
  });
var Pb;
const mR = {
    ...((Pb = De.baseStyle) == null ? void 0 : Pb.field),
    textAlign: "center",
  },
  gR = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  };
var Tb;
const yR = {
    outline: (e) => {
      var t, r;
      return (
        ((r = Ft((t = De.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : r.field) ?? {}
      );
    },
    flushed: (e) => {
      var t, r;
      return (
        ((r = Ft((t = De.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : r.field) ?? {}
      );
    },
    filled: (e) => {
      var t, r;
      return (
        ((r = Ft((t = De.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : r.field) ?? {}
      );
    },
    unstyled: ((Tb = De.variants) == null ? void 0 : Tb.unstyled.field) ?? {},
  },
  vR = {
    baseStyle: mR,
    sizes: gR,
    variants: yR,
    defaultProps: De.defaultProps,
  },
  { defineMultiStyleConfig: bR, definePartsStyle: SR } = qe(L_.keys),
  Eu = gt("popper-bg"),
  xR = gt("popper-arrow-bg"),
  O0 = gt("popper-arrow-shadow-color"),
  wR = { zIndex: "popover" },
  kR = {
    [Eu.variable]: "colors.white",
    bg: Eu.reference,
    [xR.variable]: Eu.reference,
    [O0.variable]: "colors.gray.200",
    _dark: {
      [Eu.variable]: "colors.gray.700",
      [O0.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  CR = { px: 3, py: 2, borderBottomWidth: "1px" },
  _R = { px: 3, py: 2 },
  PR = { px: 3, py: 2, borderTopWidth: "1px" },
  TR = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  ER = SR({
    popper: wR,
    content: kR,
    header: CR,
    body: _R,
    footer: PR,
    closeButton: TR,
  }),
  RR = bR({ baseStyle: ER }),
  { defineMultiStyleConfig: AR, definePartsStyle: ba } = qe(N_.keys),
  $R = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: i, hasStripe: s } = e,
      l = pe(T0(), T0("1rem", "rgba(0,0,0,0.1)"))(e),
      u = pe(`${t}.500`, `${t}.200`)(e),
      d = `linear-gradient(
    to right,
    transparent 0%,
    ${It(r, u)} 50%,
    transparent 100%
  )`;
    return { ...(!i && s && l), ...(i ? { bgImage: d } : { bgColor: u }) };
  },
  OR = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  MR = (e) => ({ bg: pe("gray.100", "whiteAlpha.300")(e) }),
  zR = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...$R(e),
  }),
  jR = ba((e) => ({ label: OR, filledTrack: zR(e), track: MR(e) })),
  LR = {
    xs: ba({ track: { h: "1" } }),
    sm: ba({ track: { h: "2" } }),
    md: ba({ track: { h: "3" } }),
    lg: ba({ track: { h: "4" } }),
  },
  NR = AR({
    sizes: LR,
    baseStyle: jR,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: DR, definePartsStyle: ec } = qe(D_.keys),
  IR = (e) => {
    var r;
    const t = (r = Ft(so.baseStyle, e)) == null ? void 0 : r.control;
    return {
      ...t,
      borderRadius: "full",
      _checked: {
        ...(t == null ? void 0 : t._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  FR = ec((e) => {
    var t, r;
    return {
      label: (t = so.baseStyle) == null ? void 0 : t.call(so, e).label,
      container: (r = so.baseStyle) == null ? void 0 : r.call(so, e).container,
      control: IR(e),
    };
  }),
  BR = {
    md: ec({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: ec({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: ec({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  VR = DR({
    baseStyle: FR,
    sizes: BR,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: UR, definePartsStyle: WR } = qe(I_.keys),
  Ru = me("select-bg");
var Eb;
const HR = {
    ...((Eb = De.baseStyle) == null ? void 0 : Eb.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: Ru.reference,
    [Ru.variable]: "colors.white",
    _dark: { [Ru.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: Ru.reference },
  },
  qR = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  KR = WR({ field: HR, icon: qR }),
  Au = { paddingInlineEnd: "8" };
var Rb, Ab, $b, Ob, Mb, zb, jb, Lb;
const GR = {
    lg: {
      ...((Rb = De.sizes) == null ? void 0 : Rb.lg),
      field: { ...((Ab = De.sizes) == null ? void 0 : Ab.lg.field), ...Au },
    },
    md: {
      ...(($b = De.sizes) == null ? void 0 : $b.md),
      field: { ...((Ob = De.sizes) == null ? void 0 : Ob.md.field), ...Au },
    },
    sm: {
      ...((Mb = De.sizes) == null ? void 0 : Mb.sm),
      field: { ...((zb = De.sizes) == null ? void 0 : zb.sm.field), ...Au },
    },
    xs: {
      ...((jb = De.sizes) == null ? void 0 : jb.xs),
      field: { ...((Lb = De.sizes) == null ? void 0 : Lb.xs.field), ...Au },
      icon: { insetEnd: "1" },
    },
  },
  YR = UR({
    baseStyle: KR,
    sizes: GR,
    variants: De.variants,
    defaultProps: De.defaultProps,
  }),
  ah = me("skeleton-start-color"),
  lh = me("skeleton-end-color"),
  XR = {
    [ah.variable]: "colors.gray.100",
    [lh.variable]: "colors.gray.400",
    _dark: {
      [ah.variable]: "colors.gray.800",
      [lh.variable]: "colors.gray.600",
    },
    background: ah.reference,
    borderColor: lh.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  QR = { baseStyle: XR },
  uh = me("skip-link-bg"),
  JR = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [uh.variable]: "colors.white",
      _dark: { [uh.variable]: "colors.gray.700" },
      bg: uh.reference,
    },
  },
  ZR = { baseStyle: JR },
  { defineMultiStyleConfig: eA, definePartsStyle: Ic } = qe(F_.keys),
  Qo = me("slider-thumb-size"),
  Ia = me("slider-track-size"),
  lo = me("slider-bg"),
  tA = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...qp({
        orientation: t,
        vertical: { h: "100%", px: kr(Qo.reference).divide(2).toString() },
        horizontal: { w: "100%", py: kr(Qo.reference).divide(2).toString() },
      }),
    };
  },
  nA = (e) => ({
    ...qp({
      orientation: e.orientation,
      horizontal: { h: Ia.reference },
      vertical: { w: Ia.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [lo.variable]: "colors.gray.200",
    _dark: { [lo.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [lo.variable]: "colors.gray.300",
      _dark: { [lo.variable]: "colors.whiteAlpha.300" },
    },
    bg: lo.reference,
  }),
  rA = (e) => {
    const { orientation: t } = e;
    return {
      ...qp({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: Qo.reference,
      h: Qo.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  oA = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [lo.variable]: `colors.${t}.500`,
      _dark: { [lo.variable]: `colors.${t}.200` },
      bg: lo.reference,
    };
  },
  iA = Ic((e) => ({
    container: tA(e),
    track: nA(e),
    thumb: rA(e),
    filledTrack: oA(e),
  })),
  sA = Ic({
    container: { [Qo.variable]: "sizes.4", [Ia.variable]: "sizes.1" },
  }),
  aA = Ic({
    container: { [Qo.variable]: "sizes.3.5", [Ia.variable]: "sizes.1" },
  }),
  lA = Ic({
    container: { [Qo.variable]: "sizes.2.5", [Ia.variable]: "sizes.0.5" },
  }),
  uA = { lg: sA, md: aA, sm: lA },
  cA = eA({
    baseStyle: iA,
    sizes: uA,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  Bo = gt("spinner-size"),
  dA = { width: [Bo.reference], height: [Bo.reference] },
  fA = {
    xs: { [Bo.variable]: "sizes.3" },
    sm: { [Bo.variable]: "sizes.4" },
    md: { [Bo.variable]: "sizes.6" },
    lg: { [Bo.variable]: "sizes.8" },
    xl: { [Bo.variable]: "sizes.12" },
  },
  hA = { baseStyle: dA, sizes: fA, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: pA, definePartsStyle: dS } = qe(B_.keys),
  mA = { fontWeight: "medium" },
  gA = { opacity: 0.8, marginBottom: "2" },
  yA = { verticalAlign: "baseline", fontWeight: "semibold" },
  vA = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  bA = dS({ container: {}, label: mA, helpText: gA, number: yA, icon: vA }),
  SA = {
    md: dS({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  xA = pA({ baseStyle: bA, sizes: SA, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: wA, definePartsStyle: Sa } = qe([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  _r = me("stepper-indicator-size"),
  Wi = me("stepper-icon-size"),
  Hi = me("stepper-title-font-size"),
  xa = me("stepper-description-font-size"),
  da = me("stepper-accent-color"),
  kA = Sa(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [da.variable]: `colors.${e}.500`,
      _dark: { [da.variable]: `colors.${e}.200` },
    },
    title: { fontSize: Hi.reference, fontWeight: "medium" },
    description: { fontSize: xa.reference, color: "chakra-subtle-text" },
    number: { fontSize: Hi.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: Wi.reference, height: Wi.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: _r.reference,
      height: _r.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: da.reference,
      },
      "&[data-status=complete]": {
        bg: da.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: da.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${_r.reference} - 8px)`,
        top: `calc(${_r.reference} + 4px)`,
        insetStart: `calc(${_r.reference} / 2 - 1px)`,
      },
    },
  })),
  CA = wA({
    baseStyle: kA,
    sizes: {
      xs: Sa({
        stepper: {
          [_r.variable]: "sizes.4",
          [Wi.variable]: "sizes.3",
          [Hi.variable]: "fontSizes.xs",
          [xa.variable]: "fontSizes.xs",
        },
      }),
      sm: Sa({
        stepper: {
          [_r.variable]: "sizes.6",
          [Wi.variable]: "sizes.4",
          [Hi.variable]: "fontSizes.sm",
          [xa.variable]: "fontSizes.xs",
        },
      }),
      md: Sa({
        stepper: {
          [_r.variable]: "sizes.8",
          [Wi.variable]: "sizes.5",
          [Hi.variable]: "fontSizes.md",
          [xa.variable]: "fontSizes.sm",
        },
      }),
      lg: Sa({
        stepper: {
          [_r.variable]: "sizes.10",
          [Wi.variable]: "sizes.6",
          [Hi.variable]: "fontSizes.lg",
          [xa.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: _A, definePartsStyle: tc } = qe(V_.keys),
  $a = gt("switch-track-width"),
  Ko = gt("switch-track-height"),
  ch = gt("switch-track-diff"),
  PA = Cr.subtract($a, Ko),
  ip = gt("switch-thumb-x"),
  fa = gt("switch-bg"),
  TA = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [$a.reference],
      height: [Ko.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [fa.variable]: "colors.gray.300",
      _dark: { [fa.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [fa.variable]: `colors.${t}.500`,
        _dark: { [fa.variable]: `colors.${t}.200` },
      },
      bg: fa.reference,
    };
  },
  EA = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [Ko.reference],
    height: [Ko.reference],
    _checked: { transform: `translateX(${ip.reference})` },
  },
  RA = tc((e) => ({
    container: {
      [ch.variable]: PA,
      [ip.variable]: ch.reference,
      _rtl: { [ip.variable]: Cr(ch).negate().toString() },
    },
    track: TA(e),
    thumb: EA,
  })),
  AA = {
    sm: tc({
      container: { [$a.variable]: "1.375rem", [Ko.variable]: "sizes.3" },
    }),
    md: tc({
      container: { [$a.variable]: "1.875rem", [Ko.variable]: "sizes.4" },
    }),
    lg: tc({
      container: { [$a.variable]: "2.875rem", [Ko.variable]: "sizes.6" },
    }),
  },
  $A = _A({
    baseStyle: RA,
    sizes: AA,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: OA, definePartsStyle: ts } = qe(U_.keys),
  MA = ts({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  Sc = { "&[data-is-numeric=true]": { textAlign: "end" } },
  zA = ts((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: pe("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: pe(`${t}.100`, `${t}.700`)(e),
        ...Sc,
      },
      td: {
        borderBottom: "1px",
        borderColor: pe(`${t}.100`, `${t}.700`)(e),
        ...Sc,
      },
      caption: { color: pe("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  jA = ts((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: pe("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: pe(`${t}.100`, `${t}.700`)(e),
        ...Sc,
      },
      td: {
        borderBottom: "1px",
        borderColor: pe(`${t}.100`, `${t}.700`)(e),
        ...Sc,
      },
      caption: { color: pe("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: pe(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: pe(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  LA = { simple: zA, striped: jA, unstyled: {} },
  NA = {
    sm: ts({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: ts({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: ts({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  DA = OA({
    baseStyle: MA,
    variants: LA,
    sizes: NA,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  Gt = me("tabs-color"),
  Nn = me("tabs-bg"),
  $u = me("tabs-border-color"),
  { defineMultiStyleConfig: IA, definePartsStyle: sr } = qe(W_.keys),
  FA = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  BA = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  VA = (e) => {
    const { align: t = "start", orientation: r } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: r === "vertical" ? "column" : "row",
    };
  },
  UA = { p: 4 },
  WA = sr((e) => ({ root: FA(e), tab: BA(e), tablist: VA(e), tabpanel: UA })),
  HA = {
    sm: sr({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: sr({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: sr({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  qA = sr((e) => {
    const { colorScheme: t, orientation: r } = e,
      i = r === "vertical",
      s = i ? "borderStart" : "borderBottom",
      l = i ? "marginStart" : "marginBottom";
    return {
      tablist: { [s]: "2px solid", borderColor: "inherit" },
      tab: {
        [s]: "2px solid",
        borderColor: "transparent",
        [l]: "-2px",
        _selected: {
          [Gt.variable]: `colors.${t}.600`,
          _dark: { [Gt.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [Nn.variable]: "colors.gray.200",
          _dark: { [Nn.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: Gt.reference,
        bg: Nn.reference,
      },
    };
  }),
  KA = sr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [$u.variable]: "transparent",
        _selected: {
          [Gt.variable]: `colors.${t}.600`,
          [$u.variable]: "colors.white",
          _dark: {
            [Gt.variable]: `colors.${t}.300`,
            [$u.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: $u.reference,
        },
        color: Gt.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  GA = sr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [Nn.variable]: "colors.gray.50",
        _dark: { [Nn.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [Nn.variable]: "colors.white",
          [Gt.variable]: `colors.${t}.600`,
          _dark: {
            [Nn.variable]: "colors.gray.800",
            [Gt.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: Gt.reference,
        bg: Nn.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  YA = sr((e) => {
    const { colorScheme: t, theme: r } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: It(r, `${t}.700`), bg: It(r, `${t}.100`) },
      },
    };
  }),
  XA = sr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [Gt.variable]: "colors.gray.600",
        _dark: { [Gt.variable]: "inherit" },
        _selected: {
          [Gt.variable]: "colors.white",
          [Nn.variable]: `colors.${t}.600`,
          _dark: {
            [Gt.variable]: "colors.gray.800",
            [Nn.variable]: `colors.${t}.300`,
          },
        },
        color: Gt.reference,
        bg: Nn.reference,
      },
    };
  }),
  QA = sr({}),
  JA = {
    line: qA,
    enclosed: KA,
    "enclosed-colored": GA,
    "soft-rounded": YA,
    "solid-rounded": XA,
    unstyled: QA,
  },
  ZA = IA({
    baseStyle: WA,
    sizes: HA,
    variants: JA,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: e5, definePartsStyle: Go } = qe(H_.keys),
  M0 = me("tag-bg"),
  z0 = me("tag-color"),
  dh = me("tag-shadow"),
  nc = me("tag-min-height"),
  rc = me("tag-min-width"),
  oc = me("tag-font-size"),
  ic = me("tag-padding-inline"),
  t5 = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [z0.variable]: lt.color.reference,
    [M0.variable]: lt.bg.reference,
    [dh.variable]: lt.shadow.reference,
    color: z0.reference,
    bg: M0.reference,
    boxShadow: dh.reference,
    borderRadius: "md",
    minH: nc.reference,
    minW: rc.reference,
    fontSize: oc.reference,
    px: ic.reference,
    _focusVisible: { [dh.variable]: "shadows.outline" },
  },
  n5 = { lineHeight: 1.2, overflow: "visible" },
  r5 = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  o5 = Go({ container: t5, label: n5, closeButton: r5 }),
  i5 = {
    sm: Go({
      container: {
        [nc.variable]: "sizes.5",
        [rc.variable]: "sizes.5",
        [oc.variable]: "fontSizes.xs",
        [ic.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: Go({
      container: {
        [nc.variable]: "sizes.6",
        [rc.variable]: "sizes.6",
        [oc.variable]: "fontSizes.sm",
        [ic.variable]: "space.2",
      },
    }),
    lg: Go({
      container: {
        [nc.variable]: "sizes.8",
        [rc.variable]: "sizes.8",
        [oc.variable]: "fontSizes.md",
        [ic.variable]: "space.3",
      },
    }),
  },
  s5 = {
    subtle: Go((e) => {
      var t;
      return { container: (t = Ea.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: Go((e) => {
      var t;
      return { container: (t = Ea.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: Go((e) => {
      var t;
      return { container: (t = Ea.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  a5 = e5({
    variants: s5,
    baseStyle: o5,
    sizes: i5,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  });
var Nb;
const l5 = {
  ...((Nb = De.baseStyle) == null ? void 0 : Nb.field),
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top",
};
var Db;
const u5 = {
  outline: (e) => {
    var t;
    return ((t = De.variants) == null ? void 0 : t.outline(e).field) ?? {};
  },
  flushed: (e) => {
    var t;
    return ((t = De.variants) == null ? void 0 : t.flushed(e).field) ?? {};
  },
  filled: (e) => {
    var t;
    return ((t = De.variants) == null ? void 0 : t.filled(e).field) ?? {};
  },
  unstyled: ((Db = De.variants) == null ? void 0 : Db.unstyled.field) ?? {},
};
var Ib, Fb, Bb, Vb;
const c5 = {
    xs: ((Ib = De.sizes) == null ? void 0 : Ib.xs.field) ?? {},
    sm: ((Fb = De.sizes) == null ? void 0 : Fb.sm.field) ?? {},
    md: ((Bb = De.sizes) == null ? void 0 : Bb.md.field) ?? {},
    lg: ((Vb = De.sizes) == null ? void 0 : Vb.lg.field) ?? {},
  },
  d5 = {
    baseStyle: l5,
    sizes: c5,
    variants: u5,
    defaultProps: { size: "md", variant: "outline" },
  },
  Ou = gt("tooltip-bg"),
  fh = gt("tooltip-fg"),
  f5 = gt("popper-arrow-bg"),
  h5 = {
    bg: Ou.reference,
    color: fh.reference,
    [Ou.variable]: "colors.gray.700",
    [fh.variable]: "colors.whiteAlpha.900",
    _dark: {
      [Ou.variable]: "colors.gray.300",
      [fh.variable]: "colors.gray.900",
    },
    [f5.variable]: Ou.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  p5 = { baseStyle: h5 },
  m5 = {
    Accordion: eP,
    Alert: NP,
    Avatar: GP,
    Badge: Ea,
    Breadcrumb: oT,
    Button: hT,
    Checkbox: so,
    CloseButton: ET,
    Code: OT,
    Container: zT,
    Divider: IT,
    Drawer: XT,
    Editable: rE,
    Form: uE,
    FormError: mE,
    FormLabel: yE,
    Heading: SE,
    Input: De,
    Kbd: AE,
    Link: OE,
    List: NE,
    Menu: GE,
    Modal: iR,
    NumberInput: pR,
    PinInput: vR,
    Popover: RR,
    Progress: NR,
    Radio: VR,
    Select: YR,
    Skeleton: QR,
    SkipLink: ZR,
    Slider: cA,
    Spinner: hA,
    Stat: xA,
    Switch: $A,
    Table: DA,
    Tabs: ZA,
    Tag: a5,
    Textarea: d5,
    Tooltip: p5,
    Card: vT,
    Stepper: CA,
  },
  g5 = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  y5 = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  v5 = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
  },
  b5 = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  S5 = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  x5 = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  w5 = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  k5 = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  C5 = { property: x5, easing: w5, duration: k5 },
  _5 = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  P5 = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  T5 = {
    breakpoints: y5,
    zIndices: _5,
    radii: b5,
    blur: P5,
    colors: v5,
    ...lS,
    sizes: nS,
    shadows: S5,
    space: tS,
    borders: g5,
    transition: C5,
  },
  E5 = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  R5 = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  A5 = "ltr",
  $5 = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  O5 = {
    semanticTokens: E5,
    direction: A5,
    ...T5,
    components: m5,
    styles: R5,
    config: $5,
  };
var M5 = !1;
function z5(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function j5(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var L5 = (function () {
    function e(r) {
      var i = this;
      (this._insertTag = function (s) {
        var l;
        i.tags.length === 0
          ? i.insertionPoint
            ? (l = i.insertionPoint.nextSibling)
            : i.prepend
            ? (l = i.container.firstChild)
            : (l = i.before)
          : (l = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(s, l),
          i.tags.push(s);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !M5 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (t.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(j5(this));
        var s = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var l = z5(s);
          try {
            l.insertRule(i, l.cssRules.length);
          } catch {}
        } else s.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (i) {
          var s;
          return (s = i.parentNode) == null ? void 0 : s.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Mt = "-ms-",
  xc = "-moz-",
  Le = "-webkit-",
  fS = "comm",
  Xp = "rule",
  Qp = "decl",
  N5 = "@import",
  hS = "@keyframes",
  D5 = "@layer",
  I5 = Math.abs,
  Fc = String.fromCharCode,
  F5 = Object.assign;
function B5(e, t) {
  return _t(e, 0) ^ 45
    ? (((((((t << 2) ^ _t(e, 0)) << 2) ^ _t(e, 1)) << 2) ^ _t(e, 2)) << 2) ^
        _t(e, 3)
    : 0;
}
function pS(e) {
  return e.trim();
}
function V5(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ne(e, t, r) {
  return e.replace(t, r);
}
function sp(e, t) {
  return e.indexOf(t);
}
function _t(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fa(e, t, r) {
  return e.slice(t, r);
}
function tr(e) {
  return e.length;
}
function Jp(e) {
  return e.length;
}
function Mu(e, t) {
  return t.push(e), e;
}
function U5(e, t) {
  return e.map(t).join("");
}
var Bc = 1,
  ss = 1,
  mS = 0,
  Xt = 0,
  ct = 0,
  ds = "";
function Vc(e, t, r, i, s, l, u) {
  return {
    value: e,
    root: t,
    parent: r,
    type: i,
    props: s,
    children: l,
    line: Bc,
    column: ss,
    length: u,
    return: "",
  };
}
function ha(e, t) {
  return F5(Vc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function W5() {
  return ct;
}
function H5() {
  return (
    (ct = Xt > 0 ? _t(ds, --Xt) : 0), ss--, ct === 10 && ((ss = 1), Bc--), ct
  );
}
function nn() {
  return (
    (ct = Xt < mS ? _t(ds, Xt++) : 0), ss++, ct === 10 && ((ss = 1), Bc++), ct
  );
}
function ar() {
  return _t(ds, Xt);
}
function sc() {
  return Xt;
}
function Za(e, t) {
  return Fa(ds, e, t);
}
function Ba(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function gS(e) {
  return (Bc = ss = 1), (mS = tr((ds = e))), (Xt = 0), [];
}
function yS(e) {
  return (ds = ""), e;
}
function ac(e) {
  return pS(Za(Xt - 1, ap(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function q5(e) {
  for (; (ct = ar()) && ct < 33; ) nn();
  return Ba(e) > 2 || Ba(ct) > 3 ? "" : " ";
}
function K5(e, t) {
  for (
    ;
    --t &&
    nn() &&
    !(ct < 48 || ct > 102 || (ct > 57 && ct < 65) || (ct > 70 && ct < 97));

  );
  return Za(e, sc() + (t < 6 && ar() == 32 && nn() == 32));
}
function ap(e) {
  for (; nn(); )
    switch (ct) {
      case e:
        return Xt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ap(ct);
        break;
      case 40:
        e === 41 && ap(e);
        break;
      case 92:
        nn();
        break;
    }
  return Xt;
}
function G5(e, t) {
  for (; nn() && e + ct !== 57; ) if (e + ct === 84 && ar() === 47) break;
  return "/*" + Za(t, Xt - 1) + "*" + Fc(e === 47 ? e : nn());
}
function Y5(e) {
  for (; !Ba(ar()); ) nn();
  return Za(e, Xt);
}
function X5(e) {
  return yS(lc("", null, null, null, [""], (e = gS(e)), 0, [0], e));
}
function lc(e, t, r, i, s, l, u, d, f) {
  for (
    var p = 0,
      m = 0,
      y = u,
      b = 0,
      _ = 0,
      S = 0,
      w = 1,
      x = 1,
      T = 1,
      O = 0,
      z = "",
      W = s,
      E = l,
      I = i,
      U = z;
    x;

  )
    switch (((S = O), (O = nn()))) {
      case 40:
        if (S != 108 && _t(U, y - 1) == 58) {
          sp((U += Ne(ac(O), "&", "&\f")), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        U += ac(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        U += q5(S);
        break;
      case 92:
        U += K5(sc() - 1, 7);
        continue;
      case 47:
        switch (ar()) {
          case 42:
          case 47:
            Mu(Q5(G5(nn(), sc()), t, r), f);
            break;
          default:
            U += "/";
        }
        break;
      case 123 * w:
        d[p++] = tr(U) * T;
      case 125 * w:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            x = 0;
          case 59 + m:
            T == -1 && (U = Ne(U, /\f/g, "")),
              _ > 0 &&
                tr(U) - y &&
                Mu(
                  _ > 32
                    ? L0(U + ";", i, r, y - 1)
                    : L0(Ne(U, " ", "") + ";", i, r, y - 2),
                  f
                );
            break;
          case 59:
            U += ";";
          default:
            if (
              (Mu((I = j0(U, t, r, p, m, s, d, z, (W = []), (E = []), y)), l),
              O === 123)
            )
              if (m === 0) lc(U, t, I, I, W, l, y, d, E);
              else
                switch (b === 99 && _t(U, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lc(
                      e,
                      I,
                      I,
                      i && Mu(j0(e, I, I, 0, 0, s, d, z, s, (W = []), y), E),
                      s,
                      E,
                      y,
                      d,
                      i ? W : E
                    );
                    break;
                  default:
                    lc(U, I, I, I, [""], E, 0, d, E);
                }
        }
        (p = m = _ = 0), (w = T = 1), (z = U = ""), (y = u);
        break;
      case 58:
        (y = 1 + tr(U)), (_ = S);
      default:
        if (w < 1) {
          if (O == 123) --w;
          else if (O == 125 && w++ == 0 && H5() == 125) continue;
        }
        switch (((U += Fc(O)), O * w)) {
          case 38:
            T = m > 0 ? 1 : ((U += "\f"), -1);
            break;
          case 44:
            (d[p++] = (tr(U) - 1) * T), (T = 1);
            break;
          case 64:
            ar() === 45 && (U += ac(nn())),
              (b = ar()),
              (m = y = tr((z = U += Y5(sc())))),
              O++;
            break;
          case 45:
            S === 45 && tr(U) == 2 && (w = 0);
        }
    }
  return l;
}
function j0(e, t, r, i, s, l, u, d, f, p, m) {
  for (
    var y = s - 1, b = s === 0 ? l : [""], _ = Jp(b), S = 0, w = 0, x = 0;
    S < i;
    ++S
  )
    for (var T = 0, O = Fa(e, y + 1, (y = I5((w = u[S])))), z = e; T < _; ++T)
      (z = pS(w > 0 ? b[T] + " " + O : Ne(O, /&\f/g, b[T]))) && (f[x++] = z);
  return Vc(e, t, r, s === 0 ? Xp : d, f, p, m);
}
function Q5(e, t, r) {
  return Vc(e, t, r, fS, Fc(W5()), Fa(e, 2, -2), 0);
}
function L0(e, t, r, i) {
  return Vc(e, t, r, Qp, Fa(e, 0, i), Fa(e, i + 1, -1), i);
}
function ns(e, t) {
  for (var r = "", i = Jp(e), s = 0; s < i; s++) r += t(e[s], s, e, t) || "";
  return r;
}
function J5(e, t, r, i) {
  switch (e.type) {
    case D5:
      if (e.children.length) break;
    case N5:
    case Qp:
      return (e.return = e.return || e.value);
    case fS:
      return "";
    case hS:
      return (e.return = e.value + "{" + ns(e.children, i) + "}");
    case Xp:
      e.value = e.props.join(",");
  }
  return tr((r = ns(e.children, i)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function Z5(e) {
  var t = Jp(e);
  return function (r, i, s, l) {
    for (var u = "", d = 0; d < t; d++) u += e[d](r, i, s, l) || "";
    return u;
  };
}
function e3(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var N0 = function (t) {
  var r = new WeakMap();
  return function (i) {
    if (r.has(i)) return r.get(i);
    var s = t(i);
    return r.set(i, s), s;
  };
};
function Zp(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var t3 = function (t, r, i) {
    for (
      var s = 0, l = 0;
      (s = l), (l = ar()), s === 38 && l === 12 && (r[i] = 1), !Ba(l);

    )
      nn();
    return Za(t, Xt);
  },
  n3 = function (t, r) {
    var i = -1,
      s = 44;
    do
      switch (Ba(s)) {
        case 0:
          s === 38 && ar() === 12 && (r[i] = 1), (t[i] += t3(Xt - 1, r, i));
          break;
        case 2:
          t[i] += ac(s);
          break;
        case 4:
          if (s === 44) {
            (t[++i] = ar() === 58 ? "&\f" : ""), (r[i] = t[i].length);
            break;
          }
        default:
          t[i] += Fc(s);
      }
    while ((s = nn()));
    return t;
  },
  r3 = function (t, r) {
    return yS(n3(gS(t), r));
  },
  D0 = new WeakMap(),
  o3 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          i = t.parent,
          s = t.column === i.column && t.line === i.line;
        i.type !== "rule";

      )
        if (((i = i.parent), !i)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !D0.get(i)) &&
        !s
      ) {
        D0.set(t, !0);
        for (
          var l = [], u = r3(r, l), d = i.props, f = 0, p = 0;
          f < u.length;
          f++
        )
          for (var m = 0; m < d.length; m++, p++)
            t.props[p] = l[f] ? u[f].replace(/&\f/g, d[m]) : d[m] + " " + u[f];
      }
    }
  },
  i3 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function vS(e, t) {
  switch (B5(e, t)) {
    case 5103:
      return Le + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Le + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Le + e + xc + e + Mt + e + e;
    case 6828:
    case 4268:
      return Le + e + Mt + e + e;
    case 6165:
      return Le + e + Mt + "flex-" + e + e;
    case 5187:
      return (
        Le + e + Ne(e, /(\w+).+(:[^]+)/, Le + "box-$1$2" + Mt + "flex-$1$2") + e
      );
    case 5443:
      return Le + e + Mt + "flex-item-" + Ne(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Le +
        e +
        Mt +
        "flex-line-pack" +
        Ne(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Le + e + Mt + Ne(e, "shrink", "negative") + e;
    case 5292:
      return Le + e + Mt + Ne(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Le +
        "box-" +
        Ne(e, "-grow", "") +
        Le +
        e +
        Mt +
        Ne(e, "grow", "positive") +
        e
      );
    case 4554:
      return Le + Ne(e, /([^-])(transform)/g, "$1" + Le + "$2") + e;
    case 6187:
      return (
        Ne(
          Ne(Ne(e, /(zoom-|grab)/, Le + "$1"), /(image-set)/, Le + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return Ne(e, /(image-set\([^]*)/, Le + "$1$`$1");
    case 4968:
      return (
        Ne(
          Ne(e, /(.+:)(flex-)?(.*)/, Le + "box-pack:$3" + Mt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Le +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ne(e, /(.+)-inline(.+)/, Le + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (tr(e) - 1 - t > 6)
        switch (_t(e, t + 1)) {
          case 109:
            if (_t(e, t + 4) !== 45) break;
          case 102:
            return (
              Ne(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Le +
                  "$2-$3$1" +
                  xc +
                  (_t(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~sp(e, "stretch")
              ? vS(Ne(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (_t(e, t + 1) !== 115) break;
    case 6444:
      switch (_t(e, tr(e) - 3 - (~sp(e, "!important") && 10))) {
        case 107:
          return Ne(e, ":", ":" + Le) + e;
        case 101:
          return (
            Ne(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Le +
                (_t(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Le +
                "$2$3$1" +
                Mt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (_t(e, t + 11)) {
        case 114:
          return Le + e + Mt + Ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Le + e + Mt + Ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Le + e + Mt + Ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Le + e + Mt + e + e;
  }
  return e;
}
var s3 = function (t, r, i, s) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Qp:
          t.return = vS(t.value, t.length);
          break;
        case hS:
          return ns([ha(t, { value: Ne(t.value, "@", "@" + Le) })], s);
        case Xp:
          if (t.length)
            return U5(t.props, function (l) {
              switch (V5(l, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ns(
                    [ha(t, { props: [Ne(l, /:(read-\w+)/, ":" + xc + "$1")] })],
                    s
                  );
                case "::placeholder":
                  return ns(
                    [
                      ha(t, {
                        props: [Ne(l, /:(plac\w+)/, ":" + Le + "input-$1")],
                      }),
                      ha(t, { props: [Ne(l, /:(plac\w+)/, ":" + xc + "$1")] }),
                      ha(t, { props: [Ne(l, /:(plac\w+)/, Mt + "input-$1")] }),
                    ],
                    s
                  );
              }
              return "";
            });
      }
  },
  a3 = [s3],
  l3 = function (t) {
    var r = t.key;
    if (r === "css") {
      var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(i, function (w) {
        var x = w.getAttribute("data-emotion");
        x.indexOf(" ") !== -1 &&
          (document.head.appendChild(w), w.setAttribute("data-s", ""));
      });
    }
    var s = t.stylisPlugins || a3,
      l = {},
      u,
      d = [];
    (u = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (w) {
          for (
            var x = w.getAttribute("data-emotion").split(" "), T = 1;
            T < x.length;
            T++
          )
            l[x[T]] = !0;
          d.push(w);
        }
      );
    var f,
      p = [o3, i3];
    {
      var m,
        y = [
          J5,
          e3(function (w) {
            m.insert(w);
          }),
        ],
        b = Z5(p.concat(s, y)),
        _ = function (x) {
          return ns(X5(x), b);
        };
      f = function (x, T, O, z) {
        (m = O),
          _(x ? x + "{" + T.styles + "}" : T.styles),
          z && (S.inserted[T.name] = !0);
      };
    }
    var S = {
      key: r,
      sheet: new L5({
        key: r,
        container: u,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: l,
      registered: {},
      insert: f,
    };
    return S.sheet.hydrate(d), S;
  };
function wc() {
  return (
    (wc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) ({}).hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }),
    wc.apply(null, arguments)
  );
}
var hh = { exports: {} },
  Fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I0;
function u3() {
  if (I0) return Fe;
  I0 = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    i = e ? Symbol.for("react.fragment") : 60107,
    s = e ? Symbol.for("react.strict_mode") : 60108,
    l = e ? Symbol.for("react.profiler") : 60114,
    u = e ? Symbol.for("react.provider") : 60109,
    d = e ? Symbol.for("react.context") : 60110,
    f = e ? Symbol.for("react.async_mode") : 60111,
    p = e ? Symbol.for("react.concurrent_mode") : 60111,
    m = e ? Symbol.for("react.forward_ref") : 60112,
    y = e ? Symbol.for("react.suspense") : 60113,
    b = e ? Symbol.for("react.suspense_list") : 60120,
    _ = e ? Symbol.for("react.memo") : 60115,
    S = e ? Symbol.for("react.lazy") : 60116,
    w = e ? Symbol.for("react.block") : 60121,
    x = e ? Symbol.for("react.fundamental") : 60117,
    T = e ? Symbol.for("react.responder") : 60118,
    O = e ? Symbol.for("react.scope") : 60119;
  function z(E) {
    if (typeof E == "object" && E !== null) {
      var I = E.$$typeof;
      switch (I) {
        case t:
          switch (((E = E.type), E)) {
            case f:
            case p:
            case i:
            case l:
            case s:
            case y:
              return E;
            default:
              switch (((E = E && E.$$typeof), E)) {
                case d:
                case m:
                case S:
                case _:
                case u:
                  return E;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function W(E) {
    return z(E) === p;
  }
  return (
    (Fe.AsyncMode = f),
    (Fe.ConcurrentMode = p),
    (Fe.ContextConsumer = d),
    (Fe.ContextProvider = u),
    (Fe.Element = t),
    (Fe.ForwardRef = m),
    (Fe.Fragment = i),
    (Fe.Lazy = S),
    (Fe.Memo = _),
    (Fe.Portal = r),
    (Fe.Profiler = l),
    (Fe.StrictMode = s),
    (Fe.Suspense = y),
    (Fe.isAsyncMode = function (E) {
      return W(E) || z(E) === f;
    }),
    (Fe.isConcurrentMode = W),
    (Fe.isContextConsumer = function (E) {
      return z(E) === d;
    }),
    (Fe.isContextProvider = function (E) {
      return z(E) === u;
    }),
    (Fe.isElement = function (E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }),
    (Fe.isForwardRef = function (E) {
      return z(E) === m;
    }),
    (Fe.isFragment = function (E) {
      return z(E) === i;
    }),
    (Fe.isLazy = function (E) {
      return z(E) === S;
    }),
    (Fe.isMemo = function (E) {
      return z(E) === _;
    }),
    (Fe.isPortal = function (E) {
      return z(E) === r;
    }),
    (Fe.isProfiler = function (E) {
      return z(E) === l;
    }),
    (Fe.isStrictMode = function (E) {
      return z(E) === s;
    }),
    (Fe.isSuspense = function (E) {
      return z(E) === y;
    }),
    (Fe.isValidElementType = function (E) {
      return (
        typeof E == "string" ||
        typeof E == "function" ||
        E === i ||
        E === p ||
        E === l ||
        E === s ||
        E === y ||
        E === b ||
        (typeof E == "object" &&
          E !== null &&
          (E.$$typeof === S ||
            E.$$typeof === _ ||
            E.$$typeof === u ||
            E.$$typeof === d ||
            E.$$typeof === m ||
            E.$$typeof === x ||
            E.$$typeof === T ||
            E.$$typeof === O ||
            E.$$typeof === w))
      );
    }),
    (Fe.typeOf = z),
    Fe
  );
}
var F0;
function c3() {
  return F0 || ((F0 = 1), (hh.exports = u3())), hh.exports;
}
var ph, B0;
function d3() {
  if (B0) return ph;
  B0 = 1;
  var e = c3(),
    t = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    r = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    i = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    s = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    l = {};
  (l[e.ForwardRef] = i), (l[e.Memo] = s);
  function u(S) {
    return e.isMemo(S) ? s : l[S.$$typeof] || t;
  }
  var d = Object.defineProperty,
    f = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    m = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    b = Object.prototype;
  function _(S, w, x) {
    if (typeof w != "string") {
      if (b) {
        var T = y(w);
        T && T !== b && _(S, T, x);
      }
      var O = f(w);
      p && (O = O.concat(p(w)));
      for (var z = u(S), W = u(w), E = 0; E < O.length; ++E) {
        var I = O[E];
        if (!r[I] && !(x && x[I]) && !(W && W[I]) && !(z && z[I])) {
          var U = m(w, I);
          try {
            d(S, I, U);
          } catch {}
        }
      }
    }
    return S;
  }
  return (ph = _), ph;
}
d3();
var f3 = !0;
function bS(e, t, r) {
  var i = "";
  return (
    r.split(" ").forEach(function (s) {
      e[s] !== void 0 ? t.push(e[s] + ";") : s && (i += s + " ");
    }),
    i
  );
}
var em = function (t, r, i) {
    var s = t.key + "-" + r.name;
    (i === !1 || f3 === !1) &&
      t.registered[s] === void 0 &&
      (t.registered[s] = r.styles);
  },
  tm = function (t, r, i) {
    em(t, r, i);
    var s = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var l = r;
      do t.insert(r === l ? "." + s : "", l, t.sheet, !0), (l = l.next);
      while (l !== void 0);
    }
  };
function SS(e) {
  for (var t = 0, r, i = 0, s = e.length; s >= 4; ++i, s -= 4)
    (r =
      (e.charCodeAt(i) & 255) |
      ((e.charCodeAt(++i) & 255) << 8) |
      ((e.charCodeAt(++i) & 255) << 16) |
      ((e.charCodeAt(++i) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (s) {
    case 3:
      t ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(i) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var xS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  h3 = !1,
  p3 = /[A-Z]|^ms/g,
  m3 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  wS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  V0 = function (t) {
    return t != null && typeof t != "boolean";
  },
  mh = Zp(function (e) {
    return wS(e) ? e : e.replace(p3, "-$&").toLowerCase();
  }),
  U0 = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(m3, function (i, s, l) {
            return (nr = { name: s, styles: l, next: nr }), s;
          });
    }
    return xS[t] !== 1 && !wS(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  },
  g3 =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Va(e, t, r) {
  if (r == null) return "";
  var i = r;
  if (i.__emotion_styles !== void 0) return i;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var s = r;
      if (s.anim === 1)
        return (nr = { name: s.name, styles: s.styles, next: nr }), s.name;
      var l = r;
      if (l.styles !== void 0) {
        var u = l.next;
        if (u !== void 0)
          for (; u !== void 0; )
            (nr = { name: u.name, styles: u.styles, next: nr }), (u = u.next);
        var d = l.styles + ";";
        return d;
      }
      return y3(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = nr,
          p = r(e);
        return (nr = f), Va(e, t, p);
      }
      break;
    }
  }
  var m = r;
  return m;
}
function y3(e, t, r) {
  var i = "";
  if (Array.isArray(r))
    for (var s = 0; s < r.length; s++) i += Va(e, t, r[s]) + ";";
  else
    for (var l in r) {
      var u = r[l];
      if (typeof u != "object") {
        var d = u;
        V0(d) && (i += mh(l) + ":" + U0(l, d) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && h3) throw new Error(g3);
        if (Array.isArray(u) && typeof u[0] == "string" && t == null)
          for (var f = 0; f < u.length; f++)
            V0(u[f]) && (i += mh(l) + ":" + U0(l, u[f]) + ";");
        else {
          var p = Va(e, t, u);
          switch (l) {
            case "animation":
            case "animationName": {
              i += mh(l) + ":" + p + ";";
              break;
            }
            default:
              i += l + "{" + p + "}";
          }
        }
      }
    }
  return i;
}
var W0 = /label:\s*([^\s;{]+)\s*(;|$)/g,
  nr;
function nm(e, t, r) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var i = !0,
    s = "";
  nr = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0) (i = !1), (s += Va(r, t, l));
  else {
    var u = l;
    s += u[0];
  }
  for (var d = 1; d < e.length; d++)
    if (((s += Va(r, t, e[d])), i)) {
      var f = l;
      s += f[d];
    }
  W0.lastIndex = 0;
  for (var p = "", m; (m = W0.exec(s)) !== null; ) p += "-" + m[1];
  var y = SS(s) + p;
  return { name: y, styles: s, next: nr };
}
var v3 = function (t) {
    return t();
  },
  kS = Xh.useInsertionEffect ? Xh.useInsertionEffect : !1,
  CS = kS || v3,
  H0 = kS || P.useLayoutEffect,
  b3 = !1,
  _S = P.createContext(typeof HTMLElement < "u" ? l3({ key: "css" }) : null);
_S.Provider;
var Uc = function (t) {
    return P.forwardRef(function (r, i) {
      var s = P.useContext(_S);
      return t(r, s, i);
    });
  },
  as = P.createContext({}),
  S3 = function (t, r) {
    if (typeof r == "function") {
      var i = r(t);
      return i;
    }
    return wc({}, t, r);
  },
  x3 = N0(function (e) {
    return N0(function (t) {
      return S3(e, t);
    });
  }),
  w3 = function (t) {
    var r = P.useContext(as);
    return (
      t.theme !== r && (r = x3(r)(t.theme)),
      P.createElement(as.Provider, { value: r }, t.children)
    );
  },
  rm = {}.hasOwnProperty,
  lp = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  k3 = function (t, r) {
    var i = {};
    for (var s in r) rm.call(r, s) && (i[s] = r[s]);
    return (i[lp] = t), i;
  },
  C3 = function (t) {
    var r = t.cache,
      i = t.serialized,
      s = t.isStringTag;
    return (
      em(r, i, s),
      CS(function () {
        return tm(r, i, s);
      }),
      null
    );
  },
  _3 = Uc(function (e, t, r) {
    var i = e.css;
    typeof i == "string" && t.registered[i] !== void 0 && (i = t.registered[i]);
    var s = e[lp],
      l = [i],
      u = "";
    typeof e.className == "string"
      ? (u = bS(t.registered, l, e.className))
      : e.className != null && (u = e.className + " ");
    var d = nm(l, void 0, P.useContext(as));
    u += t.key + "-" + d.name;
    var f = {};
    for (var p in e)
      rm.call(e, p) && p !== "css" && p !== lp && !b3 && (f[p] = e[p]);
    return (
      (f.className = u),
      r && (f.ref = r),
      P.createElement(
        P.Fragment,
        null,
        P.createElement(C3, {
          cache: t,
          serialized: d,
          isStringTag: typeof s == "string",
        }),
        P.createElement(s, f)
      )
    );
  }),
  P3 = _3,
  q0 = function (t, r) {
    var i = arguments;
    if (r == null || !rm.call(r, "css"))
      return P.createElement.apply(void 0, i);
    var s = i.length,
      l = new Array(s);
    (l[0] = P3), (l[1] = k3(t, r));
    for (var u = 2; u < s; u++) l[u] = i[u];
    return P.createElement.apply(null, l);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(q0 || (q0 = {}));
var Wc = Uc(function (e, t) {
  var r = e.styles,
    i = nm([r], void 0, P.useContext(as)),
    s = P.useRef();
  return (
    H0(
      function () {
        var l = t.key + "-global",
          u = new t.sheet.constructor({
            key: l,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          d = !1,
          f = document.querySelector(
            'style[data-emotion="' + l + " " + i.name + '"]'
          );
        return (
          t.sheet.tags.length && (u.before = t.sheet.tags[0]),
          f !== null &&
            ((d = !0), f.setAttribute("data-emotion", l), u.hydrate([f])),
          (s.current = [u, d]),
          function () {
            u.flush();
          }
        );
      },
      [t]
    ),
    H0(
      function () {
        var l = s.current,
          u = l[0],
          d = l[1];
        if (d) {
          l[1] = !1;
          return;
        }
        if ((i.next !== void 0 && tm(t, i.next, !0), u.tags.length)) {
          var f = u.tags[u.tags.length - 1].nextElementSibling;
          (u.before = f), u.flush();
        }
        t.insert("", i, u, !1);
      },
      [t, i.name]
    ),
    null
  );
});
function T3() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return nm(t);
}
function E3() {
  var e = T3.apply(void 0, arguments),
    t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
const om = P.createContext({});
om.displayName = "ColorModeContext";
function im() {
  const e = P.useContext(om);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
const zu = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function R3(e = {}) {
  const { preventTransition: t = !0, nonce: r } = e,
    i = {
      setDataset: (s) => {
        const l = t ? i.preventTransition() : void 0;
        (document.documentElement.dataset.theme = s),
          (document.documentElement.style.colorScheme = s),
          l == null || l();
      },
      setClassName(s) {
        document.body.classList.add(s ? zu.dark : zu.light),
          document.body.classList.remove(s ? zu.light : zu.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(s) {
        return i.query().matches ?? s === "dark" ? "dark" : "light";
      },
      addListener(s) {
        const l = i.query(),
          u = (d) => {
            s(d.matches ? "dark" : "light");
          };
        return (
          typeof l.addListener == "function"
            ? l.addListener(u)
            : l.addEventListener("change", u),
          () => {
            typeof l.removeListener == "function"
              ? l.removeListener(u)
              : l.removeEventListener("change", u);
          }
        );
      },
      preventTransition() {
        const s = document.createElement("style");
        return (
          s.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          r !== void 0 && (s.nonce = r),
          document.head.appendChild(s),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(s);
                });
              });
          }
        );
      },
    };
  return i;
}
const A3 = "chakra-ui-color-mode";
function $3(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {}
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
const O3 = $3(A3),
  K0 = () => {},
  M3 = qC() ? P.useLayoutEffect : P.useEffect;
function G0(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
const PS = Uc(function (t, r) {
  const {
      value: i,
      children: s,
      options: {
        useSystemColorMode: l,
        initialColorMode: u,
        disableTransitionOnChange: d,
      } = {},
      colorModeManager: f = O3,
    } = t,
    p = u === "dark" ? "dark" : "light",
    [m, y] = P.useState(() => G0(f, p)),
    [b, _] = P.useState(() => G0(f)),
    {
      getSystemTheme: S,
      setClassName: w,
      setDataset: x,
      addListener: T,
    } = P.useMemo(
      () => R3({ preventTransition: d, nonce: r == null ? void 0 : r.nonce }),
      [d, r == null ? void 0 : r.nonce]
    ),
    O = u === "system" && !m ? b : m,
    z = P.useCallback(
      (I) => {
        const U = I === "system" ? S() : I;
        y(U), w(U === "dark"), x(U), f.set(U);
      },
      [f, S, w, x]
    );
  M3(() => {
    u === "system" && _(S());
  }, []),
    P.useEffect(() => {
      const I = f.get();
      if (I) {
        z(I);
        return;
      }
      if (u === "system") {
        z("system");
        return;
      }
      z(p);
    }, [f, p, u, z]);
  const W = P.useCallback(() => {
    z(O === "dark" ? "light" : "dark");
  }, [O, z]);
  P.useEffect(() => {
    if (l) return T(z);
  }, [l, T, z]);
  const E = P.useMemo(
    () => ({
      colorMode: i ?? O,
      toggleColorMode: i ? K0 : W,
      setColorMode: i ? K0 : z,
      forced: i !== void 0,
    }),
    [O, W, z, i]
  );
  return A.jsx(om.Provider, { value: E, children: s });
});
PS.displayName = "ColorModeProvider";
const TS = String.raw,
  ES = TS`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  z3 = () => A.jsx(Wc, { styles: ES }),
  j3 = ({ scope: e = "" }) =>
    A.jsx(Wc, {
      styles: TS`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${ES}
    `,
    });
function L3(e) {
  const { cssVarsRoot: t, theme: r, children: i } = e,
    s = P.useMemo(() => x_(r), [r]);
  return A.jsxs(w3, { theme: s, children: [A.jsx(N3, { root: t }), i] });
}
function N3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return A.jsx(Wc, { styles: (r) => ({ [t]: r.__cssVars }) });
}
Zo({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function D3() {
  const { colorMode: e } = im();
  return A.jsx(Wc, {
    styles: (t) => {
      const r = Hb(t, "styles.global"),
        i = or(r, { theme: t, colorMode: e });
      return i ? Qb(i)(t) : void 0;
    },
  });
}
const [I3, F3] = Zo({ strict: !1, name: "PortalManagerContext" });
function RS(e) {
  const { children: t, zIndex: r } = e;
  return A.jsx(I3, { value: { zIndex: r }, children: t });
}
RS.displayName = "PortalManager";
const sm = P.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
sm.displayName = "EnvironmentContext";
function B3({ defer: e } = {}) {
  const [, t] = P.useReducer((r) => r + 1, 0);
  return (
    yc(() => {
      e && t();
    }, [e]),
    P.useContext(sm)
  );
}
function AS(e) {
  const { children: t, environment: r, disabled: i } = e,
    s = P.useRef(null),
    l = P.useMemo(
      () =>
        r || {
          getDocument: () => {
            var d;
            return (
              ((d = s.current) == null ? void 0 : d.ownerDocument) ?? document
            );
          },
          getWindow: () => {
            var d;
            return (
              ((d = s.current) == null
                ? void 0
                : d.ownerDocument.defaultView) ?? window
            );
          },
        },
      [r]
    ),
    u = !i || !r;
  return A.jsxs(sm.Provider, {
    value: l,
    children: [
      t,
      u && A.jsx("span", { id: "__chakra_env", hidden: !0, ref: s }),
    ],
  });
}
AS.displayName = "EnvironmentProvider";
const V3 = (e) => {
  const {
      children: t,
      colorModeManager: r,
      portalZIndex: i,
      resetScope: s,
      resetCSS: l = !0,
      theme: u = {},
      environment: d,
      cssVarsRoot: f,
      disableEnvironment: p,
      disableGlobalStyle: m,
    } = e,
    y = A.jsx(AS, { environment: d, disabled: p, children: t });
  return A.jsx(L3, {
    theme: u,
    cssVarsRoot: f,
    children: A.jsxs(PS, {
      colorModeManager: r,
      options: u.config,
      children: [
        l ? A.jsx(j3, { scope: s }) : A.jsx(z3, {}),
        !m && A.jsx(D3, {}),
        i ? A.jsx(RS, { zIndex: i, children: y }) : y,
      ],
    }),
  });
};
function U3(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    r = (...i) => e(...i);
  return new Proxy(r, {
    get: (i, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
function Hc(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const up = (e) => Array.isArray(e);
function $S(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let i = 0; i < r; i++) if (t[i] !== e[i]) return !1;
  return !0;
}
function Ua(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Y0(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((r, i) => {
        (t[0][i] = r.get()), (t[1][i] = r.getVelocity());
      }),
    t
  );
}
function am(e, t, r, i) {
  if (typeof t == "function") {
    const [s, l] = Y0(i);
    t = t(r !== void 0 ? r : e.custom, s, l);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, l] = Y0(i);
    t = t(r !== void 0 ? r : e.custom, s, l);
  }
  return t;
}
function qc(e, t, r) {
  const i = e.getProps();
  return am(i, t, r !== void 0 ? r : i.custom, e);
}
const lm = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  um = ["initial", ...lm],
  el = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ei = new Set(el),
  Rr = (e) => e * 1e3,
  Ar = (e) => e / 1e3,
  W3 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  H3 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  q3 = { type: "keyframes", duration: 0.8 },
  K3 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  G3 = (e, { keyframes: t }) =>
    t.length > 2
      ? q3
      : ei.has(e)
      ? e.startsWith("scale")
        ? H3(t[1])
        : W3
      : K3;
function cm(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Y3 = { skipAnimations: !1, useManualTiming: !1 },
  X3 = (e) => e !== null;
function Kc(e, { repeat: t, repeatType: r = "loop" }, i) {
  const s = e.filter(X3),
    l = t && r !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !l || i === void 0 ? s[l] : i;
}
const rn = (e) => e;
let cp = rn;
function Q3(e) {
  let t = new Set(),
    r = new Set(),
    i = !1,
    s = !1;
  const l = new WeakSet();
  let u = { delta: 0, timestamp: 0, isProcessing: !1 };
  function d(p) {
    l.has(p) && (f.schedule(p), e()), p(u);
  }
  const f = {
    schedule: (p, m = !1, y = !1) => {
      const _ = y && i ? t : r;
      return m && l.add(p), _.has(p) || _.add(p), p;
    },
    cancel: (p) => {
      r.delete(p), l.delete(p);
    },
    process: (p) => {
      if (((u = p), i)) {
        s = !0;
        return;
      }
      (i = !0),
        ([t, r] = [r, t]),
        t.forEach(d),
        t.clear(),
        (i = !1),
        s && ((s = !1), f.process(p));
    },
  };
  return f;
}
const ju = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  J3 = 40;
function OS(e, t) {
  let r = !1,
    i = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = () => (r = !0),
    u = ju.reduce((T, O) => ((T[O] = Q3(l)), T), {}),
    {
      read: d,
      resolveKeyframes: f,
      update: p,
      preRender: m,
      render: y,
      postRender: b,
    } = u,
    _ = () => {
      const T = performance.now();
      (r = !1),
        (s.delta = i ? 1e3 / 60 : Math.max(Math.min(T - s.timestamp, J3), 1)),
        (s.timestamp = T),
        (s.isProcessing = !0),
        d.process(s),
        f.process(s),
        p.process(s),
        m.process(s),
        y.process(s),
        b.process(s),
        (s.isProcessing = !1),
        r && t && ((i = !1), e(_));
    },
    S = () => {
      (r = !0), (i = !0), s.isProcessing || e(_);
    };
  return {
    schedule: ju.reduce((T, O) => {
      const z = u[O];
      return (T[O] = (W, E = !1, I = !1) => (r || S(), z.schedule(W, E, I))), T;
    }, {}),
    cancel: (T) => {
      for (let O = 0; O < ju.length; O++) u[ju[O]].cancel(T);
    },
    state: s,
    steps: u,
  };
}
const {
    schedule: Je,
    cancel: ho,
    state: Ct,
    steps: gh,
  } = OS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : rn, !0),
  MS = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  Z3 = 1e-7,
  e4 = 12;
function t4(e, t, r, i, s) {
  let l,
    u,
    d = 0;
  do (u = t + (r - t) / 2), (l = MS(u, i, s) - e), l > 0 ? (r = u) : (t = u);
  while (Math.abs(l) > Z3 && ++d < e4);
  return u;
}
function tl(e, t, r, i) {
  if (e === t && r === i) return rn;
  const s = (l) => t4(l, 0, 1, e, r);
  return (l) => (l === 0 || l === 1 ? l : MS(s(l), t, i));
}
const zS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  jS = (e) => (t) => 1 - e(1 - t),
  LS = tl(0.33, 1.53, 0.69, 0.99),
  dm = jS(LS),
  NS = zS(dm),
  DS = (e) =>
    (e *= 2) < 1 ? 0.5 * dm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  fm = (e) => 1 - Math.sin(Math.acos(e)),
  IS = jS(fm),
  FS = zS(fm),
  BS = (e) => /^0[^.\s]+$/u.test(e);
function n4(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || BS(e)
    : !0;
}
const VS = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  US = (e) => (t) => typeof t == "string" && t.startsWith(e),
  WS = US("--"),
  r4 = US("var(--"),
  hm = (e) => (r4(e) ? o4.test(e.split("/*")[0].trim()) : !1),
  o4 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  i4 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function s4(e) {
  const t = i4.exec(e);
  if (!t) return [,];
  const [, r, i, s] = t;
  return [`--${r ?? i}`, s];
}
function HS(e, t, r = 1) {
  const [i, s] = s4(e);
  if (!i) return;
  const l = window.getComputedStyle(t).getPropertyValue(i);
  if (l) {
    const u = l.trim();
    return VS(u) ? parseFloat(u) : u;
  }
  return hm(s) ? HS(s, t, r + 1) : s;
}
const Or = (e, t, r) => (r > t ? t : r < e ? e : r),
  fs = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Wa = { ...fs, transform: (e) => Or(0, 1, e) },
  Lu = { ...fs, default: 1 },
  nl = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  io = nl("deg"),
  lr = nl("%"),
  ge = nl("px"),
  a4 = nl("vh"),
  l4 = nl("vw"),
  X0 = {
    ...lr,
    parse: (e) => lr.parse(e) / 100,
    transform: (e) => lr.transform(e * 100),
  },
  u4 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Q0 = (e) => e === fs || e === ge,
  J0 = (e, t) => parseFloat(e.split(", ")[t]),
  Z0 =
    (e, t) =>
    (r, { transform: i }) => {
      if (i === "none" || !i) return 0;
      const s = i.match(/^matrix3d\((.+)\)$/u);
      if (s) return J0(s[1], t);
      {
        const l = i.match(/^matrix\((.+)\)$/u);
        return l ? J0(l[1], e) : 0;
      }
    },
  c4 = new Set(["x", "y", "z"]),
  d4 = el.filter((e) => !c4.has(e));
function f4(e) {
  const t = [];
  return (
    d4.forEach((r) => {
      const i = e.getValue(r);
      i !== void 0 &&
        (t.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ls = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Z0(4, 13),
  y: Z0(5, 14),
};
ls.translateX = ls.x;
ls.translateY = ls.y;
const qS = (e) => (t) => t.test(e),
  h4 = { test: (e) => e === "auto", parse: (e) => e },
  KS = [fs, ge, lr, io, l4, a4, h4],
  ev = (e) => KS.find(qS(e)),
  Yo = new Set();
let dp = !1,
  fp = !1;
function GS() {
  if (fp) {
    const e = Array.from(Yo).filter((i) => i.needsMeasurement),
      t = new Set(e.map((i) => i.element)),
      r = new Map();
    t.forEach((i) => {
      const s = f4(i);
      s.length && (r.set(i, s), i.render());
    }),
      e.forEach((i) => i.measureInitialState()),
      t.forEach((i) => {
        i.render();
        const s = r.get(i);
        s &&
          s.forEach(([l, u]) => {
            var d;
            (d = i.getValue(l)) === null || d === void 0 || d.set(u);
          });
      }),
      e.forEach((i) => i.measureEndState()),
      e.forEach((i) => {
        i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
      });
  }
  (fp = !1), (dp = !1), Yo.forEach((e) => e.complete()), Yo.clear();
}
function YS() {
  Yo.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (fp = !0);
  });
}
function p4() {
  YS(), GS();
}
class pm {
  constructor(t, r, i, s, l, u = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = r),
      (this.name = i),
      (this.motionValue = s),
      (this.element = l),
      (this.isAsync = u);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Yo.add(this),
          dp || ((dp = !0), Je.read(YS), Je.resolveKeyframes(GS)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: r,
      element: i,
      motionValue: s,
    } = this;
    for (let l = 0; l < t.length; l++)
      if (t[l] === null)
        if (l === 0) {
          const u = s == null ? void 0 : s.get(),
            d = t[t.length - 1];
          if (u !== void 0) t[0] = u;
          else if (i && r) {
            const f = i.readValue(r, d);
            f != null && (t[0] = f);
          }
          t[0] === void 0 && (t[0] = d), s && u === void 0 && s.set(t[0]);
        } else t[l] = t[l - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Yo.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Yo.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Oa = (e) => Math.round(e * 1e5) / 1e5,
  mm = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function m4(e) {
  return e == null;
}
const g4 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  gm = (e, t) => (r) =>
    !!(
      (typeof r == "string" && g4.test(r) && r.startsWith(e)) ||
      (t && !m4(r) && Object.prototype.hasOwnProperty.call(r, t))
    ),
  XS = (e, t, r) => (i) => {
    if (typeof i != "string") return i;
    const [s, l, u, d] = i.match(mm);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(l),
      [r]: parseFloat(u),
      alpha: d !== void 0 ? parseFloat(d) : 1,
    };
  },
  y4 = (e) => Or(0, 255, e),
  yh = { ...fs, transform: (e) => Math.round(y4(e)) },
  Wo = {
    test: gm("rgb", "red"),
    parse: XS("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: i = 1 }) =>
      "rgba(" +
      yh.transform(e) +
      ", " +
      yh.transform(t) +
      ", " +
      yh.transform(r) +
      ", " +
      Oa(Wa.transform(i)) +
      ")",
  };
function v4(e) {
  let t = "",
    r = "",
    i = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (i = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (i = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (r += r),
        (i += i),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(i, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const hp = { test: gm("#"), parse: v4, transform: Wo.transform },
  qi = {
    test: gm("hsl", "hue"),
    parse: XS("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: i = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      lr.transform(Oa(t)) +
      ", " +
      lr.transform(Oa(r)) +
      ", " +
      Oa(Wa.transform(i)) +
      ")",
  },
  zt = {
    test: (e) => Wo.test(e) || hp.test(e) || qi.test(e),
    parse: (e) =>
      Wo.test(e) ? Wo.parse(e) : qi.test(e) ? qi.parse(e) : hp.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Wo.transform(e)
        : qi.transform(e),
  },
  b4 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function S4(e) {
  var t, r;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(mm)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(b4)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
const QS = "number",
  JS = "color",
  x4 = "var",
  w4 = "var(",
  tv = "${}",
  k4 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ha(e) {
  const t = e.toString(),
    r = [],
    i = { color: [], number: [], var: [] },
    s = [];
  let l = 0;
  const d = t
    .replace(
      k4,
      (f) => (
        zt.test(f)
          ? (i.color.push(l), s.push(JS), r.push(zt.parse(f)))
          : f.startsWith(w4)
          ? (i.var.push(l), s.push(x4), r.push(f))
          : (i.number.push(l), s.push(QS), r.push(parseFloat(f))),
        ++l,
        tv
      )
    )
    .split(tv);
  return { values: r, split: d, indexes: i, types: s };
}
function ZS(e) {
  return Ha(e).values;
}
function ex(e) {
  const { split: t, types: r } = Ha(e),
    i = t.length;
  return (s) => {
    let l = "";
    for (let u = 0; u < i; u++)
      if (((l += t[u]), s[u] !== void 0)) {
        const d = r[u];
        d === QS
          ? (l += Oa(s[u]))
          : d === JS
          ? (l += zt.transform(s[u]))
          : (l += s[u]);
      }
    return l;
  };
}
const C4 = (e) => (typeof e == "number" ? 0 : e);
function _4(e) {
  const t = ZS(e);
  return ex(e)(t.map(C4));
}
const po = {
    test: S4,
    parse: ZS,
    createTransformer: ex,
    getAnimatableNone: _4,
  },
  P4 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function T4(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [i] = r.match(mm) || [];
  if (!i) return e;
  const s = r.replace(i, "");
  let l = P4.has(t) ? 1 : 0;
  return i !== r && (l *= 100), t + "(" + l + s + ")";
}
const E4 = /\b([a-z-]*)\(.*?\)/gu,
  pp = {
    ...po,
    getAnimatableNone: (e) => {
      const t = e.match(E4);
      return t ? t.map(T4).join(" ") : e;
    },
  },
  R4 = {
    borderWidth: ge,
    borderTopWidth: ge,
    borderRightWidth: ge,
    borderBottomWidth: ge,
    borderLeftWidth: ge,
    borderRadius: ge,
    radius: ge,
    borderTopLeftRadius: ge,
    borderTopRightRadius: ge,
    borderBottomRightRadius: ge,
    borderBottomLeftRadius: ge,
    width: ge,
    maxWidth: ge,
    height: ge,
    maxHeight: ge,
    top: ge,
    right: ge,
    bottom: ge,
    left: ge,
    padding: ge,
    paddingTop: ge,
    paddingRight: ge,
    paddingBottom: ge,
    paddingLeft: ge,
    margin: ge,
    marginTop: ge,
    marginRight: ge,
    marginBottom: ge,
    marginLeft: ge,
    backgroundPositionX: ge,
    backgroundPositionY: ge,
  },
  A4 = {
    rotate: io,
    rotateX: io,
    rotateY: io,
    rotateZ: io,
    scale: Lu,
    scaleX: Lu,
    scaleY: Lu,
    scaleZ: Lu,
    skew: io,
    skewX: io,
    skewY: io,
    distance: ge,
    translateX: ge,
    translateY: ge,
    translateZ: ge,
    x: ge,
    y: ge,
    z: ge,
    perspective: ge,
    transformPerspective: ge,
    opacity: Wa,
    originX: X0,
    originY: X0,
    originZ: ge,
  },
  nv = { ...fs, transform: Math.round },
  ym = {
    ...R4,
    ...A4,
    zIndex: nv,
    size: ge,
    fillOpacity: Wa,
    strokeOpacity: Wa,
    numOctaves: nv,
  },
  $4 = {
    ...ym,
    color: zt,
    backgroundColor: zt,
    outlineColor: zt,
    fill: zt,
    stroke: zt,
    borderColor: zt,
    borderTopColor: zt,
    borderRightColor: zt,
    borderBottomColor: zt,
    borderLeftColor: zt,
    filter: pp,
    WebkitFilter: pp,
  },
  vm = (e) => $4[e];
function tx(e, t) {
  let r = vm(e);
  return (
    r !== pp && (r = po), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const O4 = new Set(["auto", "none", "0"]);
function M4(e, t, r) {
  let i = 0,
    s;
  for (; i < e.length && !s; ) {
    const l = e[i];
    typeof l == "string" && !O4.has(l) && Ha(l).values.length && (s = e[i]),
      i++;
  }
  if (s && r) for (const l of t) e[l] = tx(r, s);
}
class nx extends pm {
  constructor(t, r, i, s, l) {
    super(t, r, i, s, l, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: i } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let f = 0; f < t.length; f++) {
      let p = t[f];
      if (typeof p == "string" && ((p = p.trim()), hm(p))) {
        const m = HS(p, r.current);
        m !== void 0 && (t[f] = m),
          f === t.length - 1 && (this.finalKeyframe = p);
      }
    }
    if ((this.resolveNoneKeyframes(), !u4.has(i) || t.length !== 2)) return;
    const [s, l] = t,
      u = ev(s),
      d = ev(l);
    if (u !== d)
      if (Q0(u) && Q0(d))
        for (let f = 0; f < t.length; f++) {
          const p = t[f];
          typeof p == "string" && (t[f] = parseFloat(p));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this,
      i = [];
    for (let s = 0; s < t.length; s++) n4(t[s]) && i.push(s);
    i.length && M4(t, i, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: i } = this;
    if (!t || !t.current) return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ls[i](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (r[0] = this.measuredOrigin);
    const s = r[r.length - 1];
    s !== void 0 && t.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: r, name: i, unresolvedKeyframes: s } = this;
    if (!r || !r.current) return;
    const l = r.getValue(i);
    l && l.jump(this.measuredOrigin, !1);
    const u = s.length - 1,
      d = s[u];
    (s[u] = ls[i](r.measureViewportBox(), window.getComputedStyle(r.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([f, p]) => {
          r.getValue(f).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
function bm(e) {
  return typeof e == "function";
}
let uc;
function z4() {
  uc = void 0;
}
const ur = {
    now: () => (
      uc === void 0 &&
        ur.set(
          Ct.isProcessing || Y3.useManualTiming
            ? Ct.timestamp
            : performance.now()
        ),
      uc
    ),
    set: (e) => {
      (uc = e), queueMicrotask(z4);
    },
  },
  rv = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (po.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function j4(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function L4(e, t, r, i) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const l = e[e.length - 1],
    u = rv(s, t),
    d = rv(l, t);
  return !u || !d ? !1 : j4(e) || ((r === "spring" || bm(r)) && i);
}
const N4 = 40;
class rx {
  constructor({
    autoplay: t = !0,
    delay: r = 0,
    type: i = "keyframes",
    repeat: s = 0,
    repeatDelay: l = 0,
    repeatType: u = "loop",
    ...d
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = ur.now()),
      (this.options = {
        autoplay: t,
        delay: r,
        type: i,
        repeat: s,
        repeatDelay: l,
        repeatType: u,
        ...d,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > N4
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && p4(), this._resolved;
  }
  onKeyframesResolved(t, r) {
    (this.resolvedAt = ur.now()), (this.hasAttemptedResolve = !0);
    const {
      name: i,
      type: s,
      velocity: l,
      delay: u,
      onComplete: d,
      onUpdate: f,
      isGenerator: p,
    } = this.options;
    if (!p && !L4(t, i, s, l))
      if (u) this.options.duration = 0;
      else {
        f == null || f(Kc(t, this.options, r)),
          d == null || d(),
          this.resolveFinishedPromise();
        return;
      }
    const m = this.initPlayback(t, r);
    m !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: r, ...m }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, r) {
    return this.currentFinishedPromise.then(t, r);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const us = (e, t, r) => {
    const i = t - e;
    return i === 0 ? 1 : (r - e) / i;
  },
  ox = (e, t, r = 10) => {
    let i = "";
    const s = Math.max(Math.round(t / r), 2);
    for (let l = 0; l < s; l++) i += e(us(0, s - 1, l)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`;
  };
function ix(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const D4 = 5;
function sx(e, t, r) {
  const i = Math.max(t - D4, 0);
  return ix(r - e(i), t - i);
}
const it = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  vh = 0.001;
function I4({
  duration: e = it.duration,
  bounce: t = it.bounce,
  velocity: r = it.velocity,
  mass: i = it.mass,
}) {
  let s,
    l,
    u = 1 - t;
  (u = Or(it.minDamping, it.maxDamping, u)),
    (e = Or(it.minDuration, it.maxDuration, Ar(e))),
    u < 1
      ? ((s = (p) => {
          const m = p * u,
            y = m * e,
            b = m - r,
            _ = mp(p, u),
            S = Math.exp(-y);
          return vh - (b / _) * S;
        }),
        (l = (p) => {
          const y = p * u * e,
            b = y * r + r,
            _ = Math.pow(u, 2) * Math.pow(p, 2) * e,
            S = Math.exp(-y),
            w = mp(Math.pow(p, 2), u);
          return ((-s(p) + vh > 0 ? -1 : 1) * ((b - _) * S)) / w;
        }))
      : ((s = (p) => {
          const m = Math.exp(-p * e),
            y = (p - r) * e + 1;
          return -vh + m * y;
        }),
        (l = (p) => {
          const m = Math.exp(-p * e),
            y = (r - p) * (e * e);
          return m * y;
        }));
  const d = 5 / e,
    f = B4(s, l, d);
  if (((e = Rr(e)), isNaN(f)))
    return { stiffness: it.stiffness, damping: it.damping, duration: e };
  {
    const p = Math.pow(f, 2) * i;
    return { stiffness: p, damping: u * 2 * Math.sqrt(i * p), duration: e };
  }
}
const F4 = 12;
function B4(e, t, r) {
  let i = r;
  for (let s = 1; s < F4; s++) i = i - e(i) / t(i);
  return i;
}
function mp(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const gp = 2e4;
function ax(e) {
  let t = 0;
  const r = 50;
  let i = e.next(t);
  for (; !i.done && t < gp; ) (t += r), (i = e.next(t));
  return t >= gp ? 1 / 0 : t;
}
const V4 = ["duration", "bounce"],
  U4 = ["stiffness", "damping", "mass"];
function ov(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function W4(e) {
  let t = {
    velocity: it.velocity,
    stiffness: it.stiffness,
    damping: it.damping,
    mass: it.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!ov(e, U4) && ov(e, V4))
    if (e.visualDuration) {
      const r = e.visualDuration,
        i = (2 * Math.PI) / (r * 1.2),
        s = i * i,
        l = 2 * Or(0.05, 1, 1 - e.bounce) * Math.sqrt(s);
      t = { ...t, mass: it.mass, stiffness: s, damping: l };
    } else {
      const r = I4(e);
      (t = { ...t, ...r, mass: it.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function lx(e = it.visualDuration, t = it.bounce) {
  const r =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: i, restDelta: s } = r;
  const l = r.keyframes[0],
    u = r.keyframes[r.keyframes.length - 1],
    d = { done: !1, value: l },
    {
      stiffness: f,
      damping: p,
      mass: m,
      duration: y,
      velocity: b,
      isResolvedFromDuration: _,
    } = W4({ ...r, velocity: -Ar(r.velocity || 0) }),
    S = b || 0,
    w = p / (2 * Math.sqrt(f * m)),
    x = u - l,
    T = Ar(Math.sqrt(f / m)),
    O = Math.abs(x) < 5;
  i || (i = O ? it.restSpeed.granular : it.restSpeed.default),
    s || (s = O ? it.restDelta.granular : it.restDelta.default);
  let z;
  if (w < 1) {
    const E = mp(T, w);
    z = (I) => {
      const U = Math.exp(-w * T * I);
      return (
        u - U * (((S + w * T * x) / E) * Math.sin(E * I) + x * Math.cos(E * I))
      );
    };
  } else if (w === 1) z = (E) => u - Math.exp(-T * E) * (x + (S + T * x) * E);
  else {
    const E = T * Math.sqrt(w * w - 1);
    z = (I) => {
      const U = Math.exp(-w * T * I),
        Y = Math.min(E * I, 300);
      return (
        u - (U * ((S + w * T * x) * Math.sinh(Y) + E * x * Math.cosh(Y))) / E
      );
    };
  }
  const W = {
    calculatedDuration: (_ && y) || null,
    next: (E) => {
      const I = z(E);
      if (_) d.done = E >= y;
      else {
        let U = 0;
        w < 1 && (U = E === 0 ? Rr(S) : sx(z, E, I));
        const Y = Math.abs(U) <= i,
          le = Math.abs(u - I) <= s;
        d.done = Y && le;
      }
      return (d.value = d.done ? u : I), d;
    },
    toString: () => {
      const E = Math.min(ax(W), gp),
        I = ox((U) => W.next(E * U).value, E, 30);
      return E + "ms " + I;
    },
  };
  return W;
}
function iv({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: i = 325,
  bounceDamping: s = 10,
  bounceStiffness: l = 500,
  modifyTarget: u,
  min: d,
  max: f,
  restDelta: p = 0.5,
  restSpeed: m,
}) {
  const y = e[0],
    b = { done: !1, value: y },
    _ = (Y) => (d !== void 0 && Y < d) || (f !== void 0 && Y > f),
    S = (Y) =>
      d === void 0
        ? f
        : f === void 0 || Math.abs(d - Y) < Math.abs(f - Y)
        ? d
        : f;
  let w = r * t;
  const x = y + w,
    T = u === void 0 ? x : u(x);
  T !== x && (w = T - y);
  const O = (Y) => -w * Math.exp(-Y / i),
    z = (Y) => T + O(Y),
    W = (Y) => {
      const le = O(Y),
        ce = z(Y);
      (b.done = Math.abs(le) <= p), (b.value = b.done ? T : ce);
    };
  let E, I;
  const U = (Y) => {
    _(b.value) &&
      ((E = Y),
      (I = lx({
        keyframes: [b.value, S(b.value)],
        velocity: sx(z, Y, b.value),
        damping: s,
        stiffness: l,
        restDelta: p,
        restSpeed: m,
      })));
  };
  return (
    U(0),
    {
      calculatedDuration: null,
      next: (Y) => {
        let le = !1;
        return (
          !I && E === void 0 && ((le = !0), W(Y), U(Y)),
          E !== void 0 && Y >= E ? I.next(Y - E) : (!le && W(Y), b)
        );
      },
    }
  );
}
const H4 = tl(0.42, 0, 1, 1),
  q4 = tl(0, 0, 0.58, 1),
  ux = tl(0.42, 0, 0.58, 1),
  K4 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Sm = (e) => Array.isArray(e) && typeof e[0] == "number",
  sv = {
    linear: rn,
    easeIn: H4,
    easeInOut: ux,
    easeOut: q4,
    circIn: fm,
    circInOut: FS,
    circOut: IS,
    backIn: dm,
    backInOut: NS,
    backOut: LS,
    anticipate: DS,
  },
  av = (e) => {
    if (Sm(e)) {
      cp(e.length === 4);
      const [t, r, i, s] = e;
      return tl(t, r, i, s);
    } else if (typeof e == "string") return cp(sv[e] !== void 0), sv[e];
    return e;
  },
  G4 = (e, t) => (r) => t(e(r)),
  rl = (...e) => e.reduce(G4),
  nt = (e, t, r) => e + (t - e) * r;
function bh(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function Y4({ hue: e, saturation: t, lightness: r, alpha: i }) {
  (e /= 360), (t /= 100), (r /= 100);
  let s = 0,
    l = 0,
    u = 0;
  if (!t) s = l = u = r;
  else {
    const d = r < 0.5 ? r * (1 + t) : r + t - r * t,
      f = 2 * r - d;
    (s = bh(f, d, e + 1 / 3)), (l = bh(f, d, e)), (u = bh(f, d, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(l * 255),
    blue: Math.round(u * 255),
    alpha: i,
  };
}
function kc(e, t) {
  return (r) => (r > 0 ? t : e);
}
const Sh = (e, t, r) => {
    const i = e * e,
      s = r * (t * t - i) + i;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  X4 = [hp, Wo, qi],
  Q4 = (e) => X4.find((t) => t.test(e));
function lv(e) {
  const t = Q4(e);
  if (!t) return !1;
  let r = t.parse(e);
  return t === qi && (r = Y4(r)), r;
}
const uv = (e, t) => {
    const r = lv(e),
      i = lv(t);
    if (!r || !i) return kc(e, t);
    const s = { ...r };
    return (l) => (
      (s.red = Sh(r.red, i.red, l)),
      (s.green = Sh(r.green, i.green, l)),
      (s.blue = Sh(r.blue, i.blue, l)),
      (s.alpha = nt(r.alpha, i.alpha, l)),
      Wo.transform(s)
    );
  },
  yp = new Set(["none", "hidden"]);
function J4(e, t) {
  return yp.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
}
function Z4(e, t) {
  return (r) => nt(e, t, r);
}
function xm(e) {
  return typeof e == "number"
    ? Z4
    : typeof e == "string"
    ? hm(e)
      ? kc
      : zt.test(e)
      ? uv
      : n$
    : Array.isArray(e)
    ? cx
    : typeof e == "object"
    ? zt.test(e)
      ? uv
      : e$
    : kc;
}
function cx(e, t) {
  const r = [...e],
    i = r.length,
    s = e.map((l, u) => xm(l)(l, t[u]));
  return (l) => {
    for (let u = 0; u < i; u++) r[u] = s[u](l);
    return r;
  };
}
function e$(e, t) {
  const r = { ...e, ...t },
    i = {};
  for (const s in r)
    e[s] !== void 0 && t[s] !== void 0 && (i[s] = xm(e[s])(e[s], t[s]));
  return (s) => {
    for (const l in i) r[l] = i[l](s);
    return r;
  };
}
function t$(e, t) {
  var r;
  const i = [],
    s = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < t.values.length; l++) {
    const u = t.types[l],
      d = e.indexes[u][s[u]],
      f = (r = e.values[d]) !== null && r !== void 0 ? r : 0;
    (i[l] = f), s[u]++;
  }
  return i;
}
const n$ = (e, t) => {
  const r = po.createTransformer(t),
    i = Ha(e),
    s = Ha(t);
  return i.indexes.var.length === s.indexes.var.length &&
    i.indexes.color.length === s.indexes.color.length &&
    i.indexes.number.length >= s.indexes.number.length
    ? (yp.has(e) && !s.values.length) || (yp.has(t) && !i.values.length)
      ? J4(e, t)
      : rl(cx(t$(i, s), s.values), r)
    : kc(e, t);
};
function dx(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number"
    ? nt(e, t, r)
    : xm(e)(e, t);
}
function r$(e, t, r) {
  const i = [],
    s = r || dx,
    l = e.length - 1;
  for (let u = 0; u < l; u++) {
    let d = s(e[u], e[u + 1]);
    if (t) {
      const f = Array.isArray(t) ? t[u] || rn : t;
      d = rl(f, d);
    }
    i.push(d);
  }
  return i;
}
function o$(e, t, { clamp: r = !0, ease: i, mixer: s } = {}) {
  const l = e.length;
  if ((cp(l === t.length), l === 1)) return () => t[0];
  if (l === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[l - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const u = r$(t, i, s),
    d = u.length,
    f = (p) => {
      let m = 0;
      if (d > 1) for (; m < e.length - 2 && !(p < e[m + 1]); m++);
      const y = us(e[m], e[m + 1], p);
      return u[m](y);
    };
  return r ? (p) => f(Or(e[0], e[l - 1], p)) : f;
}
function i$(e, t) {
  const r = e[e.length - 1];
  for (let i = 1; i <= t; i++) {
    const s = us(0, t, i);
    e.push(nt(r, 1, s));
  }
}
function s$(e) {
  const t = [0];
  return i$(t, e.length - 1), t;
}
function a$(e, t) {
  return e.map((r) => r * t);
}
function l$(e, t) {
  return e.map(() => t || ux).splice(0, e.length - 1);
}
function Cc({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: i = "easeInOut",
}) {
  const s = K4(i) ? i.map(av) : av(i),
    l = { done: !1, value: t[0] },
    u = a$(r && r.length === t.length ? r : s$(t), e),
    d = o$(u, t, { ease: Array.isArray(s) ? s : l$(t, s) });
  return {
    calculatedDuration: e,
    next: (f) => ((l.value = d(f)), (l.done = f >= e), l),
  };
}
const u$ = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: () => Je.update(t, !0),
      stop: () => ho(t),
      now: () => (Ct.isProcessing ? Ct.timestamp : ur.now()),
    };
  },
  c$ = { decay: iv, inertia: iv, tween: Cc, keyframes: Cc, spring: lx },
  d$ = (e) => e / 100;
class wm extends rx {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: f } = this.options;
        f && f();
      });
    const { name: r, motionValue: i, element: s, keyframes: l } = this.options,
      u = (s == null ? void 0 : s.KeyframeResolver) || pm,
      d = (f, p) => this.onKeyframesResolved(f, p);
    (this.resolver = new u(l, d, r, i, s)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: l,
        velocity: u = 0,
      } = this.options,
      d = bm(r) ? r : c$[r] || Cc;
    let f, p;
    d !== Cc &&
      typeof t[0] != "number" &&
      ((f = rl(d$, dx(t[0], t[1]))), (t = [0, 100]));
    const m = d({ ...this.options, keyframes: t });
    l === "mirror" &&
      (p = d({ ...this.options, keyframes: [...t].reverse(), velocity: -u })),
      m.calculatedDuration === null && (m.calculatedDuration = ax(m));
    const { calculatedDuration: y } = m,
      b = y + s,
      _ = b * (i + 1) - s;
    return {
      generator: m,
      mirroredGenerator: p,
      mapPercentToKeyframes: f,
      calculatedDuration: y,
      resolvedDuration: b,
      totalDuration: _,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, r = !1) {
    const { resolved: i } = this;
    if (!i) {
      const { keyframes: Y } = this.options;
      return { done: !0, value: Y[Y.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: l,
      mirroredGenerator: u,
      mapPercentToKeyframes: d,
      keyframes: f,
      calculatedDuration: p,
      totalDuration: m,
      resolvedDuration: y,
    } = i;
    if (this.startTime === null) return l.next(0);
    const {
      delay: b,
      repeat: _,
      repeatType: S,
      repeatDelay: w,
      onUpdate: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - m / this.speed, this.startTime)),
      r
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const T = this.currentTime - b * (this.speed >= 0 ? 1 : -1),
      O = this.speed >= 0 ? T < 0 : T > m;
    (this.currentTime = Math.max(T, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = m);
    let z = this.currentTime,
      W = l;
    if (_) {
      const Y = Math.min(this.currentTime, m) / y;
      let le = Math.floor(Y),
        ce = Y % 1;
      !ce && Y >= 1 && (ce = 1),
        ce === 1 && le--,
        (le = Math.min(le, _ + 1)),
        !!(le % 2) &&
          (S === "reverse"
            ? ((ce = 1 - ce), w && (ce -= w / y))
            : S === "mirror" && (W = u)),
        (z = Or(0, 1, ce) * y);
    }
    const E = O ? { done: !1, value: f[0] } : W.next(z);
    d && (E.value = d(E.value));
    let { done: I } = E;
    !O &&
      p !== null &&
      (I = this.speed >= 0 ? this.currentTime >= m : this.currentTime <= 0);
    const U =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && I));
    return (
      U && s !== void 0 && (E.value = Kc(f, this.options, s)),
      x && x(E.value),
      U && this.finish(),
      E
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ar(t.calculatedDuration) : 0;
  }
  get time() {
    return Ar(this.currentTime);
  }
  set time(t) {
    (t = Rr(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    (this.playbackSpeed = t), r && (this.time = Ar(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = u$, onPlay: r, startTime: i } = this.options;
    this.driver || (this.driver = t((l) => this.tick(l))), r && r();
    const s = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = s)
      : (this.startTime = i ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const f$ = new Set(["opacity", "clipPath", "filter", "transform"]);
function km(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const h$ = { linearEasing: void 0 };
function p$(e, t) {
  const r = km(e);
  return () => {
    var i;
    return (i = h$[t]) !== null && i !== void 0 ? i : r();
  };
}
const _c = p$(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function fx(e) {
  return !!(
    (typeof e == "function" && _c()) ||
    !e ||
    (typeof e == "string" && (e in vp || _c())) ||
    Sm(e) ||
    (Array.isArray(e) && e.every(fx))
  );
}
const wa = ([e, t, r, i]) => `cubic-bezier(${e}, ${t}, ${r}, ${i})`,
  vp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: wa([0, 0.65, 0.55, 1]),
    circOut: wa([0.55, 0, 1, 0.45]),
    backIn: wa([0.31, 0.01, 0.66, -0.59]),
    backOut: wa([0.33, 1.53, 0.69, 0.99]),
  };
function hx(e, t) {
  if (e)
    return typeof e == "function" && _c()
      ? ox(e, t)
      : Sm(e)
      ? wa(e)
      : Array.isArray(e)
      ? e.map((r) => hx(r, t) || vp.easeOut)
      : vp[e];
}
function m$(
  e,
  t,
  r,
  {
    delay: i = 0,
    duration: s = 300,
    repeat: l = 0,
    repeatType: u = "loop",
    ease: d = "easeInOut",
    times: f,
  } = {}
) {
  const p = { [t]: r };
  f && (p.offset = f);
  const m = hx(d, s);
  return (
    Array.isArray(m) && (p.easing = m),
    e.animate(p, {
      delay: i,
      duration: s,
      easing: Array.isArray(m) ? "linear" : m,
      fill: "both",
      iterations: l + 1,
      direction: u === "reverse" ? "alternate" : "normal",
    })
  );
}
function cv(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const g$ = km(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Pc = 10,
  y$ = 2e4;
function v$(e) {
  return bm(e.type) || e.type === "spring" || !fx(e.ease);
}
function b$(e, t) {
  const r = new wm({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let i = { done: !1, value: e[0] };
  const s = [];
  let l = 0;
  for (; !i.done && l < y$; ) (i = r.sample(l)), s.push(i.value), (l += Pc);
  return { times: void 0, keyframes: s, duration: l - Pc, ease: "linear" };
}
const px = { anticipate: DS, backInOut: NS, circInOut: FS };
function S$(e) {
  return e in px;
}
class dv extends rx {
  constructor(t) {
    super(t);
    const { name: r, motionValue: i, element: s, keyframes: l } = this.options;
    (this.resolver = new nx(
      l,
      (u, d) => this.onKeyframesResolved(u, d),
      r,
      i,
      s
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    var i;
    let {
      duration: s = 300,
      times: l,
      ease: u,
      type: d,
      motionValue: f,
      name: p,
      startTime: m,
    } = this.options;
    if (!(!((i = f.owner) === null || i === void 0) && i.current)) return !1;
    if (
      (typeof u == "string" && _c() && S$(u) && (u = px[u]), v$(this.options))
    ) {
      const {
          onComplete: b,
          onUpdate: _,
          motionValue: S,
          element: w,
          ...x
        } = this.options,
        T = b$(t, x);
      (t = T.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (s = T.duration),
        (l = T.times),
        (u = T.ease),
        (d = "keyframes");
    }
    const y = m$(f.owner.current, p, t, {
      ...this.options,
      duration: s,
      times: l,
      ease: u,
    });
    return (
      (y.startTime = m ?? this.calcStartTime()),
      this.pendingTimeline
        ? (cv(y, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (y.onfinish = () => {
            const { onComplete: b } = this.options;
            f.set(Kc(t, this.options, r)),
              b && b(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: y, duration: s, times: l, type: d, ease: u, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: r } = t;
    return Ar(r);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: r } = t;
    return Ar(r.currentTime || 0);
  }
  set time(t) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: i } = r;
    i.currentTime = Rr(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: r } = t;
    return r.playbackRate;
  }
  set speed(t) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: i } = r;
    i.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: r } = t;
    return r.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: r } = t;
    return r.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: r } = this;
      if (!r) return rn;
      const { animation: i } = r;
      cv(i, t);
    }
    return rn;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: r } = t;
    r.playState === "finished" && this.updateFinishedPromise(), r.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: r } = t;
    r.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: r,
      keyframes: i,
      duration: s,
      type: l,
      ease: u,
      times: d,
    } = t;
    if (r.playState === "idle" || r.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: p,
          onUpdate: m,
          onComplete: y,
          element: b,
          ..._
        } = this.options,
        S = new wm({
          ..._,
          keyframes: i,
          duration: s,
          type: l,
          ease: u,
          times: d,
          isGenerator: !0,
        }),
        w = Rr(this.time);
      p.setWithVelocity(S.sample(w - Pc).value, S.sample(w).value, Pc);
    }
    const { onStop: f } = this.options;
    f && f(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: r,
      name: i,
      repeatDelay: s,
      repeatType: l,
      damping: u,
      type: d,
    } = t;
    return (
      g$() &&
      i &&
      f$.has(i) &&
      r &&
      r.owner &&
      r.owner.current instanceof HTMLElement &&
      !r.owner.getProps().onUpdate &&
      !s &&
      l !== "mirror" &&
      u !== 0 &&
      d !== "inertia"
    );
  }
}
const x$ = km(() => window.ScrollTimeline !== void 0);
class w$ {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, r) {
    return Promise.all(this.animations).then(t).catch(r);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, r) {
    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = r;
  }
  attachTimeline(t, r) {
    const i = this.animations.map((s) =>
      x$() && s.attachTimeline ? s.attachTimeline(t) : r(s)
    );
    return () => {
      i.forEach((s, l) => {
        s && s(), this.animations[l].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let r = 0; r < this.animations.length; r++)
      t = Math.max(t, this.animations[r].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((r) => r[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function k$({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: i,
  staggerDirection: s,
  repeat: l,
  repeatType: u,
  repeatDelay: d,
  from: f,
  elapsed: p,
  ...m
}) {
  return !!Object.keys(m).length;
}
const Cm =
    (e, t, r, i = {}, s, l) =>
    (u) => {
      const d = cm(i, e) || {},
        f = d.delay || i.delay || 0;
      let { elapsed: p = 0 } = i;
      p = p - Rr(f);
      let m = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...d,
        delay: -p,
        onUpdate: (b) => {
          t.set(b), d.onUpdate && d.onUpdate(b);
        },
        onComplete: () => {
          u(), d.onComplete && d.onComplete();
        },
        name: e,
        motionValue: t,
        element: l ? void 0 : s,
      };
      k$(d) || (m = { ...m, ...G3(e, m) }),
        m.duration && (m.duration = Rr(m.duration)),
        m.repeatDelay && (m.repeatDelay = Rr(m.repeatDelay)),
        m.from !== void 0 && (m.keyframes[0] = m.from);
      let y = !1;
      if (
        ((m.type === !1 || (m.duration === 0 && !m.repeatDelay)) &&
          ((m.duration = 0), m.delay === 0 && (y = !0)),
        y && !l && t.get() !== void 0)
      ) {
        const b = Kc(m.keyframes, d);
        if (b !== void 0)
          return (
            Je.update(() => {
              m.onUpdate(b), m.onComplete();
            }),
            new w$([])
          );
      }
      return !l && dv.supports(m) ? new dv(m) : new wm(m);
    },
  C$ = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  _$ = (e) => (up(e) ? e[e.length - 1] || 0 : e);
function _m(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Pm(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Tm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return _m(this.subscriptions, t), () => Pm(this.subscriptions, t);
  }
  notify(t, r, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, r, i);
      else
        for (let l = 0; l < s; l++) {
          const u = this.subscriptions[l];
          u && u(t, r, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const fv = 30,
  P$ = (e) => !isNaN(parseFloat(e));
class T$ {
  constructor(t, r = {}) {
    (this.version = "11.15.0"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (i, s = !0) => {
        const l = ur.now();
        this.updatedAt !== l && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(i),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = r.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = ur.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = P$(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Tm());
    const i = this.events[t].add(r);
    return t === "change"
      ? () => {
          i(),
            Je.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : i;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    (this.passiveEffect = t), (this.stopPassiveEffect = r);
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, i) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - i);
  }
  jump(t, r = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ur.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > fv
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, fv);
    return ix(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = t(r)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function qa(e, t) {
  return new T$(e, t);
}
function E$(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, qa(r));
}
function R$(e, t) {
  const r = qc(e, t);
  let { transitionEnd: i = {}, transition: s = {}, ...l } = r || {};
  l = { ...l, ...i };
  for (const u in l) {
    const d = _$(l[u]);
    E$(e, u, d);
  }
}
const Em = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  A$ = "framerAppearId",
  mx = "data-" + Em(A$);
function gx(e) {
  return e.props[mx];
}
const Lt = (e) => !!(e && e.getVelocity);
function $$(e) {
  return !!(Lt(e) && e.add);
}
function bp(e, t) {
  const r = e.getValue("willChange");
  if ($$(r)) return r.add(t);
}
function O$({ protectedKeys: e, needsAnimating: t }, r) {
  const i = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), i;
}
function yx(e, t, { delay: r = 0, transitionOverride: i, type: s } = {}) {
  var l;
  let { transition: u = e.getDefaultTransition(), transitionEnd: d, ...f } = t;
  i && (u = i);
  const p = [],
    m = s && e.animationState && e.animationState.getState()[s];
  for (const y in f) {
    const b = e.getValue(
        y,
        (l = e.latestValues[y]) !== null && l !== void 0 ? l : null
      ),
      _ = f[y];
    if (_ === void 0 || (m && O$(m, y))) continue;
    const S = { delay: r, ...cm(u || {}, y) };
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const T = gx(e);
      if (T) {
        const O = window.MotionHandoffAnimation(T, y, Je);
        O !== null && ((S.startTime = O), (w = !0));
      }
    }
    bp(e, y),
      b.start(
        Cm(y, b, _, e.shouldReduceMotion && ei.has(y) ? { type: !1 } : S, e, w)
      );
    const x = b.animation;
    x && p.push(x);
  }
  return (
    d &&
      Promise.all(p).then(() => {
        Je.update(() => {
          d && R$(e, d);
        });
      }),
    p
  );
}
function Sp(e, t, r = {}) {
  var i;
  const s = qc(
    e,
    t,
    r.type === "exit"
      ? (i = e.presenceContext) === null || i === void 0
        ? void 0
        : i.custom
      : void 0
  );
  let { transition: l = e.getDefaultTransition() || {} } = s || {};
  r.transitionOverride && (l = r.transitionOverride);
  const u = s ? () => Promise.all(yx(e, s, r)) : () => Promise.resolve(),
    d =
      e.variantChildren && e.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: y,
              staggerDirection: b,
            } = l;
            return M$(e, t, m + p, y, b, r);
          }
        : () => Promise.resolve(),
    { when: f } = l;
  if (f) {
    const [p, m] = f === "beforeChildren" ? [u, d] : [d, u];
    return p().then(() => m());
  } else return Promise.all([u(), d(r.delay)]);
}
function M$(e, t, r = 0, i = 0, s = 1, l) {
  const u = [],
    d = (e.variantChildren.size - 1) * i,
    f = s === 1 ? (p = 0) => p * i : (p = 0) => d - p * i;
  return (
    Array.from(e.variantChildren)
      .sort(z$)
      .forEach((p, m) => {
        p.notify("AnimationStart", t),
          u.push(
            Sp(p, t, { ...l, delay: r + f(m) }).then(() =>
              p.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(u)
  );
}
function z$(e, t) {
  return e.sortNodePosition(t);
}
function j$(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let i;
  if (Array.isArray(t)) {
    const s = t.map((l) => Sp(e, l, r));
    i = Promise.all(s);
  } else if (typeof t == "string") i = Sp(e, t, r);
  else {
    const s = typeof t == "function" ? qc(e, t, r.custom) : t;
    i = Promise.all(yx(e, s, r));
  }
  return i.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const L$ = um.length;
function vx(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const r = e.parent ? vx(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < L$; r++) {
    const i = um[r],
      s = e.props[i];
    (Ua(s) || s === !1) && (t[i] = s);
  }
  return t;
}
const N$ = [...lm].reverse(),
  D$ = lm.length;
function I$(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: i }) => j$(e, r, i)));
}
function F$(e) {
  let t = I$(e),
    r = hv(),
    i = !0;
  const s = (f) => (p, m) => {
    var y;
    const b = qc(
      e,
      m,
      f === "exit"
        ? (y = e.presenceContext) === null || y === void 0
          ? void 0
          : y.custom
        : void 0
    );
    if (b) {
      const { transition: _, transitionEnd: S, ...w } = b;
      p = { ...p, ...w, ...S };
    }
    return p;
  };
  function l(f) {
    t = f(e);
  }
  function u(f) {
    const { props: p } = e,
      m = vx(e.parent) || {},
      y = [],
      b = new Set();
    let _ = {},
      S = 1 / 0;
    for (let x = 0; x < D$; x++) {
      const T = N$[x],
        O = r[T],
        z = p[T] !== void 0 ? p[T] : m[T],
        W = Ua(z),
        E = T === f ? O.isActive : null;
      E === !1 && (S = x);
      let I = z === m[T] && z !== p[T] && W;
      if (
        (I && i && e.manuallyAnimateOnMount && (I = !1),
        (O.protectedKeys = { ..._ }),
        (!O.isActive && E === null) ||
          (!z && !O.prevProp) ||
          Hc(z) ||
          typeof z == "boolean")
      )
        continue;
      const U = B$(O.prevProp, z);
      let Y = U || (T === f && O.isActive && !I && W) || (x > S && W),
        le = !1;
      const ce = Array.isArray(z) ? z : [z];
      let ve = ce.reduce(s(T), {});
      E === !1 && (ve = {});
      const { prevResolvedValues: be = {} } = O,
        Se = { ...be, ...ve },
        $e = (de) => {
          (Y = !0),
            b.has(de) && ((le = !0), b.delete(de)),
            (O.needsAnimating[de] = !0);
          const X = e.getValue(de);
          X && (X.liveStyle = !1);
        };
      for (const de in Se) {
        const X = ve[de],
          ie = be[de];
        if (_.hasOwnProperty(de)) continue;
        let J = !1;
        up(X) && up(ie) ? (J = !$S(X, ie)) : (J = X !== ie),
          J
            ? X != null
              ? $e(de)
              : b.add(de)
            : X !== void 0 && b.has(de)
            ? $e(de)
            : (O.protectedKeys[de] = !0);
      }
      (O.prevProp = z),
        (O.prevResolvedValues = ve),
        O.isActive && (_ = { ..._, ...ve }),
        i && e.blockInitialAnimation && (Y = !1),
        Y &&
          (!(I && U) || le) &&
          y.push(...ce.map((de) => ({ animation: de, options: { type: T } })));
    }
    if (b.size) {
      const x = {};
      b.forEach((T) => {
        const O = e.getBaseTarget(T),
          z = e.getValue(T);
        z && (z.liveStyle = !0), (x[T] = O ?? null);
      }),
        y.push({ animation: x });
    }
    let w = !!y.length;
    return (
      i &&
        (p.initial === !1 || p.initial === p.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (i = !1),
      w ? t(y) : Promise.resolve()
    );
  }
  function d(f, p) {
    var m;
    if (r[f].isActive === p) return Promise.resolve();
    (m = e.variantChildren) === null ||
      m === void 0 ||
      m.forEach((b) => {
        var _;
        return (_ = b.animationState) === null || _ === void 0
          ? void 0
          : _.setActive(f, p);
      }),
      (r[f].isActive = p);
    const y = u(f);
    for (const b in r) r[b].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: u,
    setActive: d,
    setAnimateFunction: l,
    getState: () => r,
    reset: () => {
      (r = hv()), (i = !0);
    },
  };
}
function B$(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !$S(t, e) : !1;
}
function Do(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function hv() {
  return {
    animate: Do(!0),
    whileInView: Do(),
    whileHover: Do(),
    whileTap: Do(),
    whileDrag: Do(),
    whileFocus: Do(),
    exit: Do(),
  };
}
class go {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class V$ extends go {
  constructor(t) {
    super(t), t.animationState || (t.animationState = F$(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Hc(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let U$ = 0;
class W$ extends go {
  constructor() {
    super(...arguments), (this.id = U$++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const s = this.node.animationState.setActive("exit", !t);
    r && !t && s.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const H$ = { animation: { Feature: V$ }, exit: { Feature: W$ } },
  Ln = { x: !1, y: !1 };
function bx() {
  return Ln.x || Ln.y;
}
function q$(e, t, r) {
  var i;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const l = (i = void 0) !== null && i !== void 0 ? i : s.querySelectorAll(e);
    return l ? Array.from(l) : [];
  }
  return Array.from(e);
}
function Sx(e, t) {
  const r = q$(e),
    i = new AbortController(),
    s = { passive: !0, ...t, signal: i.signal };
  return [r, s, () => i.abort()];
}
function pv(e) {
  return (t) => {
    t.pointerType === "touch" || bx() || e(t);
  };
}
function K$(e, t, r = {}) {
  const [i, s, l] = Sx(e, r),
    u = pv((d) => {
      const { target: f } = d,
        p = t(d);
      if (!p || !f) return;
      const m = pv((y) => {
        p(y), f.removeEventListener("pointerleave", m);
      });
      f.addEventListener("pointerleave", m, s);
    });
  return (
    i.forEach((d) => {
      d.addEventListener("pointerenter", u, s);
    }),
    l
  );
}
const Rm = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  ka = new WeakSet();
function mv(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function xh(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const G$ = (e, t) => {
    const r = e.currentTarget;
    if (!r) return;
    const i = mv(() => {
      if (ka.has(r)) return;
      xh(r, "down");
      const s = mv(() => {
          xh(r, "up");
        }),
        l = () => xh(r, "cancel");
      r.addEventListener("keyup", s, t), r.addEventListener("blur", l, t);
    });
    r.addEventListener("keydown", i, t),
      r.addEventListener("blur", () => r.removeEventListener("keydown", i), t);
  },
  Y$ = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function X$(e) {
  return Y$.has(e.tagName) || e.tabIndex !== -1;
}
const xx = (e, t) => (t ? (e === t ? !0 : xx(e, t.parentElement)) : !1);
function gv(e) {
  return Rm(e) && !bx();
}
function Q$(e, t, r = {}) {
  const [i, s, l] = Sx(e, r),
    u = (d) => {
      const f = d.currentTarget;
      if (!gv(d) || ka.has(f)) return;
      ka.add(f);
      const p = t(d),
        m = (_, S) => {
          window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", b),
            !(!gv(_) || !ka.has(f)) &&
              (ka.delete(f), p && p(_, { success: S }));
        },
        y = (_) => {
          m(_, r.useGlobalTarget || xx(f, _.target));
        },
        b = (_) => {
          m(_, !1);
        };
      window.addEventListener("pointerup", y, s),
        window.addEventListener("pointercancel", b, s);
    };
  return (
    i.forEach((d) => {
      X$(d) || (d.tabIndex = 0),
        (r.useGlobalTarget ? window : d).addEventListener("pointerdown", u, s),
        d.addEventListener("focus", (p) => G$(p, s), s);
    }),
    l
  );
}
function J$(e) {
  return e === "x" || e === "y"
    ? Ln[e]
      ? null
      : ((Ln[e] = !0),
        () => {
          Ln[e] = !1;
        })
    : Ln.x || Ln.y
    ? null
    : ((Ln.x = Ln.y = !0),
      () => {
        Ln.x = Ln.y = !1;
      });
}
function ol(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const Z$ = (e) => (t) => Rm(t) && e(t, ol(t));
function Ka(e, t, r, i = { passive: !0 }) {
  return e.addEventListener(t, r, i), () => e.removeEventListener(t, r);
}
function Ma(e, t, r, i) {
  return Ka(e, t, Z$(r), i);
}
const yv = (e, t) => Math.abs(e - t);
function eO(e, t) {
  const r = yv(e.x, t.x),
    i = yv(e.y, t.y);
  return Math.sqrt(r ** 2 + i ** 2);
}
class wx {
  constructor(
    t,
    r,
    { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: l = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const y = kh(this.lastMoveEventInfo, this.history),
          b = this.startEvent !== null,
          _ = eO(y.offset, { x: 0, y: 0 }) >= 3;
        if (!b && !_) return;
        const { point: S } = y,
          { timestamp: w } = Ct;
        this.history.push({ ...S, timestamp: w });
        const { onStart: x, onMove: T } = this.handlers;
        b ||
          (x && x(this.lastMoveEvent, y),
          (this.startEvent = this.lastMoveEvent)),
          T && T(this.lastMoveEvent, y);
      }),
      (this.handlePointerMove = (y, b) => {
        (this.lastMoveEvent = y),
          (this.lastMoveEventInfo = wh(b, this.transformPagePoint)),
          Je.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (y, b) => {
        this.end();
        const { onEnd: _, onSessionEnd: S, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const x = kh(
          y.type === "pointercancel"
            ? this.lastMoveEventInfo
            : wh(b, this.transformPagePoint),
          this.history
        );
        this.startEvent && _ && _(y, x), S && S(y, x);
      }),
      !Rm(t))
    )
      return;
    (this.dragSnapToOrigin = l),
      (this.handlers = r),
      (this.transformPagePoint = i),
      (this.contextWindow = s || window);
    const u = ol(t),
      d = wh(u, this.transformPagePoint),
      { point: f } = d,
      { timestamp: p } = Ct;
    this.history = [{ ...f, timestamp: p }];
    const { onSessionStart: m } = r;
    m && m(t, kh(d, this.history)),
      (this.removeListeners = rl(
        Ma(this.contextWindow, "pointermove", this.handlePointerMove),
        Ma(this.contextWindow, "pointerup", this.handlePointerUp),
        Ma(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ho(this.updatePoint);
  }
}
function wh(e, t) {
  return t ? { point: t(e.point) } : e;
}
function vv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function kh({ point: e }, t) {
  return {
    point: e,
    delta: vv(e, kx(t)),
    offset: vv(e, tO(t)),
    velocity: nO(t, 0.1),
  };
}
function tO(e) {
  return e[0];
}
function kx(e) {
  return e[e.length - 1];
}
function nO(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    i = null;
  const s = kx(e);
  for (; r >= 0 && ((i = e[r]), !(s.timestamp - i.timestamp > Rr(t))); ) r--;
  if (!i) return { x: 0, y: 0 };
  const l = Ar(s.timestamp - i.timestamp);
  if (l === 0) return { x: 0, y: 0 };
  const u = { x: (s.x - i.x) / l, y: (s.y - i.y) / l };
  return u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u;
}
function Ki(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const Cx = 1e-4,
  rO = 1 - Cx,
  oO = 1 + Cx,
  _x = 0.01,
  iO = 0 - _x,
  sO = 0 + _x;
function sn(e) {
  return e.max - e.min;
}
function aO(e, t, r) {
  return Math.abs(e - t) <= r;
}
function bv(e, t, r, i = 0.5) {
  (e.origin = i),
    (e.originPoint = nt(t.min, t.max, e.origin)),
    (e.scale = sn(r) / sn(t)),
    (e.translate = nt(r.min, r.max, e.origin) - e.originPoint),
    ((e.scale >= rO && e.scale <= oO) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= iO && e.translate <= sO) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function za(e, t, r, i) {
  bv(e.x, t.x, r.x, i ? i.originX : void 0),
    bv(e.y, t.y, r.y, i ? i.originY : void 0);
}
function Sv(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + sn(t));
}
function lO(e, t, r) {
  Sv(e.x, t.x, r.x), Sv(e.y, t.y, r.y);
}
function xv(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + sn(t));
}
function ja(e, t, r) {
  xv(e.x, t.x, r.x), xv(e.y, t.y, r.y);
}
function uO(e, { min: t, max: r }, i) {
  return (
    t !== void 0 && e < t
      ? (e = i ? nt(t, e, i.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = i ? nt(r, e, i.max) : Math.min(e, r)),
    e
  );
}
function wv(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function cO(e, { top: t, left: r, bottom: i, right: s }) {
  return { x: wv(e.x, r, s), y: wv(e.y, t, i) };
}
function kv(e, t) {
  let r = t.min - e.min,
    i = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, i] = [i, r]), { min: r, max: i };
}
function dO(e, t) {
  return { x: kv(e.x, t.x), y: kv(e.y, t.y) };
}
function fO(e, t) {
  let r = 0.5;
  const i = sn(e),
    s = sn(t);
  return (
    s > i
      ? (r = us(t.min, t.max - i, e.min))
      : i > s && (r = us(e.min, e.max - s, t.min)),
    Or(0, 1, r)
  );
}
function hO(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const xp = 0.35;
function pO(e = xp) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = xp),
    { x: Cv(e, "left", "right"), y: Cv(e, "top", "bottom") }
  );
}
function Cv(e, t, r) {
  return { min: _v(e, t), max: _v(e, r) };
}
function _v(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Pv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Gi = () => ({ x: Pv(), y: Pv() }),
  Tv = () => ({ min: 0, max: 0 }),
  at = () => ({ x: Tv(), y: Tv() });
function kn(e) {
  return [e("x"), e("y")];
}
function Px({ top: e, left: t, right: r, bottom: i }) {
  return { x: { min: t, max: r }, y: { min: e, max: i } };
}
function mO({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function gO(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    i = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: i.y, right: i.x };
}
function Ch(e) {
  return e === void 0 || e === 1;
}
function wp({ scale: e, scaleX: t, scaleY: r }) {
  return !Ch(e) || !Ch(t) || !Ch(r);
}
function Io(e) {
  return (
    wp(e) ||
    Tx(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Tx(e) {
  return Ev(e.x) || Ev(e.y);
}
function Ev(e) {
  return e && e !== "0%";
}
function Tc(e, t, r) {
  const i = e - r,
    s = t * i;
  return r + s;
}
function Rv(e, t, r, i, s) {
  return s !== void 0 && (e = Tc(e, s, i)), Tc(e, r, i) + t;
}
function kp(e, t = 0, r = 1, i, s) {
  (e.min = Rv(e.min, t, r, i, s)), (e.max = Rv(e.max, t, r, i, s));
}
function Ex(e, { x: t, y: r }) {
  kp(e.x, t.translate, t.scale, t.originPoint),
    kp(e.y, r.translate, r.scale, r.originPoint);
}
const Av = 0.999999999999,
  $v = 1.0000000000001;
function yO(e, t, r, i = !1) {
  const s = r.length;
  if (!s) return;
  t.x = t.y = 1;
  let l, u;
  for (let d = 0; d < s; d++) {
    (l = r[d]), (u = l.projectionDelta);
    const { visualElement: f } = l.options;
    (f && f.props.style && f.props.style.display === "contents") ||
      (i &&
        l.options.layoutScroll &&
        l.scroll &&
        l !== l.root &&
        Xi(e, { x: -l.scroll.offset.x, y: -l.scroll.offset.y }),
      u && ((t.x *= u.x.scale), (t.y *= u.y.scale), Ex(e, u)),
      i && Io(l.latestValues) && Xi(e, l.latestValues));
  }
  t.x < $v && t.x > Av && (t.x = 1), t.y < $v && t.y > Av && (t.y = 1);
}
function Yi(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Ov(e, t, r, i, s = 0.5) {
  const l = nt(e.min, e.max, s);
  kp(e, t, r, l, i);
}
function Xi(e, t) {
  Ov(e.x, t.x, t.scaleX, t.scale, t.originX),
    Ov(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Rx(e, t) {
  return Px(gO(e.getBoundingClientRect(), t));
}
function vO(e, t, r) {
  const i = Rx(e, r),
    { scroll: s } = t;
  return s && (Yi(i.x, s.offset.x), Yi(i.y, s.offset.y)), i;
}
const Ax = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  bO = new WeakMap();
class SO {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = at()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (m) => {
        const { dragSnapToOrigin: y } = this.getProps();
        y ? this.pauseAnimation() : this.stopAnimation(),
          r && this.snapToCursor(ol(m).point);
      },
      l = (m, y) => {
        const { drag: b, dragPropagation: _, onDragStart: S } = this.getProps();
        if (
          b &&
          !_ &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = J$(b)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          kn((x) => {
            let T = this.getAxisMotionValue(x).get() || 0;
            if (lr.test(T)) {
              const { projection: O } = this.visualElement;
              if (O && O.layout) {
                const z = O.layout.layoutBox[x];
                z && (T = sn(z) * (parseFloat(T) / 100));
              }
            }
            this.originPoint[x] = T;
          }),
          S && Je.postRender(() => S(m, y)),
          bp(this.visualElement, "transform");
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      u = (m, y) => {
        const {
          dragPropagation: b,
          dragDirectionLock: _,
          onDirectionLock: S,
          onDrag: w,
        } = this.getProps();
        if (!b && !this.openDragLock) return;
        const { offset: x } = y;
        if (_ && this.currentDirection === null) {
          (this.currentDirection = xO(x)),
            this.currentDirection !== null && S && S(this.currentDirection);
          return;
        }
        this.updateAxis("x", y.point, x),
          this.updateAxis("y", y.point, x),
          this.visualElement.render(),
          w && w(m, y);
      },
      d = (m, y) => this.stop(m, y),
      f = () =>
        kn((m) => {
          var y;
          return (
            this.getAnimationState(m) === "paused" &&
            ((y = this.getAxisMotionValue(m).animation) === null || y === void 0
              ? void 0
              : y.play())
          );
        }),
      { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new wx(
      t,
      {
        onSessionStart: s,
        onStart: l,
        onMove: u,
        onSessionEnd: d,
        resumeAnimation: f,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: p,
        contextWindow: Ax(this.visualElement),
      }
    );
  }
  stop(t, r) {
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: s } = r;
    this.startAnimation(s);
    const { onDragEnd: l } = this.getProps();
    l && Je.postRender(() => l(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: i } = this.getProps();
    !i &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, i) {
    const { drag: s } = this.getProps();
    if (!i || !Nu(t, s, this.currentDirection)) return;
    const l = this.getAxisMotionValue(t);
    let u = this.originPoint[t] + i[t];
    this.constraints &&
      this.constraints[t] &&
      (u = uO(u, this.constraints[t], this.elastic[t])),
      l.set(u);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: i } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      l = this.constraints;
    r && Ki(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && s
      ? (this.constraints = cO(s.layoutBox, r))
      : (this.constraints = !1),
      (this.elastic = pO(i)),
      l !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        kn((u) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(u) &&
            (this.constraints[u] = hO(s.layoutBox[u], this.constraints[u]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Ki(t)) return !1;
    const i = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const l = vO(i, s.root, this.visualElement.getTransformPagePoint());
    let u = dO(s.layout.layoutBox, l);
    if (r) {
      const d = r(mO(u));
      (this.hasMutatedConstraints = !!d), d && (u = Px(d));
    }
    return u;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: i,
        dragElastic: s,
        dragTransition: l,
        dragSnapToOrigin: u,
        onDragTransitionEnd: d,
      } = this.getProps(),
      f = this.constraints || {},
      p = kn((m) => {
        if (!Nu(m, r, this.currentDirection)) return;
        let y = (f && f[m]) || {};
        u && (y = { min: 0, max: 0 });
        const b = s ? 200 : 1e6,
          _ = s ? 40 : 1e7,
          S = {
            type: "inertia",
            velocity: i ? t[m] : 0,
            bounceStiffness: b,
            bounceDamping: _,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...l,
            ...y,
          };
        return this.startAxisValueAnimation(m, S);
      });
    return Promise.all(p).then(d);
  }
  startAxisValueAnimation(t, r) {
    const i = this.getAxisMotionValue(t);
    return (
      bp(this.visualElement, t), i.start(Cm(t, i, 0, r, this.visualElement, !1))
    );
  }
  stopAnimation() {
    kn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    kn((t) => {
      var r;
      return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
        ? void 0
        : r.pause();
    });
  }
  getAnimationState(t) {
    var r;
    return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
      ? void 0
      : r.state;
  }
  getAxisMotionValue(t) {
    const r = `_drag${t.toUpperCase()}`,
      i = this.visualElement.getProps(),
      s = i[r];
    return (
      s ||
      this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    kn((r) => {
      const { drag: i } = this.getProps();
      if (!Nu(r, i, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        l = this.getAxisMotionValue(r);
      if (s && s.layout) {
        const { min: u, max: d } = s.layout.layoutBox[r];
        l.set(t[r] - nt(u, d, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: i } = this.visualElement;
    if (!Ki(r) || !i || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    kn((u) => {
      const d = this.getAxisMotionValue(u);
      if (d && this.constraints !== !1) {
        const f = d.get();
        s[u] = fO({ min: f, max: f }, this.constraints[u]);
      }
    });
    const { transformTemplate: l } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = l ? l({}, "") : "none"),
      i.root && i.root.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      kn((u) => {
        if (!Nu(u, t, null)) return;
        const d = this.getAxisMotionValue(u),
          { min: f, max: p } = this.constraints[u];
        d.set(nt(f, p, s[u]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    bO.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Ma(t, "pointerdown", (f) => {
        const { drag: p, dragListener: m = !0 } = this.getProps();
        p && m && this.start(f);
      }),
      i = () => {
        const { dragConstraints: f } = this.getProps();
        Ki(f) && f.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      l = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      Je.read(i);
    const u = Ka(window, "resize", () => this.scalePositionWithinConstraints()),
      d = s.addEventListener(
        "didUpdate",
        ({ delta: f, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (kn((m) => {
              const y = this.getAxisMotionValue(m);
              y &&
                ((this.originPoint[m] += f[m].translate),
                y.set(y.get() + f[m].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      u(), r(), l(), d && d();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: i = !1,
        dragPropagation: s = !1,
        dragConstraints: l = !1,
        dragElastic: u = xp,
        dragMomentum: d = !0,
      } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: l,
      dragElastic: u,
      dragMomentum: d,
    };
  }
}
function Nu(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function xO(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class wO extends go {
  constructor(t) {
    super(t),
      (this.removeGroupControls = rn),
      (this.removeListeners = rn),
      (this.controls = new SO(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || rn);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Mv = (e) => (t, r) => {
  e && Je.postRender(() => e(t, r));
};
class kO extends go {
  constructor() {
    super(...arguments), (this.removePointerDownListener = rn);
  }
  onPointerDown(t) {
    this.session = new wx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ax(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: i,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: Mv(t),
      onStart: Mv(r),
      onMove: i,
      onEnd: (l, u) => {
        delete this.session, s && Je.postRender(() => s(l, u));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ma(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const il = P.createContext(null);
function CO() {
  const e = P.useContext(il);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: i } = e,
    s = P.useId();
  P.useEffect(() => i(s), []);
  const l = P.useCallback(() => r && r(s), [s, r]);
  return !t && r ? [!1, l] : [!0];
}
function _O() {
  return PO(P.useContext(il));
}
function PO(e) {
  return e === null ? !0 : e.isPresent;
}
const Am = P.createContext({}),
  $x = P.createContext({}),
  cc = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function zv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const pa = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (ge.test(e)) e = parseFloat(e);
        else return e;
      const r = zv(e, t.target.x),
        i = zv(e, t.target.y);
      return `${r}% ${i}%`;
    },
  },
  TO = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const i = e,
        s = po.parse(e);
      if (s.length > 5) return i;
      const l = po.createTransformer(e),
        u = typeof s[0] != "number" ? 1 : 0,
        d = r.x.scale * t.x,
        f = r.y.scale * t.y;
      (s[0 + u] /= d), (s[1 + u] /= f);
      const p = nt(d, f, 0.5);
      return (
        typeof s[2 + u] == "number" && (s[2 + u] /= p),
        typeof s[3 + u] == "number" && (s[3 + u] /= p),
        l(s)
      );
    },
  },
  Ec = {};
function EO(e) {
  Object.assign(Ec, e);
}
const { schedule: $m, cancel: $I } = OS(queueMicrotask, !1);
class RO extends P.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: i,
        layoutId: s,
      } = this.props,
      { projection: l } = t;
    EO(AO),
      l &&
        (r.group && r.group.add(l),
        i && i.register && s && i.register(l),
        l.root.didUpdate(),
        l.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        l.setOptions({
          ...l.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (cc.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: i,
        drag: s,
        isPresent: l,
      } = this.props,
      u = i.projection;
    return (
      u &&
        ((u.isPresent = l),
        s || t.layoutDependency !== r || r === void 0
          ? u.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== l &&
          (l
            ? u.promote()
            : u.relegate() ||
              Je.postRender(() => {
                const d = u.getStack();
                (!d || !d.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      $m.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: i,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(s),
      i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ox(e) {
  const [t, r] = CO(),
    i = P.useContext(Am);
  return A.jsx(RO, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: P.useContext($x),
    isPresent: t,
    safeToRemove: r,
  });
}
const AO = {
    borderRadius: {
      ...pa,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: pa,
    borderTopRightRadius: pa,
    borderBottomLeftRadius: pa,
    borderBottomRightRadius: pa,
    boxShadow: TO,
  },
  Mx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  $O = Mx.length,
  jv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Lv = (e) => typeof e == "number" || ge.test(e);
function OO(e, t, r, i, s, l) {
  s
    ? ((e.opacity = nt(0, r.opacity !== void 0 ? r.opacity : 1, MO(i))),
      (e.opacityExit = nt(t.opacity !== void 0 ? t.opacity : 1, 0, zO(i))))
    : l &&
      (e.opacity = nt(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        i
      ));
  for (let u = 0; u < $O; u++) {
    const d = `border${Mx[u]}Radius`;
    let f = Nv(t, d),
      p = Nv(r, d);
    if (f === void 0 && p === void 0) continue;
    f || (f = 0),
      p || (p = 0),
      f === 0 || p === 0 || Lv(f) === Lv(p)
        ? ((e[d] = Math.max(nt(jv(f), jv(p), i), 0)),
          (lr.test(p) || lr.test(f)) && (e[d] += "%"))
        : (e[d] = p);
  }
  (t.rotate || r.rotate) && (e.rotate = nt(t.rotate || 0, r.rotate || 0, i));
}
function Nv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const MO = zx(0, 0.5, IS),
  zO = zx(0.5, 0.95, rn);
function zx(e, t, r) {
  return (i) => (i < e ? 0 : i > t ? 1 : r(us(e, t, i)));
}
function Dv(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function xn(e, t) {
  Dv(e.x, t.x), Dv(e.y, t.y);
}
function Iv(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Fv(e, t, r, i, s) {
  return (
    (e -= t), (e = Tc(e, 1 / r, i)), s !== void 0 && (e = Tc(e, 1 / s, i)), e
  );
}
function jO(e, t = 0, r = 1, i = 0.5, s, l = e, u = e) {
  if (
    (lr.test(t) &&
      ((t = parseFloat(t)), (t = nt(u.min, u.max, t / 100) - u.min)),
    typeof t != "number")
  )
    return;
  let d = nt(l.min, l.max, i);
  e === l && (d -= t),
    (e.min = Fv(e.min, t, r, d, s)),
    (e.max = Fv(e.max, t, r, d, s));
}
function Bv(e, t, [r, i, s], l, u) {
  jO(e, t[r], t[i], t[s], t.scale, l, u);
}
const LO = ["x", "scaleX", "originX"],
  NO = ["y", "scaleY", "originY"];
function Vv(e, t, r, i) {
  Bv(e.x, t, LO, r ? r.x : void 0, i ? i.x : void 0),
    Bv(e.y, t, NO, r ? r.y : void 0, i ? i.y : void 0);
}
function Uv(e) {
  return e.translate === 0 && e.scale === 1;
}
function jx(e) {
  return Uv(e.x) && Uv(e.y);
}
function Wv(e, t) {
  return e.min === t.min && e.max === t.max;
}
function DO(e, t) {
  return Wv(e.x, t.x) && Wv(e.y, t.y);
}
function Hv(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Lx(e, t) {
  return Hv(e.x, t.x) && Hv(e.y, t.y);
}
function qv(e) {
  return sn(e.x) / sn(e.y);
}
function Kv(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class IO {
  constructor() {
    this.members = [];
  }
  add(t) {
    _m(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Pm(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((s) => t === s);
    if (r === 0) return !1;
    let i;
    for (let s = r; s >= 0; s--) {
      const l = this.members[s];
      if (l.isPresent !== !1) {
        i = l;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(t, r) {
    const i = this.lead;
    if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
      i.instance && i.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = i),
        r && (t.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((t.snapshot = i.snapshot),
          (t.snapshot.latestValues = i.animationValues || i.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: i } = t;
      r.onExitComplete && r.onExitComplete(),
        i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function FO(e, t, r) {
  let i = "";
  const s = e.x.translate / t.x,
    l = e.y.translate / t.y,
    u = (r == null ? void 0 : r.z) || 0;
  if (
    ((s || l || u) && (i = `translate3d(${s}px, ${l}px, ${u}px) `),
    (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const {
      transformPerspective: p,
      rotate: m,
      rotateX: y,
      rotateY: b,
      skewX: _,
      skewY: S,
    } = r;
    p && (i = `perspective(${p}px) ${i}`),
      m && (i += `rotate(${m}deg) `),
      y && (i += `rotateX(${y}deg) `),
      b && (i += `rotateY(${b}deg) `),
      _ && (i += `skewX(${_}deg) `),
      S && (i += `skewY(${S}deg) `);
  }
  const d = e.x.scale * t.x,
    f = e.y.scale * t.y;
  return (d !== 1 || f !== 1) && (i += `scale(${d}, ${f})`), i || "none";
}
const BO = (e, t) => e.depth - t.depth;
class VO {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    _m(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Pm(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(BO),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function dc(e) {
  const t = Lt(e) ? e.get() : e;
  return C$(t) ? t.toValue() : t;
}
function UO(e, t) {
  const r = ur.now(),
    i = ({ timestamp: s }) => {
      const l = s - r;
      l >= t && (ho(i), e(l - t));
    };
  return Je.read(i, !0), () => ho(i);
}
function WO(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function HO(e, t, r) {
  const i = Lt(e) ? e : qa(e);
  return i.start(Cm("", i, t, r)), i.animation;
}
const Fo = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ca = typeof window < "u" && window.MotionDebug !== void 0,
  _h = ["", "X", "Y", "Z"],
  qO = { visibility: "hidden" },
  Gv = 1e3;
let KO = 0;
function Ph(e, t, r, i) {
  const { latestValues: s } = t;
  s[e] && ((r[e] = s[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
}
function Nx(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const r = gx(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: s, layoutId: l } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", Je, !(s || l));
  }
  const { parent: i } = e;
  i && !i.hasCheckedOptimisedAppear && Nx(i);
}
function Dx({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: i,
  resetTransform: s,
}) {
  return class {
    constructor(u = {}, d = t == null ? void 0 : t()) {
      (this.id = KO++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ca &&
              (Fo.totalNodes =
                Fo.resolvedTargetDeltas =
                Fo.recalculatedProjection =
                  0),
            this.nodes.forEach(XO),
            this.nodes.forEach(tM),
            this.nodes.forEach(nM),
            this.nodes.forEach(QO),
            Ca && window.MotionDebug.record(Fo);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = u),
        (this.root = d ? d.root || d : this),
        (this.path = d ? [...d.path, d] : []),
        (this.parent = d),
        (this.depth = d ? d.depth + 1 : 0);
      for (let f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new VO());
    }
    addEventListener(u, d) {
      return (
        this.eventHandlers.has(u) || this.eventHandlers.set(u, new Tm()),
        this.eventHandlers.get(u).add(d)
      );
    }
    notifyListeners(u, ...d) {
      const f = this.eventHandlers.get(u);
      f && f.notify(...d);
    }
    hasListeners(u) {
      return this.eventHandlers.has(u);
    }
    mount(u, d = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = WO(u)), (this.instance = u);
      const { layoutId: f, layout: p, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(u),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        d && (p || f) && (this.isLayoutDirty = !0),
        e)
      ) {
        let y;
        const b = () => (this.root.updateBlockedByResize = !1);
        e(u, () => {
          (this.root.updateBlockedByResize = !0),
            y && y(),
            (y = UO(b, 250)),
            cc.hasAnimatedSinceResize &&
              ((cc.hasAnimatedSinceResize = !1), this.nodes.forEach(Xv));
        });
      }
      f && this.root.registerSharedNode(f, this),
        this.options.animate !== !1 &&
          m &&
          (f || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: y,
              hasLayoutChanged: b,
              hasRelativeTargetChanged: _,
              layout: S,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const w =
                  this.options.transition || m.getDefaultTransition() || aM,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: T } =
                  m.getProps(),
                O = !this.targetLayout || !Lx(this.targetLayout, S) || _,
                z = !b && _;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                z ||
                (b && (O || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(y, z);
                const W = { ...cm(w, "layout"), onPlay: x, onComplete: T };
                (m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((W.delay = 0), (W.type = !1)),
                  this.startAnimation(W);
              } else
                b || Xv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = S;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const u = this.getStack();
      u && u.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        ho(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(rM),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: u } = this.options;
      return u && u.getProps().transformTemplate;
    }
    willUpdate(u = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Nx(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m];
        (y.shouldResetTransform = !0),
          y.updateScroll("snapshot"),
          y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: d, layout: f } = this.options;
      if (d === void 0 && !f) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        u && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Yv);
        return;
      }
      this.isUpdating || this.nodes.forEach(ZO),
        (this.isUpdating = !1),
        this.nodes.forEach(eM),
        this.nodes.forEach(GO),
        this.nodes.forEach(YO),
        this.clearAllSnapshots();
      const d = ur.now();
      (Ct.delta = Or(0, 1e3 / 60, d - Ct.timestamp)),
        (Ct.timestamp = d),
        (Ct.isProcessing = !0),
        gh.update.process(Ct),
        gh.preRender.process(Ct),
        gh.render.process(Ct),
        (Ct.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), $m.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(JO), this.sharedNodes.forEach(oM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Je.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Je.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let f = 0; f < this.path.length; f++) this.path[f].updateScroll();
      const u = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = at()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: d } = this.options;
      d &&
        d.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          u ? u.layoutBox : void 0
        );
    }
    updateScroll(u = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === u &&
          (d = !1),
        d)
      ) {
        const f = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: u,
          isRoot: f,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : f,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const u =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        d = this.projectionDelta && !jx(this.projectionDelta),
        f = this.getTransformTemplate(),
        p = f ? f(this.latestValues, "") : void 0,
        m = p !== this.prevTransformTemplateValue;
      u &&
        (d || Io(this.latestValues) || m) &&
        (s(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(u = !0) {
      const d = this.measurePageBox();
      let f = this.removeElementScroll(d);
      return (
        u && (f = this.removeTransform(f)),
        lM(f),
        {
          animationId: this.root.animationId,
          measuredBox: d,
          layoutBox: f,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: d } = this.options;
      if (!d) return at();
      const f = d.measureViewportBox();
      if (
        !(
          ((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) ||
          this.path.some(uM)
        )
      ) {
        const { scroll: m } = this.root;
        m && (Yi(f.x, m.offset.x), Yi(f.y, m.offset.y));
      }
      return f;
    }
    removeElementScroll(u) {
      var d;
      const f = at();
      if (
        (xn(f, u), !((d = this.scroll) === null || d === void 0) && d.wasRoot)
      )
        return f;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p],
          { scroll: y, options: b } = m;
        m !== this.root &&
          y &&
          b.layoutScroll &&
          (y.wasRoot && xn(f, u), Yi(f.x, y.offset.x), Yi(f.y, y.offset.y));
      }
      return f;
    }
    applyTransform(u, d = !1) {
      const f = at();
      xn(f, u);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        !d &&
          m.options.layoutScroll &&
          m.scroll &&
          m !== m.root &&
          Xi(f, { x: -m.scroll.offset.x, y: -m.scroll.offset.y }),
          Io(m.latestValues) && Xi(f, m.latestValues);
      }
      return Io(this.latestValues) && Xi(f, this.latestValues), f;
    }
    removeTransform(u) {
      const d = at();
      xn(d, u);
      for (let f = 0; f < this.path.length; f++) {
        const p = this.path[f];
        if (!p.instance || !Io(p.latestValues)) continue;
        wp(p.latestValues) && p.updateSnapshot();
        const m = at(),
          y = p.measurePageBox();
        xn(m, y),
          Vv(d, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, m);
      }
      return Io(this.latestValues) && Vv(d, this.latestValues), d;
    }
    setTargetDelta(u) {
      (this.targetDelta = u),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(u) {
      this.options = {
        ...this.options,
        ...u,
        crossfade: u.crossfade !== void 0 ? u.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ct.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(u = !1) {
      var d;
      const f = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== f;
      if (
        !(
          u ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((d = this.parent) === null || d === void 0) &&
            d.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: y, layoutId: b } = this.options;
      if (!(!this.layout || !(y || b))) {
        if (
          ((this.resolvedRelativeTargetAt = Ct.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const _ = this.getClosestProjectingParent();
          _ && _.layout && this.animationProgress !== 1
            ? ((this.relativeParent = _),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = at()),
              (this.relativeTargetOrigin = at()),
              ja(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                _.layout.layoutBox
              ),
              xn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = at()), (this.targetWithTransforms = at())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                lO(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : xn(this.target, this.layout.layoutBox),
                Ex(this.target, this.targetDelta))
              : xn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const _ = this.getClosestProjectingParent();
            _ &&
            !!_.resumingFrom == !!this.resumingFrom &&
            !_.options.layoutScroll &&
            _.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = _),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = at()),
                (this.relativeTargetOrigin = at()),
                ja(this.relativeTargetOrigin, this.target, _.target),
                xn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ca && Fo.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          wp(this.parent.latestValues) ||
          Tx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var u;
      const d = this.getLead(),
        f = !!this.resumingFrom || this !== d;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          (!((u = this.parent) === null || u === void 0) &&
            u.isProjectionDirty)) &&
          (p = !1),
        f &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Ct.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: m, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || y))
      )
        return;
      xn(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        _ = this.treeScale.y;
      yO(this.layoutCorrected, this.treeScale, this.path, f),
        d.layout &&
          !d.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((d.target = d.layout.layoutBox), (d.targetWithTransforms = at()));
      const { target: S } = d;
      if (!S) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Iv(this.prevProjectionDelta.x, this.projectionDelta.x),
          Iv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        za(this.projectionDelta, this.layoutCorrected, S, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== _ ||
          !Kv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Kv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", S)),
        Ca && Fo.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(u = !0) {
      var d;
      if (
        ((d = this.options.visualElement) === null ||
          d === void 0 ||
          d.scheduleRender(),
        u)
      ) {
        const f = this.getStack();
        f && f.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Gi()),
        (this.projectionDelta = Gi()),
        (this.projectionDeltaWithTransform = Gi());
    }
    setAnimationOrigin(u, d = !1) {
      const f = this.snapshot,
        p = f ? f.latestValues : {},
        m = { ...this.latestValues },
        y = Gi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !d);
      const b = at(),
        _ = f ? f.source : void 0,
        S = this.layout ? this.layout.source : void 0,
        w = _ !== S,
        x = this.getStack(),
        T = !x || x.members.length <= 1,
        O = !!(w && !T && this.options.crossfade === !0 && !this.path.some(sM));
      this.animationProgress = 0;
      let z;
      (this.mixTargetDelta = (W) => {
        const E = W / 1e3;
        Qv(y.x, u.x, E),
          Qv(y.y, u.y, E),
          this.setTargetDelta(y),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ja(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            iM(this.relativeTarget, this.relativeTargetOrigin, b, E),
            z && DO(this.relativeTarget, z) && (this.isProjectionDirty = !1),
            z || (z = at()),
            xn(z, this.relativeTarget)),
          w &&
            ((this.animationValues = m), OO(m, p, this.latestValues, E, O, T)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(u) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (ho(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Je.update(() => {
          (cc.hasAnimatedSinceResize = !0),
            (this.currentAnimation = HO(0, Gv, {
              ...u,
              onUpdate: (d) => {
                this.mixTargetDelta(d), u.onUpdate && u.onUpdate(d);
              },
              onComplete: () => {
                u.onComplete && u.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const u = this.getStack();
      u && u.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Gv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const u = this.getLead();
      let {
        targetWithTransforms: d,
        target: f,
        layout: p,
        latestValues: m,
      } = u;
      if (!(!d || !f || !p)) {
        if (
          this !== u &&
          this.layout &&
          p &&
          Ix(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          f = this.target || at();
          const y = sn(this.layout.layoutBox.x);
          (f.x.min = u.target.x.min), (f.x.max = f.x.min + y);
          const b = sn(this.layout.layoutBox.y);
          (f.y.min = u.target.y.min), (f.y.max = f.y.min + b);
        }
        xn(d, f),
          Xi(d, m),
          za(this.projectionDeltaWithTransform, this.layoutCorrected, d, m);
      }
    }
    registerSharedNode(u, d) {
      this.sharedNodes.has(u) || this.sharedNodes.set(u, new IO()),
        this.sharedNodes.get(u).add(d);
      const p = d.options.initialPromotionConfig;
      d.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(d)
            : void 0,
      });
    }
    isLead() {
      const u = this.getStack();
      return u ? u.lead === this : !0;
    }
    getLead() {
      var u;
      const { layoutId: d } = this.options;
      return d
        ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var u;
      const { layoutId: d } = this.options;
      return d
        ? (u = this.getStack()) === null || u === void 0
          ? void 0
          : u.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: u } = this.options;
      if (u) return this.root.sharedNodes.get(u);
    }
    promote({ needsReset: u, transition: d, preserveFollowOpacity: f } = {}) {
      const p = this.getStack();
      p && p.promote(this, f),
        u && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        d && this.setOptions({ transition: d });
    }
    relegate() {
      const u = this.getStack();
      return u ? u.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: u } = this.options;
      if (!u) return;
      let d = !1;
      const { latestValues: f } = u;
      if (
        ((f.z ||
          f.rotate ||
          f.rotateX ||
          f.rotateY ||
          f.rotateZ ||
          f.skewX ||
          f.skewY) &&
          (d = !0),
        !d)
      )
        return;
      const p = {};
      f.z && Ph("z", u, p, this.animationValues);
      for (let m = 0; m < _h.length; m++)
        Ph(`rotate${_h[m]}`, u, p, this.animationValues),
          Ph(`skew${_h[m]}`, u, p, this.animationValues);
      u.render();
      for (const m in p)
        u.setStaticValue(m, p[m]),
          this.animationValues && (this.animationValues[m] = p[m]);
      u.scheduleRender();
    }
    getProjectionStyles(u) {
      var d, f;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return qO;
      const p = { visibility: "" },
        m = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (p.opacity = ""),
          (p.pointerEvents = dc(u == null ? void 0 : u.pointerEvents) || ""),
          (p.transform = m ? m(this.latestValues, "") : "none"),
          p
        );
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        const w = {};
        return (
          this.options.layoutId &&
            ((w.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (w.pointerEvents = dc(u == null ? void 0 : u.pointerEvents) || "")),
          this.hasProjected &&
            !Io(this.latestValues) &&
            ((w.transform = m ? m({}, "") : "none"), (this.hasProjected = !1)),
          w
        );
      }
      const b = y.animationValues || y.latestValues;
      this.applyTransformsToTarget(),
        (p.transform = FO(
          this.projectionDeltaWithTransform,
          this.treeScale,
          b
        )),
        m && (p.transform = m(b, p.transform));
      const { x: _, y: S } = this.projectionDelta;
      (p.transformOrigin = `${_.origin * 100}% ${S.origin * 100}% 0`),
        y.animationValues
          ? (p.opacity =
              y === this
                ? (f =
                    (d = b.opacity) !== null && d !== void 0
                      ? d
                      : this.latestValues.opacity) !== null && f !== void 0
                  ? f
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : b.opacityExit)
          : (p.opacity =
              y === this
                ? b.opacity !== void 0
                  ? b.opacity
                  : ""
                : b.opacityExit !== void 0
                ? b.opacityExit
                : 0);
      for (const w in Ec) {
        if (b[w] === void 0) continue;
        const { correct: x, applyTo: T } = Ec[w],
          O = p.transform === "none" ? b[w] : x(b[w], y);
        if (T) {
          const z = T.length;
          for (let W = 0; W < z; W++) p[T[W]] = O;
        } else p[w] = O;
      }
      return (
        this.options.layoutId &&
          (p.pointerEvents =
            y === this
              ? dc(u == null ? void 0 : u.pointerEvents) || ""
              : "none"),
        p
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((u) => {
        var d;
        return (d = u.currentAnimation) === null || d === void 0
          ? void 0
          : d.stop();
      }),
        this.root.nodes.forEach(Yv),
        this.root.sharedNodes.clear();
    }
  };
}
function GO(e) {
  e.updateLayout();
}
function YO(e) {
  var t;
  const r =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = e.layout,
      { animationType: l } = e.options,
      u = r.source !== e.layout.source;
    l === "size"
      ? kn((y) => {
          const b = u ? r.measuredBox[y] : r.layoutBox[y],
            _ = sn(b);
          (b.min = i[y].min), (b.max = b.min + _);
        })
      : Ix(l, r.layoutBox, i) &&
        kn((y) => {
          const b = u ? r.measuredBox[y] : r.layoutBox[y],
            _ = sn(i[y]);
          (b.max = b.min + _),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[y].max = e.relativeTarget[y].min + _));
        });
    const d = Gi();
    za(d, i, r.layoutBox);
    const f = Gi();
    u ? za(f, e.applyTransform(s, !0), r.measuredBox) : za(f, i, r.layoutBox);
    const p = !jx(d);
    let m = !1;
    if (!e.resumeFrom) {
      const y = e.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: b, layout: _ } = y;
        if (b && _) {
          const S = at();
          ja(S, r.layoutBox, b.layoutBox);
          const w = at();
          ja(w, i, _.layoutBox),
            Lx(S, w) || (m = !0),
            y.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = S),
              (e.relativeParent = y));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: i,
      snapshot: r,
      delta: f,
      layoutDelta: d,
      hasLayoutChanged: p,
      hasRelativeTargetChanged: m,
    });
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options;
    i && i();
  }
  e.options.transition = void 0;
}
function XO(e) {
  Ca && Fo.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function QO(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function JO(e) {
  e.clearSnapshot();
}
function Yv(e) {
  e.clearMeasurements();
}
function ZO(e) {
  e.isLayoutDirty = !1;
}
function eM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Xv(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function tM(e) {
  e.resolveTargetDelta();
}
function nM(e) {
  e.calcProjection();
}
function rM(e) {
  e.resetSkewAndRotation();
}
function oM(e) {
  e.removeLeadSnapshot();
}
function Qv(e, t, r) {
  (e.translate = nt(t.translate, 0, r)),
    (e.scale = nt(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Jv(e, t, r, i) {
  (e.min = nt(t.min, r.min, i)), (e.max = nt(t.max, r.max, i));
}
function iM(e, t, r, i) {
  Jv(e.x, t.x, r.x, i), Jv(e.y, t.y, r.y, i);
}
function sM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const aM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Zv = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  e1 = Zv("applewebkit/") && !Zv("chrome/") ? Math.round : rn;
function t1(e) {
  (e.min = e1(e.min)), (e.max = e1(e.max));
}
function lM(e) {
  t1(e.x), t1(e.y);
}
function Ix(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !aO(qv(t), qv(r), 0.2))
  );
}
function uM(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const cM = Dx({
    attachResizeListener: (e, t) => Ka(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Th = { current: void 0 },
  Fx = Dx({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Th.current) {
        const e = new cM({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Th.current = e);
      }
      return Th.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  dM = {
    pan: { Feature: kO },
    drag: { Feature: wO, ProjectionNode: Fx, MeasureLayout: Ox },
  };
function n1(e, t, r) {
  const { props: i } = e;
  e.animationState &&
    i.whileHover &&
    e.animationState.setActive("whileHover", r === "Start");
  const s = "onHover" + r,
    l = i[s];
  l && Je.postRender(() => l(t, ol(t)));
}
class fM extends go {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = K$(
        t,
        (r) => (n1(this.node, r, "Start"), (i) => n1(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class hM extends go {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = rl(
      Ka(this.node.current, "focus", () => this.onFocus()),
      Ka(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function r1(e, t, r) {
  const { props: i } = e;
  e.animationState &&
    i.whileTap &&
    e.animationState.setActive("whileTap", r === "Start");
  const s = "onTap" + (r === "End" ? "" : r),
    l = i[s];
  l && Je.postRender(() => l(t, ol(t)));
}
class pM extends go {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Q$(
        t,
        (r) => (
          r1(this.node, r, "Start"),
          (i, { success: s }) => r1(this.node, i, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Cp = new WeakMap(),
  Eh = new WeakMap(),
  mM = (e) => {
    const t = Cp.get(e.target);
    t && t(e);
  },
  gM = (e) => {
    e.forEach(mM);
  };
function yM({ root: e, ...t }) {
  const r = e || document;
  Eh.has(r) || Eh.set(r, {});
  const i = Eh.get(r),
    s = JSON.stringify(t);
  return i[s] || (i[s] = new IntersectionObserver(gM, { root: e, ...t })), i[s];
}
function vM(e, t, r) {
  const i = yM(t);
  return (
    Cp.set(e, r),
    i.observe(e),
    () => {
      Cp.delete(e), i.unobserve(e);
    }
  );
}
const bM = { some: 0, all: 1 };
class SM extends go {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: i, amount: s = "some", once: l } = t,
      u = {
        root: r ? r.current : void 0,
        rootMargin: i,
        threshold: typeof s == "number" ? s : bM[s],
      },
      d = (f) => {
        const { isIntersecting: p } = f;
        if (
          this.isInView === p ||
          ((this.isInView = p), l && !p && this.hasEnteredView)
        )
          return;
        p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p);
        const { onViewportEnter: m, onViewportLeave: y } = this.node.getProps(),
          b = p ? m : y;
        b && b(f);
      };
    return vM(this.node.current, u, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(xM(t, r)) && this.startObserver();
  }
  unmount() {}
}
function xM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const wM = {
    inView: { Feature: SM },
    tap: { Feature: pM },
    focus: { Feature: hM },
    hover: { Feature: fM },
  },
  kM = { layout: { ProjectionNode: Fx, MeasureLayout: Ox } },
  Om = P.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Gc = P.createContext({}),
  Mm = typeof window < "u",
  Bx = Mm ? P.useLayoutEffect : P.useEffect,
  Vx = P.createContext({ strict: !1 });
function CM(e, t, r, i, s) {
  var l, u;
  const { visualElement: d } = P.useContext(Gc),
    f = P.useContext(Vx),
    p = P.useContext(il),
    m = P.useContext(Om).reducedMotion,
    y = P.useRef(null);
  (i = i || f.renderer),
    !y.current &&
      i &&
      (y.current = i(e, {
        visualState: t,
        parent: d,
        props: r,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m,
      }));
  const b = y.current,
    _ = P.useContext($x);
  b &&
    !b.projection &&
    s &&
    (b.type === "html" || b.type === "svg") &&
    _M(y.current, r, s, _);
  const S = P.useRef(!1);
  P.useInsertionEffect(() => {
    b && S.current && b.update(r, p);
  });
  const w = r[mx],
    x = P.useRef(
      !!w &&
        !(
          !((l = window.MotionHandoffIsComplete) === null || l === void 0) &&
          l.call(window, w)
        ) &&
        ((u = window.MotionHasOptimisedAnimation) === null || u === void 0
          ? void 0
          : u.call(window, w))
    );
  return (
    Bx(() => {
      b &&
        ((S.current = !0),
        (window.MotionIsMounted = !0),
        b.updateFeatures(),
        $m.render(b.render),
        x.current && b.animationState && b.animationState.animateChanges());
    }),
    P.useEffect(() => {
      b &&
        (!x.current && b.animationState && b.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            var T;
            (T = window.MotionHandoffMarkAsComplete) === null ||
              T === void 0 ||
              T.call(window, w);
          }),
          (x.current = !1)));
    }),
    b
  );
}
function _M(e, t, r, i) {
  const {
    layoutId: s,
    layout: l,
    drag: u,
    dragConstraints: d,
    layoutScroll: f,
    layoutRoot: p,
  } = t;
  (e.projection = new r(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Ux(e.parent)
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: l,
      alwaysMeasureLayout: !!u || (d && Ki(d)),
      visualElement: e,
      animationType: typeof l == "string" ? l : "both",
      initialPromotionConfig: i,
      layoutScroll: f,
      layoutRoot: p,
    });
}
function Ux(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Ux(e.parent);
}
function PM(e, t, r) {
  return P.useCallback(
    (i) => {
      i && e.mount && e.mount(i),
        t && (i ? t.mount(i) : t.unmount()),
        r && (typeof r == "function" ? r(i) : Ki(r) && (r.current = i));
    },
    [t]
  );
}
function Yc(e) {
  return Hc(e.animate) || um.some((t) => Ua(e[t]));
}
function Wx(e) {
  return !!(Yc(e) || e.variants);
}
function TM(e, t) {
  if (Yc(e)) {
    const { initial: r, animate: i } = e;
    return {
      initial: r === !1 || Ua(r) ? r : void 0,
      animate: Ua(i) ? i : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function EM(e) {
  const { initial: t, animate: r } = TM(e, P.useContext(Gc));
  return P.useMemo(() => ({ initial: t, animate: r }), [o1(t), o1(r)]);
}
function o1(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const i1 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  cs = {};
for (const e in i1) cs[e] = { isEnabled: (t) => i1[e].some((r) => !!t[r]) };
function RM(e) {
  for (const t in e) cs[t] = { ...cs[t], ...e[t] };
}
const AM = Symbol.for("motionComponentSymbol");
function $M({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: i,
  Component: s,
}) {
  e && RM(e);
  function l(d, f) {
    let p;
    const m = { ...P.useContext(Om), ...d, layoutId: OM(d) },
      { isStatic: y } = m,
      b = EM(d),
      _ = i(d, y);
    if (!y && Mm) {
      MM();
      const S = zM(m);
      (p = S.MeasureLayout),
        (b.visualElement = CM(s, _, m, t, S.ProjectionNode));
    }
    return A.jsxs(Gc.Provider, {
      value: b,
      children: [
        p && b.visualElement
          ? A.jsx(p, { visualElement: b.visualElement, ...m })
          : null,
        r(s, d, PM(_, b.visualElement, f), _, y, b.visualElement),
      ],
    });
  }
  const u = P.forwardRef(l);
  return (u[AM] = s), u;
}
function OM({ layoutId: e }) {
  const t = P.useContext(Am).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function MM(e, t) {
  P.useContext(Vx).strict;
}
function zM(e) {
  const { drag: t, layout: r } = cs;
  if (!t && !r) return {};
  const i = { ...t, ...r };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
const jM = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function zm(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(jM.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Hx(e, { style: t, vars: r }, i, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(i));
  for (const l in r) e.style.setProperty(l, r[l]);
}
const qx = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Kx(e, t, r, i) {
  Hx(e, t, void 0, i);
  for (const s in t.attrs) e.setAttribute(qx.has(s) ? s : Em(s), t.attrs[s]);
}
function Gx(e, { layout: t, layoutId: r }) {
  return (
    ei.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!Ec[e] || e === "opacity"))
  );
}
function jm(e, t, r) {
  var i;
  const { style: s } = e,
    l = {};
  for (const u in s)
    (Lt(s[u]) ||
      (t.style && Lt(t.style[u])) ||
      Gx(u, e) ||
      ((i = r == null ? void 0 : r.getValue(u)) === null || i === void 0
        ? void 0
        : i.liveStyle) !== void 0) &&
      (l[u] = s[u]);
  return l;
}
function Yx(e, t, r) {
  const i = jm(e, t, r);
  for (const s in e)
    if (Lt(e[s]) || Lt(t[s])) {
      const l =
        el.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      i[l] = e[s];
    }
  return i;
}
function Lm(e) {
  const t = P.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function LM(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  i,
  s,
  l
) {
  const u = { latestValues: NM(i, s, l, e), renderState: t() };
  return r && (u.mount = (d) => r(i, d, u)), u;
}
const Xx = (e) => (t, r) => {
  const i = P.useContext(Gc),
    s = P.useContext(il),
    l = () => LM(e, t, i, s);
  return r ? l() : Lm(l);
};
function NM(e, t, r, i) {
  const s = {},
    l = i(e, {});
  for (const b in l) s[b] = dc(l[b]);
  let { initial: u, animate: d } = e;
  const f = Yc(e),
    p = Wx(e);
  t &&
    p &&
    !f &&
    e.inherit !== !1 &&
    (u === void 0 && (u = t.initial), d === void 0 && (d = t.animate));
  let m = r ? r.initial === !1 : !1;
  m = m || u === !1;
  const y = m ? d : u;
  if (y && typeof y != "boolean" && !Hc(y)) {
    const b = Array.isArray(y) ? y : [y];
    for (let _ = 0; _ < b.length; _++) {
      const S = am(e, b[_]);
      if (S) {
        const { transitionEnd: w, transition: x, ...T } = S;
        for (const O in T) {
          let z = T[O];
          if (Array.isArray(z)) {
            const W = m ? z.length - 1 : 0;
            z = z[W];
          }
          z !== null && (s[O] = z);
        }
        for (const O in w) s[O] = w[O];
      }
    }
  }
  return s;
}
const Nm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Qx = () => ({ ...Nm(), attrs: {} }),
  Jx = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  DM = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  IM = el.length;
function FM(e, t, r) {
  let i = "",
    s = !0;
  for (let l = 0; l < IM; l++) {
    const u = el[l],
      d = e[u];
    if (d === void 0) continue;
    let f = !0;
    if (
      (typeof d == "number"
        ? (f = d === (u.startsWith("scale") ? 1 : 0))
        : (f = parseFloat(d) === 0),
      !f || r)
    ) {
      const p = Jx(d, ym[u]);
      if (!f) {
        s = !1;
        const m = DM[u] || u;
        i += `${m}(${p}) `;
      }
      r && (t[u] = p);
    }
  }
  return (i = i.trim()), r ? (i = r(t, s ? "" : i)) : s && (i = "none"), i;
}
function Dm(e, t, r) {
  const { style: i, vars: s, transformOrigin: l } = e;
  let u = !1,
    d = !1;
  for (const f in t) {
    const p = t[f];
    if (ei.has(f)) {
      u = !0;
      continue;
    } else if (WS(f)) {
      s[f] = p;
      continue;
    } else {
      const m = Jx(p, ym[f]);
      f.startsWith("origin") ? ((d = !0), (l[f] = m)) : (i[f] = m);
    }
  }
  if (
    (t.transform ||
      (u || r
        ? (i.transform = FM(t, e.transform, r))
        : i.transform && (i.transform = "none")),
    d)
  ) {
    const { originX: f = "50%", originY: p = "50%", originZ: m = 0 } = l;
    i.transformOrigin = `${f} ${p} ${m}`;
  }
}
function s1(e, t, r) {
  return typeof e == "string" ? e : ge.transform(t + r * e);
}
function BM(e, t, r) {
  const i = s1(t, e.x, e.width),
    s = s1(r, e.y, e.height);
  return `${i} ${s}`;
}
const VM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  UM = { offset: "strokeDashoffset", array: "strokeDasharray" };
function WM(e, t, r = 1, i = 0, s = !0) {
  e.pathLength = 1;
  const l = s ? VM : UM;
  e[l.offset] = ge.transform(-i);
  const u = ge.transform(t),
    d = ge.transform(r);
  e[l.array] = `${u} ${d}`;
}
function Im(
  e,
  {
    attrX: t,
    attrY: r,
    attrScale: i,
    originX: s,
    originY: l,
    pathLength: u,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...p
  },
  m,
  y
) {
  if ((Dm(e, p, y), m)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: b, style: _, dimensions: S } = e;
  b.transform && (S && (_.transform = b.transform), delete b.transform),
    S &&
      (s !== void 0 || l !== void 0 || _.transform) &&
      (_.transformOrigin = BM(
        S,
        s !== void 0 ? s : 0.5,
        l !== void 0 ? l : 0.5
      )),
    t !== void 0 && (b.x = t),
    r !== void 0 && (b.y = r),
    i !== void 0 && (b.scale = i),
    u !== void 0 && WM(b, u, d, f, !1);
}
const Fm = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  HM = {
    useVisualState: Xx({
      scrapeMotionValuesFromProps: Yx,
      createRenderState: Qx,
      onMount: (e, t, { renderState: r, latestValues: i }) => {
        Je.read(() => {
          try {
            r.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Je.render(() => {
            Im(r, i, Fm(t.tagName), e.transformTemplate), Kx(t, r);
          });
      },
    }),
  },
  qM = {
    useVisualState: Xx({
      scrapeMotionValuesFromProps: jm,
      createRenderState: Nm,
    }),
  };
function Zx(e, t, r) {
  for (const i in t) !Lt(t[i]) && !Gx(i, r) && (e[i] = t[i]);
}
function KM({ transformTemplate: e }, t) {
  return P.useMemo(() => {
    const r = Nm();
    return Dm(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function GM(e, t) {
  const r = e.style || {},
    i = {};
  return Zx(i, r, e), Object.assign(i, KM(e, t)), i;
}
function YM(e, t) {
  const r = {},
    i = GM(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const XM = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Rc(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    XM.has(e)
  );
}
let ew = (e) => !Rc(e);
function QM(e) {
  e && (ew = (t) => (t.startsWith("on") ? !Rc(t) : e(t)));
}
try {
  QM(require("@emotion/is-prop-valid").default);
} catch {}
function JM(e, t, r) {
  const i = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((ew(s) ||
        (r === !0 && Rc(s)) ||
        (!t && !Rc(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (i[s] = e[s]));
  return i;
}
function ZM(e, t, r, i) {
  const s = P.useMemo(() => {
    const l = Qx();
    return (
      Im(l, t, Fm(i), e.transformTemplate),
      { ...l.attrs, style: { ...l.style } }
    );
  }, [t]);
  if (e.style) {
    const l = {};
    Zx(l, e.style, e), (s.style = { ...l, ...s.style });
  }
  return s;
}
function ez(e = !1) {
  return (r, i, s, { latestValues: l }, u) => {
    const f = (zm(r) ? ZM : YM)(i, l, u, r),
      p = JM(i, typeof r == "string", e),
      m = r !== P.Fragment ? { ...p, ...f, ref: s } : {},
      { children: y } = i,
      b = P.useMemo(() => (Lt(y) ? y.get() : y), [y]);
    return P.createElement(r, { ...m, children: b });
  };
}
function tz(e, t) {
  return function (i, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const u = {
      ...(zm(i) ? HM : qM),
      preloadedFeatures: e,
      useRender: ez(s),
      createVisualElement: t,
      Component: i,
    };
    return $M(u);
  };
}
const _p = { current: null },
  tw = { current: !1 };
function nz() {
  if (((tw.current = !0), !!Mm))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (_p.current = e.matches);
      e.addListener(t), t();
    } else _p.current = !1;
}
function rz(e, t, r) {
  for (const i in t) {
    const s = t[i],
      l = r[i];
    if (Lt(s)) e.addValue(i, s);
    else if (Lt(l)) e.addValue(i, qa(s, { owner: e }));
    else if (l !== s)
      if (e.hasValue(i)) {
        const u = e.getValue(i);
        u.liveStyle === !0 ? u.jump(s) : u.hasAnimated || u.set(s);
      } else {
        const u = e.getStaticValue(i);
        e.addValue(i, qa(u !== void 0 ? u : s, { owner: e }));
      }
  }
  for (const i in r) t[i] === void 0 && e.removeValue(i);
  return t;
}
const a1 = new WeakMap(),
  oz = [...KS, zt, po],
  iz = (e) => oz.find(qS(e)),
  l1 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class sz {
  scrapeMotionValuesFromProps(t, r, i) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: i,
      reducedMotionConfig: s,
      blockInitialAnimation: l,
      visualState: u,
    },
    d = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = pm),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const b = ur.now();
        this.renderScheduledAt < b &&
          ((this.renderScheduledAt = b), Je.render(this.render, !1, !0));
      });
    const { latestValues: f, renderState: p } = u;
    (this.latestValues = f),
      (this.baseTarget = { ...f }),
      (this.initialValues = r.initial ? { ...f } : {}),
      (this.renderState = p),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = i),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = d),
      (this.blockInitialAnimation = !!l),
      (this.isControllingVariants = Yc(r)),
      (this.isVariantNode = Wx(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: m, ...y } = this.scrapeMotionValuesFromProps(
      r,
      {},
      this
    );
    for (const b in y) {
      const _ = y[b];
      f[b] !== void 0 && Lt(_) && _.set(f[b], !1);
    }
  }
  mount(t) {
    (this.current = t),
      a1.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, i) => this.bindToMotionValue(i, r)),
      tw.current || nz(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : _p.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    a1.delete(this.current),
      this.projection && this.projection.unmount(),
      ho(this.notifyUpdate),
      ho(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const r = this.features[t];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, r) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const i = ei.has(t),
      s = r.on("change", (d) => {
        (this.latestValues[t] = d),
          this.props.onUpdate && Je.preRender(this.notifyUpdate),
          i && this.projection && (this.projection.isTransformDirty = !0);
      }),
      l = r.on("renderRequest", this.scheduleRender);
    let u;
    window.MotionCheckAppearSync &&
      (u = window.MotionCheckAppearSync(this, t, r)),
      this.valueSubscriptions.set(t, () => {
        s(), l(), u && u(), r.owner && r.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in cs) {
      const r = cs[t];
      if (!r) continue;
      const { isEnabled: i, Feature: s } = r;
      if (
        (!this.features[t] &&
          s &&
          i(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const l = this.features[t];
        l.isMounted ? l.update() : (l.mount(), (l.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : at();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let i = 0; i < l1.length; i++) {
      const s = l1[i];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const l = "on" + s,
        u = t[l];
      u && (this.propEventSubscriptions[s] = this.on(s, u));
    }
    (this.prevMotionValues = rz(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    const i = this.values.get(t);
    r !== i &&
      (i && this.removeValue(t),
      this.bindToMotionValue(t, r),
      this.values.set(t, r),
      (this.latestValues[t] = r.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let i = this.values.get(t);
    return (
      i === void 0 &&
        r !== void 0 &&
        ((i = qa(r === null ? void 0 : r, { owner: this })),
        this.addValue(t, i)),
      i
    );
  }
  readValue(t, r) {
    var i;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (i = this.getBaseTargetFromProps(this.props, t)) !== null &&
          i !== void 0
        ? i
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (VS(s) || BS(s))
          ? (s = parseFloat(s))
          : !iz(s) && po.test(r) && (s = tx(t, r)),
        this.setBaseTarget(t, Lt(s) ? s.get() : s)),
      Lt(s) ? s.get() : s
    );
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var r;
    const { initial: i } = this.props;
    let s;
    if (typeof i == "string" || typeof i == "object") {
      const u = am(
        this.props,
        i,
        (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom
      );
      u && (s = u[t]);
    }
    if (i && s !== void 0) return s;
    const l = this.getBaseTargetFromProps(this.props, t);
    return l !== void 0 && !Lt(l)
      ? l
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Tm()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class nw extends sz {
  constructor() {
    super(...arguments), (this.KeyframeResolver = nx);
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: i }) {
    delete r[t], delete i[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Lt(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
}
function az(e) {
  return window.getComputedStyle(e);
}
class lz extends nw {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Hx);
  }
  readValueFromInstance(t, r) {
    if (ei.has(r)) {
      const i = vm(r);
      return (i && i.default) || 0;
    } else {
      const i = az(t),
        s = (WS(r) ? i.getPropertyValue(r) : i[r]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Rx(t, r);
  }
  build(t, r, i) {
    Dm(t, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, i) {
    return jm(t, r, i);
  }
}
class uz extends nw {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = at);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (ei.has(r)) {
      const i = vm(r);
      return (i && i.default) || 0;
    }
    return (r = qx.has(r) ? r : Em(r)), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, i) {
    return Yx(t, r, i);
  }
  build(t, r, i) {
    Im(t, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, r, i, s) {
    Kx(t, r, i, s);
  }
  mount(t) {
    (this.isSVGTag = Fm(t.tagName)), super.mount(t);
  }
}
const cz = (e, t) =>
    zm(e) ? new uz(t) : new lz(t, { allowProjection: e !== P.Fragment }),
  dz = tz({ ...H$, ...wM, ...dM, ...kM }, cz),
  rw = U3(dz);
class fz extends P.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const i = this.props.sizeRef.current;
      (i.height = r.offsetHeight || 0),
        (i.width = r.offsetWidth || 0),
        (i.top = r.offsetTop),
        (i.left = r.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function hz({ children: e, isPresent: t }) {
  const r = P.useId(),
    i = P.useRef(null),
    s = P.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: l } = P.useContext(Om);
  return (
    P.useInsertionEffect(() => {
      const { width: u, height: d, top: f, left: p } = s.current;
      if (t || !i.current || !u || !d) return;
      i.current.dataset.motionPopId = r;
      const m = document.createElement("style");
      return (
        l && (m.nonce = l),
        document.head.appendChild(m),
        m.sheet &&
          m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            top: ${f}px !important;
            left: ${p}px !important;
          }
        `),
        () => {
          document.head.removeChild(m);
        }
      );
    }, [t]),
    A.jsx(fz, {
      isPresent: t,
      childRef: i,
      sizeRef: s,
      children: P.cloneElement(e, { ref: i }),
    })
  );
}
const pz = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: i,
  custom: s,
  presenceAffectsLayout: l,
  mode: u,
}) => {
  const d = Lm(mz),
    f = P.useId(),
    p = P.useCallback(
      (y) => {
        d.set(y, !0);
        for (const b of d.values()) if (!b) return;
        i && i();
      },
      [d, i]
    ),
    m = P.useMemo(
      () => ({
        id: f,
        initial: t,
        isPresent: r,
        custom: s,
        onExitComplete: p,
        register: (y) => (d.set(y, !1), () => d.delete(y)),
      }),
      l ? [Math.random(), p] : [r, p]
    );
  return (
    P.useMemo(() => {
      d.forEach((y, b) => d.set(b, !1));
    }, [r]),
    P.useEffect(() => {
      !r && !d.size && i && i();
    }, [r]),
    u === "popLayout" && (e = A.jsx(hz, { isPresent: r, children: e })),
    A.jsx(il.Provider, { value: m, children: e })
  );
};
function mz() {
  return new Map();
}
const Du = (e) => e.key || "";
function u1(e) {
  const t = [];
  return (
    P.Children.forEach(e, (r) => {
      P.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const ow = ({
    children: e,
    exitBeforeEnter: t,
    custom: r,
    initial: i = !0,
    onExitComplete: s,
    presenceAffectsLayout: l = !0,
    mode: u = "sync",
  }) => {
    const d = P.useMemo(() => u1(e), [e]),
      f = d.map(Du),
      p = P.useRef(!0),
      m = P.useRef(d),
      y = Lm(() => new Map()),
      [b, _] = P.useState(d),
      [S, w] = P.useState(d);
    Bx(() => {
      (p.current = !1), (m.current = d);
      for (let O = 0; O < S.length; O++) {
        const z = Du(S[O]);
        f.includes(z) ? y.delete(z) : y.get(z) !== !0 && y.set(z, !1);
      }
    }, [S, f.length, f.join("-")]);
    const x = [];
    if (d !== b) {
      let O = [...d];
      for (let z = 0; z < S.length; z++) {
        const W = S[z],
          E = Du(W);
        f.includes(E) || (O.splice(z, 0, W), x.push(W));
      }
      u === "wait" && x.length && (O = x), w(u1(O)), _(d);
      return;
    }
    const { forceRender: T } = P.useContext(Am);
    return A.jsx(A.Fragment, {
      children: S.map((O) => {
        const z = Du(O),
          W = d === S || f.includes(z),
          E = () => {
            if (y.has(z)) y.set(z, !0);
            else return;
            let I = !0;
            y.forEach((U) => {
              U || (I = !1);
            }),
              I && (T == null || T(), w(m.current), s && s());
          };
        return A.jsx(
          pz,
          {
            isPresent: W,
            initial: !p.current || i ? void 0 : !1,
            custom: W ? void 0 : r,
            presenceAffectsLayout: l,
            mode: u,
            onExitComplete: W ? void 0 : E,
            children: O,
          },
          z
        );
      }),
    });
  },
  gz = (e, t) => e.find((r) => r.id === t);
function c1(e, t) {
  const r = iw(e, t),
    i = r ? e[r].findIndex((s) => s.id === t) : -1;
  return { position: r, index: i };
}
function iw(e, t) {
  for (const [r, i] of Object.entries(e)) if (gz(i, t)) return r;
}
function yz(e) {
  const t = e.includes("right"),
    r = e.includes("left");
  let i = "center";
  return (
    t && (i = "flex-end"),
    r && (i = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: i }
  );
}
function vz(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0,
    i = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    s = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    l = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    u = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: i,
    bottom: s,
    right: l,
    left: u,
  };
}
var bz = !1,
  Sz = /[A-Z]|^ms/g,
  xz = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  sw = function (t) {
    return t.charCodeAt(1) === 45;
  },
  d1 = function (t) {
    return t != null && typeof t != "boolean";
  },
  Rh = Zp(function (e) {
    return sw(e) ? e : e.replace(Sz, "-$&").toLowerCase();
  }),
  f1 = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(xz, function (i, s, l) {
            return (rr = { name: s, styles: l, next: rr }), s;
          });
    }
    return xS[t] !== 1 && !sw(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  },
  wz =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ga(e, t, r) {
  if (r == null) return "";
  var i = r;
  if (i.__emotion_styles !== void 0) return i;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var s = r;
      if (s.anim === 1)
        return (rr = { name: s.name, styles: s.styles, next: rr }), s.name;
      var l = r;
      if (l.styles !== void 0) {
        var u = l.next;
        if (u !== void 0)
          for (; u !== void 0; )
            (rr = { name: u.name, styles: u.styles, next: rr }), (u = u.next);
        var d = l.styles + ";";
        return d;
      }
      return kz(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = rr,
          p = r(e);
        return (rr = f), Ga(e, t, p);
      }
      break;
    }
  }
  var m = r;
  if (t == null) return m;
  var y = t[m];
  return y !== void 0 ? y : m;
}
function kz(e, t, r) {
  var i = "";
  if (Array.isArray(r))
    for (var s = 0; s < r.length; s++) i += Ga(e, t, r[s]) + ";";
  else
    for (var l in r) {
      var u = r[l];
      if (typeof u != "object") {
        var d = u;
        t != null && t[d] !== void 0
          ? (i += l + "{" + t[d] + "}")
          : d1(d) && (i += Rh(l) + ":" + f1(l, d) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && bz) throw new Error(wz);
        if (
          Array.isArray(u) &&
          typeof u[0] == "string" &&
          (t == null || t[u[0]] === void 0)
        )
          for (var f = 0; f < u.length; f++)
            d1(u[f]) && (i += Rh(l) + ":" + f1(l, u[f]) + ";");
        else {
          var p = Ga(e, t, u);
          switch (l) {
            case "animation":
            case "animationName": {
              i += Rh(l) + ":" + p + ";";
              break;
            }
            default:
              i += l + "{" + p + "}";
          }
        }
      }
    }
  return i;
}
var h1 = /label:\s*([^\s;{]+)\s*(;|$)/g,
  rr;
function Cz(e, t, r) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var i = !0,
    s = "";
  rr = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0) (i = !1), (s += Ga(r, t, l));
  else {
    var u = l;
    s += u[0];
  }
  for (var d = 1; d < e.length; d++)
    if (((s += Ga(r, t, e[d])), i)) {
      var f = l;
      s += f[d];
    }
  h1.lastIndex = 0;
  for (var p = "", m; (m = h1.exec(s)) !== null; ) p += "-" + m[1];
  var y = SS(s) + p;
  return { name: y, styles: s, next: rr };
}
var _z =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Pz = Zp(function (e) {
    return (
      _z.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  Tz = !1,
  Ez = Pz,
  Rz = function (t) {
    return t !== "theme";
  },
  p1 = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Ez : Rz;
  },
  m1 = function (t, r, i) {
    var s;
    if (r) {
      var l = r.shouldForwardProp;
      s =
        t.__emotion_forwardProp && l
          ? function (u) {
              return t.__emotion_forwardProp(u) && l(u);
            }
          : l;
    }
    return typeof s != "function" && i && (s = t.__emotion_forwardProp), s;
  },
  Az = function (t) {
    var r = t.cache,
      i = t.serialized,
      s = t.isStringTag;
    return (
      em(r, i, s),
      CS(function () {
        return tm(r, i, s);
      }),
      null
    );
  },
  $z = function e(t, r) {
    var i = t.__emotion_real === t,
      s = (i && t.__emotion_base) || t,
      l,
      u;
    r !== void 0 && ((l = r.label), (u = r.target));
    var d = m1(t, r, i),
      f = d || p1(s),
      p = !f("as");
    return function () {
      var m = arguments,
        y =
          i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (l !== void 0 && y.push("label:" + l + ";"),
        m[0] == null || m[0].raw === void 0)
      )
        y.push.apply(y, m);
      else {
        var b = m[0];
        y.push(b[0]);
        for (var _ = m.length, S = 1; S < _; S++) y.push(m[S], b[S]);
      }
      var w = Uc(function (x, T, O) {
        var z = (p && x.as) || s,
          W = "",
          E = [],
          I = x;
        if (x.theme == null) {
          I = {};
          for (var U in x) I[U] = x[U];
          I.theme = P.useContext(as);
        }
        typeof x.className == "string"
          ? (W = bS(T.registered, E, x.className))
          : x.className != null && (W = x.className + " ");
        var Y = Cz(y.concat(E), T.registered, I);
        (W += T.key + "-" + Y.name), u !== void 0 && (W += " " + u);
        var le = p && d === void 0 ? p1(z) : f,
          ce = {};
        for (var ve in x) (p && ve === "as") || (le(ve) && (ce[ve] = x[ve]));
        return (
          (ce.className = W),
          O && (ce.ref = O),
          P.createElement(
            P.Fragment,
            null,
            P.createElement(Az, {
              cache: T,
              serialized: Y,
              isStringTag: typeof z == "string",
            }),
            P.createElement(z, ce)
          )
        );
      });
      return (
        (w.displayName =
          l !== void 0
            ? l
            : "Styled(" +
              (typeof s == "string"
                ? s
                : s.displayName || s.name || "Component") +
              ")"),
        (w.defaultProps = t.defaultProps),
        (w.__emotion_real = w),
        (w.__emotion_base = s),
        (w.__emotion_styles = y),
        (w.__emotion_forwardProp = d),
        Object.defineProperty(w, "toString", {
          value: function () {
            return u === void 0 && Tz ? "NO_COMPONENT_SELECTOR" : "." + u;
          },
        }),
        (w.withComponent = function (x, T) {
          var O = e(x, wc({}, r, T, { shouldForwardProp: m1(w, T, !0) }));
          return O.apply(void 0, y);
        }),
        w
      );
    };
  },
  Oz = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Pp = $z.bind(null);
Oz.forEach(function (e) {
  Pp[e] = Pp(e);
});
const Mz = new Set([
    ...G2,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  zz = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function jz(e) {
  return (zz.has(e) || !Mz.has(e)) && e[0] !== "_";
}
const Lz = r2(Pp),
  Nz =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: i, __css: s, sx: l, ...u } = t,
        [d] = a2(u, X2),
        f = or(e, t),
        p = KC({}, s, f, Wb(d), l),
        m = Qb(p)(t.theme);
      return i ? [m, i] : m;
    };
function Ah(e, t) {
  const { baseStyle: r, ...i } = t ?? {};
  i.shouldForwardProp || (i.shouldForwardProp = jz);
  const s = Nz({ baseStyle: r }),
    l = Lz(e, i)(s);
  return P.forwardRef(function (f, p) {
    const { children: m, ...y } = f,
      { colorMode: b, forced: _ } = im(),
      S = _ ? b : void 0;
    return P.createElement(l, { ref: p, "data-theme": S, ...y }, m);
  });
}
function Dz() {
  const e = new Map();
  return new Proxy(Ah, {
    apply(t, r, i) {
      return Ah(...i);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Ah(r)), e.get(r);
    },
  });
}
const St = Dz(),
  Iz = {
    initial: (e) => {
      const { position: t } = e,
        r = ["top", "bottom"].includes(t) ? "y" : "x";
      let i = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (i = 1), { opacity: 0, [r]: i * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  aw = P.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: i,
        onRequestRemove: s,
        requestClose: l = !1,
        position: u = "bottom",
        duration: d = 5e3,
        containerStyle: f,
        motionVariants: p = Iz,
        toastSpacing: m = "0.5rem",
      } = e,
      [y, b] = P.useState(d),
      _ = _O();
    v0(() => {
      _ || i == null || i();
    }, [_]),
      v0(() => {
        b(d);
      }, [d]);
    const S = () => b(null),
      w = () => b(d),
      x = () => {
        _ && s();
      };
    P.useEffect(() => {
      _ && l && s();
    }, [_, l, s]),
      m2(x, y);
    const T = P.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: m,
          ...f,
        }),
        [f, m]
      ),
      O = P.useMemo(() => yz(u), [u]);
    return A.jsx(rw.div, {
      layout: !0,
      className: "chakra-toast",
      variants: p,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: S,
      onHoverEnd: w,
      custom: { position: u },
      style: O,
      children: A.jsx(St.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: T,
        children: or(r, { id: t, onClose: x }),
      }),
    });
  });
aw.displayName = "ToastComponent";
function cr(e) {
  return P.forwardRef(e);
}
var $h, g1;
function Fz() {
  if (g1) return $h;
  g1 = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    i = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function s(l, u) {
    if (l === u) return !0;
    if (l && u && typeof l == "object" && typeof u == "object") {
      if (l.constructor !== u.constructor) return !1;
      var d, f, p;
      if (Array.isArray(l)) {
        if (((d = l.length), d != u.length)) return !1;
        for (f = d; f-- !== 0; ) if (!s(l[f], u[f])) return !1;
        return !0;
      }
      var m;
      if (t && l instanceof Map && u instanceof Map) {
        if (l.size !== u.size) return !1;
        for (m = l.entries(); !(f = m.next()).done; )
          if (!u.has(f.value[0])) return !1;
        for (m = l.entries(); !(f = m.next()).done; )
          if (!s(f.value[1], u.get(f.value[0]))) return !1;
        return !0;
      }
      if (r && l instanceof Set && u instanceof Set) {
        if (l.size !== u.size) return !1;
        for (m = l.entries(); !(f = m.next()).done; )
          if (!u.has(f.value[0])) return !1;
        return !0;
      }
      if (i && ArrayBuffer.isView(l) && ArrayBuffer.isView(u)) {
        if (((d = l.length), d != u.length)) return !1;
        for (f = d; f-- !== 0; ) if (l[f] !== u[f]) return !1;
        return !0;
      }
      if (l.constructor === RegExp)
        return l.source === u.source && l.flags === u.flags;
      if (
        l.valueOf !== Object.prototype.valueOf &&
        typeof l.valueOf == "function" &&
        typeof u.valueOf == "function"
      )
        return l.valueOf() === u.valueOf();
      if (
        l.toString !== Object.prototype.toString &&
        typeof l.toString == "function" &&
        typeof u.toString == "function"
      )
        return l.toString() === u.toString();
      if (((p = Object.keys(l)), (d = p.length), d !== Object.keys(u).length))
        return !1;
      for (f = d; f-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(u, p[f])) return !1;
      if (e && l instanceof Element) return !1;
      for (f = d; f-- !== 0; )
        if (
          !(
            (p[f] === "_owner" || p[f] === "__v" || p[f] === "__o") &&
            l.$$typeof
          ) &&
          !s(l[p[f]], u[p[f]])
        )
          return !1;
      return !0;
    }
    return l !== l && u !== u;
  }
  return (
    ($h = function (u, d) {
      try {
        return s(u, d);
      } catch (f) {
        if ((f.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"), !1
          );
        throw f;
      }
    }),
    $h
  );
}
var Bz = Fz();
const Vz = mo(Bz);
function Uz() {
  const e = P.useContext(as);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
function Wz() {
  const e = im(),
    t = Uz();
  return { ...e, theme: t };
}
function lw(e, t = {}) {
  const { styleConfig: r, ...i } = t,
    { theme: s, colorMode: l } = Wz(),
    u = e ? Hb(s, `components.${e}`) : void 0,
    d = r || u,
    f = ir(
      { theme: s, colorMode: l },
      (d == null ? void 0 : d.defaultProps) ?? {},
      Wb(qb(i, ["children"])),
      (m, y) => (m ? void 0 : y)
    ),
    p = P.useRef({});
  if (d) {
    const y = s_(d)(f);
    Vz(p.current, y) || (p.current = y);
  }
  return p.current;
}
function Xc(e, t = {}) {
  return lw(e, t);
}
function Hz(e, t = {}) {
  return lw(e, t);
}
const y1 = {
    path: A.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        A.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        A.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        A.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  sl = cr((e, t) => {
    const {
        as: r,
        viewBox: i,
        color: s = "currentColor",
        focusable: l = !1,
        children: u,
        className: d,
        __css: f,
        ...p
      } = e,
      m = In("chakra-icon", d),
      y = Xc("Icon", e),
      b = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: s,
        ...f,
        ...y,
      },
      _ = { ref: t, focusable: l, className: m, __css: b },
      S = i ?? y1.viewBox;
    if (r && typeof r != "string") return A.jsx(St.svg, { as: r, ..._, ...p });
    const w = u ?? y1.path;
    return A.jsx(St.svg, {
      verticalAlign: "middle",
      viewBox: S,
      ..._,
      ...p,
      children: w,
    });
  });
sl.displayName = "Icon";
function qz(e) {
  return A.jsx(sl, {
    viewBox: "0 0 24 24",
    ...e,
    children: A.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function Kz(e) {
  return A.jsx(sl, {
    viewBox: "0 0 24 24",
    ...e,
    children: A.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function v1(e) {
  return A.jsx(sl, {
    viewBox: "0 0 24 24",
    ...e,
    children: A.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
const Gz = E3({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  Bm = cr((e, t) => {
    const r = Xc("Spinner", e),
      {
        label: i = "Loading...",
        thickness: s = "2px",
        speed: l = "0.45s",
        emptyColor: u = "transparent",
        className: d,
        ...f
      } = Lc(e),
      p = In("chakra-spinner", d),
      m = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: s,
        borderBottomColor: u,
        borderLeftColor: u,
        animation: `${Gz} ${l} linear infinite`,
        ...r,
      };
    return A.jsx(St.div, {
      ref: t,
      __css: m,
      className: p,
      ...f,
      children: i && A.jsx(St.span, { srOnly: !0, children: i }),
    });
  });
Bm.displayName = "Spinner";
const [Yz, Vm] = Zo({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [Xz, Um] = Zo({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  uw = {
    info: { icon: Kz, colorScheme: "blue" },
    warning: { icon: v1, colorScheme: "orange" },
    success: { icon: qz, colorScheme: "green" },
    error: { icon: v1, colorScheme: "red" },
    loading: { icon: Bm, colorScheme: "blue" },
  };
function Qz(e) {
  return uw[e].colorScheme;
}
function Jz(e) {
  return uw[e].icon;
}
const cw = cr(function (t, r) {
  const { status: i = "info", addRole: s = !0, ...l } = Lc(t),
    u = t.colorScheme ?? Qz(i),
    d = Hz("Alert", { ...t, colorScheme: u }),
    f = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...d.container,
    };
  return A.jsx(Yz, {
    value: { status: i },
    children: A.jsx(Xz, {
      value: d,
      children: A.jsx(St.div, {
        "data-status": i,
        role: s ? "alert" : void 0,
        ref: r,
        ...l,
        className: In("chakra-alert", t.className),
        __css: f,
      }),
    }),
  });
});
cw.displayName = "Alert";
function dw(e) {
  const { status: t } = Vm(),
    r = Jz(t),
    i = Um(),
    s = t === "loading" ? i.spinner : i.icon;
  return A.jsx(St.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: In("chakra-alert__icon", e.className),
    __css: s,
    children: e.children || A.jsx(r, { h: "100%", w: "100%" }),
  });
}
dw.displayName = "AlertIcon";
const fw = cr(function (t, r) {
  const i = Um(),
    { status: s } = Vm();
  return A.jsx(St.div, {
    ref: r,
    "data-status": s,
    ...t,
    className: In("chakra-alert__title", t.className),
    __css: i.title,
  });
});
fw.displayName = "AlertTitle";
const hw = cr(function (t, r) {
  const { status: i } = Vm(),
    s = Um(),
    l = { display: "inline", ...s.description };
  return A.jsx(St.div, {
    ref: r,
    "data-status": i,
    ...t,
    className: In("chakra-alert__desc", t.className),
    __css: l,
  });
});
hw.displayName = "AlertDescription";
function Zz(e) {
  return A.jsx(sl, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: A.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
const pw = cr(function (t, r) {
  const i = Xc("CloseButton", t),
    { children: s, isDisabled: l, __css: u, ...d } = Lc(t),
    f = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return A.jsx(St.button, {
    type: "button",
    "aria-label": "Close",
    ref: r,
    disabled: l,
    __css: { ...f, ...i, ...u },
    ...d,
    children: s || A.jsx(Zz, { width: "1em", height: "1em" }),
  });
});
pw.displayName = "CloseButton";
const ej = (e) => {
  const {
      status: t,
      variant: r = "solid",
      id: i,
      title: s,
      isClosable: l,
      onClose: u,
      description: d,
      colorScheme: f,
      icon: p,
    } = e,
    m = i
      ? {
          root: `toast-${i}`,
          title: `toast-${i}-title`,
          description: `toast-${i}-description`,
        }
      : void 0;
  return A.jsxs(cw, {
    addRole: !1,
    status: t,
    variant: r,
    id: m == null ? void 0 : m.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: f,
    children: [
      A.jsx(dw, { children: p }),
      A.jsxs(St.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          s && A.jsx(fw, { id: m == null ? void 0 : m.title, children: s }),
          d &&
            A.jsx(hw, {
              id: m == null ? void 0 : m.description,
              display: "block",
              children: d,
            }),
        ],
      }),
      l &&
        A.jsx(pw, {
          size: "sm",
          onClick: u,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function tj(e = {}) {
  const { render: t, toastComponent: r = ej } = e;
  return (s) =>
    typeof t == "function" ? t({ ...s, ...e }) : A.jsx(r, { ...s, ...e });
}
const nj = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  La = rj(nj);
function rj(e) {
  let t = e;
  const r = new Set(),
    i = (s) => {
      (t = s(t)), r.forEach((l) => l());
    };
  return {
    getState: () => t,
    subscribe: (s) => (
      r.add(s),
      () => {
        i(() => e), r.delete(s);
      }
    ),
    removeToast: (s, l) => {
      i((u) => ({ ...u, [l]: u[l].filter((d) => d.id != s) }));
    },
    notify: (s, l) => {
      const u = oj(s, l),
        { position: d, id: f } = u;
      return (
        i((p) => {
          const y = d.includes("top")
            ? [u, ...(p[d] ?? [])]
            : [...(p[d] ?? []), u];
          return { ...p, [d]: y };
        }),
        f
      );
    },
    update: (s, l) => {
      s &&
        i((u) => {
          const d = { ...u },
            { position: f, index: p } = c1(d, s);
          return (
            f && p !== -1 && (d[f][p] = { ...d[f][p], ...l, message: tj(l) }), d
          );
        });
    },
    closeAll: ({ positions: s } = {}) => {
      i((l) =>
        (
          s ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (f, p) => ((f[p] = l[p].map((m) => ({ ...m, requestClose: !0 }))), f),
          { ...l }
        )
      );
    },
    close: (s) => {
      i((l) => {
        const u = iw(l, s);
        return u
          ? {
              ...l,
              [u]: l[u].map((d) =>
                d.id == s ? { ...d, requestClose: !0 } : d
              ),
            }
          : l;
      });
    },
    isActive: (s) => !!c1(La.getState(), s).position,
  };
}
let b1 = 0;
function oj(e, t = {}) {
  b1 += 1;
  const r = t.id ?? b1,
    i = t.position ?? "bottom";
  return {
    id: r,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => La.removeToast(String(r), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var Oh = { exports: {} },
  Kt = {},
  Mh = { exports: {} },
  zh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var S1;
function ij() {
  return (
    S1 ||
      ((S1 = 1),
      (function (e) {
        function t(X, ie) {
          var J = X.length;
          X.push(ie);
          e: for (; 0 < J; ) {
            var L = (J - 1) >>> 1,
              H = X[L];
            if (0 < s(H, ie)) (X[L] = ie), (X[J] = H), (J = L);
            else break e;
          }
        }
        function r(X) {
          return X.length === 0 ? null : X[0];
        }
        function i(X) {
          if (X.length === 0) return null;
          var ie = X[0],
            J = X.pop();
          if (J !== ie) {
            X[0] = J;
            e: for (var L = 0, H = X.length, Z = H >>> 1; L < Z; ) {
              var xe = 2 * (L + 1) - 1,
                Te = X[xe],
                we = xe + 1,
                ue = X[we];
              if (0 > s(Te, J))
                we < H && 0 > s(ue, Te)
                  ? ((X[L] = ue), (X[we] = J), (L = we))
                  : ((X[L] = Te), (X[xe] = J), (L = xe));
              else if (we < H && 0 > s(ue, J))
                (X[L] = ue), (X[we] = J), (L = we);
              else break e;
            }
          }
          return ie;
        }
        function s(X, ie) {
          var J = X.sortIndex - ie.sortIndex;
          return J !== 0 ? J : X.id - ie.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var l = performance;
          e.unstable_now = function () {
            return l.now();
          };
        } else {
          var u = Date,
            d = u.now();
          e.unstable_now = function () {
            return u.now() - d;
          };
        }
        var f = [],
          p = [],
          m = 1,
          y = null,
          b = 3,
          _ = !1,
          S = !1,
          w = !1,
          x = typeof setTimeout == "function" ? setTimeout : null,
          T = typeof clearTimeout == "function" ? clearTimeout : null,
          O = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function z(X) {
          for (var ie = r(p); ie !== null; ) {
            if (ie.callback === null) i(p);
            else if (ie.startTime <= X)
              i(p), (ie.sortIndex = ie.expirationTime), t(f, ie);
            else break;
            ie = r(p);
          }
        }
        function W(X) {
          if (((w = !1), z(X), !S))
            if (r(f) !== null) (S = !0), Be(E);
            else {
              var ie = r(p);
              ie !== null && de(W, ie.startTime - X);
            }
        }
        function E(X, ie) {
          (S = !1), w && ((w = !1), T(Y), (Y = -1)), (_ = !0);
          var J = b;
          try {
            for (
              z(ie), y = r(f);
              y !== null && (!(y.expirationTime > ie) || (X && !ve()));

            ) {
              var L = y.callback;
              if (typeof L == "function") {
                (y.callback = null), (b = y.priorityLevel);
                var H = L(y.expirationTime <= ie);
                (ie = e.unstable_now()),
                  typeof H == "function"
                    ? (y.callback = H)
                    : y === r(f) && i(f),
                  z(ie);
              } else i(f);
              y = r(f);
            }
            if (y !== null) var Z = !0;
            else {
              var xe = r(p);
              xe !== null && de(W, xe.startTime - ie), (Z = !1);
            }
            return Z;
          } finally {
            (y = null), (b = J), (_ = !1);
          }
        }
        var I = !1,
          U = null,
          Y = -1,
          le = 5,
          ce = -1;
        function ve() {
          return !(e.unstable_now() - ce < le);
        }
        function be() {
          if (U !== null) {
            var X = e.unstable_now();
            ce = X;
            var ie = !0;
            try {
              ie = U(!0, X);
            } finally {
              ie ? Se() : ((I = !1), (U = null));
            }
          } else I = !1;
        }
        var Se;
        if (typeof O == "function")
          Se = function () {
            O(be);
          };
        else if (typeof MessageChannel < "u") {
          var $e = new MessageChannel(),
            Ke = $e.port2;
          ($e.port1.onmessage = be),
            (Se = function () {
              Ke.postMessage(null);
            });
        } else
          Se = function () {
            x(be, 0);
          };
        function Be(X) {
          (U = X), I || ((I = !0), Se());
        }
        function de(X, ie) {
          Y = x(function () {
            X(e.unstable_now());
          }, ie);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (X) {
            X.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            S || _ || ((S = !0), Be(E));
          }),
          (e.unstable_forceFrameRate = function (X) {
            0 > X || 125 < X
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (le = 0 < X ? Math.floor(1e3 / X) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return r(f);
          }),
          (e.unstable_next = function (X) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var ie = 3;
                break;
              default:
                ie = b;
            }
            var J = b;
            b = ie;
            try {
              return X();
            } finally {
              b = J;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (X, ie) {
            switch (X) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                X = 3;
            }
            var J = b;
            b = X;
            try {
              return ie();
            } finally {
              b = J;
            }
          }),
          (e.unstable_scheduleCallback = function (X, ie, J) {
            var L = e.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? L + J : L))
                : (J = L),
              X)
            ) {
              case 1:
                var H = -1;
                break;
              case 2:
                H = 250;
                break;
              case 5:
                H = 1073741823;
                break;
              case 4:
                H = 1e4;
                break;
              default:
                H = 5e3;
            }
            return (
              (H = J + H),
              (X = {
                id: m++,
                callback: ie,
                priorityLevel: X,
                startTime: J,
                expirationTime: H,
                sortIndex: -1,
              }),
              J > L
                ? ((X.sortIndex = J),
                  t(p, X),
                  r(f) === null &&
                    X === r(p) &&
                    (w ? (T(Y), (Y = -1)) : (w = !0), de(W, J - L)))
                : ((X.sortIndex = H), t(f, X), S || _ || ((S = !0), Be(E))),
              X
            );
          }),
          (e.unstable_shouldYield = ve),
          (e.unstable_wrapCallback = function (X) {
            var ie = b;
            return function () {
              var J = b;
              b = ie;
              try {
                return X.apply(this, arguments);
              } finally {
                b = J;
              }
            };
          });
      })(zh)),
    zh
  );
}
var x1;
function sj() {
  return x1 || ((x1 = 1), (Mh.exports = ij())), Mh.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var w1;
function aj() {
  if (w1) return Kt;
  w1 = 1;
  var e = Bp(),
    t = sj();
  function r(n) {
    for (
      var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + n,
        a = 1;
      a < arguments.length;
      a++
    )
      o += "&args[]=" + encodeURIComponent(arguments[a]);
    return (
      "Minified React error #" +
      n +
      "; visit " +
      o +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var i = new Set(),
    s = {};
  function l(n, o) {
    u(n, o), u(n + "Capture", o);
  }
  function u(n, o) {
    for (s[n] = o, n = 0; n < o.length; n++) i.add(o[n]);
  }
  var d = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    f = Object.prototype.hasOwnProperty,
    p =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    m = {},
    y = {};
  function b(n) {
    return f.call(y, n)
      ? !0
      : f.call(m, n)
      ? !1
      : p.test(n)
      ? (y[n] = !0)
      : ((m[n] = !0), !1);
  }
  function _(n, o, a, c) {
    if (a !== null && a.type === 0) return !1;
    switch (typeof o) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c
          ? !1
          : a !== null
          ? !a.acceptsBooleans
          : ((n = n.toLowerCase().slice(0, 5)), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function S(n, o, a, c) {
    if (o === null || typeof o > "u" || _(n, o, a, c)) return !0;
    if (c) return !1;
    if (a !== null)
      switch (a.type) {
        case 3:
          return !o;
        case 4:
          return o === !1;
        case 5:
          return isNaN(o);
        case 6:
          return isNaN(o) || 1 > o;
      }
    return !1;
  }
  function w(n, o, a, c, h, g, v) {
    (this.acceptsBooleans = o === 2 || o === 3 || o === 4),
      (this.attributeName = c),
      (this.attributeNamespace = h),
      (this.mustUseProperty = a),
      (this.propertyName = n),
      (this.type = o),
      (this.sanitizeURL = g),
      (this.removeEmptyString = v);
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (n) {
      x[n] = new w(n, 0, !1, n, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (n) {
      var o = n[0];
      x[o] = new w(o, 1, !1, n[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      n
    ) {
      x[n] = new w(n, 2, !1, n.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (n) {
      x[n] = new w(n, 2, !1, n, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (n) {
        x[n] = new w(n, 3, !1, n.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (n) {
      x[n] = new w(n, 3, !0, n, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (n) {
      x[n] = new w(n, 4, !1, n, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (n) {
      x[n] = new w(n, 6, !1, n, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (n) {
      x[n] = new w(n, 5, !1, n.toLowerCase(), null, !1, !1);
    });
  var T = /[\-:]([a-z])/g;
  function O(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (n) {
      var o = n.replace(T, O);
      x[o] = new w(o, 1, !1, n, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (n) {
        var o = n.replace(T, O);
        x[o] = new w(o, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
      var o = n.replace(T, O);
      x[o] = new w(o, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (n) {
      x[n] = new w(n, 1, !1, n.toLowerCase(), null, !1, !1);
    }),
    (x.xlinkHref = new w(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (n) {
      x[n] = new w(n, 1, !1, n.toLowerCase(), null, !0, !0);
    });
  function z(n, o, a, c) {
    var h = x.hasOwnProperty(o) ? x[o] : null;
    (h !== null
      ? h.type !== 0
      : c ||
        !(2 < o.length) ||
        (o[0] !== "o" && o[0] !== "O") ||
        (o[1] !== "n" && o[1] !== "N")) &&
      (S(o, a, h, c) && (a = null),
      c || h === null
        ? b(o) &&
          (a === null ? n.removeAttribute(o) : n.setAttribute(o, "" + a))
        : h.mustUseProperty
        ? (n[h.propertyName] = a === null ? (h.type === 3 ? !1 : "") : a)
        : ((o = h.attributeName),
          (c = h.attributeNamespace),
          a === null
            ? n.removeAttribute(o)
            : ((h = h.type),
              (a = h === 3 || (h === 4 && a === !0) ? "" : "" + a),
              c ? n.setAttributeNS(c, o, a) : n.setAttribute(o, a))));
  }
  var W = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    E = Symbol.for("react.element"),
    I = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    Y = Symbol.for("react.strict_mode"),
    le = Symbol.for("react.profiler"),
    ce = Symbol.for("react.provider"),
    ve = Symbol.for("react.context"),
    be = Symbol.for("react.forward_ref"),
    Se = Symbol.for("react.suspense"),
    $e = Symbol.for("react.suspense_list"),
    Ke = Symbol.for("react.memo"),
    Be = Symbol.for("react.lazy"),
    de = Symbol.for("react.offscreen"),
    X = Symbol.iterator;
  function ie(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (X && n[X]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var J = Object.assign,
    L;
  function H(n) {
    if (L === void 0)
      try {
        throw Error();
      } catch (a) {
        var o = a.stack.trim().match(/\n( *(at )?)/);
        L = (o && o[1]) || "";
      }
    return (
      `
` +
      L +
      n
    );
  }
  var Z = !1;
  function xe(n, o) {
    if (!n || Z) return "";
    Z = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (o)
        if (
          ((o = function () {
            throw Error();
          }),
          Object.defineProperty(o.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(o, []);
          } catch (F) {
            var c = F;
          }
          Reflect.construct(n, [], o);
        } else {
          try {
            o.call();
          } catch (F) {
            c = F;
          }
          n.call(o.prototype);
        }
      else {
        try {
          throw Error();
        } catch (F) {
          c = F;
        }
        n();
      }
    } catch (F) {
      if (F && c && typeof F.stack == "string") {
        for (
          var h = F.stack.split(`
`),
            g = c.stack.split(`
`),
            v = h.length - 1,
            C = g.length - 1;
          1 <= v && 0 <= C && h[v] !== g[C];

        )
          C--;
        for (; 1 <= v && 0 <= C; v--, C--)
          if (h[v] !== g[C]) {
            if (v !== 1 || C !== 1)
              do
                if ((v--, C--, 0 > C || h[v] !== g[C])) {
                  var R =
                    `
` + h[v].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      R.includes("<anonymous>") &&
                      (R = R.replace("<anonymous>", n.displayName)),
                    R
                  );
                }
              while (1 <= v && 0 <= C);
            break;
          }
      }
    } finally {
      (Z = !1), (Error.prepareStackTrace = a);
    }
    return (n = n ? n.displayName || n.name : "") ? H(n) : "";
  }
  function Te(n) {
    switch (n.tag) {
      case 5:
        return H(n.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (n = xe(n.type, !1)), n;
      case 11:
        return (n = xe(n.type.render, !1)), n;
      case 1:
        return (n = xe(n.type, !0)), n;
      default:
        return "";
    }
  }
  function we(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case U:
        return "Fragment";
      case I:
        return "Portal";
      case le:
        return "Profiler";
      case Y:
        return "StrictMode";
      case Se:
        return "Suspense";
      case $e:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ve:
          return (n.displayName || "Context") + ".Consumer";
        case ce:
          return (n._context.displayName || "Context") + ".Provider";
        case be:
          var o = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = o.displayName || o.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case Ke:
          return (
            (o = n.displayName || null), o !== null ? o : we(n.type) || "Memo"
          );
        case Be:
          (o = n._payload), (n = n._init);
          try {
            return we(n(o));
          } catch {}
      }
    return null;
  }
  function ue(n) {
    var o = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (o.displayName || "Context") + ".Consumer";
      case 10:
        return (o._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (n = o.render),
          (n = n.displayName || n.name || ""),
          o.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return o;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return we(o);
      case 8:
        return o === Y ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof o == "function") return o.displayName || o.name || null;
        if (typeof o == "string") return o;
    }
    return null;
  }
  function re(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ke(n) {
    var o = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (o === "checkbox" || o === "radio")
    );
  }
  function We(n) {
    var o = ke(n) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(n.constructor.prototype, o),
      c = "" + n[o];
    if (
      !n.hasOwnProperty(o) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var h = a.get,
        g = a.set;
      return (
        Object.defineProperty(n, o, {
          configurable: !0,
          get: function () {
            return h.call(this);
          },
          set: function (v) {
            (c = "" + v), g.call(this, v);
          },
        }),
        Object.defineProperty(n, o, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return c;
          },
          setValue: function (v) {
            c = "" + v;
          },
          stopTracking: function () {
            (n._valueTracker = null), delete n[o];
          },
        }
      );
    }
  }
  function Bn(n) {
    n._valueTracker || (n._valueTracker = We(n));
  }
  function gs(n) {
    if (!n) return !1;
    var o = n._valueTracker;
    if (!o) return !0;
    var a = o.getValue(),
      c = "";
    return (
      n && (c = ke(n) ? (n.checked ? "true" : "false") : n.value),
      (n = c),
      n !== a ? (o.setValue(n), !0) : !1
    );
  }
  function ri(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ys(n, o) {
    var a = o.checked;
    return J({}, o, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? n._wrapperState.initialChecked,
    });
  }
  function cl(n, o) {
    var a = o.defaultValue == null ? "" : o.defaultValue,
      c = o.checked != null ? o.checked : o.defaultChecked;
    (a = re(o.value != null ? o.value : a)),
      (n._wrapperState = {
        initialChecked: c,
        initialValue: a,
        controlled:
          o.type === "checkbox" || o.type === "radio"
            ? o.checked != null
            : o.value != null,
      });
  }
  function dl(n, o) {
    (o = o.checked), o != null && z(n, "checked", o, !1);
  }
  function vs(n, o) {
    dl(n, o);
    var a = re(o.value),
      c = o.type;
    if (a != null)
      c === "number"
        ? ((a === 0 && n.value === "") || n.value != a) && (n.value = "" + a)
        : n.value !== "" + a && (n.value = "" + a);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    o.hasOwnProperty("value")
      ? bs(n, o.type, a)
      : o.hasOwnProperty("defaultValue") && bs(n, o.type, re(o.defaultValue)),
      o.checked == null &&
        o.defaultChecked != null &&
        (n.defaultChecked = !!o.defaultChecked);
  }
  function fl(n, o, a) {
    if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
      var c = o.type;
      if (
        !(
          (c !== "submit" && c !== "reset") ||
          (o.value !== void 0 && o.value !== null)
        )
      )
        return;
      (o = "" + n._wrapperState.initialValue),
        a || o === n.value || (n.value = o),
        (n.defaultValue = o);
    }
    (a = n.name),
      a !== "" && (n.name = ""),
      (n.defaultChecked = !!n._wrapperState.initialChecked),
      a !== "" && (n.name = a);
  }
  function bs(n, o, a) {
    (o !== "number" || ri(n.ownerDocument) !== n) &&
      (a == null
        ? (n.defaultValue = "" + n._wrapperState.initialValue)
        : n.defaultValue !== "" + a && (n.defaultValue = "" + a));
  }
  var Vn = Array.isArray;
  function Un(n, o, a, c) {
    if (((n = n.options), o)) {
      o = {};
      for (var h = 0; h < a.length; h++) o["$" + a[h]] = !0;
      for (a = 0; a < n.length; a++)
        (h = o.hasOwnProperty("$" + n[a].value)),
          n[a].selected !== h && (n[a].selected = h),
          h && c && (n[a].defaultSelected = !0);
    } else {
      for (a = "" + re(a), o = null, h = 0; h < n.length; h++) {
        if (n[h].value === a) {
          (n[h].selected = !0), c && (n[h].defaultSelected = !0);
          return;
        }
        o !== null || n[h].disabled || (o = n[h]);
      }
      o !== null && (o.selected = !0);
    }
  }
  function Mr(n, o) {
    if (o.dangerouslySetInnerHTML != null) throw Error(r(91));
    return J({}, o, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue,
    });
  }
  function Pn(n, o) {
    var a = o.value;
    if (a == null) {
      if (((a = o.children), (o = o.defaultValue), a != null)) {
        if (o != null) throw Error(r(92));
        if (Vn(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        o = a;
      }
      o == null && (o = ""), (a = o);
    }
    n._wrapperState = { initialValue: re(a) };
  }
  function Ss(n, o) {
    var a = re(o.value),
      c = re(o.defaultValue);
    a != null &&
      ((a = "" + a),
      a !== n.value && (n.value = a),
      o.defaultValue == null && n.defaultValue !== a && (n.defaultValue = a)),
      c != null && (n.defaultValue = "" + c);
  }
  function xs(n) {
    var o = n.textContent;
    o === n._wrapperState.initialValue &&
      o !== "" &&
      o !== null &&
      (n.value = o);
  }
  function hl(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ws(n, o) {
    return n == null || n === "http://www.w3.org/1999/xhtml"
      ? hl(o)
      : n === "http://www.w3.org/2000/svg" && o === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : n;
  }
  var dr,
    ks = (function (n) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (o, a, c, h) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(o, a, c, h);
            });
          }
        : n;
    })(function (n, o) {
      if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
        n.innerHTML = o;
      else {
        for (
          dr = dr || document.createElement("div"),
            dr.innerHTML = "<svg>" + o.valueOf().toString() + "</svg>",
            o = dr.firstChild;
          n.firstChild;

        )
          n.removeChild(n.firstChild);
        for (; o.firstChild; ) n.appendChild(o.firstChild);
      }
    });
  function zr(n, o) {
    if (o) {
      var a = n.firstChild;
      if (a && a === n.lastChild && a.nodeType === 3) {
        a.nodeValue = o;
        return;
      }
    }
    n.textContent = o;
  }
  var jr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    pl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(jr).forEach(function (n) {
    pl.forEach(function (o) {
      (o = o + n.charAt(0).toUpperCase() + n.substring(1)), (jr[o] = jr[n]);
    });
  });
  function ml(n, o, a) {
    return o == null || typeof o == "boolean" || o === ""
      ? ""
      : a || typeof o != "number" || o === 0 || (jr.hasOwnProperty(n) && jr[n])
      ? ("" + o).trim()
      : o + "px";
  }
  function gl(n, o) {
    n = n.style;
    for (var a in o)
      if (o.hasOwnProperty(a)) {
        var c = a.indexOf("--") === 0,
          h = ml(a, o[a], c);
        a === "float" && (a = "cssFloat"), c ? n.setProperty(a, h) : (n[a] = h);
      }
  }
  var fr = J(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Lr(n, o) {
    if (o) {
      if (fr[n] && (o.children != null || o.dangerouslySetInnerHTML != null))
        throw Error(r(137, n));
      if (o.dangerouslySetInnerHTML != null) {
        if (o.children != null) throw Error(r(60));
        if (
          typeof o.dangerouslySetInnerHTML != "object" ||
          !("__html" in o.dangerouslySetInnerHTML)
        )
          throw Error(r(61));
      }
      if (o.style != null && typeof o.style != "object") throw Error(r(62));
    }
  }
  function Cs(n, o) {
    if (n.indexOf("-") === -1) return typeof o.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var oi = null;
  function _s(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var ii = null,
    an = null,
    Nr = null;
  function Wn(n) {
    if ((n = Gs(n))) {
      if (typeof ii != "function") throw Error(r(280));
      var o = n.stateNode;
      o && ((o = Bl(o)), ii(n.stateNode, n.type, o));
    }
  }
  function yl(n) {
    an ? (Nr ? Nr.push(n) : (Nr = [n])) : (an = n);
  }
  function vl() {
    if (an) {
      var n = an,
        o = Nr;
      if (((Nr = an = null), Wn(n), o)) for (n = 0; n < o.length; n++) Wn(o[n]);
    }
  }
  function bl(n, o) {
    return n(o);
  }
  function Sl() {}
  var Ps = !1;
  function ln(n, o, a) {
    if (Ps) return n(o, a);
    Ps = !0;
    try {
      return bl(n, o, a);
    } finally {
      (Ps = !1), (an !== null || Nr !== null) && (Sl(), vl());
    }
  }
  function vo(n, o) {
    var a = n.stateNode;
    if (a === null) return null;
    var c = Bl(a);
    if (c === null) return null;
    a = c[o];
    e: switch (o) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) ||
          ((n = n.type),
          (c = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !c);
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (a && typeof a != "function") throw Error(r(231, o, typeof a));
    return a;
  }
  var Ts = !1;
  if (d)
    try {
      var bo = {};
      Object.defineProperty(bo, "passive", {
        get: function () {
          Ts = !0;
        },
      }),
        window.addEventListener("test", bo, bo),
        window.removeEventListener("test", bo, bo);
    } catch {
      Ts = !1;
    }
  function ad(n, o, a, c, h, g, v, C, R) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      o.apply(a, F);
    } catch (K) {
      this.onError(K);
    }
  }
  var So = !1,
    Tn = null,
    si = !1,
    Es = null,
    ld = {
      onError: function (n) {
        (So = !0), (Tn = n);
      },
    };
  function ud(n, o, a, c, h, g, v, C, R) {
    (So = !1), (Tn = null), ad.apply(ld, arguments);
  }
  function cd(n, o, a, c, h, g, v, C, R) {
    if ((ud.apply(this, arguments), So)) {
      if (So) {
        var F = Tn;
        (So = !1), (Tn = null);
      } else throw Error(r(198));
      si || ((si = !0), (Es = F));
    }
  }
  function Bt(n) {
    var o = n,
      a = n;
    if (n.alternate) for (; o.return; ) o = o.return;
    else {
      n = o;
      do (o = n), o.flags & 4098 && (a = o.return), (n = o.return);
      while (n);
    }
    return o.tag === 3 ? a : null;
  }
  function xl(n) {
    if (n.tag === 13) {
      var o = n.memoizedState;
      if (
        (o === null && ((n = n.alternate), n !== null && (o = n.memoizedState)),
        o !== null)
      )
        return o.dehydrated;
    }
    return null;
  }
  function wl(n) {
    if (Bt(n) !== n) throw Error(r(188));
  }
  function dd(n) {
    var o = n.alternate;
    if (!o) {
      if (((o = Bt(n)), o === null)) throw Error(r(188));
      return o !== n ? null : n;
    }
    for (var a = n, c = o; ; ) {
      var h = a.return;
      if (h === null) break;
      var g = h.alternate;
      if (g === null) {
        if (((c = h.return), c !== null)) {
          a = c;
          continue;
        }
        break;
      }
      if (h.child === g.child) {
        for (g = h.child; g; ) {
          if (g === a) return wl(h), n;
          if (g === c) return wl(h), o;
          g = g.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== c.return) (a = h), (c = g);
      else {
        for (var v = !1, C = h.child; C; ) {
          if (C === a) {
            (v = !0), (a = h), (c = g);
            break;
          }
          if (C === c) {
            (v = !0), (c = h), (a = g);
            break;
          }
          C = C.sibling;
        }
        if (!v) {
          for (C = g.child; C; ) {
            if (C === a) {
              (v = !0), (a = g), (c = h);
              break;
            }
            if (C === c) {
              (v = !0), (c = g), (a = h);
              break;
            }
            C = C.sibling;
          }
          if (!v) throw Error(r(189));
        }
      }
      if (a.alternate !== c) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? n : o;
  }
  function kl(n) {
    return (n = dd(n)), n !== null ? Cl(n) : null;
  }
  function Cl(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var o = Cl(n);
      if (o !== null) return o;
      n = n.sibling;
    }
    return null;
  }
  var _l = t.unstable_scheduleCallback,
    ai = t.unstable_cancelCallback,
    fd = t.unstable_shouldYield,
    li = t.unstable_requestPaint,
    Ge = t.unstable_now,
    hd = t.unstable_getCurrentPriorityLevel,
    Dr = t.unstable_ImmediatePriority,
    Rs = t.unstable_UserBlockingPriority,
    ui = t.unstable_NormalPriority,
    pd = t.unstable_LowPriority,
    Pl = t.unstable_IdlePriority,
    xo = null,
    un = null;
  function md(n) {
    if (un && typeof un.onCommitFiberRoot == "function")
      try {
        un.onCommitFiberRoot(xo, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var Qt = Math.clz32 ? Math.clz32 : vd,
    gd = Math.log,
    yd = Math.LN2;
  function vd(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - ((gd(n) / yd) | 0)) | 0;
  }
  var ci = 64,
    di = 4194304;
  function wo(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function fi(n, o) {
    var a = n.pendingLanes;
    if (a === 0) return 0;
    var c = 0,
      h = n.suspendedLanes,
      g = n.pingedLanes,
      v = a & 268435455;
    if (v !== 0) {
      var C = v & ~h;
      C !== 0 ? (c = wo(C)) : ((g &= v), g !== 0 && (c = wo(g)));
    } else (v = a & ~h), v !== 0 ? (c = wo(v)) : g !== 0 && (c = wo(g));
    if (c === 0) return 0;
    if (
      o !== 0 &&
      o !== c &&
      !(o & h) &&
      ((h = c & -c), (g = o & -o), h >= g || (h === 16 && (g & 4194240) !== 0))
    )
      return o;
    if ((c & 4 && (c |= a & 16), (o = n.entangledLanes), o !== 0))
      for (n = n.entanglements, o &= c; 0 < o; )
        (a = 31 - Qt(o)), (h = 1 << a), (c |= n[a]), (o &= ~h);
    return c;
  }
  function hi(n, o) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return o + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return o + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function As(n, o) {
    for (
      var a = n.suspendedLanes,
        c = n.pingedLanes,
        h = n.expirationTimes,
        g = n.pendingLanes;
      0 < g;

    ) {
      var v = 31 - Qt(g),
        C = 1 << v,
        R = h[v];
      R === -1
        ? (!(C & a) || C & c) && (h[v] = hi(C, o))
        : R <= o && (n.expiredLanes |= C),
        (g &= ~C);
    }
  }
  function $s(n) {
    return (
      (n = n.pendingLanes & -1073741825),
      n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    );
  }
  function Tl() {
    var n = ci;
    return (ci <<= 1), !(ci & 4194240) && (ci = 64), n;
  }
  function pi(n) {
    for (var o = [], a = 0; 31 > a; a++) o.push(n);
    return o;
  }
  function ko(n, o, a) {
    (n.pendingLanes |= o),
      o !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (o = 31 - Qt(o)),
      (n[o] = a);
  }
  function bd(n, o) {
    var a = n.pendingLanes & ~o;
    (n.pendingLanes = o),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.expiredLanes &= o),
      (n.mutableReadLanes &= o),
      (n.entangledLanes &= o),
      (o = n.entanglements);
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < a; ) {
      var h = 31 - Qt(a),
        g = 1 << h;
      (o[h] = 0), (c[h] = -1), (n[h] = -1), (a &= ~g);
    }
  }
  function Os(n, o) {
    var a = (n.entangledLanes |= o);
    for (n = n.entanglements; a; ) {
      var c = 31 - Qt(a),
        h = 1 << c;
      (h & o) | (n[c] & o) && (n[c] |= o), (a &= ~h);
    }
  }
  var Oe = 0;
  function El(n) {
    return (
      (n &= -n), 1 < n ? (4 < n ? (n & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Rl,
    Ms,
    mi,
    Al,
    $l,
    zs = !1,
    hr = [],
    cn = null,
    dn = null,
    fn = null,
    Co = new Map(),
    Ir = new Map(),
    hn = [],
    Ol =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Hn(n, o) {
    switch (n) {
      case "focusin":
      case "focusout":
        cn = null;
        break;
      case "dragenter":
      case "dragleave":
        dn = null;
        break;
      case "mouseover":
      case "mouseout":
        fn = null;
        break;
      case "pointerover":
      case "pointerout":
        Co.delete(o.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ir.delete(o.pointerId);
    }
  }
  function En(n, o, a, c, h, g) {
    return n === null || n.nativeEvent !== g
      ? ((n = {
          blockedOn: o,
          domEventName: a,
          eventSystemFlags: c,
          nativeEvent: g,
          targetContainers: [h],
        }),
        o !== null && ((o = Gs(o)), o !== null && Ms(o)),
        n)
      : ((n.eventSystemFlags |= c),
        (o = n.targetContainers),
        h !== null && o.indexOf(h) === -1 && o.push(h),
        n);
  }
  function Sd(n, o, a, c, h) {
    switch (o) {
      case "focusin":
        return (cn = En(cn, n, o, a, c, h)), !0;
      case "dragenter":
        return (dn = En(dn, n, o, a, c, h)), !0;
      case "mouseover":
        return (fn = En(fn, n, o, a, c, h)), !0;
      case "pointerover":
        var g = h.pointerId;
        return Co.set(g, En(Co.get(g) || null, n, o, a, c, h)), !0;
      case "gotpointercapture":
        return (
          (g = h.pointerId), Ir.set(g, En(Ir.get(g) || null, n, o, a, c, h)), !0
        );
    }
    return !1;
  }
  function js(n) {
    var o = Po(n.target);
    if (o !== null) {
      var a = Bt(o);
      if (a !== null) {
        if (((o = a.tag), o === 13)) {
          if (((o = xl(a)), o !== null)) {
            (n.blockedOn = o),
              $l(n.priority, function () {
                mi(a);
              });
            return;
          }
        } else if (o === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function gi(n) {
    if (n.blockedOn !== null) return !1;
    for (var o = n.targetContainers; 0 < o.length; ) {
      var a = ze(n.domEventName, n.eventSystemFlags, o[0], n.nativeEvent);
      if (a === null) {
        a = n.nativeEvent;
        var c = new a.constructor(a.type, a);
        (oi = c), a.target.dispatchEvent(c), (oi = null);
      } else return (o = Gs(a)), o !== null && Ms(o), (n.blockedOn = a), !1;
      o.shift();
    }
    return !0;
  }
  function Ls(n, o, a) {
    gi(n) && a.delete(o);
  }
  function xd() {
    (zs = !1),
      cn !== null && gi(cn) && (cn = null),
      dn !== null && gi(dn) && (dn = null),
      fn !== null && gi(fn) && (fn = null),
      Co.forEach(Ls),
      Ir.forEach(Ls);
  }
  function _o(n, o) {
    n.blockedOn === o &&
      ((n.blockedOn = null),
      zs ||
        ((zs = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, xd)));
  }
  function Fr(n) {
    function o(h) {
      return _o(h, n);
    }
    if (0 < hr.length) {
      _o(hr[0], n);
      for (var a = 1; a < hr.length; a++) {
        var c = hr[a];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (
      cn !== null && _o(cn, n),
        dn !== null && _o(dn, n),
        fn !== null && _o(fn, n),
        Co.forEach(o),
        Ir.forEach(o),
        a = 0;
      a < hn.length;
      a++
    )
      (c = hn[a]), c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < hn.length && ((a = hn[0]), a.blockedOn === null); )
      js(a), a.blockedOn === null && hn.shift();
  }
  var Br = W.ReactCurrentBatchConfig,
    k = !0;
  function j(n, o, a, c) {
    var h = Oe,
      g = Br.transition;
    Br.transition = null;
    try {
      (Oe = 1), te(n, o, a, c);
    } finally {
      (Oe = h), (Br.transition = g);
    }
  }
  function B(n, o, a, c) {
    var h = Oe,
      g = Br.transition;
    Br.transition = null;
    try {
      (Oe = 4), te(n, o, a, c);
    } finally {
      (Oe = h), (Br.transition = g);
    }
  }
  function te(n, o, a, c) {
    if (k) {
      var h = ze(n, o, a, c);
      if (h === null) Nd(n, o, c, Pe, a), Hn(n, c);
      else if (Sd(h, n, o, a, c)) c.stopPropagation();
      else if ((Hn(n, c), o & 4 && -1 < Ol.indexOf(n))) {
        for (; h !== null; ) {
          var g = Gs(h);
          if (
            (g !== null && Rl(g),
            (g = ze(n, o, a, c)),
            g === null && Nd(n, o, c, Pe, a),
            g === h)
          )
            break;
          h = g;
        }
        h !== null && c.stopPropagation();
      } else Nd(n, o, c, null, a);
    }
  }
  var Pe = null;
  function ze(n, o, a, c) {
    if (((Pe = null), (n = _s(c)), (n = Po(n)), n !== null))
      if (((o = Bt(n)), o === null)) n = null;
      else if (((a = o.tag), a === 13)) {
        if (((n = xl(o)), n !== null)) return n;
        n = null;
      } else if (a === 3) {
        if (o.stateNode.current.memoizedState.isDehydrated)
          return o.tag === 3 ? o.stateNode.containerInfo : null;
        n = null;
      } else o !== n && (n = null);
    return (Pe = n), null;
  }
  function Ue(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (hd()) {
          case Dr:
            return 1;
          case Rs:
            return 4;
          case ui:
          case pd:
            return 16;
          case Pl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var _e = null,
    Ve = null,
    Pt = null;
  function Tt() {
    if (Pt) return Pt;
    var n,
      o = Ve,
      a = o.length,
      c,
      h = "value" in _e ? _e.value : _e.textContent,
      g = h.length;
    for (n = 0; n < a && o[n] === h[n]; n++);
    var v = a - n;
    for (c = 1; c <= v && o[a - c] === h[g - c]; c++);
    return (Pt = h.slice(n, 1 < c ? 1 - c : void 0));
  }
  function qn(n) {
    var o = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && o === 13 && (n = 13))
        : (n = o),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function Vr() {
    return !0;
  }
  function yi() {
    return !1;
  }
  function Et(n) {
    function o(a, c, h, g, v) {
      (this._reactName = a),
        (this._targetInst = h),
        (this.type = c),
        (this.nativeEvent = g),
        (this.target = v),
        (this.currentTarget = null);
      for (var C in n)
        n.hasOwnProperty(C) && ((a = n[C]), (this[C] = a ? a(g) : g[C]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? Vr
          : yi),
        (this.isPropagationStopped = yi),
        this
      );
    }
    return (
      J(o.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Vr));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Vr));
        },
        persist: function () {},
        isPersistent: Vr,
      }),
      o
    );
  }
  var vi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    wd = Et(vi),
    Ns = J({}, vi, { view: 0, detail: 0 }),
    mk = Et(Ns),
    kd,
    Cd,
    Ds,
    Ml = J({}, Ns, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Pd,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== Ds &&
              (Ds && n.type === "mousemove"
                ? ((kd = n.screenX - Ds.screenX), (Cd = n.screenY - Ds.screenY))
                : (Cd = kd = 0),
              (Ds = n)),
            kd);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : Cd;
      },
    }),
    Jm = Et(Ml),
    gk = J({}, Ml, { dataTransfer: 0 }),
    yk = Et(gk),
    vk = J({}, Ns, { relatedTarget: 0 }),
    _d = Et(vk),
    bk = J({}, vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sk = Et(bk),
    xk = J({}, vi, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    wk = Et(xk),
    kk = J({}, vi, { data: 0 }),
    Zm = Et(kk),
    Ck = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    _k = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Pk = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Tk(n) {
    var o = this.nativeEvent;
    return o.getModifierState
      ? o.getModifierState(n)
      : (n = Pk[n])
      ? !!o[n]
      : !1;
  }
  function Pd() {
    return Tk;
  }
  var Ek = J({}, Ns, {
      key: function (n) {
        if (n.key) {
          var o = Ck[n.key] || n.key;
          if (o !== "Unidentified") return o;
        }
        return n.type === "keypress"
          ? ((n = qn(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
          ? _k[n.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Pd,
      charCode: function (n) {
        return n.type === "keypress" ? qn(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? qn(n)
          : n.type === "keydown" || n.type === "keyup"
          ? n.keyCode
          : 0;
      },
    }),
    Rk = Et(Ek),
    Ak = J({}, Ml, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    eg = Et(Ak),
    $k = J({}, Ns, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pd,
    }),
    Ok = Et($k),
    Mk = J({}, vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zk = Et(Mk),
    jk = J({}, Ml, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
          ? -n.wheelDeltaX
          : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
          ? -n.wheelDeltaY
          : "wheelDelta" in n
          ? -n.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Lk = Et(jk),
    Nk = [9, 13, 27, 32],
    Td = d && "CompositionEvent" in window,
    Is = null;
  d && "documentMode" in document && (Is = document.documentMode);
  var Dk = d && "TextEvent" in window && !Is,
    tg = d && (!Td || (Is && 8 < Is && 11 >= Is)),
    ng = " ",
    rg = !1;
  function og(n, o) {
    switch (n) {
      case "keyup":
        return Nk.indexOf(o.keyCode) !== -1;
      case "keydown":
        return o.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ig(n) {
    return (n = n.detail), typeof n == "object" && "data" in n ? n.data : null;
  }
  var bi = !1;
  function Ik(n, o) {
    switch (n) {
      case "compositionend":
        return ig(o);
      case "keypress":
        return o.which !== 32 ? null : ((rg = !0), ng);
      case "textInput":
        return (n = o.data), n === ng && rg ? null : n;
      default:
        return null;
    }
  }
  function Fk(n, o) {
    if (bi)
      return n === "compositionend" || (!Td && og(n, o))
        ? ((n = Tt()), (Pt = Ve = _e = null), (bi = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
          if (o.char && 1 < o.char.length) return o.char;
          if (o.which) return String.fromCharCode(o.which);
        }
        return null;
      case "compositionend":
        return tg && o.locale !== "ko" ? null : o.data;
      default:
        return null;
    }
  }
  var Bk = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function sg(n) {
    var o = n && n.nodeName && n.nodeName.toLowerCase();
    return o === "input" ? !!Bk[n.type] : o === "textarea";
  }
  function ag(n, o, a, c) {
    yl(c),
      (o = Dl(o, "onChange")),
      0 < o.length &&
        ((a = new wd("onChange", "change", null, a, c)),
        n.push({ event: a, listeners: o }));
  }
  var Fs = null,
    Bs = null;
  function Vk(n) {
    _g(n, 0);
  }
  function zl(n) {
    var o = Ci(n);
    if (gs(o)) return n;
  }
  function Uk(n, o) {
    if (n === "change") return o;
  }
  var lg = !1;
  if (d) {
    var Ed;
    if (d) {
      var Rd = "oninput" in document;
      if (!Rd) {
        var ug = document.createElement("div");
        ug.setAttribute("oninput", "return;"),
          (Rd = typeof ug.oninput == "function");
      }
      Ed = Rd;
    } else Ed = !1;
    lg = Ed && (!document.documentMode || 9 < document.documentMode);
  }
  function cg() {
    Fs && (Fs.detachEvent("onpropertychange", dg), (Bs = Fs = null));
  }
  function dg(n) {
    if (n.propertyName === "value" && zl(Bs)) {
      var o = [];
      ag(o, Bs, n, _s(n)), ln(Vk, o);
    }
  }
  function Wk(n, o, a) {
    n === "focusin"
      ? (cg(), (Fs = o), (Bs = a), Fs.attachEvent("onpropertychange", dg))
      : n === "focusout" && cg();
  }
  function Hk(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return zl(Bs);
  }
  function qk(n, o) {
    if (n === "click") return zl(o);
  }
  function Kk(n, o) {
    if (n === "input" || n === "change") return zl(o);
  }
  function Gk(n, o) {
    return (n === o && (n !== 0 || 1 / n === 1 / o)) || (n !== n && o !== o);
  }
  var Rn = typeof Object.is == "function" ? Object.is : Gk;
  function Vs(n, o) {
    if (Rn(n, o)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof o != "object" ||
      o === null
    )
      return !1;
    var a = Object.keys(n),
      c = Object.keys(o);
    if (a.length !== c.length) return !1;
    for (c = 0; c < a.length; c++) {
      var h = a[c];
      if (!f.call(o, h) || !Rn(n[h], o[h])) return !1;
    }
    return !0;
  }
  function fg(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function hg(n, o) {
    var a = fg(n);
    n = 0;
    for (var c; a; ) {
      if (a.nodeType === 3) {
        if (((c = n + a.textContent.length), n <= o && c >= o))
          return { node: a, offset: o - n };
        n = c;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = fg(a);
    }
  }
  function pg(n, o) {
    return n && o
      ? n === o
        ? !0
        : n && n.nodeType === 3
        ? !1
        : o && o.nodeType === 3
        ? pg(n, o.parentNode)
        : "contains" in n
        ? n.contains(o)
        : n.compareDocumentPosition
        ? !!(n.compareDocumentPosition(o) & 16)
        : !1
      : !1;
  }
  function mg() {
    for (var n = window, o = ri(); o instanceof n.HTMLIFrameElement; ) {
      try {
        var a = typeof o.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) n = o.contentWindow;
      else break;
      o = ri(n.document);
    }
    return o;
  }
  function Ad(n) {
    var o = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      o &&
      ((o === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        o === "textarea" ||
        n.contentEditable === "true")
    );
  }
  function Yk(n) {
    var o = mg(),
      a = n.focusedElem,
      c = n.selectionRange;
    if (
      o !== a &&
      a &&
      a.ownerDocument &&
      pg(a.ownerDocument.documentElement, a)
    ) {
      if (c !== null && Ad(a)) {
        if (
          ((o = c.start),
          (n = c.end),
          n === void 0 && (n = o),
          "selectionStart" in a)
        )
          (a.selectionStart = o),
            (a.selectionEnd = Math.min(n, a.value.length));
        else if (
          ((n = ((o = a.ownerDocument || document) && o.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var h = a.textContent.length,
            g = Math.min(c.start, h);
          (c = c.end === void 0 ? g : Math.min(c.end, h)),
            !n.extend && g > c && ((h = c), (c = g), (g = h)),
            (h = hg(a, g));
          var v = hg(a, c);
          h &&
            v &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== h.node ||
              n.anchorOffset !== h.offset ||
              n.focusNode !== v.node ||
              n.focusOffset !== v.offset) &&
            ((o = o.createRange()),
            o.setStart(h.node, h.offset),
            n.removeAllRanges(),
            g > c
              ? (n.addRange(o), n.extend(v.node, v.offset))
              : (o.setEnd(v.node, v.offset), n.addRange(o)));
        }
      }
      for (o = [], n = a; (n = n.parentNode); )
        n.nodeType === 1 &&
          o.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < o.length; a++)
        (n = o[a]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var Xk = d && "documentMode" in document && 11 >= document.documentMode,
    Si = null,
    $d = null,
    Us = null,
    Od = !1;
  function gg(n, o, a) {
    var c =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Od ||
      Si == null ||
      Si !== ri(c) ||
      ((c = Si),
      "selectionStart" in c && Ad(c)
        ? (c = { start: c.selectionStart, end: c.selectionEnd })
        : ((c = (
            (c.ownerDocument && c.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset,
          })),
      (Us && Vs(Us, c)) ||
        ((Us = c),
        (c = Dl($d, "onSelect")),
        0 < c.length &&
          ((o = new wd("onSelect", "select", null, o, a)),
          n.push({ event: o, listeners: c }),
          (o.target = Si))));
  }
  function jl(n, o) {
    var a = {};
    return (
      (a[n.toLowerCase()] = o.toLowerCase()),
      (a["Webkit" + n] = "webkit" + o),
      (a["Moz" + n] = "moz" + o),
      a
    );
  }
  var xi = {
      animationend: jl("Animation", "AnimationEnd"),
      animationiteration: jl("Animation", "AnimationIteration"),
      animationstart: jl("Animation", "AnimationStart"),
      transitionend: jl("Transition", "TransitionEnd"),
    },
    Md = {},
    yg = {};
  d &&
    ((yg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xi.animationend.animation,
      delete xi.animationiteration.animation,
      delete xi.animationstart.animation),
    "TransitionEvent" in window || delete xi.transitionend.transition);
  function Ll(n) {
    if (Md[n]) return Md[n];
    if (!xi[n]) return n;
    var o = xi[n],
      a;
    for (a in o) if (o.hasOwnProperty(a) && a in yg) return (Md[n] = o[a]);
    return n;
  }
  var vg = Ll("animationend"),
    bg = Ll("animationiteration"),
    Sg = Ll("animationstart"),
    xg = Ll("transitionend"),
    wg = new Map(),
    kg =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ur(n, o) {
    wg.set(n, o), l(o, [n]);
  }
  for (var zd = 0; zd < kg.length; zd++) {
    var jd = kg[zd],
      Qk = jd.toLowerCase(),
      Jk = jd[0].toUpperCase() + jd.slice(1);
    Ur(Qk, "on" + Jk);
  }
  Ur(vg, "onAnimationEnd"),
    Ur(bg, "onAnimationIteration"),
    Ur(Sg, "onAnimationStart"),
    Ur("dblclick", "onDoubleClick"),
    Ur("focusin", "onFocus"),
    Ur("focusout", "onBlur"),
    Ur(xg, "onTransitionEnd"),
    u("onMouseEnter", ["mouseout", "mouseover"]),
    u("onMouseLeave", ["mouseout", "mouseover"]),
    u("onPointerEnter", ["pointerout", "pointerover"]),
    u("onPointerLeave", ["pointerout", "pointerover"]),
    l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ws =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Zk = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ws)
    );
  function Cg(n, o, a) {
    var c = n.type || "unknown-event";
    (n.currentTarget = a), cd(c, o, void 0, n), (n.currentTarget = null);
  }
  function _g(n, o) {
    o = (o & 4) !== 0;
    for (var a = 0; a < n.length; a++) {
      var c = n[a],
        h = c.event;
      c = c.listeners;
      e: {
        var g = void 0;
        if (o)
          for (var v = c.length - 1; 0 <= v; v--) {
            var C = c[v],
              R = C.instance,
              F = C.currentTarget;
            if (((C = C.listener), R !== g && h.isPropagationStopped()))
              break e;
            Cg(h, C, F), (g = R);
          }
        else
          for (v = 0; v < c.length; v++) {
            if (
              ((C = c[v]),
              (R = C.instance),
              (F = C.currentTarget),
              (C = C.listener),
              R !== g && h.isPropagationStopped())
            )
              break e;
            Cg(h, C, F), (g = R);
          }
      }
    }
    if (si) throw ((n = Es), (si = !1), (Es = null), n);
  }
  function Ye(n, o) {
    var a = o[Ud];
    a === void 0 && (a = o[Ud] = new Set());
    var c = n + "__bubble";
    a.has(c) || (Pg(o, n, 2, !1), a.add(c));
  }
  function Ld(n, o, a) {
    var c = 0;
    o && (c |= 4), Pg(a, n, c, o);
  }
  var Nl = "_reactListening" + Math.random().toString(36).slice(2);
  function Hs(n) {
    if (!n[Nl]) {
      (n[Nl] = !0),
        i.forEach(function (a) {
          a !== "selectionchange" && (Zk.has(a) || Ld(a, !1, n), Ld(a, !0, n));
        });
      var o = n.nodeType === 9 ? n : n.ownerDocument;
      o === null || o[Nl] || ((o[Nl] = !0), Ld("selectionchange", !1, o));
    }
  }
  function Pg(n, o, a, c) {
    switch (Ue(o)) {
      case 1:
        var h = j;
        break;
      case 4:
        h = B;
        break;
      default:
        h = te;
    }
    (a = h.bind(null, o, a, n)),
      (h = void 0),
      !Ts ||
        (o !== "touchstart" && o !== "touchmove" && o !== "wheel") ||
        (h = !0),
      c
        ? h !== void 0
          ? n.addEventListener(o, a, { capture: !0, passive: h })
          : n.addEventListener(o, a, !0)
        : h !== void 0
        ? n.addEventListener(o, a, { passive: h })
        : n.addEventListener(o, a, !1);
  }
  function Nd(n, o, a, c, h) {
    var g = c;
    if (!(o & 1) && !(o & 2) && c !== null)
      e: for (;;) {
        if (c === null) return;
        var v = c.tag;
        if (v === 3 || v === 4) {
          var C = c.stateNode.containerInfo;
          if (C === h || (C.nodeType === 8 && C.parentNode === h)) break;
          if (v === 4)
            for (v = c.return; v !== null; ) {
              var R = v.tag;
              if (
                (R === 3 || R === 4) &&
                ((R = v.stateNode.containerInfo),
                R === h || (R.nodeType === 8 && R.parentNode === h))
              )
                return;
              v = v.return;
            }
          for (; C !== null; ) {
            if (((v = Po(C)), v === null)) return;
            if (((R = v.tag), R === 5 || R === 6)) {
              c = g = v;
              continue e;
            }
            C = C.parentNode;
          }
        }
        c = c.return;
      }
    ln(function () {
      var F = g,
        K = _s(a),
        G = [];
      e: {
        var q = wg.get(n);
        if (q !== void 0) {
          var ee = wd,
            oe = n;
          switch (n) {
            case "keypress":
              if (qn(a) === 0) break e;
            case "keydown":
            case "keyup":
              ee = Rk;
              break;
            case "focusin":
              (oe = "focus"), (ee = _d);
              break;
            case "focusout":
              (oe = "blur"), (ee = _d);
              break;
            case "beforeblur":
            case "afterblur":
              ee = _d;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = Jm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = yk;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = Ok;
              break;
            case vg:
            case bg:
            case Sg:
              ee = Sk;
              break;
            case xg:
              ee = zk;
              break;
            case "scroll":
              ee = mk;
              break;
            case "wheel":
              ee = Lk;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = wk;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = eg;
          }
          var se = (o & 4) !== 0,
            st = !se && n === "scroll",
            N = se ? (q !== null ? q + "Capture" : null) : q;
          se = [];
          for (var $ = F, D; $ !== null; ) {
            D = $;
            var Q = D.stateNode;
            if (
              (D.tag === 5 &&
                Q !== null &&
                ((D = Q),
                N !== null &&
                  ((Q = vo($, N)), Q != null && se.push(qs($, Q, D)))),
              st)
            )
              break;
            $ = $.return;
          }
          0 < se.length &&
            ((q = new ee(q, oe, null, a, K)),
            G.push({ event: q, listeners: se }));
        }
      }
      if (!(o & 7)) {
        e: {
          if (
            ((q = n === "mouseover" || n === "pointerover"),
            (ee = n === "mouseout" || n === "pointerout"),
            q &&
              a !== oi &&
              (oe = a.relatedTarget || a.fromElement) &&
              (Po(oe) || oe[pr]))
          )
            break e;
          if (
            (ee || q) &&
            ((q =
              K.window === K
                ? K
                : (q = K.ownerDocument)
                ? q.defaultView || q.parentWindow
                : window),
            ee
              ? ((oe = a.relatedTarget || a.toElement),
                (ee = F),
                (oe = oe ? Po(oe) : null),
                oe !== null &&
                  ((st = Bt(oe)),
                  oe !== st || (oe.tag !== 5 && oe.tag !== 6)) &&
                  (oe = null))
              : ((ee = null), (oe = F)),
            ee !== oe)
          ) {
            if (
              ((se = Jm),
              (Q = "onMouseLeave"),
              (N = "onMouseEnter"),
              ($ = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((se = eg),
                (Q = "onPointerLeave"),
                (N = "onPointerEnter"),
                ($ = "pointer")),
              (st = ee == null ? q : Ci(ee)),
              (D = oe == null ? q : Ci(oe)),
              (q = new se(Q, $ + "leave", ee, a, K)),
              (q.target = st),
              (q.relatedTarget = D),
              (Q = null),
              Po(K) === F &&
                ((se = new se(N, $ + "enter", oe, a, K)),
                (se.target = D),
                (se.relatedTarget = st),
                (Q = se)),
              (st = Q),
              ee && oe)
            )
              t: {
                for (se = ee, N = oe, $ = 0, D = se; D; D = wi(D)) $++;
                for (D = 0, Q = N; Q; Q = wi(Q)) D++;
                for (; 0 < $ - D; ) (se = wi(se)), $--;
                for (; 0 < D - $; ) (N = wi(N)), D--;
                for (; $--; ) {
                  if (se === N || (N !== null && se === N.alternate)) break t;
                  (se = wi(se)), (N = wi(N));
                }
                se = null;
              }
            else se = null;
            ee !== null && Tg(G, q, ee, se, !1),
              oe !== null && st !== null && Tg(G, st, oe, se, !0);
          }
        }
        e: {
          if (
            ((q = F ? Ci(F) : window),
            (ee = q.nodeName && q.nodeName.toLowerCase()),
            ee === "select" || (ee === "input" && q.type === "file"))
          )
            var ae = Uk;
          else if (sg(q))
            if (lg) ae = Kk;
            else {
              ae = Hk;
              var fe = Wk;
            }
          else
            (ee = q.nodeName) &&
              ee.toLowerCase() === "input" &&
              (q.type === "checkbox" || q.type === "radio") &&
              (ae = qk);
          if (ae && (ae = ae(n, F))) {
            ag(G, ae, a, K);
            break e;
          }
          fe && fe(n, q, F),
            n === "focusout" &&
              (fe = q._wrapperState) &&
              fe.controlled &&
              q.type === "number" &&
              bs(q, "number", q.value);
        }
        switch (((fe = F ? Ci(F) : window), n)) {
          case "focusin":
            (sg(fe) || fe.contentEditable === "true") &&
              ((Si = fe), ($d = F), (Us = null));
            break;
          case "focusout":
            Us = $d = Si = null;
            break;
          case "mousedown":
            Od = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Od = !1), gg(G, a, K);
            break;
          case "selectionchange":
            if (Xk) break;
          case "keydown":
          case "keyup":
            gg(G, a, K);
        }
        var he;
        if (Td)
          e: {
            switch (n) {
              case "compositionstart":
                var ye = "onCompositionStart";
                break e;
              case "compositionend":
                ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ye = "onCompositionUpdate";
                break e;
            }
            ye = void 0;
          }
        else
          bi
            ? og(n, a) && (ye = "onCompositionEnd")
            : n === "keydown" &&
              a.keyCode === 229 &&
              (ye = "onCompositionStart");
        ye &&
          (tg &&
            a.locale !== "ko" &&
            (bi || ye !== "onCompositionStart"
              ? ye === "onCompositionEnd" && bi && (he = Tt())
              : ((_e = K),
                (Ve = "value" in _e ? _e.value : _e.textContent),
                (bi = !0))),
          (fe = Dl(F, ye)),
          0 < fe.length &&
            ((ye = new Zm(ye, n, null, a, K)),
            G.push({ event: ye, listeners: fe }),
            he
              ? (ye.data = he)
              : ((he = ig(a)), he !== null && (ye.data = he)))),
          (he = Dk ? Ik(n, a) : Fk(n, a)) &&
            ((F = Dl(F, "onBeforeInput")),
            0 < F.length &&
              ((K = new Zm("onBeforeInput", "beforeinput", null, a, K)),
              G.push({ event: K, listeners: F }),
              (K.data = he)));
      }
      _g(G, o);
    });
  }
  function qs(n, o, a) {
    return { instance: n, listener: o, currentTarget: a };
  }
  function Dl(n, o) {
    for (var a = o + "Capture", c = []; n !== null; ) {
      var h = n,
        g = h.stateNode;
      h.tag === 5 &&
        g !== null &&
        ((h = g),
        (g = vo(n, a)),
        g != null && c.unshift(qs(n, g, h)),
        (g = vo(n, o)),
        g != null && c.push(qs(n, g, h))),
        (n = n.return);
    }
    return c;
  }
  function wi(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Tg(n, o, a, c, h) {
    for (var g = o._reactName, v = []; a !== null && a !== c; ) {
      var C = a,
        R = C.alternate,
        F = C.stateNode;
      if (R !== null && R === c) break;
      C.tag === 5 &&
        F !== null &&
        ((C = F),
        h
          ? ((R = vo(a, g)), R != null && v.unshift(qs(a, R, C)))
          : h || ((R = vo(a, g)), R != null && v.push(qs(a, R, C)))),
        (a = a.return);
    }
    v.length !== 0 && n.push({ event: o, listeners: v });
  }
  var eC = /\r\n?/g,
    tC = /\u0000|\uFFFD/g;
  function Eg(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        eC,
        `
`
      )
      .replace(tC, "");
  }
  function Il(n, o, a) {
    if (((o = Eg(o)), Eg(n) !== o && a)) throw Error(r(425));
  }
  function Fl() {}
  var Dd = null,
    Id = null;
  function Fd(n, o) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof o.children == "string" ||
      typeof o.children == "number" ||
      (typeof o.dangerouslySetInnerHTML == "object" &&
        o.dangerouslySetInnerHTML !== null &&
        o.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Bd = typeof setTimeout == "function" ? setTimeout : void 0,
    nC = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Rg = typeof Promise == "function" ? Promise : void 0,
    rC =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Rg < "u"
        ? function (n) {
            return Rg.resolve(null).then(n).catch(oC);
          }
        : Bd;
  function oC(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function Vd(n, o) {
    var a = o,
      c = 0;
    do {
      var h = a.nextSibling;
      if ((n.removeChild(a), h && h.nodeType === 8))
        if (((a = h.data), a === "/$")) {
          if (c === 0) {
            n.removeChild(h), Fr(o);
            return;
          }
          c--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || c++;
      a = h;
    } while (a);
    Fr(o);
  }
  function Wr(n) {
    for (; n != null; n = n.nextSibling) {
      var o = n.nodeType;
      if (o === 1 || o === 3) break;
      if (o === 8) {
        if (((o = n.data), o === "$" || o === "$!" || o === "$?")) break;
        if (o === "/$") return null;
      }
    }
    return n;
  }
  function Ag(n) {
    n = n.previousSibling;
    for (var o = 0; n; ) {
      if (n.nodeType === 8) {
        var a = n.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (o === 0) return n;
          o--;
        } else a === "/$" && o++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ki = Math.random().toString(36).slice(2),
    Kn = "__reactFiber$" + ki,
    Ks = "__reactProps$" + ki,
    pr = "__reactContainer$" + ki,
    Ud = "__reactEvents$" + ki,
    iC = "__reactListeners$" + ki,
    sC = "__reactHandles$" + ki;
  function Po(n) {
    var o = n[Kn];
    if (o) return o;
    for (var a = n.parentNode; a; ) {
      if ((o = a[pr] || a[Kn])) {
        if (
          ((a = o.alternate),
          o.child !== null || (a !== null && a.child !== null))
        )
          for (n = Ag(n); n !== null; ) {
            if ((a = n[Kn])) return a;
            n = Ag(n);
          }
        return o;
      }
      (n = a), (a = n.parentNode);
    }
    return null;
  }
  function Gs(n) {
    return (
      (n = n[Kn] || n[pr]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3)
        ? null
        : n
    );
  }
  function Ci(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(r(33));
  }
  function Bl(n) {
    return n[Ks] || null;
  }
  var Wd = [],
    _i = -1;
  function Hr(n) {
    return { current: n };
  }
  function Xe(n) {
    0 > _i || ((n.current = Wd[_i]), (Wd[_i] = null), _i--);
  }
  function He(n, o) {
    _i++, (Wd[_i] = n.current), (n.current = o);
  }
  var qr = {},
    Rt = Hr(qr),
    Vt = Hr(!1),
    To = qr;
  function Pi(n, o) {
    var a = n.type.contextTypes;
    if (!a) return qr;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === o)
      return c.__reactInternalMemoizedMaskedChildContext;
    var h = {},
      g;
    for (g in a) h[g] = o[g];
    return (
      c &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = o),
        (n.__reactInternalMemoizedMaskedChildContext = h)),
      h
    );
  }
  function Ut(n) {
    return (n = n.childContextTypes), n != null;
  }
  function Vl() {
    Xe(Vt), Xe(Rt);
  }
  function $g(n, o, a) {
    if (Rt.current !== qr) throw Error(r(168));
    He(Rt, o), He(Vt, a);
  }
  function Og(n, o, a) {
    var c = n.stateNode;
    if (((o = o.childContextTypes), typeof c.getChildContext != "function"))
      return a;
    c = c.getChildContext();
    for (var h in c) if (!(h in o)) throw Error(r(108, ue(n) || "Unknown", h));
    return J({}, a, c);
  }
  function Ul(n) {
    return (
      (n =
        ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) ||
        qr),
      (To = Rt.current),
      He(Rt, n),
      He(Vt, Vt.current),
      !0
    );
  }
  function Mg(n, o, a) {
    var c = n.stateNode;
    if (!c) throw Error(r(169));
    a
      ? ((n = Og(n, o, To)),
        (c.__reactInternalMemoizedMergedChildContext = n),
        Xe(Vt),
        Xe(Rt),
        He(Rt, n))
      : Xe(Vt),
      He(Vt, a);
  }
  var mr = null,
    Wl = !1,
    Hd = !1;
  function zg(n) {
    mr === null ? (mr = [n]) : mr.push(n);
  }
  function aC(n) {
    (Wl = !0), zg(n);
  }
  function Kr() {
    if (!Hd && mr !== null) {
      Hd = !0;
      var n = 0,
        o = Oe;
      try {
        var a = mr;
        for (Oe = 1; n < a.length; n++) {
          var c = a[n];
          do c = c(!0);
          while (c !== null);
        }
        (mr = null), (Wl = !1);
      } catch (h) {
        throw (mr !== null && (mr = mr.slice(n + 1)), _l(Dr, Kr), h);
      } finally {
        (Oe = o), (Hd = !1);
      }
    }
    return null;
  }
  var Ti = [],
    Ei = 0,
    Hl = null,
    ql = 0,
    pn = [],
    mn = 0,
    Eo = null,
    gr = 1,
    yr = "";
  function Ro(n, o) {
    (Ti[Ei++] = ql), (Ti[Ei++] = Hl), (Hl = n), (ql = o);
  }
  function jg(n, o, a) {
    (pn[mn++] = gr), (pn[mn++] = yr), (pn[mn++] = Eo), (Eo = n);
    var c = gr;
    n = yr;
    var h = 32 - Qt(c) - 1;
    (c &= ~(1 << h)), (a += 1);
    var g = 32 - Qt(o) + h;
    if (30 < g) {
      var v = h - (h % 5);
      (g = (c & ((1 << v) - 1)).toString(32)),
        (c >>= v),
        (h -= v),
        (gr = (1 << (32 - Qt(o) + h)) | (a << h) | c),
        (yr = g + n);
    } else (gr = (1 << g) | (a << h) | c), (yr = n);
  }
  function qd(n) {
    n.return !== null && (Ro(n, 1), jg(n, 1, 0));
  }
  function Kd(n) {
    for (; n === Hl; )
      (Hl = Ti[--Ei]), (Ti[Ei] = null), (ql = Ti[--Ei]), (Ti[Ei] = null);
    for (; n === Eo; )
      (Eo = pn[--mn]),
        (pn[mn] = null),
        (yr = pn[--mn]),
        (pn[mn] = null),
        (gr = pn[--mn]),
        (pn[mn] = null);
  }
  var Jt = null,
    Zt = null,
    Ze = !1,
    An = null;
  function Lg(n, o) {
    var a = bn(5, null, null, 0);
    (a.elementType = "DELETED"),
      (a.stateNode = o),
      (a.return = n),
      (o = n.deletions),
      o === null ? ((n.deletions = [a]), (n.flags |= 16)) : o.push(a);
  }
  function Ng(n, o) {
    switch (n.tag) {
      case 5:
        var a = n.type;
        return (
          (o =
            o.nodeType !== 1 || a.toLowerCase() !== o.nodeName.toLowerCase()
              ? null
              : o),
          o !== null
            ? ((n.stateNode = o), (Jt = n), (Zt = Wr(o.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (o = n.pendingProps === "" || o.nodeType !== 3 ? null : o),
          o !== null ? ((n.stateNode = o), (Jt = n), (Zt = null), !0) : !1
        );
      case 13:
        return (
          (o = o.nodeType !== 8 ? null : o),
          o !== null
            ? ((a = Eo !== null ? { id: gr, overflow: yr } : null),
              (n.memoizedState = {
                dehydrated: o,
                treeContext: a,
                retryLane: 1073741824,
              }),
              (a = bn(18, null, null, 0)),
              (a.stateNode = o),
              (a.return = n),
              (n.child = a),
              (Jt = n),
              (Zt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Gd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Yd(n) {
    if (Ze) {
      var o = Zt;
      if (o) {
        var a = o;
        if (!Ng(n, o)) {
          if (Gd(n)) throw Error(r(418));
          o = Wr(a.nextSibling);
          var c = Jt;
          o && Ng(n, o)
            ? Lg(c, a)
            : ((n.flags = (n.flags & -4097) | 2), (Ze = !1), (Jt = n));
        }
      } else {
        if (Gd(n)) throw Error(r(418));
        (n.flags = (n.flags & -4097) | 2), (Ze = !1), (Jt = n);
      }
    }
  }
  function Dg(n) {
    for (
      n = n.return;
      n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;

    )
      n = n.return;
    Jt = n;
  }
  function Kl(n) {
    if (n !== Jt) return !1;
    if (!Ze) return Dg(n), (Ze = !0), !1;
    var o;
    if (
      ((o = n.tag !== 3) &&
        !(o = n.tag !== 5) &&
        ((o = n.type),
        (o = o !== "head" && o !== "body" && !Fd(n.type, n.memoizedProps))),
      o && (o = Zt))
    ) {
      if (Gd(n)) throw (Ig(), Error(r(418)));
      for (; o; ) Lg(n, o), (o = Wr(o.nextSibling));
    }
    if ((Dg(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(r(317));
      e: {
        for (n = n.nextSibling, o = 0; n; ) {
          if (n.nodeType === 8) {
            var a = n.data;
            if (a === "/$") {
              if (o === 0) {
                Zt = Wr(n.nextSibling);
                break e;
              }
              o--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || o++;
          }
          n = n.nextSibling;
        }
        Zt = null;
      }
    } else Zt = Jt ? Wr(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ig() {
    for (var n = Zt; n; ) n = Wr(n.nextSibling);
  }
  function Ri() {
    (Zt = Jt = null), (Ze = !1);
  }
  function Xd(n) {
    An === null ? (An = [n]) : An.push(n);
  }
  var lC = W.ReactCurrentBatchConfig;
  function Ys(n, o, a) {
    if (
      ((n = a.ref),
      n !== null && typeof n != "function" && typeof n != "object")
    ) {
      if (a._owner) {
        if (((a = a._owner), a)) {
          if (a.tag !== 1) throw Error(r(309));
          var c = a.stateNode;
        }
        if (!c) throw Error(r(147, n));
        var h = c,
          g = "" + n;
        return o !== null &&
          o.ref !== null &&
          typeof o.ref == "function" &&
          o.ref._stringRef === g
          ? o.ref
          : ((o = function (v) {
              var C = h.refs;
              v === null ? delete C[g] : (C[g] = v);
            }),
            (o._stringRef = g),
            o);
      }
      if (typeof n != "string") throw Error(r(284));
      if (!a._owner) throw Error(r(290, n));
    }
    return n;
  }
  function Gl(n, o) {
    throw (
      ((n = Object.prototype.toString.call(o)),
      Error(
        r(
          31,
          n === "[object Object]"
            ? "object with keys {" + Object.keys(o).join(", ") + "}"
            : n
        )
      ))
    );
  }
  function Fg(n) {
    var o = n._init;
    return o(n._payload);
  }
  function Bg(n) {
    function o(N, $) {
      if (n) {
        var D = N.deletions;
        D === null ? ((N.deletions = [$]), (N.flags |= 16)) : D.push($);
      }
    }
    function a(N, $) {
      if (!n) return null;
      for (; $ !== null; ) o(N, $), ($ = $.sibling);
      return null;
    }
    function c(N, $) {
      for (N = new Map(); $ !== null; )
        $.key !== null ? N.set($.key, $) : N.set($.index, $), ($ = $.sibling);
      return N;
    }
    function h(N, $) {
      return (N = to(N, $)), (N.index = 0), (N.sibling = null), N;
    }
    function g(N, $, D) {
      return (
        (N.index = D),
        n
          ? ((D = N.alternate),
            D !== null
              ? ((D = D.index), D < $ ? ((N.flags |= 2), $) : D)
              : ((N.flags |= 2), $))
          : ((N.flags |= 1048576), $)
      );
    }
    function v(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function C(N, $, D, Q) {
      return $ === null || $.tag !== 6
        ? (($ = Vf(D, N.mode, Q)), ($.return = N), $)
        : (($ = h($, D)), ($.return = N), $);
    }
    function R(N, $, D, Q) {
      var ae = D.type;
      return ae === U
        ? K(N, $, D.props.children, Q, D.key)
        : $ !== null &&
          ($.elementType === ae ||
            (typeof ae == "object" &&
              ae !== null &&
              ae.$$typeof === Be &&
              Fg(ae) === $.type))
        ? ((Q = h($, D.props)), (Q.ref = Ys(N, $, D)), (Q.return = N), Q)
        : ((Q = vu(D.type, D.key, D.props, null, N.mode, Q)),
          (Q.ref = Ys(N, $, D)),
          (Q.return = N),
          Q);
    }
    function F(N, $, D, Q) {
      return $ === null ||
        $.tag !== 4 ||
        $.stateNode.containerInfo !== D.containerInfo ||
        $.stateNode.implementation !== D.implementation
        ? (($ = Uf(D, N.mode, Q)), ($.return = N), $)
        : (($ = h($, D.children || [])), ($.return = N), $);
    }
    function K(N, $, D, Q, ae) {
      return $ === null || $.tag !== 7
        ? (($ = No(D, N.mode, Q, ae)), ($.return = N), $)
        : (($ = h($, D)), ($.return = N), $);
    }
    function G(N, $, D) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return ($ = Vf("" + $, N.mode, D)), ($.return = N), $;
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case E:
            return (
              (D = vu($.type, $.key, $.props, null, N.mode, D)),
              (D.ref = Ys(N, null, $)),
              (D.return = N),
              D
            );
          case I:
            return ($ = Uf($, N.mode, D)), ($.return = N), $;
          case Be:
            var Q = $._init;
            return G(N, Q($._payload), D);
        }
        if (Vn($) || ie($))
          return ($ = No($, N.mode, D, null)), ($.return = N), $;
        Gl(N, $);
      }
      return null;
    }
    function q(N, $, D, Q) {
      var ae = $ !== null ? $.key : null;
      if ((typeof D == "string" && D !== "") || typeof D == "number")
        return ae !== null ? null : C(N, $, "" + D, Q);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case E:
            return D.key === ae ? R(N, $, D, Q) : null;
          case I:
            return D.key === ae ? F(N, $, D, Q) : null;
          case Be:
            return (ae = D._init), q(N, $, ae(D._payload), Q);
        }
        if (Vn(D) || ie(D)) return ae !== null ? null : K(N, $, D, Q, null);
        Gl(N, D);
      }
      return null;
    }
    function ee(N, $, D, Q, ae) {
      if ((typeof Q == "string" && Q !== "") || typeof Q == "number")
        return (N = N.get(D) || null), C($, N, "" + Q, ae);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case E:
            return (
              (N = N.get(Q.key === null ? D : Q.key) || null), R($, N, Q, ae)
            );
          case I:
            return (
              (N = N.get(Q.key === null ? D : Q.key) || null), F($, N, Q, ae)
            );
          case Be:
            var fe = Q._init;
            return ee(N, $, D, fe(Q._payload), ae);
        }
        if (Vn(Q) || ie(Q)) return (N = N.get(D) || null), K($, N, Q, ae, null);
        Gl($, Q);
      }
      return null;
    }
    function oe(N, $, D, Q) {
      for (
        var ae = null, fe = null, he = $, ye = ($ = 0), bt = null;
        he !== null && ye < D.length;
        ye++
      ) {
        he.index > ye ? ((bt = he), (he = null)) : (bt = he.sibling);
        var Me = q(N, he, D[ye], Q);
        if (Me === null) {
          he === null && (he = bt);
          break;
        }
        n && he && Me.alternate === null && o(N, he),
          ($ = g(Me, $, ye)),
          fe === null ? (ae = Me) : (fe.sibling = Me),
          (fe = Me),
          (he = bt);
      }
      if (ye === D.length) return a(N, he), Ze && Ro(N, ye), ae;
      if (he === null) {
        for (; ye < D.length; ye++)
          (he = G(N, D[ye], Q)),
            he !== null &&
              (($ = g(he, $, ye)),
              fe === null ? (ae = he) : (fe.sibling = he),
              (fe = he));
        return Ze && Ro(N, ye), ae;
      }
      for (he = c(N, he); ye < D.length; ye++)
        (bt = ee(he, N, ye, D[ye], Q)),
          bt !== null &&
            (n &&
              bt.alternate !== null &&
              he.delete(bt.key === null ? ye : bt.key),
            ($ = g(bt, $, ye)),
            fe === null ? (ae = bt) : (fe.sibling = bt),
            (fe = bt));
      return (
        n &&
          he.forEach(function (no) {
            return o(N, no);
          }),
        Ze && Ro(N, ye),
        ae
      );
    }
    function se(N, $, D, Q) {
      var ae = ie(D);
      if (typeof ae != "function") throw Error(r(150));
      if (((D = ae.call(D)), D == null)) throw Error(r(151));
      for (
        var fe = (ae = null), he = $, ye = ($ = 0), bt = null, Me = D.next();
        he !== null && !Me.done;
        ye++, Me = D.next()
      ) {
        he.index > ye ? ((bt = he), (he = null)) : (bt = he.sibling);
        var no = q(N, he, Me.value, Q);
        if (no === null) {
          he === null && (he = bt);
          break;
        }
        n && he && no.alternate === null && o(N, he),
          ($ = g(no, $, ye)),
          fe === null ? (ae = no) : (fe.sibling = no),
          (fe = no),
          (he = bt);
      }
      if (Me.done) return a(N, he), Ze && Ro(N, ye), ae;
      if (he === null) {
        for (; !Me.done; ye++, Me = D.next())
          (Me = G(N, Me.value, Q)),
            Me !== null &&
              (($ = g(Me, $, ye)),
              fe === null ? (ae = Me) : (fe.sibling = Me),
              (fe = Me));
        return Ze && Ro(N, ye), ae;
      }
      for (he = c(N, he); !Me.done; ye++, Me = D.next())
        (Me = ee(he, N, ye, Me.value, Q)),
          Me !== null &&
            (n &&
              Me.alternate !== null &&
              he.delete(Me.key === null ? ye : Me.key),
            ($ = g(Me, $, ye)),
            fe === null ? (ae = Me) : (fe.sibling = Me),
            (fe = Me));
      return (
        n &&
          he.forEach(function (BC) {
            return o(N, BC);
          }),
        Ze && Ro(N, ye),
        ae
      );
    }
    function st(N, $, D, Q) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === U &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case E:
            e: {
              for (var ae = D.key, fe = $; fe !== null; ) {
                if (fe.key === ae) {
                  if (((ae = D.type), ae === U)) {
                    if (fe.tag === 7) {
                      a(N, fe.sibling),
                        ($ = h(fe, D.props.children)),
                        ($.return = N),
                        (N = $);
                      break e;
                    }
                  } else if (
                    fe.elementType === ae ||
                    (typeof ae == "object" &&
                      ae !== null &&
                      ae.$$typeof === Be &&
                      Fg(ae) === fe.type)
                  ) {
                    a(N, fe.sibling),
                      ($ = h(fe, D.props)),
                      ($.ref = Ys(N, fe, D)),
                      ($.return = N),
                      (N = $);
                    break e;
                  }
                  a(N, fe);
                  break;
                } else o(N, fe);
                fe = fe.sibling;
              }
              D.type === U
                ? (($ = No(D.props.children, N.mode, Q, D.key)),
                  ($.return = N),
                  (N = $))
                : ((Q = vu(D.type, D.key, D.props, null, N.mode, Q)),
                  (Q.ref = Ys(N, $, D)),
                  (Q.return = N),
                  (N = Q));
            }
            return v(N);
          case I:
            e: {
              for (fe = D.key; $ !== null; ) {
                if ($.key === fe)
                  if (
                    $.tag === 4 &&
                    $.stateNode.containerInfo === D.containerInfo &&
                    $.stateNode.implementation === D.implementation
                  ) {
                    a(N, $.sibling),
                      ($ = h($, D.children || [])),
                      ($.return = N),
                      (N = $);
                    break e;
                  } else {
                    a(N, $);
                    break;
                  }
                else o(N, $);
                $ = $.sibling;
              }
              ($ = Uf(D, N.mode, Q)), ($.return = N), (N = $);
            }
            return v(N);
          case Be:
            return (fe = D._init), st(N, $, fe(D._payload), Q);
        }
        if (Vn(D)) return oe(N, $, D, Q);
        if (ie(D)) return se(N, $, D, Q);
        Gl(N, D);
      }
      return (typeof D == "string" && D !== "") || typeof D == "number"
        ? ((D = "" + D),
          $ !== null && $.tag === 6
            ? (a(N, $.sibling), ($ = h($, D)), ($.return = N), (N = $))
            : (a(N, $), ($ = Vf(D, N.mode, Q)), ($.return = N), (N = $)),
          v(N))
        : a(N, $);
    }
    return st;
  }
  var Ai = Bg(!0),
    Vg = Bg(!1),
    Yl = Hr(null),
    Xl = null,
    $i = null,
    Qd = null;
  function Jd() {
    Qd = $i = Xl = null;
  }
  function Zd(n) {
    var o = Yl.current;
    Xe(Yl), (n._currentValue = o);
  }
  function ef(n, o, a) {
    for (; n !== null; ) {
      var c = n.alternate;
      if (
        ((n.childLanes & o) !== o
          ? ((n.childLanes |= o), c !== null && (c.childLanes |= o))
          : c !== null && (c.childLanes & o) !== o && (c.childLanes |= o),
        n === a)
      )
        break;
      n = n.return;
    }
  }
  function Oi(n, o) {
    (Xl = n),
      (Qd = $i = null),
      (n = n.dependencies),
      n !== null &&
        n.firstContext !== null &&
        (n.lanes & o && (Wt = !0), (n.firstContext = null));
  }
  function gn(n) {
    var o = n._currentValue;
    if (Qd !== n)
      if (((n = { context: n, memoizedValue: o, next: null }), $i === null)) {
        if (Xl === null) throw Error(r(308));
        ($i = n), (Xl.dependencies = { lanes: 0, firstContext: n });
      } else $i = $i.next = n;
    return o;
  }
  var Ao = null;
  function tf(n) {
    Ao === null ? (Ao = [n]) : Ao.push(n);
  }
  function Ug(n, o, a, c) {
    var h = o.interleaved;
    return (
      h === null ? ((a.next = a), tf(o)) : ((a.next = h.next), (h.next = a)),
      (o.interleaved = a),
      vr(n, c)
    );
  }
  function vr(n, o) {
    n.lanes |= o;
    var a = n.alternate;
    for (a !== null && (a.lanes |= o), a = n, n = n.return; n !== null; )
      (n.childLanes |= o),
        (a = n.alternate),
        a !== null && (a.childLanes |= o),
        (a = n),
        (n = n.return);
    return a.tag === 3 ? a.stateNode : null;
  }
  var Gr = !1;
  function nf(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Wg(n, o) {
    (n = n.updateQueue),
      o.updateQueue === n &&
        (o.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          effects: n.effects,
        });
  }
  function br(n, o) {
    return {
      eventTime: n,
      lane: o,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Yr(n, o, a) {
    var c = n.updateQueue;
    if (c === null) return null;
    if (((c = c.shared), Ae & 2)) {
      var h = c.pending;
      return (
        h === null ? (o.next = o) : ((o.next = h.next), (h.next = o)),
        (c.pending = o),
        vr(n, a)
      );
    }
    return (
      (h = c.interleaved),
      h === null ? ((o.next = o), tf(c)) : ((o.next = h.next), (h.next = o)),
      (c.interleaved = o),
      vr(n, a)
    );
  }
  function Ql(n, o, a) {
    if (
      ((o = o.updateQueue), o !== null && ((o = o.shared), (a & 4194240) !== 0))
    ) {
      var c = o.lanes;
      (c &= n.pendingLanes), (a |= c), (o.lanes = a), Os(n, a);
    }
  }
  function Hg(n, o) {
    var a = n.updateQueue,
      c = n.alternate;
    if (c !== null && ((c = c.updateQueue), a === c)) {
      var h = null,
        g = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var v = {
            eventTime: a.eventTime,
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          };
          g === null ? (h = g = v) : (g = g.next = v), (a = a.next);
        } while (a !== null);
        g === null ? (h = g = o) : (g = g.next = o);
      } else h = g = o;
      (a = {
        baseState: c.baseState,
        firstBaseUpdate: h,
        lastBaseUpdate: g,
        shared: c.shared,
        effects: c.effects,
      }),
        (n.updateQueue = a);
      return;
    }
    (n = a.lastBaseUpdate),
      n === null ? (a.firstBaseUpdate = o) : (n.next = o),
      (a.lastBaseUpdate = o);
  }
  function Jl(n, o, a, c) {
    var h = n.updateQueue;
    Gr = !1;
    var g = h.firstBaseUpdate,
      v = h.lastBaseUpdate,
      C = h.shared.pending;
    if (C !== null) {
      h.shared.pending = null;
      var R = C,
        F = R.next;
      (R.next = null), v === null ? (g = F) : (v.next = F), (v = R);
      var K = n.alternate;
      K !== null &&
        ((K = K.updateQueue),
        (C = K.lastBaseUpdate),
        C !== v &&
          (C === null ? (K.firstBaseUpdate = F) : (C.next = F),
          (K.lastBaseUpdate = R)));
    }
    if (g !== null) {
      var G = h.baseState;
      (v = 0), (K = F = R = null), (C = g);
      do {
        var q = C.lane,
          ee = C.eventTime;
        if ((c & q) === q) {
          K !== null &&
            (K = K.next =
              {
                eventTime: ee,
                lane: 0,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null,
              });
          e: {
            var oe = n,
              se = C;
            switch (((q = o), (ee = a), se.tag)) {
              case 1:
                if (((oe = se.payload), typeof oe == "function")) {
                  G = oe.call(ee, G, q);
                  break e;
                }
                G = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = se.payload),
                  (q = typeof oe == "function" ? oe.call(ee, G, q) : oe),
                  q == null)
                )
                  break e;
                G = J({}, G, q);
                break e;
              case 2:
                Gr = !0;
            }
          }
          C.callback !== null &&
            C.lane !== 0 &&
            ((n.flags |= 64),
            (q = h.effects),
            q === null ? (h.effects = [C]) : q.push(C));
        } else
          (ee = {
            eventTime: ee,
            lane: q,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            K === null ? ((F = K = ee), (R = G)) : (K = K.next = ee),
            (v |= q);
        if (((C = C.next), C === null)) {
          if (((C = h.shared.pending), C === null)) break;
          (q = C),
            (C = q.next),
            (q.next = null),
            (h.lastBaseUpdate = q),
            (h.shared.pending = null);
        }
      } while (!0);
      if (
        (K === null && (R = G),
        (h.baseState = R),
        (h.firstBaseUpdate = F),
        (h.lastBaseUpdate = K),
        (o = h.shared.interleaved),
        o !== null)
      ) {
        h = o;
        do (v |= h.lane), (h = h.next);
        while (h !== o);
      } else g === null && (h.shared.lanes = 0);
      (Mo |= v), (n.lanes = v), (n.memoizedState = G);
    }
  }
  function qg(n, o, a) {
    if (((n = o.effects), (o.effects = null), n !== null))
      for (o = 0; o < n.length; o++) {
        var c = n[o],
          h = c.callback;
        if (h !== null) {
          if (((c.callback = null), (c = a), typeof h != "function"))
            throw Error(r(191, h));
          h.call(c);
        }
      }
  }
  var Xs = {},
    Gn = Hr(Xs),
    Qs = Hr(Xs),
    Js = Hr(Xs);
  function $o(n) {
    if (n === Xs) throw Error(r(174));
    return n;
  }
  function rf(n, o) {
    switch ((He(Js, o), He(Qs, n), He(Gn, Xs), (n = o.nodeType), n)) {
      case 9:
      case 11:
        o = (o = o.documentElement) ? o.namespaceURI : ws(null, "");
        break;
      default:
        (n = n === 8 ? o.parentNode : o),
          (o = n.namespaceURI || null),
          (n = n.tagName),
          (o = ws(o, n));
    }
    Xe(Gn), He(Gn, o);
  }
  function Mi() {
    Xe(Gn), Xe(Qs), Xe(Js);
  }
  function Kg(n) {
    $o(Js.current);
    var o = $o(Gn.current),
      a = ws(o, n.type);
    o !== a && (He(Qs, n), He(Gn, a));
  }
  function of(n) {
    Qs.current === n && (Xe(Gn), Xe(Qs));
  }
  var et = Hr(0);
  function Zl(n) {
    for (var o = n; o !== null; ) {
      if (o.tag === 13) {
        var a = o.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return o;
      } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
        if (o.flags & 128) return o;
      } else if (o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === n) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === n) return null;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
    return null;
  }
  var sf = [];
  function af() {
    for (var n = 0; n < sf.length; n++)
      sf[n]._workInProgressVersionPrimary = null;
    sf.length = 0;
  }
  var eu = W.ReactCurrentDispatcher,
    lf = W.ReactCurrentBatchConfig,
    Oo = 0,
    tt = null,
    ht = null,
    yt = null,
    tu = !1,
    Zs = !1,
    ea = 0,
    uC = 0;
  function At() {
    throw Error(r(321));
  }
  function uf(n, o) {
    if (o === null) return !1;
    for (var a = 0; a < o.length && a < n.length; a++)
      if (!Rn(n[a], o[a])) return !1;
    return !0;
  }
  function cf(n, o, a, c, h, g) {
    if (
      ((Oo = g),
      (tt = o),
      (o.memoizedState = null),
      (o.updateQueue = null),
      (o.lanes = 0),
      (eu.current = n === null || n.memoizedState === null ? hC : pC),
      (n = a(c, h)),
      Zs)
    ) {
      g = 0;
      do {
        if (((Zs = !1), (ea = 0), 25 <= g)) throw Error(r(301));
        (g += 1),
          (yt = ht = null),
          (o.updateQueue = null),
          (eu.current = mC),
          (n = a(c, h));
      } while (Zs);
    }
    if (
      ((eu.current = ou),
      (o = ht !== null && ht.next !== null),
      (Oo = 0),
      (yt = ht = tt = null),
      (tu = !1),
      o)
    )
      throw Error(r(300));
    return n;
  }
  function df() {
    var n = ea !== 0;
    return (ea = 0), n;
  }
  function Yn() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return yt === null ? (tt.memoizedState = yt = n) : (yt = yt.next = n), yt;
  }
  function yn() {
    if (ht === null) {
      var n = tt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = ht.next;
    var o = yt === null ? tt.memoizedState : yt.next;
    if (o !== null) (yt = o), (ht = n);
    else {
      if (n === null) throw Error(r(310));
      (ht = n),
        (n = {
          memoizedState: ht.memoizedState,
          baseState: ht.baseState,
          baseQueue: ht.baseQueue,
          queue: ht.queue,
          next: null,
        }),
        yt === null ? (tt.memoizedState = yt = n) : (yt = yt.next = n);
    }
    return yt;
  }
  function ta(n, o) {
    return typeof o == "function" ? o(n) : o;
  }
  function ff(n) {
    var o = yn(),
      a = o.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var c = ht,
      h = c.baseQueue,
      g = a.pending;
    if (g !== null) {
      if (h !== null) {
        var v = h.next;
        (h.next = g.next), (g.next = v);
      }
      (c.baseQueue = h = g), (a.pending = null);
    }
    if (h !== null) {
      (g = h.next), (c = c.baseState);
      var C = (v = null),
        R = null,
        F = g;
      do {
        var K = F.lane;
        if ((Oo & K) === K)
          R !== null &&
            (R = R.next =
              {
                lane: 0,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null,
              }),
            (c = F.hasEagerState ? F.eagerState : n(c, F.action));
        else {
          var G = {
            lane: K,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null,
          };
          R === null ? ((C = R = G), (v = c)) : (R = R.next = G),
            (tt.lanes |= K),
            (Mo |= K);
        }
        F = F.next;
      } while (F !== null && F !== g);
      R === null ? (v = c) : (R.next = C),
        Rn(c, o.memoizedState) || (Wt = !0),
        (o.memoizedState = c),
        (o.baseState = v),
        (o.baseQueue = R),
        (a.lastRenderedState = c);
    }
    if (((n = a.interleaved), n !== null)) {
      h = n;
      do (g = h.lane), (tt.lanes |= g), (Mo |= g), (h = h.next);
      while (h !== n);
    } else h === null && (a.lanes = 0);
    return [o.memoizedState, a.dispatch];
  }
  function hf(n) {
    var o = yn(),
      a = o.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var c = a.dispatch,
      h = a.pending,
      g = o.memoizedState;
    if (h !== null) {
      a.pending = null;
      var v = (h = h.next);
      do (g = n(g, v.action)), (v = v.next);
      while (v !== h);
      Rn(g, o.memoizedState) || (Wt = !0),
        (o.memoizedState = g),
        o.baseQueue === null && (o.baseState = g),
        (a.lastRenderedState = g);
    }
    return [g, c];
  }
  function Gg() {}
  function Yg(n, o) {
    var a = tt,
      c = yn(),
      h = o(),
      g = !Rn(c.memoizedState, h);
    if (
      (g && ((c.memoizedState = h), (Wt = !0)),
      (c = c.queue),
      pf(Jg.bind(null, a, c, n), [n]),
      c.getSnapshot !== o || g || (yt !== null && yt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        na(9, Qg.bind(null, a, c, h, o), void 0, null),
        vt === null)
      )
        throw Error(r(349));
      Oo & 30 || Xg(a, o, h);
    }
    return h;
  }
  function Xg(n, o, a) {
    (n.flags |= 16384),
      (n = { getSnapshot: o, value: a }),
      (o = tt.updateQueue),
      o === null
        ? ((o = { lastEffect: null, stores: null }),
          (tt.updateQueue = o),
          (o.stores = [n]))
        : ((a = o.stores), a === null ? (o.stores = [n]) : a.push(n));
  }
  function Qg(n, o, a, c) {
    (o.value = a), (o.getSnapshot = c), Zg(o) && ey(n);
  }
  function Jg(n, o, a) {
    return a(function () {
      Zg(o) && ey(n);
    });
  }
  function Zg(n) {
    var o = n.getSnapshot;
    n = n.value;
    try {
      var a = o();
      return !Rn(n, a);
    } catch {
      return !0;
    }
  }
  function ey(n) {
    var o = vr(n, 1);
    o !== null && zn(o, n, 1, -1);
  }
  function ty(n) {
    var o = Yn();
    return (
      typeof n == "function" && (n = n()),
      (o.memoizedState = o.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ta,
        lastRenderedState: n,
      }),
      (o.queue = n),
      (n = n.dispatch = fC.bind(null, tt, n)),
      [o.memoizedState, n]
    );
  }
  function na(n, o, a, c) {
    return (
      (n = { tag: n, create: o, destroy: a, deps: c, next: null }),
      (o = tt.updateQueue),
      o === null
        ? ((o = { lastEffect: null, stores: null }),
          (tt.updateQueue = o),
          (o.lastEffect = n.next = n))
        : ((a = o.lastEffect),
          a === null
            ? (o.lastEffect = n.next = n)
            : ((c = a.next), (a.next = n), (n.next = c), (o.lastEffect = n))),
      n
    );
  }
  function ny() {
    return yn().memoizedState;
  }
  function nu(n, o, a, c) {
    var h = Yn();
    (tt.flags |= n),
      (h.memoizedState = na(1 | o, a, void 0, c === void 0 ? null : c));
  }
  function ru(n, o, a, c) {
    var h = yn();
    c = c === void 0 ? null : c;
    var g = void 0;
    if (ht !== null) {
      var v = ht.memoizedState;
      if (((g = v.destroy), c !== null && uf(c, v.deps))) {
        h.memoizedState = na(o, a, g, c);
        return;
      }
    }
    (tt.flags |= n), (h.memoizedState = na(1 | o, a, g, c));
  }
  function ry(n, o) {
    return nu(8390656, 8, n, o);
  }
  function pf(n, o) {
    return ru(2048, 8, n, o);
  }
  function oy(n, o) {
    return ru(4, 2, n, o);
  }
  function iy(n, o) {
    return ru(4, 4, n, o);
  }
  function sy(n, o) {
    if (typeof o == "function")
      return (
        (n = n()),
        o(n),
        function () {
          o(null);
        }
      );
    if (o != null)
      return (
        (n = n()),
        (o.current = n),
        function () {
          o.current = null;
        }
      );
  }
  function ay(n, o, a) {
    return (
      (a = a != null ? a.concat([n]) : null), ru(4, 4, sy.bind(null, o, n), a)
    );
  }
  function mf() {}
  function ly(n, o) {
    var a = yn();
    o = o === void 0 ? null : o;
    var c = a.memoizedState;
    return c !== null && o !== null && uf(o, c[1])
      ? c[0]
      : ((a.memoizedState = [n, o]), n);
  }
  function uy(n, o) {
    var a = yn();
    o = o === void 0 ? null : o;
    var c = a.memoizedState;
    return c !== null && o !== null && uf(o, c[1])
      ? c[0]
      : ((n = n()), (a.memoizedState = [n, o]), n);
  }
  function cy(n, o, a) {
    return Oo & 21
      ? (Rn(a, o) ||
          ((a = Tl()), (tt.lanes |= a), (Mo |= a), (n.baseState = !0)),
        o)
      : (n.baseState && ((n.baseState = !1), (Wt = !0)), (n.memoizedState = a));
  }
  function cC(n, o) {
    var a = Oe;
    (Oe = a !== 0 && 4 > a ? a : 4), n(!0);
    var c = lf.transition;
    lf.transition = {};
    try {
      n(!1), o();
    } finally {
      (Oe = a), (lf.transition = c);
    }
  }
  function dy() {
    return yn().memoizedState;
  }
  function dC(n, o, a) {
    var c = Zr(n);
    if (
      ((a = {
        lane: c,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fy(n))
    )
      hy(o, a);
    else if (((a = Ug(n, o, a, c)), a !== null)) {
      var h = Dt();
      zn(a, n, c, h), py(a, o, c);
    }
  }
  function fC(n, o, a) {
    var c = Zr(n),
      h = {
        lane: c,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (fy(n)) hy(o, h);
    else {
      var g = n.alternate;
      if (
        n.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = o.lastRenderedReducer), g !== null)
      )
        try {
          var v = o.lastRenderedState,
            C = g(v, a);
          if (((h.hasEagerState = !0), (h.eagerState = C), Rn(C, v))) {
            var R = o.interleaved;
            R === null
              ? ((h.next = h), tf(o))
              : ((h.next = R.next), (R.next = h)),
              (o.interleaved = h);
            return;
          }
        } catch {
        } finally {
        }
      (a = Ug(n, o, h, c)),
        a !== null && ((h = Dt()), zn(a, n, c, h), py(a, o, c));
    }
  }
  function fy(n) {
    var o = n.alternate;
    return n === tt || (o !== null && o === tt);
  }
  function hy(n, o) {
    Zs = tu = !0;
    var a = n.pending;
    a === null ? (o.next = o) : ((o.next = a.next), (a.next = o)),
      (n.pending = o);
  }
  function py(n, o, a) {
    if (a & 4194240) {
      var c = o.lanes;
      (c &= n.pendingLanes), (a |= c), (o.lanes = a), Os(n, a);
    }
  }
  var ou = {
      readContext: gn,
      useCallback: At,
      useContext: At,
      useEffect: At,
      useImperativeHandle: At,
      useInsertionEffect: At,
      useLayoutEffect: At,
      useMemo: At,
      useReducer: At,
      useRef: At,
      useState: At,
      useDebugValue: At,
      useDeferredValue: At,
      useTransition: At,
      useMutableSource: At,
      useSyncExternalStore: At,
      useId: At,
      unstable_isNewReconciler: !1,
    },
    hC = {
      readContext: gn,
      useCallback: function (n, o) {
        return (Yn().memoizedState = [n, o === void 0 ? null : o]), n;
      },
      useContext: gn,
      useEffect: ry,
      useImperativeHandle: function (n, o, a) {
        return (
          (a = a != null ? a.concat([n]) : null),
          nu(4194308, 4, sy.bind(null, o, n), a)
        );
      },
      useLayoutEffect: function (n, o) {
        return nu(4194308, 4, n, o);
      },
      useInsertionEffect: function (n, o) {
        return nu(4, 2, n, o);
      },
      useMemo: function (n, o) {
        var a = Yn();
        return (
          (o = o === void 0 ? null : o),
          (n = n()),
          (a.memoizedState = [n, o]),
          n
        );
      },
      useReducer: function (n, o, a) {
        var c = Yn();
        return (
          (o = a !== void 0 ? a(o) : o),
          (c.memoizedState = c.baseState = o),
          (n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: o,
          }),
          (c.queue = n),
          (n = n.dispatch = dC.bind(null, tt, n)),
          [c.memoizedState, n]
        );
      },
      useRef: function (n) {
        var o = Yn();
        return (n = { current: n }), (o.memoizedState = n);
      },
      useState: ty,
      useDebugValue: mf,
      useDeferredValue: function (n) {
        return (Yn().memoizedState = n);
      },
      useTransition: function () {
        var n = ty(!1),
          o = n[0];
        return (n = cC.bind(null, n[1])), (Yn().memoizedState = n), [o, n];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, o, a) {
        var c = tt,
          h = Yn();
        if (Ze) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = o()), vt === null)) throw Error(r(349));
          Oo & 30 || Xg(c, o, a);
        }
        h.memoizedState = a;
        var g = { value: a, getSnapshot: o };
        return (
          (h.queue = g),
          ry(Jg.bind(null, c, g, n), [n]),
          (c.flags |= 2048),
          na(9, Qg.bind(null, c, g, a, o), void 0, null),
          a
        );
      },
      useId: function () {
        var n = Yn(),
          o = vt.identifierPrefix;
        if (Ze) {
          var a = yr,
            c = gr;
          (a = (c & ~(1 << (32 - Qt(c) - 1))).toString(32) + a),
            (o = ":" + o + "R" + a),
            (a = ea++),
            0 < a && (o += "H" + a.toString(32)),
            (o += ":");
        } else (a = uC++), (o = ":" + o + "r" + a.toString(32) + ":");
        return (n.memoizedState = o);
      },
      unstable_isNewReconciler: !1,
    },
    pC = {
      readContext: gn,
      useCallback: ly,
      useContext: gn,
      useEffect: pf,
      useImperativeHandle: ay,
      useInsertionEffect: oy,
      useLayoutEffect: iy,
      useMemo: uy,
      useReducer: ff,
      useRef: ny,
      useState: function () {
        return ff(ta);
      },
      useDebugValue: mf,
      useDeferredValue: function (n) {
        var o = yn();
        return cy(o, ht.memoizedState, n);
      },
      useTransition: function () {
        var n = ff(ta)[0],
          o = yn().memoizedState;
        return [n, o];
      },
      useMutableSource: Gg,
      useSyncExternalStore: Yg,
      useId: dy,
      unstable_isNewReconciler: !1,
    },
    mC = {
      readContext: gn,
      useCallback: ly,
      useContext: gn,
      useEffect: pf,
      useImperativeHandle: ay,
      useInsertionEffect: oy,
      useLayoutEffect: iy,
      useMemo: uy,
      useReducer: hf,
      useRef: ny,
      useState: function () {
        return hf(ta);
      },
      useDebugValue: mf,
      useDeferredValue: function (n) {
        var o = yn();
        return ht === null ? (o.memoizedState = n) : cy(o, ht.memoizedState, n);
      },
      useTransition: function () {
        var n = hf(ta)[0],
          o = yn().memoizedState;
        return [n, o];
      },
      useMutableSource: Gg,
      useSyncExternalStore: Yg,
      useId: dy,
      unstable_isNewReconciler: !1,
    };
  function $n(n, o) {
    if (n && n.defaultProps) {
      (o = J({}, o)), (n = n.defaultProps);
      for (var a in n) o[a] === void 0 && (o[a] = n[a]);
      return o;
    }
    return o;
  }
  function gf(n, o, a, c) {
    (o = n.memoizedState),
      (a = a(c, o)),
      (a = a == null ? o : J({}, o, a)),
      (n.memoizedState = a),
      n.lanes === 0 && (n.updateQueue.baseState = a);
  }
  var iu = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? Bt(n) === n : !1;
    },
    enqueueSetState: function (n, o, a) {
      n = n._reactInternals;
      var c = Dt(),
        h = Zr(n),
        g = br(c, h);
      (g.payload = o),
        a != null && (g.callback = a),
        (o = Yr(n, g, h)),
        o !== null && (zn(o, n, h, c), Ql(o, n, h));
    },
    enqueueReplaceState: function (n, o, a) {
      n = n._reactInternals;
      var c = Dt(),
        h = Zr(n),
        g = br(c, h);
      (g.tag = 1),
        (g.payload = o),
        a != null && (g.callback = a),
        (o = Yr(n, g, h)),
        o !== null && (zn(o, n, h, c), Ql(o, n, h));
    },
    enqueueForceUpdate: function (n, o) {
      n = n._reactInternals;
      var a = Dt(),
        c = Zr(n),
        h = br(a, c);
      (h.tag = 2),
        o != null && (h.callback = o),
        (o = Yr(n, h, c)),
        o !== null && (zn(o, n, c, a), Ql(o, n, c));
    },
  };
  function my(n, o, a, c, h, g, v) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(c, g, v)
        : o.prototype && o.prototype.isPureReactComponent
        ? !Vs(a, c) || !Vs(h, g)
        : !0
    );
  }
  function gy(n, o, a) {
    var c = !1,
      h = qr,
      g = o.contextType;
    return (
      typeof g == "object" && g !== null
        ? (g = gn(g))
        : ((h = Ut(o) ? To : Rt.current),
          (c = o.contextTypes),
          (g = (c = c != null) ? Pi(n, h) : qr)),
      (o = new o(a, g)),
      (n.memoizedState =
        o.state !== null && o.state !== void 0 ? o.state : null),
      (o.updater = iu),
      (n.stateNode = o),
      (o._reactInternals = n),
      c &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = h),
        (n.__reactInternalMemoizedMaskedChildContext = g)),
      o
    );
  }
  function yy(n, o, a, c) {
    (n = o.state),
      typeof o.componentWillReceiveProps == "function" &&
        o.componentWillReceiveProps(a, c),
      typeof o.UNSAFE_componentWillReceiveProps == "function" &&
        o.UNSAFE_componentWillReceiveProps(a, c),
      o.state !== n && iu.enqueueReplaceState(o, o.state, null);
  }
  function yf(n, o, a, c) {
    var h = n.stateNode;
    (h.props = a), (h.state = n.memoizedState), (h.refs = {}), nf(n);
    var g = o.contextType;
    typeof g == "object" && g !== null
      ? (h.context = gn(g))
      : ((g = Ut(o) ? To : Rt.current), (h.context = Pi(n, g))),
      (h.state = n.memoizedState),
      (g = o.getDerivedStateFromProps),
      typeof g == "function" && (gf(n, o, g, a), (h.state = n.memoizedState)),
      typeof o.getDerivedStateFromProps == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function" ||
        (typeof h.UNSAFE_componentWillMount != "function" &&
          typeof h.componentWillMount != "function") ||
        ((o = h.state),
        typeof h.componentWillMount == "function" && h.componentWillMount(),
        typeof h.UNSAFE_componentWillMount == "function" &&
          h.UNSAFE_componentWillMount(),
        o !== h.state && iu.enqueueReplaceState(h, h.state, null),
        Jl(n, a, h, c),
        (h.state = n.memoizedState)),
      typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function zi(n, o) {
    try {
      var a = "",
        c = o;
      do (a += Te(c)), (c = c.return);
      while (c);
      var h = a;
    } catch (g) {
      h =
        `
Error generating stack: ` +
        g.message +
        `
` +
        g.stack;
    }
    return { value: n, source: o, stack: h, digest: null };
  }
  function vf(n, o, a) {
    return { value: n, source: null, stack: a ?? null, digest: o ?? null };
  }
  function bf(n, o) {
    try {
      console.error(o.value);
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  var gC = typeof WeakMap == "function" ? WeakMap : Map;
  function vy(n, o, a) {
    (a = br(-1, a)), (a.tag = 3), (a.payload = { element: null });
    var c = o.value;
    return (
      (a.callback = function () {
        fu || ((fu = !0), (zf = c)), bf(n, o);
      }),
      a
    );
  }
  function by(n, o, a) {
    (a = br(-1, a)), (a.tag = 3);
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var h = o.value;
      (a.payload = function () {
        return c(h);
      }),
        (a.callback = function () {
          bf(n, o);
        });
    }
    var g = n.stateNode;
    return (
      g !== null &&
        typeof g.componentDidCatch == "function" &&
        (a.callback = function () {
          bf(n, o),
            typeof c != "function" &&
              (Qr === null ? (Qr = new Set([this])) : Qr.add(this));
          var v = o.stack;
          this.componentDidCatch(o.value, {
            componentStack: v !== null ? v : "",
          });
        }),
      a
    );
  }
  function Sy(n, o, a) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new gC();
      var h = new Set();
      c.set(o, h);
    } else (h = c.get(o)), h === void 0 && ((h = new Set()), c.set(o, h));
    h.has(a) || (h.add(a), (n = AC.bind(null, n, o, a)), o.then(n, n));
  }
  function xy(n) {
    do {
      var o;
      if (
        ((o = n.tag === 13) &&
          ((o = n.memoizedState),
          (o = o !== null ? o.dehydrated !== null : !0)),
        o)
      )
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function wy(n, o, a, c, h) {
    return n.mode & 1
      ? ((n.flags |= 65536), (n.lanes = h), n)
      : (n === o
          ? (n.flags |= 65536)
          : ((n.flags |= 128),
            (a.flags |= 131072),
            (a.flags &= -52805),
            a.tag === 1 &&
              (a.alternate === null
                ? (a.tag = 17)
                : ((o = br(-1, 1)), (o.tag = 2), Yr(a, o, 1))),
            (a.lanes |= 1)),
        n);
  }
  var yC = W.ReactCurrentOwner,
    Wt = !1;
  function Nt(n, o, a, c) {
    o.child = n === null ? Vg(o, null, a, c) : Ai(o, n.child, a, c);
  }
  function ky(n, o, a, c, h) {
    a = a.render;
    var g = o.ref;
    return (
      Oi(o, h),
      (c = cf(n, o, a, c, g, h)),
      (a = df()),
      n !== null && !Wt
        ? ((o.updateQueue = n.updateQueue),
          (o.flags &= -2053),
          (n.lanes &= ~h),
          Sr(n, o, h))
        : (Ze && a && qd(o), (o.flags |= 1), Nt(n, o, c, h), o.child)
    );
  }
  function Cy(n, o, a, c, h) {
    if (n === null) {
      var g = a.type;
      return typeof g == "function" &&
        !Bf(g) &&
        g.defaultProps === void 0 &&
        a.compare === null &&
        a.defaultProps === void 0
        ? ((o.tag = 15), (o.type = g), _y(n, o, g, c, h))
        : ((n = vu(a.type, null, c, o, o.mode, h)),
          (n.ref = o.ref),
          (n.return = o),
          (o.child = n));
    }
    if (((g = n.child), !(n.lanes & h))) {
      var v = g.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Vs), a(v, c) && n.ref === o.ref)
      )
        return Sr(n, o, h);
    }
    return (
      (o.flags |= 1),
      (n = to(g, c)),
      (n.ref = o.ref),
      (n.return = o),
      (o.child = n)
    );
  }
  function _y(n, o, a, c, h) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (Vs(g, c) && n.ref === o.ref)
        if (((Wt = !1), (o.pendingProps = c = g), (n.lanes & h) !== 0))
          n.flags & 131072 && (Wt = !0);
        else return (o.lanes = n.lanes), Sr(n, o, h);
    }
    return Sf(n, o, a, c, h);
  }
  function Py(n, o, a) {
    var c = o.pendingProps,
      h = c.children,
      g = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if (!(o.mode & 1))
        (o.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          He(Li, en),
          (en |= a);
      else {
        if (!(a & 1073741824))
          return (
            (n = g !== null ? g.baseLanes | a : a),
            (o.lanes = o.childLanes = 1073741824),
            (o.memoizedState = {
              baseLanes: n,
              cachePool: null,
              transitions: null,
            }),
            (o.updateQueue = null),
            He(Li, en),
            (en |= n),
            null
          );
        (o.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (c = g !== null ? g.baseLanes : a),
          He(Li, en),
          (en |= c);
      }
    else
      g !== null ? ((c = g.baseLanes | a), (o.memoizedState = null)) : (c = a),
        He(Li, en),
        (en |= c);
    return Nt(n, o, h, a), o.child;
  }
  function Ty(n, o) {
    var a = o.ref;
    ((n === null && a !== null) || (n !== null && n.ref !== a)) &&
      ((o.flags |= 512), (o.flags |= 2097152));
  }
  function Sf(n, o, a, c, h) {
    var g = Ut(a) ? To : Rt.current;
    return (
      (g = Pi(o, g)),
      Oi(o, h),
      (a = cf(n, o, a, c, g, h)),
      (c = df()),
      n !== null && !Wt
        ? ((o.updateQueue = n.updateQueue),
          (o.flags &= -2053),
          (n.lanes &= ~h),
          Sr(n, o, h))
        : (Ze && c && qd(o), (o.flags |= 1), Nt(n, o, a, h), o.child)
    );
  }
  function Ey(n, o, a, c, h) {
    if (Ut(a)) {
      var g = !0;
      Ul(o);
    } else g = !1;
    if ((Oi(o, h), o.stateNode === null))
      au(n, o), gy(o, a, c), yf(o, a, c, h), (c = !0);
    else if (n === null) {
      var v = o.stateNode,
        C = o.memoizedProps;
      v.props = C;
      var R = v.context,
        F = a.contextType;
      typeof F == "object" && F !== null
        ? (F = gn(F))
        : ((F = Ut(a) ? To : Rt.current), (F = Pi(o, F)));
      var K = a.getDerivedStateFromProps,
        G =
          typeof K == "function" ||
          typeof v.getSnapshotBeforeUpdate == "function";
      G ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((C !== c || R !== F) && yy(o, v, c, F)),
        (Gr = !1);
      var q = o.memoizedState;
      (v.state = q),
        Jl(o, c, v, h),
        (R = o.memoizedState),
        C !== c || q !== R || Vt.current || Gr
          ? (typeof K == "function" && (gf(o, a, K, c), (R = o.memoizedState)),
            (C = Gr || my(o, a, C, c, q, R, F))
              ? (G ||
                  (typeof v.UNSAFE_componentWillMount != "function" &&
                    typeof v.componentWillMount != "function") ||
                  (typeof v.componentWillMount == "function" &&
                    v.componentWillMount(),
                  typeof v.UNSAFE_componentWillMount == "function" &&
                    v.UNSAFE_componentWillMount()),
                typeof v.componentDidMount == "function" &&
                  (o.flags |= 4194308))
              : (typeof v.componentDidMount == "function" &&
                  (o.flags |= 4194308),
                (o.memoizedProps = c),
                (o.memoizedState = R)),
            (v.props = c),
            (v.state = R),
            (v.context = F),
            (c = C))
          : (typeof v.componentDidMount == "function" && (o.flags |= 4194308),
            (c = !1));
    } else {
      (v = o.stateNode),
        Wg(n, o),
        (C = o.memoizedProps),
        (F = o.type === o.elementType ? C : $n(o.type, C)),
        (v.props = F),
        (G = o.pendingProps),
        (q = v.context),
        (R = a.contextType),
        typeof R == "object" && R !== null
          ? (R = gn(R))
          : ((R = Ut(a) ? To : Rt.current), (R = Pi(o, R)));
      var ee = a.getDerivedStateFromProps;
      (K =
        typeof ee == "function" ||
        typeof v.getSnapshotBeforeUpdate == "function") ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((C !== G || q !== R) && yy(o, v, c, R)),
        (Gr = !1),
        (q = o.memoizedState),
        (v.state = q),
        Jl(o, c, v, h);
      var oe = o.memoizedState;
      C !== G || q !== oe || Vt.current || Gr
        ? (typeof ee == "function" && (gf(o, a, ee, c), (oe = o.memoizedState)),
          (F = Gr || my(o, a, F, c, q, oe, R) || !1)
            ? (K ||
                (typeof v.UNSAFE_componentWillUpdate != "function" &&
                  typeof v.componentWillUpdate != "function") ||
                (typeof v.componentWillUpdate == "function" &&
                  v.componentWillUpdate(c, oe, R),
                typeof v.UNSAFE_componentWillUpdate == "function" &&
                  v.UNSAFE_componentWillUpdate(c, oe, R)),
              typeof v.componentDidUpdate == "function" && (o.flags |= 4),
              typeof v.getSnapshotBeforeUpdate == "function" &&
                (o.flags |= 1024))
            : (typeof v.componentDidUpdate != "function" ||
                (C === n.memoizedProps && q === n.memoizedState) ||
                (o.flags |= 4),
              typeof v.getSnapshotBeforeUpdate != "function" ||
                (C === n.memoizedProps && q === n.memoizedState) ||
                (o.flags |= 1024),
              (o.memoizedProps = c),
              (o.memoizedState = oe)),
          (v.props = c),
          (v.state = oe),
          (v.context = R),
          (c = F))
        : (typeof v.componentDidUpdate != "function" ||
            (C === n.memoizedProps && q === n.memoizedState) ||
            (o.flags |= 4),
          typeof v.getSnapshotBeforeUpdate != "function" ||
            (C === n.memoizedProps && q === n.memoizedState) ||
            (o.flags |= 1024),
          (c = !1));
    }
    return xf(n, o, a, c, g, h);
  }
  function xf(n, o, a, c, h, g) {
    Ty(n, o);
    var v = (o.flags & 128) !== 0;
    if (!c && !v) return h && Mg(o, a, !1), Sr(n, o, g);
    (c = o.stateNode), (yC.current = o);
    var C =
      v && typeof a.getDerivedStateFromError != "function" ? null : c.render();
    return (
      (o.flags |= 1),
      n !== null && v
        ? ((o.child = Ai(o, n.child, null, g)), (o.child = Ai(o, null, C, g)))
        : Nt(n, o, C, g),
      (o.memoizedState = c.state),
      h && Mg(o, a, !0),
      o.child
    );
  }
  function Ry(n) {
    var o = n.stateNode;
    o.pendingContext
      ? $g(n, o.pendingContext, o.pendingContext !== o.context)
      : o.context && $g(n, o.context, !1),
      rf(n, o.containerInfo);
  }
  function Ay(n, o, a, c, h) {
    return Ri(), Xd(h), (o.flags |= 256), Nt(n, o, a, c), o.child;
  }
  var wf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function kf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function $y(n, o, a) {
    var c = o.pendingProps,
      h = et.current,
      g = !1,
      v = (o.flags & 128) !== 0,
      C;
    if (
      ((C = v) ||
        (C = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0),
      C
        ? ((g = !0), (o.flags &= -129))
        : (n === null || n.memoizedState !== null) && (h |= 1),
      He(et, h & 1),
      n === null)
    )
      return (
        Yd(o),
        (n = o.memoizedState),
        n !== null && ((n = n.dehydrated), n !== null)
          ? (o.mode & 1
              ? n.data === "$!"
                ? (o.lanes = 8)
                : (o.lanes = 1073741824)
              : (o.lanes = 1),
            null)
          : ((v = c.children),
            (n = c.fallback),
            g
              ? ((c = o.mode),
                (g = o.child),
                (v = { mode: "hidden", children: v }),
                !(c & 1) && g !== null
                  ? ((g.childLanes = 0), (g.pendingProps = v))
                  : (g = bu(v, c, 0, null)),
                (n = No(n, c, a, null)),
                (g.return = o),
                (n.return = o),
                (g.sibling = n),
                (o.child = g),
                (o.child.memoizedState = kf(a)),
                (o.memoizedState = wf),
                n)
              : Cf(o, v))
      );
    if (((h = n.memoizedState), h !== null && ((C = h.dehydrated), C !== null)))
      return vC(n, o, v, c, C, h, a);
    if (g) {
      (g = c.fallback), (v = o.mode), (h = n.child), (C = h.sibling);
      var R = { mode: "hidden", children: c.children };
      return (
        !(v & 1) && o.child !== h
          ? ((c = o.child),
            (c.childLanes = 0),
            (c.pendingProps = R),
            (o.deletions = null))
          : ((c = to(h, R)), (c.subtreeFlags = h.subtreeFlags & 14680064)),
        C !== null ? (g = to(C, g)) : ((g = No(g, v, a, null)), (g.flags |= 2)),
        (g.return = o),
        (c.return = o),
        (c.sibling = g),
        (o.child = c),
        (c = g),
        (g = o.child),
        (v = n.child.memoizedState),
        (v =
          v === null
            ? kf(a)
            : {
                baseLanes: v.baseLanes | a,
                cachePool: null,
                transitions: v.transitions,
              }),
        (g.memoizedState = v),
        (g.childLanes = n.childLanes & ~a),
        (o.memoizedState = wf),
        c
      );
    }
    return (
      (g = n.child),
      (n = g.sibling),
      (c = to(g, { mode: "visible", children: c.children })),
      !(o.mode & 1) && (c.lanes = a),
      (c.return = o),
      (c.sibling = null),
      n !== null &&
        ((a = o.deletions),
        a === null ? ((o.deletions = [n]), (o.flags |= 16)) : a.push(n)),
      (o.child = c),
      (o.memoizedState = null),
      c
    );
  }
  function Cf(n, o) {
    return (
      (o = bu({ mode: "visible", children: o }, n.mode, 0, null)),
      (o.return = n),
      (n.child = o)
    );
  }
  function su(n, o, a, c) {
    return (
      c !== null && Xd(c),
      Ai(o, n.child, null, a),
      (n = Cf(o, o.pendingProps.children)),
      (n.flags |= 2),
      (o.memoizedState = null),
      n
    );
  }
  function vC(n, o, a, c, h, g, v) {
    if (a)
      return o.flags & 256
        ? ((o.flags &= -257), (c = vf(Error(r(422)))), su(n, o, v, c))
        : o.memoizedState !== null
        ? ((o.child = n.child), (o.flags |= 128), null)
        : ((g = c.fallback),
          (h = o.mode),
          (c = bu({ mode: "visible", children: c.children }, h, 0, null)),
          (g = No(g, h, v, null)),
          (g.flags |= 2),
          (c.return = o),
          (g.return = o),
          (c.sibling = g),
          (o.child = c),
          o.mode & 1 && Ai(o, n.child, null, v),
          (o.child.memoizedState = kf(v)),
          (o.memoizedState = wf),
          g);
    if (!(o.mode & 1)) return su(n, o, v, null);
    if (h.data === "$!") {
      if (((c = h.nextSibling && h.nextSibling.dataset), c)) var C = c.dgst;
      return (
        (c = C), (g = Error(r(419))), (c = vf(g, c, void 0)), su(n, o, v, c)
      );
    }
    if (((C = (v & n.childLanes) !== 0), Wt || C)) {
      if (((c = vt), c !== null)) {
        switch (v & -v) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        (h = h & (c.suspendedLanes | v) ? 0 : h),
          h !== 0 &&
            h !== g.retryLane &&
            ((g.retryLane = h), vr(n, h), zn(c, n, h, -1));
      }
      return Ff(), (c = vf(Error(r(421)))), su(n, o, v, c);
    }
    return h.data === "$?"
      ? ((o.flags |= 128),
        (o.child = n.child),
        (o = $C.bind(null, n)),
        (h._reactRetry = o),
        null)
      : ((n = g.treeContext),
        (Zt = Wr(h.nextSibling)),
        (Jt = o),
        (Ze = !0),
        (An = null),
        n !== null &&
          ((pn[mn++] = gr),
          (pn[mn++] = yr),
          (pn[mn++] = Eo),
          (gr = n.id),
          (yr = n.overflow),
          (Eo = o)),
        (o = Cf(o, c.children)),
        (o.flags |= 4096),
        o);
  }
  function Oy(n, o, a) {
    n.lanes |= o;
    var c = n.alternate;
    c !== null && (c.lanes |= o), ef(n.return, o, a);
  }
  function _f(n, o, a, c, h) {
    var g = n.memoizedState;
    g === null
      ? (n.memoizedState = {
          isBackwards: o,
          rendering: null,
          renderingStartTime: 0,
          last: c,
          tail: a,
          tailMode: h,
        })
      : ((g.isBackwards = o),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = c),
        (g.tail = a),
        (g.tailMode = h));
  }
  function My(n, o, a) {
    var c = o.pendingProps,
      h = c.revealOrder,
      g = c.tail;
    if ((Nt(n, o, c.children, a), (c = et.current), c & 2))
      (c = (c & 1) | 2), (o.flags |= 128);
    else {
      if (n !== null && n.flags & 128)
        e: for (n = o.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && Oy(n, a, o);
          else if (n.tag === 19) Oy(n, a, o);
          else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === o) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === o) break e;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      c &= 1;
    }
    if ((He(et, c), !(o.mode & 1))) o.memoizedState = null;
    else
      switch (h) {
        case "forwards":
          for (a = o.child, h = null; a !== null; )
            (n = a.alternate),
              n !== null && Zl(n) === null && (h = a),
              (a = a.sibling);
          (a = h),
            a === null
              ? ((h = o.child), (o.child = null))
              : ((h = a.sibling), (a.sibling = null)),
            _f(o, !1, h, a, g);
          break;
        case "backwards":
          for (a = null, h = o.child, o.child = null; h !== null; ) {
            if (((n = h.alternate), n !== null && Zl(n) === null)) {
              o.child = h;
              break;
            }
            (n = h.sibling), (h.sibling = a), (a = h), (h = n);
          }
          _f(o, !0, a, null, g);
          break;
        case "together":
          _f(o, !1, null, null, void 0);
          break;
        default:
          o.memoizedState = null;
      }
    return o.child;
  }
  function au(n, o) {
    !(o.mode & 1) &&
      n !== null &&
      ((n.alternate = null), (o.alternate = null), (o.flags |= 2));
  }
  function Sr(n, o, a) {
    if (
      (n !== null && (o.dependencies = n.dependencies),
      (Mo |= o.lanes),
      !(a & o.childLanes))
    )
      return null;
    if (n !== null && o.child !== n.child) throw Error(r(153));
    if (o.child !== null) {
      for (
        n = o.child, a = to(n, n.pendingProps), o.child = a, a.return = o;
        n.sibling !== null;

      )
        (n = n.sibling),
          (a = a.sibling = to(n, n.pendingProps)),
          (a.return = o);
      a.sibling = null;
    }
    return o.child;
  }
  function bC(n, o, a) {
    switch (o.tag) {
      case 3:
        Ry(o), Ri();
        break;
      case 5:
        Kg(o);
        break;
      case 1:
        Ut(o.type) && Ul(o);
        break;
      case 4:
        rf(o, o.stateNode.containerInfo);
        break;
      case 10:
        var c = o.type._context,
          h = o.memoizedProps.value;
        He(Yl, c._currentValue), (c._currentValue = h);
        break;
      case 13:
        if (((c = o.memoizedState), c !== null))
          return c.dehydrated !== null
            ? (He(et, et.current & 1), (o.flags |= 128), null)
            : a & o.child.childLanes
            ? $y(n, o, a)
            : (He(et, et.current & 1),
              (n = Sr(n, o, a)),
              n !== null ? n.sibling : null);
        He(et, et.current & 1);
        break;
      case 19:
        if (((c = (a & o.childLanes) !== 0), n.flags & 128)) {
          if (c) return My(n, o, a);
          o.flags |= 128;
        }
        if (
          ((h = o.memoizedState),
          h !== null &&
            ((h.rendering = null), (h.tail = null), (h.lastEffect = null)),
          He(et, et.current),
          c)
        )
          break;
        return null;
      case 22:
      case 23:
        return (o.lanes = 0), Py(n, o, a);
    }
    return Sr(n, o, a);
  }
  var zy, Pf, jy, Ly;
  (zy = function (n, o) {
    for (var a = o.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) n.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === o) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === o) return;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
  }),
    (Pf = function () {}),
    (jy = function (n, o, a, c) {
      var h = n.memoizedProps;
      if (h !== c) {
        (n = o.stateNode), $o(Gn.current);
        var g = null;
        switch (a) {
          case "input":
            (h = ys(n, h)), (c = ys(n, c)), (g = []);
            break;
          case "select":
            (h = J({}, h, { value: void 0 })),
              (c = J({}, c, { value: void 0 })),
              (g = []);
            break;
          case "textarea":
            (h = Mr(n, h)), (c = Mr(n, c)), (g = []);
            break;
          default:
            typeof h.onClick != "function" &&
              typeof c.onClick == "function" &&
              (n.onclick = Fl);
        }
        Lr(a, c);
        var v;
        a = null;
        for (F in h)
          if (!c.hasOwnProperty(F) && h.hasOwnProperty(F) && h[F] != null)
            if (F === "style") {
              var C = h[F];
              for (v in C) C.hasOwnProperty(v) && (a || (a = {}), (a[v] = ""));
            } else
              F !== "dangerouslySetInnerHTML" &&
                F !== "children" &&
                F !== "suppressContentEditableWarning" &&
                F !== "suppressHydrationWarning" &&
                F !== "autoFocus" &&
                (s.hasOwnProperty(F)
                  ? g || (g = [])
                  : (g = g || []).push(F, null));
        for (F in c) {
          var R = c[F];
          if (
            ((C = h != null ? h[F] : void 0),
            c.hasOwnProperty(F) && R !== C && (R != null || C != null))
          )
            if (F === "style")
              if (C) {
                for (v in C)
                  !C.hasOwnProperty(v) ||
                    (R && R.hasOwnProperty(v)) ||
                    (a || (a = {}), (a[v] = ""));
                for (v in R)
                  R.hasOwnProperty(v) &&
                    C[v] !== R[v] &&
                    (a || (a = {}), (a[v] = R[v]));
              } else a || (g || (g = []), g.push(F, a)), (a = R);
            else
              F === "dangerouslySetInnerHTML"
                ? ((R = R ? R.__html : void 0),
                  (C = C ? C.__html : void 0),
                  R != null && C !== R && (g = g || []).push(F, R))
                : F === "children"
                ? (typeof R != "string" && typeof R != "number") ||
                  (g = g || []).push(F, "" + R)
                : F !== "suppressContentEditableWarning" &&
                  F !== "suppressHydrationWarning" &&
                  (s.hasOwnProperty(F)
                    ? (R != null && F === "onScroll" && Ye("scroll", n),
                      g || C === R || (g = []))
                    : (g = g || []).push(F, R));
        }
        a && (g = g || []).push("style", a);
        var F = g;
        (o.updateQueue = F) && (o.flags |= 4);
      }
    }),
    (Ly = function (n, o, a, c) {
      a !== c && (o.flags |= 4);
    });
  function ra(n, o) {
    if (!Ze)
      switch (n.tailMode) {
        case "hidden":
          o = n.tail;
          for (var a = null; o !== null; )
            o.alternate !== null && (a = o), (o = o.sibling);
          a === null ? (n.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = n.tail;
          for (var c = null; a !== null; )
            a.alternate !== null && (c = a), (a = a.sibling);
          c === null
            ? o || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (c.sibling = null);
      }
  }
  function $t(n) {
    var o = n.alternate !== null && n.alternate.child === n.child,
      a = 0,
      c = 0;
    if (o)
      for (var h = n.child; h !== null; )
        (a |= h.lanes | h.childLanes),
          (c |= h.subtreeFlags & 14680064),
          (c |= h.flags & 14680064),
          (h.return = n),
          (h = h.sibling);
    else
      for (h = n.child; h !== null; )
        (a |= h.lanes | h.childLanes),
          (c |= h.subtreeFlags),
          (c |= h.flags),
          (h.return = n),
          (h = h.sibling);
    return (n.subtreeFlags |= c), (n.childLanes = a), o;
  }
  function SC(n, o, a) {
    var c = o.pendingProps;
    switch ((Kd(o), o.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $t(o), null;
      case 1:
        return Ut(o.type) && Vl(), $t(o), null;
      case 3:
        return (
          (c = o.stateNode),
          Mi(),
          Xe(Vt),
          Xe(Rt),
          af(),
          c.pendingContext &&
            ((c.context = c.pendingContext), (c.pendingContext = null)),
          (n === null || n.child === null) &&
            (Kl(o)
              ? (o.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && !(o.flags & 256)) ||
                ((o.flags |= 1024), An !== null && (Nf(An), (An = null)))),
          Pf(n, o),
          $t(o),
          null
        );
      case 5:
        of(o);
        var h = $o(Js.current);
        if (((a = o.type), n !== null && o.stateNode != null))
          jy(n, o, a, c, h),
            n.ref !== o.ref && ((o.flags |= 512), (o.flags |= 2097152));
        else {
          if (!c) {
            if (o.stateNode === null) throw Error(r(166));
            return $t(o), null;
          }
          if (((n = $o(Gn.current)), Kl(o))) {
            (c = o.stateNode), (a = o.type);
            var g = o.memoizedProps;
            switch (((c[Kn] = o), (c[Ks] = g), (n = (o.mode & 1) !== 0), a)) {
              case "dialog":
                Ye("cancel", c), Ye("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ye("load", c);
                break;
              case "video":
              case "audio":
                for (h = 0; h < Ws.length; h++) Ye(Ws[h], c);
                break;
              case "source":
                Ye("error", c);
                break;
              case "img":
              case "image":
              case "link":
                Ye("error", c), Ye("load", c);
                break;
              case "details":
                Ye("toggle", c);
                break;
              case "input":
                cl(c, g), Ye("invalid", c);
                break;
              case "select":
                (c._wrapperState = { wasMultiple: !!g.multiple }),
                  Ye("invalid", c);
                break;
              case "textarea":
                Pn(c, g), Ye("invalid", c);
            }
            Lr(a, g), (h = null);
            for (var v in g)
              if (g.hasOwnProperty(v)) {
                var C = g[v];
                v === "children"
                  ? typeof C == "string"
                    ? c.textContent !== C &&
                      (g.suppressHydrationWarning !== !0 &&
                        Il(c.textContent, C, n),
                      (h = ["children", C]))
                    : typeof C == "number" &&
                      c.textContent !== "" + C &&
                      (g.suppressHydrationWarning !== !0 &&
                        Il(c.textContent, C, n),
                      (h = ["children", "" + C]))
                  : s.hasOwnProperty(v) &&
                    C != null &&
                    v === "onScroll" &&
                    Ye("scroll", c);
              }
            switch (a) {
              case "input":
                Bn(c), fl(c, g, !0);
                break;
              case "textarea":
                Bn(c), xs(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (c.onclick = Fl);
            }
            (c = h), (o.updateQueue = c), c !== null && (o.flags |= 4);
          } else {
            (v = h.nodeType === 9 ? h : h.ownerDocument),
              n === "http://www.w3.org/1999/xhtml" && (n = hl(a)),
              n === "http://www.w3.org/1999/xhtml"
                ? a === "script"
                  ? ((n = v.createElement("div")),
                    (n.innerHTML = "<script></script>"),
                    (n = n.removeChild(n.firstChild)))
                  : typeof c.is == "string"
                  ? (n = v.createElement(a, { is: c.is }))
                  : ((n = v.createElement(a)),
                    a === "select" &&
                      ((v = n),
                      c.multiple
                        ? (v.multiple = !0)
                        : c.size && (v.size = c.size)))
                : (n = v.createElementNS(n, a)),
              (n[Kn] = o),
              (n[Ks] = c),
              zy(n, o, !1, !1),
              (o.stateNode = n);
            e: {
              switch (((v = Cs(a, c)), a)) {
                case "dialog":
                  Ye("cancel", n), Ye("close", n), (h = c);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ye("load", n), (h = c);
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < Ws.length; h++) Ye(Ws[h], n);
                  h = c;
                  break;
                case "source":
                  Ye("error", n), (h = c);
                  break;
                case "img":
                case "image":
                case "link":
                  Ye("error", n), Ye("load", n), (h = c);
                  break;
                case "details":
                  Ye("toggle", n), (h = c);
                  break;
                case "input":
                  cl(n, c), (h = ys(n, c)), Ye("invalid", n);
                  break;
                case "option":
                  h = c;
                  break;
                case "select":
                  (n._wrapperState = { wasMultiple: !!c.multiple }),
                    (h = J({}, c, { value: void 0 })),
                    Ye("invalid", n);
                  break;
                case "textarea":
                  Pn(n, c), (h = Mr(n, c)), Ye("invalid", n);
                  break;
                default:
                  h = c;
              }
              Lr(a, h), (C = h);
              for (g in C)
                if (C.hasOwnProperty(g)) {
                  var R = C[g];
                  g === "style"
                    ? gl(n, R)
                    : g === "dangerouslySetInnerHTML"
                    ? ((R = R ? R.__html : void 0), R != null && ks(n, R))
                    : g === "children"
                    ? typeof R == "string"
                      ? (a !== "textarea" || R !== "") && zr(n, R)
                      : typeof R == "number" && zr(n, "" + R)
                    : g !== "suppressContentEditableWarning" &&
                      g !== "suppressHydrationWarning" &&
                      g !== "autoFocus" &&
                      (s.hasOwnProperty(g)
                        ? R != null && g === "onScroll" && Ye("scroll", n)
                        : R != null && z(n, g, R, v));
                }
              switch (a) {
                case "input":
                  Bn(n), fl(n, c, !1);
                  break;
                case "textarea":
                  Bn(n), xs(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + re(c.value));
                  break;
                case "select":
                  (n.multiple = !!c.multiple),
                    (g = c.value),
                    g != null
                      ? Un(n, !!c.multiple, g, !1)
                      : c.defaultValue != null &&
                        Un(n, !!c.multiple, c.defaultValue, !0);
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = Fl);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (o.flags |= 4);
          }
          o.ref !== null && ((o.flags |= 512), (o.flags |= 2097152));
        }
        return $t(o), null;
      case 6:
        if (n && o.stateNode != null) Ly(n, o, n.memoizedProps, c);
        else {
          if (typeof c != "string" && o.stateNode === null) throw Error(r(166));
          if (((a = $o(Js.current)), $o(Gn.current), Kl(o))) {
            if (
              ((c = o.stateNode),
              (a = o.memoizedProps),
              (c[Kn] = o),
              (g = c.nodeValue !== a) && ((n = Jt), n !== null))
            )
              switch (n.tag) {
                case 3:
                  Il(c.nodeValue, a, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    Il(c.nodeValue, a, (n.mode & 1) !== 0);
              }
            g && (o.flags |= 4);
          } else
            (c = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(c)),
              (c[Kn] = o),
              (o.stateNode = c);
        }
        return $t(o), null;
      case 13:
        if (
          (Xe(et),
          (c = o.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (Ze && Zt !== null && o.mode & 1 && !(o.flags & 128))
            Ig(), Ri(), (o.flags |= 98560), (g = !1);
          else if (((g = Kl(o)), c !== null && c.dehydrated !== null)) {
            if (n === null) {
              if (!g) throw Error(r(318));
              if (
                ((g = o.memoizedState),
                (g = g !== null ? g.dehydrated : null),
                !g)
              )
                throw Error(r(317));
              g[Kn] = o;
            } else
              Ri(),
                !(o.flags & 128) && (o.memoizedState = null),
                (o.flags |= 4);
            $t(o), (g = !1);
          } else An !== null && (Nf(An), (An = null)), (g = !0);
          if (!g) return o.flags & 65536 ? o : null;
        }
        return o.flags & 128
          ? ((o.lanes = a), o)
          : ((c = c !== null),
            c !== (n !== null && n.memoizedState !== null) &&
              c &&
              ((o.child.flags |= 8192),
              o.mode & 1 &&
                (n === null || et.current & 1 ? pt === 0 && (pt = 3) : Ff())),
            o.updateQueue !== null && (o.flags |= 4),
            $t(o),
            null);
      case 4:
        return (
          Mi(),
          Pf(n, o),
          n === null && Hs(o.stateNode.containerInfo),
          $t(o),
          null
        );
      case 10:
        return Zd(o.type._context), $t(o), null;
      case 17:
        return Ut(o.type) && Vl(), $t(o), null;
      case 19:
        if ((Xe(et), (g = o.memoizedState), g === null)) return $t(o), null;
        if (((c = (o.flags & 128) !== 0), (v = g.rendering), v === null))
          if (c) ra(g, !1);
          else {
            if (pt !== 0 || (n !== null && n.flags & 128))
              for (n = o.child; n !== null; ) {
                if (((v = Zl(n)), v !== null)) {
                  for (
                    o.flags |= 128,
                      ra(g, !1),
                      c = v.updateQueue,
                      c !== null && ((o.updateQueue = c), (o.flags |= 4)),
                      o.subtreeFlags = 0,
                      c = a,
                      a = o.child;
                    a !== null;

                  )
                    (g = a),
                      (n = c),
                      (g.flags &= 14680066),
                      (v = g.alternate),
                      v === null
                        ? ((g.childLanes = 0),
                          (g.lanes = n),
                          (g.child = null),
                          (g.subtreeFlags = 0),
                          (g.memoizedProps = null),
                          (g.memoizedState = null),
                          (g.updateQueue = null),
                          (g.dependencies = null),
                          (g.stateNode = null))
                        : ((g.childLanes = v.childLanes),
                          (g.lanes = v.lanes),
                          (g.child = v.child),
                          (g.subtreeFlags = 0),
                          (g.deletions = null),
                          (g.memoizedProps = v.memoizedProps),
                          (g.memoizedState = v.memoizedState),
                          (g.updateQueue = v.updateQueue),
                          (g.type = v.type),
                          (n = v.dependencies),
                          (g.dependencies =
                            n === null
                              ? null
                              : {
                                  lanes: n.lanes,
                                  firstContext: n.firstContext,
                                })),
                      (a = a.sibling);
                  return He(et, (et.current & 1) | 2), o.child;
                }
                n = n.sibling;
              }
            g.tail !== null &&
              Ge() > Ni &&
              ((o.flags |= 128), (c = !0), ra(g, !1), (o.lanes = 4194304));
          }
        else {
          if (!c)
            if (((n = Zl(v)), n !== null)) {
              if (
                ((o.flags |= 128),
                (c = !0),
                (a = n.updateQueue),
                a !== null && ((o.updateQueue = a), (o.flags |= 4)),
                ra(g, !0),
                g.tail === null &&
                  g.tailMode === "hidden" &&
                  !v.alternate &&
                  !Ze)
              )
                return $t(o), null;
            } else
              2 * Ge() - g.renderingStartTime > Ni &&
                a !== 1073741824 &&
                ((o.flags |= 128), (c = !0), ra(g, !1), (o.lanes = 4194304));
          g.isBackwards
            ? ((v.sibling = o.child), (o.child = v))
            : ((a = g.last),
              a !== null ? (a.sibling = v) : (o.child = v),
              (g.last = v));
        }
        return g.tail !== null
          ? ((o = g.tail),
            (g.rendering = o),
            (g.tail = o.sibling),
            (g.renderingStartTime = Ge()),
            (o.sibling = null),
            (a = et.current),
            He(et, c ? (a & 1) | 2 : a & 1),
            o)
          : ($t(o), null);
      case 22:
      case 23:
        return (
          If(),
          (c = o.memoizedState !== null),
          n !== null && (n.memoizedState !== null) !== c && (o.flags |= 8192),
          c && o.mode & 1
            ? en & 1073741824 &&
              ($t(o), o.subtreeFlags & 6 && (o.flags |= 8192))
            : $t(o),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, o.tag));
  }
  function xC(n, o) {
    switch ((Kd(o), o.tag)) {
      case 1:
        return (
          Ut(o.type) && Vl(),
          (n = o.flags),
          n & 65536 ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 3:
        return (
          Mi(),
          Xe(Vt),
          Xe(Rt),
          af(),
          (n = o.flags),
          n & 65536 && !(n & 128) ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 5:
        return of(o), null;
      case 13:
        if (
          (Xe(et), (n = o.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (o.alternate === null) throw Error(r(340));
          Ri();
        }
        return (
          (n = o.flags), n & 65536 ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 19:
        return Xe(et), null;
      case 4:
        return Mi(), null;
      case 10:
        return Zd(o.type._context), null;
      case 22:
      case 23:
        return If(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var lu = !1,
    Ot = !1,
    wC = typeof WeakSet == "function" ? WeakSet : Set,
    ne = null;
  function ji(n, o) {
    var a = n.ref;
    if (a !== null)
      if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          rt(n, o, c);
        }
      else a.current = null;
  }
  function Tf(n, o, a) {
    try {
      a();
    } catch (c) {
      rt(n, o, c);
    }
  }
  var Ny = !1;
  function kC(n, o) {
    if (((Dd = k), (n = mg()), Ad(n))) {
      if ("selectionStart" in n)
        var a = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          a = ((a = n.ownerDocument) && a.defaultView) || window;
          var c = a.getSelection && a.getSelection();
          if (c && c.rangeCount !== 0) {
            a = c.anchorNode;
            var h = c.anchorOffset,
              g = c.focusNode;
            c = c.focusOffset;
            try {
              a.nodeType, g.nodeType;
            } catch {
              a = null;
              break e;
            }
            var v = 0,
              C = -1,
              R = -1,
              F = 0,
              K = 0,
              G = n,
              q = null;
            t: for (;;) {
              for (
                var ee;
                G !== a || (h !== 0 && G.nodeType !== 3) || (C = v + h),
                  G !== g || (c !== 0 && G.nodeType !== 3) || (R = v + c),
                  G.nodeType === 3 && (v += G.nodeValue.length),
                  (ee = G.firstChild) !== null;

              )
                (q = G), (G = ee);
              for (;;) {
                if (G === n) break t;
                if (
                  (q === a && ++F === h && (C = v),
                  q === g && ++K === c && (R = v),
                  (ee = G.nextSibling) !== null)
                )
                  break;
                (G = q), (q = G.parentNode);
              }
              G = ee;
            }
            a = C === -1 || R === -1 ? null : { start: C, end: R };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Id = { focusedElem: n, selectionRange: a }, k = !1, ne = o;
      ne !== null;

    )
      if (
        ((o = ne), (n = o.child), (o.subtreeFlags & 1028) !== 0 && n !== null)
      )
        (n.return = o), (ne = n);
      else
        for (; ne !== null; ) {
          o = ne;
          try {
            var oe = o.alternate;
            if (o.flags & 1024)
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (oe !== null) {
                    var se = oe.memoizedProps,
                      st = oe.memoizedState,
                      N = o.stateNode,
                      $ = N.getSnapshotBeforeUpdate(
                        o.elementType === o.type ? se : $n(o.type, se),
                        st
                      );
                    N.__reactInternalSnapshotBeforeUpdate = $;
                  }
                  break;
                case 3:
                  var D = o.stateNode.containerInfo;
                  D.nodeType === 1
                    ? (D.textContent = "")
                    : D.nodeType === 9 &&
                      D.documentElement &&
                      D.removeChild(D.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (Q) {
            rt(o, o.return, Q);
          }
          if (((n = o.sibling), n !== null)) {
            (n.return = o.return), (ne = n);
            break;
          }
          ne = o.return;
        }
    return (oe = Ny), (Ny = !1), oe;
  }
  function oa(n, o, a) {
    var c = o.updateQueue;
    if (((c = c !== null ? c.lastEffect : null), c !== null)) {
      var h = (c = c.next);
      do {
        if ((h.tag & n) === n) {
          var g = h.destroy;
          (h.destroy = void 0), g !== void 0 && Tf(o, a, g);
        }
        h = h.next;
      } while (h !== c);
    }
  }
  function uu(n, o) {
    if (
      ((o = o.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)
    ) {
      var a = (o = o.next);
      do {
        if ((a.tag & n) === n) {
          var c = a.create;
          a.destroy = c();
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function Ef(n) {
    var o = n.ref;
    if (o !== null) {
      var a = n.stateNode;
      switch (n.tag) {
        case 5:
          n = a;
          break;
        default:
          n = a;
      }
      typeof o == "function" ? o(n) : (o.current = n);
    }
  }
  function Dy(n) {
    var o = n.alternate;
    o !== null && ((n.alternate = null), Dy(o)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((o = n.stateNode),
        o !== null &&
          (delete o[Kn],
          delete o[Ks],
          delete o[Ud],
          delete o[iC],
          delete o[sC])),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null);
  }
  function Iy(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Fy(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Iy(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        (n.child.return = n), (n = n.child);
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Rf(n, o, a) {
    var c = n.tag;
    if (c === 5 || c === 6)
      (n = n.stateNode),
        o
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(n, o)
            : a.insertBefore(n, o)
          : (a.nodeType === 8
              ? ((o = a.parentNode), o.insertBefore(n, a))
              : ((o = a), o.appendChild(n)),
            (a = a._reactRootContainer),
            a != null || o.onclick !== null || (o.onclick = Fl));
    else if (c !== 4 && ((n = n.child), n !== null))
      for (Rf(n, o, a), n = n.sibling; n !== null; )
        Rf(n, o, a), (n = n.sibling);
  }
  function Af(n, o, a) {
    var c = n.tag;
    if (c === 5 || c === 6)
      (n = n.stateNode), o ? a.insertBefore(n, o) : a.appendChild(n);
    else if (c !== 4 && ((n = n.child), n !== null))
      for (Af(n, o, a), n = n.sibling; n !== null; )
        Af(n, o, a), (n = n.sibling);
  }
  var xt = null,
    On = !1;
  function Xr(n, o, a) {
    for (a = a.child; a !== null; ) By(n, o, a), (a = a.sibling);
  }
  function By(n, o, a) {
    if (un && typeof un.onCommitFiberUnmount == "function")
      try {
        un.onCommitFiberUnmount(xo, a);
      } catch {}
    switch (a.tag) {
      case 5:
        Ot || ji(a, o);
      case 6:
        var c = xt,
          h = On;
        (xt = null),
          Xr(n, o, a),
          (xt = c),
          (On = h),
          xt !== null &&
            (On
              ? ((n = xt),
                (a = a.stateNode),
                n.nodeType === 8
                  ? n.parentNode.removeChild(a)
                  : n.removeChild(a))
              : xt.removeChild(a.stateNode));
        break;
      case 18:
        xt !== null &&
          (On
            ? ((n = xt),
              (a = a.stateNode),
              n.nodeType === 8
                ? Vd(n.parentNode, a)
                : n.nodeType === 1 && Vd(n, a),
              Fr(n))
            : Vd(xt, a.stateNode));
        break;
      case 4:
        (c = xt),
          (h = On),
          (xt = a.stateNode.containerInfo),
          (On = !0),
          Xr(n, o, a),
          (xt = c),
          (On = h);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ot &&
          ((c = a.updateQueue), c !== null && ((c = c.lastEffect), c !== null))
        ) {
          h = c = c.next;
          do {
            var g = h,
              v = g.destroy;
            (g = g.tag),
              v !== void 0 && (g & 2 || g & 4) && Tf(a, o, v),
              (h = h.next);
          } while (h !== c);
        }
        Xr(n, o, a);
        break;
      case 1:
        if (
          !Ot &&
          (ji(a, o),
          (c = a.stateNode),
          typeof c.componentWillUnmount == "function")
        )
          try {
            (c.props = a.memoizedProps),
              (c.state = a.memoizedState),
              c.componentWillUnmount();
          } catch (C) {
            rt(a, o, C);
          }
        Xr(n, o, a);
        break;
      case 21:
        Xr(n, o, a);
        break;
      case 22:
        a.mode & 1
          ? ((Ot = (c = Ot) || a.memoizedState !== null), Xr(n, o, a), (Ot = c))
          : Xr(n, o, a);
        break;
      default:
        Xr(n, o, a);
    }
  }
  function Vy(n) {
    var o = n.updateQueue;
    if (o !== null) {
      n.updateQueue = null;
      var a = n.stateNode;
      a === null && (a = n.stateNode = new wC()),
        o.forEach(function (c) {
          var h = OC.bind(null, n, c);
          a.has(c) || (a.add(c), c.then(h, h));
        });
    }
  }
  function Mn(n, o) {
    var a = o.deletions;
    if (a !== null)
      for (var c = 0; c < a.length; c++) {
        var h = a[c];
        try {
          var g = n,
            v = o,
            C = v;
          e: for (; C !== null; ) {
            switch (C.tag) {
              case 5:
                (xt = C.stateNode), (On = !1);
                break e;
              case 3:
                (xt = C.stateNode.containerInfo), (On = !0);
                break e;
              case 4:
                (xt = C.stateNode.containerInfo), (On = !0);
                break e;
            }
            C = C.return;
          }
          if (xt === null) throw Error(r(160));
          By(g, v, h), (xt = null), (On = !1);
          var R = h.alternate;
          R !== null && (R.return = null), (h.return = null);
        } catch (F) {
          rt(h, o, F);
        }
      }
    if (o.subtreeFlags & 12854)
      for (o = o.child; o !== null; ) Uy(o, n), (o = o.sibling);
  }
  function Uy(n, o) {
    var a = n.alternate,
      c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mn(o, n), Xn(n), c & 4)) {
          try {
            oa(3, n, n.return), uu(3, n);
          } catch (se) {
            rt(n, n.return, se);
          }
          try {
            oa(5, n, n.return);
          } catch (se) {
            rt(n, n.return, se);
          }
        }
        break;
      case 1:
        Mn(o, n), Xn(n), c & 512 && a !== null && ji(a, a.return);
        break;
      case 5:
        if (
          (Mn(o, n),
          Xn(n),
          c & 512 && a !== null && ji(a, a.return),
          n.flags & 32)
        ) {
          var h = n.stateNode;
          try {
            zr(h, "");
          } catch (se) {
            rt(n, n.return, se);
          }
        }
        if (c & 4 && ((h = n.stateNode), h != null)) {
          var g = n.memoizedProps,
            v = a !== null ? a.memoizedProps : g,
            C = n.type,
            R = n.updateQueue;
          if (((n.updateQueue = null), R !== null))
            try {
              C === "input" && g.type === "radio" && g.name != null && dl(h, g),
                Cs(C, v);
              var F = Cs(C, g);
              for (v = 0; v < R.length; v += 2) {
                var K = R[v],
                  G = R[v + 1];
                K === "style"
                  ? gl(h, G)
                  : K === "dangerouslySetInnerHTML"
                  ? ks(h, G)
                  : K === "children"
                  ? zr(h, G)
                  : z(h, K, G, F);
              }
              switch (C) {
                case "input":
                  vs(h, g);
                  break;
                case "textarea":
                  Ss(h, g);
                  break;
                case "select":
                  var q = h._wrapperState.wasMultiple;
                  h._wrapperState.wasMultiple = !!g.multiple;
                  var ee = g.value;
                  ee != null
                    ? Un(h, !!g.multiple, ee, !1)
                    : q !== !!g.multiple &&
                      (g.defaultValue != null
                        ? Un(h, !!g.multiple, g.defaultValue, !0)
                        : Un(h, !!g.multiple, g.multiple ? [] : "", !1));
              }
              h[Ks] = g;
            } catch (se) {
              rt(n, n.return, se);
            }
        }
        break;
      case 6:
        if ((Mn(o, n), Xn(n), c & 4)) {
          if (n.stateNode === null) throw Error(r(162));
          (h = n.stateNode), (g = n.memoizedProps);
          try {
            h.nodeValue = g;
          } catch (se) {
            rt(n, n.return, se);
          }
        }
        break;
      case 3:
        if (
          (Mn(o, n), Xn(n), c & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Fr(o.containerInfo);
          } catch (se) {
            rt(n, n.return, se);
          }
        break;
      case 4:
        Mn(o, n), Xn(n);
        break;
      case 13:
        Mn(o, n),
          Xn(n),
          (h = n.child),
          h.flags & 8192 &&
            ((g = h.memoizedState !== null),
            (h.stateNode.isHidden = g),
            !g ||
              (h.alternate !== null && h.alternate.memoizedState !== null) ||
              (Mf = Ge())),
          c & 4 && Vy(n);
        break;
      case 22:
        if (
          ((K = a !== null && a.memoizedState !== null),
          n.mode & 1 ? ((Ot = (F = Ot) || K), Mn(o, n), (Ot = F)) : Mn(o, n),
          Xn(n),
          c & 8192)
        ) {
          if (
            ((F = n.memoizedState !== null),
            (n.stateNode.isHidden = F) && !K && n.mode & 1)
          )
            for (ne = n, K = n.child; K !== null; ) {
              for (G = ne = K; ne !== null; ) {
                switch (((q = ne), (ee = q.child), q.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    oa(4, q, q.return);
                    break;
                  case 1:
                    ji(q, q.return);
                    var oe = q.stateNode;
                    if (typeof oe.componentWillUnmount == "function") {
                      (c = q), (a = q.return);
                      try {
                        (o = c),
                          (oe.props = o.memoizedProps),
                          (oe.state = o.memoizedState),
                          oe.componentWillUnmount();
                      } catch (se) {
                        rt(c, a, se);
                      }
                    }
                    break;
                  case 5:
                    ji(q, q.return);
                    break;
                  case 22:
                    if (q.memoizedState !== null) {
                      qy(G);
                      continue;
                    }
                }
                ee !== null ? ((ee.return = q), (ne = ee)) : qy(G);
              }
              K = K.sibling;
            }
          e: for (K = null, G = n; ; ) {
            if (G.tag === 5) {
              if (K === null) {
                K = G;
                try {
                  (h = G.stateNode),
                    F
                      ? ((g = h.style),
                        typeof g.setProperty == "function"
                          ? g.setProperty("display", "none", "important")
                          : (g.display = "none"))
                      : ((C = G.stateNode),
                        (R = G.memoizedProps.style),
                        (v =
                          R != null && R.hasOwnProperty("display")
                            ? R.display
                            : null),
                        (C.style.display = ml("display", v)));
                } catch (se) {
                  rt(n, n.return, se);
                }
              }
            } else if (G.tag === 6) {
              if (K === null)
                try {
                  G.stateNode.nodeValue = F ? "" : G.memoizedProps;
                } catch (se) {
                  rt(n, n.return, se);
                }
            } else if (
              ((G.tag !== 22 && G.tag !== 23) ||
                G.memoizedState === null ||
                G === n) &&
              G.child !== null
            ) {
              (G.child.return = G), (G = G.child);
              continue;
            }
            if (G === n) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === n) break e;
              K === G && (K = null), (G = G.return);
            }
            K === G && (K = null),
              (G.sibling.return = G.return),
              (G = G.sibling);
          }
        }
        break;
      case 19:
        Mn(o, n), Xn(n), c & 4 && Vy(n);
        break;
      case 21:
        break;
      default:
        Mn(o, n), Xn(n);
    }
  }
  function Xn(n) {
    var o = n.flags;
    if (o & 2) {
      try {
        e: {
          for (var a = n.return; a !== null; ) {
            if (Iy(a)) {
              var c = a;
              break e;
            }
            a = a.return;
          }
          throw Error(r(160));
        }
        switch (c.tag) {
          case 5:
            var h = c.stateNode;
            c.flags & 32 && (zr(h, ""), (c.flags &= -33));
            var g = Fy(n);
            Af(n, g, h);
            break;
          case 3:
          case 4:
            var v = c.stateNode.containerInfo,
              C = Fy(n);
            Rf(n, C, v);
            break;
          default:
            throw Error(r(161));
        }
      } catch (R) {
        rt(n, n.return, R);
      }
      n.flags &= -3;
    }
    o & 4096 && (n.flags &= -4097);
  }
  function CC(n, o, a) {
    (ne = n), Wy(n);
  }
  function Wy(n, o, a) {
    for (var c = (n.mode & 1) !== 0; ne !== null; ) {
      var h = ne,
        g = h.child;
      if (h.tag === 22 && c) {
        var v = h.memoizedState !== null || lu;
        if (!v) {
          var C = h.alternate,
            R = (C !== null && C.memoizedState !== null) || Ot;
          C = lu;
          var F = Ot;
          if (((lu = v), (Ot = R) && !F))
            for (ne = h; ne !== null; )
              (v = ne),
                (R = v.child),
                v.tag === 22 && v.memoizedState !== null
                  ? Ky(h)
                  : R !== null
                  ? ((R.return = v), (ne = R))
                  : Ky(h);
          for (; g !== null; ) (ne = g), Wy(g), (g = g.sibling);
          (ne = h), (lu = C), (Ot = F);
        }
        Hy(n);
      } else
        h.subtreeFlags & 8772 && g !== null
          ? ((g.return = h), (ne = g))
          : Hy(n);
    }
  }
  function Hy(n) {
    for (; ne !== null; ) {
      var o = ne;
      if (o.flags & 8772) {
        var a = o.alternate;
        try {
          if (o.flags & 8772)
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Ot || uu(5, o);
                break;
              case 1:
                var c = o.stateNode;
                if (o.flags & 4 && !Ot)
                  if (a === null) c.componentDidMount();
                  else {
                    var h =
                      o.elementType === o.type
                        ? a.memoizedProps
                        : $n(o.type, a.memoizedProps);
                    c.componentDidUpdate(
                      h,
                      a.memoizedState,
                      c.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var g = o.updateQueue;
                g !== null && qg(o, g, c);
                break;
              case 3:
                var v = o.updateQueue;
                if (v !== null) {
                  if (((a = null), o.child !== null))
                    switch (o.child.tag) {
                      case 5:
                        a = o.child.stateNode;
                        break;
                      case 1:
                        a = o.child.stateNode;
                    }
                  qg(o, v, a);
                }
                break;
              case 5:
                var C = o.stateNode;
                if (a === null && o.flags & 4) {
                  a = C;
                  var R = o.memoizedProps;
                  switch (o.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      R.autoFocus && a.focus();
                      break;
                    case "img":
                      R.src && (a.src = R.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (o.memoizedState === null) {
                  var F = o.alternate;
                  if (F !== null) {
                    var K = F.memoizedState;
                    if (K !== null) {
                      var G = K.dehydrated;
                      G !== null && Fr(G);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(r(163));
            }
          Ot || (o.flags & 512 && Ef(o));
        } catch (q) {
          rt(o, o.return, q);
        }
      }
      if (o === n) {
        ne = null;
        break;
      }
      if (((a = o.sibling), a !== null)) {
        (a.return = o.return), (ne = a);
        break;
      }
      ne = o.return;
    }
  }
  function qy(n) {
    for (; ne !== null; ) {
      var o = ne;
      if (o === n) {
        ne = null;
        break;
      }
      var a = o.sibling;
      if (a !== null) {
        (a.return = o.return), (ne = a);
        break;
      }
      ne = o.return;
    }
  }
  function Ky(n) {
    for (; ne !== null; ) {
      var o = ne;
      try {
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            var a = o.return;
            try {
              uu(4, o);
            } catch (R) {
              rt(o, a, R);
            }
            break;
          case 1:
            var c = o.stateNode;
            if (typeof c.componentDidMount == "function") {
              var h = o.return;
              try {
                c.componentDidMount();
              } catch (R) {
                rt(o, h, R);
              }
            }
            var g = o.return;
            try {
              Ef(o);
            } catch (R) {
              rt(o, g, R);
            }
            break;
          case 5:
            var v = o.return;
            try {
              Ef(o);
            } catch (R) {
              rt(o, v, R);
            }
        }
      } catch (R) {
        rt(o, o.return, R);
      }
      if (o === n) {
        ne = null;
        break;
      }
      var C = o.sibling;
      if (C !== null) {
        (C.return = o.return), (ne = C);
        break;
      }
      ne = o.return;
    }
  }
  var _C = Math.ceil,
    cu = W.ReactCurrentDispatcher,
    $f = W.ReactCurrentOwner,
    vn = W.ReactCurrentBatchConfig,
    Ae = 0,
    vt = null,
    ut = null,
    wt = 0,
    en = 0,
    Li = Hr(0),
    pt = 0,
    ia = null,
    Mo = 0,
    du = 0,
    Of = 0,
    sa = null,
    Ht = null,
    Mf = 0,
    Ni = 1 / 0,
    xr = null,
    fu = !1,
    zf = null,
    Qr = null,
    hu = !1,
    Jr = null,
    pu = 0,
    aa = 0,
    jf = null,
    mu = -1,
    gu = 0;
  function Dt() {
    return Ae & 6 ? Ge() : mu !== -1 ? mu : (mu = Ge());
  }
  function Zr(n) {
    return n.mode & 1
      ? Ae & 2 && wt !== 0
        ? wt & -wt
        : lC.transition !== null
        ? (gu === 0 && (gu = Tl()), gu)
        : ((n = Oe),
          n !== 0 || ((n = window.event), (n = n === void 0 ? 16 : Ue(n.type))),
          n)
      : 1;
  }
  function zn(n, o, a, c) {
    if (50 < aa) throw ((aa = 0), (jf = null), Error(r(185)));
    ko(n, a, c),
      (!(Ae & 2) || n !== vt) &&
        (n === vt && (!(Ae & 2) && (du |= a), pt === 4 && eo(n, wt)),
        qt(n, c),
        a === 1 &&
          Ae === 0 &&
          !(o.mode & 1) &&
          ((Ni = Ge() + 500), Wl && Kr()));
  }
  function qt(n, o) {
    var a = n.callbackNode;
    As(n, o);
    var c = fi(n, n === vt ? wt : 0);
    if (c === 0)
      a !== null && ai(a), (n.callbackNode = null), (n.callbackPriority = 0);
    else if (((o = c & -c), n.callbackPriority !== o)) {
      if ((a != null && ai(a), o === 1))
        n.tag === 0 ? aC(Yy.bind(null, n)) : zg(Yy.bind(null, n)),
          rC(function () {
            !(Ae & 6) && Kr();
          }),
          (a = null);
      else {
        switch (El(c)) {
          case 1:
            a = Dr;
            break;
          case 4:
            a = Rs;
            break;
          case 16:
            a = ui;
            break;
          case 536870912:
            a = Pl;
            break;
          default:
            a = ui;
        }
        a = r0(a, Gy.bind(null, n));
      }
      (n.callbackPriority = o), (n.callbackNode = a);
    }
  }
  function Gy(n, o) {
    if (((mu = -1), (gu = 0), Ae & 6)) throw Error(r(327));
    var a = n.callbackNode;
    if (Di() && n.callbackNode !== a) return null;
    var c = fi(n, n === vt ? wt : 0);
    if (c === 0) return null;
    if (c & 30 || c & n.expiredLanes || o) o = yu(n, c);
    else {
      o = c;
      var h = Ae;
      Ae |= 2;
      var g = Qy();
      (vt !== n || wt !== o) && ((xr = null), (Ni = Ge() + 500), jo(n, o));
      do
        try {
          EC();
          break;
        } catch (C) {
          Xy(n, C);
        }
      while (!0);
      Jd(),
        (cu.current = g),
        (Ae = h),
        ut !== null ? (o = 0) : ((vt = null), (wt = 0), (o = pt));
    }
    if (o !== 0) {
      if (
        (o === 2 && ((h = $s(n)), h !== 0 && ((c = h), (o = Lf(n, h)))),
        o === 1)
      )
        throw ((a = ia), jo(n, 0), eo(n, c), qt(n, Ge()), a);
      if (o === 6) eo(n, c);
      else {
        if (
          ((h = n.current.alternate),
          !(c & 30) &&
            !PC(h) &&
            ((o = yu(n, c)),
            o === 2 && ((g = $s(n)), g !== 0 && ((c = g), (o = Lf(n, g)))),
            o === 1))
        )
          throw ((a = ia), jo(n, 0), eo(n, c), qt(n, Ge()), a);
        switch (((n.finishedWork = h), (n.finishedLanes = c), o)) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Lo(n, Ht, xr);
            break;
          case 3:
            if (
              (eo(n, c),
              (c & 130023424) === c && ((o = Mf + 500 - Ge()), 10 < o))
            ) {
              if (fi(n, 0) !== 0) break;
              if (((h = n.suspendedLanes), (h & c) !== c)) {
                Dt(), (n.pingedLanes |= n.suspendedLanes & h);
                break;
              }
              n.timeoutHandle = Bd(Lo.bind(null, n, Ht, xr), o);
              break;
            }
            Lo(n, Ht, xr);
            break;
          case 4:
            if ((eo(n, c), (c & 4194240) === c)) break;
            for (o = n.eventTimes, h = -1; 0 < c; ) {
              var v = 31 - Qt(c);
              (g = 1 << v), (v = o[v]), v > h && (h = v), (c &= ~g);
            }
            if (
              ((c = h),
              (c = Ge() - c),
              (c =
                (120 > c
                  ? 120
                  : 480 > c
                  ? 480
                  : 1080 > c
                  ? 1080
                  : 1920 > c
                  ? 1920
                  : 3e3 > c
                  ? 3e3
                  : 4320 > c
                  ? 4320
                  : 1960 * _C(c / 1960)) - c),
              10 < c)
            ) {
              n.timeoutHandle = Bd(Lo.bind(null, n, Ht, xr), c);
              break;
            }
            Lo(n, Ht, xr);
            break;
          case 5:
            Lo(n, Ht, xr);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return qt(n, Ge()), n.callbackNode === a ? Gy.bind(null, n) : null;
  }
  function Lf(n, o) {
    var a = sa;
    return (
      n.current.memoizedState.isDehydrated && (jo(n, o).flags |= 256),
      (n = yu(n, o)),
      n !== 2 && ((o = Ht), (Ht = a), o !== null && Nf(o)),
      n
    );
  }
  function Nf(n) {
    Ht === null ? (Ht = n) : Ht.push.apply(Ht, n);
  }
  function PC(n) {
    for (var o = n; ; ) {
      if (o.flags & 16384) {
        var a = o.updateQueue;
        if (a !== null && ((a = a.stores), a !== null))
          for (var c = 0; c < a.length; c++) {
            var h = a[c],
              g = h.getSnapshot;
            h = h.value;
            try {
              if (!Rn(g(), h)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((a = o.child), o.subtreeFlags & 16384 && a !== null))
        (a.return = o), (o = a);
      else {
        if (o === n) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === n) return !0;
          o = o.return;
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    return !0;
  }
  function eo(n, o) {
    for (
      o &= ~Of,
        o &= ~du,
        n.suspendedLanes |= o,
        n.pingedLanes &= ~o,
        n = n.expirationTimes;
      0 < o;

    ) {
      var a = 31 - Qt(o),
        c = 1 << a;
      (n[a] = -1), (o &= ~c);
    }
  }
  function Yy(n) {
    if (Ae & 6) throw Error(r(327));
    Di();
    var o = fi(n, 0);
    if (!(o & 1)) return qt(n, Ge()), null;
    var a = yu(n, o);
    if (n.tag !== 0 && a === 2) {
      var c = $s(n);
      c !== 0 && ((o = c), (a = Lf(n, c)));
    }
    if (a === 1) throw ((a = ia), jo(n, 0), eo(n, o), qt(n, Ge()), a);
    if (a === 6) throw Error(r(345));
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = o),
      Lo(n, Ht, xr),
      qt(n, Ge()),
      null
    );
  }
  function Df(n, o) {
    var a = Ae;
    Ae |= 1;
    try {
      return n(o);
    } finally {
      (Ae = a), Ae === 0 && ((Ni = Ge() + 500), Wl && Kr());
    }
  }
  function zo(n) {
    Jr !== null && Jr.tag === 0 && !(Ae & 6) && Di();
    var o = Ae;
    Ae |= 1;
    var a = vn.transition,
      c = Oe;
    try {
      if (((vn.transition = null), (Oe = 1), n)) return n();
    } finally {
      (Oe = c), (vn.transition = a), (Ae = o), !(Ae & 6) && Kr();
    }
  }
  function If() {
    (en = Li.current), Xe(Li);
  }
  function jo(n, o) {
    (n.finishedWork = null), (n.finishedLanes = 0);
    var a = n.timeoutHandle;
    if ((a !== -1 && ((n.timeoutHandle = -1), nC(a)), ut !== null))
      for (a = ut.return; a !== null; ) {
        var c = a;
        switch ((Kd(c), c.tag)) {
          case 1:
            (c = c.type.childContextTypes), c != null && Vl();
            break;
          case 3:
            Mi(), Xe(Vt), Xe(Rt), af();
            break;
          case 5:
            of(c);
            break;
          case 4:
            Mi();
            break;
          case 13:
            Xe(et);
            break;
          case 19:
            Xe(et);
            break;
          case 10:
            Zd(c.type._context);
            break;
          case 22:
          case 23:
            If();
        }
        a = a.return;
      }
    if (
      ((vt = n),
      (ut = n = to(n.current, null)),
      (wt = en = o),
      (pt = 0),
      (ia = null),
      (Of = du = Mo = 0),
      (Ht = sa = null),
      Ao !== null)
    ) {
      for (o = 0; o < Ao.length; o++)
        if (((a = Ao[o]), (c = a.interleaved), c !== null)) {
          a.interleaved = null;
          var h = c.next,
            g = a.pending;
          if (g !== null) {
            var v = g.next;
            (g.next = h), (c.next = v);
          }
          a.pending = c;
        }
      Ao = null;
    }
    return n;
  }
  function Xy(n, o) {
    do {
      var a = ut;
      try {
        if ((Jd(), (eu.current = ou), tu)) {
          for (var c = tt.memoizedState; c !== null; ) {
            var h = c.queue;
            h !== null && (h.pending = null), (c = c.next);
          }
          tu = !1;
        }
        if (
          ((Oo = 0),
          (yt = ht = tt = null),
          (Zs = !1),
          (ea = 0),
          ($f.current = null),
          a === null || a.return === null)
        ) {
          (pt = 1), (ia = o), (ut = null);
          break;
        }
        e: {
          var g = n,
            v = a.return,
            C = a,
            R = o;
          if (
            ((o = wt),
            (C.flags |= 32768),
            R !== null && typeof R == "object" && typeof R.then == "function")
          ) {
            var F = R,
              K = C,
              G = K.tag;
            if (!(K.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var q = K.alternate;
              q
                ? ((K.updateQueue = q.updateQueue),
                  (K.memoizedState = q.memoizedState),
                  (K.lanes = q.lanes))
                : ((K.updateQueue = null), (K.memoizedState = null));
            }
            var ee = xy(v);
            if (ee !== null) {
              (ee.flags &= -257),
                wy(ee, v, C, g, o),
                ee.mode & 1 && Sy(g, F, o),
                (o = ee),
                (R = F);
              var oe = o.updateQueue;
              if (oe === null) {
                var se = new Set();
                se.add(R), (o.updateQueue = se);
              } else oe.add(R);
              break e;
            } else {
              if (!(o & 1)) {
                Sy(g, F, o), Ff();
                break e;
              }
              R = Error(r(426));
            }
          } else if (Ze && C.mode & 1) {
            var st = xy(v);
            if (st !== null) {
              !(st.flags & 65536) && (st.flags |= 256),
                wy(st, v, C, g, o),
                Xd(zi(R, C));
              break e;
            }
          }
          (g = R = zi(R, C)),
            pt !== 4 && (pt = 2),
            sa === null ? (sa = [g]) : sa.push(g),
            (g = v);
          do {
            switch (g.tag) {
              case 3:
                (g.flags |= 65536), (o &= -o), (g.lanes |= o);
                var N = vy(g, R, o);
                Hg(g, N);
                break e;
              case 1:
                C = R;
                var $ = g.type,
                  D = g.stateNode;
                if (
                  !(g.flags & 128) &&
                  (typeof $.getDerivedStateFromError == "function" ||
                    (D !== null &&
                      typeof D.componentDidCatch == "function" &&
                      (Qr === null || !Qr.has(D))))
                ) {
                  (g.flags |= 65536), (o &= -o), (g.lanes |= o);
                  var Q = by(g, C, o);
                  Hg(g, Q);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Zy(a);
      } catch (ae) {
        (o = ae), ut === a && a !== null && (ut = a = a.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qy() {
    var n = cu.current;
    return (cu.current = ou), n === null ? ou : n;
  }
  function Ff() {
    (pt === 0 || pt === 3 || pt === 2) && (pt = 4),
      vt === null || (!(Mo & 268435455) && !(du & 268435455)) || eo(vt, wt);
  }
  function yu(n, o) {
    var a = Ae;
    Ae |= 2;
    var c = Qy();
    (vt !== n || wt !== o) && ((xr = null), jo(n, o));
    do
      try {
        TC();
        break;
      } catch (h) {
        Xy(n, h);
      }
    while (!0);
    if ((Jd(), (Ae = a), (cu.current = c), ut !== null)) throw Error(r(261));
    return (vt = null), (wt = 0), pt;
  }
  function TC() {
    for (; ut !== null; ) Jy(ut);
  }
  function EC() {
    for (; ut !== null && !fd(); ) Jy(ut);
  }
  function Jy(n) {
    var o = n0(n.alternate, n, en);
    (n.memoizedProps = n.pendingProps),
      o === null ? Zy(n) : (ut = o),
      ($f.current = null);
  }
  function Zy(n) {
    var o = n;
    do {
      var a = o.alternate;
      if (((n = o.return), o.flags & 32768)) {
        if (((a = xC(a, o)), a !== null)) {
          (a.flags &= 32767), (ut = a);
          return;
        }
        if (n !== null)
          (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null);
        else {
          (pt = 6), (ut = null);
          return;
        }
      } else if (((a = SC(a, o, en)), a !== null)) {
        ut = a;
        return;
      }
      if (((o = o.sibling), o !== null)) {
        ut = o;
        return;
      }
      ut = o = n;
    } while (o !== null);
    pt === 0 && (pt = 5);
  }
  function Lo(n, o, a) {
    var c = Oe,
      h = vn.transition;
    try {
      (vn.transition = null), (Oe = 1), RC(n, o, a, c);
    } finally {
      (vn.transition = h), (Oe = c);
    }
    return null;
  }
  function RC(n, o, a, c) {
    do Di();
    while (Jr !== null);
    if (Ae & 6) throw Error(r(327));
    a = n.finishedWork;
    var h = n.finishedLanes;
    if (a === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), a === n.current))
      throw Error(r(177));
    (n.callbackNode = null), (n.callbackPriority = 0);
    var g = a.lanes | a.childLanes;
    if (
      (bd(n, g),
      n === vt && ((ut = vt = null), (wt = 0)),
      (!(a.subtreeFlags & 2064) && !(a.flags & 2064)) ||
        hu ||
        ((hu = !0),
        r0(ui, function () {
          return Di(), null;
        })),
      (g = (a.flags & 15990) !== 0),
      a.subtreeFlags & 15990 || g)
    ) {
      (g = vn.transition), (vn.transition = null);
      var v = Oe;
      Oe = 1;
      var C = Ae;
      (Ae |= 4),
        ($f.current = null),
        kC(n, a),
        Uy(a, n),
        Yk(Id),
        (k = !!Dd),
        (Id = Dd = null),
        (n.current = a),
        CC(a),
        li(),
        (Ae = C),
        (Oe = v),
        (vn.transition = g);
    } else n.current = a;
    if (
      (hu && ((hu = !1), (Jr = n), (pu = h)),
      (g = n.pendingLanes),
      g === 0 && (Qr = null),
      md(a.stateNode),
      qt(n, Ge()),
      o !== null)
    )
      for (c = n.onRecoverableError, a = 0; a < o.length; a++)
        (h = o[a]), c(h.value, { componentStack: h.stack, digest: h.digest });
    if (fu) throw ((fu = !1), (n = zf), (zf = null), n);
    return (
      pu & 1 && n.tag !== 0 && Di(),
      (g = n.pendingLanes),
      g & 1 ? (n === jf ? aa++ : ((aa = 0), (jf = n))) : (aa = 0),
      Kr(),
      null
    );
  }
  function Di() {
    if (Jr !== null) {
      var n = El(pu),
        o = vn.transition,
        a = Oe;
      try {
        if (((vn.transition = null), (Oe = 16 > n ? 16 : n), Jr === null))
          var c = !1;
        else {
          if (((n = Jr), (Jr = null), (pu = 0), Ae & 6)) throw Error(r(331));
          var h = Ae;
          for (Ae |= 4, ne = n.current; ne !== null; ) {
            var g = ne,
              v = g.child;
            if (ne.flags & 16) {
              var C = g.deletions;
              if (C !== null) {
                for (var R = 0; R < C.length; R++) {
                  var F = C[R];
                  for (ne = F; ne !== null; ) {
                    var K = ne;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        oa(8, K, g);
                    }
                    var G = K.child;
                    if (G !== null) (G.return = K), (ne = G);
                    else
                      for (; ne !== null; ) {
                        K = ne;
                        var q = K.sibling,
                          ee = K.return;
                        if ((Dy(K), K === F)) {
                          ne = null;
                          break;
                        }
                        if (q !== null) {
                          (q.return = ee), (ne = q);
                          break;
                        }
                        ne = ee;
                      }
                  }
                }
                var oe = g.alternate;
                if (oe !== null) {
                  var se = oe.child;
                  if (se !== null) {
                    oe.child = null;
                    do {
                      var st = se.sibling;
                      (se.sibling = null), (se = st);
                    } while (se !== null);
                  }
                }
                ne = g;
              }
            }
            if (g.subtreeFlags & 2064 && v !== null) (v.return = g), (ne = v);
            else
              e: for (; ne !== null; ) {
                if (((g = ne), g.flags & 2048))
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oa(9, g, g.return);
                  }
                var N = g.sibling;
                if (N !== null) {
                  (N.return = g.return), (ne = N);
                  break e;
                }
                ne = g.return;
              }
          }
          var $ = n.current;
          for (ne = $; ne !== null; ) {
            v = ne;
            var D = v.child;
            if (v.subtreeFlags & 2064 && D !== null) (D.return = v), (ne = D);
            else
              e: for (v = $; ne !== null; ) {
                if (((C = ne), C.flags & 2048))
                  try {
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        uu(9, C);
                    }
                  } catch (ae) {
                    rt(C, C.return, ae);
                  }
                if (C === v) {
                  ne = null;
                  break e;
                }
                var Q = C.sibling;
                if (Q !== null) {
                  (Q.return = C.return), (ne = Q);
                  break e;
                }
                ne = C.return;
              }
          }
          if (
            ((Ae = h),
            Kr(),
            un && typeof un.onPostCommitFiberRoot == "function")
          )
            try {
              un.onPostCommitFiberRoot(xo, n);
            } catch {}
          c = !0;
        }
        return c;
      } finally {
        (Oe = a), (vn.transition = o);
      }
    }
    return !1;
  }
  function e0(n, o, a) {
    (o = zi(a, o)),
      (o = vy(n, o, 1)),
      (n = Yr(n, o, 1)),
      (o = Dt()),
      n !== null && (ko(n, 1, o), qt(n, o));
  }
  function rt(n, o, a) {
    if (n.tag === 3) e0(n, n, a);
    else
      for (; o !== null; ) {
        if (o.tag === 3) {
          e0(o, n, a);
          break;
        } else if (o.tag === 1) {
          var c = o.stateNode;
          if (
            typeof o.type.getDerivedStateFromError == "function" ||
            (typeof c.componentDidCatch == "function" &&
              (Qr === null || !Qr.has(c)))
          ) {
            (n = zi(a, n)),
              (n = by(o, n, 1)),
              (o = Yr(o, n, 1)),
              (n = Dt()),
              o !== null && (ko(o, 1, n), qt(o, n));
            break;
          }
        }
        o = o.return;
      }
  }
  function AC(n, o, a) {
    var c = n.pingCache;
    c !== null && c.delete(o),
      (o = Dt()),
      (n.pingedLanes |= n.suspendedLanes & a),
      vt === n &&
        (wt & a) === a &&
        (pt === 4 || (pt === 3 && (wt & 130023424) === wt && 500 > Ge() - Mf)
          ? jo(n, 0)
          : (Of |= a)),
      qt(n, o);
  }
  function t0(n, o) {
    o === 0 &&
      (n.mode & 1
        ? ((o = di), (di <<= 1), !(di & 130023424) && (di = 4194304))
        : (o = 1));
    var a = Dt();
    (n = vr(n, o)), n !== null && (ko(n, o, a), qt(n, a));
  }
  function $C(n) {
    var o = n.memoizedState,
      a = 0;
    o !== null && (a = o.retryLane), t0(n, a);
  }
  function OC(n, o) {
    var a = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode,
          h = n.memoizedState;
        h !== null && (a = h.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    c !== null && c.delete(o), t0(n, a);
  }
  var n0;
  n0 = function (n, o, a) {
    if (n !== null)
      if (n.memoizedProps !== o.pendingProps || Vt.current) Wt = !0;
      else {
        if (!(n.lanes & a) && !(o.flags & 128)) return (Wt = !1), bC(n, o, a);
        Wt = !!(n.flags & 131072);
      }
    else (Wt = !1), Ze && o.flags & 1048576 && jg(o, ql, o.index);
    switch (((o.lanes = 0), o.tag)) {
      case 2:
        var c = o.type;
        au(n, o), (n = o.pendingProps);
        var h = Pi(o, Rt.current);
        Oi(o, a), (h = cf(null, o, c, n, h, a));
        var g = df();
        return (
          (o.flags |= 1),
          typeof h == "object" &&
          h !== null &&
          typeof h.render == "function" &&
          h.$$typeof === void 0
            ? ((o.tag = 1),
              (o.memoizedState = null),
              (o.updateQueue = null),
              Ut(c) ? ((g = !0), Ul(o)) : (g = !1),
              (o.memoizedState =
                h.state !== null && h.state !== void 0 ? h.state : null),
              nf(o),
              (h.updater = iu),
              (o.stateNode = h),
              (h._reactInternals = o),
              yf(o, c, n, a),
              (o = xf(null, o, c, !0, g, a)))
            : ((o.tag = 0), Ze && g && qd(o), Nt(null, o, h, a), (o = o.child)),
          o
        );
      case 16:
        c = o.elementType;
        e: {
          switch (
            (au(n, o),
            (n = o.pendingProps),
            (h = c._init),
            (c = h(c._payload)),
            (o.type = c),
            (h = o.tag = zC(c)),
            (n = $n(c, n)),
            h)
          ) {
            case 0:
              o = Sf(null, o, c, n, a);
              break e;
            case 1:
              o = Ey(null, o, c, n, a);
              break e;
            case 11:
              o = ky(null, o, c, n, a);
              break e;
            case 14:
              o = Cy(null, o, c, $n(c.type, n), a);
              break e;
          }
          throw Error(r(306, c, ""));
        }
        return o;
      case 0:
        return (
          (c = o.type),
          (h = o.pendingProps),
          (h = o.elementType === c ? h : $n(c, h)),
          Sf(n, o, c, h, a)
        );
      case 1:
        return (
          (c = o.type),
          (h = o.pendingProps),
          (h = o.elementType === c ? h : $n(c, h)),
          Ey(n, o, c, h, a)
        );
      case 3:
        e: {
          if ((Ry(o), n === null)) throw Error(r(387));
          (c = o.pendingProps),
            (g = o.memoizedState),
            (h = g.element),
            Wg(n, o),
            Jl(o, c, null, a);
          var v = o.memoizedState;
          if (((c = v.element), g.isDehydrated))
            if (
              ((g = {
                element: c,
                isDehydrated: !1,
                cache: v.cache,
                pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                transitions: v.transitions,
              }),
              (o.updateQueue.baseState = g),
              (o.memoizedState = g),
              o.flags & 256)
            ) {
              (h = zi(Error(r(423)), o)), (o = Ay(n, o, c, a, h));
              break e;
            } else if (c !== h) {
              (h = zi(Error(r(424)), o)), (o = Ay(n, o, c, a, h));
              break e;
            } else
              for (
                Zt = Wr(o.stateNode.containerInfo.firstChild),
                  Jt = o,
                  Ze = !0,
                  An = null,
                  a = Vg(o, null, c, a),
                  o.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((Ri(), c === h)) {
              o = Sr(n, o, a);
              break e;
            }
            Nt(n, o, c, a);
          }
          o = o.child;
        }
        return o;
      case 5:
        return (
          Kg(o),
          n === null && Yd(o),
          (c = o.type),
          (h = o.pendingProps),
          (g = n !== null ? n.memoizedProps : null),
          (v = h.children),
          Fd(c, h) ? (v = null) : g !== null && Fd(c, g) && (o.flags |= 32),
          Ty(n, o),
          Nt(n, o, v, a),
          o.child
        );
      case 6:
        return n === null && Yd(o), null;
      case 13:
        return $y(n, o, a);
      case 4:
        return (
          rf(o, o.stateNode.containerInfo),
          (c = o.pendingProps),
          n === null ? (o.child = Ai(o, null, c, a)) : Nt(n, o, c, a),
          o.child
        );
      case 11:
        return (
          (c = o.type),
          (h = o.pendingProps),
          (h = o.elementType === c ? h : $n(c, h)),
          ky(n, o, c, h, a)
        );
      case 7:
        return Nt(n, o, o.pendingProps, a), o.child;
      case 8:
        return Nt(n, o, o.pendingProps.children, a), o.child;
      case 12:
        return Nt(n, o, o.pendingProps.children, a), o.child;
      case 10:
        e: {
          if (
            ((c = o.type._context),
            (h = o.pendingProps),
            (g = o.memoizedProps),
            (v = h.value),
            He(Yl, c._currentValue),
            (c._currentValue = v),
            g !== null)
          )
            if (Rn(g.value, v)) {
              if (g.children === h.children && !Vt.current) {
                o = Sr(n, o, a);
                break e;
              }
            } else
              for (g = o.child, g !== null && (g.return = o); g !== null; ) {
                var C = g.dependencies;
                if (C !== null) {
                  v = g.child;
                  for (var R = C.firstContext; R !== null; ) {
                    if (R.context === c) {
                      if (g.tag === 1) {
                        (R = br(-1, a & -a)), (R.tag = 2);
                        var F = g.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var K = F.pending;
                          K === null
                            ? (R.next = R)
                            : ((R.next = K.next), (K.next = R)),
                            (F.pending = R);
                        }
                      }
                      (g.lanes |= a),
                        (R = g.alternate),
                        R !== null && (R.lanes |= a),
                        ef(g.return, a, o),
                        (C.lanes |= a);
                      break;
                    }
                    R = R.next;
                  }
                } else if (g.tag === 10) v = g.type === o.type ? null : g.child;
                else if (g.tag === 18) {
                  if (((v = g.return), v === null)) throw Error(r(341));
                  (v.lanes |= a),
                    (C = v.alternate),
                    C !== null && (C.lanes |= a),
                    ef(v, a, o),
                    (v = g.sibling);
                } else v = g.child;
                if (v !== null) v.return = g;
                else
                  for (v = g; v !== null; ) {
                    if (v === o) {
                      v = null;
                      break;
                    }
                    if (((g = v.sibling), g !== null)) {
                      (g.return = v.return), (v = g);
                      break;
                    }
                    v = v.return;
                  }
                g = v;
              }
          Nt(n, o, h.children, a), (o = o.child);
        }
        return o;
      case 9:
        return (
          (h = o.type),
          (c = o.pendingProps.children),
          Oi(o, a),
          (h = gn(h)),
          (c = c(h)),
          (o.flags |= 1),
          Nt(n, o, c, a),
          o.child
        );
      case 14:
        return (
          (c = o.type),
          (h = $n(c, o.pendingProps)),
          (h = $n(c.type, h)),
          Cy(n, o, c, h, a)
        );
      case 15:
        return _y(n, o, o.type, o.pendingProps, a);
      case 17:
        return (
          (c = o.type),
          (h = o.pendingProps),
          (h = o.elementType === c ? h : $n(c, h)),
          au(n, o),
          (o.tag = 1),
          Ut(c) ? ((n = !0), Ul(o)) : (n = !1),
          Oi(o, a),
          gy(o, c, h),
          yf(o, c, h, a),
          xf(null, o, c, !0, n, a)
        );
      case 19:
        return My(n, o, a);
      case 22:
        return Py(n, o, a);
    }
    throw Error(r(156, o.tag));
  };
  function r0(n, o) {
    return _l(n, o);
  }
  function MC(n, o, a, c) {
    (this.tag = n),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = o),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = c),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function bn(n, o, a, c) {
    return new MC(n, o, a, c);
  }
  function Bf(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent);
  }
  function zC(n) {
    if (typeof n == "function") return Bf(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === be)) return 11;
      if (n === Ke) return 14;
    }
    return 2;
  }
  function to(n, o) {
    var a = n.alternate;
    return (
      a === null
        ? ((a = bn(n.tag, o, n.key, n.mode)),
          (a.elementType = n.elementType),
          (a.type = n.type),
          (a.stateNode = n.stateNode),
          (a.alternate = n),
          (n.alternate = a))
        : ((a.pendingProps = o),
          (a.type = n.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = n.flags & 14680064),
      (a.childLanes = n.childLanes),
      (a.lanes = n.lanes),
      (a.child = n.child),
      (a.memoizedProps = n.memoizedProps),
      (a.memoizedState = n.memoizedState),
      (a.updateQueue = n.updateQueue),
      (o = n.dependencies),
      (a.dependencies =
        o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
      (a.sibling = n.sibling),
      (a.index = n.index),
      (a.ref = n.ref),
      a
    );
  }
  function vu(n, o, a, c, h, g) {
    var v = 2;
    if (((c = n), typeof n == "function")) Bf(n) && (v = 1);
    else if (typeof n == "string") v = 5;
    else
      e: switch (n) {
        case U:
          return No(a.children, h, g, o);
        case Y:
          (v = 8), (h |= 8);
          break;
        case le:
          return (
            (n = bn(12, a, o, h | 2)), (n.elementType = le), (n.lanes = g), n
          );
        case Se:
          return (n = bn(13, a, o, h)), (n.elementType = Se), (n.lanes = g), n;
        case $e:
          return (n = bn(19, a, o, h)), (n.elementType = $e), (n.lanes = g), n;
        case de:
          return bu(a, h, g, o);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case ce:
                v = 10;
                break e;
              case ve:
                v = 9;
                break e;
              case be:
                v = 11;
                break e;
              case Ke:
                v = 14;
                break e;
              case Be:
                (v = 16), (c = null);
                break e;
            }
          throw Error(r(130, n == null ? n : typeof n, ""));
      }
    return (
      (o = bn(v, a, o, h)), (o.elementType = n), (o.type = c), (o.lanes = g), o
    );
  }
  function No(n, o, a, c) {
    return (n = bn(7, n, c, o)), (n.lanes = a), n;
  }
  function bu(n, o, a, c) {
    return (
      (n = bn(22, n, c, o)),
      (n.elementType = de),
      (n.lanes = a),
      (n.stateNode = { isHidden: !1 }),
      n
    );
  }
  function Vf(n, o, a) {
    return (n = bn(6, n, null, o)), (n.lanes = a), n;
  }
  function Uf(n, o, a) {
    return (
      (o = bn(4, n.children !== null ? n.children : [], n.key, o)),
      (o.lanes = a),
      (o.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      o
    );
  }
  function jC(n, o, a, c, h) {
    (this.tag = o),
      (this.containerInfo = n),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = pi(0)),
      (this.expirationTimes = pi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = pi(0)),
      (this.identifierPrefix = c),
      (this.onRecoverableError = h),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Wf(n, o, a, c, h, g, v, C, R) {
    return (
      (n = new jC(n, o, a, C, R)),
      o === 1 ? ((o = 1), g === !0 && (o |= 8)) : (o = 0),
      (g = bn(3, null, null, o)),
      (n.current = g),
      (g.stateNode = n),
      (g.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      nf(g),
      n
    );
  }
  function LC(n, o, a) {
    var c =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: I,
      key: c == null ? null : "" + c,
      children: n,
      containerInfo: o,
      implementation: a,
    };
  }
  function o0(n) {
    if (!n) return qr;
    n = n._reactInternals;
    e: {
      if (Bt(n) !== n || n.tag !== 1) throw Error(r(170));
      var o = n;
      do {
        switch (o.tag) {
          case 3:
            o = o.stateNode.context;
            break e;
          case 1:
            if (Ut(o.type)) {
              o = o.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        o = o.return;
      } while (o !== null);
      throw Error(r(171));
    }
    if (n.tag === 1) {
      var a = n.type;
      if (Ut(a)) return Og(n, a, o);
    }
    return o;
  }
  function i0(n, o, a, c, h, g, v, C, R) {
    return (
      (n = Wf(a, c, !0, n, h, g, v, C, R)),
      (n.context = o0(null)),
      (a = n.current),
      (c = Dt()),
      (h = Zr(a)),
      (g = br(c, h)),
      (g.callback = o ?? null),
      Yr(a, g, h),
      (n.current.lanes = h),
      ko(n, h, c),
      qt(n, c),
      n
    );
  }
  function Su(n, o, a, c) {
    var h = o.current,
      g = Dt(),
      v = Zr(h);
    return (
      (a = o0(a)),
      o.context === null ? (o.context = a) : (o.pendingContext = a),
      (o = br(g, v)),
      (o.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (o.callback = c),
      (n = Yr(h, o, v)),
      n !== null && (zn(n, h, v, g), Ql(n, h, v)),
      v
    );
  }
  function xu(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function s0(n, o) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var a = n.retryLane;
      n.retryLane = a !== 0 && a < o ? a : o;
    }
  }
  function Hf(n, o) {
    s0(n, o), (n = n.alternate) && s0(n, o);
  }
  function NC() {
    return null;
  }
  var a0 =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          console.error(n);
        };
  function qf(n) {
    this._internalRoot = n;
  }
  (wu.prototype.render = qf.prototype.render =
    function (n) {
      var o = this._internalRoot;
      if (o === null) throw Error(r(409));
      Su(n, o, null, null);
    }),
    (wu.prototype.unmount = qf.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var o = n.containerInfo;
          zo(function () {
            Su(null, n, null, null);
          }),
            (o[pr] = null);
        }
      });
  function wu(n) {
    this._internalRoot = n;
  }
  wu.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var o = Al();
      n = { blockedOn: null, target: n, priority: o };
      for (var a = 0; a < hn.length && o !== 0 && o < hn[a].priority; a++);
      hn.splice(a, 0, n), a === 0 && js(n);
    }
  };
  function Kf(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function ku(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function l0() {}
  function DC(n, o, a, c, h) {
    if (h) {
      if (typeof c == "function") {
        var g = c;
        c = function () {
          var F = xu(v);
          g.call(F);
        };
      }
      var v = i0(o, c, n, 0, null, !1, !1, "", l0);
      return (
        (n._reactRootContainer = v),
        (n[pr] = v.current),
        Hs(n.nodeType === 8 ? n.parentNode : n),
        zo(),
        v
      );
    }
    for (; (h = n.lastChild); ) n.removeChild(h);
    if (typeof c == "function") {
      var C = c;
      c = function () {
        var F = xu(R);
        C.call(F);
      };
    }
    var R = Wf(n, 0, !1, null, null, !1, !1, "", l0);
    return (
      (n._reactRootContainer = R),
      (n[pr] = R.current),
      Hs(n.nodeType === 8 ? n.parentNode : n),
      zo(function () {
        Su(o, R, a, c);
      }),
      R
    );
  }
  function Cu(n, o, a, c, h) {
    var g = a._reactRootContainer;
    if (g) {
      var v = g;
      if (typeof h == "function") {
        var C = h;
        h = function () {
          var R = xu(v);
          C.call(R);
        };
      }
      Su(o, v, n, h);
    } else v = DC(a, o, n, h, c);
    return xu(v);
  }
  (Rl = function (n) {
    switch (n.tag) {
      case 3:
        var o = n.stateNode;
        if (o.current.memoizedState.isDehydrated) {
          var a = wo(o.pendingLanes);
          a !== 0 &&
            (Os(o, a | 1), qt(o, Ge()), !(Ae & 6) && ((Ni = Ge() + 500), Kr()));
        }
        break;
      case 13:
        zo(function () {
          var c = vr(n, 1);
          if (c !== null) {
            var h = Dt();
            zn(c, n, 1, h);
          }
        }),
          Hf(n, 1);
    }
  }),
    (Ms = function (n) {
      if (n.tag === 13) {
        var o = vr(n, 134217728);
        if (o !== null) {
          var a = Dt();
          zn(o, n, 134217728, a);
        }
        Hf(n, 134217728);
      }
    }),
    (mi = function (n) {
      if (n.tag === 13) {
        var o = Zr(n),
          a = vr(n, o);
        if (a !== null) {
          var c = Dt();
          zn(a, n, o, c);
        }
        Hf(n, o);
      }
    }),
    (Al = function () {
      return Oe;
    }),
    ($l = function (n, o) {
      var a = Oe;
      try {
        return (Oe = n), o();
      } finally {
        Oe = a;
      }
    }),
    (ii = function (n, o, a) {
      switch (o) {
        case "input":
          if ((vs(n, a), (o = a.name), a.type === "radio" && o != null)) {
            for (a = n; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                "input[name=" + JSON.stringify("" + o) + '][type="radio"]'
              ),
                o = 0;
              o < a.length;
              o++
            ) {
              var c = a[o];
              if (c !== n && c.form === n.form) {
                var h = Bl(c);
                if (!h) throw Error(r(90));
                gs(c), vs(c, h);
              }
            }
          }
          break;
        case "textarea":
          Ss(n, a);
          break;
        case "select":
          (o = a.value), o != null && Un(n, !!a.multiple, o, !1);
      }
    }),
    (bl = Df),
    (Sl = zo);
  var IC = { usingClientEntryPoint: !1, Events: [Gs, Ci, Bl, yl, vl, Df] },
    la = {
      findFiberByHostInstance: Po,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    FC = {
      bundleType: la.bundleType,
      version: la.version,
      rendererPackageName: la.rendererPackageName,
      rendererConfig: la.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: W.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return (n = kl(n)), n === null ? null : n.stateNode;
      },
      findFiberByHostInstance: la.findFiberByHostInstance || NC,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_u.isDisabled && _u.supportsFiber)
      try {
        (xo = _u.inject(FC)), (un = _u);
      } catch {}
  }
  return (
    (Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = IC),
    (Kt.createPortal = function (n, o) {
      var a =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Kf(o)) throw Error(r(200));
      return LC(n, o, null, a);
    }),
    (Kt.createRoot = function (n, o) {
      if (!Kf(n)) throw Error(r(299));
      var a = !1,
        c = "",
        h = a0;
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (a = !0),
          o.identifierPrefix !== void 0 && (c = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (h = o.onRecoverableError)),
        (o = Wf(n, 1, !1, null, null, a, !1, c, h)),
        (n[pr] = o.current),
        Hs(n.nodeType === 8 ? n.parentNode : n),
        new qf(o)
      );
    }),
    (Kt.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var o = n._reactInternals;
      if (o === void 0)
        throw typeof n.render == "function"
          ? Error(r(188))
          : ((n = Object.keys(n).join(",")), Error(r(268, n)));
      return (n = kl(o)), (n = n === null ? null : n.stateNode), n;
    }),
    (Kt.flushSync = function (n) {
      return zo(n);
    }),
    (Kt.hydrate = function (n, o, a) {
      if (!ku(o)) throw Error(r(200));
      return Cu(null, n, o, !0, a);
    }),
    (Kt.hydrateRoot = function (n, o, a) {
      if (!Kf(n)) throw Error(r(405));
      var c = (a != null && a.hydratedSources) || null,
        h = !1,
        g = "",
        v = a0;
      if (
        (a != null &&
          (a.unstable_strictMode === !0 && (h = !0),
          a.identifierPrefix !== void 0 && (g = a.identifierPrefix),
          a.onRecoverableError !== void 0 && (v = a.onRecoverableError)),
        (o = i0(o, null, n, 1, a ?? null, h, !1, g, v)),
        (n[pr] = o.current),
        Hs(n),
        c)
      )
        for (n = 0; n < c.length; n++)
          (a = c[n]),
            (h = a._getVersion),
            (h = h(a._source)),
            o.mutableSourceEagerHydrationData == null
              ? (o.mutableSourceEagerHydrationData = [a, h])
              : o.mutableSourceEagerHydrationData.push(a, h);
      return new wu(o);
    }),
    (Kt.render = function (n, o, a) {
      if (!ku(o)) throw Error(r(200));
      return Cu(null, n, o, !1, a);
    }),
    (Kt.unmountComponentAtNode = function (n) {
      if (!ku(n)) throw Error(r(40));
      return n._reactRootContainer
        ? (zo(function () {
            Cu(null, null, n, !1, function () {
              (n._reactRootContainer = null), (n[pr] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Kt.unstable_batchedUpdates = Df),
    (Kt.unstable_renderSubtreeIntoContainer = function (n, o, a, c) {
      if (!ku(a)) throw Error(r(200));
      if (n == null || n._reactInternals === void 0) throw Error(r(38));
      return Cu(n, o, a, !1, c);
    }),
    (Kt.version = "18.3.1-next-f1338f8080-20240426"),
    Kt
  );
}
var k1;
function mw() {
  if (k1) return Oh.exports;
  k1 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (Oh.exports = aj()), Oh.exports;
}
var gw = mw();
const [yw, lj] = Zo({ strict: !1, name: "PortalContext" }),
  Wm = "chakra-portal",
  uj = ".chakra-portal",
  cj = (e) =>
    A.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  dj = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [i, s] = P.useState(null),
      l = P.useRef(null),
      [, u] = P.useState({});
    P.useEffect(() => u({}), []);
    const d = lj(),
      f = F3();
    yc(() => {
      if (!i) return;
      const m = i.ownerDocument,
        y = t ? d ?? m.body : m.body;
      if (!y) return;
      (l.current = m.createElement("div")),
        (l.current.className = Wm),
        y.appendChild(l.current),
        u({});
      const b = l.current;
      return () => {
        y.contains(b) && y.removeChild(b);
      };
    }, [i]);
    const p =
      f != null && f.zIndex
        ? A.jsx(cj, { zIndex: f == null ? void 0 : f.zIndex, children: r })
        : r;
    return l.current
      ? gw.createPortal(A.jsx(yw, { value: l.current, children: p }), l.current)
      : A.jsx("span", {
          ref: (m) => {
            m && s(m);
          },
        });
  },
  fj = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: i } = e,
      s = r.current,
      l = s ?? (typeof window < "u" ? document.body : void 0),
      u = P.useMemo(() => {
        const f = s == null ? void 0 : s.ownerDocument.createElement("div");
        return f && (f.className = Wm), f;
      }, [s]),
      [, d] = P.useState({});
    return (
      yc(() => d({}), []),
      yc(() => {
        if (!(!u || !l))
          return (
            l.appendChild(u),
            () => {
              l.removeChild(u);
            }
          );
      }, [u, l]),
      l && u
        ? gw.createPortal(A.jsx(yw, { value: i ? u : null, children: t }), u)
        : null
    );
  };
function Qc(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...i } = t;
  return r ? A.jsx(fj, { containerRef: r, ...i }) : A.jsx(dj, { ...i });
}
Qc.className = Wm;
Qc.selector = uj;
Qc.displayName = "Portal";
const [hj, MI] = Zo({ name: "ToastOptionsContext", strict: !1 }),
  pj = (e) => {
    const t = P.useSyncExternalStore(La.subscribe, La.getState, La.getState),
      {
        motionVariants: r,
        component: i = aw,
        portalProps: s,
        animatePresenceProps: l,
      } = e,
      d = Object.keys(t).map((f) => {
        const p = t[f];
        return A.jsx(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": `Notifications-${f}`,
            id: `chakra-toast-manager-${f}`,
            style: vz(f),
            children: A.jsx(ow, {
              ...l,
              initial: !1,
              children: p.map((m) =>
                A.jsx(i, { motionVariants: r, ...m }, m.id)
              ),
            }),
          },
          f
        );
      });
    return A.jsx(Qc, { ...s, children: d });
  },
  mj = (e) =>
    function ({ children: r, theme: i = e, toastOptions: s, ...l }) {
      return A.jsxs(V3, {
        theme: i,
        ...l,
        children: [
          A.jsx(hj, {
            value: s == null ? void 0 : s.defaultOptions,
            children: r,
          }),
          A.jsx(pj, { ...s }),
        ],
      });
    },
  gj = mj(O5),
  Iu = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  C1 = {
    enter: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.enter,
    }),
    exit: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.exit,
    }),
  },
  yj = (e) => e != null && parseInt(e.toString(), 10) > 0,
  _1 = {
    exit: {
      height: { duration: 0.2, ease: Iu.ease },
      opacity: { duration: 0.3, ease: Iu.ease },
    },
    enter: {
      height: { duration: 0.3, ease: Iu.ease },
      opacity: { duration: 0.4, ease: Iu.ease },
    },
  },
  vj = {
    exit: ({
      animateOpacity: e,
      startingHeight: t,
      transition: r,
      transitionEnd: i,
      delay: s,
    }) => ({
      ...(e && { opacity: yj(t) ? 1 : 0 }),
      height: t,
      transitionEnd: i == null ? void 0 : i.exit,
      transition: (r == null ? void 0 : r.exit) ?? C1.exit(_1.exit, s),
    }),
    enter: ({
      animateOpacity: e,
      endingHeight: t,
      transition: r,
      transitionEnd: i,
      delay: s,
    }) => ({
      ...(e && { opacity: 1 }),
      height: t,
      transitionEnd: i == null ? void 0 : i.enter,
      transition: (r == null ? void 0 : r.enter) ?? C1.enter(_1.enter, s),
    }),
  },
  Tp = P.forwardRef((e, t) => {
    const {
        in: r,
        unmountOnExit: i,
        animateOpacity: s = !0,
        startingHeight: l = 0,
        endingHeight: u = "auto",
        style: d,
        className: f,
        transition: p,
        transitionEnd: m,
        animatePresenceProps: y,
        ...b
      } = e,
      [_, S] = P.useState(!1);
    P.useEffect(() => {
      const z = setTimeout(() => {
        S(!0);
      });
      return () => clearTimeout(z);
    }, []),
      l2({
        condition: Number(l) > 0 && !!i,
        message:
          "startingHeight and unmountOnExit are mutually exclusive. You can't use them together",
      });
    const w = parseFloat(l.toString()) > 0,
      x = {
        startingHeight: l,
        endingHeight: u,
        animateOpacity: s,
        transition: _ ? p : { enter: { duration: 0 } },
        transitionEnd: {
          enter: m == null ? void 0 : m.enter,
          exit: i
            ? m == null
              ? void 0
              : m.exit
            : {
                ...(m == null ? void 0 : m.exit),
                display: w ? "block" : "none",
              },
        },
      },
      T = i ? r : !0,
      O = r || i ? "enter" : "exit";
    return A.jsx(ow, {
      ...y,
      initial: !1,
      custom: x,
      children:
        T &&
        A.jsx(rw.div, {
          ref: t,
          ...b,
          className: In("chakra-collapse", f),
          style: { overflow: "hidden", display: "block", ...d },
          custom: x,
          variants: vj,
          initial: i ? "exit" : !1,
          animate: O,
          exit: "exit",
        }),
    });
  });
Tp.displayName = "Collapse";
const ao = St("div");
ao.displayName = "Box";
const [zI, bj] = Zo({ strict: !1, name: "ButtonGroupContext" });
function _a(e) {
  const { children: t, className: r, ...i } = e,
    s = P.isValidElement(t)
      ? P.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    l = In("chakra-button__icon", r);
  return A.jsx(St.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...i,
    className: l,
    children: s,
  });
}
_a.displayName = "ButtonIcon";
function Ep(e) {
  const {
      label: t,
      placement: r,
      spacing: i = "0.5rem",
      children: s = A.jsx(Bm, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: l,
      __css: u,
      ...d
    } = e,
    f = In("chakra-button__spinner", l),
    p = r === "start" ? "marginEnd" : "marginStart",
    m = P.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [p]: t ? i : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...u,
      }),
      [u, t, p, i]
    );
  return A.jsx(St.div, { className: f, ...d, __css: m, children: s });
}
Ep.displayName = "ButtonSpinner";
function Sj(e) {
  const [t, r] = P.useState(!e);
  return {
    ref: P.useCallback((l) => {
      l && r(l.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
const Hm = cr((e, t) => {
  const r = bj(),
    i = Xc("Button", { ...r, ...e }),
    {
      isDisabled: s = r == null ? void 0 : r.isDisabled,
      isLoading: l,
      isActive: u,
      children: d,
      leftIcon: f,
      rightIcon: p,
      loadingText: m,
      iconSpacing: y = "0.5rem",
      type: b,
      spinner: _,
      spinnerPlacement: S = "start",
      className: w,
      as: x,
      shouldWrapChildren: T,
      ...O
    } = Lc(e),
    z = P.useMemo(() => {
      const U = { ...(i == null ? void 0 : i._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...i,
        ...(!!r && { _focus: U }),
      };
    }, [i, r]),
    { ref: W, type: E } = Sj(x),
    I = {
      rightIcon: p,
      leftIcon: f,
      iconSpacing: y,
      children: d,
      shouldWrapChildren: T,
    };
  return A.jsxs(St.button, {
    disabled: s || l,
    ref: p2(t, W),
    as: x,
    type: b ?? E,
    "data-active": h0(u),
    "data-loading": h0(l),
    __css: z,
    className: In("chakra-button", w),
    ...O,
    children: [
      l &&
        S === "start" &&
        A.jsx(Ep, {
          className: "chakra-button__spinner--start",
          label: m,
          placement: "start",
          spacing: y,
          children: _,
        }),
      l
        ? m || A.jsx(St.span, { opacity: 0, children: A.jsx(P1, { ...I }) })
        : A.jsx(P1, { ...I }),
      l &&
        S === "end" &&
        A.jsx(Ep, {
          className: "chakra-button__spinner--end",
          label: m,
          placement: "end",
          spacing: y,
          children: _,
        }),
    ],
  });
});
Hm.displayName = "Button";
function P1(e) {
  const {
    leftIcon: t,
    rightIcon: r,
    children: i,
    iconSpacing: s,
    shouldWrapChildren: l,
  } = e;
  return l
    ? A.jsxs("span", {
        style: { display: "contents" },
        children: [
          t && A.jsx(_a, { marginEnd: s, children: t }),
          i,
          r && A.jsx(_a, { marginStart: s, children: r }),
        ],
      })
    : A.jsxs(A.Fragment, {
        children: [
          t && A.jsx(_a, { marginEnd: s, children: t }),
          i,
          r && A.jsx(_a, { marginStart: s, children: r }),
        ],
      });
}
const vw = cr((e, t) => {
  const { icon: r, children: i, isRound: s, "aria-label": l, ...u } = e,
    d = r || i,
    f = P.isValidElement(d)
      ? P.cloneElement(d, { "aria-hidden": !0, focusable: !1 })
      : null;
  return A.jsx(Hm, {
    px: "0",
    py: "0",
    borderRadius: s ? "full" : void 0,
    ref: t,
    "aria-label": l,
    ...u,
    children: f,
  });
});
vw.displayName = "IconButton";
var jh = { exports: {} },
  Lh,
  T1;
function xj() {
  if (T1) return Lh;
  T1 = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (Lh = e), Lh;
}
var Nh, E1;
function wj() {
  if (E1) return Nh;
  E1 = 1;
  var e = xj();
  function t() {}
  function r() {}
  return (
    (r.resetWarningCache = t),
    (Nh = function () {
      function i(u, d, f, p, m, y) {
        if (y !== e) {
          var b = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((b.name = "Invariant Violation"), b);
        }
      }
      i.isRequired = i;
      function s() {
        return i;
      }
      var l = {
        array: i,
        bigint: i,
        bool: i,
        func: i,
        number: i,
        object: i,
        string: i,
        symbol: i,
        any: i,
        arrayOf: s,
        element: i,
        elementType: i,
        instanceOf: s,
        node: i,
        objectOf: s,
        oneOf: s,
        oneOfType: s,
        shape: s,
        exact: s,
        checkPropTypes: r,
        resetWarningCache: t,
      };
      return (l.PropTypes = l), l;
    }),
    Nh
  );
}
var R1;
function kj() {
  return R1 || ((R1 = 1), (jh.exports = wj()())), jh.exports;
}
var Cj = kj();
const kt = mo(Cj);
function _j(e, t = {}) {
  const { ssr: r = !0, fallback: i } = t,
    { getWindow: s } = B3(),
    l = Array.isArray(e) ? e : [e];
  let u = Array.isArray(i) ? i : [i];
  u = u.filter((p) => p != null);
  const [d, f] = P.useState(() =>
    l.map((p, m) => ({
      media: p,
      matches: r ? !!u[m] : s().matchMedia(p).matches,
    }))
  );
  return (
    P.useEffect(() => {
      const p = s();
      f(l.map((b) => ({ media: b, matches: p.matchMedia(b).matches })));
      const m = l.map((b) => p.matchMedia(b)),
        y = (b) => {
          f((_) =>
            _.slice().map((S) =>
              S.media === b.media ? { ...S, matches: b.matches } : S
            )
          );
        };
      return (
        m.forEach((b) => {
          typeof b.addListener == "function"
            ? b.addListener(y)
            : b.addEventListener("change", y);
        }),
        () => {
          m.forEach((b) => {
            typeof b.removeListener == "function"
              ? b.removeListener(y)
              : b.removeEventListener("change", y);
          });
        }
      );
    }, [s]),
    d.map((p) => p.matches)
  );
}
const bw = (e) =>
  A.jsx(St.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
bw.displayName = "StackItem";
function Pj(e) {
  const { spacing: t, direction: r } = e,
    i = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": i2(r, (s) => i[s]) };
}
const Sw = cr((e, t) => {
  const {
      isInline: r,
      direction: i,
      align: s,
      justify: l,
      spacing: u = "0.5rem",
      wrap: d,
      children: f,
      divider: p,
      className: m,
      shouldWrapChildren: y,
      ...b
    } = e,
    _ = r ? "row" : i ?? "column",
    S = P.useMemo(() => Pj({ spacing: u, direction: _ }), [u, _]),
    w = !!p,
    x = !y && !w,
    T = P.useMemo(() => {
      const z = ZC(f);
      return x
        ? z
        : z.map((W, E) => {
            const I = typeof W.key < "u" ? W.key : E,
              U = E + 1 === z.length,
              le = y ? A.jsx(bw, { children: W }, I) : W;
            if (!w) return le;
            const ce = P.cloneElement(p, { __css: S }),
              ve = U ? null : ce;
            return A.jsxs(P.Fragment, { children: [le, ve] }, I);
          });
    }, [p, S, w, x, y, f]),
    O = In("chakra-stack", m);
  return A.jsx(St.div, {
    ref: t,
    display: "flex",
    alignItems: s,
    justifyContent: l,
    flexDirection: _,
    flexWrap: d,
    gap: w ? void 0 : u,
    className: O,
    ...b,
    children: T,
  });
});
Sw.displayName = "Stack";
const xw = cr((e, t) =>
  A.jsx(Sw, { align: "center", ...e, direction: "column", ref: t })
);
xw.displayName = "VStack";
var Fu = {},
  A1;
function Tj() {
  if (A1) return Fu;
  A1 = 1;
  var e = mw();
  return (Fu.createRoot = e.createRoot), (Fu.hydrateRoot = e.hydrateRoot), Fu;
}
var Ej = Tj();
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ya() {
  return (
    (Ya = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }),
    Ya.apply(this, arguments)
  );
}
var uo;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(uo || (uo = {}));
const $1 = "popstate";
function Rj(e) {
  e === void 0 && (e = {});
  function t(i, s) {
    let { pathname: l, search: u, hash: d } = i.location;
    return Rp(
      "",
      { pathname: l, search: u, hash: d },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function r(i, s) {
    return typeof s == "string" ? s : Ac(s);
  }
  return $j(t, r, null, e);
}
function dt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ww(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Aj() {
  return Math.random().toString(36).substr(2, 8);
}
function O1(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Rp(e, t, r, i) {
  return (
    r === void 0 && (r = null),
    Ya(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? hs(t) : t,
      { state: r, key: (t && t.key) || i || Aj() }
    )
  );
}
function Ac(e) {
  let { pathname: t = "/", search: r = "", hash: i = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (t += i.charAt(0) === "#" ? i : "#" + i),
    t
  );
}
function hs(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let i = e.indexOf("?");
    i >= 0 && ((t.search = e.substr(i)), (e = e.substr(0, i))),
      e && (t.pathname = e);
  }
  return t;
}
function $j(e, t, r, i) {
  i === void 0 && (i = {});
  let { window: s = document.defaultView, v5Compat: l = !1 } = i,
    u = s.history,
    d = uo.Pop,
    f = null,
    p = m();
  p == null && ((p = 0), u.replaceState(Ya({}, u.state, { idx: p }), ""));
  function m() {
    return (u.state || { idx: null }).idx;
  }
  function y() {
    d = uo.Pop;
    let x = m(),
      T = x == null ? null : x - p;
    (p = x), f && f({ action: d, location: w.location, delta: T });
  }
  function b(x, T) {
    d = uo.Push;
    let O = Rp(w.location, x, T);
    p = m() + 1;
    let z = O1(O, p),
      W = w.createHref(O);
    try {
      u.pushState(z, "", W);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      s.location.assign(W);
    }
    l && f && f({ action: d, location: w.location, delta: 1 });
  }
  function _(x, T) {
    d = uo.Replace;
    let O = Rp(w.location, x, T);
    p = m();
    let z = O1(O, p),
      W = w.createHref(O);
    u.replaceState(z, "", W),
      l && f && f({ action: d, location: w.location, delta: 0 });
  }
  function S(x) {
    let T = s.location.origin !== "null" ? s.location.origin : s.location.href,
      O = typeof x == "string" ? x : Ac(x);
    return (
      (O = O.replace(/ $/, "%20")),
      dt(
        T,
        "No window.location.(origin|href) available to create URL for href: " +
          O
      ),
      new URL(O, T)
    );
  }
  let w = {
    get action() {
      return d;
    },
    get location() {
      return e(s, u);
    },
    listen(x) {
      if (f) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener($1, y),
        (f = x),
        () => {
          s.removeEventListener($1, y), (f = null);
        }
      );
    },
    createHref(x) {
      return t(s, x);
    },
    createURL: S,
    encodeLocation(x) {
      let T = S(x);
      return { pathname: T.pathname, search: T.search, hash: T.hash };
    },
    push: b,
    replace: _,
    go(x) {
      return u.go(x);
    },
  };
  return w;
}
var M1;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(M1 || (M1 = {}));
function Oj(e, t, r) {
  return r === void 0 && (r = "/"), Mj(e, t, r, !1);
}
function Mj(e, t, r, i) {
  let s = typeof t == "string" ? hs(t) : t,
    l = qm(s.pathname || "/", r);
  if (l == null) return null;
  let u = kw(e);
  zj(u);
  let d = null;
  for (let f = 0; d == null && f < u.length; ++f) {
    let p = Hj(l);
    d = Uj(u[f], p, i);
  }
  return d;
}
function kw(e, t, r, i) {
  t === void 0 && (t = []), r === void 0 && (r = []), i === void 0 && (i = "");
  let s = (l, u, d) => {
    let f = {
      relativePath: d === void 0 ? l.path || "" : d,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: u,
      route: l,
    };
    f.relativePath.startsWith("/") &&
      (dt(
        f.relativePath.startsWith(i),
        'Absolute route path "' +
          f.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (f.relativePath = f.relativePath.slice(i.length)));
    let p = co([i, f.relativePath]),
      m = r.concat(f);
    l.children &&
      l.children.length > 0 &&
      (dt(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + p + '".')
      ),
      kw(l.children, t, m, p)),
      !(l.path == null && !l.index) &&
        t.push({ path: p, score: Bj(p, l.index), routesMeta: m });
  };
  return (
    e.forEach((l, u) => {
      var d;
      if (l.path === "" || !((d = l.path) != null && d.includes("?"))) s(l, u);
      else for (let f of Cw(l.path)) s(l, u, f);
    }),
    t
  );
}
function Cw(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...i] = t,
    s = r.endsWith("?"),
    l = r.replace(/\?$/, "");
  if (i.length === 0) return s ? [l, ""] : [l];
  let u = Cw(i.join("/")),
    d = [];
  return (
    d.push(...u.map((f) => (f === "" ? l : [l, f].join("/")))),
    s && d.push(...u),
    d.map((f) => (e.startsWith("/") && f === "" ? "/" : f))
  );
}
function zj(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Vj(
          t.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
const jj = /^:[\w-]+$/,
  Lj = 3,
  Nj = 2,
  Dj = 1,
  Ij = 10,
  Fj = -2,
  z1 = (e) => e === "*";
function Bj(e, t) {
  let r = e.split("/"),
    i = r.length;
  return (
    r.some(z1) && (i += Fj),
    t && (i += Nj),
    r
      .filter((s) => !z1(s))
      .reduce((s, l) => s + (jj.test(l) ? Lj : l === "" ? Dj : Ij), i)
  );
}
function Vj(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, s) => i === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Uj(e, t, r) {
  let { routesMeta: i } = e,
    s = {},
    l = "/",
    u = [];
  for (let d = 0; d < i.length; ++d) {
    let f = i[d],
      p = d === i.length - 1,
      m = l === "/" ? t : t.slice(l.length) || "/",
      y = j1(
        { path: f.relativePath, caseSensitive: f.caseSensitive, end: p },
        m
      ),
      b = f.route;
    if (
      (!y &&
        p &&
        r &&
        !i[i.length - 1].route.index &&
        (y = j1(
          { path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 },
          m
        )),
      !y)
    )
      return null;
    Object.assign(s, y.params),
      u.push({
        params: s,
        pathname: co([l, y.pathname]),
        pathnameBase: Yj(co([l, y.pathnameBase])),
        route: b,
      }),
      y.pathnameBase !== "/" && (l = co([l, y.pathnameBase]));
  }
  return u;
}
function j1(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, i] = Wj(e.path, e.caseSensitive, e.end),
    s = t.match(r);
  if (!s) return null;
  let l = s[0],
    u = l.replace(/(.)\/+$/, "$1"),
    d = s.slice(1);
  return {
    params: i.reduce((p, m, y) => {
      let { paramName: b, isOptional: _ } = m;
      if (b === "*") {
        let w = d[y] || "";
        u = l.slice(0, l.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const S = d[y];
      return (
        _ && !S ? (p[b] = void 0) : (p[b] = (S || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: l,
    pathnameBase: u,
    pattern: e,
  };
}
function Wj(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    ww(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let i = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (u, d, f) => (
            i.push({ paramName: d, isOptional: f != null }),
            f ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), i]
  );
}
function Hj(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ww(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function qm(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(r);
  return i && i !== "/" ? null : e.slice(r) || "/";
}
function qj(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: i = "",
    hash: s = "",
  } = typeof e == "string" ? hs(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : Kj(r, t)) : t,
    search: Xj(i),
    hash: Qj(s),
  };
}
function Kj(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Dh(e, t, r, i) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(i) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Gj(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function _w(e, t) {
  let r = Gj(e);
  return t
    ? r.map((i, s) => (s === r.length - 1 ? i.pathname : i.pathnameBase))
    : r.map((i) => i.pathnameBase);
}
function Pw(e, t, r, i) {
  i === void 0 && (i = !1);
  let s;
  typeof e == "string"
    ? (s = hs(e))
    : ((s = Ya({}, e)),
      dt(
        !s.pathname || !s.pathname.includes("?"),
        Dh("?", "pathname", "search", s)
      ),
      dt(
        !s.pathname || !s.pathname.includes("#"),
        Dh("#", "pathname", "hash", s)
      ),
      dt(!s.search || !s.search.includes("#"), Dh("#", "search", "hash", s)));
  let l = e === "" || s.pathname === "",
    u = l ? "/" : s.pathname,
    d;
  if (u == null) d = r;
  else {
    let y = t.length - 1;
    if (!i && u.startsWith("..")) {
      let b = u.split("/");
      for (; b[0] === ".."; ) b.shift(), (y -= 1);
      s.pathname = b.join("/");
    }
    d = y >= 0 ? t[y] : "/";
  }
  let f = qj(s, d),
    p = u && u !== "/" && u.endsWith("/"),
    m = (l || u === ".") && r.endsWith("/");
  return !f.pathname.endsWith("/") && (p || m) && (f.pathname += "/"), f;
}
const co = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Yj = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Xj = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Qj = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Jj(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Tw = ["post", "put", "patch", "delete"];
new Set(Tw);
const Zj = ["get", ...Tw];
new Set(Zj);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xa() {
  return (
    (Xa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }),
    Xa.apply(this, arguments)
  );
}
const Km = P.createContext(null),
  eL = P.createContext(null),
  ti = P.createContext(null),
  Jc = P.createContext(null),
  ni = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ew = P.createContext(null);
function tL(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  al() || dt(!1);
  let { basename: i, navigator: s } = P.useContext(ti),
    { hash: l, pathname: u, search: d } = Aw(e, { relative: r }),
    f = u;
  return (
    i !== "/" && (f = u === "/" ? i : co([i, u])),
    s.createHref({ pathname: f, search: d, hash: l })
  );
}
function al() {
  return P.useContext(Jc) != null;
}
function Zc() {
  return al() || dt(!1), P.useContext(Jc).location;
}
function Rw(e) {
  P.useContext(ti).static || P.useLayoutEffect(e);
}
function nL() {
  let { isDataRoute: e } = P.useContext(ni);
  return e ? mL() : rL();
}
function rL() {
  al() || dt(!1);
  let e = P.useContext(Km),
    { basename: t, future: r, navigator: i } = P.useContext(ti),
    { matches: s } = P.useContext(ni),
    { pathname: l } = Zc(),
    u = JSON.stringify(_w(s, r.v7_relativeSplatPath)),
    d = P.useRef(!1);
  return (
    Rw(() => {
      d.current = !0;
    }),
    P.useCallback(
      function (p, m) {
        if ((m === void 0 && (m = {}), !d.current)) return;
        if (typeof p == "number") {
          i.go(p);
          return;
        }
        let y = Pw(p, JSON.parse(u), l, m.relative === "path");
        e == null &&
          t !== "/" &&
          (y.pathname = y.pathname === "/" ? t : co([t, y.pathname])),
          (m.replace ? i.replace : i.push)(y, m.state, m);
      },
      [t, i, u, l, e]
    )
  );
}
function Aw(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: i } = P.useContext(ti),
    { matches: s } = P.useContext(ni),
    { pathname: l } = Zc(),
    u = JSON.stringify(_w(s, i.v7_relativeSplatPath));
  return P.useMemo(() => Pw(e, JSON.parse(u), l, r === "path"), [e, u, l, r]);
}
function oL(e, t) {
  return iL(e, t);
}
function iL(e, t, r, i) {
  al() || dt(!1);
  let { navigator: s } = P.useContext(ti),
    { matches: l } = P.useContext(ni),
    u = l[l.length - 1],
    d = u ? u.params : {};
  u && u.pathname;
  let f = u ? u.pathnameBase : "/";
  u && u.route;
  let p = Zc(),
    m;
  if (t) {
    var y;
    let x = typeof t == "string" ? hs(t) : t;
    f === "/" || ((y = x.pathname) != null && y.startsWith(f)) || dt(!1),
      (m = x);
  } else m = p;
  let b = m.pathname || "/",
    _ = b;
  if (f !== "/") {
    let x = f.replace(/^\//, "").split("/");
    _ = "/" + b.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let S = Oj(e, { pathname: _ }),
    w = cL(
      S &&
        S.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, d, x.params),
            pathname: co([
              f,
              s.encodeLocation
                ? s.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? f
                : co([
                    f,
                    s.encodeLocation
                      ? s.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      l,
      r,
      i
    );
  return t && w
    ? P.createElement(
        Jc.Provider,
        {
          value: {
            location: Xa(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: uo.Pop,
          },
        },
        w
      )
    : w;
}
function sL() {
  let e = pL(),
    t = Jj(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? P.createElement("pre", { style: s }, r) : null,
    null
  );
}
const aL = P.createElement(sL, null);
class lL extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          ni.Provider,
          { value: this.props.routeContext },
          P.createElement(Ew.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function uL(e) {
  let { routeContext: t, match: r, children: i } = e,
    s = P.useContext(Km);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    P.createElement(ni.Provider, { value: t }, i)
  );
}
function cL(e, t, r, i) {
  var s;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    i === void 0 && (i = null),
    e == null)
  ) {
    var l;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (l = i) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let u = e,
    d = (s = r) == null ? void 0 : s.errors;
  if (d != null) {
    let m = u.findIndex(
      (y) => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0
    );
    m >= 0 || dt(!1), (u = u.slice(0, Math.min(u.length, m + 1)));
  }
  let f = !1,
    p = -1;
  if (r && i && i.v7_partialHydration)
    for (let m = 0; m < u.length; m++) {
      let y = u[m];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (p = m),
        y.route.id)
      ) {
        let { loaderData: b, errors: _ } = r,
          S =
            y.route.loader &&
            b[y.route.id] === void 0 &&
            (!_ || _[y.route.id] === void 0);
        if (y.route.lazy || S) {
          (f = !0), p >= 0 ? (u = u.slice(0, p + 1)) : (u = [u[0]]);
          break;
        }
      }
    }
  return u.reduceRight((m, y, b) => {
    let _,
      S = !1,
      w = null,
      x = null;
    r &&
      ((_ = d && y.route.id ? d[y.route.id] : void 0),
      (w = y.route.errorElement || aL),
      f &&
        (p < 0 && b === 0
          ? ((S = !0), (x = null))
          : p === b &&
            ((S = !0), (x = y.route.hydrateFallbackElement || null))));
    let T = t.concat(u.slice(0, b + 1)),
      O = () => {
        let z;
        return (
          _
            ? (z = w)
            : S
            ? (z = x)
            : y.route.Component
            ? (z = P.createElement(y.route.Component, null))
            : y.route.element
            ? (z = y.route.element)
            : (z = m),
          P.createElement(uL, {
            match: y,
            routeContext: { outlet: m, matches: T, isDataRoute: r != null },
            children: z,
          })
        );
      };
    return r && (y.route.ErrorBoundary || y.route.errorElement || b === 0)
      ? P.createElement(lL, {
          location: r.location,
          revalidation: r.revalidation,
          component: w,
          error: _,
          children: O(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : O();
  }, null);
}
var $w = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })($w || {}),
  $c = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })($c || {});
function dL(e) {
  let t = P.useContext(Km);
  return t || dt(!1), t;
}
function fL(e) {
  let t = P.useContext(eL);
  return t || dt(!1), t;
}
function hL(e) {
  let t = P.useContext(ni);
  return t || dt(!1), t;
}
function Ow(e) {
  let t = hL(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || dt(!1), r.route.id;
}
function pL() {
  var e;
  let t = P.useContext(Ew),
    r = fL($c.UseRouteError),
    i = Ow($c.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[i];
}
function mL() {
  let { router: e } = dL($w.UseNavigateStable),
    t = Ow($c.UseNavigateStable),
    r = P.useRef(!1);
  return (
    Rw(() => {
      r.current = !0;
    }),
    P.useCallback(
      function (s, l) {
        l === void 0 && (l = {}),
          r.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Xa({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
const L1 = {};
function gL(e, t) {
  L1[t] || ((L1[t] = !0), console.warn(t));
}
const N1 = (e, t, r) =>
  gL(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + r + ".")
  );
function yL(e, t) {
  (e != null && e.v7_startTransition) ||
    N1(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      N1(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function Ap(e) {
  dt(!1);
}
function vL(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: i,
    navigationType: s = uo.Pop,
    navigator: l,
    static: u = !1,
    future: d,
  } = e;
  al() && dt(!1);
  let f = t.replace(/^\/*/, "/"),
    p = P.useMemo(
      () => ({
        basename: f,
        navigator: l,
        static: u,
        future: Xa({ v7_relativeSplatPath: !1 }, d),
      }),
      [f, d, l, u]
    );
  typeof i == "string" && (i = hs(i));
  let {
      pathname: m = "/",
      search: y = "",
      hash: b = "",
      state: _ = null,
      key: S = "default",
    } = i,
    w = P.useMemo(() => {
      let x = qm(m, f);
      return x == null
        ? null
        : {
            location: { pathname: x, search: y, hash: b, state: _, key: S },
            navigationType: s,
          };
    }, [f, m, y, b, _, S, s]);
  return w == null
    ? null
    : P.createElement(
        ti.Provider,
        { value: p },
        P.createElement(Jc.Provider, { children: r, value: w })
      );
}
function bL(e) {
  let { children: t, location: r } = e;
  return oL($p(t), r);
}
new Promise(() => {});
function $p(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    P.Children.forEach(e, (i, s) => {
      if (!P.isValidElement(i)) return;
      let l = [...t, s];
      if (i.type === P.Fragment) {
        r.push.apply(r, $p(i.props.children, l));
        return;
      }
      i.type !== Ap && dt(!1), !i.props.index || !i.props.children || dt(!1);
      let u = {
        id: i.props.id || l.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (u.children = $p(i.props.children, l)), r.push(u);
    }),
    r
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Op() {
  return (
    (Op = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }),
    Op.apply(this, arguments)
  );
}
function SL(e, t) {
  if (e == null) return {};
  var r = {},
    i = Object.keys(e),
    s,
    l;
  for (l = 0; l < i.length; l++)
    (s = i[l]), !(t.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
function xL(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function wL(e, t) {
  return e.button === 0 && (!t || t === "_self") && !xL(e);
}
const kL = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  CL = "6";
try {
  window.__reactRouterVersion = CL;
} catch {}
const _L = "startTransition",
  D1 = Xh[_L];
function PL(e) {
  let { basename: t, children: r, future: i, window: s } = e,
    l = P.useRef();
  l.current == null && (l.current = Rj({ window: s, v5Compat: !0 }));
  let u = l.current,
    [d, f] = P.useState({ action: u.action, location: u.location }),
    { v7_startTransition: p } = i || {},
    m = P.useCallback(
      (y) => {
        p && D1 ? D1(() => f(y)) : f(y);
      },
      [f, p]
    );
  return (
    P.useLayoutEffect(() => u.listen(m), [u, m]),
    P.useEffect(() => yL(i), [i]),
    P.createElement(vL, {
      basename: t,
      children: r,
      location: d.location,
      navigationType: d.action,
      navigator: u,
      future: i,
    })
  );
}
const TL =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  EL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rs = P.forwardRef(function (t, r) {
    let {
        onClick: i,
        relative: s,
        reloadDocument: l,
        replace: u,
        state: d,
        target: f,
        to: p,
        preventScrollReset: m,
        viewTransition: y,
      } = t,
      b = SL(t, kL),
      { basename: _ } = P.useContext(ti),
      S,
      w = !1;
    if (typeof p == "string" && EL.test(p) && ((S = p), TL))
      try {
        let z = new URL(window.location.href),
          W = p.startsWith("//") ? new URL(z.protocol + p) : new URL(p),
          E = qm(W.pathname, _);
        W.origin === z.origin && E != null
          ? (p = E + W.search + W.hash)
          : (w = !0);
      } catch {}
    let x = tL(p, { relative: s }),
      T = RL(p, {
        replace: u,
        state: d,
        target: f,
        preventScrollReset: m,
        relative: s,
        viewTransition: y,
      });
    function O(z) {
      i && i(z), z.defaultPrevented || T(z);
    }
    return P.createElement(
      "a",
      Op({}, b, { href: S || x, onClick: w || l ? i : O, ref: r, target: f })
    );
  });
var I1;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(I1 || (I1 = {}));
var F1;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(F1 || (F1 = {}));
function RL(e, t) {
  let {
      target: r,
      replace: i,
      state: s,
      preventScrollReset: l,
      relative: u,
      viewTransition: d,
    } = t === void 0 ? {} : t,
    f = nL(),
    p = Zc(),
    m = Aw(e, { relative: u });
  return P.useCallback(
    (y) => {
      if (wL(y, r)) {
        y.preventDefault();
        let b = i !== void 0 ? i : Ac(p) === Ac(m);
        f(e, {
          replace: b,
          state: s,
          preventScrollReset: l,
          relative: u,
          viewTransition: d,
        });
      }
    },
    [p, f, m, i, s, r, e, l, u, d]
  );
}
var Mw = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  B1 = Dn.createContext && Dn.createContext(Mw),
  AL = ["attr", "size", "title"];
function $L(e, t) {
  if (e == null) return {};
  var r = OL(e, t),
    i,
    s;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (s = 0; s < l.length; s++)
      (i = l[s]),
        !(t.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, i) &&
          (r[i] = e[i]);
  }
  return r;
}
function OL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      if (t.indexOf(i) >= 0) continue;
      r[i] = e[i];
    }
  return r;
}
function Oc() {
  return (
    (Oc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }),
    Oc.apply(this, arguments)
  );
}
function V1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t &&
      (i = i.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, i);
  }
  return r;
}
function Mc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? V1(Object(r), !0).forEach(function (i) {
          ML(e, i, r[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : V1(Object(r)).forEach(function (i) {
          Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
        });
  }
  return e;
}
function ML(e, t, r) {
  return (
    (t = zL(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function zL(e) {
  var t = jL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(e, t || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zw(e) {
  return (
    e &&
    e.map((t, r) =>
      Dn.createElement(t.tag, Mc({ key: r }, t.attr), zw(t.child))
    )
  );
}
function yo(e) {
  return (t) =>
    Dn.createElement(LL, Oc({ attr: Mc({}, e.attr) }, t), zw(e.child));
}
function LL(e) {
  var t = (r) => {
    var { attr: i, size: s, title: l } = e,
      u = $L(e, AL),
      d = s || r.size || "1em",
      f;
    return (
      r.className && (f = r.className),
      e.className && (f = (f ? f + " " : "") + e.className),
      Dn.createElement(
        "svg",
        Oc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          i,
          u,
          {
            className: f,
            style: Mc(Mc({ color: e.color || r.color }, r.style), e.style),
            height: d,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        l && Dn.createElement("title", null, l),
        e.children
      )
    );
  };
  return B1 !== void 0
    ? Dn.createElement(B1.Consumer, null, (r) => t(r))
    : t(Mw);
}
function NL(e) {
  return yo({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "rect",
        attr: { x: "2", y: "6", width: "20", height: "8", rx: "1" },
        child: [],
      },
      { tag: "path", attr: { d: "M17 14v7" }, child: [] },
      { tag: "path", attr: { d: "M7 14v7" }, child: [] },
      { tag: "path", attr: { d: "M17 3v3" }, child: [] },
      { tag: "path", attr: { d: "M7 3v3" }, child: [] },
      { tag: "path", attr: { d: "M10 14 2.3 6.3" }, child: [] },
      { tag: "path", attr: { d: "m14 6 7.7 7.7" }, child: [] },
      { tag: "path", attr: { d: "m8 6 8 8" }, child: [] },
    ],
  })(e);
}
function DL() {
  return A.jsxs(A.Fragment, {
    children: [
      A.jsx(NL, { className: "icon__programming" }),
      A.jsx("p", { children: " En construcción " }),
      A.jsx(rs, {
        to: "/",
        children: A.jsx("button", {
          className: "btn__programming",
          children: " Volver al inicio ",
        }),
      }),
    ],
  });
}
function jw(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: IL } = Object.prototype,
  { getPrototypeOf: Gm } = Object,
  ed = ((e) => (t) => {
    const r = IL.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Fn = (e) => ((e = e.toLowerCase()), (t) => ed(t) === e),
  td = (e) => (t) => typeof t === e,
  { isArray: ps } = Array,
  Qa = td("undefined");
function FL(e) {
  return (
    e !== null &&
    !Qa(e) &&
    e.constructor !== null &&
    !Qa(e.constructor) &&
    on(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Lw = Fn("ArrayBuffer");
function BL(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Lw(e.buffer)),
    t
  );
}
const VL = td("string"),
  on = td("function"),
  Nw = td("number"),
  nd = (e) => e !== null && typeof e == "object",
  UL = (e) => e === !0 || e === !1,
  fc = (e) => {
    if (ed(e) !== "object") return !1;
    const t = Gm(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  WL = Fn("Date"),
  HL = Fn("File"),
  qL = Fn("Blob"),
  KL = Fn("FileList"),
  GL = (e) => nd(e) && on(e.pipe),
  YL = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (on(e.append) &&
          ((t = ed(e)) === "formdata" ||
            (t === "object" &&
              on(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  XL = Fn("URLSearchParams"),
  [QL, JL, ZL, eN] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Fn
  ),
  tN = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ll(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, s;
  if ((typeof e != "object" && (e = [e]), ps(e)))
    for (i = 0, s = e.length; i < s; i++) t.call(null, e[i], i, e);
  else {
    const l = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      u = l.length;
    let d;
    for (i = 0; i < u; i++) (d = l[i]), t.call(null, e[d], d, e);
  }
}
function Dw(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let i = r.length,
    s;
  for (; i-- > 0; ) if (((s = r[i]), t === s.toLowerCase())) return s;
  return null;
}
const Ho =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Iw = (e) => !Qa(e) && e !== Ho;
function Mp() {
  const { caseless: e } = (Iw(this) && this) || {},
    t = {},
    r = (i, s) => {
      const l = (e && Dw(t, s)) || s;
      fc(t[l]) && fc(i)
        ? (t[l] = Mp(t[l], i))
        : fc(i)
        ? (t[l] = Mp({}, i))
        : ps(i)
        ? (t[l] = i.slice())
        : (t[l] = i);
    };
  for (let i = 0, s = arguments.length; i < s; i++)
    arguments[i] && ll(arguments[i], r);
  return t;
}
const nN = (e, t, r, { allOwnKeys: i } = {}) => (
    ll(
      t,
      (s, l) => {
        r && on(s) ? (e[l] = jw(s, r)) : (e[l] = s);
      },
      { allOwnKeys: i }
    ),
    e
  ),
  rN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  oN = (e, t, r, i) => {
    (e.prototype = Object.create(t.prototype, i)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  iN = (e, t, r, i) => {
    let s, l, u;
    const d = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), l = s.length; l-- > 0; )
        (u = s[l]), (!i || i(u, e, t)) && !d[u] && ((t[u] = e[u]), (d[u] = !0));
      e = r !== !1 && Gm(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  sN = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const i = e.indexOf(t, r);
    return i !== -1 && i === r;
  },
  aN = (e) => {
    if (!e) return null;
    if (ps(e)) return e;
    let t = e.length;
    if (!Nw(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  lN = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Gm(Uint8Array)),
  uN = (e, t) => {
    const i = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = i.next()) && !s.done; ) {
      const l = s.value;
      t.call(e, l[0], l[1]);
    }
  },
  cN = (e, t) => {
    let r;
    const i = [];
    for (; (r = e.exec(t)) !== null; ) i.push(r);
    return i;
  },
  dN = Fn("HTMLFormElement"),
  fN = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, i, s) {
      return i.toUpperCase() + s;
    }),
  U1 = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  hN = Fn("RegExp"),
  Fw = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      i = {};
    ll(r, (s, l) => {
      let u;
      (u = t(s, l, e)) !== !1 && (i[l] = u || s);
    }),
      Object.defineProperties(e, i);
  },
  pN = (e) => {
    Fw(e, (t, r) => {
      if (on(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const i = e[r];
      if (on(i)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  mN = (e, t) => {
    const r = {},
      i = (s) => {
        s.forEach((l) => {
          r[l] = !0;
        });
      };
    return ps(e) ? i(e) : i(String(e).split(t)), r;
  },
  gN = () => {},
  yN = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ih = "abcdefghijklmnopqrstuvwxyz",
  W1 = "0123456789",
  Bw = { DIGIT: W1, ALPHA: Ih, ALPHA_DIGIT: Ih + Ih.toUpperCase() + W1 },
  vN = (e = 16, t = Bw.ALPHA_DIGIT) => {
    let r = "";
    const { length: i } = t;
    for (; e--; ) r += t[(Math.random() * i) | 0];
    return r;
  };
function bN(e) {
  return !!(
    e &&
    on(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const SN = (e) => {
    const t = new Array(10),
      r = (i, s) => {
        if (nd(i)) {
          if (t.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            t[s] = i;
            const l = ps(i) ? [] : {};
            return (
              ll(i, (u, d) => {
                const f = r(u, s + 1);
                !Qa(f) && (l[d] = f);
              }),
              (t[s] = void 0),
              l
            );
          }
        }
        return i;
      };
    return r(e, 0);
  },
  xN = Fn("AsyncFunction"),
  wN = (e) => e && (nd(e) || on(e)) && on(e.then) && on(e.catch),
  Vw = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((r, i) => (
          Ho.addEventListener(
            "message",
            ({ source: s, data: l }) => {
              s === Ho && l === r && i.length && i.shift()();
            },
            !1
          ),
          (s) => {
            i.push(s), Ho.postMessage(r, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    on(Ho.postMessage)
  ),
  kN =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ho)
      : (typeof process < "u" && process.nextTick) || Vw,
  V = {
    isArray: ps,
    isArrayBuffer: Lw,
    isBuffer: FL,
    isFormData: YL,
    isArrayBufferView: BL,
    isString: VL,
    isNumber: Nw,
    isBoolean: UL,
    isObject: nd,
    isPlainObject: fc,
    isReadableStream: QL,
    isRequest: JL,
    isResponse: ZL,
    isHeaders: eN,
    isUndefined: Qa,
    isDate: WL,
    isFile: HL,
    isBlob: qL,
    isRegExp: hN,
    isFunction: on,
    isStream: GL,
    isURLSearchParams: XL,
    isTypedArray: lN,
    isFileList: KL,
    forEach: ll,
    merge: Mp,
    extend: nN,
    trim: tN,
    stripBOM: rN,
    inherits: oN,
    toFlatObject: iN,
    kindOf: ed,
    kindOfTest: Fn,
    endsWith: sN,
    toArray: aN,
    forEachEntry: uN,
    matchAll: cN,
    isHTMLForm: dN,
    hasOwnProperty: U1,
    hasOwnProp: U1,
    reduceDescriptors: Fw,
    freezeMethods: pN,
    toObjectSet: mN,
    toCamelCase: fN,
    noop: gN,
    toFiniteNumber: yN,
    findKey: Dw,
    global: Ho,
    isContextDefined: Iw,
    ALPHABET: Bw,
    generateString: vN,
    isSpecCompliantForm: bN,
    toJSONObject: SN,
    isAsyncFn: xN,
    isThenable: wN,
    setImmediate: Vw,
    asap: kN,
  };
function Ce(e, t, r, i, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    i && (this.request = i),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
V.inherits(Ce, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: V.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Uw = Ce.prototype,
  Ww = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Ww[e] = { value: e };
});
Object.defineProperties(Ce, Ww);
Object.defineProperty(Uw, "isAxiosError", { value: !0 });
Ce.from = (e, t, r, i, s, l) => {
  const u = Object.create(Uw);
  return (
    V.toFlatObject(
      e,
      u,
      function (f) {
        return f !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    Ce.call(u, e.message, t, r, i, s),
    (u.cause = e),
    (u.name = e.name),
    l && Object.assign(u, l),
    u
  );
};
const CN = null;
function zp(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function Hw(e) {
  return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function H1(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (s, l) {
          return (s = Hw(s)), !r && l ? "[" + s + "]" : s;
        })
        .join(r ? "." : "")
    : t;
}
function _N(e) {
  return V.isArray(e) && !e.some(zp);
}
const PN = V.toFlatObject(V, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function rd(e, t, r) {
  if (!V.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = V.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, x) {
        return !V.isUndefined(x[w]);
      }
    ));
  const i = r.metaTokens,
    s = r.visitor || m,
    l = r.dots,
    u = r.indexes,
    f = (r.Blob || (typeof Blob < "u" && Blob)) && V.isSpecCompliantForm(t);
  if (!V.isFunction(s)) throw new TypeError("visitor must be a function");
  function p(S) {
    if (S === null) return "";
    if (V.isDate(S)) return S.toISOString();
    if (!f && V.isBlob(S))
      throw new Ce("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(S) || V.isTypedArray(S)
      ? f && typeof Blob == "function"
        ? new Blob([S])
        : Buffer.from(S)
      : S;
  }
  function m(S, w, x) {
    let T = S;
    if (S && !x && typeof S == "object") {
      if (V.endsWith(w, "{}"))
        (w = i ? w : w.slice(0, -2)), (S = JSON.stringify(S));
      else if (
        (V.isArray(S) && _N(S)) ||
        ((V.isFileList(S) || V.endsWith(w, "[]")) && (T = V.toArray(S)))
      )
        return (
          (w = Hw(w)),
          T.forEach(function (z, W) {
            !(V.isUndefined(z) || z === null) &&
              t.append(
                u === !0 ? H1([w], W, l) : u === null ? w : w + "[]",
                p(z)
              );
          }),
          !1
        );
    }
    return zp(S) ? !0 : (t.append(H1(x, w, l), p(S)), !1);
  }
  const y = [],
    b = Object.assign(PN, {
      defaultVisitor: m,
      convertValue: p,
      isVisitable: zp,
    });
  function _(S, w) {
    if (!V.isUndefined(S)) {
      if (y.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      y.push(S),
        V.forEach(S, function (T, O) {
          (!(V.isUndefined(T) || T === null) &&
            s.call(t, T, V.isString(O) ? O.trim() : O, w, b)) === !0 &&
            _(T, w ? w.concat(O) : [O]);
        }),
        y.pop();
    }
  }
  if (!V.isObject(e)) throw new TypeError("data must be an object");
  return _(e), t;
}
function q1(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (i) {
    return t[i];
  });
}
function Ym(e, t) {
  (this._pairs = []), e && rd(e, this, t);
}
const qw = Ym.prototype;
qw.append = function (t, r) {
  this._pairs.push([t, r]);
};
qw.toString = function (t) {
  const r = t
    ? function (i) {
        return t.call(this, i, q1);
      }
    : q1;
  return this._pairs
    .map(function (s) {
      return r(s[0]) + "=" + r(s[1]);
    }, "")
    .join("&");
};
function TN(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Kw(e, t, r) {
  if (!t) return e;
  const i = (r && r.encode) || TN;
  V.isFunction(r) && (r = { serialize: r });
  const s = r && r.serialize;
  let l;
  if (
    (s
      ? (l = s(t, r))
      : (l = V.isURLSearchParams(t) ? t.toString() : new Ym(t, r).toString(i)),
    l)
  ) {
    const u = e.indexOf("#");
    u !== -1 && (e = e.slice(0, u)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class K1 {
  constructor() {
    this.handlers = [];
  }
  use(t, r, i) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    V.forEach(this.handlers, function (i) {
      i !== null && t(i);
    });
  }
}
const Gw = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  EN = typeof URLSearchParams < "u" ? URLSearchParams : Ym,
  RN = typeof FormData < "u" ? FormData : null,
  AN = typeof Blob < "u" ? Blob : null,
  $N = {
    isBrowser: !0,
    classes: { URLSearchParams: EN, FormData: RN, Blob: AN },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Xm = typeof window < "u" && typeof document < "u",
  jp = (typeof navigator == "object" && navigator) || void 0,
  ON =
    Xm &&
    (!jp || ["ReactNative", "NativeScript", "NS"].indexOf(jp.product) < 0),
  MN =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  zN = (Xm && window.location.href) || "http://localhost",
  jN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Xm,
        hasStandardBrowserEnv: ON,
        hasStandardBrowserWebWorkerEnv: MN,
        navigator: jp,
        origin: zN,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jt = { ...jN, ...$N };
function LN(e, t) {
  return rd(
    e,
    new jt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, i, s, l) {
          return jt.isNode && V.isBuffer(r)
            ? (this.append(i, r.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function NN(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function DN(e) {
  const t = {},
    r = Object.keys(e);
  let i;
  const s = r.length;
  let l;
  for (i = 0; i < s; i++) (l = r[i]), (t[l] = e[l]);
  return t;
}
function Yw(e) {
  function t(r, i, s, l) {
    let u = r[l++];
    if (u === "__proto__") return !0;
    const d = Number.isFinite(+u),
      f = l >= r.length;
    return (
      (u = !u && V.isArray(s) ? s.length : u),
      f
        ? (V.hasOwnProp(s, u) ? (s[u] = [s[u], i]) : (s[u] = i), !d)
        : ((!s[u] || !V.isObject(s[u])) && (s[u] = []),
          t(r, i, s[u], l) && V.isArray(s[u]) && (s[u] = DN(s[u])),
          !d)
    );
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const r = {};
    return (
      V.forEachEntry(e, (i, s) => {
        t(NN(i), s, r, 0);
      }),
      r
    );
  }
  return null;
}
function IN(e, t, r) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (0, JSON.stringify)(e);
}
const ul = {
  transitional: Gw,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, r) {
      const i = r.getContentType() || "",
        s = i.indexOf("application/json") > -1,
        l = V.isObject(t);
      if ((l && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t)))
        return s ? JSON.stringify(Yw(t)) : t;
      if (
        V.isArrayBuffer(t) ||
        V.isBuffer(t) ||
        V.isStream(t) ||
        V.isFile(t) ||
        V.isBlob(t) ||
        V.isReadableStream(t)
      )
        return t;
      if (V.isArrayBufferView(t)) return t.buffer;
      if (V.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let d;
      if (l) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return LN(t, this.formSerializer).toString();
        if ((d = V.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return rd(
            d ? { "files[]": t } : t,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return l || s ? (r.setContentType("application/json", !1), IN(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || ul.transitional,
        i = r && r.forcedJSONParsing,
        s = this.responseType === "json";
      if (V.isResponse(t) || V.isReadableStream(t)) return t;
      if (t && V.isString(t) && ((i && !this.responseType) || s)) {
        const u = !(r && r.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (d) {
          if (u)
            throw d.name === "SyntaxError"
              ? Ce.from(d, Ce.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: jt.classes.FormData, Blob: jt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
V.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ul.headers[e] = {};
});
const FN = V.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  BN = (e) => {
    const t = {};
    let r, i, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (u) {
            (s = u.indexOf(":")),
              (r = u.substring(0, s).trim().toLowerCase()),
              (i = u.substring(s + 1).trim()),
              !(!r || (t[r] && FN[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(i)
                    : (t[r] = [i])
                  : (t[r] = t[r] ? t[r] + ", " + i : i));
          }),
      t
    );
  },
  G1 = Symbol("internals");
function ma(e) {
  return e && String(e).trim().toLowerCase();
}
function hc(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(hc) : String(e);
}
function VN(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = r.exec(e)); ) t[i[1]] = i[2];
  return t;
}
const UN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Fh(e, t, r, i, s) {
  if (V.isFunction(i)) return i.call(this, t, r);
  if ((s && (t = r), !!V.isString(t))) {
    if (V.isString(i)) return t.indexOf(i) !== -1;
    if (V.isRegExp(i)) return i.test(t);
  }
}
function WN(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, i) => r.toUpperCase() + i);
}
function HN(e, t) {
  const r = V.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + r, {
      value: function (s, l, u) {
        return this[i].call(this, t, s, l, u);
      },
      configurable: !0,
    });
  });
}
class Yt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, i) {
    const s = this;
    function l(d, f, p) {
      const m = ma(f);
      if (!m) throw new Error("header name must be a non-empty string");
      const y = V.findKey(s, m);
      (!y || s[y] === void 0 || p === !0 || (p === void 0 && s[y] !== !1)) &&
        (s[y || f] = hc(d));
    }
    const u = (d, f) => V.forEach(d, (p, m) => l(p, m, f));
    if (V.isPlainObject(t) || t instanceof this.constructor) u(t, r);
    else if (V.isString(t) && (t = t.trim()) && !UN(t)) u(BN(t), r);
    else if (V.isHeaders(t)) for (const [d, f] of t.entries()) l(f, d, i);
    else t != null && l(r, t, i);
    return this;
  }
  get(t, r) {
    if (((t = ma(t)), t)) {
      const i = V.findKey(this, t);
      if (i) {
        const s = this[i];
        if (!r) return s;
        if (r === !0) return VN(s);
        if (V.isFunction(r)) return r.call(this, s, i);
        if (V.isRegExp(r)) return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = ma(t)), t)) {
      const i = V.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!r || Fh(this, this[i], i, r)));
    }
    return !1;
  }
  delete(t, r) {
    const i = this;
    let s = !1;
    function l(u) {
      if (((u = ma(u)), u)) {
        const d = V.findKey(i, u);
        d && (!r || Fh(i, i[d], d, r)) && (delete i[d], (s = !0));
      }
    }
    return V.isArray(t) ? t.forEach(l) : l(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let i = r.length,
      s = !1;
    for (; i--; ) {
      const l = r[i];
      (!t || Fh(this, this[l], l, t, !0)) && (delete this[l], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const r = this,
      i = {};
    return (
      V.forEach(this, (s, l) => {
        const u = V.findKey(i, l);
        if (u) {
          (r[u] = hc(s)), delete r[l];
          return;
        }
        const d = t ? WN(l) : String(l).trim();
        d !== l && delete r[l], (r[d] = hc(s)), (i[d] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      V.forEach(this, (i, s) => {
        i != null && i !== !1 && (r[s] = t && V.isArray(i) ? i.join(", ") : i);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const i = new this(t);
    return r.forEach((s) => i.set(s)), i;
  }
  static accessor(t) {
    const i = (this[G1] = this[G1] = { accessors: {} }).accessors,
      s = this.prototype;
    function l(u) {
      const d = ma(u);
      i[d] || (HN(s, u), (i[d] = !0));
    }
    return V.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
Yt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
V.reduceDescriptors(Yt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[r] = i;
    },
  };
});
V.freezeMethods(Yt);
function Bh(e, t) {
  const r = this || ul,
    i = t || r,
    s = Yt.from(i.headers);
  let l = i.data;
  return (
    V.forEach(e, function (d) {
      l = d.call(r, l, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    l
  );
}
function Xw(e) {
  return !!(e && e.__CANCEL__);
}
function ms(e, t, r) {
  Ce.call(this, e ?? "canceled", Ce.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
V.inherits(ms, Ce, { __CANCEL__: !0 });
function Qw(e, t, r) {
  const i = r.config.validateStatus;
  !r.status || !i || i(r.status)
    ? e(r)
    : t(
        new Ce(
          "Request failed with status code " + r.status,
          [Ce.ERR_BAD_REQUEST, Ce.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      );
}
function qN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function KN(e, t) {
  e = e || 10;
  const r = new Array(e),
    i = new Array(e);
  let s = 0,
    l = 0,
    u;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const p = Date.now(),
        m = i[l];
      u || (u = p), (r[s] = f), (i[s] = p);
      let y = l,
        b = 0;
      for (; y !== s; ) (b += r[y++]), (y = y % e);
      if (((s = (s + 1) % e), s === l && (l = (l + 1) % e), p - u < t)) return;
      const _ = m && p - m;
      return _ ? Math.round((b * 1e3) / _) : void 0;
    }
  );
}
function GN(e, t) {
  let r = 0,
    i = 1e3 / t,
    s,
    l;
  const u = (p, m = Date.now()) => {
    (r = m), (s = null), l && (clearTimeout(l), (l = null)), e.apply(null, p);
  };
  return [
    (...p) => {
      const m = Date.now(),
        y = m - r;
      y >= i
        ? u(p, m)
        : ((s = p),
          l ||
            (l = setTimeout(() => {
              (l = null), u(s);
            }, i - y)));
    },
    () => s && u(s),
  ];
}
const zc = (e, t, r = 3) => {
    let i = 0;
    const s = KN(50, 250);
    return GN((l) => {
      const u = l.loaded,
        d = l.lengthComputable ? l.total : void 0,
        f = u - i,
        p = s(f),
        m = u <= d;
      i = u;
      const y = {
        loaded: u,
        total: d,
        progress: d ? u / d : void 0,
        bytes: f,
        rate: p || void 0,
        estimated: p && d && m ? (d - u) / p : void 0,
        event: l,
        lengthComputable: d != null,
        [t ? "download" : "upload"]: !0,
      };
      e(y);
    }, r);
  },
  Y1 = (e, t) => {
    const r = e != null;
    return [(i) => t[0]({ lengthComputable: r, total: e, loaded: i }), t[1]];
  },
  X1 =
    (e) =>
    (...t) =>
      V.asap(() => e(...t)),
  YN = jt.hasStandardBrowserEnv
    ? ((e, t) => (r) => (
        (r = new URL(r, jt.origin)),
        e.protocol === r.protocol &&
          e.host === r.host &&
          (t || e.port === r.port)
      ))(
        new URL(jt.origin),
        jt.navigator && /(msie|trident)/i.test(jt.navigator.userAgent)
      )
    : () => !0,
  XN = jt.hasStandardBrowserEnv
    ? {
        write(e, t, r, i, s, l) {
          const u = [e + "=" + encodeURIComponent(t)];
          V.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()),
            V.isString(i) && u.push("path=" + i),
            V.isString(s) && u.push("domain=" + s),
            l === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function QN(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function JN(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Jw(e, t) {
  return e && !QN(t) ? JN(e, t) : t;
}
const Q1 = (e) => (e instanceof Yt ? { ...e } : e);
function Jo(e, t) {
  t = t || {};
  const r = {};
  function i(p, m, y, b) {
    return V.isPlainObject(p) && V.isPlainObject(m)
      ? V.merge.call({ caseless: b }, p, m)
      : V.isPlainObject(m)
      ? V.merge({}, m)
      : V.isArray(m)
      ? m.slice()
      : m;
  }
  function s(p, m, y, b) {
    if (V.isUndefined(m)) {
      if (!V.isUndefined(p)) return i(void 0, p, y, b);
    } else return i(p, m, y, b);
  }
  function l(p, m) {
    if (!V.isUndefined(m)) return i(void 0, m);
  }
  function u(p, m) {
    if (V.isUndefined(m)) {
      if (!V.isUndefined(p)) return i(void 0, p);
    } else return i(void 0, m);
  }
  function d(p, m, y) {
    if (y in t) return i(p, m);
    if (y in e) return i(void 0, p);
  }
  const f = {
    url: l,
    method: l,
    data: l,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: d,
    headers: (p, m, y) => s(Q1(p), Q1(m), y, !0),
  };
  return (
    V.forEach(Object.keys(Object.assign({}, e, t)), function (m) {
      const y = f[m] || s,
        b = y(e[m], t[m], m);
      (V.isUndefined(b) && y !== d) || (r[m] = b);
    }),
    r
  );
}
const Zw = (e) => {
    const t = Jo({}, e);
    let {
      data: r,
      withXSRFToken: i,
      xsrfHeaderName: s,
      xsrfCookieName: l,
      headers: u,
      auth: d,
    } = t;
    (t.headers = u = Yt.from(u)),
      (t.url = Kw(Jw(t.baseURL, t.url), e.params, e.paramsSerializer)),
      d &&
        u.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : "")
            )
        );
    let f;
    if (V.isFormData(r)) {
      if (jt.hasStandardBrowserEnv || jt.hasStandardBrowserWebWorkerEnv)
        u.setContentType(void 0);
      else if ((f = u.getContentType()) !== !1) {
        const [p, ...m] = f
          ? f
              .split(";")
              .map((y) => y.trim())
              .filter(Boolean)
          : [];
        u.setContentType([p || "multipart/form-data", ...m].join("; "));
      }
    }
    if (
      jt.hasStandardBrowserEnv &&
      (i && V.isFunction(i) && (i = i(t)), i || (i !== !1 && YN(t.url)))
    ) {
      const p = s && l && XN.read(l);
      p && u.set(s, p);
    }
    return t;
  },
  ZN = typeof XMLHttpRequest < "u",
  eD =
    ZN &&
    function (e) {
      return new Promise(function (r, i) {
        const s = Zw(e);
        let l = s.data;
        const u = Yt.from(s.headers).normalize();
        let { responseType: d, onUploadProgress: f, onDownloadProgress: p } = s,
          m,
          y,
          b,
          _,
          S;
        function w() {
          _ && _(),
            S && S(),
            s.cancelToken && s.cancelToken.unsubscribe(m),
            s.signal && s.signal.removeEventListener("abort", m);
        }
        let x = new XMLHttpRequest();
        x.open(s.method.toUpperCase(), s.url, !0), (x.timeout = s.timeout);
        function T() {
          if (!x) return;
          const z = Yt.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders()
            ),
            E = {
              data:
                !d || d === "text" || d === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: z,
              config: e,
              request: x,
            };
          Qw(
            function (U) {
              r(U), w();
            },
            function (U) {
              i(U), w();
            },
            E
          ),
            (x = null);
        }
        "onloadend" in x
          ? (x.onloadend = T)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(T);
            }),
          (x.onabort = function () {
            x &&
              (i(new Ce("Request aborted", Ce.ECONNABORTED, e, x)), (x = null));
          }),
          (x.onerror = function () {
            i(new Ce("Network Error", Ce.ERR_NETWORK, e, x)), (x = null);
          }),
          (x.ontimeout = function () {
            let W = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = s.transitional || Gw;
            s.timeoutErrorMessage && (W = s.timeoutErrorMessage),
              i(
                new Ce(
                  W,
                  E.clarifyTimeoutError ? Ce.ETIMEDOUT : Ce.ECONNABORTED,
                  e,
                  x
                )
              ),
              (x = null);
          }),
          l === void 0 && u.setContentType(null),
          "setRequestHeader" in x &&
            V.forEach(u.toJSON(), function (W, E) {
              x.setRequestHeader(E, W);
            }),
          V.isUndefined(s.withCredentials) ||
            (x.withCredentials = !!s.withCredentials),
          d && d !== "json" && (x.responseType = s.responseType),
          p && (([b, S] = zc(p, !0)), x.addEventListener("progress", b)),
          f &&
            x.upload &&
            (([y, _] = zc(f)),
            x.upload.addEventListener("progress", y),
            x.upload.addEventListener("loadend", _)),
          (s.cancelToken || s.signal) &&
            ((m = (z) => {
              x &&
                (i(!z || z.type ? new ms(null, e, x) : z),
                x.abort(),
                (x = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(m),
            s.signal &&
              (s.signal.aborted ? m() : s.signal.addEventListener("abort", m)));
        const O = qN(s.url);
        if (O && jt.protocols.indexOf(O) === -1) {
          i(new Ce("Unsupported protocol " + O + ":", Ce.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(l || null);
      });
    },
  tD = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let i = new AbortController(),
        s;
      const l = function (p) {
        if (!s) {
          (s = !0), d();
          const m = p instanceof Error ? p : this.reason;
          i.abort(
            m instanceof Ce ? m : new ms(m instanceof Error ? m.message : m)
          );
        }
      };
      let u =
        t &&
        setTimeout(() => {
          (u = null), l(new Ce(`timeout ${t} of ms exceeded`, Ce.ETIMEDOUT));
        }, t);
      const d = () => {
        e &&
          (u && clearTimeout(u),
          (u = null),
          e.forEach((p) => {
            p.unsubscribe
              ? p.unsubscribe(l)
              : p.removeEventListener("abort", l);
          }),
          (e = null));
      };
      e.forEach((p) => p.addEventListener("abort", l));
      const { signal: f } = i;
      return (f.unsubscribe = () => V.asap(d)), f;
    }
  },
  nD = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let i = 0,
      s;
    for (; i < r; ) (s = i + t), yield e.slice(i, s), (i = s);
  },
  rD = async function* (e, t) {
    for await (const r of oD(e)) yield* nD(r, t);
  },
  oD = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: r, value: i } = await t.read();
        if (r) break;
        yield i;
      }
    } finally {
      await t.cancel();
    }
  },
  J1 = (e, t, r, i) => {
    const s = rD(e, t);
    let l = 0,
      u,
      d = (f) => {
        u || ((u = !0), i && i(f));
      };
    return new ReadableStream(
      {
        async pull(f) {
          try {
            const { done: p, value: m } = await s.next();
            if (p) {
              d(), f.close();
              return;
            }
            let y = m.byteLength;
            if (r) {
              let b = (l += y);
              r(b);
            }
            f.enqueue(new Uint8Array(m));
          } catch (p) {
            throw (d(p), p);
          }
        },
        cancel(f) {
          return d(f), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  od =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  ek = od && typeof ReadableStream == "function",
  iD =
    od &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  tk = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  sD =
    ek &&
    tk(() => {
      let e = !1;
      const t = new Request(jt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Z1 = 64 * 1024,
  Lp = ek && tk(() => V.isReadableStream(new Response("").body)),
  jc = { stream: Lp && ((e) => e.body) };
od &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !jc[t] &&
        (jc[t] = V.isFunction(e[t])
          ? (r) => r[t]()
          : (r, i) => {
              throw new Ce(
                `Response type '${t}' is not supported`,
                Ce.ERR_NOT_SUPPORT,
                i
              );
            });
    });
  })(new Response());
const aD = async (e) => {
    if (e == null) return 0;
    if (V.isBlob(e)) return e.size;
    if (V.isSpecCompliantForm(e))
      return (
        await new Request(jt.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (V.isArrayBufferView(e) || V.isArrayBuffer(e)) return e.byteLength;
    if ((V.isURLSearchParams(e) && (e = e + ""), V.isString(e)))
      return (await iD(e)).byteLength;
  },
  lD = async (e, t) => {
    const r = V.toFiniteNumber(e.getContentLength());
    return r ?? aD(t);
  },
  uD =
    od &&
    (async (e) => {
      let {
        url: t,
        method: r,
        data: i,
        signal: s,
        cancelToken: l,
        timeout: u,
        onDownloadProgress: d,
        onUploadProgress: f,
        responseType: p,
        headers: m,
        withCredentials: y = "same-origin",
        fetchOptions: b,
      } = Zw(e);
      p = p ? (p + "").toLowerCase() : "text";
      let _ = tD([s, l && l.toAbortSignal()], u),
        S;
      const w =
        _ &&
        _.unsubscribe &&
        (() => {
          _.unsubscribe();
        });
      let x;
      try {
        if (
          f &&
          sD &&
          r !== "get" &&
          r !== "head" &&
          (x = await lD(m, i)) !== 0
        ) {
          let E = new Request(t, { method: "POST", body: i, duplex: "half" }),
            I;
          if (
            (V.isFormData(i) &&
              (I = E.headers.get("content-type")) &&
              m.setContentType(I),
            E.body)
          ) {
            const [U, Y] = Y1(x, zc(X1(f)));
            i = J1(E.body, Z1, U, Y);
          }
        }
        V.isString(y) || (y = y ? "include" : "omit");
        const T = "credentials" in Request.prototype;
        S = new Request(t, {
          ...b,
          signal: _,
          method: r.toUpperCase(),
          headers: m.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: T ? y : void 0,
        });
        let O = await fetch(S);
        const z = Lp && (p === "stream" || p === "response");
        if (Lp && (d || (z && w))) {
          const E = {};
          ["status", "statusText", "headers"].forEach((le) => {
            E[le] = O[le];
          });
          const I = V.toFiniteNumber(O.headers.get("content-length")),
            [U, Y] = (d && Y1(I, zc(X1(d), !0))) || [];
          O = new Response(
            J1(O.body, Z1, U, () => {
              Y && Y(), w && w();
            }),
            E
          );
        }
        p = p || "text";
        let W = await jc[V.findKey(jc, p) || "text"](O, e);
        return (
          !z && w && w(),
          await new Promise((E, I) => {
            Qw(E, I, {
              data: W,
              headers: Yt.from(O.headers),
              status: O.status,
              statusText: O.statusText,
              config: e,
              request: S,
            });
          })
        );
      } catch (T) {
        throw (
          (w && w(),
          T && T.name === "TypeError" && /fetch/i.test(T.message)
            ? Object.assign(new Ce("Network Error", Ce.ERR_NETWORK, e, S), {
                cause: T.cause || T,
              })
            : Ce.from(T, T && T.code, e, S))
        );
      }
    }),
  Np = { http: CN, xhr: eD, fetch: uD };
V.forEach(Np, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const eb = (e) => `- ${e}`,
  cD = (e) => V.isFunction(e) || e === null || e === !1,
  nk = {
    getAdapter: (e) => {
      e = V.isArray(e) ? e : [e];
      const { length: t } = e;
      let r, i;
      const s = {};
      for (let l = 0; l < t; l++) {
        r = e[l];
        let u;
        if (
          ((i = r),
          !cD(r) && ((i = Np[(u = String(r)).toLowerCase()]), i === void 0))
        )
          throw new Ce(`Unknown adapter '${u}'`);
        if (i) break;
        s[u || "#" + l] = i;
      }
      if (!i) {
        const l = Object.entries(s).map(
          ([d, f]) =>
            `adapter ${d} ` +
            (f === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let u = t
          ? l.length > 1
            ? `since :
` +
              l.map(eb).join(`
`)
            : " " + eb(l[0])
          : "as no adapter specified";
        throw new Ce(
          "There is no suitable adapter to dispatch the request " + u,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: Np,
  };
function Vh(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ms(null, e);
}
function tb(e) {
  return (
    Vh(e),
    (e.headers = Yt.from(e.headers)),
    (e.data = Bh.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    nk
      .getAdapter(e.adapter || ul.adapter)(e)
      .then(
        function (i) {
          return (
            Vh(e),
            (i.data = Bh.call(e, e.transformResponse, i)),
            (i.headers = Yt.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            Xw(i) ||
              (Vh(e),
              i &&
                i.response &&
                ((i.response.data = Bh.call(
                  e,
                  e.transformResponse,
                  i.response
                )),
                (i.response.headers = Yt.from(i.response.headers)))),
            Promise.reject(i)
          );
        }
      )
  );
}
const rk = "1.7.9",
  id = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    id[e] = function (i) {
      return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const nb = {};
id.transitional = function (t, r, i) {
  function s(l, u) {
    return (
      "[Axios v" +
      rk +
      "] Transitional option '" +
      l +
      "'" +
      u +
      (i ? ". " + i : "")
    );
  }
  return (l, u, d) => {
    if (t === !1)
      throw new Ce(
        s(u, " has been removed" + (r ? " in " + r : "")),
        Ce.ERR_DEPRECATED
      );
    return (
      r &&
        !nb[u] &&
        ((nb[u] = !0),
        console.warn(
          s(
            u,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      t ? t(l, u, d) : !0
    );
  };
};
id.spelling = function (t) {
  return (r, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0);
};
function dD(e, t, r) {
  if (typeof e != "object")
    throw new Ce("options must be an object", Ce.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let s = i.length;
  for (; s-- > 0; ) {
    const l = i[s],
      u = t[l];
    if (u) {
      const d = e[l],
        f = d === void 0 || u(d, l, e);
      if (f !== !0)
        throw new Ce("option " + l + " must be " + f, Ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new Ce("Unknown option " + l, Ce.ERR_BAD_OPTION);
  }
}
const pc = { assertOptions: dD, validators: id },
  Zn = pc.validators;
class Xo {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new K1(), response: new K1() });
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (i) {
      if (i instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const l = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? l &&
              !String(i.stack).endsWith(l.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + l)
            : (i.stack = l);
        } catch {}
      }
      throw i;
    }
  }
  _request(t, r) {
    typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = Jo(this.defaults, r));
    const { transitional: i, paramsSerializer: s, headers: l } = r;
    i !== void 0 &&
      pc.assertOptions(
        i,
        {
          silentJSONParsing: Zn.transitional(Zn.boolean),
          forcedJSONParsing: Zn.transitional(Zn.boolean),
          clarifyTimeoutError: Zn.transitional(Zn.boolean),
        },
        !1
      ),
      s != null &&
        (V.isFunction(s)
          ? (r.paramsSerializer = { serialize: s })
          : pc.assertOptions(
              s,
              { encode: Zn.function, serialize: Zn.function },
              !0
            )),
      pc.assertOptions(
        r,
        {
          baseUrl: Zn.spelling("baseURL"),
          withXsrfToken: Zn.spelling("withXSRFToken"),
        },
        !0
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let u = l && V.merge(l.common, l[r.method]);
    l &&
      V.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (S) => {
          delete l[S];
        }
      ),
      (r.headers = Yt.concat(u, l));
    const d = [];
    let f = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(r) === !1) ||
        ((f = f && w.synchronous), d.unshift(w.fulfilled, w.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function (w) {
      p.push(w.fulfilled, w.rejected);
    });
    let m,
      y = 0,
      b;
    if (!f) {
      const S = [tb.bind(this), void 0];
      for (
        S.unshift.apply(S, d),
          S.push.apply(S, p),
          b = S.length,
          m = Promise.resolve(r);
        y < b;

      )
        m = m.then(S[y++], S[y++]);
      return m;
    }
    b = d.length;
    let _ = r;
    for (y = 0; y < b; ) {
      const S = d[y++],
        w = d[y++];
      try {
        _ = S(_);
      } catch (x) {
        w.call(this, x);
        break;
      }
    }
    try {
      m = tb.call(this, _);
    } catch (S) {
      return Promise.reject(S);
    }
    for (y = 0, b = p.length; y < b; ) m = m.then(p[y++], p[y++]);
    return m;
  }
  getUri(t) {
    t = Jo(this.defaults, t);
    const r = Jw(t.baseURL, t.url);
    return Kw(r, t.params, t.paramsSerializer);
  }
}
V.forEach(["delete", "get", "head", "options"], function (t) {
  Xo.prototype[t] = function (r, i) {
    return this.request(
      Jo(i || {}, { method: t, url: r, data: (i || {}).data })
    );
  };
});
V.forEach(["post", "put", "patch"], function (t) {
  function r(i) {
    return function (l, u, d) {
      return this.request(
        Jo(d || {}, {
          method: t,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: u,
        })
      );
    };
  }
  (Xo.prototype[t] = r()), (Xo.prototype[t + "Form"] = r(!0));
});
class Qm {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (l) {
      r = l;
    });
    const i = this;
    this.promise.then((s) => {
      if (!i._listeners) return;
      let l = i._listeners.length;
      for (; l-- > 0; ) i._listeners[l](s);
      i._listeners = null;
    }),
      (this.promise.then = (s) => {
        let l;
        const u = new Promise((d) => {
          i.subscribe(d), (l = d);
        }).then(s);
        return (
          (u.cancel = function () {
            i.unsubscribe(l);
          }),
          u
        );
      }),
      t(function (l, u, d) {
        i.reason || ((i.reason = new ms(l, u, d)), r(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      r = (i) => {
        t.abort(i);
      };
    return (
      this.subscribe(r),
      (t.signal.unsubscribe = () => this.unsubscribe(r)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Qm(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function fD(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function hD(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const Dp = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Dp).forEach(([e, t]) => {
  Dp[t] = e;
});
function ok(e) {
  const t = new Xo(e),
    r = jw(Xo.prototype.request, t);
  return (
    V.extend(r, Xo.prototype, t, { allOwnKeys: !0 }),
    V.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (s) {
      return ok(Jo(e, s));
    }),
    r
  );
}
const ft = ok(ul);
ft.Axios = Xo;
ft.CanceledError = ms;
ft.CancelToken = Qm;
ft.isCancel = Xw;
ft.VERSION = rk;
ft.toFormData = rd;
ft.AxiosError = Ce;
ft.Cancel = ft.CanceledError;
ft.all = function (t) {
  return Promise.all(t);
};
ft.spread = fD;
ft.isAxiosError = hD;
ft.mergeConfig = Jo;
ft.AxiosHeaders = Yt;
ft.formToJSON = (e) => Yw(V.isHTMLForm(e) ? new FormData(e) : e);
ft.getAdapter = nk.getAdapter;
ft.HttpStatusCode = Dp;
ft.default = ft;
async function pD() {
  try {
    return await (
      await ft.get("https://matias-romoli.onrender.com/api")
    ).data;
  } catch (e) {
    return console.error("Error al obtener las publicaciones:", e), [];
  }
}
var Uh, rb;
function mD() {
  return (
    rb ||
      ((rb = 1),
      (Uh = function e(t, r) {
        if (t === r) return !0;
        if (t && r && typeof t == "object" && typeof r == "object") {
          if (t.constructor !== r.constructor) return !1;
          var i, s, l;
          if (Array.isArray(t)) {
            if (((i = t.length), i != r.length)) return !1;
            for (s = i; s-- !== 0; ) if (!e(t[s], r[s])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if (
            ((l = Object.keys(t)), (i = l.length), i !== Object.keys(r).length)
          )
            return !1;
          for (s = i; s-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(r, l[s])) return !1;
          for (s = i; s-- !== 0; ) {
            var u = l[s];
            if (!e(t[u], r[u])) return !1;
          }
          return !0;
        }
        return t !== t && r !== r;
      })),
    Uh
  );
}
var gD = mD();
const yD = mo(gD);
var Bu = { exports: {} },
  Wh,
  ob;
function vD() {
  if (ob) return Wh;
  ob = 1;
  var e;
  /**
   * @link https://github.com/gajus/sister for the canonical source repository
   * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
   */ return (
    (e = function () {
      var t = {},
        r = {};
      return (
        (t.on = function (i, s) {
          var l = { name: i, handler: s };
          return (r[i] = r[i] || []), r[i].unshift(l), l;
        }),
        (t.off = function (i) {
          var s = r[i.name].indexOf(i);
          s !== -1 && r[i.name].splice(s, 1);
        }),
        (t.trigger = function (i, s) {
          var l = r[i],
            u;
          if (l) for (u = l.length; u--; ) l[u].handler(s);
        }),
        t
      );
    }),
    (Wh = e),
    Wh
  );
}
var Vu = { exports: {} },
  Hh,
  ib;
function bD() {
  if (ib) return Hh;
  (ib = 1),
    (Hh = function (s, l, u) {
      var d = document.head || document.getElementsByTagName("head")[0],
        f = document.createElement("script");
      typeof l == "function" && ((u = l), (l = {})),
        (l = l || {}),
        (u = u || function () {}),
        (f.type = l.type || "text/javascript"),
        (f.charset = l.charset || "utf8"),
        (f.async = "async" in l ? !!l.async : !0),
        (f.src = s),
        l.attrs && e(f, l.attrs),
        l.text && (f.text = "" + l.text);
      var p = "onload" in f ? t : r;
      p(f, u), f.onload || t(f, u), d.appendChild(f);
    });
  function e(i, s) {
    for (var l in s) i.setAttribute(l, s[l]);
  }
  function t(i, s) {
    (i.onload = function () {
      (this.onerror = this.onload = null), s(null, i);
    }),
      (i.onerror = function () {
        (this.onerror = this.onload = null),
          s(new Error("Failed to load " + this.src), i);
      });
  }
  function r(i, s) {
    i.onreadystatechange = function () {
      (this.readyState != "complete" && this.readyState != "loaded") ||
        ((this.onreadystatechange = null), s(null, i));
    };
  }
  return Hh;
}
var sb;
function SD() {
  return (
    sb ||
      ((sb = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = bD(),
          i = s(r);
        function s(l) {
          return l && l.__esModule ? l : { default: l };
        }
        (t.default = function (l) {
          var u = new Promise(function (d) {
            if (
              window.YT &&
              window.YT.Player &&
              window.YT.Player instanceof Function
            ) {
              d(window.YT);
              return;
            } else {
              var f = window.location.protocol === "http:" ? "http:" : "https:";
              (0, i.default)(f + "//www.youtube.com/iframe_api", function (m) {
                m && l.trigger("error", m);
              });
            }
            var p = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function () {
              p && p(), d(window.YT);
            };
          });
          return u;
        }),
          (e.exports = t.default);
      })(Vu, Vu.exports)),
    Vu.exports
  );
}
var Uu = { exports: {} },
  Wu = { exports: {} },
  Hu = { exports: {} },
  qh,
  ab;
function xD() {
  if (ab) return qh;
  ab = 1;
  var e = 1e3,
    t = e * 60,
    r = t * 60,
    i = r * 24,
    s = i * 365.25;
  qh = function (p, m) {
    m = m || {};
    var y = typeof p;
    if (y === "string" && p.length > 0) return l(p);
    if (y === "number" && isNaN(p) === !1) return m.long ? d(p) : u(p);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(p)
    );
  };
  function l(p) {
    if (((p = String(p)), !(p.length > 100))) {
      var m =
        /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
          p
        );
      if (m) {
        var y = parseFloat(m[1]),
          b = (m[2] || "ms").toLowerCase();
        switch (b) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * s;
          case "days":
          case "day":
          case "d":
            return y * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return y * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return y * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return y * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return y;
          default:
            return;
        }
      }
    }
  }
  function u(p) {
    return p >= i
      ? Math.round(p / i) + "d"
      : p >= r
      ? Math.round(p / r) + "h"
      : p >= t
      ? Math.round(p / t) + "m"
      : p >= e
      ? Math.round(p / e) + "s"
      : p + "ms";
  }
  function d(p) {
    return (
      f(p, i, "day") ||
      f(p, r, "hour") ||
      f(p, t, "minute") ||
      f(p, e, "second") ||
      p + " ms"
    );
  }
  function f(p, m, y) {
    if (!(p < m))
      return p < m * 1.5
        ? Math.floor(p / m) + " " + y
        : Math.ceil(p / m) + " " + y + "s";
  }
  return qh;
}
var lb;
function wD() {
  return (
    lb ||
      ((lb = 1),
      (function (e, t) {
        (t = e.exports = s.debug = s.default = s),
          (t.coerce = f),
          (t.disable = u),
          (t.enable = l),
          (t.enabled = d),
          (t.humanize = xD()),
          (t.names = []),
          (t.skips = []),
          (t.formatters = {});
        var r;
        function i(p) {
          var m = 0,
            y;
          for (y in p) (m = (m << 5) - m + p.charCodeAt(y)), (m |= 0);
          return t.colors[Math.abs(m) % t.colors.length];
        }
        function s(p) {
          function m() {
            if (m.enabled) {
              var y = m,
                b = +new Date(),
                _ = b - (r || b);
              (y.diff = _), (y.prev = r), (y.curr = b), (r = b);
              for (
                var S = new Array(arguments.length), w = 0;
                w < S.length;
                w++
              )
                S[w] = arguments[w];
              (S[0] = t.coerce(S[0])),
                typeof S[0] != "string" && S.unshift("%O");
              var x = 0;
              (S[0] = S[0].replace(/%([a-zA-Z%])/g, function (O, z) {
                if (O === "%%") return O;
                x++;
                var W = t.formatters[z];
                if (typeof W == "function") {
                  var E = S[x];
                  (O = W.call(y, E)), S.splice(x, 1), x--;
                }
                return O;
              })),
                t.formatArgs.call(y, S);
              var T = m.log || t.log || console.log.bind(console);
              T.apply(y, S);
            }
          }
          return (
            (m.namespace = p),
            (m.enabled = t.enabled(p)),
            (m.useColors = t.useColors()),
            (m.color = i(p)),
            typeof t.init == "function" && t.init(m),
            m
          );
        }
        function l(p) {
          t.save(p), (t.names = []), (t.skips = []);
          for (
            var m = (typeof p == "string" ? p : "").split(/[\s,]+/),
              y = m.length,
              b = 0;
            b < y;
            b++
          )
            m[b] &&
              ((p = m[b].replace(/\*/g, ".*?")),
              p[0] === "-"
                ? t.skips.push(new RegExp("^" + p.substr(1) + "$"))
                : t.names.push(new RegExp("^" + p + "$")));
        }
        function u() {
          t.enable("");
        }
        function d(p) {
          var m, y;
          for (m = 0, y = t.skips.length; m < y; m++)
            if (t.skips[m].test(p)) return !1;
          for (m = 0, y = t.names.length; m < y; m++)
            if (t.names[m].test(p)) return !0;
          return !1;
        }
        function f(p) {
          return p instanceof Error ? p.stack || p.message : p;
        }
      })(Hu, Hu.exports)),
    Hu.exports
  );
}
var ub;
function kD() {
  return (
    ub ||
      ((ub = 1),
      (function (e, t) {
        var r = {};
        (t = e.exports = wD()),
          (t.log = l),
          (t.formatArgs = s),
          (t.save = u),
          (t.load = d),
          (t.useColors = i),
          (t.storage =
            typeof chrome < "u" && typeof chrome.storage < "u"
              ? chrome.storage.local
              : f()),
          (t.colors = [
            "lightseagreen",
            "forestgreen",
            "goldenrod",
            "dodgerblue",
            "darkorchid",
            "crimson",
          ]);
        function i() {
          return typeof window < "u" &&
            window.process &&
            window.process.type === "renderer"
            ? !0
            : (typeof document < "u" &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                (typeof window < "u" &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                (typeof navigator < "u" &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                (typeof navigator < "u" &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/));
        }
        t.formatters.j = function (p) {
          try {
            return JSON.stringify(p);
          } catch (m) {
            return "[UnexpectedJSONParseError]: " + m.message;
          }
        };
        function s(p) {
          var m = this.useColors;
          if (
            ((p[0] =
              (m ? "%c" : "") +
              this.namespace +
              (m ? " %c" : " ") +
              p[0] +
              (m ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            !!m)
          ) {
            var y = "color: " + this.color;
            p.splice(1, 0, y, "color: inherit");
            var b = 0,
              _ = 0;
            p[0].replace(/%[a-zA-Z%]/g, function (S) {
              S !== "%%" && (b++, S === "%c" && (_ = b));
            }),
              p.splice(_, 0, y);
          }
        }
        function l() {
          return (
            typeof console == "object" &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }
        function u(p) {
          try {
            p == null ? t.storage.removeItem("debug") : (t.storage.debug = p);
          } catch {}
        }
        function d() {
          var p;
          try {
            p = t.storage.debug;
          } catch {}
          return (
            !p && typeof process < "u" && "env" in process && (p = r.DEBUG), p
          );
        }
        t.enable(d());
        function f() {
          try {
            return window.localStorage;
          } catch {}
        }
      })(Wu, Wu.exports)),
    Wu.exports
  );
}
var qu = { exports: {} },
  cb;
function CD() {
  return (
    cb ||
      ((cb = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = [
            "cueVideoById",
            "loadVideoById",
            "cueVideoByUrl",
            "loadVideoByUrl",
            "playVideo",
            "pauseVideo",
            "stopVideo",
            "getVideoLoadedFraction",
            "cuePlaylist",
            "loadPlaylist",
            "nextVideo",
            "previousVideo",
            "playVideoAt",
            "setShuffle",
            "setLoop",
            "getPlaylist",
            "getPlaylistIndex",
            "setOption",
            "mute",
            "unMute",
            "isMuted",
            "setVolume",
            "getVolume",
            "seekTo",
            "getPlayerState",
            "getPlaybackRate",
            "setPlaybackRate",
            "getAvailablePlaybackRates",
            "getPlaybackQuality",
            "setPlaybackQuality",
            "getAvailableQualityLevels",
            "getCurrentTime",
            "getDuration",
            "removeEventListener",
            "getVideoUrl",
            "getVideoEmbedCode",
            "getOptions",
            "getOption",
            "addEventListener",
            "destroy",
            "setSize",
            "getIframe",
          ]),
          (e.exports = t.default);
      })(qu, qu.exports)),
    qu.exports
  );
}
var Ku = { exports: {} },
  db;
function _D() {
  return (
    db ||
      ((db = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = [
            "ready",
            "stateChange",
            "playbackQualityChange",
            "playbackRateChange",
            "error",
            "apiChange",
            "volumeChange",
          ]),
          (e.exports = t.default);
      })(Ku, Ku.exports)),
    Ku.exports
  );
}
var Gu = { exports: {} },
  Yu = { exports: {} },
  fb;
function PD() {
  return (
    fb ||
      ((fb = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            BUFFERING: 3,
            ENDED: 0,
            PAUSED: 2,
            PLAYING: 1,
            UNSTARTED: -1,
            VIDEO_CUED: 5,
          }),
          (e.exports = t.default);
      })(Yu, Yu.exports)),
    Yu.exports
  );
}
var hb;
function TD() {
  return (
    hb ||
      ((hb = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = PD(),
          i = s(r);
        function s(l) {
          return l && l.__esModule ? l : { default: l };
        }
        (t.default = {
          pauseVideo: {
            acceptableStates: [i.default.ENDED, i.default.PAUSED],
            stateChangeRequired: !1,
          },
          playVideo: {
            acceptableStates: [i.default.ENDED, i.default.PLAYING],
            stateChangeRequired: !1,
          },
          seekTo: {
            acceptableStates: [
              i.default.ENDED,
              i.default.PLAYING,
              i.default.PAUSED,
            ],
            stateChangeRequired: !0,
            timeout: 3e3,
          },
        }),
          (e.exports = t.default);
      })(Gu, Gu.exports)),
    Gu.exports
  );
}
var pb;
function ED() {
  return (
    pb ||
      ((pb = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = kD(),
          i = m(r),
          s = CD(),
          l = m(s),
          u = _D(),
          d = m(u),
          f = TD(),
          p = m(f);
        function m(_) {
          return _ && _.__esModule ? _ : { default: _ };
        }
        var y = (0, i.default)("youtube-player"),
          b = {};
        (b.proxyEvents = function (_) {
          var S = {},
            w = function (U) {
              var Y = "on" + U.slice(0, 1).toUpperCase() + U.slice(1);
              S[Y] = function (le) {
                y('event "%s"', Y, le), _.trigger(U, le);
              };
            },
            x = !0,
            T = !1,
            O = void 0;
          try {
            for (
              var z = d.default[Symbol.iterator](), W;
              !(x = (W = z.next()).done);
              x = !0
            ) {
              var E = W.value;
              w(E);
            }
          } catch (I) {
            (T = !0), (O = I);
          } finally {
            try {
              !x && z.return && z.return();
            } finally {
              if (T) throw O;
            }
          }
          return S;
        }),
          (b.promisifyPlayer = function (_) {
            var S =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              w = {},
              x = function (Y) {
                S && p.default[Y]
                  ? (w[Y] = function () {
                      for (
                        var le = arguments.length, ce = Array(le), ve = 0;
                        ve < le;
                        ve++
                      )
                        ce[ve] = arguments[ve];
                      return _.then(function (be) {
                        var Se = p.default[Y],
                          $e = be.getPlayerState(),
                          Ke = be[Y].apply(be, ce);
                        return Se.stateChangeRequired ||
                          (Array.isArray(Se.acceptableStates) &&
                            Se.acceptableStates.indexOf($e) === -1)
                          ? new Promise(function (Be) {
                              var de = function X() {
                                var ie = be.getPlayerState(),
                                  J = void 0;
                                typeof Se.timeout == "number" &&
                                  (J = setTimeout(function () {
                                    be.removeEventListener("onStateChange", X),
                                      Be();
                                  }, Se.timeout)),
                                  Array.isArray(Se.acceptableStates) &&
                                    Se.acceptableStates.indexOf(ie) !== -1 &&
                                    (be.removeEventListener("onStateChange", X),
                                    clearTimeout(J),
                                    Be());
                              };
                              be.addEventListener("onStateChange", de);
                            }).then(function () {
                              return Ke;
                            })
                          : Ke;
                      });
                    })
                  : (w[Y] = function () {
                      for (
                        var le = arguments.length, ce = Array(le), ve = 0;
                        ve < le;
                        ve++
                      )
                        ce[ve] = arguments[ve];
                      return _.then(function (be) {
                        return be[Y].apply(be, ce);
                      });
                    });
              },
              T = !0,
              O = !1,
              z = void 0;
            try {
              for (
                var W = l.default[Symbol.iterator](), E;
                !(T = (E = W.next()).done);
                T = !0
              ) {
                var I = E.value;
                x(I);
              }
            } catch (U) {
              (O = !0), (z = U);
            } finally {
              try {
                !T && W.return && W.return();
              } finally {
                if (O) throw z;
              }
            }
            return w;
          }),
          (t.default = b),
          (e.exports = t.default);
      })(Uu, Uu.exports)),
    Uu.exports
  );
}
var mb;
function RD() {
  return (
    mb ||
      ((mb = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (y) {
                  return typeof y;
                }
              : function (y) {
                  return y &&
                    typeof Symbol == "function" &&
                    y.constructor === Symbol &&
                    y !== Symbol.prototype
                    ? "symbol"
                    : typeof y;
                },
          i = vD(),
          s = p(i),
          l = SD(),
          u = p(l),
          d = ED(),
          f = p(d);
        function p(y) {
          return y && y.__esModule ? y : { default: y };
        }
        var m = void 0;
        (t.default = function (y) {
          var b =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            _ =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1,
            S = (0, s.default)();
          if ((m || (m = (0, u.default)(S)), b.events))
            throw new Error("Event handlers cannot be overwritten.");
          if (typeof y == "string" && !document.getElementById(y))
            throw new Error('Element "' + y + '" does not exist.');
          b.events = f.default.proxyEvents(S);
          var w = new Promise(function (T) {
              if (
                (typeof y > "u" ? "undefined" : r(y)) === "object" &&
                y.playVideo instanceof Function
              ) {
                var O = y;
                T(O);
              } else
                m.then(function (z) {
                  var W = new z.Player(y, b);
                  return (
                    S.on("ready", function () {
                      T(W);
                    }),
                    null
                  );
                });
            }),
            x = f.default.promisifyPlayer(w, _);
          return (x.on = S.on), (x.off = S.off), x;
        }),
          (e.exports = t.default);
      })(Bu, Bu.exports)),
    Bu.exports
  );
}
var AD = RD();
const $D = mo(AD);
var OD = Object.defineProperty,
  MD = Object.defineProperties,
  zD = Object.getOwnPropertyDescriptors,
  gb = Object.getOwnPropertySymbols,
  jD = Object.prototype.hasOwnProperty,
  LD = Object.prototype.propertyIsEnumerable,
  yb = (e, t, r) =>
    t in e
      ? OD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ip = (e, t) => {
    for (var r in t || (t = {})) jD.call(t, r) && yb(e, r, t[r]);
    if (gb) for (var r of gb(t)) LD.call(t, r) && yb(e, r, t[r]);
    return e;
  },
  Fp = (e, t) => MD(e, zD(t)),
  ND = (e, t, r) =>
    new Promise((i, s) => {
      var l = (f) => {
          try {
            d(r.next(f));
          } catch (p) {
            s(p);
          }
        },
        u = (f) => {
          try {
            d(r.throw(f));
          } catch (p) {
            s(p);
          }
        },
        d = (f) => (f.done ? i(f.value) : Promise.resolve(f.value).then(l, u));
      d((r = r.apply(e, t)).next());
    });
function DD(e, t) {
  var r, i;
  if (e.videoId !== t.videoId) return !0;
  const s = ((r = e.opts) == null ? void 0 : r.playerVars) || {},
    l = ((i = t.opts) == null ? void 0 : i.playerVars) || {};
  return s.start !== l.start || s.end !== l.end;
}
function vb(e = {}) {
  return Fp(Ip({}, e), {
    height: 0,
    width: 0,
    playerVars: Fp(Ip({}, e.playerVars), { autoplay: 0, start: 0, end: 0 }),
  });
}
function ID(e, t) {
  return e.videoId !== t.videoId || !yD(vb(e.opts), vb(t.opts));
}
function FD(e, t) {
  var r, i, s, l;
  return (
    e.id !== t.id ||
    e.className !== t.className ||
    ((r = e.opts) == null ? void 0 : r.width) !==
      ((i = t.opts) == null ? void 0 : i.width) ||
    ((s = e.opts) == null ? void 0 : s.height) !==
      ((l = t.opts) == null ? void 0 : l.height) ||
    e.iframeClassName !== t.iframeClassName ||
    e.title !== t.title
  );
}
var BD = {
    videoId: "",
    id: "",
    className: "",
    iframeClassName: "",
    style: {},
    title: "",
    loading: void 0,
    opts: {},
    onReady: () => {},
    onError: () => {},
    onPlay: () => {},
    onPause: () => {},
    onEnd: () => {},
    onStateChange: () => {},
    onPlaybackRateChange: () => {},
    onPlaybackQualityChange: () => {},
  },
  VD = {
    videoId: kt.string,
    id: kt.string,
    className: kt.string,
    iframeClassName: kt.string,
    style: kt.object,
    title: kt.string,
    loading: kt.oneOf(["lazy", "eager"]),
    opts: kt.objectOf(kt.any),
    onReady: kt.func,
    onError: kt.func,
    onPlay: kt.func,
    onPause: kt.func,
    onEnd: kt.func,
    onStateChange: kt.func,
    onPlaybackRateChange: kt.func,
    onPlaybackQualityChange: kt.func,
  },
  mc = class extends Dn.Component {
    constructor(e) {
      super(e),
        (this.destroyPlayerPromise = void 0),
        (this.onPlayerReady = (t) => {
          var r, i;
          return (i = (r = this.props).onReady) == null ? void 0 : i.call(r, t);
        }),
        (this.onPlayerError = (t) => {
          var r, i;
          return (i = (r = this.props).onError) == null ? void 0 : i.call(r, t);
        }),
        (this.onPlayerStateChange = (t) => {
          var r, i, s, l, u, d, f, p;
          switch (
            ((i = (r = this.props).onStateChange) == null || i.call(r, t),
            t.data)
          ) {
            case mc.PlayerState.ENDED:
              (l = (s = this.props).onEnd) == null || l.call(s, t);
              break;
            case mc.PlayerState.PLAYING:
              (d = (u = this.props).onPlay) == null || d.call(u, t);
              break;
            case mc.PlayerState.PAUSED:
              (p = (f = this.props).onPause) == null || p.call(f, t);
              break;
          }
        }),
        (this.onPlayerPlaybackRateChange = (t) => {
          var r, i;
          return (i = (r = this.props).onPlaybackRateChange) == null
            ? void 0
            : i.call(r, t);
        }),
        (this.onPlayerPlaybackQualityChange = (t) => {
          var r, i;
          return (i = (r = this.props).onPlaybackQualityChange) == null
            ? void 0
            : i.call(r, t);
        }),
        (this.destroyPlayer = () =>
          this.internalPlayer
            ? ((this.destroyPlayerPromise = this.internalPlayer
                .destroy()
                .then(() => (this.destroyPlayerPromise = void 0))),
              this.destroyPlayerPromise)
            : Promise.resolve()),
        (this.createPlayer = () => {
          if (typeof document > "u") return;
          if (this.destroyPlayerPromise) {
            this.destroyPlayerPromise.then(this.createPlayer);
            return;
          }
          const t = Fp(Ip({}, this.props.opts), {
            videoId: this.props.videoId,
          });
          (this.internalPlayer = $D(this.container, t)),
            this.internalPlayer.on("ready", this.onPlayerReady),
            this.internalPlayer.on("error", this.onPlayerError),
            this.internalPlayer.on("stateChange", this.onPlayerStateChange),
            this.internalPlayer.on(
              "playbackRateChange",
              this.onPlayerPlaybackRateChange
            ),
            this.internalPlayer.on(
              "playbackQualityChange",
              this.onPlayerPlaybackQualityChange
            ),
            (this.props.title || this.props.loading) &&
              this.internalPlayer.getIframe().then((r) => {
                this.props.title && r.setAttribute("title", this.props.title),
                  this.props.loading &&
                    r.setAttribute("loading", this.props.loading);
              });
        }),
        (this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer)),
        (this.updatePlayer = () => {
          var t;
          (t = this.internalPlayer) == null ||
            t.getIframe().then((r) => {
              this.props.id
                ? r.setAttribute("id", this.props.id)
                : r.removeAttribute("id"),
                this.props.iframeClassName
                  ? r.setAttribute("class", this.props.iframeClassName)
                  : r.removeAttribute("class"),
                this.props.opts && this.props.opts.width
                  ? r.setAttribute("width", this.props.opts.width.toString())
                  : r.removeAttribute("width"),
                this.props.opts && this.props.opts.height
                  ? r.setAttribute("height", this.props.opts.height.toString())
                  : r.removeAttribute("height"),
                this.props.title
                  ? r.setAttribute("title", this.props.title)
                  : r.setAttribute("title", "YouTube video player"),
                this.props.loading
                  ? r.setAttribute("loading", this.props.loading)
                  : r.removeAttribute("loading");
            });
        }),
        (this.getInternalPlayer = () => this.internalPlayer),
        (this.updateVideo = () => {
          var t, r, i, s;
          if (typeof this.props.videoId > "u" || this.props.videoId === null) {
            (t = this.internalPlayer) == null || t.stopVideo();
            return;
          }
          let l = !1;
          const u = { videoId: this.props.videoId };
          if (
            ((r = this.props.opts) != null &&
              r.playerVars &&
              ((l = this.props.opts.playerVars.autoplay === 1),
              "start" in this.props.opts.playerVars &&
                (u.startSeconds = this.props.opts.playerVars.start),
              "end" in this.props.opts.playerVars &&
                (u.endSeconds = this.props.opts.playerVars.end)),
            l)
          ) {
            (i = this.internalPlayer) == null || i.loadVideoById(u);
            return;
          }
          (s = this.internalPlayer) == null || s.cueVideoById(u);
        }),
        (this.refContainer = (t) => {
          this.container = t;
        }),
        (this.container = null),
        (this.internalPlayer = null);
    }
    componentDidMount() {
      this.createPlayer();
    }
    componentDidUpdate(e) {
      return ND(this, null, function* () {
        FD(e, this.props) && this.updatePlayer(),
          ID(e, this.props) && (yield this.resetPlayer()),
          DD(e, this.props) && this.updateVideo();
      });
    }
    componentWillUnmount() {
      this.destroyPlayer();
    }
    render() {
      return Dn.createElement(
        "div",
        { className: this.props.className, style: this.props.style },
        Dn.createElement("div", {
          id: this.props.id,
          className: this.props.iframeClassName,
          ref: this.refContainer,
        })
      );
    }
  },
  sd = mc;
sd.propTypes = VD;
sd.defaultProps = BD;
sd.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
};
var UD = sd;
function WD({ item: e, showLine: t }) {
  return A.jsxs(A.Fragment, {
    children: [
      A.jsxs("div", {
        className: "timeline__icon",
        children: [
          A.jsx("span", { className: "icon__circle" }),
          t && A.jsx("span", { className: "icon__icon" }),
        ],
      }),
      A.jsxs("div", {
        className: "timeline__finaly",
        children: [
          A.jsxs("div", {
            className: "timeline__date",
            children: [
              A.jsx("div", {
                className: "timeline__image",
                children: A.jsx("img", { loading: "lazy", src: e.image }),
              }),
              A.jsxs("p", { children: [" ", e.title, " "] }),
            ],
          }),
          A.jsxs("div", {
            className: "timeline__title",
            children: [
              A.jsxs("p", { children: [" ", e.cardTitle, " "] }),
              A.jsxs("p", { children: [" ", e.cardSubtitle, " "] }),
            ],
          }),
        ],
      }),
    ],
  });
}
function HD({ post: e }) {
  const { link: t, jetpack_featured_media_url: r, title: i } = e;
  return A.jsx(A.Fragment, {
    children: A.jsx(rs, {
      to: t,
      children: A.jsxs("div", {
        className: "note__container",
        children: [
          A.jsx("div", {
            className: "note__image",
            children: A.jsx("img", { loading: "lazy", src: r }),
          }),
          A.jsx("div", {
            className: "note__title",
            children: A.jsx("p", { children: i == null ? void 0 : i.rendered }),
          }),
        ],
      }),
    }),
  });
}
var Kh, bb;
function qD() {
  if (bb) return Kh;
  bb = 1;
  var e = "Expected a function",
    t = NaN,
    r = "[object Symbol]",
    i = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    u = /^0o[0-7]+$/i,
    d = parseInt,
    f = typeof Cn == "object" && Cn && Cn.Object === Object && Cn,
    p = typeof self == "object" && self && self.Object === Object && self,
    m = f || p || Function("return this")(),
    y = Object.prototype,
    b = y.toString,
    _ = Math.max,
    S = Math.min,
    w = function () {
      return m.Date.now();
    };
  function x(I, U, Y) {
    var le,
      ce,
      ve,
      be,
      Se,
      $e,
      Ke = 0,
      Be = !1,
      de = !1,
      X = !0;
    if (typeof I != "function") throw new TypeError(e);
    (U = E(U) || 0),
      O(Y) &&
        ((Be = !!Y.leading),
        (de = "maxWait" in Y),
        (ve = de ? _(E(Y.maxWait) || 0, U) : ve),
        (X = "trailing" in Y ? !!Y.trailing : X));
    function ie(re) {
      var ke = le,
        We = ce;
      return (le = ce = void 0), (Ke = re), (be = I.apply(We, ke)), be;
    }
    function J(re) {
      return (Ke = re), (Se = setTimeout(Z, U)), Be ? ie(re) : be;
    }
    function L(re) {
      var ke = re - $e,
        We = re - Ke,
        Bn = U - ke;
      return de ? S(Bn, ve - We) : Bn;
    }
    function H(re) {
      var ke = re - $e,
        We = re - Ke;
      return $e === void 0 || ke >= U || ke < 0 || (de && We >= ve);
    }
    function Z() {
      var re = w();
      if (H(re)) return xe(re);
      Se = setTimeout(Z, L(re));
    }
    function xe(re) {
      return (Se = void 0), X && le ? ie(re) : ((le = ce = void 0), be);
    }
    function Te() {
      Se !== void 0 && clearTimeout(Se), (Ke = 0), (le = $e = ce = Se = void 0);
    }
    function we() {
      return Se === void 0 ? be : xe(w());
    }
    function ue() {
      var re = w(),
        ke = H(re);
      if (((le = arguments), (ce = this), ($e = re), ke)) {
        if (Se === void 0) return J($e);
        if (de) return (Se = setTimeout(Z, U)), ie($e);
      }
      return Se === void 0 && (Se = setTimeout(Z, U)), be;
    }
    return (ue.cancel = Te), (ue.flush = we), ue;
  }
  function T(I, U, Y) {
    var le = !0,
      ce = !0;
    if (typeof I != "function") throw new TypeError(e);
    return (
      O(Y) &&
        ((le = "leading" in Y ? !!Y.leading : le),
        (ce = "trailing" in Y ? !!Y.trailing : ce)),
      x(I, U, { leading: le, maxWait: U, trailing: ce })
    );
  }
  function O(I) {
    var U = typeof I;
    return !!I && (U == "object" || U == "function");
  }
  function z(I) {
    return !!I && typeof I == "object";
  }
  function W(I) {
    return typeof I == "symbol" || (z(I) && b.call(I) == r);
  }
  function E(I) {
    if (typeof I == "number") return I;
    if (W(I)) return t;
    if (O(I)) {
      var U = typeof I.valueOf == "function" ? I.valueOf() : I;
      I = O(U) ? U + "" : U;
    }
    if (typeof I != "string") return I === 0 ? I : +I;
    I = I.replace(i, "");
    var Y = l.test(I);
    return Y || u.test(I) ? d(I.slice(2), Y ? 2 : 8) : s.test(I) ? t : +I;
  }
  return (Kh = T), Kh;
}
var KD = qD();
const GD = mo(KD);
var Gh, Sb;
function YD() {
  if (Sb) return Gh;
  Sb = 1;
  var e = "Expected a function",
    t = NaN,
    r = "[object Symbol]",
    i = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    u = /^0o[0-7]+$/i,
    d = parseInt,
    f = typeof Cn == "object" && Cn && Cn.Object === Object && Cn,
    p = typeof self == "object" && self && self.Object === Object && self,
    m = f || p || Function("return this")(),
    y = Object.prototype,
    b = y.toString,
    _ = Math.max,
    S = Math.min,
    w = function () {
      return m.Date.now();
    };
  function x(E, I, U) {
    var Y,
      le,
      ce,
      ve,
      be,
      Se,
      $e = 0,
      Ke = !1,
      Be = !1,
      de = !0;
    if (typeof E != "function") throw new TypeError(e);
    (I = W(I) || 0),
      T(U) &&
        ((Ke = !!U.leading),
        (Be = "maxWait" in U),
        (ce = Be ? _(W(U.maxWait) || 0, I) : ce),
        (de = "trailing" in U ? !!U.trailing : de));
    function X(ue) {
      var re = Y,
        ke = le;
      return (Y = le = void 0), ($e = ue), (ve = E.apply(ke, re)), ve;
    }
    function ie(ue) {
      return ($e = ue), (be = setTimeout(H, I)), Ke ? X(ue) : ve;
    }
    function J(ue) {
      var re = ue - Se,
        ke = ue - $e,
        We = I - re;
      return Be ? S(We, ce - ke) : We;
    }
    function L(ue) {
      var re = ue - Se,
        ke = ue - $e;
      return Se === void 0 || re >= I || re < 0 || (Be && ke >= ce);
    }
    function H() {
      var ue = w();
      if (L(ue)) return Z(ue);
      be = setTimeout(H, J(ue));
    }
    function Z(ue) {
      return (be = void 0), de && Y ? X(ue) : ((Y = le = void 0), ve);
    }
    function xe() {
      be !== void 0 && clearTimeout(be), ($e = 0), (Y = Se = le = be = void 0);
    }
    function Te() {
      return be === void 0 ? ve : Z(w());
    }
    function we() {
      var ue = w(),
        re = L(ue);
      if (((Y = arguments), (le = this), (Se = ue), re)) {
        if (be === void 0) return ie(Se);
        if (Be) return (be = setTimeout(H, I)), X(Se);
      }
      return be === void 0 && (be = setTimeout(H, I)), ve;
    }
    return (we.cancel = xe), (we.flush = Te), we;
  }
  function T(E) {
    var I = typeof E;
    return !!E && (I == "object" || I == "function");
  }
  function O(E) {
    return !!E && typeof E == "object";
  }
  function z(E) {
    return typeof E == "symbol" || (O(E) && b.call(E) == r);
  }
  function W(E) {
    if (typeof E == "number") return E;
    if (z(E)) return t;
    if (T(E)) {
      var I = typeof E.valueOf == "function" ? E.valueOf() : E;
      E = T(I) ? I + "" : I;
    }
    if (typeof E != "string") return E === 0 ? E : +E;
    E = E.replace(i, "");
    var U = l.test(E);
    return U || u.test(E) ? d(E.slice(2), U ? 2 : 8) : s.test(E) ? t : +E;
  }
  return (Gh = x), Gh;
}
var XD = YD();
const xb = mo(XD);
var ik = function () {};
function sk(e) {
  var t = void 0,
    r = void 0,
    i = void 0;
  for (t = 0; t < e.length; t += 1)
    if (
      ((r = e[t]),
      (r.dataset && r.dataset.aos) || ((i = r.children && sk(r.children)), i))
    )
      return !0;
  return !1;
}
function QD(e) {
  e &&
    e.forEach(function (t) {
      var r = Array.prototype.slice.call(t.addedNodes),
        i = Array.prototype.slice.call(t.removedNodes),
        s = r.concat(i);
      if (sk(s)) return ik();
    });
}
function ak() {
  return (
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver
  );
}
function JD() {
  return !!ak();
}
function ZD(e, t) {
  var r = window.document,
    i = ak(),
    s = new i(QD);
  (ik = t),
    s.observe(r.documentElement, {
      childList: !0,
      subtree: !0,
      removedNodes: !0,
    });
}
var wb = { isSupported: JD, ready: ZD },
  eI = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  tI = (function () {
    function e(t, r) {
      for (var i = 0; i < r.length; i++) {
        var s = r[i];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(t, s.key, s);
      }
    }
    return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  })(),
  nI =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
      }
      return e;
    },
  rI =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
  oI =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
  iI =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
  sI =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function kb() {
  return navigator.userAgent || navigator.vendor || window.opera || "";
}
var aI = (function () {
    function e() {
      eI(this, e);
    }
    return (
      tI(e, [
        {
          key: "phone",
          value: function () {
            var r = kb();
            return !!(rI.test(r) || oI.test(r.substr(0, 4)));
          },
        },
        {
          key: "mobile",
          value: function () {
            var r = kb();
            return !!(iI.test(r) || sI.test(r.substr(0, 4)));
          },
        },
        {
          key: "tablet",
          value: function () {
            return this.mobile() && !this.phone();
          },
        },
        {
          key: "ie11",
          value: function () {
            return (
              "-ms-scroll-limit" in document.documentElement.style &&
              "-ms-ime-align" in document.documentElement.style
            );
          },
        },
      ]),
      e
    );
  })(),
  gc = new aI(),
  lI = function (t, r) {
    return (
      r &&
      r.forEach(function (i) {
        return t.classList.add(i);
      })
    );
  },
  uI = function (t, r) {
    return (
      r &&
      r.forEach(function (i) {
        return t.classList.remove(i);
      })
    );
  },
  Xu = function (t, r) {
    var i = void 0;
    return (
      gc.ie11()
        ? ((i = document.createEvent("CustomEvent")),
          i.initCustomEvent(t, !0, !0, { detail: r }))
        : (i = new CustomEvent(t, { detail: r })),
      document.dispatchEvent(i)
    );
  },
  cI = function (t, r) {
    var i = t.options,
      s = t.position,
      l = t.node;
    t.data;
    var u = function () {
        t.animated &&
          (uI(l, i.animatedClassNames),
          Xu("aos:out", l),
          t.options.id && Xu("aos:in:" + t.options.id, l),
          (t.animated = !1));
      },
      d = function () {
        t.animated ||
          (lI(l, i.animatedClassNames),
          Xu("aos:in", l),
          t.options.id && Xu("aos:in:" + t.options.id, l),
          (t.animated = !0));
      };
    i.mirror && r >= s.out && !i.once
      ? u()
      : r >= s.in
      ? d()
      : t.animated && !i.once && u();
  },
  Cb = function (t) {
    return t.forEach(function (r, i) {
      return cI(r, window.pageYOffset);
    });
  },
  lk = function (t) {
    for (var r = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
      (r += t.offsetLeft - (t.tagName != "BODY" ? t.scrollLeft : 0)),
        (i += t.offsetTop - (t.tagName != "BODY" ? t.scrollTop : 0)),
        (t = t.offsetParent);
    return { top: i, left: r };
  },
  fo = function (e, t, r) {
    var i = e.getAttribute("data-aos-" + t);
    if (typeof i < "u") {
      if (i === "true") return !0;
      if (i === "false") return !1;
    }
    return i || r;
  },
  dI = function (t, r, i) {
    var s = window.innerHeight,
      l = fo(t, "anchor"),
      u = fo(t, "anchor-placement"),
      d = Number(fo(t, "offset", u ? 0 : r)),
      f = u || i,
      p = t;
    l && document.querySelectorAll(l) && (p = document.querySelectorAll(l)[0]);
    var m = lk(p).top - s;
    switch (f) {
      case "top-bottom":
        break;
      case "center-bottom":
        m += p.offsetHeight / 2;
        break;
      case "bottom-bottom":
        m += p.offsetHeight;
        break;
      case "top-center":
        m += s / 2;
        break;
      case "center-center":
        m += s / 2 + p.offsetHeight / 2;
        break;
      case "bottom-center":
        m += s / 2 + p.offsetHeight;
        break;
      case "top-top":
        m += s;
        break;
      case "bottom-top":
        m += s + p.offsetHeight;
        break;
      case "center-top":
        m += s + p.offsetHeight / 2;
        break;
    }
    return m + d;
  },
  fI = function (t, r) {
    var i = fo(t, "anchor"),
      s = fo(t, "offset", r),
      l = t;
    i && document.querySelectorAll(i) && (l = document.querySelectorAll(i)[0]);
    var u = lk(l).top;
    return u + l.offsetHeight - s;
  },
  hI = function (t, r) {
    return (
      t.forEach(function (i, s) {
        var l = fo(i.node, "mirror", r.mirror),
          u = fo(i.node, "once", r.once),
          d = fo(i.node, "id"),
          f = r.useClassNames && i.node.getAttribute("data-aos"),
          p = [r.animatedClassName]
            .concat(f ? f.split(" ") : [])
            .filter(function (m) {
              return typeof m == "string";
            });
        r.initClassName && i.node.classList.add(r.initClassName),
          (i.position = {
            in: dI(i.node, r.offset, r.anchorPlacement),
            out: l && fI(i.node, r.offset),
          }),
          (i.options = { once: u, mirror: l, animatedClassNames: p, id: d });
      }),
      t
    );
  },
  uk = function () {
    var e = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(e, function (t) {
      return { node: t };
    });
  },
  Pr = [],
  _b = !1,
  ot = {
    offset: 120,
    delay: 0,
    easing: "ease",
    duration: 400,
    disable: !1,
    once: !1,
    mirror: !1,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    useClassNames: !1,
    disableMutationObserver: !1,
    throttleDelay: 99,
    debounceDelay: 50,
  },
  ck = function () {
    return document.all && !window.atob;
  },
  pI = function () {
    return (
      (Pr = hI(Pr, ot)),
      Cb(Pr),
      window.addEventListener(
        "scroll",
        GD(function () {
          Cb(Pr, ot.once);
        }, ot.throttleDelay)
      ),
      Pr
    );
  },
  Vo = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    t && (_b = !0), _b && pI();
  },
  dk = function () {
    if (((Pr = uk()), hk(ot.disable) || ck())) return fk();
    Vo();
  },
  fk = function () {
    Pr.forEach(function (t, r) {
      t.node.removeAttribute("data-aos"),
        t.node.removeAttribute("data-aos-easing"),
        t.node.removeAttribute("data-aos-duration"),
        t.node.removeAttribute("data-aos-delay"),
        ot.initClassName && t.node.classList.remove(ot.initClassName),
        ot.animatedClassName && t.node.classList.remove(ot.animatedClassName);
    });
  },
  hk = function (t) {
    return (
      t === !0 ||
      (t === "mobile" && gc.mobile()) ||
      (t === "phone" && gc.phone()) ||
      (t === "tablet" && gc.tablet()) ||
      (typeof t == "function" && t() === !0)
    );
  },
  mI = function (t) {
    return (
      (ot = nI(ot, t)),
      (Pr = uk()),
      !ot.disableMutationObserver &&
        !wb.isSupported() &&
        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
        (ot.disableMutationObserver = !0)),
      ot.disableMutationObserver || wb.ready("[data-aos]", dk),
      hk(ot.disable) || ck()
        ? fk()
        : (document
            .querySelector("body")
            .setAttribute("data-aos-easing", ot.easing),
          document
            .querySelector("body")
            .setAttribute("data-aos-duration", ot.duration),
          document
            .querySelector("body")
            .setAttribute("data-aos-delay", ot.delay),
          ["DOMContentLoaded", "load"].indexOf(ot.startEvent) === -1
            ? document.addEventListener(ot.startEvent, function () {
                Vo(!0);
              })
            : window.addEventListener("load", function () {
                Vo(!0);
              }),
          ot.startEvent === "DOMContentLoaded" &&
            ["complete", "interactive"].indexOf(document.readyState) > -1 &&
            Vo(!0),
          window.addEventListener("resize", xb(Vo, ot.debounceDelay, !0)),
          window.addEventListener(
            "orientationchange",
            xb(Vo, ot.debounceDelay, !0)
          ),
          Pr)
    );
  },
  gI = { init: mI, refresh: Vo, refreshHard: dk };
function yI() {
  const [e, t] = P.useState(!1),
    [r, i] = P.useState([]),
    s = P.useMemo(
      () => [
        {
          id: "1",
          title: "2019",
          cardTitle:
            "Tecnicatura Superior Universitaria en Periodismo Deportivo",
          cardSubtitle: "Comienzo de la carrera.",
          image: "./logos/fpycs.png",
        },
        {
          id: "2",
          title: "2021",
          cardTitle: "La Plata 1",
          cardSubtitle: "Redactor social, politico y deportivo.",
          image: "./logos/laplatauno.jpg",
        },
        {
          id: "3",
          title: "2022",
          cardTitle: "Gambeta LP",
          cardSubtitle: "Redactor deportivo.",
          image: "./logos/gambeta.jpg",
        },
        {
          id: "4",
          title: "2022",
          cardTitle:
            "Tecnicatura Superior Universitaria en Periodismo Deportivo",
          cardSubtitle: "Finalización de la carrera.",
          image: "./logos/fpycs.png",
        },
        {
          id: "5",
          title: "2023",
          cardTitle: "Proyecto Goles",
          cardSubtitle:
            "Transmisiones deportivas de Gimnasia y Estudiantes de La Plata.",
          image: "./logos/pg.jpg",
        },
        {
          id: "6",
          title: "2023",
          cardTitle: "Diagonal Al Aro",
          cardSubtitle: "Redactor y creador de contenido audiovisual.",
          image: "./logos/daa.jpg",
        },
        {
          id: "7",
          title: "2024",
          cardTitle: "Radio FM Raíces Rock - Oeste Despierta",
          cardSubtitle: "Columna de básquet y entrevistas.",
          image: "./logos/fmr.png",
        },
        {
          id: "8",
          title: "2024",
          cardTitle: "Lumpen TV - Tiempo Suplementario",
          cardSubtitle: "Columna de básquet.",
          image: "./logos/ts.jpg",
        },
        {
          id: "9",
          title: "2025",
          cardTitle: "Licenciatura en Comunicación Social",
          cardSubtitle: "Inicio de la carrera.",
          image: "./logos/fpycs.png",
        },
      ],
      []
    ),
    l = { primary: "Bi-FTU-2dgY", secondary: "aYBD1vRmjys" },
    u = { height: "215", width: "350", playerVars: { autoplay: 0 } },
    d = e ? Object.values(l) : Object.values(l).slice(0, 2);
  return (
    P.useEffect(() => {
      (async () => {
        const p = await pD();
        i(p);
      })();
    }, []),
    P.useEffect(() => {
      gI.init({ duration: 1e3, once: !1 });
    }, []),
    A.jsxs(A.Fragment, {
      children: [
        A.jsx("div", {
          className: "subtitle",
          children: A.jsx("h2", { children: "Redacción" }),
        }),
        A.jsx("div", {
          className: "title",
          children: A.jsx("h2", { children: " Diagonal Al Aro " }),
        }),
        A.jsx("div", {
          className: "description",
          children: A.jsx("p", {
            children:
              'Entré en Diagonal Al Aro en el año 2023, en el apartado de redacción y cómo creador de contenido audiovisual para redes sociales. Realicé coberturas del Torneo APdeB, Prefederal, Liga Federal y Liga Argentina. En el apartado "Audiovisual", podrán encontrar entrevistas realizadas a los distintos protagonistas, cómo es el caso de Lucas Conti, técnico de Estudiantes de La Plata, Andrés Schroeder, jugador de Atenas, entre otros.',
          }),
        }),
        A.jsx("div", {
          className: "selected__container",
          children: A.jsx("div", {
            className: "selected__note",
            children:
              r.length > 0 &&
              r
                .slice(0, 9)
                .map((f) =>
                  A.jsx("div", { children: A.jsx(HD, { post: f }) }, f.id)
                ),
          }),
        }),
        A.jsx("div", {
          className: "subtitle__two",
          "data-aos": "zoom-in",
          children: A.jsx("h2", { children: "Audiovisual" }),
        }),
        A.jsx("div", {
          className: "selected__container",
          "data-aos": "zoom-in",
          children: A.jsxs("div", {
            className: "selected__youtube",
            children: [
              d.map((f, p) =>
                A.jsx(
                  "div",
                  {
                    className: "youtube__video",
                    children: A.jsx(UD, { videoId: f, opts: u }),
                  },
                  p
                )
              ),
              Object.values(l).length > 2 &&
                !e &&
                A.jsx("button", {
                  className: "btn__youtube",
                  onClick: () => t(!0),
                  children: "Mostrar más",
                }),
              Object.values(l).length > 2 &&
                e &&
                A.jsx("button", {
                  className: "btn__youtube",
                  onClick: () => t(!1),
                  children: "Mostrar menos",
                }),
            ],
          }),
        }),
        A.jsx("div", {
          className: "selected__container",
          "data-aos": "zoom-in",
          children: s.map((f, p) =>
            A.jsx(
              "div",
              {
                className: "selected__timeline",
                children: A.jsx(WD, { item: f, showLine: p !== s.length - 1 }),
              },
              f.id
            )
          ),
        }),
      ],
    })
  );
}
function vI(e) {
  return yo({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function bI(e) {
  return yo({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function SI(e) {
  return yo({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",
        },
        child: [],
      },
    ],
  })(e);
}
function xI(e) {
  return yo({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [{ tag: "polyline", attr: { points: "6 9 12 15 18 9" }, child: [] }],
  })(e);
}
function wI(e) {
  return yo({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "polyline", attr: { points: "15 18 9 12 15 6" }, child: [] },
    ],
  })(e);
}
function kI(e) {
  return yo({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [{ tag: "polyline", attr: { points: "9 18 15 12 9 6" }, child: [] }],
  })(e);
}
function CI(e) {
  return yo({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "polyline", attr: { points: "18 15 12 9 6 15" }, child: [] },
    ],
  })(e);
}
function pk(e) {
  var t,
    r,
    i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = pk(e[t])) && (i && (i += " "), (i += r));
    } else for (r in e) e[r] && (i && (i += " "), (i += r));
  return i;
}
function _I() {
  for (var e, t, r = 0, i = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = pk(e)) && (i && (i += " "), (i += t));
  return i;
}
function PI({ isCollapsed: e, toggleCollapse: t, isMobile: r }) {
  return A.jsx(A.Fragment, {
    children: A.jsx(vw, {
      className: _I("work__button", { "move-button": !e }),
      icon: r
        ? e
          ? A.jsx(CI, {})
          : A.jsx(xI, {})
        : e
        ? A.jsx(kI, {})
        : A.jsx(wI, {}),
      right: r ? void 0 : e ? "-60px" : "-65px",
      onClick: t,
      position: "absolute",
      size: "lg",
      top: 4,
    }),
  });
}
function TI({ selectedItem: e, setSelectedItem: t }) {
  const [r] = _j("(max-width: 1000px)"),
    [i, s] = P.useState(!0),
    l = (d) => {
      s(!i), t(d);
    },
    u = () => {
      s(!i);
    };
  return A.jsxs(ao, {
    width: i ? "0px" : "380px",
    className: "work__container__sidebar",
    position: "sticky",
    transition: ".3s",
    zIndex: 999,
    left: 0,
    top: 0,
    children: [
      A.jsx(PI, { toggleCollapse: u, isCollapsed: i, isMobile: r }),
      A.jsxs(xw, {
        height: i ? "0vh" : "100vh",
        className: "work__stack",
        spacing: 6,
        children: [
          A.jsx("div", {
            className: "work__image",
            children: A.jsx("img", {
              src: "./image.jpeg",
              alt: "Matias Romoli",
            }),
          }),
          A.jsxs(ao, {
            className: "work",
            children: [
              A.jsxs(ao, {
                className: "work__title",
                children: [
                  A.jsx(ao, {
                    onClick: () => l("Periodismo"),
                    children: !i && "Periodismo",
                  }),
                  A.jsx(Tp, { in: e === "Periodismo" && !i }),
                ],
              }),
              A.jsxs(ao, {
                className: "work__title",
                children: [
                  A.jsx(ao, {
                    onClick: () => l("Programacion"),
                    children: !i && "Programación",
                  }),
                  A.jsx(Tp, { in: e === "Programacion" && !i }),
                ],
              }),
            ],
          }),
          A.jsxs("div", {
            className: "work__icons",
            children: [
              A.jsx(rs, {
                to: "https://www.instagram.com/matiasromoli/",
                children: A.jsx(vI, { className: "icons" }),
              }),
              A.jsx(rs, {
                to: "https://www.linkedin.com/in/matias-romoli-369a722a8/",
                children: A.jsx(bI, { className: "icons" }),
              }),
              A.jsx(rs, {
                to: "mailto:matiaromoli22@gmail.com",
                children: A.jsx(SI, { className: "icons" }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function EI() {
  const [e, t] = P.useState("Periodismo"),
    r = () => {
      switch (e) {
        case "Periodismo":
          return A.jsx(yI, {});
        case "Programacion":
          return A.jsx(DL, {});
      }
    };
  return A.jsx(A.Fragment, {
    children: A.jsxs("div", {
      className: "work__container",
      children: [
        A.jsx(TI, { selectedItem: e, setSelectedItem: t }),
        e === "Programacion"
          ? A.jsx("div", {
              className: "work__container__programming",
              children: r(),
            })
          : A.jsx("div", {
              className: "work__container__selected",
              children: A.jsx("div", {
                className: "work__container__body",
                children: r(),
              }),
            }),
      ],
    }),
  });
}
function RI() {
  return A.jsx(A.Fragment, {
    children: A.jsx(ao, {
      className: "flex home",
      height: "100vh",
      children: A.jsxs("div", {
        className: "container__home flex",
        children: [
          A.jsxs("div", {
            className: "home__title",
            style: { color: "#e32f21" },
            children: [
              A.jsx("p", { children: " HOLA," }),
              A.jsx("p", { children: " soy Matías Rómoli " }),
            ],
          }),
          A.jsxs("div", {
            className: "home__description flex",
            children: [
              A.jsx("p", {
                children:
                  " Tecnico Superior Universitario en Periodismo Deportivo. ",
              }),
              A.jsx("p", {
                children:
                  " Estudiante de Licenciatura en Comunicación Social. ",
              }),
              A.jsx("p", { children: " También diseño y programo. " }),
            ],
          }),
          A.jsx("div", {
            className: "home__work",
            children: A.jsx(rs, {
              to: "/work",
              children: A.jsx(Hm, {
                className: "home__button none",
                children: "Conocé mis trabajos",
              }),
            }),
          }),
          A.jsx("div", { className: "logos" }),
        ],
      }),
    }),
  });
}
function AI() {
  return A.jsx(PL, {
    children: A.jsxs(bL, {
      children: [
        A.jsx(Ap, { path: "/work", element: A.jsx(EI, {}) }),
        A.jsx(Ap, { path: "/", element: A.jsx(RI, {}) }),
      ],
    }),
  });
}
Ej.createRoot(document.getElementById("root")).render(
  A.jsx(gj, { children: A.jsx(P.StrictMode, { children: A.jsx(AI, {}) }) })
);
