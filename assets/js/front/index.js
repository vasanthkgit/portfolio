/*!
 * Project:     cv
 * File:        assets/js/front/index.js
 * Copyright(c) 2016-nowdays Baltrushaitis Tomas <tbaltrushaitis@gmail.com>
 * License:     MIT
 */
"use strict";
window.jQuery((function(o) {
    let e = Object.assign({}, {
        selector: "div",
        inclass: "",
        outclass: ""
    });
    !function() {
        let t = window.location.origin + "/data/";
        fetch(t + "animations.json").then((function status(o) {
            return o.status >= 200 && o.status < 300 ? Promise.resolve(o) : (console.warn("Looks like there was a problem. Status Code: " + o.status),
            Promise.reject(new Error(o.statusText)))
        }
        )).then((function json(o) {
            let e = o.headers.get("content-type");
            if (e && e.includes("application/json"))
                return o.json();
            if (e && e.includes("text/plain"))
                return JSON.parse(o);
            throw new TypeError("Oops, we haven't got JSON!")
        }
        )).then((function(o) {
            return Promise.resolve(o.animations)
        }
        )).catch((function(o) {
            return console.warn("Failed to fetch DATA: [", o, "]"),
            Promise.reject(o)
        }
        )).then((function(t) {
            return Promise.resolve(t).then((function(t) {
                return new Promise((function(n, c) {
                    return o.each(t, (function(t, n) {
                        !function(t) {
                            let n = Object.assign({}, e || {}, t || {});
                            new window.Waypoint.Inview({
                                element: o(n.selector),
                                enter: function(o) {
                                    this.element.removeClass(n.outclass).addClass(n.inclass)
                                },
                                entered: function(o) {},
                                exit: function(o) {},
                                exited: function(o) {
                                    this.element.removeClass(n.inclass).addClass(n.outclass)
                                },
                                offset: function() {
                                    return 70 + this.element.clientHeight
                                }
                            })
                        }(n)
                    }
                    )),
                    n()
                }
                ))
            }
            ))
        }
        )).catch((function(o) {
            return console.log("Failed to Enable Animations: [", o, "]"),
            Promise.reject(o)
        }
        )).then((function() {
            return console.log("%c✓ %cAnimations: ENABLED", "color:green;font-weight:bold;font-size:16px;", "color:blue;font-weight:bold;"),
            Promise.resolve(!0)
        }
        )).catch((function(o) {
            return console.warn("Animations NOT ENABLED: [", o, "]"),
            Promise.reject(o)
        }
        ))
    }(),
    o.noty.defaults = {
        layout: "topRight",
        theme: "defaultTheme",
        type: "success",
        text: "",
        dismissQueue: !0,
        force: !1,
        maxVisible: 8,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        timeout: 5e3,
        progressBar: !0,
        buttons: !1,
        animation: {
            open: {
                height: "toggle"
            },
            close: "animated flipOutY",
            easing: "swing",
            speed: 500
        },
        closeWith: ["click"],
        modal: !1,
        killer: !1,
        callback: {
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {},
            onCloseClick: function() {}
        }
    },
    function() {
        let e = `${"cv".toUpperCase()}-v0.3.1-b116`;
        o(window).ready((function() {
            console.log("%ccv v0.3.1-b116", "color:red;font-weight:bold;font-size:24px;"),
            console.log("%cEnv: production, Branch: dev-0.3.1", "color:Purple;font-weight:bold;font-size:18px;"),
            console.group(e),
            console.log("%c✓ %cWINDOW: READY", "color:green;font-weight:bold;font-size:16px;", "color:black;font-weight:normal;")
        }
        )),
        o(document).ready((function() {
            console.log("%c✓ %cDOCUMENT: READY", "color:green;font-weight:bold;font-size:16px;", "color:black;font-weight:normal;"),
            o('[name="contact-cell"]').html(atob("KzM4MCg2Myk1NDUtMjMtb25lLTM=")),
            o('[name="contact-email"]').prop("href", atob("bWFpbHRvOnRiYWx0cnVzaGFpdGlzQGdtYWlsLmNvbQ==")),
            console.log(`%c✓ %c ${atob("Q09OVEFDVFMgU0VU")}`, "color:green;font-weight:bold;font-size:16px;", "color:blue;font-weight:bold;"),
            o("#pre-status").fadeOut(),
            o("#tt-preloader").delay(100).fadeOut("fast"),
            console.log("%c✓ %cPRELOADER REMOVED", "color:green;font-weight:bold;font-size:16px;", "color:black;")
        }
        )),
        o(window).on("load", (function() {
            console.log("%c✓ %cWINDOW: LOAD", "color:green;font-weight:bold;font-size:16px;", "color:black;font-weight:normal;"),
            console.groupEnd(e)
        }
        ))
    }()
}
));
