import { createSlice, configureStore } from "@reduxjs/toolkit";
import { globalInitialState } from "./InitialState";

const ChartsDataSlice = createSlice({
  name: "ChartData",
  initialState: globalInitialState,
  reducers: {
    setLineChartDataSet: (state, action) => {
      state.lineChartDataSet = action.payload;
    },
    setPieUserActivityDataSet: (state, action) => {
      state.pieUserActivityDataSet = action.payload;
    },
    setBarSOPDataSet: (state, action) => {
      state.barSOPDataSet = action.payload;
    },
    setCOPInRevenue: (state, action) => {
      state.pieCOPInRevenue = action.payload;
    },
    setProfitByYear: (state, action) => {
      state.profitByYear = action.payload;
    },
    setStarProductOfYear: (state, action) => {
      state.starProductOfYear = action.payload;
    },
    setHighestUsersByStateOrRegion: (state, action) => {
      state.highestUsersByStateOrRegion = action.payload;
    },
  },
});

export const {
  setLineChartDataSet,
  setPieUserActivityDataSet,
  setBarSOPDataSet,
  setCOPInRevenue,
  setProfitByYear,
  setStarProductOfYear,
  setHighestUsersByStateOrRegion,
} = ChartsDataSlice.actions;

const ChartsDataStore = configureStore({
  reducer: ChartsDataSlice.reducer,
});

export default ChartsDataStore;
