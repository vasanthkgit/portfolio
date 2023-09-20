/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = []
      , r = Object.getPrototypeOf
      , o = n.slice
      , i = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , a = n.push
      , s = n.indexOf
      , u = {}
      , l = u.toString
      , c = u.hasOwnProperty
      , f = c.toString
      , d = f.call(Object)
      , p = {}
      , h = function isFunction(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , g = function isWindow(e) {
        return null != e && e === e.window
    }
      , m = e.document
      , v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function DOMEval(e, t, n) {
        var r, o, i = (n = n || m).createElement("script");
        if (i.text = e,
        t)
            for (r in v)
                (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
    }
    function toType(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var y = "3.5.1"
      , jQuery = function(e, t) {
        return new jQuery.fn.init(e,t)
    };
    function isArrayLike(e) {
        var t = !!e && "length"in e && e.length
          , n = toType(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    jQuery.fn = jQuery.prototype = {
        jquery: y,
        constructor: jQuery,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = jQuery.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return jQuery.each(this, e)
        },
        map: function(e) {
            return this.pushStack(jQuery.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, (function(e, t) {
                return (t + 1) % 2
            }
            )))
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, (function(e, t) {
                return t % 2
            }
            )))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    jQuery.extend = jQuery.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || h(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (jQuery.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t],
                    i = o && !Array.isArray(n) ? [] : o || jQuery.isPlainObject(n) ? n : {},
                    o = !1,
                    a[t] = jQuery.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    jQuery.extend({
        expando: "jQuery" + (y + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || "function" == typeof (n = c.call(t, "constructor") && t.constructor) && f.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            DOMEval(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (isArrayLike(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (isArrayLike(Object(e)) ? jQuery.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                !t(e[o], o) !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, a = 0, s = [];
            if (isArrayLike(e))
                for (r = e.length; a < r; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return i(s)
        },
        guid: 1,
        support: p
    }),
    "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = n[Symbol.iterator]),
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var x = /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
    function(e) {
        var t, n, r, o, i, a, s, u, l, c, f, d, p, h, g, m, v, y, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, S = createCache(), A = createCache(), k = createCache(), E = createCache(), sortOrder = function(e, t) {
            return e === t && (f = !0),
            0
        }, N = {}.hasOwnProperty, D = [], j = D.pop, P = D.push, L = D.push, q = D.slice, indexOf = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", O = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", F = "\\[[\\x20\\t\\r\\n\\f]*(" + M + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + O + "*\\]", z = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", I = new RegExp(O + "+","g"), R = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"), W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), B = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), $ = new RegExp(O + "|>"), _ = new RegExp(z), U = new RegExp("^" + M + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + z),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),
            bool: new RegExp("^(?:" + H + ")$","i"),
            needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")
        }, G = /HTML$/i, V = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"), funescape = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, unloadHandler = function() {
            d()
        }, te = addCombinator((function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(D = q.call(w.childNodes), w.childNodes),
            D[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: D.length ? function(e, t) {
                    P.apply(e, q.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function Sizzle(e, t, r, o) {
            var i, s, l, c, f, h, v, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                return r;
            if (!o && (d(t),
            t = t || p,
            g)) {
                if (11 !== w && (f = J.exec(e)))
                    if (i = f[1]) {
                        if (9 === w) {
                            if (!(l = t.getElementById(i)))
                                return r;
                            if (l.id === i)
                                return r.push(l),
                                r
                        } else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return L.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(r, t.getElementsByClassName(i)),
                            r
                    }
                if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e,
                    y = t,
                    1 === w && ($.test(e) || B.test(e))) {
                        for ((y = K.test(e) && testContext(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ee, fcssescape) : t.setAttribute("id", c = b)),
                        s = (h = a(e)).length; s--; )
                            h[s] = (c ? "#" + c : ":scope") + " " + toSelector(h[s]);
                        v = h.join(",")
                    }
                    try {
                        return L.apply(r, y.querySelectorAll(v)),
                        r
                    } catch (t) {
                        E(e, !0)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(R, "$1"), t, r, o)
        }
        function createCache() {
            var e = [];
            return function cache(t, n) {
                return e.push(t + " ") > r.cacheLength && delete cache[e.shift()],
                cache[t + " "] = n
            }
        }
        function markFunction(e) {
            return e[b] = !0,
            e
        }
        function assert(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function addHandle(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
                r.attrHandle[n[o]] = t
        }
        function siblingCheck(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function createInputPseudo(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function createButtonPseudo(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function createDisabledPseudo(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && te(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function createPositionalPseudo(e) {
            return markFunction((function(t) {
                return t = +t,
                markFunction((function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                        n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                }
                ))
            }
            ))
        }
        function testContext(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = Sizzle.support = {},
        i = Sizzle.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !G.test(t || n && n.nodeName || "HTML")
        }
        ,
        d = Sizzle.setDocument = function(e) {
            var t, o, a = e ? e.ownerDocument || e : w;
            return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement,
            g = !i(p),
            w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", unloadHandler, !1) : o.attachEvent && o.attachEvent("onunload", unloadHandler)),
            n.scope = assert((function(e) {
                return h.appendChild(e).appendChild(p.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }
            )),
            n.attributes = assert((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            n.getElementsByTagName = assert((function(e) {
                return e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            n.getElementsByClassName = Q.test(p.getElementsByClassName),
            n.getById = assert((function(e) {
                return h.appendChild(e).id = b,
                !p.getElementsByName || !p.getElementsByName(b).length
            }
            )),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, funescape);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Z, funescape);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if ((n = i.getAttributeNode("id")) && n.value === e)
                            return [i];
                        for (o = t.getElementsByName(e),
                        r = 0; i = o[r++]; )
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            m = [],
            (n.qsa = Q.test(p.querySelectorAll)) && (assert((function(e) {
                var t;
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + H + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                (t = p.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                m.push("[\\r\\n\\f]")
            }
            )),
            assert((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            }
            ))),
            (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && assert((function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                v.push("!=", z)
            }
            )),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = Q.test(h.compareDocumentPosition),
            x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            sortOrder = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && x(w, e) ? -1 : t == p || t.ownerDocument == w && x(w, t) ? 1 : c ? indexOf(c, e) - indexOf(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
                if (!o || !i)
                    return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : c ? indexOf(c, e) - indexOf(c, t) : 0;
                if (o === i)
                    return siblingCheck(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? siblingCheck(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
            }
            ,
            p) : p
        }
        ,
        Sizzle.matches = function(e, t) {
            return Sizzle(e, null, null, t)
        }
        ,
        Sizzle.matchesSelector = function(e, t) {
            if (d(e),
            n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {
                    E(t, !0)
                }
            return Sizzle(t, p, null, [e]).length > 0
        }
        ,
        Sizzle.contains = function(e, t) {
            return (e.ownerDocument || e) != p && d(e),
            x(e, t)
        }
        ,
        Sizzle.attr = function(e, t) {
            (e.ownerDocument || e) != p && d(e);
            var o = r.attrHandle[t.toLowerCase()]
              , i = o && N.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        Sizzle.escape = function(e) {
            return (e + "").replace(ee, fcssescape)
        }
        ,
        Sizzle.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        Sizzle.uniqueSort = function(e) {
            var t, r = [], o = 0, i = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(sortOrder),
            f) {
                for (; t = e[i++]; )
                    t === e[i] && (o = r.push(i));
                for (; o--; )
                    e.splice(r[o], 1)
            }
            return c = null,
            e
        }
        ,
        o = Sizzle.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += o(t);
            return n
        }
        ,
        r = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, funescape),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, funescape),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || Sizzle.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Sizzle.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && _.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, funescape).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + O + "|$)")) && S(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var o = Sizzle.attr(r, e);
                        return null == o ? "!=" === t : !t || (o += "",
                        "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, d, p, h, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                        if (m) {
                            if (i) {
                                for (; g; ) {
                                    for (d = t; d = d[g]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && y) {
                                for (x = (p = (l = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++x && d === t) {
                                        c[e] = [T, p, x];
                                        break
                                    }
                            } else if (y && (x = p = (l = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                for (; (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, x]),
                                d !== t)); )
                                    ;
                            return (x -= o) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || Sizzle.error("unsupported pseudo: " + e);
                    return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? markFunction((function(e, n) {
                        for (var r, i = o(e, t), a = i.length; a--; )
                            e[r = indexOf(e, i[a])] = !(n[r] = i[a])
                    }
                    )) : function(e) {
                        return o(e, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: markFunction((function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(R, "$1"));
                    return r[b] ? markFunction((function(e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--; )
                            (i = a[s]) && (e[s] = !(t[s] = i))
                    }
                    )) : function(e, o, i) {
                        return t[0] = e,
                        r(t, null, i, n),
                        t[0] = null,
                        !n.pop()
                    }
                }
                )),
                has: markFunction((function(e) {
                    return function(t) {
                        return Sizzle(e, t).length > 0
                    }
                }
                )),
                contains: markFunction((function(e) {
                    return e = e.replace(Z, funescape),
                    function(t) {
                        return (t.textContent || o(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: markFunction((function(e) {
                    return U.test(e || "") || Sizzle.error("unsupported lang: " + e),
                    e = e.replace(Z, funescape).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: createDisabledPseudo(!1),
                disabled: createDisabledPseudo(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return V.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: createPositionalPseudo((function() {
                    return [0]
                }
                )),
                last: createPositionalPseudo((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: createPositionalPseudo((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: createPositionalPseudo((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: createPositionalPseudo((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: createPositionalPseudo((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                        e.push(r);
                    return e
                }
                )),
                gt: createPositionalPseudo((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                }
                ))
            }
        },
        r.pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = createInputPseudo(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = createButtonPseudo(t);
        function setFilters() {}
        function toSelector(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function addCombinator(e, t, n) {
            var r = t.dir
              , o = t.next
              , i = o || r
              , a = n && "parentNode" === i
              , s = C++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, d = [T, s];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[i]) && l[0] === T && l[1] === s)
                                    return d[2] = l[2];
                                if (c[i] = d,
                                d[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function elementMatcher(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function condense(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (i = e[s]) && (n && !n(i, r, o) || (a.push(i),
                l && t.push(s)));
            return a
        }
        function setMatcher(e, t, n, r, o, i) {
            return r && !r[b] && (r = setMatcher(r)),
            o && !o[b] && (o = setMatcher(o, i)),
            markFunction((function(i, a, s, u) {
                var l, c, f, d = [], p = [], h = a.length, g = i || function multipleContexts(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++)
                        Sizzle(e, t[r], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), m = !e || !i && t ? g : condense(g, d, e, s, u), v = n ? o || (i ? e : h || r) ? [] : a : m;
                if (n && n(m, v, s, u),
                r)
                    for (l = condense(v, p),
                    r(l, [], s, u),
                    c = l.length; c--; )
                        (f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [],
                            c = v.length; c--; )
                                (f = v[c]) && l.push(m[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--; )
                            (f = v[c]) && (l = o ? indexOf(i, f) : d[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else
                    v = condense(v === a ? v.splice(h, v.length) : v),
                    o ? o(null, a, v, u) : L.apply(a, v)
            }
            ))
        }
        function matcherFromTokens(e) {
            for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = addCombinator((function(e) {
                return e === t
            }
            ), s, !0), f = addCombinator((function(e) {
                return indexOf(t, e) > -1
            }
            ), s, !0), d = [function(e, n, r) {
                var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                o
            }
            ]; u < i; u++)
                if (n = r.relative[e[u].type])
                    d = [addCombinator(elementMatcher(d), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (o = ++u; o < i && !r.relative[e[o].type]; o++)
                            ;
                        return setMatcher(u > 1 && elementMatcher(d), u > 1 && toSelector(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(R, "$1"), n, u < o && matcherFromTokens(e.slice(u, o)), o < i && matcherFromTokens(e = e.slice(o)), o < i && toSelector(e))
                    }
                    d.push(n)
                }
            return elementMatcher(d)
        }
        return setFilters.prototype = r.filters = r.pseudos,
        r.setFilters = new setFilters,
        a = Sizzle.tokenize = function(e, t) {
            var n, o, i, a, s, u, l, c = A[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = r.preFilter; s; ) {
                for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                u.push(i = [])),
                n = !1,
                (o = B.exec(s)) && (n = o.shift(),
                i.push({
                    value: n,
                    type: o[0].replace(R, " ")
                }),
                s = s.slice(n.length)),
                r.filter)
                    !(o = X[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(),
                    i.push({
                        value: n,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? Sizzle.error(e) : A(e, u).slice(0)
        }
        ,
        s = Sizzle.compile = function(e, t) {
            var n, o = [], i = [], s = k[e + " "];
            if (!s) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (s = matcherFromTokens(t[n]))[b] ? o.push(s) : i.push(s);
                s = k(e, function matcherFromGroupMatchers(e, t) {
                    var n = t.length > 0
                      , o = e.length > 0
                      , superMatcher = function(i, a, s, u, c) {
                        var f, h, m, v = 0, y = "0", x = i && [], b = [], w = l, C = i || o && r.find.TAG("*", c), S = T += null == w ? 1 : Math.random() || .1, A = C.length;
                        for (c && (l = a == p || a || c); y !== A && null != (f = C[y]); y++) {
                            if (o && f) {
                                for (h = 0,
                                a || f.ownerDocument == p || (d(f),
                                s = !g); m = e[h++]; )
                                    if (m(f, a || p, s)) {
                                        u.push(f);
                                        break
                                    }
                                c && (T = S)
                            }
                            n && ((f = !m && f) && v--,
                            i && x.push(f))
                        }
                        if (v += y,
                        n && y !== v) {
                            for (h = 0; m = t[h++]; )
                                m(x, b, a, s);
                            if (i) {
                                if (v > 0)
                                    for (; y--; )
                                        x[y] || b[y] || (b[y] = j.call(u));
                                b = condense(b)
                            }
                            L.apply(u, b),
                            c && !i && b.length > 0 && v + t.length > 1 && Sizzle.uniqueSort(u)
                        }
                        return c && (T = S,
                        l = w),
                        x
                    };
                    return n ? markFunction(superMatcher) : superMatcher
                }(i, o)),
                s.selector = e
            }
            return s
        }
        ,
        u = Sizzle.select = function(e, t, n, o) {
            var i, u, l, c, f, d = "function" == typeof e && e, p = !o && a(e = d.selector || e);
            if (n = n || [],
            1 === p.length) {
                if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, funescape), t) || [])[0]))
                        return n;
                    d && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                for (i = X.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i],
                !r.relative[c = l.type]); )
                    if ((f = r.find[c]) && (o = f(l.matches[0].replace(Z, funescape), K.test(u[0].type) && testContext(t.parentNode) || t))) {
                        if (u.splice(i, 1),
                        !(e = o.length && toSelector(u)))
                            return L.apply(n, o),
                            n;
                        break
                    }
            }
            return (d || s(e, p))(o, t, !g, n, !t || K.test(e) && testContext(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(sortOrder).join("") === b,
        n.detectDuplicates = !!f,
        d(),
        n.sortDetached = assert((function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }
        )),
        assert((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || addHandle("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        n.attributes && assert((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || addHandle("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        assert((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || addHandle(H, (function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        )),
        Sizzle
    }(e);
    jQuery.find = x,
    jQuery.expr = x.selectors,
    jQuery.expr[":"] = jQuery.expr.pseudos,
    jQuery.uniqueSort = jQuery.unique = x.uniqueSort,
    jQuery.text = x.getText,
    jQuery.isXMLDoc = x.isXML,
    jQuery.contains = x.contains,
    jQuery.escapeSelector = x.escape;
    var dir = function(e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && jQuery(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , siblings = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , b = jQuery.expr.match.needsContext;
    function nodeName(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function winnow(e, t, n) {
        return h(t) ? jQuery.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        }
        )) : t.nodeType ? jQuery.grep(e, (function(e) {
            return e === t !== n
        }
        )) : "string" != typeof t ? jQuery.grep(e, (function(e) {
            return s.call(t, e) > -1 !== n
        }
        )) : jQuery.filter(t, e, n)
    }
    jQuery.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    jQuery.fn.extend({
        find: function(e) {
            var t, n, r = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(jQuery(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (jQuery.contains(o[t], this))
                            return !0
                }
                )));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                jQuery.find(e, o[t], n);
            return r > 1 ? jQuery.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(winnow(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(winnow(this, e || [], !0))
        },
        is: function(e) {
            return !!winnow(this, "string" == typeof e && b.test(e) ? jQuery(e) : e || [], !1).length
        }
    });
    var T, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (jQuery.fn.init = function(e, t, n) {
        var r, o;
        if (!e)
            return this;
        if (n = n || T,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : C.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof jQuery ? t[0] : t,
                jQuery.merge(this, jQuery.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)),
                w.test(r[1]) && jQuery.isPlainObject(t))
                    for (r in t)
                        h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = m.getElementById(r[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(jQuery) : jQuery.makeArray(e, this)
    }
    ).prototype = jQuery.fn,
    T = jQuery(m);
    var S = /^(?:parents|prev(?:Until|All))/
      , A = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function sibling(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    jQuery.fn.extend({
        has: function(e) {
            var t = jQuery(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (jQuery.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            var n, r = 0, o = this.length, i = [], a = "string" != typeof e && jQuery(e);
            if (!b.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && jQuery.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(i.length > 1 ? jQuery.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(jQuery(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    jQuery.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return dir(e, "parentNode", n)
        },
        next: function(e) {
            return sibling(e, "nextSibling")
        },
        prev: function(e) {
            return sibling(e, "previousSibling")
        },
        nextAll: function(e) {
            return dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return siblings((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return siblings(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e),
            jQuery.merge([], e.childNodes))
        }
    }, (function(e, t) {
        jQuery.fn[e] = function(n, r) {
            var o = jQuery.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (o = jQuery.filter(r, o)),
            this.length > 1 && (A[e] || jQuery.uniqueSort(o),
            S.test(e) && o.reverse()),
            this.pushStack(o)
        }
    }
    ));
    var k = /[^\x20\t\r\n\f]+/g;
    function Identity(e) {
        return e
    }
    function Thrower(e) {
        throw e
    }
    function adoptValue(e, t, n, r) {
        var o;
        try {
            e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    jQuery.Callbacks = function(e) {
        e = "string" == typeof e ? function createOptions(e) {
            var t = {};
            return jQuery.each(e.match(k) || [], (function(e, n) {
                t[n] = !0
            }
            )),
            t
        }(e) : jQuery.extend({}, e);
        var t, n, r, o, i = [], a = [], s = -1, fire = function() {
            for (o = o || e.once,
            r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (i = n ? [] : "")
        }, u = {
            add: function() {
                return i && (n && !t && (s = i.length - 1,
                a.push(n)),
                function add(t) {
                    jQuery.each(t, (function(t, n) {
                        h(n) ? e.unique && u.has(n) || i.push(n) : n && n.length && "string" !== toType(n) && add(n)
                    }
                    ))
                }(arguments),
                n && !t && fire()),
                this
            },
            remove: function() {
                return jQuery.each(arguments, (function(e, t) {
                    for (var n; (n = jQuery.inArray(t, i, n)) > -1; )
                        i.splice(n, 1),
                        n <= s && s--
                }
                )),
                this
            },
            has: function(e) {
                return e ? jQuery.inArray(e, i) > -1 : i.length > 0
            },
            empty: function() {
                return i && (i = []),
                this
            },
            disable: function() {
                return o = a = [],
                i = n = "",
                this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return o = a = [],
                n || t || (i = n = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, n) {
                return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || fire()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return u
    }
    ,
    jQuery.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , o = {
                state: function() {
                    return r
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return jQuery.Deferred((function(t) {
                        jQuery.each(n, (function(n, r) {
                            var o = h(e[r[4]]) && e[r[4]];
                            i[r[1]]((function() {
                                var e = o && o.apply(this, arguments);
                                e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                then: function(t, r, o) {
                    var i = 0;
                    function resolve(t, n, r, o) {
                        return function() {
                            var a = this
                              , s = arguments
                              , mightThrow = function() {
                                var e, u;
                                if (!(t < i)) {
                                    if ((e = r.apply(a, s)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    u = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    h(u) ? o ? u.call(e, resolve(i, n, Identity, o), resolve(i, n, Thrower, o)) : (i++,
                                    u.call(e, resolve(i, n, Identity, o), resolve(i, n, Thrower, o), resolve(i, n, Identity, n.notifyWith))) : (r !== Identity && (a = void 0,
                                    s = [e]),
                                    (o || n.resolveWith)(a, s))
                                }
                            }
                              , u = o ? mightThrow : function() {
                                try {
                                    mightThrow()
                                } catch (e) {
                                    jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(e, u.stackTrace),
                                    t + 1 >= i && (r !== Thrower && (a = void 0,
                                    s = [e]),
                                    n.rejectWith(a, s))
                                }
                            }
                            ;
                            t ? u() : (jQuery.Deferred.getStackHook && (u.stackTrace = jQuery.Deferred.getStackHook()),
                            e.setTimeout(u))
                        }
                    }
                    return jQuery.Deferred((function(e) {
                        n[0][3].add(resolve(0, e, h(o) ? o : Identity, e.notifyWith)),
                        n[1][3].add(resolve(0, e, h(t) ? t : Identity)),
                        n[2][3].add(resolve(0, e, h(r) ? r : Thrower))
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? jQuery.extend(e, o) : o
                }
            }
              , i = {};
            return jQuery.each(n, (function(e, t) {
                var a = t[2]
                  , s = t[5];
                o[t[1]] = a.add,
                s && a.add((function() {
                    r = s
                }
                ), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments),
                    this
                }
                ,
                i[t[0] + "With"] = a.fireWith
            }
            )),
            o.promise(i),
            t && t.call(i, i),
            i
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = jQuery.Deferred()
              , updateFunc = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && (adoptValue(e, a.done(updateFunc(n)).resolve, a.reject, !t),
            "pending" === a.state() || h(i[n] && i[n].then)))
                return a.then();
            for (; n--; )
                adoptValue(i[n], updateFunc(n), a.reject);
            return a.promise()
        }
    });
    var E = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && E.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    jQuery.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }
        ))
    }
    ;
    var N = jQuery.Deferred();
    function completed() {
        m.removeEventListener("DOMContentLoaded", completed),
        e.removeEventListener("load", completed),
        jQuery.ready()
    }
    jQuery.fn.ready = function(e) {
        return N.then(e).catch((function(e) {
            jQuery.readyException(e)
        }
        )),
        this
    }
    ,
    jQuery.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0,
            !0 !== e && --jQuery.readyWait > 0 || N.resolveWith(m, [jQuery]))
        }
    }),
    jQuery.ready.then = N.then,
    "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(jQuery.ready) : (m.addEventListener("DOMContentLoaded", completed),
    e.addEventListener("load", completed));
    var access = function(e, t, n, r, o, i, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === toType(n))
            for (s in o = !0,
            n)
                access(e, t, s, n[s], !0, i, a);
        else if (void 0 !== r && (o = !0,
        h(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(jQuery(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
    }
      , D = /^-ms-/
      , j = /-([a-z])/g;
    function fcamelCase(e, t) {
        return t.toUpperCase()
    }
    function camelCase(e) {
        return e.replace(D, "ms-").replace(j, fcamelCase)
    }
    var acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++
    }
    Data.uid = 1,
    Data.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            acceptData(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t)
                o[camelCase(t)] = n;
            else
                for (r in t)
                    o[camelCase(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(camelCase) : (t = camelCase(t))in r ? [t] : t.match(k) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || jQuery.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !jQuery.isEmptyObject(t)
        }
    };
    var P = new Data
      , L = new Data
      , q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , H = /[A-Z]/g;
    function dataAttr(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(H, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function getData(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : q.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                L.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    jQuery.extend({
        hasData: function(e) {
            return L.hasData(e) || P.hasData(e)
        },
        data: function(e, t, n) {
            return L.access(e, t, n)
        },
        removeData: function(e, t) {
            L.remove(e, t)
        },
        _data: function(e, t, n) {
            return P.access(e, t, n)
        },
        _removeData: function(e, t) {
            P.remove(e, t)
        }
    }),
    jQuery.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0], a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = L.get(i),
                1 === i.nodeType && !P.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = camelCase(r.slice(5)),
                        dataAttr(i, r, o[r]));
                    P.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each((function() {
                L.set(this, e)
            }
            )) : access(this, (function(t) {
                var n;
                if (i && void 0 === t)
                    return void 0 !== (n = L.get(i, e)) || void 0 !== (n = dataAttr(i, e)) ? n : void 0;
                this.each((function() {
                    L.set(this, e, t)
                }
                ))
            }
            ), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                L.remove(this, e)
            }
            ))
        }
    }),
    jQuery.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = P.get(e, t),
                n && (!r || Array.isArray(n) ? r = P.access(e, t, jQuery.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = jQuery.queue(e, t)
              , r = n.length
              , o = n.shift()
              , i = jQuery._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            r--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            o.call(e, (function() {
                jQuery.dequeue(e, t)
            }
            ), i)),
            !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return P.get(e, n) || P.access(e, n, {
                empty: jQuery.Callbacks("once memory").add((function() {
                    P.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    jQuery.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? jQuery.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = jQuery.queue(this, e, t);
                jQuery._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && jQuery.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                jQuery.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, o = jQuery.Deferred(), i = this, a = this.length, resolve = function() {
                --r || o.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = P.get(i[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(resolve));
            return resolve(),
            o.promise(t)
        }
    });
    var O = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , M = new RegExp("^(?:([+-])=|)(" + O + ")([a-z%]*)$","i")
      , F = ["Top", "Right", "Bottom", "Left"]
      , z = m.documentElement
      , isAttached = function(e) {
        return jQuery.contains(e.ownerDocument, e)
    }
      , I = {
        composed: !0
    };
    z.getRootNode && (isAttached = function(e) {
        return jQuery.contains(e.ownerDocument, e) || e.getRootNode(I) === e.ownerDocument
    }
    );
    var isHiddenWithinTree = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && isAttached(e) && "none" === jQuery.css(e, "display")
    };
    function adjustCSS(e, t, n, r) {
        var o, i, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return jQuery.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (jQuery.cssNumber[t] ? "" : "px"), c = e.nodeType && (jQuery.cssNumber[t] || "px" !== l && +u) && M.exec(jQuery.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; a--; )
                jQuery.style(e, t, c + l),
                (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0),
                c /= i;
            c *= 2,
            jQuery.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = o)),
        o
    }
    var R = {};
    function getDefaultDisplay(e) {
        var t, n = e.ownerDocument, r = e.nodeName, o = R[r];
        return o || (t = n.body.appendChild(n.createElement(r)),
        o = jQuery.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === o && (o = "block"),
        R[r] = o,
        o)
    }
    function showHide(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
            (r = e[i]).style && (n = r.style.display,
            t ? ("none" === n && (o[i] = P.get(r, "display") || null,
            o[i] || (r.style.display = "")),
            "" === r.style.display && isHiddenWithinTree(r) && (o[i] = getDefaultDisplay(r))) : "none" !== n && (o[i] = "none",
            P.set(r, "display", n)));
        for (i = 0; i < a; i++)
            null != o[i] && (e[i].style.display = o[i]);
        return e
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, !0)
        },
        hide: function() {
            return showHide(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide()
            }
            ))
        }
    });
    var W, B, $ = /^(?:checkbox|radio)$/i, _ = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, U = /^$|^module$|\/(?:java|ecma)script/i;
    W = m.createDocumentFragment().appendChild(m.createElement("div")),
    (B = m.createElement("input")).setAttribute("type", "radio"),
    B.setAttribute("checked", "checked"),
    B.setAttribute("name", "t"),
    W.appendChild(B),
    p.checkClone = W.cloneNode(!0).cloneNode(!0).lastChild.checked,
    W.innerHTML = "<textarea>x</textarea>",
    p.noCloneChecked = !!W.cloneNode(!0).lastChild.defaultValue,
    W.innerHTML = "<option></option>",
    p.option = !!W.lastChild;
    var X = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function getAll(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && nodeName(e, t) ? jQuery.merge([e], n) : n
    }
    function setGlobalEval(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            P.set(e[n], "globalEval", !t || P.get(t[n], "globalEval"))
    }
    X.tbody = X.tfoot = X.colgroup = X.caption = X.thead,
    X.th = X.td,
    p.option || (X.optgroup = X.option = [1, "<select multiple='multiple'>", "</select>"]);
    var G = /<|&#?\w+;/;
    function buildFragment(e, t, n, r, o) {
        for (var i, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((i = e[p]) || 0 === i)
                if ("object" === toType(i))
                    jQuery.merge(d, i.nodeType ? [i] : i);
                else if (G.test(i)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (_.exec(i) || ["", ""])[1].toLowerCase(),
                    u = X[s] || X._default,
                    a.innerHTML = u[1] + jQuery.htmlPrefilter(i) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    jQuery.merge(d, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(i));
        for (f.textContent = "",
        p = 0; i = d[p++]; )
            if (r && jQuery.inArray(i, r) > -1)
                o && o.push(i);
            else if (l = isAttached(i),
            a = getAll(f.appendChild(i), "script"),
            l && setGlobalEval(a),
            n)
                for (c = 0; i = a[c++]; )
                    U.test(i.type || "") && n.push(i);
        return f
    }
    var V = /^key/
      , Y = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Q = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return !0
    }
    function returnFalse() {
        return !1
    }
    function expectSync(e, t) {
        return e === function safeActiveElement() {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function on(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                on(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n,
        r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
        r = void 0) : (o = r,
        r = n,
        n = void 0)),
        !1 === o)
            o = returnFalse;
        else if (!o)
            return e;
        return 1 === i && (a = o,
        o = function(e) {
            return jQuery().off(e),
            a.apply(this, arguments)
        }
        ,
        o.guid = a.guid || (a.guid = jQuery.guid++)),
        e.each((function() {
            jQuery.event.add(this, t, o, r, n)
        }
        ))
    }
    function leverageNative(e, t, n) {
        n ? (P.set(e, t, !1),
        jQuery.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, i, a = P.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)
                        (jQuery.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = o.call(arguments),
                    P.set(this, t, a),
                    r = n(this, t),
                    this[t](),
                    a !== (i = P.get(this, t)) || r ? P.set(this, t, !1) : i = {},
                    a !== i)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        i.value
                } else
                    a.length && (P.set(this, t, {
                        value: jQuery.event.trigger(jQuery.extend(a[0], jQuery.Event.prototype), a.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === P.get(e, t) && jQuery.event.add(e, t, returnTrue)
    }
    jQuery.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, g, m = P.get(e);
            if (acceptData(e))
                for (n.handler && (n = (i = n).handler,
                o = i.selector),
                o && jQuery.find.matchesSelector(z, o),
                n.guid || (n.guid = jQuery.guid++),
                (u = m.events) || (u = m.events = Object.create(null)),
                (a = m.handle) || (a = m.handle = function(t) {
                    return void 0 !== jQuery && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(k) || [""]).length; l--; )
                    p = g = (s = Q.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (f = jQuery.event.special[p] || {},
                    p = (o ? f.delegateType : f.bindType) || p,
                    f = jQuery.event.special[p] || {},
                    c = jQuery.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && jQuery.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i),
                    (d = u[p]) || ((d = u[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    jQuery.event.global[p] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, g, m = P.hasData(e) && P.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(k) || [""]).length; l--; )
                    if (p = g = (s = Q.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = jQuery.event.special[p] || {},
                        d = u[p = (r ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = i = d.length; i--; )
                            c = d[i],
                            !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || jQuery.removeEvent(e, p, m.handle),
                        delete u[p])
                    } else
                        for (p in u)
                            jQuery.event.remove(e, p + t[l], n, r, !0);
                jQuery.isEmptyObject(u) && P.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = new Array(arguments.length), u = jQuery.event.fix(e), l = (P.get(this, "events") || Object.create(null))[u.type] || [], c = jQuery.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = jQuery.event.handlers.call(this, u, l),
                t = 0; (o = a[t++]) && !u.isPropagationStopped(); )
                    for (u.currentTarget = o.elem,
                    n = 0; (i = o.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                        u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i,
                        u.data = i.data,
                        void 0 !== (r = ((jQuery.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (i = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? jQuery(o, this).index(l) > -1 : jQuery.find(o, this, null, [l]).length),
                            a[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(jQuery.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[jQuery.expando] ? e : new jQuery.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return $.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click", returnTrue),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return $.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return $.test(t.type) && t.click && nodeName(t, "input") && P.get(t, "click") || nodeName(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    jQuery.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    jQuery.Event = function(e, t) {
        if (!(this instanceof jQuery.Event))
            return new jQuery.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? returnTrue : returnFalse,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && jQuery.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[jQuery.expando] = !0
    }
    ,
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    jQuery.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && V.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Y.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, jQuery.event.addProp),
    jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        jQuery.event.special[e] = {
            setup: function() {
                return leverageNative(this, e, expectSync),
                !1
            },
            trigger: function() {
                return leverageNative(this, e),
                !0
            },
            delegateType: t
        }
    }
    )),
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        jQuery.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, o = e.relatedTarget, i = e.handleObj;
                return o && (o === r || jQuery.contains(r, o)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    jQuery.fn.extend({
        on: function(e, t, n, r) {
            return on(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return on(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = returnFalse),
            this.each((function() {
                jQuery.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var J = /<script|<style|<link/i
      , K = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Z = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function manipulationTarget(e, t) {
        return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && jQuery(e).children("tbody")[0] || e
    }
    function disableScript(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function restoreScript(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function cloneCopyEvent(e, t) {
        var n, r, o, i, a, s;
        if (1 === t.nodeType) {
            if (P.hasData(e) && (s = P.get(e).events))
                for (o in P.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[o].length; n < r; n++)
                        jQuery.event.add(t, o, s[o][n]);
            L.hasData(e) && (i = L.access(e),
            a = jQuery.extend({}, i),
            L.set(t, a))
        }
    }
    function fixInput(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && $.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function domManip(e, t, n, r) {
        t = i(t);
        var o, a, s, u, l, c, f = 0, d = e.length, g = d - 1, m = t[0], v = h(m);
        if (v || d > 1 && "string" == typeof m && !p.checkClone && K.test(m))
            return e.each((function(o) {
                var i = e.eq(o);
                v && (t[0] = m.call(this, o, i.html())),
                domManip(i, t, n, r)
            }
            ));
        if (d && (a = (o = buildFragment(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === o.childNodes.length && (o = a),
        a || r)) {
            for (u = (s = jQuery.map(getAll(o, "script"), disableScript)).length; f < d; f++)
                l = o,
                f !== g && (l = jQuery.clone(l, !0, !0),
                u && jQuery.merge(s, getAll(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                jQuery.map(s, restoreScript),
                f = 0; f < u; f++)
                    l = s[f],
                    U.test(l.type || "") && !P.access(l, "globalEval") && jQuery.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? jQuery._evalUrl && !l.noModule && jQuery._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : DOMEval(l.textContent.replace(Z, ""), l, c))
        }
        return e
    }
    function remove(e, t, n) {
        for (var r, o = t ? jQuery.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
            n || 1 !== r.nodeType || jQuery.cleanData(getAll(r)),
            r.parentNode && (n && isAttached(r) && setGlobalEval(getAll(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    jQuery.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0), u = isAttached(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || jQuery.isXMLDoc(e)))
                for (a = getAll(s),
                r = 0,
                o = (i = getAll(e)).length; r < o; r++)
                    fixInput(i[r], a[r]);
            if (t)
                if (n)
                    for (i = i || getAll(e),
                    a = a || getAll(s),
                    r = 0,
                    o = i.length; r < o; r++)
                        cloneCopyEvent(i[r], a[r]);
                else
                    cloneCopyEvent(e, s);
            return (a = getAll(s, "script")).length > 0 && setGlobalEval(a, !u && getAll(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, o = jQuery.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (acceptData(n)) {
                    if (t = n[P.expando]) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
                        n[P.expando] = void 0
                    }
                    n[L.expando] && (n[L.expando] = void 0)
                }
        }
    }),
    jQuery.fn.extend({
        detach: function(e) {
            return remove(this, e, !0)
        },
        remove: function(e) {
            return remove(this, e)
        },
        text: function(e) {
            return access(this, (function(e) {
                return void 0 === e ? jQuery.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return domManip(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || manipulationTarget(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return domManip(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = manipulationTarget(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return domManip(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return domManip(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (jQuery.cleanData(getAll(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return jQuery.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return access(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !J.test(e) && !X[(_.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = jQuery.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (jQuery.cleanData(getAll(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return domManip(this, arguments, (function(t) {
                var n = this.parentNode;
                jQuery.inArray(this, e) < 0 && (jQuery.cleanData(getAll(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
        }
    }),
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        jQuery.fn[e] = function(e) {
            for (var n, r = [], o = jQuery(e), i = o.length - 1, s = 0; s <= i; s++)
                n = s === i ? this : this.clone(!0),
                jQuery(o[s])[t](n),
                a.apply(r, n.get());
            return this.pushStack(r)
        }
    }
    ));
    var ee = new RegExp("^(" + O + ")(?!px)[a-z%]+$","i")
      , getStyles = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , swap = function(e, t, n) {
        var r, o, i = {};
        for (o in t)
            i[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = n.call(e),
        t)
            e.style[o] = i[o];
        return r
    }
      , te = new RegExp(F.join("|"),"i");
    function curCSS(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || getStyles(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || isAttached(e) || (a = jQuery.style(e, t)),
        !p.pixelBoxStyles() && ee.test(a) && te.test(t) && (r = s.width,
        o = s.minWidth,
        i = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = o,
        s.maxWidth = i)),
        void 0 !== a ? a + "" : a
    }
    function addGetHookIf(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function computeStyleTests() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                z.appendChild(s).appendChild(u);
                var i = e.getComputedStyle(u);
                t = "1%" !== i.top,
                a = 12 === roundPixelMeasures(i.marginLeft),
                u.style.right = "60%",
                o = 36 === roundPixelMeasures(i.right),
                n = 36 === roundPixelMeasures(i.width),
                u.style.position = "absolute",
                r = 12 === roundPixelMeasures(u.offsetWidth / 3),
                z.removeChild(s),
                u = null
            }
        }
        function roundPixelMeasures(e) {
            return Math.round(parseFloat(e))
        }
        var t, n, r, o, i, a, s = m.createElement("div"), u = m.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        p.clearCloneStyle = "content-box" === u.style.backgroundClip,
        jQuery.extend(p, {
            boxSizingReliable: function() {
                return computeStyleTests(),
                n
            },
            pixelBoxStyles: function() {
                return computeStyleTests(),
                o
            },
            pixelPosition: function() {
                return computeStyleTests(),
                t
            },
            reliableMarginLeft: function() {
                return computeStyleTests(),
                a
            },
            scrollboxSize: function() {
                return computeStyleTests(),
                r
            },
            reliableTrDimensions: function() {
                var t, n, r, o;
                return null == i && (t = m.createElement("table"),
                n = m.createElement("tr"),
                r = m.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px",
                n.style.height = "1px",
                r.style.height = "9px",
                z.appendChild(t).appendChild(n).appendChild(r),
                o = e.getComputedStyle(n),
                i = parseInt(o.height) > 3,
                z.removeChild(t)),
                i
            }
        }))
    }();
    var ne = ["Webkit", "Moz", "ms"]
      , re = m.createElement("div").style
      , oe = {};
    function finalPropName(e) {
        var t = jQuery.cssProps[e] || oe[e];
        return t || (e in re ? e : oe[e] = function vendorPropName(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = ne.length; n--; )
                if ((e = ne[n] + t)in re)
                    return e
        }(e) || e)
    }
    var ie = /^(none|table(?!-c[ea]).+)/
      , ae = /^--/
      , se = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ue = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(e, t, n) {
        var r = M.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function boxModelAdjustment(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += jQuery.css(e, n + F[a], !0, o)),
            r ? ("content" === n && (u -= jQuery.css(e, "padding" + F[a], !0, o)),
            "margin" !== n && (u -= jQuery.css(e, "border" + F[a] + "Width", !0, o))) : (u += jQuery.css(e, "padding" + F[a], !0, o),
            "padding" !== n ? u += jQuery.css(e, "border" + F[a] + "Width", !0, o) : s += jQuery.css(e, "border" + F[a] + "Width", !0, o));
        return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0),
        u
    }
    function getWidthOrHeight(e, t, n) {
        var r = getStyles(e)
          , o = (!p.boxSizingReliable() || n) && "border-box" === jQuery.css(e, "boxSizing", !1, r)
          , i = o
          , a = curCSS(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ee.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && o || !p.reliableTrDimensions() && nodeName(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === jQuery.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === jQuery.css(e, "boxSizing", !1, r),
        (i = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + boxModelAdjustment(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
    }
    function Tween(e, t, n, r, o) {
        return new Tween.prototype.init(e,t,n,r,o)
    }
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = curCSS(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = camelCase(t), u = ae.test(t), l = e.style;
                if (u || (t = finalPropName(s)),
                a = jQuery.cssHooks[t] || jQuery.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                "string" === (i = typeof n) && (o = M.exec(n)) && o[1] && (n = adjustCSS(e, t, o),
                i = "number"),
                null != n && n == n && ("number" !== i || u || (n += o && o[3] || (jQuery.cssNumber[s] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = camelCase(t);
            return ae.test(t) || (t = finalPropName(s)),
            (a = jQuery.cssHooks[t] || jQuery.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = curCSS(e, t, r)),
            "normal" === o && t in ue && (o = ue[t]),
            "" === n || n ? (i = parseFloat(o),
            !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }),
    jQuery.each(["height", "width"], (function(e, t) {
        jQuery.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ie.test(jQuery.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, r) : swap(e, se, (function() {
                        return getWidthOrHeight(e, t, r)
                    }
                    ))
            },
            set: function(e, n, r) {
                var o, i = getStyles(e), a = !p.scrollboxSize() && "absolute" === i.position, s = (a || r) && "border-box" === jQuery.css(e, "boxSizing", !1, i), u = r ? boxModelAdjustment(e, t, r, s, i) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - boxModelAdjustment(e, t, "border", !1, i) - .5)),
                u && (o = M.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = jQuery.css(e, t)),
                setPositiveNumber(0, n, u)
            }
        }
    }
    )),
    jQuery.cssHooks.marginLeft = addGetHookIf(p.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - swap(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        jQuery.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    o[e + F[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        },
        "margin" !== e && (jQuery.cssHooks[e + t].set = setPositiveNumber)
    }
    )),
    jQuery.fn.extend({
        css: function(e, t) {
            return access(this, (function(e, t, n) {
                var r, o, i = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = getStyles(e),
                    o = t.length; a < o; a++)
                        i[t[a]] = jQuery.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? jQuery.style(e, t, n) : jQuery.css(e, t)
            }
            ), e, t, arguments.length > 1)
        }
    }),
    jQuery.Tween = Tween,
    Tween.prototype = {
        constructor: Tween,
        init: function(e, t, n, r, o, i) {
            this.elem = e,
            this.prop = n,
            this.easing = o || jQuery.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = i || (jQuery.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Tween.propHooks[this.prop];
            return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Tween.propHooks._default.set(this),
            this
        }
    },
    Tween.prototype.init.prototype = Tween.prototype,
    Tween.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = jQuery.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !jQuery.cssHooks[e.prop] && null == e.elem.style[finalPropName(e.prop)] ? e.elem[e.prop] = e.now : jQuery.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    jQuery.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    jQuery.fx = Tween.prototype.init,
    jQuery.fx.step = {};
    var le, ce, fe = /^(?:toggle|show|hide)$/, de = /queueHooks$/;
    function schedule() {
        ce && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(schedule) : e.setTimeout(schedule, jQuery.fx.interval),
        jQuery.fx.tick())
    }
    function createFxNow() {
        return e.setTimeout((function() {
            le = void 0
        }
        )),
        le = Date.now()
    }
    function genFx(e, t) {
        var n, r = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o["margin" + (n = F[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function createTween(e, t, n) {
        for (var r, o = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e))
                return r
    }
    function Animation(e, t, n) {
        var r, o, i = 0, a = Animation.prefilters.length, s = jQuery.Deferred().always((function() {
            delete tick.elem
        }
        )), tick = function() {
            if (o)
                return !1;
            for (var t = le || createFxNow(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, a = u.tweens.length; i < a; i++)
                u.tweens[i].run(r);
            return s.notifyWith(e, [u, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]),
            s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: jQuery.extend({}, t),
            opts: jQuery.extend(!0, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: le || createFxNow(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = jQuery.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < r; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), l = u.props;
        for (!function propFilter(e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (o = t[r = camelCase(n)],
                i = e[n],
                Array.isArray(i) && (o = i[1],
                i = e[n] = i[0]),
                n !== r && (e[r] = i,
                delete e[n]),
                (a = jQuery.cssHooks[r]) && "expand"in a)
                    for (n in i = a.expand(i),
                    delete e[r],
                    i)
                        n in e || (e[n] = i[n],
                        t[n] = o);
                else
                    t[r] = o
        }(l, u.opts.specialEasing); i < a; i++)
            if (r = Animation.prefilters[i].call(u, e, l, u.opts))
                return h(r.stop) && (jQuery._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                r;
        return jQuery.map(l, createTween, u),
        h(u.opts.start) && u.opts.start.call(e, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return adjustCSS(n.elem, e, M.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            h(e) ? (t = e,
            e = ["*"]) : e = e.match(k);
            for (var n, r = 0, o = e.length; r < o; r++)
                n = e[r],
                Animation.tweeners[n] = Animation.tweeners[n] || [],
                Animation.tweeners[n].unshift(t)
        },
        prefilters: [function defaultPrefilter(e, t, n) {
            var r, o, i, a, s, u, l, c, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, g = e.nodeType && isHiddenWithinTree(e), m = P.get(e, "fxshow");
            for (r in n.queue || (null == (a = jQuery._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            d.always((function() {
                d.always((function() {
                    a.unqueued--,
                    jQuery.queue(e, "fx").length || a.empty.fire()
                }
                ))
            }
            ))),
            t)
                if (o = t[r],
                fe.test(o)) {
                    if (delete t[r],
                    i = i || "toggle" === o,
                    o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[r])
                            continue;
                        g = !0
                    }
                    p[r] = m && m[r] || jQuery.style(e, r)
                }
            if ((u = !jQuery.isEmptyObject(t)) || !jQuery.isEmptyObject(p))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = m && m.display) && (l = P.get(e, "display")),
                "none" === (c = jQuery.css(e, "display")) && (l ? c = l : (showHide([e], !0),
                l = e.style.display || l,
                c = jQuery.css(e, "display"),
                showHide([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === jQuery.css(e, "float") && (u || (d.done((function() {
                    h.display = l
                }
                )),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                d.always((function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                }
                ))),
                u = !1,
                p)
                    u || (m ? "hidden"in m && (g = m.hidden) : m = P.access(e, "fxshow", {
                        display: l
                    }),
                    i && (m.hidden = !g),
                    g && showHide([e], !0),
                    d.done((function() {
                        for (r in g || showHide([e]),
                        P.remove(e, "fxshow"),
                        p)
                            jQuery.style(e, r, p[r])
                    }
                    ))),
                    u = createTween(g ? m[r] : 0, r, d),
                    r in m || (m[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e)
        }
    }),
    jQuery.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? jQuery.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return jQuery.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in jQuery.fx.speeds ? r.duration = jQuery.fx.speeds[r.duration] : r.duration = jQuery.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            h(r.old) && r.old.call(this),
            r.queue && jQuery.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    jQuery.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = jQuery.isEmptyObject(e)
              , i = jQuery.speed(t, n, r)
              , doAnimation = function() {
                var t = Animation(this, jQuery.extend({}, e), i);
                (o || P.get(this, "finish")) && t.stop(!0)
            };
            return doAnimation.finish = doAnimation,
            o || !1 === i.queue ? this.each(doAnimation) : this.queue(i.queue, doAnimation)
        },
        stop: function(e, t, n) {
            var stopQueue = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = jQuery.timers
                  , i = P.get(this);
                if (r)
                    i[r] && i[r].stop && stopQueue(i[r]);
                else
                    for (r in i)
                        i[r] && i[r].stop && de.test(r) && stopQueue(i[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || jQuery.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, n = P.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = jQuery.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                jQuery.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = i.length; t--; )
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                    i.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            }
            ))
        }
    }),
    jQuery.each(["toggle", "show", "hide"], (function(e, t) {
        var n = jQuery.fn[t];
        jQuery.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, o)
        }
    }
    )),
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        jQuery.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }
    )),
    jQuery.timers = [],
    jQuery.fx.tick = function() {
        var e, t = 0, n = jQuery.timers;
        for (le = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || jQuery.fx.stop(),
        le = void 0
    }
    ,
    jQuery.fx.timer = function(e) {
        jQuery.timers.push(e),
        jQuery.fx.start()
    }
    ,
    jQuery.fx.interval = 13,
    jQuery.fx.start = function() {
        ce || (ce = !0,
        schedule())
    }
    ,
    jQuery.fx.stop = function() {
        ce = null
    }
    ,
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    jQuery.fn.delay = function(t, n) {
        return t = jQuery.fx && jQuery.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, (function(n, r) {
            var o = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(o)
            }
        }
        ))
    }
    ,
    function() {
        var e = m.createElement("input")
          , t = m.createElement("select").appendChild(m.createElement("option"));
        e.type = "checkbox",
        p.checkOn = "" !== e.value,
        p.optSelected = t.selected,
        (e = m.createElement("input")).value = "t",
        e.type = "radio",
        p.radioValue = "t" === e.value
    }();
    var pe, he = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(e, t) {
            return access(this, jQuery.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                jQuery.removeAttr(this, e)
            }
            ))
        }
    }),
    jQuery.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute ? jQuery.prop(e, t, n) : (1 === i && jQuery.isXMLDoc(e) || (o = jQuery.attrHooks[t.toLowerCase()] || (jQuery.expr.match.bool.test(t) ? pe : void 0)),
                void 0 !== n ? null === n ? void jQuery.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = jQuery.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, o = t && t.match(k);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    e.removeAttribute(n)
        }
    }),
    pe = {
        set: function(e, t, n) {
            return !1 === t ? jQuery.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = he[t] || jQuery.find.attr;
        he[t] = function(e, t, r) {
            var o, i, a = t.toLowerCase();
            return r || (i = he[a],
            he[a] = o,
            o = null != n(e, t, r) ? a : null,
            he[a] = i),
            o
        }
    }
    ));
    var ge = /^(?:input|select|textarea|button)$/i
      , me = /^(?:a|area)$/i;
    function stripAndCollapse(e) {
        return (e.match(k) || []).join(" ")
    }
    function getClass(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function classesToArray(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(k) || []
    }
    jQuery.fn.extend({
        prop: function(e, t) {
            return access(this, jQuery.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[jQuery.propFix[e] || e]
            }
            ))
        }
    }),
    jQuery.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return 1 === i && jQuery.isXMLDoc(e) || (t = jQuery.propFix[t] || t,
                o = jQuery.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = jQuery.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ge.test(e.nodeName) || me.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    p.optSelected || (jQuery.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        jQuery.propFix[this.toLowerCase()] = this
    }
    )),
    jQuery.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (h(e))
                return this.each((function(t) {
                    jQuery(this).addClass(e.call(this, t, getClass(this)))
                }
                ));
            if ((t = classesToArray(e)).length)
                for (; n = this[u++]; )
                    if (o = getClass(n),
                    r = 1 === n.nodeType && " " + stripAndCollapse(o) + " ") {
                        for (a = 0; i = t[a++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = stripAndCollapse(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (h(e))
                return this.each((function(t) {
                    jQuery(this).removeClass(e.call(this, t, getClass(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = classesToArray(e)).length)
                for (; n = this[u++]; )
                    if (o = getClass(n),
                    r = 1 === n.nodeType && " " + stripAndCollapse(o) + " ") {
                        for (a = 0; i = t[a++]; )
                            for (; r.indexOf(" " + i + " ") > -1; )
                                r = r.replace(" " + i + " ", " ");
                        o !== (s = stripAndCollapse(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
                jQuery(this).toggleClass(e.call(this, n, getClass(this), t), t)
            }
            )) : this.each((function() {
                var t, o, i, a;
                if (r)
                    for (o = 0,
                    i = jQuery(this),
                    a = classesToArray(e); t = a[o++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = getClass(this)) && P.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : P.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var ve = /\r/g;
    jQuery.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = h(e),
            this.each((function(n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, jQuery(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = jQuery.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }
            ))) : o ? (t = jQuery.valHooks[o.type] || jQuery.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(ve, "") : null == n ? "" : n : void 0
        }
    }),
    jQuery.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = jQuery.find.attr(e, "value");
                    return null != t ? t : stripAndCollapse(jQuery.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
                            if (t = jQuery(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = jQuery.makeArray(t), a = o.length; a--; )
                        ((r = o[a]).selected = jQuery.inArray(jQuery.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    jQuery.each(["radio", "checkbox"], (function() {
        jQuery.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = jQuery.inArray(jQuery(e).val(), t) > -1
            }
        },
        p.checkOn || (jQuery.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    )),
    p.focusin = "onfocusin"in e;
    var ye = /^(?:focusinfocus|focusoutblur)$/
      , stopPropagationCallback = function(e) {
        e.stopPropagation()
    };
    jQuery.extend(jQuery.event, {
        trigger: function(t, n, r, o) {
            var i, a, s, u, l, f, d, p, v = [r || m], y = c.call(t, "type") ? t.type : t, x = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = r = r || m,
            3 !== r.nodeType && 8 !== r.nodeType && !ye.test(y + jQuery.event.triggered) && (y.indexOf(".") > -1 && (x = y.split("."),
            y = x.shift(),
            x.sort()),
            l = y.indexOf(":") < 0 && "on" + y,
            (t = t[jQuery.expando] ? t : new jQuery.Event(y,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : jQuery.makeArray(n, [t]),
            d = jQuery.event.special[y] || {},
            o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !g(r)) {
                    for (u = d.delegateType || y,
                    ye.test(u + y) || (a = a.parentNode); a; a = a.parentNode)
                        v.push(a),
                        s = a;
                    s === (r.ownerDocument || m) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0; (a = v[i++]) && !t.isPropagationStopped(); )
                    p = a,
                    t.type = i > 1 ? u : d.bindType || y,
                    (f = (P.get(a, "events") || Object.create(null))[t.type] && P.get(a, "handle")) && f.apply(a, n),
                    (f = l && a[l]) && f.apply && acceptData(a) && (t.result = f.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = y,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !acceptData(r) || l && h(r[y]) && !g(r) && ((s = r[l]) && (r[l] = null),
                jQuery.event.triggered = y,
                t.isPropagationStopped() && p.addEventListener(y, stopPropagationCallback),
                r[y](),
                t.isPropagationStopped() && p.removeEventListener(y, stopPropagationCallback),
                jQuery.event.triggered = void 0,
                s && (r[l] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = jQuery.extend(new jQuery.Event, n, {
                type: e,
                isSimulated: !0
            });
            jQuery.event.trigger(r, null, t)
        }
    }),
    jQuery.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                jQuery.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return jQuery.event.trigger(e, t, n, !0)
        }
    }),
    p.focusin || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var handler = function(e) {
            jQuery.event.simulate(t, e.target, jQuery.event.fix(e))
        };
        jQuery.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this.document || this
                  , r = P.access(n, t);
                r || n.addEventListener(e, handler, !0),
                P.access(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this.document || this
                  , r = P.access(n, t) - 1;
                r ? P.access(n, t, r) : (n.removeEventListener(e, handler, !0),
                P.remove(n, t))
            }
        }
    }
    ));
    var xe = e.location
      , be = {
        guid: Date.now()
    }
      , we = /\?/;
    jQuery.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + t),
        n
    }
    ;
    var Te = /\[\]$/
      , Ce = /\r?\n/g
      , Se = /^(?:submit|button|image|reset|file)$/i
      , Ae = /^(?:input|select|textarea|keygen)/i;
    function buildParams(e, t, n, r) {
        var o;
        if (Array.isArray(t))
            jQuery.each(t, (function(t, o) {
                n || Te.test(e) ? r(e, o) : buildParams(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
            }
            ));
        else if (n || "object" !== toType(t))
            r(e, t);
        else
            for (o in t)
                buildParams(e + "[" + o + "]", t[o], n, r)
    }
    jQuery.param = function(e, t) {
        var n, r = [], add = function(e, t) {
            var n = h(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !jQuery.isPlainObject(e))
            jQuery.each(e, (function() {
                add(this.name, this.value)
            }
            ));
        else
            for (n in e)
                buildParams(n, e[n], t, add);
        return r.join("&")
    }
    ,
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = jQuery.prop(this, "elements");
                return e ? jQuery.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !jQuery(this).is(":disabled") && Ae.test(this.nodeName) && !Se.test(e) && (this.checked || !$.test(e))
            }
            )).map((function(e, t) {
                var n = jQuery(this).val();
                return null == n ? null : Array.isArray(n) ? jQuery.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ce, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(Ce, "\r\n")
                }
            }
            )).get()
        }
    });
    var ke = /%20/g
      , Ee = /#.*$/
      , Ne = /([?&])_=[^&]*/
      , De = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , je = /^(?:GET|HEAD)$/
      , Pe = /^\/\//
      , Le = {}
      , qe = {}
      , He = "*/".concat("*")
      , Oe = m.createElement("a");
    function addToPrefiltersOrTransports(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, o = 0, i = t.toLowerCase().match(k) || [];
            if (h(n))
                for (; r = i[o++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function inspectPrefiltersOrTransports(e, t, n, r) {
        var o = {}
          , i = e === qe;
        function inspect(a) {
            var s;
            return o[a] = !0,
            jQuery.each(e[a] || [], (function(e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || i || o[u] ? i ? !(s = u) : void 0 : (t.dataTypes.unshift(u),
                inspect(u),
                !1)
            }
            )),
            s
        }
        return inspect(t.dataTypes[0]) || !o["*"] && inspect("*")
    }
    function ajaxExtend(e, t) {
        var n, r, o = jQuery.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && jQuery.extend(!0, e, r),
        e
    }
    Oe.href = xe.href,
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": He,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(Le),
        ajaxTransport: addToPrefiltersOrTransports(qe),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, o, i, a, s, u, l, c, f, d, p = jQuery.ajaxSetup({}, n), h = p.context || p, g = p.context && (h.nodeType || h.jquery) ? jQuery(h) : jQuery.event, v = jQuery.Deferred(), y = jQuery.Callbacks("once memory"), x = p.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (l) {
                        if (!a)
                            for (a = {}; t = De.exec(i); )
                                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return l ? i : null
                },
                setRequestHeader: function(e, t) {
                    return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == l && (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (l)
                            C.always(e[C.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return r && r.abort(t),
                    done(0, t),
                    this
                }
            };
            if (v.promise(C),
            p.url = ((t || p.url || xe.href) + "").replace(Pe, xe.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(k) || [""],
            null == p.crossDomain) {
                u = m.createElement("a");
                try {
                    u.href = p.url,
                    u.href = u.href,
                    p.crossDomain = Oe.protocol + "//" + Oe.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = jQuery.param(p.data, p.traditional)),
            inspectPrefiltersOrTransports(Le, p, n, C),
            l)
                return C;
            for (f in (c = jQuery.event && p.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !je.test(p.type),
            o = p.url.replace(Ee, ""),
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(ke, "+")) : (d = p.url.slice(o.length),
            p.data && (p.processData || "string" == typeof p.data) && (o += (we.test(o) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (o = o.replace(Ne, "$1"),
            d = (we.test(o) ? "&" : "?") + "_=" + be.guid++ + d),
            p.url = o + d),
            p.ifModified && (jQuery.lastModified[o] && C.setRequestHeader("If-Modified-Since", jQuery.lastModified[o]),
            jQuery.etag[o] && C.setRequestHeader("If-None-Match", jQuery.etag[o])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + He + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                C.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || l))
                return C.abort();
            if (T = "abort",
            y.add(p.complete),
            C.done(p.success),
            C.fail(p.error),
            r = inspectPrefiltersOrTransports(qe, p, n, C)) {
                if (C.readyState = 1,
                c && g.trigger("ajaxSend", [C, p]),
                l)
                    return C;
                p.async && p.timeout > 0 && (s = e.setTimeout((function() {
                    C.abort("timeout")
                }
                ), p.timeout));
                try {
                    l = !1,
                    r.send(b, done)
                } catch (e) {
                    if (l)
                        throw e;
                    done(-1, e)
                }
            } else
                done(-1, "No Transport");
            function done(t, n, a, u) {
                var f, d, m, b, w, T = n;
                l || (l = !0,
                s && e.clearTimeout(s),
                r = void 0,
                i = u || "",
                C.readyState = t > 0 ? 4 : 0,
                f = t >= 200 && t < 300 || 304 === t,
                a && (b = function ajaxHandleResponses(e, t, n) {
                    for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                u.unshift(o);
                                break
                            }
                    if (u[0]in n)
                        i = u[0];
                    else {
                        for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                                i = o;
                                break
                            }
                            a || (a = o)
                        }
                        i = i || a
                    }
                    if (i)
                        return i !== u[0] && u.unshift(i),
                        n[i]
                }(p, C, a)),
                !f && jQuery.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}
                ),
                b = function ajaxConvert(e, t, n, r) {
                    var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i; )
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = i,
                        i = c.shift())
                            if ("*" === i)
                                i = u;
                            else if ("*" !== u && u !== i) {
                                if (!(a = l[u + " " + i] || l["* " + i]))
                                    for (o in l)
                                        if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + i
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, b, C, f),
                f ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (jQuery.lastModified[o] = w),
                (w = C.getResponseHeader("etag")) && (jQuery.etag[o] = w)),
                204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state,
                d = b.data,
                f = !(m = b.error))) : (m = T,
                !t && T || (T = "error",
                t < 0 && (t = 0))),
                C.status = t,
                C.statusText = (n || T) + "",
                f ? v.resolveWith(h, [d, T, C]) : v.rejectWith(h, [C, T, m]),
                C.statusCode(x),
                x = void 0,
                c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, p, f ? d : m]),
                y.fireWith(h, [C, T]),
                c && (g.trigger("ajaxComplete", [C, p]),
                --jQuery.active || jQuery.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return jQuery.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return jQuery.get(e, void 0, t, "script")
        }
    }),
    jQuery.each(["get", "post"], (function(e, t) {
        jQuery[t] = function(e, n, r, o) {
            return h(n) && (o = o || r,
            r = n,
            n = void 0),
            jQuery.ajax(jQuery.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, jQuery.isPlainObject(e) && e))
        }
    }
    )),
    jQuery.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }
    )),
    jQuery._evalUrl = function(e, t, n) {
        return jQuery.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                jQuery.globalEval(e, t, n)
            }
        })
    }
    ,
    jQuery.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])),
            t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                jQuery(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = jQuery(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(n) {
                jQuery(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                jQuery(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    jQuery.expr.pseudos.hidden = function(e) {
        return !jQuery.expr.pseudos.visible(e)
    }
    ,
    jQuery.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Me = {
        0: 200,
        1223: 204
    }
      , Fe = jQuery.ajaxSettings.xhr();
    p.cors = !!Fe && "withCredentials"in Fe,
    p.ajax = Fe = !!Fe,
    jQuery.ajaxTransport((function(t) {
        var n, r;
        if (p.cors || Fe && !t.crossDomain)
            return {
                send: function(o, i) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        s.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Me[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout((function() {
                            n && r()
                        }
                        ))
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }
    )),
    jQuery.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    }
    )),
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return jQuery.globalEval(e),
                e
            }
        }
    }),
    jQuery.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    jQuery.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(r, o) {
                    t = jQuery("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    m.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var ze, Ie = [], Re = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ie.pop() || jQuery.expando + "_" + be.guid++;
            return this[e] = !0,
            e
        }
    }),
    jQuery.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var o, i, a, s = !1 !== t.jsonp && (Re.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Re, "$1" + o) : !1 !== t.jsonp && (t.url += (we.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return a || jQuery.error(o + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            i = e[o],
            e[o] = function() {
                a = arguments
            }
            ,
            r.always((function() {
                void 0 === i ? jQuery(e).removeProp(o) : e[o] = i,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Ie.push(o)),
                a && h(i) && i(a[0]),
                a = i = void 0
            }
            )),
            "script"
    }
    )),
    p.createHTMLDocument = ((ze = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === ze.childNodes.length),
    jQuery.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (p.createHTMLDocument ? ((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href,
        t.head.appendChild(r)) : t = m),
        i = !n && [],
        (o = w.exec(e)) ? [t.createElement(o[1])] : (o = buildFragment([e], t, i),
        i && i.length && jQuery(i).remove(),
        jQuery.merge([], o.childNodes)));
        var r, o, i
    }
    ,
    jQuery.fn.load = function(e, t, n) {
        var r, o, i, a = this, s = e.indexOf(" ");
        return s > -1 && (r = stripAndCollapse(e.slice(s)),
        e = e.slice(0, s)),
        h(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 && jQuery.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            i = arguments,
            a.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
        }
        )).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, i || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    jQuery.expr.pseudos.animated = function(e) {
        return jQuery.grep(jQuery.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    jQuery.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, u, l = jQuery.css(e, "position"), c = jQuery(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            i = jQuery.css(e, "top"),
            u = jQuery.css(e, "left"),
            ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
            o = r.left) : (a = parseFloat(i) || 0,
            o = parseFloat(u) || 0),
            h(t) && (t = t.call(e, n, jQuery.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    jQuery.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    jQuery.offset.setOffset(this, e, t)
                }
                ));
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === jQuery.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === jQuery.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = jQuery(e).offset()).top += jQuery.css(e, "borderTopWidth", !0),
                    o.left += jQuery.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - jQuery.css(r, "marginTop", !0),
                    left: t.left - o.left - jQuery.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === jQuery.css(e, "position"); )
                    e = e.offsetParent;
                return e || z
            }
            ))
        }
    }),
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        jQuery.fn[e] = function(r) {
            return access(this, (function(e, r, o) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === o)
                    return i ? i[t] : e[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
            }
            ), e, r, arguments.length)
        }
    }
    )),
    jQuery.each(["top", "left"], (function(e, t) {
        jQuery.cssHooks[t] = addGetHookIf(p.pixelPosition, (function(e, n) {
            if (n)
                return n = curCSS(e, t),
                ee.test(n) ? jQuery(e).position()[t] + "px" : n
        }
        ))
    }
    )),
    jQuery.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        jQuery.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            jQuery.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o)
                  , s = n || (!0 === o || !0 === i ? "margin" : "border");
                return access(this, (function(t, n, o) {
                    var i;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? jQuery.css(t, n, s) : jQuery.style(t, n, o, s)
                }
                ), t, a ? o : void 0, a)
            }
        }
        ))
    }
    )),
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        jQuery.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    jQuery.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        jQuery.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    ));
    var We = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    jQuery.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        h(e))
            return r = o.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || jQuery.guid++,
            i
    }
    ,
    jQuery.holdReady = function(e) {
        e ? jQuery.readyWait++ : jQuery.ready(!0)
    }
    ,
    jQuery.isArray = Array.isArray,
    jQuery.parseJSON = JSON.parse,
    jQuery.nodeName = nodeName,
    jQuery.isFunction = h,
    jQuery.isWindow = g,
    jQuery.camelCase = camelCase,
    jQuery.type = toType,
    jQuery.now = Date.now,
    jQuery.isNumeric = function(e) {
        var t = jQuery.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    jQuery.trim = function(e) {
        return null == e ? "" : (e + "").replace(We, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return jQuery
    }
    ));
    var Be = e.jQuery
      , $e = e.$;
    return jQuery.noConflict = function(t) {
        return e.$ === jQuery && (e.$ = $e),
        t && e.jQuery === jQuery && (e.jQuery = Be),
        jQuery
    }
    ,
    void 0 === t && (e.jQuery = e.$ = jQuery),
    jQuery
}
));
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
!function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1
          , o = this;
        t(this).one("bsTransitionEnd", (function() {
            i = !0
        }
        ));
        return setTimeout((function() {
            i || t(o).trigger(t.support.transition.end)
        }
        ), e),
        this
    }
    ,
    t((function() {
        t.support.transition = function transitionEnd() {
            var t = document.createElement("bootstrap")
              , e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var i in e)
                if (void 0 !== t.style[i])
                    return {
                        end: e[i]
                    };
            return !1
        }(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        })
    }
    ))
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]'
      , Alert = function(i) {
        t(i).on("click", e, this.close)
    };
    Alert.VERSION = "3.3.7",
    Alert.TRANSITION_DURATION = 150,
    Alert.prototype.close = function(e) {
        var i = t(this)
          , o = i.attr("data-target");
        o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
        var n = t("#" === o ? [] : o);
        function removeElement() {
            n.detach().trigger("closed.bs.alert").remove()
        }
        e && e.preventDefault(),
        n.length || (n = i.closest(".alert")),
        n.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (n.removeClass("in"),
        t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement())
    }
    ;
    var i = t.fn.alert;
    t.fn.alert = function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.alert");
            o || i.data("bs.alert", o = new Alert(this)),
            "string" == typeof e && o[e].call(i)
        }
        ))
    }
    ,
    t.fn.alert.Constructor = Alert,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = i,
        this
    }
    ,
    t(document).on("click.bs.alert.data-api", e, Alert.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    var Button = function(e, i) {
        this.$element = t(e),
        this.options = t.extend({}, Button.DEFAULTS, i),
        this.isLoading = !1
    };
    function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.button")
              , n = "object" == typeof e && e;
            o || i.data("bs.button", o = new Button(this,n)),
            "toggle" == e ? o.toggle() : e && o.setState(e)
        }
        ))
    }
    Button.VERSION = "3.3.7",
    Button.DEFAULTS = {
        loadingText: "loading..."
    },
    Button.prototype.setState = function(e) {
        var i = "disabled"
          , o = this.$element
          , n = o.is("input") ? "val" : "html"
          , s = o.data();
        e += "Text",
        null == s.resetText && o.data("resetText", o[n]()),
        setTimeout(t.proxy((function() {
            o[n](null == s[e] ? this.options[e] : s[e]),
            "loadingText" == e ? (this.isLoading = !0,
            o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1,
            o.removeClass(i).removeAttr(i).prop(i, !1))
        }
        ), this), 0)
    }
    ,
    Button.prototype.toggle = function() {
        var t = !0
          , e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1),
            e.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1),
            this.$element.toggleClass("active")),
            i.prop("checked", this.$element.hasClass("active")),
            t && i.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var e = t.fn.button;
    t.fn.button = Plugin,
    t.fn.button.Constructor = Button,
    t.fn.button.noConflict = function() {
        return t.fn.button = e,
        this
    }
    ,
    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
        var i = t(e.target).closest(".btn");
        Plugin.call(i, "toggle"),
        t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(),
        i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }
    )).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    }
    ))
}(jQuery),
function(t) {
    "use strict";
    var Carousel = function(e, i) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = i,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.carousel")
              , n = t.extend({}, Carousel.DEFAULTS, i.data(), "object" == typeof e && e)
              , s = "string" == typeof e ? e : n.slide;
            o || i.data("bs.carousel", o = new Carousel(this,n)),
            "number" == typeof e ? o.to(e) : s ? o[s]() : n.interval && o.pause().cycle()
        }
        ))
    }
    Carousel.VERSION = "3.3.7",
    Carousel.TRANSITION_DURATION = 600,
    Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    Carousel.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }
    ,
    Carousel.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    Carousel.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"),
        this.$items.index(t || this.$active)
    }
    ,
    Carousel.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap)
            return e;
        var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }
    ,
    Carousel.prototype.to = function(t) {
        var e = this
          , i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", (function() {
                e.to(t)
            }
            )) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }
    ,
    Carousel.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    Carousel.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    Carousel.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    Carousel.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active")
          , n = i || this.getItemForDirection(e, o)
          , s = this.interval
          , r = "next" == e ? "left" : "right"
          , a = this;
        if (n.hasClass("active"))
            return this.sliding = !1;
        var l = n[0]
          , h = t.Event("slide.bs.carousel", {
            relatedTarget: l,
            direction: r
        });
        if (this.$element.trigger(h),
        !h.isDefaultPrevented()) {
            if (this.sliding = !0,
            s && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(n)]);
                d && d.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e),
            n[0].offsetWidth,
            o.addClass(r),
            n.addClass(r),
            o.one("bsTransitionEnd", (function() {
                n.removeClass([e, r].join(" ")).addClass("active"),
                o.removeClass(["active", r].join(" ")),
                a.sliding = !1,
                setTimeout((function() {
                    a.$element.trigger(p)
                }
                ), 0)
            }
            )).emulateTransitionEnd(Carousel.TRANSITION_DURATION)) : (o.removeClass("active"),
            n.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(p)),
            s && this.cycle(),
            this
        }
    }
    ;
    var e = t.fn.carousel;
    t.fn.carousel = Plugin,
    t.fn.carousel.Constructor = Carousel,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = e,
        this
    }
    ;
    var clickHandler = function(e) {
        var i, o = t(this), n = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var s = t.extend({}, n.data(), o.data())
              , r = o.attr("data-slide-to");
            r && (s.interval = !1),
            Plugin.call(n, s),
            r && n.data("bs.carousel").to(r),
            e.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler),
    t(window).on("load", (function() {
        t('[data-ride="carousel"]').each((function() {
            var e = t(this);
            Plugin.call(e, e.data())
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    "use strict";
    var Collapse = function(e, i) {
        this.$element = t(e),
        this.options = t.extend({}, Collapse.DEFAULTS, i),
        this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    function getTargetFromTrigger(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }
    function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.collapse")
              , n = t.extend({}, Collapse.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && n.toggle && /show|hide/.test(e) && (n.toggle = !1),
            o || i.data("bs.collapse", o = new Collapse(this,n)),
            "string" == typeof e && o[e]()
        }
        ))
    }
    Collapse.VERSION = "3.3.7",
    Collapse.TRANSITION_DURATION = 350,
    Collapse.DEFAULTS = {
        toggle: !0
    },
    Collapse.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ,
    Collapse.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (e = i.data("bs.collapse")) && e.transitioning)) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o),
                !o.isDefaultPrevented()) {
                    i && i.length && (Plugin.call(i, "hide"),
                    e || i.data("bs.collapse", null));
                    var n = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var complete = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[n](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return complete.call(this);
                    var s = t.camelCase(["scroll", n].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[n](this.$element[0][s])
                }
            }
        }
    }
    ,
    Collapse.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var complete = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition)
                    return complete.call(this);
                this.$element[i](0).one("bsTransitionEnd", t.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)
            }
        }
    }
    ,
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    Collapse.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(e, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(getTargetFromTrigger(o), o)
        }
        ), this)).end()
    }
    ,
    Collapse.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
        e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    }
    ;
    var e = t.fn.collapse;
    t.fn.collapse = Plugin,
    t.fn.collapse.Constructor = Collapse,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = e,
        this
    }
    ,
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
        var i = t(this);
        i.attr("data-target") || e.preventDefault();
        var o = getTargetFromTrigger(i)
          , n = o.data("bs.collapse") ? "toggle" : i.data();
        Plugin.call(o, n)
    }
    ))
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-toggle="dropdown"]'
      , Dropdown = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    function getParent(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }
    function clearMenus(i) {
        i && 3 === i.which || (t(".dropdown-backdrop").remove(),
        t(e).each((function() {
            var e = t(this)
              , o = getParent(e)
              , n = {
                relatedTarget: this
            };
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", n)),
            i.isDefaultPrevented() || (e.attr("aria-expanded", "false"),
            o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", n)))))
        }
        )))
    }
    Dropdown.VERSION = "3.3.7",
    Dropdown.prototype.toggle = function(e) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = getParent(i)
              , n = o.hasClass("open");
            if (clearMenus(),
            !n) {
                "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", clearMenus);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(e = t.Event("show.bs.dropdown", s)),
                e.isDefaultPrevented())
                    return;
                i.trigger("focus").attr("aria-expanded", "true"),
                o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }
    ,
    Dropdown.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(),
            i.stopPropagation(),
            !o.is(".disabled, :disabled")) {
                var n = getParent(o)
                  , s = n.hasClass("open");
                if (!s && 27 != i.which || s && 27 == i.which)
                    return 27 == i.which && n.find(e).trigger("focus"),
                    o.trigger("click");
                var r = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (r.length) {
                    var a = r.index(i.target);
                    38 == i.which && a > 0 && a--,
                    40 == i.which && a < r.length - 1 && a++,
                    ~a || (a = 0),
                    r.eq(a).trigger("focus")
                }
            }
        }
    }
    ;
    var i = t.fn.dropdown;
    t.fn.dropdown = function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new Dropdown(this)),
            "string" == typeof e && o[e].call(i)
        }
        ))
    }
    ,
    t.fn.dropdown.Constructor = Dropdown,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = i,
        this
    }
    ,
    t(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        t.stopPropagation()
    }
    )).on("click.bs.dropdown.data-api", e, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", e, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    var Modal = function(e, i) {
        this.options = i,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() {
            this.$element.trigger("loaded.bs.modal")
        }
        ), this))
    };
    function Plugin(e, i) {
        return this.each((function() {
            var o = t(this)
              , n = o.data("bs.modal")
              , s = t.extend({}, Modal.DEFAULTS, o.data(), "object" == typeof e && e);
            n || o.data("bs.modal", n = new Modal(this,s)),
            "string" == typeof e ? n[e](i) : s.show && n.show(i)
        }
        ))
    }
    Modal.VERSION = "3.3.7",
    Modal.TRANSITION_DURATION = 300,
    Modal.BACKDROP_TRANSITION_DURATION = 150,
    Modal.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    Modal.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }
    ,
    Modal.prototype.show = function(e) {
        var i = this
          , o = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(o),
        this.isShown || o.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
            i.$element.one("mouseup.dismiss.bs.modal", (function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            }
            ))
        }
        )),
        this.backdrop((function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            i.adjustDialog(),
            o && i.$element[0].offsetWidth,
            i.$element.addClass("in"),
            i.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", (function() {
                i.$element.trigger("focus").trigger(n)
            }
            )).emulateTransitionEnd(Modal.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(n)
        }
        )))
    }
    ,
    Modal.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        t(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    Modal.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }
        ), this))
    }
    ,
    Modal.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) {
            27 == t.which && this.hide()
        }
        ), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    Modal.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }
    ,
    Modal.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop((function() {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        }
        ))
    }
    ,
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    Modal.prototype.backdrop = function(e) {
        var i = this
          , o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }
            ), this)),
            n && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
                return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var callbackRemove = function() {
                i.removeBackdrop(),
                e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove()
        } else
            e && e()
    }
    ,
    Modal.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    Modal.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }
    ,
    Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    Modal.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    Modal.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }
    ,
    Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    Modal.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    }
    ;
    var e = t.fn.modal;
    t.fn.modal = Plugin,
    t.fn.modal.Constructor = Modal,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = e,
        this
    }
    ,
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
        var i = t(this)
          , o = i.attr("href")
          , n = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""))
          , s = n.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(o) && o
        }, n.data(), i.data());
        i.is("a") && e.preventDefault(),
        n.one("show.bs.modal", (function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", (function() {
                i.is(":visible") && i.trigger("focus")
            }
            ))
        }
        )),
        Plugin.call(n, s, this)
    }
    ))
}(jQuery),
function(t) {
    "use strict";
    var Tooltip = function(t, e) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", t, e)
    };
    Tooltip.VERSION = "3.3.7",
    Tooltip.TRANSITION_DURATION = 150,
    Tooltip.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    Tooltip.prototype.init = function(e, i, o) {
        if (this.enabled = !0,
        this.type = e,
        this.$element = t(i),
        this.options = this.getOptions(o),
        this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--; ) {
            var r = n[s];
            if ("click" == r)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin"
                  , l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS
    }
    ,
    Tooltip.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    }
    ,
    Tooltip.prototype.getDelegateOptions = function() {
        var e = {}
          , i = this.getDefaults();
        return this._options && t.each(this._options, (function(t, o) {
            i[t] != o && (e[t] = o)
        }
        )),
        e
    }
    ,
    Tooltip.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, i)),
        e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
        i.tip().hasClass("in") || "in" == i.hoverState)
            i.hoverState = "in";
        else {
            if (clearTimeout(i.timeout),
            i.hoverState = "in",
            !i.options.delay || !i.options.delay.show)
                return i.show();
            i.timeout = setTimeout((function() {
                "in" == i.hoverState && i.show()
            }
            ), i.options.delay.show)
        }
    }
    ,
    Tooltip.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t])
                return !0;
        return !1
    }
    ,
    Tooltip.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, i)),
        e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
        !i.isInStateTrue()) {
            if (clearTimeout(i.timeout),
            i.hoverState = "out",
            !i.options.delay || !i.options.delay.hide)
                return i.hide();
            i.timeout = setTimeout((function() {
                "out" == i.hoverState && i.hide()
            }
            ), i.options.delay.hide)
        }
    }
    ,
    Tooltip.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)
                return;
            var o = this
              , n = this.tip()
              , s = this.getUID(this.type);
            this.setContent(),
            n.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement
              , a = /\s?auto?\s?/i
              , l = a.test(r);
            l && (r = r.replace(a, "") || "top"),
            n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this),
            this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition()
              , d = n[0].offsetWidth
              , p = n[0].offsetHeight;
            if (l) {
                var c = r
                  , f = this.getPosition(this.$viewport);
                r = "bottom" == r && h.bottom + p > f.bottom ? "top" : "top" == r && h.top - p < f.top ? "bottom" : "right" == r && h.right + d > f.width ? "left" : "left" == r && h.left - d < f.left ? "right" : r,
                n.removeClass(c).addClass(r)
            }
            var u = this.getCalculatedOffset(r, h, d, p);
            this.applyPlacement(u, r);
            var complete = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type),
                o.hoverState = null,
                "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete()
        }
    }
    ,
    Tooltip.prototype.applyPlacement = function(e, i) {
        var o = this.tip()
          , n = o[0].offsetWidth
          , s = o[0].offsetHeight
          , r = parseInt(o.css("margin-top"), 10)
          , a = parseInt(o.css("margin-left"), 10);
        isNaN(r) && (r = 0),
        isNaN(a) && (a = 0),
        e.top += r,
        e.left += a,
        t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0),
        o.addClass("in");
        var l = o[0].offsetWidth
          , h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i)
          , c = p ? 2 * d.left - n + l : 2 * d.top - s + h
          , f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e),
        this.replaceArrow(c, o[0][f], p)
    }
    ,
    Tooltip.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }
    ,
    Tooltip.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
        t.removeClass("fade in top bottom left right")
    }
    ,
    Tooltip.prototype.hide = function(e) {
        var i = this
          , o = t(this.$tip)
          , n = t.Event("hide.bs." + this.type);
        function complete() {
            "in" != i.hoverState && o.detach(),
            i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
            e && e()
        }
        if (this.$element.trigger(n),
        !n.isDefaultPrevented())
            return o.removeClass("in"),
            t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete(),
            this.hoverState = null,
            this
    }
    ,
    Tooltip.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }
    ,
    Tooltip.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    Tooltip.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0]
          , o = "BODY" == i.tagName
          , n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = window.SVGElement && i instanceof window.SVGElement
          , r = o ? {
            top: 0,
            left: 0
        } : s ? null : e.offset()
          , a = {
            scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }
          , l = o ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, n, a, l, r)
    }
    ,
    Tooltip.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }
    ,
    Tooltip.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return n;
        var s = this.options.viewport && this.options.viewport.padding || 0
          , r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll
              , l = e.top + s - r.scroll + o;
            a < r.top ? n.top = r.top - a : l > r.top + r.height && (n.top = r.top + r.height - l)
        } else {
            var h = e.left - s
              , d = e.left + s + i;
            h < r.left ? n.left = r.left - h : d > r.right && (n.left = r.left + r.width - d)
        }
        return n
    }
    ,
    Tooltip.prototype.getTitle = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }
    ,
    Tooltip.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }
    ,
    Tooltip.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    Tooltip.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    Tooltip.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    Tooltip.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, i))),
        e ? (i.inState.click = !i.inState.click,
        i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }
    ,
    Tooltip.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout),
        this.hide((function() {
            t.$element.off("." + t.type).removeData("bs." + t.type),
            t.$tip && t.$tip.detach(),
            t.$tip = null,
            t.$arrow = null,
            t.$viewport = null,
            t.$element = null
        }
        ))
    }
    ;
    var e = t.fn.tooltip;
    t.fn.tooltip = function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.tooltip")
              , n = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new Tooltip(this,n)),
            "string" == typeof e && o[e]())
        }
        ))
    }
    ,
    t.fn.tooltip.Constructor = Tooltip,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = e,
        this
    }
}(jQuery),
function(t) {
    "use strict";
    var Popover = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    Popover.VERSION = "3.3.7",
    Popover.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    (Popover.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = Popover,
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS
    }
    ,
    Popover.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle()
          , i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
        t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i),
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    }
    ,
    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    Popover.prototype.getContent = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }
    ,
    Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var e = t.fn.popover;
    t.fn.popover = function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.popover")
              , n = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new Popover(this,n)),
            "string" == typeof e && o[e]())
        }
        ))
    }
    ,
    t.fn.popover.Constructor = Popover,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = e,
        this
    }
}(jQuery),
function(t) {
    "use strict";
    function ScrollSpy(e, i) {
        this.$body = t(document.body),
        this.$scrollElement = t(e).is(document.body) ? t(window) : t(e),
        this.options = t.extend({}, ScrollSpy.DEFAULTS, i),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.scrollspy")
              , n = "object" == typeof e && e;
            o || i.data("bs.scrollspy", o = new ScrollSpy(this,n)),
            "string" == typeof e && o[e]()
        }
        ))
    }
    ScrollSpy.VERSION = "3.3.7",
    ScrollSpy.DEFAULTS = {
        offset: 10
    },
    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    ScrollSpy.prototype.refresh = function() {
        var e = this
          , i = "offset"
          , o = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        t.isWindow(this.$scrollElement[0]) || (i = "position",
        o = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map((function() {
            var e = t(this)
              , n = e.data("target") || e.attr("href")
              , s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null
        }
        )).sort((function(t, e) {
            return t[0] - e[0]
        }
        )).each((function() {
            e.offsets.push(this[0]),
            e.targets.push(this[1])
        }
        ))
    }
    ,
    ScrollSpy.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), o = this.options.offset + i - this.$scrollElement.height(), n = this.offsets, s = this.targets, r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(),
        e >= o)
            return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < n[0])
            return this.activeTarget = null,
            this.clear();
        for (t = n.length; t--; )
            r != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }
    ,
    ScrollSpy.prototype.activate = function(e) {
        this.activeTarget = e,
        this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
          , o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")),
        o.trigger("activate.bs.scrollspy")
    }
    ,
    ScrollSpy.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var e = t.fn.scrollspy;
    t.fn.scrollspy = Plugin,
    t.fn.scrollspy.Constructor = ScrollSpy,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = e,
        this
    }
    ,
    t(window).on("load.bs.scrollspy.data-api", (function() {
        t('[data-spy="scroll"]').each((function() {
            var e = t(this);
            Plugin.call(e, e.data())
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    "use strict";
    var Tab = function(e) {
        this.element = t(e)
    };
    function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.tab");
            o || i.data("bs.tab", o = new Tab(this)),
            "string" == typeof e && o[e]()
        }
        ))
    }
    Tab.VERSION = "3.3.7",
    Tab.TRANSITION_DURATION = 150,
    Tab.prototype.show = function() {
        var e = this.element
          , i = e.closest("ul:not(.dropdown-menu)")
          , o = e.data("target");
        if (o || (o = (o = e.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a")
              , s = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            })
              , r = t.Event("show.bs.tab", {
                relatedTarget: n[0]
            });
            if (n.trigger(s),
            e.trigger(r),
            !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(o);
                this.activate(e.closest("li"), i),
                this.activate(a, a.parent(), (function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                }
                ))
            }
        }
    }
    ,
    Tab.prototype.activate = function(e, i, o) {
        var n = i.find("> .active")
          , s = o && t.support.transition && (n.length && n.hasClass("fade") || !!i.find("> .fade").length);
        function next() {
            n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            s ? (e[0].offsetWidth,
            e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            o && o()
        }
        n.length && s ? n.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next(),
        n.removeClass("in")
    }
    ;
    var e = t.fn.tab;
    t.fn.tab = Plugin,
    t.fn.tab.Constructor = Tab,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = e,
        this
    }
    ;
    var clickHandler = function(e) {
        e.preventDefault(),
        Plugin.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler)
}(jQuery),
function(t) {
    "use strict";
    var Affix = function(e, i) {
        this.options = t.extend({}, Affix.DEFAULTS, i),
        this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(e),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    function Plugin(e) {
        return this.each((function() {
            var i = t(this)
              , o = i.data("bs.affix")
              , n = "object" == typeof e && e;
            o || i.data("bs.affix", o = new Affix(this,n)),
            "string" == typeof e && o[e]()
        }
        ))
    }
    Affix.VERSION = "3.3.7",
    Affix.RESET = "affix affix-top affix-bottom",
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    },
    Affix.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop()
          , s = this.$element.offset()
          , r = this.$target.height();
        if (null != i && "top" == this.affixed)
            return n < i && "top";
        if ("bottom" == this.affixed)
            return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + r <= t - o) && "bottom";
        var a = null == this.affixed
          , l = a ? n : s.top;
        return null != i && n <= i ? "top" : null != o && l + (a ? r : e) >= t - o && "bottom"
    }
    ,
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var t = this.$target.scrollTop()
          , e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }
    ,
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }
    ,
    Affix.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height()
              , i = this.options.offset
              , o = i.top
              , n = i.bottom
              , s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (n = o = i),
            "function" == typeof o && (o = i.top(this.$element)),
            "function" == typeof n && (n = i.bottom(this.$element));
            var r = this.getState(s, e, o, n);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (r ? "-" + r : "")
                  , l = t.Event(a + ".bs.affix");
                if (this.$element.trigger(l),
                l.isDefaultPrevented())
                    return;
                this.affixed = r,
                this.unpin = "bottom" == r ? this.getPinnedOffset() : null,
                this.$element.removeClass(Affix.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: s - e - n
            })
        }
    }
    ;
    var e = t.fn.affix;
    t.fn.affix = Plugin,
    t.fn.affix.Constructor = Affix,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = e,
        this
    }
    ,
    t(window).on("load", (function() {
        t('[data-spy="affix"]').each((function() {
            var e = t(this)
              , i = e.data();
            i.offset = i.offset || {},
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            Plugin.call(e, i)
        }
        ))
    }
    ))
}(jQuery);
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function() {
    "use strict";
    var t = 0
      , e = {};
    function Waypoint(o) {
        if (!o)
            throw new Error("No options passed to Waypoint constructor");
        if (!o.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t,
        this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, o),
        this.element = this.options.element,
        this.adapter = new Waypoint.Adapter(this.element),
        this.callback = o.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = Waypoint.Context.findOrCreateByElement(this.options.context),
        Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        e[this.key] = this,
        t += 1
    }
    Waypoint.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }
    ,
    Waypoint.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }
    ,
    Waypoint.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete e[this.key]
    }
    ,
    Waypoint.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    Waypoint.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    Waypoint.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    Waypoint.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    Waypoint.invokeAll = function(t) {
        var o = [];
        for (var i in e)
            o.push(e[i]);
        for (var n = 0, r = o.length; n < r; n++)
            o[n][t]()
    }
    ,
    Waypoint.destroyAll = function() {
        Waypoint.invokeAll("destroy")
    }
    ,
    Waypoint.disableAll = function() {
        Waypoint.invokeAll("disable")
    }
    ,
    Waypoint.enableAll = function() {
        Waypoint.invokeAll("enable")
    }
    ,
    Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll()
    }
    ,
    Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    Waypoint.adapters = [],
    Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    Waypoint.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = Waypoint
}(),
function() {
    "use strict";
    function requestAnimationFrameShim(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    var t = 0
      , e = {}
      , o = window.Waypoint
      , i = window.onload;
    function Context(i) {
        this.element = i,
        this.Adapter = o.Adapter,
        this.adapter = new this.Adapter(i),
        this.key = "waypoint-context-" + t,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        i.waypointContextKey = this.key,
        e[i.waypointContextKey] = this,
        t += 1,
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    Context.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t,
        this.refresh()
    }
    ,
    Context.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , o = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && o && (this.adapter.off(".waypoints"),
        delete e[this.key])
    }
    ,
    Context.prototype.createThrottledResizeHandler = function() {
        var t = this;
        function resizeHandler() {
            t.handleResize(),
            t.didResize = !1
        }
        this.adapter.on("resize.waypoints", (function() {
            t.didResize || (t.didResize = !0,
            o.requestAnimationFrame(resizeHandler))
        }
        ))
    }
    ,
    Context.prototype.createThrottledScrollHandler = function() {
        var t = this;
        function scrollHandler() {
            t.handleScroll(),
            t.didScroll = !1
        }
        this.adapter.on("scroll.waypoints", (function() {
            t.didScroll && !o.isTouch || (t.didScroll = !0,
            o.requestAnimationFrame(scrollHandler))
        }
        ))
    }
    ,
    Context.prototype.handleResize = function() {
        o.Context.refreshAll()
    }
    ,
    Context.prototype.handleScroll = function() {
        var t = {}
          , e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var o in e) {
            var i = e[o]
              , n = i.newScroll > i.oldScroll ? i.forward : i.backward;
            for (var r in this.waypoints[o]) {
                var s = this.waypoints[o][r]
                  , a = i.oldScroll < s.triggerPoint
                  , l = i.newScroll >= s.triggerPoint;
                (a && l || !a && !l) && (s.queueTrigger(n),
                t[s.group.id] = s.group)
            }
        }
        for (var p in t)
            t[p].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }
    ,
    Context.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    Context.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key],
        this.checkEmpty()
    }
    ,
    Context.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    Context.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var o in this.waypoints[e])
                t.push(this.waypoints[e][o]);
        for (var i = 0, n = t.length; i < n; i++)
            t[i].destroy()
    }
    ,
    Context.prototype.refresh = function() {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), n = {};
        for (var r in this.handleScroll(),
        t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, p, h, u, c = this.waypoints[r][a], d = c.options.offset, f = c.triggerPoint, y = 0, w = null == f;
                c.element !== c.element.window && (y = c.adapter.offset()[s.offsetProp]),
                "function" == typeof d ? d = d.apply(c) : "string" == typeof d && (d = parseFloat(d),
                c.options.offset.indexOf("%") > -1 && (d = Math.ceil(s.contextDimension * d / 100))),
                l = s.contextScroll - s.contextOffset,
                c.triggerPoint = y + l - d,
                p = f < s.oldScroll,
                h = c.triggerPoint >= s.oldScroll,
                u = !p && !h,
                !w && (p && h) ? (c.queueTrigger(s.backward),
                n[c.group.id] = c.group) : (!w && u || w && s.oldScroll >= c.triggerPoint) && (c.queueTrigger(s.forward),
                n[c.group.id] = c.group)
            }
        }
        return o.requestAnimationFrame((function() {
            for (var t in n)
                n[t].flushTriggers()
        }
        )),
        this
    }
    ,
    Context.findOrCreateByElement = function(t) {
        return Context.findByElement(t) || new Context(t)
    }
    ,
    Context.refreshAll = function() {
        for (var t in e)
            e[t].refresh()
    }
    ,
    Context.findByElement = function(t) {
        return e[t.waypointContextKey]
    }
    ,
    window.onload = function() {
        i && i(),
        Context.refreshAll()
    }
    ,
    o.requestAnimationFrame = function(t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim).call(window, t)
    }
    ,
    o.Context = Context
}(),
function() {
    "use strict";
    function byTriggerPoint(t, e) {
        return t.triggerPoint - e.triggerPoint
    }
    function byReverseTriggerPoint(t, e) {
        return e.triggerPoint - t.triggerPoint
    }
    var t = {
        vertical: {},
        horizontal: {}
    }
      , e = window.Waypoint;
    function Group(e) {
        this.name = e.name,
        this.axis = e.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        t[this.axis][this.name] = this
    }
    Group.prototype.add = function(t) {
        this.waypoints.push(t)
    }
    ,
    Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    Group.prototype.flushTriggers = function() {
        for (var t in this.triggerQueues) {
            var e = this.triggerQueues[t]
              , o = "up" === t || "left" === t;
            e.sort(o ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, n = e.length; i < n; i += 1) {
                var r = e[i];
                (r.options.continuous || i === e.length - 1) && r.trigger([t])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    Group.prototype.next = function(t) {
        this.waypoints.sort(byTriggerPoint);
        var o = e.Adapter.inArray(t, this.waypoints);
        return o === this.waypoints.length - 1 ? null : this.waypoints[o + 1]
    }
    ,
    Group.prototype.previous = function(t) {
        this.waypoints.sort(byTriggerPoint);
        var o = e.Adapter.inArray(t, this.waypoints);
        return o ? this.waypoints[o - 1] : null
    }
    ,
    Group.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }
    ,
    Group.prototype.remove = function(t) {
        var o = e.Adapter.inArray(t, this.waypoints);
        o > -1 && this.waypoints.splice(o, 1)
    }
    ,
    Group.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    Group.findOrCreate = function(e) {
        return t[e.axis][e.name] || new Group(e)
    }
    ,
    e.Group = Group
}(),
function() {
    "use strict";
    var t = window.jQuery
      , e = window.Waypoint;
    function JQueryAdapter(e) {
        this.$element = t(e)
    }
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function(t, e) {
        JQueryAdapter.prototype[e] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[e].apply(this.$element, t)
        }
    }
    )),
    t.each(["extend", "inArray", "isEmptyObject"], (function(e, o) {
        JQueryAdapter[o] = t[o]
    }
    )),
    e.adapters.push({
        name: "jquery",
        Adapter: JQueryAdapter
    }),
    e.Adapter = JQueryAdapter
}(),
function() {
    "use strict";
    var t = window.Waypoint;
    function createExtension(e) {
        return function() {
            var o = []
              , i = arguments[0];
            return e.isFunction(arguments[0]) && ((i = e.extend({}, arguments[1])).handler = arguments[0]),
            this.each((function() {
                var n = e.extend({}, i, {
                    element: this
                });
                "string" == typeof n.context && (n.context = e(this).closest(n.context)[0]),
                o.push(new t(n))
            }
            )),
            o
        }
    }
    window.jQuery && (window.jQuery.fn.waypoint = createExtension(window.jQuery)),
    window.Zepto && (window.Zepto.fn.waypoint = createExtension(window.Zepto))
}();
/*!
Waypoints Inview Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function() {
    "use strict";
    function noop() {}
    var t = window.Waypoint;
    function Inview(e) {
        this.options = t.Adapter.extend({}, Inview.defaults, e),
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.waypoints = [],
        this.element = this.options.element,
        this.createWaypoints()
    }
    Inview.prototype.createWaypoints = function() {
        for (var t = {
            vertical: [{
                down: "enter",
                up: "exited",
                offset: "100%"
            }, {
                down: "entered",
                up: "exit",
                offset: "bottom-in-view"
            }, {
                down: "exit",
                up: "entered",
                offset: 0
            }, {
                down: "exited",
                up: "enter",
                offset: function() {
                    return -this.adapter.outerHeight()
                }
            }],
            horizontal: [{
                right: "enter",
                left: "exited",
                offset: "100%"
            }, {
                right: "entered",
                left: "exit",
                offset: "right-in-view"
            }, {
                right: "exit",
                left: "entered",
                offset: 0
            }, {
                right: "exited",
                left: "enter",
                offset: function() {
                    return -this.adapter.outerWidth()
                }
            }]
        }, e = 0, n = t[this.axis].length; e < n; e++) {
            var i = t[this.axis][e];
            this.createWaypoint(i)
        }
    }
    ,
    Inview.prototype.createWaypoint = function(e) {
        var n = this;
        this.waypoints.push(new t({
            context: this.options.context,
            element: this.options.element,
            enabled: this.options.enabled,
            handler: function(t) {
                return function(e) {
                    n.options[t[e]].call(n, e)
                }
            }(e),
            offset: e.offset,
            horizontal: this.options.horizontal
        }))
    }
    ,
    Inview.prototype.destroy = function() {
        for (var t = 0, e = this.waypoints.length; t < e; t++)
            this.waypoints[t].destroy();
        this.waypoints = []
    }
    ,
    Inview.prototype.disable = function() {
        for (var t = 0, e = this.waypoints.length; t < e; t++)
            this.waypoints[t].disable()
    }
    ,
    Inview.prototype.enable = function() {
        for (var t = 0, e = this.waypoints.length; t < e; t++)
            this.waypoints[t].enable()
    }
    ,
    Inview.defaults = {
        context: window,
        enabled: !0,
        enter: noop,
        entered: noop,
        exit: noop,
        exited: noop
    },
    t.Inview = Inview
}();
/*!
 * Stellar.js v0.6.2
 * http://markdalgleish.com/projects/stellar.js
 * 
 * Copyright 2013, Mark Dalgleish
 * This content is released under the MIT license
 * http://markdalgleish.mit-license.org
 */
!function(t, e, i, s) {
    var o = "stellar"
      , n = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function(t) {
            t.hide()
        },
        showElement: function(t) {
            t.show()
        }
    }
      , r = {
        scroll: {
            getLeft: function(t) {
                return t.scrollLeft()
            },
            setLeft: function(t, e) {
                t.scrollLeft(e)
            },
            getTop: function(t) {
                return t.scrollTop()
            },
            setTop: function(t, e) {
                t.scrollTop(e)
            }
        },
        position: {
            getLeft: function(t) {
                return -1 * parseInt(t.css("left"), 10)
            },
            getTop: function(t) {
                return -1 * parseInt(t.css("top"), 10)
            }
        },
        margin: {
            getLeft: function(t) {
                return -1 * parseInt(t.css("margin-left"), 10)
            },
            getTop: function(t) {
                return -1 * parseInt(t.css("margin-top"), 10)
            }
        },
        transform: {
            getLeft: function(t) {
                var e = getComputedStyle(t[0])[l];
                return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
            },
            getTop: function(t) {
                var e = getComputedStyle(t[0])[l];
                return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
            }
        }
    }
      , a = {
        position: {
            setLeft: function(t, e) {
                t.css("left", e)
            },
            setTop: function(t, e) {
                t.css("top", e)
            }
        },
        transform: {
            setPosition: function(t, e, i, s, o) {
                t[0].style[l] = "translate3d(" + (e - i) + "px, " + (s - o) + "px, 0)"
            }
        }
    }
      , l = function() {
        var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, s = t("script")[0].style, o = "";
        for (e in s)
            if (i.test(e)) {
                o = e.match(i)[0];
                break
            }
        return "WebkitOpacity"in s && (o = "Webkit"),
        "KhtmlOpacity"in s && (o = "Khtml"),
        function(t) {
            return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
        }
    }()("transform")
      , f = t("<div />", {
        style: "background:#fff"
    }).css("background-position-x") !== s
      , c = f ? function(t, e, i) {
        t.css({
            "background-position-x": e,
            "background-position-y": i
        })
    }
    : function(t, e, i) {
        t.css("background-position", e + " " + i)
    }
      , h = f ? function(t) {
        return [t.css("background-position-x"), t.css("background-position-y")]
    }
    : function(t) {
        return t.css("background-position").split(" ")
    }
      , p = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
        setTimeout(t, 1e3 / 60)
    }
    ;
    function Plugin(e, i) {
        this.element = e,
        this.options = t.extend({}, n, i),
        this._defaults = n,
        this._name = o,
        this.init()
    }
    Plugin.prototype = {
        init: function() {
            this.options.name = "stellar_" + Math.floor(1e9 * Math.random()),
            this._defineElements(),
            this._defineGetters(),
            this._defineSetters(),
            this._handleWindowLoadAndResize(),
            this._detectViewport(),
            this.refresh({
                firstLoad: !0
            }),
            "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === i.body && (this.element = e),
            this.$scrollElement = t(this.element),
            this.$element = this.element === e ? t("body") : this.$scrollElement,
            this.$viewportElement = this.options.viewportElement !== s ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var t = this
              , e = r[t.options.scrollProperty];
            this._getScrollLeft = function() {
                return e.getLeft(t.$scrollElement)
            }
            ,
            this._getScrollTop = function() {
                return e.getTop(t.$scrollElement)
            }
        },
        _defineSetters: function() {
            var e = this
              , i = r[e.options.scrollProperty]
              , s = a[e.options.positionProperty]
              , o = i.setLeft
              , n = i.setTop;
            this._setScrollLeft = "function" == typeof o ? function(t) {
                o(e.$scrollElement, t)
            }
            : t.noop,
            this._setScrollTop = "function" == typeof n ? function(t) {
                n(e.$scrollElement, t)
            }
            : t.noop,
            this._setPosition = s.setPosition || function(t, i, o, n, r) {
                e.options.horizontalScrolling && s.setLeft(t, i, o),
                e.options.verticalScrolling && s.setTop(t, n, r)
            }
        },
        _handleWindowLoadAndResize: function() {
            var i = this
              , s = t(e);
            i.options.responsive && s.bind("load." + this.name, (function() {
                i.refresh()
            }
            )),
            s.bind("resize." + this.name, (function() {
                i._detectViewport(),
                i.options.responsive && i.refresh()
            }
            ))
        },
        refresh: function(i) {
            var s = this
              , o = s._getScrollLeft()
              , n = s._getScrollTop();
            i && i.firstLoad || this._reset(),
            this._setScrollLeft(0),
            this._setScrollTop(0),
            this._setOffsets(),
            this._findParticles(),
            this._findBackgrounds(),
            i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load((function() {
                var t = s._getScrollLeft()
                  , e = s._getScrollTop();
                s._setScrollLeft(t + 1),
                s._setScrollTop(e + 1),
                s._setScrollLeft(t),
                s._setScrollTop(e)
            }
            )),
            this._setScrollLeft(o),
            this._setScrollTop(n)
        },
        _detectViewport: function() {
            var t = this.$viewportElement.offset()
              , e = null !== t && t !== s;
            this.viewportWidth = this.$viewportElement.width(),
            this.viewportHeight = this.$viewportElement.height(),
            this.viewportOffsetTop = e ? t.top : 0,
            this.viewportOffsetLeft = e ? t.left : 0
        },
        _findParticles: function() {
            var e = this;
            this._getScrollLeft(),
            this._getScrollTop();
            if (this.particles !== s)
                for (var i = this.particles.length - 1; i >= 0; i--)
                    this.particles[i].$element.data("stellar-elementIsActive", s);
            this.particles = [],
            this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each((function(i) {
                var o, n, r, a, l, f, c, h, p, d = t(this), u = 0, g = 0, m = 0, v = 0;
                if (d.data("stellar-elementIsActive")) {
                    if (d.data("stellar-elementIsActive") !== this)
                        return
                } else
                    d.data("stellar-elementIsActive", this);
                e.options.showElement(d),
                d.data("stellar-startingLeft") ? (d.css("left", d.data("stellar-startingLeft")),
                d.css("top", d.data("stellar-startingTop"))) : (d.data("stellar-startingLeft", d.css("left")),
                d.data("stellar-startingTop", d.css("top"))),
                r = d.position().left,
                a = d.position().top,
                l = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10),
                f = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10),
                h = d.offset().left - l,
                p = d.offset().top - f,
                d.parents().each((function() {
                    var e = t(this);
                    if (!0 === e.data("stellar-offset-parent"))
                        return u = m,
                        g = v,
                        c = e,
                        !1;
                    m += e.position().left,
                    v += e.position().top
                }
                )),
                o = d.data("stellar-horizontal-offset") !== s ? d.data("stellar-horizontal-offset") : c !== s && c.data("stellar-horizontal-offset") !== s ? c.data("stellar-horizontal-offset") : e.horizontalOffset,
                n = d.data("stellar-vertical-offset") !== s ? d.data("stellar-vertical-offset") : c !== s && c.data("stellar-vertical-offset") !== s ? c.data("stellar-vertical-offset") : e.verticalOffset,
                e.particles.push({
                    $element: d,
                    $offsetParent: c,
                    isFixed: "fixed" === d.css("position"),
                    horizontalOffset: o,
                    verticalOffset: n,
                    startingPositionLeft: r,
                    startingPositionTop: a,
                    startingOffsetLeft: h,
                    startingOffsetTop: p,
                    parentOffsetLeft: u,
                    parentOffsetTop: g,
                    stellarRatio: d.data("stellar-ratio") !== s ? d.data("stellar-ratio") : 1,
                    width: d.outerWidth(!0),
                    height: d.outerHeight(!0),
                    isHidden: !1
                })
            }
            ))
        },
        _findBackgrounds: function() {
            var e, i = this, o = this._getScrollLeft(), n = this._getScrollTop();
            this.backgrounds = [],
            this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"),
            this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)),
            e.each((function() {
                var e, r, a, l, f, p, d, u = t(this), g = h(u), m = 0, v = 0, L = 0, _ = 0;
                if (u.data("stellar-backgroundIsActive")) {
                    if (u.data("stellar-backgroundIsActive") !== this)
                        return
                } else
                    u.data("stellar-backgroundIsActive", this);
                u.data("stellar-backgroundStartingLeft") ? c(u, u.data("stellar-backgroundStartingLeft"), u.data("stellar-backgroundStartingTop")) : (u.data("stellar-backgroundStartingLeft", g[0]),
                u.data("stellar-backgroundStartingTop", g[1])),
                a = "auto" === u.css("margin-left") ? 0 : parseInt(u.css("margin-left"), 10),
                l = "auto" === u.css("margin-top") ? 0 : parseInt(u.css("margin-top"), 10),
                f = u.offset().left - a - o,
                p = u.offset().top - l - n,
                u.parents().each((function() {
                    var e = t(this);
                    if (!0 === e.data("stellar-offset-parent"))
                        return m = L,
                        v = _,
                        d = e,
                        !1;
                    L += e.position().left,
                    _ += e.position().top
                }
                )),
                e = u.data("stellar-horizontal-offset") !== s ? u.data("stellar-horizontal-offset") : d !== s && d.data("stellar-horizontal-offset") !== s ? d.data("stellar-horizontal-offset") : i.horizontalOffset,
                r = u.data("stellar-vertical-offset") !== s ? u.data("stellar-vertical-offset") : d !== s && d.data("stellar-vertical-offset") !== s ? d.data("stellar-vertical-offset") : i.verticalOffset,
                i.backgrounds.push({
                    $element: u,
                    $offsetParent: d,
                    isFixed: "fixed" === u.css("background-attachment"),
                    horizontalOffset: e,
                    verticalOffset: r,
                    startingValueLeft: g[0],
                    startingValueTop: g[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                    startingPositionLeft: u.position().left,
                    startingPositionTop: u.position().top,
                    startingOffsetLeft: f,
                    startingOffsetTop: p,
                    parentOffsetLeft: m,
                    parentOffsetTop: v,
                    stellarRatio: u.data("stellar-background-ratio") === s ? 1 : u.data("stellar-background-ratio")
                })
            }
            )))
        },
        _reset: function() {
            var t, e, i, s, o;
            for (o = this.particles.length - 1; o >= 0; o--)
                e = (t = this.particles[o]).$element.data("stellar-startingLeft"),
                i = t.$element.data("stellar-startingTop"),
                this._setPosition(t.$element, e, e, i, i),
                this.options.showElement(t.$element),
                t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (o = this.backgrounds.length - 1; o >= 0; o--)
                (s = this.backgrounds[o]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null),
                c(s.$element, s.startingValueLeft, s.startingValueTop)
        },
        destroy: function() {
            this._reset(),
            this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name),
            this._animationLoop = t.noop,
            t(e).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var i = this
              , s = t(e);
            s.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name),
            "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(),
            s.bind("resize.horizontal-" + this.name, (function() {
                i.horizontalOffset = i.options.horizontalOffset()
            }
            ))) : this.horizontalOffset = this.options.horizontalOffset,
            "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(),
            s.bind("resize.vertical-" + this.name, (function() {
                i.verticalOffset = i.options.verticalOffset()
            }
            ))) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var t, e, i, s, o, n, r, a, l, f, h = this._getScrollLeft(), p = this._getScrollTop(), d = !0, u = !0;
            if (this.currentScrollLeft !== h || this.currentScrollTop !== p || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = h,
                this.currentScrollTop = p,
                this.currentWidth = this.viewportWidth,
                this.currentHeight = this.viewportHeight,
                f = this.particles.length - 1; f >= 0; f--)
                    e = (t = this.particles[f]).isFixed ? 1 : 0,
                    this.options.horizontalScrolling ? a = (n = (h + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft) - t.startingPositionLeft + t.startingOffsetLeft : (n = t.startingPositionLeft,
                    a = t.startingOffsetLeft),
                    this.options.verticalScrolling ? l = (r = (p + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop) - t.startingPositionTop + t.startingOffsetTop : (r = t.startingPositionTop,
                    l = t.startingOffsetTop),
                    this.options.hideDistantElements && (u = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : h) && a < (t.isFixed ? 0 : h) + this.viewportWidth + this.viewportOffsetLeft,
                    d = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : p) && l < (t.isFixed ? 0 : p) + this.viewportHeight + this.viewportOffsetTop),
                    u && d ? (t.isHidden && (this.options.showElement(t.$element),
                    t.isHidden = !1),
                    this._setPosition(t.$element, n, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element),
                    t.isHidden = !0);
                for (f = this.backgrounds.length - 1; f >= 0; f--)
                    e = (i = this.backgrounds[f]).isFixed ? 0 : 1,
                    s = this.options.horizontalScrolling ? (h + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft,
                    o = this.options.verticalScrolling ? (p + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop,
                    c(i.$element, s, o)
            }
        },
        _handleScrollEvent: function() {
            var t = this
              , e = !1
              , update = function() {
                t._repositionElements(),
                e = !1
            }
              , requestTick = function() {
                e || (p(update),
                e = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, requestTick),
            requestTick()
        },
        _startAnimationLoop: function() {
            var t = this;
            this._animationLoop = function() {
                p(t._animationLoop),
                t._repositionElements()
            }
            ,
            this._animationLoop()
        }
    },
    t.fn.stellar = function(e) {
        var i = arguments;
        return e === s || "object" == typeof e ? this.each((function() {
            t.data(this, "plugin_stellar") || t.data(this, "plugin_stellar", new Plugin(this,e))
        }
        )) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each((function() {
            var s = t.data(this, "plugin_stellar");
            s instanceof Plugin && "function" == typeof s[e] && s[e].apply(s, Array.prototype.slice.call(i, 1)),
            "destroy" === e && t.data(this, "plugin_stellar", null)
        }
        )) : void 0
    }
    ,
    t.stellar = function(i) {
        var s = t(e);
        return s.stellar.apply(s, Array.prototype.slice.call(arguments, 0))
    }
    ,
    t.stellar.scrollProperty = r,
    t.stellar.positionProperty = a,
    e.Stellar = Plugin
}(jQuery, this, document);
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function(t) {
    var e = Array.prototype.slice
      , i = Array.prototype.splice
      , n = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: "",
        widthFromWrapper: !0,
        responsiveWidth: !1,
        zIndex: "auto"
    }
      , r = t(window)
      , s = t(document)
      , o = []
      , c = r.height()
      , scroller = function() {
        for (var e = r.scrollTop(), i = s.height(), n = i - c, a = e > n ? n - e : 0, p = 0, d = o.length; p < d; p++) {
            var l = o[p]
              , h = l.stickyWrapper.offset().top - l.topSpacing - a;
            if (l.stickyWrapper.css("height", l.stickyElement.outerHeight()),
            e <= h)
                null !== l.currentTop && (l.stickyElement.css({
                    width: "",
                    position: "",
                    top: "",
                    "z-index": ""
                }),
                l.stickyElement.parent().removeClass(l.className),
                l.stickyElement.trigger("sticky-end", [l]),
                l.currentTop = null);
            else {
                var u, g = i - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - e - a;
                if (g < 0 ? g += l.topSpacing : g = l.topSpacing,
                l.currentTop !== g)
                    l.getWidthFrom ? u = t(l.getWidthFrom).width() || null : l.widthFromWrapper && (u = l.stickyWrapper.width()),
                    null == u && (u = l.stickyElement.width()),
                    l.stickyElement.css("width", u).css("position", "fixed").css("top", g).css("z-index", l.zIndex),
                    l.stickyElement.parent().addClass(l.className),
                    null === l.currentTop ? l.stickyElement.trigger("sticky-start", [l]) : l.stickyElement.trigger("sticky-update", [l]),
                    l.currentTop === l.topSpacing && l.currentTop > g || null === l.currentTop && g < l.topSpacing ? l.stickyElement.trigger("sticky-bottom-reached", [l]) : null !== l.currentTop && g === l.topSpacing && l.currentTop < g && l.stickyElement.trigger("sticky-bottom-unreached", [l]),
                    l.currentTop = g;
                var m = l.stickyWrapper.parent();
                l.stickyElement.offset().top + l.stickyElement.outerHeight() >= m.offset().top + m.outerHeight() && l.stickyElement.offset().top <= l.topSpacing ? l.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : l.stickyElement.css("position", "fixed").css("top", g).css("bottom", "").css("z-index", l.zIndex)
            }
        }
    }
      , resizer = function() {
        c = r.height();
        for (var e = 0, i = o.length; e < i; e++) {
            var n = o[e]
              , s = null;
            n.getWidthFrom ? n.responsiveWidth && (s = t(n.getWidthFrom).width()) : n.widthFromWrapper && (s = n.stickyWrapper.width()),
            null != s && n.stickyElement.css("width", s)
        }
    }
      , a = {
        init: function(e) {
            return this.each((function() {
                var i = t.extend({}, n, e)
                  , r = t(this)
                  , s = r.attr("id")
                  , c = s ? s + "-" + n.wrapperClassName : n.wrapperClassName
                  , p = t("<div></div>").attr("id", c).addClass(i.wrapperClassName);
                r.wrapAll((function() {
                    if (0 == t(this).parent("#" + c).length)
                        return p
                }
                ));
                var d = r.parent();
                i.center && d.css({
                    width: r.outerWidth(),
                    marginLeft: "auto",
                    marginRight: "auto"
                }),
                "right" === r.css("float") && r.css({
                    float: "none"
                }).parent().css({
                    float: "right"
                }),
                i.stickyElement = r,
                i.stickyWrapper = d,
                i.currentTop = null,
                o.push(i),
                a.setWrapperHeight(this),
                a.setupChangeListeners(this)
            }
            ))
        },
        setWrapperHeight: function(e) {
            var i = t(e)
              , n = i.parent();
            n && n.css("height", i.outerHeight())
        },
        setupChangeListeners: function(t) {
            window.MutationObserver ? new window.MutationObserver((function(e) {
                (e[0].addedNodes.length || e[0].removedNodes.length) && a.setWrapperHeight(t)
            }
            )).observe(t, {
                subtree: !0,
                childList: !0
            }) : window.addEventListener ? (t.addEventListener("DOMNodeInserted", (function() {
                a.setWrapperHeight(t)
            }
            ), !1),
            t.addEventListener("DOMNodeRemoved", (function() {
                a.setWrapperHeight(t)
            }
            ), !1)) : window.attachEvent && (t.attachEvent("onDOMNodeInserted", (function() {
                a.setWrapperHeight(t)
            }
            )),
            t.attachEvent("onDOMNodeRemoved", (function() {
                a.setWrapperHeight(t)
            }
            )))
        },
        update: scroller,
        unstick: function(e) {
            return this.each((function() {
                for (var e = t(this), n = -1, r = o.length; r-- > 0; )
                    o[r].stickyElement.get(0) === this && (i.call(o, r, 1),
                    n = r);
                -1 !== n && (e.unwrap(),
                e.css({
                    width: "",
                    position: "",
                    top: "",
                    float: "",
                    "z-index": ""
                }))
            }
            ))
        }
    };
    window.addEventListener ? (window.addEventListener("scroll", scroller, !1),
    window.addEventListener("resize", resizer, !1)) : window.attachEvent && (window.attachEvent("onscroll", scroller),
    window.attachEvent("onresize", resizer)),
    t.fn.sticky = function(i) {
        return a[i] ? a[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : a.init.apply(this, arguments)
    }
    ,
    t.fn.unstick = function(i) {
        return a[i] ? a[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : a.unstick.apply(this, arguments)
    }
    ,
    t((function() {
        setTimeout(scroller, 0)
    }
    ))
}
));
!function(e, t) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], t);
    else if ("undefined" != typeof exports)
        t(module, exports);
    else {
        var n = {
            exports: {}
        };
        t(n, n.exports),
        e.WOW = n.exports
    }
}(this, (function(e, t) {
    "use strict";
    var n, i;
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }();
    function isIn(e, t) {
        return t.indexOf(e) >= 0
    }
    function extend(e, t) {
        for (var n in t)
            if (null == e[n]) {
                var i = t[n];
                e[n] = i
            }
        return e
    }
    function createEvent(e) {
        var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1]
          , n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2]
          , i = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
          , o = void 0;
        return null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = e : o.eventName = e,
        o
    }
    function addEvent(e, t, n) {
        null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
    }
    function removeEvent(e, t, n) {
        null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
    }
    var s = window.WeakMap || window.MozWeakMap || function() {
        function WeakMap() {
            _classCallCheck(this, WeakMap),
            this.keys = [],
            this.values = []
        }
        return o(WeakMap, [{
            key: "get",
            value: function get(e) {
                for (var t = 0; t < this.keys.length; t++) {
                    if (this.keys[t] === e)
                        return this.values[t]
                }
            }
        }, {
            key: "set",
            value: function set(e, t) {
                for (var n = 0; n < this.keys.length; n++) {
                    if (this.keys[n] === e)
                        return this.values[n] = t,
                        this
                }
                return this.keys.push(e),
                this.values.push(t),
                this
            }
        }]),
        WeakMap
    }()
      , a = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (i = n = function() {
        function MutationObserver() {
            _classCallCheck(this, MutationObserver),
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return o(MutationObserver, [{
            key: "observe",
            value: function observe() {}
        }]),
        MutationObserver
    }(),
    n.notSupported = !0,
    i)
      , r = window.getComputedStyle || function getComputedStyle(e) {
        var t = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function getPropertyValue(n) {
                "float" === n && (n = "styleFloat"),
                t.test(n) && n.replace(t, (function(e, t) {
                    return t.toUpperCase()
                }
                ));
                var i = e.currentStyle;
                return (null != i ? i[n] : void 0) || null
            }
        }
    }
      , l = function() {
        function WOW() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            _classCallCheck(this, WOW),
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            },
            this.animate = function animateFactory() {
                return "requestAnimationFrame"in window ? function(e) {
                    return window.requestAnimationFrame(e)
                }
                : function(e) {
                    return e()
                }
            }(),
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = extend(e, this.defaults),
            null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)),
            this.animationNameCache = new s,
            this.wowEvent = createEvent(this.config.boxClass)
        }
        return o(WOW, [{
            key: "init",
            value: function init() {
                this.element = window.document.documentElement,
                isIn(document.readyState, ["interactive", "complete"]) ? this.start() : addEvent(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
        }, {
            key: "start",
            value: function start() {
                var e = this;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (var t = 0; t < this.boxes.length; t++) {
                            var n = this.boxes[t];
                            this.applyStyle(n, !0)
                        }
                (this.disabled() || (addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                addEvent(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) && new a((function(t) {
                    for (var n = 0; n < t.length; n++)
                        for (var i = t[n], o = 0; o < i.addedNodes.length; o++) {
                            var s = i.addedNodes[o];
                            e.doSync(s)
                        }
                }
                )).observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }
        }, {
            key: "stop",
            value: function stop() {
                this.stopped = !0,
                removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                removeEvent(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function sync() {
                a.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function doSync(e) {
                if (null == e && (e = this.element),
                1 === e.nodeType)
                    for (var t = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass), n = 0; n < t.length; n++) {
                        var i = t[n];
                        isIn(i, this.all) || (this.boxes.push(i),
                        this.all.push(i),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(i, !0),
                        this.scrolled = !0)
                    }
            }
        }, {
            key: "show",
            value: function show(e) {
                return this.applyStyle(e),
                e.className = e.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(e),
                function emitEvent(e, t) {
                    null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) && e["on" + t]()
                }(e, this.wowEvent),
                this.config.resetAnimation && (addEvent(e, "animationend", this.resetAnimation),
                addEvent(e, "oanimationend", this.resetAnimation),
                addEvent(e, "webkitAnimationEnd", this.resetAnimation),
                addEvent(e, "MSAnimationEnd", this.resetAnimation)),
                e
            }
        }, {
            key: "applyStyle",
            value: function applyStyle(e, t) {
                var n = this
                  , i = e.getAttribute("data-wow-duration")
                  , o = e.getAttribute("data-wow-delay")
                  , s = e.getAttribute("data-wow-iteration");
                return this.animate((function() {
                    return n.customStyle(e, t, i, o, s)
                }
                ))
            }
        }, {
            key: "resetStyle",
            value: function resetStyle() {
                for (var e = 0; e < this.boxes.length; e++) {
                    this.boxes[e].style.visibility = "visible"
                }
            }
        }, {
            key: "resetAnimation",
            value: function resetAnimation(e) {
                if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                    var t = e.target || e.srcElement;
                    t.className = t.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function customStyle(e, t, n, i, o) {
                return t && this.cacheAnimationName(e),
                e.style.visibility = t ? "hidden" : "visible",
                n && this.vendorSet(e.style, {
                    animationDuration: n
                }),
                i && this.vendorSet(e.style, {
                    animationDelay: i
                }),
                o && this.vendorSet(e.style, {
                    animationIterationCount: o
                }),
                this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }),
                e
            }
        }, {
            key: "vendorSet",
            value: function vendorSet(e, t) {
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var i = t[n];
                        e["" + n] = i;
                        for (var o = 0; o < this.vendors.length; o++) {
                            e["" + this.vendors[o] + n.charAt(0).toUpperCase() + n.substr(1)] = i
                        }
                    }
            }
        }, {
            key: "vendorCSS",
            value: function vendorCSS(e, t) {
                for (var n = r(e), i = n.getPropertyCSSValue(t), o = 0; o < this.vendors.length; o++) {
                    var s = this.vendors[o];
                    i = i || n.getPropertyCSSValue("-" + s + "-" + t)
                }
                return i
            }
        }, {
            key: "animationName",
            value: function animationName(e) {
                var t = void 0;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (n) {
                    t = r(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }
        }, {
            key: "cacheAnimationName",
            value: function cacheAnimationName(e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }
        }, {
            key: "cachedAnimationName",
            value: function cachedAnimationName(e) {
                return this.animationNameCache.get(e)
            }
        }, {
            key: "scrollHandler",
            value: function scrollHandler() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function scrollCallback() {
                if (this.scrolled) {
                    this.scrolled = !1;
                    for (var e = [], t = 0; t < this.boxes.length; t++) {
                        var n = this.boxes[t];
                        if (n) {
                            if (this.isVisible(n)) {
                                this.show(n);
                                continue
                            }
                            e.push(n)
                        }
                    }
                    this.boxes = e,
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function offsetTop(e) {
                for (; void 0 === e.offsetTop; )
                    e = e.parentNode;
                for (var t = e.offsetTop; e.offsetParent; )
                    t += (e = e.offsetParent).offsetTop;
                return t
            }
        }, {
            key: "isVisible",
            value: function isVisible(e) {
                var t = e.getAttribute("data-wow-offset") || this.config.offset
                  , n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , i = n + Math.min(this.element.clientHeight, function getInnerHeight() {
                    return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
                }()) - t
                  , o = this.offsetTop(e)
                  , s = o + e.clientHeight;
                return o <= i && s >= n
            }
        }, {
            key: "disabled",
            value: function disabled() {
                return !this.config.mobile && function isMobile(e) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
                }(navigator.userAgent)
            }
        }]),
        WOW
    }();
    t.default = l,
    e.exports = t.default
}
));
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    var t, i, n, o = [], r = document, f = window, l = r.documentElement;
    function checkInView() {
        if (o.length) {
            var n = 0
              , a = e.map(o, (function(e) {
                var t = e.data.selector
                  , i = e.$element;
                return t ? i.find(t) : i
            }
            ));
            for (t = t || function getViewportSize() {
                var t, i, n = {
                    height: f.innerHeight,
                    width: f.innerWidth
                };
                return n.height || !(t = r.compatMode) && e.support.boxModel || (n = {
                    height: (i = "CSS1Compat" === t ? l : r.body).clientHeight,
                    width: i.clientWidth
                }),
                n
            }(),
            i = i || function getViewportOffset() {
                return {
                    top: f.pageYOffset || l.scrollTop || r.body.scrollTop,
                    left: f.pageXOffset || l.scrollLeft || r.body.scrollLeft
                }
            }(); n < o.length; n++)
                if (e.contains(l, a[n][0])) {
                    var h = e(a[n])
                      , c = {
                        height: h[0].offsetHeight,
                        width: h[0].offsetWidth
                    }
                      , d = h.offset()
                      , u = h.data("inview");
                    if (!i || !t)
                        return;
                    d.top + c.height > i.top && d.top < i.top + t.height && d.left + c.width > i.left && d.left < i.left + t.width ? u || h.data("inview", !0).trigger("inview", [!0]) : u && h.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    e.event.special.inview = {
        add: function(t) {
            o.push({
                data: t,
                $element: e(this),
                element: this
            }),
            !n && o.length && (n = setInterval(checkInView, 250))
        },
        remove: function(e) {
            for (var t = 0; t < o.length; t++) {
                var i = o[t];
                if (i.element === this && i.data.guid === e.guid) {
                    o.splice(t, 1);
                    break
                }
            }
            o.length || (clearInterval(n),
            n = null)
        }
    },
    e(f).bind("scroll resize scrollstop", (function() {
        t = i = null
    }
    )),
    !l.addEventListener && l.attachEvent && l.attachEvent("onfocusin", (function() {
        i = null
    }
    ))
}
));
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}((function(t) {
    var CountTo = function(e, o) {
        this.$element = t(e),
        this.options = t.extend({}, CountTo.DEFAULTS, this.dataOptions(), o),
        this.init()
    };
    CountTo.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function formatter(t, e) {
            return t.toFixed(e.decimals)
        },
        onUpdate: null,
        onComplete: null
    },
    CountTo.prototype.init = function() {
        this.value = this.options.from,
        this.loops = Math.ceil(this.options.speed / this.options.refreshInterval),
        this.loopCount = 0,
        this.increment = (this.options.to - this.options.from) / this.loops
    }
    ,
    CountTo.prototype.dataOptions = function() {
        var t = {
            from: this.$element.data("from"),
            to: this.$element.data("to"),
            speed: this.$element.data("speed"),
            refreshInterval: this.$element.data("refresh-interval"),
            decimals: this.$element.data("decimals")
        }
          , e = Object.keys(t);
        for (var o in e) {
            var i = e[o];
            void 0 === t[i] && delete t[i]
        }
        return t
    }
    ,
    CountTo.prototype.update = function() {
        this.value += this.increment,
        this.loopCount++,
        this.render(),
        "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value),
        this.loopCount >= this.loops && (clearInterval(this.interval),
        this.value = this.options.to,
        "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }
    ,
    CountTo.prototype.render = function() {
        var t = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(t)
    }
    ,
    CountTo.prototype.restart = function() {
        this.stop(),
        this.init(),
        this.start()
    }
    ,
    CountTo.prototype.start = function() {
        this.stop(),
        this.render(),
        this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }
    ,
    CountTo.prototype.stop = function() {
        this.interval && clearInterval(this.interval)
    }
    ,
    CountTo.prototype.toggle = function() {
        this.interval ? this.stop() : this.start()
    }
    ,
    t.fn.countTo = function(e) {
        return this.each((function() {
            var o = t(this)
              , i = o.data("countTo")
              , n = "object" == typeof e ? e : {}
              , s = "string" == typeof e ? e : "start";
            (!i || "object" == typeof e) && (i && i.stop(),
            o.data("countTo", i = new CountTo(this,n))),
            i[s].call(i)
        }
        ))
    }
}
));
/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.6
 **/
!function(e, t) {
    "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
}(this, (function(e) {
    var CanvasRenderer = function(e, t) {
        var a, n = document.createElement("canvas");
        e.appendChild(n),
        "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
        var i = n.getContext("2d");
        n.width = n.height = t.size;
        var r = 1;
        window.devicePixelRatio > 1 && (r = window.devicePixelRatio,
        n.style.width = n.style.height = [t.size, "px"].join(""),
        n.width = n.height = t.size * r,
        i.scale(r, r)),
        i.translate(t.size / 2, t.size / 2),
        i.rotate((t.rotate / 180 - .5) * Math.PI);
        var o = (t.size - t.lineWidth) / 2;
        t.scaleColor && t.scaleLength && (o -= t.scaleLength + 2),
        Date.now = Date.now || function() {
            return +new Date
        }
        ;
        var drawCircle = function(e, t, a) {
            var n = (a = Math.min(Math.max(-1, a || 0), 1)) <= 0;
            i.beginPath(),
            i.arc(0, 0, o, 0, 2 * Math.PI * a, n),
            i.strokeStyle = e,
            i.lineWidth = t,
            i.stroke()
        }
          , s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            window.setTimeout(e, 1e3 / 60)
        }
          , drawBackground = function() {
            t.scaleColor && function() {
                var e, a;
                i.lineWidth = 1,
                i.fillStyle = t.scaleColor,
                i.save();
                for (var n = 24; n > 0; --n)
                    n % 6 == 0 ? (a = t.scaleLength,
                    e = 0) : (a = .6 * t.scaleLength,
                    e = t.scaleLength - a),
                    i.fillRect(-t.size / 2 + e, 0, a, 1),
                    i.rotate(Math.PI / 12);
                i.restore()
            }(),
            t.trackColor && drawCircle(t.trackColor, t.trackWidth || t.lineWidth, 1)
        };
        this.getCanvas = function() {
            return n
        }
        ,
        this.getCtx = function() {
            return i
        }
        ,
        this.clear = function() {
            i.clearRect(t.size / -2, t.size / -2, t.size, t.size)
        }
        ,
        this.draw = function(e) {
            var n;
            t.scaleColor || t.trackColor ? i.getImageData && i.putImageData ? a ? i.putImageData(a, 0, 0) : (drawBackground(),
            a = i.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(),
            drawBackground()) : this.clear(),
            i.lineCap = t.lineCap,
            n = "function" == typeof t.barColor ? t.barColor(e) : t.barColor,
            drawCircle(n, t.lineWidth, e / 100)
        }
        .bind(this),
        this.animate = function(e, a) {
            var n = Date.now();
            t.onStart(e, a);
            var i = function() {
                var r = Math.min(Date.now() - n, t.animate.duration)
                  , o = t.easing(this, r, e, a - e, t.animate.duration);
                this.draw(o),
                t.onStep(e, a, o),
                r >= t.animate.duration ? t.onStop(e, a) : s(i)
            }
            .bind(this);
            s(i)
        }
        .bind(this)
    }
      , EasyPieChart = function(e, t) {
        var a = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            trackWidth: void 0,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1e3,
                enabled: !0
            },
            easing: function(e, t, a, n, i) {
                return (t /= i / 2) < 1 ? n / 2 * t * t + a : -n / 2 * (--t * (t - 2) - 1) + a
            },
            onStart: function(e, t) {},
            onStep: function(e, t, a) {},
            onStop: function(e, t) {}
        };
        a.renderer = CanvasRenderer;
        var n = {}
          , i = 0
          , r = function() {
            for (var r in this.el = e,
            this.options = n,
            a)
                a.hasOwnProperty(r) && (n[r] = t && void 0 !== t[r] ? t[r] : a[r],
                "function" == typeof n[r] && (n[r] = n[r].bind(this)));
            "string" == typeof n.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[n.easing]) ? n.easing = jQuery.easing[n.easing] : n.easing = a.easing,
            "number" == typeof n.animate && (n.animate = {
                duration: n.animate,
                enabled: !0
            }),
            "boolean" != typeof n.animate || n.animate || (n.animate = {
                duration: 1e3,
                enabled: n.animate
            }),
            this.renderer = new n.renderer(e,n),
            this.renderer.draw(i),
            e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
        }
        .bind(this);
        this.update = function(e) {
            return e = parseFloat(e),
            n.animate.enabled ? this.renderer.animate(i, e) : this.renderer.draw(e),
            i = e,
            this
        }
        .bind(this),
        this.disableAnimation = function() {
            return n.animate.enabled = !1,
            this
        }
        ,
        this.enableAnimation = function() {
            return n.animate.enabled = !0,
            this
        }
        ,
        r()
    };
    e.fn.easyPieChart = function(t) {
        return this.each((function() {
            var a;
            e.data(this, "easyPieChart") || (a = e.extend({}, t, e(this).data()),
            e.data(this, "easyPieChart", new EasyPieChart(this,a)))
        }
        ))
    }
}
));
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Shuffle = e()
}(this, (function() {
    "use strict";
    function _classCallCheck(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function _defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    function _createClass(t, e, i) {
        return e && _defineProperties(t.prototype, e),
        i && _defineProperties(t, i),
        t
    }
    function _getPrototypeOf(t) {
        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        _getPrototypeOf(t)
    }
    function _setPrototypeOf(t, e) {
        return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        _setPrototypeOf(t, e)
    }
    function _possibleConstructorReturn(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function _assertThisInitialized(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function _createSuper(t) {
        var e = function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function _createSuperInternal() {
            var i, n = _getPrototypeOf(t);
            if (e) {
                var s = _getPrototypeOf(this).constructor;
                i = Reflect.construct(n, arguments, s)
            } else
                i = n.apply(this, arguments);
            return _possibleConstructorReturn(this, i)
        }
    }
    var t = {
        exports: {}
    };
    function E() {}
    E.prototype = {
        on: function(t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({
                fn: e,
                ctx: i
            }),
            this
        },
        once: function(t, e, i) {
            var n = this;
            function listener() {
                n.off(t, listener),
                e.apply(i, arguments)
            }
            return listener._ = e,
            this.on(t, listener, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++)
                i[n].fn.apply(i[n].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {})
              , n = i[t]
              , s = [];
            if (n && e)
                for (var o = 0, r = n.length; o < r; o++)
                    n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
            return s.length ? i[t] = s : delete i[t],
            this
        }
    },
    t.exports = E,
    t.exports.TinyEmitter = E;
    var e = t.exports
      , i = "undefined" != typeof Element ? Element.prototype : {}
      , n = i.matches || i.matchesSelector || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector
      , s = function match(t, e) {
        if (!t || 1 !== t.nodeType)
            return !1;
        if (n)
            return n.call(t, e);
        for (var i = t.parentNode.querySelectorAll(e), s = 0; s < i.length; s++)
            if (i[s] == t)
                return !0;
        return !1
    };
    var o = function throttle(t, e) {
        var i, n, s, o, r = 0;
        return function throttled() {
            i = this,
            n = arguments;
            var t = new Date - r;
            return o || (t >= e ? call() : o = setTimeout(call, e - t)),
            s
        }
        ;
        function call() {
            o = 0,
            r = +new Date,
            s = t.apply(i, n),
            i = null,
            n = null
        }
    };
    function noop() {}
    function getNumber(t) {
        return parseFloat(t) || 0
    }
    var r = function() {
        function Point(t, e) {
            _classCallCheck(this, Point),
            this.x = getNumber(t),
            this.y = getNumber(e)
        }
        return _createClass(Point, null, [{
            key: "equals",
            value: function equals(t, e) {
                return t.x === e.x && t.y === e.y
            }
        }]),
        Point
    }()
      , l = function() {
        function Rect(t, e, i, n, s) {
            _classCallCheck(this, Rect),
            this.id = s,
            this.left = t,
            this.top = e,
            this.width = i,
            this.height = n
        }
        return _createClass(Rect, null, [{
            key: "intersects",
            value: function intersects(t, e) {
                return t.left < e.left + e.width && e.left < t.left + t.width && t.top < e.top + e.height && e.top < t.top + t.height
            }
        }]),
        Rect
    }()
      , a = {
        BASE: "shuffle",
        SHUFFLE_ITEM: "shuffle-item",
        VISIBLE: "shuffle-item--visible",
        HIDDEN: "shuffle-item--hidden"
    }
      , u = 0
      , h = function() {
        function ShuffleItem(t, e) {
            _classCallCheck(this, ShuffleItem),
            u += 1,
            this.id = u,
            this.element = t,
            this.isRTL = e,
            this.isVisible = !0,
            this.isHidden = !1
        }
        return _createClass(ShuffleItem, [{
            key: "show",
            value: function show() {
                this.isVisible = !0,
                this.element.classList.remove(a.HIDDEN),
                this.element.classList.add(a.VISIBLE),
                this.element.removeAttribute("aria-hidden")
            }
        }, {
            key: "hide",
            value: function hide() {
                this.isVisible = !1,
                this.element.classList.remove(a.VISIBLE),
                this.element.classList.add(a.HIDDEN),
                this.element.setAttribute("aria-hidden", !0)
            }
        }, {
            key: "init",
            value: function init() {
                this.addClasses([a.SHUFFLE_ITEM, a.VISIBLE]),
                this.applyCss(ShuffleItem.Css.INITIAL),
                this.applyCss(this.isRTL ? ShuffleItem.Css.DIRECTION.rtl : ShuffleItem.Css.DIRECTION.ltr),
                this.scale = ShuffleItem.Scale.VISIBLE,
                this.point = new r
            }
        }, {
            key: "addClasses",
            value: function addClasses(t) {
                var e = this;
                t.forEach((function(t) {
                    e.element.classList.add(t)
                }
                ))
            }
        }, {
            key: "removeClasses",
            value: function removeClasses(t) {
                var e = this;
                t.forEach((function(t) {
                    e.element.classList.remove(t)
                }
                ))
            }
        }, {
            key: "applyCss",
            value: function applyCss(t) {
                var e = this;
                Object.keys(t).forEach((function(i) {
                    e.element.style[i] = t[i]
                }
                ))
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this.removeClasses([a.HIDDEN, a.VISIBLE, a.SHUFFLE_ITEM]),
                this.element.removeAttribute("style"),
                this.element = null
            }
        }]),
        ShuffleItem
    }();
    h.Css = {
        INITIAL: {
            position: "absolute",
            top: 0,
            visibility: "visible",
            willChange: "transform"
        },
        DIRECTION: {
            ltr: {
                left: 0
            },
            rtl: {
                right: 0
            }
        },
        VISIBLE: {
            before: {
                opacity: 1,
                visibility: "visible"
            },
            after: {
                transitionDelay: ""
            }
        },
        HIDDEN: {
            before: {
                opacity: 0
            },
            after: {
                visibility: "hidden",
                transitionDelay: ""
            }
        }
    },
    h.Scale = {
        VISIBLE: 1,
        HIDDEN: .001
    };
    var f = null
      , testComputedSize = function() {
        if (null !== f)
            return f;
        var t = document.body || document.documentElement
          , e = document.createElement("div");
        e.style.cssText = "width:10px;padding:2px;box-sizing:border-box;",
        t.appendChild(e);
        var i = window.getComputedStyle(e, null).width;
        return f = 10 === Math.round(getNumber(i)),
        t.removeChild(e),
        f
    };
    function getNumberStyle(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(t, null)
          , n = getNumber(i[e]);
        return testComputedSize() || "width" !== e ? testComputedSize() || "height" !== e || (n += getNumber(i.paddingTop) + getNumber(i.paddingBottom) + getNumber(i.borderTopWidth) + getNumber(i.borderBottomWidth)) : n += getNumber(i.paddingLeft) + getNumber(i.paddingRight) + getNumber(i.borderLeftWidth) + getNumber(i.borderRightWidth),
        n
    }
    var c = {
        reverse: !1,
        by: null,
        compare: null,
        randomize: !1,
        key: "element"
    };
    function sorter(t, e) {
        var i = Object.assign({}, c, e)
          , n = Array.from(t)
          , s = !1;
        return t.length ? i.randomize ? function randomize(t) {
            for (var e = t.length; e; ) {
                e -= 1;
                var i = Math.floor(Math.random() * (e + 1))
                  , n = t[i];
                t[i] = t[e],
                t[e] = n
            }
            return t
        }(t) : ("function" == typeof i.by ? t.sort((function(t, e) {
            if (s)
                return 0;
            var n = i.by(t[i.key])
              , o = i.by(e[i.key]);
            return void 0 === n && void 0 === o ? (s = !0,
            0) : n < o || "sortFirst" === n || "sortLast" === o ? -1 : n > o || "sortLast" === n || "sortFirst" === o ? 1 : 0
        }
        )) : "function" == typeof i.compare && t.sort(i.compare),
        s ? n : (i.reverse && t.reverse(),
        t)) : []
    }
    var d = {}
      , m = "transitionend"
      , p = 0;
    function cancelTransitionEnd(t) {
        return !!d[t] && (d[t].element.removeEventListener(m, d[t].listener),
        d[t] = null,
        !0)
    }
    function onTransitionEnd(t, e) {
        var i = function uniqueId() {
            return m + (p += 1)
        }()
          , n = function listener(t) {
            t.currentTarget === t.target && (cancelTransitionEnd(i),
            e(t))
        };
        return t.addEventListener(m, n),
        d[i] = {
            element: t,
            listener: n
        },
        i
    }
    function arrayMax(t) {
        return Math.max.apply(Math, t)
    }
    function getColumnSpan(t, e, i, n) {
        var s = t / e;
        return Math.abs(Math.round(s) - s) < n && (s = Math.round(s)),
        Math.min(Math.ceil(s), i)
    }
    function getAvailablePositions(t, e, i) {
        if (1 === e)
            return t;
        for (var n = [], s = 0; s <= i - e; s++)
            n.push(arrayMax(t.slice(s, s + e)));
        return n
    }
    function getShortColumn(t, e) {
        for (var i = function arrayMin(t) {
            return Math.min.apply(Math, t)
        }(t), n = 0, s = t.length; n < s; n++)
            if (t[n] >= i - e && t[n] <= i + e)
                return n;
        return 0
    }
    function getCenteredPositions(t, e) {
        var i = {};
        t.forEach((function(t) {
            i[t.top] ? i[t.top].push(t) : i[t.top] = [t]
        }
        ));
        var n = []
          , s = []
          , o = [];
        return Object.keys(i).forEach((function(t) {
            var r = i[t];
            s.push(r);
            var a, u = r[r.length - 1], h = u.left + u.width, f = Math.round((e - h) / 2), c = r, d = !1;
            if (f > 0) {
                var m = [];
                (d = r.every((function(t) {
                    var e = new l(t.left + f,t.top,t.width,t.height,t.id)
                      , i = !n.some((function(t) {
                        return l.intersects(e, t)
                    }
                    ));
                    return m.push(e),
                    i
                }
                ))) && (c = m)
            }
            if (!d && r.some((function(t) {
                return n.some((function(e) {
                    var i = l.intersects(t, e);
                    return i && (a = e),
                    i
                }
                ))
            }
            ))) {
                var p = o.findIndex((function(t) {
                    return t.includes(a)
                }
                ));
                o.splice(p, 1, s[p])
            }
            n = n.concat(c),
            o.push(c)
        }
        )),
        [].concat.apply([], o).sort((function(t, e) {
            return t.id - e.id
        }
        )).map((function(t) {
            return new r(t.left,t.top)
        }
        ))
    }
    function arrayUnique(t) {
        return Array.from(new Set(t))
    }
    var y = 0
      , g = function(t) {
        !function _inherits(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && _setPrototypeOf(t, e)
        }(Shuffle, t);
        var e = _createSuper(Shuffle);
        function Shuffle(t) {
            var i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this, Shuffle),
            (i = e.call(this)).options = Object.assign({}, Shuffle.options, n),
            i.options.delimeter && (i.options.delimiter = i.options.delimeter),
            i.lastSort = {},
            i.group = Shuffle.ALL_ITEMS,
            i.lastFilter = Shuffle.ALL_ITEMS,
            i.isEnabled = !0,
            i.isDestroyed = !1,
            i.isInitialized = !1,
            i._transitions = [],
            i.isTransitioning = !1,
            i._queue = [];
            var s = i._getElementOption(t);
            if (!s)
                throw new TypeError("Shuffle needs to be initialized with an element.");
            return i.element = s,
            i.id = "shuffle_" + y,
            y += 1,
            i._init(),
            i.isInitialized = !0,
            i
        }
        return _createClass(Shuffle, [{
            key: "_init",
            value: function _init() {
                if (this.items = this._getItems(),
                this.sortedItems = this.items,
                this.options.sizer = this._getElementOption(this.options.sizer),
                this.element.classList.add(Shuffle.Classes.BASE),
                this._initItems(this.items),
                this._onResize = this._getResizeFunction(),
                window.addEventListener("resize", this._onResize),
                "complete" !== document.readyState) {
                    var t = this.layout.bind(this);
                    window.addEventListener("load", (function onLoad() {
                        window.removeEventListener("load", onLoad),
                        t()
                    }
                    ))
                }
                var e = window.getComputedStyle(this.element, null)
                  , i = Shuffle.getSize(this.element).width;
                this._validateStyles(e),
                this._setColumns(i),
                this.filter(this.options.group, this.options.initialSort),
                this.element.offsetWidth,
                this.setItemTransitions(this.items),
                this.element.style.transition = "height ".concat(this.options.speed, "ms ").concat(this.options.easing)
            }
        }, {
            key: "_getResizeFunction",
            value: function _getResizeFunction() {
                var t = this._handleResize.bind(this);
                return this.options.throttle ? this.options.throttle(t, this.options.throttleTime) : t
            }
        }, {
            key: "_getElementOption",
            value: function _getElementOption(t) {
                return "string" == typeof t ? this.element.querySelector(t) : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
            }
        }, {
            key: "_validateStyles",
            value: function _validateStyles(t) {
                "static" === t.position && (this.element.style.position = "relative"),
                "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
            }
        }, {
            key: "_filter",
            value: function _filter() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastFilter
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items
                  , i = this._getFilteredSets(t, e);
                return this._toggleFilterClasses(i),
                this.lastFilter = t,
                "string" == typeof t && (this.group = t),
                i
            }
        }, {
            key: "_getFilteredSets",
            value: function _getFilteredSets(t, e) {
                var i = this
                  , n = []
                  , s = [];
                return t === Shuffle.ALL_ITEMS ? n = e : e.forEach((function(e) {
                    i._doesPassFilter(t, e.element) ? n.push(e) : s.push(e)
                }
                )),
                {
                    visible: n,
                    hidden: s
                }
            }
        }, {
            key: "_doesPassFilter",
            value: function _doesPassFilter(t, e) {
                if ("function" == typeof t)
                    return t.call(e, e, this);
                var i = e.getAttribute("data-" + Shuffle.FILTER_ATTRIBUTE_KEY)
                  , n = this.options.delimiter ? i.split(this.options.delimiter) : JSON.parse(i);
                function testCategory(t) {
                    return n.includes(t)
                }
                return Array.isArray(t) ? this.options.filterMode === Shuffle.FilterMode.ANY ? t.some(testCategory) : t.every(testCategory) : n.includes(t)
            }
        }, {
            key: "_toggleFilterClasses",
            value: function _toggleFilterClasses(t) {
                var e = t.visible
                  , i = t.hidden;
                e.forEach((function(t) {
                    t.show()
                }
                )),
                i.forEach((function(t) {
                    t.hide()
                }
                ))
            }
        }, {
            key: "_initItems",
            value: function _initItems(t) {
                t.forEach((function(t) {
                    t.init()
                }
                ))
            }
        }, {
            key: "_disposeItems",
            value: function _disposeItems(t) {
                t.forEach((function(t) {
                    t.dispose()
                }
                ))
            }
        }, {
            key: "_updateItemCount",
            value: function _updateItemCount() {
                this.visibleItems = this._getFilteredItems().length
            }
        }, {
            key: "setItemTransitions",
            value: function setItemTransitions(t) {
                var e = this.options
                  , i = e.speed
                  , n = e.easing
                  , s = this.options.useTransforms ? ["transform"] : ["top", "left"]
                  , o = Object.keys(h.Css.HIDDEN.before).map((function(t) {
                    return function hyphenate(t) {
                        return t.replace(/([A-Z])/g, (function(t, e) {
                            return "-".concat(e.toLowerCase())
                        }
                        ))
                    }(t)
                }
                ))
                  , r = s.concat(o).join();
                t.forEach((function(t) {
                    t.element.style.transitionDuration = i + "ms",
                    t.element.style.transitionTimingFunction = n,
                    t.element.style.transitionProperty = r
                }
                ))
            }
        }, {
            key: "_getItems",
            value: function _getItems() {
                var t = this;
                return Array.from(this.element.children).filter((function(e) {
                    return s(e, t.options.itemSelector)
                }
                )).map((function(e) {
                    return new h(e,t.options.isRTL)
                }
                ))
            }
        }, {
            key: "_mergeNewItems",
            value: function _mergeNewItems(t) {
                var e = Array.from(this.element.children);
                return sorter(this.items.concat(t), {
                    by: function by(t) {
                        return e.indexOf(t)
                    }
                })
            }
        }, {
            key: "_getFilteredItems",
            value: function _getFilteredItems() {
                return this.items.filter((function(t) {
                    return t.isVisible
                }
                ))
            }
        }, {
            key: "_getConcealedItems",
            value: function _getConcealedItems() {
                return this.items.filter((function(t) {
                    return !t.isVisible
                }
                ))
            }
        }, {
            key: "_getColumnSize",
            value: function _getColumnSize(t, e) {
                var i;
                return 0 === (i = "function" == typeof this.options.columnWidth ? this.options.columnWidth(t) : this.options.sizer ? Shuffle.getSize(this.options.sizer).width : this.options.columnWidth ? this.options.columnWidth : this.items.length > 0 ? Shuffle.getSize(this.items[0].element, !0).width : t) && (i = t),
                i + e
            }
        }, {
            key: "_getGutterSize",
            value: function _getGutterSize(t) {
                return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(t) : this.options.sizer ? getNumberStyle(this.options.sizer, "marginLeft") : this.options.gutterWidth
            }
        }, {
            key: "_setColumns",
            value: function _setColumns() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Shuffle.getSize(this.element).width
                  , e = this._getGutterSize(t)
                  , i = this._getColumnSize(t, e)
                  , n = (t + e) / i;
                Math.abs(Math.round(n) - n) < this.options.columnThreshold && (n = Math.round(n)),
                this.cols = Math.max(Math.floor(n || 0), 1),
                this.containerWidth = t,
                this.colWidth = i
            }
        }, {
            key: "_setContainerSize",
            value: function _setContainerSize() {
                this.element.style.height = this._getContainerSize() + "px"
            }
        }, {
            key: "_getContainerSize",
            value: function _getContainerSize() {
                return arrayMax(this.positions)
            }
        }, {
            key: "_getStaggerAmount",
            value: function _getStaggerAmount(t) {
                return Math.min(t * this.options.staggerAmount, this.options.staggerAmountMax)
            }
        }, {
            key: "_dispatch",
            value: function _dispatch(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.isDestroyed || (e.shuffle = this,
                this.emit(t, e))
            }
        }, {
            key: "_resetCols",
            value: function _resetCols() {
                var t = this.cols;
                for (this.positions = []; t; )
                    t -= 1,
                    this.positions.push(0)
            }
        }, {
            key: "_layout",
            value: function _layout(t) {
                var e = this
                  , i = this._getNextPositions(t)
                  , n = 0;
                t.forEach((function(t, s) {
                    function callback() {
                        t.applyCss(h.Css.VISIBLE.after)
                    }
                    if (r.equals(t.point, i[s]) && !t.isHidden)
                        return t.applyCss(h.Css.VISIBLE.before),
                        void callback();
                    t.point = i[s],
                    t.scale = h.Scale.VISIBLE,
                    t.isHidden = !1;
                    var o = e.getStylesForTransition(t, h.Css.VISIBLE.before);
                    o.transitionDelay = e._getStaggerAmount(n) + "ms",
                    e._queue.push({
                        item: t,
                        styles: o,
                        callback: callback
                    }),
                    n += 1
                }
                ))
            }
        }, {
            key: "_getNextPositions",
            value: function _getNextPositions(t) {
                var e = this;
                if (this.options.isCentered) {
                    var i = t.map((function(t, i) {
                        var n = Shuffle.getSize(t.element, !0)
                          , s = e._getItemPosition(n);
                        return new l(s.x,s.y,n.width,n.height,i)
                    }
                    ));
                    return this.getTransformedPositions(i, this.containerWidth)
                }
                return t.map((function(t) {
                    return e._getItemPosition(Shuffle.getSize(t.element, !0))
                }
                ))
            }
        }, {
            key: "_getItemPosition",
            value: function _getItemPosition(t) {
                return function getItemPosition(t) {
                    for (var e = t.itemSize, i = t.positions, n = t.gridSize, s = t.total, o = t.threshold, l = t.buffer, a = getColumnSpan(e.width, n, s, o), u = getAvailablePositions(i, a, s), h = getShortColumn(u, l), f = new r(n * h,u[h]), c = u[h] + e.height, d = 0; d < a; d++)
                        i[h + d] = c;
                    return f
                }({
                    itemSize: t,
                    positions: this.positions,
                    gridSize: this.colWidth,
                    total: this.cols,
                    threshold: this.options.columnThreshold,
                    buffer: this.options.buffer
                })
            }
        }, {
            key: "getTransformedPositions",
            value: function getTransformedPositions(t, e) {
                return getCenteredPositions(t, e)
            }
        }, {
            key: "_shrink",
            value: function _shrink() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems()
                  , i = 0;
                e.forEach((function(e) {
                    function callback() {
                        e.applyCss(h.Css.HIDDEN.after)
                    }
                    if (e.isHidden)
                        return e.applyCss(h.Css.HIDDEN.before),
                        void callback();
                    e.scale = h.Scale.HIDDEN,
                    e.isHidden = !0;
                    var n = t.getStylesForTransition(e, h.Css.HIDDEN.before);
                    n.transitionDelay = t._getStaggerAmount(i) + "ms",
                    t._queue.push({
                        item: e,
                        styles: n,
                        callback: callback
                    }),
                    i += 1
                }
                ))
            }
        }, {
            key: "_handleResize",
            value: function _handleResize() {
                this.isEnabled && !this.isDestroyed && this.update()
            }
        }, {
            key: "getStylesForTransition",
            value: function getStylesForTransition(t, e) {
                var i = Object.assign({}, e);
                if (this.options.useTransforms) {
                    var n = this.options.isRTL ? "-" : ""
                      , s = this.options.roundTransforms ? Math.round(t.point.x) : t.point.x
                      , o = this.options.roundTransforms ? Math.round(t.point.y) : t.point.y;
                    i.transform = "translate(".concat(n).concat(s, "px, ").concat(o, "px) scale(").concat(t.scale, ")")
                } else
                    this.options.isRTL ? i.right = t.point.x + "px" : i.left = t.point.x + "px",
                    i.top = t.point.y + "px";
                return i
            }
        }, {
            key: "_whenTransitionDone",
            value: function _whenTransitionDone(t, e, i) {
                var n = onTransitionEnd(t, (function(t) {
                    e(),
                    i(null, t)
                }
                ));
                this._transitions.push(n)
            }
        }, {
            key: "_getTransitionFunction",
            value: function _getTransitionFunction(t) {
                var e = this;
                return function(i) {
                    t.item.applyCss(t.styles),
                    e._whenTransitionDone(t.item.element, t.callback, i)
                }
            }
        }, {
            key: "_processQueue",
            value: function _processQueue() {
                this.isTransitioning && this._cancelMovement();
                var t = this.options.speed > 0
                  , e = this._queue.length > 0;
                e && t && this.isInitialized ? this._startTransitions(this._queue) : e ? (this._styleImmediately(this._queue),
                this._dispatch(Shuffle.EventType.LAYOUT)) : this._dispatch(Shuffle.EventType.LAYOUT),
                this._queue.length = 0
            }
        }, {
            key: "_startTransitions",
            value: function _startTransitions(t) {
                var e = this;
                this.isTransitioning = !0,
                function parallel(t, e, i) {
                    i || ("function" == typeof e ? (i = e,
                    e = null) : i = noop);
                    var n = t && t.length;
                    if (!n)
                        return i(null, []);
                    var s = !1
                      , o = new Array(n);
                    function maybeDone(t) {
                        return function(e, r) {
                            if (!s) {
                                if (e)
                                    return i(e, o),
                                    void (s = !0);
                                o[t] = r,
                                --n || i(null, o)
                            }
                        }
                    }
                    t.forEach(e ? function(t, i) {
                        t.call(e, maybeDone(i))
                    }
                    : function(t, e) {
                        t(maybeDone(e))
                    }
                    )
                }(t.map((function(t) {
                    return e._getTransitionFunction(t)
                }
                )), this._movementFinished.bind(this))
            }
        }, {
            key: "_cancelMovement",
            value: function _cancelMovement() {
                this._transitions.forEach(cancelTransitionEnd),
                this._transitions.length = 0,
                this.isTransitioning = !1
            }
        }, {
            key: "_styleImmediately",
            value: function _styleImmediately(t) {
                if (t.length) {
                    var e = t.map((function(t) {
                        return t.item.element
                    }
                    ));
                    Shuffle._skipTransitions(e, (function() {
                        t.forEach((function(t) {
                            t.item.applyCss(t.styles),
                            t.callback()
                        }
                        ))
                    }
                    ))
                }
            }
        }, {
            key: "_movementFinished",
            value: function _movementFinished() {
                this._transitions.length = 0,
                this.isTransitioning = !1,
                this._dispatch(Shuffle.EventType.LAYOUT)
            }
        }, {
            key: "filter",
            value: function filter(t, e) {
                this.isEnabled && ((!t || t && 0 === t.length) && (t = Shuffle.ALL_ITEMS),
                this._filter(t),
                this._shrink(),
                this._updateItemCount(),
                this.sort(e))
            }
        }, {
            key: "sort",
            value: function sort() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastSort;
                if (this.isEnabled) {
                    this._resetCols();
                    var e = sorter(this._getFilteredItems(), t);
                    this.sortedItems = e,
                    this._layout(e),
                    this._processQueue(),
                    this._setContainerSize(),
                    this.lastSort = t
                }
            }
        }, {
            key: "update",
            value: function update() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.isEnabled && (t || this._setColumns(),
                this.sort())
            }
        }, {
            key: "layout",
            value: function layout() {
                this.update(!0)
            }
        }, {
            key: "add",
            value: function add(t) {
                var e = this
                  , i = arrayUnique(t).map((function(t) {
                    return new h(t,e.options.isRTL)
                }
                ));
                this._initItems(i),
                this._resetCols();
                var n = sorter(this._mergeNewItems(i), this.lastSort)
                  , s = this._filter(this.lastFilter, n)
                  , o = function isNewItem(t) {
                    return i.includes(t)
                }
                  , r = function applyHiddenState(t) {
                    t.scale = h.Scale.HIDDEN,
                    t.isHidden = !0,
                    t.applyCss(h.Css.HIDDEN.before),
                    t.applyCss(h.Css.HIDDEN.after)
                }
                  , l = this._getNextPositions(s.visible);
                s.visible.forEach((function(t, i) {
                    o(t) && (t.point = l[i],
                    r(t),
                    t.applyCss(e.getStylesForTransition(t, {})))
                }
                )),
                s.hidden.forEach((function(t) {
                    o(t) && r(t)
                }
                )),
                this.element.offsetWidth,
                this.setItemTransitions(i),
                this.items = this._mergeNewItems(i),
                this.filter(this.lastFilter)
            }
        }, {
            key: "disable",
            value: function disable() {
                this.isEnabled = !1
            }
        }, {
            key: "enable",
            value: function enable() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.isEnabled = !0,
                t && this.update()
            }
        }, {
            key: "remove",
            value: function remove(t) {
                var e = this;
                if (t.length) {
                    var i = arrayUnique(t)
                      , n = i.map((function(t) {
                        return e.getItemByElement(t)
                    }
                    )).filter((function(t) {
                        return !!t
                    }
                    ));
                    this._toggleFilterClasses({
                        visible: [],
                        hidden: n
                    }),
                    this._shrink(n),
                    this.sort(),
                    this.items = this.items.filter((function(t) {
                        return !n.includes(t)
                    }
                    )),
                    this._updateItemCount(),
                    this.once(Shuffle.EventType.LAYOUT, (function handleLayout() {
                        e._disposeItems(n),
                        i.forEach((function(t) {
                            t.parentNode.removeChild(t)
                        }
                        )),
                        e._dispatch(Shuffle.EventType.REMOVED, {
                            collection: i
                        })
                    }
                    ))
                }
            }
        }, {
            key: "getItemByElement",
            value: function getItemByElement(t) {
                return this.items.find((function(e) {
                    return e.element === t
                }
                ))
            }
        }, {
            key: "resetItems",
            value: function resetItems() {
                var t = this;
                this._disposeItems(this.items),
                this.isInitialized = !1,
                this.items = this._getItems(),
                this._initItems(this.items),
                this.once(Shuffle.EventType.LAYOUT, (function() {
                    t.setItemTransitions(t.items),
                    t.isInitialized = !0
                }
                )),
                this.filter(this.lastFilter)
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._cancelMovement(),
                window.removeEventListener("resize", this._onResize),
                this.element.classList.remove("shuffle"),
                this.element.removeAttribute("style"),
                this._disposeItems(this.items),
                this.items.length = 0,
                this._transitions.length = 0,
                this.options.sizer = null,
                this.element = null,
                this.isDestroyed = !0,
                this.isEnabled = !1
            }
        }], [{
            key: "getSize",
            value: function getSize(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = window.getComputedStyle(t, null)
                  , n = getNumberStyle(t, "width", i)
                  , s = getNumberStyle(t, "height", i);
                if (e) {
                    var o = getNumberStyle(t, "marginLeft", i)
                      , r = getNumberStyle(t, "marginRight", i)
                      , l = getNumberStyle(t, "marginTop", i)
                      , a = getNumberStyle(t, "marginBottom", i);
                    n += o + r,
                    s += l + a
                }
                return {
                    width: n,
                    height: s
                }
            }
        }, {
            key: "_skipTransitions",
            value: function _skipTransitions(t, e) {
                var i = t.map((function(t) {
                    var e = t.style
                      , i = e.transitionDuration
                      , n = e.transitionDelay;
                    return e.transitionDuration = "0ms",
                    e.transitionDelay = "0ms",
                    {
                        duration: i,
                        delay: n
                    }
                }
                ));
                e(),
                t[0].offsetWidth,
                t.forEach((function(t, e) {
                    t.style.transitionDuration = i[e].duration,
                    t.style.transitionDelay = i[e].delay
                }
                ))
            }
        }]),
        Shuffle
    }(e);
    return g.ShuffleItem = h,
    g.ALL_ITEMS = "all",
    g.FILTER_ATTRIBUTE_KEY = "groups",
    g.EventType = {
        LAYOUT: "shuffle:layout",
        REMOVED: "shuffle:removed"
    },
    g.Classes = a,
    g.FilterMode = {
        ANY: "any",
        ALL: "all"
    },
    g.options = {
        group: g.ALL_ITEMS,
        speed: 250,
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        itemSelector: "*",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimiter: null,
        buffer: 0,
        columnThreshold: .01,
        initialSort: null,
        throttle: o,
        throttleTime: 300,
        staggerAmount: 15,
        staggerAmountMax: 150,
        useTransforms: !0,
        filterMode: g.FilterMode.ANY,
        isCentered: !1,
        isRTL: !1,
        roundTransforms: !0
    },
    g.Point = r,
    g.Rect = l,
    g.__sorter = sorter,
    g.__getColumnSpan = getColumnSpan,
    g.__getAvailablePositions = getAvailablePositions,
    g.__getShortColumn = getShortColumn,
    g.__getCenteredPositions = getCenteredPositions,
    g
}
));
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
}((function(e) {
    var t, i, n, o, a, r, s = "Close", l = "BeforeClose", c = "MarkupParse", d = "Open", p = "Change", u = "mfp", f = ".mfp", m = "mfp-ready", g = "mfp-removing", v = "mfp-prevent-close", MagnificPopup = function() {}, h = !!window.jQuery, C = e(window), _mfpOn = function(e, i) {
        t.ev.on(u + e + f, i)
    }, _getEl = function(t, i, n, o) {
        var a = document.createElement("div");
        return a.className = "mfp-" + t,
        n && (a.innerHTML = n),
        o ? i && i.appendChild(a) : (a = e(a),
        i && a.appendTo(i)),
        a
    }, _mfpTrigger = function(i, n) {
        t.ev.triggerHandler(u + i, n),
        t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1),
        t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
    }, _getCloseBtn = function(i) {
        return i === r && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)),
        r = i),
        t.currTemplate.closeBtn
    }, _checkInstance = function() {
        e.magnificPopup.instance || ((t = new MagnificPopup).init(),
        e.magnificPopup.instance = t)
    };
    MagnificPopup.prototype = {
        constructor: MagnificPopup,
        init: function() {
            var i = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener,
            t.isAndroid = /android/gi.test(i),
            t.isIOS = /iphone|ipad|ipod/gi.test(i),
            t.supportsTransition = function() {
                var e = document.createElement("p").style
                  , t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition)
                    return !0;
                for (; t.length; )
                    if (t.pop() + "Transition"in e)
                        return !0;
                return !1
            }(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            n = e(document),
            t.popupsCache = {}
        },
        open: function(i) {
            var o;
            if (!1 === i.isObj) {
                t.items = i.items.toArray(),
                t.index = 0;
                var r, s = i.items;
                for (o = 0; o < s.length; o++)
                    if ((r = s[o]).parsed && (r = r.el[0]),
                    r === i.el[0]) {
                        t.index = o;
                        break
                    }
            } else
                t.items = e.isArray(i.items) ? i.items : [i.items],
                t.index = i.index || 0;
            if (!t.isOpen) {
                t.types = [],
                a = "",
                i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n,
                i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}),
                t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {},
                t.st = e.extend(!0, {}, e.magnificPopup.defaults, i),
                t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
                t.st.modal && (t.st.closeOnContentClick = !1,
                t.st.closeOnBgClick = !1,
                t.st.showCloseBtn = !1,
                t.st.enableEscapeKey = !1),
                t.bgOverlay || (t.bgOverlay = _getEl("bg").on("click.mfp", (function() {
                    t.close()
                }
                )),
                t.wrap = _getEl("wrap").attr("tabindex", -1).on("click.mfp", (function(e) {
                    t._checkIfClose(e.target) && t.close()
                }
                )),
                t.container = _getEl("container", t.wrap)),
                t.contentContainer = _getEl("content"),
                t.st.preloader && (t.preloader = _getEl("preloader", t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var p = l[o];
                    p = p.charAt(0).toUpperCase() + p.slice(1),
                    t["init" + p].call(t)
                }
                _mfpTrigger("BeforeOpen"),
                t.st.showCloseBtn && (t.st.closeBtnInside ? (_mfpOn(c, (function(e, t, i, n) {
                    i.close_replaceWith = _getCloseBtn(n.type)
                }
                )),
                a += " mfp-close-btn-in") : t.wrap.append(_getCloseBtn())),
                t.st.alignTop && (a += " mfp-align-top"),
                t.fixedContentPos ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                }) : t.wrap.css({
                    top: C.scrollTop(),
                    position: "absolute"
                }),
                (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }),
                t.st.enableEscapeKey && n.on("keyup.mfp", (function(e) {
                    27 === e.keyCode && t.close()
                }
                )),
                C.on("resize.mfp", (function() {
                    t.updateSize()
                }
                )),
                t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
                a && t.wrap.addClass(a);
                var u = t.wH = C.height()
                  , f = {};
                if (t.fixedContentPos && t._hasScrollBar(u)) {
                    var g = t._getScrollbarSize();
                    g && (f.marginRight = g)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                var v = t.st.mainClass;
                return t.isIE7 && (v += " mfp-ie7"),
                v && t._addClassToMFP(v),
                t.updateItemHTML(),
                _mfpTrigger("BuildControls"),
                e("html").css(f),
                t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
                t._lastFocusedEl = document.activeElement,
                setTimeout((function() {
                    t.content ? (t._addClassToMFP(m),
                    t._setFocus()) : t.bgOverlay.addClass(m),
                    n.on("focusin.mfp", t._onFocusIn)
                }
                ), 16),
                t.isOpen = !0,
                t.updateSize(u),
                _mfpTrigger(d),
                i
            }
            t.updateItemHTML()
        },
        close: function() {
            t.isOpen && (_mfpTrigger(l),
            t.isOpen = !1,
            t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g),
            setTimeout((function() {
                t._close()
            }
            ), t.st.removalDelay)) : t._close())
        },
        _close: function() {
            _mfpTrigger(s);
            var i = "mfp-removing mfp-ready ";
            if (t.bgOverlay.detach(),
            t.wrap.detach(),
            t.container.empty(),
            t.st.mainClass && (i += t.st.mainClass + " "),
            t._removeClassFromMFP(i),
            t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "",
                e("html").css(o)
            }
            n.off("keyup.mfp focusin.mfp"),
            t.ev.off(f),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
            t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
            t.currItem = null,
            t.content = null,
            t.currTemplate = null,
            t.prevHeight = 0,
            _mfpTrigger("AfterClose")
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth
                  , n = window.innerHeight * i;
                t.wrap.css("height", n),
                t.wH = n
            } else
                t.wH = e || C.height();
            t.fixedContentPos || t.wrap.css("height", t.wH),
            _mfpTrigger("Resize")
        },
        updateItemHTML: function() {
            var i = t.items[t.index];
            t.contentContainer.detach(),
            t.content && t.content.detach(),
            i.parsed || (i = t.parseEl(t.index));
            var n = i.type;
            if (_mfpTrigger("BeforeChange", [t.currItem ? t.currItem.type : "", n]),
            t.currItem = i,
            !t.currTemplate[n]) {
                var a = !!t.st[n] && t.st[n].markup;
                _mfpTrigger("FirstMarkupParse", a),
                t.currTemplate[n] = !a || e(a)
            }
            o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
            var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
            t.appendContent(r, n),
            i.preloaded = !0,
            _mfpTrigger(p, i),
            o = i.type,
            t.container.prepend(t.contentContainer),
            _mfpTrigger("AfterChange")
        },
        appendContent: function(e, i) {
            t.content = e,
            e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(_getCloseBtn()) : t.content = e : t.content = "",
            _mfpTrigger("BeforeAppend"),
            t.container.addClass("mfp-" + i + "-holder"),
            t.contentContainer.append(t.content)
        },
        parseEl: function(i) {
            var n, o = t.items[i];
            if (o.tagName ? o = {
                el: e(o)
            } : (n = o.type,
            o = {
                data: o,
                src: o.src
            }),
            o.el) {
                for (var a = t.types, r = 0; r < a.length; r++)
                    if (o.el.hasClass("mfp-" + a[r])) {
                        n = a[r];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"),
                o.src || (o.src = o.el.attr("href"))
            }
            return o.type = n || t.st.type || "inline",
            o.index = i,
            o.parsed = !0,
            t.items[i] = o,
            _mfpTrigger("ElementParse", o),
            t.items[i]
        },
        addGroup: function(e, i) {
            var eHandler = function(n) {
                n.mfpEl = this,
                t._openClick(n, e, i)
            };
            i || (i = {});
            var n = "click.magnificPopup";
            i.mainEl = e,
            i.items ? (i.isObj = !0,
            e.off(n).on(n, eHandler)) : (i.isObj = !1,
            i.delegate ? e.off(n).on(n, i.delegate, eHandler) : (i.items = e,
            e.off(n).on(n, eHandler)))
        },
        _openClick: function(i, n, o) {
            if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t))
                            return !0
                    } else if (C.width() < a)
                        return !0;
                i.type && (i.preventDefault(),
                t.isOpen && i.stopPropagation()),
                o.el = e(i.mfpEl),
                o.delegate && (o.items = n.find(o.delegate)),
                t.open(o)
            }
        },
        updateStatus: function(e, n) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i),
                n || "loading" !== e || (n = t.st.tLoading);
                var o = {
                    status: e,
                    text: n
                };
                _mfpTrigger("UpdateStatus", o),
                e = o.status,
                n = o.text,
                t.preloader.html(n),
                t.preloader.find("a").on("click", (function(e) {
                    e.stopImmediatePropagation()
                }
                )),
                t.container.addClass("mfp-s-" + e),
                i = e
            }
        },
        _checkIfClose: function(i) {
            if (!e(i).hasClass(v)) {
                var n = t.st.closeOnContentClick
                  , o = t.st.closeOnBgClick;
                if (n && o)
                    return !0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0])
                    return !0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (n)
                        return !0
                } else if (o && e.contains(document, i))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e),
            t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || C.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(i) {
            if (i.target !== t.wrap[0] && !e.contains(t.wrap[0], i.target))
                return t._setFocus(),
                !1
        },
        _parseMarkup: function(t, i, n) {
            var o;
            n.data && (i = e.extend(n.data, i)),
            _mfpTrigger(c, [t, i, n]),
            e.each(i, (function(i, n) {
                if (void 0 === n || !1 === n)
                    return !0;
                if ((o = i.split("_")).length > 1) {
                    var a = t.find(".mfp-" + o[0]);
                    if (a.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? a[0] !== n[0] && a.replaceWith(n) : "img" === r ? a.is("img") ? a.attr("src", n) : a.replaceWith(e("<img>").attr("src", n).attr("class", a.attr("class"))) : a.attr(o[1], n)
                    }
                } else
                    t.find(".mfp-" + i).html(n)
            }
            ))
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                t.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    },
    e.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
        open: function(t, i) {
            return _checkInstance(),
            (t = t ? e.extend(!0, {}, t) : {}).isObj = !0,
            t.index = i || 0,
            this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options),
            e.extend(this.proto, i.proto),
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    e.fn.magnificPopup = function(i) {
        _checkInstance();
        var n = e(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var o, a = h ? n.data("magnificPopup") : n[0].magnificPopup, r = parseInt(arguments[1], 10) || 0;
                a.items ? o = a.items[r] : (o = n,
                a.delegate && (o = o.find(a.delegate)),
                o = o.eq(r)),
                t._openClick({
                    mfpEl: o
                }, n, a)
            } else
                t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else
            i = e.extend(!0, {}, i),
            h ? n.data("magnificPopup", i) : n[0].magnificPopup = i,
            t.addGroup(n, i);
        return n
    }
    ;
    var y, w, b, I = "inline", _putInlineElementsBack = function() {
        b && (w.after(b.addClass(y)).detach(),
        b = null)
    };
    e.magnificPopup.registerModule(I, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(I),
                _mfpOn("Close.inline", (function() {
                    _putInlineElementsBack()
                }
                ))
            },
            getInline: function(i, n) {
                if (_putInlineElementsBack(),
                i.src) {
                    var o = t.st.inline
                      , a = e(i.src);
                    if (a.length) {
                        var r = a[0].parentNode;
                        r && r.tagName && (w || (y = o.hiddenClass,
                        w = _getEl(y),
                        y = "mfp-" + y),
                        b = a.after(w).detach().removeClass(y)),
                        t.updateStatus("ready")
                    } else
                        t.updateStatus("error", o.tNotFound),
                        a = e("<div>");
                    return i.inlineElement = a,
                    a
                }
                return t.updateStatus("ready"),
                t._parseMarkup(n, {}, i),
                n
            }
        }
    });
    var x, k = "ajax", _removeAjaxCursor = function() {
        x && e(document.body).removeClass(x)
    }, _destroyAjaxRequest = function() {
        _removeAjaxCursor(),
        t.req && t.req.abort()
    };
    e.magnificPopup.registerModule(k, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(k),
                x = t.st.ajax.cursor,
                _mfpOn("Close.ajax", _destroyAjaxRequest),
                _mfpOn("BeforeChange.ajax", _destroyAjaxRequest)
            },
            getAjax: function(i) {
                x && e(document.body).addClass(x),
                t.updateStatus("loading");
                var n = e.extend({
                    url: i.src,
                    success: function(n, o, a) {
                        var r = {
                            data: n,
                            xhr: a
                        };
                        _mfpTrigger("ParseAjax", r),
                        t.appendContent(e(r.data), k),
                        i.finished = !0,
                        _removeAjaxCursor(),
                        t._setFocus(),
                        setTimeout((function() {
                            t.wrap.addClass(m)
                        }
                        ), 16),
                        t.updateStatus("ready"),
                        _mfpTrigger("AjaxContentAdded")
                    },
                    error: function() {
                        _removeAjaxCursor(),
                        i.finished = i.loadError = !0,
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(n),
                ""
            }
        }
    });
    var T, _getTitle = function(i) {
        if (i.data && void 0 !== i.data.title)
            return i.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n))
                return n.call(t, i);
            if (i.el)
                return i.el.attr(n) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = t.st.image
                  , n = ".image";
                t.types.push("image"),
                _mfpOn("Open.image", (function() {
                    "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                }
                )),
                _mfpOn("Close.image", (function() {
                    i.cursor && e(document.body).removeClass(i.cursor),
                    C.off("resize.mfp")
                }
                )),
                _mfpOn("Resize" + n, t.resizeImage),
                t.isLowIE && _mfpOn("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", t.wH - i)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                T && clearInterval(T),
                e.isCheckingImgSize = !1,
                _mfpTrigger("ImageHasSize", e),
                e.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var i = 0
                  , n = e.img[0]
                  , mfpSetInterval = function(o) {
                    T && clearInterval(T),
                    T = setInterval((function() {
                        n.naturalWidth > 0 ? t._onImageHasSize(e) : (i > 200 && clearInterval(T),
                        3 === ++i ? mfpSetInterval(10) : 40 === i ? mfpSetInterval(50) : 100 === i && mfpSetInterval(500))
                    }
                    ), o)
                };
                mfpSetInterval(1)
            },
            getImage: function(i, n) {
                var o = 0
                  , onLoadComplete = function() {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"),
                    i === t.currItem && (t._onImageHasSize(i),
                    t.updateStatus("ready")),
                    i.hasSize = !0,
                    i.loaded = !0,
                    _mfpTrigger("ImageLoadComplete")) : ++o < 200 ? setTimeout(onLoadComplete, 100) : onLoadError())
                }
                  , onLoadError = function() {
                    i && (i.img.off(".mfploader"),
                    i === t.currItem && (t._onImageHasSize(i),
                    t.updateStatus("error", a.tError.replace("%url%", i.src))),
                    i.hasSize = !0,
                    i.loaded = !0,
                    i.loadError = !0)
                }
                  , a = t.st.image
                  , r = n.find(".mfp-img");
                if (r.length) {
                    var s = document.createElement("img");
                    s.className = "mfp-img",
                    i.el && i.el.find("img").length && (s.alt = i.el.find("img").attr("alt")),
                    i.img = e(s).on("load.mfploader", onLoadComplete).on("error.mfploader", onLoadError),
                    s.src = i.src,
                    r.is("img") && (i.img = i.img.clone()),
                    (s = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : s.width || (i.hasSize = !1)
                }
                return t._parseMarkup(n, {
                    title: _getTitle(i),
                    img_replaceWith: i.img
                }, i),
                t.resizeImage(),
                i.hasSize ? (T && clearInterval(T),
                i.loadError ? (n.addClass("mfp-loading"),
                t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"),
                t.updateStatus("ready")),
                n) : (t.updateStatus("loading"),
                i.loading = !0,
                i.hasSize || (i.imgHidden = !0,
                n.addClass("mfp-loading"),
                t.findImageSize(i)),
                n)
            }
        }
    });
    var _;
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, i = t.st.zoom, n = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var o, a, r = i.duration, getElToAnimate = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , n = "all " + i.duration / 1e3 + "s " + i.easing
                          , o = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , a = "transition";
                        return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = n,
                        t.css(o),
                        t
                    }, showMainContent = function() {
                        t.content.css("visibility", "visible")
                    };
                    _mfpOn("BuildControls" + n, (function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o),
                            t.content.css("visibility", "hidden"),
                            !(e = t._getItemToZoom()))
                                return void showMainContent();
                            (a = getElToAnimate(e)).css(t._getOffset()),
                            t.wrap.append(a),
                            o = setTimeout((function() {
                                a.css(t._getOffset(!0)),
                                o = setTimeout((function() {
                                    showMainContent(),
                                    setTimeout((function() {
                                        a.remove(),
                                        e = a = null,
                                        _mfpTrigger("ZoomAnimationEnded")
                                    }
                                    ), 16)
                                }
                                ), r)
                            }
                            ), 16)
                        }
                    }
                    )),
                    _mfpOn("BeforeClose.zoom", (function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o),
                            t.st.removalDelay = r,
                            !e) {
                                if (!(e = t._getItemToZoom()))
                                    return;
                                a = getElToAnimate(e)
                            }
                            a.css(t._getOffset(!0)),
                            t.wrap.append(a),
                            t.content.css("visibility", "hidden"),
                            setTimeout((function() {
                                a.css(t._getOffset())
                            }
                            ), 16)
                        }
                    }
                    )),
                    _mfpOn("Close.zoom", (function() {
                        t._allowZoom() && (showMainContent(),
                        a && a.remove(),
                        e = null)
                    }
                    ))
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(i) {
                var n, o = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(), a = parseInt(n.css("padding-top"), 10), r = parseInt(n.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - a;
                var s = {
                    width: n.width(),
                    height: (h ? n.innerHeight() : n[0].offsetHeight) - r - a
                };
                return void 0 === _ && (_ = void 0 !== document.createElement("p").style.MozTransform),
                _ ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left,
                s.top = o.top),
                s
            }
        }
    });
    var P = "iframe"
      , _fixIframeBugs = function(e) {
        if (t.currTemplate.iframe) {
            var i = t.currTemplate.iframe.find("iframe");
            i.length && (e || (i[0].src = "//about:blank"),
            t.isIE8 && i.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(P),
                _mfpOn("BeforeChange", (function(e, t, i) {
                    t !== i && (t === P ? _fixIframeBugs() : i === P && _fixIframeBugs(!0))
                }
                )),
                _mfpOn("Close.iframe", (function() {
                    _fixIframeBugs()
                }
                ))
            },
            getIframe: function(i, n) {
                var o = i.src
                  , a = t.st.iframe;
                e.each(a.patterns, (function() {
                    if (o.indexOf(this.index) > -1)
                        return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)),
                        o = this.src.replace("%id%", o),
                        !1
                }
                ));
                var r = {};
                return a.srcAction && (r[a.srcAction] = o),
                t._parseMarkup(n, r, i),
                t.updateStatus("ready"),
                n
            }
        }
    });
    var _getLoopedId = function(e) {
        var i = t.items.length;
        return e > i - 1 ? e - i : e < 0 ? i + e : e
    }
      , _replaceCurrTotal = function(e, t, i) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = t.st.gallery
                  , o = ".mfp-gallery";
                if (t.direction = !0,
                !i || !i.enabled)
                    return !1;
                a += " mfp-gallery",
                _mfpOn(d + o, (function() {
                    i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", (function() {
                        if (t.items.length > 1)
                            return t.next(),
                            !1
                    }
                    )),
                    n.on("keydown" + o, (function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    }
                    ))
                }
                )),
                _mfpOn("UpdateStatus" + o, (function(e, i) {
                    i.text && (i.text = _replaceCurrTotal(i.text, t.currItem.index, t.items.length))
                }
                )),
                _mfpOn(c + o, (function(e, n, o, a) {
                    var r = t.items.length;
                    o.counter = r > 1 ? _replaceCurrTotal(i.tCounter, a.index, r) : ""
                }
                )),
                _mfpOn("BuildControls" + o, (function() {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var n = i.arrowMarkup
                          , o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(v)
                          , a = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(v);
                        o.click((function() {
                            t.prev()
                        }
                        )),
                        a.click((function() {
                            t.next()
                        }
                        )),
                        t.container.append(o.add(a))
                    }
                }
                )),
                _mfpOn(p + o, (function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    t._preloadTimeout = setTimeout((function() {
                        t.preloadNearbyImages(),
                        t._preloadTimeout = null
                    }
                    ), 16)
                }
                )),
                _mfpOn(s + o, (function() {
                    n.off(o),
                    t.wrap.off("click" + o),
                    t.arrowRight = t.arrowLeft = null
                }
                ))
            },
            next: function() {
                t.direction = !0,
                t.index = _getLoopedId(t.index + 1),
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1,
                t.index = _getLoopedId(t.index - 1),
                t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index,
                t.index = e,
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, i = t.st.gallery.preload, n = Math.min(i[0], t.items.length), o = Math.min(i[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : n); e++)
                    t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? n : o); e++)
                    t._preloadItem(t.index - e)
            },
            _preloadItem: function(i) {
                if (i = _getLoopedId(i),
                !t.items[i].preloaded) {
                    var n = t.items[i];
                    n.parsed || (n = t.parseEl(i)),
                    _mfpTrigger("LazyLoad", n),
                    "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", (function() {
                        n.hasSize = !0
                    }
                    )).on("error.mfploader", (function() {
                        n.hasSize = !0,
                        n.loadError = !0,
                        _mfpTrigger("LazyLoadError", n)
                    }
                    )).attr("src", n.src)),
                    n.preloaded = !0
                }
            }
        }
    });
    var S = "retina";
    e.magnificPopup.registerModule(S, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, (function(e) {
                    return "@2x" + e
                }
                ))
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina
                      , i = e.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (_mfpOn("ImageHasSize.retina", (function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }
                    )),
                    _mfpOn("ElementParse.retina", (function(t, n) {
                        n.src = e.replaceSrc(n, i)
                    }
                    )))
                }
            }
        }
    }),
    _checkInstance()
}
));
"use strict";
function polyfill() {
    var o = window
      , l = document;
    if (!("scrollBehavior"in l.documentElement.style) || !0 === o.__forceSmoothScrollPolyfill__) {
        var t = o.HTMLElement || o.Element
          , e = {
            scroll: o.scroll || o.scrollTo,
            scrollBy: o.scrollBy,
            elementScroll: t.prototype.scroll || scrollElement,
            scrollIntoView: t.prototype.scrollIntoView
        }
          , r = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now
          , s = function isMicrosoftBrowser(o) {
            return new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(o)
        }(o.navigator.userAgent) ? 1 : 0;
        o.scroll = o.scrollTo = function() {
            void 0 !== arguments[0] && (!0 !== shouldBailOut(arguments[0]) ? smoothScroll.call(o, l.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : e.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset))
        }
        ,
        o.scrollBy = function() {
            void 0 !== arguments[0] && (shouldBailOut(arguments[0]) ? e.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : smoothScroll.call(o, l.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset)))
        }
        ,
        t.prototype.scroll = t.prototype.scrollTo = function() {
            if (void 0 !== arguments[0])
                if (!0 !== shouldBailOut(arguments[0])) {
                    var o = arguments[0].left
                      , l = arguments[0].top;
                    smoothScroll.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === l ? this.scrollTop : ~~l)
                } else {
                    if ("number" == typeof arguments[0] && void 0 === arguments[1])
                        throw new SyntaxError("Value could not be converted");
                    e.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                }
        }
        ,
        t.prototype.scrollBy = function() {
            void 0 !== arguments[0] && (!0 !== shouldBailOut(arguments[0]) ? this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior
            }) : e.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
        }
        ,
        t.prototype.scrollIntoView = function() {
            if (!0 !== shouldBailOut(arguments[0])) {
                var t = findScrollableParent(this)
                  , r = t.getBoundingClientRect()
                  , s = this.getBoundingClientRect();
                t !== l.body ? (smoothScroll.call(this, t, t.scrollLeft + s.left - r.left, t.scrollTop + s.top - r.top),
                "fixed" !== o.getComputedStyle(t).position && o.scrollBy({
                    left: r.left,
                    top: r.top,
                    behavior: "smooth"
                })) : o.scrollBy({
                    left: s.left,
                    top: s.top,
                    behavior: "smooth"
                })
            } else
                e.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
        }
    }
    function scrollElement(o, l) {
        this.scrollLeft = o,
        this.scrollTop = l
    }
    function shouldBailOut(o) {
        if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior)
            return !0;
        if ("object" == typeof o && "smooth" === o.behavior)
            return !1;
        throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.")
    }
    function hasScrollableSpace(o, l) {
        return "Y" === l ? o.clientHeight + s < o.scrollHeight : "X" === l ? o.clientWidth + s < o.scrollWidth : void 0
    }
    function canOverflow(l, t) {
        var e = o.getComputedStyle(l, null)["overflow" + t];
        return "auto" === e || "scroll" === e
    }
    function isScrollable(o) {
        var l = hasScrollableSpace(o, "Y") && canOverflow(o, "Y")
          , t = hasScrollableSpace(o, "X") && canOverflow(o, "X");
        return l || t
    }
    function findScrollableParent(o) {
        for (; o !== l.body && !1 === isScrollable(o); )
            o = o.parentNode || o.host;
        return o
    }
    function step(l) {
        var t, e, s, i = (r() - l.startTime) / 468;
        t = function ease(o) {
            return .5 * (1 - Math.cos(Math.PI * o))
        }(i = i > 1 ? 1 : i),
        e = l.startX + (l.x - l.startX) * t,
        s = l.startY + (l.y - l.startY) * t,
        l.method.call(l.scrollable, e, s),
        e === l.x && s === l.y || o.requestAnimationFrame(step.bind(o, l))
    }
    function smoothScroll(t, s, i) {
        var c, n, f, a, p = r();
        t === l.body ? (c = o,
        n = o.scrollX || o.pageXOffset,
        f = o.scrollY || o.pageYOffset,
        a = e.scroll) : (c = t,
        n = t.scrollLeft,
        f = t.scrollTop,
        a = scrollElement),
        step({
            scrollable: c,
            method: a,
            startTime: p,
            startX: n,
            startY: f,
            x: s,
            y: i
        })
    }
}
"object" == typeof exports && "undefined" != typeof module ? module.exports = {
    polyfill: polyfill
} : polyfill();
!function(t, o) {
    "function" == typeof define && define.amd ? define(["jquery"], o) : "object" == typeof exports ? module.exports = o(require("jquery")) : o(t.jQuery)
}(this, (function(t) {
    /*!
 @package noty - jQuery Notification Plugin
 @version version: 2.4.1
 @contributors https://github.com/needim/noty/graphs/contributors

 @documentation Examples and Documentation - http://needim.github.com/noty/

 @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php
 */
    "function" != typeof Object.create && (Object.create = function(t) {
        function F() {}
        return F.prototype = t,
        new F
    }
    );
    var o = {
        init: function(o) {
            if (this.options = t.extend({}, t.noty.defaults, o),
            this.options.layout = this.options.custom ? t.noty.layouts.inline : t.noty.layouts[this.options.layout],
            t.noty.themes[this.options.theme] ? (this.options.theme = t.noty.themes[this.options.theme],
            this.options.theme.template && (this.options.template = this.options.theme.template),
            this.options.theme.animation && (this.options.animation = this.options.theme.animation)) : this.options.themeClassName = this.options.theme,
            this.options = t.extend({}, this.options, this.options.layout.options),
            this.options.id) {
                if (t.noty.store[this.options.id])
                    return t.noty.store[this.options.id]
            } else
                this.options.id = "noty_" + (new Date).getTime() * Math.floor(1e6 * Math.random());
            return this._build(),
            this
        },
        _build: function() {
            var o = t('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
            if (o.append(this.options.template).find(".noty_text").html(this.options.text),
            this.$bar = null !== this.options.layout.parent.object ? t(this.options.layout.parent.object).css(this.options.layout.parent.css).append(o) : o,
            this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type),
            this.options.buttons) {
                var e;
                this.$bar.find(".noty_buttons").length > 0 ? e = this.$bar.find(".noty_buttons") : (e = t("<div/>").addClass("noty_buttons"),
                null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(e) : this.$bar.append(e));
                var s = this;
                t.each(this.options.buttons, (function(o, n) {
                    var i = t("<button/>").addClass(n.addClass ? n.addClass : "gray").html(n.text).attr("id", n.id ? n.id : "button-" + o).attr("title", n.title).appendTo(e).on("click", (function(o) {
                        t.isFunction(n.onClick) && n.onClick.call(i, s, o)
                    }
                    ))
                }
                ))
            } else
                this.$bar.find(".noty_buttons").remove();
            if (this.options.progressBar && this.options.timeout) {
                var n = t("<div/>").addClass("noty_progress_bar");
                null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(n) : this.$bar.append(n)
            }
            this.$message = this.$bar.find(".noty_message"),
            this.$closeButton = this.$bar.find(".noty_close"),
            this.$buttons = this.$bar.find(".noty_buttons"),
            this.$progressBar = this.$bar.find(".noty_progress_bar"),
            t.noty.store[this.options.id] = this
        },
        show: function() {
            var o = this;
            return o.options.custom ? o.options.custom.find(o.options.layout.container.selector).append(o.$bar) : t(o.options.layout.container.selector).append(o.$bar),
            o.options.theme && o.options.theme.style && o.options.theme.style.apply(o),
            "function" === t.type(o.options.layout.css) ? this.options.layout.css.apply(o.$bar) : o.$bar.css(this.options.layout.css || {}),
            o.$bar.addClass(o.options.layout.addClass),
            o.options.layout.container.style.apply(t(o.options.layout.container.selector), [o.options.within]),
            o.showing = !0,
            o.options.theme && o.options.theme.style && o.options.theme.callback.onShow.apply(this),
            t.inArray("click", o.options.closeWith) > -1 && o.$bar.css("cursor", "pointer").on("click", (function(t) {
                o.stopPropagation(t),
                o.options.callback.onCloseClick && o.options.callback.onCloseClick.apply(o),
                o.close()
            }
            )),
            t.inArray("hover", o.options.closeWith) > -1 && o.$bar.one("mouseenter", (function() {
                o.close()
            }
            )),
            t.inArray("button", o.options.closeWith) > -1 && o.$closeButton.one("click", (function(t) {
                o.stopPropagation(t),
                o.close()
            }
            )),
            -1 == t.inArray("button", o.options.closeWith) && o.$closeButton.remove(),
            o.options.callback.beforeShow && o.options.callback.beforeShow.apply(o),
            "string" == typeof o.options.animation.open ? (o.animationTypeOpen = "css",
            o.$bar.css("min-height", o.$bar.innerHeight()),
            o.$bar.on("click", (function(t) {
                o.wasClicked = !0
            }
            )),
            o.$bar.show(),
            o.options.callback.onShow && o.options.callback.onShow.apply(o),
            o.$bar.addClass(o.options.animation.open).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                o.options.callback.afterShow && o.options.callback.afterShow.apply(o),
                o.showing = !1,
                o.shown = !0,
                o.bindTimeout(),
                o.hasOwnProperty("wasClicked") && (o.$bar.off("click", (function(t) {
                    o.wasClicked = !0
                }
                )),
                o.close())
            }
            ))) : "object" == typeof o.options.animation.open && null == o.options.animation.open ? (o.animationTypeOpen = "none",
            o.showing = !1,
            o.shown = !0,
            o.$bar.show(),
            o.bindTimeout(),
            o.options.callback.onShow && o.options.callback.onShow.apply(o),
            o.$bar.queue((function() {
                o.options.callback.afterShow && o.options.callback.afterShow.apply(o)
            }
            ))) : (o.animationTypeOpen = "anim",
            o.options.callback.onShow && o.options.callback.onShow.apply(o),
            o.$bar.animate(o.options.animation.open, o.options.animation.speed, o.options.animation.easing, (function() {
                o.options.callback.afterShow && o.options.callback.afterShow.apply(o),
                o.showing = !1,
                o.shown = !0,
                o.bindTimeout()
            }
            ))),
            this
        },
        bindTimeout: function() {
            var t = this;
            t.options.timeout && (t.options.progressBar && t.$progressBar && t.$progressBar.css({
                transition: "all " + t.options.timeout + "ms linear",
                width: "0%"
            }),
            t.queueClose(t.options.timeout),
            t.$bar.on("mouseenter", t.dequeueClose.bind(t)),
            t.$bar.on("mouseleave", t.queueClose.bind(t, t.options.timeout)))
        },
        dequeueClose: function() {
            this.options.progressBar && this.$progressBar.css({
                transition: "none",
                width: "100%"
            }),
            this.closeTimer && (clearTimeout(this.closeTimer),
            this.closeTimer = null)
        },
        queueClose: function(t) {
            var o = this;
            if (o.options.progressBar && o.$progressBar.css({
                transition: "all " + o.options.timeout + "ms linear",
                width: "0%"
            }),
            !this.closeTimer)
                return o.closeTimer = window.setTimeout((function() {
                    o.close()
                }
                ), t),
                o.closeTimer
        },
        close: function() {
            if (this.$progressBar && this.$progressBar.remove(),
            this.closeTimer && this.dequeueClose(),
            !(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
                var o = this;
                if (!this.showing || "anim" != this.animationTypeOpen && "none" != this.animationTypeOpen) {
                    if (this.showing && "css" == this.animationTypeOpen && o.$bar.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                        o.close()
                    }
                    )),
                    !this.shown && !this.showing) {
                        var e = [];
                        return t.each(t.noty.queue, (function(t, s) {
                            s.options.id != o.options.id && e.push(s)
                        }
                        )),
                        void (t.noty.queue = e)
                    }
                    o.$bar.addClass("i-am-closing-now"),
                    o.options.callback.onClose && o.options.callback.onClose.apply(o),
                    "string" == typeof o.options.animation.close ? o.$bar.removeClass(o.options.animation.open).addClass(o.options.animation.close).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                        o.options.callback.afterClose && o.options.callback.afterClose.apply(o),
                        o.closeCleanUp()
                    }
                    )) : "object" == typeof o.options.animation.close && null == o.options.animation.close ? o.$bar.dequeue().hide(0, (function() {
                        o.options.callback.afterClose && o.options.callback.afterClose.apply(o),
                        o.closeCleanUp()
                    }
                    )) : o.$bar.clearQueue().stop().animate(o.options.animation.close, o.options.animation.speed, o.options.animation.easing, (function() {
                        o.options.callback.afterClose && o.options.callback.afterClose.apply(o)
                    }
                    )).promise().done((function() {
                        o.closeCleanUp()
                    }
                    ))
                } else
                    o.$bar.queue((function() {
                        o.close.apply(o)
                    }
                    ))
            }
        },
        closeCleanUp: function() {
            var o = this;
            o.options.modal && (t.notyRenderer.setModalCount(-1),
            0 != t.notyRenderer.getModalCount() || t.noty.queue.length || t(".noty_modal").fadeOut(o.options.animation.fadeSpeed, (function() {
                t(this).remove()
            }
            ))),
            t.notyRenderer.setLayoutCountFor(o, -1),
            0 == t.notyRenderer.getLayoutCountFor(o) && t(o.options.layout.container.selector).remove(),
            void 0 !== o.$bar && null !== o.$bar ? "string" == typeof o.options.animation.close ? (o.$bar.css("transition", "all 10ms ease").css("border", 0).css("margin", 0).height(0),
            o.$bar.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", (function() {
                o.$bar.remove(),
                o.$bar = null,
                o.closed = !0,
                o.options.theme.callback && o.options.theme.callback.onClose && o.options.theme.callback.onClose.apply(o),
                o.handleNext()
            }
            ))) : (o.$bar.remove(),
            o.$bar = null,
            o.closed = !0,
            o.handleNext()) : o.handleNext()
        },
        handleNext: function() {
            var o = this;
            delete t.noty.store[o.options.id],
            o.options.theme.callback && o.options.theme.callback.onClose && o.options.theme.callback.onClose.apply(o),
            o.options.dismissQueue || (t.noty.ontap = !0,
            t.notyRenderer.render()),
            o.options.maxVisible > 0 && o.options.dismissQueue && t.notyRenderer.render()
        },
        setText: function(t) {
            return this.closed || (this.options.text = t,
            this.$bar.find(".noty_text").html(t)),
            this
        },
        setType: function(t) {
            return this.closed || (this.options.type = t,
            this.options.theme.style.apply(this),
            this.options.theme.callback.onShow.apply(this)),
            this
        },
        setTimeout: function(t) {
            if (!this.closed) {
                var o = this;
                this.options.timeout = t,
                o.$bar.delay(o.options.timeout).promise().done((function() {
                    o.close()
                }
                ))
            }
            return this
        },
        stopPropagation: function(t) {
            void 0 !== (t = t || window.event).stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        },
        closed: !1,
        showing: !1,
        shown: !1
    };
    t.notyRenderer = {},
    t.notyRenderer.init = function(e) {
        var s = Object.create(o).init(e);
        return s.options.killer && t.noty.closeAll(),
        s.options.force ? t.noty.queue.unshift(s) : t.noty.queue.push(s),
        t.notyRenderer.render(),
        "object" == t.noty.returns ? s : s.options.id
    }
    ,
    t.notyRenderer.render = function() {
        var o = t.noty.queue[0];
        "object" === t.type(o) ? o.options.dismissQueue ? o.options.maxVisible > 0 ? t(o.options.layout.container.selector + " > li").length < o.options.maxVisible && t.notyRenderer.show(t.noty.queue.shift()) : t.notyRenderer.show(t.noty.queue.shift()) : t.noty.ontap && (t.notyRenderer.show(t.noty.queue.shift()),
        t.noty.ontap = !1) : t.noty.ontap = !0
    }
    ,
    t.notyRenderer.show = function(o) {
        o.options.modal && (t.notyRenderer.createModalFor(o),
        t.notyRenderer.setModalCount(1)),
        o.options.custom ? 0 == o.options.custom.find(o.options.layout.container.selector).length ? o.options.custom.append(t(o.options.layout.container.object).addClass("i-am-new")) : o.options.custom.find(o.options.layout.container.selector).removeClass("i-am-new") : 0 == t(o.options.layout.container.selector).length ? t("body").append(t(o.options.layout.container.object).addClass("i-am-new")) : t(o.options.layout.container.selector).removeClass("i-am-new"),
        t.notyRenderer.setLayoutCountFor(o, 1),
        o.show()
    }
    ,
    t.notyRenderer.createModalFor = function(o) {
        if (0 == t(".noty_modal").length) {
            var e = t("<div/>").addClass("noty_modal").addClass(o.options.theme).data("noty_modal_count", 0);
            o.options.theme.modal && o.options.theme.modal.css && e.css(o.options.theme.modal.css),
            e.prependTo(t("body")).fadeIn(o.options.animation.fadeSpeed),
            t.inArray("backdrop", o.options.closeWith) > -1 && e.on("click", (function() {
                t.noty.closeAll()
            }
            ))
        }
    }
    ,
    t.notyRenderer.getLayoutCountFor = function(o) {
        return t(o.options.layout.container.selector).data("noty_layout_count") || 0
    }
    ,
    t.notyRenderer.setLayoutCountFor = function(o, e) {
        return t(o.options.layout.container.selector).data("noty_layout_count", t.notyRenderer.getLayoutCountFor(o) + e)
    }
    ,
    t.notyRenderer.getModalCount = function() {
        return t(".noty_modal").data("noty_modal_count") || 0
    }
    ,
    t.notyRenderer.setModalCount = function(o) {
        return t(".noty_modal").data("noty_modal_count", t.notyRenderer.getModalCount() + o)
    }
    ,
    t.fn.noty = function(o) {
        return o.custom = t(this),
        t.notyRenderer.init(o)
    }
    ,
    t.noty = {},
    t.noty.queue = [],
    t.noty.ontap = !0,
    t.noty.layouts = {},
    t.noty.themes = {},
    t.noty.returns = "object",
    t.noty.store = {},
    t.noty.get = function(o) {
        return !!t.noty.store.hasOwnProperty(o) && t.noty.store[o]
    }
    ,
    t.noty.close = function(o) {
        return !!t.noty.get(o) && t.noty.get(o).close()
    }
    ,
    t.noty.setText = function(o, e) {
        return !!t.noty.get(o) && t.noty.get(o).setText(e)
    }
    ,
    t.noty.setType = function(o, e) {
        return !!t.noty.get(o) && t.noty.get(o).setType(e)
    }
    ,
    t.noty.clearQueue = function() {
        t.noty.queue = []
    }
    ,
    t.noty.closeAll = function() {
        t.noty.clearQueue(),
        t.each(t.noty.store, (function(t, o) {
            o.close()
        }
        ))
    }
    ;
    var e = window.alert;
    return t.noty.consumeAlert = function(o) {
        window.alert = function(e) {
            o ? o.text = e : o = {
                text: e
            },
            t.notyRenderer.init(o)
        }
    }
    ,
    t.noty.stopConsumeAlert = function() {
        window.alert = e
    }
    ,
    t.noty.defaults = {
        layout: "topRight",
        theme: "relax",
        type: "alert",
        text: "",
        progressBar: !1,
        dismissQueue: !0,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500,
            fadeSpeed: "fast"
        },
        timeout: !1,
        force: !1,
        modal: !1,
        maxVisible: 5,
        killer: !1,
        closeWith: ["click"],
        callback: {
            beforeShow: function() {},
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {},
            onCloseClick: function() {}
        },
        buttons: !1
    },
    t(window).on("resize", (function() {
        t.each(t.noty.layouts, (function(o, e) {
            e.container.style.apply(t(e.container.selector))
        }
        ))
    }
    )),
    window.noty = function noty(o) {
        return t.notyRenderer.init(o)
    }
    ,
    t.noty.layouts.bottom = {
        name: "bottom",
        options: {},
        container: {
            object: '<ul id="noty_bottom_layout_container" />',
            selector: "ul#noty_bottom_layout_container",
            style: function() {
                t(this).css({
                    bottom: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    },
    t.noty.layouts.bottomCenter = {
        name: "bottomCenter",
        options: {},
        container: {
            object: '<ul id="noty_bottomCenter_layout_container" />',
            selector: "ul#noty_bottomCenter_layout_container",
            style: function() {
                t(this).css({
                    bottom: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                t(this).css({
                    left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    t.noty.layouts.bottomLeft = {
        name: "bottomLeft",
        options: {},
        container: {
            object: '<ul id="noty_bottomLeft_layout_container" />',
            selector: "ul#noty_bottomLeft_layout_container",
            style: function() {
                t(this).css({
                    bottom: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                window.innerWidth < 600 && t(this).css({
                    left: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    t.noty.layouts.bottomRight = {
        name: "bottomRight",
        options: {},
        container: {
            object: '<ul id="noty_bottomRight_layout_container" />',
            selector: "ul#noty_bottomRight_layout_container",
            style: function() {
                t(this).css({
                    bottom: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                window.innerWidth < 600 && t(this).css({
                    right: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    t.noty.layouts.center = {
        name: "center",
        options: {},
        container: {
            object: '<ul id="noty_center_layout_container" />',
            selector: "ul#noty_center_layout_container",
            style: function() {
                t(this).css({
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var o = t(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                t("body").append(o),
                o.find(".i-am-closing-now").remove(),
                o.find("li").css("display", "block");
                var e = o.height();
                o.remove(),
                t(this).hasClass("i-am-new") ? t(this).css({
                    left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
                    top: (t(window).height() - e) / 2 + "px"
                }) : t(this).animate({
                    left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
                    top: (t(window).height() - e) / 2 + "px"
                }, 500)
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    t.noty.layouts.centerLeft = {
        name: "centerLeft",
        options: {},
        container: {
            object: '<ul id="noty_centerLeft_layout_container" />',
            selector: "ul#noty_centerLeft_layout_container",
            style: function() {
                t(this).css({
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var o = t(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                t("body").append(o),
                o.find(".i-am-closing-now").remove(),
                o.find("li").css("display", "block");
                var e = o.height();
                o.remove(),
                t(this).hasClass("i-am-new") ? t(this).css({
                    top: (t(window).height() - e) / 2 + "px"
                }) : t(this).animate({
                    top: (t(window).height() - e) / 2 + "px"
                }, 500),
                window.innerWidth < 600 && t(this).css({
                    left: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    t.noty.layouts.centerRight = {
        name: "centerRight",
        options: {},
        container: {
            object: '<ul id="noty_centerRight_layout_container" />',
            selector: "ul#noty_centerRight_layout_container",
            style: function() {
                t(this).css({
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var o = t(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                t("body").append(o),
                o.find(".i-am-closing-now").remove(),
                o.find("li").css("display", "block");
                var e = o.height();
                o.remove(),
                t(this).hasClass("i-am-new") ? t(this).css({
                    top: (t(window).height() - e) / 2 + "px"
                }) : t(this).animate({
                    top: (t(window).height() - e) / 2 + "px"
                }, 500),
                window.innerWidth < 600 && t(this).css({
                    right: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    t.noty.layouts.inline = {
        name: "inline",
        options: {},
        container: {
            object: '<ul class="noty_inline_layout_container" />',
            selector: "ul.noty_inline_layout_container",
            style: function() {
                t(this).css({
                    width: "100%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    },
    t.noty.layouts.top = {
        name: "top",
        options: {},
        container: {
            object: '<ul id="noty_top_layout_container" />',
            selector: "ul#noty_top_layout_container",
            style: function() {
                t(this).css({
                    top: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    },
    t.noty.layouts.topCenter = {
        name: "topCenter",
        options: {},
        container: {
            object: '<ul id="noty_topCenter_layout_container" />',
            selector: "ul#noty_topCenter_layout_container",
            style: function() {
                t(this).css({
                    top: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                t(this).css({
                    left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    t.noty.layouts.topLeft = {
        name: "topLeft",
        options: {},
        container: {
            object: '<ul id="noty_topLeft_layout_container" />',
            selector: "ul#noty_topLeft_layout_container",
            style: function() {
                t(this).css({
                    top: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                window.innerWidth < 600 && t(this).css({
                    left: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    t.noty.layouts.topRight = {
        name: "topRight",
        options: {},
        container: {
            object: '<ul id="noty_topRight_layout_container" />',
            selector: "ul#noty_topRight_layout_container",
            style: function() {
                t(this).css({
                    top: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                window.innerWidth < 600 && t(this).css({
                    right: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    t.noty.themes.bootstrapTheme = {
        name: "bootstrapTheme",
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0,
                wordBreak: "break-all"
            }
        },
        style: function() {
            var o = this.options.layout.container.selector;
            switch (t(o).addClass("list-group"),
            this.$closeButton.append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'),
            this.$closeButton.addClass("close"),
            this.$bar.addClass("list-group-item").css("padding", "0px").css("position", "relative"),
            this.$progressBar.css({
                position: "absolute",
                left: 0,
                bottom: 0,
                height: 4,
                width: "100%",
                backgroundColor: "#000000",
                opacity: .2,
                "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                filter: "alpha(opacity=20)"
            }),
            this.options.type) {
            case "alert":
            case "notification":
            case "information":
                this.$bar.addClass("list-group-item-info");
                break;
            case "warning":
                this.$bar.addClass("list-group-item-warning");
                break;
            case "error":
                this.$bar.addClass("list-group-item-danger");
                break;
            case "success":
                this.$bar.addClass("list-group-item-success")
            }
            this.$message.css({
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            })
        },
        callback: {
            onShow: function() {},
            onClose: function() {}
        }
    },
    t.noty.themes.defaultTheme = {
        name: "defaultTheme",
        helpers: {
            borderFix: function() {
                if (this.options.dismissQueue) {
                    var o = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                    switch (this.options.layout.name) {
                    case "top":
                        t(o).css({
                            borderRadius: "0px 0px 0px 0px"
                        }),
                        t(o).last().css({
                            borderRadius: "0px 0px 5px 5px"
                        });
                        break;
                    case "topCenter":
                    case "topLeft":
                    case "topRight":
                    case "bottomCenter":
                    case "bottomLeft":
                    case "bottomRight":
                    case "center":
                    case "centerLeft":
                    case "centerRight":
                    case "inline":
                        t(o).css({
                            borderRadius: "0px 0px 0px 0px"
                        }),
                        t(o).first().css({
                            "border-top-left-radius": "5px",
                            "border-top-right-radius": "5px"
                        }),
                        t(o).last().css({
                            "border-bottom-left-radius": "5px",
                            "border-bottom-right-radius": "5px"
                        });
                        break;
                    case "bottom":
                        t(o).css({
                            borderRadius: "0px 0px 0px 0px"
                        }),
                        t(o).first().css({
                            borderRadius: "5px 5px 0px 0px"
                        })
                    }
                }
            }
        },
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            switch (this.$bar.css({
                overflow: "hidden",
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff",
                position: "relative"
            }),
            this.$progressBar.css({
                position: "absolute",
                left: 0,
                bottom: 0,
                height: 4,
                width: "100%",
                backgroundColor: "#000000",
                opacity: .2,
                "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                filter: "alpha(opacity=20)"
            }),
            this.$message.css({
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            }),
            this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }),
            this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }),
            this.$buttons.find("button").css({
                marginLeft: 5
            }),
            this.$buttons.find("button:first").css({
                marginLeft: 0
            }),
            this.$bar.on({
                mouseenter: function() {
                    t(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function() {
                    t(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            }),
            this.options.layout.name) {
            case "top":
                this.$bar.css({
                    borderRadius: "0px 0px 5px 5px",
                    borderBottom: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            case "topCenter":
            case "center":
            case "bottomCenter":
            case "inline":
                this.$bar.css({
                    borderRadius: "5px",
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }),
                this.$message.css({
                    textAlign: "center"
                });
                break;
            case "topLeft":
            case "topRight":
            case "bottomLeft":
            case "bottomRight":
            case "centerLeft":
            case "centerRight":
                this.$bar.css({
                    borderRadius: "5px",
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }),
                this.$message.css({
                    textAlign: "left"
                });
                break;
            case "bottom":
                this.$bar.css({
                    borderRadius: "5px 5px 0px 0px",
                    borderTop: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            default:
                this.$bar.css({
                    border: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                })
            }
            switch (this.options.type) {
            case "alert":
            case "notification":
            default:
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#CCC",
                    color: "#444"
                });
                break;
            case "warning":
                this.$bar.css({
                    backgroundColor: "#FFEAA8",
                    borderColor: "#FFC237",
                    color: "#826200"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #FFC237"
                });
                break;
            case "error":
                this.$bar.css({
                    backgroundColor: "red",
                    borderColor: "darkred",
                    color: "#FFF"
                }),
                this.$message.css({
                    fontWeight: "bold"
                }),
                this.$buttons.css({
                    borderTop: "1px solid darkred"
                });
                break;
            case "information":
                this.$bar.css({
                    backgroundColor: "#57B7E2",
                    borderColor: "#0B90C4",
                    color: "#FFF"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #0B90C4"
                });
                break;
            case "success":
                this.$bar.css({
                    backgroundColor: "lightgreen",
                    borderColor: "#50C24E",
                    color: "darkgreen"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #50C24E"
                })
            }
        },
        callback: {
            onShow: function() {
                t.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            },
            onClose: function() {
                t.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            }
        }
    },
    t.noty.themes.metroui = {
        name: "metroui",
        helpers: {},
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            switch (this.$bar.css({
                overflow: "hidden",
                margin: "4px 0",
                borderRadius: "0",
                position: "relative"
            }),
            this.$progressBar.css({
                position: "absolute",
                left: 0,
                bottom: 0,
                height: 4,
                width: "100%",
                backgroundColor: "#000000",
                opacity: .2,
                "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                filter: "alpha(opacity=20)"
            }),
            this.$message.css({
                textAlign: "center",
                padding: "1.25rem",
                width: "auto",
                position: "relative"
            }),
            this.$closeButton.css({
                position: "absolute",
                top: ".25rem",
                right: ".25rem",
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }),
            this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }),
            this.$buttons.find("button").css({
                marginLeft: 5
            }),
            this.$buttons.find("button:first").css({
                marginLeft: 0
            }),
            this.$bar.on({
                mouseenter: function() {
                    t(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function() {
                    t(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            }),
            this.options.layout.name) {
            case "top":
            case "bottom":
            default:
                this.$bar.css({
                    border: "none",
                    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)"
                });
                break;
            case "topCenter":
            case "center":
            case "bottomCenter":
            case "inline":
                this.$bar.css({
                    border: "none",
                    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)"
                }),
                this.$message.css({
                    textAlign: "center"
                });
                break;
            case "topLeft":
            case "topRight":
            case "bottomLeft":
            case "bottomRight":
            case "centerLeft":
            case "centerRight":
                this.$bar.css({
                    border: "none",
                    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)"
                }),
                this.$message.css({
                    textAlign: "left"
                })
            }
            switch (this.options.type) {
            case "alert":
            case "notification":
            default:
                this.$bar.css({
                    backgroundColor: "#fff",
                    border: "none",
                    color: "#1d1d1d"
                });
                break;
            case "warning":
                this.$bar.css({
                    backgroundColor: "#FA6800",
                    border: "none",
                    color: "#fff"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #FA6800"
                });
                break;
            case "error":
                this.$bar.css({
                    backgroundColor: "#CE352C",
                    border: "none",
                    color: "#fff"
                }),
                this.$message.css({
                    fontWeight: "bold"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #CE352C"
                });
                break;
            case "information":
                this.$bar.css({
                    backgroundColor: "#1BA1E2",
                    border: "none",
                    color: "#fff"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #1BA1E2"
                });
                break;
            case "success":
                this.$bar.css({
                    backgroundColor: "#60A917",
                    border: "none",
                    color: "#fff"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #50C24E"
                })
            }
        },
        callback: {
            onShow: function() {},
            onClose: function() {}
        }
    },
    t.noty.themes.relax = {
        name: "relax",
        helpers: {},
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            switch (this.$bar.css({
                overflow: "hidden",
                margin: "4px 0",
                borderRadius: "2px",
                position: "relative"
            }),
            this.$progressBar.css({
                position: "absolute",
                left: 0,
                bottom: 0,
                height: 4,
                width: "100%",
                backgroundColor: "#000000",
                opacity: .2,
                "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                filter: "alpha(opacity=20)"
            }),
            this.$message.css({
                textAlign: "center",
                padding: "10px",
                width: "auto",
                position: "relative"
            }),
            this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }),
            this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }),
            this.$buttons.find("button").css({
                marginLeft: 5
            }),
            this.$buttons.find("button:first").css({
                marginLeft: 0
            }),
            this.$bar.on({
                mouseenter: function() {
                    t(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function() {
                    t(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            }),
            this.options.layout.name) {
            case "top":
                this.$bar.css({
                    borderBottom: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    borderTop: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            case "topCenter":
            case "center":
            case "bottomCenter":
            case "inline":
                this.$bar.css({
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }),
                this.$message.css({
                    textAlign: "center"
                });
                break;
            case "topLeft":
            case "topRight":
            case "bottomLeft":
            case "bottomRight":
            case "centerLeft":
            case "centerRight":
                this.$bar.css({
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }),
                this.$message.css({
                    textAlign: "left"
                });
                break;
            case "bottom":
                this.$bar.css({
                    borderTop: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    borderBottom: "2px solid #eee",
                    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            default:
                this.$bar.css({
                    border: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                })
            }
            switch (this.options.type) {
            case "alert":
            case "notification":
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#dedede",
                    color: "#444"
                });
                break;
            case "warning":
                this.$bar.css({
                    backgroundColor: "#FFEAA8",
                    borderColor: "#FFC237",
                    color: "#826200"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #FFC237"
                });
                break;
            case "error":
                this.$bar.css({
                    backgroundColor: "#FF8181",
                    borderColor: "#e25353",
                    color: "#FFF"
                }),
                this.$message.css({
                    fontWeight: "bold"
                }),
                this.$buttons.css({
                    borderTop: "1px solid darkred"
                });
                break;
            case "information":
                this.$bar.css({
                    backgroundColor: "#78C5E7",
                    borderColor: "#3badd6",
                    color: "#FFF"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #0B90C4"
                });
                break;
            case "success":
                this.$bar.css({
                    backgroundColor: "#BCF5BC",
                    borderColor: "#7cdd77",
                    color: "darkgreen"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #50C24E"
                });
                break;
            default:
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#CCC",
                    color: "#444"
                })
            }
        },
        callback: {
            onShow: function() {},
            onClose: function() {}
        }
    },
    t.noty.themes.semanticUI = {
        name: "semanticUI",
        template: '<div class="ui message"><div class="content"><div class="header"></div></div></div>',
        animation: {
            open: {
                animation: "fade",
                duration: "800ms"
            },
            close: {
                animation: "fade left",
                duration: "800ms"
            }
        },
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            switch (this.$message = this.$bar.find(".ui.message"),
            this.$message.find(".header").html(this.options.header),
            this.$message.find(".content").append(this.options.text),
            this.$bar.css({
                margin: "0.5em",
                position: "relative"
            }),
            this.options.icon && this.$message.addClass("icon").prepend(t("<i/>").addClass(this.options.icon)),
            this.$progressBar.css({
                position: "absolute",
                left: 0,
                bottom: 0,
                height: 4,
                width: "100%",
                backgroundColor: "#000000",
                opacity: .2,
                "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                filter: "alpha(opacity=20)"
            }),
            this.options.size) {
            case "mini":
                this.$message.addClass("mini");
                break;
            case "tiny":
                this.$message.addClass("tiny");
                break;
            case "small":
                this.$message.addClass("small");
                break;
            case "large":
                this.$message.addClass("large");
                break;
            case "big":
                this.$message.addClass("big");
                break;
            case "huge":
                this.$message.addClass("huge");
                break;
            case "massive":
                this.$message.addClass("massive")
            }
            switch (this.options.type) {
            case "info":
                this.$message.addClass("info");
                break;
            case "warning":
                this.$message.addClass("warning");
                break;
            case "error":
                this.$message.addClass("error");
                break;
            case "negative":
                this.$message.addClass("negative");
                break;
            case "success":
                this.$message.addClass("success");
                break;
            case "positive":
                this.$message.addClass("positive");
                break;
            case "floating":
                this.$message.addClass("floating")
            }
        },
        callback: {
            onShow: function() {
                this.$bar.addClass("transition"),
                this.$bar.transition(this.options.animation.open)
            },
            onClose: function() {
                this.$bar.transition(this.options.animation.close)
            }
        }
    },
    window.noty
}
));
