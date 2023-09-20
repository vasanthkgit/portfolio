/*!
 * Project:     cv
 * File:        assets/js/front/gmap.js
 * Copyright(c) 2016-nowdays Baltrushaitis Tomas <tbaltrushaitis@gmail.com>
 * License:     MIT
 */
"use strict";
function initMap() {
    let e, o, n, t, a, i, l, p, s;
    o = parseFloat("50.436336"),
    n = parseFloat("30.488619"),
    e = new window.google.maps.LatLng(o,n),
    t = [{
        featureType: "landscape",
        stylers: [{
            color: "#f7f7f7"
        }]
    }, {
        featureType: "road",
        stylers: [{
            hue: "#fff"
        }, {
            saturation: -70
        }]
    }, {
        featureType: "poi",
        stylers: [{
            hue: ""
        }]
    }],
    a = {
        zoom: 9,
        scrollwheel: !1,
        center: e,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: !0,
        styles: t
    },
    i = new window.google.maps.Map(document.getElementById("mapCanvas"),a),
    l = new window.google.maps.Marker({
        position: e,
        map: i,
        animation: window.google.maps.Animation.DROP,
        title: "I@Kyiv"
    }),
    p = "Доброго вечора! Ми з України!",
    s = new window.google.maps.InfoWindow({
        content: "Доброго вечора! Ми з України!"
    }),
    window.google.maps.event.addListener(l, "click", (function() {
        s.open(i, l)
    }
    )),
    window.google.maps.event.addListenerOnce(i, "idle", (function() {
        console.log("%c✓ %cGoogle Map LOADED", "color:green;font-weight:bold;font-size:16px;", "color:purple;font-weight:bold;")
    }
    ))
}
window.initMap = initMap;
