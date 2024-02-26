import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  setLineChartDataSet,
  setPieUserActivityDataSet,
  setBarSOPDataSet,
  setCOPInRevenue,
  setProfitByYear,
} from "../store/ChartsDataStore";
import { useDispatch } from "react-redux";

export default function DropDown(props) {
  const [year, setYear] = React.useState(2022);
  const [region, setRegion] = React.useState("State");
  const dispatch = useDispatch();

  const filterDataYearly = (dataSource, event) => {
    const selectedData = dataSource.filter((data) => {
      if (data.year == event.target.value) {
        return data;
      }
    });
    return selectedData[0];
  };

  if (props.dataSourceType === "year-wise") {
    const handleChange = (event) => {
      const filterSalesOfProducts = filterDataYearly(
        props.dataSource.salesOfProducts,
        event
      );
      const filterRovCompany = filterDataYearly(
        props.dataSource.rovCompany,
        event
      );
      const filterCopInRevenue = filterDataYearly(
        props.dataSource.copInRevenue,
        event
      );
      const filterProfitByYear = filterDataYearly(
        props.dataSource.profitByYear,
        event
      );

      dispatch(setBarSOPDataSet(filterSalesOfProducts));
      dispatch(setLineChartDataSet(filterRovCompany));
      dispatch(setCOPInRevenue(filterCopInRevenue));
      dispatch(setProfitByYear(filterProfitByYear));

      setYear(event.target.value);
    };

    return (
      <FormControl
        sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
        size="small"
      >
        <InputLabel id="demo-select-small-label">Year</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={year}
          label="Year"
          onChange={handleChange}
        >
          {props.dataSource.salesOfProducts.map((data) => {
            return <MenuItem value={data.year}>{data.year}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  } else {
    const handleChange = (event) => {
      if (event.target.value === "Region") {
        dispatch(
          setPieUserActivityDataSet(props.dataSource.userActivity.region)
        );
        setRegion(event.target.value);
      } else {
        dispatch(
          setPieUserActivityDataSet(props.dataSource.userActivity.state)
        );
        setRegion(event.target.value);
      }
    };

    return (
      <FormControl
        sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
        size="small"
      >
        <InputLabel id="demo-select-small-label">Year</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={region}
          label="Users"
          onChange={handleChange}
        >
          <MenuItem value="Region">Region</MenuItem>;
          <MenuItem value="State">State</MenuItem>;
        </Select>
      </FormControl>
    );
  }
}
