var __awaiter = this && this.__awaiter || function(e, s, a, u) {
    return new (a = a || Promise)(function(i, t) {
        function n(e) {
            try {
                o(u.next(e))
            } catch (e) {
                t(e)
            }
        }
        function r(e) {
            try {
                o(u.throw(e))
            } catch (e) {
                t(e)
            }
        }
        function o(e) {
            var t;
            e.done ? i(e.value) : ((t = e.value)instanceof a ? t : new a(function(e) {
                e(t)
            }
            )).then(n, r)
        }
        o((u = u.apply(e, s || [])).next())
    }
    )
}
  , __generator = this && this.__generator || function(n, r) {
    var o, s, a, u = {
        label: 0,
        sent: function() {
            if (1 & a[0])
                throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    }, l = {
        next: e(0),
        throw: e(1),
        return: e(2)
    };
    return "function" == typeof Symbol && (l[Symbol.iterator] = function() {
        return this
    }
    ),
    l;
    function e(i) {
        return function(e) {
            var t = [i, e];
            if (o)
                throw new TypeError("Generator is already executing.");
            for (; u = l && t[l = 0] ? 0 : u; )
                try {
                    if (o = 1,
                    s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s),
                    0) : s.next) && !(a = a.call(s, t[1])).done)
                        return a;
                    switch (s = 0,
                    (t = a ? [2 & t[0], a.value] : t)[0]) {
                    case 0:
                    case 1:
                        a = t;
                        break;
                    case 4:
                        return u.label++,
                        {
                            value: t[1],
                            done: !1
                        };
                    case 5:
                        u.label++,
                        s = t[1],
                        t = [0];
                        continue;
                    case 7:
                        t = u.ops.pop(),
                        u.trys.pop();
                        continue;
                    default:
                        if (!(a = 0 < (a = u.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                            u = 0;
                            continue
                        }
                        if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3]))
                            u.label = t[1];
                        else if (6 === t[0] && u.label < a[1])
                            u.label = a[1],
                            a = t;
                        else {
                            if (!(a && u.label < a[2])) {
                                a[2] && u.ops.pop(),
                                u.trys.pop();
                                continue
                            }
                            u.label = a[2],
                            u.ops.push(t)
                        }
                    }
                    t = r.call(n, u)
                } catch (e) {
                    t = [6, e],
                    s = 0
                } finally {
                    o = a = 0
                }
            if (5 & t[0])
                throw t[1];
            return {
                value: t[0] ? t[1] : void 0,
                done: !0
            }
        }
    }
}
;
function GetQueueIdWhenRedirectedToTarget() {
    var e = window;
    return e.queueViewModel && e.queueViewModel.getIsRedirectedToTarget ? e.queueViewModel.getIsRedirectedToTarget() ? e.queueViewModel.getQueueId() : void 0 : null
}
(e => {
    function t() {}
    function i() {}
    function n(e, t) {
        this.eventId = e,
        this.customerId = t
    }
    e = (e = e.Queue || (e.Queue = {})).Helpers || (e.Helpers = {}),
    t.retry = function(n, e, r, o) {
        var s = 1;
        !function i() {
            return e(function(e, t) {
                t && s++ < n ? setTimeout(i, o(s, t)) : r(e, t)
            })
        }()
    }
    ,
    e.RetryHelper = t,
    i.isCookieEnabled = function() {
        if (navigator.cookieEnabled)
            return !0;
        document.cookie = "cookietest=1";
        var e = -1 != document.cookie.indexOf("cookietest=");
        return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",
        e
    }
    ,
    e.CookieHelper = i,
    n.prototype.logAjaxCallError = function(e, t, i, n, r, o) {
        void 0 === o && (o = null),
        n = {
            AjaxErrorStatus: n,
            AjaxErrorThrown: r,
            HttpStatus: i.status
        },
        window.logger.Error({
            Page: t,
            Message: e,
            ResponseText: i.responseText,
            Ex: o
        }, 2075, this.eventId, this.customerId, "", n, i)
    }
    ,
    e.AjaxLogger = n,
    l.prototype.getUserId = function() {
        return this.userId || (this.userId = $("#queue-it_log").attr("data-userid")),
        this.userId
    }
    ,
    l.prototype.shouldLog = function(e) {
        return null === e || (0 !== e.status || 0 !== e.readyState) && 503 !== e.status && 504 !== e.status
    }
    ,
    l.prototype.Log = function(e, t) {
        if (this.shouldLog(t = void 0 === t ? null : t))
            try {
                var i, n, r, o, s, a;
                console.info(e.LogMessageInfo.Message + (e.LogMessageInfo.Ex ? e.LogMessageInfo.Ex.message : "")),
                (this.logContainer || (this.logContainer = $("#queue-it_log"),
                this.userId = this.logContainer.attr("data-userid"),
                this.proxyUrl = this.logContainer.attr("data-proxyurl"),
                this.assemblyVersion = this.logContainer.attr("data-assemblyversion"),
                this.proxyUrl)) && (i = {},
                e.LogMessageInfo.Ex && e.LogMessageInfo.Ex.stack && (i.StackTrace = e.LogMessageInfo.Ex.stack),
                e.LogMessageInfo.Ex && e.LogMessageInfo.Ex.message && (i.ErrorMessage = e.LogMessageInfo.Ex.message),
                e.LogMessageInfo.Message || (e.LogMessageInfo.Message = "Unexpected Error"),
                n = window.queueViewModel,
                !(r = e.CustomerId) && n && (r = n.customerId),
                !(o = e.EventId) && n && (o = n.eventId),
                !(s = e.QueueId) && n && n.queueId && (s = $.isFunction(n.queueId) ? n.queueId() : n.queueId),
                a = navigator ? navigator.userAgent : "",
                this.logToProxy({
                    Id: e.Id,
                    AssemblyVersion: this.assemblyVersion,
                    QueueId: s,
                    CustomerId: r,
                    EventId: o,
                    Message: e.LogMessageInfo.Message,
                    Page: e.LogMessageInfo.Page,
                    ResponseText: e.LogMessageInfo.ResponseText,
                    Level: e.Level,
                    Severity: e.Severity,
                    Exception: i,
                    UserId: this.userId,
                    Service: "JavaScript(queuefront)",
                    Url: window.location.href,
                    UserAgent: a,
                    PlatformInfo: window.getClientInfo(),
                    Timestamp: (new Date).toISOString(),
                    CustomInfo: e.CustomInfo
                }))
            } catch (e) {
                console.debug(e)
            }
    }
    ,
    l.prototype.Critical = function(e, t, i, n, r, o, s) {
        this.Log({
            Id: t += 3e4,
            LogMessageInfo: e,
            Severity: u[u.Critical],
            QueueId: r = void 0 === r ? "" : r,
            CustomerId: n = void 0 === n ? "" : n,
            EventId: i = void 0 === i ? "" : i,
            CustomInfo: o = void 0 === o ? null : o,
            Level: a[a.Fatal]
        }, s = void 0 === s ? null : s)
    }
    ,
    l.prototype.Error = function(e, t, i, n, r, o, s) {
        this.Log({
            Id: t += 3e4,
            LogMessageInfo: e,
            Severity: u[u.Error],
            QueueId: r = void 0 === r ? "" : r,
            CustomerId: n = void 0 === n ? "" : n,
            EventId: i = void 0 === i ? "" : i,
            CustomInfo: o = void 0 === o ? null : o,
            Level: a[a.Error]
        }, s = void 0 === s ? null : s)
    }
    ,
    l.prototype.Warning = function(e, t, i, n, r, o, s) {
        this.Log({
            Id: t += 3e4,
            LogMessageInfo: e,
            Severity: u[u.Warning],
            QueueId: r = void 0 === r ? "" : r,
            CustomerId: n = void 0 === n ? "" : n,
            EventId: i = void 0 === i ? "" : i,
            CustomInfo: o = void 0 === o ? null : o,
            Level: a[a.Warning]
        }, s = void 0 === s ? null : s)
    }
    ,
    l.prototype.Debug = function(e, t, i, n, r, o, s) {
        this.Log({
            Id: t += 2e4,
            LogMessageInfo: e,
            Severity: u[u.Debug],
            QueueId: r = void 0 === r ? "" : r,
            CustomerId: n = void 0 === n ? "" : n,
            EventId: i = void 0 === i ? "" : i,
            CustomInfo: o = void 0 === o ? null : o,
            Level: a[a.Debug]
        }, s = void 0 === s ? null : s)
    }
    ,
    l.prototype.Business = function(e, t, i, n, r, o, s) {
        this.Log({
            Id: t += 1e4,
            LogMessageInfo: e,
            Severity: u[u.Information],
            QueueId: r = void 0 === r ? "" : r,
            CustomerId: n = void 0 === n ? "" : n,
            EventId: i = void 0 === i ? "" : i,
            CustomInfo: o = void 0 === o ? null : o,
            Level: a[a.Information]
        }, s = void 0 === s ? null : s)
    }
    ,
    l.prototype.logToProxy = function(e) {
        try {
            var t = this.objectToQuery(e, "");
            $("head").append('<script type="text/javascript" src="' + this.proxyUrl + "?" + t + '"><\/script>')
        } catch (t) {
            window && window.console && "function" == typeof window.console.log && (console.log("Failed to log to datadog because of exception:\n" + t),
            console.log("Failed log data:", e))
        }
    }
    ,
    l.prototype.objectToQuery = function(e, t) {
        var i, n = "";
        for (i in e)
            e.hasOwnProperty(i) && e[i] && (n && (n += "&"),
            n += "object" == typeof e[i] ? this.objectToQuery(e[i], i) : t + i.substr(0, 1).toUpperCase() + i.substr(1) + "=" + encodeURIComponent(e[i]));
        return n
    }
    ;
    var a, u, o, r, s = l;
    function l() {
        var r = window.onerror
          , i = console.warn
          , o = this;
        console.warn = function(e) {
            var t;
            e && (t = (new Error).stack,
            e.toString().startsWith("JQMIGRATE") && o.Warning({
                Message: e,
                Page: window.location.href,
                Ex: {
                    message: e + ", url: '" + window.location,
                    name: "Warning",
                    stack: t
                }
            }, 2076),
            i) && "function" == typeof i && i.apply(window, arguments)
        }
        ,
        window.onerror = function(e, t, i, n) {
            e && "string" == typeof e && -1 < e.indexOf("_AutofillCallbackHandler") || ("Script error." === e && !t || o.Critical({
                Message: "Unhandled Exception in window.onerror",
                Ex: {
                    message: e + ", url: '" + t + "', line: " + i + ", col: " + n,
                    name: "UnhandledException"
                }
            }, null, null, null),
            r && "function" == typeof r && r.apply(window, arguments))
        }
    }
    function c() {}
    function h(e, t, i, n) {
        void 0 === i && (i = null),
        void 0 === n && (n = null);
        var r = this;
        this.handleActive = function() {
            r.initialFocusedElement = $(":focus");
            var e = $(r.modalContainerSelector).find(r.tabbableElements);
            r.keysPressed = r.resetKeysPressed(),
            r.setFocusOnLastElement(e),
            $(window).on("keydown", r.closeModalWithEscapeKey),
            $(window).on("keydown", {
                elements: e
            }, r.limitTabToModal),
            $(window).on("keyup", {
                elements: e
            }, r.registerFocusOnFirstAndLastElementInModal)
        }
        ,
        this.handleInactive = function() {
            $(r.initialFocusedElement).focus(),
            $(window).off("keydown", r.closeModalWithEscapeKey),
            $(window).off("keydown", r.limitTabToModal),
            $(window).off("keyup", r.registerFocusOnFirstAndLastElementInModal)
        }
        ,
        this.limitTabToModal = function(e) {
            if (e.keyCode !== o.Tab && e.keyCode !== o.Shift)
                return e.keyCode === o.Enter && e.target.className === r.modalCloseButtonClass ? void e.preventDefault() : void 0;
            r.keysPressed[e.keyCode] = !0,
            1 === e.data.elements.length && r.keysPressed[o.Tab] ? (e.preventDefault(),
            e.data.elements.first().focus()) : r.keysPressed[o.Tab] && r.keysPressed[o.Shift] && r.isFirstElement ? (e.preventDefault(),
            e.data.elements.last().focus()) : r.keysPressed[o.Tab] && !r.keysPressed[o.Shift] && r.isLastElement && (e.preventDefault(),
            e.data.elements.first().focus())
        }
        ,
        this.registerFocusOnFirstAndLastElementInModal = function(e) {
            e.keyCode !== o.Tab && e.keyCode !== o.Shift || (r.keysPressed[e.keyCode] = !1,
            e.data.elements.first().is(":focus") ? (r.isFirstElement = !0,
            r.isLastElement = !1) : e.data.elements.last().is(":focus") ? (r.isFirstElement = !1,
            r.isLastElement = !0) : (r.isFirstElement = !1,
            r.isLastElement = !1))
        }
        ,
        this.closeModalWithEscapeKey = function(e) {
            e.keyCode === o.Escape && r.isModalVisible(!1)
        }
        ,
        this.setFocusOnLastElement = function(e) {
            r.isFirstElement = !1,
            r.isLastElement = !0,
            setTimeout(function() {
                return e.last().focus()
            })
        }
        ,
        this.resetKeysPressed = function() {
            return {
                9: !1,
                16: !1
            }
        }
        ,
        this.isModalVisible = t,
        this.tabbableElements = null != i ? i : "input, [tabindex=0], button",
        this.modalContainerSelector = e,
        this.modalCloseButtonClass = null != n ? n : "btn-close",
        this.isModalVisible.subscribe(function(e) {
            return e ? r.handleActive() : r.handleInactive()
        })
    }
    e.Logger = s,
    (r = a = e.ErrorLevel || (e.ErrorLevel = {}))[r.Fatal = 1] = "Fatal",
    r[r.Error = 2] = "Error",
    r[r.Warning = 4] = "Warning",
    r[r.Information = 8] = "Information",
    r[r.Debug = 16] = "Debug",
    (r = u = e.ErrorSeverity || (e.ErrorSeverity = {}))[r.Critical = 1] = "Critical",
    r[r.Error = 2] = "Error",
    r[r.Warning = 4] = "Warning",
    r[r.Information = 8] = "Information",
    r[r.Debug = 16] = "Debug",
    c.isWebPushSupported = function() {
        return "serviceWorker"in navigator && "PushManager"in window
    }
    ,
    c.registerForPush = function(r) {
        return __awaiter(this, void 0, void 0, function() {
            var t, i, n;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    if (!this.isWebPushSupported())
                        return [3, 14];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 12, , 13]),
                    [4, navigator.serviceWorker.register("serviceWorker.js")];
                case 2:
                    return e.sent(),
                    [4, navigator.serviceWorker.ready];
                case 3:
                    t = e.sent(),
                    e.label = 4;
                case 4:
                    return e.trys.push([4, 6, , 11]),
                    [4, c.getSubscriptionObject(t, r)];
                case 5:
                    return [2, e.sent()];
                case 6:
                    return i = e.sent(),
                    [4, t.pushManager.getSubscription()];
                case 7:
                    return (n = e.sent()) ? [4, n.unsubscribe()] : [3, 10];
                case 8:
                    return e.sent(),
                    [4, c.getSubscriptionObject(t, r)];
                case 9:
                    return [2, e.sent()];
                case 10:
                    return console.log(i),
                    [3, 11];
                case 11:
                    return [3, 13];
                case 12:
                    return n = e.sent(),
                    console.log(n),
                    [3, 13];
                case 13:
                    return [3, 15];
                case 14:
                    console.log("Browser does not support Push Notification!"),
                    e.label = 15;
                case 15:
                    return [2, null]
                }
            })
        })
    }
    ,
    c.urlBase64ToUint8Array = function(e) {
        for (var e = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), t = window.atob(e), i = new Uint8Array(t.length), n = 0; n < t.length; ++n)
            i[n] = t.charCodeAt(n);
        return i
    }
    ,
    c.getSubscriptionObject = function(n, r) {
        return __awaiter(this, void 0, void 0, function() {
            var t, i;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, n.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: c.urlBase64ToUint8Array(r)
                    })];
                case 1:
                    return t = e.sent(),
                    i = JSON.parse(JSON.stringify(t)),
                    console.log(t),
                    [2, {
                        Endpoint: i.endpoint,
                        P256DH: i.keys.p256dh,
                        Auth: i.keys.auth,
                        PublicKey: r
                    }]
                }
            })
        })
    }
    ,
    e.PushSubscriptionManager = c,
    window.logger = new s,
    (r = o = e.KeyCode || (e.KeyCode = {}))[r.Tab = 9] = "Tab",
    r[r.Enter = 13] = "Enter",
    r[r.Shift = 16] = "Shift",
    r[r.Escape = 27] = "Escape",
    r[r.ArrowLeft = 37] = "ArrowLeft",
    r[r.ArrowUp = 38] = "ArrowUp",
    r[r.ArrowRight = 39] = "ArrowRight",
    r[r.ArrowDown = 40] = "ArrowDown",
    r[r.PageUp = 33] = "PageUp",
    r[r.PageDown = 34] = "PageDown",
    r[r.End = 35] = "End",
    r[r.Home = 36] = "Home",
    r[r.Alt = 18] = "Alt",
    h.focusTrapperArray = new Array,
    h.addFocusTrapper = function(e, t, i, n) {
        return void 0 === n && (n = null),
        h.focusTrapperArray.push(new h(e,t,i = void 0 === i ? null : i))
    }
    ,
    e.FocusTrapper = h
}
)(QueueIt = QueueIt || {}),
(e => {
    function t() {}
    e = e.Tools || (e.Tools = {}),
    t.prototype.getCookie = function(e) {
        if (2 == (e = ("; " + document.cookie).split("; " + e + "=")).length)
            return e.pop().split(";").shift()
    }
    ,
    e.CookieUtil = t
}
)(QueueIt = QueueIt || {}),
(e => {
    (e.Tools || (e.Tools = {})).HttpUtil = function() {
        var o = this;
        this.post = function(e, t, i, n, r) {
            r = null == r || !r,
            $.ajax({
                type: "POST",
                url: e,
                async: r,
                data: o.serialize(t),
                success: function(e) {
                    i(e)
                },
                error: function(e, t, i) {
                    n(e, t, i)
                },
                dataType: "json",
                contentType: "application/json"
            })
        }
        ,
        this.get = function(e, t, i) {
            $.ajax({
                type: "GET",
                url: e,
                success: function(e) {
                    t(e)
                },
                error: function(e) {
                    i(e)
                },
                dataType: "json",
                contentType: "application/json"
            })
        }
        ,
        this.serialize = function(e) {
            return JSON.stringify(e)
        }
    }
}
)(QueueIt = QueueIt || {}),
(e => {
    function t() {}
    e = e.Tools || (e.Tools = {}),
    t.prototype.padRight = function(e, t) {
        return this.pad(e, t, !1)
    }
    ,
    t.prototype.padLeft = function(e, t) {
        return this.pad(e, t, !0)
    }
    ,
    t.prototype.pad = function(e, t, i) {
        return void 0 === t ? e : i ? (e + t).slice(-e.length) : (t + e).substring(0, e.length)
    }
    ,
    e.StringUtil = t
}
)(QueueIt = QueueIt || {}),
(e => {
    var f, m, y;
    function t(e) {
        this.response = e
    }
    function i(e, t, i) {
        this.customerId = e,
        this.eventId = t,
        this.queuePathPrefix = i
    }
    e = e.Queue || (e.Queue = {}),
    t.prototype.isEnqueueTokenError = function() {
        return this.response.invalidQueueitEnqueueToken || this.response.missingCustomDataKey || this.response.customDataUniqueKeyViolation
    }
    ,
    t.prototype.getErrorCode = function() {
        return this.response.invalidQueueitEnqueueToken ? 9 : this.response.missingCustomDataKey ? 10 : this.response.customDataUniqueKeyViolation ? 11 : void 0
    }
    ,
    f = t,
    e.EnqueueError = f,
    e.EnqueueAjaxError = m = function(e) {
        this.ajaxError = e
    }
    ,
    e.EnqueueServerBusyError = y = function(e) {
        this.ajaxError = e
    }
    ,
    i.prototype.tryToEnqueue = function(i, n, r, o, s, a, u) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, $.ajax({
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json",
                        data: JSON.stringify({
                            challengeSessions: n,
                            layoutName: r,
                            customUrlParams: o,
                            targetUrl: s,
                            CustomDataEnqueue: a,
                            QueueitEnqueueToken: u,
                            Referrer: document.referrer
                        }),
                        url: i,
                        headers: {
                            "x-queueit-qpage-referral": document.referrer
                        }
                    })];
                case 1:
                    if ((t = e.sent()).serverIsBusy)
                        throw new y({
                            Message: "Server is busy",
                            AjaxErrorLog: null,
                            JqXHR: null
                        });
                    return [2, t]
                }
            })
        })
    }
    ,
    i.prototype.enqueue = function(a, u, l, c, h, d, p, g, e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, i, n, r, o, s = this;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    t = function(t) {
                        return polly().waitAndRetry([400, 800, 1300, 1900, 2600, 3400, 4300, 5300, 6400, 7600]).executeForPromise(function() {
                            return __awaiter(s, void 0, void 0, function() {
                                return __generator(this, function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return [4, this.tryToEnqueue(t, a, u, l, c, p, g)];
                                    case 1:
                                        return [2, e.sent()]
                                    }
                                })
                            })
                        })
                    }
                    ,
                    i = "".concat(this.queuePathPrefix, "/spa-api/queue/").concat(this.customerId, "/").concat(this.eventId, "/enqueue?cid=").concat(h || ""),
                    d && (i = "".concat(i, "&scv=").concat(d)),
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, t(i)];
                case 2:
                    return n = e.sent(),
                    [3, 4];
                case 3:
                    throw r = e.sent(),
                    (o = r)instanceof y ? r : new m({
                        Message: "Unable to enqueue",
                        AjaxErrorLog: {
                            HttpStatus: o.status,
                            AjaxErrorStatus: o.statusText,
                            AjaxErrorThrown: o.responseText
                        },
                        JqXHR: o
                    });
                case 4:
                    if (!n.challengeFailed) {
                        if (n.redirectUrl)
                            return [2, n];
                        if (n.queueId)
                            return [2, n]
                    }
                    throw new f(n)
                }
            })
        })
    }
    ,
    e.Enqueuer = i
}
)(QueueIt = QueueIt || {}),
(e => {
    function t(e, t) {
        var i = this;
        this.inQueueView = e,
        this.initialInqueueInfo = t,
        this.updateEmailBtnSelector = "#aUpdateEmail",
        this.btnDisabledClass = "btn-disabled",
        this.inQueueVM = e,
        this.inqueueInfo = t,
        this.queueNumberVisibleByLayout = e.layout.queueNumberVisible(),
        this.usersAheadVisibleByLayout = e.layout.usersInLineAheadOfYouVisible(),
        this.relativeTimeVisibleByLayout = e.layout.whichIsInVisible(),
        this.absoluteTimeVisibleByLayout = e.layout.expectedServiceTimeVisible(),
        this.dynamicMessageVisibleByLayout = e.layout.dynamicMessageVisible(),
        this.reminderFormVisibleByLayout = e.layout.reminderVisible(),
        this.connectionLost = ko.observable(!1),
        this.connectionLost.subscribe(function() {
            return i.connectionLostChange()
        }),
        this.javascriptDisabled = ko.observable(),
        this.javascriptDisabled.subscribe(function() {
            return i.javascriptDisabledChange()
        }),
        this.queuePaused = ko.observable(!1),
        this.queuePaused.subscribe(function() {
            return i.queuePausedChange()
        }),
        this.firstInLine = ko.observable(!1),
        this.firstInLine.subscribe(function() {
            return i.firstInLineChange()
        }),
        this.serviceSoon = ko.observable(!1),
        this.serviceSoon.subscribe(function() {
            return i.serviceSoonChange()
        }),
        this.redirectModal = this.inQueueVM.showConfirmRedirectDialog,
        this.redirectModal.subscribe(function() {
            return i.redirectModalChange()
        }),
        this.hideDynamicMessage = ko.observable(),
        this.hideDynamicMessage.subscribe(function() {
            return i.hideDynamicMessageChange()
        }),
        this.reminderEmailStatus = ko.observable(),
        this.reminderEmailStatus.subscribe(function() {
            return i.reminderEmailStatusChange()
        })
    }
    e = e.Queue || (e.Queue = {}),
    t.prototype.connectionLostChange = function() {
        this.inQueueVM.isRunning(!this.inQueueVM.isRunning())
    }
    ,
    t.prototype.javascriptDisabledChange = function() {
        $("#noscript").toggle(),
        $("#wrapper").toggle()
    }
    ,
    t.prototype.queuePausedChange = function() {
        this.redirectModal() && this.redirectModal(!1),
        this.inqueueInfo.layout.queueIsPausedVisible = !this.inqueueInfo.layout.queueIsPausedVisible,
        this.absoluteTimeVisibleByLayout && (this.inqueueInfo.layout.expectedServiceTimeVisible = !this.inqueueInfo.layout.expectedServiceTimeVisible),
        this.relativeTimeVisibleByLayout && (this.inqueueInfo.layout.whichIsInVisible = !this.inqueueInfo.layout.whichIsInVisible),
        this.inQueueVM.refresh(this.inqueueInfo)
    }
    ,
    t.prototype.firstInLineChange = function() {
        this.serviceSoon() && this.serviceSoon(!1),
        this.usersAheadVisibleByLayout && (this.inqueueInfo.layout.usersInLineAheadOfYouVisible = !this.inqueueInfo.layout.usersInLineAheadOfYouVisible),
        this.inqueueInfo.layout.firstInLineVisible = !this.inqueueInfo.layout.firstInLineVisible,
        this.inQueueVM.refresh(this.inqueueInfo)
    }
    ,
    t.prototype.serviceSoonChange = function() {
        this.absoluteTimeVisibleByLayout && (this.inqueueInfo.layout.expectedServiceTimeVisible = !this.inqueueInfo.layout.expectedServiceTimeVisible),
        this.relativeTimeVisibleByLayout && (this.inqueueInfo.layout.whichIsInVisible = !this.inqueueInfo.layout.whichIsInVisible),
        this.inQueueVM.refresh(this.inqueueInfo),
        this.serviceSoon() && this.inQueueVM.layout.servicedSoonVisible(!0)
    }
    ,
    t.prototype.redirectModalChange = function() {
        var e;
        this.redirectModal() && (e = new Date,
        this.inQueueVM.ticket.windowStartTime(e.getHours() + (e.getMinutes() < 10 ? ":0" : ":") + e.getMinutes()))
    }
    ,
    t.prototype.hideDynamicMessageChange = function() {
        this.dynamicMessageVisibleByLayout && (this.inqueueInfo.layout.dynamicMessageVisible = !this.inqueueInfo.layout.dynamicMessageVisible,
        this.inQueueVM.refresh(this.inqueueInfo))
    }
    ,
    t.prototype.reminderEmailStatusChange = function() {
        "success" == this.reminderEmailStatus() ? (this.inQueueVM.notifyEmailUpdateResult("We will send you an e-mail containing a link to your place in the queue, and another e-mail when it is time for you to return to the queue. E-mails may be delayed, moved to your spam folder, or lost due to reasons beyond our control, so we recommend that you check your status in the queue frequently.", "Success"),
        $(this.updateEmailBtnSelector).addClass(this.btnDisabledClass)) : ($(this.updateEmailBtnSelector).removeClass(this.btnDisabledClass),
        this.inQueueVM.notifyEmailUpdateResult("Error subscribing", "Error"))
    }
    ,
    t.prototype.hideReminderStatusMessage = function() {
        this.reminderEmailStatus(""),
        $("#divEmailStatusFrame").hide(),
        $(this.updateEmailBtnSelector).removeClass(this.btnDisabledClass)
    }
    ,
    t.prototype.simulateBeforeToQueueTransition = function() {
        $("#defaultCountdown").countdown("option", {
            until: 2
        }),
        $("#MainPart_pProgressbarBox_Holder_Larger").hide(),
        setTimeout(function() {
            $("#MainPart_pProgressbarBox_Holder_Larger").show()
        }, 5e3)
    }
    ,
    t.prototype.minimizeWindow = function() {
        $("#PreviewQueueStatesDiv").toggleClass("min")
    }
    ,
    e.PreviewQueueStateVM = t
}
)(QueueIt = QueueIt || {}),
(e => {
    var t;
    function i(e) {
        this.options = e,
        this.isActive = ko.observable(!1),
        this.logger = new t.Helpers.AjaxLogger(e.eventId,e.customerId),
        this.isBeforeOrIdle = e.isBeforeOrIdle,
        this.isPreview = e.isPreview,
        this.updateFraudProtectionInterval = 6e4,
        this.challengeSolveTimeoutInterval = 3e5,
        this.challengeRedirectUrls = new t.ChallengeRedirectUrls(this.options)
    }
    t = e.Queue || (e.Queue = {}),
    i.prototype.init = function(e) {
        void 0 === e && (e = !1),
        this.isPreview || (e && (this.updateFraudProtectionInterval = 6e5,
        this.challengeSolveTimeoutInterval = 6e5),
        this.setActive(),
        this.startFraudProtectionCheck())
    }
    ,
    i.prototype.setActive = function() {
        this.isActive(!0)
    }
    ,
    i.prototype.setInactive = function() {
        this.isActive(!1)
    }
    ,
    i.prototype.startFraudProtectionCheck = function() {
        this.isActive() && (this.updateFraudProtectionTimer(),
        this.updateChallengeSolveTimer())
    }
    ,
    i.prototype.updateFraudProtectionTimer = function() {
        var e = this;
        setTimeout(function() {
            e.getFraudProtectionStatus()
        }, this.updateFraudProtectionInterval)
    }
    ,
    i.prototype.updateChallengeSolveTimer = function() {
        var e = this;
        setTimeout(function() {
            e.challengeSolveTimeout()
        }, this.challengeSolveTimeoutInterval)
    }
    ,
    i.prototype.getFraudProtectionStatus = function() {
        var e, r = this;
        this.isActive() && (e = "".concat(this.options.queuePathPrefix, "/spa-api/fraudprotection/status?c=").concat(this.options.customerId, "&e=").concat(this.options.eventId, "&t=").concat(this.options.targetUrl, "&l=").concat(this.options.layout, "&cid=").concat(this.options.culture, "&").concat(this.options.customUrlParams),
        $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            url: e,
            success: function(e) {
                e && e.redirectUrl ? document.location.href = e.redirectUrl : (r.isInErrorState = !1,
                r.updateFraudProtectionInterval = 6e4,
                r.updateFraudProtectionTimer())
            },
            error: function(e, t, i) {
                r.isInErrorState = !0;
                var n = e.status + " status code received on ";
                r.isBeforeOrIdle ? n += "before/idle page" : n += "queue page",
                r.logger.logAjaxCallError("Error getting fraud protection status", "FraudProtection", e, t, i, {
                    message: n,
                    name: "FraudprotectionGetStatusError"
                }),
                !e || 503 !== e.status && 504 !== e.status || (r.updateFraudProtectionInterval *= 1.25,
                12e4 < r.updateFraudProtectionInterval && (r.updateFraudProtectionInterval = 12e4)),
                r.updateFraudProtectionTimer()
            }
        }))
    }
    ,
    i.prototype.challengeSolveTimeout = function() {
        this.isActive() && !this.isInErrorState && (document.location.href = this.challengeRedirectUrls.getTimeoutRedirectUrl())
    }
    ,
    t.FraudProtection = i
}
)(QueueIt = QueueIt || {}),
(e => {
    var d;
    function t(e, t, i, n) {
        void 0 === i && (i = "three-bar-loader-container"),
        void 0 === n && (n = "hidden"),
        this.options = e,
        this.userId = t,
        this.animationElementId = i,
        this.cssHiddenClass = n,
        this.challengeRunSequence = [],
        this.animationElement = null,
        this.hasInitializedChallengeRunners = !1,
        this.challengeVerifier = new d.ChallengeVerifier(e.customerId,e.eventId,e.challengeVerifyEndpoint),
        this.fraudProtection = new d.FraudProtection(this.options)
    }
    d = e.Queue || (e.Queue = {}),
    t.prototype.init = function() {
        var e = this.options.showInviteOnlyEmailVerificationChallenge || this.options.showAkamaiBotManagerHeaderVerificationChallenge;
        this.fraudProtection.init(e),
        this.initRunSequence()
    }
    ,
    t.prototype.initRunSequence = function() {
        for (var e = 0, t = this.options.challenges; e < t.length; e++) {
            var i = t[e];
            switch (i.name) {
            case d.ChallengeType.Recaptcha:
                this.challengeRunSequence.push(new d.RecaptchaRun(i.hasAnimation,this.options,d.RecaptchaType.Normal));
                break;
            case d.ChallengeType.RecaptchaInvisible:
                this.challengeRunSequence.push(new d.RecaptchaRun(i.hasAnimation,this.options,d.RecaptchaType.Invisible));
                break;
            case d.ChallengeType.ProofOfWork:
                this.challengeRunSequence.push(new d.ProofOfWorkRun(i.hasAnimation,this.options,this.userId));
                break;
            case d.ChallengeType.BotDetect:
                this.challengeRunSequence.push(new d.BotDetectRun(i.hasAnimation,this.options,this.userId));
                break;
            case d.ChallengeType.InviteOnlyEmailVerification:
                this.challengeRunSequence.push(new d.InviteOnlyEmailVerificationChallengeRun(i.hasAnimation,this.options));
                break;
            case d.ChallengeType.AkamaiBotManagerHeaderVerification:
                this.challengeRunSequence.push(new d.AkamaiBotManagerHeaderVerificationChallengeRun(i.hasAnimation,this.options));
                break;
            default:
                var n = new Error("Challenge type ".concat(i.name, " is not defined"));
                throw window.logger.Error({
                    Message: "Challenge type not supported",
                    Ex: n,
                    Page: "InqueuePage"
                }, 2050, this.options.eventId, this.options.customerId, this.options.queueId || ""),
                n
            }
        }
    }
    ,
    t.prototype.isInitialized = function() {
        return this.hasInitializedChallengeRunners
    }
    ,
    t.prototype.runChallenges = function(h) {
        return __awaiter(this, void 0, void 0, function() {
            var t, i, n, r, o, s, a, u, l, c;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    if (this.hasInitializedChallengeRunners)
                        return [3, 5];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, this.initializeChallengeRunners()];
                case 2:
                    return e.sent(),
                    [3, 4];
                case 3:
                    return [2, e.sent()];
                case 4:
                    this.hasInitializedChallengeRunners = !0,
                    e.label = 5;
                case 5:
                    t = [],
                    r = !(i = []),
                    !h || "notVerified" !== h.type && "verifyError" !== h.type || (t = h.verifiedSessions,
                    i = h.verifiedChallengeTypes),
                    o = 0,
                    s = this.challengeRunSequence,
                    e.label = 6;
                case 6:
                    return o < s.length ? ((a = s[o]).doesIssueEnqueueTokens() && (r = !0),
                    0 <= i.indexOf(a.getName()) ? [3, 10] : [4, this.runChallenge(a)]) : [3, 11];
                case 7:
                    if (u = e.sent(),
                    !this.options.isPreview) {
                        if ("success" != u.type || !a.doesIssueEnqueueTokens())
                            return [3, 8];
                        n = u.solution,
                        i.push(a.getName()),
                        a.cleanup()
                    }
                    return [3, 10];
                case 8:
                    return d.isRunAllRetriesUsedResult(u) ? [2, {
                        type: "retriesUsedUpError",
                        challengeType: a.getName()
                    }] : d.isRunErrorResult(u) ? [2, {
                        type: "providerError",
                        errorChallengeType: a.getName(),
                        message: u.message,
                        verifiedChallengeTypes: i,
                        verifiedSessions: t
                    }] : (l = a.getChallengeVerifyProvider(),
                    [4, this.challengeVerifier.verify(l, u.sessionId, u.challengeDetails, u.solution, u.solverStats)]);
                case 9:
                    if (l = e.sent(),
                    this.hideAnimation(),
                    d.isVerifierVerifiedResponse(l) && (t.push(l.sessionInfo),
                    i.push(a.getName()),
                    a.cleanup()),
                    d.isVerifierNotVerifiedResponse(l))
                        return [2, {
                            type: "notVerified",
                            errorChallengeType: a.getName(),
                            message: l.message,
                            verifiedSessions: t,
                            verifiedChallengeTypes: i,
                            errorCodes: l.errorCodes
                        }];
                    if (d.isVerifierErrorResponse(l))
                        return [2, {
                            type: "verifyError",
                            errorChallengeType: a.getName(),
                            message: l.message,
                            verifiedSessions: t,
                            verifiedChallengeTypes: i,
                            error: l.error
                        }];
                    e.label = 10;
                case 10:
                    return o++,
                    [3, 6];
                case 11:
                    return this.fraudProtection.setInactive(),
                    c = {
                        type: "success",
                        sessions: t
                    },
                    (this.options.showInviteOnlyEmailVerificationChallenge || r) && (c.enqueueTokenFromChallenge = n),
                    [2, c]
                }
            })
        })
    }
    ,
    t.prototype.runChallenge = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return t.shouldDisplayAnimation() && this.displayAnimation(),
                    [4, t.run()];
                case 1:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    t.prototype.canIssueEnqueueTokens = function() {
        for (var e = 0, t = this.challengeRunSequence; e < t.length; e++)
            if (t[e].doesIssueEnqueueTokens())
                return !0;
        return !1
    }
    ,
    t.prototype.initializeChallengeRunners = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, i, n, r;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    for (t = [],
                    i = 0,
                    n = this.challengeRunSequence; i < n.length; i++)
                        r = n[i],
                        t.push(r.init());
                    return [4, Promise.all(t)];
                case 1:
                    return e.sent(),
                    [2]
                }
            })
        })
    }
    ,
    t.prototype.displayAnimation = function() {
        var e;
        this.animationIsVisible() || null != (e = this.animationElement) && e.classList.remove(this.cssHiddenClass)
    }
    ,
    t.prototype.hideAnimation = function() {
        var e;
        this.animationIsVisible() && null != (e = this.animationElement) && e.classList.add(this.cssHiddenClass)
    }
    ,
    t.prototype.animationIsVisible = function() {
        this.animationElement || (this.animationElement = document.getElementById(this.animationElementId));
        var e = null == (e = this.animationElement) ? void 0 : e.classList.contains(this.cssHiddenClass);
        return null != e && !e
    }
    ,
    d.ChallengeRunner = t
}
)(QueueIt = QueueIt || {});
var QueueIt, DYNAMIC_MESSAGE_LAST_UPDATED_TIMER_SELECTOR = "#MainPart_h2MessageOnQueueTicketRelativeTime", __extends = ((e => {
    var c;
    function t(e) {
        this.callbackArray = [],
        this.statusChangeCallbackArray = [],
        this.customerId = e.customerId,
        this.eventId = e.eventId,
        this.logger = new c.Helpers.AjaxLogger(e.eventId,e.customerId),
        this.userId = (new c.Helpers.Logger).getUserId(),
        this.listenChildFrame(),
        this.queueIdLinkTabIndex = ko.computed(function() {
            return null
        }),
        this.queuePathPrefix = e.queuePathPrefix
    }
    function i(e) {
        this.messageType = e
    }
    c = e.Queue || (e.Queue = {}),
    t.prototype.runChallenges = function(u, l) {
        return __awaiter(this, void 0, void 0, function() {
            var t, i, n, r, o, s, a = this;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 2, , 3]),
                    [4, polly().handle(function(e) {
                        return a.handleRetryError(e)
                    }).waitAndRetry(5).executeForPromise(function() {
                        return __awaiter(a, void 0, void 0, function() {
                            var t;
                            return __generator(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, u.runChallenges(void 0)];
                                case 1:
                                    return t = e.sent(),
                                    c.isRunnerSuccessResult(t) ? [2, t] : [2, Promise.reject(t)]
                                }
                            })
                        })
                    })];
                case 1:
                    return [2, e.sent()];
                case 2:
                    return t = e.sent(),
                    o = r = i = void 0,
                    null != t ? (s = t,
                    c.isRunnerInitErrorResult(s) && (i = "Initialization of challenges failed. Redirecting to error page",
                    n = l.getChallengeInitErrorRedirectUrl(s)),
                    c.isRunnerProviderErrorResult(s) && (i = "Challenge script run threw error. Redirecting to error page",
                    n = l.getGeneralErrorRedirectUrl(s)),
                    c.isRunnerVerifyErrorResult(s) && (i = "Error verifying challenge",
                    n = l.getGeneralErrorRedirectUrl(s),
                    s.error) && s.error.innerError && (r = s.error.innerError.AjaxErrorLog,
                    o = s.error.innerError.JqXHR),
                    c.isRunnerRetriesErrorResult(s) && (i = "Challenge retries used up. Redirecting to error page",
                    s.message = i,
                    n = l.getRetriesUsedUpRedirectUrl(s)),
                    c.isRunnerNotVerifiedResult(s) && (i = "Challenge not verified",
                    r = {
                        innerMessage: s.message,
                        challengeType: s.errorChallengeType
                    },
                    n = l.getTimeoutRedirectUrl())) : (i = t instanceof Error ? encodeURIComponent(t.message) : "UnknownError",
                    n = l.getGenericErrorRedirectUrl(i)),
                    window.logger.Error({
                        Message: i,
                        Ex: t,
                        Page: "InqueuePage"
                    }, 2069, this.eventId, this.customerId, r, o),
                    setTimeout(function() {
                        return document.location.href = n
                    }, 200),
                    [3, 3];
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.handleRetryError = function(e) {
        return !!c.isRunnerInitErrorResult(e) || !!c.isRunnerProviderErrorResult(e) || !(!c.isRunnerNotVerifiedResult(e) || !c.hasErrorCodeWrongUserInput(e))
    }
    ,
    t.prototype.listenChildFrame = function() {
        var t = this
          , i = this;
        window.addEventListener ? window.addEventListener("message", function(e) {
            return t.receiveMessageSafe(e, i)
        }, !1) : window.attachEvent && window.attachEvent("onmessage", function(e) {
            return t.receiveMessageSafe(e, i)
        })
    }
    ,
    t.prototype.receiveMessageSafe = function(e, t) {
        var i;
        try {
            if (!(i = JSON.parse(e.data)))
                return
        } catch (e) {
            return
        }
        this.receiveMessage(i, t)
    }
    ,
    t.prototype.modelUpdated = function(e) {
        this.callbackArray.push(e)
    }
    ,
    t.prototype.notifyFrames = function(e) {
        var t = document.getElementById("toppanel_iframe")
          , i = document.getElementById("leftpanel_iframe")
          , n = document.getElementById("rightpanel_iframe")
          , r = document.getElementById("middlepanel_iframe")
          , o = document.getElementById("bottompanel_iframe")
          , s = document.getElementById("sidebar_iframe");
        this.notifyMainFrame(e),
        this.notifyFrame(t, e),
        this.notifyFrame(i, e),
        this.notifyFrame(n, e),
        this.notifyFrame(r, e),
        this.notifyFrame(o, e),
        this.notifyFrame(s, e)
    }
    ,
    t.prototype.notifyMainFrame = function(e) {
        var t = window.queueUserInfoClient;
        if (t && t.refresh)
            try {
                t.refresh(e.toString())
            } catch (e) {
                window.logger.Error({
                    Message: "Error notifying main frame",
                    Ex: e
                }, 2071, this.eventId, this.customerId)
            }
    }
    ,
    t.prototype.notifyFrame = function(e, t) {
        if (e && e.contentWindow)
            try {
                e.contentWindow.postMessage(t.toString(), "*")
            } catch (e) {
                window.logger.Error({
                    Message: "Error notifying frames",
                    Ex: e
                }, 2072, this.eventId, this.customerId)
            }
    }
    ,
    t.prototype.doCallbacks = function(e) {
        for (var t = 0; t < this.callbackArray.length; t++)
            try {
                $.isFunction(this.callbackArray[t]) && this.callbackArray[t](e)
            } catch (e) {
                window.logger.Warning({
                    Message: "Error in custom layout modelUpdated calback",
                    Ex: e
                }, 2073, this.eventId, this.customerId)
            }
    }
    ,
    t.prototype.pageReady = function(e) {
        this.statusChangeCallbackArray.push(e)
    }
    ,
    t.prototype.doStatusChangeCallbacks = function(e) {
        for (var t = 0; t < this.statusChangeCallbackArray.length; t++)
            try {
                $.isFunction(this.statusChangeCallbackArray[t]) && this.statusChangeCallbackArray[t](e)
            } catch (e) {
                window.logger.Warning({
                    Message: "Error in custom layout pageReady callback",
                    Ex: e
                }, 2074, this.eventId, this.customerId)
            }
    }
    ,
    t.prototype.initializeDynamicMessageLastUpdatedTimer = function(e, t) {
        var i = $;
        i.countdown.setDefaults(i.countdown.regional[t]),
        i(DYNAMIC_MESSAGE_LAST_UPDATED_TIMER_SELECTOR).countdown({
            since: -e,
            format: "dhm",
            layout: '{d<}<span class="countup_value days">{dnn}</span> <span class="countup_label days">{dl}</span> {d>}{h<}<span class="countup_value hours">{hnn}</span> <span class="countup_label hours">{hl}</span>{h>}<span class="countup_value minutes"> {mn} </span><span class="countup_label minutes">{ml}</span>'
        })
    }
    ,
    t.prototype.setDynamicMessageLastUpdatedTime = function(e) {
        $(DYNAMIC_MESSAGE_LAST_UPDATED_TIMER_SELECTOR).countdown("option", {
            since: -e
        })
    }
    ,
    t.prototype.onReady = function(e) {
        this.doStatusChangeCallbacks(e)
    }
    ,
    c.ViewBase = t,
    i.prototype.toString = function() {
        return JSON.stringify(this)
    }
    ,
    c.FrameDto = i
}
)(QueueIt = QueueIt || {}),
this && this.__extends || ( () => {
    var n = function(e, t) {
        return (n = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        ))(e, t)
    };
    return function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function i() {
            this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
        new i)
    }
}
)()), PAGE_ID = "after";
(e => {
    var i, n;
    function t(e) {
        var t = n.call(this, e) || this;
        return t.jsErrors = 0,
        t.updateInterval = 5e3,
        t.creole = new Parse.Simple.Creole({
            forIE: document.all
        }),
        t.queueId = e.queueId,
        t.language = e.language,
        t.layoutName = e.layoutName,
        t.message = ko.observable(),
        t.tags = e.tags,
        t.languageSelector = new i.LanguageSelector({
            languages: e.languages,
            languageSelectorVisible: e.languageSelectorVisible,
            selectedLanguage: e.language
        }),
        t
    }
    i = e.Queue || (e.Queue = {}),
    n = i.ViewBase,
    __extends(t, n),
    t.prototype.ajaxGetMessage = function() {
        var n = this;
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "".concat(this.queuePathPrefix, "/spa-api/after/").concat(this.customerId, "/").concat(this.eventId, "/").concat(this.queueId, "/status?cid=").concat(this.language, "&l=").concat(this.layoutName),
            success: function(e) {
                var t = e.redirectUrl;
                t ? document.location.href = t : (n.refreshClientInfo(e),
                n.jsErrors = 0)
            },
            error: function(e, t, i) {
                n.jsErrors = n.jsErrors + 1,
                n.logger.logAjaxCallError("Error getting status on after page", "AfterPage", e, t, i)
            }
        })
    }
    ,
    t.prototype.updateTimer = function() {
        var e = this;
        setTimeout(function() {
            e.ajaxGetMessage(),
            e.updateTimer()
        }, this.updateInterval)
    }
    ,
    t.prototype.getCreole = function() {
        return this.creole
    }
    ,
    t.prototype.init = function() {
        this.notifyFrames(new i.UpdateQueueFrameDto(null,null,PAGE_ID,new Array,null,null,this.tags)),
        this.updateTimer()
    }
    ,
    t.prototype.refreshClientInfo = function(e) {
        this.updateInterval = e.updateInterval || 5e3,
        e.message && e.message.text ? this.message(new i.Message(e.message,this.setDynamicMessageLastUpdatedTime)) : this.message(null)
    }
    ,
    t.prototype.receiveMessage = function(e, t) {
        "RequestRefresh" === e.messageType && this.notifyFrames(new i.UpdateQueueFrameDto(null,null,PAGE_ID,new Array,null,null,this.tags))
    }
    ,
    t.prototype.onReady = function() {
        this.initializeDynamicMessageLastUpdatedTimer(60, this.language),
        n.prototype.onReady.call(this, PAGE_ID)
    }
    ,
    i.AfterView = t
}
)(QueueIt = QueueIt || {}),
(r => {
    var o = r.Queue || (r.Queue = {})
      , n = (e.ENTERED_QUEUE_GOT_QUEUEID = "EnteredQueueGotQueueId",
    e.QUEUEID_ALREADY_EXIST = "QueueIdAlreadyExist",
    e.INVALID_CAPTCHA_TOKEN = "InvalidCaptchaToken",
    e.MISSING_CUSTOM_DATA_KEY = "MissingCustomDataKey",
    e.UNIQUE_KEY_VIOLATION = "UniqueKeyViolation",
    e.UNEXPECTED_FAILURE_TO_ENQUEUE = "UnexpectedFailureToEnqueue",
    e.IDLE_QUEUE_ILLEGAL_ACTION = "IdleQueueIllegalAction",
    e.CUSTOM_DATA_UPDATED = "CustomDataUpdated",
    e.MISSING_QUEUE_ID = "MissingQueueId",
    e.UNEXPECTED_FAILURE_TO_UPDATE = "UnexpectedFailureToUpdate",
    e.INVALID_QUEUEIT_ENQUEUE_TOKEN = "InvalidQueueitEnqueueToken",
    e.SERVER_IS_BUSY = "ServerBusyError",
    e);
    function e() {}
    i = o.FrameDto,
    __extends(t, i);
    var i, s = t;
    function t(e) {
        var t = i.call(this, n.ENTERED_QUEUE_GOT_QUEUEID) || this;
        return t.queueId = e,
        t
    }
    o.EnteredQueueGotQueueIdDto = s,
    __extends(l, a = o.FrameDto);
    var a, u = l;
    function l() {
        return a.call(this, n.IDLE_QUEUE_ILLEGAL_ACTION) || this
    }
    o.IdleQueueIllegalActionDto = u,
    __extends(d, c = o.FrameDto);
    var c, h = d;
    function d(e, t) {
        var i = c.call(this, n.QUEUEID_ALREADY_EXIST) || this;
        return i.queueId = e,
        i.enqueueParams = t,
        i
    }
    o.QueueIdAlreadyExistDto = h,
    __extends(f, p = o.FrameDto);
    var p, g = f;
    function f() {
        return p.call(this, n.MISSING_QUEUE_ID) || this
    }
    o.MissingQueueIdForUpdateDto = g,
    __extends(v, m = o.FrameDto);
    var m, y = v;
    function v(e) {
        var t = m.call(this, n.INVALID_CAPTCHA_TOKEN) || this;
        return t.enqueueParams = e,
        t
    }
    o.InvalidCaptchaTokenDto = y,
    __extends(w, I = o.FrameDto);
    var I, b = w;
    function w(e) {
        var t = I.call(this, n.MISSING_CUSTOM_DATA_KEY) || this;
        return t.enqueueParams = e,
        t
    }
    o.MissingCustomDataKeyDto = b,
    __extends(C, E = o.FrameDto);
    var E, T = C;
    function C(e) {
        var t = E.call(this, n.UNIQUE_KEY_VIOLATION) || this;
        return t.enqueueParams = e,
        t
    }
    o.UniqueKeyViolationDto = T,
    __extends(P, S = o.FrameDto);
    var S, q = P;
    function P() {
        return S.call(this, n.CUSTOM_DATA_UPDATED) || this
    }
    o.CustomDataUpdatedDto = q,
    __extends(_, k = o.FrameDto);
    var k, R = _;
    function _(e) {
        var t = k.call(this, n.SERVER_IS_BUSY) || this;
        return t.enqueueParams = e,
        t
    }
    o.ServerIsBusyDto = R,
    __extends(x, U = o.FrameDto);
    var U, V = x;
    function x(e) {
        var t = U.call(this, n.UNEXPECTED_FAILURE_TO_ENQUEUE) || this;
        return t.enqueueParams = e,
        t
    }
    o.UnexpectedFailureToEnqueueDto = V,
    __extends(D, Q = o.FrameDto);
    var Q, L = D;
    function D() {
        return Q.call(this, n.UNEXPECTED_FAILURE_TO_UPDATE) || this
    }
    o.UnexpectedFailureToUpdateDto = L,
    __extends(F, M = o.FrameDto);
    var M, A = F;
    function F(e) {
        var t = M.call(this, n.INVALID_QUEUEIT_ENQUEUE_TOKEN) || this;
        return t.enqueueParams = e,
        t
    }
    function O(e, t, i) {
        var n = this;
        this.options = e,
        this.frameNotifier = t,
        this.http = new r.Tools.HttpUtil,
        this.setCaptchaSession = function(t) {
            return __awaiter(n, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return this.challengeSessions = t,
                        [4, this.doEnqueueIfReady()];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        this.receiveMessage = function(s) {
            return __awaiter(n, void 0, void 0, function() {
                var t, i, n, r, o;
                return __generator(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return !this.isMessageFromCaptcha(s.origin) && (t = s.data,
                        i = t.Key,
                        t.Type) ? [3, 1] : [2];
                    case 1:
                        return "Enqueue" != t.Type && "Update" != t.Type ? [3, 7] : this.options.isIdle ? (this.notify(new u),
                        [2]) : (n = t.Email,
                        r = this.getAllKeyValues(t.CustomData),
                        "Enqueue" != t.Type ? [3, 5] : this.inqueueView.hasQueueId() && i ? (this.notify(new h(this.inqueueView.queueId(),this.getEnqueueParams())),
                        [3, 4]) : [3, 2]);
                    case 2:
                        return this.customDataEnqueue = {
                            Email: n,
                            Key: i,
                            CustomData: r
                        },
                        [4, this.doEnqueueIfReady()];
                    case 3:
                        e.sent(),
                        e.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        "Update" == t.Type && (this.inqueueView.hasQueueId() ? (o = "".concat(this.options.queuePathPrefix, "/api/customdata/").concat(this.options.customerId, "/").concat(this.options.eventId, "/").concat(this.inqueueView.queueId(), "/update"),
                        this.http.post(o, this.buildUpdateCustomDataDto(n, r), this.onUpdateCustomDataSuccess, this.onUpdateCustomDataFailed)) : this.notify(new g)),
                        e.label = 6;
                    case 6:
                        return [3, 9];
                    case 7:
                        return "QueueitEnqueueToken" != t.Type ? [3, 9] : this.options.isPreview ? [2] : this.inqueueView.hasQueueId() ? (this.notify(new h(this.inqueueView.queueId(),this.getEnqueueParams())),
                        [2]) : t.QueueitEnqueueToken ? (this.queueitEnqueueToken = t.QueueitEnqueueToken,
                        [4, this.doEnqueueIfReady()]) : (this.notify(new A(this.getEnqueueParams())),
                        [2]);
                    case 8:
                        e.sent(),
                        e.label = 9;
                    case 9:
                        return [2]
                    }
                })
            })
        }
        ,
        this.isMessageFromCaptcha = function(e) {
            return "https://www.google.com" == e
        }
        ,
        this.onUpdateCustomDataSuccess = function() {
            n.notify(new q)
        }
        ,
        this.onUpdateCustomDataFailed = function(e, t, i) {
            n.logger.logAjaxCallError("Error updating custom data", "enqueue/customData", e, t, i),
            n.notify(new L)
        }
        ,
        this.onEnqueuePostSuccess = function(e) {
            e.redirectUrl ? document.location.href = e.redirectUrl : e.queueId && (n.notify(new s(e.queueId)),
            n.inqueueView.setQueueId(e.queueId),
            n.inqueueView.notifyFrames(new o.UpdateQueueFrameDto(null,null,null,null,null,e.queueId,null)),
            $("body").removeClass("queueit-enqueue-token-required"),
            $("body").removeClass("key-required"),
            n.inqueueView.continueAfterResolvingQueueId())
        }
        ,
        this.onEnqueueTriesFailed = function(e) {
            (e = void 0 !== e && e) ? n.notify(new R(n.getEnqueueParams())) : n.notify(new V(n.getEnqueueParams()))
        }
        ,
        this.onEnqueuePostFailure = function(e) {
            e.challengeFailed ? (n.notify(new y(n.getEnqueueParams())),
            n.logWarning("Failed to enqueue with CustomData. Invalid captcha verification token")) : e.missingCustomDataKey ? (n.notify(new b(n.getEnqueueParams())),
            n.logWarning("Failed to enqueue. CustomDataKey is missing")) : e.customDataUniqueKeyViolation ? (n.notify(new T(n.getEnqueueParams())),
            n.logWarning("Failed to enqueue. CustomDataKey is not unique")) : e.invalidQueueitEnqueueToken && (n.notify(new A(n.getEnqueueParams())),
            n.logWarning("Failed to enqueue. QueueitEnqueueToken is not valid."))
        }
        ,
        this.getEnqueueParams = function() {
            return {
                targetUrl: n.options.targetUrl,
                layoutName: n.options.layout
            }
        }
        ,
        this.buildUpdateCustomDataDto = function(e, t) {
            return {
                Email: e,
                EventId: n.options.eventId,
                CustomData: t
            }
        }
        ,
        this.getAllKeyValues = function(e) {
            for (var t = JSON.stringify(e).replace(/[{}"\[\]]/g, ""), i = [], n = "", r = "", o = 0; o < t.length; o++) {
                var s = t.substr(o, 1);
                ":" == s ? (n = r,
                r = "") : "," == s ? (i.push({
                    Key: n,
                    Value: r
                }),
                r = "") : r += s
            }
            return 0 < n.length && 0 < r.length && i.push({
                Key: n,
                Value: r
            }),
            i
        }
        ,
        this.notify = function(e) {
            window.customDataClient ? window.customDataClient.notifyDirect(e) : window.queueitEnqueueTokenClient ? window.queueitEnqueueTokenClient.notifyDirect(e) : window.queueUserManager && window.queueUserManager.notifyDirect(e),
            n.frameNotifier.notifyFrames(e)
        }
        ,
        this.listenOnFrames = function() {
            window.addEventListener ? window.addEventListener("message", n.receiveMessage, !1) : window.attachEvent && window.attachEvent("onmessage", function(e) {
                return n.receiveMessage
            })
        }
        ,
        this.logWarning = function(e) {
            window.logger.Warning({
                Message: e
            }, 2052, n.options.eventId, n.options.customerId)
        }
        ,
        this.logger = new o.Helpers.AjaxLogger(e.eventId,e.customerId),
        this.listenOnFrames(),
        this.inqueueView = t,
        this.softblockValidationSessionInfo = i,
        this.enqueuer = new o.Enqueuer(this.options.customerId,this.options.eventId,this.options.queuePathPrefix)
    }
    o.InvalidQueueitEnqueueTokenMessage = A,
    O.prototype.doEnqueueIfReady = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, i, n;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    if (this.options.isPreview)
                        return [2];
                    if (this.options.showChallenges && !this.challengeSessions || this.options.isQueueitEnqueueTokenRequired && !this.queueitEnqueueToken || this.options.requireKey && !this.options.isQueueitEnqueueTokenRequired && !this.customDataEnqueue)
                        return [3, 4];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, this.enqueuer.enqueue(this.challengeSessions, this.options.layout, this.options.customUrlParams, this.options.targetUrl, this.options.culture, this.softblockValidationSessionInfo, this.customDataEnqueue, this.queueitEnqueueToken, this.options.showInviteOnlyEmailVerificationChallenge)];
                case 2:
                    return t = e.sent(),
                    this.onEnqueuePostSuccess(t),
                    [3, 4];
                case 3:
                    return t = e.sent(),
                    n = i = t,
                    i.response ? this.onEnqueuePostFailure(i.response) : t instanceof o.EnqueueServerBusyError ? (window.logger.Error({
                        Message: "Error on SDK enqueue. Exceeded retries and server was busy.",
                        Ex: {
                            message: "Server was busy",
                            name: "EnqueueException"
                        }
                    }, 2098, this.options.eventId, this.options.customerId, ""),
                    this.onEnqueueTriesFailed(!0)) : (window.logger.Error({
                        Message: "Ajax error on SDK enqueue.",
                        Ex: {
                            message: n.ajaxError.Message,
                            name: "EnqueueException"
                        }
                    }, 2051, this.options.eventId, this.options.customerId, "", n.ajaxError.AjaxErrorLog, n.ajaxError.JqXHR),
                    this.onEnqueueTriesFailed()),
                    [3, 4];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    o.CustomData = O
}
)(QueueIt = QueueIt || {}),
(n => {
    var i, r, o;
    function e(e) {
        var t = r.call(this, e) || this;
        return t.options = e,
        t.notifyFrames(new i.UpdateQueueFrameDto(null,null,"error",new Array,t.options.targetUrl,null,t.options.tags)),
        t.languageSelector = new i.LanguageSelector({
            languages: e.languages,
            languageSelectorVisible: e.languageSelectorVisible,
            selectedLanguage: e.culture
        }),
        t.detailExpander = new o,
        t
    }
    i = n.Queue || (n.Queue = {}),
    r = i.ViewBase,
    __extends(e, r),
    e.prototype.receiveMessage = function(e, t) {
        "RequestRefresh" === e.messageType && this.notifyFrames(new i.UpdateQueueFrameDto(null,null,"error",new Array,this.options.targetUrl,null,this.options.tags))
    }
    ,
    i.ErrorView = e,
    o = function() {
        var i = this;
        this.onClickOrEnterExpandDetails = function(e, t) {
            "click" !== t.type && t.keyCode !== n.Queue.Helpers.KeyCode.Enter || i.isDetailsExpanded(!i.isDetailsExpanded())
        }
        ,
        this.isDetailsExpanded = ko.observable(!1)
    }
    ,
    i.DetailExpander = o
}
)(QueueIt = QueueIt || {}),
(i => {
    var n = i.Queue || (i.Queue = {})
      , a = "application/json"
      , o = "#aUpdateEmail";
    function e(e) {
        for (var e = decodeURIComponent(e), t = new Array, i = 0, n = e.split("&"); i < n.length; i++) {
            var r, o = n[i].split("=");
            2 == o.length && (r = o[0].length >= "t_".length ? o[0].substr("t_".length) : o[0],
            t.push(new l(r,o[1])))
        }
        return t
    }
    n.getTargetUrlParams = e,
    __extends(t, u = n.FrameDto);
    var u, r = t;
    function t(e, t, i, n, r, o, s) {
        var a = u.call(this, "UpdateQueue") || this;
        return isNaN(e) || (a.queueNumber = e),
        isNaN(t) || (a.usersInLineAheadOfYou = t),
        i && (a.pageId = i),
        a.targetUrlParams = n,
        a.targetUrl = r,
        o && (a.queueId = o),
        a.tags = s,
        a
    }
    n.UpdateQueueFrameDto = r;
    var s, l = function(e, t) {
        this.key = e,
        this.value = t
    };
    function c(e) {
        var r = s.call(this, e) || this;
        return r._firstInLine = !1,
        r._soundIsPlayingFlag = !1,
        r.isRedirectPromptDialogConfirmed = null,
        r._logSoundPlayerInfo = {
            SoundPlayer_setup_IsCalled: !1,
            SoundPlayer_onready_IsCalled: !1,
            SoundPlayer_onready_Exception: !1
        },
        r.waitingStateUpdateInterval = 6e4,
        r.originalUrl = window.location.href,
        r.challengeSolvedClass = "challenge-solved",
        r.challengeClass = "challenge",
        r.getStatus = function() {
            return r.inqueueStatus
        }
        ,
        r.getIsRedirectedToTarget = function() {
            return r.isRedirectedToTarget
        }
        ,
        r.getQueueId = function() {
            return r.options.queueId
        }
        ,
        r.setQueueId = function(e) {
            r.options.queueId = e,
            r.queueId(e)
        }
        ,
        r.updateNotify = function() {
            r.toggleButton(o, !0),
            $("#MainPart_inpEmailAddress").on("change keyup paste", function() {
                r.toggleButton(o, !1)
            }),
            $.ajax({
                type: "POST",
                dataType: "json",
                contentType: a,
                data: JSON.stringify({
                    email: r.emailAddress(),
                    targetUrl: r.options.targetUrl,
                    targetUrlHash: r.getTargetUrlHash(),
                    customUrlParams: r.options.customUrlParams,
                    layoutName: r.options.layout
                }),
                url: "".concat(r.getQueuePath(), "/updateemail/?cid=").concat(r.options.culture || ""),
                success: function(e) {
                    r.notifyEmailUpdateResult(e.Message, e.Status)
                },
                error: function(e, t, i) {
                    r.toggleButton(o, !1),
                    r.notifyEmailUpdateResult("Error subscribing", "error");
                    var n = e.status + " status code received";
                    r.logger.logAjaxCallError("Error subscribing to e-mail notification", "InqueuePage", e, t, i, {
                        message: n,
                        name: "UpdateEmailError"
                    })
                }
            })
        }
        ,
        r.options = e,
        r.getQueuePath = function() {
            return "".concat(r.options.queuePathPrefix, "/spa-api/queue/").concat(r.customerId, "/").concat(r.eventId, "/").concat(r.options.queueId)
        }
        ,
        r.enqueuer = new n.Enqueuer(r.customerId,r.eventId,r.queuePathPrefix),
        r.inqueueStatus = "NotReadyYet",
        r.notReadyCount = 0,
        r.jsErrorCount = 0,
        r.lastTryUpdate = new Date,
        r.lastLayoutVersion = e.layoutVersion,
        r.lastLayoutName = e.layout,
        r.requireKey = e.requireKey,
        r.isQueueitEnqueueTokenRequired = e.isQueueitEnqueueTokenRequired,
        r.detector = new n.InactivityDetector,
        r.queueItemInfoHelper = new n.QueueItemInfoHelper,
        r.webPushPublicKey = e.webPushPublicKey,
        r.redirector = {
            redirect: function(e) {
                e ? window.location.href = e : window.location.reload()
            }
        },
        r.cssReplacer = {
            replace: function(e) {
                $("head> link").filter("[href$='.css']").remove(),
                $("head").append(e)
            }
        },
        r.creole = new Parse.Simple.Creole({
            forIE: document.all
        }),
        r.isBeforeOrIdle = ko.observable(e.isBeforeOrIdle),
        r.queueIdLinkTabIndex = ko.computed(function() {
            return r.isBeforeOrIdle() ? null : "0"
        }),
        r.isBeforeOrIdle() ? r.updateInterval = 5e3 : r.updateInterval = 2e3,
        r.showConfirmRedirectDialog = ko.observable(!1),
        r.queueIdLinkModalVisible = ko.observable(!1),
        r.message = ko.observable(void 0),
        r.queueId = ko.observable(e.queueId),
        r.hasQueueId = ko.computed(function() {
            return "00000000-0000-0000-0000-000000000000" != r.queueId()
        }),
        r.isRunning = ko.observable(!0),
        r.isRedirected = !1,
        r.isRedirectedToTarget = !1,
        r.emailAddress = ko.observable(null),
        r.isClientInactive = ko.observable(!1),
        r.ticket = new n.Ticket(null),
        r.initialWindowLocation = ko.observable(""),
        i.Queue.Helpers.FocusTrapper.addFocusTrapper("#queueIdLinkModal", r.queueIdLinkModalVisible),
        i.Queue.Helpers.FocusTrapper.addFocusTrapper("#divConfirmRedirectModal", r.showConfirmRedirectDialog),
        r
    }
    n.TargetUrlParam = l,
    __extends(c, s = n.ViewBase),
    c.prototype.get_firstInLine = function() {
        return this._firstInLine
    }
    ,
    c.prototype.set_firstInLine = function(e) {
        this._firstInLine != e && (this._firstInLine = e) && window.welcomeAudioPlayer && this.playWelcomeSound()
    }
    ,
    c.prototype.init = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, i;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.initQueueViewSession(),
                    this.set_firstInLine("FirstInLine" == this.options.inqueueInfo.forecastStatus),
                    this.doCallbacks(this.options.inqueueInfo),
                    this.layout = new n.Layout(this.options.inqueueInfo.layout,this.options,this.get_firstInLine()),
                    this.texts = new n.InQueueTexts({
                        inQueueTexts: this.options.inqueueInfo.texts,
                        isBeforeOrIdle: this.options.isBeforeOrIdle,
                        secondsToStart: this.options.inqueueInfo.ticket.secondsToStart
                    }),
                    this.languageSelector = new n.LanguageSelector({
                        languages: this.options.languages,
                        languageSelectorVisible: this.layout.languageSelectorVisible.toString(),
                        selectedLanguage: this.options.culture
                    }),
                    this.ticket.refresh(this.options.inqueueInfo.ticket),
                    this.options.inqueueInfo.message && this.options.inqueueInfo.message.text && this.message(new n.Message(this.options.inqueueInfo.message,this.setDynamicMessageLastUpdatedTime)),
                    this.options.isBeforeOrIdle || this.initSoundTrack(),
                    this.notifyFrames(new r(this.options.isBeforeOrIdle ? null : parseInt(this.options.inqueueInfo.ticket.queueNumber),this.options.isBeforeOrIdle ? null : parseInt(this.options.inqueueInfo.ticket.usersInLineAheadOfYou),this.options.isBeforeOrIdle ? "before" : "queue",this.getTargetUrlParams(),this.options.targetUrl,this.queueId(),this.options.inqueueInfo.texts.tags)),
                    this.setupBlinkingDot(),
                    this.customData = new n.CustomData(this.options,this,this.tryGetSoftblockValidationsessionInfofromUrl()),
                    t = this.getQueryStringParam(this.originalUrl, "enqueuetoken"),
                    this.options.isPreview ? [2] : this.options.isIdle || this.hasQueueId() ? (this.start(),
                    [2]) : this.options.isIdle || this.hasQueueId() ? [3, 9] : (this.options.showInviteOnlyEmailVerificationChallenge && this.isQueueitEnqueueTokenRequired && !t && (this.options.showChallenges = !0,
                    this.options.challenges.push({
                        name: "InviteOnlyEmailVerification",
                        hasAnimation: !1
                    })),
                    this.options.showChallenges ? (this.challengeRedirectUrls = new n.ChallengeRedirectUrls(this.options),
                    this.challengeRunner = new n.ChallengeRunner(this.options,this.userId),
                    this.challengeRunner.init(),
                    [4, this.runChallenges(this.challengeRunner, this.challengeRedirectUrls)]) : [3, 3]);
                case 1:
                    return i = e.sent(),
                    [4, this.challengeCallback(i, t)];
                case 2:
                    return e.sent(),
                    [3, 9];
                case 3:
                    return !this.requireKey || this.isQueueitEnqueueTokenRequired ? [3, 4] : [3, 9];
                case 4:
                    return this.isQueueitEnqueueTokenRequired && this.isCustomerUsingEnqueueTokenV1() ? [3, 9] : [3, 5];
                case 5:
                    return !this.isQueueitEnqueueTokenRequired || this.isCustomerUsingEnqueueTokenV1() ? [3, 7] : [4, this.enqueue(void 0, t)];
                case 6:
                    return e.sent(),
                    [3, 9];
                case 7:
                    return [4, this.enqueue(void 0, t)];
                case 8:
                    e.sent(),
                    e.label = 9;
                case 9:
                    return [2]
                }
            })
        })
    }
    ,
    c.prototype.isCustomerUsingEnqueueTokenV1 = function() {
        var e = this.getQueryStringParam(this.originalUrl, "qet");
        return this.options.isCustomerUsingEnqueueTokenFormatV1 || null != e
    }
    ,
    c.prototype.enqueue = function(s, a) {
        return __awaiter(this, void 0, void 0, function() {
            var t, i, n, r, o = this;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    t = this.tryGetSoftblockValidationsessionInfofromUrl(),
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, this.enqueuer.enqueue(s, this.options.layout, this.options.customUrlParams, this.options.targetUrl, this.options.culture, t, void 0, a, this.options.showInviteOnlyEmailVerificationChallenge)];
                case 2:
                    return (i = e.sent()).redirectUrl ? (document.location.href = i.redirectUrl,
                    [2]) : (s && $("body").removeClass(this.challengeClass).addClass(this.challengeSolvedClass),
                    a && ($("body").removeClass("queueit-enqueue-token-required"),
                    $("body").removeClass("key-required")),
                    this.onQueueIdReceived(i.queueId),
                    [3, 4]);
                case 3:
                    if (i = e.sent(),
                    n = r = i,
                    r.response) {
                        if (r.response.challengeFailed)
                            throw r;
                        window.logger.Error({
                            Message: "Error on enqueue",
                            Ex: {
                                message: JSON.stringify(r.response),
                                name: "EnqueueException"
                            }
                        }, 2061, this.eventId, this.customerId, "")
                    } else
                        n.ajaxError && window.logger.Error({
                            Message: "Error on enqueue",
                            Ex: {
                                message: n.ajaxError.Message,
                                name: "EnqueueException"
                            }
                        }, 2062, this.eventId, this.customerId, "", n.ajaxError.AjaxErrorLog, n.ajaxError.JqXHR);
                    return r.response && r.isEnqueueTokenError() ? (n = window.location.search.substring(1, window.location.search.length),
                    r = r.getErrorCode(),
                    this.redirector.redirect("".concat(this.queuePathPrefix, "/error?er=").concat(r, "&").concat(n))) : (this.isRunning(!1),
                    setTimeout(function() {
                        o.enqueue(s, a)
                    }, 15e3)),
                    [3, 4];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    c.prototype.getTargetUrlParams = function() {
        return e(this.options.customUrlParams)
    }
    ,
    c.prototype.start = function() {
        this.updateTimer(),
        this.updateCheckTimer()
    }
    ,
    c.prototype.getCreole = function() {
        return this.creole
    }
    ,
    c.prototype.refresh = function(e) {
        !e.isBeforeOrIdle && this.isBeforeOrIdle() && (this.trySwitchBeforePageToQueue(),
        this.isBeforeOrIdle(e.isBeforeOrIdle)),
        this.isBeforeOrIdle() ? this.refreshBeforeStatusUpdate(e) : this.refreshGetForecast(e)
    }
    ,
    c.prototype.refreshBeforeStatusUpdate = function(e) {
        this.doCallbacks(e),
        this.notifyFrames(new r(null,null,e.pageId,this.getTargetUrlParams(),this.options.targetUrl,null,null != e.texts ? e.texts.tags : null)),
        this.updateInterval = e.updateInterval || 4e4;
        var t = e.ticket.secondsToStart;
        $("#defaultCountdown").countdown("option", {
            until: t
        }),
        this.ticket.refresh(e.ticket),
        this.lastLayoutVersion = e.layoutVersion,
        this.lastLayoutName = e.layoutName,
        e.layout && this.layout.refresh(e.layout, !1),
        e.texts && (this.texts.styleSheets != e.texts.styleSheets && this.cssReplacer.replace(e.texts.styleSheets),
        this.texts.refresh({
            inQueueTexts: e.texts,
            isBeforeOrIdle: e.isBeforeOrIdle,
            secondsToStart: e.ticket.secondsToStart
        }),
        this.languageSelector.refreshLanguageSelector(e.texts, this.layout.languageSelectorVisible())),
        this.updateDynamicMessage(e.message)
    }
    ,
    c.prototype.refreshGetForecast = function(e) {
        "NotReadyYet" !== this.inqueueStatus && e.forecastStatus && "NotReadyYet" === e.forecastStatus || this.get_firstInLine() && "FirstInLine" !== e.forecastStatus || (this.updateInterval = e.updateInterval,
        this.inqueueStatus = e.forecastStatus,
        "NotReadyYet" === this.inqueueStatus && this.notReadyCount++,
        10 <= this.notReadyCount && (this.isRedirected = !0,
        this.redirector.redirect()),
        this.doCallbacks(e),
        this.notifyFrames(new r(Number(e.ticket.queueNumber),Number(e.ticket.usersInLineAheadOfYou),e.pageId,this.getTargetUrlParams(),this.options.targetUrl,null,null != e.texts ? e.texts.tags : null)),
        this.isRedirectPromptDialogConfirmed || e.ticket.queuePaused || "FirstInLine" !== this.inqueueStatus || !this.layout.isRedirectPromptDialogEnabled && !this.isClientInactive() || (this.ticket.windowStartTime() && (this.updateInterval = Math.max(this.updateInterval, this.waitingStateUpdateInterval)),
        this.showConfirmRedirectDialog(!0),
        this.message(null),
        this.isRedirectPromptDialogConfirmed = !1),
        "FirstInLine" === this.inqueueStatus && this.set_firstInLine(!0),
        this.ticket.refresh(e.ticket),
        this.layout.refresh(e.layout, this.get_firstInLine()),
        e.texts && (e.texts.styleSheets !== this.texts.styleSheets && this.cssReplacer.replace(e.texts.styleSheets),
        this.texts.refresh({
            inQueueTexts: e.texts,
            isBeforeOrIdle: e.isBeforeOrIdle,
            secondsToStart: e.ticket.secondsToStart
        }),
        this.languageSelector.refreshLanguageSelector(e.texts, this.layout.languageSelectorVisible())),
        this.updateDynamicMessage(e.message),
        this.lastLayoutVersion >= e.layoutVersion && this.lastLayoutName == e.layoutName) || (this.initSoundTrack(),
        this.lastLayoutVersion = e.layoutVersion,
        this.lastLayoutName = e.layoutName)
    }
    ,
    c.prototype.updateDynamicMessage = function(e) {
        var t = null != this.message();
        e && e.text ? t && e.id === this.message().id || this.message(new i.Queue.Message(e,this.setDynamicMessageLastUpdatedTime)) : t && this.message(void 0)
    }
    ,
    c.prototype.updateTimer = function() {
        var e = this;
        setTimeout(function() {
            e.lastTryUpdate = new Date,
            e.isBeforeOrIdle() || e.showConfirmRedirectDialog() || e.isRedirectPromptDialogConfirmed || e.isClientInactive(e.detector.isHidden()),
            e.ajaxGetStatus()
        }, this.updateInterval)
    }
    ,
    c.prototype.initSoundTrack = function() {
        var t = this;
        if (!window.welcomeAudioPlayer && this.texts.isWelcomeSoundEnabled)
            try {
                this._logSoundPlayerInfo.SoundPlayer_setup_IsCalled = !0,
                window.soundManager.setup({
                    url: "/css/sound",
                    debugMode: !1,
                    preferFlash: !1,
                    onready: function() {
                        t._logSoundPlayerInfo.SoundPlayer_onready_IsCalled = !0;
                        try {
                            window.welcomeAudioPlayer = window.soundManager.createSound({
                                url: t.texts.welcomeSoundUrls
                            }),
                            t.get_firstInLine() && t.playWelcomeSound()
                        } catch (e) {
                            window.logger.Error({
                                Message: "Error initing sound file",
                                Ex: e,
                                Page: "InqueuePage"
                            }, 2063, t.eventId, t.customerId, t.options.queueId || ""),
                            t._logSoundPlayerInfo.SoundPlayer_onready_Exception = !0
                        }
                    }
                })
            } catch (e) {
                window.logger.Error({
                    Message: "Error setuping soundmanager",
                    Ex: e,
                    Page: "InqueuePage"
                }, 2064, this.eventId, this.customerId, this.options.queueId || "")
            }
    }
    ,
    c.prototype.playWelcomeSound = function(e) {
        var t = this;
        try {
            this._soundIsPlayingFlag = !0,
            setTimeout(function() {
                t._soundIsPlayingFlag = !1
            }, 1e4),
            this.texts.isWelcomeSoundEnabled && (window.welcomeAudioPlayer ? window.welcomeAudioPlayer.play({
                onfinish: function() {
                    t._soundIsPlayingFlag = !1,
                    e && e()
                }
            }) : window.logger.Debug({
                Message: "Not expected case in playing welcome sound"
            }, 2065, this.eventId, this.customerId, this.options.queueId || "", this._logSoundPlayerInfo))
        } catch (e) {
            this._soundIsPlayingFlag = !1,
            window.logger.Error({
                Message: "Error playing sound",
                Ex: e,
                Page: "InqueuePage"
            }, 2066, this.eventId, this.customerId, this.options.queueId || "")
        }
    }
    ,
    c.prototype.updateCheckTimer = function() {
        var e = this;
        setInterval(function() {
            6e4 < (new Date).getTime() - e.lastTryUpdate.getTime() && setTimeout(function() {
                12e4 < (new Date).getTime() - e.lastTryUpdate.getTime() && e.redirector.redirect()
            }, 6e4),
            3 < e.jsErrorCount && e.isRunning(!1)
        }, 2e3)
    }
    ,
    c.prototype.setupBlinkingDot = function() {
        var e = this;
        setInterval(function() {
            0 == e.jsErrorCount ? $("#defaultViewPb1").toggleClass("active") : $("#defaultViewPb1").removeClass("active")
        }, 2e3)
    }
    ,
    c.prototype.getTargetUrlHash = function() {
        return this.getQueryStringParam(this.originalUrl, "thash")
    }
    ,
    c.prototype.ajaxGetStatus = function(e, o) {
        var t, i, r, s = this;
        void 0 === e && (e = this.isRedirectPromptDialogConfirmed),
        this.isRedirected || (this._soundIsPlayingFlag ? this.updateTimer() : (t = this.hasQueueId() ? null : this.getQueryStringParam(this.originalUrl, "enqueuetoken"),
        i = this.hasQueueId() ? null : this.getQueryStringParam(this.originalUrl, "qet"),
        i = "".concat(this.getQueuePath(), "/status?") + "cid=".concat(this.options.culture || "") + "&l=".concat(this.options.layout || "") + (i ? "&qet=".concat(i) : "") + (t ? "&enqueuetoken=".concat(t) : ""),
        this.options.sdkVersion && (i += "&sdkv=" + this.options.sdkVersion),
        i += this.queueViewSession,
        r = this,
        $.ajax({
            type: "POST",
            dataType: "json",
            beforeSend: function(e) {
                r.queueItemInfoHelper.setHeaderFromCache(r.options.queueId, e)
            },
            contentType: a,
            data: JSON.stringify({
                targetUrl: this.options.targetUrl,
                targetUrlHash: this.getTargetUrlHash(),
                customUrlParams: this.options.customUrlParams,
                layoutVersion: this.lastLayoutVersion,
                layoutName: this.lastLayoutName,
                isClientRedayToRedirect: this.isBeforeOrIdle() ? null : this.GetClientReadyToRedirect(e),
                isBeforeOrIdle: this.isBeforeOrIdle()
            }),
            url: i,
            success: function(e, t, i) {
                try {
                    if (r.queueItemInfoHelper.tryCacheHeader(r.options.queueId, i),
                    e.redirectUrl) {
                        var n;
                        if (e.redirectUrl,
                        !e.isRedirectToTarget)
                            return n = e.redirectUrl,
                            void (document.location.href = n);
                        if (e.isRedirectToTarget)
                            return void s.redirectToTarget(e)
                    } else
                        e.redirectUrl,
                        s.refresh(e);
                    s.jsErrorCount = 0,
                    s.isRunning(!0)
                } catch (e) {
                    s.jsErrorCount++,
                    window.logger.Error({
                        Message: "Error refreshing client data based on GetStatus call",
                        Ex: e,
                        Page: "InqueuePage"
                    }, 2067, s.eventId, s.customerId, s.options.queueId || "")
                } finally {
                    o && o(),
                    s.updateTimer()
                }
            },
            error: function(e, t, i) {
                var n, r;
                403 !== e.status && (n = e.status + " status code received on ",
                s.isBeforeOrIdle() ? n += "before/idle page" : n += "queue page",
                s.logger.logAjaxCallError("Error calling GetStatus endpoint", "InqueuePage", e, t, i, {
                    message: n,
                    name: "GetStatusError"
                }));
                try {
                    "function" == typeof s.options.errorCallback && s.options.errorCallback(),
                    403 === e.status && (r = e.getResponseHeader("Location")) && s.redirector.redirect(r)
                } finally {
                    s.jsErrorCount++,
                    !e || 503 !== e.status && 504 !== e.status || (s.updateInterval *= 1.25,
                    2e5 < s.updateInterval && (s.updateInterval = 2e5)),
                    o && o(),
                    s.updateTimer()
                }
            }
        })))
    }
    ,
    c.prototype.redirectToTarget = function(e) {
        var t, i = this;
        this.isRedirected = !0,
        this.isRedirectedToTarget = e.isRedirectToTarget,
        this.get_firstInLine() ? this.redirector.redirect(e.redirectUrl, e.isRedirectToTarget) : (this._firstInLine = !0,
        t = setTimeout(function() {
            i.redirector.redirect(e.redirectUrl, e.isRedirectToTarget)
        }, 1e4),
        this.ticket.setProgressBar(100),
        this.playWelcomeSound(function() {
            clearTimeout(t),
            i.redirector.redirect(e.redirectUrl, e.isRedirectToTarget)
        }))
    }
    ,
    c.prototype.showWebPushRegisterUpdateResult = function(e, t) {
        $("#divWebPushStatusFrame").removeClass().show().addClass("Success" == t ? "submit_success alert alert-success" : "submit_failure alert alert-error").delay(6e4).fadeOut().click(function() {
            $(this).stop(!0, !0).fadeOut()
        }),
        $("#divWebPushStatus").html(e)
    }
    ,
    c.prototype.notifyEmailUpdateResult = function(e, t) {
        $("#divEmailStatusFrame").removeClass().show().addClass("Success" == t ? "submit_success alert alert-success" : "submit_failure alert alert-error").delay(6e4).fadeOut().click(function() {
            $(this).stop(!0, !0).fadeOut()
        }),
        $("#divEmailStatus").html(e)
    }
    ,
    c.prototype.registerForWebPush = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, r = this;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, n.Helpers.PushSubscriptionManager.registerForPush(this.webPushPublicKey)];
                case 1:
                    return (t = e.sent()) && t.Endpoint ? $.ajax({
                        type: "POST",
                        dataType: "json",
                        contentType: a,
                        data: JSON.stringify(t),
                        url: "".concat(this.getQueuePath, "/registerforwebpush/?cid=").concat(this.options.culture || "", "&l=").concat(this.options.layout),
                        success: function(e) {
                            r.showWebPushRegisterUpdateResult(e.Message, e.Status),
                            r.toggleButton("#aRegisterForWebPush", !0)
                        },
                        error: function(e, t, i) {
                            r.showWebPushRegisterUpdateResult("Error subscribing for web push", "error");
                            var n = e.status + " status code received";
                            r.logger.logAjaxCallError("Error subscribing to web push", "InqueuePage", e, t, i, {
                                message: n,
                                name: "UpdateWebPushError"
                            })
                        }
                    }) : this.showWebPushRegisterUpdateResult("Error subscribing for web push, Browser does not support Push Notification", "error"),
                    [2]
                }
            })
        })
    }
    ,
    c.prototype.setActiveClient = function() {
        var e = this;
        this.isClientInactive(!1),
        this.showConfirmRedirectDialog(!1),
        this.options.isPreview || this.ajaxGetStatus(!0, function() {
            e.isRedirectPromptDialogConfirmed = !0
        })
    }
    ,
    c.prototype.GetClientReadyToRedirect = function(e) {
        return e || !this.layout.isRedirectPromptDialogEnabled && !this.isClientInactive()
    }
    ,
    c.prototype.challengeCallback = function(r, o) {
        return __awaiter(this, void 0, void 0, function() {
            var t, i, n;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.options.isPreview ? (this.queueId(this.guid()),
                    $("body").removeClass(this.challengeClass).addClass(this.challengeSolvedClass),
                    [2]) : (t = r,
                    i = this.challengeRunner.canIssueEnqueueTokens(),
                    n = this.isQueueitEnqueueTokenRequired || i,
                    i && this.isCustomerUsingEnqueueTokenV1() && console.error("Waiting room misconfigured. Enqueue Token v1 cannot be used with current setup of waiting room. You need to disable hype protection and invite only."),
                    !n || this.isCustomerUsingEnqueueTokenV1() ? [3, 2] : (i = null == t ? void 0 : t.enqueueTokenFromChallenge,
                    [4, this.enqueue(null == t ? void 0 : t.sessions, i || o)]));
                case 1:
                    return e.sent(),
                    [3, 10];
                case 2:
                    if (this.requireKey || this.isQueueitEnqueueTokenRequired)
                        return [3, 8];
                    e.label = 3;
                case 3:
                    return e.trys.push([3, 5, , 7]),
                    [4, this.enqueue(t.sessions)];
                case 4:
                    return e.sent(),
                    [3, 7];
                case 5:
                    return e.sent(),
                    [4, this.runChallenges(this.challengeRunner, this.challengeRedirectUrls)];
                case 6:
                    return n = e.sent(),
                    this.challengeCallback(n),
                    [3, 7];
                case 7:
                    return [3, 10];
                case 8:
                    return $("body").removeClass(this.challengeClass).addClass(this.challengeSolvedClass),
                    [4, this.customData.setCaptchaSession(t.sessions)];
                case 9:
                    e.sent(),
                    e.label = 10;
                case 10:
                    return [2]
                }
            })
        })
    }
    ,
    c.prototype.onQueueIdReceived = function(e) {
        this.setQueueId(e),
        this.notifyFrames(new r(null,null,null,null,null,this.queueId(),null)),
        this.initialWindowLocation(null),
        this.continueAfterResolvingQueueId()
    }
    ,
    c.prototype.continueAfterResolvingQueueId = function() {
        this.removeURLParameter(this.originalUrl, "scv"),
        this.removeURLParameter(this.originalUrl, "enqueuetoken");
        var e = -1 === window.location.href.indexOf("?") ? "?" : "&"
          , e = window.location.href + e + "q=" + this.queueId();
        window.history.replaceState ? window.history.replaceState(null, document.title, e) : window.location.href = e,
        this.removeQueueIdParameter(),
        this.options.isPreview || this.start()
    }
    ,
    c.prototype.isClientInBeforeState = function() {
        return "before" === $("body").attr("data-pageid")
    }
    ,
    c.prototype.trySwitchBeforePageToQueue = function() {
        this.isClientInBeforeState() && ($("body").attr("data-pageid", "queue").addClass("queue").removeClass("prequeue").removeClass("before").removeClass("idle"),
        this.doStatusChangeCallbacks("queue"),
        this.texts.switchBeforeToQueueTexts(),
        this.isBeforeOrIdle(!1))
    }
    ,
    c.prototype.onReady = function() {
        var e, t = this, i = (this.hasQueueId() && this.removeURLParameter(this.originalUrl, "scv"),
        this.removeQueueIdParameter(),
        this.options.culture), n = this.isBeforeOrIdle() ? "before" : "queue", r = (this.isBeforeOrIdle() && ((r = $).countdown.setDefaults(r.countdown.regional[i]),
        e = this.ticket.secondsToStart(),
        r("#defaultCountdown").countdown({
            until: e,
            format: "dhmS",
            layout: '{d<}{dnn} <span class="countdown_label">{dl}</span>{d>} {h<}{hnn} <span class="countdown_label">{hl}</span>{h>} {m<}{mnn} <span class="countdown_label">{ml}</span>{m>} {snn} <span class="countdown_label">{sl}</span>',
            expiryText: '<div class="finished">' + this.texts.countdownFinishedText + " </div>",
            onExpiry: function() {
                return t.trySwitchBeforePageToQueue()
            }
        }),
        0 === e) && this.trySwitchBeforePageToQueue(),
        this.message() ? this.message().timeSpanSeconds : 60);
        this.initializeDynamicMessageLastUpdatedTimer(r, i),
        s.prototype.onReady.call(this, n)
    }
    ,
    c.prototype.removeQueueIdParameter = function() {
        this.initialWindowLocation() || this.initialWindowLocation(window.location.toString());
        var e = window.location.href.indexOf("&q=");
        -1 != e && this.hasEventCookie() && (e = window.location.href.substr(e, 39),
        e = window.location.href.replace(e, ""),
        window.history.replaceState) && window.history.replaceState(null, document.title, e)
    }
    ,
    c.prototype.hasEventCookie = function() {
        var e = "Queue-it-" + (new i.Tools.StringUtil).padRight(Array(21).join("_"), this.customerId) + this.eventId;
        return null != (new i.Tools.CookieUtil).getCookie(e)
    }
    ,
    c.prototype.receiveMessage = function(e, t) {
        "RequestRefresh" === e.messageType && this.notifyFrames(new r(this.isBeforeOrIdle() ? null : parseInt(t.ticket.queueNumber()),this.isBeforeOrIdle() ? null : t.ticket.usersInLineAheadOfYou(),this.isBeforeOrIdle() ? "before" : "queue",this.getTargetUrlParams(),this.options.targetUrl,this.queueId(),null != this.options.inqueueInfo.texts ? this.options.inqueueInfo.texts.tags : null))
    }
    ,
    c.prototype.toggleButton = function(e, t) {
        $(e).prop("disabled", t),
        t ? $(e).addClass("btn-disabled") : $(e).removeClass("btn-disabled")
    }
    ,
    c.prototype.toggleQueueIdLinkModal = function(e, t) {
        if ($(t.target).hasClass("btn-close"))
            t.stopPropagation();
        else if ($(t.target).parents(".modal-content").length)
            return;
        this.clipboard || (this.clipboard = new ClipboardJS(".btn")),
        this.queueIdLinkModalVisible(!this.queueIdLinkModalVisible())
    }
    ,
    c.prototype.onEnterToggleQueueIdLinkModal = function(e, t) {
        t.keyCode === i.Queue.Helpers.KeyCode.Enter && this.toggleQueueIdLinkModal(e, t)
    }
    ,
    c.prototype.guid = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }
    ,
    c.prototype.getQueryStringParam = function(e, t) {
        for (var i = 0, n = e.substring(e.indexOf("?") + 1).split("&"); i < n.length; i++) {
            var r = n[i];
            if (r.split("=")[0] == t)
                return r.split("=")[1]
        }
    }
    ,
    c.prototype.tryGetSoftblockValidationsessionInfofromUrl = function() {
        return this.getQueryStringParam(this.originalUrl, "scv")
    }
    ,
    c.prototype.removeURLParameter = function(e, t) {
        if (e = e.split("?"),
        window.history.replaceState && 2 <= e.length) {
            for (var i = encodeURIComponent(t) + "=", n = e[1].split(/[&;]/g), r = n.length; 0 < r--; )
                -1 !== n[r].lastIndexOf(i, 0) && n.splice(r, 1);
            t = e[0] + (0 < n.length ? "?" + n.join("&") : ""),
            window.history.replaceState(null, document.title, t)
        }
    }
    ,
    c.prototype.initQueueViewSession = function() {
        this.queueViewSession = "&seid=" + this.guid() + "&sets=" + this.getSessionTS()
    }
    ,
    c.prototype.getSessionTS = function() {
        return Date.now || (Date.now = function() {
            return (new Date).getTime()
        }
        ),
        Date.now().toString()
    }
    ,
    n.InQueueView = c
}
)(QueueIt = QueueIt || {}),
(e => {
    function t() {
        var e = this;
        try {
            document.addEventListener("visibilitychange", function() {
                return e.handleVisibilityChange()
            }, !1)
        } catch (e) {
            window.logger.Debug({
                Message: "Error in adding visibilitychange",
                Ex: e
            }, 2053)
        }
        try {
            document.addEventListener("mozvisibilitychange", function() {
                return e.handleVisibilityChange()
            }, !1)
        } catch (e) {
            window.logger.Debug({
                Message: "Error in adding mozvisibilitychange",
                Ex: e
            }, 2054)
        }
        try {
            document.addEventListener("webkitvisibilitychange", function() {
                return e.handleVisibilityChange()
            }, !1)
        } catch (e) {
            window.logger.Debug({
                Message: "Error in adding webkitvisibilitychange",
                Ex: e
            }, 2055)
        }
        try {
            document.addEventListener("msvisibilitychange", function() {
                return e.handleVisibilityChange()
            }, !1)
        } catch (e) {
            window.logger.Debug({
                Message: "Error in adding msvisibilitychange",
                Ex: e
            }, 2056)
        }
    }
    e = e.Queue || (e.Queue = {}),
    t.prototype.handleVisibilityChange = function() {
        var e = document;
        this._isHidden = e.hidden || e.mozHidden || e.webkitHidden || e.msHidden
    }
    ,
    t.prototype.isHidden = function() {
        return this._isHidden
    }
    ,
    e.InactivityDetector = t
}
)(QueueIt = QueueIt || {}),
(i => {
    var e;
    function t(e) {
        this.body = ko.observable(),
        this.disclaimerText = ko.observable(),
        this.header = ko.observable(),
        this.queueBody = ko.observable(),
        this.queueHeader = ko.observable(),
        this.bottompanelIFrameSrc = ko.observable(),
        this.leftpanelIFrameSrc = ko.observable(),
        this.logoSrc = ko.observable(),
        this.middlepanelIFrameSrc = ko.observable(),
        this.rightpanelIFrameSrc = ko.observable(),
        this.sidepanelIFrameSrc = ko.observable(),
        this.toppanelIFrameSrc = ko.observable(),
        this.whatIsThisUrl = ko.observable(),
        this.cookiesInfoClass = ko.observable(),
        this.cookiesInfoText = ko.observable(),
        this.cookiesInfoTooltip = ko.observable(),
        this.refresh(e)
    }
    e = i.Queue || (i.Queue = {}),
    t.prototype.refresh = function(e) {
        var t = e.inQueueTexts;
        t && (this.welcomeSoundUrls = t.welcomeSoundUrls,
        this.isWelcomeSoundEnabled = this.welcomeSoundUrls && 0 < this.welcomeSoundUrls.length,
        e.isBeforeOrIdle && 0 === e.secondsToStart ? (this.body() != t.queueBody && this.body(t.queueBody),
        this.header() != t.queueHeader && this.header(t.queueHeader)) : (this.body() != t.body && this.body(t.body),
        this.header() != t.header && this.header(t.header)),
        this.disclaimerText() != t.disclaimerText && this.disclaimerText(t.disclaimerText),
        this.queueBody() != t.queueBody && this.queueBody(t.queueBody),
        this.queueHeader() != t.queueHeader && this.queueHeader(t.queueHeader),
        this.logoSrc() != t.logoSrc && this.logoSrc(t.logoSrc),
        this.styleSheets = t.styleSheets,
        this.sidepanelIFrameSrc() != t.sidepanelIFrameSrc && this.sidepanelIFrameSrc(t.sidepanelIFrameSrc),
        this.toppanelIFrameSrc() != t.toppanelIFrameSrc && this.toppanelIFrameSrc(t.toppanelIFrameSrc),
        this.rightpanelIFrameSrc() != t.rightpanelIFrameSrc && this.rightpanelIFrameSrc(t.rightpanelIFrameSrc),
        this.middlepanelIFrameSrc() != t.middlepanelIFrameSrc && this.middlepanelIFrameSrc(t.middlepanelIFrameSrc),
        this.leftpanelIFrameSrc() != t.leftpanelIFrameSrc && this.leftpanelIFrameSrc(t.leftpanelIFrameSrc),
        this.bottompanelIFrameSrc() != t.bottompanelIFrameSrc && this.bottompanelIFrameSrc(t.bottompanelIFrameSrc),
        this.whatIsThisUrl() != t.whatIsThisUrl && this.whatIsThisUrl(t.whatIsThisUrl),
        this.countdownFinishedText != t.countdownFinishedText && (this.countdownFinishedText = t.countdownFinishedText),
        i.Queue.Helpers.CookieHelper.isCookieEnabled() ? (this.cookiesInfoText() != t.cookiesAllowedInfoText && this.cookiesInfoText(t.cookiesAllowedInfoText),
        this.cookiesInfoTooltip() != t.cookiesAllowedInfoTooltip && this.cookiesInfoTooltip(t.cookiesAllowedInfoTooltip),
        "cookiesAllowed" != this.cookiesInfoClass() && this.cookiesInfoClass("cookiesAllowed")) : (this.cookiesInfoText() != t.cookiesNotAllowedInfoText && this.cookiesInfoText(t.cookiesNotAllowedInfoText),
        this.cookiesInfoTooltip() != t.cookiesNotAllowedInfoTooltip && this.cookiesInfoTooltip(t.cookiesNotAllowedInfoTooltip),
        "cookiesNotAllowed" != this.cookiesInfoClass() && this.cookiesInfoClass("cookiesNotAllowed")))
    }
    ,
    t.prototype.switchBeforeToQueueTexts = function() {
        this.body(this.queueBody()),
        this.header(this.queueHeader())
    }
    ,
    e.InQueueTexts = t
}
)(QueueIt = QueueIt || {}),
(e => {
    var s;
    function t(e) {
        var o = this;
        this.whenClosedPreventChangeWithKeyboard = function(e, t) {
            var i = t.altKey
              , n = t.keyCode === s.Helpers.KeyCode.ArrowDown
              , r = t.keyCode === s.Helpers.KeyCode.ArrowUp;
            return !(!i || !n && !r) || !!o.isKeyAllowed(t.keyCode)
        }
        ,
        this.isKeyAllowed = function(e) {
            return e !== s.Helpers.KeyCode.ArrowUp && e !== s.Helpers.KeyCode.ArrowRight && e !== s.Helpers.KeyCode.ArrowDown && e !== s.Helpers.KeyCode.ArrowLeft && e !== s.Helpers.KeyCode.PageUp && e !== s.Helpers.KeyCode.PageDown && e !== s.Helpers.KeyCode.Home && e !== s.Helpers.KeyCode.End
        }
        ,
        this.languages = ko.observableArray(),
        this.languageSelectorVisible = ko.observable(),
        this.selectedLanguage = ko.observable(e.selectedLanguage),
        this.refreshLanguageSelector(e, Boolean(e.languageSelectorVisible))
    }
    s = e.Queue || (e.Queue = {}),
    t.prototype.changeLanguage = function() {
        var e = document.location.href
          , t = e.split("?");
        if (2 <= t.length) {
            for (var i = encodeURIComponent("cid") + "=", n = t[1].split(/[&;]/g), r = n.length - 1; 0 <= r; r--)
                -1 !== n[r].lastIndexOf(i, 0) && n.splice(r, 1);
            e = t[0] + "?" + n.join("&")
        }
        document.location.href = e + "&cid=" + this.selectedLanguage()
    }
    ,
    t.prototype.refreshLanguageSelector = function(e, t) {
        var i = this;
        if (this.languageSelectorVisible(t),
        e.languages) {
            for (var n = [], r = 0; r < e.languages.length; ++r)
                n.push({
                    text: e.languages[r].Text,
                    value: e.languages[r].Value
                }),
                e.languages[r].Selected && this.selectedLanguage(e.languages[r].Value);
            JSON.stringify(this.languages()) !== JSON.stringify(n) && (this._selectedLanguageSubscribe && this._selectedLanguageSubscribe.dispose(),
            this.languages.removeAll(),
            this.languages(n),
            this._selectedLanguageSubscribe = this.selectedLanguage.subscribe(function() {
                return i.changeLanguage()
            }))
        }
    }
    ,
    s.LanguageSelector = t
}
)(QueueIt = QueueIt || {}),
(e => {
    function t(e, t, i) {
        var n = this;
        this.servicedSoonDelayLengthMS = 15e3,
        this.firstInLineTimeStamp = null,
        this.bottomPanelVisible = ko.observable(),
        this.dynamicMessageVisible = ko.observable(),
        this.expectedServiceTimeVisible = ko.observable(),
        this.firstInLineVisible = ko.observable(),
        this.leftPanelVisible = ko.observable(),
        this.middlePanelVisible = ko.observable(),
        this.queueIsPausedVisible = ko.observable(),
        this.queueNumberVisible = ko.observable(),
        this.queueNumberLoadingVisible = ko.observable(),
        this.reminderEmailVisible = ko.observable(),
        this.reminderVisible = ko.observable(),
        this.rightPanelVisible = ko.observable(),
        this.servicedSoonVisible = ko.observable(),
        this.sidePanelVisible = ko.observable(),
        this.topPanelVisible = ko.observable(),
        this.usersInLineAheadOfYouVisible = ko.observable(),
        this.usersInQueueVisible = ko.observable(),
        this.logoVisible = ko.observable(),
        this.whichIsInVisible = ko.observable(),
        this.progressVisible = ko.observable(),
        this.servicedSoonDelayVisible = ko.observable(!1),
        this.languageSelectorVisible = ko.observable(),
        this.shouldShowReminder = ko.computed(function() {
            return !!n.reminderVisible() && n.reminderEmailVisible()
        }),
        this.refresh(e, i)
    }
    e = e.Queue || (e.Queue = {}),
    t.prototype.refresh = function(e, t) {
        e && (this.isRedirectPromptDialogEnabled = e.isRedirectPromptDialogEnabled,
        this.bottomPanelVisible(e.bottomPanelVisible),
        this.dynamicMessageVisible(e.dynamicMessageVisible),
        this.expectedServiceTimeVisible(e.expectedServiceTimeVisible && !t),
        this.firstInLineVisible(t || e.firstInLineVisible),
        this.leftPanelVisible(e.leftPanelVisible),
        this.middlePanelVisible(e.middlePanelVisible),
        this.queueIsPausedVisible(e.queueIsPausedVisible),
        this.queueNumberVisible(e.queueNumberVisible),
        this.queueNumberLoadingVisible(e.queueNumberLoadingVisible),
        this.reminderEmailVisible(e.reminderEmailVisible),
        this.reminderVisible(e.reminderVisible),
        this.rightPanelVisible(e.rightPanelVisible),
        this.servicedSoonVisible(t && !e.queueIsPausedVisible),
        this.sidePanelVisible(e.sidePanelVisible),
        this.topPanelVisible(e.topPanelVisible),
        this.usersInLineAheadOfYouVisible(e.usersInLineAheadOfYouVisible && !t),
        this.usersInQueueVisible(e.usersInQueueVisible),
        this.logoVisible(e.logoVisible),
        this.whichIsInVisible(e.whichIsInVisible && !t),
        this.progressVisible(e.progressVisible),
        this.languageSelectorVisible(e.languageSelectorVisible),
        t && null == this.firstInLineTimeStamp ? this.firstInLineTimeStamp = new Date : t && null != this.firstInLineTimeStamp && !this.servicedSoonDelayVisible() && Date.now() - this.firstInLineTimeStamp.valueOf() > this.servicedSoonDelayLengthMS && this.servicedSoonDelayVisible(!0))
    }
    ,
    e.Layout = t
}
)(QueueIt = QueueIt || {}),
(e => {
    (e.Queue || (e.Queue = {})).Message = function(e, t) {
        this.header = null == e ? null : e.header,
        this.id = null == e ? null : e.id,
        this.text = null == e ? null : e.text,
        this.timestamp = e && e.timestamp ? new Date(e.timestamp) : new Date,
        this.timestampFormatted = null == e ? null : e.timestampFormatted,
        this.timeZonePostfix = null == e ? null : e.timeZonePostfix,
        this.timeSpanSeconds = null == e ? null : 60 < e.timeSpanSeconds ? e.timeSpanSeconds : 60,
        t(this.timeSpanSeconds)
    }
}
)(QueueIt = QueueIt || {}),
(e => {
    function i() {
        this.cache = {}
    }
    e = e.Queue || (e.Queue = {}),
    i.prototype.tryCacheHeader = function(e, t) {
        e && (t = t && t.getResponseHeader(i.HeaderName)) && (this.cache[e] = t)
    }
    ,
    i.prototype.setHeaderFromCache = function(e, t) {
        e && t && (e = this.cache[e]) && t.setRequestHeader(i.HeaderName, e)
    }
    ,
    i.HeaderName = "X-Queueit-Queueitem-V1",
    e.QueueItemInfoHelper = i
}
)(QueueIt = QueueIt || {}),
(e => {
    var i, n;
    function t(e) {
        var t = n.call(this, e) || this;
        return t.pageId = "softblock",
        t.options = e,
        t.notifyFrames(new i.UpdateQueueFrameDto(null,null,t.pageId,new Array,null,null,t.options.tags)),
        t.challengeRedirectUrls = new i.ChallengeRedirectUrls(e),
        t.challengeRunner = new i.ChallengeRunner(e,t.userId),
        t.challengeRunner.init(),
        t.runChallenges(t.challengeRunner, t.challengeRedirectUrls).then(function(e) {
            return t.challengeCallback(e)
        }),
        t
    }
    i = e.Queue || (e.Queue = {}),
    n = i.ViewBase,
    __extends(t, n),
    t.prototype.challengeCallback = function(i) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                return null != (t = i) && (window.location.href = "".concat(decodeURIComponent(this.options.inqueueUrl), "&scv=").concat(encodeURIComponent(JSON.stringify(t.sessions[0])))),
                [2]
            })
        })
    }
    ,
    t.prototype.receiveMessage = function(e) {
        "RequestRefresh" === e.messageType && this.notifyFrames(new i.UpdateQueueFrameDto(null,null,"softblock",new Array,null,null,this.options.tags))
    }
    ,
    i.SoftblockViewModel = t
}
)(QueueIt = QueueIt || {}),
(e => {
    function t(e) {
        var t = this;
        this.isReady = !1,
        this.expectedServiceTime = ko.observable(),
        this.lastUpdated = ko.observable(),
        this.queueNumber = ko.observable(),
        this.usersInLineAheadOfYou = ko.observable(),
        this.whichIsIn = ko.observable(),
        this.progress = ko.observable(.01),
        this.timeZonePostfix = ko.observable(),
        this.windowStartTime = ko.observable(),
        this.eventStartTimeFormatted = ko.observable(),
        this.secondsToStart = ko.observable(),
        this.usersInQueue = ko.observable(0),
        this.refresh(e),
        $(window).on("load", function() {
            t.isReady = !0,
            t.setProgressBar(100 * t.progress())
        })
    }
    e = e.Queue || (e.Queue = {}),
    t.prototype.refresh = function(e) {
        var t;
        e && (this.expectedServiceTime() != e.expectedServiceTime && this.expectedServiceTime(e.expectedServiceTime),
        this.lastUpdated() != e.lastUpdated && this.lastUpdated(e.lastUpdated),
        this.queueNumber() != e.queueNumber && this.queueNumber(e.queueNumber),
        t = parseInt(e.usersInLineAheadOfYou),
        this.usersInLineAheadOfYou() != t && (isNaN(this.usersInLineAheadOfYou()) || isNaN(t) || this.usersInLineAheadOfYou() > t) && this.usersInLineAheadOfYou(t),
        this.whichIsIn() != e.whichIsIn && this.whichIsIn(e.whichIsIn),
        null != e.progress && e.progress != this.progress() && (this.progress(e.progress),
        this.setProgressBar(100 * this.progress())),
        this.timeZonePostfix(e.timeZonePostfix),
        !this.windowStartTime() && e.windowStartTime && this.windowStartTime(e.windowStartTime),
        this.eventStartTimeFormatted(e.eventStartTimeFormatted),
        this.secondsToStart(e.secondsToStart),
        this.usersInQueue(e.usersInQueue))
    }
    ,
    t.prototype.setProgressBar = function(e) {
        this.isReady && window.progressBar(e, $(".progressbar"))
    }
    ,
    e.Ticket = t
}
)(QueueIt = QueueIt || {}),
(e => {
    (e = e.Queue || (e.Queue = {})).isRunErrorResult = function(e) {
        return "error" === e.type
    }
    ,
    e.isRunAllRetriesUsedResult = function(e) {
        return "AllTriesUsed" === e.type
    }
}
)(QueueIt = QueueIt || {}),
(e => {
    var t;
    function i(e, t, i) {
        void 0 === i && (i = "challenge-container"),
        this.hasAnimation = e,
        this.options = t,
        this.targetContainerId = i,
        this.challengeVerifyProvider = "akamaiBotManagerHeaderVerification",
        this.scriptSource = t.akamaiBotManagerHeaderVerificationSource,
        this.host = t.akamaiBotManagerHeaderVerificationSource,
        this.culture = t.culture,
        this.loadedCallbackName = "akamaiBotManagerHeaderVerificationLoadedCallback"
    }
    t = e.Queue || (e.Queue = {}),
    i.prototype.getName = function() {
        return t.ChallengeType.AkamaiBotManagerHeaderVerification
    }
    ,
    i.prototype.getChallengeVerifyProvider = function() {
        return this.challengeVerifyProvider
    }
    ,
    i.prototype.shouldDisplayAnimation = function() {
        return this.hasAnimation
    }
    ,
    i.prototype.doesIssueEnqueueTokens = function() {
        return !0
    }
    ,
    i.prototype.init = function() {
        return __awaiter(this, void 0, void 0, function() {
            var o = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(t, i) {
                    window[o.loadedCallbackName] = function() {
                        var e;
                        window[o.challengeVerifyProvider] ? t() : (e = {
                            type: "initError",
                            message: o.challengeVerifyProvider + " is not found in window"
                        },
                        i(e)),
                        delete window[o.loadedCallbackName]
                    }
                    ;
                    var n = document.createElement("script")
                      , r = document.head || document.getElementsByTagName("head")[0];
                    n.async = !0,
                    n.src = o.scriptSource,
                    n.setAttribute("data-host", o.host),
                    n.type = "text/javascript",
                    n.defer = !0,
                    n.onerror = function() {
                        var e = {
                            type: "initError",
                            message: "Failed to load script",
                            blockedUrl: o.scriptSource
                        };
                        r.removeChild(n),
                        i(e)
                    }
                    ,
                    r.appendChild(n)
                }
                )]
            })
        })
    }
    ,
    i.prototype.run = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = window[this.challengeVerifyProvider]) && t.reset(),
                    [4, this.internalRun()];
                case 1:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    i.prototype.internalRun = function() {
        return __awaiter(this, void 0, void 0, function() {
            var i = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(t, e) {
                    i.internalResolve = function(e) {
                        t(e)
                    }
                    ,
                    window[i.challengeVerifyProvider].render(i.targetContainerId, {
                        challengesIssuedByReason: i.options.challengesIssuedByReason,
                        VerificationCallback: i.internalResolve,
                        errorHandler: function(e) {
                            t({
                                type: "error",
                                message: "string" == typeof e ? e : e.errorText || "Unknown error"
                            })
                        },
                        culture: i.culture,
                        host: i.host,
                        queuePathPrefix: i.options.queuePathPrefix,
                        customerId: i.options.customerId,
                        waitingRoomId: i.options.eventId
                    })
                }
                )]
            })
        })
    }
    ,
    i.prototype.cleanup = function() {
        for (var e = document.getElementById(this.targetContainerId); e.firstChild && e.removeChild(e.firstChild); )
            ;
    }
    ,
    t.AkamaiBotManagerHeaderVerificationChallengeRun = i
}
)(QueueIt = QueueIt || {}),
(e => {
    var s;
    function t(e, t, i, n) {
        void 0 === n && (n = "challenge-container"),
        this.hasAnimation = e,
        this.options = t,
        this.userId = i,
        this.targetContainerId = n,
        this.hasRun = !1,
        this.loadedCallbackName = "loadChallengeWidget",
        this.scriptSource = this.options.botDetectSource,
        this.host = this.options.botDetectHost,
        this.challengeVerifyProvider = "botdetect"
    }
    s = e.Queue || (e.Queue = {}),
    t.prototype.getName = function() {
        return s.ChallengeType.BotDetect
    }
    ,
    t.prototype.getChallengeVerifyProvider = function() {
        return this.challengeVerifyProvider
    }
    ,
    t.prototype.shouldDisplayAnimation = function() {
        return this.hasAnimation
    }
    ,
    t.prototype.doesIssueEnqueueTokens = function() {
        return !1
    }
    ,
    t.prototype.init = function() {
        return __awaiter(this, void 0, void 0, function() {
            var o = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(t, i) {
                    window[o.loadedCallbackName] = function() {
                        var e;
                        window.botdetect && document.getElementById(o.targetContainerId) ? t() : (e = {
                            type: "initError",
                            message: "botdetect is not found in window",
                            challengeType: s.ChallengeType.BotDetect
                        },
                        i(e)),
                        delete window[o.loadedCallbackName]
                    }
                    ;
                    var n = document.createElement("script")
                      , r = document.head || document.getElementsByTagName("head")[0];
                    n.async = !0,
                    n.src = o.scriptSource,
                    n.setAttribute("data-host", o.host),
                    n.type = "text/javascript",
                    n.defer = !0,
                    n.onerror = function() {
                        var e = {
                            type: "initError",
                            message: "Failed to load script",
                            challengeType: s.ChallengeType.BotDetect,
                            blockedUrl: o.scriptSource
                        };
                        r.removeChild(n),
                        i(e)
                    }
                    ,
                    r.appendChild(n)
                }
                )]
            })
        })
    }
    ,
    t.prototype.canRetry = function() {
        return botdetect.canRetry()
    }
    ,
    t.prototype.run = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.hasRun ? this.canRetry() ? [4, this.internalRetry()] : [2, {
                        type: "AllTriesUsed"
                    }] : [3, 2];
                case 1:
                    return [2, e.sent()];
                case 2:
                    return [4, this.internalRun()];
                case 3:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    t.prototype.internalRun = function() {
        return __awaiter(this, void 0, void 0, function() {
            var r = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(t) {
                    r.internalResolve = function(e) {
                        r.hasRun = !0,
                        t(e)
                    }
                    ,
                    botdetect.render("challenge-container", {
                        callback: function(e, t, i, n) {
                            r.hasRun = !0,
                            r.resolver({
                                type: "success",
                                sessionId: e,
                                challengeDetails: t,
                                solution: i,
                                solverStats: n
                            })
                        },
                        errorHandler: function(e) {
                            function t(e) {
                                r.resolver({
                                    type: "error",
                                    message: e
                                })
                            }
                            var i;
                            "string" == typeof e ? t(e) : e.errorCodes && 0 <= (null == (i = e.errorCodes) ? void 0 : i.indexOf("AllTriesUsed")) ? r.resolver({
                                type: "AllTriesUsed"
                            }) : t(e.errorText)
                        },
                        challengesIssuedByReason: r.options.challengesIssuedByReason,
                        culture: r.options.culture,
                        tags: {
                            CustomerId: r.options.customerId,
                            EventId: r.options.eventId,
                            Hash: r.options.challengeApiChecksumHash
                        },
                        queuePathPrefix: r.options.queuePathPrefix
                    })
                }
                )]
            })
        })
    }
    ,
    t.prototype.internalRetry = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(e) {
                    t.internalResolve = e,
                    botdetect.reset()
                }
                )]
            })
        })
    }
    ,
    t.prototype.cleanup = function() {}
    ,
    t.prototype.resolver = function(e) {
        this.internalResolve(e)
    }
    ,
    s.BotDetectRun = t
}
)(QueueIt = QueueIt || {}),
(e => {
    var r;
    function t(e) {
        this.options = e,
        this.fraudProtectionBasePath = "".concat(e.queuePathPrefix, "/fraudprotection")
    }
    r = e.Queue || (e.Queue = {}),
    t.prototype.getTimeoutRedirectUrl = function() {
        return this.appendOptionsToRedirectUrl(this.fraudProtectionBasePath + "/challengesolvetimeout")
    }
    ,
    t.prototype.getRetriesUsedUpRedirectUrl = function(e) {
        return this.appendOptionsToRedirectUrl("".concat(this.fraudProtectionBasePath, "/challengeretriesusedup")) + "&challengeType=".concat(e.challengeType, "& message=").concat(e.message)
    }
    ,
    t.prototype.getGeneralErrorRedirectUrl = function(e) {
        return this.appendOptionsToRedirectUrl("".concat(this.fraudProtectionBasePath, "/challengegeneralerror")) + "&challengeType=".concat(e.errorChallengeType, "&message=").concat(e.message)
    }
    ,
    t.prototype.getChallengeInitErrorRedirectUrl = function(e) {
        return this.appendOptionsToRedirectUrl("".concat(this.fraudProtectionBasePath, "/challengeiniterror")) + "&challengeType=".concat(e.challengeType, "&blockedUrl=").concat(encodeURIComponent(e.blockedUrl))
    }
    ,
    t.prototype.getGenericErrorRedirectUrl = function(e) {
        return this.appendOptionsToRedirectUrl("".concat(this.fraudProtectionBasePath, "/challengegeneralerror")) + "&message=".concat(e)
    }
    ,
    t.prototype.appendOptionsToRedirectUrl = function(e) {
        return e += "?c=" + this.options.customerId + "&e=" + this.options.eventId,
        this.options.targetUrl && (e += "&t=" + this.options.targetUrl),
        this.options.layout && (e += "&l=" + this.options.layout),
        this.options.customUrlParams ? this.addTargetUrlParams(e) : e
    }
    ,
    t.prototype.addTargetUrlParams = function(e) {
        for (var t = 0, i = r.getTargetUrlParams(this.options.customUrlParams); t < i.length; t++) {
            var n = i[t];
            e += "&t_" + n.key + "=" + n.value
        }
        return e
    }
    ,
    r.ChallengeRedirectUrls = t
}
)(QueueIt = QueueIt || {}),
(e => {
    (e = e.Queue || (e.Queue = {})).isRunnerSuccessResult = function(e) {
        return "success" === e.type
    }
    ,
    e.isRunnerInitErrorResult = function(e) {
        return "initError" === e.type
    }
    ,
    e.isRunnerNotVerifiedResult = function(e) {
        return "notVerified" === e.type
    }
    ,
    e.isRunnerVerifyErrorResult = function(e) {
        return "verifyError" === e.type
    }
    ,
    e.isRunnerRetriesErrorResult = function(e) {
        return "retriesUsedUpError" === e.type
    }
    ,
    e.isRunnerProviderErrorResult = function(e) {
        return "providerError" === e.type
    }
    ,
    e.hasErrorCodeWrongUserInput = function(e) {
        return !e.errorCodes || 0 === e.errorCodes.length || 0 <= e.errorCodes.indexOf("WrongUserInput")
    }
    ,
    (e = e.ChallengeType || (e.ChallengeType = {})).None = "None",
    e.Recaptcha = "Recaptcha",
    e.RecaptchaInvisible = "RecaptchaInvisible",
    e.ProofOfWork = "ProofOfWork",
    e.ProofOfWorkAlias = "POW",
    e.BotDetect = "BotDetect",
    e.InviteOnlyEmailVerification = "InviteOnlyEmailVerification",
    e.AkamaiBotManagerHeaderVerification = "AkamaiBotManagerHeaderVerification"
}
)(QueueIt = QueueIt || {}),
(e => {
    var h;
    function t(e, t, i) {
        this.customerId = e,
        this.eventId = t,
        this.challengeVerifyEndpoint = i
    }
    h = e.Queue || (e.Queue = {}),
    t.prototype.verify = function(s, a, u, l, c) {
        return __awaiter(this, void 0, void 0, function() {
            var t, i, n, r, o = this;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    t = function(t) {
                        return polly().handle(function(e) {
                            return 500 <= e.status
                        }).waitAndRetry([300, 900, 2700, 8100, 1e4]).executeForPromise(function() {
                            return __awaiter(o, void 0, void 0, function() {
                                return __generator(this, function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return [4, $.ajax({
                                            type: "POST",
                                            dataType: "json",
                                            contentType: "application/json",
                                            data: JSON.stringify({
                                                challengeType: s,
                                                sessionId: a,
                                                challengeDetails: u,
                                                solution: l,
                                                stats: c,
                                                customerId: this.customerId,
                                                eventId: this.eventId,
                                                version: 6
                                            }),
                                            url: t
                                        })];
                                    case 1:
                                        return [2, e.sent()]
                                    }
                                })
                            })
                        })
                    }
                    ,
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, t(this.challengeVerifyEndpoint)];
                case 2:
                    return (i = e.sent()).isVerified ? [2, {
                        responseType: "verified",
                        sessionInfo: i.sessionInfo
                    }] : [2, {
                        responseType: "notVerified",
                        message: i.sessionInfo ? "Challenge not verified" : "No challenge session info returned",
                        errorCodes: i.errorCodes || []
                    }];
                case 3:
                    return i = e.sent(),
                    void 0 !== (n = i).status ? 400 <= n.status && n.status < 500 ? (r = n.responseJSON,
                    Array.isArray(r) ? [2, {
                        responseType: "notVerified",
                        message: "Challenge not verified",
                        errorCodes: r
                    }] : [2, {
                        responseType: "notVerified",
                        message: "Challenge not verified",
                        errorCodes: r.errorCodes || []
                    }]) : [2, {
                        responseType: "error",
                        error: new h.ChallengeVerifyAjaxError({
                            Message: "Unable to verify",
                            AjaxErrorLog: {
                                HttpStatus: n.status,
                                AjaxErrorStatus: n.statusText,
                                AjaxErrorThrown: n.responseText
                            },
                            JqXHR: n
                        }),
                        message: n.statusText
                    }] : [2, {
                        responseType: "error",
                        error: new h.ChallengeVerifyAjaxError({
                            Message: i,
                            AjaxErrorLog: null,
                            JqXHR: null
                        }),
                        message: i
                    }];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    h.ChallengeVerifier = t
}
)(QueueIt = QueueIt || {}),
(e => {
    (e = e.Queue || (e.Queue = {})).ChallengeVerifyAjaxError = function(e) {
        this.innerError = e
    }
    ,
    e.isVerifierVerifiedResponse = function(e) {
        return "verified" === e.responseType
    }
    ,
    e.isVerifierErrorResponse = function(e) {
        return "error" === e.responseType
    }
    ,
    e.isVerifierNotVerifiedResponse = function(e) {
        return "notVerified" === e.responseType
    }
}
)(QueueIt = QueueIt || {}),
(e => {
    var t;
    function i(e, t, i) {
        void 0 === i && (i = "challenge-container"),
        this.hasAnimation = e,
        this.options = t,
        this.targetContainerId = i,
        this.challengeVerifyProvider = "inviteOnlyEmailVerification",
        this.scriptSource = t.inviteOnlyEmailVerificationSource,
        this.host = t.inviteOnlyEmailVerificationHost,
        this.culture = t.culture,
        this.loadedCallbackName = "loadInviteOnlyEmailVerificationChallengeWidget"
    }
    t = e.Queue || (e.Queue = {}),
    i.prototype.getName = function() {
        return t.ChallengeType.InviteOnlyEmailVerification
    }
    ,
    i.prototype.getChallengeVerifyProvider = function() {
        return this.challengeVerifyProvider
    }
    ,
    i.prototype.shouldDisplayAnimation = function() {
        return this.hasAnimation
    }
    ,
    i.prototype.doesIssueEnqueueTokens = function() {
        return !0
    }
    ,
    i.prototype.init = function() {
        return __awaiter(this, void 0, void 0, function() {
            var r = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(e, t) {
                    window[r.loadedCallbackName] = function() {
                        window.inviteOnlyEmailVerification ? e() : t({
                            type: "initError",
                            message: "inviteOnlyEmailVerification is not found in window"
                        }),
                        delete window[r.loadedCallbackName]
                    }
                    ;
                    var i = document.createElement("script")
                      , n = document.head || document.getElementsByTagName("head")[0];
                    i.async = !0,
                    i.src = r.scriptSource,
                    i.setAttribute("data-host", r.host),
                    i.type = "text/javascript",
                    i.defer = !0,
                    i.onerror = function() {
                        var e = {
                            type: "initError",
                            message: "Failed to load script",
                            blockedUrl: r.scriptSource
                        };
                        n.removeChild(i),
                        t(e)
                    }
                    ,
                    n.appendChild(i)
                }
                )]
            })
        })
    }
    ,
    i.prototype.run = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, this.internalRun()];
                case 1:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    i.prototype.internalRun = function() {
        return __awaiter(this, void 0, void 0, function() {
            var i = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(t, e) {
                    i.internalResolve = function(e) {
                        t(e)
                    }
                    ,
                    window.inviteOnlyEmailVerification.render(i.targetContainerId, {
                        challengesIssuedByReason: i.options.challengesIssuedByReason,
                        InviteOnlyEmailVerificationCallback: i.internalResolve,
                        culture: i.culture,
                        host: i.host,
                        queuePathPrefix: i.options.queuePathPrefix
                    })
                }
                )]
            })
        })
    }
    ,
    i.prototype.cleanup = function() {
        for (var e = document.getElementById(this.targetContainerId); e.firstChild && e.removeChild(e.firstChild); )
            ;
    }
    ,
    t.InviteOnlyEmailVerificationChallengeRun = i
}
)(QueueIt = QueueIt || {}),
(e => {
    var s;
    function t(e, t, i) {
        this.hasAnimation = e,
        this.options = t,
        this.userId = i,
        this.hasRun = !1,
        this.loadedCallbackName = "__proofofworkOnload" + Math.random().toString().substring(2),
        this.scriptSource = this.options.proofOfWorkSource,
        this.host = this.options.proofOfWorkHost,
        this.challengeVerifyProvider = "proofofwork"
    }
    s = e.Queue || (e.Queue = {}),
    t.prototype.getName = function() {
        return s.ChallengeType.ProofOfWork
    }
    ,
    t.prototype.getChallengeVerifyProvider = function() {
        return this.challengeVerifyProvider
    }
    ,
    t.prototype.shouldDisplayAnimation = function() {
        return this.hasAnimation
    }
    ,
    t.prototype.doesIssueEnqueueTokens = function() {
        return !1
    }
    ,
    t.prototype.init = function() {
        return __awaiter(this, void 0, void 0, function() {
            var o = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(t, i) {
                    window[o.loadedCallbackName] = function() {
                        var e;
                        window.queueitProofOfWork ? t() : (e = {
                            type: "initError",
                            message: "queueitProofOfWork is not found in window",
                            challengeType: s.ChallengeType.ProofOfWork
                        },
                        i(e)),
                        delete window[this.loadedCallbackName]
                    }
                    ;
                    var n = document.createElement("script")
                      , r = document.head || document.getElementsByTagName("head")[0];
                    n.async = !0,
                    n.src = o.scriptSource,
                    n.type = "text/javascript",
                    n.defer = !0,
                    n.setAttribute("data-name", "queueitProofOfWork"),
                    n.setAttribute("data-onload", o.loadedCallbackName),
                    n.setAttribute("data-host", o.host),
                    n.onerror = function() {
                        var e = {
                            type: "initError",
                            message: "Failed to load script",
                            challengeType: s.ChallengeType.ProofOfWorkAlias,
                            blockedUrl: o.scriptSource.startsWith("http") ? o.scriptSource : document.location.origin + o.scriptSource
                        };
                        r.removeChild(n),
                        i(e)
                    }
                    ,
                    r.appendChild(n)
                }
                )]
            })
        })
    }
    ,
    t.prototype.canRetry = function() {
        return queueitProofOfWork.canRetry()
    }
    ,
    t.prototype.run = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.hasRun ? this.canRetry() ? [4, this.internalRetry()] : [2, {
                        type: "AllTriesUsed"
                    }] : [3, 2];
                case 1:
                    return [2, e.sent()];
                case 2:
                    return [4, this.internalRun()];
                case 3:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    t.prototype.internalRun = function() {
        return __awaiter(this, void 0, void 0, function() {
            var r = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(t) {
                    r.internalResolve = function(e) {
                        r.hasRun = !0,
                        t(e)
                    }
                    ,
                    queueitProofOfWork.execute({
                        callback: function(e, t, i, n) {
                            r.resolver({
                                type: "success",
                                sessionId: e,
                                challengeDetails: t,
                                solution: i,
                                solverStats: n
                            })
                        },
                        errorHandler: function(e) {
                            r.resolver({
                                type: "error",
                                message: e
                            })
                        },
                        challengesIssuedByReason: r.options.challengesIssuedByReason,
                        userId: r.userId,
                        tags: {
                            CustomerId: r.options.customerId,
                            EventId: r.options.eventId,
                            Hash: r.options.challengeApiChecksumHash
                        },
                        queuePathPrefix: r.options.queuePathPrefix
                    })
                }
                )]
            })
        })
    }
    ,
    t.prototype.internalRetry = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(e) {
                    t.internalResolve = e,
                    queueitProofOfWork.retry()
                }
                )]
            })
        })
    }
    ,
    t.prototype.cleanup = function() {}
    ,
    t.prototype.resolver = function(e) {
        this.internalResolve(e)
    }
    ,
    s.ProofOfWorkRun = t
}
)(QueueIt = QueueIt || {}),
(e => {
    var s, a;
    function t(e, t, i, n) {
        void 0 === n && (n = "challenge-container"),
        this.hasAnimation = e,
        this.options = t,
        this.recaptchaType = i,
        this.targetContainerId = n,
        this.hasRun = !1,
        i === a.Invisible ? this.setupForInvisible(t) : this.setupForNormal(t),
        this.type = i,
        this.scriptSource = t.reCaptchaSource,
        this.host = t.reCaptchaHost,
        this.culture = t.culture,
        this.loadedCallbackName = "loadChallengeWidget",
        this.customerId = t.customerId,
        this.waitingRoomId = t.eventId
    }
    s = e.Queue || (e.Queue = {}),
    (e = a = s.RecaptchaType || (s.RecaptchaType = {}))[e.Normal = 0] = "Normal",
    e[e.Invisible = 1] = "Invisible",
    t.prototype.setupForNormal = function(e) {
        this.challengeVerifyProvider = "recaptcha"
    }
    ,
    t.prototype.setupForInvisible = function(e) {
        this.challengeVerifyProvider = "recaptcha-invisible"
    }
    ,
    t.prototype.getName = function() {
        return this.recaptchaType === a.Normal ? s.ChallengeType.Recaptcha : s.ChallengeType.RecaptchaInvisible
    }
    ,
    t.prototype.getChallengeVerifyProvider = function() {
        return this.challengeVerifyProvider
    }
    ,
    t.prototype.shouldDisplayAnimation = function() {
        return this.hasAnimation
    }
    ,
    t.prototype.doesIssueEnqueueTokens = function() {
        return !1
    }
    ,
    t.prototype.init = function() {
        return __awaiter(this, void 0, void 0, function() {
            var o = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(t, i) {
                    window[o.loadedCallbackName] = function() {
                        var e;
                        window.recaptcha && document.getElementById(o.targetContainerId) ? t() : (e = {
                            type: "initError",
                            message: "recaptcha is not found in window",
                            challengeType: o.type === a.Normal ? s.ChallengeType.Recaptcha : s.ChallengeType.RecaptchaInvisible
                        },
                        i(e)),
                        delete window[o.loadedCallbackName]
                    }
                    ;
                    var n = document.createElement("script")
                      , r = document.head || document.getElementsByTagName("head")[0];
                    n.async = !0,
                    n.src = o.scriptSource,
                    n.setAttribute("data-host", o.host),
                    n.type = "text/javascript",
                    n.defer = !0,
                    n.onerror = function() {
                        var e = {
                            type: "initError",
                            message: "Failed to load script",
                            challengeType: o.type === a.Normal ? s.ChallengeType.Recaptcha : s.ChallengeType.RecaptchaInvisible,
                            blockedUrl: o.scriptSource
                        };
                        r.removeChild(n),
                        i(e)
                    }
                    ,
                    r.appendChild(n)
                }
                )]
            })
        })
    }
    ,
    t.prototype.canRetry = function() {
        return recaptcha.canRetry()
    }
    ,
    t.prototype.run = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.hasRun ? this.canRetry() ? [4, this.internalRetry()] : [2, {
                        type: "AllTriesUsed"
                    }] : [3, 2];
                case 1:
                    return [2, e.sent()];
                case 2:
                    return [4, this.internalRun()];
                case 3:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    t.prototype.internalRun = function() {
        return __awaiter(this, void 0, void 0, function() {
            var r = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(t, i) {
                    r.internalResolve = function(e) {
                        r.hasRun = !0,
                        t(e)
                    }
                    ,
                    recaptcha.render("challenge-container", {
                        callback: function(e, t, i, n) {
                            r.hasRun = !0,
                            r.resolver({
                                type: "success",
                                sessionId: e,
                                challengeDetails: t,
                                solution: i,
                                solverStats: n
                            })
                        },
                        errorHandler: function(e) {
                            r.resolver({
                                type: "error",
                                message: "string" == typeof e ? e : e.errorText || "Unknown error"
                            })
                        },
                        scriptLoadErrorHandler: function() {
                            var e = {
                                type: "initError",
                                message: "Failed to load script",
                                challengeType: r.type === a.Normal ? s.ChallengeType.Recaptcha : s.ChallengeType.RecaptchaInvisible,
                                blockedUrl: r.scriptSource
                            };
                            i(e)
                        },
                        challengesIssuedByReason: r.options.challengesIssuedByReason,
                        culture: r.culture,
                        invisible: r.type === a.Invisible,
                        host: r.host,
                        tags: {
                            CustomerId: r.customerId,
                            EventId: r.waitingRoomId,
                            Hash: r.options.challengeApiChecksumHash
                        },
                        queuePathPrefix: r.options.queuePathPrefix
                    })
                }
                )]
            })
        })
    }
    ,
    t.prototype.cleanup = function() {
        for (var e = document.getElementById(this.targetContainerId); e.firstChild && e.removeChild(e.firstChild); )
            ;
    }
    ,
    t.prototype.resolver = function(e) {
        this.internalResolve(e)
    }
    ,
    t.prototype.internalRetry = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t = this;
            return __generator(this, function(e) {
                return [2, new Promise(function(e) {
                    t.internalResolve = e,
                    recaptcha.reset()
                }
                )]
            })
        })
    }
    ,
    s.RecaptchaRun = e = t
}
)(QueueIt = QueueIt || {});
