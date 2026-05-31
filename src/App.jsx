import { LineChart } from "./pages/LineChart";
// import { DoughnutChart } from "./pages/DoughnutChart";
import { BarChartAgeGaps } from "./pages/BarChartAgeGaps";
import { ApiChart } from "./pages/ApiChart";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <LineChart />
      <ApiChart />
      {/* <DoughnutChart /> */}
      <BarChartAgeGaps />
    </div>
  );
}
