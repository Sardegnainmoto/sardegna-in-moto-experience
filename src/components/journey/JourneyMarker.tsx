"use client";

import { divIcon } from "leaflet";
import { Marker } from "react-leaflet";
import type { JourneyStage } from "@/data/journey";

type JourneyMarkerProps = {
  stage: JourneyStage;
  active: boolean;
  onSelect: (stage: JourneyStage) => void;
};

export function JourneyMarker({ stage, active, onSelect }: JourneyMarkerProps) {
  const icon = divIcon({
    className: "journey-marker-shell",
    html: `<span class="journey-marker${active ? " journey-marker--active" : ""}">${stage.number}</span>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
  });

  return <Marker position={[stage.latitude, stage.longitude]} icon={icon} eventHandlers={{ click: () => onSelect(stage), mouseover: () => onSelect(stage) }} />;
}
