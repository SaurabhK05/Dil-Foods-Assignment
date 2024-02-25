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
} from "../store/ChartsDataStore";
import { useDispatch } from "react-redux";

export default function DropDown(props) {
  const [year, setYear] = React.useState(2022);
  const [region, setRegion] = React.useState("State");
  const dispatch = useDispatch();

  if (props.dataSourceType === "line-chart") {
    const handleChange = (event) => {
      const selectedData = props.dataSource.filter((data) => {
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
          {props.dataSource.map((data) => {
            return <MenuItem value={data.year}>{data.year}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  } else if (props.dataSourceType === "pie-chart") {
    const handleChange = (event) => {
      if (event.target.value == "Region") {
        // console.log(regionSumsArray, "regionSumsArray");
        dispatch(setPieUserActivityDataSet(props.dataSource.region));
        setRegion(event.target.value);
      } else {
        dispatch(setPieUserActivityDataSet(props.dataSource.state));
        setRegion(event.target.value);
      }
    };

    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
  } else if (props.dataSourceType === "prod-pie-chart") {
    const handleChange = (event) => {
      const selectedData = props.dataSource.filter((data) => {
        if (data.year == event.target.value) {
          return data;
        }
      });
      console.log(selectedData, "selectedata");
      dispatch(setCOPInRevenue(selectedData[0]));
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
          {props.dataSource.map((el) => {
            return <MenuItem value={el.year}>{el.year}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  } else {
    const handleChange = (event) => {
      const selectedData = props.dataSource.filter((data) => {
        if (data.year == event.target.value) {
          return data;
        }
      });
      dispatch(setBarSOPDataSet(selectedData[0]));
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
          {props.dataSource.map((el) => {
            return <MenuItem value={el.year}>{el.year}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  }
}
