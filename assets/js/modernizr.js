/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csspositionsticky-csstransforms-csstransitions-overflowscrolling-setclasses !*/
!(function (e, n, t) {
  function r(e, n) {
    return typeof e === n;
  }
  function s() {
    var e, n, t, s, o, i, a;
    for (var l in w)
      if (w.hasOwnProperty(l)) {
        if (
          ((e = []),
          (n = w[l]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase());
        for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++)
          (i = e[o]),
            (a = i.split(".")),
            1 === a.length
              ? (Modernizr[a[0]] = s)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = s)),
            C.push((s ? "" : "no-") + a.join("-"));
      }
  }
  function o(e) {
    var n = _.className,
      t = Modernizr._config.classPrefix || "";
    if ((x && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + t + e.join(" " + t)),
      x ? (_.className.baseVal = n) : (_.className = n));
  }
  function i() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : x
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function a(e, n) {
    return !!~("" + e).indexOf(n);
  }
  function l(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }
  function f(e, n, t) {
    var s;
    for (var o in e)
      if (e[o] in n)
        return t === !1
          ? e[o]
          : ((s = n[e[o]]), r(s, "function") ? l(s, t || n) : s);
    return !1;
  }
  function u(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, n, t) {
        return n + t.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function c(e) {
    return e
      .replace(/([A-Z])/g, function (e, n) {
        return "-" + n.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function d(n, t, r) {
    var s;
    if ("getComputedStyle" in e) {
      s = getComputedStyle.call(e, n, t);
      var o = e.console;
      if (null !== s) r && (s = s.getPropertyValue(r));
      else if (o) {
        var i = o.error ? "error" : "log";
        o[i].call(
          o,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else s = !t && n.currentStyle && n.currentStyle[r];
    return s;
  }
  function p() {
    var e = n.body;
    return e || ((e = i(x ? "svg" : "body")), (e.fake = !0)), e;
  }
  function m(e, t, r, s) {
    var o,
      a,
      l,
      f,
      u = "modernizr",
      c = i("div"),
      d = p();
    if (parseInt(r, 10))
      for (; r--; )
        (l = i("div")), (l.id = s ? s[r] : u + (r + 1)), c.appendChild(l);
    return (
      (o = i("style")),
      (o.type = "text/css"),
      (o.id = "s" + u),
      (d.fake ? d : c).appendChild(o),
      d.appendChild(c),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(n.createTextNode(e)),
      (c.id = u),
      d.fake &&
        ((d.style.background = ""),
        (d.style.overflow = "hidden"),
        (f = _.style.overflow),
        (_.style.overflow = "hidden"),
        _.appendChild(d)),
      (a = t(c, e)),
      d.fake
        ? (d.parentNode.removeChild(d), (_.style.overflow = f), _.offsetHeight)
        : c.parentNode.removeChild(c),
      !!a
    );
  }
  function g(n, r) {
    var s = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; s--; ) if (e.CSS.supports(c(n[s]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var o = []; s--; ) o.push("(" + c(n[s]) + ":" + r + ")");
      return (
        (o = o.join(" or ")),
        m(
          "@supports (" + o + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == d(e, null, "position");
          }
        )
      );
    }
    return t;
  }
  function v(e, n, s, o) {
    function l() {
      c && (delete N.style, delete N.modElem);
    }
    if (((o = r(o, "undefined") ? !1 : o), !r(s, "undefined"))) {
      var f = g(e, s);
      if (!r(f, "undefined")) return f;
    }
    for (
      var c, d, p, m, v, y = ["modernizr", "tspan", "samp"];
      !N.style && y.length;

    )
      (c = !0), (N.modElem = i(y.shift())), (N.style = N.modElem.style);
    for (p = e.length, d = 0; p > d; d++)
      if (
        ((m = e[d]),
        (v = N.style[m]),
        a(m, "-") && (m = u(m)),
        N.style[m] !== t)
      ) {
        if (o || r(s, "undefined")) return l(), "pfx" == n ? m : !0;
        try {
          N.style[m] = s;
        } catch (h) {}
        if (N.style[m] != v) return l(), "pfx" == n ? m : !0;
      }
    return l(), !1;
  }
  function y(e, n, t, s, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + P.join(i + " ") + i).split(" ");
    return r(n, "string") || r(n, "undefined")
      ? v(a, n, s, o)
      : ((a = (e + " " + z.join(i + " ") + i).split(" ")), f(a, n, t));
  }
  function h(e, n, r) {
    return y(e, t, t, n, r);
  }
  var C = [],
    w = [],
    S = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        w.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        w.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = S), (Modernizr = new Modernizr());
  var _ = n.documentElement,
    x = "svg" === _.nodeName.toLowerCase(),
    b = S._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
  (S._prefixes = b),
    Modernizr.addTest("csspositionsticky", function () {
      var e = "position:",
        n = "sticky",
        t = i("a"),
        r = t.style;
      return (
        (r.cssText = e + b.join(n + ";" + e).slice(0, -e.length)),
        -1 !== r.position.indexOf(n)
      );
    });
  var T = "Moz O ms Webkit",
    P = S._config.usePrefixes ? T.split(" ") : [];
  S._cssomPrefixes = P;
  var z = S._config.usePrefixes ? T.toLowerCase().split(" ") : [];
  S._domPrefixes = z;
  var E = { elem: i("modernizr") };
  Modernizr._q.push(function () {
    delete E.elem;
  });
  var N = { style: E.elem.style };
  Modernizr._q.unshift(function () {
    delete N.style;
  }),
    (S.testAllProps = y),
    (S.testAllProps = h),
    Modernizr.addTest("cssanimations", h("animationName", "a", !0)),
    Modernizr.addTest("csstransforms", function () {
      return (
        -1 === navigator.userAgent.indexOf("Android 2.") &&
        h("transform", "scale(1)", !0)
      );
    }),
    Modernizr.addTest("csstransitions", h("transition", "all", !0)),
    Modernizr.addTest("overflowscrolling", h("overflowScrolling", "touch", !0)),
    s(),
    o(C),
    delete S.addTest,
    delete S.addAsyncTest;
  for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
  e.Modernizr = Modernizr;
})(window, document);
