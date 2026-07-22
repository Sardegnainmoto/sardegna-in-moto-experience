"use client";

import { useEffect } from "react";
import { MapContainer, Polyline, TileLayer, useMap } from "react-leaflet";
import type { JourneyStage } from "@/data/journey";
import { JourneyMarker } from "@/components/journey/JourneyMarker";

type JourneyMapProps = {
  stages: JourneyStage[];
  activeStage: JourneyStage;
  onStageSelect: (stage: JourneyStage) => void;
};

function MapFocus({ stage }: { stage: JourneyStage }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([stage.latitude, stage.longitude], 8, { animate: true, duration: 0.8 });
  }, [map, stage]);

  return null;
}

export default function JourneyMap({ stages, activeStage, onStageSelect }: JourneyMapProps) {
  const route = stages.map((stage) => [stage.latitude, stage.longitude] as [number, number]);

  return <div className="journey-map relative h-[340px] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-sand shadow-[0_24px_70px_rgba(17,18,15,.12)] sm:h-[400px] lg:h-[640px]" aria-label="Mappa del percorso del raid">
    <MapContainer center={route[0]} zoom={7} scrollWheelZoom={false} className="h-full w-full" aria-label="Mappa interattiva del percorso Tunisia Expedition">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline positions={route} pathOptions={{ color: "#a34e2c", weight: 3, opacity: 0.85, dashArray: "8 8" }} />
      {stages.map((stage) => <JourneyMarker key={stage.number} stage={stage} active={stage.number === activeStage.number} onSelect={onStageSelect} />)}
      <MapFocus stage={activeStage} />
    </MapContainer>
    <p className="pointer-events-none absolute bottom-3 left-4 z-[500] rounded-full bg-canvas/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-ink/60 shadow-sm backdrop-blur">OpenStreetMap</p>
  </div>;
}
