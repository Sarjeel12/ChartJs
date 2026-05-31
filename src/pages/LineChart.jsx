// import React, { useState } from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Line, Bar } from 'react-chartjs-2';

// // Register Chart.js components
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// );

// export const LineChart = () => {
//     const [chartType, setChartType] = useState('line'); // Toggle between 'line' and 'bar'

//     // Chart data configuration
//     const data = {
//         // X-axis labels (months)
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],

//         // Datasets contain the actual data to display
//         datasets: [
//             {
//                 label: 'Monthly Sales',  // Legend label
//                 data: [10, 20, 15, 25, 30, 22, 35],  // Y-axis values
//                 borderColor: 'rgb(255, 99, 132)',  // Line/Bar color
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',  // Fill color
//                 tension: 0.3,  // Line smoothness (only for line charts)
//                 fill: true,  // Fill area under line
//             },
//         ],
//     };

//     // Chart configuration options
//     const options = {
//         responsive: true,  // Makes chart responsive to window size
//         maintainAspectRatio: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top',  // Legend position
//             },
//             title: {
//                 display: true,
//                 text: `${chartType === 'line' ? 'Line' : 'Bar'} Chart Example`,
//                 font: { size: 16 },
//             },
//         },
//         scales: {
//             y: {
//                 beginAtZero: true,  // Y-axis starts at 0
//                 max: 40,  // Maximum value on Y-axis
//             },
//         },
//     };

//     return (
//         <div style={{ width: '100%', padding: '20px' }}>
//             {/* Button to toggle between Line and Bar charts */}
//             <div style={{ marginBottom: '20px' }}>
//                 <button
//                     onClick={() => setChartType('line')}
//                     style={{
//                         padding: '10px 20px',
//                         marginRight: '10px',
//                         backgroundColor: chartType === 'line' ? '#007bff' : '#e0e0e0',
//                         color: chartType === 'line' ? 'white' : 'black',
//                         border: 'none',
//                         borderRadius: '5px',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     Line Chart
//                 </button>
//                 <button
//                     onClick={() => setChartType('bar')}
//                     style={{
//                         padding: '10px 20px',
//                         backgroundColor: chartType === 'bar' ? '#007bff' : '#e0e0e0',
//                         color: chartType === 'bar' ? 'white' : 'black',
//                         border: 'none',
//                         borderRadius: '5px',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     Bar Chart
//                 </button>
//             </div>

//             {/* Render Line or Bar chart based on chartType */}
//             {chartType === 'line' ? (
//                 <Line data={data} options={options} />
//             ) : (
//                 <Bar data={data} options={options} />
//             )}
//         </div>
//     );
// }

// Sir code


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

export const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Comp 1",
        data: [12, 40, 30, 90, 80],
        backgroundColor: "yellow",
        borderColor: "red",
      },
      {
        label: "Comp2",
        data: [3000, 450, 900, 190, 880],
        backgroundColor: "Green",
        borderColor: "brown",
      },
      {
        label: "Comp 3",
        data: [10, 40, 9000, 1900, 200],
        backgroundColor: "orange",
        borderColor: "blue",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <h1>Line Chart</h1>
      <div style={{ width: "80%", height: "800px", margin: "auto" }}>
        <Line data={data} options={options} />
      </div>
    </>
  );
};
