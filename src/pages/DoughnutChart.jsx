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
  ArcElement
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const users = [
  { name: "Alice", gender: "Female", age: 25 },
  { name: "Bob", gender: "Male", age: 30 },
  { name: "Charlie", gender: "Male", age: 35 },
  { name: "David", gender: "Male", age: 40 },
];

const maleCount = users.filter((user) => user.gender === "Male");
const femaleCount = users.filter((user) => user.gender === "Female");

const data = {
    labels: ['Male', 'Female'],
    datasets: [
        {
            label:"Gender",
            data: [maleCount.length, femaleCount.length],
            backgroundColor: ['blue', 'pink'],
            borderColor: ['blue', 'pink'],
            borderWidth: 1,
        }
    ]
}

export default function DoughnutChart() {
    return(
        <>
            <h1>Doughnut Chart</h1>
            <div style={{ width: "80%", height: "800px", margin: "auto" }}>
                <Doughnut data={data} />
            </div>
        </>
    )
}
