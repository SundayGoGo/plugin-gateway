(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-8f664142"], {
        "2fdb": function (t, e, n) {
            "use strict";
            var r = n("5ca1"),
                i = n("d2c8"),
                a = "includes";
            r(r.P + r.F * n("5147")(a), "String", {
                includes: function (t) {
                    return !!~i(this, t, a).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        5147: function (t, e, n) {
            var r = n("2b4c")("match");
            t.exports = function (t) {
                var e = /./;
                try {
                    "/./" [t](e)
                } catch (n) {
                    try {
                        return e[r] = !1, !"/./" [t](e)
                    } catch (i) {}
                }
                return !0
            }
        },
        6762: function (t, e, n) {
            "use strict";
            var r = n("5ca1"),
                i = n("c366")(!0);
            r(r.P, "Array", {
                includes: function (t) {
                    return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), n("9c6c")("includes")
        },
        d2c8: function (t, e, n) {
            var r = n("aae3"),
                i = n("be13");
            t.exports = function (t, e, n) {
                if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
                return String(i(t))
            }
        },
        eb43: function (t, e, n) {
            "use strict";
            n.r(e);
            var r = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("el-tabs", {
                        model: {
                            value: t.active,
                            callback: function (e) {
                                t.active = e
                            },
                            expression: "active"
                        }
                    }, [t._l(t.pluginList, (function (e) {
                        return [n("el-tab-pane", {
                            attrs: {
                                label: e.name,
                                name: e.name
                            }
                        }, [n("el-form", {
                            ref: "form",
                            refInFor: !0,
                            attrs: {
                                "label-width": "200px"
                            }
                        }, [t._l(e.mainTips, (function (t, e) {
                            return [n("el-alert", {
                                key: e,
                                staticStyle: {
                                    "margin-bottom": "10px"
                                },
                                attrs: {
                                    title: t,
                                    closable: !1,
                                    type: "error"
                                }
                            })]
                        })), t._v(" "), t._l(e.configList, (function (e) {
                            return [n("el-form-item", {
                                attrs: {
                                    label: e.name
                                }
                            }, [n("el-input", {
                                staticStyle: {
                                    width: "600px"
                                },
                                attrs: {
                                    value: e.value
                                }
                            }), t._v(" "), e.tips ? n("el-alert", {
                                staticStyle: {
                                    "line-height": "0",
                                    "margin-top": "5px"
                                },
                                attrs: {
                                    title: e.tips,
                                    closable: !1,
                                    type: "info"
                                }
                            }) : t._e()], 1)]
                        }))], 2)], 1)]
                    }))], 2)], 1)
                },
                i = [],
                a = (n("8e6e"), n("6762"), n("2fdb"), n("456d"), n("ac6a"), n("bd86")),
                c = n("2f62"),
                o = n("ed08"),
                s = n("2435");

            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach((function (e) {
                        Object(a["a"])(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var p = {
                    name: "config",
                    data: function () {
                        return {
                            active: "GateWay"
                        }
                    },
                    computed: l(l({}, Object(c["b"])({
                        plugins: function (t) {
                            return t.plugins
                        }
                    })), {}, {
                        pluginList: function () {
                            var t = [];
                            return this.plugins.forEach((function (e) {
                                var n = {
                                    name: e.Name,
                                    configList: [],
                                    mainTips: [],
                                    version: e.Version
                                };
                                s["b"][e.Name] && s["b"][e.Name]["mainTips"] && (n.mainTips = s["b"][e.Name]["mainTips"]);
                                var r = e.HotConfig || [],
                                    i = [{
                                        name: "版本号",
                                        value: e.Version,
                                        tips: "插件的版本号"
                                    }],
                                    a = Object(o["w"])(e.Config);
                                Object.keys(a).forEach((function (t) {
                                    var n = {
                                        name: t,
                                        value: a[t],
                                        tips: s["b"][e.Name] && s["b"][e.Name][t] || "",
                                        supportHot: !1
                                    };
                                    r.length > 0 && r.includes(t) && (n.supportHot = !0), i.push(n)
                                })), n.configList = i, t.push(n)
                            })), t
                        }
                    }),
                    methods: {}
                },
                f = p,
                b = n("2877"),
                m = Object(b["a"])(f, r, i, !1, null, "6ed26b68", null);
            e["default"] = m.exports
        }
    }
]);