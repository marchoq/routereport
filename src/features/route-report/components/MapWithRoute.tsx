import { RootState } from "@/app/store"
import { GOOGLE_MAPS_API_KEY } from "@/config/apiConfig"
import { MapWithRouteProps } from "@/types"
import { getMapCenter } from "@/utils/mapHelpers"
import { Marker, APIProvider, Map } from "@vis.gl/react-google-maps"
import { useSelector } from "react-redux"
import { SimpleRoute } from "./SimpleRoute"

export const MapWithRoute = ({ start, end, zoom }: MapWithRouteProps) => {
  const vehicleData = useSelector(
    (state: RootState) => state.routeReport.vehicleData,
  )

  if (!GOOGLE_MAPS_API_KEY) {
    return <div>Error: Google Maps API key is missing</div>
  }

  const center = getMapCenter(start, end)

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "200px", width: "100%" }}>
        <Map defaultZoom={zoom} defaultCenter={center}>
          <Marker position={start} />
          <Marker position={end} />
          <SimpleRoute start={start} end={end} />
        </Map>
      </div>
    </APIProvider>
  )
}
