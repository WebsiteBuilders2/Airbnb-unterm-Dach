/* ==========================================================================
   ZENTRALE KONFIGURATION
   --------------------------------------------------------------------------
   >>> HIER DEINE ECHTEN KONTAKTDATEN EINTRAGEN <<<
   Das ist die einzige Datei, die du für Kontaktdaten anfassen musst.
   Alle Buttons, Links und das Anfrageformular greifen darauf zu.
   ========================================================================== */

window.SITE_CONFIG = {

  /* ---- Kontakt --------------------------------------------------------- */

  // Telefonnummer im internationalen Format (für den Anruf-Button)
  // BEISPIEL: "+49 421 1234567"
  phone: "+49 000 0000000",            // <<< BITTE ERSETZEN

  // WhatsApp-Nummer NUR MIT ZIFFERN, mit Ländervorwahl, ohne + und ohne Leerzeichen
  // BEISPIEL: aus +49 171 1234567  wird  "491711234567"
  whatsapp: "490000000000",            // <<< BITTE ERSETZEN

  // E-Mail-Adresse für Anfragen
  email: "info@unter-dem-dach-bremen.de",   // <<< BITTE ERSETZEN

  /* ---- Unterkunft ------------------------------------------------------ */

  hostName: "Christoph Bednarczyk",
  propertyName: "Unter dem Dach mit Parkplatz",

  address: {
    street:   "Rothaarstraße 23",
    zip:      "28307",
    city:     "Bremen",
    district: "Hemelingen / Arbergen",
    country:  "Deutschland",
  },

  // Koordinaten für die Karte (ungefähre Lage Rothaarstraße, Bremen-Arbergen)
  geo: { lat: 53.0546, lng: 8.9264 },

  /* ---- Bewertungen (aus dem Booking.com-Profil) ------------------------- */

  rating: {
    overall: 9.8,
    count:   109,
    categories: [
      { key: "cleanliness", name: "Sauberkeit",              value: 10.0 },
      { key: "comfort",     name: "Komfort",                 value: 9.9  },
      { key: "staff",       name: "Gastgeber",               value: 9.8  },
      { key: "facilities",  name: "Ausstattung",             value: 9.8  },
      { key: "value",       name: "Preis-Leistung",          value: 9.6  },
      { key: "wifi",        name: "WLAN",                    value: 9.5  },
      { key: "location",    name: "Lage",                    value: 9.0  },
    ],
  },

  /* ---- Optional -------------------------------------------------------- */

  // Falls du zusätzlich auf euer Booking.com-Inserat verlinken möchtest,
  // hier die URL eintragen. Leer lassen = kein Link auf der Seite.
  bookingComUrl: "",

  // Check-in / Check-out für das FAQ
  checkIn:  "15:00 – 20:00 Uhr",
  checkOut: "bis 11:00 Uhr",
};
