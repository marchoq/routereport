import { createAppSlice } from "@/app/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  vehicleData: {},
  date: {},
}

export const routeReportSlice = createAppSlice({
  name: "routeReport",
  initialState,
  reducers: {
    addVehicleData: (state, action: PayloadAction<object>) => {
      state.vehicleData = action.payload
      console.log("state.vehicleData", state.vehicleData)
    },
  },

  selectors: {},
})

export const { addVehicleData } = routeReportSlice.actions
