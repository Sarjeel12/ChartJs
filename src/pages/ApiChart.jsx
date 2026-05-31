
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
);
export const ApiChart = () => {
  const [country] = useState({
    labels: ['China', 'India', 'United States', 'Indonesia', 'Pakistan', 'Brazil', 'Nigeria', 'Bangladesh', 'Russia', 'Mexico'],
    datasets: [
      {
        label: "Population (in millions)",
        data: [1412, 1406, 338, 275, 240, 215, 223, 170, 146, 128],
        backgroundColor: "rgba(53, 162, 235, 0.7)",
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
        <h2>World Population Chart (Top 10 Countries)</h2>
        
        <div style={{ height: "400px" }}>
          <Line data={country} />
        </div>
      </div>
    </>
  );
};

