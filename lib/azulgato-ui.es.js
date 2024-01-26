import * as P from "react";
import ye, { useState as Y, createContext as Nt, useMemo as at, createElement as E, useContext as vn, useCallback as pe, forwardRef as X, Children as bt, isValidElement as Dt, cloneElement as wr, Fragment as Wt, useEffect as re, useRef as se, useLayoutEffect as xr } from "react";
import * as Go from "react-dom";
import qo, { flushSync as Xo, createPortal as $r } from "react-dom";
var sn = { exports: {} }, mt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function Zo() {
  return Bn || (Bn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ye, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, f = "@@iterator";
    function b(l) {
      if (l === null || typeof l != "object")
        return null;
      var x = v && l[v] || l[f];
      return typeof x == "function" ? x : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(l) {
      {
        for (var x = arguments.length, C = new Array(x > 1 ? x - 1 : 0), N = 1; N < x; N++)
          C[N - 1] = arguments[N];
        w("error", l, C);
      }
    }
    function w(l, x, C) {
      {
        var N = g.ReactDebugCurrentFrame, U = N.getStackAddendum();
        U !== "" && (x += "%s", C = C.concat([U]));
        var J = C.map(function(F) {
          return String(F);
        });
        J.unshift("Warning: " + x), Function.prototype.apply.call(console[l], console, J);
      }
    }
    var $ = !1, S = !1, A = !1, T = !1, R = !1, L;
    L = Symbol.for("react.module.reference");
    function Z(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === i || R || l === o || l === u || l === p || T || l === m || $ || S || A || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === d || l.$$typeof === a || l.$$typeof === s || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === L || l.getModuleId !== void 0));
    }
    function z(l, x, C) {
      var N = l.displayName;
      if (N)
        return N;
      var U = x.displayName || x.name || "";
      return U !== "" ? C + "(" + U + ")" : C;
    }
    function _(l) {
      return l.displayName || "Context";
    }
    function B(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case s:
            var x = l;
            return _(x) + ".Consumer";
          case a:
            var C = l;
            return _(C._context) + ".Provider";
          case c:
            return z(l, l.render, "ForwardRef");
          case d:
            var N = l.displayName || null;
            return N !== null ? N : B(l.type) || "Memo";
          case y: {
            var U = l, J = U._payload, F = U._init;
            try {
              return B(F(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, M = 0, k, V, te, ie, Ee, ue, be;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function _e() {
      {
        if (M === 0) {
          k = console.log, V = console.info, te = console.warn, ie = console.error, Ee = console.group, ue = console.groupCollapsed, be = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        M++;
      }
    }
    function Pe() {
      {
        if (M--, M === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, l, {
              value: k
            }),
            info: O({}, l, {
              value: V
            }),
            warn: O({}, l, {
              value: te
            }),
            error: O({}, l, {
              value: ie
            }),
            group: O({}, l, {
              value: Ee
            }),
            groupCollapsed: O({}, l, {
              value: ue
            }),
            groupEnd: O({}, l, {
              value: be
            })
          });
        }
        M < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = g.ReactCurrentDispatcher, I;
    function K(l, x, C) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (U) {
            var N = U.stack.trim().match(/\n( *(at )?)/);
            I = N && N[1] || "";
          }
        return `
` + I + l;
      }
    }
    var ne = !1, G;
    {
      var q = typeof WeakMap == "function" ? WeakMap : Map;
      G = new q();
    }
    function H(l, x) {
      if (!l || ne)
        return "";
      {
        var C = G.get(l);
        if (C !== void 0)
          return C;
      }
      var N;
      ne = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = fe.current, fe.current = null, _e();
      try {
        if (x) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (Ie) {
              N = Ie;
            }
            Reflect.construct(l, [], F);
          } else {
            try {
              F.call();
            } catch (Ie) {
              N = Ie;
            }
            l.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            N = Ie;
          }
          l();
        }
      } catch (Ie) {
        if (Ie && N && typeof Ie.stack == "string") {
          for (var j = Ie.stack.split(`
`), ve = N.stack.split(`
`), oe = j.length - 1, ae = ve.length - 1; oe >= 1 && ae >= 0 && j[oe] !== ve[ae]; )
            ae--;
          for (; oe >= 1 && ae >= 0; oe--, ae--)
            if (j[oe] !== ve[ae]) {
              if (oe !== 1 || ae !== 1)
                do
                  if (oe--, ae--, ae < 0 || j[oe] !== ve[ae]) {
                    var $e = `
` + j[oe].replace(" at new ", " at ");
                    return l.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", l.displayName)), typeof l == "function" && G.set(l, $e), $e;
                  }
                while (oe >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        ne = !1, fe.current = J, Pe(), Error.prepareStackTrace = U;
      }
      var tt = l ? l.displayName || l.name : "", Wn = tt ? K(tt) : "";
      return typeof l == "function" && G.set(l, Wn), Wn;
    }
    function me(l, x, C) {
      return H(l, !1);
    }
    function he(l) {
      var x = l.prototype;
      return !!(x && x.isReactComponent);
    }
    function ge(l, x, C) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return H(l, he(l));
      if (typeof l == "string")
        return K(l);
      switch (l) {
        case u:
          return K("Suspense");
        case p:
          return K("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return me(l.render);
          case d:
            return ge(l.type, x, C);
          case y: {
            var N = l, U = N._payload, J = N._init;
            try {
              return ge(J(U), x, C);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, Be = {}, St = g.ReactDebugCurrentFrame;
    function Je(l) {
      if (l) {
        var x = l._owner, C = ge(l.type, l._source, x ? x.type : null);
        St.setExtraStackFrame(C);
      } else
        St.setExtraStackFrame(null);
    }
    function Gt(l, x, C, N, U) {
      {
        var J = Function.call.bind(Re);
        for (var F in l)
          if (J(l, F)) {
            var j = void 0;
            try {
              if (typeof l[F] != "function") {
                var ve = Error((N || "React class") + ": " + C + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              j = l[F](x, F, N, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              j = oe;
            }
            j && !(j instanceof Error) && (Je(U), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", C, F, typeof j), Je(null)), j instanceof Error && !(j.message in Be) && (Be[j.message] = !0, Je(U), h("Failed %s type: %s", C, j.message), Je(null));
          }
      }
    }
    var Qe = Array.isArray;
    function qt(l) {
      return Qe(l);
    }
    function Oo(l) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, C = x && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return C;
      }
    }
    function Ao(l) {
      try {
        return On(l), !1;
      } catch {
        return !0;
      }
    }
    function On(l) {
      return "" + l;
    }
    function An(l) {
      if (Ao(l))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Oo(l)), On(l);
    }
    var pt = g.ReactCurrentOwner, ko = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, kn, In, Xt;
    Xt = {};
    function Io(l) {
      if (Re.call(l, "ref")) {
        var x = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function No(l) {
      if (Re.call(l, "key")) {
        var x = Object.getOwnPropertyDescriptor(l, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Do(l, x) {
      if (typeof l.ref == "string" && pt.current && x && pt.current.stateNode !== x) {
        var C = B(pt.current.type);
        Xt[C] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(pt.current.type), l.ref), Xt[C] = !0);
      }
    }
    function Mo(l, x) {
      {
        var C = function() {
          kn || (kn = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        C.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Lo(l, x) {
      {
        var C = function() {
          In || (In = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        C.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var jo = function(l, x, C, N, U, J, F) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: x,
        ref: C,
        props: F,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Fo(l, x, C, N, U) {
      {
        var J, F = {}, j = null, ve = null;
        C !== void 0 && (An(C), j = "" + C), No(x) && (An(x.key), j = "" + x.key), Io(x) && (ve = x.ref, Do(x, U));
        for (J in x)
          Re.call(x, J) && !ko.hasOwnProperty(J) && (F[J] = x[J]);
        if (l && l.defaultProps) {
          var oe = l.defaultProps;
          for (J in oe)
            F[J] === void 0 && (F[J] = oe[J]);
        }
        if (j || ve) {
          var ae = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          j && Mo(F, ae), ve && Lo(F, ae);
        }
        return jo(l, j, ve, U, N, pt.current, F);
      }
    }
    var Zt = g.ReactCurrentOwner, Nn = g.ReactDebugCurrentFrame;
    function et(l) {
      if (l) {
        var x = l._owner, C = ge(l.type, l._source, x ? x.type : null);
        Nn.setExtraStackFrame(C);
      } else
        Nn.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function Qt(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function Dn() {
      {
        if (Zt.current) {
          var l = B(Zt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Wo(l) {
      {
        if (l !== void 0) {
          var x = l.fileName.replace(/^.*[\\\/]/, ""), C = l.lineNumber;
          return `

Check your code at ` + x + ":" + C + ".";
        }
        return "";
      }
    }
    var Mn = {};
    function Bo(l) {
      {
        var x = Dn();
        if (!x) {
          var C = typeof l == "string" ? l : l.displayName || l.name;
          C && (x = `

Check the top-level render call using <` + C + ">.");
        }
        return x;
      }
    }
    function Ln(l, x) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var C = Bo(x);
        if (Mn[C])
          return;
        Mn[C] = !0;
        var N = "";
        l && l._owner && l._owner !== Zt.current && (N = " It was passed a child from " + B(l._owner.type) + "."), et(l), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, N), et(null);
      }
    }
    function jn(l, x) {
      {
        if (typeof l != "object")
          return;
        if (qt(l))
          for (var C = 0; C < l.length; C++) {
            var N = l[C];
            Qt(N) && Ln(N, x);
          }
        else if (Qt(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var U = b(l);
          if (typeof U == "function" && U !== l.entries)
            for (var J = U.call(l), F; !(F = J.next()).done; )
              Qt(F.value) && Ln(F.value, x);
        }
      }
    }
    function Vo(l) {
      {
        var x = l.type;
        if (x == null || typeof x == "string")
          return;
        var C;
        if (typeof x == "function")
          C = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === d))
          C = x.propTypes;
        else
          return;
        if (C) {
          var N = B(x);
          Gt(C, l.props, "prop", N, l);
        } else if (x.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var U = B(x);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zo(l) {
      {
        for (var x = Object.keys(l.props), C = 0; C < x.length; C++) {
          var N = x[C];
          if (N !== "children" && N !== "key") {
            et(l), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), et(null);
            break;
          }
        }
        l.ref !== null && (et(l), h("Invalid attribute `ref` supplied to `React.Fragment`."), et(null));
      }
    }
    function Fn(l, x, C, N, U, J) {
      {
        var F = Z(l);
        if (!F) {
          var j = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Wo(U);
          ve ? j += ve : j += Dn();
          var oe;
          l === null ? oe = "null" : qt(l) ? oe = "array" : l !== void 0 && l.$$typeof === t ? (oe = "<" + (B(l.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof l, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, j);
        }
        var ae = Fo(l, x, C, U, J);
        if (ae == null)
          return ae;
        if (F) {
          var $e = x.children;
          if ($e !== void 0)
            if (N)
              if (qt($e)) {
                for (var tt = 0; tt < $e.length; tt++)
                  jn($e[tt], l);
                Object.freeze && Object.freeze($e);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jn($e, l);
        }
        return l === r ? zo(ae) : Vo(ae), ae;
      }
    }
    function Ho(l, x, C) {
      return Fn(l, x, C, !0);
    }
    function Uo(l, x, C) {
      return Fn(l, x, C, !1);
    }
    var Yo = Uo, Ko = Ho;
    mt.Fragment = r, mt.jsx = Yo, mt.jsxs = Ko;
  }()), mt;
}
var ht = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Jo() {
  if (Vn)
    return ht;
  Vn = 1;
  var e = ye, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, u) {
    var p, d = {}, y = null, m = null;
    u !== void 0 && (y = "" + u), c.key !== void 0 && (y = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (p in c)
      r.call(c, p) && !i.hasOwnProperty(p) && (d[p] = c[p]);
    if (s && s.defaultProps)
      for (p in c = s.defaultProps, c)
        d[p] === void 0 && (d[p] = c[p]);
    return { $$typeof: t, type: s, key: y, ref: m, props: d, _owner: o.current };
  }
  return ht.Fragment = n, ht.jsx = a, ht.jsxs = a, ht;
}
process.env.NODE_ENV === "production" ? sn.exports = Jo() : sn.exports = Zo();
var ee = sn.exports;
function Qo(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ei(e) {
  var t = Qo(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function ti(e, t, n) {
  return t = ei(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function zn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Hn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zn(Object(n), !0).forEach(function(r) {
      ti(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Un(e, t) {
  var n = {};
  for (var r in e)
    n[r] = t(e[r], r);
  return n;
}
var ni = (e, t, n) => {
  for (var r of Object.keys(e)) {
    var o;
    if (e[r] !== ((o = t[r]) !== null && o !== void 0 ? o : n[r]))
      return !1;
  }
  return !0;
}, ri = (e) => {
  var t = (n) => {
    var r = e.defaultClassName, o = Hn(Hn({}, e.defaultVariants), n);
    for (var i in o) {
      var a, s = (a = o[i]) !== null && a !== void 0 ? a : e.defaultVariants[i];
      if (s != null) {
        var c = s;
        typeof c == "boolean" && (c = c === !0 ? "true" : "false");
        var u = (
          // @ts-expect-error
          e.variantClassNames[i][c]
        );
        u && (r += " " + u);
      }
    }
    for (var [p, d] of e.compoundVariants)
      ni(p, o, e.defaultVariants) && (r += " " + d);
    return r;
  };
  return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
    get base() {
      return e.defaultClassName.split(" ")[0];
    },
    get variants() {
      return Un(e.variantClassNames, (n) => Un(n, (r) => r.split(" ")[0]));
    }
  }, t;
}, oi = ri({ defaultClassName: "_9f5xaf0", variantClassNames: { buttonVariant: { primary: "_9f5xaf1", secondary: "_9f5xaf2", tertiary: "_9f5xaf3", disabled: "_9f5xaf4", danger: "_9f5xaf5", warning: "_9f5xaf6", success: "_9f5xaf7", info: "_9f5xaf8" }, size: { s: "_9f5xaf9", m: "_9f5xafa", l: "_9f5xafb" }, hoveredAnimation: { true: "_9f5xafc", false: "_9f5xafd", none: "_9f5xafe" }, paddingVariant: { s: "_9f5xaff", m: "_9f5xafg", l: "_9f5xafh", none: "_9f5xafi" } }, defaultVariants: {}, compoundVariants: [] });
const ii = (e) => {
  const [t, n] = Y(null), {
    label: r,
    sizeVariant: o,
    backgroundVariant: i,
    className: a,
    icon: s,
    paddingVariant: c = "m",
    ...u
  } = e;
  return /* @__PURE__ */ ee.jsxs(
    "button",
    {
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      ...u,
      className: `${oi({
        size: o,
        buttonVariant: i,
        hoveredAnimation: t ?? "none",
        paddingVariant: c
      })} 
        ${a || ""}`,
      children: [
        s,
        r
      ]
    }
  );
}, il = (e) => /* @__PURE__ */ ee.jsx(ii, { ...e });
function Yn(e) {
  var t = e.match(/^var\((.*)\)$/);
  return t ? t[1] : e;
}
function ai(e, t) {
  var n = e;
  for (var r of t) {
    if (!(r in n))
      throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
    n = n[r];
  }
  return n;
}
function Sr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], r = e.constructor();
  for (var o in e) {
    var i = e[o], a = [...n, o];
    typeof i == "string" || typeof i == "number" || i == null ? r[o] = t(i, a) : typeof i == "object" && !Array.isArray(i) ? r[o] = Sr(i, t, a) : console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(i) ? "Array" : typeof i, '"'));
  }
  return r;
}
function si(e, t) {
  var n = {};
  if (typeof t == "object") {
    var r = e;
    Sr(t, (s, c) => {
      if (s != null) {
        var u = ai(r, c);
        n[Yn(u)] = String(s);
      }
    });
  } else {
    var o = e;
    for (var i in o) {
      var a = o[i];
      a != null && (n[Yn(i)] = a);
    }
  }
  return Object.defineProperty(n, "toString", {
    value: function() {
      return Object.keys(this).map((c) => "".concat(c, ":").concat(this[c])).join(";");
    },
    writable: !1
  }), n;
}
var ci = "_1fyyjlaf", li = "_1fyyjlae", ui = { color: { brand: "var(--_1fyyjla0)", backgroundColor: "var(--_1fyyjla1)", background: { primaryLight: "var(--_1fyyjla2)", primary: "var(--_1fyyjla3)", primaryDark: "var(--_1fyyjla4)", secondary: "var(--_1fyyjla5)", danger: "var(--_1fyyjla6)", dangerDark: "var(--_1fyyjla7)" }, text: { primary: "var(--_1fyyjla8)", secondary: "var(--_1fyyjla9)" } }, radius: { lg: "var(--_1fyyjlaa)", md: "var(--_1fyyjlab)", sm: "var(--_1fyyjlac)" }, font: { body: "var(--_1fyyjlad)" } };
const di = {
  color: {
    brand: "",
    backgroundColor: "#FDF8E7",
    background: {
      primaryLight: "#00A1D9",
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
  radius: {
    lg: "50px",
    md: "25px",
    sm: "15px"
  },
  font: {
    body: ""
  }
};
var fi = "vjg68i0";
const pi = ye.createContext({}), al = ({ children: e }) => {
  const [t, n] = Y("light"), r = t === "light", o = () => n(r ? "dark" : "light");
  return /* @__PURE__ */ ee.jsx(pi.Provider, { value: { themeMode: t, toggleTheme: o }, children: /* @__PURE__ */ ee.jsx(
    "div",
    {
      className: `${r ? li : ci} ${fi}`,
      style: si(ui, di),
      children: e
    }
  ) });
};
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, W.apply(this, arguments);
}
function Kn(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function le(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Bt(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = /* @__PURE__ */ Nt(a), c = n.length;
    n = [
      ...n,
      a
    ];
    function u(d) {
      const { scope: y, children: m, ...v } = d, f = (y == null ? void 0 : y[e][c]) || s, b = at(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ E(f.Provider, {
        value: b
      }, m);
    }
    function p(d, y) {
      const m = (y == null ? void 0 : y[e][c]) || s, v = vn(m);
      if (v)
        return v;
      if (a !== void 0)
        return a;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [
      u,
      p
    ];
  }
  const o = () => {
    const i = n.map((a) => /* @__PURE__ */ Nt(a));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || i;
      return at(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: c
          }
        }),
        [
          s,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    mi(o, ...t)
  ];
}
function mi(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(i) {
      const a = r.reduce((s, { useScope: c, scopeName: u }) => {
        const d = c(i)[`__scope${u}`];
        return {
          ...s,
          ...d
        };
      }, {});
      return at(
        () => ({
          [`__scope${t.scopeName}`]: a
        }),
        [
          a
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function hi(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Cr(...e) {
  return (t) => e.forEach(
    (n) => hi(n, t)
  );
}
function de(...e) {
  return pe(Cr(...e), e);
}
const yt = /* @__PURE__ */ X((e, t) => {
  const { children: n, ...r } = e, o = bt.toArray(n), i = o.find(gi);
  if (i) {
    const a = i.props.children, s = o.map((c) => c === i ? bt.count(a) > 1 ? bt.only(null) : /* @__PURE__ */ Dt(a) ? a.props.children : null : c);
    return /* @__PURE__ */ E(cn, W({}, r, {
      ref: t
    }), /* @__PURE__ */ Dt(a) ? /* @__PURE__ */ wr(a, void 0, s) : null);
  }
  return /* @__PURE__ */ E(cn, W({}, r, {
    ref: t
  }), n);
});
yt.displayName = "Slot";
const cn = /* @__PURE__ */ X((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Dt(n) ? /* @__PURE__ */ wr(n, {
    ...bi(r, n.props),
    ref: t ? Cr(t, n.ref) : n.ref
  }) : bt.count(n) > 1 ? bt.only(null) : null;
});
cn.displayName = "SlotClone";
const vi = ({ children: e }) => /* @__PURE__ */ E(Wt, null, e);
function gi(e) {
  return /* @__PURE__ */ Dt(e) && e.type === vi;
}
function bi(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      i(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...i
    } : r === "className" && (n[r] = [
      o,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function yi(e) {
  const t = e + "CollectionProvider", [n, r] = Bt(t), [o, i] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), a = (m) => {
    const { scope: v, children: f } = m, b = ye.useRef(null), g = ye.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ ye.createElement(o, {
      scope: v,
      itemMap: g,
      collectionRef: b
    }, f);
  }, s = e + "CollectionSlot", c = /* @__PURE__ */ ye.forwardRef((m, v) => {
    const { scope: f, children: b } = m, g = i(s, f), h = de(v, g.collectionRef);
    return /* @__PURE__ */ ye.createElement(yt, {
      ref: h
    }, b);
  }), u = e + "CollectionItemSlot", p = "data-radix-collection-item", d = /* @__PURE__ */ ye.forwardRef((m, v) => {
    const { scope: f, children: b, ...g } = m, h = ye.useRef(null), w = de(v, h), $ = i(u, f);
    return ye.useEffect(() => ($.itemMap.set(h, {
      ref: h,
      ...g
    }), () => void $.itemMap.delete(h))), /* @__PURE__ */ ye.createElement(yt, {
      [p]: "",
      ref: w
    }, b);
  });
  function y(m) {
    const v = i(e + "CollectionConsumer", m);
    return ye.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b)
        return [];
      const g = Array.from(b.querySelectorAll(`[${p}]`));
      return Array.from(v.itemMap.values()).sort(
        ($, S) => g.indexOf($.ref.current) - g.indexOf(S.ref.current)
      );
    }, [
      v.collectionRef,
      v.itemMap
    ]);
  }
  return [
    {
      Provider: a,
      Slot: c,
      ItemSlot: d
    },
    y,
    r
  ];
}
const wi = /* @__PURE__ */ Nt(void 0);
function xi(e) {
  const t = vn(wi);
  return e || t || "ltr";
}
const $i = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ce = $i.reduce((e, t) => {
  const n = /* @__PURE__ */ X((r, o) => {
    const { asChild: i, ...a } = r, s = i ? yt : t;
    return re(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ E(s, W({}, a, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Si(e, t) {
  e && Xo(
    () => e.dispatchEvent(t)
  );
}
function Me(e) {
  const t = se(e);
  return re(() => {
    t.current = e;
  }), at(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Ci(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e);
  re(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const ln = "dismissableLayer.update", Ei = "dismissableLayer.pointerDownOutside", Pi = "dismissableLayer.focusOutside";
let Gn;
const Ri = /* @__PURE__ */ Nt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _i = /* @__PURE__ */ X((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: s, onDismiss: c, ...u } = e, p = vn(Ri), [d, y] = Y(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = Y({}), f = de(
    t,
    (R) => y(R)
  ), b = Array.from(p.layers), [g] = [
    ...p.layersWithOutsidePointerEventsDisabled
  ].slice(-1), h = b.indexOf(g), w = d ? b.indexOf(d) : -1, $ = p.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= h, A = Ti((R) => {
    const L = R.target, Z = [
      ...p.branches
    ].some(
      (z) => z.contains(L)
    );
    !S || Z || (i == null || i(R), s == null || s(R), R.defaultPrevented || c == null || c());
  }, m), T = Oi((R) => {
    const L = R.target;
    [
      ...p.branches
    ].some(
      (z) => z.contains(L)
    ) || (a == null || a(R), s == null || s(R), R.defaultPrevented || c == null || c());
  }, m);
  return Ci((R) => {
    w === p.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
  }, m), re(() => {
    if (d)
      return r && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Gn = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(d)), p.layers.add(d), qn(), () => {
        r && p.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Gn);
      };
  }, [
    d,
    m,
    r,
    p
  ]), re(() => () => {
    d && (p.layers.delete(d), p.layersWithOutsidePointerEventsDisabled.delete(d), qn());
  }, [
    d,
    p
  ]), re(() => {
    const R = () => v({});
    return document.addEventListener(ln, R), () => document.removeEventListener(ln, R);
  }, []), /* @__PURE__ */ E(ce.div, W({}, u, {
    ref: f,
    style: {
      pointerEvents: $ ? S ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: le(e.onFocusCapture, T.onFocusCapture),
    onBlurCapture: le(e.onBlurCapture, T.onBlurCapture),
    onPointerDownCapture: le(e.onPointerDownCapture, A.onPointerDownCapture)
  }));
});
function Ti(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e), r = se(!1), o = se(() => {
  });
  return re(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let u = function() {
          Er(Ei, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
          once: !0
        })) : u();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Oi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e), r = se(!1);
  return re(() => {
    const o = (i) => {
      i.target && !r.current && Er(Pi, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function qn() {
  const e = new CustomEvent(ln);
  document.dispatchEvent(e);
}
function Er(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Si(o, i) : o.dispatchEvent(i);
}
let en = 0;
function Ai() {
  re(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Xn()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Xn()), en++, () => {
      en === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), en--;
    };
  }, []);
}
function Xn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const tn = "focusScope.autoFocusOnMount", nn = "focusScope.autoFocusOnUnmount", Zn = {
  bubbles: !1,
  cancelable: !0
}, ki = /* @__PURE__ */ X((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...a } = e, [s, c] = Y(null), u = Me(o), p = Me(i), d = se(null), y = de(
    t,
    (f) => c(f)
  ), m = se({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  re(() => {
    if (r) {
      let f = function(w) {
        if (m.paused || !s)
          return;
        const $ = w.target;
        s.contains($) ? d.current = $ : He(d.current, {
          select: !0
        });
      }, b = function(w) {
        if (m.paused || !s)
          return;
        const $ = w.relatedTarget;
        $ !== null && (s.contains($) || He(d.current, {
          select: !0
        }));
      }, g = function(w) {
        if (document.activeElement === document.body)
          for (const S of w)
            S.removedNodes.length > 0 && He(s);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", b);
      const h = new MutationObserver(g);
      return s && h.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", b), h.disconnect();
      };
    }
  }, [
    r,
    s,
    m.paused
  ]), re(() => {
    if (s) {
      Qn.add(m);
      const f = document.activeElement;
      if (!s.contains(f)) {
        const g = new CustomEvent(tn, Zn);
        s.addEventListener(tn, u), s.dispatchEvent(g), g.defaultPrevented || (Ii(ji(Pr(s)), {
          select: !0
        }), document.activeElement === f && He(s));
      }
      return () => {
        s.removeEventListener(tn, u), setTimeout(() => {
          const g = new CustomEvent(nn, Zn);
          s.addEventListener(nn, p), s.dispatchEvent(g), g.defaultPrevented || He(f ?? document.body, {
            select: !0
          }), s.removeEventListener(nn, p), Qn.remove(m);
        }, 0);
      };
    }
  }, [
    s,
    u,
    p,
    m
  ]);
  const v = pe((f) => {
    if (!n && !r || m.paused)
      return;
    const b = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, g = document.activeElement;
    if (b && g) {
      const h = f.currentTarget, [w, $] = Ni(h);
      w && $ ? !f.shiftKey && g === $ ? (f.preventDefault(), n && He(w, {
        select: !0
      })) : f.shiftKey && g === w && (f.preventDefault(), n && He($, {
        select: !0
      })) : g === h && f.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ E(ce.div, W({
    tabIndex: -1
  }, a, {
    ref: y,
    onKeyDown: v
  }));
});
function Ii(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (He(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Ni(e) {
  const t = Pr(e), n = Jn(t, e), r = Jn(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Pr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Jn(e, t) {
  for (const n of e)
    if (!Di(n, {
      upTo: t
    }))
      return n;
}
function Di(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Mi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Mi(e) && t && e.select();
  }
}
const Qn = Li();
function Li() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = er(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = er(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function er(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ji(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Se = globalThis != null && globalThis.document ? xr : () => {
}, Fi = P.useId || (() => {
});
let Wi = 0;
function gn(e) {
  const [t, n] = P.useState(Fi());
  return Se(() => {
    e || n(
      (r) => r ?? String(Wi++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Bi = ["top", "right", "bottom", "left"], Ue = Math.min, we = Math.max, Mt = Math.round, Ct = Math.floor, Ye = (e) => ({
  x: e,
  y: e
}), Vi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, zi = {
  start: "end",
  end: "start"
};
function un(e, t, n) {
  return we(e, Ue(t, n));
}
function Le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function je(e) {
  return e.split("-")[0];
}
function lt(e) {
  return e.split("-")[1];
}
function bn(e) {
  return e === "x" ? "y" : "x";
}
function yn(e) {
  return e === "y" ? "height" : "width";
}
function ut(e) {
  return ["top", "bottom"].includes(je(e)) ? "y" : "x";
}
function wn(e) {
  return bn(ut(e));
}
function Hi(e, t, n) {
  n === void 0 && (n = !1);
  const r = lt(e), o = wn(e), i = yn(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Lt(a)), [a, Lt(a)];
}
function Ui(e) {
  const t = Lt(e);
  return [dn(e), t, dn(t)];
}
function dn(e) {
  return e.replace(/start|end/g, (t) => zi[t]);
}
function Yi(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function Ki(e, t, n, r) {
  const o = lt(e);
  let i = Yi(je(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(dn)))), i;
}
function Lt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vi[t]);
}
function Gi(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Rr(e) {
  return typeof e != "number" ? Gi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function jt(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function tr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ut(t), a = wn(t), s = yn(a), c = je(t), u = i === "y", p = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, y = r[s] / 2 - o[s] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (lt(t)) {
    case "start":
      m[a] -= y * (n && u ? -1 : 1);
      break;
    case "end":
      m[a] += y * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const qi = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: d
  } = tr(u, r, c), y = r, m = {}, v = 0;
  for (let f = 0; f < s.length; f++) {
    const {
      name: b,
      fn: g
    } = s[f], {
      x: h,
      y: w,
      data: $,
      reset: S
    } = await g({
      x: p,
      y: d,
      initialPlacement: r,
      placement: y,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (p = h ?? p, d = w ?? d, m = {
      ...m,
      [b]: {
        ...m[b],
        ...$
      }
    }, S && v <= 50) {
      v++, typeof S == "object" && (S.placement && (y = S.placement), S.rects && (u = S.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: p,
        y: d
      } = tr(u, y, c)), f = -1;
      continue;
    }
  }
  return {
    x: p,
    y: d,
    placement: y,
    strategy: o,
    middlewareData: m
  };
};
async function wt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: d = "floating",
    altBoundary: y = !1,
    padding: m = 0
  } = Le(t, e), v = Rr(m), b = s[y ? d === "floating" ? "reference" : "floating" : d], g = jt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: p,
    strategy: c
  })), h = d === "floating" ? {
    ...a.floating,
    x: r,
    y: o
  } : a.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), $ = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = jt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: h,
    offsetParent: w,
    strategy: c
  }) : h);
  return {
    top: (g.top - S.top + v.top) / $.y,
    bottom: (S.bottom - g.bottom + v.bottom) / $.y,
    left: (g.left - S.left + v.left) / $.x,
    right: (S.right - g.right + v.right) / $.x
  };
}
const nr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: c
    } = t, {
      element: u,
      padding: p = 0
    } = Le(e, t) || {};
    if (u == null)
      return {};
    const d = Rr(p), y = {
      x: n,
      y: r
    }, m = wn(o), v = yn(m), f = await a.getDimensions(u), b = m === "y", g = b ? "top" : "left", h = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", $ = i.reference[v] + i.reference[m] - y[m] - i.floating[v], S = y[m] - i.reference[m], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let T = A ? A[w] : 0;
    (!T || !await (a.isElement == null ? void 0 : a.isElement(A))) && (T = s.floating[w] || i.floating[v]);
    const R = $ / 2 - S / 2, L = T / 2 - f[v] / 2 - 1, Z = Ue(d[g], L), z = Ue(d[h], L), _ = Z, B = T - f[v] - z, O = T / 2 - f[v] / 2 + R, M = un(_, O, B), k = !c.arrow && lt(o) != null && O != M && i.reference[v] / 2 - (O < _ ? Z : z) - f[v] / 2 < 0, V = k ? O < _ ? O - _ : O - B : 0;
    return {
      [m]: y[m] + V,
      data: {
        [m]: M,
        centerOffset: O - M - V,
        ...k && {
          alignmentOffset: V
        }
      },
      reset: k
    };
  }
}), Xi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: c,
        elements: u
      } = t, {
        mainAxis: p = !0,
        crossAxis: d = !0,
        fallbackPlacements: y,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: f = !0,
        ...b
      } = Le(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = je(o), h = je(s) === s, w = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), $ = y || (h || !f ? [Lt(s)] : Ui(s));
      !y && v !== "none" && $.push(...Ki(s, f, v, w));
      const S = [s, ...$], A = await wt(t, b), T = [];
      let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (p && T.push(A[g]), d) {
        const _ = Hi(o, a, w);
        T.push(A[_[0]], A[_[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: T
      }], !T.every((_) => _ <= 0)) {
        var L, Z;
        const _ = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, B = S[_];
        if (B)
          return {
            data: {
              index: _,
              overflows: R
            },
            reset: {
              placement: B
            }
          };
        let O = (Z = R.filter((M) => M.overflows[0] <= 0).sort((M, k) => M.overflows[1] - k.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!O)
          switch (m) {
            case "bestFit": {
              var z;
              const M = (z = R.map((k) => [k.placement, k.overflows.filter((V) => V > 0).reduce((V, te) => V + te, 0)]).sort((k, V) => k[1] - V[1])[0]) == null ? void 0 : z[0];
              M && (O = M);
              break;
            }
            case "initialPlacement":
              O = s;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function rr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function or(e) {
  return Bi.some((t) => e[t] >= 0);
}
const Zi = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Le(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await wt(t, {
            ...o,
            elementContext: "reference"
          }), a = rr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: or(a)
            }
          };
        }
        case "escaped": {
          const i = await wt(t, {
            ...o,
            altBoundary: !0
          }), a = rr(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: or(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ji(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = je(n), s = lt(n), c = ut(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, p = i && c ? -1 : 1, d = Le(t, e);
  let {
    mainAxis: y,
    crossAxis: m,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return s && typeof v == "number" && (m = s === "end" ? v * -1 : v), c ? {
    x: m * p,
    y: y * u
  } : {
    x: y * u,
    y: m * p
  };
}
const Qi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await Ji(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, ea = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: g,
              y: h
            } = b;
            return {
              x: g,
              y: h
            };
          }
        },
        ...c
      } = Le(e, t), u = {
        x: n,
        y: r
      }, p = await wt(t, c), d = ut(je(o)), y = bn(d);
      let m = u[y], v = u[d];
      if (i) {
        const b = y === "y" ? "top" : "left", g = y === "y" ? "bottom" : "right", h = m + p[b], w = m - p[g];
        m = un(h, m, w);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", h = v + p[b], w = v - p[g];
        v = un(h, v, w);
      }
      const f = s.fn({
        ...t,
        [y]: m,
        [d]: v
      });
      return {
        ...f,
        data: {
          x: f.x - n,
          y: f.y - r
        }
      };
    }
  };
}, ta = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: u = !0
      } = Le(e, t), p = {
        x: n,
        y: r
      }, d = ut(o), y = bn(d);
      let m = p[y], v = p[d];
      const f = Le(s, t), b = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...f
      };
      if (c) {
        const w = y === "y" ? "height" : "width", $ = i.reference[y] - i.floating[w] + b.mainAxis, S = i.reference[y] + i.reference[w] - b.mainAxis;
        m < $ ? m = $ : m > S && (m = S);
      }
      if (u) {
        var g, h;
        const w = y === "y" ? "width" : "height", $ = ["top", "left"].includes(je(o)), S = i.reference[d] - i.floating[w] + ($ && ((g = a.offset) == null ? void 0 : g[d]) || 0) + ($ ? 0 : b.crossAxis), A = i.reference[d] + i.reference[w] + ($ ? 0 : ((h = a.offset) == null ? void 0 : h[d]) || 0) - ($ ? b.crossAxis : 0);
        v < S ? v = S : v > A && (v = A);
      }
      return {
        [y]: m,
        [d]: v
      };
    }
  };
}, na = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: a = () => {
        },
        ...s
      } = Le(e, t), c = await wt(t, s), u = je(n), p = lt(n), d = ut(n) === "y", {
        width: y,
        height: m
      } = r.floating;
      let v, f;
      u === "top" || u === "bottom" ? (v = u, f = p === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (f = u, v = p === "end" ? "top" : "bottom");
      const b = m - c[v], g = y - c[f], h = !t.middlewareData.shift;
      let w = b, $ = g;
      if (d) {
        const A = y - c.left - c.right;
        $ = p || h ? Ue(g, A) : A;
      } else {
        const A = m - c.top - c.bottom;
        w = p || h ? Ue(b, A) : A;
      }
      if (h && !p) {
        const A = we(c.left, 0), T = we(c.right, 0), R = we(c.top, 0), L = we(c.bottom, 0);
        d ? $ = y - 2 * (A !== 0 || T !== 0 ? A + T : we(c.left, c.right)) : w = m - 2 * (R !== 0 || L !== 0 ? R + L : we(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: $,
        availableHeight: w
      });
      const S = await o.getDimensions(i.floating);
      return y !== S.width || m !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ke(e) {
  return _r(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function xe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function We(e) {
  var t;
  return (t = (_r(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _r(e) {
  return e instanceof Node || e instanceof xe(e).Node;
}
function Fe(e) {
  return e instanceof Element || e instanceof xe(e).Element;
}
function Oe(e) {
  return e instanceof HTMLElement || e instanceof xe(e).HTMLElement;
}
function ir(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof xe(e).ShadowRoot;
}
function $t(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ce(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ra(e) {
  return ["table", "td", "th"].includes(Ke(e));
}
function xn(e) {
  const t = $n(), n = Ce(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function oa(e) {
  let t = st(e);
  for (; Oe(t) && !Vt(t); ) {
    if (xn(t))
      return t;
    t = st(t);
  }
  return null;
}
function $n() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vt(e) {
  return ["html", "body", "#document"].includes(Ke(e));
}
function Ce(e) {
  return xe(e).getComputedStyle(e);
}
function zt(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function st(e) {
  if (Ke(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ir(e) && e.host || // Fallback.
    We(e)
  );
  return ir(t) ? t.host : t;
}
function Tr(e) {
  const t = st(e);
  return Vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Oe(t) && $t(t) ? t : Tr(t);
}
function xt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Tr(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = xe(o);
  return i ? t.concat(a, a.visualViewport || [], $t(o) ? o : [], a.frameElement && n ? xt(a.frameElement) : []) : t.concat(o, xt(o, [], n));
}
function Or(e) {
  const t = Ce(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Oe(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Mt(n) !== i || Mt(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Sn(e) {
  return Fe(e) ? e : e.contextElement;
}
function it(e) {
  const t = Sn(e);
  if (!Oe(t))
    return Ye(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Or(t);
  let a = (i ? Mt(n.width) : n.width) / r, s = (i ? Mt(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const ia = /* @__PURE__ */ Ye(0);
function Ar(e) {
  const t = xe(e);
  return !$n() || !t.visualViewport ? ia : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function aa(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== xe(e) ? !1 : t;
}
function qe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Sn(e);
  let a = Ye(1);
  t && (r ? Fe(r) && (a = it(r)) : a = it(e));
  const s = aa(i, n, r) ? Ar(i) : Ye(0);
  let c = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, p = o.width / a.x, d = o.height / a.y;
  if (i) {
    const y = xe(i), m = r && Fe(r) ? xe(r) : r;
    let v = y.frameElement;
    for (; v && r && m !== y; ) {
      const f = it(v), b = v.getBoundingClientRect(), g = Ce(v), h = b.left + (v.clientLeft + parseFloat(g.paddingLeft)) * f.x, w = b.top + (v.clientTop + parseFloat(g.paddingTop)) * f.y;
      c *= f.x, u *= f.y, p *= f.x, d *= f.y, c += h, u += w, v = xe(v).frameElement;
    }
  }
  return jt({
    width: p,
    height: d,
    x: c,
    y: u
  });
}
function sa(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Oe(n), i = We(n);
  if (n === i)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = Ye(1);
  const c = Ye(0);
  if ((o || !o && r !== "fixed") && ((Ke(n) !== "body" || $t(i)) && (a = zt(n)), Oe(n))) {
    const u = qe(n);
    s = it(n), c.x = u.x + n.clientLeft, c.y = u.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - a.scrollLeft * s.x + c.x,
    y: t.y * s.y - a.scrollTop * s.y + c.y
  };
}
function ca(e) {
  return Array.from(e.getClientRects());
}
function kr(e) {
  return qe(We(e)).left + zt(e).scrollLeft;
}
function la(e) {
  const t = We(e), n = zt(e), r = e.ownerDocument.body, o = we(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = we(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + kr(e);
  const s = -n.scrollTop;
  return Ce(r).direction === "rtl" && (a += we(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function ua(e, t) {
  const n = xe(e), r = We(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = $n();
    (!u || u && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function da(e, t) {
  const n = qe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Oe(e) ? it(e) : Ye(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function ar(e, t, n) {
  let r;
  if (t === "viewport")
    r = ua(e, n);
  else if (t === "document")
    r = la(We(e));
  else if (Fe(t))
    r = da(t, n);
  else {
    const o = Ar(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return jt(r);
}
function Ir(e, t) {
  const n = st(e);
  return n === t || !Fe(n) || Vt(n) ? !1 : Ce(n).position === "fixed" || Ir(n, t);
}
function fa(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = xt(e, [], !1).filter((s) => Fe(s) && Ke(s) !== "body"), o = null;
  const i = Ce(e).position === "fixed";
  let a = i ? st(e) : e;
  for (; Fe(a) && !Vt(a); ) {
    const s = Ce(a), c = xn(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || $t(a) && !c && Ir(e, a)) ? r = r.filter((p) => p !== a) : o = s, a = st(a);
  }
  return t.set(e, r), r;
}
function pa(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? fa(t, this._c) : [].concat(n), r], s = a[0], c = a.reduce((u, p) => {
    const d = ar(t, p, o);
    return u.top = we(d.top, u.top), u.right = Ue(d.right, u.right), u.bottom = Ue(d.bottom, u.bottom), u.left = we(d.left, u.left), u;
  }, ar(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function ma(e) {
  return Or(e);
}
function ha(e, t, n) {
  const r = Oe(t), o = We(t), i = n === "fixed", a = qe(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ye(0);
  if (r || !r && !i)
    if ((Ke(t) !== "body" || $t(o)) && (s = zt(t)), r) {
      const u = qe(t, !0, i, t);
      c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
    } else
      o && (c.x = kr(o));
  return {
    x: a.left + s.scrollLeft - c.x,
    y: a.top + s.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function sr(e, t) {
  return !Oe(e) || Ce(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Nr(e, t) {
  const n = xe(e);
  if (!Oe(e))
    return n;
  let r = sr(e, t);
  for (; r && ra(r) && Ce(r).position === "static"; )
    r = sr(r, t);
  return r && (Ke(r) === "html" || Ke(r) === "body" && Ce(r).position === "static" && !xn(r)) ? n : r || oa(e) || n;
}
const va = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Nr, i = this.getDimensions;
  return {
    reference: ha(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function ga(e) {
  return Ce(e).direction === "rtl";
}
const ba = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sa,
  getDocumentElement: We,
  getClippingRect: pa,
  getOffsetParent: Nr,
  getElementRects: va,
  getClientRects: ca,
  getDimensions: ma,
  getScale: it,
  isElement: Fe,
  isRTL: ga
};
function ya(e, t) {
  let n = null, r;
  const o = We(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const {
      left: u,
      top: p,
      width: d,
      height: y
    } = e.getBoundingClientRect();
    if (s || t(), !d || !y)
      return;
    const m = Ct(p), v = Ct(o.clientWidth - (u + d)), f = Ct(o.clientHeight - (p + y)), b = Ct(u), h = {
      rootMargin: -m + "px " + -v + "px " + -f + "px " + -b + "px",
      threshold: we(0, Ue(1, c)) || 1
    };
    let w = !0;
    function $(S) {
      const A = S[0].intersectionRatio;
      if (A !== c) {
        if (!w)
          return a();
        A ? a(!1, A) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver($, {
        ...h,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver($, h);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function wa(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = Sn(e), p = o || i ? [...u ? xt(u) : [], ...xt(t)] : [];
  p.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const d = u && s ? ya(u, n) : null;
  let y = -1, m = null;
  a && (m = new ResizeObserver((g) => {
    let [h] = g;
    h && h.target === u && m && (m.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), u && !c && m.observe(u), m.observe(t));
  let v, f = c ? qe(e) : null;
  c && b();
  function b() {
    const g = qe(e);
    f && (g.x !== f.x || g.y !== f.y || g.width !== f.width || g.height !== f.height) && n(), f = g, v = requestAnimationFrame(b);
  }
  return n(), () => {
    p.forEach((g) => {
      o && g.removeEventListener("scroll", n), i && g.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(v);
  };
}
const xa = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ba,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return qi(e, t, {
    ...o,
    platform: i
  });
}, $a = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? nr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? nr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var At = typeof document < "u" ? xr : re;
function Ft(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Ft(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ft(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Dr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cr(e, t) {
  const n = Dr(e);
  return Math.round(t * n) / n;
}
function lr(e) {
  const t = P.useRef(e);
  return At(() => {
    t.current = e;
  }), t;
}
function Sa(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: u
  } = e, [p, d] = P.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [y, m] = P.useState(r);
  Ft(y, r) || m(r);
  const [v, f] = P.useState(null), [b, g] = P.useState(null), h = P.useCallback((k) => {
    k != A.current && (A.current = k, f(k));
  }, [f]), w = P.useCallback((k) => {
    k !== T.current && (T.current = k, g(k));
  }, [g]), $ = i || v, S = a || b, A = P.useRef(null), T = P.useRef(null), R = P.useRef(p), L = lr(c), Z = lr(o), z = P.useCallback(() => {
    if (!A.current || !T.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: y
    };
    Z.current && (k.platform = Z.current), xa(A.current, T.current, k).then((V) => {
      const te = {
        ...V,
        isPositioned: !0
      };
      _.current && !Ft(R.current, te) && (R.current = te, Go.flushSync(() => {
        d(te);
      }));
    });
  }, [y, t, n, Z]);
  At(() => {
    u === !1 && R.current.isPositioned && (R.current.isPositioned = !1, d((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [u]);
  const _ = P.useRef(!1);
  At(() => (_.current = !0, () => {
    _.current = !1;
  }), []), At(() => {
    if ($ && (A.current = $), S && (T.current = S), $ && S) {
      if (L.current)
        return L.current($, S, z);
      z();
    }
  }, [$, S, z, L]);
  const B = P.useMemo(() => ({
    reference: A,
    floating: T,
    setReference: h,
    setFloating: w
  }), [h, w]), O = P.useMemo(() => ({
    reference: $,
    floating: S
  }), [$, S]), M = P.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return k;
    const V = cr(O.floating, p.x), te = cr(O.floating, p.y);
    return s ? {
      ...k,
      transform: "translate(" + V + "px, " + te + "px)",
      ...Dr(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: te
    };
  }, [n, s, O.floating, p.x, p.y]);
  return P.useMemo(() => ({
    ...p,
    update: z,
    refs: B,
    elements: O,
    floatingStyles: M
  }), [p, z, B, O, M]);
}
function Mr(e) {
  const [t, n] = Y(void 0);
  return Se(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          a = u.inlineSize, s = u.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        n({
          width: a,
          height: s
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const Lr = "Popper", [jr, Fr] = Bt(Lr), [Ca, Wr] = jr(Lr), Ea = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = Y(null);
  return /* @__PURE__ */ E(Ca, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, Pa = "PopperAnchor", Ra = /* @__PURE__ */ X((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = Wr(Pa, n), a = se(null), s = de(t, a);
  return re(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || a.current);
  }), r ? null : /* @__PURE__ */ E(ce.div, W({}, o, {
    ref: s
  }));
}), Br = "PopperContent", [_a, sl] = jr(Br), Ta = /* @__PURE__ */ X((e, t) => {
  var n, r, o, i, a, s, c, u;
  const { __scopePopper: p, side: d = "bottom", sideOffset: y = 0, align: m = "center", alignOffset: v = 0, arrowPadding: f = 0, avoidCollisions: b = !0, collisionBoundary: g = [], collisionPadding: h = 0, sticky: w = "partial", hideWhenDetached: $ = !1, updatePositionStrategy: S = "optimized", onPlaced: A, ...T } = e, R = Wr(Br, p), [L, Z] = Y(null), z = de(
    t,
    (ge) => Z(ge)
  ), [_, B] = Y(null), O = Mr(_), M = (n = O == null ? void 0 : O.width) !== null && n !== void 0 ? n : 0, k = (r = O == null ? void 0 : O.height) !== null && r !== void 0 ? r : 0, V = d + (m !== "center" ? "-" + m : ""), te = typeof h == "number" ? h : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...h
  }, ie = Array.isArray(g) ? g : [
    g
  ], Ee = ie.length > 0, ue = {
    padding: te,
    boundary: ie.filter(Oa),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Ee
  }, { refs: be, floatingStyles: ke, placement: _e, isPositioned: Pe, middlewareData: fe } = Sa({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: V,
    whileElementsMounted: (...ge) => wa(...ge, {
      animationFrame: S === "always"
    }),
    elements: {
      reference: R.anchor
    },
    middleware: [
      Qi({
        mainAxis: y + k,
        alignmentAxis: v
      }),
      b && ea({
        mainAxis: !0,
        crossAxis: !1,
        limiter: w === "partial" ? ta() : void 0,
        ...ue
      }),
      b && Xi({
        ...ue
      }),
      na({
        ...ue,
        apply: ({ elements: ge, rects: Re, availableWidth: Be, availableHeight: St }) => {
          const { width: Je, height: Gt } = Re.reference, Qe = ge.floating.style;
          Qe.setProperty("--radix-popper-available-width", `${Be}px`), Qe.setProperty("--radix-popper-available-height", `${St}px`), Qe.setProperty("--radix-popper-anchor-width", `${Je}px`), Qe.setProperty("--radix-popper-anchor-height", `${Gt}px`);
        }
      }),
      _ && $a({
        element: _,
        padding: f
      }),
      Aa({
        arrowWidth: M,
        arrowHeight: k
      }),
      $ && Zi({
        strategy: "referenceHidden",
        ...ue
      })
    ]
  }), [I, K] = Vr(_e), ne = Me(A);
  Se(() => {
    Pe && (ne == null || ne());
  }, [
    Pe,
    ne
  ]);
  const G = (o = fe.arrow) === null || o === void 0 ? void 0 : o.x, q = (i = fe.arrow) === null || i === void 0 ? void 0 : i.y, H = ((a = fe.arrow) === null || a === void 0 ? void 0 : a.centerOffset) !== 0, [me, he] = Y();
  return Se(() => {
    L && he(window.getComputedStyle(L).zIndex);
  }, [
    L
  ]), /* @__PURE__ */ E("div", {
    ref: be.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...ke,
      transform: Pe ? ke.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: me,
      "--radix-popper-transform-origin": [
        (s = fe.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (c = fe.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ E(_a, {
    scope: p,
    placedSide: I,
    onArrowChange: B,
    arrowX: G,
    arrowY: q,
    shouldHideArrow: H
  }, /* @__PURE__ */ E(ce.div, W({
    "data-side": I,
    "data-align": K
  }, T, {
    ref: z,
    style: {
      ...T.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Pe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (u = fe.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0
    }
  }))));
});
function Oa(e) {
  return e !== null;
}
const Aa = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, a;
    const { placement: s, rects: c, middlewareData: u } = t, d = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, y = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [v, f] = Vr(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[f], g = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + y / 2, h = ((i = (a = u.arrow) === null || a === void 0 ? void 0 : a.y) !== null && i !== void 0 ? i : 0) + m / 2;
    let w = "", $ = "";
    return v === "bottom" ? (w = d ? b : `${g}px`, $ = `${-m}px`) : v === "top" ? (w = d ? b : `${g}px`, $ = `${c.floating.height + m}px`) : v === "right" ? (w = `${-m}px`, $ = d ? b : `${h}px`) : v === "left" && (w = `${c.floating.width + m}px`, $ = d ? b : `${h}px`), {
      data: {
        x: w,
        y: $
      }
    };
  }
});
function Vr(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const ka = Ea, Ia = Ra, Na = Ta, Da = /* @__PURE__ */ X((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ qo.createPortal(/* @__PURE__ */ E(ce.div, W({}, o, {
    ref: t
  })), r) : null;
});
function fn({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Ma({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, a = i ? e : r, s = Me(n), c = pe((u) => {
    if (i) {
      const d = typeof u == "function" ? u(e) : u;
      d !== e && s(d);
    } else
      o(u);
  }, [
    i,
    e,
    o,
    s
  ]);
  return [
    a,
    c
  ];
}
function Ma({ defaultProp: e, onChange: t }) {
  const n = Y(e), [r] = n, o = se(r), i = Me(t);
  return re(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
function zr(e) {
  const t = se({
    value: e,
    previous: e
  });
  return at(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const La = /* @__PURE__ */ X((e, t) => /* @__PURE__ */ E(ce.span, W({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
})));
var ja = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, nt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Pt = {}, rn = 0, Hr = function(e) {
  return e && (e.host || Hr(e.parentNode));
}, Fa = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Hr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Wa = function(e, t, n, r) {
  var o = Fa(t, Array.isArray(e) ? e : [e]);
  Pt[n] || (Pt[n] = /* @__PURE__ */ new WeakMap());
  var i = Pt[n], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var p = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(y) {
      if (s.has(y))
        p(y);
      else {
        var m = y.getAttribute(r), v = m !== null && m !== "false", f = (nt.get(y) || 0) + 1, b = (i.get(y) || 0) + 1;
        nt.set(y, f), i.set(y, b), a.push(y), f === 1 && v && Et.set(y, !0), b === 1 && y.setAttribute(n, "true"), v || y.setAttribute(r, "true");
      }
    });
  };
  return p(t), s.clear(), rn++, function() {
    a.forEach(function(d) {
      var y = nt.get(d) - 1, m = i.get(d) - 1;
      nt.set(d, y), i.set(d, m), y || (Et.has(d) || d.removeAttribute(r), Et.delete(d)), m || d.removeAttribute(n);
    }), rn--, rn || (nt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Pt = {});
  };
}, Ba = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || ja(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Wa(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Te = function() {
  return Te = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Te.apply(this, arguments);
};
function Ur(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Va(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var kt = "right-scroll-bar-position", It = "width-before-scroll-bar", za = "with-scroll-bars-hidden", Ha = "--removed-body-scroll-bar-size";
function Ua(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ya(e, t) {
  var n = Y(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function Ka(e, t) {
  return Ya(t || null, function(n) {
    return e.forEach(function(r) {
      return Ua(r, n);
    });
  });
}
function Ga(e) {
  return e;
}
function qa(e, t) {
  t === void 0 && (t = Ga);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var c = function() {
        var p = a;
        a = [], p.forEach(i);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(p) {
          a.push(p), u();
        },
        filter: function(p) {
          return a = a.filter(p), n;
        }
      };
    }
  };
  return o;
}
function Xa(e) {
  e === void 0 && (e = {});
  var t = qa(null);
  return t.options = Te({ async: !0, ssr: !1 }, e), t;
}
var Yr = function(e) {
  var t = e.sideCar, n = Ur(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return P.createElement(r, Te({}, n));
};
Yr.isSideCarExport = !0;
function Za(e, t) {
  return e.useMedium(t), Yr;
}
var Kr = Xa(), on = function() {
}, Ht = P.forwardRef(function(e, t) {
  var n = P.useRef(null), r = P.useState({
    onScrollCapture: on,
    onWheelCapture: on,
    onTouchMoveCapture: on
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, p = e.enabled, d = e.shards, y = e.sideCar, m = e.noIsolation, v = e.inert, f = e.allowPinchZoom, b = e.as, g = b === void 0 ? "div" : b, h = Ur(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = y, $ = Ka([n, t]), S = Te(Te({}, h), o);
  return P.createElement(
    P.Fragment,
    null,
    p && P.createElement(w, { sideCar: Kr, removeScrollBar: u, shards: d, noIsolation: m, inert: v, setCallbacks: i, allowPinchZoom: !!f, lockRef: n }),
    a ? P.cloneElement(P.Children.only(s), Te(Te({}, S), { ref: $ })) : P.createElement(g, Te({}, S, { className: c, ref: $ }), s)
  );
});
Ht.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ht.classNames = {
  fullWidth: It,
  zeroRight: kt
};
var ur, Ja = function() {
  if (ur)
    return ur;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Qa() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ja();
  return t && e.setAttribute("nonce", t), e;
}
function es(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ts(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ns = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Qa()) && (es(t, n), ts(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, rs = function() {
  var e = ns();
  return function(t, n) {
    P.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Gr = function() {
  var e = rs(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, os = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, an = function(e) {
  return parseInt(e || "", 10) || 0;
}, is = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [an(n), an(r), an(o)];
}, as = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return os;
  var t = is(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ss = Gr(), cs = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(za, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(kt, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(It, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(kt, " .").concat(kt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(It, " .").concat(It, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(Ha, ": ").concat(s, `px;
  }
`);
}, ls = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = P.useMemo(function() {
    return as(o);
  }, [o]);
  return P.createElement(ss, { styles: cs(i, !t, o, n ? "" : "!important") });
}, pn = !1;
if (typeof window < "u")
  try {
    var Rt = Object.defineProperty({}, "passive", {
      get: function() {
        return pn = !0, !0;
      }
    });
    window.addEventListener("test", Rt, Rt), window.removeEventListener("test", Rt, Rt);
  } catch {
    pn = !1;
  }
var rt = pn ? { passive: !1 } : !1, us = function(e) {
  return e.tagName === "TEXTAREA";
}, qr = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !us(e) && n[t] === "visible")
  );
}, ds = function(e) {
  return qr(e, "overflowY");
}, fs = function(e) {
  return qr(e, "overflowX");
}, dr = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Xr(e, n);
    if (r) {
      var o = Zr(e, n), i = o[1], a = o[2];
      if (i > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, ps = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ms = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xr = function(e, t) {
  return e === "v" ? ds(t) : fs(t);
}, Zr = function(e, t) {
  return e === "v" ? ps(t) : ms(t);
}, hs = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, vs = function(e, t, n, r, o) {
  var i = hs(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, c = t.contains(s), u = !1, p = a > 0, d = 0, y = 0;
  do {
    var m = Zr(e, s), v = m[0], f = m[1], b = m[2], g = f - b - i * v;
    (v || g) && Xr(e, s) && (d += g, y += v), s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (p && (o && d === 0 || !o && a > d) || !p && (o && y === 0 || !o && -a > y)) && (u = !0), u;
}, _t = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, fr = function(e) {
  return [e.deltaX, e.deltaY];
}, pr = function(e) {
  return e && "current" in e ? e.current : e;
}, gs = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, bs = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ys = 0, ot = [];
function ws(e) {
  var t = P.useRef([]), n = P.useRef([0, 0]), r = P.useRef(), o = P.useState(ys++)[0], i = P.useState(function() {
    return Gr();
  })[0], a = P.useRef(e);
  P.useEffect(function() {
    a.current = e;
  }, [e]), P.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = Va([e.lockRef.current], (e.shards || []).map(pr), !0).filter(Boolean);
      return f.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = P.useCallback(function(f, b) {
    if ("touches" in f && f.touches.length === 2)
      return !a.current.allowPinchZoom;
    var g = _t(f), h = n.current, w = "deltaX" in f ? f.deltaX : h[0] - g[0], $ = "deltaY" in f ? f.deltaY : h[1] - g[1], S, A = f.target, T = Math.abs(w) > Math.abs($) ? "h" : "v";
    if ("touches" in f && T === "h" && A.type === "range")
      return !1;
    var R = dr(T, A);
    if (!R)
      return !0;
    if (R ? S = T : (S = T === "v" ? "h" : "v", R = dr(T, A)), !R)
      return !1;
    if (!r.current && "changedTouches" in f && (w || $) && (r.current = S), !S)
      return !0;
    var L = r.current || S;
    return vs(L, b, f, L === "h" ? w : $, !0);
  }, []), c = P.useCallback(function(f) {
    var b = f;
    if (!(!ot.length || ot[ot.length - 1] !== i)) {
      var g = "deltaY" in b ? fr(b) : _t(b), h = t.current.filter(function(S) {
        return S.name === b.type && S.target === b.target && gs(S.delta, g);
      })[0];
      if (h && h.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!h) {
        var w = (a.current.shards || []).map(pr).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), $ = w.length > 0 ? s(b, w[0]) : !a.current.noIsolation;
        $ && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = P.useCallback(function(f, b, g, h) {
    var w = { name: f, delta: b, target: g, should: h };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function($) {
        return $ !== w;
      });
    }, 1);
  }, []), p = P.useCallback(function(f) {
    n.current = _t(f), r.current = void 0;
  }, []), d = P.useCallback(function(f) {
    u(f.type, fr(f), f.target, s(f, e.lockRef.current));
  }, []), y = P.useCallback(function(f) {
    u(f.type, _t(f), f.target, s(f, e.lockRef.current));
  }, []);
  P.useEffect(function() {
    return ot.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: y
    }), document.addEventListener("wheel", c, rt), document.addEventListener("touchmove", c, rt), document.addEventListener("touchstart", p, rt), function() {
      ot = ot.filter(function(f) {
        return f !== i;
      }), document.removeEventListener("wheel", c, rt), document.removeEventListener("touchmove", c, rt), document.removeEventListener("touchstart", p, rt);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return P.createElement(
    P.Fragment,
    null,
    v ? P.createElement(i, { styles: bs(o) }) : null,
    m ? P.createElement(ls, { gapMode: "margin" }) : null
  );
}
const xs = Za(Kr, ws);
var Jr = P.forwardRef(function(e, t) {
  return P.createElement(Ht, Te({}, e, { ref: t, sideCar: xs }));
});
Jr.classNames = Ht.classNames;
const $s = Jr, Ss = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], Cs = [
  " ",
  "Enter"
], Ut = "Select", [Yt, Kt, Es] = yi(Ut), [dt, cl] = Bt(Ut, [
  Es,
  Fr
]), Cn = Fr(), [Ps, Xe] = dt(Ut), [Rs, _s] = dt(Ut), Ts = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: a, defaultValue: s, onValueChange: c, dir: u, name: p, autoComplete: d, disabled: y, required: m } = e, v = Cn(t), [f, b] = Y(null), [g, h] = Y(null), [w, $] = Y(!1), S = xi(u), [A = !1, T] = fn({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [R, L] = fn({
    prop: a,
    defaultProp: s,
    onChange: c
  }), Z = se(null), z = f ? !!f.closest("form") : !0, [_, B] = Y(/* @__PURE__ */ new Set()), O = Array.from(_).map(
    (M) => M.props.value
  ).join(";");
  return /* @__PURE__ */ E(ka, v, /* @__PURE__ */ E(Ps, {
    required: m,
    scope: t,
    trigger: f,
    onTriggerChange: b,
    valueNode: g,
    onValueNodeChange: h,
    valueNodeHasChildren: w,
    onValueNodeHasChildrenChange: $,
    contentId: gn(),
    value: R,
    onValueChange: L,
    open: A,
    onOpenChange: T,
    dir: S,
    triggerPointerDownPosRef: Z,
    disabled: y
  }, /* @__PURE__ */ E(Yt.Provider, {
    scope: t
  }, /* @__PURE__ */ E(Rs, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: pe((M) => {
      B(
        (k) => new Set(k).add(M)
      );
    }, []),
    onNativeOptionRemove: pe((M) => {
      B((k) => {
        const V = new Set(k);
        return V.delete(M), V;
      });
    }, [])
  }, n)), z ? /* @__PURE__ */ E(ro, {
    key: O,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: p,
    autoComplete: d,
    value: R,
    onChange: (M) => L(M.target.value),
    disabled: y
  }, R === void 0 ? /* @__PURE__ */ E("option", {
    value: ""
  }) : null, Array.from(_)) : null));
}, Os = "SelectTrigger", As = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Cn(n), a = Xe(Os, n), s = a.disabled || r, c = de(t, a.onTriggerChange), u = Kt(n), [p, d, y] = oo((v) => {
    const f = u().filter(
      (h) => !h.disabled
    ), b = f.find(
      (h) => h.value === a.value
    ), g = io(f, v, b);
    g !== void 0 && a.onValueChange(g.value);
  }), m = () => {
    s || (a.onOpenChange(!0), y());
  };
  return /* @__PURE__ */ E(Ia, W({
    asChild: !0
  }, i), /* @__PURE__ */ E(ce.button, W({
    type: "button",
    role: "combobox",
    "aria-controls": a.contentId,
    "aria-expanded": a.open,
    "aria-required": a.required,
    "aria-autocomplete": "none",
    dir: a.dir,
    "data-state": a.open ? "open" : "closed",
    disabled: s,
    "data-disabled": s ? "" : void 0,
    "data-placeholder": no(a.value) ? "" : void 0
  }, o, {
    ref: c,
    onClick: le(o.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: le(o.onPointerDown, (v) => {
      const f = v.target;
      f.hasPointerCapture(v.pointerId) && f.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (m(), a.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: le(o.onKeyDown, (v) => {
      const f = p.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(f && v.key === " ") && Ss.includes(v.key) && (m(), v.preventDefault());
    })
  })));
}), ks = "SelectValue", Is = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = "", ...s } = e, c = Xe(ks, n), { onValueNodeHasChildrenChange: u } = c, p = i !== void 0, d = de(t, c.onValueNodeChange);
  return Se(() => {
    u(p);
  }, [
    u,
    p
  ]), /* @__PURE__ */ E(ce.span, W({}, s, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), no(c.value) ? /* @__PURE__ */ E(Wt, null, a) : i);
}), Ns = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ E(ce.span, W({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), Ds = (e) => /* @__PURE__ */ E(Da, W({
  asChild: !0
}, e)), ct = "SelectContent", Ms = /* @__PURE__ */ X((e, t) => {
  const n = Xe(ct, e.__scopeSelect), [r, o] = Y();
  if (Se(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ $r(/* @__PURE__ */ E(Qr, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ E(Yt.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ E("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ E(Ls, W({}, e, {
    ref: t
  }));
}), De = 10, [Qr, Ze] = dt(ct), Ls = /* @__PURE__ */ X((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: i,
    onPointerDownOutside: a,
    side: s,
    sideOffset: c,
    align: u,
    alignOffset: p,
    arrowPadding: d,
    collisionBoundary: y,
    collisionPadding: m,
    sticky: v,
    hideWhenDetached: f,
    avoidCollisions: b,
    //
    ...g
  } = e, h = Xe(ct, n), [w, $] = Y(null), [S, A] = Y(null), T = de(
    t,
    (I) => $(I)
  ), [R, L] = Y(null), [Z, z] = Y(null), _ = Kt(n), [B, O] = Y(!1), M = se(!1);
  re(() => {
    if (w)
      return Ba(w);
  }, [
    w
  ]), Ai();
  const k = pe((I) => {
    const [K, ...ne] = _().map(
      (H) => H.ref.current
    ), [G] = ne.slice(-1), q = document.activeElement;
    for (const H of I)
      if (H === q || (H == null || H.scrollIntoView({
        block: "nearest"
      }), H === K && S && (S.scrollTop = 0), H === G && S && (S.scrollTop = S.scrollHeight), H == null || H.focus(), document.activeElement !== q))
        return;
  }, [
    _,
    S
  ]), V = pe(
    () => k([
      R,
      w
    ]),
    [
      k,
      R,
      w
    ]
  );
  re(() => {
    B && V();
  }, [
    B,
    V
  ]);
  const { onOpenChange: te, triggerPointerDownPosRef: ie } = h;
  re(() => {
    if (w) {
      let I = {
        x: 0,
        y: 0
      };
      const K = (G) => {
        var q, H, me, he;
        I = {
          x: Math.abs(Math.round(G.pageX) - ((q = (H = ie.current) === null || H === void 0 ? void 0 : H.x) !== null && q !== void 0 ? q : 0)),
          y: Math.abs(Math.round(G.pageY) - ((me = (he = ie.current) === null || he === void 0 ? void 0 : he.y) !== null && me !== void 0 ? me : 0))
        };
      }, ne = (G) => {
        I.x <= 10 && I.y <= 10 ? G.preventDefault() : w.contains(G.target) || te(!1), document.removeEventListener("pointermove", K), ie.current = null;
      };
      return ie.current !== null && (document.addEventListener("pointermove", K), document.addEventListener("pointerup", ne, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", K), document.removeEventListener("pointerup", ne, {
          capture: !0
        });
      };
    }
  }, [
    w,
    te,
    ie
  ]), re(() => {
    const I = () => te(!1);
    return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
      window.removeEventListener("blur", I), window.removeEventListener("resize", I);
    };
  }, [
    te
  ]);
  const [Ee, ue] = oo((I) => {
    const K = _().filter(
      (q) => !q.disabled
    ), ne = K.find(
      (q) => q.ref.current === document.activeElement
    ), G = io(K, I, ne);
    G && setTimeout(
      () => G.ref.current.focus()
    );
  }), be = pe((I, K, ne) => {
    const G = !M.current && !ne;
    (h.value !== void 0 && h.value === K || G) && (L(I), G && (M.current = !0));
  }, [
    h.value
  ]), ke = pe(
    () => w == null ? void 0 : w.focus(),
    [
      w
    ]
  ), _e = pe((I, K, ne) => {
    const G = !M.current && !ne;
    (h.value !== void 0 && h.value === K || G) && z(I);
  }, [
    h.value
  ]), Pe = r === "popper" ? mr : js, fe = Pe === mr ? {
    side: s,
    sideOffset: c,
    align: u,
    alignOffset: p,
    arrowPadding: d,
    collisionBoundary: y,
    collisionPadding: m,
    sticky: v,
    hideWhenDetached: f,
    avoidCollisions: b
  } : {};
  return /* @__PURE__ */ E(Qr, {
    scope: n,
    content: w,
    viewport: S,
    onViewportChange: A,
    itemRefCallback: be,
    selectedItem: R,
    onItemLeave: ke,
    itemTextRefCallback: _e,
    focusSelectedItem: V,
    selectedItemText: Z,
    position: r,
    isPositioned: B,
    searchRef: Ee
  }, /* @__PURE__ */ E($s, {
    as: yt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ E(ki, {
    asChild: !0,
    trapped: h.open,
    onMountAutoFocus: (I) => {
      I.preventDefault();
    },
    onUnmountAutoFocus: le(o, (I) => {
      var K;
      (K = h.trigger) === null || K === void 0 || K.focus({
        preventScroll: !0
      }), I.preventDefault();
    })
  }, /* @__PURE__ */ E(_i, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: a,
    onFocusOutside: (I) => I.preventDefault(),
    onDismiss: () => h.onOpenChange(!1)
  }, /* @__PURE__ */ E(Pe, W({
    role: "listbox",
    id: h.contentId,
    "data-state": h.open ? "open" : "closed",
    dir: h.dir,
    onContextMenu: (I) => I.preventDefault()
  }, g, fe, {
    onPlaced: () => O(!0),
    ref: T,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...g.style
    },
    onKeyDown: le(g.onKeyDown, (I) => {
      const K = I.ctrlKey || I.altKey || I.metaKey;
      if (I.key === "Tab" && I.preventDefault(), !K && I.key.length === 1 && ue(I.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(I.key)) {
        let G = _().filter(
          (q) => !q.disabled
        ).map(
          (q) => q.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(I.key) && (G = G.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(I.key)) {
          const q = I.target, H = G.indexOf(q);
          G = G.slice(H + 1);
        }
        setTimeout(
          () => k(G)
        ), I.preventDefault();
      }
    })
  }))))));
}), js = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Xe(ct, n), a = Ze(ct, n), [s, c] = Y(null), [u, p] = Y(null), d = de(
    t,
    (T) => p(T)
  ), y = Kt(n), m = se(!1), v = se(!0), { viewport: f, selectedItem: b, selectedItemText: g, focusSelectedItem: h } = a, w = pe(() => {
    if (i.trigger && i.valueNode && s && u && f && b && g) {
      const T = i.trigger.getBoundingClientRect(), R = u.getBoundingClientRect(), L = i.valueNode.getBoundingClientRect(), Z = g.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const q = Z.left - R.left, H = L.left - q, me = T.left - H, he = T.width + me, ge = Math.max(he, R.width), Re = window.innerWidth - De, Be = Kn(H, [
          De,
          Re - ge
        ]);
        s.style.minWidth = he + "px", s.style.left = Be + "px";
      } else {
        const q = R.right - Z.right, H = window.innerWidth - L.right - q, me = window.innerWidth - T.right - H, he = T.width + me, ge = Math.max(he, R.width), Re = window.innerWidth - De, Be = Kn(H, [
          De,
          Re - ge
        ]);
        s.style.minWidth = he + "px", s.style.right = Be + "px";
      }
      const z = y(), _ = window.innerHeight - De * 2, B = f.scrollHeight, O = window.getComputedStyle(u), M = parseInt(O.borderTopWidth, 10), k = parseInt(O.paddingTop, 10), V = parseInt(O.borderBottomWidth, 10), te = parseInt(O.paddingBottom, 10), ie = M + k + B + te + V, Ee = Math.min(b.offsetHeight * 5, ie), ue = window.getComputedStyle(f), be = parseInt(ue.paddingTop, 10), ke = parseInt(ue.paddingBottom, 10), _e = T.top + T.height / 2 - De, Pe = _ - _e, fe = b.offsetHeight / 2, I = b.offsetTop + fe, K = M + k + I, ne = ie - K;
      if (K <= _e) {
        const q = b === z[z.length - 1].ref.current;
        s.style.bottom = "0px";
        const H = u.clientHeight - f.offsetTop - f.offsetHeight, me = Math.max(Pe, fe + (q ? ke : 0) + H + V), he = K + me;
        s.style.height = he + "px";
      } else {
        const q = b === z[0].ref.current;
        s.style.top = "0px";
        const me = Math.max(_e, M + f.offsetTop + (q ? be : 0) + fe) + ne;
        s.style.height = me + "px", f.scrollTop = K - _e + f.offsetTop;
      }
      s.style.margin = `${De}px 0`, s.style.minHeight = Ee + "px", s.style.maxHeight = _ + "px", r == null || r(), requestAnimationFrame(
        () => m.current = !0
      );
    }
  }, [
    y,
    i.trigger,
    i.valueNode,
    s,
    u,
    f,
    b,
    g,
    i.dir,
    r
  ]);
  Se(
    () => w(),
    [
      w
    ]
  );
  const [$, S] = Y();
  Se(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [
    u
  ]);
  const A = pe((T) => {
    T && v.current === !0 && (w(), h == null || h(), v.current = !1);
  }, [
    w,
    h
  ]);
  return /* @__PURE__ */ E(Fs, {
    scope: n,
    contentWrapper: s,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: A
  }, /* @__PURE__ */ E("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: $
    }
  }, /* @__PURE__ */ E(ce.div, W({}, o, {
    ref: d,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), mr = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = De, ...i } = e, a = Cn(n);
  return /* @__PURE__ */ E(Na, W({}, a, i, {
    ref: t,
    align: r,
    collisionPadding: o,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...i.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [Fs, En] = dt(ct, {}), hr = "SelectViewport", Ws = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Ze(hr, n), i = En(hr, n), a = de(t, o.onViewportChange), s = se(0);
  return /* @__PURE__ */ E(Wt, null, /* @__PURE__ */ E("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ E(Yt.Slot, {
    scope: n
  }, /* @__PURE__ */ E(ce.div, W({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, r, {
    ref: a,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...r.style
    },
    onScroll: le(r.onScroll, (c) => {
      const u = c.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: d } = i;
      if (d != null && d.current && p) {
        const y = Math.abs(s.current - u.scrollTop);
        if (y > 0) {
          const m = window.innerHeight - De * 2, v = parseFloat(p.style.minHeight), f = parseFloat(p.style.height), b = Math.max(v, f);
          if (b < m) {
            const g = b + y, h = Math.min(m, g), w = g - h;
            p.style.height = h + "px", p.style.bottom === "0px" && (u.scrollTop = w > 0 ? w : 0, p.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = u.scrollTop;
    })
  }))));
}), Bs = "SelectGroup", [Vs, zs] = dt(Bs), Hs = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = gn();
  return /* @__PURE__ */ E(Vs, {
    scope: n,
    id: o
  }, /* @__PURE__ */ E(ce.div, W({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), Us = "SelectLabel", Ys = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = zs(Us, n);
  return /* @__PURE__ */ E(ce.div, W({
    id: o.id
  }, r, {
    ref: t
  }));
}), mn = "SelectItem", [Ks, eo] = dt(mn), Gs = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...a } = e, s = Xe(mn, n), c = Ze(mn, n), u = s.value === r, [p, d] = Y(i ?? ""), [y, m] = Y(!1), v = de(t, (g) => {
    var h;
    return (h = c.itemRefCallback) === null || h === void 0 ? void 0 : h.call(c, g, r, o);
  }), f = gn(), b = () => {
    o || (s.onValueChange(r), s.onOpenChange(!1));
  };
  if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ E(Ks, {
    scope: n,
    value: r,
    disabled: o,
    textId: f,
    isSelected: u,
    onItemTextChange: pe((g) => {
      d((h) => {
        var w;
        return h || ((w = g == null ? void 0 : g.textContent) !== null && w !== void 0 ? w : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ E(Yt.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: p
  }, /* @__PURE__ */ E(ce.div, W({
    role: "option",
    "aria-labelledby": f,
    "data-highlighted": y ? "" : void 0,
    "aria-selected": u && y,
    "data-state": u ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, a, {
    ref: v,
    onFocus: le(
      a.onFocus,
      () => m(!0)
    ),
    onBlur: le(
      a.onBlur,
      () => m(!1)
    ),
    onPointerUp: le(a.onPointerUp, b),
    onPointerMove: le(a.onPointerMove, (g) => {
      if (o) {
        var h;
        (h = c.onItemLeave) === null || h === void 0 || h.call(c);
      } else
        g.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: le(a.onPointerLeave, (g) => {
      if (g.currentTarget === document.activeElement) {
        var h;
        (h = c.onItemLeave) === null || h === void 0 || h.call(c);
      }
    }),
    onKeyDown: le(a.onKeyDown, (g) => {
      var h;
      ((h = c.searchRef) === null || h === void 0 ? void 0 : h.current) !== "" && g.key === " " || (Cs.includes(g.key) && b(), g.key === " " && g.preventDefault());
    })
  }))));
}), Tt = "SelectItemText", qs = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, a = Xe(Tt, n), s = Ze(Tt, n), c = eo(Tt, n), u = _s(Tt, n), [p, d] = Y(null), y = de(
    t,
    (g) => d(g),
    c.onItemTextChange,
    (g) => {
      var h;
      return (h = s.itemTextRefCallback) === null || h === void 0 ? void 0 : h.call(s, g, c.value, c.disabled);
    }
  ), m = p == null ? void 0 : p.textContent, v = at(
    () => /* @__PURE__ */ E("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, m),
    [
      c.disabled,
      c.value,
      m
    ]
  ), { onNativeOptionAdd: f, onNativeOptionRemove: b } = u;
  return Se(() => (f(v), () => b(v)), [
    f,
    b,
    v
  ]), /* @__PURE__ */ E(Wt, null, /* @__PURE__ */ E(ce.span, W({
    id: c.textId
  }, i, {
    ref: y
  })), c.isSelected && a.valueNode && !a.valueNodeHasChildren ? /* @__PURE__ */ $r(i.children, a.valueNode) : null);
}), Xs = "SelectItemIndicator", Zs = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return eo(Xs, n).isSelected ? /* @__PURE__ */ E(ce.span, W({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), vr = "SelectScrollUpButton", Js = /* @__PURE__ */ X((e, t) => {
  const n = Ze(vr, e.__scopeSelect), r = En(vr, e.__scopeSelect), [o, i] = Y(!1), a = de(t, r.onScrollButtonChange);
  return Se(() => {
    if (n.viewport && n.isPositioned) {
      let c = function() {
        const u = s.scrollTop > 0;
        i(u);
      };
      const s = n.viewport;
      return c(), s.addEventListener("scroll", c), () => s.removeEventListener("scroll", c);
    }
  }, [
    n.viewport,
    n.isPositioned
  ]), o ? /* @__PURE__ */ E(to, W({}, e, {
    ref: a,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: c } = n;
      s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
    }
  })) : null;
}), gr = "SelectScrollDownButton", Qs = /* @__PURE__ */ X((e, t) => {
  const n = Ze(gr, e.__scopeSelect), r = En(gr, e.__scopeSelect), [o, i] = Y(!1), a = de(t, r.onScrollButtonChange);
  return Se(() => {
    if (n.viewport && n.isPositioned) {
      let c = function() {
        const u = s.scrollHeight - s.clientHeight, p = Math.ceil(s.scrollTop) < u;
        i(p);
      };
      const s = n.viewport;
      return c(), s.addEventListener("scroll", c), () => s.removeEventListener("scroll", c);
    }
  }, [
    n.viewport,
    n.isPositioned
  ]), o ? /* @__PURE__ */ E(to, W({}, e, {
    ref: a,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: c } = n;
      s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
    }
  })) : null;
}), to = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Ze("SelectScrollButton", n), a = se(null), s = Kt(n), c = pe(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return re(() => () => c(), [
    c
  ]), Se(() => {
    var u;
    const p = s().find(
      (d) => d.ref.current === document.activeElement
    );
    p == null || (u = p.ref.current) === null || u === void 0 || u.scrollIntoView({
      block: "nearest"
    });
  }, [
    s
  ]), /* @__PURE__ */ E(ce.div, W({
    "aria-hidden": !0
  }, o, {
    ref: t,
    style: {
      flexShrink: 0,
      ...o.style
    },
    onPointerDown: le(o.onPointerDown, () => {
      a.current === null && (a.current = window.setInterval(r, 50));
    }),
    onPointerMove: le(o.onPointerMove, () => {
      var u;
      (u = i.onItemLeave) === null || u === void 0 || u.call(i), a.current === null && (a.current = window.setInterval(r, 50));
    }),
    onPointerLeave: le(o.onPointerLeave, () => {
      c();
    })
  }));
}), ec = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ E(ce.div, W({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
});
function no(e) {
  return e === "" || e === void 0;
}
const ro = /* @__PURE__ */ X((e, t) => {
  const { value: n, ...r } = e, o = se(null), i = de(t, o), a = zr(n);
  return re(() => {
    const s = o.current, c = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(c, "value").set;
    if (a !== n && p) {
      const d = new Event("change", {
        bubbles: !0
      });
      p.call(s, n), s.dispatchEvent(d);
    }
  }, [
    a,
    n
  ]), /* @__PURE__ */ E(La, {
    asChild: !0
  }, /* @__PURE__ */ E("select", W({}, r, {
    ref: i,
    defaultValue: n
  })));
});
ro.displayName = "BubbleSelect";
function oo(e) {
  const t = Me(e), n = se(""), r = se(0), o = pe((a) => {
    const s = n.current + a;
    t(s), function c(u) {
      n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(s);
  }, [
    t
  ]), i = pe(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return re(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    i
  ];
}
function io(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = tc(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter(
    (u) => u !== n
  ));
  const c = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function tc(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const nc = Ts, ao = As, rc = Is, oc = Ns, ic = Ds, so = Ms, ac = Ws, sc = Hs, co = Ys, lo = Gs, cc = qs, lc = Zs, uo = Js, fo = Qs, po = ec;
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var uc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Pn = (e, t) => {
  const n = X(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: i = 2, absoluteStrokeWidth: a, className: s = "", children: c, ...u }, p) => E(
      "svg",
      {
        ref: p,
        ...uc,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(o) : i,
        className: ["lucide", `lucide-${dc(e)}`, s].join(" "),
        ...u
      },
      [
        ...t.map(([d, y]) => E(d, y)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = Pn("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = Pn("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = Pn("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
function ho(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = ho(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function mc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = ho(e)) && (r && (r += " "), r += t);
  return r;
}
const Rn = "-";
function hc(e) {
  const t = gc(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(a) {
    const s = a.split(Rn);
    return s[0] === "" && s.length !== 1 && s.shift(), vo(s, t) || vc(a);
  }
  function i(a, s) {
    const c = n[a] || [];
    return s && r[a] ? [...c, ...r[a]] : c;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: i
  };
}
function vo(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? vo(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Rn);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}
const br = /^\[(.+)\]$/;
function vc(e) {
  if (br.test(e)) {
    const t = br.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function gc(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return yc(Object.entries(e.classGroups), n).forEach(([i, a]) => {
    hn(a, r, i, t);
  }), r;
}
function hn(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : yr(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (bc(o)) {
        hn(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      hn(a, yr(t, i), n, r);
    });
  });
}
function yr(e, t) {
  let n = e;
  return t.split(Rn).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function bc(e) {
  return e.isThemeGetter;
}
function yc(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
    return [n, o];
  }) : e;
}
function wc(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(i, a) {
    n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let a = n.get(i);
      if (a !== void 0)
        return a;
      if ((a = r.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    }
  };
}
const go = "!";
function xc(e) {
  const t = e.separator, n = t.length === 1, r = t[0], o = t.length;
  return function(a) {
    const s = [];
    let c = 0, u = 0, p;
    for (let f = 0; f < a.length; f++) {
      let b = a[f];
      if (c === 0) {
        if (b === r && (n || a.slice(f, f + o) === t)) {
          s.push(a.slice(u, f)), u = f + o;
          continue;
        }
        if (b === "/") {
          p = f;
          continue;
        }
      }
      b === "[" ? c++ : b === "]" && c--;
    }
    const d = s.length === 0 ? a : a.substring(u), y = d.startsWith(go), m = y ? d.substring(1) : d, v = p && p > u ? p - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: y,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
}
function $c(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function Sc(e) {
  return {
    cache: wc(e.cacheSize),
    splitModifiers: xc(e),
    ...hc(e)
  };
}
const Cc = /\s+/;
function Ec(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = /* @__PURE__ */ new Set();
  return e.trim().split(Cc).map((a) => {
    const {
      modifiers: s,
      hasImportantModifier: c,
      baseClassName: u,
      maybePostfixModifierPosition: p
    } = n(a);
    let d = r(p ? u.substring(0, p) : u), y = !!p;
    if (!d) {
      if (!p)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (d = r(u), !d)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      y = !1;
    }
    const m = $c(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? m + go : m,
      classGroupId: d,
      originalClassName: a,
      hasPostfixModifier: y
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: c,
      hasPostfixModifier: u
    } = a, p = s + c;
    return i.has(p) ? !1 : (i.add(p), o(c, u).forEach((d) => i.add(s + d)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function Pc() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = bo(t)) && (r && (r += " "), r += n);
  return r;
}
function bo(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = bo(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Rc(e, ...t) {
  let n, r, o, i = a;
  function a(c) {
    const u = t.reduce((p, d) => d(p), e());
    return n = Sc(u), r = n.cache.get, o = n.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = r(c);
    if (u)
      return u;
    const p = Ec(c, n);
    return o(c, p), p;
  }
  return function() {
    return i(Pc.apply(null, arguments));
  };
}
function Q(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const yo = /^\[(?:([a-z-]+):)?(.+)\]$/i, _c = /^\d+\/\d+$/, Tc = /* @__PURE__ */ new Set(["px", "full", "screen"]), Oc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ac = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kc = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ic = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Ne(e) {
  return Ge(e) || Tc.has(e) || _c.test(e);
}
function Ve(e) {
  return ft(e, "length", Bc);
}
function Ge(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ot(e) {
  return ft(e, "number", Ge);
}
function vt(e) {
  return !!e && Number.isInteger(Number(e));
}
function Nc(e) {
  return e.endsWith("%") && Ge(e.slice(0, -1));
}
function D(e) {
  return yo.test(e);
}
function ze(e) {
  return Oc.test(e);
}
const Dc = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Mc(e) {
  return ft(e, Dc, wo);
}
function Lc(e) {
  return ft(e, "position", wo);
}
const jc = /* @__PURE__ */ new Set(["image", "url"]);
function Fc(e) {
  return ft(e, jc, zc);
}
function Wc(e) {
  return ft(e, "", Vc);
}
function gt() {
  return !0;
}
function ft(e, t, n) {
  const r = yo.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function Bc(e) {
  return Ac.test(e);
}
function wo() {
  return !1;
}
function Vc(e) {
  return kc.test(e);
}
function zc(e) {
  return Ic.test(e);
}
function Hc() {
  const e = Q("colors"), t = Q("spacing"), n = Q("blur"), r = Q("brightness"), o = Q("borderColor"), i = Q("borderRadius"), a = Q("borderSpacing"), s = Q("borderWidth"), c = Q("contrast"), u = Q("grayscale"), p = Q("hueRotate"), d = Q("invert"), y = Q("gap"), m = Q("gradientColorStops"), v = Q("gradientColorStopPositions"), f = Q("inset"), b = Q("margin"), g = Q("opacity"), h = Q("padding"), w = Q("saturate"), $ = Q("scale"), S = Q("sepia"), A = Q("skew"), T = Q("space"), R = Q("translate"), L = () => ["auto", "contain", "none"], Z = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", D, t], _ = () => [D, t], B = () => ["", Ne, Ve], O = () => ["auto", Ge, D], M = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], k = () => ["solid", "dashed", "dotted", "double", "none"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], te = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ie = () => ["", "0", D], Ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ue = () => [Ge, Ot], be = () => [Ge, D];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [gt],
      spacing: [Ne, Ve],
      blur: ["none", "", ze, D],
      brightness: ue(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ze, D],
      borderSpacing: _(),
      borderWidth: B(),
      contrast: ue(),
      grayscale: ie(),
      hueRotate: be(),
      invert: ie(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Nc, Ve],
      inset: z(),
      margin: z(),
      opacity: ue(),
      padding: _(),
      saturate: ue(),
      scale: ue(),
      sepia: ie(),
      skew: be(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", D]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ze]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ee()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...M(), D]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [f]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [f]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [f]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [f]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [f]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [f]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [f]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [f]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [f]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", vt, D]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: z()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", D]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ie()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ie()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", vt, D]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [gt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", vt, D]
        }, D]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [gt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [vt, D]
        }, D]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", D]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", D]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...te()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...te(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...te(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [h]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [h]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [h]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [h]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [h]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [h]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [h]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [h]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [h]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [T]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [T]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [D, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [D, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ze]
        }, ze]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [D, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ze, Ve]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ot]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [gt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", D]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ge, Ot]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ne, D]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", D]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", D]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [g]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [g]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...k(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ne, Ve]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ne, D]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", D]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [g]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...M(), Lc]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Mc]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Fc]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [g]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...k(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [g]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: k()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...k()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ne, D]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ne, Ve]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: B()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [g]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ne, Ve]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ze, Wc]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [gt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": V()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ze, D]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", D]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: be()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", D]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: be()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", D]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [$]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [$]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [$]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [vt, D]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", D]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ne, Ve, Ot]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Uc = /* @__PURE__ */ Rc(Hc);
function Ae(...e) {
  return Uc(mc(e));
}
const Yc = nc, Kc = sc, Gc = rc, xo = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee.jsxs(
  ao,
  {
    ref: r,
    className: Ae(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ ee.jsx(oc, { asChild: !0, children: /* @__PURE__ */ ee.jsx(mo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
xo.displayName = ao.displayName;
const _n = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  uo,
  {
    ref: n,
    className: Ae(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ ee.jsx(pc, { className: "h-4 w-4" })
  }
));
_n.displayName = uo.displayName;
const Tn = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  fo,
  {
    ref: n,
    className: Ae(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ ee.jsx(mo, { className: "h-4 w-4" })
  }
));
Tn.displayName = fo.displayName;
const $o = P.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ ee.jsx(ic, { children: /* @__PURE__ */ ee.jsxs(
  so,
  {
    ref: o,
    className: Ae(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-sm border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ ee.jsx(_n, {}),
      /* @__PURE__ */ ee.jsx(
        ac,
        {
          className: Ae(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ ee.jsx(Tn, {})
    ]
  }
) }));
$o.displayName = so.displayName;
const So = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  co,
  {
    ref: n,
    className: Ae("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
So.displayName = co.displayName;
const Co = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee.jsxs(
  lo,
  {
    ref: r,
    className: Ae(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ ee.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ ee.jsx(lc, { children: /* @__PURE__ */ ee.jsx(fc, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ ee.jsx(cc, { children: t })
    ]
  }
));
Co.displayName = lo.displayName;
const Eo = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  po,
  {
    ref: n,
    className: Ae("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Eo.displayName = po.displayName;
const ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Select: Yc,
  SelectContent: $o,
  SelectGroup: Kc,
  SelectItem: Co,
  SelectLabel: So,
  SelectScrollDownButton: Tn,
  SelectScrollUpButton: _n,
  SelectSeparator: Eo,
  SelectTrigger: xo,
  SelectValue: Gc
}, Symbol.toStringTag, { value: "Module" })), Po = "Switch", [qc, ul] = Bt(Po), [Xc, Zc] = qc(Po), Jc = /* @__PURE__ */ X((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: i, required: a, disabled: s, value: c = "on", onCheckedChange: u, ...p } = e, [d, y] = Y(null), m = de(
    t,
    (h) => y(h)
  ), v = se(!1), f = d ? !!d.closest("form") : !0, [b = !1, g] = fn({
    prop: o,
    defaultProp: i,
    onChange: u
  });
  return /* @__PURE__ */ E(Xc, {
    scope: n,
    checked: b,
    disabled: s
  }, /* @__PURE__ */ E(ce.button, W({
    type: "button",
    role: "switch",
    "aria-checked": b,
    "aria-required": a,
    "data-state": Ro(b),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, p, {
    ref: m,
    onClick: le(e.onClick, (h) => {
      g(
        (w) => !w
      ), f && (v.current = h.isPropagationStopped(), v.current || h.stopPropagation());
    })
  })), f && /* @__PURE__ */ E(tl, {
    control: d,
    bubbles: !v.current,
    name: r,
    value: c,
    checked: b,
    required: a,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Qc = "SwitchThumb", el = /* @__PURE__ */ X((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = Zc(Qc, n);
  return /* @__PURE__ */ E(ce.span, W({
    "data-state": Ro(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), tl = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, i = se(null), a = zr(n), s = Mr(t);
  return re(() => {
    const c = i.current, u = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (a !== n && d) {
      const y = new Event("click", {
        bubbles: r
      });
      d.call(c, n), c.dispatchEvent(y);
    }
  }, [
    a,
    n,
    r
  ]), /* @__PURE__ */ E("input", W({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: i,
    style: {
      ...e.style,
      ...s,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Ro(e) {
  return e ? "checked" : "unchecked";
}
const _o = Jc, nl = el, To = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  _o,
  {
    className: Ae(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ ee.jsx(
      nl,
      {
        className: Ae(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
To.displayName = _o.displayName;
const dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Switch: To
}, Symbol.toStringTag, { value: "Module" }));
export {
  ii as Button,
  il as RoundButton,
  ll as Select,
  dl as Switch,
  al as ThemeProvider
};
//# sourceMappingURL=azulgato-ui.es.js.map
