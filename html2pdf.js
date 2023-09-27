/*! For license information please see html2pdf.bundle.min.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("html2pdf", [], t)
    : "object" == typeof exports
    ? (exports.html2pdf = t())
    : (e.html2pdf = t());
})(self, function () {
  return (function () {
    var e,
      t,
      r = {
        "./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js":
          function (e, t, r) {
            e.exports = r("./node_modules/core-js-pure/stable/array/from.js");
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/array/is-array.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/date/now.js":
          function (e, t, r) {
            e.exports = r("./node_modules/core-js-pure/stable/date/now.js");
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/bind.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/concat.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/every.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/every.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/fill.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/fill.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/filter.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/for-each.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/includes.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/index-of.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js":
          function (e, t, r) {
            e.exports = r("./node_modules/core-js-pure/stable/instance/map.js");
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/reduce.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reverse.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/reverse.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/slice.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/some.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/some.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/starts-with.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/trim.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/instance/values.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/map.js":
          function (e, t, r) {
            e.exports = r("./node_modules/core-js-pure/stable/map/index.js");
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/object/define-properties.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/object/define-property.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/object/get-own-property-descriptor.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/object/get-own-property-descriptors.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/object/get-own-property-symbols.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js":
          function (e, t, r) {
            e.exports = r("./node_modules/core-js-pure/stable/object/keys.js");
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-float.js":
          function (e, t, r) {
            e.exports = r("./node_modules/core-js-pure/stable/parse-float.js");
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js":
          function (e, t, r) {
            e.exports = r("./node_modules/core-js-pure/stable/parse-int.js");
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/promise/index.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/apply.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/reflect/apply.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/reflect/construct.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/delete-property.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/reflect/delete-property.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/get-prototype-of.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/stable/reflect/get-prototype-of.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js":
          function (e, t, r) {
            e.exports = r("./node_modules/core-js-pure/stable/symbol/index.js");
          },
        "./node_modules/@babel/runtime-corejs3/core-js/array/from.js":
          function (e, t, r) {
            e.exports = r("./node_modules/core-js-pure/features/array/from.js");
          },
        "./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/array/is-array.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/get-iterator-method.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/get-iterator.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/instance/slice.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/object/create.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/object/create.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/object/define-property.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/object/get-own-property-descriptor.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/object/get-prototype-of.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/object/set-prototype-of.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/promise.js": function (
          e,
          t,
          r
        ) {
          e.exports = r(
            "./node_modules/core-js-pure/features/promise/index.js"
          );
        },
        "./node_modules/@babel/runtime-corejs3/core-js/reflect/get.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/reflect/get.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/core-js/symbol.js": function (
          e,
          t,
          r
        ) {
          e.exports = r("./node_modules/core-js-pure/features/symbol/index.js");
        },
        "./node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js":
          function (e, t, r) {
            e.exports = r(
              "./node_modules/core-js-pure/features/symbol/iterator.js"
            );
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/arrayLikeToArray.js":
          function (e, t, r) {
            "use strict";
            function n(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
              return n;
            }
            r.r(t),
              r.d(t, {
                default: function () {
                  return n;
                },
              });
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return o;
                },
              });
            var n = r(
              "./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js"
            );
            function o(e) {
              if (n(e)) return e;
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return s;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/arrayLikeToArray.js"
              );
            function s(e) {
              if (n(e)) return (0, o.default)(e);
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js":
          function (e, t, r) {
            "use strict";
            function n(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            }
            r.r(t),
              r.d(t, {
                default: function () {
                  return n;
                },
              });
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return s;
                },
              });
            var n = r(
              "./node_modules/@babel/runtime-corejs3/core-js/promise.js"
            );
            function o(e, t, r, o, s, i, a) {
              try {
                var A = e[i](a),
                  u = A.value;
              } catch (e) {
                return void r(e);
              }
              A.done ? t(u) : n.resolve(u).then(o, s);
            }
            function s(e) {
              return function () {
                var t = this,
                  r = arguments;
                return new n(function (n, s) {
                  var i = e.apply(t, r);
                  function a(e) {
                    o(i, n, s, a, A, "next", e);
                  }
                  function A(e) {
                    o(i, n, s, a, A, "throw", e);
                  }
                  a(void 0);
                });
              };
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js":
          function (e, t, r) {
            "use strict";
            function n(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            r.r(t),
              r.d(t, {
                default: function () {
                  return n;
                },
              });
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return s;
                },
              });
            var n = r(
              "./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js"
            );
            function o(e, t) {
              for (var r = 0; r < t.length; r++) {
                var o = t[r];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  n(e, o.key, o);
              }
            }
            function s(e, t, r) {
              return t && o(e.prototype, t), r && o(e, r), e;
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return o;
                },
              });
            var n = r(
              "./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js"
            );
            function o(e, t, r) {
              return (
                t in e
                  ? n(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r),
                e
              );
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/get.js": function (
          e,
          t,
          r
        ) {
          "use strict";
          r.r(t),
            r.d(t, {
              default: function () {
                return i;
              },
            });
          var n = r(
              "./node_modules/@babel/runtime-corejs3/core-js/reflect/get.js"
            ),
            o = r(
              "./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js"
            ),
            s = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/superPropBase.js"
            );
          function i(e, t, r) {
            return (i =
              "undefined" != typeof Reflect && n
                ? n
                : function (e, t, r) {
                    var n = (0, s.default)(e, t);
                    if (n) {
                      var i = o(n, t);
                      return i.get ? i.get.call(r) : i.value;
                    }
                  })(e, t, r || e);
          }
        },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return s;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js"
              );
            function s(e) {
              return (s = n
                ? o
                : function (e) {
                    return e.__proto__ || o(e);
                  })(e);
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return s;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/core-js/object/create.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js"
              );
            function s(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = n(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && (0, o.default)(e, t);
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return i;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/core-js/symbol.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js"
              ),
              s = r(
                "./node_modules/@babel/runtime-corejs3/core-js/array/from.js"
              );
            function i(e) {
              if ((void 0 !== n && null != o(e)) || null != e["@@iterator"])
                return s(e);
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return s;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/core-js/symbol.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js"
              );
            function s(e, t) {
              var r =
                null == e ? null : (void 0 !== n && o(e)) || e["@@iterator"];
              if (null != r) {
                var s,
                  i,
                  a = [],
                  A = !0,
                  u = !1;
                try {
                  for (
                    r = r.call(e);
                    !(A = (s = r.next()).done) &&
                    (a.push(s.value), !t || a.length !== t);
                    A = !0
                  );
                } catch (e) {
                  (u = !0), (i = e);
                } finally {
                  try {
                    A || null == r.return || r.return();
                  } finally {
                    if (u) throw i;
                  }
                }
                return a;
              }
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js":
          function (e, t, r) {
            "use strict";
            function n() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            r.r(t),
              r.d(t, {
                default: function () {
                  return n;
                },
              });
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js":
          function (e, t, r) {
            "use strict";
            function n() {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            r.r(t),
              r.d(t, {
                default: function () {
                  return n;
                },
              });
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return s;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js"
              );
            function s(e, t) {
              return !t ||
                ("object" !== (0, n.default)(t) && "function" != typeof t)
                ? (0, o.default)(e)
                : t;
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return o;
                },
              });
            var n = r(
              "./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js"
            );
            function o(e, t) {
              return (o =
                n ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return a;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js"
              ),
              s = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js"
              ),
              i = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js"
              );
            function a(e, t) {
              return (
                (0, n.default)(e) ||
                (0, o.default)(e, t) ||
                (0, s.default)(e, t) ||
                (0, i.default)()
              );
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/superPropBase.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return o;
                },
              });
            var n = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js"
            );
            function o(e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = (0, n.default)(e));

              );
              return e;
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return a;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js"
              ),
              s = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js"
              ),
              i = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js"
              );
            function a(e) {
              return (
                (0, n.default)(e) ||
                (0, o.default)(e) ||
                (0, s.default)(e) ||
                (0, i.default)()
              );
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return s;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/core-js/symbol.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js"
              );
            function s(e) {
              return (s =
                "function" == typeof n && "symbol" == typeof o
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof n &&
                        e.constructor === n &&
                        e !== n.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
          },
        "./node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js":
          function (e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, {
                default: function () {
                  return i;
                },
              });
            var n = r(
                "./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js"
              ),
              o = r(
                "./node_modules/@babel/runtime-corejs3/core-js/array/from.js"
              ),
              s = r(
                "./node_modules/@babel/runtime-corejs3/helpers/esm/arrayLikeToArray.js"
              );
            function i(e, t) {
              var r;
              if (e) {
                if ("string" == typeof e) return (0, s.default)(e, t);
                var i = n((r = Object.prototype.toString.call(e))).call(
                  r,
                  8,
                  -1
                );
                return (
                  "Object" === i && e.constructor && (i = e.constructor.name),
                  "Map" === i || "Set" === i
                    ? o(e)
                    : "Arguments" === i ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                    ? (0, s.default)(e, t)
                    : void 0
                );
              }
            }
          },
        "./node_modules/@babel/runtime-corejs3/regenerator/index.js": function (
          e,
          t,
          r
        ) {
          e.exports = r("./node_modules/regenerator-runtime/runtime.js");
        },
        "./src/plugin/hyperlinks.js": function (e, t, r) {
          "use strict";
          r.r(t),
            r("./node_modules/core-js/modules/web.dom-collections.for-each.js"),
            r("./node_modules/core-js/modules/es.string.link.js");
          var n = r("./src/worker.js"),
            o = r("./src/utils.js"),
            s = [],
            i = {
              toContainer: n.default.prototype.toContainer,
              toPdf: n.default.prototype.toPdf,
            };
          (n.default.prototype.toContainer = function () {
            return i.toContainer.call(this).then(function () {
              if (this.opt.enableLinks) {
                var e = this.prop.container,
                  t = e.querySelectorAll("a"),
                  r = (0, o.unitConvert)(
                    e.getBoundingClientRect(),
                    this.prop.pageSize.k
                  );
                (s = []),
                  Array.prototype.forEach.call(
                    t,
                    function (e) {
                      for (
                        var t = e.getClientRects(), n = 0;
                        n < t.length;
                        n++
                      ) {
                        var i = (0, o.unitConvert)(t[n], this.prop.pageSize.k);
                        (i.left -= r.left), (i.top -= r.top);
                        var a =
                            Math.floor(
                              i.top / this.prop.pageSize.inner.height
                            ) + 1,
                          A =
                            this.opt.margin[0] +
                            (i.top % this.prop.pageSize.inner.height),
                          u = this.opt.margin[1] + i.left;
                        s.push({
                          page: a,
                          top: A,
                          left: u,
                          clientRect: i,
                          link: e,
                        });
                      }
                    },
                    this
                  );
              }
            });
          }),
            (n.default.prototype.toPdf = function () {
              return i.toPdf.call(this).then(function () {
                if (this.opt.enableLinks) {
                  s.forEach(function (e) {
                    this.prop.pdf.setPage(e.page),
                      this.prop.pdf.link(
                        e.left,
                        e.top,
                        e.clientRect.width,
                        e.clientRect.height,
                        { url: e.link.href }
                      );
                  }, this);
                  var e = this.prop.pdf.internal.getNumberOfPages();
                  this.prop.pdf.setPage(e);
                }
              });
            });
        },
        "./src/plugin/jspdf-plugin.js": function (e, t, r) {
          "use strict";
          r.r(t),
            r("./node_modules/core-js/modules/es.symbol.js"),
            r("./node_modules/core-js/modules/es.symbol.description.js"),
            r("./node_modules/core-js/modules/es.object.to-string.js"),
            r("./node_modules/core-js/modules/es.symbol.iterator.js"),
            r("./node_modules/core-js/modules/es.array.iterator.js"),
            r("./node_modules/core-js/modules/es.string.iterator.js"),
            r("./node_modules/core-js/modules/web.dom-collections.iterator.js");
          var n = r("./node_modules/jspdf/dist/jspdf.es.min.js");
          function o(e) {
            return (o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          (n.jsPDF.getPageSize = function (e, t, r) {
            if ("object" === o(e)) {
              var n = e;
              (e = n.orientation), (t = n.unit || t), (r = n.format || r);
            }
            (t = t || "mm"),
              (r = r || "a4"),
              (e = ("" + (e || "P")).toLowerCase());
            var s = ("" + r).toLowerCase(),
              i = {
                a0: [2383.94, 3370.39],
                a1: [1683.78, 2383.94],
                a2: [1190.55, 1683.78],
                a3: [841.89, 1190.55],
                a4: [595.28, 841.89],
                a5: [419.53, 595.28],
                a6: [297.64, 419.53],
                a7: [209.76, 297.64],
                a8: [147.4, 209.76],
                a9: [104.88, 147.4],
                a10: [73.7, 104.88],
                b0: [2834.65, 4008.19],
                b1: [2004.09, 2834.65],
                b2: [1417.32, 2004.09],
                b3: [1000.63, 1417.32],
                b4: [708.66, 1000.63],
                b5: [498.9, 708.66],
                b6: [354.33, 498.9],
                b7: [249.45, 354.33],
                b8: [175.75, 249.45],
                b9: [124.72, 175.75],
                b10: [87.87, 124.72],
                c0: [2599.37, 3676.54],
                c1: [1836.85, 2599.37],
                c2: [1298.27, 1836.85],
                c3: [918.43, 1298.27],
                c4: [649.13, 918.43],
                c5: [459.21, 649.13],
                c6: [323.15, 459.21],
                c7: [229.61, 323.15],
                c8: [161.57, 229.61],
                c9: [113.39, 161.57],
                c10: [79.37, 113.39],
                dl: [311.81, 623.62],
                letter: [612, 792],
                "government-letter": [576, 756],
                legal: [612, 1008],
                "junior-legal": [576, 360],
                ledger: [1224, 792],
                tabloid: [792, 1224],
                "credit-card": [153, 243],
              };
            switch (t) {
              case "pt":
                var a = 1;
                break;
              case "mm":
                a = 72 / 25.4;
                break;
              case "cm":
                a = 72 / 2.54;
                break;
              case "in":
                a = 72;
                break;
              case "px":
                a = 0.75;
                break;
              case "pc":
              case "em":
                a = 12;
                break;
              case "ex":
                a = 6;
                break;
              default:
                throw "Invalid unit: " + t;
            }
            if (i.hasOwnProperty(s))
              var A = i[s][1] / a,
                u = i[s][0] / a;
            else
              try {
                (A = r[1]), (u = r[0]);
              } catch (e) {
                throw new Error("Invalid format: " + r);
              }
            if ("p" === e || "portrait" === e) {
              if (((e = "p"), u > A)) {
                var c = u;
                (u = A), (A = c);
              }
            } else {
              if ("l" !== e && "landscape" !== e)
                throw "Invalid orientation: " + e;
              (e = "l"), A > u && ((c = u), (u = A), (A = c));
            }
            return { width: u, height: A, unit: t, k: a };
          }),
            (t.default = n.jsPDF);
        },
        "./src/plugin/pagebreaks.js": function (e, t, r) {
          "use strict";
          r.r(t),
            r("./node_modules/core-js/modules/es.array.concat.js"),
            r("./node_modules/core-js/modules/es.array.slice.js"),
            r("./node_modules/core-js/modules/es.array.join.js"),
            r("./node_modules/core-js/modules/web.dom-collections.for-each.js"),
            r("./node_modules/core-js/modules/es.object.keys.js");
          var n = r("./src/worker.js"),
            o = r("./src/utils.js"),
            s = { toContainer: n.default.prototype.toContainer };
          (n.default.template.opt.pagebreak = {
            mode: ["css", "legacy"],
            before: [],
            after: [],
            avoid: [],
          }),
            (n.default.prototype.toContainer = function () {
              return s.toContainer.call(this).then(function () {
                var e = this.prop.container,
                  t = this.prop.pageSize.inner.px.height,
                  r = [].concat(this.opt.pagebreak.mode),
                  n = {
                    avoidAll: -1 !== r.indexOf("avoid-all"),
                    css: -1 !== r.indexOf("css"),
                    legacy: -1 !== r.indexOf("legacy"),
                  },
                  s = {},
                  i = this;
                ["before", "after", "avoid"].forEach(function (t) {
                  var r = n.avoidAll && "avoid" === t;
                  (s[t] = r ? [] : [].concat(i.opt.pagebreak[t] || [])),
                    s[t].length > 0 &&
                      (s[t] = Array.prototype.slice.call(
                        e.querySelectorAll(s[t].join(", "))
                      ));
                });
                var a = e.querySelectorAll(".html2pdf__page-break");
                a = Array.prototype.slice.call(a);
                var A = e.querySelectorAll("*");
                Array.prototype.forEach.call(A, function (e) {
                  var r = {
                    before: !1,
                    after: n.legacy && -1 !== a.indexOf(e),
                    avoid: n.avoidAll,
                  };
                  if (n.css) {
                    var i = window.getComputedStyle(e),
                      A = ["always", "page", "left", "right"];
                    r = {
                      before:
                        r.before ||
                        -1 !== A.indexOf(i.breakBefore || i.pageBreakBefore),
                      after:
                        r.after ||
                        -1 !== A.indexOf(i.breakAfter || i.pageBreakAfter),
                      avoid:
                        r.avoid ||
                        -1 !==
                          ["avoid", "avoid-page"].indexOf(
                            i.breakInside || i.pageBreakInside
                          ),
                    };
                  }
                  Object.keys(r).forEach(function (t) {
                    r[t] = r[t] || -1 !== s[t].indexOf(e);
                  });
                  var u = e.getBoundingClientRect();
                  if (r.avoid && !r.before) {
                    var c = Math.floor(u.top / t),
                      l = Math.floor(u.bottom / t),
                      d = Math.abs(u.bottom - u.top) / t;
                    l !== c && d <= 1 && (r.before = !0);
                  }
                  if (r.before) {
                    var f = (0, o.createElement)("div", {
                      style: {
                        display: "block",
                        height: t - (u.top % t) + "px",
                      },
                    });
                    e.parentNode.insertBefore(f, e);
                  }
                  r.after &&
                    ((f = (0, o.createElement)("div", {
                      style: {
                        display: "block",
                        height: t - (u.bottom % t) + "px",
                      },
                    })),
                    e.parentNode.insertBefore(f, e.nextSibling));
                });
              });
            });
        },
        "./src/utils.js": function (e, t, r) {
          "use strict";
          function n(e) {
            return (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          r.r(t),
            r.d(t, {
              objType: function () {
                return o;
              },
              createElement: function () {
                return s;
              },
              cloneNode: function () {
                return i;
              },
              unitConvert: function () {
                return a;
              },
              toPx: function () {
                return A;
              },
            }),
            r("./node_modules/core-js/modules/es.number.constructor.js"),
            r("./node_modules/core-js/modules/es.symbol.js"),
            r("./node_modules/core-js/modules/es.symbol.description.js"),
            r("./node_modules/core-js/modules/es.object.to-string.js"),
            r("./node_modules/core-js/modules/es.symbol.iterator.js"),
            r("./node_modules/core-js/modules/es.array.iterator.js"),
            r("./node_modules/core-js/modules/es.string.iterator.js"),
            r("./node_modules/core-js/modules/web.dom-collections.iterator.js");
          var o = function (e) {
              var t = n(e);
              return "undefined" === t
                ? "undefined"
                : "string" === t || e instanceof String
                ? "string"
                : "number" === t || e instanceof Number
                ? "number"
                : "function" === t || e instanceof Function
                ? "function"
                : e && e.constructor === Array
                ? "array"
                : e && 1 === e.nodeType
                ? "element"
                : "object" === t
                ? "object"
                : "unknown";
            },
            s = function (e, t) {
              var r = document.createElement(e);
              if ((t.className && (r.className = t.className), t.innerHTML)) {
                r.innerHTML = t.innerHTML;
                for (
                  var n = r.getElementsByTagName("script"), o = n.length;
                  o-- > 0;
                  null
                )
                  n[o].parentNode.removeChild(n[o]);
              }
              for (var s in t.style) r.style[s] = t.style[s];
              return r;
            },
            i = function e(t, r) {
              for (
                var n =
                    3 === t.nodeType
                      ? document.createTextNode(t.nodeValue)
                      : t.cloneNode(!1),
                  o = t.firstChild;
                o;
                o = o.nextSibling
              )
                (!0 !== r && 1 === o.nodeType && "SCRIPT" === o.nodeName) ||
                  n.appendChild(e(o, r));
              return (
                1 === t.nodeType &&
                  ("CANVAS" === t.nodeName
                    ? ((n.width = t.width),
                      (n.height = t.height),
                      n.getContext("2d").drawImage(t, 0, 0))
                    : ("TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName) ||
                      (n.value = t.value),
                  n.addEventListener(
                    "load",
                    function () {
                      (n.scrollTop = t.scrollTop),
                        (n.scrollLeft = t.scrollLeft);
                    },
                    !0
                  )),
                n
              );
            },
            a = function (e, t) {
              if ("number" === o(e)) return (72 * e) / 96 / t;
              var r = {};
              for (var n in e) r[n] = (72 * e[n]) / 96 / t;
              return r;
            },
            A = function (e, t) {
              return Math.floor(((e * t) / 72) * 96);
            };
        },
        "./src/worker.js": function (e, t, r) {
          "use strict";
          r.r(t),
            r("./node_modules/core-js/modules/es.object.assign.js"),
            r("./node_modules/core-js/modules/es.array.map.js"),
            r("./node_modules/core-js/modules/es.object.keys.js"),
            r("./node_modules/core-js/modules/es.array.concat.js"),
            r("./node_modules/core-js/modules/es.object.to-string.js"),
            r("./node_modules/core-js/modules/es.regexp.to-string.js"),
            r("./node_modules/core-js/modules/es.function.name.js"),
            r("./node_modules/core-js/modules/web.dom-collections.for-each.js");
          var n = r("./node_modules/jspdf/dist/jspdf.es.min.js"),
            o = r("./node_modules/html2canvas/dist/html2canvas.js"),
            s = r("./src/utils.js"),
            i = r("./node_modules/es6-promise/dist/es6-promise.js"),
            a = r.n(i)().Promise,
            A = function e(t) {
              var r = Object.assign(
                  e.convert(a.resolve()),
                  JSON.parse(JSON.stringify(e.template))
                ),
                n = e.convert(a.resolve(), r);
              return (n = n.setProgress(1, e, 1, [e])).set(t);
            };
          ((A.prototype = Object.create(a.prototype)).constructor = A),
            (A.convert = function (e, t) {
              return (e.__proto__ = t || A.prototype), e;
            }),
            (A.template = {
              prop: {
                src: null,
                container: null,
                overlay: null,
                canvas: null,
                img: null,
                pdf: null,
                pageSize: null,
              },
              progress: { val: 0, state: null, n: 0, stack: [] },
              opt: {
                filename: "file.pdf",
                margin: [0, 0, 0, 0],
                image: { type: "jpeg", quality: 0.95 },
                enableLinks: !0,
                html2canvas: {},
                jsPDF: {},
              },
            }),
            (A.prototype.from = function (e, t) {
              return this.then(function () {
                switch (
                  (t =
                    t ||
                    (function (e) {
                      switch ((0, s.objType)(e)) {
                        case "string":
                          return "string";
                        case "element":
                          return "canvas" === e.nodeName.toLowerCase
                            ? "canvas"
                            : "element";
                        default:
                          return "unknown";
                      }
                    })(e))
                ) {
                  case "string":
                    return this.set({
                      src: (0, s.createElement)("div", { innerHTML: e }),
                    });
                  case "element":
                    return this.set({ src: e });
                  case "canvas":
                    return this.set({ canvas: e });
                  case "img":
                    return this.set({ img: e });
                  default:
                    return this.error("Unknown source type.");
                }
              });
            }),
            (A.prototype.to = function (e) {
              switch (e) {
                case "container":
                  return this.toContainer();
                case "canvas":
                  return this.toCanvas();
                case "img":
                  return this.toImg();
                case "pdf":
                  return this.toPdf();
                default:
                  return this.error("Invalid target.");
              }
            }),
            (A.prototype.toContainer = function () {
              return this.thenList([
                function () {
                  return (
                    this.prop.src ||
                    this.error("Cannot duplicate - no source HTML.")
                  );
                },
                function () {
                  return this.prop.pageSize || this.setPageSize();
                },
              ]).then(function () {
                var e = {
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 1e3,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                  },
                  t = {
                    position: "absolute",
                    width:
                      this.prop.pageSize.inner.width + this.prop.pageSize.unit,
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "auto",
                    margin: "auto",
                    backgroundColor: "white",
                  };
                e.opacity = 0;
                var r = (0, s.cloneNode)(
                  this.prop.src,
                  this.opt.html2canvas.javascriptEnabled
                );
                (this.prop.overlay = (0, s.createElement)("div", {
                  className: "html2pdf__overlay",
                  style: e,
                })),
                  (this.prop.container = (0, s.createElement)("div", {
                    className: "html2pdf__container",
                    style: t,
                  })),
                  this.prop.container.appendChild(r),
                  this.prop.overlay.appendChild(this.prop.container),
                  document.body.appendChild(this.prop.overlay);
              });
            }),
            (A.prototype.toCanvas = function () {
              var e = [
                function () {
                  return (
                    document.body.contains(this.prop.container) ||
                    this.toContainer()
                  );
                },
              ];
              return this.thenList(e)
                .then(function () {
                  var e = Object.assign({}, this.opt.html2canvas);
                  return delete e.onrendered, o(this.prop.container, e);
                })
                .then(function (e) {
                  (this.opt.html2canvas.onrendered || function () {})(e),
                    (this.prop.canvas = e),
                    document.body.removeChild(this.prop.overlay);
                });
            }),
            (A.prototype.toImg = function () {
              return this.thenList([
                function () {
                  return this.prop.canvas || this.toCanvas();
                },
              ]).then(function () {
                var e = this.prop.canvas.toDataURL(
                  "image/" + this.opt.image.type,
                  this.opt.image.quality
                );
                (this.prop.img = document.createElement("img")),
                  (this.prop.img.src = e);
              });
            }),
            (A.prototype.toPdf = function () {
              return this.thenList([
                function () {
                  return this.prop.canvas || this.toCanvas();
                },
              ]).then(function () {
                var e = this.prop.canvas,
                  t = this.opt,
                  r = e.height,
                  o = Math.floor(e.width * this.prop.pageSize.inner.ratio),
                  s = Math.ceil(r / o),
                  i = this.prop.pageSize.inner.height,
                  a = document.createElement("canvas"),
                  A = a.getContext("2d");
                (a.width = e.width),
                  (a.height = o),
                  (this.prop.pdf = this.prop.pdf || new n.jsPDF(t.jsPDF));
                for (var u = 0; u < s; u++) {
                  u === s - 1 &&
                    r % o != 0 &&
                    ((a.height = r % o),
                    (i =
                      (a.height * this.prop.pageSize.inner.width) / a.width));
                  var c = a.width,
                    l = a.height;
                  (A.fillStyle = "white"),
                    A.fillRect(0, 0, c, l),
                    A.drawImage(e, 0, u * o, c, l, 0, 0, c, l),
                    u && this.prop.pdf.addPage();
                  var d = a.toDataURL("image/" + t.image.type, t.image.quality);
                  this.prop.pdf.addImage(
                    d,
                    t.image.type,
                    t.margin[1],
                    t.margin[0],
                    this.prop.pageSize.inner.width,
                    i
                  );
                }
              });
            }),
            (A.prototype.output = function (e, t, r) {
              return "img" === (r = r || "pdf").toLowerCase() ||
                "image" === r.toLowerCase()
                ? this.outputImg(e, t)
                : this.outputPdf(e, t);
            }),
            (A.prototype.outputPdf = function (e, t) {
              return this.thenList([
                function () {
                  return this.prop.pdf || this.toPdf();
                },
              ]).then(function () {
                return this.prop.pdf.output(e, t);
              });
            }),
            (A.prototype.outputImg = function (e, t) {
              return this.thenList([
                function () {
                  return this.prop.img || this.toImg();
                },
              ]).then(function () {
                switch (e) {
                  case void 0:
                  case "img":
                    return this.prop.img;
                  case "datauristring":
                  case "dataurlstring":
                    return this.prop.img.src;
                  case "datauri":
                  case "dataurl":
                    return (document.location.href = this.prop.img.src);
                  default:
                    throw 'Image output type "' + e + '" is not supported.';
                }
              });
            }),
            (A.prototype.save = function (e) {
              return this.thenList([
                function () {
                  return this.prop.pdf || this.toPdf();
                },
              ])
                .set(e ? { filename: e } : null)
                .then(function () {
                  this.prop.pdf.save(this.opt.filename);
                });
            }),
            (A.prototype.set = function (e) {
              if ("object" !== (0, s.objType)(e)) return this;
              var t = Object.keys(e || {}).map(function (t) {
                switch (t) {
                  case "margin":
                    return this.setMargin.bind(this, e.margin);
                  case "jsPDF":
                    return function () {
                      return (this.opt.jsPDF = e.jsPDF), this.setPageSize();
                    };
                  case "pageSize":
                    return this.setPageSize.bind(this, e.pageSize);
                  default:
                    return t in A.template.prop
                      ? function () {
                          this.prop[t] = e[t];
                        }
                      : function () {
                          this.opt[t] = e[t];
                        };
                }
              }, this);
              return this.then(function () {
                return this.thenList(t);
              });
            }),
            (A.prototype.get = function (e, t) {
              return this.then(function () {
                var r = e in A.template.prop ? this.prop[e] : this.opt[e];
                return t ? t(r) : r;
              });
            }),
            (A.prototype.setMargin = function (e) {
              return this.then(function () {
                switch ((0, s.objType)(e)) {
                  case "number":
                    e = [e, e, e, e];
                  case "array":
                    if (
                      (2 === e.length && (e = [e[0], e[1], e[0], e[1]]),
                      4 === e.length)
                    )
                      break;
                  default:
                    return this.error("Invalid margin array.");
                }
                this.opt.margin = e;
              }).then(this.setPageSize);
            }),
            (A.prototype.setPageSize = function (e) {
              return this.then(function () {
                (e = e || n.jsPDF.getPageSize(this.opt.jsPDF)).hasOwnProperty(
                  "inner"
                ) ||
                  ((e.inner = {
                    width: e.width - this.opt.margin[1] - this.opt.margin[3],
                    height: e.height - this.opt.margin[0] - this.opt.margin[2],
                  }),
                  (e.inner.px = {
                    width: (0, s.toPx)(e.inner.width, e.k),
                    height: (0, s.toPx)(e.inner.height, e.k),
                  }),
                  (e.inner.ratio = e.inner.height / e.inner.width)),
                  (this.prop.pageSize = e);
              });
            }),
            (A.prototype.setProgress = function (e, t, r, n) {
              return (
                null != e && (this.progress.val = e),
                null != t && (this.progress.state = t),
                null != r && (this.progress.n = r),
                null != n && (this.progress.stack = n),
                (this.progress.ratio = this.progress.val / this.progress.state),
                this
              );
            }),
            (A.prototype.updateProgress = function (e, t, r, n) {
              return this.setProgress(
                e ? this.progress.val + e : null,
                t || null,
                r ? this.progress.n + r : null,
                n ? this.progress.stack.concat(n) : null
              );
            }),
            (A.prototype.then = function (e, t) {
              var r = this;
              return this.thenCore(e, t, function (e, t) {
                return (
                  r.updateProgress(null, null, 1, [e]),
                  a.prototype.then
                    .call(this, function (t) {
                      return r.updateProgress(null, e), t;
                    })
                    .then(e, t)
                    .then(function (e) {
                      return r.updateProgress(1), e;
                    })
                );
              });
            }),
            (A.prototype.thenCore = function (e, t, r) {
              r = r || a.prototype.then;
              var n = this;
              e && (e = e.bind(n)), t && (t = t.bind(n));
              var o =
                  -1 !== a.toString().indexOf("[native code]") &&
                  "Promise" === a.name
                    ? n
                    : A.convert(Object.assign({}, n), a.prototype),
                s = r.call(o, e, t);
              return A.convert(s, n.__proto__);
            }),
            (A.prototype.thenExternal = function (e, t) {
              return a.prototype.then.call(this, e, t);
            }),
            (A.prototype.thenList = function (e) {
              var t = this;
              return (
                e.forEach(function (e) {
                  t = t.thenCore(e);
                }),
                t
              );
            }),
            (A.prototype.catch = function (e) {
              e && (e = e.bind(this));
              var t = a.prototype.catch.call(this, e);
              return A.convert(t, this);
            }),
            (A.prototype.catchExternal = function (e) {
              return a.prototype.catch.call(this, e);
            }),
            (A.prototype.error = function (e) {
              return this.then(function () {
                throw new Error(e);
              });
            }),
            (A.prototype.using = A.prototype.set),
            (A.prototype.saveAs = A.prototype.save),
            (A.prototype.export = A.prototype.output),
            (A.prototype.run = A.prototype.then),
            (t.default = A);
        },
        "./node_modules/canvg/lib/index.es.js": function (e, t, r) {
          "use strict";
          r.r(t),
            r.d(t, {
              AElement: function () {
                return pr;
              },
              AnimateColorElement: function () {
                return ar;
              },
              AnimateElement: function () {
                return ir;
              },
              AnimateTransformElement: function () {
                return Ar;
              },
              BoundingBox: function () {
                return Ot;
              },
              CB1: function () {
                return at;
              },
              CB2: function () {
                return At;
              },
              CB3: function () {
                return ut;
              },
              CB4: function () {
                return ct;
              },
              Canvg: function () {
                return qr;
              },
              CircleElement: function () {
                return Gt;
              },
              ClipPathElement: function () {
                return Sr;
              },
              DefsElement: function () {
                return er;
              },
              DescElement: function () {
                return kr;
              },
              Document: function () {
                return Kr;
              },
              Element: function () {
                return St;
              },
              EllipseElement: function () {
                return Xt;
              },
              FeColorMatrixElement: function () {
                return Qr;
              },
              FeCompositeElement: function () {
                return Ir;
              },
              FeDropShadowElement: function () {
                return Tr;
              },
              FeGaussianBlurElement: function () {
                return Pr;
              },
              FeMorphologyElement: function () {
                return Hr;
              },
              FilterElement: function () {
                return Lr;
              },
              Font: function () {
                return Pt;
              },
              FontElement: function () {
                return cr;
              },
              FontFaceElement: function () {
                return lr;
              },
              GElement: function () {
                return tr;
              },
              GlyphElement: function () {
                return fr;
              },
              GradientElement: function () {
                return rr;
              },
              ImageElement: function () {
                return wr;
              },
              LineElement: function () {
                return Wt;
              },
              LinearGradientElement: function () {
                return nr;
              },
              MarkerElement: function () {
                return $t;
              },
              MaskElement: function () {
                return Fr;
              },
              Matrix: function () {
                return Et;
              },
              MissingGlyphElement: function () {
                return dr;
              },
              Mouse: function () {
                return gt;
              },
              PSEUDO_ZERO: function () {
                return nt;
              },
              Parser: function () {
                return jt;
              },
              PathElement: function () {
                return zt;
              },
              PathParser: function () {
                return Kt;
              },
              PatternElement: function () {
                return Zt;
              },
              Point: function () {
                return mt;
              },
              PolygonElement: function () {
                return Yt;
              },
              PolylineElement: function () {
                return Jt;
              },
              Property: function () {
                return ht;
              },
              QB1: function () {
                return lt;
              },
              QB2: function () {
                return dt;
              },
              QB3: function () {
                return ft;
              },
              RadialGradientElement: function () {
                return or;
              },
              RectElement: function () {
                return qt;
              },
              RenderedElement: function () {
                return kt;
              },
              Rotate: function () {
                return Ct;
              },
              SVGElement: function () {
                return Vt;
              },
              SVGFontLoader: function () {
                return Br;
              },
              Scale: function () {
                return xt;
              },
              Screen: function () {
                return wt;
              },
              Skew: function () {
                return Nt;
              },
              SkewX: function () {
                return Qt;
              },
              SkewY: function () {
                return Ft;
              },
              StopElement: function () {
                return sr;
              },
              StyleElement: function () {
                return jr;
              },
              SymbolElement: function () {
                return br;
              },
              TRefElement: function () {
                return hr;
              },
              TSpanElement: function () {
                return Mt;
              },
              TextElement: function () {
                return Rt;
              },
              TextPathElement: function () {
                return vr;
              },
              TitleElement: function () {
                return Or;
              },
              Transform: function () {
                return Ut;
              },
              Translate: function () {
                return _t;
              },
              UnknownElement: function () {
                return Lt;
              },
              UseElement: function () {
                return _r;
              },
              ViewPort: function () {
                return pt;
              },
              compressSpaces: function () {
                return Re;
              },
              getSelectorSpecificity: function () {
                return rt;
              },
              normalizeAttributeName: function () {
                return Ve;
              },
              normalizeColor: function () {
                return Ge;
              },
              parseExternalUrl: function () {
                return qe;
              },
              presets: function () {
                return Gr;
              },
              toNumbers: function () {
                return Ke;
              },
              trimLeft: function () {
                return Me;
              },
              trimRight: function () {
                return De;
              },
              vectorMagnitude: function () {
                return ot;
              },
              vectorsAngle: function () {
                return it;
              },
              vectorsRatio: function () {
                return st;
              },
            });
          var n = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js"
            ),
            o = r.n(n),
            s = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-float.js"
            ),
            i = r.n(s),
            a = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"
            ),
            A = r.n(a),
            u = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js"
            ),
            c = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js"
            ),
            l = r.n(c),
            d = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js"
            ),
            f = r.n(d),
            h = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js"
            ),
            p = r.n(h),
            m = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"
            ),
            g = r.n(m),
            y = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js"
            ),
            v = r.n(y),
            w = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"
            ),
            b = r.n(w),
            B = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js"
            ),
            j = r.n(B),
            _ = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"
            ),
            C = r.n(_),
            x = r("./node_modules/@babel/runtime-corejs3/regenerator/index.js"),
            E = r.n(x),
            N = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js"
            ),
            Q = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js"
            ),
            F = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js"
            ),
            U = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js"
            ),
            S = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"
            ),
            L = r.n(S),
            T = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js"
            ),
            H = r.n(T),
            I = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/date/now.js"
            ),
            P = r.n(I),
            O = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/every.js"
            ),
            k = r.n(O),
            R = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js"
            ),
            M = r.n(R),
            D = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js"
            ),
            K = r.n(D),
            z = r("./node_modules/raf/index.js"),
            V = r.n(z),
            q = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"
            ),
            G = r.n(q),
            X = r("./node_modules/rgbcolor/index.js"),
            W = r.n(X),
            J = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js"
            ),
            Y = r.n(J),
            Z = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js"
            ),
            $ = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js"
            ),
            ee = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js"
            ),
            te = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js"
            ),
            re = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/some.js"
            ),
            ne = r.n(re),
            oe = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js"
            ),
            se = r.n(oe),
            ie = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js"
            ),
            ae = r.n(ie),
            Ae = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reverse.js"
            ),
            ue = r.n(Ae),
            ce = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"
            ),
            le = r.n(ce),
            de = r("./node_modules/@babel/runtime-corejs3/helpers/esm/get.js"),
            fe = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/fill.js"
            ),
            he = r.n(fe),
            pe = r("./node_modules/svg-pathdata/lib/SVGPathData.module.js"),
            me = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/delete-property.js"
            ),
            ge = r.n(me),
            ye = r(
              "./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js"
            ),
            ve = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js"
            ),
            we = r.n(ve),
            be = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"
            ),
            Be = r.n(be),
            je = r(
              "./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js"
            ),
            _e = r.n(je),
            Ce = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"
            ),
            xe = r.n(Ce),
            Ee = r(
              "./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js"
            ),
            Ne = r.n(Ee),
            Qe = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js"
            ),
            Fe = r.n(Qe),
            Ue = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"
            ),
            Se = r.n(Ue),
            Le = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/map.js"
            ),
            Te = r.n(Le),
            He = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/apply.js"
            ),
            Ie = r.n(He),
            Pe = r(
              "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/get-prototype-of.js"
            ),
            Oe = r.n(Pe),
            ke = r("./node_modules/stackblur-canvas/dist/stackblur-es.js");
          function Re(e) {
            return e.replace(/(?!\u3000)\s+/gm, " ");
          }
          function Me(e) {
            return e.replace(/^[\n \t]+/, "");
          }
          function De(e) {
            return e.replace(/[\n \t]+$/, "");
          }
          function Ke(e) {
            var t =
              (e || "").match(
                /-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm
              ) || [];
            return A()(t).call(t, i());
          }
          var ze = /^[A-Z-]+$/;
          function Ve(e) {
            return ze.test(e) ? e.toLowerCase() : e;
          }
          function qe(e) {
            var t = e.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || [];
            return t[2] || t[3] || t[4];
          }
          function Ge(e) {
            if (!o()(e).call(e, "rgb")) return e;
            var t = 3;
            return e.replace(/\d+(\.\d+)?/g, function (e, r) {
              return t-- && r ? String(Math.round(i()(e))) : e;
            });
          }
          var Xe = /(\[[^\]]+\])/g,
            We = /(#[^\s\+>~\.\[:]+)/g,
            Je = /(\.[^\s\+>~\.\[:]+)/g,
            Ye =
              /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
            Ze = /(:[\w-]+\([^\)]*\))/gi,
            $e = /(:[^\s\+>~\.\[:]+)/g,
            et = /([^\s\+>~\.\[:]+)/g;
          function tt(e, t) {
            var r = e.match(t);
            return r ? [e.replace(t, " "), r.length] : [e, 0];
          }
          function rt(e) {
            var t = [0, 0, 0],
              r = e
                .replace(/:not\(([^\)]*)\)/g, "     $1 ")
                .replace(/{[\s\S]*/gm, " "),
              n = 0,
              o = tt(r, Xe),
              s = (0, u.default)(o, 2);
            (r = s[0]), (n = s[1]), (t[1] += n);
            var i = tt(r, We),
              a = (0, u.default)(i, 2);
            (r = a[0]), (n = a[1]), (t[0] += n);
            var A = tt(r, Je),
              c = (0, u.default)(A, 2);
            (r = c[0]), (n = c[1]), (t[1] += n);
            var l = tt(r, Ye),
              d = (0, u.default)(l, 2);
            (r = d[0]), (n = d[1]), (t[2] += n);
            var f = tt(r, Ze),
              h = (0, u.default)(f, 2);
            (r = h[0]), (n = h[1]), (t[1] += n);
            var p = tt(r, $e),
              m = (0, u.default)(p, 2);
            (r = m[0]), (n = m[1]), (t[1] += n);
            var g = tt(
                (r = r.replace(/[\*\s\+>~]/g, " ").replace(/[#\.]/g, " ")),
                et
              ),
              y = (0, u.default)(g, 2);
            return (r = y[0]), (n = y[1]), (t[2] += n), t.join("");
          }
          var nt = 1e-8;
          function ot(e) {
            return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2));
          }
          function st(e, t) {
            return (e[0] * t[0] + e[1] * t[1]) / (ot(e) * ot(t));
          }
          function it(e, t) {
            return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(st(e, t));
          }
          function at(e) {
            return e * e * e;
          }
          function At(e) {
            return 3 * e * e * (1 - e);
          }
          function ut(e) {
            return 3 * e * (1 - e) * (1 - e);
          }
          function ct(e) {
            return (1 - e) * (1 - e) * (1 - e);
          }
          function lt(e) {
            return e * e;
          }
          function dt(e) {
            return 2 * e * (1 - e);
          }
          function ft(e) {
            return (1 - e) * (1 - e);
          }
          var ht = (function () {
            function e(t, r, n) {
              (0, F.default)(this, e),
                (this.document = t),
                (this.name = r),
                (this.value = n),
                (this.isNormalizedColor = !1);
            }
            return (
              (0, U.default)(
                e,
                [
                  {
                    key: "split",
                    value: function () {
                      var t,
                        r,
                        n =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : " ",
                        o = this.document,
                        s = this.name;
                      return A()(
                        (t = G()((r = Re(this.getString())))
                          .call(r)
                          .split(n))
                      ).call(t, function (t) {
                        return new e(o, s, t);
                      });
                    },
                  },
                  {
                    key: "hasValue",
                    value: function (e) {
                      var t = this.value;
                      return (
                        null !== t && "" !== t && (e || 0 !== t) && void 0 !== t
                      );
                    },
                  },
                  {
                    key: "isString",
                    value: function (e) {
                      var t = this.value,
                        r = "string" == typeof t;
                      return r && e ? e.test(t) : r;
                    },
                  },
                  {
                    key: "isUrlDefinition",
                    value: function () {
                      return this.isString(/^url\(/);
                    },
                  },
                  {
                    key: "isPixels",
                    value: function () {
                      if (!this.hasValue()) return !1;
                      var e = this.getString();
                      switch (!0) {
                        case /px$/.test(e):
                        case /^[0-9]+$/.test(e):
                          return !0;
                        default:
                          return !1;
                      }
                    },
                  },
                  {
                    key: "setValue",
                    value: function (e) {
                      return (this.value = e), this;
                    },
                  },
                  {
                    key: "getValue",
                    value: function (e) {
                      return void 0 === e || this.hasValue() ? this.value : e;
                    },
                  },
                  {
                    key: "getNumber",
                    value: function (e) {
                      if (!this.hasValue()) return void 0 === e ? 0 : i()(e);
                      var t = this.value,
                        r = i()(t);
                      return this.isString(/%$/) && (r /= 100), r;
                    },
                  },
                  {
                    key: "getString",
                    value: function (e) {
                      return void 0 === e || this.hasValue()
                        ? void 0 === this.value
                          ? ""
                          : String(this.value)
                        : String(e);
                    },
                  },
                  {
                    key: "getColor",
                    value: function (e) {
                      var t = this.getString(e);
                      return (
                        this.isNormalizedColor ||
                          ((this.isNormalizedColor = !0),
                          (t = Ge(t)),
                          (this.value = t)),
                        t
                      );
                    },
                  },
                  {
                    key: "getDpi",
                    value: function () {
                      return 96;
                    },
                  },
                  {
                    key: "getRem",
                    value: function () {
                      return this.document.rootEmSize;
                    },
                  },
                  {
                    key: "getEm",
                    value: function () {
                      return this.document.emSize;
                    },
                  },
                  {
                    key: "getUnits",
                    value: function () {
                      return this.getString().replace(/[0-9\.\-]/g, "");
                    },
                  },
                  {
                    key: "getPixels",
                    value: function (e) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      if (!this.hasValue()) return 0;
                      var r = "boolean" == typeof e ? [void 0, e] : [e],
                        n = (0, u.default)(r, 2),
                        o = n[0],
                        s = n[1],
                        i = this.document.screen.viewPort;
                      switch (!0) {
                        case this.isString(/vmin$/):
                          return (
                            (this.getNumber() / 100) *
                            Math.min(i.computeSize("x"), i.computeSize("y"))
                          );
                        case this.isString(/vmax$/):
                          return (
                            (this.getNumber() / 100) *
                            Math.max(i.computeSize("x"), i.computeSize("y"))
                          );
                        case this.isString(/vw$/):
                          return (this.getNumber() / 100) * i.computeSize("x");
                        case this.isString(/vh$/):
                          return (this.getNumber() / 100) * i.computeSize("y");
                        case this.isString(/rem$/):
                          return this.getNumber() * this.getRem();
                        case this.isString(/em$/):
                          return this.getNumber() * this.getEm();
                        case this.isString(/ex$/):
                          return (this.getNumber() * this.getEm()) / 2;
                        case this.isString(/px$/):
                          return this.getNumber();
                        case this.isString(/pt$/):
                          return this.getNumber() * this.getDpi() * (1 / 72);
                        case this.isString(/pc$/):
                          return 15 * this.getNumber();
                        case this.isString(/cm$/):
                          return (this.getNumber() * this.getDpi()) / 2.54;
                        case this.isString(/mm$/):
                          return (this.getNumber() * this.getDpi()) / 25.4;
                        case this.isString(/in$/):
                          return this.getNumber() * this.getDpi();
                        case this.isString(/%$/) && s:
                          return this.getNumber() * this.getEm();
                        case this.isString(/%$/):
                          return this.getNumber() * i.computeSize(o);
                        default:
                          var a = this.getNumber();
                          return t && a < 1 ? a * i.computeSize(o) : a;
                      }
                    },
                  },
                  {
                    key: "getMilliseconds",
                    value: function () {
                      return this.hasValue()
                        ? this.isString(/ms$/)
                          ? this.getNumber()
                          : 1e3 * this.getNumber()
                        : 0;
                    },
                  },
                  {
                    key: "getRadians",
                    value: function () {
                      if (!this.hasValue()) return 0;
                      switch (!0) {
                        case this.isString(/deg$/):
                          return this.getNumber() * (Math.PI / 180);
                        case this.isString(/grad$/):
                          return this.getNumber() * (Math.PI / 200);
                        case this.isString(/rad$/):
                          return this.getNumber();
                        default:
                          return this.getNumber() * (Math.PI / 180);
                      }
                    },
                  },
                  {
                    key: "getDefinition",
                    value: function () {
                      var e = this.getString(),
                        t = e.match(/#([^\)'"]+)/);
                      return (
                        t && (t = t[1]),
                        t || (t = e),
                        this.document.definitions[t]
                      );
                    },
                  },
                  {
                    key: "getFillStyleDefinition",
                    value: function (e, t) {
                      var r = this.getDefinition();
                      if (!r) return null;
                      if ("function" == typeof r.createGradient)
                        return r.createGradient(this.document.ctx, e, t);
                      if ("function" == typeof r.createPattern) {
                        if (r.getHrefAttribute().hasValue()) {
                          var n = r.getAttribute("patternTransform");
                          (r = r.getHrefAttribute().getDefinition()),
                            n.hasValue() &&
                              r
                                .getAttribute("patternTransform", !0)
                                .setValue(n.value);
                        }
                        return r.createPattern(this.document.ctx, e, t);
                      }
                      return null;
                    },
                  },
                  {
                    key: "getTextBaseline",
                    value: function () {
                      return this.hasValue()
                        ? e.textBaselineMapping[this.getString()]
                        : null;
                    },
                  },
                  {
                    key: "addOpacity",
                    value: function (t) {
                      for (
                        var r = this.getColor(), n = r.length, o = 0, s = 0;
                        s < n && ("," === r[s] && o++, 3 !== o);
                        s++
                      );
                      if (t.hasValue() && this.isString() && 3 !== o) {
                        var i = new (W())(r);
                        i.ok && ((i.alpha = t.getNumber()), (r = i.toRGBA()));
                      }
                      return new e(this.document, this.name, r);
                    },
                  },
                ],
                [
                  {
                    key: "empty",
                    value: function (t) {
                      return new e(t, "EMPTY", "");
                    },
                  },
                ]
              ),
              e
            );
          })();
          ht.textBaselineMapping = {
            baseline: "alphabetic",
            "before-edge": "top",
            "text-before-edge": "top",
            middle: "middle",
            central: "middle",
            "after-edge": "bottom",
            "text-after-edge": "bottom",
            ideographic: "ideographic",
            alphabetic: "alphabetic",
            hanging: "hanging",
            mathematical: "alphabetic",
          }}}})})