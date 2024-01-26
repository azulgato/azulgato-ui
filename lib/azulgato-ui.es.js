import * as P from "react";
import ye, { useState as Y, createContext as Dt, useMemo as it, createElement as E, useContext as vn, useCallback as fe, forwardRef as X, Children as bt, isValidElement as Nt, cloneElement as gr, Fragment as hn, useEffect as re, useRef as se, useLayoutEffect as br } from "react";
import * as Bo from "react-dom";
import Vo, { flushSync as zo, createPortal as yr } from "react-dom";
var an = { exports: {} }, mt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function Ho() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ye, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, f = "@@iterator";
    function b(l) {
      if (l === null || typeof l != "object")
        return null;
      var x = h && l[h] || l[f];
      return typeof x == "function" ? x : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(l) {
      {
        for (var x = arguments.length, C = new Array(x > 1 ? x - 1 : 0), D = 1; D < x; D++)
          C[D - 1] = arguments[D];
        w("error", l, C);
      }
    }
    function w(l, x, C) {
      {
        var D = g.ReactDebugCurrentFrame, U = D.getStackAddendum();
        U !== "" && (x += "%s", C = C.concat([U]));
        var J = C.map(function(F) {
          return String(F);
        });
        J.unshift("Warning: " + x), Function.prototype.apply.call(console[l], console, J);
      }
    }
    var $ = !1, S = !1, A = !1, _ = !1, R = !1, L;
    L = Symbol.for("react.module.reference");
    function Z(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === i || R || l === o || l === u || l === p || _ || l === m || $ || S || A || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === d || l.$$typeof === a || l.$$typeof === s || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === L || l.getModuleId !== void 0));
    }
    function z(l, x, C) {
      var D = l.displayName;
      if (D)
        return D;
      var U = x.displayName || x.name || "";
      return U !== "" ? C + "(" + U + ")" : C;
    }
    function T(l) {
      return l.displayName || "Context";
    }
    function W(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
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
            return T(x) + ".Consumer";
          case a:
            var C = l;
            return T(C._context) + ".Provider";
          case c:
            return z(l, l.render, "ForwardRef");
          case d:
            var D = l.displayName || null;
            return D !== null ? D : W(l.type) || "Memo";
          case y: {
            var U = l, J = U._payload, F = U._init;
            try {
              return W(F(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, M = 0, k, B, te, ie, Ce, le, be;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function Te() {
      {
        if (M === 0) {
          k = console.log, B = console.info, te = console.warn, ie = console.error, Ce = console.group, le = console.groupCollapsed, be = console.groupEnd;
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
    function Ee() {
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
              value: B
            }),
            warn: O({}, l, {
              value: te
            }),
            error: O({}, l, {
              value: ie
            }),
            group: O({}, l, {
              value: Ce
            }),
            groupCollapsed: O({}, l, {
              value: le
            }),
            groupEnd: O({}, l, {
              value: be
            })
          });
        }
        M < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = g.ReactCurrentDispatcher, I;
    function K(l, x, C) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (U) {
            var D = U.stack.trim().match(/\n( *(at )?)/);
            I = D && D[1] || "";
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
      var D;
      ne = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = de.current, de.current = null, Te();
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
              D = Ie;
            }
            Reflect.construct(l, [], F);
          } else {
            try {
              F.call();
            } catch (Ie) {
              D = Ie;
            }
            l.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            D = Ie;
          }
          l();
        }
      } catch (Ie) {
        if (Ie && D && typeof Ie.stack == "string") {
          for (var j = Ie.stack.split(`
`), he = D.stack.split(`
`), oe = j.length - 1, ae = he.length - 1; oe >= 1 && ae >= 0 && j[oe] !== he[ae]; )
            ae--;
          for (; oe >= 1 && ae >= 0; oe--, ae--)
            if (j[oe] !== he[ae]) {
              if (oe !== 1 || ae !== 1)
                do
                  if (oe--, ae--, ae < 0 || j[oe] !== he[ae]) {
                    var $e = `
` + j[oe].replace(" at new ", " at ");
                    return l.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", l.displayName)), typeof l == "function" && G.set(l, $e), $e;
                  }
                while (oe >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        ne = !1, de.current = J, Ee(), Error.prepareStackTrace = U;
      }
      var et = l ? l.displayName || l.name : "", Ln = et ? K(et) : "";
      return typeof l == "function" && G.set(l, Ln), Ln;
    }
    function me(l, x, C) {
      return H(l, !1);
    }
    function ve(l) {
      var x = l.prototype;
      return !!(x && x.isReactComponent);
    }
    function ge(l, x, C) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return H(l, ve(l));
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
            var D = l, U = D._payload, J = D._init;
            try {
              return ge(J(U), x, C);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, Be = {}, St = g.ReactDebugCurrentFrame;
    function Ze(l) {
      if (l) {
        var x = l._owner, C = ge(l.type, l._source, x ? x.type : null);
        St.setExtraStackFrame(C);
      } else
        St.setExtraStackFrame(null);
    }
    function Kt(l, x, C, D, U) {
      {
        var J = Function.call.bind(Pe);
        for (var F in l)
          if (J(l, F)) {
            var j = void 0;
            try {
              if (typeof l[F] != "function") {
                var he = Error((D || "React class") + ": " + C + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              j = l[F](x, F, D, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              j = oe;
            }
            j && !(j instanceof Error) && (Ze(U), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", C, F, typeof j), Ze(null)), j instanceof Error && !(j.message in Be) && (Be[j.message] = !0, Ze(U), v("Failed %s type: %s", C, j.message), Ze(null));
          }
      }
    }
    var Je = Array.isArray;
    function Gt(l) {
      return Je(l);
    }
    function So(l) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, C = x && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return C;
      }
    }
    function Co(l) {
      try {
        return Rn(l), !1;
      } catch {
        return !0;
      }
    }
    function Rn(l) {
      return "" + l;
    }
    function Tn(l) {
      if (Co(l))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", So(l)), Rn(l);
    }
    var pt = g.ReactCurrentOwner, Eo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _n, On, qt;
    qt = {};
    function Po(l) {
      if (Pe.call(l, "ref")) {
        var x = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Ro(l) {
      if (Pe.call(l, "key")) {
        var x = Object.getOwnPropertyDescriptor(l, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function To(l, x) {
      if (typeof l.ref == "string" && pt.current && x && pt.current.stateNode !== x) {
        var C = W(pt.current.type);
        qt[C] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(pt.current.type), l.ref), qt[C] = !0);
      }
    }
    function _o(l, x) {
      {
        var C = function() {
          _n || (_n = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        C.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Oo(l, x) {
      {
        var C = function() {
          On || (On = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        C.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var Ao = function(l, x, C, D, U, J, F) {
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
        value: D
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function ko(l, x, C, D, U) {
      {
        var J, F = {}, j = null, he = null;
        C !== void 0 && (Tn(C), j = "" + C), Ro(x) && (Tn(x.key), j = "" + x.key), Po(x) && (he = x.ref, To(x, U));
        for (J in x)
          Pe.call(x, J) && !Eo.hasOwnProperty(J) && (F[J] = x[J]);
        if (l && l.defaultProps) {
          var oe = l.defaultProps;
          for (J in oe)
            F[J] === void 0 && (F[J] = oe[J]);
        }
        if (j || he) {
          var ae = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          j && _o(F, ae), he && Oo(F, ae);
        }
        return Ao(l, j, he, U, D, pt.current, F);
      }
    }
    var Xt = g.ReactCurrentOwner, An = g.ReactDebugCurrentFrame;
    function Qe(l) {
      if (l) {
        var x = l._owner, C = ge(l.type, l._source, x ? x.type : null);
        An.setExtraStackFrame(C);
      } else
        An.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function Jt(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function kn() {
      {
        if (Xt.current) {
          var l = W(Xt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Io(l) {
      {
        if (l !== void 0) {
          var x = l.fileName.replace(/^.*[\\\/]/, ""), C = l.lineNumber;
          return `

Check your code at ` + x + ":" + C + ".";
        }
        return "";
      }
    }
    var In = {};
    function Do(l) {
      {
        var x = kn();
        if (!x) {
          var C = typeof l == "string" ? l : l.displayName || l.name;
          C && (x = `

Check the top-level render call using <` + C + ">.");
        }
        return x;
      }
    }
    function Dn(l, x) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var C = Do(x);
        if (In[C])
          return;
        In[C] = !0;
        var D = "";
        l && l._owner && l._owner !== Xt.current && (D = " It was passed a child from " + W(l._owner.type) + "."), Qe(l), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, D), Qe(null);
      }
    }
    function Nn(l, x) {
      {
        if (typeof l != "object")
          return;
        if (Gt(l))
          for (var C = 0; C < l.length; C++) {
            var D = l[C];
            Jt(D) && Dn(D, x);
          }
        else if (Jt(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var U = b(l);
          if (typeof U == "function" && U !== l.entries)
            for (var J = U.call(l), F; !(F = J.next()).done; )
              Jt(F.value) && Dn(F.value, x);
        }
      }
    }
    function No(l) {
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
          var D = W(x);
          Kt(C, l.props, "prop", D, l);
        } else if (x.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var U = W(x);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mo(l) {
      {
        for (var x = Object.keys(l.props), C = 0; C < x.length; C++) {
          var D = x[C];
          if (D !== "children" && D !== "key") {
            Qe(l), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Qe(null);
            break;
          }
        }
        l.ref !== null && (Qe(l), v("Invalid attribute `ref` supplied to `React.Fragment`."), Qe(null));
      }
    }
    function Mn(l, x, C, D, U, J) {
      {
        var F = Z(l);
        if (!F) {
          var j = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = Io(U);
          he ? j += he : j += kn();
          var oe;
          l === null ? oe = "null" : Gt(l) ? oe = "array" : l !== void 0 && l.$$typeof === t ? (oe = "<" + (W(l.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof l, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, j);
        }
        var ae = ko(l, x, C, U, J);
        if (ae == null)
          return ae;
        if (F) {
          var $e = x.children;
          if ($e !== void 0)
            if (D)
              if (Gt($e)) {
                for (var et = 0; et < $e.length; et++)
                  Nn($e[et], l);
                Object.freeze && Object.freeze($e);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nn($e, l);
        }
        return l === r ? Mo(ae) : No(ae), ae;
      }
    }
    function Lo(l, x, C) {
      return Mn(l, x, C, !0);
    }
    function jo(l, x, C) {
      return Mn(l, x, C, !1);
    }
    var Fo = jo, Wo = Lo;
    mt.Fragment = r, mt.jsx = Fo, mt.jsxs = Wo;
  }()), mt;
}
var vt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function Uo() {
  if (Fn)
    return vt;
  Fn = 1;
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
  return vt.Fragment = n, vt.jsx = a, vt.jsxs = a, vt;
}
process.env.NODE_ENV === "production" ? an.exports = Uo() : an.exports = Ho();
var ee = an.exports;
function Yo(e, t) {
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
function Ko(e) {
  var t = Yo(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Go(e, t, n) {
  return t = Ko(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Wn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wn(Object(n), !0).forEach(function(r) {
      Go(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Vn(e, t) {
  var n = {};
  for (var r in e)
    n[r] = t(e[r], r);
  return n;
}
var qo = (e, t, n) => {
  for (var r of Object.keys(e)) {
    var o;
    if (e[r] !== ((o = t[r]) !== null && o !== void 0 ? o : n[r]))
      return !1;
  }
  return !0;
}, Xo = (e) => {
  var t = (n) => {
    var r = e.defaultClassName, o = Bn(Bn({}, e.defaultVariants), n);
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
      qo(p, o, e.defaultVariants) && (r += " " + d);
    return r;
  };
  return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
    get base() {
      return e.defaultClassName.split(" ")[0];
    },
    get variants() {
      return Vn(e.variantClassNames, (n) => Vn(n, (r) => r.split(" ")[0]));
    }
  }, t;
}, Zo = Xo({ defaultClassName: "_9f5xaf0", variantClassNames: { buttonVariant: { primary: "_9f5xaf1", secondary: "_9f5xaf2", tertiary: "_9f5xaf3", disabled: "_9f5xaf4", danger: "_9f5xaf5", warning: "_9f5xaf6", success: "_9f5xaf7", info: "_9f5xaf8" }, size: { s: "_9f5xaf9", m: "_9f5xafa", l: "_9f5xafb" }, hoveredAnimation: { true: "_9f5xafc", false: "_9f5xafd", none: "_9f5xafe" }, paddingVariant: { s: "_9f5xaff", m: "_9f5xafg", l: "_9f5xafh", none: "_9f5xafi" } }, defaultVariants: {}, compoundVariants: [] });
const Jo = (e) => {
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
      className: `${Zo({
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
}, Xc = (e) => /* @__PURE__ */ ee.jsx(Jo, { ...e });
function zn(e) {
  var t = e.match(/^var\((.*)\)$/);
  return t ? t[1] : e;
}
function Qo(e, t) {
  var n = e;
  for (var r of t) {
    if (!(r in n))
      throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
    n = n[r];
  }
  return n;
}
function wr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], r = e.constructor();
  for (var o in e) {
    var i = e[o], a = [...n, o];
    typeof i == "string" || typeof i == "number" || i == null ? r[o] = t(i, a) : typeof i == "object" && !Array.isArray(i) ? r[o] = wr(i, t, a) : console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(i) ? "Array" : typeof i, '"'));
  }
  return r;
}
function ei(e, t) {
  var n = {};
  if (typeof t == "object") {
    var r = e;
    wr(t, (s, c) => {
      if (s != null) {
        var u = Qo(r, c);
        n[zn(u)] = String(s);
      }
    });
  } else {
    var o = e;
    for (var i in o) {
      var a = o[i];
      a != null && (n[zn(i)] = a);
    }
  }
  return Object.defineProperty(n, "toString", {
    value: function() {
      return Object.keys(this).map((c) => "".concat(c, ":").concat(this[c])).join(";");
    },
    writable: !1
  }), n;
}
var ti = "_1fyyjlaf", ni = "_1fyyjlae", ri = { color: { brand: "var(--_1fyyjla0)", backgroundColor: "var(--_1fyyjla1)", background: { primaryLight: "var(--_1fyyjla2)", primary: "var(--_1fyyjla3)", primaryDark: "var(--_1fyyjla4)", secondary: "var(--_1fyyjla5)", danger: "var(--_1fyyjla6)", dangerDark: "var(--_1fyyjla7)" }, text: { primary: "var(--_1fyyjla8)", secondary: "var(--_1fyyjla9)" } }, radius: { lg: "var(--_1fyyjlaa)", md: "var(--_1fyyjlab)", sm: "var(--_1fyyjlac)" }, font: { body: "var(--_1fyyjlad)" } };
const oi = {
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
var ii = "vjg68i0";
const ai = ye.createContext({}), Zc = ({ children: e }) => {
  const [t, n] = Y("light"), r = t === "light", o = () => n(r ? "dark" : "light");
  return /* @__PURE__ */ ee.jsx(ai.Provider, { value: { themeMode: t, toggleTheme: o }, children: /* @__PURE__ */ ee.jsx(
    "div",
    {
      className: `${r ? ni : ti} ${ii}`,
      style: ei(ri, oi),
      children: e
    }
  ) });
};
function V() {
  return V = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, V.apply(this, arguments);
}
function Hn(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Wt(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = /* @__PURE__ */ Dt(a), c = n.length;
    n = [
      ...n,
      a
    ];
    function u(d) {
      const { scope: y, children: m, ...h } = d, f = (y == null ? void 0 : y[e][c]) || s, b = it(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ E(f.Provider, {
        value: b
      }, m);
    }
    function p(d, y) {
      const m = (y == null ? void 0 : y[e][c]) || s, h = vn(m);
      if (h)
        return h;
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
    const i = n.map((a) => /* @__PURE__ */ Dt(a));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || i;
      return it(
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
    si(o, ...t)
  ];
}
function si(...e) {
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
      return it(
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
function ci(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function xr(...e) {
  return (t) => e.forEach(
    (n) => ci(n, t)
  );
}
function pe(...e) {
  return fe(xr(...e), e);
}
const yt = /* @__PURE__ */ X((e, t) => {
  const { children: n, ...r } = e, o = bt.toArray(n), i = o.find(ui);
  if (i) {
    const a = i.props.children, s = o.map((c) => c === i ? bt.count(a) > 1 ? bt.only(null) : /* @__PURE__ */ Nt(a) ? a.props.children : null : c);
    return /* @__PURE__ */ E(sn, V({}, r, {
      ref: t
    }), /* @__PURE__ */ Nt(a) ? /* @__PURE__ */ gr(a, void 0, s) : null);
  }
  return /* @__PURE__ */ E(sn, V({}, r, {
    ref: t
  }), n);
});
yt.displayName = "Slot";
const sn = /* @__PURE__ */ X((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Nt(n) ? /* @__PURE__ */ gr(n, {
    ...di(r, n.props),
    ref: t ? xr(t, n.ref) : n.ref
  }) : bt.count(n) > 1 ? bt.only(null) : null;
});
sn.displayName = "SlotClone";
const li = ({ children: e }) => /* @__PURE__ */ E(hn, null, e);
function ui(e) {
  return /* @__PURE__ */ Nt(e) && e.type === li;
}
function di(e, t) {
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
function fi(e) {
  const t = e + "CollectionProvider", [n, r] = Wt(t), [o, i] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), a = (m) => {
    const { scope: h, children: f } = m, b = ye.useRef(null), g = ye.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ ye.createElement(o, {
      scope: h,
      itemMap: g,
      collectionRef: b
    }, f);
  }, s = e + "CollectionSlot", c = /* @__PURE__ */ ye.forwardRef((m, h) => {
    const { scope: f, children: b } = m, g = i(s, f), v = pe(h, g.collectionRef);
    return /* @__PURE__ */ ye.createElement(yt, {
      ref: v
    }, b);
  }), u = e + "CollectionItemSlot", p = "data-radix-collection-item", d = /* @__PURE__ */ ye.forwardRef((m, h) => {
    const { scope: f, children: b, ...g } = m, v = ye.useRef(null), w = pe(h, v), $ = i(u, f);
    return ye.useEffect(() => ($.itemMap.set(v, {
      ref: v,
      ...g
    }), () => void $.itemMap.delete(v))), /* @__PURE__ */ ye.createElement(yt, {
      [p]: "",
      ref: w
    }, b);
  });
  function y(m) {
    const h = i(e + "CollectionConsumer", m);
    return ye.useCallback(() => {
      const b = h.collectionRef.current;
      if (!b)
        return [];
      const g = Array.from(b.querySelectorAll(`[${p}]`));
      return Array.from(h.itemMap.values()).sort(
        ($, S) => g.indexOf($.ref.current) - g.indexOf(S.ref.current)
      );
    }, [
      h.collectionRef,
      h.itemMap
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
const pi = /* @__PURE__ */ Dt(void 0);
function mi(e) {
  const t = vn(pi);
  return e || t || "ltr";
}
const vi = [
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
], ue = vi.reduce((e, t) => {
  const n = /* @__PURE__ */ X((r, o) => {
    const { asChild: i, ...a } = r, s = i ? yt : t;
    return re(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ E(s, V({}, a, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function hi(e, t) {
  e && zo(
    () => e.dispatchEvent(t)
  );
}
function Me(e) {
  const t = se(e);
  return re(() => {
    t.current = e;
  }), it(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function gi(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const cn = "dismissableLayer.update", bi = "dismissableLayer.pointerDownOutside", yi = "dismissableLayer.focusOutside";
let Un;
const wi = /* @__PURE__ */ Dt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), xi = /* @__PURE__ */ X((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: s, onDismiss: c, ...u } = e, p = vn(wi), [d, y] = Y(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = Y({}), f = pe(
    t,
    (R) => y(R)
  ), b = Array.from(p.layers), [g] = [
    ...p.layersWithOutsidePointerEventsDisabled
  ].slice(-1), v = b.indexOf(g), w = d ? b.indexOf(d) : -1, $ = p.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= v, A = $i((R) => {
    const L = R.target, Z = [
      ...p.branches
    ].some(
      (z) => z.contains(L)
    );
    !S || Z || (i == null || i(R), s == null || s(R), R.defaultPrevented || c == null || c());
  }, m), _ = Si((R) => {
    const L = R.target;
    [
      ...p.branches
    ].some(
      (z) => z.contains(L)
    ) || (a == null || a(R), s == null || s(R), R.defaultPrevented || c == null || c());
  }, m);
  return gi((R) => {
    w === p.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
  }, m), re(() => {
    if (d)
      return r && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Un = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(d)), p.layers.add(d), Yn(), () => {
        r && p.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Un);
      };
  }, [
    d,
    m,
    r,
    p
  ]), re(() => () => {
    d && (p.layers.delete(d), p.layersWithOutsidePointerEventsDisabled.delete(d), Yn());
  }, [
    d,
    p
  ]), re(() => {
    const R = () => h({});
    return document.addEventListener(cn, R), () => document.removeEventListener(cn, R);
  }, []), /* @__PURE__ */ E(ue.div, V({}, u, {
    ref: f,
    style: {
      pointerEvents: $ ? S ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ce(e.onFocusCapture, _.onFocusCapture),
    onBlurCapture: ce(e.onBlurCapture, _.onBlurCapture),
    onPointerDownCapture: ce(e.onPointerDownCapture, A.onPointerDownCapture)
  }));
});
function $i(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e), r = se(!1), o = se(() => {
  });
  return re(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let u = function() {
          $r(bi, n, c, {
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
function Si(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e), r = se(!1);
  return re(() => {
    const o = (i) => {
      i.target && !r.current && $r(yi, n, {
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
function Yn() {
  const e = new CustomEvent(cn);
  document.dispatchEvent(e);
}
function $r(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? hi(o, i) : o.dispatchEvent(i);
}
let Qt = 0;
function Ci() {
  re(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Kn()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Kn()), Qt++, () => {
      Qt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Qt--;
    };
  }, []);
}
function Kn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const en = "focusScope.autoFocusOnMount", tn = "focusScope.autoFocusOnUnmount", Gn = {
  bubbles: !1,
  cancelable: !0
}, Ei = /* @__PURE__ */ X((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...a } = e, [s, c] = Y(null), u = Me(o), p = Me(i), d = se(null), y = pe(
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
      const v = new MutationObserver(g);
      return s && v.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", b), v.disconnect();
      };
    }
  }, [
    r,
    s,
    m.paused
  ]), re(() => {
    if (s) {
      Xn.add(m);
      const f = document.activeElement;
      if (!s.contains(f)) {
        const g = new CustomEvent(en, Gn);
        s.addEventListener(en, u), s.dispatchEvent(g), g.defaultPrevented || (Pi(Ai(Sr(s)), {
          select: !0
        }), document.activeElement === f && He(s));
      }
      return () => {
        s.removeEventListener(en, u), setTimeout(() => {
          const g = new CustomEvent(tn, Gn);
          s.addEventListener(tn, p), s.dispatchEvent(g), g.defaultPrevented || He(f ?? document.body, {
            select: !0
          }), s.removeEventListener(tn, p), Xn.remove(m);
        }, 0);
      };
    }
  }, [
    s,
    u,
    p,
    m
  ]);
  const h = fe((f) => {
    if (!n && !r || m.paused)
      return;
    const b = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, g = document.activeElement;
    if (b && g) {
      const v = f.currentTarget, [w, $] = Ri(v);
      w && $ ? !f.shiftKey && g === $ ? (f.preventDefault(), n && He(w, {
        select: !0
      })) : f.shiftKey && g === w && (f.preventDefault(), n && He($, {
        select: !0
      })) : g === v && f.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ E(ue.div, V({
    tabIndex: -1
  }, a, {
    ref: y,
    onKeyDown: h
  }));
});
function Pi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (He(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Ri(e) {
  const t = Sr(e), n = qn(t, e), r = qn(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Sr(e) {
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
function qn(e, t) {
  for (const n of e)
    if (!Ti(n, {
      upTo: t
    }))
      return n;
}
function Ti(e, { upTo: t }) {
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
function _i(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && _i(e) && t && e.select();
  }
}
const Xn = Oi();
function Oi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Zn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Zn(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Zn(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ai(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Re = globalThis != null && globalThis.document ? br : () => {
}, ki = P.useId || (() => {
});
let Ii = 0;
function Cr(e) {
  const [t, n] = P.useState(ki());
  return Re(() => {
    e || n(
      (r) => r ?? String(Ii++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Di = ["top", "right", "bottom", "left"], Ue = Math.min, we = Math.max, Mt = Math.round, Ct = Math.floor, Ye = (e) => ({
  x: e,
  y: e
}), Ni = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mi = {
  start: "end",
  end: "start"
};
function ln(e, t, n) {
  return we(e, Ue(t, n));
}
function Le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function je(e) {
  return e.split("-")[0];
}
function ct(e) {
  return e.split("-")[1];
}
function gn(e) {
  return e === "x" ? "y" : "x";
}
function bn(e) {
  return e === "y" ? "height" : "width";
}
function lt(e) {
  return ["top", "bottom"].includes(je(e)) ? "y" : "x";
}
function yn(e) {
  return gn(lt(e));
}
function Li(e, t, n) {
  n === void 0 && (n = !1);
  const r = ct(e), o = yn(e), i = bn(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Lt(a)), [a, Lt(a)];
}
function ji(e) {
  const t = Lt(e);
  return [un(e), t, un(t)];
}
function un(e) {
  return e.replace(/start|end/g, (t) => Mi[t]);
}
function Fi(e, t, n) {
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
function Wi(e, t, n, r) {
  const o = ct(e);
  let i = Fi(je(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(un)))), i;
}
function Lt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ni[t]);
}
function Bi(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Er(e) {
  return typeof e != "number" ? Bi(e) : {
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
function Jn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = lt(t), a = yn(t), s = bn(a), c = je(t), u = i === "y", p = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, y = r[s] / 2 - o[s] / 2;
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
  switch (ct(t)) {
    case "start":
      m[a] -= y * (n && u ? -1 : 1);
      break;
    case "end":
      m[a] += y * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Vi = async (e, t, n) => {
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
  } = Jn(u, r, c), y = r, m = {}, h = 0;
  for (let f = 0; f < s.length; f++) {
    const {
      name: b,
      fn: g
    } = s[f], {
      x: v,
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
    if (p = v ?? p, d = w ?? d, m = {
      ...m,
      [b]: {
        ...m[b],
        ...$
      }
    }, S && h <= 50) {
      h++, typeof S == "object" && (S.placement && (y = S.placement), S.rects && (u = S.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: p,
        y: d
      } = Jn(u, y, c)), f = -1;
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
  } = Le(t, e), h = Er(m), b = s[y ? d === "floating" ? "reference" : "floating" : d], g = jt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: p,
    strategy: c
  })), v = d === "floating" ? {
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
    rect: v,
    offsetParent: w,
    strategy: c
  }) : v);
  return {
    top: (g.top - S.top + h.top) / $.y,
    bottom: (S.bottom - g.bottom + h.bottom) / $.y,
    left: (g.left - S.left + h.left) / $.x,
    right: (S.right - g.right + h.right) / $.x
  };
}
const Qn = (e) => ({
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
    const d = Er(p), y = {
      x: n,
      y: r
    }, m = yn(o), h = bn(m), f = await a.getDimensions(u), b = m === "y", g = b ? "top" : "left", v = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", $ = i.reference[h] + i.reference[m] - y[m] - i.floating[h], S = y[m] - i.reference[m], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let _ = A ? A[w] : 0;
    (!_ || !await (a.isElement == null ? void 0 : a.isElement(A))) && (_ = s.floating[w] || i.floating[h]);
    const R = $ / 2 - S / 2, L = _ / 2 - f[h] / 2 - 1, Z = Ue(d[g], L), z = Ue(d[v], L), T = Z, W = _ - f[h] - z, O = _ / 2 - f[h] / 2 + R, M = ln(T, O, W), k = !c.arrow && ct(o) != null && O != M && i.reference[h] / 2 - (O < T ? Z : z) - f[h] / 2 < 0, B = k ? O < T ? O - T : O - W : 0;
    return {
      [m]: y[m] + B,
      data: {
        [m]: M,
        centerOffset: O - M - B,
        ...k && {
          alignmentOffset: B
        }
      },
      reset: k
    };
  }
}), zi = function(e) {
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
        fallbackAxisSideDirection: h = "none",
        flipAlignment: f = !0,
        ...b
      } = Le(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = je(o), v = je(s) === s, w = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), $ = y || (v || !f ? [Lt(s)] : ji(s));
      !y && h !== "none" && $.push(...Wi(s, f, h, w));
      const S = [s, ...$], A = await wt(t, b), _ = [];
      let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (p && _.push(A[g]), d) {
        const T = Li(o, a, w);
        _.push(A[T[0]], A[T[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: _
      }], !_.every((T) => T <= 0)) {
        var L, Z;
        const T = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, W = S[T];
        if (W)
          return {
            data: {
              index: T,
              overflows: R
            },
            reset: {
              placement: W
            }
          };
        let O = (Z = R.filter((M) => M.overflows[0] <= 0).sort((M, k) => M.overflows[1] - k.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!O)
          switch (m) {
            case "bestFit": {
              var z;
              const M = (z = R.map((k) => [k.placement, k.overflows.filter((B) => B > 0).reduce((B, te) => B + te, 0)]).sort((k, B) => k[1] - B[1])[0]) == null ? void 0 : z[0];
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
function er(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function tr(e) {
  return Di.some((t) => e[t] >= 0);
}
const Hi = function(e) {
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
          }), a = er(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: tr(a)
            }
          };
        }
        case "escaped": {
          const i = await wt(t, {
            ...o,
            altBoundary: !0
          }), a = er(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: tr(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ui(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = je(n), s = ct(n), c = lt(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, p = i && c ? -1 : 1, d = Le(t, e);
  let {
    mainAxis: y,
    crossAxis: m,
    alignmentAxis: h
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
  return s && typeof h == "number" && (m = s === "end" ? h * -1 : h), c ? {
    x: m * p,
    y: y * u
  } : {
    x: y * u,
    y: m * p
  };
}
const Yi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await Ui(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, Ki = function(e) {
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
              y: v
            } = b;
            return {
              x: g,
              y: v
            };
          }
        },
        ...c
      } = Le(e, t), u = {
        x: n,
        y: r
      }, p = await wt(t, c), d = lt(je(o)), y = gn(d);
      let m = u[y], h = u[d];
      if (i) {
        const b = y === "y" ? "top" : "left", g = y === "y" ? "bottom" : "right", v = m + p[b], w = m - p[g];
        m = ln(v, m, w);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", v = h + p[b], w = h - p[g];
        h = ln(v, h, w);
      }
      const f = s.fn({
        ...t,
        [y]: m,
        [d]: h
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
}, Gi = function(e) {
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
      }, d = lt(o), y = gn(d);
      let m = p[y], h = p[d];
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
        var g, v;
        const w = y === "y" ? "width" : "height", $ = ["top", "left"].includes(je(o)), S = i.reference[d] - i.floating[w] + ($ && ((g = a.offset) == null ? void 0 : g[d]) || 0) + ($ ? 0 : b.crossAxis), A = i.reference[d] + i.reference[w] + ($ ? 0 : ((v = a.offset) == null ? void 0 : v[d]) || 0) - ($ ? b.crossAxis : 0);
        h < S ? h = S : h > A && (h = A);
      }
      return {
        [y]: m,
        [d]: h
      };
    }
  };
}, qi = function(e) {
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
      } = Le(e, t), c = await wt(t, s), u = je(n), p = ct(n), d = lt(n) === "y", {
        width: y,
        height: m
      } = r.floating;
      let h, f;
      u === "top" || u === "bottom" ? (h = u, f = p === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (f = u, h = p === "end" ? "top" : "bottom");
      const b = m - c[h], g = y - c[f], v = !t.middlewareData.shift;
      let w = b, $ = g;
      if (d) {
        const A = y - c.left - c.right;
        $ = p || v ? Ue(g, A) : A;
      } else {
        const A = m - c.top - c.bottom;
        w = p || v ? Ue(b, A) : A;
      }
      if (v && !p) {
        const A = we(c.left, 0), _ = we(c.right, 0), R = we(c.top, 0), L = we(c.bottom, 0);
        d ? $ = y - 2 * (A !== 0 || _ !== 0 ? A + _ : we(c.left, c.right)) : w = m - 2 * (R !== 0 || L !== 0 ? R + L : we(c.top, c.bottom));
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
  return Pr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function xe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function We(e) {
  var t;
  return (t = (Pr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pr(e) {
  return e instanceof Node || e instanceof xe(e).Node;
}
function Fe(e) {
  return e instanceof Element || e instanceof xe(e).Element;
}
function Oe(e) {
  return e instanceof HTMLElement || e instanceof xe(e).HTMLElement;
}
function nr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof xe(e).ShadowRoot;
}
function $t(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Se(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Xi(e) {
  return ["table", "td", "th"].includes(Ke(e));
}
function wn(e) {
  const t = xn(), n = Se(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Zi(e) {
  let t = at(e);
  for (; Oe(t) && !Bt(t); ) {
    if (wn(t))
      return t;
    t = at(t);
  }
  return null;
}
function xn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Bt(e) {
  return ["html", "body", "#document"].includes(Ke(e));
}
function Se(e) {
  return xe(e).getComputedStyle(e);
}
function Vt(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function at(e) {
  if (Ke(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    nr(e) && e.host || // Fallback.
    We(e)
  );
  return nr(t) ? t.host : t;
}
function Rr(e) {
  const t = at(e);
  return Bt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Oe(t) && $t(t) ? t : Rr(t);
}
function xt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Rr(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = xe(o);
  return i ? t.concat(a, a.visualViewport || [], $t(o) ? o : [], a.frameElement && n ? xt(a.frameElement) : []) : t.concat(o, xt(o, [], n));
}
function Tr(e) {
  const t = Se(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Oe(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Mt(n) !== i || Mt(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function $n(e) {
  return Fe(e) ? e : e.contextElement;
}
function ot(e) {
  const t = $n(e);
  if (!Oe(t))
    return Ye(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Tr(t);
  let a = (i ? Mt(n.width) : n.width) / r, s = (i ? Mt(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Ji = /* @__PURE__ */ Ye(0);
function _r(e) {
  const t = xe(e);
  return !xn() || !t.visualViewport ? Ji : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qi(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== xe(e) ? !1 : t;
}
function qe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = $n(e);
  let a = Ye(1);
  t && (r ? Fe(r) && (a = ot(r)) : a = ot(e));
  const s = Qi(i, n, r) ? _r(i) : Ye(0);
  let c = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, p = o.width / a.x, d = o.height / a.y;
  if (i) {
    const y = xe(i), m = r && Fe(r) ? xe(r) : r;
    let h = y.frameElement;
    for (; h && r && m !== y; ) {
      const f = ot(h), b = h.getBoundingClientRect(), g = Se(h), v = b.left + (h.clientLeft + parseFloat(g.paddingLeft)) * f.x, w = b.top + (h.clientTop + parseFloat(g.paddingTop)) * f.y;
      c *= f.x, u *= f.y, p *= f.x, d *= f.y, c += v, u += w, h = xe(h).frameElement;
    }
  }
  return jt({
    width: p,
    height: d,
    x: c,
    y: u
  });
}
function ea(e) {
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
  if ((o || !o && r !== "fixed") && ((Ke(n) !== "body" || $t(i)) && (a = Vt(n)), Oe(n))) {
    const u = qe(n);
    s = ot(n), c.x = u.x + n.clientLeft, c.y = u.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - a.scrollLeft * s.x + c.x,
    y: t.y * s.y - a.scrollTop * s.y + c.y
  };
}
function ta(e) {
  return Array.from(e.getClientRects());
}
function Or(e) {
  return qe(We(e)).left + Vt(e).scrollLeft;
}
function na(e) {
  const t = We(e), n = Vt(e), r = e.ownerDocument.body, o = we(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = we(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Or(e);
  const s = -n.scrollTop;
  return Se(r).direction === "rtl" && (a += we(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function ra(e, t) {
  const n = xe(e), r = We(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = xn();
    (!u || u && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function oa(e, t) {
  const n = qe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Oe(e) ? ot(e) : Ye(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function rr(e, t, n) {
  let r;
  if (t === "viewport")
    r = ra(e, n);
  else if (t === "document")
    r = na(We(e));
  else if (Fe(t))
    r = oa(t, n);
  else {
    const o = _r(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return jt(r);
}
function Ar(e, t) {
  const n = at(e);
  return n === t || !Fe(n) || Bt(n) ? !1 : Se(n).position === "fixed" || Ar(n, t);
}
function ia(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = xt(e, [], !1).filter((s) => Fe(s) && Ke(s) !== "body"), o = null;
  const i = Se(e).position === "fixed";
  let a = i ? at(e) : e;
  for (; Fe(a) && !Bt(a); ) {
    const s = Se(a), c = wn(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || $t(a) && !c && Ar(e, a)) ? r = r.filter((p) => p !== a) : o = s, a = at(a);
  }
  return t.set(e, r), r;
}
function aa(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? ia(t, this._c) : [].concat(n), r], s = a[0], c = a.reduce((u, p) => {
    const d = rr(t, p, o);
    return u.top = we(d.top, u.top), u.right = Ue(d.right, u.right), u.bottom = Ue(d.bottom, u.bottom), u.left = we(d.left, u.left), u;
  }, rr(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function sa(e) {
  return Tr(e);
}
function ca(e, t, n) {
  const r = Oe(t), o = We(t), i = n === "fixed", a = qe(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ye(0);
  if (r || !r && !i)
    if ((Ke(t) !== "body" || $t(o)) && (s = Vt(t)), r) {
      const u = qe(t, !0, i, t);
      c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
    } else
      o && (c.x = Or(o));
  return {
    x: a.left + s.scrollLeft - c.x,
    y: a.top + s.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function or(e, t) {
  return !Oe(e) || Se(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function kr(e, t) {
  const n = xe(e);
  if (!Oe(e))
    return n;
  let r = or(e, t);
  for (; r && Xi(r) && Se(r).position === "static"; )
    r = or(r, t);
  return r && (Ke(r) === "html" || Ke(r) === "body" && Se(r).position === "static" && !wn(r)) ? n : r || Zi(e) || n;
}
const la = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || kr, i = this.getDimensions;
  return {
    reference: ca(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function ua(e) {
  return Se(e).direction === "rtl";
}
const da = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ea,
  getDocumentElement: We,
  getClippingRect: aa,
  getOffsetParent: kr,
  getElementRects: la,
  getClientRects: ta,
  getDimensions: sa,
  getScale: ot,
  isElement: Fe,
  isRTL: ua
};
function fa(e, t) {
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
    const m = Ct(p), h = Ct(o.clientWidth - (u + d)), f = Ct(o.clientHeight - (p + y)), b = Ct(u), v = {
      rootMargin: -m + "px " + -h + "px " + -f + "px " + -b + "px",
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
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver($, v);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function pa(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = $n(e), p = o || i ? [...u ? xt(u) : [], ...xt(t)] : [];
  p.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const d = u && s ? fa(u, n) : null;
  let y = -1, m = null;
  a && (m = new ResizeObserver((g) => {
    let [v] = g;
    v && v.target === u && m && (m.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), u && !c && m.observe(u), m.observe(t));
  let h, f = c ? qe(e) : null;
  c && b();
  function b() {
    const g = qe(e);
    f && (g.x !== f.x || g.y !== f.y || g.width !== f.width || g.height !== f.height) && n(), f = g, h = requestAnimationFrame(b);
  }
  return n(), () => {
    p.forEach((g) => {
      o && g.removeEventListener("scroll", n), i && g.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const ma = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: da,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Vi(e, t, {
    ...o,
    platform: i
  });
}, va = (e) => {
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
      return r && t(r) ? r.current != null ? Qn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Qn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var At = typeof document < "u" ? br : re;
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
function Ir(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ir(e, t) {
  const n = Ir(e);
  return Math.round(t * n) / n;
}
function ar(e) {
  const t = P.useRef(e);
  return At(() => {
    t.current = e;
  }), t;
}
function ha(e) {
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
  const [h, f] = P.useState(null), [b, g] = P.useState(null), v = P.useCallback((k) => {
    k != A.current && (A.current = k, f(k));
  }, [f]), w = P.useCallback((k) => {
    k !== _.current && (_.current = k, g(k));
  }, [g]), $ = i || h, S = a || b, A = P.useRef(null), _ = P.useRef(null), R = P.useRef(p), L = ar(c), Z = ar(o), z = P.useCallback(() => {
    if (!A.current || !_.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: y
    };
    Z.current && (k.platform = Z.current), ma(A.current, _.current, k).then((B) => {
      const te = {
        ...B,
        isPositioned: !0
      };
      T.current && !Ft(R.current, te) && (R.current = te, Bo.flushSync(() => {
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
  const T = P.useRef(!1);
  At(() => (T.current = !0, () => {
    T.current = !1;
  }), []), At(() => {
    if ($ && (A.current = $), S && (_.current = S), $ && S) {
      if (L.current)
        return L.current($, S, z);
      z();
    }
  }, [$, S, z, L]);
  const W = P.useMemo(() => ({
    reference: A,
    floating: _,
    setReference: v,
    setFloating: w
  }), [v, w]), O = P.useMemo(() => ({
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
    const B = ir(O.floating, p.x), te = ir(O.floating, p.y);
    return s ? {
      ...k,
      transform: "translate(" + B + "px, " + te + "px)",
      ...Ir(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: B,
      top: te
    };
  }, [n, s, O.floating, p.x, p.y]);
  return P.useMemo(() => ({
    ...p,
    update: z,
    refs: W,
    elements: O,
    floatingStyles: M
  }), [p, z, W, O, M]);
}
function Dr(e) {
  const [t, n] = Y(void 0);
  return Re(() => {
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
const Nr = "Popper", [Mr, Lr] = Wt(Nr), [ga, jr] = Mr(Nr), ba = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = Y(null);
  return /* @__PURE__ */ E(ga, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, ya = "PopperAnchor", wa = /* @__PURE__ */ X((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = jr(ya, n), a = se(null), s = pe(t, a);
  return re(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || a.current);
  }), r ? null : /* @__PURE__ */ E(ue.div, V({}, o, {
    ref: s
  }));
}), Fr = "PopperContent", [xa, Jc] = Mr(Fr), $a = /* @__PURE__ */ X((e, t) => {
  var n, r, o, i, a, s, c, u;
  const { __scopePopper: p, side: d = "bottom", sideOffset: y = 0, align: m = "center", alignOffset: h = 0, arrowPadding: f = 0, avoidCollisions: b = !0, collisionBoundary: g = [], collisionPadding: v = 0, sticky: w = "partial", hideWhenDetached: $ = !1, updatePositionStrategy: S = "optimized", onPlaced: A, ..._ } = e, R = jr(Fr, p), [L, Z] = Y(null), z = pe(
    t,
    (ge) => Z(ge)
  ), [T, W] = Y(null), O = Dr(T), M = (n = O == null ? void 0 : O.width) !== null && n !== void 0 ? n : 0, k = (r = O == null ? void 0 : O.height) !== null && r !== void 0 ? r : 0, B = d + (m !== "center" ? "-" + m : ""), te = typeof v == "number" ? v : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...v
  }, ie = Array.isArray(g) ? g : [
    g
  ], Ce = ie.length > 0, le = {
    padding: te,
    boundary: ie.filter(Sa),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Ce
  }, { refs: be, floatingStyles: ke, placement: Te, isPositioned: Ee, middlewareData: de } = ha({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: B,
    whileElementsMounted: (...ge) => pa(...ge, {
      animationFrame: S === "always"
    }),
    elements: {
      reference: R.anchor
    },
    middleware: [
      Yi({
        mainAxis: y + k,
        alignmentAxis: h
      }),
      b && Ki({
        mainAxis: !0,
        crossAxis: !1,
        limiter: w === "partial" ? Gi() : void 0,
        ...le
      }),
      b && zi({
        ...le
      }),
      qi({
        ...le,
        apply: ({ elements: ge, rects: Pe, availableWidth: Be, availableHeight: St }) => {
          const { width: Ze, height: Kt } = Pe.reference, Je = ge.floating.style;
          Je.setProperty("--radix-popper-available-width", `${Be}px`), Je.setProperty("--radix-popper-available-height", `${St}px`), Je.setProperty("--radix-popper-anchor-width", `${Ze}px`), Je.setProperty("--radix-popper-anchor-height", `${Kt}px`);
        }
      }),
      T && va({
        element: T,
        padding: f
      }),
      Ca({
        arrowWidth: M,
        arrowHeight: k
      }),
      $ && Hi({
        strategy: "referenceHidden",
        ...le
      })
    ]
  }), [I, K] = Wr(Te), ne = Me(A);
  Re(() => {
    Ee && (ne == null || ne());
  }, [
    Ee,
    ne
  ]);
  const G = (o = de.arrow) === null || o === void 0 ? void 0 : o.x, q = (i = de.arrow) === null || i === void 0 ? void 0 : i.y, H = ((a = de.arrow) === null || a === void 0 ? void 0 : a.centerOffset) !== 0, [me, ve] = Y();
  return Re(() => {
    L && ve(window.getComputedStyle(L).zIndex);
  }, [
    L
  ]), /* @__PURE__ */ E("div", {
    ref: be.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...ke,
      transform: Ee ? ke.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: me,
      "--radix-popper-transform-origin": [
        (s = de.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (c = de.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ E(xa, {
    scope: p,
    placedSide: I,
    onArrowChange: W,
    arrowX: G,
    arrowY: q,
    shouldHideArrow: H
  }, /* @__PURE__ */ E(ue.div, V({
    "data-side": I,
    "data-align": K
  }, _, {
    ref: z,
    style: {
      ..._.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Ee ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (u = de.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0
    }
  }))));
});
function Sa(e) {
  return e !== null;
}
const Ca = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, a;
    const { placement: s, rects: c, middlewareData: u } = t, d = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, y = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [h, f] = Wr(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[f], g = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + y / 2, v = ((i = (a = u.arrow) === null || a === void 0 ? void 0 : a.y) !== null && i !== void 0 ? i : 0) + m / 2;
    let w = "", $ = "";
    return h === "bottom" ? (w = d ? b : `${g}px`, $ = `${-m}px`) : h === "top" ? (w = d ? b : `${g}px`, $ = `${c.floating.height + m}px`) : h === "right" ? (w = `${-m}px`, $ = d ? b : `${v}px`) : h === "left" && (w = `${c.floating.width + m}px`, $ = d ? b : `${v}px`), {
      data: {
        x: w,
        y: $
      }
    };
  }
});
function Wr(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Ea = ba, Pa = wa, Ra = $a, Ta = /* @__PURE__ */ X((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Vo.createPortal(/* @__PURE__ */ E(ue.div, V({}, o, {
    ref: t
  })), r) : null;
});
function dn({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = _a({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, a = i ? e : r, s = Me(n), c = fe((u) => {
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
function _a({ defaultProp: e, onChange: t }) {
  const n = Y(e), [r] = n, o = se(r), i = Me(t);
  return re(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
function Br(e) {
  const t = se({
    value: e,
    previous: e
  });
  return it(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Oa = /* @__PURE__ */ X((e, t) => /* @__PURE__ */ E(ue.span, V({}, e, {
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
var Aa = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, tt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Pt = {}, nn = 0, Vr = function(e) {
  return e && (e.host || Vr(e.parentNode));
}, ka = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Vr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ia = function(e, t, n, r) {
  var o = ka(t, Array.isArray(e) ? e : [e]);
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
        var m = y.getAttribute(r), h = m !== null && m !== "false", f = (tt.get(y) || 0) + 1, b = (i.get(y) || 0) + 1;
        tt.set(y, f), i.set(y, b), a.push(y), f === 1 && h && Et.set(y, !0), b === 1 && y.setAttribute(n, "true"), h || y.setAttribute(r, "true");
      }
    });
  };
  return p(t), s.clear(), nn++, function() {
    a.forEach(function(d) {
      var y = tt.get(d) - 1, m = i.get(d) - 1;
      tt.set(d, y), i.set(d, m), y || (Et.has(d) || d.removeAttribute(r), Et.delete(d)), m || d.removeAttribute(n);
    }), nn--, nn || (tt = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Pt = {});
  };
}, Da = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Aa(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Ia(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, _e = function() {
  return _e = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, _e.apply(this, arguments);
};
function zr(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Na(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var kt = "right-scroll-bar-position", It = "width-before-scroll-bar", Ma = "with-scroll-bars-hidden", La = "--removed-body-scroll-bar-size";
function ja(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Fa(e, t) {
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
function Wa(e, t) {
  return Fa(t || null, function(n) {
    return e.forEach(function(r) {
      return ja(r, n);
    });
  });
}
function Ba(e) {
  return e;
}
function Va(e, t) {
  t === void 0 && (t = Ba);
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
function za(e) {
  e === void 0 && (e = {});
  var t = Va(null);
  return t.options = _e({ async: !0, ssr: !1 }, e), t;
}
var Hr = function(e) {
  var t = e.sideCar, n = zr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return P.createElement(r, _e({}, n));
};
Hr.isSideCarExport = !0;
function Ha(e, t) {
  return e.useMedium(t), Hr;
}
var Ur = za(), rn = function() {
}, zt = P.forwardRef(function(e, t) {
  var n = P.useRef(null), r = P.useState({
    onScrollCapture: rn,
    onWheelCapture: rn,
    onTouchMoveCapture: rn
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, p = e.enabled, d = e.shards, y = e.sideCar, m = e.noIsolation, h = e.inert, f = e.allowPinchZoom, b = e.as, g = b === void 0 ? "div" : b, v = zr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = y, $ = Wa([n, t]), S = _e(_e({}, v), o);
  return P.createElement(
    P.Fragment,
    null,
    p && P.createElement(w, { sideCar: Ur, removeScrollBar: u, shards: d, noIsolation: m, inert: h, setCallbacks: i, allowPinchZoom: !!f, lockRef: n }),
    a ? P.cloneElement(P.Children.only(s), _e(_e({}, S), { ref: $ })) : P.createElement(g, _e({}, S, { className: c, ref: $ }), s)
  );
});
zt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zt.classNames = {
  fullWidth: It,
  zeroRight: kt
};
var sr, Ua = function() {
  if (sr)
    return sr;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ya() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ua();
  return t && e.setAttribute("nonce", t), e;
}
function Ka(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ga(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var qa = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ya()) && (Ka(t, n), Ga(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Xa = function() {
  var e = qa();
  return function(t, n) {
    P.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Yr = function() {
  var e = Xa(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Za = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, on = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ja = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [on(n), on(r), on(o)];
}, Qa = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Za;
  var t = Ja(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, es = Yr(), ts = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ma, ` {
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
    `).concat(La, ": ").concat(s, `px;
  }
`);
}, ns = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = P.useMemo(function() {
    return Qa(o);
  }, [o]);
  return P.createElement(es, { styles: ts(i, !t, o, n ? "" : "!important") });
}, fn = !1;
if (typeof window < "u")
  try {
    var Rt = Object.defineProperty({}, "passive", {
      get: function() {
        return fn = !0, !0;
      }
    });
    window.addEventListener("test", Rt, Rt), window.removeEventListener("test", Rt, Rt);
  } catch {
    fn = !1;
  }
var nt = fn ? { passive: !1 } : !1, rs = function(e) {
  return e.tagName === "TEXTAREA";
}, Kr = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !rs(e) && n[t] === "visible")
  );
}, os = function(e) {
  return Kr(e, "overflowY");
}, is = function(e) {
  return Kr(e, "overflowX");
}, cr = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Gr(e, n);
    if (r) {
      var o = qr(e, n), i = o[1], a = o[2];
      if (i > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, as = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ss = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Gr = function(e, t) {
  return e === "v" ? os(t) : is(t);
}, qr = function(e, t) {
  return e === "v" ? as(t) : ss(t);
}, cs = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ls = function(e, t, n, r, o) {
  var i = cs(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, c = t.contains(s), u = !1, p = a > 0, d = 0, y = 0;
  do {
    var m = qr(e, s), h = m[0], f = m[1], b = m[2], g = f - b - i * h;
    (h || g) && Gr(e, s) && (d += g, y += h), s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (p && (o && d === 0 || !o && a > d) || !p && (o && y === 0 || !o && -a > y)) && (u = !0), u;
}, Tt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, lr = function(e) {
  return [e.deltaX, e.deltaY];
}, ur = function(e) {
  return e && "current" in e ? e.current : e;
}, us = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ds = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fs = 0, rt = [];
function ps(e) {
  var t = P.useRef([]), n = P.useRef([0, 0]), r = P.useRef(), o = P.useState(fs++)[0], i = P.useState(function() {
    return Yr();
  })[0], a = P.useRef(e);
  P.useEffect(function() {
    a.current = e;
  }, [e]), P.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = Na([e.lockRef.current], (e.shards || []).map(ur), !0).filter(Boolean);
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
    var g = Tt(f), v = n.current, w = "deltaX" in f ? f.deltaX : v[0] - g[0], $ = "deltaY" in f ? f.deltaY : v[1] - g[1], S, A = f.target, _ = Math.abs(w) > Math.abs($) ? "h" : "v";
    if ("touches" in f && _ === "h" && A.type === "range")
      return !1;
    var R = cr(_, A);
    if (!R)
      return !0;
    if (R ? S = _ : (S = _ === "v" ? "h" : "v", R = cr(_, A)), !R)
      return !1;
    if (!r.current && "changedTouches" in f && (w || $) && (r.current = S), !S)
      return !0;
    var L = r.current || S;
    return ls(L, b, f, L === "h" ? w : $, !0);
  }, []), c = P.useCallback(function(f) {
    var b = f;
    if (!(!rt.length || rt[rt.length - 1] !== i)) {
      var g = "deltaY" in b ? lr(b) : Tt(b), v = t.current.filter(function(S) {
        return S.name === b.type && S.target === b.target && us(S.delta, g);
      })[0];
      if (v && v.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!v) {
        var w = (a.current.shards || []).map(ur).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), $ = w.length > 0 ? s(b, w[0]) : !a.current.noIsolation;
        $ && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = P.useCallback(function(f, b, g, v) {
    var w = { name: f, delta: b, target: g, should: v };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function($) {
        return $ !== w;
      });
    }, 1);
  }, []), p = P.useCallback(function(f) {
    n.current = Tt(f), r.current = void 0;
  }, []), d = P.useCallback(function(f) {
    u(f.type, lr(f), f.target, s(f, e.lockRef.current));
  }, []), y = P.useCallback(function(f) {
    u(f.type, Tt(f), f.target, s(f, e.lockRef.current));
  }, []);
  P.useEffect(function() {
    return rt.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: y
    }), document.addEventListener("wheel", c, nt), document.addEventListener("touchmove", c, nt), document.addEventListener("touchstart", p, nt), function() {
      rt = rt.filter(function(f) {
        return f !== i;
      }), document.removeEventListener("wheel", c, nt), document.removeEventListener("touchmove", c, nt), document.removeEventListener("touchstart", p, nt);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return P.createElement(
    P.Fragment,
    null,
    h ? P.createElement(i, { styles: ds(o) }) : null,
    m ? P.createElement(ns, { gapMode: "margin" }) : null
  );
}
const ms = Ha(Ur, ps);
var Xr = P.forwardRef(function(e, t) {
  return P.createElement(zt, _e({}, e, { ref: t, sideCar: ms }));
});
Xr.classNames = zt.classNames;
const vs = Xr, hs = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], gs = [
  " ",
  "Enter"
], Ht = "Select", [Ut, Yt, bs] = fi(Ht), [ut, Qc] = Wt(Ht, [
  bs,
  Lr
]), Sn = Lr(), [ys, dt] = ut(Ht), [ws, xs] = ut(Ht), $s = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: a, defaultValue: s, onValueChange: c, dir: u, name: p, autoComplete: d, disabled: y, required: m } = e, h = Sn(t), [f, b] = Y(null), [g, v] = Y(null), [w, $] = Y(!1), S = mi(u), [A = !1, _] = dn({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [R, L] = dn({
    prop: a,
    defaultProp: s,
    onChange: c
  }), Z = se(null), z = f ? !!f.closest("form") : !0, [T, W] = Y(/* @__PURE__ */ new Set()), O = Array.from(T).map(
    (M) => M.props.value
  ).join(";");
  return /* @__PURE__ */ E(Ea, h, /* @__PURE__ */ E(ys, {
    required: m,
    scope: t,
    trigger: f,
    onTriggerChange: b,
    valueNode: g,
    onValueNodeChange: v,
    valueNodeHasChildren: w,
    onValueNodeHasChildrenChange: $,
    contentId: Cr(),
    value: R,
    onValueChange: L,
    open: A,
    onOpenChange: _,
    dir: S,
    triggerPointerDownPosRef: Z,
    disabled: y
  }, /* @__PURE__ */ E(Ut.Provider, {
    scope: t
  }, /* @__PURE__ */ E(ws, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: fe((M) => {
      W(
        (k) => new Set(k).add(M)
      );
    }, []),
    onNativeOptionRemove: fe((M) => {
      W((k) => {
        const B = new Set(k);
        return B.delete(M), B;
      });
    }, [])
  }, n)), z ? /* @__PURE__ */ E(eo, {
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
  }) : null, Array.from(T)) : null));
}, Ss = "SelectTrigger", Cs = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Sn(n), a = dt(Ss, n), s = a.disabled || r, c = pe(t, a.onTriggerChange), u = Yt(n), [p, d, y] = to((h) => {
    const f = u().filter(
      (v) => !v.disabled
    ), b = f.find(
      (v) => v.value === a.value
    ), g = no(f, h, b);
    g !== void 0 && a.onValueChange(g.value);
  }), m = () => {
    s || (a.onOpenChange(!0), y());
  };
  return /* @__PURE__ */ E(Pa, V({
    asChild: !0
  }, i), /* @__PURE__ */ E(ue.button, V({
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
    "data-placeholder": Hs(a.value) ? "" : void 0
  }, o, {
    ref: c,
    onClick: ce(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: ce(o.onPointerDown, (h) => {
      const f = h.target;
      f.hasPointerCapture(h.pointerId) && f.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: ce(o.onKeyDown, (h) => {
      const f = p.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && d(h.key), !(f && h.key === " ") && hs.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), Es = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ E(ue.span, V({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), Ps = (e) => /* @__PURE__ */ E(Ta, V({
  asChild: !0
}, e)), st = "SelectContent", Rs = /* @__PURE__ */ X((e, t) => {
  const n = dt(st, e.__scopeSelect), [r, o] = Y();
  if (Re(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ yr(/* @__PURE__ */ E(Zr, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ E(Ut.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ E("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ E(Ts, V({}, e, {
    ref: t
  }));
}), Ne = 10, [Zr, Xe] = ut(st), Ts = /* @__PURE__ */ X((e, t) => {
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
    sticky: h,
    hideWhenDetached: f,
    avoidCollisions: b,
    //
    ...g
  } = e, v = dt(st, n), [w, $] = Y(null), [S, A] = Y(null), _ = pe(
    t,
    (I) => $(I)
  ), [R, L] = Y(null), [Z, z] = Y(null), T = Yt(n), [W, O] = Y(!1), M = se(!1);
  re(() => {
    if (w)
      return Da(w);
  }, [
    w
  ]), Ci();
  const k = fe((I) => {
    const [K, ...ne] = T().map(
      (H) => H.ref.current
    ), [G] = ne.slice(-1), q = document.activeElement;
    for (const H of I)
      if (H === q || (H == null || H.scrollIntoView({
        block: "nearest"
      }), H === K && S && (S.scrollTop = 0), H === G && S && (S.scrollTop = S.scrollHeight), H == null || H.focus(), document.activeElement !== q))
        return;
  }, [
    T,
    S
  ]), B = fe(
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
    W && B();
  }, [
    W,
    B
  ]);
  const { onOpenChange: te, triggerPointerDownPosRef: ie } = v;
  re(() => {
    if (w) {
      let I = {
        x: 0,
        y: 0
      };
      const K = (G) => {
        var q, H, me, ve;
        I = {
          x: Math.abs(Math.round(G.pageX) - ((q = (H = ie.current) === null || H === void 0 ? void 0 : H.x) !== null && q !== void 0 ? q : 0)),
          y: Math.abs(Math.round(G.pageY) - ((me = (ve = ie.current) === null || ve === void 0 ? void 0 : ve.y) !== null && me !== void 0 ? me : 0))
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
  const [Ce, le] = to((I) => {
    const K = T().filter(
      (q) => !q.disabled
    ), ne = K.find(
      (q) => q.ref.current === document.activeElement
    ), G = no(K, I, ne);
    G && setTimeout(
      () => G.ref.current.focus()
    );
  }), be = fe((I, K, ne) => {
    const G = !M.current && !ne;
    (v.value !== void 0 && v.value === K || G) && (L(I), G && (M.current = !0));
  }, [
    v.value
  ]), ke = fe(
    () => w == null ? void 0 : w.focus(),
    [
      w
    ]
  ), Te = fe((I, K, ne) => {
    const G = !M.current && !ne;
    (v.value !== void 0 && v.value === K || G) && z(I);
  }, [
    v.value
  ]), Ee = r === "popper" ? dr : _s, de = Ee === dr ? {
    side: s,
    sideOffset: c,
    align: u,
    alignOffset: p,
    arrowPadding: d,
    collisionBoundary: y,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: f,
    avoidCollisions: b
  } : {};
  return /* @__PURE__ */ E(Zr, {
    scope: n,
    content: w,
    viewport: S,
    onViewportChange: A,
    itemRefCallback: be,
    selectedItem: R,
    onItemLeave: ke,
    itemTextRefCallback: Te,
    focusSelectedItem: B,
    selectedItemText: Z,
    position: r,
    isPositioned: W,
    searchRef: Ce
  }, /* @__PURE__ */ E(vs, {
    as: yt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ E(Ei, {
    asChild: !0,
    trapped: v.open,
    onMountAutoFocus: (I) => {
      I.preventDefault();
    },
    onUnmountAutoFocus: ce(o, (I) => {
      var K;
      (K = v.trigger) === null || K === void 0 || K.focus({
        preventScroll: !0
      }), I.preventDefault();
    })
  }, /* @__PURE__ */ E(xi, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: a,
    onFocusOutside: (I) => I.preventDefault(),
    onDismiss: () => v.onOpenChange(!1)
  }, /* @__PURE__ */ E(Ee, V({
    role: "listbox",
    id: v.contentId,
    "data-state": v.open ? "open" : "closed",
    dir: v.dir,
    onContextMenu: (I) => I.preventDefault()
  }, g, de, {
    onPlaced: () => O(!0),
    ref: _,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...g.style
    },
    onKeyDown: ce(g.onKeyDown, (I) => {
      const K = I.ctrlKey || I.altKey || I.metaKey;
      if (I.key === "Tab" && I.preventDefault(), !K && I.key.length === 1 && le(I.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(I.key)) {
        let G = T().filter(
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
}), _s = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = dt(st, n), a = Xe(st, n), [s, c] = Y(null), [u, p] = Y(null), d = pe(
    t,
    (_) => p(_)
  ), y = Yt(n), m = se(!1), h = se(!0), { viewport: f, selectedItem: b, selectedItemText: g, focusSelectedItem: v } = a, w = fe(() => {
    if (i.trigger && i.valueNode && s && u && f && b && g) {
      const _ = i.trigger.getBoundingClientRect(), R = u.getBoundingClientRect(), L = i.valueNode.getBoundingClientRect(), Z = g.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const q = Z.left - R.left, H = L.left - q, me = _.left - H, ve = _.width + me, ge = Math.max(ve, R.width), Pe = window.innerWidth - Ne, Be = Hn(H, [
          Ne,
          Pe - ge
        ]);
        s.style.minWidth = ve + "px", s.style.left = Be + "px";
      } else {
        const q = R.right - Z.right, H = window.innerWidth - L.right - q, me = window.innerWidth - _.right - H, ve = _.width + me, ge = Math.max(ve, R.width), Pe = window.innerWidth - Ne, Be = Hn(H, [
          Ne,
          Pe - ge
        ]);
        s.style.minWidth = ve + "px", s.style.right = Be + "px";
      }
      const z = y(), T = window.innerHeight - Ne * 2, W = f.scrollHeight, O = window.getComputedStyle(u), M = parseInt(O.borderTopWidth, 10), k = parseInt(O.paddingTop, 10), B = parseInt(O.borderBottomWidth, 10), te = parseInt(O.paddingBottom, 10), ie = M + k + W + te + B, Ce = Math.min(b.offsetHeight * 5, ie), le = window.getComputedStyle(f), be = parseInt(le.paddingTop, 10), ke = parseInt(le.paddingBottom, 10), Te = _.top + _.height / 2 - Ne, Ee = T - Te, de = b.offsetHeight / 2, I = b.offsetTop + de, K = M + k + I, ne = ie - K;
      if (K <= Te) {
        const q = b === z[z.length - 1].ref.current;
        s.style.bottom = "0px";
        const H = u.clientHeight - f.offsetTop - f.offsetHeight, me = Math.max(Ee, de + (q ? ke : 0) + H + B), ve = K + me;
        s.style.height = ve + "px";
      } else {
        const q = b === z[0].ref.current;
        s.style.top = "0px";
        const me = Math.max(Te, M + f.offsetTop + (q ? be : 0) + de) + ne;
        s.style.height = me + "px", f.scrollTop = K - Te + f.offsetTop;
      }
      s.style.margin = `${Ne}px 0`, s.style.minHeight = Ce + "px", s.style.maxHeight = T + "px", r == null || r(), requestAnimationFrame(
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
  Re(
    () => w(),
    [
      w
    ]
  );
  const [$, S] = Y();
  Re(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [
    u
  ]);
  const A = fe((_) => {
    _ && h.current === !0 && (w(), v == null || v(), h.current = !1);
  }, [
    w,
    v
  ]);
  return /* @__PURE__ */ E(Os, {
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
  }, /* @__PURE__ */ E(ue.div, V({}, o, {
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
}), dr = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Ne, ...i } = e, a = Sn(n);
  return /* @__PURE__ */ E(Ra, V({}, a, i, {
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
}), [Os, Cn] = ut(st, {}), fr = "SelectViewport", As = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Xe(fr, n), i = Cn(fr, n), a = pe(t, o.onViewportChange), s = se(0);
  return /* @__PURE__ */ E(hn, null, /* @__PURE__ */ E("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ E(Ut.Slot, {
    scope: n
  }, /* @__PURE__ */ E(ue.div, V({
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
    onScroll: ce(r.onScroll, (c) => {
      const u = c.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: d } = i;
      if (d != null && d.current && p) {
        const y = Math.abs(s.current - u.scrollTop);
        if (y > 0) {
          const m = window.innerHeight - Ne * 2, h = parseFloat(p.style.minHeight), f = parseFloat(p.style.height), b = Math.max(h, f);
          if (b < m) {
            const g = b + y, v = Math.min(m, g), w = g - v;
            p.style.height = v + "px", p.style.bottom === "0px" && (u.scrollTop = w > 0 ? w : 0, p.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = u.scrollTop;
    })
  }))));
}), ks = "SelectGroup", [el, Is] = ut(ks), Ds = "SelectLabel", Ns = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Is(Ds, n);
  return /* @__PURE__ */ E(ue.div, V({
    id: o.id
  }, r, {
    ref: t
  }));
}), pn = "SelectItem", [Ms, Jr] = ut(pn), Ls = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...a } = e, s = dt(pn, n), c = Xe(pn, n), u = s.value === r, [p, d] = Y(i ?? ""), [y, m] = Y(!1), h = pe(t, (g) => {
    var v;
    return (v = c.itemRefCallback) === null || v === void 0 ? void 0 : v.call(c, g, r, o);
  }), f = Cr(), b = () => {
    o || (s.onValueChange(r), s.onOpenChange(!1));
  };
  if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ E(Ms, {
    scope: n,
    value: r,
    disabled: o,
    textId: f,
    isSelected: u,
    onItemTextChange: fe((g) => {
      d((v) => {
        var w;
        return v || ((w = g == null ? void 0 : g.textContent) !== null && w !== void 0 ? w : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ E(Ut.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: p
  }, /* @__PURE__ */ E(ue.div, V({
    role: "option",
    "aria-labelledby": f,
    "data-highlighted": y ? "" : void 0,
    "aria-selected": u && y,
    "data-state": u ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, a, {
    ref: h,
    onFocus: ce(
      a.onFocus,
      () => m(!0)
    ),
    onBlur: ce(
      a.onBlur,
      () => m(!1)
    ),
    onPointerUp: ce(a.onPointerUp, b),
    onPointerMove: ce(a.onPointerMove, (g) => {
      if (o) {
        var v;
        (v = c.onItemLeave) === null || v === void 0 || v.call(c);
      } else
        g.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: ce(a.onPointerLeave, (g) => {
      if (g.currentTarget === document.activeElement) {
        var v;
        (v = c.onItemLeave) === null || v === void 0 || v.call(c);
      }
    }),
    onKeyDown: ce(a.onKeyDown, (g) => {
      var v;
      ((v = c.searchRef) === null || v === void 0 ? void 0 : v.current) !== "" && g.key === " " || (gs.includes(g.key) && b(), g.key === " " && g.preventDefault());
    })
  }))));
}), _t = "SelectItemText", js = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, a = dt(_t, n), s = Xe(_t, n), c = Jr(_t, n), u = xs(_t, n), [p, d] = Y(null), y = pe(
    t,
    (g) => d(g),
    c.onItemTextChange,
    (g) => {
      var v;
      return (v = s.itemTextRefCallback) === null || v === void 0 ? void 0 : v.call(s, g, c.value, c.disabled);
    }
  ), m = p == null ? void 0 : p.textContent, h = it(
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
  return Re(() => (f(h), () => b(h)), [
    f,
    b,
    h
  ]), /* @__PURE__ */ E(hn, null, /* @__PURE__ */ E(ue.span, V({
    id: c.textId
  }, i, {
    ref: y
  })), c.isSelected && a.valueNode && !a.valueNodeHasChildren ? /* @__PURE__ */ yr(i.children, a.valueNode) : null);
}), Fs = "SelectItemIndicator", Ws = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return Jr(Fs, n).isSelected ? /* @__PURE__ */ E(ue.span, V({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), pr = "SelectScrollUpButton", Bs = /* @__PURE__ */ X((e, t) => {
  const n = Xe(pr, e.__scopeSelect), r = Cn(pr, e.__scopeSelect), [o, i] = Y(!1), a = pe(t, r.onScrollButtonChange);
  return Re(() => {
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
  ]), o ? /* @__PURE__ */ E(Qr, V({}, e, {
    ref: a,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: c } = n;
      s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
    }
  })) : null;
}), mr = "SelectScrollDownButton", Vs = /* @__PURE__ */ X((e, t) => {
  const n = Xe(mr, e.__scopeSelect), r = Cn(mr, e.__scopeSelect), [o, i] = Y(!1), a = pe(t, r.onScrollButtonChange);
  return Re(() => {
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
  ]), o ? /* @__PURE__ */ E(Qr, V({}, e, {
    ref: a,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: c } = n;
      s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
    }
  })) : null;
}), Qr = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Xe("SelectScrollButton", n), a = se(null), s = Yt(n), c = fe(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return re(() => () => c(), [
    c
  ]), Re(() => {
    var u;
    const p = s().find(
      (d) => d.ref.current === document.activeElement
    );
    p == null || (u = p.ref.current) === null || u === void 0 || u.scrollIntoView({
      block: "nearest"
    });
  }, [
    s
  ]), /* @__PURE__ */ E(ue.div, V({
    "aria-hidden": !0
  }, o, {
    ref: t,
    style: {
      flexShrink: 0,
      ...o.style
    },
    onPointerDown: ce(o.onPointerDown, () => {
      a.current === null && (a.current = window.setInterval(r, 50));
    }),
    onPointerMove: ce(o.onPointerMove, () => {
      var u;
      (u = i.onItemLeave) === null || u === void 0 || u.call(i), a.current === null && (a.current = window.setInterval(r, 50));
    }),
    onPointerLeave: ce(o.onPointerLeave, () => {
      c();
    })
  }));
}), zs = /* @__PURE__ */ X((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ E(ue.div, V({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
});
function Hs(e) {
  return e === "" || e === void 0;
}
const eo = /* @__PURE__ */ X((e, t) => {
  const { value: n, ...r } = e, o = se(null), i = pe(t, o), a = Br(n);
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
  ]), /* @__PURE__ */ E(Oa, {
    asChild: !0
  }, /* @__PURE__ */ E("select", V({}, r, {
    ref: i,
    defaultValue: n
  })));
});
eo.displayName = "BubbleSelect";
function to(e) {
  const t = Me(e), n = se(""), r = se(0), o = fe((a) => {
    const s = n.current + a;
    t(s), function c(u) {
      n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(s);
  }, [
    t
  ]), i = fe(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return re(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    i
  ];
}
function no(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = Us(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter(
    (u) => u !== n
  ));
  const c = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Us(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ys = $s, ro = Cs, Ks = Es, Gs = Ps, oo = Rs, qs = As, io = Ns, ao = Ls, Xs = js, Zs = Ws, so = Bs, co = Vs, lo = zs;
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Js = {
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
const Qs = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), En = (e, t) => {
  const n = X(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: i = 2, absoluteStrokeWidth: a, className: s = "", children: c, ...u }, p) => E(
      "svg",
      {
        ref: p,
        ...Js,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(o) : i,
        className: ["lucide", `lucide-${Qs(e)}`, s].join(" "),
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
const ec = En("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = En("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = En("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
function fo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = fo(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function nc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = fo(e)) && (r && (r += " "), r += t);
  return r;
}
const Pn = "-";
function rc(e) {
  const t = ic(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(a) {
    const s = a.split(Pn);
    return s[0] === "" && s.length !== 1 && s.shift(), po(s, t) || oc(a);
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
function po(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? po(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Pn);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}
const vr = /^\[(.+)\]$/;
function oc(e) {
  if (vr.test(e)) {
    const t = vr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function ic(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return sc(Object.entries(e.classGroups), n).forEach(([i, a]) => {
    mn(a, r, i, t);
  }), r;
}
function mn(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : hr(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ac(o)) {
        mn(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      mn(a, hr(t, i), n, r);
    });
  });
}
function hr(e, t) {
  let n = e;
  return t.split(Pn).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function ac(e) {
  return e.isThemeGetter;
}
function sc(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
    return [n, o];
  }) : e;
}
function cc(e) {
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
const mo = "!";
function lc(e) {
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
    const d = s.length === 0 ? a : a.substring(u), y = d.startsWith(mo), m = y ? d.substring(1) : d, h = p && p > u ? p - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: y,
      baseClassName: m,
      maybePostfixModifierPosition: h
    };
  };
}
function uc(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function dc(e) {
  return {
    cache: cc(e.cacheSize),
    splitModifiers: lc(e),
    ...rc(e)
  };
}
const fc = /\s+/;
function pc(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = /* @__PURE__ */ new Set();
  return e.trim().split(fc).map((a) => {
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
    const m = uc(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? m + mo : m,
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
function mc() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = vo(t)) && (r && (r += " "), r += n);
  return r;
}
function vo(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = vo(e[r])) && (n && (n += " "), n += t);
  return n;
}
function vc(e, ...t) {
  let n, r, o, i = a;
  function a(c) {
    const u = t.reduce((p, d) => d(p), e());
    return n = dc(u), r = n.cache.get, o = n.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = r(c);
    if (u)
      return u;
    const p = pc(c, n);
    return o(c, p), p;
  }
  return function() {
    return i(mc.apply(null, arguments));
  };
}
function Q(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const ho = /^\[(?:([a-z-]+):)?(.+)\]$/i, hc = /^\d+\/\d+$/, gc = /* @__PURE__ */ new Set(["px", "full", "screen"]), bc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wc = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function De(e) {
  return Ge(e) || gc.has(e) || hc.test(e);
}
function Ve(e) {
  return ft(e, "length", _c);
}
function Ge(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ot(e) {
  return ft(e, "number", Ge);
}
function ht(e) {
  return !!e && Number.isInteger(Number(e));
}
function $c(e) {
  return e.endsWith("%") && Ge(e.slice(0, -1));
}
function N(e) {
  return ho.test(e);
}
function ze(e) {
  return bc.test(e);
}
const Sc = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Cc(e) {
  return ft(e, Sc, go);
}
function Ec(e) {
  return ft(e, "position", go);
}
const Pc = /* @__PURE__ */ new Set(["image", "url"]);
function Rc(e) {
  return ft(e, Pc, Ac);
}
function Tc(e) {
  return ft(e, "", Oc);
}
function gt() {
  return !0;
}
function ft(e, t, n) {
  const r = ho.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function _c(e) {
  return yc.test(e);
}
function go() {
  return !1;
}
function Oc(e) {
  return wc.test(e);
}
function Ac(e) {
  return xc.test(e);
}
function kc() {
  const e = Q("colors"), t = Q("spacing"), n = Q("blur"), r = Q("brightness"), o = Q("borderColor"), i = Q("borderRadius"), a = Q("borderSpacing"), s = Q("borderWidth"), c = Q("contrast"), u = Q("grayscale"), p = Q("hueRotate"), d = Q("invert"), y = Q("gap"), m = Q("gradientColorStops"), h = Q("gradientColorStopPositions"), f = Q("inset"), b = Q("margin"), g = Q("opacity"), v = Q("padding"), w = Q("saturate"), $ = Q("scale"), S = Q("sepia"), A = Q("skew"), _ = Q("space"), R = Q("translate"), L = () => ["auto", "contain", "none"], Z = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", N, t], T = () => [N, t], W = () => ["", De, Ve], O = () => ["auto", Ge, N], M = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], k = () => ["solid", "dashed", "dotted", "double", "none"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], te = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ie = () => ["", "0", N], Ce = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], le = () => [Ge, Ot], be = () => [Ge, N];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [gt],
      spacing: [De, Ve],
      blur: ["none", "", ze, N],
      brightness: le(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ze, N],
      borderSpacing: T(),
      borderWidth: W(),
      contrast: le(),
      grayscale: ie(),
      hueRotate: be(),
      invert: ie(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$c, Ve],
      inset: z(),
      margin: z(),
      opacity: le(),
      padding: T(),
      saturate: le(),
      scale: le(),
      sepia: ie(),
      skew: be(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", N]
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
        "break-after": Ce()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ce()
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
        object: [...M(), N]
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
        z: ["auto", ht, N]
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
        flex: ["1", "auto", "initial", "none", N]
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
        order: ["first", "last", "none", ht, N]
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
          span: ["full", ht, N]
        }, N]
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
          span: [ht, N]
        }, N]
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
        "auto-cols": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", N]
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
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
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
        "space-x": [_]
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
        "space-y": [_]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", N, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [N, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [N, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ze]
        }, ze]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [N, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [N, t, "auto", "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", N]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", De, N]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", N]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", N]
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
        decoration: ["auto", "from-font", De, Ve]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", De, N]
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
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N]
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
        content: ["none", N]
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
        bg: [...M(), Ec]
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
        bg: ["auto", "cover", "contain", Cc]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Rc]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
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
        "outline-offset": [De, N]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [De, Ve]
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
        ring: W()
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
        "ring-offset": [De, Ve]
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
        shadow: ["", "inner", "none", ze, Tc]
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
        "mix-blend": B()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
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
        "drop-shadow": ["", "none", ze, N]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N]
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
        ease: ["linear", "in", "out", "in-out", N]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", N]
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
        rotate: [ht, N]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        "will-change": ["auto", "scroll", "contents", "transform", N]
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
        stroke: [De, Ve, Ot]
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
const Ic = /* @__PURE__ */ vc(kc);
function Ae(...e) {
  return Ic(nc(e));
}
const tl = Ys, Dc = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee.jsxs(
  ro,
  {
    ref: r,
    className: Ae(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ ee.jsx(Ks, { asChild: !0, children: /* @__PURE__ */ ee.jsx(uo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Dc.displayName = ro.displayName;
const bo = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  so,
  {
    ref: n,
    className: Ae(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ ee.jsx(tc, { className: "h-4 w-4" })
  }
));
bo.displayName = so.displayName;
const yo = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  co,
  {
    ref: n,
    className: Ae(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ ee.jsx(uo, { className: "h-4 w-4" })
  }
));
yo.displayName = co.displayName;
const Nc = P.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ ee.jsx(Gs, { children: /* @__PURE__ */ ee.jsxs(
  oo,
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
      /* @__PURE__ */ ee.jsx(bo, {}),
      /* @__PURE__ */ ee.jsx(
        qs,
        {
          className: Ae(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ ee.jsx(yo, {})
    ]
  }
) }));
Nc.displayName = oo.displayName;
const Mc = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  io,
  {
    ref: n,
    className: Ae("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Mc.displayName = io.displayName;
const Lc = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee.jsxs(
  ao,
  {
    ref: r,
    className: Ae(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ ee.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ ee.jsx(Zs, { children: /* @__PURE__ */ ee.jsx(ec, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ ee.jsx(Xs, { children: t })
    ]
  }
));
Lc.displayName = ao.displayName;
const jc = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  lo,
  {
    ref: n,
    className: Ae("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
jc.displayName = lo.displayName;
const wo = "Switch", [Fc, nl] = Wt(wo), [Wc, Bc] = Fc(wo), Vc = /* @__PURE__ */ X((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: i, required: a, disabled: s, value: c = "on", onCheckedChange: u, ...p } = e, [d, y] = Y(null), m = pe(
    t,
    (v) => y(v)
  ), h = se(!1), f = d ? !!d.closest("form") : !0, [b = !1, g] = dn({
    prop: o,
    defaultProp: i,
    onChange: u
  });
  return /* @__PURE__ */ E(Wc, {
    scope: n,
    checked: b,
    disabled: s
  }, /* @__PURE__ */ E(ue.button, V({
    type: "button",
    role: "switch",
    "aria-checked": b,
    "aria-required": a,
    "data-state": xo(b),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, p, {
    ref: m,
    onClick: ce(e.onClick, (v) => {
      g(
        (w) => !w
      ), f && (h.current = v.isPropagationStopped(), h.current || v.stopPropagation());
    })
  })), f && /* @__PURE__ */ E(Uc, {
    control: d,
    bubbles: !h.current,
    name: r,
    value: c,
    checked: b,
    required: a,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), zc = "SwitchThumb", Hc = /* @__PURE__ */ X((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = Bc(zc, n);
  return /* @__PURE__ */ E(ue.span, V({
    "data-state": xo(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Uc = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, i = se(null), a = Br(n), s = Dr(t);
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
  ]), /* @__PURE__ */ E("input", V({
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
function xo(e) {
  return e ? "checked" : "unchecked";
}
const $o = Vc, Yc = Hc, Kc = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee.jsx(
  $o,
  {
    className: Ae(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ ee.jsx(
      Yc,
      {
        className: Ae(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Kc.displayName = $o.displayName;
export {
  Jo as Button,
  Xc as RoundButton,
  tl as Select,
  Kc as Switch,
  Zc as ThemeProvider
};
//# sourceMappingURL=azulgato-ui.es.js.map
