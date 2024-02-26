import {
  COPInRevenue,
  CompanyRevenue,
  ProfitAndRatioByYear as ProfitByYear,
} from "../models/CompanyRevenue";
import { SalesOfProducts, StarProductOfYear } from "../models/SalesOfProducts";
import {
  HighestUsersByStateOrRegion,
  NumberOfUsers,
} from "../models/UserActivity";

export const globalInitialState = {
  lineChartDataSet: CompanyRevenue[0],
  pieUserActivityDataSet: NumberOfUsers.state,
  highestUsersByStateOrRegion: HighestUsersByStateOrRegion.state,
  pieCOPInRevenue: COPInRevenue[0],
  barSOPDataSet: SalesOfProducts[0],
  profitByYear: ProfitByYear[0],
  starProductOfYear: StarProductOfYear[0],
};
