(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0ceb84"], {
        "613f": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("el-form", {
                            attrs: {
                                "label-width": "80px",
                                size: "mini"
                            }
                        },
                        [
                            n("el-form-item", {
                                    attrs: {
                                        label: "技术支持"
                                    }
                                },
                                [n("span", [e._v("\n        " + '寿光有氧信息科技有限公司' + "\n      ")])]),
                            n("el-form-item", {
                                    attrs: {
                                        label: "版本号"
                                    }
                                },
                                [n("span", [e._v("\n        " + 'v1.0.0' + "\n      ")])]),

                            e._v(" "), n("el-form-item", {
                                attrs: {
                                    label: "启动时间"
                                }
                            }, [n("span", [e._v("\n        " + e._s(e._f("parseTimeFilter")(e.startTime)) + "\n      ")])]), e._v(" "), n("el-form-item", {
                                attrs: {
                                    label: "运行时间"
                                }
                            }, [e.runTime ? n("span", [n("el-tag", {
                                attrs: {
                                    type: "success"
                                }
                            }, [e._v(e._s(e.runTime))])], 1) : e._e()])
                        ], 1)], 1)
                },
                i = [],
                a = (n("8e6e"), n("ac6a"), n("456d"), n("bd86")),
                o = n("2f62"),
                s = n("ed08");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function (t) {
                        Object(a["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = {
                    name: "about",
                    timeInterval: null,
                    data: function () {
                        return {
                            runTime: ""
                        }
                    },
                    computed: l({}, Object(o["b"])({
                        startTime: function (e) {
                            var t = e.engineInfo.StartTime;
                            return t ? new Date(t) : null
                        },
                        version: function (e) {
                            return e.engineInfo.Version
                        }
                    })),
                    created: function () {
                        this.init()
                    },
                    methods: {
                        init: function () {
                            var e = this;
                            this.$options.timeInterval = setInterval((function () {
                                e.startTime && (e.runTime = Object(s["e"])(e.startTime))
                            }), 1e3)
                        }
                    },
                    destroyed: function () {
                        this.$options.timeInterval && (clearInterval(this.$options.timeInterval), this.$options.timeInterval = null)
                    }
                },
                p = u,
                f = n("2877"),
                m = Object(f["a"])(p, r, i, !1, null, "272ccf0a", null);
            t["default"] = m.exports
        }
    }
]);