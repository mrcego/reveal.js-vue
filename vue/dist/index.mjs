import { defineComponent as B, useAttrs as U, computed as y, ref as A, shallowRef as M, provide as J, onMounted as j, onUnmounted as W, watch as z, openBlock as I, createElementBlock as V, normalizeStyle as P, unref as Y, normalizeClass as H, createElementVNode as G, renderSlot as D, inject as L, mergeProps as q, createBlock as Q, resolveDynamicComponent as X, withCtx as Z, nextTick as ee, createTextVNode as T, toDisplayString as te, createCommentVNode as ne } from "vue";
import ae from "reveal.js";
const F = Symbol("RevealContext"), ue = /* @__PURE__ */ B({
  inheritAttrs: !1,
  __name: "Deck",
  props: {
    config: {},
    plugins: { default: () => [] }
  },
  emits: ["ready", "sync", "slideSync", "slideChanged", "slideTransitionEnd", "fragmentShown", "fragmentHidden", "overviewShown", "overviewHidden", "paused", "resumed"],
  setup(u, { expose: e, emit: m }) {
    const d = u, v = m, h = U(), _ = y(() => {
      const n = "reveal", r = h.class;
      return r ? typeof r == "string" ? `${n} ${r}` : Array.isArray(r) ? [n, ...r] : [n, r] : n;
    }), i = A(null), t = A(null), s = M(null), g = A(!1), k = [...d.plugins], R = A(0), x = /* @__PURE__ */ new WeakMap();
    let o = 1, a = null, c = { ...d.config }, f = null, S = [];
    J(F, s), e({
      reveal: s
    });
    function w(n, r) {
      if (n === r) return !1;
      if (!n || !r) return n !== r;
      const l = Object.keys(n), p = Object.keys(r);
      if (l.length !== p.length) return !0;
      for (const b of l)
        if (!(b in r) || n[b] !== r[b])
          return !0;
      return !1;
    }
    function N(n) {
      return n.tagName === "SECTION";
    }
    function C(n, r) {
      return Array.from(n.children).filter(N).map((l) => {
        let p = r.get(l);
        p === void 0 && (p = o++, r.set(l, p));
        const b = C(l, r);
        return b.length > 0 ? [p, b] : p;
      });
    }
    function E(n, r) {
      return n ? JSON.stringify(C(n, r)) : "[]";
    }
    function $(n) {
      const r = [
        ["sync", "sync"],
        ["slidesync", "slideSync"],
        ["slidechanged", "slideChanged"],
        ["slidetransitionend", "slideTransitionEnd"],
        ["fragmentshown", "fragmentShown"],
        ["fragmenthidden", "fragmentHidden"],
        ["overviewshown", "overviewShown"],
        ["overviewhidden", "overviewHidden"],
        ["paused", "paused"],
        ["resumed", "resumed"]
      ];
      for (const [l, p] of r) {
        const b = (K) => v(p, K);
        n.on(l, b), S.push({ name: l, handler: b });
      }
    }
    function O(n) {
      for (const { name: r, handler: l } of S)
        n.off(r, l);
      S = [];
    }
    return j(() => {
      if (!i.value) return;
      const n = new ae(i.value, {
        ...d.config,
        plugins: k
      });
      s.value = n, n.initialize().then(() => {
        s.value === n && (a = E(t.value, x), g.value = !0, $(n), v("ready", n));
      }), f = new MutationObserver(() => {
        const r = R.value > 0;
        r && R.value--;
        const l = E(t.value, x);
        if (r) {
          a = l;
          return;
        }
        !g.value || !s.value || a !== l && (s.value.sync(), a = l);
      }), t.value && f.observe(t.value, { childList: !0, subtree: !0 });
    }), W(() => {
      const n = s.value;
      if (f && f.disconnect(), !!n) {
        O(n);
        try {
          n.destroy();
        } catch {
        }
        s.value === n && (s.value = null, g.value = !1);
      }
    }), z(
      () => d.config,
      (n) => {
        !g.value || !s.value || w(c, n) && (R.value++, s.value.configure(n ?? {}), c = { ...n });
      },
      { deep: !1 }
    ), (n, r) => (I(), V("div", {
      class: H(_.value),
      style: P(Y(h).style),
      ref_key: "deckDivRef",
      ref: i
    }, [
      G("div", {
        class: "slides",
        ref_key: "slidesDivRef",
        ref: t
      }, [
        D(n.$slots, "default")
      ], 512)
    ], 6));
  }
}), le = /* @__PURE__ */ B({
  __name: "Slide",
  props: {
    background: {},
    backgroundImage: {},
    backgroundVideo: {},
    backgroundVideoLoop: { type: Boolean },
    backgroundVideoMuted: { type: Boolean },
    backgroundIframe: {},
    backgroundColor: {},
    backgroundGradient: {},
    backgroundSize: {},
    backgroundPosition: {},
    backgroundRepeat: {},
    backgroundOpacity: {},
    backgroundTransition: {},
    visibility: {},
    autoAnimate: { type: Boolean },
    autoAnimateId: {},
    autoAnimateRestart: { type: Boolean },
    autoAnimateUnmatched: { type: [Boolean, String] },
    autoAnimateEasing: {},
    autoAnimateDuration: {},
    autoAnimateDelay: {},
    transition: {},
    transitionSpeed: {},
    autoSlide: {},
    notes: {},
    backgroundInteractive: { type: Boolean },
    preload: { type: Boolean }
  },
  setup(u) {
    const e = u, m = L(F) ?? M(null), d = A(null);
    let v = !1;
    const h = y(() => {
      const i = {}, t = (s, g, k = !1) => {
        if (g != null) {
          if (k) {
            g && (i[s] = "");
            return;
          }
          if (g === !1) {
            i[s] = "false";
            return;
          }
          i[s] = g;
        }
      };
      return t("data-background", e.background), t("data-background-image", e.backgroundImage), t("data-background-video", e.backgroundVideo), t("data-background-video-loop", e.backgroundVideoLoop, !0), t("data-background-video-muted", e.backgroundVideoMuted, !0), t("data-background-iframe", e.backgroundIframe), t("data-background-color", e.backgroundColor), t("data-background-gradient", e.backgroundGradient), t("data-background-size", e.backgroundSize), t("data-background-position", e.backgroundPosition), t("data-background-repeat", e.backgroundRepeat), t("data-background-opacity", e.backgroundOpacity), t("data-background-transition", e.backgroundTransition), t("data-visibility", e.visibility), t("data-auto-animate", e.autoAnimate, !0), t("data-auto-animate-id", e.autoAnimateId), t("data-auto-animate-restart", e.autoAnimateRestart, !0), t("data-auto-animate-unmatched", e.autoAnimateUnmatched), t("data-auto-animate-easing", e.autoAnimateEasing), t("data-auto-animate-duration", e.autoAnimateDuration), t("data-auto-animate-delay", e.autoAnimateDelay), t("data-transition", e.transition), t("data-transition-speed", e.transitionSpeed), t("data-autoslide", e.autoSlide), t("data-notes", e.notes), t("data-background-interactive", e.backgroundInteractive, !0), t("data-preload", e.preload, typeof e.preload == "boolean"), i;
    }), _ = y(() => JSON.stringify(
      Object.entries(h.value).filter(([i]) => i.startsWith("data-")).sort(([i], [t]) => i.localeCompare(t))
    ));
    return j(() => {
      v = !0;
    }), z(_, () => {
      if (!v) return;
      const i = m.value, t = d.value;
      !i || !t || typeof i.syncSlide != "function" || i.syncSlide(t);
    }), (i, t) => (I(), V("section", q({
      ref_key: "slideRef",
      ref: d
    }, h.value), [
      D(i.$slots, "default")
    ], 16));
  }
}), de = /* @__PURE__ */ B({
  __name: "Fragment",
  props: {
    animation: {},
    as: { default: "span" },
    index: {}
  },
  setup(u) {
    const e = u, m = y(() => ["fragment", e.animation].filter(Boolean).join(" "));
    return (d, v) => (I(), Q(X(u.as), {
      class: H(m.value),
      "data-fragment-index": u.index
    }, {
      default: Z(() => [
        D(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-fragment-index"]));
  }
}), re = { class: "code-wrapper" }, oe = ["data-line-numbers", "data-ln-start-from", "data-noescape"], ce = /* @__PURE__ */ B({
  __name: "Code",
  props: {
    code: {},
    language: {},
    trim: { type: Boolean, default: !0 },
    lineNumbers: { type: [Boolean, String] },
    startFrom: {},
    noEscape: { type: Boolean },
    codeClass: {},
    codeStyle: {}
  },
  setup(u) {
    const e = u, m = L(F), d = A(null), v = A("");
    let h = !1, _ = "";
    function i(o) {
      const a = o.replace(/\r\n/g, `
`).split(`
`);
      for (; a.length && a[0].trim().length === 0; ) a.shift();
      for (; a.length && a[a.length - 1].trim().length === 0; ) a.pop();
      if (!a.length) return "";
      const c = a.filter((f) => f.trim().length > 0).reduce(
        (f, S) => {
          var w;
          return Math.min(f, ((w = S.match(/^\s*/)) == null ? void 0 : w[0].length) ?? 0);
        },
        Number.POSITIVE_INFINITY
      );
      return a.map((f) => f.slice(c)).join(`
`);
    }
    function t(o) {
      const a = o.parentElement;
      a && Array.from(a.children).forEach((c) => {
        c !== o && c instanceof HTMLElement && c.tagName === "CODE" && c.classList.contains("fragment") && c.remove();
      });
    }
    const s = y(() => e.code ?? v.value), g = y(() => e.trim ? i(s.value) : s.value), k = y(() => {
      if (e.lineNumbers === !0) return "";
      if (!(e.lineNumbers === !1 || e.lineNumbers == null))
        return String(e.lineNumbers);
    }), R = y(() => [e.language, e.codeClass].filter(Boolean).join(" "));
    j(() => {
      !e.code && d.value && !h && (v.value = d.value.textContent || "", h = !0);
    });
    function x() {
      var n;
      const o = d.value, a = m == null ? void 0 : m.value;
      if (!o || !a) return;
      const c = (n = a.getPlugin) == null ? void 0 : n.call(a, "highlight");
      if (!c || typeof c.highlightBlock != "function") return;
      const f = g.value, S = e.language || "", w = e.codeClass || "", N = k.value, C = e.startFrom, E = e.noEscape, $ = [
        f,
        S,
        w,
        N == null ? "__none__" : `lineNumbers:${N}`,
        C == null ? "" : String(C),
        E ? "1" : "0"
      ].join("::");
      if (_ === $ && o.getAttribute("data-highlighted") === "yes")
        return;
      t(o), f !== "" && (o.textContent = f), o.removeAttribute("data-highlighted"), o.classList.remove("hljs"), o.classList.remove("has-highlights"), N == null ? o.removeAttribute("data-line-numbers") : o.setAttribute("data-line-numbers", String(N)), C == null ? o.removeAttribute("data-ln-start-from") : o.setAttribute("data-ln-start-from", String(C)), E ? o.setAttribute("data-noescape", "") : o.removeAttribute("data-noescape"), c.highlightBlock(o);
      const O = o.closest("section");
      O && typeof a.syncFragments == "function" && a.syncFragments(O), _ = $;
    }
    return z(
      [
        m,
        g,
        () => e.language,
        () => e.codeClass,
        k,
        () => e.startFrom,
        () => e.noEscape
      ],
      async () => {
        await ee(), x();
      },
      { immediate: !0, flush: "post" }
    ), (o, a) => (I(), V("pre", re, [
      a[0] || (a[0] = T("		", -1)),
      G("code", {
        ref_key: "codeRef",
        ref: d,
        class: H(R.value || void 0),
        style: P(u.codeStyle),
        "data-line-numbers": k.value,
        "data-ln-start-from": u.startFrom,
        "data-noescape": u.noEscape ? "" : void 0
      }, [
        T(te(e.code ? g.value : void 0), 1),
        e.code ? ne("", !0) : D(o.$slots, "default", { key: 0 })
      ], 14, oe),
      a[1] || (a[1] = T(`
	`, -1))
    ]));
  }
}), fe = /* @__PURE__ */ B({
  inheritAttrs: !0,
  __name: "Stack",
  setup(u) {
    return (e, m) => (I(), V("section", null, [
      D(e.$slots, "default")
    ]));
  }
});
function ge() {
  const u = L(F);
  return u || (console.warn("useReveal must be used within a Deck component"), { value: null });
}
export {
  ce as Code,
  ue as Deck,
  de as Fragment,
  F as RevealContext,
  le as Slide,
  fe as Stack,
  ge as useReveal
};
