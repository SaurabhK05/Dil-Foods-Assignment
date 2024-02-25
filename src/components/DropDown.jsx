import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CompanyRevenue } from "../models/CompanyRevenue";
import { setLineChartDataSet } from "../store/ChartsDataStore";
import { useDispatch } from "react-redux";

export default function DropDown() {
  const [year, setYear] = React.useState(2022);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedData = CompanyRevenue.filter((data) => {
      if (data.year == event.target.value) {
        return data;
      }
    });
    dispatch(setLineChartDataSet(selectedData[0]));
    setYear(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Year</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={year}
        label="Year"
        onChange={handleChange}
      >
        {CompanyRevenue.map((data) => {
          return <MenuItem value={data.year}>{data.year}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
