import { createSlice, configureStore } from "@reduxjs/toolkit";
import { globalInitialState } from "./InitialState";

const ChartsDataSlice = createSlice({
  name: "ChartData",
  initialState: globalInitialState,
  reducers: {
    setLineChartDataSet: (state, action) => {
      state.lineChartDataSet = action.payload;
    },
  },
});

export const { setLineChartDataSet } = ChartsDataSlice.actions;

const ChartsDataStore = configureStore({
  reducer: ChartsDataSlice.reducer,
});

export default ChartsDataStore;
