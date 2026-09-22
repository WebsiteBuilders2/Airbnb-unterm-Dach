# Unter dem Dach mit Parkplatz — Landingpage

Landingpage für die Ferienwohnung **Unter dem Dach mit Parkplatz**, Rothaarstraße 23, 28307 Bremen.

Ziel der Seite: Vertrauen aufbauen und Gäste dazu bewegen, **direkt** anzufragen —
ohne Portalgebühren. Zentraler Vertrauensanker sind die **109 Gästebewertungen mit
einem Schnitt von 9,8 von 10 Punkten**.

Die Seite besteht aus reinem HTML, CSS und JavaScript. Es gibt **keinen Build-Schritt**,
keine Abhängigkeiten und nichts zu installieren. Doppelklick auf `index.html` genügt zum Ansehen.

---

## Die drei Dinge, die noch zu tun sind

### 1. Kontaktdaten eintragen (wichtig — sonst funktionieren die Buttons nicht)

Öffne **`assets/js/config.js`** und ersetze die drei markierten Werte:

```js
phone:    "+49 000 0000000",                  // eure Telefonnummer
whatsapp: "490000000000",                     // WhatsApp: NUR Ziffern, mit 49, ohne + und ohne Leerzeichen
email:    "info@unter-dem-dach-bremen.de",    // eure E-Mail-Adresse
```

> **WhatsApp-Nummer richtig schreiben:** aus `+49 171 1234567` wird `491711234567`.
> Also: das `+`, alle Leerzeichen und eine führende `0` weglassen.

Solange dort noch Platzhalter stehen, zeigt das Formular einen entsprechenden Hinweis an.

### 2. Fotos einfügen

In jedem Bildordner liegt eine Datei `_HIER-BILDER-ABLEGEN.txt` mit den erwarteten Dateinamen.
Lege deine Fotos einfach unter genau diesen Namen ab — **es muss nichts am Code geändert werden.**

| Ordner | Inhalt | Anzahl | Status |
|---|---|---|---|
| `assets/img/hero/` | Titelbild: Küchenansicht mit Theke | 1 | Foto vorhanden |
| `assets/img/wohnzimmer/` | Eckcouch, Couchtisch, Fernsehbereich | 3 | Fotos vorhanden |
| `assets/img/schlafzimmer/` | Betten, Zimmerübersicht, Massivholzschrank | 3 | Fotos vorhanden |
| `assets/img/kueche/` | Theke mit Barhockern, Küchenzeile, Natursteinwand | 3 | Fotos vorhanden |
| `assets/img/bad/` | Duschkabine, Eckbadewanne, Waschbecken | 3 | Fotos vorhanden |
| `assets/img/aussen/` | Parkplatz, Hauseingang | 2 | Parkplatz da, Hauseingang fehlt |
| `assets/img/bremen/` | Marktplatz, Schnoor, Schlachte, Wallanlagen | 4 | Fotos vorhanden (Pexels) |
| `assets/img/host/` | Porträt von Christoph | 1 | Foto vorhanden |
| `assets/img/og/` | Vorschaubild fürs Teilen, 1200 × 630 Pixel | 1 | Foto vorhanden |

> **Achtung bei `bad-03.jpg`:** Diese Aufnahme lag quer vor. Nach dem Hochladen bitte
> auf der Seite kontrollieren — falls sie seitlich erscheint, einmal im Fotoprogramm
> aufrecht drehen, neu speichern und erneut hochladen.

> **Hoch- oder Querformat:** Die vier breiten Kacheln der Galerie sind für Querformat
> gedacht (`wohnzimmer-01`, `wohnzimmer-03`, `schlafzimmer-03`, `kueche-01`). Wer die
> Zuordnung ändert, passt in `assets/js/gallery.js` einfach `size: "wide"` an — sonst
> werden Hochformat-Fotos oben und unten stark beschnitten.

**Solange ein Bild fehlt, zeigt die Seite an der Stelle einen dezent gestalteten Platzhalter.**
Die Seite sieht also zu keinem Zeitpunkt kaputt aus — sie füllt sich Stück für Stück.

Empfehlungen für die Fotos:
- Breite **1600–2000 Pixel**, Querformat (das Titelbild gern 2400 Pixel breit)
- Dateigröße möglichst **unter 400 KB** — sonst lädt die Seite auf dem Handy langsam
- Kostenlos verkleinern lässt sich das z. B. auf [squoosh.app](https://squoosh.app)

Mehr oder weniger Bilder gewünscht? In **`assets/js/gallery.js`** einfach Zeilen ergänzen
oder löschen. Jede Zeile enthält Dateiname, Bereich und den Bildtext (wichtig für Google
und für blinde Nutzer).

### 3. Impressum und Datenschutz ausfüllen

`impressum.html` und `datenschutz.html` sind vorbereitet, aber alle **farbig markierten
Stellen** müssen noch durch echte Angaben ersetzt werden. In Deutschland ist ein
vollständiges Impressum Pflicht — ohne kann es teuer werden.

---

## Wo ändere ich welchen Text?

| Was | Wo |
|---|---|
| Alle deutschen Texte der Startseite | `index.html` |
| Alle englischen Texte | `assets/js/i18n.js` |
| Ausstattungslisten, Bewertungen, FAQ, Entfernungen | `assets/js/content.js` (deutsch und englisch nebeneinander) |
| Bilder und Bildtexte | `assets/js/gallery.js` |
| Kontaktdaten, Bewertungszahlen | `assets/js/config.js` |
| Farben, Schriften, Abstände | ganz oben in `assets/css/styles.css` |

---

## Aufbau der Seite

1. **Hero** — Titelbild mit Bewertungs-Badge 9,8/10 und den wichtigsten Fakten
2. **Vertrauensleiste** — 9,8 · 109+ Bewertungen · 10,0 Sauberkeit · 9,9 Komfort
3. **Warum bei uns** — sechs Vorteile, u. a. eigener Parkplatz und Innenstadt unter 8 km
4. **Galerie** — nach Räumen filterbar, mit Großansicht (Pfeiltasten und Wischen)
5. **Die Wohnung** — Wohnbereich, Schlafzimmer, Küche, Bad im Detail
6. **Ausstattung** — acht Kategorien
7. **Bewertungen** — Punkte je Kategorie plus zehn echte Gästestimmen
8. **Lage & Bremen** — Sehenswürdigkeiten, Entfernungstabelle, Karte
9. **Gastgeber** — Christoph persönlich
10. **FAQ** — die acht häufigsten Fragen
11. **Anfrage** — Formular plus WhatsApp, Telefon, E-Mail
12. **Footer** und feste Anfrage-Leiste am unteren Rand auf dem Handy

## Wie funktioniert das Anfrageformular?

Es sendet **nichts an einen Server**. Aus den Eingaben wird im Browser eine fertige
Nachricht gebaut, die sich dann in WhatsApp oder im E-Mail-Programm des Gastes öffnet.
Vorteile: kein Server, keine Kosten, keine Anmeldung, keine DSGVO-Fallstricke — und die
Anfrage landet direkt in eurem gewohnten Posteingang.

## Sprachen

Deutsch ist die Hauptsprache und steht direkt im HTML. Der Umschalter **DE / EN** oben
rechts wechselt auf Englisch; die Wahl wird im Browser des Besuchers gemerkt. Besucher
mit einem nicht-deutschen Browser sehen die Seite automatisch auf Englisch.

## Für Suchmaschinen

- Strukturierte Daten (Schema.org) für die Unterkunft **inklusive der Bewertung 9,8 bei
  109 Bewertungen** — dadurch kann Google Sterne direkt in den Suchergebnissen anzeigen
- Eigene strukturierte Daten für die FAQ
- Vorschaubilder für WhatsApp, Facebook und LinkedIn
- `robots.txt` und `sitemap.xml` liegen bei

> Nach dem Veröffentlichen unter der echten Domain: in `index.html` die Zeile
> `<link rel="canonical" …>`, die `og:image`-Adresse sowie `robots.txt` und `sitemap.xml`
> auf eure tatsächliche Adresse anpassen.

---

## Veröffentlichen

Es ist eine reine statische Website — jeder Webspace funktioniert.

**GitHub Pages (kostenlos):**
Repository → Settings → Pages → Source: `Deploy from a branch` → Branch auswählen → Ordner `/ (root)`.

**Netlify (kostenlos):**
Ordner auf [app.netlify.com/drop](https://app.netlify.com/drop) ziehen — fertig.
Eigene Domain lässt sich dort direkt verbinden.

**Eigener Webspace (z. B. IONOS, Strato, All-Inkl):**
Alle Dateien per FTP in das Verzeichnis `httpdocs` bzw. `public_html` hochladen.

## Lokal ansehen

Doppelklick auf `index.html` genügt in den meisten Fällen. Wer es „echt“ testen möchte:

```bash
python3 -m http.server 8000
# danach im Browser: http://localhost:8000
```

## Optional: Schriften lokal einbinden (noch datenschutzfreundlicher)

Aktuell kommen die Schriften von Google Fonts. Wer ganz ohne externe Verbindung auskommen will:

1. Schriften auf [gwfh.mranftl.com](https://gwfh.mranftl.com) herunterladen (Fraunces, Inter)
2. Die `.woff2`-Dateien nach `assets/fonts/` legen
3. In `index.html` die beiden `<link …fonts.googleapis.com…>`-Zeilen löschen
4. In `assets/css/styles.css` ganz oben `@font-face`-Regeln ergänzen
5. Den entsprechenden Abschnitt in `datenschutz.html` streichen

## Barrierefreiheit und Technik

- Vollständig per Tastatur bedienbar (Galerie, FAQ, Menü)
- Sichtbare Fokusmarkierung, sinnvolle Beschriftungen für Screenreader
- Respektiert die Systemeinstellung „Bewegung reduzieren“
- Bilder laden verzögert nach, feste Seitenverhältnisse verhindern Springen beim Laden
- Getestet ab 360 Pixel Bildschirmbreite
