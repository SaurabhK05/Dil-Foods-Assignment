import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Company Revenue",
    },
  },
};

export default function LineChart() {
  const CompanyRevenue = useSelector((state) => state.lineChartDataSet);
  const chartData = {
    labels: CompanyRevenue.data.map((Data) => Data.month),
    datasets: [
      {
        label: "Revenue",
        data: CompanyRevenue.data.map((Data) => Data.revenue),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",

        // borderWidth: 2,
      },
      {
        label: "Profit",
        data: CompanyRevenue.data.map((Data) => Data.profit),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        // borderWidth: 2,
      },
    ],
  };

  return <Line options={options} data={chartData} />;
}
