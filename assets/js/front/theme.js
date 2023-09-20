/*!
 * Project:     cv
 * File:        assets/js/front/theme.js
 * Copyright(c) 2016-nowdays Baltrushaitis Tomas <tbaltrushaitis@gmail.com>
 * License:     MIT
 */
/*!
 * Theme Name:  IAMX
 * Author:      Trendy Theme
 * Author URL:  http://trendytheme.net
 */
/*!
  = Preloader
  = Animated scrolling / Scroll Up
  = Full Screen Slider
  = Sticky Menu
  = Back To Top
  = Countup
  = Progress Bar
  = More skill
  = Shuffle
  = Magnific Popup
 */
  "use strict";
  window.jQuery((function(t) {
      var e, i;
      t('a[href*="#"]').bind("click", (function(e) {
          var i = t(this);
          t("html, body").stop().animate({
              scrollTop: t(i.attr("href")).offset().top
          }, 1e3),
          e.preventDefault()
      }
      )),
      t(".tt-fullHeight").height(t(window).height()),
      t(window).resize((function() {
          t(".tt-fullHeight").height(t(window).height())
      }
      )),
      t(".header").sticky({
          topSpacing: 0
      }),
      t("body").scrollspy({
          target: "#navbar-custom",
          offset: 70
      }),
      t(window).scroll((function() {
          t(this).scrollTop() > 100 ? t(".scroll-up").fadeIn() : t(".scroll-up").fadeOut()
      }
      )),
      t(".count-wrap").bind("inview", (function(e, i, a, n) {
          t(this).find(".timer").each((function() {
              var e = t(this);
              i ? t({
                  Counter: 0
              }).animate({
                  Counter: e.data("original-text")
              }, {
                  duration: 2e3,
                  easing: "swing",
                  step: function() {
                      e.text(Math.ceil(this.Counter))
                  }
              }) : (t({
                  Counter: 0
              }),
              e.text(Math.ceil(e.data("original-text"))))
          }
          ))
      }
      )),
      t(".skill-progress").bind("inview", (function(e, i, a, n) {
          i && t.each(t("div.progress-bar"), (function() {
              t(this).css("width", null).css("width", t(this).attr("aria-valuenow") + "%")
          }
          ))
      }
      )),
      t(".more-skill").bind("inview", (function(e, i, a, n) {
          i && t(".chart").easyPieChart({
              easing: "easeOut",
              barColor: "#68c3a3",
              delay: 1500,
              lineWidth: 8,
              rotate: 0,
              scaleColor: !1,
              size: 140,
              trackColor: "#3a4149",
              animate: {
                  duration: 2500,
                  enabled: !0
              },
              onStep: function(t, e, i) {
                  this.el.children[0].innerHTML = Math.round(i, 1)
              }
          })
      }
      )),
      e = t("#og-grid"),
      i = new window.Shuffle(e,{
          itemSelector: ".portfolio-item"
      }),
      t("#filter a").click((function(e) {
          e.preventDefault(),
          t("#filter a").removeClass("active"),
          t(this).addClass("active");
          var a = t(this).attr("data-group");
          i.filter(a)
      }
      )),
      t(".image-link").magnificPopup({
          gallery: {
              enabled: !0
          },
          removalDelay: 300,
          mainClass: "mfp-with-zoom",
          type: "image"
      }),
      new window.WOW({
          boxClass: "wow",
          animateClass: "animate__animated",
          offset: 0,
          mobile: !0,
          live: !0,
          scrollContainer: null,
          resetAnimation: !1,
          callback: function(t) {}
      }).init(),
      t("#contactForm").on("submit", (function(e) {
          e.preventDefault(),
          console.log("contactForm SUBMIT Action");
          var i = t(this).prop("action")
            , a = t(this).serialize()
            , n = t(this);
          n.prevAll(".alert").remove(),
          t.post(i, a, (function(t) {
              "error" === t.response && n.before('<div class="alert alert-danger">' + t.message + "</div>"),
              "success" === t.response && (n.before('<div class="alert alert-success">' + t.message + "</div>"),
              n.find("input, textarea").val(""))
          }
          ), "json")
      }
      ))
  }
  ));
  