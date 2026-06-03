import { LineChart } from "./pages/LineChart";
import { CurrencyRateChart } from "./pages/CurrencyRateChart";
// import { DoughnutChart } from "./pages/DoughnutChart";
import { BarChartAgeGaps } from "./pages/BarChartAgeGaps";
import { ApiChart } from "./pages/ApiChart";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <CurrencyRateChart />
      <LineChart />
      <ApiChart />
      {/* <DoughnutChart /> */}
      <BarChartAgeGaps />
    </div>
  );
}
