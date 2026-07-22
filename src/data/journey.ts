export type JourneyStage = {
  number: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
};

export const tunisiaJourney: JourneyStage[] = [
  { number: 1, title: "Tunisi", description: "Arrivo in Tunisia e trasferimento verso Douz.", latitude: 36.8065, longitude: 10.1815 },
  { number: 2, title: "Douz", description: "Preparazione delle moto e briefing prima del raid.", latitude: 33.4663, longitude: 9.0215 },
  { number: 3, title: "Ksar Ghilane", description: "Ingresso nel Sahara e prime dune tra oasi e piste remote.", latitude: 32.9837, longitude: 9.6419 },
  { number: 4, title: "Tembaine", description: "Raid nel deserto e notte al campo tendato, ai piedi della montagna.", latitude: 32.815, longitude: 9.602 },
  { number: 5, title: "Douz", description: "Rientro dal deserto, ultimi chilometri di guida e tempo per ritrovarsi.", latitude: 33.458, longitude: 9.034 },
  { number: 6, title: "Tunisi", description: "Trasferimento verso l’aeroporto e rientro in Italia.", latitude: 36.812, longitude: 10.194 },
];
