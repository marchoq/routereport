import { Coordinations } from "@/types"

export function getMapCenter(start: Coordinations, end: Coordinations) {
  const centerLat = (start.lat + end.lat) / 2
  const centerLng = (start.lng + end.lng) / 2

  return { lat: centerLat, lng: centerLng }
}
