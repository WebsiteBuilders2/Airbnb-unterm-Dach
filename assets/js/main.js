/* ==========================================================================
   Unter dem Dach mit Parkplatz — Hauptlogik
   ========================================================================== */
(function () {
  "use strict";

  var CFG    = window.SITE_CONFIG || {};
  var DICT   = window.I18N || { de: {}, en: {} };
  var lang   = "de";

  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     Hilfsfunktionen
     ------------------------------------------------------------------ */

  function t(key) {
    if (lang === "en" && DICT.en && DICT.en[key] != null) return DICT.en[key];
    if (DICT.de && DICT.de[key] != null) return DICT.de[key];
    return key;
  }

  /* Zahl im jeweiligen Sprachformat: 9,8 (DE) bzw. 9.8 (EN) */
  function num(value, decimals) {
    var d = decimals == null ? 1 : decimals;
    var s = Number(value).toFixed(d);
    return lang === "de" ? s.replace(".", ",") : s;
  }

  function pick(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] != null ? obj[lang] : (obj.de || "");
  }

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function icon(id, cls) {
    return '<svg' + (cls ? ' class="' + cls + '"' : "") + ' aria-hidden="true"><use href="#' + id + '"/></svg>';
  }

  /* Kontaktdaten sind noch Platzhalter? */
  function contactMissing() {
    return !CFG.phone || /0{6,}/.test(String(CFG.phone).replace(/\D/g, ""));
  }

  /* ------------------------------------------------------------------
     Bild-Platzhalter: fehlt eine Datei, zeigen wir eine gestaltete Fläche
     ------------------------------------------------------------------ */

  function markPlaceholder(img) {
    var box = img.closest(".media");
    if (box) box.classList.add("is-placeholder");
  }

  function watchImage(img) {
    if (!img) return;
    if (img.complete) {
      if (img.naturalWidth === 0) markPlaceholder(img);
      return;
    }
    img.addEventListener("error", function () { markPlaceholder(img); }, { once: true });
  }

  function watchAllImages(root) {
    $$(".media img", root || document).forEach(watchImage);
  }

  /* ------------------------------------------------------------------
     Einblenden beim Scrollen
     ------------------------------------------------------------------ */

  var revealObserver = null;

  function initReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$("[data-reveal]").forEach(function (el) { el.classList.add("is-revealed"); });
      return;
    }
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    $$("[data-reveal]").forEach(function (el) { revealObserver.observe(el); });
  }

  function observeNew(root) {
    $$("[data-reveal]", root).forEach(function (el) {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add("is-revealed");
    });
  }

  /* ------------------------------------------------------------------
     Zahlen hochzählen
     ------------------------------------------------------------------ */

  function renderCount(el, value) {
    var dec = parseInt(el.dataset.decimals || "0", 10);
    el.textContent = num(value, dec) + (el.dataset.suffix || "");
  }

  function initCounters() {
    var nodes = $$("[data-count]");
    if (!nodes.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach(function (el) { renderCount(el, parseFloat(el.dataset.count)); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el     = entry.target;
        var target = parseFloat(el.dataset.count);
        var start  = performance.now();
        var dur    = 1400;

        (function step(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          renderCount(el, target * eased);
          if (p < 1) requestAnimationFrame(step);
          else renderCount(el, target);
        })(start);

        obs.unobserve(el);
      });
    }, { threshold: 0.4 });

    nodes.forEach(function (el) { obs.observe(el); });
  }

  /* ------------------------------------------------------------------
     Header, mobile Navigation, aktiver Menüpunkt
     ------------------------------------------------------------------ */

  function initHeader() {
    var header = $("#header");
    var burger = $(".burger");
    var mnav   = $("#mobile-nav");
    var mcta   = $("#mobile-cta");

    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      header.classList.toggle("is-stuck", y > 40);
      if (mcta) mcta.classList.toggle("is-visible", y > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    function closeMenu() {
      burger.setAttribute("aria-expanded", "false");
      mnav.classList.remove("is-open");
      document.body.classList.remove("is-locked");
    }

    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      if (open) { closeMenu(); return; }
      burger.setAttribute("aria-expanded", "true");
      mnav.classList.add("is-open");
      document.body.classList.add("is-locked");
      header.classList.add("is-stuck");
    });

    $$("a", mnav).forEach(function (a) { a.addEventListener("click", closeMenu); });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mnav.classList.contains("is-open")) closeMenu();
    });

    /* aktiver Menüpunkt */
    if ("IntersectionObserver" in window) {
      var links = {};
      $$(".nav a").forEach(function (a) {
        var id = a.getAttribute("href").slice(1);
        if (id) links[id] = a;
      });
      var sectionObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var a = links[entry.target.id];
          if (a && entry.isIntersecting) {
            $$(".nav a").forEach(function (x) { x.classList.remove("is-active"); });
            a.classList.add("is-active");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });

      Object.keys(links).forEach(function (id) {
        var sec = document.getElementById(id);
        if (sec) sectionObs.observe(sec);
      });
    }
  }

  /* ------------------------------------------------------------------
     Galerie
     ------------------------------------------------------------------ */

  var galleryState = { cat: "alle", items: [], index: 0 };

  function galleryItems(cat) {
    var all = window.GALLERY || [];
    return cat === "alle" ? all.slice() : all.filter(function (g) { return g.cat === cat; });
  }

  function renderGalleryTabs() {
    var wrap = $("#gallery-tabs");
    if (!wrap) return;
    var all  = window.GALLERY || [];
    var cats = ["alle"];
    all.forEach(function (g) { if (cats.indexOf(g.cat) === -1) cats.push(g.cat); });

    wrap.innerHTML = cats.map(function (c) {
      var n = c === "alle" ? all.length : all.filter(function (g) { return g.cat === c; }).length;
      return '<button class="tab' + (c === galleryState.cat ? " is-active" : "") + '" type="button" role="tab" ' +
             'aria-selected="' + (c === galleryState.cat) + '" data-cat="' + c + '">' +
             esc(t("cat." + c)) + '<span class="tab__count">' + n + "</span></button>";
    }).join("");

    $$(".tab", wrap).forEach(function (btn) {
      btn.addEventListener("click", function () {
        galleryState.cat = btn.dataset.cat;
        renderGalleryTabs();
        renderGalleryGrid();
      });
    });
  }

  function renderGalleryGrid() {
    var grid = $("#gallery-grid");
    if (!grid) return;
    var items = galleryItems(galleryState.cat);
    galleryState.items = items;

    grid.innerHTML = items.map(function (g, i) {
      var alt  = esc(pick(g.alt));
      var size = g.size === "wide" ? " shot--wide" : (g.size === "tall" ? " shot--tall" : "");
      return '<button class="shot media' + size + '" type="button" data-index="' + i + '" ' +
             'style="animation-delay:' + Math.min(i * 45, 500) + 'ms" aria-label="' + alt + '">' +
               '<img src="' + g.file + '" loading="lazy" decoding="async" alt="' + alt + '">' +
               '<div class="media__ph">' + icon("i-camera") +
                 "<span>" + esc(t("cat." + g.cat)) + "</span><small>" + esc(g.file.split("/").pop()) + "</small>" +
               "</div>" +
               '<span class="shot__cap">' + alt + "</span>" +
             "</button>";
    }).join("");

    watchAllImages(grid);

    $$(".shot", grid).forEach(function (btn) {
      btn.addEventListener("click", function () { openLightbox(parseInt(btn.dataset.index, 10)); });
    });
  }

  /* ------------------------------------------------------------------
     Lightbox
     ------------------------------------------------------------------ */

  var lastFocused = null;

  function openLightbox(index) {
    var lb = $("#lightbox");
    if (!lb || !galleryState.items.length) return;
    lastFocused = document.activeElement;
    galleryState.index = index;
    showLightbox();
    lb.classList.add("is-open");
    document.body.classList.add("is-locked");
    requestAnimationFrame(function () { lb.classList.add("is-visible"); });
    $("#lb-close").focus();
  }

  function closeLightbox() {
    var lb = $("#lightbox");
    lb.classList.remove("is-visible");
    document.body.classList.remove("is-locked");
    window.setTimeout(function () { lb.classList.remove("is-open"); }, 200);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function showLightbox() {
    var items = galleryState.items;
    var i = (galleryState.index + items.length) % items.length;
    galleryState.index = i;
    var item = items[i];

    var img = $("#lb-img");
    img.src = item.file;
    img.alt = pick(item.alt);
    $("#lb-cap").textContent   = pick(item.alt);
    $("#lb-count").textContent = t("js.lbCount").replace("{i}", i + 1).replace("{n}", items.length);
  }

  function stepLightbox(delta) {
    galleryState.index += delta;
    showLightbox();
  }

  function initLightbox() {
    var lb = $("#lightbox");
    if (!lb) return;

    $("#lb-close").addEventListener("click", closeLightbox);
    $("#lb-prev").addEventListener("click", function () { stepLightbox(-1); });
    $("#lb-next").addEventListener("click", function () { stepLightbox(1); });

    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lightbox__figure")) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape")     { closeLightbox(); }
      if (e.key === "ArrowLeft")  { stepLightbox(-1); }
      if (e.key === "ArrowRight") { stepLightbox(1); }
    });

    /* Wischen auf dem Handy */
    var startX = null;
    lb.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 55) stepLightbox(dx < 0 ? 1 : -1);
      startX = null;
    }, { passive: true });
  }

  /* ------------------------------------------------------------------
     Ausstattung
     ------------------------------------------------------------------ */

  function renderAmenities() {
    var wrap = $("#amenities");
    if (!wrap) return;
    wrap.innerHTML = (window.AMENITIES || []).map(function (group, i) {
      var items = group.items.map(function (it) {
        return "<li>" + icon("i-check") + "<span>" + esc(pick(it)) + "</span></li>";
      }).join("");
      return '<div data-reveal style="--reveal-delay:' + Math.min(i * 60, 360) + 'ms">' +
               '<h3 class="amen__title">' + icon(group.icon) + esc(pick(group.title)) + "</h3>" +
               '<ul class="amen__list">' + items + "</ul>" +
             "</div>";
    }).join("");
    observeNew(wrap);
  }

  /* ------------------------------------------------------------------
     Bewertungen
     ------------------------------------------------------------------ */

  function renderScoreBars() {
    var wrap = $("#score-bars");
    if (!wrap) return;
    var cats = (CFG.rating && CFG.rating.categories) || [];

    wrap.innerHTML = cats.map(function (c) {
      return "<li>" +
        '<div class="bar__head">' +
          '<span class="bar__name">' + esc(t("bar." + c.key) !== "bar." + c.key ? t("bar." + c.key) : c.name) + "</span>" +
          '<span class="bar__val">' + num(c.value, 1) + "</span>" +
        "</div>" +
        '<div class="bar__track"><span class="bar__fill" data-pct="' + (c.value * 10) + '"></span></div>' +
      "</li>";
    }).join("");

    var fills = $$(".bar__fill", wrap);
    function fill() { fills.forEach(function (f) { f.style.width = f.dataset.pct + "%"; }); }

    if (reduceMotion || !("IntersectionObserver" in window)) { fill(); return; }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { fill(); obs.disconnect(); }
      });
    }, { threshold: 0.3 });
    obs.observe(wrap);
  }

  function renderReviews() {
    var wrap = $("#review-grid");
    if (!wrap) return;
    wrap.innerHTML = (window.REVIEWS || []).map(function (r, i) {
      var stars = new Array(5).join(".").split(".").map(function () { return icon("i-star"); }).join("");
      var countKey = r.count === 1 ? "js.reviewsCountOne" : "js.reviewsCount";
      var meta  = pick(r.country) + (r.count ? " · " + t(countKey).replace("{n}", r.count) : "");
      return '<li class="review" data-reveal style="--reveal-delay:' + Math.min(i * 55, 330) + 'ms">' +
               '<div class="review__top">' +
                 '<span class="review__stars" aria-label="5/5">' + stars + "</span>" +
                 '<span class="review__badge">' + esc(t("js.verified")) + "</span>" +
               "</div>" +
               '<p class="review__quote">' + esc(pick(r.quote)) + "</p>" +
               '<div class="review__who">' +
                 '<span class="review__avatar" aria-hidden="true">' + esc(r.name.charAt(0)) + "</span>" +
                 "<div>" +
                   '<span class="review__name">' + esc(r.name) + "</span><br>" +
                   '<span class="review__from">' + esc(meta) + "</span>" +
                 "</div>" +
               "</div>" +
             "</li>";
    }).join("");
    observeNew(wrap);
  }

  /* ------------------------------------------------------------------
     Lage: Bremen-Karten und Entfernungen
     ------------------------------------------------------------------ */

  function renderPlaces() {
    var wrap = $("#places");
    if (!wrap) return;
    wrap.innerHTML = (window.BREMEN_PLACES || []).map(function (p, i) {
      var title = esc(pick(p.title));
      return '<article class="place media" data-media data-reveal style="--reveal-delay:' + Math.min(i * 70, 420) + 'ms">' +
               '<img src="' + p.file + '" loading="lazy" decoding="async" alt="' + title + ' in Bremen">' +
               '<div class="media__ph">' + icon("i-camera") + "<span>" + title + "</span><small>" + esc(p.file.split("/").pop()) + "</small></div>" +
               '<div class="place__body">' +
                 '<span class="place__dist">' + icon("i-pin") + esc(p.dist) + "</span>" +
                 "<h3>" + title + "</h3>" +
                 "<p>" + esc(pick(p.text)) + "</p>" +
               "</div>" +
             "</article>";
    }).join("");
    watchAllImages(wrap);
    observeNew(wrap);
  }

  function renderDistances() {
    var wrap = $("#distances");
    if (!wrap) return;
    wrap.innerHTML = (window.DISTANCES || []).map(function (d) {
      return "<li>" +
        '<span class="dist-list__icon">' + icon(d.icon) + "</span>" +
        '<span class="dist-list__name">' + esc(pick(d.name)) + "</span>" +
        '<span class="dist-list__val">' + esc(d.value) + "</span>" +
      "</li>";
    }).join("");
  }

  /* ------------------------------------------------------------------
     FAQ
     ------------------------------------------------------------------ */

  function renderFaq() {
    var wrap = $("#faq-list");
    if (!wrap) return;
    wrap.innerHTML = (window.FAQ || []).map(function (f, i) {
      return '<div class="faq__item" data-reveal style="--reveal-delay:' + Math.min(i * 45, 270) + 'ms">' +
               '<button class="faq__q" type="button" aria-expanded="false" aria-controls="faq-a-' + i + '">' +
                 "<span>" + esc(pick(f.q)) + "</span>" +
                 '<span class="faq__icon">' + icon("i-plus") + "</span>" +
               "</button>" +
               '<div class="faq__a" id="faq-a-' + i + '"><div><p>' + esc(pick(f.a)) + "</p></div></div>" +
             "</div>";
    }).join("");

    $$(".faq__q", wrap).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        $$(".faq__q", wrap).forEach(function (b) { b.setAttribute("aria-expanded", "false"); });
        btn.setAttribute("aria-expanded", open ? "false" : "true");
      });
    });

    observeNew(wrap);
  }

  /* ------------------------------------------------------------------
     Kontaktlinks aus config.js
     ------------------------------------------------------------------ */

  function waLink(text) {
    var n = String(CFG.whatsapp || "").replace(/\D/g, "");
    return "https://wa.me/" + n + (text ? "?text=" + encodeURIComponent(text) : "");
  }

  /* Ist eine E-Mail-Adresse hinterlegt? */
  function hasEmail() {
    return !!(CFG.email && CFG.email.indexOf("@") > 0);
  }

  function initContactLinks() {
    var tel = "tel:" + String(CFG.phone || "").replace(/[^\d+]/g, "");

    [["#direct-phone", tel], ["#foot-phone", tel]].forEach(function (p) {
      var el = $(p[0]); if (el) el.href = p[1];
    });
    [["#direct-whatsapp"], ["#foot-wa"], ["#mcta-wa"]].forEach(function (p) {
      var el = $(p[0]); if (el) el.href = waLink("");
    });

    /* Ohne E-Mail-Adresse lieber gar keinen Button als einen ins Leere */
    if (hasEmail()) {
      [["#direct-mail"], ["#foot-mail"]].forEach(function (p) {
        var el = $(p[0]); if (el) el.href = "mailto:" + CFG.email;
      });
      var fm = $("#foot-mail"); if (fm) fm.textContent = CFG.email;
    } else {
      var mailBtn = $("#direct-mail");
      if (mailBtn) mailBtn.remove();
      var mailSendBtn = $('button[data-send="email"]');
      if (mailSendBtn) mailSendBtn.remove();
      var actions = $(".form-actions");
      if (actions) actions.style.gridTemplateColumns = "1fr";
      var footMail = $("#foot-mail");
      if (footMail && footMail.parentNode) footMail.parentNode.remove();
    }

    var fp = $("#foot-phone"); if (fp) fp.textContent = CFG.phone || "—";

    var addr = $("#foot-address");
    if (addr && CFG.address) {
      addr.textContent = CFG.address.street + ", " + CFG.address.zip + " " + CFG.address.city;
    }

    var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------
     Anfrageformular -> WhatsApp / E-Mail
     ------------------------------------------------------------------ */

  function formatDate(value) {
    if (!value) return "";
    var parts = value.split("-");
    if (parts.length !== 3) return value;
    return lang === "de"
      ? parts[2] + "." + parts[1] + "." + parts[0]
      : parts[2] + "/" + parts[1] + "/" + parts[0];
  }

  function status(kind, message) {
    var box = $("#form-status");
    if (!box) return;
    box.className = "form-status is-visible form-status--" + kind;
    box.textContent = message;
  }

  function buildMessage(data) {
    var lines = [];
    lines.push(t("js.msgHello"));
    lines.push("");
    lines.push(t("js.msgIntro"));
    lines.push("");
    lines.push(t("js.msgArrival")   + ": " + formatDate(data.arrival));
    lines.push(t("js.msgDeparture") + ": " + formatDate(data.departure));

    var guests = data.adults + " " + t("js.msgAdults");
    if (parseInt(data.children, 10) > 0) guests += ", " + data.children + " " + t("js.msgChildren");
    lines.push(t("js.msgGuests") + ": " + guests);

    lines.push("");
    lines.push(t("js.msgName") + ": " + data.name);
    if (data.email) lines.push(t("js.msgEmail") + ": " + data.email);
    if (data.phone) lines.push(t("js.msgPhone") + ": " + data.phone);

    if (data.message) {
      lines.push("");
      lines.push(t("js.msgNote") + ": " + data.message);
    }

    lines.push("");
    lines.push(t("js.msgBye"));
    if (data.name) lines.push(data.name);

    return lines.join("\n");
  }

  function initForm() {
    var form = $("#booking-form");
    if (!form) return;

    /* Anreise frühestens heute */
    var today = new Date().toISOString().slice(0, 10);
    var arrival = $("#f-arrival"), departure = $("#f-departure");
    arrival.min = today;
    departure.min = today;
    arrival.addEventListener("change", function () {
      departure.min = arrival.value || today;
      if (departure.value && departure.value <= arrival.value) departure.value = "";
    });

    var mode = "whatsapp";
    $$("button[data-send]", form).forEach(function (btn) {
      btn.addEventListener("click", function () { mode = btn.dataset.send; });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var data = {
        arrival:   arrival.value,
        departure: departure.value,
        adults:    $("#f-adults").value,
        children:  $("#f-children").value,
        name:      $("#f-name").value.trim(),
        email:     $("#f-email").value.trim(),
        phone:     $("#f-phone").value.trim(),
        message:   $("#f-msg").value.trim(),
      };

      if (!data.name)      { status("err", t("js.errName"));  $("#f-name").focus();  return; }
      if (!data.arrival || !data.departure) { status("err", t("js.errDates")); arrival.focus(); return; }
      if (data.departure <= data.arrival)   { status("err", t("js.errOrder")); departure.focus(); return; }

      if (contactMissing()) { status("err", t("js.notConfigured")); return; }

      var text = buildMessage(data);

      if (mode === "email" && !hasEmail()) { mode = "whatsapp"; }

      if (mode === "whatsapp") {
        window.open(waLink(text), "_blank", "noopener");
        status("ok", t("js.okWhatsapp"));
      } else {
        window.location.href = "mailto:" + (CFG.email || "") +
          "?subject=" + encodeURIComponent(t("js.mailSubject")) +
          "&body="    + encodeURIComponent(text);
        status("ok", t("js.okEmail"));
      }
    });
  }

  /* ------------------------------------------------------------------
     Sprachumschaltung
     ------------------------------------------------------------------ */

  var originals = null;

  function captureOriginals() {
    originals = { text: new Map(), attr: new Map(), phrase: new Map() };
    $$("[data-i18n]").forEach(function (el) { originals.text.set(el, el.innerHTML); });
    $$("[data-i18n-placeholder]").forEach(function (el) { originals.attr.set(el, el.placeholder); });
    $$(".chip").forEach(function (el) { originals.phrase.set(el, lastTextNode(el)); });
  }

  function lastTextNode(el) {
    for (var i = el.childNodes.length - 1; i >= 0; i--) {
      var n = el.childNodes[i];
      if (n.nodeType === 3 && n.textContent.trim()) return n;
    }
    return null;
  }

  function applyLanguage(next) {
    lang = next;
    var en = DICT.en || {};
    var phrases = en._phrases || {};

    document.documentElement.lang = lang;

    /* Texte mit Schlüssel */
    $$("[data-i18n]").forEach(function (el) {
      var key = el.dataset.i18n;
      if (lang === "en" && en[key] != null) el.innerHTML = en[key];
      else if (originals.text.has(el))      el.innerHTML = originals.text.get(el);
    });

    /* Platzhalter in Eingabefeldern */
    $$("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.dataset.i18nPlaceholder;
      if (lang === "en" && en[key] != null) el.placeholder = en[key];
      else if (originals.attr.has(el))      el.placeholder = originals.attr.get(el);
    });

    /* Kurze Schlagworte */
    originals.phrase.forEach(function (node, el) {
      if (!node) return;
      var original = el.dataset.original || node.textContent;
      if (!el.dataset.original) el.dataset.original = original;
      var key = original.trim();
      node.textContent = (lang === "en" && phrases[key]) ? phrases[key] : original;
    });

    /* Seitentitel und Beschreibung */
    if (lang === "en") {
      if (en["meta.title"]) document.title = en["meta.title"];
      var md = $('meta[name="description"]');
      if (md && en["meta.desc"]) md.content = en["meta.desc"];
    } else if (originals.title) {
      document.title = originals.title;
      var md2 = $('meta[name="description"]');
      if (md2) md2.content = originals.desc;
    }

    /* Zahlen im Sprachformat */
    $$("[data-count]").forEach(function (el) { renderCount(el, parseFloat(el.dataset.count)); });

    var badge = $(".rating-badge__score");
    if (badge) badge.textContent = num(CFG.rating ? CFG.rating.overall : 9.8, 1);

    var scoreVal = $(".score-card__value");
    if (scoreVal) {
      var firstText = scoreVal.firstChild;
      if (firstText && firstText.nodeType === 3) firstText.textContent = num(CFG.rating ? CFG.rating.overall : 9.8, 1);
    }

    var mScore = $(".mobile-cta__score");
    if (mScore) {
      var mText = lastTextNode(mScore);
      if (mText) mText.textContent = num(CFG.rating ? CFG.rating.overall : 9.8, 1) + " / 10";
    }

    var phoneLabel = $("#phone-label");
    if (phoneLabel) phoneLabel.textContent = t("js.call");

    /* Buttons markieren */
    $$(".lang__btn").forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });

    /* dynamische Bereiche neu aufbauen */
    renderGalleryTabs();
    renderGalleryGrid();
    renderAmenities();
    renderScoreBars();
    renderReviews();
    renderPlaces();
    renderDistances();
    renderFaq();

    try { localStorage.setItem("udd-lang", lang); } catch (err) { /* Privatmodus */ }
  }

  function initLanguage() {
    captureOriginals();
    originals.title = document.title;
    var md = $('meta[name="description"]');
    originals.desc = md ? md.content : "";

    var saved = null;
    try { saved = localStorage.getItem("udd-lang"); } catch (err) { /* ignorieren */ }
    if (!saved && (navigator.language || "").toLowerCase().indexOf("de") !== 0) saved = "en";

    $$(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () { applyLanguage(btn.dataset.lang); });
    });

    applyLanguage(saved === "en" ? "en" : "de");
  }

  /* ------------------------------------------------------------------
     Start
     ------------------------------------------------------------------ */

  function init() {
    watchAllImages();
    initHeader();
    initLightbox();
    initContactLinks();
    initForm();
    initReveal();     /* Beobachter zuerst, damit auch nachgeladene Inhalte einblenden */
    initLanguage();   /* baut Galerie, Bewertungen, FAQ usw. auf */
    initCounters();

    if (contactMissing()) {
      console.warn("[Unter dem Dach] Bitte Kontaktdaten in assets/js/config.js eintragen " +
                   "(Telefon, WhatsApp, E-Mail) — die Buttons funktionieren sonst nicht.");
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

})();
