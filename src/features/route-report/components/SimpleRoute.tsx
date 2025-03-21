import { SimpleRouteProps } from "@/types"
import { useMap } from "@vis.gl/react-google-maps"
import { useEffect } from "react"

export const SimpleRoute = ({ start, end }: SimpleRouteProps) => {
  const map = useMap()

  useEffect(() => {
    if (!map) {
      return
    }

    const routeLine = new google.maps.Polyline({
      path: [start, end],
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    })

    routeLine.setMap(map)

    return () => {
      routeLine.setMap(null)
    }
  }, [map, start, end])

  //   @todo complete polyline
  return null
}
