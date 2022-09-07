/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/web-tracing@10.5.1/dist/index.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(
        ((e =
          'undefined' != typeof globalThis
            ? globalThis
            : e || self).webtracing = {})
      )
})(this, function (e) {
  'use strict'
  function t(t, e) {
    var r,
      n = Object.keys(t)
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
        n.push.apply(n, r)),
      n
    )
  }
  function a(n) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {}
      e % 2
        ? t(Object(o), !0).forEach(function (e) {
            var t, r
            ;(t = n),
              (e = o[(r = e)]),
              r in t
                ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[r] = e)
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
        : t(Object(o)).forEach(function (e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
          })
    }
    return n
  }
  function n(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function')
  }
  function o(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r]
      ;(n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
    }
  }
  function r(e, t, r) {
    return (
      t && o(e.prototype, t),
      r && o(e, r),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    )
  }
  function i(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return c(e)
      })(e) ||
      (function (e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e)
      })(e) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return c(e, t)
          var r = Object.prototype.toString.call(e).slice(8, -1)
          return 'Map' ===
            (r = 'Object' === r && e.constructor ? e.constructor.name : r) ||
            'Set' === r
            ? Array.from(e)
            : 'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? c(e, t)
            : void 0
        }
      })(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function c(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
    return n
  }
  function d(e, t, r) {
    var n = 2 < arguments.length && void 0 !== r ? r : '0',
      o = String(e)
    if (o.length < t) {
      for (var a = o, i = 0; i < t - o.length; i += 1) a = n + a
      return a
    }
    return o
  }
  function s() {
    for (
      var e = new Date(),
        t = parseInt(
          ''
            .concat(e.getFullYear())
            .concat(d(e.getMonth() + 1, 2))
            .concat(d(e.getDate(), 2)),
          10
        ).toString(16),
        e = parseInt(
          ''
            .concat(d(e.getHours(), 2))
            .concat(d(e.getMinutes(), 2))
            .concat(d(e.getSeconds(), 2))
            .concat(d(e.getMilliseconds(), 3)),
          10
        ).toString(16),
        r = t + e.length + e;
      r.length < 32;

    )
      r += Math.floor(16 * Math.random()).toString(16)
    return ''
      .concat(r.slice(0, 8), '-')
      .concat(r.slice(8, 16), '-')
      .concat(r.slice(16))
  }
  function u(e) {
    e = document.cookie.match(new RegExp(''.concat(e, '=([^;]+)(;|$)')))
    return e ? e[1] : void 0
  }
  var f = navigator.sendBeacon
      ? function (e, t) {
          t && navigator.sendBeacon(e, JSON.stringify(t))
        }
      : function (e, t) {
          new Image().src = ''
            .concat(e, '?v=')
            .concat(encodeURIComponent(JSON.stringify(t)))
        },
    l =
      Array.prototype.map ||
      function (e) {
        for (var t = [], r = 0; r < this.length; r += 1)
          t.push(e(this[r], r, this))
        return t
      }
  function p(e, t) {
    return l.call(e, t)
  }
  var v =
    Array.prototype.filter ||
    function (e) {
      for (var t = [], r = 0; r < this.length; r += 1)
        e(this[r], r, this) && t.push(this[r])
      return t
    }
  var m =
      window.requestIdleCallback ||
      window.requestAnimationFrame ||
      function (e) {
        return setTimeout(e, 17)
      },
    h = '_warden_device_id',
    g = '_warden_session_id',
    w = 5,
    y = 5e3,
    b = window.screen,
    E = document.documentElement,
    S = E.clientWidth,
    T = E.clientHeight,
    C = b.width,
    O = b.height,
    I = b.colorDepth,
    E = b.pixelDepth,
    b = u(h)
  b ||
    ((b = 't_'.concat(s())),
    (document.cookie = ''.concat(h, '=').concat(b, ';path=/;')))
  C = {
    clientHeight: T,
    clientWidth: S,
    colorDepth: I,
    pixelDepth: E,
    deviceId: b,
    screenWidth: C,
    screenHeight: O,
    vendor: navigator.vendor,
    platform: navigator.platform,
  }
  function A() {
    var e = u(g) || 's_'.concat(s()),
      t = new Date(Date.now() + 18e5)
    return (
      (document.cookie = ''
        .concat(g, '=')
        .concat(e, ';path=/;max-age=1800;expires=')
        .concat(t.toUTCString())),
      e
    )
  }
  A()
  var N = s(),
    O = u(g) || A(),
    P = '',
    k = [],
    x = null,
    L = a(a({}, C), {}, { pageId: N, sessionId: O, sdkVersion: '10.5.1' })
  function D(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
    ;(k = k.concat(e)),
      A(),
      clearTimeout(x),
      k.length >= w || t
        ? U()
        : (x = setTimeout(function () {
            U()
          }, y))
  }
  function U() {
    var e, t
    k.length &&
      ((e = k.slice(0, w)),
      (k = k.slice(w)),
      (t = Date.now()),
      f(P, {
        baseInfo: a(a({}, L), {}, { sendTime: t }),
        eventInfo: p(e, function (e) {
          if (
            ((e.sendTime = t),
            'click' === e.eventType ||
              'scroll' === e.eventType ||
              'submit' === e.eventType ||
              'change' === e.eventType)
          )
            return (e.type = 'mix'), e
          if ('performance' !== e.eventType) return (e.type = e.eventType), e
          switch (e.eventId) {
            case 'resource':
              e.type = 'resourcePerformance'
              break
            case 'page':
              e.type = 'pagePerformance'
              break
            case 'server':
              e.type = 'serverPerformance'
          }
          return e
        }),
      }),
      k.length && m(U))
  }
  var j = {
      init: function () {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.appName,
          r = e.appCode,
          n = e.ext
        ;(P = e.requestUrl), (L.appName = t), (L.appCode = r), (L.ext = n)
      },
      emit: D,
      pageId: N,
      setCustomerId: function (e) {
        L.customerId = e
      },
      setUserUuid: function (e) {
        L.userUuid = e
      },
    },
    B = window.location.href,
    M = window.history.length
  function q() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.url,
      r = void 0 === t ? window.location.href : t,
      t = e.referer,
      n = void 0 === t ? B : t,
      t = e.actions,
      o = e.params,
      a = void 0 === t ? '' : t
    !a &&
      window.history.length < 50 &&
      ((a = M === window.history.length ? 'back_forward' : 'navigation'),
      (M = window.history.length)),
      setTimeout(
        function () {
          D({
            eventType: 'pv',
            eventId: N,
            url: r,
            referer: n,
            params: o,
            title: e.title || document.title,
            action: a,
            triggerTime: Date.now(),
          })
        },
        e.title ? 0 : 17
      ),
      (B = r),
      (M = window.history.length)
  }
  var R = {
    init: function () {
      var n,
        o,
        a,
        e = (r =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {})
          .pvCore,
        t = r.pvHashtag,
        r = document.referrer
      e &&
        ((n = !1),
        q({ url: B, referer: r }),
        window.history.pushState &&
          ((o = window.history.pushState.bind(window.history)),
          (window.history.pushState = function (e, t, r) {
            n = !1
            r = o(e, t, r)
            return q({ actions: 'navigation' }), r
          }),
          (a = window.history.replaceState.bind(window.history)),
          (window.history.replaceState = function (e, t, r) {
            n = !1
            r = a(e, t, r)
            return q({ actions: 'navigation' }), r
          }),
          window.addEventListener('popstate', function () {
            if ('' !== window.location.hash) {
              var e = 0 < B.indexOf('#') ? B.slice(0, B.indexOf('#')) : B
              if (
                window.location.href.slice(
                  0,
                  window.location.href.indexOf('#')
                ) === e &&
                !t
              )
                return
            }
            ;(n = !0), q()
          })),
        window.addEventListener('hashchange', function () {
          t && !n && q(), (n = !1)
        }))
    },
    tracePageView: q,
  }
  function _(e) {
    D(
      a(
        a({}, e),
        {},
        {
          eventType: 'error',
          url: window.location.href,
          triggerTime: Date.now(),
        }
      )
    )
  }
  function H(e) {
    var t = e.stack,
      r = void 0 === t ? '' : t,
      t = e.message,
      e = void 0 === t ? '' : t,
      t = { errMessage: e, errStack: r }
    if (r) {
      var n = /^\s*at\s*([^(]+)\s*\((.+?):(\d+):(\d+)\)$/,
        o = /^\s*([^@]*)@(.+?):(\d+):(\d+)$/,
        r = r.replace(new RegExp('^[\\w\\s:]*'.concat(e, '\n')), ''),
        r =
          p(
            ((e = r.split('\n')),
            (r = function (e) {
              return e
            }),
            v.call(e, r)),
            function (e) {
              var t = e.match(n)
              if (t) return { src: t[2], line: t[3], col: t[4] }
              e = e.match(o)
              return e ? { src: e[2], line: e[3], col: e[4] } : {}
            }
          )[0] || {}
      return a(a({}, t), r)
    }
    return t
  }
  function F(e) {
    if (e instanceof Error) {
      var t = e.message,
        r = e.stack,
        n = e.lineNumber,
        o = e.fileName,
        a = e.columnNumber
      return o ? { errMessage: t, errStack: r, line: n, col: a, src: o } : H(e)
    }
    return e.message ? H(e) : 'string' == typeof e ? { errMessage: e } : {}
  }
  function V(e) {
    var t = e.target
    if ('unhandledrejection' === e.type)
      return a({ eventId: 'code' }, F(e.reason))
    if (1 === t.nodeType) {
      var r = { eventId: t.nodeName }
      return (
        'link' === t.nodeName.toLowerCase()
          ? (r.src = t.href)
          : (r.src = t.currentSrc || t.src),
        r
      )
    }
    if (e.error) {
      r = e.error
      return (
        (r.fileName = r.filename || e.filename),
        (r.columnNumber = r.colno || e.colno),
        (r.lineNumber = r.lineno || e.lineno),
        a({ eventId: 'code' }, F(r))
      )
    }
    return {
      eventId: 'code',
      line: window.event.errorLine,
      col: window.event.errorCharacter,
      message: window.event.errorMessage,
      src: window.event.errorUrl,
    }
  }
  var $ = {
      init: function (e) {
        var n
        e.errorCore &&
          (window.addEventListener(
            'error',
            function (e) {
              _(V(e))
            },
            !0
          ),
          window.addEventListener('unhandledrejection', function (e) {
            _(V(e))
          }),
          (n = console.error),
          (console.error = function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r]
            t.forEach(function (e) {
              _(a({ eventId: 'code' }, F(e)))
            }),
              n.apply(console, t)
          }))
      },
      traceError: function (e, t) {
        return (
          (e = a(
            { eventId: e, errMessage: t },
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
          )),
          (t = e.params) && (e.params = t),
          _(e)
        )
      },
    },
    z = {
      performance: !!window.performance,
      getEntriesByType: !(!window.performance || !performance.getEntriesByType),
      PerformanceObserver: 'PerformanceObserver' in window,
      MutationObserver: 'MutationObserver' in window,
      PerformanceNavigationTiming: 'PerformanceNavigationTiming' in window,
    },
    W = {
      initiatorType: '',
      transferSize: 0,
      encodedBodySize: 0,
      decodedBodySize: 0,
      duration: 0,
      redirectStart: 0,
      redirectEnd: 0,
      startTime: 0,
      fetchStart: 0,
      domainLookupStart: 0,
      domainLookupEnd: 0,
      connectStart: 0,
      connectEnd: 0,
      requestStart: 0,
      responseStart: 0,
      responseEnd: 0,
      workerStart: 0,
    }
  function X(r) {
    return (
      Object.keys(r).forEach(function (e) {
        var t = r[e]
        'number' == typeof t &&
          (r[e] = 0 === t ? void 0 : parseFloat(t.toFixed(2)))
      }),
      r
    )
  }
  function G(e) {
    var n = ['img', 'script', 'link', 'audio', 'video', 'css'],
      e = e.getEntriesByType('resource'),
      o = []
    return (
      e.forEach(function (t) {
        var r,
          e = t.initiatorType,
          e = void 0 === e ? '' : e
        n.indexOf(e.toLowerCase()) < 0 ||
          ((r = {}),
          Object.keys(W).forEach(function (e) {
            r[e] = t[e]
          }),
          o.push(
            X(
              a(
                a({}, r),
                {},
                {
                  eventType: 'performance',
                  eventId: 'resource',
                  src: t.name,
                  triggerTime: Date.now(),
                  url: window.location.href,
                }
              )
            )
          ))
      }),
      o.length && D(o),
      o
    )
  }
  function J() {
    var o = ['img', 'script', 'link']
    new MutationObserver(function (t) {
      for (var e = 0; e < t.length; e += 1)
        !(function (e) {
          var r = Date.now(),
            e = t[e].addedNodes,
            n = []
          ;(void 0 === e ? [] : e).forEach(function (t) {
            var e = t.nodeName
            ;-1 !== o.indexOf(e.toLowerCase()) &&
              t.addEventListener('load', function () {
                var e = Date.now()
                n.push(
                  X({
                    eventType: 'performance',
                    eventId: 'resource',
                    src: t.src || t.href,
                    duration: e - r,
                    triggerTime: Date.now(),
                    url: window.location.href,
                  })
                )
              })
          }),
            D(n)
        })(e)
    }).observe(window.document, { subtree: !0, childList: !0 })
  }
  function Y() {
    z.PerformanceObserver
      ? new PerformanceObserver(G).observe({ entryTypes: ['resource'] })
      : z.MutationObserver && J()
  }
  function K() {
    G(window.performance), Y()
  }
  function Q() {
    var e,
      t = {},
      r = window.performance,
      n = r.timing
    ;(t.fmp = 0),
      z.getEntriesByType &&
        ((e = r.getEntriesByType('paint')).length &&
          (t.fmp = e[e.length - 1].startTime),
        !z.PerformanceNavigationTiming ||
          ((r = r.getEntriesByType('navigation')[0]) && (n = r))),
      t.fmp && z.PerformanceNavigationTiming && (t.fmp -= n.fetchStart),
      (t.tti = n.domInteractive - n.fetchStart),
      (t.ready = n.domContentLoadedEventEnd - n.fetchStart),
      (t.loadon = n.loadEventStart - n.fetchStart),
      (t.firstbyte = n.responseStart - n.domainLookupStart),
      (t.dns = n.domainLookupEnd - n.domainLookupStart),
      (t.appcache = n.domainLookupStart - n.fetchStart),
      (t.tcp = n.connectEnd - n.connectStart),
      (t.ttfb = n.responseStart - n.requestStart),
      (t.trans = n.responseEnd - n.responseStart),
      (t.dom = n.domInteractive - n.responseEnd),
      (t.res = n.loadEventStart - n.domContentLoadedEventEnd),
      (t.ssllink = n.connectEnd - n.secureConnectionStart),
      (t.redirect = n.redirectEnd - n.redirectStart),
      (t.unloadTime = n.unloadEventEnd - n.unloadEventStart),
      D(
        X(
          a(
            a({}, t),
            {},
            {
              eventType: 'performance',
              eventId: 'page',
              url: window.location.href,
            }
          )
        )
      )
  }
  var Z = {
      init: function (e) {
        var t = e.performanceFirstResource,
          r = e.performanceCore
        ;(t || r) &&
          ('complete' === document.readyState
            ? (z.performance && t && Q(), z.getEntriesByType && r && K())
            : window.addEventListener('load', function () {
                z.performance && t && Q(), z.getEntriesByType && r && K()
              }))
      },
      tracePerformance: function (e, t) {
        D(
          X(
            a(
              a({ triggerTime: Date.now(), url: window.location.href }, t),
              {},
              { eventId: e, eventType: 'performance' }
            )
          )
        )
      },
    },
    ee = r(function e() {
      var t = this,
        r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      n(this, e)
      ;['src', 'method', 'duration', 'responseStatus'].forEach(function (e) {
        t[e] = r[e] || null
      })
    })
  var te = {
      init: function (e) {
        var i,
          c,
          n,
          t,
          d,
          s,
          u,
          r,
          o = e.performanceServer,
          a = e.errorServer
        ;(o || a) &&
          ((i = o),
          (c = a),
          (e = XMLHttpRequest.prototype),
          (n = e.open),
          (t = e.send),
          (d = new ee()),
          (XMLHttpRequest.prototype.open = function (e, t, r) {
            return (d.requestMethod = e), (d.src = t), n.call(this, e, t, r)
          }),
          (XMLHttpRequest.prototype.send = function (o) {
            var a = this
            return (
              this.addEventListener('readystatechange', function () {
                var e = a.readyState,
                  t = a.status,
                  r = a.responseURL,
                  n = void 0 === r ? d.src : r,
                  r = a.responseText
                4 === e &&
                  (200 === t || 304 === t
                    ? i &&
                      Z.tracePerformance('server', {
                        src: n,
                        responseStatus: t,
                        duration: Date.now() - d.triggerTime,
                        params: o || void 0,
                      })
                    : c &&
                      $.traceError('server', r, {
                        src: n,
                        responseStatus: t,
                        params: o || void 0,
                      }))
              }),
              (d.triggerTime = Date.now()),
              t.call(this, o)
            )
          }),
          (s = o),
          (u = a),
          (r = window.fetch) &&
            (window.fetch = function (t) {
              var n =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                o = Date.now(),
                e = n.method,
                a = void 0 === e ? 'GET' : e,
                e = r(t, n)
              return (
                e.then(
                  function (e) {
                    var t = e.url,
                      r = e.status,
                      e = e.statusText
                    200 === r || 304 === r
                      ? s &&
                        Z.tracePerformance('server', {
                          src: t,
                          duration: Date.now() - o,
                          responseStatus: r,
                          params: 'POST' === a.toUpperCase() ? n.body : void 0,
                        })
                      : u &&
                        $.traceError('server', e, {
                          src: t,
                          responseStatus: r,
                          params: 'POST' === a.toUpperCase() ? n.body : void 0,
                        })
                  },
                  function (e) {
                    $.traceError('server', e.message, { src: t })
                  }
                ),
                e
              )
            }))
      },
    },
    re = r(function e() {
      var t = this,
        r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      n(this, e)
      ;[
        'eventType',
        'eventId',
        'url',
        'referer',
        'action',
        'params',
        'millisecond',
      ].forEach(function (e) {
        t[e] = r[e] || null
      })
    }),
    ne = r(function e() {
      var t = this,
        r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      n(this, e)
      ;['eventType', 'eventId', 'url', 'params', 'title', 'x', 'y'].forEach(
        function (e) {
          t[e] = r[e] || null
        }
      )
    })
  function oe(e) {
    if (0 < e.length) {
      var t = ['em', 'b', 'strong', 'span', 'img', 'i', 'code']
      return (
        e.filter(function (e) {
          e = e.tagName
          return 0 <= t.indexOf(e.toLowerCase())
        }).length === e.length
      )
    }
    return !0
  }
  function ae() {
    document.addEventListener(
      'click',
      function (e) {
        var t,
          r = new ne({ eventType: 'click' }),
          n = e.path,
          o = (n =
            void 0 === n
              ? e.target
                ? (function (e, t) {
                    var r = 1 < arguments.length && void 0 !== t ? t : {}
                    if (!e) return []
                    for (
                      var t = r.includeSelf,
                        n = void 0 === (r = r.order) ? 'asc' : r,
                        o = void 0 === t || t ? e : e.parentElement,
                        a = [];
                      o;

                    )
                      (a = 'asc' === n ? a.concat(o) : [o].concat(a)),
                        (o = o.parentElement)
                    return a
                  })(e.target)
                : []
              : n).find(function (e) {
            return (
              e.hasAttribute &&
              (e.hasAttribute('data-warden-container') ||
                e.hasAttribute('data-warden-event-id') ||
                e.hasAttribute('data-warden-title'))
            )
          })
        o &&
          ((r.title = (function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = ce(e)
            if (t) return t
            var r = e.parent
            for (
              ;
              r &&
              r !== document.body &&
              !r.hasAttribute('data-warden-container');

            )
              r = r.parent
            t = ce(r)
            if (t) return t
            t = e.tagName
            return (
              e.hasChildNodes() && 'svg' !== t.toLowerCase()
                ? function (e) {
                    var t = e.tagName,
                      r = e.textContent
                    if ('A' === t)
                      return oe(i(e.children))
                        ? r
                        : e.getAttribute('href') || null
                    if ('BUTTON' !== t)
                      return 0 <
                        i(e.children).filter(function () {
                          return e.hasChildNodes()
                        }).length
                        ? null
                        : r
                    var n = e.getAttribute('name'),
                      t = oe(i(e.children))
                    return n || t ? r : e.getAttribute('href') || null
                  }
                : function (e) {
                    var t = e.tagName,
                      r = e.textContent
                    if ('IMG' === t) return e.getAttribute('alt') || null
                    if ('svg' === t) {
                      e = i(e.children).find(function (e) {
                        return 'use' === e.tagName
                      })
                      if (e) return e.getAttribute('xlink:href') || null
                    }
                    return r
                  }
            )(e)
          })(o)),
          (r.eventId = (function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = ie(e, 'data-warden-event-id')
            if (t) return t.getAttribute('data-warden-event-id')
            t = ie(e, 'title')
            if (t) return t.getAttribute('title')
            t = ie(e, 'data-warden-container')
            if (t) {
              if (
                t.getAttribute('data-warden-event-id') ||
                t.getAttribute('title')
              )
                return (
                  t.getAttribute('data-warden-event-id') ||
                  t.getAttribute('title')
                )
              t = t.getAttribute('data-warden-container')
              if ('string' == typeof t && t) return t
            }
            return e[0].tagName.toLowerCase()
          })(n)),
          (r.params = (function () {
            var r,
              e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n = /^data-warden-/
            try {
              e.forEach(function (e, t) {
                e = (e && e.attributes && Array.from(e.attributes)) || []
                if (
                  e.find(function (e) {
                    return e.nodeName.match(n)
                      ? e.nodeName.match(n)
                      : -1 !== e.nodeName.indexOf('data-warden-container')
                  })
                )
                  throw ((r = t), Error())
              })
            } catch (e) {}
            if (r < 0) return {}
            var e = e[r],
              e = Array.from(e.attributes) || [],
              o = {}
            return (
              e.forEach(function (e) {
                var t
                e.nodeName.indexOf('data-warden') < 0 ||
                  ((t = e.nodeName.replace(n, '')), (o[t] = e.nodeValue))
              }),
              ['container', 'title', 'event-id'].forEach(function (e) {
                delete o[e]
              }),
              o
            )
          })(n)),
          (r.elementPath = (function e(t, r) {
            var n = 1 < arguments.length && void 0 !== r ? r : ''
            if (!t) return n
            var o = t.parentElement,
              a = 0,
              i = t.id,
              c = t.tagName.toLowerCase(),
              r = n ? '>'.concat(n) : '',
              n = a ? '.'.concat(a) : ''
            return o &&
              o !== window &&
              o !== document.documentElement &&
              o !== document.body
              ? i
                ? '#'.concat(i).concat(r)
                : (1 < o.children.length &&
                    (a = Array.prototype.indexOf.call(o.children, t)),
                  e(o, ''.concat(c).concat(n).concat(r)))
              : ''.concat(c).concat(r)
          })(o).slice(-128)),
          (n = (t = e.target.getBoundingClientRect()).top),
          (o = t.left),
          (t = (e = document.documentElement).scrollTop),
          (e = e.scrollLeft),
          (t = n + t),
          (r.x = o + e),
          (r.y = t),
          (r.triggerTime = Date.now()),
          (r.url = window.location.href),
          D(r))
      },
      !0
    )
  }
  function ie(e, t) {
    return e.find(function (e) {
      return e.hasAttribute && e.hasAttribute(t)
    })
  }
  function ce(e) {
    return e
      ? e.hasAttribute('data-warden-title')
        ? e.getAttribute('data-warden-title')
        : e.title
      : null
  }
  function de() {
    var e = {
      requestUrl: '',
      appName: '',
      appCode: '',
      appVersion: '',
      ext: '',
      debug: !1,
      pvCore: !1,
      pvHashtag: !1,
      performanceCore: !1,
      performanceFirstResource: !1,
      performanceServer: !1,
      errorCore: !1,
      errorServer: !1,
      eventCore: !1,
      eventUnload: !1,
    }
    le(e, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}),
      j.init(e),
      ue.init(e),
      R.init(e),
      te.init(e),
      $.init(e),
      Z.init(e)
  }
  function se(e) {
    de(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}),
      e.prototype
        ? (e.prototype.$trace = a({}, fe))
        : (e.config.globalProperties.$trace = a({}, fe))
  }
  var ue = {
      init: function (e) {
        var t,
          r = e.eventCore,
          e = e.eventUnload
        ;(r || e) &&
          (r && ae(),
          (e = e),
          (t = new re({ eventType: 'dwell' })),
          window.addEventListener(
            'load',
            function () {
              t.entryTime = Date.now()
            },
            !0
          ),
          e &&
            window.addEventListener(
              'beforeunload',
              function () {
                ;(t.eventId = s()),
                  (t.url = window.location.href),
                  (t.referer = document.referrer),
                  (t.triggerTime = Date.now()),
                  (t.millisecond = Date.now() - t.entryTime)
                var e = performance.navigation.type
                ;(t.operateAction =
                  {
                    0: 'navigate',
                    1: 'reload',
                    2: 'back_forward',
                    255: 'reserved',
                  }[e] || null),
                  D(t, !0)
              },
              !1
            ))
      },
      traceCustomEvent: function (e, t) {
        D({
          eventId: e,
          title: t,
          params:
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
          eventType: 'custom',
          triggerTime: Date.now(),
        })
      },
    },
    fe = {
      setCustomerId: j.setCustomerId,
      setUserUuid: j.setUserUuid,
      traceError: $.traceError,
      tracePerformance: Z.tracePerformance,
      traceCustomEvent: ue.traceCustomEvent,
      tracePageView: R.tracePageView,
    },
    le = function (e, t) {
      var r = t.requestUrl,
        n = t.appName,
        o = t.appCode,
        a = t.appVersion,
        i = t.ext,
        c = t.debug,
        d = t.pv,
        s = void 0 === d ? {} : d,
        u = t.performance,
        d = void 0 === u ? {} : u,
        u = t.error,
        u = void 0 === u ? {} : u,
        t = t.event,
        t = void 0 === t ? {} : t
      if (!r) throw Error('请传入requestUrl参数')
      if (!n) throw Error('请传入appName参数')
      ;(e.requestUrl = r),
        (e.appName = n),
        (e.appCode = o),
        (e.appVersion = a),
        (e.ext = i),
        (e.debug = c),
        'boolean' == typeof s
          ? (e.pvCore = e.pvHashtag = s)
          : ((e.pvCore = Boolean(s.core)), (e.pvHashtag = Boolean(s.server))),
        'boolean' == typeof d
          ? (e.performanceCore =
              e.performanceFirstResource =
              e.performanceServer =
                d)
          : ((e.performanceCore = Boolean(d.core)),
            (e.performanceFirstResource = Boolean(d.firstResource)),
            (e.performanceServer = Boolean(d.server))),
        'boolean' == typeof u
          ? (e.errorCore = e.errorServer = u)
          : ((e.errorCore = Boolean(u.core)),
            (e.errorServer = Boolean(u.server))),
        'boolean' == typeof t
          ? (e.eventCore = e.eventUnload = t)
          : ((e.eventCore = Boolean(t.core)),
            (e.eventUnload = Boolean(t.unload)))
    },
    O = a({ install: se, init: de }, fe)
  ;(e.default = O),
    (e.init = de),
    (e.install = se),
    (e.methods = fe),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
