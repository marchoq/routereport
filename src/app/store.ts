import { configureStore } from "@reduxjs/toolkit"
import { carsApiSlice } from "@/features/route-report/stores/carsApiSlice"
import { routeReportSlice } from "@/features/route-report/stores/routeReportSlice"

export const store = configureStore({
  reducer: {
    [carsApiSlice.reducerPath]: carsApiSlice.reducer,
    [routeReportSlice.reducerPath]: routeReportSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(carsApiSlice.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
