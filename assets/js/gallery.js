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
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-01.jpg",
    alt: { de: "Heller Wohnbereich mit großer grauer Eckcouch, Sessel und zwei Fenstern mit Blick über die Dächer ins Grüne",
           en: "Bright living area with a large grey corner sofa, armchair and two windows looking over the rooftops into the greenery" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-02.jpg",
    alt: { de: "Fernsehbereich mit großem Flachbild-TV auf Holzsideboard, Stehlampe und Zimmerpflanze unter der Dachschräge",
           en: "TV corner with a large flat-screen on a wooden sideboard, floor lamp and houseplant beneath the sloped ceiling" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-03.jpg",
    alt: { de: "Sitzecke mit Sofa und Sessel am Fenster im Wohnbereich der Ferienwohnung",
           en: "Seating corner with sofa and armchair by the window in the holiday flat's living area" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-04.jpg",
    alt: { de: "Blick über die Eckcouch zur Zimmertür, mit rundem Couchtisch und Stehleuchte",
           en: "View across the corner sofa towards the door, with a round coffee table and floor lamp" } },

  /* ---- Schlafzimmer ----------------------------------------------------- */
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-01.jpg",
    alt: { de: "Zwei frisch bezogene Betten nebeneinander, eines mit gepolstertem Kopfteil, dazu Nachttischlampe und Wandspiegel",
           en: "Two freshly made beds side by side, one with an upholstered headboard, plus a bedside lamp and wall mirror" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-02.jpg",
    alt: { de: "Schlafzimmer mit Holzbett, Kronleuchter, Fenster und großem Teppich auf Holzboden",
           en: "Bedroom with a wooden bed, chandelier, window and a large rug on a wooden floor" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-03.jpg",
    alt: { de: "Geräumiger Massivholz-Kleiderschrank und Kommode mit Blumenvase im Schlafzimmer",
           en: "Spacious solid-wood wardrobe and chest of drawers with a flower vase in the bedroom" } },

  /* ---- Küche ------------------------------------------------------------ */
  { cat: "kueche", file: "assets/img/kueche/kueche-01.jpg",
    alt: { de: "Offene Küche mit massiver Holztheke, vier Barhockern, schwarzer Dunstabzugshaube und Wand in Natursteinoptik",
           en: "Open kitchen with a solid wood counter, four bar stools, black extractor hood and stone-look feature wall" } },
  { cat: "kueche", file: "assets/img/kueche/kueche-02.jpg",
    alt: { de: "Blick über die Holztheke mit Obstschale auf die Küchenzeile mit Induktionsfeld, Spüle und Kaffeemaschine",
           en: "View across the wooden counter with a fruit bowl to the kitchenette with induction hob, sink and coffee machine" } },
  { cat: "kueche", file: "assets/img/kueche/kueche-03.jpg",
    alt: { de: "Natursteinwand mit Holzsideboard, Mikrowelle und Mülltrennung in der Küche",
           en: "Stone-clad wall with wooden sideboard, microwave and waste separation in the kitchen" } },

  /* ---- Badezimmer ------------------------------------------------------- */
  { cat: "bad", file: "assets/img/bad/bad-01.jpg",
    alt: { de: "Runde Duschkabine aus Glas, daneben ein Holzregal mit frischen Handtüchern und einer Orchidee",
           en: "Rounded glass shower cabin next to a wooden shelf holding fresh towels and an orchid" } },
  { cat: "bad", file: "assets/img/bad/bad-02.jpg",
    alt: { de: "Eckbadewanne mit Handbrause unter der Dachschräge im hell gefliesten Badezimmer",
           en: "Corner bathtub with hand shower beneath the sloped ceiling in the brightly tiled bathroom" } },
  { cat: "bad", file: "assets/img/bad/bad-03.jpg",
    alt: { de: "Waschbecken mit dunklem Unterschrank, beleuchtetem Spiegel und WC im hell gefliesten Badezimmer",
           en: "Washbasin with dark vanity unit, illuminated mirror and toilet in the brightly tiled bathroom" } },

  /* ---- Außen & Parkplatz ------------------------------------------------ */
  { cat: "aussen", file: "assets/img/aussen/aussen-01.jpg",
    alt: { de: "Großzügiger gepflasterter Privatparkplatz direkt an der Unterkunft, eingefasst von gepflegten Beeten",
           en: "Spacious paved private parking area right at the property, framed by well-kept planted borders" } },
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
