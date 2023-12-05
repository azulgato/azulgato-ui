import we, { useState as lr } from "react";
var H = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function cr() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    var n = we, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), X = Symbol.iterator, Se = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var a = S.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var c = t.map(function(f) {
          return String(f);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var ke = !1, Fe = !1, Ae = !1, Ve = !1, Ie = !1, Z;
    Z = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === P || Ie || e === m || e === R || e === b || Ve || e === I || ke || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === O || e.$$typeof === g || e.$$typeof === h || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case s:
          return "Portal";
        case P:
          return "Profiler";
        case m:
          return "StrictMode";
        case R:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return Q(r) + ".Consumer";
          case g:
            var t = e;
            return Q(t._context) + ".Provider";
          case v:
            return We(e, e.render, "ForwardRef");
          case O:
            var a = e.displayName || null;
            return a !== null ? a : x(e.type) || "Memo";
          case w: {
            var l = e, c = l._payload, f = l._init;
            try {
              return x(f(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, k = 0, ee, re, te, ne, ae, oe, ie;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Ye() {
      {
        if (k === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, oe = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        k++;
      }
    }
    function $e() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ee
            }),
            info: C({}, e, {
              value: re
            }),
            warn: C({}, e, {
              value: te
            }),
            error: C({}, e, {
              value: ne
            }),
            group: C({}, e, {
              value: ae
            }),
            groupCollapsed: C({}, e, {
              value: oe
            }),
            groupEnd: C({}, e, {
              value: ie
            })
          });
        }
        k < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = S.ReactCurrentDispatcher, U;
    function N(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            U = a && a[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = !1, W;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Le();
    }
    function fe(e, r) {
      if (!e || B)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      B = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = M.current, M.current = null, Ye();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (T) {
              a = T;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (T) {
              a = T;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            a = T;
          }
          e();
        }
      } catch (T) {
        if (T && a && typeof T.stack == "string") {
          for (var i = T.stack.split(`
`), _ = a.stack.split(`
`), d = i.length - 1, p = _.length - 1; d >= 1 && p >= 0 && i[d] !== _[p]; )
            p--;
          for (; d >= 1 && p >= 0; d--, p--)
            if (i[d] !== _[p]) {
              if (d !== 1 || p !== 1)
                do
                  if (d--, p--, p < 0 || i[d] !== _[p]) {
                    var E = `
` + i[d].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, E), E;
                  }
                while (d >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        B = !1, M.current = c, $e(), Error.prepareStackTrace = l;
      }
      var D = e ? e.displayName || e.name : "", Ee = D ? N(D) : "";
      return typeof e == "function" && W.set(e, Ee), Ee;
    }
    function Me(e, r, t) {
      return fe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ue(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case R:
          return N("Suspense");
        case b:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Me(e.render);
          case O:
            return Y(e.type, r, t);
          case w: {
            var a = e, l = a._payload, c = a._init;
            try {
              return Y(c(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, se = {}, le = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function Be(e, r, t, a, l) {
      {
        var c = Function.call.bind($);
        for (var f in e)
          if (c(e, f)) {
            var i = void 0;
            try {
              if (typeof e[f] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              i = e[f](r, f, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              i = d;
            }
            i && !(i instanceof Error) && (L(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, f, typeof i), L(null)), i instanceof Error && !(i.message in se) && (se[i.message] = !0, L(l), y("Failed %s type: %s", t, i.message), L(null));
          }
      }
    }
    var qe = Array.isArray;
    function q(e) {
      return qe(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function ve(e) {
      if (Je(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ce(e);
    }
    var F = S.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, pe, z;
    z = {};
    function Ke(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = x(F.current.type);
        z[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(F.current.type), e.ref), z[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          de || (de = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          pe || (pe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, a, l, c, f) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function rr(e, r, t, a, l) {
      {
        var c, f = {}, i = null, _ = null;
        t !== void 0 && (ve(t), i = "" + t), He(r) && (ve(r.key), i = "" + r.key), Ke(r) && (_ = r.ref, Xe(r, l));
        for (c in r)
          $.call(r, c) && !Ge.hasOwnProperty(c) && (f[c] = r[c]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (c in d)
            f[c] === void 0 && (f[c] = d[c]);
        }
        if (i || _) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && Ze(f, p), _ && Qe(f, p);
        }
        return er(e, i, _, l, a, F.current, f);
      }
    }
    var J = S.ReactCurrentOwner, me = S.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function be() {
      {
        if (J.current) {
          var e = x(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function nr(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var a = "";
        e && e._owner && e._owner !== J.current && (a = " It was passed a child from " + x(e._owner.type) + "."), j(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), j(null);
      }
    }
    function ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            K(a) && _e(a, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = je(e);
          if (typeof l == "function" && l !== e.entries)
            for (var c = l.call(e), f; !(f = c.next()).done; )
              K(f.value) && _e(f.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = x(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var l = x(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            j(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function he(e, r, t, a, l, c) {
      {
        var f = Ne(e);
        if (!f) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = tr(l);
          _ ? i += _ : i += be();
          var d;
          e === null ? d = "null" : q(e) ? d = "array" : e !== void 0 && e.$$typeof === o ? (d = "<" + (x(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, i);
        }
        var p = rr(e, r, t, l, c);
        if (p == null)
          return p;
        if (f) {
          var E = r.children;
          if (E !== void 0)
            if (a)
              if (q(E)) {
                for (var D = 0; D < E.length; D++)
                  ge(E[D], e);
                Object.freeze && Object.freeze(E);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ge(E, e);
        }
        return e === u ? or(p) : ar(p), p;
      }
    }
    function ir(e, r, t) {
      return he(e, r, t, !0);
    }
    function ur(e, r, t) {
      return he(e, r, t, !1);
    }
    var fr = ur, sr = ir;
    A.Fragment = u, A.jsx = fr, A.jsxs = sr;
  }()), A;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  if (Oe)
    return V;
  Oe = 1;
  var n = we, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(h, v, R) {
    var b, O = {}, w = null, I = null;
    R !== void 0 && (w = "" + R), v.key !== void 0 && (w = "" + v.key), v.ref !== void 0 && (I = v.ref);
    for (b in v)
      u.call(v, b) && !P.hasOwnProperty(b) && (O[b] = v[b]);
    if (h && h.defaultProps)
      for (b in v = h.defaultProps, v)
        O[b] === void 0 && (O[b] = v[b]);
    return { $$typeof: o, type: h, key: w, ref: I, props: O, _owner: m.current };
  }
  return V.Fragment = s, V.jsx = g, V.jsxs = g, V;
}
process.env.NODE_ENV === "production" ? H.exports = vr() : H.exports = cr();
var Ce = H.exports;
function dr(n, o) {
  if (typeof n != "object" || n === null)
    return n;
  var s = n[Symbol.toPrimitive];
  if (s !== void 0) {
    var u = s.call(n, o || "default");
    if (typeof u != "object")
      return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(n);
}
function pr(n) {
  var o = dr(n, "string");
  return typeof o == "symbol" ? o : String(o);
}
function mr(n, o, s) {
  return o = pr(o), o in n ? Object.defineProperty(n, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[o] = s, n;
}
function Pe(n, o) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    o && (u = u.filter(function(m) {
      return Object.getOwnPropertyDescriptor(n, m).enumerable;
    })), s.push.apply(s, u);
  }
  return s;
}
function xe(n) {
  for (var o = 1; o < arguments.length; o++) {
    var s = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Pe(Object(s), !0).forEach(function(u) {
      mr(n, u, s[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Pe(Object(s)).forEach(function(u) {
      Object.defineProperty(n, u, Object.getOwnPropertyDescriptor(s, u));
    });
  }
  return n;
}
function Te(n, o) {
  var s = {};
  for (var u in n)
    s[u] = o(n[u], u);
  return s;
}
var br = (n, o, s) => {
  for (var u of Object.keys(n)) {
    var m;
    if (n[u] !== ((m = o[u]) !== null && m !== void 0 ? m : s[u]))
      return !1;
  }
  return !0;
}, yr = (n) => {
  var o = (s) => {
    var u = n.defaultClassName, m = xe(xe({}, n.defaultVariants), s);
    for (var P in m) {
      var g, h = (g = m[P]) !== null && g !== void 0 ? g : n.defaultVariants[P];
      if (h != null) {
        var v = h;
        typeof v == "boolean" && (v = v === !0 ? "true" : "false");
        var R = (
          // @ts-expect-error
          n.variantClassNames[P][v]
        );
        R && (u += " " + R);
      }
    }
    for (var [b, O] of n.compoundVariants)
      br(b, m, n.defaultVariants) && (u += " " + O);
    return u;
  };
  return o.variants = () => Object.keys(n.variantClassNames), o.classNames = {
    get base() {
      return n.defaultClassName.split(" ")[0];
    },
    get variants() {
      return Te(n.variantClassNames, (s) => Te(s, (u) => u.split(" ")[0]));
    }
  }, o;
}, _r = yr({ defaultClassName: "_9f5xaf2", variantClassNames: { buttonVariant: { primary: "_9f5xaf3", secondary: "_9f5xaf4", tertiary: "_9f5xaf5", disabled: "_9f5xaf6", danger: "_9f5xaf7", warning: "_9f5xaf8", success: "_9f5xaf9", info: "_9f5xafa" }, size: { s: "_9f5xafb", m: "_9f5xafc", l: "_9f5xafd" }, hoveredAnimation: { true: "_9f5xafe", false: "_9f5xaff", none: "_9f5xafg" }, paddingVariant: { s: "_9f5xafh", m: "_9f5xafi", l: "_9f5xafj", none: "_9f5xafk" } }, defaultVariants: {}, compoundVariants: [] });
const gr = (n) => {
  const [o, s] = lr(null), {
    label: u,
    sizeVariant: m,
    backgroundVariant: P,
    className: g,
    icon: h,
    paddingVariant: v = "m",
    ...R
  } = n;
  return /* @__PURE__ */ Ce.jsxs(
    "button",
    {
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      ...R,
      className: `${_r({
        size: m,
        buttonVariant: P,
        hoveredAnimation: o ?? "none",
        paddingVariant: v
      })} 
        ${g || ""}`,
      children: [
        h,
        u
      ]
    }
  );
}, Er = (n) => /* @__PURE__ */ Ce.jsx(gr, { ...n });
export {
  gr as Button,
  Er as RoundButton
};
//# sourceMappingURL=azulgato-ui.es.js.map
