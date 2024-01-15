import Z, { useState as Sr } from "react";
var X = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function ve() {
  return Or || (Or = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Z, n = Symbol.for("react.element"), u = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), g = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), Q = Symbol.iterator, kr = "@@iterator";
    function Ar(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = Q && r[Q] || r[kr];
      return typeof e == "function" ? e : null;
    }
    var C = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
          t[i - 1] = arguments[i];
        Fr("error", r, t);
      }
    }
    function Fr(r, e, t) {
      {
        var i = C.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (e += "%s", t = t.concat([l]));
        var d = t.map(function(f) {
          return String(f);
        });
        d.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, d);
      }
    }
    var Vr = !1, Ir = !1, Nr = !1, Wr = !1, $r = !1, rr;
    rr = Symbol.for("react.module.reference");
    function Yr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === p || $r || r === v || r === R || r === h || Wr || r === I || Vr || Ir || Nr || typeof r == "object" && r !== null && (r.$$typeof === P || r.$$typeof === O || r.$$typeof === b || r.$$typeof === g || r.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === rr || r.getModuleId !== void 0));
    }
    function Lr(r, e, t) {
      var i = r.displayName;
      if (i)
        return i;
      var l = e.displayName || e.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function er(r) {
      return r.displayName || "Context";
    }
    function x(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case u:
          return "Portal";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case R:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case g:
            var e = r;
            return er(e) + ".Consumer";
          case b:
            var t = r;
            return er(t._context) + ".Provider";
          case c:
            return Lr(r, r.render, "ForwardRef");
          case O:
            var i = r.displayName || null;
            return i !== null ? i : x(r.type) || "Memo";
          case P: {
            var l = r, d = l._payload, f = l._init;
            try {
              return x(f(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, k = 0, tr, ar, nr, or, ir, ur, sr;
    function fr() {
    }
    fr.__reactDisabledLog = !0;
    function Mr() {
      {
        if (k === 0) {
          tr = console.log, ar = console.info, nr = console.warn, or = console.error, ir = console.group, ur = console.groupCollapsed, sr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: fr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        k++;
      }
    }
    function Ur() {
      {
        if (k--, k === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, r, {
              value: tr
            }),
            info: w({}, r, {
              value: ar
            }),
            warn: w({}, r, {
              value: nr
            }),
            error: w({}, r, {
              value: or
            }),
            group: w({}, r, {
              value: ir
            }),
            groupCollapsed: w({}, r, {
              value: ur
            }),
            groupEnd: w({}, r, {
              value: sr
            })
          });
        }
        k < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = C.ReactCurrentDispatcher, B;
    function N(r, e, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            B = i && i[1] || "";
          }
        return `
` + B + r;
      }
    }
    var q = !1, W;
    {
      var Br = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Br();
    }
    function lr(r, e) {
      if (!r || q)
        return "";
      {
        var t = W.get(r);
        if (t !== void 0)
          return t;
      }
      var i;
      q = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = U.current, U.current = null, Mr();
      try {
        if (e) {
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
              i = T;
            }
            Reflect.construct(r, [], f);
          } else {
            try {
              f.call();
            } catch (T) {
              i = T;
            }
            r.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            i = T;
          }
          r();
        }
      } catch (T) {
        if (T && i && typeof T.stack == "string") {
          for (var s = T.stack.split(`
`), E = i.stack.split(`
`), y = s.length - 1, m = E.length - 1; y >= 1 && m >= 0 && s[y] !== E[m]; )
            m--;
          for (; y >= 1 && m >= 0; y--, m--)
            if (s[y] !== E[m]) {
              if (y !== 1 || m !== 1)
                do
                  if (y--, m--, m < 0 || s[y] !== E[m]) {
                    var j = `
` + s[y].replace(" at new ", " at ");
                    return r.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", r.displayName)), typeof r == "function" && W.set(r, j), j;
                  }
                while (y >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = d, Ur(), Error.prepareStackTrace = l;
      }
      var D = r ? r.displayName || r.name : "", jr = D ? N(D) : "";
      return typeof r == "function" && W.set(r, jr), jr;
    }
    function qr(r, e, t) {
      return lr(r, !1);
    }
    function zr(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function $(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return lr(r, zr(r));
      if (typeof r == "string")
        return N(r);
      switch (r) {
        case R:
          return N("Suspense");
        case h:
          return N("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            return qr(r.render);
          case O:
            return $(r.type, e, t);
          case P: {
            var i = r, l = i._payload, d = i._init;
            try {
              return $(d(l), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, cr = {}, dr = C.ReactDebugCurrentFrame;
    function L(r) {
      if (r) {
        var e = r._owner, t = $(r.type, r._source, e ? e.type : null);
        dr.setExtraStackFrame(t);
      } else
        dr.setExtraStackFrame(null);
    }
    function Jr(r, e, t, i, l) {
      {
        var d = Function.call.bind(Y);
        for (var f in r)
          if (d(r, f)) {
            var s = void 0;
            try {
              if (typeof r[f] != "function") {
                var E = Error((i || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              s = r[f](e, f, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              s = y;
            }
            s && !(s instanceof Error) && (L(l), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, f, typeof s), L(null)), s instanceof Error && !(s.message in cr) && (cr[s.message] = !0, L(l), _("Failed %s type: %s", t, s.message), L(null));
          }
      }
    }
    var Gr = Array.isArray;
    function z(r) {
      return Gr(r);
    }
    function Kr(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Hr(r) {
      try {
        return vr(r), !1;
      } catch {
        return !0;
      }
    }
    function vr(r) {
      return "" + r;
    }
    function pr(r) {
      if (Hr(r))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kr(r)), vr(r);
    }
    var A = C.ReactCurrentOwner, Xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yr, mr, J;
    J = {};
    function Zr(r) {
      if (Y.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Qr(r) {
      if (Y.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function re(r, e) {
      if (typeof r.ref == "string" && A.current && e && A.current.stateNode !== e) {
        var t = x(A.current.type);
        J[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(A.current.type), r.ref), J[t] = !0);
      }
    }
    function ee(r, e) {
      {
        var t = function() {
          yr || (yr = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function te(r, e) {
      {
        var t = function() {
          mr || (mr = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ae = function(r, e, t, i, l, d, f) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function ne(r, e, t, i, l) {
      {
        var d, f = {}, s = null, E = null;
        t !== void 0 && (pr(t), s = "" + t), Qr(e) && (pr(e.key), s = "" + e.key), Zr(e) && (E = e.ref, re(e, l));
        for (d in e)
          Y.call(e, d) && !Xr.hasOwnProperty(d) && (f[d] = e[d]);
        if (r && r.defaultProps) {
          var y = r.defaultProps;
          for (d in y)
            f[d] === void 0 && (f[d] = y[d]);
        }
        if (s || E) {
          var m = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          s && ee(f, m), E && te(f, m);
        }
        return ae(r, s, E, l, i, A.current, f);
      }
    }
    var G = C.ReactCurrentOwner, br = C.ReactDebugCurrentFrame;
    function S(r) {
      if (r) {
        var e = r._owner, t = $(r.type, r._source, e ? e.type : null);
        br.setExtraStackFrame(t);
      } else
        br.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function H(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function gr() {
      {
        if (G.current) {
          var r = x(G.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function oe(r) {
      {
        if (r !== void 0) {
          var e = r.fileName.replace(/^.*[\\\/]/, ""), t = r.lineNumber;
          return `

Check your code at ` + e + ":" + t + ".";
        }
        return "";
      }
    }
    var hr = {};
    function ie(r) {
      {
        var e = gr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function _r(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = ie(e);
        if (hr[t])
          return;
        hr[t] = !0;
        var i = "";
        r && r._owner && r._owner !== G.current && (i = " It was passed a child from " + x(r._owner.type) + "."), S(r), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), S(null);
      }
    }
    function Er(r, e) {
      {
        if (typeof r != "object")
          return;
        if (z(r))
          for (var t = 0; t < r.length; t++) {
            var i = r[t];
            H(i) && _r(i, e);
          }
        else if (H(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var l = Ar(r);
          if (typeof l == "function" && l !== r.entries)
            for (var d = l.call(r), f; !(f = d.next()).done; )
              H(f.value) && _r(f.value, e);
        }
      }
    }
    function ue(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === O))
          t = e.propTypes;
        else
          return;
        if (t) {
          var i = x(e);
          Jr(t, r.props, "prop", i, r);
        } else if (e.PropTypes !== void 0 && !K) {
          K = !0;
          var l = x(e);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function se(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var i = e[t];
          if (i !== "children" && i !== "key") {
            S(r), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), S(null);
            break;
          }
        }
        r.ref !== null && (S(r), _("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
      }
    }
    function Rr(r, e, t, i, l, d) {
      {
        var f = Yr(r);
        if (!f) {
          var s = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = oe(l);
          E ? s += E : s += gr();
          var y;
          r === null ? y = "null" : z(r) ? y = "array" : r !== void 0 && r.$$typeof === n ? (y = "<" + (x(r.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : y = typeof r, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, s);
        }
        var m = ne(r, e, t, l, d);
        if (m == null)
          return m;
        if (f) {
          var j = e.children;
          if (j !== void 0)
            if (i)
              if (z(j)) {
                for (var D = 0; D < j.length; D++)
                  Er(j[D], r);
                Object.freeze && Object.freeze(j);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Er(j, r);
        }
        return r === o ? se(m) : ue(m), m;
      }
    }
    function fe(r, e, t) {
      return Rr(r, e, t, !0);
    }
    function le(r, e, t) {
      return Rr(r, e, t, !1);
    }
    var ce = le, de = fe;
    F.Fragment = o, F.jsx = ce, F.jsxs = de;
  }()), F;
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
var xr;
function pe() {
  if (xr)
    return V;
  xr = 1;
  var a = Z, n = Symbol.for("react.element"), u = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(g, c, R) {
    var h, O = {}, P = null, I = null;
    R !== void 0 && (P = "" + R), c.key !== void 0 && (P = "" + c.key), c.ref !== void 0 && (I = c.ref);
    for (h in c)
      o.call(c, h) && !p.hasOwnProperty(h) && (O[h] = c[h]);
    if (g && g.defaultProps)
      for (h in c = g.defaultProps, c)
        O[h] === void 0 && (O[h] = c[h]);
    return { $$typeof: n, type: g, key: P, ref: I, props: O, _owner: v.current };
  }
  return V.Fragment = u, V.jsx = b, V.jsxs = b, V;
}
process.env.NODE_ENV === "production" ? X.exports = pe() : X.exports = ve();
var M = X.exports;
function ye(a, n) {
  if (typeof a != "object" || a === null)
    return a;
  var u = a[Symbol.toPrimitive];
  if (u !== void 0) {
    var o = u.call(a, n || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(a);
}
function me(a) {
  var n = ye(a, "string");
  return typeof n == "symbol" ? n : String(n);
}
function be(a, n, u) {
  return n = me(n), n in a ? Object.defineProperty(a, n, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[n] = u, a;
}
function Tr(a, n) {
  var u = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(a);
    n && (o = o.filter(function(v) {
      return Object.getOwnPropertyDescriptor(a, v).enumerable;
    })), u.push.apply(u, o);
  }
  return u;
}
function Pr(a) {
  for (var n = 1; n < arguments.length; n++) {
    var u = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Tr(Object(u), !0).forEach(function(o) {
      be(a, o, u[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : Tr(Object(u)).forEach(function(o) {
      Object.defineProperty(a, o, Object.getOwnPropertyDescriptor(u, o));
    });
  }
  return a;
}
function wr(a, n) {
  var u = {};
  for (var o in a)
    u[o] = n(a[o], o);
  return u;
}
var ge = (a, n, u) => {
  for (var o of Object.keys(a)) {
    var v;
    if (a[o] !== ((v = n[o]) !== null && v !== void 0 ? v : u[o]))
      return !1;
  }
  return !0;
}, he = (a) => {
  var n = (u) => {
    var o = a.defaultClassName, v = Pr(Pr({}, a.defaultVariants), u);
    for (var p in v) {
      var b, g = (b = v[p]) !== null && b !== void 0 ? b : a.defaultVariants[p];
      if (g != null) {
        var c = g;
        typeof c == "boolean" && (c = c === !0 ? "true" : "false");
        var R = (
          // @ts-expect-error
          a.variantClassNames[p][c]
        );
        R && (o += " " + R);
      }
    }
    for (var [h, O] of a.compoundVariants)
      ge(h, v, a.defaultVariants) && (o += " " + O);
    return o;
  };
  return n.variants = () => Object.keys(a.variantClassNames), n.classNames = {
    get base() {
      return a.defaultClassName.split(" ")[0];
    },
    get variants() {
      return wr(a.variantClassNames, (u) => wr(u, (o) => o.split(" ")[0]));
    }
  }, n;
}, _e = he({ defaultClassName: "_9f5xaf2", variantClassNames: { buttonVariant: { primary: "_9f5xaf3", secondary: "_9f5xaf4", tertiary: "_9f5xaf5", disabled: "_9f5xaf6", danger: "_9f5xaf7", warning: "_9f5xaf8", success: "_9f5xaf9", info: "_9f5xafa" }, size: { s: "_9f5xafb", m: "_9f5xafc", l: "_9f5xafd" }, hoveredAnimation: { true: "_9f5xafe", false: "_9f5xaff", none: "_9f5xafg" }, paddingVariant: { s: "_9f5xafh", m: "_9f5xafi", l: "_9f5xafj", none: "_9f5xafk" } }, defaultVariants: {}, compoundVariants: [] });
const Ee = (a) => {
  const [n, u] = Sr(null), {
    label: o,
    sizeVariant: v,
    backgroundVariant: p,
    className: b,
    icon: g,
    paddingVariant: c = "m",
    ...R
  } = a;
  return /* @__PURE__ */ M.jsxs(
    "button",
    {
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      ...R,
      className: `${_e({
        size: v,
        buttonVariant: p,
        hoveredAnimation: n ?? "none",
        paddingVariant: c
      })} 
        ${b || ""}`,
      children: [
        g,
        o
      ]
    }
  );
}, Se = (a) => /* @__PURE__ */ M.jsx(Ee, { ...a });
function Cr(a) {
  var n = a.match(/^var\((.*)\)$/);
  return n ? n[1] : a;
}
function Re(a, n) {
  var u = a;
  for (var o of n) {
    if (!(o in u))
      throw new Error("Path ".concat(n.join(" -> "), " does not exist in object"));
    u = u[o];
  }
  return u;
}
function Dr(a, n) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], o = a.constructor();
  for (var v in a) {
    var p = a[v], b = [...u, v];
    typeof p == "string" || typeof p == "number" || p == null ? o[v] = n(p, b) : typeof p == "object" && !Array.isArray(p) ? o[v] = Dr(p, n, b) : console.warn('Skipping invalid key "'.concat(b.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(p) ? "Array" : typeof p, '"'));
  }
  return o;
}
function je(a, n) {
  var u = {};
  if (typeof n == "object") {
    var o = a;
    Dr(n, (g, c) => {
      if (g != null) {
        var R = Re(o, c);
        u[Cr(R)] = String(g);
      }
    });
  } else {
    var v = a;
    for (var p in v) {
      var b = v[p];
      b != null && (u[Cr(p)] = b);
    }
  }
  return Object.defineProperty(u, "toString", {
    value: function() {
      return Object.keys(this).map((c) => "".concat(c, ":").concat(this[c])).join(";");
    },
    writable: !1
  }), u;
}
var Oe = "_1fyyjlab", xe = "_1fyyjlaa", Te = { color: { brand: "var(--_1fyyjla0)", backgroundColor: "var(--_1fyyjla1)", background: { primary: "var(--_1fyyjla2)", primaryDark: "var(--_1fyyjla3)", secondary: "var(--_1fyyjla4)", danger: "var(--_1fyyjla5)", dangerDark: "var(--_1fyyjla6)" }, text: { primary: "var(--_1fyyjla7)", secondary: "var(--_1fyyjla8)" } }, font: { body: "var(--_1fyyjla9)" } };
const Pe = {
  color: {
    brand: "",
    backgroundColor: "#FDF8E7",
    background: {
      primary: "#007EC9",
      primaryDark: "#0067A3",
      secondary: "#00A4A7",
      danger: "#D94045",
      dangerDark: "#C83A3F"
    },
    text: {
      primary: "#FBF7FF",
      secondary: ""
    }
  },
  font: {
    body: ""
  }
}, we = Z.createContext({}), De = ({ children: a }) => {
  const [n, u] = Sr("light"), o = n === "light", v = () => u(o ? "dark" : "light");
  return /* @__PURE__ */ M.jsx(we.Provider, { value: { themeMode: n, toggleTheme: v }, children: /* @__PURE__ */ M.jsx(
    "div",
    {
      className: o ? xe : Oe,
      style: je(Te, Pe),
      children: a
    }
  ) });
};
export {
  Ee as Button,
  Se as RoundButton,
  De as ThemeProvider
};
//# sourceMappingURL=azulgato-ui.es.js.map
