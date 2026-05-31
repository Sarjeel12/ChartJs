import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const BarChartAgeGaps = () => {
    const data = {
        labels: ['18-25', '26-30', '31-60+'],
        
        datasets: [
            {
                label: 'Male', 
                data: [25, 35, 40],                 
                borderColor: 'rgb(75, 192, 192)',  
                backgroundColor: 'rgba(75, 192, 192, 0.7)',  
                // borderWidth: 1,  
            },
            {
                label: 'Female', 
                data: [20, 30, 35],                 
                borderColor: 'rgb(255, 99, 132)',  
                backgroundColor: 'rgba(255, 99, 132, 0.7)',  
                // borderWidth: 1,  
            },
        ],
    };

    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <h1>Age Group Bar Chart</h1>
            <Bar data={data} />
        </div>
    );
}
