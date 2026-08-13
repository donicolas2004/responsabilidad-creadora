(function () {
  "use strict";

  /* ============================================================
     CONFIGURACIÓN — edita solo aquí
     ============================================================ */

  // Enlace único del grupo privado de WhatsApp. Todos los CTA lo reutilizan.
  var WHATSAPP_URL = "https://chat.whatsapp.com/ByVobpveGT3FxuxsVvK1Kv?s=cl&p=i&ilr=4";

  // IDs de tracking — pega aquí los tuyos cuando los tengas.
  var TRACKING_CONFIG = {
    META_PIXEL_ID: "982139209623772",
    GA_MEASUREMENT_ID: "" // ej: "G-XXXXXXXXXX"
  };

  /* ============================================================
     UTM passthrough — conserva los parámetros de la URL de entrada
     y los añade al enlace de WhatsApp al hacer clic.
     ============================================================ */

  var UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

  function getIncomingParams() {
    var params = new URLSearchParams(window.location.search);
    var out = {};
    UTM_KEYS.forEach(function (key) {
      var val = params.get(key);
      if (val) out[key] = val;
    });
    return out;
  }

  function buildDestinationUrl(baseUrl, extraParams) {
    if (!extraParams || Object.keys(extraParams).length === 0 || baseUrl === "#") {
      return baseUrl;
    }
    try {
      var url = new URL(baseUrl);
      Object.keys(extraParams).forEach(function (key) {
        url.searchParams.set(key, extraParams[key]);
      });
      return url.toString();
    } catch (e) {
      return baseUrl;
    }
  }

  function wireCtaButtons() {
    var incoming = getIncomingParams();
    var destination = buildDestinationUrl(WHATSAPP_URL, incoming);
    var ctas = document.querySelectorAll(".js-cta");

    ctas.forEach(function (el) {
      el.setAttribute("href", destination);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");

      // Guard: evita enlazar el mismo botón dos veces (y por tanto duplicar el evento)
      // si wireCtaButtons se llegara a invocar más de una vez.
      if (el.dataset.leadBound === "true") return;
      el.dataset.leadBound = "true";

      el.addEventListener("click", function () {
        trackLead(el.getAttribute("data-cta-location") || "unknown");
      });
    });
  }

  /* ============================================================
     Tracking — Meta Pixel / GA sin depender de backend.
     No hace nada si no hay IDs configurados.
     ============================================================ */

  // Evento estándar de Meta: se dispara al pulsar cualquier CTA hacia WhatsApp.
  // "Lead" aquí significa "pulsó el CTA de acceso", no confirmación de entrada al grupo.
  function trackLead(location) {
    try {
      if (window.fbq) {
        window.fbq("track", "Lead", { content_name: location });
      }
      if (window.gtag && TRACKING_CONFIG.GA_MEASUREMENT_ID) {
        window.gtag("event", "generate_lead", { content_name: location });
      }
    } catch (e) {
      /* tracking nunca debe romper la experiencia */
    }
  }

  /* ============================================================
     Reveal on scroll — fade-up sutil
     ============================================================ */

  function initReveal() {
    var targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ============================================================
     Sticky CTA móvil — aparece tras superar el Hero
     ============================================================ */

  function initStickyCta() {
    var sticky = document.getElementById("stickyCta");
    var hero = document.getElementById("hero");
    if (!sticky || !hero || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          sticky.classList.toggle("is-visible", show);
          sticky.setAttribute("aria-hidden", show ? "false" : "true");
        });
      },
      { threshold: 0 }
    );
    observer.observe(hero);
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireCtaButtons();
    initReveal();
    initStickyCta();
  });
})();
