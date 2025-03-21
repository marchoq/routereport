import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { MAPPON_API_BASE_URL, MAPPON_API_KEY } from "@/config/apiConfig"

interface Car {
  id: number
  name: string
}

interface CarsApiResponse {
  data: any
}

export const carsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: MAPPON_API_BASE_URL }),
  reducerPath: "carsApi",
  endpoints: build => ({
    getCars: build.query<CarsApiResponse, {}>({
      query: () => {
        return {
          url: "unit/list.json",
          params: {
            key: MAPPON_API_KEY,
          },
        }
      },
    }),
  }),
})

export const { useGetCarsQuery } = carsApiSlice
