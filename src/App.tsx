import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import FullChartView from "./components/FullChartView";

export type ChartType = "wordsToReview" | "misspellings" | "totalCounts" | null;

function App() {
  const [selectedChart, setSelectedChart] = useState<ChartType>(null);

  const handleChartSelect = (chartType: ChartType) => {
    setSelectedChart(chartType);
  };

  const handleCloseChart = () => {
    setSelectedChart(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Chart Dashboard</h1>
      </header>
      <main>
        <Dashboard onChartSelect={handleChartSelect} />
        {selectedChart && (
          <FullChartView chartType={selectedChart} onClose={handleCloseChart} />
        )}
      </main>
    </div>
  );
}

export default App;
