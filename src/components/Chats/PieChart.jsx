import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const NumberOfUsers = useSelector((state) => state.pieUserActivityDataSet);

  const data = {
    labels: NumberOfUsers.map((label) => label.Key),
    datasets: [
      {
        label: "No of Users",
        data: NumberOfUsers.map((data) => data.Number_of_Users),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(0, 255, 167, .2)",
          "rgba(60, 179, 113, .2)",
          "rgba(255, 218, 185, .5)",
          "rgba(176, 224, 230, .1)",
          "rgba(221, 160, 221, .1)",
          "rgba(240, 128, 128, .3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}
