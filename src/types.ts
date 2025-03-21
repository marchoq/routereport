export type Coordinations = {
  lat: number
  lng: number
}

export interface SimpleRouteProps {
  start: Coordinations
  end: Coordinations
}

export interface MapWithRouteProps {
  start: Coordinations
  end: Coordinations
  zoom: number
}
