/* ==========================================================================
   BILDER DER GALERIE
   --------------------------------------------------------------------------
   So fügst du deine Fotos ein:

   1. Lege die Datei in den passenden Ordner unter assets/img/…
   2. Benenne sie exakt so wie unten bei "file" angegeben
      (z. B. assets/img/kueche/kueche-01.jpg)
   3. Fertig – das Bild erscheint automatisch, kein Code muss geändert werden.

   Fehlt eine Datei noch, zeigt die Seite an dieser Stelle einen dezenten
   Platzhalter, damit das Layout trotzdem fertig aussieht.

   Mehr Bilder? Einfach eine weitere Zeile nach demselben Muster ergänzen.
   Weniger Bilder? Zeile löschen.

   size: "wide" = doppelt so breit, "tall" = doppelt so hoch, sonst weglassen
   ========================================================================== */

window.GALLERY = [

  /* ---- Wohnbereich ------------------------------------------------------ */
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-01.jpg", size: "wide",
    alt: { de: "Heller Wohnbereich mit großer grauer Eckcouch, Sessel, rundem Holztisch und zwei Fenstern mit Blick ins Grüne",
           en: "Bright living area with a large grey corner sofa, armchair, round wooden table and two windows overlooking greenery" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-02.jpg",
    alt: { de: "Graue Eckcouch mit Kissen, rundem Holz-Couchtisch und flauschigem Teppich vor einem Blumenbild",
           en: "Grey corner sofa with cushions, a round wooden coffee table and a soft rug beneath a floral painting" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-03.jpg",
    alt: { de: "Großer Flachbild-TV auf einem Holzsideboard mit Stehlampe und Zimmerpflanze unter der Dachschräge",
           en: "Large flat-screen TV on a wooden sideboard with a floor lamp and houseplant beneath the sloped ceiling" } },

  /* ---- Schlafzimmer ----------------------------------------------------- */
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-01.jpg", size: "wide",
    alt: { de: "Zwei frisch bezogene Betten nebeneinander, eines mit gepolstertem Kopfteil, dazu Nachttischlampe und Wandspiegel",
           en: "Two freshly made beds side by side, one with an upholstered headboard, plus a bedside lamp and wall mirror" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-02.jpg",
    alt: { de: "Schlafzimmer mit Holzbett, Kronleuchter, Fenster, Wandspiegel und großem Teppich auf Holzboden",
           en: "Bedroom with a wooden bed, chandelier, window, wall mirror and a large rug on a wooden floor" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-03.jpg",
    alt: { de: "Geräumiger Massivholz-Kleiderschrank und Kommode mit Blumenvase im Schlafzimmer",
           en: "Spacious solid-wood wardrobe and chest of drawers with a flower vase in the bedroom" } },

  /* ---- Küche ------------------------------------------------------------ */
  { cat: "kueche", file: "assets/img/kueche/kueche-01.jpg", size: "wide",
    alt: { de: "Offene Küche mit massiver Holztheke, vier Barhockern, schwarzer Dunstabzugshaube und Wand in Natursteinoptik",
           en: "Open kitchen with a solid wood counter, four bar stools, black extractor hood and stone-look feature wall" } },
  { cat: "kueche", file: "assets/img/kueche/kueche-02.jpg",
    alt: { de: "Blick über die Holztheke auf die Küchenzeile mit Induktionsfeld, Spüle, Kaffeemaschine und Fenster",
           en: "View across the wooden counter to the kitchenette with induction hob, sink, coffee machine and window" } },
  { cat: "kueche", file: "assets/img/kueche/kueche-03.jpg",
    alt: { de: "Natursteinwand mit Holzsideboard, Mikrowelle und Mülltrennung in der Küche der Ferienwohnung",
           en: "Stone-clad wall with wooden sideboard, microwave and waste separation in the holiday flat's kitchen" } },

  /* ---- Badezimmer ------------------------------------------------------- */
  { cat: "bad", file: "assets/img/bad/bad-01.jpg",
    alt: { de: "Runde Duschkabine aus Glas mit Handbrause, daneben ein Holzregal mit frischen Handtüchern und einer Orchidee",
           en: "Rounded glass shower cabin with hand shower, next to a wooden shelf holding fresh towels and an orchid" } },
  { cat: "bad", file: "assets/img/bad/bad-02.jpg",
    alt: { de: "Eckbadewanne mit Handbrause unter der Dachschräge im hell gefliesten Badezimmer",
           en: "Corner bathtub with hand shower beneath the sloped ceiling in the brightly tiled bathroom" } },
  { cat: "bad", file: "assets/img/bad/bad-03.jpg",
    alt: { de: "Waschbecken mit dunklem Unterschrank und beleuchtetem Spiegel im Badezimmer",
           en: "Washbasin with a dark vanity unit and illuminated mirror in the bathroom" } },

  /* ---- Außen, Parkplatz & Haus ------------------------------------------ */
  { cat: "aussen", file: "assets/img/aussen/aussen-01.jpg", size: "wide",
    alt: { de: "Kostenloser Privatparkplatz direkt an der Unterkunft in Bremen-Arbergen",
           en: "Free private parking space right at the property in Bremen-Arbergen" } },
  { cat: "aussen", file: "assets/img/aussen/aussen-02.jpg",
    alt: { de: "Hauseingang der Ferienwohnung in ruhiger Seitenstraße",
           en: "Entrance to the holiday flat in a quiet side street" } },
];

/* ==========================================================================
   BREMEN — Bilder für die Sektion „Lage & Bremen erleben"
   Dateien nach assets/img/bremen/ legen.
   ========================================================================== */

window.BREMEN_PLACES = [
  { file: "assets/img/bremen/marktplatz.jpg",     dist: "9 km",
    title: { de: "Bremer Marktplatz",    en: "Bremen Market Square" },
    text:  { de: "Rathaus, Roland und die Bremer Stadtmusikanten – das UNESCO-Welterbe im Herzen der Stadt.",
             en: "Town hall, Roland statue and the Town Musicians – UNESCO World Heritage in the heart of the city." } },
  { file: "assets/img/bremen/boettcherstrasse.jpg", dist: "9 km",
    title: { de: "Böttcherstraße",       en: "Böttcherstrasse" },
    text:  { de: "Expressionistische Backsteinarchitektur, kleine Galerien und Handwerkskunst auf 100 Metern.",
             en: "Expressionist brick architecture, small galleries and crafts along 100 metres." } },
  { file: "assets/img/bremen/schnoor.jpg",        dist: "9 km",
    title: { de: "Schnoorviertel",       en: "Schnoor Quarter" },
    text:  { de: "Das älteste Viertel Bremens mit verwinkelten Gassen, Cafés und kleinen Läden.",
             en: "Bremen's oldest quarter with winding lanes, cafés and small shops." } },
  { file: "assets/img/bremen/schlachte.jpg",      dist: "9 km",
    title: { de: "Schlachte-Promenade",  en: "Schlachte Promenade" },
    text:  { de: "Weserufer mit Biergärten, Restaurants und Blick auf die Segelschiffe.",
             en: "Weser riverfront with beer gardens, restaurants and views of the sailing ships." } },
  { file: "assets/img/bremen/universum.jpg",      dist: "9 km",
    title: { de: "Universum Bremen",     en: "Universum Bremen" },
    text:  { de: "Science Center zum Anfassen – bei Familien mit Kindern der Favorit.",
             en: "Hands-on science centre – the favourite for families with children." } },
  { file: "assets/img/bremen/buergerpark.jpg",    dist: "9 km",
    title: { de: "Bürgerpark",           en: "Bürgerpark" },
    text:  { de: "Weitläufige grüne Oase für lange Spaziergänge und entspannte Nachmittage.",
             en: "Sprawling green oasis for long walks and relaxed afternoons." } },
];
