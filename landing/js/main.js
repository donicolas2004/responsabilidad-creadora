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

  var PREFERS_REDUCED_MOTION = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var IS_DESKTOP_POINTER = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

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
        var location = el.getAttribute("data-cta-location") || "unknown";
        trackLead(location);
        trackWhatsAppGroupClick(location);
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

  // Evento custom adicional, más descriptivo para este funnel concreto.
  // No sustituye a Lead: se dispara en el mismo clic, como evento complementario.
  // No implica confirmación de que el usuario completó el ingreso al grupo real.
  function trackWhatsAppGroupClick(location) {
    try {
      if (window.fbq) {
        window.fbq("trackCustom", "WhatsAppGroupClick", {
          cta_location: location,
          content_name: "de_sobrevivir_a_elegir",
          event_date: "2026-09-01",
          destination: "whatsapp_group"
        });
      }
    } catch (e) {
      /* tracking nunca debe romper la experiencia */
    }
  }

  /* ============================================================
     Motion system
     — FadeIn: revela secciones al entrar en viewport (.reveal)
     — Magnet: atracción sutil del cursor hacia el CTA (solo desktop)
     — ParallaxObject: desplazamiento leve de objetos decorativos
     — AnimatedText: opacidad progresiva de la sección scroll-statement
     Todo se desactiva si el usuario tiene prefers-reduced-motion.
     ============================================================ */

  function initReveal() {
    var targets = document.querySelectorAll(".reveal");
    if (PREFERS_REDUCED_MOTION || !("IntersectionObserver" in window) || targets.length === 0) {
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

  function initMagnet() {
    if (PREFERS_REDUCED_MOTION || !IS_DESKTOP_POINTER) return;
    var targets = document.querySelectorAll(".js-magnet");
    var strength = 10; // px máximo de desplazamiento — sutil, no dificulta el click

    targets.forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var rect = el.getBoundingClientRect();
        var relX = (e.clientX - rect.left) / rect.width - 0.5;
        var relY = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = "translate(" + (relX * strength).toFixed(1) + "px, " + (relY * strength).toFixed(1) + "px) scale(1.02)";
      }, { passive: true });

      el.addEventListener("mouseleave", function () {
        el.style.transform = "";
      }, { passive: true });
    });
  }

  function initParallax() {
    if (PREFERS_REDUCED_MOTION) return;
    var targets = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
    if (targets.length === 0) return;

    var ticking = false;

    function update() {
      var viewportH = window.innerHeight;
      targets.forEach(function (el) {
        var range = parseFloat(el.getAttribute("data-parallax")) || 20;
        var rect = el.getBoundingClientRect();
        var centerOffset = (rect.top + rect.height / 2) - viewportH / 2;
        var progress = Math.max(-1, Math.min(1, centerOffset / viewportH));
        var shift = (progress * range).toFixed(1);
        el.style.transform = "translateY(" + shift + "px)";
      });
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  function initAnimatedText() {
    var el = document.querySelector(".js-animated-text");
    if (!el) return;

    if (PREFERS_REDUCED_MOTION || !("IntersectionObserver" in window)) {
      el.classList.add("is-lit");
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          el.classList.toggle("is-lit", entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
  }

  /* ============================================================
     FAQ Accordion
     ============================================================ */

  function initAccordion() {
    var triggers = document.querySelectorAll(".accordion__trigger");
    triggers.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".accordion__item");
        var isOpen = item.classList.contains("is-open");

        item.parentElement.querySelectorAll(".accordion__item.is-open").forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove("is-open");
            openItem.querySelector(".accordion__trigger").setAttribute("aria-expanded", "false");
          }
        });

        item.classList.toggle("is-open", !isOpen);
        btn.setAttribute("aria-expanded", String(!isOpen));
      });
    });
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
    initMagnet();
    initParallax();
    initAnimatedText();
    initAccordion();
    initStickyCta();
  });
})();
