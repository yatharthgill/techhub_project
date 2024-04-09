import "./hoisted.CDtmNqX_.js";
const r = document.querySelectorAll("[data-toggle='modal']"),
    o = document.body,
    n = () => {
        const e = document.createElement("div");
        e.className = "modal-backdrop fade show", e.id = "modalBackdrop", o.appendChild(e)
    },
    i = e => document.querySelector(e),
    m = e => {
        const d = e.getAttribute("data-target") ? ? "",
            t = i(d);
        if (t) {
            n(), o.classList.add("modal-open");
            const c = () => p(t);
            document.querySelector(".modal-backdrop") ? .addEventListener("click", c), t.classList.add("show");
            const s = t.querySelector("iframe");
            if (s) {
                const a = e.getAttribute("data-src");
                s.src = a
            }
            const l = window.innerWidth - document.documentElement.clientWidth;
            o.style.overflow = "hidden", o.style.paddingRight = `${l}px`, t.style.paddingRight = `${l}px`, t.querySelectorAll("[data-dismiss]").forEach(a => a.addEventListener("click", c))
        }
    },
    p = e => {
        const d = document.querySelector(".modal-backdrop");
        if (e) {
            const t = e.querySelector("iframe");
            t && (t.src = ""), e.classList.remove("show"), o.style.overflow = "", o.style.paddingRight = "", e.style.paddingRight = "", d && d.remove()
        }
    };
r.forEach(e => {
    e.addEventListener("click", () => m(e))
});