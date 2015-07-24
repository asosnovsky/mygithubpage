"use strict";
var asosnovsky = angular.module("asosnovsky", ["ngRoute", "ui.bootstrap", "ui.highlight"]);
asosnovsky.config(["$routeProvider",
    function(a) {
        a.when("/", {
            templateUrl: "views/home.html",
            controller: "MainCtrl"
        }).when("/about", {
            templateUrl: "views/about.html",
            controller: "ModallCtrlMobile"
        }).when("/email", {
            templateUrl: "views/email.html",
            controller: "EmailCtrlMobile"
        }).when("/actuary", {
            templateUrl: "views/actuary.html",
            controller: "ModallCtrlMobile"
        }).when("/img-modal", {
            templateUrl: "views/img-modal.html",
            controller: "ImgCtrlMobile"
        }).when("/tutor", {
            templateUrl: "views/tutor.html",
            controller: "ModallCtrlMobile"
        }).when("/web", {
            templateUrl: "views/web.html",
            controller: "ModallCtrlMobile"
        })
    }
]), asosnovsky.config(["$locationProvider",
    function(a) {
        a.hashPrefix("!")
    }
]), asosnovsky.service("$vppathfinder", [
    function() {
        this.pathfinder = function() {
            console.log("MOBILE!")
        }, this.pathchange = function(a, b) {
            console.log("MOBILE!", a, b)
        }
    }
]), asosnovsky.service("$vpmodal", ["datamanager", "$http", "$sce",
    function(a, b, c) {
        this.scope = function(b) {
            b.tooltips = {
                sfl: '<div class="tooltips-wrapper"><img src="http://ssdp.org/assets/sfl-logo.png"></div>',
                york: '<div class="tooltips-wrapper"><img src="http://www.yorku.ca/liaskos/images/sotirios.jpg"></div>',
                major: "",
                actsci: '<div class="tooltips-wrapper"><img style="width:200px" src="https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10696214_1491856511098536_1217672413771580967_n.jpg?oh=f0e7c9b21bc97a05b05b61c320945efa&oe=551AAED4&__gda__=1427625963_8ebeba705f094d96c4db31748b61d92d"></div>',
                stockrender: '<div class="tooltips-wrapper"><img style="width:300px" src="http://static.tumblr.com/0bf1a42dbb5c62f8d0995840b8b1e7b6/r0wa4v2/fU4nebwu8/tumblr_static_cz4g1ks1m5ckws40ks0cg00g0_2048_v2.jpg"></div>'
            }, a.getJSON("courses.json").success(function(a) {
                b.courses = a
            }), a.getJSON("tutoring.json").success(function(a) {
                b.tutoring = a
            }), b.highlight = function(a, b) {
                return c.trustAsHtml(b ? a.replace(new RegExp(b, "gi"), '<span class="highlightedText">$&</span>') : a)
            }
        }
    }
]), asosnovsky.factory("datamanager", ["$http",
    function(a) {
        var b = {};
        return {
            getJSON: function(c) {
                return b[c] ? {
                    success: function(a) {
                        a(b[c])
                    }
                } : a.get("docs/json/" + c).success(function(a) {
                    b[c] = a
                })
            },
            detachJSON: function(a) {
                delete b[a]
            }
        }
    }
]), asosnovsky.directive("vpexpand", function() {
    return function(a, b, c) {
        function d(a, c) {
            b[0].offsetHeight < b[0].scrollHeight && a.bind("click", function() {
                b.css({
                    "max-height": b[0].scrollHeight + 100
                }), c ? (h.attr("class", "fa fa-minus-circle"), g.html("Show Less ")) : (f.css({
                    background: ""
                }), h.attr("class", "")), a.bind("click", function() {
                    b.css({
                        "max-height": ""
                    }), c ? (h.attr("class", "fa fa-plus-circle"), g.html("Show More ")) : (f.css({
                        background: e.nobtn.background
                    }), h.attr("class", "fa fa-plus-circle")), d(a, c)
                })
            })
        }
        var e = {
                nobtn: {
                    width: "100%",
                    height: "30px",
                    position: "absolute",
                    bottom: "0",
                    cursor: "pointer",
                    "text-align": "center",
                    background: "linear-gradient(rgba(255, 255, 255, 0), rgb(243, 241, 241))"
                },
                btn: {
                    "font-size": "30px",
                    "text-align": "center",
                    left: "40%",
                    position: "absolute",
                    bottom: "0",
                    cursor: "pointer",
                    border: "3px groove",
                    "border-radius": "8px",
                    background: "rgba(237, 247, 255, 0.82)"
                }
            },
            f = $("<div></div>"),
            g = $("<span></span>"),
            h = $('<i class="fa fa-plus-circle"></i>'),
            i = a.$eval(c.vpexpand);
        f.css(i ? e.btn : e.nobtn), /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || i === !1 ? (setTimeout(function() {
            b[0].offsetHeight < b[0].scrollHeight && (b.append(f), f.append(h))
        }, 1), b.bind("mouseenter", function() {
            d(b, i)
        })) : (f.append(g), g.html("Show More "), f.append(h), b.bind("mouseenter", function() {
            (b[0].offsetHeight < b[0].scrollHeight || b.css("max-height") === b[0].scrollHeight + 100 + "px") && (b.append(f), d(f, i))
        }), b.bind("mouseleave", function() {
            f.detach()
        }))
    }
}), asosnovsky.controller("MainCtrl", ["$scope", "$modal", "$location", "datamanager",
    function(a, b, c, d) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), d.getJSON("documents.json").success(function(b) {
            a.documents = b
        }), d.getJSON("programs.json").success(function(b) {
            a.programs = b
        }), d.getJSON("engages.json").success(function(b) {
            a.engages = b
        }), a.emailModal = function() {
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? c.path("email").replace() : b.open({
                templateUrl: "views/email.html",
                controller: "EmailCtrlWeb"
            })
        }, a.aboutModal = function(a) {
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? c.path(a).replace() : b.open({
                templateUrl: "views/" + a + ".html",
                controller: "ModallCtrlWeb",
                size: "lg"
            })
        }, a.imgModal = function(d, e) {
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? (c.hash(e), c.path("img-modal").replace(), a.slide = d) : b.open({
                templateUrl: "views/img-modal.html",
                controller: "ImgCtrlWeb",
                resolve: {
                    slide: function() {
                        return d
                    }
                }
            })
        }
    }
]), asosnovsky.controller("EmailCtrlWeb", ["$scope", "$modalInstance",
    function(a, b) {
        a.ok = function() {
            b.close()
        }
    }
]).controller("EmailCtrlMobile", ["$scope", "$location",
    function(a, b) {
        a.ok = function() {
            b.path("").replace()
        }
    }
]), asosnovsky.controller("ModallCtrlWeb", ["$scope", "$modalInstance", "$vpmodal",
    function(a, b, c) {
        c.scope(a), a.ok = function() {
            b.close()
        }
    }
]).controller("ModallCtrlMobile", ["$scope", "$location", "$vpmodal",
    function(a, b, c) {
        c.scope(a), a.ok = function() {
            b.path("")
        }
    }
]), asosnovsky.controller("DocumentCtrl", ["$rootScope",
    function(a) {
        /iPad|iPod|BlackBerry/i.test(navigator.userAgent) || ((new WOW).init(), a.$on("$routeChangeStart", function() {
            (new WOW).sync()
        }))
    }
]), asosnovsky.controller("ImgCtrlWeb", ["$scope", "$modalInstance", "slide",
    function(a, b, c) {
        a.ok = function() {
            b.close()
        }, a.slide = c
    }
]).controller("ImgCtrlMobile", ["$scope", "$location", "datamanager",
    function(a, b, c) {
        console.log(b.url()), a.ok = function() {
            b.hash(""), b.path("").replace()
        };
        var d = "{" + b.hash().replace("&", ",") + "}";
        console.log(d), d = JSON.parse(d.replace(/[\\"']/g, '"')), c.getJSON(d.type + ".json").success(function(b) {
            a.slide = b[d.i]
        })
    }
]);