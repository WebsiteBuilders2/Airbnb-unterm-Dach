/* ==========================================================================
   INHALTE — Ausstattung, Bewertungen, FAQ, Entfernungen
   --------------------------------------------------------------------------
   Jeder Eintrag steht hier einmal auf Deutsch (de) und einmal auf
   Englisch (en). Zum Ändern einfach den Text zwischen den
   Anführungszeichen anpassen.
   ========================================================================== */

/* ---- Ausstattung ------------------------------------------------------- */
window.AMENITIES = [
  {
    icon: "i-parking",
    title: { de: "Parken & Anreise", en: "Parking & arrival" },
    items: [
      { de: "Kostenloser Privatparkplatz am Haus", en: "Free private parking at the property" },
      { de: "Keine Reservierung nötig",            en: "No reservation required" },
      { de: "Flughafentransfer auf Anfrage",       en: "Airport shuttle on request" },
      { de: "Fahrradverleih auf Anfrage",          en: "Bicycle rental on request" },
      { de: "Bahnhof Sebaldsbrück in 1,1 km",      en: "Sebaldsbrück station 1.1 km away" },
    ],
  },
  {
    icon: "i-kitchen",
    title: { de: "Küche", en: "Kitchen" },
    items: [
      { de: "2 Induktionskochplatten",   en: "2 induction hobs" },
      { de: "Spülmaschine",              en: "Dishwasher" },
      { de: "Kühlschrank",               en: "Refrigerator" },
      { de: "Mikrowelle",                en: "Microwave" },
      { de: "Kaffeemaschine",            en: "Coffee machine" },
      { de: "Wasserkocher & Toaster",    en: "Kettle & toaster" },
      { de: "Küchenutensilien & Geschirr", en: "Kitchenware & crockery" },
      { de: "Spülmittel & Geschirrspültabs", en: "Washing-up liquid & dishwasher tabs" },
      { de: "Esstisch für 4 Personen",   en: "Dining table for 4" },
      { de: "Kinderhochstuhl",           en: "High chair" },
    ],
  },
  {
    icon: "i-bath",
    title: { de: "Badezimmer", en: "Bathroom" },
    items: [
      { de: "Badewanne",                    en: "Bathtub" },
      { de: "Separate Dusche",              en: "Separate shower" },
      { de: "Handtücher inklusive",         en: "Towels included" },
      { de: "Föhn",                         en: "Hairdryer" },
      { de: "Kostenfreie Pflegeprodukte",   en: "Complimentary toiletries" },
      { de: "Toilettenpapier vorhanden",    en: "Toilet paper provided" },
    ],
  },
  {
    icon: "i-bed",
    title: { de: "Schlafen & Wohnen", en: "Sleeping & living" },
    items: [
      { de: "Französisches Doppelbett", en: "French double bed" },
      { de: "Schlafsofa für 2 Erwachsene", en: "Sofa bed for 2 adults" },
      { de: "Bettwäsche inklusive",     en: "Bed linen included" },
      { de: "Großer Kleiderschrank",    en: "Large wardrobe" },
      { de: "Steckdose in Bettnähe",    en: "Socket near the bed" },
      { de: "Wecker",                   en: "Alarm clock" },
      { de: "Allergikerfreundlich",     en: "Allergy-friendly" },
      { de: "Schalldämmung",            en: "Soundproofing" },
    ],
  },
  {
    icon: "i-tv",
    title: { de: "Medien & Technik", en: "Media & technology" },
    items: [
      { de: "Kostenfreies WLAN",                 en: "Free Wi-Fi" },
      { de: "Flachbild-TV",                      en: "Flat-screen TV" },
      { de: "Streaming-Dienste (z. B. Netflix)", en: "Streaming services (e.g. Netflix)" },
      { de: "Satellitenempfang",                 en: "Satellite channels" },
      { de: "Heizung",                           en: "Heating" },
    ],
  },
  {
    icon: "i-leaf",
    title: { de: "Außenbereich & Freizeit", en: "Outdoors & leisure" },
    items: [
      { de: "Grillmöglichkeit",           en: "Barbecue facilities" },
      { de: "Blick auf den Garten",       en: "Garden view" },
      { de: "Rad- und Spazierwege direkt vor der Tür", en: "Cycling and walking paths right outside" },
      { de: "Wandermöglichkeiten in der Umgebung", en: "Hiking options nearby" },
      { de: "Ruhige Seitenstraße",        en: "Quiet side street" },
    ],
  },
  {
    icon: "i-shield",
    title: { de: "Sicherheit", en: "Safety" },
    items: [
      { de: "Rauchmelder",                       en: "Smoke detector" },
      { de: "Kohlenmonoxid-Melder",              en: "Carbon monoxide detector" },
      { de: "Feuerlöscher",                      en: "Fire extinguisher" },
      { de: "Videoüberwachung im Außenbereich",  en: "CCTV in outdoor areas" },
      { de: "Nichtraucherunterkunft",            en: "Non-smoking property" },
    ],
  },
  {
    icon: "i-sparkle",
    title: { de: "Service", en: "Service" },
    items: [
      { de: "Persönliche Schlüsselübergabe",  en: "Personal key handover" },
      { de: "Gastgeber sprechen 4 Sprachen",  en: "Hosts speak four languages" },
      { de: "Rechnung auf Anfrage",           en: "Invoice on request" },
      { de: "Weckservice",                    en: "Wake-up service" },
      { de: "Lebensmittellieferung möglich",  en: "Grocery delivery available" },
    ],
  },
];

/* ---- Echte Gästebewertungen (Booking.com) ------------------------------- */
window.REVIEWS = [
  { name: "Volker", country: { de: "Deutschland", en: "Germany" }, count: 11,
    quote: {
      de: "Der Besitzer (Christoph) und der damit verbundene Umgang mit seinen Kunden, seine Grundeinstellung sollte jedem Vermieter von Unterkünften ein Maßstab sein. Die Sauberkeit und Ordnung der Wohnung. Top, vielen Dank.",
      en: "The owner (Christoph) and the way he deals with his guests — his whole attitude should be a benchmark for every host. And the cleanliness and tidiness of the flat. Top marks, thank you very much." } },

  { name: "Marilena", country: { de: "Deutschland", en: "Germany" }, count: 20,
    quote: {
      de: "Wirklich sehr gut ausgestattete Wohnung, es gibt sogar vom Duschgel bis zu Geschirrspültabs alles schon vor Ort! Sehr nette Gastgeber, sehr höflich und hilfsbereit, versuchen einem bei allem zu helfen und alles schön zu machen!",
      en: "A really well-equipped flat — everything from shower gel to dishwasher tabs is already there! Very nice hosts, very polite and helpful, they try to help with everything and make it all lovely." } },

  { name: "Bouchaib", country: { de: "Deutschland", en: "Germany" }, count: 47,
    quote: {
      de: "Sehr schön eingerichtet, als wäre es für Familienmitglieder vorbereitet und der Parkplatz ganz für mich alleine 😊",
      en: "Beautifully furnished, as if it had been prepared for family members — and the parking space all to myself 😊" } },

  { name: "Salzer", country: { de: "Deutschland", en: "Germany" }, count: 14,
    quote: {
      de: "Sehr sympathische Vermieter. Alles blitzeblank sauber, funktional und gemütlich. Schöne offene Küche, in der man direkt anfangen kann zu kochen und nicht erst putzen muss. Der Parkplatz vor der Tür rundet alles ab.",
      en: "Very likeable hosts. Everything spotlessly clean, functional and cosy. A lovely open kitchen where you can start cooking straight away instead of cleaning first. The parking space at the door rounds it all off." } },

  { name: "Britta", country: { de: "Deutschland", en: "Germany" }, count: null,
    quote: {
      de: "Wir kommen wieder. Bei unseren zukünftigen Bremen-Reisen haben wir ein neues kleines „Zuhause auf Zeit“ gefunden. Danke dafür! Es war alles super und schöner, als wir erwartet haben.",
      en: "We'll be back. For our future trips to Bremen we've found a new little 'home away from home'. Thank you! Everything was great and even nicer than we expected." } },

  { name: "Christian", country: { de: "Deutschland", en: "Germany" }, count: 1,
    quote: {
      de: "Schön ausgestattet und sehr sauber. Es wurde alles nach unseren Bedürfnissen ausgelegt. Wir waren mit zwei kleinen Kindern da und für diese wurden sogar schon die Betten aufgebaut.",
      en: "Nicely equipped and very clean. Everything was arranged around our needs. We came with two small children and the beds for them had even been set up in advance." } },

  { name: "Anton", country: { de: "Deutschland", en: "Germany" }, count: 46,
    quote: {
      de: "War einfach perfekt! Super sauber, sehr netter Empfang! Bis in die Stadtmitte muss man etwas fahren, dafür kriegt man aber Ruhe in der Gegend!",
      en: "Simply perfect! Super clean, a very warm welcome! It's a bit of a drive into the city centre, but in return you get real peace and quiet in the area." } },

  { name: "Serdar", country: { de: "Frankreich", en: "France" }, count: 2,
    quote: {
      de: "Sehr sauber, sehr nette Eigentümer. Super ausgestattet, familienfreundlich und sehr komfortabel.",
      en: "Very clean, very nice owners. Superbly equipped, family-friendly and very comfortable." } },

  { name: "Kevin", country: { de: "Deutschland", en: "Germany" }, count: 26,
    quote: {
      de: "Sehr saubere Wohnung, sehr netter Vermieter. Gutes Preis-Leistungs-Verhältnis.",
      en: "Very clean flat, very nice host. Good value for money." } },

  { name: "Georg", country: { de: "Deutschland", en: "Germany" }, count: 11,
    quote: {
      de: "Gute Erreichbarkeit, grandiose Gastgeber, die einem das Leben leicht gemacht haben.",
      en: "Easy to reach, and wonderful hosts who made life easy for us." } },
];

/* ---- Entfernungen -------------------------------------------------------- */
window.DISTANCES = [
  { icon: "i-car",   value: "≈ 8 Min.", name: { de: "Mercedes-Werk Bremen",        en: "Mercedes plant Bremen" } },
  { icon: "i-train", value: "1,1 km",   name: { de: "Bahnhof Sebaldsbrück",        en: "Sebaldsbrück railway station" } },
  { icon: "i-pin",   value: "3,5 km",   name: { de: "Osterholzer Wiesen",          en: "Osterholzer Wiesen" } },
  { icon: "i-pin",   value: "5 km",     name: { de: "Kiddo Erlebniswelt",          en: "Kiddo adventure world" } },
  { icon: "i-pin",   value: "7 km",     name: { de: "Focke-Museum & Rhododendron-Park", en: "Focke Museum & Rhododendron Park" } },
  { icon: "i-pin",   value: "≈ 8 km",   name: { de: "Bremer Innenstadt",           en: "Bremen city centre" } },
  { icon: "i-pin",   value: "9 km",     name: { de: "Marktplatz & Böttcherstraße", en: "Market square & Böttcherstrasse" } },
  { icon: "i-train", value: "10 km",    name: { de: "Hauptbahnhof Bremen",         en: "Bremen central station" } },
  { icon: "i-plane", value: "12 km",    name: { de: "Flughafen Bremen",            en: "Bremen airport" } },
];

/* ---- Häufige Fragen ------------------------------------------------------ */
window.FAQ = [
  { q: { de: "Gibt es wirklich einen eigenen Parkplatz?",
         en: "Is there really a private parking space?" },
    a: { de: "Ja. Zur Wohnung gehört ein eigener Privatparkplatz direkt am Haus — kostenfrei, ohne Reservierung und während Ihres gesamten Aufenthalts nur für Sie. Gerade in Bremen ist das eine echte Erleichterung.",
         en: "Yes. The flat comes with its own private parking space right at the house — free of charge, no reservation needed and reserved for you throughout your stay. In Bremen that's a real relief." } },

  { q: { de: "Wie weit ist es in die Bremer Innenstadt?",
         en: "How far is it to Bremen city centre?" },
    a: { de: "Der Bremer Marktplatz mit Rathaus, Roland und den Stadtmusikanten liegt rund 8 bis 9 km entfernt — mit dem Auto etwa 15 Minuten. Der Bahnhof Sebaldsbrück ist nur 1,1 km entfernt, von dort fahren Sie bequem ohne Auto in die Stadt.",
         en: "Bremen's market square with the town hall, the Roland statue and the Town Musicians is about 8 to 9 km away — roughly 15 minutes by car. Sebaldsbrück station is only 1.1 km away, so you can easily reach the centre without a car." } },

  { q: { de: "Wie viele Personen finden Platz?",
         en: "How many people can stay?" },
    a: { de: "Bis zu 4 Personen. Im Schlafzimmer steht ein französisches Doppelbett, im Wohnbereich eine neue Couch mit Schlafmöglichkeit für zwei Erwachsene. Für Familien mit kleinen Kindern stellen wir auf Wunsch Kinderbetten und einen Hochstuhl bereit — sagen Sie einfach bei der Anfrage Bescheid.",
         en: "Up to 4 people. The bedroom has a French double bed, and the living area has a new sofa that converts into a bed for two adults. For families with small children we can provide children's beds and a high chair on request — just let us know when you enquire." } },

  { q: { de: "Was ist im Preis enthalten?",
         en: "What is included in the price?" },
    a: { de: "Bettwäsche und ein Handtuch pro Person, kostenfreies WLAN, der Privatparkplatz sowie eine komplett ausgestattete Küche. Auch Duschgel, Toilettenpapier, Spülmittel und Geschirrspültabs sind bereits vor Ort — Sie müssen nichts mitbringen.",
         en: "Bed linen and one towel per person, free Wi-Fi, the private parking space and a fully equipped kitchen. Shower gel, toilet paper, washing-up liquid and dishwasher tabs are already there too — you don't need to bring anything." } },

  { q: { de: "Wann kann ich einchecken und auschecken?",
         en: "When can I check in and out?" },
    a: { de: "Check-in ist in der Regel zwischen 15:00 und 20:00 Uhr, Check-out bis 11:00 Uhr. Wir übergeben die Schlüssel persönlich. Bei früherer Ankunft oder späterer Abreise finden wir fast immer eine Lösung — fragen Sie einfach.",
         en: "Check-in is normally between 3 pm and 8 pm, check-out by 11 am. We hand over the keys in person. If you arrive earlier or leave later we can almost always find a solution — just ask." } },

  { q: { de: "Eignet sich die Wohnung für Monteure und Geschäftsreisende?",
         en: "Is the flat suitable for contractors and business travellers?" },
    a: { de: "Sehr gut sogar. Das Mercedes-Werk Bremen erreichen Sie mit dem Auto oder Fahrrad in etwa 8 Minuten. Der eigene Parkplatz, die voll ausgestattete Küche und die ruhige Lage machen auch längere Aufenthalte angenehm. Eine Rechnung stellen wir Ihnen gern aus.",
         en: "Very much so. The Mercedes plant in Bremen is about 8 minutes away by car or bike. The private parking space, the fully equipped kitchen and the quiet location also make longer stays comfortable. We are happy to issue an invoice." } },

  { q: { de: "Sind Haustiere erlaubt? Darf man rauchen?",
         en: "Are pets allowed? Is smoking permitted?" },
    a: { de: "Haustiere können wir leider nicht aufnehmen. Die gesamte Unterkunft ist zudem Nichtraucherbereich — dafür ist sie allergikerfreundlich eingerichtet.",
         en: "Unfortunately we cannot accommodate pets. The entire property is also non-smoking — in return it is furnished to be allergy-friendly." } },

  { q: { de: "Wie läuft die Buchung ab?",
         en: "How does booking work?" },
    a: { de: "Schicken Sie uns Ihre Wunschtermine über das Formular, per WhatsApp oder telefonisch. Wir melden uns meist innerhalb weniger Stunden mit einer verbindlichen Zusage und dem Preis zurück. Die Anfrage ist unverbindlich und kostet Sie nichts.",
         en: "Send us your preferred dates via the form, by WhatsApp or by phone. We usually get back to you within a few hours with a firm confirmation and the price. Enquiring is free and without obligation." } },
];
