// PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ principal, interest }) => {
  const data = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [principal, interest],
        backgroundColor: ["#800000", "#FFA500"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "300px", height: "300px", margin: "auto" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
