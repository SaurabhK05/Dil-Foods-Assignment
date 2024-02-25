import { COPInRevenue, CompanyRevenue } from "../models/CompanyRevenue";
import { SalesOfProducts } from "../models/SalesOfProducts";
import { NumberOfUsers } from "../models/UserActivity";

export const globalInitialState = {
  lineChartDataSet: CompanyRevenue[0],
  pieUserActivityDataSet: NumberOfUsers.state,
  pieCOPInRevenue: COPInRevenue[0],
  barSOPDataSet: SalesOfProducts[0],
};
