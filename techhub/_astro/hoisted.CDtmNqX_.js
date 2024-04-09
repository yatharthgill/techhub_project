function ue(i) {
    return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object
}

function ce(i, e) {
    i === void 0 && (i = {}), e === void 0 && (e = {}), Object.keys(e).forEach(t => {
        typeof i[t] > "u" ? i[t] = e[t] : ue(e[t]) && ue(i[t]) && Object.keys(e[t]).length > 0 && ce(i[t], e[t])
    })
}
const we = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function _() {
    const i = typeof document < "u" ? document : {};
    return ce(i, we), i
}
const Pe = {
    document: we,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(i) {
        return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0)
    },
    cancelAnimationFrame(i) {
        typeof setTimeout > "u" || clearTimeout(i)
    }
};

function B() {
    const i = typeof window < "u" ? window : {};
    return ce(i, Pe), i
}

function Me(i) {
    return i === void 0 && (i = ""), i.trim().split(" ").filter(e => !!e.trim())
}

function Le(i) {
    const e = i;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    })
}

function le(i, e) {
    return e === void 0 && (e = 0), setTimeout(i, e)
}

function K() {
    return Date.now()
}

function Ie(i) {
    const e = B();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t
}

function Ae(i, e) {
    e === void 0 && (e = "x");
    const t = B();
    let s, n, r;
    const o = Ie(i);
    return t.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(l => l.replace(",", ".")).join(", ")), r = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (t.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0
}

function j(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
}

function Oe(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
}

function V() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (s != null && !Oe(s)) {
            const n = Object.keys(Object(s)).filter(r => e.indexOf(r) < 0);
            for (let r = 0, o = n.length; r < o; r += 1) {
                const l = n[r],
                    a = Object.getOwnPropertyDescriptor(s, l);
                a !== void 0 && a.enumerable && (j(i[l]) && j(s[l]) ? s[l].__swiper__ ? i[l] = s[l] : V(i[l], s[l]) : !j(i[l]) && j(s[l]) ? (i[l] = {}, s[l].__swiper__ ? i[l] = s[l] : V(i[l], s[l])) : i[l] = s[l])
            }
        }
    }
    return i
}

function Y(i, e, t) {
    i.style.setProperty(e, t)
}

function Se(i) {
    let {
        swiper: e,
        targetPosition: t,
        side: s
    } = i;
    const n = B(),
        r = -e.translate;
    let o = null,
        l;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > r ? "next" : "prev",
        u = (h, m) => c === "next" && h >= m || c === "prev" && h <= m,
        f = () => {
            l = new Date().getTime(), o === null && (o = l);
            const h = Math.max(Math.min((l - o) / a, 1), 0),
                m = .5 - Math.cos(h * Math.PI) / 2;
            let g = r + m * (t - r);
            if (u(g, t) && (g = t), e.wrapperEl.scrollTo({
                    [s]: g
                }), u(g, t)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [s]: g
                    })
                }), n.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = n.requestAnimationFrame(f)
        };
    f()
}

function F(i, e) {
    return e === void 0 && (e = ""), [...i.children].filter(t => t.matches(e))
}

function J(i) {
    try {
        console.warn(i);
        return
    } catch {}
}

function Q(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : Me(e)), t
}

function ze(i, e) {
    const t = [];
    for (; i.previousElementSibling;) {
        const s = i.previousElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s), i = s
    }
    return t
}

function ke(i, e) {
    const t = [];
    for (; i.nextElementSibling;) {
        const s = i.nextElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s), i = s
    }
    return t
}

function H(i, e) {
    return B().getComputedStyle(i, null).getPropertyValue(e)
}

function Z(i) {
    let e = i,
        t;
    if (e) {
        for (t = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
        return t
    }
}

function ye(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s;) e ? s.matches(e) && t.push(s) : t.push(s), s = s.parentElement;
    return t
}

function oe(i, e, t) {
    const s = B();
    return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth
}

function z(i) {
    return (Array.isArray(i) ? i : [i]).filter(e => !!e)
}
let te;

function De() {
    const i = B(),
        e = _();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    }
}

function be() {
    return te || (te = De()), te
}
let ie;

function Ge(i) {
    let {
        userAgent: e
    } = i === void 0 ? {} : i;
    const t = be(),
        s = B(),
        n = s.navigator.platform,
        r = e || s.navigator.userAgent,
        o = {
            ios: !1,
            android: !1
        },
        l = s.screen.width,
        a = s.screen.height,
        c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = r.match(/(iPad).*OS\s([\d_]+)/);
    const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
        h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        m = n === "Win32";
    let g = n === "MacIntel";
    const w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !u && g && t.touch && w.indexOf(`${l}x${a}`) >= 0 && (u = r.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), g = !1), c && !m && (o.os = "android", o.android = !0), (u || h || f) && (o.os = "ios", o.ios = !0), o
}

function Te(i) {
    return i === void 0 && (i = {}), ie || (ie = Ge(i)), ie
}
let se;

function Ve() {
    const i = B(),
        e = Te();
    let t = !1;

    function s() {
        const l = i.navigator.userAgent.toLowerCase();
        return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0
    }
    if (s()) {
        const l = String(i.navigator.userAgent);
        if (l.includes("Version/")) {
            const [a, c] = l.split("Version/")[1].split(" ")[0].split(".").map(u => Number(u));
            t = a < 16 || a === 16 && c < 2
        }
    }
    const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),
        r = s(),
        o = r || n && e.ios;
    return {
        isSafari: t || r,
        needPerspectiveFix: t,
        need3dFix: o,
        isWebView: n
    }
}

function Be() {
    return se || (se = Ve()), se
}

function $e(i) {
    let {
        swiper: e,
        on: t,
        emit: s
    } = i;
    const n = B();
    let r = null,
        o = null;
    const l = () => {
            !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
        },
        a = () => {
            !e || e.destroyed || !e.initialized || (r = new ResizeObserver(f => {
                o = n.requestAnimationFrame(() => {
                    const {
                        width: h,
                        height: m
                    } = e;
                    let g = h,
                        w = m;
                    f.forEach(S => {
                        let {
                            contentBoxSize: d,
                            contentRect: p,
                            target: v
                        } = S;
                        v && v !== e.el || (g = p ? p.width : (d[0] || d).inlineSize, w = p ? p.height : (d[0] || d).blockSize)
                    }), (g !== h || w !== m) && l()
                })
            }), r.observe(e.el))
        },
        c = () => {
            o && n.cancelAnimationFrame(o), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
        },
        u = () => {
            !e || e.destroyed || !e.initialized || s("orientationchange")
        };
    t("init", () => {
        if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
            a();
            return
        }
        n.addEventListener("resize", l), n.addEventListener("orientationchange", u)
    }), t("destroy", () => {
        c(), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", u)
    })
}

function Fe(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: n
    } = i;
    const r = [],
        o = B(),
        l = function(u, f) {
            f === void 0 && (f = {});
            const h = o.MutationObserver || o.WebkitMutationObserver,
                m = new h(g => {
                    if (e.__preventObserver__) return;
                    if (g.length === 1) {
                        n("observerUpdate", g[0]);
                        return
                    }
                    const w = function() {
                        n("observerUpdate", g[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(w) : o.setTimeout(w, 0)
                });
            m.observe(u, {
                attributes: typeof f.attributes > "u" ? !0 : f.attributes,
                childList: typeof f.childList > "u" ? !0 : f.childList,
                characterData: typeof f.characterData > "u" ? !0 : f.characterData
            }), r.push(m)
        },
        a = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const u = ye(e.hostEl);
                    for (let f = 0; f < u.length; f += 1) l(u[f])
                }
                l(e.hostEl, {
                    childList: e.params.observeSlideChildren
                }), l(e.wrapperEl, {
                    attributes: !1
                })
            }
        },
        c = () => {
            r.forEach(u => {
                u.disconnect()
            }), r.splice(0, r.length)
        };
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), s("init", a), s("destroy", c)
}
var Ne = {
    on(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
        const n = t ? "unshift" : "push";
        return i.split(" ").forEach(r => {
            s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e)
        }), s
    },
    once(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;

        function n() {
            s.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l];
            e.apply(s, o)
        }
        return n.__emitterProxy = e, s.on(i, n, t)
    },
    onAny(i, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
        const s = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t
    },
    offAny(i) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
        const t = e.eventsAnyListeners.indexOf(i);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
    },
    off(i, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s => {
            typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((n, r) => {
                (n === e || n.__emitterProxy && n.__emitterProxy === e) && t.eventsListeners[s].splice(r, 1)
            })
        }), t
    },
    emit() {
        const i = this;
        if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
        let e, t, s;
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), s = i) : (e = r[0].events, t = r[0].data, s = r[0].context || i), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach(a => {
            i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(c => {
                c.apply(s, [a, ...t])
            }), i.eventsListeners && i.eventsListeners[a] && i.eventsListeners[a].forEach(c => {
                c.apply(s, t)
            })
        }), i
    }
};

function _e() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(H(s, "padding-left") || 0, 10) - parseInt(H(s, "padding-right") || 0, 10), t = t - parseInt(H(s, "padding-top") || 0, 10) - parseInt(H(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t
    }))
}

function He() {
    const i = this;

    function e(b, C) {
        return parseFloat(b.getPropertyValue(i.getDirectionLabel(C)) || 0)
    }
    const t = i.params,
        {
            wrapperEl: s,
            slidesEl: n,
            size: r,
            rtlTranslate: o,
            wrongRTL: l
        } = i,
        a = i.virtual && t.virtual.enabled,
        c = a ? i.virtual.slides.length : i.slides.length,
        u = F(n, `.${i.params.slideClass}, swiper-slide`),
        f = a ? i.virtual.slides.length : u.length;
    let h = [];
    const m = [],
        g = [];
    let w = t.slidesOffsetBefore;
    typeof w == "function" && (w = t.slidesOffsetBefore.call(i));
    let S = t.slidesOffsetAfter;
    typeof S == "function" && (S = t.slidesOffsetAfter.call(i));
    const d = i.snapGrid.length,
        p = i.slidesGrid.length;
    let v = t.spaceBetween,
        y = -w,
        x = 0,
        M = 0;
    if (typeof r > "u") return;
    typeof v == "string" && v.indexOf("%") >= 0 ? v = parseFloat(v.replace("%", "")) / 100 * r : typeof v == "string" && (v = parseFloat(v)), i.virtualSize = -v, u.forEach(b => {
        o ? b.style.marginLeft = "" : b.style.marginRight = "", b.style.marginBottom = "", b.style.marginTop = ""
    }), t.centeredSlides && t.cssMode && (Y(s, "--swiper-centered-offset-before", ""), Y(s, "--swiper-centered-offset-after", ""));
    const G = t.grid && t.grid.rows > 1 && i.grid;
    G ? i.grid.initSlides(u) : i.grid && i.grid.unsetSlides();
    let P;
    const A = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(b => typeof t.breakpoints[b].slidesPerView < "u").length > 0;
    for (let b = 0; b < f; b += 1) {
        P = 0;
        let C;
        if (u[b] && (C = u[b]), G && i.grid.updateSlide(b, C, u), !(u[b] && H(C, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                A && (u[b].style[i.getDirectionLabel("width")] = "");
                const E = getComputedStyle(C),
                    T = C.style.transform,
                    L = C.style.webkitTransform;
                if (T && (C.style.transform = "none"), L && (C.style.webkitTransform = "none"), t.roundLengths) P = i.isHorizontal() ? oe(C, "width", !0) : oe(C, "height", !0);
                else {
                    const O = e(E, "width"),
                        N = e(E, "padding-left"),
                        ee = e(E, "padding-right"),
                        I = e(E, "margin-left"),
                        $ = e(E, "margin-right"),
                        D = E.getPropertyValue("box-sizing");
                    if (D && D === "border-box") P = O + I + $;
                    else {
                        const {
                            clientWidth: R,
                            offsetWidth: W
                        } = C;
                        P = O + N + ee + I + $ + (W - R)
                    }
                }
                T && (C.style.transform = T), L && (C.style.webkitTransform = L), t.roundLengths && (P = Math.floor(P))
            } else P = (r - (t.slidesPerView - 1) * v) / t.slidesPerView, t.roundLengths && (P = Math.floor(P)), u[b] && (u[b].style[i.getDirectionLabel("width")] = `${P}px`);
            u[b] && (u[b].swiperSlideSize = P), g.push(P), t.centeredSlides ? (y = y + P / 2 + x / 2 + v, x === 0 && b !== 0 && (y = y - r / 2 - v), b === 0 && (y = y - r / 2 - v), Math.abs(y) < 1 / 1e3 && (y = 0), t.roundLengths && (y = Math.floor(y)), M % t.slidesPerGroup === 0 && h.push(y), m.push(y)) : (t.roundLengths && (y = Math.floor(y)), (M - Math.min(i.params.slidesPerGroupSkip, M)) % i.params.slidesPerGroup === 0 && h.push(y), m.push(y), y = y + P + v), i.virtualSize += P + v, x = P, M += 1
        }
    }
    if (i.virtualSize = Math.max(i.virtualSize, r) + S, o && l && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize+v}px`), t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize+v}px`), G && i.grid.updateWrapperSize(P, h), !t.centeredSlides) {
        const b = [];
        for (let C = 0; C < h.length; C += 1) {
            let E = h[C];
            t.roundLengths && (E = Math.floor(E)), h[C] <= i.virtualSize - r && b.push(E)
        }
        h = b, Math.floor(i.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 && h.push(i.virtualSize - r)
    }
    if (a && t.loop) {
        const b = g[0] + v;
        if (t.slidesPerGroup > 1) {
            const C = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup),
                E = b * t.slidesPerGroup;
            for (let T = 0; T < C; T += 1) h.push(h[h.length - 1] + E)
        }
        for (let C = 0; C < i.virtual.slidesBefore + i.virtual.slidesAfter; C += 1) t.slidesPerGroup === 1 && h.push(h[h.length - 1] + b), m.push(m[m.length - 1] + b), i.virtualSize += b
    }
    if (h.length === 0 && (h = [0]), v !== 0) {
        const b = i.isHorizontal() && o ? "marginLeft" : i.getDirectionLabel("marginRight");
        u.filter((C, E) => !t.cssMode || t.loop ? !0 : E !== u.length - 1).forEach(C => {
            C.style[b] = `${v}px`
        })
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let b = 0;
        g.forEach(E => {
            b += E + (v || 0)
        }), b -= v;
        const C = b - r;
        h = h.map(E => E <= 0 ? -w : E > C ? C + S : E)
    }
    if (t.centerInsufficientSlides) {
        let b = 0;
        if (g.forEach(C => {
                b += C + (v || 0)
            }), b -= v, b < r) {
            const C = (r - b) / 2;
            h.forEach((E, T) => {
                h[T] = E - C
            }), m.forEach((E, T) => {
                m[T] = E + C
            })
        }
    }
    if (Object.assign(i, {
            slides: u,
            snapGrid: h,
            slidesGrid: m,
            slidesSizesGrid: g
        }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        Y(s, "--swiper-centered-offset-before", `${-h[0]}px`), Y(s, "--swiper-centered-offset-after", `${i.size/2-g[g.length-1]/2}px`);
        const b = -i.snapGrid[0],
            C = -i.slidesGrid[0];
        i.snapGrid = i.snapGrid.map(E => E + b), i.slidesGrid = i.slidesGrid.map(E => E + C)
    }
    if (f !== c && i.emit("slidesLengthChange"), h.length !== d && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), m.length !== p && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const b = `${t.containerModifierClass}backface-hidden`,
            C = i.el.classList.contains(b);
        f <= t.maxBackfaceHiddenSlides ? C || i.el.classList.add(b) : C && i.el.classList.remove(b)
    }
}

function Re(i) {
    const e = this,
        t = [],
        s = e.virtual && e.params.virtual.enabled;
    let n = 0,
        r;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const o = l => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)(e.visibleSlides || []).forEach(l => {
            t.push(l)
        });
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const l = e.activeIndex + r;
                if (l > e.slides.length && !s) break;
                t.push(o(l))
            } else t.push(o(e.activeIndex));
    for (r = 0; r < t.length; r += 1)
        if (typeof t[r] < "u") {
            const l = t[r].offsetHeight;
            n = l > n ? l : n
        }(n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}

function qe() {
    const i = this,
        e = i.slides,
        t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment()
}

function je(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this,
        t = e.params,
        {
            slides: s,
            rtlTranslate: n,
            snapGrid: r
        } = e;
    if (s.length === 0) return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -i;
    n && (o = i), s.forEach(a => {
        a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < s.length; a += 1) {
        const c = s[a];
        let u = c.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (u -= s[0].swiperSlideOffset);
        const f = (o + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + l),
            h = (o - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + l),
            m = -(o - u),
            g = m + e.slidesSizesGrid[a],
            w = m >= 0 && m <= e.size - e.slidesSizesGrid[a];
        (m >= 0 && m < e.size - 1 || g > 1 && g <= e.size || m <= 0 && g >= e.size) && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(a), s[a].classList.add(t.slideVisibleClass)), w && s[a].classList.add(t.slideFullyVisibleClass), c.progress = n ? -f : f, c.originalProgress = n ? -h : h
    }
}

function We(i) {
    const e = this;
    if (typeof i > "u") {
        const u = e.rtlTranslate ? -1 : 1;
        i = e && e.translate && e.translate * u || 0
    }
    const t = e.params,
        s = e.maxTranslate() - e.minTranslate();
    let {
        progress: n,
        isBeginning: r,
        isEnd: o,
        progressLoop: l
    } = e;
    const a = r,
        c = o;
    if (s === 0) n = 0, r = !0, o = !0;
    else {
        n = (i - e.minTranslate()) / s;
        const u = Math.abs(i - e.minTranslate()) < 1,
            f = Math.abs(i - e.maxTranslate()) < 1;
        r = u || n <= 0, o = f || n >= 1, u && (n = 0), f && (n = 1)
    }
    if (t.loop) {
        const u = e.getSlideIndexByData(0),
            f = e.getSlideIndexByData(e.slides.length - 1),
            h = e.slidesGrid[u],
            m = e.slidesGrid[f],
            g = e.slidesGrid[e.slidesGrid.length - 1],
            w = Math.abs(i);
        w >= h ? l = (w - h) / g : l = (w + g - m) / g, l > 1 && (l -= 1)
    }
    Object.assign(e, {
        progress: n,
        progressLoop: l,
        isBeginning: r,
        isEnd: o
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), r && !a && e.emit("reachBeginning toEdge"), o && !c && e.emit("reachEnd toEdge"), (a && !r || c && !o) && e.emit("fromEdge"), e.emit("progress", n)
}

function Ye() {
    const i = this,
        {
            slides: e,
            params: t,
            slidesEl: s,
            activeIndex: n
        } = i,
        r = i.virtual && t.virtual.enabled,
        o = i.grid && t.grid && t.grid.rows > 1,
        l = f => F(s, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
    e.forEach(f => {
        f.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
    });
    let a, c, u;
    if (r)
        if (t.loop) {
            let f = n - i.virtual.slidesBefore;
            f < 0 && (f = i.virtual.slides.length + f), f >= i.virtual.slides.length && (f -= i.virtual.slides.length), a = l(`[data-swiper-slide-index="${f}"]`)
        } else a = l(`[data-swiper-slide-index="${n}"]`);
    else o ? (a = e.filter(f => f.column === n)[0], u = e.filter(f => f.column === n + 1)[0], c = e.filter(f => f.column === n - 1)[0]) : a = e[n];
    a && (a.classList.add(t.slideActiveClass), o ? (u && u.classList.add(t.slideNextClass), c && c.classList.add(t.slidePrevClass)) : (u = ke(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !u && (u = e[0]), u && u.classList.add(t.slideNextClass), c = ze(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c === 0 && (c = e[e.length - 1]), c && c.classList.add(t.slidePrevClass))), i.emitSlidesClasses()
}
const U = (i, e) => {
        if (!i || i.destroyed || !i.params) return;
        const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`,
            s = e.closest(t());
        if (s) {
            let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
            !n && i.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                s.shadowRoot && (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), n && n.remove())
            })), n && n.remove()
        }
    },
    re = (i, e) => {
        if (!i.slides[e]) return;
        const t = i.slides[e].querySelector('[loading="lazy"]');
        t && t.removeAttribute("loading")
    },
    de = i => {
        if (!i || i.destroyed || !i.params) return;
        let e = i.params.lazyPreloadPrevNext;
        const t = i.slides.length;
        if (!t || !e || e < 0) return;
        e = Math.min(e, t);
        const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView),
            n = i.activeIndex;
        if (i.params.grid && i.params.grid.rows > 1) {
            const o = n,
                l = [o - e];
            l.push(...Array.from({
                length: e
            }).map((a, c) => o + s + c)), i.slides.forEach((a, c) => {
                l.includes(a.column) && re(i, c)
            });
            return
        }
        const r = n + s - 1;
        if (i.params.rewind || i.params.loop)
            for (let o = n - e; o <= r + e; o += 1) {
                const l = (o % t + t) % t;
                (l < n || l > r) && re(i, l)
            } else
                for (let o = Math.max(n - e, 0); o <= Math.min(r + e, t - 1); o += 1) o !== n && (o > r || o < n) && re(i, o)
    };

function Xe(i) {
    const {
        slidesGrid: e,
        params: t
    } = i, s = i.rtlTranslate ? i.translate : -i.translate;
    let n;
    for (let r = 0; r < e.length; r += 1) typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
    return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n
}

function Ue(i) {
    const e = this,
        t = e.rtlTranslate ? e.translate : -e.translate,
        {
            snapGrid: s,
            params: n,
            activeIndex: r,
            realIndex: o,
            snapIndex: l
        } = e;
    let a = i,
        c;
    const u = m => {
        let g = m - e.virtual.slidesBefore;
        return g < 0 && (g = e.virtual.slides.length + g), g >= e.virtual.slides.length && (g -= e.virtual.slides.length), g
    };
    if (typeof a > "u" && (a = Xe(e)), s.indexOf(t) >= 0) c = s.indexOf(t);
    else {
        const m = Math.min(n.slidesPerGroupSkip, a);
        c = m + Math.floor((a - m) / n.slidesPerGroup)
    }
    if (c >= s.length && (c = s.length - 1), a === r && !e.params.loop) {
        c !== l && (e.snapIndex = c, e.emit("snapIndexChange"));
        return
    }
    if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = u(a);
        return
    }
    const f = e.grid && n.grid && n.grid.rows > 1;
    let h;
    if (e.virtual && n.virtual.enabled && n.loop) h = u(a);
    else if (f) {
        const m = e.slides.filter(w => w.column === a)[0];
        let g = parseInt(m.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(g) && (g = Math.max(e.slides.indexOf(m), 0)), h = Math.floor(g / n.grid.rows)
    } else if (e.slides[a]) {
        const m = e.slides[a].getAttribute("data-swiper-slide-index");
        m ? h = parseInt(m, 10) : h = a
    } else h = a;
    Object.assign(e, {
        previousSnapIndex: l,
        snapIndex: c,
        previousRealIndex: o,
        realIndex: h,
        previousIndex: r,
        activeIndex: a
    }), e.initialized && de(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit("realIndexChange"), e.emit("slideChange"))
}

function Ke(i, e) {
    const t = this,
        s = t.params;
    let n = i.closest(`.${s.slideClass}, swiper-slide`);
    !n && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(l => {
        !n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l)
    });
    let r = !1,
        o;
    if (n) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === n) {
                r = !0, o = l;
                break
            }
    }
    if (n && r) t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
    else {
        t.clickedSlide = void 0, t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var Je = {
    updateSize: _e,
    updateSlides: He,
    updateAutoHeight: Re,
    updateSlidesOffset: qe,
    updateSlidesProgress: je,
    updateProgress: We,
    updateSlidesClasses: Ye,
    updateActiveIndex: Ue,
    updateClickedSlide: Ke
};

function Qe(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this,
        {
            params: t,
            rtlTranslate: s,
            translate: n,
            wrapperEl: r
        } = e;
    if (t.virtualTranslate) return s ? -n : n;
    if (t.cssMode) return n;
    let o = Ae(r, i);
    return o += e.cssOverflowAdjustment(), s && (o = -o), o || 0
}

function Ze(i, e) {
    const t = this,
        {
            rtlTranslate: s,
            params: n,
            wrapperEl: r,
            progress: o
        } = t;
    let l = 0,
        a = 0;
    const c = 0;
    t.isHorizontal() ? l = s ? -i : i : a = i, n.roundLengths && (l = Math.floor(l), a = Math.floor(a)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : a, n.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -a : n.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`);
    let u;
    const f = t.maxTranslate() - t.minTranslate();
    f === 0 ? u = 0 : u = (i - t.minTranslate()) / f, u !== o && t.updateProgress(i), t.emit("setTranslate", t.translate, e)
}

function et() {
    return -this.snapGrid[0]
}

function tt() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function it(i, e, t, s, n) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
    const r = this,
        {
            params: o,
            wrapperEl: l
        } = r;
    if (r.animating && o.preventInteractionOnTransition) return !1;
    const a = r.minTranslate(),
        c = r.maxTranslate();
    let u;
    if (s && i > a ? u = a : s && i < c ? u = c : u = i, r.updateProgress(u), o.cssMode) {
        const f = r.isHorizontal();
        if (e === 0) l[f ? "scrollLeft" : "scrollTop"] = -u;
        else {
            if (!r.support.smoothScroll) return Se({
                swiper: r,
                targetPosition: -u,
                side: f ? "left" : "top"
            }), !0;
            l.scrollTo({
                [f ? "left" : "top"]: -u,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0), r.setTranslate(u), t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(u), t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(h) {
        !r || r.destroyed || h.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, t && r.emit("transitionEnd"))
    }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
var st = {
    getTranslate: Qe,
    setTranslate: Ze,
    minTranslate: et,
    maxTranslate: tt,
    translateTo: it
};

function rt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e)
}

function xe(i) {
    let {
        swiper: e,
        runCallbacks: t,
        direction: s,
        step: n
    } = i;
    const {
        activeIndex: r,
        previousIndex: o
    } = e;
    let l = s;
    if (l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"), e.emit(`transition${n}`), t && r !== o) {
        if (l === "reset") {
            e.emit(`slideResetTransition${n}`);
            return
        }
        e.emit(`slideChangeTransition${n}`), l === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
    }
}

function nt(i, e) {
    i === void 0 && (i = !0);
    const t = this,
        {
            params: s
        } = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(), xe({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "Start"
    }))
}

function at(i, e) {
    i === void 0 && (i = !0);
    const t = this,
        {
            params: s
        } = t;
    t.animating = !1, !s.cssMode && (t.setTransition(0), xe({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "End"
    }))
}
var lt = {
    setTransition: rt,
    transitionStart: nt,
    transitionEnd: at
};

function ot(i, e, t, s, n) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const r = this;
    let o = i;
    o < 0 && (o = 0);
    const {
        params: l,
        snapGrid: a,
        slidesGrid: c,
        previousIndex: u,
        activeIndex: f,
        rtlTranslate: h,
        wrapperEl: m,
        enabled: g
    } = r;
    if (r.animating && l.preventInteractionOnTransition || !g && !s && !n || r.destroyed) return !1;
    const w = Math.min(r.params.slidesPerGroupSkip, o);
    let S = w + Math.floor((o - w) / r.params.slidesPerGroup);
    S >= a.length && (S = a.length - 1);
    const d = -a[S];
    if (l.normalizeSlideIndex)
        for (let v = 0; v < c.length; v += 1) {
            const y = -Math.floor(d * 100),
                x = Math.floor(c[v] * 100),
                M = Math.floor(c[v + 1] * 100);
            typeof c[v + 1] < "u" ? y >= x && y < M - (M - x) / 2 ? o = v : y >= x && y < M && (o = v + 1) : y >= x && (o = v)
        }
    if (r.initialized && o !== f && (!r.allowSlideNext && (h ? d > r.translate && d > r.minTranslate() : d < r.translate && d < r.minTranslate()) || !r.allowSlidePrev && d > r.translate && d > r.maxTranslate() && (f || 0) !== o)) return !1;
    o !== (u || 0) && t && r.emit("beforeSlideChangeStart"), r.updateProgress(d);
    let p;
    if (o > f ? p = "next" : o < f ? p = "prev" : p = "reset", h && -d === r.translate || !h && d === r.translate) return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), l.effect !== "slide" && r.setTranslate(d), p !== "reset" && (r.transitionStart(t, p), r.transitionEnd(t, p)), !1;
    if (l.cssMode) {
        const v = r.isHorizontal(),
            y = h ? d : -d;
        if (e === 0) {
            const x = r.virtual && r.params.virtual.enabled;
            x && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), x && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                m[v ? "scrollLeft" : "scrollTop"] = y
            })) : m[v ? "scrollLeft" : "scrollTop"] = y, x && requestAnimationFrame(() => {
                r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
            })
        } else {
            if (!r.support.smoothScroll) return Se({
                swiper: r,
                targetPosition: y,
                side: v ? "left" : "top"
            }), !0;
            m.scrollTo({
                [v ? "left" : "top"]: y,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e), r.setTranslate(d), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(t, p), e === 0 ? r.transitionEnd(t, p) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(y) {
        !r || r.destroyed || y.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(t, p))
    }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function dt(i, e, t, s) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const n = this;
    if (n.destroyed) return;
    const r = n.grid && n.params.grid && n.params.grid.rows > 1;
    let o = i;
    if (n.params.loop)
        if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
        else {
            let l;
            if (r) {
                const h = o * n.params.grid.rows;
                l = n.slides.filter(m => m.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else l = n.getSlideIndexByData(o);
            const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
                {
                    centeredSlides: c
                } = n.params;
            let u = n.params.slidesPerView;
            u === "auto" ? u = n.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(n.params.slidesPerView, 10)), c && u % 2 === 0 && (u = u + 1));
            let f = a - l < u;
            if (c && (f = f || l < Math.ceil(u / 2)), f) {
                const h = c ? l < n.activeIndex ? "prev" : "next" : l - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                n.loopFix({
                    direction: h,
                    slideTo: !0,
                    activeSlideIndex: h === "next" ? l + 1 : l - a + 1,
                    slideRealIndex: h === "next" ? n.realIndex : void 0
                })
            }
            if (r) {
                const h = o * n.params.grid.rows;
                o = n.slides.filter(m => m.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else o = n.getSlideIndexByData(o)
        }
    return requestAnimationFrame(() => {
        n.slideTo(o, e, t, s)
    }), n
}

function ct(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this,
        {
            enabled: n,
            params: r,
            animating: o
        } = s;
    if (!n || s.destroyed) return s;
    let l = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        c = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (o && !c && r.loopPreventsSliding) return !1;
        if (s.loopFix({
                direction: "next"
            }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
            s.slideTo(s.activeIndex + a, i, e, t)
        }), !0
    }
    return r.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + a, i, e, t)
}

function ut(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this,
        {
            params: n,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: a,
            animating: c
        } = s;
    if (!a || s.destroyed) return s;
    const u = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (c && !u && n.loopPreventsSliding) return !1;
        s.loopFix({
            direction: "prev"
        }), s._clientLeft = s.wrapperEl.clientLeft
    }
    const f = l ? s.translate : -s.translate;

    function h(d) {
        return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d)
    }
    const m = h(f),
        g = r.map(d => h(d));
    let w = r[g.indexOf(m) - 1];
    if (typeof w > "u" && n.cssMode) {
        let d;
        r.forEach((p, v) => {
            m >= p && (d = v)
        }), typeof d < "u" && (w = r[d > 0 ? d - 1 : d])
    }
    let S = 0;
    if (typeof w < "u" && (S = o.indexOf(w), S < 0 && (S = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (S = S - s.slidesPerViewDynamic("previous", !0) + 1, S = Math.max(S, 0))), n.rewind && s.isBeginning) {
        const d = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(d, i, e, t)
    } else if (n.loop && s.activeIndex === 0 && n.cssMode) return requestAnimationFrame(() => {
        s.slideTo(S, i, e, t)
    }), !0;
    return s.slideTo(S, i, e, t)
}

function ft(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed) return s.slideTo(s.activeIndex, i, e, t)
}

function pt(i, e, t, s) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = .5);
    const n = this;
    if (n.destroyed) return;
    let r = n.activeIndex;
    const o = Math.min(n.params.slidesPerGroupSkip, r),
        l = o + Math.floor((r - o) / n.params.slidesPerGroup),
        a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[l]) {
        const c = n.snapGrid[l],
            u = n.snapGrid[l + 1];
        a - c > (u - c) * s && (r += n.params.slidesPerGroup)
    } else {
        const c = n.snapGrid[l - 1],
            u = n.snapGrid[l];
        a - c <= (u - c) * s && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, i, e, t)
}

function mt() {
    const i = this;
    if (i.destroyed) return;
    const {
        params: e,
        slidesEl: t
    } = i, s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let n = i.clickedIndex,
        r;
    const o = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (i.animating) return;
        r = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < i.loopedSlides - s / 2 || n > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), n = i.getSlideIndex(F(t, `${o}[data-swiper-slide-index="${r}"]`)[0]), le(() => {
            i.slideTo(n)
        })) : i.slideTo(n) : n > i.slides.length - s ? (i.loopFix(), n = i.getSlideIndex(F(t, `${o}[data-swiper-slide-index="${r}"]`)[0]), le(() => {
            i.slideTo(n)
        })) : i.slideTo(n)
    } else i.slideTo(n)
}
var ht = {
    slideTo: ot,
    slideToLoop: dt,
    slideNext: ct,
    slidePrev: ut,
    slideReset: ft,
    slideToClosest: pt,
    slideToClickedSlide: mt
};

function gt(i) {
    const e = this,
        {
            params: t,
            slidesEl: s
        } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
    const n = () => {
            F(s, `.${t.slideClass}, swiper-slide`).forEach((f, h) => {
                f.setAttribute("data-swiper-slide-index", h)
            })
        },
        r = e.grid && t.grid && t.grid.rows > 1,
        o = t.slidesPerGroup * (r ? t.grid.rows : 1),
        l = e.slides.length % o !== 0,
        a = r && e.slides.length % t.grid.rows !== 0,
        c = u => {
            for (let f = 0; f < u; f += 1) {
                const h = e.isElement ? Q("swiper-slide", [t.slideBlankClass]) : Q("div", [t.slideClass, t.slideBlankClass]);
                e.slidesEl.append(h)
            }
        };
    if (l) {
        if (t.loopAddBlankSlides) {
            const u = o - e.slides.length % o;
            c(u), e.recalcSlides(), e.updateSlides()
        } else J("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else if (a) {
        if (t.loopAddBlankSlides) {
            const u = t.grid.rows - e.slides.length % t.grid.rows;
            c(u), e.recalcSlides(), e.updateSlides()
        } else J("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else n();
    e.loopFix({
        slideRealIndex: i,
        direction: t.centeredSlides ? void 0 : "next"
    })
}

function vt(i) {
    let {
        slideRealIndex: e,
        slideTo: t = !0,
        direction: s,
        setTranslate: n,
        activeSlideIndex: r,
        byController: o,
        byMousewheel: l
    } = i === void 0 ? {} : i;
    const a = this;
    if (!a.params.loop) return;
    a.emit("beforeLoopFix");
    const {
        slides: c,
        allowSlidePrev: u,
        allowSlideNext: f,
        slidesEl: h,
        params: m
    } = a, {
        centeredSlides: g
    } = m;
    if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && m.virtual.enabled) {
        t && (!m.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : m.centeredSlides && a.snapIndex < m.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = u, a.allowSlideNext = f, a.emit("loopFix");
        return
    }
    let w = m.slidesPerView;
    w === "auto" ? w = a.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(m.slidesPerView, 10)), g && w % 2 === 0 && (w = w + 1));
    const S = m.slidesPerGroupAuto ? w : m.slidesPerGroup;
    let d = S;
    d % S !== 0 && (d += S - d % S), d += m.loopAdditionalSlides, a.loopedSlides = d;
    const p = a.grid && m.grid && m.grid.rows > 1;
    c.length < w + d ? J("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : p && m.grid.fill === "row" && J("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const v = [],
        y = [];
    let x = a.activeIndex;
    typeof r > "u" ? r = a.getSlideIndex(c.filter(T => T.classList.contains(m.slideActiveClass))[0]) : x = r;
    const M = s === "next" || !s,
        G = s === "prev" || !s;
    let P = 0,
        A = 0;
    const b = p ? Math.ceil(c.length / m.grid.rows) : c.length,
        E = (p ? c[r].column : r) + (g && typeof n > "u" ? -w / 2 + .5 : 0);
    if (E < d) {
        P = Math.max(d - E, S);
        for (let T = 0; T < d - E; T += 1) {
            const L = T - Math.floor(T / b) * b;
            if (p) {
                const O = b - L - 1;
                for (let N = c.length - 1; N >= 0; N -= 1) c[N].column === O && v.push(N)
            } else v.push(b - L - 1)
        }
    } else if (E + w > b - d) {
        A = Math.max(E - (b - d * 2), S);
        for (let T = 0; T < A; T += 1) {
            const L = T - Math.floor(T / b) * b;
            p ? c.forEach((O, N) => {
                O.column === L && y.push(N)
            }) : y.push(L)
        }
    }
    if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
            a.__preventObserver__ = !1
        }), G && v.forEach(T => {
            c[T].swiperLoopMoveDOM = !0, h.prepend(c[T]), c[T].swiperLoopMoveDOM = !1
        }), M && y.forEach(T => {
            c[T].swiperLoopMoveDOM = !0, h.append(c[T]), c[T].swiperLoopMoveDOM = !1
        }), a.recalcSlides(), m.slidesPerView === "auto" ? a.updateSlides() : p && (v.length > 0 && G || y.length > 0 && M) && a.slides.forEach((T, L) => {
            a.grid.updateSlide(L, T, a.slides)
        }), m.watchSlidesProgress && a.updateSlidesOffset(), t) {
        if (v.length > 0 && G) {
            if (typeof e > "u") {
                const T = a.slidesGrid[x],
                    O = a.slidesGrid[x + P] - T;
                l ? a.setTranslate(a.translate - O) : (a.slideTo(x + P, 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - O, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - O))
            } else if (n) {
                const T = p ? v.length / m.grid.rows : v.length;
                a.slideTo(a.activeIndex + T, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate
            }
        } else if (y.length > 0 && M)
            if (typeof e > "u") {
                const T = a.slidesGrid[x],
                    O = a.slidesGrid[x - A] - T;
                l ? a.setTranslate(a.translate - O) : (a.slideTo(x - A, 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - O, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - O))
            } else {
                const T = p ? y.length / m.grid.rows : y.length;
                a.slideTo(a.activeIndex - T, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = u, a.allowSlideNext = f, a.controller && a.controller.control && !o) {
        const T = {
            slideRealIndex: e,
            direction: s,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(L => {
            !L.destroyed && L.params.loop && L.loopFix({ ...T,
                slideTo: L.params.slidesPerView === m.slidesPerView ? t : !1
            })
        }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({ ...T,
            slideTo: a.controller.control.params.slidesPerView === m.slidesPerView ? t : !1
        })
    }
    a.emit("loopFix")
}

function wt() {
    const i = this,
        {
            params: e,
            slidesEl: t
        } = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled) return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach(n => {
        const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
        s[r] = n
    }), i.slides.forEach(n => {
        n.removeAttribute("data-swiper-slide-index")
    }), s.forEach(n => {
        t.append(n)
    }), i.recalcSlides(), i.slideTo(i.realIndex, 0)
}
var St = {
    loopCreate: gt,
    loopFix: vt,
    loopDestroy: wt
};

function yt(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
        e.__preventObserver__ = !1
    })
}

function bt() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
        i.__preventObserver__ = !1
    }))
}
var Tt = {
    setGrabCursor: yt,
    unsetGrabCursor: bt
};

function xt(i, e) {
    e === void 0 && (e = this);

    function t(s) {
        if (!s || s === _() || s === B()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const n = s.closest(i);
        return !n && !s.getRootNode ? null : n || t(s.getRootNode().host)
    }
    return t(e)
}

function fe(i, e, t) {
    const s = B(),
        {
            params: n
        } = i,
        r = n.edgeSwipeDetection,
        o = n.edgeSwipeThreshold;
    return r && (t <= o || t >= s.innerWidth - o) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0
}

function Et(i) {
    const e = this,
        t = _();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const n = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
        n.pointerId = s.pointerId
    } else s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        fe(e, s, s.targetTouches[0].pageX);
        return
    }
    const {
        params: r,
        touches: o,
        enabled: l
    } = e;
    if (!l || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition) return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let a = s.target;
    if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || n.isTouched && n.isMoved) return;
    const c = !!r.noSwipingClass && r.noSwipingClass !== "",
        u = s.composedPath ? s.composedPath() : s.path;
    c && s.target && s.target.shadowRoot && u && (a = u[0]);
    const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
        h = !!(s.target && s.target.shadowRoot);
    if (r.noSwiping && (h ? xt(f, a) : a.closest(f))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
    o.currentX = s.pageX, o.currentY = s.pageY;
    const m = o.currentX,
        g = o.currentY;
    if (!fe(e, s, m)) return;
    Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), o.startX = m, o.startY = g, n.touchStartTime = K(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
    let w = !0;
    a.matches(n.focusableElements) && (w = !1, a.nodeName === "SELECT" && (n.isTouched = !1)), t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== a && t.activeElement.blur();
    const S = w && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || S) && !a.isContentEditable && s.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s)
}

function Ct(i) {
    const e = _(),
        t = this,
        s = t.touchEventsData,
        {
            params: n,
            touches: r,
            rtlTranslate: o,
            enabled: l
        } = t;
    if (!l || !n.simulateTouch && i.pointerType === "mouse") return;
    let a = i;
    if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId)) return;
    let c;
    if (a.type === "touchmove") {
        if (c = [...a.changedTouches].filter(M => M.identifier === s.touchId)[0], !c || c.identifier !== s.touchId) return
    } else c = a;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", a);
        return
    }
    const u = c.pageX,
        f = c.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = u, r.startY = f;
        return
    }
    if (!t.allowTouchMove) {
        a.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(r, {
            startX: u,
            startY: f,
            currentX: u,
            currentY: f
        }), s.touchStartTime = K());
        return
    }
    if (n.touchReleaseOnEdges && !n.loop) {
        if (t.isVertical()) {
            if (f < r.startY && t.translate <= t.maxTranslate() || f > r.startY && t.translate >= t.minTranslate()) {
                s.isTouched = !1, s.isMoved = !1;
                return
            }
        } else if (u < r.startX && t.translate <= t.maxTranslate() || u > r.startX && t.translate >= t.minTranslate()) return
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
        s.isMoved = !0, t.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && t.emit("touchMove", a), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = u, r.currentY = f;
    const h = r.currentX - r.startX,
        m = r.currentY - r.startY;
    if (t.params.threshold && Math.sqrt(h ** 2 + m ** 2) < t.params.threshold) return;
    if (typeof s.isScrolling > "u") {
        let M;
        t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : h * h + m * m >= 25 && (M = Math.atan2(Math.abs(m), Math.abs(h)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? M > n.touchAngle : 90 - M > n.touchAngle)
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving) return;
    t.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
    let g = t.isHorizontal() ? h : m,
        w = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    n.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1), w = Math.abs(w) * (o ? 1 : -1)), r.diff = g, g *= n.touchRatio, o && (g = -g, w = -w);
    const S = t.touchesDirection;
    t.swipeDirection = g > 0 ? "prev" : "next", t.touchesDirection = w > 0 ? "prev" : "next";
    const d = t.params.loop && !n.cssMode,
        p = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
        if (d && p && t.loopFix({
                direction: t.swipeDirection
            }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
            const M = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(M)
        }
        s.allowMomentumBounce = !1, n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", a)
    }
    let v;
    if (new Date().getTime(), s.isMoved && s.allowThresholdMove && S !== t.touchesDirection && d && p && Math.abs(g) >= 1) {
        Object.assign(r, {
            startX: u,
            startY: f,
            currentX: u,
            currentY: f,
            startTranslate: s.currentTranslate
        }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
        return
    }
    t.emit("sliderMove", a), s.isMoved = !0, s.currentTranslate = g + s.startTranslate;
    let y = !0,
        x = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (x = 0), g > 0 ? (d && p && !v && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), s.currentTranslate > t.minTranslate() && (y = !1, n.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + g) ** x))) : g < 0 && (d && p && !v && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
        }), s.currentTranslate < t.maxTranslate() && (y = !1, n.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - g) ** x))), y && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
        if (Math.abs(g) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }!n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && t.freeMode || n.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate))
}

function Pt(i) {
    const e = this,
        t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let n;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (n = [...s.changedTouches].filter(x => x.identifier === t.touchId)[0], !n || n.identifier !== t.touchId) return
    } else {
        if (t.touchId !== null || s.pointerId !== t.pointerId) return;
        n = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))) return;
    t.pointerId = null, t.touchId = null;
    const {
        params: o,
        touches: l,
        rtlTranslate: a,
        slidesGrid: c,
        enabled: u
    } = e;
    if (!u || !o.simulateTouch && s.pointerType === "mouse") return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
        t.isMoved && o.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
        return
    }
    o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const f = K(),
        h = f - t.touchStartTime;
    if (e.allowClick) {
        const x = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(x && x[0] || s.target, x), e.emit("tap click", s), h < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (t.lastClickTime = K(), le(() => {
            e.destroyed || (e.allowClick = !0)
        }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
        return
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let m;
    if (o.followFinger ? m = a ? e.translate : -e.translate : m = -t.currentTranslate, o.cssMode) return;
    if (o.freeMode && o.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: m
        });
        return
    }
    const g = m >= -e.maxTranslate() && !e.params.loop;
    let w = 0,
        S = e.slidesSizesGrid[0];
    for (let x = 0; x < c.length; x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const M = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof c[x + M] < "u" ? (g || m >= c[x] && m < c[x + M]) && (w = x, S = c[x + M] - c[x]) : (g || m >= c[x]) && (w = x, S = c[c.length - 1] - c[c.length - 2])
    }
    let d = null,
        p = null;
    o.rewind && (e.isBeginning ? p = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (d = 0));
    const v = (m - c[w]) / S,
        y = w < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (h > o.longSwipesMs) {
        if (!o.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (v >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? d : w + y) : e.slideTo(w)), e.swipeDirection === "prev" && (v > 1 - o.longSwipesRatio ? e.slideTo(w + y) : p !== null && v < 0 && Math.abs(v) > o.longSwipesRatio ? e.slideTo(p) : e.slideTo(w))
    } else {
        if (!o.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(w + y) : e.slideTo(w) : (e.swipeDirection === "next" && e.slideTo(d !== null ? d : w + y), e.swipeDirection === "prev" && e.slideTo(p !== null ? p : w))
    }
}

function pe() {
    const i = this,
        {
            params: e,
            el: t
        } = i;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && i.setBreakpoint();
    const {
        allowSlideNext: s,
        allowSlidePrev: n,
        snapGrid: r
    } = i, o = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
    const l = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !l ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !o ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume()
    }, 500)), i.allowSlidePrev = n, i.allowSlideNext = s, i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow()
}

function Mt(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())))
}

function Lt() {
    const i = this,
        {
            wrapperEl: e,
            rtlTranslate: t,
            enabled: s
        } = i;
    if (!s) return;
    i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
    let n;
    const r = i.maxTranslate() - i.minTranslate();
    r === 0 ? n = 0 : n = (i.translate - i.minTranslate()) / r, n !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1)
}

function It(i) {
    const e = this;
    U(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}

function At() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"))
}
const Ee = (i, e) => {
    const t = _(),
        {
            params: s,
            el: n,
            wrapperEl: r,
            device: o
        } = i,
        l = !!s.nested,
        a = e === "on" ? "addEventListener" : "removeEventListener",
        c = e;
    t[a]("touchstart", i.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }), n[a]("touchstart", i.onTouchStart, {
        passive: !1
    }), n[a]("pointerdown", i.onTouchStart, {
        passive: !1
    }), t[a]("touchmove", i.onTouchMove, {
        passive: !1,
        capture: l
    }), t[a]("pointermove", i.onTouchMove, {
        passive: !1,
        capture: l
    }), t[a]("touchend", i.onTouchEnd, {
        passive: !0
    }), t[a]("pointerup", i.onTouchEnd, {
        passive: !0
    }), t[a]("pointercancel", i.onTouchEnd, {
        passive: !0
    }), t[a]("touchcancel", i.onTouchEnd, {
        passive: !0
    }), t[a]("pointerout", i.onTouchEnd, {
        passive: !0
    }), t[a]("pointerleave", i.onTouchEnd, {
        passive: !0
    }), t[a]("contextmenu", i.onTouchEnd, {
        passive: !0
    }), (s.preventClicks || s.preventClicksPropagation) && n[a]("click", i.onClick, !0), s.cssMode && r[a]("scroll", i.onScroll), s.updateOnWindowResize ? i[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", pe, !0) : i[c]("observerUpdate", pe, !0), n[a]("load", i.onLoad, {
        capture: !0
    })
};

function Ot() {
    const i = this,
        {
            params: e
        } = i;
    i.onTouchStart = Et.bind(i), i.onTouchMove = Ct.bind(i), i.onTouchEnd = Pt.bind(i), i.onDocumentTouchStart = At.bind(i), e.cssMode && (i.onScroll = Lt.bind(i)), i.onClick = Mt.bind(i), i.onLoad = It.bind(i), Ee(i, "on")
}

function zt() {
    Ee(this, "off")
}
var kt = {
    attachEvents: Ot,
    detachEvents: zt
};
const me = (i, e) => i.grid && e.grid && e.grid.rows > 1;

function Dt() {
    const i = this,
        {
            realIndex: e,
            initialized: t,
            params: s,
            el: n
        } = i,
        r = s.breakpoints;
    if (!r || r && Object.keys(r).length === 0) return;
    const o = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
    if (!o || i.currentBreakpoint === o) return;
    const a = (o in r ? r[o] : void 0) || i.originalParams,
        c = me(i, s),
        u = me(i, a),
        f = s.enabled;
    c && !u ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses()) : !c && u && (n.classList.add(`${s.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), i.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(d => {
        if (typeof a[d] > "u") return;
        const p = s[d] && s[d].enabled,
            v = a[d] && a[d].enabled;
        p && !v && i[d].disable(), !p && v && i[d].enable()
    });
    const h = a.direction && a.direction !== s.direction,
        m = s.loop && (a.slidesPerView !== s.slidesPerView || h),
        g = s.loop;
    h && t && i.changeDirection(), V(i.params, a);
    const w = i.params.enabled,
        S = i.params.loop;
    Object.assign(i, {
        allowTouchMove: i.params.allowTouchMove,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev
    }), f && !w ? i.disable() : !f && w && i.enable(), i.currentBreakpoint = o, i.emit("_beforeBreakpoint", a), t && (m ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !g && S ? (i.loopCreate(e), i.updateSlides()) : g && !S && i.loopDestroy()), i.emit("breakpoint", a)
}

function Gt(i, e, t) {
    if (e === void 0 && (e = "window"), !i || e === "container" && !t) return;
    let s = !1;
    const n = B(),
        r = e === "window" ? n.innerHeight : t.clientHeight,
        o = Object.keys(i).map(l => {
            if (typeof l == "string" && l.indexOf("@") === 0) {
                const a = parseFloat(l.substr(1));
                return {
                    value: r * a,
                    point: l
                }
            }
            return {
                value: l,
                point: l
            }
        });
    o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < o.length; l += 1) {
        const {
            point: a,
            value: c
        } = o[l];
        e === "window" ? n.matchMedia(`(min-width: ${c}px)`).matches && (s = a) : c <= t.clientWidth && (s = a)
    }
    return s || "max"
}
var Vt = {
    setBreakpoint: Dt,
    getBreakpoint: Gt
};

function Bt(i, e) {
    const t = [];
    return i.forEach(s => {
        typeof s == "object" ? Object.keys(s).forEach(n => {
            s[n] && t.push(e + n)
        }) : typeof s == "string" && t.push(e + s)
    }), t
}

function $t() {
    const i = this,
        {
            classNames: e,
            params: t,
            rtl: s,
            el: n,
            device: r
        } = i,
        o = Bt(["initialized", t.direction, {
            "free-mode": i.params.freeMode && t.freeMode.enabled
        }, {
            autoheight: t.autoHeight
        }, {
            rtl: s
        }, {
            grid: t.grid && t.grid.rows > 1
        }, {
            "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
        }, {
            android: r.android
        }, {
            ios: r.ios
        }, {
            "css-mode": t.cssMode
        }, {
            centered: t.cssMode && t.centeredSlides
        }, {
            "watch-progress": t.watchSlidesProgress
        }], t.containerModifierClass);
    e.push(...o), n.classList.add(...e), i.emitContainerClasses()
}

function Ft() {
    const i = this,
        {
            el: e,
            classNames: t
        } = i;
    e.classList.remove(...t), i.emitContainerClasses()
}
var Nt = {
    addClasses: $t,
    removeClasses: Ft
};

function _t() {
    const i = this,
        {
            isLocked: e,
            params: t
        } = i,
        {
            slidesOffsetBefore: s
        } = t;
    if (s) {
        const n = i.slides.length - 1,
            r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
        i.isLocked = i.size > r
    } else i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
}
var Ht = {
        checkOverflow: _t
    },
    he = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function Rt(i, e) {
    return function(s) {
        s === void 0 && (s = {});
        const n = Object.keys(s)[0],
            r = s[n];
        if (typeof r != "object" || r === null) {
            V(e, s);
            return
        }
        if (i[n] === !0 && (i[n] = {
                enabled: !0
            }), n === "navigation" && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0), !(n in i && "enabled" in r)) {
            V(e, s);
            return
        }
        typeof i[n] == "object" && !("enabled" in i[n]) && (i[n].enabled = !0), i[n] || (i[n] = {
            enabled: !1
        }), V(e, s)
    }
}
const ne = {
        eventsEmitter: Ne,
        update: Je,
        translate: st,
        transition: lt,
        slide: ht,
        loop: St,
        grabCursor: Tt,
        events: kt,
        breakpoints: Vt,
        checkOverflow: Ht,
        classes: Nt
    },
    ae = {};
class k {
    constructor() {
        let e, t;
        for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
        n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? t = n[0] : [e, t] = n, t || (t = {}), t = V({}, t), e && !t.el && (t.el = e);
        const o = _();
        if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
            const u = [];
            return o.querySelectorAll(t.el).forEach(f => {
                const h = V({}, t, {
                    el: f
                });
                u.push(new k(h))
            }), u
        }
        const l = this;
        l.__swiper__ = !0, l.support = be(), l.device = Te({
            userAgent: t.userAgent
        }), l.browser = Be(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
        const a = {};
        l.modules.forEach(u => {
            u({
                params: t,
                swiper: l,
                extendParams: Rt(t, a),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            })
        });
        const c = V({}, he, a);
        return l.params = V({}, c, ae, t), l.originalParams = V({}, l.params), l.passedParams = V({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(u => {
            l.on(u, l.params.on[u])
        }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return l.params.direction === "horizontal"
            },
            isVertical() {
                return l.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), l.emit("_swiper"), l.params.init && l.init(), l
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {
            slidesEl: t,
            params: s
        } = this, n = F(t, `.${s.slideClass}, swiper-slide`), r = Z(n[0]);
        return Z(e) - r
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this,
            {
                slidesEl: t,
                params: s
            } = e;
        e.slides = F(t, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
            o = (s.maxTranslate() - n) * e + n;
        s.translateTo(o, typeof t > "u" ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach(s => {
            const n = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: n
            }), e.emit("_slideClass", s, n)
        }), e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"), t === void 0 && (t = !1);
        const s = this,
            {
                params: n,
                slides: r,
                slidesGrid: o,
                slidesSizesGrid: l,
                size: a,
                activeIndex: c
            } = s;
        let u = 1;
        if (typeof n.slidesPerView == "number") return n.slidesPerView;
        if (n.centeredSlides) {
            let f = r[c] ? Math.ceil(r[c].swiperSlideSize) : 0,
                h;
            for (let m = c + 1; m < r.length; m += 1) r[m] && !h && (f += Math.ceil(r[m].swiperSlideSize), u += 1, f > a && (h = !0));
            for (let m = c - 1; m >= 0; m -= 1) r[m] && !h && (f += r[m].swiperSlideSize, u += 1, f > a && (h = !0))
        } else if (e === "current")
            for (let f = c + 1; f < r.length; f += 1)(t ? o[f] + l[f] - o[c] < a : o[f] - o[c] < a) && (u += 1);
        else
            for (let f = c - 1; f >= 0; f -= 1) o[c] - o[f] < a && (u += 1);
        return u
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {
            snapGrid: t,
            params: s
        } = e;
        s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
            o.complete && U(e, o)
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

        function n() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate,
                l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        let r;
        if (s.freeMode && s.freeMode.enabled && !s.cssMode) n(), s.autoHeight && e.updateAutoHeight();
        else {
            if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(o.length - 1, 0, !1, !0)
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || n()
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const s = this,
            n = s.params.direction;
        return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(r => {
            e === "vertical" ? r.style.width = "" : r.style.height = ""
        }), s.emit("changeDirection"), t && s.update()), s
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)), !s) return !1;
        s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let o = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : F(s, n())[0];
        return !o && t.params.createElements && (o = Q("div", t.params.wrapperClass), s.append(o), F(s, `.${t.params.slideClass}`).forEach(l => {
            o.append(l)
        })), Object.assign(t, {
            el: s,
            wrapperEl: o,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || H(s, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || H(s, "direction") === "rtl"),
            wrongRTL: H(o, "display") === "-webkit-box"
        }), !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
        const n = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach(r => {
            r.complete ? U(t, r) : r.addEventListener("load", o => {
                U(t, o.target)
            })
        }), de(t), t.initialized = !0, de(t), t.emit("init"), t.emit("afterInit"), t
    }
    destroy(e, t) {
        e === void 0 && (e = !0), t === void 0 && (t = !0);
        const s = this,
            {
                params: n,
                el: r,
                wrapperEl: o,
                slides: l
            } = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttribute("style"), o.removeAttribute("style"), l && l.length && l.forEach(a => {
            a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index")
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(a => {
            s.off(a)
        }), e !== !1 && (s.el.swiper = null, Le(s)), s.destroyed = !0), null
    }
    static extendDefaults(e) {
        V(ae, e)
    }
    static get extendedDefaults() {
        return ae
    }
    static get defaults() {
        return he
    }
    static installModule(e) {
        k.prototype.__modules__ || (k.prototype.__modules__ = []);
        const t = k.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => k.installModule(t)), k) : (k.installModule(e), k)
    }
}
Object.keys(ne).forEach(i => {
    Object.keys(ne[i]).forEach(e => {
        k.prototype[e] = ne[i][e]
    })
});
k.use([$e, Fe]);

function Ce(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach(n => {
        if (!t[n] && t.auto === !0) {
            let r = F(i.el, `.${s[n]}`)[0];
            r || (r = Q("div", s[n]), r.className = s[n], i.el.append(r)), t[n] = r, e[n] = r
        }
    }), t
}

function ge(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: n
    } = i;
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), e.navigation = {
        nextEl: null,
        prevEl: null
    };

    function r(g) {
        let w;
        return g && typeof g == "string" && e.isElement && (w = e.el.querySelector(g), w) ? w : (g && (typeof g == "string" && (w = [...document.querySelectorAll(g)]), e.params.uniqueNavElements && typeof g == "string" && w.length > 1 && e.el.querySelectorAll(g).length === 1 && (w = e.el.querySelector(g))), g && !w ? g : w)
    }

    function o(g, w) {
        const S = e.params.navigation;
        g = z(g), g.forEach(d => {
            d && (d.classList[w ? "add" : "remove"](...S.disabledClass.split(" ")), d.tagName === "BUTTON" && (d.disabled = w), e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? "add" : "remove"](S.lockClass))
        })
    }

    function l() {
        const {
            nextEl: g,
            prevEl: w
        } = e.navigation;
        if (e.params.loop) {
            o(w, !1), o(g, !1);
            return
        }
        o(w, e.isBeginning && !e.params.rewind), o(g, e.isEnd && !e.params.rewind)
    }

    function a(g) {
        g.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), n("navigationPrev"))
    }

    function c(g) {
        g.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), n("navigationNext"))
    }

    function u() {
        const g = e.params.navigation;
        if (e.params.navigation = Ce(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !(g.nextEl || g.prevEl)) return;
        let w = r(g.nextEl),
            S = r(g.prevEl);
        Object.assign(e.navigation, {
            nextEl: w,
            prevEl: S
        }), w = z(w), S = z(S);
        const d = (p, v) => {
            p && p.addEventListener("click", v === "next" ? c : a), !e.enabled && p && p.classList.add(...g.lockClass.split(" "))
        };
        w.forEach(p => d(p, "next")), S.forEach(p => d(p, "prev"))
    }

    function f() {
        let {
            nextEl: g,
            prevEl: w
        } = e.navigation;
        g = z(g), w = z(w);
        const S = (d, p) => {
            d.removeEventListener("click", p === "next" ? c : a), d.classList.remove(...e.params.navigation.disabledClass.split(" "))
        };
        g.forEach(d => S(d, "next")), w.forEach(d => S(d, "prev"))
    }
    s("init", () => {
        e.params.navigation.enabled === !1 ? m() : (u(), l())
    }), s("toEdge fromEdge lock unlock", () => {
        l()
    }), s("destroy", () => {
        f()
    }), s("enable disable", () => {
        let {
            nextEl: g,
            prevEl: w
        } = e.navigation;
        if (g = z(g), w = z(w), e.enabled) {
            l();
            return
        }[...g, ...w].filter(S => !!S).forEach(S => S.classList.add(e.params.navigation.lockClass))
    }), s("click", (g, w) => {
        let {
            nextEl: S,
            prevEl: d
        } = e.navigation;
        S = z(S), d = z(d);
        const p = w.target;
        if (e.params.navigation.hideOnClick && !d.includes(p) && !S.includes(p)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === p || e.pagination.el.contains(p))) return;
            let v;
            S.length ? v = S[0].classList.contains(e.params.navigation.hiddenClass) : d.length && (v = d[0].classList.contains(e.params.navigation.hiddenClass)), n(v === !0 ? "navigationShow" : "navigationHide"), [...S, ...d].filter(y => !!y).forEach(y => y.classList.toggle(e.params.navigation.hiddenClass))
        }
    });
    const h = () => {
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), u(), l()
        },
        m = () => {
            e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), f()
        };
    Object.assign(e.navigation, {
        enable: h,
        disable: m,
        update: l,
        init: u,
        destroy: f
    })
}

function q(i) {
    return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
}

function ve(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: n
    } = i;
    const r = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: d => d,
            formatFractionTotal: d => d,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
        }
    }), e.pagination = {
        el: null,
        bullets: []
    };
    let o, l = 0;

    function a() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }

    function c(d, p) {
        const {
            bulletActiveClass: v
        } = e.params.pagination;
        d && (d = d[`${p==="prev"?"previous":"next"}ElementSibling`], d && (d.classList.add(`${v}-${p}`), d = d[`${p==="prev"?"previous":"next"}ElementSibling`], d && d.classList.add(`${v}-${p}-${p}`)))
    }

    function u(d) {
        const p = d.target.closest(q(e.params.pagination.bulletClass));
        if (!p) return;
        d.preventDefault();
        const v = Z(p) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === v) return;
            e.slideToLoop(v)
        } else e.slideTo(v)
    }

    function f() {
        const d = e.rtl,
            p = e.params.pagination;
        if (a()) return;
        let v = e.pagination.el;
        v = z(v);
        let y, x;
        const M = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            G = e.params.loop ? Math.ceil(M / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (x = e.previousRealIndex || 0, y = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (y = e.snapIndex, x = e.previousSnapIndex) : (x = e.previousIndex || 0, y = e.activeIndex || 0), p.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const P = e.pagination.bullets;
            let A, b, C;
            if (p.dynamicBullets && (o = oe(P[0], e.isHorizontal() ? "width" : "height", !0), v.forEach(E => {
                    E.style[e.isHorizontal() ? "width" : "height"] = `${o*(p.dynamicMainBullets+4)}px`
                }), p.dynamicMainBullets > 1 && x !== void 0 && (l += y - (x || 0), l > p.dynamicMainBullets - 1 ? l = p.dynamicMainBullets - 1 : l < 0 && (l = 0)), A = Math.max(y - l, 0), b = A + (Math.min(P.length, p.dynamicMainBullets) - 1), C = (b + A) / 2), P.forEach(E => {
                    const T = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(L => `${p.bulletActiveClass}${L}`)].map(L => typeof L == "string" && L.includes(" ") ? L.split(" ") : L).flat();
                    E.classList.remove(...T)
                }), v.length > 1) P.forEach(E => {
                const T = Z(E);
                T === y ? E.classList.add(...p.bulletActiveClass.split(" ")) : e.isElement && E.setAttribute("part", "bullet"), p.dynamicBullets && (T >= A && T <= b && E.classList.add(...`${p.bulletActiveClass}-main`.split(" ")), T === A && c(E, "prev"), T === b && c(E, "next"))
            });
            else {
                const E = P[y];
                if (E && E.classList.add(...p.bulletActiveClass.split(" ")), e.isElement && P.forEach((T, L) => {
                        T.setAttribute("part", L === y ? "bullet-active" : "bullet")
                    }), p.dynamicBullets) {
                    const T = P[A],
                        L = P[b];
                    for (let O = A; O <= b; O += 1) P[O] && P[O].classList.add(...`${p.bulletActiveClass}-main`.split(" "));
                    c(T, "prev"), c(L, "next")
                }
            }
            if (p.dynamicBullets) {
                const E = Math.min(P.length, p.dynamicMainBullets + 4),
                    T = (o * E - o) / 2 - C * o,
                    L = d ? "right" : "left";
                P.forEach(O => {
                    O.style[e.isHorizontal() ? L : "top"] = `${T}px`
                })
            }
        }
        v.forEach((P, A) => {
            if (p.type === "fraction" && (P.querySelectorAll(q(p.currentClass)).forEach(b => {
                    b.textContent = p.formatFractionCurrent(y + 1)
                }), P.querySelectorAll(q(p.totalClass)).forEach(b => {
                    b.textContent = p.formatFractionTotal(G)
                })), p.type === "progressbar") {
                let b;
                p.progressbarOpposite ? b = e.isHorizontal() ? "vertical" : "horizontal" : b = e.isHorizontal() ? "horizontal" : "vertical";
                const C = (y + 1) / G;
                let E = 1,
                    T = 1;
                b === "horizontal" ? E = C : T = C, P.querySelectorAll(q(p.progressbarFillClass)).forEach(L => {
                    L.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${T})`, L.style.transitionDuration = `${e.params.speed}ms`
                })
            }
            p.type === "custom" && p.renderCustom ? (P.innerHTML = p.renderCustom(e, y + 1, G), A === 0 && n("paginationRender", P)) : (A === 0 && n("paginationRender", P), n("paginationUpdate", P)), e.params.watchOverflow && e.enabled && P.classList[e.isLocked ? "add" : "remove"](p.lockClass)
        })
    }

    function h() {
        const d = e.params.pagination;
        if (a()) return;
        const p = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let v = e.pagination.el;
        v = z(v);
        let y = "";
        if (d.type === "bullets") {
            let x = e.params.loop ? Math.ceil(p / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && x > p && (x = p);
            for (let M = 0; M < x; M += 1) d.renderBullet ? y += d.renderBullet.call(e, M, d.bulletClass) : y += `<${d.bulletElement} ${e.isElement?'part="bullet"':""} class="${d.bulletClass}"></${d.bulletElement}>`
        }
        d.type === "fraction" && (d.renderFraction ? y = d.renderFraction.call(e, d.currentClass, d.totalClass) : y = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`), d.type === "progressbar" && (d.renderProgressbar ? y = d.renderProgressbar.call(e, d.progressbarFillClass) : y = `<span class="${d.progressbarFillClass}"></span>`), e.pagination.bullets = [], v.forEach(x => {
            d.type !== "custom" && (x.innerHTML = y || ""), d.type === "bullets" && e.pagination.bullets.push(...x.querySelectorAll(q(d.bulletClass)))
        }), d.type !== "custom" && n("paginationRender", v[0])
    }

    function m() {
        e.params.pagination = Ce(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const d = e.params.pagination;
        if (!d.el) return;
        let p;
        typeof d.el == "string" && e.isElement && (p = e.el.querySelector(d.el)), !p && typeof d.el == "string" && (p = [...document.querySelectorAll(d.el)]), p || (p = d.el), !(!p || p.length === 0) && (e.params.uniqueNavElements && typeof d.el == "string" && Array.isArray(p) && p.length > 1 && (p = [...e.el.querySelectorAll(d.el)], p.length > 1 && (p = p.filter(v => ye(v, ".swiper")[0] === e.el)[0])), Array.isArray(p) && p.length === 1 && (p = p[0]), Object.assign(e.pagination, {
            el: p
        }), p = z(p), p.forEach(v => {
            d.type === "bullets" && d.clickable && v.classList.add(...(d.clickableClass || "").split(" ")), v.classList.add(d.modifierClass + d.type), v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.type === "bullets" && d.dynamicBullets && (v.classList.add(`${d.modifierClass}${d.type}-dynamic`), l = 0, d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)), d.type === "progressbar" && d.progressbarOpposite && v.classList.add(d.progressbarOppositeClass), d.clickable && v.addEventListener("click", u), e.enabled || v.classList.add(d.lockClass)
        }))
    }

    function g() {
        const d = e.params.pagination;
        if (a()) return;
        let p = e.pagination.el;
        p && (p = z(p), p.forEach(v => {
            v.classList.remove(d.hiddenClass), v.classList.remove(d.modifierClass + d.type), v.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.clickable && (v.classList.remove(...(d.clickableClass || "").split(" ")), v.removeEventListener("click", u))
        })), e.pagination.bullets && e.pagination.bullets.forEach(v => v.classList.remove(...d.bulletActiveClass.split(" ")))
    }
    s("changeDirection", () => {
        if (!e.pagination || !e.pagination.el) return;
        const d = e.params.pagination;
        let {
            el: p
        } = e.pagination;
        p = z(p), p.forEach(v => {
            v.classList.remove(d.horizontalClass, d.verticalClass), v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass)
        })
    }), s("init", () => {
        e.params.pagination.enabled === !1 ? S() : (m(), h(), f())
    }), s("activeIndexChange", () => {
        typeof e.snapIndex > "u" && f()
    }), s("snapIndexChange", () => {
        f()
    }), s("snapGridLengthChange", () => {
        h(), f()
    }), s("destroy", () => {
        g()
    }), s("enable disable", () => {
        let {
            el: d
        } = e.pagination;
        d && (d = z(d), d.forEach(p => p.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }), s("lock unlock", () => {
        f()
    }), s("click", (d, p) => {
        const v = p.target,
            y = z(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && y && y.length > 0 && !v.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && v === e.navigation.nextEl || e.navigation.prevEl && v === e.navigation.prevEl)) return;
            const x = y[0].classList.contains(e.params.pagination.hiddenClass);
            n(x === !0 ? "paginationShow" : "paginationHide"), y.forEach(M => M.classList.toggle(e.params.pagination.hiddenClass))
        }
    });
    const w = () => {
            e.el.classList.remove(e.params.pagination.paginationDisabledClass);
            let {
                el: d
            } = e.pagination;
            d && (d = z(d), d.forEach(p => p.classList.remove(e.params.pagination.paginationDisabledClass))), m(), h(), f()
        },
        S = () => {
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let {
                el: d
            } = e.pagination;
            d && (d = z(d), d.forEach(p => p.classList.add(e.params.pagination.paginationDisabledClass))), g()
        };
    Object.assign(e.pagination, {
        enable: w,
        disable: S,
        render: h,
        update: f,
        init: m,
        destroy: g
    })
}

function X(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: n,
        params: r
    } = i;
    e.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    }, t({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let o, l, a = r && r.autoplay ? r.autoplay.delay : 3e3,
        c = r && r.autoplay ? r.autoplay.delay : 3e3,
        u, f = new Date().getTime(),
        h, m, g, w, S, d, p;

    function v(I) {
        !e || e.destroyed || !e.wrapperEl || I.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", v), !p && b())
    }
    const y = () => {
            if (e.destroyed || !e.autoplay.running) return;
            e.autoplay.paused ? h = !0 : h && (c = u, h = !1);
            const I = e.autoplay.paused ? u : f + c - new Date().getTime();
            e.autoplay.timeLeft = I, n("autoplayTimeLeft", I, I / a), l = requestAnimationFrame(() => {
                y()
            })
        },
        x = () => {
            let I;
            return e.virtual && e.params.virtual.enabled ? I = e.slides.filter(D => D.classList.contains("swiper-slide-active"))[0] : I = e.slides[e.activeIndex], I ? parseInt(I.getAttribute("data-swiper-autoplay"), 10) : void 0
        },
        M = I => {
            if (e.destroyed || !e.autoplay.running) return;
            cancelAnimationFrame(l), y();
            let $ = typeof I > "u" ? e.params.autoplay.delay : I;
            a = e.params.autoplay.delay, c = e.params.autoplay.delay;
            const D = x();
            !Number.isNaN(D) && D > 0 && typeof I > "u" && ($ = D, a = D, c = D), u = $;
            const R = e.params.speed,
                W = () => {
                    !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(R, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, R, !0, !0), n("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(R, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, R, !0, !0), n("autoplay")), e.params.cssMode && (f = new Date().getTime(), requestAnimationFrame(() => {
                        M()
                    })))
                };
            return $ > 0 ? (clearTimeout(o), o = setTimeout(() => {
                W()
            }, $)) : requestAnimationFrame(() => {
                W()
            }), $
        },
        G = () => {
            f = new Date().getTime(), e.autoplay.running = !0, M(), n("autoplayStart")
        },
        P = () => {
            e.autoplay.running = !1, clearTimeout(o), cancelAnimationFrame(l), n("autoplayStop")
        },
        A = (I, $) => {
            if (e.destroyed || !e.autoplay.running) return;
            clearTimeout(o), I || (d = !0);
            const D = () => {
                n("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", v) : b()
            };
            if (e.autoplay.paused = !0, $) {
                S && (u = e.params.autoplay.delay), S = !1, D();
                return
            }
            u = (u || e.params.autoplay.delay) - (new Date().getTime() - f), !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0), D())
        },
        b = () => {
            e.isEnd && u < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = new Date().getTime(), d ? (d = !1, M(u)) : M(), e.autoplay.paused = !1, n("autoplayResume"))
        },
        C = () => {
            if (e.destroyed || !e.autoplay.running) return;
            const I = _();
            I.visibilityState === "hidden" && (d = !0, A(!0)), I.visibilityState === "visible" && b()
        },
        E = I => {
            I.pointerType === "mouse" && (d = !0, p = !0, !(e.animating || e.autoplay.paused) && A(!0))
        },
        T = I => {
            I.pointerType === "mouse" && (p = !1, e.autoplay.paused && b())
        },
        L = () => {
            e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", E), e.el.addEventListener("pointerleave", T))
        },
        O = () => {
            e.el.removeEventListener("pointerenter", E), e.el.removeEventListener("pointerleave", T)
        },
        N = () => {
            _().addEventListener("visibilitychange", C)
        },
        ee = () => {
            _().removeEventListener("visibilitychange", C)
        };
    s("init", () => {
        e.params.autoplay.enabled && (L(), N(), G())
    }), s("destroy", () => {
        O(), ee(), e.autoplay.running && P()
    }), s("_freeModeStaticRelease", () => {
        (g || d) && b()
    }), s("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? P() : A(!0, !0)
    }), s("beforeTransitionStart", (I, $, D) => {
        e.destroyed || !e.autoplay.running || (D || !e.params.autoplay.disableOnInteraction ? A(!0, !0) : P())
    }), s("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
            if (e.params.autoplay.disableOnInteraction) {
                P();
                return
            }
            m = !0, g = !1, d = !1, w = setTimeout(() => {
                d = !0, g = !0, A(!0)
            }, 200)
        }
    }), s("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !m)) {
            if (clearTimeout(w), clearTimeout(o), e.params.autoplay.disableOnInteraction) {
                g = !1, m = !1;
                return
            }
            g && e.params.cssMode && b(), g = !1, m = !1
        }
    }), s("slideChange", () => {
        e.destroyed || !e.autoplay.running || (S = !0)
    }), Object.assign(e.autoplay, {
        start: G,
        stop: P,
        pause: A,
        resume: b
    })
}

function qt(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let n = !1,
        r = !1;
    e.thumbs = {
        swiper: null
    };

    function o() {
        const c = e.thumbs.swiper;
        if (!c || c.destroyed) return;
        const u = c.clickedIndex,
            f = c.clickedSlide;
        if (f && f.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof u > "u" || u === null) return;
        let h;
        c.params.loop ? h = parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : h = u, e.params.loop ? e.slideToLoop(h) : e.slideTo(h)
    }

    function l() {
        const {
            thumbs: c
        } = e.params;
        if (n) return !1;
        n = !0;
        const u = e.constructor;
        if (c.swiper instanceof u) e.thumbs.swiper = c.swiper, Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }), Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }), e.thumbs.swiper.update();
        else if (j(c.swiper)) {
            const f = Object.assign({}, c.swiper);
            Object.assign(f, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), e.thumbs.swiper = new u(f), r = !0
        }
        return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", o), !0
    }

    function a(c) {
        const u = e.thumbs.swiper;
        if (!u || u.destroyed) return;
        const f = u.params.slidesPerView === "auto" ? u.slidesPerViewDynamic() : u.params.slidesPerView;
        let h = 1;
        const m = e.params.thumbs.slideThumbActiveClass;
        if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (h = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), u.slides.forEach(S => S.classList.remove(m)), u.params.loop || u.params.virtual && u.params.virtual.enabled)
            for (let S = 0; S < h; S += 1) F(u.slidesEl, `[data-swiper-slide-index="${e.realIndex+S}"]`).forEach(d => {
                d.classList.add(m)
            });
        else
            for (let S = 0; S < h; S += 1) u.slides[e.realIndex + S] && u.slides[e.realIndex + S].classList.add(m);
        const g = e.params.thumbs.autoScrollOffset,
            w = g && !u.params.loop;
        if (e.realIndex !== u.realIndex || w) {
            const S = u.activeIndex;
            let d, p;
            if (u.params.loop) {
                const v = u.slides.filter(y => y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`)[0];
                d = u.slides.indexOf(v), p = e.activeIndex > e.previousIndex ? "next" : "prev"
            } else d = e.realIndex, p = d > e.previousIndex ? "next" : "prev";
            w && (d += p === "next" ? g : -1 * g), u.visibleSlidesIndexes && u.visibleSlidesIndexes.indexOf(d) < 0 && (u.params.centeredSlides ? d > S ? d = d - Math.floor(f / 2) + 1 : d = d + Math.floor(f / 2) - 1 : d > S && u.params.slidesPerGroup, u.slideTo(d, c ? 0 : void 0))
        }
    }
    s("beforeInit", () => {
        const {
            thumbs: c
        } = e.params;
        if (!(!c || !c.swiper))
            if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
                const u = _(),
                    f = () => {
                        const m = typeof c.swiper == "string" ? u.querySelector(c.swiper) : c.swiper;
                        if (m && m.swiper) c.swiper = m.swiper, l(), a(!0);
                        else if (m) {
                            const g = w => {
                                c.swiper = w.detail[0], m.removeEventListener("init", g), l(), a(!0), c.swiper.update(), e.update()
                            };
                            m.addEventListener("init", g)
                        }
                        return m
                    },
                    h = () => {
                        if (e.destroyed) return;
                        f() || requestAnimationFrame(h)
                    };
                requestAnimationFrame(h)
            } else l(), a(!0)
    }), s("slideChange update resize observerUpdate", () => {
        a()
    }), s("setTransition", (c, u) => {
        const f = e.thumbs.swiper;
        !f || f.destroyed || f.setTransition(u)
    }), s("beforeDestroy", () => {
        const c = e.thumbs.swiper;
        !c || c.destroyed || r && c.destroy()
    }), Object.assign(e.thumbs, {
        init: l,
        update: a
    })
}
window.addEventListener("load", function() {
    const i = document.body;
    document.querySelector(".preloader") ? .classList.add("hidden"), document.querySelector(".back-to-top") ? .addEventListener("click", function() {
        document.body.scrollTop = 0, document.documentElement.scrollTop = 0
    }), document.querySelectorAll(".nav-dropdown .nav-link").forEach(c => {
        c.addEventListener("click", function() {
            this.parentElement.classList.toggle("active")
        })
    });
    const n = new k(".banner-nav-slider", {
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: !0
    });
    new k(".banner-slider", {
        modules: [ge, ve, X, qt],
        slidesPerView: 1,
        loop: !0,
        centeredSlides: !0,
        autoplay: {
            delay: 1e4
        },
        navigation: {
            nextEl: ".swiper-navigation .next-arrow",
            prevEl: ".swiper-navigation .prev-arrow"
        },
        thumbs: {
            swiper: n
        }
    }), new k(".work-slider", {
        modules: [ve, X],
        autoHeight: !0,
        loop: !0,
        autoplay: {
            delay: 1e3,
            pauseOnMouseEnter: !0
        },
        pagination: {
            el: ".work-slider + .swiper-pagination",
            clickable: !0
        },
        breakpoints: {
            0: {
                slidesPerView: "auto"
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 4
            }
        }
    }), new k(".testimonial-slider", {
        modules: [ge, X],
        slidesPerView: 1,
        centeredSlides: !0,
        spaceBetween: 80,
        autoplay: {
            delay: 3e3,
            pauseOnMouseEnter: !0
        },
        navigation: {
            prevEl: ".swiper-navigation .prevArrow",
            nextEl: ".swiper-navigation .nextArrow"
        }
    }), new k(".client-logo-slider", {
        modules: [X],
        loop: !0,
        autoplay: {
            delay: 3e3,
            pauseOnMouseEnter: !0
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 5
            }
        }
    });
    const r = document.querySelectorAll(".counter");
    r.forEach(c => {
        c.counterAlreadyFired = !1, c.counterSpeed = parseInt(c.getAttribute("data-counter-time") || "0", 10) / 45, c.counterTarget = +c.innerText, c.counterCount = 0, c.counterStep = c.counterTarget / c.counterSpeed, c.updateCounter = function() {
            c.counterCount = c.counterCount + c.counterStep, c.innerText = Math.ceil(c.counterCount).toString(), c.counterCount < c.counterTarget ? setTimeout(c.updateCounter, c.counterSpeed) : c.innerText = c.counterTarget.toString()
        }
    });
    const o = c => {
            const u = window.scrollY || window.scrollY,
                f = c.getBoundingClientRect().top + u,
                h = {
                    top: u,
                    bottom: u + window.innerHeight
                },
                m = {
                    top: f,
                    bottom: f + c.clientHeight
                };
            return m.bottom >= h.top && m.bottom <= h.bottom || m.top <= h.bottom && m.top >= h.top
        },
        l = () => {
            r.forEach(c => {
                c.counterAlreadyFired !== !0 && o(c) && (c.updateCounter(), c.counterAlreadyFired = !0)
            })
        };
    window.addEventListener("scroll", l);
    const a = document.querySelector(".navbar-toggler");
    a ? .addEventListener("click", function() {
        a.classList.toggle("active"), i.classList.toggle("navbar-nav-collapsed")
    })
});