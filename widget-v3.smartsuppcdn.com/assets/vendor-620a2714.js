var Ar = Object.defineProperty;
var xr = (e, t, n) => t in e ? Ar(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Y = (e, t, n) => (xr(e, typeof t != "symbol" ? t + "" : t, n), n);

function U() {}
const Ze = e => e;

function Sr(e, t) {
    for (const n in t) e[n] = t[n];
    return e
}

function kn(e) {
    return e()
}

function Zt() {
    return Object.create(null)
}

function K(e) {
    e.forEach(kn)
}

function ce(e) {
    return typeof e == "function"
}

function Er(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let Te;

function As(e, t) {
    return e === t ? !0 : (Te || (Te = document.createElement("a")), Te.href = t, e === Te.href)
}

function Br(e) {
    return Object.keys(e).length === 0
}

function Ot(e, ...t) {
    if (e == null) {
        for (const r of t) r(void 0);
        return U
    }
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function xs(e) {
    let t;
    return Ot(e, n => t = n)(), t
}

function Ss(e, t, n) {
    e.$$.on_destroy.push(Ot(t, n))
}

function Es(e, t, n, r) {
    if (e) {
        const i = Fn(e, t, n, r);
        return e[0](i)
    }
}

function Fn(e, t, n, r) {
    return e[1] && r ? Sr(n.ctx.slice(), e[1](r(t))) : n.ctx
}

function Bs(e, t, n, r) {
    if (e[2] && r) {
        const i = e[2](r(n));
        if (t.dirty === void 0) return i;
        if (typeof i == "object") {
            const s = [],
                h = Math.max(t.dirty.length, i.length);
            for (let f = 0; f < h; f += 1) s[f] = t.dirty[f] | i[f];
            return s
        }
        return t.dirty | i
    }
    return t.dirty
}

function Os(e, t, n, r, i, s) {
    if (i) {
        const h = Fn(t, n, r, s);
        e.p(h, i)
    }
}

function Rs(e) {
    if (e.ctx.length > 32) {
        const t = [],
            n = e.ctx.length / 32;
        for (let r = 0; r < n; r++) t[r] = -1;
        return t
    }
    return -1
}

function $s(e) {
    const t = {};
    for (const n in e) n[0] !== "$" && (t[n] = e[n]);
    return t
}

function Ms(e, t) {
    const n = {};
    t = new Set(t);
    for (const r in e) !t.has(r) && r[0] !== "$" && (n[r] = e[r]);
    return n
}

function Ts(e) {
    const t = {};
    for (const n in e) t[n] = !0;
    return t
}

function Ps(e) {
    return e ? ? ""
}

function Ns(e, t, n) {
    return e.set(n), t
}

function Ds(e) {
    return e && ce(e.destroy) ? e.destroy : U
}

function Qt(e) {
    const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
}
const An = typeof window < "u";
let Rt = An ? () => window.performance.now() : () => Date.now(),
    $t = An ? e => requestAnimationFrame(e) : U;
const ge = new Set;

function xn(e) {
    ge.forEach(t => {
        t.c(e) || (ge.delete(t), t.f())
    }), ge.size !== 0 && $t(xn)
}

function Mt(e) {
    let t;
    return ge.size === 0 && $t(xn), {
        promise: new Promise(n => {
            ge.add(t = {
                c: e,
                f: n
            })
        }),
        abort() {
            ge.delete(t)
        }
    }
}

function Or(e, t) {
    e.appendChild(t)
}

function Sn(e) {
    if (!e) return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument
}

function Rr(e) {
    const t = En("style");
    return t.textContent = "/* empty */", $r(Sn(e), t), t.sheet
}

function $r(e, t) {
    return Or(e.head || e, t), t.sheet
}

function Mr(e, t, n) {
    e.insertBefore(t, n || null)
}

function Tt(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function Is(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
}

function En(e) {
    return document.createElement(e)
}

function Tr(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function Bn(e) {
    return document.createTextNode(e)
}

function qs() {
    return Bn(" ")
}

function js() {
    return Bn("")
}

function Ls(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
}

function Us(e) {
    return function(t) {
        return t.preventDefault(), e.call(this, t)
    }
}

function Hs(e) {
    return function(t) {
        return t.stopPropagation(), e.call(this, t)
    }
}

function On(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
const Pr = ["width", "height"];

function zs(e, t) {
    const n = Object.getOwnPropertyDescriptors(e.__proto__);
    for (const r in t) t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set && Pr.indexOf(r) === -1 ? e[r] = t[r] : On(e, r, t[r])
}

function Vs(e, t) {
    for (const n in t) On(e, n, t[n])
}

function Nr(e) {
    return Array.from(e.childNodes)
}

function Ws(e, t) {
    t = "" + t, e.data !== t && (e.data = t)
}

function Xs(e, t) {
    e.value = t ? ? ""
}

function Js(e, t, n, r) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "")
}

function Gs(e, t, n) {
    for (let r = 0; r < e.options.length; r += 1) {
        const i = e.options[r];
        if (i.__value === t) {
            i.selected = !0;
            return
        }
    }(!n || t !== void 0) && (e.selectedIndex = -1)
}

function Ks(e, t) {
    for (let n = 0; n < e.options.length; n += 1) {
        const r = e.options[n];
        r.selected = ~t.indexOf(r.__value)
    }
}

function Ys(e) {
    const t = e.querySelector(":checked");
    return t && t.__value
}

function Zs(e, t, n) {
    e.classList.toggle(t, !!n)
}

function Rn(e, t, {
    bubbles: n = !1,
    cancelable: r = !1
} = {}) {
    return new CustomEvent(e, {
        detail: t,
        bubbles: n,
        cancelable: r
    })
}
class Qs {
    constructor(t = !1) {
        Y(this, "is_svg", !1);
        Y(this, "e");
        Y(this, "n");
        Y(this, "t");
        Y(this, "a");
        this.is_svg = t, this.e = this.n = null
    }
    c(t) {
        this.h(t)
    }
    m(t, n, r = null) {
        this.e || (this.is_svg ? this.e = Tr(n.nodeName) : this.e = En(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(r)
    }
    h(t) {
        this.e.innerHTML = t, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(t) {
        for (let n = 0; n < this.n.length; n += 1) Mr(this.t, this.n[n], t)
    }
    p(t) {
        this.d(), this.h(t), this.i(this.a)
    }
    d() {
        this.n.forEach(Tt)
    }
}

function ea(e, t) {
    return new e(t)
}
const ze = new Map;
let Ve = 0;

function Dr(e) {
    let t = 5381,
        n = e.length;
    for (; n--;) t = (t << 5) - t ^ e.charCodeAt(n);
    return t >>> 0
}

function Ir(e, t) {
    const n = {
        stylesheet: Rr(t),
        rules: {}
    };
    return ze.set(e, n), n
}

function We(e, t, n, r, i, s, h, f = 0) {
    const p = 16.666 / r;
    let d = `{
`;
    for (let g = 0; g <= 1; g += p) {
        const y = t + (n - t) * s(g);
        d += g * 100 + `%{${h(y,1-y)}}
`
    }
    const a = d + `100% {${h(n,1-n)}}
}`,
        o = `__svelte_${Dr(a)}_${f}`,
        c = Sn(e),
        {
            stylesheet: u,
            rules: l
        } = ze.get(c) || Ir(c, e);
    l[o] || (l[o] = !0, u.insertRule(`@keyframes ${o} ${a}`, u.cssRules.length));
    const v = e.style.animation || "";
    return e.style.animation = `${v?`${v}, `:""}${o} ${r}ms linear ${i}ms 1 both`, Ve += 1, o
}

function Xe(e, t) {
    const n = (e.style.animation || "").split(", "),
        r = n.filter(t ? s => s.indexOf(t) < 0 : s => s.indexOf("__svelte") === -1),
        i = n.length - r.length;
    i && (e.style.animation = r.join(", "), Ve -= i, Ve || qr())
}

function qr() {
    $t(() => {
        Ve || (ze.forEach(e => {
            const {
                ownerNode: t
            } = e.stylesheet;
            t && Tt(t)
        }), ze.clear())
    })
}
let xe;

function Ae(e) {
    xe = e
}

function Re() {
    if (!xe) throw new Error("Function called outside component initialization");
    return xe
}

function ta(e) {
    Re().$$.on_mount.push(e)
}

function na(e) {
    Re().$$.on_destroy.push(e)
}

function ra() {
    const e = Re();
    return (t, n, {
        cancelable: r = !1
    } = {}) => {
        const i = e.$$.callbacks[t];
        if (i) {
            const s = Rn(t, n, {
                cancelable: r
            });
            return i.slice().forEach(h => {
                h.call(e, s)
            }), !s.defaultPrevented
        }
        return !0
    }
}

function ia(e, t) {
    return Re().$$.context.set(e, t), t
}

function oa(e) {
    return Re().$$.context.get(e)
}

function sa(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach(r => r.call(this, t))
}
const pe = [],
    en = [];
let ve = [];
const yt = [],
    $n = Promise.resolve();
let mt = !1;

function Mn() {
    mt || (mt = !0, $n.then(Tn))
}

function aa() {
    return Mn(), $n
}

function me(e) {
    ve.push(e)
}

function ca(e) {
    yt.push(e)
}
const at = new Set;
let fe = 0;

function Tn() {
    if (fe !== 0) return;
    const e = xe;
    do {
        try {
            for (; fe < pe.length;) {
                const t = pe[fe];
                fe++, Ae(t), jr(t.$$)
            }
        } catch (t) {
            throw pe.length = 0, fe = 0, t
        }
        for (Ae(null), pe.length = 0, fe = 0; en.length;) en.pop()();
        for (let t = 0; t < ve.length; t += 1) {
            const n = ve[t];
            at.has(n) || (at.add(n), n())
        }
        ve.length = 0
    } while (pe.length);
    for (; yt.length;) yt.pop()();
    mt = !1, at.clear(), Ae(e)
}

function jr(e) {
    if (e.fragment !== null) {
        e.update(), K(e.before_update);
        const t = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(me)
    }
}

function Lr(e) {
    const t = [],
        n = [];
    ve.forEach(r => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach(r => r()), ve = t
}
let Fe;

function Pt() {
    return Fe || (Fe = Promise.resolve(), Fe.then(() => {
        Fe = null
    })), Fe
}

function se(e, t, n) {
    e.dispatchEvent(Rn(`${t?"intro":"outro"}${n}`))
}
const Ue = new Set;
let X;

function ua() {
    X = {
        r: 0,
        c: [],
        p: X
    }
}

function fa() {
    X.r || K(X.c), X = X.p
}

function Pn(e, t) {
    e && e.i && (Ue.delete(e), e.i(t))
}

function Ur(e, t, n, r) {
    if (e && e.o) {
        if (Ue.has(e)) return;
        Ue.add(e), X.c.push(() => {
            Ue.delete(e), r && (n && e.d(1), r())
        }), e.o(t)
    } else r && r()
}
const Nt = {
    duration: 0
};

function la(e, t, n) {
    const r = {
        direction: "in"
    };
    let i = t(e, n, r),
        s = !1,
        h, f, p = 0;

    function d() {
        h && Xe(e, h)
    }

    function a() {
        const {
            delay: c = 0,
            duration: u = 300,
            easing: l = Ze,
            tick: v = U,
            css: g
        } = i || Nt;
        g && (h = We(e, 0, 1, u, c, l, g, p++)), v(0, 1);
        const y = Rt() + c,
            C = y + u;
        f && f.abort(), s = !0, me(() => se(e, !0, "start")), f = Mt(w => {
            if (s) {
                if (w >= C) return v(1, 0), se(e, !0, "end"), d(), s = !1;
                if (w >= y) {
                    const m = l((w - y) / u);
                    v(m, 1 - m)
                }
            }
            return s
        })
    }
    let o = !1;
    return {
        start() {
            o || (o = !0, Xe(e), ce(i) ? (i = i(r), Pt().then(a)) : a())
        },
        invalidate() {
            o = !1
        },
        end() {
            s && (d(), s = !1)
        }
    }
}

function ha(e, t, n) {
    const r = {
        direction: "out"
    };
    let i = t(e, n, r),
        s = !0,
        h;
    const f = X;
    f.r += 1;
    let p;

    function d() {
        const {
            delay: a = 0,
            duration: o = 300,
            easing: c = Ze,
            tick: u = U,
            css: l
        } = i || Nt;
        l && (h = We(e, 1, 0, o, a, c, l));
        const v = Rt() + a,
            g = v + o;
        me(() => se(e, !1, "start")), "inert" in e && (p = e.inert, e.inert = !0), Mt(y => {
            if (s) {
                if (y >= g) return u(0, 1), se(e, !1, "end"), --f.r || K(f.c), !1;
                if (y >= v) {
                    const C = c((y - v) / o);
                    u(1 - C, C)
                }
            }
            return s
        })
    }
    return ce(i) ? Pt().then(() => {
        i = i(r), d()
    }) : d(), {
        end(a) {
            a && "inert" in e && (e.inert = p), a && i.tick && i.tick(1, 0), s && (h && Xe(e, h), s = !1)
        }
    }
}

function da(e, t, n, r) {
    let s = t(e, n, {
            direction: "both"
        }),
        h = r ? 0 : 1,
        f = null,
        p = null,
        d = null,
        a;

    function o() {
        d && Xe(e, d)
    }

    function c(l, v) {
        const g = l.b - h;
        return v *= Math.abs(g), {
            a: h,
            b: l.b,
            d: g,
            duration: v,
            start: l.start,
            end: l.start + v,
            group: l.group
        }
    }

    function u(l) {
        const {
            delay: v = 0,
            duration: g = 300,
            easing: y = Ze,
            tick: C = U,
            css: w
        } = s || Nt, m = {
            start: Rt() + v,
            b: l
        };
        l || (m.group = X, X.r += 1), "inert" in e && (l ? a !== void 0 && (e.inert = a) : (a = e.inert, e.inert = !0)), f || p ? p = m : (w && (o(), d = We(e, h, l, g, v, y, w)), l && C(0, 1), f = c(m, g), me(() => se(e, l, "start")), Mt(b => {
            if (p && b > p.start && (f = c(p, g), p = null, se(e, f.b, "start"), w && (o(), d = We(e, h, f.b, f.duration, 0, y, s.css))), f) {
                if (b >= f.end) C(h = f.b, 1 - h), se(e, f.b, "end"), p || (f.b ? o() : --f.group.r || K(f.group.c)), f = null;
                else if (b >= f.start) {
                    const _ = b - f.start;
                    h = f.a + f.d * y(_ / f.duration), C(h, 1 - h)
                }
            }
            return !!(f || p)
        }))
    }
    return {
        run(l) {
            ce(s) ? Pt().then(() => {
                s = s({
                    direction: l ? "in" : "out"
                }), u(l)
            }) : u(l)
        },
        end() {
            o(), f = p = null
        }
    }
}

function pa(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e)
}

function ga(e, t) {
    e.d(1), t.delete(e.key)
}

function va(e, t) {
    Ur(e, 1, 1, () => {
        t.delete(e.key)
    })
}

function ya(e, t, n, r, i, s, h, f, p, d, a, o) {
    let c = e.length,
        u = s.length,
        l = c;
    const v = {};
    for (; l--;) v[e[l].key] = l;
    const g = [],
        y = new Map,
        C = new Map,
        w = [];
    for (l = u; l--;) {
        const k = o(i, s, l),
            F = n(k);
        let A = h.get(F);
        A ? r && w.push(() => A.p(k, t)) : (A = d(F, k), A.c()), y.set(F, g[l] = A), F in v && C.set(F, Math.abs(l - v[F]))
    }
    const m = new Set,
        b = new Set;

    function _(k) {
        Pn(k, 1), k.m(f, a), h.set(k.key, k), a = k.first, u--
    }
    for (; c && u;) {
        const k = g[u - 1],
            F = e[c - 1],
            A = k.key,
            x = F.key;
        k === F ? (a = k.first, c--, u--) : y.has(x) ? !h.has(A) || m.has(A) ? _(k) : b.has(x) ? c-- : C.get(A) > C.get(x) ? (b.add(A), _(k)) : (m.add(x), c--) : (p(F, h), c--)
    }
    for (; c--;) {
        const k = e[c];
        y.has(k.key) || p(k, h)
    }
    for (; u;) _(g[u - 1]);
    return K(w), g
}

function ma(e, t) {
    const n = {},
        r = {},
        i = {
            $$scope: 1
        };
    let s = e.length;
    for (; s--;) {
        const h = e[s],
            f = t[s];
        if (f) {
            for (const p in h) p in f || (r[p] = 1);
            for (const p in f) i[p] || (n[p] = f[p], i[p] = 1);
            e[s] = f
        } else
            for (const p in h) i[p] = 1
    }
    for (const h in r) h in n || (n[h] = void 0);
    return n
}

function ba(e) {
    return typeof e == "object" && e !== null ? e : {}
}

function Ca(e, t, n) {
    const r = e.$$.props[t];
    r !== void 0 && (e.$$.bound[r] = n, n(e.$$.ctx[r]))
}

function wa(e) {
    e && e.c()
}

function Hr(e, t, n) {
    const {
        fragment: r,
        after_update: i
    } = e.$$;
    r && r.m(t, n), me(() => {
        const s = e.$$.on_mount.map(kn).filter(ce);
        e.$$.on_destroy ? e.$$.on_destroy.push(...s) : K(s), e.$$.on_mount = []
    }), i.forEach(me)
}

function zr(e, t) {
    const n = e.$$;
    n.fragment !== null && (Lr(n.after_update), K(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
}

function Vr(e, t) {
    e.$$.dirty[0] === -1 && (pe.push(e), Mn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function _a(e, t, n, r, i, s, h, f = [-1]) {
    const p = xe;
    Ae(e);
    const d = e.$$ = {
        fragment: null,
        ctx: [],
        props: s,
        update: U,
        not_equal: i,
        bound: Zt(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (p ? p.$$.context : [])),
        callbacks: Zt(),
        dirty: f,
        skip_bound: !1,
        root: t.target || p.$$.root
    };
    h && h(d.root);
    let a = !1;
    if (d.ctx = n ? n(e, t.props || {}, (o, c, ...u) => {
            const l = u.length ? u[0] : c;
            return d.ctx && i(d.ctx[o], d.ctx[o] = l) && (!d.skip_bound && d.bound[o] && d.bound[o](l), a && Vr(e, o)), c
        }) : [], d.update(), a = !0, K(d.before_update), d.fragment = r ? r(d.ctx) : !1, t.target) {
        if (t.hydrate) {
            const o = Nr(t.target);
            d.fragment && d.fragment.l(o), o.forEach(Tt)
        } else d.fragment && d.fragment.c();
        t.intro && Pn(e.$$.fragment), Hr(e, t.target, t.anchor), Tn()
    }
    Ae(p)
}
class ka {
    constructor() {
        Y(this, "$$");
        Y(this, "$$set")
    }
    $destroy() {
        zr(this, 1), this.$destroy = U
    }
    $on(t, n) {
        if (!ce(n)) return U;
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return r.push(n), () => {
            const i = r.indexOf(n);
            i !== -1 && r.splice(i, 1)
        }
    }
    $set(t) {
        this.$$set && !Br(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const Wr = "4",
    le = [];

function Xr(e, t) {
    return {
        subscribe: Jr(e, t).subscribe
    }
}

function Jr(e, t = U) {
    let n;
    const r = new Set;

    function i(f) {
        if (Er(e, f) && (e = f, n)) {
            const p = !le.length;
            for (const d of r) d[1](), le.push(d, e);
            if (p) {
                for (let d = 0; d < le.length; d += 2) le[d][0](le[d + 1]);
                le.length = 0
            }
        }
    }

    function s(f) {
        i(f(e))
    }

    function h(f, p = U) {
        const d = [f, p];
        return r.add(d), r.size === 1 && (n = t(i, s) || U), f(e), () => {
            r.delete(d), r.size === 0 && n && (n(), n = null)
        }
    }
    return {
        set: i,
        update: s,
        subscribe: h
    }
}

function Fa(e, t, n) {
    const r = !Array.isArray(e),
        i = r ? [e] : e;
    if (!i.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
    const s = t.length < 2;
    return Xr(n, (h, f) => {
        let p = !1;
        const d = [];
        let a = 0,
            o = U;
        const c = () => {
                if (a) return;
                o();
                const l = t(r ? d[0] : d, h, f);
                s ? h(l) : o = ce(l) ? l : U
            },
            u = i.map((l, v) => Ot(l, g => {
                d[v] = g, a &= ~(1 << v), p && c()
            }, () => {
                a |= 1 << v
            }));
        return p = !0, c(),
            function() {
                K(u), o(), p = !1
            }
    })
} /*! js-cookie v3.0.5 | MIT */
function Pe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) e[r] = n[r]
    }
    return e
}
var Gr = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function bt(e, t) {
    function n(i, s, h) {
        if (!(typeof document > "u")) {
            h = Pe({}, t, h), typeof h.expires == "number" && (h.expires = new Date(Date.now() + h.expires * 864e5)), h.expires && (h.expires = h.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var f = "";
            for (var p in h) h[p] && (f += "; " + p, h[p] !== !0 && (f += "=" + h[p].split(";")[0]));
            return document.cookie = i + "=" + e.write(s, i) + f
        }
    }

    function r(i) {
        if (!(typeof document > "u" || arguments.length && !i)) {
            for (var s = document.cookie ? document.cookie.split("; ") : [], h = {}, f = 0; f < s.length; f++) {
                var p = s[f].split("="),
                    d = p.slice(1).join("=");
                try {
                    var a = decodeURIComponent(p[0]);
                    if (h[a] = e.read(d, a), i === a) break
                } catch {}
            }
            return i ? h[i] : h
        }
    }
    return Object.create({
        set: n,
        get: r,
        remove: function(i, s) {
            n(i, "", Pe({}, s, {
                expires: -1
            }))
        },
        withAttributes: function(i) {
            return bt(this.converter, Pe({}, this.attributes, i))
        },
        withConverter: function(i) {
            return bt(Pe({}, this.converter, i), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var Aa = bt(Gr, {
        path: "/"
    }),
    O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Nn(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Dn(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var Kr = "sessionAccessId-";

function Yr(e) {
    var t = void 0;
    return e && e.id && ~e.id.indexOf(Kr) && (t = e.id), t
}
var Zr = Yr;

function Qr(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
    } else return Array.from(e)
}
var ei = Zr,
    ti = "sessionAccessId-";

function ni() {
    return ti + Date.now()
}
var ri = function(t, n) {
    n = n || document.body;
    var r = void 0,
        i = {},
        s = [],
        h = !1,
        f = !0,
        p = void 0,
        d = !1,
        a = document.createElement("iframe");
    a.src = t, a.width = 0, a.height = 0, a.style.display = "none", a.onload = function() {
        d = !0
    };

    function o() {
        n.appendChild(a), r = a.contentWindow, f = !1, window.addEventListener("message", c), C()
    }
    o();

    function c(w) {
        var m = w.data,
            b = ei(m);
        if (b === "sessionAccessId-connected") {
            h = !0;
            return
        }
        if (m.connectError) {
            Object.keys(i).forEach(function(k) {
                return i[k](m.error)
            }), i = {};
            return
        }
        var _ = i[b];
        b && _ && _(m.error, m.data)
    }

    function u() {
        clearTimeout(p), window.removeEventListener("message", c), a.parentNode.removeChild(a), h = !1, f = !0
    }

    function l(w, m, b, _) {
        f && o(), !h && w !== "connect" && s.push([w, m, b, _]);
        var k = ni();
        i && typeof _ == "function" && (i[k] = _), d && r.postMessage({
            method: w,
            key: m,
            value: b,
            id: k
        }, t)
    }

    function v(w, m) {
        if (!m) throw new Error("callback required for get");
        l("get", w, null, m)
    }

    function g(w, m, b) {
        l("set", w, m, b)
    }

    function y(w, m) {
        l("remove", w, null, m)
    }

    function C() {
        if (h) {
            for (clearTimeout(p); s.length;) l.apply(void 0, Qr(s.pop()));
            return
        }
        l("connect"), p = setTimeout(C, 125)
    }
    return {
        get: v,
        set: g,
        remove: y,
        close: u
    }
};
const ii = ri;
var oi = ii;
const xa = Nn(oi);
var si = {},
    In = {};
Object.defineProperty(In, "__esModule", {
    value: !0
});
var Qe = {};
Object.defineProperty(Qe, "__esModule", {
    value: !0
});
Qe.CardsLayout = void 0;
Qe.CardsLayout = {
    Grid: "grid",
    Carousel: "carousel"
};
var qn = {};
Object.defineProperty(qn, "__esModule", {
    value: !0
});
var L = {};
Object.defineProperty(L, "__esModule", {
    value: !0
});
L.ChannelType = L.MessageSubType = L.MessageType = L.AttachmentInvalidReason = L.AttachmentType = L.MessageActionType = void 0;
L.MessageActionType = {
    Text: "text",
    OpenUrl: "open_url"
};
L.AttachmentType = {
    Card: "card",
    Cards: "cards",
    File: "file",
    Image: "image",
    Media: "media",
    Invalid: "invalid"
};
L.AttachmentInvalidReason = {
    InvalidSize: "invalid_size",
    InvalidType: "invalid_type"
};
L.MessageType = {
    Message: "message",
    Event: "event",
    Help: "help"
};
L.MessageSubType = {
    Agent: "agent",
    Contact: "contact",
    Trigger: "trigger",
    Bot: "bot",
    System: "system",
    AgentExternal: "agent_external",
    FoundEmail: "found_email",
    ChatResolve: "chat_resolve"
};
L.ChannelType = {
    Default: "default",
    Email: "email",
    FacebookMessenger: "facebook_messenger",
    Smartsupp: "smartsupp"
};
var jn = {};
Object.defineProperty(jn, "__esModule", {
    value: !0
});
var Ln = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MessageContentType = e.MessageContent = void 0;
    var t;
    (function(n) {
        (function(r) {
            r.Type = {
                Text: "text",
                Upload: "upload",
                RateForm: "rate_form"
            }
        })(n.Message || (n.Message = {})),
        function(r) {
            r.Type = {
                AgentJoin: "agent_join",
                AgentAssign: "agent_assign",
                AgentUnassign: "agent_unassign",
                AgentLeave: "agent_leave",
                ChatClose: "chat_close",
                ChatVisitorClose: "chat_visitor_close"
            }
        }(n.Event || (n.Event = {})),
        function(r) {
            r.Type = {
                Text: "text",
                FoundEmail: "found_email"
            }
        }(n.Help || (n.Help = {}))
    })(t = e.MessageContent || (e.MessageContent = {})), e.MessageContentType = { ...t.Message.Type,
        ...t.Event.Type,
        ...t.Help.Type
    }
})(Ln);
var Un = {};
Object.defineProperty(Un, "__esModule", {
    value: !0
});
(function(e) {
    var t = O && O.__createBinding || (Object.create ? function(r, i, s, h) {
            h === void 0 && (h = s);
            var f = Object.getOwnPropertyDescriptor(i, s);
            (!f || ("get" in f ? !i.__esModule : f.writable || f.configurable)) && (f = {
                enumerable: !0,
                get: function() {
                    return i[s]
                }
            }), Object.defineProperty(r, h, f)
        } : function(r, i, s, h) {
            h === void 0 && (h = s), r[h] = i[s]
        }),
        n = O && O.__exportStar || function(r, i) {
            for (var s in r) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, r, s)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n(In, e), n(Qe, e), n(qn, e), n(L, e), n(jn, e), n(Ln, e), n(Un, e)
})(si);
var Hn = {},
    zn = {},
    Vn = {},
    I = {},
    Ne = {
        exports: {}
    },
    ct, tn;

function ai() {
    if (tn) return ct;
    tn = 1;
    var e = 1e3,
        t = e * 60,
        n = t * 60,
        r = n * 24,
        i = r * 7,
        s = r * 365.25;
    ct = function(a, o) {
        o = o || {};
        var c = typeof a;
        if (c === "string" && a.length > 0) return h(a);
        if (c === "number" && isFinite(a)) return o.long ? p(a) : f(a);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a))
    };

    function h(a) {
        if (a = String(a), !(a.length > 100)) {
            var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(a);
            if (o) {
                var c = parseFloat(o[1]),
                    u = (o[2] || "ms").toLowerCase();
                switch (u) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return c * s;
                    case "weeks":
                    case "week":
                    case "w":
                        return c * i;
                    case "days":
                    case "day":
                    case "d":
                        return c * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return c * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return c * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return c * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return c;
                    default:
                        return
                }
            }
        }
    }

    function f(a) {
        var o = Math.abs(a);
        return o >= r ? Math.round(a / r) + "d" : o >= n ? Math.round(a / n) + "h" : o >= t ? Math.round(a / t) + "m" : o >= e ? Math.round(a / e) + "s" : a + "ms"
    }

    function p(a) {
        var o = Math.abs(a);
        return o >= r ? d(a, o, r, "day") : o >= n ? d(a, o, n, "hour") : o >= t ? d(a, o, t, "minute") : o >= e ? d(a, o, e, "second") : a + " ms"
    }

    function d(a, o, c, u) {
        var l = o >= c * 1.5;
        return Math.round(a / c) + " " + u + (l ? "s" : "")
    }
    return ct
}
var ut, nn;

function ci() {
    if (nn) return ut;
    nn = 1;

    function e(t) {
        r.debug = r, r.default = r, r.coerce = d, r.disable = h, r.enable = s, r.enabled = f, r.humanize = ai(), r.destroy = a, Object.keys(t).forEach(o => {
            r[o] = t[o]
        }), r.names = [], r.skips = [], r.formatters = {};

        function n(o) {
            let c = 0;
            for (let u = 0; u < o.length; u++) c = (c << 5) - c + o.charCodeAt(u), c |= 0;
            return r.colors[Math.abs(c) % r.colors.length]
        }
        r.selectColor = n;

        function r(o) {
            let c, u = null,
                l, v;

            function g(...y) {
                if (!g.enabled) return;
                const C = g,
                    w = Number(new Date),
                    m = w - (c || w);
                C.diff = m, C.prev = c, C.curr = w, c = w, y[0] = r.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
                let b = 0;
                y[0] = y[0].replace(/%([a-zA-Z%])/g, (k, F) => {
                    if (k === "%%") return "%";
                    b++;
                    const A = r.formatters[F];
                    if (typeof A == "function") {
                        const x = y[b];
                        k = A.call(C, x), y.splice(b, 1), b--
                    }
                    return k
                }), r.formatArgs.call(C, y), (C.log || r.log).apply(C, y)
            }
            return g.namespace = o, g.useColors = r.useColors(), g.color = r.selectColor(o), g.extend = i, g.destroy = r.destroy, Object.defineProperty(g, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => u !== null ? u : (l !== r.namespaces && (l = r.namespaces, v = r.enabled(o)), v),
                set: y => {
                    u = y
                }
            }), typeof r.init == "function" && r.init(g), g
        }

        function i(o, c) {
            const u = r(this.namespace + (typeof c > "u" ? ":" : c) + o);
            return u.log = this.log, u
        }

        function s(o) {
            r.save(o), r.namespaces = o, r.names = [], r.skips = [];
            let c;
            const u = (typeof o == "string" ? o : "").split(/[\s,]+/),
                l = u.length;
            for (c = 0; c < l; c++) u[c] && (o = u[c].replace(/\*/g, ".*?"), o[0] === "-" ? r.skips.push(new RegExp("^" + o.slice(1) + "$")) : r.names.push(new RegExp("^" + o + "$")))
        }

        function h() {
            const o = [...r.names.map(p), ...r.skips.map(p).map(c => "-" + c)].join(",");
            return r.enable(""), o
        }

        function f(o) {
            if (o[o.length - 1] === "*") return !0;
            let c, u;
            for (c = 0, u = r.skips.length; c < u; c++)
                if (r.skips[c].test(o)) return !1;
            for (c = 0, u = r.names.length; c < u; c++)
                if (r.names[c].test(o)) return !0;
            return !1
        }

        function p(o) {
            return o.toString().substring(2, o.toString().length - 2).replace(/\.\*\?$/, "*")
        }

        function d(o) {
            return o instanceof Error ? o.stack || o.message : o
        }

        function a() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
        return r.enable(r.load()), r
    }
    return ut = e, ut
}
var rn;

function ui() {
    return rn || (rn = 1, function(e, t) {
        t.formatArgs = r, t.save = i, t.load = s, t.useColors = n, t.storage = h(), t.destroy = (() => {
            let p = !1;
            return () => {
                p || (p = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }
        })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function n() {
            return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }

        function r(p) {
            if (p[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + p[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            const d = "color: " + this.color;
            p.splice(1, 0, d, "color: inherit");
            let a = 0,
                o = 0;
            p[0].replace(/%[a-zA-Z%]/g, c => {
                c !== "%%" && (a++, c === "%c" && (o = a))
            }), p.splice(o, 0, d)
        }
        t.log = console.debug || console.log || (() => {});

        function i(p) {
            try {
                p ? t.storage.setItem("debug", p) : t.storage.removeItem("debug")
            } catch {}
        }

        function s() {
            let p;
            try {
                p = t.storage.getItem("debug")
            } catch {}
            return !p && typeof process < "u" && "env" in process && (p = {}.DEBUG), p
        }

        function h() {
            try {
                return localStorage
            } catch {}
        }
        e.exports = ci()(t);
        const {
            formatters: f
        } = e.exports;
        f.j = function(p) {
            try {
                return JSON.stringify(p)
            } catch (d) {
                return "[UnexpectedJSONParseError]: " + d.message
            }
        }
    }(Ne, Ne.exports)), Ne.exports
}
var fi = O && O.__extends || function() {
    var e = function(t, n) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(r, i) {
            r.__proto__ = i
        } || function(r, i) {
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s])
        }, e(t, n)
    };
    return function(t, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);

        function r() {
            this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}();
Object.defineProperty(I, "__esModule", {
    value: !0
});
I.createEmitter = I.createCallback = I.bound = I.createSocketError = I.SocketError = I.debug = void 0;
I.debug = li();

function li() {
    try {
        return ui()("smartsupp:client")
    } catch {
        return function() {}
    }
}
var Wn = function(e) {
    fi(t, e);

    function t(n, r) {
        var i = e.call(this, n) || this;
        return Object.setPrototypeOf(i, t.prototype), i.name = i.constructor.name, i.code = r.code, i.type = r.type, i.event = r.event, r && r.stack && (i.stack = "".concat(i.stack, `
Caused By: `).concat(r.stack)), i
    }
    return t
}(Error);
I.SocketError = Wn;

function Xn(e) {
    return new Wn(e.message, e)
}
I.createSocketError = Xn;

function hi(e, t) {
    return function() {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        e[t].apply(e, n)
    }
}
I.bound = hi;

function di(e, t) {
    return function(n, r) {
        n ? t(Xn(n)) : e(r)
    }
}
I.createCallback = di;

function pi(e, t) {
    return function(n) {
        e.emit(t, n)
    }
}
I.createEmitter = pi;
var Jn = {
    exports: {}
};
(function(e) {
    var t = Object.prototype.hasOwnProperty,
        n = "~";

    function r() {}
    Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1));

    function i(p, d, a) {
        this.fn = p, this.context = d, this.once = a || !1
    }

    function s(p, d, a, o, c) {
        if (typeof a != "function") throw new TypeError("The listener must be a function");
        var u = new i(a, o || p, c),
            l = n ? n + d : d;
        return p._events[l] ? p._events[l].fn ? p._events[l] = [p._events[l], u] : p._events[l].push(u) : (p._events[l] = u, p._eventsCount++), p
    }

    function h(p, d) {
        --p._eventsCount === 0 ? p._events = new r : delete p._events[d]
    }

    function f() {
        this._events = new r, this._eventsCount = 0
    }
    f.prototype.eventNames = function() {
        var d = [],
            a, o;
        if (this._eventsCount === 0) return d;
        for (o in a = this._events) t.call(a, o) && d.push(n ? o.slice(1) : o);
        return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(a)) : d
    }, f.prototype.listeners = function(d) {
        var a = n ? n + d : d,
            o = this._events[a];
        if (!o) return [];
        if (o.fn) return [o.fn];
        for (var c = 0, u = o.length, l = new Array(u); c < u; c++) l[c] = o[c].fn;
        return l
    }, f.prototype.listenerCount = function(d) {
        var a = n ? n + d : d,
            o = this._events[a];
        return o ? o.fn ? 1 : o.length : 0
    }, f.prototype.emit = function(d, a, o, c, u, l) {
        var v = n ? n + d : d;
        if (!this._events[v]) return !1;
        var g = this._events[v],
            y = arguments.length,
            C, w;
        if (g.fn) {
            switch (g.once && this.removeListener(d, g.fn, void 0, !0), y) {
                case 1:
                    return g.fn.call(g.context), !0;
                case 2:
                    return g.fn.call(g.context, a), !0;
                case 3:
                    return g.fn.call(g.context, a, o), !0;
                case 4:
                    return g.fn.call(g.context, a, o, c), !0;
                case 5:
                    return g.fn.call(g.context, a, o, c, u), !0;
                case 6:
                    return g.fn.call(g.context, a, o, c, u, l), !0
            }
            for (w = 1, C = new Array(y - 1); w < y; w++) C[w - 1] = arguments[w];
            g.fn.apply(g.context, C)
        } else {
            var m = g.length,
                b;
            for (w = 0; w < m; w++) switch (g[w].once && this.removeListener(d, g[w].fn, void 0, !0), y) {
                case 1:
                    g[w].fn.call(g[w].context);
                    break;
                case 2:
                    g[w].fn.call(g[w].context, a);
                    break;
                case 3:
                    g[w].fn.call(g[w].context, a, o);
                    break;
                case 4:
                    g[w].fn.call(g[w].context, a, o, c);
                    break;
                default:
                    if (!C)
                        for (b = 1, C = new Array(y - 1); b < y; b++) C[b - 1] = arguments[b];
                    g[w].fn.apply(g[w].context, C)
            }
        }
        return !0
    }, f.prototype.on = function(d, a, o) {
        return s(this, d, a, o, !1)
    }, f.prototype.once = function(d, a, o) {
        return s(this, d, a, o, !0)
    }, f.prototype.removeListener = function(d, a, o, c) {
        var u = n ? n + d : d;
        if (!this._events[u]) return this;
        if (!a) return h(this, u), this;
        var l = this._events[u];
        if (l.fn) l.fn === a && (!c || l.once) && (!o || l.context === o) && h(this, u);
        else {
            for (var v = 0, g = [], y = l.length; v < y; v++)(l[v].fn !== a || c && !l[v].once || o && l[v].context !== o) && g.push(l[v]);
            g.length ? this._events[u] = g.length === 1 ? g[0] : g : h(this, u)
        }
        return this
    }, f.prototype.removeAllListeners = function(d) {
        var a;
        return d ? (a = n ? n + d : d, this._events[a] && h(this, a)) : (this._events = new r, this._eventsCount = 0), this
    }, f.prototype.off = f.prototype.removeListener, f.prototype.addListener = f.prototype.on, f.prefixed = n, f.EventEmitter = f, e.exports = f
})(Jn);
var gi = Jn.exports,
    Ct = {
        exports: {}
    },
    vi = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    yi = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    mi = function(t) {
        var n = t,
            r = t.indexOf("["),
            i = t.indexOf("]");
        r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
        for (var s = vi.exec(t || ""), h = {}, f = 14; f--;) h[yi[f]] = s[f] || "";
        return r != -1 && i != -1 && (h.source = n, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = !0), h
    },
    wt = {
        exports: {}
    },
    ft, on;

function bi() {
    if (on) return ft;
    on = 1;
    var e = 1e3,
        t = e * 60,
        n = t * 60,
        r = n * 24,
        i = r * 7,
        s = r * 365.25;
    ft = function(a, o) {
        o = o || {};
        var c = typeof a;
        if (c === "string" && a.length > 0) return h(a);
        if (c === "number" && isFinite(a)) return o.long ? p(a) : f(a);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a))
    };

    function h(a) {
        if (a = String(a), !(a.length > 100)) {
            var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(a);
            if (o) {
                var c = parseFloat(o[1]),
                    u = (o[2] || "ms").toLowerCase();
                switch (u) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return c * s;
                    case "weeks":
                    case "week":
                    case "w":
                        return c * i;
                    case "days":
                    case "day":
                    case "d":
                        return c * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return c * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return c * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return c * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return c;
                    default:
                        return
                }
            }
        }
    }

    function f(a) {
        var o = Math.abs(a);
        return o >= r ? Math.round(a / r) + "d" : o >= n ? Math.round(a / n) + "h" : o >= t ? Math.round(a / t) + "m" : o >= e ? Math.round(a / e) + "s" : a + "ms"
    }

    function p(a) {
        var o = Math.abs(a);
        return o >= r ? d(a, o, r, "day") : o >= n ? d(a, o, n, "hour") : o >= t ? d(a, o, t, "minute") : o >= e ? d(a, o, e, "second") : a + " ms"
    }

    function d(a, o, c, u) {
        var l = o >= c * 1.5;
        return Math.round(a / c) + " " + u + (l ? "s" : "")
    }
    return ft
}

function Ci(e) {
    n.debug = n, n.default = n, n.coerce = d, n.disable = h, n.enable = s, n.enabled = f, n.humanize = bi(), Object.keys(e).forEach(a => {
        n[a] = e[a]
    }), n.instances = [], n.names = [], n.skips = [], n.formatters = {};

    function t(a) {
        let o = 0;
        for (let c = 0; c < a.length; c++) o = (o << 5) - o + a.charCodeAt(c), o |= 0;
        return n.colors[Math.abs(o) % n.colors.length]
    }
    n.selectColor = t;

    function n(a) {
        let o;

        function c(...u) {
            if (!c.enabled) return;
            const l = c,
                v = Number(new Date),
                g = v - (o || v);
            l.diff = g, l.prev = o, l.curr = v, o = v, u[0] = n.coerce(u[0]), typeof u[0] != "string" && u.unshift("%O");
            let y = 0;
            u[0] = u[0].replace(/%([a-zA-Z%])/g, (w, m) => {
                if (w === "%%") return w;
                y++;
                const b = n.formatters[m];
                if (typeof b == "function") {
                    const _ = u[y];
                    w = b.call(l, _), u.splice(y, 1), y--
                }
                return w
            }), n.formatArgs.call(l, u), (l.log || n.log).apply(l, u)
        }
        return c.namespace = a, c.enabled = n.enabled(a), c.useColors = n.useColors(), c.color = t(a), c.destroy = r, c.extend = i, typeof n.init == "function" && n.init(c), n.instances.push(c), c
    }

    function r() {
        const a = n.instances.indexOf(this);
        return a !== -1 ? (n.instances.splice(a, 1), !0) : !1
    }

    function i(a, o) {
        const c = n(this.namespace + (typeof o > "u" ? ":" : o) + a);
        return c.log = this.log, c
    }

    function s(a) {
        n.save(a), n.names = [], n.skips = [];
        let o;
        const c = (typeof a == "string" ? a : "").split(/[\s,]+/),
            u = c.length;
        for (o = 0; o < u; o++) c[o] && (a = c[o].replace(/\*/g, ".*?"), a[0] === "-" ? n.skips.push(new RegExp("^" + a.substr(1) + "$")) : n.names.push(new RegExp("^" + a + "$")));
        for (o = 0; o < n.instances.length; o++) {
            const l = n.instances[o];
            l.enabled = n.enabled(l.namespace)
        }
    }

    function h() {
        const a = [...n.names.map(p), ...n.skips.map(p).map(o => "-" + o)].join(",");
        return n.enable(""), a
    }

    function f(a) {
        if (a[a.length - 1] === "*") return !0;
        let o, c;
        for (o = 0, c = n.skips.length; o < c; o++)
            if (n.skips[o].test(a)) return !1;
        for (o = 0, c = n.names.length; o < c; o++)
            if (n.names[o].test(a)) return !0;
        return !1
    }

    function p(a) {
        return a.toString().substring(2, a.toString().length - 2).replace(/\.\*\?$/, "*")
    }

    function d(a) {
        return a instanceof Error ? a.stack || a.message : a
    }
    return n.enable(n.load()), n
}
var wi = Ci;
(function(e, t) {
    t.log = i, t.formatArgs = r, t.save = s, t.load = h, t.useColors = n, t.storage = f(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function n() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }

    function r(d) {
        if (d[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + d[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const a = "color: " + this.color;
        d.splice(1, 0, a, "color: inherit");
        let o = 0,
            c = 0;
        d[0].replace(/%[a-zA-Z%]/g, u => {
            u !== "%%" && (o++, u === "%c" && (c = o))
        }), d.splice(c, 0, a)
    }

    function i(...d) {
        return typeof console == "object" && console.log && console.log(...d)
    }

    function s(d) {
        try {
            d ? t.storage.setItem("debug", d) : t.storage.removeItem("debug")
        } catch {}
    }

    function h() {
        let d;
        try {
            d = t.storage.getItem("debug")
        } catch {}
        return !d && typeof process < "u" && "env" in process && (d = {}.DEBUG), d
    }

    function f() {
        try {
            return localStorage
        } catch {}
    }
    e.exports = wi(t);
    const {
        formatters: p
    } = e.exports;
    p.j = function(d) {
        try {
            return JSON.stringify(d)
        } catch (a) {
            return "[UnexpectedJSONParseError]: " + a.message
        }
    }
})(wt, wt.exports);
var et = wt.exports,
    _i = mi,
    sn = et("socket.io-client:url"),
    ki = Fi;

function Fi(e, t) {
    var n = e;
    t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (sn("protocol-less url %s", e), typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), sn("parse %s", e), n = _i(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
    var r = n.host.indexOf(":") !== -1,
        i = r ? "[" + n.host + "]" : n.host;
    return n.id = n.protocol + "://" + i + ":" + n.port, n.href = n.protocol + "://" + i + (t && t.port === n.port ? "" : ":" + n.port), n
}
var tt = {},
    _t = {
        exports: {}
    },
    kt = {
        exports: {}
    },
    Se = 1e3,
    Ee = Se * 60,
    Be = Ee * 60,
    Oe = Be * 24,
    Ai = Oe * 365.25,
    xi = function(e, t) {
        t = t || {};
        var n = typeof e;
        if (n === "string" && e.length > 0) return Si(e);
        if (n === "number" && isNaN(e) === !1) return t.long ? Bi(e) : Ei(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    };

function Si(e) {
    if (e = String(e), !(e.length > 100)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (t) {
            var n = parseFloat(t[1]),
                r = (t[2] || "ms").toLowerCase();
            switch (r) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return n * Ai;
                case "days":
                case "day":
                case "d":
                    return n * Oe;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return n * Be;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return n * Ee;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return n * Se;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return n;
                default:
                    return
            }
        }
    }
}

function Ei(e) {
    return e >= Oe ? Math.round(e / Oe) + "d" : e >= Be ? Math.round(e / Be) + "h" : e >= Ee ? Math.round(e / Ee) + "m" : e >= Se ? Math.round(e / Se) + "s" : e + "ms"
}

function Bi(e) {
    return De(e, Oe, "day") || De(e, Be, "hour") || De(e, Ee, "minute") || De(e, Se, "second") || e + " ms"
}

function De(e, t, n) {
    if (!(e < t)) return e < t * 1.5 ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
}(function(e, t) {
    t = e.exports = r.debug = r.default = r, t.coerce = p, t.disable = h, t.enable = s, t.enabled = f, t.humanize = xi, t.instances = [], t.names = [], t.skips = [], t.formatters = {};

    function n(d) {
        var a = 0,
            o;
        for (o in d) a = (a << 5) - a + d.charCodeAt(o), a |= 0;
        return t.colors[Math.abs(a) % t.colors.length]
    }

    function r(d) {
        var a;

        function o() {
            if (o.enabled) {
                var c = o,
                    u = +new Date,
                    l = u - (a || u);
                c.diff = l, c.prev = a, c.curr = u, a = u;
                for (var v = new Array(arguments.length), g = 0; g < v.length; g++) v[g] = arguments[g];
                v[0] = t.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
                var y = 0;
                v[0] = v[0].replace(/%([a-zA-Z%])/g, function(w, m) {
                    if (w === "%%") return w;
                    y++;
                    var b = t.formatters[m];
                    if (typeof b == "function") {
                        var _ = v[y];
                        w = b.call(c, _), v.splice(y, 1), y--
                    }
                    return w
                }), t.formatArgs.call(c, v);
                var C = o.log || t.log || console.log.bind(console);
                C.apply(c, v)
            }
        }
        return o.namespace = d, o.enabled = t.enabled(d), o.useColors = t.useColors(), o.color = n(d), o.destroy = i, typeof t.init == "function" && t.init(o), t.instances.push(o), o
    }

    function i() {
        var d = t.instances.indexOf(this);
        return d !== -1 ? (t.instances.splice(d, 1), !0) : !1
    }

    function s(d) {
        t.save(d), t.names = [], t.skips = [];
        var a, o = (typeof d == "string" ? d : "").split(/[\s,]+/),
            c = o.length;
        for (a = 0; a < c; a++) o[a] && (d = o[a].replace(/\*/g, ".*?"), d[0] === "-" ? t.skips.push(new RegExp("^" + d.substr(1) + "$")) : t.names.push(new RegExp("^" + d + "$")));
        for (a = 0; a < t.instances.length; a++) {
            var u = t.instances[a];
            u.enabled = t.enabled(u.namespace)
        }
    }

    function h() {
        t.enable("")
    }

    function f(d) {
        if (d[d.length - 1] === "*") return !0;
        var a, o;
        for (a = 0, o = t.skips.length; a < o; a++)
            if (t.skips[a].test(d)) return !1;
        for (a = 0, o = t.names.length; a < o; a++)
            if (t.names[a].test(d)) return !0;
        return !1
    }

    function p(d) {
        return d instanceof Error ? d.stack || d.message : d
    }
})(kt, kt.exports);
var Oi = kt.exports;
(function(e, t) {
    t = e.exports = Oi, t.log = i, t.formatArgs = r, t.save = s, t.load = h, t.useColors = n, t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : f(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function n() {
        return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    t.formatters.j = function(p) {
        try {
            return JSON.stringify(p)
        } catch (d) {
            return "[UnexpectedJSONParseError]: " + d.message
        }
    };

    function r(p) {
        var d = this.useColors;
        if (p[0] = (d ? "%c" : "") + this.namespace + (d ? " %c" : " ") + p[0] + (d ? "%c " : " ") + "+" + t.humanize(this.diff), !!d) {
            var a = "color: " + this.color;
            p.splice(1, 0, a, "color: inherit");
            var o = 0,
                c = 0;
            p[0].replace(/%[a-zA-Z%]/g, function(u) {
                u !== "%%" && (o++, u === "%c" && (c = o))
            }), p.splice(c, 0, a)
        }
    }

    function i() {
        return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function s(p) {
        try {
            p == null ? t.storage.removeItem("debug") : t.storage.debug = p
        } catch {}
    }

    function h() {
        var p;
        try {
            p = t.storage.debug
        } catch {}
        return !p && typeof process < "u" && "env" in process && (p = {}.DEBUG), p
    }
    t.enable(h());

    function f() {
        try {
            return window.localStorage
        } catch {}
    }
})(_t, _t.exports);
var $e = _t.exports,
    Gn = {
        exports: {}
    };
(function(e) {
    e.exports = t;

    function t(r) {
        if (r) return n(r)
    }

    function n(r) {
        for (var i in t.prototype) r[i] = t.prototype[i];
        return r
    }
    t.prototype.on = t.prototype.addEventListener = function(r, i) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(i), this
    }, t.prototype.once = function(r, i) {
        function s() {
            this.off(r, s), i.apply(this, arguments)
        }
        return s.fn = i, this.on(r, s), this
    }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(r, i) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
        var s = this._callbacks["$" + r];
        if (!s) return this;
        if (arguments.length == 1) return delete this._callbacks["$" + r], this;
        for (var h, f = 0; f < s.length; f++)
            if (h = s[f], h === i || h.fn === i) {
                s.splice(f, 1);
                break
            }
        return s.length === 0 && delete this._callbacks["$" + r], this
    }, t.prototype.emit = function(r) {
        this._callbacks = this._callbacks || {};
        for (var i = new Array(arguments.length - 1), s = this._callbacks["$" + r], h = 1; h < arguments.length; h++) i[h - 1] = arguments[h];
        if (s) {
            s = s.slice(0);
            for (var h = 0, f = s.length; h < f; ++h) s[h].apply(this, i)
        }
        return this
    }, t.prototype.listeners = function(r) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || []
    }, t.prototype.hasListeners = function(r) {
        return !!this.listeners(r).length
    }
})(Gn);
var nt = Gn.exports,
    rt = {},
    Ri = {}.toString,
    Dt = Array.isArray || function(e) {
        return Ri.call(e) == "[object Array]"
    },
    Kn = Pi,
    $i = typeof Buffer == "function" && typeof Buffer.isBuffer == "function",
    Mi = typeof ArrayBuffer == "function",
    Ti = function(e) {
        return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
    };

function Pi(e) {
    return $i && Buffer.isBuffer(e) || Mi && (e instanceof ArrayBuffer || Ti(e))
}
var It = Dt,
    Yn = Kn,
    Zn = Object.prototype.toString,
    Ni = typeof Blob == "function" || typeof Blob < "u" && Zn.call(Blob) === "[object BlobConstructor]",
    Di = typeof File == "function" || typeof File < "u" && Zn.call(File) === "[object FileConstructor]";
rt.deconstructPacket = function(e) {
    var t = [],
        n = e.data,
        r = e;
    return r.data = Ft(n, t), r.attachments = t.length, {
        packet: r,
        buffers: t
    }
};

function Ft(e, t) {
    if (!e) return e;
    if (Yn(e)) {
        var n = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e), n
    } else if (It(e)) {
        for (var r = new Array(e.length), i = 0; i < e.length; i++) r[i] = Ft(e[i], t);
        return r
    } else if (typeof e == "object" && !(e instanceof Date)) {
        var r = {};
        for (var s in e) r[s] = Ft(e[s], t);
        return r
    }
    return e
}
rt.reconstructPacket = function(e, t) {
    return e.data = At(e.data, t), e.attachments = void 0, e
};

function At(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        var n = typeof e.num == "number" && e.num >= 0 && e.num < t.length;
        if (n) return t[e.num];
        throw new Error("illegal attachments")
    } else if (It(e))
        for (var r = 0; r < e.length; r++) e[r] = At(e[r], t);
    else if (typeof e == "object")
        for (var i in e) e[i] = At(e[i], t);
    return e
}
rt.removeBlobs = function(e, t) {
    function n(s, h, f) {
        if (!s) return s;
        if (Ni && s instanceof Blob || Di && s instanceof File) {
            r++;
            var p = new FileReader;
            p.onload = function() {
                f ? f[h] = this.result : i = this.result, --r || t(i)
            }, p.readAsArrayBuffer(s)
        } else if (It(s))
            for (var d = 0; d < s.length; d++) n(s[d], d, s);
        else if (typeof s == "object" && !Yn(s))
            for (var a in s) n(s[a], a, s)
    }
    var r = 0,
        i = e;
    n(i), r || t(i)
};
(function(e) {
    var t = $e("socket.io-parser"),
        n = nt,
        r = rt,
        i = Dt,
        s = Kn;
    e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = h, e.Decoder = o;

    function h() {}
    var f = e.ERROR + '"encode error"';
    h.prototype.encode = function(g, y) {
        if (t("encoding packet %j", g), e.BINARY_EVENT === g.type || e.BINARY_ACK === g.type) a(g, y);
        else {
            var C = p(g);
            y([C])
        }
    };

    function p(g) {
        var y = "" + g.type;
        if ((e.BINARY_EVENT === g.type || e.BINARY_ACK === g.type) && (y += g.attachments + "-"), g.nsp && g.nsp !== "/" && (y += g.nsp + ","), g.id != null && (y += g.id), g.data != null) {
            var C = d(g.data);
            if (C !== !1) y += C;
            else return f
        }
        return t("encoded %j as %s", g, y), y
    }

    function d(g) {
        try {
            return JSON.stringify(g)
        } catch {
            return !1
        }
    }

    function a(g, y) {
        function C(w) {
            var m = r.deconstructPacket(w),
                b = p(m.packet),
                _ = m.buffers;
            _.unshift(b), y(_)
        }
        r.removeBlobs(g, C)
    }

    function o() {
        this.reconstructor = null
    }
    n(o.prototype), o.prototype.add = function(g) {
        var y;
        if (typeof g == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            y = c(g), e.BINARY_EVENT === y.type || e.BINARY_ACK === y.type ? (this.reconstructor = new l(y), this.reconstructor.reconPack.attachments === 0 && this.emit("decoded", y)) : this.emit("decoded", y)
        } else if (s(g) || g.base64)
            if (this.reconstructor) y = this.reconstructor.takeBinaryData(g), y && (this.reconstructor = null, this.emit("decoded", y));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + g)
    };

    function c(g) {
        var y = 0,
            C = {
                type: Number(g.charAt(0))
            };
        if (e.types[C.type] == null) return v("unknown packet type " + C.type);
        if (e.BINARY_EVENT === C.type || e.BINARY_ACK === C.type) {
            for (var w = y + 1; g.charAt(++y) !== "-" && y != g.length;);
            var m = g.substring(w, y);
            if (m != Number(m) || g.charAt(y) !== "-") throw new Error("Illegal attachments");
            C.attachments = Number(m)
        }
        if (g.charAt(y + 1) === "/") {
            for (var w = y + 1; ++y;) {
                var b = g.charAt(y);
                if (b === "," || y === g.length) break
            }
            C.nsp = g.substring(w, y)
        } else C.nsp = "/";
        var _ = g.charAt(y + 1);
        if (_ !== "" && Number(_) == _) {
            for (var w = y + 1; ++y;) {
                var b = g.charAt(y);
                if (b == null || Number(b) != b) {
                    --y;
                    break
                }
                if (y === g.length) break
            }
            C.id = Number(g.substring(w, y + 1))
        }
        if (g.charAt(++y)) {
            var k = u(g.substr(y)),
                F = k !== !1 && (C.type === e.ERROR || i(k));
            if (F) C.data = k;
            else return v("invalid payload")
        }
        return t("decoded %s as %j", g, C), C
    }

    function u(g) {
        try {
            return JSON.parse(g)
        } catch {
            return !1
        }
    }
    o.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction()
    };

    function l(g) {
        this.reconPack = g, this.buffers = []
    }
    l.prototype.takeBinaryData = function(g) {
        if (this.buffers.push(g), this.buffers.length === this.reconPack.attachments) {
            var y = r.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), y
        }
        return null
    }, l.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = []
    };

    function v(g) {
        return {
            type: e.ERROR,
            data: "parser error: " + g
        }
    }
})(tt);
var qt = {
        exports: {}
    },
    it = {},
    xt = {
        exports: {}
    };
try {
    xt.exports = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {
    xt.exports = !1
}
var Ii = xt.exports,
    jt = function() {
        return typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
    }(),
    qi = Ii,
    ji = jt,
    Lt = function(e) {
        var t = e.xdomain,
            n = e.xscheme,
            r = e.enablesXDR;
        try {
            if (typeof XMLHttpRequest < "u" && (!t || qi)) return new XMLHttpRequest
        } catch {}
        try {
            if (typeof XDomainRequest < "u" && !n && r) return new XDomainRequest
        } catch {}
        if (!t) try {
            return new ji[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
    },
    Ut = {
        exports: {}
    },
    ue = {},
    Li = Object.keys || function(t) {
        var n = [],
            r = Object.prototype.hasOwnProperty;
        for (var i in t) r.call(t, i) && n.push(i);
        return n
    },
    Ui = Dt,
    Qn = Object.prototype.toString,
    Hi = typeof Blob == "function" || typeof Blob < "u" && Qn.call(Blob) === "[object BlobConstructor]",
    zi = typeof File == "function" || typeof File < "u" && Qn.call(File) === "[object FileConstructor]",
    er = He;

function He(e) {
    if (!e || typeof e != "object") return !1;
    if (Ui(e)) {
        for (var t = 0, n = e.length; t < n; t++)
            if (He(e[t])) return !0;
        return !1
    }
    if (typeof Buffer == "function" && Buffer.isBuffer && Buffer.isBuffer(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || Hi && e instanceof Blob || zi && e instanceof File) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1) return He(e.toJSON(), !0);
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r) && He(e[r])) return !0;
    return !1
}
var Vi = function(e, t, n) {
        var r = e.byteLength;
        if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
        if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || r === 0) return new ArrayBuffer(0);
        for (var i = new Uint8Array(e), s = new Uint8Array(n - t), h = t, f = 0; h < n; h++, f++) s[f] = i[h];
        return s.buffer
    },
    Wi = Xi;

function Xi(e, t, n) {
    var r = !1;
    return n = n || Ji, i.count = e, e === 0 ? t() : i;

    function i(s, h) {
        if (i.count <= 0) throw new Error("after called too many times");
        --i.count, s ? (r = !0, t(s), t = n) : i.count === 0 && !r && t(null, h)
    }
}

function Ji() {} /*! https://mths.be/utf8js v2.1.2 by @mathias */
var Q = String.fromCharCode;

function tr(e) {
    for (var t = [], n = 0, r = e.length, i, s; n < r;) i = e.charCodeAt(n++), i >= 55296 && i <= 56319 && n < r ? (s = e.charCodeAt(n++), (s & 64512) == 56320 ? t.push(((i & 1023) << 10) + (s & 1023) + 65536) : (t.push(i), n--)) : t.push(i);
    return t
}

function Gi(e) {
    for (var t = e.length, n = -1, r, i = ""; ++n < t;) r = e[n], r > 65535 && (r -= 65536, i += Q(r >>> 10 & 1023 | 55296), r = 56320 | r & 1023), i += Q(r);
    return i
}

function nr(e, t) {
    if (e >= 55296 && e <= 57343) {
        if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
        return !1
    }
    return !0
}

function lt(e, t) {
    return Q(e >> t & 63 | 128)
}

function Ki(e, t) {
    if (!(e & 4294967168)) return Q(e);
    var n = "";
    return e & 4294965248 ? e & 4294901760 ? e & 4292870144 || (n = Q(e >> 18 & 7 | 240), n += lt(e, 12), n += lt(e, 6)) : (nr(e, t) || (e = 65533), n = Q(e >> 12 & 15 | 224), n += lt(e, 6)) : n = Q(e >> 6 & 31 | 192), n += Q(e & 63 | 128), n
}

function Yi(e, t) {
    t = t || {};
    for (var n = t.strict !== !1, r = tr(e), i = r.length, s = -1, h, f = ""; ++s < i;) h = r[s], f += Ki(h, n);
    return f
}

function he() {
    if (ee >= Ge) throw Error("Invalid byte index");
    var e = Je[ee] & 255;
    if (ee++, (e & 192) == 128) return e & 63;
    throw Error("Invalid continuation byte")
}

function Zi(e) {
    var t, n, r, i, s;
    if (ee > Ge) throw Error("Invalid byte index");
    if (ee == Ge) return !1;
    if (t = Je[ee] & 255, ee++, !(t & 128)) return t;
    if ((t & 224) == 192) {
        if (n = he(), s = (t & 31) << 6 | n, s >= 128) return s;
        throw Error("Invalid continuation byte")
    }
    if ((t & 240) == 224) {
        if (n = he(), r = he(), s = (t & 15) << 12 | n << 6 | r, s >= 2048) return nr(s, e) ? s : 65533;
        throw Error("Invalid continuation byte")
    }
    if ((t & 248) == 240 && (n = he(), r = he(), i = he(), s = (t & 7) << 18 | n << 12 | r << 6 | i, s >= 65536 && s <= 1114111)) return s;
    throw Error("Invalid UTF-8 detected")
}
var Je, Ge, ee;

function Qi(e, t) {
    t = t || {};
    var n = t.strict !== !1;
    Je = tr(e), Ge = Je.length, ee = 0;
    for (var r = [], i;
        (i = Zi(n)) !== !1;) r.push(i);
    return Gi(r)
}
var eo = {
        version: "2.1.2",
        encode: Yi,
        decode: Qi
    },
    Ie = {},
    an;

function to() {
    return an || (an = 1, function(e) {
        Ie.encode = function(t) {
            var n = new Uint8Array(t),
                r, i = n.length,
                s = "";
            for (r = 0; r < i; r += 3) s += e[n[r] >> 2], s += e[(n[r] & 3) << 4 | n[r + 1] >> 4], s += e[(n[r + 1] & 15) << 2 | n[r + 2] >> 6], s += e[n[r + 2] & 63];
            return i % 3 === 2 ? s = s.substring(0, s.length - 1) + "=" : i % 3 === 1 && (s = s.substring(0, s.length - 2) + "=="), s
        }, Ie.decode = function(t) {
            var n = t.length * .75,
                r = t.length,
                i, s = 0,
                h, f, p, d;
            t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
            var a = new ArrayBuffer(n),
                o = new Uint8Array(a);
            for (i = 0; i < r; i += 4) h = e.indexOf(t[i]), f = e.indexOf(t[i + 1]), p = e.indexOf(t[i + 2]), d = e.indexOf(t[i + 3]), o[s++] = h << 2 | f >> 4, o[s++] = (f & 15) << 4 | p >> 2, o[s++] = (p & 3) << 6 | d & 63;
            return a
        }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")), Ie
}
var ht, cn;

function no() {
    if (cn) return ht;
    cn = 1;
    var e = typeof e < "u" ? e : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : !1,
        t = function() {
            try {
                var f = new Blob(["hi"]);
                return f.size === 2
            } catch {
                return !1
            }
        }(),
        n = t && function() {
            try {
                var f = new Blob([new Uint8Array([1, 2])]);
                return f.size === 2
            } catch {
                return !1
            }
        }(),
        r = e && e.prototype.append && e.prototype.getBlob;

    function i(f) {
        return f.map(function(p) {
            if (p.buffer instanceof ArrayBuffer) {
                var d = p.buffer;
                if (p.byteLength !== d.byteLength) {
                    var a = new Uint8Array(p.byteLength);
                    a.set(new Uint8Array(d, p.byteOffset, p.byteLength)), d = a.buffer
                }
                return d
            }
            return p
        })
    }

    function s(f, p) {
        p = p || {};
        var d = new e;
        return i(f).forEach(function(a) {
            d.append(a)
        }), p.type ? d.getBlob(p.type) : d.getBlob()
    }

    function h(f, p) {
        return new Blob(i(f), p || {})
    }
    return typeof Blob < "u" && (s.prototype = Blob.prototype, h.prototype = Blob.prototype), ht = function() {
        return t ? n ? Blob : h : r ? s : void 0
    }(), ht
}(function(e) {
    var t = Li,
        n = er,
        r = Vi,
        i = Wi,
        s = eo,
        h;
    typeof ArrayBuffer < "u" && (h = to());
    var f = typeof navigator < "u" && /Android/i.test(navigator.userAgent),
        p = typeof navigator < "u" && /PhantomJS/i.test(navigator.userAgent),
        d = f || p;
    e.protocol = 3;
    var a = e.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        o = t(a),
        c = {
            type: "error",
            data: "parser error"
        },
        u = no();
    e.encodePacket = function(m, b, _, k) {
        typeof b == "function" && (k = b, b = !1), typeof _ == "function" && (k = _, _ = null);
        var F = m.data === void 0 ? void 0 : m.data.buffer || m.data;
        if (typeof ArrayBuffer < "u" && F instanceof ArrayBuffer) return v(m, b, k);
        if (typeof u < "u" && F instanceof u) return y(m, b, k);
        if (F && F.base64) return l(m, k);
        var A = a[m.type];
        return m.data !== void 0 && (A += _ ? s.encode(String(m.data), {
            strict: !1
        }) : String(m.data)), k("" + A)
    };

    function l(m, b) {
        var _ = "b" + e.packets[m.type] + m.data.data;
        return b(_)
    }

    function v(m, b, _) {
        if (!b) return e.encodeBase64Packet(m, _);
        var k = m.data,
            F = new Uint8Array(k),
            A = new Uint8Array(1 + k.byteLength);
        A[0] = a[m.type];
        for (var x = 0; x < F.length; x++) A[x + 1] = F[x];
        return _(A.buffer)
    }

    function g(m, b, _) {
        if (!b) return e.encodeBase64Packet(m, _);
        var k = new FileReader;
        return k.onload = function() {
            e.encodePacket({
                type: m.type,
                data: k.result
            }, b, !0, _)
        }, k.readAsArrayBuffer(m.data)
    }

    function y(m, b, _) {
        if (!b) return e.encodeBase64Packet(m, _);
        if (d) return g(m, b, _);
        var k = new Uint8Array(1);
        k[0] = a[m.type];
        var F = new u([k.buffer, m.data]);
        return _(F)
    }
    e.encodeBase64Packet = function(m, b) {
        var _ = "b" + e.packets[m.type];
        if (typeof u < "u" && m.data instanceof u) {
            var k = new FileReader;
            return k.onload = function() {
                var S = k.result.split(",")[1];
                b(_ + S)
            }, k.readAsDataURL(m.data)
        }
        var F;
        try {
            F = String.fromCharCode.apply(null, new Uint8Array(m.data))
        } catch {
            for (var A = new Uint8Array(m.data), x = new Array(A.length), B = 0; B < A.length; B++) x[B] = A[B];
            F = String.fromCharCode.apply(null, x)
        }
        return _ += btoa(F), b(_)
    }, e.decodePacket = function(m, b, _) {
        if (m === void 0) return c;
        if (typeof m == "string") {
            if (m.charAt(0) === "b") return e.decodeBase64Packet(m.substr(1), b);
            if (_ && (m = C(m), m === !1)) return c;
            var F = m.charAt(0);
            return Number(F) != F || !o[F] ? c : m.length > 1 ? {
                type: o[F],
                data: m.substring(1)
            } : {
                type: o[F]
            }
        }
        var k = new Uint8Array(m),
            F = k[0],
            A = r(m, 1);
        return u && b === "blob" && (A = new u([A])), {
            type: o[F],
            data: A
        }
    };

    function C(m) {
        try {
            m = s.decode(m, {
                strict: !1
            })
        } catch {
            return !1
        }
        return m
    }
    e.decodeBase64Packet = function(m, b) {
        var _ = o[m.charAt(0)];
        if (!h) return {
            type: _,
            data: {
                base64: !0,
                data: m.substr(1)
            }
        };
        var k = h.decode(m.substr(1));
        return b === "blob" && u && (k = new u([k])), {
            type: _,
            data: k
        }
    }, e.encodePayload = function(m, b, _) {
        typeof b == "function" && (_ = b, b = null);
        var k = n(m);
        if (b && k) return u && !d ? e.encodePayloadAsBlob(m, _) : e.encodePayloadAsArrayBuffer(m, _);
        if (!m.length) return _("0:");

        function F(x) {
            return x.length + ":" + x
        }

        function A(x, B) {
            e.encodePacket(x, k ? b : !1, !1, function(S) {
                B(null, F(S))
            })
        }
        w(m, A, function(x, B) {
            return _(B.join(""))
        })
    };

    function w(m, b, _) {
        for (var k = new Array(m.length), F = i(m.length, _), A = function(B, S, $) {
                b(S, function(M, T) {
                    k[B] = T, $(M, k)
                })
            }, x = 0; x < m.length; x++) A(x, m[x], F)
    }
    e.decodePayload = function(m, b, _) {
        if (typeof m != "string") return e.decodePayloadAsBinary(m, b, _);
        typeof b == "function" && (_ = b, b = null);
        var k;
        if (m === "") return _(c, 0, 1);
        for (var F = "", A, x, B = 0, S = m.length; B < S; B++) {
            var $ = m.charAt(B);
            if ($ !== ":") {
                F += $;
                continue
            }
            if (F === "" || F != (A = Number(F)) || (x = m.substr(B + 1, A), F != x.length)) return _(c, 0, 1);
            if (x.length) {
                if (k = e.decodePacket(x, b, !1), c.type === k.type && c.data === k.data) return _(c, 0, 1);
                var M = _(k, B + A, S);
                if (M === !1) return
            }
            B += A, F = ""
        }
        if (F !== "") return _(c, 0, 1)
    }, e.encodePayloadAsArrayBuffer = function(m, b) {
        if (!m.length) return b(new ArrayBuffer(0));

        function _(k, F) {
            e.encodePacket(k, !0, !0, function(A) {
                return F(null, A)
            })
        }
        w(m, _, function(k, F) {
            var A = F.reduce(function(S, $) {
                    var M;
                    return typeof $ == "string" ? M = $.length : M = $.byteLength, S + M.toString().length + M + 2
                }, 0),
                x = new Uint8Array(A),
                B = 0;
            return F.forEach(function(S) {
                var $ = typeof S == "string",
                    M = S;
                if ($) {
                    for (var ie = new Uint8Array(S.length), T = 0; T < S.length; T++) ie[T] = S.charCodeAt(T);
                    M = ie.buffer
                }
                $ ? x[B++] = 0 : x[B++] = 1;
                for (var re = M.byteLength.toString(), T = 0; T < re.length; T++) x[B++] = parseInt(re[T]);
                x[B++] = 255;
                for (var ie = new Uint8Array(M), T = 0; T < ie.length; T++) x[B++] = ie[T]
            }), b(x.buffer)
        })
    }, e.encodePayloadAsBlob = function(m, b) {
        function _(k, F) {
            e.encodePacket(k, !0, !0, function(A) {
                var x = new Uint8Array(1);
                if (x[0] = 1, typeof A == "string") {
                    for (var B = new Uint8Array(A.length), S = 0; S < A.length; S++) B[S] = A.charCodeAt(S);
                    A = B.buffer, x[0] = 0
                }
                for (var $ = A instanceof ArrayBuffer ? A.byteLength : A.size, M = $.toString(), T = new Uint8Array(M.length + 1), S = 0; S < M.length; S++) T[S] = parseInt(M[S]);
                if (T[M.length] = 255, u) {
                    var re = new u([x.buffer, T.buffer, A]);
                    F(null, re)
                }
            })
        }
        w(m, _, function(k, F) {
            return b(new u(F))
        })
    }, e.decodePayloadAsBinary = function(m, b, _) {
        typeof b == "function" && (_ = b, b = null);
        for (var k = m, F = []; k.byteLength > 0;) {
            for (var A = new Uint8Array(k), x = A[0] === 0, B = "", S = 1; A[S] !== 255; S++) {
                if (B.length > 310) return _(c, 0, 1);
                B += A[S]
            }
            k = r(k, 2 + B.length), B = parseInt(B);
            var $ = r(k, 0, B);
            if (x) try {
                $ = String.fromCharCode.apply(null, new Uint8Array($))
            } catch {
                var M = new Uint8Array($);
                $ = "";
                for (var S = 0; S < M.length; S++) $ += String.fromCharCode(M[S])
            }
            F.push($), k = r(k, B)
        }
        var T = F.length;
        F.forEach(function(re, ie) {
            _(e.decodePacket(re, b, !0), ie, T)
        })
    }
})(ue);
var dt, un;

function Ht() {
    if (un) return dt;
    un = 1;
    var e = ue,
        t = nt;
    dt = n;

    function n(r) {
        this.path = r.path, this.hostname = r.hostname, this.port = r.port, this.secure = r.secure, this.query = r.query, this.timestampParam = r.timestampParam, this.timestampRequests = r.timestampRequests, this.readyState = "", this.agent = r.agent || !1, this.socket = r.socket, this.enablesXDR = r.enablesXDR, this.withCredentials = r.withCredentials, this.pfx = r.pfx, this.key = r.key, this.passphrase = r.passphrase, this.cert = r.cert, this.ca = r.ca, this.ciphers = r.ciphers, this.rejectUnauthorized = r.rejectUnauthorized, this.forceNode = r.forceNode, this.isReactNative = r.isReactNative, this.extraHeaders = r.extraHeaders, this.localAddress = r.localAddress
    }
    return t(n.prototype), n.prototype.onError = function(r, i) {
        var s = new Error(r);
        return s.type = "TransportError", s.description = i, this.emit("error", s), this
    }, n.prototype.open = function() {
        return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this
    }, n.prototype.close = function() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }, n.prototype.send = function(r) {
        if (this.readyState === "open") this.write(r);
        else throw new Error("Transport not open")
    }, n.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, n.prototype.onData = function(r) {
        var i = e.decodePacket(r, this.socket.binaryType);
        this.onPacket(i)
    }, n.prototype.onPacket = function(r) {
        this.emit("packet", r)
    }, n.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }, dt
}
var Me = {};
Me.encode = function(e) {
    var t = "";
    for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
};
Me.decode = function(e) {
    for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
        var s = n[r].split("=");
        t[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
    }
    return t
};
var ot = function(e, t) {
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    },
    rr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
    Ke = 64,
    ir = {},
    fn = 0,
    te = 0,
    ln;

function St(e) {
    var t = "";
    do t = rr[e % Ke] + t, e = Math.floor(e / Ke); while (e > 0);
    return t
}

function ro(e) {
    var t = 0;
    for (te = 0; te < e.length; te++) t = t * Ke + ir[e.charAt(te)];
    return t
}

function zt() {
    var e = St(+new Date);
    return e !== ln ? (fn = 0, ln = e) : e + "." + St(fn++)
}
for (; te < Ke; te++) ir[rr[te]] = te;
zt.encode = St;
zt.decode = ro;
var or = zt,
    sr = Ht(),
    io = Me,
    ar = ue,
    oo = ot,
    so = or,
    W = $e("engine.io-client:polling"),
    cr = J,
    ao = function() {
        var e = Lt,
            t = new e({
                xdomain: !1
            });
        return t.responseType != null
    }();

function J(e) {
    var t = e && e.forceBase64;
    (!ao || t) && (this.supportsBinary = !1), sr.call(this, e)
}
oo(J, sr);
J.prototype.name = "polling";
J.prototype.doOpen = function() {
    this.poll()
};
J.prototype.pause = function(e) {
    var t = this;
    this.readyState = "pausing";

    function n() {
        W("paused"), t.readyState = "paused", e()
    }
    if (this.polling || !this.writable) {
        var r = 0;
        this.polling && (W("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function() {
            W("pre-pause polling complete"), --r || n()
        })), this.writable || (W("we are currently writing - waiting to pause"), r++, this.once("drain", function() {
            W("pre-pause writing complete"), --r || n()
        }))
    } else n()
};
J.prototype.poll = function() {
    W("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
};
J.prototype.onData = function(e) {
    var t = this;
    W("polling got data %s", e);
    var n = function(r, i, s) {
        if (t.readyState === "opening" && t.onOpen(), r.type === "close") return t.onClose(), !1;
        t.onPacket(r)
    };
    ar.decodePayload(e, this.socket.binaryType, n), this.readyState !== "closed" && (this.polling = !1, this.emit("pollComplete"), this.readyState === "open" ? this.poll() : W('ignoring poll - transport state "%s"', this.readyState))
};
J.prototype.doClose = function() {
    var e = this;

    function t() {
        W("writing close packet"), e.write([{
            type: "close"
        }])
    }
    this.readyState === "open" ? (W("transport open - closing"), t()) : (W("transport not open - deferring close"), this.once("open", t))
};
J.prototype.write = function(e) {
    var t = this;
    this.writable = !1;
    var n = function() {
        t.writable = !0, t.emit("drain")
    };
    ar.encodePayload(e, this.supportsBinary, function(r) {
        t.doWrite(r, n)
    })
};
J.prototype.uri = function() {
    var e = this.query || {},
        t = this.secure ? "https" : "http",
        n = "";
    this.timestampRequests !== !1 && (e[this.timestampParam] = so()), !this.supportsBinary && !e.sid && (e.b64 = 1), e = io.encode(e), this.port && (t === "https" && Number(this.port) !== 443 || t === "http" && Number(this.port) !== 80) && (n = ":" + this.port), e.length && (e = "?" + e);
    var r = this.hostname.indexOf(":") !== -1;
    return t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
};
var co = Lt,
    ur = cr,
    uo = nt,
    fo = ot,
    Et = $e("engine.io-client:polling-xhr"),
    lo = jt;
Ut.exports = we;
Ut.exports.Request = D;

function hn() {}

function we(e) {
    if (ur.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, typeof location < "u") {
        var t = location.protocol === "https:",
            n = location.port;
        n || (n = t ? 443 : 80), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port, this.xs = e.secure !== t
    }
}
fo(we, ur);
we.prototype.supportsBinary = !0;
we.prototype.request = function(e) {
    return e = e || {}, e.uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.withCredentials = this.withCredentials, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new D(e)
};
we.prototype.doWrite = function(e, t) {
    var n = typeof e != "string" && e !== void 0,
        r = this.request({
            method: "POST",
            data: e,
            isBinary: n
        }),
        i = this;
    r.on("success", t), r.on("error", function(s) {
        i.onError("xhr post error", s)
    }), this.sendXhr = r
};
we.prototype.doPoll = function() {
    Et("xhr poll");
    var e = this.request(),
        t = this;
    e.on("data", function(n) {
        t.onData(n)
    }), e.on("error", function(n) {
        t.onError("xhr poll error", n)
    }), this.pollXhr = e
};

function D(e) {
    this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = e.async !== !1, this.data = e.data !== void 0 ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
}
uo(D.prototype);
D.prototype.create = function() {
    var e = {
        agent: this.agent,
        xdomain: this.xd,
        xscheme: this.xs,
        enablesXDR: this.enablesXDR
    };
    e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
    var t = this.xhr = new co(e),
        n = this;
    try {
        Et("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
        try {
            if (this.extraHeaders) {
                t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
                for (var r in this.extraHeaders) this.extraHeaders.hasOwnProperty(r) && t.setRequestHeader(r, this.extraHeaders[r])
            }
        } catch {}
        if (this.method === "POST") try {
            this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
        } catch {}
        try {
            t.setRequestHeader("Accept", "*/*")
        } catch {}
        "withCredentials" in t && (t.withCredentials = this.withCredentials), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
            n.onLoad()
        }, t.onerror = function() {
            n.onError(t.responseText)
        }) : t.onreadystatechange = function() {
            if (t.readyState === 2) try {
                var i = t.getResponseHeader("Content-Type");
                (n.supportsBinary && i === "application/octet-stream" || i === "application/octet-stream; charset=UTF-8") && (t.responseType = "arraybuffer")
            } catch {}
            t.readyState === 4 && (t.status === 200 || t.status === 1223 ? n.onLoad() : setTimeout(function() {
                n.onError(typeof t.status == "number" ? t.status : 0)
            }, 0))
        }, Et("xhr data %s", this.data), t.send(this.data)
    } catch (i) {
        setTimeout(function() {
            n.onError(i)
        }, 0);
        return
    }
    typeof document < "u" && (this.index = D.requestsCount++, D.requests[this.index] = this)
};
D.prototype.onSuccess = function() {
    this.emit("success"), this.cleanup()
};
D.prototype.onData = function(e) {
    this.emit("data", e), this.onSuccess()
};
D.prototype.onError = function(e) {
    this.emit("error", e), this.cleanup(!0)
};
D.prototype.cleanup = function(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = hn : this.xhr.onreadystatechange = hn, e) try {
            this.xhr.abort()
        } catch {}
        typeof document < "u" && delete D.requests[this.index], this.xhr = null
    }
};
D.prototype.onLoad = function() {
    var e;
    try {
        var t;
        try {
            t = this.xhr.getResponseHeader("Content-Type")
        } catch {}
        t === "application/octet-stream" || t === "application/octet-stream; charset=UTF-8" ? e = this.xhr.response || this.xhr.responseText : e = this.xhr.responseText
    } catch (n) {
        this.onError(n)
    }
    e != null && this.onData(e)
};
D.prototype.hasXDR = function() {
    return typeof XDomainRequest < "u" && !this.xs && this.enablesXDR
};
D.prototype.abort = function() {
    this.cleanup()
};
D.requestsCount = 0;
D.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", dn);
    else if (typeof addEventListener == "function") {
        var ho = "onpagehide" in lo ? "pagehide" : "unload";
        addEventListener(ho, dn, !1)
    }
}

function dn() {
    for (var e in D.requests) D.requests.hasOwnProperty(e) && D.requests[e].abort()
}
var po = Ut.exports,
    Vt = cr,
    go = ot,
    pn = jt,
    vo = _e,
    yo = /\n/g,
    mo = /\\n/g,
    qe;

function bo() {}

function _e(e) {
    Vt.call(this, e), this.query = this.query || {}, qe || (qe = pn.___eio = pn.___eio || []), this.index = qe.length;
    var t = this;
    qe.push(function(n) {
        t.onData(n)
    }), this.query.j = this.index, typeof addEventListener == "function" && addEventListener("beforeunload", function() {
        t.script && (t.script.onerror = bo)
    }, !1)
}
go(_e, Vt);
_e.prototype.supportsBinary = !1;
_e.prototype.doClose = function() {
    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), Vt.prototype.doClose.call(this)
};
_e.prototype.doPoll = function() {
    var e = this,
        t = document.createElement("script");
    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(i) {
        e.onError("jsonp poll error", i)
    };
    var n = document.getElementsByTagName("script")[0];
    n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t;
    var r = typeof navigator < "u" && /gecko/i.test(navigator.userAgent);
    r && setTimeout(function() {
        var i = document.createElement("iframe");
        document.body.appendChild(i), document.body.removeChild(i)
    }, 100)
};
_e.prototype.doWrite = function(e, t) {
    var n = this;
    if (!this.form) {
        var r = document.createElement("form"),
            i = document.createElement("textarea"),
            s = this.iframeId = "eio_iframe_" + this.index,
            h;
        r.className = "socketio", r.style.position = "absolute", r.style.top = "-1000px", r.style.left = "-1000px", r.target = s, r.method = "POST", r.setAttribute("accept-charset", "utf-8"), i.name = "d", r.appendChild(i), document.body.appendChild(r), this.form = r, this.area = i
    }
    this.form.action = this.uri();

    function f() {
        p(), t()
    }

    function p() {
        if (n.iframe) try {
            n.form.removeChild(n.iframe)
        } catch (a) {
            n.onError("jsonp polling iframe removal error", a)
        }
        try {
            var d = '<iframe src="javascript:0" name="' + n.iframeId + '">';
            h = document.createElement(d)
        } catch {
            h = document.createElement("iframe"), h.name = n.iframeId, h.src = "javascript:0"
        }
        h.id = n.iframeId, n.form.appendChild(h), n.iframe = h
    }
    p(), e = e.replace(mo, `\\
`), this.area.value = e.replace(yo, "\\n");
    try {
        this.form.submit()
    } catch {}
    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
        n.iframe.readyState === "complete" && f()
    } : this.iframe.onload = f
};
const Co = {},
    wo = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Co
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    fr = Dn(wo);
var Wt = Ht(),
    _o = ue,
    ko = Me,
    Fo = ot,
    Ao = or,
    xo = $e("engine.io-client:websocket"),
    Ye, Xt;
typeof WebSocket < "u" ? Ye = WebSocket : typeof self < "u" && (Ye = self.WebSocket || self.MozWebSocket);
if (typeof window > "u") try {
    Xt = fr
} catch {}
var ye = Ye || Xt,
    So = z;

function z(e) {
    var t = e && e.forceBase64;
    t && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = Ye && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (ye = Xt), Wt.call(this, e)
}
Fo(z, Wt);
z.prototype.name = "websocket";
z.prototype.supportsBinary = !0;
z.prototype.doOpen = function() {
    if (this.check()) {
        var e = this.uri(),
            t = this.protocols,
            n = {};
        this.isReactNative || (n.agent = this.agent, n.perMessageDeflate = this.perMessageDeflate, n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
        try {
            this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new ye(e, t) : new ye(e) : new ye(e, t, n)
        } catch (r) {
            return this.emit("error", r)
        }
        this.ws.binaryType === void 0 && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
    }
};
z.prototype.addEventListeners = function() {
    var e = this;
    this.ws.onopen = function() {
        e.onOpen()
    }, this.ws.onclose = function() {
        e.onClose()
    }, this.ws.onmessage = function(t) {
        e.onData(t.data)
    }, this.ws.onerror = function(t) {
        e.onError("websocket error", t)
    }
};
z.prototype.write = function(e) {
    var t = this;
    this.writable = !1;
    for (var n = e.length, r = 0, i = n; r < i; r++)(function(h) {
        _o.encodePacket(h, t.supportsBinary, function(f) {
            if (!t.usingBrowserWebSocket) {
                var p = {};
                if (h.options && (p.compress = h.options.compress), t.perMessageDeflate) {
                    var d = typeof f == "string" ? Buffer.byteLength(f) : f.length;
                    d < t.perMessageDeflate.threshold && (p.compress = !1)
                }
            }
            try {
                t.usingBrowserWebSocket ? t.ws.send(f) : t.ws.send(f, p)
            } catch {
                xo("websocket closed before onclose event")
            }--n || s()
        })
    })(e[r]);

    function s() {
        t.emit("flush"), setTimeout(function() {
            t.writable = !0, t.emit("drain")
        }, 0)
    }
};
z.prototype.onClose = function() {
    Wt.prototype.onClose.call(this)
};
z.prototype.doClose = function() {
    typeof this.ws < "u" && this.ws.close()
};
z.prototype.uri = function() {
    var e = this.query || {},
        t = this.secure ? "wss" : "ws",
        n = "";
    this.port && (t === "wss" && Number(this.port) !== 443 || t === "ws" && Number(this.port) !== 80) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = Ao()), this.supportsBinary || (e.b64 = 1), e = ko.encode(e), e.length && (e = "?" + e);
    var r = this.hostname.indexOf(":") !== -1;
    return t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
};
z.prototype.check = function() {
    return !!ye && !("__initialize" in ye && this.name === z.prototype.name)
};
var Eo = Lt,
    Bo = po,
    Oo = vo,
    Ro = So;
it.polling = $o;
it.websocket = Ro;

function $o(e) {
    var t, n = !1,
        r = !1,
        i = e.jsonp !== !1;
    if (typeof location < "u") {
        var s = location.protocol === "https:",
            h = location.port;
        h || (h = s ? 443 : 80), n = e.hostname !== location.hostname || h !== e.port, r = e.secure !== s
    }
    if (e.xdomain = n, e.xscheme = r, t = new Eo(e), "open" in t && !e.forceJSONP) return new Bo(e);
    if (!i) throw new Error("JSONP disabled");
    return new Oo(e)
}
var Mo = [].indexOf,
    lr = function(e, t) {
        if (Mo) return e.indexOf(t);
        for (var n = 0; n < e.length; ++n)
            if (e[n] === t) return n;
        return -1
    },
    To = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Po = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    No = function(t) {
        var n = t,
            r = t.indexOf("["),
            i = t.indexOf("]");
        r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
        for (var s = To.exec(t || ""), h = {}, f = 14; f--;) h[Po[f]] = s[f] || "";
        return r != -1 && i != -1 && (h.source = n, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = !0), h.pathNames = Do(h, h.path), h.queryKey = Io(h, h.query), h
    };

function Do(e, t) {
    var n = /\/{2,9}/g,
        r = t.replace(n, "/").split("/");
    return (t.substr(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.substr(t.length - 1, 1) == "/" && r.splice(r.length - 1, 1), r
}

function Io(e, t) {
    var n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
        i && (n[i] = s)
    }), n
}
var qo = it,
    jo = nt,
    N = $e("engine.io-client:socket"),
    Lo = lr,
    hr = ue,
    gn = No,
    Uo = Me,
    Ho = E;

function E(e, t) {
    if (!(this instanceof E)) return new E(e, t);
    t = t || {}, e && typeof e == "object" && (t = e, e = null), e ? (e = gn(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = gn(t.host).host), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, typeof this.query == "string" && (this.query = Uo.decode(this.query)), this.upgrade = t.upgrade !== !1, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = t.jsonp !== !1, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.withCredentials = t.withCredentials !== !1, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = t.perMessageDeflate !== !1 ? t.perMessageDeflate || {} : !1, this.perMessageDeflate === !0 && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = t.rejectUnauthorized === void 0 ? !0 : t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", (typeof self > "u" || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
}
E.priorWebsocketSuccess = !1;
jo(E.prototype);
E.protocol = hr.protocol;
E.Socket = E;
E.Transport = Ht();
E.transports = it;
E.parser = ue;
E.prototype.createTransport = function(e) {
    N('creating transport "%s"', e);
    var t = zo(this.query);
    t.EIO = hr.protocol, t.transport = e;
    var n = this.transportOptions[e] || {};
    this.id && (t.sid = this.id);
    var r = new qo[e]({
        query: t,
        socket: this,
        agent: n.agent || this.agent,
        hostname: n.hostname || this.hostname,
        port: n.port || this.port,
        secure: n.secure || this.secure,
        path: n.path || this.path,
        forceJSONP: n.forceJSONP || this.forceJSONP,
        jsonp: n.jsonp || this.jsonp,
        forceBase64: n.forceBase64 || this.forceBase64,
        enablesXDR: n.enablesXDR || this.enablesXDR,
        withCredentials: n.withCredentials || this.withCredentials,
        timestampRequests: n.timestampRequests || this.timestampRequests,
        timestampParam: n.timestampParam || this.timestampParam,
        policyPort: n.policyPort || this.policyPort,
        pfx: n.pfx || this.pfx,
        key: n.key || this.key,
        passphrase: n.passphrase || this.passphrase,
        cert: n.cert || this.cert,
        ca: n.ca || this.ca,
        ciphers: n.ciphers || this.ciphers,
        rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
        perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
        extraHeaders: n.extraHeaders || this.extraHeaders,
        forceNode: n.forceNode || this.forceNode,
        localAddress: n.localAddress || this.localAddress,
        requestTimeout: n.requestTimeout || this.requestTimeout,
        protocols: n.protocols || void 0,
        isReactNative: this.isReactNative
    });
    return r
};

function zo(e) {
    var t = {};
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}
E.prototype.open = function() {
    var e;
    if (this.rememberUpgrade && E.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) e = "websocket";
    else if (this.transports.length === 0) {
        var t = this;
        setTimeout(function() {
            t.emit("error", "No transports available")
        }, 0);
        return
    } else e = this.transports[0];
    this.readyState = "opening";
    try {
        e = this.createTransport(e)
    } catch {
        this.transports.shift(), this.open();
        return
    }
    e.open(), this.setTransport(e)
};
E.prototype.setTransport = function(e) {
    N("setting transport %s", e.name);
    var t = this;
    this.transport && (N("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", function() {
        t.onDrain()
    }).on("packet", function(n) {
        t.onPacket(n)
    }).on("error", function(n) {
        t.onError(n)
    }).on("close", function() {
        t.onClose("transport close")
    })
};
E.prototype.probe = function(e) {
    N('probing transport "%s"', e);
    var t = this.createTransport(e, {
            probe: 1
        }),
        n = !1,
        r = this;
    E.priorWebsocketSuccess = !1;

    function i() {
        if (r.onlyBinaryUpgrades) {
            var o = !this.supportsBinary && r.transport.supportsBinary;
            n = n || o
        }
        n || (N('probe transport "%s" opened', e), t.send([{
            type: "ping",
            data: "probe"
        }]), t.once("packet", function(c) {
            if (!n)
                if (c.type === "pong" && c.data === "probe") {
                    if (N('probe transport "%s" pong', e), r.upgrading = !0, r.emit("upgrading", t), !t) return;
                    E.priorWebsocketSuccess = t.name === "websocket", N('pausing current transport "%s"', r.transport.name), r.transport.pause(function() {
                        n || r.readyState !== "closed" && (N("changing transport and sending upgrade packet"), a(), r.setTransport(t), t.send([{
                            type: "upgrade"
                        }]), r.emit("upgrade", t), t = null, r.upgrading = !1, r.flush())
                    })
                } else {
                    N('probe transport "%s" failed', e);
                    var u = new Error("probe error");
                    u.transport = t.name, r.emit("upgradeError", u)
                }
        }))
    }

    function s() {
        n || (n = !0, a(), t.close(), t = null)
    }

    function h(o) {
        var c = new Error("probe error: " + o);
        c.transport = t.name, s(), N('probe transport "%s" failed because of error: %s', e, o), r.emit("upgradeError", c)
    }

    function f() {
        h("transport closed")
    }

    function p() {
        h("socket closed")
    }

    function d(o) {
        t && o.name !== t.name && (N('"%s" works - aborting "%s"', o.name, t.name), s())
    }

    function a() {
        t.removeListener("open", i), t.removeListener("error", h), t.removeListener("close", f), r.removeListener("close", p), r.removeListener("upgrading", d)
    }
    t.once("open", i), t.once("error", h), t.once("close", f), this.once("close", p), this.once("upgrading", d), t.open()
};
E.prototype.onOpen = function() {
    if (N("socket open"), this.readyState = "open", E.priorWebsocketSuccess = this.transport.name === "websocket", this.emit("open"), this.flush(), this.readyState === "open" && this.upgrade && this.transport.pause) {
        N("starting upgrade probes");
        for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
    }
};
E.prototype.onPacket = function(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (N('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
        case "open":
            this.onHandshake(JSON.parse(e.data));
            break;
        case "pong":
            this.setPing(), this.emit("pong");
            break;
        case "error":
            var t = new Error("server error");
            t.code = e.data, this.onError(t);
            break;
        case "message":
            this.emit("data", e.data), this.emit("message", e.data);
            break
    } else N('packet received with socket readyState "%s"', this.readyState)
};
E.prototype.onHandshake = function(e) {
    this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), this.readyState !== "closed" && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
};
E.prototype.onHeartbeat = function(e) {
    clearTimeout(this.pingTimeoutTimer);
    var t = this;
    t.pingTimeoutTimer = setTimeout(function() {
        t.readyState !== "closed" && t.onClose("ping timeout")
    }, e || t.pingInterval + t.pingTimeout)
};
E.prototype.setPing = function() {
    var e = this;
    clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
        N("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
    }, e.pingInterval)
};
E.prototype.ping = function() {
    var e = this;
    this.sendPacket("ping", function() {
        e.emit("ping")
    })
};
E.prototype.onDrain = function() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush()
};
E.prototype.flush = function() {
    this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (N("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
};
E.prototype.write = E.prototype.send = function(e, t, n) {
    return this.sendPacket("message", e, t, n), this
};
E.prototype.sendPacket = function(e, t, n, r) {
    if (typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = null), !(this.readyState === "closing" || this.readyState === "closed")) {
        n = n || {}, n.compress = n.compress !== !1;
        var i = {
            type: e,
            data: t,
            options: n
        };
        this.emit("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush()
    }
};
E.prototype.close = function() {
    if (this.readyState === "opening" || this.readyState === "open") {
        this.readyState = "closing";
        var e = this;
        this.writeBuffer.length ? this.once("drain", function() {
            this.upgrading ? r() : t()
        }) : this.upgrading ? r() : t()
    }

    function t() {
        e.onClose("forced close"), N("socket closing - telling transport to close"), e.transport.close()
    }

    function n() {
        e.removeListener("upgrade", n), e.removeListener("upgradeError", n), t()
    }

    function r() {
        e.once("upgrade", n), e.once("upgradeError", n)
    }
    return this
};
E.prototype.onError = function(e) {
    N("socket error %j", e), E.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
};
E.prototype.onClose = function(e, t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        N('socket close with reason: "%s"', e);
        var n = this;
        clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), n.writeBuffer = [], n.prevBufferLen = 0
    }
};
E.prototype.filterUpgrades = function(e) {
    for (var t = [], n = 0, r = e.length; n < r; n++) ~Lo(this.transports, e[n]) && t.push(e[n]);
    return t
};
qt.exports = Ho;
qt.exports.parser = ue;
var Vo = qt.exports,
    dr = {
        exports: {}
    },
    pr = {
        exports: {}
    };
(function(e) {
    e.exports = t;

    function t(r) {
        if (r) return n(r)
    }

    function n(r) {
        for (var i in t.prototype) r[i] = t.prototype[i];
        return r
    }
    t.prototype.on = t.prototype.addEventListener = function(r, i) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(i), this
    }, t.prototype.once = function(r, i) {
        function s() {
            this.off(r, s), i.apply(this, arguments)
        }
        return s.fn = i, this.on(r, s), this
    }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(r, i) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
        var s = this._callbacks["$" + r];
        if (!s) return this;
        if (arguments.length == 1) return delete this._callbacks["$" + r], this;
        for (var h, f = 0; f < s.length; f++)
            if (h = s[f], h === i || h.fn === i) {
                s.splice(f, 1);
                break
            }
        return this
    }, t.prototype.emit = function(r) {
        this._callbacks = this._callbacks || {};
        var i = [].slice.call(arguments, 1),
            s = this._callbacks["$" + r];
        if (s) {
            s = s.slice(0);
            for (var h = 0, f = s.length; h < f; ++h) s[h].apply(this, i)
        }
        return this
    }, t.prototype.listeners = function(r) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || []
    }, t.prototype.hasListeners = function(r) {
        return !!this.listeners(r).length
    }
})(pr);
var gr = pr.exports,
    Wo = Xo;

function Xo(e, t) {
    var n = [];
    t = t || 0;
    for (var r = t || 0; r < e.length; r++) n[r - t] = e[r];
    return n
}
var vr = Jo;

function Jo(e, t, n) {
    return e.on(t, n), {
        destroy: function() {
            e.removeListener(t, n)
        }
    }
}
var vn = [].slice,
    yr = function(e, t) {
        if (typeof t == "string" && (t = e[t]), typeof t != "function") throw new Error("bind() requires a function");
        var n = vn.call(arguments, 2);
        return function() {
            return t.apply(e, n.concat(vn.call(arguments)))
        }
    },
    Jt = {};
Jt.encode = function(e) {
    var t = "";
    for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
};
Jt.decode = function(e) {
    for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
        var s = n[r].split("=");
        t[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
    }
    return t
};
(function(e, t) {
    var n = tt,
        r = gr,
        i = Wo,
        s = vr,
        h = yr,
        f = et("socket.io-client:socket"),
        p = Jt,
        d = er;
    e.exports = c;
    var a = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        },
        o = r.prototype.emit;

    function c(u, l, v) {
        this.io = u, this.nsp = l, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, v && v.query && (this.query = v.query), this.io.autoConnect && this.open()
    }
    r(c.prototype), c.prototype.subEvents = function() {
        if (!this.subs) {
            var u = this.io;
            this.subs = [s(u, "open", h(this, "onopen")), s(u, "packet", h(this, "onpacket")), s(u, "close", h(this, "onclose"))]
        }
    }, c.prototype.open = c.prototype.connect = function() {
        return this.connected ? this : (this.subEvents(), this.io.open(), this.io.readyState === "open" && this.onopen(), this.emit("connecting"), this)
    }, c.prototype.send = function() {
        var u = i(arguments);
        return u.unshift("message"), this.emit.apply(this, u), this
    }, c.prototype.emit = function(u) {
        if (a.hasOwnProperty(u)) return o.apply(this, arguments), this;
        var l = i(arguments),
            v = {
                type: (this.flags.binary !== void 0 ? this.flags.binary : d(l)) ? n.BINARY_EVENT : n.EVENT,
                data: l
            };
        return v.options = {}, v.options.compress = !this.flags || this.flags.compress !== !1, typeof l[l.length - 1] == "function" && (f("emitting packet with ack id %d", this.ids), this.acks[this.ids] = l.pop(), v.id = this.ids++), this.connected ? this.packet(v) : this.sendBuffer.push(v), this.flags = {}, this
    }, c.prototype.packet = function(u) {
        u.nsp = this.nsp, this.io.packet(u)
    }, c.prototype.onopen = function() {
        if (f("transport is open - connecting"), this.nsp !== "/")
            if (this.query) {
                var u = typeof this.query == "object" ? p.encode(this.query) : this.query;
                f("sending connect packet with query %s", u), this.packet({
                    type: n.CONNECT,
                    query: u
                })
            } else this.packet({
                type: n.CONNECT
            })
    }, c.prototype.onclose = function(u) {
        f("close (%s)", u), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", u)
    }, c.prototype.onpacket = function(u) {
        var l = u.nsp === this.nsp,
            v = u.type === n.ERROR && u.nsp === "/";
        if (!(!l && !v)) switch (u.type) {
            case n.CONNECT:
                this.onconnect();
                break;
            case n.EVENT:
                this.onevent(u);
                break;
            case n.BINARY_EVENT:
                this.onevent(u);
                break;
            case n.ACK:
                this.onack(u);
                break;
            case n.BINARY_ACK:
                this.onack(u);
                break;
            case n.DISCONNECT:
                this.ondisconnect();
                break;
            case n.ERROR:
                this.emit("error", u.data);
                break
        }
    }, c.prototype.onevent = function(u) {
        var l = u.data || [];
        f("emitting event %j", l), u.id != null && (f("attaching ack callback to event"), l.push(this.ack(u.id))), this.connected ? o.apply(this, l) : this.receiveBuffer.push(l)
    }, c.prototype.ack = function(u) {
        var l = this,
            v = !1;
        return function() {
            if (!v) {
                v = !0;
                var g = i(arguments);
                f("sending ack %j", g), l.packet({
                    type: d(g) ? n.BINARY_ACK : n.ACK,
                    id: u,
                    data: g
                })
            }
        }
    }, c.prototype.onack = function(u) {
        var l = this.acks[u.id];
        typeof l == "function" ? (f("calling ack %s with %j", u.id, u.data), l.apply(this, u.data), delete this.acks[u.id]) : f("bad ack %s", u.id)
    }, c.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, c.prototype.emitBuffered = function() {
        var u;
        for (u = 0; u < this.receiveBuffer.length; u++) o.apply(this, this.receiveBuffer[u]);
        for (this.receiveBuffer = [], u = 0; u < this.sendBuffer.length; u++) this.packet(this.sendBuffer[u]);
        this.sendBuffer = []
    }, c.prototype.ondisconnect = function() {
        f("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
    }, c.prototype.destroy = function() {
        if (this.subs) {
            for (var u = 0; u < this.subs.length; u++) this.subs[u].destroy();
            this.subs = null
        }
        this.io.destroy(this)
    }, c.prototype.close = c.prototype.disconnect = function() {
        return this.connected && (f("performing disconnect (%s)", this.nsp), this.packet({
            type: n.DISCONNECT
        })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, c.prototype.compress = function(u) {
        return this.flags.compress = u, this
    }, c.prototype.binary = function(u) {
        return this.flags.binary = u, this
    }
})(dr);
var mr = dr.exports,
    Go = ke;

function ke(e) {
    e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
}
ke.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n
    }
    return Math.min(e, this.max) | 0
};
ke.prototype.reset = function() {
    this.attempts = 0
};
ke.prototype.setMin = function(e) {
    this.ms = e
};
ke.prototype.setMax = function(e) {
    this.max = e
};
ke.prototype.setJitter = function(e) {
    this.jitter = e
};
var Ko = Vo,
    Yo = mr,
    Zo = gr,
    Qo = tt,
    Z = vr,
    de = yr,
    j = et("socket.io-client:manager"),
    br = lr,
    es = Go,
    Cr = Object.prototype.hasOwnProperty,
    yn = R;

function R(e, t) {
    if (!(this instanceof R)) return new R(e, t);
    e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new es({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
    var n = t.parser || Qo;
    this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = t.autoConnect !== !1, this.autoConnect && this.open()
}
R.prototype.emitAll = function() {
    this.emit.apply(this, arguments);
    for (var e in this.nsps) Cr.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
};
R.prototype.updateSocketIds = function() {
    for (var e in this.nsps) Cr.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
};
R.prototype.generateId = function(e) {
    return (e === "/" ? "" : e + "#") + this.engine.id
};
Zo(R.prototype);
R.prototype.reconnection = function(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
};
R.prototype.reconnectionAttempts = function(e) {
    return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
};
R.prototype.reconnectionDelay = function(e) {
    return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
};
R.prototype.randomizationFactor = function(e) {
    return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
};
R.prototype.reconnectionDelayMax = function(e) {
    return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
};
R.prototype.timeout = function(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout
};
R.prototype.maybeReconnectOnOpen = function() {
    !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
};
R.prototype.open = R.prototype.connect = function(e, t) {
    if (j("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
    j("opening %s", this.uri), this.engine = Ko(this.uri, this.opts);
    var n = this.engine,
        r = this;
    this.readyState = "opening", this.skipReconnect = !1;
    var i = Z(n, "open", function() {
            r.onopen(), e && e()
        }),
        s = Z(n, "error", function(p) {
            if (j("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", p), e) {
                var d = new Error("Connection error");
                d.data = p, e(d)
            } else r.maybeReconnectOnOpen()
        });
    if (this._timeout !== !1) {
        var h = this._timeout;
        j("connect attempt will timeout after %d", h);
        var f = setTimeout(function() {
            j("connect attempt timed out after %d", h), i.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", h)
        }, h);
        this.subs.push({
            destroy: function() {
                clearTimeout(f)
            }
        })
    }
    return this.subs.push(i), this.subs.push(s), this
};
R.prototype.onopen = function() {
    j("open"), this.cleanup(), this.readyState = "open", this.emit("open");
    var e = this.engine;
    this.subs.push(Z(e, "data", de(this, "ondata"))), this.subs.push(Z(e, "ping", de(this, "onping"))), this.subs.push(Z(e, "pong", de(this, "onpong"))), this.subs.push(Z(e, "error", de(this, "onerror"))), this.subs.push(Z(e, "close", de(this, "onclose"))), this.subs.push(Z(this.decoder, "decoded", de(this, "ondecoded")))
};
R.prototype.onping = function() {
    this.lastPing = new Date, this.emitAll("ping")
};
R.prototype.onpong = function() {
    this.emitAll("pong", new Date - this.lastPing)
};
R.prototype.ondata = function(e) {
    this.decoder.add(e)
};
R.prototype.ondecoded = function(e) {
    this.emit("packet", e)
};
R.prototype.onerror = function(e) {
    j("error", e), this.emitAll("error", e)
};
R.prototype.socket = function(e, t) {
    var n = this.nsps[e];
    if (!n) {
        n = new Yo(this, e, t), this.nsps[e] = n;
        var r = this;
        n.on("connecting", i), n.on("connect", function() {
            n.id = r.generateId(e)
        }), this.autoConnect && i()
    }

    function i() {
        ~br(r.connecting, n) || r.connecting.push(n)
    }
    return n
};
R.prototype.destroy = function(e) {
    var t = br(this.connecting, e);
    ~t && this.connecting.splice(t, 1), !this.connecting.length && this.close()
};
R.prototype.packet = function(e) {
    j("writing packet %j", e);
    var t = this;
    e.query && e.type === 0 && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function(n) {
        for (var r = 0; r < n.length; r++) t.engine.write(n[r], e.options);
        t.encoding = !1, t.processPacketQueue()
    }))
};
R.prototype.processPacketQueue = function() {
    if (this.packetBuffer.length > 0 && !this.encoding) {
        var e = this.packetBuffer.shift();
        this.packet(e)
    }
};
R.prototype.cleanup = function() {
    j("cleanup");
    for (var e = this.subs.length, t = 0; t < e; t++) {
        var n = this.subs.shift();
        n.destroy()
    }
    this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
};
R.prototype.close = R.prototype.disconnect = function() {
    j("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, this.readyState === "opening" && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
};
R.prototype.onclose = function(e) {
    j("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
};
R.prototype.reconnect = function() {
    if (this.reconnecting || this.skipReconnect) return this;
    var e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) j("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
    else {
        var t = this.backoff.duration();
        j("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
        var n = setTimeout(function() {
            e.skipReconnect || (j("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), !e.skipReconnect && e.open(function(r) {
                r ? (j("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", r.data)) : (j("reconnect success"), e.onreconnect())
            }))
        }, t);
        this.subs.push({
            destroy: function() {
                clearTimeout(n)
            }
        })
    }
};
R.prototype.onreconnect = function() {
    var e = this.backoff.attempts;
    this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
};
(function(e, t) {
    var n = ki,
        r = tt,
        i = yn,
        s = et("socket.io-client");
    e.exports = t = f;
    var h = t.managers = {};

    function f(p, d) {
        typeof p == "object" && (d = p, p = void 0), d = d || {};
        var a = n(p),
            o = a.source,
            c = a.id,
            u = a.path,
            l = h[c] && u in h[c].nsps,
            v = d.forceNew || d["force new connection"] || d.multiplex === !1 || l,
            g;
        return v ? (s("ignoring socket cache for %s", o), g = i(o, d)) : (h[c] || (s("new io instance for %s", o), h[c] = i(o, d)), g = h[c]), a.query && !d.query && (d.query = a.query), g.socket(a.path, d)
    }
    t.protocol = r.protocol, t.connect = f, t.Manager = yn, t.Socket = mr
})(Ct, Ct.exports);
var ts = Ct.exports;

function ns(e, t) {
    return t = t || {}, new Promise(function(n, r) {
        var i = new XMLHttpRequest,
            s = [],
            h = [],
            f = {},
            p = function() {
                return {
                    ok: (i.status / 100 | 0) == 2,
                    statusText: i.statusText,
                    status: i.status,
                    url: i.responseURL,
                    text: function() {
                        return Promise.resolve(i.responseText)
                    },
                    json: function() {
                        return Promise.resolve(i.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([i.response]))
                    },
                    clone: p,
                    headers: {
                        keys: function() {
                            return s
                        },
                        entries: function() {
                            return h
                        },
                        get: function(a) {
                            return f[a.toLowerCase()]
                        },
                        has: function(a) {
                            return a.toLowerCase() in f
                        }
                    }
                }
            };
        for (var d in i.open(t.method || "get", e, !0), i.onload = function() {
                i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(a, o, c) {
                    s.push(o = o.toLowerCase()), h.push([o, c]), f[o] = f[o] ? f[o] + "," + c : c
                }), n(p())
            }, i.onerror = r, i.withCredentials = t.credentials == "include", t.headers) i.setRequestHeader(d, t.headers[d]);
        i.send(t.body || null)
    })
}
const rs = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ns
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    mn = Dn(rs);
var is = self.fetch || (self.fetch = mn.default || mn);
(function(e) {
    var t = O && O.__assign || function() {
            return t = Object.assign || function(c) {
                for (var u, l = 1, v = arguments.length; l < v; l++) {
                    u = arguments[l];
                    for (var g in u) Object.prototype.hasOwnProperty.call(u, g) && (c[g] = u[g])
                }
                return c
            }, t.apply(this, arguments)
        },
        n = O && O.__awaiter || function(c, u, l, v) {
            function g(y) {
                return y instanceof l ? y : new l(function(C) {
                    C(y)
                })
            }
            return new(l || (l = Promise))(function(y, C) {
                function w(_) {
                    try {
                        b(v.next(_))
                    } catch (k) {
                        C(k)
                    }
                }

                function m(_) {
                    try {
                        b(v.throw(_))
                    } catch (k) {
                        C(k)
                    }
                }

                function b(_) {
                    _.done ? y(_.value) : g(_.value).then(w, m)
                }
                b((v = v.apply(c, u || [])).next())
            })
        },
        r = O && O.__generator || function(c, u) {
            var l = {
                    label: 0,
                    sent: function() {
                        if (y[0] & 1) throw y[1];
                        return y[1]
                    },
                    trys: [],
                    ops: []
                },
                v, g, y, C;
            return C = {
                next: w(0),
                throw: w(1),
                return: w(2)
            }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
                return this
            }), C;

            function w(b) {
                return function(_) {
                    return m([b, _])
                }
            }

            function m(b) {
                if (v) throw new TypeError("Generator is already executing.");
                for (; C && (C = 0, b[0] && (l = 0)), l;) try {
                    if (v = 1, g && (y = b[0] & 2 ? g.return : b[0] ? g.throw || ((y = g.return) && y.call(g), 0) : g.next) && !(y = y.call(g, b[1])).done) return y;
                    switch (g = 0, y && (b = [b[0] & 2, y.value]), b[0]) {
                        case 0:
                        case 1:
                            y = b;
                            break;
                        case 4:
                            return l.label++, {
                                value: b[1],
                                done: !1
                            };
                        case 5:
                            l.label++, g = b[1], b = [0];
                            continue;
                        case 7:
                            b = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (y = l.trys, !(y = y.length > 0 && y[y.length - 1]) && (b[0] === 6 || b[0] === 2)) {
                                l = 0;
                                continue
                            }
                            if (b[0] === 3 && (!y || b[1] > y[0] && b[1] < y[3])) {
                                l.label = b[1];
                                break
                            }
                            if (b[0] === 6 && l.label < y[1]) {
                                l.label = y[1], y = b;
                                break
                            }
                            if (y && l.label < y[2]) {
                                l.label = y[2], l.ops.push(b);
                                break
                            }
                            y[2] && l.ops.pop(), l.trys.pop();
                            continue
                    }
                    b = u.call(c, l)
                } catch (_) {
                    b = [6, _], g = 0
                } finally {
                    v = y = 0
                }
                if (b[0] & 5) throw b[1];
                return {
                    value: b[0] ? b[1] : void 0,
                    done: !0
                }
            }
        },
        i = O && O.__importDefault || function(c) {
            return c && c.__esModule ? c : {
                default: c
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SocketError = void 0;
    var s = I,
        h = i(gi),
        f = i(ts),
        p = is,
        d = {
            transports: ["websocket"],
            path: "/socket",
            reconnection: !0,
            reconnectionDelay: 1e3,
            reconnectionDelayMax: 5e3,
            reconnectionAttempts: Number.POSITIVE_INFINITY
        },
        a = function() {
            function c(u) {
                if (this.options = u, this.initialized = !1, this.forceReconnect = !1, this.identity = null, this.connection = null, this.connectCallback = null, this.disconnectCallback = null, this.initData = null, this.internalReconnection = !1, this.internalReconnecting = !1, this.internalReconnectingAttempt = 0, this.sendBuffer = [], this.emitter = new h.default, !this.options.url) throw new Error("Missing required option url");
                this.options.options || (this.options.options = {}), this.options.options = Object.assign({}, d, this.options.options, {
                    autoConnect: !1
                })
            }
            return c.prototype.initConnection = function() {
                return n(this, void 0, void 0, function() {
                    var u, l, l;
                    return r(this, function(v) {
                        switch (v.label) {
                            case 0:
                                if (this.connection) throw new Error("Connection already exists");
                                return u = null, this.options.balancerUrl ? ((0, s.debug)("using balancer ".concat(this.options.balancerUrl, " to get websocket url")), [4, p("".concat(this.options.balancerUrl)).then(function(g) {
                                    return g.json()
                                }).then(function(g) {
                                    return g != null && g.url && (g != null && g.token) ? ((0, s.debug)("balancer returns url ".concat(g == null ? void 0 : g.url, " and token ").concat(g == null ? void 0 : g.token)), g) : ((0, s.debug)("balancer returns invalid response"), null)
                                }).catch(function(g) {
                                    return (0, s.debug)("failed to resolve url: ".concat(g.message)), null
                                })]) : [3, 2];
                            case 1:
                                u = v.sent(), v.label = 2;
                            case 2:
                                return u ? ((0, s.debug)("creating connection to ".concat(u.url, " with token ").concat(u.token)), l = (0, f.default)(u.url, Object.assign({}, this.options.options, {
                                    reconnection: !1,
                                    query: {
                                        token: u.token
                                    }
                                })), this.setConnection(l), this.internalReconnection = !0) : ((0, s.debug)("creating connection to ".concat(this.options.url)), l = (0, f.default)(this.options.url, this.options.options), this.setConnection(l), this.internalReconnection = !1), [2]
                        }
                    })
                })
            }, c.prototype.setConnection = function(u) {
                var l = this;
                this.connection = u, this.forceReconnect = !1, u.on("connect_error", function(v) {
                    l.internalReconnection && (l.connectCallback = null, (0, s.debug)("connection was not reconnected"), l.emitter.emit("reconnect_error", v), l.options.options.reconnectionAttempts > l.internalReconnectingAttempt + 1 ? l.reconnect(l.internalReconnectingAttempt + 1) : l.emitter.emit("reconnect_failed", l.internalReconnectingAttempt))
                }), u.on("connect", function() {
                    (0, s.debug)("socket was connected"), l.initialized = !1, l.internalReconnecting ? ((0, s.debug)("connection is reconnected"), l.emitter.emit("reconnect"), l.internalReconnecting = !1, l.internalReconnectingAttempt = 0) : l.emitter.emit("connect"), l.initialize().then(function(v) {
                        return (0, s.debug)("socket was initialized"), l.onInitialized(v), l.connectCallback && (l.connectCallback(null, v), l.connectCallback = null), v
                    }).catch(function(v) {
                        (0, s.debug)("socket was not initialized ", t({}, v)), l.onInitializeError(v), l.connectCallback && (l.connectCallback(v), l.connectCallback = null)
                    })
                }), u.on("disconnect", function(v) {
                    (0, s.debug)("socket was disconnected reason='".concat(v, "'")), l.initialized = !1, (!l.internalReconnecting || l.internalReconnectingAttempt === 1) && setTimeout(function() {
                        l.emitter.emit("disconnect", v), l.disconnectCallback && (l.disconnectCallback(), l.disconnectCallback = null)
                    }, 100), l.options.options.reconnection && l.internalReconnection && !l.internalReconnecting && (l.forceReconnect || v !== "io server disconnect") && l.reconnect()
                }), u.on("reconnecting", function(v) {
                    l.emitter.emit("reconnecting", v)
                }), u.on("reconnect", function() {
                    l.emitter.emit("reconnect")
                }), u.on("reconnect_attempt", function(v) {
                    l.emitter.emit("reconnect_attempt", v)
                }), u.on("reconnect_error", function(v) {
                    l.emitter.emit("reconnect_error", v)
                }), u.on("reconnect_failed", function() {
                    l.emitter.emit("reconnect_failed")
                }), u.on("force_reconnect", function() {
                    (0, s.debug)("received event force_reconnect, setting flag forceReconnect = true"), l.forceReconnect = !0
                })
            }, c.prototype.getConnection = function() {
                return this.connection
            }, c.prototype.isConnected = function() {
                var u;
                return ((u = this.connection) === null || u === void 0 ? void 0 : u.connected) || !1
            }, c.prototype.isInitialized = function() {
                return this.initialized
            }, c.prototype.getInitData = function() {
                return this.initData
            }, c.prototype.connect = function() {
                return n(this, void 0, void 0, function() {
                    var u = this;
                    return r(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return this.connection ? [3, 2] : [4, this.initConnection()];
                            case 1:
                                l.sent(), l.label = 2;
                            case 2:
                                return [2, new Promise(function(v, g) {
                                    u.initialized ? v(u.initData) : ((0, s.debug)("starting connecting"), u.connectCallback = (0, s.createCallback)(v, g), u.connection.open())
                                })]
                        }
                    })
                })
            }, c.prototype.disconnect = function() {
                var u = this;
                return new Promise(function(l, v) {
                    !u.connection || u.connection.disconnected ? (u.connection = null, l()) : ((0, s.debug)("starting disconnecting"), u.disconnectCallback = (0, s.createCallback)(l, v), u.connection.close(), u.connection = null)
                })
            }, c.prototype.reconnect = function(u) {
                var l = this;
                return u === void 0 && (u = 1), this.internalReconnecting = !0, this.internalReconnectingAttempt = u, this.disconnect().then(function() {
                    var v = Math.floor(Math.random() * (l.options.options.reconnectionDelayMax - l.options.options.reconnectionDelay) + l.options.options.reconnectionDelay);
                    return (0, s.debug)("connection will reconnect in ".concat(v, "ms")), l.emitter.emit("reconnecting", u), new Promise(function(g) {
                        setTimeout(g, v)
                    })
                }).then(function() {
                    return (0, s.debug)("connection is starting reconnect"), l.emitter.emit("reconnect_attempt", u), l.connect()
                })
            }, c.prototype.initialize = function() {
                return new Promise(function(u) {
                    u({})
                })
            }, c.prototype.onInitialized = function(u) {
                var l = this;
                this.initialized || (this.initialized = !0, this.initData = u, (0, s.debug)("emit initialized"), this.emitter.emit("initialized", u), setTimeout(function() {
                    if (l.sendBuffer.length > 0) {
                        (0, s.debug)("sending buffered ".concat(l.sendBuffer.length, " events"));
                        for (var v = 0; v < l.sendBuffer.length; v++) {
                            var g = l.sendBuffer[v];
                            l.connection.emit(g.name, g.data, g.callback)
                        }
                        l.sendBuffer = []
                    }
                }, 1))
            }, c.prototype.onInitializeError = function(u) {
                this.disconnect(), (0, s.debug)("emit initialize_error", t({}, u)), this.emitter.emit("initialize_error", u)
            }, c.prototype.send = function(u, l, v) {
                this.initialized ? this.connection.emit(u, l, v) : this.sendBuffer.push({
                    name: u,
                    data: l,
                    callback: v
                })
            }, c.prototype.on = function(u, l) {
                return this.emitter.on(u, l), this
            }, c.prototype.once = function(u, l) {
                return this.emitter.once(u, l), this
            }, c.prototype.removeAllListeners = function() {
                for (var u, l = [], v = 0; v < arguments.length; v++) l[v] = arguments[v];
                return (u = this.emitter).removeAllListeners.apply(u, l), this
            }, c
        }();
    e.default = a;
    var o = I;
    Object.defineProperty(e, "SocketError", {
        enumerable: !0,
        get: function() {
            return o.SocketError
        }
    })
})(Vn);
(function(e) {
    var t = O && O.__extends || function() {
            var d = function(a, o) {
                return d = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(c, u) {
                    c.__proto__ = u
                } || function(c, u) {
                    for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (c[l] = u[l])
                }, d(a, o)
            };
            return function(a, o) {
                if (typeof o != "function" && o !== null) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
                d(a, o);

                function c() {
                    this.constructor = a
                }
                a.prototype = o === null ? Object.create(o) : (c.prototype = o.prototype, new c)
            }
        }(),
        n = O && O.__assign || function() {
            return n = Object.assign || function(d) {
                for (var a, o = 1, c = arguments.length; o < c; o++) {
                    a = arguments[o];
                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (d[u] = a[u])
                }
                return d
            }, n.apply(this, arguments)
        },
        r = O && O.__awaiter || function(d, a, o, c) {
            function u(l) {
                return l instanceof o ? l : new o(function(v) {
                    v(l)
                })
            }
            return new(o || (o = Promise))(function(l, v) {
                function g(w) {
                    try {
                        C(c.next(w))
                    } catch (m) {
                        v(m)
                    }
                }

                function y(w) {
                    try {
                        C(c.throw(w))
                    } catch (m) {
                        v(m)
                    }
                }

                function C(w) {
                    w.done ? l(w.value) : u(w.value).then(g, y)
                }
                C((c = c.apply(d, a || [])).next())
            })
        },
        i = O && O.__generator || function(d, a) {
            var o = {
                    label: 0,
                    sent: function() {
                        if (l[0] & 1) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                },
                c, u, l, v;
            return v = {
                next: g(0),
                throw: g(1),
                return: g(2)
            }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
                return this
            }), v;

            function g(C) {
                return function(w) {
                    return y([C, w])
                }
            }

            function y(C) {
                if (c) throw new TypeError("Generator is already executing.");
                for (; v && (v = 0, C[0] && (o = 0)), o;) try {
                    if (c = 1, u && (l = C[0] & 2 ? u.return : C[0] ? u.throw || ((l = u.return) && l.call(u), 0) : u.next) && !(l = l.call(u, C[1])).done) return l;
                    switch (u = 0, l && (C = [C[0] & 2, l.value]), C[0]) {
                        case 0:
                        case 1:
                            l = C;
                            break;
                        case 4:
                            return o.label++, {
                                value: C[1],
                                done: !1
                            };
                        case 5:
                            o.label++, u = C[1], C = [0];
                            continue;
                        case 7:
                            C = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (l = o.trys, !(l = l.length > 0 && l[l.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                                o = 0;
                                continue
                            }
                            if (C[0] === 3 && (!l || C[1] > l[0] && C[1] < l[3])) {
                                o.label = C[1];
                                break
                            }
                            if (C[0] === 6 && o.label < l[1]) {
                                o.label = l[1], l = C;
                                break
                            }
                            if (l && o.label < l[2]) {
                                o.label = l[2], o.ops.push(C);
                                break
                            }
                            l[2] && o.ops.pop(), o.trys.pop();
                            continue
                    }
                    C = a.call(d, o)
                } catch (w) {
                    C = [6, w], u = 0
                } finally {
                    c = l = 0
                }
                if (C[0] & 5) throw C[1];
                return {
                    value: C[0] ? C[1] : void 0,
                    done: !0
                }
            }
        },
        s = O && O.__importDefault || function(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WebsocketVisitorClient = void 0;
    var h = s(Vn),
        f = I,
        p = function(d) {
            t(a, d);

            function a(o) {
                var c = d.call(this, o.connection) || this;
                return c.serverVersion = null, c.updatedValues = {}, c.connectData = o.data, c.identity = null, c
            }
            return a.prototype.setConnection = function(o) {
                d.prototype.setConnection.call(this, o), o.on("server.error", (0, f.bound)(this, "onServerError")), o.on("account.updated", (0, f.createEmitter)(this.emitter, "account.updated")), o.on("agent.updated", (0, f.createEmitter)(this.emitter, "agent.updated")), o.on("agent.status_updated", (0, f.createEmitter)(this.emitter, "agent.status_updated")), o.on("agent.removed", (0, f.createEmitter)(this.emitter, "agent.removed")), o.on("visitor.updated", (0, f.bound)(this, "onVisitorUpdated")), o.on("chat.updated", (0, f.createEmitter)(this.emitter, "chat.updated")), o.on("chat.agent_joined", (0, f.createEmitter)(this.emitter, "chat.agent_joined")), o.on("chat.agent_assigned", (0, f.createEmitter)(this.emitter, "chat.agent_assigned")), o.on("chat.agent_unassigned", (0, f.createEmitter)(this.emitter, "chat.agent_unassigned")), o.on("chat.agent_left", (0, f.createEmitter)(this.emitter, "chat.agent_left")), o.on("chat.opened", (0, f.createEmitter)(this.emitter, "chat.opened")), o.on("chat.served", (0, f.createEmitter)(this.emitter, "chat.served")), o.on("chat.closed", (0, f.createEmitter)(this.emitter, "chat.closed")), o.on("chat.visitor_closed", (0, f.createEmitter)(this.emitter, "chat.visitor_closed")), o.on("chat.message_received", (0, f.createEmitter)(this.emitter, "chat.message_received")), o.on("chat.message_updated", (0, f.createEmitter)(this.emitter, "chat.message_updated")), o.on("chat.agent_typing", (0, f.createEmitter)(this.emitter, "chat.agent_typing")), o.on("chat.rated", (0, f.createEmitter)(this.emitter, "chat.rated")), o.on("chat.contact_read", (0, f.createEmitter)(this.emitter, "chat.contact_read")), o.on("chat.deleted", (0, f.createEmitter)(this.emitter, "chat.deleted")), o.on("chat.transcript_pdf", (0, f.createEmitter)(this.emitter, "chat.transcript_pdf")), o.on("contact.acquired", (0, f.createEmitter)(this.emitter, "contact.acquired"))
            }, a.prototype.on = function(o, c) {
                return this.emitter.on(o, c), this
            }, a.prototype.once = function(o, c) {
                return this.emitter.once(o, c), this
            }, a.prototype.getId = function() {
                return this.identity ? this.identity.id : null
            }, a.prototype.getIdentity = function() {
                return this.identity
            }, a.prototype.connect = function() {
                return d.prototype.connect.call(this)
            }, a.prototype.disconnect = function(o) {
                return o === void 0 && (o = !1), r(this, void 0, void 0, function() {
                    var c = this;
                    return i(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return o ? [4, new Promise(function(l, v) {
                                    c.send("visitor.logout", {}, (0, f.createCallback)(l, v))
                                })] : [3, 2];
                            case 1:
                                u.sent(), u.label = 2;
                            case 2:
                                return [2, d.prototype.disconnect.call(this)]
                        }
                    })
                })
            }, a.prototype.update = function(o) {
                o === void 0 && (o = {}), this.checkServerVersion();
                for (var c in o) this.identity[c] = o[c], this.updatedValues[c] = o[c];
                this.saveVisitorValues()
            }, a.prototype.authenticate = function(o) {
                var c = this;
                return this.checkServerVersion(), new Promise(function(u, l) {
                    c.send("visitor.authenticate", {
                        values: o
                    }, (0, f.createCallback)(u, l))
                })
            }, a.prototype.notify = function(o, c) {
                var u = this;
                return c === void 0 && (c = null), this.checkServerVersion(), new Promise(function(l, v) {
                    u.send("visitor.notify", {
                        name: o,
                        value: c
                    }, (0, f.createCallback)(l, v))
                })
            }, a.prototype.chatRead = function() {
                this.checkServerVersion(), this.send("chat.read", null)
            }, a.prototype.chatTyping = function(o, c) {
                c === void 0 && (c = null), this.checkServerVersion(), this.send("chat.typing", {
                    typing: {
                        is: o,
                        text: c
                    }
                })
            }, a.prototype.chatMessage = function(o) {
                var c = this;
                return this.checkServerVersion(), new Promise(function(u, l) {
                    c.send("chat.message", o, (0, f.createCallback)(u, l))
                })
            }, a.prototype.chatClose = function(o) {
                o === void 0 && (o = null), this.checkServerVersion(), this.send("chat.close", {
                    type: o
                })
            }, a.prototype.chatUploadInit = function() {
                var o = this;
                return this.checkServerVersion(), new Promise(function(c, u) {
                    o.send("chat.upload_init", null, (0, f.createCallback)(c, u))
                })
            }, a.prototype.chatUploadFinish = function(o) {
                var c = this;
                return this.checkServerVersion(), new Promise(function(u, l) {
                    c.send("chat.upload_finish", {
                        uploadToken: o
                    }, (0, f.createCallback)(u, l))
                })
            }, a.prototype.chatTranscript = function(o, c) {
                var u = this;
                return this.checkServerVersion(), new Promise(function(l, v) {
                    u.send("chat.transcript", {
                        email: o,
                        lang: c
                    }, (0, f.createCallback)(l, v))
                })
            }, a.prototype.chatRateInit = function() {
                var o = this;
                return this.checkServerVersion(), new Promise(function(c, u) {
                    o.send("chat.rate_init", null, (0, f.createCallback)(c, u))
                })
            }, a.prototype.chatRate = function(o) {
                var c = this;
                return this.checkServerVersion(), new Promise(function(u, l) {
                    c.send("chat.rate", o, (0, f.createCallback)(u, l))
                })
            }, a.prototype.chatTranscriptPdf = function() {
                var o = this;
                return this.checkServerVersion(), new Promise(function(c, u) {
                    o.send("chat.transcript_pdf", null, (0, f.createCallback)(c, u))
                })
            }, a.prototype.visitorConnect = function() {
                var o = this,
                    c = n({
                        version: a.CLIENT_VERSION
                    }, this.connectData);
                for (var u in this.updatedValues) c[u] = this.updatedValues[u];
                if (this.updatedValues = {}, this.identity)
                    for (var u in this.identity)["bannedAt", "chatId", "status"].includes(u) || (c[u] = this.identity[u]);
                return this.emitter.emit("initialize", c), new Promise(function(l, v) {
                    o.connection.emit("visitor.connect", c, (0, f.createCallback)(l, v))
                })
            }, a.prototype.visitorDisconnect = function() {
                var o = this;
                return new Promise(function(c, u) {
                    o.connection.emit("visitor.disconnect", {}, (0, f.createCallback)(c, u))
                })
            }, a.prototype.onVisitorUpdated = function(o) {
                var c = {};
                for (var u in o.changes) a.identityProperties.includes(u) && (this.identity && (this.identity[u] = o.changes[u]), c[u] = o.changes[u]);
                Object.getOwnPropertyNames(c).length > 0 && this.emitter.emit("visitor.updated", c)
            }, a.prototype.onServerError = function(o) {
                var c = (0, f.createSocketError)(o);
                this.emitter.emit("error", c)
            }, a.prototype.initialize = function() {
                var o = this;
                return this.visitorConnect().then(function(c) {
                    return o.serverVersion = c.serverVersion, o.identity = n(n({}, c.visitor), {
                        variables: n({}, c.visitor.variables)
                    }), c
                })
            }, a.prototype.saveVisitorValues = function() {
                var o = this;
                this.initialized && setTimeout(function() {
                    if (!(!o.initialized || Object.getOwnPropertyNames(o.updatedValues).length === 0)) {
                        var c = {};
                        for (var u in o.updatedValues) c[u] = o.updatedValues[u];
                        o.send("visitor.update", {
                            values: c
                        }), o.updatedValues = {}
                    }
                }, 1)
            }, a.prototype.checkServerVersion = function() {
                if (this.serverVersion === null) throw new Error("Client not yet connected to server")
            }, a.CLIENT_VERSION = 6, a.identityProperties = ["id", "name", "email", "phone", "chatId", "variables", "lang", "group", "bannedAt", "triggerable", "visits", "gdprApproved"], a
        }(h.default);
    e.WebsocketVisitorClient = p,
        function(d) {
            (function(a) {
                a.WidgetOpen = "widget_open", a.WidgetShow = "widget_show", a.VisitorActive = "visitor_active", a.VisitorInactive = "visitor_inactive"
            })(d.EventName || (d.EventName = {}))
        }(p = e.WebsocketVisitorClient || (e.WebsocketVisitorClient = {})), e.WebsocketVisitorClient = p
})(zn);
var wr = {};
Object.defineProperty(wr, "__esModule", {
    value: !0
});
var _r = {};
Object.defineProperty(_r, "__esModule", {
    value: !0
});
var P = {};
Object.defineProperty(P, "__esModule", {
    value: !0
});
P.MessageDeliveryFailReason = P.MessageDeliveryStatus = P.AgentDevicePlatform = P.AgentDeviceType = P.VisitorStatus = P.ChatReadInfoType = P.ChatStatus = P.AgentStatus = P.AccountStatus = void 0;
P.AccountStatus = {
    Online: "online",
    Offline: "offline"
};
P.AgentStatus = {
    Online: "online",
    Offline: "offline"
};
P.ChatStatus = {
    Pending: "pending",
    Open: "open",
    Closed: "closed",
    Served: "served"
};
P.ChatReadInfoType = {
    Agent: "agent",
    Contact: "contact"
};
P.VisitorStatus = {
    Active: "active",
    Clicked: "clicked",
    Idle: "idle",
    Served: "served",
    Unserved: "unserved",
    Triggered: "triggered"
};
P.AgentDeviceType = {
    Browser: "browser",
    Mobile: "mobile",
    Xmpp: "xmpp",
    Other: "other"
};
P.AgentDevicePlatform = {
    IOS: "ios",
    ANDROID: "android"
};
P.MessageDeliveryStatus = {
    Ok: "ok",
    PermanentFail: "permanent_fail",
    TemporaryFail: "temporary_fail",
    Complained: "complained",
    Seen: "seen"
};
P.MessageDeliveryFailReason = {
    Facebook24hWindow: "facebook.outside_allowed_window"
};
(function(e) {
    var t = O && O.__createBinding || (Object.create ? function(s, h, f, p) {
            p === void 0 && (p = f);
            var d = Object.getOwnPropertyDescriptor(h, f);
            (!d || ("get" in d ? !h.__esModule : d.writable || d.configurable)) && (d = {
                enumerable: !0,
                get: function() {
                    return h[f]
                }
            }), Object.defineProperty(s, p, d)
        } : function(s, h, f, p) {
            p === void 0 && (p = f), s[p] = h[f]
        }),
        n = O && O.__exportStar || function(s, h) {
            for (var f in s) f !== "default" && !Object.prototype.hasOwnProperty.call(h, f) && t(h, s, f)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SocketError = e.default = void 0;
    var r = zn;
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return r.WebsocketVisitorClient
        }
    }), n(wr, e), n(_r, e);
    var i = I;
    Object.defineProperty(e, "SocketError", {
        enumerable: !0,
        get: function() {
            return i.SocketError
        }
    }), n(P, e)
})(Hn);
const Sa = Nn(Hn);
var Gt = {},
    os = O && O.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(Gt, "__esModule", {
    value: !0
});
var ss = Gt.FetchAdapter = void 0;
const as = os(fr);
class Kt {
    constructor(t) {
        this.options = {}, this.options = t
    }
    async request(t, n, r, i, s) {
        const h = { ...this.options,
                ...s
            },
            f = i ? "?" + as.default.stringify(i) : "";
        try {
            const p = await fetch(`${h.baseURL||""}${n}${f}`, {
                method: t,
                body: r ? JSON.stringify(r) : null,
                ...h
            });
            return {
                status: p.status,
                statusText: p.statusText,
                data: await p.json(),
                headers: [...p.headers.entries()].reduce((d, [a, o]) => (d[a] = o, d), {})
            }
        } catch (p) {
            throw p.isOpenApiError = !0, p
        }
    }
    withOptions(t) {
        return new Kt(t)
    }
}
ss = Gt.FetchAdapter = Kt;
var cs = {},
    be = {};
Object.defineProperty(be, "__esModule", {
    value: !0
});
be.ProjectName = be.ErrorCode = void 0;
be.ErrorCode = {
    BadRequest: "bad_request",
    NotAllowed: "not_allowed",
    NotFound: "not_found",
    Forbidden: "forbidden",
    TooManyRequests: "too_many_requests",
    Unauthorized: "unauthorized",
    Unprocessable: "unprocessable"
};
be.ProjectName = {
    Widget: "widget",
    Chatbot: "chatbot"
};
var Ce = {},
    ae = {};
Object.defineProperty(ae, "__esModule", {
    value: !0
});
ae.TranslationsClientRaw = ae.TranslationsClient = void 0;
class us {
    constructor(t) {
        this.adapter = t, this.raw = new kr(this.adapter)
    }
    getDefaults(t, n, r) {
        return this.adapter.request("get", `/${t}/translations/lang/${n}/defaults`, null, null, r).then(fs)
    }
}
ae.TranslationsClient = us;
class kr {
    constructor(t) {
        this.adapter = t
    }
    getDefaults(t, n, r) {
        return this.adapter.request("get", `/${t}/translations/lang/${n}/defaults`, null, null, r)
    }
}
ae.TranslationsClientRaw = kr;

function fs(e) {
    return e.data
}
Object.defineProperty(Ce, "__esModule", {
    value: !0
});
Ce.SmartsuppTranslationsClientApi = void 0;
const ls = ae;
class st {
    constructor(t) {
        this.adapter = t, this.translations = new ls.TranslationsClient(t)
    }
    withOptions(t) {
        return new st(this.adapter.withOptions(t))
    }
}
Ce.SmartsuppTranslationsClientApi = st;
Ce.default = st;
(function(e) {
    var t = O && O.__createBinding || (Object.create ? function(i, s, h, f) {
            f === void 0 && (f = h);
            var p = Object.getOwnPropertyDescriptor(s, h);
            (!p || ("get" in p ? !s.__esModule : p.writable || p.configurable)) && (p = {
                enumerable: !0,
                get: function() {
                    return s[h]
                }
            }), Object.defineProperty(i, f, p)
        } : function(i, s, h, f) {
            f === void 0 && (f = h), i[f] = s[h]
        }),
        n = O && O.__exportStar || function(i, s) {
            for (var h in i) h !== "default" && !Object.prototype.hasOwnProperty.call(s, h) && t(s, i, h)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n(be, e), n(Ce, e), n(ae, e);
    const r = Ce;
    e.default = r.SmartsuppTranslationsClientApi
})(cs);

function q(e, t) {
    hs(e) && (e = "100%");
    var n = ds(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e)
}

function je(e) {
    return Math.min(1, Math.max(0, e))
}

function hs(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
}

function ds(e) {
    return typeof e == "string" && e.indexOf("%") !== -1
}

function Fr(e) {
    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}

function Le(e) {
    return e <= 1 ? "".concat(Number(e) * 100, "%") : e
}

function oe(e) {
    return e.length === 1 ? "0" + e : String(e)
}

function ps(e, t, n) {
    return {
        r: q(e, 255) * 255,
        g: q(t, 255) * 255,
        b: q(n, 255) * 255
    }
}

function bn(e, t, n) {
    e = q(e, 255), t = q(t, 255), n = q(n, 255);
    var r = Math.max(e, t, n),
        i = Math.min(e, t, n),
        s = 0,
        h = 0,
        f = (r + i) / 2;
    if (r === i) h = 0, s = 0;
    else {
        var p = r - i;
        switch (h = f > .5 ? p / (2 - r - i) : p / (r + i), r) {
            case e:
                s = (t - n) / p + (t < n ? 6 : 0);
                break;
            case t:
                s = (n - e) / p + 2;
                break;
            case n:
                s = (e - t) / p + 4;
                break
        }
        s /= 6
    }
    return {
        h: s,
        s: h,
        l: f
    }
}

function pt(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function gs(e, t, n) {
    var r, i, s;
    if (e = q(e, 360), t = q(t, 100), n = q(n, 100), t === 0) i = n, s = n, r = n;
    else {
        var h = n < .5 ? n * (1 + t) : n + t - n * t,
            f = 2 * n - h;
        r = pt(f, h, e + 1 / 3), i = pt(f, h, e), s = pt(f, h, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: i * 255,
        b: s * 255
    }
}

function Cn(e, t, n) {
    e = q(e, 255), t = q(t, 255), n = q(n, 255);
    var r = Math.max(e, t, n),
        i = Math.min(e, t, n),
        s = 0,
        h = r,
        f = r - i,
        p = r === 0 ? 0 : f / r;
    if (r === i) s = 0;
    else {
        switch (r) {
            case e:
                s = (t - n) / f + (t < n ? 6 : 0);
                break;
            case t:
                s = (n - e) / f + 2;
                break;
            case n:
                s = (e - t) / f + 4;
                break
        }
        s /= 6
    }
    return {
        h: s,
        s: p,
        v: h
    }
}

function vs(e, t, n) {
    e = q(e, 360) * 6, t = q(t, 100), n = q(n, 100);
    var r = Math.floor(e),
        i = e - r,
        s = n * (1 - t),
        h = n * (1 - i * t),
        f = n * (1 - (1 - i) * t),
        p = r % 6,
        d = [n, h, s, s, f, n][p],
        a = [f, n, n, h, s, s][p],
        o = [s, s, f, n, n, h][p];
    return {
        r: d * 255,
        g: a * 255,
        b: o * 255
    }
}

function wn(e, t, n, r) {
    var i = [oe(Math.round(e).toString(16)), oe(Math.round(t).toString(16)), oe(Math.round(n).toString(16))];
    return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}

function ys(e, t, n, r, i) {
    var s = [oe(Math.round(e).toString(16)), oe(Math.round(t).toString(16)), oe(Math.round(n).toString(16)), oe(ms(r))];
    return i && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("")
}

function ms(e) {
    return Math.round(parseFloat(e) * 255).toString(16)
}

function _n(e) {
    return H(e) / 255
}

function H(e) {
    return parseInt(e, 16)
}

function bs(e) {
    return {
        r: e >> 16,
        g: (e & 65280) >> 8,
        b: e & 255
    }
}
var Bt = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function Cs(e) {
    var t = {
            r: 0,
            g: 0,
            b: 0
        },
        n = 1,
        r = null,
        i = null,
        s = null,
        h = !1,
        f = !1;
    return typeof e == "string" && (e = ks(e)), typeof e == "object" && (G(e.r) && G(e.g) && G(e.b) ? (t = ps(e.r, e.g, e.b), h = !0, f = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : G(e.h) && G(e.s) && G(e.v) ? (r = Le(e.s), i = Le(e.v), t = vs(e.h, r, i), h = !0, f = "hsv") : G(e.h) && G(e.s) && G(e.l) && (r = Le(e.s), s = Le(e.l), t = gs(e.h, r, s), h = !0, f = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Fr(n), {
        ok: h,
        format: e.format || f,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n
    }
}
var ws = "[-\\+]?\\d+%?",
    _s = "[-\\+]?\\d*\\.\\d+%?",
    ne = "(?:".concat(_s, ")|(?:").concat(ws, ")"),
    gt = "[\\s|\\(]+(".concat(ne, ")[,|\\s]+(").concat(ne, ")[,|\\s]+(").concat(ne, ")\\s*\\)?"),
    vt = "[\\s|\\(]+(".concat(ne, ")[,|\\s]+(").concat(ne, ")[,|\\s]+(").concat(ne, ")[,|\\s]+(").concat(ne, ")\\s*\\)?"),
    V = {
        CSS_UNIT: new RegExp(ne),
        rgb: new RegExp("rgb" + gt),
        rgba: new RegExp("rgba" + vt),
        hsl: new RegExp("hsl" + gt),
        hsla: new RegExp("hsla" + vt),
        hsv: new RegExp("hsv" + gt),
        hsva: new RegExp("hsva" + vt),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };

function ks(e) {
    if (e = e.trim().toLowerCase(), e.length === 0) return !1;
    var t = !1;
    if (Bt[e]) e = Bt[e], t = !0;
    else if (e === "transparent") return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
    };
    var n = V.rgb.exec(e);
    return n ? {
        r: n[1],
        g: n[2],
        b: n[3]
    } : (n = V.rgba.exec(e), n ? {
        r: n[1],
        g: n[2],
        b: n[3],
        a: n[4]
    } : (n = V.hsl.exec(e), n ? {
        h: n[1],
        s: n[2],
        l: n[3]
    } : (n = V.hsla.exec(e), n ? {
        h: n[1],
        s: n[2],
        l: n[3],
        a: n[4]
    } : (n = V.hsv.exec(e), n ? {
        h: n[1],
        s: n[2],
        v: n[3]
    } : (n = V.hsva.exec(e), n ? {
        h: n[1],
        s: n[2],
        v: n[3],
        a: n[4]
    } : (n = V.hex8.exec(e), n ? {
        r: H(n[1]),
        g: H(n[2]),
        b: H(n[3]),
        a: _n(n[4]),
        format: t ? "name" : "hex8"
    } : (n = V.hex6.exec(e), n ? {
        r: H(n[1]),
        g: H(n[2]),
        b: H(n[3]),
        format: t ? "name" : "hex"
    } : (n = V.hex4.exec(e), n ? {
        r: H(n[1] + n[1]),
        g: H(n[2] + n[2]),
        b: H(n[3] + n[3]),
        a: _n(n[4] + n[4]),
        format: t ? "name" : "hex8"
    } : (n = V.hex3.exec(e), n ? {
        r: H(n[1] + n[1]),
        g: H(n[2] + n[2]),
        b: H(n[3] + n[3]),
        format: t ? "name" : "hex"
    } : !1)))))))))
}

function G(e) {
    return !!V.CSS_UNIT.exec(String(e))
}
var Ea = function() {
    function e(t, n) {
        t === void 0 && (t = ""), n === void 0 && (n = {});
        var r;
        if (t instanceof e) return t;
        typeof t == "number" && (t = bs(t)), this.originalInput = t;
        var i = Cs(t);
        this.originalInput = t, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : i.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok
    }
    return e.prototype.isDark = function() {
        return this.getBrightness() < 128
    }, e.prototype.isLight = function() {
        return !this.isDark()
    }, e.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }, e.prototype.getLuminance = function() {
        var t = this.toRgb(),
            n, r, i, s = t.r / 255,
            h = t.g / 255,
            f = t.b / 255;
        return s <= .03928 ? n = s / 12.92 : n = Math.pow((s + .055) / 1.055, 2.4), h <= .03928 ? r = h / 12.92 : r = Math.pow((h + .055) / 1.055, 2.4), f <= .03928 ? i = f / 12.92 : i = Math.pow((f + .055) / 1.055, 2.4), .2126 * n + .7152 * r + .0722 * i
    }, e.prototype.getAlpha = function() {
        return this.a
    }, e.prototype.setAlpha = function(t) {
        return this.a = Fr(t), this.roundA = Math.round(100 * this.a) / 100, this
    }, e.prototype.isMonochrome = function() {
        var t = this.toHsl().s;
        return t === 0
    }, e.prototype.toHsv = function() {
        var t = Cn(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            v: t.v,
            a: this.a
        }
    }, e.prototype.toHsvString = function() {
        var t = Cn(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            i = Math.round(t.v * 100);
        return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHsl = function() {
        var t = bn(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            l: t.l,
            a: this.a
        }
    }, e.prototype.toHslString = function() {
        var t = bn(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            i = Math.round(t.l * 100);
        return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHex = function(t) {
        return t === void 0 && (t = !1), wn(this.r, this.g, this.b, t)
    }, e.prototype.toHexString = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t)
    }, e.prototype.toHex8 = function(t) {
        return t === void 0 && (t = !1), ys(this.r, this.g, this.b, this.a, t)
    }, e.prototype.toHex8String = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t)
    }, e.prototype.toHexShortString = function(t) {
        return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
    }, e.prototype.toRgb = function() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        }
    }, e.prototype.toRgbString = function() {
        var t = Math.round(this.r),
            n = Math.round(this.g),
            r = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")")
    }, e.prototype.toPercentageRgb = function() {
        var t = function(n) {
            return "".concat(Math.round(q(n, 255) * 100), "%")
        };
        return {
            r: t(this.r),
            g: t(this.g),
            b: t(this.b),
            a: this.a
        }
    }, e.prototype.toPercentageRgbString = function() {
        var t = function(n) {
            return Math.round(q(n, 255) * 100)
        };
        return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
    }, e.prototype.toName = function() {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        for (var t = "#" + wn(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Bt); n < r.length; n++) {
            var i = r[n],
                s = i[0],
                h = i[1];
            if (t === h) return s
        }
        return !1
    }, e.prototype.toString = function(t) {
        var n = !!t;
        t = t ? ? this.format;
        var r = !1,
            i = this.a < 1 && this.a >= 0,
            s = !n && i && (t.startsWith("hex") || t === "name");
        return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString())
    }, e.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }, e.prototype.clone = function() {
        return new e(this.toString())
    }, e.prototype.lighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l += t / 100, n.l = je(n.l), new e(n)
    }, e.prototype.brighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n)
    }, e.prototype.darken = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l -= t / 100, n.l = je(n.l), new e(n)
    }, e.prototype.tint = function(t) {
        return t === void 0 && (t = 10), this.mix("white", t)
    }, e.prototype.shade = function(t) {
        return t === void 0 && (t = 10), this.mix("black", t)
    }, e.prototype.desaturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s -= t / 100, n.s = je(n.s), new e(n)
    }, e.prototype.saturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s += t / 100, n.s = je(n.s), new e(n)
    }, e.prototype.greyscale = function() {
        return this.desaturate(100)
    }, e.prototype.spin = function(t) {
        var n = this.toHsl(),
            r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r, new e(n)
    }, e.prototype.mix = function(t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
            i = new e(t).toRgb(),
            s = n / 100,
            h = {
                r: (i.r - r.r) * s + r.r,
                g: (i.g - r.g) * s + r.g,
                b: (i.b - r.b) * s + r.b,
                a: (i.a - r.a) * s + r.a
            };
        return new e(h)
    }, e.prototype.analogous = function(t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
            i = 360 / n,
            s = [this];
        for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) r.h = (r.h + i) % 360, s.push(new e(r));
        return s
    }, e.prototype.complement = function() {
        var t = this.toHsl();
        return t.h = (t.h + 180) % 360, new e(t)
    }, e.prototype.monochromatic = function(t) {
        t === void 0 && (t = 6);
        for (var n = this.toHsv(), r = n.h, i = n.s, s = n.v, h = [], f = 1 / t; t--;) h.push(new e({
            h: r,
            s: i,
            v: s
        })), s = (s + f) % 1;
        return h
    }, e.prototype.splitcomplement = function() {
        var t = this.toHsl(),
            n = t.h;
        return [this, new e({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
        }), new e({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }, e.prototype.onBackground = function(t) {
        var n = this.toRgb(),
            r = new e(t).toRgb(),
            i = n.a + r.a * (1 - n.a);
        return new e({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
            a: i
        })
    }, e.prototype.triad = function() {
        return this.polyad(3)
    }, e.prototype.tetrad = function() {
        return this.polyad(4)
    }, e.prototype.polyad = function(t) {
        for (var n = this.toHsl(), r = n.h, i = [this], s = 360 / t, h = 1; h < t; h++) i.push(new e({
            h: (r + h * s) % 360,
            s: n.s,
            l: n.l
        }));
        return i
    }, e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString()
    }, e
}();
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(Wr);

function Yt(e) {
    const t = e - 1;
    return t * t * t + 1
}

function Ba(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = Ze
} = {}) {
    const i = +getComputedStyle(e).opacity;
    return {
        delay: t,
        duration: n,
        easing: r,
        css: s => `opacity: ${s*i}`
    }
}

function Oa(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = Yt,
    x: i = 0,
    y: s = 0,
    opacity: h = 0
} = {}) {
    const f = getComputedStyle(e),
        p = +f.opacity,
        d = f.transform === "none" ? "" : f.transform,
        a = p * (1 - h),
        [o, c] = Qt(i),
        [u, l] = Qt(s);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: (v, g) => `
			transform: ${d} translate(${(1-v)*o}${c}, ${(1-v)*u}${l});
			opacity: ${p-a*g}`
    }
}

function Ra(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = Yt,
    axis: i = "y"
} = {}) {
    const s = getComputedStyle(e),
        h = +s.opacity,
        f = i === "y" ? "height" : "width",
        p = parseFloat(s[f]),
        d = i === "y" ? ["top", "bottom"] : ["left", "right"],
        a = d.map(y => `${y[0].toUpperCase()}${y.slice(1)}`),
        o = parseFloat(s[`padding${a[0]}`]),
        c = parseFloat(s[`padding${a[1]}`]),
        u = parseFloat(s[`margin${a[0]}`]),
        l = parseFloat(s[`margin${a[1]}`]),
        v = parseFloat(s[`border${a[0]}Width`]),
        g = parseFloat(s[`border${a[1]}Width`]);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: y => `overflow: hidden;opacity: ${Math.min(y*20,1)*h};${f}: ${y*p}px;padding-${d[0]}: ${y*o}px;padding-${d[1]}: ${y*c}px;margin-${d[0]}: ${y*u}px;margin-${d[1]}: ${y*l}px;border-${d[0]}-width: ${y*v}px;border-${d[1]}-width: ${y*g}px;`
    }
}

function $a(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = Yt,
    start: i = 0,
    opacity: s = 0
} = {}) {
    const h = getComputedStyle(e),
        f = +h.opacity,
        p = h.transform === "none" ? "" : h.transform,
        d = 1 - i,
        a = f * (1 - s);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: (o, c) => `
			transform: ${p} scale(${1-d*c});
			opacity: ${f-a*c}
		`
    }
}
export {
    Ts as $, aa as A, Tr as B, js as C, ua as D, fa as E, ss as F, wa as G, Hr as H, zr as I, me as J, da as K, $a as L, Bn as M, qs as N, Ws as O, Ls as P, Js as Q, Ds as R, ka as S, Ea as T, la as U, Sa as V, ha as W, Oa as X, Ba as Y, Zs as Z, ea as _, Aa as a, ce as a0, Sr as a1, Vs as a2, ma as a3, $s as a4, As as a5, pa as a6, ya as a7, Ps as a8, va as a9, Ms as aa, zs as ab, ba as ac, sa as ad, Hs as ae, Ot as af, K as ag, Yt as ah, ra as ai, Xs as aj, Ca as ak, ca as al, Ks as am, Gs as an, Ys as ao, Us as ap, Ra as aq, Nn as ar, Qs as as, oa as at, ia as au, Ns as av, Is as aw, ga as ax, cs as b, xa as c, Fa as d, si as e, Es as f, xs as g, En as h, _a as i, On as j, Mr as k, Hn as l, Or as m, Rs as n, ta as o, Bs as p, Ur as q, Tt as r, Er as s, Pn as t, Os as u, na as v, Jr as w, en as x, U as y, Ss as z
};
//# sourceMappingURL=vendor-620a2714.js.map