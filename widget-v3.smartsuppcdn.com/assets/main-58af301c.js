import {
    a as Bs,
    c as mr,
    w as M,
    d as E,
    g as m,
    b as $s,
    F as hr,
    l as te,
    V as En,
    e as R,
    o as De,
    T as yt,
    S as x,
    i as U,
    s as G,
    f as Et,
    h as S,
    j as g,
    k as A,
    m as w,
    u as Mt,
    n as Ot,
    p as kt,
    t as p,
    q as h,
    r as T,
    v as Mn,
    x as qe,
    y as Y,
    z as H,
    A as Gs,
    B as Ie,
    C as ye,
    D as Q,
    E as ee,
    G as k,
    H as F,
    I,
    J as Se,
    K as dt,
    L as ft,
    M as Ke,
    N as W,
    O as Ye,
    P as pe,
    Q as V,
    R as Ft,
    U as Xe,
    W as Ze,
    X as de,
    Y as br,
    Z as P,
    _ as gt,
    $ as _r,
    a0 as yr,
    a1 as re,
    a2 as pt,
    a3 as He,
    a4 as mt,
    a5 as ht,
    a6 as is,
    a7 as vr,
    a8 as Me,
    a9 as wr,
    aa as Re,
    ab as zt,
    ac as as,
    ad as Ue,
    ae as On,
    af as Cr,
    ag as Zt
} from "./vendor-620a2714.js";
const Sr = () => {
        const e = new Map;
        return Object.freeze({
            on: (o, r) => {
                const i = e.get(o);
                i ? i.push(r) : e.set(o, [r])
            },
            off: (o, r) => {
                const i = e.get(o);
                i && e.set(o, i.filter(l => l !== r))
            },
            emit: (o, r) => {
                const i = e.get(o);
                i && i.forEach(l => l(r))
            }
        })
    },
    q = Sr(),
    Ar = "data-smartsupp-id",
    Nt = () => window.top ? ? window.parent,
    ne = () => window.parent,
    Ve = () => ne().document,
    wp = e => e && e.ownerDocument || document,
    Tr = ({
        vid: e
    }) => {
        const t = ne().smartsupp || {};
        t.vid = e, ne().smartsupp = t
    },
    Er = "debug",
    Mr = e => {
        try {
            const t = ne().localStorage.getItem(Er);
            if (!t) return !1;
            if (t === e || t === "*") return !0;
            const n = e.match(/^\w+:/g);
            return n ? t === `${n[0]}*` : !1
        } catch {
            return !1
        }
    },
    Or = (e, t) => (n, ...s) => {
        Mr(e) && console.debug(`%c${e}`, `color: ${t};`, n, ...s)
    },
    se = Or("smartsupp:widget", "#1233df"),
    kr = () => {
        let e = null;
        const t = [];
        return Object.freeze({
            init: r => {
                e = r, se("widget options", r), t.forEach(i => i(r))
            },
            getOptions: () => {
                if (!e) throw new Error("Widget options not initialized");
                return e
            },
            awaitOptions: async () => e || new Promise(r => {
                t.push(r)
            })
        })
    },
    O = kr(),
    kn = e => {
        const n = e.document.getElementsByTagName("body")[0].getAttribute(Ar);
        if (!n) throw new Error("Missing chat ID attribute on body element.");
        if (!e.parent.$smartsupp) throw new Error("Something went wrong. Seems like loader.js did not initialize widget.");
        if (!e.parent.$smartsupp.getWidget) throw new Error("Get widget function was not supplied by loader.js.");
        return e.parent.$smartsupp.getWidget(n)
    },
    mn = "ssupp",
    Ns = 182,
    Fr = (e = Ns) => ({
        expires: e,
        domain: O.getOptions().cookieDomain,
        path: O.getOptions().cookiePath || "/",
        sameSite: "strict",
        secure: ne().location.protocol === "https:"
    }),
    xs = e => `${O.getOptions().cookiePrefix||""}${mn}.${e}`,
    Ir = ({
        name: e,
        value: t,
        expirationInDays: n = Ns,
        options: s
    }) => {
        Bs.set(xs(e), t, { ...Fr(n),
            ...s
        })
    },
    Lr = e => Bs.get(xs(e)),
    Us = e => (t, ...n) => {
        e(`[Smartsupp] ${t}`, ...n)
    },
    Z = Us(console.warn),
    fe = Us(console.error),
    Vs = () => {
        const {
            key: e
        } = O.getOptions();
        return `${ne().SMARTSUPP_AUTOCREATE!==!1?mn:`${kn(window).id}_${mn}`}_${e}`
    },
    Jt = () => {
        try {
            const e = window.localStorage.getItem(Vs()) ? ? "{}";
            return JSON.parse(e)
        } catch {
            return {}
        }
    },
    zs = e => {
        try {
            window.localStorage.setItem(Vs(), JSON.stringify(e))
        } catch (t) {
            Z("Set to local storage failed", t)
        }
    },
    Rr = (e, t) => {
        const s = { ...Jt(),
            [e]: String(t)
        };
        zs(s)
    },
    Ws = e => {
        const t = Jt();
        t[e] && (delete t[e], zs(t))
    };
var j = (e => (e.AnalyticsConsent = "analyticsConsent", e.AuthForm = "authForm", e.IsMessengerFrameExpanded = "isMessengerFrameExpanded", e.IsMessengerFrameOpened = "opened", e.MarketingConsent = "marketingConsent", e.Message = "message", e.RatingText = "ratingText", e.SoundsEnabled = "enableSounds", e.VisitorId = "vid", e.Visits = "visits", e.SessionId = "sessionId", e))(j || {});
const Ae = e => {
        let t = "";
        return e === j.VisitorId && O.getOptions().cookieDomain && (t = Lr(e)), t || Jt()[e]
    },
    Be = ({
        name: e,
        value: t
    }) => {
        e === j.VisitorId && O.getOptions().cookieDomain && Ir({
            name: e,
            value: t
        }), Rr(e, t)
    },
    Pr = e => {
        Ws(e)
    };
q.on("analyticsConsentChanged", e => {
    Be({
        name: j.AnalyticsConsent,
        value: String(e)
    })
});
q.on("marketingConsentChanged", e => {
    Be({
        name: j.MarketingConsent,
        value: String(e)
    })
});
const Fn = () => !!O.getOptions().consentModeEnabled,
    In = () => {
        const e = Ae(j.AnalyticsConsent) === "true";
        return !(Fn() && !e)
    },
    Hs = () => {
        const e = Ae(j.MarketingConsent) === "true";
        return !(Fn() && !e)
    },
    Dr = () => {
        const {
            storageUrl: e,
            key: t
        } = O.getOptions();
        if (!e) throw new Error("Storage url is missing");
        return `${e.replace(/{key}/g,t)}/index.html`
    },
    Br = () => {
        let e = null;
        return Object.freeze({
            getStorage: () => {
                if (e) return e;
                try {
                    const s = Dr();
                    return e = mr(s), se("cross domain storage created", s), e
                } catch {
                    throw new Error("Cross domain storage create failed")
                }
            },
            closeStorage: () => {
                e && (e.close(), se("cross domain storage closed"))
            }
        })
    },
    Ln = Br(),
    $r = e => {
        const t = Ln.getStorage();
        return new Promise((n, s) => {
            t.get(e, (o, r) => o ? s(o) : (se("get from cross domain storage", e, r), n(r)))
        })
    },
    Gr = (e, t) => {
        const n = Ln.getStorage();
        return new Promise((s, o) => {
            n.set(e, t, r => r ? o(r) : (se("set to cross domain storage", e, t), s()))
        })
    },
    Nr = () => {
        Ln.closeStorage()
    },
    js = () => !!O.getOptions().crossDomainEnabled,
    xr = async () => js() ? $r(j.VisitorId) : Ae(j.VisitorId) || null,
    Ur = async e => js() ? Gr(j.VisitorId, String(e)) : Be({
        name: j.VisitorId,
        value: String(e)
    }),
    Vr = () => {
        if (Hs()) return Ae(j.Visits) ? Number(Ae(j.Visits)) : 0
    },
    zr = e => {
        Hs() && Be({
            name: j.Visits,
            value: String(e)
        })
    };
q.on("marketingConsentChanged", e => {
    e || Pr(j.Visits)
});
const qs = (e, t, n) => {
        const {
            set: s,
            subscribe: o
        } = M(t, i => {
            const l = Ae(e);
            l && i(n ? n(l) : l)
        }), r = i => {
            Be({
                name: e,
                value: String(i)
            })
        };
        return {
            set: i => {
                r(i), s(i)
            },
            subscribe: o
        }
    },
    Ce = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
    Wr = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document,
    Hr = 450,
    jr = 500,
    Qt = M(null),
    qr = M({
        width: ne().innerWidth,
        height: ne().innerHeight
    }),
    $e = E([Qt, qr], ([e, t]) => {
        if (e) {
            const {
                isMobile: n,
                isTablet: s
            } = e;
            if (s) return !1;
            if (n) return !0
        }
        return t.width < Hr || t.height < jr
    }),
    Kr = E([Qt], ([e]) => !!(e != null && e.isDesktop) && !Wr()),
    Cp = E([Qt], ([e]) => !!(e != null && e.isTablet)),
    Yr = () => {
        const e = M({}),
            {
                subscribe: t,
                update: n
            } = e;
        return {
            subscribe: t,
            add: i => {
                n(l => ({ ...l,
                    [i.id]: i
                }))
            },
            remove: i => {
                n(l => {
                    const {
                        [i]: a, ...c
                    } = l;
                    return c
                })
            },
            find: i => m(e)[i] || null
        }
    },
    Wt = Yr(),
    Sp = E([Wt], ([e]) => Object.values(e)),
    Rn = e => (t, n = 3e3) => {
        const s = `fm-${e}-${t}`,
            o = Wt.find(s);
        let r = 1;
        o && (clearTimeout(o.timeout), r = o.recurrence + 1);
        let i;
        return n > 0 && (i = window.setTimeout(() => {
            ls(s)
        }, n)), Wt.add({
            id: s,
            type: e,
            text: t,
            timeout: i,
            recurrence: r
        }), () => ls(s)
    },
    ls = e => {
        Wt.remove(e)
    },
    Ap = Rn("success"),
    Le = Rn("error"),
    Ht = Rn("warning");
var Ks = (e => (e[e.Good = 5] = "Good", e[e.Normal = 3] = "Normal", e[e.Bad = 1] = "Bad", e))(Ks || {});
const Xr = {
        5: {
            value: 5,
            text: "agentRating.good.formText",
            name: "good"
        },
        3: {
            value: 3,
            text: "agentRating.normal.formText",
            name: "neutral"
        },
        1: {
            value: 1,
            text: "agentRating.bad.formText",
            name: "bad"
        }
    },
    Tp = Object.values(Xr).sort((e, t) => t.value - e.value),
    Ys = M(null),
    Xs = M(null),
    Zr = M(!1),
    Pn = M([]),
    Jr = e => {
        Pn.update(t => [...t, e])
    },
    Qr = () => {
        let e;
        return Pn.update(t => (e = t.pop(), t)), e ? ? null
    },
    ei = () => m(Pn).length === 0,
    Dn = (e, {
        useStack: t = !1
    } = {}) => {
        Xs.update(n => (t && n && Jr(n), Zr.set(n !== null), e))
    },
    Zs = () => {
        let e = null;
        ei() || (e = Qr()), Xs.set(e)
    };
var en = (e => (e[e.Options = 0] = "Options", e[e.GdprAndPrivacy = 1] = "GdprAndPrivacy", e[e.AuthForm = 2] = "AuthForm", e[e.CloseChat = 3] = "CloseChat", e[e.ChatRating = 4] = "ChatRating", e))(en || {});
const ti = () => {
        const {
            subscribe: e,
            update: t
        } = M(new Set);
        return {
            subscribe: e,
            hideRepliesByMessageId: s => {
                t(o => o.add(s))
            }
        }
    },
    ni = ti(),
    Ep = 500,
    Mp = 1e3,
    Op = Symbol("contentListItem"),
    kp = Symbol("contentMessageAttachment"),
    Fp = "-replies",
    si = .35,
    oi = 5e3,
    ri = "default",
    Bn = (e, t) => {
        const n = {};
        for (const s of t) {
            const o = String(s[e]);
            n[o] = s
        }
        return n
    },
    ii = () => {
        const e = M({}),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            setGroups: o => {
                n(Bn("key", o))
            }
        }
    },
    $n = ii(),
    Js = E([$n], ([e]) => Object.values(e)),
    ie = {
        authFormDrawer: "authFormDrawer",
        authFormPrivacyNotice: "authFormPrivacyNotice",
        authFormPrivacyNoticeSwitch: "authFormPrivacyNoticeSwitch",
        authFormSubmitButton: "authFormSubmitButton",
        avatarAgent: "avatarAgent",
        avatarBot: "avatarBot",
        avatarGroup: "avatarGroup",
        avatarInfo: "avatarInfo",
        buttonAttachment: "buttonAttachment",
        buttonCloseChat: "buttonCloseChat",
        buttonCloseDrawer: "buttonCloseDrawer",
        buttonCollapseChat: "buttonCollapseChat",
        buttonEmoji: "buttonEmoji",
        buttonExpandChat: "buttonExpandChat",
        buttonMinimizeChat: "buttonMinimizeChat",
        buttonOptions: "buttonOptions",
        buttonSend: "buttonSend",
        chatRatingDrawer: "chatRatingDrawer",
        chatRatingEmojiButton: "chatRatingEmoji",
        chatRatingSendButton: "chatRatingSendButton",
        chatRatingTextarea: "chatRatingTextarea",
        chatRatingFeedbackButton: "chatRatingFeedbackButton",
        closeChatConfirmButton: "closeChatConfirmButton",
        closeChatDeclineButton: "closeChatDeclineButton",
        closeChatDrawer: "closeChatDrawer",
        flashMessage: "flashMessage",
        gdprDrawer: "gdprDrawer",
        headerTitle: "headerTitle",
        headerStatus: "headerStatus",
        headerBadge: "headerBadge",
        messageAgent: "messageAgent",
        messageBot: "messageBot",
        messageBotReply: "messageBotReply",
        messageBotBack: "messageBotBack",
        messageContact: "messageContact",
        messageFile: "messageFile",
        messageGroup: "messageGroup",
        messageImage: "messageImage",
        optionsDrawer: "optionsDrawer",
        optionsFeedback: "optionsFeedback",
        optionsPrivacyNotice: "optionsPrivacyNotice",
        optionsSounds: "optionsSounds",
        optionsTranscript: "optionsTranscript",
        systemMessage: "systemMessage",
        textarea: "textarea",
        textareaPreviewFile: "textareaPreviewFile",
        textareaPreviewImage: "textareaPreviewImage",
        transcriptInput: "transcriptInput",
        transcriptSendButton: "transcriptSend",
        widgetButton: "widgetButton",
        widgetButtonFrame: "widgetButtonFrame",
        widgetButtonText: "widgetButtontext",
        widgetImagePreview: "widgetImagePreview",
        widgetMessenger: "widgetMessenger",
        widgetMessengerFrame: "widgetMessengerFrame",
        widgetOnlineBadge: "widgetOnlineBadge",
        widgetPopupFrame: "widgetPopupFrame",
        widgetTypingFrame: "widgetTypingFrame",
        widgetUnreadMessagesBadge: "widgetUnreadMessagesBadge",
        widgetHeader: "widgetHeader"
    },
    Ip = "https://www.smartsupp.com",
    Lp = "/powered-by-smartsupp",
    Rp = ["cs", "es", "fr", "hu", "it", "de", "nl", "pl"],
    ai = "3.0",
    Pp = "https://www.smartsupp.com/my-data-and-gdpr",
    Gn = M(!1),
    cs = qs(j.SessionId, ""),
    li = () => {
        const {
            protocol: e,
            host: t
        } = O.getOptions();
        return `${e==="http"?"http":"https"}://${t}`
    },
    ci = async () => {
        try {
            return await xr()
        } catch (e) {
            return Z(String(e)), null
        }
    },
    ui = async e => {
        try {
            await Ur(e), Nr()
        } catch (t) {
            Z(String(t))
        }
    },
    di = async () => {
        const {
            key: e,
            lang: t,
            isPreviewMode: n,
            sitePlatform: s,
            triggerable: o,
            _chatMaxReopenTime: r
        } = O.getOptions(), i = await ci(), l = m(ts);
        return {
            key: e,
            id: i,
            isPreviewMode: n,
            sitePlatform: s,
            triggerable: o,
            _chatMaxReopenTime: r,
            name: l.name,
            email: l.email,
            phone: l.phone,
            group: l.group,
            lang: l.language ? ? t,
            variables: l.variables,
            widgetVersion: ai,
            visits: Vr(),
            isWidgetVisible: m(Ge),
            isWidgetOpen: m(be),
            pageUrl: Nt().location.href,
            pageTitle: Nt().document.title,
            domain: Nt().location.hostname || "unknown",
            referer: Nt().document.referrer,
            bundleVersion: "390f8b4edcea9fdaabf643754869cded9ec4cfa3"
        }
    },
    fi = (e, t) => {
        m(be) && !e && t !== m(cs) && be.set(!1), cs.set(t)
    },
    gi = () => {
        const e = M(),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            initialize: o => n(o)
        }
    },
    Qs = gi(),
    Ct = 5,
    pi = "FILE",
    Dp = 2e3,
    Bp = e => e.split("/")[0] === "image",
    $p = e => !!e.match(/^video\/(?:mp4|webm|ogg){1}$/);
async function mi(e) {
    if (!FileReader) return fe("FileReader not supported"), null;
    const t = new FileReader;
    return new Promise(n => {
        t.onload = () => {
            if (!t.result) {
                n(null);
                return
            }
            let s;
            typeof t.result == "string" ? s = t.result : s = t.result.toString(), s.startsWith("data:image") || (s = null), n(s)
        }, t.onerror = () => {
            fe("Failed to load image data"), n(null)
        }, t.readAsDataURL(e)
    })
}
async function hi(e) {
    return new Promise(t => {
        const n = document.createElement("img");
        n.onload = () => {
            t({
                width: n.width,
                height: n.height
            })
        }, n.onerror = () => {
            fe("Failed to obtain image dimensions"), t(null)
        }, n.src = e
    })
}

function bi(e) {
    return {
        horizontal: e.width > e.height,
        vertical: e.height > e.width
    }
}
const _i = "ar",
    yi = "az",
    vi = "bg",
    wi = "br",
    Ci = "bs",
    Si = "ca",
    Ai = "cn",
    Ti = "cs",
    Ei = "da",
    Mi = "de",
    Oi = "el",
    eo = "en",
    ki = "es",
    Fi = "fa",
    Ii = "fi",
    Li = "fil",
    Ri = "fr",
    Pi = "he",
    Di = "hi",
    Bi = "hr",
    $i = "hu",
    Gi = "is",
    Ni = "it",
    xi = "ja",
    Ui = "ka",
    Vi = "lt",
    zi = "lv",
    Wi = "mk",
    Hi = "nl",
    ji = "no",
    qi = "pl",
    Ki = "pt",
    Yi = "ro",
    Xi = "ru",
    Zi = "sk",
    Ji = "sl",
    Qi = "sr",
    ea = "sv",
    ta = "th",
    na = "tr",
    sa = "tw",
    oa = "uk",
    to = eo,
    ra = [_i, yi, vi, wi, Ci, Si, Ai, Ti, Ei, Mi, Oi, eo, ki, Fi, Ii, Li, Ri, Pi, Di, Bi, $i, Gi, Ni, xi, Ui, Vi, zi, Wi, Hi, ji, qi, Ki, Yi, Xi, Zi, Ji, Qi, ea, ta, na, sa, oa],
    no = e => ra.includes(e),
    ia = e => no(e) ? e : to,
    aa = () => {
        const {
            lang: e
        } = O.getOptions(), {
            language: t
        } = m(ts);
        return ia(t ? ? e)
    };

function la() {
    return new $s.TranslationsClient(new hr({
        baseURL: `${O.getOptions().translationsBaseUrl}/api/v1`
    }))
}
const ca = async e => la().getDefaults($s.ProjectName.Widget, e),
    ua = (e, t) => {
        const {
            translates: n
        } = O.getOptions();
        return { ...e,
            ...n[t] && n[t]
        }
    },
    It = M(to),
    bt = M({}),
    so = async e => {
        try {
            const t = await ca(e),
                n = ua(t, e);
            bt.update(s => ({ ...s,
                [e]: n
            }))
        } catch {
            fe(`Fetch translations of '${e}' language failed.`)
        }
    },
    da = async e => {
        m(bt)[e] || await so(e), It.set(e)
    },
    fa = async () => {
        const e = aa();
        It.set(e), await so(e)
    },
    ga = e => {
        const t = m(It),
            s = { ...m(bt)[t],
                ...e
            };
        bt.update(o => ({ ...o,
            [t]: s
        }))
    },
    pa = (e, t, n) => {
        var i;
        const s = m(bt),
            o = `|${t}|`;
        if (Object.keys(s).length === 0) return o;
        let r = ((i = s[e]) == null ? void 0 : i[t]) || o;
        return Object.keys(n).map(l => {
            const a = new RegExp(`{${l}}`, "g");
            r = r.replace(a, n[l])
        }), r
    },
    ae = E([It, bt], ([e]) => (t, n = {}) => pa(e, t, n)),
    ma = () => {
        const e = M([]),
            {
                subscribe: t,
                update: n
            } = e,
            s = () => m(e).map(C => C.file),
            o = (C, y) => (y || m(e)).find(D => D.file.name === C) || null,
            r = C => ({
                file: C,
                preview: {},
                previewState: "none",
                uploadStatus: "none"
            }),
            i = C => {
                const y = Array.isArray(C) ? C : [C];
                n(D => D.length + y.length > Ct ? (Le(`${m(ae)("fileUpload.tooManyFiles")} ${Ct}`), D) : [...D, ...y.map(r)]), v(y)
            },
            l = C => {
                n(y => y.filter(D => D.file !== C))
            },
            a = () => m(e).length,
            c = () => a() >= Ct,
            u = () => e.set([]),
            d = () => {
                e.update(C => (C.forEach(y => y.uploadStatus = "in-progress"), C))
            },
            f = C => {
                e.update(y => {
                    const D = o(C, y);
                    return D && (D.uploadStatus = "done"), y
                })
            },
            _ = C => {
                var y;
                return ((y = o(C.name)) == null ? void 0 : y.previewState) !== "none"
            },
            v = C => {
                C.forEach(y => void b(y))
            },
            b = async C => {
                if (_(C)) return;
                const y = await mi(C),
                    D = y ? await hi(y) : null,
                    N = D ? bi(D) : null;
                e.update(B => {
                    const L = o(C.name, B);
                    return L ? (L.previewState = "ready", L.preview = {
                        data: y,
                        dimensions: D,
                        orientation: N
                    }, [...B]) : B
                })
            };
        return {
            subscribe: t,
            getFiles: s,
            find: o,
            add: i,
            remove: l,
            count: a,
            isLimitReached: c,
            clear: u,
            setUploadingStatus: d,
            setFileUploaded: f
        }
    },
    ze = ma(),
    ha = () => {
        const e = [];
        return Object.freeze({
            push: s => {
                e.push(s)
            },
            executeAll: () => {
                for (; e.length > 0;) {
                    const s = e.shift();
                    s && s()
                }
            }
        })
    },
    Lt = ha(),
    ba = e => {
        var n, s;
        se("init data", e), Gn.set(!0), fi(e.chat, e.sessionId);
        const t = e.visitor.id;
        ui(t), zr(e.visitor.visits), ve.setVisitorData(e.visitor), Tr({
            vid: t
        }), Qt.set(e.browser), Pe.setAgents(e.account.agents), ((n = e.chat) == null ? void 0 : n.virtualAgent) !== void 0 && Pe.setVirtualAgent((s = e.chat) == null ? void 0 : s.virtualAgent), $n.setGroups(e.account.groups), Qe.set(e.account.status), e.chat && (we.set(e.chat.status), Rt(e.chat.isClosed), nn.set(e.chat.unreadInfo.lastReadAt), K.setMessages(e.chat.messages), Je.setAssignedAgentIds(e.chat.assignedIds ? ? []), e.chat.widgetOptions && vt.updateGeneralOptions(e.chat.widgetOptions)), Qs.initialize(e.fileUpload), he.set(!0), Lt.executeAll()
    },
    _a = e => {
        console.error(e)
    },
    ya = () => {
        Gn.set(!1)
    },
    va = () => {
        we.set(te.ChatStatus.Open)
    },
    wa = () => {
        we.set(te.ChatStatus.Served), Rt(!1)
    },
    Ca = ({
        message: e
    }) => {
        e.content.data.closeType === "agent_close" && (sl(), Je.setAssignedAgentIds([]), we.set(te.ChatStatus.Closed), K.addMessage(e), q.emit("chatClosed", e))
    },
    Sa = ({
        message: e
    }) => {
        Rt(!0, {
            byVisitor: !0
        }), K.addMessage(e), q.emit("chatVisitorClosed", e)
    },
    Aa = ({
        changes: e
    }) => {
        e.widgetOptions && vt.updateGeneralOptions(e.widgetOptions), e.isClosed !== void 0 && Rt(e.isClosed), e.virtualAgent !== void 0 && Pe.setVirtualAgent(e.virtualAgent)
    },
    Ta = ({
        message: e
    }) => {
        lo.set(!1);
        const t = m(Pu) && Nn(e);
        !m(be) && po(e) && !t ? Bl(e) : K.addMessage(e), go(), e.widgetOptions && vt.setMessageOptions(e.widgetOptions), t && rn(), q.emit("messageReceived", e)
    },
    Ea = ({
        message: e
    }) => {
        K.replaceMessage(e), e.widgetOptions && e.id === m(So) && vt.setMessageOptions(e.widgetOptions)
    },
    Ma = ({
        message: e,
        agent: t
    }) => {
        Je.addAssignedAgentId(e.content.data.agentId), K.addMessage(e), q.emit("agentJoined", t)
    },
    Oa = ({
        message: e
    }) => {
        Je.removeAssignedAgentId(e.content.data.agentId), K.addMessage(e)
    },
    ka = ({
        message: e
    }) => {
        Je.addAssignedAgentId(e.content.data.assigned), K.addMessage(e)
    },
    Fa = ({
        message: e
    }) => {
        Je.removeAssignedAgentId(e.content.data.unassigned), K.addMessage(e)
    },
    Ia = e => {
        lo.set(e.typing.is)
    },
    La = e => {
        nn.set(e.lastReadAt)
    },
    Ra = ({
        message: e,
        rating: t
    }) => {
        K.updateMessageRating(e.id, t), q.emit("chatRated", t)
    },
    Pa = e => {
        q.emit("transcriptPdf", e)
    },
    Da = ({
        id: e,
        changes: t
    }) => {
        Pe.updateAgent(e, t)
    },
    Ba = ({
        id: e,
        status: t
    }) => {
        Pe.updateAgent(e, {
            status: t
        })
    },
    $a = ({
        status: e
    }) => {
        Qe.set(e)
    },
    Ga = e => {
        ve.updateVisitorData(e)
    },
    Na = e => {
        q.emit("contactAcquired", e)
    },
    xa = async e => {
        const t = await O.awaitOptions(),
            n = {
                data: e,
                connection: {
                    url: li(),
                    balancerUrl: t.balancerUrl,
                    options: {
                        path: "/socket",
                        autoConnect: !1,
                        reconnection: !0
                    }
                }
            };
        return new En(n)
    },
    Ua = () => {
        let e = null;
        return Object.freeze({
            getClient: () => {
                if (!e) throw new Error("Visitor client is not initialized");
                return e
            },
            initClient: async () => {
                const o = await di();
                e = await xa(o), e && (Va(e), await e.connect().catch(r => {
                    fe("Failed connect to server.", r)
                }))
            },
            isInitialized: () => !!e
        })
    },
    Va = e => {
        e.on("initialized", ba), e.on("error", _a), e.on("disconnect", ya), e.on("chat.opened", va), e.on("chat.served", wa), e.on("chat.closed", Ca), e.on("chat.visitor_closed", Sa), e.on("chat.updated", Aa), e.on("chat.message_received", Ta), e.on("chat.message_updated", Ea), e.on("chat.agent_joined", Ma), e.on("chat.agent_left", Oa), e.on("chat.agent_assigned", ka), e.on("chat.agent_unassigned", Fa), e.on("chat.agent_typing", Ia), e.on("chat.contact_read", La), e.on("chat.rated", Ra), e.on("chat.transcript_pdf", Pa), e.on("agent.updated", Da), e.on("agent.status_updated", Ba), e.on("account.updated", $a), e.on("visitor.updated", Ga), e.on("contact.acquired", Na)
    },
    le = Ua(),
    za = () => {
        const e = M(null),
            {
                subscribe: t,
                set: n,
                update: s
            } = e,
            o = a => {
                n(a)
            },
            r = a => {
                s(c => c ? { ...c,
                    ...a
                } : null)
            };
        return {
            subscribe: t,
            setVisitorData: o,
            updateVisitorData: r,
            updateVisitorProperty: (a, c) => {
                if (!m(he)) {
                    Sn(a, c);
                    return
                }
                r({
                    [a]: c
                });
                try {
                    le.getClient().update({
                        [a]: c
                    })
                } catch (u) {
                    fe(`Update of visitor property '${a}' failed.`, String(u))
                }
            },
            updateVisitorVariables: a => {
                if (!m(he)) {
                    Sn("variables", a);
                    return
                }
                const c = m(e);
                if (!c) return;
                const u = c.variables;
                r({
                    variables: { ...u,
                        ...a
                    }
                });
                let d = {};
                if (Object.keys(a).forEach(f => {
                        a[f] !== u[f] && (d = { ...d,
                            [f]: a[f]
                        })
                    }), Object.keys(d).length !== 0) try {
                    le.getClient().update({
                        variables: d
                    })
                } catch (f) {
                    fe("Update of visitor variables failed.", String(f))
                }
            }
        }
    },
    ve = za(),
    Wa = (e, t) => e.hasOwnProperty(t),
    oo = e => typeof e == "boolean",
    Ha = e => typeof e == "number",
    ro = e => typeof e == "object" && e !== null && !Array.isArray(e),
    je = e => typeof e == "string" || e instanceof String,
    us = e => je(e) || Ha(e) || oo(e),
    ja = e => {
        const t = {};
        return Object.keys(e).forEach(n => {
            const s = e[n];
            us(s) ? t[n] = s : ro(s) && Wa(s, "value") && us(s.value) && (t[n] = s.value)
        }), t
    },
    qa = () => {
        const e = M({}),
            {
                update: t,
                subscribe: n,
                set: s
            } = e;
        return {
            subscribe: n,
            setAgents: a => {
                s(Bn("id", a))
            },
            addAgent: a => {
                t(c => ({ ...c,
                    [a.id]: a
                }))
            },
            updateAgent: (a, c) => {
                t(u => u[a] ? { ...u,
                    [a]: { ...u[a],
                        ...c
                    }
                } : u)
            },
            setVirtualAgent: a => {
                const {
                    description: c,
                    avatar: u,
                    name: d
                } = a, f = {};
                c && (f.description = c), u && (f.avatar = u), d && (f.fullname = d), t(_ => (Object.keys(_).forEach(v => {
                    _[v] = { ..._[v],
                        ...f
                    }
                }), _))
            }
        }
    },
    Pe = qa(),
    Ka = e => E([Pe], ([t]) => t[e] ? ? null),
    Ya = E([Pe], ([e]) => Object.values(e).filter(t => !t.disabled)),
    io = E([Ya, ve], ([e, t]) => {
        const n = t == null ? void 0 : t.group;
        return !n || n === ri ? e : e.filter(s => s.groups.length === 0 || s.groups.includes(n))
    }),
    Xa = E([io], ([e]) => e.filter(t => t.status === te.AgentStatus.Online)),
    Za = e => {
        if (e) return `${e}?size=80`;
        const {
            widgetV3Url: t
        } = O.getOptions();
        return `${t}/assets/images/default-avatar.png`
    },
    Ja = () => {
        const e = M([]),
            {
                subscribe: t,
                set: n,
                update: s
            } = e;
        return {
            subscribe: t,
            setAssignedAgentIds: l => {
                n(l)
            },
            addAssignedAgentId: l => {
                s(a => [...new Set([...a, l])])
            },
            removeAssignedAgentId: l => {
                s(a => a.filter(c => c !== l))
            }
        }
    },
    Je = Ja(),
    tn = E([Je, Pe], ([e, t]) => e.map(n => t[n]).filter(Boolean)),
    Gp = E([tn], ([e]) => e.length > 0),
    Qa = E([tn], ([e]) => e.filter(t => !t.disabled));
E([tn], ([e]) => e.some(t => t.status === te.AgentStatus.Online));
const el = () => {
        const e = M({
                disableAttachments: !1,
                disableAuthentication: !1,
                disableInput: !1
            }),
            t = M({}),
            n = r => {
                e.update(i => ({ ...i,
                    ...r
                }))
            },
            s = r => {
                t.set(r)
            };
        return {
            subscribe: E([e, t], ([r, i]) => ({ ...r,
                ...i
            })).subscribe,
            updateGeneralOptions: n,
            setMessageOptions: s
        }
    },
    vt = el();
var ao = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e[e.ClosedByVisitor = 2] = "ClosedByVisitor", e))(ao || {});
const Qe = M(te.AccountStatus.Offline),
    we = M(null),
    jt = M(0),
    lo = M(!1),
    nn = M(null),
    co = E([we], ([e]) => e === te.ChatStatus.Pending);
E([we], ([e]) => e !== null);
const tl = E([we], ([e]) => e === te.ChatStatus.Served),
    Np = E([we], ([e]) => e === te.ChatStatus.Open),
    xp = E([we], ([e]) => e === te.ChatStatus.Closed),
    Up = E([tl, jt], ([e, t]) => e && t === 0),
    Rt = (e, {
        byVisitor: t = !1
    } = {}) => {
        e ? jt.set(t ? 2 : 1) : jt.set(0)
    },
    uo = E([Qe, Qa], ([e, t]) => t.length === 0 ? e === te.AccountStatus.Online : t.some(n => n.status === te.AgentStatus.Online)),
    nl = E([vt], ([e]) => e.disableAuthentication),
    fo = () => {
        nn.set(new Date().toISOString()), le.getClient().chatRead()
    },
    go = () => {
        const e = Ve().visibilityState === "visible";
        !m(Gl) || !m(be) || !e || fo()
    },
    Vp = async () => {
        if (Rt(!0, {
                byVisitor: !0
            }), le.getClient().chatClose(), To()) {
            const e = await Mo();
            if (!e) return;
            K.addMessage(e.message), Eo(e.message.id)
        } else wn(), Zs()
    },
    sl = async () => {
        const e = m(we) === te.ChatStatus.Served,
            t = m(jt) !== ao.Open;
        if (!To() || !e || t) return;
        const n = await Mo();
        n && K.addMessage(n.message)
    };

function Pt(e) {
    return e.length === 0 ? null : e[e.length - 1]
}
const ol = e => e.slice((e.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase(),
    rl = e => {
        let t = e,
            n = 0;
        const s = ["B", "KB", "MB", "GB"];
        for (; t >= 1024 && n < s.length - 1;) t /= 1024, n++;
        return {
            size: Math.floor(t),
            unit: s[n]
        }
    },
    zp = e => {
        const t = e.split("."),
            n = Pt(t);
        return n ? n.toUpperCase() : pi
    },
    Wp = (e, t) => `${e}?name=${t}`,
    il = async (e, t) => {
        const n = le.getClient(),
            s = [];
        for (const {
                file: o
            } of e) {
            const r = await n.chatUploadInit(),
                i = new FormData;
            i.append("file", o, o.name);
            try {
                if (!(await fetch(r.url, {
                        method: "post",
                        body: i
                    })).ok) throw new Error("Upload failed");
                s.push(r.token)
            } catch {
                fe(`File [${o.name}] upload failed`), Le("fileUpload.filesWerentProcessed")
            } finally {
                t(o)
            }
        }
        return s
    },
    al = async e => {
        const t = le.getClient();
        try {
            await t.chatUploadFinish(e)
        } catch {
            fe(`Failed to finish file upload for ${e}`)
        }
    },
    ll = 1e3,
    hn = 6e4,
    cl = 36e5,
    ul = 864e5,
    dl = 2628e6,
    fl = 31536e6,
    ds = e => Math.floor(e / hn) * hn,
    gl = (e, t) => ds(new Date(e).getTime()) === ds(new Date(t).getTime()),
    pl = (e, t) => {
        const n = new Date(e),
            s = new Date(t);
        return n.getDate() === s.getDate() && n.getMonth() === s.getMonth() && n.getFullYear() === s.getFullYear()
    },
    Hp = (e, t) => e.getTime() - t.getTime(),
    ml = new Intl.DateTimeFormat(void 0, {
        hour: "numeric",
        minute: "numeric"
    }),
    hl = new Intl.DateTimeFormat(void 0, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }),
    jp = e => pl(new Date, e) ? ml : hl,
    bl = () => typeof Intl < "u" && "RelativeTimeFormat" in Intl,
    _l = e => bl() ? new Intl.RelativeTimeFormat(e, {
        numeric: "auto"
    }) : null,
    yl = [{
        unit: "year",
        amount: fl
    }, {
        unit: "month",
        amount: dl
    }, {
        unit: "day",
        amount: ul
    }, {
        unit: "hour",
        amount: cl
    }, {
        unit: "minute",
        amount: hn
    }, {
        unit: "second",
        amount: ll
    }],
    qp = (e, t) => {
        const n = _l(t);
        if (!n) return Z("Relative time format not supported"), "";
        for (const {
                unit: s,
                amount: o
            } of yl) {
            if (s === "second") return n.format(0, "second");
            if (Math.abs(e) > o) return n.format(Math.round(e / o), s)
        }
        return ""
    },
    vl = (e, t = 300) => {
        let n;
        return (...o) => {
            n || (e(...o), n = setTimeout(() => n = null, t))
        }
    };
var _e = (e => (e.ContactMessage = "contact-message", e.AgentMessage = "agent-message", e.BotMessage = "bot-message", e.BotReplies = "bot-replies", e))(_e || {}),
    We = (e => (e.Automessage = "automessage", e.Chatbot = "chatbot", e.Trigger = "trigger", e))(We || {});
const fs = async ({
        text: e,
        quickReply: t
    }) => {
        try {
            return await le.getClient().chatMessage({
                content: {
                    type: R.MessageContentType.Text,
                    text: e
                },
                quickReply: t
            }) ? ? null
        } catch {
            return null
        }
    },
    Nn = e => e.subType === R.MessageSubType.Bot || e.subType === R.MessageSubType.Trigger,
    po = e => e.subType === R.MessageSubType.Agent || Nn(e),
    wl = (e, t) => new Date(e.createdAt).getTime() - new Date(t.createdAt).getTime(),
    mo = (e, t) => t === _e.BotReplies ? `${e.id}-replies` : e.id,
    ho = e => {
        const t = {
                isRight: !1,
                isLeft: !1
            },
            n = {
                isPrimary: !1,
                isSecondary: !1
            };
        switch (e) {
            case _e.ContactMessage:
                t.isRight = !0, n.isPrimary = !0;
                break;
            default:
                t.isLeft = !0, n.isSecondary = !0
        }
        return {
            align: t,
            variant: n
        }
    },
    Cl = e => !!e.agentId || e.subType === R.MessageSubType.Bot,
    bo = (e, t) => e.subType === R.MessageSubType.System || t === _e.BotReplies,
    Sl = (e, t) => {
        const n = [];
        let s = null,
            o = null;
        for (const r of e) {
            s && !kl(r, s, t.has(r.id)) && (n.push(s), s = null, o = null), s = s || Al(r);
            const i = gs(r, s);
            if (o) {
                const a = vo(o),
                    c = _o(o);
                i.neighbors.hasTop = a, c.any.neighbors.hasBottom = a, c.attachmentContext && (c.attachmentContext.extraSpaces.hasBottom = xt(c.attachmentContext.attachment))
            }
            const l = Ml(r);
            if (l && El(l, i, o), s.messagesContext.push(i), o = i, Nn(r) && Pl(r)) {
                n.push(s);
                const a = Tl(r);
                a.messagesContext.push(gs(r, a)), n.push(a), s = null
            }
        }
        return s && n.push(s), n
    },
    Al = e => {
        const t = yo(e),
            n = e.subType === R.MessageSubType.Bot || e.subType === R.MessageSubType.Trigger,
            {
                align: s,
                variant: o
            } = ho(t);
        return {
            type: t,
            isBot: n,
            id: mo(e, t),
            date: e.createdAt,
            agentId: e.agentId,
            align: s,
            variant: o,
            messagesContext: [],
            showAvatar: Cl(e),
            useFullWidth: bo(e, t)
        }
    },
    Tl = e => {
        const t = _e.BotReplies,
            {
                align: n,
                variant: s
            } = ho(t);
        return {
            type: _e.BotReplies,
            isBot: !0,
            id: mo(e, t),
            date: e.createdAt,
            agentId: e.agentId,
            align: n,
            variant: s,
            messagesContext: [],
            showAvatar: !1,
            useFullWidth: bo(e, t)
        }
    },
    gs = (e, t) => ({
        group: t,
        message: e,
        neighbors: {
            hasTop: !1,
            hasBottom: !1
        },
        attachmentsContext: []
    }),
    El = (e, t, n) => {
        let s = null;
        for (const o of e) {
            const r = ps(o),
                i = {
                    hasTop: !1,
                    hasBottom: !1
                },
                l = xt(o),
                a = {
                    hasTop: l,
                    hasBottom: !1
                };
            if (s) {
                const u = ps(s.attachment),
                    d = xt(s.attachment);
                s.neighbors.hasBottom = u && r, i.hasTop = u && r, s.extraSpaces.hasBottom = !l && d
            } else if (t.neighbors.hasBottom = r, i.hasTop = r, Ol(t.message))
                if (i.hasTop = !1, t.neighbors.hasTop = !1, t.neighbors.hasBottom = !1, n) {
                    const u = vo(n),
                        d = _o(n);
                    i.hasTop = u && r, d.any.neighbors.hasBottom = u && r;
                    const f = d.attachmentContext;
                    f && (f.extraSpaces.hasBottom = !l && xt(f.attachment))
                } else a.hasTop = !1;
            const c = {
                attachment: o,
                neighbors: i,
                extraSpaces: a,
                messageContext: t
            };
            t.attachmentsContext.push(c), s = { ...c
            }
        }
    },
    _o = e => {
        const t = Pt(e.attachmentsContext) || void 0;
        return {
            attachmentContext: t,
            any: t || e
        }
    },
    Ml = e => {
        var t;
        return e ? ((t = e.content) == null ? void 0 : t.type) === R.MessageContentType.Upload ? [e.content.data] : e.attachments : []
    },
    Ol = e => !e.content.text,
    kl = (e, t, n) => {
        const s = yo(e),
            o = s === _e.AgentMessage && e.agentId === t.agentId,
            r = s === _e.ContactMessage,
            i = e.subType !== R.MessageSubType.Bot || (e.content.quickReplies || []).length === 0 || n;
        return t.type === s && (o || r) && i && gl(t.date, e.createdAt)
    },
    yo = e => {
        switch (e.subType) {
            case R.MessageSubType.Agent:
                return _e.AgentMessage;
            case R.MessageSubType.Contact:
                return _e.ContactMessage;
            case R.MessageSubType.Bot:
                return _e.BotMessage
        }
        return null
    },
    vo = e => {
        const t = e.attachmentsContext.length;
        return !(t > 0 && e.attachmentsContext[t - 1].attachment.type === R.AttachmentType.File)
    },
    ps = e => e.type !== R.AttachmentType.File,
    xt = e => !!e && e.type === R.AttachmentType.File,
    wo = () => {
        const e = Hc();
        e.volume = si, e.addEventListener("canplaythrough", () => {
            e.play().catch(t => Z("Could not play message sound.", t))
        })
    },
    Fl = vl(wo, oi),
    Il = e => e.filter(t => t.type === R.MessageType.Message && (t.subType === R.MessageSubType.Agent || t.subType === R.MessageSubType.Contact)),
    Ll = (e, t = !0) => {
        const n = e.reduce((s, o) => (s.push(o), o.content.type === R.MessageContentType.ChatClose || o.content.type === R.MessageContentType.ChatVisitorClose ? [] : s), []);
        return t ? n.filter(s => s.type === R.MessageType.Message && s.subType !== R.MessageSubType.System) : n
    },
    Rl = e => {
        const t = {};
        return e.forEach(n => {
            var s;
            if (n.trigger) {
                let o = We.Automessage;
                n.subType === R.MessageSubType.Trigger ? o = We.Trigger : n.subType === R.MessageSubType.Bot && n.content.quickReplies && (o = We.Chatbot), t[((s = n.trigger) == null ? void 0 : s.id) || ""] = {
                    type: o,
                    sent: !0
                }
            }
        }), t
    },
    Pl = e => !!(e.content.quickReplies && e.content.quickReplies.length > 0),
    Dl = () => {
        const e = M({}),
            {
                subscribe: t,
                update: n,
                set: s
            } = e,
            o = u => {
                s(Bn("id", u))
            },
            r = u => {
                n(d => ({ ...d,
                    [u.id]: u
                })), $l(u)
            },
            i = u => {
                n(d => ({ ...d,
                    [u.id]: u
                }))
            };
        return {
            subscribe: t,
            setMessages: o,
            addMessage: r,
            replaceMessage: i,
            updateMessageRating: (u, d) => {
                n(f => {
                    const _ = f[u];
                    if (!_ || _.content.type !== "rate_form") return { ...f
                    };
                    const v = { ..._,
                        content: { ..._.content,
                            data: {
                                value: d.value,
                                text: d.text ? ? void 0
                            }
                        }
                    };
                    return { ...f,
                        [u]: v
                    }
                })
            },
            sendMessage: async (u, d) => {
                bn.set(u);
                const f = await fs({
                    text: u
                });
                f && (bn.set(null), i(f), q.emit("messageSent", f), Uc(m(Qe))), await Promise.all(d.map(_ => al(_)))
            },
            sendBotReply: async (u, d, f) => {
                const _ = await fs({
                    text: d,
                    quickReply: {
                        replyTo: u,
                        payload: f
                    }
                });
                f.isGoBackButton || Sc(d), _ && i(_)
            }
        }
    },
    K = Dl(),
    Bl = e => {
        m(Ge) || Kn(), Gu(), setTimeout(() => {
            K.addMessage(e), Wo()
        }, 1600)
    },
    $l = e => {
        e && m(qt) && m(Ge) && !(m(Bo) && m(be)) && jc(e) && Fl()
    },
    xn = E([K, nn], ([e, t]) => {
        const n = Object.values(e).filter(po);
        return t ? n.filter(s => new Date(s.createdAt) > new Date(t)) : n
    }),
    Un = E([xn], ([e]) => Pt(e)),
    Co = E([xn], ([e]) => e.length),
    Gl = E([Co], ([e]) => e > 0),
    Te = E([K], ([e]) => Object.values(e).sort(wl)),
    Kp = E([Te, ni], ([e, t]) => Sl(e, t)),
    So = E([Te], ([e]) => {
        const t = Pt(e);
        return (t == null ? void 0 : t.id) ? ? null
    }),
    Yp = E([K], ([e]) => {
        var s;
        const t = Object.values(e).filter(o => {
                var r;
                return typeof((r = o.widgetOptions) == null ? void 0 : r.disableInput) == "boolean"
            }),
            n = Pt(t);
        return ((s = n == null ? void 0 : n.widgetOptions) == null ? void 0 : s.disableInput) ? ? !1
    }),
    Ao = E([K], ([e]) => Object.values(e).filter(t => t.subType === "contact" || t.subType === "agent").length > 0),
    Nl = E([K], ([e]) => Object.values(e).filter(t => t.subType === R.MessageSubType.Contact).length > 0),
    Xp = E([K, Ys], ([e, t]) => {
        var s, o;
        if (!t) return null;
        const n = e[t] ? ? null;
        return !n || n.content.type !== "rate_form" ? null : {
            messageId: n.id,
            value: (s = n.content.data) == null ? void 0 : s.value,
            text: (o = n.content.data) == null ? void 0 : o.text
        }
    }),
    xl = E([Te], ([e]) => e.slice().reverse().find(n => n.subType === R.MessageSubType.Contact) || null),
    bn = M(null),
    To = () => !!O.getOptions().ratingEnabled,
    Eo = e => {
        Ys.set(e), Dn(en.ChatRating)
    },
    Mo = async () => {
        try {
            return await le.getClient().chatRateInit()
        } catch (e) {
            fe("Init chat rating failed.", String(e)), Le(m(ae)("form.submit.error"))
        }
    },
    Zp = async ({
        messageId: e,
        rating: {
            text: t,
            value: n
        },
        onSuccess: s
    }) => {
        const o = m(K)[e];
        try {
            K.updateMessageRating(e, {
                value: n,
                text: t
            }), await le.getClient().chatRate({
                messageId: e,
                value: n,
                text: t ? ? void 0
            }), s && s()
        } catch (r) {
            o && K.replaceMessage(o), fe("Chat rating failed.", String(r)), Le(m(ae)("form.submit.error"))
        }
    },
    Jp = e => {
        const {
            widgetV3Url: t
        } = O.getOptions();
        return `${t}/assets/images/rating/${e}.svg`
    },
    Oe = [];
let Vn = !1,
    J, zn = !1,
    At;
const Ul = () => {
        const {
            googleAnalyticsEnabled: e
        } = O.getOptions();
        J = window.top || window, e && (J.gtag && (At = J.gtag, zn = !0), q.on("analyticsConsentChanged", Vl), !Vn && In() && Oo())
    },
    Vl = e => {
        !Vn && e && Oo()
    },
    Oo = () => {
        const {
            gaKey: e,
            gaOptions: t,
            googleAnalyticsManual: n,
            googleAnalyticsMeasurementIds: s
        } = O.getOptions(), o = t || {
            cookieDomain: "auto"
        };
        if (e) Oe.push({
            key: e,
            options: o
        });
        else if (n && s) s.forEach(r => {
            Oe.push({
                key: r,
                options: o
            })
        });
        else try {
            Oe.push(...zl())
        } catch (r) {
            const i = r instanceof Error ? r.message : r;
            se("Error during getting GA top trackers", i)
        }
        Oe.length > 0 && !zn && Hl(), Oe.length !== 0 ? (ql(), Vn = !0, se("GA initialized")) : se("No GA to setup")
    },
    zl = () => {
        const e = [];
        if (!J.ga && !J.google_tag_manager) throw new Error("Parent GA object is not available");
        return e.push(...ko()), Wl().forEach(n => {
            e.findIndex(o => o.key === n.key) === -1 && e.push(n)
        }), e
    },
    Wl = () => {
        const {
            gaName: e
        } = O.getOptions(), t = [];
        if (J.ga) {
            const {
                ga: n
            } = J;
            n(() => {
                const s = n.getAll();
                se("topTrackers", s), s && s.every(o => {
                    const r = {
                        key: o.get("trackingId"),
                        options: {
                            cookieDomain: o.get("cookieDomain") || "auto",
                            name: o.get("name") || ""
                        }
                    };
                    return e && r.options && r.options.name === e ? (t.push(r), !1) : (t.push(r), !0)
                })
            })
        }
        return t
    },
    ko = () => {
        const e = [];
        return J.google_tag_manager && Object.keys(J.google_tag_manager).forEach(n => {
            n.match(/(UA-\d*-\d*)|(G-([A-Z,0-9]*))/g) && e.push({
                key: n,
                options: {
                    cookieDomain: "auto"
                }
            })
        }), e
    },
    Hl = () => {
        const e = J.document,
            {
                head: t
            } = e,
            n = e.createElement("script");
        n.id = "gtag", n.type = "text/javascript", n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js", t.insertBefore(n, t.firstChild), J.dataLayer = J.dataLayer || [], J.gtag = function() {
            J.dataLayer.push(arguments)
        }, At = J.gtag, At("js", new Date)
    },
    jl = () => {
        let e = [];
        if (zn) {
            const t = ko();
            Oe.forEach(n => {
                t.find(({
                    key: s
                }) => s === n.key) || e.push(n)
            })
        } else e = [...Oe];
        return e
    },
    ql = () => {
        jl().forEach(e => {
            const {
                key: t,
                options: n
            } = e;
            let s = {};
            n ? (s = {
                cookie_domain: n.cookieDomain
            }, n.name && (s.name = n.name)) : s = {
                cookie_domain: (J == null ? void 0 : J.document.domain) || ""
            }, At("config", t, s)
        })
    },
    Kl = (e, t) => {
        const {
            googleAnalyticsEnabled: n
        } = O.getOptions();
        if (!(!n || !J.gtag || !In() || J.document.hidden)) try {
            Oe.forEach(s => {
                t.send_to = s.key, At("event", e, t), se(`Smartsupp: GA event ${e} - ${JSON.stringify(t)}`)
            })
        } catch (s) {
            const o = s instanceof Error ? s.message : s;
            se("Smartsupp: GA error:", o)
        }
    },
    Yl = "Visitor_started_conversation",
    Xl = "Trigger_message_sent",
    Zl = "Trigger_message_viewed",
    Jl = "Trigger_visitor_reaction",
    Ql = "Auto_message_sent",
    ec = "Auto_message_viewed",
    tc = "Auto_message_visitor_reaction",
    nc = "Chatbot_sent",
    sc = "Chatbot_viewed",
    oc = "Chatbot_interaction",
    rc = "Chatbot_button_interaction",
    ic = "Chatbot_visitor_reaction",
    ac = "Agent_served_conversation",
    lc = "Contact_acquired",
    cc = "Auth_form_filled",
    uc = "Offline_message_sent",
    dc = "Feedback_sent",
    fc = "Feedback_text_sent",
    gc = {
        event_category: "Smartsupp_v3",
        non_interaction: !0
    },
    oe = (e, t) => {
        const n = { ...gc,
            ...t
        };
        Kl(e, n)
    },
    pc = (e = "") => oe(Xl, {
        event_label: e
    }),
    mc = e => oe(Zl, {
        event_label: e
    }),
    hc = (e = "") => oe(Jl, {
        event_label: e
    }),
    bc = (e = "") => oe(Ql, {
        event_label: e
    }),
    _c = e => oe(ec, {
        event_label: e
    }),
    yc = (e = "") => oe(tc, {
        event_label: e
    }),
    vc = (e = "") => oe(nc, {
        event_label: e
    }),
    wc = e => oe(sc, {
        event_label: e
    }),
    Cc = (e = "") => oe(oc, {
        event_label: e
    }),
    Sc = (e = "") => oe(rc, {
        event_label: e
    }),
    Ac = (e = "") => oe(ic, {
        event_label: e
    }),
    Tc = () => oe(Yl),
    Ec = e => oe(ac, {
        event_label: e
    }),
    Mc = () => oe(cc),
    Oc = () => oe(uc),
    kc = (e, t) => {
        const n = {
            event_label: t || Ks[e] || "",
            value: e
        };
        oe(t ? fc : dc, n)
    },
    Fc = e => oe(lc, {
        event_label: e
    });
let _n = !1,
    me = {};
const Fo = () => {
        _n = !1
    },
    Ic = () => {
        const e = m(Te);
        me = Rl(e)
    },
    Io = e => {
        var t, n;
        return ((n = me[((t = e.trigger) == null ? void 0 : t.id) || ""]) == null ? void 0 : n.type) === "chatbot"
    },
    Lc = (e, t) => _n ? !1 : Ll(e).length === 1 && t === R.MessageSubType.Contact ? (_n = !0, !0) : !1,
    Rc = (e, t) => {
        var s, o;
        const n = ((s = e.trigger) == null ? void 0 : s.id) || "";
        return t.subType === R.MessageSubType.Contact && e.subType === R.MessageSubType.Trigger && !((o = me[n]) != null && o.visitorResponded) ? (me[n].visitorResponded = !0, !0) : !1
    },
    Pc = (e, t) => {
        var s, o;
        const n = ((s = e.trigger) == null ? void 0 : s.id) || "";
        return t.subType === R.MessageSubType.Contact && !(t.groupId || t.content.quickReplies || t.content.quickReply) && e.subType === R.MessageSubType.Bot && !((o = me[n]) != null && o.visitorResponded) ? (me[n].visitorResponded = !0, !0) : !1
    },
    Dc = (e, t) => {
        var s, o;
        const n = ((s = e.trigger) == null ? void 0 : s.id) || "";
        return t.subType === R.MessageSubType.Contact && Io(e) && e.subType === R.MessageSubType.Bot && !((o = me[n]) != null && o.reacted) ? (me[n].reacted = !0, !0) : !1
    },
    ct = (e, t, n = !1) => {
        var s;
        if (e.length > 0 && !n) {
            const o = e.slice(-2).filter(r => r.trigger);
            return o ? (s = o[o.length - 1].trigger) == null ? void 0 : s.name : ""
        } else return t.trigger ? t.trigger.name : ""
    },
    Bc = e => {
        const t = m(Te);
        Gc(t, e), Nc(t, e), Lc(t, e.subType) && Tc()
    },
    $c = e => {
        var o;
        let t = e;
        const s = m(Te).filter(r => r.trigger);
        s && s.length > 0 && (t = ((o = s[s.length - 1].trigger) == null ? void 0 : o.name) ? ? e), Fc(t)
    },
    Gc = (e, t) => {
        var o, r, i, l;
        const n = ((o = t.trigger) == null ? void 0 : o.id) || "";
        t.subType === R.MessageSubType.Bot && !((r = me[n]) != null && r.sent) && ((i = t.content) != null && i.quickReplies || (l = t.content) != null && l.quickReply ? (vc(ct(e, t, !0)), me[n] = {
            sent: !0,
            type: We.Chatbot
        }) : (bc(ct(e, t, !0)), me[n] = {
            sent: !0,
            type: We.Automessage
        }));
        const s = e.length > 1 ? e[e.length - 2] : void 0;
        s && (Pc(s, t) ? Io(s) ? Ac(ct(e, t)) : yc(ct(e, t)) : Dc(s, t) && Cc(ct(e, t)))
    },
    Nc = (e, t) => {
        var s, o;
        t.subType === R.MessageSubType.Trigger && (pc((s = t == null ? void 0 : t.trigger) == null ? void 0 : s.name), me[((o = t.trigger) == null ? void 0 : o.id) || ""] = {
            sent: !0,
            type: We.Trigger
        });
        const n = e.length > 1 ? e[e.length - 2] : void 0;
        n && Rc(n, t) && hc(ct(e, t))
    },
    xc = () => {
        const e = m(xn).filter(n => n.trigger),
            t = e[e.length - 1];
        t && t.trigger && (t.subType === R.MessageSubType.Bot && t.content.quickReplies ? wc(t.trigger.name) : t.subType === R.MessageSubType.Bot ? _c(t.trigger.name) : t.subType === R.MessageSubType.Trigger && mc(t.trigger.name))
    },
    Uc = e => {
        e === te.AccountStatus.Offline && Oc()
    };
q.on("messageReceived", Bc);
q.on("agentJoined", e => {
    Ec(e.fullname)
});
q.on("chatRated", e => {
    kc(e.value, e.text)
});
q.on("chatClosed", () => {
    Fo()
});
q.on("chatVisitorClosed", () => {
    Fo()
});
q.on("contactAcquired", ({
    acquiredBy: e
}) => {
    $c(e)
});
Lt.push(Ic);
const Lo = (e, t = 300) => {
        let n;
        return (...o) => {
            clearTimeout(n), n = setTimeout(() => e(...o), t)
        }
    },
    Vc = 500;
var Ro = (e => (e.Default = "blackberry2.mp3", e))(Ro || {}),
    Fe = (e => (e.Connecting = "connecting", e.Connected = "connected", e.Disconnected = "disconnected", e))(Fe || {}),
    yn = (e => (e.Image = "image", e.Video = "video", e))(yn || {});
const zc = e => {
        const t = () => {
            go()
        };
        De(() => (e.addEventListener("visibilitychange", t), () => e.removeEventListener("visibilitychange", t)))
    },
    Wc = () => {
        const e = ne()._smartsupp || {};
        e.appVersion = "0.0.1", e.commitHash = "390f8b4edcea9fdaabf643754869cded9ec4cfa3", e.commitInfo = "390f8b4edcea9fdaabf643754869cded9ec4cfa3 - Merge pull request #233 from smartsupp/develop - 2023-09-21 07:02:48 +0200", ne()._smartsupp = e
    },
    Hc = (e = Ro.Default) => {
        const {
            widgetV3Url: t
        } = O.getOptions(), n = new Audio(`${t}/assets/sounds/${e}`);
        return n.crossOrigin = "anonymous", n.load(), n
    },
    jc = e => e.subType !== R.MessageSubType.Contact && ![R.MessageContentType.RateForm, R.MessageContentType.AgentJoin, R.MessageContentType.AgentLeave, R.MessageContentType.AgentAssign, R.MessageContentType.AgentUnassign].includes(e.content.type),
    Po = e => {
        le.isInitialized() && le.getClient().notify(e)
    },
    qc = () => {
        O.getOptions().isPreviewMode || Po(En.EventName.WidgetOpen)
    },
    Kc = () => Po(En.EventName.WidgetShow),
    Do = () => document.visibilityState === "visible",
    he = M(!1),
    qt = M(!0);
O.awaitOptions().then(e => {
    const t = Ae(j.SoundsEnabled);
    t ? qt.set(t === "true") : typeof e.enableSounds == "boolean" && qt.set(e.enableSounds)
});
const Qp = e => {
        qt.set(e), Be({
            name: j.SoundsEnabled,
            value: e.toString()
        }), e && wo()
    },
    Bo = M(Do()),
    Yc = Lo(() => Bo.set(Do()), Vc);
ne().addEventListener("visibilitychange", () => {
    Yc()
});
const Xc = M(0),
    em = () => Xc.update(e => e + 1),
    $o = 255,
    Zc = 32,
    tm = 500,
    Jc = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
    nm = /((?:www.)?[^\s.]+\.[^\s/]+\/[^\s.]+)/,
    sm = /[&<>"']/g,
    om = e => {
        const t = {};
        return e.filter(n => !n.isHidden).reduce((n, s) => (n[s.name] = s.value, n), t)
    },
    rm = e => {
        const t = {};
        return e.reduce((n, s) => (n[s.name] = s.validators, n), t)
    },
    im = (e, t, n) => {
        e.update(s => ({ ...s,
            [t]: n
        }))
    },
    am = (e, t) => {
        const n = {};
        for (const s in e) n[s] = t;
        return n
    },
    lm = () => Math.random().toString(36),
    Qc = e => {
        if (!e) return !1;
        const t = e.split("@");
        if (t.length !== 2) return !1;
        const n = t[0],
            s = t[1];
        return n.length > 64 || s.length > 255 || s.split(".").some(r => r.length > 63) ? !1 : Jc.test(e)
    };
var et = (e => (e.Text = "text", e.Checkbox = "checkbox", e.Select = "select", e))(et || {});
const sn = () => e => {
        let t = !0;
        return e == null && (t = !1), je(e) && (t = e.trim().length > 0), {
            type: "required",
            isValid: t
        }
    },
    eu = () => e => ({
        type: "checked",
        isValid: je(e) ? e === "true" : e === !0
    }),
    tu = () => e => ({
        type: "email",
        isValid: Qc(String(e))
    }),
    nu = () => e => ({
        type: "phone",
        isValid: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/.test(String(e))
    }),
    pn = M(void 0),
    su = e => {
        const {
            emailControl: t
        } = O.getOptions(), n = !!(e != null && e.email);
        return t && !n
    },
    ou = e => {
        const {
            nameControl: t
        } = O.getOptions(), n = !!(e != null && e.name);
        return t && !n
    },
    ru = e => {
        const {
            numberControl: t
        } = O.getOptions(), n = !!(e != null && e.phone);
        return !!t && !n
    },
    iu = () => {
        const {
            groupSelectEnabled: e
        } = O.getOptions(), t = m(Js);
        return !!e && t.length > 0
    },
    au = () => {
        const {
            privacyNoticeEnabled: e,
            privacyNoticeCheckRequired: t
        } = O.getOptions(), n = yu();
        return !!e && t && !n
    },
    lu = e => {
        var s;
        const {
            privacyNoticeEnabled: t
        } = O.getOptions(), n = !!((s = e == null ? void 0 : e.variables) != null && s.personalDataProcessingConsent);
        return !!t && !n
    },
    cu = () => ({
        type: et.Text,
        subType: "email",
        name: "email",
        label: "authForm.label.email",
        placeholder: "authForm.yourEmail",
        value: "",
        validators: [sn(), tu()],
        maxLength: $o
    }),
    uu = () => ({
        type: et.Text,
        subType: "text",
        name: "name",
        label: "authForm.label.name",
        placeholder: "authForm.yourName",
        value: "",
        validators: [sn()],
        maxLength: $o
    }),
    du = () => ({
        type: et.Text,
        subType: "tel",
        name: "phone",
        label: "authForm.label.phone",
        placeholder: "authForm.yourPhone",
        value: "",
        validators: [sn(), nu()],
        maxLength: Zc
    }),
    fu = e => {
        const t = m(Js);
        return {
            type: et.Select,
            name: "group",
            label: "authForm.label.group",
            placeholder: "authForm.group",
            value: (e == null ? void 0 : e.group) ? ? "",
            validators: [sn()],
            options: t.map(n => ({
                text: n.name,
                value: n.key
            }))
        }
    },
    gu = () => ({
        type: et.Checkbox,
        name: "personalDataProcessingConsent",
        label: "authForm.acceptTerms",
        value: !1,
        validators: [eu()]
    }),
    pu = () => ({
        type: et.Checkbox,
        name: "personalDataProcessingConsent",
        label: "topBar.gdprTitle",
        value: !1,
        validators: [],
        isHidden: !0
    }),
    Go = e => ({
        showEmail: su(e),
        showName: ou(e),
        showPhone: ru(e),
        showGroups: iu(),
        showConsent: au()
    }),
    mu = e => ({
        showEmail: !!e.emailControl,
        showName: !!e.nameControl,
        showPhone: !!e.numberControl,
        showGroups: !!e.groupSelectEnabled,
        showConsent: !!e.privacyNoticeEnabled && e.privacyNoticeCheckRequired
    }),
    hu = e => Object.values(Go(e)).some(t => t),
    cm = (e, t) => {
        const n = [],
            {
                showEmail: s,
                showName: o,
                showPhone: r,
                showGroups: i,
                showConsent: l
            } = t ? mu(t) : Go(e);
        return o && n.push(uu()), s && n.push(cu()), r && n.push(du()), i && n.push(fu(e)), l ? n.push(gu()) : n.length > 0 && (t ? t != null && t.privacyNoticeEnabled : lu(e)) && n.push(pu()), n
    },
    bu = () => {
        const e = Jt()[j.AuthForm];
        if (!e) return null;
        try {
            return JSON.parse(e)
        } catch {
            return null
        }
    },
    um = (e, t) => {
        const n = bu(),
            s = {
                [e]: t
            },
            o = n ? { ...n,
                ...s
            } : s;
        Be({
            name: j.AuthForm,
            value: JSON.stringify(o)
        })
    },
    dm = () => {
        Ws(j.AuthForm)
    },
    _u = () => {
        var t;
        const e = m(ve);
        return !!((t = e == null ? void 0 : e.variables) != null && t.authenticated)
    },
    yu = () => {
        var e;
        return ((e = m(ve)) == null ? void 0 : e.gdprApproved) || !1
    },
    vu = () => {
        if (m(nl) || _u()) return !1;
        const e = m(ve);
        if (!hu(e)) return !1;
        const {
            requireLogin: t
        } = O.getOptions(), n = m(Qe) === te.AccountStatus.Offline;
        return !!t || n
    },
    fm = async e => {
        const {
            privacyNoticeCheckRequired: t
        } = O.getOptions(), n = m(ve), s = (n == null ? void 0 : n.name) ? ? e.name, o = (n == null ? void 0 : n.email) ? ? e.email, r = (n == null ? void 0 : n.phone) ? ? e.phone, i = e.group ? ? (n == null ? void 0 : n.group), l = e.personalDataProcessingConsent, a = { ...s && {
                name: s
            },
            ...o && {
                email: o
            },
            ...r && {
                phone: r
            },
            ...i && {
                group: i
            },
            ...l && t && {
                personalDataProcessingConsent: l
            }
        };
        await le.getClient().authenticate(a), Mc(), await zo(), Zs()
    },
    Wn = M(!1),
    No = M(!1);
ne().addEventListener("offline", () => Wn.set(!0));
ne().addEventListener("online", () => Wn.set(!1));
const xo = E([Gn, Wn, No], ([e, t, n]) => n ? Fe.Connected : !e || t ? Fe.Disconnected : Fe.Connected, Fe.Connecting);
let wt;
xo.subscribe(e => {
    e === Fe.Disconnected && !wt && (wt = Ht(m(ae)("error.noInternet"), 0)), e === Fe.Connected && wt && (wt(), wt = void 0)
});
const wu = () => {
        const e = m(xo),
            t = m(Ao),
            n = m(vt);
        return e === Fe.Disconnected || !t || n.disableAttachments
    },
    Kt = M(!1),
    gm = e => {
        if (m(Kt)) {
            Z("There is already file upload in progress");
            return
        }
        if (e.length === 0) return;
        const t = Cu(e);
        t.length > 0 && ze.add(t)
    },
    Cu = e => e.length > Ct ? (Le(`${m(ae)("fileUpload.tooManyFiles")} ${Ct}`), []) : e.filter(t => Su(t)),
    Su = e => {
        const {
            acceptedFileExtensions: t,
            acceptedFileTypes: n,
            maxFileSize: s
        } = m(Qs);
        if (!e) return !1;
        const o = t.includes(ol(e.name)),
            r = n.some(i => i === e.type);
        if (wu()) return Z("File upload is disabled"), !1;
        if (!m(Ao)) return Le(m(ae)("warningBar.uploadFileNotFirst")), !1;
        if (e.size > s) {
            const i = rl(s);
            return Le(`${m(ae)("fileUpload.fileTooBig")} ${i.size} ${i.unit}`), !1
        }
        return o || r ? !0 : (Le(m(ae)("fileUpload.badFileType")), !1)
    },
    Au = () => ze.count() === 0 ? [] : (ze.setUploadingStatus(), il(m(ze), e => ze.setFileUploaded(e.name))),
    ms = 10,
    Tu = 1e4,
    Eu = 3e4,
    vn = {
        ":)": "🙂",
        ":-)": "🙂",
        ":D": "😀",
        ":-D": "😀",
        ";)": "😉",
        ";-)": "😉",
        "<3": "❤️",
        ":(": "😞",
        ":-(": "😞",
        ":P": "😛",
        ":-P": "😛",
        ":-o": "😮",
        ":O": "😮",
        ":/": "😕",
        ":-/": "😕"
    },
    Mu = e => {
        const t = `(${e?"$|":""} )`;
        return new RegExp(Object.keys(vn).map(n => `${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}${t}`).join("|"), "gi")
    },
    Uo = (e, t = !1) => {
        const n = Mu(t);
        return e.replace(n, s => {
            const o = Object.keys(vn).find(i => s.toUpperCase().includes(i));
            if (!o) return s;
            const r = s.endsWith(" ") ? " " : "";
            return `${vn[o]}${r}`
        })
    },
    Ou = e => {
        if (e.length > 0 && e.length % ms === 0) {
            const t = e.slice(-ms),
                n = new Date(e[e.length - 1].createdAt).getTime();
            if (new Date().getTime() - n > Eu || !t.every(o => o.subType === R.MessageSubType.Contact)) return !1;
            const s = new Date(t[0].createdAt).getTime();
            if (n - s < Tu) return !0
        }
        return !1
    },
    Hn = M(),
    Yt = M(!1),
    pm = M(),
    ku = 200,
    on = E([Hn], ([e]) => typeof e > "u" ? Ae(j.Message) ? ? "" : e),
    jn = E([on], ([e]) => e.trim().length === 0),
    Vo = e => {
        Hn.set(Uo(e))
    },
    mm = (e, t) => {
        const n = m(on) ? ? "",
            s = n.slice(0, t),
            o = n.slice(t),
            r = `${s}${e}${o}`;
        Hn.set(r)
    },
    hm = () => {
        if (m(Yt)) return;
        le.getClient().chatTyping(!0), Yt.set(!0)
    },
    Fu = () => {
        if (!m(Yt)) return;
        le.getClient().chatTyping(!1), Yt.set(!1)
    },
    zo = async (e = []) => {
        if (m(jn) && e.length === 0) return;
        const t = Uo(m(on), !0).trim();
        await K.sendMessage(t, e), Vo(""), Fu(), e.length > 0 && (ze.clear(), Kt.set(!1))
    },
    bm = Lo(async () => {
        const e = ze.count() > 0;
        if (m(jn) && !e) return;
        if (Iu() && !e) {
            Ht(m(ae)("warningBar.sameMessageTwice"));
            return
        }
        if (vu()) {
            Dn(en.AuthForm);
            return
        }
        if (Ou(m(Te))) {
            Ht(m(ae)("warningBar.spamProtection"));
            return
        }
        if (m(Kt)) {
            fe(m(ae)("chat.fileUpload.error.stillUploading"));
            return
        }
        let t = [];
        e && (Kt.set(!0), t = await Au()), await zo(t)
    }, ku),
    Iu = () => {
        const e = m(xl),
            t = m(bn),
            n = m(on);
        return e && n === e.content.text || t && n === t
    },
    at = (e, t) => (se(`widget visible: ${String(t)} => reason: ${e}`), t && t !== m(Ge) && Kc(), t),
    qn = M(),
    Kn = () => qn.set(!0),
    Lu = () => qn.set(!1),
    Ru = E([Qe, Te, jn, co], ([e, t, n, s]) => {
        const {
            hideOfflineChat: o,
            isPreviewMode: r
        } = O.getOptions();
        return e === te.AccountStatus.Offline && !!o && Il(t).length === 0 && n && !s && !r
    }),
    Ge = E([ve, $e, qn, we, co, Ru], ([e, t, n, s, o, r]) => {
        const {
            hideMobileWidget: i,
            hideWidget: l
        } = O.getOptions();
        return e != null && e.bannedAt ? at("visitor is banned", !1) : t && i ? at("option 'hideMobileWidget' is true", !1) : typeof n == "boolean" ? at("set by API command", n) : s && !o ? at("chat status is not pending", !0) : r ? at("option 'hideOfflineChat' is true", !1) : at(`option 'hideWidget' is ${String(l)}`, !l)
    }),
    Pu = E([$e], ([e]) => {
        const {
            openOnTrigger: t
        } = O.getOptions();
        return t && !e
    }),
    be = qs(j.IsMessengerFrameOpened, !1, e => !m($e) && e === "true"),
    rn = () => {
        be.set(!0), xc(), qc()
    },
    wn = () => {
        q.emit("messengerClose", !0), be.set(!1)
    },
    Du = E([he, Ge, be], ([e, t, n]) => e && t && n);

function Bu() {
    const e = M(!1),
        {
            subscribe: t
        } = e;
    let n = null;
    return {
        subscribe: t,
        handleDragOver: (r, i = !0) => {
            i && r.preventDefault(), m(e) || e.set(!0), n && clearTimeout(n), n = window.setTimeout(() => {
                e.set(!1)
            }, 200)
        },
        handleDrop: r => {
            var l;
            r.preventDefault(), n && clearTimeout(n), e.set(!1);
            const i = (l = r.dataTransfer) != null && l.files ? [...r.dataTransfer.files] : [];
            return i.length === 0 && Ht("Dropped item(s) are not processable files"), {
                droppedFiles: i
            }
        }
    }
}
const _m = Bu(),
    $u = E([he, Ge, be], ([e, t, n]) => e && t && !n),
    Yn = M(!1),
    Xn = M(!1),
    Gu = () => {
        Yn.set(!0), Xn.set(!1)
    },
    Wo = () => {
        Xn.set(!0), Yn.set(!1)
    },
    Ho = E([$e], ([e]) => {
        const {
            mobilePopupsEnabled: t
        } = O.getOptions();
        return e ? !!t : !0
    }),
    Nu = E([he, Ge, Yn, be, Ho], ([e, t, n, s, o]) => e && t && n && !s && o),
    xu = E([he, Ge, Xn, be, Un, Ho], ([e, t, n, s, o, r]) => e && t && n && o && !s && r),
    Tt = {
        white: "#ffffff",
        slate100: "#f1f5f9",
        slate200: "#e2e8f0",
        slate300: "#cbd5e1",
        slate900: "#0f172a",
        blue700: "#1d4ed8",
        smartsuppBlue: "#1233df"
    },
    Uu = .299,
    Vu = .587,
    zu = .114,
    Wu = 180,
    Hu = -20,
    ju = -.25,
    qu = .2,
    Ku = -5,
    Yu = .03,
    Xu = .5,
    hs = 5,
    Ut = (e, t) => new yt(e).darken(t).toHexString(),
    Zu = e => {
        const t = new yt(e).toRgb();
        return `${t.r}, ${t.g}, ${t.b}`
    },
    Xt = e => /^#[0-9A-F]{6}$/i.test(e),
    an = e => {
        const {
            r: t,
            g: n,
            b: s
        } = new yt(e).toRgb();
        return Math.sqrt(Uu * (t * t) + Vu * (n * n) + zu * (s * s)) > Wu
    },
    Ju = e => {
        const t = new yt(e),
            {
                s: n,
                l: s
            } = t.toHsl();
        return t.spin(Hu).desaturate(n * ju).lighten(s * qu).toHexString()
    },
    Qu = (e, t = Xu) => {
        const n = new yt(e),
            {
                s,
                l: o
            } = n.toHsl();
        return n.spin(Ku).saturate(s * Yu).darken(o * t).toHexString()
    },
    ed = e => {
        const {
            color: t,
            color2: n,
            colorGradient: s
        } = e;
        return s ? n ? {
            from: t,
            to: n
        } : an(t) ? {
            from: t,
            to: Qu(t)
        } : {
            from: t,
            to: Ju(t)
        } : {
            from: t,
            to: t
        }
    },
    td = e => an(e) ? Tt.slate900 : Tt.white,
    nd = e => an(e) ? .1 : .2,
    sd = e => {
        if (an(e)) {
            const t = new yt(e).getLuminance();
            return t > .8 ? Ut(e, Math.pow(10 * t, t)) : e
        }
        return e
    },
    ue = (e, t, n) => {
        e.documentElement.style.setProperty(t, n)
    },
    od = (e, t) => {
        const {
            color: n
        } = t, s = ed(t), o = s.from === "#ffffff" && s.from === s.to ? {
            from: Tt.slate300,
            to: Tt.slate300
        } : s, r = td(n);
        ue(e, "--color-primary", n), ue(e, "--color-primary-content", r), ue(e, "--color-primary-content-rgb", Zu(r)), ue(e, "--color-primary-gradient-from", s.from), ue(e, "--color-primary-gradient-to", s.to), ue(e, "--color-primary-gradient-button-from", o.from), ue(e, "--color-primary-gradient-button-to", o.to), ue(e, "--color-primary-gradient-hover-from", Ut(s.from, hs)), ue(e, "--color-primary-gradient-hover-to", Ut(s.to, hs));
        const i = sd(n);
        ue(e, "--color-primary-button", i), ue(e, "--color-primary-button-hover", Ut(i, 10)), ue(e, "--color-primary-button-content", r), ue(e, "--opacity-primary-content", String(nd(n)))
    },
    rd = () => {
        const e = M({
                color: Tt.smartsuppBlue,
                color2: null,
                colorGradient: !0
            }),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            setThemeColor: o => {
                const {
                    color: r,
                    color2: i,
                    colorGradient: l
                } = o;
                if (Xt(r)) {
                    if (l && i && !Xt(i)) {
                        Z(`Provided color '${i}' is not valid. Default color will be used instead.`);
                        return
                    }
                } else {
                    Z(`Provided color '${r}' is not valid. Default color will be used instead.`);
                    return
                }
                n({
                    color: r,
                    color2: i,
                    colorGradient: l
                })
            }
        }
    },
    Zn = rd(),
    jo = 24,
    qo = 12,
    id = 300,
    Ko = 56,
    Yo = Ko,
    ad = 166,
    ld = Yo + 16,
    cd = 380,
    ud = 672,
    dd = 12,
    fd = 560,
    gd = 840,
    pd = 104,
    md = 60,
    ym = E([$e], ([e]) => e ? md : pd),
    _t = e => `${e}px`,
    Xo = e => {
        if (e) return je(e) ? parseInt(e, 10) : e
    },
    hd = (e, t) => e ? {
        width: "100%",
        height: "100%"
    } : t ? {
        width: fd,
        height: gd
    } : {
        width: cd,
        height: ud
    },
    bd = e => {
        e.style.borderRadius = _t(dd), e.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px"
    },
    Zo = () => {
        const {
            offsetY: e
        } = O.getOptions();
        return Xo(e) ? ? jo
    },
    Jo = () => {
        const {
            offsetX: e
        } = O.getOptions();
        return Xo(e) ? ? qo
    },
    _d = e => e ? 0 : jo,
    yd = e => e ? 0 : qo,
    Jn = () => {
        const {
            position: e
        } = O.getOptions();
        return e === "fixed"
    },
    Qn = e => {
        Jn() && (e.style.position = "fixed")
    },
    ln = (e, t) => {
        Jn() && (e.style.bottom = _t(t))
    },
    cn = (e, t) => {
        if (Jn()) {
            const {
                orientation: n
            } = O.getOptions();
            n === "right" ? (e.style.left = "initial", e.style.right = _t(t)) : (e.style.left = _t(t), e.style.right = "initial")
        }
    },
    un = e => {
        const {
            zIndex: t
        } = O.getOptions();
        e.style.zIndex = String(t ? ? "auto")
    },
    Qo = e => {
        e.style.overflow = "hidden"
    },
    Dt = e => {
        const t = document.createElement("iframe");
        return t.style.position = "absolute", t.style.width = "100%", t.style.height = "100%", t.style.border = "none", t.style.display = "block", t.style.textAlign = "left", t.style.margin = "0", t.style.padding = "0", t.style.top = "0", t.style.left = "0", t.style.opacity = "1", e && e(t), t.getAttribute("style") ? ? ""
    },
    vd = e => {
        Qn(e), ln(e, Zo()), cn(e, Jo()), un(e)
    },
    wd = (e, t) => {
        Qn(e), ln(e, _d(t)), cn(e, yd(t)), un(e), Qo(e), t || bd(e)
    },
    er = e => {
        Qn(e), ln(e, Zo() + ld), cn(e, Jo()), un(e), Qo(e)
    },
    Cd = e => {
        e.style.position = "fixed", e.style.width = "100%", e.style.height = "100%", ln(e, 0), cn(e, 0), un(e)
    },
    Sd = e => {
        vd(e)
    },
    Ad = (e, t) => {
        wd(e, t)
    },
    Td = e => {
        er(e)
    },
    Ed = e => {
        er(e)
    },
    Md = e => {
        Cd(e)
    },
    tr = M(id),
    nr = M(ad),
    Cn = M(!1),
    sr = M(void 0),
    es = E([$e, sr], ([e, t]) => {
        const {
            buttonStyle: n
        } = O.getOptions();
        return t ? t === "bubble" : e || n === "bubble"
    }),
    Od = E([es, tr], ([e, t]) => e ? Ko : t),
    or = M(),
    kd = E([or], ([e]) => typeof e > "u" ? Ae(j.IsMessengerFrameExpanded) === (!0).toString() : e),
    vm = e => {
        Be({
            name: j.IsMessengerFrameExpanded,
            value: e.toString()
        }), or.set(e)
    };
var $ = (e => (e.Name = "name", e.Group = "group", e.Email = "email", e.Phone = "phone", e.Variables = "variables", e.Language = "language", e.ChatClose = "chat:close", e.ChatOpen = "chat:open", e.ChatShow = "chat:show", e.ChatHide = "chat:hide", e.ThemeColor = "theme:color", e.ChatMessage = "chat:message", e.RecordingDisable = "recording:disable", e.RecordingOff = "recording:off", e.HtmlApply = "html:apply", e.On = "on", e.AnalyticsConsent = "analyticsConsent", e.MarketingConsent = "marketingConsent", e.OpenRateForm = "openRateForm", e.OpenAuthForm = "openAuthForm", e.WidgetStatus = "widgetStatus", e.Translations = "translations", e.AuthFormFields = "authFormFields", e.ButtonStyle = "buttonStyle", e.PreviewTranslate = "previewTranslate", e.DisableConnectionStatus = "disableConnectionStatus", e))($ || {}),
    St = (e => (e.MessageSent = "message_sent", e.MessageReceived = "message_received", e.MessengerClose = "messenger_close", e))(St || {});
const Fd = e => {
        q.on("messageSent", e)
    },
    Id = e => {
        q.on("messageReceived", e)
    },
    Ld = e => {
        q.on("messengerClose", e)
    },
    Rd = {
        [St.MessageSent]: Fd,
        [St.MessageReceived]: Id,
        [St.MessengerClose]: Ld
    },
    Pd = (e, t) => {
        const n = Rd[e];
        n && n(t)
    },
    tt = "https://docs.smartsupp.com/chat-box/",
    Dd = `${tt}localization/#supported-languages`,
    Bd = `${tt}visitor-identification/#custom-visitor-data`,
    $d = `${tt}javascript-api/events/`,
    Gd = "https://www.smartsupp.com/help/cookie-consent/#where-to-enable-cookie-consent-in-smartsupp",
    rr = "https://www.smartsupp.com/pricing",
    ts = M({}),
    Sn = (e, t) => {
        ts.update(n => ({ ...n,
            [e]: t
        }))
    },
    Nd = e => Object.values($).some(t => t === e),
    Ne = (e, t) => je(t) ? !0 : (Z(`Parameter of '${e}' API command must be type string. See ${tt} for more information.`), !1),
    dn = (e, t) => oo(t) ? !0 : (Z(`Parameter of '${e}' API command must be type boolean. See ${tt} for more information.`), !1),
    xd = (e, t) => typeof t != "function" ? (Z(`Parameter of '${e}' API command must be type function. See ${tt} for more information.`), !1) : !0,
    fn = (e, t) => ro(t) ? !0 : (Z(`Parameter of '${e}' API command must be type object. See ${Bd} for more information.`), !1),
    Ud = (e, t) => {
        const n = Object.values(St);
        return n.includes(t) ? !0 : (Z(`Unknown event: '${t}'. Available event names are: ${n.join(", ")}. See ${$d} for more information.`), !1)
    },
    ir = e => {
        Z(`Unknown API command: '${e}'. See ${tt} to check available API commands.`)
    },
    ar = () => {
        var e;
        return !!((e = O.getOptions().features) != null && e.api)
    },
    Vd = () => {
        var e;
        return !!((e = O.getOptions().features) != null && e.groups)
    },
    nt = () => ar() ? !0 : (Z(`Chat box API feature is not enabled. See ${rr} to upgrade your package.`), !1),
    zd = () => !ar() || !Vd() ? (Z(`Chat box Groups feature is not enabled. See ${rr} to upgrade your package.`), !1) : !0,
    lr = () => {
        Fn() || Z(`Enable managing cookie consent in widget settings to allow this command. See ${Gd} for more information.`)
    },
    Wd = () => {
        if (!nt()) return;
        const e = () => {
            rn(), Kn()
        };
        if (!m(he)) {
            Lt.push(e);
            return
        }
        e()
    },
    Hd = () => {
        if (nt()) {
            if (!m(he)) {
                Lt.push(wn);
                return
            }
            wn()
        }
    },
    jd = () => {
        nt() && Kn()
    },
    qd = () => {
        nt() && Lu()
    },
    Kd = (e, t) => {
        if (nt() && e === $.Language && Ne(e, t)) {
            if (!no(t)) {
                Z(`Provided language '${t}' is not supported. See ${Dd} to check supported languages.`);
                return
            }
            if (!m(he)) {
                Sn(e, t);
                return
            }
            da(t)
        }
    },
    Yd = (e, t) => {
        let n, s = null,
            o = !0;
        if (nt()) {
            if (typeof t == "string" && Ne(e, t)) n = t;
            else if (fn(e, t)) {
                if (n = t.color, s = t.color2, o = t.colorGradient, !dn(e, o)) return
            } else return;
            if (Xt(n)) {
                if (o && s && !Xt(s)) {
                    Z(`Provided color '${s}' is not valid. Default color will be used instead.`);
                    return
                }
            } else {
                Z(`Provided color '${n}' is not valid. Please use hex color code.`);
                return
            }
            Zn.setThemeColor({
                color: n,
                color2: s,
                colorGradient: o
            })
        }
    },
    Xd = (e, t) => {
        nt() && Ne(e, t) && Vo(t)
    },
    Zd = (e, t, n) => {
        Ne(e, t) && Ud(e, t) && xd(e, n) && Pd(t, n)
    },
    Jd = (e, t) => {
        fn(e, t) && ve.updateVisitorVariables(ja(t))
    },
    Vt = (e, t) => {
        e !== $.Name && e !== $.Email && e !== $.Phone && e !== $.Group || Ne(e, t) && ve.updateVisitorProperty(e, t)
    },
    Qd = (e, t) => {
        if (!zd() || !Ne(e, t)) return;
        const n = m($n)[t];
        if (m(he) && !n) {
            Z(`Group with key '${t}' does not exist. Please provide correct group key from your group settings.`);
            return
        }
        Vt(e, t)
    },
    ef = (e, t) => {
        dn(e, t) && (lr(), q.emit("analyticsConsentChanged", !!t))
    },
    tf = (e, t) => {
        dn(e, t) && (lr(), q.emit("marketingConsentChanged", !!t))
    },
    nf = () => {
        Eo(m(So) || "")
    },
    sf = () => {
        Dn(en.AuthForm)
    },
    of = (e, t) => {
        Ne(e, t) && (t !== te.AccountStatus.Online && t !== te.AccountStatus.Offline || Qe.set(t))
    },
    rf = (e, t) => {
        fn(e, t) && ga(t)
    },
    af = (e, t) => {
        fn(e, t) && (m(pn) || pn.set(O.getOptions()), pn.update(n => ({ ...n,
            ...t
        })))
    },
    lf = (e, t) => {
        Ne(e, t) && sr.set(t)
    },
    cf = () => {
        let e = () => {};
        e = It.subscribe(() => {
            m(Te).forEach(t => {
                var s;
                const n = ((s = t.content) == null ? void 0 : s.data) || "";
                typeof n == "string" && n.match(/widgetPreview\..*/) && (t.content.text = m(ae)(n), K.replaceMessage(t))
            }), e()
        })
    },
    uf = (e, t) => {
        dn(e, t) && No.set(t)
    },
    df = {
        version: "390f8b4edcea9fdaabf643754869cded9ec4cfa3",
        execute: e => {
            const t = e[0];
            if (typeof t == "function") {
                pf(t);
                return
            }
            if (!Nd(t)) {
                ir(String(t));
                return
            }
            gf(t, e[1], ...e.slice(2))
        },
        exec: function(...e) {
            this.execute(e)
        }
    },
    ff = {
        [$.ChatOpen]: Wd,
        [$.ChatClose]: Hd,
        [$.ChatShow]: jd,
        [$.ChatHide]: qd,
        [$.ChatMessage]: Xd,
        [$.Language]: Kd,
        [$.ThemeColor]: Yd,
        [$.On]: Zd,
        [$.Variables]: Jd,
        [$.Name]: Vt,
        [$.Group]: Qd,
        [$.Email]: Vt,
        [$.Phone]: Vt,
        [$.AnalyticsConsent]: ef,
        [$.MarketingConsent]: tf,
        [$.HtmlApply]: null,
        [$.RecordingDisable]: null,
        [$.RecordingOff]: null,
        [$.OpenRateForm]: nf,
        [$.OpenAuthForm]: sf,
        [$.WidgetStatus]: of ,
        [$.Translations]: rf,
        [$.AuthFormFields]: af,
        [$.ButtonStyle]: lf,
        [$.PreviewTranslate]: cf,
        [$.DisableConnectionStatus]: uf
    },
    gf = (e, t, ...n) => {
        const s = ff[e];
        if (s === void 0) {
            ir(e);
            return
        }
        s !== null && (s(e, t, ...n), se(`🧙‍♂️[API] ${e}${t?":":""}`, t ? ? ""))
    },
    pf = e => {
        m(he) ? e() : Lt.push(e)
    },
    ke = ne(),
    ut = (e, t) => {
        se(`recordings ${e?"✅":"⛔️"}${t?` => reason: ${t}`:""}`)
    },
    cr = () => {
        const {
            smartlook: e,
            recordingOff: t
        } = O.getOptions();
        if (!e || !e.enabled) return ut(!1, "recordings are not enabled");
        if (ke.smartlook) return ut(!1, "smartlook is already in parent window");
        if (!In()) return ut(!1, "analytics consent not given");
        if (t) return ut(!1, "recording is disabled by 'recordingOff' option");
        hf()
    },
    mf = (e, t) => {
        const n = e.document.getElementsByTagName("head")[0],
            s = e.document.createElement("script");
        s.async = !0, s.type = "text/javascript", s.charset = "utf-8", s.crossOrigin = "anonymous", s.src = t, n.appendChild(s)
    },
    hf = () => {
        const {
            smartlook: e,
            recordingDisable: t
        } = O.getOptions(), n = ke.smartlook = function(...s) {
            var o, r;
            (r = (o = ke.smartlook) == null ? void 0 : o.api) == null || r.push(s)
        };
        ke.smartlook.api = [], mf(ke, e.scriptUrl), n("init", e.key, {
            host: e.serverHost
        }), n("record", {
            forms: !0,
            numbers: !0,
            emails: !0,
            ips: !1
        }), t ? (n("pause"), ut(!1, "recording is disabled by 'recordingDisable' option")) : (n(() => {
            var o;
            const s = (o = ke.smartlook) == null ? void 0 : o.visitorId;
            if (!s) {
                fe("Smartlook visitorId is undefined");
                return
            }
            ve.updateVisitorVariables({
                smartlook_vid: s
            }), ut(!0)
        }), se("recordings: initializing ⏳"))
    };
q.on("analyticsConsentChanged", e => {
    if (ke.smartlook) {
        ke.smartlook(e ? "resume" : "pause"), se(`recordings ${e?"resumed ▶️":"paused ⏸"}`);
        return
    }
    cr()
});

function bf(e) {
    let t, n, s;
    const o = e[3].default,
        r = Et(o, e, e[2], null);
    return {
        c() {
            t = S("div"), n = S("div"), r && r.c(), g(n, "id", e[1])
        },
        m(i, l) {
            A(i, t, l), w(t, n), r && r.m(n, null), e[4](n), s = !0
        },
        p(i, [l]) {
            r && r.p && (!s || l & 4) && Mt(r, o, i, i[2], s ? kt(o, i[2], l, null) : Ot(i[2]), null)
        },
        i(i) {
            s || (p(r, i), s = !0)
        },
        o(i) {
            h(r, i), s = !1
        },
        d(i) {
            i && T(t), r && r.d(i), e[4](null)
        }
    }
}

function _f(e, t, n) {
    let {
        $$slots: s = {},
        $$scope: o
    } = t, r;
    const i = `${ne().SMARTSUPP_AUTOCREATE!==!1?"smartsupp":kn(window).id}-widget-container`;

    function l() {
        return Ve().body
    }
    De(() => {
        l().appendChild(r)
    }), Mn(() => {
        var c;
        (c = Ve().getElementById(i)) == null || c.remove()
    });

    function a(c) {
        qe[c ? "unshift" : "push"](() => {
            r = c, n(0, r)
        })
    }
    return e.$$set = c => {
        "$$scope" in c && n(2, o = c.$$scope)
    }, [r, i, o, s, a]
}
class yf extends x {
    constructor(t) {
        super(), U(this, t, _f, bf, G, {})
    }
}

function vf(e) {
    let t;
    return {
        c() {
            t = S("iframe"), g(t, "id", e[2]), g(t, "title", e[1]), g(t, "style", e[0]), t.allowFullscreen = !0, g(t, "scrolling", "no")
        },
        m(n, s) {
            A(n, t, s), e[7](t)
        },
        p(n, [s]) {
            s & 4 && g(t, "id", n[2]), s & 2 && g(t, "title", n[1]), s & 1 && g(t, "style", n[0])
        },
        i: Y,
        o: Y,
        d(n) {
            n && T(t), e[7](null)
        }
    }
}

function wf(e, t, n) {
    let s;
    H(e, Zn, y => n(6, s = y));
    let {
        component: o
    } = t, {
        frameStyle: r
    } = t, {
        title: i
    } = t, {
        id: l
    } = t, a, c, u;
    const d = y => {
            u && u.$destroy(), y && o && (u = new o({
                target: y.body
            }))
        },
        f = y => {
            c && od(c, y)
        },
        _ = y => {
            const D = c.createElement("style");
            return D.textContent = y, c.head.appendChild(D), D
        },
        v = () => {
            for (const y of window.document.styleSheets) {
                const D = [...y.cssRules].map(N => N.cssText).join("");
                _(D)
            }
        },
        b = () => {
            a.contentDocument && (n(5, c = a.contentDocument), v())
        };
    De(async () => {
        var y;
        await Gs(), ((y = a.contentDocument) == null ? void 0 : y.readyState) === "complete" && a.contentDocument.defaultView ? b() : a.addEventListener("load", b)
    }), Mn(() => {
        a && a.removeEventListener("load", b), u && u.$destroy()
    });

    function C(y) {
        qe[y ? "unshift" : "push"](() => {
            a = y, n(3, a)
        })
    }
    return e.$$set = y => {
        "component" in y && n(4, o = y.component), "frameStyle" in y && n(0, r = y.frameStyle), "title" in y && n(1, i = y.title), "id" in y && n(2, l = y.id)
    }, e.$$.update = () => {
        e.$$.dirty & 32 && d(c), e.$$.dirty & 96 && c && f(s)
    }, [r, i, l, a, o, c, s, C]
}
class Bt extends x {
    constructor(t) {
        super(), U(this, t, wf, vf, G, {
            component: 4,
            frameStyle: 0,
            title: 1,
            id: 2
        })
    }
}

function Cf(e) {
    let t, n;
    return {
        c() {
            t = Ie("svg"), n = Ie("path"), g(n, "d", "M63.113,18.51v-.16C60.323,7.05,44.582,3,31.972,3S3.582,7,.792,18.5a66.22,66.22,0,0,0,0,20.46c1.18,4.74,5.05,8.63,11.36,11.41l-4,5A3.47,3.47,0,0,0,10.882,61a3.39,3.39,0,0,0,1.44-.31L26.862,54c1.79.18,3.49.27,5.07.27,11.04.04,28.41-4.04,31.18-15.43a60.33,60.33,0,0,0,0-20.33Z"), g(t, "xmlns", "http://www.w3.org/2000/svg"), g(t, "viewBox", "0 0 64 64"), g(t, "fill", "currentColor"), g(t, "preserveAspectRatio", "xMidYMid meet"), g(t, "width", e[0]), g(t, "height", e[0])
        },
        m(s, o) {
            A(s, t, o), w(t, n)
        },
        p(s, [o]) {
            o & 1 && g(t, "width", s[0]), o & 1 && g(t, "height", s[0])
        },
        i: Y,
        o: Y,
        d(s) {
            s && T(t)
        }
    }
}

function Sf(e, t, n) {
    let {
        size: s = 16
    } = t;
    return e.$$set = o => {
        "size" in o && n(0, s = o.size)
    }, [s]
}
class Af extends x {
    constructor(t) {
        super(), U(this, t, Sf, Cf, G, {
            size: 0
        })
    }
}

function bs(e) {
    let t;
    const n = e[2].default,
        s = Et(n, e, e[1], null);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r), t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 2) && Mt(s, n, o, o[1], t ? kt(n, o[1], r, null) : Ot(o[1]), null)
        },
        i(o) {
            t || (p(s, o), t = !0)
        },
        o(o) {
            h(s, o), t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}

function Tf(e) {
    let t, n, s = e[0] && bs(e);
    return {
        c() {
            s && s.c(), t = ye()
        },
        m(o, r) {
            s && s.m(o, r), A(o, t, r), n = !0
        },
        p(o, [r]) {
            o[0] ? s ? (s.p(o, r), r & 1 && p(s, 1)) : (s = bs(o), s.c(), p(s, 1), s.m(t.parentNode, t)) : s && (Q(), h(s, 1, 1, () => {
                s = null
            }), ee())
        },
        i(o) {
            n || (p(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && T(t), s && s.d(o)
        }
    }
}

function Ef(e, t, n) {
    let {
        $$slots: s = {},
        $$scope: o
    } = t, r = !1;
    return De(() => {
        n(0, r = !0)
    }), e.$$set = i => {
        "$$scope" in i && n(1, o = i.$$scope)
    }, [r, o, s]
}
class Mf extends x {
    constructor(t) {
        super(), U(this, t, Ef, Tf, G, {})
    }
}

function Of(e) {
    let t, n, s, o;
    return n = new Af({
        props: {
            size: 24
        }
    }), {
        c() {
            t = S("div"), k(n.$$.fragment), g(t, "class", "transform transition-transform duration-300 group-hover:scale-115")
        },
        m(r, i) {
            A(r, t, i), F(n, t, null), o = !0
        },
        p: Y,
        i(r) {
            o || (p(n.$$.fragment, r), r && Se(() => {
                o && (s || (s = dt(t, ft, {
                    delay: 200,
                    duration: 300,
                    start: .6,
                    opacity: .8
                }, !0)), s.run(1))
            }), o = !0)
        },
        o(r) {
            h(n.$$.fragment, r), r && (s || (s = dt(t, ft, {
                delay: 200,
                duration: 300,
                start: .6,
                opacity: .8
            }, !1)), s.run(0)), o = !1
        },
        d(r) {
            r && T(t), I(n), r && s && s.end()
        }
    }
}

function kf(e) {
    let t, n;
    return t = new Mf({
        props: {
            $$slots: {
                default: [Of]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            k(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 1 && (r.$$scope = {
                dirty: o,
                ctx: s
            }), t.$set(r)
        },
        i(s) {
            n || (p(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            I(t, s)
        }
    }
}
class ur extends x {
    constructor(t) {
        super(), U(this, t, null, kf, G, {})
    }
}

function Ff(e) {
    let t, n, s, o;
    return s = new ur({}), {
        c() {
            t = S("div"), n = S("div"), k(s.$$.fragment), g(n, "class", "flex-center w-12 h-12 bg-white bg-opacity-10 rounded-full"), g(t, "class", "p-1")
        },
        m(r, i) {
            A(r, t, i), w(t, n), F(s, n, null), o = !0
        },
        p: Y,
        i(r) {
            o || (p(s.$$.fragment, r), o = !0)
        },
        o(r) {
            h(s.$$.fragment, r), o = !1
        },
        d(r) {
            r && T(t), I(s)
        }
    }
}
class If extends x {
    constructor(t) {
        super(), U(this, t, null, Ff, G, {})
    }
}

function Lf(e) {
    let t, n, s = e[1]("button.greeting") + "",
        o, r, i, l;
    return i = new If({}), {
        c() {
            t = S("div"), n = S("div"), o = Ke(s), r = W(), k(i.$$.fragment), g(n, "class", "flex-center whitespace-nowrap pl-4 pr-1"), g(n, "data-testid", ie.widgetButtonText), g(t, "class", "flex")
        },
        m(a, c) {
            A(a, t, c), w(t, n), w(n, o), w(t, r), F(i, t, null), e[2](t), l = !0
        },
        p(a, [c]) {
            (!l || c & 2) && s !== (s = a[1]("button.greeting") + "") && Ye(o, s)
        },
        i(a) {
            l || (p(i.$$.fragment, a), l = !0)
        },
        o(a) {
            h(i.$$.fragment, a), l = !1
        },
        d(a) {
            a && T(t), I(i), e[2](null)
        }
    }
}

function Rf(e, t, n) {
    let s;
    H(e, ae, i => n(1, s = i));
    let o;
    De(() => {
        const i = Math.ceil(o.getBoundingClientRect().width);
        tr.set(i)
    });

    function r(i) {
        qe[i ? "unshift" : "push"](() => {
            o = i, n(0, o)
        })
    }
    return [o, s, r]
}
class Pf extends x {
    constructor(t) {
        super(), U(this, t, Rf, Lf, G, {})
    }
}

function _s(e) {
    let t, n, s;
    return {
        c() {
            t = S("div"), g(t, "id", "widget-online-badge"), g(t, "class", "absolute left-0 bottom-0 w-2 h-2 p-1.5 bg-green-400 rounded-full border-2 border-white"), g(t, "data-testid", ie.widgetOnlineBadge)
        },
        m(o, r) {
            A(o, t, r), s = !0
        },
        i(o) {
            s || (o && Se(() => {
                s && (n || (n = dt(t, ft, {}, !0)), n.run(1))
            }), s = !0)
        },
        o(o) {
            o && (n || (n = dt(t, ft, {}, !1)), n.run(0)), s = !1
        },
        d(o) {
            o && T(t), o && n && n.end()
        }
    }
}

function Df(e) {
    let t, n = e[0] && _s();
    return {
        c() {
            n && n.c(), t = ye()
        },
        m(s, o) {
            n && n.m(s, o), A(s, t, o)
        },
        p(s, [o]) {
            s[0] ? n ? o & 1 && p(n, 1) : (n = _s(), n.c(), p(n, 1), n.m(t.parentNode, t)) : n && (Q(), h(n, 1, 1, () => {
                n = null
            }), ee())
        },
        i(s) {
            p(n)
        },
        o(s) {
            h(n)
        },
        d(s) {
            s && T(t), n && n.d(s)
        }
    }
}

function Bf(e, t, n) {
    let s;
    return H(e, uo, o => n(0, s = o)), [s]
}
class $f extends x {
    constructor(t) {
        super(), U(this, t, Bf, Df, G, {})
    }
}

function ys(e) {
    let t, n = (e[0] > 99 ? "99+" : e[0]) + "",
        s, o, r;
    return {
        c() {
            t = S("div"), s = Ke(n), g(t, "id", "widget-unread-messages-badge"), g(t, "class", "absolute right-0 top-0 min-w-5 h-5 flex-center px-1 text-white bg-red-500 text-xs rounded-full shadow"), g(t, "data-testid", ie.widgetUnreadMessagesBadge)
        },
        m(i, l) {
            A(i, t, l), w(t, s), r = !0
        },
        p(i, l) {
            (!r || l & 1) && n !== (n = (i[0] > 99 ? "99+" : i[0]) + "") && Ye(s, n)
        },
        i(i) {
            r || (i && Se(() => {
                r && (o || (o = dt(t, ft, {}, !0)), o.run(1))
            }), r = !0)
        },
        o(i) {
            i && (o || (o = dt(t, ft, {}, !1)), o.run(0)), r = !1
        },
        d(i) {
            i && T(t), i && o && o.end()
        }
    }
}

function Gf(e) {
    let t, n = e[1] && ys(e);
    return {
        c() {
            n && n.c(), t = ye()
        },
        m(s, o) {
            n && n.m(s, o), A(s, t, o)
        },
        p(s, [o]) {
            s[1] ? n ? (n.p(s, o), o & 2 && p(n, 1)) : (n = ys(s), n.c(), p(n, 1), n.m(t.parentNode, t)) : n && (Q(), h(n, 1, 1, () => {
                n = null
            }), ee())
        },
        i(s) {
            p(n)
        },
        o(s) {
            h(n)
        },
        d(s) {
            s && T(t), n && n.d(s)
        }
    }
}

function Nf(e, t, n) {
    let s;
    H(e, Co, r => n(0, s = r));
    let o;
    return e.$$.update = () => {
        e.$$.dirty & 1 && n(1, o = s > 0)
    }, [s, o]
}
class xf extends x {
    constructor(t) {
        super(), U(this, t, Nf, Gf, G, {})
    }
}

function Uf(e) {
    let t, n;
    return t = new Pf({}), {
        c() {
            k(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        i(s) {
            n || (p(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            I(t, s)
        }
    }
}

function Vf(e) {
    let t, n;
    return t = new ur({}), {
        c() {
            k(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        i(s) {
            n || (p(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            I(t, s)
        }
    }
}

function zf(e) {
    let t, n, s, o, r, i, l, a, c, u, d;
    const f = [Vf, Uf],
        _ = [];

    function v(b, C) {
        return b[0] ? 0 : 1
    }
    return s = v(e), o = _[s] = f[s](e), i = new $f({}), a = new xf({}), {
        c() {
            t = S("div"), n = S("div"), o.c(), r = W(), k(i.$$.fragment), l = W(), k(a.$$.fragment), g(n, "role", "button"), g(n, "tabindex", 0), g(n, "class", "group flex-center w-full bg-primary-gradient bg-primary-gradient-hover text-primary-content rounded-full overflow-hidden cursor-pointer"), g(n, "data-testid", ie.widgetButton), g(t, "id", "smartsupp-widget-button"), g(t, "class", "h-full w-full relative flex justify-end")
        },
        m(b, C) {
            A(b, t, C), w(t, n), _[s].m(n, null), w(n, r), F(i, n, null), w(t, l), F(a, t, null), c = !0, u || (d = pe(n, "click", rn), u = !0)
        },
        p(b, [C]) {
            let y = s;
            s = v(b), s !== y && (Q(), h(_[y], 1, 1, () => {
                _[y] = null
            }), ee(), o = _[s], o || (o = _[s] = f[s](b), o.c()), p(o, 1), o.m(n, r))
        },
        i(b) {
            c || (p(o), p(i.$$.fragment, b), p(a.$$.fragment, b), c = !0)
        },
        o(b) {
            h(o), h(i.$$.fragment, b), h(a.$$.fragment, b), c = !1
        },
        d(b) {
            b && T(t), _[s].d(), I(i), I(a), u = !1, d()
        }
    }
}

function Wf(e, t, n) {
    let s;
    return H(e, es, o => n(0, s = o)), [s]
}
class Hf extends x {
    constructor(t) {
        super(), U(this, t, Wf, zf, G, {})
    }
}

function vs(e) {
    let t, n = e[2] || e[3],
        s, o, r, i, l, a = ws();
    return {
        c() {
            t = S("div"), a.c(), V(t, "border-radius", "9999px"), V(t, "box-shadow", "rgb(0 0 0 / 6%) 0px 1px 6px 0px, rgb(0 0 0 / 12%) 0px 2px 32px 0px"), g(t, "data-testid", ie.widgetButtonFrame), V(t, "height", Yo)
        },
        m(c, u) {
            A(c, t, u), a.m(t, null), e[5](t), r = !0, i || (l = Ft(Sd.call(null, t)), i = !0)
        },
        p(c, u) {
            u & 12 && G(n, n = c[2] || c[3]) ? (Q(), h(a, 1, 1, Y), ee(), a = ws(), a.c(), p(a, 1), a.m(t, null)) : a.p(c, u)
        },
        i(c) {
            r || (p(a), c && Se(() => {
                r && (o && o.end(1), s = Xe(t, de, {
                    y: 20,
                    delay: 150,
                    duration: 300
                }), s.start())
            }), r = !0)
        },
        o(c) {
            h(a), s && s.invalidate(), c && (o = Ze(t, br, {
                duration: 250
            })), r = !1
        },
        d(c) {
            c && T(t), a.d(c), e[5](null), c && o && o.end(), i = !1, l()
        }
    }
}

function ws(e) {
    let t, n;
    return t = new Bt({
        props: {
            component: Hf,
            id: ie.widgetButtonFrame,
            title: "Smartsupp widget button",
            frameStyle: Dt()
        }
    }), {
        c() {
            k(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p: Y,
        i(s) {
            n || (p(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            I(t, s)
        }
    }
}

function jf(e) {
    let t, n, s = e[1] && vs(e);
    return {
        c() {
            s && s.c(), t = ye()
        },
        m(o, r) {
            s && s.m(o, r), A(o, t, r), n = !0
        },
        p(o, [r]) {
            o[1] ? s ? (s.p(o, r), r & 2 && p(s, 1)) : (s = vs(o), s.c(), p(s, 1), s.m(t.parentNode, t)) : s && (Q(), h(s, 1, 1, () => {
                s = null
            }), ee())
        },
        i(o) {
            n || (p(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && T(t), s && s.d(o)
        }
    }
}

function qf(e, t, n) {
    let s, o, r, i;
    H(e, Od, u => n(4, s = u)), H(e, $u, u => n(1, o = u)), H(e, es, u => n(2, r = u)), H(e, ae, u => n(3, i = u));
    let l;
    const a = u => {
        n(0, l.style.width = `${u}px`, l)
    };

    function c(u) {
        qe[u ? "unshift" : "push"](() => {
            l = u, n(0, l)
        })
    }
    return e.$$.update = () => {
        e.$$.dirty & 17 && l && a(s)
    }, [l, o, r, i, s, c]
}
class Kf extends x {
    constructor(t) {
        super(), U(this, t, qf, jf, G, {})
    }
}

function Yf(e) {
    let t;
    return {
        c() {
            t = S("div"), g(t, "class", e[3]), P(t, "bg-gray-200", e[2] === "gray"), P(t, "bg-gray-300", e[2] === "darkGray"), V(t, "height", e[0]), V(t, "width", e[1])
        },
        m(n, s) {
            A(n, t, s)
        },
        p(n, [s]) {
            s & 4 && P(t, "bg-gray-200", n[2] === "gray"), s & 4 && P(t, "bg-gray-300", n[2] === "darkGray"), s & 1 && V(t, "height", n[0]), s & 2 && V(t, "width", n[1])
        },
        i: Y,
        o: Y,
        d(n) {
            n && T(t)
        }
    }
}

function Xf(e, t, n) {
    let {
        height: s = 20
    } = t, {
        width: o = "100%"
    } = t, {
        colorScheme: r = "gray"
    } = t, {
        roundedStyle: i = "rounded-full"
    } = t;
    const l = `${i} animate-pulse`;
    return e.$$set = a => {
        "height" in a && n(0, s = a.height), "width" in a && n(1, o = a.width), "colorScheme" in a && n(2, r = a.colorScheme), "roundedStyle" in a && n(4, i = a.roundedStyle)
    }, [s, o, r, l, i]
}
class xe extends x {
    constructor(t) {
        super(), U(this, t, Xf, Yf, G, {
            height: 0,
            width: 1,
            colorScheme: 2,
            roundedStyle: 4
        })
    }
}

function Zf(e) {
    let t, n;
    return t = new xe({
        props: {
            colorScheme: "darkGray",
            width: e[0],
            height: e[0]
        }
    }), {
        c() {
            k(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 1 && (r.width = s[0]), o & 1 && (r.height = s[0]), t.$set(r)
        },
        i(s) {
            n || (p(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            I(t, s)
        }
    }
}

function Jf(e, t, n) {
    let {
        size: s = 20
    } = t;
    return e.$$set = o => {
        "size" in o && n(0, s = o.size)
    }, [s]
}
class lt extends x {
    constructor(t) {
        super(), U(this, t, Jf, Zf, G, {
            size: 0
        })
    }
}
const Qf = e => ({}),
    Cs = e => ({}),
    eg = e => ({
        error: e & 8
    }),
    Ss = e => ({
        error: e[3]
    });

function tg(e) {
    let t, n, s;
    var o = e[2];

    function r(i, l) {
        return {}
    }
    return o && (t = gt(o, r())), {
        c() {
            t && k(t.$$.fragment), n = ye()
        },
        m(i, l) {
            t && F(t, i, l), A(i, n, l), s = !0
        },
        p(i, l) {
            if (l & 4 && o !== (o = i[2])) {
                if (t) {
                    Q();
                    const a = t;
                    h(a.$$.fragment, 1, 0, () => {
                        I(a, 1)
                    }), ee()
                }
                o ? (t = gt(o, r()), k(t.$$.fragment), p(t.$$.fragment, 1), F(t, n.parentNode, n)) : t = null
            }
        },
        i(i) {
            s || (t && p(t.$$.fragment, i), s = !0)
        },
        o(i) {
            t && h(t.$$.fragment, i), s = !1
        },
        d(i) {
            i && T(n), t && I(t, i)
        }
    }
}

function ng(e) {
    let t;
    const n = e[7].loading,
        s = Et(n, e, e[6], Cs);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r), t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 64) && Mt(s, n, o, o[6], t ? kt(n, o[6], r, Qf) : Ot(o[6]), Cs)
        },
        i(o) {
            t || (p(s, o), t = !0)
        },
        o(o) {
            h(s, o), t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}

function sg(e) {
    let t;
    const n = e[7].error,
        s = Et(n, e, e[6], Ss);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r), t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 72) && Mt(s, n, o, o[6], t ? kt(n, o[6], r, eg) : Ot(o[6]), Ss)
        },
        i(o) {
            t || (p(s, o), t = !0)
        },
        o(o) {
            h(s, o), t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}

function og(e) {
    let t, n, s, o;
    const r = [sg, ng, tg],
        i = [];

    function l(a, c) {
        return a[1] === a[0].Error ? 0 : a[1] === a[0].Loading ? 1 : a[1] === a[0].Success ? 2 : -1
    }
    return ~(t = l(e)) && (n = i[t] = r[t](e)), {
        c() {
            n && n.c(), s = ye()
        },
        m(a, c) {
            ~t && i[t].m(a, c), A(a, s, c), o = !0
        },
        p(a, [c]) {
            let u = t;
            t = l(a), t === u ? ~t && i[t].p(a, c) : (n && (Q(), h(i[u], 1, 1, () => {
                i[u] = null
            }), ee()), ~t ? (n = i[t], n ? n.p(a, c) : (n = i[t] = r[t](a), n.c()), p(n, 1), n.m(s.parentNode, s)) : n = null)
        },
        i(a) {
            o || (p(n), o = !0)
        },
        o(a) {
            h(n), o = !1
        },
        d(a) {
            a && T(s), ~t && i[t].d(a)
        }
    }
}
const An = new Map,
    rg = async e => {
        const t = (await e()).default;
        return An.set(e, t), t
    };

function ig(e, t, n) {
    let {
        $$slots: s = {},
        $$scope: o
    } = t;
    const r = _r(s);
    var i;
    (function(b) {
        b[b.Initialized = 0] = "Initialized", b[b.Loading = 1] = "Loading", b[b.Success = 2] = "Success", b[b.Error = 3] = "Error"
    })(i || (i = {}));
    let {
        delay: l = 200
    } = t, {
        loader: a
    } = t, c = i.Initialized, u = null, d = null, f;
    const _ = () => {
            window.clearTimeout(f)
        },
        v = async () => {
            _(), n(3, d = null), n(2, u = null), l > 0 ? (n(1, c = i.Initialized), f = window.setTimeout(() => {
                n(1, c = i.Loading)
            }, l)) : n(1, c = i.Loading);
            try {
                n(2, u = await rg(a)), n(1, c = i.Success)
            } catch (b) {
                if (n(1, c = i.Error), b instanceof Error && n(3, d = b), !r.error) throw b
            }
            _()
        };
    return An.has(a) ? (c = i.Success, u = An.get(a)) : De(() => {
        v()
    }), e.$$set = b => {
        "delay" in b && n(4, l = b.delay), "loader" in b && n(5, a = b.loader), "$$scope" in b && n(6, o = b.$$scope)
    }, [i, c, u, d, l, a, o, s]
}
class ag extends x {
    constructor(t) {
        super(), U(this, t, ig, og, G, {
            delay: 4,
            loader: 5
        })
    }
}
const lg = "modulepreload",
    cg = function(e, t) {
        return e[0] === "." ? new URL(e, t).href : e
    },
    As = {},
    ug = function(t, n, s) {
        if (!n || n.length === 0) return t();
        const o = document.getElementsByTagName("link");
        return Promise.all(n.map(r => {
            if (r = cg(r, s), r in As) return;
            As[r] = !0;
            const i = r.endsWith(".css"),
                l = i ? '[rel="stylesheet"]' : "";
            if (!!s)
                for (let u = o.length - 1; u >= 0; u--) {
                    const d = o[u];
                    if (d.href === r && (!i || d.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${r}"]${l}`)) return;
            const c = document.createElement("link");
            if (c.rel = i ? "stylesheet" : lg, i || (c.as = "script", c.crossOrigin = ""), c.href = r, document.head.appendChild(c), i) return new Promise((u, d) => {
                c.addEventListener("load", u), c.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${r}`)))
            })
        })).then(() => t()).catch(r => {
            const i = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (i.payload = r, window.dispatchEvent(i), !i.defaultPrevented) throw r
        })
    },
    dg = () => ug(() =>
        import ("./WidgetMessenger-dcf333b1.js"), [window.widget.getAssetUrl("assets/WidgetMessenger-dcf333b1.js"), window.widget.getAssetUrl("assets/vendor-620a2714.js")],
        import.meta.url);

function fg(e) {
    let t, n, s, o, r, i, l, a, c, u, d, f, _, v, b, C, y, D, N, B, L, X, ce, ge, ns, $t, st, ss, Ee, ot, os, rt, rs, it, Gt;
    return o = new lt({
        props: {
            size: 32
        }
    }), l = new lt({
        props: {
            size: 32
        }
    }), c = new lt({
        props: {
            size: 32
        }
    }), d = new lt({
        props: {
            size: 32
        }
    }), b = new lt({
        props: {
            size: 44
        }
    }), D = new xe({
        props: {
            height: 20,
            width: 270
        }
    }), B = new xe({
        props: {
            height: 20,
            width: 122
        }
    }), ge = new lt({
        props: {
            size: 28
        }
    }), st = new xe({
        props: {
            height: 112,
            width: 295,
            roundedStyle: "rounded-6"
        }
    }), ot = new xe({
        props: {
            height: 32,
            width: 295
        }
    }), rt = new xe({
        props: {
            height: 32,
            width: 148
        }
    }), it = new xe({
        props: {
            height: 32,
            width: 224
        }
    }), {
        c() {
            t = S("div"), n = S("div"), s = S("div"), k(o.$$.fragment), r = W(), i = S("div"), k(l.$$.fragment), a = W(), k(c.$$.fragment), u = W(), k(d.$$.fragment), f = W(), _ = S("div"), v = S("div"), k(b.$$.fragment), C = W(), y = S("div"), k(D.$$.fragment), N = W(), k(B.$$.fragment), L = W(), X = S("div"), ce = S("div"), k(ge.$$.fragment), ns = W(), $t = S("div"), k(st.$$.fragment), ss = W(), Ee = S("div"), k(ot.$$.fragment), os = W(), k(rt.$$.fragment), rs = W(), k(it.$$.fragment), g(s, "class", "flex"), g(i, "class", "flex space-x-2"), g(n, "class", "flex justify-between"), g(v, "class", "flex ml-1 mr-2"), g(y, "class", "flex-bottom space-y-2"), g(_, "class", "flex mt-2"), g(ce, "class", "flex ml-1 mr-2"), g($t, "class", "space-y-2"), g(X, "class", "flex items-baseline mt-8"), g(Ee, "class", "flex flex-col items-end space-y-5 mt-8 mr-1"), g(t, "slot", "loading"), g(t, "class", "h-full p-2 bg-white")
        },
        m(z, pr) {
            A(z, t, pr), w(t, n), w(n, s), F(o, s, null), w(n, r), w(n, i), F(l, i, null), w(i, a), F(c, i, null), w(i, u), F(d, i, null), w(t, f), w(t, _), w(_, v), F(b, v, null), w(_, C), w(_, y), F(D, y, null), w(y, N), F(B, y, null), w(t, L), w(t, X), w(X, ce), F(ge, ce, null), w(X, ns), w(X, $t), F(st, $t, null), w(t, ss), w(t, Ee), F(ot, Ee, null), w(Ee, os), F(rt, Ee, null), w(Ee, rs), F(it, Ee, null), Gt = !0
        },
        p: Y,
        i(z) {
            Gt || (p(o.$$.fragment, z), p(l.$$.fragment, z), p(c.$$.fragment, z), p(d.$$.fragment, z), p(b.$$.fragment, z), p(D.$$.fragment, z), p(B.$$.fragment, z), p(ge.$$.fragment, z), p(st.$$.fragment, z), p(ot.$$.fragment, z), p(rt.$$.fragment, z), p(it.$$.fragment, z), Gt = !0)
        },
        o(z) {
            h(o.$$.fragment, z), h(l.$$.fragment, z), h(c.$$.fragment, z), h(d.$$.fragment, z), h(b.$$.fragment, z), h(D.$$.fragment, z), h(B.$$.fragment, z), h(ge.$$.fragment, z), h(st.$$.fragment, z), h(ot.$$.fragment, z), h(rt.$$.fragment, z), h(it.$$.fragment, z), Gt = !1
        },
        d(z) {
            z && T(t), I(o), I(l), I(c), I(d), I(b), I(D), I(B), I(ge), I(st), I(ot), I(rt), I(it)
        }
    }
}

function gg(e) {
    let t, n, s, o, r = e[0] + "",
        i;
    return {
        c() {
            t = S("div"), n = S("div"), n.textContent = "Failed to load widget", s = W(), o = S("div"), i = Ke(r), g(n, "class", "text-lg font-bold"), g(o, "class", "text-xs"), g(t, "slot", "error"), g(t, "class", "h-full p-4 bg-white text-red-500")
        },
        m(l, a) {
            A(l, t, a), w(t, n), w(t, s), w(t, o), w(o, i)
        },
        p(l, a) {
            a & 1 && r !== (r = l[0] + "") && Ye(i, r)
        },
        d(l) {
            l && T(t)
        }
    }
}

function pg(e) {
    let t, n;
    return t = new ag({
        props: {
            loader: dg,
            delay: 0,
            $$slots: {
                error: [gg, ({
                    error: s
                }) => ({
                    0: s
                }), ({
                    error: s
                }) => s ? 1 : 0],
                loading: [fg]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            k(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 3 && (r.$$scope = {
                dirty: o,
                ctx: s
            }), t.$set(r)
        },
        i(s) {
            n || (p(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            I(t, s)
        }
    }
}
class mg extends x {
    constructor(t) {
        super(), U(this, t, null, pg, G, {})
    }
}

function Ts(e) {
    let t, n, s, o, r, i, l, a;
    return n = new Bt({
        props: {
            component: mg,
            id: ie.widgetMessengerFrame,
            title: "Smartsupp widget messenger",
            frameStyle: Dt()
        }
    }), {
        c() {
            t = S("div"), k(n.$$.fragment), g(t, "data-testid", ie.widgetMessengerFrame), V(t, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
        },
        m(c, u) {
            A(c, t, u), F(n, t, null), e[5](t), i = !0, l || (a = Ft(s = Ad.call(null, t, e[2])), l = !0)
        },
        p(c, u) {
            s && yr(s.update) && u & 4 && s.update.call(null, c[2])
        },
        i(c) {
            i || (p(n.$$.fragment, c), c && Se(() => {
                i && (r && r.end(1), o = Xe(t, de, {
                    y: 20,
                    duration: 200
                }), o.start())
            }), i = !0)
        },
        o(c) {
            h(n.$$.fragment, c), o && o.invalidate(), c && (r = Ze(t, de, {
                y: 10,
                duration: 150
            })), i = !1
        },
        d(c) {
            c && T(t), I(n), e[5](null), c && r && r.end(), l = !1, a()
        }
    }
}

function hg(e) {
    let t, n, s = e[1] && Ts(e);
    return {
        c() {
            s && s.c(), t = ye()
        },
        m(o, r) {
            s && s.m(o, r), A(o, t, r), n = !0
        },
        p(o, [r]) {
            o[1] ? s ? (s.p(o, r), r & 2 && p(s, 1)) : (s = Ts(o), s.c(), p(s, 1), s.m(t.parentNode, t)) : s && (Q(), h(s, 1, 1, () => {
                s = null
            }), ee())
        },
        i(o) {
            n || (p(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && T(t), s && s.d(o)
        }
    }
}
const Es = "MobileWidgetMessengerOpen";

function bg(e, t, n) {
    let s, o, r;
    H(e, Du, u => n(1, s = u)), H(e, $e, u => n(2, o = u)), H(e, kd, u => n(4, r = u));
    let i;
    const l = (u, d) => {
        if (!i) return;
        const {
            width: f,
            height: _
        } = hd(u, d);
        n(0, i.style.maxHeight = je(_) ? _ : _t(_), i), n(0, i.style.width = je(f) ? f : _t(f), i), n(0, i.style.height = u ? "100%" : "calc(100% - 40px)", i)
    };
    let a = !1;

    function c(u) {
        qe[u ? "unshift" : "push"](() => {
            i = u, n(0, i)
        })
    }
    return e.$$.update = () => {
        if (e.$$.dirty & 21 && i && l(o, r), e.$$.dirty & 14 && o) {
            if (s && !a) {
                const u = Ve().createElement("style");
                u.textContent = "* {overflow: hidden}", u.className = Es, Ve().head.appendChild(u), n(3, a = !0)
            }
            if (!s && a) {
                const u = Ve().head.getElementsByClassName(Es);
                for (let d = 0; d < u.length; d++) Ve().head.removeChild(u[d]);
                n(3, a = !1)
            }
        }
    }, [i, s, o, a, r, c]
}
class _g extends x {
    constructor(t) {
        super(), U(this, t, bg, hg, G, {})
    }
}

function yg(e) {
    let t, n = '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>',
        s = [{
            viewBox: "0 0 24 24"
        }, {
            width: "1.2em"
        }, {
            height: "1.2em"
        }, e[0]],
        o = {};
    for (let r = 0; r < s.length; r += 1) o = re(o, s[r]);
    return {
        c() {
            t = Ie("svg"), pt(t, o)
        },
        m(r, i) {
            A(r, t, i), t.innerHTML = n
        },
        p(r, [i]) {
            pt(t, o = He(s, [{
                viewBox: "0 0 24 24"
            }, {
                width: "1.2em"
            }, {
                height: "1.2em"
            }, i & 1 && r[0]]))
        },
        i: Y,
        o: Y,
        d(r) {
            r && T(t)
        }
    }
}

function vg(e, t, n) {
    return e.$$set = s => {
        n(0, t = re(re({}, t), mt(s)))
    }, t = mt(t), [t]
}
class dr extends x {
    constructor(t) {
        super(), U(this, t, vg, yg, G, {})
    }
}

function wg(e) {
    let t, n;
    return {
        c() {
            t = S("img"), ht(t.src, n = e[1]) || g(t, "src", n), g(t, "alt", "Agent avatar"), g(t, "class", "rounded-full"), g(t, "data-testid", ie.avatarAgent), P(t, "w-6", e[0] === "sm"), P(t, "h-6", e[0] === "sm"), P(t, "w-8", e[0] === "md"), P(t, "h-8", e[0] === "md"), P(t, "w-11", e[0] === "lg"), P(t, "h-11", e[0] === "lg")
        },
        m(s, o) {
            A(s, t, o)
        },
        p(s, [o]) {
            o & 2 && !ht(t.src, n = s[1]) && g(t, "src", n), o & 1 && P(t, "w-6", s[0] === "sm"), o & 1 && P(t, "h-6", s[0] === "sm"), o & 1 && P(t, "w-8", s[0] === "md"), o & 1 && P(t, "h-8", s[0] === "md"), o & 1 && P(t, "w-11", s[0] === "lg"), o & 1 && P(t, "h-11", s[0] === "lg")
        },
        i: Y,
        o: Y,
        d(s) {
            s && T(t)
        }
    }
}

function Cg(e, t, n) {
    let {
        avatar: s
    } = t, {
        size: o = "md"
    } = t, r;
    return e.$$set = i => {
        "avatar" in i && n(2, s = i.avatar), "size" in i && n(0, o = i.size)
    }, e.$$.update = () => {
        e.$$.dirty & 4 && n(1, r = Za(s))
    }, [o, r, s]
}
class fr extends x {
    constructor(t) {
        super(), U(this, t, Cg, wg, G, {
            avatar: 2,
            size: 0
        })
    }
}
const Sg = {
        id: "",
        avatar: "",
        description: "",
        disabled: !1,
        fullname: "",
        groups: [],
        status: "online"
    },
    Ag = E([io, Xa, tn, uo], ([e, t, n, s]) => n.length > 0 ? [...n].reverse() : s ? t.length === 0 ? [Sg] : t : e);

function Ms(e, t, n) {
    const s = e.slice();
    return s[3] = t[n].id, s[4] = t[n].avatar, s
}

function Os(e, t) {
    let n, s, o, r, i, l, a;
    return s = new fr({
        props: {
            avatar: t[4],
            size: t[0]
        }
    }), {
        key: e,
        first: null,
        c() {
            n = S("div"), k(s.$$.fragment), o = W(), g(n, "class", r = Me(`avatar-group-item avatar-${t[0]} transition-all-400`) + " svelte-sm867b"), P(n, "-group-hover:not-first:m-x-1", !Ce()), this.first = n
        },
        m(c, u) {
            A(c, n, u), F(s, n, null), w(n, o), a = !0
        },
        p(c, u) {
            t = c;
            const d = {};
            u & 2 && (d.avatar = t[4]), u & 1 && (d.size = t[0]), s.$set(d), (!a || u & 1 && r !== (r = Me(`avatar-group-item avatar-${t[0]} transition-all-400`) + " svelte-sm867b")) && g(n, "class", r), (!a || u & 1) && P(n, "-group-hover:not-first:m-x-1", !Ce())
        },
        i(c) {
            a || (p(s.$$.fragment, c), Se(() => {
                a && (l && l.end(1), i = Xe(n, de, {
                    duration: 300,
                    x: -10
                }), i.start())
            }), a = !0)
        },
        o(c) {
            h(s.$$.fragment, c), i && i.invalidate(), l = Ze(n, de, {
                duration: 150,
                x: -10
            }), a = !1
        },
        d(c) {
            c && T(n), I(s), c && l && l.end()
        }
    }
}

function Tg(e) {
    let t, n = [],
        s = new Map,
        o, r = is(e[1]);
    const i = l => l[3];
    for (let l = 0; l < r.length; l += 1) {
        let a = Ms(e, r, l),
            c = i(a);
        s.set(c, n[l] = Os(c, a))
    }
    return {
        c() {
            t = S("div");
            for (let l = 0; l < n.length; l += 1) n[l].c();
            g(t, "class", "group flex-center flex-shrink-0"), g(t, "data-testid", ie.avatarGroup)
        },
        m(l, a) {
            A(l, t, a);
            for (let c = 0; c < n.length; c += 1) n[c] && n[c].m(t, null);
            o = !0
        },
        p(l, [a]) {
            a & 3 && (r = is(l[1]), Q(), n = vr(n, a, i, 1, l, r, s, t, wr, Os, null, Ms), ee())
        },
        i(l) {
            if (!o) {
                for (let a = 0; a < r.length; a += 1) p(n[a]);
                o = !0
            }
        },
        o(l) {
            for (let a = 0; a < n.length; a += 1) h(n[a]);
            o = !1
        },
        d(l) {
            l && T(t);
            for (let a = 0; a < n.length; a += 1) n[a].d()
        }
    }
}
const Eg = 3;

function Mg(e, t, n) {
    let s;
    H(e, Ag, i => n(2, s = i));
    let {
        size: o = "md"
    } = t, r = [];
    return e.$$set = i => {
        "size" in i && n(0, o = i.size)
    }, e.$$.update = () => {
        e.$$.dirty & 4 && s.length > 0 && n(1, r = s.slice(0, Eg))
    }, [o, r, s]
}
class Og extends x {
    constructor(t) {
        super(), U(this, t, Mg, Tg, G, {
            size: 0
        })
    }
}

function kg(e) {
    let t, n, s, o, r = [{
            role: "status"
        }, {
            class: o = "inline " + e[0] + " " + e[1] + " text-white text-opacity-20 animate-spin"
        }, {
            viewBox: "0 0 100 101"
        }, {
            fill: "none"
        }, {
            xmlns: "http://www.w3.org/2000/svg"
        }, e[2]],
        i = {};
    for (let l = 0; l < r.length; l += 1) i = re(i, r[l]);
    return {
        c() {
            t = Ie("svg"), n = Ie("path"), s = Ie("path"), g(n, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), g(n, "fill", "currentColor"), g(s, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), g(s, "fill", "currentFill"), pt(t, i)
        },
        m(l, a) {
            A(l, t, a), w(t, n), w(t, s)
        },
        p(l, [a]) {
            pt(t, i = He(r, [{
                role: "status"
            }, a & 3 && o !== (o = "inline " + l[0] + " " + l[1] + " text-white text-opacity-20 animate-spin") && {
                class: o
            }, {
                viewBox: "0 0 100 101"
            }, {
                fill: "none"
            }, {
                xmlns: "http://www.w3.org/2000/svg"
            }, a & 4 && l[2]]))
        },
        i: Y,
        o: Y,
        d(l) {
            l && T(t)
        }
    }
}

function Fg(e, t, n) {
    let s, o;
    const r = ["color", "size"];
    let i = Re(t, r),
        {
            color: l = "primary"
        } = t,
        {
            size: a = "current"
        } = t;
    const c = {
            primary: "fill-primary-button",
            primaryContent: "fill-primary-button-content"
        },
        u = {
            current: "w-[1.2em] h-[1.2em]",
            sm: "w-4 h-4",
            md: "w-6 h-6",
            lg: "w-8 h-8"
        };
    return e.$$set = d => {
        t = re(re({}, t), mt(d)), n(2, i = Re(t, r)), "color" in d && n(3, l = d.color), "size" in d && n(4, a = d.size)
    }, e.$$.update = () => {
        e.$$.dirty & 8 && n(1, s = c[l ? ? "primary"]), e.$$.dirty & 16 && n(0, o = u[a ? ? "current"])
    }, [o, s, i, l, a]
}
class Ig extends x {
    constructor(t) {
        super(), U(this, t, Fg, kg, G, {
            color: 3,
            size: 4
        })
    }
}

function ks(e) {
    let t, n, s;
    const o = [{
        "aria-hidden": "true"
    }, {
        "aria-label": e[2]
    }, e[7]];
    var r = e[6];

    function i(l, a) {
        let c = {};
        if (a !== void 0 && a & 132) c = He(o, [o[0], a & 4 && {
            "aria-label": l[2]
        }, a & 128 && as(l[7])]);
        else
            for (let u = 0; u < o.length; u += 1) c = re(c, o[u]);
        return {
            props: c
        }
    }
    return r && (n = gt(r, i(e))), {
        c() {
            t = S("span"), n && k(n.$$.fragment), g(t, "class", "mr-2")
        },
        m(l, a) {
            A(l, t, a), n && F(n, t, null), s = !0
        },
        p(l, a) {
            if (a & 64 && r !== (r = l[6])) {
                if (n) {
                    Q();
                    const c = n;
                    h(c.$$.fragment, 1, 0, () => {
                        I(c, 1)
                    }), ee()
                }
                r ? (n = gt(r, i(l, a)), k(n.$$.fragment), p(n.$$.fragment, 1), F(n, t, null)) : n = null
            } else if (r) {
                const c = a & 132 ? He(o, [o[0], a & 4 && {
                    "aria-label": l[2]
                }, a & 128 && as(l[7])]) : {};
                n.$set(c)
            }
        },
        i(l) {
            s || (n && p(n.$$.fragment, l), s = !0)
        },
        o(l) {
            n && h(n.$$.fragment, l), s = !1
        },
        d(l) {
            l && T(t), n && I(n)
        }
    }
}

function Fs(e) {
    let t;
    const n = e[14].default,
        s = Et(n, e, e[13], null);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r), t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 8192) && Mt(s, n, o, o[13], t ? kt(n, o[13], r, null) : Ot(o[13]), null)
        },
        i(o) {
            t || (p(s, o), t = !0)
        },
        o(o) {
            h(s, o), t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}

function Lg(e) {
    let t, n, s, o, r, i, l = e[6] && ks(e),
        a = !e[4] && Fs(e),
        c = [{
            type: "button"
        }, {
            tabindex: "0"
        }, e[10], {
            class: s = `btn btn-${e[0]} btn-${e[1]} text-base`
        }, {
            disabled: e[8]
        }, {
            "data-testid": e[5]
        }],
        u = {};
    for (let d = 0; d < c.length; d += 1) u = re(u, c[d]);
    return {
        c() {
            t = S("button"), l && l.c(), n = W(), a && a.c(), zt(t, u), P(t, "text-sm", !e[9]), P(t, "btn-disabled", e[8]), P(t, "w-full", !!e[3]), P(t, "cursor-auto", Ce()), P(t, "cursor-pointer", !Ce()), P(t, "svelte-xmvacy", !0)
        },
        m(d, f) {
            A(d, t, f), l && l.m(t, null), w(t, n), a && a.m(t, null), t.autofocus && t.focus(), o = !0, r || (i = pe(t, "click", e[15]), r = !0)
        },
        p(d, [f]) {
            d[6] ? l ? (l.p(d, f), f & 64 && p(l, 1)) : (l = ks(d), l.c(), p(l, 1), l.m(t, n)) : l && (Q(), h(l, 1, 1, () => {
                l = null
            }), ee()), d[4] ? a && (Q(), h(a, 1, 1, () => {
                a = null
            }), ee()) : a ? (a.p(d, f), f & 16 && p(a, 1)) : (a = Fs(d), a.c(), p(a, 1), a.m(t, null)), zt(t, u = He(c, [{
                type: "button"
            }, {
                tabindex: "0"
            }, f & 1024 && d[10], (!o || f & 3 && s !== (s = `btn btn-${d[0]} btn-${d[1]} text-base`)) && {
                class: s
            }, (!o || f & 256) && {
                disabled: d[8]
            }, (!o || f & 32) && {
                "data-testid": d[5]
            }])), P(t, "text-sm", !d[9]), P(t, "btn-disabled", d[8]), P(t, "w-full", !!d[3]), P(t, "cursor-auto", Ce()), P(t, "cursor-pointer", !Ce()), P(t, "svelte-xmvacy", !0)
        },
        i(d) {
            o || (p(l), p(a), o = !0)
        },
        o(d) {
            h(l), h(a), o = !1
        },
        d(d) {
            d && T(t), l && l.d(), a && a.d(), r = !1, i()
        }
    }
}

function Rg(e, t, n) {
    let s;
    const o = ["variant", "size", "icon", "iconDescription", "disabled", "isBlock", "isLoading", "testId"];
    let r = Re(t, o),
        i;
    H(e, $e, B => n(9, i = B));
    let {
        $$slots: l = {},
        $$scope: a
    } = t, {
        variant: c = "primary"
    } = t, {
        size: u = "md"
    } = t, {
        icon: d = void 0
    } = t, {
        iconDescription: f = void 0
    } = t, {
        disabled: _ = void 0
    } = t, {
        isBlock: v = void 0
    } = t, {
        isLoading: b = void 0
    } = t, {
        testId: C = void 0
    } = t, y = d, D = {};

    function N(B) {
        Ue.call(this, e, B)
    }
    return e.$$set = B => {
        t = re(re({}, t), mt(B)), n(10, r = Re(t, o)), "variant" in B && n(0, c = B.variant), "size" in B && n(1, u = B.size), "icon" in B && n(11, d = B.icon), "iconDescription" in B && n(2, f = B.iconDescription), "disabled" in B && n(12, _ = B.disabled), "isBlock" in B && n(3, v = B.isBlock), "isLoading" in B && n(4, b = B.isLoading), "testId" in B && n(5, C = B.testId), "$$scope" in B && n(13, a = B.$$scope)
    }, e.$$.update = () => {
        e.$$.dirty & 2064 && (b ? (n(6, y = Ig), n(7, D = {
            color: "primaryContent"
        })) : (n(6, y = d), n(7, D = {}))), e.$$.dirty & 4112 && n(8, s = !!_ || !!b)
    }, [c, u, f, v, b, C, y, D, s, i, r, d, _, a, l, N]
}
class Pg extends x {
    constructor(t) {
        super(), U(this, t, Rg, Lg, G, {
            variant: 0,
            size: 1,
            icon: 11,
            iconDescription: 2,
            disabled: 12,
            isBlock: 3,
            isLoading: 4,
            testId: 5
        })
    }
}

function Dg(e) {
    let t, n, s, o, r, i, l;
    var a = e[0];

    function c(f, _) {
        return {
            props: {
                width: "1em",
                height: "1em",
                style: `transform: scale(${f[7]}) scaleX(${f[8]});`
            }
        }
    }
    a && (s = gt(a, c(e)));
    let u = [{
            type: "button"
        }, {
            tabindex: "0"
        }, e[9], {
            "aria-label": e[1]
        }, {
            class: o = `btn btn-${e[4]} btn-${e[3]}`
        }, {
            "data-testid": e[6]
        }],
        d = {};
    for (let f = 0; f < u.length; f += 1) d = re(d, u[f]);
    return {
        c() {
            t = S("button"), n = S("div"), s && k(s.$$.fragment), g(n, "class", "w-full h-full flex items-center justify-center"), P(n, "animate-spin", e[2] === "spin"), zt(t, d), P(t, "btn-disabled", !!e[5]), P(t, "cursor-auto", Ce()), P(t, "cursor-pointer", !Ce()), P(t, "svelte-86h3fi", !0)
        },
        m(f, _) {
            A(f, t, _), w(t, n), s && F(s, n, null), t.autofocus && t.focus(), r = !0, i || (l = pe(t, "click", On(e[11])), i = !0)
        },
        p(f, [_]) {
            if (_ & 1 && a !== (a = f[0])) {
                if (s) {
                    Q();
                    const v = s;
                    h(v.$$.fragment, 1, 0, () => {
                        I(v, 1)
                    }), ee()
                }
                a ? (s = gt(a, c(f)), k(s.$$.fragment), p(s.$$.fragment, 1), F(s, n, null)) : s = null
            } else if (a) {
                const v = {};
                _ & 128 && (v.style = `transform: scale(${f[7]}) scaleX(${f[8]});`), s.$set(v)
            }(!r || _ & 4) && P(n, "animate-spin", f[2] === "spin"), zt(t, d = He(u, [{
                type: "button"
            }, {
                tabindex: "0"
            }, _ & 512 && f[9], (!r || _ & 2) && {
                "aria-label": f[1]
            }, (!r || _ & 24 && o !== (o = `btn btn-${f[4]} btn-${f[3]}`)) && {
                class: o
            }, (!r || _ & 64) && {
                "data-testid": f[6]
            }])), P(t, "btn-disabled", !!f[5]), P(t, "cursor-auto", Ce()), P(t, "cursor-pointer", !Ce()), P(t, "svelte-86h3fi", !0)
        },
        i(f) {
            r || (s && p(s.$$.fragment, f), r = !0)
        },
        o(f) {
            s && h(s.$$.fragment, f), r = !1
        },
        d(f) {
            f && T(t), s && I(s), i = !1, l()
        }
    }
}

function Bg(e, t, n) {
    const s = ["icon", "iconDescription", "iconOrientation", "iconAnimation", "size", "variant", "disabled", "testId"];
    let o = Re(t, s),
        {
            icon: r
        } = t,
        {
            iconDescription: i
        } = t,
        {
            iconOrientation: l = "right"
        } = t,
        {
            iconAnimation: a = "none"
        } = t,
        {
            size: c = "md"
        } = t,
        {
            variant: u = "ghost"
        } = t,
        {
            disabled: d = void 0
        } = t,
        {
            testId: f = void 0
        } = t;
    const _ = l === "right" ? 1 : -1;
    let v = 1.2;

    function b(C) {
        Ue.call(this, e, C)
    }
    return e.$$set = C => {
        t = re(re({}, t), mt(C)), n(9, o = Re(t, s)), "icon" in C && n(0, r = C.icon), "iconDescription" in C && n(1, i = C.iconDescription), "iconOrientation" in C && n(10, l = C.iconOrientation), "iconAnimation" in C && n(2, a = C.iconAnimation), "size" in C && n(3, c = C.size), "variant" in C && n(4, u = C.variant), "disabled" in C && n(5, d = C.disabled), "testId" in C && n(6, f = C.testId)
    }, e.$$.update = () => {
        e.$$.dirty & 8 && c === "xl" && n(7, v = 1.5)
    }, [r, i, a, c, u, d, f, v, _, o, l, b]
}
class gr extends x {
    constructor(t) {
        super(), U(this, t, Bg, Dg, G, {
            icon: 0,
            iconDescription: 1,
            iconOrientation: 10,
            iconAnimation: 2,
            size: 3,
            variant: 4,
            disabled: 5,
            testId: 6
        })
    }
}

function $g(e) {
    let t, n, s = [{
            width: "1.2em"
        }, {
            height: "1.2em"
        }, {
            viewBox: "0 0 209 209"
        }, {
            version: "1.1"
        }, {
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, {
            "xml:space": "preserve"
        }, {
            "fill-rule": "evenodd"
        }, {
            "clip-rule": "evenodd"
        }, {
            "stroke-linecap": "round"
        }, {
            "stroke-linejoin": "round"
        }, e[0]],
        o = {};
    for (let r = 0; r < s.length; r += 1) o = re(o, s[r]);
    return {
        c() {
            t = Ie("svg"), n = Ie("path"), g(n, "d", "M177.954,104.163l-110.066,-0m110.066,-0l-138.95,69.4l28.884,-69.4l-28.884,-69.584l138.95,69.584Z"), V(n, "fill", "none"), V(n, "fill-rule", "nonzero"), V(n, "stroke", "currentColor"), V(n, "stroke-width", "17.38px"), pt(t, o)
        },
        m(r, i) {
            A(r, t, i), w(t, n)
        },
        p(r, [i]) {
            pt(t, o = He(s, [{
                width: "1.2em"
            }, {
                height: "1.2em"
            }, {
                viewBox: "0 0 209 209"
            }, {
                version: "1.1"
            }, {
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
            }, {
                "xml:space": "preserve"
            }, {
                "fill-rule": "evenodd"
            }, {
                "clip-rule": "evenodd"
            }, {
                "stroke-linecap": "round"
            }, {
                "stroke-linejoin": "round"
            }, i & 1 && r[0]]))
        },
        i: Y,
        o: Y,
        d(r) {
            r && T(t)
        }
    }
}

function Gg(e, t, n) {
    const s = [];
    let o = Re(t, s);
    return e.$$set = r => {
        t = re(re({}, t), mt(r)), n(0, o = Re(t, s))
    }, [o]
}
class Ng extends x {
    constructor(t) {
        super(), U(this, t, Gg, $g, G, {})
    }
}

function Is(e) {
    let t, n, s, o, r = e[1].fullname + "",
        i, l;
    return n = new fr({
        props: {
            avatar: e[1].avatar
        }
    }), {
        c() {
            t = S("div"), k(n.$$.fragment), s = W(), o = S("div"), i = Ke(r), g(t, "class", "flex-center flex-shrink-0"), g(o, "class", "ml-3 mr-10 font-bold truncate color-slate-800")
        },
        m(a, c) {
            A(a, t, c), F(n, t, null), A(a, s, c), A(a, o, c), w(o, i), l = !0
        },
        p(a, c) {
            const u = {};
            c & 2 && (u.avatar = a[1].avatar), n.$set(u), (!l || c & 2) && r !== (r = a[1].fullname + "") && Ye(i, r)
        },
        i(a) {
            l || (p(n.$$.fragment, a), l = !0)
        },
        o(a) {
            h(n.$$.fragment, a), l = !1
        },
        d(a) {
            a && (T(t), T(s), T(o)), I(n)
        }
    }
}

function xg(e) {
    let t, n, s = e[1] && Is(e);
    return {
        c() {
            s && s.c(), t = ye()
        },
        m(o, r) {
            s && s.m(o, r), A(o, t, r), n = !0
        },
        p(o, [r]) {
            o[1] ? s ? (s.p(o, r), r & 2 && p(s, 1)) : (s = Is(o), s.c(), p(s, 1), s.m(t.parentNode, t)) : s && (Q(), h(s, 1, 1, () => {
                s = null
            }), ee())
        },
        i(o) {
            n || (p(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && T(t), s && s.d(o)
        }
    }
}

function Ug(e, t, n) {
    let s, o, r = Y,
        i = () => (r(), r = Cr(s, a => n(1, o = a)), s);
    e.$$.on_destroy.push(() => r());
    let {
        agentId: l
    } = t;
    return e.$$set = a => {
        "agentId" in a && n(2, l = a.agentId)
    }, e.$$.update = () => {
        e.$$.dirty & 4 && i(n(0, s = Ka(l)))
    }, [s, o, l]
}
class Vg extends x {
    constructor(t) {
        super(), U(this, t, Ug, xg, G, {
            agentId: 2
        })
    }
}

function Ls(e) {
    let t, n, s, o, r, i, l = e[0].content.text + "",
        a, c, u, d, f, _, v, b, C, y;
    const D = [Wg, zg],
        N = [];

    function B(L, X) {
        return L[0].agentId ? 0 : 1
    }
    return s = B(e), o = N[s] = D[s](e), d = new Pg({
        props: {
            variant: "outline",
            size: "lg",
            icon: Ng,
            isBlock: !0,
            $$slots: {
                default: [Hg]
            },
            $$scope: {
                ctx: e
            }
        }
    }), v = new gr({
        props: {
            icon: dr,
            iconDescription: "Close"
        }
    }), v.$on("click", e[5]), {
        c() {
            t = S("div"), n = S("div"), o.c(), r = W(), i = S("div"), a = Ke(l), c = W(), u = S("div"), k(d.$$.fragment), f = W(), _ = S("div"), k(v.$$.fragment), g(n, "class", "flex items-center mb-4"), g(i, "class", "text-sm leading-[22px] line-clamp-5 whitespace-pre-wrap color-slate-800"), g(u, "class", "mt-4"), g(_, "class", "absolute top-2 right-2 text-gray-500"), g(t, "class", "relative p-4 bg-white rounded-lg cursor-pointer")
        },
        m(L, X) {
            A(L, t, X), w(t, n), N[s].m(n, null), w(t, r), w(t, i), w(i, a), w(t, c), w(t, u), F(d, u, null), w(t, f), w(t, _), F(v, _, null), e[9](t), b = !0, C || (y = [pe(t, "click", e[4]), pe(t, "mouseenter", e[6]), pe(t, "mouseleave", e[7])], C = !0)
        },
        p(L, X) {
            let ce = s;
            s = B(L), s === ce ? N[s].p(L, X) : (Q(), h(N[ce], 1, 1, () => {
                N[ce] = null
            }), ee(), o = N[s], o ? o.p(L, X) : (o = N[s] = D[s](L), o.c()), p(o, 1), o.m(n, null)), (!b || X & 1) && l !== (l = L[0].content.text + "") && Ye(a, l);
            const ge = {};
            X & 4108 && (ge.$$scope = {
                dirty: X,
                ctx: L
            }), d.$set(ge)
        },
        i(L) {
            b || (p(o), p(d.$$.fragment, L), p(v.$$.fragment, L), b = !0)
        },
        o(L) {
            h(o), h(d.$$.fragment, L), h(v.$$.fragment, L), b = !1
        },
        d(L) {
            L && T(t), N[s].d(), I(d), I(v), e[9](null), C = !1, Zt(y)
        }
    }
}

function zg(e) {
    let t, n;
    return t = new Og({}), {
        c() {
            k(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p: Y,
        i(s) {
            n || (p(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            I(t, s)
        }
    }
}

function Wg(e) {
    let t, n;
    return t = new Vg({
        props: {
            agentId: e[0].agentId
        }
    }), {
        c() {
            k(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, o) {
            const r = {};
            o & 1 && (r.agentId = s[0].agentId), t.$set(r)
        },
        i(s) {
            n || (p(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            I(t, s)
        }
    }
}

function Hg(e) {
    let t = e[3](e[2]) + "",
        n;
    return {
        c() {
            n = Ke(t)
        },
        m(s, o) {
            A(s, n, o)
        },
        p(s, o) {
            o & 12 && t !== (t = s[3](s[2]) + "") && Ye(n, t)
        },
        d(s) {
            s && T(n)
        }
    }
}

function jg(e) {
    let t, n, s = e[0] && Ls(e);
    return {
        c() {
            t = S("div"), s && s.c()
        },
        m(o, r) {
            A(o, t, r), s && s.m(t, null), n = !0
        },
        p(o, [r]) {
            o[0] ? s ? (s.p(o, r), r & 1 && p(s, 1)) : (s = Ls(o), s.c(), p(s, 1), s.m(t, null)) : s && (Q(), h(s, 1, 1, () => {
                s = null
            }), ee())
        },
        i(o) {
            n || (p(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && T(t), s && s.d()
        }
    }
}

function qg(e, t, n) {
    let s, o, r, i;
    H(e, Nl, b => n(8, o = b)), H(e, Un, b => n(0, r = b)), H(e, ae, b => n(3, i = b));
    let l, a = () => nr.set(l.getBoundingClientRect().height);
    De(() => {
        a(), ne().addEventListener("visibilitychange", a)
    }), Mn(() => {
        ne().removeEventListener("visibilitychange", a)
    });
    const c = () => {
            rn()
        },
        u = () => {
            fo()
        },
        d = () => {
            Cn.set(!0)
        },
        f = () => {
            Cn.set(!1)
        },
        _ = async () => {
            await Gs(), a()
        };

    function v(b) {
        qe[b ? "unshift" : "push"](() => {
            l = b, n(1, l)
        })
    }
    return e.$$.update = () => {
        e.$$.dirty & 1 && r && _(), e.$$.dirty & 256 && n(2, s = o ? "trigger.replyButton" : "trigger.openChatButton")
    }, [r, l, s, i, c, u, d, f, o, v]
}
class Kg extends x {
    constructor(t) {
        super(), U(this, t, qg, jg, G, {})
    }
}

function Rs(e) {
    let t, n, s, o, r, i, l;
    return n = new Bt({
        props: {
            component: Kg,
            id: ie.widgetPopupFrame,
            title: "Smartsupp widget popup",
            frameStyle: Dt()
        }
    }), {
        c() {
            t = S("div"), k(n.$$.fragment), V(t, "height", "calc(100% - 40px)"), V(t, "border-radius", "12px"), V(t, "transition", "box-shadow 0.2s ease-in-out"), V(t, "transition", "max-height 250ms ease-in-out"), g(t, "data-testid", ie.widgetPopupFrame), V(t, "width", 300), V(t, "box-shadow", `rgba(0, 0, 0, ${e[1]}) 0px 3px 16px`)
        },
        m(a, c) {
            A(a, t, c), F(n, t, null), e[5](t), r = !0, i || (l = Ft(Td.call(null, t)), i = !0)
        },
        p(a, c) {
            c & 2 && V(t, "box-shadow", `rgba(0, 0, 0, ${a[1]}) 0px 3px 16px`)
        },
        i(a) {
            r || (p(n.$$.fragment, a), a && Se(() => {
                r && (o && o.end(1), s = Xe(t, de, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }), s.start())
            }), r = !0)
        },
        o(a) {
            h(n.$$.fragment, a), s && s.invalidate(), a && (o = Ze(t, de, {
                y: 10,
                duration: 250
            })), r = !1
        },
        d(a) {
            a && T(t), I(n), e[5](null), a && o && o.end(), i = !1, l()
        }
    }
}

function Yg(e) {
    let t, n, s = e[2] && Rs(e);
    return {
        c() {
            s && s.c(), t = ye()
        },
        m(o, r) {
            s && s.m(o, r), A(o, t, r), n = !0
        },
        p(o, [r]) {
            o[2] ? s ? (s.p(o, r), r & 4 && p(s, 1)) : (s = Rs(o), s.c(), p(s, 1), s.m(t.parentNode, t)) : s && (Q(), h(s, 1, 1, () => {
                s = null
            }), ee())
        },
        i(o) {
            n || (p(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && T(t), s && s.d(o)
        }
    }
}

function Xg(e, t, n) {
    let s, o, r;
    H(e, Cn, u => n(3, s = u)), H(e, nr, u => n(4, o = u)), H(e, xu, u => n(2, r = u));
    let i;
    const l = u => {
        n(0, i.style.maxHeight = `${u}px`, i)
    };
    let a;

    function c(u) {
        qe[u ? "unshift" : "push"](() => {
            i = u, n(0, i)
        })
    }
    return e.$$.update = () => {
        e.$$.dirty & 17 && i && l(o), e.$$.dirty & 8 && n(1, a = s ? .28 : .16)
    }, [i, a, r, s, o, c]
}
class Zg extends x {
    constructor(t) {
        super(), U(this, t, Xg, Yg, G, {})
    }
}

function Jg(e) {
    let t, n, s, o, r, i, l, a, c;
    return {
        c() {
            t = S("div"), n = S("div"), o = W(), r = S("div"), l = W(), a = S("div"), g(n, "class", s = Me(`typing-indicator ${e[0]} indicator-color-${e[1]} animate-typing`) + " svelte-13wgl1n"), V(n, "animation-iteration-count", e[2]), g(r, "class", i = Me(`typing-indicator ${e[0]} indicator-color-${e[1]} typing-indicator-second animate-typing`) + " svelte-13wgl1n"), V(r, "animation-iteration-count", e[2]), g(a, "class", c = Me(`typing-indicator ${e[0]} indicator-color-${e[1]} typing-indicator-third animate-typing`) + " svelte-13wgl1n"), V(a, "animation-iteration-count", e[2]), g(t, "class", "flex p-2")
        },
        m(u, d) {
            A(u, t, d), w(t, n), w(t, o), w(t, r), w(t, l), w(t, a)
        },
        p(u, [d]) {
            d & 3 && s !== (s = Me(`typing-indicator ${u[0]} indicator-color-${u[1]} animate-typing`) + " svelte-13wgl1n") && g(n, "class", s), d & 4 && V(n, "animation-iteration-count", u[2]), d & 3 && i !== (i = Me(`typing-indicator ${u[0]} indicator-color-${u[1]} typing-indicator-second animate-typing`) + " svelte-13wgl1n") && g(r, "class", i), d & 4 && V(r, "animation-iteration-count", u[2]), d & 3 && c !== (c = Me(`typing-indicator ${u[0]} indicator-color-${u[1]} typing-indicator-third animate-typing`) + " svelte-13wgl1n") && g(a, "class", c), d & 4 && V(a, "animation-iteration-count", u[2])
        },
        i: Y,
        o: Y,
        d(u) {
            u && T(t)
        }
    }
}

function Qg(e, t, n) {
    let s, {
            size: o = "md"
        } = t,
        {
            color: r = "black"
        } = t,
        {
            iterations: i = void 0
        } = t;
    return e.$$set = l => {
        "size" in l && n(0, o = l.size), "color" in l && n(1, r = l.color), "iterations" in l && n(3, i = l.iterations)
    }, e.$$.update = () => {
        e.$$.dirty & 8 && n(2, s = i ? ? "infinite")
    }, [o, r, s, i]
}
class ep extends x {
    constructor(t) {
        super(), U(this, t, Qg, Jg, G, {
            size: 0,
            color: 1,
            iterations: 3
        })
    }
}

function tp(e) {
    let t, n, s;
    return n = new ep({
        props: {
            iterations: 2
        }
    }), {
        c() {
            t = S("div"), k(n.$$.fragment), g(t, "class", "flex-center h-full bg-white rounded-lg")
        },
        m(o, r) {
            A(o, t, r), F(n, t, null), s = !0
        },
        p: Y,
        i(o) {
            s || (p(n.$$.fragment, o), s = !0)
        },
        o(o) {
            h(n.$$.fragment, o), s = !1
        },
        d(o) {
            o && T(t), I(n)
        }
    }
}
class np extends x {
    constructor(t) {
        super(), U(this, t, null, tp, G, {})
    }
}

function Ps(e) {
    let t, n, s, o, r, i, l;
    return n = new Bt({
        props: {
            component: np,
            id: ie.widgetTypingFrame,
            title: "Smartsupp widget typing",
            frameStyle: Dt()
        }
    }), {
        c() {
            t = S("div"), k(n.$$.fragment), V(t, "box-shadow", "rgba(0, 0, 0, 0.16) 0px 3px 16px"), V(t, "border-radius", "24px"), g(t, "data-testid", ie.widgetTypingFrame), V(t, "height", 40), V(t, "width", 70)
        },
        m(a, c) {
            A(a, t, c), F(n, t, null), r = !0, i || (l = Ft(Ed.call(null, t)), i = !0)
        },
        i(a) {
            r || (p(n.$$.fragment, a), a && Se(() => {
                r && (o && o.end(1), s = Xe(t, de, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }), s.start())
            }), r = !0)
        },
        o(a) {
            h(n.$$.fragment, a), s && s.invalidate(), a && (o = Ze(t, de, {
                y: 10,
                duration: 250
            })), r = !1
        },
        d(a) {
            a && T(t), I(n), a && o && o.end(), i = !1, l()
        }
    }
}

function sp(e) {
    let t, n, s = e[0] && Ps();
    return {
        c() {
            s && s.c(), t = ye()
        },
        m(o, r) {
            s && s.m(o, r), A(o, t, r), n = !0
        },
        p(o, [r]) {
            o[0] ? s ? r & 1 && p(s, 1) : (s = Ps(), s.c(), p(s, 1), s.m(t.parentNode, t)) : s && (Q(), h(s, 1, 1, () => {
                s = null
            }), ee())
        },
        i(o) {
            n || (p(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && T(t), s && s.d(o)
        }
    }
}

function op(e, t, n) {
    let s;
    return H(e, Nu, o => n(0, s = o)), [s]
}
class rp extends x {
    constructor(t) {
        super(), U(this, t, op, sp, G, {})
    }
}
const Tn = M(null),
    ip = E([Tn], ([e]) => !!e);

function ap(e) {
    let t, n, s, o, r, i;
    return {
        c() {
            t = S("video"), n = S("track"), s = S("source"), g(n, "kind", "captions"), ht(s.src, o = e[1].attachment.url) || g(s, "src", o), t.controls = !0, g(t, "class", "m-auto max-h-full max-w-full bg-black object-contain"), t.autoplay = !0, t.loop = !0
        },
        m(l, a) {
            A(l, t, a), w(t, n), w(t, s), r || (i = [pe(t, "click", On(e[6])), pe(t, "keypress", e[7])], r = !0)
        },
        p(l, a) {
            a & 2 && !ht(s.src, o = l[1].attachment.url) && g(s, "src", o)
        },
        d(l) {
            l && T(t), r = !1, Zt(i)
        }
    }
}

function lp(e) {
    let t, n, s, o, r;
    return {
        c() {
            var i, l;
            t = S("img"), g(t, "class", "m-auto max-h-full max-w-full select-none bg-black"), g(t, "width", "auto"), g(t, "height", "auto"), ht(t.src, n = (i = e[1]) == null ? void 0 : i.attachment.url) || g(t, "src", n), g(t, "alt", s = (l = e[1]) == null ? void 0 : l.attachment.fileName)
        },
        m(i, l) {
            A(i, t, l), o || (r = [pe(t, "click", On(e[4])), pe(t, "keypress", e[5])], o = !0)
        },
        p(i, l) {
            var a, c;
            l & 2 && !ht(t.src, n = (a = i[1]) == null ? void 0 : a.attachment.url) && g(t, "src", n), l & 2 && s !== (s = (c = i[1]) == null ? void 0 : c.attachment.fileName) && g(t, "alt", s)
        },
        d(i) {
            i && T(t), o = !1, Zt(r)
        }
    }
}

function cp(e) {
    var B;
    let t, n, s, o, r = ((B = e[1]) == null ? void 0 : B.attachment.fileName) + "",
        i, l, a, c, u, d, f, _, v, b, C;
    c = new gr({
        props: {
            icon: dr,
            iconDescription: "Close",
            size: "xl"
        }
    }), c.$on("click", e[8]);

    function y(L, X) {
        var ce, ge;
        if (((ce = L[1]) == null ? void 0 : ce.type) === yn.Image) return lp;
        if (((ge = L[1]) == null ? void 0 : ge.type) === yn.Video) return ap
    }
    let D = y(e),
        N = D && D(e);
    return {
        c() {
            t = S("div"), n = S("div"), s = S("div"), o = S("span"), i = Ke(r), l = W(), a = S("div"), k(c.$$.fragment), u = W(), d = S("div"), N && N.c(), g(o, "class", "whitespace-nowrap text-ellipsis overflow-hidden"), g(s, "class", "flex-grow flex items-center text-md px-4 overflow-hidden"), g(a, "class", "flex-shrink"), g(n, "class", "flex-shrink flex flex-row w-full bg-black text-white"), g(d, "class", "relative overflow-hidden flex-grow flex items-center bg-black/80 z-10"), P(d, "p-8", e[0]), P(d, "p-4", !e[0]), g(t, "class", "w-full h-full flex flex-col")
        },
        m(L, X) {
            A(L, t, X), w(t, n), w(n, s), w(s, o), w(o, i), w(n, l), w(n, a), F(c, a, null), w(t, u), w(t, d), N && N.m(d, null), v = !0, b || (C = [pe(d, "click", e[9]), pe(d, "keypress", e[3])], b = !0)
        },
        p(L, [X]) {
            var ce;
            (!v || X & 2) && r !== (r = ((ce = L[1]) == null ? void 0 : ce.attachment.fileName) + "") && Ye(i, r), D === (D = y(L)) && N ? N.p(L, X) : (N && N.d(1), N = D && D(L), N && (N.c(), N.m(d, null))), (!v || X & 1) && P(d, "p-8", L[0]), (!v || X & 1) && P(d, "p-4", !L[0])
        },
        i(L) {
            v || (p(c.$$.fragment, L), L && Se(() => {
                v && (_ && _.end(1), f = Xe(t, de, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }), f.start())
            }), v = !0)
        },
        o(L) {
            h(c.$$.fragment, L), f && f.invalidate(), L && (_ = Ze(t, de, {
                y: 10,
                duration: 250
            })), v = !1
        },
        d(L) {
            L && T(t), I(c), N && N.d(), L && _ && _.end(), b = !1, Zt(C)
        }
    }
}

function up(e, t, n) {
    let s, o, r;
    H(e, Kr, v => n(0, o = v)), H(e, Tn, v => n(1, r = v));
    const i = v => {
        v === "overlay" && !s || Tn.set(null)
    };

    function l(v) {
        Ue.call(this, e, v)
    }

    function a(v) {
        Ue.call(this, e, v)
    }

    function c(v) {
        Ue.call(this, e, v)
    }

    function u(v) {
        Ue.call(this, e, v)
    }

    function d(v) {
        Ue.call(this, e, v)
    }
    const f = () => i("button"),
        _ = () => i("overlay");
    return e.$$.update = () => {
        e.$$.dirty & 1 && (s = o)
    }, [o, r, i, l, a, c, u, d, f, _]
}
class dp extends x {
    constructor(t) {
        super(), U(this, t, up, cp, G, {})
    }
}

function Ds(e) {
    let t, n, s, o, r, i, l;
    return n = new Bt({
        props: {
            component: dp,
            id: ie.widgetImagePreview,
            title: "Smartsupp widget image preview",
            frameStyle: Dt(gp)
        }
    }), {
        c() {
            t = S("div"), k(n.$$.fragment), g(t, "data-testid", ie.widgetImagePreview), V(t, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
        },
        m(a, c) {
            A(a, t, c), F(n, t, null), r = !0, i || (l = Ft(Md.call(null, t)), i = !0)
        },
        i(a) {
            r || (p(n.$$.fragment, a), a && Se(() => {
                r && (o && o.end(1), s = Xe(t, de, {
                    y: 20,
                    delay: 100,
                    duration: 250
                }), s.start())
            }), r = !0)
        },
        o(a) {
            h(n.$$.fragment, a), s && s.invalidate(), a && (o = Ze(t, de, {
                y: 10,
                duration: 250
            })), r = !1
        },
        d(a) {
            a && T(t), I(n), a && o && o.end(), i = !1, l()
        }
    }
}

function fp(e) {
    let t, n, s = e[0] && Ds();
    return {
        c() {
            s && s.c(), t = ye()
        },
        m(o, r) {
            s && s.m(o, r), A(o, t, r), n = !0
        },
        p(o, [r]) {
            o[0] ? s ? r & 1 && p(s, 1) : (s = Ds(), s.c(), p(s, 1), s.m(t.parentNode, t)) : s && (Q(), h(s, 1, 1, () => {
                s = null
            }), ee())
        },
        i(o) {
            n || (p(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && T(t), s && s.d(o)
        }
    }
}
const gp = e => {
    e.style.position = "fixed"
};

function pp(e, t, n) {
    let s;
    return H(e, ip, o => n(0, s = o)), [s]
}
class mp extends x {
    constructor(t) {
        super(), U(this, t, pp, fp, G, {})
    }
}

function hp(e) {
    let t, n, s, o, r, i, l, a, c, u;
    return t = new rp({}), s = new Zg({}), r = new Kf({}), l = new _g({}), c = new mp({}), {
        c() {
            k(t.$$.fragment), n = W(), k(s.$$.fragment), o = W(), k(r.$$.fragment), i = W(), k(l.$$.fragment), a = W(), k(c.$$.fragment)
        },
        m(d, f) {
            F(t, d, f), A(d, n, f), F(s, d, f), A(d, o, f), F(r, d, f), A(d, i, f), F(l, d, f), A(d, a, f), F(c, d, f), u = !0
        },
        i(d) {
            u || (p(t.$$.fragment, d), p(s.$$.fragment, d), p(r.$$.fragment, d), p(l.$$.fragment, d), p(c.$$.fragment, d), u = !0)
        },
        o(d) {
            h(t.$$.fragment, d), h(s.$$.fragment, d), h(r.$$.fragment, d), h(l.$$.fragment, d), h(c.$$.fragment, d), u = !1
        },
        d(d) {
            d && (T(n), T(o), T(i), T(a)), I(t, d), I(s, d), I(r, d), I(l, d), I(c, d)
        }
    }
}

function bp(e) {
    let t, n;
    return t = new yf({
        props: {
            $$slots: {
                default: [hp]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            k(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 2 && (r.$$scope = {
                dirty: o,
                ctx: s
            }), t.$set(r)
        },
        i(s) {
            n || (p(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            I(t, s)
        }
    }
}

function _p(e, t, n) {
    let s;
    return H(e, Un, o => n(0, s = o)), De(() => {
        (async () => {
            await fa(), await le.initClient()
        })()
    }), zc(ne()), e.$$.update = () => {
        e.$$.dirty & 1 && s && Wo()
    }, [s]
}
class yp extends x {
    constructor(t) {
        super(), U(this, t, _p, bp, G, {})
    }
}
const gn = kn(window);
window.widget = gn;
O.init(gn.options);
gn.installApi(df);
Zn.setThemeColor(gn.options);
cr();
Wc();
Ul();
new yp({
    target: document.getElementById("app")
});
export {
    tl as $, Le as A, bu as B, Zs as C, en as D, Pg as E, et as F, Xp as G, Ae as H, gr as I, j as J, Xr as K, Zp as L, dd as M, em as N, Pr as O, Lp as P, Be as Q, Tp as R, Ip as S, tm as T, Jp as U, Vp as V, Rp as W, dr as X, nm as Y, Ig as Z, Np as _, wp as a, Vo as a$, xp as a0, q as a1, le as a2, se as a3, qt as a4, Hc as a5, Qp as a6, Xs as a7, Ka as a8, fr as a9, _e as aA, kd as aB, Xc as aC, pm as aD, lo as aE, Kp as aF, Up as aG, Je as aH, wn as aI, vm as aJ, tn as aK, Qe as aL, uo as aM, Gp as aN, Ag as aO, Og as aP, ym as aQ, _m as aR, gm as aS, ze as aT, Qs as aU, Z as aV, Kt as aW, Ct as aX, Bp as aY, on as aZ, Cp as a_, ep as aa, sm as ab, Pp as ac, $e as ad, Op as ae, kp as af, jp as ag, Hp as ah, qp as ai, So as aj, bl as ak, Wp as al, zp as am, rl as an, $p as ao, Tn as ap, yn as aq, Ep as ar, Mp as as, Fp as at, ni as au, K as av, Pl as aw, Pe as ax, ml as ay, Eo as az, Ce as b, Ht as b0, hm as b1, Wr as b2, Lo as b3, Fu as b4, ug as b5, xe as b6, lt as b7, aa as b8, to as b9, eo as ba, Ti as bb, _i as bc, Mi as bd, ki as be, Fi as bf, Ri as bg, Ni as bh, xi as bi, Hi as bj, qi as bk, Ki as bl, Xi as bm, oa as bn, mm as bo, jn as bp, wu as bq, Dp as br, bm as bs, Ng as bt, Ao as bu, Yp as bv, go as bw, ae as c, Zr as d, lm as e, Sp as f, ne as g, $o as h, am as i, Kr as j, pn as k, It as l, cm as m, om as n, Dn as o, _t as p, rm as q, fm as r, um as s, ie as t, im as u, ve as v, O as w, dm as x, Ap as y, fe as z
};
//# sourceMappingURL=main-58af301c.js.map