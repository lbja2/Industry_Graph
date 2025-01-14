/* @preserve 
 * @name: BUI v1.5.0
 * @detail: BUI 是一个免费的UI交互框架, 用于快速定制开发WebApp,微信,混合移动应用(Bingotouch,Link,Dcloud,Apicloud,Appcan等).
 * @site: http://www.easybui.com/
 * Copyright © 2016-2018 BUI. All Rights Reserved.
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t()
}(0, function () {
    "use strict";

    function e(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }
    window.libs = window.Zepto || window.jQuery || {}, window.bui = {}, window.router = {},
        function (e) {
            e.debug = !0, e.hasRouter = !1, e.isWebapp, e.currentPlatform = "", e.log = !0, e.trace = !1, e.native = {}, e.config = {}, e.config.namespace = "bui", e.config.classNamePrefix = e.config.namespace + "-", e.config.version = "1.4.7", e.config.versionCode = 20180905, e.version = e.config.version, e.versionCode = e.config.versionCode, e.config.viewport = {
                zoom: !0,
                create: !0
            }, e.config.init = {
                auto: !0
            }, e.config.ready = {}, e.config.ajax = {}, e.config.back = {}, e.config.load = {}, e.config.getPageParams = {}, e.config.refresh = {}, e.config.run = {}, e.config.checkVersion = {}, e.config.dialog = {}, e.config.confirm = {}, e.config.alert = {}, e.config.hint = {}, e.config.prompt = {}, e.config.loading = {}, e.config.mask = {}, e.config.list = {}, e.config.listview = {}, e.config.scroll = {}, e.config.pullrefresh = {}, e.config.select = {}, e.config.sidebar = {}, e.config.slide = {}, e.config.actionsheet = {}, e.config.dropdown = {}, e.config.accordion = {}, e.config.stepbar = {}, e.config.rating = {}, e.config.number = {}, e.config.file = {}, e.config.fileselect = {}, e.config.upload = {}, e.config.download = {}, e.config.swipe = {}, e.config.router = {}, e.config.loader = {}
        }(window.bui);
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function (e, n) {
        e.prefix = function (t) {
            return e.config.classNamePrefix + t
        }, e.showLog = function (n, i) {
            i = i || "";
            var a = "";
            "object" == (void 0 === n ? "undefined" : t(n)) && "message" in n && "name" in n ? a = n.message + ":" + n.name + "&&stack:" + n.stack : "string" == typeof n && (a = n), e.log && console.error(i + " " + a), e.trace && console.trace && console.trace()
        }, e.guid = function (e) {
            function t() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            return "bui-" + t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }, e.swipeDirection = function (e, t, n, i) {
            var a = t - e,
                o = i - n,
                r = Math.abs(a),
                l = Math.abs(o);
            return !(r < 9 && l < 9) && (r / l > 3 ? a > 0 ? "swiperight" : "swipeleft" : o > 0 ? "swipedown" : "swipeup")
        }, e.obj = function (i, a) {
            var o = null;
            a = a || null;
            var r = e.hasRouter ? router.currentPage() || "body" : "body";
            r = a || r;
            var l = n(r),
                s = /^(\d)/,
                c = /^[a-zA-z]/,
                u = /^\[.+\]$/,
                d = /^#\d/,
                f = /^\.\d/,
                h = "string" == typeof i,
                p = /^(html|head|body|header|main|footer|ul|li|section|dt|dd|div|span|img|article|i|strong|input|textarea|select|h1|h2|h3|h4|h5|h6|p)$/gi;
            if ("object" === (void 0 === i ? "undefined" : t(i))) return o = l.find(i);
            if (h && s.test(i)) return o = l.find("[id='" + i + "']");
            if (h && c.test(i)) {
                var g = p.test(i) || u.test(i) ? i : "#" + i;
                return o = l.find(g)
            }
            return d.test(i) ? o = l.find("[id='" + i.substr(1) + "']") : f.test(i) ? o = l.find("[class='" + i.substr(1) + "']") : i && (o = l.find(i)), o
        }, e.objId = function (t) {
            return e.obj(t, "html")
        }, e.selector = function (e) {
            return void 0 === e ? this : n(e, this)
        }, e.widget = function (e) {
            return e && e in this ? this[e] : this
        }, e.option = function (t, i) {
            if ("object" !== e.typeof(t) && void 0 === i) return "string" == typeof t ? this.config[t] : this.config;
            if ("id" == t) return e.showLog("不允许修改控件的ID参数"), this;
            if (t && "object" === e.typeof(t)) {
                var a = n.extend(this.config, t);
                return this.init(a)
            }
            if (this.config.hasOwnProperty(t)) {
                var o = {};
                o[t] = i;
                var a = n.extend(this.config, o);
                return this.init(a)
            }
            return this
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.emitter = function () {
            function t() {
                this.handle = Object.create(null)
            }
            return t.prototype.on = function (e, t, n) {
                    return "function" == typeof t ? (n = t, t = this) : (n = n, t = t || this), t.handle = t.handle || {}, (e && e.indexOf(",") > -1 ? e.split(",") : [e]).forEach(function (e, i) {
                        void 0 === t.handle[e] && (t.handle[e] = []), t.handle[e].push(n)
                    }), t
                }, t.prototype.off = function (t, n, i) {
                    return "function" == typeof n ? (i = n, n = this) : "function" == typeof i ? (i = i, n = n || this) : n = this, "undefined" === t ? n.handle = {} : "string" == typeof t && "function" == typeof i ? e.array.remove(i, n.handle[t]) : "string" == typeof t && (n.handle = {}, n.handle[t] = []), n
                }, t.prototype.one = function (e, t) {
                    function n() {
                        t && t.apply(this, arguments), this.off(e, n)
                    }
                    return this.on(e, n), this
                }, t.prototype.trigger = function (e) {
                    try {
                        if (this.handle[arguments[0]] instanceof Array) {
                            var t = this.handle[arguments[0]],
                                n = [].slice.apply(arguments);
                            n.shift();
                            for (var i = 0, a = t.length; i < a; i++) t[i] && t[i].apply(this.self || this, n)
                        }
                    } catch (e) {}
                    return this
                }, t.prototype.notify = function () {
                    try {
                        for (var e in this.handle)
                            if (this.handle[e] instanceof Array)
                                for (var t = this.handle[e], n = 0, i = t.length; n < i; n++) t[n] && t[n].apply(this.self || this)
                    } catch (e) {}
                    return this
                },
                function (e) {
                    return new t
                }
        }();
        var n = bui.emitter();
        e.on = n.on, e.off = n.off, e.trigger = n.trigger, e.one = n.one
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.store = function (i) {
            function a() {
                for (var e in H)! function (e) {
                    Object.defineProperty(Y, e, {
                        configurable: !0,
                        get: function () {
                            return L[e]
                        }, set: function (t) {
                            L[e] = t
                        }
                    })
                }(e)
            }

            function o() {
                Object.keys(F).forEach(function (e, t) {
                    C(e, F[e].bind(Y))
                })
            }

            function r() {
                Object.keys(D).forEach(function (t) {
                    Object.defineProperty(Y, t, {
                        get: "function" == typeof D[t] ? D[t] : D[t].get,
                        set: D[t] && "object" === e.typeof(D[t]) ? D[t].set || function () {} : function () {}
                    })
                })
            }

            function l() {
                Object.keys(P).forEach(function (e) {
                    Object.defineProperty(Y, e, {
                        get: function () {
                            return P[e].bind(this)
                        }, set: function () {}
                    })
                })
            }

            function s() {
                U.forEach(function (t, n) {
                    var i = z("[" + t + '*="' + N + '"]');
                    i.length && i.each(function (n, i) {
                        var a = this,
                            o = m.call(this, "" + t),
                            r = o[0].keyname,
                            l = null;
                        r in W ? l = W[r] : (l = e.unit.getKeyValue(r, Y), W[r] = l);
                        var s = m.call(this, "b-linked");
                        switch (s.length && s.forEach(function (t, n) {
                            C(t.keyname, function (t) {
                                S(r, {
                                    value: e.unit.getKeyValue(r, Y),
                                    action: "set",
                                    keyname: r,
                                    data: Y
                                })
                            })
                        }), t) {
                        case "b-text":
                            C(r, c.bind(a));
                            break;
                        case "b-html":
                            C(r, u.bind(a));
                            break;
                        case "b-value":
                        case "b-model":
                            C(r, d.bind(a));
                            break;
                        case "b-show":
                            C(r, f.bind(a));
                            break;
                        case "b-checked":
                            C(r, h.bind(a))
                        }
                        S(r, {
                            value: l,
                            action: "set",
                            keyname: r,
                            data: H
                        }), A = []
                    })
                });
                var t = z('[b-bind*="' + N + '"]');
                t.length && t.each(function (t, n) {
                    var i = this,
                        a = m.call(this, "b-bind"),
                        o = a[0].keyname,
                        r = null;
                    o in W ? r = W[o] : (r = e.unit.getKeyValue(o, Y), W[o] = r), C(o, p.bind(i)), S(o, {
                        value: r,
                        action: "set",
                        keyname: o,
                        data: H
                    }), A = []
                });
                var n = z('[b-model*="' + N + '"]');
                n.length && n.on("input", bui.unit.debounce(function (e) {
                    var t = e.target.value;
                    y(m.call(this, "b-model")[0].keyname, t), A = []
                }, 200));
                var i = z('[b-checked*="' + N + '"]');
                i.length && i.on("change", function (e) {
                    var t = this.checked;
                    y(m.call(this, "b-checked")[0].keyname, t), A = []
                });
                var a = z('[b-class*="' + N + '"]');
                a.length && a.each(function (t, n) {
                    var i = this,
                        a = m.call(this, "b-class"),
                        o = a[0].keyname,
                        r = null;
                    o in W ? r = W[o] : (r = e.unit.getKeyValue(o, Y), W[o] = r), C(o, g.bind(i)), S(o, {
                        value: r,
                        action: "set",
                        keyname: o,
                        data: H
                    }), A = []
                })
            }

            function c(e) {
                this.textContent = e.value
            }

            function u(e) {
                this.innerHtml = e.value
            }

            function d(e) {
                this.value = e.value
            }

            function f(e) {
                this.style.display = e.value ? "block" : "none"
            }

            function h(e) {
                this.checked = !!e.value
            }

            function p(e) {
                var n = this,
                    i = this;
                if ("object" === t(e.value)) {
                    for (var a in e.value)! function (t) {
                        C(e.keyname + "." + t, function (e) {
                            i.setAttribute(t, e.value)
                        }), n.setAttribute(t, e.value[t])
                    }(a)
                } else this.setAttribute(e.keyname, e.value)
            }

            function g(e) {
                var n = this,
                    i = this;
                if ("object" === t(e.value)) {
                    for (var a in e.value)! function (t) {
                        var a = e.value[t];
                        C(e.keyname + "." + t, function (e) {
                            v.call(i, t, e.value)
                        }), v.call(n, t, a)
                    }(a)
                } else v.call(this, e.keyname, e.value)
            }

            function v(e, t) {
                "boolean" == typeof t ? (t && this.classList.add(e), !t && this.classList.remove(e)) : "string" == typeof t && t && !this.classList.contains(t) && this.classList.add(t)
            }

            function m(e) {
                var t = [],
                    n = this.getAttribute(e) || "";
                return (n.indexOf("&") > -1 ? n.split("&") : n && [n] || []).forEach(function (e, n) {
                    var i = {};
                    if (e.indexOf(":") > -1) {
                        var a = e.split(":");
                        i.scope = a[0], i.keyname = a[1]
                    } else i.scope = N, i.keyname = e;
                    t.push(i)
                }), t
            }

            function b(n) {
                function i(e, t) {
                    var n = Object.create(Array.prototype);
                    return ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
                        Object.defineProperty(n, e, {
                            enumerable: !0,
                            configurable: !0,
                            value: function () {
                                A.push(t), q.log && console.log(A.join(".") + " action " + e + " ");
                                var n = [].concat(Array.prototype.slice.call(arguments));
                                Array.prototype[e].apply(this, n), S(A.join("."), {
                                    action: e,
                                    value: n,
                                    keyname: t,
                                    data: H
                                }), A = []
                            }
                        })
                    }), e.__proto__ = n, e
                }
                return function (n) {
                    Object.keys(n).forEach(function (a) {
                        var o = n[a];
                        if (o instanceof Array ? i(o, a) : Object.defineProperty(n, a, {
                            enumerable: !0,
                            configurable: !0,
                            get: function (e) {
                                return q.log && console.log("getting " + a), E.target === this && (A = []), E.target = this, A.push(a), o
                            }, set: function (n) {
                                if (n === o) return A = [], void(M = !1);
                                E.target === this && (A = []), E.target = this, A.push(a);
                                var i = A.join(".");
                                return q.log && console.log("setting " + i), o = n, e.unit.setKeyValue(i, o, H), S(i, {
                                    action: "set",
                                    value: o,
                                    keyname: i,
                                    data: H
                                }), A = [], M = !1, o instanceof Array ? b(o) : "object" === (void 0 === o ? "undefined" : t(o)) && b(n), !0
                            }
                        }), o && "object" === e.typeof(o)) return b(o)
                    })
                }(n)
            }

            function w(t) {
                if (void 0 === t) return H = H;
                if ("string" == typeof t) {
                    var n = e.unit.getKeyValue(t, H);
                    return A = [], n
                }
                return H
            }

            function y(i, a) {
                var o = "string" == typeof i,
                    r = [],
                    l = null;
                if (o && void 0 !== a) {
                    if (q.log && console.log("set " + i + " "), a === V[i]) return;
                    a && "object" === e.typeof(a) ? (l = n.extend(!0, {}, a), r.push(i), Object.keys(a).forEach(function (e, t) {
                        r.push(e), S(r.join("."), {
                            value: a[e],
                            action: "set",
                            keyname: r.join("."),
                            data: H
                        })
                    })) : l = a, e.unit.setKeyValue(i, l, H), e.unit.setKeyValue(i, a, L), V[i] = l, S(i, {
                        value: l,
                        action: "set",
                        keyname: i,
                        data: H
                    }), "object" === (void 0 === a ? "undefined" : t(a)) && b(a), M = !0, A = []
                } else i && "object" === e.typeof(i) && (H = n.extend(!0, {}, H, i), T(i));
                return H
            }

            function x(t, n) {
                return "string" == typeof t && (e.unit.delKey(t, H), n && n.call(Y, t)), H
            }

            function k(e, t) {
                return x(e, function (t) {
                    S(e)
                }), H
            }

            function T(t, n) {
                for (var i in t) {
                    var a = void 0 === n ? i : n + i,
                        o = t[i];
                    S(a, {
                        value: o,
                        action: "set",
                        keyname: a,
                        data: H
                    }), o && "object" === e.typeof(o) && T(o, i + ".")
                }
            }

            function C(e, t) {
                var n = N + "-" + e;
                return E.on.call(Y, n, t), this
            }

            function I(e, t) {
                var n = N + "-" + e;
                return E.one.call(Y, n, t), this
            }

            function O(e, t) {
                var n = N + "-" + e;
                return E.off.call(Y, n, t), this
            }

            function S(e) {
                var t = N + "-" + e;
                return arguments[0] = t, E.trigger.apply(Y, arguments), E.target = null, this
            }
            var j = {
                    scope: "",
                    data: null,
                    computed: null,
                    method: null,
                    watch: null,
                    isPublic: !1,
                    log: !1
                },
                E = e.emitter(),
                L = i && "object" === e.typeof(i) ? i.data : i || {},
                N = i && i.scope || e.guid(),
                D = i.computed || j.computed,
                P = i.method || j.method,
                F = i.watch || j.watch,
                R = i.isPublic || j.isPublic,
                M = !1;
            E.target = null;
            var z = e.hasRouter ? router.$ : n,
                A = [],
                H = n.extend(!0, {}, L),
                V = {},
                q = {};
            q.log = j.log;
            var U = ["b-text", "b-html", "b-value", "b-show", "b-checked", "b-bind", "b-model"],
                W = {},
                Y = {
                    on: C,
                    off: O,
                    one: I,
                    trigger: S,
                    $data: L,
                    $method: P,
                    $watch: F,
                    $computed: D,
                    get: w,
                    set: y,
                    del: k,
                    observer: b,
                    compile: s
                };
            return function () {
                b(L), P && l(), D && r(), F && o(), a(), R && e.hasRouter ? router.on("complete", function (e) {
                    s()
                }) : s()
            }(), Y
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        function n(t, n) {
            function i(t) {
                var i = n || 750,
                    a = document.head.parentNode,
                    o = t || (h / i * 100).toFixed(2);
                return c = o, e.config.viewport.zoom && (a.style.fontSize = c + "px"), e.trigger.call(e, "viewportinit"), this
            }

            function a(e) {
                return h
            }

            function o(e) {
                return p
            }

            function r(e) {
                return g
            }

            function l(e) {
                return v
            }

            function s(e) {
                return f
            }
            e.trigger.call(e, "viewportbefore");
            var c, u = document.querySelector("meta[name=viewport]"),
                d = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
                f = window.devicePixelRatio,
                h = document.documentElement.clientWidth,
                p = document.documentElement.clientHeight,
                g = parseInt(h) * parseInt(f),
                v = parseInt(p) * parseInt(f);
            if (u) e.config.viewport.create && (u.content = d);
            else {
                var m = document.createElement("meta");
                m.name = "viewport", m.content = d;
                var b = document.head;
                e.config.viewport.create && b.appendChild(m), m = null
            }
            var w = [240, 320, 360, 375, 384, 412, 414, 435, 480, 512, 540, 768, 1024, 1536, 2048, 2732, 534, 854, 750],
                y = [32, 42.67, 48, 50, 51.2, 54.93, 55.2, 58, 64, 68.27, 60, 60, 60, 60, 60, 60, 60, 60, 60],
                x = e.array.index(document.documentElement.clientWidth, w);
            return x > -1 && void 0 === t ? c = y[x] : i(t), {
                width: a,
                height: o,
                fontSize: c,
                screenWidth: r,
                screenHeight: l,
                ratio: s,
                init: i
            }
        }
        e.viewport = n
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.loader = function (i) {
            function o(e) {
                return e = e || {}, k = n.extend({}, k, e), this
            }

            function r(e) {
                if (void 0 === e) return O;
                if ("object" === (void 0 === e ? "undefined" : t(e)) && ("modules" in e || "baseUrl" in e)) O = n.extend(!0, {}, O, e), S = O.modules;
                else if ("object" === (void 0 === e ? "undefined" : t(e)) && "moduleName" in e) {
                    var i = l(e);
                    S[e.moduleName] = i || {}, O = n.extend(!0, {}, O, {
                        modules: S
                    }), S = O.modules
                }
                return O
            }

            function l(e) {
                var t = {
                        id: "",
                        moduleName: "",
                        template: "",
                        data: null,
                        depend: [],
                        script: "",
                        style: [],
                        isDefined: !1,
                        isLoaded: !1,
                        beforeCreate: null,
                        created: null,
                        beforeLoad: null,
                        loaded: null,
                        beforeDestroy: null,
                        destroyed: null,
                        exports: {},
                        dependExports: []
                    },
                    i = {};
                return e.moduleName in S && (i = S[e.moduleName]), n.extend(!0, {}, t, i, e)
            }

            function s(t) {
                k.trace && console.log("destroy", t);
                var i = "string" == typeof t ? S[t] : null;
                if (i) {
                    i.beforeDestroy && i.beforeDestroy.call(i);
                    var a = n('script[name="' + t + '"]').attr("src");
                    C = e.array.remove(a, C), n('script[name="' + t + '"]').remove(), delete O.modules[t], S = O.modules, i.destroyed && i.destroyed.call(i)
                }
            }

            function c(t, i, a) {
                var o = {
                        moduleName: "",
                        template: "",
                        data: null,
                        depend: [],
                        beforeCreate: null,
                        created: null,
                        beforeLoad: null,
                        loaded: null,
                        beforeDestroy: null,
                        destroyed: null
                    },
                    l = {},
                    s = "";
                try {
                    var c = u(),
                        f = c.name
                } catch (e) {}
                var h = [],
                    p = [];
                if (void 0 === t) return e.showLog("define第1个参数不能为空"), this;
                "function" == typeof t ? (a = t, s = f, i = []) : "object" === e.typeof(t) ? (s = f, i = t.depend || [], a = t.loaded, l = n.extend(!0, {}, o, t)) : "array" === e.typeof(t) ? (a = i, i = t, s = f) : "function" == typeof i ? (s = t, a = i, i = []) : (s = t, i = i, a = a);
                var g = s in S ? S[s].script || c.src : c.src;
                if (k.trace && console.log("define", s), i.length)
                    for (var v = 0; v < i.length; v++) {
                        var m = i[v];
                        m.indexOf(".css") > -1 ? m.indexOf("css!") > -1 ? p.push(m.substr(4)) : p.push(m) : (h.push(m), m in S || r({
                            moduleName: m
                        }))
                    }
                if ("string" == typeof s && "function" == typeof a) {
                    var b = function () {
                        var e = [d, S[f].exports, S[f]],
                            t = [];
                        h.length && h.forEach(function (e, n) {
                            t.push(S[e].exports)
                        });
                        var n = t.concat(e);
                        return a && a.apply(this, n)
                    };
                    l = t && "object" === e.typeof(t) ? n.extend(!0, {}, o, t) : n.extend(!0, {}, o), l.moduleName = s, l.depend = h, l.style = p, l.script = g, l.loaded = b, r(l)
                } else e.showLog("define " + s + "模块的参数格式不对");
                return this
            }

            function u() {
                var e, t, i = window.location.href,
                    o = [],
                    r = document.currentScript;
                if (i.indexOf("#") > -1 ? o = i.split("#") : o.push(i), y = o[0].replace("/index.html", "") + "/", r) return e = r.src.replace(y, ""), t = r.getAttribute("name") || e.substr("0", e.indexOf(k.scriptSuffix)), {
                    name: t,
                    src: e
                };
                try {
                    a()
                } catch (e) {
                    var l = e.stack || e.sourceURL || e.stacktrace || "",
                        s = l.split(/[@ ]/g).pop(),
                        c = s.replace(/(:\d+)?:\d+$/i, ""),
                        c = c.replace(new RegExp(y, "g"), "");
                    return r = n('script[src="' + c + '"]')[0], t = r ? r.getAttribute("name") : c.replace(k.scriptSuffix, ""), {
                        name: t,
                        src: c
                    }
                }
            }

            function d(t, n) {
                k.trace && console.log("require", t);
                var i = {};
                if (t && "string" == typeof t && (t = [t]), n && "function" != typeof n) return e.showLog("require第2个参数格式为function", "bui.loader.require"), i;
                try {
                    f(t, function () {
                        if (p(T)) {
                            var e = [];
                            t.forEach(function (i, a) {
                                h(i), e.push(S[i] && S[i].exports), a === t.length - 1 && n && n.apply(j, e || [])
                            })
                        }
                    })
                } catch (t) {
                    e.showLog(t, "bui.loader.require")
                }
                return this
            }

            function f(t, n) {
                function i(e, i) {
                    var a = S[e];
                    a.beforeLoad && a.beforeLoad.call(a, a.depend), a && a.depend && a.depend.length && f(a.depend, n), a && (a.isDefined = !0), i == t.length - 1 && n && n.apply(a)
                }
                return t = t || [], S = O.modules, t.forEach(function (a, o) {
                    var r = S[a];
                    S[a] && S[a].style && S[a] && S[a].style.length && b(S[a].style), e.array.compare(a, T) || T.unshift(a), r && r.isLoaded ? o == t.length - 1 && (n && n.apply(r), T = []) : r && r.loaded && !r.script ? (S[a].beforeCreate && S[a].beforeCreate.call(S[a]), S[a].created && S[a].created.call(S[a]), i(a, o)) : m(a, function () {
                        var e = S[a];
                        e.beforeCreate && e.beforeCreate.call(S[a]), e && e.style && e.style.length && b(e.style), e.created && e.created.call(S[a]), i(a, o)
                    }, function () {
                        o == t.length - 1 && (n && n.apply(null), T = [])
                    })
                }), T
            }

            function h(t) {
                S = O.modules;
                var n = "string" == typeof t ? S[t] || {} : t,
                    i = n.depend || [],
                    a = null,
                    o = [];
                n.dependExports = [];
                try {
                    if (i.length)
                        for (var r = 0; r < i.length; r++) {
                            var l = i[r],
                                s = S[l];
                            s.isLoaded ? o[r] = s.exports : o[r] = h(s) || s.exports, s.exports = o[r], n.dependExports.push(o[r]), s.isLoaded = !0
                        }
                    a = n.isLoaded ? n.exports : n.loaded && n.loaded.apply(n, o), n.exports = a || S[n.moduleName] && S[n.moduleName].exports, n.isLoaded = !0, k.trace && console.log("execute", n.moduleName)
                } catch (t) {
                    e.showLog(t, "bui.loader.execute")
                }
                return a
            }

            function p(e) {
                var t = !0,
                    n = e || [];
                if (S = O.modules, n.length) n.forEach(function (e, n) {
                    S[e] && !1 === S[e].isDefined && (t = !1)
                });
                else
                    for (var i in S) S[i] && !1 === S[i].isDefined && (t = !1);
                return t
            }

            function g(t) {
                var n = !0,
                    i = [];
                if (S = O.modules, "string" == typeof t) {
                    t.indexOf(",") > -1 ? i = t.split(",") : i.push(t)
                } else t && "array" === e.typeof(t) && (i = t || []); if (i.length) i.forEach(function (e, t) {
                    e in S || (n = !1), S[e] && !1 === S[e].isLoaded && (n = !1)
                });
                else
                    for (var a in S) S[a] && !1 === S[a].isLoaded && (n = !1);
                return n
            }

            function v(t, n, i) {
                return "string" == typeof t ? t.indexOf(".css") > -1 ? (w(item), n && n(t)) : m(t, n, i) : t && "array" === e.typeof(t) && t.forEach(function (e, a) {
                    e.indexOf(".css") > -1 ? (w(e), a == t.length - 1 && n && n(t)) : a == t.length - 1 ? m(e, n, i) : m(e)
                }), this
            }

            function m(t, i, a) {
                var o, r = this;
                if (S = O.modules, void 0 === t || "" == t) return a && a.call(r, t), this;
                if (t in S) o = t, t = S[t].script || o + k.scriptSuffix;
                else {
                    var l = t.indexOf(k.scriptSuffix);
                    l > -1 ? (t = t, o = t.substr(0, l)) : (o = t, t += k.scriptSuffix)
                }
                var s = document.createElement("script") || {},
                    c = k.cache ? "" : "?t=" + (new Date).getTime(),
                    u = t.indexOf("http://") > -1 || t.indexOf("https://") > -1;
                s.type = "text/javascript", s.async = k.async, s.src = u ? t + c : O.baseUrl + t + c, s.setAttribute("name", o), s.onload = function () {
                    k.trace && console.log("create", t), i && i(t)
                }, s.onerror = function (e) {
                    k.trace && console.log("createError", t), a && a(t)
                };
                var d = e.array.index(t, C),
                    f = n('script[name="' + o + '"]').length || n('script[src="' + t + '"]').length;
                return d > -1 || f ? i && i(t) : d < 0 && (document.body && document.body.appendChild(s), C.push(t)), s = null, this
            }

            function b(t) {
                var n, i = t.length;
                if ("array" === e.typeof(t))
                    for (n = 0; n < i; n++) {
                        var a = t[n];
                        w(a)
                    } else w(t)
            }

            function w(t) {
                if ("string" != typeof t) return void e.showLog(t + "的格式不正确");
                if (e.array.index(t, I) < 0) {
                    var n = document.createElement("link") || {};
                    n.href = t + (k.cache ? "" : "?t=" + (new Date).getTime()), n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), document.head && document.head.appendChild(n), n = null, I.push(t)
                }
            }
            var y, x = {
                    cache: !0,
                    async: !1,
                    trace: !1,
                    scriptSuffix: ".js"
                },
                k = n.extend({}, x, e.config.loader, i),
                T = [],
                C = [],
                I = [],
                O = {
                    baseUrl: "",
                    modules: {}
                },
                S = {},
                j = {
                    init: o,
                    define: c,
                    require: d,
                    destroy: s,
                    map: r,
                    import: v,
                    checkLoad: g,
                    checkDefine: p
                };
            return j
        }
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.router = function (i) {
            function a(t) {
                if (t = n.extend(!0, {}, Y, e.config.router, t), Y = ve.config = t, e.hasRouter = !0, pe = !0, "pages/main/main.html" === t.indexModule.template && "pages/main/main.js" === t.indexModule.script || (de = loader.map(t.indexModule)), ee && "effect" in t && ie.forEach(function (e, n) {
                    e.effect = t.effect
                }), !t.id) return e.showLog("id 不能为空", "bui.router.init"), !1;
                if (A = e.objId(t.id), V = bui.mask({
                    appendTo: A,
                    opacity: 0,
                    autoClose: !1
                }), H = e.loading({
                    display: "block",
                    width: 30,
                    height: 30,
                    opacity: 0
                }), q = window.viewport.width() || document.documentElement.clientWidth, U = t.height || window.viewport.height() || document.documentElement.clientHeight, K = A.children(".bui-router-main"), K.length) K.css({
                    width: q,
                    height: U
                });
                else {
                    var i = O(t);
                    A.html(i), K = A.children(".bui-router-main")
                }
                return $ || r(t), P.call(this, "init", {
                    target: A[0]
                }), this
            }

            function o() {
                var e = he.get("hasCache", 0);
                Boolean(e) && Y.reloadCache ? ce.load() : l()
            }

            function r(t) {
                return e.isWebapp ? window.addEventListener("load", function () {
                    o()
                }, !1) : e.on("pageready", function () {
                    o()
                }), window.addEventListener("beforeunload", function (e) {
                    Y.reloadCache && ce.save(), P.call(_, "beforeunload", {
                        target: ie[ie.length - 1]
                    })
                }), Y.syncHistory && "pushState" in window.history && window.addEventListener("popstate", function (t) {
                    var n = s(),
                        i = "" == n.pid ? Y.indexModule.moduleName : n.pid,
                        a = g(i);
                    e.array.index(i, ie, "pid") > -1 ? (h({
                        index: a,
                        param: n.param
                    }), P.call(_, "popstate", {
                        type: "back",
                        prevTarget: ie[a - 1],
                        target: ie[a]
                    })) : (u({
                        url: i,
                        param: n.param
                    }), P.call(_, "popstate", {
                        type: "load",
                        prevTarget: ie[ie.length - 2],
                        target: ie[ie.length - 1]
                    }))
                }), this
            }

            function l(t) {
                try {
                    var n = s();
                    if (n.pid) {
                        if (n.pid.indexOf("http://") > -1 || n.pid.indexOf("https://") > -1) return void u({
                            url: n.pid,
                            param: n.param,
                            iframe: !0
                        });
                        u({
                            url: n.pid,
                            param: n.param
                        })
                    } else u({
                        url: Y.indexModule.moduleName,
                        param: n.param || {}
                    })
                } catch (t) {
                    e.showLog(t, "bui.router.loadUrl")
                }
            }

            function s(e) {
                var t = window.location.hash || window.location.search,
                    e = 0 != e,
                    n = t && t.indexOf("?"),
                    i = n > -1 ? t && t.substr(1, n - 1) : window.location.hash.substr(1),
                    a = i && i.indexOf(".html"),
                    o = a > -1 ? i.substr(0, a) : i,
                    r = a > -1 ? i : i + ".html",
                    l = {};
                if (n > -1)
                    for (var s = t && t.substr(n + 1), c = s && s.split("&"), u = 0; u < c.length; u++) {
                        var d = e ? decodeURIComponent(c[u].split("=")[1]) : c[u].split("=")[1];
                        l[c[u].split("=")[0]] = d
                    }
                return {
                    pid: o,
                    url: r,
                    param: l
                }
            }

            function c(t) {
                var i = n.Deferred(),
                    a = function (n, a) {
                        return v(n.url, function (i) {
                            var o = e.guid(),
                                r = f(n.url),
                                l = r.pid,
                                s = (j({
                                    id: o,
                                    content: i,
                                    pid: l
                                }), []);
                            ce.add(l, {
                                id: o,
                                pid: l,
                                template: i
                            }), s.push(l), n.style && "array" === e.typeof(n.style) ? n.style.forEach(function (e, t) {
                                s.push(e)
                            }) : n.style && "string" === e.typeof(n.style) && s.push(n.style), n.script && "array" === e.typeof(n.script) ? n.script.forEach(function (e, t) {
                                s.push(e)
                            }) : n.script && "string" === e.typeof(n.script) && s.push(n.script), loader.import(s, function () {
                                P.call(ve, "preloadafter", {
                                    prevTarget: null,
                                    target: null
                                }), a && a(t)
                            }, function () {
                                P.call(ve, "preloadafter", {
                                    prevTarget: null,
                                    target: null
                                }), a && a(t)
                            })
                        }, function (t) {
                            e.showLog(n.url + "请求失败"), i.reject(n.url)
                        }), i.promise()
                    };
                return t && "object" === e.typeof(t) ? "url" in t && a(t, function () {
                    i.resolve(t)
                }) : t && "array" === e.typeof(t) && t.forEach(function (e, n) {
                    n == t.length - 1 ? "url" in e && a(e, function () {
                        i.resolve(t)
                    }) : "url" in e && a(e)
                }), i
            }

            function u(t) {
                function i(e) {
                    V && V.hide(), d.progress && H && H.hide(), ae.removeLast(), h.reject(e)
                }

                function a() {
                    G || y in ne ? (s({
                        pid: y
                    }), le && r()) : (loader.checkLoad(y) ? s({
                        pid: y
                    }) : loader.require(y, function (t) {
                        try {
                            d.firstAnimate && d.progress && H && H.hide(), ne[y] = t || null, h.resolve(t)
                        } catch (t) {
                            e.showLog(t, "bui.router.load"), h.reject()
                        }
                    }), d.callback && d.callback({
                        prevTarget: p,
                        target: k
                    }), P.call(ve, "complete", {
                        prevTarget: p,
                        target: k
                    }))
                }

                function o() {
                    B = e.objId(O.id);
                    var t = B.find(".bui-page");
                    t.length && Y.autoInit && e.init({
                        id: t,
                        height: U
                    })
                }

                function r(t) {
                    C(), I(), B = e.objId(m);
                    try {
                        Q || G || d.replace || d.part ? (!d.firstAnimate && d.progress && H && H.hide(), t && t(), V && V.hide(), B.css("zIndex", 5), P.call(ve, "pageshow", {
                            target: ae.getLast()
                        })) : (J && J.hide(), X && X.show(function () {
                            !d.firstAnimate && d.progress && H && H.hide(), t && t(), B.css("zIndex", 5), V && V.hide(), P.call(ve, "pagehide", {
                                target: ie[ie.length - 2]
                            }), P.call(ve, "pageshow", {
                                target: ae.getLast()
                            })
                        }))
                    } catch (t) {
                        e.showLog(t, "bui.router.doAnimate")
                    }
                }

                function l(t) {
                    var n = "";
                    if (d.part) n = E({
                        content: t
                    }), d.id ? b.html(n) : e.showLog("id 不能为空", "router.loadPart");
                    else if (d.replace) {
                        var i = ae.getLast();
                        b = ie.length ? e.objId(i.id) : K, i.pid = y, i.url = x, i.param = g;
                        e.array.index(y, ie, "pid");
                        n = y in oe ? ce.get(y, "template") : E({
                            content: t
                        }), b.html(n).attr("data-page", y)
                    } else G || (n = j({
                        id: m,
                        content: t,
                        pid: y
                    }), K && K.attr("data-main", m).append(n));
                    return n
                }

                function s(e) {
                    var t = e || ae.getLast(),
                        n = fe[t.pid] && fe[t.pid] || {},
                        i = n.loaded,
                        a = i && i.apply(n, n.dependExports) || n.exports;
                    ne[t.pid] = a || null, n.exports = a, G = !1, Q = !1, P.call(ve, "refresh", {
                        prevTarget: p,
                        target: t
                    }), V && V.hide(), Y.progress && H && H.hide(), h.resolve(a)
                }

                function c() {
                    var e = ie[ie.length - 2] || null,
                        t = ae.getLast();
                    Q && (P.call(ve, "firstload", {
                        prevTarget: e,
                        target: t
                    }), Q = !1), d.part ? P.call(ve, "loadpart", {
                        prevTarget: e,
                        target: t
                    }) : P.call(ve, "load", {
                        prevTarget: e,
                        target: t
                    })
                }
                var u = {
                        id: "",
                        url: "",
                        param: {},
                        effect: "",
                        firstAnimate: Y.firstAnimate,
                        progress: Y.progress,
                        reload: Y.reload,
                        replace: !1,
                        iframe: !1,
                        part: !1,
                        cache: Y.cache,
                        callback: null
                    },
                    d = n.extend(!0, {}, u, t),
                    h = n.Deferred(),
                    p = ae.getLast() || null,
                    g = (ie[ie.length - 2], d.param || {});
                d.id = (d.id && d.id.indexOf("#") > -1 ? d.id.substr(1) : d.id) || "";
                var m = d.replace ? p.id : d.id || e.guid(),
                    b = e.objId(m);
                if (!d.url) return e.showLog("url 不能为空", "bui.router.load"), h.promise();
                if (d.url.indexOf("tel:") >= 0 || d.url.indexOf("mailto:") >= 0 || d.url.indexOf("sms:") >= 0) return e.unit.openExtral(d.url), h.promise();
                "undefined" == d.url && (d.url = "main"), V && V.show(), d.progress && H && H.show();
                var w = f(d.url),
                    y = w.pid,
                    x = d.iframe ? d.url : w.url,
                    k = {
                        id: m,
                        pid: y,
                        url: x,
                        replace: d.replace,
                        param: g,
                        part: {},
                        effect: t.effect || Y.effect
                    };
                if (loader.map({
                    moduleName: y,
                    id: m
                }), P.call(ve, "loadbefore", {
                    prevTarget: p,
                    target: k
                }), P.call(ve, "beforeload", {
                    prevTarget: p,
                    target: k
                }), ie.length) {
                    var T = ie.length - 1;
                    ie[T].effect = d.effect
                }!G && !d.part && !d.replace && ae.add(k), d.replace && ae.replace(k);
                var O = ae.getLast();
                if (d.part && (O.part[y] = {
                    id: m,
                    pid: y,
                    url: x,
                    param: g
                }, ie.splice(ie.length - 1, 1, O)), d.part || (se = k), y in oe)! function (e) {
                    l(ce.get(e.pid, "template")), e.part ? s(e) : (o(), !G && r(function () {
                        e.progress && H && H.hide()
                    }), s(e))
                }({
                    pid: y,
                    progress: d.progress,
                    part: d.part
                }), d.callback && d.callback({
                    prevTarget: p,
                    target: k
                }), P.call(ve, "complete", {
                    prevTarget: p,
                    target: k
                });
                else {
                    if (d.iframe) return function (e) {
                        var t = S({
                            id: e.id,
                            pid: e.pid,
                            url: e.url,
                            param: e.param
                        });
                        K && K.attr("data-main", e.id).append(t), r(function () {
                            d.progress && H && H.hide()
                        })
                    }({
                        id: m,
                        pid: y,
                        url: d.url,
                        param: g
                    }), h.promise();
                    if (d.part) return function () {
                        v(x, function (t, n, i) {
                            e.objId(m).html(t), a(), c(), d.cache && ce.add(y, {
                                id: m,
                                pid: y,
                                template: t
                            }), V && V.hide(), d.progress && H && H.hide()
                        }, function (e, t, n) {
                            i(x), P.call(ve, "loadfail", e, t, n)
                        })
                    }(), h.promise();
                    if (d.firstAnimate) return function () {
                        var t = j({
                            id: m,
                            content: "",
                            pid: y
                        });
                        K && K.attr("data-main", m).append(t), r(function () {
                            v(x, function (t, n, i) {
                                e.objId(m).html(t), o(), a(), c(), d.cache && (j({
                                    id: m,
                                    content: t,
                                    pid: y
                                }), ce.add(y, {
                                    id: m,
                                    pid: y,
                                    template: t
                                })), ue.add(y, {
                                    id: m,
                                    pid: y,
                                    param: g
                                })
                            }, function (e, t, n) {
                                i(x), P.call(ve, "loadfail", e, t, n)
                            })
                        })
                    }(), h.promise();
                    ! function () {
                        v(x, function (e, t, n) {
                            l(e), d.cache && ce.add(y, {
                                id: m,
                                pid: y,
                                template: e
                            }), o(), r(function () {
                                d.progress && H && H.hide()
                            }), a(), c(), ue.add(y, {
                                id: m,
                                pid: y,
                                param: g
                            })
                        }, function (e, t, n) {
                            i(x), P.call(ve, "loadfail", e, t, n)
                        })
                    }()
                }
                return h.promise()
            }

            function d(e) {
                var t = {
                    id: "",
                    url: "",
                    param: {},
                    part: !0
                };
                return u(n.extend(!0, {}, t, e)).promise()
            }

            function f(e) {
                var t = "",
                    n = e;
                de = loader.map(), fe = de.modules;
                var i = n.indexOf(Y.pageSuffix);
                return i > -1 ? (t = n, (n = t.substr(0, i)) in fe || (n = k(t) || n)) : (n = n, t = fe[n] && fe[n].template || n + Y.pageSuffix || ""), {
                    pid: n,
                    url: t
                }
            }

            function h(t) {
                var i = this,
                    t = t || {},
                    a = n.extend(!0, {
                        index: -1,
                        name: "",
                        callback: null
                    }, t),
                    o = parseInt(a.index),
                    r = ie.length;
                if (de = loader.map(), fe = de.modules, o > 0) return void e.showLog("index 参数只能是负数", "bui.router.back");
                var l = ae.getLast(),
                    s = r - 1;
                return P.call(ve, "backbefore", {
                    prevTarget: null,
                    target: l
                }), P.call(ve, "beforeback", {
                    prevTarget: null,
                    target: l
                }), a.name && (o = g(a.name)), Math.abs(o) > s && (o = -s), r > 1 && Z && (o < -1 && I(o), Z = !1, t.effect && (J.option({
                    effect: t.effect
                }), X.option({
                    effect: t.effect
                })), J && J.show(), X && X.hide(function () {
                    var t = r + o;
                    T(t), ae.removeNext(t), I();
                    var n = C(),
                        s = n.pid;
                    e.objId(n.id).css("zIndex", 5),
                        function () {
                            var e = {};
                            e = ne[s] || {}, a.callback && a.callback.call(i, e, n), P.call(ve, "back", {
                                prevTarget: l,
                                target: n
                            }), se = n, P.call(ve, "pageshow", {
                                target: n
                            }), P.call(ve, "pagehide", {
                                target: l
                            }), Z = !0
                        }(), Y.cache || p(l.pid)
                })), this
            }

            function p(t) {
                return "string" == typeof t && "main" !== t ? (loader.destroy(t), ce.del(t), t in ne && delete ne[t]) : e.showLog("参数只能是字符串"), this
            }

            function g(t) {
                var n, i = e.array.indexs(t, ie, "pid"),
                    a = i.length;
                if (a) {
                    var o = -(ie.length - i[a - 1] - 1);
                    n = 0 == o ? -1 : o
                } else n = -1;
                return n
            }

            function v(t, i, a) {
                if ("string" == typeof t) n.ajax({
                    url: t,
                    dataType: "html",
                    async: Y.async,
                    success: function (e, n, a) {
                        a.url = t, i && i(e, n, a), P.call(ve, "success", e, n, a)
                    }, error: function (e, t, n) {
                        a && a(e, t, n), P.call(ve, "fail", e, t, n)
                    }
                });
                else if ("function" == typeof t) {
                    var o = t && t();
                    i && i(o, 200, {}), P.call(ve, "success", o, 200, {})
                } else e.showLog("url 不能为空", "bui.router.requestUrl")
            }

            function m() {
                G = !0;
                var e = ie.length - 1,
                    t = ie[e];
                return u({
                    id: t.id,
                    url: t.pid,
                    param: t.param
                }), this
            }

            function b(e) {
                return e = e || {}, u({
                    url: e.url || "",
                    param: e.param || {}, replace: !0
                }), this
            }

            function w() {
                return ae.getLast().param
            }

            function y(t) {
                if (void 0 === t) return void e.showLog("必须传模块id才能获取参数,可以通过define的module参数获取");
                var n = ae.getLast(),
                    i = null,
                    a = t in n.part ? n.part[t] : {};
                return "param" in a && (i = a.param), i
            }

            function x(e) {
                var t;
                return e && (t = e in ne), t
            }

            function k(t) {
                for (var n in fe) try {
                    if ((fe[n].template || "") === t) return n
                } catch (t) {
                    e.showLog(t.message)
                }
            }

            function T(e) {
                K.children().each(function (t, i) {
                    t >= e && n(i).remove()
                })
            }

            function C() {
                var t = ae.getLast(),
                    n = t.id || "",
                    i = t.effect || Y.effect;
                return n && (P.call(ve, "beforepageshow", {
                    target: t
                }), X = null, X = e.toggle({
                    id: document.getElementById(n),
                    effect: te[i].inRight || ""
                }), K && K.attr("data-main", n)), t
            }

            function I(t) {
                t = t || -1;
                var n = ie.length + t - 1,
                    i = ie[n],
                    a = i && i.id || "",
                    o = i && i.effect || Y.effect;
                return a && (P.call(ve, "beforepagehide", {
                    target: i
                }), J = null, J = e.toggle({
                    id: document.getElementById(a),
                    effect: te[o].inLeft || ""
                })), i
            }

            function O(e) {
                e = e || {};
                var t = "";
                return t += '<div class="bui-router-main" style="width:' + q + "px;height:" + U + 'px;">', t += "</div>"
            }

            function S(t) {
                var n = t.param ? e.setUrlParams(t.url, t.param) : t.url,
                    i = "";
                return i += '<div id="' + t.id + '" class="bui-router-item" data-page="' + t.pid + '">', i += '<iframe class="bui-router-iframe" src="' + n + '"></iframe>', i += "</div>"
            }

            function j(e) {
                var t = "";
                return t += '<div id="' + e.id + '" class="bui-router-item" data-page="' + e.pid + '">', t += e.content || "", t += "</div>"
            }

            function E(e) {
                var t = "";
                return t += e.content
            }

            function L(t, n) {
                return ee = !0, e.option.call(ve, t, n)
            }

            function N(t, n) {
                return e.on.apply(ve, arguments), this
            }

            function D(t, n) {
                return e.off.apply(ve, arguments), this
            }

            function P(t) {
                ve.self = this == window || this == ve ? null : this, e.trigger.apply(ve, arguments)
            }

            function F() {
                return se
            }

            function R(e) {
                return document.getElementById(se.id)
            }

            function M(e) {
                return se.id
            }

            function z(i) {
                var a = ae.getLast(),
                    o = e.objId(a.id),
                    r = "object" === (void 0 === i ? "undefined" : t(i)) ? n(i) : o.find(".bui-page");
                return r.length && e.init({
                    id: r,
                    height: U
                }), this
            }
            var A, H, V, q, U, W = {
                    id: "",
                    progress: !1,
                    syncHistory: !0,
                    autoInit: !0,
                    firstAnimate: !1,
                    indexModule: {
                        moduleName: "main",
                        template: "pages/main/main.html",
                        script: "pages/main/main.js"
                    },
                    cache: !0,
                    reloadCache: !1,
                    reload: !1,
                    useScroll: ".bui-scroll-x",
                    height: 0,
                    async: !0,
                    effect: "push",
                    hashPrefix: "#",
                    scriptSuffix: ".js",
                    pageSuffix: ".html"
                },
                Y = n.extend({}, W, e.config.router, i),
                B = null,
                _ = this,
                K = null,
                J = null,
                X = null,
                $ = !1,
                Q = !0,
                Z = !0,
                G = !1,
                ee = !1,
                te = {
                    none: {
                        inRight: "showIn",
                        inLeft: "showIn"
                    },
                    fadein: {
                        inRight: "fadeIn",
                        inLeft: "fadeIn"
                    },
                    fadeinslide: {
                        inRight: "fadeInRight",
                        inLeft: "fadeInLeft"
                    },
                    slide: {
                        inRight: "slideInRight",
                        inLeft: "slideInLeft"
                    },
                    push: {
                        inRight: "pushInRight",
                        inLeft: "pushInLeft"
                    },
                    zoom: {
                        inRight: "zoomIn",
                        inLeft: "zoomIn"
                    },
                    cover: {
                        inRight: "coverInRight",
                        inLeft: "coverInLeft"
                    },
                    zoomslide: {
                        inRight: "zoomSlideInRight",
                        inLeft: "zoomSlideInLeft"
                    },
                    fadeinslideback: {
                        inRight: "fadeInLeft",
                        inLeft: "fadeInRight"
                    },
                    slideback: {
                        inRight: "slideInLeft",
                        inLeft: "slideInRight"
                    },
                    pushback: {
                        inRight: "pushInLeft",
                        inLeft: "pushInRight"
                    },
                    coverback: {
                        inRight: "coverInLeft",
                        inLeft: "coverInRight"
                    },
                    zoomslideback: {
                        inRight: "zoomSlideInLeft",
                        inLeft: "zoomSlideInRight"
                    }
                },
                ne = {},
                ie = [],
                ae = {},
                oe = {},
                re = {},
                le = !1,
                se = {},
                ce = {},
                ue = {},
                de = loader.map(Y.indexModule),
                fe = de.modules,
                he = e.storage({
                    local: !1
                }),
                pe = !1;
            ae.get = function () {
                return ie
            }, ae.add = function (t) {
                t = t || {};
                var n = window.location.origin + window.location.pathname + "#" + t.pid,
                    i = e.setUrlParams(n, t.param);
                if (ie.push(t), !Q) return Y.syncHistory && "pushState" in window.history && window.history.pushState(t, null, i), ie
            }, ae.prepend = function (t) {
                t = t || {};
                var n = window.location.origin + window.location.pathname + "#" + t.pid;
                e.setUrlParams(n, t.param);
                return ie.unshift(t), ie
            }, ae.replace = function (t) {
                t = t || {};
                var n = ie.length - 1,
                    i = window.location.origin + window.location.pathname + "#" + t.pid,
                    a = e.setUrlParams(i, t.param);
                return n > -1 && (ie.splice(n, 1, t), Y.syncHistory && "replaceState" in window.history && window.history.replaceState(t, null, a)), ie
            }, ae.getLast = function (e) {
                var t = ie.length - 1,
                    n = ie[t] || {};
                return e ? n[e] : n
            }, ae.removeNext = function (t) {
                var n = ie.length - t;
                ie.splice(t, n);
                var i = ae.getLast(),
                    a = window.location.origin + window.location.pathname + "#" + i.pid,
                    o = e.setUrlParams(a, i.param);
                Y.syncHistory && "replaceState" in window.history && window.history.replaceState(i.param, null, o)
            }, ae.removeLast = function () {
                var e = ie.length - 1;
                ae.removeNext(e)
            }, ce.add = function (e, t) {
                return oe[e] = t || {}, oe[e]
            }, ce.del = function (e) {
                delete oe[e]
            }, ce.get = function (e, t) {
                if (t) {
                    return (oe[e] || {})[t]
                }
                return oe[e]
            }, ce.save = function () {
                if (ie.length > 1) {
                    var e = A.html();
                    he.set("cacheHtml", e), he.set("cacheHistory", ie), he.set("hasCache", "true")
                }
            }, ce.load = function () {
                var t = he.get("cacheHtml", 0),
                    n = he.get("cacheHistory", 0),
                    i = [];
                if (n.length > 1) {
                    A.html(t), K = A.children(".bui-router-main");
                    try {
                        n.forEach(function (e, t) {
                            var n = "string" == typeof e ? JSON.parse(e) : e;
                            i.push(n)
                        });
                        var a = i[i.length - 1];
                        se = a,
                            loader.require(a.pid, function (e) {
                                ne[a.pid] = e || null
                            }), N("back", function (e) {
                                loader.require(e.target.pid, function (t) {
                                    ne[e.target.pid] = t || null
                                })
                            })
                    } catch (t) {
                        e.showLog(t)
                    }
                    ie = i, C(), I(), Q = !1, le = !0, ce.clear()
                }
            }, ce.clear = function () {
                he.remove("cacheHistory"), he.remove("cacheHtml"), he.remove("hasCache")
            }, ue.add = function (e, t) {
                return re[e] = t || {}, re[e]
            }, ue.get = function (e, t) {
                if (t) {
                    return (re[e] || {})[t]
                }
                return re[e]
            };
            var ge = function (t) {
                    var n = document.getElementById(se.id) || document;
                    return e.obj(t, n)
                },
                ve = {
                    init: a,
                    option: L,
                    data: {},
                    on: N,
                    off: D,
                    load: u,
                    destroy: p,
                    loadPart: d,
                    replace: b,
                    refresh: m,
                    back: h,
                    isLoad: x,
                    $: ge,
                    currentId: M,
                    currentPage: R,
                    currentModule: F,
                    getPageParams: w,
                    getPartParams: y,
                    getHistory: ae.get,
                    preload: c,
                    initScroll: z,
                    history: {
                        get: ae.get,
                        getLast: ae.getLast
                    }
                };
            return ve
        }
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.setUrlParams = function (n, i, a) {
            var a = 0 != a,
                i = "object" == (void 0 === i ? "undefined" : t(i)) ? i : {},
                o = e.unit.objectToKeyString(i, a);
            return "" == o ? n : n + "?" + o
        }, e.getUrlParams = function (t) {
            var t = 0 != t,
                n = window.location.search,
                i = {};
            if (n.indexOf("?") > -1) {
                var a = n.substr(1);
                i = e.unit.keyStringToObject(a, t)
            }
            return i
        }, e.getUrlParam = function (e) {
            var t = window.location.search,
                n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                i = t.substr(1).match(n);
            return null != i ? decodeURIComponent(i[2]) : null
        }, e.typeof = function (e) {
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return t = t.toLowerCase()
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.array = {}, e.array.index = e.inArray = function (t, n, i) {
            var n = n || [];
            if ("string" != typeof i) {
                return n.indexOf(t)
            }
            for (var a in n) try {
                if ((n[a] && n[a][i]) === t) return parseInt(a)
            } catch (t) {
                e.showLog(t.message, "bui.inArray")
            }
            return -1
        }, e.array.compare = e.compareArray = function (e, t, n) {
            var t = t || [];
            if ("string" != typeof n) {
                return t.indexOf(e) > -1
            }
            for (var i in t) try {
                if ((t[i] && t[i][n]) === e) return !0
            } catch (e) {}
            return !1
        }, e.array.remove = e.removeArray = function (e, t, n) {
            var i = t || [];
            return i.map(function (t, a) {
                try {
                    ("string" == typeof n || "number" == typeof n ? t[n] : t) === e && i.splice(a, 1)
                } catch (e) {}
            }), i
        }, e.array.filter = e.filterArray = function (e, t, n) {
            var i = [],
                t = t || [];
            if ("string" == typeof n)
                for (var a in t) try {
                    var o = t[a] && t[a][n],
                        r = new RegExp(e);
                    r.test(o) && i.push(t[a])
                } catch (e) {} else t.map(function (n, a, o) {
                    return new RegExp(e).test(n) && i.push(t[a]), n === e
                });
            return i
        }, e.array.indexs = e.indexArray = function (e, t, n) {
            var t = t || [],
                i = [];
            if ("string" == typeof n)
                for (var a in t) try {
                    var o = t[a] && t[a][n];
                    o === e && i.push(+a)
                } catch (e) {} else t.forEach(function (t, n, a) {
                    t === e && i.push(+n)
                });
            return i
        }, e.array.excess = e.excessArray = function (e, t, n) {
            var t = t || [],
                i = {},
                a = [];
            if ("string" == typeof n)
                for (var o in t) try {
                    var r = t[o] && t[o][n];
                    i[r] !== r && (i[r] = r, a.push(t[o]))
                } catch (e) {} else t.forEach(function (e, t, n) {
                    i[e] !== e && (i[e] = e, a.push(e))
                });
            return a
        }, e.array.copy = e.copyArray = function (t, n, i) {
            var a = [];
            if (form = n || 0, i = i || t && t.length, !t || "array" === e.typeof(t)) {
                t.forEach(function (e, t) {
                    a.push(e)
                });
                return a.splice(n, i) || []
            }
        }
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.storage = function (n) {
            function i(t, n, i) {
                var a = 1 == l ? null : d.getItem(t),
                    o = [],
                    r = "",
                    s = i ? n[i] : n;
                if (null === a) {
                    o.push(n), r = JSON.stringify(o);
                    try {
                        d.setItem(t, r)
                    } catch (e) {
                        "QuotaExceededError" == e.name && console.log("超出本地存储限额！")
                    }
                } else {
                    var c = JSON.parse(a);
                    if (i ? e.array.compare(s, c, i) : e.array.compare(s, c)) {
                        e.array.remove(s, c, i), c[u](n);
                        try {
                            r = JSON.stringify(c), d.setItem(t, r)
                        } catch (e) {
                            "QuotaExceededError" == e.name && console.log("超出本地存储限额！")
                        }
                    } else {
                        c[u](n), c.length > l && 0 != l && c.pop();
                        try {
                            r = JSON.stringify(c), d.setItem(t, r)
                        } catch (e) {
                            "QuotaExceededError" == e.name && console.log("超出本地存储限额！")
                        }
                    }
                }
                return this
            }

            function a(t, n, i) {
                var a, o = d.getItem(t) || "";
                try {
                    a = o && e.unit.stringToJson(o)
                } catch (t) {
                    a = o, e.showLog(t.name + ": " + t.message, "bui.storage.get")
                }
                if ("number" == typeof n && i) a = a && a[n] && a[n][i] || void 0;
                else if ("string" == typeof n) {
                    var r = e.array.index(n, a, i);
                    a = a && a[r]
                } else a = "number" == typeof n ? a && a[n] || void 0 : a;
                return a
            }

            function o(t, n, i) {
                if ("string" != typeof t) return void e.showLog("要删除的字段名只能是字符串", "bui.storage.remove");
                var o = a(t) || [];
                if ("number" == typeof n) {
                    var r = "number" == typeof i ? i : r;
                    o.splice(n, r);
                    try {
                        var l = JSON.stringify(o) || "";
                        d.setItem(t, l)
                    } catch (t) {
                        e.showLog(t.name + ": " + t.message, "bui.storage.remove")
                    }
                } else if ("string" == typeof n) {
                    var s = e.array.remove(n, o, i);
                    try {
                        var l = JSON.stringify(s) || "";
                        d.setItem(t, l)
                    } catch (t) {
                        e.showLog(t.name + ": " + t.message, "bui.storage.remove")
                    }
                } else d.removeItem(t);
                return this
            }

            function r() {
                return d.clear(), this
            }
            var l, s, c;
            "number" == typeof n || "string" == typeof n ? (l = 0 == parseInt(n) ? 0 : parseInt(n) || 1, c = !0, s = !0) : "object" === (void 0 === n ? "undefined" : t(n)) ? (l = n && 0 == n.size ? 0 : n.size || 1, c = !n || 0 != n.local, s = !n || 0 != n.reverse) : (l = 1, c = !0, s = !0);
            var u = s ? "push" : "unshift",
                d = c ? localStorage : sessionStorage;
            return {
                get: a,
                set: i,
                remove: o,
                clear: r
            }
        }
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.unit = {}, e.unit.remToPx = function (e) {
            var t = window.viewport && window.viewport.fontSize || 100,
                e = (parseFloat(e) * t).toFixed(2);
            return e
        }, e.unit.pxToRem = function (e) {
            var t = window.viewport && window.viewport.fontSize || 100,
                e = (parseFloat(e) / t).toFixed(2);
            return e
        }, e.unit.pxToRemZoom = function (e) {
            var e = (parseFloat(e) / 100).toFixed(2);
            return e
        }, e.unit.debounce = function (e, t, n) {
            var i;
            return function () {
                var a = n || this,
                    o = arguments,
                    r = function () {
                        i = null, e.apply(a, o)
                    };
                clearTimeout(i), i = setTimeout(r, t)
            }
        }, e.unit.throttle = function (e, t, n) {
            t || (t = 250);
            var i, a;
            return function () {
                var o = n || this,
                    r = +new Date,
                    l = arguments;
                i && r < i + t ? (clearTimeout(a), a = setTimeout(function () {
                    i = r, e.apply(o, l)
                }, t)) : (i = r, e.apply(o, l))
            }
        }, e.unit.startWithCss = function (e) {
            var t = new RegExp("^\\.|^#");
            return "string" == typeof e && t.test(e)
        }, e.unit.startWithId = function (e) {
            var t = new RegExp("^#");
            return "string" == typeof e && t.test(e)
        }, e.unit.startWithClass = function (e) {
            var t = new RegExp("^\\.");
            return "string" == typeof e && t.test(e)
        }, e.unit.endWithImage = function (e) {
            var t = new RegExp("(.png|.jpg|.gif)$");
            return "string" == typeof e && t.test(e)
        }, e.unit.tel = function (t) {
            var n, t = String(t),
                i = "tel:";
            return 0 == t.indexOf("+") && (i = "wtai://wp/mc;"), n = t, window.location.href = i + n, e
        }, e.unit.sms = function (t, n) {
            var i = navigator.userAgent,
                a = /(iPhone|iPad|iOS)/i.test(i),
                o = a ? "&" : "?";
            return window.location.href = "sms:" + t + o + "body=" + n, e
        }, e.unit.mailto = function (t) {
            var t = "email" in t ? t : {};
            return "string" == typeof t.email && t.email.indexOf("@") > 0 ? window.location.href = "mailto:" + t.email + "?subject=" + (t.subject || "") + "&body=" + (t.body || "") + "&cc=" + (t.cc || "") : e.showLog(email + "格式不正确"), e
        }, e.unit.openExtral = function (t) {
            var n = [],
                i = "",
                t = String(t);
            if (t.indexOf("mailto:") >= 0)
                if (n = t.split("mailto:"), i = n[1], i.indexOf("?") > -1) {
                    var a = i.split("?"),
                        o = e.unit.keyStringToObject(a[1]);
                    o.email = a[0], e.unit.mailto(o)
                } else e.unit.mailto({
                    email: i
                });
            if (t.indexOf("tel:") >= 0 && (n = t.split("tel:"), i = parseInt(n[1]), e.unit.tel(i)), t.indexOf("sms:") >= 0)
                if (n = t.split("sms:"), i = n[1], t.indexOf("=") >= 0) {
                    var r = t.split("="),
                        l = r[1];
                    e.unit.sms(i, l)
                } else e.unit.sms(i);
            return e
        }, e.unit.objectToKeyString = function (e, t) {
            var n = "";
            for (var i in e) {
                n += "&" + i + "=" + (t ? encodeURIComponent(e[i]) : e[i])
            }
            return n.substr(1)
        }, e.unit.keyStringToObject = function (t, n) {
            var i, a = {},
                o = [];
            try {
                for (o = t.split("&"), i = 0; i < o.length; i++) {
                    var r = n ? decodeURIComponent(o[i].split("=")[1]) : o[i].split("=")[1];
                    a[o[i].split("=")[0]] = r
                }
            } catch (t) {
                e.showLog(t)
            }
            return a
        }, e.unit.checkTargetInclude = function (e, t) {
            var i = t,
                a = [];
            if (i.indexOf(",") > -1) {
                a = i.split(",");
                var o, r = a.length;
                for (o = 0; o < r; o++) {
                    var l = a[o];
                    l.indexOf(".") > -1 && (a[o] = l.substr(1))
                }
            } else i.indexOf(".") > -1 ? a[0] = i.substr(1) : a[0] = i;
            var s, c = a.length;
            for (s = 0; s < c; s++)
                if (n(e).hasClass(a[s])) return !0;
            return !1
        }, e.unit.jsonToString = function (n) {
            function i(n) {
                if (n && "object" === e.typeof(n)) {
                    for (var i in n) {
                        var a = n[i];
                        "object" === (void 0 === a ? "undefined" : t(a)) && (n[i] = JSON.stringify(a))
                    }
                    return n
                }
            }

            function a(n) {
                if (n && "array" === e.typeof(n)) return n.forEach(function (e, i) {
                    "object" === (void 0 === e ? "undefined" : t(e)) && (n[i] = JSON.stringify(e))
                }), n
            }
            return "object" === (void 0 === n ? "undefined" : t(n)) ? function (t) {
                function n(t, n) {
                    var o = t[n];
                    return o && "object" === e.typeof(o) ? t[n] = i(o) : o && "array" === e.typeof(o) ? t[n] = a(o) : t[n] = o, t[n]
                }
                var o;
                if ("object" === e.typeof(t)) {
                    for (var r in t) t[r] = n(t, r);
                    o = JSON.stringify(t)
                } else "array" === e.typeof(t) ? (t.forEach(function (e, i) {
                    t[i] = n(t, i)
                }), o = JSON.stringify(t)) : o = t;
                return o
            }(n) : n
        }, e.unit.stringToJson = function (n) {
            function i(n) {
                var a, o;
                try {
                    if (a = "object" === (void 0 === n ? "undefined" : t(n)) ? n : JSON.parse(n), "array" === e.typeof(a)) a.forEach(function (e, t) {
                        a[t] = i(e)
                    });
                    else if ("object" === e.typeof(a))
                        for (var r in a) {
                            var l = a[r];
                            a[r] = i(l)
                        }
                    o = a
                } catch (e) {
                    o = n
                }
                return o
            }
            return n && i(n)
        }, e.unit.setKeyValue = function (e, n, i) {
            var a = i || {};
            if (e && e.indexOf(".") > -1) {
                var o = e.split(".");
                o.reduce(function (e, i, r) {
                    var l = r === o.length - 1,
                        s = l ? n || {} : {};
                    return "object" === (void 0 === e ? "undefined" : t(e)) ? (e[i] = s, e[i]) : (a[e] = a[e] || {}, a[e][i] = s, a[e][i])
                })
            } else a[e] = n || {};
            return a
        }, e.unit.getKeyValue = function (e, t) {
            function n(e, t) {
                if (t[e] && "string" == typeof t[e] && t[e].indexOf("{") > -1 && t[e].indexOf("}") > -1) try {
                    t[e] = JSON.parse(t[e])
                } catch (n) {
                    t[e] = t[e]
                }
                return i.length ? n(i.shift(), t[e]) : t[e]
            }
            var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return n(i.shift(), t)
        }, e.unit.getKeyObj = function (e, t) {
            function n(e, t) {
                return !t[e] instanceof Array && t[e] instanceof Object ? n(i.shift(), t[e]) : t[e]
            }
            var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return n(i.shift(), t)
        }, e.unit.delKey = function (e, t) {
            function n(e, a) {
                return i.length ? n(i.shift(), a[e]) : (delete a[e], t)
            }
            var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return n(i.shift(), t)
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.platform = function () {
            function e(e) {
                return /Windows NT/i.test(c)
            }

            function t() {
                return /Macintosh/i.test(c)
            }

            function n(e) {
                return /(Android|Linux)/i.test(c)
            }

            function i(e) {
                return /(iPhone)/i.test(c)
            }

            function a(e) {
                var t = !1;
                return 3 == window.devicePixelRatio && 375 == document.documentElement.clientWidth && 812 == document.documentElement.clientHeight && (t = !0), t
            }

            function o(e) {
                return /(iPad)/i.test(c)
            }

            function r(e) {
                return /(iPhone|iPad|iOS)/i.test(c)
            }

            function l(e) {
                return /(micromessenger)/i.test(c)
            }

            function s(e) {
                return /(crosswalk)/i.test(c)
            }
            var c = navigator.userAgent;
            return {
                isAndroid: n,
                isIphone: i,
                isIpad: o,
                isIos: r,
                isWeiXin: l,
                isBingotouch: s,
                isMac: t,
                isIphoneX: a,
                isWindow: e
            }
        }()
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.checkVersion = function (n) {
            function i() {
                e.platform.isIos() ? e.run({
                    id: d,
                    native: f.native
                }) : e.run({
                    id: u,
                    native: f.native
                })
            }

            function a(n) {
                h.on("click", function () {
                    g < l ? (x(), y({
                        title: "新版本" + c,
                        content: s,
                        buttons: n.buttons,
                        width: n.width,
                        height: n.height,
                        mask: n.mask,
                        callback: function () {
                            "立即下载" == t(this).text().trim() && i()
                        }
                    })) : (k(), e.hint(b)), n.callback && n.callback.call(this)
                }), p = !0
            }

            function o(n) {
                e.ajax(n).done(function (o) {
                    var r = o,
                        h = parseInt(r.minVersionCode);
                    u = r.downloadUrl || "", d = r.iosDownloadUrl || "", s = r.remark || "检测到新版本" + c + ",是否立即下载", l = parseInt(r.versionCode), c = r.versionName, r.isForced ? (x(), g < h ? y({
                        title: n.title,
                        content: m,
                        width: n.width,
                        height: n.height,
                        mask: n.mask,
                        autoClose: !1,
                        buttons: [{
                            name: "立即下载",
                            className: "primary-reverse"
                        }],
                        callback: function () {
                            try {
                                i()
                            } catch (t) {
                                e.showLog(t)
                            }
                        }
                    }) : g > h && g < l ? y({
                        title: n.title,
                        content: s,
                        buttons: n.buttons,
                        width: n.width,
                        height: n.height,
                        mask: n.mask,
                        callback: function () {
                            try {
                                "立即下载" == t(this).text().trim() && i()
                            } catch (t) {
                                e.showLog(t)
                            }
                        }
                    }) : (k(), e.hint(b))) : g < l ? x() : k(), f.onSuccess && f.onSuccess(r), !p && f.id && a(n)
                }).fail(function (t) {
                    f.onFail && f.onFail(), n.tips.fail && e.hint(n.tips.fail)
                })
            }
            var r = {
                id: "",
                target: "i",
                title: "版本更新",
                tips: {
                    nowVersion: "",
                    minVersion: "您的版本太低,需要卸载安装最新版才能正常使用!",
                    fail: "网络超时,请检测网络再次尝试"
                },
                currentVersion: "",
                currentVersionCode: "",
                width: 580,
                height: 500,
                mask: !0,
                url: "",
                data: {},
                native: !0,
                method: "GET",
                buttons: [{
                    name: "取消",
                    className: ""
                }, {
                    name: "立即下载",
                    className: "primary-reverse"
                }],
                timeout: 2e4,
                callback: null,
                onSuccess: null,
                onFail: null
            };
            n = n || {};
            var l, s, c, u, d, f = t.extend(!0, r, e.config.checkVersion, n),
                h = t(f.id),
                p = !1,
                g = parseInt(f.currentVersionCode || e.config.versionCode),
                v = f.currentVersion || e.config.version,
                m = f.tips.minVersion,
                b = f.tips.nowVersion || "您目前的版本" + v + ",已经是最新了 ^_^",
                w = f.target.indexOf("#") > -1 ? e.obj(f.target) : h ? h.find(f.target) : null,
                y = e.confirm;
            ! function (e) {
                o(e)
            }(f);
            var x = function () {
                    w && w.find(".bui-badges").length || w && w.append('<span class="bui-badges"></span>')
                },
                k = function () {
                    w && w.find(".bui-badges").remove()
                }
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.timer = function (n) {
            function i() {
                return d = h, f = !0, clearTimeout(p), this
            }

            function a() {
                return h = c ? s.times : 0, clearTimeout(p), g(), this
            }

            function o() {
                if (f && (h = d, f = !1), 0 == h) return h = 0, u && u.text(h), s.onEnd && s.onEnd.call(this, {
                    count: h,
                    target: u && u[0]
                }), void clearTimeout(p);
                var e = h < 10 ? "0" + h : h;
                return u && u.text(e), s.onProcess && s.onProcess.call(this, {
                    count: h,
                    target: u && u[0]
                }), h--, p = setTimeout(function () {
                    o()
                }, s.interval), this
            }

            function r() {
                if (f && (h = d, f = !1), h == s.times) return s.onEnd && s.onEnd.call(this), h = s.times, u && u.text(h), void clearTimeout(p);
                var e = h < 10 ? "0" + h : h;
                return u && u.text(e), s.onProcess && s.onProcess.call(this, h), h++, p = setTimeout(function () {
                    r()
                }, s.interval), this
            }
            var l = {
                    interval: 1e3,
                    target: null,
                    reduce: !0,
                    onEnd: null,
                    onProcess: null,
                    times: 10
                },
                s = t.extend({}, l, n),
                c = s.reduce,
                u = s.target ? e.obj(s.target) : null,
                d = 0,
                f = !1,
                h = c ? s.times : 0,
                p = null,
                g = c ? o : r;
            return {
                stop: function () {
                    d = 0, h = c ? s.times : 0, clearTimeout(p)
                }, start: g,
                restart: a,
                pause: i
            }
        }
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.animate = function (i) {
            function a(t) {
                return t.id ? (N = e.objId(t.id), N.css({
                    "-webkit-transition": H,
                    transition: H
                }), D = t.open3D, P = t.zoom, F = t.animates || [], M = R.config = t, this) : void e.showLog("animate id不能为空", "bui.animate")
            }

            function o(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : P ? -t / 100 + "rem" : -t + "px";
                var n = "translateX(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function r(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? e : P ? t / 100 + "rem" : t + "px";
                var n = "translateX(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function l(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : P ? -t / 100 + "rem" : -t + "px";
                var n = "translateY(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function s(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? e : P ? t / 100 + "rem" : t + "px";
                var n = "translateY(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function c(e) {
                var t = String(e),
                    e = t.indexOf(",") > -1 ? t : e + ",1",
                    n = "scale(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function u(e) {
                var e = String(e),
                    t = "scaleX(" + e + ")";
                return F.push(t), z.push(t), this
            }

            function d(e) {
                var e = String(e),
                    t = "scaleY(" + e + ")";
                return F.push(t), z.push(t), this
            }

            function f(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "rotate(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function h(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "rotateX(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function p(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "rotateY(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function g(e) {
                var e, t = String(e),
                    i = [];
                t.indexOf(",") > -1 ? (i = t.split(","), e = "", n.each(i, function (t, n) {
                    t < 2 && (e += n.indexOf("deg") > -1 ? "," + n : "," + n + "deg")
                }), e = e.substr(1)) : e = t.indexOf("deg") > -1 ? t : t + "deg,0";
                var a = "skew(" + e + ")";
                return F.push(a), z.push(a), this
            }

            function v(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "skewX(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function m(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "skewY(" + e + ")";
                return F.push(n), z.push(n), this
            }

            function b(e) {
                var t = String(e);
                return N.css({
                    "-webkit-transform-origin": t,
                    "transform-origin": t
                }), this
            }

            function w(e, t) {
                var n = t || "ease-out";
                return H = "number" == typeof e ? "all " + e + "ms " + n : 0 == e || "none" == e ? "none" : 1 == e ? "all 300ms " + n : e || "all 300ms " + n, N.css({
                    "-webkit-transition": H,
                    transition: H
                }), this
            }

            function y() {
                return F = [], z = [], A = [], V = 0, this
            }

            function x(e) {
                return q && (w(), q = !1), N.css({
                    "-webkit-transform": "",
                    transform: ""
                }), "none" != H && N.one("webkitTransitionEnd", function () {
                    e && e.call(R, this)
                }), y(), this
            }

            function k(e) {
                var t = D ? z.join("") + "translateZ(0)" : z.join("");
                try {
                    A[V] = [], A[V].push(F.join("")), F = [], V++
                } catch (e) {}
                return N.css({
                    "-webkit-transform": t,
                    transform: t
                }), "none" != H ? N.one("webkitTransitionEnd", function () {
                    e && e.call(R, this)
                }) : e && e.call(R, this), this
            }

            function T(e) {
                function t(e) {
                    var o = e[i] || [],
                        r = e[i + 1] || [];
                    n = D ? o.join("") + "translateZ(0)" : o.join(""), n = z.join("") + n.replace(/\(.*?\)/g, "(0)"), N.css({
                        "-webkit-transform": "",
                        transform: ""
                    }), i++;
                    try {
                        N.one("webkitTransitionEnd", function () {
                            if (!r || !r.length) return i = 0, void(historyCache = []);
                            t(a)
                        })
                    } catch (e) {}
                }
                var n, i = 0,
                    a = A.reverse();
                return t(a), this
            }

            function C(e, t) {
                return N.css({
                    "-webkit-transform": e,
                    transform: e
                }), t && "none" != w && N.one("webkitTransitionEnd", function () {
                    t.call(R, this)
                }), this
            }

            function I(e) {
                return e = parseFloat(e) || 100, D = !0, N.parent().css({
                    perspective: e + "px"
                }), this
            }

            function O(e, n) {
                var i = {};
                return "object" === (void 0 === e ? "undefined" : t(e)) ? (i = e, n = "") : "string" == typeof e && (i[e] = n || ""), N.css(i), this
            }

            function S(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function j(t, n) {
                return e.option.call(R, t, n)
            }
            var E = {
                id: "",
                zoom: !0,
                open3D: !1,
                animates: []
            };
            if ("object" === (void 0 === i ? "undefined" : t(i)) && i.id) i = i || {};
            else {
                var L = i || "";
                i = {}, i.id = L
            }
            var N, D, P, F, R = {
                    origin: b,
                    transition: w,
                    property: O,
                    open3D: I,
                    transform: C,
                    start: k,
                    stop: x,
                    clear: y,
                    left: o,
                    right: r,
                    up: l,
                    down: s,
                    scale: c,
                    scaleX: u,
                    scaleY: d,
                    rotate: f,
                    rotateX: h,
                    rotateY: p,
                    skew: g,
                    skewX: v,
                    skewY: m,
                    reverse: T,
                    widget: S,
                    option: j,
                    config: M,
                    init: a
                },
                M = R.config = n.extend(!0, {}, E, i),
                z = [],
                A = [],
                H = "all 300ms ease-out";
            a(M);
            var V = 0,
                q = !1;
            return R
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.toggle = function (n) {
            function i(t) {
                if (t = t || b, w = !1, !t.id) return void e.showLog("toggle id不能为空", "bui.toggle");
                h = e.objId(t.id), b = m.config = t, v = h.attr("class") || "";
                var n = t.effect,
                    i = t.inOrder ? e.array.index(n, y.hideInOrder) : e.array.index(n, y.hide),
                    a = n && (e.array.index(n, y.show) > -1 ? e.array.index(n, y.show) : i);
                return T = !(h[0] && "none" == h[0].style.display || "none" == h.css("display")), a < 0 ? (g = y.show[0], p = t.inOrder ? y.hideInOrder[0] : y.hide[0], this) : (g = y.show[a], void(p = t.inOrder ? y.hideInOrder[a] : y.hide[a]))
            }

            function a() {
                return T
            }

            function o(t, n) {
                if (!w) return !(!x && !k) && (x = !1, "function" == typeof t ? (n = t, t = g || "") : t = t || g || "", h[0] && "none" == h[0].style.display && h.css("display", "block"), h.addClass("animated " + t), "showIn" == t || "showOut" == t || "none" == t ? (b.revert && h.removeClass("animated " + t), n && n.call(m, this), T = !0, x = !0) : h.one("webkitAnimationEnd", function () {
                    try {
                        !T && h.css("display", "block"), b.revert && h.removeClass("animated " + t), n && n.call(m, this), T = !0, x = !0
                    } catch (t) {
                        e.showLog(t, "toggle show method")
                    }
                }), this)
            }

            function r(t, n) {
                if (!w && (x || k)) return k = !1, "function" == typeof t ? (n = t, t = p || "") : t = t || p || "", h.css("display", "block").addClass("animated " + t), "showIn" == t || "showOut" == t || "none" == t ? (h.css("display", "none"), b.revert && h.removeClass("animated " + t), n && n.call(m, this), T = !1, k = !0) : h.one("webkitAnimationEnd", function () {
                    try {
                        h.css("display", "none"), b.revert && h.removeClass("animated " + t), n && n.call(m, this), T = !1, k = !0
                    } catch (t) {
                        e.showLog(t, "toggle hide method")
                    }
                }), this
            }

            function l() {
                return h.remove(), this
            }

            function s(e) {
                var e = 1 == e;
                h && (h.off(), e && h.remove()), w = !0
            }

            function c(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function u(t, n) {
                return e.option.call(m, t, n)
            }
            var d = {
                id: "",
                effect: "fadeIn",
                revert: !0,
                inOrder: !1
            };
            if ("string" == typeof n) {
                var f = n || "";
                n = {}, n.id = f
            }
            var h, p, g, v, m = {
                    show: o,
                    hide: r,
                    remove: l,
                    isShow: a,
                    destroy: s,
                    widget: c,
                    option: u,
                    config: b,
                    init: i
                },
                b = m.config = t.extend(!0, {}, d, n),
                w = !1,
                y = {
                    show: ["fadeIn", "fadeInLeft", "fadeInRight", "fadeInDown", "fadeInUp", "fadeInLeftBig", "fadeInRightBig", "fadeInUpBig", "fadeInDownBig", "zoomIn", "bounceIn", "rotateIn", "rollIn", "flipInX", "flipInY", "lightSpeedIn", "showIn", "slideInRight", "slideInLeft", "coverInLeft", "coverInRight", "zoomSlideInLeft", "zoomSlideInRight", "pushInLeft", "pushInRight"],
                    hide: ["fadeOut", "fadeOutLeft", "fadeOutRight", "fadeOutUp", "fadeOutDown", "fadeOutLeftBig", "fadeOutRightBig", "fadeOutDownBig", "fadeOutUpBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutRight", "slideOutLeft", "coverOutLeft", "coverOutRight", "zoomSlideOutLeft", "zoomSlideOutRight", "pushOutLeft", "pushOutRight"],
                    hideInOrder: ["fadeOut", "fadeOutRight", "fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRightBig", "fadeOutLeftBig", "fadeOutUpBig", "fadeOutDownBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutLeft", "slideOutRight", "coverOutRight", "coverOutLeft", "zoomSlideOutRight", "zoomSlideOutLeft", "pushOutRight", "pushOutLeft"]
                },
                x = !0,
                k = !0,
                T = !1;
            return i(b), b.id && i(b), m
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.mask = function (n) {
            function i(n) {
                S = !1;
                var i = t.extend(!0, w, x, n);
                return i.appendTo = i.appendTo || "body", C = t(i.appendTo), x = y.config = i, m = C.css("position"), i.autoTrigger && r(i), I = e.objId(i.id), this
            }

            function a(e) {
                var t = function (t) {
                    e.callback && e.callback.call(y, t), e.autoClose && c(), t.stopPropagation()
                };
                I.on("click.mask", t), O = !0
            }

            function o(t) {
                var n = t.background ? t.background : "rgba(0,0,0," + t.opacity + ")",
                    i = "";
                return i += '<div id="' + T + '" class="' + e.prefix("mask") + '" style="background:' + n + ";z-index:" + t.zIndex + '"></div>'
            }

            function r(n) {
                if (!S) {
                    var i = t.extend(!0, {}, w, x, n),
                        r = o(i);
                    return I = e.objId(T), I.length < 1 ? (C.append(r).css("position", "relative"), I = e.objId(T)) : I.css("display", "block"), b = !0, v.call(y, "show"), O || a(i), this
                }
            }

            function l() {
                if (!S) return I && I.remove(), I = null, C.css("position", m || "static"), b = !1, O = !1, v.call(y, "hide"), this
            }

            function s(t) {
                if (!S) return I = e.objId(T), I && I.length ? (I.css("display", "block"), C.css("position", "relative"), b = !0) : r(t), v.call(y, "show"), this
            }

            function c() {
                if (!S) return I && I.css("display", "none"), C.css("position", "relative"), b = !1, v.call(y, "hide"), this
            }

            function u() {
                return b
            }

            function d(e) {
                l(), C && C.off("click.mask"), g("show"), g("hide"), S = !0
            }

            function f(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function h(t, n) {
                return e.option.call(y, t, n)
            }

            function p(t, n) {
                return e.on.apply(y, arguments), this
            }

            function g(t, n) {
                return e.off.apply(y, arguments), this
            }

            function v(t) {
                y.self = this == window || this == y ? null : this, e.trigger.apply(y, arguments)
            }
            var m, b, w = {
                    id: "",
                    appendTo: "",
                    opacity: .3,
                    background: "",
                    zIndex: 100,
                    autoTrigger: !1,
                    autoClose: !1,
                    callback: null
                },
                y = {
                    handle: {},
                    on: p,
                    off: g,
                    hide: c,
                    show: s,
                    isShow: u,
                    remove: l,
                    destroy: d,
                    widget: f,
                    option: h,
                    config: x,
                    init: i
                },
                x = y.config = t.extend(!0, {}, w, e.config.mask, n),
                k = e.guid(),
                T = x.id ? x.id.indexOf("#") > -1 ? x.id.substring(1) : x.id : k,
                C = (t("body"), null),
                I = null,
                O = !1,
                S = !1;
            return i(x), y
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.loading = function () {
            var n = [];
            return function (i) {
                function a(n) {
                    F = !1;
                    var i = t.extend(!0, S, n);
                    i.appendTo = i.appendTo || "body", j = t(i.appendTo), N = j.children(".bui-loading"), D = e.objId(L), S = O.config = i, i.autoTrigger && l(i);
                    var a = i.callback;
                    return i.callback = function (e) {
                        i.autoClose && d(), a && a.call(O, e)
                    }, i.id = N.length ? N.attr("id") + "-mask" : L, S.callback = i.callback, M = i.mask && e.mask(i), this
                }

                function o(e) {
                    N = j.children(".bui-loading");
                    var t = function (t) {
                        if (e.appendTo) e.callback && e.callback.call(O, t);
                        else {
                            var i = n[n.length - 1];
                            i && i.callback && i.callback.call(this, t)
                        }
                        t.stopPropagation()
                    };
                    return j.on("click.bui", ".bui-loading", t), P = !0, this
                }

                function r(t) {
                    t = t || {};
                    var n = t.text,
                        i = j.width(),
                        a = n && "block" == t.display ? parseInt(t.height) + 30 : parseInt(t.height),
                        o = -i / 2,
                        r = -a / 2,
                        l = "block" == t.display ? e.prefix("loading-block") : e.prefix("loading-inline"),
                        s = "";
                    return s += '<div id="' + E + '" class="' + e.prefix("loading") + " " + l + '" style="width:' + i + "px;height:" + a + "px;line-height:" + a + "px;margin-left:" + o + "px;margin-top:" + r + "px;" + (t.zIndex ? "z-index:" + t.zIndex : "") + '" >', t.onlyText || (s += '<div class="' + e.prefix("loading-cell") + '" style="width:' + parseFloat(t.width) + "px;height:" + parseFloat(t.height) + 'px;"></div>'), s += '<div class="' + e.prefix("loading-text") + '">' + t.text + "</div>", s += "</div>", t && t.template ? t.template.call(O, t) : s
                }

                function l(e) {
                    if (!F) {
                        var n = t.extend(!0, S, e);
                        if (N = j.children(".bui-loading"), C = N.children(".bui-loading-cell"), N && N.hasClass("bui-loading-pause")) N && N.removeClass("bui-loading-pause"), k.call(this, "start");
                        else {
                            "" == n.appendTo && g(n), N.length && N.remove();
                            var i = r(n);
                            j.append(i), M && M.show(n), k.call(this, "show")
                        }
                        return n.timeout && (R && clearTimeout(R), R = setTimeout(function () {
                            d()
                        }, n.timeout)), P || o(n), this
                    }
                }

                function s(e) {
                    if (!F) {
                        T = N && N.children(".bui-loading-text");
                        return void 0 === e ? T && T.text() : (T && T.text(e), this)
                    }
                }

                function c() {
                    F || (C = N && N.children(".bui-loading-cell"), C && C.css("display", "inline-block"), N && N.removeClass("bui-loading-pause"))
                }

                function u() {
                    F || (C = N && N.children(".bui-loading-cell"), C && C.css("display", "none"), N && N.addClass("bui-loading-pause"))
                }

                function d() {
                    if (!F) return N = j.children(".bui-loading"), S.appendTo ? (N && N.remove(), N = null, M && M.remove()) : (v(), M && M.remove(), n.length < 1 && N && N.length && (N && N.remove(), N = null)), P = !1, k.call(this, "remove"), k.call(this, "hide"), this
                }

                function f() {
                    if (!F) return N = j.children(".bui-loading"), N && N.length && (N.addClass("bui-loading-pause"), k.call(this, "pause")), this
                }

                function h(e) {
                    if (!F) {
                        var n = t.extend(!0, S, e);
                        return N = j.children(".bui-loading"), N && N.length ? (s(n.text), N.css("display", "block"), M && M.show(), "" == n.appendTo && g(S), k.call(this, "show")) : l(n), S.timeout && (R && clearTimeout(R), R = setTimeout(function (e) {
                            p()
                        }, S.timeout)), this
                    }
                }

                function p() {
                    if (!F) return N = j.children(".bui-loading"), S.appendTo ? (N.css("display", "none"), M && M.hide()) : (v(), n.length < 1 && N && N.length && (N.css("display", "none"), M && M.hide())), k.call(this, "hide"), this
                }

                function g(t) {
                    !e.array.compare(E, n, "id") && t.callback && n.push({
                        id: E,
                        callback: t.callback
                    })
                }

                function v() {
                    n.pop()
                }

                function m(e) {
                    var e = 1 == e;
                    d(), j && n.length < 1 && j.off("click.bui"), x("show"), x("hide"), x("start"), x("stop"), x("pause"), x("remove"), M && M.destroy(e), F = !0
                }

                function b(t) {
                    var n = {
                        mask: M || {}
                    };
                    return e.widget.call(n, t)
                }

                function w(t, n) {
                    return e.option.call(O, t, n)
                }

                function y(t, n) {
                    return e.on.apply(O, arguments), this
                }

                function x(t, n) {
                    return e.off.apply(O, arguments), this
                }

                function k(t) {
                    O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments)
                }
                var T, C, I = {
                        appendTo: "",
                        width: 30,
                        height: 30,
                        text: "",
                        onlyText: !1,
                        mask: !0,
                        zIndex: "",
                        autoTrigger: !1,
                        autoClose: !0,
                        timeout: 0,
                        opacity: 0,
                        display: "block",
                        template: null,
                        callback: null
                    },
                    O = {
                        handle: {},
                        on: y,
                        off: x,
                        start: l,
                        stop: d,
                        pause: f,
                        text: s,
                        showRing: c,
                        hideRing: u,
                        show: h,
                        hide: p,
                        destroy: m,
                        widget: b,
                        option: w,
                        config: S,
                        init: a
                    },
                    S = O.config = t.extend(!0, {}, I, e.config.loading, i),
                    j = (t("body"), null),
                    E = e.guid(),
                    L = E + "-mask",
                    N = null,
                    D = null,
                    P = !1,
                    F = !1,
                    R = null,
                    M = null;
                return a(S), O
            }
        }()
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.slide = function (n) {
            function i(n) {
                var i = t.extend(!0, de, n);
                if (!i.id) return void e.showLog("slide id不能为空", "bui.slide.init");
                if (z = e.obj(i.id), de = ue.config = i, X = i.direction, i.height = parseFloat(i.height), i.width = parseFloat(i.width), ie = window.viewport.width() || document.documentElement.clientWidth, ae = window.viewport.height() || document.documentElement.clientHeight, i.template && z.html(i.template() || ""), A = 0 == i.menu.indexOf("#") ? e.obj(i.menu) : z.find(i.menu).eq(0), H = A.children(), V = z.find(i.children).eq(0), q = V.parent(), U = V.children(), le = U.length, i.loop && !pe) {
                    var l = U.eq(U.length - 1).clone(!0),
                        s = U.eq(0).clone(!0);
                    V.prepend(l).append(s), U = V.children();
                    var c = U.length - 1;
                    F("afterto", function (e) {
                        0 == e && g(c - 1, "none"), e == c && g(1, "none")
                    }), g(1, "none");
                    !z.hasClass(".bui-slide-loop") && z.addClass("bui-slide-loop")
                }
                if (i.cross && !pe) {
                    !z.hasClass(".bui-slide-cross") && z.addClass("bui-slide-cross"), F("to", function (e) {
                        var t = U.eq(e);
                        t.removeClass("bui-cross-prev").removeClass("bui-cross-next"), t.prev().removeClass("bui-cross-next").addClass("bui-cross-prev"), t.next().removeClass("bui-cross-prev").addClass("bui-cross-next")
                    }), g(1, "none")
                }
                return a(i), r(), re = i.autoplay, re && v(), pe || (o(), be = !0), he = V.children(".active").length ? V.children(".active").index() : he || i.index, parseInt(i.index) > 0 ? g(i.index, "none") : g(he, "none"), this
            }

            function a(e) {
                var t = z.parents(".bui-page"),
                    n = (z.parents("main"), z[0] && z[0].offsetTop || 0),
                    i = t.children(e.header),
                    a = i[0] && i[0].offsetHeight || 0,
                    o = t.children(e.footer),
                    r = o[0] && o[0].offsetHeight || 0;
                ee = ae - (a || 0) - (r || 0) - n, te = 0 == e.height ? ee : e.height;
                var l = "static" == A.parent().css("position") ? A.css("position") : A.parent().css("position");
                ne = z.find(e.menu).length ? "absolute" == l || "fixed" == l ? te : te - (A[0] && A[0].offsetHeight || 0) : te, J = e.fullscreen ? ae : 0 == e.height ? ne : e.height, K = e.fullscreen ? ie : e.width || ie, W = U.length, $ = "x" == X ? K / de.visibleNum : K, G = "y" == X ? J / de.visibleNum : J, oe = "y" == de.direction ? G * de.scrollNum : $ * de.scrollNum, B = K * W / de.visibleNum, _ = J * W / de.visibleNum
            }

            function o() {
                var e = function (e) {
                    var n = t(this).hasClass("active"),
                        i = t(this).index(),
                        a = t(this).attr("disabled"),
                        o = t(this).hasClass("disabled") || "" == a || "true" == a || "disabled" == a;
                    n || o || (de.animate ? g(i) : g(i, "none"), k(i), re && v()), e.stopPropagation()
                };
                0 == de.menu.indexOf("#") ? A.on("click.bui", "li", e) : z.on("click.bui", de.menu + " li", e), z.on("click.bui", de.prev, y), z.on("click.bui", de.next, x);
                var n = de.children + " " + de.item;
                z.on("click.bui", n, function (e) {
                    M.call(ue, "click", e), de.callback && de.callback.call(ue, e, ue)
                }), C(), de.swipe || T(), pe = !0
            }

            function r() {
                we = {
                    x: {
                        swipeDir: "swipeleft",
                        swipeDir2: "swiperight",
                        width: oe
                    },
                    y: {
                        swipeDir: "swipeup",
                        swipeDir2: "swipedown",
                        width: oe
                    }
                }, se = {
                    x: {
                        parentInitKey: "width",
                        parentInitValue: B,
                        boxCss: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;",
                        boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + $ + "px;height:" + G + "px;"
                    },
                    y: {
                        parentInitKey: "height",
                        parentInitValue: _,
                        box: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;-webkit-box-orient: vertical;box-orient: vertical;",
                        boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + $ + "px;height:" + G + "px;"
                    }
                }, q[se[X].parentInitKey](se[X].parentInitValue);
                var e, n = U.length;
                for (e = 0; e < n; e++) {
                    var i = U[e].getAttribute("data-scroll"),
                        a = null == i ? de.scroll : "false" != i;
                    se[X].boxItemCSS = se[X].boxItemCSS + (a ? "overflow:auto;" : "overflow:hidden;"), U[e].style.cssText = se[X].boxItemCSS
                }
                try {
                    V[0].style.cssText = se[X].boxCss
                } catch (e) {
                    console.log("请检查下children参数是否正确.", "bui.slide id:" + de.id)
                }
                var o = "y" == X && de.visibleNum > 1 ? ne / de.visibleNum : ne,
                    r = de.zoom ? te / 100 + "rem" : te + "px",
                    s = de.zoom ? o / 100 + "rem" : o + "px";
                de.zoom;
                if (de.fullscreen ? (t("main").css({
                    position: "static"
                }), z.addClass("bui-slide-fullscreen").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    "z-index": 10,
                    overflow: "hidden",
                    width: K,
                    height: ae
                }), U.addClass(de.alignClassName || "bui-box-center").css("height", ae)) : (z.css({
                    position: "relative",
                    overflow: "hidden",
                    width: K,
                    height: r
                }), U.addClass(de.alignClassName).height(s)), de.autoheight && z.addClass("bui-slide-autoheight"), de.autopage) {
                    var c = l(),
                        u = V.find(".active").index() + 1,
                        d = I(c, u);
                    z.children(".bui-slide-head").remove(), z.append(d), H = z.find(de.menu).eq(0).children()
                }
            }

            function l() {
                var e = U.length,
                    t = e - de.visibleNum;
                return e % de.scrollNum != 0 ? t + 1 : t / de.scrollNum + 1
            }

            function s(t) {
                var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches,
                    i = xe ? n[0] : t;
                return fe.x1 = i.pageX, fe.y1 = i.pageY, fe.direction = "", de.stopHandle && e.unit.checkTargetInclude(t.target, de.stopHandle) ? void(Ce = !1) : (Oe = -he * oe, Se = -he * oe, n.length > 1 || t.scale && 1 !== t.scale ? void f("x" == X ? Oe : Se) : (re && (m(), re = !0), M.call(ue, "touchstart", t, fe), de.onStart && de.onStart.call(ue, t, fe, ue), void(Ce = !0)))
            }

            function c(n) {
                var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;
                if (i.length > 1 || n.scale && 1 !== n.scale) return void f("x" == X ? Oe : Se);
                if (Ce) {
                    var a = xe ? i[0] : n;
                    fe.x2 = a.pageX, fe.y2 = a.pageY, fe.direction || (fe.direction = e.swipeDirection(fe.x1, fe.x2, fe.y1, fe.y2)), "swipeleft" !== fe.direction && "swiperight" !== fe.direction || (n.preventDefault(), n.stopPropagation()), M.call(ue, "touchmove", n, fe);
                    try {
                        if ("y" == X && de.scroll) {
                            var o = t(n.target).closest(".active"),
                                r = o[0].scrollTop || 0,
                                s = o[0].scrollHeight || 0,
                                c = o[0].offsetHeight || 0;
                            if ("swipedown" === fe.direction && r > 1) return void(Ie = !1);
                            if ("swipeup" === fe.direction && s - r - c >= 2) return void(Ie = !1)
                        }
                    } catch (n) {}
                    Q = fe.x2 - fe.x1, Z = fe.y2 - fe.y1, we.x.move = Oe + Q, we.x.absDelta = Math.abs(Q), we.y.move = Se + Z, we.y.absDelta = Math.abs(Z);
                    var u = l();
                    fe.direction !== we[X].swipeDir && fe.direction !== we[X].swipeDir2 || (de.delay && we[X].absDelta > de.distance && f(we[X].move, "none"), de.delay || (de.bufferEffect ? f(we[X].move, "none") : 0 == he && u > 1 && ("swipeleft" == fe.direction || "swipeup" == fe.direction) ? f(we[X].move, "none") : he == u - 1 && u > 1 && ("swiperight" == fe.direction || "swipedown" == fe.direction) ? f(we[X].move, "none") : he > 0 && he < u - 1 && u > 1 && f(we[X].move, "none"), n.preventDefault()), de.onMove && de.onMove.call(ue, n, fe, ue)), Ie = !0
                }
            }

            function u(e) {
                M.call(ue, "touchend", e, fe), Ie && (Q = fe.x2 - fe.x1, Z = fe.y2 - fe.y1, we.x.delta = Oe, we.x.absDelta = Math.abs(Q), we.y.delta = Se, we.y.absDelta = Math.abs(Z), we[X].absDelta > de.distance ? (d.call(this, e, fe, we), de.onEnd && de.onEnd.call(ue, e, fe, ue)) : we[X].absDelta < de.distance && f(we[X].delta), re && v(), "swipeleft" != fe.direction && "swiperight" != fe.direction || e.stopPropagation(), ke += fe.y2 - fe.y1, Te += fe.x2 - fe.x1, fe.lastX = Te, fe.lastY = ke, fe = {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 0,
                    direction: ""
                }, Ce = !1, Ie = !1, p())
            }

            function d(e, t, i) {
                he = V.children(".active").index();
                var a;
                if (t.direction == i[X].swipeDir) {
                    var o = U.length,
                        r = o - de.visibleNum,
                        l = o % de.scrollNum != 0 ? r + 1 : r / de.scrollNum + 1;
                    if (he >= l - 1) a = he, i[X].delta = -a * i[X].width, f(i[X].delta), he = a, k(a), M.call(ue, "last", a);
                    else if (a = he + 1, i[X].delta = -a * i[X].width, f(i[X].delta), he = a, k(a), n.autoload) O(he);
                    else {
                        U.eq(he);
                        if (n.loop && he > le) return;
                        M.call(ue, "to", a)
                    }
                    M.call(ue, "next", a)
                } else if (t.direction == i[X].swipeDir2)
                    if (he > 0) {
                        if (a = he - 1, i[X].delta = -a * i[X].width, f(i[X].delta), he = a, k(a), n.autoload) O(he);
                        else {
                            U.eq(he);
                            if (n.loop && 0 == he) return;
                            M.call(ue, "to", a)
                        }
                        M.call(ue, "prev", a)
                    } else a = he, i[X].delta = -a * i[X].width, f(i[X].delta), he = a, k(a), M.call(ue, "first", a)
            }

            function f(e, t) {
                var n = de.transition,
                    t = t || "all " + n + "ms",
                    e = e || 0;
                switch (X) {
                case "x":
                    h(e + "px", 0, t, q);
                    break;
                case "y":
                    h(0, e + "px", t, q)
                }
                return this
            }

            function h(e, t, n, i) {
                var a = t || 0;
                "y" == X && de.zoom && String(t).indexOf("%") <= -1 && (a = parseInt(t) / 100 + "rem");
                var n, i = i || z,
                    e = e || 0,
                    o = e,
                    r = String(e).indexOf("%") > -1 ? String(e) : o,
                    l = String(t).indexOf("%") > -1 ? String(t) : a;
                n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";
                try {
                    i.css({
                        "-webkit-transition": n,
                        transition: n,
                        "-webkit-transform": "translate(" + r + "," + l + ")",
                        transform: "translate(" + r + "," + l + ")"
                    })
                } catch (e) {
                    console.log(e.message)
                }
            }

            function p(e) {
                q.one("webkitTransitionEnd", function () {
                    q.css({
                        "-webkit-transition": "none",
                        transition: "none"
                    }), e && e.call(ue, he), M.call(ue, "afterto", he)
                })
            }

            function g(e, i, a) {
                var o = 0,
                    r = null,
                    a = 0 != a;
                if ("string" == typeof e && e.indexOf(".html") > -1) {
                    var s = [];
                    H.each(function (n, i) {
                        var a = t(i).attr("href") || void 0;
                        s[n] = a, a == e && (o = n)
                    })
                } else o = parseInt(e);
                "function" == typeof i && (r = i, i = "");
                var c = {
                        x: {
                            transform: -o * parseFloat(oe)
                        },
                        y: {
                            transform: -o * parseFloat(oe)
                        }
                    },
                    u = l();
                if (o >= u || o < 0) return !1;
                if (f(c[X].transform, i), he = o, k(o), re && v(), n.autoload) O(he);
                else {
                    U.eq(he);
                    if (!a) return;
                    M.call(ue, "to", o)
                }
                return p(r), this
            }

            function v(e) {
                var e = e || de.interval;
                m(), re = !0;
                var t = he;
                Y = setInterval(function () {
                    var e = l();
                    t >= 0 && t < e - 1 ? t += 1 : t = 0, g(t)
                }, e), M.call(ue, "play")
            }

            function m(e) {
                if (Y) try {
                    window.clearInterval(Y), re = !1, M.call(ue, "stop")
                } catch (e) {}
                return this
            }

            function b(e) {
                v(e)
            }

            function w() {
                return he
            }

            function y() {
                var e = he - 1;
                return de.loop && -1 == e && (e = le), g(e), M.call(ue, "prev", e), this
            }

            function x() {
                var e = he + 1;
                return de.loop && e > le + 1 && (e = 1), g(e), M.call(ue, "next", e), this
            }

            function k(e) {
                e = e || 0, U.removeClass("active"), U.eq(e).addClass("active"), H.removeClass("active"), H.eq(e).addClass("active")
            }

            function T() {
                return z.off("touchstart", s).off("touchmove", c).off("touchend", u).off("touchcancel"), M.call(ue, "lock"), this
            }

            function C(e) {
                return z.on("touchstart", s).on("touchmove", c).on("touchend", u).on("touchcancel", function () {
                    f("x" == X ? Oe : Se)
                }), M.call(ue, "unlock"), this
            }

            function I(e, t) {
                var n, i = "",
                    t = t || 1;
                for (i += '<div class="bui-slide-head">', i += "<ul >", n = 1; n < Number(e) + 1; n++) i += "<li " + (n == t ? 'class="active"' : "") + ">" + n + "</li>";
                return i += "</ul >", i += "</div >"
            }

            function O(n) {
                var i = U.eq(n),
                    a = H.eq(n),
                    o = a.attr("href") || "";
                if (e.array.compare(n, ve)) return M.call(ue, "to", n, "200"), !1;
                de.autoload && (o ? t.ajax({
                    url: o,
                    dataType: "html",
                    async: de.async,
                    success: function (e, t) {
                        i.html(e), ve.push(n), M.call(ue, "load", n, t), !be && M.call(ue, "to", n, t), be = !1
                    }, error: function (e, t) {
                        M.call(ue, "loadfail", n, t)
                    }
                }) : (!be && M.call(ue, "to", n), be = !1))
            }

            function S(t) {
                var n, i = e.guid(),
                    t = t || 1,
                    a = "";
                for (n = 0; n < t; n++) a += '<li id="' + i + '" style="-webkit-box-flex:1;box-flex:1;width:' + $ + "px;height:" + G + 'px;"></li>';
                V.append(a), U = V.children();
                var o = $ * U.length;
                W = U.length, q.width(o)
            }

            function j(n) {
                var i = {
                        id: null,
                        url: "",
                        preload: !1,
                        param: {},
                        success: null,
                        fail: null
                    },
                    a = t.extend(!0, {}, i, n),
                    o = a.url || "",
                    r = null,
                    l = U.length ? he + 1 : 0;
                if (a.id) r = e.obj(a.id);
                else {
                    var s = U.eq(l);
                    s.length ? r = s : (S(), U = V.children(), r = U.eq(l))
                } if (o)
                    if (he = l, me[l] = a.param, o in ge) {
                        e.array.compare(l, ve) || (ve.push(l), r.html(ge[o]), a.success && a.success.call(ue, ge[o], "cache"), M.call(ue, "load", ge[o], "cache")), a.preload || g(l)
                    } else t.ajax({
                        url: o,
                        success: function (t, n) {
                            t ? (ge[o] = t, e.array.compare(l, ve) || (ve.push(l), r.html(ge[o]), a.success && a.success.call(ue, ge[o], n), M.call(ue, "load", t, n)), a.preload || g(l)) : (a.fail && a.fail.call(r, t, n), M.call(ue, "loadfail", t, n))
                        }, error: function (e, t) {
                            a.fail && a.fail.call(ue, e, t), M.call(ue, "loadfail", e, t)
                        }
                    });
                return this
            }

            function E(e) {
                var e = "number" == typeof e ? e : he;
                return me[e] || {}
            }

            function L(e) {
                return U.eq(he)[0]
            }

            function N(e) {
                var e = 1 == e;
                m(), A && (A.off("click.bui"), e && A.remove()), z && (z.off(), e && z.remove()), R("stop"), R("play"), R("first"), R("last"), R("to")
            }

            function D(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function P(t, n) {
                return e.option.call(ue, t, n)
            }

            function F(t, n) {
                return e.on.apply(ue, arguments), this
            }

            function R(t, n) {
                return e.off.apply(ue, arguments), this
            }

            function M(t) {
                ue.self = this == window || this == ue ? null : this, e.trigger.apply(ue, arguments)
            }
            var z, A, H, V, q, U, W, Y, B, _, K, J, X, $, Q, Z, G, ee, te, ne, ie, ae, oe, re, le, se, ce = {
                    id: "",
                    menu: ".bui-slide-head > ul",
                    children: ".bui-slide-main > ul",
                    header: "header",
                    footer: "footer",
                    item: "li",
                    prev: ".bui-slide-prev",
                    next: ".bui-slide-next",
                    alignClassName: "",
                    stopHandle: "",
                    width: 0,
                    height: 0,
                    zoom: !0,
                    transition: 200,
                    interval: 5e3,
                    swipe: !0,
                    animate: !0,
                    delay: !1,
                    bufferEffect: !0,
                    visibleNum: 1,
                    scrollNum: 1,
                    distance: 40,
                    direction: "x",
                    autoplay: !1,
                    loop: !1,
                    cross: !1,
                    autoheight: !1,
                    scroll: !1,
                    index: 0,
                    fullscreen: !1,
                    autopage: !1,
                    autoload: !1,
                    async: !0,
                    template: null,
                    callback: null,
                    onStart: null,
                    onMove: null,
                    onEnd: null
                },
                ue = {
                    handle: {},
                    on: F,
                    off: R,
                    to: g,
                    load: j,
                    getPageParams: E,
                    getPages: l,
                    $active: L,
                    prev: y,
                    next: x,
                    stop: m,
                    start: b,
                    lock: T,
                    index: w,
                    unlock: C,
                    destroy: N,
                    widget: D,
                    option: P,
                    config: de,
                    init: i
                },
                de = ue.config = t.extend(!0, {}, ce, e.config.slide, n),
                fe = {},
                he = 0,
                pe = !1,
                ge = {},
                ve = [],
                me = [],
                be = !1,
                we = {
                    x: {},
                    y: {}
                },
                ye = /hp-tablet/gi.test(navigator.appVersion),
                xe = "ontouchstart" in window && !ye,
                X = "",
                ke = 0,
                Te = 0,
                Ce = !1,
                Ie = !1,
                fe = {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 0,
                    direction: ""
                };
            try {
                i(de)
            } catch (t) {
                e.showLog(t)
            }
            var Oe, Se;
            return ue
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.swipe = function () {
            var n = null,
                i = null;
            return function (a) {
                function o(i) {
                    var a = t.extend(!0, $, i);
                    return pe = !1, a.id ? (M = e.obj(a.id), V = a.width > 0 ? a.width : ke.clientWidth, q = a.height > 0 ? a.height : ke.clientHeight, z = M.children(a.handle), A = G ? M.children() : M, W = A.children(a.swipeleft), Y = A.children(a.swiperight), B = A.children(a.swipeup), _ = A.children(a.swipedown), K = parseFloat(a.movingDistance), H = K, s(), ee || (r(a), ee = !0), n && n.close(), de || j(), this) : void e.showLog("swipe id不能为空", "bui.swipe.init")
                }

                function r(e) {
                    A.css({
                        width: V,
                        position: "relative",
                        overflow: "hidden"
                    }), !G && A.css({
                        height: q
                    }), z.css({
                        position: "relative",
                        "z-index": 10
                    });
                    try {
                        var t = W.attr("data-moving") || K,
                            n = Y.attr("data-moving") || K,
                            i = B.attr("data-moving") || K,
                            a = _.attr("data-moving") || K,
                            o = l(t),
                            r = l(n),
                            s = l(i),
                            c = l(a);
                        ne && W.css({
                            width: o
                        }), te && Y.css({
                            width: r
                        }), ae && _.css({
                            height: c
                        }), ie && B.css({
                            height: s
                        })
                    } catch (e) {}
                }

                function l(e) {
                    return $.zoom ? e / 100 + "rem" : e + "px"
                }

                function s() {
                    "x" == Z ? (te = !!Y.length, ne = !!W.length) : "y" == Z ? (ae = !!_.length, ie = !!B.length) : "xy" == Z && (ae = !!_.length, ie = !!B.length, ne = !!W.length, te = !!Y.length)
                }

                function c(n) {
                    var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;
                    if (i.length > 1 || n.scale && 1 !== n.scale) return void(be = !1);
                    if ($.stopHandle && e.unit.checkTargetInclude(n.target, $.stopHandle)) return void(be = !1);
                    var a = me ? i[0] : n;
                    if (Q.id = $.id, Q.x1 = a.pageX, Q.y1 = a.pageY, Q.direction = "", U = t(n.target).closest($.handle), R.call(X, "touchstart", n, Q), Te = U.scrollTop(), G && !ge) {
                        z = U, A = z.parent(), W = A.children($.swipeleft), Y = A.children($.swiperight), B = A.children($.swipeup), _ = A.children($.swipedown), s();
                        A.index();
                        r($), (0 == $.height || "" == A[0].style.height) && A.height(U[0].offsetHeight)
                    }
                    if (Q.movingleft = parseInt(W.attr("data-moving") || K), Q.movingright = parseInt(Y.attr("data-moving") || K), Q.movingup = parseInt(B.attr("data-moving") || K), Q.movingdown = parseInt(_.attr("data-moving") || K), U.length) {
                        var o = !1;
                        switch (Z) {
                        case "x":
                            o = !(!ne && !te);
                            break;
                        case "y":
                            o = !(!ie && !ae);
                            break;
                        case "xy":
                            o = !!(ne || te || ie || ae)
                        }
                    }
                    be = void 0 == o || 1 == o
                }

                function u(a) {
                    var o = a.originalEvent && a.originalEvent.targetTouches || a.targetTouches;
                    if (o.length > 1 || a.scale && 1 !== a.scale) return void k();
                    var r = me ? o[0] : a;
                    if (Q.x2 = r.pageX, Q.y2 = r.pageY, R.call(X, "touchmove", a, Q), n && a.stopPropagation(), be) {
                        Q.y2 - Q.y1 > 0 && Te <= 0 && a.preventDefault(), Q.direction || (Q.direction = e.swipeDirection(Q.x1, Q.x2, Q.y1, Q.y2)), "swipeleft" !== Q.direction && "swiperight" !== Q.direction || a.preventDefault();
                        try {
                            if ("swipeup" === Q.direction || "swipedown" === Q.direction) {
                                var l = M[0].scrollTop || 0,
                                    s = (M[0].scrollHeight, U[0].scrollTop || 0),
                                    c = (U[0].scrollHeight, t(a.target)[0].scrollTop || 0),
                                    u = a.target.offsetHeight || 0,
                                    d = a.target.scrollHeight || 0,
                                    p = !1,
                                    g = !1;
                                0 == l && 0 == s && 0 == c && (p = !0), d - c - u <= 2 && (g = !0)
                            }
                        } catch (a) {}
                        var v = "swiperight" == Q.direction || "swipeleft" == Q.direction ? Q.x2 - Q.x1 : Q.y2 - Q.y1,
                            m = 0;
                        Q.deltax = ge ? Math.abs(v) : Math.abs(v) + ye, !te || "swiperight" != Q.direction || re || ge || i ? !p || !ae || "swipedown" != Q.direction || le || ge || i ? !ne || "swipeleft" != Q.direction || oe || ge || i ? !g || !ie || "swipeup" != Q.direction || se || ge || i ? "swipeleft" == Q.direction && re ? (H = Q.movingright, m = f(Q, Q.movingright), ue && E(-Q.deltax, 0, "none", i || Y), ce && E(-m, 0, "none", z), R.call(X, "movingleft", a, Q), we = !0, a.stopPropagation()) : "swipeup" == Q.direction && le ? (H = Q.movingdown, m = f(Q, Q.movingdown), ue && E(0, -Q.deltax, "none", i || _), ce && E(0, -m, "none", z), R.call(X, "movingup", a, Q), we = !0, a.preventDefault(), a.stopPropagation()) : "swiperight" == Q.direction && oe ? (H = Q.movingleft, m = f(Q, Q.movingleft), ue && E(Q.deltax, 0, "none", i || W), ce && E(m, 0, "none", z), R.call(X, "movingright", a, Q), we = !0, a.stopPropagation()) : "swipedown" == Q.direction && se && (H = Q.movingup, m = f(Q, Q.movingup), ue && E(0, Q.deltax, "none", i || B), ce && E(0, m, "none", z), R.call(X, "movingdown", a, Q), we = !0, a.preventDefault(), a.stopPropagation()) : (H = Q.movingup, m = h(Q, Q.movingup), ue && E(0, m, "none", B), ce && E(0, -Q.deltax, "none", z), R.call(X, "movingup", a, Q), we = !0, a.preventDefault(), a.stopPropagation()) : (H = Q.movingleft, m = h(Q, Q.movingleft), ue && E(m, 0, "none", W), ce && E(-Q.deltax, 0, "none", z), R.call(X, "movingleft", a, Q), we = !0, a.stopPropagation()) : (H = Q.movingdown, m = f(Q, Q.movingdown), ue && E(0, m, "none", _), ce && E(0, Q.deltax, "none", z), R.call(X, "movingdown", a, Q), we = !0, a.preventDefault(), a.stopPropagation()) : (H = Q.movingright, m = f(Q, Q.movingright), ue && E(m, 0, "none", Y), ce && E(Q.deltax, 0, "none", z), R.call(X, "movingright", a, Q), we = !0, a.stopPropagation())
                    }
                }

                function d(e) {
                    if (R.call(X, "touchend", e, Q), we) {
                        var t = "swiperight" == Q.direction || "swipeleft" == Q.direction ? Math.abs(Q.x2 - Q.x1) : Math.abs(Q.y2 - Q.y1);
                        te && "swiperight" == Q.direction && t > $.distance && !re && !ge ? (g(), R.call(X, Q.direction, e, Q), R.call(X, "open", Q.direction)) : ne && "swipeleft" == Q.direction && t > $.distance && !oe && !ge ? (p(), R.call(X, Q.direction, e, Q), R.call(X, "open", Q.direction)) : ie && "swipeup" == Q.direction && t > $.distance && !se && !ge ? (v(), R.call(X, Q.direction, e, Q), R.call(X, "open", Q.direction)) : ae && "swipedown" == Q.direction && t > $.distance && !le && !ge ? (m(), R.call(X, Q.direction, e, Q), R.call(X, "open", Q.direction)) : ge && t < $.distance ? (ne && oe && p(), te && re && g(), ie && se && v(), ae && le && m(), R.call(X, Q.direction, e, Q), $.alwaysTrigger && R.call(X, "open", Q.direction)) : ge && t > $.distance ? (ne && oe && w(), te && re && b(), ie && se && y(), ae && le && x(), R.call(X, Q.direction, e, Q), R.call(X, "close", Q.direction)) : !ge && t < $.distance && ("swipeleft" === Q.direction && ne && !oe && w(), "swiperight" === Q.direction && te && !re && b(), "swipeup" === Q.direction && ie && !se && y(), "swipedown" === Q.direction && ae && !le && x(), $.alwaysTrigger && R.call(X, "close", Q.direction), R.call(X, Q.direction, e, Q)), be = !1, we = !1, e.stopPropagation()
                    }
                }

                function f(e, t) {
                    var n = -t + e.deltax;
                    return n = n > 0 ? 0 : n
                }

                function h(e, t) {
                    var n = t - e.deltax;
                    return n = n > t ? t : n
                }

                function p(e) {
                    e = e || {}, e.transition = e.transition || $.transition, e.target = e.target || W, e.handle = e.handle || z, n && n.close(), ge = !0, oe = !0, G && (n = X, i = W, ke.addEventListener("click", S, !0)), ue && E(0, 0, e.transition, e.target), ce && E(-H, 0, e.transition, e.handle)
                }

                function g(e) {
                    e = e || {}, e.transition = e.transition || $.transition, e.target = e.target || Y, e.handle = e.handle || z, n && n.close(), ge = !0, re = !0, G && (n = X, i = Y, ke.addEventListener("click", S, !0)), ue && E(0, 0, e.transition, e.target), ce && E(H, 0, e.transition, e.handle)
                }

                function v(e) {
                    e = e || {}, e.transition = e.transition || $.transition, e.target = e.target || B, e.handle = e.handle || z, n && n.close(), ge = !0, se = !0, G && (n = X, i = B, ke.addEventListener("click", S, !0)), ue && E(0, 0, e.transition, e.target), ce && E(0, -H, e.transition, e.handle)
                }

                function m(e) {
                    e = e || {}, e.transition = e.transition || $.transition, e.target = e.target || _, e.handle = e.handle || z, n && n.close(), ge = !0, le = !0, G && (n = X, i = _, ke.addEventListener("click", S, !0)), ue && E(0, 0, e.transition, e.target), ce && E(0, H, e.transition, e.handle)
                }

                function b(e) {
                    e = e || {}, e.transition = e.transition || $.transition, e.target = Y, e.handle = he || z, ge = !1, re = !1, G && (n = null, i = null, fe = null, he = null, ke.removeEventListener("click", S, !0)), ue && E(-(H + 1), 0, e.transition, e.target), ce && E(ye, 0, e.transition, e.handle)
                }

                function w(e) {
                    e = e || {}, e.transition = e.transition || $.transition, e.target = W, e.handle = he || z, ge = !1, oe = !1, G && (n = null, i = null, fe = null, he = null, ke.removeEventListener("click", S, !0)), ue && E("101%", 0, e.transition, e.target), ce && E(-ye, 0, e.transition, e.handle)
                }

                function y(e) {
                    e = e || {}, e.transition = e.transition || $.transition, e.target = B, e.handle = he || z, ge = !1, se = !1, G && (n = null, i = null, fe = null, he = null, ke.removeEventListener("click", S, !0)), ue && E(0, "100%", e.transition, e.target), ce && E(0, -ye, e.transition, e.handle)
                }

                function x(e) {
                    e = e || {}, e.transition = e.transition || $.transition, e.target = _, e.handle = he || z, ge = !1, le = !1, G && (n = null, i = null, fe = null, he = null, ke.removeEventListener("click", S, !0)), ue && E(0, -H, e.transition, e.target), ce && E(0, ye, e.transition, e.handle)
                }

                function k() {
                    re && b(), oe && w(), le && x(), se && y(), R.call(X, "close")
                }

                function T() {
                    if (!pe) return k(), this
                }

                function C(e) {
                    if (!pe) {
                        var t = e || {};
                        t.transition = t.transition || $.transition, t.index = t.index || 0;
                        var n, i = t.target;
                        switch (i) {
                        case "swiperight":
                            t.target = Y.eq(t.index), n = t.target.parent().index(), t.handle = G ? M.children().eq(n).children($.handle) : z, he = t.handle, fe = t.target, te && g(t);
                            break;
                        case "swipeleft":
                            t.target = W.eq(t.index), n = t.target.parent().index(), t.handle = G ? M.children().eq(n).children($.handle) : z, he = t.handle, fe = t.target, ne && p(t);
                            break;
                        case "swipedown":
                            t.target = _.eq(t.index), n = t.target.parent().index(), t.handle = G ? M.children().eq(n).children($.handle) : z, he = t.handle, fe = t.target, ae && m(t);
                            break;
                        case "swipeup":
                            t.target = B.eq(t.index), n = t.target.parent().index(), t.handle = G ? M.children().eq(n).children($.handle) : z, he = t.handle, fe = t.target, ie && v(t);
                            break;
                        default:
                            t.target = Y.eq(t.index), n = t.target.parent().index(), t.handle = G ? M.children().eq(n).children($.handle) : z, he = t.handle, fe = t.target, te && g(t)
                        }
                        return R.call(X, "open", i), this
                    }
                }

                function I() {
                    return n
                }

                function O() {
                    return ge
                }

                function S(e) {
                    var i = t(e.target),
                        a = i.closest(W).length || i.closest(Y).length || i.closest(B).length || i.closest(_).length || e.target.className.indexOf("bui-mask") > -1 || e.target.className.indexOf("bui-click") > -1;
                    n && (a || (n.close(), e.stopPropagation()))
                }

                function j() {
                    M.on("touchstart", c).on("touchmove", u).on("touchend", d).on("touchcancel", function () {}), de = !0
                }

                function E(e, t, n, i) {
                    var n, a = i || M,
                        e = e || 0,
                        t = t || 0,
                        o = $.zoom ? parseFloat(e) / 100 + "rem" : parseFloat(e) + "px",
                        r = $.zoom ? parseFloat(t) / 100 + "rem" : parseFloat(t) + "px",
                        l = String(e).indexOf("%") > -1 ? e : o,
                        s = String(t).indexOf("%") > -1 ? t : r;
                    return n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms", a.css({
                        "-webkit-transition": n,
                        transition: n,
                        "-webkit-transform": "translate(" + l + "," + s + ")",
                        transform: "translate(" + l + "," + s + ")"
                    }).one("webkitTransitionEnd", function () {
                        a.css({
                            "-webkit-transition": "none",
                            transition: "none"
                        })
                    }), this
                }

                function L() {
                    if (!pe) return M.off("touchmove", u).off("touchend", d).off("touchcancel", function () {}), R.call(X, "lock"), this
                }

                function N() {
                    if (!pe) return M.on("touchmove", u).on("touchend", d).on("touchcancel", function () {}), R.call(X, "unlock"), this
                }

                function D(e) {
                    var e = 1 == e;
                    M && (M.off(), e && M.remove()), F("open"), F("close"), pe = !0
                }

                function P(t, n) {
                    return e.on.apply(X, arguments), this
                }

                function F(t, n) {
                    return e.off.apply(X, arguments), this
                }

                function R(t) {
                    X.self = this == window || this == X ? null : this, e.trigger.apply(X, arguments)
                }
                var M, z, A, H, V, q, U, W, Y, B, _, K, J = {
                        id: "",
                        handle: ".handle",
                        swiperight: ".swiperight",
                        swipeleft: ".swipeleft",
                        swipeup: ".swipeup",
                        swipedown: ".swipedown",
                        direction: "x",
                        stopHandle: "",
                        hasChild: !1,
                        handleMove: !0,
                        targetMove: !0,
                        alwaysTrigger: !1,
                        width: 0,
                        height: 0,
                        movingDistance: 280,
                        initDistance: 0,
                        zoom: !1,
                        distance: 40,
                        transition: 300
                    },
                    X = {
                        handle: {},
                        active: I,
                        isActive: O,
                        on: P,
                        off: F,
                        close: T,
                        open: C,
                        destroy: D,
                        lock: L,
                        unlock: N,
                        init: o
                    },
                    $ = X.config = t.extend(!0, {}, J, e.config.swipe, a),
                    Q = {},
                    Z = $.direction,
                    G = $.hasChild,
                    ee = !1,
                    te = !1,
                    ne = !1,
                    ie = !1,
                    ae = !1,
                    oe = !1,
                    re = !1,
                    le = !1,
                    se = !1,
                    ce = $.handleMove,
                    ue = $.targetMove,
                    de = !1,
                    fe = null,
                    he = null,
                    pe = !1,
                    ge = !1,
                    ve = /hp-tablet/gi.test(navigator.appVersion),
                    me = "ontouchstart" in window && !ve,
                    be = !1,
                    we = !1,
                    Q = {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                        direction: "",
                        deltax: 0,
                        movingleft: 0,
                        movingright: 0,
                        movingup: 0,
                        movingdown: 0
                    },
                    ye = $.initDistance,
                    xe = document,
                    ke = xe.documentElement;
                o($);
                var Te = 0;
                return X
            }
        }()
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.sidebar = function (n) {
            function i(n) {
                var i = t.extend(!0, y, n);
                return y = w.config = i, i.trigger && (I = e.obj(i.trigger)), k = e.obj(i.handle), m = bui.swipe({
                    id: i.id,
                    handle: i.handle,
                    movingDistance: i.width,
                    swiperight: i.swiperight,
                    swipeleft: i.swipeleft,
                    direction: "x",
                    hasChild: !1,
                    width: 0,
                    height: 0,
                    handleMove: i.handleMove,
                    zoom: i.zoom,
                    distance: i.distance,
                    transition: 300
                }), y.mask && (x = bui.mask({
                    id: i.id + "-mask",
                    appendTo: k,
                    autoTrigger: !1,
                    opacity: i.opacity,
                    callback: function () {
                        m.close()
                    }
                })), C || (a(), i.height > 0 && e.obj(i.id).height(i.height)), this
            }

            function a() {
                var e = this;
                m.on("open", function (t) {
                    I && I.addClass("active"), x && x.show(), k.css("overflow-y", "hidden"), T = !0, v.call(e, "open", t)
                }), m.on("close", function () {
                    I && I.removeClass("active"), x && x.hide(), k.css("overflow-y", "auto"), T = !1, v.call(e, "close")
                }), I && I.on("click.bui", function (e) {
                    if (!t(this).hasClass("disabled")) {
                        var n = t(this).attr("data-target") || "swiperight";
                        T ? r() : o({
                            target: n
                        })
                    }
                }), C = !0
            }

            function o(e) {
                var t = e || {};
                return t.target = t.target || "swiperight", t.transition = t.transition || 300, m.open(t), this
            }

            function r() {
                return m.close(), this
            }

            function l() {
                return m.lock(), v.call(this, "lock"), this
            }

            function s(e) {
                return m.unlock(), v.call(this, "unlock"), this
            }

            function c() {
                return T
            }

            function u() {
                return m.active()
            }

            function d(e) {
                var e = 1 == e;
                I && I.off("click.bui"), g("open"), g("close"), x && x.destroy(e), m && m.destroy(e)
            }

            function f(t) {
                var n = {
                    swipe: m,
                    mask: x
                };
                return e.widget.call(n, t)
            }

            function h(t, n) {
                return e.option.call(w, t, n)
            }

            function p(t, n) {
                return e.on.apply(w, arguments), this
            }

            function g(t, n) {
                return e.off.apply(w, arguments), this
            }

            function v(t) {
                w.self = this == window || this == w ? null : this, e.trigger.apply(w, arguments)
            }
            var m, b = {
                    id: "",
                    trigger: "",
                    handle: ".bui-page",
                    swiperight: ".swiperight",
                    swipeleft: ".swipeleft",
                    handleMove: !0,
                    mask: !0,
                    width: 280,
                    opacity: .1,
                    height: 0,
                    zoom: !0,
                    distance: 40
                },
                w = {
                    handle: {},
                    on: p,
                    off: g,
                    active: u,
                    isActive: c,
                    open: o,
                    close: r,
                    lock: l,
                    unlock: s,
                    destroy: d,
                    widget: f,
                    option: h,
                    config: y,
                    init: i
                },
                y = w.config = t.extend(!0, {}, b, e.config.sidebar, n),
                x = null,
                k = null,
                T = !1,
                C = !1,
                I = null;
            return i(y), w
        }
    }(bui || {}, libs),
    function (e, t) {
        e.listview = function (n) {
            function i(n) {
                var i = t.extend(!0, k, n);
                return k = x.config = i, b = e.obj(i.id), w = b.children(), w.length && a(i), T || o(i), this
            }

            function a(e) {
                e.height > 0 && b.height(e.height), e.data.length ? w.each(function (n, i) {
                    var a = t(i),
                        o = a.attr("status"),
                        l = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;
                    if (!o) {
                        var s = r(e);
                        a.append(s).attr("status", "1")
                    }
                    i.style.height || t(i).height(l)
                }) : w.each(function (n, i) {
                    var a = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;
                    i.style.height || t(i).height(a)
                })
            }

            function o(e) {
                var t = this,
                    n = function (t) {
                        t.ui = x, e.callback && e.callback.call(x, t, m)
                    };
                b.on("click.bui", ".bui-listview-menu .bui-btn", n), m = bui.swipe({
                    id: e.id,
                    handle: e.handle,
                    movingDistance: e.menuWidth,
                    swiperight: e.swiperight,
                    swipeleft: e.swipeleft,
                    direction: "x",
                    hasChild: !0,
                    width: e.width,
                    height: 0,
                    zoom: k.zoom,
                    distance: e.distance,
                    transition: 300
                }), m.on("open", function (e) {
                    C = !0, v.call(t, "open", e)
                }), m.on("close", function (e) {
                    C = !1, v.call(t, "close", e)
                }), T = !0
            }

            function r(e) {
                var n = "",
                    i = "right" == e.position ? e.swipeleft.substr(1) : e.swiperight.substr(1);
                return n += '<div class="bui-listview-menu ' + i + '">', t.each(e.data, function (e, t) {
                    n += '    <div class="bui-btn ' + t.classname + '">' + t.text + "</div>"
                }), n += "</div>"
            }

            function l() {
                return m.active()
            }

            function s(e) {
                var t = e || {};
                return t.target = t.target || ("right" == k.position ? k.swipeleft.substr(1) : k.swiperight.substr(1)), t.transition = t.transition || 300, t.index = t.index || 0, m.open(t), this
            }

            function c() {
                return m.close(), this
            }

            function u() {
                return m.lock(), v.call(this, "lock"), this
            }

            function d(e) {
                return m.unlock(), v.call(this, "unlock"), this
            }

            function f(e) {
                var e = 1 == e;
                w && (w.off("click.bui"), w = null), b && (b.off("click.bui"), e && b.remove(), b = null), g("open"), g("close"), m && m.destroy(e), k = null, x = null
            }

            function h(t) {
                var n = {
                    swipe: m
                };
                return e.widget.call(n, t)
            }

            function p(t, n) {
                return e.option.call(x, t, n)
            }

            function g(t, n) {
                return e.off.apply(x, arguments), this
            }

            function v(t) {
                x.self = this == window || this == x ? null : this, e.trigger.apply(x, arguments)
            }
            var m, b, w, y = {
                    id: "",
                    data: [],
                    handle: ".bui-btn",
                    swiperight: ".swiperight",
                    swipeleft: ".swipeleft",
                    position: "right",
                    width: 0,
                    height: 0,
                    menuWidth: 160,
                    menuHeight: 0,
                    distance: 80,
                    zoom: !1,
                    callback: null
                },
                x = {
                    active: l,
                    lock: u,
                    unlock: d,
                    open: s,
                    close: c,
                    destroy: f,
                    widget: h,
                    option: p,
                    config: k,
                    init: i
                },
                k = x.config = t.extend(!0, {}, y, e.config.listview, n),
                T = !1,
                C = !1;
            return i(k), x
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.btn = function (n) {
            function i(n) {
                var n = n;
                o();
                var i = 0;
                r.on("click.bui", c, function (a) {
                    var o = n || t(this).attr("href"),
                        r = t(this).attr("target"),
                        c = t(this).attr("disabled"),
                        d = t(this).hasClass("disabled") || "" == c || "true" == c || "disabled" == c,
                        f = {};
                    if (o && !d && !(o && o.indexOf("javascript:") > -1)) {
                        if (o && o.indexOf("?") > -1) {
                            var h = o.split("?");
                            f = e.unit.keyStringToObject(h[1]), o = h[0]
                        }
                        var p = t(this).attr("param") || "",
                            g = p && p.indexOf("{") > -1 && p.indexOf("}") > -1 ? JSON.parse(t(this).attr("param")) : {},
                            v = t.extend(!0, f, g);
                        (t(this).attr("progress") ? "false" != t(this).attr("progress") : l) && e.loading({
                            autoTrigger: !0,
                            display: "block",
                            opacity: 0,
                            timeout: u.timeout
                        });
                        var m = +new Date;
                        if (m - i < 350) return !1;
                        i = m;
                        var b = {
                            url: o,
                            param: v,
                            replace: s
                        };
                        return "_blank" == r ? e.run({
                            id: o,
                            data: v
                        }) : e.load(b), !1
                    }
                })
            }

            function a(n, i) {
                var i = i || {};
                o(), r.on("click.bui", c, function (a) {
                    var o = this,
                        r = t(o).css("background-color"),
                        l = "none" == r ? "#fff" : r;
                    i.appendTo = o, i.background = i.background || l, i.display = i.display || "inline", i.width = i.width || 15, i.height = i.height || 15, i.text = i.text || "加载中", i.autoClose = 0 != i.autoClose, i.autoTrigger = 0 != i.autoTrigger;
                    var s = e.loading(i);
                    return n && n.call(o, s)
                })
            }

            function o() {
                return r.off("click.bui", c), this
            }
            var r, l, s, c, u = {};
            return function (t) {
                "object" === e.typeof(t) ? (u.id = t.id || "", u.handle = t.handle || "", u.progress = "progress" in t && t.progress, u.replace = "replace" in t && t.replace, u.timeout = t.timeout || 3e3) : "string" === e.typeof(t) && (u.id = t || "", u.handle = "", u.progress = !1, u.replace = !1, u.timeout = 3e3), r = e.obj(u.id), c = u.handle, l = u.progress, s = u.replace
            }(n), {
                load: i,
                submit: a,
                off: o
            }
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.dialog = function (n) {
            function i(n) {
                var i = t.extend(!0, I, n);
                switch (i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), P = !1, x = i.effect, i.position) {
                case "top":
                    O = "bui-dialog-top", x = i.effect || "fadeInDown";
                    break;
                case "bottom":
                    O = "bui-dialog-bottom", x = i.effect || "fadeInUp";
                    break;
                case "left":
                    O = "bui-dialog-left", x = i.effect || "fadeInLeft";
                    break;
                case "right":
                    O = "bui-dialog-right", x = i.effect || "fadeInRight";
                    break;
                case "center":
                    O = "bui-dialog-center", x = i.effect || E
                }
                i.fullscreen && (O = "bui-dialog-fullscreen", x = i.effect || E), i.render ? (i.id = e.guid(), c(i), w = e.objId(i.id)) : (w = e.obj(i.id), w.addClass(O)), S = w.width() > N ? N : w.width(), j = w.height() > D ? D : w.height(), w.css("display", "none"), y = e.toggle({
                    id: i.id,
                    effect: x
                });
                try {
                    k = n.mask && e.mask({
                        id: i.id + "-mask",
                        opacity: n.opacity,
                        appendTo: w.parent(),
                        autoTrigger: !1,
                        onlyOne: !0,
                        autoClose: !1,
                        zIndex: parseInt(n.zIndex, 10) - 1,
                        callback: function (e) {
                            n.onMask && n.onMask.call(C, e), I.autoClose && (I.render ? l(s) : l())
                        }
                    })
                } catch (e) {
                    console.log(e)
                }
                return L && !I.render || u(), I = C.config = i, this
            }

            function a(e) {
                var n = "";
                return n += '<div id="' + e.id + '" class="bui-dialog ' + O + " " + e.className + '" style="display:block;z-index:' + e.zIndex + '">', e.title && (n += '\t<div class="bui-dialog-head">' + e.title + "</div>"), n += '\t<div class="bui-dialog-main">', e.content && (n += e.content), n += "\t</div>", e.buttons && e.buttons.length && (n += '\t<div class="bui-dialog-foot bui-box">', t(e.buttons).each(function (e, t) {
                    n += '\t\t<div class="bui-btn span1 ' + (t.className || "") + '" value="' + (t.value || "") + '">' + (t.name || t) + "</div>"
                }), n += "\t</div>"), e.close && (n += '   <div class="bui-dialog-close">' + (e.closeText ? e.closeText : '<i class="icon-close"></i>') + "</div>"), n += "</div>"
            }

            function o(t) {
                if (!r && !P) {
                    w.css("display", "block");
                    if (0 == (w.attr("status") || 0)) {
                        S = I.width || w.width(), j = I.height || w.height();
                        var n = e.unit.pxToRemZoom(S),
                            i = e.unit.pxToRemZoom(j),
                            a = I.zoom ? n + "rem" : S + "px",
                            o = I.zoom ? i + "rem" : j + "px",
                            l = I.zoom ? "-" + i / 2 + "rem" : "-" + j / 2 + "px",
                            s = I.zoom ? "-" + n / 2 + "rem" : "-" + S / 2 + "px";
                        if ("center" != I.position || I.fullscreen || w.css({
                            width: a,
                            height: o,
                            top: "50%",
                            "margin-top": l,
                            left: "50%",
                            "margin-left": s,
                            right: "auto"
                        }), I.fullscreen || w.css({
                            width: a,
                            height: o
                        }), I.scroll) {
                            var c = w.children(".bui-dialog-head"),
                                d = w.children(".bui-dialog-foot"),
                                f = w.children(".bui-dialog-main"),
                                h = c.length ? c.height() : 0,
                                p = d.length ? d.height() : 0,
                                g = w.height() - h - p;
                            f.css({
                                height: g
                            })
                        }
                        w.attr("status", "1")
                    }
                    return k && k.show(), y.show(function (e) {
                        r = !0, t && t.call(C, {
                            toggle: y
                        }), b.call(C, "openafter", {
                            toggle: y
                        })
                    }), L || u(), b.call(C, "open", {
                        toggle: y
                    }), this
                }
            }

            function r(e) {
                return r
            }

            function l(t) {
                if (r && !P) {
                    var t = t || I.onClose;
                    try {
                        y.hide(function (e) {
                            r = !1, t && t.call(C, {
                                toggle: y
                            })
                        }), k && k.hide(), b.call(this, "close", {
                            toggle: y
                        })
                    } catch (t) {
                        e.showLog(t, "bui.dialog.close")
                    }
                    return this
                }
            }

            function s() {
                try {
                    w.remove(), k && k.remove(), b.call(this, "remove")
                } catch (t) {
                    e.showLog(t, "bui.dialog.remove")
                }
                return this
            }

            function c(e) {
                var n = a(e);
                return t(e.appendTo).append(n), this
            }

            function u() {
                return w.on("click.bui", ".bui-dialog-close", function (e) {
                    I.onClose && I.onClose.call(C, e, C), I.autoClose && (I.render ? l(s) : l()), e.stopPropagation()
                }), w.on("click.bui", ".bui-dialog-foot .bui-btn", function (e) {
                    e.target = this, I.callback && I.callback.call(C, e, C), I.autoClose && (I.render ? l(s) : l()), e.stopPropagation()
                }), L = !0, this
            }

            function d(t) {
                return e.selector.call(w, t)
            }

            function f(e) {
                return T.title = "提示", T.content = "", T.close = !1, T.render = !0, T.autoClose = !0, T.mask = !0, T.buttons = ["确定"], I = t.extend(!0, T, e), i(I), b.call(C, "create"), this
            }

            function h() {
                var e = 1 == e;
                w && (w.off("click.bui"), w.remove(), w = null), m("open"), m("close"), k && k.destroy(e), y && y.destroy(e), P = !0
            }

            function p(t) {
                var n = {
                    toggle: y,
                    mask: k
                };
                return e.widget.call(n, t)
            }

            function g(t, n) {
                return e.option.call(C, t, n)
            }

            function v(t, n) {
                return e.on.apply(C, arguments), this
            }

            function m(t, n) {
                return e.off.apply(C, arguments), this
            }

            function b(t) {
                C.self = this == window || this == C ? null : this, e.trigger.apply(C, arguments)
            }
            var w, y, x, k, T = {
                    id: "",
                    title: "",
                    effect: "zoomIn",
                    content: "",
                    className: "",
                    appendTo: "",
                    position: "center",
                    fullscreen: !1,
                    width: 0,
                    height: 0,
                    mask: !0,
                    opacity: .6,
                    render: !1,
                    autoClose: !0,
                    close: !0,
                    scroll: !0,
                    closeText: "",
                    zoom: !1,
                    zIndex: 100,
                    buttons: [],
                    onMask: null,
                    onClose: null,
                    callback: null
                },
                C = {
                    selector: d,
                    $el: d,
                    $: d,
                    handle: {},
                    on: v,
                    off: m,
                    open: o,
                    close: l,
                    isOpen: r,
                    create: f,
                    remove: s,
                    destroy: h,
                    widget: p,
                    option: g,
                    config: I,
                    init: i
                },
                I = C.config = t.extend(!1, {}, T, e.config.dialog, n),
                O = "",
                S = "",
                j = "",
                E = "fadeInDown",
                r = !1,
                L = !1,
                N = window.viewport.width() || document.documentElement.clientWidth,
                D = window.viewport.height() || document.documentElement.clientHeight,
                P = !1;
            return I.id && i(I), C
        }
    }(bui || {}, libs),
    function (e, t) {
        e.alert = function (n, i) {
            var a = e.dialog(),
                o = {};
            o.className = "bui-alert", o.title = "", o.width = 580, o.height = 360, o.scroll = !0, o.zIndex = 111, o.position = "center", o.autoClose = !0, o.zoom = !0, o.buttons = [{
                name: "确定",
                className: "primary-reverse"
            }], o.callback = i || function () {};
            var r = t.extend(o, e.config.alert),
                l = "";
            try {
                l = "string" == typeof n && n.indexOf("<") > -1 && n.indexOf(">") > -1 ? "<xmp>" + n + "</xmp>" : !n || "object" !== e.typeof(n) && "array" !== e.typeof(n) ? n && "function" === e.typeof(n) ? n.toString() : n : JSON.stringify(n), r.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + l + "</div>"
            } catch (t) {
                e.showLog(t, "bui.alert")
            }
            return a.create(r).open(), a
        }
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.confirm = function (i, a) {
            var o = e.dialog(),
                r = {};
            r.className = "bui-confirm", r.title = "", r.width = 580, r.height = 360, r.scroll = !0, r.zIndex = 111, r.autoClose = !0, r.zoom = !0, r.position = "center", r.buttons = [{
                name: "取消",
                className: ""
            }, {
                name: "确定",
                className: "primary-reverse"
            }], r.callback = a || function () {};
            var l = {};
            return "object" === (void 0 === i ? "undefined" : t(i)) ? (i.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + i.content + "</div>", l = n.extend(r, e.config.confirm, i)) : (l = n.extend(r, e.config.confirm), l.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + i + "</div>", l.callback = a || function () {}), o.create(l).open(), o
        }
    }(window.bui || {}, window.libs);
    e(function (e) {
        ! function (n, i) {
            n.prompt = function (a, o) {
                var r = n.dialog(),
                    l = {};
                l.className = "bui-prompt", l.title = "", l.width = 580, l.height = 400, l.scroll = !0, l.autoClose = !1, l.zoom = !0, l.zIndex = 111, l.position = "center", l.buttons = [{
                    name: "取消",
                    className: ""
                }, {
                    name: "确定",
                    className: "primary-reverse"
                }], l.callback = o || function () {}, l.placeholder = "", l.row = 1, l.type = "text", l.value = "", l.onChange = null;
                var s = {},
                    c = "",
                    u = "";
                switch ("object" === (void 0 === a ? "undefined" : t(a)) ? (s = i.extend(l, n.config.prompt, a), c = s.content || "") : (s = i.extend(l, n.config.prompt), s.callback = o || function () {}, c = a || ""), s.type) {
                case "number":
                    s.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + c + '</div> <div class="span1"> <input class="bui-prompt-text" placeholder="' + s.placeholder + '" type="' + s.type + '" value="' + s.value + '"/> </div> </div>';
                    break;
                default:
                    s.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + c + '</div> <div class="span1"> <textarea class="bui-prompt-text" placeholder="' + s.placeholder + '" rows="' + s.row + '" >' + s.value + "</textarea> </div> </div>"
                }
                return r.create(s).open(), i("#" + r.config.id).on("change", ".bui-prompt-text", function (t) {
                    u = this.value, s.onChange && s.onChange.call(e, t)
                }), r.value = function (e) {
                    return void 0 === e ? u : (i("#" + r.config.id).find(".bui-prompt-text").val(e), u = e)
                }, r.focus = function (e) {
                    i("#" + r.config.id).find(".bui-prompt-text").focus()
                }, r
            }
        }(window.bui || {}, window.libs)
    });
    ! function (e, n) {
        e.hint = function (i, a) {
            function o(t) {
                var i = n.extend(!0, C, t);
                return x = e.guid(), S = "top" === i.position ? "fadeInDown" : "bottom" === i.position ? "fadeInUp" : i.effect, C = T.config = i, l(x, i.content, I, i.appendTo), ++I, O = e.objId(x), y = e.toggle({
                    id: O,
                    effect: S
                }), j = !0, y.show(), i.autoClose && (k && clearTimeout(k), k = setTimeout(function () {
                    i.onClose && i.onClose.call(T), c()
                }, i.timeout)), E || r(i), this
            }

            function r(e) {
                e.showClose && O.on("click.bui", ".bui-hint-close", function (t) {
                    c(), e.onClose && e.onClose.call(T, t)
                }), E = !0
            }

            function l(t, i, a, o) {
                var r, l = "11" + a,
                    s = o ? e.obj(o) : n("body");
                switch (C.position) {
                case "top":
                    r = "bui-hint-top";
                    break;
                case "bottom":
                    r = "bui-hint-bottom";
                    break;
                case "center":
                    r = "bui-hint-center"
                }
                var c = C.background ? "background:" + C.background : "",
                    u = c + ";z-index:" + l + ";opacity:" + C.opacity,
                    d = '<div id="' + t + '" class="bui-hint ' + r + " " + C.skin + '" style="' + u + '">' + i + (C.showClose ? '<div class="bui-hint-close"><i class="icon-close"></i></div>' : "") + "</div>";
                s.append(d), o && s.css("position", "relative")
            }

            function s() {
                return j
            }

            function c() {
                var e = this;
                return y && (j = !1, y.hide(function () {
                    y.remove(), m.call(e, "remove", {
                        toggle: y
                    }), y = null
                })), this
            }

            function u(e) {
                var t = this;
                return y && (j = !1, y.hide(function () {
                    e && e.call(T, {
                        toggle: y
                    }), m.call(t, "hide", {
                        toggle: y
                    })
                })), this
            }

            function d(e) {
                var t = this;
                return y && (j = !0, y.show(function (n) {
                    m.call(t, "show", {
                        toggle: y
                    }), e && e.call(T, {
                        toggle: y
                    })
                })), this
            }

            function f(e) {
                var e = 1 == e;
                O.off("click.bui"), y && y.destroy(e), v("show"), v("hide")
            }

            function h(t) {
                var n = {
                    toggle: y
                };
                return e.widget.call(n, t)
            }

            function p(t, n) {
                return e.option.call(T, t, n)
            }

            function g(t, n) {
                return e.on.apply(T, arguments), this
            }

            function v(t, n) {
                return e.off.apply(T, arguments), this
            }

            function m(t) {
                T.self = this == window || this == T ? null : this, e.trigger.apply(T, arguments)
            }
            var b = {
                appendTo: "",
                content: "",
                timeout: 2e3,
                autoClose: !0,
                showClose: !1,
                opacity: 1,
                background: "",
                effect: "fadeInUp",
                skin: "",
                position: "bottom",
                onClose: null
            };
            if ("number" == typeof i || "string" == typeof i) {
                var w = i || "";
                i = {}, i.content = w, i.onClose = a || null
            } else "object" === (void 0 === i ? "undefined" : t(i)) && i.content && (i = i);
            var y, x, k, T = {
                    handle: {},
                    on: g,
                    off: v,
                    remove: c,
                    hide: u,
                    show: d,
                    isShow: s,
                    destroy: f,
                    widget: h,
                    option: p,
                    config: C,
                    init: o
                },
                C = T.config = n.extend(!0, {}, b, e.config.hint, i),
                I = 0,
                O = null,
                S = "",
                j = !1,
                E = !1;
            return C.content && o(C), T
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.pullrefresh = function (n) {
            function i(n) {
                var i = t.extend(!0, A, n);
                return i.id ? (C = e.obj(i.id), A = z.config = i, I = C[0], O = C.children(P), S = C.children(F), j = C.children(R), N = a, L = i.refreshTips.end, D = e.loading({
                    appendTo: O,
                    width: 15,
                    height: 15,
                    autoClose: !1,
                    text: L,
                    onlyText: !0,
                    display: "inline",
                    autoTrigger: !1,
                    mask: !1
                }), i.autoLoad && (q = !0, D.start({
                    text: i.refreshTips.start,
                    onlyText: !1
                }), N()), U || r(i), m(i.height), this) : void e.hint("pullrefresh id不能为空")
            }

            function a() {
                V = (new Date).getTime(), A.onRefresh && A.onRefresh.call(z), T.call(z, "refresh")
            }

            function o() {
                var e = (new Date).getTime(),
                    t = e - V,
                    n = Math.floor(t / 36e5),
                    i = Math.floor(t / 6e4);
                Math.floor(t / 1e3);
                return n <= 0 && i <= 0 ? "刚刚更新" : n <= 0 && i > 0 ? i + "分钟前更新" : "上次更新时间:" + (n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i)
            }

            function r(e) {
                H || d(), U = !0
            }

            function l(n) {
                var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches,
                    a = B ? i[0] : n;
                return $.x1 = a.pageX, $.y1 = a.pageY, $.direction = "", Q = C.scrollTop(), A.stopHandle && e.unit.checkTargetInclude(n.target, A.stopHandle) ? void(J = !1) : i.length > 1 || n.scale && 1 !== n.scale ? void(J = !1) : (L = A.lastUpdated ? o() : A.refreshTips.end, T.call(z, "touchstart", n, $), void(J = !(!(t(window).scrollTop() <= 0 && Q <= 0 && A.onRefresh) || q)))
            }

            function s(t) {
                var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches;
                if (!J) return void h();
                if (n.length > 1 || t.scale && 1 !== t.scale) return void h();
                var i = B ? n[0] : t;
                $.x2 = i.pageX, $.y2 = i.pageY, $.direction || ($.direction = e.swipeDirection($.x1, $.x2, $.y1, $.y2)), T.call(z, "touchmove", t, $), "swipeleft" !== $.direction && "swiperight" !== $.direction || t.preventDefault(), $.y2 - $.y1 > 0 && Q <= 0 && t.preventDefault(), "swipedown" == $.direction ? (T.call(z, "movingdown", t, $), E = Math.abs($.y2 - $.y1), h(E / 2, !1), E >= A.distance ? Z || (D.show({
                    text: A.refreshTips.release,
                    onlyText: !1
                }).pause(), Z = !0) : G || (D.show({
                    text: L,
                    onlyText: !1
                }).pause(), G = !0), X = !0, A.maxDistance > A.distance && E >= A.maxDistance && (D.show({
                    text: A.refreshTips.start,
                    onlyText: !1
                }).start(), q = !0, A.onRefresh && N(), X = !1, Z = !1, G = !1, $ = {}, _ += $.y2 - $.y1, K += $.x2 - $.x1, $.lastX = K, $.lastY = _, $ = {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 0,
                    direction: ""
                }, J = !1, X = !1), t.preventDefault(), t.stopPropagation()) : "swipeup" == $.direction && (T.call(z, "movingup", t, $), X = !0)
            }

            function c(e) {
                if (T.call(z, "touchend", e, $), !X) return $ = {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 0,
                    direction: ""
                }, J = !1, void(X = !1);
                "swipedown" == $.direction ? (T.call(z, $.direction, e, $), E >= A.distance ? (h(A.distance / 2), D.show({
                    text: A.refreshTips.start,
                    onlyText: !1
                }).start(), q = !0, A.onRefresh && N()) : h(), e.stopPropagation(), Z = !1, G = !1, $ = {}) : "swipeup" == $.direction && T.call(z, $.direction, e, $), _ += $.y2 - $.y1, K += $.x2 - $.x1, $.lastX = K, $.lastY = _, $ = {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 0,
                    direction: ""
                }, J = !1, X = !1
            }

            function u(e) {
                return H = !0, C.off("touchstart", l).off("touchmove", s).off("touchend", c).off("touchcancel", h), h(), e && e.call(z), T.call(z, "lock"), this
            }

            function d(e) {
                return H = !1, C.on("touchstart", l).on("touchmove", s).on("touchend", c).on("touchcancel", h), e && e.call(this), T.call(z, "unlock"), this
            }

            function f(e, t, n) {
                return W || (D.show({
                    text: A.refreshTips.success,
                    onlyText: !1
                }), h(e, t), S.one("webkitTransitionEnd", function () {
                    D && D.hide(), W = !1, n && n.call(z)
                })), this
            }

            function h(e, t) {
                t = 0 != t, e = e || 0, q = !1;
                var n = t ? "all 300ms ease-out" : "none";
                return p(0, e + "px", n, S), j.length && p(0, e + "px", n, j), this
            }

            function p(e, t, n, i) {
                var n, i = i || C,
                    e = e || 0,
                    t = t || 0,
                    a = e,
                    o = t,
                    r = String(e).indexOf("%") > -1 ? String(e) : a,
                    l = String(t).indexOf("%") > -1 ? String(t) : o;
                n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";
                try {
                    i.css({
                        "-webkit-transition": n,
                        transition: n,
                        "-webkit-transform": "translate(" + r + "," + l + ")",
                        transform: "translate(" + r + "," + l + ")"
                    }), i.one("webkitTransitionEnd", function () {
                        i.css({
                            "-webkit-transition": "none",
                            transition: "none"
                        })
                    })
                } catch (e) {
                    console.log(e.message)
                }
            }

            function g() {
                W = !0, h(), e.hint(A.refreshTips.fail), T.call(z, "fail")
            }

            function v() {
                h(A.distance / 2, !0), D.start({
                    text: A.refreshTips.start,
                    onlyText: !1
                }), A.onRefresh && N()
            }

            function m(e) {
                var t = C.parents(".bui-page"),
                    n = (t.children("main"), I && I.offsetTop || 0),
                    i = t.children(A.header),
                    a = i.length > 1 ? i.eq(i.length - 1).height() : i.height(),
                    o = t.children(A.footer),
                    r = o.length > 1 ? o.eq(o.length - 1).height() : o.height(),
                    l = window.viewport.height() - (a || 0) - (r || 0) - n,
                    s = e ? parseFloat(e) : l;
                C.height(s)
            }

            function b(e) {
                var e = 1 == e;
                C && (C.off(), e && C.remove()), D && D.destroy(e), k("refresh"), k("movingdown"), k("swipedown")
            }

            function w(t) {
                var n = {
                    loading: D
                };
                return e.widget.call(n, t)
            }

            function y(t, n) {
                return e.option.call(z, t, n)
            }

            function x(t, n) {
                return e.on.apply(z, arguments), this
            }

            function k(t, n) {
                return e.off.apply(z, arguments), this
            }

            function T(t) {
                z.self = this == window || this == z ? null : this, e.trigger.apply(z, arguments)
            }
            var C, I, O, S, j, E, L, N, D, P = "." + e.prefix("scroll-head"),
                F = "." + e.prefix("scroll-main"),
                R = "." + e.prefix("scroll-foot"),
                M = {
                    id: "",
                    stopHandle: "",
                    childrenTop: P,
                    childrenMain: F,
                    header: ".bui-page header",
                    footer: ".bui-page footer",
                    distance: 90,
                    maxDistance: 0,
                    autoLoad: !0,
                    lastUpdated: !1,
                    height: 0,
                    refreshTips: {
                        start: "刷新中..",
                        release: "松开刷新",
                        end: "下拉刷新",
                        fail: "刷新失败,请检查下网络再试试",
                        success: "刷新成功"
                    },
                    onRefresh: null
                },
                z = {
                    handle: {},
                    on: x,
                    off: k,
                    reverse: f,
                    refresh: v,
                    setHeight: m,
                    fail: g,
                    lock: u,
                    unlock: d,
                    destroy: b,
                    widget: w,
                    option: y,
                    config: A,
                    init: i
                },
                A = z.config = t.extend(!0, {}, M, e.config.pullrefresh, n),
                H = !1,
                V = (new Date).getTime(),
                q = !1,
                U = !1,
                W = !1,
                Y = /hp-tablet/gi.test(navigator.appVersion),
                B = "ontouchstart" in window && !Y,
                _ = 0,
                K = 0,
                J = !1,
                X = !1,
                $ = {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 0,
                    direction: ""
                };
            i(A);
            var Q = 0,
                Z = !1,
                G = !1;
            return z
        }
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.scroll = function (i) {
            function a(t) {
                var i = n.extend(!0, J, t);
                if (P = n(window), !i.id) return void e.hint("scroll id不能为空");
                N = e.obj(i.id), ie = i.page, ae = i.pageSize, J = K.config = i, G = !0, ee = !0, te = !1, ne = !1, D = N[0], R = N.children(W), z = N.children(Y), M = N.children(B), z.css({
                    position: "relative"
                }), V = e.loading({
                    appendTo: M,
                    width: 20,
                    height: 20,
                    autoClose: !1,
                    text: i.scrollTips.start,
                    display: "inline",
                    autoTrigger: !1,
                    mask: !1
                }), A = s, H = l, q ? q.init({
                    id: i.id,
                    onRefresh: A,
                    distance: i.distance,
                    maxDistance: i.maxDistance,
                    lastUpdated: i.lastUpdated,
                    height: i.height,
                    refreshTips: i.refreshTips,
                    autoLoad: i.autoRefresh
                }) : i.refresh && i.onRefresh ? (q = e.pullrefresh({
                    id: i.id,
                    onRefresh: A,
                    distance: i.distance,
                    stopHandle: i.stopHandle,
                    maxDistance: i.maxDistance,
                    lastUpdated: i.lastUpdated,
                    header: i.header,
                    footer: i.footer,
                    height: i.height,
                    refreshTips: i.refreshTips,
                    autoLoad: i.autoRefresh
                }), q.lock(), Q = !0) : b(i.height);
                try {
                    H && H.call(K, ie, ae)
                } catch (t) {
                    e.showLog(t, "bui.scroll.init")
                }
                return oe || o(i), this
            }

            function o(t) {
                N.on("scroll", e.unit.debounce(r, t.delayTime)), oe = !0
            }

            function r(e) {
                var t = e.target;
                0 == (t.scrollTop || 0) ? L.call(K, "scrolltop", e) : t.scrollTop + t.clientHeight >= (t && t.scrollHeight - J.endDistance) && J.onLoad && (J.page = K.config.page = ++ie, J.autoScroll && H && H.call(K, J.page, ae), L.call(K, "scrollbottom", e)), L.call(K, "scrollend", e), J.onScrolling && J.onScrolling.call(K, e, K)
            }

            function l(e, t) {
                return Z = !0, ne = !1, ee && !te && (J.page = K.config.page = e, J.onLoad && V && V.start({
                    text: J.scrollTips.start,
                    onlyText: !1
                }), J.onLoad && J.onLoad.call(K, e, t)), Q && J.refresh && q && q.unlock(), this
            }

            function s() {
                Z = !0, ee = !0, te = !1, G = !0, ne = !0, ie = X, ae = J.pageSize, re = {}, V && V.start({
                    text: J.scrollTips.end,
                    onlyText: !0
                }), J.page = K.config.page = ie, L.call(K, "refresh", ie), J.onRefresh && J.onRefresh.call(K, ie, ae)
            }

            function c(t, n, i) {
                var i = 0 != i;
                if (!n || "array" != e.typeof(n)) return e.showLog("scroll 控件的updatePage 第2个参数,必须是一个数组,如果是list控件,检测field的data映射是否准确", "bui.scroll.updatePage"), void(n = []);
                n = n, Z = !1, le && clearTimeout(le), le = setTimeout(function () {
                    var e = parseInt(N.height()),
                        a = parseInt(N.find(J.childrenMain)[0] && N.find(J.childrenMain)[0].scrollHeight);
                    if (i)
                        if (n && n.length > ae - 1) {
                            if (ee = !0, te = !1, G = !1, V && V.start({
                                text: J.scrollTips.end,
                                onlyText: !0
                            }), a >= 10 && a < e && J.autoNext && J.onLoad) {
                                var o = ++ie;
                                H && H.call(K, o, ae)
                            }
                            L.call(K, "loadpage", n, ie)
                        } else {
                            ee = !1, te = !0;
                            var r = G && n.length < 1 ? J.scrollTips.nodata : J.scrollTips.last;
                            V && V.start({
                                text: r,
                                onlyText: !0
                            }), L.call(K, "loadpage", n, ie), L.call(K, "lastpage", n, ie)
                        } else ee = !1, te = !0, V && V.stop();
                    return re[t] = n
                }, 10)
            }

            function u(e) {
                return q && q.reverse(), e && e.call(K, q), this
            }

            function d() {
                return ne
            }

            function f(e) {
                return re
            }

            function h(e) {
                re = {}
            }

            function p(e, t) {
                return $ = !0, Q = !0, V.show({
                    text: J.scrollTips.fail,
                    onlyText: !0,
                    callback: function (n) {
                        l(e, t)
                    }
                }), q && q.lock(), this
            }

            function g(t, n) {
                var i, a, o = [];
                if (t && n)
                    for (i in re) {
                        var r = e.array.filter(t, re[i], n);
                        if (r.length)
                            for (a in r) o.push(r[a])
                    }
                return o
            }

            function v(e, t) {
                var e = e || 0;
                F = N.find(J.children).children(J.handle);
                var n = N.height(),
                    i = parseFloat(F.height()),
                    a = D.scrollHeight,
                    o = i * parseInt(e) - i;
                return a > n && (D.scrollTop = o, L.call(K, "to", e), t && t.call(K, parseInt(e))), this
            }

            function m(e) {
                var i = 0;
                return i = "object" === (void 0 === e ? "undefined" : t(e)) ? n(e)[0].offsetTop : "string" == typeof e && e.indexOf("#") > -1 ? n(e)[0].offsetTop : parseInt(e) || 0, D.scrollTop = i, this
            }

            function b(e) {
                var t = N.parents(".bui-page"),
                    n = (t.children("main"), D && D.offsetTop || 0),
                    i = t.children(J.header),
                    a = i.length > 1 ? i.eq(i.length - 1).height() : i.height(),
                    o = t.children(J.footer),
                    r = o.length > 1 ? o.eq(o.length - 1).height() : o.height(),
                    l = window.viewport.height() - (a || 0) - (r || 0) - n,
                    s = e ? parseFloat(e) : l;
                N.height(s)
            }

            function w() {
                return N.off("scroll", e.unit.debounce(r, J.delayTime)), L.call(K, "lock"), this
            }

            function y(t) {
                return N.on("scroll", e.unit.debounce(r, J.delayTime)), L.call(K, "unlock"), this
            }

            function x() {
                return v(1), q && q.refresh(), this
            }

            function k(e) {
                var e = e || ie;
                return ie = e, H && H.call(K, ie, ae), this
            }

            function T() {
                return H && H.call(K, ++ie, ae), this
            }

            function C() {
                return ie-- > 0 && H && H.call(K, ie--, ae), this
            }

            function I(e) {
                var e = 1 == e;
                N && (N.off("scroll"), e && N.remove()), q && q.destroy(e), V && V.destroy(e), E("loadpage"), E("lastpage"), E("scrolltop"), E("scrollbottom"), E("scrollend")
            }

            function O(t) {
                var n = {
                    pullrefresh: q,
                    loading: V
                };
                return e.widget.call(n, t)
            }

            function S(t, n) {
                return e.option.call(K, t, n)
            }

            function j(t, n) {
                return e.on.apply(K, arguments), this
            }

            function E(t, n) {
                return e.off.apply(K, arguments), this
            }

            function L(t) {
                K.self = this == window || this == K ? null : this, e.trigger.apply(K, arguments)
            }
            var N, D, P, F, R, M, z, A, H, V, q, U = "." + e.prefix("list"),
                W = "." + e.prefix("scroll-head"),
                Y = "." + e.prefix("scroll-main"),
                B = "." + e.prefix("scroll-foot"),
                _ = {
                    id: "",
                    childrenTop: W,
                    childrenMain: Y,
                    childrenBottom: B,
                    children: U,
                    stopHandle: "",
                    header: ".bui-page header",
                    footer: ".bui-page footer",
                    handle: "li",
                    distance: 100,
                    endDistance: 1,
                    height: 0,
                    page: 1,
                    pageSize: 10,
                    lastUpdated: !0,
                    autoRefresh: !1,
                    autoNext: !0,
                    autoScroll: !0,
                    refresh: !0,
                    delayTime: 100,
                    scrollTips: {
                        start: "努力加载中..",
                        end: "上拉加载更多",
                        nodata: "没有更多内容",
                        last: "没有更多内容",
                        fail: "点击重新加载"
                    },
                    refreshTips: {
                        start: "刷新中..",
                        release: "松开刷新",
                        end: "下拉刷新",
                        fail: "点击加载",
                        success: "刷新成功"
                    },
                    onScrolling: null,
                    onRefresh: null,
                    onLoad: null
                },
                K = {
                    handle: {},
                    on: j,
                    off: E,
                    reverse: u,
                    updateCache: c,
                    updatePage: c,
                    getCache: f,
                    clearCache: h,
                    fail: p,
                    filter: g,
                    to: v,
                    scrollTop: m,
                    lock: w,
                    unlock: y,
                    refresh: x,
                    load: k,
                    nextPage: T,
                    prevPage: C,
                    setHeight: b,
                    isRefresh: d,
                    destroy: I,
                    widget: O,
                    option: S,
                    config: J,
                    init: a
                },
                J = K.config = n.extend(!0, {}, _, e.config.scroll, i),
                X = J.page,
                $ = !1,
                Q = !1,
                Z = !1,
                $ = !1,
                G = !0,
                ee = !0,
                te = !1,
                ne = !1,
                ie = J.page,
                ae = J.pageSize,
                oe = !1,
                re = {};
            a(J);
            var le;
            return K
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.list = function (n) {
            function i(n) {
                var i = t.extend(!0, T, n);
                m = e.obj(i.id), b = m.find(i.children), T = k.config = i, I = T.data;
                var l = 0 == T.refresh ? null : r;
                if (T.url) return y ? y.init({
                    id: i.id,
                    children: i.children,
                    handle: i.handle,
                    page: i.page,
                    pageSize: i.pageSize,
                    distance: i.distance,
                    maxDistance: i.maxDistance,
                    height: i.height,
                    refresh: i.refresh,
                    autoNext: i.autoNext,
                    autoScroll: i.autoScroll,
                    scrollTips: i.scrollTips,
                    refreshTips: i.refreshTips,
                    lastUpdated: i.lastUpdated,
                    onRefresh: l,
                    onLoad: o
                }) : y = bui.scroll({
                    id: i.id,
                    children: i.children,
                    handle: i.handle,
                    header: i.header,
                    footer: i.footer,
                    page: i.page,
                    pageSize: i.pageSize,
                    distance: i.distance,
                    stopHandle: i.stopHandle,
                    maxDistance: i.maxDistance,
                    height: i.height,
                    refresh: i.refresh,
                    autoNext: i.autoNext,
                    autoScroll: i.autoScroll,
                    scrollTips: i.scrollTips,
                    refreshTips: i.refreshTips,
                    lastUpdated: i.lastUpdated,
                    onRefresh: l,
                    onLoad: o
                }), O || a(i), this
            }

            function a(e) {
                return e.callback && m.on("click", e.handle, function (t) {
                    e.callback.call(k, t)
                }), O = !0, this
            }

            function o(i, a, o) {
                function r(e, t, n) {
                    var i = (e - 1) * t;
                    return i + t >= n.length ? n.slice(i, n.length) : n.slice(i, i + t)
                }

                function l(t, a, o) {
                    var l, u;
                    l = "string" == typeof t ? t && JSON.parse(t) || {} : t || {}, u = T && T.field && "" == T.field.data ? l || [] : e.unit.getKeyValue(T.field.data, l), T.localData && (u = r(i, T.pageSize, u));
                    var d = n.template && n.template(u, l, i) || "";
                    d && b && b[c](d);
                    var f = y && y.isRefresh() || !1;
                    v.call(s, "success", t, i, o);
                    try {
                        f ? (T.onRefresh && T.onRefresh.call(k, y, l, o), v.call(s, "refresh", t, i, o), T.refresh && y.reverse()) : T.onLoad && T.onLoad.call(k, y, l, o), T.localData ? s && s.updatePage(i, u) : y && y.updatePage(i, u)
                    } catch (e) {}
                }
                var s = this,
                    c = o || T.commandLoad;
                return I = t.extend(!0, {}, S, T.data, I), T.field.page.length && e.unit.setKeyValue(T.field.page, i, I), T.field.size.length && e.unit.setKeyValue(T.field.size, a, I), T.page = k.config.page = i, T.data = I, T.localData ? void l(T.localData, 200) : (w = e.ajax(T).done(l).fail(function (e, t, n) {
                    v.call(s, "fail", e, i, n), T.onFail && T.onFail.call(k, t, y, i, n), y && y.fail(i, a, e)
                }), this)
            }

            function r() {
                var e = C,
                    t = T.pageSize;
                return v.call(this, "refreshbefore"), o(e, t, T.commandRefresh), this
            }

            function l() {
                return v.call(this, "refreshbefore"), y.refresh(), this
            }

            function s(n, i) {
                var a;
                if ("string" == typeof i) try {
                    a = JSON.parse(i)
                } catch (t) {
                    return void e.showLog("data 参数必须为对象", "bui.list.modifyData")
                } else a = i;
                return I = t.extend(!0, {}, S, a)
            }

            function c() {
                b.html("")
            }

            function u(e) {
                var e = 1 == e;
                m && (m.off("click.bui"), e && m.remove(), m = null), g("refreshbefore"), g("refresh"), g("success"), g("fail"), y && y.destroy(e)
            }

            function d(t) {
                var n = {
                    scroll: y,
                    ajax: w
                };
                return e.widget.call(n, t)
            }

            function f(t, n) {
                return "data" == t && void 0 !== n ? s(t, n) : e.option.call(k, t, n)
            }

            function h(e) {
                return T = k.config = t.extend(!0, {}, k.config, e), I = T.data, this
            }

            function p(t, n) {
                return e.on.apply(k, arguments), this
            }

            function g(t, n) {
                return e.off.apply(k, arguments), this
            }

            function v(t) {
                k.self = this == window || this == k ? null : this, e.trigger.apply(k, arguments)
            }
            var m, b, w, y, x = {
                    id: "",
                    url: "",
                    data: {},
                    method: "GET",
                    dataType: "json",
                    headers: {},
                    contentType: "",
                    timeout: 2e4,
                    field: {
                        page: "page",
                        size: "pageSize",
                        data: ""
                    },
                    scrollTips: {
                        start: "努力加载中..",
                        end: "上拉加载更多",
                        nodata: "没有更多内容",
                        last: "没有更多内容",
                        fail: "点击重新加载"
                    },
                    refreshTips: {
                        start: "刷新中..",
                        release: "松开刷新",
                        end: "下拉刷新",
                        fail: "点击加载",
                        success: "刷新成功"
                    },
                    lastUpdated: !1,
                    page: 1,
                    pageSize: 10,
                    autoNext: !0,
                    autoScroll: !0,
                    native: !0,
                    refresh: !0,
                    stopHandle: "",
                    children: ".bui-list",
                    handle: ".bui-btn",
                    header: ".bui-page header",
                    footer: ".bui-page footer",
                    height: 0,
                    commandRefresh: "html",
                    commandLoad: "append",
                    localData: null,
                    template: null,
                    onRefresh: null,
                    onLoad: null,
                    onFail: null,
                    callback: null
                },
                k = {
                    handle: {},
                    on: p,
                    off: g,
                    empty: c,
                    refresh: l,
                    modify: h,
                    destroy: u,
                    widget: d,
                    option: f,
                    config: T,
                    init: i
                },
                T = k.config = t.extend(!0, {}, x, e.config.list, n),
                C = T.page,
                I = {},
                O = !1,
                S = T.data;
            return i(T), k
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.searchbar = function (n) {
            function i(n) {
                var i = t.extend(!0, b, n);
                return f = e.obj(i.id), b = m.config = i, p = f.find("input"), f.find(i.handleRemove).length > 0 || p.after('<i class="' + i.handleRemove.substr(1) + '"></i>'), g = f.find(i.handleRemove), g.hide(), w || a(i), this
            }

            function a(n) {
                return f.on("click.bui", n.handle, function (e) {
                    document.activeElement.blur();
                    var t = p.val();
                    h = t, d.call(m, "search", e, t), n.callback && n.callback.call(m, e, t)
                }), f.on("click.bui", n.handleRemove, function (e) {
                    document.activeElement.blur(), p.val("");
                    var i = p.val();
                    h = i, t(this).hide(), d.call(m, "remove", e, i), n.onRemove && n.onRemove.call(m, e, i)
                }), f.on("input", "input", e.unit.debounce(function (e) {
                    var t = p.val();
                    h = t, t ? g.show() : g.hide(), d.call(m, "input", e, t), n.onInput && n.onInput.call(m, e, t)
                }, n.delayTime)), w = !0, this
            }

            function o(e) {
                return e = e || h, d.call(this, "search", {}, e), b.callback && b.callback.call(this, {}, e), this
            }

            function r(e) {
                var e = 1 == e;
                f && (f.off(), e && f.remove()), u("search"), u("remove"), u("input")
            }

            function l(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function s(t, n) {
                return e.option.call(m, t, n)
            }

            function c(t, n) {
                return e.on.apply(m, arguments), this
            }

            function u(t, n) {
                return e.off.apply(m, arguments), this
            }

            function d(t) {
                m.self = this == window || this == m ? null : this, e.trigger.apply(m, arguments)
            }
            var f, h, p, g, v = {
                    id: "",
                    handle: ".icon-search,.btn-search",
                    handleRemove: ".icon-removefill",
                    delayTime: 400,
                    onInput: null,
                    onRemove: null,
                    callback: null
                },
                m = {
                    handle: {},
                    on: c,
                    off: u,
                    search: o,
                    destroy: r,
                    widget: l,
                    option: s,
                    config: b,
                    init: i
                },
                b = m.config = t.extend(!0, {}, v, e.config.searchbar, n),
                w = !1;
            return i(b), m
        }
    }(bui || {}, libs),
    function (e, t) {
        e.select = function (n) {
            function i(n) {
                var i = t.extend(!0, z, n);
                if (i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), Y = [], B = [], _ = [], A = i.id ? e.obj(i.id).attr("id") : A, z = M.config = i, i.data && i.data.length) var o = c(i.data);
                if (i.popup)
                    if (F) F.close(), L.find(".bui-dialog-main").html(o);
                    else {
                        if (i.id) L = e.obj(i.id);
                        else {
                            var s = l();
                            t(i.appendTo).append(s), L = e.obj(A), L.find(".bui-dialog-main").html(o)
                        }
                        F = e.dialog({
                            id: A,
                            effect: i.effect,
                            mask: i.mask,
                            position: i.position,
                            autoClose: !1,
                            height: i.height,
                            width: i.width,
                            zoom: !1,
                            fullscreen: i.fullscreen,
                            onMask: function (e) {
                                f()
                            }
                        })
                    } else {
                    if (!i.id) return void e.hint("select id 必须有");
                    L = e.obj(i.id), i.data && i.data.length && L.html(o)
                }
                return P = L.find(i.handle), i.data.length < 1 && a(), K || r(i), i.value && p(i.value), i.onInited && i.onInited({
                    target: null,
                    value: i.value
                }), this
            }

            function a() {
                var e = [],
                    n = [];
                return P.find("input").each(function (i, a) {
                    var r = t(this);
                    if (!(r.length < 1)) {
                        var l = r.val(),
                            s = r.attr("text"),
                            c = r.attr("image"),
                            u = r.attr("icon"),
                            d = r.is(":checked");
                        z.data[i] = {}, z.data[i][V] = s, z.data[i][q] = l, z.data[i][U] = c, z.data[i][W] = u, e.push(l), n.push(s), d && o({
                            name: s,
                            value: l,
                            index: i
                        })
                    }
                }), {
                    value: e,
                    text: n
                }
            }

            function o(e) {
                var t = parseInt(e.index, 10);
                switch (z.type) {
                case "radio":
                case "select":
                    Y = [], B = [], _ = [], Y.push(e.name), B.push(e.value), _.push(t);
                    break;
                case "checkbox":
                    Y.push(e.name), B.push(e.value), _.push(t)
                }
            }

            function r(n) {
                n.trigger && (E = e.obj(n.trigger), D = E.find(n.triggerChildren).length ? E.find(n.triggerChildren) : E, N = n.placeholder || t.trim(D.html()), n.placeholder && D.html(n.placeholder), E.on("click.bui", function (e) {
                    t(this).hasClass("disabled") || u()
                }));
                var i = function (i) {
                        var a = t(i.target[i.target.length - 1]),
                            r = a.val(),
                            l = a.attr("text"),
                            s = a.attr("index"),
                            c = "INPUT" !== i.srcElement.nodeName ? a.is(":checked") : !a.is(":checked");
                        i.target = a[0], i.index = s, c ? c && (n.toggle || "checkbox" == n.type) && (j.call(M, "uncheck", i), e.array.remove(l, Y), e.array.remove(r, B), e.array.remove(s, _), n.onChange && n.onChange.call(M, i)) : (j.call(M, "check", i), o({
                            name: l,
                            value: r,
                            index: s
                        }), n.onChange && n.onChange.call(M, i)), p(B.join(",") || "", i), v(Y.join(",") || "")
                    },
                    a = function (e) {
                        var a = null;
                        e.srcElement = e.originalEvent && e.originalEvent.srcElement || e.srcElement, a = t(this).find("input"), e.target = [a[0]], i.call(M, e), n.popup && n.autoClose && f(), j.call(M, "select", e), e.stopPropagation()
                    };
                L.on("click", n.handle, a);
                var r = function (e) {
                    n.callback && n.callback.call(M, e, M), e.stopPropagation()
                };
                L.on("click.bui", n.callbackHandle, r), K = !0
            }

            function l(e) {
                var n = "";
                return z.popup && (n += '<div id="' + A + '" class="bui-dialog bui-dialog-select">', z.title && (n += '<div class="bui-dialog-head">' + z.title + "</div>"), n += '  <div class="bui-dialog-main">'), z.popup && (n += "  </div>", z.buttons.length > 0 && (n += '    <div class="bui-dialog-foot bui-box">', t.each(z.buttons, function (e, t) {
                    n += '        <div class="span1">', n += '             <div class="bui-btn ' + (t.className || "") + '" value="' + (t.value || "") + '">' + (t.name || t) + "</div>", n += "        </div>"
                }), n += "    </div>"), n += "</div>"), n
            }

            function s(e) {
                var e = e || {},
                    t = document.createElement("input");
                for (var n in e) "string" != typeof e[n] && "number" != typeof e[n] || t.setAttribute(n, e[n]);
                switch (z.type) {
                case "select":
                    t.setAttribute("type", "radio"), t.setAttribute("class", z.className || "bui-choose");
                    break;
                case "radio":
                    t.setAttribute("type", "radio"), t.setAttribute("class", z.className || "bui-radio");
                    break;
                case "checkbox":
                    t.setAttribute("type", "checkbox"), t.setAttribute("class", z.className || "bui-choose");
                    break;
                default:
                    t.setAttribute("type", "checkbox")
                }
                return t
            }

            function c(n) {
                var i = H,
                    a = "",
                    o = "",
                    r = z.template && z.template(n, z);
                return r ? o = r : t.each(n, function (n, a) {
                    var r = "string" == typeof a ? a : a[V] || a || "",
                        l = a && a[U] ? a[U] || a : "",
                        c = a && a[W] ? a[W] || a : "",
                        u = a && a[q] ? a[q] || a : a || r || n,
                        d = n,
                        f = {
                            name: i,
                            value: u,
                            text: r,
                            index: d
                        };
                    l && (f.image = l), c && (f.icon = c), a = a && "object" === e.typeof(a) ? a : {};
                    var h = t.extend(!0, {}, a, f),
                        p = s(h).outerHTML;
                    if (o += '    <div class="bui-btn bui-box bui-btn-line">', "left" == z.direction && (o += p), l) {
                        var g = e.unit.endWithImage(l) ? '<div class="thumbnail"><img src="' + l + '" alt="" /></div>' : '<div class="thumbnail ' + l + '"></div>';
                        o += g
                    }
                    if (c) {
                        var v = e.unit.endWithImage(c) ? '<i class="icon"><img src="' + c + '" alt="" /></i>' : '<i class="icon ' + c + '"></i>';
                        o += v
                    }
                    "center" == z.direction ? (o += '        <div class="span1" align="center">' + r + "</div>", o += p) : o += '        <div class="span1">' + r + "</div>", "right" == z.direction && (o += p), o += "    </div>"
                }), a += '    <div class="bui-list bui-list-select">', a += o, a += "    </div>"
            }

            function u(e) {
                return j.call(this, "showbefore"), z.popup && F ? !F.isOpen() && F.open(function () {
                    e && e.call(M), j.call(M, "show")
                }) : (L.css("display", "block"), e && e.call(M), j.call(M, "show")), this
            }

            function d() {
                return L.html(""), z.data = [], this
            }

            function f(e) {
                return j.call(this, "hidebefore"), z.popup && F ? F.isOpen() && F.close(function () {
                    e && e.call(M), j.call(M, "hide")
                }) : (L.css("display", "none"), e && e.call(M), j.call(M, "hide")), this
            }

            function h() {
                return _.join(",")
            }

            function p(t, n) {
                if (void 0 === t) return B.join(",");
                P = L.find(z.handle);
                var i = [],
                    a = [],
                    o = [],
                    r = [],
                    l = [];
                "string" == typeof t && t.indexOf(",") > -1 ? l = t.split(",") : t instanceof Array ? l = t : t && l.push(t), z.data.forEach(function (t, n) {
                    var s = t && "object" === e.typeof(t) && t.hasOwnProperty(V) ? String(t[V]) : String(t),
                        c = t && "object" === e.typeof(t) && t.hasOwnProperty(q) ? String(t[q]) : String(t) || String(n),
                        u = P.eq(n).find("input");
                    if ("" == t) return u.prop("checked", !1), Y = [], B = [], void(_ = []);
                    var d = e.array.index(s, l);
                    e.array.index(c, l) > -1 || d > -1 ? ("radio" != z.type && "select" != z.type || (a = [], o = [], r = []), a.push(s), o.push(c), r.push(n), i[n] = u, u.prop("checked", !0)) : u.prop("checked", !1)
                }), Y = a.slice(0), B = o.slice(0), _ = r.slice(0);
                var s = n || {
                    target: i[i.length - 1],
                    index: _
                };
                j.call(M, "change", s), E && z.change && (E.attr("value", o.join(",")), D.text(Y.join(","))), L.attr("value", o.join(","))
            }

            function g() {
                var e = [];
                return B.forEach(function (t, n) {
                    e.push({
                        value: t,
                        name: Y[n],
                        index: _[n]
                    })
                }), e
            }

            function v(e) {
                return void 0 === e ? Y.join(",") : (E && z.change && (E.attr("text", e), D.html(e || N)), L.attr("text", e), this)
            }

            function m(e) {
                var t = [];
                return String(e).indexOf(",") > -1 ? t = e.split(",") : t.push(parseInt(e)), Y = [], B = [], t.forEach(function (e, t) {
                    z.data[e] && Y.push(z.data[e][V] || z.data[e]), z.data[e] && B.push(z.data[e][q] || t)
                }), "checkbox" == z.type ? (v(Y.join(",")), p(B.join(","))) : (v(Y[0]), p(B[0])), this
            }

            function b() {
                if ("checkbox" == z.type) {
                    m(z.data.map(function (e, t) {
                        return t
                    }).join(","))
                } else m(0);
                return this
            }

            function w() {
                return Y = [], B = [], P.find("input").prop("checked", null), p(""), v(""), j.call(this, "reset"), this
            }

            function y() {
                if ("checkbox" == z.type) {
                    var t = Y.map(function (e, t) {
                        return e
                    });
                    B.map(function (e, t) {
                        return e
                    });
                    Y = [], B = [], z.data.forEach(function (n, i) {
                        var a = P.eq(i).find("input");
                        e.array.index(n[V], t) > -1 ? a.prop("checked", null) : (a.prop("checked", !0), Y.push(n[V]), B.push(n[q]))
                    }), p(B.join(",") || ""), v(Y.join(",") || "")
                } else w();
                return this
            }

            function x() {
                var e = E;
                return e && e.addClass("disabled"), this
            }

            function k() {
                var e = E;
                return e && e.removeClass("disabled"), this
            }

            function T(e) {
                var e = 1 == e;
                return L && (L.off(), e && L.remove()), E && (E.off("click.bui"), e && E.remove()), F && F.destroy(e), S("show"), S("hide"), S("change"), S("select"), S("check"), S("uncheck"), this
            }

            function C(t) {
                var n = {
                    dialog: F || {}
                };
                return e.widget.call(n, t)
            }

            function I(t, n) {
                return e.option.call(M, t, n)
            }

            function O(t, n) {
                return e.on.apply(M, arguments), this
            }

            function S(t, n) {
                return e.off.apply(M, arguments), this
            }

            function j(t) {
                M.self = this == window || this == M ? null : this, e.trigger.apply(M, arguments)
            }
            var E, L, N, D, P, F, R = {
                    id: "",
                    trigger: "",
                    triggerChildren: ".span1",
                    handle: ".bui-list .bui-btn",
                    className: "",
                    name: "",
                    appendTo: "",
                    data: [],
                    popup: !0,
                    title: "",
                    autoClose: !1,
                    placeholder: "",
                    field: {
                        name: "name",
                        value: "value",
                        image: "image",
                        icon: "icon"
                    },
                    height: 0,
                    width: 0,
                    mask: !0,
                    change: !0,
                    toggle: !1,
                    effect: "fadeInUp",
                    type: "select",
                    direction: "left",
                    position: "bottom",
                    fullscreen: !1,
                    value: "",
                    buttons: [],
                    onInited: null,
                    onChange: null,
                    callbackHandle: ".bui-dialog-foot .bui-btn",
                    callback: null
                },
                M = {
                    handle: {},
                    on: O,
                    off: S,
                    value: p,
                    values: g,
                    index: h,
                    active: m,
                    disabled: x,
                    enabled: k,
                    empty: d,
                    text: v,
                    show: u,
                    hide: f,
                    selectAll: b,
                    selectNone: w,
                    unselect: y,
                    destroy: T,
                    widget: C,
                    option: I,
                    config: z,
                    init: i
                },
                z = M.config = t.extend(!1, {}, R, e.config.select, n),
                A = e.guid(),
                H = z.name || e.guid(),
                V = z.field.name,
                q = z.field.value,
                U = z.field.image,
                W = z.field.icon,
                Y = [],
                B = [],
                _ = [],
                K = !1;
            return i(z), M
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.dropdown = function (n) {
            function i(n) {
                var i = t.extend(!0, E, n);
                if (!i.id) return void e.showLog("dropdown id不能为空", "bui.dropdown.init");
                if (x = e.obj(i.id), E = j.config = i, k = x.children(i.handle), O = i.target ? x.find(i.target) : k.next(), i.data.length) {
                    var r = f(i.data);
                    O.length ? O.remove() && k.after(r) : x.append(r), O = x.find(i.target)
                }
                C = i.relative, T = x.attr("position") || i.position;
                var s = x[0] && x[0].offsetLeft >= document.documentElement.clientWidth ? 0 : x[0] && x[0].offsetLeft,
                    c = i.width ? "auto" : -s + "px",
                    u = {
                        bottom: {
                            menuPosition: "bui-menu-bottom",
                            arrowPosition: "bui-arrow-up",
                            left: c
                        },
                        top: {
                            menuPosition: "bui-menu-top",
                            arrowPosition: "bui-arrow-down",
                            left: c
                        },
                        left: {
                            menuPosition: "bui-menu-left",
                            arrowPosition: "bui-arrow-right",
                            left: "auto"
                        },
                        right: {
                            menuPosition: "bui-menu-right",
                            arrowPosition: "bui-arrow-left",
                            left: "100%"
                        }
                    };
                I = i.width > 0 ? i.width : C ? L : i.width, parseFloat(I) > 0 && O.width(I), o(i.showArrow ? u[T].arrowPosition + " " + u[T].menuPosition : u[T].menuPosition, u[T].left);
                var d = O.find(i.targetHandle + ".active").eq(0),
                    h = d.index();
                return h > -1 && l(h), N || a(i), this
            }

            function a(e) {
                var n = function (e) {
                        if (!t(this).hasClass("disabled")) {
                            var n = t(this).hasClass("active");
                            d(), n ? c() : u(), e.stopPropagation()
                        }
                    },
                    i = function (n) {
                        var i = t(this).attr("value") || "",
                            a = t.trim(t(this).text()),
                            o = void 0 != x.attr("change") ? x.attr("change") : e.change;
                        e.showActive && t(this).addClass("active").siblings().removeClass("active"), r.call(this, i), 1 == o && s.call(this, a), E.autoClose && c(), n.target = this, e.callback && e.callback.call(j, n), E.stopPropagation && n.stopPropagation()
                    };
                k.on("click.bui", n), x.on("click.bui", e.targetHandle, i);
                var a = function (e) {
                    d(), e.stopPropagation()
                };
                E.autoClose && t("body").off("click.bui").on("click.bui", ":not(.bui-dropdown)", a), N = !0
            }

            function o(e, t) {
                O.addClass(e), C && O.css({
                    left: t
                })
            }

            function r(e) {
                if (void 0 === e) {
                    return D || k.attr("value")
                }
                D = e, k.attr("value", e), E.change || y.call(this, "change")
            }

            function l(e) {
                e = parseInt(e);
                var n = O.find(E.targetHandle).eq(e);
                if (n.length > 0) {
                    var i = t.trim(n.text()),
                        a = n.attr("value") || "";
                    s(i), r(a), E.showActive && n.addClass("active").siblings().removeClass("active")
                }
                return this
            }

            function s(e) {
                if (void 0 === e) {
                    return t.trim(k.text())
                }
                var n = k.children(E.handleChildren);
                return n ? n.text(e) : k.text(e), y.call(this, "change"), this
            }

            function c() {
                return k.removeClass("active"), O.css("display", "none"), y.call(this, "hide"), this
            }

            function u() {
                return k.addClass("active"), O.css("display", "block"), y.call(this, "show"), this
            }

            function d() {
                return t(".bui-dropdown > .bui-btn").removeClass("active"), t(".bui-dropdown > .bui-list").css("display", "none"), y.call(this, "hide"), this
            }

            function f(e) {
                var t = "";
                return t += '<ul class="bui-list">', e.map(function (e, n) {
                    t += '<li class="bui-btn" value="' + e.value + '">' + e.name + "</li>"
                }), t += "</ul>"
            }

            function h() {
                var e = k;
                return e && e.addClass("disabled"), this
            }

            function p() {
                var e = k;
                return e && e.removeClass("disabled"), this
            }

            function g(e) {
                var e = 1 == e;
                x && (x.off("click.bui"), e && x.remove()), k && (k.off("click.bui"), e && k.remove()), t("body").off("click.bui"), w("show"), w("hide")
            }

            function v(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function m(t, n) {
                return e.option.call(j, t, n)
            }

            function b(t, n) {
                return e.on.apply(j, arguments), this
            }

            function w(t, n) {
                return e.off.apply(j, arguments), this
            }

            function y(t) {
                j.self = this == window || this == j ? null : this, e.trigger.apply(j, arguments)
            }
            var x, k, T, C, I, O, S = {
                    id: "",
                    handle: ".bui-btn",
                    handleChildren: ".span1",
                    target: ".bui-list",
                    targetHandle: ".bui-btn",
                    data: [],
                    position: "bottom",
                    showArrow: !1,
                    showActive: !0,
                    autoClose: !0,
                    stopPropagation: !1,
                    width: 0,
                    relative: !0,
                    change: !0,
                    callback: null
                },
                j = {
                    handle: {},
                    on: b,
                    off: w,
                    active: l,
                    disabled: h,
                    enabled: p,
                    value: r,
                    text: s,
                    hide: c,
                    show: u,
                    hideAll: d,
                    destroy: g,
                    widget: v,
                    option: m,
                    config: E,
                    init: i
                },
                E = j.config = t.extend(!0, {}, S, e.config.dropdown, n),
                L = document.documentElement.clientWidth,
                N = !1,
                D = "";
            return i(E), j
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.accordion = function (n) {
            function i(n) {
                var i = t.extend(!0, S, n);
                return x = window.viewport.width() || document.documentElement.clientWidth, k = window.viewport.height() || document.documentElement.clientHeight, j = e.obj(i.id) || e.obj("." + e.prefix("accordion")), S = O.config = i, T = i.handle.indexOf("#") > -1 ? e.obj(i.handle) : j.children(i.handle), C = i.target.indexOf("#") > -1 ? e.obj(i.target) : j.children(i.target), a(i), E || o(i), this
            }

            function a(e) {
                T.removeClass("active"), C.css("display", "none"), parseFloat(e.targetHeight) > 0 && C.height(e.targetHeight), parseFloat(e.height) > 0 && j.height(e.height)
            }

            function o(e) {
                var n = function (n) {
                    n.target = this, t(this).hasClass("disabled") || t(this).attr("href") || (s.call(this, n, e), e.callback && e.callback.call(O, n), !t(this).attr("href") && n.stopPropagation())
                };
                e.handle.indexOf("#") > -1 ? T.on("click.bui", n) : j.off("click.bui").on("click.bui", e.handle, n), E = !0
            }

            function r(e) {
                var t;
                return t = "number" == typeof e ? T.eq(e) : T, t && t.addClass("disabled"), this
            }

            function l(e) {
                var t;
                return t = "number" == typeof e ? T.eq(e) : T, t && t.removeClass("disabled"), this
            }

            function s(n, i) {
                var a = t(this),
                    o = a.hasClass("active"),
                    r = (T.index(this), i.target.indexOf("#") > -1 ? e.obj(i.target) : a.next(i.target));
                i.single ? o ? (a.removeClass("active"), r.css("display", "none"), y.call(O, "hide", n)) : (p(), a.addClass("active"), r.css("display", "block"), y.call(O, "show", n)) : o ? (a.removeClass("active"), r.css("display", "none"), y.call(O, "hide", n)) : (a.addClass("active"), r.css("display", "block"), y.call(O, "show", n))
            }

            function c(e) {
                var e = Number(e) || 0,
                    t = T.eq(e).length ? T.eq(e) : T,
                    n = C.eq(e).length ? C.eq(e) : t.next(S.target);
                return t.addClass("active"), n.css("display", "block"), y.call(this, "show", {
                    target: T[e]
                }), this
            }

            function u(e) {
                var e = Number(e) || 0,
                    t = T.eq(e).length ? T.eq(e) : T,
                    n = C.eq(e).length ? C.eq(e) : t.next(S.target);
                return t.removeClass("active"), n.css("display", "none"), y.call(this, "hide", {
                    target: T[e]
                }), this
            }

            function d() {
                return j.length > 1 ? j.each(function (e, t) {
                    f(0, t)
                }) : f(0), y.call(this, "show", {
                    target: T[0]
                }), this
            }

            function f(e, n) {
                var e = e || 0;
                (n ? t(n) : j).children(S.handle).eq(e).addClass("active").next(S.target).css("display", "block")
            }

            function h() {
                return T.each(function (e, n) {
                    t(n).addClass("active").next(S.target).css("display", "block")
                }), y.call(this, "showall", {
                    target: T
                }), this
            }

            function p() {
                return T.each(function (e, n) {
                    t(n).removeClass("active").next(S.target).css("display", "none")
                }), y.call(this, "hideall", {
                    target: T
                }), this
            }

            function g(e) {
                j && (j.off("click.bui"), j.remove(), j = null), w("hide"), w("show")
            }

            function v(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function m(t, n) {
                return e.option.call(O, t, n)
            }

            function b(t, n) {
                return e.on.apply(O, arguments), this
            }

            function w(t, n) {
                return e.off.apply(O, arguments), this
            }

            function y(t) {
                O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments)
            }
            var x, k, T, C, I = {
                    id: "",
                    handle: "dt",
                    target: "dd",
                    height: 0,
                    targetHeight: 0,
                    single: !1,
                    callback: null
                },
                O = {
                    handle: {},
                    on: b,
                    off: w,
                    showFirst: d,
                    showAll: h,
                    hideAll: p,
                    disabled: r,
                    enabled: l,
                    destroy: g,
                    show: c,
                    hide: u,
                    widget: v,
                    option: m,
                    config: S,
                    init: i
                },
                S = O.config = t.extend(!0, {}, I, e.config.accordion, n),
                j = null,
                E = !1;
            return i(S), O
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.rating = function (n) {
            function i(n) {
                var i = t.extend(!0, O, n);
                return i.id ? (w = e.obj(i.id), O = I.config = i, y = i.fullClassName, x = i.halfClassName, l(i), S || r(i), this) : void e.hint("rating id不能为空")
            }

            function a(t) {
                var n = (e.guid(), ""),
                    i = 0,
                    a = t.stars;
                for (i = 0; i < a; i++) n += '<div class="bui-rating-cell" ></div>';
                return n
            }

            function o(e) {
                var t, n = "",
                    e = String(e) || String(k),
                    i = 0,
                    a = O.stars,
                    o = [];
                o = e.indexOf(".") > -1 ? e.split(".") : [e, 0];
                var r = parseInt(o[0]);
                for (t = o[1] / 10 * 100 + "%", i = 0; i < a; i++) i < r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:100%;">&nbsp;</div></div>'), i == r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:' + t + ';">&nbsp;</div></div>'), i > r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:0;">&nbsp;</div></div>');
                return n
            }

            function r(e) {
                if (!e.disabled) {
                    var n = String(e.value).indexOf(".") > -1 ? 1 : 0;
                    w.on("click.bui", e.handle, function (i) {
                        var a = t(this).index(),
                            o = 0;
                        if (e.half) {
                            o = n % 2 == 0 ? a + .5 : a + 1
                        } else o = a + 1;
                        s(o), c(o), n++, e.callback && e.callback.call(I, i), i.stopPropagation()
                    })
                }
                S = !0
            }

            function l(e) {
                if (e.render) {
                    var t = a(e);
                    w.html(t), T = w.children(e.handle)
                } else T = w.children(e.handle);
                c(e.value)
            }

            function s(e) {
                var n = [];
                e = String(e), O.half && e.indexOf(".") > -1 ? n = e.split(".") : n.push(e), T.removeClass(y).removeClass(x), T.each(function (e, i) {
                    1 == n.length && e < n[0] ? t(i).addClass(y) : 2 == n.length && (e < n[0] && t(i).addClass(y), e == n[0] && t(i).addClass(x))
                })
            }

            function c(e) {
                return e ? (w.attr("value", e), s(e), k = e, b.call(I, "change", e)) : k = w.attr("value"), k
            }

            function u(e) {
                var t = o(e);
                w.attr("value", e).html(t), k = e
            }

            function d(e) {
                var e = 0 != e;
                return e ? (w.off("click.bui", O.handle), b.call(I, "disabled")) : f(), this
            }

            function f(e) {
                return O.disabled = !1, r(), b.call(I, "undisabled"), this
            }

            function h(e) {
                var e = 1 == e;
                w && (w.off("click.bui"), e && w.remove()), m("change")
            }

            function p(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function g(t, n) {
                return e.option.call(I, t, n)
            }

            function v(t, n) {
                return e.on.apply(I, arguments), this
            }

            function m(t, n) {
                return e.off.apply(I, arguments), this
            }

            function b(t) {
                I.self = this == window || this == I ? null : this, e.trigger.apply(I, arguments)
            }
            var w, y, x, k, T, C = {
                    id: "",
                    handle: ".bui-rating-cell",
                    fullClassName: "bui-rating-cell-full",
                    halfClassName: "bui-rating-cell-half",
                    half: !1,
                    stars: 5,
                    value: 0,
                    disabled: !1,
                    render: !0,
                    callback: null
                },
                I = {
                    handle: {},
                    on: v,
                    off: m,
                    disabled: d,
                    show: u,
                    value: c,
                    destroy: h,
                    widget: p,
                    option: g,
                    config: O,
                    init: i
                },
                O = I.config = t.extend(!0, {}, C, e.config.rating, n),
                S = !1;
            return i(O), I
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.actionsheet = function (n) {
            function i(n) {
                var i = t.extend(!0, I, n);
                y = e.obj(i.trigger), I = C.config = i, x = e.guid();
                var r = o(i.buttons);
                return e.obj(i.appendTo).append(r), b = e.dialog({
                    id: x,
                    position: i.position,
                    mask: i.mask,
                    effect: i.effect,
                    opacity: i.opacity,
                    onMask: function () {
                        l(), i.onMask && i.onMask()
                    }
                }), k = b.$el(), w = k.find(i.handle), O || a(), this
            }

            function a() {
                var e = function (e) {
                        e.target = this, I.callback && I.callback.call(C, e, C), m.call(C, "click", e)
                    },
                    n = function (e) {
                        t(this).hasClass("disabled") || s.call(this)
                    };
                k && k.on("click.bui", I.handle, e), y && y.on("click.bui", n), O = !0
            }

            function o(e) {
                var t = parseFloat(I.width),
                    n = t > 0 ? "width:" + t + "px;left:50%;right:0;margin-left:-" + t / 2 + "px;" : "",
                    i = "";
                return e && e.length && (i += '<div id="' + x + '" class="bui-actionsheet" style="' + n + '">', i += '    <ul class="bui-list">', i += r(e), i += "    </ul>", I.cancelText && (i += '    <div class="bui-btn" value="cancel">' + I.cancelText + "</div>"), i += "</div>"), i
            }

            function r(e) {
                var n = "";
                return t.each(e, function (e, t) {
                    n += '        <li class="bui-btn ' + (t.className || "") + '" value="' + (t.value || "") + '">' + (t.name || "") + "</li>"
                }), n
            }

            function l(e) {
                return m.call(C, "hidebefore"), b.isOpen() && b.close(function (t) {
                    e && e.call(C, t), m.call(C, "hide", t)
                }), this
            }

            function s(e) {
                return m.call(C, "showbefore"), !b.isOpen() && b.open(function () {
                    e && e.call(C), m.call(C, "show")
                }), this
            }

            function c(e) {
                var t = y;
                return t && t.addClass("disabled"), this
            }

            function u() {
                var e = y;
                return e && e.removeClass("disabled"), this
            }

            function d(e) {
                var e = 1 == e;
                y && y.off("click.bui"), v("hide"), v("show"), b && b.destroy(e)
            }

            function f(t) {
                var n = {
                    dialog: b
                };
                return e.widget.call(n, t)
            }

            function h(t, n) {
                return "buttons" == t && void 0 !== n ? p(t, n) : e.option.call(C, t, n)
            }

            function p(t, n) {
                if (n && "array" === e.typeof(n)) {
                    var i = r(n);
                    e.obj(x).find(".bui-list").html(i)
                }
            }

            function g(t, n) {
                return e.on.apply(C, arguments), this
            }

            function v(t, n) {
                return e.off.apply(C, arguments), this
            }

            function m(t) {
                C.self = this == window || this == C ? null : this, e.trigger.apply(C, arguments)
            }
            var b, w, y, x, k, T = {
                    appendTo: ".bui-page",
                    trigger: "",
                    handle: ".bui-btn",
                    position: "bottom",
                    effect: "fadeInUp",
                    width: 0,
                    mask: !0,
                    opacity: .6,
                    buttons: [],
                    cancelText: "取消",
                    onMask: null,
                    callback: null
                },
                C = {
                    handle: {},
                    on: g,
                    off: v,
                    disabled: c,
                    enabled: u,
                    hide: l,
                    show: s,
                    destroy: d,
                    widget: f,
                    option: h,
                    config: I,
                    init: i
                },
                I = C.config = t.extend(!1, {}, T, e.config.actionsheet, n),
                O = !1;
            return i(I), C
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.number = function (n) {
            function i(n) {
                var i = t.extend(!0, N, n);
                return P = !1, k = i.max, T = i.min, C = i.step, j = i.id ? e.obj(i.id) : e.obj(".bui-number"), N = L.config = i, i.render && o(i), I = j.children(i.prev), O = j.children(i.next), S = j.children(i.input), D || l(i), i.disabled && S.attr("disabled", "disabled"), c(i.value), i.inited && i.inited.call(L, {
                    target: S,
                    value: i.value
                }), this
            }

            function a(e) {
                var t = "";
                return t += '    <div class="bui-number-prev"><i class="icon-minus"></i></div>', t += '    <input type="text" name="' + e.name + '" value="' + e.value + '"/>', t += '    <div class="bui-number-next"><i class="icon-plus"></i></div>'
            }

            function o(e) {
                var t = a(e);
                return j.html(t), this
            }

            function r(t) {
                return e.selector.call(j, t)
            }

            function l(n) {
                return n.onInput && j.off("input", n.input).on("input", n.input, e.unit.debounce(function (e) {
                    var i = t(this).val();
                    e.value = i, n.onInput && n.onInput.call(L, e), e.stopPropagation()
                }, 400)), j.off("change", n.input).on("change", n.input, function (e) {
                    var i = n.autocheck && isNaN(parseInt(t(this).val(), 10)) ? 0 : parseInt(t(this).val(), 10);
                    /^[0-9]*$/i.test(i) && c.call(this, i), e.value = i, e.stopPropagation()
                }), j.off("click.bui", n.prev).on("click.bui", n.prev, function (e) {
                    var i = t(this).next(N.input);
                    e.value = i.val(), p.call(i, e), n.callback && n.callback.call(L, e, L), e.preventDefault(), e.stopPropagation()
                }), j.off("click.bui", n.next).on("click.bui", n.next, function (e) {
                    var i = t(this).prev(N.input);
                    e.value = i.val(), g.call(i, e), n.callback && n.callback.call(L, e, L), e.preventDefault(), e.stopPropagation()
                }), D = !0, this
            }

            function s() {
                var e = this == L ? S : t(this);
                return parseInt(e.val(), 10)
            }

            function c(e) {
                var n = this == L ? S : t(this);
                return Array.prototype.slice.call(n).forEach(function (t, n) {
                    var i = t.parentElement.getAttribute("data-max") || N.max,
                        a = t.parentElement.getAttribute("data-min") || N.min,
                        o = N.autocheck ? u(e, a, i) : e;
                    t.value = o;
                    x.call(L, "change", {
                        target: t,
                        value: e
                    }), N.onChange && N.onChange.call(L, {
                        target: t,
                        value: e
                    })
                }), this
            }

            function u(e, t, n) {
                var i = e || 0;
                return i > n && (i = n), i < t && (i = t), i && i >= t && i <= n && (i = i), i
            }

            function d(e) {
                var t = 0;
                return e ? (c.call(this, e), t = e) : t = s.call(this), t
            }

            function f(t) {
                if (t && "array" === e.typeof(t)) return Array.prototype.slice.call(j).forEach(function (e, n) {
                    (e.id || e.getAttribute("name") || "") == t[n].id && (e.querySelector("input").value = t[n].value)
                }), this;
                var n = [];
                return Array.prototype.slice.call(j).forEach(function (e, t) {
                    var i = e.id || e.getAttribute("name") || "",
                        a = parseInt(e.querySelector("input").value, 10);
                    n.push({
                        id: i,
                        value: a
                    })
                }), n
            }

            function h(e) {
                var n = this == L ? S : t(this),
                    e = 0 != e;
                return e ? n.attr("disabled", "disabled") : n.removeAttr("disabled"), this
            }

            function p() {
                var e = this == L ? S : t(this),
                    n = e.val(),
                    i = parseInt(n, 10),
                    a = i -= C;
                return c.call(this, a), x.call(L, "prev", a), this
            }

            function g() {
                var e = this == L ? S : t(this),
                    n = e.val(),
                    i = parseInt(n, 10),
                    a = i += C;
                return c.call(this, a), x.call(L, "next", a), this
            }

            function v(e) {
                var e = 1 == e;
                j && (j.off("click.bui"), j.off("input"), e && j.remove()), y("prev"), y("next"), y("change"), P = !0
            }

            function m(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function b(t, n) {
                return e.option.call(L, t, n)
            }

            function w(t, n) {
                return e.on.apply(L, arguments), this
            }

            function y(t, n) {
                return e.off.apply(L, arguments), this
            }

            function x(t) {
                L.self = this == window || this == L ? null : this, e.trigger.apply(L, arguments)
            }
            var k, T, C, I, O, S, j, E = {
                    id: null,
                    min: 0,
                    max: 100,
                    step: 1,
                    value: 1,
                    disabled: !1,
                    render: !0,
                    tips: !1,
                    autocheck: !0,
                    name: "",
                    prev: ".bui-number-prev",
                    input: "input",
                    next: ".bui-number-next",
                    onInput: null,
                    beforeInit: null,
                    inited: null,
                    onChange: null,
                    callback: null
                },
                L = {
                    handle: {},
                    on: w,
                    off: y,
                    $el: r,
                    disabled: h,
                    value: d,
                    values: f,
                    prev: p,
                    next: g,
                    destroy: v,
                    widget: m,
                    option: b,
                    config: N,
                    init: i
                },
                N = L.config = t.extend(!0, {}, E, e.config.number, n),
                D = !1,
                P = !1;
            return N.beforeInit && N.beforeInit.call(L), i(N), L
        }
    }(bui || {}, libs),
    function (e, t) {
        e.stepbar = function (n) {
            function i(n) {
                var i = t.extend(!0, w, n);
                if (!i.id) return void e.hint("stepbar id不能为空");
                g = e.obj(i.id), w = b.config = i;
                var r = a(i.data);
                return i.lineCenter && g.addClass("bui-stepbar-center"), g.html(r), v = g.children(), y || o(i), this
            }

            function a(e) {
                var n = "";
                return t.each(e, function (e, t) {
                    var i = w.hasNumber ? e + 1 : "",
                        a = w.hasNumber ? "bui-stepbar-number" : "";
                    n += '<div class="bui-stepbar-cell ' + a + '">', n += '    <span class="bui-stepbar-dot">' + i + "</span>", n += '    <div class="bui-stepbar-text">', t.title && (n += "        <h3>" + t.title + "</h3>"), t.subtitle && (n += '        <p class="bui-stepbar-time">' + t.subtitle + "</p>"), t.content && (n += '        <p class="bui-stepbar-desc">' + t.content + "</p>"), n += "    </div>", n += "</div>"
                }), n
            }

            function o(e) {
                var n = function (n) {
                    if (e.click) {
                        r(t(this).index())
                    }
                    e.callback && e.callback.call(b, n, b)
                };
                return g.on("click.bui", e.handle, n), y = !0, this
            }

            function r(e) {
                if ("number" == typeof e) return e = e >= v.length - 1 ? v.length - 1 : e < 0 ? 0 : e, v.each(function (n, i) {
                    n < e && t(i).removeClass("active").addClass("visited"), n == e && t(i).removeClass("visited").addClass("active"), n > e && t(i).removeClass("visited active")
                }), p.call(this, "change", e), e;
                var e = g.children(".active").index();
                return e
            }

            function l() {
                var e = r() + 1;
                return p.call(this, "next", e), r(e)
            }

            function s() {
                var e = r() - 1;
                return p.call(this, "prev", e), r(e)
            }

            function c(e) {
                var e = 1 == e;
                g && (g.off("click.bui"), e && g.remove()), h("next"), h("prev"), h("change")
            }

            function u(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function d(t, n) {
                return e.option.call(b, t, n)
            }

            function f(t, n) {
                return e.on.apply(b, arguments), this
            }

            function h(t, n) {
                return e.off.apply(b, arguments), this
            }

            function p(t) {
                b.self = this == window || this == b ? null : this, e.trigger.apply(b, arguments)
            }
            var g, v, m = {
                    id: null,
                    handle: ".bui-stepbar-cell",
                    hasNumber: !1,
                    lineCenter: !1,
                    click: !0,
                    data: [],
                    callback: null
                },
                b = {
                    handle: {},
                    on: f,
                    off: h,
                    value: r,
                    next: l,
                    prev: s,
                    destroy: c,
                    widget: u,
                    option: d,
                    config: w,
                    init: i
                },
                w = b.config = t.extend(!0, {}, m, e.config.stepbar, n),
                y = !1;
            return i(w), b
        }
    }(window.bui || {}, window.libs);
    var n = function (e) {
        function t(e) {
            return window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e) : window.clearTimeout(e)
        }

        function n(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
            }
            return e
        }

        function i(e, t) {
            "string" != typeof t && (t += "ms");
            for (var n = 0; n < e.length; n++) {
                var i = e[n].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
            }
            return e
        }

        function a(e, t) {
            var n, i, a, o;
            return void 0 === t && (t = "x"), a = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), o = new WebKitCSSMatrix("none" === i ? "" : i)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = window.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
        }
        var o = this,
            r = {
                updateValuesOnTouchmove: !1,
                rotateEffect: !1,
                momentumRatio: 7,
                freeMode: !1
            };
        e = e || {};
        for (var l in r) void 0 === e[l] && (e[l] = r[l]);
        o.params = e, o.cols = [], o.initialized = !1;
        var s = function () {
            var e = navigator.userAgent,
                t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                n = e.match(/(iPad).*OS\s([\d_]+)/),
                i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                a = !n && e.match(/(iPhone\sOS)\s([\d_]+)/),
                o = n || i || a,
                r = !!t;
            return o || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !r
        }();
        return o.setValue = function (e, t) {
            var n = 0;
            if (0 === o.cols.length) return o.value = e, void o.updateValue(e);
            for (var i = 0; i < o.cols.length; i++) o.cols[i] && !o.cols[i].divider && (o.cols[i].setValue(e[n], t), n++)
        }, o.updateValue = function (e) {
            for (var t = e || [], n = [], i = 0; i < o.cols.length; i++) o.cols[i].divider || (t.push(o.cols[i].value), n.push(o.cols[i].displayValue));
            t.indexOf(void 0) >= 0 || (o.value = t, o.displayValue = n, o.params.onChange && o.params.onChange(o, o.value, o.displayValue))
        }, o.initPickerCol = function (e, r) {
            function l(e) {
                if (!k && !x) {
                    var t = e.originalEvent || e;
                    t.preventDefault(), x = !0, T = C = t.targetTouches[0].pageY, I = (new Date).getTime(), P = !0, S = E = a(p.wrapper[0], "y")
                }
            }

            function c(e) {
                if (x) {
                    var r = e.originalEvent || e;
                    r.preventDefault(), P = !1, C = r.targetTouches[0].pageY, k || (t(y), k = !0, S = E = a(p.wrapper[0], "y"), i(p.wrapper, "0ms")), r.preventDefault();
                    E = S + (C - T), j = void 0, E < b && (E = b - Math.pow(b - E, .8), j = "min"), E > w && (E = w + Math.pow(E - w, .8), j = "max"), n(p.wrapper, "translate3d(0," + E + "px,0)"), p.updateItems(void 0, E, 0, o.params.updateValuesOnTouchmove), N = E - L || E, D = (new Date).getTime(), L = E
                }
            }

            function u(e) {
                if (!x || !k) return void(x = k = !1);
                x = k = !1, i(p.wrapper, ""), j && ("min" === j ? n(p.wrapper, "translate3d(0," + b + "px,0)") : n(p.wrapper, "translate3d(0," + w + "px,0)")), O = (new Date).getTime();
                var t;
                O - I > 300 ? t = E : (Math.abs(N / (O - D)), t = E + N * o.params.momentumRatio), t = Math.max(Math.min(t, w), b);
                var a = -Math.floor((t - w) / v);
                o.params.freeMode || (t = -a * v + w), n(p.wrapper, "translate3d(0," + parseInt(t, 10) + "px,0)"), p.updateItems(a, t, "", !0), setTimeout(function () {
                    P = !0
                }, 100)
            }

            function d(e) {
                if (P) {
                    t(y);
                    var n = $(this).attr("data-picker-value");
                    p.setValue(n)
                }
            }
            var f = $(e),
                h = f.index(),
                p = o.cols[h];
            if (!p.divider) {
                p.container = f, p.wrapper = p.container.find(".picker-items-col-wrapper"), p.items = p.wrapper.find(".picker-item");
                var g, v, m, b, w;
                p.replaceValues = function (e, t, n) {
                    p.destroyEvents(), p.values = e, p.displayValues = t;
                    var i = o.columnHTML(p, !0);
                    p.wrapper.html(i), p.items = p.wrapper.find(".picker-item"), p.calcSize(), p.setValue(n || p.values[0], 0, !0), p.initEvents()
                }, p.calcSize = function () {
                    o.params.rotateEffect && (p.container.removeClass("picker-items-col-absolute"), p.width || (p.container[0].style.width = ""));
                    var e, t;
                    e = 0, t = p.container[0].offsetHeight, g = p.wrapper[0].offsetHeight, v = p.items[0].offsetHeight, m = v * p.items.length, b = t / 2 - m + v / 2, w = t / 2 - v / 2, p.width && (e = p.width, parseInt(e, 10) === e && (e += "px"), p.container[0].style.width = e), o.params.rotateEffect && (p.width || (p.items.each(function () {
                        var t = $(this);
                        t[0].style.width = "auto", e = Math.max(e, t[0].offsetWidth), t[0].style.width = ""
                    }), p.container[0].style.width = e + 2 + "px"), p.container.addClass("picker-items-col-absolute"))
                }, p.calcSize(), n(p.wrapper, "translate3d(0," + w + "px,0)"), i(p.wrapper, "0ms");
                var y;
                p.setValue = function (e, t, a) {
                    void 0 === t && (t = "");
                    var o = p.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();
                    void 0 !== o && -1 !== o || (o = 0);
                    var r = -o * v + w;
                    n(p.wrapper, "translate3d(0," + r + "px,0)"), i(p.wrapper, t + "ms"), p.updateItems(o, r, t, a)
                }, p.updateItems = function (e, t, r, l) {
                    void 0 === t && (t = a(p.wrapper[0], "y")), void 0 === e && (e = -Math.round((t - w) / v)), e < 0 && (e = 0), e >= p.items.length && (e = p.items.length - 1);
                    var c = p.activeIndex;
                    p.wrapper.find(".picker-selected").removeClass("picker-selected"), i(p.items, r);
                    var u = p.items.eq(e).addClass("picker-selected");
                    if (n(u, ""), o.params.rotateEffect) {
                        Math.floor((t - w) / v);
                        p.items.each(function () {
                            var e = $(this),
                                i = e.index() * v,
                                a = w - t,
                                o = i - a,
                                r = o / v,
                                l = Math.ceil(p.height / v / 2) + 1,
                                c = -18 * r;
                            c > 180 && (c = 180), c < -180 && (c = -180), Math.abs(r) > l ? e.addClass("picker-item-far") : e.removeClass("picker-item-far"), n(e, "translate3d(0, " + (-t + w) + "px, " + (s ? -110 : 0) + "px) rotateX(" + c + "deg)")
                        })
                    }(l || void 0 === l) && (p.value = u.attr("data-picker-value"), p.displayValue = p.displayValues ? p.displayValues[e] : p.value, c != e && (p.onChange && p.onChange(o, p.value, p.displayValue), o.updateValue()))
                }, r && p.updateItems(0, w, 0);
                var x, k, T, C, I, O, S, j, E, L, N, D, P = !0;
                p.initEvents = function (e) {
                    var t = /hp-tablet/gi.test(navigator.appVersion),
                        n = "ontouchstart" in window && !t,
                        i = n ? "touchstart" : "mousedown",
                        a = n ? "touchmove" : "mousemove",
                        o = n ? "touchend" : "mouseup",
                        r = e ? "off" : "on";
                    p.container[r](i, l), p.container[r](a, c), p.container[r](o, u), "mouseup" == o && document.documentElement.addEventListener("mouseleave", u, !1), p.items[r]("click", d)
                }, p.destroyEvents = function () {
                    p.initEvents(!0)
                }, p.initEvents()
            }
        }, o.columnHTML = function (e, t) {
            var n = "",
                i = "";
            if (e.divider) i += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '">' + e.content + "</div>";
            else {
                for (var a = 0; a < e.values.length; a++) n += '<div class="picker-item" data-picker-value="' + e.values[a] + '">' + (e.displayValues ? e.displayValues[a] : e.values[a]) + "</div>";
                i += '<div class="picker-items-col ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '"><div class="picker-items-col-wrapper">' + n + "</div></div>"
            }
            return t ? n : i
        }, o.layout = function () {
            var e, t = "",
                n = "";
            o.cols = [];
            var i = "";
            for (e = 0; e < o.params.cols.length; e++) {
                var a = o.params.cols[e];
                i += o.columnHTML(o.params.cols[e]), o.cols.push(a)
            }
            n = "picker-modal picker-columns " + (o.params.cssClass || "") + (o.params.rotateEffect ? " picker-3d" : ""), t = '<div class="' + n + '"><div class="picker-modal-inner picker-items">' + i + '<div class="picker-center-highlight"></div></div></div>', o.pickerHTML = t
        }, o.init = function () {
            o.initialized || (o.layout(), o.container = $(o.pickerHTML), o.container.addClass("picker-modal-inline"), $(o.params.container).html(o.container), o.container.find(".picker-items-col").each(function () {
                var e = !0;
                (!o.initialized && o.params.value || o.initialized && o.value) && (e = !1), o.initPickerCol(this, e)
            }), o.value ? o.setValue(o.value, 0) : o.params.value && o.setValue(o.params.value, 0)), o.initialized = !0
        }, o.init(), o
    };
    ! function (e, t) {
        e.picker = function (e) {
            return new n(e)
        }
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.pickerdate = function () {
            function i(e) {
                if (e && e.constructor == Date) return e;
                if (e && "string" == typeof e) {
                    if (e = e.replace(/-/gim, "/").replace(/^(\d+\/\d+?)($|\s)/, function (e, t) {
                        return t + "/1"
                    }), e.indexOf("/") < 0) {
                        var t = new Date;
                        e = t.getFullYear() + "/" + t.getMonth() + "/" + t.getDate() + " " + e
                    }
                    return new Date(e)
                }
                return "number" == typeof e ? new Date(e) : new Date
            }

            function a(e, t) {
                var e, t, n = new Date;
                return n.getTime() < e.getTime() ? e : n.getTime() > t.getTime() ? t : n
            }

            function o(o) {
                function r(e) {
                    var t = new Date("1970/1/1");
                    return L.forEach(function (n, i) {
                        t["set" + n](e[O[n]].value - ("Month" == n ? 1 : 0))
                    }), t
                }

                function l(e) {
                    var t = i(e);
                    return L.map(function (e, n) {
                        return t["get" + e]() + ("Month" == e ? 1 : 0)
                    })
                }

                function s(e) {
                    n(this).hasClass("disabled") || C && !C.isOpen() && C.open(function () {})
                }

                function c(t) {
                    k.self = this == window || this == k ? null : this, e.trigger.apply(k, arguments)
                }
                var u, d, f, h, p, g, v, m, b, w, y = e.guid(),
                    x = {
                        id: y,
                        height: 260,
                        popup: !0,
                        mask: !0,
                        position: "bottom",
                        effect: "fadeInUp",
                        appendTo: "",
                        rotateEffect: !1,
                        buttons: [{
                            name: "取消",
                            className: ""
                        }, {
                            name: "确定",
                            className: "primary-reverse"
                        }],
                        onMask: function () {
                            C && C.close()
                        }, callback: null
                    },
                    k = this,
                    T = function () {},
                    C = null,
                    I = n.extend(!0, {}, x, o);
                I.appendTo = I.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), I.callback = function (e) {
                    var t = o.callback && o.callback.call(k, e);
                    if (1 == t || void 0 === t)
                        if ("取消" == n(e.target).text().trim() || "cancel" == n(e.target).text().trim() || "关闭" == n(e.target).text().trim()) try {
                            var i = new Date(u);
                            k.value(i)
                        } catch (e) {} else u = k.value()
                };
                var O = {},
                    S = ["FullYear", "Month", "Date"],
                    j = ["Hours", "Minutes", "Seconds"],
                    E = {
                        FullYear: "year",
                        Month: "month",
                        Date: "date",
                        Hours: "hour",
                        Minutes: "minute",
                        Seconds: "second"
                    },
                    L = [],
                    N = !1;
                this.config = {}, this.option = function () {}, this.cols = function (e) {
                    e = e || {};
                    var t = [];
                    return b = [], m = [], O = {}, L = [], S.forEach(function (n, i) {
                        "none" !== e[E[n]] && (L.push(n), t.push(n))
                    }), j.forEach(function (t, n) {
                        "none" !== e[E[t]] && (L.push(t), b.push(t))
                    }), t.forEach(function (t, n) {
                        O[t] = m.length, m.push(F[t](e[E[t]]))
                    }), b.forEach(function (n, i) {
                        0 == i && 0 != t.length ? m.push(F.Space()) : m.push(F.Divider()), 0 == t.length && (m[0].content = ""), O[n] = m.length, m.push(F[n](e[E[n]]))
                    }), k.picker && (k.picker.params.cols = m, k.picker.initialized = !1, k.picker.init()), N = !1, this
                }, this.id = function (e) {
                    e && !p && (p = e)
                }, this.reset = function () {
                    return k.picker && (k.picker.initialized = !1, k.picker.init()), this
                }, this.min = function (e) {
                    return f = i(e || I.min || "1960/01/01 00:00:00"), this
                }, this.max = function (e) {
                    return h = i(e || I.max || "2022/01/01 00:00:00"), this
                }, this.value = function (e) {
                    if (e) {
                        var t = i(e),
                            n = l(t);
                        return k.picker.setValue(n, 0), this
                    }
                    return v(k.picker, k.value, k.displayValue)
                }, this.handle = function (t) {
                    if (t && d !== t) {
                        var n = e.obj(d);
                        n && n.off("click", s), n = e.obj(t), n && n.on("click", s), s.hasOpen = !1, d = t
                    }
                    return this
                };
                var D = {
                    y: function (e, t) {
                        return e.getFullYear().toString().slice(-t)
                    }, M: function (e, t) {
                        return ((t > 1 ? "0" : "") + (e.getMonth() + 1)).slice(-2)
                    }, d: function (e, t) {
                        return ((t > 1 ? "0" : "") + e.getDate()).slice(-2)
                    }, h: function (e, t) {
                        return ((t > 1 ? "0" : "") + e.getHours()).slice(-2)
                    }, m: function (e, t) {
                        return ((t > 1 ? "0" : "") + e.getMinutes()).slice(-2)
                    }, s: function (e, t) {
                        return ((t > 1 ? "0" : "") + e.getSeconds()).slice(-2)
                    }
                };
                this.formatValue = function (e) {
                    return v = function (t, n, i) {
                        var a = r(t.cols);
                        return e.replace(/y+|M+|d+|h+|m+|s+/g, function (e) {
                            return D[e[0]](a, e.length)
                        })
                    }, k.picker && k.picker.updateValue(), N = !1, this
                }, this.onChange = function (e) {
                    return g = e || T, c.call(this, "change", w), this
                }, this.popup = function (i) {
                    if (I.popup && !C) {
                        var a = '<div id="' + y + '" class="bui-dialog" >';
                        a += '<div class="bui-dialog-main"><div id="' + y + '-picker"></div></div>', I.buttons && I.buttons.length && (a += '<div class="bui-dialog-foot bui-box">', n.each(I.buttons, function (e, n) {
                            var i = "object" == (void 0 === n ? "undefined" : t(n)) && "className" in n ? " " + n.className : "",
                                o = "object" == (void 0 === n ? "undefined" : t(n)) && "name" in n ? n.name : n;
                            a += '<div class="span1"><div class="bui-btn' + i + '">' + o + "</div></div>"
                        }), a += "</div>"), a += "</div>";
                        n(I.appendTo).append(a);
                        p = e.obj(y + "-picker")
                    }
                    return this
                };
                var P = function (e, t, n) {
                        var i = r(e.cols),
                            a = f["get" + t](),
                            o = h["get" + t](),
                            l = i.getTime(),
                            s = f.getTime(),
                            c = h.getTime();
                        return l < s && i["get" + t]() < a ? ("Month" == t && (a += 1), void e.cols[O[t]].setValue(a)) : l > c && i["get" + t]() > o ? ("Month" == t && (o += 1), void e.cols[O[t]].setValue(o)) : void(n && (l < s || l > c) && e.cols[O[n]].onChange(e))
                    },
                    F = {};
                F.FullYear = function (e) {
                    return e = e || {
                        values: function () {
                            for (var e = [], t = f.getFullYear(), n = h.getFullYear(), i = t; i <= n; i++) e.push(i);
                            return e
                        }()
                    }, {
                        values: e.values,
                        displayValues: e.displayValues,
                        onChange: function (e, t, n) {
                            P(e, "FullYear", O.Month ? "Month" : "")
                        }
                    }
                }, F.Month = function (e) {
                    return e = e || {
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                        displayValues: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                    }, {
                        values: e.values,
                        displayValues: e.displayValues,
                        textAlign: "right",
                        onChange: function (e, t, n) {
                            for (var i = new Date(e.cols[O.FullYear].value, parseInt(e.cols[O.Month].value), 0).getDate(), a = [], o = 1; o <= i; o++) a.push(o);
                            var r = e.cols[O.Date];
                            r && r.replaceValues && r.replaceValues(a, null, r.value < i ? r.value : i), P(e, "Month", O.Date ? "Date" : "")
                        }
                    }
                }, F.Date = function (e) {
                    return e = e || {
                        values: function () {
                            var e = 31,
                                t = [];
                            do {
                                t.unshift(e)
                            } while (e--);
                            return t
                        }(),
                        displayValues: function () {
                            var e = 31,
                                t = [];
                            do {
                                t.unshift(e + "天")
                            } while (e--);
                            return t
                        }()
                    }, {
                        values: e.values,
                        displayValues: e.displayValues,
                        onChange: function (e, t, n) {
                            P(e, "Date", O.Hours ? "Hours" : "")
                        }
                    }
                }, F.Space = function () {
                    return {
                        divider: !0,
                        content: "  "
                    }
                }, F.Hours = function (e) {
                    return e = e || function () {
                        for (var e = [], t = [], n = 0; n < 24; n++) e.push(n), t.push(("0" + n).slice(-2));
                        return {
                            values: e,
                            displayValues: t
                        }
                    }(), {
                        values: e.values,
                        displayValues: e.displayValues,
                        onChange: function (e, t, n) {
                            P(e, "Hours", O.Minutes ? "Minutes" : "")
                        }
                    }
                }, F.Divider = function () {
                    return {
                        divider: !0,
                        textAlign: "center",
                        content: ":"
                    }
                }, F.Minutes = function (e) {
                    return e = e || function () {
                        for (var e = [], t = [], n = 0; n < 60; n++) e.push(n), t.push(("0" + n).slice(-2));
                        return {
                            values: e,
                            displayValues: t
                        }
                    }(), {
                        values: e.values,
                        displayValues: e.displayValues,
                        onChange: function (e, t, n) {
                            P(e, "Minutes", O.Seconds ? "Seconds" : "")
                        }
                    }
                }, F.Seconds = function (e) {
                    return e = e || function () {
                        for (var e = [], t = [], n = 0; n < 60; n++) e.push(n), t.push(("0" + n).slice(-2));
                        return {
                            values: e,
                            displayValues: t
                        }
                    }(), {
                        values: e.values,
                        displayValues: e.displayValues,
                        onChange: function (e, t, n) {
                            P(e, "Seconds")
                        }
                    }
                }, k.min(I.min), k.max(I.max), k.cols(I.cols), k.onChange(I.onChange), k.formatValue(I.formatValue || "yyyy-MM-dd hh:mm:ss"), k.id(I.id), k.handle(I.handle), k.popup(I), k.picker = e.picker({
                    container: p,
                    rotateEffect: I.rotateEffect,
                    value: l(I.value ? i(I.value) : a(f, h)),
                    onChange: function (e, t, n) {
                        var i = v(e, t, n);
                        w != i && (w = i, g(i), c.call(this, "change", i))
                    }, cols: m
                }), I.popup && !C && (C = e.dialog(I), C && C.on("open", function () {
                    u = v(k.picker, k.value, k.displayValue), k.picker && (k.picker.initialized = !1, k.picker.init()), c.call(this, "show")
                }), C && C.on("close", function () {
                    c.call(this, "hide")
                })), this.disabled = function () {
                    var t = e.obj(d);
                    return t && t.addClass("disabled"), this
                }, this.enabled = function () {
                    var t = e.obj(d);
                    return t && t.removeClass("disabled"), this
                }, this.destroy = function (e) {
                    var e = 1 == e;
                    this.off("show"), this.off("hide"), this.off("change"), C && C.destroy(e), k = null
                }, this.widget = function (t) {
                    var n = {
                        dialog: C || {}
                    };
                    return e.widget.call(n, t)
                }, this.on = function (t, n) {
                    return e.on.apply(k, arguments), this
                }, this.off = function (t, n) {
                    return e.off.apply(k, arguments), this
                }
            }
            return function (e) {
                return new o(e)
            }
        }()
    }(window.bui || {}, window.libs),
    function (e, n) {
        e.levelselect = function (i) {
            function a(t) {
                var i = "";
                t.popup ? (i = h(t), F.append(i), D = bui.dialog({
                    id: x,
                    height: t.height,
                    mask: t.mask,
                    scroll: !1,
                    autoClose: t.autoClose,
                    fullscreen: t.fullscreen,
                    position: t.position,
                    effect: t.effect,
                    onMask: t.onMask
                }), T = e.obj(x)) : (i = p(t), F.append(i), T = e.objId(x)), C = e.objId(k);
                var a = 0;
                for (a = 0; a < t.level; a++)! function (i) {
                    L[i] = n(".select-level-val-" + i, T), E[i] = n(".select-level-" + i, C), t.trigger && (N[i] = n(t.trigger).eq(i)), j[i] = bui.select({
                        id: E[i],
                        type: "select",
                        direction: "right",
                        field: {
                            name: t.field.name,
                            icon: t.field.icon,
                            image: t.field.image,
                            value: t.field.value || t.field.name
                        },
                        popup: !1,
                        data: [],
                        onChange: t.onChange
                    }), L[i].on("click", function () {
                        n(this).addClass("active").siblings().removeClass("active"), S.prev()
                    }), j[i] && j[i].on("change", function (a) {
                        t.log && console.log("change", i);
                        var o = j[i].index() || 0,
                            r = j[i].value() || 0,
                            l = j[i].text() || j[i].value();
                        O[i] = {
                            name: l,
                            value: r,
                            index: o
                        };
                        var s = [],
                            c = [];
                        "string" == typeof t.field.data ? s = y[i][o][t.field.data] || y[i][o] : t.field.data && "array" === e.typeof(t.field.data) && (t.field.data.forEach(function (e, n) {
                            c.push(y[i][o][t.field.data[n]])
                        }), s = c[0] || c[1] || c[2] || c[3] || c[4] || c[5] || c[6]), y[i + 1] = s, j[i + 1] && j[i + 1].option("data", y[i + 1]), j[i + 2] && j[i + 2].option("data", [""]), E[i] && E[i].find(".bui-btn").removeClass("active"), n(a.target).parents(".bui-btn").addClass("active"), f(i), L[i] && L[i].text(l), L[i + 1] && L[i + 1].text(t.placeholder), L[i + 2] && L[i + 2].text(""), N[i] && N[i].text(l), N[i + 1] && N[i + 1].text(t.placeholder), N[i + 2] && N[i + 2].text(""), a.context = {
                            trigger: N[i],
                            selector: L[i],
                            index: i,
                            select: j[i],
                            data: y[i]
                        }, m.call(P, "change", a), i == t.level - 1 && m.call(P, "lastchange", a), t.popup && !D.isOpen() || (i == t.level - 1 ? (t.log && console.log("close"), t.autoClose && D.close()) : i % t.visibleNum == 1 && (t.log && console.log("next"), S.next()))
                    })
                }(a);
                t.popup && D ? D.on("open", function (e) {
                    I = t.height - T.find(".select-value").height() - T.children(".bui-dialog-head").height(), u(t)
                }) : (I = t.height, u(t)), L[0] && L[0].text(t.placeholder), N[0] && N[0].text(t.placeholder), y[0] = t.data, j[0].option("data", y[0]), t.value && d(t.value), t.onInited && t.onInited(t.value), R = !1
            }

            function o(e, t) {
                return S && S.to(e, t), this
            }

            function r() {
                return S && S.prev(), this
            }

            function l() {
                return S && S.next(), this
            }

            function s() {
                D && D.open(), m.call(this, "show")
            }

            function c() {
                D && D.close(), m.call(this, "hide")
            }

            function u(e) {
                S || (S = bui.tab({
                    id: k,
                    height: I,
                    scroll: !0,
                    zoom: !1,
                    visibleNum: e.visibleNum,
                    scrollNum: e.scrollNum
                }).lock(), S.on("to", function (e) {
                    f(e)
                }))
            }

            function d(n) {
                if (void 0 === n) return O;
                n && "array" === e.typeof(n) ? n.forEach(function (e, n) {
                    "string" == typeof e ? j[n].value(e) : "object" === (void 0 === e ? "undefined" : t(e)) && (j[n].text(e.name), j[n].value(e.value))
                }) : e.showLog("参数是一个数组类型")
            }

            function f(e) {
                n(".select-value div", T).removeClass("active"), n(".select-value div", T).eq(e).addClass("active")
            }

            function h(e) {
                var t = "";
                return t += '<div id="' + x + '" class="bui-dialog bui-levelselect" style="display:none;">', t += '    <div class="bui-dialog-head">' + e.title + "</div>", t += '    <div class="bui-dialog-main">', t += p(e), t += "    </div>", t += '    <div class="bui-dialog-close"><i class="icon-close"></i></div>', t += "</div>"
            }

            function p(e) {
                var t = "",
                    n = 0;
                if (e.popup || (t += '<div id="' + x + '" class="bui-levelselect">'), e.showValue) {
                    for (t += '    <div class="bui-box select-value">', n = 0; n < e.level; n++) t += '        <div class="select-level-val-' + n + '"></div>';
                    t += "    </div>"
                }
                for (t += '<div id="' + k + '" class="bui-tab bui-levelselect-tab">', t += '    <div class="bui-tab-main">', t += "        <ul>", n = 0; n < e.level; n++) t += "            <li>", t += '                <div class="select-level-' + n + '"></div>', t += "            </li>";
                return t += "        </ul>", t += "    </div>", t += "</div>", e.popup || (t += "</div>"), t
            }

            function g(t, n) {
                return e.on.apply(P, arguments), this
            }

            function v(t, n) {
                return e.off.apply(P, arguments), this
            }

            function m(t) {
                P.self = this == window || this == P ? null : this, e.trigger.apply(P, arguments)
            }
            var b = {
                    popup: !0,
                    data: [],
                    height: 300,
                    appendTo: "",
                    title: "所在地区",
                    trigger: null,
                    placeholder: "请选择",
                    level: 3,
                    visibleNum: 2,
                    scrollNum: 1,
                    log: !1,
                    mask: !0,
                    autoClose: !0,
                    fullscreen: !1,
                    position: "bottom",
                    effect: "fadeInUp",
                    showValue: !0,
                    onMask: null,
                    value: [],
                    onChange: null,
                    onInited: null,
                    field: {
                        name: "n",
                        icon: "icon",
                        image: "image",
                        value: "",
                        data: ["c", "a"]
                    }
                },
                w = n.extend(!0, {}, b, i),
                y = [],
                x = bui.guid(),
                k = x + "-slide",
                T = null,
                C = null,
                I = 0,
                O = [],
                S = null,
                j = [],
                E = [],
                L = [],
                N = [],
                D = null,
                P = {
                    init: a,
                    show: s,
                    hide: c,
                    value: d,
                    to: o,
                    prev: r,
                    next: l,
                    on: g,
                    off: v,
                    trigger: m
                };
            i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body");
            var F = n(i.id ? i.id : i.appendTo),
                R = !0;
            return a(w), P
        }
    }(window.bui || {}, window.libs);
    e(function (e) {
        ! function (t, n) {
            t.tab = function (i) {
                var a = {
                        id: "",
                        menu: ".bui-tab-head > ul",
                        children: ".bui-tab-main > ul",
                        header: "header",
                        footer: "footer",
                        item: "li",
                        prev: ".bui-tab-prev",
                        next: ".bui-tab-next",
                        alignClassName: "",
                        stopHandle: "",
                        width: 0,
                        height: 0,
                        zoom: !1,
                        swipe: !0,
                        animate: !0,
                        bufferEffect: !1,
                        visibleNum: 1,
                        scrollNum: 1,
                        distance: 40,
                        direction: "x",
                        autoplay: !1,
                        autoheight: !1,
                        scroll: !0,
                        index: 0,
                        fullscreen: !1,
                        autopage: !1,
                        autoload: !1,
                        async: !0,
                        callback: null,
                        onStart: null,
                        onMove: null,
                        onEnd: null
                    },
                    o = e.config = n.extend(!0, {}, a, t.config.slide, i);
                return t.slide(o)
            }
        }(window.bui || {}, window.libs)
    });
    ! function (e, t) {
        e.input = function (n) {
            function i(n) {
                var i = t.extend(!0, k, n);
                if (k = x.config = i, "" != i.id && null !== i.id) {
                    if (p = e.obj(i.id), w = p.find(i.target), v = w.eq(0), m = e.unit.startWithClass(i.iconClass) ? i.iconClass : "." + i.iconClass, !T) {
                        if (a(i), i.showLength) {
                            var r = o(i);
                            p.append(r)
                        }
                        i.maxLength > 0 && w.attr("maxlength", i.maxLength)
                    }
                    return this
                }
            }

            function a(e) {
                return w.on(e.event, bui.unit.debounce(function (n) {
                    var i = this.value,
                        a = t(this).parent(),
                        o = a.find(m);
                    g = i, i.length > 0 && e.showIcon ? o && o.length ? o.css("display", "block") : (a.append('<i class="' + m.substr(1) + '"></i>'), o = w.find(m)) : o && o.css("display", "none"), e.showLength && (b = a.find("em"), b.text(i.length)), e.onInput && e.onInput.call(x, n), h.call(x, "input", n)
                }, 100)), w.on("focus", function (n) {
                    var i = this.value;
                    g = i, v = t(this), e.showIcon && (p.find(m).css("display", "none"), i && t(this).next().css("display", "block")), e.onFocus && e.onFocus.call(x, n), h.call(x, "focus", n)
                }), w.on("blur", function (t) {
                    var n = e.onBlur && e.onBlur.call(x, t);
                    g = 1 == n || null === n ? this.value : "", h.call(x, "blur", t)
                }), e.showIcon && p.on("click", m, function (t) {
                    e.callback && e.callback.call(x, t), h.call(x, "click", t)
                }), T = !0, this
            }

            function o(e) {
                v.parent();
                return '<span class="bui-input-length"><em>0</em>/' + e.maxLength + "</span>"
            }

            function r(e) {
                return void 0 !== e ? (v.val(e), this) : g
            }

            function l() {
                return v.val(""), v.next().css("display", "none"), k.showLength && b.text(0), this
            }

            function s() {
                return "text" == v.attr("type") ? v.attr("type", "password") : v.attr("type", "text"), this
            }

            function c(t) {
                var n = {};
                return e.widget.call(n, t)
            }

            function u(t, n) {
                return e.option.call(x, t, n)
            }

            function d(t, n) {
                return e.on.apply(x, arguments), this
            }

            function f(t, n) {
                return e.off.apply(x, arguments), this
            }

            function h(t) {
                x.self = this == window || this == x ? null : this, e.trigger.apply(x, arguments)
            }
            var p, g, v, m, b, w, y = {
                    id: "",
                    target: "input,textarea",
                    event: "input",
                    iconClass: ".icon-remove",
                    showIcon: !0,
                    showLength: !1,
                    maxLength: 0,
                    onInput: null,
                    onBlur: null,
                    onFocus: null,
                    callback: null
                },
                x = {
                    handle: {},
                    empty: l,
                    value: r,
                    toggleType: s,
                    on: d,
                    off: f,
                    widget: c,
                    option: u,
                    config: k,
                    init: i
                },
                k = x.config = t.extend(!0, {}, y, e.config.searchbar, n),
                T = !1;
            return i(k), x
        }
    }(bui || {}, libs),
    function (e, t) {
        e.ajax = function (n) {
            function i(e) {
                var n = function (t, n, i) {
                        var o;
                        if ("string" == typeof t && "json" == e.dataType) try {
                            o = JSON.parse(t)
                        } catch (e) {
                            o = t
                        } else o = t || {};
                        s && s(o, n, i), a.resolve(o, n, i)
                    },
                    i = function (t, n, i) {
                        var o;
                        if ("string" == typeof t && "json" == e.dataType) try {
                            o = JSON.parse(t)
                        } catch (e) {
                            o = t
                        } else o = t || {};
                        c && c(o, n, i), a.reject(o, n, i)
                    };
                e.success = n, e.error = i;
                var r = e.type && e.type.toUpperCase();
                e.type = r || e.method.toUpperCase(), o = t.ajax(e)
            }
            var a = t.Deferred(),
                o = null,
                r = {
                    data: {},
                    method: "GET",
                    dataType: "json",
                    timeout: 6e4,
                    headers: {},
                    processData: !0,
                    mimeType: "none",
                    cache: !1,
                    async: !0,
                    needJsonString: !0,
                    contentType: "",
                    localData: null,
                    native: !0
                },
                l = t.extend(!0, {}, r, e.config.ajax, n),
                s = l.success,
                c = l.fail || l.error;
            if ("" === l.contentType && "GET" == l.method ? l.contentType = "text/html;charset=UTF-8" : "" === l.contentType && "POST" == l.method ? l.contentType = "application/x-www-form-urlencoded" : l.contentType = l.contentType,
                "application/json" == l.contentType && "object" === e.typeof(l.data) && l.needJsonString) try {
                l.data = JSON.stringify(l.data)
            } catch (e) {
                l.data = l.data
            }
            if (!l.url) return e.showLog("url不能为空", "bui.ajax"), a;
            if (a.abort = function () {
                o && o.abort()
            }, l.localData) return s && s(l.localData, 200), a.resolve(l.localData, 200), a;
            if (l.native && e.isWebapp || !l.native && !e.isWebapp) i(l);
            else {
                if (void 0 === e.native.ajax) return i(l), a;
                a = e.native.ajax && e.native.ajax(l) || a
            }
            return a
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.load = function (n) {
            var i, a = {
                    url: "",
                    param: {},
                    reload: !1,
                    replace: !1,
                    native: !0
                },
                o = t.extend(!0, {}, a, e.config.load, n),
                r = o.url;
            if (!o.url) return void e.showLog("url 不能为空!", "bui.load:web");
            if (r.indexOf("tel:") >= 0 || r.indexOf("mailto:") >= 0 || r.indexOf("sms:") >= 0) return void e.unit.openExtral(r);
            try {
                o.param = "string" == typeof o.param && JSON.parse(o.param) || o.param || {}
            } catch (t) {
                return void e.showLog("param 参数值必须是一个{}对象", "bui.load:web")
            }
            return document.activeElement.blur(), i = e.setUrlParams(o.url, o.param), o.reload && e.isWebapp ? void(window.location.href = i) : o.reload && !e.isWebapp ? void(e.native.load && e.native.load(o)) : !o.replace || "load" in window.router ? void("load" in window.router ? window.router.load(o) : o.native && e.isWebapp || !o.native && !e.isWebapp ? window.location.href = i : e.native.load && e.native.load(o)) : void window.location.replace(i)
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.getPageParams = function (n) {
            var i = t.Deferred(),
                a = {
                    callback: null,
                    native: !0
                };
            n = n || {};
            var o = t.extend(!0, {}, a, e.config.getPageParams);
            if ("function" == typeof n ? o.callback = n : n && "object" === e.typeof(n) && (o = t.extend(!0, {}, a, e.config.getPageParams, n)), "getPageParams" in window.router) {
                var r = window.router.getPageParams && window.router.getPageParams();
                o.callback && o.callback(r), i.resolve(r)
            } else if (o.native && e.isWebapp || !o.native && !e.isWebapp) {
                var l = e.getUrlParams();
                o.callback && o.callback(l), i.resolve(l)
            } else i = e.native.getPageParams && e.native.getPageParams(o) || i;
            return i
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.back = function (n) {
            function i() {
                if (-1 === a.index ? window.history.back() : window.history.go(a.index), u) try {
                    clearTimeout(u)
                } catch (e) {}
                a.delay && a.callback ? u = setTimeout(function () {
                    a.callback()
                }, 500) : a.callback && a.callback()
            }
            var a, o = {
                index: -1,
                name: "",
                delay: !0,
                native: !0,
                callback: null
            };
            if ("function" == typeof n ? (o.callback = n, a = t.extend(!0, {}, o, e.config.back)) : a = n && "object" === e.typeof(n) ? t.extend(!0, {}, o, e.config.back, n) : t.extend(!0, {}, o, e.config.back), "back" in window.router)
                if (window.router.config.syncHistory) {
                    var r = router.getHistory(),
                        l = r.length - 1;
                    if (a.name) {
                        var s = e.array.indexs(a.name, r, "pid"),
                            c = s.length;
                        a.index = c ? -(r.length - s[c - 1] - 1) : -1
                    }
                    Math.abs(a.index) > l && (a.index = -l), r.length > 1 && i()
                } else window.router.back && window.router.back(a);
            else a.native && e.isWebapp || !a.native && !e.isWebapp ? i() : e.native.back && e.native.back(a);
            var u
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.refresh = function (n) {
            var i = {
                    native: !0
                },
                a = t.extend(!0, {}, i, e.config.refresh, n);
            "refresh" in window.router ? window.router.refresh() : a.native && e.isWebapp || !a.native && !e.isWebapp ? window.location.reload(!0) : e.native.refresh && e.native.refresh()
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.run = function (n) {
            var i = {},
                a = {
                    id: "",
                    name: "",
                    data: null,
                    onFail: null,
                    native: !0
                };
            "string" == typeof n ? i.id = n : n && "object" === e.typeof(n) && (i = t.extend(!0, {}, a, e.config.run, n));
            var o = String(i.id);
            if (i.native && e.isWebapp || !e.isWebapp && !i.native) {
                if (o.indexOf("http://") > -1 || o.indexOf("https://") > -1) {
                    var r = e.setUrlParams(i.id, i.data);
                    if (e.platform.isIos()) return void(window.location.href = r);
                    var l = window.open("", "_blank") || window.open("", "_newtab");
                    l.location.href = r
                }
            } else e.native.run && e.native.run(i)
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.fileselect = function (n) {
            function i(n) {
                var i = t.extend(!0, g, n);
                switch (g.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), i.mediaType) {
                case "allmedeia":
                    x = "*";
                    break;
                case "picture":
                case "image":
                    x = "image/*";
                    break;
                case "video":
                    x = "video/*";
                    break;
                case "audio":
                    x = "audio/*";
                    break;
                default:
                    x = i.mediaType
                }
                return w = [], y ? r() : h = e.native.fileselect && e.native.fileselect(n, {
                    module: v
                }) || {}, this
            }

            function a(n) {
                m = null;
                var i = this,
                    a = t.extend(!0, g, n);
                return b = a, y ? (n.from ? "picture" === n.from || "photo" === n.from || "savephoto" === n.from ? f.removeAttr("capture") : f.attr("capture", n.from) : f.removeAttr("capture"), f.off("change").on("change", function () {
                    var t = this.files;
                    if (t.length < 1) return void(a.onFail && a.onFail.call(i, t, w));
                    t.length > 1 && e.showLog("一次只能选一张图片", "bui.fileselect:web"), m = t[0];
                    try {
                        if (!e.array.compare(t[0].name, w, "name")) {
                            var n = {
                                name: t[0].name,
                                data: t[0],
                                type: t[0].type,
                                size: t[0].size
                            };
                            w.push(n)
                        }
                    } catch (t) {
                        e.showLog(t, "bui.fileselect:web")
                    }
                    a.onSuccess && a.onSuccess.call(i, t, w)
                }), e.platform.isIos() && "function" == typeof FastClick ? f[0].dispatchEvent(new Event("click")) : f.trigger("click")) : h.add.bind(i)(a), this
            }

            function o(e) {
                var e = e || {},
                    t = e.data || m,
                    n = e.onSuccess || function () {};
                e.onFail;
                if (y) try {
                    ! function (e) {
                        var t = new FileReader;
                        t.onloadend = function (t) {
                            var i = new Image,
                                a = !1,
                                o = b.width || 800,
                                r = b.quality || .8,
                                l = document.createElement("canvas"),
                                s = l.getContext("2d");
                            i.src = this.result, i.onload = function () {
                                if (!a) return l.width = o, l.height = o * (i.height / i.width), s.drawImage(i, 0, 0, l.width, l.height), i.src = l.toDataURL("image/jpeg", r), n && n.call(v, i.src, e), void(a = !0)
                            }
                        }, t.readAsDataURL(e)
                    }(t)
                } catch (e) {} else h.toBase64(e);
                return this
            }

            function r() {
                if (void 0 == f) {
                    d = bui.guid();
                    var e = g.from ? 'capture="' + g.from + '"' : "",
                        n = '<input type="file" accept="' + x + '" name="uploadFiles" id="' + d + '" ' + e + ' style="display:none"/>';
                    t(g.appendTo).append(n), f = t("#" + d) || t('input[name="uploadFiles"]')
                }
            }

            function l(t, n) {
                var n = n || "name";
                if (!y) return w = h.remove(t, n);
                if ("string" == typeof t) {
                    e.array.remove(t, w, n);
                    var i = w.length ? w[w.length - 1].data : null;
                    return m = i, w
                }
                return this
            }

            function s() {
                return w = [], m = null, y || h.clear(), w
            }

            function c() {
                return w = y ? w : h.data()
            }

            function u() {
                return m = y ? m : h.value()
            }
            var d, f, h, p = {
                    native: !0,
                    appendTo: "",
                    quality: .8,
                    from: "camera",
                    width: 800,
                    height: 800,
                    mediaType: "picture"
                },
                g = t.extend(!0, {}, p, e.config.fileselect, n),
                v = {
                    add: a,
                    remove: l,
                    clear: s,
                    value: u,
                    data: c,
                    toBase64: o,
                    init: i
                },
                m = null,
                b = null,
                w = [],
                y = g.native && e.isWebapp || !g.native && !e.isWebapp,
                x = "*";
            return i(g), v
        }
    }(bui || {}, libs),
    function (e, t) {
        e.file = function (n) {
            function i(t) {
                return b = e.fileselect(t), g = a(t), v = o({
                    root: !0,
                    create: !0
                }), this
            }

            function a(n) {
                function i(e) {
                    var t = "";
                    try {
                        switch (e.code) {
                        case FileError.QUOTA_EXCEEDED_ERR:
                            t = "QUOTA_EXCEEDED_ERR";
                            break;
                        case FileError.NOT_FOUND_ERR:
                            t = "NOT_FOUND_ERR";
                            break;
                        case FileError.SECURITY_ERR:
                            t = "SECURITY_ERR";
                            break;
                        case FileError.INVALID_MODIFICATION_ERR:
                            t = "INVALID_MODIFICATION_ERR";
                            break;
                        case FileError.INVALID_STATE_ERR:
                            t = "INVALID_STATE_ERR";
                            break;
                        default:
                            t = "Unknown Error"
                        }
                    } catch (e) {}
                    var n = {
                        msg: t
                    };
                    a.reject(n)
                }
                var a = t.Deferred();
                return C ? (h = "bui.app", p = window, m = 1024 * parseInt(T.size) * 1024, window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, navigator.webkitPersistentStorage && navigator.webkitPersistentStorage.requestQuota(m, function (e) {
                    window.requestFileSystem(window.PERSISTENT, e, function (e) {
                        a.resolve(e)
                    }, i)
                })) : w = e.native.file && e.native.file(n, {
                    fileselect: b,
                    module: k
                }) || {}, a
            }

            function o(e) {
                var n = {
                        folderName: h,
                        root: !1,
                        create: !1,
                        msg: "",
                        param: {
                            create: !1,
                            exclusive: !1
                        },
                        onSuccess: null,
                        onFail: null
                    },
                    i = t.extend({}, n, e),
                    a = "";
                if (i.create ? (a = "创建 ", i.param.create = !0) : (a = "获取 ", i.param.create = !1), C) {
                    var o = r(i.folderName);
                    o = i.root ? o : h + "/" + o, g.done(function (e) {
                        e.root.getDirectory(o, i.param, function (t) {
                            i.onSuccess && i.onSuccess.call(k, t, e)
                        }, function (e) {
                            var t = {
                                msg: a + o + " 文件夹失败"
                            };
                            i.onFail && i.onFail.call(k, t)
                        })
                    }).fail(function (e) {
                        var t = {
                            msg: "文件系统还没准备好."
                        };
                        i.onFail && i.onFail.call(k, t)
                    })
                } else w.getFolder(i);
                return this
            }

            function r(e) {
                var t;
                return "." == e[0] || "/" == e[0] || " " == e[0] ? (t = e.slice(1), r(t)) : "." != e[0] && "/" != e[0] && " " != e[0] ? e : void 0
            }

            function l(e) {
                return e && e.indexOf("/") > -1 ? e.slice(e.lastIndexOf("/") + 1, e.indexOf("?") > -1 ? e.indexOf("?") : void 0) : e
            }

            function s(e) {
                var n = {
                        fileName: "",
                        folderName: "",
                        root: !1,
                        create: !1,
                        param: {
                            create: !1,
                            exclusive: !1
                        },
                        onSuccess: null,
                        onFail: null
                    },
                    i = t.extend({}, n, e),
                    a = "";
                if (i.create ? (a = "创建 ", i.param.create = !0) : (a = "获取 ", i.param.create = !1), !i.fileName || i.fileName.indexOf(".") < 0) return void(i.onFail && i.onFail());
                if (C) {
                    var r = l(i.fileName);
                    o({
                        root: i.root,
                        folderName: i.folderName,
                        create: !0,
                        onSuccess: function (e, t) {
                            var n = e.name == h ? e.name + "/" + r : h + "/" + e.name + "/" + r;
                            t.root.getFile(n, i.param, function (e) {
                                y = e, i.onSuccess && i.onSuccess.call(k, e, t)
                            }, function (e) {
                                var t = {
                                    msg: a + r + " 文件失败"
                                };
                                i.onFail && i.onFail.call(k, t)
                            })
                        }, onFail: function (e) {
                            i.onFail && i.onFail(e)
                        }
                    })
                } else w.getFile(i);
                return this
            }

            function c(e) {
                var n = t.extend(!0, {}, e);
                return C ? o({
                    root: n.root,
                    folderName: n.folderName,
                    create: n.create,
                    onSuccess: function (e, t) {
                        e.removeRecursively(function () {
                            n.onSuccess && n.onSuccess.call(k, e, t)
                        }, function (t) {
                            var i = {
                                msg: "删除 " + n.folderName + " 文件失败"
                            };
                            n.onFail && n.onFail.call(k, i, e)
                        })
                    }, onFail: function (e) {
                        var t = {
                            msg: "删除 " + n.folderName + " 文件失败"
                        };
                        n.onFail && n.onFail.call(k, t)
                    }
                }) : w.removeFolder(n), this
            }

            function u(e) {
                var n = t.extend(!0, {}, e);
                return C ? s({
                    root: n.root,
                    create: n.create,
                    folderName: n.folderName,
                    fileName: n.fileName,
                    onSuccess: function (e, t) {
                        e.remove(function () {
                            n.onSuccess && n.onSuccess.call(k, e, t)
                        }, function (t) {
                            var i = {
                                msg: "删除 " + n.fileName + " 文件失败"
                            };
                            n.onFail && n.onFail.call(k, i, e)
                        })
                    }, onFail: function (e) {
                        var t = {
                            msg: "删除 " + n.fileName + " 文件失败"
                        };
                        n.onFail && n.onFail.call(k, t)
                    }
                }) : w.removeFile(n), this
            }

            function d(t) {
                var n = t || {};
                if (n.url) {
                    l(n.url);
                    return C ? e.showLog("web暂不支持open方法", "bui.file.open:web") : w.open(n), this
                }
            }

            function f(e) {
                return b.toBase64(e), this
            }
            var h, p, g, v, m, b, w, y, x = {
                    size: 10,
                    native: !0
                },
                k = {
                    getFolder: o,
                    removeFolder: c,
                    getFile: s,
                    getFileName: l,
                    removeFile: u,
                    toBase64: f,
                    open: d,
                    init: i
                },
                T = k.config = t.extend(!0, {}, x, e.config.file, n),
                C = T.native && e.isWebapp || !T.native && !e.isWebapp;
            return i(T), k
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.upload = function (n) {
            function i(t) {
                return v = e.loading({
                    display: "block",
                    width: 30,
                    height: 30,
                    opacity: 0,
                    autoClose: t.autoClose,
                    callback: t.onMask
                }), m = e.fileselect({
                    native: t.native,
                    from: t.from,
                    mediaType: t.mediaType
                }), j || (w = e.native.upload && e.native.upload(t, {
                    loading: v,
                    fileselect: m,
                    module: I
                }) || {}), t.data ? (c(t), this) : this
            }

            function a(e) {
                return m.add.bind(I)(e), this
            }

            function o(e, t) {
                var n = s(),
                    i = n.length;
                return i && m.remove(n[i - 1].name, t), this
            }

            function r() {
                return m.clear(), this
            }

            function l(e) {
                return m.toBase64(e), this
            }

            function s() {
                return m.data()
            }

            function c(e) {
                var n = t.extend(!0, {}, C, e);
                if (x = n.url, y = m.value(), O = n.showProgress, y) {
                    if (O && v.show(), j) {
                        var i = n.data,
                            a = new FormData;
                        a.append(n.fileKey, y);
                        for (var o in i) a.append(o, i[o]);
                        n.data = a, d(n)
                    } else w.start(n);
                    return this
                }
            }

            function u(e) {
                return j ? (v && v.stop(), b && b.abort(), e && e.call(I, v, b)) : w.stop(e), this
            }

            function d(e) {
                var n = e.onSuccess,
                    i = e.onFail;
                return b = t.ajax({
                    url: x,
                    type: e.method,
                    data: e.data,
                    cache: e.cache,
                    headers: e.headers,
                    contentType: e.contentType,
                    processData: e.processData,
                    timeout: e.timeout,
                    xhr: function () {
                        var e = t.ajaxSettings.xhr();
                        if (f && e.upload) return e.upload.addEventListener("progress", f, !1), e
                    }, success: function (e) {
                        p(), n && n.call(I, e)
                    }, error: function (e, t) {
                        p(), i && i.call(I, e, t)
                    }
                }), this
            }

            function f(e) {
                window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame(function () {
                    if (e.lengthComputable) {
                        var t = Math.round(100 * e.loaded / e.total);
                        k = t.toString() + "%", t < 100 ? h(k) : p(), S && S.call(I, k)
                    }
                })
            }

            function h(e) {
                return v && v.show({
                    text: e
                }), this
            }

            function p() {
                return v && v.stop(), this
            }

            function g(t) {
                var n = {
                    loading: v,
                    fileselect: m,
                    ajax: b
                };
                return e.widget.call(n, t)
            }
            var v, m, b, w, y, x, k, T = {
                    url: "",
                    data: null,
                    headers: {},
                    showProgress: !0,
                    timeout: 6e4,
                    native: !0,
                    contentType: !1,
                    processData: !1,
                    autoClose: !0,
                    method: "POST",
                    fileKey: "file",
                    mediaType: "picture",
                    from: "picture",
                    onProgress: null,
                    onMask: function () {
                        u()
                    }, onSuccess: null,
                    onFail: null
                },
                C = t.extend(!0, {}, T, e.config.upload, n),
                I = {
                    init: i,
                    add: a,
                    remove: o,
                    clear: r,
                    data: s,
                    start: c,
                    stop: u,
                    toBase64: l,
                    widget: g
                },
                O = C.showProgress,
                S = C.onProgress,
                j = C.native && e.isWebapp || !C.native && !e.isWebapp;
            return i(C), I
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.download = function (n) {
            function i(t) {
                return y = e.loading({
                    display: "block",
                    width: 30,
                    height: 30,
                    opacity: 0,
                    callback: function () {
                        r()
                    }
                }), h = e.file({
                    native: t.native
                }), C ? function (e) {
                    h.getFolder({
                        folderName: e.folderName,
                        create: !1,
                        onSuccess: function (e, t) {
                            m = e.fullPath
                        }, onFail: function (t) {
                            h.getFolder({
                                folderName: e.folderName,
                                create: !0,
                                onSuccess: function (e, t) {
                                    m = e.fullPath
                                }, onFail: function (e) {
                                    S && S.call(k, e)
                                }
                            })
                        }
                    }), e.url && a(e)
                }(t) : p = e.native.download && e.native.download(t, {
                    file: h,
                    loading: y,
                    module: k
                }) || {}, this
            }

            function a(e) {
                var n = t.extend(!0, {}, T, e);
                g = n.url, v = encodeURI(g), O = n.onProgress, I = n.showProgress, I && y.show({
                    text: "0%"
                }), b = m + "/" + (e.fileName || h.getFileName(g)), C ? (n.cache = !1, n.contentType = !1, n.processData = !1, f = t.ajax({
                    url: v,
                    type: n.method,
                    data: n.data,
                    cache: n.cache,
                    headers: n.headers,
                    contentType: n.contentType,
                    processData: n.processData,
                    timeout: n.timeout,
                    xhr: function () {
                        var e = t.ajaxSettings.xhr();
                        if (l && e) return e.addEventListener("progress", l, !1), e
                    }, success: function (t) {
                        var i = e.fileName || h.getFileName(n.url);
                        h.getFile({
                            fileName: i,
                            folderName: n.folderName,
                            create: !0,
                            onSuccess: function (e, t) {
                                n.onSuccess && n.onSuccess.call(k, e.fullPath, t)
                            }
                        })
                    }, fail: function (e) {
                        c(), n.onFail && n.onFail.call(k, e)
                    }
                })) : p.start(n)
            }

            function o(e) {
                var n = t.extend(!0, {
                        autoDown: !0
                    }, T, e),
                    i = e.fileName || h.getFileName(n.url);
                h.getFile({
                    fileName: i,
                    folderName: n.folderName,
                    onSuccess: function (e, t) {
                        n.onSuccess && n.onSuccess.call(k, e.fullPath, e, t)
                    }, onFail: function (e) {
                        n.autoDown = a(n)
                    }
                })
            }

            function r(e) {
                C ? (c(), f && f.abort()) : p.stop(), e && e.call(k, y, f)
            }

            function l(e) {
                window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame(function () {
                    if (e.lengthComputable) {
                        var t = Math.round(100 * e.loaded / e.total);
                        w = t.toString() + "%", t < 100 ? s(w) : c(), O && O.call(k, w)
                    }
                })
            }

            function s(e) {
                I && y && y.show({
                    text: e
                })
            }

            function c() {
                I && y && y.stop()
            }

            function u(e) {
                return h.toBase64(e), this
            }

            function d(t) {
                var n = {
                    loading: y,
                    file: h,
                    ajax: f
                };
                return e.widget.call(n, t)
            }
            var f, h, p, g, v, m, b, w, y, x = {
                    url: "",
                    data: {},
                    headers: {},
                    method: "GET",
                    showProgress: !0,
                    timeout: 6e4,
                    fileName: "",
                    folderName: "download",
                    native: !0,
                    onProgress: null,
                    onSuccess: null,
                    onFail: null
                },
                k = {
                    getFile: o,
                    start: a,
                    stop: r,
                    toBase64: u,
                    init: i,
                    widget: d
                },
                T = k.config = t.extend(!0, {}, x, e.config.download, n),
                C = T.native && e.isWebapp || !T.native && !e.isWebapp,
                I = T.showProgress,
                O = T.onProgress,
                S = T.onFail;
            return i(T), k
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.currentPlatform = "webapp", e.ready = function (n) {
            e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp;
            var i = t.Deferred();
            if (e.isWebapp) t(document).ready(function () {
                n && n(), e.trigger.call(e, "pageready"), i.resolve()
            });
            else {
                if (void 0 === e.native.ready) return e.showLog("当前bui.js为webapp版本,不支持原生方法,请更换bui.js为对应平台版本"), i;
                i = e.native.ready && e.native.ready(n) || i
            }
            return i
        }
    }(window.bui || {}, window.libs),
    function (e, t) {
        e.init = function (n) {
            var i, a = {
                id: ".bui-page",
                height: 0,
                header: "header",
                main: "main",
                footer: "footer"
            };
            if ("object" == e.typeof(n)) i = t.extend({}, a, e.config.init, n);
            else {
                var o = {};
                o.height = n, i = t.extend({}, a, o)
            }
            var r = i.height || document.documentElement.clientHeight;
            if (!(e.obj(i.main).length < 1)) {
                try {
                    var l = e.obj(i.id),
                        s = i.header.indexOf("#") > -1 ? e.obj(i.header)[0] : l.children(i.header)[0],
                        c = i.footer.indexOf("#") > -1 ? e.obj(i.footer)[0] : l.children(i.footer)[0],
                        u = i.main.indexOf("#") > -1 ? e.obj(i.main) : l.children(i.main),
                        d = s ? s.offsetHeight : 0,
                        f = c ? c.offsetHeight : 0,
                        h = r - d - f;
                    u.height(h)
                } catch (t) {
                    e.showLog(t, "bui.init")
                }
                return h
            }
        }, window.loader = e.loader(), e.define = loader.define, e.require = loader.require, e.map = loader.map, e.import = loader.import, e.checkLoad = loader.checkLoad, e.checkDefine = loader.checkDefine, window.addEventListener ? window.addEventListener("load", function (t) {
            e.trigger.call(e, "onload")
        }, !1) : window.attachEvent("onload", function (t) {
            e.trigger.call(e, "onload")
        }), t(document).ready(function () {
            e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp, e.trigger.call(e, "pagebefore"), e.platform.isWindow() || e.platform.isMac() ? window.viewport = e.viewport(40) : window.viewport = e.viewport(), e.config.init.auto && e.init(), "function" == typeof FastClick && FastClick.attach(document.body), e.trigger.call(e, "pageinit")
        });
        try {
            var n = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "",
                i = n.replace(/hidden/i, "visibilitychange"),
                a = function (t) {
                    document[n] ? e.trigger.call(e, "pagehide", t) : e.trigger.call(e, "pageshow", t)
                };
            document.addEventListener(i, a)
        } catch (e) {}
        try {
            navigator.control.gesture(!1), navigator.control.longpressMenu(!1)
        } catch (e) {}
    }(window.bui || {}, window.libs)
});