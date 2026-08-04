"use client";

import { useEffect } from "react";

/**
 * Loads the template's legacy scripts AFTER React hydration, in dependency
 * order (jQuery first). This avoids mutating the DOM before hydration —
 * which would break React's hydration diff.
 *
 * Once every script has loaded we dispatch a synthetic DOMContentLoaded so
 * swiper.js's native listeners initialize all sliders, while main.js's
 * jQuery-ready block runs immediately (the document is already complete).
 */
export default function TemplateScripts() {
  useEffect(() => {
    // browser back/forward can trigger Next's client-side restoration;
    // force a full reload so widgets re-initialize from a clean document.
    const onPop = () => window.location.reload();
    window.addEventListener("popstate", onPop);

    const scripts = [
      "/js/jquery.min.js",
      "/js/bootstrap.bundle.min.js",
      "/js/swiper-bundle.min.js",
      "/js/swiper.js",
      "/js/wow.min.js",
      "/js/nouislider.min.js",
      "/js/wNumb.min.js",
      "/js/fancybox.umd.js",
      "/js/main.js",
    ];

    // stub functions referenced by inline onclick handlers in the template
    if (typeof window.nextMonth === "undefined") {
      window.nextMonth = () => {};
    }
    if (typeof window.prevMonth === "undefined") {
      window.prevMonth = () => {};
    }

    let idx = 0;
    const loadNext = () => {
      if (idx >= scripts.length) {
        init();
        return;
      }
      const src = scripts[idx++];
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        loadNext();
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.onload = () => loadNext();
      s.onerror = () => loadNext();
      document.head.appendChild(s);
    };
    loadNext();

    function init() {
      // fire for the native DOMContentLoaded listeners (swiper.js etc.)
      try {
        document.dispatchEvent(new Event("DOMContentLoaded"));
      } catch {
        /* noop */
      }
      if (window.Fancybox) {
        try {
          window.Fancybox.bind("[data-fancybox]", {});
        } catch {
          /* noop */
        }
      }
    }

    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return null;
}
