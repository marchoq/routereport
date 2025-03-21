import { useGetCarsQuery } from "@/features/route-report/stores/carsApiSlice"
import { useDispatch } from "react-redux"
import { addVehicleData } from "../stores/routeReportSlice"
import { useEffect } from "react"

export const CarSelect = () => {
  const { data, isLoading } = useGetCarsQuery({})
  const dispatch = useDispatch()

  useEffect(() => {
    if (data && data.data.units.length > 0) {
      const firstCar = data.data.units[0]
      dispatch(addVehicleData(firstCar))
    }
  }, [data])

  function handleCarChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedNumber = e.target.value
    const selectedCar = data?.data.units.find(
      (car: any) => car.number === selectedNumber,
    )

    if (selectedCar) {
      dispatch(addVehicleData(selectedCar))
    }
  }

  return (
    <div>
      <label htmlFor="cars">Choose a car:</label>

      <select name="cars" id="cars" defaultValue="" onChange={handleCarChange}>
        {isLoading ? (
          <option>Loading vehicle numbers...</option>
        ) : (
          <>
            {data &&
              data?.data.units.map((car: any) => (
                <option key={car.number} value={car.number}>
                  {car.number}
                </option>
              ))}
          </>
        )}
      </select>
    </div>
  )
}
