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
    alt: { de: "Gemütlicher Wohnbereich mit Sofa und Flachbild-TV der Ferienwohnung in Bremen",
           en: "Cosy living area with sofa and flat-screen TV of the holiday flat in Bremen" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-02.jpg",
    alt: { de: "Sitzbereich mit Couch, die sich zum Bett für zwei Personen ausklappen lässt",
           en: "Seating area with sofa that converts into a bed for two" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-03.jpg",
    alt: { de: "Essbereich mit Tisch und vier Sitzplätzen in der Ferienwohnung",
           en: "Dining area with table and four seats in the holiday flat" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-04.jpg",
    alt: { de: "Heller Wohnraum mit Blick in den Garten",
           en: "Bright living room with garden view" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-05.jpg",
    alt: { de: "Wohnbereich mit Streaming-fähigem LED-Fernseher",
           en: "Living area with streaming-ready LED television" } },
  { cat: "wohnzimmer", file: "assets/img/wohnzimmer/wohnzimmer-06.jpg",
    alt: { de: "Gemütliche Leseecke der Ferienwohnung Unter dem Dach",
           en: "Cosy reading corner of the Unter dem Dach holiday flat" } },

  /* ---- Schlafzimmer ----------------------------------------------------- */
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-01.jpg", size: "tall",
    alt: { de: "Schlafzimmer mit französischem Doppelbett, Fenster und Stuhl",
           en: "Bedroom with double bed, window and chair" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-02.jpg",
    alt: { de: "Großes Bett mit zwei Nachttischlampen im Schlafzimmer",
           en: "Large bed with two bedside lamps in the bedroom" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-03.jpg",
    alt: { de: "Schlafzimmer mit Spiegel und weichem Teppich",
           en: "Bedroom with mirror and soft rug" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-04.jpg",
    alt: { de: "Nachttisch mit Leselampe neben dem Bett",
           en: "Bedside table with reading lamp next to the bed" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-05.jpg",
    alt: { de: "Hölzerne Kommode mit Blumenvase im Schlafzimmer",
           en: "Wooden chest of drawers with flower vase in the bedroom" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-06.jpg",
    alt: { de: "Geräumiger Kleiderschrank aus Holz im Schlafzimmer",
           en: "Spacious wooden wardrobe in the bedroom" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-07.jpg",
    alt: { de: "Frisch bezogenes Bett mit hochwertiger Bettwäsche",
           en: "Freshly made bed with quality linen" } },
  { cat: "schlafzimmer", file: "assets/img/schlafzimmer/schlafzimmer-08.jpg",
    alt: { de: "Schlafbereich mit Steckdose in Bettnähe und Wecker",
           en: "Sleeping area with socket near the bed and alarm clock" } },

  /* ---- Küche ------------------------------------------------------------ */
  { cat: "kueche", file: "assets/img/kueche/kueche-01.jpg", size: "wide",
    alt: { de: "Offene Küche mit hölzerner Arbeitsplatte und drei Barhockern",
           en: "Open kitchen with wooden worktop and three bar stools" } },
  { cat: "kueche", file: "assets/img/kueche/kueche-02.jpg",
    alt: { de: "Küchenzeile mit Induktionskochfeld und Spülmaschine",
           en: "Kitchenette with induction hob and dishwasher" } },
  { cat: "kueche", file: "assets/img/kueche/kueche-03.jpg",
    alt: { de: "Küche mit Kaffeemaschine, Wasserkocher und Toaster",
           en: "Kitchen with coffee machine, kettle and toaster" } },
  { cat: "kueche", file: "assets/img/kueche/kueche-04.jpg",
    alt: { de: "Theke mit Barhockern als Frühstücksplatz",
           en: "Counter with bar stools as a breakfast spot" } },
  { cat: "kueche", file: "assets/img/kueche/kueche-05.jpg",
    alt: { de: "Vollständig ausgestattete Küche mit Kühlschrank und Mikrowelle",
           en: "Fully equipped kitchen with fridge and microwave" } },
  { cat: "kueche", file: "assets/img/kueche/kueche-06.jpg",
    alt: { de: "Esstisch mit vier Sitzplätzen neben der Küchenzeile",
           en: "Dining table with four seats next to the kitchenette" } },

  /* ---- Badezimmer ------------------------------------------------------- */
  { cat: "bad", file: "assets/img/bad/bad-01.jpg",
    alt: { de: "Neu saniertes Badezimmer mit Dusche und Badewanne",
           en: "Newly renovated bathroom with shower and bathtub" } },
  { cat: "bad", file: "assets/img/bad/bad-02.jpg",
    alt: { de: "Badewanne im hellen Badezimmer der Ferienwohnung",
           en: "Bathtub in the bright bathroom of the holiday flat" } },
  { cat: "bad", file: "assets/img/bad/bad-03.jpg",
    alt: { de: "Waschbecken mit Spiegel und kostenlosen Pflegeprodukten",
           en: "Washbasin with mirror and complimentary toiletries" } },
  { cat: "bad", file: "assets/img/bad/bad-04.jpg",
    alt: { de: "Dusche mit Handtüchern und Föhn im Badezimmer",
           en: "Shower with towels and hairdryer in the bathroom" } },

  /* ---- Außen, Parkplatz & Haus ------------------------------------------ */
  { cat: "aussen", file: "assets/img/aussen/aussen-01.jpg", size: "wide",
    alt: { de: "Kostenloser Privatparkplatz direkt an der Unterkunft in Bremen",
           en: "Free private parking space right at the property in Bremen" } },
  { cat: "aussen", file: "assets/img/aussen/aussen-02.jpg",
    alt: { de: "Hauseingang der Ferienwohnung in ruhiger Seitenstraße",
           en: "Entrance of the holiday flat in a quiet side street" } },
  { cat: "aussen", file: "assets/img/aussen/aussen-03.jpg",
    alt: { de: "Garten mit Grillmöglichkeit an der Unterkunft",
           en: "Garden with barbecue facilities at the property" } },
  { cat: "aussen", file: "assets/img/aussen/aussen-04.jpg",
    alt: { de: "Gartenblick von der Ferienwohnung aus",
           en: "Garden view from the holiday flat" } },
  { cat: "aussen", file: "assets/img/aussen/aussen-05.jpg",
    alt: { de: "Ruhige Wohnstraße in Bremen-Arbergen mit Rad- und Spazierwegen",
           en: "Quiet residential street in Bremen-Arbergen with cycling and walking paths" } },
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
