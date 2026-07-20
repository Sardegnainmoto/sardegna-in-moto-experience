export type Expedition = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  date: string;
  duration: string;
  ridingDays: string;
  distance: string;
  groupSize: string;
  level: string;
  price: string;
  deposit: string;
  motorcycle: string;
  intro: string;
  stats: Array<{ value: string; label: string }>;
  principles: Array<{ title: string; text: string }>;
  itinerary: Array<{ day: string; title: string; location: string; ride?: string; description: string; overnight: string }>;
  gallery: Array<{ src: string; alt: string; size: "large" | "wide" | "standard" }>;
  included: string[];
  excluded: string[];
  options: Array<{ title: string; detail: string }>;
  founder: { name: string; image: string; imageAlt: string; eyebrow: string; title: string; paragraphs: string[] };
  audience: { title: string; paragraphs: string[] };
  spirit: { title: string; paragraphs: string[] };
};

export const tunisiaExpedition: Expedition = {
  slug: "tunisia-desert-experience",
  name: "Tunisia Expedition",
  eyebrow: "Sahara tunisino · 20–25 Marzo 2027",
  description:
    "Quattro giorni di guida attraverso piste, dune e paesaggi spettacolari del Sahara tunisino. Un’esperienza progettata per chi vuole vivere il deserto, non semplicemente attraversarlo.",
  heroImage: "/images/tunisia/hero-sahara.jpg",
  heroAlt: "Motociclisti davanti alle grandi dune del Sahara tunisino",
  date: "20–25 Marzo 2027",
  duration: "6 giorni",
  ridingDays: "4 giorni di guida",
  distance: "430 km",
  groupSize: "Massimo 10 partecipanti",
  level: "Facile - Intermedio",
  price: "€ 2.290",
  deposit: "€ 600",
  motorcycle: "Beta RR 350 4T / Beta RR 300 2T",
  intro:
    "Nel Sahara il rumore si ferma alle spalle. Restano il ritmo della moto, le piste che si allungano fino all’orizzonte e un cielo che, di notte, sembra più vicino. Si viaggia in un gruppo ristretto, con il tempo giusto per seguire le dune, condividere il campo e ritrovare quella libertà che fuori dal deserto è difficile nominare.",
  stats: [
    { value: "430", label: "km di raid" },
    { value: "6", label: "giorni" },
    { value: "4", label: "giorni di guida" },
    { value: "10", label: "partecipanti max" },
    { value: "F–I", label: "livello facile - intermedio" },
    { value: "Beta", label: "RR 350 4T / RR 300 2T" },
    { value: "24/7", label: "assistenza completa" },
    { value: "IT", label: "guida italiana" },
  ],
  principles: [
    { title: "Piccoli gruppi", text: "Dieci partecipanti al massimo. Lo spazio per guidare, ascoltare e condividere resta intatto." },
    { title: "Percorsi selezionati", text: "Piste, dune, oasi e villaggi: ogni tratto è scelto per il carattere del paesaggio, non per riempire una tabella." },
    { title: "Moto preparate", text: "Beta RR leggere e adatte al terreno, assistite lungo tutto il raid da una logistica presente e discreta." },
    { title: "Supporto logistico", text: "Bagagli, campo, trasferimenti e assistenza seguono il gruppo. Tu rimani concentrato su ciò che hai davanti." },
    { title: "Guida esperta", text: "Una guida italiana conduce la spedizione con conoscenza del terreno, dei ritmi e del deserto." },
    { title: "Esperienza autentica", text: "Niente scenografie costruite: campi nel deserto, silenzio, polvere, ospitalità e il tempo di viverli davvero." },
  ],
  itinerary: [
    { day: "Giorno 1", title: "Arrivo e Douz", location: "Douz, Tunisia", description: "Arrivo in Tunisia, transfer verso Douz, sistemazione e briefing. Il raid comincia prima della moto: nel silenzio della sera, con il deserto appena oltre la città.", overnight: "Notte in hotel a Douz" },
    { day: "Giorno 2", title: "Douz — Bib-en", location: "Douz, Tunisia", ride: "110 km · 100% offroad · Livello ★★★☆☆", description: "Al mattino la piazza di Douz e il suo mercato regionale, poi un tè alla menta prima di entrare nel grande Sahara. Primo test sulle dune bianche e morbide fino al mitico Café Le Port du Désert. Per i più esperti, direzione Erg Zmielet e dune fino a Bib-en.", overnight: "Notte in autentico campo tendato in stile beduino" },
    { day: "Giorno 3", title: "Bib-en — Ksar Ghilane — Bib-en", location: "Ksar Ghilane, Tunisia", ride: "100 km · 100% offroad · Livello ★★★☆☆", description: "Un percorso da esploratori, lontano dalle piste principali, nella piccola regione dell’Agria. Si passa dal campo di Zmela e si raggiunge Ksar Ghilane: un’oasi nel deserto, il tempo per un bagno e la visita al fortino romano.", overnight: "Notte in campo tendato" },
    { day: "Giorno 4", title: "Bib-en — Tembaine", location: "Tembaine, Tunisia", ride: "110 km · 100% offroad · Livello ★★★☆☆", description: "Ancora dune, più accessibili ma intensamente scenografiche. Attraversiamo il Parco di Jebil per arrivare al campo di Tembaine, una montagna di roccia che emerge dal deserto.", overnight: "Notte in luxury camp" },
    { day: "Giorno 5", title: "Tembaine — Douz", location: "Douz, Tunisia", ride: "120 km · 100% offroad · Livello ★★★★★", description: "Ultimi colpi di gas e un bel ritmo sulla Pista dei Carretti, per molti la Pista di Meoni: un vero parco giochi fino al rientro a Douz. Dopo pranzo, doccia e transfer in bus verso Tunisi.", overnight: "Notte in hotel a Tunisi" },
    { day: "Giorno 6", title: "Rientro", location: "Tunisi, Tunisia", description: "Transfer in aeroporto e volo di rientro in Italia. Il deserto resta negli occhi, nella polvere e nei ricordi che iniziano a sedimentare.", overnight: "Volo di rientro" },
  ],
  gallery: [
    { src: "/images/tunisia/riders-piste.png", alt: "Riders in moto su una pista del Sahara tunisino", size: "large" },
    { src: "/images/tunisia/desert-camp.png", alt: "Campo tendato tra le dune", size: "standard" },
    { src: "/images/tunisia/return-dunes.png", alt: "Fuoristrada di assistenza tra le dune", size: "standard" },
    { src: "/images/tunisia/support-camp.png", alt: "Campo e assistenza al tramonto nel deserto", size: "wide" },
    { src: "/images/tunisia/ksar-ghilane.webp", alt: "Oasi di Ksar Ghilane", size: "standard" },
    { src: "/images/tunisia/arrival-village.png", alt: "Architettura tradizionale tunisina", size: "standard" },
  ],
  included: ["Iscrizione al raid", "Hotel + cena: sistemazione come da programma in camera doppia; bevande ed extra esclusi", "Transfer in minibus Tunisi — Douz A/R", "Trasporto bagagli al seguito, massimo 60 L", "Staff Sud Est Raid: assistenza e supporto per tutta la durata del viaggio", "Assistenza meccanica + recupero mezzo in caso di necessità", "Noleggio moto Beta RR 350 4T oppure Beta RR 300 2T", "Europ Assistance per spese di rimpatrio sanitario", "Gadget"],
  excluded: ["Volo A/R", "Pasti durante il transfer e cena a Tunisi", "Bevande ed extra in hotel", "Carburante moto", "Tutto ciò che non è indicato nella quota comprende"],
  options: [
    { title: "Assicurazione danni moto · € 40", detail: "Copertura fino a un massimo di € 500." },
    { title: "Noleggio abbigliamento da enduro · € 50", detail: "Un’opzione pensata per viaggiare più leggeri." },
  ],
  founder: {
    name: "Mauro Sanna",
    image: "/images/marocco-dune-raid.jpg",
    imageAlt: "Motociclisti nel deserto durante una spedizione",
    eyebrow: "Chi sono",
    title: "Un viaggio nasce sempre da una passione.",
    paragraphs: [
      "Mi chiamo Mauro Sanna e il deserto è sempre stato molto più di una semplice destinazione.",
      "Ho creato Sardegna in Moto Experience perché, quando cercavo un’esperienza come questa, non riuscivo a trovare un viaggio che rispecchiasse davvero ciò che desideravo.",
      "Volevo un gruppo ristretto, un’organizzazione curata, percorsi autentici e persone accomunate dalla stessa passione. Così ho deciso di creare io quell’esperienza.",
      "Oggi accompagno motociclisti provenienti da tutta Italia e, sempre più spesso, anche da altri Paesi, creando gruppi uniti dalla voglia di vivere un’avventura autentica.",
      "Ogni viaggio è diverso. Ogni gruppo crea amicizie, ricordi ed esperienze che continuano anche dopo il rientro.",
    ],
  },
  audience: {
    title: "Per chi cerca qualcosa di diverso.",
    paragraphs: [
      "Tunisia Expedition è pensata per chi desidera vivere il deserto in modo autentico. Non è una vacanza organizzata e non è un classico tour commerciale.",
      "È un’esperienza dedicata a chi vuole mettersi in gioco, migliorare la propria guida, affrontare piste e dune in sicurezza e condividere il viaggio con persone che hanno la stessa passione.",
      "Non serve essere un pilota professionista. Serve soltanto la voglia di partire con la mente aperta e vivere qualcosa che difficilmente dimenticherai.",
    ],
  },
  spirit: {
    title: "Si guida. Si sorride. Si cresce insieme.",
    paragraphs: [
      "Ogni giornata inizia presto. Si prepara la moto, si controlla l’attrezzatura e si parte verso il deserto.",
      "Durante il raid ci saranno piste, dune, oasi, panorami incredibili e momenti che metteranno alla prova ogni partecipante. Ci si aiuta quando serve, si affrontano insieme le difficoltà e si condividono le soddisfazioni.",
      "La sera ci si ritrova a tavola o sotto un cielo pieno di stelle per raccontare la giornata appena trascorsa e preparare quella successiva. È questo lo spirito di Tunisia Expedition.",
    ],
  },
};
